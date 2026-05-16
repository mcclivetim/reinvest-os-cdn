/* Wholesaling CRM Customizer v0.5.33 — built 2026-05-16T16:03:47.788Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var T="[wholesaling-crm-customizer]",he="__WS_CRM_DEBUG",be=()=>!!window[he],d={info(...e){console.log(T,...e)},warn(...e){console.warn(T,...e)},error(...e){console.error(T,...e)},debug(...e){be()&&console.log(T,"[debug]",...e)}};var z=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},I="",E="other",P=new Set,L=()=>{if(window.location.pathname!==I){I=window.location.pathname,E=z(),d.debug("Page changed:",E,I);for(let e of P)try{e(E)}catch(o){d.error("Subscriber threw:",o)}}},U=e=>(P.add(e),setTimeout(()=>e(E),0),()=>{P.delete(e)}),q=()=>{E=z(),I=window.location.pathname,d.debug("Router init, current page:",E);let e=history.pushState.bind(history),o=history.replaceState.bind(history);history.pushState=function(t,r,a){e(t,r,a),L()},history.replaceState=function(t,r,a){o(t,r,a),L()},window.addEventListener("popstate",L),setInterval(L,1e3)};var M="0.5.33",A="2026-05-16T16:03:47.789Z";var ge=/\/contacts\/detail\/([A-Za-z0-9]+)/,fe=/\/v2\/location\/([A-Za-z0-9]+)/,y=()=>{let e=window.location.pathname,o=e.match(ge);if(!o)return null;let t=e.match(fe);return{contactId:o[1],locationId:t?t[1]:null}};var _=(e,o={})=>{let{timeoutMs:t=8e3,pollMs:r=100,root:a=document}=o;return new Promise((n,c)=>{let s=a.querySelector(e);if(s){n(s);return}let i,u,g=()=>{p&&p.disconnect(),i!==void 0&&window.clearTimeout(i),u!==void 0&&window.clearInterval(u)},p=new MutationObserver(()=>{let b=a.querySelector(e);b&&(g(),n(b))});p.observe(document.body,{childList:!0,subtree:!0}),u=window.setInterval(()=>{let b=a.querySelector(e);b&&(g(),n(b))},r),i=window.setTimeout(()=>{g(),d.warn(`waitForElement timed out for selector: ${e}`),c(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var l={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},f={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},H={purple:"#8B5CF6",green:l.emerald,orange:l.amber,red:l.crimson},W=e=>{let o=e==="emerald"?l.emeraldGlow:e==="amber"?l.amberGlow:l.slate,t=e==="emerald"?l.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":l.steel,r=e==="emerald"?l.emerald:e==="amber"?l.amber:l.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${o};
    color: ${r};
    border: 1px solid ${t};
    border-radius: ${v.pill};
    font-family: ${f.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},O=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.emerald};
  color: ${l.obsidian};
  border: none;
  border-radius: ${v.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,N=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${l.bone};
  border: 1px solid ${l.steel};
  border-radius: ${v.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var S="ws-crm-claim-release-pill",j=e=>{let o=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return o?o.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},ye=({contactId:e,mode:o})=>{let t=document.createElement("button");t.id=S,t.type="button",t.dataset.contactId=e,t.dataset.mode=o;let r=o==="claim"?"emerald":"amber",a=o==="claim"?l.emerald:l.amber;return t.style.cssText=W(r),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${o==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=o==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{d.info(`Claim/Release pill clicked for contact ${e}: ${o}`);let n=t.lastElementChild,c=n?.textContent??"";n&&(n.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{n&&(n.textContent=c),t.style.opacity="1",t.disabled=!1},700)}),t},ve=async(e,o=1e4)=>{let t=Date.now();for(;Date.now()-t<o;){let r=j(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},V=(e,o)=>{let t=ye({contactId:o,mode:"claim"}),r=document.createElement("span");r.id=`${S}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(t),e.appendChild(r)},xe=async()=>{let e=y();if(!e){document.getElementById(S)?.remove();return}let o=document.getElementById(S);if(!(o&&o.dataset.contactId===e.contactId)){o&&o.remove();try{let t=await _("#record-details-lhs",{timeoutMs:1e4}),r=await ve(t),a=y();if(!a||a.contactId!==e.contactId)return;if(!r){d.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}V(r,e.contactId),d.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`);let n=null;n=new MutationObserver(async()=>{if(!(y()?.contactId===e.contactId)){n?.disconnect();return}if(document.getElementById(S))return;let s=j(t);s&&(V(s,e.contactId),d.debug("Re-mounted Claim/Release pill after React wipe"))}),n.observe(t,{childList:!0,subtree:!0})}catch(t){d.warn("Could not mount Claim/Release pill:",t)}}},Y=()=>{xe()};var we="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",ke=()=>{let e=window.WS_CRM_USER_ID;if(e&&/^[A-Za-z0-9]{15,30}$/.test(e))return e;let o=window,t=[o.appState?.user?.id,o.user?.id,o.currentUser?.id,o.LCUser?.id,o.HL?.user?.id];for(let r of t)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),n=a.id??a._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}for(let a of["tokenUser","currentUser","ghl_user"]){let n=localStorage.getItem(a);if(n)try{let c=JSON.parse(n),s=c.id??c._id;if(s&&/^[A-Za-z0-9]{15,30}$/.test(s))return s}catch{}}}catch{}return null},Ee=async({contactId:e,locationId:o,status:t,userId:r})=>{let n=await fetch(we,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:e,location:{id:o},customData:{call_status:t,triggered_by_user_id:r??""}}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},D="ws-crm-contact-actions-bar",_e="ws-crm-call-status-dropdown",Z="ws-crm-offer-made-modal",Se=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Ce=[".central-panel","[class*='central-panel']"],Te=async()=>{for(let e of Ce)try{let o=await _(e,{timeoutMs:3e3});if(o)return o}catch{}try{return(await _("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Le=e=>{let o=document.createElement("div");o.id=_e,o.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=N,t.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${l.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${l.ash};
      margin-left: 2px;
    ">\u25BE</span>
  `;let r=document.createElement("div");return r.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${v.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,Se.forEach(a=>{let n=document.createElement("button");n.type="button",n.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${l.bone};
      border: none;
      border-radius: ${v.sm};
      font-family: ${f.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,n.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${H[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,n.addEventListener("mouseenter",()=>{n.style.background=l.slate}),n.addEventListener("mouseleave",()=>{n.style.background="transparent"}),n.addEventListener("click",async()=>{d.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${e}`);let c=t.firstElementChild,s=t.children[1],i=t.children[2];c&&(c.style.background=H[a.color]),s&&(s.textContent=a.label),r.style.display="none";let g=y()?.locationId,p=ke();if(!g){d.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),s&&(s.textContent=`${a.label} (no tenant!)`),s&&(s.style.color=l.amber);return}if(a.color==="green"&&!p){d.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),s&&(s.textContent=`${a.label} (no user!)`),s&&(s.style.color=l.amber);return}let b=i?.textContent??"\u25BE";i&&(i.textContent="\u2026"),t.style.opacity="0.75";try{await Ee({contactId:e,locationId:g,status:a.label,userId:p}),i&&(i.textContent="\u2713"),setTimeout(()=>{i&&(i.textContent=b),t.style.opacity="1"},900)}catch(B){d.warn("Call Status webhook failed:",B),i&&(i.textContent="\u2717"),s&&(s.style.color=l.amber),t.style.opacity="1",setTimeout(()=>{i&&(i.textContent=b),s&&(s.style.color=l.bone)},1800)}}),r.appendChild(n)}),t.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{o.contains(a.target)||(r.style.display="none")}),o.appendChild(t),o.appendChild(r),o},Ie=e=>{document.getElementById(Z)?.remove();let o=document.createElement("div");o.id=Z,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${f.sans};
  `;let t=document.createElement("div");t.style.cssText=`
    width: min(420px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${l.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${l.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${l.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${l.slate};
      border: 1px solid ${l.steel};
      border-radius: ${v.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${l.ash}; font-family: ${f.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${l.bone};
          font-family: ${f.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${l.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${l.slate};
        border: 1px solid ${l.steel};
        border-radius: ${v.sm};
        color: ${l.bone};
        font-family: ${f.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${N}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,o.appendChild(t),document.body.appendChild(o);let n=()=>o.remove();o.addEventListener("click",c=>{c.target===o&&n()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",n),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let c=(t.querySelector("#ws-offer-amount")?.value??"").trim(),s=t.querySelector("#ws-offer-expires")?.value??"";if(!c||Number(c)<=0){d.warn("Offer Made submit blocked \u2014 invalid amount");return}d.info(`Offer Made recorded for contact ${e}: $${c}, expires ${s}`),n()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},J=e=>{let o=document.createElement("div");o.id=D,o.dataset.contactId=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${l.graphite};
    border-bottom: 1px solid ${l.steel};
    flex-shrink: 0;
  `,o.appendChild(Le(e));let t=document.createElement("button");return t.type="button",t.style.cssText=O,t.textContent="Offer Made",t.addEventListener("click",()=>Ie(e)),o.appendChild(t),o},Me=async()=>{let e=y();if(!e){document.getElementById(D)?.remove();return}let o=document.getElementById(D);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove();let t=await Te();if(!t){d.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=y();if(!r||r.contactId!==e.contactId)return;let a=J(e.contactId);a.dataset.mountTarget=t.className||"central-panel",t.insertBefore(a,t.firstChild),d.debug(`Mounted contact actions bar for ${e.contactId}`);let n=null;n=new MutationObserver(()=>{let c=document.getElementById(D);if(!(y()?.contactId===e.contactId)){n?.disconnect();return}if(!c){let i=J(e.contactId);i.dataset.mountTarget=a.dataset.mountTarget??"",t.insertBefore(i,t.firstChild),d.debug(`Re-mounted actions bar after React wipe for ${e.contactId}`)}}),n.observe(t,{childList:!0})},K=()=>{Me()};var X="reos-theme-stylesheet",Q="reos-theme-fonts",Ae=()=>{if(document.getElementById(Q))return;let e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.gstatic.com",o.crossOrigin="anonymous",document.head.appendChild(o);let t=document.createElement("link");t.id=Q,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(t)},De=`
/* ============================================
   REINVEST OS \u2014 VAULT THEME
   Injected by Customizer at bundle load.
   ============================================ */

