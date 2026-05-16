/* Wholesaling CRM Customizer v0.6.1 — built 2026-05-16T19:42:35.916Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var A="[wholesaling-crm-customizer]",Se="__WS_CRM_DEBUG",_e=()=>!!window[Se],d={info(...o){console.log(A,...o)},warn(...o){console.warn(A,...o)},error(...o){console.error(A,...o)},debug(...o){_e()&&console.log(A,"[debug]",...o)}};var Y=()=>{let o=window.location.pathname;return o.includes("/contacts/detail/")?"contact-detail":o.includes("/contacts/smart-list")||o.includes("/contacts/")?"contact-list":o.includes("/opportunities/detail/")?"opportunity-detail":o.includes("/opportunities/")?"opportunity-list":o.includes("/calendars/")?"calendar":o.includes("/dashboard")?"dashboard":o.includes("/conversations")?"conversations":o.includes("/settings")?"settings":"other"},F="",T="other",U=new Set,$=()=>{if(window.location.pathname!==F){F=window.location.pathname,T=Y(),d.debug("Page changed:",T,F);for(let o of U)try{o(T)}catch(t){d.error("Subscriber threw:",t)}}},K=o=>(U.add(o),setTimeout(()=>o(T),0),()=>{U.delete(o)}),Z=()=>{T=Y(),F=window.location.pathname,d.debug("Router init, current page:",T);let o=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(e,r,a){o(e,r,a),$()},history.replaceState=function(e,r,a){t(e,r,a),$()},window.addEventListener("popstate",$),setInterval($,1e3)};var D="0.6.1",R="2026-05-16T19:42:35.916Z";var Le=/\/contacts\/detail\/([A-Za-z0-9]+)/,Te=/\/v2\/location\/([A-Za-z0-9]+)/,k=()=>{let o=window.location.pathname,t=o.match(Le);if(!t)return null;let e=o.match(Te);return{contactId:t[1],locationId:e?e[1]:null}};var C=(o,t={})=>{let{timeoutMs:e=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let n=a.querySelector(o);if(n){s(n);return}let c,p,f=()=>{u&&u.disconnect(),c!==void 0&&window.clearTimeout(c),p!==void 0&&window.clearInterval(p)},u=new MutationObserver(()=>{let b=a.querySelector(o);b&&(f(),s(b))});u.observe(document.body,{childList:!0,subtree:!0}),p=window.setInterval(()=>{let b=a.querySelector(o);b&&(f(),s(b))},r),c=window.setTimeout(()=>{f(),d.warn(`waitForElement timed out for selector: ${o}`),i(new Error(`Selector not found within ${e}ms: ${o}`))},e)})};var l={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},g={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},W={purple:"#8B5CF6",green:l.emerald,orange:l.amber,red:l.crimson},J=o=>{let t=o==="emerald"?l.emeraldGlow:o==="amber"?l.amberGlow:l.slate,e=o==="emerald"?l.emeraldBorder:o==="amber"?"rgba(232, 163, 60, 0.3)":l.steel,r=o==="emerald"?l.emerald:o==="amber"?l.amber:l.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${e};
    border-radius: ${v.pill};
    font-family: ${g.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},H=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${l.emerald};
  color: ${l.obsidian};
  border: none;
  border-radius: ${v.sm};
  font-family: ${g.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,P=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${l.bone};
  border: 1px solid ${l.steel};
  border-radius: ${v.sm};
  font-family: ${g.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var I="ws-crm-claim-release-pill",Q=o=>{let t=Array.from(o.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Ce=({contactId:o,mode:t})=>{let e=document.createElement("button");e.id=I,e.type="button",e.dataset.contactId=o,e.dataset.mode=t;let r=t==="claim"?"emerald":"amber",a=t==="claim"?l.emerald:l.amber;return e.style.cssText=J(r),e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${a};
      box-shadow: 0 0 6px ${a};
      flex-shrink: 0;
    "></span>
    <span>${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `,e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{d.info(`Claim/Release pill clicked for contact ${o}: ${t}`);let s=e.lastElementChild,i=s?.textContent??"";s&&(s.textContent="Working\u2026"),e.style.opacity="0.7",e.disabled=!0,setTimeout(()=>{s&&(s.textContent=i),e.style.opacity="1",e.disabled=!1},700)}),e},Ie=async(o,t=1e4)=>{let e=Date.now();for(;Date.now()-e<t;){let r=Q(o);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},X=(o,t)=>{let e=Ce({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${I}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(e),o.appendChild(r)},Me=async()=>{let o=k();if(!o){document.getElementById(I)?.remove();return}let t=document.getElementById(I);if(!(t&&t.dataset.contactId===o.contactId)){t&&t.remove();try{let e=await C("#record-details-lhs",{timeoutMs:1e4}),r=await Ie(e),a=k();if(!a||a.contactId!==o.contactId)return;if(!r){d.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}X(r,o.contactId),d.debug(`Mounted Claim/Release pill next to name for ${o.contactId}`);let s=null;s=new MutationObserver(async()=>{if(!(k()?.contactId===o.contactId)){s?.disconnect();return}if(document.getElementById(I))return;let n=Q(e);n&&(X(n,o.contactId),d.debug("Re-mounted Claim/Release pill after React wipe"))}),s.observe(e,{childList:!0,subtree:!0})}catch(e){d.warn("Could not mount Claim/Release pill:",e)}}},ee=()=>{Me()};var Ae="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",$e=()=>{let o=window.WS_CRM_USER_ID;if(o&&/^[A-Za-z0-9]{15,30}$/.test(o))return o;let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let r of e)if(typeof r=="string"&&/^[A-Za-z0-9]{15,30}$/.test(r))return r;try{let r=localStorage.getItem("user");if(r){let a=JSON.parse(r),s=a.id??a._id;if(s&&/^[A-Za-z0-9]{15,30}$/.test(s))return s}for(let a of["tokenUser","currentUser","ghl_user"]){let s=localStorage.getItem(a);if(s)try{let i=JSON.parse(s),n=i.id??i._id;if(n&&/^[A-Za-z0-9]{15,30}$/.test(n))return n}catch{}}}catch{}return null},Fe=async({contactId:o,locationId:t,status:e,userId:r,deadReason:a})=>{let s={call_status:e,triggered_by_user_id:r??""};a&&(s.dead_reason=a);let n=await fetch(Ae,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact_id:o,location:{id:t},customData:s}),credentials:"omit"});if(!n.ok)throw new Error(`Webhook returned ${n.status} ${n.statusText}`)},B="ws-crm-contact-actions-bar",De="ws-crm-call-status-dropdown",te="ws-crm-offer-made-modal",Re=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],He=[".central-panel","[class*='central-panel']"],Pe=async()=>{for(let o of He)try{let t=await C(o,{timeoutMs:3e3});if(t)return t}catch{}try{return(await C("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Be=o=>{let t=document.createElement("div");t.id=De,t.style.cssText="position: relative; flex-shrink: 0;";let e=document.createElement("button");e.type="button",e.style.cssText=P,e.innerHTML=`
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
    border-radius: ${v.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,Re.forEach(a=>{let s=document.createElement("button");s.type="button",s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${l.bone};
      border: none;
      border-radius: ${v.sm};
      font-family: ${g.sans};
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
    `,s.addEventListener("mouseenter",()=>{s.style.background=l.slate}),s.addEventListener("mouseleave",()=>{s.style.background="transparent"}),s.addEventListener("click",async()=>{d.info(`Call Status set to "${a.label}" (${a.value}, ${a.color}) for contact ${o}`);let i=e.firstElementChild,n=e.children[1],c=e.children[2];i&&(i.style.background=W[a.color]),n&&(n.textContent=a.label),r.style.display="none";let f=k()?.locationId,u=$e();if(!f){d.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),n&&(n.textContent=`${a.label} (no tenant!)`),n&&(n.style.color=l.amber);return}if(a.color==="green"&&!u){d.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),n&&(n.textContent=`${a.label} (no user!)`),n&&(n.style.color=l.amber);return}let b=c?.textContent??"\u25BE",_=async x=>{c&&(c.textContent="\u2026"),e.style.opacity="0.75";try{await Fe({contactId:o,locationId:f,status:a.label,userId:u,deadReason:x}),c&&(c.textContent="\u2713"),setTimeout(()=>{c&&(c.textContent=b),e.style.opacity="1"},900)}catch(y){d.warn("Call Status webhook failed:",y),c&&(c.textContent="\u2717"),n&&(n.style.color=l.amber),e.style.opacity="1",setTimeout(()=>{c&&(c.textContent=b),n&&(n.style.color=l.bone)},1800)}};if(a.value==="dead-deal"){let x=n?.textContent??"";Oe(y=>{_(y)},()=>{n&&(n.textContent=x)});return}await _()}),r.appendChild(s)}),e.addEventListener("click",a=>{a.stopPropagation(),r.style.display=r.style.display==="none"?"block":"none"}),document.addEventListener("click",a=>{t.contains(a.target)||(r.style.display="none")}),t.appendChild(e),t.appendChild(r),t},Ne=o=>{document.getElementById(te)?.remove();let t=document.createElement("div");t.id=te,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${g.sans};
  `;let e=document.createElement("div");e.style.cssText=`
    width: min(420px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let r=new Date,a=new Date(r.getTime()+5*24*60*60*1e3).toISOString().slice(0,10);e.innerHTML=`
    <div style="
      font-family: ${g.mono};
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
      font-family: ${g.mono};
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
      border-radius: ${v.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${l.ash}; font-family: ${g.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${l.bone};
          font-family: ${g.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <label style="
      display: block;
      font-family: ${g.mono};
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
        border-radius: ${v.sm};
        color: ${l.bone};
        font-family: ${g.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 24px;
        outline: none;
      " />

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${P}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(e),document.body.appendChild(t);let s=()=>t.remove();t.addEventListener("click",i=>{i.target===t&&s()}),e.querySelector("#ws-offer-cancel")?.addEventListener("click",s),e.querySelector("#ws-offer-submit")?.addEventListener("click",()=>{let i=(e.querySelector("#ws-offer-amount")?.value??"").trim(),n=e.querySelector("#ws-offer-expires")?.value??"";if(!i||Number(i)<=0){d.warn("Offer Made submit blocked \u2014 invalid amount");return}d.info(`Offer Made recorded for contact ${o}: $${i}, expires ${n}`),s()}),setTimeout(()=>{e.querySelector("#ws-offer-amount")?.focus()},0)},oe="ws-crm-dead-deal-modal",Oe=(o,t)=>{document.getElementById(oe)?.remove();let e=document.createElement("div");e.id=oe,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${g.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(460px, 92vw);
    background: ${l.graphite};
    border: 1px solid ${l.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${l.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${g.mono};
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
      font-family: ${g.mono};
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
        border-radius: ${v.sm};
        color: ${l.bone};
        font-family: ${g.sans};
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
        ${P}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,e.appendChild(r),document.body.appendChild(e);let a=()=>e.remove(),s=()=>{a(),t()};e.addEventListener("click",n=>{n.target===e&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let n=r.querySelector("#ws-dead-reason"),c=r.querySelector("#ws-dead-error"),p=(n?.value??"").trim();if(!p){c&&(c.textContent="Please enter a reason."),n?.focus();return}if(p.length<4){c&&(c.textContent="Please enter at least a few words."),n?.focus();return}a(),o(p)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),i()),n.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},re=o=>{let t=document.createElement("div");t.id=B,t.dataset.contactId=o,t.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${l.graphite};
    border-bottom: 1px solid ${l.steel};
    flex-shrink: 0;
  `,t.appendChild(Be(o));let e=document.createElement("button");return e.type="button",e.style.cssText=H,e.textContent="Offer Made",e.addEventListener("click",()=>Ne(o)),t.appendChild(e),t},Ge=async()=>{let o=k();if(!o){document.getElementById(B)?.remove();return}let t=document.getElementById(B);if(t&&t.dataset.contactId===o.contactId)return;t&&t.remove();let e=await Pe();if(!e){d.warn("Could not mount actions bar \u2014 central panel not found within timeout");return}let r=k();if(!r||r.contactId!==o.contactId)return;let a=re(o.contactId);a.dataset.mountTarget=e.className||"central-panel",e.insertBefore(a,e.firstChild),d.debug(`Mounted contact actions bar for ${o.contactId}`);let s=null;s=new MutationObserver(()=>{let i=document.getElementById(B);if(!(k()?.contactId===o.contactId)){s?.disconnect();return}if(!i){let c=re(o.contactId);c.dataset.mountTarget=a.dataset.mountTarget??"",e.insertBefore(c,e.firstChild),d.debug(`Re-mounted actions bar after React wipe for ${o.contactId}`)}}),s.observe(e,{childList:!0})},ae=()=>{Ge()};var N="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",ze=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),M="data-ws-crm-favicon",V=o=>o.hasAttribute(M),ne=o=>{if(o.tagName!=="LINK")return!1;let t=(o.getAttribute("rel")??"").toLowerCase();return ze.has(t)},O=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{ne(r)&&!V(r)&&r.remove()});let t=document.head.querySelector(`link[${M}]`);t?t.href!==N&&(t.href=N):(t=document.createElement("link"),t.setAttribute(M,"1"),t.rel="icon",t.type="image/png",t.href=N,document.head.appendChild(t),d.debug("Favicon installed"));let e=document.head.querySelector(`link[${M}="apple"]`);e||(e=document.createElement("link"),e.setAttribute(M,"apple"),e.rel="apple-touch-icon",e.href=N,document.head.appendChild(e))},se=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)O();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),O())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&ne(i)&&!V(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&V(i)&&(a=!0)});a&&O()}).observe(document.head,{childList:!0,subtree:!1});let t=0,e=window.setInterval(()=>{t+=1,O(),t>=5&&window.clearInterval(e)},1e3)};var ie="reos-theme-stylesheet",le="reos-theme-fonts",qe=()=>{if(document.getElementById(le))return;let o=document.createElement("link");o.rel="preconnect",o.href="https://fonts.googleapis.com",document.head.appendChild(o);let t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous",document.head.appendChild(t);let e=document.createElement("link");e.id=le,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",document.head.appendChild(e)},Ue=`
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
`,We=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"rgba(15, 181, 126, 0.12)",border:"1px solid rgba(15, 181, 126, 0.3)"}},{selector:".hr-avatar, .hr-avatar__text, .hr-avatar__text p, .hr-avatar p, .hr-avatar span, .hr-avatar div, [class*='avatar'], [class*='avatar'] span, [class*='avatar'] p, [class*='avatar'] div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff']",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}}],G=()=>{for(let o of We){let t;try{t=document.querySelectorAll(o.selector)}catch{continue}t.forEach(e=>{for(let[r,a]of Object.entries(o.styles)){let s=e.style.getPropertyPriority(r),i=e.style.getPropertyValue(r);s==="important"&&i===a||e.style.setProperty(r,a,"important")}})}},j="#1A1F28",Ve=26,je=31,Ye=40,ce=new Set,de=new Set,z=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.children.length>0||(t.textContent||"").trim()!=="--")return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;t.style.setProperty("display","none","important");let a=t.className?.toString()||"<no class>";!de.has(a)&&a!=="<no class>"&&(de.add(a),d.debug(`Hid empty "--" leaf: "${a}"`))})},pe=new Set,Ke=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let e=(t.className?.toString()||"").toLowerCase();if(e.includes("ai-button")||e.includes("ask-ai")||e.includes("bg-clip-text")||e.includes("text-transparent")||t.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=t.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g"||window.getComputedStyle(t).color!=="rgb(255, 255, 255)")return;t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let i=t.className?.toString()||"<no class>";!pe.has(i)&&i!=="<no class>"&&(pe.add(i),d.debug(`Remapped pure-white text -> bone: "${i}"`))})},ue=new Set,Ze=()=>{document.querySelectorAll(".hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, aside.default-bg-color").forEach(t=>{t.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar"))return;let s=window.getComputedStyle(r),i=s.backgroundColor,n=s.backgroundImage||"",c=!1;if(n!=="none"&&n.includes("gradient"))c=!0;else if(i&&i!=="rgba(0, 0, 0, 0)"&&i!=="transparent"){let m=i.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(m){let h=parseInt(m[1],10),S=parseInt(m[2],10),L=parseInt(m[3],10);(h>=60||S>=60||L>=60)&&(h>230&&S>230&&L>230||(h>=80||S>=80||L>=80)&&(c=!0))}}if(!c)return;let f=(r.textContent||"").trim(),u=a,b=Array.from(r.querySelectorAll("*")).map(m=>(m.className?.toString()||"").toLowerCase()).join(" "),_=f.toLowerCase()==="ask ai"||u.includes("ai-button")||u.includes("ask-ai")||u.includes("askai"),x=u.includes("bg-clip-text")||u.includes("text-transparent")||b.includes("bg-clip-text")||b.includes("text-transparent"),y=Array.from(r.querySelectorAll("*")).some(m=>{let h=window.getComputedStyle(m),S=h.getPropertyValue("-webkit-background-clip")||"",L=h.getPropertyValue("background-clip")||"";return S.includes("text")||L.includes("text")});if(_||x||y){let m=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],h=S=>{m.forEach(L=>S.style.removeProperty(L))};h(r),r.querySelectorAll("*").forEach(h);return}let w="#12161D";r.style.setProperty("color",w,"important"),r.querySelectorAll("*").forEach(m=>{let h=m.tagName.toLowerCase();h==="svg"||h==="path"||h==="circle"||h==="rect"||h==="polygon"||h==="polyline"||h==="line"||h==="g"?(m.style.setProperty("fill",w,"important"),m.style.setProperty("stroke",w,"important"),m.style.setProperty("color",w,"important")):(m.style.setProperty("color",w,"important"),m.style.setProperty("-webkit-text-fill-color",w,"important"))});let E=r.className?.toString()||"<no class>";!ue.has(E)&&E!=="<no class>"&&(ue.add(E),d.debug(`Darkened SVG icons on colored button: "${E}"`))})})},me=new Set,Je=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.width<20||e.width>64||e.height<20||e.height>64)return;let r=e.top+e.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(n=>{let c=n;if(c.closest("[id^='ws-crm-']"))return;let p=n.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let f=p.left<e.right&&p.right>e.left,u=p.top<e.bottom&&p.bottom>e.top;if(!(f&&u)||p.top+p.height/2<r)return;let _=p.width*p.height/(e.width*e.height);if(_>.55)return;let x=c,y=c.parentElement,w=0;for(;y&&y!==t&&w<3;){let m=y.getBoundingClientRect();if(m.width>0&&m.width<=30&&m.height<=30)x=y;else break;y=y.parentElement,w++}x.style.setProperty("transform","translateY(11px)","important");let E=(x.className?.toString()||"")+" "+x.tagName;me.has(E)||(me.add(E),d.debug(`Dropped activity badge 11px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${_.toFixed(2)}): "${E}"`))})})},he=new Set,Xe=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.parentElement,r=0;for(;e&&r<3&&!e.closest("[id^='ws-crm-']");){let a=(e.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=e.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){e.style.setProperty("background-color","#12161D","important"),e.style.setProperty("background-image","none","important");let n=e.className?.toString()||"<no class>";!he.has(n)&&n!=="<no class>"&&(he.add(n),d.debug(`Painted Ask AI wrapper graphite: "${n}"`))}}e=e.parentElement,r++}})},be=new Set,Qe=()=>{document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header").forEach(t=>{t.querySelectorAll("*").forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']"))return;let a=(r.className?.toString()||"").toLowerCase();if(a.includes("avatar")||a.includes("notification-dot")||a.includes("indicator")||a.includes("ai-button")||a.includes("ask-ai")||a.includes("bg-clip-text")||a.includes("text-transparent")||r.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let n=parseInt(i[1],10),c=parseInt(i[2],10),p=parseInt(i[3],10);if(!(n>200&&c>200&&p>200))return;let u=r.getBoundingClientRect();if(u.width<24||u.height<16||u.width>1400)return;r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important");let b=r.className?.toString()||"<no class>";!be.has(b)&&b!=="<no class>"&&(be.add(b),d.debug(`Coerced light bg (${u.width.toFixed(0)}x${u.height.toFixed(0)}, rgb(${n},${c},${p})): "${b}"`))})})},ge=new Set,et=()=>{let o="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0)return;let r=(e.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||e.closest(o)||e.closest("[class*='avatar'], [class*='hr-avatar']")||e.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let a=e,s=null;for(let f=0;f<4&&a;f++){let u=a.nextElementSibling;if(u&&(u.matches(o)||u.querySelector(o)!==null)){s=u;break}a=a.parentElement}if(!s)return;let i=e.getBoundingClientRect();if(i.width===0||i.height===0||i.width>400||i.height>60)return;e.style.setProperty("color","#9098A3","important"),e.style.setProperty("-webkit-text-fill-color","#9098A3","important");let n=s,c=n.getBoundingClientRect();c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(n.style.setProperty("background-color",j,"important"),n.style.setProperty("border-color","#252C36","important"),n.style.setProperty("border-style","solid","important"),n.style.setProperty("border-width","1px","important"),n.style.setProperty("border-radius","4px","important"));let p=e.className?.toString()||"<no class>";!ge.has(p)&&p!=="<no class>"&&(ge.add(p),d.debug(`Colored field label "${r.slice(0,30)}": "${p}"`))})},fe=new Set,tt=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0||e.height>80||t.querySelector("svg, img")!==null)return;let a=(t.textContent||"").trim();if(a.length===0||a.length>4)return;let s=Math.min(e.width,e.height),i=Math.max(16,Math.min(24,Math.round(s*.6)));t.style.setProperty("font-size",`${i}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${i}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let n=t.className?.toString()||"<no class>";!fe.has(n)&&n!=="<no class>"&&(fe.add(n),d.debug(`Resized avatar text to ${i}px (circle ${s.toFixed(0)}px): "${n}"`))})},ye=new Set,ot=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let e=t.getBoundingClientRect();if(e.width===0||e.height===0)return;t.style.setProperty("background-color",j,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let r=t.className?.toString()||"<no class>";!ye.has(r)&&r!=="<no class>"&&(ye.add(r),d.debug(`Forced input slate bg: "${r}"`))})},q=()=>{document.body.querySelectorAll("*").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.closest("[class*='hr-collapse'], [class*='collapse-item'], [class*='collapse-header'], [class*='folder-header'], [class*='field-folder']"))return;let e=window.getComputedStyle(t).backgroundColor;if(!e||e==="rgba(0, 0, 0, 0)"||e==="transparent")return;let r=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!r)return;let a=parseInt(r[1],10),s=parseInt(r[2],10),i=parseInt(r[3],10);if(!(a<Ve&&s<je&&i<Ye))return;let c=t.getBoundingClientRect();if(c.width===0||c.height===0||c.width>800||c.height>200)return;t.style.setProperty("background-color",j,"important");let p=t.className?.toString()||"<no class>";!ce.has(p)&&p!=="<no class>"&&(ce.add(p),d.debug(`Coerced dark bg to slate (${c.width.toFixed(0)}x${c.height.toFixed(0)}, rgb(${a},${s},${i})): "${p}"`))})},ve=()=>{let o,t=()=>{o===void 0&&(o=window.setTimeout(()=>{o=void 0,G(),ot(),q(),z(),et(),Qe(),Xe(),Ze(),tt(),Je(),Ke()},100))};G(),q(),z(),window.setTimeout(()=>{G(),q(),z()},500),window.setTimeout(()=>{G(),q(),z()},1500),new MutationObserver(()=>{t()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})},xe=()=>{if(qe(),!document.getElementById(ie)){let o=document.createElement("style");o.id=ie,o.textContent=Ue,document.head.appendChild(o),d.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?ve():window.addEventListener("DOMContentLoaded",ve))};var we="ws-crm-customizer-version-badge",ke=()=>{if(document.getElementById(we))return;let o=document.createElement("div");o.id=we,o.style.cssText=`
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
  `,o.textContent=`Customizer v${D}`,o.title=`Built ${R}
Click to dismiss for this session`,o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)"}),o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),200)}),document.body.appendChild(o)};var Ee=()=>{d.info(`Loaded v${D} (built ${R})`),se(),xe(),Z(),K(o=>{d.debug("Page handler firing for:",o),ke(),ee(),ae()})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ee):Ee();})();
//# sourceMappingURL=customizer.js.map
