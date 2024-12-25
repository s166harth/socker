#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail; shopt -s nullglob

btrfs_path='/var/socker'

# Helper function to check if a subvolume exists
function socker_check() {
    btrfs subvolume list "$btrfs_path" | grep -qw "$1" && echo 0 || echo 1
}

function socker_init() {
   # 42002-42254 will help us while networking
    uuid="img_$(shuf -i 42002-42254 -n 1)"

    if [[ -d "$1" ]]; then
        if [[ "$(socker_check "$uuid")" == 0 ]]; then
            echo "Image '$uuid' already exists. Skipping creation."
            return
        fi

        btrfs subvolume create "$btrfs_path/$uuid" > /dev/null
        
        cp -rf --reflink=auto "$1"/* "$btrfs_path/$uuid" > /dev/null
        
        [[ ! -f "$btrfs_path/$uuid/img.source" ]] && echo "$1" > "$btrfs_path/$uuid/img.source"

        echo "Created image: $uuid"
    else
        echo "Error: No directory named '$1' exists."
    fi
}
function socker_rm() {
    if [[ $# -ne 1 ]]; then
        echo "Usage: socker_rm <image_or_container_id>"
        return
    fi

    local id="$1"

    if [[ "$(socker_check "$id")" == 1 ]]; then
        echo "Error: No image or container with ID '$id' exists."
        return
    fi

    btrfs subvolume delete "$btrfs_path/$id" > /dev/null || {
        echo "Error: Failed to remove btrfs subvolume for '$id'."
        return
    }

    echo "Successfully removed: $id"
}

function socker_list() {
    echo -e "ID\t\t\t\tSOURCE"
    for entry in "$btrfs_path"/*; do
        local id
        id="$(basename "$entry")"
        if [[ -f "$entry/img.source" ]]; then
            echo -e "$id\t\t\t$(cat "$entry/img.source")"
        else
            echo -e "$id\t\t\t<unknown>"
        fi
    done
}

function socker_pull() {
    if [[ $# -ne 2 ]]; then
        echo "Usage: socker_pull <image_name> <tag>"
        return
    fi

    local image_name="$1"
    local tag="$2"
    
    # Obtain a Docker token for authentication
    local token
    token="$(curl -sL -o /dev/null -D- -H 'X-Docker-Token: true' "https://index.docker.io/v1/repositories/$image_name/images" \
        | tr -d '\r' \
        | awk -F ': *' '$1 == "X-Docker-Token" { print $2 }')"
    
    # Verify if a token was retrieved
    if [[ -z "$token" ]]; then
        echo "Error: Failed to fetch authentication token for '$image_name'."
        return
    fi

    local registry='https://registry-1.docker.io/v1'
    
    # Fetch the image ID for the specified tag
    local image_id
    image_id="$(curl -sL -H "Authorization: Token $token" "$registry/repositories/$image_name/tags/$tag" | sed 's/"//g')"

    if [[ -z "$image_id" || "${#image_id}" -ne 64 ]]; then
        echo "Error: No image named '$image_name:$tag' exists."
        return
    fi

    # Retrieve the image's ancestry (layer IDs)
    local ancestry
    ancestry="$(curl -sL -H "Authorization: Token $token" "$registry/images/$image_id/ancestry")"
    
    if [[ -z "$ancestry" ]]; then
        echo "Error: Failed to fetch image ancestry for '$image_name:$tag'."
        return
    fi

    # Parse ancestry and prepare a temporary directory for layers
    IFS=',' read -r -a layers <<< "${ancestry//[\[\] \"/]}"
    local tmp_uuid="$(uuidgen)"
    mkdir -p /tmp/"$tmp_uuid"

    # Download and extract each layer
    for layer_id in "${layers[@]}"; do
        local layer_file="/tmp/$tmp_uuid/layer.tar"
        curl -#L -H "Authorization: Token $token" "$registry/images/$layer_id/layer" -o "$layer_file"
        tar xf "$layer_file" -C /tmp/"$tmp_uuid" && rm "$layer_file"
    done

    # Record the image source
    echo "$image_name:$tag" > /tmp/"$tmp_uuid"/img.source

    # Initialize the image from the extracted layers
    socker_init /tmp/"$tmp_uuid"
    
    # Clean up the temporary directory
    rm -rf /tmp/"$tmp_uuid"
}

