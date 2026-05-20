/* Wholesaling CRM Customizer v0.9.18 — built 2026-05-20T18:17:17.314Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var N="[wholesaling-crm-customizer]",Ce="__WS_CRM_DEBUG",Ae=()=>!!window[Ce],h={info(...o){console.log(N,...o)},warn(...o){console.warn(N,...o)},error(...o){console.error(N,...o)},debug(...o){Ae()&&console.log(N,"[debug]",...o)}};var J=()=>{let o=window.location.pathname;return o.includes("/contacts/detail/")?"contact-detail":o.includes("/contacts/smart-list")||o.includes("/contacts/")?"contact-list":o.includes("/opportunities/detail/")?"opportunity-detail":o.includes("/opportunities/")?"opportunity-list":o.includes("/calendars/")?"calendar":o.includes("/dashboard")?"dashboard":o.includes("/conversations")?"conversations":o.includes("/settings")?"settings":"other"},M="",F="other",W=new Set,H=()=>{if(window.location.pathname!==M){M=window.location.pathname,F=J(),h.debug("Page changed:",F,M);for(let o of W)try{o(F)}catch(e){h.error("Subscriber threw:",e)}}},Z=o=>(W.add(o),setTimeout(()=>o(F),0),()=>{W.delete(o)}),Q=()=>{F=J(),M=window.location.pathname,h.debug("Router init, current page:",F);let o=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(t,r,n){o(t,r,n),H()},history.replaceState=function(t,r,n){e(t,r,n),H()},window.addEventListener("popstate",H),setInterval(H,1e3)};var R="0.9.18",B="2026-05-20T18:17:17.316Z";var Le=/\/contacts\/detail\/([A-Za-z0-9]+)/,Ie=/\/v2\/location\/([A-Za-z0-9]+)/,E=()=>{let o=window.location.pathname,e=o.match(Le);if(!e)return null;let t=o.match(Ie);return{contactId:e[1],locationId:t?t[1]:null}};var C=(o,e={})=>{let{timeoutMs:t=8e3,pollMs:r=100,root:n=document}=e;return new Promise((i,s)=>{let a=n.querySelector(o);if(a){i(a);return}let d,b,p=()=>{m&&m.disconnect(),d!==void 0&&window.clearTimeout(d),b!==void 0&&window.clearInterval(b)},m=new MutationObserver(()=>{let c=n.querySelector(o);c&&(p(),i(c))});m.observe(document.body,{childList:!0,subtree:!0}),b=window.setInterval(()=>{let c=n.querySelector(o);c&&(p(),i(c))},r),d=window.setTimeout(()=>{p(),h.warn(`waitForElement timed out for selector: ${o}`),s(new Error(`Selector not found within ${t}ms: ${o}`))},t)})};var l={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},x={sm:"4px",md:"6px",lg:"10px",pill:"999px"},_={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},j={purple:"#8B5CF6",green:l.emerald,orange:l.amber,red:l.crimson},ee=o=>{let e=o==="emerald"?l.emeraldGlow:o==="amber"?l.amberGlow:l.slate,t=o==="emerald"?l.emeraldBorder:o==="amber"?"rgba(232, 163, 60, 0.3)":l.steel,r=o==="emerald"?l.emerald:o==="amber"?l.amber:l.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${e};
    color: ${r};
    border: 1px solid ${t};
    border-radius: ${x.pill};
    font-family: ${_.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},A=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.emerald};
  color: ${l.obsidian};
  border: none;
  border-radius: ${x.sm};
  font-family: ${_.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,L=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${l.bone};
  border: 1px solid ${l.steel};
  border-radius: ${x.sm};
  font-family: ${_.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var I="ws-crm-claim-release-pill",oe=o=>{let e=Array.from(o.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let n=r.className?.toString()??"";return n.includes("flex")&&n.includes("flex-col")});return e?e.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},De=({contactId:o,mode:e})=>{let t=document.createElement("button");t.id=I,t.type="button",t.dataset.contactId=o,t.dataset.mode=e;let r=e==="claim"?"emerald":"amber",n=e==="claim"?l.emerald:l.amber;return t.style.cssText=ee(r),t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${n};
      box-shadow: 0 0 6px ${n};
      flex-shrink: 0;
    "></span>
    <span>${e==="claim"?"Claim Lead":"Release Lead"}</span>
  `,t.title=e==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{h.info(`Claim/Release pill clicked for contact ${o}: ${e}`);let i=t.lastElementChild,s=i?.textContent??"";i&&(i.textContent="Working\u2026"),t.style.opacity="0.7",t.disabled=!0,setTimeout(()=>{i&&(i.textContent=s),t.style.opacity="1",t.disabled=!1},700)}),t},Ne=async(o,e=1e4)=>{let t=Date.now();for(;Date.now()-t<e;){let r=oe(o);if(r)return r;await new Promise(n=>setTimeout(n,150))}return null},te=(o,e)=>{let t=De({contactId:e,mode:"claim"}),r=document.createElement("span");r.id=`${I}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(t),o.appendChild(r)},He=async()=>{let o=E();if(!o){document.getElementById(I)?.remove();return}let e=document.getElementById(I);if(!(e&&e.dataset.contactId===o.contactId)){e&&e.remove();try{let t=await C("#record-details-lhs",{timeoutMs:1e4}),r=await Ne(t),n=E();if(!n||n.contactId!==o.contactId)return;if(!r){h.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}te(r,o.contactId),h.debug(`Mounted Claim/Release pill next to name for ${o.contactId}`);let i=null;i=new MutationObserver(async()=>{if(!(E()?.contactId===o.contactId)){i?.disconnect();return}if(document.getElementById(I))return;let a=oe(t);a&&(te(a,o.contactId),h.debug("Re-mounted Claim/Release pill after React wipe"))}),i.observe(t,{childList:!0,subtree:!0})}catch(t){h.warn("Could not mount Claim/Release pill:",t)}}},re=()=>{He()};var Me="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set";var Re="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",Be=()=>{let o=window.WS_CRM_USER_ID;if(o&&/^[A-Za-z0-9]{15,30}$/.test(o))return o;let e=window,t=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let r of t)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let n=JSON.parse(r),i=n.id??n._id;if(i&&/^[A-Za-z0-9]{15,30}$/.test(i))return i}for(let n of["tokenUser","currentUser","ghl_user"]){let i=localStorage.getItem(n);if(i)try{let s=JSON.parse(i),a=s.id??s._id;if(a&&/^[A-Za-z0-9]{15,30}$/.test(a))return a}catch{}}}catch{}return null},Oe=async({contactId:o,locationId:e,status:t,userId:r,deadReason:n})=>{let i={call_status:t,triggered_by_user_id:r??""};n&&(i.dead_reason=n);let a=await fetch(Me,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:o,location:{id:e},customData:i}),credentials:"omit"});if(!a.ok)throw new Error(`Webhook returned ${a.status} ${a.statusText}`)},Pe=async({contactId:o,tenantId:e})=>{let t=await fetch(Re,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:o}),credentials:"omit"});if(!t.ok)throw new Error(`Sanity check returned ${t.status} ${t.statusText}`);return await t.json()};var O="ws-crm-contact-actions-bar",Ge="ws-crm-call-status-dropdown",ne="ws-crm-offer-made-modal",$e=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Ve=[".central-panel","[class*='central-panel']"],Ue=async()=>{for(let o of Ve)try{let e=await C(o,{timeoutMs:3e3});if(e)return e}catch{}try{return(await C("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},ze=o=>{let e=document.createElement("div");e.id=Ge,e.style.cssText="position: relative; flex-shrink: 0;";let t=document.createElement("button");t.type="button",t.style.cssText=L,t.innerHTML=`
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
    border-radius: ${x.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,$e.forEach(n=>{let i=document.createElement("button");i.type="button",i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${l.bone};
      border: none;
      border-radius: ${x.sm};
      font-family: ${_.sans};
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
        background: ${j[n.color]};
        flex-shrink: 0;
      "></span>
      <span>${n.label}</span>
    `,i.addEventListener("mouseenter",()=>{i.style.background=l.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async()=>{h.info(`Call Status set to "${n.label}" (${n.value}, ${n.color}) for contact ${o}`);let s=t.firstElementChild,a=t.children[1],d=t.children[2];s&&(s.style.background=j[n.color]),a&&(a.textContent=n.label),r.style.display="none";let p=E()?.locationId,m=Be();if(!p){h.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),a&&(a.textContent=`${n.label} (no tenant!)`),a&&(a.style.color=l.amber);return}if(n.color==="green"&&!m){h.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),a&&(a.textContent=`${n.label} (no user!)`),a&&(a.style.color=l.amber);return}let c=d?.textContent??"\u25BE",f=async u=>{d&&(d.textContent="\u2026"),t.style.opacity="0.75";try{await Oe({contactId:o,locationId:p,status:n.label,userId:m,deadReason:u}),d&&(d.textContent="\u2713"),setTimeout(()=>{d&&(d.textContent=c),t.style.opacity="1"},900)}catch(v){h.warn("Call Status webhook failed:",v),d&&(d.textContent="\u2717"),a&&(a.style.color=l.amber),t.style.opacity="1",setTimeout(()=>{d&&(d.textContent=c),a&&(a.style.color=l.bone)},1800)}};if(n.value==="dead-deal"){let u=a?.textContent??"";We(v=>{f(v)},()=>{a&&(a.textContent=u)});return}if(n.value==="appointment-booked"){let u=a?.textContent??"";try{(await Pe({contactId:o,tenantId:p})).ok?await f():je(()=>{f()},()=>{a&&(a.textContent=u)})}catch(v){h.warn("Appointment sanity check failed; firing anyway:",v),await f()}return}await f()}),r.appendChild(i)}),t.addEventListener("click",n=>{n.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",n=>{e.contains(n.target)||(r.style.display="none")}),e.appendChild(t),e.appendChild(r),e},qe=o=>{document.getElementById(ne)?.remove();let e=document.createElement("div");e.id=ne,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${_.sans};
  `;let t=document.createElement("div");t.style.cssText=`
    width: min(420px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,n=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);t.innerHTML=`
    <div style="
      font-family: ${_.mono};
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
      font-family: ${_.mono};
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
      border-radius: ${x.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${l.ash}; font-family: ${_.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${l.bone};
          font-family: ${_.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${_.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${l.ash};
      margin-bottom: 6px;
    ">Expires</label>
    <input id="ws-offer-expires" type="date" value="${n}"
      style="
        width: 100%;
        background: ${l.slate};
        border: 1px solid ${l.steel};
        border-radius: ${x.sm};
        color: ${l.bone};
        font-family: ${_.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${L}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${A}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,e.appendChild(t),document.body.appendChild(e);let i=()=>e.remove();e.addEventListener("click",s=>{s.target===e&&i()}),t.querySelector("#ws-offer-cancel")?.addEventListener("click",i),t.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let s=(t.querySelector("#ws-offer-amount")?.value??"").trim(),a=t.querySelector("#ws-offer-expires")?.value??"";if(!s||Number(s)<=0){h.warn("Offer Made submit blocked \u2014 invalid amount");return}h.info(`Offer Made recorded for contact ${o}: $${s}, expires ${a}`),i()}),setTimeout(()=>{t.querySelector("#ws-offer-amount")?.focus()},0)},ae="ws-crm-dead-deal-modal",We=(o,e)=>{document.getElementById(ae)?.remove();let t=document.createElement("div");t.id=ae,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${_.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(460px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${_.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${l.amber};
      margin-bottom: 8px;
    ">Mark Lead Dead</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Why is this deal dead?</div>
    <div style="
      font-size: 12px;
      color: ${l.ash};
      margin-bottom: 20px;
    ">Logged as a contact note so the manager can spot patterns later (lost-reason coaching). Required.</div>

    <label style="
      display: block;
      font-family: ${_.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${l.ash};
      margin-bottom: 6px;
    ">Reason</label>
    <textarea id="ws-dead-reason" rows="4" placeholder="e.g. Seller decided to keep the property after talking to family"
      style="
        width: 100%;
        background: ${l.slate};
        border: 1px solid ${l.steel};
        border-radius: ${x.sm};
        color: ${l.bone};
        font-family: ${_.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 4px;
        outline: none;
        resize: vertical;
        min-height: 80px;
        box-sizing: border-box;
      "></textarea>
    <div id="ws-dead-error" style="
      font-size: 11px;
      color: ${l.amber};
      min-height: 16px;
      margin-bottom: 16px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-dead-cancel" type="button" style="
        ${L}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${A}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,t.appendChild(r),document.body.appendChild(t);let n=()=>t.remove(),i=()=>{n(),e()};t.addEventListener("click",a=>{a.target===t&&i()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",i);let s=()=>{let a=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),b=(a?.value??"").trim();if(!b){d&&(d.textContent="Please enter a reason."),a?.focus();return}if(b.length<4){d&&(d.textContent="Please enter at least a few words."),a?.focus();return}n(),o(b)};r.querySelector("#ws-dead-submit")?.addEventListener("click",s),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",a=>{a.key==="Enter"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),s()),a.key==="Escape"&&i()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},se="ws-crm-appointment-sanity-modal",je=(o,e)=>{document.getElementById(se)?.remove();let t=document.createElement("div");t.id=se,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${_.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(440px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${_.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${l.amber};
      margin-bottom: 8px;
    ">Heads up</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    ">No upcoming appointment found.</div>
    <div style="
      font-size: 13px;
      color: ${l.ash};
      line-height: 1.5;
      margin-bottom: 22px;
    ">
      Appointments are usually booked during the call so you can verify
      a time with the seller. Use the GHL calendar widget on this contact
      to schedule one \u2014 that will fire reminders automatically.
      <br><br>
      If you've already booked this another way, you can mark the status
      anyway and the reminders will need to be handled outside the CRM.
    </div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-appt-sanity-cancel" type="button" style="
        ${L}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${A}
        padding: 8px 16px;
        font-size: 13px;
        background: ${l.amber};
      ">Mark Anyway</button>
    </div>
  `,t.appendChild(r),document.body.appendChild(t);let n=()=>t.remove(),i=()=>{n(),e()};t.addEventListener("click",a=>{a.target===t&&i()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",i),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{n(),o()});let s=a=>{a.key==="Escape"&&(document.removeEventListener("keydown",s),i())};document.addEventListener("keydown",s)},ie=o=>{let e=document.createElement("div");e.id=O,e.dataset.contactId=o,e.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${l.graphite};
    border-bottom: 1px solid ${l.steel};
    flex-shrink: 0;
  `,e.appendChild(ze(o));let t=document.createElement("button");return t.type="button",t.style.cssText=A,t.textContent="Offer Made",t.addEventListener("click",()=>qe(o)),e.appendChild(t),e},Ke=async()=>{let o=E();if(!o){document.getElementById(O)?.remove();return}let e=document.getElementById(O);if(e&&e.dataset.contactId===o.contactId)return;e&&e.remove();let t=await Ue();if(!t){h.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=E();if(!r||r.contactId!==o.contactId)return;let n=ie(o.contactId);n.dataset.mountTarget=t.className||"central-panel",t.insertBefore(n,t.firstChild),h.debug(`Mounted contact actions bar for ${o.contactId}`);let i=null;i=new MutationObserver(()=>{let s=document.getElementById(O);if(!(E()?.contactId===o.contactId)){i?.disconnect();return}if(!s){let d=ie(o.contactId);d.dataset.mountTarget=n.dataset.mountTarget??"",t.insertBefore(d,t.firstChild),h.debug(`Re-mounted actions bar after React wipe for ${o.contactId}`)}}),i.observe(t,{childList:!0})},le=()=>{Ke()};var P="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Xe=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),D="data-ws-crm-favicon",K=o=>o.hasAttribute(D),de=o=>{if(o.tagName!=="LINK")return!1;let e=(o.getAttribute("rel")??"").toLowerCase();return Xe.has(e)},G=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{de(r)&&!K(r)&&r.remove()});let e=document.head.querySelector(`link[${D}="1"]`);e?e.href!==P&&(e.href=P):(e=document.createElement("link"),e.setAttribute(D,"1"),e.rel="icon",e.type="image/png",e.href=P,document.head.appendChild(e),h.debug("Favicon installed"));let t=document.head.querySelector(`link[${D}="apple"]`);t||(t=document.createElement("link"),t.setAttribute(D,"apple"),t.rel="apple-touch-icon",t.href=P,document.head.appendChild(t))},ce=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)G();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),G())},50)}new MutationObserver(r=>{let n=!1;for(let i of r)i.addedNodes.forEach(s=>{s instanceof HTMLLinkElement&&de(s)&&!K(s)&&(n=!0)}),i.removedNodes.forEach(s=>{s instanceof HTMLLinkElement&&K(s)&&(n=!0)});n&&G()}).observe(document.head,{childList:!0,subtree:!1});let e=0,t=window.setInterval(()=>{e+=1,G(),e>=5&&window.clearInterval(t)},1e3)};var z="reos-theme-stylesheet",ke="reos-theme-fonts",Ye=()=>{let o=document.getElementById(ke);o&&o.remove()},Je=`
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

/* 1b. GHL SEMANTIC PALETTE OVERRIDE \u2014 GHL's CSS uses var(--error-500),
   var(--success-500), var(--warning-500), etc. for branded colors
   across the entire app (icons, buttons, tags, accents). Overriding
   these on :root cascades the brand crimson/emerald/amber/blue
   throughout every GHL component without us chasing each selector.
   This is the master switch \u2014 if a future GHL screen looks red/orange/
   green/blue but doesn't match our brand, check that the property
   reads var(--<family>-<shade>) and adjust the variable here.

   Full 50-900 shade ladders for each semantic family. The 500 shade
   is the brand base color; 600-900 are progressively darker,
   400-50 progressively lighter. */
:root {
  /* Error / destructive / delete \u2014 crimson family */
  --error-50: #FDF2F3;
  --error-100: #FBE5E7;
  --error-200: #F5C0C5;
  --error-300: #EE9BA2;
  --error-400: #E16D77;
  --error-500: #D43F4A;
  --error-600: #B83642;
  --error-700: #92252D;
  --error-800: #6F1C24;
  --error-900: #4A131A;
  --error: #D43F4A;

  /* Success / positive / claim \u2014 emerald family */
  --success-50: #ECFDF5;
  --success-100: #D1FAE5;
  --success-200: #A7F3D0;
  --success-300: #6EE7B7;
  --success-400: #34D399;
  --success-500: #0FB57E;
  --success-600: #0E9F6E;
  --success-700: #0A7D55;
  --success-800: #075F41;
  --success-900: #054029;
  --success: #0FB57E;

  /* Warning / caution / amber */
  --warning-50: #FFF8EC;
  --warning-100: #FEEEC7;
  --warning-200: #FCDB8A;
  --warning-300: #F4C46B;
  --warning-400: #EFB14E;
  --warning-500: #E8A33C;
  --warning-600: #C68B30;
  --warning-700: #9F6F26;
  --warning-800: #76521C;
  --warning-900: #4E3613;
  --warning: #E8A33C;

  /* Info / link / accent \u2014 brand blue */
  --info-50: #EFF5FE;
  --info-100: #DCE9FD;
  --info-200: #B7D2FB;
  --info-300: #8FB7F8;
  --info-400: #6DA0F6;
  --info-500: #4B8BF5;
  --info-600: #3A78E0;
  --info-700: #2A60B8;
  --info-800: #1F478C;
  --info-900: #142F5C;
  --info: #4B8BF5;

  /* Primary brand \u2014 emerald (matches success since emerald IS our
     primary accent). Override here if GHL uses --primary-* anywhere. */
  --primary-50: #ECFDF5;
  --primary-100: #D1FAE5;
  --primary-200: #A7F3D0;
  --primary-300: #6EE7B7;
  --primary-400: #34D399;
  --primary-500: #0FB57E;
  --primary-600: #0E9F6E;
  --primary-700: #0A7D55;
  --primary-800: #075F41;
  --primary-900: #054029;
  --primary: #0FB57E;
}

/* 2. GLOBAL \u2014 font + body color. The body bg is dimmed but specific
   surfaces get their own bg in section 6.

   Note: .hr-config-provider was previously in this rule's obsidian
   list. Removed in v0.7.70 because GHL nests .hr-config-provider
   INSIDE specific wrapper components (e.g. .conversationsUtilitiesApp
   which has its own inline graphite bg). The nested .hr-config-provider
   then painted obsidian on top, hiding the graphite of its parent and
   creating a near-black band around inner content (Tim noticed it on
   the Manual Actions title section and the h-4 spacer).

   .hr-config-provider is now styled separately below as a transparent
   passthrough wrapper that takes its parent's bg. */
body,
.hl-app,
.app-container,
.hl_wrapper {
  background: var(--reos-obsidian) !important;
  color: var(--reos-bone) !important;
}
/* .hr-wrapper-container \u2014 top-level page wrapper used by HR (Highrise)
   panels such as #conversations-new-app, #contacts-highrise-central-panel-wrapper,
   and #contacts-highrise-right-side-bar-wrapper. Diagnosed live via
   /browse on 2026-05-18: these wrappers were painting obsidian
   (rgb(10,13,18)) covering the full page area behind content, giving
   the user the "dark black BG on the whole page" complaint. Paint
   graphite instead so wrappers blend with the surrounding chrome,
   while body / .hl-app / .app-container / .hl_wrapper stay obsidian
   for the deepest page background. */
.hr-wrapper-container {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* .hr-config-provider \u2014 nested HR design-system wrapper. Don't paint
   it obsidian or it covers parent wrapper colors. Inherit font /
   color from parents, leave bg transparent so the closest ancestor
   with an explicit bg shows through. */
.hr-config-provider {
  background: transparent !important;
  color: var(--reos-bone) !important;
}

/* 2a. FIRST-PAINT REFLOW TRIGGER \u2014 the Customizer JS injects this
   <style> tag asynchronously, AFTER GHL's Vue app has already rendered
   the page with its native (light) styles. The new <style> tag applies
   to the stylesheet, but the browser doesn't always re-paint elements
   that were already rendered (especially panels with inline styles).
   The user sees light GHL panels until any layout reflow event (e.g.
   opening DevTools, resizing the window) \u2014 Tim observed this on the
   Conversations page first-load. After the first reflow the customizer
   overrides apply correctly and the page renders dark for the rest of
   the session.

   Fix: a near-zero-duration animation on body forces a paint cycle the
   moment this stylesheet is parsed, which triggers style recomputation
   on every descendant. The opacity change is so small (0.9999999 -> 1)
   that it's visually imperceptible, but it forces the browser to
   recompute styles for everything inside the body. */
@keyframes _reos-first-paint-trigger {
  from { opacity: 0.9999999; }
  to { opacity: 1; }
}
html body {
  animation: _reos-first-paint-trigger 1ms ease-in-out 1 forwards;
}

/* 3. NUMERIC FIELDS \u2014 tabular figures so columns of numbers line up.
   v0.8.83 removed the Geist Mono font-family override; we now use
   whatever font GHL specifies and just enable 'tnum' font-feature for
   that font (works with any modern font). */
.opportunity-value,
.deal-value,
.currency,
.monetary,
[class*="amount"],
[class*="phone"],
[class*="-date"],
[class*="-time"] {
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
.sidebar-v2 a.exact-active,
.sidebar-v2 a[class*="active"],
aside.default-bg-color a.active,
aside.default-bg-color a.exact-active,
aside.default-bg-color a[class*="active"],
[class*="sidebar"] a.active,
[class*="sidebar"] a.exact-active,
[class*="sidebar"] a.router-link-active,
[class*="sidebar"] a.router-link-exact-active {
  color: var(--reos-emerald) !important;
  background: var(--reos-emerald-glow) !important;
  opacity: 1 !important;
}
/* Force inner spans, labels, IMG icons, and SVG icons of an active
   sidebar item to follow the active emerald color. GHL uses both <img>
   (icon_X.svg from CDN) AND inline SVGs for sidebar icons. */
html body .sidebar-v2 a.active *,
html body .sidebar-v2 a.exact-active *,
html body .sidebar-v2 a[class*="active"] *,
html body aside.default-bg-color a.active *,
html body aside.default-bg-color a.exact-active *,
html body aside.default-bg-color a[class*="active"] *,
html body [class*="sidebar"] a.active *,
html body [class*="sidebar"] a.exact-active *,
html body [class*="sidebar"] a.router-link-active *,
html body [class*="sidebar"] a.router-link-exact-active * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
html body .sidebar-v2 a.active svg path,
html body aside.default-bg-color a.active svg path,
html body aside.default-bg-color a.exact-active svg path,
html body [class*="sidebar"] a.active svg path,
html body [class*="sidebar"] a.exact-active svg path,
html body [class*="sidebar"] a.router-link-active svg path,
html body [class*="sidebar"] a.router-link-exact-active svg path {
  stroke: var(--reos-emerald) !important;
  fill: currentColor !important;
}
/* GHL sidebar uses <img src="...icon_X.svg"> for icons. <img> can't be
   color-styled via CSS color \u2014 the SVG file's internal colors are fixed.
   Apply a filter to tint to emerald instead.

   Emerald #0FB57E filter recipe: brightness(0) sat(100%) invert \u2192
   then hue-rotate to emerald. Standard pattern:
   filter: brightness(0) saturate(100%) invert(54%) sepia(78%)
           saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%);
*/
html body .sidebar-v2 a.active img,
html body aside.default-bg-color a.active img,
html body aside.default-bg-color a.exact-active img,
html body [class*="sidebar"] a.active img,
html body [class*="sidebar"] a.exact-active img {
  filter: brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%) !important;
}

/* Active sidebar item hover \u2014 stay emerald (don't drop to bone-on-slate
   like inactive hover). Class-stacking pushes specificity above the
   plain :hover rule above. */
html body [class*="sidebar"] a.active:hover,
html body [class*="sidebar"] a.exact-active:hover,
html body [class*="sidebar"] a.router-link-active:hover,
html body [class*="sidebar"] a.router-link-exact-active:hover,
html body .sidebar-v2 a.active:hover,
html body aside.default-bg-color a.active:hover,
html body aside.default-bg-color a.exact-active:hover {
  color: var(--reos-emerald) !important;
  background: var(--reos-emerald-glow) !important;
}
html body [class*="sidebar"] a.active:hover *,
html body [class*="sidebar"] a.exact-active:hover *,
html body [class*="sidebar"] a.router-link-active:hover * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
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

/* 4b. AGENCY SUB-ACCOUNT SWITCHER popup. The popup that opens when you
   click the agency name (top-left) ships in default GHL with a white
   panel + bone text \u2014 invisible on our theme. The container is
   #location-list-containrer (note: typo, no second 'n') + .lead-connector. */
html body #location-list-containrer,
html body #location-list,
html body #location-list-containrer .wrap {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body #location-list-containrer * {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Section headings ("RECENT", "ALL ACCOUNTS") \u2014 ash text.
   v0.8.84: removed uppercase + letter-spacing + font-size override
   so native GHL typography wins (Tim's revert-fonts call). */
html body #location-list-containrer .hl_swicher-heading,
html body #location-list-containrer .hl_swicher-heading * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Sub-account row hover */
html body #location-list-containrer .hl_account:hover,
html body #location-list-containrer .hl_account:hover * {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  cursor: pointer !important;
}
/* OUTER POPUP CONTAINER \u2014 wraps the search input, the "Switch to Agency
   View" row, AND the dark list below. Default ships as white panel, which
   leaves a white strip at the top of the popup above our dark list. Force
   the whole container to graphite + style the tip-arrow / search wrapper /
   agency-switch row to match. */
html body .hl_v2-location_switcher {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
  border-radius: 8px !important;
}
/* Tip arrow (the little triangle pointing up to the trigger chip) */
html body .hl_v2-location_switcher .hl_v2_tip-arrow,
html body .hl_v2-location_switcher .hl_v2_tip-arrow::before,
html body .hl_v2-location_switcher .hl_v2_tip-arrow::after {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-cool-gray) !important;
}
/* "Switch to Agency View" row \u2014 sits between the search input and the
   dark list. Graphite bg, emerald CTA text (matches active-accent standard
   everywhere else). The SVG badge keeps its hardcoded blue pill \u2014 it's a
   recognizable affordance and reads fine on dark.

   Multiple selectors because GHL has shipped this row under several ID/class
   names. Without these the text falls through to .text-gray-400 (remapped
   to cool-gray) and renders nearly invisible on graphite. opacity:1 guards
   against utility classes that mute the text. */
html body .hl_v2-location_switcher #switcher-agency-switch,
html body .hl_v2-location_switcher #switcher-agency-switch *,
html body .hl_v2-location_switcher [id*="agency-switch"],
html body .hl_v2-location_switcher [id*="agency-switch"] *,
html body .hl_v2-location_switcher [id*="switcher-agency"],
html body .hl_v2-location_switcher [id*="switcher-agency"] *,
html body .hl_v2-location_switcher [class*="agency-switch"],
html body .hl_v2-location_switcher [class*="agency-switch"] *,
html body .hl_v2-location_switcher [class*="switch-to-agency"],
html body .hl_v2-location_switcher [class*="switch-to-agency"] * {
  background-color: transparent !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  opacity: 1 !important;
}
html body .hl_v2-location_switcher #switcher-agency-switch:hover,
html body .hl_v2-location_switcher [id*="agency-switch"]:hover,
html body .hl_v2-location_switcher [id*="switcher-agency"]:hover,
html body .hl_v2-location_switcher [class*="agency-switch"]:hover,
html body .hl_v2-location_switcher [class*="switch-to-agency"]:hover {
  background-color: var(--reos-slate) !important;
  cursor: pointer !important;
}
/* Search input wrapper \u2014 kill the white parent + bone any stray text. The
   input itself is already inline-styled dark, but its row container ships
   white. */
html body .hl_v2-location_switcher .search-area,
html body .hl_v2-location_switcher .search-area * {
  background-color: transparent !important;
}
html body .hl_v2-location_switcher input[type="search"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .hl_v2-location_switcher .search-area svg {
  color: var(--reos-ash) !important;
}
/* Sub-account initial circle */
html body #location-list-containrer .hl_account [class*="rounded-full"] {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  font-weight: 600 !important;
}
/* Search input at the top of the popup */
html body #location-list-containrer input[type="text"],
html body #location-list-containrer input:not([type="checkbox"]):not([type="radio"]) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
/* Pinned icon (the push-pin SVG on the right) \u2014 keep visible */
html body #location-list-containrer .hl_pinned path,
html body #location-list-containrer .hl_pinned-fade path {
  fill: var(--reos-cool-gray) !important;
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
input:focus:not([type="checkbox"]):not([type="radio"]):not(.n-base-selection-input):not(.n-input__input-el),
textarea:focus,
select:focus,
.form-control:focus,
.hr-input--focus,
.hr-input--focused {
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
  outline: none !important;
}
/* Kill the universal input:focus 1px emerald box-shadow on the
   hidden inputs inside Naive UI select + n-input. Those components
   draw their own focus ring via .n-base-selection__state-border /
   .n-input__state-border overlay \u2014 the universal rule stacked a
   2nd emerald ring that bled outside the inner overlay, creating
   the 'double border' Tim observed. */
html body .n-base-selection-input:focus,
html body .n-base-selection-input:focus-visible,
html body .n-input__input-el:focus,
html body .n-input__input-el:focus-visible {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
}
/* Checkboxes/radios: no focus ring (Tim's spec \u2014 no hover/focus
   state for checkboxes since they're heavy in long lists). */
html body input[type="checkbox"]:focus,
html body input[type="checkbox"]:focus-visible,
html body input[type="radio"]:focus,
html body input[type="radio"]:focus-visible {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
}
html body input[type="checkbox"]:checked:focus,
html body input[type="checkbox"]:checked:focus-visible {
  border-color: var(--reos-blue) !important;
  box-shadow: none !important;
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
/* v0.8.84: removed font-size + text-transform: uppercase +
   letter-spacing + font-weight overrides \u2014 those made native
   text look custom-stylized (Tabulator column headers especially).
   Native GHL typography wins; we only keep the dark-theme bg /
   color / border colors. */
table th,
.table th,
[role="columnheader"] {
  background: var(--reos-graphite) !important;
  color: var(--reos-cool-gray) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
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

/* 12a. NAIVE UI COMPONENTS \u2014 GHL's newer modals (Book Appointment, etc.)
   render with Naive UI (Vue lib, n-* class prefix). Naive UI ships its
   own scoped theme that ignores our CSS unless we explicitly target
   the n-* classes. Override the most common components here.

   Strategy: force slate/graphite backgrounds and bone text on every
   n-* surface. Naive UI uses CSS custom properties internally; we
   override the rendered output rather than the variables because
   variable overrides only apply to specific component instances. */

/* n-button (the pills Tim saw whited out) \u2014 kill default light fill,
   use slate body with bone text. Default+secondary+tertiary all
   look the same except for accent borders.

   Naive UI buttons render most of their styling through CSS custom
   properties (--n-color, --n-text-color, --n-border, etc.) set INLINE
   by GHL with light/blue defaults. Internal Naive UI CSS uses those
   vars for hover/pressed/focus states. Without overriding the vars
   too, the static state was themed but hover/pressed reverted to GHL
   blue, and the decorative .n-button__border / .n-button__state-border
   children (which draw via var(--n-border)) painted a 1px light-gray
   line on top \u2014 reading as a "white outline" on the dark surface.

   Override every state's --n-* variables AND the direct color
   properties so all states stay on the REOS palette. */
html body .n-button {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-color-disabled: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-text-color-disabled: var(--reos-cool-gray) !important;
  --n-border: 1px solid var(--reos-cool-gray) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* High-specificity static-color rule for default n-button. GHL's Vue
   scoped CSS (.n-button[data-v-xxxxx]) sets specificity (0,0,2,0) for
   color rules, beating html body .n-button at (0,0,1,2). Bumping with
   five :not() class exclusions takes us to (0,0,7,2) \u2014 comfortably above
   any Vue scoped variant. Excludes the semantic-type buttons that have
   their own color rules. */
html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type),
html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type) .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Decorative border children \u2014 Naive UI positions these absolutely on
   top of the button to render the visual border + state transitions.
   They draw via var(--n-border). The base .n-button vars above already
   redirect those vars, but pin the rendered border explicitly too in
   case Naive UI's internal CSS sets the border directly. */
html body .n-button .n-button__border,
html body .n-button .n-button__state-border {
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .n-button:hover .n-button__border,
html body .n-button:hover .n-button__state-border,
html body .n-button:focus .n-button__border,
html body .n-button:focus .n-button__state-border {
  border: 1px solid var(--reos-emerald) !important;
}
/* Wave ripple \u2014 emerald glow instead of GHL blue */
html body .n-button .n-base-wave {
  background: var(--reos-emerald-glow) !important;
}
/* Hover text + icon color \u2014 currentColor on the SVG icons inherits
   from the button color, so this colors both text and stroke.
   Specificity-bumped variant so it beats Vue scoped CSS for the
   default-type buttons (same exclusion list as the static rule). */
html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type):hover,
html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type):hover .n-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-button--primary-type {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-color-pressed: var(--reos-emerald) !important;
  --n-color-focus: var(--reos-emerald-bright) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald-bright) !important;
  --n-text-color: var(--reos-obsidian) !important;
  --n-text-color-hover: var(--reos-obsidian) !important;
  --n-text-color-pressed: var(--reos-obsidian) !important;
  --n-text-color-focus: var(--reos-obsidian) !important;
  background-color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-button--primary-type .n-button__content {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
}
html body .n-button:hover {
  background-color: var(--reos-graphite) !important;
}
html body .n-button--primary-type:hover {
  background-color: var(--reos-emerald-bright) !important;
}

