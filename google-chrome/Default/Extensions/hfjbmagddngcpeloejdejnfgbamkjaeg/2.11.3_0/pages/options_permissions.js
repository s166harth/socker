import{$ as e,OnEdge as o,browser_ as r,OnFirefox as t,OnChrome as i,nextTick_ as n,CurCVer_ as s,IsEdg_ as l,post_ as m,pageLangs_ as a,prevent_ as p}from"./async_bg.js";import{Option_ as c,oTrans_ as d,bgSettings_ as f,delayBinding_ as u}from"./options_base.js";import{registerClass_ as _,createNewOption_ as h,TextOption_ as g}from"./options_defs.js";let v=r.permissions,b=e=>{if(!v)return function(){return m(25,{module:"permissions",name:e,args:[].slice.call(arguments)})};let o=v[e];return function(){let e=[].slice.call(arguments);return new Promise(t=>{e.push(e=>{let o=r.runtime.lastError;return t(o?[void 0,o]:[e,void 0]),o}),o.apply(v,e)})}},w={contains:b("contains"),request:b("request"),remove:b("remove")},P=navigator.permissions,O="downloads.shelf",y="chrome://new-tab-page/*",U="chrome://*/*",k={"clipboard-read":"opt_clipboardRead",[U]:"opt_chromeUrl",[y]:"opt_cNewtab",[O]:"opt_closeShelf"},x=e("#optionalPermissionsTemplate"),C=x.content.firstElementChild,B=x.parentElement,S=e("#navPermissionTip"),j=e("#gotoCrSC"),q=[];export const manifest_=r.runtime.getManifest();let F=manifest_.optional_permissions||[],N=["clipboard-read"];export class OptionalPermissionsOption_ extends c{e(){u(this.z,"change",this.L)}y(){return q.map(e=>e.z.indeterminate?"1":e.z.checked?"2":"0").join("")}H(){return q.map(e=>e.J).join("")}c(e){for(let o=0;o<q.length;o++){let r=q[o];r.z.checked=e[o]==="2",r.z.indeterminate=e[o]==="1",r.pe===2&&e[o]!=="1"&&(r.z.parentElement.title=S.innerText)}}m(e){let o=[],r=[],t=[],i={},s=1,m=!1;for(let n=0;n<q.length;n++){let l=q[n],a=+e[n];if(l.J===a)continue;let c=l.de===y?"chrome://newtab/*":"";l.J=a,l.de===U&&f.$("allBrowserUrls")!==(a===2)&&(s++,Promise.resolve(f.$("allBrowserUrls")).then(e=>{e!==(a===2)?f.N("allBrowserUrls",a===2).then(p):p()})),l.pe===2?a===2?t.push(l.de):m=!0:a?(l.de===O&&o.push("downloads"),(l.pe===1?r:o).push(l.de),c&&r.push(c),i[l.de]=l):(s++,w.remove(l.pe===1?{origins:c?[l.de,c]:[l.de]}:{permissions:l.de===O?["downloads",l.de]:[l.de]}).then(([e,o])=>{let r="Can not remove the permission %o : ",t=o&&o.message||o;(o||!e)&&console.log(r,l.de,t);let i=l.z.parentElement;g.ue(o?r.replace("%o",l.de)+t:"",void 0,i),p()}))}let a=(e,[o,r])=>{if((r||!o)&&console.log("Can not request permissions of %o :",e,r&&r.message||r),!o){for(let o of e){let e=i[o];if(!e)continue;e.J=0;let t=e.z.parentElement;if(!r){g.ue("",void 0,t);continue}let s=(r&&r.message||JSON.stringify(r))+"";o.startsWith("chrome://")&&s.includes("Only permissions specified in the manifest")&&o.startsWith("chrome:")&&(s=d("optNeedChromeUrlFirst"),s=l?s.replace("chrome","edge"):s),s=d("exc")+s,g.ue(s,void 0,t),n(()=>{t.title=s})}this.x()}p()},p=()=>{s--,s>0||Promise.all(q.map(H)).then(()=>{this.x(),m&&j.click()})};if(s+=(o.length&&1)+(r.length&&1),o.length&&w.request({permissions:o}).then(a.bind(0,o)),r.length&&w.request({origins:r}).then(a.bind(0,r)),t.includes("clipboard-read")){let e=navigator.clipboard;s++,e.readText().catch(()=>{}).then(p)}return p(),Promise.resolve(e)}}_("OptionalPermissions",OptionalPermissionsOption_);let E=()=>{let o=document.createDocumentFragment(),r=q.some(e=>e.de==="bookmarks");for(let e of q){let t=e.de,i=document.importNode(C,!0),n=i.querySelector("input"),s=d(k[t]||`opt_${t}`)||t,m="";t.startsWith("chrome:")&&(s=l?s.replace("chrome:","edge:"):s,m=d("optOfChromeUrl").replace(l?"chrome":"edge","edge")),n.name=t,r&&(m+=d("rec_perm")),n.nextElementSibling.textContent=s+m,t=="bookmarks"&&o.childElementCount+1<q.length&&(i.classList.add("after-importants"),r=!1),o.append(i),e.z=n}F.length===1||F.length===2&&a==="en"||(e("#optionalPermissionsHelp").classList.add("has-many"),B.classList.add("has-many")),B.append(o),u(B,"input",T,!0),j&&(u(j,"click",J,!0),l&&(j.textContent=j.textContent.replace("chrome:","edge:"),j.href=j.href.replace("chrome:","edge:")))},H=e=>{let{pe:o,de:r}=e;return(o===2?P.query({name:r}).then(e=>[e.state==="prompt"?1:e.state==="granted"?2:0,void 0],e=>[void 0,e]):w.contains(o===1?{origins:[r]}:{permissions:r===O?["downloads",r]:[r]})).then(([o])=>{let t=o?e.pe===2?o:r!==U||f.$("allBrowserUrls")?2:1:0;e.J=t})},T=e=>{let o=e.target,r=q.find(e=>e.z===o);if(!r)return void(o.localName!=="label"&&o.parentElement.localName!=="label"||(p(e),e.stopImmediatePropagation()));let t=o.checked;if(r.de===U||r.de===y){let e=r.de===y,i=e?U:y,n=q.find(e=>e.de===i);n&&(e&&t&&!n.z.checked?(n.z.checked=!1,n.z.indeterminate=!0):!e&&t&&o.indeterminate?o.indeterminate=!1:(n.z.checked=t,n.z.indeterminate=!1))}r.pe===2&&(o.checked||(o.indeterminate=!0))},J=e=>{p(e),m(15,{u:e.target.href,p:!1})};{let e=s>116?[O]:["downloads"];l&&e.push(y),e.push("cookies"),F=F.concat(manifest_.optional_host_permissions||[]),F=F.filter(o=>!e.some(e=>typeof e=="string"?o===e:e.test(o)))}if(F.length||N.length){for(let e of N)q.push({de:e,pe:2,J:1,z:null});for(let e of F)q.push({de:e,pe:e.includes(":")?1:0,J:0,z:null});S&&n(()=>{S.style.display=""}),n(E,9),Promise.all(q.map(H)).then(()=>{n(()=>{B.dataset.model="OptionalPermissions",h(B).x()})})}else n(()=>{e("#optionalPermissionsHelp").style.display="none"},9);n(([e,o])=>{r.extension.isAllowedIncognitoAccess?(r.extension.isAllowedIncognitoAccess(o=>{e.checked=o}),r.extension.isAllowedFileSchemeAccess(e=>{o.checked=e})):m(33).then(([r,t])=>{e.checked=r,o.checked=t}),o.onclick=e.onclick=e=>{p(e),m(15,{u:"chrome://extensions/?id="+r.runtime.id,p:!1})}},[e("#in-incognito"),e("#on-file-urls")]);