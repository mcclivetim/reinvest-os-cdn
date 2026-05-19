/* Wholesaling CRM Customizer v0.8.16 — built 2026-05-19T19:23:04.604Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var N="[wholesaling-crm-customizer]",Ct="__WS_CRM_DEBUG",At=()=>!!window[Ct],h={info(...o){console.log(N,...o)},warn(...o){console.warn(N,...o)},error(...o){console.error(N,...o)},debug(...o){At()&&console.log(N,"[debug]",...o)}};var Z=()=>{let o=window.location.pathname;return o.includes("/contacts/detail/")?"contact-detail":o.includes("/contacts/smart-list")||o.includes("/contacts/")?"contact-list":o.includes("/opportunities/detail/")?"opportunity-detail":o.includes("/opportunities/")?"opportunity-list":o.includes("/calendars/")?"calendar":o.includes("/dashboard")?"dashboard":o.includes("/conversations")?"conversations":o.includes("/settings")?"settings":"other"},R="",F="other",q=new Set,H=()=>{if(window.location.pathname!==R){R=window.location.pathname,F=Z(),h.debug("Page changed:",F,R);for(let o of q)try{o(F)}catch(t){h.error("Subscriber threw:",t)}}},Q=o=>(q.add(o),setTimeout(()=>o(F),0),()=>{q.delete(o)}),tt=()=>{F=Z(),R=window.location.pathname,h.debug("Router init, current page:",F);let o=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(e,r,a){o(e,r,a),H()},history.replaceState=function(e,r,a){t(e,r,a),H()},window.addEventListener("popstate",H),setInterval(H,1e3)};var M="0.8.16",B="2026-05-19T19:23:04.605Z";var Lt=/\/contacts\/detail\/([A-Za-z0-9]+)/,It=/\/v2\/location\/([A-Za-z0-9]+)/,E=()=>{let o=window.location.pathname,t=o.match(Lt);if(!t)return null;let e=o.match(It);return{contactId:t[1],locationId:e?e[1]:null}};var C=(o,t={})=>{let{timeoutMs:e=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,l)=>{let n=a.querySelector(o);if(n){s(n);return}let d,c,p=()=>{b&&b.disconnect(),d!==void 0&&window.clearTimeout(d),c!==void 0&&window.clearInterval(c)},b=new MutationObserver(()=>{let g=a.querySelector(o);g&&(p(),s(g))});b.observe(document.body,{childList:!0,subtree:!0}),c=window.setInterval(()=>{let g=a.querySelector(o);g&&(p(),s(g))},r),d=window.setTimeout(()=>{p(),h.warn(`waitForElement timed out for selector: ${o}`),l(new Error(`Selector not found within ${e}ms: ${o}`))},e)})};var i={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},x={sm:"4px",md:"6px",lg:"10px",pill:"999px"},f={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},j={purple:"#8B5CF6",green:i.emerald,orange:i.amber,red:i.crimson},et=o=>{let t=o==="emerald"?i.emeraldGlow:o==="amber"?i.amberGlow:i.slate,e=o==="emerald"?i.emeraldBorder:o==="amber"?"rgba(232, 163, 60, 0.3)":i.steel,r=o==="emerald"?i.emerald:o==="amber"?i.amber:i.bone;return`
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
  `},A=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${i.emerald};
  color: ${i.obsidian};
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
`,L=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${i.bone};
  border: 1px solid ${i.steel};
  border-radius: ${x.sm};
  font-family: ${f.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var I="ws-crm-claim-release-pill",rt=o=>{let t=Array.from(o.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Dt=({contactId:o,mode:t})=>{let e=document.createElement("button");e.id=I,e.type="button",e.dataset.contactId=o,e.dataset.mode=t;let r=t==="claim"?"emerald":"amber",a=t==="claim"?i.emerald:i.amber;return e.style.cssText=et(r),e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `,e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{h.info(`Claim/Release pill clicked for contact ${o}: ${t}`);let s=e.lastElementChild,l=s?.textContent??"";s&&(s.textContent="Working\u2026"),e.style.opacity="0.7",e.disabled=!0,setTimeout(()=>{s&&(s.textContent=l),e.style.opacity="1",e.disabled=!1},700)}),e},Nt=async(o,t=1e4)=>{let e=Date.now();for(;Date.now()-e<t;){let r=rt(o);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},ot=(o,t)=>{let e=Dt({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${I}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(e),o.appendChild(r)},Ht=async()=>{let o=E();if(!o){document.getElementById(I)?.remove();return}let t=document.getElementById(I);if(!(t&&t.dataset.contactId===o.contactId)){t&&t.remove();try{let e=await C("#record-details-lhs",{timeoutMs:1e4}),r=await Nt(e),a=E();if(!a||a.contactId!==o.contactId)return;if(!r){h.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}ot(r,o.contactId),h.debug(`Mounted Claim/Release pill next to name for ${o.contactId}`);let s=null;s=new MutationObserver(async()=>{if(!(E()?.contactId===o.contactId)){s?.disconnect();return}if(document.getElementById(I))return;let n=rt(e);n&&(ot(n,o.contactId),h.debug("Re-mounted Claim/Release pill after React wipe"))}),s.observe(e,{childList:!0,subtree:!0})}catch(e){h.warn("Could not mount Claim/Release pill:",e)}}},at=()=>{Ht()};var Rt="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set";var Mt="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",Bt=()=>{let o=window.WS_CRM_USER_ID;if(o&&/^[A-Za-z0-9]{15,30}$/.test(o))return o;let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let r of e)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),s=a.id??a._id;if(s&&/^[A-Za-z0-9]{15,30}$/.test(s))return s}for(let a of["tokenUser","currentUser","ghl_user"]){let s=localStorage.getItem(a);if(s)try{let l=JSON.parse(s),n=l.id??l._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}catch{}}}catch{}return null},Ot=async({contactId:o,locationId:t,status:e,userId:r,deadReason:a})=>{let s={call_status:e,triggered_by_user_id:r??""};a&&(s.dead_reason=a);let n=await fetch(Rt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:o,location:{id:t},customData:s}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},Pt=async({contactId:o,tenantId:t})=>{let e=await fetch(Mt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:o}),credentials:"omit"});if(!e.ok)throw new Error(`Sanity check returned ${e.status} ${e.statusText}`);return await e.json()};var O="ws-crm-contact-actions-bar",Gt="ws-crm-call-status-dropdown",nt="ws-crm-offer-made-modal",$t=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Ut=[".central-panel","[class*='central-panel']"],Vt=async()=>{for(let o of Ut)try{let t=await C(o,{timeoutMs:3e3});if(t)return t}catch{}try{return(await C("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},zt=o=>{let t=document.createElement("div");t.id=Gt,t.style.cssText="position: relative; flex-shrink: 0;";let e=document.createElement("button");e.type="button",e.style.cssText=L,e.innerHTML=`
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
    border-radius: ${x.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,$t.forEach(a=>{let s=document.createElement("button");s.type="button",s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${i.bone};
      border: none;
      border-radius: ${x.sm};
      font-family: ${f.sans};
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
        background: ${j[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,s.addEventListener("mouseenter",()=>{s.style.background=i.slate}),s.addEventListener("mouseleave",()=>{s.style.background="transparent"}),s.addEventListener("click",async()=>{h.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${o}`);let l=e.firstElementChild,n=e.children[1],d=e.children[2];l&&(l.style.background=j[a.color]),n&&(n.textContent=a.label),r.style.display="none";let p=E()?.locationId,b=Bt();if(!p){h.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),n&&(n.textContent=`${a.label} (no tenant!)`),n&&(n.style.color=i.amber);return}if(a.color==="green"&&!b){h.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),n&&(n.textContent=`${a.label} (no user!)`),n&&(n.style.color=i.amber);return}let g=d?.textContent??"\u25BE",k=async v=>{d&&(d.textContent="\u2026"),e.style.opacity="0.75";try{await Ot({contactId:o,locationId:p,status:a.label,userId:b,deadReason:v}),d&&(d.textContent="\u2713"),setTimeout(()=>{d&&(d.textContent=g),e.style.opacity="1"},900)}catch(m){h.warn("Call Status webhook failed:",m),d&&(d.textContent="\u2717"),n&&(n.style.color=i.amber),e.style.opacity="1",setTimeout(()=>{d&&(d.textContent=g),n&&(n.style.color=i.bone)},1800)}};if(a.value==="dead-deal"){let v=n?.textContent??"";qt(m=>{k(m)},()=>{n&&(n.textContent=v)});return}if(a.value==="appointment-booked"){let v=n?.textContent??"";try{(await Pt({contactId:o,tenantId:p})).ok?await k():jt(()=>{k()},()=>{n&&(n.textContent=v)})}catch(m){h.warn("Appointment sanity check failed; firing anyway:",m),await k()}return}await k()}),r.appendChild(s)}),e.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{t.contains(a.target)||(r.style.display="none")}),t.appendChild(e),t.appendChild(r),t},Wt=o=>{document.getElementById(nt)?.remove();let t=document.createElement("div");t.id=nt,t.style.cssText=`
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
    background: ${i.graphite};
    border: 1px solid ${i.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${i.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);e.innerHTML=`
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
      border-radius: ${x.sm};
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
        border-radius: ${x.sm};
        color: ${i.bone};
        font-family: ${f.sans};
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
  `,t.appendChild(e),document.body.appendChild(t);let s=()=>t.remove();t.addEventListener("click",l=>{l.target===t&&s()}),e.querySelector("#ws-offer-cancel")?.addEventListener("click",s),e.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let l=(e.querySelector("#ws-offer-amount")?.value??"").trim(),n=e.querySelector("#ws-offer-expires")?.value??"";if(!l||Number(l)<=0){h.warn("Offer Made submit blocked \u2014 invalid amount");return}h.info(`Offer Made recorded for contact ${o}: $${l}, expires ${n}`),s()}),setTimeout(()=>{e.querySelector("#ws-offer-amount")?.focus()},0)},st="ws-crm-dead-deal-modal",qt=(o,t)=>{document.getElementById(st)?.remove();let e=document.createElement("div");e.id=st,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${f.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(460px, 92vw);
    background: ${i.graphite};
    border: 1px solid ${i.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${i.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${i.amber};
      margin-bottom: 8px;
    ">Mark Lead Dead</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Why is this deal dead?</div>
    <div style="
      font-size: 12px;
      color: ${i.ash};
      margin-bottom: 20px;
    ">Logged as a contact note so the manager can spot patterns later (lost-reason coaching). Required.</div>

    <label style="
      display: block;
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${i.ash};
      margin-bottom: 6px;
    ">Reason</label>
    <textarea id="ws-dead-reason" rows="4" placeholder="e.g. Seller decided to keep the property after talking to family"
      style="
        width: 100%;
        background: ${i.slate};
        border: 1px solid ${i.steel};
        border-radius: ${x.sm};
        color: ${i.bone};
        font-family: ${f.sans};
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
      color: ${i.amber};
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
  `,e.appendChild(r),document.body.appendChild(e);let a=()=>e.remove(),s=()=>{a(),t()};e.addEventListener("click",n=>{n.target===e&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let l=()=>{let n=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),c=(n?.value??"").trim();if(!c){d&&(d.textContent="Please enter a reason."),n?.focus();return}if(c.length<4){d&&(d.textContent="Please enter at least a few words."),n?.focus();return}a(),o(c)};r.querySelector("#ws-dead-submit")?.addEventListener("click",l),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),l()),n.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},lt="ws-crm-appointment-sanity-modal",jt=(o,t)=>{document.getElementById(lt)?.remove();let e=document.createElement("div");e.id=lt,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${f.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(440px, 92vw);
    background: ${i.graphite};
    border: 1px solid ${i.steel};
    border-radius: ${x.lg};
    padding: 24px 28px;
    color: ${i.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${f.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${i.amber};
      margin-bottom: 8px;
    ">Heads up</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    ">No upcoming appointment found.</div>
    <div style="
      font-size: 13px;
      color: ${i.ash};
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
        background: ${i.amber};
      ">Mark Anyway</button>
    </div>
  `,e.appendChild(r),document.body.appendChild(e);let a=()=>e.remove(),s=()=>{a(),t()};e.addEventListener("click",n=>{n.target===e&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),o()});let l=n=>{n.key==="Escape"&&(document.removeEventListener("keydown",l),s())};document.addEventListener("keydown",l)},it=o=>{let t=document.createElement("div");t.id=O,t.dataset.contactId=o,t.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${i.graphite};
    border-bottom: 1px solid ${i.steel};
    flex-shrink: 0;
  `,t.appendChild(zt(o));let e=document.createElement("button");return e.type="button",e.style.cssText=A,e.textContent="Offer Made",e.addEventListener("click",()=>Wt(o)),t.appendChild(e),t},Kt=async()=>{let o=E();if(!o){document.getElementById(O)?.remove();return}let t=document.getElementById(O);if(t&&t.dataset.contactId===o.contactId)return;t&&t.remove();let e=await Vt();if(!e){h.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=E();if(!r||r.contactId!==o.contactId)return;let a=it(o.contactId);a.dataset.mountTarget=e.className||"central-panel",e.insertBefore(a,e.firstChild),h.debug(`Mounted contact actions bar for ${o.contactId}`);let s=null;s=new MutationObserver(()=>{let l=document.getElementById(O);if(!(E()?.contactId===o.contactId)){s?.disconnect();return}if(!l){let d=it(o.contactId);d.dataset.mountTarget=a.dataset.mountTarget??"",e.insertBefore(d,e.firstChild),h.debug(`Re-mounted actions bar after React wipe for ${o.contactId}`)}}),s.observe(e,{childList:!0})},dt=()=>{Kt()};var P="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Yt=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),D="data-ws-crm-favicon",K=o=>o.hasAttribute(D),ct=o=>{if(o.tagName!=="LINK")return!1;let t=(o.getAttribute("rel")??"").toLowerCase();return Yt.has(t)},G=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{ct(r)&&!K(r)&&r.remove()});let t=document.head.querySelector(`link[${D}="1"]`);t?t.href!==P&&(t.href=P):(t=document.createElement("link"),t.setAttribute(D,"1"),t.rel="icon",t.type="image/png",t.href=P,document.head.appendChild(t),h.debug("Favicon installed"));let e=document.head.querySelector(`link[${D}="apple"]`);e||(e=document.createElement("link"),e.setAttribute(D,"apple"),e.rel="apple-touch-icon",e.href=P,document.head.appendChild(e))},ht=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)G();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),G())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(l=>{l instanceof HTMLLinkElement&&ct(l)&&!K(l)&&(a=!0)}),s.removedNodes.forEach(l=>{l instanceof HTMLLinkElement&&K(l)&&(a=!0)});a&&G()}).observe(document.head,{childList:!0,subtree:!1});let t=0,e=window.setInterval(()=>{t+=1,G(),t>=5&&window.clearInterval(e)},1e3)};var z="reos-theme-stylesheet",X="reos-theme-fonts",Xt=()=>{if(document.getElementById(X))return;let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.googleapis.com",document.head.appendChild(o);let t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous",document.head.appendChild(t);let e=document.createElement("link");e.id=X,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(e)},Jt=`
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
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
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
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* .hr-config-provider \u2014 nested HR design-system wrapper. Don't paint
   it obsidian or it covers parent wrapper colors. Inherit font /
   color from parents, leave bg transparent so the closest ancestor
   with an explicit bg shows through. */
