/* Wholesaling CRM Customizer v0.66.1 — built 2026-07-13T20:26:49.940Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var Sr="[wholesaling-crm-customizer]",Lm="__WS_CRM_DEBUG",Am=()=>!!window[Lm],m={info(...e){console.log(Sr,...e)},warn(...e){console.warn(Sr,...e)},error(...e){console.error(Sr,...e)},debug(...e){Am()&&console.log(Sr,"[debug]",...e)}};var Mm=/\/v2\/location\/([A-Za-z0-9]+)/,Im=new Set(["8ntUQzMflUkR0YvrRgVk"]),Y=()=>{let e=window.location.pathname.match(Mm);return e?e[1]:null},aa=()=>{let e=Y();return e!==null&&Im.has(e)};var Fi=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,sa=/\/v2\/location\/([A-Za-z0-9]+)/,Pm=e=>{let t=e.match(Fi);if(!t)return null;let o=e.match(sa);return{contactId:t[1],locationId:o?o[1]:null,source:"url"}},Om=()=>{let e=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let t of e){let o=document.querySelector(t);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match(Fi);if(!a)continue;let s=r.match(sa)||window.location.pathname.match(sa);return{contactId:a[1],locationId:s?s[1]:null,source:"dom"}}return null},j=()=>{let e=Pm(window.location.pathname);return e||Om()};var Ni=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},Ar="",ia=null,bt="other",la=new Set,Lr=()=>{let e=j()?.contactId??null;if(!(!(window.location.pathname!==Ar)&&!(e!==ia))){Ar=window.location.pathname,ia=e,bt=Ni(),m.debug("Page/context changed:",bt,Ar,"contact:",e);for(let r of la)try{r(bt)}catch(a){m.error("Subscriber threw:",a)}}},ge=e=>(la.add(e),setTimeout(()=>e(bt),0),()=>{la.delete(e)}),zi=()=>{bt=Ni(),Ar=window.location.pathname,ia=j()?.contactId??null,m.debug("Router init, current page:",bt);let e=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(o,r,a){e(o,r,a),Lr()},history.replaceState=function(o,r,a){t(o,r,a),Lr()},window.addEventListener("popstate",Lr),setInterval(Lr,1e3)},Pt=()=>bt;var Bm=/\/opportunities\/([A-Za-z0-9]{16,24})(?:[/?]|$)/,Ui=null,qi=!1,ji=e=>{let t=e.match(Bm);t&&(Ui=t[1])},Wi=()=>{if(!qi){qi=!0;try{let e=window.fetch.bind(window);window.fetch=(o,r)=>{try{let a=typeof o=="string"?o:o instanceof URL?o.href:o.url;a&&ji(a)}catch{}return e(o,r)};let t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(o,r,...a){try{ji(typeof r=="string"?r:r.href)}catch{}return t.call(this,o,r,...a)},m.debug("[opp-id-capture] installed")}catch(e){m.warn("[opp-id-capture] install failed",e)}}},fe=()=>Ui;var Gi=/\/contacts\/search/,Yi=new Map,Ki=!1,Vi=(e,t)=>{if(!(typeof t!="string"||!t))try{let o=JSON.parse(t);if(!o?.locationId||o.page===void 0)return;Yi.set(o.locationId,{url:e,bodyRaw:t,capturedAt:Date.now()})}catch{}},Ji=e=>Yi.get(e)??null,Qi=()=>{if(!Ki){Ki=!0;try{let e=XMLHttpRequest.prototype,t=e.open,o=e.send;e.open=function(...r){try{let a=String(r[1]??"");Gi.test(a)&&(this.__wsSearchUrl=a)}catch{}return t.apply(this,r)},e.send=function(r){try{let a=this.__wsSearchUrl;a&&Vi(a,r)}catch{}return o.call(this,r)}}catch(e){m.warn("[search-capture] XHR tap install failed",e)}try{let e=window.fetch;window.fetch=function(...t){try{let o=typeof t[0]=="string"?t[0]:t[0]instanceof URL?t[0].href:t[0]?.url||"";Gi.test(o)&&Vi(o,t[1]?.body)}catch{}return e.apply(this,t)}}catch(e){m.warn("[search-capture] fetch tap install failed",e)}}};var Mr="0.66.1",Ir="2026-07-13T20:26:49.940Z";var Hm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",Pr=new Map,da=new Map,Rm=3e4,ut=4e3,Dm=ut,Oe=async(e,t)=>{if(!e)return null;let o=Pr.get(e);if(o){if(o.failedAt===void 0)return o.type;if(Date.now()-o.failedAt<Rm)return null}if(!t)return m.warn(`Cannot fetch Contact Type for ${e} \u2014 tenant_id missing from URL context`),null;let r=da.get(e);if(r)return r;let s=(async()=>{let i=new AbortController,l=setTimeout(()=>i.abort(),Dm);try{let d=`${Hm}?contact_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,c=await fetch(d,{method:"GET",headers:{Accept:"application/json"},signal:i.signal});if(!c.ok)return clearTimeout(l),m.warn(`Contact Type fetch returned ${c.status} for ${e}`),Pr.set(e,{type:null,failedAt:Date.now()}),null;let p=await c.json();clearTimeout(l);let b=(p.contact_type||"").toLowerCase().trim()||null;return Pr.set(e,{type:b}),m.debug(`Resolved Contact Type for ${e}: ${b??"(unset)"}`),b}catch(d){return clearTimeout(l),m.warn(`Contact Type fetch failed for ${e}:`,d),Pr.set(e,{type:null,failedAt:Date.now()}),null}})();da.set(e,s);try{return await s}finally{da.delete(e)}},Be=e=>e==="buyer"?"buyer":e==="seller"?"seller":e==="agent"||e==="closing_agent"||e==="closing_office"||e==="vendor"||e==="tenant"?"other":"seller";var I=(e,t={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let l=a.querySelector(e);if(l){s(l);return}let d,c,p=()=>{d!==void 0&&window.clearTimeout(d),c!==void 0&&window.clearInterval(c)};c=window.setInterval(()=>{let b=a.querySelector(e);b&&(p(),s(b))},r),d=window.setTimeout(()=>{p(),m.warn(`waitForElement timed out for selector: ${e}`),i(new Error(`Selector not found within ${o}ms: ${e}`))},o)})};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"};var y={sm:"4px",md:"6px",lg:"10px",pill:"999px"},u={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},ca={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},Zi=e=>{let t=e==="emerald"?n.emeraldGlow:e==="amber"?n.amberGlow:n.slate,o=e==="emerald"?n.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=e==="emerald"?n.emerald:e==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${o};
    border-radius: ${y.pill};
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
  `},ie=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
  border: none;
  border-radius: ${y.sm};
  font-family: ${u.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,D=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${y.sm};
  font-family: ${u.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var Xe="https://services.leadconnectorhq.com",Xi="__WS_CRM_CAPTURED_AUTH";var pa=()=>{try{let e=localStorage.getItem(Xi);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>3e6?(localStorage.removeItem(Xi),null):t:null}catch{return null}},Fm=()=>{let e=pa();if(!e)return null;let t={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(t["token-id"]=e.tokenId),t},He=async(e,t={})=>{let o=Fm();if(!o)return null;try{return await fetch(e,{...t,headers:{...o,...t.headers??{}}})}catch{return null}};var Nm=/^[A-Za-z0-9]{15,30}$/,ht=e=>typeof e=="string"&&Nm.test(e),ma=e=>{try{let t=e.split(".");if(t.length!==3)return null;let o=t[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},zm=()=>{let e=window.WS_CRM_USER_ID;return ht(e)?e:null},qm=()=>{let e=window,t=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let o of t)if(ht(o))return o;return null},jm=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=ma(t);if(!o)return null;let r=o.uid;if(ht(r))return r;let a=o.claims;if(a&&ht(a.user_id))return a.user_id}catch{}return null},Um=()=>{try{let e=pa();if(!e?.authorization)return null;let t=e.authorization.replace(/^Bearer\s+/i,""),o=ma(t);if(!o)return null;if(o.authClass==="User"&&ht(o.authClassId))return o.authClassId;if(ht(o.primaryAuthClassId))return o.primaryAuthClassId}catch{}return null},Wm=()=>{try{let e=["user","tokenUser","currentUser","ghl_user"];for(let t of e){let o=localStorage.getItem(t);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if(ht(a))return a}catch{}}}catch{}return null},P=()=>zm()||jm()||Um()||qm()||Wm()||null,Gm=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=ma(t);return o?o.claims??o:null}catch{return null}},Ot=()=>{let e=window.WS_CRM_FORCE_AGENCY;return typeof e=="boolean"?e:Gm()?.type==="agency"};var rl="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",Km=`${rl}/active-follow-up-get`,Vm=`${rl}/active-follow-up-set`,_t="ws-crm-active-follow-up-button",ua={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"SMS Drip Active",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"No Active SMS Drip",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},Ym=()=>{let e=j();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},Jm=async e=>{let t=await fetch(Km,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId}),credentials:"omit"});if(!t.ok)throw new Error(`Get webhook returned ${t.status} ${t.statusText}`);return await t.json()},Qm=async(e,t)=>{let o=await fetch(Vm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,triggered_by_user_id:t??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},yt=(e,t)=>{let o=ua[t];e.dataset.state=t,e.disabled=!o.clickable,e.style.cursor=o.clickable?"pointer":"default",e.style.background=o.bg,e.style.borderColor=o.border,e.style.color=o.color;let r=e.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=e.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},el=e=>{let t=document.createElement("button");return t.type="button",t.id=_t,t.dataset.contactId=e,t.style.cssText=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: ${n.slate};
    color: ${n.ash};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    font-family: ${u.sans};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    user-select: none;
    cursor: default;
    transition: background 0.15s ease, border-color 0.15s ease,
                color 0.15s ease, transform 0.1s ease;
    flex-shrink: 0;
  `,t.innerHTML=`
    <span class="ws-afu-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-afu-label">Active Follow Up\u2026</span>
  `,yt(t,"loading"),t.addEventListener("click",async()=>{if(t.dataset.state!=="amber")return;let r=Ym();if(!(!r||r.contactId!==e)){yt(t,"blue"),t.style.transform="scale(0.97)",setTimeout(()=>t.style.transform="",120);try{let a=await Qm(r,P()),s=a&&a.state&&a.state in ua?a.state:"blue";yt(t,s),m.info(`Active Follow Up set for ${e} \u2192 ${s}`)}catch(a){m.error("Active Follow Up Set webhook failed",a),yt(t,"error"),setTimeout(()=>void Br(t,r),4e3)}}}),t},Zm=3e4,Br=async(e,t)=>{e.dataset.lastRefreshAt=String(Date.now()),yt(e,"loading");try{let o=await Jm(t),r=o&&o.state&&o.state in ua?o.state:"gray",a=document.getElementById(_t);if(!a||a.dataset.contactId!==t.contactId)return;yt(a,r)}catch(o){m.warn("Active Follow Up Get webhook failed",o),delete e.dataset.lastRefreshAt,yt(e,"error")}},Xm=[".central-panel","[class*='central-panel']"],ba="ws-crm-contact-actions-bar",eb=async()=>{for(let e of Xm)try{let t=await I(e,{timeoutMs:3e3});if(t)return t}catch{}try{return(await I("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},tb=async(e,t)=>{let o=t.querySelector(`#${ba}`);if(!o)try{o=await I(`#${ba}`,{timeoutMs:ut+2e3,root:t})}catch{o=null}if(o){let s=t.querySelector("#ws-crm-afu-wrap");return s&&s.remove(),e.style.order="2",o.appendChild(e),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=t.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let s=t.querySelector(`#${ba}`);s&&s.parentElement===t?t.insertBefore(a,s.nextSibling):t.insertBefore(a,t.firstChild)}return a.appendChild(e),{container:a,placement:"fallback"}},ob=()=>{let e=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!e)return null;let t=e;for(let o=0;o<8&&!(!t||!t.parentElement);o++){let r=t.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let s=r.children[1];return s instanceof HTMLElement?s:r}t=r}return null},rb=(e,t)=>{e.style.marginRight="4px",t.insertBefore(e,t.firstChild)},nb=async e=>{if(e==="url"){let o=await eb();return o?{kind:"contact-detail",target:o}:null}let t=ob();return t?{kind:"conversations",target:t}:null},tl=async(e,t)=>{if(t.kind==="contact-detail"){let{placement:o}=await tb(e,t.target);return o}return rb(e,t.target),"conversations-header"},ab=async()=>{let e=j();if(!e||!e.locationId){document.getElementById(_t)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let t={contactId:e.contactId,tenantId:e.locationId},o=document.getElementById(_t);if(o&&o.dataset.contactId===t.contactId){let d=Number(o.dataset.lastRefreshAt||0);Date.now()-d>=Zm&&Br(o,t);return}o&&o.remove();let r=await nb(e.source);if(!r){m.warn(`Active Follow Up: no mount target on ${e.source}-source page`);return}let a=j();if(!a||a.contactId!==t.contactId)return;let s=el(t.contactId),i=await tl(s,r);m.debug(`Active Follow Up mounted (${r.kind}/${i}) for ${t.contactId}`),ol();let l=document.getElementById(_t)??s;Br(l,t),Or?.disconnect(),Or=new MutationObserver(()=>{let d=document.getElementById(_t);if(!(j()?.contactId===t.contactId)){Or?.disconnect();return}if(!d){let p=el(t.contactId);tl(p,r).then(()=>{ol(),Br(p,t)}),m.debug(`Active Follow Up re-mounted after wipe for ${t.contactId}`)}}),Or.observe(r.target,{childList:!0})},Or=null,To=null,nl=()=>{let e=j()?.contactId??null;if(To&&To.contactId===e)return;let t=ab().finally(()=>{To?.promise===t&&(To=null)});To={contactId:e,promise:t}},ol=()=>{let e=document.querySelectorAll(`#${_t}`);if(!(e.length<=1)){m.debug(`Active Follow Up: found ${e.length} duplicate buttons, keeping first, removing ${e.length-1}`);for(let t=1;t<e.length;t++)e[t].remove()}};var sb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/analytics/compute",ib="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/callstats/sweep-run",Hr="ws-crm-analytics-overlay",lb=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"this_week",label:"This week"},{key:"last_week",label:"Last week"},{key:"this_month",label:"This month"},{key:"last_month",label:"Last month"},{key:"last_365",label:"Last 365 days"},{key:"all_time",label:"All time"},{key:"custom",label:"Custom"}],db=[{key:"company",label:"Company"},{key:"acq",label:"Acquisitions"},{key:"dispo",label:"Disposition"},{key:"marketing",label:"Marketing"},{key:"tc",label:"Transactions"},{key:"velocity",label:"Velocity"}],F={open:!1,range:"this_month",customStart:"",customEnd:"",tab:"company",loading:!1,error:null,data:null,cache:new Map},ne=e=>{let t=Number(e)||0;return"$"+Math.round(t).toLocaleString("en-US")},q=e=>(Number(e)||0).toLocaleString("en-US"),_a=e=>{let t=Number(e);return!Number.isFinite(t)||t<=0?"\u2014":new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},So=e=>{let t=Math.round(Number(e)||0);if(t<60)return`${t}s`;let o=Math.floor(t/3600),r=Math.round(t%3600/60);return o>0?`${o}h ${r}m`:`${r}m`},cb=()=>`${F.range}|${F.customStart}|${F.customEnd}`,vt=async(e=!1)=>{let t=cb();if(!e&&F.cache.has(t)){F.data=F.cache.get(t),F.error=null,gt();return}let o=Y();if(!o){F.error="Could not resolve the sub-account id from the URL.",gt();return}F.loading=!0,F.error=null,gt();try{let r={tenant_id:o,range:F.range,tz_offset_minutes:new Date().getTimezoneOffset()};F.range==="custom"&&(r.start=F.customStart,r.end=F.customEnd);let a=await fetch(sb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await a.json();if(!s||s.ok===!1)throw new Error(s&&s.error||`HTTP ${a.status}`);F.data=s,F.cache.set(t,s)}catch(r){F.error=r instanceof Error?r.message:String(r)}finally{F.loading=!1,gt()}},R=(e,t,o)=>{let r=document.createElement(e);return r.style.cssText=t,o!==void 0&&(r.innerHTML=o),r},ce=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Ao=`background:${n.graphite};border:1px solid ${n.slate};border-radius:${y.lg};padding:16px 18px;min-width:0;`,va=`font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin:0 0 12px;`,_e=(e,t,o)=>{let r=R("div",Ao+"flex:1;min-width:150px;");return r.appendChild(R("div",va+"margin-bottom:8px;",ce(e))),r.appendChild(R("div",`font-family:${u.sans};font-size:24px;font-weight:600;color:${n.bone};line-height:1.1;`,ce(t))),o&&r.appendChild(R("div",`font-family:${u.sans};font-size:11px;color:${n.coolGray};margin-top:6px;`,ce(o))),r},ae=(e,t)=>{let o=R("div",Ao);if(o.appendChild(R("div",va,ce(e))),!t.length)return o.appendChild(R("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),o;let r=Math.max(...t.map(a=>a.barVal),1);for(let a of t.slice(0,12)){let s=R("div","margin:0 0 10px;"),i=R("div","display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;");i.appendChild(R("span",`font-size:12px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,ce(a.label)));let l=R("span",`font-size:12px;color:${n.bone};font-weight:600;white-space:nowrap;`,ce(a.primary)+(a.secondary?` <span style="color:${n.coolGray};font-weight:400;">${ce(a.secondary)}</span>`:""));i.appendChild(l),s.appendChild(i);let d=R("div",`height:6px;background:${n.slate};border-radius:3px;overflow:hidden;`);d.appendChild(R("div",`height:100%;width:${Math.max(2,Math.round(a.barVal/r*100))}%;background:${n.emerald};border-radius:3px;`)),s.appendChild(d),o.appendChild(s)}return t.length>12&&o.appendChild(R("div",`font-size:11px;color:${n.coolGray};`,`+${t.length-12} more`)),o},Rr=(e,t,o)=>{let r=R("div",Ao+"overflow-x:auto;");if(r.appendChild(R("div",va,ce(e))),!o.length)return r.appendChild(R("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),r;let a=`text-align:left;padding:6px 10px;font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,s=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`,i=`<table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr>${t.map(l=>`<th style="${a}">${ce(l)}</th>`).join("")}</tr></thead>
    <tbody>${o.map(l=>`<tr>${l.map(d=>`<td style="${s}">${ce(d)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;return r.appendChild(R("div","",i)),r},le=(e,t)=>{let o=R("div",`display:grid;grid-template-columns:${e};gap:14px;margin-bottom:14px;`);for(let r of t)o.appendChild(r);return o},Lo=e=>{let t=R("div","display:flex;flex-wrap:wrap;gap:14px;margin-bottom:14px;");for(let o of e)t.appendChild(o);return t},je=e=>(e||[]).map(t=>({label:t.label,primary:q(t.count),barVal:t.count})),pb=e=>(e||[]).map(t=>({label:t.label,primary:ne(t.sum),secondary:`\xB7 ${q(t.count)} deal${t.count===1?"":"s"}`,barVal:t.sum})),il=(e,t)=>{let o=e.calls||{};if(!o.available)return[R("div",`${Ao}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Call metrics unavailable.</strong> ${ce(o.note||"CallStats.Sweep runs every 30 minutes \u2014 check back shortly.")}`)];let r=t==="acq"?"Seller":"Buyer",a=o[t]||[],s=a.filter(c=>c.dials>0||c.connects>0||c.inbound>0).map(c=>({label:c.label,primary:`${q(c.dials)} dials`,secondary:`\xB7 ${q(c.connects)} connected \xB7 ${q(c.inbound)} inbound`,barVal:c.dials})),i=a.filter(c=>c.talk_seconds>0).map(c=>({label:c.label,primary:So(c.talk_seconds),secondary:c.talk_per_contract_seconds!=null?`\xB7 ${So(c.talk_per_contract_seconds)} per contract`:"",barVal:c.talk_seconds})),l=[ae(`${r} calls per rep (dials)`,s),ae(`${r} talk time per rep`,i)],d=(o.other||[]).filter(c=>c.dials>0||c.talk_seconds>0);return d.length&&l.push(ae("Unclassified calls per rep (contact is neither seller nor buyer)",d.map(c=>({label:c.label,primary:`${q(c.dials)} dials`,secondary:`\xB7 ${So(c.talk_seconds)} talk`,barVal:c.dials})))),l},mb=(e,t)=>{let o=e.company||{},r=o.left_to_close_this_month||{};t.appendChild(Lo([_e("Closed revenue \u2014 365d",ne(o.closed_revenue_365),`${q(o.closed_count_365)} closings`),_e("Avg deal size \u2014 365d",ne(o.avg_deal_size_365)),_e("Left to close this month",ne(r.sum),`${q(r.count)} deal(s)`+(r.missing_est_close?` \xB7 ${q(r.missing_est_close)} missing est. close date`:"")),_e("New leads",q(o.total_leads),"in selected range")])),t.appendChild(Lo([_e("Contracts",`${q((o.contracts||{}).count)}`,ne((o.contracts||{}).sum)+" projected"),_e("Assignments",`${q((o.assignments||{}).count)}`,ne((o.assignments||{}).sum)+" assigned"),_e("Deals closed",`${q((o.closed||{}).count)}`,ne((o.closed||{}).sum)+" closed")])),t.appendChild(le("1fr 1fr 1fr",[ae("New leads by source",je(o.new_leads_by_source)),ae("Contacts per closer (all time)",je(o.contacts_per_closer)),ae("Dispo deals per rep (all time)",je(o.dispo_deals_per_rep))]))},bb=(e,t)=>{let o=e.acq||{};t.appendChild(le("1fr 1fr",[ae("Offers made per rep",je(o.offers_per_rep)),ae("Contracts acquired per closer",(o.contracts_per_closer||[]).map(a=>({label:a.label,primary:q(a.count),secondary:`\xB7 ${ne(a.sum)} projected`,barVal:a.count})))])),t.appendChild(le("1fr 1fr",[ae("Projected revenue per closer (open escrows)",pb(o.projected_per_closer)),ae("Closed revenue per closer",(o.closed_per_closer||[]).map(a=>({label:a.label,primary:ne(a.sum),secondary:`\xB7 ${q(a.count)} closings \xB7 avg ${ne(a.avg)}`,barVal:a.sum})))]));let r=il(e,"acq");t.appendChild(r.length>=2?le("1fr 1fr",r.slice(0,2)):le("1fr",r)),r.length>2&&t.appendChild(le("1fr",r.slice(2)))},ub=(e,t)=>{let o=e.dispo||{};t.appendChild(le("1fr 1fr",[ae("Buyers qualified per dispo rep",je(o.buyers_qualified_per_rep)),ae("Assignments per dispo rep",(o.assignments_per_rep||[]).map(a=>({label:a.label,primary:q(a.count),secondary:`\xB7 ${ne(a.sum)} assigned`,barVal:a.count})))])),t.appendChild(le("1fr",[ae("Closed revenue per dispo rep",(o.closed_per_dispo||[]).map(a=>({label:a.label,primary:ne(a.sum),secondary:`\xB7 ${q(a.count)} closings \xB7 avg ${ne(a.avg)}`,barVal:a.sum})))]));let r=il(e,"dispo");t.appendChild(r.length>=2?le("1fr 1fr",r.slice(0,2)):le("1fr",r)),r.length>2&&t.appendChild(le("1fr",r.slice(2)))},hb=(e,t)=>{let o=e.marketing||{},r=o.lead_quality||{};t.appendChild(Lo([_e("Open leads",q(r.open)),_e("Won (under contract+)",q(r.won)),_e("Lost / dead",q(r.lost))]));let a=(o.per_channel||[]).map(i=>[i.label,q(i.leads),q(i.offers),q(i.contracts),`${q(i.assigned_count)} / ${ne(i.assigned_sum)}`,`${q(i.closed_count)} / ${ne(i.closed_sum)}`,ne(i.avg_deal)]);t.appendChild(le("1fr",[Rr("Per marketing channel",["Channel","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],a)]));let s=(o.per_city||[]).slice(0,15).map(i=>[i.label,q(i.leads),q(i.offers),q(i.contracts),`${q(i.assigned_count)} / ${ne(i.assigned_sum)}`,`${q(i.closed_count)} / ${ne(i.closed_sum)}`,ne(i.avg_deal)]);t.appendChild(le("1fr",[Rr("Per city (top 15 by leads)",["City","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],s)])),t.appendChild(le("1fr 1fr",[ae("Dead leads by channel",je(o.dead_by_channel)),ae("Dead leads by city",je(o.dead_by_city))]))},_b=(e,t)=>{let o=e.tc||{};t.appendChild(Lo([_e("Contracted",q(o.contracted),"in selected range"),_e("Closed",q(o.closed)),_e("Lost in escrow",q(o.lost_in_escrow)),_e("Fall-out rate",o.fallout_rate_pct==null?"\u2014":`${o.fallout_rate_pct}%`,"lost \xF7 (closed + lost)")])),t.appendChild(le("1fr 1fr",[ae("Deals per TC (contracted in range)",je(o.per_tc)),ae("Open escrows by stage",je(o.open_by_stage))]));let r=(o.board||[]).map(a=>[a.name,a.stage,a.owner,ne(a.value),_a(a.est_close),a.acq_closer,a.dispo_rep]);t.appendChild(le("1fr",[Rr("TC deal board (open escrows)",["Deal","Stage","TC","Value","Est. close","Closer","Dispo"],r)]))},yb=(e,t)=>{let o=e.velocity||{},r=o.offers_per_contract||{};t.appendChild(Lo([_e("Offers per contract",r.ratio==null?"\u2014":String(r.ratio),`${q(r.offers)} offers \xB7 ${q(r.contracts)} contracts`)]));let a=l=>(l||[]).map(d=>({label:d.label,primary:`${d.avg_days} days`,secondary:`\xB7 ${q(d.n)} deal${d.n===1?"":"s"}`,barVal:d.avg_days}));t.appendChild(le("1fr 1fr",[ae("Days lead \u2192 contract, by source",a(o.days_to_contract_by_source)),ae("Days contract \u2192 close, by source",a(o.days_contract_to_close_by_source))]));let s=(o.leads_per_contract_by_source||[]).map(l=>[l.label,q(l.leads),q(l.contracts),l.ratio==null?"\u2014":`${l.ratio} : 1`]);t.appendChild(le("1fr",[Rr("Leads per contract, by source",["Source","Leads","Contracts","Leads : contract"],s)]));let i=o.talk_time||{};if(i.available){let l=(i.per_rep||[]).filter(d=>d.talk_seconds>0).map(d=>({label:d.label,primary:d.talk_per_contract_seconds!=null?`${So(d.talk_per_contract_seconds)} / contract`:"\u2014",secondary:`\xB7 ${So(d.talk_seconds)} total \xB7 ${q(d.contracts)} contract${d.contracts===1?"":"s"}`,barVal:d.talk_per_contract_seconds!=null?d.talk_per_contract_seconds:0}));t.appendChild(le("1fr",[ae("Talk time per contract per rep",l)]))}else t.appendChild(R("div",`${Ao}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Talk time per contract per rep \u2014 pending first sweep.</strong> ${ce(i.note||"")}`))},Co=e=>`padding:5px 12px;border-radius:${y.pill};border:1px solid ${e?n.emeraldBorder:n.steel};background:${e?n.emeraldGlow:"transparent"};color:${e?n.emerald:n.ash};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;`,gt=()=>{let e=document.getElementById(Hr);if(!e)return;let t=e.querySelector("[data-ws-analytics-body]"),o=e.querySelector("[data-ws-analytics-controls]");if(!t||!o)return;o.innerHTML="";let r=R("div","display:flex;flex-wrap:wrap;gap:6px;align-items:center;");for(let h of lb){let _=R("button",Co(F.range===h.key),ce(h.label));_.onclick=()=>{F.range=h.key,h.key!=="custom"?vt():gt()},r.appendChild(_)}if(F.range==="custom"){let h=`background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;padding:4px 8px;color-scheme:dark;`,_=R("input",h);_.type="date",_.value=F.customStart;let g=R("input",h);g.type="date",g.value=F.customEnd;let T=R("button",Co(!0),"Apply");T.onclick=()=>{F.customStart=_.value,F.customEnd=g.value,F.customStart&&F.customEnd&&vt()},r.appendChild(_),r.appendChild(g),r.appendChild(T)}let a=R("button",Co(!1)+"margin-left:auto;","\u21BB Refresh");a.onclick=()=>void vt(!0),r.appendChild(a),o.appendChild(r);let s=R("div","display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;");for(let h of db){let _=R("button",Co(F.tab===h.key),ce(h.label));_.onclick=()=>{F.tab=h.key,gt()},s.appendChild(_)}if(o.appendChild(s),t.innerHTML="",F.loading){t.appendChild(R("div",`padding:60px;text-align:center;color:${n.ash};font-family:${u.sans};font-size:13px;`,"Computing analytics\u2026"));return}if(F.error){let h=R("div",`padding:40px;text-align:center;color:${n.crimson};font-family:${u.sans};font-size:13px;`,`Couldn't load analytics: ${ce(F.error)}`),_=R("button",Co(!0)+"margin:14px auto 0;display:inline-block;","Retry");_.onclick=()=>void vt(!0);let g=R("div","text-align:center;");g.appendChild(h),g.appendChild(_),t.appendChild(g);return}let i=F.data;if(!i){vt();return}let l=i.range||{},d=Number((i.calls||{}).last_swept)||0,c=d>0?` \xB7 calls as of ${new Date(d).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})} (syncing)`:"";t.appendChild(R("div",`font-family:${u.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.coolGray};margin:0 0 12px;`,`${ce(l.label||"")} \xB7 ${_a(l.start)} \u2192 ${_a(l.end)} \xB7 ${q((i.meta||{}).opps)} opps \xB7 ${q((i.meta||{}).contacts)} contacts${c}`));let p=i.insights||[];if(p.length){let h=R("div","display:flex;flex-direction:column;gap:6px;margin:0 0 16px;");for(let _ of p.slice(0,6)){let g=_.level==="warn";h.appendChild(R("div",`padding:8px 12px;border-left:3px solid ${g?n.amber:n.blue};background:${g?n.amberGlow:n.blueGlow};border-radius:0 ${y.sm} ${y.sm} 0;font-family:${u.sans};font-size:12px;color:${n.bone};`,ce(_.text)))}t.appendChild(h)}let b=R("div","");F.tab==="company"?mb(i,b):F.tab==="acq"?bb(i,b):F.tab==="dispo"?ub(i,b):F.tab==="marketing"?hb(i,b):F.tab==="tc"?_b(i,b):yb(i,b),t.appendChild(b)},ft=null,vb=()=>{let e=Y();if(e){try{fetch(ib,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"sync",tenant_id:e})}).catch(()=>{})}catch{}ft&&window.clearTimeout(ft),ft=window.setTimeout(()=>{ft=null,F.open&&(F.cache.clear(),vt(!0))},9e4)}},ya=()=>{if(document.getElementById(Hr))return;F.open=!0,vb();let e=R("div",`position:fixed;inset:0;z-index:100000;background:${n.obsidian};display:flex;flex-direction:column;font-family:${u.sans};`);e.id=Hr;let t=R("div",`padding:18px 24px 14px;border-bottom:1px solid ${n.slate};flex-shrink:0;`),o=R("div","display:flex;align-items:center;gap:12px;margin-bottom:12px;");o.appendChild(R("div",`font-family:${u.mono};font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${n.bone};`,`Analytics <span style="color:${n.emerald};">\xB7</span> <span style="color:${n.ash};">REInvest OS</span>`));let r=R("button",`margin-left:auto;background:transparent;border:1px solid ${n.steel};border-radius:${y.sm};color:${n.ash};font-size:14px;line-height:1;padding:6px 10px;cursor:pointer;`,"\u2715");r.onclick=dl,o.appendChild(r),t.appendChild(o),t.appendChild(R("div","","")).setAttribute("data-ws-analytics-controls","1"),e.appendChild(t);let a=R("div","flex:1;overflow-y:auto;padding:20px 24px 40px;");a.setAttribute("data-ws-analytics-body","1"),e.appendChild(a),document.body.appendChild(e),document.addEventListener("keydown",ll),gt(),F.data||vt()},ll=e=>{e.key==="Escape"&&dl()},dl=()=>{F.open=!1,ft&&(window.clearTimeout(ft),ft=null),document.getElementById(Hr)?.remove(),document.removeEventListener("keydown",ll)},gb=["/kpis","ws-kpis","ws-analytics"],fb=/\/custom-menu-link\//,ha=!1,al=()=>{if(ha||!fb.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return gb.some(i=>s.includes(i))});if(r){ha=!0,m.info(`[analytics] custom-menu-link route detected (src=${r.src}) \u2014 opening overlay`);try{history.back()}catch{}setTimeout(()=>{ya(),ha=!1},50);return}e<10&&setTimeout(t,150)};t()},sl=!1,cl=()=>{if(sl)return;sl=!0,ge(()=>setTimeout(al,50)),al();let e=()=>{let t=window.location.hash.replace("#","");(t==="ws-analytics"||t==="ws-kpis")&&ya()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_ANALYTICS=()=>ya(),m.info("[analytics] mounted (menu-link route + hash + window trigger)")};var bl="ws-buybox-nav-icon",xa="ws-buybox-panel",pl="ws-buybox-modal",xb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",wa="https://mcclivetim.github.io/reinvest-os-cdn/geo",Dr=null,Mo=null,Io=null,fa=async()=>{if(Dr)return Dr;try{let e=await fetch(`${wa}/states.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return Dr=await e.json(),Dr}catch(e){return m.error("[buy-box] failed to fetch states.json",e),[]}},wb=async e=>{if(!Mo)try{let t=await fetch(`${wa}/counties.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Mo=await t.json()}catch(t){return m.error("[buy-box] failed to fetch counties.json",t),[]}return Mo?.[e]??[]},kb=async e=>{if(!Io)try{let t=await fetch(`${wa}/cities.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Io=await t.json()}catch(t){return m.error("[buy-box] failed to fetch cities.json",t),[]}return Io?.[e]??[]},ka=async e=>await(await fetch(xb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),Eb=(e,t)=>ka({tenant_id:e,action:"list",buyer_contact_id:t}),$b=(e,t,o,r)=>ka({tenant_id:e,action:"add",buyer_contact_id:t,geo_level:o,geo_value:r}),Tb=(e,t)=>ka({tenant_id:e,action:"remove",entry_id:t}),X=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Cb=(e,t)=>{let o=t.find(r=>r.code===e);return o?`${o.name} (${e})`:e},Sb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',Lb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',Ab="nav.w-13, nav[class*='w-13']",Mb=".flex-1.h-full.relative.overflow-hidden.rounded-lg",Ib=async()=>{try{return await I(Ab,{timeoutMs:2500})}catch{return null}},Pb=async()=>{try{return await I(Mb,{timeoutMs:2500})}catch{return null}},Ob=e=>e.querySelector("div[class*='bg-contacts-panel']")??null,Bb=(e,t)=>{let o=document.createElement("div");return o.id=xa,o.dataset.buyerContactId=t,o.style.cssText=`
    width: 100%; height: 100%;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
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
        border-radius: ${y.sm}; padding: 7px 14px; cursor: pointer;
        font-family: ${u.sans}; font-size: 13px; font-weight: 600;
      ">+ Add Area</button>
    </div>
    <div id="ws-buybox-body" style="
      flex: 1; overflow-y: auto; padding: 14px 16px;
      font-size: 13px; color: ${n.bone};
    ">
      <div style="color: ${n.ash}; font-style: italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{Fb(e,t,()=>Ea(e,t))}),o},Ea=async(e,t)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([Eb(e,t),fa()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${X(r.error||"Failed to load buy-box entries")}</div>`;return}Hb(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,e,t)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${X(r.message)}</div>`}},Hb=(e,t,o,r,a)=>{if(t.state.length+t.county.length+t.city.length+t.zip.length===0){e.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let l=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(d=>t[d.key].length>0).map(d=>{let c=t[d.key].map(p=>{let b=d.key==="state"?Cb(p.geo_value,o):p.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${X(b)}</span>
              <button type="button" data-entry-id="${X(p.id)}" data-entry-label="${X(b)}" class="ws-buybox-remove" aria-label="Remove ${X(b)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${y.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${Lb}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${u.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${X(d.label)} (${t[d.key].length})</div>
          ${c}
        </div>
      `}).join("");e.innerHTML=l,e.querySelectorAll(".ws-buybox-remove").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.color=n.crimson}),d.addEventListener("mouseleave",()=>{d.style.color=n.ash}),d.addEventListener("click",()=>{let c=d.dataset.entryId||"",p=d.dataset.entryLabel||"this area";confirm(`Remove "${p}" from this buyer's buy-box?`)&&(d.disabled=!0,Tb(r,c).then(b=>{if(!b.ok){alert(`Failed to remove: ${b.error||"unknown error"}`),d.disabled=!1;return}Ea(r,a)}).catch(b=>{alert(`Network error: ${b.message}`),d.disabled=!1}))})})},Fr=!1,ul=(e,t)=>{Fr=t;let o=Ob(e.panelArea);console.log(`[buy-box] setActive(${t}) \u2014 nativePanel=${!!o} panel=${!!e.panel} iconBtn=${!!e.iconBtn}`),t?(e.iconBtn.className=Rb,e.iconBtn.dataset.active="true",o&&(e.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),e.panel.style.display="flex",Ea(e.tenantId,e.buyerContactId)):(e.iconBtn.className=hl,delete e.iconBtn.dataset.active,e.panel.style.display="none",o&&(o.style.display=e.nativePanelOriginalDisplay||""))},hl="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",Rb="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",Db=e=>{let t=document.createElement("button");return t.id=bl,t.type="button",t.title="Buy-Box",t.setAttribute("aria-label","Buy-Box"),t.className=hl,t.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${Sb.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,t.addEventListener("click",o=>{o.stopPropagation();let r=e();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!Fr;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),ul(r,a)}),t},Fb=(e,t,o)=>{let r=document.getElementById(pl);r&&r.remove();let a=document.createElement("div");a.id=pl,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(480px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",f=>{f.target===a&&a.remove()});let i={step:1,granularity:null,stateCode:null,value:null},l=async()=>{if(i.step===1)s.innerHTML=d(),c();else if(i.step===2){s.innerHTML=p();let f=await fa();s.innerHTML=b(f),h(f)}else if(i.step===3)if(i.granularity==="zip")s.innerHTML=v(),E();else if(i.granularity==="state"){let f=await fa();s.innerHTML=g(f),T(f)}else i.granularity==="county"?(s.innerHTML=_(i.stateCode||""),await wb(i.stateCode||""),s.innerHTML=x("County"),C()):i.granularity==="city"&&(s.innerHTML=_(i.stateCode||""),await kb(i.stateCode||""),s.innerHTML=x("City"),C())},d=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(f=>`
        <button type="button" data-granularity="${f}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${y.md};
          padding: 20px 16px; cursor: pointer; font-family: ${u.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${f.charAt(0).toUpperCase()+f.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,c=()=>{s.querySelectorAll(".ws-buybox-tile").forEach(f=>{f.addEventListener("mouseenter",()=>{f.style.borderColor=n.emerald,f.style.background=n.emeraldGlow}),f.addEventListener("mouseleave",()=>{f.style.borderColor=n.steel,f.style.background=n.steel}),f.addEventListener("click",()=>{let $=f.dataset.granularity;i.granularity=$,i.step=$==="zip"?3:2,l()})}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},p=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,b=f=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${X(i.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.sm};
      font-family: ${u.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${y.sm};">
      ${f.map($=>`
        <div data-state-code="${X($.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${X($.name)} <span style="color: ${n.ash}; font-family: ${u.mono}; font-size: 11px;">(${X($.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,h=f=>{let $=s.querySelector("#ws-buybox-state-search"),S=s.querySelectorAll(".ws-buybox-state-row");S.forEach(L=>{L.addEventListener("mouseenter",()=>{L.style.background=n.emeraldGlow}),L.addEventListener("mouseleave",()=>{L.style.background="transparent"}),L.addEventListener("click",()=>{i.stateCode=L.dataset.stateCode||"",i.step=3,l()})}),$?.addEventListener("input",()=>{let L=($.value||"").toLowerCase().trim();f.forEach((z,N)=>{let H=S[N];if(!H)return;let O=!L||z.name.toLowerCase().includes(L)||z.code.toLowerCase()===L;H.style.display=O?"":"none"})}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>$?.focus(),0)},_=f=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${X(f)}\u2026</div>
  `,g=f=>{let $=f.find(S=>S.code===i.stateCode);return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${X($?$.name:i.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${$?X($.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add ${$?X($.name):"State"}</button>
        </div>
      </div>
    `},T=f=>{s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>k(i.stateCode||""))},x=f=>{let $=i.granularity==="county"?Mo?.[i.stateCode||""]??[]:Io?.[i.stateCode||""]??[];return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${X(f)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${$.length.toLocaleString()} ${X(f).toLowerCase()}s in ${X(i.stateCode||"")}.</div>
      <input id="ws-buybox-value-search" type="text" placeholder="Start typing\u2026" autofocus style="
        width: 100%; box-sizing: border-box; padding: 8px 12px;
        background: ${n.obsidian}; color: ${n.bone};
        border: 1px solid ${n.steel}; border-radius: ${y.sm};
        font-family: ${u.sans}; font-size: 13px; margin-bottom: 10px;
      ">
      <div id="ws-buybox-value-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${y.sm};"></div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-top: 8px;"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 12px;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
      </div>
    `},C=()=>{let f=i.granularity==="county"?Mo?.[i.stateCode||""]??[]:Io?.[i.stateCode||""]??[],$=s.querySelector("#ws-buybox-value-search"),S=s.querySelector("#ws-buybox-value-list");if(!$||!S)return;let L=z=>{let N=z.toLowerCase().trim();if(!N){S.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let H=f.filter(O=>O.toLowerCase().includes(N)).slice(0,50);if(H.length===0){S.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${X(i.stateCode||"")}.</div>`;return}S.innerHTML=H.map(O=>`
        <div data-value="${X(O)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${X(O)}
        </div>
      `).join(""),S.querySelectorAll(".ws-buybox-value-row").forEach(O=>{O.addEventListener("mouseenter",()=>{O.style.background=n.emeraldGlow}),O.addEventListener("mouseleave",()=>{O.style.background="transparent"}),O.addEventListener("click",()=>{i.value=O.dataset.value||"",k(i.value)})})};$.addEventListener("input",()=>L($.value)),L(""),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>$.focus(),0)},v=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Enter Zip</div>
    <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">5-digit US zip code. Zips don't need a state (most are unique to one state anyway).</div>
    <input id="ws-buybox-zip" type="text" inputmode="numeric" placeholder="33101" autofocus maxlength="5" style="
      width: 100%; box-sizing: border-box; padding: 12px 14px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.sm};
      font-family: ${u.mono}; font-size: 18px; text-align: center; letter-spacing: 0.12em;
      margin-bottom: 10px;
    ">
    <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: space-between;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
      <div style="display: flex; gap: 8px;">
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
        <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add Zip</button>
      </div>
    </div>
  `,E=()=>{let f=s.querySelector("#ws-buybox-zip"),$=s.querySelector("#ws-buybox-err");f&&(f.addEventListener("input",()=>{f.value=f.value.replace(/\D/g,"").slice(0,5),$&&($.textContent="")}),f.addEventListener("keydown",S=>{S.key==="Enter"&&(S.preventDefault(),w())}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void w()),setTimeout(()=>f.focus(),0))},w=async()=>{let f=s.querySelector("#ws-buybox-zip"),$=s.querySelector("#ws-buybox-err"),S=(f?.value||"").trim();if(!/^\d{5}$/.test(S)){$&&($.textContent="Zip must be exactly 5 digits.");return}await k(S)},k=async f=>{if(!i.granularity||!f)return;let $=s.querySelector("#ws-buybox-err"),S=s.querySelector("#ws-buybox-save");S&&(S.disabled=!0,S.textContent="Adding\u2026"),$&&($.textContent="");try{let L=await $b(e,t,i.granularity,f);if(!L.ok){$&&($.textContent=L.error||"Failed to add entry."),S&&(S.disabled=!1,S.textContent="Add");return}o(),s.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${X(f)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${L.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{i.step=1,i.granularity=null,i.stateCode=null,i.value=null,l()},900)}catch(L){$&&($.textContent=`Network error: ${L.message}`),S&&(S.disabled=!1,S.textContent="Add")}};l()},ga=!1,Bt=null,Po=null,ml=()=>{document.getElementById(bl)?.remove(),document.getElementById(xa)?.remove(),Po&&Bt&&Bt.nav.removeEventListener("click",Po,!0),Po=null,Bt=null,Fr=!1},_l=()=>{Nb()},Nb=async()=>{if(!ga){ga=!0;try{let e=j();if(!e){ml();return}let t=document.getElementById(xa);if(t&&t.dataset.buyerContactId===e.contactId&&Bt)return;ml();let o=null;try{o=await Oe(e.contactId,e.locationId)}catch(b){m.warn("[buy-box] Contact Type fetch failed",b);return}if(Be(o)!=="buyer")return;if(!e.locationId){m.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,s]=await Promise.all([Ib(),Pb()]);if(!a||!s){m.warn("[buy-box] right-rail nav or panel area not found");return}let i=j();if(!i||i.contactId!==e.contactId)return;let l=Bb(e.locationId,e.contactId),d=Db(()=>Bt),c={buyerContactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l,nativePanelOriginalDisplay:""};Bt=c;let p=a.querySelector(".flex.flex-col.items-center.gap-2");p?p.appendChild(d):a.appendChild(d),s.appendChild(l),Po=b=>{let h=b.target;if(!h||c.iconBtn.contains(h))return;h.closest("button.sidebar-option-button")&&Fr&&ul(c,!1)},a.addEventListener("click",Po,!0),m.info(`[buy-box] right-rail mount complete for buyer ${e.contactId}`)}finally{ga=!1}}};var ee=".crm-opportunities-modal .ui-modal-heading .description",yl=new Map,$a=null,Ta,zb=()=>{let e=new Map;for(let[t,{selector:o,cb:r}]of yl){let a=e.get(o);if(a===void 0&&(a=!!document.querySelector(o),e.set(o,a)),!!a)try{r()}catch(s){m.error(`[arrival-watcher] callback "${t}" threw`,s)}}},Q=(e,t,o)=>{yl.set(e,{selector:t,cb:o}),!$a&&($a=new MutationObserver(()=>{Ta===void 0&&(Ta=window.setTimeout(()=>{Ta=void 0,zb()},300))}),$a.observe(document.body,{childList:!0,subtree:!0}))};var vl="ws-crm-dispo-action-row",Z=e=>{let t=document.getElementById(vl);if(t)return t;e.classList.contains("description")&&(e.style.display="flex",e.style.alignItems="center",e.style.gap="12px",e.style.flexWrap="wrap");let o=document.createElement("span");return o.id=vl,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",e.appendChild(o),o};var qb=e=>{let t=(o,r,a)=>o.style.setProperty(r,a,"important");e.querySelectorAll("input, textarea, select").forEach(o=>{if(o instanceof HTMLInputElement&&o.type==="checkbox")return;t(o,"background-color",n.obsidian),t(o,"color",n.bone),t(o,"-webkit-text-fill-color",n.bone),t(o,"border-color",n.steel);let r=o.previousElementSibling;r instanceof HTMLElement&&r.tagName==="DIV"&&(t(r,"color",n.bone),t(r,"-webkit-text-fill-color",n.bone))}),e.querySelectorAll("div").forEach(o=>{t(o,"background-color","transparent"),t(o,"border-style","none")})},Ht=(e,t=8e3)=>{let o=null,r=()=>{o?.disconnect(),qb(e),o?.observe(e,{attributes:!0,attributeFilter:["style"],subtree:!0})};o=new MutationObserver(r),r(),window.setTimeout(()=>{o?.disconnect(),o=null},t)};var jb=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],Ub=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,Wb=".hr-card.hr-modal.crm-opportunities-modal",U=()=>{let e=document.querySelector(Wb);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(Ub);if(a){let s=a[1];if(jb.includes(s))return s}}return null},te=async(e=2500)=>{let t=Date.now();for(;Date.now()-t<e;){let o=U();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var Gb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",zt="ws-crm-change-primary-wrap",Ft="ws-change-primary-modal",Kb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Vb=/\/v2\/location\/([A-Za-z0-9]+)/,Nt=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Yb=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Rt=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;`,Dt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,xt=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Jb=async e=>{let t=await fetch(Gb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok)throw new Error(`Webhook returned ${t.status} ${t.statusText}`);let o=await t.json();return Array.isArray(o)?o[0]:o},La=e=>{document.getElementById(Ft)?.remove();let t=document.createElement("div");t.id=Ft,t.style.cssText=`
    position: fixed; inset: 0; z-index: 1000000;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 94vw); max-height: 90vh; overflow-y: auto;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.lg}; padding: 28px 32px; color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.fixedNewPrimary||null,a=e.addrLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Nt(e.addrLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>',s=r?`<div style="font-size: 14px; margin-bottom: 14px;">New primary contact: <strong>${Nt(r.name||"this contact")}</strong></div>`:`
    <button id="ws-cp-promote" type="button" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:12px;cursor:pointer;color:${n.bone};font-family:${u.sans};">
      <span style="font-size:14px;font-weight:500;display:block;">Promote the existing Second Seller</span>
      <span style="font-size:11px;color:${n.ash};display:block;margin-top:3px;">They're already on this property \u2014 make them the primary contact.</span>
    </button>
    <div style="display:flex;align-items:center;gap:10px;margin: 4px 0 12px;">
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
      <span style="font-size:11px;color:${n.ash};">or add a new person</span>
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Dt("First Name *")}<input id="ws-cp-first" type="text" autocomplete="off" placeholder="Jordan" style="${Rt}"></div>
      <div>${Dt("Last Name")}<input id="ws-cp-last" type="text" autocomplete="off" placeholder="Seller" style="${Rt}"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Dt("Phone")}<input id="ws-cp-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${Rt}"></div>
      <div>${Dt("Email")}<input id="ws-cp-email" type="email" autocomplete="off" placeholder="name@email.com" style="${Rt}"></div>
    </div>`;o.innerHTML=`
    <style id="ws-cp-style">
      #${Ft} input::placeholder, #${Ft} textarea::placeholder {
        color: ${n.ash} !important; -webkit-text-fill-color: ${n.ash} !important; opacity: 1 !important;
      }
      #${Ft} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Change Primary Contact</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Moves the deal to the new decision-maker: the opp, seller roles, deal state, claim, and dial lists all follow. The current primary's conversation history stays on their record.</div>
    ${a}
    ${s}
    <div style="margin-bottom: 12px;">
      ${Dt("Current primary stays\u2026")}
      <select id="ws-cp-old" style="${Rt} cursor: pointer;">
        <option value="seller_2" selected>On the deal as Second Seller (still a signer)</option>
        <option value="detach">Not on title \u2014 detach from the property roles</option>
      </select>
    </div>
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-cp-stop" type="checkbox" checked>
      <span>Stop calling/texting the current primary <span style="color:${n.ash};">(drips end, off dial lists)</span></span>
    </label>
    <div style="margin-bottom: 14px;">
      ${Dt("Note (optional)")}
      <textarea id="ws-cp-note" rows="2" autocomplete="off" placeholder="e.g. Son handles the sale \u2014 mom is on the deed" style="${Rt} resize: vertical;"></textarea>
    </div>
    <div id="ws-cp-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-cp-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-cp-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">${r?"Make Primary":"Change Primary"}</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Ht(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-cp-cancel")?.addEventListener("click",()=>t.remove()),window.setTimeout(()=>o.querySelector("#ws-cp-first")?.focus(),0);let i=o.querySelector("#ws-cp-err"),l=c=>{i&&(i.textContent=c)},d=async(c,p)=>{l("");let b=p?.textContent||"";p&&(p.disabled=!0,p.textContent="Working\u2026",p.style.opacity="0.7");try{let h=await Jb({tenant_id:e.tenantId,acq_opp_id:e.acqOppId||void 0,property_record_id:e.propertyRecordId||void 0,new_primary:c,old_disposition:o.querySelector("#ws-cp-old")?.value||"seller_2",stop_old_outreach:o.querySelector("#ws-cp-stop")?.checked??!0,note:(o.querySelector("#ws-cp-note")?.value||"").trim(),triggered_by_user_id:P()||""});if(!h?.ok){l(h?.error||"Something went wrong \u2014 try again."),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1");return}m.info(`Primary contact changed -> ${h.new_primary_contact_id}`),Qb(o,h,e),e.onSuccess?.(h)}catch(h){m.error("Change primary failed",h),l(`Network error: ${h instanceof Error?h.message:"request failed"}`),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1")}};o.querySelector("#ws-cp-promote")?.addEventListener("click",c=>{d({promote_seller_2:!0},c.currentTarget)}),o.querySelector("#ws-cp-submit")?.addEventListener("click",c=>{let p=c.currentTarget;if(r){d({contact_id:r.contactId},p);return}let b=(o.querySelector("#ws-cp-first")?.value||"").trim(),h=(o.querySelector("#ws-cp-last")?.value||"").trim(),_=(o.querySelector("#ws-cp-phone")?.value||"").trim(),g=(o.querySelector("#ws-cp-email")?.value||"").trim().toLowerCase();if(!b){l("First name is required (or use Promote above).");return}let T="";if(_){let x=_.replace(/\D/g,"");if(x.length===11&&x.startsWith("1")&&(x=x.slice(1)),x.length!==10){l("Phone must be a 10-digit US number.");return}T=`+1${x}`}if(g&&!/.+@.+\..+/.test(g)){l("That email doesn't look valid.");return}if(!T&&!g){l("Add a phone or an email for the new primary.");return}d({first_name:b,last_name:h,phone:T,email:g},p)})},Qb=(e,t,o)=>{let r=[];t.already_primary?r.push(xt("Already the primary contact","info")):(r.push(xt(t.contact_created?"Contact created":"Existing contact reused",t.contact_created?"good":"info")),r.push(xt(`Deal moved (${(t.opps_moved||[]).map(i=>i.pipeline).join(", ")||"ACQ"})`,"good")),t.old_role==="seller_2"?r.push(xt("Old primary kept as Second Seller","info")):t.old_role==="detached"&&r.push(xt("Old primary detached from roles","info")),(t.call_status_applied||"").startsWith("copied:")&&r.push(xt(`Inherited: ${Nt((t.call_status_applied||"").slice(7))}`,"good")),r.push(xt(t.outreach_stopped?"Old primary's outreach stopped":"Old primary still in rotation",t.outreach_stopped?"good":"warn")));let a=(t.warnings||[]).map(i=>`<div style="font-size:11px;color:${n.amber};margin-top:4px;">\xB7 ${Nt(i)}</div>`).join(""),s=t.new_primary_contact_id?`${window.location.origin}/v2/location/${encodeURIComponent(o.tenantId)}/contacts/detail/${encodeURIComponent(t.new_primary_contact_id)}`:"";e.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Primary Contact Changed</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Nt(t.new_primary_name||"New primary")} now owns this deal</div>
    <div style="line-height: 1;">${r.join("")}</div>
    ${a}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      ${s?`<a href="${Nt(s)}" style="display:inline-flex;align-items:center;background: transparent; color: ${n.emeraldBright}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; text-decoration:none;">Open new primary</a>`:""}
      <button id="ws-cp-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-cp-done")?.addEventListener("click",()=>{document.getElementById(Ft)?.remove()})},Nr=()=>{let e=window.location.pathname,t=e.match(Kb),o=t?t[1]:fe();if(!o)return null;let r=e.match(Vb);return{oppId:o,locationId:r?r[1]:null}},Zb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Xb=async()=>{for(let e of Zb)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},zr=!1,Ca=async()=>{if(!zr){zr=!0;try{await eu()}finally{zr=!1}}},eu=async()=>{let e=Nr();if(!e||!e.locationId){document.getElementById(zt)?.remove(),Bo();return}let t=document.getElementById(zt);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Acquisitions"&&(t.remove(),Bo());return}t&&t.remove();let o=await Xb();if(!o)return;let r=await te();if(r!=="Acquisitions"){m.debug(`[change-primary] gated off \u2014 pipeline="${r}" (expected Acquisitions)`);return}let a=Nr();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=zt,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:4;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=D,i.title="Seller says someone else handles the sale? Hand the deal to that person \u2014 opp, seller roles, deal state, and dial lists all follow",i.innerHTML=`${Yb(n.amber)}<span>Change Primary Contact</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=Nr();!l||!l.locationId||La({tenantId:l.locationId,acqOppId:l.oppId})}),s.appendChild(i),Z(o).appendChild(s),m.debug(`Mounted Change Primary Contact button on opp ${e.oppId}`),tu(e.oppId)},Oo=null,Sa=null,Bo=()=>{Oo?.disconnect(),Oo=null,Sa=null},tu=e=>{if(Oo&&Sa===e)return;Bo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Sa=e,Oo=new MutationObserver(()=>{let o=Nr();if(!o||o.oppId!==e){Bo();return}let r=U();if(r!==null&&r!=="Acquisitions"){document.getElementById(zt)?.remove(),Bo();return}document.getElementById(zt)||Ca()}),Oo.observe(t,{childList:!0,subtree:!0}))},gl=()=>{Q("change-primary-contact",ee,()=>{!document.getElementById(zt)&&!zr&&Ca()}),Ca()};var wl="ws-properties-nav-icon",Oa="ws-properties-panel",fl="ws-properties-modal",Ba="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property",ou=`${Ba}/list-for-contact`,ru=`${Ba}/create-with-opp`,nu=`${Ba}/add-contact`,au="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",su=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],pe=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),iu=(e,t)=>`/v2/location/${e}/objects/property/list?recordId=${t}`,kl=e=>{if(e==null||e==="")return null;let t=Number(String(e).replace(/[^0-9.\-]/g,""));return Number.isFinite(t)&&t!==0?t:null},qr=e=>{let t=kl(e);if(t===null)return"&mdash;";let o=Math.abs(t);return o>=1e6?`$${(t/1e6).toFixed(t%1e6?1:0)}M`:o>=1e3?`$${Math.round(t/1e3)}k`:`$${Math.round(t)}`},Aa=e=>{let t=kl(e);return t===null?"&mdash;":t.toLocaleString()},El={easy:"Paint & Flooring",minor_rehab:"Kitchen & Bath",full_cosmetic:"Full Cosmetic",major_repairs:"Roof & Systems"},lu=e=>{let t=(e||"").toString().trim();return t?pe(El[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase())):"&mdash;"},du=e=>{let t=(e||"").toString().trim();return t?El[t]||t:""},cu={single_family_residence_sfr:"Single Family Residence (SFR)",multifamily_24_units:"Multi-Family 2-4 Units",multifamily_5_units:"Multi-Family 5+ Units",land:"Land",commercial:"Commercial",mobile_home:"Mobile Home"},pu=e=>{let t=(e||"").toString().trim();return t?cu[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase()):""},et=(e,t,o)=>`<div style="min-width:0;"><div style="font-size:9px;color:${n.ash};text-transform:uppercase;letter-spacing:.4px;">${e}</div><div title="${pe(o||"")}" style="font-size:12px;color:${n.bone};font-weight:500;line-height:1.25;word-break:break-word;">${t}</div></div>`,mu=e=>`
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid ${n.steel};">
    ${et("Beds",Aa(e.beds))}
    ${et("Baths",Aa(e.baths))}
    ${et("Sq Ft",Aa(e.sqft))}
    ${et("Rehab",lu(e.rehab_level),du(e.rehab_level))}
    ${et("ARV",qr(e.arv))}
    ${et("IMV",qr(e.imv))}
    ${et("MAO",qr(e.mao))}
    ${et("Ask",qr(e.asking_price))}
  </div>`,Ia=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000001; padding: 10px 18px; border-radius: ${y.sm};
    background: ${t==="ok"?n.emerald:n.crimson}; color: ${n.bone};
    font-family: ${u.sans}; font-size: 13px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4e3)},bu='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',uu='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>',hu="nav.w-13, nav[class*='w-13']",_u=".flex-1.h-full.relative.overflow-hidden.rounded-lg",$l="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",yu="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",vu=async()=>{try{return await I(hu,{timeoutMs:2500})}catch{return null}},gu=async()=>{try{return await I(_u,{timeoutMs:2500})}catch{return null}},jr=async(e,t)=>await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"})).json(),Re=`width:100%;box-sizing:border-box;padding:8px 10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:13px;outline:none;margin-bottom:10px;`,De=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,Ha=`background:${n.emerald};color:${n.bone};border:none;border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${u.sans};font-size:13px;font-weight:600;`,Tl=`background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 16px;cursor:pointer;font-family:${u.sans};font-size:13px;`,fu=(e,t)=>{let o=document.createElement("div");return o.id=Oa,o.dataset.contactId=t,o.style.cssText=`
    position: fixed; z-index: 9998; display: none;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.lg}; flex-direction: column; overflow: hidden;
    color: ${n.bone}; font-family: ${u.sans};
    box-shadow: 0 12px 40px rgba(0,0,0,0.55);
  `,o.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px 16px;border-bottom:1px solid ${n.steel};">
      <div>
        <div style="font-size:16px;font-weight:500;color:${n.bone};">Properties</div>
        <div style="font-size:11px;color:${n.ash};margin-top:2px;">Properties this seller owns</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button id="ws-prop-add" type="button" style="${Ha}">+ Add Property</button>
        <button id="ws-prop-close" type="button" title="Close" aria-label="Close" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;flex:0 0 auto;">&times;</button>
      </div>
    </div>
    <div id="ws-prop-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:13px;color:${n.bone};">
      <div style="color:${n.ash};font-style:italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-prop-add")?.addEventListener("click",()=>{wu(e,t,()=>Ur(e,t))}),o},Ur=async(e,t)=>{let o=document.querySelector("#ws-prop-body");if(o)try{let r=await jr(ou,{tenant_id:e,contact_id:t});if(!r.ok){o.innerHTML=`<div style="color:${n.crimson};">${pe(r.error||"Failed to load properties")}</div>`;return}xu(o,r.properties||[],e,t)}catch(r){o.innerHTML=`<div style="color:${n.crimson};">Network error: ${pe(r.message)}</div>`}},xu=(e,t,o,r)=>{if(!t.length){e.innerHTML=`<div style="text-align:center;padding:32px 0;color:${n.ash};">No properties yet.<br><span style="font-size:12px;">Click "+ Add Property" to create one (a deal is created automatically).</span></div>`;return}e.innerHTML=t.map(a=>{let s=/lost|abandon/i.test(a.deal_stage||""),i=s?n.crimson:n.emeraldBright,l=s?n.steel:n.emeraldBorder,d=a.has_acq_opp?`<span title="Deal stage" style="font-size:10px;color:${i};border:1px solid ${l};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">${pe(a.deal_stage||"Deal")}</span>`:`<span title="No ACQ deal yet" style="font-size:10px;color:${n.amber};border:1px solid ${n.steel};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">No deal</span>`,c=(a.roles||[]).map(p=>p==="seller_1"?"Seller 1":p==="seller_2"?"Seller 2":p==="tenant_contact"?"Tenant":p).join(", ");return`
      <div style="border:1px solid ${n.steel};border-radius:${y.md};padding:10px 12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div class="ws-prop-open" data-prop="${pe(a.property_record_id)}" title="Open property record" style="font-size:13px;font-weight:500;color:${n.bone};cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-width:0;">
            <span style="text-decoration:underline;text-decoration-color:${n.steel};text-underline-offset:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pe(a.address)}</span>
            <span style="color:${n.emeraldBright};font-size:12px;line-height:1;flex:0 0 auto;">&#8599;</span>
          </div>
          ${d}
        </div>
        <div style="font-size:11px;color:${n.ash};margin-top:3px;">${pe(c||"")}${a.property_type?" &middot; "+pe(pu(a.property_type)):""}</div>
        ${mu(a)}
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="ws-prop-addperson" data-prop="${pe(a.property_record_id)}" data-addr="${pe(a.address)}" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${u.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">${uu} Add person</button>
          ${(a.roles||[]).includes("seller_2")&&a.has_acq_opp&&a.opp_id?`<button type="button" class="ws-prop-makeprimary" data-prop="${pe(a.property_record_id)}" data-addr="${pe(a.address)}" data-opp="${pe(a.opp_id)}" title="This contact is the Second Seller \u2014 make them the PRIMARY contact for this deal" style="background:transparent;border:1px solid ${n.emeraldBorder};color:${n.emeraldBright};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${u.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">Make primary</button>`:""}
        </div>
      </div>
    `}).join(""),e.querySelectorAll(".ws-prop-addperson").forEach(a=>{a.addEventListener("click",()=>{ku(o,a.dataset.prop||"",a.dataset.addr||"this property",()=>Ur(o,r))})}),e.querySelectorAll(".ws-prop-makeprimary").forEach(a=>{a.addEventListener("click",()=>{La({tenantId:o,acqOppId:a.dataset.opp||void 0,propertyRecordId:a.dataset.prop||void 0,addrLabel:a.dataset.addr||void 0,fixedNewPrimary:{contactId:r,name:"this contact"},onSuccess:()=>Ur(o,r)})})}),e.querySelectorAll(".ws-prop-open").forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.prop||"";s&&window.open(iu(o,s),"_blank","noopener")}),a.addEventListener("mouseenter",()=>{a.style.color=n.emeraldBright}),a.addEventListener("mouseleave",()=>{a.style.color=n.bone})})},Cl=()=>{document.getElementById(fl)?.remove();let e=document.createElement("div");e.id=fl,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let t=document.createElement("div");return t.style.cssText=`width:min(440px,92vw);background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`,e.appendChild(t),document.body.appendChild(e),e.addEventListener("click",o=>{o.target===e&&e.remove()}),{overlay:e,card:t}},wu=(e,t,o)=>{let{overlay:r,card:a}=Cl();a.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add Property</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Creates the property linked to this seller and its own ACQ deal.</div>
    <label style="${De}">Street address</label>
    <input id="wp-address" type="text" style="${Re}" placeholder="123 Main St" />
    <div style="display:flex;gap:10px;">
      <div style="flex:2;"><label style="${De}">City</label><input id="wp-city" type="text" style="${Re}" /></div>
      <div style="flex:1;"><label style="${De}">State</label><input id="wp-state" type="text" maxlength="2" style="${Re}" placeholder="NC" /></div>
      <div style="flex:1;"><label style="${De}">Zip</label><input id="wp-zip" type="text" maxlength="10" style="${Re}" /></div>
    </div>
    <label style="${De}">Property type (optional)</label>
    <select id="wp-type" style="${Re}">
      <option value="">\u2014 select \u2014</option>
      ${su.map(i=>`<option value="${pe(i)}">${pe(i)}</option>`).join("")}
    </select>
    <div id="wp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wp-cancel" type="button" style="${Tl}">Cancel</button>
      <button id="wp-save" type="button" style="${Ha}">Create property + deal</button>
    </div>
  `;let s=a.querySelector("#wp-err");a.querySelector("#wp-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#wp-save")?.addEventListener("click",async()=>{let i=_=>(a.querySelector(_)?.value||"").trim(),l=i("#wp-address"),d=i("#wp-city"),c=i("#wp-state"),p=i("#wp-zip"),b=(a.querySelector("#wp-type")?.value||"").trim();if(!l&&!d&&!p){s&&(s.textContent="Enter at least a street address.");return}let h=a.querySelector("#wp-save");h&&(h.disabled=!0,h.textContent="Creating\u2026"),s&&(s.textContent="");try{let _=await jr(ru,{tenant_id:e,contact_id:t,address:l,city:d,state:c,zip:p,property_type:b||void 0});if(!_.ok){s&&(s.textContent=_.error||"Failed to create property."),h&&(h.disabled=!1,h.textContent="Create property + deal");return}r.remove(),Ia("Property + deal created \u2713"),o()}catch(_){s&&(s.textContent=`Network error: ${_.message}`),h&&(h.disabled=!1,h.textContent="Create property + deal")}}),setTimeout(()=>a.querySelector("#wp-address")?.focus(),0)},ku=(e,t,o,r)=>{let{overlay:a,card:s}=Cl();s.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add person</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Attach a person to ${pe(o)}.</div>
    <label style="${De}">Role</label>
    <select id="wpp-role" style="${Re}">
      <option value="seller_2">Second seller</option>
      <option value="tenant_contact">Tenant</option>
    </select>
    <div style="display:flex;gap:10px;">
      <div style="flex:1;"><label style="${De}">First name</label><input id="wpp-first" type="text" style="${Re}" /></div>
      <div style="flex:1;"><label style="${De}">Last name</label><input id="wpp-last" type="text" style="${Re}" /></div>
    </div>
    <label style="${De}">Phone (optional)</label>
    <input id="wpp-phone" type="text" style="${Re}" placeholder="+1..." />
    <label style="${De}">Email (optional)</label>
    <input id="wpp-email" type="text" style="${Re}" />
    <div id="wpp-primary-block">
      <label style="display:flex;align-items:center;gap:8px;margin:2px 0 8px;cursor:pointer;font-size:13px;color:${n.bone};">
        <input id="wpp-makeprimary" type="checkbox" style="accent-color:${n.emerald};width:15px;height:15px;cursor:pointer;" />
        <span>\u2026and make them the <strong>primary contact</strong> for the deal</span>
      </label>
      <label id="wpp-stop-row" style="display:none;align-items:center;gap:8px;margin:0 0 8px 23px;cursor:pointer;font-size:12px;color:${n.bone};">
        <input id="wpp-stopold" type="checkbox" checked style="accent-color:${n.emerald};width:14px;height:14px;cursor:pointer;" />
        <span>Stop calling/texting the current primary <span style="color:${n.ash};">(drips end, off dial lists; they stay a signer)</span></span>
      </label>
    </div>
    <div id="wpp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wpp-cancel" type="button" style="${Tl}">Cancel</button>
      <button id="wpp-save" type="button" style="${Ha}">Add person</button>
    </div>
  `;let i=s.querySelector("#wpp-err");s.querySelector("#wpp-cancel")?.addEventListener("click",()=>a.remove());let l=s.querySelector("#wpp-role"),d=s.querySelector("#wpp-primary-block"),c=s.querySelector("#wpp-makeprimary"),p=s.querySelector("#wpp-stop-row"),b=()=>{let h=(l?.value||"seller_2")==="seller_2";d&&(d.style.display=h?"":"none"),!h&&c&&(c.checked=!1),p&&(p.style.display=c?.checked?"flex":"none")};l?.addEventListener("change",b),c?.addEventListener("change",b),b(),s.querySelector("#wpp-save")?.addEventListener("click",async()=>{let h=s.querySelector("#wpp-role")?.value||"seller_2",_=w=>(s.querySelector(w)?.value||"").trim(),g=_("#wpp-first"),T=_("#wpp-last"),x=_("#wpp-phone"),C=_("#wpp-email"),v=h==="seller_2"&&(c?.checked??!1);if(!g&&!T){i&&(i.textContent="Enter at least a first or last name.");return}if(v&&!g){i&&(i.textContent="First name is required to make them the primary.");return}if(v&&!x&&!C){i&&(i.textContent="A phone or email is required to make them the primary.");return}let E=s.querySelector("#wpp-save");E&&(E.disabled=!0,E.textContent=v?"Handing off\u2026":"Adding\u2026"),i&&(i.textContent="");try{if(v){let k=await jr(au,{tenant_id:e,property_record_id:t,new_primary:{first_name:g,last_name:T,phone:x||void 0,email:C||void 0},old_disposition:"seller_2",stop_old_outreach:s.querySelector("#wpp-stopold")?.checked??!0,triggered_by_user_id:P()||""});if(!k.ok){i&&(i.textContent=k.error||"Failed to change the primary."),E&&(E.disabled=!1,E.textContent="Add person");return}a.remove();let f=Array.isArray(k.warnings)&&k.warnings.length?` \u2014 ${k.warnings[0]}`:"";Ia(`Now the primary contact \u2713${f}`),r();return}let w=await jr(nu,{tenant_id:e,property_record_id:t,role:h,new_contact:{firstName:g,lastName:T,phone:x||void 0,email:C||void 0}});if(!w.ok){i&&(i.textContent=w.error||"Failed to add person."),E&&(E.disabled=!1,E.textContent="Add person");return}a.remove(),Ia("Person added \u2713"),r()}catch(w){i&&(i.textContent=`Network error: ${w.message}`),E&&(E.disabled=!1,E.textContent="Add person")}}),setTimeout(()=>s.querySelector("#wpp-first")?.focus(),0)},Wr=!1,ve=null,Ma=!1,Ho=null,Eu=(e,t,o)=>{let r=t.getBoundingClientRect(),a=null;try{a=o?o.getBoundingClientRect():null}catch{a=null}let s=!!(a&&a.height>40&&a.width>=280&&a.width<=520&&a.left>=r.left-560),i=s&&a?Math.round(a.width):400,l=Math.round(s&&a?a.top:r.top),d=Math.round(s&&a?a.height:r.height),c=6;e.style.top=`${l}px`,e.style.height=`${d}px`,e.style.width=`${i}px`,e.style.left=`${Math.round(r.left-i-c)}px`,e.style.right="auto",e.style.bottom="auto"},$u=()=>{try{let e=new URL(window.location.href);e.searchParams.get("view")!=="activities"&&(e.searchParams.set("view","activities"),history.replaceState(history.state,"",e.toString()))}catch{}},Pa=(e,t)=>{Wr=t,t?(e.iconBtn.className=yu,e.iconBtn.dataset.active="true",$u(),Eu(e.panel,e.nav,e.panelArea),e.panel.style.display="flex",Ur(e.tenantId,e.contactId)):(e.iconBtn.className=$l,delete e.iconBtn.dataset.active,e.panel.style.display="none")},Tu=()=>{let e=document.createElement("button");return e.id=wl,e.type="button",e.title="Properties",e.setAttribute("aria-label","Properties"),e.className=$l,e.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;line-height:0;pointer-events:none;">${bu.replace("<svg ",'<svg style="pointer-events:none;" ')}</span>`,e.addEventListener("click",t=>{t.stopPropagation(),ve&&Pa(ve,!Wr)}),e},xl=()=>{document.getElementById(wl)?.remove(),document.getElementById(Oa)?.remove(),Ho&&ve&&ve.nav.removeEventListener("click",Ho,!0),Ho=null,ve=null,Wr=!1},Sl=()=>{Cu()},Cu=async()=>{if(!Ma){Ma=!0;try{let e=j();if(!e||!e.locationId){xl();return}let t=document.getElementById(Oa);if(t&&t.dataset.contactId===e.contactId&&ve)return;xl();let o=null;try{o=await Oe(e.contactId,e.locationId)}catch(p){m.warn("[properties] Contact Type fetch failed",p);return}if(Be(o)!=="seller")return;let[a,s]=await Promise.all([vu(),gu()]);if(!a||!s){m.warn("[properties] right-rail nav or panel area not found");return}let i=j();if(!i||i.contactId!==e.contactId)return;let l=fu(e.locationId,e.contactId),d=Tu();ve={contactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l},(a.querySelector(".flex.flex-col.items-center.gap-2")||a).appendChild(d),document.body.appendChild(l),l.querySelector("#ws-prop-close")?.addEventListener("click",()=>{ve&&Pa(ve,!1)}),Ho=p=>{let b=p.target;!b||ve&&ve.iconBtn.contains(b)||b.closest("button.sidebar-option-button")&&Wr&&ve&&Pa(ve,!1)},a.addEventListener("click",Ho,!0),m.info(`[properties] right-rail mount complete for seller ${e.contactId}`)}finally{Ma=!1}}};var Ll="ws-non-seller-contact",Al=()=>{Su()},Su=async()=>{let e=j();if(!e||!e.contactId||!e.locationId){document.documentElement.classList.remove(Ll);return}let t="seller";try{t=Be(await Oe(e.contactId,e.locationId))}catch(o){m.warn("[seller-flag] contact-type resolve failed",o)}document.documentElement.classList.toggle(Ll,t!=="seller")};var tt="ws-crm-claim-release-pill",Lu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",Au="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",Mu=async e=>{let t=await fetch(Lu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Get returned ${t.status} ${t.statusText}`);return await t.json()},Iu=async e=>{let t=await fetch(Au,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId,action:e.action}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Set returned ${t.status} ${t.statusText}`);return await t.json()},Pl=e=>{let t=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},jt=(e,t)=>{let o=t==="claim"?"emerald":"amber",r=t==="claim"?n.emerald:n.amber;e.dataset.mode=t,e.style.cssText=Zi(o),e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `},Pu=({contactId:e,mode:t})=>{let o=document.createElement("button");return o.id=tt,o.type="button",o.dataset.contactId=e,jt(o,t),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=j();if(!a||!a.locationId||a.contactId!==e)return;let s=P();if(!s){m.warn("Claim/Release click: no user ID detected (login session not exposing it)");let l=o.querySelector(".ws-cr-label");l&&(l.textContent="Sign-in needed"),setTimeout(()=>jt(o,r),2500);return}m.info(`Claim/Release click \u2014 contact=${e} mode=${r} user=${s}`);let i=r==="claim"?"release":"claim";jt(o,i),o.disabled=!0,o.style.opacity="0.8";try{let l=await Iu({contactId:e,locationId:a.locationId,userId:s,action:r}),d=l?.mode==="claim"||l?.mode==="release"?l.mode:i;jt(o,d),m.info(`Claim/Release done \u2192 new mode: ${d}`)}catch(l){m.error("Claim/Release Set webhook failed",l),jt(o,r);let d=o.querySelector(".ws-cr-label");if(d){let c=d.textContent??"";d.textContent="Try again",setTimeout(()=>{d.textContent==="Try again"&&(d.textContent=c)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},Ml=async e=>{try{let t=await Mu({contactId:e.contactId,locationId:e.locationId,userId:P()}),o=document.getElementById(tt);if(!o||o.dataset.contactId!==e.contactId)return;let r=t?.mode==="release"?"release":"claim";jt(o,r)}catch(t){m.warn("Claim/Release Get failed; pill stays in default 'claim' mode",t)}},Ou=async(e,t=1e4)=>{let o=Date.now();for(;Date.now()-o<t;){let r=Pl(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},Il=(e,t)=>{let o=Pu({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${tt}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),e.appendChild(r)},qt=null,Bu=async()=>{let e=j();if(!e){qt?.disconnect(),qt=null,document.getElementById(tt)?.remove();return}let t=document.getElementById(tt);if(!(t&&t.dataset.contactId===e.contactId)){t&&t.remove();try{let o=await I("#record-details-lhs",{timeoutMs:1e4}),r=await Ou(o),a=j();if(!a||a.contactId!==e.contactId)return;if(!r){m.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}Il(r,e.contactId),m.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`),document.getElementById(tt)&&e.locationId&&Ml({contactId:e.contactId,locationId:e.locationId}),qt?.disconnect(),qt=new MutationObserver(async()=>{if(!(j()?.contactId===e.contactId)){qt?.disconnect();return}if(document.getElementById(tt))return;let l=Pl(o);l&&(Il(l,e.contactId),document.getElementById(tt)&&e.locationId&&Ml({contactId:e.contactId,locationId:e.locationId}),m.debug("Re-mounted Claim/Release pill after React wipe"))}),qt.observe(o,{childList:!0,subtree:!0})}catch(o){m.warn("Could not mount Claim/Release pill:",o)}}},Ol=()=>{Bu()};var Bl="powerDialerApp",Hu=".dialer",Ru='button[aria-label="Voice Calling"], button[title="Voice Calling"]',Du=".dial-item.dial-btn.dial-btn-enabled",ot=e=>{for(let t of["pointerdown","mousedown","pointerup","mouseup","click"])try{e.dispatchEvent(new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window}))}catch{}},Fu=e=>{let t=(e||"").match(/\+\d{10,15}/);return t?t[0]:null},Ra=()=>{try{let t=window[Bl]?._context?.provides?.emitter;if(t&&typeof t.emit=="function")return t}catch(e){m.debug("[dialer-bridge] getEmitter failed",e)}return null},rt=()=>document.querySelector(Hu),Gr=()=>Ra()!==null||rt()!==null?!0:!!window[Bl],Da=(e,t)=>{let o=Ra();if(!o)return m.warn(`[dialer-bridge] no emitter; cannot emit ${e}`),!1;try{return o.emit(e,t),!0}catch(r){return m.error(`[dialer-bridge] emit ${e} threw`,r),!1}},Fa=()=>{if(rt())return;let e=document.querySelector(Ru);e?ot(e):m.warn("[dialer-bridge] Voice Calling button not found")},Nu=()=>{let e=document.querySelector(".number-list-container")||rt();if(!e)return[];let t=[];for(let o of e.querySelectorAll(".number")){let r=(o.innerText||"").replace(/\s+/g," ").trim();!r||/closest to the contact/i.test(r)||t.push({label:r,el:o})}return t},Na=()=>{let e=document.querySelector(".number-config, .dialer-config");return e?Fu(e.innerText):null},Hl=(e,t)=>{if(Na()===e)return!0;let o=Ra();if(o)try{return o.emit("selectNumber",{phoneNumber:e,friendlyName:t||e}),!0}catch(r){m.warn("[dialer-bridge] selectNumber emit failed",r)}if(t){let r=document.querySelector(".number-config, .dialer-config");r&&ot(r);let a=Nu(),s=a.find(i=>i.label===t)||a.find(i=>i.label.includes(t));if(s)return ot(s.el),!0}return m.warn(`[dialer-bridge] could not select Calling From ${e} (${t||""})`),!1},Rl=e=>{let t=e.replace(/[^\d*#+]/g,"");if(Da("sendDigitToDial",{value:t,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of t){let a=o.find(s=>s.querySelector(".dial-number")?.textContent?.trim()===r);a&&ot(a)}},Dl=()=>{let e=rt();if(!e)return m.warn("[dialer-bridge] no dialer present to place call"),!1;let t=e.querySelector(Du)||[...e.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let s=+a[1],i=+a[2],l=+a[3];return i>120&&i>s+40&&i>l+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return t?(ot(t),!0):Da("makeCall",{provider:"twilio"})};var za=()=>{let e=document.getElementById("end-call-button");if(e)return ot(e),!0;let t=rt();if(t){let o=[...t.querySelectorAll("button")].find(a=>{let s=(a.textContent||"").replace(/\s+/g," ").trim();return/^.{0,4}end call.{0,4}$/i.test(s)&&s.length<24});if(o)return ot(o),!0;let r=[...t.querySelectorAll("button, .dial-item")].find(a=>{let i=getComputedStyle(a).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return!1;let l=+i[1],d=+i[2],c=+i[3];return l>150&&l>d+60&&l>c+60&&a.offsetWidth>=32&&a.querySelector("svg")!==null});if(r)return ot(r),!0}return m.warn("[dialer-bridge] endCall: no hang-up control (#end-call-button absent, no End Call button)"),!1},Fl=()=>{Da("closeCallBox")},Nl=e=>{let t=!1,o=()=>{let s=rt()?.innerText||"",i=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(s)&&!/Call Summary|Call Ended/.test(s),l=/Call Summary|Call Ended/.test(s);if(i&&(t=!0),t&&l){t=!1;try{e()}catch(d){m.error("[dialer-bridge] onCallEnded cb threw",d)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var zl={201:[40.84,-74.05],202:[38.9,-77.04],203:[41.29,-73.12],204:[51.2,-98.73],205:[33.43,-86.89],206:[47.56,-122.35],207:[44,-69.99],208:[44.42,-115.56],209:[37.6,-121],210:[29.42,-98.49],212:[40.71,-74.01],213:[34.05,-118.24],214:[32.86,-96.84],215:[40.05,-75],216:[41.47,-81.62],217:[39.92,-88.9],218:[46.3,-94.06],219:[41.57,-87.26],220:[39.75,-82.66],223:[40.15,-76.58],224:[42.15,-87.95],225:[30.45,-91.15],226:[43.23,-81.23],227:[39.05,-77.12],228:[30.39,-88.85],229:[31.21,-83.72],231:[43.02,-85.18],234:[41.06,-81.31],235:[37.15,-93.91],236:[50.43,-121.52],239:[26.46,-81.8],240:[39.05,-77.12],248:[42.54,-83.26],249:[46.04,-80],250:[50.84,-121.84],251:[30.72,-88.06],252:[35.42,-77.43],253:[47.23,-122.37],254:[31.2,-97.58],256:[34.42,-86.64],260:[41.13,-85.13],262:[42.99,-88.04],267:[40.05,-75],269:[42.27,-85.45],270:[37.44,-87.01],272:[41.24,-76.1],274:[43.95,-88.28],276:[37.55,-77.46],279:[38.54,-121.4],281:[29.71,-95.3],283:[39.35,-84.5],289:[43.57,-79.33],301:[39.05,-77.12],302:[39.53,-75.61],303:[39.78,-105],304:[39.36,-81.16],305:[25.74,-80.36],306:[51.4,-105.69],307:[42.4,-105.56],308:[40.92,-99.4],309:[40.93,-89.86],310:[33.9,-118.35],312:[41.88,-88.2],313:[42.31,-83.2],314:[38.65,-90.32],315:[43.25,-75.86],316:[37.69,-97.34],317:[39.87,-86.07],318:[32.28,-92.94],319:[41.92,-91.78],320:[45.56,-94.16],321:[28.38,-81.15],323:[33.99,-118.21],325:[31.96,-100.09],326:[39.85,-84.12],329:[41.47,-74.06],330:[41.06,-81.31],331:[41.88,-88.09],332:[40.71,-74.01],334:[32.19,-85.86],336:[35.99,-79.86],337:[30.24,-92.5],339:[42.39,-71.1],341:[37.43,-121.81],343:[44.96,-76.09],346:[29.71,-95.3],347:[40.69,-73.96],350:[37.6,-121],351:[42.6,-71.23],352:[28.37,-81.78],353:[43.04,-89.56],360:[47.41,-122.57],361:[28.04,-97.42],363:[40.7,-73.6],364:[37.44,-87.01],365:[43.58,-79.35],369:[38.51,-122.53],380:[40.01,-83.01],385:[40.65,-111.88],386:[29.17,-81.11],401:[41.77,-71.42],402:[41.24,-96.88],403:[51.21,-113.59],404:[33.73,-84.37],405:[35.5,-97.41],406:[46.41,-111.57],407:[28.39,-81.31],408:[37.27,-121.88],409:[29.66,-94.44],410:[39.25,-76.59],412:[40.4,-79.92],413:[42.2,-72.71],414:[42.95,-87.95],415:[37.93,-122.52],416:[43.46,-79.7],417:[37.15,-93.91],418:[47.22,-71.38],419:[41.13,-83.21],423:[35.84,-83.68],424:[33.9,-118.35],425:[47.73,-121.86],431:[51.2,-98.73],432:[32.03,-102.02],434:[37.34,-79.02],435:[39.27,-112.69],437:[43.7,-79.42],438:[45.55,-73.88],440:[41.48,-81.7],442:[33.67,-116.76],443:[39.25,-76.59],445:[40.05,-75],447:[39.92,-88.9],448:[30.42,-86.61],450:[45.79,-73.22],458:[43.77,-123.19],463:[39.87,-86.07],464:[41.71,-87.73],469:[32.87,-96.83],472:[34.76,-78.45],475:[41.29,-73.12],478:[32.73,-83.62],479:[35.85,-93.99],480:[33.43,-111.79],484:[40.25,-75.46],501:[34.77,-92.42],502:[38.23,-85.32],503:[45.35,-122.8],504:[29.94,-90.09],505:[35.55,-107.15],506:[46.57,-66.06],507:[44.05,-92.94],508:[42.01,-71.22],509:[46.77,-118.73],510:[37.43,-121.81],512:[30.36,-97.77],513:[39.35,-84.5],514:[46.13,-73.36],515:[41.84,-93.75],516:[40.7,-73.6],517:[42.49,-84.14],518:[42.82,-73.83],519:[43.21,-81.14],520:[32.12,-110.98],530:[39.34,-121.57],531:[41.24,-96.88],539:[36.18,-95.78],540:[37.83,-79.5],541:[43.77,-123.19],551:[40.84,-74.05],557:[38.65,-90.32],559:[36.51,-119.54],561:[26.56,-80.14],562:[33.9,-118.08],563:[41.76,-90.6],564:[47.41,-122.57],567:[41.13,-83.21],570:[41.24,-76.1],571:[38.83,-77.27],572:[35.5,-97.41],573:[38.28,-91.34],574:[41.67,-86.07],575:[33.02,-104.64],579:[45.76,-73.28],580:[35.17,-97.96],581:[47.26,-71.35],582:[40.94,-78.82],585:[43.17,-77.58],586:[42.54,-82.97],587:[52.69,-113.7],601:[32.2,-89.96],602:[33.45,-112.07],603:[43.05,-71.33],604:[49.31,-122.98],605:[44.47,-99.18],606:[38.48,-82.64],607:[42.21,-76.41],608:[43.04,-89.56],609:[39.97,-74.71],610:[40.25,-75.46],612:[44.97,-93.32],613:[44.94,-76.4],614:[40.01,-83.01],615:[36.11,-86.59],616:[42.92,-85.73],617:[42.35,-71.1],618:[38.57,-89.93],619:[32.72,-117.05],620:[38.05,-98.75],623:[33.58,-112.3],626:[34.08,-118.01],628:[37.93,-122.52],629:[36.11,-86.59],630:[41.88,-88.09],631:[40.79,-73.21],636:[38.71,-90.6],639:[51.64,-106],640:[39.97,-74.71],641:[42.07,-92.84],645:[25.74,-80.36],646:[40.71,-74.01],647:[43.7,-79.42],650:[37.53,-122.28],651:[44.91,-93.08],656:[28.05,-82.43],657:[33.8,-117.92],659:[33.43,-86.89],660:[38.7,-93.23],661:[35.12,-118.77],662:[34.11,-89.63],667:[39.25,-76.59],669:[37.27,-121.88],678:[33.81,-84.36],679:[42.31,-83.2],680:[43.25,-75.86],681:[39.36,-81.16],682:[32.76,-97.22],686:[38.83,-77.27],689:[28.39,-81.31],701:[47.46,-99],702:[36.14,-115.11],703:[38.83,-77.27],704:[35.37,-80.75],705:[45.72,-80.31],706:[33.64,-83.94],707:[38.51,-122.53],708:[41.71,-87.73],709:[48.95,-55.96],712:[41.88,-96.13],713:[29.71,-95.3],714:[33.8,-117.92],715:[45.25,-90.7],716:[42.88,-78.9],717:[40.15,-76.58],718:[40.69,-73.96],719:[38.64,-104.75],720:[39.78,-105],724:[40.57,-79.99],725:[36.14,-115.11],726:[29.42,-98.49],727:[28.01,-82.74],730:[38.57,-89.93],731:[35.61,-88.81],732:[40.42,-74.32],734:[42.25,-83.41],737:[30.36,-97.77],740:[39.75,-82.66],743:[35.99,-79.86],747:[34.19,-118.44],754:[26.14,-80.2],757:[36.87,-76.31],760:[33.67,-116.76],762:[33.64,-83.94],763:[45.1,-93.36],765:[40.29,-85.94],769:[32.2,-89.96],770:[33.83,-84.36],771:[38.9,-77.04],772:[27.37,-80.35],773:[41.88,-88.2],774:[42.01,-71.22],775:[38.61,-118.83],778:[50.34,-122.21],779:[42.05,-88.62],780:[53.93,-113.87],781:[42.39,-71.1],782:[45.07,-63.87],785:[38.98,-96.88],786:[25.74,-80.36],801:[40.65,-111.88],802:[44.36,-72.87],803:[34.09,-81.06],804:[37.46,-77.42],805:[34.6,-119.7],806:[34.33,-101.8],807:[47.5,-88.85],808:[20.96,-157.24],810:[42.99,-83.24],812:[38.67,-86.39],813:[28.05,-82.43],814:[40.94,-78.82],815:[42.05,-88.62],816:[39.1,-94.5],817:[32.76,-97.22],818:[34.19,-118.44],819:[46.34,-73.47],820:[34.6,-119.7],825:[53.55,-113.32],826:[37.46,-77.42],828:[35.67,-81.95],830:[29.48,-99.33],831:[36.76,-121.77],832:[29.71,-95.3],835:[40.25,-75.46],838:[42.82,-73.83],839:[34.09,-81.06],840:[34.07,-117.54],843:[33.09,-79.9],845:[41.47,-74.06],847:[42.15,-87.95],848:[40.42,-74.32],850:[30.42,-86.61],854:[33.09,-79.9],856:[39.74,-75.05],857:[42.35,-71.1],858:[32.96,-117.04],859:[38.45,-84.48],860:[41.67,-72.64],861:[40.93,-89.86],862:[40.83,-74.22],863:[28.03,-81.84],864:[34.72,-82.29],865:[35.93,-84.11],867:[62.31,-105.97],870:[34.65,-91.68],872:[41.88,-88.2],873:[46.47,-74.1],878:[40.46,-79.96],901:[35.12,-89.85],902:[45.44,-63.16],903:[33.01,-95.53],904:[30.25,-81.61],905:[43.57,-79.33],907:[60.27,-141.14],908:[40.66,-74.29],909:[34.07,-117.54],910:[34.76,-78.45],912:[32.13,-81.49],913:[39.03,-94.72],914:[41.03,-73.81],915:[31.71,-106.4],916:[38.54,-121.4],917:[40.7,-73.97],918:[36.18,-95.78],919:[35.73,-78.77],920:[43.95,-88.28],925:[37.89,-121.94],928:[34.32,-113.55],929:[40.69,-73.96],930:[38.67,-86.39],931:[36.1,-86.63],934:[40.79,-73.21],936:[30.99,-95.1],937:[39.85,-84.12],938:[34.42,-86.64],940:[33.39,-97.54],941:[27.2,-82.34],943:[33.73,-84.37],945:[32.86,-96.84],947:[42.54,-83.26],948:[36.87,-76.31],949:[33.57,-117.73],951:[33.82,-117.26],952:[44.84,-93.41],954:[26.14,-80.2],956:[26.3,-98.14],959:[41.67,-72.64],970:[40.12,-105.85],971:[45.35,-122.8],972:[32.87,-96.83],973:[40.83,-74.22],978:[42.6,-71.23],979:[30.11,-96.05],980:[35.37,-80.75],983:[39.78,-105],984:[35.73,-78.77],985:[29.98,-90.33],986:[44.42,-115.56],989:[43.53,-84.16]},zu=3958.8,Kr=e=>e*Math.PI/180,qu=(e,t)=>{let o=Kr(t[0]-e[0]),r=Kr(t[1]-e[1]),a=Math.sin(o/2)**2+Math.cos(Kr(e[0]))*Math.cos(Kr(t[0]))*Math.sin(r/2)**2;return 2*zu*Math.asin(Math.sqrt(a))},ql=(e,t)=>{let o=zl[e];if(!o)return null;let r=null;for(let a of[...new Set(t)].sort()){let s=zl[a];if(!s)continue;let i=qu(o,s);(!r||i<r.miles)&&(r={code:a,miles:i})}return r};var ju="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Uu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",jl=["acq","dispo","tc"],Do={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},Ro=null,Ul=null,Wu=async(e=!1)=>{let t={numberTeam:{},numberLabel:{}},o=Y();if(!o)return t;if(!e&&Ro&&Ul===o)return Ro;try{let a=await(await fetch(`${ju}?tenant_id=${encodeURIComponent(o)}`,{method:"GET",credentials:"omit"})).json(),s={};for(let i of a?.numbers??[])i?.e164&&(s[i.e164]=(i.label||"").trim());return Ro={numberTeam:a?.config?.numberTeam??{},numberLabel:s},Ul=o,Ro}catch(r){return m.warn("[silo] config load failed",r),Ro??t}},wt=null,Wl=null,ja=async(e=!1)=>{let t=Y(),o=P();if(!t||!o)return[];if(!e&&wt&&Wl===t)return wt;try{let s=(await(await fetch(Uu,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,action:"list"})})).json())?.roster?.find(i=>i.id===o);if(s){let i=s.role_keys??[];wt=jl.filter(l=>i.includes(l))}else Ot()?wt=[...jl]:wt=[];return Wl=t,wt}catch(r){return m.warn("[silo] roster load failed",r),wt??[]}},Gl=()=>`ws-pd-calling-as:${P()||"anon"}`,Kl=e=>{try{localStorage.setItem(Gl(),e)}catch{}},Ua=async()=>{let e=await ja();if(e.length===0)return null;if(e.length===1)return e[0];let t=null;try{t=localStorage.getItem(Gl())}catch{}return t&&e.includes(t)?t:e[0]},qa=e=>{let t=(e||"").replace(/\D/g,"");return t.length===11&&t[0]==="1"?t.slice(1,4):t.length===10?t.slice(0,3):null},Gu=(e,t)=>Object.entries(e).filter(([,o])=>String(o).toLowerCase()===t).map(([o])=>o),Vl=async e=>{let t=await Ua(),{numberTeam:o,numberLabel:r}=await Wu(),a=Object.keys(o),s=t?Gu(o,t):[];if(!s.length){if(!a.length)return m.debug("[silo] no phone-assignments config; leaving GHL default"),null;m.warn(`[silo] ${t?`${t} pool empty`:"no active team"} \u2014 using all-assigned union (${a.length} numbers)`),s=a}let i=qa(e),l,d="pool default";if(i)if(l=s.find(b=>qa(b)===i),l)d="local match";else{let b=new Map;for(let g of s){let T=qa(g);T&&!b.has(T)&&b.set(T,g)}let h=ql(i,[...b.keys()]),_=h?b.get(h.code):void 0;h&&_&&(l=_,d=`nearest ${h.code}, ~${Math.round(h.miles)}mi`)}if(l||(l=s[0]),!Hl(l,r[l]||void 0))return m.warn(`[silo] could not issue Calling-From ${l} (dialer not ready?)`),null;m.info(`[silo] ${t?Do[t]:"All teams (no active team)"}: calling ${e} from ${l} (${d})`),await new Promise(b=>setTimeout(b,150));let p=Na();return p&&p!==l&&m.warn(`[silo] caller-ID did not stick: wanted ${l} but header shows ${p} \u2014 GHL dialer DOM/event may have changed`),l};var Ku="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",Yl="data-ws-pd",Jl="ws-crm-pd-panel",Ql="ws-crm-pd-session",xe=e=>new Promise(t=>setTimeout(t,e)),Fo=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Vu=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector(".crm-opportunities-card-wrapper"))return t;t=t.parentElement}return null},Yu=e=>{let t=[e,...Array.from(e.querySelectorAll("*"))];for(let o of t)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return e},Ju=e=>{let t=[],o=new Set;for(let r of Array.from(e.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),s=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!s||o.has(s))continue;let i=Array.from(r.querySelectorAll("[id]")).find(l=>/^[A-Za-z0-9]{18,22}$/.test(l.id));o.add(s),t.push({oppId:i?.id||"",contactId:s,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return t},Ut=null,Ga=async e=>{if(Ut&&Ut.loc===e&&Date.now()-Ut.at<6e5)return Ut.list;let t=await He(`${Xe}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`);if(!t||!t.ok)return Ut?.list??[];let r=((await t.json()).pipelines??[]).map(a=>({id:a.id||"",name:(a.name||"").trim(),stages:(a.stages??[]).map(s=>({id:s.id||"",name:(s.name||"").trim()}))}));return r.length&&(Ut={loc:e,at:Date.now(),list:r}),r},Qu=(e,t)=>{let o=e.filter(a=>a.stages.some(s=>s.name===t));if(o.length===1)return o[0];if(!o.length)return null;let r=new Map(o.map(a=>[a.name.toLowerCase(),a]));for(let a of document.querySelectorAll("button, [role='combobox'], [class*='pipeline' i] *, span, div")){if(a.childElementCount>2)continue;let s=(a.textContent||"").replace(/\s+/g," ").trim().toLowerCase();if(!s||s.length>40)continue;let i=r.get(s);if(i&&a.getBoundingClientRect().width)return i}return null},Zu=async(e,t)=>{let o=Y();if(!o)return null;let r=await Ga(o);if(!r.length)return m.warn("[bulk-dialer] pipelines unavailable (no captured auth yet?) \u2014 DOM fallback"),null;let a=Qu(r,e),s=a?.stages.find(c=>c.name===e);if(!a||!s)return m.warn(`[bulk-dialer] stage "${e}" ambiguous/unknown across pipelines \u2014 DOM fallback`),null;let i=new Map,l=null,d=20;for(let c=1;c<=d;c++){let p=await He(`${Xe}/opportunities/search?location_id=${encodeURIComponent(o)}&pipeline_id=${a.id}&pipeline_stage_id=${s.id}&limit=100&status=open&page=${c}`);if(!p||!p.ok)return i.size?[...i.values()]:null;let b=await p.json(),h=b.opportunities??[];typeof b.meta?.total=="number"&&(l=b.meta.total);for(let _ of h){let g=_.contactId||_.contact?.id||"";if(!g||i.has(g))continue;let T=(_.contact?.name||_.name||g).replace(/\s+/g," ").trim().slice(0,60),x=(_.contact?.phone||"").trim();i.set(g,{oppId:_.id||"",contactId:g,name:T,_phone:/^\+\d{10,15}$/.test(x)?x:void 0})}if(t(i.size,l),h.length<100||l!==null&&i.size>=l)break}return l!==null&&l>d*100&&m.warn(`[bulk-dialer] stage has ${l} opps \u2014 capped at ${d*100}`),m.info(`[bulk-dialer] API stage harvest: ${i.size} opps from "${a.name}" / "${e}"`),[...i.values()]},Xu=async e=>{let t=Vu(e);if(!t)return[];let o=Yu(t),r=-1;for(let a=0;a<60;a++){let s=t.querySelectorAll(".crm-opportunities-card-wrapper").length;if(s===r)break;r=s,o.scrollTop=o.scrollHeight,await xe(550)}return o.scrollTop=0,Ju(t)},eh=async(e,t)=>{try{let r=await(await fetch(Ku,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})})).json();return r?.ok?{name:r.name||"",phone:r.phone||"",skip:!!r.skip}:null}catch(o){return m.warn("[bulk-dialer] resolvePhone failed",o),null}},th=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`,Ka=(e,t,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(Jl)?.remove();let r=document.createElement("div");r.id=Jl,r.style.cssText=th;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let s=t.map((k,f)=>`<label data-row="${f}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${f}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fo(k.name||k.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${Fo(e)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:12px;">${t.length} ${t.length===1?o.one:o.many} loaded. Pick who to call.</div>
    <div id="ws-pd-auto-bar" role="switch" aria-checked="true" tabindex="0" title="Toggle auto-advance" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};border-radius:${y.md};cursor:pointer;user-select:none;outline:none;">
      <div style="display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:13px;font-weight:600;color:${n.bone};">Auto-advance to the next call</span>
        <span style="font-size:11px;color:${n.ash};">5s countdown between calls, with Pause / Skip</span>
      </div>
      <span id="ws-pd-auto-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${y.pill};background:${n.emerald};transition:background .15s ease;">
        <span id="ws-pd-auto-knob" style="position:absolute;top:2px;left:20px;width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
      <input id="ws-pd-auto" type="checkbox" checked style="display:none;" />
    </div>
    <div id="ws-pd-dd-bar" role="switch" aria-checked="false" tabindex="0" title="Toggle double-dial" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:transparent;border:1px solid ${n.steel};border-radius:${y.md};cursor:pointer;user-select:none;outline:none;">
      <div style="display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:13px;font-weight:600;color:${n.bone};">Double-dial each contact</span>
        <span style="font-size:11px;color:${n.ash};">Unanswered first try gets one immediate second call</span>
      </div>
      <span id="ws-pd-dd-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${y.pill};background:${n.steel};transition:background .15s ease;">
        <span id="ws-pd-dd-knob" style="position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
      <input id="ws-pd-dd" type="checkbox" style="display:none;" />
    </div>
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-size:13px;font-family:${u.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${y.md};min-height:120px;">${s||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${u.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${u.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",k=>{k.target===r&&r.remove()});let i=a.querySelector("#ws-pd-list"),l=a.querySelector("#ws-pd-count"),d=()=>{let k=a.querySelectorAll(".ws-pd-cb:checked").length;l&&(l.textContent=`${k} selected`)};d(),i?.addEventListener("change",d);let c=a.querySelector("#ws-pd-auto-bar"),p=a.querySelector("#ws-pd-auto"),b=a.querySelector("#ws-pd-auto-track"),h=a.querySelector("#ws-pd-auto-knob"),_=()=>{let k=!!p?.checked;b&&(b.style.background=k?n.emerald:n.steel),h&&(h.style.left=k?"20px":"2px"),c?.setAttribute("aria-checked",String(k))},g=()=>{p&&(p.checked=!p.checked,_())};c?.addEventListener("click",g),c?.addEventListener("keydown",k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),g())}),_();let T=a.querySelector("#ws-pd-dd-bar"),x=a.querySelector("#ws-pd-dd"),C=a.querySelector("#ws-pd-dd-track"),v=a.querySelector("#ws-pd-dd-knob");try{x&&(x.checked=localStorage.getItem(Zl)==="1")}catch{}let E=()=>{let k=!!x?.checked;C&&(C.style.background=k?n.emerald:n.steel),v&&(v.style.left=k?"20px":"2px"),T?.setAttribute("aria-checked",String(k))},w=()=>{x&&(x.checked=!x.checked,E())};T?.addEventListener("click",w),T?.addEventListener("keydown",k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),w())}),E(),a.querySelector("#ws-pd-search")?.addEventListener("input",k=>{let f=k.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach($=>{let S=($.textContent||"").toLowerCase();$.style.display=S.includes(f)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",k=>{let f=k.target.checked;a.querySelectorAll("[data-row]").forEach($=>{if($.style.display==="none")return;let S=$.querySelector(".ws-pd-cb");S&&(S.checked=f)}),d()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let k=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(S=>{let L=Number(S.getAttribute("data-i"));t[L]&&k.push(t[L])});let f=a.querySelector("#ws-pd-auto")?.checked??!0,$=a.querySelector("#ws-pd-dd")?.checked??!1;try{localStorage.setItem(Zl,$?"1":"0")}catch{}r.remove(),k.length&&ed(e,k,f,$)})},oh=75e3,rh=4e4,nh=30,ah=3,sh=6e3,Zl="ws-pd-double-dial",ed=async(e,t,o,r=!1)=>{let a=Y();if(!a)return;document.getElementById(Ql)?.remove();let s={skip:!1,paused:!1,stopped:!1,advance:!1,redial:!1,cancelRedial:!1,hangupAt:0},i=document.createElement("div");i.id=Ql,i.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${y.md};padding:14px 16px;color:${n.bone};font-family:${u.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(i);let l={danger:`background:${n.crimson};color:${n.bone};font-weight:600;`,neutral:`background:${n.steel};color:${n.bone};`,primary:`background:${n.emerald};color:${n.obsidian};font-weight:600;`},d=(w,k,f,$)=>{i.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${Fo(e)} \xB7 ${k+1} of ${t.length}</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fo(f)}</div>
      <div id="ws-pd-status" style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${Fo(w)}</div>
      <div style="display:flex;gap:6px;">${$.map(S=>`<button id="${S.id}" style="flex:1;border:none;border-radius:${y.sm};padding:6px;cursor:pointer;font-size:12px;${l[S.kind]}">${S.label}</button>`).join("")}</div>`,i.querySelector("#ws-pd-end")?.addEventListener("click",()=>{s.stopped=!0,p(),i.remove()});for(let S of $){let L=i.querySelector(`#${S.id}`);L&&L.addEventListener("click",()=>S.on(L))}},c=w=>{let k=i.querySelector("#ws-pd-status");k&&(k.textContent=w)},p=w=>{let k=!1;try{k=za()}catch{}if(!k){try{Fa()}catch{}window.setTimeout(()=>{let f=!1;try{f=za()}catch{}!f&&w&&w()},450)}},b=()=>({id:"ws-pd-pause",label:s.paused?"Resume":"Pause",kind:"neutral",on:w=>{s.paused=!s.paused,w.textContent=s.paused?"Resume":"Pause"}}),h=(w,k,f,$)=>d($>1?`${w} \xB7 dial ${$}`:w,k,f,[{id:"ws-pd-hangup",label:"Hang Up",kind:"danger",on:()=>{s.hangupAt=Date.now(),p(()=>c("Couldn't hang up \u2014 use the call window"))}},{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{s.skip=!0,p()}},b()]),_=(w,k,f)=>d(w,k,f,[{id:"ws-pd-redial",label:"Redial",kind:"neutral",on:()=>{s.redial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{s.advance=!0}},b()]),g=(w,k,f)=>d(w,k,f,[{id:"ws-pd-dd-skip",label:"Skip 2nd dial",kind:"neutral",on:()=>{s.cancelRedial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{s.advance=!0}},b()]),T=(w,k,f)=>d(w,k,f,[{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{s.skip=!0}},b()]),x=()=>new Promise(w=>{let k=!1,f=()=>{k||(k=!0,window.clearInterval(S),$(),w())},$=Nl(f),S=window.setInterval(()=>{s.stopped||s.skip?f():s.hangupAt&&Date.now()-s.hangupAt>sh&&(s.hangupAt=0,c("No hang-up detected \u2014 call may still be live; Skip to move on"))},300)}),C=async()=>{for(let w=0;w<7;w++){let k=(rt()?.innerText||"").replace(/\s+/g," "),f=k.match(/Call Ended\s+(Completed|Voicemail|No ?Answer|Busy|Failed|Cancell?ed)\b/i),$=k.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Min(?:ute)?s?\s*(\d+)\s*Sec/i)||k.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Sec/i);if($||f){let S=$?$[2]!==void 0?parseInt($[1],10)*60+parseInt($[2],10):parseInt($[1],10):null;return{outcome:f?f[1].toLowerCase().replace(/\s+/g,"-"):"",talkSecs:S}}await xe(200)}return{outcome:"",talkSecs:null}},v=async(w,k,f,$)=>{if(await Vl(w),s.stopped)return{ms:0,outcome:"",talkSecs:null};s.hangupAt=0,h(`Calling ${w}\u2026`,k,f,$);let S=Date.now();try{Fa(),await xe(250),Rl(w),await xe(250),Dl()}catch(N){m.error("[bulk-dialer] dial failed",N)}await x();let L=s.stopped?{outcome:"",talkSecs:null}:await C();if(!s.stopped)try{Fl()}catch{}let z={ms:Date.now()-S,...L};return m.info(`[bulk-dialer] call ended: outcome=${z.outcome||"?"} talk=${z.talkSecs??"?"}s wall=${Math.round(z.ms/1e3)}s`),z},E=w=>w.talkSecs!==null?w.talkSecs>=nh:w.outcome&&!/completed|voicemail/.test(w.outcome)?!1:w.ms>=rh;for(let w=0;w<t.length&&!s.stopped;w++){let k=t[w];s.skip=!1,s.advance=!1,T("Resolving number\u2026",w,k.name);let $=!k.contactId||k.contactId==="__test__"?null:await eh(a,k.contactId);if(s.stopped)break;if(s.skip)continue;if($?.skip){T("Called in last 2h \u2014 skipping",w,$.name||k.name),await xe(1200);continue}let S=k._phone||$?.phone||"",L=$?.name||k.name;if(!S){T("No phone on file \u2014 skipping",w,k.name||$?.name||k.contactId),await xe(1400);continue}if(k.contactId&&k.contactId!=="__test__")try{let re=`/v2/location/${(window.location.pathname.match(/\/v2\/location\/([^/]+)/)||[])[1]||a}/contacts/detail/${k.contactId}`;window.location.pathname!==re&&(history.pushState({},"",re),window.dispatchEvent(new PopStateEvent("popstate")))}catch(V){m.debug("[bulk-dialer] screen-follow nav failed",V)}let z=0,N=!0,H=!1;for(;N&&!s.stopped;){N=!1,z++;let V=await v(S,w,L,z);if(s.stopped)break;if(H=E(V),r&&z===1&&!s.skip&&!H&&V.ms<oh){s.cancelRedial=!1;let re=!0;for(let J=ah;J>0;J--){for(g(`Double-dialing in ${J}s\u2026`,w,L);s.paused&&!s.stopped&&!s.cancelRedial&&!s.advance;)await xe(200);if(s.stopped||s.cancelRedial||s.advance){re=!1;break}await xe(1e3)}re&&!s.stopped&&(N=!0)}}if(s.stopped)break;let O=w>=t.length-1;for(;!s.stopped&&(!O||H&&!s.skip)&&!s.advance;){if(s.redial=!1,H&&!s.skip)for(_(O?"Answered \u2014 set a call status, then Call Next to finish":"Answered \u2014 set a call status, then Call Next",w,L);!s.advance&&!s.stopped&&!s.redial;)await xe(200);else if(o)for(let V=5;V>0&&!s.stopped&&!s.advance&&!s.redial;V--){for(_(`Next call in ${V}s\u2026`,w,L);s.paused&&!s.stopped&&!s.advance&&!s.redial;)await xe(200);if(s.advance||s.stopped||s.redial)break;await xe(1e3)}else for(_("Ready \u2014 press Call Next or Redial",w,L);!s.advance&&!s.stopped&&!s.redial;)await xe(200);if(!s.redial||s.stopped)break;s.skip=!1,H=E(await v(S,w,L,++z))}}s.stopped||(i.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${t.length} contact${t.length===1?"":"s"} dialed.</div>`,setTimeout(()=>i.remove(),5e3))},Va='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Ya=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},ih=()=>{if(Pt()!=="opportunity-list"||!Ya()||!Gr())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(t=>{if(t.querySelector(`[${Yl}]`))return;let o=t.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute(Yl,"1"),a.title=`Power Dialer \u2014 call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${y.pill};cursor:pointer;font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${Va}<span>DIAL</span>`,a.addEventListener("click",async s=>{s.stopPropagation(),s.preventDefault();let i=a.querySelector("span"),l=i?.textContent||"DIAL";i&&(i.textContent="Loading\u2026"),a.style.opacity="0.7";try{let c=await Zu(r,(p,b)=>{i&&(i.textContent=`${p}${b?`/${b}`:""}`)})??await Xu(t);Ka(r,c)}catch(d){m.error("[bulk-dialer] harvest failed",d)}finally{i&&(i.textContent=l),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},Wt=null,Wa,Xl=!1,td=()=>{if(Xl)return;Xl=!0,window.WS_CRM_PD_TEST=(t,o=!1)=>void ed("Verification",[{oppId:"",contactId:"__test__",name:`Test ${t}`,_phone:t}],!1,o);let e=()=>{Wa!==void 0&&window.clearTimeout(Wa),Wa=window.setTimeout(ih,400)};ge(t=>{t==="opportunity-list"?(e(),Wt||(Wt=new MutationObserver(e),Wt.observe(document.body,{childList:!0,subtree:!0}))):Wt&&(Wt.disconnect(),Wt=null)})};var dd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",lh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set",dh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",ch="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",ph="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/link-clicked",mh=async({contactId:e,locationId:t,status:o,userId:r,deadReason:a,webhookUrl:s,kind:i})=>{let l=s||dd,d;if(i==="buyer"){let p=md.find(h=>h.label===o),b=p?p.value:o.toLowerCase().replace(/\s+/g,"-");d={tenant_id:t,contact_id:e,new_status:b,triggered_by_user_id:r??""}}else{let p={call_status:o,triggered_by_user_id:r??""};a&&(p.dead_reason=a),d={contact_id:e,location:{id:t},customData:p}}let c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),credentials:"omit"});if(!c.ok)throw new Error(`Webhook returned ${c.status} ${c.statusText}`)},bh=async({contactId:e,tenantId:t})=>{let o=await fetch(dh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:e}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()},Gt="ws-crm-contact-actions-bar",cd="ws-crm-call-status-dropdown",pd="ws-crm-call-status-menu",Yr="ws-crm-offer-made-modal",od=!1,uh=()=>{od||(od=!0,document.addEventListener("click",e=>{let t=document.getElementById(pd);if(!t||t.style.display==="none")return;let o=document.getElementById(cd);o&&!o.contains(e.target)&&(t.style.display="none")}))},hh=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"no-show",label:"No Show",color:"orange"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],md=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"showed-interest",label:"Showed Interest",color:"green"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],_h=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],yh=async()=>{for(let e of _h)try{let t=await I(e,{timeoutMs:2e3});if(t)return m.debug(`[actions-bar] mount target found via selector: ${e}`),t}catch{}try{let e=await I("#contact-conversation-panel",{timeoutMs:2e3});if(e.parentElement)return m.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),e.parentElement}catch{}for(let e of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let t=await I(e,{timeoutMs:1500});if(t)return m.debug(`[actions-bar] mount target via fallback: ${e}`),t.parentElement??t}catch{}return m.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},vh=({contactId:e,kind:t})=>{let o=t==="buyer"?md:hh,r=t==="buyer"?lh:dd,a=t==="buyer"?"Buyer Call Status":"Seller Call Status",s=document.createElement("div");s.id=cd,s.style.cssText="position: relative; flex-shrink: 0; order: 1;";let i=document.createElement("button");i.type="button",i.style.cssText=D,i.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let l=document.createElement("div");return l.id=pd,l.style.cssText=`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 999998;
    min-width: 220px;
    max-height: 360px;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.md};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    padding: 4px;
    display: none;
  `,o.forEach(d=>{let c=document.createElement("button");c.type="button",c.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${y.sm};
      font-family: ${u.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
    `,c.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${ca[d.color]};
        flex-shrink: 0;
      "></span>
      <span>${d.label}</span>
    `,c.addEventListener("mouseenter",()=>{c.style.background=n.slate}),c.addEventListener("mouseleave",()=>{c.style.background="transparent"}),c.addEventListener("click",async()=>{m.info(`Call Status set to "${d.label}" (${d.value}, ${d.color}) for contact ${e}`);let p=i.firstElementChild,b=i.children[1],h=i.children[2];p&&(p.style.background=ca[d.color]),b&&(b.textContent=d.label),l.style.display="none";let g=j()?.locationId,T=P();if(!g){m.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),b&&(b.textContent=`${d.label} (no tenant!)`),b&&(b.style.color=n.amber);return}if(t==="seller"&&d.color==="green"&&!T){m.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),b&&(b.textContent=`${d.label} (no user!)`),b&&(b.style.color=n.amber);return}let x=h?.textContent??"\u25BE",C=async v=>{h&&(h.textContent="\u2026"),i.style.opacity="0.75";try{await mh({contactId:e,locationId:g,status:d.label,userId:T,deadReason:v,webhookUrl:r,kind:t}),h&&(h.textContent="\u2713"),setTimeout(()=>{h&&(h.textContent=x),i.style.opacity="1"},900)}catch(E){m.warn("Call Status webhook failed:",E),h&&(h.textContent="\u2717"),b&&(b.style.color=n.amber),i.style.opacity="1",setTimeout(()=>{h&&(h.textContent=x),b&&(b.style.color=n.bone)},1800)}};if(t==="seller"&&d.value==="dead-deal"){let v=b?.textContent??"";Lh(E=>{C(E)},()=>{b&&(b.textContent=v)});return}if(t==="seller"&&d.value==="appointment-booked"){let v=b?.textContent??"";try{(await bh({contactId:e,tenantId:g})).ok?await C():Ah(()=>{C()},()=>{b&&(b.textContent=v)})}catch(E){m.warn("Appointment sanity check failed; firing anyway:",E),await C()}return}if(t==="buyer"&&(d.value==="not-interested"||d.value==="showed-interest")){await C(),Th(d.value,{contactId:e,locationId:g,label:b,dispositionLabel:d.label});return}await C()}),l.appendChild(c)}),i.addEventListener("click",d=>{d.stopPropagation(),l.style.display=l.style.display==="none"?"block":"none"}),uh(),s.appendChild(i),s.appendChild(l),s},gh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",fh=async e=>{let t=await fetch(gh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,kind:e.kind,amount:e.amount,expires_at:e.expiresAt,triggered_by_user_id:e.userId,opp_id:e.oppId??void 0,property_record_id:e.propertyRecordId??void 0,asking_price:e.askingPrice??void 0}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},xh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/list-for-contact",Fe=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),rd="ws-crm-ni-mt-picker",wh={"not-interested":{webhook:ch,eligible:()=>!0,guardStageName:"",title:"Which deals is this buyer out on?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"}. Closing moves them to \u201CLost - Withdrew\u201D \u2014 the buyer stays eligible for other properties.`,allLabel:"Not interested in ALL of them",goLabel:e=>e?`Close ${e} Selected`:"Close Selected",accent:n.crimson,accentGlow:n.crimsonGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} closed`:`${e}/${t} closed \u2014 retry the rest`},"showed-interest":{webhook:ph,eligible:(e,t,o)=>{let r=t.get(e.stageId);return r!==void 0&&o>=0&&r<o},guardStageName:"Showed Interest",title:"Which deals are they interested in?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"} can move to \u201CShowed Interest\u201D.`,allLabel:"Interested in ALL of them",goLabel:e=>e?`Move ${e} to Showed Interest`:"Move to Showed Interest",accent:n.emerald,accentGlow:n.emeraldGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} moved`:`${e}/${t} moved \u2014 retry the rest`}},kh=async(e,t)=>{let r=(await Ga(e)).find(l=>l.name.toLowerCase().includes("marketing tracker"));if(!r)return null;let a=await He(`${Xe}/opportunities/search?location_id=${encodeURIComponent(e)}&contact_id=${encodeURIComponent(t)}&pipeline_id=${r.id}&status=open&limit=100`);if(!a||!a.ok)return null;let s=await a.json(),i=new Map(r.stages.map((l,d)=>[l.id,d]));return{opps:(s.opportunities??[]).filter(l=>!!l.id).map(l=>({id:l.id,name:(l.name||l.id).replace(/\s+/g," ").trim().slice(0,70),stageId:l.pipelineStageId||""})),stageIndexById:i,stageIdxOf:l=>r.stages.findIndex(d=>d.name===l)}},Eh=async(e,t,o,r)=>{try{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,mt_opp_id:o,triggered_by_user_id:r??null})});return a.ok?(await a.json().catch(()=>({})))?.ok!==!1:!1}catch{return!1}},$h=(e,t,o,r)=>{document.getElementById(rd)?.remove();let a=document.createElement("div");a.id=rd,a.style.cssText=`position:fixed;inset:0;z-index:100003;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let s=document.createElement("div");s.style.cssText=`width:min(520px,94vw);max-height:80vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${t.accent};border-radius:${y.lg};padding:22px 26px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let i=e.map(b=>`<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-ni-mt-cb" data-id="${Fe(b.id)}" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
        <span style="font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fe(b.name)}</span>
      </label>`).join("");s.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${t.accent};">${Fe(o)}</div>
    <div style="font-size:14px;font-weight:600;margin:4px 0 2px;">${Fe(t.title)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:10px;">${Fe(t.sub(e.length))}</div>
    <label style="display:flex;align-items:center;gap:10px;padding:9px 10px;margin-bottom:6px;background:${t.accentGlow};border:1px solid ${n.steel};border-radius:${y.md};cursor:pointer;">
      <input id="ws-ni-mt-all" type="checkbox" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
      <span style="font-size:13px;font-weight:600;">${Fe(t.allLabel)}</span>
    </label>
    <div style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${y.md};min-height:60px;">${i}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-ni-mt-go" type="button" disabled style="background:${t.accent};color:${t.accent===n.emerald?n.obsidian:n.bone};border:none;border-radius:${y.sm};padding:8px 20px;cursor:pointer;font-size:13px;font-weight:600;font-family:${u.sans};opacity:0.5;">${Fe(t.goLabel(0))}</button>
    </div>`,a.appendChild(s),document.body.appendChild(a);let l=()=>[...s.querySelectorAll(".ws-ni-mt-cb")],d=s.querySelector("#ws-ni-mt-all"),c=s.querySelector("#ws-ni-mt-go"),p=()=>{let b=l().filter(h=>h.checked).length;c&&(c.disabled=b===0,c.style.opacity=b===0?"0.5":"1",c.textContent=t.goLabel(b)),d&&(d.checked=b===e.length)};d?.addEventListener("change",()=>{l().forEach(b=>{b.checked=!!d.checked}),p()}),s.addEventListener("change",p),a.addEventListener("click",b=>{b.target===a&&a.remove()}),c?.addEventListener("click",()=>{let b=l().filter(h=>h.checked).map(h=>h.getAttribute("data-id")||"").filter(Boolean);a.remove(),b.length&&r(b)})},Th=async(e,t)=>{let o=wh[e],r=P(),a=c=>{if(!t.label)return;let p=t.dispositionLabel;t.label.textContent=`${p} \u2014 ${c}`,setTimeout(()=>{t.label&&t.label.textContent?.startsWith(`${p} \u2014 `)&&(t.label.textContent=p)},3e3)},s=await kh(t.locationId,t.contactId);if(s===null){m.warn(`[${e}] MT opp lookup unavailable \u2014 disposition recorded, no opps touched`);return}let i=o.guardStageName?s.stageIdxOf(o.guardStageName):-1,l=s.opps.filter(c=>o.eligible(c,s.stageIndexById,i));if(!l.length){m.info(`[${e}] no eligible open MT opps \u2014 record only`),s.opps.length&&a("no deals to move");return}let d=async c=>{let p=0;for(let b of c)await Eh(o.webhook,t.locationId,b,r)&&p++;m.info(`[${e}] acted on ${p}/${c.length} MT opp(s)`),a(o.doneNote(p,c.length))};if(l.length===1){await d([l[0].id]);return}$h(l,o,t.dispositionLabel,c=>{d(c)})},Ch=async(e,t)=>{let o=await fetch(xh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();return(Array.isArray(r.properties)?r.properties:[]).filter(s=>s.has_acq_opp&&s.opp_id).map(s=>({oppId:String(s.opp_id),propertyRecordId:String(s.property_record_id||""),address:String(s.address||"(no address)"),dealStage:s.deal_stage||null,askingPrice:s.asking_price??null}))},Sh=e=>new Promise(t=>{document.getElementById(Yr)?.remove();let o=document.createElement("div");o.id=Yr,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-deal-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${u.sans};">
        <div style="font-size:14px;font-weight:500;">${Fe(i.address)}</div>
        ${i.dealStage?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Fe(i.dealStage)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This seller has ${e.length} deals</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is this offer for?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-deal-cancel" type="button" style="${D} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-deal-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-deal-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),No=(e,t="seller",o)=>{document.getElementById(Yr)?.remove();let r=t==="seller",a=r?"Record Your Offer":"Record Buyer's Offer",s=r?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=r?n.emerald:n.amber,l=document.createElement("div");l.id=Yr,l.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let d=document.createElement("div");d.style.cssText=`
    width: min(420px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let c=new Date,p=new Date(c.getTime()+5*24*60*60*1e3).toISOString().slice(0,10),b=r?`
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
        border-radius: ${y.sm};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 16px;
        outline: none;
        box-sizing: border-box;
      " />`:"",h=r&&o&&o.address?`<div style="font-size:12px;color:${n.bone};background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 10px;margin-bottom:16px;">Offer for: <strong>${Fe(o.address)}</strong></div>`:"",_=o&&o.askingPrice!=null&&Number(o.askingPrice)>0?String(Number(o.askingPrice)):"",g=r&&o&&o.propertyRecordId?`
    <label style="display:block;font-family:${u.mono};font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin-bottom:6px;">Seller's Asking Price <span style="text-transform:none;letter-spacing:0;color:${n.ash};">(optional)</span></label>
    <div style="display:flex;align-items:center;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:0 12px;margin-bottom:16px;">
      <span style="color:${n.ash};font-family:${u.mono};font-size:14px;">$</span>
      <input id="ws-offer-asking" type="number" min="0" step="100" placeholder="0" value="${_}" style="flex:1;background:transparent;border:none;outline:none;color:${n.bone};font-family:${u.mono};font-size:14px;padding:10px 8px;" />
    </div>`:"";d.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${i};
      margin-bottom: 8px;
    ">${r?"Seller Side":"Buyer Side"}</div>
    <div style="
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    ">${a}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 20px;
      line-height: 1.4;
    ">${s}</div>

    ${h}

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
      border-radius: ${y.sm};
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

    ${g}

    ${b}

    <div id="ws-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${ie}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,l.appendChild(d),document.body.appendChild(l);let T=()=>l.remove();l.addEventListener("click",E=>{E.target===l&&T()});let x=d.querySelector("#ws-offer-error"),C=d.querySelector("#ws-offer-cancel"),v=d.querySelector("#ws-offer-submit");C?.addEventListener("click",T),v?.addEventListener("click",async()=>{let E=(d.querySelector("#ws-offer-amount")?.value??"").trim(),w=r?d.querySelector("#ws-offer-expires")?.value??"":"";if(!E||Number(E)<=0){x&&(x.textContent="Enter a positive offer amount."),m.warn("Offer Made submit blocked \u2014 invalid amount");return}let k=Number(E);if(k<100){x&&(x.textContent=`That looks low \u2014 did you mean $${(k*1e3).toLocaleString("en-US")}?`);return}let $=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),S=$?$[1]:null;if(!S){x&&(x.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}x&&(x.textContent=""),v&&(v.disabled=!0,v.textContent="Recording\u2026",v.style.opacity="0.7"),C&&(C.disabled=!0);try{let L=(d.querySelector("#ws-offer-asking")?.value??"").trim(),z=L?Number(L):null,N=await fh({tenantId:S,contactId:e,kind:t,amount:k,expiresAt:w||null,userId:P(),oppId:o?.oppId??null,propertyRecordId:o?.propertyRecordId??null,askingPrice:z&&z>0?z:null});if(!N.ok){x&&(x.textContent=N.error??"Something went wrong."),v&&(v.disabled=!1,v.textContent="Record Offer",v.style.opacity="1"),C&&(C.disabled=!1);return}m.info(`Offer Made (${t}) recorded for contact ${e}: $${k} on ${N.opp_pipeline} opp (stage: ${N.opp_stage_name??"?"})`),T()}catch(L){m.error("Offer Made webhook failed",L),x&&(x.textContent=L instanceof Error?L.message:"Network error \u2014 try again."),v&&(v.disabled=!1,v.textContent="Record Offer",v.style.opacity="1"),C&&(C.disabled=!1)}}),setTimeout(()=>{d.querySelector("#ws-offer-amount")?.focus()},0)},nd="ws-crm-dead-deal-modal",Lh=(e,t)=>{document.getElementById(nd)?.remove();let o=document.createElement("div");o.id=nd,o.style.cssText=`
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
    border-radius: ${y.lg};
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
        border-radius: ${y.sm};
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
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${ie}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let l=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),c=(l?.value??"").trim();if(!c){d&&(d.textContent="Please enter a reason."),l?.focus();return}if(c.length<4){d&&(d.textContent="Please enter at least a few words."),l?.focus();return}a(),e(c)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),i()),l.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},ad="ws-crm-appointment-sanity-modal",Ah=(e,t)=>{document.getElementById(ad)?.remove();let o=document.createElement("div");o.id=ad,o.style.cssText=`
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
    border-radius: ${y.lg};
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
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${ie}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>{document.removeEventListener("keydown",i),o.remove()},s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),e()});let i=l=>{l.key==="Escape"&&s()};document.addEventListener("keydown",i)},sd=(e,t)=>{let o=document.createElement("div");if(o.id=Gt,o.dataset.contactId=e,o.dataset.contactKind=t,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,t==="seller"||t==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=D,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",async()=>{if(t!=="seller"){No(e,t);return}let a=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),s=a?a[1]:null;if(!s){No(e,t);return}let i=r.innerHTML;r.disabled=!0,r.style.opacity="0.7",r.innerHTML="<span>Loading\u2026</span>";let l=()=>{r.innerHTML=i,r.disabled=!1,r.style.opacity="1"},d=[];try{d=await Ch(s,e)}catch(p){m.warn("[offer-made] deal lookup failed, using legacy path",p),l(),No(e,t);return}if(l(),d.length<=1){No(e,t,d[0]);return}let c=await Sh(d);c&&No(e,t,c)}),o.appendChild(r),o.appendChild(vh({contactId:e,kind:t}))}return o},Ja=!1,id=()=>{document.querySelectorAll(`[id="${Gt}"]`).forEach(e=>e.remove())},bd=async()=>{if(m.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),Ja){m.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}Ja=!0;try{await Mh()}finally{Ja=!1}},Mh=async()=>{let e=j();if(!e){m.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),id();return}if(m.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${e.contactId} locationId=${e.locationId??"(null)"} source=${e.source}`),e.source!=="url"){m.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),id();return}let t="seller";try{let d=await Oe(e.contactId,e.locationId),c=Be(d);c==="buyer"?t="buyer":c==="other"&&(t="other"),m.debug(`[actions-bar:03] kind resolved \u2014 kind=${t} (raw type=${d??"(null)"})`)}catch(d){m.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",d)}let o=j();if(!o||o.contactId!==e.contactId){m.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${Gt}"]`));if(r.length===1&&r[0].dataset.contactId===e.contactId&&r[0].dataset.contactKind===t){m.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${e.contactId} kind=${t} \u2014 no-op`);return}r.length>0&&(m.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(d=>d.remove()));let a=await yh();if(!a){m.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}m.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let s=j();if(!s||s.contactId!==e.contactId){m.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let i;try{i=sd(e.contactId,t)}catch(d){m.error("[actions-bar:08-FAIL] buildBar threw:",d);return}i.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(i,a.firstChild)}catch(d){m.error("[actions-bar:09-FAIL] insertBefore threw:",d);return}if(!document.getElementById(Gt)){m.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}m.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${e.contactId} kind=${t}`),Vr?.disconnect(),Vr=new MutationObserver(()=>{if(!(j()?.contactId===e.contactId)){Vr?.disconnect();return}let c=document.querySelectorAll(`[id="${Gt}"]`);if(c.length>1){for(let p=1;p<c.length;p++)c[p].remove();m.debug(`[actions-bar:WATCHDOG] trimmed ${c.length-1} duplicate bar(s)`);return}if(c.length===0){let p=document.querySelector(".central-panel")||a,b=sd(e.contactId,t);b.dataset.mountTarget=i.dataset.mountTarget??"";try{p.insertBefore(b,p.firstChild),m.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${e.contactId}`)}catch(h){m.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",h)}}}),Vr.observe(a,{childList:!0})},Vr=null,ld=null,Ih=()=>{ld===null&&(ld=window.setInterval(()=>{let e=j();e&&(document.getElementById(Gt)||(m.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",e.contactId),bd()))},3e3))},ud=()=>{Ih(),bd()};var Jr="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Ph=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),zo="data-ws-crm-favicon",Qa=e=>e.hasAttribute(zo),hd=e=>{if(e.tagName!=="LINK")return!1;let t=(e.getAttribute("rel")??"").toLowerCase();return Ph.has(t)},Qr=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{hd(r)&&!Qa(r)&&r.remove()});let t=document.head.querySelector(`link[${zo}="1"]`);t?t.href!==Jr&&(t.href=Jr):(t=document.createElement("link"),t.setAttribute(zo,"1"),t.rel="icon",t.type="image/png",t.href=Jr,document.head.appendChild(t),m.debug("Favicon installed"));let o=document.head.querySelector(`link[${zo}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(zo,"apple"),o.rel="apple-touch-icon",o.href=Jr,document.head.appendChild(o))},_d=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)Qr();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),Qr())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&hd(i)&&!Qa(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&Qa(i)&&(a=!0)});a&&Qr()}).observe(document.head,{childList:!0,subtree:!1});let t=0,o=window.setInterval(()=>{t+=1,Qr(),t>=5&&window.clearInterval(o)},1e3)};var Oh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",Ce="ws-crm-mt-offer-made-button",yd="ws-crm-mt-offer-made-modal",Bh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Hh=/\/v2\/location\/([A-Za-z0-9]+)/,en=()=>{let e=window.location.pathname,t=e.match(Bh),o=t?t[1]:fe();if(!o)return null;let r=e.match(Hh);return{oppId:o,locationId:r?r[1]:null}},Rh=async e=>{let t=await fetch(Oh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,kind:"buyer",amount:e.amount,triggered_by_user_id:e.userId}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Zr=()=>{document.getElementById(yd)?.remove()},Dh=e=>{Zr();let t=document.createElement("div");t.id=yd,t.style.cssText=`
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
    border-radius: ${y.lg};
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
      border-radius: ${y.sm};
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
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${ie}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),s=o.querySelector("#ws-mt-offer-cancel"),i=o.querySelector("#ws-mt-offer-submit");setTimeout(()=>r?.focus(),50);let l=d=>{d.key==="Enter"?(d.preventDefault(),i?.click()):d.key==="Escape"&&(d.preventDefault(),s?.click())};o.addEventListener("keydown",l),t.addEventListener("click",d=>{d.target===t&&Zr()}),s?.addEventListener("click",()=>Zr()),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let d=r.value.trim();if(!d||Number(d)<=0){a.textContent="Enter a positive offer amount.",r.focus();return}let c=Number(d);if(c<100){a.textContent=`That looks low \u2014 did you mean $${(c*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Recording\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{let p=await Rh({oppId:e.oppId,locationId:e.locationId,amount:c,userId:P()});if(!p.ok){a.textContent=p.error??"Something went wrong.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1);return}Zr(),e.onSuccess()}catch(p){m.error("MT Offer Made webhook failed",p),a.textContent=p instanceof Error?p.message:"Network error \u2014 try again.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1)}})},Fh=e=>{let t=document.createElement("button");return t.id=Ce,t.type="button",t.dataset.oppId=e,t.style.cssText=D,t.title="Record this buyer's offer on the property and advance to 'Made an Offer'",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=en();!o||!o.locationId||o.oppId!==e||Dh({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=t.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),t.style.background=n.emeraldGlow,t.style.color=n.emeraldBright,t.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",t.style.cssText=D)},4e3)}})}),t},Nh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],zh=async()=>{for(let e of Nh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Xr=!1,Xa=async()=>{if(!Xr){Xr=!0;try{await qh()}finally{Xr=!1}}},qh=async()=>{let e=en();if(!e||!e.locationId){document.getElementById(Ce)?.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),jo();return}let t=document.getElementById(Ce);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),jo());return}t&&(t.remove(),document.getElementById(`${Ce}-wrap`)?.remove());let o=await zh();if(!o){m.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await te();if(r!=="Marketing Tracker"){m.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=en();if(!a||a.oppId!==e.oppId)return;let s=Fh(e.oppId),i=document.createElement("span");i.id=`${Ce}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted MT Offer Made button on opp ${e.oppId}`),jh(e.oppId)},qo=null,Za=null,Kt,jo=()=>{qo?.disconnect(),qo=null,Za=null,Kt!==void 0&&(window.clearTimeout(Kt),Kt=void 0)},jh=e=>{if(qo&&Za===e)return;jo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Za=e,qo=new MutationObserver(()=>{Kt===void 0&&(Kt=window.setTimeout(()=>{Kt=void 0;let o=en();if(!o||o.oppId!==e){jo();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ce)?.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),jo();return}document.getElementById(Ce)||Xa()},250))}),qo.observe(t,{childList:!0,subtree:!0}))},Uh=()=>{Q("mt-offer-made",ee,()=>{!document.getElementById(Ce)&&!Xr&&Xa()})},vd=()=>{Uh(),Xa()};var Wh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",Se="ws-crm-not-interested-button",Gh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Kh=/\/v2\/location\/([A-Za-z0-9]+)/,on=()=>{let e=window.location.pathname,t=e.match(Gh),o=t?t[1]:fe();if(!o)return null;let r=e.match(Kh);return{oppId:o,locationId:r?r[1]:null}},Vh=async e=>{let t=await fetch(Wh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Not Interested webhook returned ${t.status} ${t.statusText}`);return await t.json()},Yh=e=>{let t=document.createElement("button");return t.id=Se,t.type="button",t.dataset.oppId=e,t.style.cssText=D,t.title="Close this Marketing Tracker opp as Not Interested for THIS property only",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",async()=>{let o=on();if(!o||!o.locationId||o.oppId!==e)return;let r=P(),a=t.querySelector(".ws-ni-label");t.disabled=!0,t.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let s=await Vh({oppId:o.oppId,locationId:o.locationId,userId:r});if(s?.ok)a&&(a.textContent="Marked Not Interested"),t.style.background=n.crimsonGlow,t.style.color=n.crimson,m.info(`Not Interested set for opp ${e} \u2192 ${s.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(s){m.error("Not Interested webhook failed",s),a&&(a.textContent="Try again"),t.disabled=!1,t.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),t},Jh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Qh=async()=>{for(let e of Jh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},tn=!1,ts=async()=>{if(!tn){tn=!0;try{await Zh()}finally{tn=!1}}},Zh=async()=>{let e=on();if(!e||!e.locationId){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Wo();return}let t=document.getElementById(Se);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Wo());return}t&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove());let o=await Qh();if(!o){m.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await te();if(r!=="Marketing Tracker"){m.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=on();if(!a||a.oppId!==e.oppId)return;let s=Yh(e.oppId),i=document.createElement("span");i.id=`${Se}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted Not Interested button on opp ${e.oppId}`),Xh(e.oppId)},Uo=null,es=null,Wo=()=>{Uo?.disconnect(),Uo=null,es=null},Xh=e=>{if(Uo&&es===e)return;Wo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(es=e,Uo=new MutationObserver(()=>{let o=on();if(!o||o.oppId!==e){Wo();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Wo();return}document.getElementById(Se)||ts()}),Uo.observe(t,{childList:!0,subtree:!0}))},e_=()=>{Q("not-interested",ee,()=>{!document.getElementById(Se)&&!tn&&ts()})},gd=()=>{e_(),ts()};var t_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",we="ws-crm-schedule-walkthrough-button",os="ws-crm-schedule-walkthrough-modal",o_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,r_=/\/v2\/location\/([A-Za-z0-9]+)/,an=()=>{let e=window.location.pathname,t=e.match(o_),o=t?t[1]:fe();if(!o)return null;let r=e.match(r_);return{oppId:o,locationId:r?r[1]:null}},rn=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},n_=(e,t)=>{document.getElementById(os)?.remove();let o=document.createElement("div");o.id=os,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${os} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Marketing Tracker</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Schedule Walkthrough</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">Books the buyer's property walkthrough on the Property Walkthrough calendar and advances this opp to Scheduled Walkthrough.</div>
    <label style="${s}">Date &amp; time</label>
    <input id="wsw-dt" type="datetime-local" style="${a}" />
    <label style="${s}">Duration</label>
    <select id="wsw-dur" style="${a}">
      <option value="30">30 minutes</option>
      <option value="45">45 minutes</option>
      <option value="60">60 minutes</option>
    </select>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:4px;">
      <button id="wsw-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wsw-submit" type="button" style="${ie}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",d=>{d.target===o&&i()}),document.getElementById("wsw-cancel")?.addEventListener("click",i);let l=document.getElementById("wsw-submit");l?.addEventListener("click",async()=>{let d=document.getElementById("wsw-dt")?.value||"",c=document.getElementById("wsw-dur")?.value||"30";if(!d){rn("Pick a date and time.","err");return}let p=new Date(d).toISOString();l.disabled=!0,l.textContent="Scheduling\u2026";try{if((await fetch(t_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,start_time:p,duration_min:Number(c)}),credentials:"omit"})).ok){i(),rn("Walkthrough scheduled \u2713");let h=document.querySelector(`#${we} .ws-sw-label`);h&&(h.textContent="Walkthrough Scheduled")}else l.disabled=!1,l.textContent="Schedule",rn("Scheduling failed \u2014 try again.","err")}catch(b){m.warn("[schedule-walkthrough] failed:",b),l.disabled=!1,l.textContent="Schedule",rn("Couldn't reach the scheduler. Try again.","err")}})},a_=e=>{let t=document.createElement("button");return t.id=we,t.type="button",t.dataset.oppId=e,t.style.cssText=D,t.title="Schedule this buyer's property walkthrough",t.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=an();!o||!o.locationId||o.oppId!==e||n_(o.oppId,o.locationId)}),t},s_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],i_=async()=>{for(let e of s_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},nn=!1,ns=async()=>{if(!nn){nn=!0;try{await l_()}finally{nn=!1}}},l_=async()=>{let e=an();if(!e||!e.locationId){document.getElementById(we)?.remove(),document.getElementById(`${we}-wrap`)?.remove(),Ko();return}let t=document.getElementById(we);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${we}-wrap`)?.remove(),Ko());return}t&&(t.remove(),document.getElementById(`${we}-wrap`)?.remove());let o=await i_();if(!o){m.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await te();if(r!=="Marketing Tracker"){m.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=an();if(!a||a.oppId!==e.oppId)return;let s=a_(e.oppId),i=document.createElement("span");i.id=`${we}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted Schedule Walkthrough button on opp ${e.oppId}`),d_(e.oppId)},Go=null,rs=null,Vt,Ko=()=>{Go?.disconnect(),Go=null,rs=null,Vt!==void 0&&(window.clearTimeout(Vt),Vt=void 0)},d_=e=>{if(Go&&rs===e)return;Ko();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(rs=e,Go=new MutationObserver(()=>{Vt===void 0&&(Vt=window.setTimeout(()=>{Vt=void 0;let o=an();if(!o||o.oppId!==e){Ko();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(we)?.remove(),document.getElementById(`${we}-wrap`)?.remove(),Ko();return}document.getElementById(we)||ns()},250))}),Go.observe(t,{childList:!0,subtree:!0}))},c_=()=>{Q("schedule-walkthrough",ee,()=>{!document.getElementById(we)&&!nn&&ns()})},fd=()=>{c_(),ns()};var p_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",Yt="ws-crm-resend-deal-link-wrap",m_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,b_=/\/v2\/location\/([A-Za-z0-9]+)/,ln=()=>{let e=window.location.pathname,t=e.match(m_),o=t?t[1]:fe();if(!o)return null;let r=e.match(b_);return{oppId:o,locationId:r?r[1]:null}},u_=async e=>{let t=await fetch(p_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,channel:e.channel,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Resend webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},h_=e=>e.replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t]||t),xd=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,ss=(e,t)=>{e.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=D,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${xd(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>__(e,t)),e.appendChild(o)},__=(e,t)=>{e.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,s=(l,d)=>{let c=document.createElement("button");return c.type="button",c.textContent=l,c.style.cssText=a,c.addEventListener("click",()=>void y_(e,t,d,o)),c};o.appendChild(s("Text","sms")),o.appendChild(s("Email","email"));let i=document.createElement("button");i.type="button",i.textContent="\u2715",i.title="Cancel",i.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,i.addEventListener("click",()=>ss(e,t)),o.appendChild(i),e.appendChild(o)},y_=async(e,t,o,r)=>{let a=ln();if(!(!a||!a.locationId||a.oppId!==t)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let s=await u_({oppId:a.oppId,locationId:a.locationId,channel:o,userId:P()});if(s?.ok)r.innerHTML=`${xd(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,m.info(`Resend deal link (${o}) for opp ${t}`);else throw new Error(s?.error||"Send failed")}catch(s){let i=s instanceof Error?s.message:"Send failed";m.error("Resend deal link failed",s),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${h_(i)}</span>`}window.setTimeout(()=>ss(e,t),3500)}},v_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],g_=async()=>{for(let e of v_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},sn=!1,is=async()=>{if(!sn){sn=!0;try{await f_()}finally{sn=!1}}},f_=async()=>{let e=ln();if(!e||!e.locationId){document.getElementById(Yt)?.remove(),Yo();return}let t=document.getElementById(Yt);if(t&&t.dataset.oppId===e.oppId){let i=U();i!==null&&i!=="Marketing Tracker"&&(t.remove(),Yo());return}t&&t.remove();let o=await g_();if(!o)return;let r=await te();if(r!=="Marketing Tracker"){m.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=ln();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=Yt,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",Z(o).appendChild(s),ss(s,e.oppId),m.debug(`Mounted Resend Deal Link button on opp ${e.oppId}`),x_(e.oppId)},Vo=null,as=null,Yo=()=>{Vo?.disconnect(),Vo=null,as=null},x_=e=>{if(Vo&&as===e)return;Yo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(as=e,Vo=new MutationObserver(()=>{let o=ln();if(!o||o.oppId!==e){Yo();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Yt)?.remove(),Yo();return}document.getElementById(Yt)||is()}),Vo.observe(t,{childList:!0,subtree:!0}))},w_=()=>{Q("resend-deal-link",ee,()=>{!document.getElementById(Yt)&&!sn&&is()})},wd=()=>{w_(),is()};var k_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/referred",E_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/mt-opps",Zt="ws-crm-add-referral-wrap",dn="ws-crm-add-referral-contact-btn",ds="ws-crm-contact-actions-bar",ke="ws-referral-modal",$_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,T_=/\/v2\/location\/([A-Za-z0-9]+)/,Ue=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),$d=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,C_=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;opacity:0;pointer-events:none;",document.body.appendChild(t),t.select();let o=document.execCommand("copy");return t.remove(),o}catch{return!1}},S_=e=>{let t=e.trim();if(!t)return{ok:!0,value:""};let o=t.replace(/\D/g,"");return o.length===11&&o.startsWith("1")&&(o=o.slice(1)),o.length!==10?{ok:!1,value:""}:{ok:!0,value:`+1${o}`}},kt=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;`,Jt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,ms=e=>{document.getElementById(ke)?.remove();let t=document.createElement("div");t.id=ke,t.style.cssText=`
    position: fixed; inset: 0; z-index: 999999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 94vw);
    max-height: 90vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.propertyLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Ue(e.propertyLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>';o.innerHTML=`
    <style id="ws-referral-modal-style">
      #${ke} input::placeholder,
      #${ke} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      #${ke} input:-webkit-autofill,
      #${ke} input:-webkit-autofill:hover,
      #${ke} input:-webkit-autofill:focus,
      #${ke} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${y.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
      #${ke} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Add Referral Buyer</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Creates the buyer, links them to this property's Marketing Tracker, and gets their personalized deal link. Re-adding the same person just returns their existing link.</div>
    ${r}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${Jt("First Name *")}
        <input id="ws-ref-first" type="text" autocomplete="off" placeholder="Jane" style="${kt}">
      </div>
      <div>
        ${Jt("Last Name")}
        <input id="ws-ref-last" type="text" autocomplete="off" placeholder="Doe" style="${kt}">
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${Jt("Phone")}
        <input id="ws-ref-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${kt}">
      </div>
      <div>
        ${Jt("Email")}
        <input id="ws-ref-email" type="email" autocomplete="off" placeholder="jane@company.com" style="${kt}">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      ${Jt("Buyer Status")}
      <select id="ws-ref-status" style="${kt} cursor: pointer;">
        <option value="Unqualified" selected>Unqualified (partial address on deal page)</option>
        <option value="Qualified">Qualified (full address on deal page)</option>
      </select>
    </div>

    <div style="margin-bottom: 14px;">
      ${Jt("Note (optional)")}
      <textarea id="ws-ref-note" rows="2" autocomplete="off" placeholder="e.g. Husband makes the buying decisions \u2014 wife is on the deed" style="${kt} resize: vertical;"></textarea>
    </div>

    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-ref-send" type="checkbox" checked>
      <span id="ws-ref-send-label">Text them the link now</span>
    </label>
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-ref-close" type="checkbox">
      <span>Close original buyer's opp for this property <span style="color:${n.ash};">(Lost - Withdrew)</span></span>
    </label>

    <div id="ws-ref-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-ref-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-ref-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add Buyer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Ht(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-ref-cancel")?.addEventListener("click",()=>t.remove());let a=o.querySelector("#ws-ref-first"),s=o.querySelector("#ws-ref-phone"),i=o.querySelector("#ws-ref-email"),l=o.querySelector("#ws-ref-send-label");window.setTimeout(()=>a?.focus(),0);let d=()=>{if(!l)return;let c=!!s?.value.trim(),p=!!i?.value.trim();l.textContent=!c&&p?"Email them the link now":"Text them the link now"};s?.addEventListener("input",d),i?.addEventListener("input",d),o.querySelector("#ws-ref-submit")?.addEventListener("click",async()=>{let c=o.querySelector("#ws-ref-err"),p=f=>{c&&(c.textContent=f)};p("");let b=(a?.value||"").trim(),h=(o.querySelector("#ws-ref-last")?.value||"").trim(),_=(s?.value||"").trim(),g=(i?.value||"").trim().toLowerCase(),T=o.querySelector("#ws-ref-status")?.value||"Unqualified",x=(o.querySelector("#ws-ref-note")?.value||"").trim(),C=o.querySelector("#ws-ref-send")?.checked??!0,v=o.querySelector("#ws-ref-close")?.checked??!1;if(!b){p("First name is required.");return}let E=S_(_);if(!E.ok){p("Phone must be a 10-digit US number.");return}if(g&&!/.+@.+\..+/.test(g)){p("That email doesn't look valid.");return}if(!E.value&&!g){p("Add a phone or an email for the new buyer.");return}let w=o.querySelector("#ws-ref-submit");w&&(w.disabled=!0,w.textContent="Adding\u2026",w.style.opacity="0.7");let k=()=>{w&&(w.disabled=!1,w.textContent="Add Buyer",w.style.opacity="1")};try{let f=await fetch(k_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,referring_mt_opp_id:e.referringOppId,referred:{first_name:b,last_name:h,phone:E.value,email:g,buyer_status:T,note:x},send_link:C,close_original:v,triggered_by_user_id:P()||""}),credentials:"omit"});if(!f.ok)throw new Error(`Webhook returned ${f.status} ${f.statusText}`);let $=await f.json(),S=Array.isArray($)?$[0]:$;if(!S?.ok){p(S?.error||"Something went wrong \u2014 try again."),k();return}m.info(`Referral buyer added (opp ${S.mt_opp_id||"?"})`),L_(o,S,e,`${b} ${h}`.trim())}catch(f){m.error("Add referral buyer failed",f),p(`Network error: ${f instanceof Error?f.message:"request failed"}`),k()}})},Qt=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;gap:6px;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},L_=(e,t,o,r)=>{let a=[];t.contact_created===!1&&a.push(Qt("Existing buyer \u2014 profile reused","info")),t.mt_opp_deduped?a.push(Qt(`Existing deal reused${t.mt_opp_stage?` \u2014 ${Ue(t.mt_opp_stage)}`:""}`,"info")):t.mt_opp_created&&a.push(Qt(`Deal created${t.mt_opp_stage?` \u2014 ${Ue(t.mt_opp_stage)}`:""}`,"good")),t.sent?a.push(Qt(t.sent_channel==="email"?"Email sent \u2713":"Text sent \u2713","good")):t.send_error&&a.push(Qt(`Not sent \u2014 ${Ue(t.send_error)}`,"warn")),t.original_closed&&a.push(Qt("Original buyer's deal closed (Lost - Withdrew)","info"));let s=(t.warnings||[]).map(d=>`<div style="font-size:11px;color:${n.ash};margin-top:4px;">\xB7 ${Ue(d)}</div>`).join(""),i=t.link?`
      <div style="margin: 16px 0 4px;">
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Their personalized deal link</div>
        <span style="display:flex;gap:8px;align-items:center;">
          <input id="ws-ref-link" type="text" readonly value="${Ue(t.link)}" style="${kt} flex:1; font-family:${u.mono}; font-size:12px;">
          <button id="ws-ref-copy" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 16px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600; flex-shrink:0;">Copy</button>
        </span>
      </div>`:`<div style="margin: 16px 0 4px; color:${n.amber}; font-size:13px;">No deal link available \u2014 check the property's landing page setup.</div>`;e.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Referral Added</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Ue(r||"Buyer")} is set up</div>
    <div style="line-height: 1;">${a.join("")}</div>
    ${s}
    ${i}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      <button id="ws-ref-another" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Add Another</button>
      <button id="ws-ref-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-ref-done")?.addEventListener("click",()=>{document.getElementById(ke)?.remove()}),e.querySelector("#ws-ref-another")?.addEventListener("click",()=>{ms(o)});let l=e.querySelector("#ws-ref-copy");l?.addEventListener("click",async()=>{let d=await C_(t.link||"");l.textContent=d?"Copied \u2713":"Copy failed",window.setTimeout(()=>{l.textContent="Copy"},2e3)})},A_=e=>new Promise(t=>{document.getElementById(ke)?.remove();let o=document.createElement("div");o.id=ke,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-ref-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${u.sans};">
        <div style="font-size:14px;font-weight:500;">${Ue(i.property_address||"(no address)")}</div>
        ${i.stage_name?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Ue(i.stage_name)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This buyer is on ${e.length} properties</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is the referral about?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-ref-pick-cancel" type="button" style="${D} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-ref-pick-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-ref-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),cn=()=>{let e=window.location.pathname,t=e.match($_),o=t?t[1]:fe();if(!o)return null;let r=e.match(T_);return{oppId:o,locationId:r?r[1]:null}},M_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],I_=async()=>{for(let e of M_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},pn=!1,cs=async()=>{if(!pn){pn=!0;try{await P_()}finally{pn=!1}}},P_=async()=>{let e=cn();if(!e||!e.locationId){document.getElementById(Zt)?.remove(),Qo();return}let t=document.getElementById(Zt);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Marketing Tracker"&&(t.remove(),Qo());return}t&&t.remove();let o=await I_();if(!o)return;let r=await te();if(r!=="Marketing Tracker"){m.debug(`[add-referral] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=cn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=Zt,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:3;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=D,i.title="The buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal for this property and gets their personalized link",i.innerHTML=`${$d(n.amber)}<span>Add Referral Buyer</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=cn();!l||!l.locationId||ms({tenantId:l.locationId,referringOppId:l.oppId})}),s.appendChild(i),Z(o).appendChild(s),m.debug(`Mounted Add Referral Buyer button on opp ${e.oppId}`),O_(e.oppId)},Jo=null,ps=null,Qo=()=>{Jo?.disconnect(),Jo=null,ps=null},O_=e=>{if(Jo&&ps===e)return;Qo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ps=e,Jo=new MutationObserver(()=>{let o=cn();if(!o||o.oppId!==e){Qo();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Zt)?.remove(),Qo();return}document.getElementById(Zt)||cs()}),Jo.observe(t,{childList:!0,subtree:!0}))},kd=(e,t)=>{let o=e.querySelector("span");if(!o)return;let r=e.style.color;o.textContent=t.length>72?`${t.slice(0,69)}\u2026`:t,e.style.color=n.crimson,window.setTimeout(()=>{o.textContent="Add Referral Buyer",e.style.color=r},4500)},B_=async e=>{let t=j();if(!t||!t.locationId)return;let o=e.querySelector("span");o&&(o.textContent="Loading deals\u2026"),e.disabled=!0;try{let r=await fetch(`${E_}?tenant_id=${encodeURIComponent(t.locationId)}&contact_id=${encodeURIComponent(t.contactId)}`,{credentials:"omit"}),a=await r.json(),s=Array.isArray(a)?a[0]:a;if(!s?.ok)throw new Error(s?.error||`Lookup failed (${r.status})`);let i=s.opps||[];if(o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,!i.length){kd(e,"No open Marketing Tracker deals for this buyer");return}let l=i.length===1?i[0]:await A_(i);if(!l)return;ms({tenantId:t.locationId,referringOppId:l.mt_opp_id,propertyLabel:l.property_address})}catch(r){m.error("Add referral buyer lookup failed",r),o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,kd(e,r instanceof Error?r.message:"Lookup failed")}},ls=!1,Td=async()=>{if(!ls){ls=!0;try{await H_()}finally{ls=!1}}},H_=async()=>{if(!j())return;let t=document.getElementById(ds);if(!t)try{t=await I(`#${ds}`,{timeoutMs:ut+2e3})}catch{t=null}if(!t)return;if(t.dataset.contactKind!=="buyer"){document.getElementById(dn)?.remove();return}let o=j();if(!o||!o.locationId)return;let r=document.getElementById(dn);if(r&&r.dataset.contactId===o.contactId&&r.parentElement===t)return;r?.remove();let a=document.createElement("button");a.type="button",a.id=dn,a.dataset.contactId=o.contactId,a.style.cssText=D,a.style.order="6",a.title="This buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal and gets their personalized link",a.innerHTML=`${$d(n.amber)}<span>Add Referral Buyer</span>`,a.addEventListener("click",()=>void B_(a)),t.appendChild(a),m.debug(`Mounted Add Referral Buyer on buyer contact ${o.contactId}`)},Ed=!1,R_=()=>{Ed||(Ed=!0,window.setInterval(()=>{let e=document.getElementById(ds);!e||e.dataset.contactKind!=="buyer"||document.getElementById(dn)||Td()},3e3))},Cd=()=>{Q("add-referral-buyer",ee,()=>{!document.getElementById(Zt)&&!pn&&cs()}),cs(),Td(),R_()};var D_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",F_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",Le="ws-crm-reduce-price-button",Sd="ws-crm-reduce-price-modal",N_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,z_=/\/v2\/location\/([A-Za-z0-9]+)/,un=()=>{let e=window.location.pathname,t=e.match(N_);if(!t)return null;let o=e.match(z_);return{oppId:t[1],locationId:o?o[1]:null}},q_=async e=>{let t=await fetch(D_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,dispo_opp_id:e.oppId,new_price:e.newPrice,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Reduce Price webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},j_=async(e,t)=>{try{let o=new URL(F_);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.total_will_text=="number"?a.total_will_text:null}catch(o){return m.warn("[reduce-price] buyer-count fetch failed:",o),null}},U_=(e,t)=>{let o=t!==null?`${t} buyer${t===1?"":"s"}`:"all eligible buyers";return`Confirm that you wish to reduce the price of this property to $${Math.round(e).toLocaleString("en-US")} and resend it to ${o}.

Every one of them gets the new-price SMS immediately. This cannot be reversed.`},mn=()=>{document.getElementById(Sd)?.remove()},W_=e=>{mn();let t=document.createElement("div");t.id=Sd,t.style.cssText=`
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
    border-radius: ${y.lg};
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
    ">Updates the Property record's listing price and blasts the new number to <span id="ws-reduce-count" style="color:${n.bone};font-weight:600;">active interested buyers + previously-withdrew buyers</span> on this property. One click. No separate save.</div>

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
          border-radius: ${y.sm};
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
        border-radius: ${y.sm};
        font-family: ${u.sans};
        font-size: 13px;
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-reduce-submit" type="button" style="
        background: ${n.amber};
        border: 1px solid ${n.amber};
        color: ${n.obsidian};
        padding: 8px 16px;
        border-radius: ${y.sm};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      ">Reduce Price</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),s=o.querySelector("#ws-reduce-cancel"),i=o.querySelector("#ws-reduce-submit"),l=null;j_(e.oppId,e.locationId).then(c=>{l=c;let p=o.querySelector("#ws-reduce-count");p&&c!==null&&(p.textContent=`${c} buyer${c===1?"":"s"} (active + previously-withdrew)`)}),setTimeout(()=>r?.focus(),50),r?.addEventListener("input",()=>{let p=r.value.replace(/[^0-9.]/g,"").split(".");r.value=p[0]+(p.length>1?"."+p.slice(1).join(""):"")});let d=c=>{c.key==="Enter"?(c.preventDefault(),i?.click()):c.key==="Escape"&&(c.preventDefault(),s?.click())};o.addEventListener("keydown",d),t.addEventListener("click",c=>{c.target===t&&mn()}),s?.addEventListener("click",()=>{mn()}),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let c=r.value.trim();if(!c){a.textContent="Enter a new listing price.",r.focus();return}let p=parseFloat(c);if(!Number.isFinite(p)||p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}if(window.confirm(U_(p,l))){a.textContent="",i.disabled=!0,i.textContent="Reducing\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{await q_({oppId:e.oppId,locationId:e.locationId,newPrice:p,userId:P()}),mn(),e.onSuccess()}catch(b){m.error("Reduce Price webhook failed",b),a.textContent=b instanceof Error?b.message:"Something went wrong. Try again.",i.disabled=!1,i.textContent="Reduce Price",i.style.opacity="1",s&&(s.disabled=!1)}}})},G_=(e,t)=>{let o=document.createElement("button");return o.id=Le,o.type="button",o.dataset.oppId=e,o.style.cssText=D,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
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
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=un();!r||!r.locationId||r.oppId!==e||W_({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),s=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,s&&(s.style.background=n.emerald,s.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=D,s&&(s.style.background=n.amber,s.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},K_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],V_=async()=>{for(let e of K_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},bn=!1,us=async()=>{if(!bn){bn=!0;try{await Y_()}finally{bn=!1}}},Y_=async()=>{let e=un();if(!e||!e.locationId){document.getElementById(Le)?.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Xo();return}let t=document.getElementById(Le);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Xo());return}t&&(t.remove(),document.getElementById(`${Le}-wrap`)?.remove());let o=await V_();if(!o){m.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await te();if(r!=="Disposition"){m.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=un();if(!a||a.oppId!==e.oppId)return;let s=G_(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Le}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted Reduce Price button on opp ${e.oppId}`),J_(e.oppId)},Zo=null,bs=null,Xt,Xo=()=>{Zo?.disconnect(),Zo=null,bs=null,Xt!==void 0&&(window.clearTimeout(Xt),Xt=void 0)},J_=e=>{if(Zo&&bs===e)return;Xo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(bs=e,Zo=new MutationObserver(()=>{Xt===void 0&&(Xt=window.setTimeout(()=>{Xt=void 0;let o=un();if(!o||o.oppId!==e){Xo();return}let r=U();if(r!==null&&r!=="Disposition"){document.getElementById(Le)?.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Xo();return}document.getElementById(Le)||us()},250))}),Zo.observe(t,{childList:!0,subtree:!0}))},Q_=()=>{Q("reduce-price",ee,()=>{!document.getElementById(Le)&&!bn&&us()})},Ld=()=>{Q_(),us()};var eo="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",hn="deals.reinvestos.com";var Ae="ws-crm-edit-landing-button",Z_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,X_=/\/v2\/location\/([A-Za-z0-9]+)/,yn=()=>{let e=window.location.pathname,t=e.match(Z_);if(!t)return null;let o=e.match(X_);return{oppId:t[1],locationId:o?o[1]:null}},ey=(e,t)=>{let o=new URL(`https://${hn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",eo);let r=P();return r&&o.searchParams.set("user",r),o.toString()},ty=(e,t)=>{let o=document.createElement("button");return o.id=Ae,o.type="button",o.dataset.oppId=e,o.style.cssText=D,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Landing Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=yn();if(!r||!r.locationId||r.oppId!==e)return;if(!eo){m.warn("[edit-landing] editor session key not configured in this build");return}let a=ey(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let s=o.querySelector(".ws-elp-label");if(s){let i=s.textContent;s.textContent="Opening editor\u2026",setTimeout(()=>{s.textContent==="Opening editor\u2026"&&(s.textContent=i)},2500)}}),o},oy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],ry=async()=>{for(let e of oy)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},_n=!1,_s=async()=>{if(!_n){_n=!0;try{await ny()}finally{_n=!1}}},ny=async()=>{let e=yn();if(!e||!e.locationId){document.getElementById(Ae)?.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),tr();return}let t=document.getElementById(Ae);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),tr());return}t&&(t.remove(),document.getElementById(`${Ae}-wrap`)?.remove());let o=await ry();if(!o)return;let r=await te();if(r!=="Disposition"){m.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=yn();if(!a||a.oppId!==e.oppId)return;let s=ty(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Ae}-wrap`,i.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted Edit Landing Page button on opp ${e.oppId}`),ay(e.oppId)},er=null,hs=null,to,tr=()=>{er?.disconnect(),er=null,hs=null,to!==void 0&&(window.clearTimeout(to),to=void 0)},ay=e=>{if(er&&hs===e)return;tr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(hs=e,er=new MutationObserver(()=>{to===void 0&&(to=window.setTimeout(()=>{to=void 0;let o=yn();if(!o||o.oppId!==e){tr();return}let r=U();if(r!==null&&r!=="Disposition"){document.getElementById(Ae)?.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),tr();return}document.getElementById(Ae)||_s()},250))}),er.observe(t,{childList:!0,subtree:!0}))},sy=()=>{Q("edit-landing-page",ee,()=>{!document.getElementById(Ae)&&!_n&&_s()})},Ad=()=>{sy(),_s()};var Pd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",iy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",ro="ws-crm-publish-button",or="ws-crm-publish-wrap",gn="ws-crm-publish-dropdown",ly=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,dy=/\/v2\/location\/([A-Za-z0-9]+)/,ys=()=>{let e=window.location.pathname,t=e.match(ly);if(!t)return null;let o=e.match(dy);return{oppId:t[1],locationId:o?o[1]:null}},Md=async(e,t)=>{try{let o=await fetch(Pd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,dry_run:!0,triggered_by_user_id:P()??null}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[publish] dry_run fetch failed:",o),null}},cy=async(e,t)=>{try{let o=new URL(iy);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.open_count=="number"?a.open_count:null}catch(o){return m.warn("[publish] buyer-count fetch failed:",o),null}},py=e=>`Publish this deal and start the buyer blast?

${e!==null?`${e} matched buyer${e===1?"":"s"}`:"all matched buyers"} will be texted about this property \u2014 VIP & Qualified buyers get the full property SMS immediately, Unqualified buyers start the teaser sequence.

This cannot be reversed.`,my=async(e,t)=>{let o=await fetch(Pd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,triggered_by_user_id:P()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},by=(e,t)=>{if(!eo){m.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${hn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",eo);let r=P();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},Ge=()=>{document.getElementById(gn)?.remove()},Id=(e,t,o,r,a)=>{Ge();let s=document.createElement("div");s.id=gn;let i=t.getBoundingClientRect();s.style.cssText=`
    position: fixed;
    top: ${i.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-i.right)}px;
    z-index: 999998;
    min-width: 300px;
    max-width: 420px;
    max-height: 70vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.md};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    padding: 14px 16px;
    font-family: ${u.sans};
  `;let l=e.length,d=e.filter(T=>T.filled).length,c=d===l,p=document.createElement("div");p.innerHTML=`
    <div style="
      font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${c?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${c?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${d} of ${l} ready</div>
  `,s.appendChild(p),e.forEach(T=>{let x=document.createElement("div");x.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${T.filled?n.bone:n.ash};
    `;let C=T.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;x.innerHTML=`${C}<span style="flex: 1;">${T.label}</span>`,s.appendChild(x)});let b=document.createElement("div");b.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let h=document.createElement("button");h.type="button",h.textContent="Open editor to finish \u2192",h.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${y.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,h.addEventListener("click",T=>{T.stopPropagation(),by(o,r)}),b.appendChild(h);let _=document.createElement("button");_.type="button",_.textContent="Re-check",_.title="Re-check after editing the page",_.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,_.addEventListener("click",T=>{T.stopPropagation(),Ge(),a()}),b.appendChild(_),s.appendChild(b),document.body.appendChild(s);let g=T=>{let x=T.target;!s.contains(x)&&!t.contains(x)&&(Ge(),document.removeEventListener("click",g))};window.setTimeout(()=>document.addEventListener("click",g),0)},We=(e,t)=>{let o=e.querySelector(".ws-pub-label"),r=e.querySelector(".ws-pub-dot"),a=e.querySelector(".ws-pub-chevron"),s="transparent",i=n.steel,l=n.bone,d=n.coolGray,c="Publish Deal",p="",b="pointer",h="1";switch(t.status){case"checking":i=n.steel,l=n.ash,c="Checking\u2026",b="wait",h="0.8";break;case"ready":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="Publish Deal";break;case"incomplete":{let _=t.checks?.filter(T=>T.filled).length??0,g=t.checks?.length??0;i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${g} ready`,p="\u25BE";break}case"publishing":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="Publishing\u2026",b="wait",h="0.8";break;case"published":s="transparent",i=n.steel,l=n.ash,d=n.emerald,c="Deal Published",b="default",h="0.9";break;case"error":i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=b,e.style.opacity=h,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="published"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},uy=(e,t)=>{let o=document.createElement("button");o.id=ro,o.type="button",o.dataset.oppId=e,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${ie}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};We(o,r);let a=!1,s=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let _=await Md(e,t);if(!_||!Array.isArray(_.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},We(o,r);return}r={status:_.published?"published":_.ready?"ready":"incomplete",checks:_.checks},We(o,r),document.getElementById(gn)&&r.checks&&Id(r.checks,o,e,t,()=>void s())}finally{a=!1}}},i=async()=>{r={status:"publishing",checks:r.checks},We(o,r),Ge();try{let[_,g]=await Promise.all([Md(e,t),cy(e,t)]);if(_?.published){r={status:"published"},We(o,r),m.info(`[publish] pre-publish check: opp ${e} already published \u2014 skipping`);return}if(!window.confirm(py(g))){r={status:"ready",checks:r.checks},We(o,r),m.info(`[publish] rep cancelled publish confirm for opp ${e}`);return}let T=await my(e,t);if(T.ok&&T.published)r={status:"published"},We(o,r),m.info(`[publish] published opp ${e}`);else if(T.missing&&T.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},We(o,r);else throw new Error(T.error||"Publish failed")}catch(_){let g=_ instanceof Error?_.message:"Publish failed";m.error("[publish] publish failed",_),r={status:"error",message:g.length>28?"Error \u2014 try again":g},We(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":i();break;case"incomplete":{document.getElementById(gn)?Ge():r.checks&&Id(r.checks,o,e,t,()=>void s());break}case"error":s();break}}),s();let l=Date.now(),d=8e3,c=()=>{o.isConnected&&(a||r.status==="publishing"||r.status==="published"||Date.now()-l<d||(l=Date.now(),s()))},p=()=>c(),b=()=>{document.visibilityState==="visible"&&c()};window.addEventListener("focus",p),document.addEventListener("visibilitychange",b);let h=window.setInterval(()=>{document.body.contains(o)||(window.removeEventListener("focus",p),document.removeEventListener("visibilitychange",b),window.clearInterval(h))},5e3);return o},hy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],_y=async()=>{for(let e of hy)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},vn=!1,gs=async()=>{if(!vn){vn=!0;try{await yy()}finally{vn=!1}}},yy=async()=>{let e=ys();if(!e||!e.locationId){document.getElementById(ro)?.remove(),document.getElementById(or)?.remove(),Ge(),nr();return}let t=document.getElementById(ro);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(or)?.remove(),Ge(),nr());return}t&&(t.remove(),document.getElementById(or)?.remove(),Ge());let o=await _y();if(!o)return;let r=await te();if(r!=="Disposition"){m.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=ys();if(!a||a.oppId!==e.oppId||!a.locationId)return;let s=uy(e.oppId,a.locationId),i=document.createElement("span");i.id=or,i.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",i.appendChild(s),Z(o).appendChild(i),m.debug(`Mounted Publish button on opp ${e.oppId}`),vy(e.oppId)},rr=null,vs=null,oo,nr=()=>{rr?.disconnect(),rr=null,vs=null,oo!==void 0&&(window.clearTimeout(oo),oo=void 0)},vy=e=>{if(rr&&vs===e)return;nr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(vs=e,rr=new MutationObserver(()=>{oo===void 0&&(oo=window.setTimeout(()=>{oo=void 0;let o=ys();if(!o||o.oppId!==e){nr();return}let r=U();if(r!==null&&r!=="Disposition"){document.getElementById(ro)?.remove(),document.getElementById(or)?.remove(),Ge(),nr();return}document.getElementById(ro)||gs()},250))}),rr.observe(t,{childList:!0,subtree:!0}))},gy=()=>{Q("publish-button",ee,()=>{!document.getElementById(ro)&&!vn&&gs()})},Od=()=>{gy(),gs()};var Bd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",Hd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var fy=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],Rd=e=>`ws-crm-map-links-${e}`,Dd=()=>Array.from(document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']")),fn=(e,t)=>{let o=t.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let s=a.querySelector("input, textarea");if(s&&(s.value||"").trim())return s.value.trim()}return""},Fd=(e,t=Dd())=>{let o=fn(t,e.addr),r=fn(t,e.city),a=fn(t,e.state),s=fn(t,e.zip),i;return r&&o&&o.toLowerCase().includes(r.toLowerCase())?i=o:i=[o,r,a,s].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},xy=e=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`,wy=e=>`https://www.zillow.com/homes/${e.replace(/\s+/g,"-")}_rb`,ky=(e,t)=>{let{full:o,hasAny:r}=Fd(e);r&&window.open(t(o),"_blank","noopener,noreferrer")},Ey=e=>{let t=document.createElement("span");t.id=Rd(e.key),t.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",t.appendChild(o);let r=(a,s,i)=>{let l=document.createElement("img");return l.src=a,l.title=s,l.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",l.addEventListener("mouseenter",()=>{l.style.transform="scale(1.12)"}),l.addEventListener("mouseleave",()=>{l.style.transform="scale(1)"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),ky(e,i)}),l};return t.appendChild(r(Bd,"Open in Google Maps",xy)),t.appendChild(r(Hd,"Search on Zillow",wy)),t},$y=(e,t)=>{let o=t.addr.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},Nd=()=>{let e=Dd();if(e.length)for(let t of fy){if(document.getElementById(Rd(t.key)))continue;let{hasAny:o}=Fd(t,e);if(!o)continue;let r=$y(e,t);r&&(r.style.display="flex",r.style.alignItems="center",r.style.width="100%",r.appendChild(Ey(t)),m.debug(`[map-links] injected on "${t.addr}"`))}},no=null,ao,Ty=()=>{let e=Pt();return e==="contact-detail"||e==="other"},Cy=()=>{no||(no=new MutationObserver(()=>{ao===void 0&&(ao=window.setTimeout(()=>{ao=void 0;try{Nd()}catch(e){m.warn("[map-links] ensureInjected failed",e)}},300))}),no.observe(document.body,{childList:!0,subtree:!0}))},zd=()=>{no&&(no.disconnect(),no=null),ao!==void 0&&(window.clearTimeout(ao),ao=void 0)},qd=()=>{if(!Ty()){zd();return}Cy(),Nd()},jd=()=>{zd()};var Ud="ws-crm-hide-launchpad",fs=/\/launchpad\/?$/,xs=()=>{if(!Ot()){if(!document.getElementById(Ud)){let e=document.createElement("style");e.id=Ud,e.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(e),m.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(fs.test(location.pathname)){let e=location.pathname.replace(fs,"/dashboard")+location.search;m.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${e}`);try{history.replaceState({},"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.setTimeout(()=>{(!!document.getElementById("launchpad-main")||!!document.querySelector('[class*="launchpad-container"]'))&&!fs.test(location.pathname)&&(m.warn("[hide-launchpad] SPA redirect ignored by router \u2014 hard nav fallback"),location.replace(e))},2e3)}catch(t){m.warn("[hide-launchpad] SPA redirect failed, falling back to hard nav",t),location.replace(e)}}}};var Sy=[{label:"Buy-Box Entries"},{label:"Memberships"}],Wd=e=>{e.size!==0&&document.querySelectorAll(".nav-title").forEach(t=>{let o=(t.textContent||"").trim().toLowerCase();if(!e.has(o))return;let r=t.closest("a")||t.closest("li")||t.parentElement;r&&r.style.display!=="none"&&(r.style.setProperty("display","none","important"),m.info(`[hide-nav-items] hid "${t.textContent?.trim()}"`))})},ws=()=>{let e=Ot(),t=new Set(Sy.filter(o=>o.agencyToo||!e).map(o=>o.label.trim().toLowerCase()));if(t.size!==0){Wd(t);for(let o of[150,500,1200,2500])setTimeout(()=>Wd(t),o)}};var Ly=[{from:"Payments",to:"Contracts"}],Ay=".nav-title, .topmenu-navtitle",Gd=()=>{document.querySelectorAll(Ay).forEach(e=>{let t=(e.textContent||"").trim(),o=Ly.find(r=>r.from===t);o&&(e.textContent=o.to,m.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},ks=()=>{Gd();for(let e of[150,500,1200,2500])setTimeout(Gd,e)};var Kd="/payments/proposals-estimates",My=/\/payments\/invoices\/?$/,Iy=/\/payments\//,Py='#sb_payments, a[meta="payments"]',Yd=(e=0)=>{if(e>25)return;let t=location.pathname;if(!t.includes(Kd)&&!(e>3&&!Iy.test(t))){if(My.test(t)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(Kd));if(o){m.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>Yd(e+1),120)}},Vd=!1,Oy=()=>{Vd||(Vd=!0,document.addEventListener("click",e=>{e.target?.closest?.(Py)&&setTimeout(()=>Yd(),80)},!0),m.info("[contracts-section] section-entry redirect armed"))},Es=()=>{Oy()};var Jd=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],Qd="ws-crm-hide-topmenu-tabs",$s=()=>{if(document.getElementById(Qd))return;let e=Jd.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),t=document.createElement("style");t.id=Qd,t.textContent=`${e}{display:none !important;}`,(document.head||document.documentElement).appendChild(t),m.info(`[hide-topmenu-tabs] hid ${Jd.length} top tabs`)};var ec="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",nt="ws-crm-send-to-closing-office-button",Et="ws-crm-send-to-title-co-wrap",kn="ws-crm-stc-dropdown",By=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Hy=/\/v2\/location\/([A-Za-z0-9]+)/,ir=()=>{let e=window.location.pathname,t=e.match(By);if(!t)return null;let o=e.match(Hy);return{oppId:t[1],locationId:o?o[1]:null}},Ry=5*60*1e3,Ss=e=>`ws-crm-stc-cache:${e}`,Dy=e=>{try{let t=window.localStorage.getItem(Ss(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>Ry||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},Fy=(e,t)=>{try{window.localStorage.setItem(Ss(e),JSON.stringify(t))}catch{}},tc=e=>{try{window.localStorage.removeItem(Ss(e))}catch{}},Ts="ws-crm:opp-fields-updated",oc=e=>{if(e){tc(e);try{window.dispatchEvent(new CustomEvent(Ts,{detail:{oppId:e}}))}catch{}}},Ny=async(e,t)=>{try{let o=await fetch(ec,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:P()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[stc] dry_run fetch failed:",o),null}},zy=async(e,t,o)=>{let r=await fetch(ec,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:P()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},qy=(e,t)=>{let o=e?.name?`${e.name}${e.email?` (${e.email})`:""}`:"the closing agent",r=e?.closingOffice?` at ${e.closingOffice}`:"",a=e?.propertyAddress?` for ${e.propertyAddress}`:"",s=t?`

\u26A0\uFE0F This deal was already sent on ${new Date(t).toLocaleString()} \u2014 this will send it AGAIN.`:"";return`Send this deal${a} to the closing office now?

This emails the executed Purchase + Assignment contracts to ${o}${r}. This cannot be undone.`+s},jy=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!t)return!1;let o=t.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===e)return a.click(),!0;let r=t.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===e)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return m.warn(`[stc] folder tab not found for "${e}"`),!1},Zd=e=>{let t=document.getElementById(e);if(!t){m.warn(`[stc] field ${e} not found in DOM \u2014 can't scroll to it`);return}t.scrollIntoView({behavior:"smooth",block:"center"});let o=t.style.boxShadow,r=t.style.transition;t.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",t.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{t.style.boxShadow=o,window.setTimeout(()=>{t.style.transition=r},400)},2800)},Uy=(e,t)=>{if(t&&jy(t)){window.setTimeout(()=>Zd(e),300);return}Zd(e)},Me=()=>{document.getElementById(kn)?.remove()},xn=(e,t,o)=>{Me();let r=document.createElement("div");r.id=kn;let a=o.getBoundingClientRect();r.style.cssText=`
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
    border-radius: ${y.md};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    padding: 14px 16px;
    font-family: ${u.sans};
  `;let s=e.length,i=e.filter(_=>_.filled).length,l=i===s,d=document.createElement("div");d.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${l?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${l?"Ready to send":"Required fields"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${i} of ${s} ready</div>
    ${t?`<div style="
            font-size: 11px;
            color: ${n.amber};
            margin: 6px 0 4px;
            padding: 6px 8px;
            background: ${n.slate};
            border-radius: ${y.sm};
            border-left: 2px solid ${n.amber};
          ">Previously sent: ${new Date(t).toLocaleString()}.
          Clicking Send again will re-send.</div>`:""}
  `,r.appendChild(d);let c=["TC","ACQ","MT","DISPO","Property"],p={};e.forEach(_=>{p[_.group]||(p[_.group]=[]),p[_.group].push(_)});let b=[...c.filter(_=>p[_]),...Object.keys(p).filter(_=>!c.includes(_))];for(let _ of b){let g=p[_],T=document.createElement("div");T.style.cssText="margin-top: 12px;";let x=document.createElement("div");x.style.cssText=`
      font-family: ${u.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,x.textContent=_,T.appendChild(x),g.forEach(C=>{let v=document.createElement("div"),E=!C.filled&&C.navigable&&C.field_id;v.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${y.sm};
        font-size: 12px;
        color: ${C.filled?n.bone:n.ash};
        ${E?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,E&&(v.addEventListener("mouseenter",()=>{v.style.background=n.slate}),v.addEventListener("mouseleave",()=>{v.style.background="transparent"}),v.addEventListener("click",f=>{f.stopPropagation(),C.field_id&&(Uy(C.field_id,C.folder),Me())}));let w=C.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,k=E?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";v.innerHTML=`${w}<span style="flex: 1;">${C.label}</span>${k}`,T.appendChild(v)}),r.appendChild(T)}document.body.appendChild(r);let h=_=>{let g=_.target;!r.contains(g)&&!o.contains(g)&&(Me(),document.removeEventListener("click",h))};window.setTimeout(()=>document.addEventListener("click",h),0)},Ne=(e,t)=>{let o=e.querySelector(".ws-stc-label"),r=e.querySelector(".ws-stc-dot"),a=e.querySelector(".ws-stc-chevron"),s,i,l=n.bone,d,c="Send to Closing Office",p="",b="pointer",h="1";switch(t.status){case"checking":s="transparent",i=n.steel,l=n.ash,d=n.coolGray,c="Checking\u2026",b="wait",h="0.8";break;case"ready":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c=t.previouslySentAt?"Re-send to Closing Office":"Send to Closing Office";break;case"incomplete":{let _=t.checks?.filter(T=>T.filled).length??0,g=t.checks?.length??0;s="transparent",i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${g} Fields Ready`;break}case"sending":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sending\u2026",b="wait",h="0.8";break;case"sent":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sent \u2713";break;case"error":s="transparent",i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=b,e.style.opacity=h,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="sent"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},Wy=(e,t)=>{let o=document.createElement("button");o.id=nt,o.type="button",o.dataset.oppId=e;let r=Dy(e),a=r?{status:r.checks.every(v=>v.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"},s=r?.send_meta??null;o.style.cssText=`
    ${D}
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
  `,Ne(o,a);let i=new Set,l=async()=>{if(a.status==="sending")return;let v=await Ny(e,t);if(!v){a={status:"error",message:"Check failed \u2014 click to retry"},Ne(o,a);return}if(v.rate_limited){g=Date.now()+_,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},Ne(o,a),m.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(g).toLocaleTimeString()}`);return}if(!Array.isArray(v.checks)||v.checks.length===0){a={status:"error",message:v.error||"Check failed \u2014 click to retry"},Ne(o,a),m.warn("[stc] dry_run returned no checks:",v);return}let E=v.pipeline_name;if(E&&E!=="Transaction Coordination"){m.debug(`[stc] dry_run reports pipeline="${E}" (not TC) \u2014 retracting button + caching`),En.add(e),document.getElementById(nt)?.remove(),document.getElementById(Et)?.remove(),Me(),sr();return}let w=v.checks;if(a.checks&&a.checks.length===v.checks.length){let f=new Set;w=v.checks.map(($,S)=>a.checks[S]?.filled&&!$.filled?i.has($.label)?$:(f.add($.label),{...$,filled:!0}):$),i=f}else i=new Set;a={status:w.every(f=>f.filled)?"ready":"incomplete",checks:w,previouslySentAt:v.previously_sent_at??null},(v.closing_agent||v.property_address||v.closing_office)&&(s={name:(v.closing_agent?.name??"").trim(),email:(v.closing_agent?.email??"").trim(),closingOffice:(v.closing_office??"").trim(),propertyAddress:(v.property_address??"").trim()}),Fy(e,{checks:w,previously_sent_at:v.previously_sent_at??null,pipeline_name:E,send_meta:s,ts:Date.now()}),Ne(o,a),document.getElementById(kn)&&xn(w,v.previously_sent_at,o)},d=async()=>{let v=!!a.previouslySentAt;if(window.confirm(qy(s,a.previouslySentAt))){a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},Ne(o,a),Me();try{let E=await zy(e,t,v);if(E.needs_confirm){a={status:"ready",checks:E.checks,previouslySentAt:E.previously_sent_at},Ne(o,a),E.checks&&xn(E.checks,E.previously_sent_at,o);return}if(E.ok){a={status:"sent",checks:E.checks,previouslySentAt:new Date().toISOString()},Ne(o,a),window.setTimeout(()=>{x()},3500);return}a={status:"error",checks:E.checks,message:E.error||"Validation failed"},Ne(o,a),E.checks&&xn(E.checks,E.previously_sent_at,o)}catch(E){m.error("[stc] send failed:",E),a={status:"error",message:"Network error \u2014 click to retry"},Ne(o,a)}}};o.addEventListener("click",()=>{switch(a.status){case"ready":d();break;case"incomplete":{document.getElementById(kn)?Me():a.checks&&xn(a.checks,a.previouslySentAt,o);break}case"error":case"sent":x();break}});let c,p=!1,b=Date.now(),h=1e4,_=5*60*1e3,g=0,T=!1,x=async()=>{if(o.isConnected&&(T=!0),T&&!o.isConnected)return;let v=ir();if(!(!v||v.oppId!==e)&&!p){if(Date.now()<g){m.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(g).toLocaleTimeString()}`);return}p=!0,b=Date.now();try{await l()}finally{p=!1}}};x();let C=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(C){let v=new MutationObserver(()=>{if(c!==void 0||p)return;let k=Date.now()-b,f=Math.max(1500,h-k);c=window.setTimeout(()=>{c=void 0,a.status!=="sending"&&x()},f)});v.observe(C,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let E=k=>{let f=k.detail;if(!f||f.oppId!==e)return;tc(e);let $=0,S=()=>{if(p&&$<8){$+=1,window.setTimeout(S,500);return}x()};S()};window.addEventListener(Ts,E);let w=window.setInterval(()=>{document.body.contains(o)||(v.disconnect(),c!==void 0&&window.clearTimeout(c),window.removeEventListener(Ts,E),window.clearInterval(w))},5e3)}return o},Gy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Ky=async()=>{for(let e of Gy)try{let t=await I(e,{timeoutMs:1500});if(t)return m.debug(`[send-to-title-co] mount target: ${e}`),t}catch{}return m.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},En=new Set,Xd=null,Vy=e=>{e&&e!==Xd&&(En.clear(),Xd=e)},wn=!1,Ls=async()=>{if(wn){m.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}wn=!0;try{await Yy()}catch(e){m.error("[stc] ensureMountedImpl threw:",e)}finally{wn=!1}},Yy=async()=>{m.debug("[stc] mount:01 ensureMountedImpl entered");let e=ir();if(!e||!e.locationId){m.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(e)}`),document.getElementById(nt)?.remove(),document.getElementById(Et)?.remove(),Me();return}if(m.debug(`[stc] mount:02 ctx ok \u2014 oppId=${e.oppId} locId=${e.locationId}`),Vy(e.oppId),En.has(e.oppId)){m.debug(`[stc] mount:02-BAIL opp ${e.oppId} previously confirmed non-TC this session`),document.getElementById(nt)?.remove(),document.getElementById(Et)?.remove(),Me();return}let t=document.getElementById(nt);if(t&&t.dataset.oppId===e.oppId){m.debug("[stc] mount:03-SKIP existing button for same opp");let l=U();l!==null&&l!=="Transaction Coordination"&&(t.remove(),document.getElementById(Et)?.remove(),Me(),sr());return}t&&(m.debug("[stc] mount:03 removing stale existing button"),t.remove(),document.getElementById(Et)?.remove(),Me()),m.debug("[stc] mount:04 calling findMountTarget");let o=await Ky();if(!o){m.debug("[stc] mount:04-BAIL findMountTarget returned null");return}m.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=U();if(r!==null&&r!=="Transaction Coordination"){m.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=ir();if(!a||a.oppId!==e.oppId||!a.locationId){m.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${e.oppId} now=${a?.oppId}`);return}m.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let s=Wy(e.oppId,a.locationId),i=document.createElement("span");i.id=Et,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,i.appendChild(s),Z(o).appendChild(i),m.debug(`[stc] mount:07-OK Mounted on opp ${e.oppId}, inDoc=${document.body.contains(s)}`),Jy(e.oppId)},ar=null,Cs=null,sr=()=>{ar?.disconnect(),ar=null,Cs=null},Jy=e=>{if(ar&&Cs===e)return;sr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Cs=e,ar=new MutationObserver(()=>{let o=ir();if(!o||o.oppId!==e){sr();return}let r=U();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(nt)?.remove(),document.getElementById(Et)?.remove(),Me(),sr();return}document.getElementById(nt)||Ls()}),ar.observe(t,{childList:!0,subtree:!0}))},Qy=()=>{Q("send-to-closing",ee,()=>{if(document.getElementById(nt)||wn)return;let e=ir();e&&En.has(e.oppId)||Ls()})},rc=()=>{Qy(),Ls()};var nc="ws-crm-vault-datepicker-panel",Zy=1000010,ac=264,Xy=["S","M","T","W","T","F","S"],ev=["January","February","March","April","May","June","July","August","September","October","November","December"],sc=()=>{let e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),t=o=>Number(e.find(r=>r.type===o)?.value??"0");return{y:t("year"),m:t("month"),d:t("day")}},tv=e=>e%4===0&&e%100!==0||e%400===0,As=(e,t)=>[31,tv(e)?29:28,31,30,31,30,31,31,30,31,30,31][t-1],ov=({y:e,m:t,d:o})=>o<As(e,t)?{y:e,m:t,d:o+1}:t<12?{y:e,m:t+1,d:1}:{y:e+1,m:1,d:1},Tn=e=>String(e).padStart(2,"0"),Ms=({y:e,m:t,d:o})=>`${e}-${Tn(t)}-${Tn(o)}`,$n=e=>{let[t,o,r]=e.split("-").map(Number);return{y:t,m:o,d:r}},rv=e=>{let{y:t,m:o,d:r}=$n(e);return`${Tn(o)}/${Tn(r)}/${t}`},nv=()=>Ms(ov(sc())),av=(e,t,o)=>{let r=[0,3,2,5,0,3,5,1,4,6,2,4],a=t<3?e-1:e;return(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+r[t-1]+o)%7},Cn=(e,t)=>`<input id="${e}" type="text" inputmode="none" readonly autocomplete="off" placeholder="MM/DD/YYYY" data-vault-datepicker-field="1" style="${t}cursor:pointer;caret-color:transparent;">`,Sn=e=>e?.dataset.isoValue??"",Ln=(e,t={})=>{let o=document.getElementById(e);if(!o){m.warn(`[vault-datepicker] #${e} not found \u2014 skipping attach`);return}let r=t.minDate??nv(),a=$n(r),s=Ms(sc()),i=x=>{o.dataset.isoValue=x,o.value=x?rv(x):""};t.initialValue&&i(t.initialValue);let l=null,d=a.y,c=a.m,p=()=>{l&&(l.remove(),l=null,document.removeEventListener("mousedown",b,!0),document.removeEventListener("keydown",h,!0))};function b(x){let C=x.target;l&&!l.contains(C)&&C!==o&&p()}function h(x){x.key==="Escape"&&p()}let _=x=>{i(x),p(),t.onChange?.(x)},g=()=>{if(!l)return;let x=l,C=d===a.y&&c===a.m,v=`${ev[c-1]} ${d}`,E=o.dataset.isoValue||"",w=(M,G)=>`
      <button type="button" data-nav="${M}" aria-label="${M==="prev"?"Previous":"Next"} month" ${G?"disabled":""} style="
        background:transparent;border:none;color:${G?n.coolGray:n.ash};
        cursor:${G?"default":"pointer"};padding:2px 8px;font-size:15px;line-height:1.4;
        border-radius:${y.sm};font-family:${u.sans};
      ">${M==="prev"?"\u2039":"\u203A"}</button>`,k=Xy.map(M=>`<div style="text-align:center;font-family:${u.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};padding:4px 0;">${M}</div>`).join(""),f=av(d,c,1),$=As(d,c),S=c===1?12:c-1,L=c===1?d-1:d,z=As(L,S),N=[];for(let M=0;M<f;M++){let G=z-f+1+M;N.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};color:${n.coolGray};">${G}</div>`)}for(let M=1;M<=$;M++){let G=Ms({y:d,m:c,d:M}),pt=G<r,Ze=G===E,mt=G===s,Te=`text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};border-radius:${y.sm};`;Ze?Te+=`background:${n.emerald};color:${n.obsidian};font-weight:600;cursor:pointer;`:pt?Te+=`color:${n.coolGray};opacity:0.5;cursor:default;`:Te+=`color:${n.bone};cursor:pointer;`,mt&&!Ze&&(Te+=`box-shadow:inset 0 0 0 1px ${n.emerald};`),N.push(`<div data-iso="${G}" style="${Te}">${M}</div>`)}let H=(f+$)%7,O=H===0?0:7-H;for(let M=1;M<=O;M++)N.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};color:${n.coolGray};">${M}</div>`);x.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 8px 6px;">
        ${w("prev",C)}
        <div style="font-size:12.5px;font-weight:600;color:${n.bone};font-family:${u.sans};">${v}</div>
        ${w("next",!1)}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:0 10px;">${k}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:2px 10px 8px;">${N.join("")}</div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid ${n.steel};">
        <button type="button" data-action="clear" style="background:transparent;border:none;color:${n.emerald};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Clear</button>
        <button type="button" data-action="today" style="background:transparent;border:none;color:${n.emerald};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Today</button>
      </div>
    `;let V=x.querySelector('[data-nav="prev"]');V&&!C&&(V.addEventListener("mouseenter",()=>V.style.color=n.bone),V.addEventListener("mouseleave",()=>V.style.color=n.ash),V.addEventListener("click",()=>{c-=1,c<1&&(c=12,d-=1),g()}));let re=x.querySelector('[data-nav="next"]');re&&(re.addEventListener("mouseenter",()=>re.style.color=n.bone),re.addEventListener("mouseleave",()=>re.style.color=n.ash),re.addEventListener("click",()=>{c+=1,c>12&&(c=1,d+=1),g()})),x.querySelectorAll("[data-iso]").forEach(M=>{let G=M.dataset.iso||"";!G||G<r||(M.addEventListener("mouseenter",()=>{G!==E&&(M.style.background=n.slate)}),M.addEventListener("mouseleave",()=>{G!==E&&(M.style.background="transparent")}),M.addEventListener("click",()=>_(G)))});let J=x.querySelector('[data-action="clear"]');J?.addEventListener("mouseenter",()=>J.style.color=n.emeraldBright),J?.addEventListener("mouseleave",()=>J.style.color=n.emerald),J?.addEventListener("click",()=>_(""));let se=x.querySelector('[data-action="today"]');se?.addEventListener("mouseenter",()=>se.style.color=n.emeraldBright),se?.addEventListener("mouseleave",()=>se.style.color=n.emerald),se?.addEventListener("click",()=>{let M=$n(s);d=M.y,c=M.m,g()})},T=()=>{if(l)return;document.getElementById(nc)?.remove();let x=o.dataset.isoValue||r,C=$n(x);d=C.y,c=C.m,l=document.createElement("div"),l.id=nc;let v=o.getBoundingClientRect(),E=Math.max(8,Math.min(v.left,window.innerWidth-ac-8));l.style.cssText=`
      position:fixed;top:${v.bottom+6}px;left:${E}px;z-index:${Zy};
      width:${ac}px;background:${n.graphite};border:1px solid ${n.steel};
      border-radius:${y.lg};box-shadow:0 14px 34px rgba(0,0,0,0.55);font-family:${u.sans};
    `,document.body.appendChild(l),g(),setTimeout(()=>{document.addEventListener("mousedown",b,!0),document.addEventListener("keydown",h,!0)},0)};o.addEventListener("click",T),o.addEventListener("focus",T)};var pr="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",sv=`${pr}/tc/welcome-call-prefill`,iv=`${pr}/tc/welcome-call-save`,lv=`${pr}/tc/order-lockbox`,dv=`${pr}/tc/order-photos`,cv=`${pr}/tc/photo-price-quote`,lr="ws-crm-welcome-call-overlay",mr=[{value:15,label:"15 photos"},{value:30,label:"30 photos"},{value:50,label:"50 photos"}],pv=[{value:"homejab",label:"Schedule photos right now with HomeJab"},{value:"later",label:"I'll schedule photos myself later"}],Bs=[{value:"anytime",label:"Anytime"},{value:"8amto11am",label:"8\u201311 AM"},{value:"9amto12pm",label:"9 AM\u201312 PM"},{value:"10amto1pm",label:"10 AM\u20131 PM"},{value:"11amto2pm",label:"11 AM\u20132 PM"},{value:"12pmto3pm",label:"12\u20133 PM"},{value:"1pmto4pm",label:"1\u20134 PM"},{value:"2pmto5pm",label:"2\u20135 PM"},{value:"3pmto6pm",label:"3\u20136 PM"}],mv=["Regular Contract","Subject To","Seller Finance","Novation"],bv=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],uv=["Gas","Electric","Propane","Oil"],hv=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],_v=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],at=["Yes","No"],yv=["Yes","No","Unknown"],vv=["Professional Photographer","Seller","Tenant"],gv=["Month-to-Month","Annual"],ic=["Current","Behind"],fv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],be=e=>(e==null?"":String(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),co=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;margin-top:4px;`,Hs="margin-bottom:12px;",dc=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,xv=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,lc=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),de=(e,t,o)=>{let r=lc(o);return`<select id="${e}" style="${co}"><option value=""></option>${t.map(a=>`<option ${r!==""&&lc(a)===r?"selected":""}>${be(a)}</option>`).join("")}</select>`},wv=(e,t,o)=>`<select id="${e}" style="${co}">${t.map(r=>`<option value="${be(r.value)}" ${r.value===o?"selected":""}>${be(r.label)}</option>`).join("")}</select>`,me=(e,t,o="")=>`<input id="${e}" type="text" value="${be(t)}" placeholder="${be(o)}" style="${co}">`,cc=(e,t)=>`<textarea id="${e}" rows="3" style="${co}resize:vertical;">${be(t)}</textarea>`,kv=(e,t)=>`<input id="${e}" type="date" value="${be(t)}" style="${co}">`,W=(e,t)=>`<div style="${Hs}"><label style="${dc}">${be(e)}</label>${t}</div>`,Is=(e,t)=>{let o=Array.isArray(t)?t:[];return`<div style="margin-top:4px;">${fv.map(r=>`<label style="${xv}"><input type="checkbox" data-grp="${e}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},Ke=e=>`<div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${be(e)}</div>`,io=()=>{document.getElementById(lr)?.remove()},so=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Ev=e=>{let t=e.tenant||{},o=`
    ${W("Who is providing photos?",de("wc-photos_provided_by",vv,e.photos_provided_by))}
    <div style="${Hs}">
      <label style="${dc}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${Is("photos_avail_mornings",e.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${Is("photos_avail_afternoons",e.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${Is("photos_avail_evenings",e.photos_avail_evenings)}
    </div>
  `,r=`
    ${$v()}
    <div id="wc-photos-manual">${o}</div>
    <div id="wc-photos-homejab" style="display:none;">${Tv()}</div>
  `;return`
    ${Ke("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${be(e.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${be(e.deal_address)||"(no address on file)"}</div>

    ${Ke("Contract")}
    ${W("Type of Contract",de("wc-contract_type",mv,e.contract_type))}

    ${Ke("Property")}
    ${W("Property Type",de("wc-property_type",hv,e.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${W("Beds",me("wc-beds",e.beds))}</div>
      <div style="flex:1;">${W("Baths",me("wc-baths",e.baths))}</div>
      <div style="flex:1;">${W("Sq Ft",me("wc-sqft",e.sqft))}</div>
    </div>
    ${W("Utilities",de("wc-utilities",bv,e.utilities))}
    ${W("Heat Source",de("wc-heat_source",uv,e.heat_source))}

    ${Ke("Liens & Permits")}
    ${W("Is there a mortgage?",de("wc-has_mortgage",at,e.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${W("Mortgage payment status",de("wc-mortgage_payment_status",ic,e.mortgage_payment_status))}</div>
    ${W("Any other liens? (back taxes, code violations, HELOC, etc.)",de("wc-has_other_liens",at,e.has_other_liens))}
    ${W("Any open or expired permits?",de("wc-has_permit_issues",at,e.has_permit_issues))}
    ${W("Is the property in probate?",de("wc-in_probate",at,e.in_probate))}

    ${Ke("Occupancy")}
    ${W("Property occupancy",de("wc-occupancy",_v,e.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("First name",me("wc-tenant_first_name",t.first_name))}</div>
        <div style="flex:1;">${W("Last name",me("wc-tenant_last_name",t.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Phone",me("wc-tenant_phone",t.phone))}</div>
        <div style="flex:1;">${W("Email",me("wc-tenant_email",t.email))}</div>
      </div>
      ${W("Lease type",de("wc-tenant_lease_type",gv,t.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Monthly rent",me("wc-tenant_monthly_rent",t.monthly_rent))}</div>
        <div style="flex:1;">${W("Rent due day",me("wc-tenant_rent_due_day",t.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Rent status",de("wc-tenant_rent_status",ic,t.rent_status))}</div>
        <div style="flex:1;">${W("Last rent paid",kv("wc-tenant_last_rent_paid",t.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Lease on hand?",de("wc-tenant_lease_on_hand",at,t.lease_on_hand))}</div>
        <div style="flex:1;">${W("Security deposit",me("wc-tenant_security_deposit",t.security_deposit))}</div>
      </div>
      ${W("Selling with tenant in place?",de("wc-selling_with_tenant",at,e.selling_with_tenant))}
    </div>

    ${Ke("HOA")}
    ${W("Part of an HOA?",de("wc-in_hoa",at,e.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${W("HOA monthly fee",me("wc-hoa_monthly_fee",e.hoa_monthly_fee))}${W("HOA rental restriction?",de("wc-hoa_rental_restriction",yv,e.hoa_rental_restriction))}</div>

    ${Ke("Photos & Access")}
    ${r}

    ${Ke("Lockbox")}
    ${W("Lockbox needed?",de("wc-lockbox_needed",at,e.lockbox_needed))}
    ${W("Lockbox code (agree with the seller; recorded on the property for future use)",me("wc-lockbox_code",e.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Recipient name",me("wc-lockbox_recipient_name",e.lockbox_recipient_name))}</div>
        <div style="flex:1;">${W("Recipient phone",me("wc-lockbox_recipient_phone",e.lockbox_recipient_phone))}</div>
      </div>
      ${W("Mailing address (if different from property)",me("wc-lockbox_mailing_address",e.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${u.sans};cursor:pointer;flex-shrink:0;">${An(e).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${An(e).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${An(e).on?n.emerald:n.amber};flex-shrink:0;"></span>${An(e).text}</span>
      </div>
      <div id="wc-lockbox-confirmation" style="display:none;margin-top:10px;padding:12px 14px;background:${n.slate};border:1px solid ${n.emeraldBorder};border-radius:${y.sm};"></div>
    </div>

    ${Ke("Notes")}
    ${W("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",cc("wc-welcome_call_notes",e.welcome_call_notes))}
  `},B=e=>{let t=document.getElementById(e);return t?(t.value||"").trim():""},Ps=e=>Array.from(document.querySelectorAll(`input[data-grp="${e}"]:checked`)).map(t=>t.value),Os=()=>{let e=(o,r)=>{let a=document.getElementById(o);a&&(a.style.display=r?"block":"none")};e("wc-mortgage-detail",B("wc-has_mortgage")==="Yes"),e("wc-hoa-detail",B("wc-in_hoa")==="Yes"),e("wc-lockbox-detail",B("wc-lockbox_needed")==="Yes"),e("wc-tenant-block",B("wc-occupancy")==="Tenant Occupied");let t=document.querySelector('input[name="wc-photo-mode"]:checked')?.value??"later";e("wc-photos-manual",t!=="homejab"),e("wc-photos-homejab",t==="homejab")},An=e=>{let t=e,o=String(t.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=t.lockbox_order_date?be(t.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},$v=()=>`
  <div style="${Hs}">
    ${pv.map(e=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:6px;cursor:pointer;"><input type="radio" name="wc-photo-mode" value="${e.value}" ${e.value==="later"?"checked":""}>${be(e.label)}</label>`).join("")}
  </div>
`,Tv=()=>{let e=mr.map((t,o)=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wc-op-photocount" value="${t.value}" ${o===1?"checked":""}><span id="wc-op-pkg-label-${t.value}">${be(t.label)}</span></label>`).join("");return`
    <div id="wc-op-form">
      ${W("Package",`<div style="margin-top:4px;">${e}</div>`)}
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wc-op-aerial"> <span id="wc-op-aerial-label">+ Aerial photos</span></label>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${W("Shoot date",Cn("wc-op-date",co))}</div>
        <div style="flex:1;">${W("Time window",wv("wc-op-time",Bs,"anytime"))}</div>
      </div>
      ${W("Must-have shots",cc("wc-op-shots",""))}
      ${W("Access notes (beyond the lockbox code on file)",me("wc-op-access","","Optional \u2014 pets, gate code, parking\u2026"))}
      <div id="wc-op-total" style="font-size:13px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wc-op-error" style="display:none;font-size:12px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:8px 10px;margin:2px 0 12px;line-height:1.4;"></div>
      <button type="button" id="wc-order-photos" disabled style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${u.sans};cursor:pointer;flex-shrink:0;opacity:0.5;">Order Photos</button>
    </div>
  `},Rs=e=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file for this account \u2014 the owner needs to add one.":"Lockbox order failed \u2014 try again.",Ds=(e,t)=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file \u2014 the owner needs to add one.":e==="vendor_order_failed"?t===!0?"Order failed after payment \u2014 the charge was automatically refunded. Ops has been alerted.":"Order failed after payment and the auto-refund ALSO failed \u2014 ops has been alerted to refund manually.":"Photo order failed \u2014 try again.",$t=e=>Number.isFinite(e)?Number.isInteger(e)?String(e):e.toFixed(2):"0",lo=(e,t)=>`p${e}${t?"_aerial":""}`,Fs=async e=>{try{let t=await fetch(cv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,menu:!0}),credentials:"omit"});if(!t.ok){let o="quote_unavailable";try{let r=await t.json();r.reason&&(o=r.reason)}catch{}return{ok:!1,reason:o}}return await t.json()}catch(t){return m.warn("[photo-menu] fetch failed:",t),{ok:!1,reason:"quote_unavailable"}}},Ns=(e,t)=>{let o=t?.[lo(e,!1)];return typeof o=="number"?`${e} photos \u2014 $${$t(o)}`:`${e} photos`},zs=(e,t)=>{let o=t?.[lo(e,!1)],r=t?.[lo(e,!0)];return typeof o=="number"&&typeof r=="number"?`+ Aerial photos (+$${$t(r-o)})`:"+ Aerial photos"},dr="Pricing is temporarily unavailable \u2014 try again shortly",cr=e=>`Total: <span style="color:${n.emerald};font-weight:600;">$${$t(e)}</span> \u2014 charged to the card on file`,qs=e=>`Order HomeJab photos for this deal now? The card on file will be charged $${$t(e)}. This cannot be reversed.`,js=e=>`HomeJab's price just changed \u2014 new total $${$t(e)}. Confirm again to order.`,Us=(e,t,o)=>`
  <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">HomeJab</div>
  <div style="font-size:14px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:8px;">Paid <span style="color:${n.emerald};">\u2713</span> $${$t(o)} \u2014 HomeJab order #${be(t)} placed.</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;margin-bottom:14px;">The shoot will appear on this deal once HomeJab confirms scheduling.</div>
  <button type="button" id="${e}-done" style="${ie} width:100%; justify-content:center;">Done</button>
`,Cv=e=>typeof e=="number"&&Number.isFinite(e)?`Paid <span style="color:${n.emerald};">\u2713</span> $${$t(e)} \u2014 lockbox ordered`:`Paid <span style="color:${n.emerald};">\u2713</span> \u2014 lockbox ordered`,Sv="Ops will ship it and add tracking to the property record.",pc=e=>`
  <div style="font-size:13px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:4px;">${Cv(e)}</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;">${Sv}</div>
`,mc=(e,t)=>`
  <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Lockbox</div>
  ${pc(t)}
  <button type="button" id="${e}-done" style="${ie} width:100%; justify-content:center;margin-top:12px;">Done</button>
`,Lv=e=>({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,contract_type:B("wc-contract_type"),property_type:B("wc-property_type"),beds:B("wc-beds"),baths:B("wc-baths"),sqft:B("wc-sqft"),utilities:B("wc-utilities"),heat_source:B("wc-heat_source"),has_mortgage:B("wc-has_mortgage"),mortgage_payment_status:B("wc-mortgage_payment_status"),has_other_liens:B("wc-has_other_liens"),has_permit_issues:B("wc-has_permit_issues"),in_probate:B("wc-in_probate"),occupancy:B("wc-occupancy"),selling_with_tenant:B("wc-selling_with_tenant"),in_hoa:B("wc-in_hoa"),hoa_rental_restriction:B("wc-hoa_rental_restriction"),hoa_monthly_fee:B("wc-hoa_monthly_fee"),photos_provided_by:B("wc-photos_provided_by"),photos_avail_mornings:Ps("photos_avail_mornings"),photos_avail_afternoons:Ps("photos_avail_afternoons"),photos_avail_evenings:Ps("photos_avail_evenings"),lockbox_needed:B("wc-lockbox_needed"),lockbox_code:B("wc-lockbox_code"),lockbox_recipient_name:B("wc-lockbox_recipient_name"),lockbox_recipient_phone:B("wc-lockbox_recipient_phone"),lockbox_mailing_address:B("wc-lockbox_mailing_address"),welcome_call_notes:B("wc-welcome_call_notes"),tenant:B("wc-occupancy")==="Tenant Occupied"?{first_name:B("wc-tenant_first_name"),last_name:B("wc-tenant_last_name"),phone:B("wc-tenant_phone"),email:B("wc-tenant_email"),lease_type:B("wc-tenant_lease_type"),monthly_rent:B("wc-tenant_monthly_rent"),rent_due_day:B("wc-tenant_rent_due_day"),rent_status:B("wc-tenant_rent_status"),last_rent_paid:B("wc-tenant_last_rent_paid"),lease_on_hand:B("wc-tenant_lease_on_hand"),security_deposit:B("wc-tenant_security_deposit")}:void 0}),Av=e=>{io();let t=document.createElement("div");t.id=lr,t.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${u.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${lr} input[type="date"]::-webkit-calendar-picker-indicator,#${lr} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${y.lg} ${y.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${Ev(e)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${y.lg} ${y.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${ie}">Complete Welcome Call</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",g=>{g.target===t&&io()}),document.getElementById("wc-close")?.addEventListener("click",io),document.getElementById("wc-cancel")?.addEventListener("click",io);let r=null,a=null,s=0,i=g=>{let T=document.getElementById("wc-order-photos");T&&(T.disabled=g,T.style.opacity=g?"0.5":"1")},l=g=>{let T=document.getElementById("wc-op-error");T&&(T.textContent=g,T.style.display="block")},d=()=>{let g=document.getElementById("wc-op-error");g&&(g.style.display="none",g.textContent="")},c=()=>{let g=Number(document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30"),T=document.getElementById("wc-op-aerial")?.checked??!1;mr.forEach(E=>{let w=document.getElementById(`wc-op-pkg-label-${E.value}`);w&&(w.textContent=Ns(E.value,r))});let x=document.getElementById("wc-op-aerial-label");x&&(x.textContent=zs(g,r));let C=document.getElementById("wc-op-total"),v=r?.[lo(g,T)];typeof v=="number"?(a={tenant_price:v},C&&(C.innerHTML=cr(v)),i(!1)):(a=null,C&&(C.textContent=r?"":"Getting price\u2026"),i(!0))},p=async()=>{let g=++s;r=null,d(),c();let T=await Fs(String(e.tenant_id??""));if(g===s)if(T.ok&&T.menu)r=T.menu,c();else{r=null;let x=document.getElementById("wc-op-total");x&&(x.textContent=""),l(dr),i(!0)}};["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(g=>{document.getElementById(g)?.addEventListener("change",Os)}),document.querySelectorAll('input[name="wc-photo-mode"]').forEach(g=>{g.addEventListener("change",()=>{Os(),g.checked&&g.value==="homejab"&&p()})}),document.querySelectorAll('input[name="wc-op-photocount"]').forEach(g=>{g.addEventListener("change",c)}),document.getElementById("wc-op-aerial")?.addEventListener("change",c),document.getElementById("wc-op-date")&&Ln("wc-op-date"),Os();let b=document.getElementById("wc-save");b?.addEventListener("click",async()=>{if(!B("wc-occupancy")){so("Set the property occupancy before completing.","err");return}b.textContent="Saving\u2026",b.style.opacity="0.8",b.disabled=!0;try{(await fetch(iv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Lv(e)),credentials:"omit"})).ok?(io(),so("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,so("Save failed \u2014 try again.","err"))}catch(g){m.warn("[welcome-call] save failed:",g),b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,so("Couldn't reach the save handler. Try again.","err")}});let h=document.getElementById("wc-order-lockbox");h?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let g=document.getElementById("wc-lockbox-status"),T=document.getElementById("wc-lockbox-confirmation");h.disabled=!0,h.textContent="Ordering\u2026";try{let x=await fetch(lv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,ship_to:B("wc-lockbox_mailing_address")||e.deal_address||"",recipient_name:B("wc-lockbox_recipient_name"),recipient_phone:B("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"});if(x.ok){let C=await x.json().catch(()=>({}));h.textContent="Re-order Lockbox",h.disabled=!1,g&&(g.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,g.style.color=n.emerald),T&&(T.innerHTML=pc(typeof C.price=="number"?C.price:void 0),T.style.display="block")}else{let C="";try{C=String((await x.json()).reason??"")}catch{}h.textContent="Order Lockbox",h.disabled=!1,so(Rs(C),"err")}}catch(x){m.warn("[welcome-call] order lockbox failed:",x),h.textContent="Order Lockbox",h.disabled=!1,so("Couldn't reach the lockbox handler. Try again.","err")}});let _=document.getElementById("wc-order-photos");_?.addEventListener("click",async()=>{let g=document.getElementById("wc-op-date"),T=Sn(g);if(!T){l("Pick a shoot date first.");return}if(!a){l(dr);return}if(!window.confirm(qs(a.tenant_price)))return;d();let x=document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30",C=document.getElementById("wc-op-aerial")?.checked??!1,v=document.getElementById("wc-op-time")?.value||"anytime";_.disabled=!0,_.textContent="Ordering\u2026";try{let E=await fetch(dv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,package:{photocount:Number(x),aerial:C},quoted_price:a.tenant_price,scheduling_date:T,scheduling_time:v,must_have_shots:B("wc-op-shots"),access_extra:B("wc-op-access")}),credentials:"omit"});if(E.ok){let f=await E.json().catch(()=>({})),$=String(f.hj_order_id??""),S=document.getElementById("wc-op-form");S&&(S.innerHTML=Us("wc-op",$,Number(f.tenant_price??a.tenant_price)),document.getElementById("wc-op-done")?.addEventListener("click",()=>{S.innerHTML=`<span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${n.emerald};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered \u2014 HomeJab #${be($)}</span>`}));return}if(E.status===409){let f=null;try{let $=await E.json();$.reason==="reprice"&&typeof $.tenant_price=="number"&&(f=$.tenant_price)}catch{}if(f!==null){a={tenant_price:f};let $=document.getElementById("wc-op-total");$&&($.innerHTML=cr(f)),l(js(f))}else l("HomeJab's price just changed. Refresh and try again.");_.disabled=!1,_.textContent="Order Photos";return}let w="",k;try{let f=await E.json();w=String(f.reason??""),k=f.refunded}catch{}_.disabled=!1,_.textContent="Order Photos",l(Ds(w,k))}catch(E){m.warn("[welcome-call] order photos failed:",E),_.disabled=!1,_.textContent="Order Photos",l("Couldn't reach the photo order handler. Try again.")}})},bc=async(e,t)=>{io();let o=document.createElement("div");o.id=lr,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${u.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:e,tenant_id:t};try{let a=await fetch(`${sv}?tc_opp_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let s=await a.json();r={...s,opp_id:s.opp_id||e,tenant_id:t}}else m.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){m.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=t,Av(r)};var On="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Mv=`${On}/tc/confirm-photo-appointment`,Iv=`${On}/tc/order-lockbox`,Pv=`${On}/tc/order-photos`,Ov=`${On}/tc/welcome-call-prefill`,Gs="ws-crm-opp-action-bar",hc="ws-crm-opp-overflow",_c="ws-crm-opp-action-menu",Pn="ws-crm-opp-action-popover",yc="ws-crm-reorder-lockbox-modal",vc=".hr-card.hr-modal.crm-opportunities-modal",Bv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Hv=/\/v2\/location\/([A-Za-z0-9]+)/,gc="Welcome Call Needed",Vs="Scheduling Photos",fc="Photos Scheduled",Rv=[gc,Vs,fc,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],xc=()=>{let e=window.location.pathname,t=e.match(Bv);if(!t)return null;let o=e.match(Hv);return o?{oppId:t[1],locationId:o[1]}:null},Dv=()=>{let e=document.querySelector(vc);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(Rv.includes(r))return r}return null},Ie=()=>{document.getElementById(_c)?.remove(),document.getElementById(Pn)?.remove(),document.getElementById(yc)?.remove()},po=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Tt=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${y.md};
    background: ${n.graphite};
    border: 1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${t==="ok"?n.emerald:n.crimson};
    font-family: ${u.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Fv=e=>{bc(e.oppId,e.locationId)},Nv=async(e,t,o)=>{let r=await fetch(Iv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,contact_id:t.contact_id||"",property_record_id:t.property_record_id||"",deal_address:t.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"});if(r.ok){let s;try{let i=await r.json();typeof i.price=="number"&&(s=i.price)}catch{}return{ok:!0,reason:"",price:s}}let a="";try{a=String((await r.json()).reason??"")}catch{}return{ok:!1,reason:a}},zv=(e,t)=>{Ie();let o=document.createElement("div");o.id=yc,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,i=t.lockbox_mailing_address||t.deal_address||"";r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${s}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${po(t.lockbox_recipient_name)}" />
    <label style="${s}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${po(t.lockbox_recipient_phone)}" />
    <label style="${s}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${po(i)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${ie}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let l=()=>o.remove();o.addEventListener("click",c=>{c.target===o&&l()}),document.getElementById("wsrl-cancel")?.addEventListener("click",l);let d=document.getElementById("wsrl-submit");d?.addEventListener("click",async()=>{let c=document.getElementById("wsrl-name")?.value.trim()||"",p=document.getElementById("wsrl-phone")?.value.trim()||"",b=document.getElementById("wsrl-address")?.value.trim()||"";if(!c||!b){Tt("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){d.disabled=!0,d.textContent="Ordering\u2026";try{let h=await Nv(e,t,{recipient_name:c,recipient_phone:p,ship_to:b});h.ok?(r.innerHTML=mc("wsrl",h.price),r.querySelector("#wsrl-done")?.addEventListener("click",l)):(d.disabled=!1,d.textContent="Order Lockbox",Tt(Rs(h.reason),"err"))}catch(h){m.warn("[action-bar] reorder lockbox failed:",h),d.disabled=!1,d.textContent="Order Lockbox",Tt("Couldn't reach the lockbox handler. Try again.","err")}}})},wc=async e=>{Ie();let t={};try{t=await fetch(`${Ov}?tc_opp_id=${encodeURIComponent(e.oppId)}&tenant_id=${encodeURIComponent(e.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}zv(e,t)},qv=(e,t)=>{Ie();let o=document.createElement("div");o.id=Pn;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `,o.innerHTML=`
    <style>#${Pn} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${ie} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),s=o.querySelector("#wsap-vendor"),i=o.querySelector("#wsap-confirm");i?.addEventListener("click",async()=>{if(!a?.value){Tt("Pick the booked date and time first.","err");return}i.textContent="Booking\u2026",i.style.opacity="0.8";try{(await fetch(Mv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:s?.value?.trim()||null}),credentials:"omit"})).ok?(Ie(),Tt("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(i.textContent="Confirm & advance",i.style.opacity="1",Tt("Booking failed \u2014 try again.","err"))}catch(d){m.warn("[action-bar] confirm photo failed:",d),i.textContent="Confirm & advance",i.style.opacity="1",Tt("Couldn't reach the booking handler. Try again.","err")}});let l=d=>{let c=d.target;!o.contains(c)&&!t.contains(c)&&(Ie(),document.removeEventListener("click",l))};window.setTimeout(()=>document.addEventListener("click",l),0)},jv=(e,t)=>{Ie();let o=document.createElement("div");o.id=Pn;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 320px; max-width: 340px;
    max-height: calc(100vh - 90px); overflow-y: auto;
    padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `;let a=`width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;`,s=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,i=mr.map((v,E)=>`<label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wsop-photocount" value="${v.value}" ${E===1?"checked":""}><span id="wsop-pkg-label-${v.value}">${po(v.label)}</span></label>`).join(""),l=Bs.map(v=>`<option value="${po(v.value)}" ${v.value==="anytime"?"selected":""}>${po(v.label)}</option>`).join("");o.innerHTML=`
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Order Photos \u2014 HomeJab</div>
    <div id="wsop-form">
      <label style="${s}">Package</label>
      <div style="margin:2px 0 10px;">${i}</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wsop-aerial"><span id="wsop-aerial-label">+ Aerial photos</span></label>
      <label style="${s}">Shoot date</label>
      ${Cn("wsop-date",a)}
      <label style="${s}">Time window</label>
      <select id="wsop-time" style="${a}">${l}</select>
      <label style="${s}">Must-have shots</label>
      <textarea id="wsop-shots" rows="2" style="${a}resize:vertical;" placeholder="e.g. curb appeal, kitchen island, primary suite"></textarea>
      <label style="${s}">Access notes (beyond the lockbox code on file)</label>
      <input id="wsop-access" type="text" style="${a}" placeholder="Optional \u2014 pets, gate code, parking\u2026" />
      <div id="wsop-total" style="font-size:11px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wsop-error" style="display:none;font-size:11px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:7px 9px;margin:2px 0 12px;line-height:1.4;"></div>
      <button id="wsop-submit" type="button" disabled style="${ie} width:100%; justify-content:center; opacity:0.5;">Order Photos</button>
    </div>
  `,document.body.appendChild(o),Ln("wsop-date");let d=null,c=null,p=0,b=v=>{let E=o.querySelector("#wsop-submit");E&&(E.disabled=v,E.style.opacity=v?"0.5":"1")},h=v=>{let E=o.querySelector("#wsop-error");E&&(E.textContent=v,E.style.display="block")},_=()=>{let v=o.querySelector("#wsop-error");v&&(v.style.display="none",v.textContent="")},g=()=>{let v=Number(o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30"),E=o.querySelector("#wsop-aerial")?.checked??!1;mr.forEach($=>{let S=o.querySelector(`#wsop-pkg-label-${$.value}`);S&&(S.textContent=Ns($.value,d))});let w=o.querySelector("#wsop-aerial-label");w&&(w.textContent=zs(v,d));let k=o.querySelector("#wsop-total"),f=d?.[lo(v,E)];typeof f=="number"?(c={tenant_price:f},k&&(k.innerHTML=cr(f)),b(!1)):(c=null,k&&(k.textContent=d?"":"Getting price\u2026"),b(!0))},T=async()=>{let v=++p;d=null,_(),g();let E=await Fs(e.locationId);if(v===p)if(E.ok&&E.menu)d=E.menu,g();else{d=null;let w=o.querySelector("#wsop-total");w&&(w.textContent=""),h(dr),b(!0)}};o.querySelectorAll('input[name="wsop-photocount"]').forEach(v=>{v.addEventListener("change",g)}),o.querySelector("#wsop-aerial")?.addEventListener("change",g),T();let x=o.querySelector("#wsop-submit");x?.addEventListener("click",async()=>{let v=o.querySelector("#wsop-date"),E=Sn(v);if(!E){h("Pick a shoot date first.");return}if(!c){h(dr);return}if(!window.confirm(qs(c.tenant_price)))return;_();let w=o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30",k=o.querySelector("#wsop-aerial")?.checked??!1,f=o.querySelector("#wsop-time")?.value||"anytime",$=o.querySelector("#wsop-shots")?.value.trim()||"",S=o.querySelector("#wsop-access")?.value.trim()||"";x.disabled=!0,x.textContent="Ordering\u2026";try{let L=await fetch(Pv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,package:{photocount:Number(w),aerial:k},quoted_price:c.tenant_price,scheduling_date:E,scheduling_time:f,must_have_shots:$,access_extra:S}),credentials:"omit"});if(L.ok){let H=await L.json().catch(()=>({})),O=o.querySelector("#wsop-form");O&&(O.innerHTML=Us("wsop",String(H.hj_order_id??""),Number(H.tenant_price??c.tenant_price)),o.querySelector("#wsop-done")?.addEventListener("click",()=>Ie()));return}if(L.status===409){let H=null;try{let O=await L.json();O.reason==="reprice"&&typeof O.tenant_price=="number"&&(H=O.tenant_price)}catch{}if(H!==null){c={tenant_price:H};let O=o.querySelector("#wsop-total");O&&(O.innerHTML=cr(H)),h(js(H))}else h("HomeJab's price just changed. Refresh and try again.");x.disabled=!1,x.textContent="Order Photos";return}let z="",N;try{let H=await L.json();z=String(H.reason??""),N=H.refunded}catch{}x.disabled=!1,x.textContent="Order Photos",h(Ds(z,N))}catch(L){m.warn("[action-bar] order photos failed:",L),x.disabled=!1,x.textContent="Order Photos",h("Couldn't reach the photo order handler. Try again.")}});let C=v=>{let E=v.target;!o.contains(E)&&!t.contains(E)&&(Ie(),document.removeEventListener("click",C))};window.setTimeout(()=>document.addEventListener("click",C),0)},Uv=(e,t)=>{Ie();let o=document.createElement("div");o.id=_c;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `;for(let s of e){let i=document.createElement("div");i.textContent=s.label,i.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${y.sm};cursor:pointer;`,i.addEventListener("mouseenter",()=>i.style.background=n.steel),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",l=>{l.stopPropagation(),s.onClick()}),o.appendChild(i)}document.body.appendChild(o);let a=s=>{let i=s.target;!o.contains(i)&&!t.contains(i)&&(Ie(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},br=(e,t)=>{let o=document.createElement("button");return o.type="button",t==="primary"?o.style.cssText=ie:o.style.cssText=D,o.textContent=e,o},Wv=()=>{let e=br("\u22EE","ghost");return e.style.lineHeight="1",e},Gv=(e,t)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",t===gc){let r=br("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>Fv(e)),o.appendChild(r),o}if(t===Vs){let r=br("Order Photos","ghost");r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Order Photos</span>`,r.addEventListener("click",()=>jv(e,r)),o.appendChild(r);let a=br("Confirm Photos","ghost");return a.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,a.addEventListener("click",()=>qv(e,a)),o.appendChild(a),o}if(t===fc){let r=br("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void wc(e)),o.appendChild(r),o}return null},Kv=(e,t)=>{let o=[];if(t===Vs&&(o=[{label:"Re-order Lockbox",onClick:()=>void wc(e)}]),!o.length)return null;let r=document.createElement("span");r.id=hc,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=Wv();return a.addEventListener("click",s=>{s.stopPropagation(),Uv(o,a)}),r.appendChild(a),r},Vv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Yv=async()=>{for(let e of Vv)try{let t=await I(e,{timeoutMs:1200});if(t)return t}catch{}return null},Mn=()=>{document.getElementById(Gs)?.remove(),document.getElementById(hc)?.remove(),Ie()},In=!1,Ys=async()=>{if(!In){In=!0;try{let e=xc();if(!e){Mn();return}let t=U();if(t===null)return;if(t!=="Transaction Coordination"){Mn();return}let o=Dv(),r=document.getElementById(Gs);if(r&&r.dataset.oppId===e.oppId&&r.dataset.stage===(o??""))return;let a=Gv(e,o);if(!a){Mn();return}let s=await Yv();if(!s)return;Mn();let i=Z(s),l=document.createElement("span");l.id=Gs,l.dataset.oppId=e.oppId,l.dataset.stage=o??"",l.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",l.appendChild(a),i.appendChild(l);let d=Kv(e,o);d&&i.appendChild(d),Jv(e.oppId)}catch(e){m.error("[action-bar] ensureBar threw:",e)}finally{In=!1}}},ur=null,Ks=null,Ws,uc=()=>{ur?.disconnect(),ur=null,Ks=null},Jv=e=>{if(ur&&Ks===e)return;uc();let t=document.querySelector(vc);t&&(Ks=e,ur=new MutationObserver(()=>{let o=xc();if(!o||o.oppId!==e){uc();return}Ws===void 0&&(Ws=window.setTimeout(()=>{Ws=void 0,Ys()},250))}),ur.observe(t,{childList:!0,subtree:!0}))},Qv=()=>{Q("opp-action-bar",".crm-opportunities-modal .ui-modal-heading",()=>{In||Ys()})},kc=()=>{Qv(),Ys()};var Zv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Js=null,Ec=null,$c=async()=>{let e=Y(),t=P();if(!e||!t)return null;if(Js&&Ec===e)return Js;try{let a=(await(await fetch(Zv,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(i=>i.id===t);if(!a)return null;let s={name:[a.first_name,a.last_name].filter(Boolean).join(" ").trim(),email:(a.email??"").trim(),phone:(a.phone??"").trim(),role:(a.roles??[])[0]?.display??""};return Js=s,Ec=e,s}catch(o){return m.warn("[current-rep] roster load failed",o),null}};var Ve="ws-support-modal",Tc="ws-support-toast",Xv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",Cc="ws-support-submitter-name",Sc="ws-support-submitter-email",Lc="ws-support-submitter-role",eg=["Bug","Feature Request","Question","Billing","Onboarding Help"],Ct=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),tg=(e,t="success",o)=>{let r=document.getElementById(Tc);r&&r.remove();let a=document.createElement("div");a.id=Tc;let s=t==="success"?n.emerald:n.crimson;a.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100000;
    background: ${n.graphite};
    border: 1px solid ${s};
    border-left: 4px solid ${s};
    border-radius: ${y.md};
    padding: 14px 20px;
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-width: 340px;
    animation: ws-toast-in 0.2s ease-out;
  `,a.innerHTML=`
    <div style="font-weight: 500;">${Ct(e)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${Ct(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},Ic=()=>{document.getElementById(Ve)?.remove();let e=(localStorage.getItem(Cc)??"").trim(),t=(localStorage.getItem(Sc)??"").trim(),o=(localStorage.getItem(Lc)??"").trim(),r={category:null,title:"",description:"",submitterName:e,submitterEmail:t,submitterRole:o},a=document.createElement("div");a.id=Ve,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(560px, 94vw);
    max-height: 90vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let i=l=>`
    <button type="button" data-category="${Ct(l)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.md};
      padding: 12px 10px; cursor: pointer; font-family: ${u.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${Ct(l)}</button>
  `;s.innerHTML=`
    <style id="ws-support-modal-style">
      /* Muted placeholder ("helper") text inside every field. !important +
         id-scope beats the VAULT theme's global "input::placeholder { coolGray
         !important }" rule (theme-stylesheet.ts ~L945). */
      #${Ve} input::placeholder,
      #${Ve} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      /* Kill Chrome's autofill wash on Name/Email (the gray box): keep the field
         obsidian and the text bone even when the browser autofills it. */
      #${Ve} input:-webkit-autofill,
      #${Ve} input:-webkit-autofill:hover,
      #${Ve} input:-webkit-autofill:focus,
      #${Ve} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${y.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
    </style>
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Submit a Support Ticket</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 18px;">Get help from the REInvest OS team. Tickets are tracked and answered as fast as we can.</div>

    <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">Category</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px;">
      ${eg.map(i).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" autocomplete="off" value="${Ct(e)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" autocomplete="off" value="${Ct(t)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" autocomplete="off" value="${Ct(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Title</div>
      <input id="ws-support-title" type="text" autocomplete="off" placeholder="Short summary" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Description</div>
      <textarea id="ws-support-description" rows="5" autocomplete="off" placeholder="Walk us through what happened. The more detail the faster we can help." style="width: 100%; box-sizing: border-box; padding: 10px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px; resize: vertical;"></textarea>
    </div>

    <div id="ws-support-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-support-close" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
      <button id="ws-support-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Submit Ticket</button>
    </div>
  `,a.appendChild(s),document.body.appendChild(a),Ht(s),$c().then(l=>{if(!l||!document.getElementById(Ve))return;let d=(c,p)=>{let b=s.querySelector(c);b&&!b.value.trim()&&p&&(b.value=p)};d("#ws-support-name",l.name),d("#ws-support-email",l.email),d("#ws-support-role",l.role)}),a.addEventListener("click",l=>{l.target===a&&a.remove()}),s.querySelectorAll(".ws-support-tile").forEach(l=>{l.addEventListener("mouseenter",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow)}),l.addEventListener("mouseleave",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.steel,l.style.background=n.steel)}),l.addEventListener("click",()=>{r.category=l.dataset.category||null,s.querySelectorAll(".ws-support-tile").forEach(d=>{d===l?(d.dataset.selected="true",d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow,d.style.color=n.emeraldBright):(d.dataset.selected="false",d.style.borderColor=n.steel,d.style.background=n.steel,d.style.color=n.bone)})})}),s.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let l=s.querySelector("#ws-support-err"),d=b=>{l&&(l.textContent=b)};if(d(""),r.title=(s.querySelector("#ws-support-title")?.value||"").trim(),r.description=(s.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(s.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(s.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(s.querySelector("#ws-support-role")?.value||"").trim(),!r.category){d("Pick a category at the top.");return}if(!r.title){d("Add a title \u2014 a short summary.");return}if(!r.description){d("Add a description so we know what you're seeing.");return}if(!r.submitterName){d("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){d("Add a valid email so we can reply.");return}let c=Y();if(!c){d("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(Cc,r.submitterName),localStorage.setItem(Sc,r.submitterEmail),r.submitterRole&&localStorage.setItem(Lc,r.submitterRole)}catch{}let p=s.querySelector("#ws-support-submit");p&&(p.disabled=!0,p.textContent="Submitting\u2026",p.style.opacity="0.7");try{let h=await(await fetch(Xv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:c,category:r.category,title:r.title,description:r.description,submitter_user_id:P()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!h.ok){d(h.error||"Failed to submit ticket."),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1");return}a.remove();let _=h.ticket_short_id||"submitted";tg(`Ticket ${_} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(b){d(`Network error: ${b.message}`),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1")}})},og=["/support-ticket","ws-support-modal","ws-support"],rg=/\/custom-menu-link\//,Qs=!1,Ac=()=>{if(Qs||!rg.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return og.some(i=>s.includes(i))});if(r){Qs=!0,m.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{Ic(),Qs=!1},50);return}e<10&&setTimeout(t,150)};t()},ng=e=>{if(!(e instanceof Element))return!1;let t=e.closest("a.custom-link");return!!t&&/^\s*Support\s*$/.test(t.textContent||"")},Mc=!1,Pc=()=>{Mc||(Mc=!0,document.addEventListener("click",e=>{ng(e.target)&&(e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),m.info("[support-nav] intercepted Support click (capture) \u2014 opening modal in place, no GHL navigation"),Ic())},!0),ge(()=>setTimeout(Ac,50)),Ac(),m.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var Oc="ws-phone-assignments-modal",Bc="ws-phone-assignments-toast",ag="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",sg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",ig=["ACQ","DISPO","TC"],Dc="",st=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),lg=(e,t="success",o)=>{document.getElementById(Bc)?.remove();let r=document.createElement("div");r.id=Bc;let a=t==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${y.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${u.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${st(e)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${st(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},dg=(e,t,o)=>{let r=[`<option value="" ${o===Dc?"selected":""}>\u2014 Unassigned \u2014</option>`,...t.map(a=>`<option value="${st(a)}" ${o===a?"selected":""}>${st(a)}</option>`)].join("");return`<select data-assign="${st(e)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${y.sm};
    font-family: ${u.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},cg=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,Xs=async e=>{document.getElementById(Oc)?.remove();let t=e||Y(),o=document.createElement("div");o.id=Oc,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${u.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${y.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",h=>{h.target===o&&o.remove()}),!t){let h=r.querySelector("#ws-pa-body");h&&(h.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${ag}?tenant_id=${encodeURIComponent(t)}`,{method:"GET",credentials:"omit"})).json()}catch(h){m.error("[phone-assignments] GET failed",h);let _=r.querySelector("#ws-pa-body");_&&(_.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${st(h.message)}). The backend may not be wired yet.</span>`);return}let s=a.teams&&a.teams.length?a.teams:ig,i=a.numbers??[],l={...a.config?.numberTeam??{}},d=h=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${h} found.</div>`,c=i.length?i.map(h=>`<div style="${cg}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${st(h.label||h.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${u.mono};">${st(h.e164)}</div>
            </div>
            ${dg(`num:${h.e164}`,s,l[h.e164]??Dc)}
          </div>`).join(""):d("phone numbers"),p=h=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${h}</div>`,b=r.querySelector("#ws-pa-body");b&&(b.innerHTML=`
    ${p("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${y.md};overflow:hidden;">${c}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${u.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-family:${u.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,b.querySelectorAll("select[data-assign]").forEach(h=>{h.addEventListener("change",()=>{let _=h.getAttribute("data-assign")||"",[g,...T]=_.split(":"),x=T.join(":");g==="num"&&(h.value?l[x]=h.value:delete l[x])})}),b.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),b.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let h=b.querySelector("#ws-pa-err"),_=T=>{h&&(h.textContent=T)};_("");let g=b.querySelector("#ws-pa-save");g&&(g.disabled=!0,g.textContent="Saving\u2026",g.style.opacity="0.7");try{let x=await(await fetch(sg,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,numberTeam:l})})).json();if(!x.ok){_(x.error||"Save failed."),g&&(g.disabled=!1,g.textContent="Save",g.style.opacity="1");return}o.remove(),lg("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(T){_(`Network error: ${T.message}`),g&&(g.disabled=!1,g.textContent="Save",g.style.opacity="1")}}))},pg=["ws-phone-assignments","phone-assignments"],mg=/\/custom-menu-link\//,Zs=!1,Hc=()=>{if(Zs||!mg.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return pg.some(i=>s.includes(i))});if(r){Zs=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),s=a?a[1]:void 0;m.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${s})`);try{history.back()}catch{}setTimeout(()=>{Xs(s),Zs=!1},50);return}e<10&&setTimeout(t,150)};t()},Rc=!1,Fc=()=>{if(Rc)return;Rc=!0,ge(()=>setTimeout(Hc,50)),Hc();let e=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&Xs()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void Xs(),m.info("[phone-assignments] mounted (route + hash + window trigger)")};var Nc="ws-crm-pd-contacts-btn",bg=e=>new Promise(t=>setTimeout(t,e)),Wc=e=>{let t=e.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return t?`+1${t[1]}${t[2]}${t[3]}`:""},ug=()=>/\ball\s+[\d,]+\s+contacts?\s+selected\b/i.test(document.body.innerText)?"all":document.querySelector('.tabulator-header input[type="checkbox"]')?.checked?"page":document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0?"rows":"none",zc=(e,t)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(t){let d=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(d&&d.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||e.has(a))return;let s=(r?.textContent||"").replace(/\s+/g," ").trim(),i=Wc(o.textContent||""),l=s&&s!=="-"?s:i||a;e.set(a,{oppId:"",contactId:a,name:l,_phone:i||void 0})})},ei=async e=>{let t=new Map,o=document.querySelector(".tabulator-tableholder");if(zc(t,e),!o)return[...t.values()];let r=-1,a=-1,s=0;for(let i=0;i<200&&(zc(t,e),t.size===a?s++:(s=0,a=t.size),!(i>0&&o.scrollTop===r&&s>=2));i++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await bg(220);return o.scrollTop=0,[...t.values()]},hg=e=>{let t=e?.id||"";if(!t)return null;let o=(e.contactName||`${e.firstName||""} ${e.lastName||""}`.trim()||e.phone||t).replace(/\s+/g," ").trim().slice(0,60),r=(e.phone||"").trim(),a=/^\+\d{10,15}$/.test(r)?r:Wc(r);return{oppId:"",contactId:t,name:o,_phone:a||void 0}},qc=async(e,t)=>{let o=new AbortController,r=window.setTimeout(()=>o.abort(),2e4);try{let a=await He(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:o.signal});return!a||!a.ok?null:await a.json()}catch{return null}finally{window.clearTimeout(r)}},jc=async(e,t)=>{let o=Y();if(!o)return null;let r=Ji(o);if(!r)return m.warn("[bulk-dialer-contacts] no captured grid search \u2014 DOM fallback"),null;let a;try{a=JSON.parse(r.bodyRaw)}catch{return null}let s=new Map,i=p=>{for(let b of p||[]){let h=hg(b);h&&!s.has(h.contactId)&&s.set(h.contactId,h)}};if(e==="page"){let p=await qc(r.url,a);return p?(i(p.contacts),[...s.values()]):null}let l={...a,pageLimit:100,includeTotal:!0};delete l.searchAfter;let d=100,c=null;for(let p=1;p<=d;p++){l.page=p;let b=await qc(r.url,l);if(!b)return s.size?[...s.values()]:null;if(typeof b.total=="number"&&(c=b.total),i(b.contacts),t(s.size,c),!b.contacts||b.contacts.length<100||c!==null&&s.size>=Math.min(c,d*100))break}return c!==null&&c>d*100&&m.warn(`[bulk-dialer-contacts] list has ${c} contacts \u2014 capped at ${d*100}`),[...s.values()]},_g=()=>{if(Pt()!=="contact-list"||!Ya()||!Gr()||document.getElementById(Nc))return;let e=document.querySelector("#views-bar .bar");if(!e)return;let t=document.createElement("button");t.id=Nc,t.type="button",t.title="Power Dialer: call through this list, or the rows you've checked",t.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${y.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${u.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,t.innerHTML=`${Va}<span>Power Dialer</span>`;let o=t.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=t.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),t.style.setProperty("border-color",n.emerald,"important"),t.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let s=t.querySelector("span"),i=s?.textContent||"Power Dialer",l=(d,c)=>{s&&(s.textContent=`Loading\u2026 ${d}${c?` / ${c}`:""}`)};s&&(s.textContent="Loading\u2026"),t.style.opacity="0.7";try{let d=ug(),c,p;d==="rows"?(c=await ei(!0),p="Selected contacts"):d==="page"?(c=await jc("page",l)??await ei(!0),p="This page"):(c=await jc("all",l)??await ei(!1),p=d==="all"?"All in list":"Smart list"),Ka(p,c,{one:"contact",many:"contacts"})}catch(d){m.error("[bulk-dialer-contacts] harvest failed",d)}finally{s&&(s.textContent=i),t.style.opacity="1"}}),e.appendChild(t)},mo=null,ti,Uc=!1,Gc=()=>{if(Uc)return;Uc=!0;let e=()=>{ti!==void 0&&window.clearTimeout(ti),ti=window.setTimeout(_g,400)};ge(t=>{t==="contact-list"?(e(),mo||(mo=new MutationObserver(e),mo.observe(document.body,{childList:!0,subtree:!0}))):mo&&(mo.disconnect(),mo=null)})};var yg="ws-calling-as-chip",vg=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},oi=!1,St=null,Kc,Yc=0,gg=3e4,fg=()=>{let e=document.querySelector(".hl_header--controls");if(!e)return null;let t=e.querySelector('button[aria-label*="Voice Calling" i], button[aria-label*="call" i]');if(!t)return null;let o=t;for(;o&&o.parentElement!==e;)o=o.parentElement;return o?{parent:e,before:o}:null},ri=()=>{if(!St||St.isConnected)return;let e=fg();e&&e.parent.insertBefore(St,e.before)},Vc=async()=>{if(!(oi||St)&&vg()){oi=!0;try{let e=await ja();if(!e.length)return;let t=await Ua()??e[0],o=e.length>1,r=document.createElement("div");r.id=yg,r.style.cssText="position:relative;display:inline-flex;align-items:center;margin:0 6px;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:7px;padding:5px 11px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${y.pill};color:${n.bone};font-family:${u.sans};font-size:11px;white-space:nowrap;cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${u.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${Do[t]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let s=i=>{let l=a.querySelector(".ws-ca-team");l&&(l.textContent=Do[i])};if(o){let i=document.createElement("div");i.style.cssText=`position:fixed;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;z-index:99999;`;let l=()=>{i.innerHTML="",e.forEach(d=>{let c=document.createElement("div"),p=d===t;c.style.cssText=`padding:9px 14px;font-family:${u.sans};font-size:13px;color:${p?n.emeraldBright:n.bone};cursor:pointer;background:${p?n.emeraldGlow:"transparent"};`,c.textContent=Do[d],c.addEventListener("mouseenter",()=>{d!==t&&(c.style.background=n.steel)}),c.addEventListener("mouseleave",()=>{d!==t&&(c.style.background="transparent")}),c.addEventListener("click",b=>{b.stopPropagation(),t=d,Kl(d),s(d),l(),i.style.display="none"}),i.appendChild(c)})};l(),document.body.appendChild(i),a.addEventListener("click",d=>{if(d.stopPropagation(),i.style.display==="block"){i.style.display="none";return}let c=a.getBoundingClientRect();i.style.top=`${Math.round(c.bottom+6)}px`,i.style.left=`${Math.round(c.left)}px`,i.style.display="block"}),document.addEventListener("click",()=>{i.style.display="none"})}St=r,ri(),m.info(`[calling-as] chip mounted in header (roles=${e.join(",")}, active=${t}, multi=${o})`)}catch(e){m.error("[calling-as] build failed",e)}finally{oi=!1,Yc=Date.now()}}},Jc=()=>{St?ri():Vc(),Kc===void 0&&(Kc=window.setInterval(()=>{St?ri():Date.now()-Yc>=gg&&Vc()},1500))};var xg="#12161D",wg="#EDEEF0",Qc=e=>{let o=getComputedStyle(e).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],s=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&s>=230},Zc=e=>{e.style.setProperty("background-color",xg,"important"),e.style.setProperty("color",wg,"important")},kg=()=>{for(let e of Array.from(document.body.children)){if(e.tagName!=="DIV")continue;let t=e;if(!(t.id||t.className)&&getComputedStyle(t).position==="fixed")return t}return null},Eg=e=>{Qc(e)&&Zc(e);for(let t of Array.from(e.querySelectorAll("*")))Qc(t)&&Zc(t)},ni=null,hr=null,ep=()=>{hr&&(hr.disconnect(),hr=null),ni=null},$g=e=>{if(ni===e)return;ep(),ni=e;let t=!1,o=()=>{t=!1;try{Eg(e)}catch(a){m.debug("[dialer-theme] paint failed",a)}},r=()=>{t||(t=!0,requestAnimationFrame(o))};hr=new MutationObserver(r),hr.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),m.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},Xc=!1,Bn=()=>{if(Xc)return;Xc=!0;let e=()=>{let o=kg();o?$g(o):ep()};e(),new MutationObserver(e).observe(document.body,{childList:!0})};var Tg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",Cg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",Sg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",rp="tc_closing_agent",Lg="tc_closing_office",Pe="ws-crm-closing-agent-picker-button",np="ws-crm-closing-agent-picker-modal",Ag=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Mg=/\/v2\/location\/([A-Za-z0-9]+)/,vr=()=>{let e=window.location.pathname,t=e.match(Ag);if(!t)return null;let o=e.match(Mg);return{oppId:t[1],locationId:o?o[1]:null}},ci=async e=>{let t=await fetch(Tg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,query:e.query??"",contact_id:e.contactId??null,contact_type:e.contactType??null,limit:e.limit??20}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},tp=async e=>{let t=await fetch(Cg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,opp_id:e.oppId,field_key:e.fieldKey,value:e.value}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Ig=async(e,t)=>{try{let o=await fetch(Sg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,field_key:rp}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let s=await ci({tenantId:t,contactId:a,limit:1});if(!s.ok||!s.results.length)return null;let i=s.results[0];return{id:i.id,name:i.name,companyName:i.companyName??""}}catch(o){return m.warn("[closing-agent] fetchCurrent failed:",o),null}},Lt=null,Pg=60*60*1e3,pi=e=>`ws-crm-to-cache:${e}`,ap=e=>{try{let t=window.localStorage.getItem(pi(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>Pg||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},sp=(e,t,o)=>{try{window.localStorage.setItem(pi(e),JSON.stringify({contactId:t,contactName:o,ts:Date.now()}))}catch{}},Og=e=>{try{window.localStorage.removeItem(pi(e))}catch{}},si="ws-crm-closing-agent-field-link",Bg=()=>{let e=document.querySelector(".crm-opportunities-modal");e&&(e.querySelectorAll(`.${si}`).forEach(t=>t.remove()),e.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(t=>{t.style.removeProperty("color"),t.style.removeProperty("caret-color"),t.style.removeProperty("visibility"),delete t.dataset.wsClosingAgentDecorated}))},ai=!1,mi=async e=>{if(ai)return;let t=ip();if(!t)return;let o=(t.value||"").trim();if(!o){m.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){m.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(t.dataset.wsClosingAgentDecorated!==o){ai=!0;try{m.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await ci({tenantId:e,contactId:o,limit:1});if(!r.ok||!r.results.length){m.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];m.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),ii(a.id,a.name,e);let s=document.getElementById(Pe);if(s){it(s,{status:"linked",contactName:a.name});let i=vr();i&&sp(i.oppId,a.id,a.name)}}catch(r){m.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{ai=!1}}},Hg=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,ip=()=>{let t=document.querySelectorAll("*"),o=[],r=[],a=[];for(let d of t){let c=(d.textContent||"").trim();Hg.test(c)?o.push(d):c.length<80&&/Title\s+Officer/i.test(c)&&r.push(c);for(let p of["aria-label","placeholder","data-label","title","name","data-test"]){let b=d.getAttribute(p);b&&/Title\s+Officer/i.test(b)&&a.push({tag:d.tagName.toLowerCase(),attr:p,value:b})}}if(m.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&m.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&m.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((d,c)=>d.querySelectorAll("*").length-c.querySelectorAll("*").length);let i=o[0].parentElement,l=0;for(;i&&l<8;){let d=i.querySelector("input");if(d)return m.info(`[closing-agent] findInput: located input ${l} levels up from label`),d;i=i.parentElement,l+=1}return m.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},ii=(e,t,o)=>{let r=ip();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==e){a&&r.parentElement?.querySelectorAll(`.${si}`).forEach(i=>i.remove());{let s=r.parentElement;if(!s)return;r.dataset.wsClosingAgentDecorated=e,r.style.visibility="hidden",window.getComputedStyle(s).position==="static"&&(s.style.position="relative");let l=document.createElement("a");l.className=si,l.href=`/v2/location/${o}/contacts/detail/${e}`,l.textContent=t,l.style.cssText=`
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
      border-radius: ${y.sm};
      z-index: 2;
    `,l.addEventListener("mouseenter",()=>{l.style.textDecoration="underline"}),l.addEventListener("mouseleave",()=>{l.style.textDecoration="none"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),window.location.href=l.href}),s.appendChild(l)}}},Hn=()=>{document.getElementById(np)?.remove()},Rg=e=>{Hn();let t=document.createElement("div");t.id=np,t.style.cssText=`
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
    border-radius: ${y.lg};
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
        border-radius: ${y.sm};
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
        border-radius: ${y.sm};
        background: ${n.obsidian};
        margin-bottom: 16px;
      ">
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Start typing to search.
      </div>
    </div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-top-cancel" type="button" style="
        ${D}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),s=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),t.addEventListener("click",c=>{c.target===t&&Hn()}),s?.addEventListener("click",Hn);let i,l="",d=async c=>{if(a&&c!==l){if(l=c,!c.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let p=await ci({tenantId:e.locationId,query:c,contactType:"closing_agent",limit:20});if(!p.ok||!Array.isArray(p.results)||p.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",p.results.forEach(b=>{let h=document.createElement("button");h.type="button",h.style.cssText=`
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
        `,h.innerHTML=`
          <div style="font-weight: 500;">${Rn(b.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${Rn(b.email||"(no email)")} \xB7 ${Rn(b.phone||"no phone")}
            ${b.companyName?` \xB7 ${Rn(b.companyName)}`:""}
          </div>
        `,h.addEventListener("mouseenter",()=>{h.style.background=n.slate}),h.addEventListener("mouseleave",()=>{h.style.background="transparent"}),h.addEventListener("click",()=>{Hn(),e.onPick(b)}),a.appendChild(h)})}catch(p){m.error("Closing Agent picker search failed",p),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let c=r.value;i!==void 0&&clearTimeout(i),i=window.setTimeout(()=>{d(c)},250)})},Rn=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),it=(e,t)=>{let o=e.querySelector(".ws-top-label"),r=e.querySelector(".ws-top-dot"),a="Link Closing Agent",s=n.amber,i=n.bone,l="transparent",d=n.steel,c="pointer";switch(t.status){case"loading":a="Loading Closing Agent\u2026",s=n.coolGray,i=n.ash,c="wait";break;case"empty":a="Link Closing Agent",s=n.amber;break;case"linked":a=t.contactName?`Closing Agent: ${t.contactName}`:"Closing Agent: \u2713",s=n.emerald,l=n.emeraldGlow,d=n.emeraldBorder,i=n.emeraldBright;break;case"saving":a="Linking\u2026",s=n.coolGray,i=n.ash,c="wait";break}o&&(o.textContent=a),r&&(r.style.background=s,r.style.boxShadow=`0 0 6px ${s}`),e.style.background=l,e.style.borderColor=d,e.style.color=i,e.style.cursor=c},Dg=(e,t)=>{let o=document.createElement("button");o.id=Pe,o.type="button",o.dataset.oppId=e,o.style.cssText=D,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};it(o,r);let a=ap(e);return a&&(r={status:"linked",contactName:a.contactName},it(o,r),Lt={oppId:e,contactId:a.contactId,contactName:a.contactName,tenantId:t}),(async()=>{let i=await Ig(e,t);i?(r={status:"linked",contactName:i.name},it(o,r),Lt={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},ii(i.id,i.name,t)):a||(r={status:"empty"},it(o,r),Lt?.oppId===e&&(Lt=null),Bg(),Og(e))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||Rg({oppId:e,locationId:t,onPick:async i=>{r={status:"saving"},it(o,r);try{let l=await tp({tenantId:t,oppId:e,fieldKey:rp,value:i.id});if(!l.ok)throw new Error(l.error??"Save failed");i.companyName&&i.companyName.trim()&&await tp({tenantId:t,oppId:e,fieldKey:Lg,value:i.companyName.trim()}),r={status:"linked",contactName:i.name},it(o,r),Lt={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},sp(e,i.id,i.name),ii(i.id,i.name,t),oc(e),m.info(`Closing Agent linked: ${i.name} (${i.id})${i.companyName?` \u2014 Company: ${i.companyName}`:""}`)}catch(l){m.error("Closing Agent link failed",l),r={status:"empty"},it(o,r)}}})}),o},Fg=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Ng=async()=>{for(let e of Fg)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},_r=!1,Fn=async()=>{if(!_r){_r=!0;try{await zg()}finally{_r=!1}}},zg=async()=>{let e=vr();if(!e||!e.locationId){document.getElementById(Pe)?.remove(),document.getElementById(`${Pe}-wrap`)?.remove(),Dn();return}let t=document.getElementById(Pe);if(t&&t.dataset.oppId===e.oppId){let d=U();d!==null&&d!=="Transaction Coordination"&&(t.remove(),document.getElementById(`${Pe}-wrap`)?.remove(),Dn());return}t&&(t.remove(),document.getElementById(`${Pe}-wrap`)?.remove());let o=U();if(o!==null&&o!=="Transaction Coordination")return;let r=await Ng();if(!r||!(ap(e.oppId)!==null||Lt!==null&&Lt.oppId===e.oppId)&&await te()!=="Transaction Coordination")return;let s=vr();if(!s||s.oppId!==e.oppId||!s.locationId)return;let i=Dg(e.oppId,s.locationId),l=document.createElement("span");l.id=`${Pe}-wrap`,l.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,l.appendChild(i),Z(r).appendChild(l),m.debug(`Mounted Closing Agent picker on opp ${e.oppId}`),qg(e.oppId),mi(s.locationId)},yr=null,li=null,di=null,Dn=()=>{yr?.disconnect(),yr=null,li=null,di=null},qg=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(yr&&li===e&&di===t||(Dn(),li=e,di=t,yr=new MutationObserver(()=>{let o=vr();if(!o||o.oppId!==e||!o.locationId){Dn();return}document.getElementById(Pe)||Fn(),mi(o.locationId)}),yr.observe(t,{childList:!0,subtree:!0})))},jg=()=>{Q("closing-agent-picker",ee,()=>{!document.getElementById(Pe)&&!_r&&Fn()})},op,Ug=()=>{op===void 0&&(op=window.setInterval(()=>{let e=vr();if(!e||!e.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(Pe)&&!_r&&(m.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),Fn()),mi(e.locationId)},2e3))},lp=()=>{m.info("[closing-agent] mountClosingAgentPickerButton invoked"),jg(),Ug(),Fn()};var Wg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Ye="ws-crm-manage-team-cta",cp="ws-crm-manage-team-modal",Gg=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,pp={manager:"Owner",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator",acq_manager:"ACQ Manager",dispo_manager:"Dispo Manager",tc_manager:"TC Manager"},Kg={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson},acq_manager:{bg:n.emeraldGlow,fg:n.emerald},dispo_manager:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc_manager:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},mp=()=>{let e=window.location.pathname.match(Gg);return e?{tenantId:e[1]}:null},zn=async e=>{let t=await fetch(Wg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok){let o="";try{o=await t.text()}catch{}throw new Error(`Team.Manage HTTP ${t.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await t.json()},Ee=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),lt=e=>Ee(e),bi="ws-crm-manage-team-toast",_i=(e,t="info",o=4e3)=>{document.getElementById(bi)?.remove();let r=t==="success"?n.emerald:t==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=bi,a.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999999;
    background: ${n.graphite};
    border: 1px solid ${r};
    border-radius: ${y.sm};
    color: ${n.bone};
    padding: 12px 18px;
    font-family: ${u.sans};
    font-size: 13px;
    max-width: 400px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  `,a.textContent=e,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(bi)===a&&a.remove()},o)},ui=()=>{document.getElementById(cp)?.remove()},Vg=(e,t)=>{let o=Kg[e]||{bg:n.slate,fg:n.ash};return`
    <span style="
      display: inline-block;
      background: ${o.bg};
      color: ${o.fg};
      border: 1px solid ${o.fg};
      border-radius: ${y.pill};
      padding: 2px 10px;
      font-family: ${u.mono};
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-bottom: 4px;
    ">${Ee(t)}</span>
  `},Yg=(e,t)=>{let o=[e.first_name,e.last_name].filter(Boolean).join(" ")||"(no name)",r=e.roles.map(i=>Vg(i.key,i.display)).join(""),a=t?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",s=t?"":'title="Owner-only action"';return`
    <div data-user-id="${lt(e.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${Ee(o)}
          ${e.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${u.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${Ee(e.email)}${e.phone?` &middot; ${Ee(e.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${s}>
        <button class="ws-team-edit" data-email="${lt(e.email)}" data-user-id="${lt(e.id)}" data-name="${lt(o)}" data-current-roles="${lt(e.role_keys.join(","))}" style="${D} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${lt(e.email)}" data-name="${lt(o)}" data-role-count="${lt(String(e.role_keys.length))}" style="${D} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},Jg=(e,t)=>e.length===0?`
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
  `+e.map(r=>Yg(r,t)).join(""),qn=async e=>{ui();let t=document.createElement("div");t.id=cp,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,t.addEventListener("click",d=>{d.target===t&&ui()});let o=document.createElement("div");o.style.cssText=`
    width: min(900px, 94vw);
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,o.innerHTML=`
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
        <div style="font-size: 20px; font-weight: 500;">Roster</div>
      </div>
      <button id="ws-team-close" style="${D} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 10px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),o.querySelector("#ws-team-close")?.addEventListener("click",ui);let r;try{r=await zn({tenant_id:e,action:"list"})}catch(d){let c=o.querySelector("#ws-team-content");c&&(c.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${Ee(d.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let d=o.querySelector("#ws-team-content");d&&(d.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${Ee(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=P(),s=!!(a&&r.roster.some(d=>d.id===a&&d.role_keys.includes("manager"))),i=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${u.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} owner</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",l=o.querySelector("#ws-team-content");if(l&&(l.innerHTML=i+Jg(r.roster,s)),s)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{Qg(e)}),o.querySelectorAll(".ws-team-edit").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;Zg(e,{email:p.dataset.email||"",name:p.dataset.name||"",currentRoles:(p.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;Xg(e,{email:p.dataset.email||"",name:p.dataset.name||"",roleCount:parseInt(p.dataset.roleCount||"0",10)})})});else{let d=o.querySelector("#ws-team-actions");d&&(d.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Owner. Owner role required to add/edit/remove team members.
        </div>
      `)}},Qg=e=>{let t="ws-crm-manage-team-add-modal";document.getElementById(t)?.remove();let o=document.createElement("div");o.id=t,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,o.addEventListener("click",i=>{i.target===o&&o.remove()});let r=`
    width: 100%;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
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
  `,s=document.createElement("div");s.style.cssText=`
    width: min(500px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,s.innerHTML=`
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
      <option value="manager">Owner</option>
      <option value="acq">Acquisitions Rep</option>
      <option value="acq_manager">ACQ Manager</option>
      <option value="dispo">Disposition Rep</option>
      <option value="dispo_manager">Dispo Manager</option>
      <option value="tc">Transaction Coordinator</option>
      <option value="tc_manager">TC Manager</option>
    </select>

    <div id="ws-team-add-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px; margin-top: 12px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
      <button id="ws-team-add-cancel" style="${D} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(s),document.body.appendChild(o),s.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),s.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let i=(s.querySelector("#ws-team-add-first")?.value||"").trim(),l=(s.querySelector("#ws-team-add-last")?.value||"").trim(),d=(s.querySelector("#ws-team-add-email")?.value||"").trim(),c=(s.querySelector("#ws-team-add-mobile")?.value||"").trim(),p=(s.querySelector("#ws-team-add-role")?.value||"").trim(),b=s.querySelector("#ws-team-add-error"),h=s.querySelector("#ws-team-add-submit");if(!i||!l||!d||!c||!p){b&&(b.textContent="All fields are required.");return}h&&(h.disabled=!0,h.textContent="Adding\u2026",h.style.opacity="0.7"),b&&(b.textContent="");try{let _=await zn({tenant_id:e,action:"add",first_name:i,last_name:l,email:d,mobile:c,role:p,triggered_by_user_id:P()});if(!_.ok){b&&(b.textContent=_.error||"Failed to add employee"),h&&(h.disabled=!1,h.textContent="Add Employee",h.style.opacity="1");return}o.remove(),_i(`Added ${i} ${l} as ${pp[p]||p}.`,"success"),await qn(e)}catch(_){b&&(b.textContent=_.message),h&&(h.disabled=!1,h.textContent="Add Employee",h.style.opacity="1")}})},Zg=(e,t)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let s=i=>{let l=t.currentRoles.includes(i)?"checked":"";return`
      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: ${n.slate}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; cursor: pointer; margin-bottom: 6px;">
        <input type="checkbox" data-role-key="${i}" ${l} style="cursor: pointer;" />
        <span style="font-size: 13px;">${Ee(pp[i])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${Ee(t.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${Ee(t.email)}</div>

    <div style="margin-bottom: 16px;">
      ${s("manager")}
      ${s("acq")}
      ${s("acq_manager")}
      ${s("dispo")}
      ${s("dispo_manager")}
      ${s("tc")}
      ${s("tc_manager")}
    </div>

    <div id="ws-team-edit-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-edit-cancel" style="${D} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let i=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(c=>c.checked).map(c=>c.dataset.roleKey||"").filter(Boolean),l=a.querySelector("#ws-team-edit-error"),d=a.querySelector("#ws-team-edit-submit");if(i.length===0){l&&(l.textContent="Select at least one role. To fully offboard, use Remove instead.");return}d&&(d.disabled=!0,d.textContent="Saving\u2026",d.style.opacity="0.7"),l&&(l.textContent="");try{let c=await zn({tenant_id:e,action:"update",email:t.email,roles:i,triggered_by_user_id:P()});if(!c.ok){l&&(l.textContent=c.error||"Failed to update roles"),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1");return}r.remove(),_i(`Updated roles for ${t.name}.`,"success"),await qn(e)}catch(c){l&&(l.textContent=c.message),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1")}})},Xg=(e,t)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
    border: 1px solid ${n.crimson};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.crimson}; margin-bottom: 4px;">Remove from Team</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${Ee(t.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${Ee(t.email)} will be removed from all ${t.roleCount} role${t.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${u.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${D} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let s=a.querySelector("#ws-team-remove-error"),i=a.querySelector("#ws-team-remove-submit");i&&(i.disabled=!0,i.textContent="Removing\u2026",i.style.opacity="0.7"),s&&(s.textContent="");try{let l=await zn({tenant_id:e,action:"remove",email:t.email,triggered_by_user_id:P()});if(!l.ok){s&&(s.textContent=l.error||"Failed to remove"),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1");return}r.remove(),_i(`Removed ${t.name} from the team.`,"success"),await qn(e)}catch(l){s&&(s.textContent=l.message),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1")}})},ef=89,tf=93,of=310,rf=34,nf=14,af=14,sf=3,Nn=e=>{let t=document.querySelector('iframe[name="settings-app"]');if(!t){e.style.right="24px";return}let o=t.getBoundingClientRect(),r=window.innerWidth-o.right+ef;e.style.right=`${Math.max(r,16)}px`},lf=e=>{let t=document.createElement("button");return t.id=Ye,t.type="button",t.style.cssText=`
    position: fixed;
    top: ${tf}px;
    right: 24px;
    width: ${of}px;
    height: ${rf}px;
    padding: 0 ${af}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${sf}px;
    font-family: ${u.sans};
    font-size: ${nf}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,t.addEventListener("mouseenter",()=>{t.style.background=n.emeraldBright}),t.addEventListener("mouseleave",()=>{t.style.background=n.emerald}),t.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,t.addEventListener("click",()=>{qn(e)}),Nn(t),setTimeout(()=>Nn(t),200),setTimeout(()=>Nn(t),800),df(),t},dp=!1,df=()=>{dp||(dp=!0,window.addEventListener("resize",()=>{let e=document.getElementById(Ye);e instanceof HTMLButtonElement&&Nn(e)}))},hi=!1,cf=()=>{if(!hi){hi=!0;try{let e=mp();if(!e){document.getElementById(Ye)?.remove(),document.getElementById(`${Ye}-floater`)?.remove();return}let t=document.getElementById(Ye);if(t&&t.dataset.tenantId===e.tenantId)return;document.getElementById(`${Ye}-floater`)?.remove();let o=document.createElement("div");o.id=`${Ye}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=lf(e.tenantId);r.dataset.tenantId=e.tenantId,o.appendChild(r),document.body.appendChild(o),m.debug(`[manage-team] mounted (floater) for tenant ${e.tenantId}`)}finally{hi=!1}}},bp=()=>{if(!mp()){document.getElementById(Ye)?.remove(),document.getElementById(`${Ye}-floater`)?.remove();return}cf()};var pf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",mf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/add-contact",gi="ws-crm-prepare-contract-button",up="ws-crm-prepare-contract-menu",$e="ws-crm-prepare-contract-modal",hp="ws-crm-modal-date-style",Je="https://services.leadconnectorhq.com",wp=()=>{if(document.getElementById(hp))return;let e=document.createElement("style");e.id=hp,e.textContent=`
    #${$e} input[type="date"] { color-scheme: dark; }
    #${$e} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
  `,document.head.appendChild(e)},fi="__WS_CRM_CAPTURED_AUTH",bf=50*60*1e3,wr=()=>{try{let e=localStorage.getItem(fi);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>bf?(localStorage.removeItem(fi),null):t:null}catch{return null}},uf=e=>{try{localStorage.setItem(fi,JSON.stringify(e))}catch{}},ho=()=>{let e=wr(),t=window;if(t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{},t.__WS_CRM_DIAG.authChecks=(t.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${t.__WS_CRM_DIAG.authChecks}]`,e?`present (captured ${Date.now()-e.capturedAt}ms ago, ${e.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!e)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(o["token-id"]=e.tokenId),o},_p=(e,t)=>new Promise(o=>{let r=Date.now(),a=()=>{if((wr()?.capturedAt??0)>e)return o(!0);if(Date.now()-r>t)return o(!1);window.setTimeout(a,250)};a()}),uo=async(e,t={},o=2)=>{let r=wr()?.capturedAt??0,a;try{a={...ho(),...t.headers??{}}}catch(i){if(o>0&&await _p(r,4e3))return uo(e,t,o-1);throw i}let s=await fetch(e,{...t,headers:a});return s.status!==401||o<=0?s:await _p(r,4e3)?uo(e,t,o-1):s},yp=!1,hf=()=>{if(yp)return;yp=!0;let e=window;e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let t=()=>{let d=wr();return!!(d&&d.authorization&&Date.now()-(d.capturedAt||0)<3e5)},o=(d,c,p)=>{e.__WS_CRM_DIAG.lastSeenHeaders={url:d,headers:c,source:p};let b=c.authorization||c.Authorization;if(!b){e.__WS_CRM_DIAG.fetchCalls+e.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${p} no-auth]`,{url:d.split("?")[0],headerKeys:Object.keys(c)});return}p==="fetch"?e.__WS_CRM_DIAG.fetchAuthSeen++:e.__WS_CRM_DIAG.xhrAuthSeen++;let h=c["token-id"]||c["Token-Id"]||void 0,_=wr()?.authorization;uf({authorization:b,tokenId:h,capturedAt:Date.now()}),_!==b&&(e.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${p}] captured GHL auth from ${d.split("?")[0]} (${b.slice(0,24)}\u2026)`))},r=window.fetch;window.fetch=async function(...d){let c=typeof d[0]=="string"?d[0]:d[0]instanceof URL?d[0].toString():d[0].url,p=d[1]||{};if(c&&c.includes("services.leadconnectorhq.com")&&!t()){e.__WS_CRM_DIAG.fetchCalls++;let b=p.headers;!b&&d[0]instanceof Request&&(b=d[0].headers);let h={};if(b instanceof Headers)b.forEach((_,g)=>h[g.toLowerCase()]=_);else if(Array.isArray(b))b.forEach(([_,g])=>h[_.toLowerCase()]=g);else if(b&&typeof b=="object")for(let _ of Object.keys(b))h[_.toLowerCase()]=b[_];o(c,h,"fetch")}return r.apply(this,d)};let a=XMLHttpRequest.prototype,s=a.open,i=a.setRequestHeader,l=a.send;a.open=function(d,c,...p){return this.__wsCrmUrl=c,this.__wsCrmHeaders={},s.call(this,d,c,...p)},a.setRequestHeader=function(d,c){return this.__wsCrmHeaders&&typeof d=="string"&&(this.__wsCrmHeaders[d.toLowerCase()]=c),i.call(this,d,c)},a.send=function(d){let c=this.__wsCrmUrl,p=this.__wsCrmHeaders;return c&&c.includes("services.leadconnectorhq.com")&&p&&!t()&&(e.__WS_CRM_DIAG.xhrCalls++,o(c,p,"xhr")),l.call(this,d)},m.debug("[prepare-contract] interceptors installed (fetch + XHR)")},kp=()=>{let e=j();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},_f=e=>{let t=e.dataset;return t.tenantId&&t.contactId?{tenantId:t.tenantId,contactId:t.contactId,oppId:t.oppId||void 0}:t.tenantId&&t.oppId?{tenantId:t.tenantId,contactId:"",oppId:t.oppId}:kp()},yf=e=>{let t=(e||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(t)||/assignment.*(contract|agreement)/i.test(t)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(t)||/purchase.*(contract|agreement)/i.test(t)?"PA":"passthrough"},xi=e=>/2\s*signers?/i.test(e||""),Ep="__WS_CRM_TEMPLATES_CACHE_V1",vf=24*60*60*1e3,vp=e=>{try{let t=window.localStorage.getItem(Ep);if(!t)return null;let o=JSON.parse(t);return o.tenantId!==e||Date.now()-o.cachedAt>vf?null:o.templates}catch{return null}},gf=(e,t)=>{try{let o={tenantId:e,templates:t,cachedAt:Date.now()};window.localStorage.setItem(Ep,JSON.stringify(o))}catch{}},ff=async e=>{let t=`${Je}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(e)}&skip=0&limit=10`,o;try{o=await uo(t,{method:"GET"})}catch(i){let l=vp(e);if(l)return m.info(`[prepare-contract] templates network failure, using cache (${l.length} items)`),l;throw i}if(!o.ok){let i=vp(e);if(i)return m.info(`[prepare-contract] templates fetch ${o.status}, using cache (${i.length} items)`),i;let l="";try{l=await o.text()}catch{}let d=l?` \u2014 ${l.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${d}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let s=a.map(i=>({id:(i._id??i.id??i.templateId)||"",name:i.name||i.title||"(unnamed template)",type:yf(i.name||i.title||"")})).filter(i=>!!i.id);return s.length>0&&gf(e,s),s},xf=async(e,t)=>{let o=await uo(`${Je}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(l=>/acquisition/i.test(l.name));if(!a)throw new Error("No Acquisition pipeline found on tenant");let s=await uo(`${Je}/opportunities/search?location_id=${encodeURIComponent(e)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(t)}&status=open&limit=20`,{method:"GET"});if(!s.ok)throw new Error(`ACQ opp search ${s.status}`);return((await s.json()).opportunities||[]).map(l=>({id:l.id,name:l.name||"(unnamed opp)",propertyAddress:l.name||"",updatedAt:l.updatedAt||null})).sort((l,d)=>{let c=l.updatedAt?Date.parse(l.updatedAt):0;return(d.updatedAt?Date.parse(d.updatedAt):0)-c})},wf=async(e,t)=>{let o=await uo(`${Je}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(d=>/marketing\s*tracker/i.test(d.name));if(!a)throw new Error("No Marketing Tracker pipeline found on tenant");let s=await fetch(`${Je}/opportunities/search?location_id=${encodeURIComponent(e)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(t)}&status=open&limit=20`,{method:"GET",headers:ho()});if(!s.ok)throw new Error(`MT opp search ${s.status}`);return((await s.json()).opportunities||[]).map(d=>({id:d.id,name:d.name||"(unnamed opp)",propertyAddress:d.name||"",updatedAt:d.updatedAt||null})).sort((d,c)=>{let p=d.updatedAt?Date.parse(d.updatedAt):0;return(c.updatedAt?Date.parse(c.updatedAt):0)-p})},kf=async e=>{let t=await fetch(pf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,template_id:e.templateId,template_type:e.templateType,opp_id:e.oppId,closing_date:e.closingDate,buyer_earnest_due_date:e.buyerEarnestDueDate,lender_source:e.lenderSource,triggered_by_user_id:e.userId,overrides:e.overrides,need_second_seller:e.needSecondSeller||void 0}),credentials:"omit"});if(!t.ok)throw new Error(`Contract.Stage HTTP ${t.status}`);return await t.json()},Ef=async(e,t,o)=>{let r=`${Je}/proposals/templates/to-proposal/${e}/${t}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:ho()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let s=await a.json(),i=s._id||s.id||s.proposal?._id||s.proposal?.id;if(!i)throw new Error("to-proposal returned no proposal id");return i},$f=async(e,t)=>{let o=await fetch(`${Je}/proposals/document/${t}?locationId=${encodeURIComponent(e)}`,{method:"GET",headers:ho()});if(!o.ok){let s=await o.text().catch(()=>"");throw new Error(`GET proposal ${t} HTTP ${o.status} ${s.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},$p=async e=>{let t=await fetch(`${Je}/contacts/${e}`,{method:"GET",headers:ho()});if(!t.ok){let a=await t.text().catch(()=>"");throw new Error(`GET contact ${e} HTTP ${t.status} ${a.slice(0,200)}`)}let o=await t.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},Tf=(e,t,o)=>{let a="ENTER 2ND SELLER NAME",s=v=>v==="signature2"||/_s2$/.test(v),i=v=>/^seller2_name_/.test(v),l={},d=new Set,c=0,p=0,b=0,h=0,_=Array.isArray(e.pages)?e.pages:[],g=(v,E)=>{!v||typeof v!="object"||(E(v),(v.children||[]).forEach(w=>g(w,E)))},T=(v,E)=>{(v.children||[]).forEach(w=>g(w,E))},x=!1;_.forEach(v=>T(v,E=>{let w=E.component?.options;w&&w.entityName==="contacts"&&s(w.fieldId||"")&&(x=!0)}));let C=new Set;return _.forEach(v=>{let E={};T(v,w=>{let k=w.component?.options;if(!k||k.entityName!=="contacts"||!w.responsiveStyles?.large?.position)return;let f=(k.fieldId||"").replace(/_s2$/,"").replace(/^signature2$/,"signature1"),$=`${w.type}|${f}`;(E[$]=E[$]||[]).push(w)}),Object.values(E).forEach(w=>{w.sort((f,$)=>(f.responsiveStyles?.large?.position?.top??0)-($.responsiveStyles?.large?.position?.top??0));let k=[];w.forEach(f=>{let $=f.responsiveStyles?.large?.position?.top??0,S=k.find(L=>Math.abs(L.top-$)<=30);S?S.els.push(f):k.push({top:$,els:[f]})}),k.forEach(f=>f.els.sort(($,S)=>($.responsiveStyles?.large?.position?.left??0)-(S.responsiveStyles?.large?.position?.left??0))),k.every(f=>f.els.length===2)?k.forEach(f=>C.add(f.els[1].id)):k.every(f=>f.els.length===1)&&k.length===2?C.add(k[1].els[0].id):k.forEach(f=>{f.els.length===2&&C.add(f.els[1].id)})})}),_.forEach(v=>{T(v,E=>{let w=E.component?.options;if(!w||!E.id)return;if(i(w.fieldId||"")||typeof w.text=="string"&&w.text.trim()===a||typeof w.placeholder=="string"&&w.placeholder.trim()===a){w.text=o.contactName,d.add(E.id),b+=1;return}if(w.entityName!=="contacts")return;let k=s(w.fieldId||""),f=C.has(E.id);x&&k!==f&&(h+=1);let $=x?k:f;w.recipient=$?o.id:t,l[E.id]=w.recipient,$?p+=1:c+=1})}),(e.fillableFields||[]).forEach(v=>{v.entityType==="contacts"&&l[v.id]&&(v.recipient=l[v.id]),(d.has(v.id)||i(v.fieldId||"")||typeof v.value=="string"&&v.value.trim()===a)&&(v.value=o.contactName)}),{s1Count:c,s2Count:p,nameFills:b,usedGeometry:!x,disagreements:h}},Cf=async(e,t,o,r,a)=>{let s;try{s=await $f(e,t)}catch(g){return{ok:!1,body:`fetchProposalDocument: ${g.message}`}}let i;try{i=await $p(o)}catch(g){return{ok:!1,body:`fetchContactBasics: ${g.message}`}}let l=`${i.firstName} ${i.lastName}`.trim()||i.email||o,d={id:o,firstName:i.firstName,lastName:i.lastName,email:i.email,contactName:l,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},b=[...(Array.isArray(s.recipients)?s.recipients:[]).filter(g=>g?.entityName!=="contacts"),d];if(a&&a.id!==o){b.push({id:a.id,firstName:a.firstName,lastName:a.lastName,email:a.email,contactName:a.contactName,isPrimary:!1,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"});let g=Tf(s,o,a);m.info(`[prepare-contract] second-seller assignment: S1=${g.s1Count} S2=${g.s2Count} nameFills=${g.nameFills}${g.usedGeometry?" (geometry fallback \u2014 template not hardened)":""}${g.disagreements>0?` \u2014 ${g.disagreements} marker/geometry disagreement(s), markers used`:""}`),g.s2Count===0&&m.warn("[prepare-contract] second seller attached as recipient but NO signer-2 elements were found to assign \u2014 template may need review")}let h={name:r||s.name,locationId:s.locationId||e,pages:s.pages||[],variables:s.variables||[],fillableFields:s.fillableFields||[],timezone:s.timezone||{},recipients:b,grandTotal:s.grandTotal},_=await fetch(`${Je}/proposals/document/${t}`,{method:"PUT",headers:{...ho(),"Content-Type":"application/json"},body:JSON.stringify(h)});if(!_.ok){let g=await _.text().catch(()=>"");return{ok:!1,status:_.status,body:g}}return{ok:!0}},Sf=(e,t)=>{let o=`/v2/location/${e}/payments/proposals-estimates/edit/${t}`;window.location.href=o},Un="__WS_CRM_PENDING_INSTRUCTIONS",Lf=60*1e3,Af=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],Mf=e=>{let t=(e||"").toLowerCase();for(let o of Af)if(t.includes(o.matches.toLowerCase()))return o;return null},If=(e,t,o)=>{try{let r={proposalId:e,title:t,bodyHtml:o,ts:Date.now()};localStorage.setItem(Un,JSON.stringify(r))}catch{}},Pf=()=>{try{let e=localStorage.getItem(Un);if(!e)return null;let t=JSON.parse(e);return!t?.proposalId||!t?.title||!t?.bodyHtml||Date.now()-(t.ts||0)>Lf?(localStorage.removeItem(Un),null):t}catch{return null}},Of=()=>{try{localStorage.removeItem(Un)}catch{}},Bf=(e,t)=>{document.getElementById($e)?.remove();let o=document.createElement("div");o.id=$e,o.style.cssText=`
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
    border-radius: ${y.lg};
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
    ">${ye(e)}</div>
    <div style="
      font-size: 13px;
      color: ${n.bone};
      margin-bottom: 20px;
    ">${t}</div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-pc-instructions-ack" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${u.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Got it, continue</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},Hf=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,Rf=()=>{let e=window.location.pathname.match(Hf);if(!e)return;let t=e[1],o=Pf();o&&o.proposalId===t&&(Of(),window.setTimeout(()=>{Bf(o.title,o.bodyHtml)},600))},gp="ws-crm-prepare-contract-toast",oe=(e,t="info",o=4e3)=>{document.getElementById(gp)?.remove();let r=document.createElement("div");r.id=gp;let a=t==="error"?n.crimson:n.emerald;r.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999999;
    max-width: 380px;
    background: ${n.graphite};
    color: ${n.bone};
    border: 1px solid ${a};
    border-left: 4px solid ${a};
    border-radius: ${y.md};
    font-family: ${u.sans};
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  `,r.textContent=e,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},fp=(e,t)=>new Promise(o=>{document.getElementById($e)?.remove();let r=document.createElement("div");r.id=$e,r.style.cssText=`
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
      border-radius: ${y.lg};
      padding: 24px 28px;
      color: ${n.bone};
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    `;let s=d=>{if(!d)return"";try{return new Date(d).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}catch{return d}},i=e.map(d=>`
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${ze(d.id)}" style="
          display: block;
          width: 100%;
          text-align: left;
          background: ${n.slate};
          border: 1px solid ${n.steel};
          border-radius: ${y.sm};
          padding: 14px 16px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: border-color 0.1s ease, background 0.1s ease;
          color: ${n.bone};
          font-family: ${u.sans};
        ">
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${ye(d.propertyAddress||d.name)}</div>
          ${d.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${ye(s(d.updatedAt))}</div>`:""}
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
      ">This ${ye(t.perspective)} has ${e.length} open deals</div>
      <div style="
        font-size: 12px;
        color: ${n.ash};
        margin-bottom: 16px;
        line-height: 1.4;
      ">Which property is this contract for? The ${ye(t.agreementLabel)} will use that opp's data.</div>
      <div>${i}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
        <button id="ws-pc-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Cancel</button>
      </div>
    `,r.appendChild(a),document.body.appendChild(r);let l=d=>{r.remove(),o(d)};r.addEventListener("click",d=>{d.target===r&&l(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>l(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.borderColor=n.emerald,d.style.background=n.graphite}),d.addEventListener("mouseleave",()=>{d.style.borderColor=n.steel,d.style.background=n.slate}),d.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault();let p=d.dataset.oppId||"";p&&l(p)})})}),Df=(e,t,o)=>new Promise(r=>{document.getElementById($e)?.remove();let a=document.createElement("div");a.id=$e,a.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${u.sans};
    `;let s=document.createElement("div");s.style.cssText=`
      width: min(460px, 92vw);
      background: ${n.graphite};
      border: 1px solid ${n.steel};
      border-radius: ${y.lg};
      padding: 24px 28px;
      color: ${n.bone};
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    `;let i=`
      display: block;
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin: 10px 0 4px;
    `,l=`
      width: 100%;
      background: ${n.slate};
      border: 1px solid ${n.steel};
      border-radius: ${y.sm};
      color: ${n.bone};
      font-family: ${u.sans};
      font-size: 13px;
      padding: 8px 12px;
      outline: none;
      box-sizing: border-box;
    `;s.innerHTML=`
      <div style="
        font-family: ${u.mono};
        font-size: 10px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${n.emerald};
        margin-bottom: 8px;
      ">Second Seller Needed</div>
      <div style="font-size: 17px; font-weight: 500; margin-bottom: 6px;">${ye(o)}</div>
      <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 12px; line-height: 1.5;">
        This is a 2-signer agreement, but the property has no second seller linked.
        Add them here \u2014 they'll be linked to the property and attached to the
        contract as the second signer automatically.
      </div>
      <div style="display: flex; gap: 10px;">
        <div style="flex: 1;"><label style="${i}">First name</label><input id="ws-pc-s2-first" type="text" style="${l}" /></div>
        <div style="flex: 1;"><label style="${i}">Last name</label><input id="ws-pc-s2-last" type="text" style="${l}" /></div>
      </div>
      <label style="${i}">Email <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0;">(required \u2014 contracts are emailed for signing)</span></label>
      <input id="ws-pc-s2-email" type="email" style="${l}" />
      <label style="${i}">Phone <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0;">(optional)</span></label>
      <input id="ws-pc-s2-phone" type="text" placeholder="+1..." style="${l}" />
      <div style="font-size: 11px; color: ${n.coolGray}; margin-top: 10px; line-height: 1.4;">
        Already in the system? Cancel and link them from the contact's Properties
        panel (Add person \u2192 Second seller), then prepare the contract again.
      </div>
      <div id="ws-pc-s2-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin: 8px 0 6px;"></div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button id="ws-pc-s2-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Cancel</button>
        <button id="ws-pc-s2-save" type="button" style="
          background: ${n.emerald};
          border: 1px solid ${n.emerald};
          color: ${n.bone};
          font-family: ${u.sans};
          font-size: 13px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Add & Continue</button>
      </div>
    `,a.appendChild(s),document.body.appendChild(a);let d=b=>{a.remove(),r(b)};a.addEventListener("click",b=>{b.target===a&&d(!1)}),s.querySelector("#ws-pc-s2-cancel")?.addEventListener("click",()=>d(!1));let c=s.querySelector("#ws-pc-s2-err"),p=s.querySelector("#ws-pc-s2-save");p?.addEventListener("click",async()=>{let b=x=>(s.querySelector(x)?.value||"").trim(),h=b("#ws-pc-s2-first"),_=b("#ws-pc-s2-last"),g=b("#ws-pc-s2-email"),T=b("#ws-pc-s2-phone");if(!h&&!_){c&&(c.textContent="Enter at least a first or last name.");return}if(!g){c&&(c.textContent="Email is required \u2014 the contract is emailed to them for signing.");return}c&&(c.textContent=""),p&&(p.disabled=!0,p.textContent="Adding\u2026");try{let x=await fetch(mf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,property_record_id:t,role:"seller_2",new_contact:{firstName:h,lastName:_,email:g,phone:T||void 0}})}),C=await x.json().catch(()=>({}));if(!x.ok||C?.ok===!1){c&&(c.textContent=C?.error||`Failed to add second seller (HTTP ${x.status}). You can add them from the Properties panel instead.`),p&&(p.disabled=!1,p.textContent="Add & Continue");return}m.info("[prepare-contract] second seller added + linked via gate modal"),d(!0)}catch(x){c&&(c.textContent=`Network error: ${x.message}`),p&&(p.disabled=!1,p.textContent="Add & Continue")}}),window.setTimeout(()=>s.querySelector("#ws-pc-s2-first")?.focus(),0)}),xp=async(e,t,o,r,a,s)=>{if(s.second_seller)return s;if(s.second_seller_warning)return oe(`This property's second-seller link looks broken (${s.second_seller_warning}). Fix it from the contact's Properties panel, then try again.`,"error",9e3),m.warn(`[prepare-contract] 2-signer gate: ${s.second_seller_warning}`),null;if(!s.property_record_id)return oe("Couldn't resolve the property record for this deal, so the second seller can't be linked here. Add them from the contact's Properties panel (Add person \u2192 Second seller), then try again.","error",9e3),null;if(!await Df(e,s.property_record_id,o.name))return m.info("[prepare-contract] 2-signer gate cancelled \u2014 aborting contract flow"),null;let l=await bo({tenantId:e,contactId:t,template:o,oppId:r,userId:a,needSecondSeller:o.type==="passthrough"?!0:void 0});return l.second_seller?l:(oe("Second seller was added but didn't resolve on re-check. Verify the property link in the Properties panel, then try again.","error",9e3),m.warn("[prepare-contract] 2-signer gate: re-stage still has no second_seller",l),null)},Ff=({tenantId:e,contactId:t,template:o,staged:r})=>{document.getElementById($e)?.remove(),wp();let a=r.debug||{},s=typeof a.propertyAddress=="string"?a.propertyAddress:"",i=typeof a.sellerName=="string"?a.sellerName:"",l=typeof a.purchasePrice=="number"?a.purchasePrice:0,d=typeof a.emd=="number"?a.emd:0,c=typeof a.cashAtClose=="number"?a.cashAtClose:l-d,p=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),b=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),h=typeof a.additionalTerms=="string"?a.additionalTerms:"",_=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",g=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",T=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],x=document.createElement("div");x.id=$e,x.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let C=document.createElement("div");C.style.cssText=`
    width: min(520px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let v=`
    font-family: ${u.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,E=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,w=`${E} text-align: right;`,k=`
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
  `,$=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `,S=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
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
  `,L=M=>['<option value="">(unset)</option>'].concat(T.map(G=>`<option value="${ze(G)}"${G===M?" selected":""}>${ye(G)}</option>`)).join("");C.innerHTML=`
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
    ">${ye(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the ACQ opportunity.</div>

    <div style="margin-bottom: 12px;">
      <div style="${f}">
        <div style="${v}">Property Address</div>
        <div style="${k}">${ye(s||"(set on Property record)")}</div>
      </div>
      <div style="${f}">
        <div style="${v}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${ze(i)}" placeholder="Seller name" style="${E}" />
      </div>
      <div style="${f}">
        <div style="${v}">Purchase Price</div>
        <div style="${$}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${l}" style="${w}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${v}">Earnest Deposit</div>
        <div style="${$}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${d}" style="${w}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${v}">Cash at Close</div>
        <div style="${$}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${c}" style="${w}" />
        </div>
      </div>
      <div style="${f}">
        <div style="${v}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${ze(p)}" placeholder="e.g. 30" style="${E}" />
      </div>
      <div style="${f}">
        <div style="${v}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${ze(b)}" placeholder="e.g. 10" style="${E}" />
      </div>
      <div style="${f}">
        <div style="${v}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${S}">${L(_)}</select>
      </div>
      <div style="${f}">
        <div style="${v}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${S}">${L(g)}</select>
      </div>
      <div style="${f} align-items: flex-start;">
        <div style="${v}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${E} resize: vertical; min-height: 60px; font-family: ${u.sans};">${ye(h)}</textarea>
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
        border-radius: ${y.sm};
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
        border-radius: ${y.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,x.appendChild(C),document.body.appendChild(x);let z=C.querySelector("#ws-pc-purchase-price"),N=C.querySelector("#ws-pc-emd"),H=C.querySelector("#ws-pc-cash-at-close"),O=!1;H?.addEventListener("input",()=>{O=!0});let V=()=>{if(O)return;let M=Number(z?.value||0),G=Number(N?.value||0);H&&(H.value=String(Math.max(0,M-G)))};z?.addEventListener("input",V),N?.addEventListener("input",V);let re=()=>x.remove();x.addEventListener("click",M=>{M.target===x&&re()}),C.querySelector("#ws-pc-cancel")?.addEventListener("click",re);let J=C.querySelector("#ws-pc-submit"),se=C.querySelector("#ws-pc-error");J?.addEventListener("click",async()=>{if(J){se&&(se.textContent=""),J.disabled=!0,J.textContent="Opening\u2026";try{let M=(C.querySelector("#ws-pc-seller-name")?.value||"").trim(),G=Number(z?.value||0),pt=Number(N?.value||0),Ze=Number(H?.value||0),mt=(C.querySelector("#ws-pc-days-to-close")?.value??"").trim(),Te=(C.querySelector("#ws-pc-inspection-days")?.value??"").trim(),ko=(C.querySelector("#ws-pc-additional-terms")?.value??"").trim(),It=(C.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),Eo=(C.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),ue={};if(M!==i&&(ue.sellerName=M),G!==l&&(ue.purchasePrice=G),pt!==d&&(ue.emd=pt),Ze!==c&&(ue.cashAtClose=Ze),mt!==p&&(ue.daysToClose=mt),Te!==b&&(ue.inspectionDays=Te),ko!==h&&(ue.additionalTerms=ko),It!==_&&(ue.currentOccupancy=It),Eo!==g&&(ue.occupancyAtClose=Eo),Object.keys(ue).length>0){m.info("[prepare-contract] PA modal submit with overrides:",ue),J.textContent="Saving\u2026";let na=P(),$o=await bo({tenantId:e,contactId:t,template:o,userId:na,overrides:ue});m.info("[prepare-contract] re-stage with overrides ok:",$o),J.textContent="Opening\u2026"}else m.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let he=s?`${s} - Purchase Agreement`:void 0,ra=xi(o.name)&&r.second_seller||null;await Ei(e,t,o,he,ra)}catch(M){J.disabled=!1,J.textContent="Open Contract",se&&(se.textContent=M.message||"Failed to open contract."),m.warn("[prepare-contract] PA confirm submit failed:",M)}}})},Nf=({tenantId:e,contactId:t,template:o,oppId:r,staged:a,userId:s,defaultClosingDate:i,defaultEMDDueDate:l})=>{document.getElementById($e)?.remove(),wp();let d=a.debug||{},c=typeof d.propertyAddress=="string"?d.propertyAddress:"",p=typeof d.sellerDisplay=="string"?d.sellerDisplay:"",b=typeof d.assignmentPrice=="number"?d.assignmentPrice:0,h=typeof d.buyerEMD=="number"?d.buyerEMD:0,_=typeof d.assignmentFee=="number"?d.assignmentFee:0,g=typeof d.acqPurchasePrice=="number"?d.acqPurchasePrice:0,T=typeof d.closingOffice=="string"?d.closingOffice:"",x=typeof d.buyerCompanyName=="string"?d.buyerCompanyName:"",C=i,v=l,E="",w=document.createElement("div");w.id=$e,w.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `;let k=document.createElement("div");k.style.cssText=`
    width: min(520px, 92vw);
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
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
  `,$=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${u.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,S=`${$} text-align: right;`,L=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,z=`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 0;
    border-bottom: 1px solid ${n.steel};
  `,N=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `;k.innerHTML=`
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
    ">${ye(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the source opp (MT/ACQ/Dispo/TC). Closing date, EMD due date, and lender source live only on the contract.</div>

    <div style="margin-bottom: 12px;">
      <div style="${z}">
        <div style="${f}">Property Address</div>
        <div style="${L}">${ye(c||"(set on Property record)")}</div>
      </div>
      <div style="${z}">
        <div style="${f}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${ze(p)}" placeholder="Seller name" style="${$}" />
      </div>
      <div style="${z}">
        <div style="${f}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${ze(x)}" placeholder="Buyer's entity / LLC name" style="${$}" />
      </div>
      <div style="${z}">
        <div style="${f}">Assignment Price</div>
        <div style="${N}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${b}" style="${S}" />
        </div>
      </div>
      <div style="${z}">
        <div style="${f}">Buyer Earnest Money</div>
        <div style="${N}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${h}" style="${S}" />
        </div>
      </div>
      <div style="${z}">
        <div style="${f}">Assignment Fee</div>
        <div style="${N}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${_}" style="${S}" />
        </div>
      </div>
      <div style="${z}">
        <div style="${f}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${ze(T)}" placeholder="Title company" style="${$}" />
      </div>
      <div style="${z}">
        <div style="${f}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${ze(C)}" style="${$}" />
      </div>
      <div style="${z}">
        <div style="${f}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${ze(v)}" style="${$}" />
      </div>
      <div style="${z}">
        <div style="${f}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${$}" />
      </div>
    </div>
    <div style="
      font-size: 11px;
      color: ${n.coolGray};
      margin: 0 0 14px;
      line-height: 1.4;
    ">Assignment Fee = Assignment Price \u2212 Original Purchase ($${g.toLocaleString("en-US",{minimumFractionDigits:2})}), auto-recalculated on Price edit. Type a value to override.</div>

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
        border-radius: ${y.sm};
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
        border-radius: ${y.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,w.appendChild(k),document.body.appendChild(w);let H=k.querySelector("#ws-pc-assignment-price"),O=k.querySelector("#ws-pc-assignment-fee"),V=!1;O?.addEventListener("input",()=>{V=!0});let re=()=>{if(V)return;let G=Number(H?.value||0);O&&(O.value=String(Math.max(0,G-g)))};H?.addEventListener("input",re);let J=()=>w.remove();w.addEventListener("click",G=>{G.target===w&&J()}),k.querySelector("#ws-pc-cancel")?.addEventListener("click",J);let se=k.querySelector("#ws-pc-submit"),M=k.querySelector("#ws-pc-error");se?.addEventListener("click",async()=>{if(!se)return;M&&(M.textContent="");let G=(k.querySelector("#ws-pc-seller-name")?.value||"").trim(),pt=Number(H?.value||0),Ze=Number(k.querySelector("#ws-pc-buyer-emd")?.value||0),mt=Number(O?.value||0),Te=(k.querySelector("#ws-pc-closing-office")?.value||"").trim(),ko=(k.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),It=(k.querySelector("#ws-pc-closing-date")?.value||"").trim(),Eo=(k.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),ue=(k.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!It){M&&(M.textContent="Closing Date is required.");return}se.disabled=!0,se.textContent="Opening\u2026";try{let he={};G!==p&&(he.sellerName=G),pt!==b&&(he.assignmentPrice=pt),Ze!==h&&(he.buyerEMD=Ze),mt!==_&&(he.assignmentFee=mt),Te!==T&&(he.closingOffice=Te),ko!==x&&(he.buyerCompanyName=ko);let ra=It!==C||Eo!==v||ue!==E,na=Object.keys(he).length>0||ra,$o=a;na?(m.info("[prepare-contract] AA modal submit, re-staging with overrides:",he),se.textContent="Saving\u2026",$o=await bo({tenantId:e,contactId:t,template:o,oppId:r,closingDate:It,buyerEarnestDueDate:Eo,lenderSource:ue,userId:s,overrides:Object.keys(he).length>0?he:void 0}),m.info("[prepare-contract] AA re-stage ok:",$o),se.textContent="Opening\u2026"):m.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let Di=$o?.debug?.propertyAddress||c,Sm=Di?`${Di} - Assignment Agreement`:void 0;await Ei(e,t,o,Sm),J()}catch(he){se.disabled=!1,se.textContent="Open Contract",M&&(M.textContent=he.message||"Failed to prepare contract."),m.warn("[prepare-contract] AA submit failed:",he)}})},bo=async e=>{m.info(`[prepare-contract] staging \u2014 template "${e.template.name}" (${e.template.type})`);let t=await kf({tenantId:e.tenantId,contactId:e.contactId,templateId:e.template.id,templateType:e.template.type,oppId:e.oppId,closingDate:e.closingDate,buyerEarnestDueDate:e.buyerEarnestDueDate,lenderSource:e.lenderSource,userId:e.userId,overrides:e.overrides,needSecondSeller:e.needSecondSeller});if(m.info(`[prepare-contract] stage response: ok=${t.ok}`,t),!t.ok)throw new Error(t.error||"Contract.Stage returned not ok");return t},Ei=async(e,t,o,r,a)=>{if(a&&!(a.email||"").trim()){oe(`Second seller ${a.contactName} has no email. Contracts are emailed for signing \u2014 add an email to their contact, then prepare the contract again.`,"error",9e3),m.warn(`[prepare-contract] aborting \u2014 second seller ${a.id} has no email`);return}let s=null;try{s=(await $p(t)).email||""}catch(c){m.warn("[prepare-contract] email pre-check fetch failed, proceeding:",c),s=null}if(s!==null&&!s.trim()){oe("This contact has no email. A contract is sent to the recipient for signing, so GHL needs an email to populate it. Add an email to the contact, then prepare the contract again.","error",9e3),m.warn(`[prepare-contract] aborting \u2014 contact ${t} has no email; not creating an empty proposal`);return}m.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${t}`);let i=await Ef(e,o.id,t);m.info(`[prepare-contract] proposal created: ${i}`),m.info(`[prepare-contract] attaching contact ${t} as primary signer${a?` + second seller ${a.id} (${a.contactName})`:""}${r?`, renaming to "${r}"`:""}`);let l=await Cf(e,i,t,r,a);l.ok?m.info(`[prepare-contract] contact${a?"s":""} attached to proposal ${i}`):(m.warn(`[prepare-contract] attach failed (status=${l.status??"n/a"}): ${l.body?.slice(0,300)??"no body"}`),oe(`Proposal created but couldn't auto-attach contact (HTTP ${l.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",l.body));let d=Mf(o.name);d&&!(a&&l.ok)&&(m.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),If(i,d.title,d.bodyHtml)),Sf(e,i)},zf=async e=>{let t=_f(e);if(!t){oe("Could not resolve contact context.","error");return}document.getElementById(up)?.remove();let o=document.createElement("div");o.id=up,o.style.cssText=`
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
    border-radius: ${y.md};
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
    ">Loading templates\u2026</div>`,e.appendChild(o);let r=s=>{!o.contains(s.target)&&s.target!==e&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await ff(t.tenantId)}catch(s){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${ye(s.message)}
      </div>`;return}if(a.length===0){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.ash}; font-size: 12px;">
        No proposal templates found on this tenant.
      </div>`;return}a.sort((s,i)=>{let l={PA:0,AA:1,passthrough:2};return l[s.type]!==l[i.type]?l[s.type]-l[i.type]:s.name.localeCompare(i.name)}),o.innerHTML="";for(let s of a){let i=document.createElement("button");i.type="button",i.style.cssText=`
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
    `;let l=s.type==="PA"?n.emerald:s.type==="AA"?n.blue:n.coolGray;i.innerHTML=`
      <div style="display: flex; align-items: baseline; gap: 8px;">
        <span style="
          font-family: ${u.mono};
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${l};
          flex-shrink: 0;
          min-width: 30px;
        ">${s.type==="passthrough"?"DOC":s.type}</span>
        <span style="flex: 1;">${ye(s.name)}</span>
      </div>`,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async d=>{d.stopPropagation(),d.preventDefault(),m.info(`[prepare-contract] template picked: ${s.name} (type=${s.type})`),o.remove(),document.removeEventListener("click",r,!0);let c=P();try{if(s.type==="AA"){let p;if(t.oppId)p=t.oppId,m.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${p} directly`);else{let C;try{C=await wf(t.tenantId,t.contactId)}catch(v){oe(`Failed to load buyer's MT opps: ${v.message}`,"error",6e3),m.warn("[prepare-contract] AA fetch opps failed:",v);return}if(C.length===0){oe("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if(C.length===1)p=C[0].id,m.info(`[prepare-contract] auto-selected MT opp ${p} (only one)`);else{m.info(`[prepare-contract] showing MT opp picker (${C.length} opps)`);let v=await fp(C,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!v){m.info("[prepare-contract] MT opp picker cancelled");return}p=v,m.info(`[prepare-contract] picked MT opp ${p}`)}}let b=C=>{let v=C.getFullYear(),E=String(C.getMonth()+1).padStart(2,"0"),w=String(C.getDate()).padStart(2,"0");return`${v}-${E}-${w}`},h=C=>{let v=new Date;return v.setDate(v.getDate()+C),b(v)},_=h(45),g=h(7);oe("Reading contract data\u2026","info",2500);let T;try{T=await bo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:p,closingDate:_,buyerEarnestDueDate:g,userId:c})}catch(C){oe(`Failed to prepare contract: ${C.message}`,"error",6e3),m.warn("[prepare-contract] AA stage failed:",C);return}let x=t.contactId||T.contact_id||"";if(!x){oe("Could not resolve buyer contact for this opp.","error",6e3);return}Nf({tenantId:t.tenantId,contactId:x,template:s,oppId:p,staged:T,userId:c,defaultClosingDate:_,defaultEMDDueDate:g})}else if(s.type==="PA"){if(!t.contactId){oe("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let p;try{p=await xf(t.tenantId,t.contactId)}catch(_){oe(`Failed to load ACQ opps: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA fetch opps failed:",_);return}if(p.length===0){oe("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let b;if(p.length===1)b=p[0].id,m.info(`[prepare-contract] auto-selected ACQ opp ${b} (only one)`);else{m.info(`[prepare-contract] showing ACQ opp picker (${p.length} opps)`);let _=await fp(p,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!_){m.info("[prepare-contract] ACQ opp picker cancelled");return}b=_,m.info(`[prepare-contract] picked ACQ opp ${b}`)}oe("Reading contract data\u2026","info",2500);let h;try{h=await bo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:b,userId:c})}catch(_){oe(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA stage failed:",_);return}if(xi(s.name)){let _=await xp(t.tenantId,t.contactId,s,b,c,h);if(!_)return;h=_}Ff({tenantId:t.tenantId,contactId:t.contactId,template:s,staged:h})}else{if(!t.contactId){oe("This template needs to be started from a contact page.","error",6e3);return}let p=null;if(xi(s.name)){let b;try{b=await bo({tenantId:t.tenantId,contactId:t.contactId,template:s,userId:c,needSecondSeller:!0})}catch(_){oe(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] passthrough stage failed:",_);return}let h=await xp(t.tenantId,t.contactId,s,void 0,c,b);if(!h)return;p=h.second_seller||null}oe(`Opening ${s.name}\u2026`,"info",2500);try{await Ei(t.tenantId,t.contactId,s,void 0,p)}catch(b){oe(`Failed to open contract: ${b.message}`,"error",6e3),m.warn("[prepare-contract] passthrough failed:",b)}}}catch(p){m.warn("[prepare-contract] picker click handler failed:",p),oe(`Unexpected error: ${p.message}`,"error",6e3)}}),o.appendChild(i)}},Tp=()=>{let e=document.createElement("button");return e.id=gi,e.type="button",e.style.cssText=`${D} position: relative; order: 5;`,e.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,e.addEventListener("mouseenter",()=>{e.style.borderColor=n.emerald}),e.addEventListener("mouseleave",()=>{e.style.borderColor=n.steel}),e.addEventListener("click",t=>{t.stopPropagation(),zf(e)}),e},qf="ws-crm-contact-actions-bar",jf=async()=>{let e=kp();if(!e){document.getElementById(gi)?.remove();return}let t=null;try{t=await I(`#${qf}`,{timeoutMs:ut+2e3})}catch{m.debug("[prepare-contract] actions bar not found within timeout");return}if(!t)return;let o=document.getElementById(gi);if(o){if(o.dataset.contactId===e.contactId)return;o.remove()}let r=Tp();r.dataset.contactId=e.contactId,r.dataset.tenantId=e.tenantId,t.appendChild(r),m.debug(`[prepare-contract] mounted for contact ${e.contactId}`)},At="ws-crm-prepare-contract-button-opp",gr=`${At}-wrap`,Uf=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Wf=/\/v2\/location\/([A-Za-z0-9]+)/,Gf=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],wi=()=>{let e=window.location.pathname,t=e.match(Uf);if(!t)return null;let o=e.match(Wf);return o?{oppId:t[1],tenantId:o[1]}:null},Kf=async()=>{for(let e of Gf)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},jn=!1,fr=null,ki=null,yi=null,vi,xr=()=>{fr?.disconnect(),fr=null,ki=null},Vf=e=>{if(fr&&ki===e)return;xr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ki=e,fr=new MutationObserver(()=>{let o=wi();if(!o||o.oppId!==e){xr();return}let r=U();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(At)?.remove(),document.getElementById(gr)?.remove(),xr();return}document.getElementById(At)||Cp()}),fr.observe(t,{childList:!0,subtree:!0}))},Yf=()=>{yi||(yi=new MutationObserver(()=>{vi===void 0&&(vi=window.setTimeout(()=>{vi=void 0;let e=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),t=!!document.getElementById(At);e&&!t&&!jn&&Cp()},300))}),yi.observe(document.body,{childList:!0,subtree:!0}))},Cp=async()=>{if(!jn){jn=!0;try{let e=wi();if(!e){document.getElementById(At)?.remove(),document.getElementById(gr)?.remove(),xr();return}let t=document.getElementById(At);if(t&&t.dataset.oppId===e.oppId){let l=U();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(gr)?.remove(),xr());return}t&&(t.remove(),document.getElementById(gr)?.remove());let o=await Kf();if(!o){m.debug("[prepare-contract] opp mount target not found");return}let r=await te();if(r!=="Marketing Tracker"){m.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=wi();if(!a||a.oppId!==e.oppId)return;let s=Tp();s.id=At,s.dataset.oppId=e.oppId,s.dataset.tenantId=e.tenantId;let i=document.createElement("span");i.id=gr,i.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),o.appendChild(i),m.debug(`[prepare-contract] mounted on MT opp ${e.oppId} (contactId deferred to click)`),Vf(e.oppId)}finally{jn=!1}}},Sp=()=>{Rf(),jf()};hf();function ye(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ze(e){return ye(e)}var Jf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",Mt="ws-crm-compute-offer-button",Ci="ws-crm-compute-offer-popover",Hp="ws-crm-offer-modal",Lp="ws-crm-contact-actions-bar",Qf=[".central-panel","[class*='central-panel']"],dt=e=>typeof e=="number"?`$${Math.round(e).toLocaleString("en-US")}`:"-",$i=e=>{if(typeof e!="number"||Math.round(e)===0)return"$0";let t=`$${Math.abs(Math.round(e)).toLocaleString("en-US")}`;return e<0?`\u2212${t}`:`+${t}`},Zf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ap=e=>{if(!e)return"";let t=String(e).split("-");return t.length!==3?String(e):`${Zf[Number(t[1])-1]||""} ${Number(t[2])}`.trim()},K=(e,t,o)=>{let r=document.createElement(e);return t&&(r.style.cssText=t),o!=null&&(r.textContent=o),r},Mp=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:12px;outline:none;`,Ti=async e=>{let t={tenant_id:e.tenantId,mode:e.mode};e.propertyRecordId?t.property_record_id=e.propertyRecordId:e.contactId&&(t.contact_id=e.contactId),e.mode!=="get"&&(e.propertyCondition!=null&&(t.property_condition=e.propertyCondition),e.repairOverride!==void 0&&(t.repair_override=e.repairOverride));let o=await fetch(Jf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},_o=()=>{document.getElementById(Ci)?.remove(),document.removeEventListener("mousedown",Rp,!0)};function Rp(e){let t=document.getElementById(Ci),o=document.getElementById(Mt),r=e.target;t&&!t.contains(r)&&o&&!o.contains(r)&&_o()}var Dp=(e,t)=>{_o();let o=e.getBoundingClientRect(),r=document.createElement("div");r.id=Ci;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${y.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${u.sans};color:${n.bone};font-size:13px;line-height:1.35;`,t(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",Rp,!0),0)},Wn=(e,t)=>{Dp(e,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(K("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(K("div",`color:${n.bone};font-size:12px;`,t))})},Xf=(e,t,o)=>{Dp(e,r=>{r.appendChild(K("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),t.forEach(a=>{let s=K("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);s.type="button",s.addEventListener("mouseenter",()=>s.style.borderColor=n.blue),s.addEventListener("mouseleave",()=>s.style.borderColor=n.steel),s.addEventListener("click",()=>{_o(),o(a.property_record_id)}),r.appendChild(s)})})},Kn=()=>{document.getElementById(Hp)?.remove(),document.removeEventListener("keydown",Fp,!0)};function Fp(e){e.key==="Escape"&&Kn()}var Ip=(e,t,o)=>{Kn(),_o();let r=o,a=!1,s="",i=document.createElement("div");i.id=Hp,i.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${u.sans};`,i.addEventListener("mousedown",p=>{p.target===i&&Kn()});let l=K("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);i.appendChild(l);let d=(p,b,h)=>{a||(a=!0,s="",c(),Ti({tenantId:e,propertyRecordId:t,mode:p,propertyCondition:b,repairOverride:h}).then(_=>{_&&_.ok?r={..._,current_offer:_.current_offer??r.current_offer,current_offer_date:_.current_offer_date??r.current_offer_date}:s=_&&_.error||"Request failed."}).catch(_=>{m.error("[compute-offer] worksheet request failed:",_),s="Request failed. Try again."}).finally(()=>{a=!1,c()}))};function c(){let p=r,b=!!p.has_comps;l.innerHTML="";let h=K("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),_=K("div","");_.appendChild(K("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),_.appendChild(K("div",`font-size:12px;color:${n.ash};margin-top:2px;`,p.address||"-"));let g=K("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");g.type="button",g.addEventListener("click",Kn),h.append(_,g),l.appendChild(h);let T=K("div","padding:14px 18px 18px;");l.appendChild(T);let x=K("select",Mp());(p.rehab_levels||[]).forEach(N=>{let H=document.createElement("option");H.value=N.key,H.textContent=N.label,N.key===(p.tier||p.property_condition)&&(H.selected=!0),x.appendChild(H)}),x.disabled=a,x.addEventListener("change",()=>d("recompute",x.value,C.value.trim()));let C=K("input",Mp());C.type="number",C.placeholder="uses the level",C.value=p.repair_override!=null?String(p.repair_override):"",C.disabled=a,C.addEventListener("keydown",N=>{N.key==="Enter"&&C.blur()}),C.addEventListener("change",()=>d("recompute",x.value,C.value.trim()));let v=K("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");v.appendChild(K("div",`font-size:12px;color:${b?n.bone:n.amber};`,b?`Investor comps: $${p.comp_price_per_sqft}/sqft \xB7 ${p.comp_count} comps${p.comp_pull_at?` \xB7 pulled ${Ap(p.comp_pull_at)}`:""}`:"No comps pulled yet."));let E=K("button",`flex-shrink:0;padding:6px 12px;border-radius:${y.sm};border:1px solid ${n.blue};background:${b?"transparent":n.blue};color:${b?n.blue:"#fff"};font-family:${u.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":b?"Re-pull Comps":"Pull Comps");E.type="button",E.disabled=a,E.addEventListener("click",()=>d("pull",x.value,C.value.trim())),v.append(E),T.appendChild(v),p.low_confidence&&b&&T.appendChild(K("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${p.comp_count??0} comps in window.`));let w=p.current_offer!=null;T.appendChild(K("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${y.sm};background:${n.slate};border:1px solid ${n.steel};color:${w?n.bone:n.ash};`,w?`Last offer made: ${dt(p.current_offer)}${p.current_offer_date?` \xB7 ${Ap(p.current_offer_date)}`:""}`:"No offer made yet."));let k=K("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),f=K("div","");f.appendChild(K("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),f.appendChild(x);let $=K("div","");$.appendChild(K("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),$.appendChild(C),k.append(f,$),T.appendChild(k);let S=K("div",`border-top:1px solid ${n.steel};padding-top:12px;`),L=(N,H,O)=>{let V=K("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${O?.strong?"font-weight:700;":""}`),re=K("div","");re.appendChild(K("div",`font-size:${O?.strong?"13":"12"}px;color:${n.bone};`,N)),O?.sub&&re.appendChild(K("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,O.sub));let J=K("div",`font-size:${O?.strong?"15":"12"}px;color:${O?.color||n.bone};white-space:nowrap;`,H);V.append(re,J),S.appendChild(V)};if(b&&p.imv!=null){L("Investor Market Value (IMV)",dt(p.imv)),p.arv!=null&&L("After Repair Value (ARV)",dt(p.arv),{color:n.ash});let N=p.repair_adjustment??0,H=-N,O=p.repair_override?"Repair override":p.property_condition_label||"Repairs";N===0?L(`Repairs (${O})`,"Included",{color:n.ash,sub:`${dt(p.repair_total)} in repairs included at IMV`}):L(`Repairs (${O})`,$i(H),{color:H<0?n.crimson:n.emerald,sub:`${dt(p.repair_total)} total, ${dt(p.baseline_repairs)} included at IMV`}),L("Min. Profit Target",$i(-(p.profit_target??0)),{color:n.ash}),L("Maximum Cash Offer (MAO)",dt(p.mao),{strong:!0,color:n.blue}),L("Target Profit",$i(-(p.ico_delta??0)),{color:n.ash}),L("Initial Cash Offer (ICO)",dt(p.ico),{strong:!0,color:n.blue})}else S.appendChild(K("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));T.appendChild(S);let z=K("div",`margin-top:12px;font-size:11px;min-height:14px;color:${s?n.crimson:n.ash};`);z.textContent=a?"Saving\u2026":s||(b?"Saved to the Property.":""),T.appendChild(z)}c(),document.body.appendChild(i),document.addEventListener("keydown",Fp,!0)},Pp=(e,t)=>{let o=document.createElement("button");o.type="button",o.id=Mt,o.dataset.contactId=e,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${y.sm};font-family:${u.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=i=>{o.disabled=i,o.style.cursor=i?"default":"pointer";let l=r();l&&(l.textContent=i?"Opening\u2026":"Offer Worksheet")},s=i=>{if(i.needs_property_selection&&i.properties&&i.properties.length){Xf(o,i.properties,l=>{a(!0),Ti({tenantId:t,propertyRecordId:l,mode:"get"}).then(d=>{d.ok&&d.property_record_id?Ip(t,d.property_record_id,d):Wn(o,d.error||"Couldn't load that property.")}).catch(d=>{m.error("[compute-offer] get failed:",d),Wn(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}i.ok&&i.property_record_id?Ip(t,i.property_record_id,i):Wn(o,i.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{s(await Ti({tenantId:t,contactId:e,mode:"get"}))}catch(i){m.error("[compute-offer] webhook failed:",i),Wn(o,"Request failed. Try again.")}finally{a(!1)}}}),o},ex=async()=>{for(let e of Qf)try{let t=await I(e,{timeoutMs:3e3});if(t)return t}catch{}return null},Op=async(e,t)=>{let o=t.querySelector(`#${Lp}`);if(!o)try{o=await I(`#${Lp}`,{timeoutMs:3e3,root:t})}catch{o=null}return o?(e.style.order="3",o.appendChild(e),!0):!1},Bp=()=>{let e=document.querySelectorAll(`#${Mt}`);for(let t=1;t<e.length;t++)e[t].remove()},tx=async()=>{let e=j();if(!e||!e.locationId||e.source!=="url"){document.getElementById(Mt)?.remove(),_o();return}let t=e.locationId,o=document.getElementById(Mt);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove(),_o();let r="seller";try{r=Be(await Oe(e.contactId,t))}catch(l){m.warn("[compute-offer] contact-type fetch threw - defaulting seller:",l)}if(r!=="seller"){m.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(Mt)?.remove();return}let a=await ex();if(!a){m.warn("[compute-offer] no central panel found");return}let s=j();if(!s||s.contactId!==e.contactId)return;let i=Pp(e.contactId,t);if(!await Op(i,a)){m.warn("[compute-offer] actions bar not found after waiting");return}Bp(),m.debug(`[compute-offer] mounted for ${e.contactId}`),Gn?.disconnect(),Gn=new MutationObserver(()=>{if(j()?.contactId!==e.contactId){Gn?.disconnect();return}if(!document.getElementById(Mt)){let l=Pp(e.contactId,t);Op(l,a).then(()=>Bp())}}),Gn.observe(a,{childList:!0})},Gn=null,kr=null,Np=()=>{let e=j()?.contactId??null;if(kr&&kr.id===e)return;let t=tx().finally(()=>{kr?.promise===t&&(kr=null)});kr={id:e,promise:t}};var Xn="reos-theme-stylesheet",sm="reos-theme-fonts",fo=!1,ox=()=>{let e=document.getElementById(sm);e&&e.remove()},rx=`

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

:root {

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

body,
.hl-app,
.app-container,
.hl_wrapper {
  background: var(--reos-obsidian) !important;
  color: var(--reos-bone) !important;
}

.hl_wrapper--inner,
[class*="hl_wrapper--inner"] {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

.hr-wrapper-container {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

.hr-config-provider {
  background: transparent !important;
  color: var(--reos-bone) !important;
}

html body .hr-icon svg[viewBox="0 -960 960 960"] path:not(#__reos_never_id):not(#__reos_a),
html body svg.hr-icon[viewBox="0 -960 960 960"] path:not(#__reos_never_id):not(#__reos_a) {
  fill: currentColor !important;
  stroke: none !important;
}

html body #edit-phone-number-modal [class*="rounded"][class*="border"]:has(textarea, input, [class*="hr-base-selection"], [class*="hr-select"]):not(#__reos_never_id) {
  border-color: transparent !important;
}

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

html body > div[style*="position: fixed"]:not([id]):not([class]) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

@keyframes _reos-first-paint-trigger {
  from { opacity: 0.9999999; }
  to { opacity: 1; }
}
html body {
  animation: _reos-first-paint-trigger 1ms ease-in-out 1 forwards;
}

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

html body .sidebar-v2 a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body .sidebar-v2-location a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body aside.default-bg-color a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i),
html body [class*="sidebar"] a:not(.active):not(.exact-active):not([class*="active"]) :is(svg, svg *, i) {
  color: var(--reos-bone) !important;

  stroke: currentColor !important;
  opacity: 1 !important;
}

#hl_header--copilot-icon,
a[aria-label="Ask AI Assistant"],
[class*="copilot-icon"] {
  display: none !important;
}

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

html body .sidebar-v2 a.active img,
html body aside.default-bg-color a.active img,
html body aside.default-bg-color a.exact-active img,
html body [class*="sidebar"] a.active img,
html body [class*="sidebar"] a.exact-active img {
  filter: brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%) !important;
}

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

.lead-connector {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}

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

html body #location-list-containrer .hl_swicher-heading,
html body #location-list-containrer .hl_swicher-heading * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

html body #location-list-containrer .hl_account:hover,
html body #location-list-containrer .hl_account:hover * {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  cursor: pointer !important;
}

html body .hl_v2-location_switcher {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
  border-radius: 8px !important;
}

html body .hl_v2-location_switcher .hl_v2_tip-arrow,
html body .hl_v2-location_switcher .hl_v2_tip-arrow::before,
html body .hl_v2-location_switcher .hl_v2_tip-arrow::after {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-cool-gray) !important;
}

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

html body #location-list-containrer .hl_account [class*="rounded-full"] {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  font-weight: 600 !important;
}

html body #location-list-containrer input[type="text"],
html body #location-list-containrer input:not([type="checkbox"]):not([type="radio"]) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}

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

html body img.w-4.h-4:not(#__reos_never_id) { min-width: 1rem !important; }
html body img.w-5.h-5:not(#__reos_never_id) { min-width: 1.25rem !important; }
html body img.w-6.h-6:not(#__reos_never_id) { min-width: 1.5rem !important; }
html body img.w-8.h-8:not(#__reos_never_id) { min-width: 2rem !important; }
html body img.w-10.h-10:not(#__reos_never_id) { min-width: 2.5rem !important; }
html body img.w-4.h-4:not(#__reos_never_id),
html body img.w-5.h-5:not(#__reos_never_id),
html body img.w-6.h-6:not(#__reos_never_id),
html body img.w-8.h-8:not(#__reos_never_id),
html body img.w-10.h-10:not(#__reos_never_id) {
  flex-shrink: 0 !important;
  object-fit: cover !important;
}

.bg-gray-50,
.bg-gray-100,
.bg-white {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

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

html body .hr-input__state-border:not(#__reos_never_id),
html body .hr-input .hr-input__state-border:not(#__reos_never_id),
html body .hr-input-wrapper .hr-input__state-border:not(#__reos_never_id) {
  border: 1px solid var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  border-radius: 4px !important;
}

html body .hr-input:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input-wrapper:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input__input:not(#__reos_never_id):hover .hr-input__state-border,
html body .hr-input__input:not(#__reos_never_id):hover ~ .hr-input__state-border,
html body .hr-input__state-border:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

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

html body .n-base-selection-input:focus,
html body .n-base-selection-input:focus-visible,
html body .n-input__input-el:focus,
html body .n-input__input-el:focus-visible {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
  outline: none !important;
}

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

label,
.form-label,
[class*="field-label"] {
  color: var(--reos-ash) !important;
}

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

html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type),
html body .n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type) .n-button__content {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .n-button .n-base-wave {
  background: var(--reos-emerald-glow) !important;
}

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
  background-color: #B83642 !important;
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
  background-color: #3A78E0 !important;
  border-color: #3A78E0 !important;
}

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

html body .n-dialog.n-dialog--warning .n-dialog__icon svg,
html body [class*="dialog"][class*="warning"] svg path[stroke] {
  stroke: var(--reos-amber) !important;
  color: var(--reos-amber) !important;
}

html body .n-dialog.n-dialog--info .n-dialog__icon svg,
html body [class*="dialog"][class*="info"] svg path[stroke] {
  stroke: var(--reos-blue) !important;
  color: var(--reos-blue) !important;
}

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

html body .n-tag--success-type {
  background-color: rgba(15, 181, 126, 0.15) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-tag--success-type .n-tag__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

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

html body .hr-base-selection-placeholder:not(#__reos_never_id),
html body .hr-base-selection-placeholder__inner:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .n-input--focus,
html body .n-base-selection--focus {
  border-color: var(--reos-emerald) !important;
}

html body .n-data-table:not(#__reos_never_id),
html body .n-data-table-wrapper:not(#__reos_never_id),
html body .n-data-table-base-table:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

html body .ghl-table-container:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

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

html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover,
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover > .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-tr.n-data-table-tr:not(.n-data-table-tr--summary):hover .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-td.n-data-table-td.n-data-table-td--hover {
  background-color: transparent !important;
}

html body .n-data-table:not(#__reos_never_id) {
  --n-merged-td-color-hover: transparent !important;
  --n-td-color-hover: transparent !important;
  --n-merged-th-color-hover: var(--reos-slate) !important;
}

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

  --n-opacity-disabled: 1 !important;
  opacity: 1 !important;
}

html body .n-button.n-button--default-type.icon-only.n-button--disabled:not(.quaternary):not(#__reos_never_id),
html body button.n-button.icon-only.hl-text-btn.n-button--disabled:not(.quaternary):not(#__reos_never_id) {
  opacity: 1 !important;
}

html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) .n-button__border,
html body .n-button.n-button--default-type.icon-only:not(.quaternary):not(#__reos_never_id) .n-button__state-border,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) .n-button__border,
html body button.n-button.icon-only.hl-text-btn:not(.quaternary):not(#__reos_never_id) .n-button__state-border {
  border: none !important;
  border-color: transparent !important;
  display: none !important;
}

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

html body .n-form-item.hl-form-item:not(#__reos_never_id),
html body .n-form-item.n-form-item--top-labelled:not(#__reos_never_id),
html body .n-form-item.n-form-item--medium-size.hl-form-item:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
}

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

html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M9 3h6"]),
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="M16 6v"]),
html body .hr-button:not(#__reos_never_id):hover:has(svg path[d*="trash"]),
html body .hr-button:not(#__reos_never_id):hover:has([class*="trash"]) {
  border-color: var(--reos-steel) !important;
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

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

html body [id*="delete" i]:not(#__reos_never_id):hover,
html body [aria-label*="Delete" i]:not(#__reos_never_id):hover,
html body [id*="remove" i]:not(#__reos_never_id):hover,
html body [aria-label*="Remove" i]:not(#__reos_never_id):hover,
html body [id*="trash" i]:not(#__reos_never_id):hover,
html body [aria-label*="Trash" i]:not(#__reos_never_id):hover {
  color: var(--reos-crimson) !important;
}

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

html body button.contact-bulk-action-options:not(#__reos_never_id),
html body button.contact-bulk-action-options:hover:not(#__reos_never_id),
html body button.contact-bulk-action-options:focus:not(#__reos_never_id) {
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

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

html body .hr-radio-button.hr-content-switcher:not(#__reos_never_id) .hr-radio-button__state-border {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

html body .hr-header-lite-left:not(#__reos_never_id),
html body .hr-header-lite-right:not(#__reos_never_id),
html body .hr-header-lite-icon-item:not(#__reos_never_id),
html body .hr-header-lite-content:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border-color: transparent !important;
}

html body .hr-header-lite-container:not(#__reos_never_id),
html body .hr-header-lite-container-v2:not(#__reos_never_id),
html body [id^="hr-header-lite-v-"]:not(#__reos_never_id),
html body [class*="hr-header-lite-container"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

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

html body .border-t-slate-200:not(#__reos_never_id),
html body [class*="border-t-slate-200"]:not(#__reos_never_id) {
  border-top-color: var(--reos-steel) !important;
}

html body #pendo-guide-container:not(#__reos_never_id),
html body [id^="pendo-guide-container"]:not(#__reos_never_id),
html body ._pendo-step-container-styles:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 2px solid var(--reos-emerald) !important;
  box-shadow: 0 0 20px rgba(15, 181, 126, 0.2) !important;
  color: var(--reos-bone) !important;
}

html body #pendo-guide-container:not(#__reos_never_id) .bb-text,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-text"],
html body #pendo-guide-container:not(#__reos_never_id) p,
html body #pendo-guide-container:not(#__reos_never_id) strong,
html body #pendo-guide-container:not(#__reos_never_id) .bb-text * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body #pendo-guide-container:not(#__reos_never_id) ._pendo-text-paragraph,
html body #pendo-guide-container:not(#__reos_never_id) [class*="_pendo-number-scale-poll"][class*="-description"] {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body #pendo-guide-container:not(#__reos_never_id) input.pendo-radio:checked + label,
html body #pendo-guide-container:not(#__reos_never_id) input[type="radio"]:checked + label {
  background-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  border-color: var(--reos-emerald) !important;
}

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

html body .hr-text:not(#__reos_never_id),
html body p.hr-text:not(#__reos_never_id),
html body [class*="hr-text"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-text-color-hover: var(--reos-bone) !important;
}

html body i.hr-icon-inner:not(#__reos_never_id),
html body .hr-icon-inner:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
}
html body .hr-icon-inner:not(#__reos_never_id) svg,
html body .hr-icon-inner:not(#__reos_never_id) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body .hr-input:not(#__reos_never_id) .hr-input__border {
  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

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

html body h2:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
}

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

html body .ui-table-container__wrapper:not(#__reos_never_id),
html body [class*="ui-table-container__wrapper"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

html body .ui-table-container:not(#__reos_never_id),
html body .ui-table-container__wrapper .ui-table-container:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

html body .ui-table-custom-header:not(#__reos_never_id) {
  border-bottom-color: var(--reos-steel) !important;
}

html body #SettingTexasSmsBlock p:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body div.flex.items-center.gap-2 > p.text-gray-800.ui-text-sm-medium:only-child:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id) .hr-menu-item-content-header,
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id):hover .hr-menu-item-content-header,
html body .hr-menu-item-content:not(.hr-menu-item-content--selected):not(#__reos_never_id):hover {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

html body .hr-data-table:not(#__reos_never_id),
html body .hr-data-table-wrapper:not(#__reos_never_id),
html body .hr-data-table-base-table:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}
html body td.hr-data-table-td:not(#__reos_never_id),
html body .hr-data-table-td:not(#__reos_never_id),

html body td.hr-data-table__body-cell:not(#__reos_never_id),
html body .hr-data-table__body-cell:not(#__reos_never_id),
html body td.hr-data-table__cell:not(#__reos_never_id),
html body .hr-data-table__cell:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
}

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

html body .hr-data-table:not(#__reos_never_id) .hr-data-table-tr,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-td,
html body .hr-data-table:not(#__reos_never_id) .hr-data-table-th {
  transition: none !important;
  transition-duration: 0s !important;
}

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

html body .hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover,
html body button.hr-button.hr-button--default-type.learn-more-button:not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  color: var(--reos-emerald-bright) !important;
}

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

html body .hr-radio-button:not(#__reos_never_id),
html body label.hr-radio-button:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

html body .hr-radio-button.hr-radio-button--checked:not(#__reos_never_id),
html body label.hr-radio-button.hr-radio-button--checked:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-emerald) !important;
  color: var(--reos-bone) !important;
}

html body .hr-radio-button:not(#__reos_never_id) .hr-radio-button__state-border {
  border-color: var(--reos-steel) !important;
  box-shadow: inset 0 0 0 1px var(--reos-steel) !important;
}
html body .hr-radio-button.hr-radio-button--checked:not(#__reos_never_id) .hr-radio-button__state-border,
html body .hr-radio-button:not(#__reos_never_id):hover .hr-radio-button__state-border {
  border-color: var(--reos-emerald) !important;
  box-shadow: inset 0 0 0 1px var(--reos-emerald) !important;
}

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

html body .ui-radio-group-item-icon:not(#__reos_never_id) img {
  background: transparent !important;
}

html body .hr-divider:not(#__reos_never_id),
html body [class*="hr-divider"]:not(#__reos_never_id) {
  --n-color: var(--reos-steel) !important;
  --n-text-color: var(--reos-ash) !important;
}

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

html body .hr-radio.hr-radio--checked .hr-radio__dot:not(#__reos_never_id),
html body .hr-radio .hr-radio__dot.hr-radio__dot--checked:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

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

html body .hr-radio.hr-radio--checked .hr-radio__dot-wrapper:not(#__reos_never_id),
html body .hr-radio .hr-radio__dot-wrapper:not(#__reos_never_id) {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}

html body .bg-warning-25:not(#__reos_never_id),
html body [class*="bg-warning-25"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

html body [class*="border-primary-"]:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
}

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

html body .hr-menu-item:not(#__reos_never_id):hover,
html body .hr-menu-item-content:not(#__reos_never_id):hover,
html body [class*="-nav-item"]:not(input):not(textarea):not([class*="-button"]):not(#__reos_never_id):hover,
html body a:not([class*="button"]):not([class*="btn"]):not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
}

html body .info-card:not(#__reos_never_id),
html body [class*="info-card"]:not(#__reos_never_id),
html body .bg-primary-25:not(#__reos_never_id),
html body [class*="bg-primary-25"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

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

html body .hover\\:bg-primary-300:not(#__reos_never_id):hover,
html body .hover\\:bg-primary-400:not(#__reos_never_id):hover,
html body .hover\\:bg-primary-500:not(#__reos_never_id):hover,
html body .hover\\:bg-primary-600:not(#__reos_never_id):hover,
html body .hover\\:bg-primary-700:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-3"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-4"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-5"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-6"]:not(#__reos_never_id):hover,
html body [class*="hover:bg-primary-7"]:not(#__reos_never_id):hover {
  background-color: var(--reos-emerald-bright) !important;
  background: var(--reos-emerald-bright) !important;
  border-color: var(--reos-emerald-bright) !important;
}

html body .focus\\:border-primary-700:not(#__reos_never_id):focus,
html body .focus\\:bg-primary-700:not(#__reos_never_id):focus,
html body [class*="focus:border-primary-"]:not(#__reos_never_id):focus,
html body [class*="focus:bg-primary-"]:not(#__reos_never_id):focus {
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
  outline: none !important;
}

html body .text-primary-300:not(#__reos_never_id),
html body .text-primary-400:not(#__reos_never_id),
html body .text-primary-500:not(#__reos_never_id),
html body .text-primary-600:not(#__reos_never_id),
html body .text-primary-700:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

html body .border-primary-300:not(#__reos_never_id),
html body .border-primary-400:not(#__reos_never_id),
html body .border-primary-500:not(#__reos_never_id),
html body .border-primary-600:not(#__reos_never_id),
html body .border-primary-700:not(#__reos_never_id) {
  border-color: var(--reos-emerald) !important;
}

html body .hr-form-item-feedback-wrapper:not(#__reos_never_id),
html body .n-form-item-feedback-wrapper:not(#__reos_never_id) {
  background-color: transparent !important;
}

html body .ui-card:not(#__reos_never_id),
html body [class*="ui-card"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

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

html body .active-navigation-icon:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

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

html body .bg-blue-50:not(#__reos_never_id),
html body .bg-blue-100:not(#__reos_never_id),
html body .bg-blue-200:not(#__reos_never_id),
html body [class*="bg-blue-50"]:not(#__reos_never_id),
html body [class*="bg-blue-100"]:not(#__reos_never_id),
html body [class*="bg-blue-200"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

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

html body .btn-folder .folder-name:not(#__reos_never_id),
html body .btn-folder .folder-name *:not(#__reos_never_id),
html body button.btn-folder *:not(#__reos_never_id):not(svg):not(path) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .btn-folder svg:not(#__reos_never_id),
html body .btn-folder svg path:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

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

html body .details-view .bg-white.shadow:not(#__reos_never_id),
html body .details-view [class*="rounded-md"][class*="bg-white"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
}

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

html body .highcharts-axis-labels text:not(#__reos_never_id),
html body .highcharts-axis-labels tspan:not(#__reos_never_id),
html body text.highcharts-axis-labels:not(#__reos_never_id) {
  fill: var(--reos-ash) !important;
  color: var(--reos-ash) !important;
}

html body .highcharts-legend-item text:not(#__reos_never_id),
html body .highcharts-legend-item tspan:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}

html body .highcharts-title:not(#__reos_never_id),
html body .highcharts-subtitle:not(#__reos_never_id),
html body text.highcharts-title:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
}

html body .highcharts-data-label text:not(#__reos_never_id),
html body .highcharts-data-label tspan:not(#__reos_never_id) {
  fill: var(--reos-bone) !important;
  color: var(--reos-bone) !important;
}

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

html body #wordpress-management-app:not(#__reos_never_id),
html body [id$="-management-app"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

html body .back-to-sites:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

html body #setup-guide-button:not(#__reos_never_id),
html body .setup-guide-button-container #setup-guide-button:not(#__reos_never_id),
html body .setup-guide-button-container:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  box-shadow: none !important;
}

html body #setup-guide-button:not(#__reos_never_id) .text-gray-700,
html body #setup-guide-button:not(#__reos_never_id) [class*="text-gray-7"],
html body .setup-guide-button-container:not(#__reos_never_id) .text-gray-700 {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body #setup-guide-button:not(#__reos_never_id) .n-progress-graph-line-rail {
  background-color: var(--reos-steel) !important;
}

html body #setup-guide-button:not(#__reos_never_id) .n-progress-graph-line-fill {
  background-color: var(--reos-emerald) !important;
}

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

html body img.wp-site-thumbnail:not(#__reos_never_id),
html body [class*="wp-site-thumbnail"]:not(#__reos_never_id) {
  filter: brightness(0.55) saturate(0.7) !important;
  background-color: var(--reos-graphite) !important;
}

html body .hl-card-content .wp-site-no-padding:not(#__reos_never_id),
html body [class*="wp-site"] .relative.cursor-pointer:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
}

html body .hl-toolbar:not(#__reos_never_id),
html body [class~="hl-toolbar"]:not(#__reos_never_id) {
  border-bottom: none !important;
  border-bottom-color: transparent !important;
  border-bottom-width: 0 !important;
}

html body input[placeholder="Enter Dashboard Name"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input__border:not(#__reos_never_id),
html body .n-input:has(input[placeholder="Enter Dashboard Name"]) .n-input__state-border:not(#__reos_never_id) {
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  background: transparent !important;
}

html body article[class*="flex"][class*="items-center"][class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"][class*="border"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] [class*="rounded-full"]:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}

html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg path:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg circle:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] svg rect:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] span:not(#__reos_never_id),
html body article[class*="rounded-lg"][class*="cursor-pointer"][class*="box-border"] p:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .bg-pink-50 svg:not(#__reos_never_id),
html body .bg-pink-50 svg path:not(#__reos_never_id),
html body .bg-pink-100 svg:not(#__reos_never_id),
html body .bg-pink-100 svg path:not(#__reos_never_id),
html body [class*="bg-pink"] svg:not(#__reos_never_id),
html body [class*="bg-pink"] svg path:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body .border:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

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

.vdpCell.selected .vdpCellContent {
  background-color: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
}
.vdpCell.selected,
.vdpCell.selected .vdpCellContent,
.vdpCell.today,
.vdpCell.today .vdpCellContent {
  border-color: var(--reos-emerald) !important;
}

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

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-calendar,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-dates,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-actions {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}

html body .hr-date-panel:not(#__reos_never_id) *:not(#__reos_never_id) {
  border-color: transparent !important;
  border-width: 0 !important;
}

html body .hr-date-panel:not(#__reos_never_id) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__text,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-month__month-year {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays__day,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-weekdays {
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;

  box-shadow: 0 1px 0 0 var(--reos-steel) !important;
  margin-bottom: 4px !important;
  padding-bottom: 4px !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded * {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  opacity: 1 !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--disabled,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--disabled * {
  color: var(--reos-steel) !important;
  -webkit-text-fill-color: var(--reos-steel) !important;
  opacity: 1 !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded.hr-date-panel-date--disabled,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--excluded.hr-date-panel-date--disabled * {
  color: var(--reos-steel) !important;
  -webkit-text-fill-color: var(--reos-steel) !important;
}

html body .hr-date-panel:not(#__reos_never_id) {
  --n-item-color: transparent !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::before,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::after {
  background-color: transparent !important;
  background: transparent !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date {
  z-index: 1 !important;
}
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger {
  z-index: 0 !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date:not(.hr-date-panel-date--disabled):hover {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-radius: 4px !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--current {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--selected {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-radius: 4px !important;
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--current .hr-date-panel-date__sup,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__sup {
  display: none !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--selected {
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--covered .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--covered .hr-date-panel-date__trigger::before,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--included .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--included .hr-date-panel-date__trigger::before {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel__vertical-divider,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel__divider {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-actions {
  border-top: 1px solid var(--reos-steel) !important;
  background-color: var(--reos-slate) !important;
  background: var(--reos-slate) !important;
}

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

html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__prev svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__next svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-prev svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-next svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__prev svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__next svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-prev svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-next svg path {
  stroke: var(--reos-ash) !important;
  stroke-width: 2 !important;
  fill: none !important;
}
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__prev:hover svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__prev:hover svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__next:hover svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__next:hover svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-prev:hover svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-prev:hover svg path,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-next:hover svg,
html body .hr-date-panel.hr-datepicker__new:not(#__reos_never_id) .hr-date-panel-month__fast-next:hover svg path {
  stroke: var(--reos-emerald) !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::before,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date__trigger::after {
  box-shadow: none !important;
  outline: none !important;
}

html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--selected,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date--active,
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date[class*="-selected"],
html body .hr-date-panel:not(#__reos_never_id) .hr-date-panel-date[class*="-active"] {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
  border-radius: 4px !important;
  color: var(--reos-obsidian) !important;
  -webkit-text-fill-color: var(--reos-obsidian) !important;
}

html body .ui-empty-icon:not(#__reos_never_id),
html body [class*="ui-empty-icon"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
}

html body .ui-statistic:not(#__reos_never_id),
html body [class*="ui-statistic"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

html body .hr-card-header:not(#__reos_never_id),
html body [class*="hr-card-header"]:not(#__reos_never_id) {
  border-bottom-color: var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

html body .toolbar_button:not(#__reos_never_id) svg,
html body .toolbar_button:not(#__reos_never_id) svg path,
html body #editor-toolbar:not(#__reos_never_id) svg,
html body #editor-toolbar:not(#__reos_never_id) svg path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}

html body .toolbar_button:not(#__reos_never_id):hover svg,
html body .toolbar_button:not(#__reos_never_id):hover svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body .toolbar_button.is-active:not(#__reos_never_id) img.toolbar-button__icon,
html body .toolbar_button[aria-pressed="true"]:not(#__reos_never_id) img.toolbar-button__icon,
html body .toolbar_button.active:not(#__reos_never_id) img.toolbar-button__icon {
  filter: drop-shadow(0 0 1px var(--reos-emerald)) drop-shadow(0 0 1px var(--reos-emerald)) !important;
}

html body #editor-toolbar:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

html body .toolbar_button:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border-radius: 4px !important;
  cursor: pointer !important;
}
html body .toolbar_button:not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
}

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

html body .editor-container:not(#__reos_never_id),
html body .toolbar_container:not(#__reos_never_id),
html body .border_bottom:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
  border-top-color: var(--reos-steel) !important;
}

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

html body .ProseMirror::selection,
html body .tiptap::selection,
html body .ProseMirror *::selection,
html body .tiptap *::selection {
  background-color: var(--reos-emerald-glow) !important;
}

html body #composer-textarea:not(#__reos_never_id),
html body #composer-textarea:not(#__reos_never_id) > div,
html body #composer-textarea:not(#__reos_never_id) > div > div,
html body #mail-composer-container:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
}

html body textarea#conv-internal-comment-textarea:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body textarea#conv-internal-comment-textarea:not(#__reos_never_id)::placeholder {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id),
html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id) span,
html body [role="menu"] a[role="menuitem"]:not(#__reos_never_id) > *:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
}

html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
}
html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover span,
html body [role="menu"] a[role="menuitem"]:not(.active):not(.router-link-active):not(.router-link-exact-active):not(#__reos_never_id):hover > * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body [role="menu"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  --tw-ring-color: var(--reos-steel) !important;
  --tw-ring-opacity: 1 !important;
}

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

html body .hr-switch:not(#__reos_never_id) {
  --n-rail-color: var(--reos-steel) !important;
  --n-rail-color-active: var(--reos-emerald) !important;
  --n-loading-color: var(--reos-emerald) !important;
  --n-button-color: var(--reos-bone) !important;
  --n-box-shadow-focus: 0 0 0 2px var(--reos-emerald-glow) !important;
  --n-box-shadow: none !important;
}

html body .hr-switch.hr-switch--round:not([aria-checked="true"]):not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch:not([aria-checked="true"]):not(#__reos_never_id) .hr-switch__rail {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
}

html body .hr-switch.hr-switch--round[aria-checked="true"]:not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch[aria-checked="true"]:not(#__reos_never_id) .hr-switch__rail,
html body .hr-switch.hr-switch--active:not(#__reos_never_id) .hr-switch__rail {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

html body .hr-switch:not(#__reos_never_id) .hr-switch__button,
html body .hr-switch:not(#__reos_never_id) .hr-switch__button-placeholder {
  background-color: var(--reos-bone) !important;
  background: var(--reos-bone) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;
}

html body .hr-switch:not(#__reos_never_id):focus,
html body .hr-switch:not(#__reos_never_id):focus-visible {
  outline: none !important;
}

html body div[class*="bg-blue-600"]:not(#__reos_never_id),
html body div[class*="bg-blue-500"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
}

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

html body button:has(svg path[d^="M16 6v-.8c0-1.12 0-1.68-.218-2.108"]):not(#__reos_never_id):hover {
  border-color: var(--reos-crimson) !important;
}

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

html body .hr-dropdown-menu:not(#__reos_never_id),
html body .hr-dropdown:not(#__reos_never_id),
html body [class*="hr-dropdown-menu"]:not(#__reos_never_id) {
  --n-prefix-color: var(--reos-bone) !important;
  --n-suffix-color: var(--reos-bone) !important;
  --n-divider-color: var(--reos-steel) !important;
  --n-group-header-text-color: var(--reos-ash) !important;
}

html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__suffix svg,
html body .hr-dropdown-option:not(#__reos_never_id) .hr-dropdown-option-body__suffix svg path {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}

html body .hr-dropdown-option.is-active:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option.is-active:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option.is-selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option.is-selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path,
html body .hr-dropdown-option--selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg,
html body .hr-dropdown-option--selected:not(#__reos_never_id) .hr-dropdown-option-body__prefix svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body svg path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]:not(#__reos_never_id) {
  stroke: var(--reos-blue) !important;
  color: var(--reos-blue) !important;
  fill: none !important;
}
html body svg:has(path[d^="M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2"]):not(#__reos_never_id) {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

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

html body svg path[d^="M12 9v4m0 4h.01M10.615 3.892"]:not(#__reos_never_id) {
  stroke: var(--reos-amber) !important;
  color: var(--reos-amber) !important;
  fill: none !important;
}

html body svg:has(path[d^="M12 9v4m0 4h.01M10.615 3.892"]):not(#__reos_never_id) {
  color: var(--reos-amber) !important;
  stroke: var(--reos-amber) !important;
}

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

html body .hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover,
html body button.hr-button.hr-button--default-type.ui-text-btn:not(#__reos_never_id):hover {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  color: var(--reos-blue) !important;
}

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

html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-button__border,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-button__state-border,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .hr-base-wave,
html body .hr-button.ui-text-btn:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  border: none !important;
  box-shadow: none !important;
}

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

html body .hr-tag.ui-default:not(#__reos_never_id) .hr-tag__border,
html body .hr-tag.ui-default:not(#__reos_never_id) .n-tag__border {
  display: none !important;
  border: none !important;
}

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

html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__border,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-button__state-border {
  border-color: var(--reos-steel) !important;
}
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__border,
html body .n-button.n-button--tertiary-type:not(#__reos_never_id):hover .n-button__state-border {
  border-color: var(--reos-emerald) !important;
}

html body .n-button.n-button--tertiary-type:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  background: transparent !important;
  background-color: transparent !important;
  opacity: 0 !important;
}

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

html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__border,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-button__state-border {
  border-color: var(--reos-steel) !important;
}
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__border,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id):hover .hr-button__state-border {
  border-color: var(--reos-emerald) !important;
}

html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .hr-base-wave,
html body .hr-button.hr-button--tertiary-type:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  background: transparent !important;
  background-color: transparent !important;
  opacity: 0 !important;
}

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

html body .hr-alert:not(#__reos_never_id),
html body .hr-alert-body:not(#__reos_never_id),
html body .hr-alert-body--bordered:not(#__reos_never_id),
html body [class*="hr-alert"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border-color: var(--reos-amber) !important;
}

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

html body .hr-alert .hr-alert-icon:not(#__reos_never_id),
html body .hr-alert-body .hr-alert-icon:not(#__reos_never_id),
html body [class*="hr-alert"] [class*="alert-icon"]:not(#__reos_never_id),
html body [class*="hr-alert"] [class*="icon-container"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
}

html body .hl-checkbox-group-item:not(#__reos_never_id),
html body button.hl-checkbox-group-item:not(#__reos_never_id),
html body .n-button.hl-checkbox-group-item:not(#__reos_never_id) {
  box-shadow: none !important;
  outline: none !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-hover: none !important;
  --n-box-shadow-pressed: none !important;
  --n-box-shadow-active: none !important;

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

html body .hl-checkbox-group-item:not(#__reos_never_id) .n-button__border,
html body .hl-checkbox-group-item:not(#__reos_never_id) .n-button__state-border,
html body .hl-checkbox-group-item:not(#__reos_never_id) .n-base-wave {
  display: none !important;
  border: none !important;
  box-shadow: none !important;
}

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

html body .n-steps:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  --n-header-text-color: var(--reos-bone) !important;
  --n-description-text-color: var(--reos-ash) !important;
  --n-splitor-color: var(--reos-steel) !important;
}

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

html body #location-billing:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

html body .agency-billing:not(#__reos_never_id),
html body [class*="agency-billing"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

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

html body .n-alert:not(#__reos_never_id) .n-alert__border,
html body [class*="n-alert"]:not(#__reos_never_id) .n-alert__border {
  border-color: var(--reos-steel) !important;
  background-color: transparent !important;
  background: transparent !important;
}

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

html body .n-alert:not(.hl-warning):not(.hl-error):not(.hl-info):not(.hl-success):not(#__reos_never_id) .n-alert-body__title,
html body .n-alert:not(.hl-warning):not(.hl-error):not(.hl-info):not(.hl-success):not(#__reos_never_id) .n-alert-body__title * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .hr-checkbox-box__border:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}
html body .n-loading-bar__shimmer:not(#__reos_never_id),
html body .n-loading-bar:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

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

html body .bg-purple-50:not(#__reos_never_id),
html body .bg-purple-100:not(#__reos_never_id),
html body [class*="bg-purple-50"]:not(#__reos_never_id),
html body [class*="bg-purple-100"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

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

html body .app-loader:not(#__reos_never_id),
html body [class*="app-loader"]:not(#__reos_never_id) {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
}

html body .hl_affiliate--header:not(#__reos_never_id),
html body [class*="hl_affiliate--header"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

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

html body .title.hl-display-sm-medium:not(#__reos_never_id),
html body .hl-display-sm-medium:not(#__reos_never_id),
html body .hl-display-md-medium:not(#__reos_never_id),
html body .hl-display-lg-medium:not(#__reos_never_id),
html body [class*="hl-display-"]:not(#__reos_never_id),

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

html body .bg-primary-50:not(#__reos_never_id),
html body [class~="bg-primary-50"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
}

html body .bg-primary-50:not(#__reos_never_id) span:not(a):not(a *),
html body .bg-primary-50:not(#__reos_never_id) div:not(a):not(a *),
html body [class~="bg-primary-50"]:not(#__reos_never_id) span:not(a):not(a *),
html body [class~="bg-primary-50"]:not(#__reos_never_id) div:not(a):not(a *) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

html body .bg-primary-50:not(#__reos_never_id) a,
html body .bg-primary-50:not(#__reos_never_id) a *,
html body [class~="bg-primary-50"]:not(#__reos_never_id) a,
html body [class~="bg-primary-50"]:not(#__reos_never_id) a * {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
}

html body .bg-primary-100:not(#__reos_never_id),
html body [class~="bg-primary-100"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
}

html body .bg-primary-100.rounded-full:not(#__reos_never_id),
html body [class~="bg-primary-100"][class~="rounded-full"]:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  border-width: 0 !important;
  border-color: transparent !important;
}

html body .custom-obj-list .custom-icon path:not(#__reos_never_id),
html body .custom-obj-list svg.custom-icon path:not(#__reos_never_id),
html body .bg-primary-100.rounded-full svg path:not(#__reos_never_id),
html body .bg-primary-100.rounded-full path:not(#__reos_never_id),
html body [class~="bg-primary-100"] svg.custom-icon path:not(#__reos_never_id) {
  fill: var(--reos-emerald) !important;
}

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

html body .n-switch.n-switch--round:not([aria-checked="true"]):not(#__reos_never_id) .n-switch__rail {
  background-color: var(--reos-steel) !important;
}
html body .n-switch.n-switch--round[aria-checked="true"]:not(#__reos_never_id) .n-switch__rail,
html body .n-switch.n-switch--active:not(#__reos_never_id) .n-switch__rail {
  background-color: var(--reos-emerald) !important;
}

html body .n-switch:not(#__reos_never_id):focus,
html body .n-switch:not(#__reos_never_id):focus-visible {
  box-shadow: none !important;
  outline: none !important;
}

html body .hl_settings--body:not(#__reos_never_id),
html body [class*="hl_settings--body"]:not(#__reos_never_id) {
  background-color: var(--reos-obsidian) !important;
  background: var(--reos-obsidian) !important;
}

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

html body .n-tabs .n-tabs-bar:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

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

html body .hl-card .text-black:not(#__reos_never_id),
html body .hl-card [class*="text-black"]:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .schedule-ui-selected-schedule-border:not(#__reos_never_id),
html body [class*="schedule-ui-selected-schedule-border"]:not(#__reos_never_id) {
  border-bottom-color: var(--reos-emerald) !important;
}

html body #dropdown-btn:not(#__reos_never_id),
html body .schedule-ui-form-calendar-dropdown:not(#__reos_never_id),
html body [class*="schedule-ui-form-calendar-dropdown"]:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

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

html body .schedule-banner:not(#__reos_never_id),
html body [class*="schedule-banner"]:not(#__reos_never_id) {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  background-image: none !important;
  border-color: var(--reos-steel) !important;
}

html body .schedule-banner [class*="rounded"]:not(.schedule-banner-button):not(#__reos_never_id),
html body [class*="schedule-banner"] [class*="rounded"]:not(.schedule-banner-button):not(#__reos_never_id) {
  background-color: var(--reos-blue) !important;
  color: var(--reos-bone) !important;
}

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

html body [class*="bg-[rgb(252,253,253)]"]:not(#__reos_never_id),
html body [class*="bg-[rgb(252, 253, 253)]"]:not(#__reos_never_id),
html body [class*="bg-[rgb(252"]:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

html body .n-data-table-td.n-data-table-td--fixed-right:not(#__reos_never_id),
html body .n-data-table-td.n-data-table-td--last-col:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
}

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

html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) svg,
html body .n-data-table-td .n-button.quaternary.icon-only:not(#__reos_never_id) svg path,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) svg,
html body button.n-button.quaternary.icon-only[id$="-action-dropdown-trigger"]:not(#__reos_never_id) svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
  fill: var(--reos-blue) !important;
}

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

html body .n-data-table:not(#__reos_never_id) .n-data-table-tr,
html body .n-data-table:not(#__reos_never_id) .n-data-table-td,
html body .n-data-table:not(#__reos_never_id) .n-data-table-th {
  transition: none !important;
  transition-duration: 0s !important;
}

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

html body .n-input.n-input--focus:not(#__reos_never_id) .n-input__state-border,
html body .hl-input-text.hl-input-text.n-input--focus:not(#__reos_never_id) .n-input__state-border,
html body .n-input.n-input.n-input--focus:not(#__reos_never_id) .n-input__state-border {
  box-shadow: none !important;
  border: 1px solid var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .n-input.n-input:not(#__reos_never_id) .n-input__border,
html body .hl-input-text.hl-input-text:not(#__reos_never_id) .n-input__border {

  border: 1px solid transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
html body .n-input.n-input:not(#__reos_never_id):hover .n-input__state-border,
html body .hl-input-text.hl-input-text:not(#__reos_never_id):hover .n-input__state-border {
  box-shadow: none !important;
  border: 1px solid var(--reos-emerald) !important;
}

html body .n-input .n-input__border,
html body .n-input .n-input__state-border,
html body .hl-input-text .n-input__border,
html body .hl-input-text .n-input__state-border {
  transition: none !important;
  transition-duration: 0s !important;
}

html body .n-base-suffix__arrow,
html body .n-input__suffix,
html body .n-base-selection .n-base-suffix {
  color: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

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

  border-top-color: var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
}

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

html body .hr-modal-mask:not(#__reos_never_id),
html body .ui-modal-mask:not(#__reos_never_id),
html body [class*="modal-mask"]:not(#__reos_never_id),
html body [class*="modal-backdrop"]:not(#__reos_never_id) {
  background-color: rgba(10, 13, 18, 0.6) !important;
  background: rgba(10, 13, 18, 0.6) !important;
}

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

html body .hr-select-menu-avatar-container .hr-select-menu-container,
html body .hr-select-menu-avatar-container .hr-select-option-label,
html body .hr-select-menu-avatar-container .hr-ellipsis,
html body .hr-select-menu-avatar-container .hr-select-option-label * {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body[class] .hr-base-select-menu .hr-base-select-option,
html body[class] .hr-base-select-menu .hr-base-select-option > *,
html body[class] .hr-base-select-menu .hr-base-select-option *:not(button):not([class*="emerald"]) {
  background: transparent !important;
  background-color: transparent !important;
}

html body[class] .hr-base-select-menu .hr-base-select-option:hover,
html body[class] .hr-base-select-menu .hr-base-select-option--pending,
html body[class] .hr-base-select-menu .hr-base-select-option--hover {
  background-color: var(--reos-slate) !important;
}
html body[class] .hr-base-select-menu .hr-base-select-option--selected,
html body[class] .hr-base-select-menu .hr-base-select-option--selected.hr-base-select-option--pending {
  background-color: var(--reos-emerald-glow) !important;
}

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

html body .n-base-select-group-header,
html body .hr-base-select-group-header {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-ash) !important;
}

html body .n-date-picker,
html body .n-date-picker-panel {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-cool-gray) !important;
}

html body .n-divider:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  --n-color: var(--reos-steel) !important;
  --n-text-color: var(--reos-bone) !important;
}

html body .n-divider:not(#__reos_never_id)::before,
html body .n-divider:not(#__reos_never_id)::after {
  background-color: var(--reos-steel) !important;
  background: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

html body .n-divider .n-divider__title:not(#__reos_never_id),
html body .n-divider__title:not(#__reos_never_id),
html body .n-divider .n-divider__title p:not(#__reos_never_id),
html body .n-divider .n-divider__title .hl-text-sm-medium:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  background-color: transparent !important;
}

html body .n-form-item-label,
html body .n-form-item-label__text {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body .is-active > svg,
html body .is-selected > svg,
html body [aria-pressed="true"]:not(.n-button--primary-type):not(.n-button--error-type) > svg,
html body [aria-selected="true"]:not(.n-base-select-option--selected) > svg,
html body [aria-current="page"] > svg,
html body [aria-current="true"] > svg {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body [class*="modal"] label,
html body [class*="dialog"] label,
html body [role="dialog"] label {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

html body [class*="modal"] [class*="rounded"]:not(input):not(textarea),
html body [class*="dialog"] [class*="rounded"]:not(input):not(textarea),
html body [role="dialog"] [class*="rounded"]:not(input):not(textarea) {
  border-color: var(--reos-cool-gray) !important;
}

html body [class*="modal"] input[type="radio"],
html body [class*="dialog"] input[type="radio"],
html body [role="dialog"] input[type="radio"],
html body [class*="modal"] input[type="checkbox"],
html body [class*="dialog"] input[type="checkbox"],
html body [role="dialog"] input[type="checkbox"] {
  accent-color: var(--reos-blue) !important;
}

html body [class*="modal"] [class*="card"],
html body [class*="dialog"] [class*="card"],
html body [role="dialog"] [class*="card"] {
  background-color: var(--reos-slate) !important;
  border: 1px solid var(--reos-cool-gray) !important;
}

*::-webkit-scrollbar { width: 10px !important; height: 10px !important; }
*::-webkit-scrollbar-track { background: var(--reos-obsidian) !important; }
*::-webkit-scrollbar-thumb {
  background: var(--reos-steel) !important;
  border-radius: 4px !important;
}
*::-webkit-scrollbar-thumb:hover { background: var(--reos-cool-gray) !important; }
*::-webkit-scrollbar-corner { background: var(--reos-obsidian) !important; }

html body, html body * {
  scrollbar-color: var(--reos-steel) var(--reos-obsidian);
  scrollbar-width: thin;
}

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

.shadow,
.shadow-sm,
.shadow-md,
.shadow-lg,
.shadow-xl,
.box-shadow {
  box-shadow: none !important;
}

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

html body .n-upload-dragger:not(#__reos_never_id) .upload-icon,
html body .n-upload-dragger:not(#__reos_never_id) [class*="upload-icon"] {
  background-color: var(--reos-emerald-glow) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 50% !important;
}

html body .n-upload-dragger:not(#__reos_never_id) .upload-icon svg,
html body .n-upload-dragger:not(#__reos_never_id) .upload-icon svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body .n-upload-dragger:not(#__reos_never_id) .hl-text-sm-regular {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .n-upload-dragger:not(#__reos_never_id) .hl-text-xs-regular {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body .topmenu-navitem.active:not(#__reos_never_id),
html body .topmenu-navitem.router-link-active:not(#__reos_never_id) {
  border-bottom-color: var(--reos-emerald) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;

  background-color: transparent !important;
  background: transparent !important;
  border-color: transparent !important;
  border-bottom-color: var(--reos-emerald) !important;
  box-shadow: none !important;
}

html body .topmenu-navitem:hover:not(#__reos_never_id),
html body .topmenu-navitem a:hover:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
}

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

html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] svg,
html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] svg path,
html body [lastmessagetype="TYPE_SMS"] [class*="absolute"][class*="rounded-full"] i {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

html body [class*="text-[#004EEB]"]:not(#__reos_never_id),
html body [class*="text-[#004eeb]"]:not(#__reos_never_id),
html body [class*="text-[#155EEF]"]:not(#__reos_never_id),
html body [class*="text-[#155eef]"]:not(#__reos_never_id),
html body [class*="text-[#1849A9]"]:not(#__reos_never_id),
html body [class*="text-[#1849a9]"]:not(#__reos_never_id),

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

html body #conv-message-retry-button,
html body #conv-message-retry-button *,
html body #conv-message-retry-button span,
html body #conv-message-retry-button svg,
html body #conv-message-retry-button svg path {
  color: var(--reos-blue) !important;
  -webkit-text-fill-color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

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

html body .no-data-message,
html body [class*='no-data-message'] {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
  border: none !important;
  box-shadow: none !important;
}

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

}

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

html body .hr-data-table__header tr:not(#__reos_never_id),
html body thead.hr-data-table__header tr:not(#__reos_never_id),
html body [class*="hr-data-table__header"] tr:not(#__reos_never_id) {
  border-bottom: 1px solid var(--reos-steel) !important;
  border-bottom-color: var(--reos-steel) !important;
}

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

html body .hr-data-table__body tr.flex,
html body .hr-data-table__body [class*="empty"],
html body .hr-data-table__body .data-table__no-data {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

html body .hr-empty:not(#__reos_never_id),
html body .hr-empty__title:not(#__reos_never_id),
html body .hr-empty .hr-text:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body #manual-actions-container-div,
html body [id*="manual-actions-container"],
html body [id*="snippets-container"],
html body [id*="trigger-links-container"],
html body [id*="analytics-container"],
html body [id*="-container-div"]:has(.hr-data-table-wrapper) {
  background-color: var(--reos-graphite) !important;
}

html body .hl_topbar-tabs,
html body [class*="hl_topbar-tabs"],
html body .conversationsUtilitiesApp,
html body [class*="conversationsUtilitiesApp"] {
  background-color: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

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

html body .sidebar-option-button:not(#__reos_never_id) svg,
html body .sidebar-option-button:not(#__reos_never_id) svg *,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg,
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg * {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
  transition: none !important;
}

html body .sidebar-option-button:not(#__reos_never_id) svg path[fill]:not([fill="none"]),
html body button[class*="sidebar-option-button"]:not(#__reos_never_id) svg path[fill]:not([fill="none"]) {
  fill: var(--reos-emerald) !important;
}

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

html body nav[class*="w-13"] button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg,
html body nav[class*="w-13"] button[class*="text-blue-600"]:not([class*="hover:text-blue-600"]) svg path {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html:not(.ws-non-seller-contact) body nav button:has(path[d^="M8.67153 7.67424C8.17071"]):not(#__reos_never_id),
html:not(.ws-non-seller-contact) body nav button:has(path[d^="M9.19781 12.1088"]):not(#__reos_never_id) {
  display: none !important;
}

html body .default-emails-template-card .hl-text-lg-medium:not(#__reos_never_id),
html body .default-emails-template-card .hl-text-lg-medium *:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .default-emails-template-card .justify-start.items-start > svg:not(#__reos_never_id),
html body .default-emails-template-card .justify-start.items-start > svg *:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  stroke: var(--reos-bone) !important;
}
html body .default-emails-template-card .n-button--primary-type:not(#__reos_never_id) {
  background-color: var(--reos-emerald) !important;
  border-color: var(--reos-emerald) !important;
}
html body .default-emails-template-card .n-button--primary-type:hover:not(#__reos_never_id) {
  filter: brightness(1.08);
}
html body .default-emails-menu .n-menu-item-content--selected:not(#__reos_never_id),
html body .default-emails-menu .n-menu-item-content--selected .n-menu-item-content-header:not(#__reos_never_id) {
  color: var(--reos-emerald) !important;
}

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

html body div:has(> #manage-association-btn)[class*="border-b"][class*="border-gray-200"],
html body div:has(> #close-panel-button)[class*="border-b"][class*="border-gray-200"] {
  border-bottom-color: var(--reos-steel) !important;
}

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

html body .crm-opportunities-modal:not(#__reos_never_id) .text-base.font-medium {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .crm-opportunities-modal:not(#__reos_never_id) .hr-form-item-label__text {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

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

html body .crm-opportunities-modal:not(#__reos_never_id) .hr-tag {
  --n-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
}

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

html body .crm-opportunities-modal:not(#__reos_never_id) [class*="border-gray-200"] {
  border-color: var(--reos-steel) !important;
}

html body .crm-opportunities-modal:not(#__reos_never_id) .hr-upload {
  --n-border-radius: 4px !important;

  --n-dragger-border: 1px solid var(--reos-steel) !important;
  --n-dragger-border-hover: 1px solid var(--reos-emerald) !important;

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

.hr-upload-dragger {
  border: 1px solid var(--reos-steel) !important;
  transition: border-color 0.15s ease !important;
}
.hr-upload-dragger:hover {
  border: 1px solid var(--reos-emerald) !important;
}

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

.hr-upload-dragger:hover .ui-upload-icon svg {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body .crm-opportunities-modal:not(#__reos_never_id) .text-blue-700 {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

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

html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity) {
  background: var(--reos-slate) !important;
  border-color: var(--reos-steel) !important;
  transition: border-color 0.12s ease !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) div:has(> #DeleteOpportunity):hover {
  border-color: var(--reos-crimson, #D43F4A) !important;
}

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

html body .crm-opportunities-modal:not(#__reos_never_id) button.bg-blue-50.text-blue-800 {
  background-color: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

html body .crm-opportunities-modal:not(#__reos_never_id) button.text-gray-500 {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .crm-opportunities-modal:not(#__reos_never_id) button.text-gray-500:hover {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body .crm-opportunities-stage-header,
html body [class*="crm-opportunities-stage-header"],
html body .opportunitiesCard.stageHeaderBg,
html body .opportunitiesCard[class*="stageHeaderBg"] {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
  box-shadow: none !important;
}

html body .crm-opportunities-stage-header[class*="!border-t-2"],
html body .opportunitiesCard.stageHeaderBg[class*="!border-t-2"] {
  border-top-color: var(--reos-steel) !important;
}

html body .crm-opportunities-stage-name,
html body [class*="crm-opportunities-stage-name"],
html body [id^="data-stage-name-"] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .hr-skeleton,
html body [class*="hr-skeleton"],
html body .n-skeleton,
html body [class*="n-skeleton"] {
  --n-color-start: var(--reos-slate) !important;
  --n-color-end: var(--reos-steel) !important;
  background-color: var(--reos-slate) !important;
  background-image: none !important;
}

html body .crm-opportunities-card-skeleton,
html body [class*="crm-opportunities-card-skeleton"] {
  background-color: var(--reos-graphite) !important;
}

html body .stage-scrollable-container,
html body [class*="stage-scrollable-container"],
html body .cardWrapper,
html body [class*="cardWrapper"][class*="crm-opportunities-board"] {
  background-color: var(--reos-graphite) !important;
}

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

html body .tabulator-col[aria-sort] .tabulator-col-sorter > span[style*="background-color:#EFF8FF"]:not(#__reos_never_id),
html body .tabulator-col[aria-sort] .tabulator-col-sorter > span[style*="#EFF8FF"]:not(#__reos_never_id) {
  background-color: var(--reos-emerald-glow) !important;
  background: var(--reos-emerald-glow) !important;
  color: var(--reos-emerald) !important;
}

html body .tabulator-col-resize-handle:not(#__reos_never_id) {
  background-color: var(--reos-steel) !important;
}

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

html body .tabulator-cell:not(#__reos_never_id) {
  border-width: 0 !important;
}
html body .tabulator-col:not(#__reos_never_id) {
  border-left-width: 0 !important;
  border-right-width: 1px !important;
  border-right-style: solid !important;
}

html body .tabulator-frozen:not(#__reos_never_id),
html body .tabulator-frozen-left:not(#__reos_never_id),
html body .tabulator-frozen-right:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

html body .tabulator-row:not(#__reos_never_id):hover,
html body .tabulator-row:not(#__reos_never_id):hover .tabulator-cell {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

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

html body .quick-filter-bar:not(#__reos_never_id) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

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

html body div.wrapper:not(#__reos_never_id):has(.pipeline-ribbon) {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
}

html body .bulk-action:not(#__reos_never_id),
html body .bulk-action-export-btn:not(#__reos_never_id) {
  background-color: var(--reos-slate) !important;
  color: var(--reos-bone) !important;
  border-color: var(--reos-steel) !important;
}

.border-gray-100,
.border-gray-200,
.border-gray-300,
.border-gray-400 {
  border-color: var(--reos-steel) !important;
}

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

html body [style*="rgb(208, 213, 221)"],
html body [style*="rgb(208,213,221)"],
html body [style*="rgba(208, 213, 221"],
html body [style*="rgba(208,213,221"],
html body [style*="#D0D5DD"],
html body [style*="#d0d5dd"] {
  border-color: var(--reos-steel) !important;
}

html body [class*="chat-bubble"] {
  border-color: var(--reos-steel) !important;
}

html body .chat-bubble-internal-comment:not(#__reos_never_id) {
  background-color: rgba(232, 163, 60, 0.16) !important;
  border: 1px solid var(--reos-amber) !important;
}
html body .chat-bubble-internal-comment:not(#__reos_never_id) .chat-message,
html body .chat-bubble-internal-comment:not(#__reos_never_id) [class*="text-gray"],
html body .chat-bubble-internal-comment:not(#__reos_never_id) [class*="text-["] {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body #notes-form-container .hr-button:not(#__reos_never_id),
html body #notes-form-container .hr-button__border:not(#__reos_never_id),
html body #notes-form-container .hr-button__state-border:not(#__reos_never_id) {
  border: none !important;
  box-shadow: none !important;
}

html body .search-box:not(#__reos_never_id) input:not(#__reos_never_id) {
  box-shadow: none !important;
}
html body .search-box:not(#__reos_never_id):focus-within {
  border-color: var(--reos-emerald) !important;
  box-shadow: 0 0 0 1px var(--reos-emerald) !important;
}

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

html body svg path[fill="#E5E7EB"],
html body svg rect[fill="#E5E7EB"],
html body svg polygon[fill="#E5E7EB"],
html body svg path[fill="#e5e7eb"],
html body svg rect[fill="#e5e7eb"],
html body svg polygon[fill="#e5e7eb"] {
  fill: var(--reos-slate) !important;
}

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

html body svg path[fill="#101828"],
html body svg rect[fill="#101828"],
html body svg polygon[fill="#101828"],
html body svg path[fill="#101828"][fill],
html body svg text[fill="#101828"] {
  fill: var(--reos-bone) !important;
}

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

html body .inbox-panel .menu-item-container.active .menu-text,
html body .inbox-panel .menu-item-container.active .menu-item-content,
html body .inbox-panel .menu-item-container.active .menu-item-content *:not(svg):not(svg *),
html body .inbox-panel .menu-item-container.active svg,
html body .inbox-panel .menu-item-container.active svg path {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body .inbox-panel .menu-item:not(.active) svg,
html body .inbox-panel .menu-item:not(.active) svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

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

html body .inbox-panel .hr-collapse *:not(svg):not(svg *):not(.menu-item-container.active):not(.menu-item-container.active *) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .inbox-panel .hr-collapse svg,
html body .inbox-panel .hr-collapse svg path {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
}

html body .inbox-panel .divider {
  background-color: var(--reos-steel) !important;
  border-color: var(--reos-steel) !important;
}

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

html body .inbox-panel .collapsed-item:hover svg,
html body .inbox-panel .collapsed-item:hover svg path,
html body .inbox-panel .collapsed-item:hover i,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover svg,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover svg path,
html body .inbox-panel .hr-dropdown__trigger-wrapper:hover i {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

html body .inbox-panel .collapsed-item.active svg,
html body .inbox-panel .collapsed-item.active svg path,
html body .inbox-panel .collapsed-item.active i {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body .inbox-panel .views-menu-content a,
html body .inbox-panel .views-menu-content button,
html body .inbox-panel #views-accordion a,
html body .inbox-panel #views-accordion button {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

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

html body span.font-medium.text-gray-700[style*="font-size: 14px"],
html body span.font-medium.text-gray-700[style*="font-size:14px"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

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

html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover svg,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover svg path,
html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] button:hover span {
  color: var(--reos-emerald) !important;
  stroke: var(--reos-emerald) !important;
}

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

html body .conversation-list-header [class*='border-gray-200'][class*='rounded-lg'] {
  background-color: transparent !important;
  border-color: var(--reos-steel) !important;
}

html body [data-conversation-id]:hover,
html body [data-conversation-id]:hover [type='button'],
html body [data-conversation-id] [type='button']:hover {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  transition: none !important;
}

html body [data-conversation-id][data-is-active="true"] > [type='button'],
html body [data-conversation-id][data-is-active="true"] [type='button'] {
  border-color: var(--reos-emerald) !important;
}

html body [style*="rgb(82, 139, 255)"] {
  border-color: var(--reos-emerald) !important;
}

html body [data-name="bulk-select-bar"] {
  background-color: transparent !important;
  background: transparent !important;
}

html body [class*="bg-inherit"],
html body .bg-inherit {
  background-color: transparent !important;
  background: transparent !important;
}

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

#record-details-lhs .sticky {
  background: var(--reos-graphite) !important;
  border-bottom: 1px solid var(--reos-steel) !important;
}

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

#ws-crm-contact-actions-bar {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}

html body #fc-calendar-container-v2,
html body #fc-calendar-container-v2.h-screen,
html body div#fc-calendar-container-v2 {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

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

html body #today-button .n-base-wave,
html body button#today-button .n-base-wave {
  display: none !important;
  background-color: transparent !important;
  background: transparent !important;
  opacity: 0 !important;
}

html body .fc-timegrid-now-indicator-line:not(#__reos_never_id):not(#__reos_also_never),
html body [class*="fc-timegrid-now-indicator-line"]:not(#__reos_never_id):not(#__reos_also_never) {
  border-color: var(--reos-crimson) !important;
  border-top-color: var(--reos-crimson) !important;
  border-bottom-color: var(--reos-crimson) !important;

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

html body .fc-timegrid-now-indicator-container:not(#__reos_never_id):not(#__reos_also_never),
html body [class*="fc-timegrid-now-indicator-container"]:not(#__reos_never_id):not(#__reos_also_never) {
  z-index: 100 !important;
}

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

html body .d-flex.view:hover,
html body .d-flex.view:hover .view-label,
html body .d-flex.view.cursor-pointer:hover,
html body .d-flex.view.cursor-pointer:hover .view-label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

html body .d-flex.view.active,
html body .d-flex.view.active .view-label,
html body .d-flex.view.cursor-pointer.active,
html body .d-flex.view.cursor-pointer.active .view-label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
  background-color: transparent !important;
  background: transparent !important;
}

html body .d-flex.view.active::after,
html body .d-flex.view.cursor-pointer.active::after {
  background-color: var(--reos-emerald) !important;
  background: var(--reos-emerald) !important;
}

html body .pipeline-ribbon .count,
html body [class*="pipeline-ribbon"] .count {
  background-color: transparent !important;
  background: transparent !important;
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

html body .smartlist-title:not(#__reos_never_id),
html body .pipeline-ribbon .smartlist-title:not(#__reos_never_id),
html body [class*="pipeline-ribbon"] .smartlist-title:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  font-weight: 600 !important;
}

html body .d-flex.bar svg path[stroke="black"],
html body .d-flex.bar svg path[stroke="#000"],
html body .d-flex.bar svg path[stroke="#000000"] {
  stroke: var(--reos-blue) !important;
}

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

html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id),
html body div:has(> p.ui-text-sm-normal):has(> i):not(#__reos_never_id),
html body div:has(> p.ui-text-sm-normal):has(> [class*="icon"]):not(#__reos_never_id),
html body section:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) {
  background: var(--reos-graphite) !important;
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
}

html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg,
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg path,
html body div:has(> p.ui-text-sm-normal):has(> svg):not(#__reos_never_id) > svg circle {
  color: var(--reos-ash) !important;
  stroke: var(--reos-ash) !important;
  fill: var(--reos-ash) !important;
}

html body div:has(> svg) > p.ui-text-sm-normal:not(#__reos_never_id),
html body div:has(> i) > p.ui-text-sm-normal:not(#__reos_never_id),
html body div:has(> [class*="icon"]) > p.ui-text-sm-normal:not(#__reos_never_id) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
  opacity: 1 !important;
}

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

html body div:has(> .icon.icon-primary):not(#__reos_never_id),
html body div:has(> div.icon.icon-primary):not(#__reos_never_id) {
  background-color: transparent !important;
}

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

html body .n-button.n-button--default-type:not(#__reos_never_id) .n-base-wave {
  background: transparent !important;
  opacity: 0 !important;
  display: none !important;
}

html body .n-checkbox,
html body .hr-checkbox,
html body [class*="n-checkbox"],
html body [class*="hr-checkbox"] {

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

html body svg.check-icon:not(.n-checkbox .check-icon):not(.hr-checkbox .check-icon),
html body svg.check-icon:not(.n-checkbox .check-icon):not(.hr-checkbox .check-icon) path {
  color: var(--reos-blue) !important;
  fill: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

html body .n-checkbox:focus,
html body .n-checkbox:focus-visible,
html body .hr-checkbox:focus,
html body .hr-checkbox:focus-visible,
html body .n-checkbox-box:focus,
html body .hr-checkbox-box:focus {
  box-shadow: none !important;
  outline: none !important;
}

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

html body .hl-checkbox.hl-checkbox:not(.n-checkbox--disabled):not(.hr-checkbox--disabled):not(#__reos_never_id):hover .n-checkbox-box .n-checkbox-box__border,
html body .hl-checkbox.hl-checkbox:not(.n-checkbox--disabled):not(.hr-checkbox--disabled):not(#__reos_never_id):hover .hr-checkbox-box .hr-checkbox-box__border,
html body .n-checkbox.n-checkbox:not(.n-checkbox--disabled):not(#__reos_never_id):hover .n-checkbox-box__border,
html body .hr-checkbox.hr-checkbox:not(.hr-checkbox--disabled):not(#__reos_never_id):hover .hr-checkbox-box__border {
  background: transparent !important;
  background-color: transparent !important;
  border: 1px solid var(--reos-cool-gray) !important;
}

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

html body .copy-icon.copied svg,
html body .copy-icon.copied svg path,
html body .copy-icon.success svg,
html body .copy-icon.success svg path,
html body .copy-icon[data-copied="true"] svg,
html body .copy-icon[data-copied="true"] svg path {
  color: var(--reos-blue) !important;
  stroke: var(--reos-blue) !important;
}

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

html body .contact-options-button,
html body span.contact-options-button {
  background-color: var(--reos-graphite) !important;
  background: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  border-radius: 4px !important;
  padding: 4px !important;
}

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

html body .contact-options-button::before,
html body .contact-options-button::after,
html body span.contact-options-button::before,
html body span.contact-options-button::after {
  display: none !important;
  background: transparent !important;
}

html body .contact-options-button *:not(svg):not(path):not(circle):not(g),
html body span.contact-options-button *:not(svg):not(path):not(circle):not(g) {
  background-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

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

html body .tabulator-row:hover:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-odd:hover:not(#__reos_never_id),
html body .tabulator-row.tabulator-row-even:hover:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

html body .tabulator-cell:hover:not(#__reos_never_id) {
  background-color: transparent !important;
  background: transparent !important;
}

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

html body .table-container:not(#__reos_never_id) {
  border-color: var(--reos-steel) !important;
}

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

  transition-property: color, border-color, opacity, transform, box-shadow !important;
  animation: none !important;
}

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

html body button[class*="bg-white"],
html body [data-conversation-id] [class*="bg-white"],
html body [data-conversation-id] [class*="transition-colors"],
html body #conv-channel-bar-provider-trigger {
  background-color: var(--reos-graphite) !important;
}

html body button[class*="bg-white"]:hover,
html body [data-conversation-id] [class*="bg-white"]:hover,
html body [data-conversation-id] [class*="transition-colors"]:hover,
html body #conv-channel-bar-provider-trigger:hover {
  background-color: var(--reos-slate) !important;
}

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

html body #conv-composer-minimize-button:not(#__reos_never_id) > div,
html body #conv-composer-minimize-button:not(#__reos_never_id) div {
  background-color: var(--reos-ash) !important;
  opacity: 1 !important;
}

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

[style*="background-color: white"],
[style*="background-color:white"],
[style*="background-color: #fff"],
[style*="background-color:#fff"] {
  background-color: var(--reos-graphite) !important;
}

[class*="border-b-[#d0d5dd]"],
[class*="d0d5dd"] {
  border-color: var(--reos-steel) !important;
}

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

.hr-tabs-capsule {
  display: none !important;
  background: transparent !important;
  border: none !important;
}
.hr-tabs-tab {
  color: var(--reos-ash) !important;
  background: transparent !important;
}

.hr-tabs-tab:hover {
  color: var(--reos-emerald) !important;
  background: transparent !important;
}

.hr-tabs-tab--active {
  color: var(--reos-emerald) !important;
  background: transparent !important;
  border-bottom: 2px solid var(--reos-emerald) !important;
}

html body .hr-tabs-tab .hr-tabs-tab__label,
html body .hr-tabs-tab [class*="tab__label"],
html body .hr-tabs-tab span {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body .hr-tabs-tab.hr-tabs-tab--active:hover .hr-tabs-tab__label,
html body .hr-tabs-tab.hr-tabs-tab--active:hover [class*="tab__label"],
html body .hr-tabs-tab.hr-tabs-tab--active:hover span {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
.hr-tabs-bar {
  background: var(--reos-emerald) !important;
}

.hr-collapse-item__content,
.hr-collapse-item__content-inner,
.hr-collapse-item__content-wrap {
  background: var(--reos-graphite) !important;
  color: var(--reos-bone) !important;
}

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

}

.hl_header [class*="rounded-full"],
header.hl_header [class*="rounded-full"],
.hl_header [class*="pill"],
header.hl_header [class*="pill"] {
  border-radius: 999px !important;
}

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

.hr-button {
}

.hr-button--tertiary {
  background: var(--reos-slate) !important;
  color: var(--reos-emerald) !important;
  border-color: var(--reos-steel) !important;
}
.hr-button--tertiary:hover {
  background: var(--reos-steel) !important;
  color: var(--reos-emerald-bright) !important;
}

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

.hr-button--text {
  background: transparent !important;
  color: var(--reos-ash) !important;
}
.hr-button--text:hover {
  color: var(--reos-bone) !important;
  background: var(--reos-slate) !important;
}

.hr-button--primary {
  background: var(--reos-emerald) !important;
  color: var(--reos-obsidian) !important;
  border: none !important;
}
.hr-button--primary:hover {
  background: var(--reos-emerald-bright) !important;
}

.hr-button--disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
}

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

html body .n-dropdown,
html body .n-dropdown-menu {
  background-color: var(--reos-graphite) !important;
  border: 1px solid var(--reos-steel) !important;
  color: var(--reos-bone) !important;

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

html body .n-dropdown-divider {
  background-color: var(--reos-steel) !important;
}

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

html body #custom-fields-add-edit-field-drawer .hr-form-item-label__text,
html body #custom-fields-add-edit-field-drawer .hr-form-item-label__text * {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

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

html body #custom-fields-add-edit-field-drawer table p.hr-p,
html body #custom-fields-add-edit-field-drawer .hr-data-table__body p,
html body #custom-fields-add-edit-field-drawer .hr-data-table__body span {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}

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

html body #custom-fields-add-edit-field-drawer .hr-data-table__body .hr-icon-inner {
  color: var(--reos-ash) !important;
}
html body #custom-fields-add-edit-field-drawer .hr-data-table__body .hr-icon-inner:hover {
  color: var(--reos-bone) !important;
}

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

html body #custom-fields-add-edit-field-drawer .bg-white {
  background-color: var(--reos-graphite) !important;
  border-color: var(--reos-steel) !important;
  color: var(--reos-bone) !important;
}

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

html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:hover .hr-button__content-default-slot,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:hover .hr-button__content,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:focus .hr-button__content-default-slot,
html body #custom-fields-add-edit-field-drawer #custom-fields-add-edit-field-save:focus .hr-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

html body #custom-fields-add-edit-field-drawer [class*="border-gray-200"],
html body #custom-fields-add-edit-field-drawer .hr-section-footer {
  border-color: var(--reos-steel) !important;
  background-color: var(--reos-graphite) !important;
}

html body #custom-fields-add-edit-field-drawer .hr-form-item-label__asterisk {
  --n-asterisk-color: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}

html body #custom-fields-add-edit-field-drawer .hr-input-word-count {
  color: var(--reos-ash) !important;
}

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

html body .hr-dialog .hr-form-item-label__text,
html body .hr-dialog .hr-form-item-label__text * {
  color: #B7BDC6 !important;
  -webkit-text-fill-color: #B7BDC6 !important;
}

html body .hr-dialog .hr-form-item-label__asterisk {
  --n-asterisk-color: var(--reos-crimson) !important;
  color: var(--reos-crimson) !important;
}

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

html body .hr-dialog .hr-tag {
  --n-color: var(--reos-slate) !important;
  --n-text-color: var(--reos-bone) !important;
  --n-border: 1px solid var(--reos-steel) !important;
  --n-close-icon-color: var(--reos-ash) !important;
  --n-close-icon-color-hover: var(--reos-bone) !important;
  --n-close-color-hover: var(--reos-steel) !important;
}

html body .hr-dialog .hr-base-selection-placeholder,
html body .hr-dialog .hr-base-selection-placeholder__inner {
  color: var(--reos-ash) !important;
  background-color: var(--reos-slate) !important;
}

html body .hr-dialog p.text-gray-500,
html body .hr-dialog p.text-gray-600,
html body .hr-dialog .text-xs.text-gray-500 {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}

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

html body .hr-dialog .hr-divider {
  --n-color: var(--reos-steel) !important;
}
html body .hr-dialog .hr-divider__line {
  background-color: var(--reos-steel) !important;
}

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

html body .hr-dialog button[id$="-confirm"]:hover .hr-button__content-default-slot,
html body .hr-dialog button[id$="-confirm"]:hover .hr-button__content,
html body .hr-dialog .hr-button--primary:hover .hr-button__content-default-slot,
html body .hr-dialog .hr-button--primary:hover .hr-button__content {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}

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

html body .askai-composer-bar::before {
  background: #12161d !important;
  border: 1px solid #252c36 !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(15, 181, 126, 0.05) !important;
}

html body .askai-composer-bar .hr-input__textarea-el,
html body .askai-composer-bar .hr-input__state-border {
  box-shadow: none !important;
  border-color: transparent !important;
}
html body .askai-composer-bar--focused::before {
  border-color: rgba(15, 181, 126, 0.5) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(15, 181, 126, 0.22) !important;
}

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

html body .askai-left-panel .askai-left-panel__menu-row-icon img {
  filter: brightness(0) invert(0.93) !important;
}

html body .askai-left-panel .hr-button.hr-button--default-type:not(#__reos_never_id) {
  border-color: transparent !important;
}

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

html body .hl_recent-activities .drawer-heading { color: #EDEEF0 !important; }
html body .hl_recent-activities .font-medium.text-sm { color: #EDEEF0 !important; }
html body .hl_recent-activities .drawer-subheading { color: #9098A3 !important; }
html body .hl_recent-activities [class*="text-xs"] { color: #9098A3 !important; }
html body .hl_recent-activities .word-wrap { color: #9098A3 !important; }
html body .hl_recent-activities [style*="21, 78, 21"] { color: #0FB57E !important; }
html body .hl_recent-activities [style*="10, 62, 111"] { color: #4B8BF5 !important; }

`,nx=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],ax=e=>{if(!e||e[0]!=="#")return e;let t=e.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return e;let o=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return e;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${s})`}return`rgb(${o}, ${r}, ${a})`},sx=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),ix=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],Vn=new WeakSet,zp=e=>{try{if(!document.body)return;(e??document.body.querySelectorAll("*")).forEach(o=>{try{if(o.classList&&(o.classList.contains("hr-drawer-container")||o.classList.contains("hr-detached-container"))){(o.getAttribute("style")||"").includes("background")&&(o.style.removeProperty("background-color"),o.style.removeProperty("background-image"));return}if(Vn.has(o)&&o.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest(".hl_header, header.hl_header, header.app-header")||o.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let r=o.tagName;if(r==="INPUT"||r==="TEXTAREA"||r==="SELECT"||r==="SCRIPT"||r==="STYLE"||r==="SVG"||r==="PATH"||r==="IMG")return;let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!i)return;let l=+i[1],d=+i[2],c=+i[3];if((i[4]!==void 0?+i[4]:1)<.5||l<230||d<230||c<230)return;let b=o.style.getPropertyValue("background-color");if(b==="rgb(18, 22, 29)"){Vn.add(o);return}if(o.closest(".hr-button")&&!(o.classList&&o.classList.contains("hr-button"))){b!=="transparent"&&(o.style.setProperty("background-color","transparent","important"),o.style.setProperty("background-image","none","important")),Vn.add(o);return}o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"),Vn.add(o)}catch{}})}catch{}},Si=new WeakSet,yo=()=>{document.querySelectorAll(ix.join(", ")).forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.querySelectorAll("*");[t,...Array.from(o)].forEach(r=>{if(r.classList&&(r.classList.contains("hr-drawer-container")||r.classList.contains("hr-detached-container"))){(r.getAttribute("style")||"").includes("background")&&(r.style.removeProperty("background-color"),r.style.removeProperty("background-image"));return}if(Si.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH"||r.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=+i[1],d=+i[2],c=+i[3];if(!(l<230||d<230||c<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),Si.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),Si.add(r)}})})},qp=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.classList&&t.classList.contains("hr-button"))return;let o=t.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(t.style.setProperty("background-color","transparent","important"),t.style.setProperty("background-image","none","important"))})},jp=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(e=>{e.style.setProperty("background-color","#252C36","important"),e.style.setProperty("background-image","none","important"),e.style.setProperty("color","#EDEEF0","important")})},Up=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"),t.style.removeProperty("border-style"),t.style.removeProperty("border-width"),t.style.removeProperty("border-radius"))})},Yn=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(t=>{let o=t.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let i=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(i){let l=+i[1],d=+i[2],c=+i[3];(i[4]!==void 0?+i[4]:1)>=.5&&l>=180&&d>=180&&c>=180&&l+d+c>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},Wp=()=>{let e="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(e)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},vo=()=>{if(!fo)for(let e of nx){let t;try{t=document.querySelectorAll(e.selector)}catch{continue}t.forEach(o=>{for(let[r,a]of Object.entries(e.styles)){let s=o.style.getPropertyPriority(r),i=o.style.getPropertyValue(r),l=sx.has(r)?ax(a):a;s==="important"&&i===l||o.style.setProperty(r,a,"important")}})}},ea="#1A1F28",lx=26,dx=31,cx=40,Gp=new Set,Kp=new Set,Jn=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let a=o.getBoundingClientRect();if(a.width===0||a.height===0||a.width>800)return;o.style.setProperty("display","none","important");let s=o.className?.toString()||"<no class>";!Kp.has(s)&&s!=="<no class>"&&(Kp.add(s),m.debug(`Hid empty "--" leaf: "${s}"`))})},px=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],mx=["trash","Trash","TRASH","delete","Delete","DELETE"],bx=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.getAttribute("data-reos-trash")==="true")return;let o=t.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(mx.some(s=>a.includes(s))&&(r=!0),r||o.querySelectorAll("path").forEach(i=>{if(r)return;let l=i.getAttribute("d")||"";px.some(d=>l.includes(d))&&(r=!0)}),!r){let s=(t.id||"").toLowerCase(),i=(t.getAttribute("aria-label")||"").toLowerCase(),l=(t.getAttribute("title")||"").toLowerCase();(s.includes("delete")||s.includes("remove")||s.includes("trash")||i.includes("delete")||i.includes("remove")||i.includes("trash")||l.includes("delete")||l.includes("remove")||l.includes("trash"))&&(r=!0)}r&&t.setAttribute("data-reos-trash","true")})},ux=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),hx=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=(t.textContent||"").trim();o.length===0||o.length>40||ux.has(o)&&t.style.display!=="none"&&(t.style.setProperty("display","none","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("pointer-events","none","important"))})},Vp=new Set,Yp=new WeakSet,_x=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(Yp.has(o)&&o.style.getPropertyValue("color")==="rgb(237, 238, 240)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;let r=(o.className?.toString()||"").toLowerCase();if(r.includes("ai-button")||r.includes("ask-ai")||r.includes("bg-clip-text")||r.includes("text-transparent")||o.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let a=o.tagName.toLowerCase();if(a==="svg"||a==="path"||a==="circle"||a==="rect"||a==="polygon"||a==="polyline"||a==="line"||a==="g")return;let s=!1;for(let h of Array.from(o.childNodes))if(h.nodeType===Node.TEXT_NODE&&(h.textContent||"").trim()){s=!0;break}if(!s)return;let i=Array.from(o.children);if(i.length>0&&i.every(h=>{let _=h.tagName.toLowerCase();return _==="svg"||_==="img"})&&!s)return;let c=window.getComputedStyle(o).color;if(!(c==="rgb(255, 255, 255)"||c==="rgba(255, 255, 255, 1)"||c==="#ffffff"||c==="white"))return;o.style.setProperty("color","#EDEEF0","important"),o.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),Yp.add(o);let b=o.className?.toString()||"<no class>";!Vp.has(b)&&b!=="<no class>"&&(Vp.add(b),m.debug(`Remapped pure-white text -> bone: "${b}"`))})},Jp=new Set,yx=()=>{let e=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),t="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(t)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),e.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(s=>{if(s.closest("[id^='ws-crm-']"))return;let i=(s.className?.toString()||"").toLowerCase();if(i.includes("avatar"))return;let l=window.getComputedStyle(s),d=l.backgroundColor,c=l.backgroundImage||"",p=!1;if(c!=="none"&&c.includes("gradient"))p=!0;else if(d&&d!=="rgba(0, 0, 0, 0)"&&d!=="transparent"){let w=d.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(w&&parseFloat(w[1])<.6)return;let k=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(k){let f=parseInt(k[1],10),$=parseInt(k[2],10),S=parseInt(k[3],10);(f>=60||$>=60||S>=60)&&(f>230&&$>230&&S>230||(f>=80||$>=80||S>=80)&&(p=!0))}}if(!p)return;let h=(s.textContent||"").trim(),_=i,g=Array.from(s.querySelectorAll("*")).map(w=>(w.className?.toString()||"").toLowerCase()).join(" "),T=h.toLowerCase()==="ask ai"||_.includes("ai-button")||_.includes("ask-ai")||_.includes("askai"),x=_.includes("bg-clip-text")||_.includes("text-transparent")||g.includes("bg-clip-text")||g.includes("text-transparent"),C=Array.from(s.querySelectorAll("*")).some(w=>{let k=window.getComputedStyle(w),f=k.getPropertyValue("-webkit-background-clip")||"",$=k.getPropertyValue("background-clip")||"";return f.includes("text")||$.includes("text")});if(T||x||C){let w=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],k=f=>{w.forEach($=>f.style.removeProperty($))};k(s),s.querySelectorAll("*").forEach(k);return}let v="#12161D";s.style.setProperty("color",v,"important"),s.querySelectorAll("*").forEach(w=>{let k=w.tagName.toLowerCase();k==="svg"||k==="path"||k==="circle"||k==="rect"||k==="polygon"||k==="polyline"||k==="line"||k==="g"?(w.style.setProperty("fill",v,"important"),w.style.setProperty("stroke",v,"important"),w.style.setProperty("color",v,"important")):(w.style.setProperty("color",v,"important"),w.style.setProperty("-webkit-text-fill-color",v,"important"))});let E=s.className?.toString()||"<no class>";!Jp.has(E)&&E!=="<no class>"&&(Jp.add(E),m.debug(`Darkened SVG icons on colored button: "${E}"`))})})},Qp=new Set,vx=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;if((t.className?.toString()||"").toLowerCase().includes("default-avatar")){t.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(d=>{(d.getAttribute("style")||"").includes("translateY(11px)")&&d.style.removeProperty("transform")});return}let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(d=>{let c=d;if(c.closest("[id^='ws-crm-']"))return;let p=d.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let b=p.left<r.right&&p.right>r.left,h=p.top<r.bottom&&p.bottom>r.top;if(!(b&&h)||p.top+p.height/2<a)return;let g=p.width*p.height/(r.width*r.height);if(g>.55)return;let T=c,x=c.parentElement,C=0;for(;x&&x!==t&&C<3;){let E=x.getBoundingClientRect();if(E.width>0&&E.width<=30&&E.height<=30)T=x;else break;x=x.parentElement,C++}T.style.setProperty("transform","translateY(11px)","important");let v=(T.className?.toString()||"")+" "+T.tagName;Qp.has(v)||(Qp.add(v),m.debug(`Dropped activity badge 11px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${g.toFixed(2)}): "${v}"`))})})},gx="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",fx=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",gx,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},Zp=new Set,xx=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=parseInt(i[1],10),d=parseInt(i[2],10),c=parseInt(i[3],10);if(!(l>200&&d>200&&c>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!Zp.has(p)&&p!=="<no class>"&&(Zp.add(p),m.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${l},${d},${c})): "${p}"`))})})},Xp=new Set,wx=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=o.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let l=o.className?.toString()||"<no class>";!Xp.has(l)&&l!=="<no class>"&&(Xp.add(l),m.debug(`Painted Ask AI wrapper graphite: "${l}"`))}}o=o.parentElement,r++}})},em=new Set,kx=()=>{let e=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),o=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let l=a.getBoundingClientRect();l.width<240||l.height<120||l.width>1500||l.height>900||o.push(a)}),[...e,...o].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let l=(i.className?.toString()||"").toLowerCase();if(l.includes("avatar")||l.includes("notification-dot")||l.includes("indicator"))return;if(l.includes("sidebar-option-button")||i.closest(".sidebar-option-button")||i.closest("nav[class*='w-13']")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("tabulator")||l.includes("tabulator-page")||i.closest("[class*='tabulator']")){(i.getAttribute("style")||"").includes("background-color")&&i.style.removeProperty("background-color");return}if(l.includes("hr-card")||i.closest(".hr-card")||i.id&&i.id.startsWith("opportunity-")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("ai-button")||l.includes("ask-ai")||l.includes("bg-clip-text")||l.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(i).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let c=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let p=parseInt(c[1],10),b=parseInt(c[2],10),h=parseInt(c[3],10);if(!(p>200&&b>200&&h>200))return;let g=i.getBoundingClientRect();if(g.width<24||g.height<16||g.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let T=i.className?.toString()||"<no class>";!em.has(T)&&T!=="<no class>"&&(em.add(T),m.debug(`Coerced light bg (${g.width.toFixed(0)}x${g.height.toFixed(0)}, rgb(${p},${b},${h})): "${T}"`))})})},tm=new Set,Ex=e=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";(e??document.body.querySelectorAll("*")).forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']")||r.children.length>0)return;let a=(r.textContent||"").trim();if(a.length===0||a.length>80||a==="--"||r.closest(t)||r.closest("[class*='avatar'], [class*='hr-avatar']")||r.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||r.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(r.matches("[role='heading']")||r.closest("[role='heading']")||r.matches("h1, h2, h3")||r.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){r.matches("h1, h2, h3")&&(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let E=r.getAttribute("style")||"";(E.includes("color")||E.includes("background"))&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"),r.style.removeProperty("background-color"));return}if(r.closest("#SettingTexasSmsBlock")||r.matches("p.ui-text-sm-medium")&&r.parentElement?.classList?.contains("flex")&&r.parentElement?.classList?.contains("items-center")&&r.parentElement?.children?.length===1){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-button, .n-button")||r.matches(".hr-button__content, .n-button__content")||r.closest(".hr-button__content, .n-button__content")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".bg-primary-50, [class*='bg-primary-50']")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}let s=r,i=null;for(let E=0;E<4&&s;E++){let w=s.nextElementSibling;if(w&&(w.matches(t)||w.querySelector(t)!==null)){i=w;break}s=s.parentElement}if(!i)return;let l=r.getBoundingClientRect();if(l.width===0||l.height===0||l.width>400||l.height>60)return;r.style.setProperty("color","#9098A3","important"),r.style.setProperty("-webkit-text-fill-color","#9098A3","important");let d=i,c=d.getBoundingClientRect(),p=d.className?.toString()||"",b=p.includes("schedule-ui-form-weekly-schedule-checkbox")||d.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,h=p.includes("hl-form-item")||p.includes("n-form-item--top-labelled")||d.closest(".hl-form-item")!==null,_=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",g=(p.includes("hr-form-item-blank")||p.includes("hr-form-item")||d.matches(_))&&(d.matches(_)||d.querySelector(_)!==null);g&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let T=p.includes("hr-radio")||d.closest(".hr-radio, [class*='hr-radio']")!==null;T&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let x=p.includes("hr-breadcrumb")||d.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;x&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let C=p.includes("hr-header-lite")||d.closest("[class*='hr-header-lite']")!==null;C&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius")),!b&&!h&&!g&&!T&&!x&&!C&&c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(d.style.setProperty("background-color",ea,"important"),d.style.setProperty("border-color","#252C36","important"),d.style.setProperty("border-style","solid","important"),d.style.setProperty("border-width","1px","important"),d.style.setProperty("border-radius","4px","important"));let v=r.className?.toString()||"<no class>";!tm.has(v)&&v!=="<no class>"&&(tm.add(v),m.debug(`Colored field label "${a.slice(0,30)}": "${v}"`))})},om=new Set,$x=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),l=Math.max(16,Math.min(24,Math.round(i*.6)));t.style.setProperty("font-size",`${l}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${l}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let d=t.className?.toString()||"<no class>";!om.has(d)&&d!=="<no class>"&&(om.add(d),m.debug(`Resized avatar text to ${l}px (circle ${i.toFixed(0)}px): "${d}"`))})},rm=new Set,Tx=new Set(["Enter Dashboard Name"]),Cx=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=t.placeholder||"";if(Tx.has(r)){(t.getAttribute("style")||"").includes("background-color")&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"));return}t.style.setProperty("background-color",ea,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=t.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",ea,"important"),a.style.setProperty("border-color","#252C36","important"));let s=t.className?.toString()||"<no class>";!rm.has(s)&&s!=="<no class>"&&(rm.add(s),m.debug(`Forced input slate bg: "${s}"`))})},Qn=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||o.id==="chat-filter"||o.id==="phone-calls"||o.id==="archive-conversation"||o.id==="star-toggle"||o.id==="read-toggle"||o.id==="delete-conversation")return;if(o.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}let r=o.className?.toString()||"";if(r.includes("bg-inherit")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.closest(".pipeline-ribbon")&&r.split(" ").includes("count")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.split(" ").includes("tabulator-page")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(_=>r.includes(_))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("schedule-ui-form-weekly-schedule-checkbox")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("border-color")||_.includes("border-style")||_.includes("border-width"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"));return}if(r.includes("n-button")&&r.includes("icon-only")&&!r.includes("quaternary")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-button--tertiary-type")||r.includes("n-button--tertiary-type")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"),o.style.removeProperty("border-radius"));return}if(r.includes("hr-data-table-td")||r.includes("hr-data-table-tr")||r.includes("hr-data-table__body-cell")||r.includes("hr-data-table__cell")||r.includes("hr-data-table__header-cell")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-data-table-td--fixed-right")||r.includes("n-data-table-td--last-col")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.classList.contains("hr-tabs")||r.includes("hr-tabs-tab-wrapper")||r.includes("hr-tabs-nav")||r.includes("hr-tabs-nav-scroll-content")||r.includes("hr-tabs-content")||r.includes("hr-tabs-pane")||r.includes("hr-tabs-rail")||r.includes("hr-tabs-wrapper")||r.includes("hr-tabs-pane-wrapper")||r.includes("hr-tab-pane")){let _=o.getAttribute("style")||"";(_.includes("background-color: rgb(26, 31, 40)")||_.includes("background-color: #1A1F28")||_.includes("background-color: #1a1f28"))&&o.style.removeProperty("background-color");return}if(r.includes("hr-date-panel")||r.includes("n-date-panel")||o.closest(".hr-date-panel, .n-date-panel")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-tag")&&r.includes("ui-default")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if((r.includes("bg-purple-50")||r.includes("bg-purple-100"))&&(r.includes("rounded-lg")||r.includes("rounded-md")||r.includes("rounded-full"))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-alert")||o.closest(".n-alert")||r.includes("hl-warning")||r.includes("hl-error")||r.includes("hl-info")||r.includes("hl-success")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-card")||o.closest(".hr-card")||o.id&&o.id.startsWith("opportunity-")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("bg-gray-50")||r.includes("bg-gray-100")||r.includes("bg-gray-200")||r.includes("bg-white")||r.includes("bg-blue-50")||r.includes("bg-blue-100")||r.includes("bg-sky-50")||r.includes("bg-indigo-50")||r.includes("bg-slate-50")||r.includes("bg-neutral-50")||r.includes("bg-zinc-50")||r.includes("bg-stone-50")||r.includes("F7F9FD")||r.includes("F9FAFB")||r.includes("ECEEF2")||r.includes("eceef2")||r.includes("EFF4FF")||r.includes("eff4ff")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-collapse-item")||r.includes("hr-collapse hr-accordion")||r.includes("hr-accordion"))return;if(r.includes("sidebar-option-button")||o.closest(".sidebar-option-button")||o.closest("nav[class*='w-13']")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let _=o.getAttribute("style")||"";(_.includes("background-color")||_.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=parseInt(i[1],10),d=parseInt(i[2],10),c=parseInt(i[3],10);if(!(l<lx&&d<dx&&c<cx))return;let b=o.getBoundingClientRect();if(b.width===0||b.height===0||b.width>800||b.height>200)return;o.style.setProperty("background-color",ea,"important");let h=o.className?.toString()||"<no class>";!Gp.has(h)&&h!=="<no class>"&&(Gp.add(h),m.debug(`Coerced dark bg to slate (${b.width.toFixed(0)}x${b.height.toFixed(0)}, rgb(${l},${d},${c})): "${h}"`))})},Zn=()=>{let e="#4B8BF5",t=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(s=>{s.setAttribute("data-reos-recolored","1"),s.setAttribute("data-reos-recolored-v2","1"),s.setAttribute("data-reos-recolored-v3","1");let l=(s.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!l)return;let d;try{d=atob(l[1])}catch{return}let c=d,p=!1;if(t.forEach(_=>{c.includes(_)&&(c=c.split(_).join(e),p=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(_=>{c.includes(_)&&(c=c.split(_).join("transparent"),p=!0)}),s.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(g=>{c.includes(g)&&(c=c.split(g).join("#EDEEF0"),p=!0)}),!!p)try{let _=btoa(c);s.setAttribute("src",`data:image/svg+xml;base64,${_}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(s=>{let i=s.getAttribute("src")||"";if(!i||i.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(i))return;s.setAttribute("data-reos-masked","1");let l=`url("${i}")`;s.style.setProperty("-webkit-mask-image",l,"important"),s.style.setProperty("-webkit-mask-size","contain","important"),s.style.setProperty("-webkit-mask-repeat","no-repeat","important"),s.style.setProperty("-webkit-mask-position","center","important"),s.style.setProperty("mask-image",l,"important"),s.style.setProperty("mask-size","contain","important"),s.style.setProperty("mask-repeat","no-repeat","important"),s.style.setProperty("mask-position","center","important"),s.style.setProperty("background-color","var(--reos-blue)","important"),s.setAttribute("src",o)})},Er=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(t=>{[...t.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);t.classList.contains(r)||t.classList.add(r)}})})},Sx=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("background"))})},go=()=>{let e=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},t=document.querySelector(".crm-opportunities-modal");t&&t.querySelectorAll(".hr-base-selection").forEach(a=>{e(a),a.querySelectorAll("div, span").forEach(i=>{if(i.id?.startsWith("ws-crm-"))return;let l=window.getComputedStyle(i).backgroundColor;l==="rgba(0, 0, 0, 0)"||l==="transparent"||!l||e(i)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{e(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let s="rgb(150, 162, 173)",i="rgb(0, 191, 124)",l=c=>{let p=r.querySelector(".ui-upload-icon svg");p&&(p.style.setProperty("color",c,"important"),p.style.setProperty("stroke",c,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(b=>{b.style.setProperty("stroke",c,"important")})},d=!1;try{d=r.matches(":hover")}catch{}l(d?i:s),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>l(i)),r.addEventListener("mouseleave",()=>l(s)))})},Li=new WeakSet,Lx=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(t=>{if(!Li.has(t))try{let o=t.contentDocument||t.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){Li.add(t);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),t.style.background="#FFFFFF",t.style.borderRadius="6px",Li.add(t)}catch{}})},Ax=()=>{let e=document.getElementById("edit-phone-number-modal");e&&e.querySelectorAll("textarea").forEach(t=>{let o=getComputedStyle(t).backgroundColor;o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"&&t.style.setProperty("border-color",o,"important")})},Qe=!1,Ii=null,nm=!1,Mx=()=>{if(nm)return;nm=!0;let e=null,t=0;document.addEventListener("pointerdown",r=>{r.isPrimary&&(e=r.clientX,t=r.clientY,Qe=!1)},!0),document.addEventListener("pointermove",r=>{e!==null&&!Qe&&Math.abs(r.clientX-e)+Math.abs(r.clientY-t)>6&&(Qe=!0)},!0);let o=()=>{e=null,Qe&&(Qe=!1,Ii&&Ii())};document.addEventListener("pointerup",o,!0),document.addEventListener("pointercancel",o,!0)},am=()=>{let e,o=()=>{if(fo||Qe)return;let l=document.body?document.body.querySelectorAll("*"):void 0;Er(),vo(),Cx(),Qn(l),Jn(l),Ex(l),Lx(),kx(),wx(),xx(),fx(),yx(),$x(),vx(),_x(l),Zn(),hx(),bx(),go(),yo(),zp(l),Up(),Wp(),Yn(),Sx(),go(),qp(),jp(),Ax()},r=()=>{let l=document.activeElement;if(!l)return!1;let d=l.tagName;return d==="TEXTAREA"||d==="INPUT"||l.isContentEditable===!0},a=()=>{if(!(fo||Qe)){if(r()){e!==void 0&&clearTimeout(e),e=window.setTimeout(()=>{e=void 0,o()},800);return}e===void 0&&(e=window.setTimeout(()=>{e=void 0,o()},800))}};Er(),vo(),Qn(),Jn(),Zn(),go(),yo(),zp(),Up(),Wp(),Yn(),qp(),jp(),window.setTimeout(()=>{Er(),vo(),Qn(),Jn(),Zn(),go(),yo(),Yn()},500),window.setTimeout(()=>{Er(),vo(),Qn(),Jn(),Zn(),go(),yo(),Yn()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{yo(),vo()});let s=!1;Ii=()=>a(),Mx(),new MutationObserver(()=>{Qe||s||(s=!0,requestAnimationFrame(()=>{s=!1,a()}))}).observe(document.body,{childList:!0,subtree:!0})},Ai,Ix=()=>{let e=()=>{if(fo)return;let o=document.getElementById(Xn);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let i=s.tagName.toLowerCase();if(i==="style"||i==="link"){if(s.id===Xn||s.id===sm)continue;r=!0;break}}if(r)break}r&&Ai===void 0&&(Ai=window.setTimeout(()=>{Ai=void 0,e()},150))}).observe(document.head,{childList:!0}),e()},$r=()=>{if(fo=!1,ox(),!document.getElementById(Xn)){let e=document.createElement("style");e.id=Xn,e.textContent=rx,document.head.appendChild(e),m.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?am():window.addEventListener("DOMContentLoaded",am)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,Ix())},Mi=[],Pi=()=>{for(let t of Mi)window.clearTimeout(t);Mi=[];let e=()=>{fo||Qe||(Er(),vo(),go(),yo())};e(),Mi.push(window.setTimeout(e,150),window.setTimeout(e,400))};var im="ws-crm-customizer-version-badge",ta=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",ta,{once:!0});return}if(document.getElementById(im))return;let e=document.createElement("div");e.id=im,e.style.cssText=`
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
  `,e.textContent=`Customizer v${Mr}`,e.title=`Built ${Ir}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var um=new Set(["ej0SqnTYIprechAMAPrd"]),xo="contact-select-trigger",hm="ws-crm-reply-from-warning",_m="contact-select-menu",lm="ws-crm-rf-thread-opt",Oi="",Bi=!1,Tr=null,oa=null,dm=!1,Cr="",cm,ct=(...e)=>{try{console.log("[reply-from]",...e)}catch{}},Hi=e=>{let t=(e?.textContent||"").match(/\+?1?\d{10}\b/);return t?t[0]:""},qe=e=>(e||"").replace(/\D/g,"").slice(-10),pm=e=>{let t=qe(e);return t.length===10?`+1 ${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:e},Px=e=>{let t=e.meta||{};return(e.direction||"").toLowerCase()==="inbound"?t.to||"":t.from||""},Ox=async()=>{let e=window.location.pathname,t=e.match(/\/contacts\/detail\/([A-Za-z0-9]{15,})/);if(t){let r=Y();if(!r)return null;let a=await He(`${Xe}/conversations/search?locationId=${encodeURIComponent(r)}&contactId=${encodeURIComponent(t[1])}`);if(!a||!a.ok)return ct("getConversationId: search miss",a?a.status:"null"),null;try{return(await a.json())?.conversations?.[0]?.id||null}catch{return null}}let o=e.split("/").filter(Boolean).pop()||"";return/^[A-Za-z0-9]{15,}$/.test(o)?o:null},Bx=async()=>{let e=await Ox();if(!e)return null;let t=await He(`${Xe}/conversations/${e}/messages?limit=20`);if(!t||!t.ok)return ct("getThreadNumber: fetch miss",t?t.status:"null"),null;let o;try{o=await t.json()}catch{return null}let r=o?.messages?.messages||[];for(let a of r){if(a.type!==2&&a.messageType!=="TYPE_SMS")continue;let s=Px(a);if(qe(s).length===10)return s}return null},wo=()=>document.getElementById(hm)?.remove(),ym=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector("#conv-composer-textarea-input, textarea[placeholder]"))return t;t=t.parentElement}return null},Hx=e=>e.replace(/[&<>"]/g,t=>t==="&"?"&amp;":t==="<"?"&lt;":t===">"?"&gt;":"&quot;"),vm=(e,t,o)=>{wo();let r=document.getElementById(xo);if(!r)return;let a=ym(r);if(!a||!a.parentElement)return;let s=document.createElement("div");s.id=hm,s.style.cssText="display:flex;align-items:flex-start;gap:9px;padding:10px 12px;margin:0 0 6px;background:rgba(232,163,60,0.14);border-left:3px solid var(--reos-amber,#E8A33C);border-radius:0;font-size:12.5px;line-height:1.5;color:var(--reos-bone,#EDEEF0);font-family:inherit;";let i=t?` (${Hx(t)})`:"";s.innerHTML=`<span style="color:var(--reos-amber,#E8A33C)!important;font-size:16px;line-height:1;margin-top:1px;flex-shrink:0;" aria-hidden="true">&#9888;</span><div>This thread is on <span style="color:var(--reos-amber,#E8A33C)!important;font-weight:500;">${pm(e)}</span>${i}. You're set to reply from ${pm(o)}. <span style="color:var(--reos-amber,#E8A33C)!important;">Switch the From before sending.</span></div>`,a.parentElement.insertBefore(s,a)},Rx=e=>{Tr?.disconnect();let t=document.getElementById(xo);if(!t)return;let o=ym(t)||t,r=qe(Hi(t));Tr=new MutationObserver(()=>{let a=Hi(document.getElementById(xo)),s=qe(a);!s||s===r||(r=s,s===qe(e)?wo():vm(e,"",a))}),Tr.observe(o,{childList:!0,subtree:!0,characterData:!0})},mm=()=>{let e=document.getElementById(_m);if(!e)return;let t=Array.from(e.children).filter(l=>l.id!=="hr-dropdown-option-__search__"),o=l=>{let d=(l.textContent||"").match(/\+?1?\d{10}/);return d?d[0]:""},r=null,a="";if(Cr&&(r=t.find(l=>qe(o(l))===qe(Cr))||null,a="thread line"),r||(r=t.find(l=>/Last Used/i.test(l.textContent||""))||null,a="last used"),ct("decorateMenu: cache=",Cr,"target=",r?a:"NONE"),!r)return;let s=document.getElementById(lm);s&&s!==r&&s.removeAttribute("id"),r.id=lm;let i=l=>{l.style.setProperty("color","var(--reos-emerald,#0FB57E)","important"),l.style.setProperty("-webkit-text-fill-color","var(--reos-emerald,#0FB57E)","important")};i(r),r.querySelectorAll("*").forEach(l=>{i(l),l.style.setProperty("background-color","transparent","important")})},Dx=()=>{if(!um.has(Y()||""))return;oa?.disconnect();let e=0,t=()=>{let o=document.getElementById(_m);if(o){mm(),oa=new MutationObserver(()=>mm()),oa.observe(o,{childList:!0,subtree:!0});return}++e<20&&window.setTimeout(t,50)};t()},Fx=e=>{let t=e.target;t&&t.closest&&t.closest("#"+xo)&&(ct("From trigger clicked -> waiting for menu"),Dx())},Nx=async()=>{if(!Bi){Bi=!0;try{let e=document.getElementById(xo);if(!e)return;let t=Hi(e),o=await Bx();if(Cr=o||"",ct("check: from=",t,"thread=",o),!o){wo();return}qe(t)&&qe(t)!==qe(o)?(ct("MISMATCH -> banner"),vm(o,"",t)):(ct("match -> no banner"),wo()),Rx(o)}finally{Bi=!1}}},bm=()=>{if(!um.has(Y()||""))return;let e=window.location.pathname;if(!e.includes("/conversations")&&!e.includes("/contacts/detail/")){Oi="",Cr="",Tr?.disconnect(),oa?.disconnect(),wo();return}let t=!!document.getElementById(xo),o=e.split("/").filter(Boolean).pop()||"",r=(t?"T":"F")+"|"+o;if(r!==Oi){if(Oi=r,!t){Tr?.disconnect(),wo();return}ct("composer expanded on",o),Nx()}},gm=()=>{cm===void 0&&(cm=window.setInterval(bm,500)),dm||(document.addEventListener("click",Fx,!0),dm=!0),bm()};var zx="#1A1F28",qx="#EDEEF0",Ri="#9098A3",jx=e=>{let t=(e||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null},Ux=e=>.2126*e.r+.7152*e.g+.0722*e.b,Wx=e=>{let t=e.r/255,o=e.g/255,r=e.b/255,a=Math.max(t,o,r),s=Math.min(t,o,r),i=(a+s)/2,l=a-s,d=0,c=0;return l!==0&&(c=l/(1-Math.abs(2*i-1)),a===t?d=(o-r)/l%6:a===o?d=(r-t)/l+2:d=(t-o)/l+4,d=d*60,d<0&&(d+=360)),`hsl(${Math.round(d)}, ${Math.round(Math.max(.62,c)*100)}%, 60%)`},fm=(e,t,o)=>{e.querySelectorAll(t).forEach(r=>{r.style.setProperty("color",o,"important"),r.style.setProperty("-webkit-text-fill-color",o,"important")})},Gx=e=>{let t=jx(getComputedStyle(e).backgroundColor);if(!t||Ux(t)<120)return;let o=Wx(t);e.style.setProperty("background-color",zx,"important"),e.style.setProperty("box-shadow",`inset 3px 0 0 0 ${o}`,"important"),fm(e,".note-content, .note-content *, [class*='text-gray-9'], [class*='text-gray-7']",qx),fm(e,"#note-date-added-text, [class*='475467']",Ri)},Kx=e=>{e.querySelectorAll("[class*='hr-tag__count']").forEach(t=>{t.style.setProperty("background-color","transparent","important")}),e.querySelectorAll(".hr-tag, .hr-tag *").forEach(t=>{t.style.setProperty("color",Ri,"important"),t.style.setProperty("-webkit-text-fill-color",Ri,"important")}),e.querySelectorAll("button.hr-button, .hr-button__border, .hr-button__state-border").forEach(t=>{t.style.setProperty("border","none","important"),t.style.setProperty("box-shadow","none","important")})},xm=()=>{let e=document.querySelectorAll(".note-card-accent");for(let t=0;t<e.length;t++)Gx(e[t]),Kx(e[t])},wm,km=()=>{wm===void 0&&(wm=window.setInterval(xm,700)),xm()};var Vx='input:not([autocomplete]):not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="range"]):not([type="color"]),textarea:not([autocomplete])',Em=()=>{document.querySelectorAll(Vx).forEach(e=>{e.setAttribute("autocomplete","off")})},$m,Tm=()=>{$m===void 0&&($m=window.setInterval(Em,1e3)),Em()};console.log("[ws-crm-customizer] bundle-loaded");var A=(e,t)=>{try{m.debug(`[main] calling ${e}`),t(),m.debug(`[main] ${e} OK`)}catch(o){m.error(`[main:FAIL] ${e} threw:`,o)}},Cm=()=>{m.info(`Loaded v${Mr} (built ${Ir})`),aa()?(m.info(`[main] excluded location ${Y()} \u2014 theme only, skipping feature mounts`),A("mountThemeStylesheet",$r),A("mountDialerThemeFix",Bn)):(A("mountVersionBadge (initial)",ta),A("mountFavicon",_d),A("mountThemeStylesheet",$r),A("mountHideLaunchpad",xs),A("mountHideNavItems",ws),A("mountRelabelNav",ks),A("mountHideTopmenuTabs",$s),A("mountContractsSection",Es)),A("installOppIdCapture",Wi),A("installContactsSearchCapture",Qi),A("initPageRouter",zi),m.info("[main] registering onPageChange subscriber"),ge(t=>{if(m.debug(`[main] onPageChange callback fired for page=${t}`),aa()){m.info(`[main] page change into excluded location ${Y()} \u2014 theme only, skipping feature mounts`),A("mountThemeStylesheet",$r),A("runThemeFastPass",Pi),A("mountDialerThemeFix",Bn),A("unmountContactMapLinks",jd);return}A("mountThemeStylesheet",$r),A("runThemeFastPass",Pi),A("mountVersionBadge",ta),A("mountHideLaunchpad",xs),A("mountHideNavItems",ws),A("mountRelabelNav",ks),A("mountHideTopmenuTabs",$s),A("mountContractsSection",Es),A("mountAnalyticsDashboard",cl),A("mountClaimReleaseToggle",Ol),A("mountContactActionsBar",ud),A("mountActiveFollowUpButton",nl),A("mountMtOfferMadeButton",vd),A("mountNotInterestedButton",gd),A("mountScheduleWalkthroughButton",fd),A("mountResendDealLinkButton",wd),A("mountAddReferralBuyer",Cd),A("mountChangePrimaryContactButton",gl),A("mountReducePriceButton",Ld),A("mountEditLandingPageButton",Ad),A("mountPublishButton",Od),A("mountContactMapLinks",qd),A("mountSendToClosingOfficeButton",rc),A("mountOppActionBar",kc),A("mountClosingAgentPickerButton",lp),A("mountPrepareContractButton",Sp),A("mountComputeOfferButton",Np),A("mountManageTeam",bp),A("mountBuyBoxWidget",_l),A("mountSellerContactFlag",Al),A("mountPropertiesWidget",Sl),A("mountSupportNavItem",Pc),A("mountPhoneAssignmentsWidget",Fc),A("mountBulkPowerDialer",td),A("mountBulkPowerDialerContacts",Gc),A("mountCallingAsChip",Jc),A("mountDialerThemeFix",Bn),A("mountReplyFromWarning",gm),A("mountNoteCanon",km),A("mountSuppressAutofill",Tm)}),m.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Cm):Cm();})();
//# sourceMappingURL=customizer.js.map
