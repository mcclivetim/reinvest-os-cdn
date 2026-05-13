/* Wholesaling CRM Customizer v0.3.0 — built 2026-05-13T00:02:15.597Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var c="[wholesaling-crm-customizer]",S="__WS_CRM_DEBUG",k=()=>!!window[S],o={info(...t){console.log(c,...t)},warn(...t){console.warn(c,...t)},error(...t){console.error(c,...t)},debug(...t){k()&&console.log(c,"[debug]",...t)}};var C=()=>{let t=window.location.pathname;return t.includes("/contacts/detail/")?"contact-detail":t.includes("/contacts/smart-list")||t.includes("/contacts/")?"contact-list":t.includes("/opportunities/detail/")?"opportunity-detail":t.includes("/opportunities/")?"opportunity-list":t.includes("/calendars/")?"calendar":t.includes("/dashboard")?"dashboard":t.includes("/conversations")?"conversations":t.includes("/settings")?"settings":"other"},l="",a="other",h=new Set,d=()=>{if(window.location.pathname!==l){l=window.location.pathname,a=C(),o.debug("Page changed:",a,l);for(let t of h)try{t(a)}catch(e){o.error("Subscriber threw:",e)}}},I=t=>(h.add(t),setTimeout(()=>t(a),0),()=>{h.delete(t)}),T=()=>{a=C(),l=window.location.pathname,o.debug("Router init, current page:",a);let t=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(n,i,r){t(n,i,r),d()},history.replaceState=function(n,i,r){e(n,i,r),d()},window.addEventListener("popstate",d),setInterval(d,1e3)};var u="0.3.0",m="2026-05-13T00:02:15.597Z";var R=/\/contacts\/detail\/([A-Za-z0-9]+)/,D=/\/v2\/location\/([A-Za-z0-9]+)/,y=()=>{let t=window.location.pathname,e=t.match(R);if(!e)return null;let n=t.match(D);return{contactId:e[1],locationId:n?n[1]:null}};var _=(t,e={})=>{let{timeoutMs:n=8e3,pollMs:i=100,root:r=document}=e;return new Promise((p,P)=>{let v=r.querySelector(t);if(v){p(v);return}let g,f,b=()=>{x&&x.disconnect(),g!==void 0&&window.clearTimeout(g),f!==void 0&&window.clearInterval(f)},x=new MutationObserver(()=>{let s=r.querySelector(t);s&&(b(),p(s))});x.observe(document.body,{childList:!0,subtree:!0}),f=window.setInterval(()=>{let s=r.querySelector(t);s&&(b(),p(s))},i),g=window.setTimeout(()=>{b(),o.warn(`waitForElement timed out for selector: ${t}`),P(new Error(`Selector not found within ${n}ms: ${t}`))},n)})};var w="ws-crm-contact-button-bar",O="ws-crm-claim-release-toggle",U=t=>{let e=document.createElement("button");return e.id=O,e.type="button",e.dataset.contactId=t,e.textContent="Claim Lead",e.style.cssText=`
    padding: 6px 14px;
    background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    flex-shrink: 0;
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)",e.style.boxShadow="0 4px 8px rgba(16, 185, 129, 0.3)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="0 2px 4px rgba(16, 185, 129, 0.2)"}),e.addEventListener("click",()=>{o.info(`Claim Lead clicked for contact ${t}`);let n=e.textContent;e.textContent="Clicked!",e.style.background="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",setTimeout(()=>{e.textContent=n,e.style.background="linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"},800)}),e},N=t=>{let e=document.createElement("div");return e.id=w,e.dataset.contactId=t,e.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    flex-shrink: 0;
  `,e.appendChild(U(t)),e},$=async()=>{let t=y();if(!t){document.getElementById(w)?.remove();return}let e=document.getElementById(w);if(!(e&&e.dataset.contactId===t.contactId)){e&&e.remove();try{let n=await _("#record-details-lhs",{timeoutMs:1e4}),i=y();if(!i||i.contactId!==t.contactId)return;let r=N(t.contactId);n.insertBefore(r,n.firstChild),o.debug(`Mounted contact button bar for ${t.contactId}`)}catch(n){o.warn("Could not mount contact button bar:",n)}}},E=()=>{$()};var L="ws-crm-customizer-version-badge",M=()=>{if(document.getElementById(L))return;let t=document.createElement("div");t.id=L,t.style.cssText=`
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
  `,t.textContent=`Customizer v${u}`,t.title=`Built ${m}
Click to dismiss for this session`,t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)}),document.body.appendChild(t)};var B=()=>{o.info(`Loaded v${u} (built ${m})`),T(),I(t=>{o.debug("Page handler firing for:",t),M(),t==="contact-detail"?E():E()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B();})();
//# sourceMappingURL=customizer.js.map
