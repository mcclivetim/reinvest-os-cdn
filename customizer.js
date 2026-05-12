/* Wholesaling CRM Customizer v0.1.0 — built 2026-05-12T21:38:41.001Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var n="[wholesaling-crm-customizer]",_="__WS_CRM_DEBUG",v=()=>!!window[_],t={info(...e){console.log(n,...e)},warn(...e){console.warn(n,...e)},error(...e){console.error(n,...e)},debug(...e){v()&&console.log(n,"[debug]",...e)}};var g=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},i="",o="other",p=new Set,r=()=>{if(window.location.pathname!==i){i=window.location.pathname,o=g(),t.debug("Page changed:",o,i);for(let e of p)try{e(o)}catch(c){t.error("Subscriber threw:",c)}}},m=e=>(p.add(e),setTimeout(()=>e(o),0),()=>{p.delete(e)}),f=()=>{o=g(),i=window.location.pathname,t.debug("Router init, current page:",o);let e=history.pushState.bind(history),c=history.replaceState.bind(history);history.pushState=function(d,l,u){e(d,l,u),r()},history.replaceState=function(d,l,u){c(d,l,u),r()},window.addEventListener("popstate",r),setInterval(r,1e3)};var s="0.1.0",a="2026-05-12T21:38:41.001Z";var h="ws-crm-customizer-version-badge",y=()=>{if(document.getElementById(h))return;let e=document.createElement("div");e.id=h,e.style.cssText=`
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 999999;
    padding: 6px 12px;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    border-radius: 999px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, opacity 0.15s ease;
  `,e.textContent=`Customizer v${s}`,e.title=`Built ${a}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var b=()=>{t.info(`Loaded v${s} (built ${a})`),f(),m(e=>{t.debug("Page handler firing for:",e),y()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();})();
//# sourceMappingURL=customizer.js.map
