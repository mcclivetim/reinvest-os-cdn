/* Wholesaling CRM Customizer v0.7.69 — built 2026-05-19T02:11:37.320Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var M="[wholesaling-crm-customizer]",Ct="__WS_CRM_DEBUG",Ft=()=>!!window[Ct],p={info(...o){console.log(M,...o)},warn(...o){console.warn(M,...o)},error(...o){console.error(M,...o)},debug(...o){Ft()&&console.log(M,"[debug]",...o)}};var Y=()=>{let o=window.location.pathname;return o.includes("/contacts/detail/")?"contact-detail":o.includes("/contacts/smart-list")||o.includes("/contacts/")?"contact-list":o.includes("/opportunities/detail/")?"opportunity-detail":o.includes("/opportunities/")?"opportunity-list":o.includes("/calendars/")?"calendar":o.includes("/dashboard")?"dashboard":o.includes("/conversations")?"conversations":o.includes("/settings")?"settings":"other"},N="",C="other",q=new Set,H=()=>{if(window.location.pathname!==N){N=window.location.pathname,C=Y(),p.debug("Page changed:",C,N);for(let o of q)try{o(C)}catch(t){p.error("Subscriber threw:",t)}}},J=o=>(q.add(o),setTimeout(()=>o(C),0),()=>{q.delete(o)}),X=()=>{C=Y(),N=window.location.pathname,p.debug("Router init, current page:",C);let o=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(e,r,a){o(e,r,a),H()},history.replaceState=function(e,r,a){t(e,r,a),H()},window.addEventListener("popstate",H),setInterval(H,1e3)};var R="0.7.69",B="2026-05-19T02:11:37.320Z";var At=/\/contacts\/detail\/([A-Za-z0-9]+)/,Lt=/\/v2\/location\/([A-Za-z0-9]+)/,_=()=>{let o=window.location.pathname,t=o.match(At);if(!t)return null;let e=o.match(Lt);return{contactId:t[1],locationId:e?e[1]:null}};var F=(o,t={})=>{let{timeoutMs:e=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let n=a.querySelector(o);if(n){s(n);return}let c,d,h=()=>{b&&b.disconnect(),c!==void 0&&window.clearTimeout(c),d!==void 0&&window.clearInterval(d)},b=new MutationObserver(()=>{let f=a.querySelector(o);f&&(h(),s(f))});b.observe(document.body,{childList:!0,subtree:!0}),d=window.setInterval(()=>{let f=a.querySelector(o);f&&(h(),s(f))},r),c=window.setTimeout(()=>{h(),p.warn(`waitForElement timed out for selector: ${o}`),i(new Error(`Selector not found within ${e}ms: ${o}`))},e)})};var l={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},w={sm:"4px",md:"6px",lg:"10px",pill:"999px"},v={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},W={purple:"#8B5CF6",green:l.emerald,orange:l.amber,red:l.crimson},Z=o=>{let t=o==="emerald"?l.emeraldGlow:o==="amber"?l.amberGlow:l.slate,e=o==="emerald"?l.emeraldBorder:o==="amber"?"rgba(232, 163, 60, 0.3)":l.steel,r=o==="emerald"?l.emerald:o==="amber"?l.amber:l.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${e};
    border-radius: ${w.pill};
    font-family: ${v.mono};
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
  border-radius: ${w.sm};
  font-family: ${v.sans};
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
  border-radius: ${w.sm};
  font-family: ${v.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var I="ws-crm-claim-release-pill",tt=o=>{let t=Array.from(o.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},It=({contactId:o,mode:t})=>{let e=document.createElement("button");e.id=I,e.type="button",e.dataset.contactId=o,e.dataset.mode=t;let r=t==="claim"?"emerald":"amber",a=t==="claim"?l.emerald:l.amber;return e.style.cssText=Z(r),e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `,e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{p.info(`Claim/Release pill clicked for contact ${o}: ${t}`);let s=e.lastElementChild,i=s?.textContent??"";s&&(s.textContent="Working\u2026"),e.style.opacity="0.7",e.disabled=!0,setTimeout(()=>{s&&(s.textContent=i),e.style.opacity="1",e.disabled=!1},700)}),e},Dt=async(o,t=1e4)=>{let e=Date.now();for(;Date.now()-e<t;){let r=tt(o);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},Q=(o,t)=>{let e=It({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${I}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(e),o.appendChild(r)},Mt=async()=>{let o=_();if(!o){document.getElementById(I)?.remove();return}let t=document.getElementById(I);if(!(t&&t.dataset.contactId===o.contactId)){t&&t.remove();try{let e=await F("#record-details-lhs",{timeoutMs:1e4}),r=await Dt(e),a=_();if(!a||a.contactId!==o.contactId)return;if(!r){p.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}Q(r,o.contactId),p.debug(`Mounted Claim/Release pill next to name for ${o.contactId}`);let s=null;s=new MutationObserver(async()=>{if(!(_()?.contactId===o.contactId)){s?.disconnect();return}if(document.getElementById(I))return;let n=tt(e);n&&(Q(n,o.contactId),p.debug("Re-mounted Claim/Release pill after React wipe"))}),s.observe(e,{childList:!0,subtree:!0})}catch(e){p.warn("Could not mount Claim/Release pill:",e)}}},et=()=>{Mt()};var Ht="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set";var Nt="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",Rt=()=>{let o=window.WS_CRM_USER_ID;if(o&&/^[A-Za-z0-9]{15,30}$/.test(o))return o;let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let r of e)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),s=a.id??a._id;if(s&&/^[A-Za-z0-9]{15,30}$/.test(s))return s}for(let a of["tokenUser","currentUser","ghl_user"]){let s=localStorage.getItem(a);if(s)try{let i=JSON.parse(s),n=i.id??i._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}catch{}}}catch{}return null},Bt=async({contactId:o,locationId:t,status:e,userId:r,deadReason:a})=>{let s={call_status:e,triggered_by_user_id:r??""};a&&(s.dead_reason=a);let n=await fetch(Ht,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:o,location:{id:t},customData:s}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},Ot=async({contactId:o,tenantId:t})=>{let e=await fetch(Nt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:o}),credentials:"omit"});if(!e.ok)throw new Error(`Sanity check returned ${e.status} ${e.statusText}`);return await e.json()};var O="ws-crm-contact-actions-bar",$t="ws-crm-call-status-dropdown",ot="ws-crm-offer-made-modal",Pt=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Gt=[".central-panel","[class*='central-panel']"],Ut=async()=>{for(let o of Gt)try{let t=await F(o,{timeoutMs:3e3});if(t)return t}catch{}try{return(await F("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},zt=o=>{let t=document.createElement("div");t.id=$t,t.style.cssText="position: relative; flex-shrink: 0;";let e=document.createElement("button");e.type="button",e.style.cssText=L,e.innerHTML=`
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
    border-radius: ${w.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,Pt.forEach(a=>{let s=document.createElement("button");s.type="button",s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${l.bone};
      border: none;
      border-radius: ${w.sm};
      font-family: ${v.sans};
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
        background: ${W[a.color]};
        flex-shrink: 0;
      "></span>
      <span>${a.label}</span>
    `,s.addEventListener("mouseenter",()=>{s.style.background=l.slate}),s.addEventListener("mouseleave",()=>{s.style.background="transparent"}),s.addEventListener("click",async()=>{p.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${o}`);let i=e.firstElementChild,n=e.children[1],c=e.children[2];i&&(i.style.background=W[a.color]),n&&(n.textContent=a.label),r.style.display="none";let h=_()?.locationId,b=Rt();if(!h){p.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),n&&(n.textContent=`${a.label} (no tenant!)`),n&&(n.style.color=l.amber);return}if(a.color==="green"&&!b){p.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),n&&(n.textContent=`${a.label} (no user!)`),n&&(n.style.color=l.amber);return}let f=c?.textContent??"\u25BE",x=async g=>{c&&(c.textContent="\u2026"),e.style.opacity="0.75";try{await Bt({contactId:o,locationId:h,status:a.label,userId:b,deadReason:g}),c&&(c.textContent="\u2713"),setTimeout(()=>{c&&(c.textContent=f),e.style.opacity="1"},900)}catch(m){p.warn("Call Status webhook failed:",m),c&&(c.textContent="\u2717"),n&&(n.style.color=l.amber),e.style.opacity="1",setTimeout(()=>{c&&(c.textContent=f),n&&(n.style.color=l.bone)},1800)}};if(a.value==="dead-deal"){let g=n?.textContent??"";qt(m=>{x(m)},()=>{n&&(n.textContent=g)});return}if(a.value==="appointment-booked"){let g=n?.textContent??"";try{(await Ot({contactId:o,tenantId:h})).ok?await x():Wt(()=>{x()},()=>{n&&(n.textContent=g)})}catch(m){p.warn("Appointment sanity check failed; firing anyway:",m),await x()}return}await x()}),r.appendChild(s)}),e.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{t.contains(a.target)||(r.style.display="none")}),t.appendChild(e),t.appendChild(r),t},Vt=o=>{document.getElementById(ot)?.remove();let t=document.createElement("div");t.id=ot,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${v.sans};
  `;let e=document.createElement("div");e.style.cssText=`
    width: min(420px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${w.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);e.innerHTML=`
    <div style="
      font-family: ${v.mono};
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
      font-family: ${v.mono};
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
      border-radius: ${w.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${l.ash}; font-family: ${v.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${l.bone};
          font-family: ${v.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${v.mono};
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
        border-radius: ${w.sm};
        color: ${l.bone};
        font-family: ${v.sans};
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
  `,t.appendChild(e),document.body.appendChild(t);let s=()=>t.remove();t.addEventListener("click",i=>{i.target===t&&s()}),e.querySelector("#ws-offer-cancel")?.addEventListener("click",s),e.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let i=(e.querySelector("#ws-offer-amount")?.value??"").trim(),n=e.querySelector("#ws-offer-expires")?.value??"";if(!i||Number(i)<=0){p.warn("Offer Made submit blocked \u2014 invalid amount");return}p.info(`Offer Made recorded for contact ${o}: $${i}, expires ${n}`),s()}),setTimeout(()=>{e.querySelector("#ws-offer-amount")?.focus()},0)},rt="ws-crm-dead-deal-modal",qt=(o,t)=>{document.getElementById(rt)?.remove();let e=document.createElement("div");e.id=rt,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${v.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(460px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${w.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${v.mono};
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
      font-family: ${v.mono};
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
        border-radius: ${w.sm};
        color: ${l.bone};
        font-family: ${v.sans};
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
  `,e.appendChild(r),document.body.appendChild(e);let a=()=>e.remove(),s=()=>{a(),t()};e.addEventListener("click",n=>{n.target===e&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let n=r.querySelector("#ws-dead-reason"),c=r.querySelector("#ws-dead-error"),d=(n?.value??"").trim();if(!d){c&&(c.textContent="Please enter a reason."),n?.focus();return}if(d.length<4){c&&(c.textContent="Please enter at least a few words."),n?.focus();return}a(),o(d)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),i()),n.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},at="ws-crm-appointment-sanity-modal",Wt=(o,t)=>{document.getElementById(at)?.remove();let e=document.createElement("div");e.id=at,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${v.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(440px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${w.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${v.mono};
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
  `,e.appendChild(r),document.body.appendChild(e);let a=()=>e.remove(),s=()=>{a(),t()};e.addEventListener("click",n=>{n.target===e&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),o()});let i=n=>{n.key==="Escape"&&(document.removeEventListener("keydown",i),s())};document.addEventListener("keydown",i)},nt=o=>{let t=document.createElement("div");t.id=O,t.dataset.contactId=o,t.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${l.graphite};
    border-bottom: 1px solid ${l.steel};
    flex-shrink: 0;
  `,t.appendChild(zt(o));let e=document.createElement("button");return e.type="button",e.style.cssText=A,e.textContent="Offer Made",e.addEventListener("click",()=>Vt(o)),t.appendChild(e),t},jt=async()=>{let o=_();if(!o){document.getElementById(O)?.remove();return}let t=document.getElementById(O);if(t&&t.dataset.contactId===o.contactId)return;t&&t.remove();let e=await Ut();if(!e){p.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=_();if(!r||r.contactId!==o.contactId)return;let a=nt(o.contactId);a.dataset.mountTarget=e.className||"central-panel",e.insertBefore(a,e.firstChild),p.debug(`Mounted contact actions bar for ${o.contactId}`);let s=null;s=new MutationObserver(()=>{let i=document.getElementById(O);if(!(_()?.contactId===o.contactId)){s?.disconnect();return}if(!i){let c=nt(o.contactId);c.dataset.mountTarget=a.dataset.mountTarget??"",e.insertBefore(c,e.firstChild),p.debug(`Re-mounted actions bar after React wipe for ${o.contactId}`)}}),s.observe(e,{childList:!0})},st=()=>{jt()};var $="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Kt=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),D="data-ws-crm-favicon",j=o=>o.hasAttribute(D),it=o=>{if(o.tagName!=="LINK")return!1;let t=(o.getAttribute("rel")??"").toLowerCase();return Kt.has(t)},P=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{it(r)&&!j(r)&&r.remove()});let t=document.head.querySelector(`link[${D}="1"]`);t?t.href!==$&&(t.href=$):(t=document.createElement("link"),t.setAttribute(D,"1"),t.rel="icon",t.type="image/png",t.href=$,document.head.appendChild(t),p.debug("Favicon installed"));let e=document.head.querySelector(`link[${D}="apple"]`);e||(e=document.createElement("link"),e.setAttribute(D,"apple"),e.rel="apple-touch-icon",e.href=$,document.head.appendChild(e))},lt=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)P();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),P())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&it(i)&&!j(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&j(i)&&(a=!0)});a&&P()}).observe(document.head,{childList:!0,subtree:!1});let t=0,e=window.setInterval(()=>{t+=1,P(),t>=5&&window.clearInterval(e)},1e3)};var ct="reos-theme-stylesheet",dt="reos-theme-fonts",Yt=()=>{if(document.getElementById(dt))return;let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.googleapis.com",document.head.appendChild(o);let t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous",document.head.appendChild(t);let e=document.createElement("link");e.id=dt,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(e)},Jt=`
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
html body .text-red-500,
html body .text-red-600,
html body .text-red-700,
html body [class*="text-red"] {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
}
html body .bg-red-500,
html body .bg-red-600,
html body .bg-red-700,
html body [class*="bg-red"]:not([class*="bg-reduce"]) {
  background-color: var(--reos-crimson) !important;
}
html body .border-red-500,
html body .border-red-600,
html body [class*="border-red"] {
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
html body .sidebar-option-button,
html body button[class*="sidebar-option-button"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Active button \u2014 currently selected nav tab. Identified by the
   .text-blue-600 utility GHL pairs with the active state, plus the
   .bg-white default that GHL ships only on the active state. */
