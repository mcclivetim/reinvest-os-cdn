/* Wholesaling CRM Customizer v0.5.36 — built 2026-05-16T16:18:29.875Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var T="[wholesaling-crm-customizer]",be="__WS_CRM_DEBUG",ge=()=>!!window[be],d={info(...t){console.log(T,...t)},warn(...t){console.warn(T,...t)},error(...t){console.error(T,...t)},debug(...t){ge()&&console.log(T,"[debug]",...t)}};var z=()=>{let t=window.location.pathname;return t.includes("/contacts/detail/")?"contact-detail":t.includes("/contacts/smart-list")||t.includes("/contacts/")?"contact-list":t.includes("/opportunities/detail/")?"opportunity-detail":t.includes("/opportunities/")?"opportunity-list":t.includes("/calendars/")?"calendar":t.includes("/dashboard")?"dashboard":t.includes("/conversations")?"conversations":t.includes("/settings")?"settings":"other"},I="",E="other",B=new Set,L=()=>{if(window.location.pathname!==I){I=window.location.pathname,E=z(),d.debug("Page changed:",E,I);for(let t of B)try{t(E)}catch(e){d.error("Subscriber threw:",e)}}},U=t=>(B.add(t),setTimeout(()=>t(E),0),()=>{B.delete(t)}),W=()=>{E=z(),I=window.location.pathname,d.debug("Router init, current page:",E);let t=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(o,r,a){t(o,r,a),L()},history.replaceState=function(o,r,a){e(o,r,a),L()},window.addEventListener("popstate",L),setInterval(L,1e3)};var M="0.5.36",A="2026-05-16T16:18:29.876Z";var fe=/\/contacts\/detail\/([A-Za-z0-9]+)/,ye=/\/v2\/location\/([A-Za-z0-9]+)/,y=()=>{let t=window.location.pathname,e=t.match(fe);if(!e)return null;let o=t.match(ye);return{contactId:e[1],locationId:o?o[1]:null}};var _=(t,e={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=e;return new Promise((n,s)=>{let l=a.querySelector(t);if(l){n(l);return}let c,u,g=()=>{p&&p.disconnect(),c!==void 0&&window.clearTimeout(c),u!==void 0&&window.clearInterval(u)},p=new MutationObserver(()=>{let b=a.querySelector(t);b&&(g(),n(b))});p.observe(document.body,{childList:!0,subtree:!0}),u=window.setInterval(()=>{let b=a.querySelector(t);b&&(g(),n(b))},r),c=window.setTimeout(()=>{g(),d.warn(`waitForElement timed out for selector: ${t}`),s(new Error(`Selector not found within ${o}ms: ${t}`))},o)})};var i={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},f={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},H={purple:"#8B5CF6",green:i.emerald,orange:i.amber,red:i.crimson},q=t=>{let e=t==="emerald"?i.emeraldGlow:t==="amber"?i.amberGlow:i.slate,o=t==="emerald"?i.emeraldBorder:t==="amber"?"rgba(232, 163, 60, 0.3)":i.steel,r=t==="emerald"?i.emerald:t==="amber"?i.amber:i.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${e};
    color: ${r};
    border: 1px solid ${o};
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
  background: ${i.emerald};
  color: ${i.obsidian};
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
  color: ${i.bone};
  border: 1px solid ${i.steel};
  border-radius: ${v.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var S="ws-crm-claim-release-pill",j=t=>{let e=Array.from(t.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return e?e.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},ve=({contactId:t,mode:e})=>{let o=document.createElement("button");o.id=S,o.type="button",o.dataset.contactId=t,o.dataset.mode=e;let r=e==="claim"?"emerald":"amber",a=e==="claim"?i.emerald:i.amber;return o.style.cssText=q(r),o.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${e==="claim"?"Claim Lead":"Release Lead"}</span>
  `,o.title=e==="claim"?"Take ownership of this lead":"Return this lead to the pool",o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{d.info(`Claim/Release pill clicked for contact ${t}: ${e}`);let n=o.lastElementChild,s=n?.textContent??"";n&&(n.textContent="Working\u2026"),o.style.opacity="0.7",o.disabled=!0,setTimeout(()=>{n&&(n.textContent=s),o.style.opacity="1",o.disabled=!1},700)}),o},xe=async(t,e=1e4)=>{let o=Date.now();for(;Date.now()-o<e;){let r=j(t);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},V=(t,e)=>{let o=ve({contactId:e,mode:"claim"}),r=document.createElement("span");r.id=`${S}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),t.appendChild(r)},we=async()=>{let t=y();if(!t){document.getElementById(S)?.remove();return}let e=document.getElementById(S);if(!(e&&e.dataset.contactId===t.contactId)){e&&e.remove();try{let o=await _("#record-details-lhs",{timeoutMs:1e4}),r=await xe(o),a=y();if(!a||a.contactId!==t.contactId)return;if(!r){d.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}V(r,t.contactId),d.debug(`Mounted Claim/Release pill next to name for ${t.contactId}`);let n=null;n=new MutationObserver(async()=>{if(!(y()?.contactId===t.contactId)){n?.disconnect();return}if(document.getElementById(S))return;let l=j(o);l&&(V(l,t.contactId),d.debug("Re-mounted Claim/Release pill after React wipe"))}),n.observe(o,{childList:!0,subtree:!0})}catch(o){d.warn("Could not mount Claim/Release pill:",o)}}},Y=()=>{we()};var ke="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",Ee=()=>{let t=window.WS_CRM_USER_ID;if(t&&/^[A-Za-z0-9]{15,30}$/.test(t))return t;let e=window,o=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let r of o)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),n=a.id??a._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}for(let a of["tokenUser","currentUser","ghl_user"]){let n=localStorage.getItem(a);if(n)try{let s=JSON.parse(n),l=s.id??s._id;if(l&&/^[A-Za-z0-9]{15,30}$/.test(l))return l}catch{}}}catch{}return null},_e=async({contactId:t,locationId:e,status:o,userId:r})=>{let n=await fetch(ke,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:t,location:{id:e},customData:{call_status:o,triggered_by_user_id:r??""}}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},F="ws-crm-contact-actions-bar",Se="ws-crm-call-status-dropdown",Z="ws-crm-offer-made-modal",Ce=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Te=[".central-panel","[class*='central-panel']"],Le=async()=>{for(let t of Te)try{let e=await _(t,{timeoutMs:3e3});if(e)return e}catch{}try{return(await _("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Ie=t=>{let e=document.createElement("div");e.id=Se,e.style.cssText="position: relative; flex-shrink: 0;";let o=document.createElement("button");o.type="button",o.style.cssText=N,o.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${i.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${i.ash};
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
    background: ${i.graphite};
    border: 1px solid ${i.steel};
    border-radius: ${v.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,Ce.forEach(a=>{let n=document.createElement("button");n.type="button",n.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${i.bone};
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
    `,n.addEventListener("mouseenter",()=>{n.style.background=i.slate}),n.addEventListener("mouseleave",()=>{n.style.background="transparent"}),n.addEventListener("click",async()=>{d.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${t}`);let s=o.firstElementChild,l=o.children[1],c=o.children[2];s&&(s.style.background=H[a.color]),l&&(l.textContent=a.label),r.style.display="none";let g=y()?.locationId,p=Ee();if(!g){d.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),l&&(l.textContent=`${a.label} (no tenant!)`),l&&(l.style.color=i.amber);return}if(a.color==="green"&&!p){d.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),l&&(l.textContent=`${a.label} (no user!)`),l&&(l.style.color=i.amber);return}let b=c?.textContent??"\u25BE";c&&(c.textContent="\u2026"),o.style.opacity="0.75";try{await _e({contactId:t,locationId:g,status:a.label,userId:p}),c&&(c.textContent="\u2713"),setTimeout(()=>{c&&(c.textContent=b),o.style.opacity="1"},900)}catch(P){d.warn("Call Status webhook failed:",P),c&&(c.textContent="\u2717"),l&&(l.style.color=i.amber),o.style.opacity="1",setTimeout(()=>{c&&(c.textContent=b),l&&(l.style.color=i.bone)},1800)}}),r.appendChild(n)}),o.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{e.contains(a.target)||(r.style.display="none")}),e.appendChild(o),e.appendChild(r),e},Me=t=>{document.getElementById(Z)?.remove();let e=document.createElement("div");e.id=Z,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${f.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(420px, 92vw);
    background: ${i.graphite};
    border: 1px solid ${i.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${i.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);o.innerHTML=`
    <div style="
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${i.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${i.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${i.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${i.slate};
      border: 1px solid ${i.steel};
      border-radius: ${v.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${i.ash}; font-family: ${f.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${i.bone};
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
      color: ${i.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${i.slate};
        border: 1px solid ${i.steel};
        border-radius: ${v.sm};
        color: ${i.bone};
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
  `,e.appendChild(o),document.body.appendChild(e);let n=()=>e.remove();e.addEventListener("click",s=>{s.target===e&&n()}),o.querySelector("#ws-offer-cancel")?.addEventListener("click",n),o.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let s=(o.querySelector("#ws-offer-amount")?.value??"").trim(),l=o.querySelector("#ws-offer-expires")?.value??"";if(!s||Number(s)<=0){d.warn("Offer Made submit blocked \u2014 invalid amount");return}d.info(`Offer Made recorded for contact ${t}: $${s}, expires ${l}`),n()}),setTimeout(()=>{o.querySelector("#ws-offer-amount")?.focus()},0)},J=t=>{let e=document.createElement("div");e.id=F,e.dataset.contactId=t,e.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${i.graphite};
    border-bottom: 1px solid ${i.steel};
    flex-shrink: 0;
  `,e.appendChild(Ie(t));let o=document.createElement("button");return o.type="button",o.style.cssText=O,o.textContent="Offer Made",o.addEventListener("click",()=>Me(t)),e.appendChild(o),e},Ae=async()=>{let t=y();if(!t){document.getElementById(F)?.remove();return}let e=document.getElementById(F);if(e&&e.dataset.contactId===t.contactId)return;e&&e.remove();let o=await Le();if(!o){d.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=y();if(!r||r.contactId!==t.contactId)return;let a=J(t.contactId);a.dataset.mountTarget=o.className||"central-panel",o.insertBefore(a,o.firstChild),d.debug(`Mounted contact actions bar for ${t.contactId}`);let n=null;n=new MutationObserver(()=>{let s=document.getElementById(F);if(!(y()?.contactId===t.contactId)){n?.disconnect();return}if(!s){let c=J(t.contactId);c.dataset.mountTarget=a.dataset.mountTarget??"",o.insertBefore(c,o.firstChild),d.debug(`Re-mounted actions bar after React wipe for ${t.contactId}`)}}),n.observe(o,{childList:!0})},K=()=>{Ae()};var X="reos-theme-stylesheet",Q="reos-theme-fonts",Fe=()=>{if(document.getElementById(Q))return;let t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.googleapis.com",document.head.appendChild(t);let e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.gstatic.com",e.crossOrigin="anonymous",document.head.appendChild(e);let o=document.createElement("link");o.id=Q,o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(o)},De=`
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

/* 15. TEXT COLORS \u2014 coerce GHL's grey-text utility classes onto our scale.
   Pure white (text-white / inline style: white) is remapped to bone so
   the page's brightest text doesn't read as harsh #FFFFFF. */
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
html body .text-white,
html body [class*="text-white"],
html body [style*="color: #fff"],
html body [style*="color:#fff"],
html body [style*="color: white"],
html body [style*="color:white"],
html body [style*="color: #FFF"],
html body [style*="color:#FFF"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
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
`,$e=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar'], [class*='avatar'] span, [class*='avatar'] p, [class*='avatar'] div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff']",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}}],D=()=>{for(let t of $e){let e;try{e=document.querySelectorAll(t.selector)}catch{continue}e.forEach(o=>{for(let[r,a]of Object.entries(t.styles)){let n=o.style.getPropertyPriority(r),s=o.style.getPropertyValue(r);n==="important"&&s===a||o.style.setProperty(r,a,"important")}})}},G="#1A1F28",Re=26,Pe=31,Be=40,ee=new Set,te=new Set,$=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0||(e.textContent||"").trim()!=="--")return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;e.style.setProperty("display","none","important");let a=e.className?.toString()||"<no class>";!te.has(a)&&a!=="<no class>"&&(te.add(a),d.debug(`Hid empty "--" leaf: "${a}"`))})},oe=new Set,He=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();if(o.includes("ai-button")||o.includes("ask-ai")||o.includes("bg-clip-text")||o.includes("text-transparent")||e.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=e.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g"||window.getComputedStyle(e).color!=="rgb(255, 255, 255)")return;e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let s=e.className?.toString()||"<no class>";!oe.has(s)&&s!=="<no class>"&&(oe.add(s),d.debug(`Remapped pure-white text -> bone: "${s}"`))})},re=new Set,Oe=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, aside.default-bg-color").forEach(e=>{e.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let n=window.getComputedStyle(r),s=n.backgroundColor,l=n.backgroundImage||"",c=!1;if(l!=="none"&&l.includes("gradient"))c=!0;else if(s&&s!=="rgba(0, 0, 0, 0)"&&s!=="transparent"){let h=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(h){let m=parseInt(h[1],10),x=parseInt(h[2],10),w=parseInt(h[3],10);(m>=60||x>=60||w>=60)&&(m>230&&x>230&&w>230||(m>=80||x>=80||w>=80)&&(c=!0))}}if(!c)return;let g=(r.textContent||"").trim(),p=a,b=Array.from(r.querySelectorAll("*")).map(h=>(h.className?.toString()||"").toLowerCase()).join(" "),P=g.toLowerCase()==="ask ai"||p.includes("ai-button")||p.includes("ask-ai")||p.includes("askai"),me=p.includes("bg-clip-text")||p.includes("text-transparent")||b.includes("bg-clip-text")||b.includes("text-transparent"),he=Array.from(r.querySelectorAll("*")).some(h=>{let m=window.getComputedStyle(h),x=m.getPropertyValue("-webkit-background-clip")||"",w=m.getPropertyValue("background-clip")||"";return x.includes("text")||w.includes("text")});if(P||me||he){let h=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],m=x=>{h.forEach(w=>x.style.removeProperty(w))};m(r),r.querySelectorAll("*").forEach(m);return}let k="#12161D";r.style.setProperty("color",k,"important"),r.querySelectorAll("*").forEach(h=>{let m=h.tagName.toLowerCase();m==="svg"||m==="path"||m==="circle"||m==="rect"||m==="polygon"||m==="polyline"||m==="line"||m==="g"?(h.style.setProperty("fill",k,"important"),h.style.setProperty("stroke",k,"important"),h.style.setProperty("color",k,"important")):(h.style.setProperty("color",k,"important"),h.style.setProperty("-webkit-text-fill-color",k,"important"))});let C=r.className?.toString()||"<no class>";!re.has(C)&&C!=="<no class>"&&(re.add(C),d.debug(`Darkened SVG icons on colored button: "${C}"`))})})},ae=new Set,Ne=()=>{document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(e=>{e.querySelectorAll("*").forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar")||a.includes("notification-dot")||a.includes("indicator")||a.includes("ai-button")||a.includes("ask-ai")||a.includes("bg-clip-text")||a.includes("text-transparent")||r.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let n=window.getComputedStyle(r).backgroundColor;if(!n||n==="rgba(0, 0, 0, 0)"||n==="transparent")return;let s=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!s)return;let l=parseInt(s[1],10),c=parseInt(s[2],10),u=parseInt(s[3],10);if(!(l>200&&c>200&&u>200))return;let p=r.getBoundingClientRect();if(p.width<24||p.height<16||p.width>1400)return;r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important");let b=r.className?.toString()||"<no class>";!ae.has(b)&&b!=="<no class>"&&(ae.add(b),d.debug(`Coerced light bg (${p.width.toFixed(0)}x${p.height.toFixed(0)}, rgb(${l},${c},${u})): "${b}"`))})})},ne=new Set,Ge=()=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0)return;let r=(o.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||o.closest(t)||o.closest("[class*='avatar'], [class*='hr-avatar']")||o.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let a=o,n=null;for(let g=0;g<4&&a;g++){let p=a.nextElementSibling;if(p&&(p.matches(t)||p.querySelector(t)!==null)){n=p;break}a=a.parentElement}if(!n)return;let s=o.getBoundingClientRect();if(s.width===0||s.height===0||s.width>400||s.height>60)return;o.style.setProperty("color","#9098A3","important"),o.style.setProperty("-webkit-text-fill-color","#9098A3","important");let l=n,c=l.getBoundingClientRect();c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(l.style.setProperty("background-color",G,"important"),l.style.setProperty("border-color","#252C36","important"),l.style.setProperty("border-style","solid","important"),l.style.setProperty("border-width","1px","important"),l.style.setProperty("border-radius","4px","important"));let u=o.className?.toString()||"<no class>";!ne.has(u)&&u!=="<no class>"&&(ne.add(u),d.debug(`Colored field label "${r.slice(0,30)}": "${u}"`))})},se=new Set,ze=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.getBoundingClientRect();if(o.width===0||o.height===0||o.height>80||e.querySelector("svg, img")!==null)return;let a=(e.textContent||"").trim();if(a.length===0||a.length>4)return;let n=Math.min(o.width,o.height),s=Math.max(16,Math.min(24,Math.round(n*.6)));e.style.setProperty("font-size",`${s}px`,"important"),e.style.setProperty("line-height","1","important"),e.style.setProperty("display","flex","important"),e.style.setProperty("align-items","center","important"),e.style.setProperty("justify-content","center","important"),e.style.setProperty("text-align","center","important"),e.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${s}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let l=e.className?.toString()||"<no class>";!se.has(l)&&l!=="<no class>"&&(se.add(l),d.debug(`Resized avatar text to ${s}px (circle ${n.toFixed(0)}px): "${l}"`))})},le=new Set,Ue=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.getBoundingClientRect();if(o.width===0||o.height===0)return;e.style.setProperty("background-color",G,"important"),e.style.setProperty("border-color","#252C36","important"),e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=e.className?.toString()||"<no class>";!le.has(r)&&r!=="<no class>"&&(le.add(r),d.debug(`Forced input slate bg: "${r}"`))})},R=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let o=window.getComputedStyle(e).backgroundColor;if(!o||o==="rgba(0, 0, 0, 0)"||o==="transparent")return;let r=o.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),n=parseInt(r[2],10),s=parseInt(r[3],10);if(!(a<Re&&n<Pe&&s<Be))return;let c=e.getBoundingClientRect();if(c.width===0||c.height===0||c.width>800||c.height>200)return;e.style.setProperty("background-color",G,"important");let u=e.className?.toString()||"<no class>";!ee.has(u)&&u!=="<no class>"&&(ee.add(u),d.debug(`Coerced dark bg to slate (${c.width.toFixed(0)}x${c.height.toFixed(0)}, rgb(${a},${n},${s})): "${u}"`))})},ie=()=>{let t,e=()=>{t===void 0&&(t=window.setTimeout(()=>{t=void 0,D(),Ue(),R(),$(),Ge(),Ne(),Oe(),ze(),He()},100))};D(),R(),$(),window.setTimeout(()=>{D(),R(),$()},500),window.setTimeout(()=>{D(),R(),$()},1500),new MutationObserver(()=>{e()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},ce=()=>{if(Fe(),!document.getElementById(X)){let t=document.createElement("style");t.id=X,t.textContent=De,document.head.appendChild(t),d.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?ie():window.addEventListener("DOMContentLoaded",ie))};var de="ws-crm-customizer-version-badge",pe=()=>{if(document.getElementById(de))return;let t=document.createElement("div");t.id=de,t.style.cssText=`
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
  `,t.textContent=`Customizer v${M}`,t.title=`Built ${A}
Click to dismiss for this session`,t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)}),document.body.appendChild(t)};var ue=()=>{d.info(`Loaded v${M} (built ${A})`),ce(),W(),U(t=>{d.debug("Page handler firing for:",t),pe(),Y(),K()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();})();
//# sourceMappingURL=customizer.js.map
