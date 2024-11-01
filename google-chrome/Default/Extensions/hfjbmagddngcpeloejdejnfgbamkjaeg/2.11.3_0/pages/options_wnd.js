import{CurCVer_ as e,CurFFVer_ as t,OnFirefox as i,OnChrome as n,OnEdge as o,$ as l,$$ as r,post_ as a,disconnect_ as s,isVApiReady_ as c,simulateClick_ as u,PageOs_ as d,toggleDark_ as m,browser_ as p,selfTabId_ as f,enableNextTick_ as h,nextTick_ as b,IsEdg_ as k,import2_ as v,BrowserName_ as w,pageTrans_ as A,isRepeated_ as V,prevent_ as g,pageLangs_ as y}from"./async_bg.js";import{bgSettings_ as _,showI18n_ as x,setupBorderWidth_ as T,Option_ as S,debounce_ as C,oTrans_ as $,delayBinding_ as j,didBindEvent_ as I,getSettingsCache_ as M}from"./options_base.js";import{saveBtn_ as E,exportBtn_ as H,savedStatus_ as O,onKeyMappingsError_ as L}from"./options_defs.js";import{manifest_ as D}from"./options_permissions.js";export let delayed_task;export const clear_delayed_task=()=>{delayed_task=null};h(8),b(x),T&&b(T),b(e=>{e.textContent=D.version_name||D.version,parseInt(D.version)>=2!=(D.manifest_version===3)&&(e.parentElement.nextElementSibling.textContent="-mv"+D.manifest_version)},l("#version")),j(E,"click",e=>{if(e!==!1)return void S.at().then(e=>{e&&E.onclick(!1)});let t=S.U;S.U=[],E.disabled=!0,E.firstChild.data=$("115_3"),H.disabled=!1,O(!1),window.onbeforeunload=null,window.addEventListener("beforeunload",N,!0),t.length!==0&&setTimeout(e=>{a(4,e.map(e=>_.B[e]))},100,t)},"on");let N=()=>{a(30)},P=e=>{g(e),a(15,{u:e.target.href,p:!0})},B=function(){var t;S.V=!1;for(let e in S.X)S.X[e].x();S.X.exclusionRules.J.length>0&&b(e=>{e.style.visibility=""},l("#exclusionToolbar"));let i=(t=M().vomnibarOptions)===null||t===void 0?void 0:t.styles;i&&/ inputmode=(no|false|0) /.test(` ${i instanceof Array?i.join(" "):i} `)&&b(e=>{for(let t of e)t.removeAttribute("inputmode")},r("[inputmode]")),document.addEventListener("keyup",K),j("[data-check]","input",function e(){for(let t of r("[data-check]"))t.removeEventListener("input",e);v("./options_checker.js")}),j("[data-auto-resize]","click",e=>{let t=l("#"+e.target.dataset.autoResize),i=t.scrollHeight,n=t.scrollWidth,o=n-t.clientWidth;if(i<=t.clientHeight&&o<=0)return;let r=Math.max(Math.min(innerWidth,1024)-120,550);t.style.maxWidth=n>r?r+"px":"",t.style.height=t.style.width="",o=n-t.clientWidth;let a=t.offsetHeight-t.clientHeight;a=o>0?Math.max(26,a):a+18,i+=a,o>0&&(t.style.width=t.offsetWidth+o+4+"px"),t.style.height=i+"px"}),j("[data-delay]","click",function(e){let t=this.dataset.delay,i=null;t==="event"&&(i=e||null),t!=="continue"&&e&&g(e),delayed_task=["#"+this.id,i],document.readyState!=="complete"?window.addEventListener("load",function e(t){t.target===document&&(window.removeEventListener("load",e),v("./options_ext.js"))}):v("./options_ext.js")},"on");let o=r("[data-permission]");o.length>0&&(t=>{function i(){let e=this.querySelector("[data-permission]");if(this.onclick=null,!e)return;let t=e.dataset.permission;e.placeholder=$("lackPermission",[t?`: "${t}"`:""])}let n=D.permissions||[];for(let o=t.length;0<=--o;){let l,r=t[o],a=r.dataset.permission;if(a[0]==="C"){if(e>=parseInt(a.slice(1)))continue;let t=a.split(",",2)[1]||",";if(t[0]==="."?window[t.slice(1)]!=null:t[0]!=="F"&&t[0]==="("&&matchMedia(t).matches)continue;l=["beforeChromium",[a.slice(1).split(",",1)[0]]]}else{if(a in D||n.includes(a))continue;l=["lackPermission",[a?":\n* "+a:""]]}b(e=>{e.disabled=!0;let t=$("invalidOption",[$(l[0],l[1])]);e instanceof HTMLInputElement&&e.type==="checkbox"?(e.nextElementSibling.tabIndex=-1,(e=e.parentElement).title=t,e.querySelector("span").style.textDecoration="line-through"):(e.value="",e.title=t,j(e.parentElement,"click",i,"on"),e instanceof HTMLSpanElement&&(e.style.textDecoration="line-through"))},r)}})(o),j("[data-vim-url]","mousedown",()=>{document.onmouseover=null,document.removeEventListener("vimiumData",s);for(let e of r("[data-vim-url]"))e.onmousedown=null,a(10,[e.dataset.vimUrl,-1]).then(([t])=>{e.removeAttribute("data-vim-url"),e.href=t,e.target="_blank",e.rel="noopener noreferrer"})},"on");let s=()=>{I("mousedown"),l("[data-vim-url]").onmousedown()};document.onmouseover=s,document.addEventListener("vimiumData",s);let c=["#openExtensionsPage","#browserSettingsSearch"].map(l);k&&b(e=>{let t="edge://extensions/",i=e.shift();for(let t of e)t.textContent=t.href=t.href.replace("chrome:","edge:");i.href=t+"shortcuts",i.textContent=t+"\u2026"},c),b(e=>{for(let t of e)j(t,"click",P)},c),b(e=>{let t=e.children[1],i=$("NewTabAdapter");t.title=i+" - "+$("webstore")},l("#chromeExtVomnibar"));let u=e=>{g(e);let t=e.currentTarget.dataset.for.split(":").slice(-1)[0],i=r(t),o=(i.find(e=>e.checked)||i[0]).nextElementSibling;z(o,n,e=>{VApi&&VApi.x(e.parentElement.parentElement)})};for(let e of r(".ref-text")){let t=e.dataset.for,i=t.slice(t.indexOf(":")+1),n=t.split(":")[0],o=S.X[n.replace("#","")],l=o.C,a=e.parentElement,s=()=>{b(([e,t,i])=>{let n=i.find(e=>e.checked)||i[0];if(e.textContent=$(n.checked?"145_2":"144"),t){let e=n.nextElementSibling,i=e.getAttribute("data-i2");t.textContent=i?A(i):e.textContent}},[a.querySelector(".status-of-related"),a.querySelector(".name-of-related"),i!==t?r(i):[o.z]])};o.C=()=>(s(),l.call(o)),j(e,"click",u,"on"),j(o.z,"change",s,!0)}},F=()=>{B(),B=F=null,d||b(e=>{e.textContent="Cmd"},l("#Ctrl"));for(let e in S.X)S.X[e].C();b(()=>{document.documentElement.classList.remove("loading")}),c.then(s),location.hash&&b(window.onhashchange),h(0,8),S.X.keyMappings.C=()=>a(7).then(L);let e=matchMedia("(prefers-color-scheme: dark)"),t=()=>{i.M&&a(11),setTimeout(n,34)},i=S.X.autoDarkMode,n=()=>{let t=i.y(),n=t===2?!!e&&e.matches:t===1;if(VApi&&VApi.z){let e=VApi.y().r;if(e){let t=(e.firstElementChild&&e.firstElementChild.localName==="span"?e.firstElementChild:e).children;for(let e of t)if(e.localName!=="style"&&(e.classList.toggle("D",n),e=e.firstElementChild||e,e.localName==="iframe")){let t=e.classList.contains("Find"),i=e.contentDocument,o=i.querySelector("style#dark");if(o&&o.sheet&&(o.sheet.disabled=!n),i.body.classList.toggle(t?"D":"has-dark",n),t){let e=VApi.y().f;e&&e.parentElement.classList.toggle("D",n)}}}a(3,{key:"d",val:n}).then(e=>{VApi.z.d=e})}m(n?t===2?2:1:0)};i.C=t,b(()=>{i.J===2&&c.then(t),e.onchange=t}),b(()=>{setTimeout(()=>{let e=document.createElement("script");e.src="loader.js",e.async=!0,document.head.append(e),document.documentElement.classList.add("smooth")},120)})},K=e=>{let t=e.target,i=e.keyCode;if(i===13)t instanceof HTMLAnchorElement?t.hasAttribute("href")||(setTimeout(e=>{u(e),e.blur()},0,t),g(e)):(e.ctrlKey||e.metaKey)&&(g(e),t.blur&&t.blur(),O()&&(I("click"),E.onclick()));else{if(i!==32)return;if(t instanceof HTMLSpanElement&&t.parentElement instanceof HTMLLabelElement){g(e);let i=t.parentElement.control;i.disabled||u(i)}}};j(S.X.userDefinedCss.z,"input",C(()=>{let e=S.X.userDefinedCss,t=e.z.classList.contains("debugging");if(e.M&&!t||!VApi||!VApi.z)return;let i=e.y(),n=i===e.J,o=a(8,[i,f]),l=VApi.y().r;o.then(t=>{e.z.classList.toggle("debugging",!n),VApi.t({k:l||n?0:1,t:$("livePreview")||"Live preview CSS\u2026",H:t.ui,f:t.find});let i=l&&l.querySelector("iframe.Omnibar"),o=i&&i.contentDocument;if(o){let e=o.querySelector("style.debugged")||o.querySelector("style#custom");e||(e=o.createElement("style"),e.id="custom"),e.parentNode||o.head.append(e),e.classList.add("debugged"),e.textContent=(n?"\n":"\n.inactive { opacity: 1; }\n")+(t.omni&&t.omni+"\n"||"")}})},1200,null,0));export const noBlobSupport_cr_mv2_=()=>!1;j("#importButton","click",()=>{let e=l("#importOptions");e.onchange?e.onchange(null):u(l("#settingsFile"))},"on"),b(t=>{let i=_.S,n=w,o=e;if(!n){let t=navigator.userAgentData,i=t.brands.filter(t=>(parseInt(t.version)===e&&t.brand!=="Chromium"||t.brand.includes("Opera"))&&!` ${t.brand} `.includes(" Not ")),l=i.find(e=>/\b(Edge|Opera)\b/.test(e.brand))||i[0],r=k?"MS Edge":"";n=l?l.brand:t?r||"Chromium":(/\bChromium\b/.exec(navigator.userAgent)||[""])[0]||r||"Chrome",l&&(o=parseInt(l.version))}t.textContent=n+" "+o+(n==="Chromium"?$("based"):"")+$("comma")+$("NS")+($(i)||i[0].toUpperCase()+i.slice(1))},l("#browserName")),document.addEventListener("keydown",e=>{if(!d&&e.metaKey)return void K(e);if(e.keyCode!==32){if(!VApi||!VApi.z||"input textarea".includes(document.activeElement.localName))return;let t=VApi.r[3]({c:" ",e,i:e.keyCode,v:""},11);if(t==="a-f12"){let e=l("#importOptions"),t=e.selectedIndex,i=()=>{e.onchange&&e.onchange(null),e.selectedIndex=t};l("#recommendedSettings").selected=!0,e.onchange!=null?i():setTimeout(i,100)&&e.click()}else t==="?"&&l("#showCommands").click();return}let t=e.target;t.localName==="span"&&t.parentElement.localName==="label"&&e.preventDefault()});export const onHash_=e=>{let t;if((e=e.slice(e[1]==="!"?2:1))&&/^[a-z][\w-]*$/i.test(e))if(t=l(`[data-hash="${e}"]`))I("click"),t.onclick&&t.onclick(null,"hash");else if(t=l(`[id="${e.replace(/-/g,"")}" i]`)){if(t.dataset.model!=null){if(t.localName==="input"&&t.type==="checkbox"){let e=t.parentElement,i=e.parentElement;t=i.localName==="td"?i:e}t.classList.add("highlight")}let e=e=>{if(e&&e.target!==window)return;window.onload&&(window.onload=null,scrollTo({behavior:"instant",top:0,left:0})),z(t);let i=t.localName;i!=="button"&&i!=="a"||u(t)};if(document.readyState==="complete")return e();window.scrollTo(0,0),window.onload=e}};window.onhashchange=()=>{onHash_(location.hash)};let z=(e,t,i)=>{let n=-1;e.scrollIntoView({block:t?"nearest":"center",behavior:"smooth"});let o=setInterval(()=>{let t=scrollY;t===n&&(clearInterval(o),i&&i(e),e.focus()),n=t},72)};_.E().then(F),a(7).then(e=>{b(L,e)}),a(12).then(e=>{e!=="?"&&b(([e,t])=>{e.textContent=t},[l("#questionShortcut"),e])}),j(document,"click",function e(){let t=VApi,i=t&&t.y();i&&i.r&&(document.removeEventListener("click",e,!0),i.r.addEventListener("click",e=>{let t,i=e.target;VApi&&i.classList.contains("HelpCommandName")&&(t=i.textContent.slice(1,-1),VApi.p({H:18,s:t}))},!0),document.addEventListener("click",e=>{if(e.target.localName!=="a"||!e.ctrlKey&&!e.metaKey||f<-1)return;let t=VApi,i=t&&t.b,n=i&&i.$();if(n&&n.a&&n.k&&n.k.c===null){let e=n.m&-17;e<32&&e&2&&!(e&1)&&setTimeout(()=>{f>=0&&(p.tabs?p.tabs.update(f,{active:!0},()=>{}):a(25,{module:"tabs",name:"update",args:[f,{active:!0}]}))},0)}}))},!0),j("#testKeyInputBox","focus",function e(t){let i,n,o=t.currentTarget,r=l("#testKeyInput"),a=(e,t)=>{let i=e!==void 0?r.textContent=e:r.textContent;if(e&&t!==0&&document.activeElement===r){let t=getSelection(),i=r.firstChild;t.setBaseAndExtent(i,e.length,i,e.length)}return i},s=r.previousElementSibling.textContent,c=0,u=!1,d=0;r.onkeydown=e=>{if(u&&(u=!1,r.classList.remove("outline")),e.keyCode!==229&&e.key!=="Process"){if(VApi&&!V(e)){let t={c:" ",e,i:e.keyCode,v:""},o=VApi.r[3](t,11),l=o==="esc"||o==="c-[",c=VApi.z.l&4?VApi.r[3](t,10):o;if(!o&&(t.i===16||e.key==="Shift"))return;let u=o.length>1?`<${o}>`:o||"(empty)",m=c===o?"":c.length>1?`<${c}>`:c||"(empty)";if(i=e,n=VApi.z.l,a(m?`${u} / ${m}`:u),VApi.f(7,Object.setPrototypeOf({i:!0,r:0,k:"v-esc:test",p:!0,h:s+` (${++d})`},null),1,0),o==="enter"||o==="tab"||o==="s-tab"||l||o==="f12")return void((o==="enter"||l)&&r.blur())}c=e.keyCode,g(e)}else a("")},r.onkeyup=e=>{e.keyCode===c&&g(e)},r.onfocus=()=>{VApi&&(r.classList.add("outline"),u=!0,d=0,VApi.f(7,Object.setPrototypeOf({i:!0,r:0,k:"v-esc:test",p:!0,h:s},null),1,0))},r.onblur=()=>{VApi&&(VApi.f(16,Object.setPrototypeOf({type:"keydown",key:"Esc",esc:!0},null),1,0),VApi.h(1,0,s+(d?` (${d})`:""))),d=0},r.addEventListener("compositionend",()=>{a("")}),r.onpaste=g,r.onclick=()=>{r.focus()};let m=l("#testKeyInInput");m.onchange=()=>{m.checked?r.contentEditable="true":r.removeAttribute("contenteditable"),r.focus()},o.removeEventListener("focus",e,!0),o.addEventListener("blur",e=>{let t=u?e.relatedTarget:null;(t?!o.contains(t):u)&&(u=!1,r.classList.remove("outline"))},!0),S.Y=()=>{i&&n!==VApi.z.l&&r.onkeydown(i)}},!0);