html body .sidebar-option-button[class*="text-blue-600"],
html body button[class*="sidebar-option-button"][class*="text-blue-600"] {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Active button's icon \u2014 SVG stroke uses currentColor, so setting
   color above already propagates, but explicit for safety. */
html body .sidebar-option-button[class*="text-blue-600"] svg,
html body .sidebar-option-button[class*="text-blue-600"] svg path,
html body button[class*="sidebar-option-button"][class*="text-blue-600"] svg,
html body button[class*="sidebar-option-button"][class*="text-blue-600"] svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Hover state \u2014 inactive button gets slate bg + bone (subtle). The
   GHL hover:text-blue-600 utility is overridden so hover doesn't
   flash blue. */
html body .sidebar-option-button:hover,
html body button[class*="sidebar-option-button"]:hover {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Active + hover = stay active (emerald). Class-stacking pushes
   specificity above plain :hover. */
html body .sidebar-option-button[class*="text-blue-600"]:hover,
html body button[class*="sidebar-option-button"][class*="text-blue-600"]:hover {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Kill any transition that could animate between Vue render gaps \u2014
   instant state changes only, same approach as v0.7.64 buttons. */
html body .sidebar-option-button,
html body button[class*="sidebar-option-button"] {
  transition: none !important;
  animation: none !important;
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
html body [style*="border-color:#eaecf0"] {
  border-color: var(--reos-steel) !important;
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

/* 18a. GHL Tailwind arbitrary backgrounds \u2014 the contact-detail page hard-
   codes specific hex colors via Tailwind arbitrary-value classes like
   bg-[#F7F9FD] (conversation main + compose footer) and bg-[#eff4ff]
   (SMS modal header tab strip). Substring match catches them all. */
[class*="F7F9FD"],
[class*="F7F9FB"],
[class*="F9FAFB"],
[class*="eff4ff"],
[class*="EFF4FF"],
[class*="ECEEF2"],
[class*="eceef2"],
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
.hr-tabs-tab:hover {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}
.hr-tabs-tab--active {
  color: var(--reos-emerald) !important;
  background: var(--reos-emerald-glow) !important;
  border-bottom: 2px solid var(--reos-emerald) !important;
}
/* Tab labels \u2014 make the inner span/text follow the tab's state.
   Inactive: ash gray. Active: emerald. Hover: bone (matches the tab
   background hover state). Stronger specificity to beat any inline
   styles that other coercers may have stamped. */
html body .hr-tabs-tab .hr-tabs-tab__label,
html body .hr-tabs-tab [class*="tab__label"],
html body .hr-tabs-tab span {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .hr-tabs-tab:hover .hr-tabs-tab__label,
html body .hr-tabs-tab:hover [class*="tab__label"],
html body .hr-tabs-tab:hover span {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hr-tabs-tab--active .hr-tabs-tab__label,
html body .hr-tabs-tab--active [class*="tab__label"],
html body .hr-tabs-tab--active span {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Active + hover: stay emerald (don't switch to bone like inactive
   tabs do on hover). Class-stacking pushes specificity above the
   plain hover rule which would otherwise win. */
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
`,Xt=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}}],Zt=o=>{if(!o||o[0]!=="#")return o;let t=o.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return o;let e=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(e)||isNaN(r)||isNaN(a))return o;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${e}, ${r}, ${a}, ${s})`}return`rgb(${e}, ${r}, ${a})`},Qt=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),G=()=>{for(let o of Xt){let t;try{t=document.querySelectorAll(o.selector)}catch{continue}t.forEach(e=>{for(let[r,a]of Object.entries(o.styles)){let s=e.style.getPropertyPriority(r),i=e.style.getPropertyValue(r),n=Qt.has(r)?Zt(a):a;s==="important"&&i===n||e.style.setProperty(r,a,"important")}})}},K="#1A1F28",te=26,ee=31,oe=40,pt=new Set,ht=new Set,U=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0||(t.textContent||"").trim()!=="--")return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;t.style.setProperty("display","none","important");let a=t.className?.toString()||"<no class>";!ht.has(a)&&a!=="<no class>"&&(ht.add(a),p.debug(`Hid empty "--" leaf: "${a}"`))})},bt=new Set,re=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("ai-button")||e.includes("ask-ai")||e.includes("bg-clip-text")||e.includes("text-transparent")||t.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=t.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g"||t.querySelector("svg, img")||(t.textContent||"").trim().length===0||window.getComputedStyle(t).color!=="rgb(255, 255, 255)")return;t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let n=t.className?.toString()||"<no class>";!bt.has(n)&&n!=="<no class>"&&(bt.add(n),p.debug(`Remapped pure-white text -> bone: "${n}"`))})},mt=new Set,ae=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(t=>{t.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let s=window.getComputedStyle(r),i=s.backgroundColor,n=s.backgroundImage||"",c=!1;if(n!=="none"&&n.includes("gradient"))c=!0;else if(i&&i!=="rgba(0, 0, 0, 0)"&&i!=="transparent"){let u=i.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(u&&parseFloat(u[1])<.6)return;let y=i.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(y){let E=parseInt(y[1],10),T=parseInt(y[2],10),V=parseInt(y[3],10);(E>=60||T>=60||V>=60)&&(E>230&&T>230&&V>230||(E>=80||T>=80||V>=80)&&(c=!0))}}if(!c)return;let h=(r.textContent||"").trim(),b=a,f=Array.from(r.querySelectorAll("*")).map(u=>(u.className?.toString()||"").toLowerCase()).join(" "),x=h.toLowerCase()==="ask ai"||b.includes("ai-button")||b.includes("ask-ai")||b.includes("askai"),g=b.includes("bg-clip-text")||b.includes("text-transparent")||f.includes("bg-clip-text")||f.includes("text-transparent"),m=Array.from(r.querySelectorAll("*")).some(u=>{let y=window.getComputedStyle(u),E=y.getPropertyValue("-webkit-background-clip")||"",T=y.getPropertyValue("background-clip")||"";return E.includes("text")||T.includes("text")});if(x||g||m){let u=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],y=E=>{u.forEach(T=>E.style.removeProperty(T))};y(r),r.querySelectorAll("*").forEach(y);return}let k="#12161D";r.style.setProperty("color",k,"important"),r.querySelectorAll("*").forEach(u=>{let y=u.tagName.toLowerCase();y==="svg"||y==="path"||y==="circle"||y==="rect"||y==="polygon"||y==="polyline"||y==="line"||y==="g"?(u.style.setProperty("fill",k,"important"),u.style.setProperty("stroke",k,"important"),u.style.setProperty("color",k,"important")):(u.style.setProperty("color",k,"important"),u.style.setProperty("-webkit-text-fill-color",k,"important"))});let S=r.className?.toString()||"<no class>";!mt.has(S)&&S!=="<no class>"&&(mt.add(S),p.debug(`Darkened SVG icons on colored button: "${S}"`))})})},ut=new Set,ne=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.width<20||e.width>64||e.height<20||e.height>64)return;let r=e.top+e.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(n=>{let c=n;if(c.closest("[id^='ws-crm-']"))return;let d=n.getBoundingClientRect();if(d.width===0||d.width>28||d.height>28)return;let h=d.left<e.right&&d.right>e.left,b=d.top<e.bottom&&d.bottom>e.top;if(!(h&&b)||d.top+d.height/2<r)return;let x=d.width*d.height/(e.width*e.height);if(x>.55)return;let g=c,m=c.parentElement,k=0;for(;m&&m!==t&&k<3;){let u=m.getBoundingClientRect();if(u.width>0&&u.width<=30&&u.height<=30)g=m;else break;m=m.parentElement,k++}g.style.setProperty("transform","translateY(11px)","important");let S=(g.className?.toString()||"")+" "+g.tagName;ut.has(S)||(ut.add(S),p.debug(`Dropped activity badge 11px (${d.width.toFixed(0)}x${d.height.toFixed(0)} icon, ratio ${x.toFixed(2)}): "${S}"`))})})},se="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",ie=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();e.includes("active")||e.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",se,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},yt=new Set,le=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let n=parseInt(i[1],10),c=parseInt(i[2],10),d=parseInt(i[3],10);if(!(n>200&&c>200&&d>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let h=r.className?.toString()||"<no class>";!yt.has(h)&&h!=="<no class>"&&(yt.add(h),p.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${n},${c},${d})): "${h}"`))})})},gt=new Set,ce=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.parentElement,r=0;for(;e&&r<3&&!e.closest("[id^='ws-crm-']");){let a=(e.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=e.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){e.style.setProperty("background-color","#12161D","important"),e.style.setProperty("background-image","none","important");let n=e.className?.toString()||"<no class>";!gt.has(n)&&n!=="<no class>"&&(gt.add(n),p.debug(`Painted Ask AI wrapper graphite: "${n}"`))}}e=e.parentElement,r++}})},vt=new Set,de=()=>{let o=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),e=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let n=a.getBoundingClientRect();n.width<240||n.height<120||n.width>1500||n.height>900||e.push(a)}),[...o,...e].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let n=(i.className?.toString()||"").toLowerCase();if(n.includes("avatar")||n.includes("notification-dot")||n.includes("indicator")||n.includes("ai-button")||n.includes("ask-ai")||n.includes("bg-clip-text")||n.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let c=window.getComputedStyle(i).backgroundColor;if(!c||c==="rgba(0, 0, 0, 0)"||c==="transparent")return;let d=c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!d)return;let h=parseInt(d[1],10),b=parseInt(d[2],10),f=parseInt(d[3],10);if(!(h>200&&b>200&&f>200))return;let g=i.getBoundingClientRect();if(g.width<24||g.height<16||g.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let m=i.className?.toString()||"<no class>";!vt.has(m)&&m!=="<no class>"&&(vt.add(m),p.debug(`Coerced light bg (${g.width.toFixed(0)}x${g.height.toFixed(0)}, rgb(${h},${b},${f})): "${m}"`))})})},ft=new Set,pe=()=>{let o="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0)return;let r=(e.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||e.closest(o)||e.closest("[class*='avatar'], [class*='hr-avatar']")||e.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||e.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']")||e.matches("[role='heading']")||e.closest("[role='heading']")||e.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']"))return;let a=e,s=null;for(let h=0;h<4&&a;h++){let b=a.nextElementSibling;if(b&&(b.matches(o)||b.querySelector(o)!==null)){s=b;break}a=a.parentElement}if(!s)return;let i=e.getBoundingClientRect();if(i.width===0||i.height===0||i.width>400||i.height>60)return;e.style.setProperty("color","#9098A3","important"),e.style.setProperty("-webkit-text-fill-color","#9098A3","important");let n=s,c=n.getBoundingClientRect();c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(n.style.setProperty("background-color",K,"important"),n.style.setProperty("border-color","#252C36","important"),n.style.setProperty("border-style","solid","important"),n.style.setProperty("border-width","1px","important"),n.style.setProperty("border-radius","4px","important"));let d=e.className?.toString()||"<no class>";!ft.has(d)&&d!=="<no class>"&&(ft.add(d),p.debug(`Colored field label "${r.slice(0,30)}": "${d}"`))})},wt=new Set,he=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("dropdown")||e.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),n=Math.max(16,Math.min(24,Math.round(i*.6)));t.style.setProperty("font-size",`${n}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(d=>{d.tagName==="svg"||d.tagName==="SVG"||d.tagName!=="IMG"&&(d.style.setProperty("font-size",`${n}px`,"important"),d.style.setProperty("line-height","1","important"),d.style.setProperty("text-align","center","important"))});let c=t.className?.toString()||"<no class>";!wt.has(c)&&c!=="<no class>"&&(wt.add(c),p.debug(`Resized avatar text to ${n}px (circle ${i.toFixed(0)}px): "${c}"`))})},xt=new Set,be=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0)return;t.style.setProperty("background-color",K,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=t.className?.toString()||"<no class>";!xt.has(r)&&r!=="<no class>"&&(xt.add(r),p.debug(`Forced input slate bg: "${r}"`))})},z=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']"))return;let e=window.getComputedStyle(t).backgroundColor;if(!e||e==="rgba(0, 0, 0, 0)"||e==="transparent")return;let r=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),s=parseInt(r[2],10),i=parseInt(r[3],10);if(!(a<te&&s<ee&&i<oe))return;let c=t.getBoundingClientRect();if(c.width===0||c.height===0||c.width>800||c.height>200)return;t.style.setProperty("background-color",K,"important");let d=t.className?.toString()||"<no class>";!pt.has(d)&&d!=="<no class>"&&(pt.add(d),p.debug(`Coerced dark bg to slate (${c.width.toFixed(0)}x${c.height.toFixed(0)}, rgb(${a},${s},${i})): "${d}"`))})},kt=()=>{let o,t=()=>{o===void 0&&(o=window.setTimeout(()=>{o=void 0,G(),be(),z(),U(),pe(),de(),ce(),le(),ie(),ae(),he(),ne(),re()},100))};G(),z(),U(),window.setTimeout(()=>{G(),z(),U()},500),window.setTimeout(()=>{G(),z(),U()},1500),new MutationObserver(()=>{t()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},Et=()=>{if(Yt(),!document.getElementById(ct)){let o=document.createElement("style");o.id=ct,o.textContent=Jt,document.head.appendChild(o),p.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?kt():window.addEventListener("DOMContentLoaded",kt))};var _t="ws-crm-customizer-version-badge",St=()=>{if(document.getElementById(_t))return;let o=document.createElement("div");o.id=_t,o.style.cssText=`
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
Click to dismiss for this session`,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)"}),o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),200)}),document.body.appendChild(o)};var Tt=()=>{p.info(`Loaded v${R} (built ${B})`),lt(),Et(),X(),J(o=>{p.debug("Page handler firing for:",o),St(),et(),st()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
//# sourceMappingURL=customizer.js.map