.hr-config-provider {
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
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
/* Section headings ("RECENT", "ALL ACCOUNTS") \u2014 ash + mono uppercase */
html body #location-list-containrer .hl_swicher-heading,
html body #location-list-containrer .hl_swicher-heading * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  font-family: 'Geist Mono', monospace !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  font-size: 10px !important;
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

/* n-radio / n-checkbox \u2014 accent color */
html body .n-radio input[type="radio"],
html body .n-checkbox input[type="checkbox"] {
  accent-color: var(--reos-emerald) !important;
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
  font-family: 'Geist Mono', monospace !important;
  font-size: 10px !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
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
  font-family: 'Geist Mono', monospace !important;
  font-size: 11px !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
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
  font-family: 'Geist Mono', monospace !important;
  font-size: 11px !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
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
  accent-color: var(--reos-emerald) !important;
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
`,Zt=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}}],Qt=o=>{if(!o||o[0]!=="#")return o;let t=o.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return o;let e=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(e)||isNaN(r)||isNaN(a))return o;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${e}, ${r}, ${a}, ${s})`}return`rgb(${e}, ${r}, ${a})`},te=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),$=()=>{for(let o of Zt){let t;try{t=document.querySelectorAll(o.selector)}catch{continue}t.forEach(e=>{for(let[r,a]of Object.entries(o.styles)){let s=e.style.getPropertyPriority(r),l=e.style.getPropertyValue(r),n=te.has(r)?Qt(a):a;s==="important"&&l===n||e.style.setProperty(r,a,"important")}})}},J="#1A1F28",ee=26,oe=31,re=40,bt=new Set,pt=new Set,U=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0||(t.textContent||"").trim()!=="--")return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;t.style.setProperty("display","none","important");let a=t.className?.toString()||"<no class>";!pt.has(a)&&a!=="<no class>"&&(pt.add(a),h.debug(`Hid empty "--" leaf: "${a}"`))})},mt=new Set,ae=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("ai-button")||e.includes("ask-ai")||e.includes("bg-clip-text")||e.includes("text-transparent")||t.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=t.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g")return;let a=!1;for(let b of Array.from(t.childNodes))if(b.nodeType===Node.TEXT_NODE&&(b.textContent||"").trim()){a=!0;break}if(!a)return;let s=Array.from(t.children);if(s.length>0&&s.every(b=>{let g=b.tagName.toLowerCase();return g==="svg"||g==="img"})&&!a)return;let d=window.getComputedStyle(t).color;if(!(d==="rgb(255, 255, 255)"||d==="rgba(255, 255, 255, 1)"||d==="#ffffff"||d==="white"))return;t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let p=t.className?.toString()||"<no class>";!mt.has(p)&&p!=="<no class>"&&(mt.add(p),h.debug(`Remapped pure-white text -> bone: "${p}"`))})},ut=new Set,ne=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(t=>{t.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let s=window.getComputedStyle(r),l=s.backgroundColor,n=s.backgroundImage||"",d=!1;if(n!=="none"&&n.includes("gradient"))d=!0;else if(l&&l!=="rgba(0, 0, 0, 0)"&&l!=="transparent"){let u=l.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(u&&parseFloat(u[1])<.6)return;let y=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(y){let _=parseInt(y[1],10),T=parseInt(y[2],10),W=parseInt(y[3],10);(_>=60||T>=60||W>=60)&&(_>230&&T>230&&W>230||(_>=80||T>=80||W>=80)&&(d=!0))}}if(!d)return;let p=(r.textContent||"").trim(),b=a,g=Array.from(r.querySelectorAll("*")).map(u=>(u.className?.toString()||"").toLowerCase()).join(" "),k=p.toLowerCase()==="ask ai"||b.includes("ai-button")||b.includes("ask-ai")||b.includes("askai"),v=b.includes("bg-clip-text")||b.includes("text-transparent")||g.includes("bg-clip-text")||g.includes("text-transparent"),m=Array.from(r.querySelectorAll("*")).some(u=>{let y=window.getComputedStyle(u),_=y.getPropertyValue("-webkit-background-clip")||"",T=y.getPropertyValue("background-clip")||"";return _.includes("text")||T.includes("text")});if(k||v||m){let u=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],y=_=>{u.forEach(T=>_.style.removeProperty(T))};y(r),r.querySelectorAll("*").forEach(y);return}let w="#12161D";r.style.setProperty("color",w,"important"),r.querySelectorAll("*").forEach(u=>{let y=u.tagName.toLowerCase();y==="svg"||y==="path"||y==="circle"||y==="rect"||y==="polygon"||y==="polyline"||y==="line"||y==="g"?(u.style.setProperty("fill",w,"important"),u.style.setProperty("stroke",w,"important"),u.style.setProperty("color",w,"important")):(u.style.setProperty("color",w,"important"),u.style.setProperty("-webkit-text-fill-color",w,"important"))});let S=r.className?.toString()||"<no class>";!ut.has(S)&&S!=="<no class>"&&(ut.add(S),h.debug(`Darkened SVG icons on colored button: "${S}"`))})})},yt=new Set,se=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.width<20||e.width>64||e.height<20||e.height>64)return;let r=e.top+e.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(n=>{let d=n;if(d.closest("[id^='ws-crm-']"))return;let c=n.getBoundingClientRect();if(c.width===0||c.width>28||c.height>28)return;let p=c.left<e.right&&c.right>e.left,b=c.top<e.bottom&&c.bottom>e.top;if(!(p&&b)||c.top+c.height/2<r)return;let k=c.width*c.height/(e.width*e.height);if(k>.55)return;let v=d,m=d.parentElement,w=0;for(;m&&m!==t&&w<3;){let u=m.getBoundingClientRect();if(u.width>0&&u.width<=30&&u.height<=30)v=m;else break;m=m.parentElement,w++}v.style.setProperty("transform","translateY(11px)","important");let S=(v.className?.toString()||"")+" "+v.tagName;yt.has(S)||(yt.add(S),h.debug(`Dropped activity badge 11px (${c.width.toFixed(0)}x${c.height.toFixed(0)} icon, ratio ${k.toFixed(2)}): "${S}"`))})})},le="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",ie=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();e.includes("active")||e.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",le,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},gt=new Set,de=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let l=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!l)return;let n=parseInt(l[1],10),d=parseInt(l[2],10),c=parseInt(l[3],10);if(!(n>200&&d>200&&c>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!gt.has(p)&&p!=="<no class>"&&(gt.add(p),h.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${n},${d},${c})): "${p}"`))})})},vt=new Set,ce=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.parentElement,r=0;for(;e&&r<3&&!e.closest("[id^='ws-crm-']");){let a=(e.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let l=e.getBoundingClientRect();if(l.width>0&&l.height>0&&l.width<=400&&l.height<=80){e.style.setProperty("background-color","#12161D","important"),e.style.setProperty("background-image","none","important");let n=e.className?.toString()||"<no class>";!vt.has(n)&&n!=="<no class>"&&(vt.add(n),h.debug(`Painted Ask AI wrapper graphite: "${n}"`))}}e=e.parentElement,r++}})},ft=new Set,he=()=>{let o=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),e=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let l=parseInt(s.zIndex,10);if(!isFinite(l)||l<50)return;let n=a.getBoundingClientRect();n.width<240||n.height<120||n.width>1500||n.height>900||e.push(a)}),[...o,...e].forEach(a=>{a.querySelectorAll("*").forEach(l=>{if(l.id?.startsWith("ws-crm-")||l.closest("[id^='ws-crm-']"))return;let n=(l.className?.toString()||"").toLowerCase();if(n.includes("avatar")||n.includes("notification-dot")||n.includes("indicator"))return;if(n.includes("sidebar-option-button")||l.closest(".sidebar-option-button")||l.closest("nav[class*='w-13']")){let w=l.getAttribute("style")||"";(w.includes("background-color")||w.includes("color"))&&(l.style.removeProperty("background-color"),l.style.removeProperty("color"));return}if(n.includes("hr-card")||l.closest(".hr-card")||l.id&&l.id.startsWith("opportunity-")){let w=l.getAttribute("style")||"";(w.includes("background-color")||w.includes("color"))&&(l.style.removeProperty("background-color"),l.style.removeProperty("color"));return}if(n.includes("ai-button")||n.includes("ask-ai")||n.includes("bg-clip-text")||n.includes("text-transparent")||l.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(l).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let c=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let p=parseInt(c[1],10),b=parseInt(c[2],10),g=parseInt(c[3],10);if(!(p>200&&b>200&&g>200))return;let v=l.getBoundingClientRect();if(v.width<24||v.height<16||v.width>1400)return;l.style.setProperty("background-color","#12161D","important"),l.style.setProperty("color","#EDEEF0","important");let m=l.className?.toString()||"<no class>";!ft.has(m)&&m!=="<no class>"&&(ft.add(m),h.debug(`Coerced light bg (${v.width.toFixed(0)}x${v.height.toFixed(0)}, rgb(${p},${b},${g})): "${m}"`))})})},wt=new Set,be=()=>{let o="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0)return;let r=(e.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||e.closest(o)||e.closest("[class*='avatar'], [class*='hr-avatar']")||e.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||e.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']")||e.matches("[role='heading']")||e.closest("[role='heading']")||e.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']"))return;let a=e,s=null;for(let p=0;p<4&&a;p++){let b=a.nextElementSibling;if(b&&(b.matches(o)||b.querySelector(o)!==null)){s=b;break}a=a.parentElement}if(!s)return;let l=e.getBoundingClientRect();if(l.width===0||l.height===0||l.width>400||l.height>60)return;e.style.setProperty("color","#9098A3","important"),e.style.setProperty("-webkit-text-fill-color","#9098A3","important");let n=s,d=n.getBoundingClientRect();d.width>0&&d.width<=800&&d.height>0&&d.height<=100&&(n.style.setProperty("background-color",J,"important"),n.style.setProperty("border-color","#252C36","important"),n.style.setProperty("border-style","solid","important"),n.style.setProperty("border-width","1px","important"),n.style.setProperty("border-radius","4px","important"));let c=e.className?.toString()||"<no class>";!wt.has(c)&&c!=="<no class>"&&(wt.add(c),h.debug(`Colored field label "${r.slice(0,30)}": "${c}"`))})},xt=new Set,pe=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("dropdown")||e.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let l=Math.min(r.width,r.height),n=Math.max(16,Math.min(24,Math.round(l*.6)));t.style.setProperty("font-size",`${n}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${n}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let d=t.className?.toString()||"<no class>";!xt.has(d)&&d!=="<no class>"&&(xt.add(d),h.debug(`Resized avatar text to ${n}px (circle ${l.toFixed(0)}px): "${d}"`))})},kt=new Set,me=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0)return;t.style.setProperty("background-color",J,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=t.className?.toString()||"<no class>";!kt.has(r)&&r!=="<no class>"&&(kt.add(r),h.debug(`Forced input slate bg: "${r}"`))})},V=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||t.id==="chat-filter"||t.id==="phone-calls"||t.id==="archive-conversation"||t.id==="star-toggle"||t.id==="read-toggle"||t.id==="delete-conversation")return;if(t.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let b=t.getAttribute("style")||"";(b.includes("background-color")||b.includes("color"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("color"));return}let e=t.className?.toString()||"";if(e.includes("bg-inherit")){(t.getAttribute("style")||"").includes("background-color")&&t.style.removeProperty("background-color");return}if(e.includes("hr-card")||t.closest(".hr-card")||t.id&&t.id.startsWith("opportunity-")){(t.getAttribute("style")||"").includes("background-color")&&t.style.removeProperty("background-color");return}if(e.includes("hr-collapse-item")||e.includes("hr-collapse hr-accordion")||e.includes("hr-accordion"))return;if(e.includes("sidebar-option-button")||t.closest(".sidebar-option-button")||t.closest("nav[class*='w-13']")){let b=t.getAttribute("style")||"";(b.includes("background-color")||b.includes("color"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("color"));return}if(t.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let b=t.getAttribute("style")||"";(b.includes("background-color")||b.includes("color"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("color"));return}let r=window.getComputedStyle(t).backgroundColor;if(!r||r==="rgba(0, 0, 0, 0)"||r==="transparent")return;let a=r.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return;let s=parseInt(a[1],10),l=parseInt(a[2],10),n=parseInt(a[3],10);if(!(s<ee&&l<oe&&n<re))return;let c=t.getBoundingClientRect();if(c.width===0||c.height===0||c.width>800||c.height>200)return;t.style.setProperty("background-color",J,"important");let p=t.className?.toString()||"<no class>";!bt.has(p)&&p!=="<no class>"&&(bt.add(p),h.debug(`Coerced dark bg to slate (${c.width.toFixed(0)}x${c.height.toFixed(0)}, rgb(${s},${l},${n})): "${p}"`))})},_t=()=>{let o,t=()=>{o===void 0&&(o=window.setTimeout(()=>{o=void 0,$(),me(),V(),U(),be(),he(),ce(),de(),ie(),ne(),pe(),se(),ae()},100))};$(),V(),U(),window.setTimeout(()=>{$(),V(),U()},500),window.setTimeout(()=>{$(),V(),U()},1500),new MutationObserver(()=>{t()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},Y,ue=()=>{let o=()=>{let e=document.getElementById(z);!e||!document.head||document.head.lastElementChild===e||document.head.appendChild(e)};new MutationObserver(e=>{let r=!1;for(let a of e){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let l=s.tagName.toLowerCase();if(l==="style"||l==="link"){if(s.id===z||s.id===X)continue;r=!0;break}}if(r)break}r&&Y===void 0&&(Y=window.setTimeout(()=>{Y=void 0,o()},150))}).observe(document.head,{childList:!0}),o()},Et=()=>{if(Xt(),!document.getElementById(z)){let o=document.createElement("style");o.id=z,o.textContent=Jt,document.head.appendChild(o),h.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?_t():window.addEventListener("DOMContentLoaded",_t)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,ue())};var St="ws-crm-customizer-version-badge",Tt=()=>{if(document.getElementById(St))return;let o=document.createElement("div");o.id=St,o.style.cssText=`
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
  `,o.textContent=`Customizer v${M}`,o.title=`Built ${B}
Click to dismiss for this session`,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)"}),o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),200)}),document.body.appendChild(o)};var Ft=()=>{h.info(`Loaded v${M} (built ${B})`),ht(),Et(),tt(),Q(o=>{h.debug("Page handler firing for:",o),Tt(),at(),dt()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ft):Ft();})();
//# sourceMappingURL=customizer.js.map
