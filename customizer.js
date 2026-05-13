/* Wholesaling CRM Customizer v0.4.2 — built 2026-05-13T01:02:18.053Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var y="[wholesaling-crm-customizer]",K="__WS_CRM_DEBUG",X=()=>!!window[K],i={info(...e){console.log(y,...e)},warn(...e){console.warn(y,...e)},error(...e){console.error(y,...e)},debug(...e){X()&&console.log(y,"[debug]",...e)}};var R=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},v="",b="other",M=new Set,x=()=>{if(window.location.pathname!==v){v=window.location.pathname,b=R(),i.debug("Page changed:",b,v);for(let e of M)try{e(b)}catch(o){i.error("Subscriber threw:",o)}}},B=e=>(M.add(e),setTimeout(()=>e(b),0),()=>{M.delete(e)}),D=()=>{b=R(),v=window.location.pathname,i.debug("Router init, current page:",b);let e=history.pushState.bind(history),o=history.replaceState.bind(history);history.pushState=function(t,n,a){e(t,n,a),x()},history.replaceState=function(t,n,a){o(t,n,a),x()},window.addEventListener("popstate",x),setInterval(x,1e3)};var w="0.4.2",E="2026-05-13T01:02:18.054Z";var Z=/\/contacts\/detail\/([A-Za-z0-9]+)/,J=/\/v2\/location\/([A-Za-z0-9]+)/,m=()=>{let e=window.location.pathname,o=e.match(Z);if(!o)return null;let t=e.match(J);return{contactId:o[1],locationId:t?t[1]:null}};var f=(e,o={})=>{let{timeoutMs:t=8e3,pollMs:n=100,root:a=document}=o;return new Promise((s,l)=>{let d=a.querySelector(e);if(d){s(d);return}let u,L,C=()=>{I&&I.disconnect(),u!==void 0&&window.clearTimeout(u),L!==void 0&&window.clearInterval(L)},I=new MutationObserver(()=>{let g=a.querySelector(e);g&&(C(),s(g))});I.observe(document.body,{childList:!0,subtree:!0}),L=window.setInterval(()=>{let g=a.querySelector(e);g&&(C(),s(g))},n),u=window.setTimeout(()=>{C(),i.warn(`waitForElement timed out for selector: ${e}`),l(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var r={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},p={sm:"4px",md:"6px",lg:"10px",pill:"999px"},c={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},S={purple:"#8B5CF6",green:r.emerald,orange:r.amber,red:r.crimson},O=e=>{let o=e==="emerald"?r.emeraldGlow:e==="amber"?r.amberGlow:r.slate,t=e==="emerald"?r.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":r.steel,n=e==="emerald"?r.emerald:e==="amber"?r.amber:r.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${o};
    color: ${n};
    border: 1px solid ${t};
    border-radius: ${p.pill};
    font-family: ${c.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},_=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${r.emerald};
  color: ${r.obsidian};
  border: none;
  border-radius: ${p.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,$=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${r.bone};
  border: 1px solid ${r.steel};
  border-radius: ${p.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var h="ws-crm-claim-release-pill",H=e=>{let o=Array.from(e.children).find(n=>{if(!(n instanceof HTMLElement))return!1;let a=n.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return o?o.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Q=({contactId:e,mode:o})=>{let t=document.createElement("button");t.id=h,t.type="button",t.dataset.contactId=e,t.dataset.mode=o;let n=o==="claim"?"emerald":"amber",a=o==="claim"?r.emerald:r.amber;return t.style.cssText=O(n),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${o==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=o==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{i.info(`Claim/Release pill clicked for contact ${e}: ${o}`);let s=t.lastElementChild,l=s?.textContent??"";s&&(s.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{s&&(s.textContent=l),t.style.opacity="1",t.disabled=!1},700)}),t},ee=async(e,o=1e4)=>{let t=Date.now();for(;Date.now()-t<o;){let n=H(e);if(n)return n;await new Promise(a=>setTimeout(a,150))}return null},A=(e,o)=>{let t=Q({contactId:o,mode:"claim"}),n=document.createElement("span");n.id=`${h}-wrap`,n.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,n.appendChild(t),e.appendChild(n)},te=async()=>{let e=m();if(!e){document.getElementById(h)?.remove();return}let o=document.getElementById(h);if(!(o&&o.dataset.contactId===e.contactId)){o&&o.remove();try{let t=await f("#record-details-lhs",{timeoutMs:1e4}),n=await ee(t),a=m();if(!a||a.contactId!==e.contactId)return;if(!n){i.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}A(n,e.contactId),i.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`);let s=null;s=new MutationObserver(async()=>{if(!(m()?.contactId===e.contactId)){s?.disconnect();return}if(document.getElementById(h))return;let d=H(t);d&&(A(d,e.contactId),i.debug("Re-mounted Claim/Release pill after React wipe"))}),s.observe(t,{childList:!0,subtree:!0})}catch(t){i.warn("Could not mount Claim/Release pill:",t)}}},P=()=>{te()};var k="ws-crm-contact-actions-bar",oe="ws-crm-call-status-dropdown",N="ws-crm-offer-made-modal",re=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],ne=[".central-panel","[class*='central-panel']"],ae=async()=>{for(let e of ne)try{let o=await f(e,{timeoutMs:3e3});if(o)return o}catch{}try{return(await f("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},se=e=>{let o=document.createElement("div");o.id=oe,o.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=$,t.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${r.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${r.ash};
      margin-left: 2px;
    ">\u25BE</span>
  `;let n=document.createElement("div");return n.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${r.graphite};
    border: 1px solid ${r.steel};
    border-radius: ${p.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,re.forEach(a=>{let s=document.createElement("button");s.type="button",s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${r.bone};
      border: none;
      border-radius: ${p.sm};
      font-family: ${c.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,s.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${S[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,s.addEventListener("mouseenter",()=>{s.style.background=r.slate}),s.addEventListener("mouseleave",()=>{s.style.background="transparent"}),s.addEventListener("click",()=>{i.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${e}`);let l=t.firstElementChild,d=t.children[1];l&&(l.style.background=S[a.color]),d&&(d.textContent=a.label),n.style.display="none"}),n.appendChild(s)}),t.addEventListener("click",a=>{a.stopPropagation(),n.style.display=n.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),o.appendChild(t),o.appendChild(n),o},ie=e=>{document.getElementById(N)?.remove();let o=document.createElement("div");o.id=N,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${c.sans};
  `;let t=document.createElement("div");t.style.cssText=`
    width: min(420px, 92vw);
    background: ${r.graphite};
    border: 1px solid ${r.steel};
    border-radius: ${p.lg};
    padding: 24px 28px;
    color: ${r.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let n=new Date,a=new Date(n.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${r.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${r.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${r.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${r.slate};
      border: 1px solid ${r.steel};
      border-radius: ${p.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${r.ash}; font-family: ${c.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${r.bone};
          font-family: ${c.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${r.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${r.slate};
        border: 1px solid ${r.steel};
        border-radius: ${p.sm};
        color: ${r.bone};
        font-family: ${c.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${$}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${_}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,o.appendChild(t),document.body.appendChild(o);let s=()=>o.remove();o.addEventListener("click",l=>{l.target===o&&s()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",s),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(t.querySelector("#ws-offer-amount")?.value??"").trim(),d=t.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){i.warn("Offer Made submit blocked \u2014 invalid amount");return}i.info(`Offer Made recorded for contact ${e}: $${l}, expires ${d}`),s()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},F=e=>{let o=document.createElement("div");o.id=k,o.dataset.contactId=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${r.graphite};
    border-bottom: 1px solid ${r.steel};
    flex-shrink: 0;
  `,o.appendChild(se(e));let t=document.createElement("button");return t.type="button",t.style.cssText=_,t.textContent="Offer Made",t.addEventListener("click",()=>ie(e)),o.appendChild(t),o},le=async()=>{let e=m();if(!e){document.getElementById(k)?.remove();return}let o=document.getElementById(k);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove();let t=await ae();if(!t){i.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let n=m();if(!n||n.contactId!==e.contactId)return;let a=F(e.contactId);a.dataset.mountTarget=t.className||"central-panel",t.insertBefore(a,t.firstChild),i.debug(`Mounted contact actions bar for ${e.contactId}`);let s=null;s=new MutationObserver(()=>{let l=document.getElementById(k);if(!(m()?.contactId===e.contactId)){s?.disconnect();return}if(!l){let u=F(e.contactId);u.dataset.mountTarget=a.dataset.mountTarget??"",t.insertBefore(u,t.firstChild),i.debug(`Re-mounted actions bar after React wipe for ${e.contactId}`)}}),s.observe(t,{childList:!0})},G=()=>{le()};var z="reos-theme-stylesheet",U="reos-theme-fonts",ce=()=>{if(document.getElementById(U))return;let e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.gstatic.com",o.crossOrigin="anonymous",document.head.appendChild(o);let t=document.createElement("link");t.id=U,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(t)},de=`
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

/* 4. SIDEBAR \u2014 graphite surface, emerald active state, mono nav labels */
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
[class*="sidebar"] a {
  color: var(--reos-ash) !important;
  font-weight: 500 !important;
}
.sidebar-v2 a:hover,
.sidebar-v2-location a:hover,
[class*="sidebar"] a:hover {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}
.sidebar-v2 a.active,
.sidebar-v2 a[class*="active"],
[class*="sidebar"] a.router-link-active {
  color: var(--reos-emerald) !important;
  background: var(--reos-emerald-glow) !important;
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

/* 18. HR DESIGN SYSTEM \u2014 GHL's hr- prefixed components.
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

/* END REINVEST OS THEME */
`,pe=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display']",styles:{color:"#EDEEF0"}}],T=()=>{for(let e of pe){let o;try{o=document.querySelectorAll(e.selector)}catch{continue}o.forEach(t=>{for(let[n,a]of Object.entries(e.styles)){let s=t.style.getPropertyPriority(n),l=t.style.getPropertyValue(n);s==="important"&&l===a||t.style.setProperty(n,a,"important")}})}},V=()=>{let e,o=()=>{e===void 0&&(e=window.setTimeout(()=>{e=void 0,T()},100))};T(),window.setTimeout(T,500),window.setTimeout(T,1500),new MutationObserver(()=>{o()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},W=()=>{if(ce(),!document.getElementById(z)){let e=document.createElement("style");e.id=z,e.textContent=de,document.head.appendChild(e),i.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?V():window.addEventListener("DOMContentLoaded",V))};var q="ws-crm-customizer-version-badge",j=()=>{if(document.getElementById(q))return;let e=document.createElement("div");e.id=q,e.style.cssText=`
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
  `,e.textContent=`Customizer v${w}`,e.title=`Built ${E}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var Y=()=>{i.info(`Loaded v${w} (built ${E})`),W(),D(),B(e=>{i.debug("Page handler firing for:",e),j(),P(),G()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();})();
//# sourceMappingURL=customizer.js.map
