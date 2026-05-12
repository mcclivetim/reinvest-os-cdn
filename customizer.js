/* Wholesaling CRM Customizer v0.2.0 — built 2026-05-12T23:57:21.022Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var s="[wholesaling-crm-customizer]",T="__WS_CRM_DEBUG",I=()=>!!window[T],o={info(...t){console.log(s,...t)},warn(...t){console.warn(s,...t)},error(...t){console.error(s,...t)},debug(...t){I()&&console.log(s,"[debug]",...t)}};var f=()=>{let t=window.location.pathname;return t.includes("/contacts/detail/")?"contact-detail":t.includes("/contacts/smart-list")||t.includes("/contacts/")?"contact-list":t.includes("/opportunities/detail/")?"opportunity-detail":t.includes("/opportunities/")?"opportunity-list":t.includes("/calendars/")?"calendar":t.includes("/dashboard")?"dashboard":t.includes("/conversations")?"conversations":t.includes("/settings")?"settings":"other"},d="",a="other",m=new Set,c=()=>{if(window.location.pathname!==d){d=window.location.pathname,a=f(),o.debug("Page changed:",a,d);for(let t of m)try{t(a)}catch(e){o.error("Subscriber threw:",e)}}},b=t=>(m.add(t),setTimeout(()=>t(a),0),()=>{m.delete(t)}),x=()=>{a=f(),d=window.location.pathname,o.debug("Router init, current page:",a);let t=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(n,i,r){t(n,i,r),c()},history.replaceState=function(n,i,r){e(n,i,r),c()},window.addEventListener("popstate",c),setInterval(c,1e3)};var l="0.2.0",u="2026-05-12T23:57:21.023Z";var C=/\/contacts\/detail\/([A-Za-z0-9]+)/,_=/\/v2\/location\/([A-Za-z0-9]+)/,h=()=>{let t=window.location.pathname,e=t.match(C);if(!e)return null;let n=t.match(_);return{contactId:e[1],locationId:n?n[1]:null}};var y=(t,e,n=document.body)=>{let i=document.getElementById(t);if(i)return i;let r=e();return r.id=t,n.appendChild(r),r};var p="ws-crm-claim-release-toggle",L=t=>{let e=document.createElement("button");return e.type="button",e.dataset.contactId=t,e.textContent="Claim Lead",e.style.cssText=`
    position: fixed;
    top: 80px;
    right: 24px;
    z-index: 999998;
    padding: 10px 18px;
    background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)",e.style.boxShadow="0 6px 16px rgba(16, 185, 129, 0.35)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="0 4px 12px rgba(16, 185, 129, 0.25)"}),e.addEventListener("click",()=>{o.info(`Claim Lead clicked for contact ${t}`);let n=e.textContent;e.textContent="Clicked!",e.style.background="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",setTimeout(()=>{e.textContent=n,e.style.background="linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"},800)}),e},M=()=>{let t=h();if(!t){let n=document.getElementById(p);n&&n.remove();return}let e=document.getElementById(p);e&&e.dataset.contactId===t.contactId||(e&&e.remove(),y(p,()=>L(t.contactId)),o.debug(`Mounted Claim/Release toggle for contact ${t.contactId}`))},g=()=>{M()};var w="ws-crm-customizer-version-badge",E=()=>{if(document.getElementById(w))return;let t=document.createElement("div");t.id=w,t.style.cssText=`
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
  `,t.textContent=`Customizer v${l}`,t.title=`Built ${u}
Click to dismiss for this session`,t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)}),document.body.appendChild(t)};var v=()=>{o.info(`Loaded v${l} (built ${u})`),x(),b(t=>{o.debug("Page handler firing for:",t),E(),t==="contact-detail"?g():g()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();})();
//# sourceMappingURL=customizer.js.map
