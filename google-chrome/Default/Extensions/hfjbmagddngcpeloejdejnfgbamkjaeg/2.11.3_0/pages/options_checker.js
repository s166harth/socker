import{browser_ as e,OnFirefox as t,post_ as r}from"./async_bg.js";import{bgSettings_ as n,Option_ as s,oTrans_ as l}from"./options_base.js";import{CssSelectorOption_ as i,TextOption_ as o}from"./options_defs.js";let u=/\s/g,c=(e,t)=>{let r=0,n=e.length,s=t;for(;s<n;s++)switch(e[s]){case"{":case"[":r++;break;case"]":case"}":if(--r,r>0)break;default:{let t=(e[s]==='"'?/^"([^"\\]|\\[^])*"/:r>0?/^(?:[$a-zA-Z_][$\w]*|\d[\d.eE+-]|\s+)/:/^\S+/).exec(e.slice(s));if(!t&&!r&&/\s/.test(e[s]))return s;s+=t?t[0].length-1:0}}if(r>0){let r=/^\S*/.exec(e.slice(t));return t+(r?r[0].length:0)}return s},a={p:0,ee:null,e(){function e(e,t,r){let n="";r.length>2&&r[r.length-2]===":"&&(n=r.slice(-2),r=r.slice(0,-2)),t=t.toLowerCase();let s=r.length>1,l=t.includes("s-"),i=r.toUpperCase();if(!s){if(!t)return e;if(l&&t.length<3)return n?`<${i}${n}>`:i}if(t.includes("v-"))return`<v-${r}>`;let o=r.toLowerCase();var u;return t=(u=t).length<4?u:u.slice(0,-1).split("-").sort().join("-")+"-",r!==o&&!l&&(t+="s-"),t||s||n?`<${t}${o}${n}>`:r}this.ee=t=>t.replace(/<(?!<)((?:[ACMSVacmsv]-){0,4})(.[^>]*)>/g,e),this.e=null},te:(e,t)=>t?"\\u00"+t:"\\\\",re(e){let t=e.slice(1),r="",n="";t.startsWith('"')&&t.endsWith('"')?(r=t.slice(1,-1),r=r.replace(/\\(?:x([\da-z]{2})|\\)/gi,a.te),t=`"${r}"`):t&&"{[".includes(t[0])&&(t=t.replace(/([{,](?: |\x7f\d*\x80)*)(\w+):|"(?:[^"\\]|\\[^])*"/g,(e,t,r)=>t?`${t}"${r}":`:e),n=t);let s=t.includes("\x7f"),l=s&&!r?(/^(?:\x7f\d*\x80)+/.exec(t)||[""])[0]:"",i=!s||r?"":(/(?:\x7f\d*\x80)+$/.exec(t.slice(l.length+1))||[""])[0];try{let r=JSON.parse(s?t.replace(/\x7f\d*\x80/g,""):t);if(typeof r!="string"&&!/\s/.test(t))return r===!0?"":n?"="+n:e;t=s?JSON.parse(t.slice(l.length,i?-i.length:void 0)):r}catch(e){t=s?r||t.slice(l.length,i?-i.length:void 0):r||t}return t=t&&typeof t=="string"?t.replace(/\\(\\|s)/g,(e,t)=>t==="s"?" ":e):t,t=t&&JSON.stringify(t).replace(u,a.ne),"="+l+t+i},ne:e=>"\\u"+(e.charCodeAt(0)+1048576).toString(16).slice(2),se(e,t,r,n,s){let l=a.ee(n);if(l!==n&&(console.log("KeyMappings Checker:",n,"is corrected into",l),n=l),r.toLowerCase()==="mapkey"){let e=/^\S+/.exec(s.trimLeft()),t=e&&e[0],r=t&&a.ee(t);r!==t&&(console.log("KeyMappings Checker:",t,"is corrected into",r),s=s.replace(t,r))}else if(!r.startsWith("unmap")){let e=s.trimLeft().split(/\s/,1)[0];if(e){let t=s.indexOf(e)+e.length;n+=s.slice(0,t),s=s.slice(t)}}return a.le("",t,n,s)},ie:(e,t,r)=>t.replace("map","mapKey")+(r.length===3?r[1]:r),le(e,t,r,n){if(/\s(createTab|openUrl)/.test(r)&&!/\surls?=/i.test(n)&&(n=a.oe(n)),!n)return t+r;let s=0,l=-1,i="";for(;l<n.length&&(l=n.indexOf("=",l+1),i+=n.slice(s,l>=0?l:void 0),!(l<0));){let e=l+1;if(e<n.length&&'"[{'.includes(n[e]))e=c(n,e);else{u.lastIndex=l;let t=u.exec(n);e=t?t.index:n.length}i+=a.re(n.slice(l,e)),s=l=e}return t+r+i},oe(e){let t=[];e=(e+" ").replace(/\s+(\w+:[^=\s]+|[^\s=]+:\/\/\S+)(?=\s|$)/g,(e,r)=>(t.push(r),"")).trimRight();let r=t.length;return e+(r>1?" urls=":r?" url=":"")+(r?JSON.stringify(r>1?t:t[0]):"")},Z(e){return e?(this.e&&this.e(),e=(e=(e=(e=(e=(e=e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,e=>e[1]==="\n"?"\x7f\x80":`\x7f${e.length-3}\x80`)).replace(/^([ \t]*(?:#\s?)?map\s+(?:<(?!<)(?:.-){0,4}.[\w:]*?>|\S)\s+)(<(?!<)(?:[ACMSVacmsv]-){0,4}.\w*?>|\S)(?=\s|$)/gm,this.ie)).replace(/^([ \t]*(?:#\s?)?(map(?:[kK]ey|!)?|run!?|unmap!?)\s+)(\S+)([^\n]*)/gm,this.se)).replace(/^([ \t]*(?:#\s?)?(?:command|shortcut)\s+)(\S+)([^\n]*)/gm,this.le)).replace(/\x7f(\d*)\x80/g,(e,t)=>t===""?"\\\n":"\\\\\n"+" ".repeat(+t))).replace(/\\(?:\n|\\\n\s*)$/,"").trim()):e}};s.X.keyMappings.q=a,s.X.searchUrl.q={p:0,Z(e){return r(14,e).then(e=>{let t=s.X.searchUrl;if(e==null)return t.H();let r=e[1];if(!e[0]){let e=l("nonPlainURL",[r]);return console.log("searchUrl checker:",e),t.ue(e),t.H()}return t.ue(""),r})}},s.X.newTabUrl.q={p:0,Z(t){return r(13,/^\/?pages\/[a-z]+.html\b/i.test(t)?e.runtime.getURL(t):t.toLowerCase()).then(([e,r])=>(e=e.split("?",1)[0].split("#",1)[0],t.startsWith("http")||r!==1&&!/^(?!http|s?ftp)[a-z\-]+:\/?\/?newtab\b\/?/i.test(t)?t:n.P.newTabUrl))}},s.X.vimSync.I=function(){if(!this.M&&this.y()===!0){let e=s.X,t=0;for(let r in e)e[r].M||++t;let r=t>1;if(setTimeout(alert,100,l(r?"changedBeforeSync":"warningForSync")),r)return!1}return!0},s.X.keyboard.q={p:0,Z:e=>e==null||e.length<2||!(e[0]>0&&e[0]<4e3)||!(e[1]>0&&e[1]<1e3)?n.P.keyboard:[+e[0],+e[1]].concat(e.slice(2))};let f={},h=(e,t,r)=>{if((t=t.replace(/[,;]\s*$/,"").trim())===":default")return!0;if(t.includes(","))return t.split(",").map(t=>h(e,t,r)).reduce((e,t)=>e&&t,!0);let n=t?f[t]:1;if(n==null){try{return e.z.querySelector(t),f[t]=1,!0}catch(e){}n=f[t]=0}return n||r.push(t),!!n},m=(e,t)=>{let r=[],n={s:";",c:""};for(let e of t.split("\n")){let t=e.trim();if(!t||t.startsWith("//")||t.startsWith("# ")){r.push({s:"",c:t});continue}let s=e.indexOf("//"),l=(s>0?e.slice(0,s):e).replace(/;[\s;]+|,[\s,]+/g,e=>e[0]).replace(/,;/g,";").split(";").map((e,t,r)=>(e=t?e.trim():e.trimRight(),{s:t<r.length-1?e+";":e,c:""}));l[l.length-1].s||l.pop(),s>0&&(l[l.length-1].c=e.slice(s));let i=n.s.slice(-1);i!==";"&&l[0].s.includes("##")?n.s=(i===","?n.s.slice(0,-1):n.s)+";":",;#".includes(i)||",;".includes(l[0].s[0])||(n.s+=","),r.push(...l),n=r[r.length-1]}n.s.endsWith(";")||(n.s=(n.s.endsWith(",")?n.s.slice(0,-1):n.s)+";");let s=[],o={l:[{s:";",c:""}],s:"",i:0};for(let e of r)o.l[o.l.length-1].s.endsWith(";")?s.push(o={l:[e],s:"",i:0}):(o.l.push(e),o.s||(o.s=e.s)),!o.s&&e.s&&(o.s=e.s,o.i=s.length-r.length*(e.s.includes("##")?2:1));s.sort((e,t)=>e.i-t.i);let u=[],c="";for(let t of s){let r=";",n=0;for(let s of t.l){if(!s.s){c+=s.c+"\n";continue}n||(n=s.s.includes("##")?2:1);let t=s.s.replace(/\s{2,}/g," ").replace(/^ | ?([,>]) ?/g,(e,t)=>t||"  ");r!==";"&&(t=n===2?t[0]!==" "?"  "+t:t:t[0]!==" "?t:t.trimLeft()),t=i.ce(t);let l=t.indexOf("##");t.slice(l>=0?l+2:0).replace(/\n /g,"").split(",").forEach(t=>h(e,t,u)),t=t.replace(/, | > /g,e=>e.trim()),t=s.c?t+" "+s.c+"\n":t+"\n",c+=t,r=s.s.slice(-1)}}return c=c.trim(),(c.endsWith(";")||c.endsWith(","))&&(c=c.slice(0,-1)),u.length>0?(u.unshift(l("invalidCss")),e.ue(u.join("\n"),"has-error")):(f={},e.ue("")),c};s.X.passEsc.q={p:0,Z:m.bind(null,s.X.passEsc)},s.X.ignoreReadonly.q={p:0,Z:m.bind(null,s.X.ignoreReadonly)};