/* 1. TOKENS \u2014 single source of truth (mirrors src/core/theme.ts) */
:root {
  --reos-obsidian: #0A0D12;
  --reos-graphite: #12161D;
  --reos-slate: #1A1F28;
  --reos-steel: #252C36;
  --reos-bone: #EDEEF0;
  --reos-ash: #9098A3;
  --reos-emerald: #0FB57E;
  --reos-emerald-bright: #14C98B;
  --reos-blue: #4B8BF5;
  --reos-amber: #E8A33C;
  --reos-crimson: #D43F4A;
  --reos-cool-gray: #5A6470;
  --reos-emerald-glow: rgba(15, 181, 126, 0.12);
  --reos-emerald-border: rgba(15, 181, 126, 0.3);
}

/* 2. GLOBAL \u2014 font + body color. The body bg is dimmed but specific
   surfaces get their own bg in section 6. */
body,
.hl-app,
.app-container,
.hl_wrapper,
.hr-wrapper-container,
.hr-config-provider {
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background: var(--reos-obsidian) !important;
  color: var(--reos-bone) !important;
}

/* 3. NUMERIC FIELDS \u2014 Geist Mono for data fields, tabular figures so
   columns of numbers line up. */
.opportunity-value,
.deal-value,
.currency,
.monetary,
[class*="amount"],
[class*="phone"],
[class*="-date"],
[class*="-time"] {
  font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace !important;
  font-feature-settings: 'tnum' 1 !important;
}