/* Naive UI semantic button types \u2014 error/warning/info/success.
   Brand them with our palette so destructive actions look like the
   rest of the app instead of off-the-shelf Naive UI tomato red.

   IMPORTANT: Naive UI buttons render via CSS custom properties
   (--n-color, --n-text-color, --n-border, etc.) set inline on the
   element. Setting background-color alone doesn't always win because
   the visible fill comes from --n-color. We override BOTH the CSS
   variables AND the rendered properties. */
html body .n-button--error-type {
  --n-color: var(--reos-crimson) !important;
  --n-color-hover: #B83642 !important;
  --n-color-pressed: var(--reos-crimson) !important;
  --n-color-focus: #B83642 !important;
  --n-color-disabled: var(--reos-crimson) !important;
  --n-ripple-color: var(--reos-crimson) !important;
  --n-border: 1px solid var(--reos-crimson) !important;
  --n-border-hover: 1px solid #B83642 !important;
  --n-border-pressed: 1px solid var(--reos-crimson) !important;
  --n-border-focus: 1px solid #B83642 !important;
  --n-border-disabled: 1px solid var(--reos-crimson) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-bone) !important;
  background-color: var(--reos-crimson) !important;
  border-color: var(--reos-crimson) !important;
}
html body .n-button--error-type .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  font-weight: 600 !important;
}
html body .n-button--error-type:hover {
  background-color: #B83642 !important; /* darker crimson */
  border-color: #B83642 !important;
}

html body .n-button--warning-type {
  --n-color: var(--reos-amber) !important;
  --n-color-hover: #C68B30 !important;
  --n-color-pressed: var(--reos-amber) !important;
  --n-color-focus: #C68B30 !important;
  --n-border: 1px solid var(--reos-amber) !important;
  --n-text-color: var(--reos-obsidian) !important;
  --n-text-color-hover: var(--reos-obsidian) !important;
  --n-text-color-pressed: var(--reos-obsidian) !important;
  --n-text-color-focus: var(--reos-obsidian) !important;
  background-color: var(--reos-amber) !important;
  border-color: var(--reos-amber) !important;
}
html body .n-button--warning-type .n-button__content {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
}

html body .n-button--success-type {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-text-color: var(--reos-obsidian) !important;
  --n-text-color-hover: var(--reos-obsidian) !important;
  background-color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-button--success-type .n-button__content {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
}

html body .n-button--info-type {
  --n-color: var(--reos-blue) !important;
  --n-color-hover: #3A78E0 !important;
  --n-color-pressed: var(--reos-blue) !important;
  --n-color-focus: #3A78E0 !important;
  --n-border: 1px solid var(--reos-blue) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  background-color: var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}
html body .n-button--info-type .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  font-weight: 600 !important;
}
html body .n-button--info-type:hover {
  background-color: #3A78E0 !important; /* darker brand blue */
  border-color: #3A78E0 !important;
}

/* Naive UI dialog icon slot \u2014 the circle in the top-left of a
   confirmation dialog (delete/warning prompts). Naive UI defaults
   to a colored circular background (white-on-light for error type)
   that breaks against our dark theme. Make the circle transparent
   so only the SVG shows, then tint the SVG by dialog type.
   Cover every level of the icon wrapping nest: the slot, the icon
   element, and any nested container. */
