"use strict";VApi.e=(i,e)=>{var n,o,r=VimiumInjector;i===6&&r?(n=removeEventListener,(o=r.checkIfEnabled)&&(n("hashchange",o),n("hashchange",o,!0)),r.alive=0,r.destroy=r.checkIfEnabled=r.getCommandCount=null,r.$=r.$r=r.$m=null,r.clickable=null,r.callback&&r.callback(3,"destroy")):i===3&&e.showPicker()},(()=>{var i,e,n,o,r,t=VApi,l=VimiumInjector,c=chrome.runtime,m=e=>{var n,o,r,t=VimiumInjector;return t.eval&&(n=t.eval(e))!==e?n:((r=o=(i=i||new Promise(i=>{var e=document.createElement("script");e.src=`${location.protocol}//${t.host||t.id}/lib/simple_eval.js`,e.onload=()=>{e.remove(),i()},(document.head||document.documentElement).appendChild(e)})).then(()=>VApi.v!==m?(VApi.v=VApi.v.tryEval||VApi.v)(e):void 0)).result=o.then(i=>i&&"ok"in i&&"result"in i?i.result:i),r.ok=o.then(i=>i&&"ok"in i&&"result"in i?i.ok:i),o)},u=null,s=t.r;s[0](32,0,i=>{u=i,VApi.z&&VimiumInjector.$r(4)}),s[2](2,(i,e)=>u?u[i].replace(/\$\d/g,e?i=>typeof e=="string"?e:e[+i[1]-1]:""):"$Msg-"+i),e=top!==window&&frameElement&&parent.VimiumInjector,(n=l.clickable=e&&e.clickable||l.clickable)&&s[2](1,n),l.checkIfEnabled=(i=>{i({H:10,u:location.href})}).bind(null,s[1]),l.getCommandCount=(i=>{var e=i(0);return e!=="-"?parseInt(e,10)||1:-1}).bind(null,s[2]),s[1]=s[2]=void 0,c.onMessageExternal?l.alive=1:(l.alive=.5,o="color:red",r="color:auto",console.log("%cVimium C%c: injected %cpartly%c into %c%s",o,r,o,r,"color:#0c85e9",c.id||location.host,".")),l.$r=i=>{var e;i!==1?i!==4||((e=VimiumInjector).cache=VApi.z,u&&(VApi.v=m,e.callback&&e.callback(2,"complete"))):(e=VimiumInjector)&&e.reload(1)},l.$=t,l.cache=t.z,l.destroy=t.d,l.callback&&l.callback(1,"initing"),t.z&&l.$r(4)})();