/* Wholesaling CRM Customizer v0.3.0 — built 2026-05-13T00:35:02.552Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var y="[wholesaling-crm-customizer]",q="__WS_CRM_DEBUG",W=()=>!!window[q],s={info(...e){console.log(y,...e)},warn(...e){console.warn(y,...e)},error(...e){console.error(y,...e)},debug(...e){W()&&console.log(y,"[debug]",...e)}};var B=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities/")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},w="",f="other",L=new Set,h=()=>{if(window.location.pathname!==w){w=window.location.pathname,f=B(),s.debug("Page changed:",f,w);for(let e of L)try{e(f)}catch(n){s.error("Subscriber threw:",n)}}},R=e=>(L.add(e),setTimeout(()=>e(f),0),()=>{L.delete(e)}),D=()=>{f=B(),w=window.location.pathname,s.debug("Router init, current page:",f);let e=history.pushState.bind(history),n=history.replaceState.bind(history);history.pushState=function(t,r,a){e(t,r,a),h()},history.replaceState=function(t,r,a){n(t,r,a),h()},window.addEventListener("popstate",h),setInterval(h,1e3)};var v="0.3.0",E="2026-05-13T00:35:02.553Z";var V=/\/contacts\/detail\/([A-Za-z0-9]+)/,j=/\/v2\/location\/([A-Za-z0-9]+)/,u=()=>{let e=window.location.pathname,n=e.match(V);if(!n)return null;let t=e.match(j);return{contactId:n[1],locationId:t?t[1]:null}};var b=(e,n={})=>{let{timeoutMs:t=8e3,pollMs:r=100,root:a=document}=n;return new Promise((i,l)=>{let d=a.querySelector(e);if(d){i(d);return}let m,C,$=()=>{M&&M.disconnect(),m!==void 0&&window.clearTimeout(m),C!==void 0&&window.clearInterval(C)},M=new MutationObserver(()=>{let g=a.querySelector(e);g&&($(),i(g))});M.observe(document.body,{childList:!0,subtree:!0}),C=window.setInterval(()=>{let g=a.querySelector(e);g&&($(),i(g))},r),m=window.setTimeout(()=>{$(),s.warn(`waitForElement timed out for selector: ${e}`),l(new Error(`Selector not found within ${t}ms: ${e}`))},t)})};var o={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},p={sm:"4px",md:"6px",lg:"10px",pill:"999px"},c={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},I={purple:"#8B5CF6",green:o.emerald,orange:o.amber,red:o.crimson},_=e=>{let n=e==="emerald"?o.emeraldGlow:e==="amber"?o.amberGlow:o.slate,t=e==="emerald"?o.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":o.steel,r=e==="emerald"?o.emerald:e==="amber"?o.amber:o.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${n};
    color: ${r};
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
  `},k=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${o.emerald};
  color: ${o.obsidian};
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
`,S=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${o.bone};
  border: 1px solid ${o.steel};
  border-radius: ${p.sm};
  font-family: ${c.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var x="ws-crm-claim-release-pill",O=e=>{let n=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return n?n.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Y=({contactId:e,mode:n})=>{let t=document.createElement("button");t.id=x,t.type="button",t.dataset.contactId=e,t.dataset.mode=n;let r=n==="claim"?"emerald":"amber",a=n==="claim"?o.emerald:o.amber;return t.style.cssText=_(r),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${n==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=n==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{s.info(`Claim/Release pill clicked for contact ${e}: ${n}`);let i=t.lastElementChild,l=i?.textContent??"";i&&(i.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{i&&(i.textContent=l),t.style.opacity="1",t.disabled=!1},700)}),t},Z=async(e,n=1e4)=>{let t=Date.now();for(;Date.now()-t<n;){let r=O(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},P=(e,n)=>{let t=Y({contactId:n,mode:"claim"}),r=document.createElement("span");r.id=`${x}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(t),e.appendChild(r)},K=async()=>{let e=u();if(!e){document.getElementById(x)?.remove();return}let n=document.getElementById(x);if(!(n&&n.dataset.contactId===e.contactId)){n&&n.remove();try{let t=await b("#record-details-lhs",{timeoutMs:1e4}),r=await Z(t),a=u();if(!a||a.contactId!==e.contactId)return;if(!r){s.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}P(r,e.contactId),s.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`);let i=null;i=new MutationObserver(async()=>{if(!(u()?.contactId===e.contactId)){i?.disconnect();return}if(document.getElementById(x))return;let d=O(t);d&&(P(d,e.contactId),s.debug("Re-mounted Claim/Release pill after React wipe"))}),i.observe(t,{childList:!0,subtree:!0})}catch(t){s.warn("Could not mount Claim/Release pill:",t)}}},H=()=>{K()};var T="ws-crm-contact-actions-bar",X="ws-crm-call-status-dropdown",N="ws-crm-offer-made-modal",J=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Q=[".central-panel","[class*='central-panel']"],ee=async()=>{for(let e of Q)try{let n=await b(e,{timeoutMs:3e3});if(n)return n}catch{}try{return(await b("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},te=e=>{let n=document.createElement("div");n.id=X,n.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=S,t.innerHTML=`
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
  `;let r=document.createElement("div");return r.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${o.graphite};
    border: 1px solid ${o.steel};
    border-radius: ${p.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,J.forEach(a=>{let i=document.createElement("button");i.type="button",i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${o.bone};
      border: none;
      border-radius: ${p.sm};
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
        background: ${I[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,i.addEventListener("mouseenter",()=>{i.style.background=o.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",()=>{s.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${e}`);let l=t.firstElementChild,d=t.children[1];l&&(l.style.background=I[a.color]),d&&(d.textContent=a.label),r.style.display="none"}),r.appendChild(i)}),t.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{n.contains(a.target)||(r.style.display="none")}),n.appendChild(t),n.appendChild(r),n},ne=e=>{document.getElementById(N)?.remove();let n=document.createElement("div");n.id=N,n.style.cssText=`
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
    border-radius: ${p.lg};
    padding: 24px 28px;
    color: ${o.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
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
      border-radius: ${p.sm};
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
    <input id="ws-offer-expires" type="date" value="${a}"
      style="
        width: 100%;
        background: ${o.slate};
        border: 1px solid ${o.steel};
        border-radius: ${p.sm};
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
        ${k}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,n.appendChild(t),document.body.appendChild(n);let i=()=>n.remove();n.addEventListener("click",l=>{l.target===n&&i()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",i),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(t.querySelector("#ws-offer-amount")?.value??"").trim(),d=t.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){s.warn("Offer Made submit blocked \u2014 invalid amount");return}s.info(`Offer Made recorded for contact ${e}: $${l}, expires ${d}`),i()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},z=e=>{let n=document.createElement("div");n.id=T,n.dataset.contactId=e,n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${o.graphite};
    border-bottom: 1px solid ${o.steel};
    flex-shrink: 0;
  `,n.appendChild(te(e));let t=document.createElement("button");return t.type="button",t.style.cssText=k,t.textContent="Offer Made",t.addEventListener("click",()=>ne(e)),n.appendChild(t),n},oe=async()=>{let e=u();if(!e){document.getElementById(T)?.remove();return}let n=document.getElementById(T);if(n&&n.dataset.contactId===e.contactId)return;n&&n.remove();let t=await ee();if(!t){s.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=u();if(!r||r.contactId!==e.contactId)return;let a=z(e.contactId);a.dataset.mountTarget=t.className||"central-panel",t.insertBefore(a,t.firstChild),s.debug(`Mounted contact actions bar for ${e.contactId}`);let i=null;i=new MutationObserver(()=>{let l=document.getElementById(T);if(!(u()?.contactId===e.contactId)){i?.disconnect();return}if(!l){let m=z(e.contactId);m.dataset.mountTarget=a.dataset.mountTarget??"",t.insertBefore(m,t.firstChild),s.debug(`Re-mounted actions bar after React wipe for ${e.contactId}`)}}),i.observe(t,{childList:!0})},A=()=>{oe()};var F="ws-crm-customizer-version-badge",G=()=>{if(document.getElementById(F))return;let e=document.createElement("div");e.id=F,e.style.cssText=`
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
  `,e.textContent=`Customizer v${v}`,e.title=`Built ${E}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var U=()=>{s.info(`Loaded v${v} (built ${E})`),D(),R(e=>{s.debug("Page handler firing for:",e),G(),H(),A()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U):U();})();
//# sourceMappingURL=customizer.js.map
