/*!
 * Viewer.js v1.11.4
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-07-15T08:38:40.923Z
 */
((i,t)=>{typeof define=="function"?define(t):(i=typeof globalThis!="undefined"?globalThis:i||self).Viewer=t()})(this,function(){"use strict";function i(i,t){var e,s=Object.keys(i);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(i),t&&(e=e.filter(t=>Object.getOwnPropertyDescriptor(i,t).enumerable)),s.push.apply(s,e)),s}function t(t){var e,s;for(e=1;e<arguments.length;e++)s=null!=arguments[e]?arguments[e]:{},e%2?i(Object(s),!0).forEach(i=>{r(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(i=>{Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))});return t}function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?i=>typeof i:i=>i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i,e(i)}function s(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function h(i,t){var e,s;for(e=0;e<t.length;e++)(s=t[e]).enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}function r(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function o(i){return typeof i=="string"}function a(i){return typeof i=="number"&&!Q(i)}function n(i){return i===void 0}function l(i){return e(i)==="object"&&i!==null}function c(i){var t,e;if(!l(i))return!1;try{return e=(t=i.constructor).prototype,t&&e&&_.call(e,"isPrototypeOf")}catch(i){return!1}}function d(i){return typeof i=="function"}function v(i,t){var e,s;if(i&&d(t))if(Array.isArray(i)||a(i.length))for(e=i.length,s=0;s<e&&t.call(i,i[s],s,i)!==!1;s+=1);else l(i)&&Object.keys(i).forEach(e=>{t.call(i,i[e],e,i)});return i}function u(i,t){var e=i.style;v(t,(i,t)=>{ti.test(t)&&a(i)&&(i+="px"),e[t]=i})}function m(i,t){return!(!i||!t)&&(i.classList?i.classList.contains(t):i.className.indexOf(t)>-1)}function w(i,t){if(i&&t)if(a(i.length))v(i,i=>{w(i,t)});else if(i.classList)i.classList.add(t);else{var e=i.className.trim();e?e.indexOf(t)<0&&(i.className=e+" "+t):i.className=t}}function b(i,t){i&&t&&(a(i.length)?v(i,i=>{b(i,t)}):i.classList?i.classList.remove(t):i.className.indexOf(t)>=0&&(i.className=i.className.replace(t,"")))}function f(i,t,e){t&&(a(i.length)?v(i,i=>{f(i,t,e)}):e?w(i,t):b(i,t))}function p(i){return i.replace(ei,"$1-$2").toLowerCase()}function g(i,t){return l(i[t])?i[t]:i.dataset?i.dataset[t]:i.getAttribute("data-"+p(t))}function y(i,t,e){l(e)?i[t]=e:i.dataset?i.dataset[t]=e:i.setAttribute("data-"+p(t),e)}function k(i,t,e){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=e;t.trim().split(J).forEach(t=>{if(!si){var r=i.listeners;r&&r[t]&&r[t][e]&&(h=r[t][e],delete r[t][e],Object.keys(r[t]).length===0&&delete r[t],Object.keys(r).length===0&&delete i.listeners)}i.removeEventListener(t,h,s)})}function x(i,t,e){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=e;t.trim().split(J).forEach(t=>{if(s.once&&!si){var r=i.listeners,o=r===void 0?{}:r;h=function(){delete o[t][e],i.removeEventListener(t,h,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(i,a)},o[t]||(o[t]={}),o[t][e]&&i.removeEventListener(t,o[t][e],s),o[t][e]=h,i.listeners=o}i.addEventListener(t,h,s)})}function T(i,e,s,h){var r;return d(Event)&&d(CustomEvent)?r=new CustomEvent(e,t({bubbles:!0,cancelable:!0,detail:s},h)):(r=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,s),i.dispatchEvent(r)}function z(i){var t=i.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function O(i){var t,e=i.rotate,s=i.scaleX,h=i.scaleY,r=i.translateX,o=i.translateY,n=[];return a(r)&&r!==0&&n.push("translateX("+r+"px)"),a(o)&&o!==0&&n.push("translateY("+o+"px)"),a(e)&&e!==0&&n.push("rotate("+e+"deg)"),a(s)&&s!==1&&n.push("scaleX("+s+")"),a(h)&&h!==1&&n.push("scaleY("+h+")"),{WebkitTransform:t=n.length?n.join(" "):"none",msTransform:t,transform:t}}function M(i){return o(i)?decodeURIComponent(i.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}function j(i,t,e){var s,h=document.createElement("img");return i.naturalWidth&&!hi?(e(i.naturalWidth,i.naturalHeight),h):(s=document.body||document.documentElement,h.onload=()=>{e(h.width,h.height),hi||s.removeChild(h)},v(t.inheritedAttributes,t=>{var e=i.getAttribute(t);e!==null&&h.setAttribute(t,e)}),h.src=i.src,hi||(h.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(h)),h)}function I(i){switch(i){case 2:return P;case 3:return $;case 4:return W;default:return""}}function X(i){var e=t({},i),s=[];return v(i,(i,t)=>{delete e[t],v(e,t=>{var e=Math.abs(i.startX-t.startX),h=Math.abs(i.startY-t.startY),r=Math.abs(i.endX-t.endX),o=Math.abs(i.endY-t.endY),a=Math.sqrt(e*e+h*h),n=Math.sqrt(r*r+o*o);s.push((n-a)/a)})}),s.sort((i,t)=>Math.abs(i)<Math.abs(t)),s[0]}function E(i,e){var s=i.pageX,h=i.pageY,r={endX:s,endY:h};return e?r:t({timeStamp:Date.now(),startX:s,startY:h},r)}function Y(i){var t=0,e=0,s=0;return v(i,i=>{t+=i.startX,e+=i.startY,s+=1}),{pageX:t/=s,pageY:e/=s}}var N,S,A,R,C,D={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},L=typeof window!="undefined"&&window.document!==void 0,F=L?window:{},U=!(!L||!F.document.documentElement)&&"ontouchstart"in F.document.documentElement,V=!!L&&"PointerEvent"in F,W="viewer-hide-md-down",$="viewer-hide-sm-down",P="viewer-hide-xs-down",Z="viewer-in",q="viewer-transition",H=V?"pointerdown":U?"touchstart":"mousedown",B=V?"pointermove":U?"touchmove":"mousemove",G=V?"pointerup pointercancel":U?"touchend touchcancel":"mouseup",J=/\s\s*/,K=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],Q=Number.isNaN||F.isNaN,_={}.hasOwnProperty,ii=Object.assign||function(i){for(var t=arguments.length,e=new Array(t>1?t-1:0),s=1;s<t;s++)e[s-1]=arguments[s];return l(i)&&e.length>0&&e.forEach(t=>{l(t)&&Object.keys(t).forEach(e=>{i[e]=t[e]})}),i},ti=/^(?:width|height|left|top|marginLeft|marginTop)$/,ei=/([a-z\d])([A-Z])/g,si=(C=!1,L&&(S=!1,A=()=>{},R=Object.defineProperty({},"once",{get:()=>(C=!0,S),set(i){S=i}}),F.addEventListener("test",A,R),F.removeEventListener("test",A,R)),C),hi=F.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(F.navigator.userAgent),ri={render(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody(){var i=this.element.ownerDocument,t=i.body||i.documentElement;this.body=t,this.scrollbarWidth=window.innerWidth-i.documentElement.clientWidth,this.initialBodyPaddingRight=t.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(t).paddingRight},initContainer(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer(){var i,t=this.options,e=this.parent;t.inline&&(this.parentData=i={width:Math.max(e.offsetWidth,t.minWidth),height:Math.max(e.offsetHeight,t.minHeight)}),!this.fulled&&i||(i=this.containerData),this.viewerData=ii({},i)},renderViewer(){this.options.inline&&!this.fulled&&u(this.viewer,this.viewerData)},initList(){var i=this,t=this.element,e=this.options,s=this.list,h=[];s.innerHTML="",v(this.images,(t,r)=>{var o,a,n=t.src,l=t.alt||M(n),c=i.getImageURL(t);(n||c)&&(o=document.createElement("li"),a=document.createElement("img"),v(e.inheritedAttributes,i=>{var e=t.getAttribute(i);e!==null&&a.setAttribute(i,e)}),e.navbar&&(a.src=n||c),a.alt=l,a.setAttribute("data-original-url",c||n),o.setAttribute("data-index",r),o.setAttribute("data-viewer-action","view"),o.setAttribute("role","button"),e.keyboard&&o.setAttribute("tabindex",0),o.appendChild(a),s.appendChild(o),h.push(o))}),this.items=h,v(h,t=>{var s,h,r=t.firstElementChild;y(r,"filled",!0),e.loading&&w(t,"viewer-loading"),x(r,"load",s=s=>{k(r,"error",h),e.loading&&b(t,"viewer-loading"),i.loadImage(s)},{once:!0}),x(r,"error",h=()=>{k(r,"load",s),e.loading&&b(t,"viewer-loading")},{once:!0})}),e.transition&&x(t,"viewed",()=>{w(s,q)},{once:!0})},renderList(){var i,t,e,s=this.index,h=this.items[s];h&&(i=parseInt(window.getComputedStyle(h.nextElementSibling||h).marginLeft,10),u(this.list,ii({width:(e=(t=h.offsetWidth)+i)*this.length-i},O({translateX:(this.viewerData.width-t)/2-e*s}))))},resetList(){var i=this.list;i.innerHTML="",b(i,q),u(i,O({translateX:0}))},initImage(i){var t,e=this,s=this.options,h=this.image,r=this.viewerData,o=this.footer.offsetHeight,n=r.width,l=Math.max(r.height-o,o),c=this.imageData||{};this.imageInitializing={abort(){t.onload=null}},t=j(h,s,(t,h)=>{var r,o,d,v,u=t/h,m=Math.max(0,Math.min(1,s.initialCoverage)),w=n,b=l;e.imageInitializing=!1,l*u>n?b=n/u:w=l*u,m=a(m)?m:.9,v=ii({},d={left:r=(n-(w=Math.min(w*m,t)))/2,top:o=(l-(b=Math.min(b*m,h)))/2,x:r,y:o,width:w,height:b,oldRatio:1,ratio:w/t,aspectRatio:u,naturalWidth:t,naturalHeight:h}),s.rotatable&&(d.rotate=c.rotate||0,v.rotate=0),s.scalable&&(d.scaleX=c.scaleX||1,d.scaleY=c.scaleY||1,v.scaleX=1,v.scaleY=1),e.imageData=d,e.initialImageData=v,i&&i()})},renderImage(i){var t,e=this,s=this.image,h=this.imageData;u(s,ii({width:h.width,height:h.height,marginLeft:h.x,marginTop:h.y},O(h))),i&&((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&m(s,q)?(t=()=>{e.imageRendering=!1,i()},this.imageRendering={abort(){k(s,"transitionend",t)}},x(s,"transitionend",t,{once:!0})):i())},resetImage(){if(this.viewing||this.viewed){var i=this.image;this.viewing&&this.viewing.abort(),i.parentNode.removeChild(i),this.image=null}}},oi={bind(){var i=this.options,t=this.viewer,e=this.canvas,s=this.element.ownerDocument;x(t,"click",this.onClick=this.click.bind(this)),x(t,"dragstart",this.onDragStart=this.dragstart.bind(this)),x(e,H,this.onPointerDown=this.pointerdown.bind(this)),x(s,B,this.onPointerMove=this.pointermove.bind(this)),x(s,G,this.onPointerUp=this.pointerup.bind(this)),x(s,"keydown",this.onKeyDown=this.keydown.bind(this)),x(window,"resize",this.onResize=this.resize.bind(this)),i.zoomable&&i.zoomOnWheel&&x(t,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleOnDblclick&&x(e,"dblclick",this.onDblclick=this.dblclick.bind(this))},unbind(){var i=this.options,t=this.viewer,e=this.canvas,s=this.element.ownerDocument;k(t,"click",this.onClick),k(t,"dragstart",this.onDragStart),k(e,H,this.onPointerDown),k(s,B,this.onPointerMove),k(s,G,this.onPointerUp),k(s,"keydown",this.onKeyDown),k(window,"resize",this.onResize),i.zoomable&&i.zoomOnWheel&&k(t,"wheel",this.onWheel,{passive:!1,capture:!0}),i.toggleOnDblclick&&k(e,"dblclick",this.onDblclick)}},ai={click(i){var t=this.options,e=this.imageData,s=i.target,h=g(s,"viewerAction");switch(h||s.localName!=="img"||s.parentElement.localName!=="li"||(h=g(s=s.parentElement,"viewerAction")),U&&i.isTrusted&&s===this.canvas&&clearTimeout(this.clickCanvasTimeout),h){case"mix":this.played?this.stop():t.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(g(s,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(t.loop);break;case"play":this.play(t.fullscreen);break;case"next":this.next(t.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-e.scaleX||-1);break;case"flip-vertical":this.scaleY(-e.scaleY||-1);break;default:this.played&&this.stop()}},dblclick(i){i.preventDefault(),this.viewed&&i.target===this.image&&(U&&i.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(i.isTrusted?i:i.detail&&i.detail.originalEvent))},load(){var i,t,e,s,h,r=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1),i=this.element,t=this.options,s=this.index,h=this.viewerData,b(e=this.image,"viewer-invisible"),t.loading&&b(this.canvas,"viewer-loading"),e.style.cssText="height:0;margin-left:"+h.width/2+"px;margin-top:"+h.height/2+"px;max-width:none!important;position:relative;width:0;",this.initImage(()=>{f(e,"viewer-move",t.movable),f(e,q,t.transition),r.renderImage(()=>{r.viewed=!0,r.viewing=!1,d(t.viewed)&&x(i,"viewed",t.viewed,{once:!0}),T(i,"viewed",{originalImage:r.images[s],index:s,image:e},{cancelable:!1})})})},loadImage(i){var t=i.target,e=t.parentNode,s=e.offsetWidth||30,h=e.offsetHeight||50,r=!!g(t,"filled");j(t,this.options,(i,e)=>{var o=i/e,a=s,n=h;h*o>s?r?a=h*o:n=s/o:r?n=s/o:a=h*o,u(t,ii({width:a,height:n},O({translateX:(s-a)/2,translateY:(h-n)/2})))})},keydown(i){var t,e=this.options;if(e.keyboard&&((t=i.keyCode||i.which||i.charCode)===13&&this.viewer.contains(i.target)&&this.click(i),this.fulled))switch(t){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(e.loop);break;case 38:i.preventDefault(),this.zoom(e.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(e.loop);break;case 40:i.preventDefault(),this.zoom(-e.zoomRatio,!0);break;case 48:case 49:i.ctrlKey&&(i.preventDefault(),this.toggle())}},dragstart(i){i.target.localName==="img"&&i.preventDefault()},pointerdown(i){var t,e=this.options,s=this.pointers,h=i.buttons,r=i.button;this.pointerMoved=!1,!this.viewed||this.showing||this.viewing||this.hiding||(i.type==="mousedown"||i.type==="pointerdown"&&i.pointerType==="mouse")&&(a(h)&&h!==1||a(r)&&r!==0||i.ctrlKey)||(i.preventDefault(),i.changedTouches?v(i.changedTouches,i=>{s[i.identifier]=E(i)}):s[i.pointerId||0]=E(i),t=!!e.movable&&"move",e.zoomOnTouch&&e.zoomable&&Object.keys(s).length>1?t="zoom":e.slideOnTouch&&(i.pointerType==="touch"||i.type==="touchstart")&&this.isSwitchable()&&(t="switch"),!e.transition||t!=="move"&&t!=="zoom"||b(this.image,q),this.action=t)},pointermove(i){var t=this.pointers;this.viewed&&this.action&&(i.preventDefault(),i.changedTouches?v(i.changedTouches,i=>{ii(t[i.identifier]||{},E(i,!0))}):ii(t[i.pointerId||0]||{},E(i,!0)),this.change(i))},pointerup(i){var t,e=this,s=this.options,h=this.action,r=this.pointers;i.changedTouches?v(i.changedTouches,i=>{t=r[i.identifier],delete r[i.identifier]}):(t=r[i.pointerId||0],delete r[i.pointerId||0]),h&&(i.preventDefault(),!s.transition||h!=="move"&&h!=="zoom"||w(this.image,q),this.action=!1,U&&h!=="zoom"&&t&&Date.now()-t.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),s.toggleOnDblclick&&this.viewed&&i.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(()=>{T(e.image,"dblclick",{originalEvent:i})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(()=>{e.imageClicked=!1},500)):(this.imageClicked=!1,s.backdrop&&s.backdrop!=="static"&&i.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(()=>{T(e.canvas,"click",{originalEvent:i})},50)))))},resize(){var i=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(()=>{i.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();v(this.player.getElementsByTagName("img"),t=>{x(t,"load",i.loadImage.bind(i),{once:!0}),T(t,"load")})}},wheel(i){var t,e,s=this;this.viewed&&(i.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(()=>{s.wheeling=!1},50),t=Number(this.options.zoomRatio)||.1,e=1,i.deltaY?e=i.deltaY>0?1:-1:i.wheelDelta?e=-i.wheelDelta/120:i.detail&&(e=i.detail>0?1:-1),this.zoom(-e*t,!0,null,i)))}},ni={show(){var i,t,e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],s=this.element,h=this.options;return h.inline||this.showing||this.isShown||this.showing?this:this.ready?(d(h.show)&&x(s,"show",h.show,{once:!0}),T(s,"show")!==!1&&this.ready?(this.hiding&&this.transitioning.abort(),this.showing=!0,this.open(),b(i=this.viewer,"viewer-hide"),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("aria-hidden"),h.transition&&!e?(t=this.shown.bind(this),this.transitioning={abort(){k(i,"transitionend",t),b(i,Z)}},w(i,q),i.initialOffsetWidth=i.offsetWidth,x(i,"transitionend",t,{once:!0}),w(i,Z)):(w(i,Z),this.shown()),this):this):(this.build(),this.ready&&this.show(e),this)},hide(){var i,t,e,s,h,r=this,o=arguments.length>0&&arguments[0]!==void 0&&arguments[0],a=this.element,n=this.options;return n.inline||this.hiding||!this.isShown&&!this.showing||(d(n.hide)&&x(a,"hide",n.hide,{once:!0}),T(a,"hide")===!1||(this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort(),i=this.viewer,t=this.image,e=()=>{b(i,Z),r.hidden()},n.transition&&!o?(s=function t(e){e&&e.target===i&&(k(i,"transitionend",t),r.hidden())},h=()=>{m(i,q)?(x(i,"transitionend",s),b(i,Z)):e()},this.transitioning={abort(){r.viewed&&m(t,q)?k(t,"transitionend",h):m(i,q)&&k(i,"transitionend",s)}},this.viewed&&m(t,q)?(x(t,"transitionend",h,{once:!0}),this.zoomTo(0,!1,null,null,!0)):h()):e())),this},view(){var i,t,e,s,h,r,o,a,n,l,c,u,m,f=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;return p=Number(p)||0,this.hiding||this.played||p<0||p>=this.length||this.viewed&&p===this.index?this:this.isShown?(this.viewing&&this.viewing.abort(),i=this.element,t=this.options,e=this.title,s=this.canvas,o=g(r=(h=this.items[p]).querySelector("img"),"originalUrl"),a=r.getAttribute("alt"),n=document.createElement("img"),v(t.inheritedAttributes,i=>{var t=r.getAttribute(i);t!==null&&n.setAttribute(i,t)}),n.src=o,n.alt=a,d(t.view)&&x(i,"view",t.view,{once:!0}),T(i,"view",{originalImage:this.images[p],index:p,image:n})===!1||!this.isShown||this.hiding||this.played||((l=this.items[this.index])&&(b(l,"viewer-active"),l.removeAttribute("aria-selected")),w(h,"viewer-active"),h.setAttribute("aria-selected",!0),t.focus&&h.focus(),this.image=n,this.viewed=!1,this.index=p,this.imageData={},w(n,"viewer-invisible"),t.loading&&w(s,"viewer-loading"),s.innerHTML="",s.appendChild(n),this.renderList(),e.innerHTML="",c=()=>{var i=f.imageData,s=Array.isArray(t.title)?t.title[1]:t.title;e.textContent=d(s)?s.call(f,n,i):a+" ("+i.naturalWidth+" \xd7 "+i.naturalHeight+")"},x(i,"viewed",c,{once:!0}),this.viewing={abort(){k(i,"viewed",c),n.complete?f.imageRendering?f.imageRendering.abort():f.imageInitializing&&f.imageInitializing.abort():(n.src="",k(n,"load",u),f.timeout&&clearTimeout(f.timeout))}},n.complete?this.load():(x(n,"load",u=()=>{k(n,"error",m),f.load()},{once:!0}),x(n,"error",m=()=>{k(n,"load",u),f.timeout&&(clearTimeout(f.timeout),f.timeout=!1),b(n,"viewer-invisible"),t.loading&&b(f.canvas,"viewer-loading")},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{b(n,"viewer-invisible"),f.timeout=!1},1e3))),this):(this.index=p,this.show())},prev(){var i=this.index-1;return i<0&&(i=arguments.length>0&&arguments[0]!==void 0&&arguments[0]?this.length-1:0),this.view(i),this},next(){var i=this.length-1,t=this.index+1;return t>i&&(t=arguments.length>0&&arguments[0]!==void 0&&arguments[0]?0:i),this.view(t),this},move(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,e=this.imageData;return this.moveTo(n(i)?i:e.x+Number(i),n(t)?t:e.y+Number(t)),this},moveTo(i){var t,e,s,h=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=this.element,l=this.options,c=this.imageData;if(i=Number(i),r=Number(r),this.viewed&&!this.played&&l.movable&&(t=c.x,e=c.y,s=!1,a(i)?s=!0:i=t,a(r)?s=!0:r=e,s)){if(d(l.move)&&x(n,"move",l.move,{once:!0}),T(n,"move",{x:i,y:r,oldX:t,oldY:e,originalEvent:o})===!1)return this;c.x=i,c.y=r,c.left=i,c.top=r,this.moving=!0,this.renderImage(()=>{h.moving=!1,d(l.moved)&&x(n,"moved",l.moved,{once:!0}),T(n,"moved",{x:i,y:r,oldX:t,oldY:e,originalEvent:o},{cancelable:!1})})}return this},rotate(i){return this.rotateTo((this.imageData.rotate||0)+Number(i)),this},rotateTo(i){var t,e=this,s=this.element,h=this.options,r=this.imageData;if(a(i=Number(i))&&this.viewed&&!this.played&&h.rotatable){if(t=r.rotate,d(h.rotate)&&x(s,"rotate",h.rotate,{once:!0}),T(s,"rotate",{degree:i,oldDegree:t})===!1)return this;r.rotate=i,this.rotating=!0,this.renderImage(()=>{e.rotating=!1,d(h.rotated)&&x(s,"rotated",h.rotated,{once:!0}),T(s,"rotated",{degree:i,oldDegree:t},{cancelable:!1})})}return this},scaleX(i){return this.scale(i,this.imageData.scaleY),this},scaleY(i){return this.scale(this.imageData.scaleX,i),this},scale(i){var t,e,s,h=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,o=this.element,n=this.options,l=this.imageData;if(i=Number(i),r=Number(r),this.viewed&&!this.played&&n.scalable&&(t=l.scaleX,e=l.scaleY,s=!1,a(i)?s=!0:i=t,a(r)?s=!0:r=e,s)){if(d(n.scale)&&x(o,"scale",n.scale,{once:!0}),T(o,"scale",{scaleX:i,scaleY:r,oldScaleX:t,oldScaleY:e})===!1)return this;l.scaleX=i,l.scaleY=r,this.scaling=!0,this.renderImage(()=>{h.scaling=!1,d(n.scaled)&&x(o,"scaled",n.scaled,{once:!0}),T(o,"scaled",{scaleX:i,scaleY:r,oldScaleX:t,oldScaleY:e},{cancelable:!1})})}return this},zoom(i){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,h=this.imageData;return i=Number(i),this.zoomTo(h.width*(i=i<0?1/(1-i):1+i)/h.naturalWidth,t,e,s),this},zoomTo(i){var t,e,s,h,r,o,n,l,v,u=this,m=arguments.length>1&&arguments[1]!==void 0&&arguments[1],w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,f=arguments.length>4&&arguments[4]!==void 0&&arguments[4],p=this.element,g=this.options,y=this.pointers,k=this.imageData,O=k.x,M=k.y,j=k.width,I=k.height,X=k.naturalWidth,E=k.naturalHeight;if(a(i=Math.max(0,i))&&this.viewed&&!this.played&&(f||g.zoomable)){if(f||(t=Math.max(.01,g.minZoomRatio),e=Math.min(100,g.maxZoomRatio),i=Math.min(Math.max(i,t),e)),b)switch(b.type){case"wheel":g.zoomRatio>=.055&&i>.95&&i<1.05&&(i=1);break;case"pointermove":case"touchmove":case"mousemove":i>.99&&i<1.01&&(i=1)}if(r=(s=X*i)-j,o=(h=E*i)-I,n=k.ratio,d(g.zoom)&&x(p,"zoom",g.zoom,{once:!0}),T(p,"zoom",{ratio:i,oldRatio:n,originalEvent:b})===!1)return this;this.zooming=!0,b?(l=z(this.viewer),v=y&&Object.keys(y).length>0?Y(y):{pageX:b.pageX,pageY:b.pageY},k.x-=r*((v.pageX-l.left-O)/j),k.y-=o*((v.pageY-l.top-M)/I)):c(w)&&a(w.x)&&a(w.y)?(k.x-=r*((w.x-O)/j),k.y-=o*((w.y-M)/I)):(k.x-=r/2,k.y-=o/2),k.left=k.x,k.top=k.y,k.width=s,k.height=h,k.oldRatio=n,k.ratio=i,this.renderImage(()=>{u.zooming=!1,d(g.zoomed)&&x(p,"zoomed",g.zoomed,{once:!0}),T(p,"zoomed",{ratio:i,oldRatio:n,originalEvent:b},{cancelable:!1})}),m&&this.tooltip()}return this},play(){var i,t,e,s,h,r,o,n,l=this,c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return!this.isShown||this.played||(i=this.element,d((t=this.options).play)&&x(i,"play",t.play,{once:!0}),T(i,"play")===!1||(e=this.player,s=this.loadImage.bind(this),h=[],r=0,o=0,this.played=!0,this.onLoadWhenPlay=s,c&&this.requestFullscreen(c),w(e,"viewer-show"),v(this.items,(i,a)=>{var n=i.querySelector("img"),l=document.createElement("img");l.src=g(n,"originalUrl"),l.alt=n.getAttribute("alt"),l.referrerPolicy=n.referrerPolicy,r+=1,w(l,"viewer-fade"),f(l,q,t.transition),m(i,"viewer-active")&&(w(l,Z),o=a),h.push(l),x(l,"load",s,{once:!0}),e.appendChild(l)}),a(t.interval)&&t.interval>0&&(n=function i(){clearTimeout(l.playing.timeout),b(h[o],Z),w(h[o=(o+=1)<r?o:0],Z),l.playing.timeout=setTimeout(i,t.interval)},r>1&&(this.playing={prev:function i(){clearTimeout(l.playing.timeout),b(h[o],Z),w(h[o=(o-=1)>=0?o:r-1],Z),l.playing.timeout=setTimeout(i,t.interval)},next:n,timeout:setTimeout(n,t.interval)})))),this},stop(){var i,t,e,s=this;return this.played?(i=this.element,d((t=this.options).stop)&&x(i,"stop",t.stop,{once:!0}),T(i,"stop")===!1||(e=this.player,clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,v(e.getElementsByTagName("img"),i=>{k(i,"load",s.onLoadWhenPlay)}),b(e,"viewer-show"),e.innerHTML="",this.exitFullscreen()),this):this},full(){var i=this,t=this.options,e=this.viewer,s=this.image,h=this.list;return!this.isShown||this.played||this.fulled||!t.inline||(this.fulled=!0,this.open(),w(this.button,"viewer-fullscreen-exit"),t.transition&&(b(h,q),this.viewed&&b(s,q)),w(e,"viewer-fixed"),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",!0),e.removeAttribute("style"),u(e,{zIndex:t.zIndex}),t.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=ii({},this.containerData),this.renderList(),this.viewed&&this.initImage(()=>{i.renderImage(()=>{t.transition&&setTimeout(()=>{w(s,q),w(h,q)},0)})})),this},exit(){var i=this,t=this.options,e=this.viewer,s=this.image,h=this.list;return this.isShown&&!this.played&&this.fulled&&t.inline?(this.fulled=!1,this.close(),b(this.button,"viewer-fullscreen-exit"),t.transition&&(b(h,q),this.viewed&&b(s,q)),t.focus&&this.clearEnforceFocus(),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),b(e,"viewer-fixed"),u(e,{zIndex:t.zIndexInline}),this.viewerData=ii({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(()=>{i.renderImage(()=>{t.transition&&setTimeout(()=>{w(s,q),w(h,q)},0)})}),this):this},tooltip(){var i=this,t=this.options,e=this.tooltipBox;return this.viewed&&!this.played&&t.tooltip?(e.textContent=Math.round(this.imageData.ratio*100)+"%",this.tooltipping?clearTimeout(this.tooltipping):t.transition?(this.fading&&T(e,"transitionend"),w(e,"viewer-show"),w(e,"viewer-fade"),w(e,q),e.removeAttribute("aria-hidden"),e.initialOffsetWidth=e.offsetWidth,w(e,Z)):(w(e,"viewer-show"),e.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(()=>{t.transition?(x(e,"transitionend",()=>{b(e,"viewer-show"),b(e,"viewer-fade"),b(e,q),e.setAttribute("aria-hidden",!0),i.fading=!1},{once:!0}),b(e,Z),i.fading=!0):(b(e,"viewer-show"),e.setAttribute("aria-hidden",!0)),i.tooltipping=!1},1e3),this):this},toggle(){return this.zoomTo(this.imageData.ratio===1?this.imageData.oldRatio:1,!0,null,arguments.length>0&&arguments[0]!==void 0?arguments[0]:null),this},reset(){return this.viewed&&!this.played&&(this.imageData=ii({},this.initialImageData),this.renderImage()),this},update(){var i,t,e,s,h=this,r=this.element,o=this.options,a=this.isImg;return a&&!r.parentNode?this.destroy():(i=[],v(a?[r]:r.querySelectorAll("img"),t=>{d(o.filter)?o.filter.call(h,t)&&i.push(t):h.getImageURL(t)&&i.push(t)}),i.length?(this.images=i,this.length=i.length,this.ready?(t=[],v(this.items,(e,s)=>{var h=e.querySelector("img"),r=i[s];r&&h&&r.src===h.src&&r.alt===h.alt||t.push(s)}),u(this.list,{width:"auto"}),this.initList(),this.isShown&&(this.length?this.viewed&&((e=t.indexOf(this.index))>=0?(this.viewed=!1,this.view(Math.max(Math.min(this.index-e,this.length-1),0))):(w(s=this.items[this.index],"viewer-active"),s.setAttribute("aria-selected",!0))):(this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""))):this.build(),this):this)},destroy(){var i=this.element,t=this.options;return i.viewer?(this.destroyed=!0,this.ready?(this.played&&this.stop(),t.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):t.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),t.inline||k(i,"click",this.onStart),i.viewer=void 0,this):this}},li={getImageURL(i){var t=this.options.url;return o(t)?i.getAttribute(t):d(t)?t.call(this,i):""},enforceFocus(){var i=this;this.clearEnforceFocus(),x(document,"focusin",this.onFocusin=t=>{var e=i.viewer,s=t.target;if(s!==document&&s!==e&&!e.contains(s)){for(;s;){if(s.getAttribute("tabindex")!==null||s.getAttribute("aria-modal")==="true")return;s=s.parentElement}e.focus()}})},clearEnforceFocus(){this.onFocusin&&(k(document,"focusin",this.onFocusin),this.onFocusin=null)},open(){var i=this.body;w(i,"viewer-open"),this.scrollbarWidth>0&&(i.style.paddingRight=this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0)+"px")},close(){var i=this.body;b(i,"viewer-open"),this.scrollbarWidth>0&&(i.style.paddingRight=this.initialBodyPaddingRight)},shown(){var i=this.element,t=this.options,e=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,t.focus&&(e.focus(),this.enforceFocus()),d(t.shown)&&x(i,"shown",t.shown,{once:!0}),T(i,"shown")!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden(){var i=this.element,t=this.options,e=this.viewer;t.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),w(e,"viewer-hide"),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),e.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(d(t.hidden)&&x(i,"hidden",t.hidden,{once:!0}),T(i,"hidden",null,{cancelable:!1}))},requestFullscreen(i){var t,e=this.element.ownerDocument;this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)&&((t=e.documentElement).requestFullscreen?c(i)?t.requestFullscreen(i):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen())},exitFullscreen(){var i=this.element.ownerDocument;this.fulled&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement)&&(i.exitFullscreen?i.exitFullscreen():i.webkitExitFullscreen?i.webkitExitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.msExitFullscreen&&i.msExitFullscreen())},change(i){var t,e,s,h=this.options,r=this.pointers,o=r[Object.keys(r)[0]];if(o){switch(t=o.endX-o.startX,e=o.endY-o.startY,this.action){case"move":t===0&&e===0||(this.pointerMoved=!0,this.move(t,e,i));break;case"zoom":this.zoom(X(r),!1,null,i);break;case"switch":this.action="switched",(s=Math.abs(t))>1&&s>Math.abs(e)&&(this.pointers={},t>1?this.prev(h.loop):t<-1&&this.next(h.loop))}v(r,i=>{i.startX=i.endX,i.startY=i.endY})}},isSwitchable(){var i=this.imageData,t=this.viewerData;return this.length>1&&i.x>=0&&i.y>=0&&i.width<=t.width&&i.height<=t.height}},ci=F.Viewer,di=(N=-1,()=>N+=1),vi=(function(){function i(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(s(this,i),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=ii({},D,c(e)&&e),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=di(),this.init()}var t,e,r;return t=i,e=[{key:"init",value(){var i,t,e,s,h=this,r=this.element,o=this.options;r.viewer||(r.viewer=this,o.focus&&!o.keyboard&&(o.focus=!1),t=[],v((i=r.localName==="img")?[r]:r.querySelectorAll("img"),i=>{d(o.filter)?o.filter.call(h,i)&&t.push(i):h.getImageURL(i)&&t.push(i)}),this.isImg=i,this.length=t.length,this.images=t,this.initBody(),n(document.createElement("viewer").style.transition)&&(o.transition=!1),o.inline?(e=0,s=()=>{var i;(e+=1)===h.length&&(h.initializing=!1,h.delaying={abort(){clearTimeout(i)}},i=setTimeout(()=>{h.delaying=!1,h.build()},0))},this.initializing={abort(){v(t,i=>{i.complete||(k(i,"load",s),k(i,"error",s))})}},v(t,i=>{var t,e;i.complete?s():(x(i,"load",t=()=>{k(i,"error",e),s()},{once:!0}),x(i,"error",e=()=>{k(i,"load",t),s()},{once:!0}))})):x(r,"click",this.onStart=i=>{var t=i.target;t.localName!=="img"||d(o.filter)&&!o.filter.call(h,t)||h.view(h.images.indexOf(t))}))}},{key:"build",value(){var i,t,e,s,h,r,l,m,b,g,k,z,O,M,j,X,E;this.ready||(t=this.options,e=(i=this.element).parentNode,(s=document.createElement("div")).innerHTML='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',r=(h=s.querySelector(".viewer-container")).querySelector(".viewer-title"),l=h.querySelector(".viewer-toolbar"),m=h.querySelector(".viewer-navbar"),b=h.querySelector(".viewer-button"),g=h.querySelector(".viewer-canvas"),this.parent=e,this.viewer=h,this.title=r,this.toolbar=l,this.navbar=m,this.button=b,this.canvas=g,this.footer=h.querySelector(".viewer-footer"),this.tooltipBox=h.querySelector(".viewer-tooltip"),this.player=h.querySelector(".viewer-player"),this.list=h.querySelector(".viewer-list"),h.id="viewer"+this.id,r.id="viewerTitle"+this.id,w(r,t.title?I(Array.isArray(t.title)?t.title[0]:t.title):"viewer-hide"),w(m,t.navbar?I(t.navbar):"viewer-hide"),f(b,"viewer-hide",!t.button),t.keyboard&&b.setAttribute("tabindex",0),t.backdrop&&(w(h,"viewer-backdrop"),t.inline||t.backdrop==="static"||y(g,"viewerAction","hide")),o(t.className)&&t.className&&t.className.split(J).forEach(i=>{w(h,i)}),t.toolbar?(k=document.createElement("ul"),z=c(t.toolbar),O=K.slice(0,3),M=K.slice(7,9),j=K.slice(9),z||w(l,I(t.toolbar)),v(z?t.toolbar:K,(i,e)=>{var s,h,r,o=z&&c(i),l=z?p(e):i,v=o&&!n(i.show)?i.show:i;!v||!t.zoomable&&O.indexOf(l)!==-1||!t.rotatable&&M.indexOf(l)!==-1||!t.scalable&&j.indexOf(l)!==-1||(s=o&&!n(i.size)?i.size:i,h=o&&!n(i.click)?i.click:i,r=document.createElement("li"),t.keyboard&&r.setAttribute("tabindex",0),r.setAttribute("role","button"),w(r,"viewer-"+l),d(h)||y(r,"viewerAction",l),a(v)&&w(r,I(v)),["small","large"].indexOf(s)!==-1?w(r,"viewer-"+s):l==="play"&&w(r,"viewer-large"),d(h)&&x(r,"click",h),k.appendChild(r))}),l.appendChild(k)):w(l,"viewer-hide"),t.rotatable||(w(X=l.querySelectorAll('li[class*="rotate"]'),"viewer-invisible"),v(X,i=>{l.appendChild(i)})),t.inline?(w(b,"viewer-fullscreen"),u(h,{zIndex:t.zIndexInline}),window.getComputedStyle(e).position==="static"&&u(e,{position:"relative"}),e.insertBefore(h,i.nextSibling)):(w(b,"viewer-close"),w(h,"viewer-fixed"),w(h,"viewer-fade"),w(h,"viewer-hide"),u(h,{zIndex:t.zIndex}),o(E=t.container)&&(E=i.ownerDocument.querySelector(E)),E||(E=this.body),E.appendChild(h)),t.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,d(t.ready)&&x(i,"ready",t.ready,{once:!0}),T(i,"ready")!==!1?this.ready&&t.inline&&this.view(this.index):this.ready=!1)}}],r=[{key:"noConflict",value:()=>(window.Viewer=ci,i)},{key:"setDefaults",value(i){ii(D,c(i)&&i)}}],e&&h(t.prototype,e),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i})();return ii(vi.prototype,ri,oi,ai,ni,li),vi});