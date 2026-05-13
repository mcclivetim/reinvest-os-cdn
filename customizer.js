/* Wholesaling CRM Customizer v0.3.0 — built 2026-05-13T00:17:30.463Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var g="[wholesaling-crm-customizer]",F="__WS_CRM_DEBUG",G=()=>!!window[F],s={info(...e){console.log(g,...e)},warn(...e){console.warn(g,...e)},error(...e){console.error(g,...e)},debug(...e){G()&&console.log(g,"[debug]",...e)}};var B=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},x="",u="other",k=new Set,b=()=>{if(window.location.pathname!==x){x=window.location.pathname,u=B(),s.debug("Page changed:",u,x);for(let e of k)try{e(u)}catch(o){s.error("Subscriber threw:",o)}}},_=e=>(k.add(e),setTimeout(()=>e(u),0),()=>{k.delete(e)}),D=()=>{u=B(),x=window.location.pathname,s.debug("Router init, current page:",u);let e=history.pushState.bind(history),o=history.replaceState.bind(history);history.pushState=function(t,a,r){e(t,a,r),b()},history.replaceState=function(t,a,r){o(t,a,r),b()},window.addEventListener("popstate",b),setInterval(b,1e3)};var y="0.3.0",h="2026-05-13T00:17:30.464Z";var U=/\/contacts\/detail\/([A-Za-z0-9]+)/,q=/\/v2\/location\/([A-Za-z0-9]+)/,m=()=>{let e=window.location.pathname,o=e.match(U);if(!o)return null;let t=e.match(q);return{contactId:o[1],locationId:t?t[1]:null}};var v=(e,o={})=>{let{timeoutMs:t=8e3,pollMs:a=100,root:r=document}=o;return new Promise((i,l)=>{let p=r.querySelector(e);if(p){i(p);return}let E,C,$=()=>{T&&T.disconnect(),E!==void 0&&window.clearTimeout(E),C!==void 0&&window.clearInterval(C)},T=new MutationObserver(()=>{let f=r.querySelector(e);f&&($(),i(f))});T.observe(document.body,{childList:!0,subtree:!0}),C=window.setInterval(()=>{let f=r.querySelector(e);f&&($(),i(f))},a),E=window.setTimeout(()=>{$(),s.warn(`waitForElement timed out for selector: ${e}`),l(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},d={sm:"4px",md:"6px",lg:"10px",pill:"999px"},c={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},L={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},R=e=>{let o=e==="emerald"?n.emeraldGlow:e==="amber"?n.amberGlow:n.slate,t=e==="emerald"?n.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,a=e==="emerald"?n.emerald:e==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${o};
    color: ${a};
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
  `},M=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
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
`,I=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${d.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var w="ws-crm-claim-release-pill",V=["#record-details-lhs .contact-name","#record-details-lhs [data-testid='contact-name']","#record-details-lhs h1","#record-details-lhs h2","#record-details-lhs .name"],W=e=>{for(let t of V){let a=document.querySelector(t);if(a)return a}return e.querySelector("h1, h2, h3")??null},j=({contactId:e,mode:o})=>{let t=document.createElement("button");t.id=w,t.type="button",t.dataset.contactId=e,t.dataset.mode=o;let a=o==="claim"?"emerald":"amber",r=o==="claim"?n.emerald:n.amber;return t.style.cssText=R(a),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span>${o==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=o==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{s.info(`Claim/Release pill clicked for contact ${e}: ${o}`);let i=t.lastElementChild,l=i?.textContent??"";i&&(i.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{i&&(i.textContent=l),t.style.opacity="1",t.disabled=!1},700)}),t},Y=async()=>{let e=m();if(!e){document.getElementById(w)?.remove();return}let o=document.getElementById(w);if(!(o&&o.dataset.contactId===e.contactId)){o&&o.remove();try{let t=await v("#record-details-lhs",{timeoutMs:1e4}),a=m();if(!a||a.contactId!==e.contactId)return;let r=j({contactId:e.contactId,mode:"claim"}),i=W(t);if(i){let l=document.createElement("span");l.id=`${w}-wrap`,l.style.cssText=`
        display: inline-flex;
        align-items: center;
        margin-left: 12px;
        vertical-align: middle;
      `,l.appendChild(r),i.appendChild(l),s.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`)}else t.insertBefore(r,t.firstChild),s.debug(`Mounted Claim/Release pill at top of LHS (no name anchor) for ${e.contactId}`)}catch(t){s.warn("Could not mount Claim/Release pill:",t)}}},O=()=>{Y()};var S="ws-crm-contact-actions-bar",Z="ws-crm-call-status-dropdown",P="ws-crm-offer-made-modal",K=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],X=["#contact-conversation-panel","[data-testid='conversation-panel']",".conversation-panel"],J=async()=>{for(let e of X)try{let o=await v(e,{timeoutMs:3e3});if(o)return o}catch{}return null},Q=e=>{let o=document.createElement("div");o.id=Z,o.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=I,t.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>Call Status</span>
    <span style="
      font-size: 10px;
      color: ${n.ash};
      margin-left: 2px;
    ">\u25BE</span>
  `;let a=document.createElement("div");return a.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${d.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,K.forEach(r=>{let i=document.createElement("button");i.type="button",i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${d.sm};
      font-family: ${c.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,i.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${L[r.color]};
        flex-shrink: 0;
      "></span>
      <span>${r.label}</span>
    `,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",()=>{s.info(`Call Status set to "${r.label}" (${r.value}, ${r.color}) for contact ${e}`);let l=t.firstElementChild,p=t.children[1];l&&(l.style.background=L[r.color]),p&&(p.textContent=r.label),a.style.display="none"}),a.appendChild(i)}),t.addEventListener("click",r=>{r.stopPropagation(),a.style.display=a.style.display==="none"?"block":"none"}),document.addEventListener("click",r=>{o.contains(r.target)||(a.style.display="none")}),o.appendChild(t),o.appendChild(a),o},ee=e=>{document.getElementById(P)?.remove();let o=document.createElement("div");o.id=P,o.style.cssText=`
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
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${d.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let a=new Date,r=new Date(a.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 8px;
    ">Record Offer</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Offer Made</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
    ">Attributes the offer to you for KPI tracking.</div>

    <label style="
      display: block;
      font-family: ${c.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
    ">Offer Amount</label>
    <div style="
      display: flex;
      align-items: center;
      background: ${n.slate};
      border: 1px solid ${n.steel};
      border-radius: ${d.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${n.ash}; font-family: ${c.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
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
      color: ${n.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${r}"
      style="
        width: 100%;
        background: ${n.slate};
        border: 1px solid ${n.steel};
        border-radius: ${d.sm};
        color: ${n.bone};
        font-family: ${c.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${I}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${M}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,o.appendChild(t),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",l=>{l.target===o&&i()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",i),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(t.querySelector("#ws-offer-amount")?.value??"").trim(),p=t.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){s.warn("Offer Made submit blocked \u2014 invalid amount");return}s.info(`Offer Made recorded for contact ${e}: $${l}, expires ${p}`),i()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},te=e=>{let o=document.createElement("div");o.id=S,o.dataset.contactId=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,o.appendChild(Q(e));let t=document.createElement("button");return t.type="button",t.style.cssText=M,t.textContent="Offer Made",t.addEventListener("click",()=>ee(e)),o.appendChild(t),o},oe=async()=>{let e=m();if(!e){document.getElementById(S)?.remove();return}let o=document.getElementById(S);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove();let t=await J();if(!t){s.warn("Could not mount actions bar \u2014 conversation panel not found within timeout");return}let a=m();if(!a||a.contactId!==e.contactId)return;let r=te(e.contactId);t.insertBefore(r,t.firstChild),s.debug(`Mounted contact actions bar for ${e.contactId}`)},H=()=>{oe()};var A="ws-crm-customizer-version-badge",z=()=>{if(document.getElementById(A))return;let e=document.createElement("div");e.id=A,e.style.cssText=`
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
  `,e.textContent=`Customizer v${y}`,e.title=`Built ${h}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var N=()=>{s.info(`Loaded v${y} (built ${h})`),D(),_(e=>{s.debug("Page handler firing for:",e),z(),O(),H()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();})();
//# sourceMappingURL=customizer.js.map
