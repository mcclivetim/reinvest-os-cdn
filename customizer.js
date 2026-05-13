/* Wholesaling CRM Customizer v0.3.0 — built 2026-05-13T00:29:40.678Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var x="[wholesaling-crm-customizer]",G="__WS_CRM_DEBUG",U=()=>!!window[G],i={info(...e){console.log(x,...e)},warn(...e){console.warn(x,...e)},error(...e){console.error(x,...e)},debug(...e){U()&&console.log(x,"[debug]",...e)}};var B=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},h="",f="other",L=new Set,y=()=>{if(window.location.pathname!==h){h=window.location.pathname,f=B(),i.debug("Page changed:",f,h);for(let e of L)try{e(f)}catch(n){i.error("Subscriber threw:",n)}}},R=e=>(L.add(e),setTimeout(()=>e(f),0),()=>{L.delete(e)}),D=()=>{f=B(),h=window.location.pathname,i.debug("Router init, current page:",f);let e=history.pushState.bind(history),n=history.replaceState.bind(history);history.pushState=function(t,s,r){e(t,s,r),y()},history.replaceState=function(t,s,r){n(t,s,r),y()},window.addEventListener("popstate",y),setInterval(y,1e3)};var w="0.3.0",v="2026-05-13T00:29:40.678Z";var q=/\/contacts\/detail\/([A-Za-z0-9]+)/,W=/\/v2\/location\/([A-Za-z0-9]+)/,u=()=>{let e=window.location.pathname,n=e.match(q);if(!n)return null;let t=e.match(W);return{contactId:n[1],locationId:t?t[1]:null}};var b=(e,n={})=>{let{timeoutMs:t=8e3,pollMs:s=100,root:r=document}=n;return new Promise((a,l)=>{let p=r.querySelector(e);if(p){a(p);return}let m,T,$=()=>{M&&M.disconnect(),m!==void 0&&window.clearTimeout(m),T!==void 0&&window.clearInterval(T)},M=new MutationObserver(()=>{let g=r.querySelector(e);g&&($(),a(g))});M.observe(document.body,{childList:!0,subtree:!0}),T=window.setInterval(()=>{let g=r.querySelector(e);g&&($(),a(g))},s),m=window.setTimeout(()=>{$(),i.warn(`waitForElement timed out for selector: ${e}`),l(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var o={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},d={sm:"4px",md:"6px",lg:"10px",pill:"999px"},c={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},k={purple:"#8B5CF6",green:o.emerald,orange:o.amber,red:o.crimson},_=e=>{let n=e==="emerald"?o.emeraldGlow:e==="amber"?o.amberGlow:o.slate,t=e==="emerald"?o.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":o.steel,s=e==="emerald"?o.emerald:e==="amber"?o.amber:o.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${n};
    color: ${s};
    border: 1px solid ${t};
    border-radius: ${d.pill};
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
  `},I=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${o.emerald};
  color: ${o.obsidian};
  border: none;
  border-radius: ${d.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,S=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${o.bone};
  border: 1px solid ${o.steel};
  border-radius: ${d.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var E="ws-crm-claim-release-pill",V=e=>{let n=Array.from(e.children).find(s=>{if(!(s instanceof HTMLElement))return!1;let r=s.className?.toString()??"";return r.includes("flex")&&r.includes("flex-col")});return n?n.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},j=({contactId:e,mode:n})=>{let t=document.createElement("button");t.id=E,t.type="button",t.dataset.contactId=e,t.dataset.mode=n;let s=n==="claim"?"emerald":"amber",r=n==="claim"?o.emerald:o.amber;return t.style.cssText=_(s),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span>${n==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=n==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{i.info(`Claim/Release pill clicked for contact ${e}: ${n}`);let a=t.lastElementChild,l=a?.textContent??"";a&&(a.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{a&&(a.textContent=l),t.style.opacity="1",t.disabled=!1},700)}),t},Y=async()=>{let e=u();if(!e){document.getElementById(E)?.remove();return}let n=document.getElementById(E);if(!(n&&n.dataset.contactId===e.contactId)){n&&n.remove();try{let t=await b("#record-details-lhs",{timeoutMs:1e4}),s=u();if(!s||s.contactId!==e.contactId)return;let r=j({contactId:e.contactId,mode:"claim"}),a=V(t);if(a){let l=document.createElement("span");l.id=`${E}-wrap`,l.style.cssText=`
        display: inline-flex;
        align-items: center;
        margin-left: 12px;
        vertical-align: middle;
      `,l.appendChild(r),a.appendChild(l),i.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`)}else t.insertBefore(r,t.firstChild),i.debug(`Mounted Claim/Release pill at top of LHS (no name anchor) for ${e.contactId}`)}catch(t){i.warn("Could not mount Claim/Release pill:",t)}}},O=()=>{Y()};var C="ws-crm-contact-actions-bar",Z="ws-crm-call-status-dropdown",P="ws-crm-offer-made-modal",K=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],X=[".central-panel","[class*='central-panel']"],J=async()=>{for(let e of X)try{let n=await b(e,{timeoutMs:3e3});if(n)return n}catch{}try{return(await b("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Q=e=>{let n=document.createElement("div");n.id=Z,n.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=S,t.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${o.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${o.ash};
      margin-left: 2px;
    ">\u25BE</span>
  `;let s=document.createElement("div");return s.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${o.graphite};
    border: 1px solid ${o.steel};
    border-radius: ${d.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,K.forEach(r=>{let a=document.createElement("button");a.type="button",a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${o.bone};
      border: none;
      border-radius: ${d.sm};
      font-family: ${c.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,a.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${k[r.color]};
        flex-shrink: 0;
      "></span>
      <span>${r.label}</span>
    `,a.addEventListener("mouseenter",()=>{a.style.background=o.slate}),a.addEventListener("mouseleave",()=>{a.style.background="transparent"}),a.addEventListener("click",()=>{i.info(`Call Status set to "${r.label}" (${r.value}, ${r.color}) for contact ${e}`);let l=t.firstElementChild,p=t.children[1];l&&(l.style.background=k[r.color]),p&&(p.textContent=r.label),s.style.display="none"}),s.appendChild(a)}),t.addEventListener("click",r=>{r.stopPropagation(),s.style.display=s.style.display==="none"?"block":"none"}),document.addEventListener("click",r=>{n.contains(r.target)||(s.style.display="none")}),n.appendChild(t),n.appendChild(s),n},ee=e=>{document.getElementById(P)?.remove();let n=document.createElement("div");n.id=P,n.style.cssText=`
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
    background: ${o.graphite};
    border: 1px solid ${o.steel};
    border-radius: ${d.lg};
    padding: 24px 28px;
    color: ${o.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let s=new Date,r=new Date(s.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${o.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${o.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${o.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${o.slate};
      border: 1px solid ${o.steel};
      border-radius: ${d.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${o.ash}; font-family: ${c.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${o.bone};
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
      color: ${o.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${r}"
      style="
        width: 100%;
        background: ${o.slate};
        border: 1px solid ${o.steel};
        border-radius: ${d.sm};
        color: ${o.bone};
        font-family: ${c.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${S}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${I}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,n.appendChild(t),document.body.appendChild(n);let a=()=>n.remove();n.addEventListener("click",l=>{l.target===n&&a()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",a),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(t.querySelector("#ws-offer-amount")?.value??"").trim(),p=t.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){i.warn("Offer Made submit blocked \u2014 invalid amount");return}i.info(`Offer Made recorded for contact ${e}: $${l}, expires ${p}`),a()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},H=e=>{let n=document.createElement("div");n.id=C,n.dataset.contactId=e,n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${o.graphite};
    border-bottom: 1px solid ${o.steel};
    flex-shrink: 0;
  `,n.appendChild(Q(e));let t=document.createElement("button");return t.type="button",t.style.cssText=I,t.textContent="Offer Made",t.addEventListener("click",()=>ee(e)),n.appendChild(t),n},te=async()=>{let e=u();if(!e){document.getElementById(C)?.remove();return}let n=document.getElementById(C);if(n&&n.dataset.contactId===e.contactId)return;n&&n.remove();let t=await J();if(!t){i.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let s=u();if(!s||s.contactId!==e.contactId)return;let r=H(e.contactId);r.dataset.mountTarget=t.className||"central-panel",t.insertBefore(r,t.firstChild),i.debug(`Mounted contact actions bar for ${e.contactId}`);let a=null;a=new MutationObserver(()=>{let l=document.getElementById(C);if(!(u()?.contactId===e.contactId)){a?.disconnect();return}if(!l){let m=H(e.contactId);m.dataset.mountTarget=r.dataset.mountTarget??"",t.insertBefore(m,t.firstChild),i.debug(`Re-mounted actions bar after React wipe for ${e.contactId}`)}}),a.observe(t,{childList:!0})},A=()=>{te()};var z="ws-crm-customizer-version-badge",N=()=>{if(document.getElementById(z))return;let e=document.createElement("div");e.id=z,e.style.cssText=`
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
  `,e.textContent=`Customizer v${w}`,e.title=`Built ${v}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var F=()=>{i.info(`Loaded v${w} (built ${v})`),D(),R(e=>{i.debug("Page handler firing for:",e),N(),O(),A()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F();})();
//# sourceMappingURL=customizer.js.map
