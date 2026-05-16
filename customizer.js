/* Wholesaling CRM Customizer v0.5.6 — built 2026-05-16T03:34:41.965Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var w="[wholesaling-crm-customizer]",X="__WS_CRM_DEBUG",Q=()=>!!window[X],l={info(...e){console.log(w,...e)},warn(...e){console.warn(w,...e)},error(...e){console.error(w,...e)},debug(...e){Q()&&console.log(w,"[debug]",...e)}};var $=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},E="",y="other",I=new Set,k=()=>{if(window.location.pathname!==E){E=window.location.pathname,y=$(),l.debug("Page changed:",y,E);for(let e of I)try{e(y)}catch(o){l.error("Subscriber threw:",o)}}},A=e=>(I.add(e),setTimeout(()=>e(y),0),()=>{I.delete(e)}),R=()=>{y=$(),E=window.location.pathname,l.debug("Router init, current page:",y);let e=history.pushState.bind(history),o=history.replaceState.bind(history);history.pushState=function(t,r,a){e(t,r,a),k()},history.replaceState=function(t,r,a){o(t,r,a),k()},window.addEventListener("popstate",k),setInterval(k,1e3)};var _="0.5.6",C="2026-05-16T03:34:41.965Z";var ee=/\/contacts\/detail\/([A-Za-z0-9]+)/,te=/\/v2\/location\/([A-Za-z0-9]+)/,m=()=>{let e=window.location.pathname,o=e.match(ee);if(!o)return null;let t=e.match(te);return{contactId:o[1],locationId:t?t[1]:null}};var v=(e,o={})=>{let{timeoutMs:t=8e3,pollMs:r=100,root:a=document}=o;return new Promise((n,d)=>{let i=a.querySelector(e);if(i){n(i);return}let c,u,g=()=>{f&&f.disconnect(),c!==void 0&&window.clearTimeout(c),u!==void 0&&window.clearInterval(u)},f=new MutationObserver(()=>{let h=a.querySelector(e);h&&(g(),n(h))});f.observe(document.body,{childList:!0,subtree:!0}),u=window.setInterval(()=>{let h=a.querySelector(e);h&&(g(),n(h))},r),c=window.setTimeout(()=>{g(),l.warn(`waitForElement timed out for selector: ${e}`),d(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var s={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},b={sm:"4px",md:"6px",lg:"10px",pill:"999px"},p={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},M={purple:"#8B5CF6",green:s.emerald,orange:s.amber,red:s.crimson},B=e=>{let o=e==="emerald"?s.emeraldGlow:e==="amber"?s.amberGlow:s.slate,t=e==="emerald"?s.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":s.steel,r=e==="emerald"?s.emerald:e==="amber"?s.amber:s.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${o};
    color: ${r};
    border: 1px solid ${t};
    border-radius: ${b.pill};
    font-family: ${p.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},D=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${s.emerald};
  color: ${s.obsidian};
  border: none;
  border-radius: ${b.sm};
  font-family: ${p.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,F=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${s.bone};
  border: 1px solid ${s.steel};
  border-radius: ${b.sm};
  font-family: ${p.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var x="ws-crm-claim-release-pill",H=e=>{let o=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return o?o.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},oe=({contactId:e,mode:o})=>{let t=document.createElement("button");t.id=x,t.type="button",t.dataset.contactId=e,t.dataset.mode=o;let r=o==="claim"?"emerald":"amber",a=o==="claim"?s.emerald:s.amber;return t.style.cssText=B(r),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${o==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=o==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{l.info(`Claim/Release pill clicked for contact ${e}: ${o}`);let n=t.lastElementChild,d=n?.textContent??"";n&&(n.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{n&&(n.textContent=d),t.style.opacity="1",t.disabled=!1},700)}),t},re=async(e,o=1e4)=>{let t=Date.now();for(;Date.now()-t<o;){let r=H(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},O=(e,o)=>{let t=oe({contactId:o,mode:"claim"}),r=document.createElement("span");r.id=`${x}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(t),e.appendChild(r)},ae=async()=>{let e=m();if(!e){document.getElementById(x)?.remove();return}let o=document.getElementById(x);if(!(o&&o.dataset.contactId===e.contactId)){o&&o.remove();try{let t=await v("#record-details-lhs",{timeoutMs:1e4}),r=await re(t),a=m();if(!a||a.contactId!==e.contactId)return;if(!r){l.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}O(r,e.contactId),l.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`);let n=null;n=new MutationObserver(async()=>{if(!(m()?.contactId===e.contactId)){n?.disconnect();return}if(document.getElementById(x))return;let i=H(t);i&&(O(i,e.contactId),l.debug("Re-mounted Claim/Release pill after React wipe"))}),n.observe(t,{childList:!0,subtree:!0})}catch(t){l.warn("Could not mount Claim/Release pill:",t)}}},N=()=>{ae()};var ne="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",se=()=>{let e=window.WS_CRM_USER_ID;if(e&&/^[A-Za-z0-9]{15,30}$/.test(e))return e;let o=window,t=[o.appState?.user?.id,o.user?.id,o.currentUser?.id,o.LCUser?.id,o.HL?.user?.id];for(let r of t)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),n=a.id??a._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}for(let a of["tokenUser","currentUser","ghl_user"]){let n=localStorage.getItem(a);if(n)try{let d=JSON.parse(n),i=d.id??d._id;if(i&&/^[A-Za-z0-9]{15,30}$/.test(i))return i}catch{}}}catch{}return null},ie=async({contactId:e,locationId:o,status:t,userId:r})=>{let n=await fetch(ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:e,location:{id:o},customData:{call_status:t,triggered_by_user_id:r??""}}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},T="ws-crm-contact-actions-bar",le="ws-crm-call-status-dropdown",P="ws-crm-offer-made-modal",ce=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],de=[".central-panel","[class*='central-panel']"],pe=async()=>{for(let e of de)try{let o=await v(e,{timeoutMs:3e3});if(o)return o}catch{}try{return(await v("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},ue=e=>{let o=document.createElement("div");o.id=le,o.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=F,t.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${s.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${s.ash};
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
    background: ${s.graphite};
    border: 1px solid ${s.steel};
    border-radius: ${b.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,ce.forEach(a=>{let n=document.createElement("button");n.type="button",n.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${s.bone};
      border: none;
      border-radius: ${b.sm};
      font-family: ${p.sans};
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
        background: ${M[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,n.addEventListener("mouseenter",()=>{n.style.background=s.slate}),n.addEventListener("mouseleave",()=>{n.style.background="transparent"}),n.addEventListener("click",async()=>{l.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${e}`);let d=t.firstElementChild,i=t.children[1],c=t.children[2];d&&(d.style.background=M[a.color]),i&&(i.textContent=a.label),r.style.display="none";let g=m()?.locationId,f=se();if(!g){l.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),i&&(i.textContent=`${a.label} (no tenant!)`),i&&(i.style.color=s.amber);return}if(a.color==="green"&&!f){l.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),i&&(i.textContent=`${a.label} (no user!)`),i&&(i.style.color=s.amber);return}let h=c?.textContent??"\u25BE";c&&(c.textContent="\u2026"),t.style.opacity="0.75";try{await ie({contactId:e,locationId:g,status:a.label,userId:f}),c&&(c.textContent="\u2713"),setTimeout(()=>{c&&(c.textContent=h),t.style.opacity="1"},900)}catch(J){l.warn("Call Status webhook failed:",J),c&&(c.textContent="\u2717"),i&&(i.style.color=s.amber),t.style.opacity="1",setTimeout(()=>{c&&(c.textContent=h),i&&(i.style.color=s.bone)},1800)}}),r.appendChild(n)}),t.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{o.contains(a.target)||(r.style.display="none")}),o.appendChild(t),o.appendChild(r),o},me=e=>{document.getElementById(P)?.remove();let o=document.createElement("div");o.id=P,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${p.sans};
  `;let t=document.createElement("div");t.style.cssText=`
    width: min(420px, 92vw);
    background: ${s.graphite};
    border: 1px solid ${s.steel};
    border-radius: ${b.lg};
    padding: 24px 28px;
    color: ${s.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${p.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${s.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${s.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${p.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${s.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${s.slate};
      border: 1px solid ${s.steel};
      border-radius: ${b.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${s.ash}; font-family: ${p.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${s.bone};
          font-family: ${p.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${p.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${s.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${s.slate};
        border: 1px solid ${s.steel};
        border-radius: ${b.sm};
        color: ${s.bone};
        font-family: ${p.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,o.appendChild(t),document.body.appendChild(o);let n=()=>o.remove();o.addEventListener("click",d=>{d.target===o&&n()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",n),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let d=(t.querySelector("#ws-offer-amount")?.value??"").trim(),i=t.querySelector("#ws-offer-expires")?.value??"";if(!d||Number(d)<=0){l.warn("Offer Made submit blocked \u2014 invalid amount");return}l.info(`Offer Made recorded for contact ${e}: $${d}, expires ${i}`),n()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},G=e=>{let o=document.createElement("div");o.id=T,o.dataset.contactId=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${s.graphite};
    border-bottom: 1px solid ${s.steel};
    flex-shrink: 0;
  `,o.appendChild(ue(e));let t=document.createElement("button");return t.type="button",t.style.cssText=D,t.textContent="Offer Made",t.addEventListener("click",()=>me(e)),o.appendChild(t),o},be=async()=>{let e=m();if(!e){document.getElementById(T)?.remove();return}let o=document.getElementById(T);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove();let t=await pe();if(!t){l.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=m();if(!r||r.contactId!==e.contactId)return;let a=G(e.contactId);a.dataset.mountTarget=t.className||"central-panel",t.insertBefore(a,t.firstChild),l.debug(`Mounted contact actions bar for ${e.contactId}`);let n=null;n=new MutationObserver(()=>{let d=document.getElementById(T);if(!(m()?.contactId===e.contactId)){n?.disconnect();return}if(!d){let c=G(e.contactId);c.dataset.mountTarget=a.dataset.mountTarget??"",t.insertBefore(c,t.firstChild),l.debug(`Re-mounted actions bar after React wipe for ${e.contactId}`)}}),n.observe(t,{childList:!0})},z=()=>{be()};var U="reos-theme-stylesheet",W="reos-theme-fonts",he=()=>{if(document.getElementById(W))return;let e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.gstatic.com",o.crossOrigin="anonymous",document.head.appendChild(o);let t=document.createElement("link");t.id=W,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(t)},ge=`
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
[class*="bg-white"] {
  background-color: var(--reos-graphite) !important;
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

/* 18d. AVATAR \u2014 .hr-avatar circles get a mint background by default and
   the initials inside (.hr-avatar__text) render in white. That gives a
   white-on-light-mint contrast that's barely legible. Force the initials
   to obsidian so they read clearly on the mint circle. */