/* 4. SIDEBAR \u2014 graphite surface, emerald active state, mono nav labels.
   GHL actually uses aside.default-bg-color for the main nav sidebar
   (default-bg-color resolves to a slate-blue-grey in their CSS), not
   .sidebar-v2. Catch both. */
aside.default-bg-color,
aside[class*="default-bg-color"],
.sidebar-v2,
.sidebar-v2-location,
.nav-sidebar,
[class*="sidebar-v2"],
nav[class*="sidebar"] {
  background: var(--reos-graphite) !important;
  border-right: 1px solid var(--reos-steel) !important;
}
.sidebar-v2 a,
.sidebar-v2-location a,
aside.default-bg-color a,
[class*="sidebar"] a {
  color: var(--reos-ash) !important;
  font-weight: 500 !important;
}
.sidebar-v2 a:hover,
.sidebar-v2-location a:hover,
aside.default-bg-color a:hover,
[class*="sidebar"] a:hover {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}
.sidebar-v2 a.active,
.sidebar-v2 a[class*="active"],
aside.default-bg-color a.active,
aside.default-bg-color a[class*="active"],
[class*="sidebar"] a.router-link-active {
  color: var(--reos-emerald) !important;
  background: var(--reos-emerald-glow) !important;
}

/* 4a. AGENCY LOGO \u2014 by default GHL renders the agency logo at its native
   width (~78px) inside a 224px sidebar with a 16px parent padding-top +
   12px container margin-bottom \u2014 that's ~28px of dead vertical space
   sandwiching the logo. Force the image to fill, drop the surrounding
   gaps so the brand mark sits flush at the top of the panel. */
