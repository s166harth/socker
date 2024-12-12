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
        echo "Usage: bocker_rm <image_or_container_id>"
        return
    fi

    local id="$1"

    if [[ "$(bocker_check "$id")" == 1 ]]; then
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

