/* Wholesaling CRM Customizer v0.39.6 — built 2026-06-14T20:26:22.687Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var oo="[wholesaling-crm-customizer]",Yl="__WS_CRM_DEBUG",Jl=()=>!!window[Yl],c={info(...t){console.log(oo,...t)},warn(...t){console.warn(oo,...t)},error(...t){console.error(oo,...t)},debug(...t){Jl()&&console.log(oo,"[debug]",...t)}};var Xl=/\/v2\/location\/([A-Za-z0-9]+)/,Ql=new Set(["8ntUQzMflUkR0YvrRgVk"]),re=()=>{let t=window.location.pathname.match(Xl);return t?t[1]:null},vr=()=>{let t=re();return t!==null&&Ql.has(t)};var Ea=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,_r=/\/v2\/location\/([A-Za-z0-9]+)/,Zl=t=>{let e=t.match(Ea);if(!e)return null;let o=t.match(_r);return{contactId:e[1],locationId:o?o[1]:null,source:"url"}},ed=()=>{let t=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let e of t){let o=document.querySelector(e);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match(Ea);if(!a)continue;let i=r.match(_r)||window.location.pathname.match(_r);return{contactId:a[1],locationId:i?i[1]:null,source:"dom"}}return null},B=()=>{let t=Zl(window.location.pathname);return t||ed()};var Ta=()=>{let t=window.location.pathname;return t.includes("/contacts/detail/")?"contact-detail":t.includes("/contacts/smart-list")||t.includes("/contacts/")?"contact-list":t.includes("/opportunities/detail/")?"opportunity-detail":t.includes("/opportunities")?"opportunity-list":t.includes("/calendars/")?"calendar":t.includes("/dashboard")?"dashboard":t.includes("/conversations")?"conversations":t.includes("/settings")?"settings":"other"},no="",gr=null,Oe="other",yr=new Set,ro=()=>{let t=B()?.contactId??null;if(!(!(window.location.pathname!==no)&&!(t!==gr))){no=window.location.pathname,gr=t,Oe=Ta(),c.debug("Page/context changed:",Oe,no,"contact:",t);for(let r of yr)try{r(Oe)}catch(a){c.error("Subscriber threw:",a)}}},ne=t=>(yr.add(t),setTimeout(()=>t(Oe),0),()=>{yr.delete(t)}),Sa=()=>{Oe=Ta(),no=window.location.pathname,gr=B()?.contactId??null,c.debug("Router init, current page:",Oe);let t=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(o,r,a){t(o,r,a),ro()},history.replaceState=function(o,r,a){e(o,r,a),ro()},window.addEventListener("popstate",ro),setInterval(ro,1e3)},ao=()=>Oe;var io="0.39.6",so="2026-06-14T20:26:22.688Z";var I=(t,e={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=e;return new Promise((i,s)=>{let l=a.querySelector(t);if(l){i(l);return}let d,p,b=()=>{h&&h.disconnect(),d!==void 0&&window.clearTimeout(d),p!==void 0&&window.clearInterval(p)},h=new MutationObserver(()=>{let m=a.querySelector(t);m&&(b(),i(m))});h.observe(document.body,{childList:!0,subtree:!0}),p=window.setInterval(()=>{let m=a.querySelector(t);m&&(b(),i(m))},r),d=window.setTimeout(()=>{b(),c.warn(`waitForElement timed out for selector: ${t}`),s(new Error(`Selector not found within ${o}ms: ${t}`))},o)})};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},u={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},fr={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},Ca=t=>{let e=t==="emerald"?n.emeraldGlow:t==="amber"?n.amberGlow:n.slate,o=t==="emerald"?n.emeraldBorder:t==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=t==="emerald"?n.emerald:t==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${e};
    color: ${r};
    border: 1px solid ${o};
    border-radius: ${v.pill};
    font-family: ${u.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},K=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
  border: none;
  border-radius: ${v.sm};
  font-family: ${u.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,O=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${v.sm};
  font-family: ${u.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var td=/^[A-Za-z0-9]{15,30}$/,ut=t=>typeof t=="string"&&td.test(t),Aa=t=>{try{let e=t.split(".");if(e.length!==3)return null;let o=e[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},od=()=>{let t=window.WS_CRM_USER_ID;return ut(t)?t:null},rd=()=>{let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let o of e)if(ut(o))return o;return null},nd=()=>{try{let t=localStorage.getItem("refreshedToken");if(!t)return null;let e=t.startsWith('"')?t.slice(1,-1):t,o=Aa(e);if(!o)return null;let r=o.uid;if(ut(r))return r;let a=o.claims;if(a&&ut(a.user_id))return a.user_id}catch{}return null},ad=()=>{try{let t=["user","tokenUser","currentUser","ghl_user"];for(let e of t){let o=localStorage.getItem(e);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if(ut(a))return a}catch{}}}catch{}return null},M=()=>od()||rd()||nd()||ad()||null,id=()=>{try{let t=localStorage.getItem("refreshedToken");if(!t)return null;let e=t.startsWith('"')?t.slice(1,-1):t,o=Aa(e);return o?o.claims??o:null}catch{return null}},me=()=>{let t=window.WS_CRM_FORCE_AGENCY;return typeof t=="boolean"?t:id()?.type==="agency"};var Ma="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",sd=`${Ma}/active-follow-up-get`,ld=`${Ma}/active-follow-up-set`,De="ws-crm-active-follow-up-button",wr={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"In Active Follow Up",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"Not in Follow Up",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},dd=()=>{let t=B();return!t||!t.locationId?null:{contactId:t.contactId,tenantId:t.locationId}},cd=async t=>{let e=await fetch(sd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId}),credentials:"omit"});if(!e.ok)throw new Error(`Get webhook returned ${e.status} ${e.statusText}`);return await e.json()},pd=async(t,e)=>{let o=await fetch(ld,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,triggered_by_user_id:e??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},He=(t,e)=>{let o=wr[e];t.dataset.state=e,t.disabled=!o.clickable,t.style.cursor=o.clickable?"pointer":"default",t.style.background=o.bg,t.style.borderColor=o.border,t.style.color=o.color;let r=t.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=t.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},$a=t=>{let e=document.createElement("button");return e.type="button",e.id=De,e.dataset.contactId=t,e.style.cssText=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: ${n.slate};
    color: ${n.ash};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    font-family: ${u.sans};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    user-select: none;
    cursor: default;
    transition: background 0.15s ease, border-color 0.15s ease,
                color 0.15s ease, transform 0.1s ease;
    flex-shrink: 0;
  `,e.innerHTML=`
    <span class="ws-afu-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-afu-label">Active Follow Up\u2026</span>
  `,He(e,"loading"),e.addEventListener("click",async()=>{if(e.dataset.state!=="amber")return;let r=dd();if(!(!r||r.contactId!==t)){He(e,"blue"),e.style.transform="scale(0.97)",setTimeout(()=>e.style.transform="",120);try{let a=await pd(r,M()),i=a&&a.state&&a.state in wr?a.state:"blue";He(e,i),c.info(`Active Follow Up set for ${t} \u2192 ${i}`)}catch(a){c.error("Active Follow Up Set webhook failed",a),He(e,"error"),setTimeout(()=>void lo(e,r),4e3)}}}),e},lo=async(t,e)=>{He(t,"loading");try{let o=await cd(e),r=o&&o.state&&o.state in wr?o.state:"gray",a=document.getElementById(De);if(!a||a.dataset.contactId!==e.contactId)return;He(a,r)}catch(o){c.warn("Active Follow Up Get webhook failed",o),He(t,"error")}},bd=[".central-panel","[class*='central-panel']"],xr="ws-crm-contact-actions-bar",md=async()=>{for(let t of bd)try{let e=await I(t,{timeoutMs:3e3});if(e)return e}catch{}try{return(await I("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},hd=async(t,e)=>{let o=e.querySelector(`#${xr}`);if(!o)try{o=await I(`#${xr}`,{timeoutMs:3e3,root:e})}catch{o=null}if(o){let i=e.querySelector("#ws-crm-afu-wrap");return i&&i.remove(),t.style.order="2",o.appendChild(t),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=e.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let i=e.querySelector(`#${xr}`);i&&i.parentElement===e?e.insertBefore(a,i.nextSibling):e.insertBefore(a,e.firstChild)}return a.appendChild(t),{container:a,placement:"fallback"}},ud=()=>{let t=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!t)return null;let e=t;for(let o=0;o<8&&!(!e||!e.parentElement);o++){let r=e.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let i=r.children[1];return i instanceof HTMLElement?i:r}e=r}return null},vd=(t,e)=>{t.style.marginRight="4px",e.insertBefore(t,e.firstChild)},_d=async t=>{if(t==="url"){let o=await md();return o?{kind:"contact-detail",target:o}:null}let e=ud();return e?{kind:"conversations",target:e}:null},La=async(t,e)=>{if(e.kind==="contact-detail"){let{placement:o}=await hd(t,e.target);return o}return vd(t,e.target),"conversations-header"},gd=async()=>{let t=B();if(!t||!t.locationId){document.getElementById(De)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let e={contactId:t.contactId,tenantId:t.locationId},o=document.getElementById(De);if(o&&o.dataset.contactId===e.contactId){lo(o,e);return}o&&o.remove();let r=await _d(t.source);if(!r){c.warn(`Active Follow Up: no mount target on ${t.source}-source page`);return}let a=B();if(!a||a.contactId!==e.contactId)return;let i=$a(e.contactId),s=await La(i,r);c.debug(`Active Follow Up mounted (${r.kind}/${s}) for ${e.contactId}`),Ia();let l=document.getElementById(De)??i;lo(l,e);let d=new MutationObserver(()=>{let p=document.getElementById(De);if(!(B()?.contactId===e.contactId)){d.disconnect();return}if(!p){let h=$a(e.contactId);La(h,r).then(()=>{Ia(),lo(h,e)}),c.debug(`Active Follow Up re-mounted after wipe for ${e.contactId}`)}});d.observe(r.target,{childList:!0})},vt=null,Oa=()=>{let t=B()?.contactId??null;if(vt&&vt.contactId===t)return;let e=gd().finally(()=>{vt?.promise===e&&(vt=null)});vt={contactId:t,promise:e}},Ia=()=>{let t=document.querySelectorAll(`#${De}`);if(!(t.length<=1)){c.debug(`Active Follow Up: found ${t.length} duplicate buttons, keeping first, removing ${t.length-1}`);for(let e=1;e<t.length;e++)t[e].remove()}};var yd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",_t=new Map,je=async(t,e)=>{if(!t)return null;if(_t.has(t))return _t.get(t)??null;if(!e)return c.warn(`Cannot fetch Contact Type for ${t} \u2014 tenant_id missing from URL context`),null;let o=new AbortController,r=setTimeout(()=>o.abort(),1500);try{let a=`${yd}?contact_id=${encodeURIComponent(t)}&tenant_id=${encodeURIComponent(e)}`,i=await fetch(a,{method:"GET",headers:{Accept:"application/json"},signal:o.signal});if(clearTimeout(r),!i.ok)return c.warn(`Contact Type fetch returned ${i.status} for ${t}`),_t.set(t,null),null;let l=((await i.json()).contact_type||"").toLowerCase().trim()||null;return _t.set(t,l),c.debug(`Resolved Contact Type for ${t}: ${l??"(unset)"}`),l}catch(a){return clearTimeout(r),c.warn(`Contact Type fetch failed for ${t}:`,a),_t.set(t,null),null}};var Ke=t=>t==="buyer"?"buyer":t==="seller"?"seller":t==="agent"||t==="closing_agent"||t==="closing_office"||t==="vendor"||t==="tenant"?"other":"seller";var Pa="ws-buybox-nav-icon",Tr="ws-buybox-panel",Da="ws-buybox-modal",fd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",Sr="https://mcclivetim.github.io/reinvest-os-cdn/geo",co=null,gt=null,yt=null,Er=async()=>{if(co)return co;try{let t=await fetch(`${Sr}/states.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);return co=await t.json(),co}catch(t){return c.error("[buy-box] failed to fetch states.json",t),[]}},xd=async t=>{if(!gt)try{let e=await fetch(`${Sr}/counties.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);gt=await e.json()}catch(e){return c.error("[buy-box] failed to fetch counties.json",e),[]}return gt?.[t]??[]},wd=async t=>{if(!yt)try{let e=await fetch(`${Sr}/cities.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);yt=await e.json()}catch(e){return c.error("[buy-box] failed to fetch cities.json",e),[]}return yt?.[t]??[]},Cr=async t=>await(await fetch(fd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json(),kd=(t,e)=>Cr({tenant_id:t,action:"list",buyer_contact_id:e}),Ed=(t,e,o,r)=>Cr({tenant_id:t,action:"add",buyer_contact_id:e,geo_level:o,geo_value:r}),Td=(t,e)=>Cr({tenant_id:t,action:"remove",entry_id:e}),G=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Sd=(t,e)=>{let o=e.find(r=>r.code===t);return o?`${o.name} (${t})`:t},Cd='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',Ad='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',$d="nav.w-13, nav[class*='w-13']",Ld=".flex-1.h-full.relative.overflow-hidden.rounded-lg",Id=async()=>{try{return await I($d,{timeoutMs:2500})}catch{return null}},Md=async()=>{try{return await I(Ld,{timeoutMs:2500})}catch{return null}},Od=t=>t.querySelector("div[class*='bg-contacts-panel']")??null,Dd=(t,e)=>{let o=document.createElement("div");return o.id=Tr,o.dataset.buyerContactId=e,o.style.cssText=`
    width: 100%; height: 100%;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    display: none;
    flex-direction: column;
    overflow: hidden;
    color: ${n.bone};
    font-family: ${u.sans};
  `,o.innerHTML=`
    <div style="
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px 10px 16px; border-bottom: 1px solid ${n.steel};
    ">
      <div>
        <div style="font-size: 16px; font-weight: 500; color: ${n.bone};">Buy-Box</div>
        <div style="font-size: 11px; color: ${n.ash}; margin-top: 2px;">Areas this buyer is buying in</div>
      </div>
      <button id="ws-buybox-add" type="button" style="
        background: ${n.emerald}; color: ${n.bone}; border: none;
        border-radius: ${v.sm}; padding: 7px 14px; cursor: pointer;
        font-family: ${u.sans}; font-size: 13px; font-weight: 600;
      ">+ Add Area</button>
    </div>
    <div id="ws-buybox-body" style="
      flex: 1; overflow-y: auto; padding: 14px 16px;
      font-size: 13px; color: ${n.bone};
    ">
      <div style="color: ${n.ash}; font-style: italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{Bd(t,e,()=>Ar(t,e))}),o},Ar=async(t,e)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([kd(t,e),Er()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${G(r.error||"Failed to load buy-box entries")}</div>`;return}Hd(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,t,e)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${G(r.message)}</div>`}},Hd=(t,e,o,r,a)=>{if(e.state.length+e.county.length+e.city.length+e.zip.length===0){t.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let l=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(d=>e[d.key].length>0).map(d=>{let p=e[d.key].map(b=>{let h=d.key==="state"?Sd(b.geo_value,o):b.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${G(h)}</span>
              <button type="button" data-entry-id="${G(b.id)}" data-entry-label="${G(h)}" class="ws-buybox-remove" aria-label="Remove ${G(h)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${v.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${Ad}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${u.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${G(d.label)} (${e[d.key].length})</div>
          ${p}
        </div>
      `}).join("");t.innerHTML=l,t.querySelectorAll(".ws-buybox-remove").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.color=n.crimson}),d.addEventListener("mouseleave",()=>{d.style.color=n.ash}),d.addEventListener("click",()=>{let p=d.dataset.entryId||"",b=d.dataset.entryLabel||"this area";confirm(`Remove "${b}" from this buyer's buy-box?`)&&(d.disabled=!0,Td(r,p).then(h=>{if(!h.ok){alert(`Failed to remove: ${h.error||"unknown error"}`),d.disabled=!1;return}Ar(r,a)}).catch(h=>{alert(`Network error: ${h.message}`),d.disabled=!1}))})})},po=!1,Ra=(t,e)=>{po=e;let o=Od(t.panelArea);console.log(`[buy-box] setActive(${e}) \u2014 nativePanel=${!!o} panel=${!!t.panel} iconBtn=${!!t.iconBtn}`),e?(t.iconBtn.className=Pd,t.iconBtn.dataset.active="true",o&&(t.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),t.panel.style.display="flex",Ar(t.tenantId,t.buyerContactId)):(t.iconBtn.className=Ba,delete t.iconBtn.dataset.active,t.panel.style.display="none",o&&(o.style.display=t.nativePanelOriginalDisplay||""))},Ba="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",Pd="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",Rd=t=>{let e=document.createElement("button");return e.id=Pa,e.type="button",e.title="Buy-Box",e.setAttribute("aria-label","Buy-Box"),e.className=Ba,e.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${Cd.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,e.addEventListener("click",o=>{o.stopPropagation();let r=t();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!po;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),Ra(r,a)}),e},Bd=(t,e,o)=>{let r=document.getElementById(Da);r&&r.remove();let a=document.createElement("div");a.id=Da,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let i=document.createElement("div");i.style.cssText=`
    width: min(480px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.appendChild(i),document.body.appendChild(a),a.addEventListener("click",f=>{f.target===a&&a.remove()});let s={step:1,granularity:null,stateCode:null,value:null},l=async()=>{if(s.step===1)i.innerHTML=d(),p();else if(s.step===2){i.innerHTML=b();let f=await Er();i.innerHTML=h(f),m(f)}else if(s.step===3)if(s.granularity==="zip")i.innerHTML=w(),S();else if(s.granularity==="state"){let f=await Er();i.innerHTML=x(f),k(f)}else s.granularity==="county"?(i.innerHTML=_(s.stateCode||""),await xd(s.stateCode||""),i.innerHTML=y("County"),g()):s.granularity==="city"&&(i.innerHTML=_(s.stateCode||""),await wd(s.stateCode||""),i.innerHTML=y("City"),g())},d=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(f=>`
        <button type="button" data-granularity="${f}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${v.md};
          padding: 20px 16px; cursor: pointer; font-family: ${u.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${f.charAt(0).toUpperCase()+f.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,p=()=>{i.querySelectorAll(".ws-buybox-tile").forEach(f=>{f.addEventListener("mouseenter",()=>{f.style.borderColor=n.emerald,f.style.background=n.emeraldGlow}),f.addEventListener("mouseleave",()=>{f.style.borderColor=n.steel,f.style.background=n.steel}),f.addEventListener("click",()=>{let T=f.dataset.granularity;s.granularity=T,s.step=T==="zip"?3:2,l()})}),i.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},b=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,h=f=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${G(s.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${u.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};">
      ${f.map(T=>`
        <div data-state-code="${G(T.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${G(T.name)} <span style="color: ${n.ash}; font-family: ${u.mono}; font-size: 11px;">(${G(T.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,m=f=>{let T=i.querySelector("#ws-buybox-state-search"),$=i.querySelectorAll(".ws-buybox-state-row");$.forEach(P=>{P.addEventListener("mouseenter",()=>{P.style.background=n.emeraldGlow}),P.addEventListener("mouseleave",()=>{P.style.background="transparent"}),P.addEventListener("click",()=>{s.stateCode=P.dataset.stateCode||"",s.step=3,l()})}),T?.addEventListener("input",()=>{let P=(T.value||"").toLowerCase().trim();f.forEach((q,z)=>{let N=$[z];if(!N)return;let R=!P||q.name.toLowerCase().includes(P)||q.code.toLowerCase()===P;N.style.display=R?"":"none"})}),i.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{s.step=1,l()}),i.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>T?.focus(),0)},_=f=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${G(f)}\u2026</div>
  `,x=f=>{let T=f.find($=>$.code===s.stateCode);return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${v.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${G(T?T.name:s.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${T?G(T.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add ${T?G(T.name):"State"}</button>
        </div>
      </div>
    `},k=f=>{i.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{s.step=2,l()}),i.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),i.querySelector("#ws-buybox-save")?.addEventListener("click",()=>E(s.stateCode||""))},y=f=>{let T=s.granularity==="county"?gt?.[s.stateCode||""]??[]:yt?.[s.stateCode||""]??[];return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${G(f)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${T.length.toLocaleString()} ${G(f).toLowerCase()}s in ${G(s.stateCode||"")}.</div>
      <input id="ws-buybox-value-search" type="text" placeholder="Start typing\u2026" autofocus style="
        width: 100%; box-sizing: border-box; padding: 8px 12px;
        background: ${n.obsidian}; color: ${n.bone};
        border: 1px solid ${n.steel}; border-radius: ${v.sm};
        font-family: ${u.sans}; font-size: 13px; margin-bottom: 10px;
      ">
      <div id="ws-buybox-value-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};"></div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-top: 8px;"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 12px;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
      </div>
    `},g=()=>{let f=s.granularity==="county"?gt?.[s.stateCode||""]??[]:yt?.[s.stateCode||""]??[],T=i.querySelector("#ws-buybox-value-search"),$=i.querySelector("#ws-buybox-value-list");if(!T||!$)return;let P=q=>{let z=q.toLowerCase().trim();if(!z){$.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let N=f.filter(R=>R.toLowerCase().includes(z)).slice(0,50);if(N.length===0){$.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${G(s.stateCode||"")}.</div>`;return}$.innerHTML=N.map(R=>`
        <div data-value="${G(R)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${G(R)}
        </div>
      `).join(""),$.querySelectorAll(".ws-buybox-value-row").forEach(R=>{R.addEventListener("mouseenter",()=>{R.style.background=n.emeraldGlow}),R.addEventListener("mouseleave",()=>{R.style.background="transparent"}),R.addEventListener("click",()=>{s.value=R.dataset.value||"",E(s.value)})})};T.addEventListener("input",()=>P(T.value)),P(""),i.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{s.step=2,l()}),i.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>T.focus(),0)},w=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Enter Zip</div>
    <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">5-digit US zip code. Zips don't need a state (most are unique to one state anyway).</div>
    <input id="ws-buybox-zip" type="text" inputmode="numeric" placeholder="33101" autofocus maxlength="5" style="
      width: 100%; box-sizing: border-box; padding: 12px 14px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${u.mono}; font-size: 18px; text-align: center; letter-spacing: 0.12em;
      margin-bottom: 10px;
    ">
    <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: space-between;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
      <div style="display: flex; gap: 8px;">
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
        <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add Zip</button>
      </div>
    </div>
  `,S=()=>{let f=i.querySelector("#ws-buybox-zip"),T=i.querySelector("#ws-buybox-err");f&&(f.addEventListener("input",()=>{f.value=f.value.replace(/\D/g,"").slice(0,5),T&&(T.textContent="")}),f.addEventListener("keydown",$=>{$.key==="Enter"&&($.preventDefault(),C())}),i.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{s.step=1,l()}),i.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),i.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void C()),setTimeout(()=>f.focus(),0))},C=async()=>{let f=i.querySelector("#ws-buybox-zip"),T=i.querySelector("#ws-buybox-err"),$=(f?.value||"").trim();if(!/^\d{5}$/.test($)){T&&(T.textContent="Zip must be exactly 5 digits.");return}await E($)},E=async f=>{if(!s.granularity||!f)return;let T=i.querySelector("#ws-buybox-err"),$=i.querySelector("#ws-buybox-save");$&&($.disabled=!0,$.textContent="Adding\u2026"),T&&(T.textContent="");try{let P=await Ed(t,e,s.granularity,f);if(!P.ok){T&&(T.textContent=P.error||"Failed to add entry."),$&&($.disabled=!1,$.textContent="Add");return}o(),i.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${G(f)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${P.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{s.step=1,s.granularity=null,s.stateCode=null,s.value=null,l()},900)}catch(P){T&&(T.textContent=`Network error: ${P.message}`),$&&($.disabled=!1,$.textContent="Add")}};l()},kr=!1,Ye=null,ft=null,Ha=()=>{document.getElementById(Pa)?.remove(),document.getElementById(Tr)?.remove(),ft&&Ye&&Ye.nav.removeEventListener("click",ft,!0),ft=null,Ye=null,po=!1},Fa=()=>{Fd()},Fd=async()=>{if(!kr){kr=!0;try{let t=B();if(!t){Ha();return}let e=document.getElementById(Tr);if(e&&e.dataset.buyerContactId===t.contactId&&Ye)return;Ha();let o=null;try{o=await je(t.contactId,t.locationId)}catch(h){c.warn("[buy-box] Contact Type fetch failed",h);return}if(Ke(o)!=="buyer")return;if(!t.locationId){c.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,i]=await Promise.all([Id(),Md()]);if(!a||!i){c.warn("[buy-box] right-rail nav or panel area not found");return}let s=B();if(!s||s.contactId!==t.contactId)return;let l=Dd(t.locationId,t.contactId),d=Rd(()=>Ye),p={buyerContactId:t.contactId,tenantId:t.locationId,nav:a,panelArea:i,iconBtn:d,panel:l,nativePanelOriginalDisplay:""};Ye=p;let b=a.querySelector(".flex.flex-col.items-center.gap-2");b?b.appendChild(d):a.appendChild(d),i.appendChild(l),ft=h=>{let m=h.target;if(!m||p.iconBtn.contains(m))return;m.closest("button.sidebar-option-button")&&po&&Ra(p,!1)},a.addEventListener("click",ft,!0),c.info(`[buy-box] right-rail mount complete for buyer ${t.contactId}`)}finally{kr=!1}}};var ke="ws-crm-claim-release-pill",Nd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",zd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",Gd=async t=>{let e=await fetch(Nd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,contact_id:t.contactId,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Claim/Release Get returned ${e.status} ${e.statusText}`);return await e.json()},qd=async t=>{let e=await fetch(zd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,contact_id:t.contactId,triggered_by_user_id:t.userId,action:t.action}),credentials:"omit"});if(!e.ok)throw new Error(`Claim/Release Set returned ${e.status} ${e.statusText}`);return await e.json()},Ga=t=>{let e=Array.from(t.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return e?e.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Je=(t,e)=>{let o=e==="claim"?"emerald":"amber",r=e==="claim"?n.emerald:n.amber;t.dataset.mode=e,t.style.cssText=Ca(o),t.title=e==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${e==="claim"?"Claim Lead":"Release Lead"}</span>
  `},Ud=({contactId:t,mode:e})=>{let o=document.createElement("button");return o.id=ke,o.type="button",o.dataset.contactId=t,Je(o,e),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=B();if(!a||!a.locationId||a.contactId!==t)return;let i=M();if(!i){c.warn("Claim/Release click: no user ID detected (login session not exposing it)");let l=o.querySelector(".ws-cr-label");l&&(l.textContent="Sign-in needed"),setTimeout(()=>Je(o,r),2500);return}c.info(`Claim/Release click \u2014 contact=${t} mode=${r} user=${i}`);let s=r==="claim"?"release":"claim";Je(o,s),o.disabled=!0,o.style.opacity="0.8";try{let l=await qd({contactId:t,locationId:a.locationId,userId:i,action:r}),d=l?.mode==="claim"||l?.mode==="release"?l.mode:s;Je(o,d),c.info(`Claim/Release done \u2192 new mode: ${d}`)}catch(l){c.error("Claim/Release Set webhook failed",l),Je(o,r);let d=o.querySelector(".ws-cr-label");if(d){let p=d.textContent??"";d.textContent="Try again",setTimeout(()=>{d.textContent==="Try again"&&(d.textContent=p)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},Na=async(t,e)=>{try{let o=await Gd({contactId:e.contactId,locationId:e.locationId,userId:M()}),r=document.getElementById(ke);if(!r||r.dataset.contactId!==e.contactId)return;let a=o?.mode==="release"?"release":"claim";Je(r,a)}catch(o){c.warn("Claim/Release Get failed; pill stays in default 'claim' mode",o)}},Vd=async(t,e=1e4)=>{let o=Date.now();for(;Date.now()-o<e;){let r=Ga(t);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},za=(t,e)=>{let o=Ud({contactId:e,mode:"claim"}),r=document.createElement("span");r.id=`${ke}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),t.appendChild(r)},Wd=async()=>{let t=B();if(!t){document.getElementById(ke)?.remove();return}let e=document.getElementById(ke);if(!(e&&e.dataset.contactId===t.contactId)){e&&e.remove();try{let o=await I("#record-details-lhs",{timeoutMs:1e4}),r=await Vd(o),a=B();if(!a||a.contactId!==t.contactId)return;if(!r){c.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}za(r,t.contactId),c.debug(`Mounted Claim/Release pill next to name for ${t.contactId}`);let i=document.getElementById(ke);i&&t.locationId&&Na(i,{contactId:t.contactId,locationId:t.locationId});let s=null;s=new MutationObserver(async()=>{if(!(B()?.contactId===t.contactId)){s?.disconnect();return}if(document.getElementById(ke))return;let d=Ga(o);if(d){za(d,t.contactId);let p=document.getElementById(ke);p&&t.locationId&&Na(p,{contactId:t.contactId,locationId:t.locationId}),c.debug("Re-mounted Claim/Release pill after React wipe")}}),s.observe(o,{childList:!0,subtree:!0})}catch(o){c.warn("Could not mount Claim/Release pill:",o)}}},qa=()=>{Wd()};var Ja="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",jd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set";var Kd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",Yd=async({contactId:t,locationId:e,status:o,userId:r,deadReason:a,webhookUrl:i,kind:s})=>{let l=i||Ja,d;if(s==="buyer"){let b=Xa.find(m=>m.label===o),h=b?b.value:o.toLowerCase().replace(/\s+/g,"-");d={tenant_id:e,contact_id:t,new_status:h,triggered_by_user_id:r??""}}else{let b={call_status:o,triggered_by_user_id:r??""};a&&(b.dead_reason=a),d={contact_id:t,location:{id:e},customData:b}}let p=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),credentials:"omit"});if(!p.ok)throw new Error(`Webhook returned ${p.status} ${p.statusText}`)},Jd=async({contactId:t,tenantId:e})=>{let o=await fetch(Kd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()};var Xe="ws-crm-contact-actions-bar",Xd="ws-crm-call-status-dropdown",Ua="ws-crm-offer-made-modal",Qd=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Xa=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"vm-left",label:"VM Left",color:"purple"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"wrong-market",label:"Wrong Market",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],Zd=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],ec=async()=>{for(let t of Zd)try{let e=await I(t,{timeoutMs:2e3});if(e)return c.debug(`[actions-bar] mount target found via selector: ${t}`),e}catch{}try{let t=await I("#contact-conversation-panel",{timeoutMs:2e3});if(t.parentElement)return c.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),t.parentElement}catch{}for(let t of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let e=await I(t,{timeoutMs:1500});if(e)return c.debug(`[actions-bar] mount target via fallback: ${t}`),e.parentElement??e}catch{}return c.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},tc=({contactId:t,kind:e})=>{let o=e==="buyer"?Xa:Qd,r=e==="buyer"?jd:Ja,a=e==="buyer"?"Buyer Call Status":"Seller Call Status",i=document.createElement("div");i.id=Xd,i.style.cssText="position: relative; flex-shrink: 0; order: 1;";let s=document.createElement("button");s.type="button",s.style.cssText=O,s.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let l=document.createElement("div");return l.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,o.forEach(d=>{let p=document.createElement("button");p.type="button",p.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${v.sm};
      font-family: ${u.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,p.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${fr[d.color]};
        flex-shrink: 0;
      "></span>
      <span>${d.label}</span>
    `,p.addEventListener("mouseenter",()=>{p.style.background=n.slate}),p.addEventListener("mouseleave",()=>{p.style.background="transparent"}),p.addEventListener("click",async()=>{c.info(`Call Status set to "${d.label}" (${d.value}, ${d.color}) for contact ${t}`);let b=s.firstElementChild,h=s.children[1],m=s.children[2];b&&(b.style.background=fr[d.color]),h&&(h.textContent=d.label),l.style.display="none";let x=B()?.locationId,k=M();if(!x){c.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),h&&(h.textContent=`${d.label} (no tenant!)`),h&&(h.style.color=n.amber);return}if(e==="seller"&&d.color==="green"&&!k){c.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),h&&(h.textContent=`${d.label} (no user!)`),h&&(h.style.color=n.amber);return}let y=m?.textContent??"\u25BE",g=async w=>{m&&(m.textContent="\u2026"),s.style.opacity="0.75";try{await Yd({contactId:t,locationId:x,status:d.label,userId:k,deadReason:w,webhookUrl:r,kind:e}),m&&(m.textContent="\u2713"),setTimeout(()=>{m&&(m.textContent=y),s.style.opacity="1"},900)}catch(S){c.warn("Call Status webhook failed:",S),m&&(m.textContent="\u2717"),h&&(h.style.color=n.amber),s.style.opacity="1",setTimeout(()=>{m&&(m.textContent=y),h&&(h.style.color=n.bone)},1800)}};if(e==="seller"&&d.value==="dead-deal"){let w=h?.textContent??"";ac(S=>{g(S)},()=>{h&&(h.textContent=w)});return}if(e==="seller"&&d.value==="appointment-booked"){let w=h?.textContent??"";try{(await Jd({contactId:t,tenantId:x})).ok?await g():ic(()=>{g()},()=>{h&&(h.textContent=w)})}catch(S){c.warn("Appointment sanity check failed; firing anyway:",S),await g()}return}await g()}),l.appendChild(p)}),s.addEventListener("click",d=>{d.stopPropagation(),l.style.display=l.style.display==="none"?"block":"none"}),document.addEventListener("click",d=>{i.contains(d.target)||(l.style.display="none")}),i.appendChild(s),i.appendChild(l),i},oc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",rc=async t=>{let e=await fetch(oc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,kind:t.kind,amount:t.amount,expires_at:t.expiresAt,triggered_by_user_id:t.userId}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},nc=(t,e="seller")=>{document.getElementById(Ua)?.remove();let o=e==="seller",r=o?"Record Your Offer":"Record Buyer's Offer",a=o?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=o?n.emerald:n.amber,s=document.createElement("div");s.id=Ua,s.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let l=document.createElement("div");l.style.cssText=`
    width: min(420px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let d=new Date,p=new Date(d.getTime()+5*24*60*60*1e3).toISOString().slice(0,10),b=o?`
    <label style="
      display: block;
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
    ">Offer Expires</label>
    <input id="ws-offer-expires" type="date" value="${p}"
      style="
        width: 100%;
        background: ${n.slate};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 16px;
        outline: none;
        box-sizing: border-box;
      " />`:"";l.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${i};
      margin-bottom: 8px;
    ">${o?"Seller Side":"Buyer Side"}</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">${r}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
      line-height: 1.4;
    ">${a}</div>

    <label style="
      display: block;
      font-family: ${u.mono};
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
      border-radius: ${v.sm};
      padding: 0 12px;
      margin-bottom: 16px;
    ">
      <span style="color: ${n.ash}; font-family: ${u.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${u.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    ${b}

    <div id="ws-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${K}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,s.appendChild(l),document.body.appendChild(s);let h=()=>s.remove();s.addEventListener("click",k=>{k.target===s&&h()});let m=l.querySelector("#ws-offer-error"),_=l.querySelector("#ws-offer-cancel"),x=l.querySelector("#ws-offer-submit");_?.addEventListener("click",h),x?.addEventListener("click",async()=>{let k=(l.querySelector("#ws-offer-amount")?.value??"").trim(),y=o?l.querySelector("#ws-offer-expires")?.value??"":"";if(!k||Number(k)<=0){m&&(m.textContent="Enter a positive offer amount."),c.warn("Offer Made submit blocked \u2014 invalid amount");return}let g=Number(k);if(g<100){m&&(m.textContent=`That looks low \u2014 did you mean $${(g*1e3).toLocaleString("en-US")}?`);return}let S=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),C=S?S[1]:null;if(!C){m&&(m.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}m&&(m.textContent=""),x&&(x.disabled=!0,x.textContent="Recording\u2026",x.style.opacity="0.7"),_&&(_.disabled=!0);try{let E=await rc({tenantId:C,contactId:t,kind:e,amount:g,expiresAt:y||null,userId:M()});if(!E.ok){m&&(m.textContent=E.error??"Something went wrong."),x&&(x.disabled=!1,x.textContent="Record Offer",x.style.opacity="1"),_&&(_.disabled=!1);return}c.info(`Offer Made (${e}) recorded for contact ${t}: $${g} on ${E.opp_pipeline} opp (stage: ${E.opp_stage_name??"?"})`),h()}catch(E){c.error("Offer Made webhook failed",E),m&&(m.textContent=E instanceof Error?E.message:"Network error \u2014 try again."),x&&(x.disabled=!1,x.textContent="Record Offer",x.style.opacity="1"),_&&(_.disabled=!1)}}),setTimeout(()=>{l.querySelector("#ws-offer-amount")?.focus()},0)},Va="ws-crm-dead-deal-modal",ac=(t,e)=>{document.getElementById(Va)?.remove();let o=document.createElement("div");o.id=Va,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(460px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.amber};
      margin-bottom: 8px;
    ">Mark Lead Dead</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Why is this deal dead?</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
    ">Logged as a contact note so the manager can spot patterns later (lost-reason coaching). Required.</div>

    <label style="
      display: block;
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
    ">Reason</label>
    <textarea id="ws-dead-reason" rows="4" placeholder="e.g. Seller decided to keep the property after talking to family"
      style="
        width: 100%;
        background: ${n.slate};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        color: ${n.bone};
        font-family: ${u.sans};
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
      color: ${n.amber};
      min-height: 16px;
      margin-bottom: 16px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-dead-cancel" type="button" style="
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${K}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),i=()=>{a(),e()};o.addEventListener("click",l=>{l.target===o&&i()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",i);let s=()=>{let l=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),p=(l?.value??"").trim();if(!p){d&&(d.textContent="Please enter a reason."),l?.focus();return}if(p.length<4){d&&(d.textContent="Please enter at least a few words."),l?.focus();return}a(),t(p)};r.querySelector("#ws-dead-submit")?.addEventListener("click",s),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),s()),l.key==="Escape"&&i()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},Wa="ws-crm-appointment-sanity-modal",ic=(t,e)=>{document.getElementById(Wa)?.remove();let o=document.createElement("div");o.id=Wa,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,r.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.amber};
      margin-bottom: 8px;
    ">Heads up</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    ">No upcoming appointment found.</div>
    <div style="
      font-size: 13px;
      color: ${n.ash};
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
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${K}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),i=()=>{a(),e()};o.addEventListener("click",l=>{l.target===o&&i()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",i),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),t()});let s=l=>{l.key==="Escape"&&(document.removeEventListener("keydown",s),i())};document.addEventListener("keydown",s)},ja=(t,e)=>{let o=document.createElement("div");if(o.id=Xe,o.dataset.contactId=t,o.dataset.contactKind=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,e==="seller"||e==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=O,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",()=>nc(t,e)),o.appendChild(r),o.appendChild(tc({contactId:t,kind:e}))}return o},$r=!1,Ka=()=>{document.querySelectorAll(`[id="${Xe}"]`).forEach(t=>t.remove())},Qa=async()=>{if(c.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),$r){c.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}$r=!0;try{await sc()}finally{$r=!1}},sc=async()=>{let t=B();if(!t){c.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),Ka();return}if(c.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${t.contactId} locationId=${t.locationId??"(null)"} source=${t.source}`),t.source!=="url"){c.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),Ka();return}let e="seller";try{let p=await je(t.contactId,t.locationId),b=Ke(p);b==="buyer"?e="buyer":b==="other"&&(e="other"),c.debug(`[actions-bar:03] kind resolved \u2014 kind=${e} (raw type=${p??"(null)"})`)}catch(p){c.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",p)}let o=B();if(!o||o.contactId!==t.contactId){c.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${Xe}"]`));if(r.length===1&&r[0].dataset.contactId===t.contactId&&r[0].dataset.contactKind===e){c.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${t.contactId} kind=${e} \u2014 no-op`);return}r.length>0&&(c.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(p=>p.remove()));let a=await ec();if(!a){c.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}c.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let i=B();if(!i||i.contactId!==t.contactId){c.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let s;try{s=ja(t.contactId,e)}catch(p){c.error("[actions-bar:08-FAIL] buildBar threw:",p);return}s.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(s,a.firstChild)}catch(p){c.error("[actions-bar:09-FAIL] insertBefore threw:",p);return}if(!document.getElementById(Xe)){c.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}c.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${t.contactId} kind=${e}`);let d=null;d=new MutationObserver(()=>{if(!(B()?.contactId===t.contactId)){d?.disconnect();return}let b=document.querySelectorAll(`[id="${Xe}"]`);if(b.length>1){for(let h=1;h<b.length;h++)b[h].remove();c.debug(`[actions-bar:WATCHDOG] trimmed ${b.length-1} duplicate bar(s)`);return}if(b.length===0){let h=document.querySelector(".central-panel")||a,m=ja(t.contactId,e);m.dataset.mountTarget=s.dataset.mountTarget??"";try{h.insertBefore(m,h.firstChild),c.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${t.contactId}`)}catch(_){c.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",_)}}}),d.observe(a,{childList:!0})},Ya=null,lc=()=>{Ya===null&&(Ya=window.setInterval(()=>{let t=B();t&&(document.getElementById(Xe)||(c.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",t.contactId),Qa()))},3e3))},Za=()=>{lc(),Qa()};var bo="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",dc=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),xt="data-ws-crm-favicon",Lr=t=>t.hasAttribute(xt),ei=t=>{if(t.tagName!=="LINK")return!1;let e=(t.getAttribute("rel")??"").toLowerCase();return dc.has(e)},mo=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{ei(r)&&!Lr(r)&&r.remove()});let e=document.head.querySelector(`link[${xt}="1"]`);e?e.href!==bo&&(e.href=bo):(e=document.createElement("link"),e.setAttribute(xt,"1"),e.rel="icon",e.type="image/png",e.href=bo,document.head.appendChild(e),c.debug("Favicon installed"));let o=document.head.querySelector(`link[${xt}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(xt,"apple"),o.rel="apple-touch-icon",o.href=bo,document.head.appendChild(o))},ti=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)mo();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),mo())},50)}new MutationObserver(r=>{let a=!1;for(let i of r)i.addedNodes.forEach(s=>{s instanceof HTMLLinkElement&&ei(s)&&!Lr(s)&&(a=!0)}),i.removedNodes.forEach(s=>{s instanceof HTMLLinkElement&&Lr(s)&&(a=!0)});a&&mo()}).observe(document.head,{childList:!0,subtree:!1});let e=0,o=window.setInterval(()=>{e+=1,mo(),e>=5&&window.clearInterval(o)},1e3)};var cc=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],pc=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,bc=".hr-card.hr-modal.crm-opportunities-modal",H=()=>{let t=document.querySelector(bc);if(!t)return null;let e=t.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of e){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(pc);if(a){let i=a[1];if(cc.includes(i))return i}}return null},W=async(t=2500)=>{let e=Date.now();for(;Date.now()-e<t;){let o=H();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var oi="ws-crm-dispo-action-row",U=t=>{let e=document.getElementById(oi);if(e)return e;t.classList.contains("description")&&(t.style.display="flex",t.style.alignItems="center",t.style.gap="12px",t.style.flexWrap="wrap");let o=document.createElement("span");return o.id=oi,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",t.appendChild(o),o};var mc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",se="ws-crm-mt-offer-made-button",ri="ws-crm-mt-offer-made-modal",hc=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,uc=/\/v2\/location\/([A-Za-z0-9]+)/,vo=()=>{let t=window.location.pathname,e=t.match(hc);if(!e)return null;let o=t.match(uc);return{oppId:e[1],locationId:o?o[1]:null}},vc=async t=>{let e=await fetch(mc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,kind:"buyer",amount:t.amount,triggered_by_user_id:t.userId}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},ho=()=>{document.getElementById(ri)?.remove()},_c=t=>{ho();let e=document.createElement("div");e.id=ri,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(420px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,o.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 8px;
    ">Buyer Side</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Record Buyer's Offer</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
      line-height: 1.4;
    ">Logs the offer on this Marketing Tracker card and advances the buyer to "Made an Offer".</div>

    <label style="
      display: block;
      font-family: ${u.mono};
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
      border-radius: ${v.sm};
      padding: 0 12px;
      margin-bottom: 8px;
    ">
      <span style="color: ${n.ash}; font-family: ${u.mono}; font-size: 14px;">$</span>
      <input id="ws-mt-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${u.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    <div id="ws-mt-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 16px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-mt-offer-cancel" type="button" style="
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${K}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),i=o.querySelector("#ws-mt-offer-cancel"),s=o.querySelector("#ws-mt-offer-submit");setTimeout(()=>r?.focus(),50);let l=d=>{d.key==="Enter"?(d.preventDefault(),s?.click()):d.key==="Escape"&&(d.preventDefault(),i?.click())};o.addEventListener("keydown",l),e.addEventListener("click",d=>{d.target===e&&ho()}),i?.addEventListener("click",()=>ho()),s?.addEventListener("click",async()=>{if(!r||!a||!s)return;let d=r.value.trim();if(!d||Number(d)<=0){a.textContent="Enter a positive offer amount.",r.focus();return}let p=Number(d);if(p<100){a.textContent=`That looks low \u2014 did you mean $${(p*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",s.disabled=!0,s.textContent="Recording\u2026",s.style.opacity="0.7",i&&(i.disabled=!0);try{let b=await vc({oppId:t.oppId,locationId:t.locationId,amount:p,userId:M()});if(!b.ok){a.textContent=b.error??"Something went wrong.",s.disabled=!1,s.textContent="Record Offer",s.style.opacity="1",i&&(i.disabled=!1);return}ho(),t.onSuccess()}catch(b){c.error("MT Offer Made webhook failed",b),a.textContent=b instanceof Error?b.message:"Network error \u2014 try again.",s.disabled=!1,s.textContent="Record Offer",s.style.opacity="1",i&&(i.disabled=!1)}})},gc=t=>{let e=document.createElement("button");return e.id=se,e.type="button",e.dataset.oppId=t,e.style.cssText=O,e.title="Record this buyer's offer on the property and advance to 'Made an Offer'",e.innerHTML=`
    <span style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.emerald};
      box-shadow: 0 0 6px ${n.emerald};
      flex-shrink: 0;
    "></span>
    <span class="ws-mt-om-label">Mark Offer Made</span>
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{let o=vo();!o||!o.locationId||o.oppId!==t||_c({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=e.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),e.style.background=n.emeraldGlow,e.style.color=n.emeraldBright,e.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",e.style.cssText=O)},4e3)}})}),e},yc=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],fc=async()=>{for(let t of yc)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},uo=!1,Dr=async()=>{if(!uo){uo=!0;try{await xc()}finally{uo=!1}}},xc=async()=>{let t=vo();if(!t||!t.locationId){document.getElementById(se)?.remove(),document.getElementById(`${se}-wrap`)?.remove(),kt();return}let e=document.getElementById(se);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${se}-wrap`)?.remove(),kt());return}e&&(e.remove(),document.getElementById(`${se}-wrap`)?.remove());let o=await fc();if(!o){c.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await W();if(r!=="Marketing Tracker"){c.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=vo();if(!a||a.oppId!==t.oppId)return;let i=gc(t.oppId),s=document.createElement("span");s.id=`${se}-wrap`,s.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted MT Offer Made button on opp ${t.oppId}`),wc(t.oppId)},wt=null,Or=null,kt=()=>{wt?.disconnect(),wt=null,Or=null},wc=t=>{if(wt&&Or===t)return;kt();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Or=t,wt=new MutationObserver(()=>{let o=vo();if(!o||o.oppId!==t){kt();return}let r=H();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(se)?.remove(),document.getElementById(`${se}-wrap`)?.remove(),kt();return}document.getElementById(se)||Dr()}),wt.observe(e,{childList:!0,subtree:!0}))},Ir=null,Mr,kc=()=>{Ir||(Ir=new MutationObserver(()=>{Mr===void 0&&(Mr=window.setTimeout(()=>{Mr=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(se);t&&!e&&!uo&&Dr()},300))}),Ir.observe(document.body,{childList:!0,subtree:!0}))},ni=()=>{kc(),Dr()};var Ec="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",le="ws-crm-not-interested-button",Tc=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Sc=/\/v2\/location\/([A-Za-z0-9]+)/,go=()=>{let t=window.location.pathname,e=t.match(Tc);if(!e)return null;let o=t.match(Sc);return{oppId:e[1],locationId:o?o[1]:null}},Cc=async t=>{let e=await fetch(Ec,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Not Interested webhook returned ${e.status} ${e.statusText}`);return await e.json()},Ac=t=>{let e=document.createElement("button");return e.id=le,e.type="button",e.dataset.oppId=t,e.style.cssText=O,e.title="Close this Marketing Tracker opp as Not Interested for THIS property only",e.innerHTML=`
    <span style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.crimson};
      box-shadow: 0 0 6px ${n.crimson};
      flex-shrink: 0;
    "></span>
    <span class="ws-ni-label">Mark Not Interested</span>
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",async()=>{let o=go();if(!o||!o.locationId||o.oppId!==t)return;let r=M(),a=e.querySelector(".ws-ni-label");e.disabled=!0,e.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let i=await Cc({oppId:o.oppId,locationId:o.locationId,userId:r});if(i?.ok)a&&(a.textContent="Marked Not Interested"),e.style.background=n.crimsonGlow,e.style.color=n.crimson,c.info(`Not Interested set for opp ${t} \u2192 ${i.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(i){c.error("Not Interested webhook failed",i),a&&(a.textContent="Try again"),e.disabled=!1,e.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),e},$c=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Lc=async()=>{for(let t of $c)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},_o=!1,Br=async()=>{if(!_o){_o=!0;try{await Ic()}finally{_o=!1}}},Ic=async()=>{let t=go();if(!t||!t.locationId){document.getElementById(le)?.remove(),document.getElementById(`${le}-wrap`)?.remove(),Tt();return}let e=document.getElementById(le);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${le}-wrap`)?.remove(),Tt());return}e&&(e.remove(),document.getElementById(`${le}-wrap`)?.remove());let o=await Lc();if(!o){c.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await W();if(r!=="Marketing Tracker"){c.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=go();if(!a||a.oppId!==t.oppId)return;let i=Ac(t.oppId),s=document.createElement("span");s.id=`${le}-wrap`,s.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted Not Interested button on opp ${t.oppId}`),Mc(t.oppId)},Et=null,Rr=null,Tt=()=>{Et?.disconnect(),Et=null,Rr=null},Mc=t=>{if(Et&&Rr===t)return;Tt();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Rr=t,Et=new MutationObserver(()=>{let o=go();if(!o||o.oppId!==t){Tt();return}let r=H();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(le)?.remove(),document.getElementById(`${le}-wrap`)?.remove(),Tt();return}document.getElementById(le)||Br()}),Et.observe(e,{childList:!0,subtree:!0}))},Hr=null,Pr,Oc=()=>{Hr||(Hr=new MutationObserver(()=>{Pr===void 0&&(Pr=window.setTimeout(()=>{Pr=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(le);t&&!e&&!_o&&Br()},300))}),Hr.observe(document.body,{childList:!0,subtree:!0}))},ai=()=>{Oc(),Br()};var Dc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",ae="ws-crm-schedule-walkthrough-button",Fr="ws-crm-schedule-walkthrough-modal",Hc=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Pc=/\/v2\/location\/([A-Za-z0-9]+)/,xo=()=>{let t=window.location.pathname,e=t.match(Hc);if(!e)return null;let o=t.match(Pc);return{oppId:e[1],locationId:o?o[1]:null}},yo=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${e==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Rc=(t,e)=>{document.getElementById(Fr)?.remove();let o=document.createElement("div");o.id=Fr,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,i=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${Fr} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Marketing Tracker</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Schedule Walkthrough</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">Books the buyer's property walkthrough on the Property Walkthrough calendar and advances this opp to Scheduled Walkthrough.</div>
    <label style="${i}">Date &amp; time</label>
    <input id="wsw-dt" type="datetime-local" style="${a}" />
    <label style="${i}">Duration</label>
    <select id="wsw-dur" style="${a}">
      <option value="30">30 minutes</option>
      <option value="45">45 minutes</option>
      <option value="60">60 minutes</option>
    </select>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:4px;">
      <button id="wsw-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wsw-submit" type="button" style="${K}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let s=()=>o.remove();o.addEventListener("click",d=>{d.target===o&&s()}),document.getElementById("wsw-cancel")?.addEventListener("click",s);let l=document.getElementById("wsw-submit");l?.addEventListener("click",async()=>{let d=document.getElementById("wsw-dt")?.value||"",p=document.getElementById("wsw-dur")?.value||"30";if(!d){yo("Pick a date and time.","err");return}let b=new Date(d).toISOString();l.disabled=!0,l.textContent="Scheduling\u2026";try{if((await fetch(Dc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,start_time:b,duration_min:Number(p)}),credentials:"omit"})).ok){s(),yo("Walkthrough scheduled \u2713");let m=document.querySelector(`#${ae} .ws-sw-label`);m&&(m.textContent="Walkthrough Scheduled")}else l.disabled=!1,l.textContent="Schedule",yo("Scheduling failed \u2014 try again.","err")}catch(h){c.warn("[schedule-walkthrough] failed:",h),l.disabled=!1,l.textContent="Schedule",yo("Couldn't reach the scheduler. Try again.","err")}})},Bc=t=>{let e=document.createElement("button");return e.id=ae,e.type="button",e.dataset.oppId=t,e.style.cssText=O,e.title="Schedule this buyer's property walkthrough",e.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{let o=xo();!o||!o.locationId||o.oppId!==t||Rc(o.oppId,o.locationId)}),e},Fc=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Nc=async()=>{for(let t of Fc)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},fo=!1,qr=async()=>{if(!fo){fo=!0;try{await zc()}finally{fo=!1}}},zc=async()=>{let t=xo();if(!t||!t.locationId){document.getElementById(ae)?.remove(),document.getElementById(`${ae}-wrap`)?.remove(),Ct();return}let e=document.getElementById(ae);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${ae}-wrap`)?.remove(),Ct());return}e&&(e.remove(),document.getElementById(`${ae}-wrap`)?.remove());let o=await Nc();if(!o){c.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await W();if(r!=="Marketing Tracker"){c.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=xo();if(!a||a.oppId!==t.oppId)return;let i=Bc(t.oppId),s=document.createElement("span");s.id=`${ae}-wrap`,s.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted Schedule Walkthrough button on opp ${t.oppId}`),Gc(t.oppId)},St=null,Gr=null,Ct=()=>{St?.disconnect(),St=null,Gr=null},Gc=t=>{if(St&&Gr===t)return;Ct();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Gr=t,St=new MutationObserver(()=>{let o=xo();if(!o||o.oppId!==t){Ct();return}let r=H();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(ae)?.remove(),document.getElementById(`${ae}-wrap`)?.remove(),Ct();return}document.getElementById(ae)||qr()}),St.observe(e,{childList:!0,subtree:!0}))},Nr=null,zr,qc=()=>{Nr||(Nr=new MutationObserver(()=>{zr===void 0&&(zr=window.setTimeout(()=>{zr=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(ae);t&&!e&&!fo&&qr()},300))}),Nr.observe(document.body,{childList:!0,subtree:!0}))},ii=()=>{qc(),qr()};var Uc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",Qe="ws-crm-resend-deal-link-wrap",Vc=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Wc=/\/v2\/location\/([A-Za-z0-9]+)/,ko=()=>{let t=window.location.pathname,e=t.match(Vc);if(!e)return null;let o=t.match(Wc);return{oppId:e[1],locationId:o?o[1]:null}},jc=async t=>{let e=await fetch(Uc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,channel:t.channel,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Resend webhook returned ${e.status} ${e.statusText}`);let o=await e.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},Kc=t=>t.replace(/[<>&]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[e]||e),si=t=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t};box-shadow:0 0 6px ${t};flex-shrink:0;"></span>`,jr=(t,e)=>{t.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=O,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${si(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>Yc(t,e)),t.appendChild(o)},Yc=(t,e)=>{t.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,i=(l,d)=>{let p=document.createElement("button");return p.type="button",p.textContent=l,p.style.cssText=a,p.addEventListener("click",()=>void Jc(t,e,d,o)),p};o.appendChild(i("Text","sms")),o.appendChild(i("Email","email"));let s=document.createElement("button");s.type="button",s.textContent="\u2715",s.title="Cancel",s.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,s.addEventListener("click",()=>jr(t,e)),o.appendChild(s),t.appendChild(o)},Jc=async(t,e,o,r)=>{let a=ko();if(!(!a||!a.locationId||a.oppId!==e)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let i=await jc({oppId:a.oppId,locationId:a.locationId,channel:o,userId:M()});if(i?.ok)r.innerHTML=`${si(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,c.info(`Resend deal link (${o}) for opp ${e}`);else throw new Error(i?.error||"Send failed")}catch(i){let s=i instanceof Error?i.message:"Send failed";c.error("Resend deal link failed",i),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${Kc(s)}</span>`}window.setTimeout(()=>jr(t,e),3500)}},Xc=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Qc=async()=>{for(let t of Xc)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},wo=!1,Kr=async()=>{if(!wo){wo=!0;try{await Zc()}finally{wo=!1}}},Zc=async()=>{let t=ko();if(!t||!t.locationId){document.getElementById(Qe)?.remove(),$t();return}let e=document.getElementById(Qe);if(e&&e.dataset.oppId===t.oppId){let s=H();s!==null&&s!=="Marketing Tracker"&&(e.remove(),$t());return}e&&e.remove();let o=await Qc();if(!o)return;let r=await W();if(r!=="Marketing Tracker"){c.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=ko();if(!a||a.oppId!==t.oppId)return;let i=document.createElement("span");i.id=Qe,i.dataset.oppId=t.oppId,i.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",U(o).appendChild(i),jr(i,t.oppId),c.debug(`Mounted Resend Deal Link button on opp ${t.oppId}`),ep(t.oppId)},At=null,Wr=null,$t=()=>{At?.disconnect(),At=null,Wr=null},ep=t=>{if(At&&Wr===t)return;$t();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Wr=t,At=new MutationObserver(()=>{let o=ko();if(!o||o.oppId!==t){$t();return}let r=H();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Qe)?.remove(),$t();return}document.getElementById(Qe)||Kr()}),At.observe(e,{childList:!0,subtree:!0}))},Ur=null,Vr,tp=()=>{Ur||(Ur=new MutationObserver(()=>{Vr===void 0&&(Vr=window.setTimeout(()=>{Vr=void 0,!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description")&&!document.getElementById(Qe)&&!wo&&Kr()},300))}),Ur.observe(document.body,{childList:!0,subtree:!0}))},li=()=>{tp(),Kr()};var op="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",de="ws-crm-reduce-price-button",di="ws-crm-reduce-price-modal",rp=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,np=/\/v2\/location\/([A-Za-z0-9]+)/,So=()=>{let t=window.location.pathname,e=t.match(rp);if(!e)return null;let o=t.match(np);return{oppId:e[1],locationId:o?o[1]:null}},ap=async t=>{let e=await fetch(op,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,dispo_opp_id:t.oppId,new_price:t.newPrice,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Reduce Price webhook returned ${e.status} ${e.statusText}`);let o=await e.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},Eo=()=>{document.getElementById(di)?.remove()},ip=t=>{Eo();let e=document.createElement("div");e.id=di,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,o.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.amber};
      margin-bottom: 8px;
    ">Mark Reduction</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Reduce listing price</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
      line-height: 1.4;
    ">Updates the Property record's listing price and blasts the new number to active interested buyers + previously-withdrew buyers on this property. One click. No separate save.</div>

    <label style="
      display: block;
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
    ">New listing price</label>
    <div style="position: relative; margin-bottom: 4px;">
      <span style="
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: ${n.ash};
        pointer-events: none;
      ">$</span>
      <input id="ws-reduce-price-input" type="text" inputmode="numeric" placeholder="125000"
        style="
          width: 100%;
          background: ${n.slate};
          border: 1px solid ${n.steel};
          border-radius: ${v.sm};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 14px;
          padding: 10px 12px 10px 24px;
          outline: none;
          box-sizing: border-box;
        " />
    </div>
    <div id="ws-reduce-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 16px;
    "></div>

    <div style="display: flex; gap: 10px; justify-content: flex-end;">
      <button id="ws-reduce-cancel" type="button" style="
        background: transparent;
        border: 1px solid ${n.steel};
        color: ${n.bone};
        padding: 8px 16px;
        border-radius: ${v.sm};
        font-family: ${u.sans};
        font-size: 13px;
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-reduce-submit" type="button" style="
        background: ${n.amber};
        border: 1px solid ${n.amber};
        color: ${n.obsidian};
        padding: 8px 16px;
        border-radius: ${v.sm};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      ">Reduce Price</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),i=o.querySelector("#ws-reduce-cancel"),s=o.querySelector("#ws-reduce-submit");setTimeout(()=>r?.focus(),50),r?.addEventListener("input",()=>{let p=r.value.replace(/[^0-9.]/g,"").split(".");r.value=p[0]+(p.length>1?"."+p.slice(1).join(""):"")});let l=d=>{d.key==="Enter"?(d.preventDefault(),s?.click()):d.key==="Escape"&&(d.preventDefault(),i?.click())};o.addEventListener("keydown",l),e.addEventListener("click",d=>{d.target===e&&Eo()}),i?.addEventListener("click",()=>{Eo()}),s?.addEventListener("click",async()=>{if(!r||!a||!s)return;let d=r.value.trim();if(!d){a.textContent="Enter a new listing price.",r.focus();return}let p=parseFloat(d);if(!Number.isFinite(p)||p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",s.disabled=!0,s.textContent="Reducing\u2026",s.style.opacity="0.7",i&&(i.disabled=!0);try{await ap({oppId:t.oppId,locationId:t.locationId,newPrice:p,userId:M()}),Eo(),t.onSuccess()}catch(b){c.error("Reduce Price webhook failed",b),a.textContent=b instanceof Error?b.message:"Something went wrong. Try again.",s.disabled=!1,s.textContent="Reduce Price",s.style.opacity="1",i&&(i.disabled=!1)}})},sp=(t,e)=>{let o=document.createElement("button");return o.id=de,o.type="button",o.dataset.oppId=t,o.style.cssText=O,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
    <span style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.amber};
      box-shadow: 0 0 6px ${n.amber};
      flex-shrink: 0;
    "></span>
    <span class="ws-rp-label">Reduce Price and Alert Buyers</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=So();!r||!r.locationId||r.oppId!==t||ip({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),i=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,i&&(i.style.background=n.emerald,i.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=O,i&&(i.style.background=n.amber,i.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},lp=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],dp=async()=>{for(let t of lp)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},To=!1,Qr=async()=>{if(!To){To=!0;try{await cp()}finally{To=!1}}},cp=async()=>{let t=So();if(!t||!t.locationId){document.getElementById(de)?.remove(),document.getElementById(`${de}-wrap`)?.remove(),It();return}let e=document.getElementById(de);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Disposition"&&(e.remove(),document.getElementById(`${de}-wrap`)?.remove(),It());return}e&&(e.remove(),document.getElementById(`${de}-wrap`)?.remove());let o=await dp();if(!o){c.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await W();if(r!=="Disposition"){c.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=So();if(!a||a.oppId!==t.oppId)return;let i=sp(t.oppId,t.locationId),s=document.createElement("span");s.id=`${de}-wrap`,s.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted Reduce Price button on opp ${t.oppId}`),pp(t.oppId)},Lt=null,Xr=null,It=()=>{Lt?.disconnect(),Lt=null,Xr=null},pp=t=>{if(Lt&&Xr===t)return;It();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Xr=t,Lt=new MutationObserver(()=>{let o=So();if(!o||o.oppId!==t){It();return}let r=H();if(r!==null&&r!=="Disposition"){document.getElementById(de)?.remove(),document.getElementById(`${de}-wrap`)?.remove(),It();return}document.getElementById(de)||Qr()}),Lt.observe(e,{childList:!0,subtree:!0}))},Yr=null,Jr,bp=()=>{Yr||(Yr=new MutationObserver(()=>{Jr===void 0&&(Jr=window.setTimeout(()=>{Jr=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(de);t&&!e&&!To&&Qr()},300))}),Yr.observe(document.body,{childList:!0,subtree:!0}))},ci=()=>{bp(),Qr()};var Ze="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",Co="deals.reinvestos.com";var ce="ws-crm-edit-landing-button",mp=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,hp=/\/v2\/location\/([A-Za-z0-9]+)/,$o=()=>{let t=window.location.pathname,e=t.match(mp);if(!e)return null;let o=t.match(hp);return{oppId:e[1],locationId:o?o[1]:null}},up=(t,e)=>{let o=new URL(`https://${Co}/editor`);o.searchParams.set("loc",e),o.searchParams.set("opp",t),o.searchParams.set("k",Ze);let r=M();return r&&o.searchParams.set("user",r),o.toString()},vp=(t,e)=>{let o=document.createElement("button");return o.id=ce,o.type="button",o.dataset.oppId=t,o.style.cssText=O,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Landing Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=$o();if(!r||!r.locationId||r.oppId!==t)return;if(!Ze){c.warn("[edit-landing] editor session key not configured in this build");return}let a=up(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let i=o.querySelector(".ws-elp-label");if(i){let s=i.textContent;i.textContent="Opening editor\u2026",setTimeout(()=>{i.textContent==="Opening editor\u2026"&&(i.textContent=s)},2500)}}),o},_p=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],gp=async()=>{for(let t of _p)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Ao=!1,on=async()=>{if(!Ao){Ao=!0;try{await yp()}finally{Ao=!1}}},yp=async()=>{let t=$o();if(!t||!t.locationId){document.getElementById(ce)?.remove(),document.getElementById(`${ce}-wrap`)?.remove(),Ot();return}let e=document.getElementById(ce);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Disposition"&&(e.remove(),document.getElementById(`${ce}-wrap`)?.remove(),Ot());return}e&&(e.remove(),document.getElementById(`${ce}-wrap`)?.remove());let o=await gp();if(!o)return;let r=await W();if(r!=="Disposition"){c.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=$o();if(!a||a.oppId!==t.oppId)return;let i=vp(t.oppId,t.locationId),s=document.createElement("span");s.id=`${ce}-wrap`,s.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted Edit Landing Page button on opp ${t.oppId}`),fp(t.oppId)},Mt=null,tn=null,Ot=()=>{Mt?.disconnect(),Mt=null,tn=null},fp=t=>{if(Mt&&tn===t)return;Ot();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(tn=t,Mt=new MutationObserver(()=>{let o=$o();if(!o||o.oppId!==t){Ot();return}let r=H();if(r!==null&&r!=="Disposition"){document.getElementById(ce)?.remove(),document.getElementById(`${ce}-wrap`)?.remove(),Ot();return}document.getElementById(ce)||on()}),Mt.observe(e,{childList:!0,subtree:!0}))},Zr=null,en,xp=()=>{Zr||(Zr=new MutationObserver(()=>{en===void 0&&(en=window.setTimeout(()=>{en=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(ce);t&&!e&&!Ao&&on()},300))}),Zr.observe(document.body,{childList:!0,subtree:!0}))},pi=()=>{xp(),on()};var mi="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",et="ws-crm-publish-button",Dt="ws-crm-publish-wrap",Io="ws-crm-publish-dropdown",wp=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,kp=/\/v2\/location\/([A-Za-z0-9]+)/,an=()=>{let t=window.location.pathname,e=t.match(wp);if(!e)return null;let o=t.match(kp);return{oppId:e[1],locationId:o?o[1]:null}},Ep=async(t,e)=>{try{let o=await fetch(mi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,dry_run:!0,triggered_by_user_id:M()??null}),credentials:"omit"});return o.ok?await o.json():(c.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return c.warn("[publish] dry_run fetch failed:",o),null}},Tp=async(t,e)=>{let o=await fetch(mi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,triggered_by_user_id:M()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},Sp=(t,e)=>{if(!Ze){c.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${Co}/editor`);o.searchParams.set("loc",e),o.searchParams.set("opp",t),o.searchParams.set("k",Ze);let r=M();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},ge=()=>{document.getElementById(Io)?.remove()},bi=(t,e,o,r,a)=>{ge();let i=document.createElement("div");i.id=Io;let s=e.getBoundingClientRect();i.style.cssText=`
    position: fixed;
    top: ${s.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-s.right)}px;
    z-index: 999998;
    min-width: 300px;
    max-width: 420px;
    max-height: 70vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.md};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    padding: 14px 16px;
    font-family: ${u.sans};
  `;let l=t.length,d=t.filter(k=>k.filled).length,p=d===l,b=document.createElement("div");b.innerHTML=`
    <div style="
      font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${p?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${p?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${d} of ${l} ready</div>
  `,i.appendChild(b),t.forEach(k=>{let y=document.createElement("div");y.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${k.filled?n.bone:n.ash};
    `;let g=k.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;y.innerHTML=`${g}<span style="flex: 1;">${k.label}</span>`,i.appendChild(y)});let h=document.createElement("div");h.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let m=document.createElement("button");m.type="button",m.textContent="Open editor to finish \u2192",m.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${v.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,m.addEventListener("click",k=>{k.stopPropagation(),Sp(o,r)}),h.appendChild(m);let _=document.createElement("button");_.type="button",_.textContent="Re-check",_.title="Re-check after editing the page",_.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,_.addEventListener("click",k=>{k.stopPropagation(),ge(),a()}),h.appendChild(_),i.appendChild(h),document.body.appendChild(i);let x=k=>{let y=k.target;!i.contains(y)&&!e.contains(y)&&(ge(),document.removeEventListener("click",x))};window.setTimeout(()=>document.addEventListener("click",x),0)},Pe=(t,e)=>{let o=t.querySelector(".ws-pub-label"),r=t.querySelector(".ws-pub-dot"),a=t.querySelector(".ws-pub-chevron"),i="transparent",s=n.steel,l=n.bone,d=n.coolGray,p="Publish Deal",b="",h="pointer",m="1";switch(e.status){case"checking":s=n.steel,l=n.ash,p="Checking\u2026",h="wait",m="0.8";break;case"ready":i=n.emerald,s=n.emerald,l=n.obsidian,d=n.obsidian,p="Publish Deal";break;case"incomplete":{let _=e.checks?.filter(k=>k.filled).length??0,x=e.checks?.length??0;s=n.amber,l=n.amber,d=n.amber,p=`${_} of ${x} ready`,b="\u25BE";break}case"publishing":i=n.emerald,s=n.emerald,l=n.obsidian,d=n.obsidian,p="Publishing\u2026",h="wait",m="0.8";break;case"published":i="transparent",s=n.steel,l=n.ash,d=n.emerald,p="Deal Published",h="default",m="0.9";break;case"error":s=n.amber,l=n.amber,d=n.amber,p=e.message??"Try again";break}t.style.background=i,t.style.borderColor=s,t.style.color=l,t.style.cursor=h,t.style.opacity=m,r&&(r.style.background=d,r.style.boxShadow=e.status==="ready"||e.status==="published"?`0 0 6px ${d}`:""),o&&(o.textContent=p),a&&(a.textContent=b)},Cp=(t,e)=>{let o=document.createElement("button");o.id=et,o.type="button",o.dataset.oppId=t,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${K}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};Pe(o,r);let a=!1,i=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let h=await Ep(t,e);if(!h||!Array.isArray(h.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},Pe(o,r);return}r={status:h.published?"published":h.ready?"ready":"incomplete",checks:h.checks},Pe(o,r),document.getElementById(Io)&&r.checks&&bi(r.checks,o,t,e,()=>void i())}finally{a=!1}}},s=async()=>{r={status:"publishing",checks:r.checks},Pe(o,r),ge();try{let h=await Tp(t,e);if(h.ok&&h.published)r={status:"published"},Pe(o,r),c.info(`[publish] published opp ${t}`);else if(h.missing&&h.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},Pe(o,r);else throw new Error(h.error||"Publish failed")}catch(h){let m=h instanceof Error?h.message:"Publish failed";c.error("[publish] publish failed",h),r={status:"error",message:m.length>28?"Error \u2014 try again":m},Pe(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":s();break;case"incomplete":{document.getElementById(Io)?ge():r.checks&&bi(r.checks,o,t,e,()=>void i());break}case"error":i();break}}),i();let l,d=Date.now(),p=8e3,b=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(b){let h=new MutationObserver(()=>{if(l!==void 0||a||r.status==="publishing"||r.status==="published")return;let _=Math.max(1500,p-(Date.now()-d));l=window.setTimeout(()=>{l=void 0,d=Date.now(),i()},_)});h.observe(b,{childList:!0,subtree:!0});let m=window.setInterval(()=>{document.body.contains(o)||(h.disconnect(),l!==void 0&&window.clearTimeout(l),window.clearInterval(m))},5e3)}return o},Ap=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],$p=async()=>{for(let t of Ap)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Lo=!1,ln=async()=>{if(!Lo){Lo=!0;try{await Lp()}finally{Lo=!1}}},Lp=async()=>{let t=an();if(!t||!t.locationId){document.getElementById(et)?.remove(),document.getElementById(Dt)?.remove(),ge(),Pt();return}let e=document.getElementById(et);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Disposition"&&(e.remove(),document.getElementById(Dt)?.remove(),ge(),Pt());return}e&&(e.remove(),document.getElementById(Dt)?.remove(),ge());let o=await $p();if(!o)return;let r=await W();if(r!=="Disposition"){c.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=an();if(!a||a.oppId!==t.oppId||!a.locationId)return;let i=Cp(t.oppId,a.locationId),s=document.createElement("span");s.id=Dt,s.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",s.appendChild(i),U(o).appendChild(s),c.debug(`Mounted Publish button on opp ${t.oppId}`),Ip(t.oppId)},Ht=null,sn=null,Pt=()=>{Ht?.disconnect(),Ht=null,sn=null},Ip=t=>{if(Ht&&sn===t)return;Pt();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(sn=t,Ht=new MutationObserver(()=>{let o=an();if(!o||o.oppId!==t){Pt();return}let r=H();if(r!==null&&r!=="Disposition"){document.getElementById(et)?.remove(),document.getElementById(Dt)?.remove(),ge(),Pt();return}document.getElementById(et)||ln()}),Ht.observe(e,{childList:!0,subtree:!0}))},rn=null,nn,Mp=()=>{rn||(rn=new MutationObserver(()=>{nn===void 0&&(nn=window.setTimeout(()=>{nn=void 0,!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description")&&!document.getElementById(et)&&!Lo&&ln()},300))}),rn.observe(document.body,{childList:!0,subtree:!0}))},hi=()=>{Mp(),ln()};var ui="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",vi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var Op=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],_i=t=>`ws-crm-map-links-${t}`,Mo=t=>{let e=document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']"),o=t.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let i=a.querySelector("input, textarea");if(i&&(i.value||"").trim())return i.value.trim()}return""},gi=t=>{let e=Mo(t.addr),o=Mo(t.city),r=Mo(t.state),a=Mo(t.zip),i;return o&&e&&e.toLowerCase().includes(o.toLowerCase())?i=e:i=[e,o,r,a].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},Dp=t=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`,Hp=t=>`https://www.zillow.com/homes/${t.replace(/\s+/g,"-")}_rb`,Pp=(t,e)=>{let{full:o,hasAny:r}=gi(t);r&&window.open(e(o),"_blank","noopener,noreferrer")},Rp=t=>{let e=document.createElement("span");e.id=_i(t.key),e.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",e.appendChild(o);let r=(a,i,s)=>{let l=document.createElement("img");return l.src=a,l.title=i,l.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",l.addEventListener("mouseenter",()=>{l.style.transform="scale(1.12)"}),l.addEventListener("mouseleave",()=>{l.style.transform="scale(1)"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),Pp(t,s)}),l};return e.appendChild(r(ui,"Open in Google Maps",Dp)),e.appendChild(r(vi,"Search on Zillow",Hp)),e},Bp=t=>{let e=document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']"),o=t.addr.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},yi=()=>{for(let t of Op){if(document.getElementById(_i(t.key)))continue;let{hasAny:e}=gi(t);if(!e)continue;let o=Bp(t);o&&(o.style.display="flex",o.style.alignItems="center",o.style.width="100%",o.appendChild(Rp(t)),c.debug(`[map-links] injected on "${t.addr}"`))}},dn=null,cn,Fp=()=>{dn||(dn=new MutationObserver(()=>{cn===void 0&&(cn=window.setTimeout(()=>{cn=void 0;try{yi()}catch(t){c.warn("[map-links] ensureInjected failed",t)}},300))}),dn.observe(document.body,{childList:!0,subtree:!0}))},fi=()=>{Fp(),yi()};var xi="ws-crm-hide-launchpad",wi=/\/launchpad\/?$/,pn=()=>{if(!me()){if(!document.getElementById(xi)){let t=document.createElement("style");t.id=xi,t.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(t),c.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(wi.test(location.pathname)){let t=location.pathname.replace(wi,"/dashboard")+location.search;c.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${t}`),location.replace(t)}}};var Np=[{label:"Buy-Box Entries"},{label:"Memberships"}],ki=t=>{t.size!==0&&document.querySelectorAll(".nav-title").forEach(e=>{let o=(e.textContent||"").trim().toLowerCase();if(!t.has(o))return;let r=e.closest("a")||e.closest("li")||e.parentElement;r&&r.style.display!=="none"&&(r.style.setProperty("display","none","important"),c.info(`[hide-nav-items] hid "${e.textContent?.trim()}"`))})},bn=()=>{let t=me(),e=new Set(Np.filter(o=>o.agencyToo||!t).map(o=>o.label.trim().toLowerCase()));if(e.size!==0){ki(e);for(let o of[150,500,1200,2500])setTimeout(()=>ki(e),o)}};var zp=[{from:"Payments",to:"Contracts"}],Gp=".nav-title, .topmenu-navtitle",Ei=()=>{document.querySelectorAll(Gp).forEach(t=>{let e=(t.textContent||"").trim(),o=zp.find(r=>r.from===e);o&&(t.textContent=o.to,c.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},mn=()=>{Ei();for(let t of[150,500,1200,2500])setTimeout(Ei,t)};var Ti="/payments/proposals-estimates",qp=/\/payments\/invoices\/?$/,Up=/\/payments\//,Vp='#sb_payments, a[meta="payments"]',Ci=(t=0)=>{if(t>25)return;let e=location.pathname;if(!e.includes(Ti)&&!(t>3&&!Up.test(e))){if(qp.test(e)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(Ti));if(o){c.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>Ci(t+1),120)}},Si=!1,Wp=()=>{Si||(Si=!0,document.addEventListener("click",t=>{t.target?.closest?.(Vp)&&setTimeout(()=>Ci(),80)},!0),c.info("[contracts-section] section-entry redirect armed"))},hn=()=>{Wp()};var Ai=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],$i="ws-crm-hide-topmenu-tabs",un=()=>{if(document.getElementById($i))return;let t=Ai.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),e=document.createElement("style");e.id=$i,e.textContent=`${t}{display:none !important;}`,(document.head||document.documentElement).appendChild(e),c.info(`[hide-topmenu-tabs] hid ${Ai.length} top tabs`)};var Mi="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",Ee="ws-crm-send-to-closing-office-button",Re="ws-crm-send-to-title-co-wrap",Ho="ws-crm-stc-dropdown",jp=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Kp=/\/v2\/location\/([A-Za-z0-9]+)/,Po=()=>{let t=window.location.pathname,e=t.match(jp);if(!e)return null;let o=t.match(Kp);return{oppId:e[1],locationId:o?o[1]:null}},Yp=5*60*1e3,Oi=t=>`ws-crm-stc-cache:${t}`,Jp=t=>{try{let e=window.localStorage.getItem(Oi(t));if(!e)return null;let o=JSON.parse(e);return!o.ts||Date.now()-o.ts>Yp||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},Xp=(t,e)=>{try{window.localStorage.setItem(Oi(t),JSON.stringify(e))}catch{}},Qp=async(t,e)=>{try{let o=await fetch(Mi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,tc_opp_id:t,triggered_by_user_id:M()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(c.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return c.warn("[stc] dry_run fetch failed:",o),null}},Zp=async(t,e,o)=>{let r=await fetch(Mi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,tc_opp_id:t,triggered_by_user_id:M()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},eb=t=>{let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!e)return!1;let o=e.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===t)return a.click(),!0;let r=e.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===t)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return c.warn(`[stc] folder tab not found for "${t}"`),!1},Li=t=>{let e=document.getElementById(t);if(!e){c.warn(`[stc] field ${t} not found in DOM \u2014 can't scroll to it`);return}e.scrollIntoView({behavior:"smooth",block:"center"});let o=e.style.boxShadow,r=e.style.transition;e.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",e.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{e.style.boxShadow=o,window.setTimeout(()=>{e.style.transition=r},400)},2800)},tb=(t,e)=>{if(e&&eb(e)){window.setTimeout(()=>Li(t),300);return}Li(t)},pe=()=>{document.getElementById(Ho)?.remove()},Oo=(t,e,o)=>{pe();let r=document.createElement("div");r.id=Ho;let a=o.getBoundingClientRect();r.style.cssText=`
    position: fixed;
    top: ${a.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-a.right)}px;
    z-index: 999998;
    min-width: 340px;
    max-width: 460px;
    max-height: 70vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.md};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    padding: 14px 16px;
    font-family: ${u.sans};
  `;let i=t.length,s=t.filter(_=>_.filled).length,l=s===i,d=document.createElement("div");d.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${l?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${l?"Ready to send":"Required fields"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${s} of ${i} ready</div>
    ${e?`<div style="
            font-size: 11px;
            color: ${n.amber};
            margin: 6px 0 4px;
            padding: 6px 8px;
            background: ${n.slate};
            border-radius: ${v.sm};
            border-left: 2px solid ${n.amber};
          ">Previously sent: ${new Date(e).toLocaleString()}.
          Clicking Send again will re-send.</div>`:""}
  `,r.appendChild(d);let p=["TC","ACQ","MT","DISPO","Property"],b={};t.forEach(_=>{b[_.group]||(b[_.group]=[]),b[_.group].push(_)});let h=[...p.filter(_=>b[_]),...Object.keys(b).filter(_=>!p.includes(_))];for(let _ of h){let x=b[_],k=document.createElement("div");k.style.cssText="margin-top: 12px;";let y=document.createElement("div");y.style.cssText=`
      font-family: ${u.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,y.textContent=_,k.appendChild(y),x.forEach(g=>{let w=document.createElement("div"),S=!g.filled&&g.navigable&&g.field_id;w.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${v.sm};
        font-size: 12px;
        color: ${g.filled?n.bone:n.ash};
        ${S?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,S&&(w.addEventListener("mouseenter",()=>{w.style.background=n.slate}),w.addEventListener("mouseleave",()=>{w.style.background="transparent"}),w.addEventListener("click",f=>{f.stopPropagation(),g.field_id&&(tb(g.field_id,g.folder),pe())}));let C=g.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,E=S?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";w.innerHTML=`${C}<span style="flex: 1;">${g.label}</span>${E}`,k.appendChild(w)}),r.appendChild(k)}document.body.appendChild(r);let m=_=>{let x=_.target;!r.contains(x)&&!o.contains(x)&&(pe(),document.removeEventListener("click",m))};window.setTimeout(()=>document.addEventListener("click",m),0)},he=(t,e)=>{let o=t.querySelector(".ws-stc-label"),r=t.querySelector(".ws-stc-dot"),a=t.querySelector(".ws-stc-chevron"),i,s,l=n.bone,d,p="Send to Closing Office",b="",h="pointer",m="1";switch(e.status){case"checking":i="transparent",s=n.steel,l=n.ash,d=n.coolGray,p="Checking\u2026",h="wait",m="0.8";break;case"ready":i=n.emerald,s=n.emerald,l="#0a0e14",d="#0a0e14",p=e.previouslySentAt?"Re-send to Closing Office":"Send to Closing Office";break;case"incomplete":{let _=e.checks?.filter(k=>k.filled).length??0,x=e.checks?.length??0;i="transparent",s=n.amber,l=n.amber,d=n.amber,p=`${_} of ${x} Fields Ready`;break}case"sending":i=n.emerald,s=n.emerald,l="#0a0e14",d="#0a0e14",p="Sending\u2026",h="wait",m="0.8";break;case"sent":i=n.emerald,s=n.emerald,l="#0a0e14",d="#0a0e14",p="Sent \u2713";break;case"error":i="transparent",s=n.amber,l=n.amber,d=n.amber,p=e.message??"Try again";break}t.style.background=i,t.style.borderColor=s,t.style.color=l,t.style.cursor=h,t.style.opacity=m,r&&(r.style.background=d,r.style.boxShadow=e.status==="ready"||e.status==="sent"?`0 0 6px ${d}`:""),o&&(o.textContent=p),a&&(a.textContent=b)},ob=(t,e)=>{let o=document.createElement("button");o.id=Ee,o.type="button",o.dataset.oppId=t;let r=Jp(t),a=r?{status:r.checks.every(y=>y.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"};o.style.cssText=`
    ${O}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-stc-dot" style="
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-stc-label">Checking\u2026</span>
    <span class="ws-stc-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `,he(o,a);let i=new Set,s=async()=>{if(a.status==="sending")return;let y=await Qp(t,e);if(!y){a={status:"error",message:"Check failed \u2014 click to retry"},he(o,a);return}if(y.rate_limited){_=Date.now()+m,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},he(o,a),c.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(_).toLocaleTimeString()}`);return}if(!Array.isArray(y.checks)||y.checks.length===0){a={status:"error",message:y.error||"Check failed \u2014 click to retry"},he(o,a),c.warn("[stc] dry_run returned no checks:",y);return}let g=y.pipeline_name;if(g&&g!=="Transaction Coordination"){c.debug(`[stc] dry_run reports pipeline="${g}" (not TC) \u2014 retracting button + caching`),Ro.add(t),document.getElementById(Ee)?.remove(),document.getElementById(Re)?.remove(),pe(),Bt();return}let w=y.checks;if(a.checks&&a.checks.length===y.checks.length){let C=new Set;w=y.checks.map((E,f)=>a.checks[f]?.filled&&!E.filled?i.has(E.label)?E:(C.add(E.label),{...E,filled:!0}):E),i=C}else i=new Set;a={status:w.every(C=>C.filled)?"ready":"incomplete",checks:w,previouslySentAt:y.previously_sent_at??null},Xp(t,{checks:w,previously_sent_at:y.previously_sent_at??null,pipeline_name:g,ts:Date.now()}),he(o,a),document.getElementById(Ho)&&Oo(w,y.previously_sent_at,o)},l=async()=>{let y=!!a.previouslySentAt;a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},he(o,a),pe();try{let g=await Zp(t,e,y);if(g.needs_confirm){a={status:"ready",checks:g.checks,previouslySentAt:g.previously_sent_at},he(o,a),g.checks&&Oo(g.checks,g.previously_sent_at,o);return}if(g.ok){a={status:"sent",checks:g.checks,previouslySentAt:new Date().toISOString()},he(o,a),window.setTimeout(()=>{x()},3500);return}a={status:"error",checks:g.checks,message:g.error||"Validation failed"},he(o,a),g.checks&&Oo(g.checks,g.previously_sent_at,o)}catch(g){c.error("[stc] send failed:",g),a={status:"error",message:"Network error \u2014 click to retry"},he(o,a)}};o.addEventListener("click",()=>{switch(a.status){case"ready":l();break;case"incomplete":{document.getElementById(Ho)?pe():a.checks&&Oo(a.checks,a.previouslySentAt,o);break}case"error":case"sent":x();break}});let d,p=!1,b=Date.now(),h=1e4,m=5*60*1e3,_=0,x=async()=>{if(!p){if(Date.now()<_){c.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(_).toLocaleTimeString()}`);return}p=!0,b=Date.now();try{await s()}finally{p=!1}}};x();let k=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(k){let y=new MutationObserver(()=>{if(d!==void 0||p)return;let w=Date.now()-b,S=Math.max(1500,h-w);d=window.setTimeout(()=>{d=void 0,a.status!=="sending"&&x()},S)});y.observe(k,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let g=window.setInterval(()=>{document.body.contains(o)||(y.disconnect(),d!==void 0&&window.clearTimeout(d),window.clearInterval(g))},5e3)}return o},rb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],nb=async()=>{for(let t of rb)try{let e=await I(t,{timeoutMs:1500});if(e)return c.debug(`[send-to-title-co] mount target: ${t}`),e}catch{}return c.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},Ro=new Set,Ii=null,ab=t=>{t&&t!==Ii&&(Ro.clear(),Ii=t)},Do=!1,yn=async()=>{if(Do){c.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}Do=!0;try{await ib()}catch(t){c.error("[stc] ensureMountedImpl threw:",t)}finally{Do=!1}},ib=async()=>{c.debug("[stc] mount:01 ensureMountedImpl entered");let t=Po();if(!t||!t.locationId){c.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(t)}`),document.getElementById(Ee)?.remove(),document.getElementById(Re)?.remove(),pe();return}if(c.debug(`[stc] mount:02 ctx ok \u2014 oppId=${t.oppId} locId=${t.locationId}`),ab(t.oppId),Ro.has(t.oppId)){c.debug(`[stc] mount:02-BAIL opp ${t.oppId} previously confirmed non-TC this session`),document.getElementById(Ee)?.remove(),document.getElementById(Re)?.remove(),pe();return}let e=document.getElementById(Ee);if(e&&e.dataset.oppId===t.oppId){c.debug("[stc] mount:03-SKIP existing button for same opp");let l=H();l!==null&&l!=="Transaction Coordination"&&(e.remove(),document.getElementById(Re)?.remove(),pe(),Bt());return}e&&(c.debug("[stc] mount:03 removing stale existing button"),e.remove(),document.getElementById(Re)?.remove(),pe()),c.debug("[stc] mount:04 calling findMountTarget");let o=await nb();if(!o){c.debug("[stc] mount:04-BAIL findMountTarget returned null");return}c.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=H();if(r!==null&&r!=="Transaction Coordination"){c.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=Po();if(!a||a.oppId!==t.oppId||!a.locationId){c.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${t.oppId} now=${a?.oppId}`);return}c.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let i=ob(t.oppId,a.locationId),s=document.createElement("span");s.id=Re,s.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,s.appendChild(i),U(o).appendChild(s),c.debug(`[stc] mount:07-OK Mounted on opp ${t.oppId}, inDoc=${document.body.contains(i)}`),sb(t.oppId)},Rt=null,gn=null,Bt=()=>{Rt?.disconnect(),Rt=null,gn=null},sb=t=>{if(Rt&&gn===t)return;Bt();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(gn=t,Rt=new MutationObserver(()=>{let o=Po();if(!o||o.oppId!==t){Bt();return}let r=H();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(Ee)?.remove(),document.getElementById(Re)?.remove(),pe(),Bt();return}document.getElementById(Ee)||yn()}),Rt.observe(e,{childList:!0,subtree:!0}))},vn=null,_n,lb=()=>{vn||(vn=new MutationObserver(()=>{_n===void 0&&(_n=window.setTimeout(()=>{_n=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(Ee);if(t&&!e&&!Do){let o=Po();if(o&&Ro.has(o.oppId))return;yn()}},300))}),vn.observe(document.body,{childList:!0,subtree:!0}))},Di=()=>{lb(),yn()};var wn="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",db=`${wn}/tc/welcome-call-prefill`,cb=`${wn}/tc/welcome-call-save`,pb=`${wn}/tc/order-lockbox`,Ft="ws-crm-welcome-call-overlay",bb=["Regular Contract","Subject To","Seller Finance","Novation"],mb=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],hb=["Gas","Electric","Propane","Oil"],ub=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],vb=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],Te=["Yes","No"],_b=["Yes","No","Unknown"],gb=["Professional Photographer","Seller","Tenant"],yb=["Month-to-Month","Annual"],Hi=["Current","Behind"],fb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ue=t=>(t==null?"":String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Fo=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${u.sans};font-size:13px;margin-top:4px;`,Bi="margin-bottom:12px;",Fi=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,xb=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,Pi=t=>String(t??"").toLowerCase().replace(/[^a-z0-9]/g,""),j=(t,e,o)=>{let r=Pi(o);return`<select id="${t}" style="${Fo}"><option value=""></option>${e.map(a=>`<option ${r!==""&&Pi(a)===r?"selected":""}>${ue(a)}</option>`).join("")}</select>`},Z=(t,e,o="")=>`<input id="${t}" type="text" value="${ue(e)}" placeholder="${ue(o)}" style="${Fo}">`,wb=(t,e)=>`<textarea id="${t}" rows="3" style="${Fo}resize:vertical;">${ue(e)}</textarea>`,kb=(t,e)=>`<input id="${t}" type="date" value="${ue(e)}" style="${Fo}">`,D=(t,e)=>`<div style="${Bi}"><label style="${Fi}">${ue(t)}</label>${e}</div>`,fn=(t,e)=>{let o=Array.isArray(e)?e:[];return`<div style="margin-top:4px;">${fb.map(r=>`<label style="${xb}"><input type="checkbox" data-grp="${t}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},ye=t=>`<div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${ue(t)}</div>`,tt=()=>{document.getElementById(Ft)?.remove()},Be=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${e==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Eb=t=>{let e=t.tenant||{};return`
    ${ye("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${ue(t.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${ue(t.deal_address)||"(no address on file)"}</div>

    ${ye("Contract")}
    ${D("Type of Contract",j("wc-contract_type",bb,t.contract_type))}

    ${ye("Property")}
    ${D("Property Type",j("wc-property_type",ub,t.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${D("Beds",Z("wc-beds",t.beds))}</div>
      <div style="flex:1;">${D("Baths",Z("wc-baths",t.baths))}</div>
      <div style="flex:1;">${D("Sq Ft",Z("wc-sqft",t.sqft))}</div>
    </div>
    ${D("Utilities",j("wc-utilities",mb,t.utilities))}
    ${D("Heat Source",j("wc-heat_source",hb,t.heat_source))}

    ${ye("Liens & Permits")}
    ${D("Is there a mortgage?",j("wc-has_mortgage",Te,t.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${D("Mortgage payment status",j("wc-mortgage_payment_status",Hi,t.mortgage_payment_status))}</div>
    ${D("Any other liens? (back taxes, code violations, HELOC, etc.)",j("wc-has_other_liens",Te,t.has_other_liens))}
    ${D("Any open or expired permits?",j("wc-has_permit_issues",Te,t.has_permit_issues))}
    ${D("Is the property in probate?",j("wc-in_probate",Te,t.in_probate))}

    ${ye("Occupancy")}
    ${D("Property occupancy",j("wc-occupancy",vb,t.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("First name",Z("wc-tenant_first_name",e.first_name))}</div>
        <div style="flex:1;">${D("Last name",Z("wc-tenant_last_name",e.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("Phone",Z("wc-tenant_phone",e.phone))}</div>
        <div style="flex:1;">${D("Email",Z("wc-tenant_email",e.email))}</div>
      </div>
      ${D("Lease type",j("wc-tenant_lease_type",yb,e.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("Monthly rent",Z("wc-tenant_monthly_rent",e.monthly_rent))}</div>
        <div style="flex:1;">${D("Rent due day",Z("wc-tenant_rent_due_day",e.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("Rent status",j("wc-tenant_rent_status",Hi,e.rent_status))}</div>
        <div style="flex:1;">${D("Last rent paid",kb("wc-tenant_last_rent_paid",e.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("Lease on hand?",j("wc-tenant_lease_on_hand",Te,e.lease_on_hand))}</div>
        <div style="flex:1;">${D("Security deposit",Z("wc-tenant_security_deposit",e.security_deposit))}</div>
      </div>
      ${D("Selling with tenant in place?",j("wc-selling_with_tenant",Te,t.selling_with_tenant))}
    </div>

    ${ye("HOA")}
    ${D("Part of an HOA?",j("wc-in_hoa",Te,t.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${D("HOA monthly fee",Z("wc-hoa_monthly_fee",t.hoa_monthly_fee))}${D("HOA rental restriction?",j("wc-hoa_rental_restriction",_b,t.hoa_rental_restriction))}</div>

    ${ye("Photos & Access")}
    ${D("Who is providing photos?",j("wc-photos_provided_by",gb,t.photos_provided_by))}
    <div style="${Bi}">
      <label style="${Fi}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${fn("photos_avail_mornings",t.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${fn("photos_avail_afternoons",t.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${fn("photos_avail_evenings",t.photos_avail_evenings)}
    </div>

    ${ye("Lockbox")}
    ${D("Lockbox needed?",j("wc-lockbox_needed",Te,t.lockbox_needed))}
    ${D("Lockbox code (agree with the seller; recorded on the property for future use)",Z("wc-lockbox_code",t.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${D("Recipient name",Z("wc-lockbox_recipient_name",t.lockbox_recipient_name))}</div>
        <div style="flex:1;">${D("Recipient phone",Z("wc-lockbox_recipient_phone",t.lockbox_recipient_phone))}</div>
      </div>
      ${D("Mailing address (if different from property)",Z("wc-lockbox_mailing_address",t.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${v.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${u.sans};cursor:pointer;flex-shrink:0;">${Bo(t).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${Bo(t).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${Bo(t).on?n.emerald:n.amber};flex-shrink:0;"></span>${Bo(t).text}</span>
      </div>
    </div>

    ${ye("Notes")}
    ${D("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",wb("wc-welcome_call_notes",t.welcome_call_notes))}
  `},A=t=>{let e=document.getElementById(t);return e?(e.value||"").trim():""},xn=t=>Array.from(document.querySelectorAll(`input[data-grp="${t}"]:checked`)).map(e=>e.value),Ri=()=>{let t=(e,o)=>{let r=document.getElementById(e);r&&(r.style.display=o?"block":"none")};t("wc-mortgage-detail",A("wc-has_mortgage")==="Yes"),t("wc-hoa-detail",A("wc-in_hoa")==="Yes"),t("wc-lockbox-detail",A("wc-lockbox_needed")==="Yes"),t("wc-tenant-block",A("wc-occupancy")==="Tenant Occupied")},Bo=t=>{let e=t,o=String(e.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=e.lockbox_order_date?ue(e.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},Tb=t=>({tenant_id:t.tenant_id,opp_id:t.opp_id,contact_id:t.contact_id,property_record_id:t.property_record_id,deal_address:t.deal_address,contract_type:A("wc-contract_type"),property_type:A("wc-property_type"),beds:A("wc-beds"),baths:A("wc-baths"),sqft:A("wc-sqft"),utilities:A("wc-utilities"),heat_source:A("wc-heat_source"),has_mortgage:A("wc-has_mortgage"),mortgage_payment_status:A("wc-mortgage_payment_status"),has_other_liens:A("wc-has_other_liens"),has_permit_issues:A("wc-has_permit_issues"),in_probate:A("wc-in_probate"),occupancy:A("wc-occupancy"),selling_with_tenant:A("wc-selling_with_tenant"),in_hoa:A("wc-in_hoa"),hoa_rental_restriction:A("wc-hoa_rental_restriction"),hoa_monthly_fee:A("wc-hoa_monthly_fee"),photos_provided_by:A("wc-photos_provided_by"),photos_avail_mornings:xn("photos_avail_mornings"),photos_avail_afternoons:xn("photos_avail_afternoons"),photos_avail_evenings:xn("photos_avail_evenings"),lockbox_needed:A("wc-lockbox_needed"),lockbox_code:A("wc-lockbox_code"),lockbox_recipient_name:A("wc-lockbox_recipient_name"),lockbox_recipient_phone:A("wc-lockbox_recipient_phone"),lockbox_mailing_address:A("wc-lockbox_mailing_address"),welcome_call_notes:A("wc-welcome_call_notes"),tenant:A("wc-occupancy")==="Tenant Occupied"?{first_name:A("wc-tenant_first_name"),last_name:A("wc-tenant_last_name"),phone:A("wc-tenant_phone"),email:A("wc-tenant_email"),lease_type:A("wc-tenant_lease_type"),monthly_rent:A("wc-tenant_monthly_rent"),rent_due_day:A("wc-tenant_rent_due_day"),rent_status:A("wc-tenant_rent_status"),last_rent_paid:A("wc-tenant_last_rent_paid"),lease_on_hand:A("wc-tenant_lease_on_hand"),security_deposit:A("wc-tenant_security_deposit")}:void 0}),Sb=t=>{tt();let e=document.createElement("div");e.id=Ft,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${u.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${Ft} input[type="date"]::-webkit-calendar-picker-indicator,#${Ft} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${v.lg} ${v.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${Eb(t)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${v.lg} ${v.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${K}">Complete Welcome Call</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",i=>{i.target===e&&tt()}),document.getElementById("wc-close")?.addEventListener("click",tt),document.getElementById("wc-cancel")?.addEventListener("click",tt),["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(i=>{document.getElementById(i)?.addEventListener("change",Ri)}),Ri();let r=document.getElementById("wc-save");r?.addEventListener("click",async()=>{if(!A("wc-occupancy")){Be("Set the property occupancy before completing.","err");return}r.textContent="Saving\u2026",r.style.opacity="0.8",r.disabled=!0;try{(await fetch(cb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Tb(t)),credentials:"omit"})).ok?(tt(),Be("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(r.textContent="Complete Welcome Call",r.style.opacity="1",r.disabled=!1,Be("Save failed \u2014 try again.","err"))}catch(i){c.warn("[welcome-call] save failed:",i),r.textContent="Complete Welcome Call",r.style.opacity="1",r.disabled=!1,Be("Couldn't reach the save handler. Try again.","err")}});let a=document.getElementById("wc-order-lockbox");a?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let i=document.getElementById("wc-lockbox-status");a.disabled=!0,a.textContent="Ordering\u2026";try{(await fetch(pb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenant_id,opp_id:t.opp_id,contact_id:t.contact_id,property_record_id:t.property_record_id,deal_address:t.deal_address,ship_to:A("wc-lockbox_mailing_address")||t.deal_address||"",recipient_name:A("wc-lockbox_recipient_name"),recipient_phone:A("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"})).ok?(a.textContent="Re-order Lockbox",a.disabled=!1,i&&(i.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,i.style.color=n.emerald),Be("Lockbox order sent to ops \u2713")):(a.textContent="Order Lockbox",a.disabled=!1,Be("Lockbox order failed \u2014 try again.","err"))}catch(s){c.warn("[welcome-call] order lockbox failed:",s),a.textContent="Order Lockbox",a.disabled=!1,Be("Couldn't reach the lockbox handler. Try again.","err")}})},Ni=async(t,e)=>{tt();let o=document.createElement("div");o.id=Ft,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${u.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:t,tenant_id:e};try{let a=await fetch(`${db}?tc_opp_id=${encodeURIComponent(t)}&tenant_id=${encodeURIComponent(e)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let i=await a.json();r={...i,opp_id:i.opp_id||t,tenant_id:e}}else c.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){c.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=e,Sb(r)};var Ln="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Cb=`${Ln}/tc/confirm-photo-appointment`,Ab=`${Ln}/tc/order-lockbox`,$b=`${Ln}/tc/welcome-call-prefill`,Cn="ws-crm-opp-action-bar",Gi="ws-crm-opp-overflow",qi="ws-crm-opp-action-menu",An="ws-crm-opp-action-popover",Ui="ws-crm-reorder-lockbox-modal",Vi=".hr-card.hr-modal.crm-opportunities-modal",Lb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Ib=/\/v2\/location\/([A-Za-z0-9]+)/,Wi="Welcome Call Needed",In="Scheduling Photos",ji="Photos Scheduled",Mb=[Wi,In,ji,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],Ki=()=>{let t=window.location.pathname,e=t.match(Lb);if(!e)return null;let o=t.match(Ib);return o?{oppId:e[1],locationId:o[1]}:null},Ob=()=>{let t=document.querySelector(Vi);if(!t)return null;let e=t.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of e){let r=o.textContent?.trim()??"";if(Mb.includes(r))return r}return null},Ce=()=>{document.getElementById(qi)?.remove(),document.getElementById(An)?.remove(),document.getElementById(Ui)?.remove()},kn=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Se=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${v.md};
    background: ${n.graphite};
    border: 1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${e==="ok"?n.emerald:n.crimson};
    font-family: ${u.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Db=t=>{Ni(t.oppId,t.locationId)},Hb=async(t,e,o)=>(await fetch(Ab,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,opp_id:t.oppId,contact_id:e.contact_id||"",property_record_id:e.property_record_id||"",deal_address:e.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"})).ok,Pb=(t,e)=>{Ce();let o=document.createElement("div");o.id=Ui,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,i=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,s=e.lockbox_mailing_address||e.deal_address||"";r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${i}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${kn(e.lockbox_recipient_name)}" />
    <label style="${i}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${kn(e.lockbox_recipient_phone)}" />
    <label style="${i}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${kn(s)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${K}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let l=()=>o.remove();o.addEventListener("click",p=>{p.target===o&&l()}),document.getElementById("wsrl-cancel")?.addEventListener("click",l);let d=document.getElementById("wsrl-submit");d?.addEventListener("click",async()=>{let p=document.getElementById("wsrl-name")?.value.trim()||"",b=document.getElementById("wsrl-phone")?.value.trim()||"",h=document.getElementById("wsrl-address")?.value.trim()||"";if(!p||!h){Se("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){d.disabled=!0,d.textContent="Ordering\u2026";try{await Hb(t,e,{recipient_name:p,recipient_phone:b,ship_to:h})?(l(),Se("Lockbox re-order sent to ops \u2713")):(d.disabled=!1,d.textContent="Order Lockbox",Se("Re-order failed \u2014 try again.","err"))}catch(m){c.warn("[action-bar] reorder lockbox failed:",m),d.disabled=!1,d.textContent="Order Lockbox",Se("Couldn't reach the lockbox handler. Try again.","err")}}})},Yi=async t=>{Ce();let e={};try{e=await fetch(`${$b}?tc_opp_id=${encodeURIComponent(t.oppId)}&tenant_id=${encodeURIComponent(t.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}Pb(t,e)},Rb=(t,e)=>{Ce();let o=document.createElement("div");o.id=An;let r=e.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `,o.innerHTML=`
    <style>#${An} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${K} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),i=o.querySelector("#wsap-vendor"),s=o.querySelector("#wsap-confirm");s?.addEventListener("click",async()=>{if(!a?.value){Se("Pick the booked date and time first.","err");return}s.textContent="Booking\u2026",s.style.opacity="0.8";try{(await fetch(Cb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,opp_id:t.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:i?.value?.trim()||null}),credentials:"omit"})).ok?(Ce(),Se("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(s.textContent="Confirm & advance",s.style.opacity="1",Se("Booking failed \u2014 try again.","err"))}catch(d){c.warn("[action-bar] confirm photo failed:",d),s.textContent="Confirm & advance",s.style.opacity="1",Se("Couldn't reach the booking handler. Try again.","err")}});let l=d=>{let p=d.target;!o.contains(p)&&!e.contains(p)&&(Ce(),document.removeEventListener("click",l))};window.setTimeout(()=>document.addEventListener("click",l),0)},Bb=(t,e)=>{Ce();let o=document.createElement("div");o.id=qi;let r=e.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `;for(let i of t){let s=document.createElement("div");s.textContent=i.label,s.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${v.sm};cursor:pointer;`,s.addEventListener("mouseenter",()=>s.style.background=n.steel),s.addEventListener("mouseleave",()=>s.style.background="transparent"),s.addEventListener("click",l=>{l.stopPropagation(),i.onClick()}),o.appendChild(s)}document.body.appendChild(o);let a=i=>{let s=i.target;!o.contains(s)&&!e.contains(s)&&(Ce(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},zo=(t,e)=>{let o=document.createElement("button");return o.type="button",e==="primary"?o.style.cssText=K:o.style.cssText=O,o.textContent=t,o},Fb=()=>{let t=zo("\u22EE","ghost");return t.style.lineHeight="1",t},Nb=(t,e)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",e===Wi){let r=zo("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>Db(t)),o.appendChild(r),o}if(e===In){let r=zo("Confirm Photos","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,r.addEventListener("click",()=>Rb(t,r)),o.appendChild(r),o}if(e===ji){let r=zo("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void Yi(t)),o.appendChild(r),o}return null},zb=(t,e)=>{let o=[];if(e===In&&(o=[{label:"Re-order Lockbox",onClick:()=>void Yi(t)}]),!o.length)return null;let r=document.createElement("span");r.id=Gi,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=Fb();return a.addEventListener("click",i=>{i.stopPropagation(),Bb(o,a)}),r.appendChild(a),r},Gb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],qb=async()=>{for(let t of Gb)try{let e=await I(t,{timeoutMs:1200});if(e)return e}catch{}return null},No=()=>{document.getElementById(Cn)?.remove(),document.getElementById(Gi)?.remove(),Ce()},Go=!1,Mn=async()=>{if(!Go){Go=!0;try{let t=Ki();if(!t){No();return}let e=H();if(e===null)return;if(e!=="Transaction Coordination"){No();return}let o=Ob(),r=document.getElementById(Cn);if(r&&r.dataset.oppId===t.oppId&&r.dataset.stage===(o??""))return;let a=Nb(t,o);if(!a){No();return}let i=await qb();if(!i)return;No();let s=U(i),l=document.createElement("span");l.id=Cn,l.dataset.oppId=t.oppId,l.dataset.stage=o??"",l.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",l.appendChild(a),s.appendChild(l);let d=zb(t,o);d&&s.appendChild(d),Ub(t.oppId)}catch(t){c.error("[action-bar] ensureBar threw:",t)}finally{Go=!1}}},Nt=null,$n=null,En,zi=()=>{Nt?.disconnect(),Nt=null,$n=null},Ub=t=>{if(Nt&&$n===t)return;zi();let e=document.querySelector(Vi);e&&($n=t,Nt=new MutationObserver(()=>{let o=Ki();if(!o||o.oppId!==t){zi();return}En===void 0&&(En=window.setTimeout(()=>{En=void 0,Mn()},250))}),Nt.observe(e,{childList:!0,subtree:!0}))},Tn=null,Sn,Vb=()=>{Tn||(Tn=new MutationObserver(()=>{Sn===void 0&&(Sn=window.setTimeout(()=>{Sn=void 0,!!document.querySelector(".crm-opportunities-modal .ui-modal-heading")&&!Go&&Mn()},300))}),Tn.observe(document.body,{childList:!0,subtree:!0}))},Ji=()=>{Vb(),Mn()};var Xi="ws-support-modal",Qi="ws-support-toast",Wb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",Zi="ws-support-submitter-name",es="ws-support-submitter-email",ts="ws-support-submitter-role",jb=["Bug","Feature Request","Question","Billing","Onboarding Help"],Fe=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Kb=(t,e="success",o)=>{let r=document.getElementById(Qi);r&&r.remove();let a=document.createElement("div");a.id=Qi;let i=e==="success"?n.emerald:n.crimson;a.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100000;
    background: ${n.graphite};
    border: 1px solid ${i};
    border-left: 4px solid ${i};
    border-radius: ${v.md};
    padding: 14px 20px;
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-width: 340px;
    animation: ws-toast-in 0.2s ease-out;
  `,a.innerHTML=`
    <div style="font-weight: 500;">${Fe(t)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${Fe(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},Yb=()=>{document.getElementById(Xi)?.remove();let t=(localStorage.getItem(Zi)??"").trim(),e=(localStorage.getItem(es)??"").trim(),o=(localStorage.getItem(ts)??"").trim(),r={category:null,title:"",description:"",submitterName:t,submitterEmail:e,submitterRole:o},a=document.createElement("div");a.id=Xi,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let i=document.createElement("div");i.style.cssText=`
    width: min(560px, 94vw);
    max-height: 90vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let s=l=>`
    <button type="button" data-category="${Fe(l)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.md};
      padding: 12px 10px; cursor: pointer; font-family: ${u.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${Fe(l)}</button>
  `;i.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Submit a Support Ticket</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 18px;">Get help from the REInvest OS team. Tickets are tracked and answered as fast as we can.</div>

    <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">Category</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px;">
      ${jb.map(s).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" value="${Fe(t)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" value="${Fe(e)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" value="${Fe(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${u.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Title</div>
      <input id="ws-support-title" type="text" placeholder="Short summary" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${u.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Description</div>
      <textarea id="ws-support-description" rows="5" placeholder="Walk us through what happened. The more detail the faster we can help." style="width: 100%; box-sizing: border-box; padding: 10px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${u.sans}; font-size: 13px; resize: vertical;"></textarea>
    </div>

    <div id="ws-support-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-support-close" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
      <button id="ws-support-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Submit Ticket</button>
    </div>
  `,a.appendChild(i),document.body.appendChild(a),a.addEventListener("click",l=>{l.target===a&&a.remove()}),i.querySelectorAll(".ws-support-tile").forEach(l=>{l.addEventListener("mouseenter",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow)}),l.addEventListener("mouseleave",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.steel,l.style.background=n.steel)}),l.addEventListener("click",()=>{r.category=l.dataset.category||null,i.querySelectorAll(".ws-support-tile").forEach(d=>{d===l?(d.dataset.selected="true",d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow,d.style.color=n.emeraldBright):(d.dataset.selected="false",d.style.borderColor=n.steel,d.style.background=n.steel,d.style.color=n.bone)})})}),i.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),i.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let l=i.querySelector("#ws-support-err"),d=h=>{l&&(l.textContent=h)};if(d(""),r.title=(i.querySelector("#ws-support-title")?.value||"").trim(),r.description=(i.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(i.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(i.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(i.querySelector("#ws-support-role")?.value||"").trim(),!r.category){d("Pick a category at the top.");return}if(!r.title){d("Add a title \u2014 a short summary.");return}if(!r.description){d("Add a description so we know what you're seeing.");return}if(!r.submitterName){d("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){d("Add a valid email so we can reply.");return}let p=re();if(!p){d("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(Zi,r.submitterName),localStorage.setItem(es,r.submitterEmail),r.submitterRole&&localStorage.setItem(ts,r.submitterRole)}catch{}let b=i.querySelector("#ws-support-submit");b&&(b.disabled=!0,b.textContent="Submitting\u2026",b.style.opacity="0.7");try{let m=await(await fetch(Wb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:p,category:r.category,title:r.title,description:r.description,submitter_user_id:M()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!m.ok){d(m.error||"Failed to submit ticket."),b&&(b.disabled=!1,b.textContent="Submit Ticket",b.style.opacity="1");return}a.remove();let _=m.ticket_short_id||"submitted";Kb(`Ticket ${_} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(h){d(`Network error: ${h.message}`),b&&(b.disabled=!1,b.textContent="Submit Ticket",b.style.opacity="1")}})},Jb=["/support-ticket","ws-support-modal","ws-support"],Xb=/\/custom-menu-link\//,On=!1,os=()=>{if(On||!Xb.test(window.location.pathname))return;let t=0,e=()=>{t++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let i=a.src||a.getAttribute("src")||"";return Jb.some(s=>i.includes(s))});if(r){On=!0,c.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{Yb(),On=!1},50);return}t<10&&setTimeout(e,150)};e()},rs=!1,ns=()=>{rs||(rs=!0,ne(()=>setTimeout(os,50)),os(),c.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var as="ws-phone-assignments-modal",is="ws-phone-assignments-toast",Qb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Zb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",em=["ACQ","DISPO","TC"],ds="",Ae=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),tm=(t,e="success",o)=>{document.getElementById(is)?.remove();let r=document.createElement("div");r.id=is;let a=e==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${v.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${u.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${Ae(t)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${Ae(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},om=(t,e,o)=>{let r=[`<option value="" ${o===ds?"selected":""}>\u2014 Unassigned \u2014</option>`,...e.map(a=>`<option value="${Ae(a)}" ${o===a?"selected":""}>${Ae(a)}</option>`)].join("");return`<select data-assign="${Ae(t)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${v.sm};
    font-family: ${u.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},rm=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,Hn=async t=>{document.getElementById(as)?.remove();let e=t||re(),o=document.createElement("div");o.id=as,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${u.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${v.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",m=>{m.target===o&&o.remove()}),!e){let m=r.querySelector("#ws-pa-body");m&&(m.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${Qb}?tenant_id=${encodeURIComponent(e)}`,{method:"GET",credentials:"omit"})).json()}catch(m){c.error("[phone-assignments] GET failed",m);let _=r.querySelector("#ws-pa-body");_&&(_.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${Ae(m.message)}). The backend may not be wired yet.</span>`);return}let i=a.teams&&a.teams.length?a.teams:em,s=a.numbers??[],l={...a.config?.numberTeam??{}},d=m=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${m} found.</div>`,p=s.length?s.map(m=>`<div style="${rm}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${Ae(m.label||m.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${u.mono};">${Ae(m.e164)}</div>
            </div>
            ${om(`num:${m.e164}`,i,l[m.e164]??ds)}
          </div>`).join(""):d("phone numbers"),b=m=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${m}</div>`,h=r.querySelector("#ws-pa-body");h&&(h.innerHTML=`
    ${b("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${v.md};overflow:hidden;">${p}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-family:${u.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-family:${u.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,h.querySelectorAll("select[data-assign]").forEach(m=>{m.addEventListener("change",()=>{let _=m.getAttribute("data-assign")||"",[x,...k]=_.split(":"),y=k.join(":");x==="num"&&(m.value?l[y]=m.value:delete l[y])})}),h.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),h.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let m=h.querySelector("#ws-pa-err"),_=k=>{m&&(m.textContent=k)};_("");let x=h.querySelector("#ws-pa-save");x&&(x.disabled=!0,x.textContent="Saving\u2026",x.style.opacity="0.7");try{let y=await(await fetch(Zb,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,numberTeam:l})})).json();if(!y.ok){_(y.error||"Save failed."),x&&(x.disabled=!1,x.textContent="Save",x.style.opacity="1");return}o.remove(),tm("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(k){_(`Network error: ${k.message}`),x&&(x.disabled=!1,x.textContent="Save",x.style.opacity="1")}}))},nm=["ws-phone-assignments","phone-assignments"],am=/\/custom-menu-link\//,Dn=!1,ss=()=>{if(Dn||!am.test(window.location.pathname))return;let t=0,e=()=>{t++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let i=a.src||a.getAttribute("src")||"";return nm.some(s=>i.includes(s))});if(r){Dn=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),i=a?a[1]:void 0;c.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${i})`);try{history.back()}catch{}setTimeout(()=>{Hn(i),Dn=!1},50);return}t<10&&setTimeout(e,150)};e()},ls=!1,cs=()=>{if(ls)return;ls=!0,ne(()=>setTimeout(ss,50)),ss();let t=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&Hn()};window.addEventListener("hashchange",t),t(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void Hn(),c.info("[phone-assignments] mounted (route + hash + window trigger)")};var bs="powerDialerApp",im=".dialer",sm='button[aria-label="Voice Calling"], button[title="Voice Calling"]',lm=".dial-item.dial-btn.dial-btn-enabled",Ne=t=>{for(let e of["pointerdown","mousedown","pointerup","mouseup","click"])try{t.dispatchEvent(new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window}))}catch{}},Pn=t=>{let e=(t||"").match(/\+\d{10,15}/);return e?e[0]:null},ms=()=>{try{let e=window[bs]?._context?.provides?.emitter;if(e&&typeof e.emit=="function")return e}catch(t){c.debug("[dialer-bridge] getEmitter failed",t)}return null},ot=()=>document.querySelector(im),qo=()=>ms()!==null||ot()!==null?!0:!!window[bs],Uo=(t,e)=>{let o=ms();if(!o)return c.warn(`[dialer-bridge] no emitter; cannot emit ${t}`),!1;try{return o.emit(t,e),!0}catch(r){return c.error(`[dialer-bridge] emit ${t} threw`,r),!1}},hs=()=>{if(ot())return;let t=document.querySelector(sm);t?Ne(t):c.warn("[dialer-bridge] Voice Calling button not found")},dm=()=>{let t=document.querySelector(".number-list-container")||ot();if(!t)return[];let e=[...t.querySelectorAll(".selected-number, .number-list-item, .number")],o=[],r=new Set;for(let a of e){let i=Pn(a.innerText||"");!i||r.has(i)||(r.add(i),o.push({e164:i,label:(a.innerText||"").replace(/\s+/g," ").trim().slice(0,60),el:a.closest(".number-list-item")||a}))}return o},ps=()=>{let t=document.querySelector(".number-config .ui-text-sm-medium");if(t){let o=Pn(t.innerText);if(o)return o}let e=document.querySelector(".number-config");return e?Pn(e.innerText):null},us=t=>{if(ps()===t)return!0;let e=document.querySelector(".number-config, .dialer-config");e&&Ne(e);let o=dm().find(r=>r.e164===t);return o?(Ne(o.el),ps()===t):(c.warn(`[dialer-bridge] Calling From ${t} not available to this rep`),!1)},vs=()=>[...document.querySelectorAll(".phone-number-type-pill")].find(t=>/local/i.test(t.innerText||""))||null,cm=()=>{let t=vs();return t?!/bg-gray-100/.test(t.className):!1},_s=t=>{let e=vs();e&&cm()!==t&&Ne(e)},gs=t=>{let e=t.replace(/[^\d*#+]/g,"");if(Uo("sendDigitToDial",{value:e,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of e){let a=o.find(i=>i.querySelector(".dial-number")?.textContent?.trim()===r);a&&Ne(a)}},ys=()=>{let t=ot();if(!t)return c.warn("[dialer-bridge] no dialer present to place call"),!1;let e=t.querySelector(lm)||[...t.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let i=+a[1],s=+a[2],l=+a[3];return s>120&&s>i+40&&s>l+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return e?(Ne(e),!0):Uo("makeCall",{provider:"twilio"})};var Rn=()=>{let t=ot();if(!t)return;let e=[...t.querySelectorAll("button, div, span")].find(o=>/^.{0,4}end call.{0,4}$/i.test((o.textContent||"").replace(/\s+/g," ").trim())&&(o.textContent||"").length<24);e?Ne(e.closest("button")||e):Uo("closeCallBox")},fs=()=>{Uo("closeCallBox")},xs=t=>{let e=!1,o=()=>{let i=ot()?.innerText||"",s=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(i)&&!/Call Summary|Call Ended/.test(i),l=/Call Summary|Call Ended/.test(i);if(s&&(e=!0),e&&l){e=!1;try{t()}catch(d){c.error("[dialer-bridge] onCallEnded cb threw",d)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var pm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",bm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",ws=["acq","dispo","tc"],Gt={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},zt=null,ks=null,mm=async(t=!1)=>{let e=re();if(!e)return{};if(!t&&zt&&ks===e)return zt;try{return zt=(await(await fetch(`${pm}?tenant_id=${encodeURIComponent(e)}`,{method:"GET",credentials:"omit"})).json())?.config?.numberTeam??{},ks=e,zt}catch(o){return c.warn("[silo] number-team config load failed",o),zt??{}}},ze=null,Es=null,Bn=async(t=!1)=>{let e=re(),o=M();if(!e||!o)return[];if(!t&&ze&&Es===e)return ze;try{let i=(await(await fetch(bm,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(s=>s.id===o);if(i){let s=i.role_keys??[];ze=ws.filter(l=>s.includes(l))}else me()?ze=[...ws]:ze=[];return Es=e,ze}catch(r){return c.warn("[silo] roster load failed",r),ze??[]}},Ss=()=>`ws-pd-calling-as:${M()||"anon"}`,Cs=t=>{try{localStorage.setItem(Ss(),t)}catch{}},Fn=async()=>{let t=await Bn();if(t.length===0)return null;if(t.length===1)return t[0];let e=null;try{e=localStorage.getItem(Ss())}catch{}return e&&t.includes(e)?e:t[0]},Ts=t=>{let e=(t||"").replace(/\D/g,"");return e.length===11&&e[0]==="1"?e.slice(1,4):e.length===10?e.slice(0,3):null},hm=(t,e)=>Object.entries(t).filter(([,o])=>o===e).map(([o])=>o),As=async t=>{let e=await Fn();if(!e)return c.debug("[silo] no active team for current rep; leaving GHL default"),null;let o=await mm(),r=hm(o,e);if(!r.length)return c.debug(`[silo] ${e} has no numbers; leaving GHL default`),null;let a=Ts(t),i=a?r.find(d=>Ts(d)===a):void 0,s=i||r[0];try{_s(!1)}catch{}return us(s)?(c.info(`[silo] ${Gt[e]}: calling ${t} from ${s}${i?" (local match)":" (pool default)"}`),s):(c.warn(`[silo] could not select ${s} (not in this rep's picker?)`),null)};var um="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",$s="data-ws-pd",Ls="ws-pd-panel",Is="ws-pd-session",Ge=t=>new Promise(e=>setTimeout(e,t)),qt=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),vm=t=>{let e=t;for(let o=0;o<8&&e;o++){if(e.querySelector(".crm-opportunities-card-wrapper"))return e;e=e.parentElement}return null},_m=t=>{let e=[t,...Array.from(t.querySelectorAll("*"))];for(let o of e)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return t},gm=t=>{let e=[],o=new Set;for(let r of Array.from(t.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),i=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!i||o.has(i))continue;let s=Array.from(r.querySelectorAll("[id]")).find(l=>/^[A-Za-z0-9]{18,22}$/.test(l.id));o.add(i),e.push({oppId:s?.id||"",contactId:i,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return e},ym=async t=>{let e=vm(t);if(!e)return[];let o=_m(e),r=-1;for(let a=0;a<60;a++){let i=e.querySelectorAll(".crm-opportunities-card-wrapper").length;if(i===r)break;r=i,o.scrollTop=o.scrollHeight,await Ge(550)}return o.scrollTop=0,gm(e)},fm=async(t,e)=>{try{let r=await(await fetch(um,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,contact_id:e})})).json();return r?.ok?{name:r.name||"",phone:r.phone||""}:null}catch(o){return c.warn("[bulk-dialer] resolvePhone failed",o),null}},xm=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`,zn=(t,e,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(Ls)?.remove();let r=document.createElement("div");r.id=Ls,r.style.cssText=xm;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let i=e.map((p,b)=>`<label data-row="${b}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${b}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${qt(p.name||p.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${qt(t)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:12px;">${e.length} ${e.length===1?o.one:o.many} loaded. Pick who to call.</div>
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-size:13px;font-family:${u.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${v.md};min-height:120px;">${i||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <label style="display:flex;align-items:center;gap:8px;font-size:12px;color:${n.ash};margin-top:12px;cursor:pointer;"><input id="ws-pd-auto" type="checkbox" checked style="accent-color:${n.emerald};" /> Auto-advance to the next call (5s countdown, with Pause/Skip)</label>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${u.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${u.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",p=>{p.target===r&&r.remove()});let s=a.querySelector("#ws-pd-list"),l=a.querySelector("#ws-pd-count"),d=()=>{let p=a.querySelectorAll(".ws-pd-cb:checked").length;l&&(l.textContent=`${p} selected`)};d(),s?.addEventListener("change",d),a.querySelector("#ws-pd-search")?.addEventListener("input",p=>{let b=p.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach(h=>{let m=(h.textContent||"").toLowerCase();h.style.display=m.includes(b)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",p=>{let b=p.target.checked;a.querySelectorAll("[data-row]").forEach(h=>{if(h.style.display==="none")return;let m=h.querySelector(".ws-pd-cb");m&&(m.checked=b)}),d()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let p=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(h=>{let m=Number(h.getAttribute("data-i"));e[m]&&p.push(e[m])});let b=a.querySelector("#ws-pd-auto")?.checked??!0;r.remove(),p.length&&Ms(t,p,b)})},Ms=async(t,e,o)=>{let r=re();if(!r)return;document.getElementById(Is)?.remove();let a={skip:!1,paused:!1,stopped:!1,advance:!1},i=document.createElement("div");i.id=Is,i.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${v.md};padding:14px 16px;color:${n.bone};font-family:${u.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(i);let s=(l,d,p)=>{i.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${qt(t)} \xB7 ${d+1} of ${e.length}</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${qt(p)}</div>
      <div style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${qt(l)}</div>
      <div style="display:flex;gap:6px;">
        <button id="ws-pd-skip" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;">Skip</button>
        <button id="ws-pd-pause" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;">${a.paused?"Resume":"Pause"}</button>
        <button id="ws-pd-next" style="flex:1;background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;font-weight:600;">Call Next</button>
      </div>`,i.querySelector("#ws-pd-end")?.addEventListener("click",()=>{a.stopped=!0;try{Rn()}catch{}i.remove()}),i.querySelector("#ws-pd-skip")?.addEventListener("click",()=>{a.skip=!0;try{Rn()}catch{}}),i.querySelector("#ws-pd-pause")?.addEventListener("click",()=>{a.paused=!a.paused}),i.querySelector("#ws-pd-next")?.addEventListener("click",()=>{a.advance=!0})};for(let l=0;l<e.length&&!a.stopped;l++){let d=e[l];a.skip=!1,a.advance=!1,s("Resolving number\u2026",l,d.name);let p=d._phone?{name:d.name,phone:d._phone}:await fm(r,d.contactId);if(a.stopped)break;if(!p||!p.phone){s("No phone on file \u2014 skipping",l,d.name||p?.name||d.contactId),await Ge(1400);continue}let b=p.name||d.name;if(await As(p.phone),a.stopped)break;s(`Calling ${p.phone}\u2026`,l,b);try{hs(),await Ge(250),gs(p.phone),await Ge(250),ys()}catch(h){c.error("[bulk-dialer] dial failed",h)}if(await new Promise(h=>{let m=!1,_=()=>{m||(m=!0,x(),h())},x=xs(_),k=window.setInterval(()=>{(a.stopped||a.skip)&&(window.clearInterval(k),_())},300)}),a.stopped)break;try{fs()}catch{}if(l<e.length-1)if(o)for(let h=5;h>0&&!a.stopped&&!a.advance;h--){for(s(`Next call in ${h}s\u2026`,l,b);a.paused&&!a.stopped&&!a.advance;)await Ge(200);if(a.advance||a.stopped)break;await Ge(1e3)}else for(s("Ready \u2014 press Call Next",l,b);!a.advance&&!a.stopped;)await Ge(200)}a.stopped||(i.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${e.length} contact${e.length===1?"":"s"} dialed.</div>`,setTimeout(()=>i.remove(),5e3))},Gn='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',qn=()=>{try{if(localStorage.getItem("ws-pd")==="1")return!0}catch{}return me()},wm=()=>{if(ao()!=="opportunity-list"||!qn()||!qo())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(e=>{if(e.querySelector(`[${$s}]`))return;let o=e.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute($s,"1"),a.title=`Power Dialer \u2014 call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${v.pill};cursor:pointer;font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${Gn}<span>DIAL</span>`,a.addEventListener("click",async i=>{i.stopPropagation(),i.preventDefault();let s=a.querySelector("span"),l=s?.textContent||"DIAL";s&&(s.textContent="Loading\u2026"),a.style.opacity="0.7";try{let d=await ym(e);zn(r,d)}catch(d){c.error("[bulk-dialer] harvest failed",d)}finally{s&&(s.textContent=l),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},rt=null,Nn,Os=()=>{window.WS_CRM_PD_TEST=e=>void Ms("Verification",[{oppId:"",contactId:"__test__",name:`Test ${e}`,_phone:e}],!1);let t=()=>{Nn!==void 0&&window.clearTimeout(Nn),Nn=window.setTimeout(wm,400)};ne(e=>{e==="opportunity-list"?(t(),rt||(rt=new MutationObserver(t),rt.observe(document.body,{childList:!0,subtree:!0}))):rt&&(rt.disconnect(),rt=null)})};var Ds="ws-crm-pd-contacts-btn",km=t=>new Promise(e=>setTimeout(e,t)),Em=t=>{let e=t.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return e?`+1${e[1]}${e[2]}${e[3]}`:""},Tm=()=>document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0,Un=(t,e)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(e){let d=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(d&&d.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||t.has(a))return;let i=(r?.textContent||"").replace(/\s+/g," ").trim(),s=Em(o.textContent||""),l=i&&i!=="-"?i:s||a;t.set(a,{oppId:"",contactId:a,name:l,_phone:s||void 0})})},Sm=async t=>{let e=new Map;if(t)return Un(e,!0),[...e.values()];let o=document.querySelector(".tabulator-tableholder");if(Un(e,!1),!o)return[...e.values()];let r=-1,a=-1,i=0;for(let s=0;s<200&&(Un(e,!1),e.size===a?i++:(i=0,a=e.size),!(s>0&&o.scrollTop===r&&i>=2));s++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await km(220);return o.scrollTop=0,[...e.values()]},Cm=()=>{if(ao()!=="contact-list"||!qn()||!qo()||document.getElementById(Ds))return;let t=document.querySelector("#views-bar .bar");if(!t)return;let e=document.createElement("button");e.id=Ds,e.type="button",e.title="Power Dialer: call through this list, or the rows you've checked",e.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${v.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${u.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,e.innerHTML=`${Gn}<span>Power Dialer</span>`;let o=e.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=e.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),e.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let i=e.querySelector("span"),s=i?.textContent||"Power Dialer";i&&(i.textContent="Loading\u2026"),e.style.opacity="0.7";try{let l=Tm(),d=await Sm(l);zn(l?"Selected contacts":"Smart list",d,{one:"contact",many:"contacts"})}catch(l){c.error("[bulk-dialer-contacts] harvest failed",l)}finally{i&&(i.textContent=s),e.style.opacity="1"}}),t.appendChild(e)},nt=null,Vn,Hs=!1,Ps=()=>{if(Hs)return;Hs=!0;let t=()=>{Vn!==void 0&&window.clearTimeout(Vn),Vn=window.setTimeout(Cm,400)};ne(e=>{e==="contact-list"?(t(),nt||(nt=new MutationObserver(t),nt.observe(document.body,{childList:!0,subtree:!0}))):nt&&(nt.disconnect(),nt=null)})};var Vo="ws-calling-as-chip",Am=()=>{try{if(localStorage.getItem("ws-pd")==="1")return!0}catch{}return me()},Wn=!1,Rs=async()=>{if(!Wn&&Am()&&!document.getElementById(Vo)){Wn=!0;try{let t=await Bn();if(!t.length||document.getElementById(Vo))return;let e=await Fn()??t[0],o=t.length>1,r=document.createElement("div");r.id=Vo,r.style.cssText="position:fixed;bottom:60px;right:20px;z-index:99998;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:8px;padding:7px 12px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${v.pill};color:${n.bone};font-family:${u.sans};font-size:12px;box-shadow:0 6px 18px rgba(0,0,0,0.35);cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${u.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${Gt[e]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let i=s=>{let l=a.querySelector(".ws-ca-team");l&&(l.textContent=Gt[s])};if(o){let s=document.createElement("div");s.style.cssText=`position:absolute;bottom:calc(100% + 6px);right:0;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;`;let l=()=>{s.innerHTML="",t.forEach(d=>{let p=document.createElement("div"),b=d===e;p.style.cssText=`padding:9px 14px;font-family:${u.sans};font-size:13px;color:${b?n.emeraldBright:n.bone};cursor:pointer;background:${b?n.emeraldGlow:"transparent"};`,p.textContent=Gt[d],p.addEventListener("mouseenter",()=>{d!==e&&(p.style.background=n.steel)}),p.addEventListener("mouseleave",()=>{d!==e&&(p.style.background="transparent")}),p.addEventListener("click",h=>{h.stopPropagation(),e=d,Cs(d),i(d),l(),s.style.display="none"}),s.appendChild(p)})};l(),r.appendChild(s),a.addEventListener("click",d=>{d.stopPropagation(),s.style.display=s.style.display==="block"?"none":"block"}),document.addEventListener("click",()=>{s.style.display="none"})}document.body.appendChild(r),c.info(`[calling-as] chip mounted (roles=${t.join(",")}, active=${e}, multi=${o})`)}catch(t){c.error("[calling-as] build failed",t)}finally{Wn=!1}}},Bs=()=>{Rs(),ne(()=>{document.getElementById(Vo)||Rs()})};var $m="#12161D",Lm="#EDEEF0",Fs=t=>{let o=getComputedStyle(t).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],i=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&i>=230},Ns=t=>{t.style.setProperty("background-color",$m,"important"),t.style.setProperty("color",Lm,"important")},Im=()=>{for(let t of Array.from(document.body.children)){if(t.tagName!=="DIV")continue;let e=t;if(!(e.id||e.className)&&getComputedStyle(e).position==="fixed")return e}return null},Mm=t=>{Fs(t)&&Ns(t);for(let e of Array.from(t.querySelectorAll("*")))Fs(e)&&Ns(e)},jn=null,Ut=null,Gs=()=>{Ut&&(Ut.disconnect(),Ut=null),jn=null},Om=t=>{if(jn===t)return;Gs(),jn=t;let e=!1,o=()=>{e=!1;try{Mm(t)}catch(a){c.debug("[dialer-theme] paint failed",a)}},r=()=>{e||(e=!0,requestAnimationFrame(o))};Ut=new MutationObserver(r),Ut.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),c.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},zs=!1,qs=()=>{if(zs)return;zs=!0;let t=()=>{let o=Im();o?Om(o):Gs()};t(),new MutationObserver(t).observe(document.body,{childList:!0})};var Dm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",Hm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",Pm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",Ws="tc_closing_agent",Rm="tc_closing_office",be="ws-crm-closing-agent-picker-button",js="ws-crm-closing-agent-picker-modal",Bm=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Fm=/\/v2\/location\/([A-Za-z0-9]+)/,jt=()=>{let t=window.location.pathname,e=t.match(Bm);if(!e)return null;let o=t.match(Fm);return{oppId:e[1],locationId:o?o[1]:null}},ta=async t=>{let e=await fetch(Dm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,query:t.query??"",contact_id:t.contactId??null,contact_type:t.contactType??null,limit:t.limit??20}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},Us=async t=>{let e=await fetch(Hm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,opp_id:t.oppId,field_key:t.fieldKey,value:t.value}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},Nm=async(t,e)=>{try{let o=await fetch(Pm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,field_key:Ws}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let i=await ta({tenantId:e,contactId:a,limit:1});if(!i.ok||!i.results.length)return null;let s=i.results[0];return{id:s.id,name:s.name,companyName:s.companyName??""}}catch(o){return c.warn("[closing-agent] fetchCurrent failed:",o),null}},qe=null,zm=60*60*1e3,oa=t=>`ws-crm-to-cache:${t}`,Ks=t=>{try{let e=window.localStorage.getItem(oa(t));if(!e)return null;let o=JSON.parse(e);return!o.ts||Date.now()-o.ts>zm||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},Ys=(t,e,o)=>{try{window.localStorage.setItem(oa(t),JSON.stringify({contactId:e,contactName:o,ts:Date.now()}))}catch{}},Gm=t=>{try{window.localStorage.removeItem(oa(t))}catch{}},Xn="ws-crm-closing-agent-field-link",qm=()=>{let t=document.querySelector(".crm-opportunities-modal");t&&(t.querySelectorAll(`.${Xn}`).forEach(e=>e.remove()),t.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(e=>{e.style.removeProperty("color"),e.style.removeProperty("caret-color"),e.style.removeProperty("visibility"),delete e.dataset.wsClosingAgentDecorated}))},Kn=!1,ra=async t=>{if(Kn)return;let e=Js();if(!e)return;let o=(e.value||"").trim();if(!o){c.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){c.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(e.dataset.wsClosingAgentDecorated!==o){Kn=!0;try{c.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await ta({tenantId:t,contactId:o,limit:1});if(!r.ok||!r.results.length){c.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];c.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),Qn(a.id,a.name,t);let i=document.getElementById(be);if(i){$e(i,{status:"linked",contactName:a.name});let s=jt();s&&Ys(s.oppId,a.id,a.name)}}catch(r){c.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{Kn=!1}}},Um=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,Js=()=>{let e=document.querySelectorAll("*"),o=[],r=[],a=[];for(let d of e){let p=(d.textContent||"").trim();Um.test(p)?o.push(d):p.length<80&&/Title\s+Officer/i.test(p)&&r.push(p);for(let b of["aria-label","placeholder","data-label","title","name","data-test"]){let h=d.getAttribute(b);h&&/Title\s+Officer/i.test(h)&&a.push({tag:d.tagName.toLowerCase(),attr:b,value:h})}}if(c.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&c.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&c.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((d,p)=>d.querySelectorAll("*").length-p.querySelectorAll("*").length);let s=o[0].parentElement,l=0;for(;s&&l<8;){let d=s.querySelector("input");if(d)return c.info(`[closing-agent] findInput: located input ${l} levels up from label`),d;s=s.parentElement,l+=1}return c.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},Qn=(t,e,o)=>{let r=Js();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==t){a&&r.parentElement?.querySelectorAll(`.${Xn}`).forEach(s=>s.remove());{let i=r.parentElement;if(!i)return;r.dataset.wsClosingAgentDecorated=t,r.style.visibility="hidden",window.getComputedStyle(i).position==="static"&&(i.style.position="relative");let l=document.createElement("a");l.className=Xn,l.href=`/v2/location/${o}/contacts/detail/${t}`,l.textContent=e,l.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: ${n.bone};
      font-family: ${u.sans};
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      pointer-events: auto;
      background: ${n.slate};
      border-radius: ${v.sm};
      z-index: 2;
    `,l.addEventListener("mouseenter",()=>{l.style.textDecoration="underline"}),l.addEventListener("mouseleave",()=>{l.style.textDecoration="none"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),window.location.href=l.href}),i.appendChild(l)}}},Wo=()=>{document.getElementById(js)?.remove()},Vm=t=>{Wo();let e=document.createElement("div");e.id=js,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 92vw);
    max-height: 80vh;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  `,o.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 8px;
    ">Contact Picker</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">Pick Closing Agent</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Search by name, email, or phone. The selected contact's email + phone flow into the title-co handoff email.</div>

    <input id="ws-top-search" type="text" placeholder="Search contacts\u2026" autocomplete="off"
      style="
        width: 100%;
        background: ${n.slate};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 14px;
        padding: 10px 12px;
        outline: none;
        box-sizing: border-box;
        margin-bottom: 12px;
      " />

    <div id="ws-top-results"
      style="
        flex: 1;
        overflow-y: auto;
        min-height: 80px;
        max-height: 50vh;
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        background: ${n.obsidian};
        margin-bottom: 16px;
      ">
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Start typing to search.
      </div>
    </div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-top-cancel" type="button" style="
        ${O}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),i=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),e.addEventListener("click",p=>{p.target===e&&Wo()}),i?.addEventListener("click",Wo);let s,l="",d=async p=>{if(a&&p!==l){if(l=p,!p.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let b=await ta({tenantId:t.locationId,query:p,contactType:"closing_agent",limit:20});if(!b.ok||!Array.isArray(b.results)||b.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",b.results.forEach(h=>{let m=document.createElement("button");m.type="button",m.style.cssText=`
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          background: transparent;
          border: none;
          border-bottom: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 13px;
          cursor: pointer;
          transition: background 0.1s ease;
        `,m.innerHTML=`
          <div style="font-weight: 500;">${jo(h.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${jo(h.email||"(no email)")} \xB7 ${jo(h.phone||"no phone")}
            ${h.companyName?` \xB7 ${jo(h.companyName)}`:""}
          </div>
        `,m.addEventListener("mouseenter",()=>{m.style.background=n.slate}),m.addEventListener("mouseleave",()=>{m.style.background="transparent"}),m.addEventListener("click",()=>{Wo(),t.onPick(h)}),a.appendChild(m)})}catch(b){c.error("Closing Agent picker search failed",b),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let p=r.value;s!==void 0&&clearTimeout(s),s=window.setTimeout(()=>{d(p)},250)})},jo=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),$e=(t,e)=>{let o=t.querySelector(".ws-top-label"),r=t.querySelector(".ws-top-dot"),a="Link Closing Agent",i=n.amber,s=n.bone,l="transparent",d=n.steel,p="pointer";switch(e.status){case"loading":a="Loading Closing Agent\u2026",i=n.coolGray,s=n.ash,p="wait";break;case"empty":a="Link Closing Agent",i=n.amber;break;case"linked":a=e.contactName?`Closing Agent: ${e.contactName}`:"Closing Agent: \u2713",i=n.emerald,l=n.emeraldGlow,d=n.emeraldBorder,s=n.emeraldBright;break;case"saving":a="Linking\u2026",i=n.coolGray,s=n.ash,p="wait";break}o&&(o.textContent=a),r&&(r.style.background=i,r.style.boxShadow=`0 0 6px ${i}`),t.style.background=l,t.style.borderColor=d,t.style.color=s,t.style.cursor=p},Wm=(t,e)=>{let o=document.createElement("button");o.id=be,o.type="button",o.dataset.oppId=t,o.style.cssText=O,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};$e(o,r);let a=Ks(t);return a&&(r={status:"linked",contactName:a.contactName},$e(o,r),qe={oppId:t,contactId:a.contactId,contactName:a.contactName,tenantId:e}),(async()=>{let s=await Nm(t,e);s?(r={status:"linked",contactName:s.name},$e(o,r),qe={oppId:t,contactId:s.id,contactName:s.name,tenantId:e},Qn(s.id,s.name,e)):a||(r={status:"empty"},$e(o,r),qe?.oppId===t&&(qe=null),qm(),Gm(t))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||Vm({oppId:t,locationId:e,onPick:async s=>{r={status:"saving"},$e(o,r);try{let l=[Us({tenantId:e,oppId:t,fieldKey:Ws,value:s.id})];s.companyName&&s.companyName.trim()&&l.push(Us({tenantId:e,oppId:t,fieldKey:Rm,value:s.companyName.trim()}));let p=(await Promise.all(l))[0];if(!p.ok)throw new Error(p.error??"Save failed");r={status:"linked",contactName:s.name},$e(o,r),qe={oppId:t,contactId:s.id,contactName:s.name,tenantId:e},Ys(t,s.id,s.name),Qn(s.id,s.name,e),c.info(`Closing Agent linked: ${s.name} (${s.id})${s.companyName?` \u2014 Company: ${s.companyName}`:""}`)}catch(l){c.error("Closing Agent link failed",l),r={status:"empty"},$e(o,r)}}})}),o},jm=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Km=async()=>{for(let t of jm)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Vt=!1,Yo=async()=>{if(!Vt){Vt=!0;try{await Ym()}finally{Vt=!1}}},Ym=async()=>{let t=jt();if(!t||!t.locationId){document.getElementById(be)?.remove(),document.getElementById(`${be}-wrap`)?.remove(),Ko();return}let e=document.getElementById(be);if(e&&e.dataset.oppId===t.oppId){let d=H();d!==null&&d!=="Transaction Coordination"&&(e.remove(),document.getElementById(`${be}-wrap`)?.remove(),Ko());return}e&&(e.remove(),document.getElementById(`${be}-wrap`)?.remove());let o=H();if(o!==null&&o!=="Transaction Coordination")return;let r=await Km();if(!r||!(Ks(t.oppId)!==null||qe!==null&&qe.oppId===t.oppId)&&await W()!=="Transaction Coordination")return;let i=jt();if(!i||i.oppId!==t.oppId||!i.locationId)return;let s=Wm(t.oppId,i.locationId),l=document.createElement("span");l.id=`${be}-wrap`,l.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,l.appendChild(s),U(r).appendChild(l),c.debug(`Mounted Closing Agent picker on opp ${t.oppId}`),Jm(t.oppId),ra(i.locationId)},Wt=null,Zn=null,ea=null,Ko=()=>{Wt?.disconnect(),Wt=null,Zn=null,ea=null},Jm=t=>{let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Wt&&Zn===t&&ea===e||(Ko(),Zn=t,ea=e,Wt=new MutationObserver(()=>{let o=jt();if(!o||o.oppId!==t||!o.locationId){Ko();return}document.getElementById(be)||Yo(),ra(o.locationId)}),Wt.observe(e,{childList:!0,subtree:!0})))},Yn=null,Jn,Xm=()=>{Yn||(Yn=new MutationObserver(()=>{Jn===void 0&&(Jn=window.setTimeout(()=>{Jn=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(be);t&&!e&&!Vt&&Yo()},300))}),Yn.observe(document.body,{childList:!0,subtree:!0}))},Vs,Qm=()=>{Vs===void 0&&(Vs=window.setInterval(()=>{let t=jt();if(!t||!t.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(be)&&!Vt&&(c.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),Yo()),ra(t.locationId)},2e3))},Xs=()=>{c.info("[closing-agent] mountClosingAgentPickerButton invoked"),Xm(),Qm(),Yo()};var Zm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Ie="ws-crm-manage-team-cta",Qs="ws-crm-manage-team-modal",eh=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,Zs={manager:"Manager",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator"},th={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},el=()=>{let t=window.location.pathname.match(eh);return t?{tenantId:t[1]}:null},Xo=async t=>{let e=await fetch(Zm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!e.ok){let o="";try{o=await e.text()}catch{}throw new Error(`Team.Manage HTTP ${e.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await e.json()},ie=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Le=t=>ie(t),na="ws-crm-manage-team-toast",sa=(t,e="info",o=4e3)=>{document.getElementById(na)?.remove();let r=e==="success"?n.emerald:e==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=na,a.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999999;
    background: ${n.graphite};
    border: 1px solid ${r};
    border-radius: ${v.sm};
    color: ${n.bone};
    padding: 12px 18px;
    font-family: ${u.sans};
    font-size: 13px;
    max-width: 400px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  `,a.textContent=t,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(na)===a&&a.remove()},o)},aa=()=>{document.getElementById(Qs)?.remove()},oh=(t,e)=>{let o=th[t]||{bg:n.slate,fg:n.ash};return`
    <span style="
      display: inline-block;
      background: ${o.bg};
      color: ${o.fg};
      border: 1px solid ${o.fg};
      border-radius: ${v.pill};
      padding: 2px 10px;
      font-family: ${u.mono};
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-bottom: 4px;
    ">${ie(e)}</span>
  `},rh=(t,e)=>{let o=[t.first_name,t.last_name].filter(Boolean).join(" ")||"(no name)",r=t.roles.map(s=>oh(s.key,s.display)).join(""),a=e?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",i=e?"":'title="Manager-only action"';return`
    <div data-user-id="${Le(t.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${ie(o)}
          ${t.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${u.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${ie(t.email)}${t.phone?` &middot; ${ie(t.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${i}>
        <button class="ws-team-edit" data-email="${Le(t.email)}" data-user-id="${Le(t.id)}" data-name="${Le(o)}" data-current-roles="${Le(t.role_keys.join(","))}" style="${O} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${Le(t.email)}" data-name="${Le(o)}" data-role-count="${Le(String(t.role_keys.length))}" style="${O} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},nh=(t,e)=>t.length===0?`
      <div style="padding: 40px; text-align: center; color: ${n.ash};">
        <div style="font-size: 14px; margin-bottom: 8px;">No team members yet.</div>
        <div style="font-size: 12px; color: ${n.coolGray};">
          Use "Add Employee" to start building your team.
        </div>
      </div>
    `:`
    <div style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 10px 16px;
      border-bottom: 1px solid ${n.steel};
      font-family: ${u.mono};
      font-size: 10px;
      color: ${n.ash};
      letter-spacing: 0.1em;
      text-transform: uppercase;
    ">
      <div>Member</div>
      <div>Roles</div>
      <div style="text-align: right;">Actions</div>
    </div>
  `+t.map(r=>rh(r,e)).join(""),Qo=async t=>{aa();let e=document.createElement("div");e.id=Qs,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,e.addEventListener("click",d=>{d.target===e&&aa()});let o=document.createElement("div");o.style.cssText=`
    width: min(900px, 94vw);
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,o.innerHTML=`
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
        <div style="font-size: 20px; font-weight: 500;">Roster</div>
      </div>
      <button id="ws-team-close" style="${O} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 10px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e),o.querySelector("#ws-team-close")?.addEventListener("click",aa);let r;try{r=await Xo({tenant_id:t,action:"list"})}catch(d){let p=o.querySelector("#ws-team-content");p&&(p.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${ie(d.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let d=o.querySelector("#ws-team-content");d&&(d.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${ie(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=M(),i=!!(a&&r.roster.some(d=>d.id===a&&d.role_keys.includes("manager"))),s=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${u.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} mgr</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",l=o.querySelector("#ws-team-content");if(l&&(l.innerHTML=s+nh(r.roster,i)),i)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{ah(t)}),o.querySelectorAll(".ws-team-edit").forEach(d=>{d.addEventListener("click",p=>{let b=p.currentTarget;ih(t,{email:b.dataset.email||"",name:b.dataset.name||"",currentRoles:(b.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(d=>{d.addEventListener("click",p=>{let b=p.currentTarget;sh(t,{email:b.dataset.email||"",name:b.dataset.name||"",roleCount:parseInt(b.dataset.roleCount||"0",10)})})});else{let d=o.querySelector("#ws-team-actions");d&&(d.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Manager. Manager role required to add/edit/remove team members.
        </div>
      `)}},ah=t=>{let e="ws-crm-manage-team-add-modal";document.getElementById(e)?.remove();let o=document.createElement("div");o.id=e,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,o.addEventListener("click",s=>{s.target===o&&o.remove()});let r=`
    width: 100%;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 10px 14px;
    outline: none;
    box-sizing: border-box;
  `,a=`
    display: block;
    font-family: ${u.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    margin-bottom: 6px;
    margin-top: 14px;
  `,i=document.createElement("div");i.style.cssText=`
    width: min(500px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,i.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
    <div style="font-size: 20px; font-weight: 500; margin-bottom: 4px;">Add Employee</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">They'll get a login automatically and start receiving leads + deals routed to their role.</div>

    <label style="${a} margin-top: 0;">First Name</label>
    <input id="ws-team-add-first" type="text" placeholder="Enter first name" style="${r}" />

    <label style="${a}">Last Name</label>
    <input id="ws-team-add-last" type="text" placeholder="Enter last name" style="${r}" />

    <label style="${a}">Email</label>
    <input id="ws-team-add-email" type="email" placeholder="email@company.com" style="${r}" />

    <label style="${a}">Mobile (E.164 or 10-digit US)</label>
    <input id="ws-team-add-mobile" type="tel" placeholder="+13105550100" style="${r}" />

    <label style="${a}">Role</label>
    <select id="ws-team-add-role" style="${r}">
      <option value="">Select a role</option>
      <option value="manager">Manager</option>
      <option value="acq">Acquisitions Rep</option>
      <option value="dispo">Disposition Rep</option>
      <option value="tc">Transaction Coordinator</option>
    </select>

    <div id="ws-team-add-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px; margin-top: 12px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
      <button id="ws-team-add-cancel" style="${O} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(i),document.body.appendChild(o),i.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),i.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let s=(i.querySelector("#ws-team-add-first")?.value||"").trim(),l=(i.querySelector("#ws-team-add-last")?.value||"").trim(),d=(i.querySelector("#ws-team-add-email")?.value||"").trim(),p=(i.querySelector("#ws-team-add-mobile")?.value||"").trim(),b=(i.querySelector("#ws-team-add-role")?.value||"").trim(),h=i.querySelector("#ws-team-add-error"),m=i.querySelector("#ws-team-add-submit");if(!s||!l||!d||!p||!b){h&&(h.textContent="All fields are required.");return}m&&(m.disabled=!0,m.textContent="Adding\u2026",m.style.opacity="0.7"),h&&(h.textContent="");try{let _=await Xo({tenant_id:t,action:"add",first_name:s,last_name:l,email:d,mobile:p,role:b,triggered_by_user_id:M()});if(!_.ok){h&&(h.textContent=_.error||"Failed to add employee"),m&&(m.disabled=!1,m.textContent="Add Employee",m.style.opacity="1");return}o.remove(),sa(`Added ${s} ${l} as ${Zs[b]||b}.`,"success"),await Qo(t)}catch(_){h&&(h.textContent=_.message),m&&(m.disabled=!1,m.textContent="Add Employee",m.style.opacity="1")}})},ih=(t,e)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,r.addEventListener("click",s=>{s.target===r&&r.remove()});let a=document.createElement("div");a.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let i=s=>{let l=e.currentRoles.includes(s)?"checked":"";return`
      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: ${n.slate}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; cursor: pointer; margin-bottom: 6px;">
        <input type="checkbox" data-role-key="${s}" ${l} style="cursor: pointer;" />
        <span style="font-size: 13px;">${ie(Zs[s])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${ie(e.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${ie(e.email)}</div>

    <div style="margin-bottom: 16px;">
      ${i("manager")}
      ${i("acq")}
      ${i("dispo")}
      ${i("tc")}
    </div>

    <div id="ws-team-edit-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-edit-cancel" style="${O} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let s=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(p=>p.checked).map(p=>p.dataset.roleKey||"").filter(Boolean),l=a.querySelector("#ws-team-edit-error"),d=a.querySelector("#ws-team-edit-submit");if(s.length===0){l&&(l.textContent="Select at least one role. To fully offboard, use Remove instead.");return}d&&(d.disabled=!0,d.textContent="Saving\u2026",d.style.opacity="0.7"),l&&(l.textContent="");try{let p=await Xo({tenant_id:t,action:"update",email:e.email,roles:s,triggered_by_user_id:M()});if(!p.ok){l&&(l.textContent=p.error||"Failed to update roles"),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1");return}r.remove(),sa(`Updated roles for ${e.name}.`,"success"),await Qo(t)}catch(p){l&&(l.textContent=p.message),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1")}})},sh=(t,e)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,r.addEventListener("click",i=>{i.target===r&&r.remove()});let a=document.createElement("div");a.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.crimson};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.crimson}; margin-bottom: 4px;">Remove from Team</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${ie(e.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${ie(e.email)} will be removed from all ${e.roleCount} role${e.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${u.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${O} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let i=a.querySelector("#ws-team-remove-error"),s=a.querySelector("#ws-team-remove-submit");s&&(s.disabled=!0,s.textContent="Removing\u2026",s.style.opacity="0.7"),i&&(i.textContent="");try{let l=await Xo({tenant_id:t,action:"remove",email:e.email,triggered_by_user_id:M()});if(!l.ok){i&&(i.textContent=l.error||"Failed to remove"),s&&(s.disabled=!1,s.textContent="Remove from Team",s.style.opacity="1");return}r.remove(),sa(`Removed ${e.name} from the team.`,"success"),await Qo(t)}catch(l){i&&(i.textContent=l.message),s&&(s.disabled=!1,s.textContent="Remove from Team",s.style.opacity="1")}})},lh=89,dh=93,ch=310,ph=34,bh=14,mh=14,hh=3,Jo=t=>{let e=document.querySelector('iframe[name="settings-app"]');if(!e){t.style.right="24px";return}let o=e.getBoundingClientRect(),r=window.innerWidth-o.right+lh;t.style.right=`${Math.max(r,16)}px`},uh=t=>{let e=document.createElement("button");return e.id=Ie,e.type="button",e.style.cssText=`
    position: fixed;
    top: ${dh}px;
    right: 24px;
    width: ${ch}px;
    height: ${ph}px;
    padding: 0 ${mh}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${hh}px;
    font-family: ${u.sans};
    font-size: ${bh}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,e.addEventListener("mouseenter",()=>{e.style.background=n.emeraldBright}),e.addEventListener("mouseleave",()=>{e.style.background=n.emerald}),e.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,e.addEventListener("click",()=>{Qo(t)}),Jo(e),setTimeout(()=>Jo(e),200),setTimeout(()=>Jo(e),800),window.addEventListener("resize",()=>Jo(e)),e},ia=!1,vh=()=>{if(!ia){ia=!0;try{let t=el();if(!t){document.getElementById(Ie)?.remove(),document.getElementById(`${Ie}-floater`)?.remove();return}let e=document.getElementById(Ie);if(e&&e.dataset.tenantId===t.tenantId)return;document.getElementById(`${Ie}-floater`)?.remove();let o=document.createElement("div");o.id=`${Ie}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=uh(t.tenantId);r.dataset.tenantId=t.tenantId,o.appendChild(r),document.body.appendChild(o),c.debug(`[manage-team] mounted (floater) for tenant ${t.tenantId}`)}finally{ia=!1}}},tl=()=>{if(!el()){document.getElementById(Ie)?.remove(),document.getElementById(`${Ie}-floater`)?.remove();return}vh()};var _h="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",ca="ws-crm-prepare-contract-button",ol="ws-crm-prepare-contract-menu",_e="ws-crm-prepare-contract-modal",rl="ws-crm-modal-date-style",fe="https://services.leadconnectorhq.com",dl=()=>{if(document.getElementById(rl))return;let t=document.createElement("style");t.id=rl,t.textContent=`
    #${_e} input[type="date"] { color-scheme: dark; }
    #${_e} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
  `,document.head.appendChild(t)},pa="__WS_CRM_CAPTURED_AUTH",gh=50*60*1e3,or=()=>{try{let t=localStorage.getItem(pa);if(!t)return null;let e=JSON.parse(t);return e?.authorization?Date.now()-(e.capturedAt||0)>gh?(localStorage.removeItem(pa),null):e:null}catch{return null}},yh=t=>{try{localStorage.setItem(pa,JSON.stringify(t))}catch{}},it=()=>{let t=or(),e=window;if(e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{},e.__WS_CRM_DIAG.authChecks=(e.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${e.__WS_CRM_DIAG.authChecks}]`,t?`present (captured ${Date.now()-t.capturedAt}ms ago, ${t.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!t)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:t.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return t.tokenId&&(o["token-id"]=t.tokenId),o},nl=(t,e)=>new Promise(o=>{let r=Date.now(),a=()=>{if((or()?.capturedAt??0)>t)return o(!0);if(Date.now()-r>e)return o(!1);window.setTimeout(a,250)};a()}),at=async(t,e={},o=2)=>{let r=or()?.capturedAt??0,a;try{a={...it(),...e.headers??{}}}catch(s){if(o>0&&await nl(r,4e3))return at(t,e,o-1);throw s}let i=await fetch(t,{...e,headers:a});return i.status!==401||o<=0?i:await nl(r,4e3)?at(t,e,o-1):i},al=!1,fh=()=>{if(al)return;al=!0;let t=window;t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let e=(l,d,p)=>{t.__WS_CRM_DIAG.lastSeenHeaders={url:l,headers:d,source:p};let b=d.authorization||d.Authorization;if(!b){t.__WS_CRM_DIAG.fetchCalls+t.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${p} no-auth]`,{url:l.split("?")[0],headerKeys:Object.keys(d)});return}p==="fetch"?t.__WS_CRM_DIAG.fetchAuthSeen++:t.__WS_CRM_DIAG.xhrAuthSeen++;let h=d["token-id"]||d["Token-Id"]||void 0,m=or()?.authorization;yh({authorization:b,tokenId:h,capturedAt:Date.now()}),m!==b&&(t.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${p}] captured GHL auth from ${l.split("?")[0]} (${b.slice(0,24)}\u2026)`))},o=window.fetch;window.fetch=async function(...l){let d=typeof l[0]=="string"?l[0]:l[0]instanceof URL?l[0].toString():l[0].url,p=l[1]||{};if(d&&d.includes("services.leadconnectorhq.com")){t.__WS_CRM_DIAG.fetchCalls++;let b=p.headers;!b&&l[0]instanceof Request&&(b=l[0].headers);let h={};if(b instanceof Headers)b.forEach((m,_)=>h[_.toLowerCase()]=m);else if(Array.isArray(b))b.forEach(([m,_])=>h[m.toLowerCase()]=_);else if(b&&typeof b=="object")for(let m of Object.keys(b))h[m.toLowerCase()]=b[m];e(d,h,"fetch")}return o.apply(this,l)};let r=XMLHttpRequest.prototype,a=r.open,i=r.setRequestHeader,s=r.send;r.open=function(l,d,...p){return this.__wsCrmUrl=d,this.__wsCrmHeaders={},a.call(this,l,d,...p)},r.setRequestHeader=function(l,d){return this.__wsCrmHeaders&&typeof l=="string"&&(this.__wsCrmHeaders[l.toLowerCase()]=d),i.call(this,l,d)},r.send=function(l){let d=this.__wsCrmUrl,p=this.__wsCrmHeaders;return d&&d.includes("services.leadconnectorhq.com")&&p&&(t.__WS_CRM_DIAG.xhrCalls++,e(d,p,"xhr")),s.call(this,l)},c.debug("[prepare-contract] interceptors installed (fetch + XHR)")},cl=()=>{let t=B();return!t||!t.locationId?null:{contactId:t.contactId,tenantId:t.locationId}},xh=t=>{let e=t.dataset;return e.tenantId&&e.contactId?{tenantId:e.tenantId,contactId:e.contactId,oppId:e.oppId||void 0}:e.tenantId&&e.oppId?{tenantId:e.tenantId,contactId:"",oppId:e.oppId}:cl()},wh=t=>{let e=(t||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(e)||/assignment.*(contract|agreement)/i.test(e)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(e)||/purchase.*(contract|agreement)/i.test(e)?"PA":"passthrough"},pl="__WS_CRM_TEMPLATES_CACHE_V1",kh=24*60*60*1e3,il=t=>{try{let e=window.localStorage.getItem(pl);if(!e)return null;let o=JSON.parse(e);return o.tenantId!==t||Date.now()-o.cachedAt>kh?null:o.templates}catch{return null}},Eh=(t,e)=>{try{let o={tenantId:t,templates:e,cachedAt:Date.now()};window.localStorage.setItem(pl,JSON.stringify(o))}catch{}},Th=async t=>{let e=`${fe}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(t)}&skip=0&limit=10`,o;try{o=await at(e,{method:"GET"})}catch(s){let l=il(t);if(l)return c.info(`[prepare-contract] templates network failure, using cache (${l.length} items)`),l;throw s}if(!o.ok){let s=il(t);if(s)return c.info(`[prepare-contract] templates fetch ${o.status}, using cache (${s.length} items)`),s;let l="";try{l=await o.text()}catch{}let d=l?` \u2014 ${l.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${d}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let i=a.map(s=>({id:(s._id??s.id??s.templateId)||"",name:s.name||s.title||"(unnamed template)",type:wh(s.name||s.title||"")})).filter(s=>!!s.id);return i.length>0&&Eh(t,i),i},Sh=async(t,e)=>{let o=await at(`${fe}/opportunities/pipelines?locationId=${encodeURIComponent(t)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(l=>/acquisition/i.test(l.name));if(!a)throw new Error("No Acquisition pipeline found on tenant");let i=await at(`${fe}/opportunities/search?location_id=${encodeURIComponent(t)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(e)}&status=open&limit=20`,{method:"GET"});if(!i.ok)throw new Error(`ACQ opp search ${i.status}`);return((await i.json()).opportunities||[]).map(l=>({id:l.id,name:l.name||"(unnamed opp)",propertyAddress:l.name||"",updatedAt:l.updatedAt||null})).sort((l,d)=>{let p=l.updatedAt?Date.parse(l.updatedAt):0;return(d.updatedAt?Date.parse(d.updatedAt):0)-p})},Ch=async(t,e)=>{let o=await at(`${fe}/opportunities/pipelines?locationId=${encodeURIComponent(t)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(d=>/marketing\s*tracker/i.test(d.name));if(!a)throw new Error("No Marketing Tracker pipeline found on tenant");let i=await fetch(`${fe}/opportunities/search?location_id=${encodeURIComponent(t)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(e)}&status=open&limit=20`,{method:"GET",headers:it()});if(!i.ok)throw new Error(`MT opp search ${i.status}`);return((await i.json()).opportunities||[]).map(d=>({id:d.id,name:d.name||"(unnamed opp)",propertyAddress:d.name||"",updatedAt:d.updatedAt||null})).sort((d,p)=>{let b=d.updatedAt?Date.parse(d.updatedAt):0;return(p.updatedAt?Date.parse(p.updatedAt):0)-b})},Ah=async t=>{let e=await fetch(_h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,template_id:t.templateId,template_type:t.templateType,opp_id:t.oppId,closing_date:t.closingDate,buyer_earnest_due_date:t.buyerEarnestDueDate,lender_source:t.lenderSource,triggered_by_user_id:t.userId,overrides:t.overrides}),credentials:"omit"});if(!e.ok)throw new Error(`Contract.Stage HTTP ${e.status}`);return await e.json()},$h=async(t,e,o)=>{let r=`${fe}/proposals/templates/to-proposal/${t}/${e}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:it()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let i=await a.json(),s=i._id||i.id||i.proposal?._id||i.proposal?.id;if(!s)throw new Error("to-proposal returned no proposal id");return s},Lh=async(t,e)=>{let o=await fetch(`${fe}/proposals/document/${e}?locationId=${encodeURIComponent(t)}`,{method:"GET",headers:it()});if(!o.ok){let i=await o.text().catch(()=>"");throw new Error(`GET proposal ${e} HTTP ${o.status} ${i.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},Ih=async t=>{let e=await fetch(`${fe}/contacts/${t}`,{method:"GET",headers:it()});if(!e.ok){let a=await e.text().catch(()=>"");throw new Error(`GET contact ${t} HTTP ${e.status} ${a.slice(0,200)}`)}let o=await e.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},Mh=async(t,e,o,r)=>{let a;try{a=await Lh(t,e)}catch(_){return{ok:!1,body:`fetchProposalDocument: ${_.message}`}}let i;try{i=await Ih(o)}catch(_){return{ok:!1,body:`fetchContactBasics: ${_.message}`}}let s=`${i.firstName} ${i.lastName}`.trim()||i.email||o,l={id:o,firstName:i.firstName,lastName:i.lastName,email:i.email,contactName:s,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},b=[...(Array.isArray(a.recipients)?a.recipients:[]).filter(_=>_?.entityName!=="contacts"),l],h={name:r||a.name,locationId:a.locationId||t,pages:a.pages||[],variables:a.variables||[],fillableFields:a.fillableFields||[],timezone:a.timezone||{},recipients:b,grandTotal:a.grandTotal},m=await fetch(`${fe}/proposals/document/${e}`,{method:"PUT",headers:{...it(),"Content-Type":"application/json"},body:JSON.stringify(h)});if(!m.ok){let _=await m.text().catch(()=>"");return{ok:!1,status:m.status,body:_}}return{ok:!0}},Oh=(t,e)=>{let o=`/v2/location/${t}/payments/proposals-estimates/edit/${e}`;window.location.href=o},er="__WS_CRM_PENDING_INSTRUCTIONS",Dh=60*1e3,Hh=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],Ph=t=>{let e=(t||"").toLowerCase();for(let o of Hh)if(e.includes(o.matches.toLowerCase()))return o;return null},Rh=(t,e,o)=>{try{let r={proposalId:t,title:e,bodyHtml:o,ts:Date.now()};localStorage.setItem(er,JSON.stringify(r))}catch{}},Bh=()=>{try{let t=localStorage.getItem(er);if(!t)return null;let e=JSON.parse(t);return!e?.proposalId||!e?.title||!e?.bodyHtml||Date.now()-(e.ts||0)>Dh?(localStorage.removeItem(er),null):e}catch{return null}},Fh=()=>{try{localStorage.removeItem(er)}catch{}},Nh=(t,e)=>{document.getElementById(_e)?.remove();let o=document.createElement("div");o.id=_e,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: min(560px, 92vw);
    max-height: 86vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.emerald};
    border-left: 4px solid ${n.emerald};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  `,r.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 10px;
    ">\u26A0\uFE0F Action Required</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
    ">${te(t)}</div>
    <div style="
      font-size: 13px;
      color: ${n.bone};
      margin-bottom: 20px;
    ">${e}</div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-pc-instructions-ack" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Got it, continue</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},zh=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,Gh=()=>{let t=window.location.pathname.match(zh);if(!t)return;let e=t[1],o=Bh();o&&o.proposalId===e&&(Fh(),window.setTimeout(()=>{Nh(o.title,o.bodyHtml)},600))},sl="ws-crm-prepare-contract-toast",Y=(t,e="info",o=4e3)=>{document.getElementById(sl)?.remove();let r=document.createElement("div");r.id=sl;let a=e==="error"?n.crimson:n.emerald;r.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999999;
    max-width: 380px;
    background: ${n.graphite};
    color: ${n.bone};
    border: 1px solid ${a};
    border-left: 4px solid ${a};
    border-radius: ${v.md};
    font-family: ${u.sans};
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  `,r.textContent=t,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},ll=(t,e)=>new Promise(o=>{document.getElementById(_e)?.remove();let r=document.createElement("div");r.id=_e,r.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${u.sans};
    `;let a=document.createElement("div");a.style.cssText=`
      width: min(520px, 92vw);
      max-height: 80vh;
      overflow-y: auto;
      background: ${n.graphite};
      border: 1px solid ${n.steel};
      border-radius: ${v.lg};
      padding: 24px 28px;
      color: ${n.bone};
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    `;let i=d=>{if(!d)return"";try{return new Date(d).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}catch{return d}},s=t.map(d=>`
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${ve(d.id)}" style="
          display: block;
          width: 100%;
          text-align: left;
          background: ${n.slate};
          border: 1px solid ${n.steel};
          border-radius: ${v.sm};
          padding: 14px 16px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: border-color 0.1s ease, background 0.1s ease;
          color: ${n.bone};
          font-family: ${u.sans};
        ">
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${te(d.propertyAddress||d.name)}</div>
          ${d.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${te(i(d.updatedAt))}</div>`:""}
        </button>
      `).join("");a.innerHTML=`
      <div style="
        font-family: ${u.mono};
        font-size: 10px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${n.emerald};
        margin-bottom: 8px;
      ">Pick a Property</div>
      <div style="
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 4px;
      ">This ${te(e.perspective)} has ${t.length} open deals</div>
      <div style="
        font-size: 12px;
        color: ${n.ash};
        margin-bottom: 16px;
        line-height: 1.4;
      ">Which property is this contract for? The ${te(e.agreementLabel)} will use that opp's data.</div>
      <div>${s}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
        <button id="ws-pc-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${v.sm};
          cursor: pointer;
        ">Cancel</button>
      </div>
    `,r.appendChild(a),document.body.appendChild(r);let l=d=>{r.remove(),o(d)};r.addEventListener("click",d=>{d.target===r&&l(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>l(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.borderColor=n.emerald,d.style.background=n.graphite}),d.addEventListener("mouseleave",()=>{d.style.borderColor=n.steel,d.style.background=n.slate}),d.addEventListener("click",p=>{p.stopPropagation(),p.preventDefault();let b=d.dataset.oppId||"";b&&l(b)})})}),qh=({tenantId:t,contactId:e,template:o,staged:r})=>{document.getElementById(_e)?.remove(),dl();let a=r.debug||{},i=typeof a.propertyAddress=="string"?a.propertyAddress:"",s=typeof a.sellerName=="string"?a.sellerName:"",l=typeof a.purchasePrice=="number"?a.purchasePrice:0,d=typeof a.emd=="number"?a.emd:0,p=typeof a.cashAtClose=="number"?a.cashAtClose:l-d,b=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),h=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),m=typeof a.additionalTerms=="string"?a.additionalTerms:"",_=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",x=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",k=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],y=document.createElement("div");y.id=_e,y.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let g=document.createElement("div");g.style.cssText=`
    width: min(520px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let w=`
    font-family: ${u.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,S=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,C=`${S} text-align: right;`,E=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,f=`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 0;
    border-bottom: 1px solid ${n.steel};
  `,T=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `,$=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    min-width: 0;
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, ${n.ash} 50%), linear-gradient(135deg, ${n.ash} 50%, transparent 50%);
    background-position: calc(100% - 14px) 50%, calc(100% - 8px) 50%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
    padding-right: 28px;
  `,P=V=>['<option value="">(unset)</option>'].concat(k.map(J=>`<option value="${ve(J)}"${J===V?" selected":""}>${te(J)}</option>`)).join("");g.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 8px;
    ">Purchase Agreement \u2014 Review</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">${te(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the ACQ opportunity.</div>

    <div style="margin-bottom: 12px;">
      <div style="${f}">
        <div style="${w}">Property Address</div>
        <div style="${E}">${te(i||"(set on Property record)")}</div>
      </div>
      <div style="${f}">
        <div style="${w}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${ve(s)}" placeholder="Seller name" style="${S}" />
      </div>
      <div style="${f}">
        <div style="${w}">Purchase Price</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${l}" style="${C}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${w}">Earnest Deposit</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${d}" style="${C}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${w}">Cash at Close</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${p}" style="${C}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${w}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${ve(b)}" placeholder="e.g. 30" style="${S}" />
      </div>
      <div style="${f}">
        <div style="${w}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${ve(h)}" placeholder="e.g. 10" style="${S}" />
      </div>
      <div style="${f}">
        <div style="${w}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${$}">${P(_)}</select>
      </div>
      <div style="${f}">
        <div style="${w}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${$}">${P(x)}</select>
      </div>
      <div style="${f} align-items: flex-start;">
        <div style="${w}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${S} resize: vertical; min-height: 60px; font-family: ${u.sans};">${te(m)}</textarea>
      </div>
    </div>
    <div style="
      font-size: 11px;
      color: ${n.coolGray};
      margin: 0 0 14px;
      line-height: 1.4;
    ">Cash at Close = Purchase Price \u2212 Earnest Deposit, auto-recalculated on edit. Type a value to override.</div>

    <div id="ws-pc-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-pc-cancel" type="button" style="
        background: transparent;
        border: 1px solid ${n.steel};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,y.appendChild(g),document.body.appendChild(y);let q=g.querySelector("#ws-pc-purchase-price"),z=g.querySelector("#ws-pc-emd"),N=g.querySelector("#ws-pc-cash-at-close"),R=!1;N?.addEventListener("input",()=>{R=!0});let xe=()=>{if(R)return;let V=Number(q?.value||0),J=Number(z?.value||0);N&&(N.value=String(Math.max(0,V-J)))};q?.addEventListener("input",xe),z?.addEventListener("input",xe);let we=()=>y.remove();y.addEventListener("click",V=>{V.target===y&&we()}),g.querySelector("#ws-pc-cancel")?.addEventListener("click",we);let ee=g.querySelector("#ws-pc-submit"),oe=g.querySelector("#ws-pc-error");ee?.addEventListener("click",async()=>{if(ee){oe&&(oe.textContent=""),ee.disabled=!0,ee.textContent="Opening\u2026";try{let V=(g.querySelector("#ws-pc-seller-name")?.value||"").trim(),J=Number(q?.value||0),dt=Number(z?.value||0),ct=Number(N?.value||0),pt=(g.querySelector("#ws-pc-days-to-close")?.value??"").trim(),bt=(g.querySelector("#ws-pc-inspection-days")?.value??"").trim(),mt=(g.querySelector("#ws-pc-additional-terms")?.value??"").trim(),We=(g.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),ht=(g.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),X={};if(V!==s&&(X.sellerName=V),J!==l&&(X.purchasePrice=J),dt!==d&&(X.emd=dt),ct!==p&&(X.cashAtClose=ct),pt!==b&&(X.daysToClose=pt),bt!==h&&(X.inspectionDays=bt),mt!==m&&(X.additionalTerms=mt),We!==_&&(X.currentOccupancy=We),ht!==x&&(X.occupancyAtClose=ht),Object.keys(X).length>0){c.info("[prepare-contract] PA modal submit with overrides:",X),ee.textContent="Saving\u2026";let mr=M(),hr=await tr({tenantId:t,contactId:e,template:o,userId:mr,overrides:X});c.info("[prepare-contract] re-stage with overrides ok:",hr),ee.textContent="Opening\u2026"}else c.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let Q=i?`${i} - Purchase Agreement`:void 0;await ha(t,e,o,Q)}catch(V){ee.disabled=!1,ee.textContent="Open Contract",oe&&(oe.textContent=V.message||"Failed to open contract."),c.warn("[prepare-contract] PA confirm submit failed:",V)}}})},Uh=({tenantId:t,contactId:e,template:o,oppId:r,staged:a,userId:i,defaultClosingDate:s,defaultEMDDueDate:l})=>{document.getElementById(_e)?.remove(),dl();let d=a.debug||{},p=typeof d.propertyAddress=="string"?d.propertyAddress:"",b=typeof d.sellerDisplay=="string"?d.sellerDisplay:"",h=typeof d.assignmentPrice=="number"?d.assignmentPrice:0,m=typeof d.buyerEMD=="number"?d.buyerEMD:0,_=typeof d.assignmentFee=="number"?d.assignmentFee:0,x=typeof d.acqPurchasePrice=="number"?d.acqPurchasePrice:0,k=typeof d.closingOffice=="string"?d.closingOffice:"",y=typeof d.buyerCompanyName=="string"?d.buyerCompanyName:"",g=s,w=l,S="",C=document.createElement("div");C.id=_e,C.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let E=document.createElement("div");E.style.cssText=`
    width: min(520px, 92vw);
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let f=`
    font-family: ${u.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,T=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,$=`${T} text-align: right;`,P=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,q=`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 0;
    border-bottom: 1px solid ${n.steel};
  `,z=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `;E.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${n.emerald};
      margin-bottom: 8px;
    ">Assignment Agreement \u2014 Review</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">${te(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the source opp (MT/ACQ/Dispo/TC). Closing date, EMD due date, and lender source live only on the contract.</div>

    <div style="margin-bottom: 12px;">
      <div style="${q}">
        <div style="${f}">Property Address</div>
        <div style="${P}">${te(p||"(set on Property record)")}</div>
      </div>
      <div style="${q}">
        <div style="${f}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${ve(b)}" placeholder="Seller name" style="${T}" />
      </div>
      <div style="${q}">
        <div style="${f}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${ve(y)}" placeholder="Buyer's entity / LLC name" style="${T}" />
      </div>
      <div style="${q}">
        <div style="${f}">Assignment Price</div>
        <div style="${z}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${h}" style="${$}" />
        </div>
      </div>
      <div style="${q}">
        <div style="${f}">Buyer Earnest Money</div>
        <div style="${z}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${m}" style="${$}" />
        </div>
      </div>
      <div style="${q}">
        <div style="${f}">Assignment Fee</div>
        <div style="${z}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${_}" style="${$}" />
        </div>
      </div>
      <div style="${q}">
        <div style="${f}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${ve(k)}" placeholder="Title company" style="${T}" />
      </div>
      <div style="${q}">
        <div style="${f}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${ve(g)}" style="${T}" />
      </div>
      <div style="${q}">
        <div style="${f}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${ve(w)}" style="${T}" />
      </div>
      <div style="${q}">
        <div style="${f}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${T}" />
      </div>
    </div>
    <div style="
      font-size: 11px;
      color: ${n.coolGray};
      margin: 0 0 14px;
      line-height: 1.4;
    ">Assignment Fee = Assignment Price \u2212 Original Purchase ($${x.toLocaleString("en-US",{minimumFractionDigits:2})}), auto-recalculated on Price edit. Type a value to override.</div>

    <div id="ws-pc-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-pc-cancel" type="button" style="
        background: transparent;
        border: 1px solid ${n.steel};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,C.appendChild(E),document.body.appendChild(C);let N=E.querySelector("#ws-pc-assignment-price"),R=E.querySelector("#ws-pc-assignment-fee"),xe=!1;R?.addEventListener("input",()=>{xe=!0});let we=()=>{if(xe)return;let J=Number(N?.value||0);R&&(R.value=String(Math.max(0,J-x)))};N?.addEventListener("input",we);let ee=()=>C.remove();C.addEventListener("click",J=>{J.target===C&&ee()}),E.querySelector("#ws-pc-cancel")?.addEventListener("click",ee);let oe=E.querySelector("#ws-pc-submit"),V=E.querySelector("#ws-pc-error");oe?.addEventListener("click",async()=>{if(!oe)return;V&&(V.textContent="");let J=(E.querySelector("#ws-pc-seller-name")?.value||"").trim(),dt=Number(N?.value||0),ct=Number(E.querySelector("#ws-pc-buyer-emd")?.value||0),pt=Number(R?.value||0),bt=(E.querySelector("#ws-pc-closing-office")?.value||"").trim(),mt=(E.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),We=(E.querySelector("#ws-pc-closing-date")?.value||"").trim(),ht=(E.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),X=(E.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!We){V&&(V.textContent="Closing Date is required.");return}oe.disabled=!0,oe.textContent="Opening\u2026";try{let Q={};J!==b&&(Q.sellerName=J),dt!==h&&(Q.assignmentPrice=dt),ct!==m&&(Q.buyerEMD=ct),pt!==_&&(Q.assignmentFee=pt),bt!==k&&(Q.closingOffice=bt),mt!==y&&(Q.buyerCompanyName=mt);let mr=We!==g||ht!==w||X!==S,hr=Object.keys(Q).length>0||mr,ur=a;hr?(c.info("[prepare-contract] AA modal submit, re-staging with overrides:",Q),oe.textContent="Saving\u2026",ur=await tr({tenantId:t,contactId:e,template:o,oppId:r,closingDate:We,buyerEarnestDueDate:ht,lenderSource:X,userId:i,overrides:Object.keys(Q).length>0?Q:void 0}),c.info("[prepare-contract] AA re-stage ok:",ur),oe.textContent="Opening\u2026"):c.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let ka=ur?.debug?.propertyAddress||p,Kl=ka?`${ka} - Assignment Agreement`:void 0;await ha(t,e,o,Kl),ee()}catch(Q){oe.disabled=!1,oe.textContent="Open Contract",V&&(V.textContent=Q.message||"Failed to prepare contract."),c.warn("[prepare-contract] AA submit failed:",Q)}})},tr=async t=>{c.info(`[prepare-contract] staging \u2014 template "${t.template.name}" (${t.template.type})`);let e=await Ah({tenantId:t.tenantId,contactId:t.contactId,templateId:t.template.id,templateType:t.template.type,oppId:t.oppId,closingDate:t.closingDate,buyerEarnestDueDate:t.buyerEarnestDueDate,lenderSource:t.lenderSource,userId:t.userId,overrides:t.overrides});if(c.info(`[prepare-contract] stage response: ok=${e.ok}`,e),!e.ok)throw new Error(e.error||"Contract.Stage returned not ok");return e},ha=async(t,e,o,r)=>{c.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${e}`);let a=await $h(t,o.id,e);c.info(`[prepare-contract] proposal created: ${a}`),c.info(`[prepare-contract] attaching contact ${e} as primary signer${r?`, renaming to "${r}"`:""}`);let i=await Mh(t,a,e,r);i.ok?c.info(`[prepare-contract] contact attached to proposal ${a}`):(c.warn(`[prepare-contract] attach failed (status=${i.status??"n/a"}): ${i.body?.slice(0,300)??"no body"}`),Y(`Proposal created but couldn't auto-attach contact (HTTP ${i.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",i.body));let s=Ph(o.name);s&&(c.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),Rh(a,s.title,s.bodyHtml)),Oh(t,a)},Vh=async t=>{let e=xh(t);if(!e){Y("Could not resolve contact context.","error");return}document.getElementById(ol)?.remove();let o=document.createElement("div");o.id=ol,o.style.cssText=`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 999998;
    min-width: 280px;
    max-width: 360px;
    max-height: 360px;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    padding: 6px 0;
    font-family: ${u.sans};
  `,o.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      padding: 8px 14px 6px;
    ">Loading templates\u2026</div>`,t.appendChild(o);let r=i=>{!o.contains(i.target)&&i.target!==t&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await Th(e.tenantId)}catch(i){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${te(i.message)}
      </div>`;return}if(a.length===0){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.ash}; font-size: 12px;">
        No proposal templates found on this tenant.
      </div>`;return}a.sort((i,s)=>{let l={PA:0,AA:1,passthrough:2};return l[i.type]!==l[s.type]?l[i.type]-l[s.type]:i.name.localeCompare(s.name)}),o.innerHTML="";for(let i of a){let s=document.createElement("button");s.type="button",s.style.cssText=`
      display: block;
      width: 100%;
      background: transparent;
      border: none;
      color: ${n.bone};
      font-family: ${u.sans};
      font-size: 13px;
      text-align: left;
      padding: 10px 14px;
      cursor: pointer;
      transition: background 0.1s ease;
    `;let l=i.type==="PA"?n.emerald:i.type==="AA"?n.blue:n.coolGray;s.innerHTML=`
      <div style="display: flex; align-items: baseline; gap: 8px;">
        <span style="
          font-family: ${u.mono};
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${l};
          flex-shrink: 0;
          min-width: 30px;
        ">${i.type==="passthrough"?"DOC":i.type}</span>
        <span style="flex: 1;">${te(i.name)}</span>
      </div>`,s.addEventListener("mouseenter",()=>{s.style.background=n.slate}),s.addEventListener("mouseleave",()=>{s.style.background="transparent"}),s.addEventListener("click",async d=>{d.stopPropagation(),d.preventDefault(),c.info(`[prepare-contract] template picked: ${i.name} (type=${i.type})`),o.remove(),document.removeEventListener("click",r,!0);let p=M();try{if(i.type==="AA"){let b;if(e.oppId)b=e.oppId,c.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${b} directly`);else{let g;try{g=await Ch(e.tenantId,e.contactId)}catch(w){Y(`Failed to load buyer's MT opps: ${w.message}`,"error",6e3),c.warn("[prepare-contract] AA fetch opps failed:",w);return}if(g.length===0){Y("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if(g.length===1)b=g[0].id,c.info(`[prepare-contract] auto-selected MT opp ${b} (only one)`);else{c.info(`[prepare-contract] showing MT opp picker (${g.length} opps)`);let w=await ll(g,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!w){c.info("[prepare-contract] MT opp picker cancelled");return}b=w,c.info(`[prepare-contract] picked MT opp ${b}`)}}let h=g=>{let w=g.getFullYear(),S=String(g.getMonth()+1).padStart(2,"0"),C=String(g.getDate()).padStart(2,"0");return`${w}-${S}-${C}`},m=g=>{let w=new Date;return w.setDate(w.getDate()+g),h(w)},_=m(45),x=m(7);Y("Reading contract data\u2026","info",2500);let k;try{k=await tr({tenantId:e.tenantId,contactId:e.contactId,template:i,oppId:b,closingDate:_,buyerEarnestDueDate:x,userId:p})}catch(g){Y(`Failed to prepare contract: ${g.message}`,"error",6e3),c.warn("[prepare-contract] AA stage failed:",g);return}let y=e.contactId||k.contact_id||"";if(!y){Y("Could not resolve buyer contact for this opp.","error",6e3);return}Uh({tenantId:e.tenantId,contactId:y,template:i,oppId:b,staged:k,userId:p,defaultClosingDate:_,defaultEMDDueDate:x})}else if(i.type==="PA"){if(!e.contactId){Y("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let b;try{b=await Sh(e.tenantId,e.contactId)}catch(_){Y(`Failed to load ACQ opps: ${_.message}`,"error",6e3),c.warn("[prepare-contract] PA fetch opps failed:",_);return}if(b.length===0){Y("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let h;if(b.length===1)h=b[0].id,c.info(`[prepare-contract] auto-selected ACQ opp ${h} (only one)`);else{c.info(`[prepare-contract] showing ACQ opp picker (${b.length} opps)`);let _=await ll(b,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!_){c.info("[prepare-contract] ACQ opp picker cancelled");return}h=_,c.info(`[prepare-contract] picked ACQ opp ${h}`)}Y("Reading contract data\u2026","info",2500);let m;try{m=await tr({tenantId:e.tenantId,contactId:e.contactId,template:i,oppId:h,userId:p})}catch(_){Y(`Failed to prepare contract: ${_.message}`,"error",6e3),c.warn("[prepare-contract] PA stage failed:",_);return}qh({tenantId:e.tenantId,contactId:e.contactId,template:i,staged:m})}else{if(!e.contactId){Y("This template needs to be started from a contact page.","error",6e3);return}Y(`Opening ${i.name}\u2026`,"info",2500);try{await ha(e.tenantId,e.contactId,i)}catch(b){Y(`Failed to open contract: ${b.message}`,"error",6e3),c.warn("[prepare-contract] passthrough failed:",b)}}}catch(b){c.warn("[prepare-contract] picker click handler failed:",b),Y(`Unexpected error: ${b.message}`,"error",6e3)}}),o.appendChild(s)}},bl=()=>{let t=document.createElement("button");return t.id=ca,t.type="button",t.style.cssText=`${O} position: relative; order: 5;`,t.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,t.addEventListener("mouseenter",()=>{t.style.borderColor=n.emerald}),t.addEventListener("mouseleave",()=>{t.style.borderColor=n.steel}),t.addEventListener("click",e=>{e.stopPropagation(),Vh(t)}),t},Wh="ws-crm-contact-actions-bar",jh=async()=>{let t=cl();if(!t){document.getElementById(ca)?.remove();return}let e=null;try{e=await I(`#${Wh}`,{timeoutMs:3e3})}catch{c.debug("[prepare-contract] actions bar not found within timeout");return}if(!e)return;let o=document.getElementById(ca);if(o){if(o.dataset.contactId===t.contactId)return;o.remove()}let r=bl();r.dataset.contactId=t.contactId,r.dataset.tenantId=t.tenantId,e.appendChild(r),c.debug(`[prepare-contract] mounted for contact ${t.contactId}`)},Ue="ws-crm-prepare-contract-button-opp",Kt=`${Ue}-wrap`,Kh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Yh=/\/v2\/location\/([A-Za-z0-9]+)/,Jh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],ba=()=>{let t=window.location.pathname,e=t.match(Kh);if(!e)return null;let o=t.match(Yh);return o?{oppId:e[1],tenantId:o[1]}:null},Xh=async()=>{for(let t of Jh)try{let e=await I(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Zo=!1,Yt=null,ma=null,la=null,da,Jt=()=>{Yt?.disconnect(),Yt=null,ma=null},Qh=t=>{if(Yt&&ma===t)return;Jt();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(ma=t,Yt=new MutationObserver(()=>{let o=ba();if(!o||o.oppId!==t){Jt();return}let r=H();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ue)?.remove(),document.getElementById(Kt)?.remove(),Jt();return}document.getElementById(Ue)||ml()}),Yt.observe(e,{childList:!0,subtree:!0}))},Zh=()=>{la||(la=new MutationObserver(()=>{da===void 0&&(da=window.setTimeout(()=>{da=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(Ue);t&&!e&&!Zo&&ml()},300))}),la.observe(document.body,{childList:!0,subtree:!0}))},ml=async()=>{if(!Zo){Zo=!0;try{let t=ba();if(!t){document.getElementById(Ue)?.remove(),document.getElementById(Kt)?.remove(),Jt();return}let e=document.getElementById(Ue);if(e&&e.dataset.oppId===t.oppId){let l=H();l!==null&&l!=="Marketing Tracker"&&(e.remove(),document.getElementById(Kt)?.remove(),Jt());return}e&&(e.remove(),document.getElementById(Kt)?.remove());let o=await Xh();if(!o){c.debug("[prepare-contract] opp mount target not found");return}let r=await W();if(r!=="Marketing Tracker"){c.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=ba();if(!a||a.oppId!==t.oppId)return;let i=bl();i.id=Ue,i.dataset.oppId=t.oppId,i.dataset.tenantId=t.tenantId;let s=document.createElement("span");s.id=Kt,s.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),s.appendChild(i),o.appendChild(s),c.debug(`[prepare-contract] mounted on MT opp ${t.oppId} (contactId deferred to click)`),Qh(t.oppId)}finally{Zo=!1}}},hl=()=>{Gh(),jh()};fh();function te(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ve(t){return te(t)}var eu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",Ve="ws-crm-compute-offer-button",_a="ws-crm-compute-offer-popover",wl="ws-crm-offer-modal",ul="ws-crm-contact-actions-bar",tu=[".central-panel","[class*='central-panel']"],Me=t=>typeof t=="number"?`$${Math.round(t).toLocaleString("en-US")}`:"-",ua=t=>{if(typeof t!="number"||Math.round(t)===0)return"$0";let e=`$${Math.abs(Math.round(t)).toLocaleString("en-US")}`;return t<0?`\u2212${e}`:`+${e}`},ou=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vl=t=>{if(!t)return"";let e=String(t).split("-");return e.length!==3?String(t):`${ou[Number(e[1])-1]||""} ${Number(e[2])}`.trim()},F=(t,e,o)=>{let r=document.createElement(t);return e&&(r.style.cssText=e),o!=null&&(r.textContent=o),r},_l=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${u.sans};font-size:12px;outline:none;`,va=async t=>{let e={tenant_id:t.tenantId,mode:t.mode};t.propertyRecordId?e.property_record_id=t.propertyRecordId:t.contactId&&(e.contact_id=t.contactId),t.mode!=="get"&&(t.propertyCondition!=null&&(e.property_condition=t.propertyCondition),t.repairOverride!==void 0&&(e.repair_override=t.repairOverride));let o=await fetch(eu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},st=()=>{document.getElementById(_a)?.remove(),document.removeEventListener("mousedown",kl,!0)};function kl(t){let e=document.getElementById(_a),o=document.getElementById(Ve),r=t.target;e&&!e.contains(r)&&o&&!o.contains(r)&&st()}var El=(t,e)=>{st();let o=t.getBoundingClientRect(),r=document.createElement("div");r.id=_a;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${v.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${u.sans};color:${n.bone};font-size:13px;line-height:1.35;`,e(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",kl,!0),0)},rr=(t,e)=>{El(t,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(F("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(F("div",`color:${n.bone};font-size:12px;`,e))})},ru=(t,e,o)=>{El(t,r=>{r.appendChild(F("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),e.forEach(a=>{let i=F("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${u.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);i.type="button",i.addEventListener("mouseenter",()=>i.style.borderColor=n.blue),i.addEventListener("mouseleave",()=>i.style.borderColor=n.steel),i.addEventListener("click",()=>{st(),o(a.property_record_id)}),r.appendChild(i)})})},nr=()=>{document.getElementById(wl)?.remove(),document.removeEventListener("keydown",Tl,!0)};function Tl(t){t.key==="Escape"&&nr()}var gl=(t,e,o)=>{nr(),st();let r=o,a=!1,i="",s=document.createElement("div");s.id=wl,s.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${u.sans};`,s.addEventListener("mousedown",b=>{b.target===s&&nr()});let l=F("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);s.appendChild(l);let d=(b,h,m)=>{a||(a=!0,i="",p(),va({tenantId:t,propertyRecordId:e,mode:b,propertyCondition:h,repairOverride:m}).then(_=>{_&&_.ok?r={..._,current_offer:_.current_offer??r.current_offer,current_offer_date:_.current_offer_date??r.current_offer_date}:i=_&&_.error||"Request failed."}).catch(_=>{c.error("[compute-offer] worksheet request failed:",_),i="Request failed. Try again."}).finally(()=>{a=!1,p()}))};function p(){let b=r,h=!!b.has_comps;l.innerHTML="";let m=F("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),_=F("div","");_.appendChild(F("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),_.appendChild(F("div",`font-size:12px;color:${n.ash};margin-top:2px;`,b.address||"-"));let x=F("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");x.type="button",x.addEventListener("click",nr),m.append(_,x),l.appendChild(m);let k=F("div","padding:14px 18px 18px;");l.appendChild(k);let y=F("select",_l());(b.rehab_levels||[]).forEach(z=>{let N=document.createElement("option");N.value=z.key,N.textContent=z.label,z.key===(b.tier||b.property_condition)&&(N.selected=!0),y.appendChild(N)}),y.disabled=a,y.addEventListener("change",()=>d("recompute",y.value,g.value.trim()));let g=F("input",_l());g.type="number",g.placeholder="uses the level",g.value=b.repair_override!=null?String(b.repair_override):"",g.disabled=a,g.addEventListener("keydown",z=>{z.key==="Enter"&&g.blur()}),g.addEventListener("change",()=>d("recompute",y.value,g.value.trim()));let w=F("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");w.appendChild(F("div",`font-size:12px;color:${h?n.bone:n.amber};`,h?`Investor comps: $${b.comp_price_per_sqft}/sqft \xB7 ${b.comp_count} comps${b.comp_pull_at?` \xB7 pulled ${vl(b.comp_pull_at)}`:""}`:"No comps pulled yet."));let S=F("button",`flex-shrink:0;padding:6px 12px;border-radius:${v.sm};border:1px solid ${n.blue};background:${h?"transparent":n.blue};color:${h?n.blue:"#fff"};font-family:${u.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":h?"Re-pull Comps":"Pull Comps");S.type="button",S.disabled=a,S.addEventListener("click",()=>d("pull",y.value,g.value.trim())),w.append(S),k.appendChild(w),b.low_confidence&&h&&k.appendChild(F("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${b.comp_count??0} comps in window.`));let C=b.current_offer!=null;k.appendChild(F("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${v.sm};background:${n.slate};border:1px solid ${n.steel};color:${C?n.bone:n.ash};`,C?`Last offer made: ${Me(b.current_offer)}${b.current_offer_date?` \xB7 ${vl(b.current_offer_date)}`:""}`:"No offer made yet."));let E=F("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),f=F("div","");f.appendChild(F("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),f.appendChild(y);let T=F("div","");T.appendChild(F("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),T.appendChild(g),E.append(f,T),k.appendChild(E);let $=F("div",`border-top:1px solid ${n.steel};padding-top:12px;`),P=(z,N,R)=>{let xe=F("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${R?.strong?"font-weight:700;":""}`),we=F("div","");we.appendChild(F("div",`font-size:${R?.strong?"13":"12"}px;color:${n.bone};`,z)),R?.sub&&we.appendChild(F("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,R.sub));let ee=F("div",`font-size:${R?.strong?"15":"12"}px;color:${R?.color||n.bone};white-space:nowrap;`,N);xe.append(we,ee),$.appendChild(xe)};if(h&&b.imv!=null){P("Investor Market Value (IMV)",Me(b.imv)),b.arv!=null&&P("After Repair Value (ARV)",Me(b.arv),{color:n.ash});let z=b.repair_adjustment??0,N=-z,R=b.repair_override?"Repair override":b.property_condition_label||"Repairs";z===0?P(`Repairs (${R})`,"Included",{color:n.ash,sub:`${Me(b.repair_total)} in repairs included at IMV`}):P(`Repairs (${R})`,ua(N),{color:N<0?n.crimson:n.emerald,sub:`${Me(b.repair_total)} total, ${Me(b.baseline_repairs)} included at IMV`}),P("Min. Profit Target",ua(-(b.profit_target??0)),{color:n.ash}),P("Maximum Cash Offer (MAO)",Me(b.mao),{strong:!0,color:n.blue}),P("Target Profit",ua(-(b.ico_delta??0)),{color:n.ash}),P("Initial Cash Offer (ICO)",Me(b.ico),{strong:!0,color:n.blue})}else $.appendChild(F("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));k.appendChild($);let q=F("div",`margin-top:12px;font-size:11px;min-height:14px;color:${i?n.crimson:n.ash};`);q.textContent=a?"Saving\u2026":i||(h?"Saved to the Property.":""),k.appendChild(q)}p(),document.body.appendChild(s),document.addEventListener("keydown",Tl,!0)},yl=(t,e)=>{let o=document.createElement("button");o.type="button",o.id=Ve,o.dataset.contactId=t,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${v.sm};font-family:${u.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=s=>{o.disabled=s,o.style.cursor=s?"default":"pointer";let l=r();l&&(l.textContent=s?"Opening\u2026":"Offer Worksheet")},i=s=>{if(s.needs_property_selection&&s.properties&&s.properties.length){ru(o,s.properties,l=>{a(!0),va({tenantId:e,propertyRecordId:l,mode:"get"}).then(d=>{d.ok&&d.property_record_id?gl(e,d.property_record_id,d):rr(o,d.error||"Couldn't load that property.")}).catch(d=>{c.error("[compute-offer] get failed:",d),rr(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}s.ok&&s.property_record_id?gl(e,s.property_record_id,s):rr(o,s.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{i(await va({tenantId:e,contactId:t,mode:"get"}))}catch(s){c.error("[compute-offer] webhook failed:",s),rr(o,"Request failed. Try again.")}finally{a(!1)}}}),o},nu=async()=>{for(let t of tu)try{let e=await I(t,{timeoutMs:3e3});if(e)return e}catch{}return null},fl=async(t,e)=>{let o=e.querySelector(`#${ul}`);if(!o)try{o=await I(`#${ul}`,{timeoutMs:3e3,root:e})}catch{o=null}return o?(t.style.order="3",o.appendChild(t),!0):!1},xl=()=>{let t=document.querySelectorAll(`#${Ve}`);for(let e=1;e<t.length;e++)t[e].remove()},au=async()=>{let t=B();if(!t||!t.locationId||t.source!=="url"){document.getElementById(Ve)?.remove(),st();return}let e=t.locationId,o=document.getElementById(Ve);if(o&&o.dataset.contactId===t.contactId)return;o&&o.remove(),st();let r="seller";try{r=Ke(await je(t.contactId,e))}catch(d){c.warn("[compute-offer] contact-type fetch threw - defaulting seller:",d)}if(r!=="seller"){c.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(Ve)?.remove();return}let a=await nu();if(!a){c.warn("[compute-offer] no central panel found");return}let i=B();if(!i||i.contactId!==t.contactId)return;let s=yl(t.contactId,e);if(!await fl(s,a)){c.warn("[compute-offer] actions bar not found after waiting");return}xl(),c.debug(`[compute-offer] mounted for ${t.contactId}`);let l=new MutationObserver(()=>{if(B()?.contactId!==t.contactId){l.disconnect();return}if(!document.getElementById(Ve)){let d=yl(t.contactId,e);fl(d,a).then(()=>xl())}});l.observe(a,{childList:!0})},Xt=null,Sl=()=>{let t=B()?.contactId??null;if(Xt&&Xt.id===t)return;let e=au().finally(()=>{Xt?.promise===e&&(Xt=null)});Xt={id:t,promise:e}};var to="reos-theme-stylesheet",xa="reos-theme-fonts",lt=!1,iu=()=>{let t=document.getElementById(xa);t&&t.remove()},su=`
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
  --reos-crimson-glow: rgba(212, 63, 74, 0.12);
  --reos-amber-glow: rgba(232, 163, 60, 0.12);
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
/* v0.10.24: .hl_wrapper--inner \u2014 the inner page-content wrapper
   GHL uses on funnels-websites pages (Funnels, Websites, Stores).
   Ships with bg-color #F2F4F7 (gray-100) which leaks light through
   the whole page area. Force graphite to match the rest of page
   chrome. Tim flagged the Funnels list page first. */
.hl_wrapper--inner,
[class*="hl_wrapper--inner"] {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
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

/* 2-pre. v0.10.23: FIRST-PAINT GRAPHITE GUARD (revised \u2014 scoped).
   The v0.10.22 attempt used a universal descendant rule on
   .platform-ui__highrise + .hr-wrapper-container which broke the
   global app header (those classes appear in the header chrome
   too, not just the page content area). Tim flagged the whole
   header reading white. Scope this guard to ONLY the page-content
   surfaces we know flash \u2014 the .bg-white heading wrapper and the
   .hr-data-table-wrapper family \u2014 using specificity chains that
   still beat Vue scoped CSS, but no universal descendant catchall. */
html body .mx-auto > .bg-white:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body div.bg-white.px-3:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table-wrapper:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table-wrapper-responsive:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table-wrapper-header:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table-wrapper-footer:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table__body:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-table-freezer-wrapper:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-table-header-container:not(#__reos_never_id):not(#__reos_a):not(#__reos_b),
html body .hr-data-table-wrapper [class*="hr-header-lite"]:not(#__reos_never_id):not(#__reos_a):not(#__reos_b) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* 2-post. SOFTPHONE (POWER DIALER) PANEL \u2014 first-paint graphite guard.
   Diagnosed live via /browse 2026-06-14: GHL's softphone is a Vue-
   TELEPORTED panel \u2014 a classless + idless, position:fixed <div> child of
   <body> with an INLINE white background (background-color: rgb(255,255,255);
   it also carries border-radius + box-shadow + a drag transform). It lives
   OUTSIDE #template-power-dialer and OUTSIDE .platform-ui__highrise, so
   neither the Highrise CSS nor the killWhiteInHighriseApp walker ever reach
   it \u2014 it painted solid white on every open until the 800ms theme tick (the
   white -> black -> white flash Tim reported, incl. the "Connect a phone
   number" card). It is the ONLY classless/idless fixed body-div (our own
   chip + version badge have ids; GHL app roots have ids/classes), so match
   it by inline style and pre-paint graphite with !important \u2014 that beats the
   non-important inline white on the FIRST render. dialer-theme-fix.ts then
   fast-paints any inner white surfaces (call-box, onboarding card body). */
html body > div[style*="position: fixed"]:not([id]):not([class]) {
  background-color: var(--reos-graphite) !important;
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
/* v0.18.9: GHL ships sidebar links with the Tailwind utility chain
   'opacity-70 hover:opacity-100'. That gives inactive items a muted look
   (~70% opacity bone) and only the active/hovered item reads as full bone.
   Tim wants consistent typography across every nav item, so we force
   opacity: 1 in every state. Active and hover still stand out because the
   color rules below paint them emerald. */
.sidebar-v2 a,
.sidebar-v2-location a,
aside.default-bg-color a,
[class*="sidebar"] a,
.sidebar-v2 a:hover,
.sidebar-v2-location a:hover,
aside.default-bg-color a:hover,
[class*="sidebar"] a:hover {
  opacity: 1 !important;
}
/* v0.19.5: paint non-active sidebar custom-object icons (inline SVGs
   for Properties, Buy-Box Entries) AND Font Awesome glyphs (the
   Support nav item uses i.fas.fa-life-ring) to bone so they visually
   match the native CDN icons.

   v0.19.4 was wrong: it set color to ash rgb(144,152,163) thinking
   that matched natives. The cascade color value lied \u2014 the native
   CDN icons are <img> tags whose displayed pixels come from the SVG
   file painted with stroke='white' (verified via curl against
   cdn.msgsndr.com/sidebar-v2/icon_calendar.svg). The cascade color on
   an <img> is irrelevant; only the file's baked colors matter. So
   natives ALWAYS render bone-ish white, regardless of cascade.

   Custom-object inline SVGs render via currentColor \u2192 cascade color.
   Font Awesome glyphs render via cascade color too. Both need bone
   to match the native white-baked look.

   Also force opacity:1 because GHL ships an external svg{opacity:.75}
   rule that otherwise renders inline SVGs at 75% \u2014 visibly dimmer
   than native imgs at opacity 1. */
html body .sidebar-v2 a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body .sidebar-v2-location a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body aside.default-bg-color a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body [class*="sidebar"] a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i) {
  color: var(--reos-bone) !important;
  /* v0.32.2: also reset stroke. When you click a custom-object nav item
     (Properties) then navigate away, GHL clears the <a> color inline but leaves
     a stale inline stroke:emerald !important on the icon svg. That stroke
     inherits to the fill-only icon <path>, painting an emerald outline over the
     bone fill ("half lit green"). The path has no inline stroke, so forcing it
     to follow currentColor (now bone) here clears the leftover. Verified live. */
  stroke: currentColor !important;
  opacity: 1 !important;
}
/* v0.19.2: hide GHL's Ask AI top-bar pill. GHL renamed the feature
   internally to "Copilot" while keeping the user-facing "Ask AI" label,
   so v0.19.1's substring selectors (ai-button / ask-ai / askai) missed \u2014
   the real DOM is <a id="hl_header--copilot-icon" aria-label="Ask AI
   Assistant" class="btn btn-circle btn-primary hl_header--copy-link
   !w-auto">. Confirmed via gstack browse DOM inspection. Three redundant
   selectors so we still hit if GHL drops any one of them: the stable ID,
   the aria-label, the class substring. */
#hl_header--copilot-icon,
a[aria-label="Ask AI Assistant"],
[class*="copilot-icon"] {
  display: none !important;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Hidden tabs (per-page noise reduction)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Append-only list of GHL native sub-tabs that wholesalers do not need.
   Each entry uses either a unique GHL ID (when one exists) OR an href
   suffix match (when the ID is too generic to be safe). Add new tabs
   above the closing brace as Tim flags them. */

/* v0.19.3 \u2014 Conversations > Analytics + Settings sub-tabs.
   #tb_conversations-analytics is unique. #tb_settings is too generic
   (GHL likely reuses it across Calendars / Payments / other tab
   strips), so for the Settings tab we use the href-suffix selector \u2014
   scopes correctly to /conversations/settings without risk of hiding
   the Settings tabs on other pages. */
#tb_conversations-analytics,
a[href$="/conversations/analytics"],
a[href$="/conversations/settings"] {
  display: none !important;
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
   kept as safety nets for older GHL builds.
   v0.11.17: dropped the steel border-bottom + GHL's native drop-shadow
   under the header \u2014 Tim's call. The header now blends into the page
   surface below with no visible separator. */
.top-bar,
header.app-header,
header.hl_header,
.hl_header,
[class*="topbar"] {
  background: var(--reos-graphite) !important;
  border-bottom: none !important;
  color: var(--reos-bone) !important;
  box-shadow: none !important;
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

/* v0.10.15: belt-and-suspenders for the .bg-white page-section
   heading wrappers (Inventory + Collections pages: a .bg-white
   div wraps the page title and subtitle, leaking white through
   the page chrome). The .bg-white rule above maps the class,
   but Tailwind utility class order or v-scoped overrides can
   beat it. Pin descendants of bg-white wrappers to bone text
   so the Inventory / Collections heading reads bone, and
   the subtitle (.text-gray-500) flips to ash. */
html body .bg-white:not(#__reos_never_id),
html body div.bg-white:not(#__reos_never_id),
html body [class~="bg-white"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body .bg-white .text-gray-900:not(#__reos_never_id),
html body .bg-white [class*="text-gray-9"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .bg-white .text-gray-500:not(#__reos_never_id),
html body .bg-white [class*="text-gray-5"]:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
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
.hr-input-wrapper,
.hr-input__input,
.hr-input__input-el,
.hr-textarea,
.hr-textarea-wrapper,
.hr-select,
.hr-select-wrapper,
[class*="hr-input"] input,
[class*="hr-select"] {
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  border-radius: 4px !important;
}
/* v0.12.19: hr-input border architecture rewrite. Highrise inputs
   use Naive's state-border pattern: a separate absolutely-positioned
   .hr-input__state-border element (inset: 0; pointer-events: none)
   draws the visible border so focus/hover/error transitions can
   animate without relayout. Default gray-200 idle, blue hover,
   error red \u2014 all driven by Naive CSS vars on the overlay.

   v0.12.17 / v0.12.18 mistake: I painted a border directly on
   .hr-input__input. The state-border overlay was still drawing on
   top of it \u2192 DOUBLE border, with hover still blue (Naive vars
   uncovered).

   v0.12.19 correct architecture:
     .hr-input-wrapper       slate fill, no border, no shadow
       .hr-input__input      slate fill, NO border (overlay handles it)
         .hr-input__state-border   THE visible border layer
                                    idle: steel
                                    hover: steel
                                    focus: emerald (existing rule)
                                    error: crimson (existing rule)
         <input>              transparent, no border, no outline */
html body .hr-input:not(#__reos_never_id),
html body .hr-input-wrapper:not(#__reos_never_id),
html body .hr-input__input:not(#__reos_never_id),
html body .hr-textarea:not(#__reos_never_id),
html body .hr-textarea-wrapper:not(#__reos_never_id),
html body .hr-select:not(#__reos_never_id),
html body .hr-select-wrapper:not(#__reos_never_id),
html body [class*="hr-input-wrapper"]:not(#__reos_never_id),
html body [class*="hr-input__input"]:not(#__reos_never_id) {
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  background-color: var(--reos-slate) !important;
}
/* The state-border overlay \u2014 THE single border layer. */
html body .hr-input__state-border:not(#__reos_never_id),
html body .hr-input .hr-input__state-border:not(#__reos_never_id),
html body .hr-input-wrapper .hr-input__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  border-radius: 4px !important;
}
/* Hover \u2014 pin steel (no blue from Naive's --n-border-hover var). */
html body .hr-input:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input-wrapper:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input__input:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input__input:not(#__reos_never_id):hover ~ .hr-input__state-border,
html body .hr-input__state-border:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}
/* Naive vars on .hr-input \u2014 pin border vars so any rule that reads
   them resolves to steel + emerald canon (not GHL primary blue). */
html body .hr-input:not(#__reos_never_id),
html body .hr-input-wrapper:not(#__reos_never_id),
html body .hr-input__input:not(#__reos_never_id),
html body [class*="hr-input"]:not(#__reos_never_id) {
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-steel) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-box-shadow: none !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-focus-warning: none !important;
  --n-box-shadow-focus-error: none !important;
}
/* Inner <input class="hr-input__input-el"> \u2014 transparent, borderless. */
html body input.hr-input__input-el:not(#__reos_never_id),
html body .hr-input__input > input:not(#__reos_never_id),
html body [class*="hr-input"] > input:not(#__reos_never_id) {
  border: none !important;
  border-color: transparent !important;
  outline: none !important;
  background: transparent !important;
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

/* v0.12.5: .n-tag.hl-success (and sibling .hl-warning / .hl-error /
   .hl-info / .hl-default) \u2014 GHL ships these with inline CSS vars
   --n-color / --n-text-color / --n-border all set to GHL BLUE
   regardless of the semantic class (the .hl-success on Tim's WP
   "SSL Issued" pill had --n-color rgba(21,94,239,0.1) + --n-text-
   color #155EEF, not green). My .n-tag rule (line 1144) paints
   slate/bone directly, but Naive UI internally re-applies
   background-color: var(--n-color) on every Vue tick, fighting
   the CSS canon and flashing visibly. Fix: override the inline
   CSS vars themselves so Naive's INTERNAL rendering picks up
   canon values. No more cascade fight, no more flash. */
html body .n-tag.hl-success:not(#__reos_never_id),
html body [class*="hl-success"].n-tag:not(#__reos_never_id),
html body .n-tag.hr-tag--success:not(#__reos_never_id) {
  --n-color: var(--reos-emerald-glow) !important;
  --n-color-hover: rgba(15, 181, 126, 0.18) !important;
  --n-color-pressed: rgba(15, 181, 126, 0.22) !important;
  --n-text-color: var(--reos-emerald) !important;
  --n-text-color-hover: var(--reos-emerald-bright) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-close-icon-color: var(--reos-emerald) !important;
  --n-close-icon-color-hover: var(--reos-emerald-bright) !important;
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-tag.hl-warning:not(#__reos_never_id),
html body [class*="hl-warning"].n-tag:not(#__reos_never_id),
html body .n-tag.hr-tag--warning:not(#__reos_never_id) {
  --n-color: rgba(232, 163, 60, 0.12) !important;
  --n-color-hover: rgba(232, 163, 60, 0.18) !important;
  --n-text-color: var(--reos-amber) !important;
  --n-text-color-hover: var(--reos-amber) !important;
  --n-border: 1px solid var(--reos-amber) !important;
  --n-close-icon-color: var(--reos-amber) !important;
  background-color: rgba(232, 163, 60, 0.12) !important;
  color: var(--reos-amber) !important;
  border-color: var(--reos-amber) !important;
}
html body .n-tag.hl-error:not(#__reos_never_id),
html body [class*="hl-error"].n-tag:not(#__reos_never_id),
html body .n-tag.hr-tag--error:not(#__reos_never_id) {
  --n-color: rgba(212, 63, 74, 0.12) !important;
  --n-color-hover: rgba(212, 63, 74, 0.18) !important;
  --n-text-color: var(--reos-crimson) !important;
  --n-text-color-hover: var(--reos-crimson) !important;
  --n-border: 1px solid var(--reos-crimson) !important;
  --n-close-icon-color: var(--reos-crimson) !important;
  background-color: rgba(212, 63, 74, 0.12) !important;
  color: var(--reos-crimson) !important;
  border-color: var(--reos-crimson) !important;
}
html body .n-tag.hl-info:not(#__reos_never_id),
html body [class*="hl-info"].n-tag:not(#__reos_never_id),
html body .n-tag.hr-tag--info:not(#__reos_never_id),
html body .n-tag.hr-tag--primary:not(#__reos_never_id) {
  --n-color: rgba(75, 139, 245, 0.12) !important;
  --n-color-hover: rgba(75, 139, 245, 0.18) !important;
  --n-text-color: var(--reos-blue) !important;
  --n-text-color-hover: var(--reos-blue) !important;
  --n-border: 1px solid var(--reos-blue) !important;
  --n-close-icon-color: var(--reos-blue) !important;
  background-color: rgba(75, 139, 245, 0.12) !important;
  color: var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}
/* Content + icon inside any .hl-* tag \u2014 inherit the variant color
   via CSS so the inline color: bone from older coercers gets beaten
   AND the flash stops (no cascade fight). */
html body .n-tag.hl-success:not(#__reos_never_id) .n-tag__content,
html body .n-tag.hl-success:not(#__reos_never_id) .n-tag__content *,
html body .n-tag.hl-success:not(#__reos_never_id) svg,
html body .n-tag.hl-success:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
html body .n-tag.hl-warning:not(#__reos_never_id) .n-tag__content,
html body .n-tag.hl-warning:not(#__reos_never_id) .n-tag__content *,
html body .n-tag.hl-warning:not(#__reos_never_id) svg,
html body .n-tag.hl-warning:not(#__reos_never_id) svg path {
  color: var(--reos-amber) !important;
  -webkit-text-fill-color: var(--reos-amber) !important;
  stroke: var(--reos-amber) !important;
}
html body .n-tag.hl-error:not(#__reos_never_id) .n-tag__content,
html body .n-tag.hl-error:not(#__reos_never_id) .n-tag__content *,
html body .n-tag.hl-error:not(#__reos_never_id) svg,
html body .n-tag.hl-error:not(#__reos_never_id) svg path {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}
html body .n-tag.hl-info:not(#__reos_never_id) .n-tag__content,
html body .n-tag.hl-info:not(#__reos_never_id) .n-tag__content *,
html body .n-tag.hl-info:not(#__reos_never_id) svg,
html body .n-tag.hl-info:not(#__reos_never_id) svg path,
html body .n-tag.hr-tag--primary:not(#__reos_never_id) .n-tag__content,
html body .n-tag.hr-tag--primary:not(#__reos_never_id) .n-tag__content * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
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
/* v0.12.11: row-level background. WordPress \u2192 Domains table was
   rendering the LAST ROW td (.n-data-table-td--last-row) on a white
   tr background \u2014 the td is transparent so the parent's white bled
   through. Pin .n-data-table-tr graphite directly and force the
   --last-row td to graphite too as belt-and-suspenders so Vue scoped
   CSS can't paint it. */
html body .n-data-table-tr.n-data-table-tr:not(#__reos_never_id),
html body tr.n-data-table-tr.n-data-table-tr:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body .n-data-table-td.n-data-table-td--last-row:not(#__reos_never_id),
html body .n-data-table-td.n-data-table-td--last-col:not(#__reos_never_id),
html body td.n-data-table-td.n-data-table-td--last-row:not(#__reos_never_id) {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
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
/* v0.10.10: kill outline + box-shadow on the .hr-button host
   (not just the inner __border / __state-border overlays).
   The icon-only delete buttons in Reminder Settings render with
   a visible 2-3px crimson ring at a 2-3px gap from the button
   body on hover \u2014 that's a Tailwind focus-ring-style box-shadow
   stacked OUTSIDE the .__border overlay. Hide all rings + outlines
   at every state. */
html body .hr-button:not(#__reos_never_id),
html body .hr-button:hover:not(#__reos_never_id),
html body .hr-button:focus:not(#__reos_never_id),
html body .hr-button:focus-visible:not(#__reos_never_id),
html body .hr-button:focus-within:not(#__reos_never_id),
html body .hr-button:active:not(#__reos_never_id) {
  box-shadow: none !important;
  outline: none !important;
  outline-offset: 0 !important;
}

/* Decorative border overlays (Naive UI pattern, mirrored in HR).
   v0.10.9: collapse the double-border. The .hr-button__border and
   .hr-button__state-border render as TWO concentric 1px borders
   at slightly different inset offsets, reading as a 2px ring with
   a visible gap on hover (Tim flagged the trash icon button in
   Reminder Settings: emerald outer ring around the slate button
   body, looked detached). Show ONLY .__border (steel default \u2192
   emerald on interact); pin .__state-border transparent at every
   state. */
html body .hr-button .hr-button__border:not(#__reos_never_id) {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
html body .hr-button .hr-button__state-border:not(#__reos_never_id) {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .hr-button:hover .hr-button__border:not(#__reos_never_id),
html body .hr-button:focus-visible .hr-button__border:not(#__reos_never_id),
html body .hr-button.ui-active-btn .hr-button__border:not(#__reos_never_id) {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hr-button:hover .hr-button__state-border:not(#__reos_never_id),
html body .hr-button:focus-visible .hr-button__state-border:not(#__reos_never_id),
html body .hr-button.ui-active-btn .hr-button__state-border:not(#__reos_never_id) {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* Trash / delete icon-only .hr-button \u2014 destructive canon.
   v0.10.11 (revised): Tim's call \u2014 ONLY the icon turns crimson
   on hover. The border stays steel at every state (no destructive
   color flash on the border, no emerald hover lift). The icon
   color alone signals destructive intent. Also drops the SVG
   fill override that was solid-filling outline-only trash icons
   (the icon shape went from outline to opaque crimson block).
   Stroke + color only, so paths with stroke=currentColor
   pick up crimson while inner negative space stays transparent. */
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) svg,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) svg path,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) svg,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) svg path,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) svg,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) svg path,
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) svg,
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}
/* Pin .__border to steel on hover for trash buttons (override
   the v0.10.9 emerald hover above, AND any GHL native red ring). */
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) .hr-button__border,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) .hr-button__border,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) .hr-button__border,
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) .hr-button__border {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) .hr-button__state-border,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) .hr-button__state-border,
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) .hr-button__state-border,
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) .hr-button__state-border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* Host button border + box-shadow on hover for trash buttons \u2014
   pin to steel + no shadow (kill any GHL native red ring or
   focus-shadow halo). */
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]),
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]),
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]),
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) {
  border-color: var(--reos-steel) !important;
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

/* v0.11.8: tag-agnostic trash hover. Tim flagged the contact-detail
   page delete button \u2014 it's an <i> tag with id=delete-contact-trigger
   aria-label="Delete contact", not a button. So the v0.10.11
   button[...] selectors skipped it and the SVG never went crimson
   on hover. Cover ANY element with a trash-shaped SVG path, OR
   id/aria-label/title containing delete/remove/trash. */
html body :not(#__reos_never_id):hover:has(> svg path[d*="M9 3h6"]) svg,
html body :not(#__reos_never_id):hover:has(> svg path[d*="M9 3h6"]) svg path,
html body :not(#__reos_never_id):hover:has(> svg path[d*="M16 6v"]) svg,
html body :not(#__reos_never_id):hover:has(> svg path[d*="M16 6v"]) svg path,
html body :not(#__reos_never_id):hover:has(> svg path[d*="M3 6h18"]) svg,
html body :not(#__reos_never_id):hover:has(> svg path[d*="M3 6h18"]) svg path,
html body [id*="delete" i]:not(#__reos_never_id):hover svg,
html body [id*="delete" i]:not(#__reos_never_id):hover svg path,
html body [id*="remove" i]:not(#__reos_never_id):hover svg,
html body [id*="remove" i]:not(#__reos_never_id):hover svg path,
html body [id*="trash" i]:not(#__reos_never_id):hover svg,
html body [id*="trash" i]:not(#__reos_never_id):hover svg path,
html body [aria-label*="Delete" i]:not(#__reos_never_id):hover svg,
html body [aria-label*="Delete" i]:not(#__reos_never_id):hover svg path,
html body [aria-label*="Remove" i]:not(#__reos_never_id):hover svg,
html body [aria-label*="Remove" i]:not(#__reos_never_id):hover svg path,
html body [aria-label*="Trash" i]:not(#__reos_never_id):hover svg,
html body [aria-label*="Trash" i]:not(#__reos_never_id):hover svg path,
html body [title*="Delete" i]:not(#__reos_never_id):hover svg,
html body [title*="Delete" i]:not(#__reos_never_id):hover svg path,
html body [title*="Remove" i]:not(#__reos_never_id):hover svg,
html body [title*="Remove" i]:not(#__reos_never_id):hover svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}
/* Also handle when the trigger itself shows hover state but the SVG
   is nested deeper (i > svg > path), use descendant combinator. */
html body [id*="delete" i]:not(#__reos_never_id):hover,
html body [aria-label*="Delete" i]:not(#__reos_never_id):hover,
html body [id*="remove" i]:not(#__reos_never_id):hover,
html body [aria-label*="Remove" i]:not(#__reos_never_id):hover,
html body [id*="trash" i]:not(#__reos_never_id):hover,
html body [aria-label*="Trash" i]:not(#__reos_never_id):hover {
  color: var(--reos-crimson) !important;
}
/* v0.10.11: aria-label / id-based catchall for delete buttons.
   Tim's Reminder Settings delete buttons render with a crimson
   2-3px border on hover (likely from a GHL native destructive
   skin attached via id or aria-label). Pin border to steel at
   every state for ANY button identified as a "delete" affordance
   via id, aria-label, or title \u2014 and keep only the icon crimson. */
html body button[id*="delete" i]:not(#__reos_never_id),
html body button[id*="delete" i]:hover:not(#__reos_never_id),
html body button[id*="remove" i]:not(#__reos_never_id),
html body button[id*="remove" i]:hover:not(#__reos_never_id),
html body button[aria-label*="Delete" i]:not(#__reos_never_id),
html body button[aria-label*="Delete" i]:hover:not(#__reos_never_id),
html body button[aria-label*="Remove" i]:not(#__reos_never_id),
html body button[aria-label*="Remove" i]:hover:not(#__reos_never_id),
html body button[title*="Delete" i]:not(#__reos_never_id),
html body button[title*="Delete" i]:hover:not(#__reos_never_id),
html body button[title*="Remove" i]:not(#__reos_never_id),
html body button[title*="Remove" i]:hover:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
  outline-offset: 0 !important;
}
/* Inner border overlays for those delete buttons \u2014 steel default,
   transparent state-border at every state. No crimson ring. */
html body button[id*="delete" i] .hr-button__border,
html body button[id*="delete" i]:hover .hr-button__border,
html body button[id*="remove" i] .hr-button__border,
html body button[id*="remove" i]:hover .hr-button__border,
html body button[aria-label*="Delete" i] .hr-button__border,
html body button[aria-label*="Delete" i]:hover .hr-button__border,
html body button[aria-label*="Remove" i] .hr-button__border,
html body button[aria-label*="Remove" i]:hover .hr-button__border,
html body button[id*="delete" i] .n-button__border,
html body button[id*="delete" i]:hover .n-button__border,
html body button[aria-label*="Delete" i] .n-button__border,
html body button[aria-label*="Delete" i]:hover .n-button__border {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
html body button[id*="delete" i] .hr-button__state-border,
html body button[id*="delete" i]:hover .hr-button__state-border,
html body button[id*="remove" i] .hr-button__state-border,
html body button[id*="remove" i]:hover .hr-button__state-border,
html body button[aria-label*="Delete" i] .hr-button__state-border,
html body button[aria-label*="Delete" i]:hover .hr-button__state-border,
html body button[aria-label*="Remove" i] .hr-button__state-border,
html body button[aria-label*="Remove" i]:hover .hr-button__state-border,
html body button[id*="delete" i] .n-button__state-border,
html body button[id*="delete" i]:hover .n-button__state-border,
html body button[aria-label*="Delete" i] .n-button__state-border,
html body button[aria-label*="Delete" i]:hover .n-button__state-border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* Icon inside delete buttons: ash at rest \u2192 crimson on hover. */
html body button[id*="delete" i]:not(#__reos_never_id) svg,
html body button[id*="delete" i]:not(#__reos_never_id) svg path,
html body button[id*="remove" i]:not(#__reos_never_id) svg,
html body button[id*="remove" i]:not(#__reos_never_id) svg path,
html body button[aria-label*="Delete" i]:not(#__reos_never_id) svg,
html body button[aria-label*="Delete" i]:not(#__reos_never_id) svg path,
html body button[aria-label*="Remove" i]:not(#__reos_never_id) svg,
html body button[aria-label*="Remove" i]:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body button[id*="delete" i]:hover:not(#__reos_never_id) svg,
html body button[id*="delete" i]:hover:not(#__reos_never_id) svg path,
html body button[id*="remove" i]:hover:not(#__reos_never_id) svg,
html body button[id*="remove" i]:hover:not(#__reos_never_id) svg path,
html body button[aria-label*="Delete" i]:hover:not(#__reos_never_id) svg,
html body button[aria-label*="Delete" i]:hover:not(#__reos_never_id) svg path,
html body button[aria-label*="Remove" i]:hover:not(#__reos_never_id) svg,
html body button[aria-label*="Remove" i]:hover:not(#__reos_never_id) svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* v0.10.14: data-reos-trash catchall \u2014 applied by the
   markTrashButtons() JS coercer to ANY button whose inner SVG
   matches a trash-can shape signature OR whose class/id/aria
   contains delete/remove/trash. This catches the "default
   reminder trash cans" Tim flagged that didn't match the
   id/aria-label selectors \u2014 same canon (transparent bg, steel
   border, ash icon at rest, crimson icon on hover, NO border
   color change on hover). */
html body button[data-reos-trash="true"]:not(#__reos_never_id),
html body button[data-reos-trash="true"]:hover:not(#__reos_never_id),
html body button[data-reos-trash="true"]:focus:not(#__reos_never_id),
html body button[data-reos-trash="true"]:focus-visible:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
  outline-offset: 0 !important;
}
/* Inner __border / __state-border overlays \u2014 pin to steel /
   transparent at every state. */
html body button[data-reos-trash="true"] .hr-button__border:not(#__reos_never_id),
html body button[data-reos-trash="true"]:hover .hr-button__border:not(#__reos_never_id),
html body button[data-reos-trash="true"] .n-button__border:not(#__reos_never_id),
html body button[data-reos-trash="true"]:hover .n-button__border:not(#__reos_never_id) {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
html body button[data-reos-trash="true"] .hr-button__state-border:not(#__reos_never_id),
html body button[data-reos-trash="true"]:hover .hr-button__state-border:not(#__reos_never_id),
html body button[data-reos-trash="true"] .n-button__state-border:not(#__reos_never_id),
html body button[data-reos-trash="true"]:hover .n-button__state-border:not(#__reos_never_id) {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* Icon \u2014 ash resting, crimson hover. Stroke + color only (no fill
   so outline icons stay outline-only). */
html body button[data-reos-trash="true"]:not(#__reos_never_id) svg,
html body button[data-reos-trash="true"]:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body button[data-reos-trash="true"]:hover:not(#__reos_never_id) svg,
html body button[data-reos-trash="true"]:hover:not(#__reos_never_id) svg path {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* .n-button trash buttons \u2014 same canon (steel border, only icon
   flips crimson). Override the line-1306 emerald hover for trash. */
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) .n-button__border,
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) .n-button__border,
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) .n-button__border,
html body .n-button:not(#__reos_never_id):hover:has([class*="trash"]) .n-button__border {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]) .n-button__state-border,
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]) .n-button__state-border,
html body .n-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]) .n-button__state-border,
html body .n-button:not(#__reos_never_id):hover:has([class*="trash"]) .n-button__state-border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
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

/* v0.10.25 / v0.12.23: .hr-button--primary (without -type) \u2014 the
   Funnels page "New funnel" + "Add new step or import" buttons use
   .hr-button--default-type combined with .hr-button--primary as an
   emphasis modifier (NOT .hr-button--primary-type).

   v0.12.23: flipped text from OBSIDIAN to BONE. Obsidian (#0A0D12)
   on emerald reads as near-black-on-green \u2014 heavy and looks like
   a contrast accident. Bone (#EDEEF0) on emerald is the standard
   "primary CTA" pattern and reads cleanly. */
html body .hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id),
html body button.hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id) {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-color-pressed: var(--reos-emerald) !important;
  --n-color-focus: var(--reos-emerald-bright) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald-bright) !important;
  background-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__border,
html body .hr-button.hr-button--primary:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__state-border {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}

/* v0.10.25: .hr-button--secondary + .hr-button--icon-only (the
   create-folder icon button on Funnels page). Currently renders
   slate bg + cool-gray border \u2014 Tim's call: transparent bg, steel
   border, ash icon at rest; emerald icon + border on hover. */
html body .hr-button.hr-button--secondary:not(#__reos_never_id),
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id),
html body button.hr-button.hr-button--secondary.hr-button--icon-only:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-text-color: var(--reos-ash) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  background-color: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-ash) !important;
}
html body .hr-button.hr-button--secondary:not(#__reos_never_id):hover,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id):hover {
  background-color: transparent !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
/* v0.10.27: drop fill: see clock-icon fix above. These secondary /
   icon-only buttons host stroke-only SVG icons (folder, search,
   etc.) \u2014 setting fill here filled them solid, hiding outline
   details. Stroke + color only. */
html body .hr-button.hr-button--secondary:not(#__reos_never_id) svg,
html body .hr-button.hr-button--secondary:not(#__reos_never_id) svg path,
html body .hr-button.hr-button--secondary:not(#__reos_never_id) i,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id) svg,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id) svg path,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id) i {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .hr-button.hr-button--secondary:not(#__reos_never_id):hover svg,
html body .hr-button.hr-button--secondary:not(#__reos_never_id):hover svg path,
html body .hr-button.hr-button--secondary:not(#__reos_never_id):hover i,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id):hover svg,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id):hover svg path,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id):hover i {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Inner overlays for these \u2014 kill state-border ring (single visible
   border only). */
html body .hr-button.hr-button--secondary:not(#__reos_never_id) .hr-button__border,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id) .hr-button__border {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-button.hr-button--secondary:not(#__reos_never_id):hover .hr-button__border,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id):hover .hr-button__border {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hr-button.hr-button--secondary:not(#__reos_never_id) .hr-button__state-border,
html body .hr-button.hr-button--icon-only:not(.quaternary):not(#__reos_never_id) .hr-button__state-border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

/* v0.10.25: .hr-radio-button.hr-content-switcher (view-mode toggle
   on Funnels \u2014 clock / list buttons). Tim wants them transparent
   at rest with steel border; active state gets emerald border +
   subtle emerald-glow fill. */
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id),
html body label.hr-radio-button.hr-content-switcher:not(#__reos_never_id) {
  background-color: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-ash) !important;
}
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id):hover {
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
html body .hr-radio-button.hr-content-switcher.hr-radio-button--checked:not(#__reos_never_id),
html body label.hr-radio-button.hr-content-switcher.hr-radio-button--checked:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
/* v0.10.27: stroke-only icons (the clock + list SVGs in the
   view-toggle ship with fill=none + stroke=currentColor). Setting
   fill here filled the whole clock shape solid ash, hiding the
   inner hands. Drop fill entirely \u2014 let the SVG's fill=none
   attribute hold; color + stroke do the work. */
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id) i,
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id) svg,
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id):hover i,
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id):hover svg,
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id):hover svg path,
html body .hr-radio-button.hr-content-switcher.hr-radio-button--checked:not(#__reos_never_id) i,
html body .hr-radio-button.hr-content-switcher.hr-radio-button--checked:not(#__reos_never_id) svg,
html body .hr-radio-button.hr-content-switcher.hr-radio-button--checked:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Kill the inner state-border overlay on these switchers. */
html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id) .hr-radio-button__state-border {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

/* v0.10.25: .hr-header-lite-left / .hr-header-lite-icon-item \u2014
   transparent so the parent wrapper graphite shows through (the
   Funnels page header-lite was painting these slate from the
   field-label coercer). */
html body .hr-header-lite-left:not(#__reos_never_id),
html body .hr-header-lite-right:not(#__reos_never_id),
html body .hr-header-lite-icon-item:not(#__reos_never_id),
html body .hr-header-lite-content:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border-color: transparent !important;
}
/* v0.12.22: OUTER header-lite container (-v2 variant). GHL ships
   this on newer pages (Funnel steps card etc.) with a pale-lavender
   bg via Vue scoped CSS. Pin graphite explicitly so layout-slot
   children (which are transparent above) show graphite, not lavender. */
html body .hr-header-lite-container:not(#__reos_never_id),
html body .hr-header-lite-container-v2:not(#__reos_never_id),
html body [id^="hr-header-lite-v-"]:not(#__reos_never_id),
html body [class*="hr-header-lite-container"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

/* v0.12.25: .steps-sidebar \u2014 the funnel-builder's left-rail card
   wrapping the "Funnel steps" header + steps list + "Add new step"
   button. Vue scoped rule paints it pale lavender. Direct ID-level
   override. Also paint .steps-list (the scroll container) and
   .border-t-slate-200 dividers (Tailwind slate-200 \u2192 steel). */
html body #steps-sidebar:not(#__reos_never_id),
html body .steps-sidebar:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
html body #steps-sidebar:not(#__reos_never_id) .p-4,
html body #steps-sidebar:not(#__reos_never_id) .p-2,
html body .steps-sidebar:not(#__reos_never_id) .p-4,
html body .steps-sidebar:not(#__reos_never_id) .p-2,
html body #steps-sidebar:not(#__reos_never_id) .overflow-auto,
html body .steps-sidebar:not(#__reos_never_id) .overflow-auto,
html body .steps-list:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
/* The two horizontal divider hairlines between header / steps /
   button \u2014 Tailwind border-t-slate-200 \u2192 steel. */
html body .border-t-slate-200:not(#__reos_never_id),
html body [class*="border-t-slate-200"]:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
}

/* v0.12.26: Pendo survey/guide modals. Pendo injects feedback polls
   with all colors set inline (white container, blue primary button,
   gray rating buttons, black text). Inline styles don't carry
   !important so our CSS !important wins. Re-skin to canon. */
html body #pendo-guide-container:not(#__reos_never_id),
html body [id^="pendo-guide-container"]:not(#__reos_never_id),
html body ._pendo-step-container-styles:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 2px solid var(--reos-emerald) !important;
  box-shadow: 0 0 20px rgba(15, 181, 126, 0.2) !important;
  color: var(--reos-bone) !important;
}
/* All text inside Pendo guides \u2014 bone for headings, ash for
   paragraph / muted helper text. Pendo wraps text in nested div+p
   elements with inline color: rgb(0,0,0) / rgb(71,84,103). */
html body #pendo-guide-container:not(#__reos_never_id) .bb-text,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-text"],
html body #pendo-guide-container:not(#__reos_never_id) p,
html body #pendo-guide-container:not(#__reos_never_id) strong,
html body #pendo-guide-container:not(#__reos_never_id) .bb-text * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Muted helper text \u2014 "Only visible to agency admins", scale labels. */
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-text-paragraph,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-number-scale-poll"][class*="-description"] {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Rating buttons (1-5). Pendo paints them gray bg + black text inline. */
html body #pendo-guide-container:not(#__reos_never_id) label.pendo-radio,
html body #pendo-guide-container:not(#__reos_never_id) label[class*="_pendo-number-scale-poll"],
html body #pendo-guide-container:not(#__reos_never_id) label[class*="_pendo-nps-poll"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  cursor: pointer !important;
  transition: border-color 0.15s ease, background-color 0.15s ease !important;
}
html body #pendo-guide-container:not(#__reos_never_id) label.pendo-radio:hover,
html body #pendo-guide-container:not(#__reos_never_id) label[class*="_pendo-number-scale-poll"]:hover,
html body #pendo-guide-container:not(#__reos_never_id) label[class*="_pendo-nps-poll"]:hover {
  background-color: var(--reos-steel) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Selected rating (radio :checked + label sibling). */
html body #pendo-guide-container:not(#__reos_never_id) input.pendo-radio:checked + label,
html body #pendo-guide-container:not(#__reos_never_id) input[type="radio"]:checked + label {
  background-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border-color: var(--reos-emerald) !important;
}
/* Open-text feedback textarea. */
html body #pendo-guide-container:not(#__reos_never_id) textarea,
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-open-text-poll-input,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-open-text-poll-input"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  caret-color: var(--reos-emerald) !important;
}
html body #pendo-guide-container:not(#__reos_never_id) textarea::placeholder {
  color: var(--reos-cool-gray) !important;
  -webkit-text-fill-color: var(--reos-cool-gray) !important;
}
html body #pendo-guide-container:not(#__reos_never_id) textarea:focus {
  border-color: var(--reos-emerald) !important;
  outline: none !important;
}
/* Secondary "Skip for Now" button (white bg + dark text + gray border
   inline). Repaint slate + bone + steel. */
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-button-secondaryButton,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-button-secondaryButton"],
html body #pendo-guide-container:not(#__reos_never_id) .bb-button[id*="secondary"] {
  background-color: var(--reos-slate) !important;
  background-image: none !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-button-secondaryButton:hover,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-button-secondaryButton"]:hover {
  background-color: var(--reos-steel) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Primary "Submit" button \u2014 flip GHL blue to emerald. */
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-button-primaryButton,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-button-primaryButton"] {
  background-color: var(--reos-emerald) !important;
  background-image: none !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-emerald) !important;
}
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-button-primaryButton:hover,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-button-primaryButton"]:hover {
  background-color: var(--reos-emerald-bright) !important;
  border-color: var(--reos-emerald-bright) !important;
}
/* Close button (\xD7) in top-right corner. */
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-close-guide,
html body #pendo-guide-container:not(#__reos_never_id) [id^="pendo-close-guide"] {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  background-color: transparent !important;
  background-image: none !important;
}
html body #pendo-guide-container:not(#__reos_never_id) ._pendo-close-guide:hover,
html body #pendo-guide-container:not(#__reos_never_id) [id^="pendo-close-guide"]:hover {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
}

/* v0.12.22: .hr-text \u2014 Highrise/Naive paragraph component used for
   headings like "Funnel steps". Default --n-text-color resolves
   gray-900 (invisible on dark bg). Pin bone on the .hr-text family
   so heading text always reads. */
html body .hr-text:not(#__reos_never_id),
html body p.hr-text:not(#__reos_never_id),
html body [class*="hr-text"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
}

/* v0.12.22: .hr-icon-inner wrappers with inline color: blue
   override. The Funnel-steps "Add step" card's check-circle icon
   ships an <i class="hr-icon-inner" style="color: blue;"> with the
   SVG inside using class="stroke-green-500". The inline color:
   blue beats stroke-green-500 (which uses currentColor via stroke).
   Pin emerald on the .hr-icon-inner so currentColor inherits to
   the SVG's stroke. */
html body i.hr-icon-inner:not(#__reos_never_id),
html body .hr-icon-inner:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
}
html body .hr-icon-inner:not(#__reos_never_id) svg,
html body .hr-icon-inner:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* v0.10.28: .hr-breadcrumb-item \u2014 the home/folder breadcrumb chip
   on the Funnels page (and likely Inventory / Collections breadcrumb
   trails). Was rendering with slate bg from the field-label coercer.
   Transparent at rest; ash icon \u2192 emerald on hover. */
html body .hr-breadcrumb:not(#__reos_never_id),
html body .hr-breadcrumb-item:not(#__reos_never_id),
html body .hr-breadcrumb-item__link:not(#__reos_never_id),
html body .hr-breadcrumb-item__separator:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: var(--reos-ash) !important;
}
html body .hr-breadcrumb-item:not(#__reos_never_id) i,
html body .hr-breadcrumb-item:not(#__reos_never_id) svg,
html body .hr-breadcrumb-item:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .hr-breadcrumb-item.hr-breadcrumb-item--clickable:not(#__reos_never_id):hover,
html body .hr-breadcrumb-item.hr-breadcrumb-item--clickable:not(#__reos_never_id):hover .hr-breadcrumb-item__link {
  color: var(--reos-emerald) !important;
  cursor: pointer !important;
}
html body .hr-breadcrumb-item.hr-breadcrumb-item--clickable:not(#__reos_never_id):hover i,
html body .hr-breadcrumb-item.hr-breadcrumb-item--clickable:not(#__reos_never_id):hover svg,
html body .hr-breadcrumb-item.hr-breadcrumb-item--clickable:not(#__reos_never_id):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
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

/* 18a-hr-data-table-divider (v0.9.20). The hr-data-table-th
   header row had border-top: 1px solid rgb(234, 236, 240)
   (gray-200) \u2014 that's the divider line between the filter-bar
   and the column headers. Flip to steel. .hr-data-table-thead
   also shipped bg: rgb(250, 250, 252) (near-white) \u2014 paint
   graphite so the header strip blends. */
html body th.hr-data-table-th:not(#__reos_never_id),
html body .hr-data-table-th:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
}
html body .hr-data-table-thead:not(#__reos_never_id),
html body thead.hr-data-table-thead:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
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
/* The .ui-table-container sibling below .ui-table-custom-header
   (which wraps the filter-bar) ships with white bg by default.
   Match graphite to extend the dark panel through the table
   area beneath the filter-bar. */
html body .ui-table-container:not(#__reos_never_id),
html body .ui-table-container__wrapper .ui-table-container:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
/* Divider between .ui-table-custom-header and .ui-table-container
   (if rendered as a border). */
html body .ui-table-custom-header:not(#__reos_never_id) {
  border-bottom-color: var(--reos-steel) !important;
}

/* 18a-messaging-label-overrides (v0.9.23). Per-label theme
   overrides on Phone System \u2192 Messaging tab:
     #SettingTexasSmsBlock p \u2014 'Block any SMS/MMS to Texas
        recipients...' \u2192 ash (descriptive subtitle, not primary).
   The 'Enable Periodic Opt-Out' label needs bone, but has no
   unique ID and shares classes with many other labels. Targeted
   via parent-shape :has() heuristic \u2014 div.flex.items-center.gap-2
   that contains ONLY a single <p> with ui-text-sm-medium.
   Tighten further if it over-applies elsewhere. */
html body #SettingTexasSmsBlock p:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body div.flex.items-center.gap-2 > p.text-gray-800.ui-text-sm-medium:only-child:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-summary-card-metrics (v0.9.24). The metric cards on
   Messaging Analytics (Outbound / Inbound messages) use
   GHL's .summary-card pattern with:
     span.label (Sent / Delivered / Failed / etc.) \u2014 dark gray
       text-700 (rgb 71, 84, 103), nearly invisible on dark bg
     div.metric (the big number values) \u2014 almost-black gray-900
       (rgb 16, 24, 40), invisible on dark bg
   Theme labels \u2192 ash, values \u2192 bone. */
html body .summary-card span.label:not(#__reos_never_id),
html body .summary-card .label:not(#__reos_never_id),
html body [class*="summary-card"] span.label:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .summary-card .metric:not(#__reos_never_id),
html body [class*="summary-card"] .metric:not(#__reos_never_id),
html body div.metric:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-hr-menu-item (v0.9.25). GHL's left-side vertical menu
   pattern (hr-menu / hr-menu-item / hr-menu-item-content) used
   for sub-page navigation (e.g. Voice \u2192 Call Recording /
   Call Transcription). Selected state ships with:
     .hr-menu-item-content-header color: rgb(21, 94, 239) (blue)
     .hr-menu-item-content--selected::before bg: rgba(21, 94, 239, 0.1)
   Flip both to emerald canon. */
html body .hr-menu-item-content-header:not(#__reos_never_id),
html body .hr-menu-item-content--selected .hr-menu-item-content-header:not(#__reos_never_id),
html body .hr-menu-item-content--selected:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .hr-menu-item-content--selected:not(#__reos_never_id)::before,
html body .hr-menu-item-content--selected:not(#__reos_never_id)::after {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}
/* Inactive menu items \u2192 ash. */
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id) .hr-menu-item-content-header,
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Hover on inactive items \u2192 emerald-bright */
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id):hover .hr-menu-item-content-header,
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

/* 18a-hr-data-table (v0.9.33). Mirror of the .n-data-table
   theming (v0.8.85+) for GHL's HR family. Custom Dispositions
   page renders rows with .hr-data-table-td having inline
   bg slate painted by our coercer. Tim wants graphite to match
   the rest of the table chrome, plus row hover staying graphite
   (no flash) like the n-data-table treatment. */
html body .hr-data-table:not(#__reos_never_id),
html body .hr-data-table-wrapper:not(#__reos_never_id),
html body .hr-data-table-base-table:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body td.hr-data-table-td:not(#__reos_never_id),
html body .hr-data-table-td:not(#__reos_never_id),
/* v0.9.79: __body-cell variant used on Audit Logs hr-data-table. */
html body td.hr-data-table__body-cell:not(#__reos_never_id),
html body .hr-data-table__body-cell:not(#__reos_never_id),
html body td.hr-data-table__cell:not(#__reos_never_id),
html body .hr-data-table__cell:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
}
/* Row hover \u2014 no highlight (matches n-data-table v0.8.90/91). */
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-tr.hr-data-table-tr:not(.hr-data-table-tr--summary):hover,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-tr.hr-data-table-tr:not(.hr-data-table-tr--summary):hover > .hr-data-table-td,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-tr.hr-data-table-tr:not(.hr-data-table-tr--summary):hover .hr-data-table-td,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-td.hr-data-table-td.hr-data-table-td--hover {
  background-color: transparent !important;
}
html body .hr-data-table:not(#__reos_never_id) {
  --n-merged-td-color-hover: transparent !important;
  --n-td-color-hover: transparent !important;
  --n-merged-th-color-hover: var(--reos-slate) !important;
}
/* Kill 0.3s transitions (same fix as v0.8.89 for n-data-table). */
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-tr,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-td,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-th {
  transition: none !important;
  transition-duration: 0s !important;
}

/* 18a-learn-more-link (v0.9.47). v0.9.46 lost the specificity
   battle to v0.9.13's .hr-button.hr-button--default-type rule
   (0,1,2,2) \u2014 Learn More rendered bone text + steel border +
   emerald hover. Fix: chain .hr-button.hr-button--default-type
   into the selector so we reach (0,1,3,2) resting and (0,1,4,2)
   hover, and class-double .learn-more-button as a belt-and-
   suspenders booster. Goal: clean blue text link, NO chrome at
   all (no bg, no border, no overlay), emerald-bright on hover. */
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id),
html body button.hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id),
html body .learn-more-button.learn-more-button.learn-more-button:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: var(--reos-blue) !important;
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-border: none !important;
  --n-border-hover: none !important;
  --n-border-pressed: none !important;
  --n-border-focus: none !important;
  --n-text-color: var(--reos-blue) !important;
  --n-text-color-hover: var(--reos-emerald-bright) !important;
  --n-text-color-pressed: var(--reos-emerald) !important;
  --n-text-color-focus: var(--reos-emerald-bright) !important;
  padding: 0 !important;
  min-height: 0 !important;
  height: auto !important;
}
/* Hover: still no chrome \u2014 only the text color flips. v0.9.13
   hover is (0,1,3,2), we need (0,1,4,2). */
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover,
html body button.hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  color: var(--reos-emerald-bright) !important;
}
/* Inner .hr-button__content text \u2014 beats v0.9.13's
   (0,1,3,2) resting / (0,1,4,2) hover content rules. */
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id) .hr-button__content *,
html body .learn-more-button.learn-more-button.learn-more-button:not(#__reos_never_id) .hr-button__content,
html body .learn-more-button.learn-more-button.learn-more-button:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover .hr-button__content,
html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover .hr-button__content *,
html body .learn-more-button.learn-more-button.learn-more-button:not(#__reos_never_id):hover .hr-button__content,
html body .learn-more-button.learn-more-button.learn-more-button:not(#__reos_never_id):hover .hr-button__content * {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}
/* Kill the decorative border overlays. v0.9.13 sets
   .hr-button .hr-button__border to cool-gray (0,1,2,2) and on
   :hover to emerald (0,1,3,2). We bump to (0,1,3,2) resting /
   (0,1,4,2) hover by adding .learn-more-button into the chain. */
html body .hr-button.learn-more-button:not(#__reos_never_id) .hr-button__border,
html body .hr-button.learn-more-button:not(#__reos_never_id) .hr-button__state-border,
html body .hr-button.learn-more-button:not(#__reos_never_id) .hr-base-wave,
html body .learn-more-button.learn-more-button:not(#__reos_never_id) .hr-button__border,
html body .learn-more-button.learn-more-button:not(#__reos_never_id) .hr-button__state-border,
html body .learn-more-button.learn-more-button:not(#__reos_never_id) .hr-base-wave {
  display: none !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .hr-button.learn-more-button:not(#__reos_never_id):hover .hr-button__border,
html body .hr-button.learn-more-button:not(#__reos_never_id):hover .hr-button__state-border,
html body .learn-more-button.learn-more-button:not(#__reos_never_id):hover .hr-button__border,
html body .learn-more-button.learn-more-button:not(#__reos_never_id):hover .hr-button__state-border {
  display: none !important;
  border: none !important;
  border-color: transparent !important;
}

/* 18a-sms-provider-sweep (v0.9.48). SMS Provider settings tab
   uses three families we hadn't covered yet:
     .hr-radio-group         \u2014 wrapper that sets --n-button-*
                               CSS vars (brand-blue + gray-200)
     .hr-radio-button        \u2014 large row container (Lead Connector
                               selector card)
     .hr-radio-button__state-border \u2014 overlay border on row hover/
                               checked (brand-blue by default)
     .ui-radio-group-item-* \u2014 text children inside the row
   Map: bg \u2192 graphite, border \u2192 steel (emerald when checked),
   text \u2192 bone/ash, brand-blue accents \u2192 emerald canon. */
html body .hr-radio-group:not(#__reos_never_id),
html body [class*="hr-radio-group"]:not(#__reos_never_id) {
  --n-button-border-color: var(--reos-steel) !important;
  --n-button-border-color-active: var(--reos-emerald) !important;
  --n-button-border-radius: 8px !important;
  --n-button-box-shadow: inset 0 0 0 1px transparent !important;
  --n-button-box-shadow-focus: inset 0 0 0 1px var(--reos-emerald), 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-button-box-shadow-hover: inset 0 0 0 1px var(--reos-emerald) !important;
  --n-button-color: var(--reos-graphite) !important;
  --n-button-color-active: var(--reos-graphite) !important;
  --n-button-text-color: var(--reos-bone) !important;
  --n-button-text-color-hover: var(--reos-emerald) !important;
  --n-button-text-color-active: var(--reos-emerald) !important;
}
/* Row container \u2014 graphite bg, steel border, bone text. */
html body .hr-radio-button:not(#__reos_never_id),
html body label.hr-radio-button:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
/* Checked row \u2014 emerald border ring, NOT a slate bg. */
html body .hr-radio-button.hr-radio-button--checked:not(#__reos_never_id),
html body label.hr-radio-button.hr-radio-button--checked:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
}
/* Overlay state-border (the actual ring users see) */
html body .hr-radio-button:not(#__reos_never_id) .hr-radio-button__state-border {
  border-color: var(--reos-steel) !important;
  box-shadow: inset 0 0 0 1px var(--reos-steel) !important;
}
html body .hr-radio-button.hr-radio-button--checked:not(#__reos_never_id) .hr-radio-button__state-border,
html body .hr-radio-button:not(#__reos_never_id):hover .hr-radio-button__state-border {
  border-color: var(--reos-emerald) !important;
  box-shadow: inset 0 0 0 1px var(--reos-emerald) !important;
}
/* Inner row text \u2014 title is bone, description is ash. */
html body .ui-radio-group-item-content:not(#__reos_never_id) p.ui-text-sm-medium,
html body .hr-radio-button:not(#__reos_never_id) p.ui-text-sm-medium {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .ui-radio-group-item-content:not(#__reos_never_id) p.ui-text-sm-regular,
html body .hr-radio-button:not(#__reos_never_id) p.ui-text-sm-regular {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Provider logo background \u2014 the round bg-none chip on the
   Lead Connector image is fine, but if any sibling renders a
   bg-white halo around it, kill it. */
html body .ui-radio-group-item-icon:not(#__reos_never_id) img {
  background: transparent !important;
}
/* hr-divider parent \u2014 Naive divider line lives inside but the
   parent also has --n-color set from inline; pin the var so any
   computed color falls back to steel even on direct line use. */
html body .hr-divider:not(#__reos_never_id),
html body [class*="hr-divider"]:not(#__reos_never_id) {
  --n-color: var(--reos-steel) !important;
  --n-text-color: var(--reos-ash) !important;
}

/* 18a-trust-center-sweep (v0.9.45). Trust Center page scan
   found:
     .hr-button--outline-type.hr-button--secondary \u2014 white bg
       (5 instances; outline-style HR buttons)
     .service-icon-container \u2014 gray-200 bg
     .hr-card-footer \u2014 gray-200 border-top
     .hero-section-container \u2014 rgb(178, 204, 255) light blue hero */
html body .hr-button.hr-button--outline-type:not(#__reos_never_id),
html body .hr-button.hr-button--outline-type.hr-button--secondary:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
html body .hr-button.hr-button--outline-type:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
html body .service-icon-container:not(#__reos_never_id),
html body [class*="service-icon-container"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-card-footer:not(#__reos_never_id),
html body [class*="hr-card-footer"]:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
  background-color: transparent !important;
}
html body .hero-section-container:not(#__reos_never_id),
html body [class*="hero-section-container"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* 18a-hr-radio-+-misc (v0.9.42). The Voice Other Settings page
   uses HR radio cards (.hr-radio) + warning-25 callouts +
   border-primary-600 active rings. Theme:
     .hr-radio CSS vars \u2014 mirror .n-radio canon
     .bg-warning-25 \u2192 graphite (was missed; only -50/100/200 covered)
     .bg-primary-25 \u2192 already covered v0.9.35
     .border-primary-* \u2192 emerald (active radio card outline) */
html body .hr-radio:not(#__reos_never_id) {
  --n-box-shadow: inset 0 0 0 1px var(--reos-steel) !important;
  --n-box-shadow-active: inset 0 0 0 1px var(--reos-emerald) !important;
  --n-box-shadow-disabled: inset 0 0 0 1px var(--reos-steel) !important;
  --n-box-shadow-focus: inset 0 0 0 1px var(--reos-emerald) !important;
  --n-box-shadow-hover: inset 0 0 0 1px var(--reos-emerald) !important;
  --n-color: var(--reos-slate) !important;
  --n-color-active: transparent !important;
  --n-color-disabled: var(--reos-graphite) !important;
  --n-dot-color-active: var(--reos-emerald) !important;
  --n-dot-color-disabled: var(--reos-steel) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-cool-gray) !important;
}
/* .hr-radio dot \u2014 explicit color for checked state. */
html body .hr-radio.hr-radio--checked .hr-radio__dot:not(#__reos_never_id),
html body .hr-radio .hr-radio__dot.hr-radio__dot--checked:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}
/* Kill the white/light post-click halo on radio dots. The
   --n-box-shadow-focus is set inline to '... 0 0 0 2px rgba(21,
   94, 239, 0.2)' which leaves a 2px light-blue ring around the
   dot after click. Override every shadow/outline path on the
   radio + its inner wrappers so the dot sits naked. */
html body .hr-radio:not(#__reos_never_id),
html body .hr-radio:not(#__reos_never_id):focus,
html body .hr-radio:not(#__reos_never_id):focus-visible,
html body .hr-radio:not(#__reos_never_id):focus-within,
html body .hr-radio:not(#__reos_never_id):hover,
html body .hr-radio:not(#__reos_never_id):active,
html body .hr-radio .hr-radio__dot-wrapper:not(#__reos_never_id),
html body .hr-radio .hr-radio__dot:not(#__reos_never_id),
html body .hr-radio input.hr-radio-input:focus,
html body .hr-radio input.hr-radio-input:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
/* Active state: NO box around the dot. Just the dot. */
html body .hr-radio.hr-radio--checked .hr-radio__dot-wrapper:not(#__reos_never_id),
html body .hr-radio .hr-radio__dot-wrapper:not(#__reos_never_id) {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}

/* Tailwind warning-25 (one step below 50) \u2014 graphite */
html body .bg-warning-25:not(#__reos_never_id),
html body [class*="bg-warning-25"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* border-primary-* (used as active-card outline color) \u2192 emerald */
html body [class*="border-primary-"]:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
}

/* 18a-hr-form-item (v0.10.8). The .hr-form-item wrapper that
   surrounds label+input pairs ships with gray-200 borders and
   a focus-within box-shadow halo (light cyan/white glow that
   Tim flagged on Reminder Settings Email Template dropdown).
   The wrapper is purely structural \u2014 it shouldn't render a
   surround box; the inner .hr-input / .hr-select handles its
   own field-box. Force transparent bg, no border, no shadow,
   no outline at every state. */
html body .hr-form-item:not(.hr-form-item-blank):not(#__reos_never_id),
html body .hr-form-item:hover:not(#__reos_never_id),
html body .hr-form-item:focus:not(#__reos_never_id),
html body .hr-form-item:focus-within:not(#__reos_never_id),
html body .hr-form-item:focus-visible:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
/* The .hr-form-item-blank variant is the no-label form item
   used by the Reminder Settings dropdowns. Same canon. */
html body .hr-form-item-blank:not(#__reos_never_id),
html body .hr-form-item-blank:hover:not(#__reos_never_id),
html body .hr-form-item-blank:focus-within:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

/* 18a-hr-select-+-card (v0.9.39). Two un-themed surfaces on the
   SIP Test Calls page:

   1) .user-select-card \u2014 wrapper div around the 'Select Your
      SIP User' dropdown. Ships with white bg + gray-200 border
      by default.
   2) .hr-base-selection (parallel to .n-base-selection from
      v0.8.73) \u2014 CSS vars all set to GHL blue inline:
        --n-border-active/focus/hover: blue
        --n-box-shadow-active/focus: blue rgba
        --n-caret-color: #155EEF
      Mirror the .n-base-selection emerald canon.
   3) .hr-input-group-label__border \u2014 separator border element,
      defaults to gray-200; transparent. */
html body .user-select-card:not(#__reos_never_id),
html body [class*="user-select-card"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-input-group-label__border:not(#__reos_never_id),
html body [class*="hr-input-group-label__border"]:not(#__reos_never_id),
html body .hr-input-group-label__border.hr-input-group-label__border:not(#__reos_never_id) {
  border: none !important;
  border-color: transparent !important;
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
  display: none !important;
}
/* The parent .hr-input-group-label (input group suffix/prefix
   label \u2014 e.g. '.sip.ashburn.twilio.com' attached to an input)
   ships with --n-group-label-color: rgb(250,250,252) (off-white)
   + gray-200 border + dark text via inline CSS vars. Flip to
   graphite + steel + ash. */
html body .hr-input-group-label:not(#__reos_never_id),
html body [class*="hr-input-group-label"]:not(.hr-input-group-label__border):not(#__reos_never_id),
html body .hr-input-group-label.ui-input-group-label:not(#__reos_never_id) {
  --n-group-label-color: var(--reos-graphite) !important;
  --n-group-label-border: 1px solid var(--reos-steel) !important;
  --n-group-label-text-color: var(--reos-ash) !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-ash) !important;
}

/* .hr-base-selection \u2014 flip blue inline CSS vars to emerald. */
html body .hr-base-selection:not(#__reos_never_id) {
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-active: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-box-shadow-active: none !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-hover: none !important;
  --n-caret-color: var(--reos-bone) !important;
  --n-loading-color: var(--reos-emerald) !important;
}
/* .hr-base-selection border overlays \u2014 mirror v0.8.73 (n-base).
   v0.10.8: extended to cover :hover and :focus-within (the active
   GHL state when the dropdown is hovered but not yet clicked).
   Without this, the GHL component renders a light blue + white
   double-border halo on hover. Force the static .__border to
   steel default, transparent state-border at rest, and emerald
   on every interactive state. No box-shadow rings at any state. */
html body .hr-base-selection .hr-base-selection__border:not(#__reos_never_id),
html body [class*="hr-base-selection"] .hr-base-selection__border:not(#__reos_never_id) {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
html body .hr-base-selection .hr-base-selection__state-border:not(#__reos_never_id),
html body [class*="hr-base-selection"] .hr-base-selection__state-border:not(#__reos_never_id) {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .hr-base-selection:hover .hr-base-selection__border:not(#__reos_never_id),
html body .hr-base-selection:focus-within .hr-base-selection__border:not(#__reos_never_id),
html body [class*="hr-base-selection"]:hover .hr-base-selection__border:not(#__reos_never_id),
html body [class*="hr-base-selection"]:focus-within .hr-base-selection__border:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}
html body .hr-base-selection:hover .hr-base-selection__state-border:not(#__reos_never_id),
html body .hr-base-selection:focus .hr-base-selection__state-border:not(#__reos_never_id),
html body .hr-base-selection:focus-within .hr-base-selection__state-border:not(#__reos_never_id),
html body .hr-base-selection.hr-base-selection--focus .hr-base-selection__state-border:not(#__reos_never_id),
html body .hr-base-selection.hr-base-selection--active .hr-base-selection__state-border:not(#__reos_never_id),
html body [class*="hr-base-selection"]:hover .hr-base-selection__state-border:not(#__reos_never_id),
html body [class*="hr-base-selection"]:focus-within .hr-base-selection__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}
/* Kill any box-shadow on the .hr-base-selection wrapper itself at
   every state (focus rings, hover halos). */
html body .hr-base-selection:not(#__reos_never_id),
html body .hr-base-selection:hover:not(#__reos_never_id),
html body .hr-base-selection:focus:not(#__reos_never_id),
html body .hr-base-selection:focus-within:not(#__reos_never_id),
html body .hr-base-selection:focus-visible:not(#__reos_never_id),
html body [class*="hr-base-selection"]:not(#__reos_never_id),
html body [class*="hr-base-selection"]:hover:not(#__reos_never_id),
html body [class*="hr-base-selection"]:focus-within:not(#__reos_never_id) {
  box-shadow: none !important;
  outline: none !important;
}
/* Mirror for .hr-select wrapper (the outer dropdown component
   that the .hr-base-selection sits inside). GHL's default skin
   stacks a hover box-shadow on the .hr-select element too. */
html body .hr-select:not(#__reos_never_id),
html body .hr-select:hover:not(#__reos_never_id),
html body .hr-select:focus:not(#__reos_never_id),
html body .hr-select:focus-within:not(#__reos_never_id),
html body .hr-select:focus-visible:not(#__reos_never_id),
html body [class*="hr-select"]:not(.hr-select-menu):not(.hr-base-select-menu):not(#__reos_never_id),
html body [class*="hr-select"]:not(.hr-select-menu):not(.hr-base-select-menu):hover:not(#__reos_never_id),
html body [class*="hr-select"]:not(.hr-select-menu):not(.hr-base-select-menu):focus-within:not(#__reos_never_id) {
  box-shadow: none !important;
  outline: none !important;
}

/* 18a-hr-tabs-bar (v0.9.38). The .hr-tabs Highrise tab system
   (parallel to .n-tabs v0.9.6) has its own inline CSS vars
   that ship blue. Mirror the .n-tabs treatment:
     --n-bar-color \u2192 emerald (active underline bar)
     --n-tab-text-color-active \u2192 emerald
     --n-tab-text-color-hover \u2192 emerald-bright
   Plus theme .hr-tabs-bar element bg directly (the active
   underline rendered via background-color, not border-bottom). */
html body .hr-tabs:not(#__reos_never_id),
html body .hr-tabs.hr-tabs--line-type:not(#__reos_never_id) {
  --n-bar-color: var(--reos-emerald) !important;
  --n-tab-text-color: var(--reos-ash) !important;
  --n-tab-text-color-active: var(--reos-emerald) !important;
  --n-tab-text-color-hover: var(--reos-emerald-bright) !important;
  --n-tab-text-color-disabled: var(--reos-cool-gray) !important;
  --n-tab-border-color: var(--reos-steel) !important;
  --n-tab-color: transparent !important;
  --n-color-segment: var(--reos-graphite) !important;
  --n-pane-text-color: var(--reos-bone) !important;
}
html body .hr-tabs .hr-tabs-bar:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}
/* HR menu vertical nav \u2014 same blue \u2192 emerald treatment as v0.9.25
   .hr-menu-item but via the parent --n-* vars on .hr-menu. */
html body .hr-menu:not(#__reos_never_id) {
  --n-item-text-color: var(--reos-ash) !important;
  --n-item-text-color-hover: var(--reos-emerald-bright) !important;
  --n-item-text-color-active: var(--reos-emerald) !important;
  --n-item-text-color-child-active: var(--reos-emerald) !important;
  --n-item-text-color-active-hover: var(--reos-emerald) !important;
  --n-item-text-color-child-active-hover: var(--reos-emerald) !important;
  --n-item-icon-color: var(--reos-ash) !important;
  --n-item-icon-color-hover: var(--reos-emerald-bright) !important;
  --n-item-icon-color-active: var(--reos-emerald) !important;
  --n-item-icon-color-active-hover: var(--reos-emerald) !important;
  --n-item-color-hover: transparent !important;
  --n-item-color-active: var(--reos-emerald-glow) !important;
  --n-item-color-active-hover: var(--reos-emerald-glow) !important;
  --n-arrow-color: var(--reos-ash) !important;
  --n-arrow-color-hover: var(--reos-emerald) !important;
  --n-arrow-color-active: var(--reos-emerald) !important;
}

/* 18a-arbitrary-light-bgs (v0.9.37). Catch elements with light-
   blue / light-tinted bgs that come from sources other than
   Tailwind utility classes (inline styles, scoped CSS, arbitrary
   Tailwind values like bg-[#EFF4FF]). Attribute-substring match
   on the rgb() form. */
html body [style*="background-color: rgb(239, 244, 255)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(239, 244, 255)"]:not(#__reos_never_id),
html body [style*="background: rgb(239, 244, 255)"]:not(#__reos_never_id),
html body [style*="background:rgb(239, 244, 255)"]:not(#__reos_never_id),
html body [style*="background-color: rgb(209, 224, 255)"]:not(#__reos_never_id),
html body [style*="background-color:rgb(209, 224, 255)"]:not(#__reos_never_id),
html body [style*="background: rgb(209, 224, 255)"]:not(#__reos_never_id),
html body [style*="background:rgb(209, 224, 255)"]:not(#__reos_never_id),
html body [style*="background-color: #EFF4FF"]:not(#__reos_never_id),
html body [style*="background-color: #D1E0FF"]:not(#__reos_never_id),
html body [class*="bg-[#EFF4FF"]:not(#__reos_never_id),
html body [class*="bg-[#D1E0FF"]:not(#__reos_never_id),
html body [class*="bg-[rgb(239"]:not(#__reos_never_id),
html body [class*="bg-[rgb(209"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* 18a-design-canon (v0.9.36). Tim's canonical rules:
   - Background defaults to graphite. Slate ONLY on user-input
     fields (.n-input, .hr-input, native input, etc.)
   - Text default bone + ash. Blue ONLY for clickable links.
     Emerald for attention/active states.
   - Borders default to steel (no gray-200 should ever render)
   - Nav hover state: text turns emerald, NO box. Never a
     white/light bg around the nav item.

   Catch-all defensive rules below. */

/* Any element with inline border-color rgb(229,231,235) or
   rgb(234,236,240) or rgb(228,231,236) (the three near-identical
   gray-200 variants GHL uses) \u2192 steel. Catches inline-styled
   borders on cards / wrappers / dividers that escape class-
   based remap. */
html body [style*="border-color: rgb(229, 231, 235)"]:not(#__reos_never_id),
html body [style*="border-color:rgb(229, 231, 235)"]:not(#__reos_never_id),
html body [style*="border-color: rgb(234, 236, 240)"]:not(#__reos_never_id),
html body [style*="border-color:rgb(234, 236, 240)"]:not(#__reos_never_id),
html body [style*="border-color: rgb(228, 231, 236)"]:not(#__reos_never_id),
html body [style*="border-color:rgb(228, 231, 236)"]:not(#__reos_never_id),
html body [style*="border: 1px solid rgb(229, 231, 235)"]:not(#__reos_never_id),
html body [style*="border: 1px solid rgb(234, 236, 240)"]:not(#__reos_never_id),
html body [style*="border-bottom: 1px solid rgb(229, 231, 235)"]:not(#__reos_never_id),
html body [style*="border-top: 1px solid rgb(229, 231, 235)"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* Nav items \u2014 hover should ONLY change text color, no bg.
   Targets common nav/menu/tab item families. Excludes form-
   input wrappers + Naive UI button bgs which legitimately
   need their own hover bg. */
html body .hr-menu-item:not(#__reos_never_id):hover,
html body .hr-menu-item-content:not(#__reos_never_id):hover,
html body [class*="-nav-item"]:not(input):not(textarea):not([class*="-button"]):not(#__reos_never_id):hover,
html body a:not([class*="button"]):not([class*="btn"]):not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
}

/* 18a-info-card (v0.9.35). The 'Before Testing Your Deskphone'
   callout uses .info-card.bg-primary-25 \u2014 primary-25 is an
   even lighter shade than primary-50 (not covered by v0.9.8's
   bg-primary-50 \u2192 slate rule). Remap to slate + steel border.
   Also catches any other .info-card patterns used across GHL. */
html body .info-card:not(#__reos_never_id),
html body [class*="info-card"]:not(#__reos_never_id),
html body .bg-primary-25:not(#__reos_never_id),
html body [class*="bg-primary-25"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

/* v0.13.2: Tailwind .bg-primary-300/400/500/600/700/800/900 \u2014 the
   SOLID primary-blue button bg shades (GHL's primary-500 = #155EEF).
   Tim flagged the "New" button on the email-builder template page
   that uses bg-primary-500 + hover:bg-primary-400. Flip all the
   solid shades to emerald canon. The light tints (25/50/100/200)
   stay slate per the existing rules above. */
html body .bg-primary-300:not(#__reos_never_id),
html body .bg-primary-400:not(#__reos_never_id),
html body .bg-primary-500:not(#__reos_never_id),
html body .bg-primary-600:not(#__reos_never_id),
html body .bg-primary-700:not(#__reos_never_id),
html body .bg-primary-800:not(#__reos_never_id),
html body .bg-primary-900:not(#__reos_never_id),
html body [class~="bg-primary-300"]:not(#__reos_never_id),
html body [class~="bg-primary-400"]:not(#__reos_never_id),
html body [class~="bg-primary-500"]:not(#__reos_never_id),
html body [class~="bg-primary-600"]:not(#__reos_never_id),
html body [class~="bg-primary-700"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-emerald) !important;
}
/* Hover variants \u2014 emerald-bright. Tailwind compiles hover:bg-primary-400
   as a .hover:bg-primary-400 class that activates via :hover. */
html body .hover:bg-primary-300:not(#__reos_never_id):hover,
html body .hover:bg-primary-400:not(#__reos_never_id):hover,
html body .hover:bg-primary-500:not(#__reos_never_id):hover,
html body .hover:bg-primary-600:not(#__reos_never_id):hover,
html body .hover:bg-primary-700:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-3"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-4"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-5"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-6"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-7"]:not(#__reos_never_id):hover {
  background-color: var(--reos-emerald-bright) !important;
  background: var(--reos-emerald-bright) !important;
  border-color: var(--reos-emerald-bright) !important;
}
/* Focus variants \u2014 keep emerald (not GHL blue). */
html body .focus:border-primary-700:not(#__reos_never_id):focus,
html body .focus:bg-primary-700:not(#__reos_never_id):focus,
html body [class*="focus:border-primary-"]:not(#__reos_never_id):focus,
html body [class*="focus:bg-primary-"]:not(#__reos_never_id):focus {
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
  outline: none !important;
}
/* Tailwind text-primary-* (the matching text-on-blue weight families).
   White on emerald is good (existing .text-white rule handles it). */
html body .text-primary-300:not(#__reos_never_id),
html body .text-primary-400:not(#__reos_never_id),
html body .text-primary-500:not(#__reos_never_id),
html body .text-primary-600:not(#__reos_never_id),
html body .text-primary-700:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* .border-primary-* \u2014 emerald. */
html body .border-primary-300:not(#__reos_never_id),
html body .border-primary-400:not(#__reos_never_id),
html body .border-primary-500:not(#__reos_never_id),
html body .border-primary-600:not(#__reos_never_id),
html body .border-primary-700:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
}
/* hr-form-item-feedback-wrapper \u2014 sometimes ships with light bg
   when there's a feedback message. Force transparent. */
html body .hr-form-item-feedback-wrapper:not(#__reos_never_id),
html body .n-form-item-feedback-wrapper:not(#__reos_never_id) {
  background-color: transparent !important;
}

/* 18a-sip-page-sweep (v0.9.34). VoIP/SIP tab scan found 7
   patterns:
     .ui-card \u2014 white bg + gray-200 bottom border (the SIP info
       cards)
     .bg-success-100 / .text-success-600 \u2014 light green icon
       containers (success-state icons)
     .bg-warning-100 / .text-warning-600 \u2014 light amber containers
     .bg-cyan-100 / .text-cyan-600 \u2014 light cyan containers
     .active-navigation-icon \u2014 gray-100 bg + gray-100 border
       (active nav icon backdrop)
   Remap each to semantic-on-graphite. */
html body .ui-card:not(#__reos_never_id),
html body [class*="ui-card"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
/* Tailwind semantic palette \u2014 bg + text variants. */
html body .bg-success-50:not(#__reos_never_id),
html body .bg-success-100:not(#__reos_never_id),
html body .bg-success-200:not(#__reos_never_id),
html body [class*="bg-success-50"]:not(#__reos_never_id),
html body [class*="bg-success-100"]:not(#__reos_never_id),
html body [class*="bg-success-200"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}
html body .bg-warning-50:not(#__reos_never_id),
html body .bg-warning-100:not(#__reos_never_id),
html body .bg-warning-200:not(#__reos_never_id),
html body [class*="bg-warning-50"]:not(#__reos_never_id),
html body [class*="bg-warning-100"]:not(#__reos_never_id),
html body [class*="bg-warning-200"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
html body .bg-cyan-50:not(#__reos_never_id),
html body .bg-cyan-100:not(#__reos_never_id),
html body .bg-cyan-200:not(#__reos_never_id),
html body [class*="bg-cyan-50"]:not(#__reos_never_id),
html body [class*="bg-cyan-100"]:not(#__reos_never_id),
html body [class*="bg-cyan-200"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
/* Semantic text colors */
html body [class*="text-success-"]:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body [class*="text-warning-"]:not(#__reos_never_id) {
  color: var(--reos-amber) !important;
  -webkit-text-fill-color: var(--reos-amber) !important;
}
html body [class*="text-cyan-"]:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Active navigation icon container \u2014 light gray-100 + border-gray-100.
   Used as the visible-state backdrop for tabbed/active nav icons. */
html body .active-navigation-icon:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

/* 18a-dispositions-sweep (v0.9.32). Custom Dispositions tab scan
   found 7 patterns. Most are GHL Tailwind utility classes for
   light-tinted UI elements that need dark-theme equivalents:
     .hr-pagination-item--active \u2014 blue text (parallel to
       .n-pagination-item--active themed in v0.8.87)
     bg-blue-50 (light blue rows / selected indicators)
     bg-blue-100/200 (light blue icon backdrops)
     bg-gray-25 / bg-gray-50 / bg-gray-100 / border-gray-50
       (Tailwind near-whites for placeholders + dialer chrome)
     .keypad \u2014 dialer pad with default white bg
     .dialer-navigation \u2014 off-white bg + gray-200 top border */
html body .hr-pagination-item.hr-pagination-item--active:not(#__reos_never_id),
html body .hr-pagination-item.hr-pagination-item--active.hr-pagination-item--clickable:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  border: 1px solid var(--reos-emerald) !important;
  background-color: transparent !important;
}
html body .hr-pagination:not(#__reos_never_id) {
  --n-item-text-color: var(--reos-bone) !important;
  --n-item-text-color-hover: var(--reos-emerald) !important;
  --n-item-text-color-active: var(--reos-emerald) !important;
  --n-item-color-hover: var(--reos-slate) !important;
  --n-item-border-active: 1px solid var(--reos-emerald) !important;
}

/* Tailwind blue-50/100/200 \u2192 slate (light blue accent containers) */
html body .bg-blue-50:not(#__reos_never_id),
html body .bg-blue-100:not(#__reos_never_id),
html body .bg-blue-200:not(#__reos_never_id),
html body [class*="bg-blue-50"]:not(#__reos_never_id),
html body [class*="bg-blue-100"]:not(#__reos_never_id),
html body [class*="bg-blue-200"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* v0.12.7: extend v0.12.6 \u2014 the .btn-folder button + its wrapping
   .bg-white.shadow container both need transparent bg. My v0.12.6
   only caught the wrapper; Tim's screenshot shows the button row
   still on a lighter band. Force transparent at maximum specificity. */
html body .btn-folder:not(#__reos_never_id):not(#__reos_a),
html body button.btn-folder:not(#__reos_never_id):not(#__reos_a),
html body .fields-folder:not(#__reos_never_id):not(#__reos_a),
html body .fields-container:not(#__reos_never_id):not(#__reos_a),
html body .details-view .bg-white:not(#__reos_never_id):not(#__reos_a),
html body .details-view .bg-white.shadow:not(#__reos_never_id):not(#__reos_a),
html body .details-view [class*="bg-white"]:not(#__reos_never_id):not(#__reos_a),
html body .details-view .overflow-hidden:not(#__reos_never_id):not(#__reos_a),
html body .details-view .overflow-y-auto:not(#__reos_never_id):not(#__reos_a) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
}
/* Folder-name text inside .btn-folder \u2014 bone (no longer ash). */
html body .btn-folder .folder-name:not(#__reos_never_id),
html body .btn-folder .folder-name *:not(#__reos_never_id),
html body button.btn-folder *:not(#__reos_never_id):not(svg):not(path) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Chevron icon \u2014 ash so it reads as muted indicator. */
html body .btn-folder svg:not(#__reos_never_id),
html body .btn-folder svg path:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

/* v0.12.6: Property-record detail view \u2014 three off-canon items:
   1. .primary-property-name (page title) \u2014 colorizer paints ash
      inline because it sits adjacent to inputs. It's a heading,
      not a field label. Force bone.
   2. .folder-name (section header e.g. "Property Info") \u2014 same
      colorizer treatment. Force bone.
   3. .hr-form-item-label__asterisk (the * marking required fields)
      \u2014 colorizer paints ash; canon = crimson destructive accent.
   The inline ash from colorizeFieldLabels is hard to beat with CSS
   specificity (1,0,0,0 vs my 0,1,1,2). The killHeaderLitePaint
   pattern (v0.10.30) clears legacy paint via standalone JS pass;
   pair that with a tight CSS override here for new ticks. */
html body .primary-property-name:not(#__reos_never_id),
html body .primary-property-name *:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .folder-name:not(#__reos_never_id),
html body .folder-name *:not(#__reos_never_id),
html body span.folder-name .truncate:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hr-form-item-label__asterisk:not(#__reos_never_id),
html body span.hr-form-item-label__asterisk:not(#__reos_never_id) {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
}
/* Form-container .bg-white wrapper \u2014 transparent so the page
   graphite shows through (avoid double-card look). */
html body .details-view .bg-white.shadow:not(#__reos_never_id),
html body .details-view [class*="rounded-md"][class*="bg-white"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* v0.12.4: Highcharts SVG charts on WP analytics + similar pages.
   GHL embeds Highcharts <svg> charts inside dark cards but the
   chart itself ships with WHITE plot-background, GHL-blue series,
   and dark axis text. The host card is themed, but the chart SVG
   inside isn't. Theme the canonical Highcharts element classes.
   These are SVG rect/path/text elements \u2014 CSS fill /
   stroke properties override the SVG presentation attributes. */
html body .highcharts-background:not(#__reos_never_id),
html body rect.highcharts-background:not(#__reos_never_id) {
  fill: var(--reos-graphite) !important;
}
html body .highcharts-plot-background:not(#__reos_never_id),
html body rect.highcharts-plot-background:not(#__reos_never_id) {
  fill: var(--reos-graphite) !important;
}
html body .highcharts-grid-line:not(#__reos_never_id),
html body path.highcharts-grid-line:not(#__reos_never_id) {
  stroke: var(--reos-steel) !important;
}
html body .highcharts-axis-line:not(#__reos_never_id),
html body path.highcharts-axis-line:not(#__reos_never_id) {
  stroke: var(--reos-steel) !important;
}
html body .highcharts-tick:not(#__reos_never_id),
html body path.highcharts-tick:not(#__reos_never_id) {
  stroke: var(--reos-steel) !important;
}
/* Axis labels (x-axis dates, y-axis values) \u2014 ash. */
html body .highcharts-axis-labels text:not(#__reos_never_id),
html body .highcharts-axis-labels tspan:not(#__reos_never_id),
html body text.highcharts-axis-labels:not(#__reos_never_id) {
  fill: var(--reos-ash) !important;
  color: var(--reos-ash) !important;
}
/* Legend text \u2014 bone. */
html body .highcharts-legend-item text:not(#__reos_never_id),
html body .highcharts-legend-item tspan:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}
/* Chart title / subtitle \u2014 bone. */
html body .highcharts-title:not(#__reos_never_id),
html body .highcharts-subtitle:not(#__reos_never_id),
html body text.highcharts-title:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
}
/* Data label values floating above bars/points \u2014 bone. */
html body .highcharts-data-label text:not(#__reos_never_id),
html body .highcharts-data-label tspan:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}
/* Tooltip popup that appears on hover \u2014 graphite bg, bone text,
   steel border. */
html body .highcharts-tooltip > path:not(#__reos_never_id),
html body .highcharts-tooltip-box:not(#__reos_never_id) {
  fill: var(--reos-graphite) !important;
  stroke: var(--reos-steel) !important;
}
html body .highcharts-tooltip text:not(#__reos_never_id),
html body .highcharts-tooltip tspan:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}
/* Series colors \u2014 remap GHL blue (the default Highcharts first
   color) to emerald. Subsequent series stay GHL-defaults for now
   (Highcharts cycles through 10 colors; theming them all needs
   per-color overrides). */
html body .highcharts-color-0:not(#__reos_never_id),
html body path.highcharts-color-0:not(#__reos_never_id),
html body rect.highcharts-color-0:not(#__reos_never_id) {
  fill: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
html body .highcharts-color-1:not(#__reos_never_id),
html body path.highcharts-color-1:not(#__reos_never_id),
html body rect.highcharts-color-1:not(#__reos_never_id) {
  fill: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}
html body .highcharts-color-2:not(#__reos_never_id),
html body path.highcharts-color-2:not(#__reos_never_id),
html body rect.highcharts-color-2:not(#__reos_never_id) {
  fill: var(--reos-amber) !important;
  stroke: var(--reos-amber) !important;
}
html body .highcharts-color-3:not(#__reos_never_id),
html body path.highcharts-color-3:not(#__reos_never_id),
html body rect.highcharts-color-3:not(#__reos_never_id) {
  fill: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
}

/* v0.12.3: #wordpress-management-app \u2014 the WP page wrapper that
   ships with bg-color #F9FAFB (gray-50). Browse confirmed it
   covered 1696x987 making the entire page read white. Force
   graphite via CSS + FORCE_RULE (below) + killWhiteInHighriseApp
   roots (above). Three independent paths. */
html body #wordpress-management-app:not(#__reos_never_id),
html body [id$="-management-app"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* v0.12.13: WordPress site-detail header strip + Quickstart card.
   The .../wordpress/sites/<id> page renders a top row
   (.back-to-sites) holding the site title, ID copy pill, location
   pill, Quickstart progress, Quick Actions, WP Admin, Switch Site
   buttons. It has no explicit bg class so it inherits white from
   an ancestor. Force graphite + bone text on the row itself. */
html body .back-to-sites:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* Quickstart progress card \u2014 ships with Tailwind bg-white + gray-300
   border. Flip to slate so it reads as a tappable surface, not a
   white box. The .setup-guide-button-container wrapper too. */
html body #setup-guide-button:not(#__reos_never_id),
html body .setup-guide-button-container #setup-guide-button:not(#__reos_never_id),
html body .setup-guide-button-container:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  box-shadow: none !important;
}
/* Quickstart label + progress text \u2014 bone, not gray-700. */
html body #setup-guide-button:not(#__reos_never_id) .text-gray-700,
html body #setup-guide-button:not(#__reos_never_id) [class*="text-gray-7"],
html body .setup-guide-button-container:not(#__reos_never_id) .text-gray-700 {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Quickstart progress rail \u2014 slate so it reads on the slate card. */
html body #setup-guide-button:not(#__reos_never_id) .n-progress-graph-line-rail {
  background-color: var(--reos-steel) !important;
}
/* Quickstart progress fill \u2014 emerald canon. */
html body #setup-guide-button:not(#__reos_never_id) .n-progress-graph-line-fill {
  background-color: var(--reos-emerald) !important;
}
/* "US - Ashburn" location pill \u2014 ships .bg-gray-100 / .text-gray-700.
   Make it slate + ash so it matches our pill canon. */
html body .back-to-sites .bg-gray-100:not(#__reos_never_id),
html body .back-to-sites span.inline-flex.rounded-full:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  color: var(--reos-ash) !important;
}
html body .back-to-sites .bg-gray-100:not(#__reos_never_id) svg {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

/* v0.11.18: dim the WordPress site-preview thumbnail. The
   .wp-site-thumbnail image on /v2/.../wordpress/dashboard is a
   GHL-rendered preview of the WP site (or a light placeholder
   for new/empty sites). The image has light/white pixels we
   can't theme via CSS; apply a brightness+saturate filter to
   blend it into the dark card surface. Also pin the wrapper
   bg to graphite so any unpainted gaps don't leak light. */
html body img.wp-site-thumbnail:not(#__reos_never_id),
html body [class*="wp-site-thumbnail"]:not(#__reos_never_id) {
  filter: brightness(0.55) saturate(0.7) !important;
  background-color: var(--reos-graphite) !important;
}
/* The image's immediate parent (often a .relative.cursor-pointer
   wrapper) \u2014 paint graphite so transparent image regions don't
   show through to a light bg. */
html body .hl-card-content .wp-site-no-padding:not(#__reos_never_id),
html body [class*="wp-site"] .relative.cursor-pointer:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
}

/* v0.11.16: kill the gray-200 border-bottom on .hl-toolbar \u2014 the
   dashboard sticky header wrapper that holds the title input +
   Edit Mode controls. Tim flagged the visible #EAECF0 hairline
   below the title bar on the dashboard edit view. The selector
   chain has high specificity via :not(#__reos_never_id) to beat
   GHL's inline-ish rules at runtime. */
html body .hl-toolbar:not(#__reos_never_id),
html body [class~="hl-toolbar"]:not(#__reos_never_id) {
  border-bottom: none !important;
  border-bottom-color: transparent !important;
  border-bottom-width: 0 !important;
}

/* v0.11.13 / v0.11.14: title-style inputs render as inline-editable
   text (no field-box surround). Tim flagged the "Enter Dashboard
   Name" input on the dashboard editor \u2014 it's a HEADING, not a form
   field. v0.11.13 only nuked the inline slate on the <input> itself,
   but the slate visually persists because the wrapping .n-input
   container paints slate from the global section-19 rules. v0.11.14
   uses :has() to find the wrapping .n-input and transparent it too,
   plus kill the .n-input__border / __state-border overlays.
   Pair with the forceInputSlateBackground skip in the JS coercer. */
html body input[placeholder="Enter Dashboard Name"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Wrapping .n-input \u2014 transparent bg with a steel border so the
   title input reads as a clean editable field without the slate
   fill. v0.11.15: Tim's call after v0.11.14 went too far (no border
   at all). Steel 1px outline around the .n-input wrapper; inner
   layers stay transparent. */
html body .n-input:has(input[placeholder="Enter Dashboard Name"]):not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  --n-color: transparent !important;
  --n-color-focus: transparent !important;
  --n-color-disabled: transparent !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
}
html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input-wrapper:not(#__reos_never_id),
html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input__input:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
/* The .__border + .__state-border overlays are how Naive renders
   its borders. With the steel border now on the host .n-input, kill
   these overlays so they don't double-stripe. */
html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input__border:not(#__reos_never_id),
html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input__state-border:not(#__reos_never_id) {
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  background: transparent !important;
}

/* v0.11.11: Dashboard goal-picker cards \u2014 "Track Leads & Sources",
   "Client Communication & Engagement", "Appointment & Scheduling
   Management", "Sales & Revenue Tracking", "Marketing & Ad Performance",
   "Team Performance". GHL ships each card with its own Tailwind
   color utility (bg-warning-50, bg-success-50, bg-blue-50, bg-pink-50,
   bg-purple-50) plus matching colored icon backdrop (bg-{color}-100)
   plus colored SVG icon. Tim's canon: ALL cards uniform \u2014 slate bg,
   bone text, emerald icons.
   The cards share a unique class signature:
     article.flex.items-center.rounded-lg.cursor-pointer.box-border.border
   That signature is tight enough to scope this rule to dashboard goal
   cards and nothing else. */
html body article[class*="flex"][class*="items-center"][class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"][class*="border"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
/* Icon-backdrop circle inside each card \u2014 uniform slate (matches
   the parent card so the circle disappears visually) OR keep the
   subtle emerald-glow halo. Going with slate for the cleanest
   look per Tim's request. */
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] [class*="rounded-full"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}
/* Icon \u2014 emerald stroke uniformly. */
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg path:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg circle:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg rect:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Card text \u2014 all spans/p inside read as bone. */
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] span:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] p:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* v0.11.10: pink + rose family \u2014 Tim flagged the "Marketing & Ad
   Performance" goal card on the dashboard. Tailwind pink-50/100/200
   and rose-50/100/200 ship as #FDF2F8 / #FCE7F3 / pink-200 etc.
   Card surface (pink-50) \u2192 graphite to match the other goal cards.
   Icon-backdrop circle (pink-100) \u2192 emerald-glow tint so the icon
   sits on a subtle accent halo consistent with other goal cards. */
html body .bg-pink-50:not(#__reos_never_id),
html body [class*="bg-pink-50"]:not(#__reos_never_id),
html body .bg-rose-50:not(#__reos_never_id),
html body [class*="bg-rose-50"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
html body .bg-pink-100:not(#__reos_never_id),
html body [class*="bg-pink-100"]:not(#__reos_never_id),
html body .bg-rose-100:not(#__reos_never_id),
html body [class*="bg-rose-100"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}
html body .bg-pink-200:not(#__reos_never_id),
html body [class*="bg-pink-200"]:not(#__reos_never_id),
html body .bg-rose-200:not(#__reos_never_id),
html body [class*="bg-rose-200"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}
/* Pink/rose text-* utilities \u2014 most of these are decorative chip
   text that reads better as bone or ash; default to bone. */
html body .text-pink-500:not(#__reos_never_id),
html body .text-pink-600:not(#__reos_never_id),
html body .text-pink-700:not(#__reos_never_id),
html body .text-rose-500:not(#__reos_never_id),
html body .text-rose-600:not(#__reos_never_id),
html body .text-rose-700:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .border-pink-50:not(#__reos_never_id),
html body .border-pink-100:not(#__reos_never_id),
html body .border-pink-200:not(#__reos_never_id),
html body .border-rose-50:not(#__reos_never_id),
html body .border-rose-100:not(#__reos_never_id),
html body .border-rose-200:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}
/* Pink/rose SVG fills (decorative icons inside the .bg-pink-100
   circles) \u2014 flip the stroke/fill to emerald so the icon reads as
   accent on the emerald-glow backdrop. */
html body .bg-pink-50 svg:not(#__reos_never_id),
html body .bg-pink-50 svg path:not(#__reos_never_id),
html body .bg-pink-100 svg:not(#__reos_never_id),
html body .bg-pink-100 svg path:not(#__reos_never_id),
html body [class*="bg-pink"] svg:not(#__reos_never_id),
html body [class*="bg-pink"] svg path:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Tailwind gray-25/50/100 \u2192 graphite (placeholder + chrome bg).
   gray-200 borders already handled via section 16. */
html body .bg-gray-25:not(#__reos_never_id),
html body .bg-gray-50:not(#__reos_never_id),
html body .bg-gray-100:not(#__reos_never_id),
html body [class*="bg-gray-25"]:not(#__reos_never_id),
html body [class*="bg-gray-50"]:not(#__reos_never_id),
html body [class*="bg-gray-100"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
html body .border-gray-50:not(#__reos_never_id),
html body [class*="border-gray-50"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}
/* v0.12.15: bare Tailwind .border class (no color modifier) resolves
   to gray-200 via Tailwind's preflight default
     * { border-color: theme(borderColor.DEFAULT) }  \u2192 #E5E7EB
   Tim flagged the WordPress "White-Glove Migration Assistance" card
   which uses class="... rounded border p-6 ..." with no explicit
   color. Pin .border \u2192 steel. Elements with an explicit color modifier
   (.border-emerald, .border-red-500, .border-gray-* family above)
   keep their override by source order \u2014 those rules sit BELOW this
   one in the cascade for any chained color, but the more-specific
   intent classes (border-emerald etc.) typically appear later in
   their own remap blocks. Net effect: bare .border \u2192 steel, named
   colors unchanged. */
html body .border:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* v0.12.16: .hr-input__inline-text \u2014 Highrise's inline-editable text
   widget. Shows rendered text in normal state and becomes an <input>
   when clicked. Used for the WordPress site title ("PORCH Investor
   Website") and similar inline-rename fields. Naive's defaults:
     --n-text-color: var(--gray-900)        \u2192 invisible on graphite
     --n-background-color: var(--white)     \u2192 white box on hover
   Override the CSS vars so the text reads bone in all states and
   the hover affordance is a slate fill + steel hairline border
   (indicates "click to edit" without a bright white box). */
html body .hr-input__inline-text:not(#__reos_never_id),
html body .hr-input__inline-text.has-value:not(#__reos_never_id) {
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-cool-gray) !important;
  --n-placeholder-color: var(--reos-ash) !important;
  --n-placeholder-color-disabled: var(--reos-cool-gray) !important;
  --n-background-color: transparent !important;
  --n-color-disabled: transparent !important;
  --n-background-color-disabled: transparent !important;
  --n-background-color-hover-disabled: transparent !important;
  --n-icon-color: var(--reos-ash) !important;
  --n-icon-color-disabled: var(--reos-cool-gray) !important;
  --n-border: none !important;
  --n-border-hover: 1px solid var(--reos-steel) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-caret-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  background-color: transparent !important;
}
html body .hr-input__inline-text:not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
}
/* The inner <p class="n-p hr-input__text-content--active"> carries
   its own inline --n-text-color var. Pin bone on the rendered text
   so it doesn't fall back to gray-900 on first paint. */
html body .hr-input__text-content:not(#__reos_never_id),
html body .hr-input__text-content--active:not(#__reos_never_id),
html body .n-p.hr-input__text-content--active:not(#__reos_never_id),
html body .hr-input__text-content:not(#__reos_never_id) p,
html body .hr-input__text-content--active:not(#__reos_never_id) p {
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
}

/* Dialer / keypad component (visible on dispositions + call
   surfaces). White bg + gray-200 borders by default. */
html body .keypad:not(#__reos_never_id),
html body [class*="keypad"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .dialer-navigation:not(#__reos_never_id),
html body [class*="dialer-navigation"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-top-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
}

/* 18a-purple-amber-callouts (v0.9.29). Voicemail page has two
   light-tinted callouts not covered by previous sweeps:
   1) Voice AI banner \u2014 .text-purple-600 text + .border-purple-*
      surround. Tim wants the text legible against dark theme.
   2) Amber 'Timeout duration too high' alert \u2014 cream/yellow bg
      + amber text. Theme to a warning amber on dark surface. */
html body .text-purple-50:not(#__reos_never_id),
html body .text-purple-100:not(#__reos_never_id),
html body .text-purple-200:not(#__reos_never_id),
html body .text-purple-300:not(#__reos_never_id),
html body .text-purple-400:not(#__reos_never_id),
html body .text-purple-500:not(#__reos_never_id),
html body .text-purple-600:not(#__reos_never_id),
html body .text-purple-700:not(#__reos_never_id),
html body .text-purple-800:not(#__reos_never_id),
html body .text-purple-900:not(#__reos_never_id),
html body [class*="text-purple-"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* 18a-hr-date-panel \u2014 GLOBAL CALENDAR CANON (v0.9.82-94, locked
   v0.9.95). Tim approved this rule set as the canonical look for
   every .hr-date-panel / .n-date-panel popover across the app.
   Future date-picker work should preserve this exact set unless
   Tim explicitly opts in to a change.

   CANON:
     Panel surface (all sub-containers)  slate    #1A1F28
     Panel border + dividers             steel    #252C36
     Weekday labels (Su Mo Tu...)        ash      #9098A3
     Weekday row separator               1px steel via box-shadow
                                         (border-bottom loses the
                                         specificity tie to the
                                         v0.9.86 universal border-
                                         strip rule \u2014 see v0.9.93)
     Clickable date current month        bone     #EDEEF0
     Excluded clickable (other month)    ash      #9098A3
     Disabled (unclickable)              steel    #252C36 (very
                                         subtle on slate, intentional)
     Today (--current)                   blue     #4B8BF5 (text only,
                                         NO box / NO surround, .__sup
                                         indicator hidden)
     Hover                               graphite cell bg, rounded
                                         4px, text bone stays on top
                                         via z-index 1 on cell
     Selected (user clicked)             emerald bg + obsidian text
     In-range covered/included           emerald-glow bg
     Month-nav arrows                    ash resting, emerald hover,
                                         no border/outline/shadow
                                         in any state
     Action footer (Clear/Confirm)       slate bg, steel border-top

   KEY MECHANISMS:
     - State colors paint on .hr-date-panel-date cell (24x24), NOT
       the .__trigger overlay (38x32 absolute-positioned), so text
       stays visible
     - .hr-date-panel-date z-index 1, .__trigger z-index 0 so the
       text node stacks above the trigger overlay
     - Coercer skip in coerceDarkDropdowns prevents JS from
       repainting slate inline on every descendant
     - Universal border-strip rule on .hr-date-panel * removes any
       Vue scoped CSS painting cell/wrapper borders */
/* v0.9.86 \u2192 v0.9.90: panel bg switched from graphite to slate
   throughout per Tim's new spec. Disabled text \u2192 steel (very
   subtle on slate, intentional "barely there" cue). Today blue,
   excluded ash, clickable bone all unchanged. */
html body .hr-date-panel:not(#__reos_never_id) {
  --n-panel-color: var(--reos-slate) !important;
  --n-panel-text-color: var(--reos-bone) !important;
  --n-panel-header-divider-color: var(--reos-steel) !important;
  --n-panel-action-divider-color: var(--reos-steel) !important;
  --n-calendar-title-color-hover: var(--reos-graphite) !important;
  --n-calendar-title-text-color: var(--reos-bone) !important;
  --n-calendar-days-divider-color: var(--reos-steel) !important;
  --n-calendar-days-text-color: var(--reos-ash) !important;
  --n-calendar-divider-color: var(--reos-steel) !important;
  --n-item-text-color: var(--reos-bone) !important;
  --n-item-color-included: var(--reos-emerald-glow) !important;
  --n-item-color-disabled: transparent !important;
  --n-item-color-hover: transparent !important;
  --n-item-color-active: transparent !important;
  --n-item-text-color-disabled: var(--reos-steel) !important;
  --n-item-text-color-active: var(--reos-obsidian) !important;
  --n-arrow-color: var(--reos-ash) !important;
  --n-icon-color: var(--reos-ash) !important;
  --n-icon-color-disabled: var(--reos-steel) !important;
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}
/* Inner sub-containers \u2014 match the slate panel surface. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-calendar,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-dates,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-actions {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}
/* Kill every internal border inside the panel (Tim flagged the
   1px gray-200 borders showing on every cell + weekday header
   + grid wrappers \u2014 they came from the old [class*=] substring
   selector). Strip them comprehensively. */
html body .hr-date-panel:not(#__reos_never_id) *:not(#__reos_never_id) {
  border-color: transparent !important;
  border-width: 0 !important;
}
/* Panel surface \u2014 kill the inline shadow that reads as a bright
   halo against the dark theme. */
html body .hr-date-panel:not(#__reos_never_id) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
}
/* Month-title row text (May 2026 / Jun 2026). */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__text,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__month-year {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Weekday labels (Su / Mo / Tu / We / Th / Fr / Sa). v0.9.92:
   stayed on slate per Tim (graphite band in v0.9.91 looked off);
   instead, use a steel border-bottom + small bottom margin to
   separate the weekday header from the dates grid. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays__day,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  /* v0.9.93: box-shadow instead of border-bottom because the
     v0.9.86 universal border-stripping rule (specificity 0,2,1,2)
     beats this rule's border-bottom paint. box-shadow isn't
     stripped, so the 1px steel divider actually renders. */
  box-shadow: 0 1px 0 0 var(--reos-steel) !important;
  margin-bottom: 4px !important;
  padding-bottom: 4px !important;
}
/* Day cells \u2014 resting bone. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Excluded (other month) cells \u2014 ash (muted but readable). */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  opacity: 1 !important;
}
/* Disabled (unclickable) cells \u2014 steel per Tim's v0.9.90 spec.
   Very subtle on slate bg (just slightly lighter than the
   surface), giving a "this is here but not for you" cue. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--disabled,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--disabled * {
  color: var(--reos-steel) !important;
  -webkit-text-fill-color: var(--reos-steel) !important;
  opacity: 1 !important;
}
/* Combined excluded + disabled \u2014 same steel. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded.hr-date-panel-date--disabled,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded.hr-date-panel-date--disabled * {
  color: var(--reos-steel) !important;
  -webkit-text-fill-color: var(--reos-steel) !important;
}
/* Trigger overlay \u2014 ALWAYS transparent. State colors (hover,
   current, selected, in-range) move to the .hr-date-panel-date
   cell itself via z-index/relative positioning so the text node
   sits ON TOP of the bg layer instead of behind the trigger
   overlay. v0.9.86: previously the trigger painted state colors
   and (being 38\xD732 absolute-positioned over a 24\xD724 cell)
   covered the date number text entirely. */
html body .hr-date-panel:not(#__reos_never_id) {
  --n-item-color: transparent !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::before,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::after {
  background-color: transparent !important;
  background: transparent !important;
}
/* Ensure the date number sits ABOVE the trigger. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date {
  z-index: 1 !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger {
  z-index: 0 !important;
}
/* Hover \u2014 graphite bg on the CELL. v0.9.90: panel surface is
   now slate, so hover drops to graphite (darker) for contrast. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date:not(.hr-date-panel-date--disabled):hover {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-radius: 4px !important;
}
/* Current (today) \u2014 blue text, NO box / NO surround. Tim's call:
   today indicator should be a quiet color shift, not a chunky
   filled cell that competes with the user's actual selection. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--current {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
/* Selected (user-clicked start / end of range) \u2014 emerald bg on
   the cell (24\xD724, fits behind the number). */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--selected {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-radius: 4px !important;
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}
/* Kill the small dot indicator (.hr-date-panel-date__sup) Naive
   renders inside today's cell \u2014 we already signal today via the
   blue text color, no extra marker needed. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--current .hr-date-panel-date__sup,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__sup {
  display: none !important;
}
/* v0.9.88: removed the leftover obsidian-text rule that
   over-rode v0.9.87's blue today indicator. Selected cell
   (user-clicked) still gets obsidian via its own rule above. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--selected {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}
/* Dates inside selected range \u2014 emerald-glow bg, bone text. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--covered .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--covered .hr-date-panel-date__trigger::before,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--included .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--included .hr-date-panel-date__trigger::before {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}
/* Vertical divider between the two month panels + horizontal
   divider above the dates grid. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel__vertical-divider,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel__divider {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
/* Action footer (Clear / Confirm row) \u2014 slate to match the rest
   of the panel. v0.9.91: was graphite from the v0.9.82 rule \u2014
   updated to slate so the footer doesn't read as a separate
   panel band against the slate calendar grid above. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-actions {
  border-top: 1px solid var(--reos-steel) !important;
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}
/* Month-nav SVG arrows (prev / next / fast-prev / fast-next) \u2014
   bone resting, emerald on hover. v0.9.94: defensive kill on
   border/outline/box-shadow \u2014 Tim flagged a visible "1px border"
   on these arrows. Computed values were 0 but some scoped Vue
   CSS or focus-ring rule was painting a visible rectangle.
   Hover bg flipped to graphite (one shade darker than slate)
   so the press feedback is visible. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next {
  color: var(--reos-ash) !important;
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-width: 0 !important;
  outline: none !important;
  box-shadow: none !important;
}
/* v0.9.98: hover bg fully transparent. v0.9.94's graphite hover
   bg created a visible rectangle on the slate panel which Tim
   read as a "1px border" around the arrow on hover. Icon color
   shift bone \u2192 emerald is enough feedback. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev:hover,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next:hover,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev:hover,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next:hover {
  color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev:focus,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev:focus-visible,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next:focus,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next:focus-visible,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev:focus,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev:focus-visible,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next:focus,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}
/* v0.9.96: SVG anti-alias / stroke kill for the month-nav arrow
   icons. Despite computed border/outline/shadow all reading 0,
   Tim sees a faint 1px outline on these arrows. The SVG has
   stroke-width="1" baked into its <g> attributes \u2014 if any CSS
   rule paints stroke on the SVG/g/path, a 1px outline renders.
   Force stroke-width: 0 + stroke: none + shape-rendering:
   geometricPrecision (cleaner edges) so any latent stroke rule
   has zero width and the arrow renders as a pure fill-only shape. */
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev svg,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next svg,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev svg,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next svg,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev svg g,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next svg g,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev svg g,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next svg g,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__prev svg path,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__next svg path,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-prev svg path,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__fast-next svg path {
  stroke: none !important;
  stroke-width: 0 !important;
  shape-rendering: geometricPrecision !important;
  filter: none !important;
}

/* 18a-ui-empty-icon (v0.9.81). The empty-state icon container on
   Invoices "No invoices to show yet" ships with an 8px emerald-50
   border (rgb(236, 253, 245) / #ECFDF5) \u2014 reads as a giant pale-
   green/white halo around the search glyph. Per Tim's icon-badge
   canon (see Objects page .bg-primary-100.rounded-full fix), kill
   the surround \u2014 bare icon, no badge ring. */
html body .ui-empty-icon:not(#__reos_never_id),
html body [class*="ui-empty-icon"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
}

/* 18a-ui-statistic (v0.9.80). The 4 stat cards on Invoices page
   (Draft / Due / received / Overdue) are .ui-statistic elements
   with border 1px solid rgb(234, 236, 240) (gray-200). Card bg
   is already slate via the coercer. Steel border keeps the cards
   visually defined without the bright gray-200 ring. */
html body .ui-statistic:not(#__reos_never_id),
html body [class*="ui-statistic"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* 18a-hr-card-header-divider (v0.9.78). .hr-card-header ships with
   border-bottom: 1px solid rgb(234, 236, 240) (gray-200) as the
   divider between header and card body. Visible on Labs settings
   between each feature title row and its description body. Our
   .border-gray-200 utility remap doesn't reach this since the
   border is set via the .hr-card-header native rule, not the
   Tailwind utility class. Pin steel. */
html body .hr-card-header:not(#__reos_never_id),
html body [class*="hr-card-header"]:not(#__reos_never_id) {
  border-bottom-color: var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

/* 18a-richtext-toolbar (v0.10.3 \u2192 v0.10.4). The TipTap rich-text
   editor in Invoice/Estimate Settings (Title & Terms). Full
   canon: graphite surface, steel borders, bone icons resting,
   emerald-glow bg + emerald icon active, slate hover bg, emerald
   caret + emerald-glow text selection. */

/* Icons \u2014 inline svg (Bold/Underline/Italic/etc): bone resting. */
html body .toolbar_button:not(#__reos_never_id) svg,
html body .toolbar_button:not(#__reos_never_id) svg path,
html body #editor-toolbar:not(#__reos_never_id) svg,
html body #editor-toolbar:not(#__reos_never_id) svg path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}
/* Hover: emerald icon + slate bg cell. */
html body .toolbar_button:not(#__reos_never_id):hover svg,
html body .toolbar_button:not(#__reos_never_id):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active (format applied to selection) \u2014 TipTap marks the
   button with .is-active OR aria-pressed="true". Cover both.
   v0.10.5: emerald-glow at 12% (var) was barely visible; bumped
   to ~28% custom rgba + added emerald border ring for clear
   "this format is on" cue. */
html body .toolbar_button.is-active:not(#__reos_never_id),
html body .toolbar_button[aria-pressed="true"]:not(#__reos_never_id),
html body .toolbar_button.active:not(#__reos_never_id) {
  background-color: rgba(15, 181, 126, 0.28) !important;
  background: rgba(15, 181, 126, 0.28) !important;
  border: 1px solid var(--reos-emerald) !important;
  border-radius: 4px !important;
}
html body .toolbar_button.is-active:not(#__reos_never_id) svg,
html body .toolbar_button.is-active:not(#__reos_never_id) svg path,
html body .toolbar_button[aria-pressed="true"]:not(#__reos_never_id) svg,
html body .toolbar_button[aria-pressed="true"]:not(#__reos_never_id) svg path,
html body .toolbar_button.active:not(#__reos_never_id) svg,
html body .toolbar_button.active:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Active state for base64 <img> icons \u2014 apply emerald drop-shadow
   filter as a visual cue (since the bone-colored svg pixels can't
   be directly recolored via CSS \u2014 they're rasterized). The bg
   change above already signals active; this just reinforces. */
html body .toolbar_button.is-active:not(#__reos_never_id) img.toolbar-button__icon,
html body .toolbar_button[aria-pressed="true"]:not(#__reos_never_id) img.toolbar-button__icon,
html body .toolbar_button.active:not(#__reos_never_id) img.toolbar-button__icon {
  filter: drop-shadow(0 0 1px var(--reos-emerald)) drop-shadow(0 0 1px var(--reos-emerald)) !important;
}
/* Toolbar surface \u2014 graphite. */
html body #editor-toolbar:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
/* Button cells \u2014 transparent at rest, slate on hover. */
html body .toolbar_button:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border-radius: 4px !important;
  cursor: pointer !important;
}
html body .toolbar_button:not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
}
/* Disabled toolbar button (e.g. Undo/Redo when no history) \u2014
   half opacity + no hover state + ash icon. */
html body .toolbar_button:not(#__reos_never_id):disabled,
html body .toolbar_button[disabled]:not(#__reos_never_id) {
  opacity: 0.4 !important;
  cursor: not-allowed !important;
  background-color: transparent !important;
}
html body .toolbar_button:not(#__reos_never_id):disabled:hover,
html body .toolbar_button[disabled]:not(#__reos_never_id):hover {
  background-color: transparent !important;
}

/* Outer editor container + divider between toolbar and content
   \u2014 replace the GHL gray-200 default with steel. */
html body .editor-container:not(#__reos_never_id),
html body .toolbar_container:not(#__reos_never_id),
html body .border_bottom:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
}

/* TipTap ProseMirror content area + the .bg-white wrapper that
   houses the editor \u2014 graphite, not white. */
html body .editor-container:not(#__reos_never_id),
html body .editor-wrapper:not(#__reos_never_id),
html body .ProseMirror:not(#__reos_never_id),
html body .tiptap:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  caret-color: var(--reos-emerald) !important;
}
html body .ProseMirror:not(#__reos_never_id) p,
html body .ProseMirror:not(#__reos_never_id) p * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Text selection inside the editor \u2014 emerald-glow background. */
html body .ProseMirror::selection,
html body .tiptap::selection,
html body .ProseMirror *::selection,
html body .tiptap *::selection {
  background-color: var(--reos-emerald-glow) !important;
}

/* v0.10.6: kill the rich-text-editor toolbar tooltips. They were
   rendered via ::after / ::before pseudos and obstructed clicks
   on the icons above them. Tim's call: drop the tooltips entirely;
   the aria-label still provides accessibility info to screen
   readers, and the icons are conventional enough to be self-
   explanatory. */
html body .toolbar_button:not(#__reos_never_id)::before,
html body .toolbar_button:not(#__reos_never_id)::after,
html body .toolbar_button:not(#__reos_never_id):hover::before,
html body .toolbar_button:not(#__reos_never_id):hover::after,
html body .toolbar_button:not(#__reos_never_id):focus::before,
html body .toolbar_button:not(#__reos_never_id):focus::after,
html body #editor-toolbar [role="tooltip"]:not(#__reos_never_id),
html body #editor-toolbar [class*="tooltip"]:not(#__reos_never_id) {
  display: none !important;
  visibility: hidden !important;
  content: none !important;
  pointer-events: none !important;
  opacity: 0 !important;
}

/* v0.10.5: visual group separators between toolbar button bands.
   The toolbar has logical groups (history / formatting / fonts /
   color / lists / alignment / insert / custom) but no structural
   wrappers. Target the FIRST button of each group via its unique
   aria-label and paint a 1px steel left border + spacing. The
   eye reads the toolbar as chunked groups instead of a flat row. */
html body #editor-toolbar [aria-label="Bold"],
html body #editor-toolbar [aria-label="Font size"],
html body #editor-toolbar [aria-label="Font Color"],
html body #editor-toolbar [aria-label="Format selected"],
html body #editor-toolbar [aria-label="Disc List"],
html body #editor-toolbar [aria-label="Align text to Left"],
html body #editor-toolbar [aria-label="Add Image"],
html body #editor-toolbar [aria-label="Custom Values"] {
  border-left: 1px solid var(--reos-steel) !important;
  margin-left: 8px !important;
  padding-left: 8px !important;
}

/* 18a-headlessui-menu (v0.9.97). HeadlessUI / Tailwind dropdown
   menus (role="menu" with a[role="menuitem"] children) inherit
   color cascade from their DOM parent. When the dropdown trigger
   anchor in the top nav has .router-link-active (because the
   current page is under it), the section-3 rule
     .sidebar-v2 a[class*="active"] *  \u2192 emerald
   cascades emerald onto every dropdown menu item descendant \u2014
   including inactive items. Tim flagged this on the Invoices &
   Estimates dropdown (Recurring/Templates/Estimates rendered
   emerald along with the active All Invoices).

   Canon for dropdown menu items, mirroring our .n-dropdown rules:
     Static    : bone text, transparent bg
     Hover     : bone text, slate bg
     Active    : emerald text, emerald-glow bg

   High specificity to beat the inherited "any descendant of an
   active anchor \u2192 emerald" cascade. */
html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id) span,
html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id) > *:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
}
/* Hover (inactive item) \u2014 slate bg, bone text stays. */
html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
}
html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover span,
html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover > * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Active item \u2014 emerald text + emerald-glow bg. */
html body [role="menu"] a[role="menuitem"].active:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"].router-link-active:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"].router-link-exact-active:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"].active:not(#__reos_never_id) span,
html body [role="menu"] a[role="menuitem"].router-link-active:not(#__reos_never_id) span,
html body [role="menu"] a[role="menuitem"].router-link-exact-active:not(#__reos_never_id) span,
html body [role="menu"] a[role="menuitem"].active:not(#__reos_never_id) > *,
html body [role="menu"] a[role="menuitem"].router-link-active:not(#__reos_never_id) > *,
html body [role="menu"] a[role="menuitem"].router-link-exact-active:not(#__reos_never_id) > * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body [role="menu"] a[role="menuitem"].active:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"].router-link-active:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"].router-link-exact-active:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
}
/* Menu surface \u2014 graphite panel + steel border, kill the bg-white
   Tailwind class on the menu container. */
html body [role="menu"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  --tw-ring-color: var(--reos-steel) !important;
  --tw-ring-opacity: 1 !important;
}

/* 18a-hr-text-link (v0.9.77). GHL uses .hr-text elements as text
   leaves AND, when they also carry role="button" or .cursor-
   pointer, as clickable text-link affordances ("Show More",
   "View All", inline link text). Tim's canon: clickable text =
   blue. v0.9.77 paints these blue + stays blue on hover (no
   emerald flip per the v0.9.70 ui-text-btn pattern). Inline
   bone !important from the FORCE_RULE is now excluded above so
   this stylesheet rule wins. */
html body p.hr-text[role="button"]:not(#__reos_never_id),
html body .hr-text[role="button"]:not(#__reos_never_id),
html body .hr-text.cursor-pointer:not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body p.hr-text[role="button"]:not(#__reos_never_id):hover,
html body .hr-text[role="button"]:not(#__reos_never_id):hover,
html body .hr-text.cursor-pointer:not(#__reos_never_id):hover {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}

/* 18a-hr-switch (v0.9.76). Parallel of .n-switch for the Highrise
   switch component used on Labs settings page (Knowledge Base
   Gaps, Voice AI Performance, Number Porting, etc. feature
   toggles). Defaults ship gray-100 rail + white thumb + brand-
   blue active rail. Mirror the .n-switch canon (v0.7.x):
     OFF rail   \u2192 steel    Thumb \u2192 bone
     ON  rail   \u2192 emerald  Thumb \u2192 bone
     Disabled   \u2192 50% opacity
     Focus ring \u2192 emerald-glow (subtle, keyboard-only) */
html body .hr-switch:not(#__reos_never_id) {
  --n-rail-color: var(--reos-steel) !important;
  --n-rail-color-active: var(--reos-emerald) !important;
  --n-loading-color: var(--reos-emerald) !important;
  --n-button-color: var(--reos-bone) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-box-shadow: none !important;
}
/* Off state rail \u2014 pin steel explicitly (coercer may paint slate). */
html body .hr-switch.hr-switch--round:not([aria-checked="true"]):not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch:not([aria-checked="true"]):not(#__reos_never_id) .hr-switch__rail {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
/* On state rail \u2014 emerald. */
html body .hr-switch.hr-switch--round[aria-checked="true"]:not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch[aria-checked="true"]:not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch.hr-switch--active:not(#__reos_never_id) .hr-switch__rail {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}
/* Thumb \u2014 always bone with subtle shadow for visibility. */
html body .hr-switch:not(#__reos_never_id) .hr-switch__button,
html body .hr-switch:not(#__reos_never_id) .hr-switch__button-placeholder {
  background-color: var(--reos-bone) !important;
  background: var(--reos-bone) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;
}
/* Kill focus halo blue. */
html body .hr-switch:not(#__reos_never_id):focus,
html body .hr-switch:not(#__reos_never_id):focus-visible {
  outline: none !important;
}

/* 18a-labs-beta-banner (v0.9.76). The "Welcome to our Beta Program"
   banner on Labs settings is a bright bg-blue-600 hero. Theme to
   graphite + steel border + emerald accent (consistent with our
   "info banner" canon \u2014 see v0.9.41 sip block treatment). */
html body div[class*="bg-blue-600"]:not(#__reos_never_id),
html body div[class*="bg-blue-500"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
}

/* 18a-row-action-icons (v0.9.75). Universal hover states for the
   row-action icon pair Tim approved:
     Pencil (edit)  \u2192 bone resting, EMERALD on parent-button hover
     Trash  (delete)\u2192 bone resting, CRIMSON on parent-button hover
   Match by path d-attribute prefixes so the canon applies to
   every instance across GHL \u2014 Tags settings row actions, dropdown
   menu Edit/Delete, contact-detail panels, anywhere. */

/* === PENCIL (edit) ICON \u2014 bone \u2192 emerald on hover === */
/* Variant 1: M18 2l4 4M2 22l1.276-4.68 (dropdown + row action pattern) */
/* Variant 2: M2.876 18.116c.046-.414.069-.62.131 (Tags row variant) */
html body svg path[d^="M18 2l4 4M2 22l1.276-4.68"]:not(#__reos_never_id),
html body svg path[d^="M2.876 18.116c.046-.414.069-.62.131"]:not(#__reos_never_id) {
  stroke: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
  fill: none !important;
}
html body button:has(svg path[d^="M18 2l4 4M2 22l1.276-4.68"]):not(#__reos_never_id):hover svg path,
html body button:has(svg path[d^="M2.876 18.116c.046-.414.069-.62.131"]):not(#__reos_never_id):hover svg path,
html body button:has(svg path[d^="M18 2l4 4M2 22l1.276-4.68"]):not(#__reos_never_id):hover svg,
html body button:has(svg path[d^="M2.876 18.116c.046-.414.069-.62.131"]):not(#__reos_never_id):hover svg {
  stroke: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}

/* === TRASH (delete) ICON \u2014 bone \u2192 crimson on hover === */
/* Path prefix: M16 6v-.8c0-1.12 0-1.68-.218-2.108 (canonical trash shape) */
html body svg path[d^="M16 6v-.8c0-1.12 0-1.68-.218-2.108"]:not(#__reos_never_id) {
  stroke: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
  fill: none !important;
}
html body button:has(svg path[d^="M16 6v-.8c0-1.12 0-1.68-.218-2.108"]):not(#__reos_never_id):hover svg path,
html body button:has(svg path[d^="M16 6v-.8c0-1.12 0-1.68-.218-2.108"]):not(#__reos_never_id):hover svg {
  stroke: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}
/* Hover on the parent button should also flip the row-action
   button's border to the same accent \u2014 emerald for edit, crimson
   for delete \u2014 instead of the default emerald hover from v0.9.13. */
html body button:has(svg path[d^="M16 6v-.8c0-1.12 0-1.68-.218-2.108"]):not(#__reos_never_id):hover {
  border-color: var(--reos-crimson) !important;
}

/* 18a-hr-icon-default (v0.9.74). GHL Highrise design system
   wraps SVG icons in <span class="hr-icon"><span class="hr-icon-
   inner"><svg .../></span></span>. Default stroke renders gray-
   900 rgb(16, 24, 40) \u2014 invisible on graphite. Tags settings page
   column headers ("Created on", "Updated on") use these for the
   calendar / tag icons. Force the whole .hr-icon family to bone
   so any icon rendered through this wrapper is readable. */
html body .hr-icon:not(#__reos_never_id) svg,
html body .hr-icon:not(#__reos_never_id) svg path,
html body .hr-icon-inner:not(#__reos_never_id) svg,
html body .hr-icon-inner:not(#__reos_never_id) svg path,
html body span.hr-icon:not(#__reos_never_id),
html body span.hr-icon-inner:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
  fill: none !important;
}
/* Respect the .text-gray-400 / .text-gray-500 / .text-gray-300
   modifiers on .hr-icon \u2014 those signal "muted icon, render ash". */
html body .hr-icon.text-gray-400:not(#__reos_never_id) svg,
html body .hr-icon.text-gray-400:not(#__reos_never_id) svg path,
html body .hr-icon.text-gray-500:not(#__reos_never_id) svg,
html body .hr-icon.text-gray-500:not(#__reos_never_id) svg path,
html body .hr-icon.text-gray-300:not(#__reos_never_id) svg,
html body .hr-icon.text-gray-300:not(#__reos_never_id) svg path,
html body .hr-icon-inner.text-gray-400:not(#__reos_never_id) svg,
html body .hr-icon-inner.text-gray-400:not(#__reos_never_id) svg path,
html body .hr-icon-inner.text-gray-500:not(#__reos_never_id) svg,
html body .hr-icon-inner.text-gray-500:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

/* 18a-hr-dropdown-prefix (v0.9.73). The .hr-dropdown-menu that
   opens from the kebab (Edit / Delete options on Private
   Integrations row) inherits our --n-option-text-color (bone),
   --n-option-color-hover (slate), --n-option-color-active
   (emerald-glow) via earlier rules. But three inline-default
   vars stay un-overridden and can render dark or light:
     --n-prefix-color: gray-700  (icon slot)
     --n-suffix-color: gray-700  (suffix slot)
     --n-divider-color: gray-100 (visible bright divider)
   Pin all three + force the prefix SVG icons themselves to bone
   (resting) and emerald (active row) so they follow the row's
   color state. */
html body .hr-dropdown-menu:not(#__reos_never_id),
html body .hr-dropdown:not(#__reos_never_id),
html body [class*="hr-dropdown-menu"]:not(#__reos_never_id) {
  --n-prefix-color: var(--reos-bone) !important;
  --n-suffix-color: var(--reos-bone) !important;
  --n-divider-color: var(--reos-steel) !important;
  --n-group-header-text-color: var(--reos-ash) !important;
}
/* Prefix + suffix icon SVGs \u2014 explicit stroke + color so they
   don't fall through to gray-700 from the var. Bone at rest. */
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__suffix svg,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__suffix svg path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}
/* Active row \u2014 icons follow text emerald per canon. */
html body .hr-dropdown-option.is-active:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option.is-active:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option.is-selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option.is-selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option--selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option--selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* 18a-kebab-icon-universal (v0.9.71 \u2192 v0.9.72). Vertical-kebab
   (3-dot "more actions" trigger) ships across the app \u2014 table-
   row action menus, card kebabs, etc. \u2014 painted ash + wrapped
   in a slate box.
   v0.9.71 mistakenly unboxed the button entirely. v0.9.72
   restores the canonical pattern from v0.8.95 / table-action
   kebabs Tim approved long ago:
     Resting       \u2192 graphite bg + 1px steel border + blue dots
     Hover         \u2192 graphite bg + 1px EMERALD border + blue dots
     Focus/active  \u2192 graphite bg + 1px emerald border + blue dots
   Match by path d-attribute prefix so this canon applies to
   EVERY kebab regardless of which button family wraps it. */
html body svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]:not(#__reos_never_id) {
  stroke: var(--reos-blue) !important;
  color: var(--reos-blue) !important;
  fill: none !important;
}
html body svg:has(path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}
/* Button wrapping the kebab \u2014 graphite bg + steel border canon. */
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  --n-color: var(--reos-graphite) !important;
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
/* Hover: emerald border, dots stay blue, bg stays graphite. */
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id):hover,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id):focus,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id):focus-visible,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id):active {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-emerald) !important;
  outline: none !important;
  box-shadow: none !important;
}
/* Kill decorative overlays \u2014 they paint the "inner box on click"
   white/blue Naive-default flash. */
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .hr-button__border,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .hr-button__state-border,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .n-button__border,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .n-button__state-border,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .hr-base-wave,
html body button:has(svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) .n-base-wave {
  display: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* 18a-warning-triangle (v0.9.69). GHL ships a warning-triangle
   SVG icon in many places (Billing alerts, Private Integrations
   key warnings, etc.) painted with various utility classes:
   .text-red-500, .text-yellow-500, .text-warning-600, etc. Tim's
   canon: every triangle warning is amber, always. Match by the
   path's d-attribute prefix \u2014 that shape is the canonical GHL
   warning triangle and is consistent across every instance. */
html body svg path[d^="M12 9v4m0 4h.01M10.615 3.892"]:not(#__reos_never_id) {
  stroke: var(--reos-amber) !important;
  color: var(--reos-amber) !important;
  fill: none !important;
}
/* Also force the parent SVG's color so currentColor inheritance
   resolves to amber even if other rules try to repaint via
   currentColor cascade. */
html body svg:has(path[d^="M12 9v4m0 4h.01M10.615 3.892"]):not(#__reos_never_id) {
  color: var(--reos-amber) !important;
  stroke: var(--reos-amber) !important;
}

/* 18a-ui-text-btn (v0.9.68). GHL ships .ui-text-btn as a "render
   as link, not button" variant for buttons like "Learn More" on
   Private Integrations page. Defaults inherit the v0.9.13 default-
   type pattern (slate bg + cool-gray border + bone text). Tim's
   canon for link-style buttons: no chrome at all \u2014 blue text +
   blue icon + no border + no bg. Mirror of v0.9.47 .learn-more-
   button. Need to beat the v0.9.13 hr-button.hr-button--default-
   type rule via class-doubled specificity (0,1,3,2). */
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id),
html body button.hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id),
html body .hr-button.ui-text-btn.ui-text-btn:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: var(--reos-blue) !important;
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-border: none !important;
  --n-border-hover: none !important;
  --n-border-pressed: none !important;
  --n-border-focus: none !important;
  --n-text-color: var(--reos-blue) !important;
  --n-text-color-hover: var(--reos-blue) !important;
  --n-text-color-pressed: var(--reos-blue) !important;
  --n-text-color-focus: var(--reos-blue) !important;
  padding: 0 !important;
  min-height: 0 !important;
  height: auto !important;
}
/* Hover: identical to resting \u2014 Tim's call. No emerald flash on
   .ui-text-btn link-style buttons. The link signals affordance
   on its own via the blue color + underline. */
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover,
html body button.hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  color: var(--reos-blue) !important;
}
/* Inner content + icon. Blue at all times (no hover shift). */
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id) .hr-button__content *,
html body .hr-button.ui-text-btn.ui-text-btn:not(#__reos_never_id) .hr-button__content,
html body .hr-button.ui-text-btn.ui-text-btn:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover .hr-button__content,
html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover .hr-button__content * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
/* SVG icon inside the button \u2014 stroke + fill blue, no hover shift. */
html body .hr-button.ui-text-btn:not(#__reos_never_id) svg,
html body .hr-button.ui-text-btn:not(#__reos_never_id) svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}
html body .hr-button.ui-text-btn:not(#__reos_never_id):hover svg,
html body .hr-button.ui-text-btn:not(#__reos_never_id):hover svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}
/* Kill the decorative border overlays (Naive UI inset paint). */
html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-button__border,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-button__state-border,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-base-wave,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* 18a-hr-tag-ui-default (v0.9.67). Private Integrations page has
   an "API v2.0" pill next to the page title (.hr-tag.hr-tag--
   round.ui-tag.ui-default). Tim's call: drop the pill chrome
   (no bg, no border) and paint the text our blue. Treat ui-
   default tags as inline info badges, not enclosed pills. */
html body .hr-tag.ui-default:not(#__reos_never_id),
html body .hr-tag.hr-tag--round.ui-default:not(#__reos_never_id),
html body [class*="hr-tag"][class*="ui-default"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  color: var(--reos-blue) !important;
}
html body .hr-tag.ui-default:not(#__reos_never_id) .hr-tag__content,
html body .hr-tag.ui-default:not(#__reos_never_id) .hr-tag__content *,
html body .hr-tag.ui-default:not(#__reos_never_id) .n-tag__content,
html body .hr-tag.ui-default:not(#__reos_never_id) .n-tag__content * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
  background-color: transparent !important;
}
/* Kill the decorative border overlay so no pill outline shows. */
html body .hr-tag.ui-default:not(#__reos_never_id) .hr-tag__border,
html body .hr-tag.ui-default:not(#__reos_never_id) .n-tag__border {
  display: none !important;
  border: none !important;
}

/* 18a-integration-cards (v0.9.66). LC Integrations page (settings/
   lc-integrations) renders 38 integration cards (Google, Facebook,
   LinkedIn, Stripe, etc.). Each card has:
     .card-header \u2192 white bg (rgb(255, 255, 255))
     .card-footer \u2192 border-top: 2px solid rgb(242, 247, 250) (light)
   Both classes are GHL-custom utility names inside .hr-card. Remap
   to canon: graphite bg, steel border. */
html body .card-header:not(#__reos_never_id),
html body .hr-card-header .card-header:not(#__reos_never_id),
html body .hr-card .card-header:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .card-footer:not(#__reos_never_id),
html body .hr-card-footer .card-footer:not(#__reos_never_id),
html body .hr-card .card-footer:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border-top-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

/* 18a-n-button-tertiary (v0.9.64). External Tracking page has
   two .n-button--tertiary-type buttons (Analytics + Submissions)
   that ship transparent bg + gray-500 text + gray-200 border +
   brand-blue hover. Plus the coercer paints slate bg inline.
   Tim wants them on the common button canon (mirror of v0.9.13
   default-type): graphite bg, steel border, bone text resting;
   emerald border + emerald text on hover; emerald-bright pressed;
   ash + opacity 0.5 on disabled. */
html body .n-button.n-button--tertiary-type:not(#__reos_never_id),
html body button.n-button.n-button--tertiary-type:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-color-disabled: transparent !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
/* Content span \u2014 beat any inline color paint with !important
   on the descendant content. */
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__content,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__content * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__content,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__content * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Decorative overlay borders */
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__border,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__state-border {
  border-color: var(--reos-steel) !important;
}
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__border,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__state-border {
  border-color: var(--reos-emerald) !important;
}
/* Kill the .n-base-wave ripple overlay (v0.9.65). The section-7
   rule paints .n-button .n-base-wave emerald-glow at all times
   (intended for click ripple), but for tertiary-type buttons the
   wave element renders at opacity 1 at rest \u2014 so the emerald-glow
   shows as a constant wash. Tim flagged "green wash over them" on
   Analytics + Submissions. Hide the wave on this variant. */
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  background: transparent !important;
  background-color: transparent !important;
  opacity: 0 !important;
}
/* Disabled \u2014 muted ash, no hover, half opacity. */
html body .n-button.n-button--tertiary-type.n-button--disabled:not(#__reos_never_id),
html body .n-button.n-button--tertiary-type[disabled]:not(#__reos_never_id) {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
  border-color: var(--reos-steel) !important;
}
html body .n-button.n-button--tertiary-type.n-button--disabled:not(#__reos_never_id):hover,
html body .n-button.n-button--tertiary-type[disabled]:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
  border-color: var(--reos-steel) !important;
}
html body .n-button.n-button--tertiary-type.n-button--disabled:not(#__reos_never_id) .n-button__content,
html body .n-button.n-button--tertiary-type.n-button--disabled:not(#__reos_never_id) .n-button__content *,
html body .n-button.n-button--tertiary-type[disabled]:not(#__reos_never_id) .n-button__content,
html body .n-button.n-button--tertiary-type[disabled]:not(#__reos_never_id) .n-button__content * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* 18a-hr-button-tertiary (v0.10.7). Reminder Settings tab in
   Invoice Settings has an "Add another reminder" button rendered
   as .hr-button.hr-button--tertiary-type with inline obsidian
   color (rgb(18, 22, 29)) on the .hr-button__content span \u2014 so
   it looks "grayed out / un-clickable" on slate. Mirror the
   v0.9.64 .n-button--tertiary-type canon: graphite bg, steel
   border, bone text resting; emerald border + emerald text on
   hover; emerald-bright pressed; ash + opacity 0.5 on disabled.
   Descendant rule on .hr-button__content + * uses !important
   to beat the inline obsidian color. */
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id),
html body button.hr-button.hr-button--tertiary-type:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-graphite) !important;
  --n-color-pressed: var(--reos-graphite) !important;
  --n-color-focus: var(--reos-graphite) !important;
  --n-color-disabled: transparent !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald-bright) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
/* Content span \u2014 beat any inline color paint (the GHL component
   stamps inline obsidian on .hr-button__content) with !important
   on descendant content. */
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__content,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__content * {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Decorative overlay borders */
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__border,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__state-border {
  border-color: var(--reos-steel) !important;
}
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__border,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__state-border {
  border-color: var(--reos-emerald) !important;
}
/* Kill the .hr-base-wave / .n-base-wave ripple overlay (mirrors
   v0.9.65 fix for .n-button--tertiary-type \u2014 wave renders at
   opacity 1 at rest, producing a constant green wash). */
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-base-wave,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  background: transparent !important;
  background-color: transparent !important;
  opacity: 0 !important;
}
/* Disabled \u2014 muted ash, no hover, half opacity. */
html body .hr-button.hr-button--tertiary-type.hr-button--disabled:not(#__reos_never_id),
html body .hr-button.hr-button--tertiary-type[disabled]:not(#__reos_never_id) {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-button.hr-button--tertiary-type.hr-button--disabled:not(#__reos_never_id):hover,
html body .hr-button.hr-button--tertiary-type[disabled]:not(#__reos_never_id):hover {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-button.hr-button--tertiary-type.hr-button--disabled:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--tertiary-type.hr-button--disabled:not(#__reos_never_id) .hr-button__content *,
html body .hr-button.hr-button--tertiary-type[disabled]:not(#__reos_never_id) .hr-button__content,
html body .hr-button.hr-button--tertiary-type[disabled]:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* v0.9.63: SVG icons with .text-purple-* \u2192 blue (canon info-
   icon color). Tim's call on the Form Fills checklist icon on
   External Tracking page. Limited to <svg> + child paths so
   text labels with purple class stay bone. */
html body svg.text-purple-50:not(#__reos_never_id),
html body svg.text-purple-100:not(#__reos_never_id),
html body svg.text-purple-200:not(#__reos_never_id),
html body svg.text-purple-300:not(#__reos_never_id),
html body svg.text-purple-400:not(#__reos_never_id),
html body svg.text-purple-500:not(#__reos_never_id),
html body svg.text-purple-600:not(#__reos_never_id),
html body svg.text-purple-700:not(#__reos_never_id),
html body svg.text-purple-800:not(#__reos_never_id),
html body svg.text-purple-900:not(#__reos_never_id),
html body svg.text-purple-50:not(#__reos_never_id) path,
html body svg.text-purple-100:not(#__reos_never_id) path,
html body svg.text-purple-200:not(#__reos_never_id) path,
html body svg.text-purple-300:not(#__reos_never_id) path,
html body svg.text-purple-400:not(#__reos_never_id) path,
html body svg.text-purple-500:not(#__reos_never_id) path,
html body svg.text-purple-600:not(#__reos_never_id) path,
html body svg.text-purple-700:not(#__reos_never_id) path,
html body svg.text-purple-800:not(#__reos_never_id) path,
html body svg.text-purple-900:not(#__reos_never_id) path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: none !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
/* Kill the rounded badge surround on small icon containers
   (.bg-purple-50.rounded-lg, etc.). Tim's canon: icons render
   plain, no colored backdrop. Coercer-skip added below in
   coerceDarkDropdowns so the JS painter doesn't repaint slate. */
html body .bg-purple-50.rounded-lg:not(#__reos_never_id),
html body .bg-purple-100.rounded-lg:not(#__reos_never_id),
html body .bg-purple-50.rounded-md:not(#__reos_never_id),
html body .bg-purple-100.rounded-md:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
}
html body .border-purple-50:not(#__reos_never_id),
html body .border-purple-100:not(#__reos_never_id),
html body .border-purple-200:not(#__reos_never_id),
html body .border-purple-300:not(#__reos_never_id),
html body .border-purple-400:not(#__reos_never_id),
html body .border-purple-500:not(#__reos_never_id),
html body .border-purple-600:not(#__reos_never_id),
html body [class*="border-purple-"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

/* Amber/orange/yellow warning alerts \u2014 Tim-flagged 'Timeout
   duration too high' callout. GHL ships these with light cream
   bg + amber text. Dark theme: graphite bg + steel border with
   amber accent strip for the warning signal. */
html body .bg-amber-50:not(#__reos_never_id),
html body .bg-amber-100:not(#__reos_never_id),
html body .bg-yellow-50:not(#__reos_never_id),
html body .bg-yellow-100:not(#__reos_never_id),
html body .bg-orange-50:not(#__reos_never_id),
html body .bg-orange-100:not(#__reos_never_id),
html body [class*="bg-amber-50"]:not(#__reos_never_id),
html body [class*="bg-amber-100"]:not(#__reos_never_id),
html body [class*="bg-yellow-50"]:not(#__reos_never_id),
html body [class*="bg-orange-50"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-amber) !important;
}
html body [class*="border-amber-"]:not(#__reos_never_id),
html body [class*="border-yellow-"]:not(#__reos_never_id),
html body [class*="border-orange-"]:not(#__reos_never_id) {
  border-color: var(--reos-amber) !important;
}
html body [class*="text-amber-"]:not(#__reos_never_id),
html body [class*="text-yellow-"]:not(#__reos_never_id),
html body [class*="text-orange-"]:not(#__reos_never_id) {
  color: var(--reos-amber) !important;
  -webkit-text-fill-color: var(--reos-amber) !important;
}

/* HR-alert family \u2014 GHL's Highrise alert component for inline
   warnings/info/etc. The white bg + cream-tinted variants ship
   from .hr-alert / .hr-alert-body. Theme to graphite + amber
   accent for warning variant. */
html body .hr-alert:not(#__reos_never_id),
html body .hr-alert-body:not(#__reos_never_id),
html body .hr-alert-body--bordered:not(#__reos_never_id),
html body [class*="hr-alert"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-amber) !important;
}
/* All text descendants \u2192 amber. v0.9.30 missed the <p> title +
   text nodes because they were getting an empty -webkit-text-
   fill-color from coercer paints. Cover every text-bearing
   element + force fill-color explicitly. */
html body .hr-alert:not(#__reos_never_id) *,
html body .hr-alert-body:not(#__reos_never_id) *,
html body [class*="hr-alert"]:not(#__reos_never_id) p,
html body [class*="hr-alert"]:not(#__reos_never_id) span,
html body [class*="hr-alert"]:not(#__reos_never_id) div,
html body [class*="hr-alert"]:not(#__reos_never_id) .body,
html body [class*="hr-alert"]:not(#__reos_never_id) .title {
  color: var(--reos-amber) !important;
  -webkit-text-fill-color: var(--reos-amber) !important;
  background-color: transparent !important;
}
/* Alert icon container \u2014 sometimes ships with slate bg from a
   coercer painting any small-rectangle dark wrapper. Force
   transparent so the warning glyph sits on the alert's own bg
   without a square box behind it. */
html body .hr-alert .hr-alert-icon:not(#__reos_never_id),
html body .hr-alert-body .hr-alert-icon:not(#__reos_never_id),
html body [class*="hr-alert"] [class*="alert-icon"]:not(#__reos_never_id),
html body [class*="hr-alert"] [class*="icon-container"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
}

/* 18a-checkbox-group-card-hover (v0.9.53). The selectable
   object-cards on the Import Data wizard ("Contacts",
   "Opportunities", etc.) are .n-button.hl-checkbox-group-item
   elements. On hover Naive paints a thick outer glow / box-
   shadow ring that reads as "big white border" against the
   graphite card. Tim's canon: hover should be a subtle 1px
   border-color change, never a chunky halo. Strip every
   box-shadow + outline source on hover for this family. */
html body .hl-checkbox-group-item:not(#__reos_never_id),
html body button.hl-checkbox-group-item:not(#__reos_never_id),
html body .n-button.hl-checkbox-group-item:not(#__reos_never_id) {
  box-shadow: none !important;
  outline: none !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-hover: none !important;
  --n-box-shadow-pressed: none !important;
  --n-box-shadow-active: none !important;
  /* Lock the hover/focus/pressed border to a quiet 1px steel\u2192
     emerald transition, not the Naive inline blue. */
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-steel) !important;
}
html body .hl-checkbox-group-item:not(#__reos_never_id):hover,
html body button.hl-checkbox-group-item:not(#__reos_never_id):hover,
html body .n-button.hl-checkbox-group-item:not(#__reos_never_id):hover {
  box-shadow: none !important;
  outline: none !important;
  border-color: var(--reos-emerald) !important;
  background-color: var(--reos-graphite) !important;
}
html body .hl-checkbox-group-item:not(#__reos_never_id):focus,
html body .hl-checkbox-group-item:not(#__reos_never_id):focus-visible,
html body .hl-checkbox-group-item:not(#__reos_never_id):focus-within,
html body .hl-checkbox-group-item:not(#__reos_never_id):active {
  box-shadow: none !important;
  outline: none !important;
  border-color: var(--reos-emerald) !important;
}
/* Kill the n-button decorative overlay borders + wave (these
   are the elements Naive paints the inset glow on). */
html body .hl-checkbox-group-item:not(#__reos_never_id) .n-button__border,
html body .hl-checkbox-group-item:not(#__reos_never_id) .n-button__state-border,
html body .hl-checkbox-group-item:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  border: none !important;
  box-shadow: none !important;
}
/* Card text hover behavior (v0.9.56). Tim's request: REVERSE
   the current state. Today title stays bone on hover and
   description turns emerald (from a generic .n-button hover
   inheritance). He wants title emerald on hover, description
   bone always.

   Title  (.text-gray-900.hl-text-md-medium)  \u2192 bone resting,
                                                 emerald on hover
   Description (.hl-text-xs-regular)          \u2192 bone always.

   v0.9.53 used .hl-text-sm-regular which never matched these
   cards \u2014 the actual class is .hl-text-xs-regular. Fixed here. */
html body .hl-checkbox-group-item:not(#__reos_never_id) p.text-gray-900,
html body .hl-checkbox-group-item:not(#__reos_never_id) p.hl-text-md-medium {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hl-checkbox-group-item:not(#__reos_never_id):hover p.text-gray-900,
html body .hl-checkbox-group-item:not(#__reos_never_id):hover p.hl-text-md-medium {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Description \u2014 bone always, no hover color shift. */
html body .hl-checkbox-group-item:not(#__reos_never_id) p.hl-text-xs-regular,
html body .hl-checkbox-group-item:not(#__reos_never_id) [class*="hl-text-xs-regular"],
html body .hl-checkbox-group-item:not(#__reos_never_id) p.hl-text-sm-regular,
html body .hl-checkbox-group-item:not(#__reos_never_id) [class*="hl-text-sm-regular"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .hl-checkbox-group-item:not(#__reos_never_id):hover p.hl-text-xs-regular,
html body .hl-checkbox-group-item:not(#__reos_never_id):hover [class*="hl-text-xs-regular"],
html body .hl-checkbox-group-item:not(#__reos_never_id):hover p.hl-text-sm-regular,
html body .hl-checkbox-group-item:not(#__reos_never_id):hover [class*="hl-text-sm-regular"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-n-steps (v0.9.52 \u2192 v0.9.55). Naive UI Steps component on
   the Import Data wizard ("Start / Upload / Map / Verify").
   v0.9.52 attempted direct property overrides but Naive paints
   via CSS vars (--n-indicator-color, --n-indicator-border-color,
   --n-indicator-text-color, --n-splitor-color, --n-header-text-
   color, --n-description-text-color) \u2014 so direct color overrides
   lost to Naive's box-shadow-driven outer ring.

   v0.9.55 overrides the actual Naive vars at the .n-step level
   (where the vars live) + nukes box-shadow on the indicator so
   the 1px outer ring around the active circle stops painting
   brand-blue. Canon:
     - Active (process) circle  \u2192 emerald bg + obsidian numerals
     - Waiting (future) circle  \u2192 transparent + steel border + ash
     - Finished (past) circle   \u2192 emerald-glow + emerald numerals
     - Error                    \u2192 crimson
     - Splitter line            \u2192 steel (emerald past finished) */
html body .n-steps:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  --n-header-text-color: var(--reos-bone) !important;
  --n-description-text-color: var(--reos-ash) !important;
  --n-splitor-color: var(--reos-steel) !important;
}
/* Active / in-progress step \u2014 override Naive vars + kill the
   box-shadow outer ring (the "blue border" Tim asked about). */
html body .n-step--process-status:not(#__reos_never_id) {
  --n-indicator-color: var(--reos-emerald) !important;
  --n-indicator-border-color: var(--reos-emerald) !important;
  --n-indicator-text-color: var(--reos-obsidian) !important;
  --n-header-text-color: var(--reos-emerald) !important;
}
html body .n-step--process-status:not(#__reos_never_id) .n-step-indicator {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
  box-shadow: none !important;
  color: var(--reos-obsidian) !important;
}
html body .n-step--process-status:not(#__reos_never_id) .n-step-indicator-slot__index,
html body .n-step--process-status:not(#__reos_never_id) .n-step-indicator-slot {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}
/* Waiting / future step */
html body .n-step--wait-status:not(#__reos_never_id) {
  --n-indicator-color: transparent !important;
  --n-indicator-border-color: var(--reos-steel) !important;
  --n-indicator-text-color: var(--reos-ash) !important;
  --n-header-text-color: var(--reos-bone) !important;
}
html body .n-step--wait-status:not(#__reos_never_id) .n-step-indicator {
  background-color: transparent !important;
  background: transparent !important;
  border-color: var(--reos-steel) !important;
  box-shadow: 0 0 0 1px var(--reos-steel) !important;
  color: var(--reos-ash) !important;
}
html body .n-step--wait-status:not(#__reos_never_id) .n-step-indicator-slot__index,
html body .n-step--wait-status:not(#__reos_never_id) .n-step-indicator-slot {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Completed / finished step */
html body .n-step--finish-status:not(#__reos_never_id) {
  --n-indicator-color: var(--reos-emerald-glow) !important;
  --n-indicator-border-color: var(--reos-emerald) !important;
  --n-indicator-text-color: var(--reos-emerald) !important;
  --n-header-text-color: var(--reos-bone) !important;
  --n-splitor-color: var(--reos-emerald) !important;
}
html body .n-step--finish-status:not(#__reos_never_id) .n-step-indicator {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
html body .n-step--finish-status:not(#__reos_never_id) .n-step-indicator-slot__index,
html body .n-step--finish-status:not(#__reos_never_id) .n-step-indicator-slot {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Error step */
html body .n-step--error-status:not(#__reos_never_id) {
  --n-indicator-color: var(--reos-crimson) !important;
  --n-indicator-border-color: var(--reos-crimson) !important;
  --n-indicator-text-color: var(--reos-bone) !important;
  --n-header-text-color: var(--reos-crimson) !important;
}
html body .n-step--error-status:not(#__reos_never_id) .n-step-indicator {
  background-color: var(--reos-crimson) !important;
  background: var(--reos-crimson) !important;
  border-color: var(--reos-crimson) !important;
  box-shadow: none !important;
  color: var(--reos-bone) !important;
}
/* Step titles + descriptions \u2014 pin colors directly in case the
   var override loses to a deeper Naive scoped rule. */
html body .n-step:not(#__reos_never_id) .n-step-content__title {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .n-step:not(#__reos_never_id) .n-step-content__description {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .n-step--process-status:not(#__reos_never_id) .n-step-content__title {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* Splitter line between steps */
html body .n-step:not(#__reos_never_id) .n-step-splitter,
html body .n-step:not(#__reos_never_id)::after {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .n-step--finish-status:not(#__reos_never_id) .n-step-splitter,
html body .n-step--finish-status:not(#__reos_never_id)::after {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}

/* 18a-location-billing-page (v0.9.51). The Billing sub-app page
   ships #location-billing with background: rgb(252, 252, 253)
   (near-white). It's the outer wrapper that sits between the
   v2-sidebar shell (graphite body) and the dark .hl-card. Without
   a rule, the area above the title and below the card renders
   white. Paint transparent so the body's graphite shows through. */
html body #location-billing:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
/* Sibling wrappers \u2014 paint defensively so any framework that
   inserts a new white layer here can't break us. agency-billing
   is the Vue scoped wrapper for this sub-app. */
html body .agency-billing:not(#__reos_never_id),
html body [class*="agency-billing"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

/* 18a-n-alert (v0.9.49). Parallel of .hr-alert for the Naive UI
   .n-alert family. Found on Billing dashboard: a .hl-warning
   .n-alert callout that ships with inline --n-color: amber-50,
   --n-border: amber-200, --n-title-text-color: gray-900,
   --n-content-text-color: gray-700, --n-icon-color: #f0a020.
   Override the vars + paint the overlay border + force descendant
   text colors. Cover all variants via .hl-warning / .hl-error /
   .hl-info / .hl-success class hooks GHL applies. */
html body .n-alert:not(#__reos_never_id),
html body [class*="n-alert"]:not(#__reos_never_id) {
  --n-color: var(--reos-graphite) !important;
  --n-title-text-color: var(--reos-bone) !important;
  --n-content-text-color: var(--reos-ash) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
  --n-close-color-pressed: var(--reos-slate) !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
/* Overlay border element \u2014 Naive paints the visible ring here. */
html body .n-alert:not(#__reos_never_id) .n-alert__border,
html body [class*="n-alert"]:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-steel) !important;
  background-color: transparent !important;
  background: transparent !important;
}
/* Warning variant: amber accent. .hl-warning is GHL's class hook;
   .n-alert--warning is Naive's standard. Cover both. */
html body .hl-warning.n-alert:not(#__reos_never_id),
html body .n-alert--warning:not(#__reos_never_id),
html body [class*="hl-warning"]:not(#__reos_never_id) {
  --n-color: var(--reos-graphite) !important;
  --n-icon-color: var(--reos-amber) !important;
  --n-title-text-color: var(--reos-amber) !important;
  --n-content-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-amber) !important;
  border-color: var(--reos-amber) !important;
}
html body .hl-warning.n-alert:not(#__reos_never_id) .n-alert__border,
html body .n-alert--warning:not(#__reos_never_id) .n-alert__border,
html body [class*="hl-warning"]:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-amber) !important;
}
/* Error variant: crimson. */
html body .hl-error.n-alert:not(#__reos_never_id),
html body .n-alert--error:not(#__reos_never_id),
html body [class*="hl-error"].n-alert:not(#__reos_never_id) {
  --n-icon-color: var(--reos-crimson) !important;
  --n-title-text-color: var(--reos-crimson) !important;
  --n-content-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-crimson) !important;
  border-color: var(--reos-crimson) !important;
}
html body .hl-error.n-alert:not(#__reos_never_id) .n-alert__border,
html body .n-alert--error:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-crimson) !important;
}
/* Info variant: blue. */
html body .hl-info.n-alert:not(#__reos_never_id),
html body .n-alert--info:not(#__reos_never_id),
html body [class*="hl-info"].n-alert:not(#__reos_never_id) {
  --n-icon-color: var(--reos-blue) !important;
  --n-title-text-color: var(--reos-blue) !important;
  --n-content-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-blue) !important;
  border-color: var(--reos-blue) !important;
}
html body .hl-info.n-alert:not(#__reos_never_id) .n-alert__border,
html body .n-alert--info:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-blue) !important;
}
/* Success variant: emerald. */
html body .hl-success.n-alert:not(#__reos_never_id),
html body .n-alert--success:not(#__reos_never_id),
html body [class*="hl-success"].n-alert:not(#__reos_never_id) {
  --n-icon-color: var(--reos-emerald) !important;
  --n-title-text-color: var(--reos-emerald) !important;
  --n-content-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hl-success.n-alert:not(#__reos_never_id) .n-alert__border,
html body .n-alert--success:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-emerald) !important;
}
/* Force descendant text \u2014 some title/content nodes have inline
   color from Naive's data-v scoped CSS that beats var cascade. */
html body .n-alert:not(#__reos_never_id) .n-alert-body__title,
html body .n-alert:not(#__reos_never_id) .n-alert-body__title *,
html body .hl-warning.n-alert:not(#__reos_never_id) .n-alert-body__title,
html body .hl-warning.n-alert:not(#__reos_never_id) .n-alert-body__title * {
  color: var(--reos-amber) !important;
  -webkit-text-fill-color: var(--reos-amber) !important;
}
html body .n-alert:not(#__reos_never_id) .n-alert-body__content,
html body .n-alert:not(#__reos_never_id) .n-alert-body__content * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Non-warning default title back to bone */
html body .n-alert:not(.hl-warning):not(.hl-error):not(.hl-info):not(.hl-success):not(#__reos_never_id) .n-alert-body__title,
html body .n-alert:not(.hl-warning):not(.hl-error):not(.hl-info):not(.hl-success):not(#__reos_never_id) .n-alert-body__title * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-missed-call-followup (v0.9.28). Scan on Missed Call Text
   Back tab found 2 patterns not yet covered:
     div.hr-checkbox-box__border bg: rgb(242, 244, 247) (gray-100)
       \u2014 same hover-paint issue v0.8.70 fixed for .n-checkbox-box__border
       but on the .hr-checkbox variant
     div.n-loading-bar__shimmer bg: white \u2014 Naive loading indicator */
html body .hr-checkbox-box__border:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
html body .n-loading-bar__shimmer:not(#__reos_never_id),
html body .n-loading-bar:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

/* 18a-voicemail-page-sweep (v0.9.27). Voicemail tab scan found:
     hr.dropdown-divider \u2014 gray-200 border-top
     div.hr-slider-dot \u2014 white bg + gray-200 border
     div.hr-slider-dot--active \u2014 white bg (active slider thumb)
     div.dropdown-menu \u2014 white bg
     div.hl_affiliate--header \u2014 light-blue border-top (covers any
       header in affiliate-style sub-app top bars)
     div.bg-purple-50 / .bg-purple-100 \u2014 Tailwind purple accent
       containers (the Voice AI icon backdrops)
     div.hr-divider__line \u2014 gray-200 bg (divider rules)
     div.hr-slider-rail \u2014 slider track styling */
html body hr.dropdown-divider:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
}
html body .hr-slider-dot:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
}
html body .hr-slider-dot.hr-slider-dot--active:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .hr-slider-rail:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
html body .hr-slider-rail-fill:not(#__reos_never_id),
html body .hr-slider-fill:not(#__reos_never_id),
html body .hr-slider-rail [class*="fill"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}
html body .dropdown-menu:not(#__reos_never_id),
html body .dropdown-menu.dropdown-menu-right:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .hl_affiliate--header:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
}
html body .hr-divider__line:not(#__reos_never_id),
html body [class*="hr-divider__line"]:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}
/* Tailwind purple accent containers \u2014 used for AI / brand icons.
   Remap to slate with emerald-glow tint so the AI icon sits on
   the dark theme without a bright lavender backdrop. */
html body .bg-purple-50:not(#__reos_never_id),
html body .bg-purple-100:not(#__reos_never_id),
html body [class*="bg-purple-50"]:not(#__reos_never_id),
html body [class*="bg-purple-100"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* 18a-text-primary-on-anchor (v0.9.26). Section 15a remaps the
   .text-primary-* family to emerald universally. That hits help-
   doc links inside descriptive prose that GHL marks with
   class='text-primary-700'. Per Tim: ONLY clickable elements
   should be blue. <a> elements with text-primary-* override
   to brand blue. */
/* NOTE (v0.9.59): dropped the a[class*="text-primary"] catchall
   here \u2014 substring-match incorrectly catches Tailwind hover-
   prefixed variants like group-hover:text-primary-600. The
   explicit a.text-primary-XX dotted selectors below are
   whitespace-token matches and only fire on bare classes. */
html body a.text-primary-50:not(#__reos_never_id),
html body a.text-primary-100:not(#__reos_never_id),
html body a.text-primary-200:not(#__reos_never_id),
html body a.text-primary-300:not(#__reos_never_id),
html body a.text-primary-400:not(#__reos_never_id),
html body a.text-primary-500:not(#__reos_never_id),
html body a.text-primary-600:not(#__reos_never_id),
html body a.text-primary-700:not(#__reos_never_id),
html body a.text-primary-800:not(#__reos_never_id),
html body a.text-primary-900:not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body a.text-primary-50:not(#__reos_never_id):hover,
html body a.text-primary-100:not(#__reos_never_id):hover,
html body a.text-primary-200:not(#__reos_never_id):hover,
html body a.text-primary-300:not(#__reos_never_id):hover,
html body a.text-primary-400:not(#__reos_never_id):hover,
html body a.text-primary-500:not(#__reos_never_id):hover,
html body a.text-primary-600:not(#__reos_never_id):hover,
html body a.text-primary-700:not(#__reos_never_id):hover,
html body a.text-primary-800:not(#__reos_never_id):hover,
html body a.text-primary-900:not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

/* 18a-app-loader (v0.9.21). The .app-loader splash that briefly
   shows during route transitions ships with bg rgb(240, 255, 255)
   (azure / very light cyan). Match obsidian so the load state
   doesn't flash bright between dark pages. */
html body .app-loader:not(#__reos_never_id),
html body [class*="app-loader"]:not(#__reos_never_id) {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
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
html body [class*="hl-display-"]:not(#__reos_never_id),
/* v0.9.59: .ui-display-* parallel of .hl-display-* \u2014 Objects
   settings page uses .title.ui-display-sm-medium for "Objects",
   shipped with gray-900 inline, invisible on graphite. */
html body .title.ui-display-sm-medium:not(#__reos_never_id),
html body .ui-display-sm-medium:not(#__reos_never_id),
html body .ui-display-md-medium:not(#__reos_never_id),
html body .ui-display-lg-medium:not(#__reos_never_id),
html body [class*="ui-display-"]:not(#__reos_never_id) {
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
/* v0.9.60: switched [class*="bg-primary-50"] to [class~="bg-
   primary-50"] (whitespace-token match). The substring form was
   incorrectly catching Tailwind hover/focus-prefixed variants
   such as focus colon bg-primary-50 (used on Objects settings
   cards), then painting every descendant div ash \u2014 which
   inherited down through the icon container and killed the
   emerald icon color via fill=currentColor. The exact-token
   form only fires when the literal class is bg-primary-50. */
html body .bg-primary-50:not(#__reos_never_id),
html body [class~="bg-primary-50"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
}
/* Force all descendant text in the callout to ash \u2014 Tim wants
   no emerald inside this info panel. Children like text-gray-600
   were being overridden by the .text-primary-700 parent's
   inherited emerald via section 15a. */
html body .bg-primary-50:not(#__reos_never_id) span:not(a):not(a *),
html body .bg-primary-50:not(#__reos_never_id) div:not(a):not(a *),
html body [class~="bg-primary-50"]:not(#__reos_never_id) span:not(a):not(a *),
html body [class~="bg-primary-50"]:not(#__reos_never_id) div:not(a):not(a *) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Links (Check here, Learn more) \u2192 brand blue. */
html body .bg-primary-50:not(#__reos_never_id) a,
html body .bg-primary-50:not(#__reos_never_id) a *,
html body [class~="bg-primary-50"]:not(#__reos_never_id) a,
html body [class~="bg-primary-50"]:not(#__reos_never_id) a * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
/* v0.9.60: bg-primary-100 \u2014 inner fill of accent icon containers.
   v0.9.61 REVERSAL: Tim doesn't want the round badge backdrop on
   the Objects settings cards. Strip the circle entirely (bg +
   border + width) on the round-badge pattern. Standalone bg-
   primary-100 elsewhere (rare) keeps a fallback emerald-glow. */
html body .bg-primary-100:not(#__reos_never_id),
html body [class~="bg-primary-100"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}
/* Round-badge variant on Objects-page object cards \u2014 Tim wants
   it gone: no circle, no ring, no glow. Just the emerald icon. */
html body .bg-primary-100.rounded-full:not(#__reos_never_id),
html body [class~="bg-primary-100"][class~="rounded-full"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
}
/* Force SVG icon fill to emerald \u2014 GHL ships a native rule:
     .custom-obj-list .custom-icon path { fill: rgb(21, 94, 239) }
   That brand-dark-blue is baked directly into the fill prop,
   beating the currentColor inheritance from .text-primary-600.
   Override at higher specificity with !important. */
html body .custom-obj-list .custom-icon path:not(#__reos_never_id),
html body .custom-obj-list svg.custom-icon path:not(#__reos_never_id),
html body .bg-primary-100.rounded-full svg path:not(#__reos_never_id),
html body .bg-primary-100.rounded-full path:not(#__reos_never_id),
html body [class~="bg-primary-100"] svg.custom-icon path:not(#__reos_never_id) {
  fill: var(--reos-emerald) !important;
}
/* v0.9.62: Objects card vertical divider between icon column +
   content column. GHL ships .custom-obj-content with border-
   left: 1px solid rgb(234, 236, 240) (gray-200) \u2014 reads as a
   bright stripe against graphite. Remap to steel. */
html body .custom-obj-content:not(#__reos_never_id),
html body [class~="custom-obj-content"]:not(#__reos_never_id) {
  border-left-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
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
/* v0.12.13: Naive tabs CONTAINER backgrounds. WordPress site detail
   page (.../wordpress/sites/<id>) renders the tabs strip
   (Info | Analytics | Users | Plugins | ...) on a default Naive white
   bg. The .n-tabs-* family of nav wrappers needs explicit graphite
   so the strip matches the page. */
html body .n-tabs-nav:not(#__reos_never_id),
html body .n-tabs-nav-scroll-content:not(#__reos_never_id),
html body .n-tabs-nav-scroll-wrapper:not(#__reos_never_id),
html body .n-tabs-wrapper:not(#__reos_never_id),
html body .n-tabs-tab-wrapper:not(#__reos_never_id),
html body .n-tabs-tab-pad:not(#__reos_never_id),
html body .n-tabs-scroll-padding:not(#__reos_never_id),
html body .n-tabs-tab:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
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

/* 18a-hl-card-text-black (v0.9.54). Mirror of the .hl-card
   .text-gray-900 pin, but for .text-black. The "Previous
   imports" card (Import Data page) ships a <p class="text-black
   hl-text-sm-medium"> that Vue scopes with [data-v-XXXX], so
   section 15's class-level rule (0,1,0) loses to the Vue
   scoped (0,2,0). ID-level repeat inside .hl-card forces bone. */
html body .hl-card .text-black:not(#__reos_never_id),
html body .hl-card [class*="text-black"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* 18a-dark-blue-text (v0.9.54). GHL ships a custom utility
   class .dark-blue-text used on link-style text (e.g. "View
   bulk actions" on the Import Data "Previous imports" card).
   Default color is brand dark blue (#004EEB or similar) which
   renders nearly invisible against graphite. Per canon, links
   = brand blue. Remap to var(--reos-blue). */
html body .dark-blue-text:not(#__reos_never_id),
html body [class*="dark-blue-text"]:not(#__reos_never_id),
html body a:not(#__reos_never_id) .dark-blue-text,
html body a:not(#__reos_never_id) [class*="dark-blue-text"] {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}
html body a:not(#__reos_never_id):hover .dark-blue-text,
html body .dark-blue-text:not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
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

/* 18a-hr-modal (v0.10.12). Parallel canon for Highrise modals.
   Tim flagged the "Reminder X Disabled" pop-up dialog that fires
   after deleting a reminder: white bg, dark text, gray-200 dividers,
   GHL-blue close button. The whole component family is .hr-card +
   .hr-modal + .ui-modal (NOT .n-modal \u2014 the older canon doesn't
   reach it). Inline CSS vars ship with light values:
     --n-color, --n-color-modal, --n-color-popover: #fff
     --n-color-embedded-modal: rgb(250, 250, 252)
     --n-text-color: rgba(52, 64, 84, 1)
     --n-title-text-color: rgba(16, 24, 40, 1)
     --n-border-color: rgb(239, 239, 245)
     --n-close-icon-color, --n-close-color-hover: dark gray + black-alpha
   Flip all to our palette. */
html body .hr-modal:not(#__reos_never_id),
html body .ui-modal:not(#__reos_never_id),
html body .hr-card.hr-modal:not(#__reos_never_id),
html body [class*="hr-modal"]:not(#__reos_never_id) {
  --n-color: var(--reos-graphite) !important;
  --n-color-modal: var(--reos-graphite) !important;
  --n-color-popover: var(--reos-graphite) !important;
  --n-color-embedded: var(--reos-graphite) !important;
  --n-color-embedded-modal: var(--reos-graphite) !important;
  --n-color-embedded-popover: var(--reos-graphite) !important;
  --n-color-target: var(--reos-emerald) !important;
  --n-action-color: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-title-text-color: var(--reos-bone) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-emerald) !important;
  --n-close-icon-color-pressed: var(--reos-emerald-bright) !important;
  --n-close-color-hover: transparent !important;
  --n-close-color-pressed: transparent !important;
  --n-border-color: var(--reos-steel) !important;
  --n-box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
}
/* Inner content surfaces \u2014 transparent so the wrapper graphite
   shows through (no double-card look). v0.10.13: pin ALL inner
   section borders to transparent. Tim's call: no visible divider
   between the header (title + description) and the footer (action
   buttons). The single steel border around the modal wrapper is
   the only visible border. */
html body .hr-modal .hr-card-header:not(#__reos_never_id),
html body .hr-modal .hr-card-header__main:not(#__reos_never_id),
html body .hr-modal .hr-card__content:not(#__reos_never_id),
html body .hr-modal .hr-card__footer:not(#__reos_never_id),
html body .ui-modal .hr-card-header:not(#__reos_never_id),
html body .ui-modal .hr-card-header__main:not(#__reos_never_id),
html body .ui-modal .hr-card__content:not(#__reos_never_id),
html body .ui-modal .hr-card__footer:not(#__reos_never_id),
html body .ui-modal .ui-modal-heading:not(#__reos_never_id),
html body .ui-modal .ui-modal-footer-actions:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  border: none !important;
  border-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  box-shadow: none !important;
}
/* Modal title \u2014 bone. Description / body copy \u2014 ash for hierarchy. */
html body .ui-modal .ui-modal-heading .title:not(#__reos_never_id),
html body .hr-modal .ui-modal-heading .title:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  font-weight: 500 !important;
}
html body .ui-modal .ui-modal-heading .description:not(#__reos_never_id),
html body .hr-modal .ui-modal-heading .description:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Warning / info / error icon containers in the modal heading.
   GHL ships these as small square boxes around the icon SVG.
   Theme per semantic class: warning -> amber, error -> crimson,
   info -> blue, success -> emerald. The icon itself uses
   stroke=currentColor so color inherits. */
html body .ui-icon-container__ui-icon-warning:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-warning svg:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-warning svg path:not(#__reos_never_id) {
  color: var(--reos-amber) !important;
  stroke: var(--reos-amber) !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
html body .ui-icon-container__ui-icon-error:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-error svg:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-error svg path:not(#__reos_never_id) {
  color: var(--reos-crimson) !important;
  stroke: var(--reos-crimson) !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
html body .ui-icon-container__ui-icon-info:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-info svg:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-info svg path:not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
html body .ui-icon-container__ui-icon-success:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-success svg:not(#__reos_never_id),
html body .ui-icon-container__ui-icon-success svg path:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
/* Modal close (X) button. The HTML has aria-label="close modal"
   on the .hr-button.quaternary.icon-only \u2014 and inline CSS vars
   set the hover border to GHL blue. Catch via id + aria-label;
   pin to ash at rest, emerald on hover, no blue border or shadow. */
html body button[aria-label*="close modal" i]:not(#__reos_never_id),
html body button[id*="modal-close" i]:not(#__reos_never_id),
html body .ui-modal .hr-button.icon-only.quaternary:not(#__reos_never_id),
html body .hr-modal .hr-button.icon-only.quaternary:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-text-color: var(--reos-ash) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-border: 1px solid transparent !important;
  --n-border-hover: 1px solid transparent !important;
  --n-border-pressed: 1px solid transparent !important;
  --n-border-focus: 1px solid transparent !important;
  background-color: transparent !important;
  border: 1px solid transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
html body button[aria-label*="close modal" i]:not(#__reos_never_id) svg,
html body button[aria-label*="close modal" i]:not(#__reos_never_id) svg path,
html body button[id*="modal-close" i]:not(#__reos_never_id) svg,
html body button[id*="modal-close" i]:not(#__reos_never_id) svg path,
html body .ui-modal .hr-button.icon-only.quaternary:not(#__reos_never_id) svg,
html body .ui-modal .hr-button.icon-only.quaternary:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body button[aria-label*="close modal" i]:hover:not(#__reos_never_id) svg,
html body button[aria-label*="close modal" i]:hover:not(#__reos_never_id) svg path,
html body button[id*="modal-close" i]:hover:not(#__reos_never_id) svg,
html body button[id*="modal-close" i]:hover:not(#__reos_never_id) svg path,
html body .ui-modal .hr-button.icon-only.quaternary:hover:not(#__reos_never_id) svg,
html body .ui-modal .hr-button.icon-only.quaternary:hover:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Footer "Close" / primary button \u2014 should already be emerald
   from v0.x .hr-button--primary-type canon (graphite text on
   emerald bg). But GHL ships inline CSS vars (--n-color: #155EEF)
   that beat the existing rule. Pin the vars here for modal-scoped
   primary buttons so they go emerald regardless. */
html body .ui-modal .hr-button.hr-button--primary-type:not(#__reos_never_id),
html body .hr-modal .hr-button.hr-button--primary-type:not(#__reos_never_id) {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-color-pressed: var(--reos-emerald) !important;
  --n-color-focus: var(--reos-emerald-bright) !important;
  --n-color-disabled: var(--reos-emerald) !important;
  --n-ripple-color: var(--reos-emerald) !important;
  --n-text-color: var(--reos-obsidian) !important;
  --n-text-color-hover: var(--reos-obsidian) !important;
  --n-text-color-pressed: var(--reos-obsidian) !important;
  --n-text-color-focus: var(--reos-obsidian) !important;
  --n-text-color-disabled: var(--reos-obsidian) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald-bright) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald-bright) !important;
  --n-border-disabled: 1px solid var(--reos-emerald) !important;
  background-color: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
  border-color: var(--reos-emerald) !important;
}
html body .ui-modal .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content,
html body .ui-modal .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content *,
html body .hr-modal .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content,
html body .hr-modal .hr-button.hr-button--primary-type:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}
/* Backdrop / mask behind the modal \u2014 obsidian at 60% alpha. */
html body .hr-modal-mask:not(#__reos_never_id),
html body .ui-modal-mask:not(#__reos_never_id),
html body [class*="modal-mask"]:not(#__reos_never_id),
html body [class*="modal-backdrop"]:not(#__reos_never_id) {
  background-color: rgba(10, 13, 18, 0.6) !important;
  background: rgba(10, 13, 18, 0.6) !important;
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
html body .hr-base-select-option__content,
html body .hr-base-select-option .hr-select-menu-container,
html body .hr-base-select-option .hr-select-option-label,
html body .hr-base-select-option .hr-ellipsis,
html body .hr-base-select-option .hr-select-option-label > * {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* v0.24.2: select TRIGGER (closed) avatar-row label. The option rules above
   only reach inside .hr-base-select-option (the OPEN menu). A closed select
   trigger reuses .hr-select-menu-avatar-container OUTSIDE that scope, so its
   selected-value label (e.g. a property address) fell back to GHL dark text
   once the avatar FORCE_RULE stopped over-painting it. Force bone here. The
   avatar initials are unaffected: they live in .hr-avatar__text, a sibling of
   .hr-select-option-label, so they keep their obsidian-on-mint treatment. */
html body .hr-select-menu-avatar-container .hr-select-menu-container,
html body .hr-select-menu-avatar-container .hr-select-option-label,
html body .hr-select-menu-avatar-container .hr-ellipsis,
html body .hr-select-menu-avatar-container .hr-select-option-label * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* v0.13.96: nuclear option for the slate-tile bug Tim flagged after v0.13.95.
   Higher specificity than the 0-2-0 baseline by anchoring body[class] \u2014
   reaches 2-2-0 vs the 0-1-0 of an inline custom property bind. Combined
   with the shorthand AND longhand transparent declaration below, this
   ensures NO inner container of an option can render with a slate bg unless
   it is actually hovered/pending/selected.
   (Cardinal rule reminder: no backticks inside THEME_CSS template literal.) */
html body[class] .hr-base-select-menu .hr-base-select-option,
html body[class] .hr-base-select-menu .hr-base-select-option > *,
html body[class] .hr-base-select-menu .hr-base-select-option *:not(button):not([class*="emerald"]) {
  background: transparent !important;
  background-color: transparent !important;
}
/* Re-apply the hover/selected paint AFTER the nuke above (higher specificity wins). */
html body[class] .hr-base-select-menu .hr-base-select-option:hover,
html body[class] .hr-base-select-menu .hr-base-select-option--pending,
html body[class] .hr-base-select-menu .hr-base-select-option--hover {
  background-color: var(--reos-slate) !important;
}
html body[class] .hr-base-select-menu .hr-base-select-option--selected,
html body[class] .hr-base-select-menu .hr-base-select-option--selected.hr-base-select-option--pending {
  background-color: var(--reos-emerald-glow) !important;
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

/* n-divider \u2014 v0.11.12: was painting the WHOLE container steel,
   which turned the "OR" row on the dashboard into a steel band.
   Fix: container transparent; the actual horizontal lines render
   as ::before/::after pseudo-elements (or .n-divider__line)
   colored steel; title text reads bone. Tim's call. */
html body .n-divider:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  --n-color: var(--reos-steel) !important;
  --n-text-color: var(--reos-bone) !important;
}
/* Divider line \u2014 Naive renders before+after pseudo lines on the
   .n-divider element flanking the title text. Pin to steel. */
html body .n-divider:not(#__reos_never_id)::before,
html body .n-divider:not(#__reos_never_id)::after {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
/* Title text (the "OR" label) \u2014 bone. */
html body .n-divider .n-divider__title:not(#__reos_never_id),
html body .n-divider__title:not(#__reos_never_id),
html body .n-divider .n-divider__title p:not(#__reos_never_id),
html body .n-divider .n-divider__title .hl-text-sm-medium:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
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
/* v0.13.3: Naive UI .n-upload-dragger \u2014 the file drop-area inside
   upload modals. Default: white bg + light-gray dashed border + dark
   text. Repaint slate fill, steel dashed border, ash drop-icon
   ring, bone main label, ash sub-labels. */
html body .n-upload-dragger:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 2px dashed var(--reos-steel) !important;
  border-radius: 8px !important;
  color: var(--reos-bone) !important;
  transition: border-color 0.15s ease, background-color 0.15s ease !important;
}
html body .n-upload-dragger:not(#__reos_never_id):hover {
  border-color: var(--reos-emerald) !important;
  background-color: var(--reos-steel) !important;
}
/* The circular icon backdrop above the cloud-arrow icon. */
html body .n-upload-dragger:not(#__reos_never_id) .upload-icon,
html body .n-upload-dragger:not(#__reos_never_id) [class*="upload-icon"] {
  background-color: var(--reos-emerald-glow) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 50% !important;
}
/* The cloud-arrow icon \u2014 emerald (active CTA affordance). */
html body .n-upload-dragger:not(#__reos_never_id) .upload-icon svg,
html body .n-upload-dragger:not(#__reos_never_id) .upload-icon svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* Main label "Click or drag a file..." \u2014 bone. */
html body .n-upload-dragger:not(#__reos_never_id) .hl-text-sm-regular {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Sub-labels "Supported files: PDF" / "Max: 10 files" \u2014 ash. */
html body .n-upload-dragger:not(#__reos_never_id) .hl-text-xs-regular {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
/* Container .n-upload + uploaded file list. */
html body .n-upload:not(#__reos_never_id),
html body .n-upload-file-list:not(#__reos_never_id) {
  background-color: transparent !important;
  color: var(--reos-bone) !important;
}
html body .n-upload-file:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
}

/* v0.13.1: SVG icons using .text-gray-* + stroke="currentColor"
   need both color (resolves currentColor) AND stroke set on the
   SVG itself + inner path so we beat Vue scoped CSS and any
   stroke="..." attribute presentation values. */
html body svg.text-gray-600:not(#__reos_never_id),
html body svg.text-gray-500:not(#__reos_never_id),
html body svg.text-gray-700:not(#__reos_never_id),
html body svg.text-gray-600:not(#__reos_never_id) path,
html body svg.text-gray-500:not(#__reos_never_id) path,
html body svg.text-gray-700:not(#__reos_never_id) path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body svg.text-gray-400:not(#__reos_never_id),
html body svg.text-gray-300:not(#__reos_never_id),
html body svg.text-gray-400:not(#__reos_never_id) path,
html body svg.text-gray-300:not(#__reos_never_id) path {
  color: var(--reos-cool-gray) !important;
  stroke: var(--reos-cool-gray) !important;
}
html body svg.text-gray-800:not(#__reos_never_id),
html body svg.text-gray-900:not(#__reos_never_id),
html body svg.text-gray-800:not(#__reos_never_id) path,
html body svg.text-gray-900:not(#__reos_never_id) path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
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
/* Inline color-property selectors: require either the START of
   the style attribute OR a preceding semicolon, so we don't
   match CSS variable name fragments like '--n-bar-color: #155EEF'.
   Tim's rule: only INTERACTIVE elements should ever render blue
   text \u2014 descriptive prose should inherit ash/bone. Without the
   semicolon-anchor, this rule painted blue + propagated via
   -webkit-text-fill-color inheritance to every descendant of
   .hr-tabs etc. (v0.9.22 fix). */
html body [style^="color: #004EEB"]:not(#__reos_never_id),
html body [style^="color:#004EEB"]:not(#__reos_never_id),
html body [style^="color: #004eeb"]:not(#__reos_never_id),
html body [style^="color:#004eeb"]:not(#__reos_never_id),
html body [style^="color: rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style^="color:rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style^="color: #155EEF"]:not(#__reos_never_id),
html body [style^="color:#155EEF"]:not(#__reos_never_id),
html body [style^="color: rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style^="color:rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style*="; color: #004EEB"]:not(#__reos_never_id),
html body [style*=";color: #004EEB"]:not(#__reos_never_id),
html body [style*="; color: #004eeb"]:not(#__reos_never_id),
html body [style*=";color: #004eeb"]:not(#__reos_never_id),
html body [style*="; color: rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style*=";color: rgb(0, 78, 235)"]:not(#__reos_never_id),
html body [style*="; color: #155EEF"]:not(#__reos_never_id),
html body [style*=";color: #155EEF"]:not(#__reos_never_id),
html body [style*="; color: rgb(21, 94, 239)"]:not(#__reos_never_id),
html body [style*=";color: rgb(21, 94, 239)"]:not(#__reos_never_id) {
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
/* v0.9.59: dropped [class*="text-primary"] catchall \u2014 substring
   match was incorrectly catching Tailwind hover-prefixed variants
   (group-hover:text-primary-600 / hover:text-primary-700 / etc.)
   on the Objects settings page card titles, painting them emerald
   in resting state instead of only on hover. The dotted-class
   rules below are whitespace-token matches and ONLY fire when the
   class is unprefixed. */
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
html body .text-primary-900 {
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
html body .hr-data-table-wrapper:not(#__reos_never_id),
html body .hr-data-table-wrapper-responsive:not(#__reos_never_id),
html body .hr-data-table-wrapper-header:not(#__reos_never_id),
html body .hr-data-table-wrapper-footer:not(#__reos_never_id),
html body .hr-data-table:not(#__reos_never_id),
html body .hr-data-table__body:not(#__reos_never_id),
html body .hr-table-freezer-wrapper:not(#__reos_never_id),
html body [class*="hr-data-table-wrapper"]:not(#__reos_never_id),
html body [class*="hr-data-table__body"]:not(#__reos_never_id),
html body [class*="hr-table-freezer"]:not(#__reos_never_id) {
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
/* v0.10.31: column-header bottom divider \u2014 the <tr> inside
   thead.hr-data-table__header ships with border-bottom: 1px solid
   rgb(208, 213, 221) (#D0D5DD / gray-300). Tim flagged the visible
   light divider below "Name | Last updated | Funnel steps" on
   Funnels page. Pin steel instead. */
html body .hr-data-table__header tr:not(#__reos_never_id),
html body thead.hr-data-table__header tr:not(#__reos_never_id),
html body [class*="hr-data-table__header"] tr:not(#__reos_never_id) {
  border-bottom: 1px solid var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
}

/* 15d-1b (v0.10.15). Tim flagged white-strip surrounds on the
   Collections + Inventory pages: the .hr-data-table-wrapper-header
   row that holds the search input ships with the GHL native
   --n-background-color: var(--white) CSS var on its inner
   .hr-input-container + .hr-header-lite-* wrappers. The outer
   wrapper paint (15d-1) hits the immediate parent but doesn't
   reach these inner search-bar slot wrappers, so a white band
   leaks through between the page heading and the column-header
   row. Sweep every common search-bar slot to transparent (lets
   the wrapper graphite show through) \u2014 the inner .hr-input
   itself stays slate per Tim's input canon. */
html body .hr-data-table-wrapper .hr-table-header-container,
html body .hr-data-table-wrapper .hr-header-lite-container,
html body .hr-data-table-wrapper .hr-header-lite-content,
html body .hr-data-table-wrapper .hr-header-lite-left,
html body .hr-data-table-wrapper .hr-header-lite-right,
html body .hr-data-table-wrapper .hr-header-lite-icon-item,
html body .hr-data-table-wrapper .hr-space,
html body .hr-data-table-wrapper .hr-space-inner,
html body .hr-data-table-wrapper .hr-input-container,
html body .hr-data-table-wrapper .hr-drawer-header-item,
html body .hr-data-table-wrapper .hr-table-header-dialog-popup,
html body [class*="hr-data-table-wrapper"] .hr-table-header-container,
html body [class*="hr-data-table-wrapper"] .hr-header-lite-container,
html body [class*="hr-data-table-wrapper"] .hr-header-lite-content,
html body [class*="hr-data-table-wrapper"] .hr-header-lite-left,
html body [class*="hr-data-table-wrapper"] .hr-header-lite-right,
html body [class*="hr-data-table-wrapper"] .hr-header-lite-icon-item,
html body [class*="hr-data-table-wrapper"] .hr-input-container {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}
/* Pagination footer + its dropdown / button slots \u2014 page size
   selector, prev / next, page numbers. Inherit graphite from the
   wrapper-footer. */
html body .hr-data-table-wrapper-footer .hr-pagination-cntr,
html body .hr-data-table-wrapper-footer .hr-pages-cntr,
html body .hr-data-table-wrapper-footer .hr-pages,
html body .hr-data-table-wrapper-footer .hr-pagination-item,
html body .hr-data-table-wrapper-footer .hr-dropdown-cntr,
html body .hr-data-table-wrapper-footer .hr-space,
html body .hr-data-table-wrapper-footer .hr-space-inner {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
/* Data table EMPTY-STATE row ("No inventory to show yet"). The
   <tr> that wraps the empty-state cell ships with inline white
   bg from GHL. Force graphite. */
html body .hr-data-table__body tr.flex,
html body .hr-data-table__body [class*="empty"],
html body .hr-data-table__body .data-table__no-data {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* Empty-state title text (e.g. "No inventory to show yet") \u2014
   bone. */
html body .hr-empty:not(#__reos_never_id),
html body .hr-empty__title:not(#__reos_never_id),
html body .hr-empty .hr-text:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
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

/* All states: transparent surface, no box chrome, no transition.
   v0.11.9: host button color flipped from ash to emerald (with
   the icon updates below). Hover still bumps via the svg rule. */
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
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
/* v0.11.9: Default icon \u2014 emerald (was ash). Tim's call after the
   GHL Agent Logs icon was added: he wants the whole right-rail to
   read as a unified emerald icon-bar, not muted-ash-until-hover.
   Hover bumps to emerald-bright so the hover lift still reads.

   v0.13.16: the right rail has TWO kinds of icons:

   (1) FILLED icons (Associations, dollar-sign, AI sparkles):
       <svg fill="none">
         <path fill="currentColor" d="..." />
       </svg>
       Need fill: emerald on the path.

   (2) LINE-ART icons (Tasks, Notes, Documents, Appointments,
       Calendar, Activities clock):
       <svg fill="none" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" d="..." />   \u2190 inherits fill=none from svg
       </svg>
       Need stroke: emerald on the path. MUST NOT fill \u2014 filling
       turns the outline silhouette into a solid blob.

   v0.13.15 set fill: emerald on every descendant, which turned
   the line-art icons into solid blobs. Fix: only apply fill:
   emerald to paths that have an EXPLICIT non-none fill attribute
   (catches the fill="currentColor" pattern). Stroke is always
   safe to paint emerald.

   Specificity still uses the :not(#__reos_never_id) bumper so
   we beat the 18a-hr-icon-default rule at line ~4495. */

/* Base: paint stroke + color emerald on every svg/descendant.
   These apply to both filled and line-art icons safely. */
html body .sidebar-option-button:not(#__reos_never_id) svg,
html body .sidebar-option-button:not(#__reos_never_id) svg *,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg * {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
  transition: none !important;
}
/* Filled-icon rule: only paths with an explicit non-none fill
   attribute get the emerald fill. Line-art paths (no fill attr,
   inherit from svg's fill="none") are left alone \u2014 they render
   as clean outlines. */
html body .sidebar-option-button:not(#__reos_never_id) svg path[fill]:not([fill="none"]),
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg path[fill]:not([fill="none"]) {
  fill: var(--reos-emerald) !important;
}

/* Hover \u2014 emerald-bright (subtle lift from emerald rest). Same
   filled-vs-line distinction. */
html body .sidebar-option-button:not(#__reos_never_id):hover svg,
html body .sidebar-option-button:not(#__reos_never_id):hover svg *,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id):hover svg,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id):hover svg * {
  color: var(--reos-emerald-bright) !important;
  stroke: var(--reos-emerald-bright) !important;
}
html body .sidebar-option-button:not(#__reos_never_id):hover svg path[fill]:not([fill="none"]),
html body button[class*="sidebar-option-button"]:not(#__reos_never_id):hover svg path[fill]:not([fill="none"]) {
  fill: var(--reos-emerald-bright) !important;
}

/* Active \u2014 text-blue-600 WITHOUT hover:text-blue-600 (so we only
   catch the selected button, not every button that has the hover
   utility). Emerald icon, still no box. */
html body .sidebar-option-button:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body .sidebar-option-button:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg *,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg * {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
html body .sidebar-option-button:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path[fill]:not([fill="none"]),
html body button[class*="sidebar-option-button"]:not(#__reos_never_id)[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path[fill]:not([fill="none"]) {
  fill: var(--reos-emerald) !important;
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

/* 15e-3. v0.13.13: ASSOCIATIONS PANEL HEADER \u2014 the panel that opens
   from the right-side rail (Associations / Activities / Tasks / etc.)
   uses default GHL hr-button styling for its title-row buttons:
       "Manage associations" pill  \u2192 --gray-700 text  \u2192 invisible on graphite
       X close button              \u2192 --gray-700 icon  \u2192 invisible on graphite
   The bottom border under the title uses border-gray-200 \u2192 invisible too.
   These IDs are stable (#manage-association-btn / #close-panel-button),
   so we can override via id selector without leaking to other panels. */

/* Manage associations pill \u2014 ash text + icon at rest, bone on hover. */
html body #manage-association-btn:not(#__reos_never_id),
html body #manage-association-btn:not(#__reos_never_id) .hr-button__content,
html body #manage-association-btn:not(#__reos_never_id) .hr-button__content * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body #manage-association-btn:not(#__reos_never_id) svg,
html body #manage-association-btn:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body #manage-association-btn:hover:not(#__reos_never_id),
html body #manage-association-btn:hover:not(#__reos_never_id) .hr-button__content,
html body #manage-association-btn:hover:not(#__reos_never_id) .hr-button__content *,
html body #manage-association-btn:hover:not(#__reos_never_id) svg,
html body #manage-association-btn:hover:not(#__reos_never_id) svg path {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}

/* X close button \u2014 ash icon at rest, emerald on hover (matches the
   destructive-clear feel of similar X buttons elsewhere). */
html body #close-panel-button:not(#__reos_never_id) svg,
html body #close-panel-button:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body #close-panel-button:hover:not(#__reos_never_id) svg,
html body #close-panel-button:hover:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Bottom divider line under the Associations title \u2014 replace the
   default border-gray-200 with steel so it actually renders on the
   dark theme. Scoped to the div that wraps these two buttons. */
html body div:has(> #manage-association-btn)[class*="border-b"][class*="border-gray-200"],
html body div:has(> #close-panel-button)[class*="border-b"][class*="border-gray-200"] {
  border-bottom-color: var(--reos-steel) !important;
}

/* 15e-4. v0.13.21: EDIT OPPORTUNITY MODAL (.crm-opportunities-modal)
   The whole modal renders with Naive UI defaults (white card, near-
   black text). The universal walkers (killWhiteEverywhere +
   coerceDarkDropdowns) each take a swing at the children every tick,
   producing the "flashing coercers" Tim flagged. Targeted scope so
   the modal renders fully on-brand without fighting the walkers. */

/* Modal card itself \u2014 kill the white --n-color, force graphite. */
html body .crm-opportunities-modal:not(#__reos_never_id),
html body .ui-modal.crm-opportunities-modal:not(#__reos_never_id) {
  --n-color: var(--reos-graphite) !important;
  --n-color-modal: var(--reos-graphite) !important;
  --n-color-popover: var(--reos-graphite) !important;
  --n-color-embedded: var(--reos-slate) !important;
  --n-color-embedded-modal: var(--reos-slate) !important;
  --n-color-embedded-popover: var(--reos-slate) !important;
  --n-action-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-title-text-color: var(--reos-bone) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-icon-color-pressed: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
  --n-close-color-pressed: var(--reos-steel) !important;
  --n-border-color: var(--reos-steel) !important;
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* Section headers ("Contact details", "Opportunity Details") \u2014
   force bone for visual hierarchy instead of the inline ash that
   the universal walker leaves them in. Targeted by the
   .text-base.font-medium Tailwind utility pattern Naive uses. */
html body .crm-opportunities-modal:not(#__reos_never_id) .text-base.font-medium {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Form labels \u2014 bump from ash \u2192 ash-bright so they're more
   legible against graphite without competing with the values. */
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-form-item-label__text {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

/* Naive selection / input variables across the modal \u2014 kill the
   --n-color: #fff defaults so dropdowns + inputs stop flickering
   between white-renders and walker-painted graphite. */
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-base-selection,
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-input,
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-date-picker {
  --n-color: var(--reos-slate) !important;
  --n-color-active: var(--reos-slate) !important;
  --n-color-focus: var(--reos-slate) !important;
  --n-color-disabled: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-placeholder-color: var(--reos-ash) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-active: 1px solid var(--reos-emerald) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-box-shadow-active: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-caret-color: var(--reos-emerald) !important;
}

/* Tag chips inside the Tags multi-select \u2014 pale gray \u2192 graphite
   chip with steel border, bone text. */
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-tag {
  --n-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
}

/* Hide Empty Fields checkbox \u2014 kill the white box. */
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-checkbox {
  --n-color: var(--reos-slate) !important;
  --n-color-table: var(--reos-slate) !important;
  --n-color-table-modal: var(--reos-slate) !important;
  --n-color-table-popover: var(--reos-slate) !important;
  --n-color-checked: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-checked: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-check-mark-color: var(--reos-obsidian, #0A0D12) !important;
}

/* Modal divider strips (border-t, border-b border-gray-200) \u2014
   replace gray-200 with steel so they render visibly. Scoped
   into the modal so we don't change page-level dividers. */
html body .crm-opportunities-modal:not(#__reos_never_id) [class*="border-gray-200"] {
  border-color: var(--reos-steel) !important;
}

/* File upload draggers \u2014 graphite bg, steel dashed border. */
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-upload {
  --n-border-radius: 4px !important;
  /* v0.13.40: solid border, not dashed (Tim's call \u2014 dashed looked busy
     on the slate dragger bg). */
  --n-dragger-border: 1px solid var(--reos-steel) !important;
  --n-dragger-border-hover: 1px solid var(--reos-emerald) !important;
  /* v0.13.35: dragger box back to slate (Tim wanted the icon's circle
     gone, not the dragger's surround). */
  --n-dragger-color: var(--reos-slate) !important;
  --n-item-color-hover: var(--reos-steel) !important;
  --n-item-text-color: var(--reos-bone) !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-upload-dragger p {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) .hr-upload-dragger .ui-text-xs-regular {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* v0.13.39: replace the default Tailwind gray-200 border with a steel
   border (slate-themed, subtle against the slate dragger bg). Hover
   swaps to emerald to match the icon hover affordance. Unscoped:
   applies wherever a dragger renders.
   v0.13.40: solid border, not dashed \u2014 dashed looked busy on the slate
   bg per Tim. */
.hr-upload-dragger {
  border: 1px solid var(--reos-steel) !important;
  transition: border-color 0.15s ease !important;
}
.hr-upload-dragger:hover {
  border: 1px solid var(--reos-emerald) !important;
}

/* v0.13.32: kill the big white circle on file upload draggers.
   Naive UI ships .ui-upload-icon with a ::before pseudo-element that
   renders a large white "backdrop" circle behind the SVG icon. The JS
   coercer paints .ui-upload-icon steel but can't touch pseudo-elements.
   Nuke ::before/::after on the dragger and the icon, kill any box-shadow
   ring, and pin the icon as a compact steel circle. Unscoped: applies
   wherever a dragger renders (modal, opp-detail page, contact widgets).
*/
.hr-upload-dragger::before,
.hr-upload-dragger::after,
.hr-upload-dragger .ui-upload-icon::before,
.hr-upload-dragger .ui-upload-icon::after {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  border: none !important;
  display: none !important;
  content: none !important;
}
/* v0.13.35: icon container now TRANSPARENT \u2014 no circle, no border-radius.
   Just lays out the SVG centered. The dragger's slate bg shows through;
   only the SVG arrow is visible inside. */
.hr-upload-dragger .ui-upload-icon {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
  border-radius: 0 !important;
  width: auto !important;
  height: auto !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
}
.hr-upload-dragger .ui-upload-icon svg {
  width: 56px !important;
  height: 56px !important;
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  transition: color 0.15s ease, stroke 0.15s ease !important;
}
/* v0.13.36: arrow turns emerald when the user hovers the dragger, so the
   icon mirrors the dashed border's hover affordance. */
.hr-upload-dragger:hover .ui-upload-icon svg {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Footer audit links \u2014 gray blue (text-blue-700 default) \u2192 emerald. */
html body .crm-opportunities-modal:not(#__reos_never_id) .text-blue-700 {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* Cancel button (footer) \u2014 transparent + steel border + bone. */
html body .crm-opportunities-modal:not(#__reos_never_id) .crm-opportunities-cancel-btn {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-steel) !important;
  --n-color-pressed: var(--reos-steel) !important;
  --n-color-focus: var(--reos-steel) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
}

/* Update (primary) button \u2014 already emerald via --n-button--primary;
   override the inline blue --n-color/--n-border in case it sneaks
   through (Vue sets these inline per render). */
html body .crm-opportunities-modal:not(#__reos_never_id) .crm-opportunities-submit-btn {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: var(--reos-emerald-bright) !important;
  --n-color-pressed: var(--reos-emerald) !important;
  --n-color-focus: var(--reos-emerald-bright) !important;
  --n-color-disabled: var(--reos-emerald) !important;
  --n-text-color: var(--reos-obsidian, #0A0D12) !important;
  --n-text-color-hover: var(--reos-obsidian, #0A0D12) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald-bright) !important;
}

/* Delete (trash) button \u2014 neutral by default, red on hover.
   Tim's call: the icon shouldn't shout "delete" at rest; should
   only signal danger when the user actually hovers it. */
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity) {
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  transition: border-color 0.12s ease !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity):hover {
  border-color: var(--reos-crimson, #D43F4A) !important;
}

/* Kill the button's own border + focus ring so only the outer
   wrapper's border shows. GHL's default button styles add a thin
   red border on the .crm-opportunities-delete-btn at rest/hover \u2014
   that produces an "inner red box" inside our outer red wrapper. */
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:hover,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:focus,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:focus-visible,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:active {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent !important;
}

/* Trash icon \u2014 ash at rest, crimson on hover. The SVG uses
   stroke="currentColor", so we override the .text-red-600
   class via the parent button's color cascade. */
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity svg,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity svg path,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity .text-red-600 {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  transition: color 0.12s ease, stroke 0.12s ease !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity):hover #DeleteOpportunity svg,
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity):hover #DeleteOpportunity svg path,
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity):hover #DeleteOpportunity .text-red-600,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:hover svg,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:hover svg path,
html body .crm-opportunities-modal:not(#__reos_never_id) #DeleteOpportunity:hover .text-red-600 {
  color: var(--reos-crimson, #D43F4A) !important;
  stroke: var(--reos-crimson, #D43F4A) !important;
}

/* Active sidebar tab in the modal (bg-blue-50 + text-blue-800) \u2014
   replace with emerald-glow + emerald text. */
html body .crm-opportunities-modal:not(#__reos_never_id) button.bg-blue-50.text-blue-800 {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* Inactive sidebar tabs (text-gray-500) \u2014 bump to ash so they're
   legible without competing with the active tab. */
html body .crm-opportunities-modal:not(#__reos_never_id) button.text-gray-500 {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) button.text-gray-500:hover {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* v0.13.17: Tim wants the "Manage associations" and "+ Add" pills
   borderless. Both render their border via:
     (a) --n-border / --n-border-hover CSS vars
     (b) decorative <div class="hr-button__border"> and
         <div class="hr-button__state-border"> overlay divs
   Override both surfaces so the borders disappear cleanly.

   Manage associations: stable id #manage-association-btn.
   "+ Add" pill: auto-generated id like #hr-button-v-N-N, so
   target by the tertiary+3xs class combo (matches the "Create
   new" button too \u2014 Tim wants its border gone for consistency). */

/* Manage associations pill \u2014 no border in any state. */
html body #manage-association-btn:not(#__reos_never_id),
html body #manage-association-btn:not(#__reos_never_id):hover,
html body #manage-association-btn:not(#__reos_never_id):focus,
html body #manage-association-btn:not(#__reos_never_id):active {
  --n-border: none !important;
  --n-border-hover: none !important;
  --n-border-pressed: none !important;
  --n-border-focus: none !important;
  --n-border-disabled: none !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}
html body #manage-association-btn:not(#__reos_never_id) .hr-button__border,
html body #manage-association-btn:not(#__reos_never_id) .hr-button__state-border {
  display: none !important;
  border: none !important;
}

/* Small pills (3xs / xs size variants) \u2014 the "+ Add", "Create
   new", "Manage associations"-style sidekick buttons. These
   render the emerald-50 border-on-graphite combo that reads as
   a faint white line \u2014 Tim's "ugly border". Remove the
   decorative overlay divs + the n-border vars in all states.

   v0.13.18: broadened from .hr-button--tertiary.hr-button--3xs
   to ALL .hr-button--3xs and .hr-button--xs that aren't primary
   CTAs. The "+ Add" pill on the Associations panel uses a
   different type modifier than .hr-button--tertiary (auto-gen
   id, no stable hook), so the tertiary-only selector missed it.
   Excluding .hr-button--primary-type preserves emerald CTA
   buttons that legitimately want a visible border. */
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id),
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id):hover,
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id):focus,
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id):active,
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id),
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id):hover,
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id):focus,
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id):active {
  --n-border: none !important;
  --n-border-hover: none !important;
  --n-border-pressed: none !important;
  --n-border-focus: none !important;
  --n-border-disabled: none !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__border,
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__state-border,
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__border,
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id) .hr-button__state-border {
  display: none !important;
  border: none !important;
}

/* v0.13.19: ALSO null the Naive UI bg color vars on these pills so
   they render with no fill behind the text. Combined with the JS
   coercer below (clearTertiaryPillBackgrounds), the inline slate
   that coerceDarkDropdowns paints on these gets cleared. */
html body button.hr-button.hr-button--3xs:not(.hr-button--primary-type):not(#__reos_never_id),
html body button.hr-button.hr-button--xs:not(.hr-button--primary-type):not(#__reos_never_id),
html body #manage-association-btn:not(#__reos_never_id) {
  --n-color: transparent !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: transparent !important;
  --n-color-focus: transparent !important;
  --n-color-disabled: transparent !important;
  background-color: transparent !important;
  background: transparent !important;
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

/* v0.12.20: Tabulator-library tables (custom-object list pages \u2014
   /objects/<object>/list). Tabulator is a separate library from
   Naive's n-data-table family; its classes are .tabulator-*. The
   Properties / custom-object list page renders the entire table
   surface on a default white bg (Tabulator's stock CSS). Paint
   the whole family graphite/slate canon. */
html body .my-table.tabulator:not(#__reos_never_id),
html body .tabulator:not(#__reos_never_id),
html body .tabulator-tableholder:not(#__reos_never_id),
html body .tabulator-table:not(#__reos_never_id),
html body .table-container:not(#__reos_never_id),
html body .cardWrapper:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
/* Tabulator header row (column titles). Slate strip matches the
   n-data-table __th canon. */
html body .tabulator-header:not(#__reos_never_id),
html body .tabulator-header-contents:not(#__reos_never_id),
html body .tabulator-headers:not(#__reos_never_id),
html body .tabulator-col:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}
html body .tabulator-col-title:not(#__reos_never_id),
html body .tabulator-col-title-holder:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Column sorter arrows \u2014 ash idle, emerald on hover/active. */
html body .tabulator-col-sorter:not(#__reos_never_id) svg,
html body .tabulator-col-sorter:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .tabulator-col[aria-sort="ascending"]:not(#__reos_never_id) .tabulator-col-sorter svg path,
html body .tabulator-col[aria-sort="descending"]:not(#__reos_never_id) .tabulator-col-sorter svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}
/* The active-sort pill (the createdAt column's blue-50 round badge
   around its sort arrow) \u2014 remap to emerald-glow. */
html body .tabulator-col[aria-sort] .tabulator-col-sorter > span[style*="background-color:#EFF8FF"]:not(#__reos_never_id),
html body .tabulator-col[aria-sort] .tabulator-col-sorter > span[style*="#EFF8FF"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
}
/* Column resize handles \u2014 steel hairline. */
html body .tabulator-col-resize-handle:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
}
/* Data rows \u2014 graphite, bone text, steel 1px bottom border (horizontal
   row separators only \u2014 no vertical grid lines). Odd/even both same so
   we don't get zebra striping (Tim's canon prefers uniform graphite). */
html body .tabulator-row:not(#__reos_never_id),
html body .tabulator-row-odd:not(#__reos_never_id),
html body .tabulator-row-even:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}
html body .tabulator-cell:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
/* Grid lines: 1px horizontal row separators only in the body, plus vertical
   separators in the HEADER (so users can see where to grab to resize columns).
   - Data cells: strip ALL borders. The single horizontal line per row then
     comes from the row's border-bottom alone; otherwise the cell's own 1px
     border-bottom stacks beneath the row's, doubling the line to ~2px.
   - Header columns: drop the left border, keep the 1px right border (the
     resize-grab affordance \u2014 color comes from the steel border-color rule).
     The header's bottom separator is untouched. */
html body .tabulator-cell:not(#__reos_never_id) {
  border-width: 0 !important;
}
html body .tabulator-col:not(#__reos_never_id) {
  border-left-width: 0 !important;
  border-right-width: 1px !important;
  border-right-style: solid !important;
}
/* Frozen (sticky) columns \u2014 Tabulator uses position: sticky + a bg
   to mask scrolled content. Default white. Paint graphite so the
   sticky strip blends. */
html body .tabulator-frozen:not(#__reos_never_id),
html body .tabulator-frozen-left:not(#__reos_never_id),
html body .tabulator-frozen-right:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
/* Row hover \u2014 keep graphite (Tim's canon, no highlight on rows).
   v0.12.20: explicit override of Tabulator's default white hover. */
html body .tabulator-row:not(#__reos_never_id):hover,
html body .tabulator-row:not(#__reos_never_id):hover .tabulator-cell {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
/* Tabulator footer (pagination strip). */
html body .tabulator-footer:not(#__reos_never_id),
html body .tabulator-footer-contents:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-top: 1px solid var(--reos-steel) !important;
}
html body .tabulator-page-counter:not(#__reos_never_id),
html body .tabulator-paginator:not(#__reos_never_id),
html body .tabulator-paginator label:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
/* Pagination Prev / Next / First / Last buttons + page-size select.
   Slate + steel border, emerald active. */
html body .tabulator-page:not(#__reos_never_id),
html body select.tabulator-page-size:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
}
html body .tabulator-page:not(#__reos_never_id):hover {
  background-color: var(--reos-steel) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .tabulator-page.active:not(#__reos_never_id) {
  background-color: transparent !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .tabulator-page:not(#__reos_never_id)[disabled],
html body .tabulator-page:not(#__reos_never_id):disabled {
  background-color: transparent !important;
  color: var(--reos-cool-gray) !important;
  border-color: var(--reos-steel) !important;
}

/* Skeleton loader (pre-data placeholder grid). The .skeleton-loader
   container ships white; .skeleton-cell + .skeleton-data shimmer in
   gray-100/200. Paint everything graphite/steel so the loading state
   matches the dark canon. */
html body #skeleton-loader:not(#__reos_never_id),
html body .skeleton-loader:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}
html body .skeleton-cell:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}
html body .skeleton-data:not(#__reos_never_id),
html body .skeleton-data.check:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}

/* Quick-filter bar (Advanced filters | Sort | Bulk-actions | Search |
   Manage fields strip). Sits above the table; default bg is
   transparent inheriting white from .cardWrapper, but explicit
   graphite pin keeps it on-canon even if a Vue scoped rule paints. */
html body .quick-filter-bar:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
/* Advanced filters button + Sort button. */
html body .advanced-container .button:not(#__reos_never_id),
html body .sort-btn .button:not(#__reos_never_id),
html body #list-view-advance-filter-btn:not(#__reos_never_id),
html body #list-view-sort-btn:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 999px !important;
}
html body .sort-btn .button.active:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
}
html body .advanced-container .button:not(#__reos_never_id) svg,
html body .sort-btn .button:not(#__reos_never_id) svg,
html body #list-view-advance-filter-btn:not(#__reos_never_id) svg,
html body #list-view-sort-btn:not(#__reos_never_id) svg {
  color: inherit !important;
  stroke: currentColor !important;
}

/* Search box (inline-styled white bg in the toolbar). Paint slate
   + steel border to match input canon. */
html body .quick-filter-bar .search-box:not(#__reos_never_id),
html body .search-box:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}
html body .quick-filter-bar .search-box:not(#__reos_never_id) input,
html body .search-box:not(#__reos_never_id) input {
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .quick-filter-bar .search-box:not(#__reos_never_id) input::placeholder,
html body .search-box:not(#__reos_never_id) input::placeholder {
  color: var(--reos-cool-gray) !important;
  -webkit-text-fill-color: var(--reos-cool-gray) !important;
}
html body .quick-filter-bar .search-box:not(#__reos_never_id) svg,
html body .search-box:not(#__reos_never_id) svg {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

/* Manage fields button. */
html body .manage-fields:not(#__reos_never_id),
html body #list-view-manage-field:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .manage-fields:not(#__reos_never_id) svg,
html body .manage-fields:not(#__reos_never_id) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}
html body .manage-fields:not(#__reos_never_id):hover svg,
html body .manage-fields:not(#__reos_never_id):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

/* Properties page wrapper (.wrapper around the whole panel). */
html body div.wrapper:not(#__reos_never_id):has(.pipeline-ribbon) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

/* Bulk-action export button + "X Properties selected" text. */
html body .bulk-action:not(#__reos_never_id),
html body .bulk-action-export-btn:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
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

/* v0.13.100: hide GHL inline field-help spans. NOT a tooltip \u2014 these
   are span.font-medium.text-gray-700 nodes that GHL renders ABOVE the
   input as a help-string. Source is the custom field placeholder
   property (the descriptive text set in
   snapshot-config/custom-fields/contact-fields.json). Tim flagged these
   as overlapping fields and unnecessary for reps in the field.
   v0.13.99 :has() selector missed these because the span is a SIBLING
   of the input, not nested inside an .hr-tooltip / .hr-popover container.
   (Cardinal rule reminder: no backticks inside THEME_CSS template literal.) */
html body span.font-medium.text-gray-700[style*="font-size: 14px"],
html body span.font-medium.text-gray-700[style*="font-size:14px"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
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

/* v0.12.21: smartlist title ("Properties", "Contacts", "Opportunities",
   etc.) at the top-left of the pipeline ribbon. Ships with dark
   gray text via Vue scoped CSS \u2014 invisible on our graphite bg.
   Pin bone + a heading weight so it reads as the page title. */
html body .smartlist-title:not(#__reos_never_id),
html body .pipeline-ribbon .smartlist-title:not(#__reos_never_id),
html body [class*="pipeline-ribbon"] .smartlist-title:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  font-weight: 600 !important;
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
/* v0.11.7: Tim flagged the contact-form .hr-tabs-nav--segment-type
   variant (All fields / DND / Actions) reverting to white bg.
   Browse confirmed: .hr-tabs-tab-wrapper computed bg rgb(255,255,255)
   and .hr-tabs-nav--segment-type computed bg rgb(247,249,253) \u2014 Vue
   scoped CSS beating the base .hr-tabs-* rules at (0,0,1,0)
   specificity. Bump specificity with html body + :not chains so
   the canon holds. */
html body .hr-tabs:not(#__reos_never_id),
html body .hr-tabs-nav:not(#__reos_never_id),
html body .hr-tabs-nav--segment-type:not(#__reos_never_id),
html body .hr-tabs-nav--top:not(#__reos_never_id),
html body .hr-tabs-nav-scroll-content:not(#__reos_never_id),
html body .hr-tabs-content:not(#__reos_never_id),
html body .hr-tabs-pane:not(#__reos_never_id),
html body .hr-tabs-rail:not(#__reos_never_id),
html body .hr-tabs-tab-wrapper:not(#__reos_never_id),
html body [class*="hr-tabs-nav--segment"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
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
   capped at 20px).

   v0.24.3: the generic [class*="avatar"] family below also excludes
   'select'. GHL select components wrap the chosen value in
   .hr-select-menu-avatar-container, and without the exclusion the
   obsidian paint hit the option label (a property address), turning it
   black-on-dark. The JS FORCE_RULE twin (the avatar rule near line 12757)
   carries the same exclusion. Real avatars inside selects still match via
   the .hr-avatar family above, so initials keep their obsidian treatment. */
html body .hr-avatar:not(.default-avatar),
html body .hr-avatar:not(.default-avatar) .hr-avatar__text,
html body .hr-avatar:not(.default-avatar) .hr-avatar__text *,
html body .hr-avatar:not(.default-avatar) p,
html body .hr-avatar:not(.default-avatar) span,
html body .hr-avatar:not(.default-avatar) div,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar),
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar) span,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar) p,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar) div,
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar) [class*="text"],
html body [class*="avatar"]:not([class*="dropdown"]):not([class*="option-avatar"]):not([class*="option"]):not([class*="select"]):not(.default-avatar) [class*="initials"] {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 1 !important;
  text-align: center !important;
}

/* v0.10.32: .default-avatar is GHL's "no image yet" placeholder
   variant. On contact / user rows it holds a person silhouette
   icon; on action buttons (Generate magic, etc.) it holds an
   action SVG icon. Tim flagged the latter \u2014 the action icon was
   rendering obsidian on a dark-mint bg, near-invisible. Pin the
   inner SVG to BONE so it reads sharp against the mint avatar
   circle.

   v0.12.14: GHL ships .default-avatar with inline
     background-color: rgb(244, 243, 255); color: rgb(122, 90, 248)
   (pale lavender + purple \u2014 NOT the emerald-mint we used to
   assume). On the WordPress Quickstart page the headphones support
   icon was rendering as a near-invisible blob: bone icon on pale
   lavender. Override the inline bg with slate so the bone icon
   reads sharp. CSS !important beats GHL's no-important inline. */
html body .default-avatar:not(#__reos_never_id),
html body .n-avatar.default-avatar:not(#__reos_never_id),
html body [class*="avatar"].default-avatar:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .default-avatar:not(#__reos_never_id) svg,
html body .default-avatar:not(#__reos_never_id) svg path,
html body .default-avatar:not(#__reos_never_id) svg circle,
html body .default-avatar:not(#__reos_never_id) i {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
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

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   v0.13.91: CUSTOM FIELD ADD/EDIT DRAWER
   (#custom-fields-add-edit-field-drawer \u2014 GHL Settings > Custom Fields > Edit)

   Tim audited this drawer and found it inconsistent \u2014 labels too dim,
   inline-edit row text rendering near-black on slate (invisible), Live
   Preview card still white-tinged, primary button still blue. Lock the
   whole drawer to the REInvest OS dark canon so it matches every other
   themed surface.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Drawer card itself \u2014 graphite surface, bone text, emerald accent. */
html body #custom-fields-add-edit-field-drawer {
  --n-color: var(--reos-graphite) !important;
  --n-color-modal: var(--reos-graphite) !important;
  --n-color-popover: var(--reos-graphite) !important;
  --n-color-embedded: var(--reos-slate) !important;
  --n-color-embedded-modal: var(--reos-slate) !important;
  --n-color-embedded-popover: var(--reos-slate) !important;
  --n-action-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-title-text-color: var(--reos-bone) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
  --n-close-color-pressed: var(--reos-steel) !important;
  --n-border-color: var(--reos-steel) !important;
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

/* Drawer header + body + footer surfaces. */
html body #custom-fields-add-edit-field-drawer .hr-drawer-header,
html body #custom-fields-add-edit-field-drawer .hr-drawer-body,
html body #custom-fields-add-edit-field-drawer .hr-drawer-footer,
html body #custom-fields-add-edit-field-drawer .hr-drawer-content,
html body #custom-fields-add-edit-field-drawer .hr-drawer-content-wrapper {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}

/* Accordion items ("Field details", "Define dropdown options"). */
html body #custom-fields-add-edit-field-drawer .hr-collapse-item__header,
html body #custom-fields-add-edit-field-drawer .hr-collapse-item__header-main,
html body #custom-fields-add-edit-field-drawer .hr-collapse-item__content-inner {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-collapse {
  --n-divider-color: var(--reos-steel) !important;
  --n-title-text-color: var(--reos-bone) !important;
  --n-arrow-color: var(--reos-ash) !important;
  --n-arrow-icon-color: var(--reos-ash) !important;
}

/* Form labels ("Field type", "Add to object", "Field name", "Folder name",
   "Key", "Description") \u2014 Tim's drawer rendered these as dim slate-gray
   (rgb(144,152,163)) inline. Bump to ash-bright so they read clearly. */
html body #custom-fields-add-edit-field-drawer .hr-form-item-label__text,
html body #custom-fields-add-edit-field-drawer .hr-form-item-label__text * {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

/* Naive inputs + selects inside the drawer \u2014 slate fill, steel border,
   bone text, emerald focus. Mirrors the Edit Opportunity Modal canon. */
html body #custom-fields-add-edit-field-drawer .hr-base-selection,
html body #custom-fields-add-edit-field-drawer .hr-input,
html body #custom-fields-add-edit-field-drawer .hr-input-container,
html body #custom-fields-add-edit-field-drawer .hr-select {
  --n-color: var(--reos-slate) !important;
  --n-color-active: var(--reos-slate) !important;
  --n-color-focus: var(--reos-slate) !important;
  --n-color-disabled: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-bone) !important;
  --n-placeholder-color: var(--reos-ash) !important;
  --n-placeholder-color-disabled: var(--reos-ash) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-active: 1px solid var(--reos-emerald) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-box-shadow-active: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-caret-color: var(--reos-emerald) !important;
  background-color: var(--reos-slate) !important;
}

/* Naive inline-edit text cells in the Dropdown Options table.
   This is the big readability fix: row values ("Seller", "lead",
   "Buyer", "Closing Agent", etc.) render with --n-text-color: var(--gray-900),
   which is near-black on the slate row bg. Force bone. */
html body #custom-fields-add-edit-field-drawer .hr-input__inline-text,
html body #custom-fields-add-edit-field-drawer .hr-input__inline-text *,
html body #custom-fields-add-edit-field-drawer .hr-input__text-content,
html body #custom-fields-add-edit-field-drawer .hr-input__text-content--active,
html body #custom-fields-add-edit-field-drawer .hr-input__inline-text .hr-p {
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-placeholder-color: var(--reos-ash) !important;
  --n-color: transparent !important;
  --n-color-focus: transparent !important;
  --n-background-color: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Direct fallback for the inline <p> tags inside the inline-text wrapper \u2014
   their inline style sets --n-text-color: var(--gray-900) which scopes
   downward. Belt-and-suspenders. */
html body #custom-fields-add-edit-field-drawer table p.hr-p,
html body #custom-fields-add-edit-field-drawer .hr-data-table__body p,
html body #custom-fields-add-edit-field-drawer .hr-data-table__body span {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Inputs in active edit mode \u2014 when a row value is being typed, the
   <input> element inherits the same near-black gray-900 fill. Force bone. */
html body #custom-fields-add-edit-field-drawer .hr-input__input-el,
html body #custom-fields-add-edit-field-drawer .hr-input__textarea-el {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: var(--reos-slate) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-input__input,
html body #custom-fields-add-edit-field-drawer .hr-input-wrapper {
  background-color: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
}

/* Inline-edit icons (the copy/duplicate button next to each row's label/value)
   render gray-700 by default \u2014 bump to ash so they're visible on slate. */
html body #custom-fields-add-edit-field-drawer .hr-data-table__body .hr-icon-inner {
  color: var(--reos-ash) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table__body .hr-icon-inner:hover {
  color: var(--reos-bone) !important;
}

/* Dropdown Options table \u2014 header, body cells, drag handles, dividers. */
html body #custom-fields-add-edit-field-drawer .hr-data-table-wrapper,
html body #custom-fields-add-edit-field-drawer .hr-data-table,
html body #custom-fields-add-edit-field-drawer .hr-table-freezer-wrapper {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table-wrapper-header,
html body #custom-fields-add-edit-field-drawer .hr-table-header-container,
html body #custom-fields-add-edit-field-drawer .hr-header-lite-container-v2,
html body #custom-fields-add-edit-field-drawer .hr-data-table__header tr,
html body #custom-fields-add-edit-field-drawer .hr-data-table__cell-header {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table__body-row {
  background-color: var(--reos-graphite) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table__body-row:hover,
html body #custom-fields-add-edit-field-drawer .hr-data-table__body-row.hr-data-table__body-row-hover:hover {
  background-color: var(--reos-slate) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table-bdr-btm,
html body #custom-fields-add-edit-field-drawer .hr-data-table-bdr-rgt {
  border-color: var(--reos-steel) !important;
}

/* "+ Add option" header button \u2014 emerald accent text so it reads as the
   primary CTA in the table header instead of fading into the bg. */
html body #custom-fields-add-edit-field-drawer #custom-fields-header-add-option-button {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-emerald-glow) !important;
  --n-color-pressed: var(--reos-emerald-glow) !important;
  --n-color-focus: var(--reos-emerald-glow) !important;
  --n-text-color: var(--reos-emerald) !important;
  --n-text-color-hover: var(--reos-emerald-bright) !important;
  --n-text-color-pressed: var(--reos-emerald-bright) !important;
}
html body #custom-fields-add-edit-field-drawer #custom-fields-header-add-option-button p {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body #custom-fields-add-edit-field-drawer #custom-fields-header-add-option-button:hover p {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

/* Checkboxes inside the table (drag-row select). */
html body #custom-fields-add-edit-field-drawer .hr-checkbox {
  --n-color: var(--reos-slate) !important;
  --n-color-table: var(--reos-slate) !important;
  --n-color-table-modal: var(--reos-slate) !important;
  --n-color-table-popover: var(--reos-slate) !important;
  --n-color-checked: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-checked: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-check-mark-color: var(--reos-obsidian, #0A0D12) !important;
}

/* Live Preview card on the right rail \u2014 bg-white default \u2192 graphite. */
html body #custom-fields-add-edit-field-drawer .bg-white {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

/* Footer Cancel + Save (Update field) buttons \u2014 match the canonical
   transparent-cancel + emerald-primary pattern. */
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-cancel {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-steel) !important;
  --n-color-pressed: var(--reos-steel) !important;
  --n-color-focus: var(--reos-steel) !important;
  --n-color-disabled: transparent !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
}
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save {
  --n-color: var(--reos-emerald) !important;
  /* v0.13.98: hover state inverts to ghost (transparent bg + emerald text +
     emerald border) so the "Update field" label turns green on hover per
     Tim's request. Inactive state stays solid emerald (primary CTA). */
  --n-color-hover: transparent !important;
  --n-color-pressed: var(--reos-emerald-glow) !important;
  --n-color-focus: transparent !important;
  --n-color-disabled: var(--reos-emerald) !important;
  --n-text-color: var(--reos-obsidian, #0A0D12) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
}
/* The button text is rendered as a <p> with hr-button__content-default-slot.
   On hover the parent button gets a different --n-text-color, but the inline
   color on the <p> wins. Force the slot's text via descendant rule. */
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:hover .hr-button__content-default-slot,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:hover .hr-button__content,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:focus .hr-button__content-default-slot,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:focus .hr-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* Section divider strips inside the drawer. */
html body #custom-fields-add-edit-field-drawer [class*="border-gray-200"],
html body #custom-fields-add-edit-field-drawer .hr-section-footer {
  border-color: var(--reos-steel) !important;
  background-color: var(--reos-graphite) !important;
}

/* Required-field asterisks \u2014 soften from saturated red to crimson token. */
html body #custom-fields-add-edit-field-drawer .hr-form-item-label__asterisk {
  --n-asterisk-color: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}

/* Word-count helpers (e.g., "12", "0 / 200") under input \u2014 ash so they
   don't shout at the rep but stay legible. */
html body #custom-fields-add-edit-field-drawer .hr-input-word-count {
  color: var(--reos-ash) !important;
}

/* Per-row trash buttons (delete-button-N) \u2014 strip the default browser
   button chrome (the visible rectangle Tim flagged) and route the
   destructive-action hover to crimson so it reads as the "delete"
   affordance without shouting at rest. */
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"] {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  padding: 4px !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  transition: background-color 0.12s ease, color 0.12s ease !important;
}
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"]:focus,
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"]:focus-visible {
  background-color: var(--reos-crimson-glow, rgba(212, 63, 74, 0.12)) !important;
  outline: none !important;
  box-shadow: none !important;
}
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"] .hr-icon-inner,
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"] svg {
  color: var(--reos-ash) !important;
  stroke: currentColor !important;
}
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"]:hover {
  background-color: var(--reos-crimson-glow, rgba(212, 63, 74, 0.12)) !important;
}
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"]:hover .hr-icon-inner,
html body #custom-fields-add-edit-field-drawer button[id^="delete-button-"]:hover svg {
  color: var(--reos-crimson) !important;
}

/* END CUSTOM FIELD DRAWER BLOCK */

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   v0.13.101: .hr-dialog canon (Create View, confirm dialogs, etc.)

   Smaller GHL action dialog popup (separate component from .hr-modal).
   Form inside has dim slate-gray labels, white-bg inputs, blue primary
   button, gray-bordered cancel. Lock to the dark canon: graphite
   surface, ash-bright labels, slate inputs, emerald primary, transparent
   steel-border cancel. Mirrors the Custom Field drawer pattern.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Dialog body + footer surfaces \u2014 graphite. */
html body .hr-dialog,
html body .hr-dialog__content,
html body .hr-dialog__content--last,
html body .hr-dialog__content--text,
html body .hr-dialog .hr-modal__content,
html body .hr-dialog .hr-section-footer {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}

/* Form labels \u2014 bump from dim slate-gray to ash-bright for legibility. */
html body .hr-dialog .hr-form-item-label__text,
html body .hr-dialog .hr-form-item-label__text * {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

/* Asterisk softening (default --error-600 reads too saturated). */
html body .hr-dialog .hr-form-item-label__asterisk {
  --n-asterisk-color: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}

/* Inputs + selects inside the dialog \u2014 slate fill, steel border,
   bone text, emerald focus (canonical input look). */
html body .hr-dialog .hr-input-container,
html body .hr-dialog .hr-input,
html body .hr-dialog .hr-base-selection,
html body .hr-dialog .hr-select {
  --n-color: var(--reos-slate) !important;
  --n-color-active: var(--reos-slate) !important;
  --n-color-focus: var(--reos-slate) !important;
  --n-color-disabled: var(--reos-graphite) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-disabled: var(--reos-ash) !important;
  --n-placeholder-color: var(--reos-ash) !important;
  --n-placeholder-color-disabled: var(--reos-ash) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-disabled: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
  --n-border-active: 1px solid var(--reos-emerald) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-box-shadow-active: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-caret-color: var(--reos-emerald) !important;
}
html body .hr-dialog .hr-input__input,
html body .hr-dialog .hr-input-wrapper,
html body .hr-dialog .hr-input__input-el,
html body .hr-dialog .hr-base-selection-tags {
  background-color: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

/* Multi-select pill tags \u2014 slate fill, steel border, bone text. */
html body .hr-dialog .hr-tag {
  --n-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
}

/* Placeholder overlay span. */
html body .hr-dialog .hr-base-selection-placeholder,
html body .hr-dialog .hr-base-selection-placeholder__inner {
  color: var(--reos-ash) !important;
  background-color: var(--reos-slate) !important;
}

/* Helper text below the form (e.g. "A user can be in only one view...") */
html body .hr-dialog p.text-gray-500,
html body .hr-dialog p.text-gray-600,
html body .hr-dialog .text-xs.text-gray-500 {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

/* Error-feedback line ("View name is required") \u2014 keep readable but
   tone down from full crimson scream. Bone is fine; the border on the
   input already signals the error. */
html body .hr-dialog .hr-form-item-feedback--error p,
html body .hr-dialog .hr-form-item-feedback--error span {
  color: var(--reos-crimson) !important;
  -webkit-text-fill-color: var(--reos-crimson) !important;
}
html body .hr-dialog .hr-form-item-blank--error .hr-input,
html body .hr-dialog .hr-form-item-blank--error .hr-input-container {
  --n-border: 1px solid var(--reos-crimson) !important;
  --n-border-hover: 1px solid var(--reos-crimson) !important;
  --n-border-focus: 1px solid var(--reos-crimson) !important;
}

/* Footer divider (above Cancel + Create buttons). */
html body .hr-dialog .hr-divider {
  --n-color: var(--reos-steel) !important;
}
html body .hr-dialog .hr-divider__line {
  background-color: var(--reos-steel) !important;
}

/* Footer Cancel button \u2014 transparent + steel border + bone (canon). */
html body .hr-dialog button[id$="-cancel"],
html body .hr-dialog .hr-button--secondary {
  --n-color: transparent !important;
  --n-color-hover: var(--reos-steel) !important;
  --n-color-pressed: var(--reos-steel) !important;
  --n-color-focus: var(--reos-steel) !important;
  --n-color-disabled: transparent !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
  --n-text-color-pressed: var(--reos-bone) !important;
  --n-text-color-focus: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
}

/* Footer primary button (Create / Save / Confirm) \u2014 emerald with
   obsidian text. Hover inverts to ghost (transparent bg, emerald text)
   matching the Custom Field drawer's Update button. */
html body .hr-dialog button[id$="-confirm"],
html body .hr-dialog .hr-button--primary {
  --n-color: var(--reos-emerald) !important;
  --n-color-hover: transparent !important;
  --n-color-pressed: var(--reos-emerald-glow) !important;
  --n-color-focus: transparent !important;
  --n-color-disabled: var(--reos-emerald) !important;
  --n-text-color: var(--reos-obsidian, #0A0D12) !important;
  --n-text-color-hover: var(--reos-emerald) !important;
  --n-text-color-pressed: var(--reos-emerald) !important;
  --n-text-color-focus: var(--reos-emerald) !important;
  --n-text-color-disabled: var(--reos-obsidian, #0A0D12) !important;
  --n-border: 1px solid var(--reos-emerald) !important;
  --n-border-hover: 1px solid var(--reos-emerald) !important;
  --n-border-pressed: 1px solid var(--reos-emerald) !important;
  --n-border-focus: 1px solid var(--reos-emerald) !important;
}
/* Descendant override for primary button text (Vue inline color wins
   otherwise; same pattern as v0.13.98 Update field button). */
html body .hr-dialog button[id$="-confirm"]:hover .hr-button__content-default-slot,
html body .hr-dialog button[id$="-confirm"]:hover .hr-button__content,
html body .hr-dialog .hr-button--primary:hover .hr-button__content-default-slot,
html body .hr-dialog .hr-button--primary:hover .hr-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

/* END HR-DIALOG BLOCK */

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   v0.16.2 (REMOVED in v0.16.7): MY STAFF PAGE attempt.

   We tried to theme /v2/location/{loc}/settings/staff/team with broad
   class-staff selectors. Verified empirically via browse skill that
   the page content is rendered inside a cross-origin iframe (named
   settings-app, served from client-app-crm-settings.leadconnectorhq.com).
   The customizer JS+CSS does NOT propagate into that iframe (different
   origin), so the rules below targeted classes that don't exist on the
   PARENT shell where the customizer runs.
   (Cardinal rule reminder: no backticks inside THEME_CSS template literal.)

   Rules removed in v0.16.7. The Manage Team CTA injected by
   manage-team-page.ts is positioned over the iframe boundary instead,
   which works because positioning happens in the PARENT document.

   Lesson logged: before writing theme rules for a "white page" inside
   GHL, check if the content is in a cross-origin iframe (settings-app,
   client-app-*, etc.). If yes, theming can't reach inside; only
   positioned overlays can.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* GHL appointment-status dropdown (.dropDownList) \u2014 GHL applies its dark inline
   style a beat late, so it flashes white-on-white on open. Paint it dark from
   the first frame and keep every option readable. */
html body ul.dropDownList {
  background-color: #12161d !important;
}
html body ul.dropDownList li.dropDownOption,
html body ul.dropDownList div[role="button"] {
  color: #edeef0 !important;
}
html body ul.dropDownList li.dropDownSelectedOption {
  color: var(--reos-emerald, #34d399) !important;
}
html body ul.dropDownList div[role="button"]:hover {
  background-color: #1b2230 !important;
}

/* Ask AI composer \u2014 GHL paints the input "card" as a WHITE ::before pseudo
   (plus a light drop shadow) that our broad background rules can't reach, so the
   composer pill stays bright white on the dark page. Repaint it on canon:
   graphite fill, steel hairline, dark shadow + a faint emerald edge. The
   textarea and +/mic/audio buttons inside are already handled by the .hr-input
   and .hr-button rules. */
html body .askai-composer-bar::before {
  background: #12161d !important;
  border: 1px solid #252c36 !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(15, 181, 126, 0.05) !important;
}
/* The textarea inside carries an emerald focus ring (1px box-shadow) and the
   GHL .hr-input__state-border draws a 1px emerald border, both at 4px radius \u2014
   their corners poked out past the rounded pill as little green marks. Kill the
   inner ring; put the focus accent on the rounded pill so it follows the curve. */
html body .askai-composer-bar .hr-input__textarea-el,
html body .askai-composer-bar .hr-input__state-border {
  box-shadow: none !important;
  border-color: transparent !important;
}
html body .askai-composer-bar--focused::before {
  border-color: rgba(15, 181, 126, 0.5) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(15, 181, 126, 0.22) !important;
}
/* Ask AI sidebar nav/control icons \u2192 bone. The global .hr-icon-inner rule
   tinted them emerald, and a fill:none rule left the Material panel-toggle
   icon (top-right square) as an invisible 1px hairline. Outline icons
   (Heroicon, fill="none") use stroke; Material icons (fill="currentColor",
   viewBox "0 -960 \u2026") use fill. */
html body .askai-left-panel .hr-button .hr-icon-inner:not(#__reos_never_id),
html body .askai-left-panel .hr-button .hr-icon-inner:not(#__reos_never_id) svg {
  color: var(--reos-bone) !important;
}
html body .askai-left-panel .hr-button .hr-icon-inner:not(#__reos_never_id) svg[fill="none"] path {
  stroke: var(--reos-bone) !important;
}
html body .askai-left-panel .hr-button .hr-icon-inner:not(#__reos_never_id) svg[fill="currentColor"] path {
  fill: var(--reos-bone) !important;
  stroke: none !important;
}
/* The New chat / Search row icons are <img src="data:image/svg+xml;\u2026"> with a
   baked-in (dark) color \u2014 an <img> can't be recolored via fill/color/stroke, so
   filter it to ~bone. (Scheduled is an inline <svg>, handled by the rule above.) */
html body .askai-left-panel .askai-left-panel__menu-row-icon img {
  filter: brightness(0) invert(0.93) !important;
}
/* Ask AI sidebar buttons (New chat / Search / Scheduled / Account / panel
   toggle) carry GHL's coolgray element border AND a steel .hr-button__border
   overlay 1px inside \u2014 two parallel 1px lines that read as a doubled / "too
   wide" border on the straight edges (corners hide the overlap). Drop the
   outer coolgray so the single rounded steel __border is the only border. */
html body .askai-left-panel .hr-button.hr-button--default-type:not(#__reos_never_id) {
  border-color: transparent !important;
}
/* Ask AI "Personalization" settings dialog (.pz-modal). GHL ships three off-canon
   bits: (1) an invisible Material close icon (fill:none \u2192 hairline only), (2) an
   emerald "active" highlight on the only/non-actionable Personalization tab that
   reads as a clickable affordance but does nothing, (3) a white Manage button.
   The tab's emerald comes from a GHL stylesheet we can't read (CORS) that
   out-specifies a single :not() \u2014 hence the stacked :not(#id) for the --active tab. */
html body .pz-modal .hr-icon-inner:not(#__reos_never_id),
html body .pz-modal .hr-icon-inner:not(#__reos_never_id) svg { color: #EDEEF0 !important; }
html body .pz-modal .hr-icon-inner:not(#__reos_never_id) svg[fill="none"] path { stroke: #EDEEF0 !important; fill: none !important; }
html body .pz-modal .hr-icon-inner:not(#__reos_never_id) svg[fill="currentColor"] path { fill: #EDEEF0 !important; stroke: none !important; }
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id),
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id):hover {
  border-color: #252C36 !important; background-color: #1A1F28 !important; box-shadow: none !important; cursor: default !important;
}
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id) .pz-modal__nav-label,
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id):hover .pz-modal__nav-label,
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id) .hr-button__content *,
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id):hover .hr-button__content * {
  color: #EDEEF0 !important; -webkit-text-fill-color: #EDEEF0 !important;
}
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id) .hr-icon-inner svg path,
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id):hover .hr-icon-inner svg path { stroke: #EDEEF0 !important; }
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id) .hr-button__border,
html body .pz-modal .pz-modal__nav-item--active:not(#__reos_never_id):not(#__reos_never_id):not(#__reos_never_id) .hr-button__state-border { border-color: #252C36 !important; }
html body .pz-modal .pz-modal__manage-btn:not(#__reos_never_id) {
  background-color: #1A1F28 !important; border: 1px solid #252C36 !important; color: #EDEEF0 !important;
}
html body .pz-modal .pz-modal__manage-btn:not(#__reos_never_id):hover {
  border-color: #0FB57E !important; background-color: #252C36 !important;
}

/* END REINVEST OS THEME */
`,lu=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],du=t=>{if(!t||t[0]!=="#")return t;let e=t.slice(1);if(e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6&&e.length!==8)return t;let o=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return t;if(e.length===8){let i=parseInt(e.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${i})`}return`rgb(${o}, ${r}, ${a})`},cu=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),pu=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],ar=new WeakSet,Cl=()=>{try{if(!document.body)return;document.body.querySelectorAll("*").forEach(e=>{try{if(ar.has(e)&&e.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.closest(".hl_header, header.hl_header, header.app-header"))return;let o=e.tagName;if(o==="INPUT"||o==="TEXTAREA"||o==="SELECT"||o==="SCRIPT"||o==="STYLE"||o==="SVG"||o==="PATH"||o==="IMG")return;let a=window.getComputedStyle(e).backgroundColor;if(!a||a==="rgba(0, 0, 0, 0)"||a==="transparent")return;let i=a.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!i)return;let s=+i[1],l=+i[2],d=+i[3];if((i[4]!==void 0?+i[4]:1)<.5||s<230||l<230||d<230)return;let b=e.style.getPropertyValue("background-color");if(b==="rgb(18, 22, 29)"){ar.add(e);return}if(e.closest(".hr-button")&&!(e.classList&&e.classList.contains("hr-button"))){b!=="transparent"&&(e.style.setProperty("background-color","transparent","important"),e.style.setProperty("background-image","none","important")),ar.add(e);return}e.style.setProperty("background-color","rgb(18, 22, 29)","important"),e.style.setProperty("color","rgb(237, 238, 240)","important"),ar.add(e)}catch{}})}catch{}},ga=new WeakSet,Qt=()=>{document.querySelectorAll(pu.join(", ")).forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.querySelectorAll("*");[e,...Array.from(o)].forEach(r=>{if(ga.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH")return;let i=window.getComputedStyle(r).backgroundColor;if(!i||i==="rgba(0, 0, 0, 0)"||i==="transparent")return;let s=i.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!s)return;let l=+s[1],d=+s[2],p=+s[3];if(!(l<230||d<230||p<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),ga.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),ga.add(r)}})})},Al=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.classList&&e.classList.contains("hr-button"))return;let o=e.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(e.style.setProperty("background-color","transparent","important"),e.style.setProperty("background-image","none","important"))})},$l=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(t=>{t.style.setProperty("background-color","#252C36","important"),t.style.setProperty("background-image","none","important"),t.style.setProperty("color","#EDEEF0","important")})},Ll=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"),e.style.removeProperty("border-style"),e.style.removeProperty("border-width"),e.style.removeProperty("border-radius"))})},ir=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(e=>{let o=e.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let s=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(s){let l=+s[1],d=+s[2],p=+s[3];(s[4]!==void 0?+s[4]:1)>=.5&&l>=180&&d>=180&&p>=180&&l+d+p>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},Il=()=>{let t="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(t)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},Zt=()=>{if(!lt)for(let t of lu){let e;try{e=document.querySelectorAll(t.selector)}catch{continue}e.forEach(o=>{for(let[r,a]of Object.entries(t.styles)){let i=o.style.getPropertyPriority(r),s=o.style.getPropertyValue(r),l=cu.has(r)?du(a):a;i==="important"&&s===l||o.style.setProperty(r,a,"important")}})}},pr="#1A1F28",bu=26,mu=31,hu=40,Ml=new Set,Ol=new Set,sr=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.children.length>0||(e.textContent||"").trim()!=="--")return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.width>800)return;e.style.setProperty("display","none","important");let a=e.className?.toString()||"<no class>";!Ol.has(a)&&a!=="<no class>"&&(Ol.add(a),c.debug(`Hid empty "--" leaf: "${a}"`))})},uu=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],vu=["trash","Trash","TRASH","delete","Delete","DELETE"],_u=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.getAttribute("data-reos-trash")==="true")return;let o=e.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(vu.some(i=>a.includes(i))&&(r=!0),r||o.querySelectorAll("path").forEach(s=>{if(r)return;let l=s.getAttribute("d")||"";uu.some(d=>l.includes(d))&&(r=!0)}),!r){let i=(e.id||"").toLowerCase(),s=(e.getAttribute("aria-label")||"").toLowerCase(),l=(e.getAttribute("title")||"").toLowerCase();(i.includes("delete")||i.includes("remove")||i.includes("trash")||s.includes("delete")||s.includes("remove")||s.includes("trash")||l.includes("delete")||l.includes("remove")||l.includes("trash"))&&(r=!0)}r&&e.setAttribute("data-reos-trash","true")})},gu=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),yu=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=(e.textContent||"").trim();o.length===0||o.length>40||gu.has(o)&&e.style.display!=="none"&&(e.style.setProperty("display","none","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("pointer-events","none","important"))})},Dl=new Set,Hl=new WeakSet,fu=()=>{document.body.querySelectorAll("*").forEach(e=>{if(Hl.has(e)&&e.style.getPropertyValue("color")==="rgb(237, 238, 240)"||e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();if(o.includes("ai-button")||o.includes("ask-ai")||o.includes("bg-clip-text")||o.includes("text-transparent")||e.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let r=e.tagName.toLowerCase();if(r==="svg"||r==="path"||r==="circle"||r==="rect"||r==="polygon"||r==="polyline"||r==="line"||r==="g")return;let a=!1;for(let h of Array.from(e.childNodes))if(h.nodeType===Node.TEXT_NODE&&(h.textContent||"").trim()){a=!0;break}if(!a)return;let i=Array.from(e.children);if(i.length>0&&i.every(h=>{let m=h.tagName.toLowerCase();return m==="svg"||m==="img"})&&!a)return;let d=window.getComputedStyle(e).color;if(!(d==="rgb(255, 255, 255)"||d==="rgba(255, 255, 255, 1)"||d==="#ffffff"||d==="white"))return;e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),Hl.add(e);let b=e.className?.toString()||"<no class>";!Dl.has(b)&&b!=="<no class>"&&(Dl.add(b),c.debug(`Remapped pure-white text -> bone: "${b}"`))})},Pl=new Set,xu=()=>{let t=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),e="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(e)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),t.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(i=>{if(i.closest("[id^='ws-crm-']"))return;let s=(i.className?.toString()||"").toLowerCase();if(s.includes("avatar"))return;let l=window.getComputedStyle(i),d=l.backgroundColor,p=l.backgroundImage||"",b=!1;if(p!=="none"&&p.includes("gradient"))b=!0;else if(d&&d!=="rgba(0, 0, 0, 0)"&&d!=="transparent"){let C=d.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(C&&parseFloat(C[1])<.6)return;let E=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(E){let f=parseInt(E[1],10),T=parseInt(E[2],10),$=parseInt(E[3],10);(f>=60||T>=60||$>=60)&&(f>230&&T>230&&$>230||(f>=80||T>=80||$>=80)&&(b=!0))}}if(!b)return;let m=(i.textContent||"").trim(),_=s,x=Array.from(i.querySelectorAll("*")).map(C=>(C.className?.toString()||"").toLowerCase()).join(" "),k=m.toLowerCase()==="ask ai"||_.includes("ai-button")||_.includes("ask-ai")||_.includes("askai"),y=_.includes("bg-clip-text")||_.includes("text-transparent")||x.includes("bg-clip-text")||x.includes("text-transparent"),g=Array.from(i.querySelectorAll("*")).some(C=>{let E=window.getComputedStyle(C),f=E.getPropertyValue("-webkit-background-clip")||"",T=E.getPropertyValue("background-clip")||"";return f.includes("text")||T.includes("text")});if(k||y||g){let C=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],E=f=>{C.forEach(T=>f.style.removeProperty(T))};E(i),i.querySelectorAll("*").forEach(E);return}let w="#12161D";i.style.setProperty("color",w,"important"),i.querySelectorAll("*").forEach(C=>{let E=C.tagName.toLowerCase();E==="svg"||E==="path"||E==="circle"||E==="rect"||E==="polygon"||E==="polyline"||E==="line"||E==="g"?(C.style.setProperty("fill",w,"important"),C.style.setProperty("stroke",w,"important"),C.style.setProperty("color",w,"important")):(C.style.setProperty("color",w,"important"),C.style.setProperty("-webkit-text-fill-color",w,"important"))});let S=i.className?.toString()||"<no class>";!Pl.has(S)&&S!=="<no class>"&&(Pl.add(S),c.debug(`Darkened SVG icons on colored button: "${S}"`))})})},Rl=new Set,wu=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;if((e.className?.toString()||"").toLowerCase().includes("default-avatar")){e.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(d=>{(d.getAttribute("style")||"").includes("translateY(11px)")&&d.style.removeProperty("transform")});return}let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(e.parentElement||e).querySelectorAll("svg, img").forEach(d=>{let p=d;if(p.closest("[id^='ws-crm-']"))return;let b=d.getBoundingClientRect();if(b.width===0||b.width>28||b.height>28)return;let h=b.left<r.right&&b.right>r.left,m=b.top<r.bottom&&b.bottom>r.top;if(!(h&&m)||b.top+b.height/2<a)return;let x=b.width*b.height/(r.width*r.height);if(x>.55)return;let k=p,y=p.parentElement,g=0;for(;y&&y!==e&&g<3;){let S=y.getBoundingClientRect();if(S.width>0&&S.width<=30&&S.height<=30)k=y;else break;y=y.parentElement,g++}k.style.setProperty("transform","translateY(11px)","important");let w=(k.className?.toString()||"")+" "+k.tagName;Rl.has(w)||(Rl.add(w),c.debug(`Dropped activity badge 11px (${b.width.toFixed(0)}x${b.height.toFixed(0)} icon, ratio ${x.toFixed(2)}): "${w}"`))})})},ku="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",Eu=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(e.style.setProperty("color","#0FB57E","important"),e.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),e.style.setProperty("opacity","1","important"),e.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),e.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",ku,"important")}),e.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((e.style.color==="rgb(18, 22, 29)"||e.style.color==="#12161D"||e.style.color==="#0FB57E"||e.style.color==="rgb(15, 181, 126)")&&(e.style.removeProperty("color"),e.style.removeProperty("-webkit-text-fill-color")),e.querySelectorAll("span, p, div").forEach(a=>{let i=a.style.color;(i==="rgb(18, 22, 29)"||i==="#12161D"||i==="#0FB57E"||i==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),e.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},Bl=new Set,Tu=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;e.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let s=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!s)return;let l=parseInt(s[1],10),d=parseInt(s[2],10),p=parseInt(s[3],10);if(!(l>200&&d>200&&p>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let b=r.className?.toString()||"<no class>";!Bl.has(b)&&b!=="<no class>"&&(Bl.add(b),c.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${l},${d},${p})): "${b}"`))})})},Fl=new Set,Su=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let s=o.getBoundingClientRect();if(s.width>0&&s.height>0&&s.width<=400&&s.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let l=o.className?.toString()||"<no class>";!Fl.has(l)&&l!=="<no class>"&&(Fl.add(l),c.debug(`Painted Ask AI wrapper graphite: "${l}"`))}}o=o.parentElement,r++}})},Nl=new Set,Cu=()=>{let t=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),e=document.querySelectorAll("div, section, aside"),o=[];e.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let i=window.getComputedStyle(a);if(i.position!=="fixed"&&i.position!=="absolute")return;let s=parseInt(i.zIndex,10);if(!isFinite(s)||s<50)return;let l=a.getBoundingClientRect();l.width<240||l.height<120||l.width>1500||l.height>900||o.push(a)}),[...t,...o].forEach(a=>{a.querySelectorAll("*").forEach(s=>{if(s.id?.startsWith("ws-crm-")||s.closest("[id^='ws-crm-']"))return;let l=(s.className?.toString()||"").toLowerCase();if(l.includes("avatar")||l.includes("notification-dot")||l.includes("indicator"))return;if(l.includes("sidebar-option-button")||s.closest(".sidebar-option-button")||s.closest("nav[class*='w-13']")){let y=s.getAttribute("style")||"";(y.includes("background-color")||y.includes("color"))&&(s.style.removeProperty("background-color"),s.style.removeProperty("color"));return}if(l.includes("tabulator")||l.includes("tabulator-page")||s.closest("[class*='tabulator']")){(s.getAttribute("style")||"").includes("background-color")&&s.style.removeProperty("background-color");return}if(l.includes("hr-card")||s.closest(".hr-card")||s.id&&s.id.startsWith("opportunity-")){let y=s.getAttribute("style")||"";(y.includes("background-color")||y.includes("color"))&&(s.style.removeProperty("background-color"),s.style.removeProperty("color"));return}if(l.includes("ai-button")||l.includes("ask-ai")||l.includes("bg-clip-text")||l.includes("text-transparent")||s.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(s).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let p=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!p)return;let b=parseInt(p[1],10),h=parseInt(p[2],10),m=parseInt(p[3],10);if(!(b>200&&h>200&&m>200))return;let x=s.getBoundingClientRect();if(x.width<24||x.height<16||x.width>1400)return;s.style.setProperty("background-color","#12161D","important"),s.style.setProperty("color","#EDEEF0","important");let k=s.className?.toString()||"<no class>";!Nl.has(k)&&k!=="<no class>"&&(Nl.add(k),c.debug(`Coerced light bg (${x.width.toFixed(0)}x${x.height.toFixed(0)}, rgb(${b},${h},${m})): "${k}"`))})})},zl=new Set,Au=()=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";document.body.querySelectorAll("*").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0)return;let r=(o.textContent||"").trim();if(r.length===0||r.length>80||r==="--"||o.closest(t)||o.closest("[class*='avatar'], [class*='hr-avatar']")||o.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||o.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(o.matches("[role='heading']")||o.closest("[role='heading']")||o.matches("h1, h2, h3")||o.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){o.matches("h1, h2, h3")&&(o.getAttribute("style")||"").includes("color")&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"));return}if(o.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let w=o.getAttribute("style")||"";(w.includes("color")||w.includes("background"))&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"),o.style.removeProperty("background-color"));return}if(o.closest("#SettingTexasSmsBlock")||o.matches("p.ui-text-sm-medium")&&o.parentElement?.classList?.contains("flex")&&o.parentElement?.classList?.contains("items-center")&&o.parentElement?.children?.length===1){(o.getAttribute("style")||"").includes("color")&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"));return}if(o.closest(".hr-button, .n-button")||o.matches(".hr-button__content, .n-button__content")||o.closest(".hr-button__content, .n-button__content")){(o.getAttribute("style")||"").includes("color")&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"));return}if(o.closest(".bg-primary-50, [class*='bg-primary-50']")){(o.getAttribute("style")||"").includes("color")&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"));return}let a=o,i=null;for(let w=0;w<4&&a;w++){let S=a.nextElementSibling;if(S&&(S.matches(t)||S.querySelector(t)!==null)){i=S;break}a=a.parentElement}if(!i)return;let s=o.getBoundingClientRect();if(s.width===0||s.height===0||s.width>400||s.height>60)return;o.style.setProperty("color","#9098A3","important"),o.style.setProperty("-webkit-text-fill-color","#9098A3","important");let l=i,d=l.getBoundingClientRect(),p=l.className?.toString()||"",b=p.includes("schedule-ui-form-weekly-schedule-checkbox")||l.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,h=p.includes("hl-form-item")||p.includes("n-form-item--top-labelled")||l.closest(".hl-form-item")!==null,m=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",_=(p.includes("hr-form-item-blank")||p.includes("hr-form-item")||l.matches(m))&&(l.matches(m)||l.querySelector(m)!==null);_&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let x=p.includes("hr-radio")||l.closest(".hr-radio, [class*='hr-radio']")!==null;x&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let k=p.includes("hr-breadcrumb")||l.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;k&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let y=p.includes("hr-header-lite")||l.closest("[class*='hr-header-lite']")!==null;y&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius")),!b&&!h&&!_&&!x&&!k&&!y&&d.width>0&&d.width<=800&&d.height>0&&d.height<=100&&(l.style.setProperty("background-color",pr,"important"),l.style.setProperty("border-color","#252C36","important"),l.style.setProperty("border-style","solid","important"),l.style.setProperty("border-width","1px","important"),l.style.setProperty("border-radius","4px","important"));let g=o.className?.toString()||"<no class>";!zl.has(g)&&g!=="<no class>"&&(zl.add(g),c.debug(`Colored field label "${r.slice(0,30)}": "${g}"`))})},Gl=new Set,$u=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||e.querySelector("svg, img")!==null)return;let i=(e.textContent||"").trim();if(i.length===0||i.length>4)return;let s=Math.min(r.width,r.height),l=Math.max(16,Math.min(24,Math.round(s*.6)));e.style.setProperty("font-size",`${l}px`,"important"),e.style.setProperty("line-height","1","important"),e.style.setProperty("display","flex","important"),e.style.setProperty("align-items","center","important"),e.style.setProperty("justify-content","center","important"),e.style.setProperty("text-align","center","important"),e.querySelectorAll("*").forEach(p=>{p.tagName==="svg"||p.tagName==="SVG"||p.tagName!=="IMG"&&(p.style.setProperty("font-size",`${l}px`,"important"),p.style.setProperty("line-height","1","important"),p.style.setProperty("text-align","center","important"))});let d=e.className?.toString()||"<no class>";!Gl.has(d)&&d!=="<no class>"&&(Gl.add(d),c.debug(`Resized avatar text to ${l}px (circle ${s.toFixed(0)}px): "${d}"`))})},ql=new Set,Lu=new Set(["Enter Dashboard Name"]),Iu=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=e.placeholder||"";if(Lu.has(r)){(e.getAttribute("style")||"").includes("background-color")&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"));return}e.style.setProperty("background-color",pr,"important"),e.style.setProperty("border-color","#252C36","important"),e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=e.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",pr,"important"),a.style.setProperty("border-color","#252C36","important"));let i=e.className?.toString()||"<no class>";!ql.has(i)&&i!=="<no class>"&&(ql.add(i),c.debug(`Forced input slate bg: "${i}"`))})},lr=()=>{document.body.querySelectorAll("*").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||e.id==="chat-filter"||e.id==="phone-calls"||e.id==="archive-conversation"||e.id==="star-toggle"||e.id==="read-toggle"||e.id==="delete-conversation")return;if(e.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}if(e.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}let o=e.className?.toString()||"";if(o.includes("bg-inherit")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(e.closest(".pipeline-ribbon")&&o.split(" ").includes("count")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.split(" ").includes("tabulator-page")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(m=>o.includes(m))){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("schedule-ui-form-weekly-schedule-checkbox")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("border-color")||m.includes("border-style")||m.includes("border-width"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"),e.style.removeProperty("border-style"),e.style.removeProperty("border-width"));return}if(o.includes("n-button")&&o.includes("icon-only")&&!o.includes("quaternary")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("hr-button--tertiary-type")||o.includes("n-button--tertiary-type")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"),e.style.removeProperty("-webkit-text-fill-color"),e.style.removeProperty("border-color"),e.style.removeProperty("border-style"),e.style.removeProperty("border-width"),e.style.removeProperty("border-radius"));return}if(o.includes("hr-data-table-td")||o.includes("hr-data-table-tr")||o.includes("hr-data-table__body-cell")||o.includes("hr-data-table__cell")||o.includes("hr-data-table__header-cell")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("n-data-table-td--fixed-right")||o.includes("n-data-table-td--last-col")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(e.classList.contains("hr-tabs")||o.includes("hr-tabs-tab-wrapper")||o.includes("hr-tabs-nav")||o.includes("hr-tabs-nav-scroll-content")||o.includes("hr-tabs-content")||o.includes("hr-tabs-pane")||o.includes("hr-tabs-rail")||o.includes("hr-tabs-wrapper")||o.includes("hr-tabs-pane-wrapper")||o.includes("hr-tab-pane")){let m=e.getAttribute("style")||"";(m.includes("background-color: rgb(26, 31, 40)")||m.includes("background-color: #1A1F28")||m.includes("background-color: #1a1f28"))&&e.style.removeProperty("background-color");return}if(o.includes("hr-date-panel")||o.includes("n-date-panel")||e.closest(".hr-date-panel, .n-date-panel")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("hr-tag")&&o.includes("ui-default")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if((o.includes("bg-purple-50")||o.includes("bg-purple-100"))&&(o.includes("rounded-lg")||o.includes("rounded-md")||o.includes("rounded-full"))){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("n-alert")||e.closest(".n-alert")||o.includes("hl-warning")||o.includes("hl-error")||o.includes("hl-info")||o.includes("hl-success")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("hr-card")||e.closest(".hr-card")||e.id&&e.id.startsWith("opportunity-")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("bg-gray-50")||o.includes("bg-gray-100")||o.includes("bg-gray-200")||o.includes("bg-white")||o.includes("bg-blue-50")||o.includes("bg-blue-100")||o.includes("bg-sky-50")||o.includes("bg-indigo-50")||o.includes("bg-slate-50")||o.includes("bg-neutral-50")||o.includes("bg-zinc-50")||o.includes("bg-stone-50")||o.includes("F7F9FD")||o.includes("F9FAFB")||o.includes("ECEEF2")||o.includes("eceef2")||o.includes("EFF4FF")||o.includes("eff4ff")){(e.getAttribute("style")||"").includes("background-color")&&e.style.removeProperty("background-color");return}if(o.includes("hr-collapse-item")||o.includes("hr-collapse hr-accordion")||o.includes("hr-accordion"))return;if(o.includes("sidebar-option-button")||e.closest(".sidebar-option-button")||e.closest("nav[class*='w-13']")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}if(e.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let m=e.getAttribute("style")||"";(m.includes("background-color")||m.includes("color"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("color"));return}let a=window.getComputedStyle(e).backgroundColor;if(!a||a==="rgba(0, 0, 0, 0)"||a==="transparent")return;let i=a.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let s=parseInt(i[1],10),l=parseInt(i[2],10),d=parseInt(i[3],10);if(!(s<bu&&l<mu&&d<hu))return;let b=e.getBoundingClientRect();if(b.width===0||b.height===0||b.width>800||b.height>200)return;e.style.setProperty("background-color",pr,"important");let h=e.className?.toString()||"<no class>";!Ml.has(h)&&h!=="<no class>"&&(Ml.add(h),c.debug(`Coerced dark bg to slate (${b.width.toFixed(0)}x${b.height.toFixed(0)}, rgb(${s},${l},${d})): "${h}"`))})},dr=()=>{let t="#4B8BF5",e=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(i=>{i.setAttribute("data-reos-recolored","1"),i.setAttribute("data-reos-recolored-v2","1"),i.setAttribute("data-reos-recolored-v3","1");let l=(i.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!l)return;let d;try{d=atob(l[1])}catch{return}let p=d,b=!1;if(e.forEach(_=>{p.includes(_)&&(p=p.split(_).join(t),b=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(_=>{p.includes(_)&&(p=p.split(_).join("transparent"),b=!0)}),i.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(x=>{p.includes(x)&&(p=p.split(x).join("#EDEEF0"),b=!0)}),!!b)try{let _=btoa(p);i.setAttribute("src",`data:image/svg+xml;base64,${_}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(i=>{let s=i.getAttribute("src")||"";if(!s||s.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(s))return;i.setAttribute("data-reos-masked","1");let l=`url("${s}")`;i.style.setProperty("-webkit-mask-image",l,"important"),i.style.setProperty("-webkit-mask-size","contain","important"),i.style.setProperty("-webkit-mask-repeat","no-repeat","important"),i.style.setProperty("-webkit-mask-position","center","important"),i.style.setProperty("mask-image",l,"important"),i.style.setProperty("mask-size","contain","important"),i.style.setProperty("mask-repeat","no-repeat","important"),i.style.setProperty("mask-position","center","important"),i.style.setProperty("background-color","var(--reos-blue)","important"),i.setAttribute("src",o)})},cr=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(e=>{[...e.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);e.classList.contains(r)||e.classList.add(r)}})})},Mu=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("background"))})},eo=()=>{let t=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},e=document.querySelector(".crm-opportunities-modal");e&&e.querySelectorAll(".hr-base-selection").forEach(a=>{t(a),a.querySelectorAll("div, span").forEach(s=>{if(s.id?.startsWith("ws-crm-"))return;let l=window.getComputedStyle(s).backgroundColor;l==="rgba(0, 0, 0, 0)"||l==="transparent"||!l||t(s)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{t(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let i="rgb(150, 162, 173)",s="rgb(0, 191, 124)",l=p=>{let b=r.querySelector(".ui-upload-icon svg");b&&(b.style.setProperty("color",p,"important"),b.style.setProperty("stroke",p,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(h=>{h.style.setProperty("stroke",p,"important")})},d=!1;try{d=r.matches(":hover")}catch{}l(d?s:i),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>l(s)),r.addEventListener("mouseleave",()=>l(i)))})},ya=new WeakSet,Ou=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(e=>{if(!ya.has(e))try{let o=e.contentDocument||e.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){ya.add(e);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),e.style.background="#FFFFFF",e.style.borderRadius="6px",ya.add(e)}catch{}})},Ul=()=>{let t,o=0,r=()=>{lt||(cr(),Zt(),Iu(),lr(),sr(),Au(),Ou(),Cu(),Su(),Tu(),Eu(),xu(),$u(),wu(),fu(),dr(),yu(),_u(),eo(),Qt(),Cl(),Ll(),Il(),ir(),Mu(),eo(),Al(),$l())},a=120,i=(b=!1)=>{if(lt)return;let h=b?a:800,m=Date.now()-o;if(m>=h){t!==void 0&&(window.clearTimeout(t),t=void 0),o=Date.now(),r();return}let _=h-m;t===void 0?t=window.setTimeout(()=>{t=void 0,o=Date.now(),r()},_):b&&(window.clearTimeout(t),t=window.setTimeout(()=>{t=void 0,o=Date.now(),r()},_))};cr(),Zt(),lr(),sr(),dr(),eo(),Qt(),Cl(),Ll(),Il(),ir(),Al(),$l(),window.setTimeout(()=>{cr(),Zt(),lr(),sr(),dr(),eo(),Qt(),ir()},500),window.setTimeout(()=>{cr(),Zt(),lr(),sr(),dr(),eo(),Qt(),ir()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{Qt(),Zt()});let s=!1,l=!1,d=b=>{for(let h of b)for(let m of Array.from(h.addedNodes)){if(m.nodeType!==1)continue;let _=m;if(_.childElementCount>=6||_.getElementsByTagName("*").length>=10)return!0}return!1};new MutationObserver(b=>{!l&&d(b)&&(l=!0),!s&&(s=!0,requestAnimationFrame(()=>{s=!1;let h=l;l=!1,i(h)}))}).observe(document.body,{childList:!0,subtree:!0})},fa,Du=()=>{let t=()=>{if(lt)return;let o=document.getElementById(to);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let i of Array.from(a.addedNodes)){if(!(i instanceof Element))continue;let s=i.tagName.toLowerCase();if(s==="style"||s==="link"){if(i.id===to||i.id===xa)continue;r=!0;break}}if(r)break}r&&fa===void 0&&(fa=window.setTimeout(()=>{fa=void 0,t()},150))}).observe(document.head,{childList:!0}),t()},wa=()=>{if(lt=!1,iu(),!document.getElementById(to)){let t=document.createElement("style");t.id=to,t.textContent=su,document.head.appendChild(t),c.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?Ul():window.addEventListener("DOMContentLoaded",Ul)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,Du())},Vl=()=>{lt=!0,document.getElementById(to)?.remove(),document.getElementById(xa)?.remove(),c.info("REInvest OS theme stylesheet unmounted (excluded location)")};var Wl="ws-crm-customizer-version-badge",br=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",br,{once:!0});return}if(document.getElementById(Wl))return;let t=document.createElement("div");t.id=Wl,t.style.cssText=`
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
  `,t.textContent=`Customizer v${io}`,t.title=`Built ${so}
Click to dismiss for this session`,t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)}),document.body.appendChild(t)};console.log("[ws-crm-customizer] bundle-loaded");var L=(t,e)=>{try{c.info(`[main] calling ${t}`),e(),c.info(`[main] ${t} OK`)}catch(o){c.error(`[main:FAIL] ${t} threw:`,o)}},jl=()=>{c.info(`Loaded v${io} (built ${so})`),vr()?c.info(`[main] excluded location ${re()} \u2014 skipping initial mounts, tracking nav only`):(L("mountVersionBadge (initial)",br),L("mountFavicon",ti),L("mountThemeStylesheet",wa),L("mountHideLaunchpad",pn),L("mountHideNavItems",bn),L("mountRelabelNav",mn),L("mountHideTopmenuTabs",un),L("mountContractsSection",hn)),L("initPageRouter",Sa),c.info("[main] registering onPageChange subscriber"),ne(e=>{if(c.info(`[main] onPageChange callback fired for page=${e}`),vr()){c.info(`[main] page change into excluded location ${re()} \u2014 tearing down theme`),L("unmountThemeStylesheet",Vl);return}L("mountThemeStylesheet",wa),L("mountVersionBadge",br),L("mountHideLaunchpad",pn),L("mountHideNavItems",bn),L("mountRelabelNav",mn),L("mountHideTopmenuTabs",un),L("mountContractsSection",hn),L("mountClaimReleaseToggle",qa),L("mountContactActionsBar",Za),L("mountActiveFollowUpButton",Oa),L("mountMtOfferMadeButton",ni),L("mountNotInterestedButton",ai),L("mountScheduleWalkthroughButton",ii),L("mountResendDealLinkButton",li),L("mountReducePriceButton",ci),L("mountEditLandingPageButton",pi),L("mountPublishButton",hi),L("mountContactMapLinks",fi),L("mountSendToClosingOfficeButton",Di),L("mountOppActionBar",Ji),L("mountClosingAgentPickerButton",Xs),L("mountPrepareContractButton",hl),L("mountComputeOfferButton",Sl),L("mountManageTeam",tl),L("mountBuyBoxWidget",Fa),L("mountSupportNavItem",ns),L("mountPhoneAssignmentsWidget",cs),L("mountBulkPowerDialer",Os),L("mountBulkPowerDialerContacts",Ps),L("mountCallingAsChip",Bs),L("mountDialerThemeFix",qs)}),c.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jl):jl();})();
//# sourceMappingURL=customizer.js.map