html body .n-dialog__icon,
html body .n-dialog__icon *,
html body [class*="dialog-icon"],
html body [class*="dialog__icon"],
html body [class*="dialog__icon"] *,
html body .n-dialog .n-base-icon,
html body .n-dialog .n-icon,
html body .n-dialog [class*="icon-wrap"],
html body .n-dialog [class*="icon-circle"],
html body [class*="dialog"] [class*="icon-wrap"],
html body [class*="dialog"] [class*="icon-circle"],
html body [class*="dialog"] [class*="icon-bg"] {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
/* Error dialog (delete confirmation): SVG paint in crimson.
   Naive UI puts --error-type on the BUTTON, not always the dialog
   wrapper. Use :has() to detect 'dialog contains an error button'. */
html body .n-dialog--icon-top.n-dialog--error .n-dialog__icon svg,
html body .n-dialog.n-dialog--error .n-dialog__icon svg,
html body .n-dialog .n-dialog__icon.n-dialog__icon--error svg,
html body [class*="dialog"][class*="error"] svg path[stroke],
html body [class*="dialog"][class*="error"] svg path[fill],
html body .n-dialog:has(.n-button--error-type) .n-dialog__icon,
html body .n-dialog:has(.n-button--error-type) .n-dialog__icon *,
html body .n-dialog:has(.n-button--error-type) .n-dialog__icon svg,
html body .n-dialog:has(.n-button--error-type) .n-dialog__icon svg path,
html body [class*="modal"]:has(.n-button--error-type) [class*="icon"] svg,
html body [class*="modal"]:has(.n-button--error-type) [class*="icon"] svg path,
html body [role="dialog"]:has(.n-button--error-type) [class*="icon"] svg,
html body [role="dialog"]:has(.n-button--error-type) [class*="icon"] svg path {
  stroke: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}
/* Warning dialog: amber */
html body .n-dialog.n-dialog--warning .n-dialog__icon svg,
html body [class*="dialog"][class*="warning"] svg path[stroke] {
  stroke: var(--reos-amber) !important;
  color: var(--reos-amber) !important;
}
/* Info dialog: brand blue */
html body .n-dialog.n-dialog--info .n-dialog__icon svg,
html body [class*="dialog"][class*="info"] svg path[stroke] {
  stroke: var(--reos-blue) !important;
  color: var(--reos-blue) !important;
}

/* Catch-all for any bright red used elsewhere \u2014 sweep to crimson.
   Targets common Tailwind red shades + Naive UI tomato defaults.
   Brand consistency: all "destructive" / "alert" red should be our
   crimson, not a third-party red. */
/* Same hover-prefix gotcha as bg-red below \u2014 never use
   [class*="text-red"] because it matches "group-hover:text-red-600"
   etc, forcing text crimson even when it should be the default gray.
   The trash icon SVG in the conversation header has
   "text-gray-600 group-hover:text-red-600" \u2014 substring catchall would
   paint it crimson permanently. */
html body .text-red-50,
html body .text-red-100,
html body .text-red-200,
html body .text-red-300,
html body .text-red-400,
html body .text-red-500,
html body .text-red-600,
html body .text-red-700,
html body .text-red-800,
html body .text-red-900 {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
}
/* IMPORTANT: NEVER use [class*="bg-red"] as a substring catchall here.
   That selector matches Tailwind state-prefixed classes like
   "hover:bg-red-50", "focus:bg-red-100", "group-hover:bg-red-50" --
   because the substring "bg-red" appears in the class attribute even
   though the bg should only apply in those states. The result: any
   element that has a hover-only red background gets painted crimson
   permanently. Diagnosed live: #delete-conversation in the message
   header had only "hover:bg-red-50" and was showing as a giant red
   box instead of a gray trash icon.

   Use explicit shade enumeration. */
html body .bg-red-50,
html body .bg-red-100,
html body .bg-red-200,
html body .bg-red-300,
html body .bg-red-400,
html body .bg-red-500,
html body .bg-red-600,
html body .bg-red-700,
html body .bg-red-800,
html body .bg-red-900 {
  background-color: var(--reos-crimson) !important;
}
/* Same gotcha. Use explicit shades only. */
html body .border-red-50,
html body .border-red-100,
html body .border-red-200,
html body .border-red-300,
html body .border-red-400,
html body .border-red-500,
html body .border-red-600,
html body .border-red-700,
html body .border-red-800,
html body .border-red-900 {
  border-color: var(--reos-crimson) !important;
}

/* Same brand sweep for blue \u2192 our #4B8BF5. Targets common Tailwind
   blue shades + Naive UI info-type defaults. Catches link/info
   accents throughout the GHL UI. */
html body .text-blue-500,
html body .text-blue-600,
html body .text-blue-700,
html body [class*="text-blue"]:not([class*="text-blue-50"]):not([class*="text-blue-100"]) {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body .bg-blue-500,
html body .bg-blue-600,
html body .bg-blue-700,
html body [class*="bg-blue"]:not([class*="bg-blue-50"]):not([class*="bg-blue-100"]) {
  background-color: var(--reos-blue) !important;
}
html body .border-blue-500,
html body .border-blue-600,
html body [class*="border-blue"]:not([class*="border-blue-50"]):not([class*="border-blue-100"]) {
  border-color: var(--reos-blue) !important;
}

/* n-tag (status chips like "Confirmed") */
html body .n-tag {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .n-tag__content,
html body .n-tag__icon {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* "success" tag (Confirmed green) */
html body .n-tag--success-type {
  background-color: rgba(15, 181, 126, 0.15) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-tag--success-type .n-tag__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* n-input + n-base-selection (text fields + dropdowns) */
html body .n-input,
html body .n-input-wrapper,
html body .n-base-selection,
html body .n-base-selection-input {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-cool-gray) !important;
}
html body .n-input__input-el,
html body .n-input__textarea-el,
html body .n-input__placeholder,
html body .n-base-selection-input__content,
html body .n-base-selection-label,
html body .n-base-selection-placeholder {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
}
html body .n-input__placeholder,
html body .n-base-selection-placeholder {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .n-input--focus,
html body .n-base-selection--focus {
  border-color: var(--reos-emerald) !important;
}

/* 18a-n-data-table (v0.8.85). The Naive UI .n-data-table is used
   for the Calendars \u2192 Appointments list (and other paginated
   list views). Two things to address:
   1. Empty-state text 'No upcoming appointments' + the subtitle
      uses GHL's text-gray-900 / text-gray-600 Tailwind classes.
      Our section 15 catches those, but on first-paint before our
      customizer cascade settles, the text can render as the
      original dark-on-dark gray. Pin the colors directly on the
      .n-data-table-empty container so the text stays readable
      from first paint.
   2. The header row's bottom border + the table base bg should
      use theme tokens to match the rest of the app. */
html body .n-data-table:not(#__reos_never_id),
html body .n-data-table-wrapper:not(#__reos_never_id),
html body .n-data-table-base-table:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* Outer panel wrapper around .n-data-table \u2014 GHL ships
   .ghl-table-container with a 1px gray-200 border + a light
   drop-shadow. On the dark theme that reads as a bright stripe
   around the table panel. Steel border + no shadow. */
html body .ghl-table-container:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

/* Table footer (Showing X to Y of Z + pagination). Ships with
   white bg + dark text by default \u2014 flip to graphite + bone. */
html body .ghl-table-footer:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-top: 1px solid var(--reos-steel) !important;
}
html body .ghl-table-footer:not(#__reos_never_id) p,
html body .ghl-table-footer-left:not(#__reos_never_id),
html body .ghl-table-footer-left:not(#__reos_never_id) p {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Naive UI pagination items. The active page number ("1") ships
   with a blue border + blue text (GHL's --n-item-text-color-active
   + --n-item-border-active). Remap to our emerald canon. */
html body .n-pagination:not(#__reos_never_id) {
  --n-item-text-color: var(--reos-bone) !important;
  --n-item-text-color-hover: var(--reos-emerald) !important;
  --n-item-text-color-active: var(--reos-emerald) !important;
  --n-item-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-item-text-color-disabled: var(--reos-cool-gray) !important;
  --n-item-color: transparent !important;
  --n-item-color-hover: var(--reos-slate) !important;
  --n-item-color-active: transparent !important;
  --n-item-color-active-hover: var(--reos-slate) !important;
  --n-item-color-pressed: var(--reos-slate) !important;
  --n-item-color-disabled: transparent !important;
  --n-item-border: 1px solid transparent !important;
  --n-item-border-hover: 1px solid var(--reos-emerald) !important;
  --n-item-border-active: 1px solid var(--reos-emerald) !important;
  --n-item-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-item-border-disabled: 1px solid var(--reos-steel) !important;
  --n-jumper-text-color: var(--reos-bone) !important;
  --n-jumper-text-color-disabled: var(--reos-cool-gray) !important;
  --n-button-icon-color: var(--reos-bone) !important;
  --n-button-icon-color-hover: var(--reos-emerald) !important;
  --n-button-icon-color-pressed: var(--reos-emerald-bright) !important;
}
html body .n-pagination-item:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
}
html body .n-pagination-item.n-pagination-item--active:not(#__reos_never_id),
html body .n-pagination-item--active.n-pagination-item--clickable:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  border: 1px solid var(--reos-emerald) !important;
  background-color: transparent !important;
}
html body .n-data-table-th:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}
html body .n-data-table-td:not(#__reos_never_id) {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}
/* Row hover. GHL ships
     .n-data-table .n-data-table-tr:not(...)hover .n-data-table-td {
       background-color: var(--gray-200) !important;
     }
   That repaints the entire hovered row near-white. Specificity
   (0,1,4,0) + !important. Beat with class-doubled + ID-level
   :not(#__reos_never_id) for (0,1,7,2). v0.8.88 set slate hover
   bg; v0.8.90 sets it transparent so the row keeps its natural
   graphite tone on hover \u2014 Tim prefers no highlight state on
   data-table rows. */
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover,
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover > .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-td.n-data-table-td.n-data-table-td--hover {
  background-color: transparent !important;
}
/* Also remap Naive's --n-merged-td-color-hover var so any other
   internal rule using it resolves to transparent too. */
html body .n-data-table:not(#__reos_never_id) {
  --n-merged-td-color-hover: transparent !important;
  --n-td-color-hover: transparent !important;
  --n-merged-th-color-hover: var(--reos-slate) !important;
}

/* 18a-icon-only-unboxed (v0.8.95). Tim wants Naive icon-only
   action buttons (pencil/edit, copy/duplicate, trash, +, etc.)
   shown bare \u2014 no slate bg, no cool-gray border, no border-
   radius \u2014 just the glyph. Excludes the quaternary kebab
   (.n-button.quaternary.icon-only) which keeps its boxed
   contact-options-button-style appearance per earlier requests.

   Trash icons hover crimson \u2014 detected via SVG path 'd' substring
   (the trash glyph has a recognizable lid path 'M9 3h6'). */
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id),
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  border-color: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-color-disabled: transparent !important;
  --n-border: 1px solid transparent !important;
  --n-border-hover: 1px solid transparent !important;
  --n-border-pressed: 1px solid transparent !important;
  --n-border-focus: 1px solid transparent !important;
  --n-border-disabled: 1px solid transparent !important;
  /* Force full opacity even on disabled state \u2014 Naive ships
     --n-opacity-disabled: 0.5 which dimmed disabled trash icons
     to half-strength, breaking visual parity with the other
     un-boxed icons (Tim flagged the trash looking muted). */
  --n-opacity-disabled: 1 !important;
  opacity: 1 !important;
}
/* Belt-and-suspenders: explicitly force opacity 1 on disabled
   variant even if the rule above doesn't match for some reason. */
html body .n-button.n-button--default-type.icon-only.n-button--disabled:not(.quaternary):not(#__reos_never_id),
html body button.n-button.icon-only.hl-text-btn.n-button--disabled:not(.quaternary):not(#__reos_never_id) {
  opacity: 1 !important;
}
/* Hide the .n-button__border / .n-button__state-border overlays
   that Naive draws on top to render the visible border. */
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) .n-button__border,
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) .n-button__state-border,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) .n-button__border,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) .n-button__state-border {
  border: none !important;
  border-color: transparent !important;
  display: none !important;
}
/* SVG icon \u2014 ash at rest, emerald on hover (matches the bare-
   icon convention from sidebar / contact buttons). */
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) svg,
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) svg path,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) svg,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id):hover svg,
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id):hover svg path,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id):hover svg,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Trash icons \u2192 crimson on hover (override the generic emerald
   above). Detect via SVG path substring 'M9 3h6' (trashcan lid)
   or 'M16 6v' or class containing 'trash'. */
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) svg,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) svg path,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) svg,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) svg path,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="trash"]) svg,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has(svg path[d*="trash"]) svg path,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has([class*="trash"]) svg,
html body .n-button.icon-only:not(.quaternary):not(#__reos_never_id):hover:has([class*="trash"]) svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* 18a-form-item-unboxed (v0.9.3). The .n-form-item wrappers that
   contain BOTH a label and an input (the "top-labelled" variant)
   were getting painted slate + steel inline by the field-label
   coercer (it treats them as field wrappers). That renders as a
   slate surround around the entire label+input combo (Tim flagged
   the Timezone label having a slate box around it).

   The inner controls (.n-base-selection / .n-input) keep their
   own slate fill \u2014 that's the actual input bg. Only the OUTER
   .n-form-item wrapper needs to drop its slate; nothing should
   draw a box around the label. */
html body .n-form-item.hl-form-item:not(#__reos_never_id),
html body .n-form-item.n-form-item--top-labelled:not(#__reos_never_id),
html body .n-form-item.n-form-item--medium-size.hl-form-item:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
}

/* 18a-hr-button-family (v0.9.13). GHL ships TWO button systems:
   - .n-button (Naive UI) \u2014 themed via section 7 + v0.8.64
   - .hr-button (Highrise / hr-design-system) \u2014 equivalent system
     with --n-* CSS vars but a different class prefix. Phone
     System filter pills, refresh icon, and Add Number all use
     .hr-button. Theme to the canonical emerald canon. */
html body .hr-button.hr-button--default-type:not(#__reos_never_id),
html body button.hr-button.hr-button--default-type:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-cool-gray) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .hr-button.hr-button--default-type:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
/* Force span content to inherit (override inline ash on
   .hr-button__content) */
html body .hr-button.hr-button--default-type:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--default-type:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hr-button.hr-button--default-type:not(#__reos_never_id):hover .hr-button__content,
html body .hr-button.hr-button--default-type:not(#__reos_never_id):hover .hr-button__content * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Active filter pill (.ui-active-btn) \u2014 emerald text + emerald
   border to mark selected state */
html body .hr-button.ui-active-btn:not(#__reos_never_id),
html body button.hr-button.ui-active-btn:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
}
html body .hr-button.ui-active-btn:not(#__reos_never_id) .hr-button__content,
html body .hr-button.ui-active-btn:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Decorative border overlays (Naive UI pattern, mirrored in HR) */
html body .hr-button .hr-button__border:not(#__reos_never_id),
html body .hr-button .hr-button__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .hr-button:hover .hr-button__border:not(#__reos_never_id),
html body .hr-button:hover .hr-button__state-border:not(#__reos_never_id),
html body .hr-button.ui-active-btn .hr-button__border:not(#__reos_never_id),
html body .hr-button.ui-active-btn .hr-button__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-emerald) !important;
}
/* HR-button primary type (Add Number) \u2014 already mostly themed
   by the var override below; pin bg + content color for safety. */
html body .hr-button.hr-button--primary-type:not(#__reos_never_id) {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-color-pressed: var(--reos-emerald) !important;
  --n-color-focus: var(--reos-emerald-bright) !important;
  --n-text-color: var(--reos-obsidian) !important;
  --n-text-color-hover: var(--reos-obsidian) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  background-color: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}

/* HR-input \u2014 same treatment as .n-input (see v0.8.71, v0.8.81) */
html body .hr-input:not(#__reos_never_id) .hr-input__border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* Placeholder text \u2014 span inside .hr-input__placeholder has
   -webkit-text-fill-color: brand-blue from some other rule
   bleeding through (color is cool-gray, but text-fill-color wins
   on Blink/WebKit so the placeholder renders blue). Pin both. */
html body .hr-input__placeholder:not(#__reos_never_id),
html body .hr-input__placeholder:not(#__reos_never_id) span,
html body .n-input__placeholder:not(#__reos_never_id),
html body .n-input__placeholder:not(#__reos_never_id) span {
  color: var(--reos-cool-gray) !important;
  -webkit-text-fill-color: var(--reos-cool-gray) !important;
}
html body input.hr-input__input-el::placeholder,
html body input.n-input__input-el::placeholder {
  color: var(--reos-cool-gray) !important;
  -webkit-text-fill-color: var(--reos-cool-gray) !important;
}
html body .hr-input.hr-input--focus:not(#__reos_never_id) .hr-input__state-border,
html body .hr-input:not(#__reos_never_id):focus-within .hr-input__state-border {
  box-shadow: none !important;
  border: 1px solid var(--reos-emerald) !important;
}
html body input.hr-input__input-el:focus,
html body input.hr-input__input-el:focus-visible {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
  caret-color: var(--reos-bone) !important;
}

/* Page heading "Phone System" h2 \u2014 has inline ash, but it IS a
   page title. Force bone via -webkit-text-fill-color override at
   class-doubled specificity beats inline !important since we use
   a !important selector path. */
html body h2:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
}

/* 18a-ui-table-container (v0.9.18). The Phone System filter-bar
   + table wrapper (.ui-table-container__wrapper) ships with
   white bg + gray-200 border. Flip to graphite + steel. */
html body .ui-table-container__wrapper:not(#__reos_never_id),
html body [class*="ui-table-container__wrapper"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

/* 18a-affiliate-header-bg (v0.9.16 \u2192 v0.9.17). .hl_affiliate--header
   wrapper (Phone System / other settings sub-app top bars)
   ships with white bg by default. v0.9.16 set it obsidian;
   v0.9.17 matches the rest of the page chrome at graphite. */
html body .hl_affiliate--header:not(#__reos_never_id),
html body [class*="hl_affiliate--header"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* 18a-affiliate-nav (v0.9.12). Phone System settings page (and
   other settings sub-nav pages) use .hl_affiliate--nav <ul><li>
   tabs where the active <li> has class '--active'. GHL ships
   the active <a> with:
     color: rgb(144, 152, 163)  (ash \u2014 looks subdued)
     border-bottom: 3px solid rgb(24, 139, 246)  (blue underline)

   Flip the active state to emerald text + emerald underline to
   match the canonical active-tab convention. */
html body .hl_affiliate--nav li.--active > a:not(#__reos_never_id),
html body .hl_affiliate--nav li.--active a:not(#__reos_never_id),
html body ul.hl_affiliate--nav li.--active > a:not(#__reos_never_id),
html body [class*="hl_affiliate--nav"] li.--active > a:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  border-bottom-color: var(--reos-emerald) !important;
}
html body .hl_affiliate--nav li:not(.--active) > a:not(#__reos_never_id):hover,
html body [class*="hl_affiliate--nav"] li:not(.--active) > a:not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

/* 18a-preferences-page (v0.9.11). Calendars \u2192 Preferences page.
   Most surfaces already themed via existing rules. New items:
   1) .hl-display-sm-medium page title ("Preferences") \u2014 bone text
   2) Section dividers using border-b-2 / border-t-2 Tailwind
      classes WITHOUT an explicit border-gray-200 class \u2014
      Tailwind preflight defaults to rgb(229,231,235) gray-200,
      which reads as a bright stripe against the dark theme.
      Remap to steel via direct class targeting. */
html body .title.hl-display-sm-medium:not(#__reos_never_id),
html body .hl-display-sm-medium:not(#__reos_never_id),
html body .hl-display-md-medium:not(#__reos_never_id),
html body .hl-display-lg-medium:not(#__reos_never_id),
html body [class*="hl-display-"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .border-b-2:not(#__reos_never_id),
html body .border-t-2:not(#__reos_never_id),
html body .border-l-2:not(#__reos_never_id),
html body .border-r-2:not(#__reos_never_id),
html body .border-b:not(.border-b-0):not(#__reos_never_id),
html body .border-t:not(.border-t-0):not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-organic-booking-page (v0.9.8). Google organic booking
   tab on the Connections page. Two un-themed surfaces:

   1) .bg-primary-50.text-primary-700 "Before you start" callout
      \u2014 Tailwind primary-50 is a light lavender bg. Repaint as
      a subtle slate panel with steel border (treats it as an
      info card, not a brand-colored callout).
   2) .n-switch \u2014 Naive UI toggle with inline blue vars:
        --n-rail-color-active: #155EEF
        --n-loading-color: #155EEF
        --n-box-shadow-focus: 0 0 0 2px rgba(21, 94, 239, 0.2)
      Flip to emerald + kill the blue focus halo. */
html body .bg-primary-50:not(#__reos_never_id),
html body [class*="bg-primary-50"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
}
/* Force all descendant text in the callout to ash \u2014 Tim wants
   no emerald inside this info panel. Children like text-gray-600
   were being overridden by the .text-primary-700 parent's
   inherited emerald via section 15a. */
html body .bg-primary-50:not(#__reos_never_id) span:not(a):not(a *),
html body .bg-primary-50:not(#__reos_never_id) div:not(a):not(a *),
html body [class*="bg-primary-50"]:not(#__reos_never_id) span:not(a):not(a *),
html body [class*="bg-primary-50"]:not(#__reos_never_id) div:not(a):not(a *) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Links (Check here, Learn more) \u2192 brand blue. */
html body .bg-primary-50:not(#__reos_never_id) a,
html body .bg-primary-50:not(#__reos_never_id) a *,
html body [class*="bg-primary-50"]:not(#__reos_never_id) a,
html body [class*="bg-primary-50"]:not(#__reos_never_id) a * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}

html body .n-switch:not(#__reos_never_id) {
  --n-rail-color: var(--reos-steel) !important;
  --n-rail-color-active: var(--reos-emerald) !important;
  --n-loading-color: var(--reos-emerald) !important;
  --n-button-color: var(--reos-bone) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
}
/* Pin the rail bg directly \u2014 our coercer painted it slate
   inline !important; that's the inactive rail. Set the active
   rail emerald explicitly so it doesn't fall back to blue. */
html body .n-switch.n-switch--round:not([aria-checked="true"]):not(#__reos_never_id) .n-switch__rail {
  background-color: var(--reos-steel) !important;
}
html body .n-switch.n-switch--round[aria-checked="true"]:not(#__reos_never_id) .n-switch__rail,
html body .n-switch.n-switch--active:not(#__reos_never_id) .n-switch__rail {
  background-color: var(--reos-emerald) !important;
}
/* Kill focus halo */
html body .n-switch:not(#__reos_never_id):focus,
html body .n-switch:not(#__reos_never_id):focus-visible {
  box-shadow: none !important;
  outline: none !important;
}

/* 18a-settings-body-bg (v0.9.7). The .hl_settings--body wrapper
   that contains the calendar settings content ships with an
   inline background-color: rgb(249, 250, 251) (#F9FAFB / Tailwind
   gray-50). Override to obsidian so the page chrome behind our
   themed cards matches the rest of the app. */
html body .hl_settings--body:not(#__reos_never_id),
html body [class*="hl_settings--body"]:not(#__reos_never_id) {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
}

/* 18a-calendar-app-connections (v0.9.6). The Calendars \u2192
   Connections page lives in a cross-origin iframe served from
   calendar-app.leadconnectorhq.com. Our customizer is injected
   into the iframe by GHL's Agency Custom JS feature, but several
   surfaces have no rules to catch them. Diagnosed from the user-
   provided outer HTML; targeted rules below cover:

   1) .hl-card \u2014 main page card wrapper (bg-white default)
   2) .n-tabs \u2014 Naive UI tabs (blue --n-bar-color / --n-tab-text-
      color-active inline by GHL); flip to emerald canon
   3) .n-tabs-bar \u2014 the active-tab underline element
   4) .n-tabs-tab + --active variant \u2014 tab text colors
   5) .calendars-integrations-full-width-main-container \u2014 page
      container bg

   Headings using .text-gray-900 are already mapped to bone via
   section 15, but ID-level pinned here for the iframe context
   where Vue scoped CSS may otherwise win. */
html body .hl-card:not(#__reos_never_id),
html body [class*="hl-card"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
html body .hl-card-content:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
html body .calendars-integrations-full-width-main-container:not(#__reos_never_id),
html body [class*="calendars-integrations-full-width-main-container"]:not(#__reos_never_id) {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
}

/* Naive UI tabs \u2014 flip the inline blue vars to emerald + bone.
   Used by .n-tabs.hl-tabs across calendar-app + other sub-apps. */
html body .n-tabs:not(#__reos_never_id),
html body .n-tabs.hl-tabs:not(#__reos_never_id) {
  --n-bar-color: var(--reos-emerald) !important;
  --n-tab-text-color: var(--reos-ash) !important;
  --n-tab-text-color-active: var(--reos-emerald) !important;
  --n-tab-text-color-hover: var(--reos-emerald-bright) !important;
  --n-tab-text-color-disabled: var(--reos-cool-gray) !important;
  --n-tab-border-color: var(--reos-steel) !important;
  --n-tab-color: transparent !important;
  --n-color-segment: var(--reos-slate) !important;
  --n-tab-color-segment: var(--reos-graphite) !important;
  --n-pane-text-color: var(--reos-bone) !important;
}
/* The active-tab underline element rendered by Naive UI. */
html body .n-tabs .n-tabs-bar:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}
/* Tab text \u2014 explicit colors so we beat any Vue scoped rule. */
html body .n-tabs .n-tabs-tab:not(.n-tabs-tab--active):not(#__reos_never_id),
html body .n-tabs .n-tabs-tab:not(.n-tabs-tab--active):not(#__reos_never_id) .n-tabs-tab__label {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .n-tabs .n-tabs-tab.n-tabs-tab--active:not(#__reos_never_id),
html body .n-tabs .n-tabs-tab.n-tabs-tab--active:not(#__reos_never_id) .n-tabs-tab__label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-tabs .n-tabs-tab:not(#__reos_never_id):hover .n-tabs-tab__label,
html body .n-tabs .n-tabs-tab:not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

/* ID-level pin on .text-gray-900 / .text-gray-500 inside the
   calendar-app page wrapper so iframe Vue scoped CSS doesn't
   bleed through. The class-level rule in section 15 catches
   most cases, but ID-level repeat covers stragglers. */
html body .calendars-integrations-full-width-main-container .text-gray-900:not(#__reos_never_id),
html body .calendars-integrations-full-width-main-container [class*="text-gray-9"]:not(#__reos_never_id),
html body .hl-card .text-gray-900:not(#__reos_never_id),
html body .hl-card [class*="text-gray-9"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .calendars-integrations-full-width-main-container .text-gray-500:not(#__reos_never_id),
html body .calendars-integrations-full-width-main-container [class*="text-gray-5"]:not(#__reos_never_id),
html body .hl-card .text-gray-500:not(#__reos_never_id),
html body .hl-card [class*="text-gray-5"]:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* 18a-selected-schedule-border (v0.9.5). The active-schedule
   underline bar (.schedule-ui-selected-schedule-border) ships
   with border-bottom: 2px solid rgb(0, 78, 235) (#004EEB / GHL
   dark blue). Flip to emerald to match the rest of the
   active-tab convention. */
html body .schedule-ui-selected-schedule-border:not(#__reos_never_id),
html body [class*="schedule-ui-selected-schedule-border"]:not(#__reos_never_id) {
  border-bottom-color: var(--reos-emerald) !important;
}

/* 18a-calendar-dropdown-border (v0.9.4). The 'Active on:
   1 calendar' dropdown trigger (.schedule-ui-form-calendar-dropdown
   / #dropdown-btn) ships with a 1px solid rgb(208, 213, 221)
   (#D0D5DD / Tailwind gray-300) border + a subtle drop shadow.
   On the dark theme that reads as a bright white outline around
   the dropdown. Remap to steel + kill the shadow. */
html body #dropdown-btn:not(#__reos_never_id),
html body .schedule-ui-form-calendar-dropdown:not(#__reos_never_id),
html body [class*="schedule-ui-form-calendar-dropdown"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

/* 18a-availability-schedule-borders (v0.9.2). The Availability
   page Work Hours panel has 4 gray-200 (rgb(234, 236, 240) = #EAECF0)
   borders that need to flip to steel:
     .schedule-ui-main-container         \u2014 outer panel frame (all sides)
     .schedule-ui-header-border          \u2014 bottom border below tabs
     .schedule-ui-form-schedule-container \u2014 top border above the panels
     .schedule-ui-form-weekly-schedule-container \u2014 right border (divider
       between weekly hours and date specific hours) */
html body .schedule-ui-main-container:not(#__reos_never_id),
html body .schedule-ui-header-border:not(#__reos_never_id),
html body .schedule-ui-form-schedule-container:not(#__reos_never_id),
html body .schedule-ui-form-weekly-schedule-container:not(#__reos_never_id),
html body [class*="schedule-ui-main-container"]:not(#__reos_never_id),
html body [class*="schedule-ui-header-border"]:not(#__reos_never_id),
html body [class*="schedule-ui-form-schedule-container"]:not(#__reos_never_id),
html body [class*="schedule-ui-form-weekly-schedule-container"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-availability-weekly-schedule (v0.8.99 \u2192 v0.9.1). The
   Sun/Mon/Tue/... day rows in the Availability schedule panel
   come in mixed states:
   - Resting rows: transparent bg + 1px gray-200 bottom border
   - Hovered row: slate bg + steel borders top + bottom
   Tim wants ALL rows graphite regardless of state, with steel
   divider lines (no gray-200), so only the time input fields
   (.n-input \u2014 handled separately) carry slate fill. v0.9.1
   swapped obsidian \u2192 graphite (obsidian was too dark). */
html body .schedule-ui-form-weekly-schedule-checkbox:not(#__reos_never_id),
html body .schedule-ui-form-weekly-schedule-checkbox:not(#__reos_never_id):hover,
html body [class*="schedule-ui-form-weekly-schedule-checkbox"]:not(#__reos_never_id),
html body [class*="schedule-ui-form-weekly-schedule-checkbox"]:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-top: 1px solid var(--reos-steel) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
}

/* 18a-availability-page (v0.8.94). Calendars \u2192 Availability page
   ships with two un-themed surfaces:

   1) .schedule-banner (the 'NEW \xB7 Simplify your availability...'
      callout). Uses Tailwind utility classes:
        bg-gradient-to-r from-blue-50 to-indigo-50
        border border-blue-200
      Gradient + light border read as a lavender bar against the
      dark theme.

   2) The Schedules header bar uses a Tailwind arbitrary class:
        bg-[rgb(252,253,253)]
      That's near-white. Wraps the Schedules heading + 'Save
      changes' button. The text inside computes to bone (text-
      gray-900 \u2192 bone via section 15), but against the near-
      white wrapper it reads as faded.

   Targeted fixes: paint the banner graphite + steel border with
   no gradient; paint the bg-[rgb(252,253,253)] wrapper graphite
   via attribute-substring selector (catches Tailwind's escaped
   class name). */
html body .schedule-banner:not(#__reos_never_id),
html body [class*="schedule-banner"]:not(#__reos_never_id) {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  background-image: none !important;
  border-color: var(--reos-steel) !important;
}
/* The "NEW" pill inside the banner. Tailwind ships it dark on
   light by default \u2014 flip to brand-blue pill with bone text. */
html body .schedule-banner [class*="rounded"]:not(.schedule-banner-button):not(#__reos_never_id),
html body [class*="schedule-banner"] [class*="rounded"]:not(.schedule-banner-button):not(#__reos_never_id) {
  background-color: var(--reos-blue) !important;
  color: var(--reos-bone) !important;
}

/* "Learn more" CTA inside the banner. Originally bg-white +
   text-blue-700, but our remaps painted both bg and text to
   --reos-blue \u2192 blue-on-blue = unreadable. Re-theme as a clear
   CTA: graphite bg + brand-blue text + steel border. */
html body .schedule-banner-button:not(#__reos_never_id),
html body [class*="schedule-banner-button"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-blue) !important;
}
html body .schedule-banner-button:not(#__reos_never_id) span,
html body [class*="schedule-banner-button"]:not(#__reos_never_id) span {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body .schedule-banner-button:not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
  border-color: var(--reos-blue) !important;
}

/* Light-bg Tailwind arbitrary classes used as page-header
   strips. The Schedules section uses bg-[rgb(252,253,253)] \u2014
   match the class substring so we catch any element using this
   specific arbitrary bg. Repaint graphite. */
html body [class*="bg-[rgb(252,253,253)]"]:not(#__reos_never_id),
html body [class*="bg-[rgb(252, 253, 253)]"]:not(#__reos_never_id),
html body [class*="bg-[rgb(252"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* 18a-data-table-action-col (v0.8.92). The right-pinned 'action'
   column in .n-data-table (.n-data-table-td--fixed-right
   .n-data-table-td--last-col) ships with an inline slate bg from
   our coercer. The slate stands out against the surrounding
   graphite table \u2014 Tim wants the action column to blend with the
   table by painting graphite instead. */
html body .n-data-table-td.n-data-table-td--fixed-right:not(#__reos_never_id),
html body .n-data-table-td.n-data-table-td--last-col:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
}

/* The 3-dot kebab button inside the action column matches the
   pattern of .contact-options-button (graphite bg + steel border +
   brand-blue dots, no white/blue inner box on click). GHL renders
   it as a Naive UI quaternary icon-only button:
   .n-button.n-button--default-type.quaternary.icon-only with an
   id ending in '-action-dropdown-trigger'.

   Scope: .n-button.quaternary.icon-only inside an n-data-table-td
   so we don't disturb other quaternary icon buttons elsewhere. */
html body .n-data-table-td .n-button.n-button--default-type.quaternary.icon-only:not(#__reos_never_id),
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-text-color: var(--reos-blue) !important;
  --n-text-color-hover: var(--reos-blue) !important;
  --n-text-color-pressed: var(--reos-blue) !important;
  --n-text-color-focus: var(--reos-blue) !important;
}
/* Focus / active state: graphite bg + emerald border, no inner
   white/blue overlay. */
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id):focus,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id):active,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id):focus-visible,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id):focus-within,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id):focus,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id):active,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id):focus-visible {
  outline: none !important;
  box-shadow: none !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-emerald) !important;
}
/* SVG 3-dot icon \u2014 brand blue stroke (matches the .contact-options-
   button pattern). Naive renders with stroke="currentColor". */
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) svg,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) svg path,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) svg,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: var(--reos-blue) !important;
}
/* Kill every non-SVG descendant painting bg/border (the white
   inner box on click pattern \u2014 Naive's n-base-wave + state-border
   overlays). */
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) *:not(svg):not(path):not(circle):not(g),
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) *:not(svg):not(path):not(circle):not(g) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) .n-base-wave,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) .n-button__border,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) .n-button__state-border,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) .n-base-wave,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) .n-button__border,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) .n-button__state-border {
  display: none !important;
  background: transparent !important;
  opacity: 0 !important;
  border: none !important;
}

/* Kill the 0.3s background-color transition on data-table cells.
   Naive UI defaults a 4-prop transition (box-shadow + bg + border
   + color) on .n-data-table-td. When hover toggles, the bg
   interpolates between transparent and slate (with alpha-blending
   through intermediate colors), producing a brief white flash on
   both enter AND leave. Instant state changes look correct for a
   row hover anyway \u2014 no need to animate. */
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr,
html body .n-data-table:not(#__reos_never_id) .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-th {
  transition: none !important;
  transition-duration: 0s !important;
}
/* Empty state \u2014 heading bone, subtitle ash, both at full opacity
   regardless of original .text-gray-900 / .text-gray-600 classes. */
html body .n-data-table-empty:not(#__reos_never_id),
html body .n-data-table-empty:not(#__reos_never_id) * {
  opacity: 1 !important;
}
html body .n-data-table-empty:not(#__reos_never_id) .text-gray-900,
html body .n-data-table-empty:not(#__reos_never_id) [class*="text-gray-9"],
html body .n-data-table-empty:not(#__reos_never_id) [class*="font-medium"]:not([class*="text-gray-6"]):not([class*="text-gray-5"]):not([class*="text-gray-4"]) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-data-table-empty:not(#__reos_never_id) .text-gray-600,
html body .n-data-table-empty:not(#__reos_never_id) .text-gray-500,
html body .n-data-table-empty:not(#__reos_never_id) [class*="text-gray-6"],
html body .n-data-table-empty:not(#__reos_never_id) [class*="text-gray-5"] {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* 18a-form-input-hairlines (v0.8.80). The Tax ID input shows:
   - An outer hairline around the field (.n-form-item-blank own
     1px steel border)
   - An inner hairline at the start of the placeholder text (the
     <input> element's own 1px steel border, drawing inside the
     wrapper's padding)
   - An emerald caret (from inline --n-caret-color coerced)

   Kill both hairlines so the field reads as a flat slate fill;
   error / focus states still render via .n-input--error-status /
   .n-input__state-border (independent overlay elements). Pin
   caret-color: bone for an on-brand text cursor. */
html body .n-form-item-blank.n-form-item-blank:not(#__reos_never_id),
html body .n-form-item-blank.n-form-item-blank.n-form-item-blank--error:not(#__reos_never_id) {
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
}
html body input.n-input__input-el.n-input__input-el:not(#__reos_never_id),
html body input.n-base-selection-input.n-base-selection-input:not(#__reos_never_id) {
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
  caret-color: var(--reos-bone) !important;
}
html body .n-input:not(#__reos_never_id),
html body .n-input .n-input-wrapper:not(#__reos_never_id),
html body .n-input .n-input__input:not(#__reos_never_id) {
  caret-color: var(--reos-bone) !important;
  --n-caret-color: var(--reos-bone) !important;
  --n-caret-color-warning: var(--reos-bone) !important;
  --n-caret-color-error: var(--reos-bone) !important;
}

/* 18a-n-select-double-border (v0.8.73). On the Tax-ID-Type select
   (and any .n-select / .n-base-selection), focusing draws TWO
   stacked emerald rings:
     .n-base-selection__border       \u2014 1px emerald
     .n-base-selection__state-border \u2014 1px emerald (same inset:0)
   Both overlays render at the exact same position, doubling the
   border thickness on screen. Hide the static .n-base-selection__border
   so only the dynamic state-border shows \u2014 single emerald ring on
   focus, transparent at rest. */
html body .n-base-selection .n-base-selection__border:not(#__reos_never_id) {
  border: 1px solid transparent !important;
  border-color: transparent !important;
}
html body .n-base-selection.n-base-selection--focus .n-base-selection__state-border:not(#__reos_never_id),
html body .n-base-selection.n-base-selection--active .n-base-selection__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}

/* 18a-n-input-focus-halo (v0.8.71). GHL ships a Vue scoped rule:
     .hl-input-text:not(.n-input--disabled).n-input--focus[data-v-XXX]
       .n-input__state-border {
       box-shadow: rgb(209, 224, 255) 0px 0px 0px 4px;  // 4px light-blue halo
       border: 1px solid rgb(132, 173, 255);            // light-blue border
     }
   That 4px halo is what reads as a "giant white border" around the
   input when clicked. The .n-input__state-border element is an
   absolutely-positioned overlay (inset:0, pointer-events:none) on
   top of .n-input \u2014 its job IS to draw the focus indicator.

   Specificity to beat: (0, 1, 4, 0) \u2014 class-double + ID-level
   :not() bumps us above that. Kill the halo entirely, replace the
   border with our emerald spec. Same treatment for .n-input__border
   (the resting-state overlay) so its gray-200 border doesn't bleed
   through. */
html body .n-input.n-input--focus:not(#__reos_never_id) .n-input__state-border,
html body .hl-input-text.hl-input-text.n-input--focus:not(#__reos_never_id) .n-input__state-border,
html body .n-input.n-input.n-input--focus:not(#__reos_never_id) .n-input__state-border {
  box-shadow: none !important;
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-input.n-input:not(#__reos_never_id) .n-input__border,
html body .hl-input-text.hl-input-text:not(#__reos_never_id) .n-input__border {
  /* v0.8.71 painted this steel as a 'resting state' indicator,
     but it drew an outer hairline around every n-input that Tim
     flagged in v0.8.80. v0.8.81: make it transparent so the
     resting state is flat slate; focus still shows emerald via
     .n-input__state-border (untouched). */
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .n-input.n-input:not(#__reos_never_id):hover .n-input__state-border,
html body .hl-input-text.hl-input-text:not(#__reos_never_id):hover .n-input__state-border {
  box-shadow: none !important;
  border: 1px solid var(--reos-emerald) !important;
}
/* Kill the .3s box-shadow / border-color transition on these
   overlays so focus state changes feel instant. */
html body .n-input .n-input__border,
html body .n-input .n-input__state-border,
html body .hl-input-text .n-input__border,
html body .hl-input-text .n-input__state-border {
  transition: none !important;
  transition-duration: 0s !important;
}

/* n-input-suffix / n-base-selection-icon \u2014 calendar/dropdown chevrons */
html body .n-base-suffix__arrow,
html body .n-input__suffix,
html body .n-base-selection .n-base-suffix {
  color: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

/* n-card / n-modal / n-popover \u2014 modal panels themselves */
html body .n-card,
html body .n-modal,
html body .n-modal-container,
html body .n-dialog,
html body .n-popover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
html body .n-card__content,
html body .n-card-header,
html body .n-card-header__main,
html body .n-modal-body-wrapper,
html body .n-dialog__content {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
}

/* 18a-modal-dividers (v0.8.72). The horizontal divider lines
   between modal header / content / footer sections render as
   cool-gray via Naive UI's --n-border-color inline var
   (rgb(239,239,245) original, painted cool-gray by our coercer).
   That's visible enough to read as "gray-200 lines" to Tim.
   Push them down to steel for a subtler inset divider. */
html body .n-card.n-card:not(#__reos_never_id),
html body .n-modal.n-modal:not(#__reos_never_id),
html body .hl-modal.hl-modal:not(#__reos_never_id) {
  --n-border-color: var(--reos-steel) !important;
}
html body .n-card .n-card-header:not(#__reos_never_id),
html body .n-card .n-card-header__main:not(#__reos_never_id),
html body .n-card .n-card__content:not(#__reos_never_id),
html body .n-card .n-card__footer:not(#__reos_never_id),
html body .n-modal .n-card-header:not(#__reos_never_id),
html body .n-modal .n-card-header__main:not(#__reos_never_id),
html body .n-modal .n-card__content:not(#__reos_never_id),
html body .n-modal .n-card__footer:not(#__reos_never_id),
html body .hl-modal .n-card-header:not(#__reos_never_id),
html body .hl-modal .n-card-header__main:not(#__reos_never_id),
html body .hl-modal .n-card__content:not(#__reos_never_id),
html body .hl-modal .n-card__footer:not(#__reos_never_id) {
  /* Section dividers run as TOP + BOTTOM borders. v0.8.72 used
     the border-color shorthand which painted all 4 sides steel
     \u2014 that produced the thin inner hairline Tim flagged in
     v0.8.76. v0.8.77 transparented left + right. */
  border-top-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
}
/* Edge sections (top of header, bottom of footer) sit flush
   against the modal's outer wrapper border \u2014 their own outer-
   edge border is redundant with the wrapper border. v0.8.78
   kills those so we don't double-stripe at the top + bottom.
   v0.8.79: also kill .n-card-header__main border-top (the inner
   wrapper of the header) since its top edge sits inside the
   header padding and stripes a thin line near the modal top. */
html body .n-card .n-card-header:not(#__reos_never_id),
html body .n-card .n-card-header__main:not(#__reos_never_id),
html body .n-modal .n-card-header:not(#__reos_never_id),
html body .n-modal .n-card-header__main:not(#__reos_never_id),
html body .hl-modal .n-card-header:not(#__reos_never_id),
html body .hl-modal .n-card-header__main:not(#__reos_never_id) {
  border-top-color: transparent !important;
}
html body .n-card .n-card__footer:not(#__reos_never_id),
html body .n-modal .n-card__footer:not(#__reos_never_id),
html body .hl-modal .n-card__footer:not(#__reos_never_id) {
  border-bottom-color: transparent !important;
}

/* n-radio / n-checkbox \u2014 accent color */
html body .n-radio input[type="radio"],
html body .n-checkbox input[type="checkbox"] {
  accent-color: var(--reos-blue) !important;
}
html body .n-radio,
html body .n-checkbox {
  color: var(--reos-bone) !important;
}
html body .n-radio__label,
html body .n-checkbox__label {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Select-menu / option rules apply to BOTH Naive UI (.n-base-select-*)
   AND GHL's internal HighLevel UI components (.hr-base-select-*).
   GHL ships both flavors in different surfaces; rules are identical
   so we double the selectors instead of writing twice. */

/* Menu panel \u2014 graphite + steel border */
html body .n-base-select-menu,
html body .n-base-select-menu .n-virtual-list,
html body .n-popselect-menu,
html body .hr-base-select-menu,
html body .hr-base-select-menu .hr-virtual-list,
html body .hr-popselect-menu {
  background-color: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
html body .n-base-select-option,
html body .hr-base-select-option {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-base-select-option__content,
html body .hr-base-select-option__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Kill pseudo-element hover overlays */
html body .n-base-select-option::before,
html body .n-base-select-option::after,
html body .n-base-select-option--pending::before,
html body .n-base-select-option--pending::after,
html body .n-base-select-option--active::before,
html body .n-base-select-option--active::after,
html body .n-base-select-option--hover::before,
html body .n-base-select-option--hover::after,
html body .hr-base-select-option::before,
html body .hr-base-select-option::after,
html body .hr-base-select-option--pending::before,
html body .hr-base-select-option--pending::after,
html body .hr-base-select-option--active::before,
html body .hr-base-select-option--active::after,
html body .hr-base-select-option--hover::before,
html body .hr-base-select-option--hover::after {
  background: transparent !important;
  background-color: transparent !important;
  opacity: 0 !important;
}

/* Hover / keyboard-focus state */
html body .n-base-select-option--pending,
html body .n-base-select-option--active,
html body .n-base-select-option--hover,
html body .n-base-select-option:hover,
html body .hr-base-select-option--pending,
html body .hr-base-select-option--active,
html body .hr-base-select-option--hover,
html body .hr-base-select-option:hover {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-base-select-option--pending *,
html body .n-base-select-option--active *,
html body .n-base-select-option--hover *,
html body .n-base-select-option:hover *,
html body .hr-base-select-option--pending *,
html body .hr-base-select-option--active *,
html body .hr-base-select-option--hover *,
html body .hr-base-select-option:hover * {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Selected row \u2014 emerald glow + emerald text. Class-stacking pushes
   specificity above the hover descendant rule. */
html body .n-base-select-option--selected,
html body .n-base-select-option.n-base-select-option--selected,
html body .n-base-select-option--selected.n-base-select-option--pending,
html body .n-base-select-option--selected.n-base-select-option--active,
html body .n-base-select-option--selected.n-base-select-option--hover,
html body .hr-base-select-option--selected,
html body .hr-base-select-option.hr-base-select-option--selected,
html body .hr-base-select-option--selected.hr-base-select-option--pending,
html body .hr-base-select-option--selected.hr-base-select-option--active,
html body .hr-base-select-option--selected.hr-base-select-option--hover {
  background-color: rgba(15, 181, 126, 0.12) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Selected descendants */
html body .n-base-select-option--selected *,
html body .n-base-select-option.n-base-select-option--selected *,
html body .n-base-select-option--selected.n-base-select-option--pending *,
html body .n-base-select-option--selected.n-base-select-option--active *,
html body .n-base-select-option--selected.n-base-select-option--hover *,
html body .hr-base-select-option--selected *,
html body .hr-base-select-option.hr-base-select-option--selected *,
html body .hr-base-select-option--selected.hr-base-select-option--pending *,
html body .hr-base-select-option--selected.hr-base-select-option--active *,
html body .hr-base-select-option--selected.hr-base-select-option--hover * {
  background-color: transparent !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-base-select-option--selected svg,
html body .n-base-select-option--selected .n-icon,
html body .hr-base-select-option--selected svg,
html body .hr-base-select-option--selected .hr-icon {
  color: var(--reos-emerald) !important;
  fill: var(--reos-emerald) !important;
}
/* Group headers */
html body .n-base-select-group-header,
html body .hr-base-select-group-header {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
}

/* n-date-picker */
html body .n-date-picker,
html body .n-date-picker-panel {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-cool-gray) !important;
}

/* n-divider */
html body .n-divider {
  background-color: var(--reos-steel) !important;
}

/* n-form-item-label (Naive UI form labels) */
html body .n-form-item-label,
html body .n-form-item-label__text {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* 11b. ACTIVE-ACCENT STANDARD \u2014 emerald-glow look ONLY on the
   element that's actually active. v0.7.18's broad substring match
   on [class*="--active"]/[class*="-selected"] hit too many false
   positives (accordion sections, form-field active classes, etc.)
   and the descendant cascade poured emerald into every child of an
   active container, including field labels that should stay ash.

   Tightened to canonical state classes + ARIA only. NO descendant
   cascade. Targeted elements (sidebar nav links, tab buttons,
   dropdown options) already have their own rules elsewhere \u2014 this
   is the catch-all for anything else that uses standard state
   patterns. */
html body .is-active,
html body .is-selected,
html body [aria-pressed="true"]:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--success-type):not(.n-button--warning-type):not(.n-button--info-type),
html body [aria-selected="true"]:not(.n-base-select-option--selected):not(.n-base-select-option--pending),
html body [aria-current="page"],
html body [aria-current="true"] {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
/* SVG icons inside these (the icon itself, not all descendants) */
html body .is-active > svg,
html body .is-selected > svg,
html body [aria-pressed="true"]:not(.n-button--primary-type):not(.n-button--error-type) > svg,
html body [aria-selected="true"]:not(.n-base-select-option--selected) > svg,
html body [aria-current="page"] > svg,
html body [aria-current="true"] > svg {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 12b. MODAL CONTENT \u2014 boost contrast on every interactive bit inside a
   dialog/modal so labels, inputs, dropdowns, toggle pills, and status
   chips don't blend with the graphite panel. Targets common GHL modal
   wrapper classes via substring match. */
html body .modal input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),
html body .modal textarea,
html body .modal select,
html body .modal-content input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),
html body .modal-content textarea,
html body .modal-content select,
html body [class*="modal"] input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),
html body [class*="modal"] textarea,
html body [class*="modal"] select,
html body [class*="dialog"] input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),
html body [class*="dialog"] textarea,
html body [class*="dialog"] select,
html body [role="dialog"] input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),
html body [role="dialog"] textarea,
html body [role="dialog"] select {
  background-color: var(--reos-slate) !important;
  border: 1px solid var(--reos-cool-gray) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border-radius: 4px !important;
  padding: 8px 12px !important;
}

/* Modal labels \u2014 push to ash for readability vs the bone input text */
html body [class*="modal"] label,
html body [class*="dialog"] label,
html body [role="dialog"] label {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* Toggle pill groups (Default/Custom buttons, etc.) \u2014 boost border so
   the inactive pill is visible against graphite */
html body [class*="modal"] [class*="rounded"]:not(input):not(textarea),
html body [class*="dialog"] [class*="rounded"]:not(input):not(textarea),
html body [role="dialog"] [class*="rounded"]:not(input):not(textarea) {
  border-color: var(--reos-cool-gray) !important;
}

/* Radio + checkbox tone \u2014 kill the white default that disappears on
   dark backgrounds. The native control inherits accent-color. */
html body [class*="modal"] input[type="radio"],
html body [class*="dialog"] input[type="radio"],
html body [role="dialog"] input[type="radio"],
html body [class*="modal"] input[type="checkbox"],
html body [class*="dialog"] input[type="checkbox"],
html body [role="dialog"] input[type="checkbox"] {
  accent-color: var(--reos-blue) !important;
}

/* Internal Notes panel + similar nested cards inside the modal \u2014 give
   them a slate inset so they're distinguishable from the modal bg */
html body [class*="modal"] [class*="card"],
html body [class*="dialog"] [class*="card"],
html body [role="dialog"] [class*="card"] {
  background-color: var(--reos-slate) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}

/* 13. SCROLLBAR \u2014 match the theme.
   Original rules had no !important; any scoped author rule (e.g.
   a Vue scoped .message-list ::-webkit-scrollbar-thumb { background:
   rgb(229, 231, 235) }) beat our universal selector via specificity
   (0,0,1,1 vs 0,0,1,0) and painted scrollbars Tailwind gray-200
   inside that subtree. Tim noticed the Team Inbox scrollbar coming
   through as gray-200 while the Contact Details panel scrollbar
   correctly showed steel \u2014 that is the specificity war. !important
   wins it. */
*::-webkit-scrollbar { width: 10px !important; height: 10px !important; }
*::-webkit-scrollbar-track { background: var(--reos-obsidian) !important; }
*::-webkit-scrollbar-thumb {
  background: var(--reos-steel) !important;
  border-radius: 4px !important;
}
*::-webkit-scrollbar-thumb:hover { background: var(--reos-cool-gray) !important; }
*::-webkit-scrollbar-corner { background: var(--reos-obsidian) !important; }
/* Standard CSS scrollbar properties (Chrome modern + Firefox + Edge).
   Diagnosed live in Chrome: modern Chrome supports both ::-webkit-*
   pseudos AND the standard scrollbar-color / scrollbar-width. When
   both are set, the STANDARD wins at render. Without these, the
   webkit pseudos compute correctly but Chrome paints whatever the
   standard property says. Use html body to bump above naked-*
   inheritance defaults. */
html body, html body * {
  scrollbar-color: var(--reos-steel) var(--reos-obsidian);
  scrollbar-width: thin;
}

/* GHL ships a Vue scoped rule that overrides our universal scrollbar
   styles for any container with .custom-scrollbar:
       .custom-scrollbar[data-v-xxxxxxxx]::-webkit-scrollbar-thumb {
         background: rgb(229, 231, 235) !important;
       }
   That selector is (0,0,2,1) and beats our universal scrollbar-thumb
   (0,0,0,1) even though both have !important. The data-v-* hash
   changes per build so we cannot match the exact scoped selector.

   Beat it with a higher-specificity selector: stacked class +
   attribute selector on .custom-scrollbar plus html body prefix.
   That gives us (0,0,2,3) which wins outright. Tim spotted the
   Team Inbox scrollbar (a .custom-scrollbar container) showing
   gray-200 while the Contact Details scrollbar showed steel \u2014
   the latter had no .custom-scrollbar ancestor and fell through
   to our universal rule. */
/* DIAGNOSED LIVE IN CHROME (gstack /browse session). The actual issue
   is NOT a specificity war on the ::-webkit-scrollbar-* pseudo-elements
   (those compute correctly to steel). Modern Chrome supports BOTH:
     - Legacy: ::-webkit-scrollbar-* pseudo-elements
     - Standard: 'scrollbar-color' and 'scrollbar-width' CSS properties
   When BOTH are set, the standard wins. GHL sets
       .custom-scrollbar[data-v-fa4b40fd] {
         scrollbar-color: rgb(229, 231, 235) rgba(0,0,0,0);
         scrollbar-width: thin;
       }
   via Vue scoped CSS. That overrides our pseudo-element styling at
   render time -- our pseudos compute to steel but Chrome paints the
   thumb gray-200 because the standard property wins.

   Fix: override scrollbar-color + scrollbar-width on .custom-scrollbar
   itself. Keep the webkit pseudos for older browsers that don't
   support the standard. The :not(#__reos_never_id) trick bumps
   specificity to (0,1,1,2) for the standard rule and (0,1,1,3) for
   the pseudo rules -- ID-level, beats any class+attribute Vue scoped
   selector. */
html body .custom-scrollbar:not(#__reos_never_id) {
  scrollbar-color: var(--reos-steel) var(--reos-obsidian) !important;
  scrollbar-width: thin !important;
}
html body .custom-scrollbar:not(#__reos_never_id)::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
html body .custom-scrollbar:not(#__reos_never_id)::-webkit-scrollbar-track {
  background: var(--reos-obsidian) !important;
}
html body .custom-scrollbar:not(#__reos_never_id)::-webkit-scrollbar-thumb {
  background: var(--reos-steel) !important;
  border-radius: 4px !important;
}
html body .custom-scrollbar:not(#__reos_never_id)::-webkit-scrollbar-thumb:hover {
  background: var(--reos-cool-gray) !important;
}
html body .custom-scrollbar:not(#__reos_never_id)::-webkit-scrollbar-corner {
  background: var(--reos-obsidian) !important;
}

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
/* PURE-WHITE TEXT SWEEP \u2014 every form of "white text" GHL ships gets
   remapped to bone. Covers:
     - Tailwind .text-white utility (and class*= prefix variants)
     - inline 'color: #fff' / '#ffffff' (3- and 6-char hex, both cases)
     - inline 'color: white' keyword
     - inline 'color: rgb(255, 255, 255)' (browser-serialized form)
     - inline 'color: rgba(255, 255, 255, *)' (any alpha) \u2014 used for
       overlay text + faded-out states
     - The same set repeated for '-webkit-text-fill-color', which
       GHL pairs with 'color' on many elements (and which beats
       'color' on Safari).

   This is a CSS-only mass remap. The FORCE_RULE remapPureWhiteText
   below handles the dynamic case where computed color resolves to
   white via inheritance / scoped CSS that the inline-style
   substring matcher cannot see. */
html body .text-white,
html body [class*="text-white"],
html body [style*="color: #fff"],
html body [style*="color:#fff"],
html body [style*="color: #FFF"],
html body [style*="color:#FFF"],
html body [style*="color: #ffffff"],
html body [style*="color:#ffffff"],
html body [style*="color: #FFFFFF"],
html body [style*="color:#FFFFFF"],
html body [style*="color: white"],
html body [style*="color:white"],
html body [style*="color: rgb(255, 255, 255)"],
html body [style*="color:rgb(255, 255, 255)"],
html body [style*="color: rgb(255,255,255)"],
html body [style*="color:rgb(255,255,255)"],
html body [style*="color: rgba(255, 255, 255"],
html body [style*="color:rgba(255, 255, 255"],
html body [style*="color: rgba(255,255,255"],
html body [style*="color:rgba(255,255,255"],
html body [style*="-webkit-text-fill-color: #fff"],
html body [style*="-webkit-text-fill-color:#fff"],
html body [style*="-webkit-text-fill-color: #FFF"],
html body [style*="-webkit-text-fill-color:#FFF"],
html body [style*="-webkit-text-fill-color: #ffffff"],
html body [style*="-webkit-text-fill-color:#ffffff"],
html body [style*="-webkit-text-fill-color: #FFFFFF"],
html body [style*="-webkit-text-fill-color:#FFFFFF"],
html body [style*="-webkit-text-fill-color: white"],
html body [style*="-webkit-text-fill-color:white"],
html body [style*="-webkit-text-fill-color: rgb(255, 255, 255)"],
html body [style*="-webkit-text-fill-color:rgb(255, 255, 255)"],
html body [style*="-webkit-text-fill-color: rgb(255,255,255)"],
html body [style*="-webkit-text-fill-color:rgb(255,255,255)"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* CHILDREN of the above \u2014 pure-white text often comes from a parent's
   color cascade through children that don't declare color themselves.
   Pin descendants to bone too, but ONLY on the inline-style matchers
   (not .text-white, which is widely used and already handled at the
   class level on each descendant Tailwind utility). */
html body [style*="color: #fff"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color:#fff"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color: white"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color:white"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color: #ffffff"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color: #FFFFFF"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g),
html body [style*="color: rgb(255, 255, 255)"] *:not(svg):not(path):not(circle):not(rect):not(polygon):not(line):not(g) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 15g. PAGE-OBJECT HEADINGS \u2014 the big page-title at the top of every
   object-list page ("Conversations", "Contacts", "Opportunities", etc.).
   GHL renders these via a Vue component with class .topmenu-navtitle
   and applies a near-black color via Vue scoped CSS (not inline, not
   a Tailwind utility class \u2014 so the substring matchers above don't
   catch it). The data-v-* attribute on the element changes per build,
   so we can't target the scoped selector directly.

   Beat the scoped rule with !important on the class itself. Same
   treatment for semantic [role="heading"] elements as a broader
   safety net \u2014 any element semantically marked as a heading should
   read as bone, regardless of what color GHL paints it.

   Includes h1-h6 elements as a final defense-in-depth layer for any
   page that uses semantic headings without an obvious GHL class. */
html body .topmenu-navtitle,
html body [class*="topmenu-navtitle"],
html body [class*="topmenu-nav-title"],
html body [class*="page-title"],
html body [class*="page-heading"],
html body [class*="page-header__title"],
html body [class*="object-header"],
html body [class*="objectHeader"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Semantic-heading safety net: any element with role="heading" or
   any h1-h6 that hasn't been explicitly colored by a more specific
   rule. Scoped to 'html body' to avoid styling headings inside
   Ask AI / gradient-text components (those use bg-clip-text). */
html body h1:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body h2:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body h3:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body h4:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body h5:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body h6:not([class*="bg-clip-text"]):not([class*="text-transparent"]),
html body [role="heading"]:not([class*="bg-clip-text"]):not([class*="text-transparent"]) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 15h. TOP-MENU NAV ITEMS \u2014 the page tabs in the top header bar
   ("Launchpad", "Dashboard", "Conversations", "Calendars", etc.).
   GHL paints the active tab with a 2px blue border-bottom + blue
   text via a 5-class chain:
       .sidebar-v2-location .hl_header .topmenu-nav .topmenu-navitem.active {
         border-bottom-color: rgb(56, 160, 219);  // blue #38A0DB
         color: rgb(56, 160, 219);
       }
   The text we already coerce to emerald via FORCE_RULES (inline
   style on the <a>). But the border-bottom-color is class-driven
   and not touched by anything yet, so the active tab shows a
   blue underline against emerald text -- looks broken.

   Per ACTIVE-ACCENT STANDARD: active tab gets emerald accent
   (text + underline). Hover gets bone (subtle, no color change).
   The :not(#__reos_never_id) trick gives us ID-level specificity
   to beat the 5-class GHL chain. */
html body .topmenu-navitem.active:not(#__reos_never_id),
html body .topmenu-navitem.router-link-active:not(#__reos_never_id) {
  border-bottom-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  /* Kill the emerald-glow box. Section 4 (SIDEBAR) paints
     [class*='sidebar'] a.active with emerald-glow bg, which catches
     these top tabs because they live inside .sidebar-v2-location.
     Per Tim's icon-rail UX: emerald TEXT + emerald UNDERLINE only,
     no box. */
  background-color: transparent !important;
  background: transparent !important;
  border-color: transparent !important;
  border-bottom-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}
/* Hover state on inactive tabs \u2014 emerald text (matches the rest
   of the icon-rail UX across the app: ash default, emerald on
   hover and when selected, no box). */
html body .topmenu-navitem:hover:not(#__reos_never_id),
html body .topmenu-navitem a:hover:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
}

/* 15i. CONVERSATION-HEADER ICON BUTTONS \u2014 the row of icon-only action
   buttons at the top of an open conversation thread: chat-filter,
   phone-calls, archive-conversation, star-toggle, read-toggle, and
   delete-conversation. Each is a tiny <div> with 'hover:bg-gray-50'
   (or 'hover:bg-red-50' for delete) and an SVG inside with
   'text-gray-600' + an optional 'group-hover:text-red-600' for
   destructive icons.

   Tim's preference after iterating: NO hover background. The icon
   itself shifts color (emerald for action icons, crimson for the
   destructive delete icon) -- nothing else moves. Slate-on-graphite
   reads as a 'blue box' at this size, and even emerald-glow was
   distracting on a row of tiny icons.

   Also: explicitly kill the slate-hover bg from the section 18a-1
   catchall (which would otherwise paint slate via the
   [class*=hover:bg-gray-50]:hover rule).

   Coupled with an ID skip in the coerceDarkDropdowns FORCE_RULE
   (search for 'phone-calls' in the JS section) so the per-tick
   coercer doesn't paint slate inline when the element isn't
   hovered. */
html body #chat-filter:hover,
html body #phone-calls:hover,
html body #archive-conversation:hover,
html body #star-toggle:hover,
html body #read-toggle:hover,
html body #delete-conversation:hover {
  background-color: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}
html body #chat-filter:hover svg,
html body #phone-calls:hover svg,
html body #archive-conversation:hover svg,
html body #star-toggle:hover svg,
html body #read-toggle:hover svg {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
html body #delete-conversation:hover svg,
html body #delete-conversation:hover svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* 14a. INLINE LIGHT-GREEN PILLS \u2014 trend/success indicator pills (e.g.
   the "100%" up-trend pill on the Lead Source Report) ship with
   inline background-color: rgb(230, 248, 233) (#E6F8E9 mint). On the
   dark theme that reads as a glowing white-ish oval. The text/icon
   inside are already a brand-adjacent green (#33B254) so they read
   fine on emerald-glow; just need to swap the bg.

   Exact-value attribute match keeps perf cost low and the blast
   radius narrow \u2014 only elements with this exact inline color get
   remapped. */
html body [style*="background-color: rgb(230, 248, 233)"],
html body [style*="background-color:rgb(230, 248, 233)"],
html body [style*="background-color: rgb(230,248,233)"],
html body [style*="background-color:rgb(230,248,233)"],
html body [style*="background-color: #E6F8E9"],
html body [style*="background-color:#E6F8E9"],
html body [style*="background-color: #e6f8e9"],
html body [style*="background-color:#e6f8e9"] {
  background-color: var(--reos-emerald-glow) !important;
}

/* 15a-blue (v0.8.19). GLOBAL blue-indicator remap. Tim flagged
   GHL's notification badges (the small '1', '3', etc. pills that
   indicate unread/pending counts) ship with class bg-[#155EEF]
   (Tailwind blue-600, hex #155EEF) and similar #004EEB variants.
   That blue clashes with the REOS brand blue --reos-blue (#4B8BF5,
   a softer mid-blue).

   Remap to brand blue across:
   - Tailwind blue 500/600/700 utility classes
   - Arbitrary hex values bg-[#155EEF] / bg-[#004EEB] / etc.
   - Inline style overrides

   Light shades (blue 50/100) are NOT touched here \u2014 they're used
   as light backgrounds and already remap to graphite via section
   18a-flash-global.

   Also force text inside the badges to bone so the count digit
   reads clearly on the brand-blue bg (customizer's text-white
   remap was painting it graphite earlier). */
html body [class*="bg-[#155EEF]"]:not(#__reos_never_id),
html body [class*="bg-[#155eef]"]:not(#__reos_never_id),
html body [class*="bg-[#004EEB]"]:not(#__reos_never_id),
html body [class*="bg-[#004eeb]"]:not(#__reos_never_id),
html body [class*="bg-[#1849A9]"]:not(#__reos_never_id),
html body [class*="bg-[#1849a9]"]:not(#__reos_never_id),
html body [class*="bg-[#155DFC]"]:not(#__reos_never_id),
html body [class*="bg-[#155dfc]"]:not(#__reos_never_id),
html body .bg-blue-500:not(#__reos_never_id),
html body .bg-blue-600:not(#__reos_never_id),
html body .bg-blue-700:not(#__reos_never_id),
html body .bg-blue-800:not(#__reos_never_id),
html body .bg-blue-900:not(#__reos_never_id),
html body [style*="background-color: #155EEF"]:not(#__reos_never_id),
html body [style*="background-color:#155EEF"]:not(#__reos_never_id),
html body [style*="background-color: #155eef"]:not(#__reos_never_id),
html body [style*="background-color:#155eef"]:not(#__reos_never_id),
html body [style*="background-color: rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style*="background-color: #004EEB"]:not(#__reos_never_id),
html body [style*="background-color:#004EEB"]:not(#__reos_never_id),
html body [style*="background-color: rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(0, 78, 235)"]:not(#__reos_never_id) {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
}
/* Badge text \u2014 force bone so the count digit reads on the
   brand-blue surface (defeats the customizer's text-white coerce
   that was making it graphite). */
html body [class*="bg-[#155EEF]"]:not(#__reos_never_id),
html body [class*="bg-[#155eef]"]:not(#__reos_never_id),
html body [class*="bg-[#004EEB]"]:not(#__reos_never_id),
html body [class*="bg-[#004eeb]"]:not(#__reos_never_id),
html body .bg-blue-500:not(#__reos_never_id),
html body .bg-blue-600:not(#__reos_never_id),
html body .bg-blue-700:not(#__reos_never_id),
html body [class*="bg-[#155EEF]"]:not(#__reos_never_id) *,
html body [class*="bg-[#155eef]"]:not(#__reos_never_id) *,
html body .bg-blue-500:not(#__reos_never_id) *,
html body .bg-blue-600:not(#__reos_never_id) *,
html body .bg-blue-700:not(#__reos_never_id) * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 15a-sms-icon (v0.8.20). Tim wants the SMS message-type indicator
   icon on conversation list rows to render in brand blue (matches
   the native GHL convention where SMS rows are color-coded blue).
   Email, phone, and other types stay ash.

   Each conversation row carries lastmessagetype="TYPE_SMS" |
   "TYPE_EMAIL" | "TYPE_PHONE" | etc. as a DOM attribute. The
   overlay icon lives inside an absolutely-positioned rounded-full
   wrapper on the avatar (the small circle in the corner).

   Scope: row attribute selector + descendant overlay svg, so only
   the overlay type icon is painted blue, not the star icon,
   avatar SVG, or any other svg inside the row. */
html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] svg,
html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] svg path,
html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] i {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* 15a-info-blue-text (v0.8.23). GHL ships #004EEB / #155EEF (and
   case variants) as TEXT colors on informational links + accent
   icons across the app: "Details" links on conversation event
   pills, brand-accent SVGs, etc. The :root --primary-* remap at
   the top of this file doesn't reach these because they're baked
   into Tailwind arbitrary classes like text-[#004EEB] or inline
   color: rgb(0, 78, 235).

   Remap to --reos-blue at ID-level specificity so every
   informational-blue text/icon in the app reads as the brand
   blue. Complements section 15a-blue which handles the bg/badge
   side of the same hex family. */
html body [class*="text-[#004EEB]"]:not(#__reos_never_id),
html body [class*="text-[#004eeb]"]:not(#__reos_never_id),
html body [class*="text-[#155EEF]"]:not(#__reos_never_id),
html body [class*="text-[#155eef]"]:not(#__reos_never_id),
html body [class*="text-[#1849A9]"]:not(#__reos_never_id),
html body [class*="text-[#1849a9]"]:not(#__reos_never_id),
html body [style*="color: #004EEB"]:not(#__reos_never_id),
html body [style*="color:#004EEB"]:not(#__reos_never_id),
html body [style*="color: #004eeb"]:not(#__reos_never_id),
html body [style*="color:#004eeb"]:not(#__reos_never_id),
html body [style*="color: rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style*="color:rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style*="color: #155EEF"]:not(#__reos_never_id),
html body [style*="color:#155EEF"]:not(#__reos_never_id),
html body [style*="color: rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style*="color:rgb(21, 94, 239)"]:not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* 15a-retry-btn (v0.8.22). The Retry button next to a failed
   outbound message (#conv-message-retry-button) inherits color
   from its .text-primary-800 class. Section 15a remaps every
   text-primary-* shade to emerald \u2014 but a retry-failure action
   reading emerald sends the wrong signal (Tim's complaint:
   'emerald is for good things, this is showing a failure').

   The icon next to the Retry text uses text-[#004EEB] (Tailwind
   blue), so user wants the text + icon to both render brand blue.
   Override the emerald inheritance just for this button. */
html body #conv-message-retry-button,
html body #conv-message-retry-button *,
html body #conv-message-retry-button span,
html body #conv-message-retry-button svg,
html body #conv-message-retry-button svg path {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* 15a-sms-provider (v0.8.21). The main conversation thread shows
   an avatar with a provider-color overlay icon (SMS in the case
   of MC's outbound bubbles). GHL drives the overlay's colors via
   inline CSS variables on the wrapper:
       --provider-color: #155EEF
       --provider-bg-color: #ffffff
       --provider-text-color: #155EEF
       --provider-border-color: #155EEF
   That's the same Tailwind primary blue Tim remapped on the list
   row badges (v0.8.19). And the white --provider-bg-color is what
   flashes on hover.

   Lock the SMS provider overlay to slate bg + brand-blue border +
   brand-blue icon for both static and hover, kill transitions so
   the bg can't animate through the white provider color. Match
   by the inline style substring '--provider-color: #155EEF' so
   only the SMS variant is affected \u2014 other providers (Facebook,
   WhatsApp, etc.) keep their own branding. */
html body [style*="--provider-color: #155EEF"],
html body [style*="--provider-color:#155EEF"],
html body [style*="--provider-color: #155eef"],
html body [style*="--provider-color:#155eef"] {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-blue) !important;
  transition: none !important;
  animation: none !important;
}
html body [style*="--provider-color: #155EEF"]:hover,
html body [style*="--provider-color:#155EEF"]:hover,
html body [style*="--provider-color: #155eef"]:hover,
html body [style*="--provider-color:#155eef"]:hover {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-blue) !important;
}
html body [style*="--provider-color: #155EEF"] svg,
html body [style*="--provider-color: #155EEF"] svg path,
html body [style*="--provider-color:#155EEF"] svg,
html body [style*="--provider-color:#155EEF"] svg path,
html body [style*="--provider-color: #155eef"] svg,
html body [style*="--provider-color: #155eef"] svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* 15a-n-select (v0.8.35). Naive UI .n-base-selection (the Day/Week
   view dropdown trigger on the calendar page, and any other
   n-select on the dark theme) ships with two border layers:
   - .n-base-selection__border: 1px solid light-gray (default state)
   - .n-base-selection__state-border: 1px solid light-green +
     box-shadow rgb(209, 224, 255) 0 0 0 4px (focus state, light
     blue glow)

   Combined on hover/focus the dropdown reads as a green-bordered
   button with a light-blue 4px halo \u2014 Tim's 'greenish overlay'
   complaint. Match the Today button treatment: steel default,
   emerald hover/focus border, no glow shadow. */
html body .n-base-selection .n-base-selection__border,
html body [class*="n-base-selection"] .n-base-selection__border {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .n-base-selection .n-base-selection__state-border,
html body [class*="n-base-selection"] .n-base-selection__state-border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .n-base-selection:hover .n-base-selection__border,
html body .n-base-selection:focus .n-base-selection__border,
html body .n-base-selection:focus-within .n-base-selection__border,
html body [class*="n-base-selection"]:hover .n-base-selection__border,
html body [class*="n-base-selection"]:focus-within .n-base-selection__border {
  border-color: var(--reos-emerald) !important;
}
html body .n-base-selection:hover .n-base-selection__state-border,
html body .n-base-selection:focus .n-base-selection__state-border,
html body .n-base-selection:focus-within .n-base-selection__state-border,
html body .n-base-selection--focus .n-base-selection__state-border,
html body [class*="n-base-selection"]:hover .n-base-selection__state-border,
html body [class*="n-base-selection"]:focus-within .n-base-selection__state-border {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}

/* 15a-customizations-btn-hover (v0.8.32). Tim wants the Manage
   view button (#customizations-button) to flip to emerald on
   hover when in its default (unclicked) state \u2014 class is
   'border-gray-300 text-gray-700' default, switches to
   'border-primary-300 text-primary-700' when active (clicked).

   v0.8.31 covered the active emerald state (via .border-primary-*).
   This adds the hover emerald lift for the default state so the
   button signals 'clickable' affordance consistently with the
   active emerald color. */
html body #customizations-button:hover,
html body button#customizations-button:hover {
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body #customizations-button:hover svg,
html body #customizations-button:hover svg path,
html body button#customizations-button:hover svg,
html body button#customizations-button:hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 15a-border-primary (v0.8.31). GHL's primary Tailwind palette is
   blue (the same family section 15a remaps for text-* and section
   15a-blue remaps for bg-*). Border variants weren't covered.

   Tim flagged the 'Manage view' button on the calendars page:
   class 'border-primary-300 text-primary-700' renders emerald text
   (per section 15a) but a light-blue border from .border-primary-300.
   Reads disconnected \u2014 emerald content inside a blue rim.

   Remap every .border-primary-* shade to emerald so border + text
   read as one unified accent. */
html body .border-primary,
html body .border-primary-50,
html body .border-primary-100,
html body .border-primary-200,
html body .border-primary-300,
html body .border-primary-400,
html body .border-primary-500,
html body .border-primary-600,
html body .border-primary-700,
html body .border-primary-800,
html body .border-primary-900,
html body [class*="border-primary"] {
  border-color: var(--reos-emerald) !important;
}

/* 15a. TAILWIND text-primary-* family \u2014 GHL's "primary" Tailwind palette is
   blue (#155EEF, #004EEB, etc.) baked into the compiled stylesheet as
   static hex values, not var() references. So the :root --primary-* remap
   at the top of this file doesn't reach .text-primary-700 etc. \u2014 those
   utility classes still resolve to GHL's blue and render illegibly on the
   dark surface. Examples: the AI Insights sparkle icon on dashboard widget
   headers has class="h-4 w-4 text-primary-700" on the SVG itself, so the
   SVG's color doesn't inherit from its .n-button parent.

   Force every text-primary-* shade to emerald so brand-accent icons read. */
html body .text-primary,
html body .text-primary-50,
html body .text-primary-100,
html body .text-primary-200,
html body .text-primary-300,
html body .text-primary-400,
html body .text-primary-500,
html body .text-primary-600,
html body .text-primary-700,
html body .text-primary-800,
html body .text-primary-900,
html body [class*="text-primary"] {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* 15c. NO-DATA MESSAGE OVERLAY \u2014 .no-data-message appears on top of a
   blurred chart (e.g. Google Analytics widget when no data) and reads
   the same as .hl-empty-title \u2014 a quiet empty-state hint. GHL ships
   it with default styling (light bg / dark text) that doesn't match
   the dark theme. Strip to transparent bg + ash text so it recedes
   into the chart surface instead of presenting as a bright label.

   Same empty-state philosophy as .hl-empty-icon (section 15b):
   empty-state UI should be quiet, no decoration competing for
   attention. */
html body .no-data-message,
html body [class*='no-data-message'] {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  border: none !important;
  box-shadow: none !important;
}

/* 15b. EMPTY-STATE ICON BADGES \u2014 .hl-empty-icon is GHL's empty-state
   indicator used across the UI (no contacts found, no results, etc.).
   Ships with a light/white circular background that reads as a bright
   ring on the dark surface.

   Design intent: empty states should be QUIET. Just an icon, muted, no
   badge or decoration competing for attention. Strip the GHL ring and
   render the icon in ash (the standard secondary-text tone) so it
   recedes into the surface instead of demanding attention.

   v0.7.39 over-decorated this with graphite fill + steel hairline +
   emerald icon \u2014 looked like an action badge. v0.7.40 fixes that. */
html body .hl-empty-icon,
html body [class*='hl-empty-icon'] {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--reos-ash) !important;
}
html body .hl-empty-icon svg,
html body .hl-empty-icon svg path,
html body [class*='hl-empty-icon'] svg,
html body [class*='hl-empty-icon'] svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  /* Do NOT force fill \u2014 most GHL empty-state icons are outlined
     (fill="none", stroke="currentColor"), but some use fill. Let
     each SVG's own fill attribute drive painting; color/stroke set
     here color the stroke uniformly via currentColor. */
}

/* 15d. HR DATA TABLE family \u2014 the data-table component used across
   Conversations sub-tabs (Manual Actions, Snippets, Trigger Links,
   Analytics) and elsewhere. Ships with default light styling: the
   .hr-data-table-wrapper-header (toolbar row holding filter
   dropdowns) was rendering as a bright white band across the dark
   page. Tim noticed it on the Manual Actions tab and confirmed all
   other tabs share the issue.

   Theme the whole family:
     wrapper / wrapper-responsive / footer  -> graphite surface
     wrapper-header (toolbar row)           -> graphite + bone text
     hr-data-table itself                   -> graphite bg
     __body                                 -> graphite
     __header / __cell-header (column heads)-> slate (subtle band on
                                               top of graphite body)
   All with steel hairline borders where applicable. */
html body .hr-data-table-wrapper,
html body .hr-data-table-wrapper-responsive,
html body .hr-data-table-wrapper-header,
html body .hr-data-table-wrapper-footer,
html body .hr-data-table,
html body .hr-data-table__body,
html body [class*="hr-data-table-wrapper"],
html body [class*="hr-data-table__body"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-data-table__header,
html body .hr-data-table__cell-header,
html body [class*="hr-data-table__header"],
html body [class*="hr-data-table__cell-header"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}

/* 15d-2. Page-level data-table containers \u2014 the Conversations sub-tab
   pages wrap the data table in an h-screen flex container (e.g.
   #manual-actions-container-div, #snippets-container-div, etc.). The
   data table itself has max-height: calc(100vh - 330px), so on a tall
   screen there's empty space below the table footer. That space falls
   through to the body's obsidian bg (#0A0D12, near-black), creating a
   jarring dark band below otherwise-graphite tables.

   Give these containers graphite so the empty area matches the table
   surface. Targets by ID pattern (manual-actions / snippets /
   trigger-links / analytics / settings) plus the broader
   [id*='container-div'] catchall. */
html body #manual-actions-container-div,
html body [id*="manual-actions-container"],
html body [id*="snippets-container"],
html body [id*="trigger-links-container"],
html body [id*="analytics-container"],
html body [id*="-container-div"]:has(.hr-data-table-wrapper) {
  background-color: var(--reos-graphite) !important;
}

/* 15d-3. Conversations sub-tab outer wrappers \u2014 the section /
   .hl_topbar-tabs containers that wrap the page-header (title +
   description + Let's Start button) AND the data-table-container.
   These wrappers are unstyled and fall through to body obsidian,
   showing a near-black background around the title section.

   Target .hl_topbar-tabs (outer tab content wrapper) and
   .conversationsUtilitiesApp (the HR wrapper specific to
   Conversations utility sub-tabs: Manual Actions, Snippets, Trigger
   Links, Analytics, Settings). Plus the immediate <section> ancestor
   inside the page-route content area. */
html body .hl_topbar-tabs,
html body [class*="hl_topbar-tabs"],
html body .conversationsUtilitiesApp,
html body [class*="conversationsUtilitiesApp"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 15e. SIDEBAR-OPTION-BUTTONs \u2014 the icon-only nav buttons in the
   Conversations contact-detail right-side rail (Contact / Activities
   / Associations / Opportunities / Tasks / Notes / Appointments /
   Documents / Payments / Agent Logs / Layout Info / Keyboard Shortcuts).

   GHL ships them with bg-white + text-blue-600 (active) or
   bg-white + text-gray-900 + hover:text-blue-600 (inactive). The
   Customizer's FORCE_RULE injects inline slate bg + bone text, which
   wins normally \u2014 but Vue re-renders briefly clobber the inline
   style, exposing Tailwind's bg-white for a frame and causing
   visible flicker. (Same mechanism as the Conversations tab
   buttons fixed in v0.7.62.)

   Fix: CSS rules survive Vue re-renders. Static = bone on graphite,
   active = emerald-glow + emerald per ACTIVE-ACCENT STANDARD,
   hover = subtle bg shift. */
/* Updated v0.8.1 to match the canonical icon-rail pattern (same as
   conv-header / inbox-panel collapsed icons / conv-list tabs):
   ash icon default, emerald on hover, emerald when selected, NO box.

   IMPORTANT \u2014 substring trap: the active button has class
   'text-blue-600'; the inactive buttons have 'hover:text-blue-600'.
   Plain [class*='text-blue-600'] catches BOTH (the hover variant
   contains the bare class as a substring), which the older rule
   tripped on (every button got emerald-glow paint). Distinguish
   via :not([class*='hover:text-blue-600']). */

/* All states: transparent surface, no box chrome, no transition. */
html body .sidebar-option-button,
html body button[class*="sidebar-option-button"],
html body .sidebar-option-button:hover,
html body button[class*="sidebar-option-button"]:hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  transition: none !important;
  animation: none !important;
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Default icon \u2014 ash. */
html body .sidebar-option-button svg,
html body .sidebar-option-button svg path,
html body button[class*="sidebar-option-button"] svg,
html body button[class*="sidebar-option-button"] svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  transition: none !important;
}
/* Hover \u2014 emerald icon. */
html body .sidebar-option-button:hover svg,
html body .sidebar-option-button:hover svg path,
html body button[class*="sidebar-option-button"]:hover svg,
html body button[class*="sidebar-option-button"]:hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active \u2014 text-blue-600 WITHOUT hover:text-blue-600 (so we only
   catch the selected button, not every button that has the hover
   utility). Emerald icon, still no box. */
html body .sidebar-option-button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body .sidebar-option-button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path,
html body button[class*="sidebar-option-button"][class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body button[class*="sidebar-option-button"][class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 15e-2. Extra buttons in the same right-side nav.w-13 rail that
   DON'T carry .sidebar-option-button (e.g. the help/info and
   action icons at the bottom of the rail). Same pattern: ash icon
   default, emerald on hover and when active, transparent surface.

   Scoped via nav[class*='w-13'] so we only catch buttons in that
   exact rail and don't accidentally restyle nav buttons elsewhere. */
html body nav[class*="w-13"] button,
html body nav[class*="w-13"] button:hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  transition: none !important;
  animation: none !important;
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body nav[class*="w-13"] button svg,
html body nav[class*="w-13"] button svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  transition: none !important;
}
html body nav[class*="w-13"] button:hover svg,
html body nav[class*="w-13"] button:hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active variant (bare text-blue-600, not hover:text-blue-600). */
html body nav[class*="w-13"] button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body nav[class*="w-13"] button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 15f. OPPORTUNITIES KANBAN \u2014 the pipeline-board view (Opportunities tab
   in the left nav). Lots of light surfaces survive even after the
   v0.7.72 universal flicker-kill sweep because they're driven by:

     (a) Vue scoped CSS variables on stage-header cards
         (--3b690118: #e0e0e0; --68ac5946: white \u2014 fed into a
         'borderColor' class that paints a 2px white line at the
         top of every stage column);
     (b) Naive UI 'hr-skeleton' loaders rendering with
         '--n-color-start: #eee; --n-color-end: #ddd' \u2014 empty stages
         get 5-15 of these stacked, filling the column with light
         gray shimmer bars that read as a "giant white surround"
         around the dark page content;
     (c) inline 'color: rgb(16, 24, 40)' (nearly black) on
         '.crm-opportunities-stage-name' \u2014 invisible on graphite.

   Fix all of the above on the opportunities page surface. */

/* (a) outer wrappers \u2014 belt-and-suspenders graphite. The innermost
       '.wrapper.opportunityPage.crm-opportunities-content' is already
       painted graphite inline by GHL, but the intermediate wrappers
       (#OpportunitiesList, .opportunitiesApp, .opportunities-list-wrap,
       .crm-opportunities-page) are unstyled and may flash through. */
html body #OpportunitiesList,
html body .opportunitiesApp,
html body [class*="opportunitiesApp"],
html body .opportunities-list-wrap,
html body [class*="opportunities-list-wrap"],
html body .crm-opportunities-page,
html body [class*="crm-opportunities-page"],
html body .crm-opportunities-content,
html body [class*="crm-opportunities-content"],
html body .crm-opportunities-board,
html body [class*="crm-opportunities-board"],
html body .crm-opportunities-kanban,
html body [class*="crm-opportunities-kanban"],
html body .crm-opportunities-stages-container,
html body [class*="crm-opportunities-stages-container"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* (b) stage-header card \u2014 kill the white border-top driven by Vue
       scoped var --68ac5946 (which the GHL 'borderColor' class
       resolves into border-color). Pin to steel. Background already
       painted inline graphite but reinforce. */
html body .crm-opportunities-stage-header,
html body [class*="crm-opportunities-stage-header"],
html body .opportunitiesCard.stageHeaderBg,
html body .opportunitiesCard[class*="stageHeaderBg"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
/* The 2px top-border specifically \u2014 !border-t-2 + borderColor class
   together compute to 'border-top: 2px solid var(--68ac5946)' where
   --68ac5946 is 'white'. Force steel regardless. */
html body .crm-opportunities-stage-header[class*="!border-t-2"],
html body .opportunitiesCard.stageHeaderBg[class*="!border-t-2"] {
  border-top-color: var(--reos-steel) !important;
}

/* (c) stage name \u2014 the inline 'color: rgb(16, 24, 40)' is nearly
       black and disappears against graphite. Force bone. */
html body .crm-opportunities-stage-name,
html body [class*="crm-opportunities-stage-name"],
html body [id^="data-stage-name-"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* (d) skeleton loaders \u2014 Naive UI's 'hr-skeleton' renders a
       background-image linear-gradient driven by --n-color-start /
       --n-color-end CSS variables. GHL inlines those vars as #eee
       and #ddd (light grays). Override the variables AND paint a
       static slate background so the shimmer animation never shows
       light values even in the gap between renders.

       Targeting both '.hr-skeleton' (HighLevel wrapper) and '.n-skeleton'
       (raw Naive UI class) for full coverage across the app. */
html body .hr-skeleton,
html body [class*="hr-skeleton"],
html body .n-skeleton,
html body [class*="n-skeleton"] {
  --n-color-start: var(--reos-slate) !important;
  --n-color-end: var(--reos-steel) !important;
  background-color: var(--reos-slate) !important;
  background-image: none !important;
}

/* The empty-stage "card" wrapper \u2014 multiple skeleton placeholders
   are grouped inside a .crm-opportunities-card-skeleton, which sits
   inside the stage column. Pin to graphite so the column blends in
   even while loading. */
html body .crm-opportunities-card-skeleton,
html body [class*="crm-opportunities-card-skeleton"] {
  background-color: var(--reos-graphite) !important;
}

/* The stage-scrollable container that wraps the whole kanban
   horizontal scroll area. */
html body .stage-scrollable-container,
html body [class*="stage-scrollable-container"],
html body .cardWrapper,
html body [class*="cardWrapper"][class*="crm-opportunities-board"] {
  background-color: var(--reos-graphite) !important;
}

/* 16. BORDERS \u2014 coerce GHL's grey-border utility classes onto our scale */
.border-gray-100,
.border-gray-200,
.border-gray-300,
.border-gray-400 {
  border-color: var(--reos-steel) !important;
}

/* 16e. INLINE LIGHT-NEUTRAL BORDERS \u2014 restored in v0.7.60. v0.7.58
   targeted these correctly; Tim's 'killed right nav' report turned
   out to be that Internal Chat doesn't show the right-side contact
   nav by GHL design (only Team Inbox does). The white outline
   issue persisting was the actual unresolved bug, addressed below
   via a box-shadow kill on Conversations panels (section 16f). */
html body [style*="border: 1px solid rgb(234, 236, 240)"],
html body [style*="border:1px solid rgb(234, 236, 240)"],
html body [style*="border-right: 1px solid rgb(234, 236, 240)"],
html body [style*="border-right:1px solid rgb(234, 236, 240)"],
html body [style*="border-left: 1px solid rgb(234, 236, 240)"],
html body [style*="border-left:1px solid rgb(234, 236, 240)"],
html body [style*="border-top: 1px solid rgb(234, 236, 240)"],
html body [style*="border-top:1px solid rgb(234, 236, 240)"],
html body [style*="border-bottom: 1px solid rgb(234, 236, 240)"],
html body [style*="border-bottom:1px solid rgb(234, 236, 240)"],
html body [style*="border-color: rgb(234, 236, 240)"],
html body [style*="border-color:rgb(234, 236, 240)"],
html body [style*="border-color: #EAECF0"],
html body [style*="border-color:#EAECF0"],
html body [style*="border-color: #eaecf0"],
html body [style*="border-color:#eaecf0"],
/* 16e-2 (v0.8.5): additional inline border colors Tim spotted in
   the conversation thread \u2014 email card uses gray-300 at 50% alpha
   inline (rgba(208,213,221,0.5)), the SMS compose box uses solid
   gray-300 (rgb(208,213,221)). Remap both to steel. */
html body [style*="rgb(208, 213, 221)"],
html body [style*="rgb(208,213,221)"],
html body [style*="rgba(208, 213, 221"],
html body [style*="rgba(208,213,221"],
html body [style*="#D0D5DD"],
html body [style*="#d0d5dd"] {
  border-color: var(--reos-steel) !important;
}

/* 16e-3 (v0.8.5): outgoing chat-bubble border \u2014 GHL paints
   .chat-bubble-* with rgb(234, 239, 252) (a very light blue-gray)
   via class CSS. Remap to steel so the bubble matches the rest
   of the cards in the conversation thread. */
html body [class*="chat-bubble"] {
  border-color: var(--reos-steel) !important;
}

/* 16e-4 (v0.8.7 \u2192 v0.8.10): the chat bubble's tail/pointer. GHL
   builds it from two layers:
   1) .chat-bubble-outbound::after \u2014 a 16x10 pseudo-element behind
      the bubble.
   2) .chat-outbound-hidden / .chat-inbound-hidden \u2014 a 26x25 DIV
      with transform: matrix(0.73, 0.68, -0.68, 0.73, 0, 0) (~43\xB0
      rotation) sitting next to the bubble. This is the visible
      angled tag pointing at the sender avatar.

   Iteration history (Tim's feedback):
   v0.8.7  slate fill on the pseudo  -> white tag gone, but
                                       diagonal gray-200 line still
                                       visible.
   v0.8.8  + box-shadow none on pseudo. Line still there.
   v0.8.9  + slate fill / no shadow on .chat-outbound-hidden
           (the rotated layer with the box-shadow that was the
           actual line). Line gone. But the slate tail now sticks
           out of the bubble as an "ugly spike" against the
           graphite panel, because slate is lighter than graphite.

   v0.8.10: just hide the tail layers entirely. The bubble alone
   already reads as the sender's message; the spike adds nothing
   and Tim called it ugly. display:none on the pseudo and the
   hidden DIV across outbound + inbound variants. */
html body [class*="chat-bubble"]::after,
html body [class*="chat-bubble"]::before,
html body .chat-bubble-outbound::after,
html body .chat-bubble-outbound::before,
html body .chat-bubble-inbound::after,
html body .chat-bubble-inbound::before,
html body .chat-outbound-hidden,
html body .chat-inbound-hidden,
html body [class*="chat-outbound-hidden"],
html body [class*="chat-inbound-hidden"] {
  display: none !important;
  background-color: transparent !important;
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

/* 16g. TAILWIND GRAY-200 SWEEP \u2014 #E5E7EB / rgb(229, 231, 235).
   Tim spotted this hex all over the DevTools computed-styles panel:
   it's Tailwind's gray-200, GHL's default for hairline borders and
   "subtle" surfaces. Visually it reads as near-white on a dark theme.

   The class form (.border-gray-200, .bg-gray-200) is already mapped
   to steel/graphite respectively (sections 16 + 18a). This section
   catches the inline-style cases plus a few stragglers (text-gray-200,
   divide-gray-200, ring-gray-200, SVG fill, Naive UI border tokens).

   Role-based remap:
     border        -> steel
     background    -> graphite
     color (text)  -> bone */

/* Inline border-color in every form */
html body [style*="border: 1px solid rgb(229, 231, 235)"],
html body [style*="border:1px solid rgb(229, 231, 235)"],
html body [style*="border-right: 1px solid rgb(229, 231, 235)"],
html body [style*="border-right:1px solid rgb(229, 231, 235)"],
html body [style*="border-left: 1px solid rgb(229, 231, 235)"],
html body [style*="border-left:1px solid rgb(229, 231, 235)"],
html body [style*="border-top: 1px solid rgb(229, 231, 235)"],
html body [style*="border-top:1px solid rgb(229, 231, 235)"],
html body [style*="border-bottom: 1px solid rgb(229, 231, 235)"],
html body [style*="border-bottom:1px solid rgb(229, 231, 235)"],
html body [style*="border-color: rgb(229, 231, 235)"],
html body [style*="border-color:rgb(229, 231, 235)"],
html body [style*="border-bottom-color: rgb(229, 231, 235)"],
html body [style*="border-bottom-color:rgb(229, 231, 235)"],
html body [style*="border-top-color: rgb(229, 231, 235)"],
html body [style*="border-top-color:rgb(229, 231, 235)"],
html body [style*="border-left-color: rgb(229, 231, 235)"],
html body [style*="border-left-color:rgb(229, 231, 235)"],
html body [style*="border-right-color: rgb(229, 231, 235)"],
html body [style*="border-right-color:rgb(229, 231, 235)"],
html body [style*="border-color: #E5E7EB"],
html body [style*="border-color:#E5E7EB"],
html body [style*="border-color: #e5e7eb"],
html body [style*="border-color:#e5e7eb"] {
  border-color: var(--reos-steel) !important;
}

/* Inline background in every form */
html body [style*="background: rgb(229, 231, 235)"],
html body [style*="background:rgb(229, 231, 235)"],
html body [style*="background-color: rgb(229, 231, 235)"],
html body [style*="background-color:rgb(229, 231, 235)"],
html body [style*="background: #E5E7EB"],
html body [style*="background:#E5E7EB"],
html body [style*="background: #e5e7eb"],
html body [style*="background:#e5e7eb"],
html body [style*="background-color: #E5E7EB"],
html body [style*="background-color:#E5E7EB"],
html body [style*="background-color: #e5e7eb"],
html body [style*="background-color:#e5e7eb"] {
  background-color: var(--reos-graphite) !important;
}

/* Inline color (text) in every form */
html body [style*="color: rgb(229, 231, 235)"],
html body [style*="color:rgb(229, 231, 235)"],
html body [style*="color: #E5E7EB"],
html body [style*="color:#E5E7EB"],
html body [style*="color: #e5e7eb"],
html body [style*="color:#e5e7eb"],
html body [style*="-webkit-text-fill-color: rgb(229, 231, 235)"],
html body [style*="-webkit-text-fill-color:rgb(229, 231, 235)"],
html body [style*="-webkit-text-fill-color: #E5E7EB"],
html body [style*="-webkit-text-fill-color:#E5E7EB"],
html body [style*="-webkit-text-fill-color: #e5e7eb"],
html body [style*="-webkit-text-fill-color:#e5e7eb"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Tailwind text/divide/ring utility variants \u2014 uncommon but they
   exist in GHL's emitted CSS. text-gray-200 -> bone (the color
   is near-white anyway), divide-gray-200 -> steel (child dividers),
   ring-gray-200 -> kill (focus rings don't make sense on dark
   theme; we already use emerald accents for focus). */
html body .text-gray-200,
html body [class*="text-gray-200"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .divide-gray-200 > *,
html body [class*="divide-gray-200"] > * {
  border-color: var(--reos-steel) !important;
}
html body .ring-gray-200,
html body [class*="ring-gray-200"] {
  --tw-ring-color: var(--reos-steel) !important;
}

/* Naive UI border tokens that bake in #E0E0E6 / rgb(224, 224, 230)
   as the default --n-border. That's Naive's flavor of gray-200; on
   our dark theme it shows as a near-white hairline. Remap the
   resolved color on inline-style elements. (The class-driven
   variants are handled in section 12a's n-button overrides.) */
html body [style*="border: 1px solid rgb(224, 224, 230)"],
html body [style*="border:1px solid rgb(224, 224, 230)"],
html body [style*="border-color: rgb(224, 224, 230)"],
html body [style*="border-color:rgb(224, 224, 230)"],
html body [style*="border-color: #E0E0E6"],
html body [style*="border-color:#E0E0E6"],
html body [style*="border-color: #e0e0e6"],
html body [style*="border-color:#e0e0e6"] {
  border-color: var(--reos-steel) !important;
}

/* Untitled-UI gray-200 \u2014 rgb(228, 231, 236) / #E4E7EC. One channel off
   from Tailwind gray-200 (229,231,235), but indistinguishable to the
   eye. GHL ships this as the conversation-card horizontal divider
   color (inline 'border-color: transparent transparent rgb(228, 231,
   236)' on each conversation row). Catch the full set of inline
   forms. */
html body [style*="border: 1px solid rgb(228, 231, 236)"],
html body [style*="border:1px solid rgb(228, 231, 236)"],
html body [style*="border-color: rgb(228, 231, 236)"],
html body [style*="border-color:rgb(228, 231, 236)"],
html body [style*="rgb(228, 231, 236)"],
html body [style*="border-bottom-color: rgb(228, 231, 236)"],
html body [style*="border-top-color: rgb(228, 231, 236)"],
html body [style*="border-left-color: rgb(228, 231, 236)"],
html body [style*="border-right-color: rgb(228, 231, 236)"],
html body [style*="border-color: #E4E7EC"],
html body [style*="border-color:#E4E7EC"],
html body [style*="border-color: #e4e7ec"],
html body [style*="border-color:#e4e7ec"] {
  border-color: var(--reos-steel) !important;
}

/* SVG fill \u2014 add #E5E7EB to the section 16a chart-fill catchall
   for any chart shape painted in Tailwind gray-200. */
html body svg path[fill="#E5E7EB"],
html body svg rect[fill="#E5E7EB"],
html body svg polygon[fill="#E5E7EB"],
html body svg path[fill="#e5e7eb"],
html body svg rect[fill="#e5e7eb"],
html body svg polygon[fill="#e5e7eb"] {
  fill: var(--reos-slate) !important;
}

/* 16h. GHL TEXT-PRIMARY SWEEP \u2014 #101828 / rgb(16, 24, 40).
   GHL's default text color on their light theme: every Vue-rendered
   heading, label, body paragraph, modal title, tab label, stage
   name, etc. ships with inline style="color: rgb(16, 24, 40)". On
   our dark graphite background, that color is nearly invisible
   (very dark navy on slightly-less-dark-navy).

   Same shape as the gray-200 sweep above: match the element's own
   inline style attribute, no descendant cascade (so SVG icons that
   inherit currentColor are not affected). Remap to bone.

   This is the single most impactful broad sweep \u2014 it should fix
   the "where did the text go" effect on dozens of GHL-templated
   surfaces across the app (Opportunities titles, Conversations
   headings, modal titles, settings labels, etc.). */
html body [style*="color: rgb(16, 24, 40)"],
html body [style*="color:rgb(16, 24, 40)"],
html body [style*="color: rgb(16,24,40)"],
html body [style*="color:rgb(16,24,40)"],
html body [style*="color: #101828"],
html body [style*="color:#101828"],
html body [style*="-webkit-text-fill-color: rgb(16, 24, 40)"],
html body [style*="-webkit-text-fill-color:rgb(16, 24, 40)"],
html body [style*="-webkit-text-fill-color: rgb(16,24,40)"],
html body [style*="-webkit-text-fill-color:rgb(16,24,40)"],
html body [style*="-webkit-text-fill-color: #101828"],
html body [style*="-webkit-text-fill-color:#101828"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* SVG fill \u2014 chart shapes / data-vis icons sometimes paint in
   #101828 (e.g. axis labels rendered as path fills). Remap so
   they show as bone on the dark surface. */
html body svg path[fill="#101828"],
html body svg rect[fill="#101828"],
html body svg polygon[fill="#101828"],
html body svg path[fill="#101828"][fill],
html body svg text[fill="#101828"] {
  fill: var(--reos-bone) !important;
}

/* 16f. CONVERSATIONS PANEL BOX-SHADOWS \u2014 .shadow-sm and similar
   Tailwind shadow utilities create a drop-shadow that GHL may have
   customized to render with a light color. On the dark theme that
   reads as a faint white outline around the rounded conversation
   panels (Tim's 'white surround' that persisted after v0.7.58).
   Kill box-shadow on every descendant of #conversations-content
   so panels render flat on the dark surface. Narrow scope to this
   one page so we don't accidentally remove shadows that work
   correctly elsewhere. */
html body #conversations-layout .shadow-sm,
html body #conversations-layout [class*='shadow-sm'],
html body #conversations-layout [class*='shadow-md'],
html body #conversations-layout [class*='shadow-lg'],
html body #conversations-layout [class*='shadow-xl'],
html body #conversations-content .shadow-sm,
html body #conversations-content [class*='shadow-sm'],
html body #conversations-content [class*='shadow-md'],
html body #conversations-content [class*='shadow-lg'],
html body #conversations-content [class*='shadow-xl'],
html body [id*='conversations-content'] .shadow-sm,
html body [id*='conversations-content'] [class*='shadow-sm'],
html body [id*='conversations-layout'] [class*='shadow'],
html body .conversation-list-container,
html body [class*='conversation-list-container'],
html body .inbox-panel,
html body [class*='inbox-panel'] {
  box-shadow: none !important;
  outline: none !important;
}

/* 16f-2. INBOX PANEL \u2014 Conversations left-side menu (folder list,
   accordions, dividers). Diagnosed live via /browse 2026-05-18 when
   Tim expanded the left nav and reported "icons but no text, blue
   icon after click, the whole section is a mess".

   Found via DOM walk:
   1) .menu-text (item labels like "Internal Chat") had inline-ish
      color: rgb(16, 24, 40) = #101828 \u2014 dark text on graphite =
      invisible. Active item ("Team Inbox") had emerald, fine.
   2) .hr-collapse-item__content-wrapper (expanded "My Inbox"
      sub-items: All / Assigned to Me / Followed by Me) had
      color: rgb(52, 64, 84) \u2014 dark gray on dark = also invisible.
      Tim saw three ghosted icon rows.
   3) .divider had bg: rgb(208, 213, 221) light gray, glaring.
   4) .hr-collapse-item__header-extra (right-side chevron on My
      Inbox header) had color: rgb(52, 64, 84) \u2014 invisible.
   5) Blue-after-click: GHL default :focus / :focus-visible state
      on menu rows paints a blue ring/bg.

   Fix: scope all the corrections under .inbox-panel so they don't
   leak elsewhere. Use html body prefix to beat Vue scoped CSS. */

/* Default-state text inside the inbox panel \u2014 beat Vue scoped color */
html body .inbox-panel .menu-text,
html body .inbox-panel .menu-item-content,
html body .inbox-panel .menu-item-content *:not(svg):not(svg *),
html body .inbox-panel .menu-option,
html body .inbox-panel .menu-option > *,
html body .inbox-panel .menu-item:not(.active) .menu-text,
html body .inbox-panel .menu-item:not(.active) .menu-item-content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Active row container \u2014 two variants:
   - EXPANDED (.menu-item-container.active, no .collapsed-item):
     canonical emerald-glow + emerald border (section 11b).
   - COLLAPSED (.menu-item-container.active.collapsed-item):
     no box, no border, just the emerald icon. Matches the
     ACTIVE-ACCENT pattern used on conversation-header icon
     buttons (section 15i) so the icon rail reads consistently:
     ash by default, emerald when selected/hover, no chrome.

   The :not(#__reos_never_id) trick bumps specificity to beat
   the Vue scoped-CSS rule (data-v-19922083 attribute selector). */
html body .inbox-panel .menu-item-container.active:not(.collapsed-item):not(#__reos_never_id) {
  background-color: rgba(15, 181, 126, 0.10) !important;
  border: 1px solid var(--reos-emerald) !important;
  border-radius: 6px !important;
}
html body .inbox-panel .menu-item-container.active.collapsed-item:not(#__reos_never_id) {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

/* Active row text + icon \u2014 emerald to match canonical ACTIVE state. */
html body .inbox-panel .menu-item-container.active .menu-text,
html body .inbox-panel .menu-item-container.active .menu-item-content,
html body .inbox-panel .menu-item-container.active .menu-item-content *:not(svg):not(svg *),
html body .inbox-panel .menu-item-container.active svg,
html body .inbox-panel .menu-item-container.active svg path {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Icons in non-active rows \u2014 ash (muted bone) so they read but don't
   compete with the active emerald accent. */
html body .inbox-panel .menu-item:not(.active) svg,
html body .inbox-panel .menu-item:not(.active) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

/* Accordion (My Inbox / Views) \u2014 kill the slate fill on the wrapper
   so the panel reads as one continuous graphite surface, headers and
   content alike. Header chevron + content sub-items get bone text. */
html body .inbox-panel #accordion-my-inbox,
html body .inbox-panel #views-accordion,
html body .inbox-panel .hr-collapse,
html body .inbox-panel .hr-collapse-item,
html body .inbox-panel .hr-collapse-item__header,
html body .inbox-panel .hr-collapse-item__header--active,
html body .inbox-panel .hr-collapse-item__header-main,
html body .inbox-panel .hr-collapse-item__header-extra,
html body .inbox-panel .hr-collapse-item__content,
html body .inbox-panel .hr-collapse-item__content-wrapper,
html body .inbox-panel .hr-collapse-item__content-inner,
html body .inbox-panel .hr-collapse-item__content-wrap {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--reos-bone) !important;
}

/* All text descendants inside the accordions \u2014 bone so the
   ghosted sub-rows ("All", "Assigned to Me", "Followed by Me",
   "Create view") become readable. svg color gets ash for icons. */
html body .inbox-panel .hr-collapse *:not(svg):not(svg *):not(.menu-item-container.active):not(.menu-item-container.active *) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .inbox-panel .hr-collapse svg,
html body .inbox-panel .hr-collapse svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

/* Divider between sections \u2014 was a glaring light-gray bar.
   Drop to steel so it reads as a subtle separator on graphite. */
html body .inbox-panel .divider {
  background-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

/* HOVER (EXPANDED rows only): subtle slate row highlight + emerald
   icon. No transition so we don't get the post-hover ghost flash. */
html body .inbox-panel .menu-item:not(.active):not(.collapsed-item):hover,
html body .inbox-panel .menu-item-container:not(.active):not(.collapsed-item):hover,
html body .inbox-panel .hr-collapse-item__header:not(.hr-collapse-item__header--active):hover {
  background-color: var(--reos-slate) !important;
  transition: none !important;
}
html body .inbox-panel .menu-item:not(.active):not(.collapsed-item):hover .menu-text,
html body .inbox-panel .menu-item:not(.active):not(.collapsed-item):hover .menu-item-content {
  color: var(--reos-bone) !important;
}
html body .inbox-panel .menu-item:not(.active):not(.collapsed-item):hover svg,
html body .inbox-panel .menu-item:not(.active):not(.collapsed-item):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* COLLAPSED icon-only hover: no box, just emerald icon. Mirrors the
   conversation-header icon-button pattern (section 15i). Covers both
   the .collapsed-item rows (Team Inbox / Internal Chat icons) and the
   .hr-dropdown__trigger-wrapper icons (My Inbox / Views dropdown
   triggers) inside the inbox-panel. */
html body .inbox-panel .collapsed-item,
html body .inbox-panel .collapsed-item:hover,
html body .inbox-panel .hr-dropdown__trigger-wrapper,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  transition: none !important;
}
/* Icon color: ash by default for non-active collapsed items, plus
   the dropdown triggers (which never get an .active class on this
   wrapper). */
html body .inbox-panel .collapsed-item:not(.active) svg,
html body .inbox-panel .collapsed-item:not(.active) svg path,
html body .inbox-panel .collapsed-item:not(.active) i,
html body .inbox-panel .hr-dropdown__trigger-wrapper svg,
html body .inbox-panel .hr-dropdown__trigger-wrapper svg path,
html body .inbox-panel .hr-dropdown__trigger-wrapper i {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  transition: none !important;
}
/* Hover: icon turns emerald, no background change. */
html body .inbox-panel .collapsed-item:hover svg,
html body .inbox-panel .collapsed-item:hover svg path,
html body .inbox-panel .collapsed-item:hover i,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover svg,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover svg path,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover i {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active collapsed item icon stays emerald (also covered above by
   the generic .menu-item-container.active svg rule, but explicit
   here for clarity). */
html body .inbox-panel .collapsed-item.active svg,
html body .inbox-panel .collapsed-item.active svg path,
html body .inbox-panel .collapsed-item.active i {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* FOCUS: kill the blue post-click ring that GHL / Naive paints on
   menu rows and accordion headers. We rely on hover + active states
   for visual feedback, not a focus ring. */
html body .inbox-panel .menu-item:focus,
html body .inbox-panel .menu-item:focus-visible,
html body .inbox-panel .menu-item-container:focus,
html body .inbox-panel .menu-item-container:focus-visible,
html body .inbox-panel .hr-collapse-item:focus,
html body .inbox-panel .hr-collapse-item:focus-visible,
html body .inbox-panel .hr-collapse-item__header:focus,
html body .inbox-panel .hr-collapse-item__header:focus-visible,
html body .inbox-panel button:focus,
html body .inbox-panel button:focus-visible,
html body .inbox-panel [role='button']:focus,
html body .inbox-panel [role='button']:focus-visible,
html body .inbox-panel a:focus,
html body .inbox-panel a:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border-color: transparent !important;
}

/* "Create view" link inside Views accordion \u2014 keep emerald to
   signal it's an action, but make sure it's not eaten by the
   bone-everything sweep above. */
html body .inbox-panel .views-menu-content a,
html body .inbox-panel .views-menu-content button,
html body .inbox-panel #views-accordion a,
html body .inbox-panel #views-accordion button {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* Right-edge collapse chevron button \u2014 small handle on the panel's
   right border. Make sure it sits on graphite with bone icon. */
html body .inbox-panel [class*='collapse-toggle'],
html body .inbox-panel [class*='panel-toggle'],
html body .inbox-panel [class*='expand-button'] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
html body .inbox-panel [class*='collapse-toggle']:hover,
html body .inbox-panel [class*='panel-toggle']:hover,
html body .inbox-panel [class*='expand-button']:hover {
  background-color: var(--reos-slate) !important;
  color: var(--reos-emerald) !important;
}

/* hr-tooltip / hr-popover-shared (collapsed-icon labels: "My Inbox",
   "Internal Chat", "Views", etc.) \u2014 Tim wants the classic
   conversational popup look from the GenieREI version: solid dark
   pill with rounded corners and a small triangle pointing at the
   icon being hovered.

   ONLY the outer wrapper gets bg + padding + radius. Inner content
   layers are transparent \u2014 otherwise bg + padding stacks on three
   nested elements and the tooltip balloons to ~3x normal size
   (Tim's "oversized box" feedback from v0.7.94/95). */
html body .hr-tooltip,
html body .hr-tooltip--dark,
html body .hr-popover-shared,
html body .hr-popover-shared--show-arrow {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
  color: var(--reos-bone) !important;
  border: none !important;
  border-radius: 6px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
  transition: none !important;
  padding: 4px 8px !important;
}
/* Inner content layers \u2014 transparent + no padding so they don't
   add a second/third pill inside the outer one. */
html body .hr-tooltip .hr-popover__content,
html body .hr-tooltip .hr-tooltip__content,
html body .hr-popover-shared .hr-popover__content,
html body .hr-popover-shared .hr-tooltip__content,
html body .hr-text.hr-tooltip__content {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  transition: none !important;
}
/* Arrow: only the .hr-popover-arrow itself (the 12x12 triangle
   element) gets the obsidian fill. The .hr-popover-arrow-wrapper
   spans the full popover width and would paint a big obsidian bar
   if filled (oversized look). Wrapper stays transparent. */
html body .hr-popover-arrow {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}
html body .hr-popover-arrow-wrapper {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}

/* 16f-3. CONVERSATION LIST INTERACTIVE ELEMENTS \u2014 apply the
   canonical icon-rail pattern (ash / emerald / no box) to:
   - filter / sort icons in the header
   - Unread / All / Recents / Starred tab buttons
   - individual conversation rows (hover blend, emerald-glow active)

   Tim flagged the lingering slate hover state on these \u2014 every
   substring hover rule in section 18a-1 ([class*='EFF4FF']:hover,
   [class*='hover:bg-gray-50']:hover, etc.) was catching the
   Tailwind hover-bg classes on rows + tabs + icons and painting
   slate. Scope an override under .conversation-list-container so
   the slate hover doesn't fire on these interactive elements.

   Specificity: html body .conversation-list-container [...]:hover
   = (0,3,1+) beats the (0,2,2) of html body [class*='X']:hover. */

/* Filter / sort icon buttons in the header (#conv-filter-button-icon,
   #conv-sort-button-icon). Plain ash icon, emerald on hover, no bg. */
html body .conversation-list-container #conv-filter-button-icon,
html body .conversation-list-container #conv-sort-button-icon,
html body .conversation-list-container #conv-filter-button-icon:hover,
html body .conversation-list-container #conv-sort-button-icon:hover {
  background-color: transparent !important;
  background: transparent !important;
  transition: none !important;
}
html body .conversation-list-container #conv-filter-button-icon svg,
html body .conversation-list-container #conv-filter-button-icon svg path,
html body .conversation-list-container #conv-sort-button-icon svg,
html body .conversation-list-container #conv-sort-button-icon svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .conversation-list-container #conv-filter-button-icon:hover svg,
html body .conversation-list-container #conv-filter-button-icon:hover svg path,
html body .conversation-list-container #conv-sort-button-icon:hover svg,
html body .conversation-list-container #conv-sort-button-icon:hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Unread / All / Recents / Starred tab buttons. They live inside
   the .border-1.border-solid.border-gray-200.rounded-lg strip.
   Default ash, emerald on hover and when active. Active state has
   class .border-b-blue-600 (Tailwind); replace blue with emerald. */
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover {
  background-color: transparent !important;
  background: transparent !important;
  transition: none !important;
}
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button svg,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button svg path,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button span {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
/* Hover: emerald icon + label */
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover svg,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover svg path,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover span {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active tab (has .border-b-blue-600 class): emerald underline +
   emerald icon + emerald label.

   Specificity note: the default ash rule above is
   .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button svg
   = (0,3,4). To beat it, this active rule chains all four class
   selectors (border-gray-200, rounded-lg, the active border-b-blue-600
   on the button, plus the button type) reaching (0,4,4) and winning. */
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button[class*='border-b-blue-600'] {
  border-bottom-color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button[class*='border-b-blue-600'] svg,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button[class*='border-b-blue-600'] svg path,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button[class*='border-b-blue-600'] span {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Tab strip outer wrapper border-gray-200 \u2192 steel (handled by
   section 16 already, but make sure the outer rounded-lg radius
   reads as a deliberate group). The strip itself stays graphite. */
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] {
  background-color: transparent !important;
  border-color: var(--reos-steel) !important;
}

/* Individual conversation rows \u2014 hover should BLEND with the panel
   surface (graphite), not paint a slate card.
   Match the row inner button (the .transition-colors.cursor-pointer
   wrapper that ships with bg-[#F7F9FD] hover:bg-[#EFF4FF]). */
html body [data-conversation-id]:hover,
html body [data-conversation-id]:hover [type='button'],
html body [data-conversation-id] [type='button']:hover {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  transition: none !important;
}

/* Active conversation row (data-is-active="true"). GHL inlines
   'border: 1px solid rgb(82, 139, 255)' (a primary blue) plus a
   4px radius on the inner button. Remap the blue to emerald so
   the active row signals as a canonical emerald-bordered card. */
html body [data-conversation-id][data-is-active="true"] > [type='button'],
html body [data-conversation-id][data-is-active="true"] [type='button'] {
  border-color: var(--reos-emerald) !important;
}
/* Generic remap: any inline border with that exact blue \u2192 emerald.
   Catches future widgets that use the same Tailwind primary blue. */
html body [style*="rgb(82, 139, 255)"] {
  border-color: var(--reos-emerald) !important;
}

/* Bulk-select toolbar ("Select all" bar) \u2014 class bg-[#F7F9FD] gets
   coerced to graphite by section 18a-1's substring rule. Force
   transparent so it blends with the panel rather than reading as
   a stripe. */
html body [data-name="bulk-select-bar"] {
  background-color: transparent !important;
  background: transparent !important;
}

/* Tailwind bg-inherit class \u2014 should "inherit parent's bg" per its
   own name. v0.7.96 and earlier had coerceDarkDropdowns rewrite
   these to slate inline because graphite (inherited from parent)
   reads as "darker than slate" to the coercer. Tim hit this with
   the Team Inbox sticky header (.sticky.top-0.z-10.bg-inherit) \u2014
   the slate inline made it look like a blocky cheap bar on the
   graphite conversations list. Pin to transparent so it actually
   inherits; the coercer also skips bg-inherit now (see runtime). */
html body [class*="bg-inherit"],
html body .bg-inherit {
  background-color: transparent !important;
  background: transparent !important;
}

/* Panel + layout container :hover override \u2014 section 18a-1 paints
   ANY [class*="ECEEF2"]:hover and [class*="F7F9FD"]:hover slate.
   That catches the inbox-panel, #conversations-layout, the inner
   conversation-list outer panel (bg-[#F7F9FD]), the main
   #conversation-panel chat pane, and any other Tailwind-bg surface
   on the Conversations page. When the cursor lands on them they
   shift to a lighter slate while the inner content (rows,
   FORCE_RULE-painted headers, etc.) stay graphite \u2014 the inner
   content then reads as a dark "surround" against the now-lighter
   panel (Tim's complaint at v0.7.91, recurring on the conv-list
   panel hover at v0.8.2).

   Pin every Tailwind bg-[#F7F9FD] / bg-[#ECEEF2] container to
   graphite on hover. Triple class-chain on the attribute selector
   bumps specificity to (0,4,2), beating the (0,2,2) of the
   substring slate rule even when our override sits earlier in
   source order. Same trick still applies to .inbox-panel and
   #conversations-layout for safety. */
html body .inbox-panel.inbox-panel:hover,
html body #conversations-layout#conversations-layout:hover,
html body #conversations-content:hover,
html body #conversation-panel:hover,
html body #conversations-panel:hover,
html body #conversations-workspace:hover,
html body #conversations-list:hover,
html body [class*="F7F9FD"][class*="F7F9FD"][class*="F7F9FD"]:hover,
html body [class*="ECEEF2"][class*="ECEEF2"][class*="ECEEF2"]:hover,
html body [class*="f7f9fd"][class*="f7f9fd"][class*="f7f9fd"]:hover,
html body [class*="eceef2"][class*="eceef2"][class*="eceef2"]:hover {
  background-color: var(--reos-graphite) !important;
}

/* 16a. SVG CHART FILLS \u2014 GHL bakes light-neutral hexes as SVG fill="..."
   presentation attributes on chart shapes (funnel segment backgrounds,
   axis dividers, donut placeholder rings, etc.). Presentation attributes
   lose to CSS, so an !important CSS fill rule overrides them.

   Catches the common GHL/Tailwind light-neutral palette:
     #EAECF0 = neutral-200 / gray-200  (funnel segment bg \u2014 observed)
     #F2F4F7 = neutral-100 / gray-100
     #D0D5DD = neutral-300 / gray-300
     #F9FAFB = neutral-50  / gray-50
     #EEF1F4 = sometimes used as alt-neutral

   Maps every light SVG fill to slate so dashboard chart surfaces read
   on the dark theme. Scoped to svg path / rect / polygon so icons that
   use these colors as stroke-only or text aren't affected. */
html body svg path[fill="#EAECF0"],
html body svg rect[fill="#EAECF0"],
html body svg polygon[fill="#EAECF0"],
html body svg path[fill="#eaecf0"],
html body svg rect[fill="#eaecf0"],
html body svg polygon[fill="#eaecf0"],
html body svg path[fill="#F2F4F7"],
html body svg rect[fill="#F2F4F7"],
html body svg polygon[fill="#F2F4F7"],
html body svg path[fill="#f2f4f7"],
html body svg rect[fill="#f2f4f7"],
html body svg polygon[fill="#f2f4f7"],
html body svg path[fill="#D0D5DD"],
html body svg rect[fill="#D0D5DD"],
html body svg polygon[fill="#D0D5DD"],
html body svg path[fill="#d0d5dd"],
html body svg rect[fill="#d0d5dd"],
html body svg polygon[fill="#d0d5dd"],
html body svg path[fill="#F9FAFB"],
html body svg rect[fill="#F9FAFB"],
html body svg polygon[fill="#F9FAFB"],
html body svg path[fill="#f9fafb"],
html body svg rect[fill="#f9fafb"],
html body svg polygon[fill="#f9fafb"],
html body svg path[fill="#EEF1F4"],
html body svg rect[fill="#EEF1F4"],
html body svg polygon[fill="#EEF1F4"],
html body svg path[fill="#eef1f4"],
html body svg rect[fill="#eef1f4"],
html body svg polygon[fill="#eef1f4"] {
  fill: var(--reos-slate) !important;
}

/* Donut/pie chart segment outlines. Stage Distribution and similar
   donut charts give each colored segment stroke="#fff" + stroke-width=2
   to create a separator between segments. On dark theme that reads as
   a stack of bright white outlines around every segment.
   Remap to graphite so the separator matches the chart card surface
   and the segments look like they have a subtle gap between them
   instead of a glowing white border. Scoped to chart-container so
   icon strokes elsewhere aren't touched. */
html body .chart-container svg path[stroke="#fff"],
html body .chart-container svg path[stroke="#FFF"],
html body .chart-container svg path[stroke="#ffffff"],
html body .chart-container svg path[stroke="#FFFFFF"],
html body .chart-container svg path[stroke="white"],
html body [class*='chart-container'] svg path[stroke="#fff"],
html body [class*='chart-container'] svg path[stroke="#FFF"],
html body [class*='chart-container'] svg path[stroke="#ffffff"],
html body [class*='chart-container'] svg path[stroke="#FFFFFF"],
html body [class*='chart-container'] svg path[stroke="white"] {
  stroke: var(--reos-graphite) !important;
}

/* 16d. CHART TOOLTIPS \u2014 REVERTED in v0.7.54. The blind fix in v0.7.53
   broke page load (likely the very-long [style*='...'] FORCE_RULE
   selector list slowing applyForceRules on every MutationObserver
   tick, or one of the [class*='tooltip-container'] / 'tooltip-content'
   substring matchers matching a critical app wrapper and painting
   it graphite + bordered. Either way: page wouldn't load.
   Need a different approach to the chart tooltip white-flash. */

/* 16b. CHART TEXT \u2014 funnel-segment percentages, axis labels, donut center
   readouts, legend text. SVG <text>/<tspan> elements inside dashboard
   chart cards inherit their color from GHL's baked-in dark fills (e.g.
   #101828, #344054, #1D2939) \u2014 invisible against slate funnel segments.
   Also covers HTML text overlays in case the chart engine layers <div>
   labels on top of SVG via foreignObject or absolute positioning.

   Scope: chart containers + hl-card surfaces only. The .hl-card-header
   text is already styled by the heading rules above; the body chart
   text needs its own pass because chart libraries set fill/color inline
   per data label.

   v0.7.51 disabled this as a click-handler diagnostic. Tim confirmed
   the click-only-on-data-rows behavior is by design (empty rows never
   had click handlers), so this rule is NOT the cause and is restored. */
html body .chart-container svg text,
html body .chart-container svg tspan,
html body [class*='chart-container'] svg text,
html body [class*='chart-container'] svg tspan,
html body .hl-card svg text,
html body .hl-card svg tspan,
html body [class*='hl-card'] svg text,
html body [class*='hl-card'] svg tspan {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}
/* HTML text overlays sometimes used by chart libs (D3 / Highcharts /
   Vue chart wrappers) for labels positioned on top of SVG shapes.
   Scoped to the chart body so we don't fight the .hl-card-header
   styling. */
html body .chart-container .recharts-text,
html body .chart-container [class*='chart-label'],
html body .chart-container [class*='funnel-label'],
html body .chart-container [class*='axis-label'],
html body .chart-container [class*='data-label'],
html body [class*='chart-container'] [class*='chart-label'],
html body [class*='chart-container'] [class*='funnel-label'],
html body [class*='chart-container'] [class*='axis-label'],
html body [class*='chart-container'] [class*='data-label'] {
  color: var(--reos-bone) !important;
  fill: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 16c. CHART HOVER \u2014 investigation pending. v0.7.49 attempted a
   transition kill on chart-container SVG content + FORCE_RULE bone
   fill on chart text, but the change broke the chart's click-to-open
   handler (the row's onclick that opens stage details) AND did not
   fix the white-flash-to-black artifact. Reverted in v0.7.50.

   Likely cause of the regression: aggressive inline-style mutations
   on every MutationObserver tick interfere with the chart lib's
   reactive update path. Need a more targeted fix \u2014 probably
   debouncing the chart-text FORCE_RULE, or scoping more narrowly,
   or using a different mechanism entirely (override at the chart
   library config level if possible). */

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

/* 18a-fc-page (v0.8.27). The Calendars page outer wrapper
   #fc-calendar-container-v2 ships with class 'h-screen flex relative'
   and ZERO theme. Computed bg = pure white, 1695x992 \u2014 the entire
   page surface is white underneath everything. Nested elements
   paint over visually but the wrapper still flashes white on
   first paint and on any layout shift.

   Pin to graphite at ID-level specificity. */
html body #fc-calendar-container-v2,
html body #fc-calendar-container-v2.h-screen,
html body div#fc-calendar-container-v2 {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* #today-button (v0.8.27 \u2192 v0.8.33). FullCalendar's Today button.
   v0.8.27 pinned it permanently emerald to mark it as 'active'.
   Tim hated the result \u2014 said it 'looks like shit'.

   v0.8.33: match the Manage view treatment instead \u2014 steel border
   + bone text in default state, emerald lift only on hover. Reads
   as a quiet clickable button by default, signals affordance on
   hover. Override Naive's CSS variables AND the computed styles
   so neither the inline n-border nor coercer slate inline wins.

   ID-level specificity beats both the Naive default rules and
   section 18a-fc-* sweep. */
html body #today-button,
html body button#today-button {
  background-color: transparent !important;
  background: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  --n-color: transparent !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
}
html body #today-button:hover,
html body button#today-button:hover {
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
}
html body #today-button:hover .n-button__content,
html body #today-button:hover div,
html body button#today-button:hover .n-button__content,
html body button#today-button:hover div {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Kill the .n-base-wave ripple overlay on the Today button.
   Section ~793 paints every .n-button .n-base-wave emerald-glow
   so that the click ripple is on-brand, but this button's wave
   element is rendering at opacity 1 (Naive UI normally toggles
   it with animation). Net effect: a permanent emerald tint
   inside the Today button box (Tim's 'greenish overlay').
   Hide it entirely so the button reads as a flat steel-bordered
   button at rest. */
html body #today-button .n-base-wave,
html body button#today-button .n-base-wave {
  display: none !important;
  background-color: transparent !important;
  background: transparent !important;
  opacity: 0 !important;
}

/* .fc-timegrid-now-indicator-line / -arrow (v0.8.27 \u2192 v0.8.29).
   FullCalendar's 'current time' horizontal line ships pure red
   rgb(255, 0, 0) via border-top-color (line) + border-color
   (arrow tip). Tim couldn't see it; wants brand --reos-crimson.

   v0.8.28 fixed the color but the line was still invisible \u2014
   diagnosed via /browse elementsFromPoint: the .fc-timegrid-slot-lane
   TD cells stack ON TOP of the indicator-container (z-index auto)
   and the TDs' transparent fill let the graphite-bg TABLE
   beneath them show through, covering the line. v0.8.29 lifts
   the indicator + container to z-index 100 so the line + arrow
   render on top of the grid.

   Specificity bump (:not() stack) still needed to beat section
   18a-fc-calendar's [class*='fc-'] slate-border sweep. */
html body .fc-timegrid-now-indicator-line:not(#__reos_never_id):not(#__reos_also_never),
html body [class*="fc-timegrid-now-indicator-line"]:not(#__reos_never_id):not(#__reos_also_never) {
  border-color: var(--reos-crimson) !important;
  border-top-color: var(--reos-crimson) !important;
  border-bottom-color: var(--reos-crimson) !important;
  /* FullCalendar uses border-width: 1px for the line. Bump to 2
     so it reads better against the dark grid. */
  border-width: 2px !important;
  border-top-width: 2px !important;
  z-index: 100 !important;
}
html body .fc-timegrid-now-indicator-arrow:not(#__reos_never_id):not(#__reos_also_never),
html body [class*="fc-timegrid-now-indicator-arrow"]:not(#__reos_never_id):not(#__reos_also_never) {
  border-color: var(--reos-crimson) !important;
  border-top-color: var(--reos-crimson) !important;
  border-right-color: var(--reos-crimson) !important;
  border-bottom-color: var(--reos-crimson) !important;
  border-left-color: var(--reos-crimson) !important;
  z-index: 100 !important;
}
/* Container needs lifting too \u2014 it parents the line/arrow and
   sets the stacking context. */
html body .fc-timegrid-now-indicator-container:not(#__reos_never_id):not(#__reos_also_never),
html body [class*="fc-timegrid-now-indicator-container"]:not(#__reos_never_id):not(#__reos_also_never) {
  z-index: 100 !important;
}

/* 18a-fc-tables (v0.8.30). FullCalendar's inner <table> elements
   are painted graphite by section 18a-flash-global / FORCE_RULE
   (everything not transparent in the calendar inherits the page
   graphite). The slot-grid TABLE then becomes an opaque sheet
   that COVERS the now-indicator line \u2014 Tim's reproducible 'line
   not visible' bug.

   Solution: paint .fc table backgrounds transparent. Slots stay
   visible via the graphite page parent, but nothing in the
   calendar's internal table chrome blocks the absolutely-
   positioned now-indicator. */
html body .fc table:not(#__reos_never_id),
html body .fc thead:not(#__reos_never_id),
html body .fc tbody:not(#__reos_never_id),
html body .fc tr:not(#__reos_never_id),
html body [class*="fc-timegrid"] table:not(#__reos_never_id),
html body [class*="fc-scrollgrid"] table:not(#__reos_never_id),
html body [class*="fc-daygrid"] table:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

/* 18a-smartlist-tabs (v0.8.37 \u2192 v0.8.38). The Contacts smart-list
   page has a tabs bar (.d-flex.bar) with .d-flex.view.cursor-pointer
   children. The active tab gets a class .active AND already has a
   ::after pseudo painting an underline (bg: rgb(0,78,235), GHL
   primary blue).

   v0.8.37 added our own border-bottom emerald on .view.active AND
   .view-label, which left THREE lines stacked: the original blue
   pseudo + two emerald borders. Tim called it 'awful'.

   v0.8.38: don't add any border-bottom. Just recolor the existing
   ::after pseudo emerald. Plus keep the text-color treatment
   (ash default, emerald hover/active). */
html body .d-flex.view,
html body .d-flex.view .view-label,
html body .d-flex.view.cursor-pointer,
html body .d-flex.view.cursor-pointer .view-label {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  background-color: transparent !important;
  background: transparent !important;
  transition: none !important;
}
/* Hover: inactive tab \u2192 emerald text. */
html body .d-flex.view:hover,
html body .d-flex.view:hover .view-label,
html body .d-flex.view.cursor-pointer:hover,
html body .d-flex.view.cursor-pointer:hover .view-label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Active: emerald text. The ::after pseudo (next rule) supplies
   the single emerald underline. */
html body .d-flex.view.active,
html body .d-flex.view.active .view-label,
html body .d-flex.view.cursor-pointer.active,
html body .d-flex.view.cursor-pointer.active .view-label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
}
/* The existing GHL ::after underline (was bg rgb(0,78,235) blue)
   becomes emerald. This is the ONE line under the active tab. */
html body .d-flex.view.active::after,
html body .d-flex.view.cursor-pointer.active::after {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

/* 18a-pipeline-ribbon-count (v0.8.40 \u2192 v0.8.41). The contact
   count pill on the contacts smart-list page (.pipeline-ribbon
   .count, content '42 Contacts') was painted slate-bg + bone-text
   inline by coerceDarkDropdowns. v0.8.40 skipped the coercer
   which cleared BOTH inline writes, exposing Vue's scoped color
   (which renders blue). Tim wanted bone, not blue.

   Pin color bone explicitly so the CSS holds after the inline
   clear. */
html body .pipeline-ribbon .count,
html body [class*="pipeline-ribbon"] .count {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-add-smart (v0.8.39). The 'Add smart list' button's + icon
   ships with stroke='black' as a hardcoded SVG attribute on the
   path (M12 5V19M5 12H19). Other view-tab icons use stroke=
   'currentColor' so they inherit from the .view-label color
   remap, but black is a presentation attribute that wins against
   normal CSS unless our rule targets the same property.

   Paint it brand blue (matches the 'info / clickable' convention
   from section 15a-info-blue-text + section 15a-blue badges).
   Scoped to .d-flex.bar (the smartlist bar) so we don't affect
   other black-stroke SVGs elsewhere. */
html body .d-flex.bar svg path[stroke="black"],
html body .d-flex.bar svg path[stroke="#000"],
html body .d-flex.bar svg path[stroke="#000000"] {
  stroke: var(--reos-blue) !important;
}

/* 18a-views-bar-borders (v0.8.61). Two gray-200 lines on the
   contacts smart-list bar (#views-bar.d-flex.bar-parent):
     1) Bottom border below the entire bar (separates the
        smartlist tabs row from the Tabulator header below).
     2) Vertical divider between .d-flex.lists (the smart-list
        group) and the '+ Add smart list' container on the right.

   Section 16's plain .border-gray-200 \u2192 steel doesn't catch
   these because the lines come from #views-bar's own Vue
   scoped CSS (no .border-gray-200 utility class on the
   element). Target the bar structure directly with ID-level
   specificity so we beat Vue's (0,1,0) scoped rules. */
html body #views-bar:not(#__reos_never_id),
html body #views-bar:not(#__reos_never_id) *,
html body .d-flex.bar-parent:not(#__reos_never_id),
html body .d-flex.bar-parent:not(#__reos_never_id) > *,
html body .d-flex.bar-parent:not(#__reos_never_id) .d-flex.bar,
html body .d-flex.bar-parent:not(#__reos_never_id) .d-flex.lists,
html body .d-flex.bar:not(#__reos_never_id),
html body .d-flex.bar:not(#__reos_never_id) > *,
html body .d-flex.lists:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-tag-pills (v0.8.62). Tag-list pills throughout the app (the
   right-side TAGS panel on contact detail, contact list tag cells,
   etc.) ship with inline styles like:
     style="height: 24px; border-radius: 16px; padding: 2px 8px;
            background: rgb(242, 244, 247);
            color: rgb(144, 152, 163) !important;
            -webkit-text-fill-color: rgb(144, 152, 163) !important;"

   The bg rgb(242, 244, 247) = #F2F4F7 (Tailwind gray-100) reads as
   a bright white pill on the dark theme. The text rgb(144, 152, 163)
   = #9098A3 is already our --reos-ash, but ash-on-white is moot
   once we flip the bg.

   Substring-match the inline bg so we catch tag pills wherever GHL
   renders them, and re-paint to match the '+1' overflow pill
   alongside (graphite-ish bg + light text). Use bone for text (not
   ash) so contrast pops on slate. */
html body [style*="background: rgb(242, 244, 247)"]:not(#__reos_never_id),
html body [style*="background:rgb(242, 244, 247)"]:not(#__reos_never_id),
html body [style*="background: rgb(242,244,247)"]:not(#__reos_never_id),
html body [style*="background:rgb(242,244,247)"]:not(#__reos_never_id),
html body [style*="background-color: rgb(242, 244, 247)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(242, 244, 247)"]:not(#__reos_never_id),
html body [style*="background-color: rgb(242,244,247)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(242,244,247)"]:not(#__reos_never_id),
html body [style*="background: #F2F4F7"]:not(#__reos_never_id),
html body [style*="background:#F2F4F7"]:not(#__reos_never_id),
html body [style*="background: #f2f4f7"]:not(#__reos_never_id),
html body [style*="background:#f2f4f7"]:not(#__reos_never_id) {
  background: var(--reos-slate) !important;
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}

/* 18a-info-banner (v0.8.63). Inline info banner inside the
   delete-contact confirmation modal:
     "(i)  Deleted contacts can be restored within 2 months"

   The banner ships as:
     <div class="..."><svg .../><p class="ui-text-sm-normal">...</p></div>
   with a light-blue / light-gray bg that reads as a bright white
   strip on the dark theme, and faded text inside that's nearly
   invisible.

   Two paths:
   1) Structural: any wrapper that has BOTH an svg/i sibling AND a
      <p class="ui-text-sm-normal"> child looks like an info banner.
      Repaint bg \u2192 graphite (one shade up from modal slate), border
      \u2192 steel, text \u2192 bone.
   2) Defensive: also paint the <p> + its descendants directly so the
      inline -webkit-text-fill-color doesn't bleed back through. */
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id),
html body div:has(> p.ui-text-sm-normal):has(> i):not(#__reos_never_id),
html body div:has(> p.ui-text-sm-normal):has(> [class*="icon"]):not(#__reos_never_id),
html body section:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

/* Icon color inside the banner \u2014 flip muted gray \u2192 ash so the
   info glyph reads on graphite. */
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg,
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg path,
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg circle {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

/* Text inside the banner \u2014 bone for readability on graphite. */
html body div:has(> svg) > p.ui-text-sm-normal:not(#__reos_never_id),
html body div:has(> i) > p.ui-text-sm-normal:not(#__reos_never_id),
html body div:has(> [class*="icon"]) > p.ui-text-sm-normal:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  opacity: 1 !important;
}

/* 18a-icon-primary (v0.8.64). The .icon.icon-primary circular badge
   on the Billing \u2192 Payment Methods card holds the bank-account
   glyph. GHL ships it as a white circle with a navy/dark bank icon.
   Our coercer remaps the BG to slate (visible in the inline
   background-color: rgb(26, 31, 40)), but the SVG renders with
   stroke="currentColor" inheriting from inline color: rgb(237, 238,
   240) (bone) \u2014 so the bank lines are bone, the circle is slate.

   On the dark theme, the "big white circle" Tim describes is the
   PARENT card wrapper (the payment method tile) still painting
   white behind the slate-circle icon. Repaint the icon circle to
   slate explicitly + flip the bank SVG strokes to brand blue. */
html body .icon.icon-primary,
html body div.icon.icon-primary,
html body span.icon.icon-primary,
html body [class*="icon-primary"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: var(--reos-blue) !important;
}
html body .icon.icon-primary svg,
html body .icon.icon-primary svg path,
html body .icon.icon-primary svg circle,
html body .icon.icon-primary svg rect,
html body .icon.icon-primary svg line,
html body [class*="icon-primary"]:not(#__reos_never_id) svg,
html body [class*="icon-primary"]:not(#__reos_never_id) svg path,
html body [class*="icon-primary"]:not(#__reos_never_id) svg circle {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: none !important;
}

/* The PARENT card wrapper around .icon-primary on the Payment
   Methods card. Targeting the immediate parent via :has() so any
   light bg on the card gets repainted graphite. */
html body div:has(> .icon.icon-primary):not(#__reos_never_id),
html body div:has(> div.icon.icon-primary):not(#__reos_never_id) {
  background-color: transparent !important;
}

/* 18a-billing-cancel (v0.8.64). The Cancel button on the Billing
   Details modal footer (#BillingDetailsFooter-btn-negative-action)
   ships with Naive UI inline variables in GHL blue:
     --n-text-color: rgba(52, 64, 84, 1)    -- dark gray
     --n-text-color-hover: #004EEB          -- GHL blue
     --n-border: 1px solid rgb(224, 224, 230)
   Section 7's .n-button rule pins the right vars in our stylesheet,
   but Naive's inline vars (no !important) STILL win over our
   stylesheet !important when set inline on the button element.
   That made the hover go GHL-blue + the border stay gray.

   Bump to ID-level specificity (:not(#__reos_never_id)) so we beat
   Vue scoped CSS, and pin the inline-style hover-text + border
   colors directly. Scoped to default-type so we don't disturb
   primary/error/success variants. */
html body .n-button.n-button--default-type:not(#__reos_never_id),
html body button.n-button.n-button--default-type:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-cool-gray) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id):hover .n-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* :focus and :active stay on the resting palette \u2014 no green tint
   left behind after click / when modal autofocuses the button.
   Pin bg/text/border explicitly so Naive UI's focus var doesn't
   bleed emerald-glow back through. */
html body .n-button.n-button--default-type:not(#__reos_never_id):focus,
html body .n-button.n-button--default-type:not(#__reos_never_id):active,
html body .n-button.n-button--default-type:not(#__reos_never_id):focus-visible {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-cool-gray) !important;
  outline: none !important;
  box-shadow: none !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id):focus .n-button__content,
html body .n-button.n-button--default-type:not(#__reos_never_id):active .n-button__content,
html body .n-button.n-button--default-type:not(#__reos_never_id):focus-visible .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id) .n-button__border,
html body .n-button.n-button--default-type:not(#__reos_never_id) .n-button__state-border {
  border: 1px solid var(--reos-cool-gray) !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id):hover .n-button__border,
html body .n-button.n-button--default-type:not(#__reos_never_id):hover .n-button__state-border {
  border: 1px solid var(--reos-emerald) !important;
}
html body .n-button.n-button--default-type:not(#__reos_never_id):focus .n-button__border,
html body .n-button.n-button--default-type:not(#__reos_never_id):focus .n-button__state-border,
html body .n-button.n-button--default-type:not(#__reos_never_id):active .n-button__border,
html body .n-button.n-button--default-type:not(#__reos_never_id):active .n-button__state-border {
  border: 1px solid var(--reos-cool-gray) !important;
}
/* Kill the emerald-glow wave ripple inside default-type buttons \u2014
   that's the lingering "muted green" patch Tim sees after click. */
html body .n-button.n-button--default-type:not(#__reos_never_id) .n-base-wave {
  background: transparent !important;
  opacity: 0 !important;
  display: none !important;
}

/* 18a-checkboxes (v0.8.51 \u2192 v0.8.53). Tim's spec for checkboxes
   GLOBALLY:
   - Unchecked: slate bg + steel border
   - Checked: brand --reos-blue bg + matching border + bone check
   - No hover or focus state (long lists)

   Three families to cover:
   1) Native <input type='checkbox'>          \u2014 section below
   2) Naive UI .n-checkbox                    \u2014 CSS-variable driven
   3) HR (GHL) .hr-checkbox                   \u2014 same model as Naive
*/

/* (2) + (3) Naive UI / HR checkboxes \u2014 both use --n-color +
   --n-color-checked CSS variables on the wrapper. Override the
   vars + paint the .{n,hr}-checkbox-box__border directly so we
   don't depend on Naive's internal cascade order. */
html body .n-checkbox,
html body .hr-checkbox,
html body [class*="n-checkbox"],
html body [class*="hr-checkbox"] {
  /* v0.8.82: unchecked box bg \u2192 steel (was slate). Slate is the
     same shade as most modal/page surfaces \u2014 the box disappeared
     into the bg. Steel is one shade lighter so the unchecked
     box reads against the dark surface. Checked stays brand
     blue. Border becomes cool-gray to keep the outline visible
     against the new lighter bg. */
  --n-color: var(--reos-steel) !important;
  --n-color-checked: var(--reos-blue) !important;
  --n-color-table: var(--reos-steel) !important;
  --n-color-table-modal: var(--reos-steel) !important;
  --n-color-table-popover: var(--reos-steel) !important;
  --n-color-disabled: var(--reos-steel) !important;
  --n-color-disabled-checked: var(--reos-blue) !important;
  --n-color-hover: var(--reos-steel) !important;
  --n-border: 1px solid var(--reos-cool-gray) !important;
  --n-border-checked: 1px solid var(--reos-blue) !important;
  --n-border-focus: 1px solid var(--reos-blue) !important;
  --n-border-disabled: 1px solid var(--reos-cool-gray) !important;
  --n-border-disabled-checked: 1px solid var(--reos-blue) !important;
  --n-box-shadow-focus: none !important;
  --n-check-mark-color: var(--reos-bone) !important;
  --n-check-mark-color-disabled: var(--reos-bone) !important;
  --n-check-mark-color-disabled-checked: var(--reos-bone) !important;
}
/* Box itself (computed bg from --n-color) */
html body .n-checkbox-box,
html body .hr-checkbox-box {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
html body .n-checkbox--checked .n-checkbox-box,
html body .hr-checkbox--checked .hr-checkbox-box,
html body .n-checkbox[aria-checked="true"] .n-checkbox-box,
html body .hr-checkbox[aria-checked="true"] .hr-checkbox-box,
html body [aria-checked="true"] .n-checkbox-box,
html body [aria-checked="true"] .hr-checkbox-box {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
}
/* Border layers \u2014 cool-gray on unchecked so the box outline
   stays visible against the lighter steel bg (v0.8.82). */
html body .n-checkbox-box__border,
html body .hr-checkbox-box__border {
  border: 1px solid var(--reos-cool-gray) !important;
  box-shadow: none !important;
}
html body .n-checkbox--checked .n-checkbox-box__border,
html body .hr-checkbox--checked .hr-checkbox-box__border,
html body .n-checkbox[aria-checked="true"] .n-checkbox-box__border,
html body .hr-checkbox[aria-checked="true"] .hr-checkbox-box__border,
html body [aria-checked="true"] .n-checkbox-box__border,
html body [aria-checked="true"] .hr-checkbox-box__border {
  border: 1px solid var(--reos-blue) !important;
  box-shadow: none !important;
}
/* Check icon SVG \u2014 bone fill so the check reads on the blue
   surface. Naive uses path with currentColor; set both color and
   fill for the SVG. */
html body .n-checkbox .check-icon,
html body .n-checkbox .check-icon path,
html body .hr-checkbox .check-icon,
html body .hr-checkbox .check-icon path,
html body .n-checkbox-icon svg,
html body .n-checkbox-icon svg path,
html body .hr-checkbox-icon svg,
html body .hr-checkbox-icon svg path {
  color: var(--reos-bone) !important;
  fill: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}
/* Standalone .check-icon SVGs (NOT inside .n-checkbox / .hr-checkbox).
   These appear as task-completed indicators, verification checkmarks,
   etc. Paint the PATH blue so the checkmark glyph reads as on-brand
   when visible.

   v0.8.66 also painted the immediate parent (span/div) blue via
   :has(> svg.check-icon) \u2014 but the .check-icon is present in the
   DOM in BOTH checked and unchecked states (Naive UI keeps it
   permanently mounted and hides it via opacity on unchecked).
   So the wrapper-paint rule turned unchecked boxes blue. v0.8.67
   drops the wrapper rule \u2014 let the existing .n-checkbox / .hr-checkbox
   --n-color-checked variable do the bg color via the checked state. */
html body svg.check-icon:not(.n-checkbox .check-icon):not(.hr-checkbox .check-icon),
html body svg.check-icon:not(.n-checkbox .check-icon):not(.hr-checkbox .check-icon) path {
  color: var(--reos-blue) !important;
  fill: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* No focus ring on Naive/HR checkboxes either (matches the native
   no-focus spec). */
html body .n-checkbox:focus,
html body .n-checkbox:focus-visible,
html body .hr-checkbox:focus,
html body .hr-checkbox:focus-visible,
html body .n-checkbox-box:focus,
html body .hr-checkbox-box:focus {
  box-shadow: none !important;
  outline: none !important;
}

/* 18a-checkbox-hover-and-transition (v0.8.68). Two bugs Tim
   reported after v0.8.67:
   1. Checkbox box flashes WHITE on hover (checked or unchecked).
   2. Check icon takes ~6 seconds to appear after clicking.

   Both root in the same place \u2014 Naive UI/HR ships the checkbox
   with cascade-deep transition rules on background-color + opacity.
   Some Vue scoped rule must be setting a very long transition
   duration on .check-icon (and the box hover blends through a
   white intermediate color before settling).

   Fix: pin :hover state to slate (unchecked) / blue (checked) and
   kill transitions on every checkbox element + the .check-icon
   itself. State changes go instant \u2014 no white flash, no slow
   reveal. Matches Tim's "no hover state" spec from v0.8.51-53. */

/* Pin hover state. ID-level (:not(#__reos_never_id)) so we beat
   Vue scoped CSS. */
html body .n-checkbox:not(#__reos_never_id):hover .n-checkbox-box,
html body .hr-checkbox:not(#__reos_never_id):hover .hr-checkbox-box,
html body .n-checkbox-box:not(#__reos_never_id):hover,
html body .hr-checkbox-box:not(#__reos_never_id):hover {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
html body .n-checkbox--checked:not(#__reos_never_id):hover .n-checkbox-box,
html body .hr-checkbox--checked:not(#__reos_never_id):hover .hr-checkbox-box,
html body .n-checkbox[aria-checked="true"]:not(#__reos_never_id):hover .n-checkbox-box,
html body .hr-checkbox[aria-checked="true"]:not(#__reos_never_id):hover .hr-checkbox-box,
html body [aria-checked="true"]:not(#__reos_never_id):hover .n-checkbox-box,
html body [aria-checked="true"]:not(#__reos_never_id):hover .hr-checkbox-box {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
}

/* Kill ALL transitions on checkbox elements + .check-icon \u2014
   state changes go instant. Covers the box, the border layers,
   the icon container, and the SVG itself. */
html body .n-checkbox,
html body .n-checkbox *,
html body .hr-checkbox,
html body .hr-checkbox *,
html body .n-checkbox-box,
html body .n-checkbox-box *,
html body .hr-checkbox-box,
html body .hr-checkbox-box *,
html body .n-checkbox-box__border,
html body .hr-checkbox-box__border,
html body .n-checkbox-icon,
html body .hr-checkbox-icon,
html body .n-checkbox-icon *,
html body .hr-checkbox-icon *,
html body .check-icon,
html body .check-icon * {
  transition: none !important;
  transition-duration: 0s !important;
  transition-delay: 0s !important;
  animation-duration: 0s !important;
  animation-delay: 0s !important;
}

/* 18a-checkbox-hover-mint (v0.8.70). Diagnosed via DOM inspection
   that the "white on hover" is actually MINT (rgb(209, 250, 229) =
   #D1FAE5) painted on the .n-checkbox-box__border overlay element
   by a GHL Vue scoped rule:

     .hl-checkbox[data-v-XXXXX]:not(.n-checkbox--disabled):hover
       .n-checkbox-box .n-checkbox-box__border {
       background: var(--primary-100);        // mint
       border: 1px solid var(--primary-600);  // emerald
     }

   The .n-checkbox-box__border is an absolutely-positioned overlay
   that sits on top of .n-checkbox-box (inset:0, border-radius:inherit,
   border-only). When GHL paints it mint on hover, it covers the
   slate/blue box underneath.

   Specificity to beat: .hl-checkbox[data-v-XXX]:not(.n-checkbox--disabled):hover .n-checkbox-box .n-checkbox-box__border
                      = (0, 2, 4, 0) approx.

   Use class-doubling + ID-level :not() to push over that. Force
   the overlay bg transparent (so .n-checkbox-box's slate/blue
   shows through) + recolor the border to match our state palette. */
html body .hl-checkbox.hl-checkbox:not(.n-checkbox--disabled):not(.hr-checkbox--disabled):not(#__reos_never_id):hover .n-checkbox-box .n-checkbox-box__border,
html body .hl-checkbox.hl-checkbox:not(.n-checkbox--disabled):not(.hr-checkbox--disabled):not(#__reos_never_id):hover .hr-checkbox-box .hr-checkbox-box__border,
html body .n-checkbox.n-checkbox:not(.n-checkbox--disabled):not(#__reos_never_id):hover .n-checkbox-box__border,
html body .hr-checkbox.hr-checkbox:not(.hr-checkbox--disabled):not(#__reos_never_id):hover .hr-checkbox-box__border {
  background: transparent !important;
  background-color: transparent !important;
  border: 1px solid var(--reos-cool-gray) !important;
}
/* Checked-state hover: keep blue border, no mint bg */
html body .hl-checkbox.n-checkbox--checked:not(#__reos_never_id):hover .n-checkbox-box__border,
html body .hl-checkbox[aria-checked="true"]:not(#__reos_never_id):hover .n-checkbox-box__border,
html body .n-checkbox.n-checkbox--checked.n-checkbox--checked:not(#__reos_never_id):hover .n-checkbox-box__border,
html body .hr-checkbox.hr-checkbox--checked.hr-checkbox--checked:not(#__reos_never_id):hover .hr-checkbox-box__border,
html body [aria-checked="true"][aria-checked="true"]:not(#__reos_never_id):hover .n-checkbox-box__border,
html body [aria-checked="true"][aria-checked="true"]:not(#__reos_never_id):hover .hr-checkbox-box__border {
  background: transparent !important;
  background-color: transparent !important;
  border: 1px solid var(--reos-blue) !important;
}

/* 18a-checkbox-state-pin (v0.8.69). v0.8.68 fixed the slow transition
   but the box is STILL rendering white when checked + a sticky white
   bg after hover. Tim's screenshot shows: green check (path) on a
   white square \u2014 meaning:
   - The checkbox box bg paints white instead of slate (unchecked)
     or blue (checked)
   - The .check-icon path renders emerald-green instead of bone

   v0.8.69 fix:
   - Switch v0.8 modal accent-color from emerald \u2192 blue (matches
     checkbox spec \u2014 when a native input renders via accent-color,
     the box bg becomes the accent color)
   - Pin .n-checkbox-box / .hr-checkbox-box bg with maximum
     specificity using class-stacking so we beat any Vue scoped
     hover or sticky-state rule
   - Pin .check-icon path color to bone INSIDE any checkbox-shaped
     wrapper (looser selector than the .n-checkbox / .hr-checkbox
     ancestor requirement) so the green-on-white render stops. */
html body .n-checkbox-box.n-checkbox-box:not(#__reos_never_id),
html body .hr-checkbox-box.hr-checkbox-box:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
  border-color: var(--reos-cool-gray) !important;
}
html body .n-checkbox-box.n-checkbox-box:not(#__reos_never_id):hover,
html body .hr-checkbox-box.hr-checkbox-box:not(#__reos_never_id):hover,
html body .n-checkbox:not(#__reos_never_id):hover .n-checkbox-box,
html body .hr-checkbox:not(#__reos_never_id):hover .hr-checkbox-box {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
html body .n-checkbox--checked.n-checkbox--checked .n-checkbox-box:not(#__reos_never_id),
html body .hr-checkbox--checked.hr-checkbox--checked .hr-checkbox-box:not(#__reos_never_id),
html body [aria-checked="true"][aria-checked="true"]:not(#__reos_never_id) .n-checkbox-box,
html body [aria-checked="true"][aria-checked="true"]:not(#__reos_never_id) .hr-checkbox-box,
html body .n-checkbox--checked.n-checkbox--checked:not(#__reos_never_id):hover .n-checkbox-box,
html body .hr-checkbox--checked.hr-checkbox--checked:not(#__reos_never_id):hover .hr-checkbox-box {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}

/* .check-icon path inside ANY checkbox-shaped wrapper \u2192 bone.
   The earlier rule (line 3865) required a literal .n-checkbox or
   .hr-checkbox ancestor \u2014 some GHL checkbox variants use other
   wrapper classes ([class*='checkbox'], aria-checked containers).
   This rule paints the check bone wherever the .check-icon sits
   inside a recognized checkbox shape. */
html body [class*="checkbox"]:not(#__reos_never_id) .check-icon,
html body [class*="checkbox"]:not(#__reos_never_id) .check-icon path,
html body [aria-checked]:not(#__reos_never_id) .check-icon,
html body [aria-checked]:not(#__reos_never_id) .check-icon path,
html body [role="checkbox"]:not(#__reos_never_id) .check-icon,
html body [role="checkbox"]:not(#__reos_never_id) .check-icon path {
  color: var(--reos-bone) !important;
  fill: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}

/* (1) Native <input type='checkbox'> used across the app
   (Tabulator row select, etc.) was rendering with the browser
   default white box. */
html body input[type="checkbox"]:not(.n-checkbox):not(.hr-checkbox):not([class*="n-checkbox"]):not([class*="hr-checkbox"]) {
  appearance: none !important;
  -webkit-appearance: none !important;
  width: 16px !important;
  height: 16px !important;
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 3px !important;
  position: relative !important;
  cursor: pointer !important;
  vertical-align: middle !important;
  flex-shrink: 0 !important;
  margin: 0 !important;
  transition: none !important;
}
html body input[type="checkbox"]:not(.n-checkbox):not(.hr-checkbox):not([class*="n-checkbox"]):not([class*="hr-checkbox"]):checked {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}
/* Checkmark \u2014 bone, drawn as two perpendicular lines via the
   classic CSS rotate-rectangle technique. Pseudo-element on the
   checkbox itself. */
html body input[type="checkbox"]:not(.n-checkbox):not(.hr-checkbox):not([class*="n-checkbox"]):not([class*="hr-checkbox"]):checked::after {
  content: '' !important;
  position: absolute !important;
  left: 4px !important;
  top: 0px !important;
  width: 5px !important;
  height: 10px !important;
  border: solid var(--reos-bone) !important;
  border-width: 0 2px 2px 0 !important;
  transform: rotate(45deg) !important;
  display: block !important;
}
/* Indeterminate state (partial selection in bulk-select) \u2014 show
   a horizontal bar in bone instead of a check. */
html body input[type="checkbox"]:not(.n-checkbox):not(.hr-checkbox):not([class*="n-checkbox"]):not([class*="hr-checkbox"]):indeterminate {
  background-color: var(--reos-blue) !important;
  background: var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}
html body input[type="checkbox"]:not(.n-checkbox):not(.hr-checkbox):not([class*="n-checkbox"]):not([class*="hr-checkbox"]):indeterminate::after {
  content: '' !important;
  position: absolute !important;
  left: 2px !important;
  top: 6px !important;
  width: 10px !important;
  height: 2px !important;
  background-color: var(--reos-bone) !important;
  border: none !important;
  transform: none !important;
  display: block !important;
}

/* 18a-copy-icon (v0.8.60). The copy-icon button next to phone /
   email cells in the contacts table \u2014 inline ships with
   'background: white' + 'border: 1px solid #D0D5DD'. Tim wants:
   - Slate bg + steel border
   - Brand-blue copy icon (and the checkmark icon shown after
     click \u2014 same color spec)
   - Inline styles lose to CSS !important so this overrides them. */
html body .copy-icon,
html body span.copy-icon {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
}
html body .copy-icon svg,
html body .copy-icon svg path,
html body span.copy-icon svg,
html body span.copy-icon svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: none !important;
}
/* Post-click checkmark state \u2014 many implementations swap the SVG
   path or add a .copied / .success class. Cover broadly:
   any svg inside .copy-icon stays blue regardless of state. */
html body .copy-icon.copied svg,
html body .copy-icon.copied svg path,
html body .copy-icon.success svg,
html body .copy-icon.success svg path,
html body .copy-icon[data-copied="true"] svg,
html body .copy-icon[data-copied="true"] svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

/* 18a-list-contact-options-icon (v0.8.54). The 3-dot trigger on
   contact rows uses SVG with class .list-individual-contact-
   options-icon. v0.8.48 tried matching via d^= path selector
   but the user reports it didn't render \u2014 switching to the
   explicit class which is unique and reliable.

   Tim's spec: slate bg + steel border + brand-blue dots. */
/* SVG rendering \u2014 leave size at the browser default (no width/
   height override), use stroke not fill. v0.8.58 enlarged to 16
   + filled, which made the 3 dots smear into a solid blue strip.
   Reverting to the original stroked render (each dot is a small
   stroked circle, distinct from neighbors). */
html body svg.list-individual-contact-options-icon,
html body .list-individual-contact-options-icon {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: none !important;
}
html body svg.list-individual-contact-options-icon path,
html body .list-individual-contact-options-icon path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: none !important;
}
/* The wrapper around the icon \u2014 actually a <span class=
   "contact-options-button">. v0.8.54 missed it because :has()
   was scoped to button/div/role=button. Target the explicit
   class directly. */
html body .contact-options-button,
html body span.contact-options-button {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
  padding: 4px !important;
}
/* Active/focus state of the trigger \u2014 no inner box, no
   white/blue overlay, no focus ring. v0.8.56 fix for Tim's
   'ugly white and blue inner box when clicked'. */
html body .contact-options-button:focus,
html body .contact-options-button:active,
html body .contact-options-button:focus-visible,
html body .contact-options-button:focus-within,
html body span.contact-options-button:focus,
html body span.contact-options-button:active,
html body span.contact-options-button:focus-visible,
html body span.contact-options-button:focus-within {
  outline: none !important;
  box-shadow: none !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-emerald) !important;
}
/* Kill any pseudo-element overlay (Naive ripple wave or similar). */
html body .contact-options-button::before,
html body .contact-options-button::after,
html body span.contact-options-button::before,
html body span.contact-options-button::after {
  display: none !important;
  background: transparent !important;
}
/* Kill EVERY non-SVG descendant painting bg inside the button \u2014
   not just direct children. The 'ugly white+blue inner box' Tim
   keeps seeing is a deeper child (likely Naive's n-base-wave
   nested inside, or an indicator div). Hit the entire subtree. */
html body .contact-options-button *:not(svg):not(path):not(circle):not(g),
html body span.contact-options-button *:not(svg):not(path):not(circle):not(g) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
/* Specifically kill n-base-wave / .indicator / .ripple etc.
   inside the button. */
html body .contact-options-button .n-base-wave,
html body .contact-options-button [class*="wave"],
html body .contact-options-button [class*="ripple"],
html body .contact-options-button [class*="indicator"],
html body .contact-options-button [class*="active-indicator"],
html body span.contact-options-button .n-base-wave,
html body span.contact-options-button [class*="wave"] {
  display: none !important;
  background: transparent !important;
  opacity: 0 !important;
}
/* Fallback for any other button/div parents (kept from v0.8.54). */
html body button:has(svg.list-individual-contact-options-icon),
html body [role="button"]:has(svg.list-individual-contact-options-icon),
html body div:has(> svg.list-individual-contact-options-icon),
html body span:has(> svg.list-individual-contact-options-icon),
html body [class*="trigger"]:has(svg.list-individual-contact-options-icon),
html body [class*="dropdown__trigger"]:has(svg.list-individual-contact-options-icon) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
  padding: 4px !important;
}

/* 18a-row-action-trigger (v0.8.48). 3-dot trigger button on
   contact rows (revealed on hover). Renders white-on-white by
   default. Tim wants slate bg + ash dots, emerald on hover.

   Target via the SVG path 'd' attribute (three vertical dots
   path: M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2 1 1 0 000 2zM12 20)
   plus common 'trigger' / 'dropdown__trigger-wrapper' wrappers
   inside tabulator rows. */
html body .tabulator-row [class*="trigger-wrapper"],
html body .tabulator-row [class*="hr-dropdown__trigger"],
html body .tabulator-row button:has(svg path[d^="M12 13a1"]),
html body .tabulator-cell button:has(svg path[d^="M12 13a1"]),
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
  padding: 4px !important;
}
html body .tabulator-row [class*="trigger-wrapper"] svg,
html body .tabulator-row [class*="trigger-wrapper"] svg path,
html body .tabulator-row [class*="hr-dropdown__trigger"] svg,
html body .tabulator-row [class*="hr-dropdown__trigger"] svg path,
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]) svg,
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .tabulator-row [class*="trigger-wrapper"]:hover,
html body .tabulator-row [class*="hr-dropdown__trigger"]:hover,
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]):hover {
  border-color: var(--reos-emerald) !important;
}
html body .tabulator-row [class*="trigger-wrapper"]:hover svg,
html body .tabulator-row [class*="trigger-wrapper"]:hover svg path,
html body .tabulator-row [class*="hr-dropdown__trigger"]:hover svg,
html body .tabulator-row [class*="hr-dropdown__trigger"]:hover svg path,
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]):hover svg,
html body button:has(svg path[d^="M12 13a1 1 0 100-2"]):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 18a-n-dropdown-options-flicker (v0.8.48). Dropdown menu options
   ('Book appointment', 'Create opportunity', 'Send review request',
   'Delete Contact') were flashing white. Section 19 already styles
   .n-dropdown-option but the menu surface itself wasn't pinned at
   high enough specificity to beat Vue's first paint.

   Pin .n-dropdown-menu + options at ID-level specificity. Standard
   canonical pattern:
   - Default: bone text, transparent bg
   - Hover: emerald text + slate bg
   - 'Delete' / destructive: crimson text on hover */
html body .n-dropdown-menu:not(#__reos_never_id),
html body .n-dropdown:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  transition: none !important;
}
html body .n-dropdown-option:not(#__reos_never_id),
html body .n-dropdown-option-body:not(#__reos_never_id),
html body .n-dropdown-option-body__label:not(#__reos_never_id) {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  transition: none !important;
}
html body .n-dropdown-option:hover:not(#__reos_never_id),
html body .n-dropdown-option:hover .n-dropdown-option-body,
html body .n-dropdown-option:hover .n-dropdown-option-body__label {
  background-color: var(--reos-slate) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-dropdown-option:hover svg,
html body .n-dropdown-option:hover svg path,
html body .n-dropdown-option:hover .n-dropdown-option-body__prefix svg,
html body .n-dropdown-option:hover .n-dropdown-option-body__prefix svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Delete / destructive option \u2014 crimson on hover (matches the
   delete-conversation icon pattern from section 15i). Use :has()
   to detect a trashcan SVG inside the option (multiple common
   path patterns: heroicons, material, FA, etc.) AND class
   signatures. Native CSS can't match by text content, but
   trashcan-SVG-presence is reliable. */
html body .n-dropdown-option[data-option-type="error"]:hover,
html body .n-dropdown-option--error:hover,
html body .n-dropdown-option[class*="delete"]:hover,
html body .n-dropdown-option[class*="error"]:hover,
html body .n-dropdown-option:has(svg path[d*="M9 3h6"]):hover,
html body .n-dropdown-option:has(svg path[d*="M3 6h18"]):hover,
html body .n-dropdown-option:has(svg path[d*="M19 7l"]):hover,
html body .n-dropdown-option:has(svg path[d*="trash"]):hover,
html body .n-dropdown-option:has([class*="trash"]):hover,
html body .n-dropdown-option:has([class*="delete"]):hover,
html body .n-dropdown-option:has(svg path[d*="m20.13"]):hover {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
  background-color: rgba(212, 63, 74, 0.10) !important;
}
html body .n-dropdown-option[data-option-type="error"]:hover svg,
html body .n-dropdown-option[data-option-type="error"]:hover svg path,
html body .n-dropdown-option--error:hover svg,
html body .n-dropdown-option--error:hover svg path,
html body .n-dropdown-option[class*="delete"]:hover svg,
html body .n-dropdown-option[class*="delete"]:hover svg path,
html body .n-dropdown-option[class*="error"]:hover svg,
html body .n-dropdown-option[class*="error"]:hover svg path,
html body .n-dropdown-option:has(svg path[d*="M9 3h6"]):hover svg,
html body .n-dropdown-option:has(svg path[d*="M9 3h6"]):hover svg path,
html body .n-dropdown-option:has(svg path[d*="M3 6h18"]):hover svg,
html body .n-dropdown-option:has(svg path[d*="M3 6h18"]):hover svg path,
html body .n-dropdown-option:has(svg path[d*="M19 7l"]):hover svg,
html body .n-dropdown-option:has(svg path[d*="M19 7l"]):hover svg path,
html body .n-dropdown-option:has(svg path[d*="trash"]):hover svg,
html body .n-dropdown-option:has(svg path[d*="trash"]):hover svg path,
html body .n-dropdown-option:has([class*="trash"]):hover svg,
html body .n-dropdown-option:has([class*="trash"]):hover svg path,
html body .n-dropdown-option:has([class*="delete"]):hover svg,
html body .n-dropdown-option:has([class*="delete"]):hover svg path,
html body .n-dropdown-option:has(svg path[d*="m20.13"]):hover svg,
html body .n-dropdown-option:has(svg path[d*="m20.13"]):hover svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* 18a-contact-name-link (v0.8.46 \u2192 v0.8.47). Contact rows on the
   smart-list page render names as <a class="contact-name-link">
   with inline color: inherit. Default Tim wants ASH (subtle,
   recedes); hover EMERALD (clickable affordance).

   v0.8.46 used plain .contact-name-link:hover. Generic a:hover
   rule { color: rgb(8, 113, 211) } at (0,1,1) was beaten in
   theory by .contact-name-link:hover (0,1,1) + my !important.
   But the user still saw blue \u2014 likely cache or another rule
   (.hl_navbar--links a:hover etc.) winning by chain. Bump
   specificity to ID-level so nothing can beat it. Also kill the
   underline + bg hover from any parent. */
html body a.contact-name-link:not(#__reos_never_id),
html body .contact-name-link:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  text-decoration: none !important;
  background-color: transparent !important;
}
html body a.contact-name-link:hover:not(#__reos_never_id),
html body .contact-name-link:hover:not(#__reos_never_id),
html body a.contact-name-link:focus:not(#__reos_never_id),
html body .contact-name-link:focus:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  text-decoration: none !important;
  background-color: transparent !important;
}
/* Kill Tabulator's row-hover bg (paints light gray on hover). */
html body .tabulator-row:hover:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-odd:hover:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-even:hover:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
/* And kill the cell-hover bg too, in case Tabulator paints there. */
html body .tabulator-cell:hover:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

/* 18a-tabulator-cells-rows (v0.8.43). Tim flagged the contacts
   table cells rendering slate-on-graphite plus a gray-200 border
   around the entire section.

   Diagnosed via /browse:
   - .tabulator-cell \u2014 inline bg slate from coerceDarkDropdowns
   - .tabulator-row \u2014 bg WHITE from Tabulator default
   - .tabulator outer \u2014 bg WHITE
   - .table-container \u2014 border-color rgb(234, 236, 240) gray-200

   v0.8.42 set .tabulator transparent but apparently was beaten on
   the row/cell level. This rule covers EVERY tabulator descendant
   at ID-level specificity, plus the table-container border. */
html body .tabulator-cell:not(#__reos_never_id),
html body .tabulator-row:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-odd:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-even:not(#__reos_never_id),
html body .tabulator-col:not(#__reos_never_id),
html body .tabulator-header:not(#__reos_never_id),
html body .tabulator-tableholder:not(#__reos_never_id),
html body .tabulator-table:not(#__reos_never_id),
html body .tabulator:not(#__reos_never_id),
html body .my-table.tabulator:not(#__reos_never_id),
html body .table-container:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
/* .table-container outer border (gray-200) \u2192 steel. */
html body .table-container:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-tabulator-wrappers (v0.8.42). The Tabulator library paints
   its outer wrappers white by default \u2014 Tim flagged the white
   surround at the bottom of the contacts table:
   - .my-table.tabulator outer: pure white
   - .table-container: pure white
   - .tabulator-footer: rgb(252, 252, 253) near-white
   - .tabulator-page (First/Last disabled buttons):
     rgba(255, 255, 255, 0.2) + color rgb(85, 85, 85) (invisible
     dark gray on slate)

   Section 18a-flash-global only catches Tailwind .bg-white etc;
   Tabulator's library defaults need their own remap. */
html body .tabulator,
html body .table-container,
html body .my-table,
html body .my-table.tabulator,
html body .tabulator-footer,
html body .tabulator-footer-contents,
html body [class*="tabulator"]:not(.tabulator-cell):not(.tabulator-col):not(.tabulator-row):not(.tabulator-page):not(.tabulator-page-size):not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
/* Tabulator pagination buttons \u2014 disabled state in particular
   shipped with semi-white bg + invisible dark text. Pin all
   states to transparent + bone, emerald hover. */
html body .tabulator-page,
html body button.tabulator-page,
html body .tabulator-page:disabled,
html body button.tabulator-page:disabled,
html body button.tabulator-page[disabled] {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
html body .tabulator-page:disabled,
html body button.tabulator-page:disabled,
html body button.tabulator-page[disabled] {
  opacity: 0.4 !important;
  cursor: not-allowed !important;
}
html body .tabulator-page:not(:disabled):hover,
html body button.tabulator-page:not(:disabled):hover {
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .tabulator-page.active,
html body button.tabulator-page.active {
  background-color: transparent !important;
  background: transparent !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-tabulator (v0.8.36). The Contacts smart-list page
   (/contacts/smart_list/All) is built on the Tabulator library.
   Every .tabulator-col / .tabulator-cell / .tabulator-row /
   .tabulator-footer / .tabulator-page ships with borders in
   light-gray rgb(240, 241, 243) (#F0F1F3) or rgb(232, 234, 237)
   (#E8EAED). Section 16 only catches Tailwind .border-gray-200,
   section 16e only catches inline rgb(234, 236, 240) \u2014 neither
   matches these Tabulator hexes.

   Remap every Tabulator border to steel so the table grid reads
   as a subtle dark-on-dark structure instead of bright gray-on-
   dark stripes. */
html body .tabulator,
html body .tabulator-col,
html body .tabulator-cell,
html body .tabulator-row,
html body .tabulator-header,
html body .tabulator-footer,
html body .tabulator-page,
html body [class*="tabulator-"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* Inline border-color hexes used by the Tabulator family + the
   GHL contacts list toolbar (.d-flex.bar-parent, .d-flex.lists).
   Substring match catches both 'border-color: rgb(...)' and the
   shorthand 'border: 1px solid rgb(...)'. */
html body [style*="rgb(232, 234, 237)"]:not(#__reos_never_id),
html body [style*="rgb(232,234,237)"]:not(#__reos_never_id),
html body [style*="rgb(240, 241, 243)"]:not(#__reos_never_id),
html body [style*="rgb(240,241,243)"]:not(#__reos_never_id),
html body [style*="#E8EAED"]:not(#__reos_never_id),
html body [style*="#e8eaed"]:not(#__reos_never_id),
html body [style*="#F0F1F3"]:not(#__reos_never_id),
html body [style*="#f0f1f3"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-fc-calendar (v0.8.26). Calendar page (/calendars/view) is
   built on FullCalendar \u2014 every column / time row / header cell
   has border-color rgb(221, 221, 221) (#DDDDDD) from the library
   default. Section 16 only catches Tailwind .border-gray-200 and
   section 16e only catches the specific inline-rgb-234 pattern,
   so the FullCalendar grid lines stayed light-gray on the dark
   theme.

   Remap every .fc-* border to slate so the grid reads as a
   subtle dark-on-dark divider instead of a bright gray-on-dark
   stripe. ID-level specificity beats FullCalendar's own (0,1,1)
   rules. */
html body .fc:not(#__reos_never_id),
html body .fc table:not(#__reos_never_id),
html body .fc th:not(#__reos_never_id),
html body .fc td:not(#__reos_never_id),
html body .fc tr:not(#__reos_never_id),
html body .fc thead:not(#__reos_never_id),
html body .fc tbody:not(#__reos_never_id),
html body [class*="fc-"]:not(#__reos_never_id),
html body [class*="fc-col-header"]:not(#__reos_never_id),
html body [class*="fc-timegrid"]:not(#__reos_never_id),
html body [class*="fc-daygrid"]:not(#__reos_never_id),
html body [class*="fc-scrollgrid"]:not(#__reos_never_id) {
  border-color: var(--reos-slate) !important;
}

/* Inline border-color rgb(221, 221, 221) \u2014 catches FullCalendar
   stragglers that set the color via style attribute, plus any
   other place GHL uses this near-white gray inline. */
html body [style*="border-color: rgb(221, 221, 221)"]:not(#__reos_never_id),
html body [style*="border-color:rgb(221, 221, 221)"]:not(#__reos_never_id),
html body [style*="border: 1px solid rgb(221, 221, 221)"]:not(#__reos_never_id),
html body [style*="border:1px solid rgb(221, 221, 221)"]:not(#__reos_never_id),
html body [style*="border-color: #DDDDDD"]:not(#__reos_never_id),
html body [style*="border-color:#DDDDDD"]:not(#__reos_never_id),
html body [style*="border-color: #dddddd"]:not(#__reos_never_id),
html body [style*="border-color:#dddddd"]:not(#__reos_never_id),
html body [style*="border-color: #DDD"]:not(#__reos_never_id),
html body [style*="border-color:#DDD"]:not(#__reos_never_id),
html body [style*="border-color: #ddd"]:not(#__reos_never_id),
html body [style*="border-color:#ddd"]:not(#__reos_never_id) {
  border-color: var(--reos-slate) !important;
}

/* 18a-sla (v0.8.24 \u2192 v0.8.25). SLA performance page empty state
   renders pure-white on load and only converts to dark after
   DevTools is opened (which triggers a viewport reflow).

   The page uses Vue scoped CSS (data-v-04bb51f8) with two layers:
   1) .sla-empty-state__* classes for the illustration card.
   2) Header section ('SLA overview' h2 + description p) with
      generic Tailwind classes (flex, text-gray-900, text-gray-500)
      and NO sla-* class. v0.8.24 missed this header.

   v0.8.25: target ALL elements with the data-v-04bb51f8 Vue scope
   so the entire SLA component renders graphite from first paint,
   not just the empty-state sub-tree. */
html body [data-v-04bb51f8]:not(#__reos_never_id),
html body [class*="sla-empty-state"]:not(#__reos_never_id),
html body [class*="sla-overview"]:not(#__reos_never_id),
html body [class*="sla-performance"]:not(#__reos_never_id),
html body [class*="sla-page"]:not(#__reos_never_id),
html body [class*="sla-card"]:not(#__reos_never_id),
html body [class*="sla-container"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  transition-property: color, border-color, opacity, transform, box-shadow !important;
}
/* Text descendants \u2014 bone on transparent so they inherit the
   graphite of their nearest painted ancestor. */
html body [data-v-04bb51f8] h1:not(#__reos_never_id),
html body [data-v-04bb51f8] h2:not(#__reos_never_id),
html body [data-v-04bb51f8] h3:not(#__reos_never_id),
html body [data-v-04bb51f8] p:not(#__reos_never_id),
html body [data-v-04bb51f8] span:not(#__reos_never_id),
html body [class*="sla-empty-state__title"]:not(#__reos_never_id),
html body [class*="sla-empty-state__description"]:not(#__reos_never_id),
html body [class*="sla-empty-state__text"]:not(#__reos_never_id),
html body [class*="sla-empty-state"]:not(#__reos_never_id) p,
html body [class*="sla-empty-state"]:not(#__reos_never_id) h1,
html body [class*="sla-empty-state"]:not(#__reos_never_id) h2,
html body [class*="sla-empty-state"]:not(#__reos_never_id) span {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-flash-global (v0.8.17): GLOBAL anti-flash rule.

   Tim asked for a global version of the v0.8.16 accordion fix,
   so nothing else in the app flashes white before the customizer's
   inline paint catches up.

   The root cause is universal: Vue's scoped CSS uses attribute
   selectors like [data-v-XXX] .bg-white (specificity 0,2,1) which
   beats our plain .bg-white { background: graphite } (specificity
   0,1,0). On every new DOM mount or transition, Vue paints the
   first frame white before applyForceRules fires (debounced ~16-100ms)
   and overrides with inline graphite. That gap is the white flash.

   Fix: same trick as v0.8.16 \u2014 :not(#__reos_never_id) bumps every
   substring-match anti-flash selector to ID-level specificity
   (1,1,3), reliably beating any Vue scoped CSS.

   Also pin transition-property so bg-color transitions can't
   animate THROUGH white during state changes. Other transitions
   (color, border, transform) are preserved for hover affordance.

   This sits BEFORE section 18a's standard rules; same selectors
   but with the specificity bump, so anything matching gets the
   bumped specificity and the standard rule becomes a fallback. */
html body [class*="F7F9FD"]:not(#__reos_never_id),
html body [class*="F7F9FB"]:not(#__reos_never_id),
html body [class*="F9FAFB"]:not(#__reos_never_id),
html body [class*="eff4ff"]:not(#__reos_never_id),
html body [class*="EFF4FF"]:not(#__reos_never_id),
html body [class*="ECEEF2"]:not(#__reos_never_id),
html body [class*="eceef2"]:not(#__reos_never_id),
html body .bg-gray-50:not(#__reos_never_id),
html body .bg-gray-100:not(#__reos_never_id),
html body .bg-gray-200:not(#__reos_never_id),
html body .bg-white:not(#__reos_never_id),
html body .bg-blue-50:not(#__reos_never_id),
html body .bg-blue-100:not(#__reos_never_id),
html body .bg-sky-50:not(#__reos_never_id),
html body .bg-sky-100:not(#__reos_never_id),
html body .bg-indigo-50:not(#__reos_never_id),
html body .bg-indigo-100:not(#__reos_never_id),
html body .bg-slate-50:not(#__reos_never_id),
html body .bg-slate-100:not(#__reos_never_id),
html body .bg-neutral-50:not(#__reos_never_id),
html body .bg-neutral-100:not(#__reos_never_id),
html body .bg-zinc-50:not(#__reos_never_id),
html body .bg-zinc-100:not(#__reos_never_id),
html body .bg-stone-50:not(#__reos_never_id),
html body .bg-stone-100:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  /* Lock bg color so transition can't animate through white.
     Other properties still transition for hover/focus polish. */
  transition-property: color, border-color, opacity, transform, box-shadow !important;
  animation: none !important;
}

/* 18a. GHL Tailwind arbitrary + utility light backgrounds \u2014 the
   contact-detail page hardcodes specific hex colors via Tailwind
   arbitrary-value classes like bg-[#F7F9FD] (conversation main +
   compose footer) and bg-[#eff4ff] (SMS modal header tab strip).

   For arbitrary hex values like bg-[#F7F9FD], substring match is
   safe because the hex string only appears in actual color values.

   For NAMED Tailwind shades like bg-gray-50, substring match would
   catch state-prefixed variants like 'hover:bg-gray-50',
   'group-hover:bg-gray-50', 'focus:bg-gray-50' \u2014 painting them
   graphite ALWAYS instead of only on hover. Diagnosed live: the
   icon row in the message header (phone, archive, star, mark-read,
   delete) had 'hover:bg-gray-50' on each button. Substring catchall
   painted each one slate via FORCE_RULES inline, leaving visible
   off-color squares around each icon against the graphite container.

   Use plain class selectors for named shades. Use [class*=...] only
   for arbitrary-hex values where the hex substring is unique. */
[class*="F7F9FD"],
[class*="F7F9FB"],
[class*="F9FAFB"],
[class*="eff4ff"],
[class*="EFF4FF"],
[class*="ECEEF2"],
[class*="eceef2"],
.bg-gray-50,
.bg-gray-100,
.bg-gray-200,
.bg-white,
.bg-blue-50,
.bg-blue-100,
.bg-sky-50,
.bg-sky-100,
.bg-indigo-50,
.bg-indigo-100,
.bg-slate-50,
.bg-slate-100,
.bg-neutral-50,
.bg-neutral-100,
.bg-zinc-50,
.bg-zinc-100,
.bg-stone-50,
.bg-stone-100 {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 18a-1. HOVER variants of the same arbitrary-background classes.
   Tim noticed a flashing button on the Conversations tabs (Unread /
   All / Recents / Starred) \u2014 class list includes bg-[#F7F9FD] AND
   hover:bg-gray-50. Our FORCE_RULE injects inline graphite, but Vue
   re-renders the button on hover state changes and briefly clobbers
   the inline style. During that gap Tailwind's hover:bg-gray-50
   wins (light gray) \u2192 flash \u2192 MutationObserver re-applies inline \u2192
   flash repeats. Visible flicker.

   Fix: CSS hover rules that beat Tailwind's hover utility via
   higher specificity ([class*=...]:hover plus html body adds enough
   specificity, and !important seals it). CSS rules survive Vue
   re-renders since they're stylesheet-based, not inline. So even
   when Vue clobbers our inline, the CSS hover rule still applies
   graphite \u2014 no flash.

   Covers the same Tailwind class families plus the hover: prefixed
   versions Tailwind generates. */
html body [class*="F7F9FD"]:hover,
html body [class*="F7F9FB"]:hover,
html body [class*="F9FAFB"]:hover,
html body [class*="eff4ff"]:hover,
html body [class*="EFF4FF"]:hover,
html body [class*="bg-gray-50"]:hover,
html body [class*="bg-gray-100"]:hover,
html body [class*="bg-gray-200"]:hover,
html body [class*="bg-white"]:hover,
html body [class*="bg-blue-50"]:hover,
html body [class*="bg-blue-100"]:hover,
html body [class*="bg-sky-50"]:hover,
html body [class*="bg-sky-100"]:hover,
html body [class*="bg-indigo-50"]:hover,
html body [class*="bg-indigo-100"]:hover,
html body [class*="bg-slate-50"]:hover,
html body [class*="bg-slate-100"]:hover,
html body [class*="bg-neutral-50"]:hover,
html body [class*="bg-neutral-100"]:hover,
html body [class*="bg-zinc-50"]:hover,
html body [class*="bg-zinc-100"]:hover,
html body [class*="bg-stone-50"]:hover,
html body [class*="bg-stone-100"]:hover,
html body [class*="hover:bg-gray-50"]:hover,
html body [class*="hover:bg-gray-100"]:hover,
html body [class*="hover:bg-gray-200"]:hover,
html body [class*="hover:bg-white"]:hover,
html body [class*="hover:bg-blue-50"]:hover,
html body [class*="hover:bg-slate-50"]:hover,
html body [class*="hover:bg-slate-100"]:hover,
html body [class*="hover:bg-neutral-50"]:hover,
html body [class*="hover:bg-zinc-50"]:hover,
html body [class*="hover:bg-stone-50"]:hover {
  background-color: var(--reos-graphite) !important;
}

/* 18a-1b. KILL transitions on Tailwind-arbitrary-bg buttons. The
   Conversations tab buttons (Unread/All/Recents/Starred) use
   class='transition-colors bg-[#F7F9FD] hover:bg-gray-50' \u2014 even
   if my CSS hover rule and FORCE_RULE both keep the bg at graphite,
   the 'transition-colors' utility animates between any color
   changes. Micro-changes during Vue re-renders (inline cleared by
   Vue \u2192 CSS takes over briefly \u2192 inline re-applied) get animated
   over 150ms instead of being instantaneous, producing a visible
   strobing effect even when both states are graphite (because the
   browser interpolates and may pass through other values).

   Strip transition + animation on these specific button families.
   Hover/active state changes are instant. No flash from animation. */
html body button[class*="F7F9FD"],
html body button[class*="F7F9FB"],
html body button[class*="F9FAFB"],
html body button[class*="eff4ff"],
html body button[class*="EFF4FF"],
html body button[class*="hover:bg-gray-50"],
html body button[class*="hover:bg-gray-100"],
html body [class*="F7F9FD"][class*="transition"],
html body [class*="F9FAFB"][class*="transition"],
html body [class*="hover:bg-gray-50"][class*="transition"] {
  transition: none !important;
  animation: none !important;
}

/* 18a-1c. EXTENDED \u2014 bg-white buttons + transition-colors elements.
   Catches the broader family of flicker patterns Tim's still finding
   across the Conversations page:
     - Help / info icon button (bg-white + transition-colors)
     - Channel-bar SMS dropdown trigger (#conv-channel-bar-provider-
       trigger, bg-white + shadow-sm)
     - Conversation cards (transition-colors + bg-white in data-
       conversation-id wrapper)
     - HR design system dropdown menus (.hr-dropdown-menu)
   All follow the same Vue-render-clobbers-inline pattern. CSS rules
   here survive Vue re-renders. */

/* Static state for bg-white buttons + cards in Conversations area */
html body button[class*="bg-white"],
html body [data-conversation-id] [class*="bg-white"],
html body [data-conversation-id] [class*="transition-colors"],
html body #conv-channel-bar-provider-trigger {
  background-color: var(--reos-graphite) !important;
}

/* Hover for the same */
html body button[class*="bg-white"]:hover,
html body [data-conversation-id] [class*="bg-white"]:hover,
html body [data-conversation-id] [class*="transition-colors"]:hover,
html body #conv-channel-bar-provider-trigger:hover {
  background-color: var(--reos-slate) !important;
}

/* Kill transitions, animations, and box-shadows on these elements
   so any micro-state-changes (Vue render gaps, hover transitions)
   are instant rather than animated through bright values. */
html body button[class*="bg-white"],
html body button[class*="transition-colors"],
html body [data-conversation-id] [class*="bg-white"],
html body [data-conversation-id] [class*="transition-colors"],
html body #conv-channel-bar-provider-trigger,
html body [id*="conv-channel-bar"],
html body .hr-dropdown-menu,
html body .hr-dropdown-menu *,
html body .hr-dropdown,
html body .hr-dropdown *,
html body .hr-dropdown-option,
html body .hr-dropdown-option * {
  transition: none !important;
  animation: none !important;
  box-shadow: none !important;
}

/* 18a-1d. UNIVERSAL FLICKER-KILL SWEEP \u2014 Tim's question after the
   v0.7.71 round: 'I assume that the same coercer problem happens
   throughout. Do you know enough about it now to search the entire
   code to find and correct those issues?'

   The pattern, fully understood now:
   1. GHL element has a Tailwind LIGHT-bg class (bg-white, bg-gray-50,
      bg-[#XXX] arbitrary)
   2. AND has Tailwind transition class (transition-colors / transition
      / transition-all)
   3. Our FORCE_RULE injects inline graphite via setProperty
   4. Vue re-renders the element on state changes, briefly clobbering
      the inline style
   5. During that frame, the Tailwind bg class wins -> bright color
      visible
   6. transition-colors animates the bg back to graphite when
      MutationObserver triggers applyForceRules
   7. Visible flicker.

   Comprehensive sweep: kill transitions + animations on ANY element
   that has BOTH a light-bg class AND any transition class. CSS rules
   survive Vue re-renders since they're stylesheet-based, not inline.
   So even when Vue clobbers our inline graphite, the static-state
   rules in section 18a + 18a-1 keep applying, AND the transition
   kill here prevents any animation from being visible during the
   render gap.

   The two-condition selector ([class*='bg-X'][class*='transition'])
   keeps blast radius narrow: only elements with BOTH conditions are
   targeted. Elements with just a transition class (no light bg) keep
   their animations. Elements with just a light-bg class (no
   transition) don't need the fix anyway.

   This should kill the flicker across the entire app \u2014 Conversations
   tabs, contact-detail panels, all data-table headers, page-headers,
   buttons, cards, dropdown menus, anywhere GHL pairs light bgs with
   transitions. */
html body [class*="bg-white"][class*="transition"],
html body [class*="bg-gray-50"][class*="transition"],
html body [class*="bg-gray-100"][class*="transition"],
html body [class*="bg-gray-200"][class*="transition"],
html body [class*="bg-slate-50"][class*="transition"],
html body [class*="bg-slate-100"][class*="transition"],
html body [class*="bg-neutral-50"][class*="transition"],
html body [class*="bg-neutral-100"][class*="transition"],
html body [class*="bg-zinc-50"][class*="transition"],
html body [class*="bg-zinc-100"][class*="transition"],
html body [class*="bg-stone-50"][class*="transition"],
html body [class*="bg-stone-100"][class*="transition"],
html body [class*="bg-blue-50"][class*="transition"],
html body [class*="bg-blue-100"][class*="transition"],
html body [class*="bg-sky-50"][class*="transition"],
html body [class*="bg-sky-100"][class*="transition"],
html body [class*="bg-indigo-50"][class*="transition"],
html body [class*="bg-indigo-100"][class*="transition"],
html body [class*="F7F9FD"][class*="transition"],
html body [class*="F7F9FB"][class*="transition"],
html body [class*="F9FAFB"][class*="transition"],
html body [class*="ECEEF2"][class*="transition"],
html body [class*="eff4ff"][class*="transition"],
html body [class*="EFF4FF"][class*="transition"],
html body [class*="hover:bg-white"][class*="transition"],
html body [class*="hover:bg-gray-50"][class*="transition"],
html body [class*="hover:bg-gray-100"][class*="transition"],
html body [class*="hover:bg-gray-200"][class*="transition"],
html body [class*="hover:bg-slate-50"][class*="transition"],
html body [class*="hover:bg-slate-100"][class*="transition"],
html body [class*="hover:bg-neutral-50"][class*="transition"],
html body [class*="hover:bg-zinc-50"][class*="transition"],
html body [class*="hover:bg-stone-50"][class*="transition"],
html body [class*="hover:bg-blue-50"][class*="transition"] {
  transition: none !important;
  animation: none !important;
}

/* Hover state for ALL light-bg classes that don't already have hover
   coverage in section 18a-1. This is the static-survival rule: even
   when Vue clobbers our inline graphite, this CSS keeps the bg
   correct on hover. Combined with the transition kill above, state
   changes are both correct AND instant. */
html body [class*="bg-white"]:hover,
html body [class*="bg-gray-50"]:hover,
html body [class*="bg-gray-100"]:hover,
html body [class*="bg-gray-200"]:hover,
html body [class*="bg-slate-50"]:hover,
html body [class*="bg-slate-100"]:hover,
html body [class*="bg-neutral-50"]:hover,
html body [class*="bg-neutral-100"]:hover,
html body [class*="bg-zinc-50"]:hover,
html body [class*="bg-zinc-100"]:hover,
html body [class*="bg-stone-50"]:hover,
html body [class*="bg-stone-100"]:hover,
html body [class*="bg-blue-50"]:hover,
html body [class*="bg-blue-100"]:hover,
html body [class*="bg-sky-50"]:hover,
html body [class*="bg-sky-100"]:hover,
html body [class*="bg-indigo-50"]:hover,
html body [class*="bg-indigo-100"]:hover,
html body [class*="F7F9FD"]:hover,
html body [class*="F7F9FB"]:hover,
html body [class*="F9FAFB"]:hover,
html body [class*="ECEEF2"]:hover,
html body [class*="eff4ff"]:hover,
html body [class*="EFF4FF"]:hover,
html body [class*="hover:bg-white"]:hover,
html body [class*="hover:bg-gray-50"]:hover,
html body [class*="hover:bg-gray-100"]:hover {
  background-color: var(--reos-slate) !important;
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
/* Capsule (v0.8.6): the sliding-emerald-glow highlight that lives
   under the active tab. Tim wants uniformity with the icon-rail UX
   \u2014 no boxes, just emerald text + emerald underline. Hide the
   capsule entirely; the active tab's border-bottom carries the
   indicator. */
.hr-tabs-capsule {
  display: none !important;
  background: transparent !important;
  border: none !important;
}
.hr-tabs-tab {
  color: var(--reos-ash) !important;
  background: transparent !important;
}
/* Hover (v0.8.6): emerald text, no bg \u2014 matches every other rail. */
.hr-tabs-tab:hover {
  color: var(--reos-emerald) !important;
  background: transparent !important;
}
/* Active: emerald text + emerald underline ONLY. No glow box. */
.hr-tabs-tab--active {
  color: var(--reos-emerald) !important;
  background: transparent !important;
  border-bottom: 2px solid var(--reos-emerald) !important;
}
/* Tab labels \u2014 follow tab state. */
html body .hr-tabs-tab .hr-tabs-tab__label,
html body .hr-tabs-tab [class*="tab__label"],
html body .hr-tabs-tab span {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Hover label \u2192 emerald (was bone in v0.8.5). */
html body .hr-tabs-tab:hover .hr-tabs-tab__label,
html body .hr-tabs-tab:hover [class*="tab__label"],
html body .hr-tabs-tab:hover span {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .hr-tabs-tab--active .hr-tabs-tab__label,
html body .hr-tabs-tab--active [class*="tab__label"],
html body .hr-tabs-tab--active span {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Active + hover: stay emerald. */
html body .hr-tabs-tab.hr-tabs-tab--active:hover .hr-tabs-tab__label,
html body .hr-tabs-tab.hr-tabs-tab--active:hover [class*="tab__label"],
html body .hr-tabs-tab.hr-tabs-tab--active:hover span {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
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

/* 18c-flicker (v0.8.15 \u2192 v0.8.16): kill the white flash on
   accordion expand/collapse. Tim flagged that clicking the chevron
   on Opportunities / Workflows / Client portal sections briefly
   flashes white before settling on graphite.

   v0.8.15 killed transitions on the family but the flash still
   happened \u2014 diagnosis showed Vue scoped CSS paints these white
   at (0,2,1) specificity which beats our (0,1,3) plain rules.
   The transition kill made the animation snap, but the new
   element's first-paint frame is still Vue's white.

   v0.8.16: bump specificity to ID-level via :not(#__reos_never_id)
   = (1,1,4), reliably beating Vue's (0,2,1) scoped attribute.
   Pair with transition: none / animation: none so the bg locks
   to graphite from first render with no animation gap. */
html body .hr-collapse:not(#__reos_never_id),
html body .hr-collapse-item:not(#__reos_never_id),
html body .hr-collapse-item__header:not(#__reos_never_id),
html body .hr-collapse-item__header-main:not(#__reos_never_id),
html body .hr-collapse-item__header-extra:not(#__reos_never_id),
html body .hr-collapse-item__content:not(#__reos_never_id),
html body .hr-collapse-item__content-inner:not(#__reos_never_id),
html body .hr-collapse-item__content-wrap:not(#__reos_never_id),
html body .hr-collapse-item__content-wrapper:not(#__reos_never_id),
html body .hr-accordion:not(#__reos_never_id),
html body [class*="hr-collapse-item__content"]:not(#__reos_never_id),
html body [class*="hr-collapse-item__header"]:not(#__reos_never_id) {
  transition: none !important;
  animation: none !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
html body .hr-collapse *,
html body .hr-collapse-item *,
html body .hr-accordion * {
  transition-property: color, border-color, opacity !important;
  /* Allow color/border transitions for hover states; just kill
     the bg-color animation that causes the white flash. */
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
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]),
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]) span,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]) p,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]) div,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]) [class*="text"],
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]) [class*="initials"] {
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
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
.hr-base-select-option:hover,
.hr-dropdown-option:hover {
  background: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Active/selected state \u2014 emerald-glow per canon (section 11b
   ACTIVE-ACCENT STANDARD). The hr-* dropdown family lacked this
   rule entirely, leaving selected rows to fall through to whatever
   GHL ships (often white or unstyled). */
.hr-base-select-option.is-selected,
.hr-base-select-option--selected,
.hr-base-select-option.is-active,
.hr-dropdown-option.is-selected,
.hr-dropdown-option--selected,
.hr-dropdown-option.is-active {
  background: rgba(15, 181, 126, 0.12) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* 18d. NAIVE UI DROPDOWN MENUS \u2014 the popover that opens from a context
   trigger (e.g. the kebab/3-dot menu next to "Edit Dashboard").

   Per the canonical state model (sidebar nav + Call Status dropdown row
   in contact-actions-bar.ts):

     Static          : bone text, transparent bg
     Hover           : bone text, SLATE bg  (no text color change)
     Active/Pressed/ : emerald text, emerald-glow bg
     keyboard-pending  (section 11b ACTIVE-ACCENT STANDARD)

   Hover is a SUBTLE reveal (slate bg, text stays bone). Emerald is
   reserved for the active/pressed/keyboard-selected state \u2014 when the
   user is committing to a choice, not just hovering. Matches sidebar
   inactive-hover and contact-bar Call Status dropdown rows. */
html body .n-dropdown,
html body .n-dropdown-menu {
  background-color: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  /* Naive UI computes per-option bg/text via CSS variables on the
     menu container (var(--n-option-color), var(--n-option-color-hover),
     etc.) \u2014 not via :hover rules on the option element. So our :hover
     author CSS doesn't even enter the cascade; the variable does. Pin
     the variable values here at !important so Naive UI's internal var()
     references resolve to REOS palette in every state. Covers two
     naming families because Naive UI shipped both --n-* and
     --n-option-* names across versions. */
  --n-color: transparent !important;
  --n-color-hover: var(--reos-slate) !important;
  --n-color-active: var(--reos-emerald-glow) !important;
  --n-color-active-hover: var(--reos-emerald-glow) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-active: var(--reos-emerald) !important;
  --n-text-color-active-hover: var(--reos-emerald) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-text-color-child-active: var(--reos-emerald) !important;
  --n-option-color: transparent !important;
  --n-option-color-hover: var(--reos-slate) !important;
  --n-option-color-active: var(--reos-emerald-glow) !important;
  --n-option-color-active-hover: var(--reos-emerald-glow) !important;
  --n-option-text-color: var(--reos-bone) !important;
  --n-option-text-color-hover: var(--reos-bone) !important;
  --n-option-text-color-active: var(--reos-emerald) !important;
  --n-option-text-color-disabled: var(--reos-ash) !important;
  --n-prefix-color: var(--reos-bone) !important;
  --n-prefix-color-hover: var(--reos-bone) !important;
  --n-suffix-color: var(--reos-bone) !important;
  --n-suffix-color-hover: var(--reos-bone) !important;
  --n-arrow-color: var(--reos-bone) !important;
  --n-divider-color: var(--reos-steel) !important;
}
/* Static row */
html body .n-dropdown-option,
html body .n-dropdown-option-body,
html body .n-dropdown-option-body__label,
html body .n-dropdown-option-body__prefix,
html body .n-dropdown-option-body__suffix {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-dropdown-option-body__prefix svg,
html body .n-dropdown-option-body__suffix svg,
html body .n-dropdown-option svg,
html body .n-dropdown-option svg path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}
/* HOVER \u2014 subtle slate bg, text stays bone. Matches sidebar inactive
   hover and Call Status row pattern. Naive UI uses both :hover and a
   .n-dropdown-option--hover class.

   Specificity-bumped form: GHL's Vue scoped CSS (.n-dropdown-option
   [data-v-xxx]:hover) sits at (0,0,3,0) \u2014 more than 'html body
   .n-dropdown-option:hover' at (0,0,2,2). Adding five :not() class
   exclusions takes us to (0,0,7,2), comfortably above any Vue scoped
   variant. Same approach used for .n-button in v0.7.38.

   We bump every hover-state selector AND target all the option
   subclasses (body, label, prefix, suffix) so GHL can't paint white
   on any of the inner elements either. */
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected):hover,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected).n-dropdown-option--hover,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected):hover .n-dropdown-option-body,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected):hover .n-dropdown-option-body__label,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected):hover .n-dropdown-option-body__prefix,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--selected):hover .n-dropdown-option-body__suffix {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* ACTIVE / PRESSED / keyboard-pending \u2014 emerald + emerald-glow per
   section 11b ACTIVE-ACCENT STANDARD. Naive UI uses .--pending for
   keyboard navigation cursor (the highlighted item that would commit
   on Enter). :active is the mousedown state \u2014 brief flash feedback.
   Same :not() specificity bump as hover. */
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider):not(.n-dropdown-option--hover):active,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider).n-dropdown-option--pending,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider).n-dropdown-option--selected,
html body .n-dropdown-option:not(.n-dropdown-option--disabled):not(.n-dropdown-option--group):not(.n-dropdown-option--children):not(.n-dropdown-divider).n-dropdown-option--active {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
}
html body .n-dropdown-option:active .n-dropdown-option-body__label,
html body .n-dropdown-option:active .n-dropdown-option-body__prefix,
html body .n-dropdown-option:active .n-dropdown-option-body__suffix,
html body .n-dropdown-option--pending .n-dropdown-option-body__label,
html body .n-dropdown-option--pending .n-dropdown-option-body__prefix,
html body .n-dropdown-option--pending .n-dropdown-option-body__suffix,
html body .n-dropdown-option--selected .n-dropdown-option-body__label,
html body .n-dropdown-option--selected .n-dropdown-option-body__prefix,
html body .n-dropdown-option--selected .n-dropdown-option-body__suffix,
html body .n-dropdown-option--active .n-dropdown-option-body__label,
html body .n-dropdown-option--active .n-dropdown-option-body__prefix,
html body .n-dropdown-option--active .n-dropdown-option-body__suffix {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-dropdown-option:active svg,
html body .n-dropdown-option:active svg path,
html body .n-dropdown-option--pending svg,
html body .n-dropdown-option--pending svg path,
html body .n-dropdown-option--selected svg,
html body .n-dropdown-option--selected svg path,
html body .n-dropdown-option--active svg,
html body .n-dropdown-option--active svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Dividers between groups */
html body .n-dropdown-divider {
  background-color: var(--reos-steel) !important;
}
/* KILL TRANSITIONS on every interactive-list component family.
   Naive UI applies a transition on background-color (~0.3s) that
   fades through white between states. Result: moving the pointer
   from row A to row B makes row A flash white briefly while it
   transitions out of its hover state \u2014 Tim's actual diagnosis after
   a few rounds of looking in the wrong places.

   Rows that can't be clicked (no click handler \u2014 already-active items
   like "Set as Default" on a default dashboard, "Delete" when locked
   down) hold the hover state longer because there's no commit event
   to end it, making the flash more visible.

   Instant state changes look correct for menu options anyway \u2014 there's
   no benefit to fading hover bg on a list of clickable choices.

   Applied globally to every option family that uses Naive UI's
   transition pattern (Naive UI + HR design system equivalents). */
html body .n-dropdown-option,
html body .n-dropdown-option *,
html body .n-dropdown-option-body,
html body .n-dropdown-option-body *,
html body .n-base-select-option,
html body .n-base-select-option *,
html body .n-base-select-option__content,
html body .hr-dropdown-option,
html body .hr-dropdown-option *,
html body .hr-base-select-option,
html body .hr-base-select-option *,
html body .hr-base-select-option__content {
  transition: none !important;
  animation: none !important;
}
/* DISABLED dropdown rows \u2014 items the user can't interact with (e.g.
   "Set as default dashboard" when it's already default, "Manage
   permissions" when the user lacks the role). Render permanently
   muted (ash + 0.5 opacity) with NO hover effect \u2014 disabled things
   shouldn't react to the pointer.

   v0.7.43 excluded :not(.n-dropdown-option--disabled) from the hover
   rule, so disabled items fell through to GHL's default white hover \u2014
   producing a white bar over white text. This rule covers BOTH the
   static and :hover states for disabled, pinning them to transparent
   bg + ash text regardless. Specificity-bumped via .class.class
   doubling so it beats GHL's Vue scoped CSS (same approach as the
   other dropdown state rules). */
html body .n-dropdown-option.n-dropdown-option--disabled,
html body .n-dropdown-option.n-dropdown-option--disabled:hover,
html body .n-dropdown-option.n-dropdown-option--disabled:active,
html body .n-dropdown-option.n-dropdown-option--disabled .n-dropdown-option-body,
html body .n-dropdown-option.n-dropdown-option--disabled .n-dropdown-option-body__label,
html body .n-dropdown-option.n-dropdown-option--disabled .n-dropdown-option-body__prefix,
html body .n-dropdown-option.n-dropdown-option--disabled .n-dropdown-option-body__suffix,
html body .n-dropdown-option.n-dropdown-option--disabled:hover .n-dropdown-option-body,
html body .n-dropdown-option.n-dropdown-option--disabled:hover .n-dropdown-option-body__label,
html body .n-dropdown-option.n-dropdown-option--disabled:hover .n-dropdown-option-body__prefix,
html body .n-dropdown-option.n-dropdown-option--disabled:hover .n-dropdown-option-body__suffix {
  background-color: transparent !important;
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  cursor: not-allowed !important;
  opacity: 0.5 !important;
}
html body .n-dropdown-option.n-dropdown-option--disabled svg,
html body .n-dropdown-option.n-dropdown-option--disabled svg path,
html body .n-dropdown-option.n-dropdown-option--disabled:hover svg,
html body .n-dropdown-option.n-dropdown-option--disabled:hover svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
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

/* Force every descendant of a dropdown trigger to transparent bg, so
   the trigger's slate fills the visible area (no inner element can
   paint its own darker bg over it). Caveat: this can also affect
   menu popovers if they're rendered AS A CHILD of a trigger, so we
   exclude menu/popover/option classes. */
.hr-select > *:not([class*="menu"]):not([class*="popover"]):not([class*="option"]),
.hr-base-select > *:not([class*="menu"]):not([class*="popover"]):not([class*="option"]),
.hr-select-trigger > *,
.hr-base-select__inner > *,
[role="combobox"] > *,
[aria-haspopup="listbox"] > *:not([class*="menu"]):not([class*="popover"]),
.el-select__wrapper > *,
.el-input__wrapper > *,
[class*="hr-select"]:not([class*="menu"]):not([class*="option"]):not([class*="popover"]):not([class*="dropdown"]):not([class*="overlay"]) > *:not([class*="menu"]):not([class*="popover"]),
[class*="select-trigger"]:not([class*="menu"]) > *,
[class*="combobox"]:not([class*="menu"]) > *,
[class*="dropdown-toggle"] > *,
[class*="dropdown-input"] > * {
  background-color: transparent !important;
}

/* END REINVEST OS THEME */
`,Ze=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}}],Qe=o=>{if(!o||o[0]!=="#")return o;let e=o.slice(1);if(e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6&&e.length!==8)return o;let t=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),n=parseInt(e.slice(4,6),16);if(isNaN(t)||isNaN(r)||isNaN(n))return o;if(e.length===8){let i=parseInt(e.slice(6,8),16)/255;return`rgba(${t}, ${r}, ${n}, ${i})`}return`rgb(${t}, ${r}, ${n})`},et=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),$=()=>{for(let o of Ze){let e;try{e=document.querySelectorAll(o.selector)}catch{continue}e.forEach(t=>{for(let[r,n]of Object.entries(o.styles)){let i=t.style.getPropertyPriority(r),s=t.style.getPropertyValue(r),a=et.has(r)?Qe(n):n;i==="important"&&s===a||t.style.setProperty(r,n,"important")}})}},Y="#1A1F28",tt=26,ot=31,rt=40,be=new Set,he=new Set,V=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0||(e.textContent||"").trim()!=="--")return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;e.style.setProperty("display","none","important");let n=e.className?.toString()||"<no class>";!he.has(n)&&n!=="<no class>"&&(he.add(n),h.debug(`Hid empty "--" leaf: "${n}"`))})},pe=new Set,nt=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let t=(e.className?.toString()||"").toLowerCase();if(t.includes("ai-button")||t.includes("ask-ai")||t.includes("bg-clip-text")||t.includes("text-transparent")||e.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=e.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g")return;let n=!1;for(let m of Array.from(e.childNodes))if(m.nodeType===Node.TEXT_NODE&&(m.textContent||"").trim()){n=!0;break}if(!n)return;let i=Array.from(e.children);if(i.length>0&&i.every(m=>{let c=m.tagName.toLowerCase();return c==="svg"||c==="img"})&&!n)return;let d=window.getComputedStyle(e).color;if(!(d==="rgb(255, 255, 255)"||d==="rgba(255, 255, 255, 1)"||d==="#ffffff"||d==="white"))return;e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let p=e.className?.toString()||"<no class>";!pe.has(p)&&p!=="<no class>"&&(pe.add(p),h.debug(`Remapped pure-white text -> bone: "${p}"`))})},me=new Set,at=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(e=>{e.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let n=(r.className?.toString()||"").toLowerCase();if(n.includes("avatar"))return;let i=window.getComputedStyle(r),s=i.backgroundColor,a=i.backgroundImage||"",d=!1;if(a!=="none"&&a.includes("gradient"))d=!0;else if(s&&s!=="rgba(0, 0, 0, 0)"&&s!=="transparent"){let y=s.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(y&&parseFloat(y[1])<.6)return;let g=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(g){let k=parseInt(g[1],10),S=parseInt(g[2],10),q=parseInt(g[3],10);(k>=60||S>=60||q>=60)&&(k>230&&S>230&&q>230||(k>=80||S>=80||q>=80)&&(d=!0))}}if(!d)return;let p=(r.textContent||"").trim(),m=n,c=Array.from(r.querySelectorAll("*")).map(y=>(y.className?.toString()||"").toLowerCase()).join(" "),f=p.toLowerCase()==="ask ai"||m.includes("ai-button")||m.includes("ask-ai")||m.includes("askai"),u=m.includes("bg-clip-text")||m.includes("text-transparent")||c.includes("bg-clip-text")||c.includes("text-transparent"),v=Array.from(r.querySelectorAll("*")).some(y=>{let g=window.getComputedStyle(y),k=g.getPropertyValue("-webkit-background-clip")||"",S=g.getPropertyValue("background-clip")||"";return k.includes("text")||S.includes("text")});if(f||u||v){let y=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],g=k=>{y.forEach(S=>k.style.removeProperty(S))};g(r),r.querySelectorAll("*").forEach(g);return}let w="#12161D";r.style.setProperty("color",w,"important"),r.querySelectorAll("*").forEach(y=>{let g=y.tagName.toLowerCase();g==="svg"||g==="path"||g==="circle"||g==="rect"||g==="polygon"||g==="polyline"||g==="line"||g==="g"?(y.style.setProperty("fill",w,"important"),y.style.setProperty("stroke",w,"important"),y.style.setProperty("color",w,"important")):(y.style.setProperty("color",w,"important"),y.style.setProperty("-webkit-text-fill-color",w,"important"))});let T=r.className?.toString()||"<no class>";!me.has(T)&&T!=="<no class>"&&(me.add(T),h.debug(`Darkened SVG icons on colored button: "${T}"`))})})},ue=new Set,st=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let t=e.getBoundingClientRect();if(t.width===0||t.height===0||t.width<20||t.width>64||t.height<20||t.height>64)return;let r=t.top+t.height/2;(e.parentElement||e).querySelectorAll("svg, img").forEach(a=>{let d=a;if(d.closest("[id^='ws-crm-']"))return;let b=a.getBoundingClientRect();if(b.width===0||b.width>28||b.height>28)return;let p=b.left<t.right&&b.right>t.left,m=b.top<t.bottom&&b.bottom>t.top;if(!(p&&m)||b.top+b.height/2<r)return;let f=b.width*b.height/(t.width*t.height);if(f>.55)return;let u=d,v=d.parentElement,w=0;for(;v&&v!==e&&w<3;){let y=v.getBoundingClientRect();if(y.width>0&&y.width<=30&&y.height<=30)u=v;else break;v=v.parentElement,w++}u.style.setProperty("transform","translateY(11px)","important");let T=(u.className?.toString()||"")+" "+u.tagName;ue.has(T)||(ue.add(T),h.debug(`Dropped activity badge 11px (${b.width.toFixed(0)}x${b.height.toFixed(0)} icon, ratio ${f.toFixed(2)}): "${T}"`))})})},it="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",lt=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let t=(e.className?.toString()||"").toLowerCase();t.includes("active")||t.includes("router-link-active")?(e.style.setProperty("color","#0FB57E","important"),e.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),e.style.setProperty("opacity","1","important"),e.querySelectorAll("span, p, div").forEach(n=>{n.style.setProperty("color","#0FB57E","important"),n.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),e.querySelectorAll("img").forEach(n=>{n.style.setProperty("filter",it,"important")}),e.querySelectorAll("svg").forEach(n=>{n.style.setProperty("color","#0FB57E","important"),n.style.setProperty("stroke","#0FB57E","important")})):((e.style.color==="rgb(18, 22, 29)"||e.style.color==="#12161D"||e.style.color==="#0FB57E"||e.style.color==="rgb(15, 181, 126)")&&(e.style.removeProperty("color"),e.style.removeProperty("-webkit-text-fill-color")),e.querySelectorAll("span, p, div").forEach(n=>{let i=n.style.color;(i==="rgb(18, 22, 29)"||i==="#12161D"||i==="#0FB57E"||i==="rgb(15, 181, 126)")&&(n.style.removeProperty("color"),n.style.removeProperty("-webkit-text-fill-color"))}),e.querySelectorAll("img").forEach(n=>{n.style.filter&&n.style.filter.includes("hue-rotate(122")&&n.style.removeProperty("filter")}))})},ve=new Set,dt=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;e.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let n=r.getBoundingClientRect();if(n.width===0||n.height===0||n.width>56||n.height>56||!r.querySelector("svg"))return;let s=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!s)return;let a=parseInt(s[1],10),d=parseInt(s[2],10),b=parseInt(s[3],10);if(!(a>200&&d>200&&b>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!ve.has(p)&&p!=="<no class>"&&(ve.add(p),h.debug(`Stripped dialog icon circle (${n.width.toFixed(0)}x${n.height.toFixed(0)}, rgb(${a},${d},${b})): "${p}"`))})})},ye=new Set,ct=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let t=e.parentElement,r=0;for(;t&&r<3&&!t.closest("[id^='ws-crm-']");){let n=(t.className?.toString()||"").toLowerCase();if(!(n.includes("ai-button")||n.includes("ask-ai")||n.includes("askai"))){let s=t.getBoundingClientRect();if(s.width>0&&s.height>0&&s.width<=400&&s.height<=80){t.style.setProperty("background-color","#12161D","important"),t.style.setProperty("background-image","none","important");let a=t.className?.toString()||"<no class>";!ye.has(a)&&a!=="<no class>"&&(ye.add(a),h.debug(`Painted Ask AI wrapper graphite: "${a}"`))}}t=t.parentElement,r++}})},ge=new Set,bt=()=>{let o=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),e=document.querySelectorAll("div, section, aside"),t=[];e.forEach(n=>{if(n.id?.startsWith("ws-crm-")||n.closest("[id^='ws-crm-']"))return;let i=window.getComputedStyle(n);if(i.position!=="fixed"&&i.position!=="absolute")return;let s=parseInt(i.zIndex,10);if(!isFinite(s)||s<50)return;let a=n.getBoundingClientRect();a.width<240||a.height<120||a.width>1500||a.height>900||t.push(n)}),[...o,...t].forEach(n=>{n.querySelectorAll("*").forEach(s=>{if(s.id?.startsWith("ws-crm-")||s.closest("[id^='ws-crm-']"))return;let a=(s.className?.toString()||"").toLowerCase();if(a.includes("avatar")||a.includes("notification-dot")||a.includes("indicator"))return;if(a.includes("sidebar-option-button")||s.closest(".sidebar-option-button")||s.closest("nav[class*='w-13']")){let w=s.getAttribute("style")||"";(w.includes("background-color")||w.includes("color"))&&(s.style.removeProperty("background-color"),s.style.removeProperty("color"));return}if(a.includes("tabulator")||a.includes("tabulator-page")||s.closest("[class*='tabulator']")){(s.getAttribute("style")||"").includes("background-color")&&s.style.removeProperty("background-color");return}if(a.includes("hr-card")||s.closest(".hr-card")||s.id&&s.id.startsWith("opportunity-")){let w=s.getAttribute("style")||"";(w.includes("background-color")||w.includes("color"))&&(s.style.removeProperty("background-color"),s.style.removeProperty("color"));return}if(a.includes("ai-button")||a.includes("ask-ai")||a.includes("bg-clip-text")||a.includes("text-transparent")||s.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(s).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let b=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!b)return;let p=parseInt(b[1],10),m=parseInt(b[2],10),c=parseInt(b[3],10);if(!(p>200&&m>200&&c>200))return;let u=s.getBoundingClientRect();if(u.width<24||u.height<16||u.width>1400)return;s.style.setProperty("background-color","#12161D","important"),s.style.setProperty("color","#EDEEF0","important");let v=s.className?.toString()||"<no class>";!ge.has(v)&&v!=="<no class>"&&(ge.add(v),h.debug(`Coerced light bg (${u.width.toFixed(0)}x${u.height.toFixed(0)}, rgb(${p},${m},${c})): "${v}"`))})})},_e=new Set,ht=()=>{let o="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0)return;let r=(t.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||t.closest(o)||t.closest("[class*='avatar'], [class*='hr-avatar']")||t.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||t.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(t.matches("[role='heading']")||t.closest("[role='heading']")||t.matches("h1, h2, h3")||t.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){t.matches("h1, h2, h3")&&(t.getAttribute("style")||"").includes("color")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color"));return}if(t.closest(".hr-button, .n-button")||t.matches(".hr-button__content, .n-button__content")||t.closest(".hr-button__content, .n-button__content")){(t.getAttribute("style")||"").includes("color")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color"));return}if(t.closest(".bg-primary-50, [class*='bg-primary-50']")){(t.getAttribute("style")||"").includes("color")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color"));return}let n=t,i=null;for(let f=0;f<4&&n;f++){let u=n.nextElementSibling;if(u&&(u.matches(o)||u.querySelector(o)!==null)){i=u;break}n=n.parentElement}if(!i)return;let s=t.getBoundingClientRect();if(s.width===0||s.height===0||s.width>400||s.height>60)return;t.style.setProperty("color","#9098A3","important"),t.style.setProperty("-webkit-text-fill-color","#9098A3","important");let a=i,d=a.getBoundingClientRect(),b=a.className?.toString()||"",p=b.includes("schedule-ui-form-weekly-schedule-checkbox")||a.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,m=b.includes("hl-form-item")||b.includes("n-form-item--top-labelled")||a.closest(".hl-form-item")!==null;!p&&!m&&d.width>0&&d.width<=800&&d.height>0&&d.height<=100&&(a.style.setProperty("background-color",Y,"important"),a.style.setProperty("border-color","#252C36","important"),a.style.setProperty("border-style","solid","important"),a.style.setProperty("border-width","1px","important"),a.style.setProperty("border-radius","4px","important"));let c=t.className?.toString()||"<no class>";!_e.has(c)&&c!=="<no class>"&&(_e.add(c),h.debug(`Colored field label "${r.slice(0,30)}": "${c}"`))})},fe=new Set,pt=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let t=(e.className?.toString()||"").toLowerCase();if(t.includes("dropdown")||t.includes("option-avatar"))return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||e.querySelector("svg, img")!==null)return;let i=(e.textContent||"").trim();if(i.length===0||i.length>4)return;let s=Math.min(r.width,r.height),a=Math.max(16,Math.min(24,Math.round(s*.6)));e.style.setProperty("font-size",`${a}px`,"important"),e.style.setProperty("line-height","1","important"),e.style.setProperty("display","flex","important"),e.style.setProperty("align-items","center","important"),e.style.setProperty("justify-content","center","important"),e.style.setProperty("text-align","center","important"),e.querySelectorAll("*").forEach(b=>{b.tagName==="svg"||b.tagName==="SVG"||b.tagName!=="IMG"&&(b.style.setProperty("font-size",`${a}px`,"important"),b.style.setProperty("line-height","1","important"),b.style.setProperty("text-align","center","important"))});let d=e.className?.toString()||"<no class>";!fe.has(d)&&d!=="<no class>"&&(fe.add(d),h.debug(`Resized avatar text to ${a}px (circle ${s.toFixed(0)}px): "${d}"`))})},we=new Set,mt=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let t=e.getBoundingClientRect();if(t.width===0||t.height===0)return;e.style.setProperty("background-color",Y,"important"),e.style.setProperty("border-color","#252C36","important"),e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=e.className?.toString()||"<no class>";!we.has(r)&&r!=="<no class>"&&(we.add(r),h.debug(`Forced input slate bg: "${r}"`))})},U=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||e.id==="chat-filter"||e.id==="phone-calls"||e.id==="archive-conversation"||e.id==="star-toggle"||e.id==="read-toggle"||e.id==="delete-conversation")return;if(e.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let c=e.getAttribute("style")||"";(c.includes("background-color")||c.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}let t=e.className?.toString()||"";if(t.includes("bg-inherit")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(e.closest(".pipeline-ribbon")&&t.split(" ").includes("count")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.split(" ").includes("tabulator-page")){let c=e.getAttribute("style")||"";(c.includes("background-color")||c.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(c=>t.includes(c))){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.includes("schedule-ui-form-weekly-schedule-checkbox")){let c=e.getAttribute("style")||"";(c.includes("background-color")||c.includes("border-color")||c.includes("border-style")||c.includes("border-width"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"),e.style.removeProperty("border-style"),e.style.removeProperty("border-width"));return}if(t.includes("n-button")&&t.includes("icon-only")&&!t.includes("quaternary")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.includes("n-data-table-td--fixed-right")||t.includes("n-data-table-td--last-col")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.includes("hr-card")||e.closest(".hr-card")||e.id&&e.id.startsWith("opportunity-")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.includes("bg-gray-50")||t.includes("bg-gray-100")||t.includes("bg-gray-200")||t.includes("bg-white")||t.includes("bg-blue-50")||t.includes("bg-blue-100")||t.includes("bg-sky-50")||t.includes("bg-indigo-50")||t.includes("bg-slate-50")||t.includes("bg-neutral-50")||t.includes("bg-zinc-50")||t.includes("bg-stone-50")||t.includes("F7F9FD")||t.includes("F9FAFB")||t.includes("ECEEF2")||t.includes("eceef2")||t.includes("EFF4FF")||t.includes("eff4ff")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(t.includes("hr-collapse-item")||t.includes("hr-collapse hr-accordion")||t.includes("hr-accordion"))return;if(t.includes("sidebar-option-button")||e.closest(".sidebar-option-button")||e.closest("nav[class*='w-13']")){let c=e.getAttribute("style")||"";(c.includes("background-color")||c.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}if(e.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let c=e.getAttribute("style")||"";(c.includes("background-color")||c.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}let n=window.getComputedStyle(e).backgroundColor;if(!n||n==="rgba(0, 0, 0, 0)"||n==="transparent")return;let i=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let s=parseInt(i[1],10),a=parseInt(i[2],10),d=parseInt(i[3],10);if(!(s<tt&&a<ot&&d<rt))return;let p=e.getBoundingClientRect();if(p.width===0||p.height===0||p.width>800||p.height>200)return;e.style.setProperty("background-color",Y,"important");let m=e.className?.toString()||"<no class>";!be.has(m)&&m!=="<no class>"&&(be.add(m),h.debug(`Coerced dark bg to slate (${p.width.toFixed(0)}x${p.height.toFixed(0)}, rgb(${s},${a},${d})): "${m}"`))})},xe=()=>{let o,e=()=>{o===void 0&&(o=window.setTimeout(()=>{o=void 0,$(),mt(),U(),V(),ht(),bt(),ct(),dt(),lt(),at(),pt(),st(),nt()},100))};$(),U(),V(),window.setTimeout(()=>{$(),U(),V()},500),window.setTimeout(()=>{$(),U(),V()},1500),new MutationObserver(()=>{e()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},X,ut=()=>{let o=()=>{let t=document.getElementById(z);!t||!document.head||document.head.lastElementChild===t||document.head.appendChild(t)};new MutationObserver(t=>{let r=!1;for(let n of t){for(let i of Array.from(n.addedNodes)){if(!(i instanceof Element))continue;let s=i.tagName.toLowerCase();if(s==="style"||s==="link"){if(i.id===z||i.id===ke)continue;r=!0;break}}if(r)break}r&&X===void 0&&(X=window.setTimeout(()=>{X=void 0,o()},150))}).observe(document.head,{childList:!0}),o()},Ee=()=>{if(Ye(),!document.getElementById(z)){let o=document.createElement("style");o.id=z,o.textContent=Je,document.head.appendChild(o),h.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?xe():window.addEventListener("DOMContentLoaded",xe)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,ut())};var Te="ws-crm-customizer-version-badge",Se=()=>{if(document.getElementById(Te))return;let o=document.createElement("div");o.id=Te,o.style.cssText=`
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
  `,o.textContent=`Customizer v${R}`,o.title=`Built ${B}
Click to dismiss for this session`,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)"}),o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),200)}),document.body.appendChild(o)};var Fe=()=>{h.info(`Loaded v${R} (built ${B})`),ce(),Ee(),Q(),Z(o=>{h.debug("Page handler firing for:",o),Se(),re(),le()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fe):Fe();})();
//# sourceMappingURL=customizer.js.map