.hr-avatar__text,
.hr-avatar__text *,
.hr-avatar p,
.hr-avatar span {
  color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
}

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
`,fe=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar__text, .hr-avatar__text p, .hr-avatar p",styles:{color:"#0A0D12"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display']",styles:{color:"#EDEEF0"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff']",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}}],S=()=>{for(let e of fe){let o;try{o=document.querySelectorAll(e.selector)}catch{continue}o.forEach(t=>{for(let[r,a]of Object.entries(e.styles)){let n=t.style.getPropertyPriority(r),d=t.style.getPropertyValue(r);n==="important"&&d===a||t.style.setProperty(r,a,"important")}})}},ye="#1A1F28",ve=26,xe=31,we=40,V=new Set,L=()=>{document.body.querySelectorAll("*").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;let t=window.getComputedStyle(o).backgroundColor;if(!t||t==="rgba(0, 0, 0, 0)"||t==="transparent")return;let r=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),n=parseInt(r[2],10),d=parseInt(r[3],10);if(!(a<ve&&n<xe&&d<we))return;let c=o.getBoundingClientRect();if(c.width===0||c.height===0||c.width>800||c.height>200)return;o.style.setProperty("background-color",ye,"important");let u=o.className?.toString()||"<no class>";!V.has(u)&&u!=="<no class>"&&(V.add(u),l.debug(`Coerced dark bg to slate (${c.width.toFixed(0)}x${c.height.toFixed(0)}, rgb(${a},${n},${d})): "${u}"`))})},j=()=>{let e,o=()=>{e===void 0&&(e=window.setTimeout(()=>{e=void 0,S(),L()},100))};S(),L(),window.setTimeout(()=>{S(),L()},500),window.setTimeout(()=>{S(),L()},1500),new MutationObserver(()=>{o()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},q=()=>{if(he(),!document.getElementById(U)){let e=document.createElement("style");e.id=U,e.textContent=ge,document.head.appendChild(e),l.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?j():window.addEventListener("DOMContentLoaded",j))};var Y="ws-crm-customizer-version-badge",Z=()=>{if(document.getElementById(Y))return;let e=document.createElement("div");e.id=Y,e.style.cssText=`
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
  `,e.textContent=`Customizer v${_}`,e.title=`Built ${C}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var K=()=>{l.info(`Loaded v${_} (built ${C})`),q(),R(),A(e=>{l.debug("Page handler firing for:",e),Z(),N(),z()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K();})();
//# sourceMappingURL=customizer.js.map
