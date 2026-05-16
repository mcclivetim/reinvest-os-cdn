/* Wholesaling CRM Customizer v0.5.39 — built 2026-05-16T16:32:40.251Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var M="[wholesaling-crm-customizer]",fe="__WS_CRM_DEBUG",ye=()=>!!window[fe],d={info(...o){console.log(M,...o)},warn(...o){console.warn(M,...o)},error(...o){console.error(M,...o)},debug(...o){ye()&&console.log(M,"[debug]",...o)}};var q=()=>{let o=window.location.pathname;return o.includes("/contacts/detail/")?"contact-detail":o.includes("/contacts/smart-list")||o.includes("/contacts/")?"contact-list":o.includes("/opportunities/detail/")?"opportunity-detail":o.includes("/opportunities/")?"opportunity-list":o.includes("/calendars/")?"calendar":o.includes("/dashboard")?"dashboard":o.includes("/conversations")?"conversations":o.includes("/settings")?"settings":"other"},F="",T="other",O=new Set,A=()=>{if(window.location.pathname!==F){F=window.location.pathname,T=q(),d.debug("Page changed:",T,F);for(let o of O)try{o(T)}catch(t){d.error("Subscriber threw:",t)}}},W=o=>(O.add(o),setTimeout(()=>o(T),0),()=>{O.delete(o)}),V=()=>{T=q(),F=window.location.pathname,d.debug("Router init, current page:",T);let o=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(e,r,a){o(e,r,a),A()},history.replaceState=function(e,r,a){t(e,r,a),A()},window.addEventListener("popstate",A),setInterval(A,1e3)};var D="0.5.39",$="2026-05-16T16:32:40.252Z";var ve=/\/contacts\/detail\/([A-Za-z0-9]+)/,xe=/\/v2\/location\/([A-Za-z0-9]+)/,v=()=>{let o=window.location.pathname,t=o.match(ve);if(!t)return null;let e=o.match(xe);return{contactId:t[1],locationId:e?e[1]:null}};var L=(o,t={})=>{let{timeoutMs:e=8e3,pollMs:r=100,root:a=document}=t;return new Promise((n,l)=>{let s=a.querySelector(o);if(s){n(s);return}let i,p,g=()=>{u&&u.disconnect(),i!==void 0&&window.clearTimeout(i),p!==void 0&&window.clearInterval(p)},u=new MutationObserver(()=>{let b=a.querySelector(o);b&&(g(),n(b))});u.observe(document.body,{childList:!0,subtree:!0}),p=window.setInterval(()=>{let b=a.querySelector(o);b&&(g(),n(b))},r),i=window.setTimeout(()=>{g(),d.warn(`waitForElement timed out for selector: ${o}`),l(new Error(`Selector not found within ${e}ms: ${o}`))},e)})};var c={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},x={sm:"4px",md:"6px",lg:"10px",pill:"999px"},f={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},N={purple:"#8B5CF6",green:c.emerald,orange:c.amber,red:c.crimson},j=o=>{let t=o==="emerald"?c.emeraldGlow:o==="amber"?c.amberGlow:c.slate,e=o==="emerald"?c.emeraldBorder:o==="amber"?"rgba(232, 163, 60, 0.3)":c.steel,r=o==="emerald"?c.emerald:o==="amber"?c.amber:c.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${e};
    border-radius: ${x.pill};
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
  `},G=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${c.emerald};
  color: ${c.obsidian};
  border: none;
  border-radius: ${x.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,z=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${c.bone};
  border: 1px solid ${c.steel};
  border-radius: ${x.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var I="ws-crm-claim-release-pill",Z=o=>{let t=Array.from(o.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},we=({contactId:o,mode:t})=>{let e=document.createElement("button");e.id=I,e.type="button",e.dataset.contactId=o,e.dataset.mode=t;let r=t==="claim"?"emerald":"amber",a=t==="claim"?c.emerald:c.amber;return e.style.cssText=j(r),e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `,e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{d.info(`Claim/Release pill clicked for contact ${o}: ${t}`);let n=e.lastElementChild,l=n?.textContent??"";n&&(n.textContent="Working\u2026"),e.style.opacity="0.7",e.disabled=!0,setTimeout(()=>{n&&(n.textContent=l),e.style.opacity="1",e.disabled=!1},700)}),e},ke=async(o,t=1e4)=>{let e=Date.now();for(;Date.now()-e<t;){let r=Z(o);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},Y=(o,t)=>{let e=we({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${I}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(e),o.appendChild(r)},Ee=async()=>{let o=v();if(!o){document.getElementById(I)?.remove();return}let t=document.getElementById(I);if(!(t&&t.dataset.contactId===o.contactId)){t&&t.remove();try{let e=await L("#record-details-lhs",{timeoutMs:1e4}),r=await ke(e),a=v();if(!a||a.contactId!==o.contactId)return;if(!r){d.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}Y(r,o.contactId),d.debug(`Mounted Claim/Release pill next to name for ${o.contactId}`);let n=null;n=new MutationObserver(async()=>{if(!(v()?.contactId===o.contactId)){n?.disconnect();return}if(document.getElementById(I))return;let s=Z(e);s&&(Y(s,o.contactId),d.debug("Re-mounted Claim/Release pill after React wipe"))}),n.observe(e,{childList:!0,subtree:!0})}catch(e){d.warn("Could not mount Claim/Release pill:",e)}}},J=()=>{Ee()};var Se="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",_e=()=>{let o=window.WS_CRM_USER_ID;if(o&&/^[A-Za-z0-9]{15,30}$/.test(o))return o;let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let r of e)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),n=a.id??a._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}for(let a of["tokenUser","currentUser","ghl_user"]){let n=localStorage.getItem(a);if(n)try{let l=JSON.parse(n),s=l.id??l._id;if(s&&/^[A-Za-z0-9]{15,30}$/.test(s))return s}catch{}}}catch{}return null},Ce=async({contactId:o,locationId:t,status:e,userId:r})=>{let n=await fetch(Se,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:o,location:{id:t},customData:{call_status:e,triggered_by_user_id:r??""}}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},R="ws-crm-contact-actions-bar",Te="ws-crm-call-status-dropdown",K="ws-crm-offer-made-modal",Le=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Ie=[".central-panel","[class*='central-panel']"],Me=async()=>{for(let o of Ie)try{let t=await L(o,{timeoutMs:3e3});if(t)return t}catch{}try{return(await L("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Ae=o=>{let t=document.createElement("div");t.id=Te,t.style.cssText="position: relative; flex-shrink: 0;";let e=document.createElement("button");e.type="button",e.style.cssText=z,e.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${c.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${c.ash};
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
    background: ${c.graphite};
    border: 1px solid ${c.steel};
    border-radius: ${x.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,Le.forEach(a=>{let n=document.createElement("button");n.type="button",n.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${c.bone};
      border: none;
      border-radius: ${x.sm};
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
        background: ${N[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,n.addEventListener("mouseenter",()=>{n.style.background=c.slate}),n.addEventListener("mouseleave",()=>{n.style.background="transparent"}),n.addEventListener("click",async()=>{d.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${o}`);let l=e.firstElementChild,s=e.children[1],i=e.children[2];l&&(l.style.background=N[a.color]),s&&(s.textContent=a.label),r.style.display="none";let g=v()?.locationId,u=_e();if(!g){d.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),s&&(s.textContent=`${a.label} (no tenant!)`),s&&(s.style.color=c.amber);return}if(a.color==="green"&&!u){d.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),s&&(s.textContent=`${a.label} (no user!)`),s&&(s.style.color=c.amber);return}let b=i?.textContent??"\u25BE";i&&(i.textContent="\u2026"),e.style.opacity="0.75";try{await Ce({contactId:o,locationId:g,status:a.label,userId:u}),i&&(i.textContent="\u2713"),setTimeout(()=>{i&&(i.textContent=b),e.style.opacity="1"},900)}catch(_){d.warn("Call Status webhook failed:",_),i&&(i.textContent="\u2717"),s&&(s.style.color=c.amber),e.style.opacity="1",setTimeout(()=>{i&&(i.textContent=b),s&&(s.style.color=c.bone)},1800)}}),r.appendChild(n)}),e.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{t.contains(a.target)||(r.style.display="none")}),t.appendChild(e),t.appendChild(r),t},Fe=o=>{document.getElementById(K)?.remove();let t=document.createElement("div");t.id=K,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${f.sans};
  `;let e=document.createElement("div");e.style.cssText=`
    width: min(420px, 92vw);
    background: ${c.graphite};
    border: 1px solid ${c.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${c.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);e.innerHTML=`
    <div style="
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${c.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${c.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${c.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${c.slate};
      border: 1px solid ${c.steel};
      border-radius: ${x.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${c.ash}; font-family: ${f.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${c.bone};
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
      color: ${c.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${c.slate};
        border: 1px solid ${c.steel};
        border-radius: ${x.sm};
        color: ${c.bone};
        font-family: ${f.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${G}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(e),document.body.appendChild(t);let n=()=>t.remove();t.addEventListener("click",l=>{l.target===t&&n()}),e.querySelector("#ws-offer-cancel")?.addEventListener("click",n),e.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(e.querySelector("#ws-offer-amount")?.value??"").trim(),s=e.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){d.warn("Offer Made submit blocked \u2014 invalid amount");return}d.info(`Offer Made recorded for contact ${o}: $${l}, expires ${s}`),n()}),setTimeout(()=>{e.querySelector("#ws-offer-amount")?.focus()},0)},X=o=>{let t=document.createElement("div");t.id=R,t.dataset.contactId=o,t.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${c.graphite};
    border-bottom: 1px solid ${c.steel};
    flex-shrink: 0;
  `,t.appendChild(Ae(o));let e=document.createElement("button");return e.type="button",e.style.cssText=G,e.textContent="Offer Made",e.addEventListener("click",()=>Fe(o)),t.appendChild(e),t},De=async()=>{let o=v();if(!o){document.getElementById(R)?.remove();return}let t=document.getElementById(R);if(t&&t.dataset.contactId===o.contactId)return;t&&t.remove();let e=await Me();if(!e){d.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=v();if(!r||r.contactId!==o.contactId)return;let a=X(o.contactId);a.dataset.mountTarget=e.className||"central-panel",e.insertBefore(a,e.firstChild),d.debug(`Mounted contact actions bar for ${o.contactId}`);let n=null;n=new MutationObserver(()=>{let l=document.getElementById(R);if(!(v()?.contactId===o.contactId)){n?.disconnect();return}if(!l){let i=X(o.contactId);i.dataset.mountTarget=a.dataset.mountTarget??"",e.insertBefore(i,e.firstChild),d.debug(`Re-mounted actions bar after React wipe for ${o.contactId}`)}}),n.observe(e,{childList:!0})},Q=()=>{De()};var ee="reos-theme-stylesheet",te="reos-theme-fonts",$e=()=>{if(document.getElementById(te))return;let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.googleapis.com",document.head.appendChild(o);let t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous",document.head.appendChild(t);let e=document.createElement("link");e.id=te,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(e)},Re=`
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
`,He=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar'], [class*='avatar'] span, [class*='avatar'] p, [class*='avatar'] div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff']",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}}],H=()=>{for(let o of He){let t;try{t=document.querySelectorAll(o.selector)}catch{continue}t.forEach(e=>{for(let[r,a]of Object.entries(o.styles)){let n=e.style.getPropertyPriority(r),l=e.style.getPropertyValue(r);n==="important"&&l===a||e.style.setProperty(r,a,"important")}})}},U="#1A1F28",Pe=26,Be=31,Oe=40,oe=new Set,re=new Set,P=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0||(t.textContent||"").trim()!=="--")return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;t.style.setProperty("display","none","important");let a=t.className?.toString()||"<no class>";!re.has(a)&&a!=="<no class>"&&(re.add(a),d.debug(`Hid empty "--" leaf: "${a}"`))})},ae=new Set,Ne=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("ai-button")||e.includes("ask-ai")||e.includes("bg-clip-text")||e.includes("text-transparent")||t.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=t.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g"||window.getComputedStyle(t).color!=="rgb(255, 255, 255)")return;t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let l=t.className?.toString()||"<no class>";!ae.has(l)&&l!=="<no class>"&&(ae.add(l),d.debug(`Remapped pure-white text -> bone: "${l}"`))})},ne=new Set,Ge=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, aside.default-bg-color").forEach(t=>{t.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let n=window.getComputedStyle(r),l=n.backgroundColor,s=n.backgroundImage||"",i=!1;if(s!=="none"&&s.includes("gradient"))i=!0;else if(l&&l!=="rgba(0, 0, 0, 0)"&&l!=="transparent"){let m=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(m){let h=parseInt(m[1],10),E=parseInt(m[2],10),S=parseInt(m[3],10);(h>=60||E>=60||S>=60)&&(h>230&&E>230&&S>230||(h>=80||E>=80||S>=80)&&(i=!0))}}if(!i)return;let g=(r.textContent||"").trim(),u=a,b=Array.from(r.querySelectorAll("*")).map(m=>(m.className?.toString()||"").toLowerCase()).join(" "),_=g.toLowerCase()==="ask ai"||u.includes("ai-button")||u.includes("ask-ai")||u.includes("askai"),C=u.includes("bg-clip-text")||u.includes("text-transparent")||b.includes("bg-clip-text")||b.includes("text-transparent"),w=Array.from(r.querySelectorAll("*")).some(m=>{let h=window.getComputedStyle(m),E=h.getPropertyValue("-webkit-background-clip")||"",S=h.getPropertyValue("background-clip")||"";return E.includes("text")||S.includes("text")});if(_||C||w){let m=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],h=E=>{m.forEach(S=>E.style.removeProperty(S))};h(r),r.querySelectorAll("*").forEach(h);return}let y="#12161D";r.style.setProperty("color",y,"important"),r.querySelectorAll("*").forEach(m=>{let h=m.tagName.toLowerCase();h==="svg"||h==="path"||h==="circle"||h==="rect"||h==="polygon"||h==="polyline"||h==="line"||h==="g"?(m.style.setProperty("fill",y,"important"),m.style.setProperty("stroke",y,"important"),m.style.setProperty("color",y,"important")):(m.style.setProperty("color",y,"important"),m.style.setProperty("-webkit-text-fill-color",y,"important"))});let k=r.className?.toString()||"<no class>";!ne.has(k)&&k!=="<no class>"&&(ne.add(k),d.debug(`Darkened SVG icons on colored button: "${k}"`))})})},se=new Set,ze=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.width<20||e.width>64||e.height<20||e.height>64)return;let r=e.top+e.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(s=>{let i=s;if(i.closest("[id^='ws-crm-']"))return;let p=s.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let g=p.left<e.right&&p.right>e.left,u=p.top<e.bottom&&p.bottom>e.top;if(!(g&&u)||p.top+p.height/2<r)return;let _=p.width*p.height/(e.width*e.height);if(_>.55)return;let C=i,w=i.parentElement,y=0;for(;w&&w!==t&&y<3;){let m=w.getBoundingClientRect();if(m.width>0&&m.width<=30&&m.height<=30)C=w;else break;w=w.parentElement,y++}C.style.setProperty("transform","translateY(6px)","important");let k=(C.className?.toString()||"")+" "+C.tagName;se.has(k)||(se.add(k),d.debug(`Dropped activity badge 6px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${_.toFixed(2)}): "${k}"`))})})},le=new Set,Ue=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.parentElement,r=0;for(;e&&r<3&&!e.closest("[id^='ws-crm-']");){let a=(e.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let l=e.getBoundingClientRect();if(l.width>0&&l.height>0&&l.width<=400&&l.height<=80){e.style.setProperty("background-color","#12161D","important"),e.style.setProperty("background-image","none","important");let s=e.className?.toString()||"<no class>";!le.has(s)&&s!=="<no class>"&&(le.add(s),d.debug(`Painted Ask AI wrapper graphite: "${s}"`))}}e=e.parentElement,r++}})},ie=new Set,qe=()=>{document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(t=>{t.querySelectorAll("*").forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar")||a.includes("notification-dot")||a.includes("indicator")||a.includes("ai-button")||a.includes("ask-ai")||a.includes("bg-clip-text")||a.includes("text-transparent")||r.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let n=window.getComputedStyle(r).backgroundColor;if(!n||n==="rgba(0, 0, 0, 0)"||n==="transparent")return;let l=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!l)return;let s=parseInt(l[1],10),i=parseInt(l[2],10),p=parseInt(l[3],10);if(!(s>200&&i>200&&p>200))return;let u=r.getBoundingClientRect();if(u.width<24||u.height<16||u.width>1400)return;r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important");let b=r.className?.toString()||"<no class>";!ie.has(b)&&b!=="<no class>"&&(ie.add(b),d.debug(`Coerced light bg (${u.width.toFixed(0)}x${u.height.toFixed(0)}, rgb(${s},${i},${p})): "${b}"`))})})},ce=new Set,We=()=>{let o="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0)return;let r=(e.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||e.closest(o)||e.closest("[class*='avatar'], [class*='hr-avatar']")||e.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let a=e,n=null;for(let g=0;g<4&&a;g++){let u=a.nextElementSibling;if(u&&(u.matches(o)||u.querySelector(o)!==null)){n=u;break}a=a.parentElement}if(!n)return;let l=e.getBoundingClientRect();if(l.width===0||l.height===0||l.width>400||l.height>60)return;e.style.setProperty("color","#9098A3","important"),e.style.setProperty("-webkit-text-fill-color","#9098A3","important");let s=n,i=s.getBoundingClientRect();i.width>0&&i.width<=800&&i.height>0&&i.height<=100&&(s.style.setProperty("background-color",U,"important"),s.style.setProperty("border-color","#252C36","important"),s.style.setProperty("border-style","solid","important"),s.style.setProperty("border-width","1px","important"),s.style.setProperty("border-radius","4px","important"));let p=e.className?.toString()||"<no class>";!ce.has(p)&&p!=="<no class>"&&(ce.add(p),d.debug(`Colored field label "${r.slice(0,30)}": "${p}"`))})},de=new Set,Ve=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.height>80||t.querySelector("svg, img")!==null)return;let a=(t.textContent||"").trim();if(a.length===0||a.length>4)return;let n=Math.min(e.width,e.height),l=Math.max(16,Math.min(24,Math.round(n*.6)));t.style.setProperty("font-size",`${l}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(i=>{i.tagName==="svg"||i.tagName==="SVG"||i.tagName!=="IMG"&&(i.style.setProperty("font-size",`${l}px`,"important"),i.style.setProperty("line-height","1","important"),i.style.setProperty("text-align","center","important"))});let s=t.className?.toString()||"<no class>";!de.has(s)&&s!=="<no class>"&&(de.add(s),d.debug(`Resized avatar text to ${l}px (circle ${n.toFixed(0)}px): "${s}"`))})},pe=new Set,je=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0)return;t.style.setProperty("background-color",U,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=t.className?.toString()||"<no class>";!pe.has(r)&&r!=="<no class>"&&(pe.add(r),d.debug(`Forced input slate bg: "${r}"`))})},B=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let e=window.getComputedStyle(t).backgroundColor;if(!e||e==="rgba(0, 0, 0, 0)"||e==="transparent")return;let r=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),n=parseInt(r[2],10),l=parseInt(r[3],10);if(!(a<Pe&&n<Be&&l<Oe))return;let i=t.getBoundingClientRect();if(i.width===0||i.height===0||i.width>800||i.height>200)return;t.style.setProperty("background-color",U,"important");let p=t.className?.toString()||"<no class>";!oe.has(p)&&p!=="<no class>"&&(oe.add(p),d.debug(`Coerced dark bg to slate (${i.width.toFixed(0)}x${i.height.toFixed(0)}, rgb(${a},${n},${l})): "${p}"`))})},ue=()=>{let o,t=()=>{o===void 0&&(o=window.setTimeout(()=>{o=void 0,H(),je(),B(),P(),We(),qe(),Ue(),Ge(),Ve(),ze(),Ne()},100))};H(),B(),P(),window.setTimeout(()=>{H(),B(),P()},500),window.setTimeout(()=>{H(),B(),P()},1500),new MutationObserver(()=>{t()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},me=()=>{if($e(),!document.getElementById(ee)){let o=document.createElement("style");o.id=ee,o.textContent=Re,document.head.appendChild(o),d.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?ue():window.addEventListener("DOMContentLoaded",ue))};var he="ws-crm-customizer-version-badge",be=()=>{if(document.getElementById(he))return;let o=document.createElement("div");o.id=he,o.style.cssText=`
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
  `,o.textContent=`Customizer v${D}`,o.title=`Built ${$}
Click to dismiss for this session`,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)"}),o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),200)}),document.body.appendChild(o)};var ge=()=>{d.info(`Loaded v${D} (built ${$})`),me(),V(),W(o=>{d.debug("Page handler firing for:",o),be(),J(),Q()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ge):ge();})();
//# sourceMappingURL=customizer.js.map