.lead-connector {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
.agency-logo-container {
  padding: 5px 5px 0 5px !important;
  margin-bottom: 0 !important;
}
.agency-logo {
  width: 100% !important;
  height: auto !important;
  max-height: 120px !important;
  object-fit: contain !important;
}

/* 4b. BUSINESS / LOCATION SWITCHER CHIP \u2014 the "Paperwork Investments /
   Palmdale, CA" chip below the logo. Default is gray-600 (rgb 75,85,99);
   coerce to slate fill with steel border so it reads as a button on the
   graphite sidebar. */
aside.default-bg-color > div > div[class*="text-white"],
aside.default-bg-color [class*="cursor-pointer"][class*="text-white"] {
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 6px !important;
  color: var(--reos-bone) !important;
}
aside.default-bg-color > div > div[class*="text-white"]:hover,
aside.default-bg-color [class*="cursor-pointer"][class*="text-white"]:hover {
  border-color: var(--reos-cool-gray) !important;
  background: var(--reos-steel) !important;
}

/* 5. TOP BAR \u2014 match sidebar surface. .hl_header is GHL's actual top
   header element; the generic .top-bar / [class*="topbar"] aliases are
   kept as safety nets for older GHL builds. */
.top-bar,
header.app-header,
header.hl_header,
.hl_header,
[class*="topbar"] {
  background: var(--reos-graphite) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

/* 6. CARDS / PANELS \u2014 graphite surface, steel hairline border, no shadow.
   Includes the contact-detail LHS (#record-details-lhs), the conversation
   panel's stable parent (.central-panel), and other common card wrappers. */
.card,
.panel,
[class*="card-container"],
[class*="widget"],
.bg-background,
.bg-contacts-panel,
.central-panel,
#record-details-lhs,
.contactsHighriseApp [class*="rounded-xl"],
.contactsHighriseApp [class*="rounded-lg"] {
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

/* Strip default light-grey backgrounds GHL uses for inner sub-panels */
.bg-gray-50,
.bg-gray-100,
.bg-white {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 7. PRIMARY BUTTONS \u2014 emerald CTA, obsidian text, bold */
.btn-primary,
button.primary,
[class*="btn-primary"],
button[type="submit"]:not([class*="btn-secondary"]):not([class*="cancel"]) {
  background: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 4px !important;
}
.btn-primary:hover,
button.primary:hover,
[class*="btn-primary"]:hover {
  background: var(--reos-emerald-bright) !important;
}

/* 8. SECONDARY BUTTONS \u2014 outlined, steel border */
.btn-secondary,
button.secondary,
[class*="btn-secondary"],
button.cancel {
  background: transparent !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
}
.btn-secondary:hover,
button.secondary:hover {
  border-color: var(--reos-cool-gray) !important;
  background: var(--reos-slate) !important;
}

/* 9. INPUTS \u2014 slate fill, emerald focus ring.
   GHL uses a custom hr-input component (BEM-style classes). We have to
   match the GHL-namespaced classes to outrank their default text color:
   a single tag selector "input" loses on specificity to the GHL class
   .hr-input__input-el even with !important. */
input:not([type="checkbox"]):not([type="radio"]),
textarea,
select,
.form-control,
[class*="form-input"],
.hr-input,
.hr-input__input,
.hr-input__input-el,
.hr-textarea,
.hr-select,
[class*="hr-input"] input,
[class*="hr-select"] {
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  border-radius: 4px !important;
}
.hr-input__input-el,
.hr-textarea textarea,
[class*="hr-input"] input {
  color: var(--reos-bone) !important;
  background: transparent !important;
}
input:focus,
textarea:focus,
select:focus,
.form-control:focus,
.hr-input--focus,
.hr-input--focused {
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
  outline: none !important;
}
input::placeholder,
textarea::placeholder,
.hr-input__placeholder {
  color: var(--reos-cool-gray) !important;
}

/* Labels for inputs \u2014 small mono caps in ash */
label,
.form-label,
[class*="field-label"] {
  color: var(--reos-ash) !important;
}

/* 10. TABLES \u2014 dark rows, hairline borders, mono header */
table,
.table,
[role="table"] {
  background: var(--reos-graphite) !important;
  border-collapse: collapse !important;
}
table th,
.table th,
[role="columnheader"] {
  background: var(--reos-graphite) !important;
  color: var(--reos-cool-gray) !important;
  font-family: 'Geist Mono', monospace !important;
  font-size: 10px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  border-bottom: 1px solid var(--reos-steel) !important;
  font-weight: 500 !important;
}
table td,
.table td,
[role="cell"] {
  border-bottom: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  background: var(--reos-graphite) !important;
}
table tr:hover td,
.table tr:hover td {
  background: var(--reos-slate) !important;
}

/* 11. PIPELINE \u2014 opportunity cards on board view */
.opportunity-card,
[class*="opportunity-tile"] {
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 6px !important;
  box-shadow: none !important;
}
.opportunity-card:hover,
[class*="opportunity-tile"]:hover {
  border-color: var(--reos-cool-gray) !important;
}
.pipeline-stage,
[class*="stage-column"] {
  background: var(--reos-graphite) !important;
}
.pipeline-stage-header,
[class*="stage-header"] {
  background: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  font-family: 'Geist Mono', monospace !important;
  font-size: 11px !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
}

/* 12. MODALS / DIALOGS */
.modal,
.modal-content,
[class*="dialog"],
[role="dialog"] {
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 10px !important;
  color: var(--reos-bone) !important;
}
.modal-header,
.modal-footer,
[class*="dialog-header"],
[class*="dialog-footer"] {
  border-color: var(--reos-steel) !important;
}
.modal-backdrop,
[class*="overlay"] {
  background: rgba(0, 0, 0, 0.6) !important;
}

/* 13. SCROLLBAR \u2014 match the theme */
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-track { background: var(--reos-obsidian); }
*::-webkit-scrollbar-thumb { background: var(--reos-steel); border-radius: 4px; }
*::-webkit-scrollbar-thumb:hover { background: var(--reos-cool-gray); }

/* 14. KILL DEFAULTS WE DON'T WANT */
.shadow,
.shadow-sm,
.shadow-md,
.shadow-lg,
.shadow-xl,
.box-shadow {
  box-shadow: none !important;
}

/* 15. TEXT COLORS \u2014 coerce GHL's grey-text utility classes onto our scale */
.text-gray-900,
.text-gray-800,
.text-gray-700,
.text-black {
  color: var(--reos-bone) !important;
}
.text-gray-600,
.text-gray-500 {
  color: var(--reos-ash) !important;
}
.text-gray-400,
.text-gray-300 {
  color: var(--reos-cool-gray) !important;
}

/* 16. BORDERS \u2014 coerce GHL's grey-border utility classes onto our scale */
.border-gray-100,
.border-gray-200,
.border-gray-300,
.border-gray-400 {
  border-color: var(--reos-steel) !important;
}

/* 17. CONTACT-DETAIL specific tweaks (#record-details-lhs sticky header) */
#record-details-lhs .sticky {
  background: var(--reos-graphite) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}

/* 17b. Central-panel flex layout so the Customizer-injected actions bar
   (Call Status + Offer Made) cooperates with #contact-conversation-panel.
   Without this, the conversation panel uses h-full (height: 100%) which
   resolves to 100% of the central-panel and ignores the 45px my bar
   occupies \u2014 pushing the compose footer 29px below the viewport so the
   emoji / attach icons get cut off. Flex-column lets my bar take its
   natural height while the conversation panel fills the rest. */
.central-panel {
  display: flex !important;
  flex-direction: column !important;
}
.central-panel > #contact-conversation-panel,
.central-panel > div > #contact-conversation-panel {
  flex: 1 1 0 !important;
  min-height: 0 !important;
  height: auto !important;
}
/* The actions-bar Customizer injects is flex-none so it keeps its size */
#ws-crm-contact-actions-bar {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}

/* 18a. GHL Tailwind arbitrary backgrounds \u2014 the contact-detail page hard-
   codes specific hex colors via Tailwind arbitrary-value classes like
   bg-[#F7F9FD] (conversation main + compose footer) and bg-[#eff4ff]
   (SMS modal header tab strip). Substring match catches them all. */
[class*="F7F9FD"],
[class*="F7F9FB"],
[class*="F9FAFB"],
[class*="eff4ff"],
[class*="EFF4FF"],
[class*="bg-gray-50"],
[class*="bg-gray-100"],
[class*="bg-gray-200"],
[class*="bg-white"],
[class*="bg-blue-50"],
[class*="bg-blue-100"],
[class*="bg-sky-50"],
[class*="bg-sky-100"],
[class*="bg-indigo-50"],
[class*="bg-indigo-100"],
[class*="bg-slate-50"],
[class*="bg-slate-100"],
[class*="bg-neutral-50"],
[class*="bg-neutral-100"],
[class*="bg-zinc-50"],
[class*="bg-zinc-100"],
[class*="bg-stone-50"],
[class*="bg-stone-100"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 18a-2. Inline-styled whites \u2014 GHL also paints some surfaces via inline
   style="background-color: white" (SMS modal compose body). Inline
   non-important loses to stylesheet !important, so we coerce by matching
   the style attribute substring. */
[style*="background-color: white"],
[style*="background-color:white"],
[style*="background-color: #fff"],
[style*="background-color:#fff"] {
  background-color: var(--reos-graphite) !important;
}

/* Border-color arbitrary classes used in the SMS tab strip */
[class*="border-b-[#d0d5dd]"],
[class*="d0d5dd"] {
  border-color: var(--reos-steel) !important;
}

/* 18b. Tab nav strip \u2014 "All fields / DND / Actions" tabs at the top of the
   contact form. The strip is a segmented-control pattern with several
   layers: a "rail" track, a moving "capsule" highlight, and per-tab
   "tab-wrapper" cells. All three default to light greys / pure white. */
.hr-tabs,
.hr-tabs-nav,
.hr-tabs-nav-scroll-content,
.hr-tabs-content,
.hr-tabs-pane,
.hr-tabs-rail,
.hr-tabs-tab-wrapper {
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
/* Capsule = absolutely-positioned highlight that slides under the active
   tab. If we paint it graphite it COVERS the tab text underneath. Render
   it as an emerald-glow tint with a steel outline \u2014 signals active state
   without hiding the label. */
.hr-tabs-capsule {
  background: var(--reos-emerald-glow) !important;
  border: 1px solid var(--reos-emerald-border) !important;
  border-radius: 4px !important;
  pointer-events: none !important;
}
.hr-tabs-tab {
  color: var(--reos-ash) !important;
  background: transparent !important;
}
.hr-tabs-tab:hover,
.hr-tabs-tab--active {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}
.hr-tabs-tab--active {
  border-bottom: 2px solid var(--reos-emerald) !important;
}
.hr-tabs-bar {
  background: var(--reos-emerald) !important;
}

/* 18c. Collapsible content body \u2014 .hr-collapse-item__content-inner is
   pure white by default and contains all the contact fields. */
.hr-collapse-item__content,
.hr-collapse-item__content-inner,
.hr-collapse-item__content-wrap {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 18c-2. TOP TOOLBAR ACCENT BUTTONS \u2014 the row in the header (phone /
   Ask AI / notifications / help / "What's new" pill, etc.) ships with
   GHL's brand colors that are slightly oversaturated against our dark
   theme. Soften the rendering:
   - Round all toolbar buttons to a consistent radius
   - Add subtle border-color hint on whitelabel pills
   - Ensure text inside accent buttons is bone/dark for legibility */
.hl_header [class*="rounded-full"],
header.hl_header [class*="rounded-full"],
.hl_header [class*="pill"],
header.hl_header [class*="pill"] {
  border-radius: 999px !important;
}

/* 18d. AVATAR \u2014 .hr-avatar circles get a mint background by default and
   the initials inside (.hr-avatar__text) render in white. That gives a
   white-on-light-mint contrast that's barely legible. Force the initials
   to obsidian + bigger font-size so they read clearly on the mint circle.

   GHL also uses non-hr-prefixed avatar variants (just .avatar / Tailwind
   .rounded-full circles with initials inside). Match those too.

   font-size baseline = 14px (with !important and html body prefix to win
   the cascade vs GHL's text-xs defaults). The runtime resizeAvatarText
   pass then UPSIZES this for larger circles (proportional 0.5 ratio,
   capped at 20px). */
html body .hr-avatar,
html body .hr-avatar__text,
html body .hr-avatar__text *,
html body .hr-avatar p,
html body .hr-avatar span,
html body .hr-avatar div,
html body [class*="avatar"],
html body [class*="avatar"] span,
html body [class*="avatar"] p,
html body [class*="avatar"] div,
html body [class*="avatar"] [class*="text"],
html body [class*="avatar"] [class*="initials"] {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 1 !important;
  text-align: center !important;
}

/* Avatar circle containers: text-align center for the initials. We do
   NOT use display:flex in CSS because that catches edit-icon containers
   that happen to have "avatar" in their class. Flex-centering happens
   in the JS runtime (resizeAvatarText) where we can detect whether the
   element actually holds initials text vs an icon. */

/* 18e. HR BUTTON variants \u2014 GHL ships a hr-button system with several
   tones. Default and tertiary variants render light (white / light-blue
   fills) which conflicts with the dark theme. */
.hr-button {
  font-family: 'Geist', sans-serif !important;
}
/* Tertiary = light-blue chip; remap to slate fill with emerald text */
.hr-button--tertiary {
  background: var(--reos-slate) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-steel) !important;
}
.hr-button--tertiary:hover {
  background: var(--reos-steel) !important;
  color: var(--reos-emerald-bright) !important;
}
/* Default / outlined variant \u2014 transparent fill, steel border */
.hr-button--default,
.hr-button--default-type:not(.hr-button--text):not(.hr-button--tertiary):not(.hr-button--primary) {
  background: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
.hr-button--default:hover,
.hr-button--default-type:not(.hr-button--text):not(.hr-button--tertiary):not(.hr-button--primary):hover {
  border-color: var(--reos-cool-gray) !important;
  background: var(--reos-steel) !important;
}
/* Text-only (link-style) button \u2014 transparent fill, bone text */
.hr-button--text {
  background: transparent !important;
  color: var(--reos-ash) !important;
}
.hr-button--text:hover {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}
/* Primary (CTA) \u2014 emerald like the rest of the theme */
.hr-button--primary {
  background: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
  border: none !important;
}
.hr-button--primary:hover {
  background: var(--reos-emerald-bright) !important;
}
/* Disabled state */
.hr-button--disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
}

/* 19. HR DESIGN SYSTEM \u2014 GHL's hr- prefixed components.
   These need higher specificity than tag selectors because GHL's own
   stylesheet rules use these classes with !important. Catch-all rules
   coerce text + surfaces onto our scale. */
.hr-text,
.hr-collapse-item__header,
.hr-collapse-item__header-main,
.hr-collapse-item__title,
.hr-collapse-item__content,
.hr-form-item__label,
.hr-form-item__label-text {
  color: var(--reos-bone) !important;
}
.hr-collapse-item,
.hr-collapse,
.hr-card,
.hr-tag {
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
.hr-collapse-item__header:hover {
  background: var(--reos-slate) !important;
}
/* Dropdowns / select popovers */
.hr-select-menu,
.hr-dropdown,
.hr-popover,
.hr-base-select-menu {
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
.hr-base-select-option,
.hr-dropdown-option {
  color: var(--reos-bone) !important;
}
.hr-base-select-option:hover,
.hr-dropdown-option:hover {
  background: var(--reos-slate) !important;
}

/* 19a. Dropdown selected-value display \u2014 the rendered text inside the CLOSED
   dropdown trigger (after a user picks an option). GHL renders this in a
   placeholder/muted color by default; force it to bone so picked values match
   the rest of the field colors. Covers hr-select, hr-base-select, and the
   broader [class*='select'] family. */
.hr-select,
.hr-select__input,
.hr-select__display,
.hr-select__value,
.hr-select-trigger,
.hr-select-trigger__value,
.hr-base-select,
.hr-base-select__value,
.hr-base-select__display,
[class*="select__value"],
[class*="select__display"],
[class*="select-trigger"],
[class*="select__input"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
.hr-select__placeholder,
.hr-base-select__placeholder,
[class*="select__placeholder"] {
  color: var(--reos-cool-gray) !important;
  -webkit-text-fill-color: var(--reos-cool-gray) !important;
}

/* 19c. DATE / TIME pickers \u2014 these often render with transparent or
   panel-matching backgrounds (graphite), making the field boundary
   disappear against the form panel. Force slate + steel border so they
   match the other input surfaces.

   Covers HTML5 input types (date, datetime-local, time, etc.), GHL's
   hr-date-picker / hr-datepicker family, and any class containing
   "date-picker"/"date-input"/"time-picker" (excluding menu/popover/overlay
   so the open calendar popover stays graphite-on-dark for contrast). */
input[type="date"],
input[type="datetime-local"],
input[type="time"],
input[type="month"],
input[type="week"],
.hr-date-picker,
.hr-date-input,
.hr-datepicker,
.hr-time-picker,
[class*="date-picker"]:not([class*="menu"]):not([class*="popover"]):not([class*="overlay"]):not([class*="popup"]),
[class*="datepicker"]:not([class*="menu"]):not([class*="popover"]):not([class*="overlay"]):not([class*="popup"]),
[class*="date-input"],
[class*="time-picker"]:not([class*="menu"]):not([class*="popover"]):not([class*="overlay"]):not([class*="popup"]),
[class*="time-input"] {
  background: var(--reos-slate) !important;
  background-color: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  border-radius: 4px !important;
}

/* 19b. Dropdown CLOSED-trigger background \u2014 when a value is picked, GHL
   renders the trigger with a near-obsidian fill that mismatches the slate
   text-input surface next to it. Force slate fill so all field surfaces
   look consistent. The OPEN-menu popover stays graphite (see rules above
   targeting .hr-select-menu / .hr-base-select-menu / .hr-popover).

   Broad-net selectors below \u2014 we don't know the exact class GHL uses for
   every dropdown variant on every page, so we match ARIA roles + common
   class patterns AND substring "select"/"dropdown"/"combobox" forms, while
   carefully EXCLUDING menu/popover/option containers (which stay graphite). */
.hr-select,
.hr-select__input,
.hr-select__inner,
.hr-select-trigger,
.hr-base-select,
.hr-base-select__inner,
[role="combobox"],
[role="combobox"] > *,
[aria-haspopup="listbox"],
[aria-haspopup="true"]:not(button):not(a):not([class*="menu"]),
.el-select,
.el-select__wrapper,
.el-input__wrapper,
.el-input__inner,
[class*="hr-select"]:not([class*="menu"]):not([class*="option"]):not([class*="popover"]):not([class*="dropdown"]):not([class*="overlay"]),
[class*="select-trigger"]:not([class*="menu"]),
[class*="combobox"]:not([class*="menu"]):not([class*="popover"]),
[class*="dropdown-toggle"],
[class*="dropdown-input"] {
  background: var(--reos-slate) !important;
  background-color: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

/* END REINVEST OS THEME */
`,$e=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar'], [class*='avatar'] span, [class*='avatar'] p, [class*='avatar'] div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff']",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}}],$=()=>{for(let e of $e){let o;try{o=document.querySelectorAll(e.selector)}catch{continue}o.forEach(t=>{for(let[r,a]of Object.entries(e.styles)){let n=t.style.getPropertyPriority(r),c=t.style.getPropertyValue(r);n==="important"&&c===a||t.style.setProperty(r,a,"important")}})}},G="#1A1F28",Fe=26,Re=31,Be=40,ee=new Set,te=new Set,F=()=>{document.body.querySelectorAll("*").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let r=o.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;o.style.setProperty("display","none","important");let a=o.className?.toString()||"<no class>";!te.has(a)&&a!=="<no class>"&&(te.add(a),d.debug(`Hid empty "--" leaf: "${a}"`))})},oe=new Set,Pe=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, aside.default-bg-color").forEach(o=>{o.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let n=window.getComputedStyle(r),c=n.backgroundColor,s=n.backgroundImage||"",i=!1;if(s!=="none"&&s.includes("gradient"))i=!0;else if(c&&c!=="rgba(0, 0, 0, 0)"&&c!=="transparent"){let h=c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(h){let m=parseInt(h[1],10),x=parseInt(h[2],10),w=parseInt(h[3],10);(m>=60||x>=60||w>=60)&&(m>230&&x>230&&w>230||(m>=80||x>=80||w>=80)&&(i=!0))}}if(!i)return;let g=(r.textContent||"").trim(),p=a,b=Array.from(r.querySelectorAll("*")).map(h=>(h.className?.toString()||"").toLowerCase()).join(" "),B=g.toLowerCase().includes("ask ai")||p.includes("ai-button")||p.includes("ask-ai")||p.includes("askai"),ue=p.includes("bg-clip-text")||p.includes("text-transparent")||b.includes("bg-clip-text")||b.includes("text-transparent"),me=Array.from(r.querySelectorAll("*")).some(h=>{let m=window.getComputedStyle(h),x=m.getPropertyValue("-webkit-background-clip")||"",w=m.getPropertyValue("background-clip")||"";return x.includes("text")||w.includes("text")});if(B||ue||me){let h=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],m=x=>{h.forEach(w=>x.style.removeProperty(w))};m(r),r.querySelectorAll("*").forEach(m);return}let k="#12161D";r.style.setProperty("color",k,"important"),r.querySelectorAll("*").forEach(h=>{let m=h.tagName.toLowerCase();m==="svg"||m==="path"||m==="circle"||m==="rect"||m==="polygon"||m==="polyline"||m==="line"||m==="g"?(h.style.setProperty("fill",k,"important"),h.style.setProperty("stroke",k,"important"),h.style.setProperty("color",k,"important")):(h.style.setProperty("color",k,"important"),h.style.setProperty("-webkit-text-fill-color",k,"important"))});let C=r.className?.toString()||"<no class>";!oe.has(C)&&C!=="<no class>"&&(oe.add(C),d.debug(`Darkened SVG icons on colored button: "${C}"`))})})},re=new Set,He=()=>{document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(o=>{o.querySelectorAll("*").forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar")||a.includes("notification-dot")||a.includes("indicator")||a.includes("ai-button")||a.includes("ask-ai")||a.includes("bg-clip-text")||a.includes("text-transparent")||r.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']")||(r.textContent||"").toLowerCase().includes("ask ai"))return;let n=window.getComputedStyle(r).backgroundColor;if(!n||n==="rgba(0, 0, 0, 0)"||n==="transparent")return;let c=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let s=parseInt(c[1],10),i=parseInt(c[2],10),u=parseInt(c[3],10);if(!(s>200&&i>200&&u>200))return;let p=r.getBoundingClientRect();if(p.width<24||p.height<16||p.width>1400)return;r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important");let b=r.className?.toString()||"<no class>";!re.has(b)&&b!=="<no class>"&&(re.add(b),d.debug(`Coerced light bg (${p.width.toFixed(0)}x${p.height.toFixed(0)}, rgb(${s},${i},${u})): "${b}"`))})})},ae=new Set,Oe=()=>{let e="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0)return;let r=(t.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||t.closest(e)||t.closest("[class*='avatar'], [class*='hr-avatar']"))return;let a=t,n=null;for(let g=0;g<4&&a;g++){let p=a.nextElementSibling;if(p&&(p.matches(e)||p.querySelector(e)!==null)){n=p;break}a=a.parentElement}if(!n)return;let c=t.getBoundingClientRect();if(c.width===0||c.height===0||c.width>400||c.height>60)return;t.style.setProperty("color","#9098A3","important"),t.style.setProperty("-webkit-text-fill-color","#9098A3","important");let s=n,i=s.getBoundingClientRect();i.width>0&&i.width<=800&&i.height>0&&i.height<=100&&(s.style.setProperty("background-color",G,"important"),s.style.setProperty("border-color","#252C36","important"),s.style.setProperty("border-style","solid","important"),s.style.setProperty("border-width","1px","important"),s.style.setProperty("border-radius","4px","important"));let u=t.className?.toString()||"<no class>";!ae.has(u)&&u!=="<no class>"&&(ae.add(u),d.debug(`Colored field label "${r.slice(0,30)}": "${u}"`))})},ne=new Set,Ne=()=>{document.querySelectorAll("[class*='avatar']").forEach(o=>{if(o.closest("[id^='ws-crm-']"))return;let t=o.getBoundingClientRect();if(t.width===0||t.height===0||t.height>80||o.querySelector("svg, img")!==null)return;let a=(o.textContent||"").trim();if(a.length===0||a.length>4)return;let n=Math.min(t.width,t.height),c=Math.max(16,Math.min(24,Math.round(n*.6)));o.style.setProperty("font-size",`${c}px`,"important"),o.style.setProperty("line-height","1","important"),o.style.setProperty("display","flex","important"),o.style.setProperty("align-items","center","important"),o.style.setProperty("justify-content","center","important"),o.style.setProperty("text-align","center","important"),o.querySelectorAll("*").forEach(i=>{i.tagName==="svg"||i.tagName==="SVG"||i.tagName!=="IMG"&&(i.style.setProperty("font-size",`${c}px`,"important"),i.style.setProperty("line-height","1","important"),i.style.setProperty("text-align","center","important"))});let s=o.className?.toString()||"<no class>";!ne.has(s)&&s!=="<no class>"&&(ne.add(s),d.debug(`Resized avatar text to ${c}px (circle ${n.toFixed(0)}px): "${s}"`))})},se=new Set,Ge=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(o=>{if(o.closest("[id^='ws-crm-']"))return;let t=o.getBoundingClientRect();if(t.width===0||t.height===0)return;o.style.setProperty("background-color",G,"important"),o.style.setProperty("border-color","#252C36","important"),o.style.setProperty("color","#EDEEF0","important"),o.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=o.className?.toString()||"<no class>";!se.has(r)&&r!=="<no class>"&&(se.add(r),d.debug(`Forced input slate bg: "${r}"`))})},R=()=>{document.body.querySelectorAll("*").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;let t=window.getComputedStyle(o).backgroundColor;if(!t||t==="rgba(0, 0, 0, 0)"||t==="transparent")return;let r=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),n=parseInt(r[2],10),c=parseInt(r[3],10);if(!(a<Fe&&n<Re&&c<Be))return;let i=o.getBoundingClientRect();if(i.width===0||i.height===0||i.width>800||i.height>200)return;o.style.setProperty("background-color",G,"important");let u=o.className?.toString()||"<no class>";!ee.has(u)&&u!=="<no class>"&&(ee.add(u),d.debug(`Coerced dark bg to slate (${i.width.toFixed(0)}x${i.height.toFixed(0)}, rgb(${a},${n},${c})): "${u}"`))})},le=()=>{let e,o=()=>{e===void 0&&(e=window.setTimeout(()=>{e=void 0,$(),Ge(),R(),F(),Oe(),He(),Pe(),Ne()},100))};$(),R(),F(),window.setTimeout(()=>{$(),R(),F()},500),window.setTimeout(()=>{$(),R(),F()},1500),new MutationObserver(()=>{o()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},ie=()=>{if(Ae(),!document.getElementById(X)){let e=document.createElement("style");e.id=X,e.textContent=De,document.head.appendChild(e),d.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?le():window.addEventListener("DOMContentLoaded",le))};var ce="ws-crm-customizer-version-badge",de=()=>{if(document.getElementById(ce))return;let e=document.createElement("div");e.id=ce,e.style.cssText=`
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
  `,e.textContent=`Customizer v${M}`,e.title=`Built ${A}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var pe=()=>{d.info(`Loaded v${M} (built ${A})`),ie(),q(),U(e=>{d.debug("Page handler firing for:",e),de(),Y(),K()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();})();
//# sourceMappingURL=customizer.js.map
