/* Wholesaling CRM Customizer v0.61.0 — built 2026-07-11T22:18:37.963Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var Er="[wholesaling-crm-customizer]",mm="__WS_CRM_DEBUG",bm=()=>!!window[mm],m={info(...e){console.log(Er,...e)},warn(...e){console.warn(Er,...e)},error(...e){console.error(Er,...e)},debug(...e){bm()&&console.log(Er,"[debug]",...e)}};var um=/\/v2\/location\/([A-Za-z0-9]+)/,hm=new Set(["8ntUQzMflUkR0YvrRgVk"]),Q=()=>{let e=window.location.pathname.match(um);return e?e[1]:null},ta=()=>{let e=Q();return e!==null&&hm.has(e)};var Oi=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,oa=/\/v2\/location\/([A-Za-z0-9]+)/,_m=e=>{let t=e.match(Oi);if(!t)return null;let o=e.match(oa);return{contactId:t[1],locationId:o?o[1]:null,source:"url"}},ym=()=>{let e=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let t of e){let o=document.querySelector(t);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match(Oi);if(!a)continue;let s=r.match(oa)||window.location.pathname.match(oa);return{contactId:a[1],locationId:s?s[1]:null,source:"dom"}}return null},z=()=>{let e=_m(window.location.pathname);return e||ym()};var Bi=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},Tr="",ra=null,lt="other",na=new Set,$r=()=>{let e=z()?.contactId??null;if(!(!(window.location.pathname!==Tr)&&!(e!==ra))){Tr=window.location.pathname,ra=e,lt=Bi(),m.debug("Page/context changed:",lt,Tr,"contact:",e);for(let r of na)try{r(lt)}catch(a){m.error("Subscriber threw:",a)}}},ge=e=>(na.add(e),setTimeout(()=>e(lt),0),()=>{na.delete(e)}),Hi=()=>{lt=Bi(),Tr=window.location.pathname,ra=z()?.contactId??null,m.debug("Router init, current page:",lt);let e=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(o,r,a){e(o,r,a),$r()},history.replaceState=function(o,r,a){t(o,r,a),$r()},window.addEventListener("popstate",$r),setInterval($r,1e3)},Lt=()=>lt;var vm=/\/opportunities\/([A-Za-z0-9]{16,24})(?:[/?]|$)/,Fi=null,Ri=!1,Di=e=>{let t=e.match(vm);t&&(Fi=t[1])},zi=()=>{if(!Ri){Ri=!0;try{let e=window.fetch.bind(window);window.fetch=(o,r)=>{try{let a=typeof o=="string"?o:o instanceof URL?o.href:o.url;a&&Di(a)}catch{}return e(o,r)};let t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(o,r,...a){try{Di(typeof r=="string"?r:r.href)}catch{}return t.call(this,o,r,...a)},m.debug("[opp-id-capture] installed")}catch(e){m.warn("[opp-id-capture] install failed",e)}}},fe=()=>Fi;var Cr="0.61.0",Lr="2026-07-11T22:18:37.964Z";var gm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",Sr=new Map,aa=new Map,fm=3e4,dt=4e3,xm=dt,Pe=async(e,t)=>{if(!e)return null;let o=Sr.get(e);if(o){if(o.failedAt===void 0)return o.type;if(Date.now()-o.failedAt<fm)return null}if(!t)return m.warn(`Cannot fetch Contact Type for ${e} \u2014 tenant_id missing from URL context`),null;let r=aa.get(e);if(r)return r;let s=(async()=>{let i=new AbortController,d=setTimeout(()=>i.abort(),xm);try{let l=`${gm}?contact_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,c=await fetch(l,{method:"GET",headers:{Accept:"application/json"},signal:i.signal});if(!c.ok)return clearTimeout(d),m.warn(`Contact Type fetch returned ${c.status} for ${e}`),Sr.set(e,{type:null,failedAt:Date.now()}),null;let p=await c.json();clearTimeout(d);let b=(p.contact_type||"").toLowerCase().trim()||null;return Sr.set(e,{type:b}),m.debug(`Resolved Contact Type for ${e}: ${b??"(unset)"}`),b}catch(l){return clearTimeout(d),m.warn(`Contact Type fetch failed for ${e}:`,l),Sr.set(e,{type:null,failedAt:Date.now()}),null}})();aa.set(e,s);try{return await s}finally{aa.delete(e)}},Oe=e=>e==="buyer"?"buyer":e==="seller"?"seller":e==="agent"||e==="closing_agent"||e==="closing_office"||e==="vendor"||e==="tenant"?"other":"seller";var I=(e,t={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let d=a.querySelector(e);if(d){s(d);return}let l,c,p=()=>{l!==void 0&&window.clearTimeout(l),c!==void 0&&window.clearInterval(c)};c=window.setInterval(()=>{let b=a.querySelector(e);b&&(p(),s(b))},r),l=window.setTimeout(()=>{p(),m.warn(`waitForElement timed out for selector: ${e}`),i(new Error(`Selector not found within ${o}ms: ${e}`))},o)})};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"};var y={sm:"4px",md:"6px",lg:"10px",pill:"999px"},u={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},sa={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},Ni=e=>{let t=e==="emerald"?n.emeraldGlow:e==="amber"?n.amberGlow:n.slate,o=e==="emerald"?n.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=e==="emerald"?n.emerald:e==="amber"?n.amber:n.bone;return`
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
  `},ae=`
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
`,H=`
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
`;var ia="https://services.leadconnectorhq.com",qi="__WS_CRM_CAPTURED_AUTH";var la=()=>{try{let e=localStorage.getItem(qi);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>3e6?(localStorage.removeItem(qi),null):t:null}catch{return null}},wm=()=>{let e=la();if(!e)return null;let t={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(t["token-id"]=e.tokenId),t},da=async(e,t={})=>{let o=wm();if(!o)return null;try{return await fetch(e,{...t,headers:{...o,...t.headers??{}}})}catch{return null}};var km=/^[A-Za-z0-9]{15,30}$/,ct=e=>typeof e=="string"&&km.test(e),ca=e=>{try{let t=e.split(".");if(t.length!==3)return null;let o=t[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},Em=()=>{let e=window.WS_CRM_USER_ID;return ct(e)?e:null},$m=()=>{let e=window,t=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let o of t)if(ct(o))return o;return null},Tm=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=ca(t);if(!o)return null;let r=o.uid;if(ct(r))return r;let a=o.claims;if(a&&ct(a.user_id))return a.user_id}catch{}return null},Cm=()=>{try{let e=la();if(!e?.authorization)return null;let t=e.authorization.replace(/^Bearer\s+/i,""),o=ca(t);if(!o)return null;if(o.authClass==="User"&&ct(o.authClassId))return o.authClassId;if(ct(o.primaryAuthClassId))return o.primaryAuthClassId}catch{}return null},Lm=()=>{try{let e=["user","tokenUser","currentUser","ghl_user"];for(let t of e){let o=localStorage.getItem(t);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if(ct(a))return a}catch{}}}catch{}return null},P=()=>Em()||Tm()||Cm()||$m()||Lm()||null,Sm=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=ca(t);return o?o.claims??o:null}catch{return null}},St=()=>{let e=window.WS_CRM_FORCE_AGENCY;return typeof e=="boolean"?e:Sm()?.type==="agency"};var Gi="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",Am=`${Gi}/active-follow-up-get`,Mm=`${Gi}/active-follow-up-set`,pt="ws-crm-active-follow-up-button",ma={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"SMS Drip Active",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"No Active SMS Drip",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},Im=()=>{let e=z();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},Pm=async e=>{let t=await fetch(Am,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId}),credentials:"omit"});if(!t.ok)throw new Error(`Get webhook returned ${t.status} ${t.statusText}`);return await t.json()},Om=async(e,t)=>{let o=await fetch(Mm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,triggered_by_user_id:t??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},mt=(e,t)=>{let o=ma[t];e.dataset.state=t,e.disabled=!o.clickable,e.style.cursor=o.clickable?"pointer":"default",e.style.background=o.bg,e.style.borderColor=o.border,e.style.color=o.color;let r=e.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=e.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},ji=e=>{let t=document.createElement("button");return t.type="button",t.id=pt,t.dataset.contactId=e,t.style.cssText=`
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
  `,mt(t,"loading"),t.addEventListener("click",async()=>{if(t.dataset.state!=="amber")return;let r=Im();if(!(!r||r.contactId!==e)){mt(t,"blue"),t.style.transform="scale(0.97)",setTimeout(()=>t.style.transform="",120);try{let a=await Om(r,P()),s=a&&a.state&&a.state in ma?a.state:"blue";mt(t,s),m.info(`Active Follow Up set for ${e} \u2192 ${s}`)}catch(a){m.error("Active Follow Up Set webhook failed",a),mt(t,"error"),setTimeout(()=>void Mr(t,r),4e3)}}}),t},Bm=3e4,Mr=async(e,t)=>{e.dataset.lastRefreshAt=String(Date.now()),mt(e,"loading");try{let o=await Pm(t),r=o&&o.state&&o.state in ma?o.state:"gray",a=document.getElementById(pt);if(!a||a.dataset.contactId!==t.contactId)return;mt(a,r)}catch(o){m.warn("Active Follow Up Get webhook failed",o),delete e.dataset.lastRefreshAt,mt(e,"error")}},Hm=[".central-panel","[class*='central-panel']"],pa="ws-crm-contact-actions-bar",Rm=async()=>{for(let e of Hm)try{let t=await I(e,{timeoutMs:3e3});if(t)return t}catch{}try{return(await I("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Dm=async(e,t)=>{let o=t.querySelector(`#${pa}`);if(!o)try{o=await I(`#${pa}`,{timeoutMs:dt+2e3,root:t})}catch{o=null}if(o){let s=t.querySelector("#ws-crm-afu-wrap");return s&&s.remove(),e.style.order="2",o.appendChild(e),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=t.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let s=t.querySelector(`#${pa}`);s&&s.parentElement===t?t.insertBefore(a,s.nextSibling):t.insertBefore(a,t.firstChild)}return a.appendChild(e),{container:a,placement:"fallback"}},Fm=()=>{let e=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!e)return null;let t=e;for(let o=0;o<8&&!(!t||!t.parentElement);o++){let r=t.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let s=r.children[1];return s instanceof HTMLElement?s:r}t=r}return null},zm=(e,t)=>{e.style.marginRight="4px",t.insertBefore(e,t.firstChild)},Nm=async e=>{if(e==="url"){let o=await Rm();return o?{kind:"contact-detail",target:o}:null}let t=Fm();return t?{kind:"conversations",target:t}:null},Ui=async(e,t)=>{if(t.kind==="contact-detail"){let{placement:o}=await Dm(e,t.target);return o}return zm(e,t.target),"conversations-header"},qm=async()=>{let e=z();if(!e||!e.locationId){document.getElementById(pt)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let t={contactId:e.contactId,tenantId:e.locationId},o=document.getElementById(pt);if(o&&o.dataset.contactId===t.contactId){let l=Number(o.dataset.lastRefreshAt||0);Date.now()-l>=Bm&&Mr(o,t);return}o&&o.remove();let r=await Nm(e.source);if(!r){m.warn(`Active Follow Up: no mount target on ${e.source}-source page`);return}let a=z();if(!a||a.contactId!==t.contactId)return;let s=ji(t.contactId),i=await Ui(s,r);m.debug(`Active Follow Up mounted (${r.kind}/${i}) for ${t.contactId}`),Wi();let d=document.getElementById(pt)??s;Mr(d,t),Ar?.disconnect(),Ar=new MutationObserver(()=>{let l=document.getElementById(pt);if(!(z()?.contactId===t.contactId)){Ar?.disconnect();return}if(!l){let p=ji(t.contactId);Ui(p,r).then(()=>{Wi(),Mr(p,t)}),m.debug(`Active Follow Up re-mounted after wipe for ${t.contactId}`)}}),Ar.observe(r.target,{childList:!0})},Ar=null,wo=null,Ki=()=>{let e=z()?.contactId??null;if(wo&&wo.contactId===e)return;let t=qm().finally(()=>{wo?.promise===t&&(wo=null)});wo={contactId:e,promise:t}},Wi=()=>{let e=document.querySelectorAll(`#${pt}`);if(!(e.length<=1)){m.debug(`Active Follow Up: found ${e.length} duplicate buttons, keeping first, removing ${e.length-1}`);for(let t=1;t<e.length;t++)e[t].remove()}};var jm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/analytics/compute",Um="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/callstats/sweep-run",Ir="ws-crm-analytics-overlay",Wm=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"this_week",label:"This week"},{key:"last_week",label:"Last week"},{key:"this_month",label:"This month"},{key:"last_month",label:"Last month"},{key:"last_365",label:"Last 365 days"},{key:"all_time",label:"All time"},{key:"custom",label:"Custom"}],Gm=[{key:"company",label:"Company"},{key:"acq",label:"Acquisitions"},{key:"dispo",label:"Disposition"},{key:"marketing",label:"Marketing"},{key:"tc",label:"Transactions"},{key:"velocity",label:"Velocity"}],D={open:!1,range:"this_month",customStart:"",customEnd:"",tab:"company",loading:!1,error:null,data:null,cache:new Map},oe=e=>{let t=Number(e)||0;return"$"+Math.round(t).toLocaleString("en-US")},F=e=>(Number(e)||0).toLocaleString("en-US"),ua=e=>{let t=Number(e);return!Number.isFinite(t)||t<=0?"\u2014":new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Eo=e=>{let t=Math.round(Number(e)||0);if(t<60)return`${t}s`;let o=Math.floor(t/3600),r=Math.round(t%3600/60);return o>0?`${o}h ${r}m`:`${r}m`},Km=()=>`${D.range}|${D.customStart}|${D.customEnd}`,bt=async(e=!1)=>{let t=Km();if(!e&&D.cache.has(t)){D.data=D.cache.get(t),D.error=null,ut();return}let o=Q();if(!o){D.error="Could not resolve the sub-account id from the URL.",ut();return}D.loading=!0,D.error=null,ut();try{let r={tenant_id:o,range:D.range,tz_offset_minutes:new Date().getTimezoneOffset()};D.range==="custom"&&(r.start=D.customStart,r.end=D.customEnd);let a=await fetch(jm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await a.json();if(!s||s.ok===!1)throw new Error(s&&s.error||`HTTP ${a.status}`);D.data=s,D.cache.set(t,s)}catch(r){D.error=r instanceof Error?r.message:String(r)}finally{D.loading=!1,ut()}},B=(e,t,o)=>{let r=document.createElement(e);return r.style.cssText=t,o!==void 0&&(r.innerHTML=o),r},le=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),To=`background:${n.graphite};border:1px solid ${n.slate};border-radius:${y.lg};padding:16px 18px;min-width:0;`,_a=`font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin:0 0 12px;`,_e=(e,t,o)=>{let r=B("div",To+"flex:1;min-width:150px;");return r.appendChild(B("div",_a+"margin-bottom:8px;",le(e))),r.appendChild(B("div",`font-family:${u.sans};font-size:24px;font-weight:600;color:${n.bone};line-height:1.1;`,le(t))),o&&r.appendChild(B("div",`font-family:${u.sans};font-size:11px;color:${n.coolGray};margin-top:6px;`,le(o))),r},re=(e,t)=>{let o=B("div",To);if(o.appendChild(B("div",_a,le(e))),!t.length)return o.appendChild(B("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),o;let r=Math.max(...t.map(a=>a.barVal),1);for(let a of t.slice(0,12)){let s=B("div","margin:0 0 10px;"),i=B("div","display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;");i.appendChild(B("span",`font-size:12px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,le(a.label)));let d=B("span",`font-size:12px;color:${n.bone};font-weight:600;white-space:nowrap;`,le(a.primary)+(a.secondary?` <span style="color:${n.coolGray};font-weight:400;">${le(a.secondary)}</span>`:""));i.appendChild(d),s.appendChild(i);let l=B("div",`height:6px;background:${n.slate};border-radius:3px;overflow:hidden;`);l.appendChild(B("div",`height:100%;width:${Math.max(2,Math.round(a.barVal/r*100))}%;background:${n.emerald};border-radius:3px;`)),s.appendChild(l),o.appendChild(s)}return t.length>12&&o.appendChild(B("div",`font-size:11px;color:${n.coolGray};`,`+${t.length-12} more`)),o},Pr=(e,t,o)=>{let r=B("div",To+"overflow-x:auto;");if(r.appendChild(B("div",_a,le(e))),!o.length)return r.appendChild(B("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),r;let a=`text-align:left;padding:6px 10px;font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,s=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`,i=`<table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr>${t.map(d=>`<th style="${a}">${le(d)}</th>`).join("")}</tr></thead>
    <tbody>${o.map(d=>`<tr>${d.map(l=>`<td style="${s}">${le(l)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;return r.appendChild(B("div","",i)),r},se=(e,t)=>{let o=B("div",`display:grid;grid-template-columns:${e};gap:14px;margin-bottom:14px;`);for(let r of t)o.appendChild(r);return o},$o=e=>{let t=B("div","display:flex;flex-wrap:wrap;gap:14px;margin-bottom:14px;");for(let o of e)t.appendChild(o);return t},ze=e=>(e||[]).map(t=>({label:t.label,primary:F(t.count),barVal:t.count})),Vm=e=>(e||[]).map(t=>({label:t.label,primary:oe(t.sum),secondary:`\xB7 ${F(t.count)} deal${t.count===1?"":"s"}`,barVal:t.sum})),Ji=(e,t)=>{let o=e.calls||{};if(!o.available)return[B("div",`${To}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Call metrics unavailable.</strong> ${le(o.note||"CallStats.Sweep runs every 30 minutes \u2014 check back shortly.")}`)];let r=t==="acq"?"Seller":"Buyer",a=o[t]||[],s=a.filter(c=>c.dials>0||c.connects>0||c.inbound>0).map(c=>({label:c.label,primary:`${F(c.dials)} dials`,secondary:`\xB7 ${F(c.connects)} connected \xB7 ${F(c.inbound)} inbound`,barVal:c.dials})),i=a.filter(c=>c.talk_seconds>0).map(c=>({label:c.label,primary:Eo(c.talk_seconds),secondary:c.talk_per_contract_seconds!=null?`\xB7 ${Eo(c.talk_per_contract_seconds)} per contract`:"",barVal:c.talk_seconds})),d=[re(`${r} calls per rep (dials)`,s),re(`${r} talk time per rep`,i)],l=(o.other||[]).filter(c=>c.dials>0||c.talk_seconds>0);return l.length&&d.push(re("Unclassified calls per rep (contact is neither seller nor buyer)",l.map(c=>({label:c.label,primary:`${F(c.dials)} dials`,secondary:`\xB7 ${Eo(c.talk_seconds)} talk`,barVal:c.dials})))),d},Ym=(e,t)=>{let o=e.company||{},r=o.left_to_close_this_month||{};t.appendChild($o([_e("Closed revenue \u2014 365d",oe(o.closed_revenue_365),`${F(o.closed_count_365)} closings`),_e("Avg deal size \u2014 365d",oe(o.avg_deal_size_365)),_e("Left to close this month",oe(r.sum),`${F(r.count)} deal(s)`+(r.missing_est_close?` \xB7 ${F(r.missing_est_close)} missing est. close date`:"")),_e("New leads",F(o.total_leads),"in selected range")])),t.appendChild($o([_e("Contracts",`${F((o.contracts||{}).count)}`,oe((o.contracts||{}).sum)+" projected"),_e("Assignments",`${F((o.assignments||{}).count)}`,oe((o.assignments||{}).sum)+" assigned"),_e("Deals closed",`${F((o.closed||{}).count)}`,oe((o.closed||{}).sum)+" closed")])),t.appendChild(se("1fr 1fr 1fr",[re("New leads by source",ze(o.new_leads_by_source)),re("Contacts per closer (all time)",ze(o.contacts_per_closer)),re("Dispo deals per rep (all time)",ze(o.dispo_deals_per_rep))]))},Jm=(e,t)=>{let o=e.acq||{};t.appendChild(se("1fr 1fr",[re("Offers made per rep",ze(o.offers_per_rep)),re("Contracts acquired per closer",(o.contracts_per_closer||[]).map(a=>({label:a.label,primary:F(a.count),secondary:`\xB7 ${oe(a.sum)} projected`,barVal:a.count})))])),t.appendChild(se("1fr 1fr",[re("Projected revenue per closer (open escrows)",Vm(o.projected_per_closer)),re("Closed revenue per closer",(o.closed_per_closer||[]).map(a=>({label:a.label,primary:oe(a.sum),secondary:`\xB7 ${F(a.count)} closings \xB7 avg ${oe(a.avg)}`,barVal:a.sum})))]));let r=Ji(e,"acq");t.appendChild(r.length>=2?se("1fr 1fr",r.slice(0,2)):se("1fr",r)),r.length>2&&t.appendChild(se("1fr",r.slice(2)))},Qm=(e,t)=>{let o=e.dispo||{};t.appendChild(se("1fr 1fr",[re("Buyers qualified per dispo rep",ze(o.buyers_qualified_per_rep)),re("Assignments per dispo rep",(o.assignments_per_rep||[]).map(a=>({label:a.label,primary:F(a.count),secondary:`\xB7 ${oe(a.sum)} assigned`,barVal:a.count})))])),t.appendChild(se("1fr",[re("Closed revenue per dispo rep",(o.closed_per_dispo||[]).map(a=>({label:a.label,primary:oe(a.sum),secondary:`\xB7 ${F(a.count)} closings \xB7 avg ${oe(a.avg)}`,barVal:a.sum})))]));let r=Ji(e,"dispo");t.appendChild(r.length>=2?se("1fr 1fr",r.slice(0,2)):se("1fr",r)),r.length>2&&t.appendChild(se("1fr",r.slice(2)))},Zm=(e,t)=>{let o=e.marketing||{},r=o.lead_quality||{};t.appendChild($o([_e("Open leads",F(r.open)),_e("Won (under contract+)",F(r.won)),_e("Lost / dead",F(r.lost))]));let a=(o.per_channel||[]).map(i=>[i.label,F(i.leads),F(i.offers),F(i.contracts),`${F(i.assigned_count)} / ${oe(i.assigned_sum)}`,`${F(i.closed_count)} / ${oe(i.closed_sum)}`,oe(i.avg_deal)]);t.appendChild(se("1fr",[Pr("Per marketing channel",["Channel","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],a)]));let s=(o.per_city||[]).slice(0,15).map(i=>[i.label,F(i.leads),F(i.offers),F(i.contracts),`${F(i.assigned_count)} / ${oe(i.assigned_sum)}`,`${F(i.closed_count)} / ${oe(i.closed_sum)}`,oe(i.avg_deal)]);t.appendChild(se("1fr",[Pr("Per city (top 15 by leads)",["City","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],s)])),t.appendChild(se("1fr 1fr",[re("Dead leads by channel",ze(o.dead_by_channel)),re("Dead leads by city",ze(o.dead_by_city))]))},Xm=(e,t)=>{let o=e.tc||{};t.appendChild($o([_e("Contracted",F(o.contracted),"in selected range"),_e("Closed",F(o.closed)),_e("Lost in escrow",F(o.lost_in_escrow)),_e("Fall-out rate",o.fallout_rate_pct==null?"\u2014":`${o.fallout_rate_pct}%`,"lost \xF7 (closed + lost)")])),t.appendChild(se("1fr 1fr",[re("Deals per TC (contracted in range)",ze(o.per_tc)),re("Open escrows by stage",ze(o.open_by_stage))]));let r=(o.board||[]).map(a=>[a.name,a.stage,a.owner,oe(a.value),ua(a.est_close),a.acq_closer,a.dispo_rep]);t.appendChild(se("1fr",[Pr("TC deal board (open escrows)",["Deal","Stage","TC","Value","Est. close","Closer","Dispo"],r)]))},eb=(e,t)=>{let o=e.velocity||{},r=o.offers_per_contract||{};t.appendChild($o([_e("Offers per contract",r.ratio==null?"\u2014":String(r.ratio),`${F(r.offers)} offers \xB7 ${F(r.contracts)} contracts`)]));let a=d=>(d||[]).map(l=>({label:l.label,primary:`${l.avg_days} days`,secondary:`\xB7 ${F(l.n)} deal${l.n===1?"":"s"}`,barVal:l.avg_days}));t.appendChild(se("1fr 1fr",[re("Days lead \u2192 contract, by source",a(o.days_to_contract_by_source)),re("Days contract \u2192 close, by source",a(o.days_contract_to_close_by_source))]));let s=(o.leads_per_contract_by_source||[]).map(d=>[d.label,F(d.leads),F(d.contracts),d.ratio==null?"\u2014":`${d.ratio} : 1`]);t.appendChild(se("1fr",[Pr("Leads per contract, by source",["Source","Leads","Contracts","Leads : contract"],s)]));let i=o.talk_time||{};if(i.available){let d=(i.per_rep||[]).filter(l=>l.talk_seconds>0).map(l=>({label:l.label,primary:l.talk_per_contract_seconds!=null?`${Eo(l.talk_per_contract_seconds)} / contract`:"\u2014",secondary:`\xB7 ${Eo(l.talk_seconds)} total \xB7 ${F(l.contracts)} contract${l.contracts===1?"":"s"}`,barVal:l.talk_per_contract_seconds!=null?l.talk_per_contract_seconds:0}));t.appendChild(se("1fr",[re("Talk time per contract per rep",d)]))}else t.appendChild(B("div",`${To}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Talk time per contract per rep \u2014 pending first sweep.</strong> ${le(i.note||"")}`))},ko=e=>`padding:5px 12px;border-radius:${y.pill};border:1px solid ${e?n.emeraldBorder:n.steel};background:${e?n.emeraldGlow:"transparent"};color:${e?n.emerald:n.ash};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;`,ut=()=>{let e=document.getElementById(Ir);if(!e)return;let t=e.querySelector("[data-ws-analytics-body]"),o=e.querySelector("[data-ws-analytics-controls]");if(!t||!o)return;o.innerHTML="";let r=B("div","display:flex;flex-wrap:wrap;gap:6px;align-items:center;");for(let _ of Wm){let h=B("button",ko(D.range===_.key),le(_.label));h.onclick=()=>{D.range=_.key,_.key!=="custom"?bt():ut()},r.appendChild(h)}if(D.range==="custom"){let _=`background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;padding:4px 8px;color-scheme:dark;`,h=B("input",_);h.type="date",h.value=D.customStart;let g=B("input",_);g.type="date",g.value=D.customEnd;let k=B("button",ko(!0),"Apply");k.onclick=()=>{D.customStart=h.value,D.customEnd=g.value,D.customStart&&D.customEnd&&bt()},r.appendChild(h),r.appendChild(g),r.appendChild(k)}let a=B("button",ko(!1)+"margin-left:auto;","\u21BB Refresh");a.onclick=()=>void bt(!0),r.appendChild(a),o.appendChild(r);let s=B("div","display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;");for(let _ of Gm){let h=B("button",ko(D.tab===_.key),le(_.label));h.onclick=()=>{D.tab=_.key,ut()},s.appendChild(h)}if(o.appendChild(s),t.innerHTML="",D.loading){t.appendChild(B("div",`padding:60px;text-align:center;color:${n.ash};font-family:${u.sans};font-size:13px;`,"Computing analytics\u2026"));return}if(D.error){let _=B("div",`padding:40px;text-align:center;color:${n.crimson};font-family:${u.sans};font-size:13px;`,`Couldn't load analytics: ${le(D.error)}`),h=B("button",ko(!0)+"margin:14px auto 0;display:inline-block;","Retry");h.onclick=()=>void bt(!0);let g=B("div","text-align:center;");g.appendChild(_),g.appendChild(h),t.appendChild(g);return}let i=D.data;if(!i){bt();return}let d=i.range||{},l=Number((i.calls||{}).last_swept)||0,c=l>0?` \xB7 calls as of ${new Date(l).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})} (syncing)`:"";t.appendChild(B("div",`font-family:${u.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.coolGray};margin:0 0 12px;`,`${le(d.label||"")} \xB7 ${ua(d.start)} \u2192 ${ua(d.end)} \xB7 ${F((i.meta||{}).opps)} opps \xB7 ${F((i.meta||{}).contacts)} contacts${c}`));let p=i.insights||[];if(p.length){let _=B("div","display:flex;flex-direction:column;gap:6px;margin:0 0 16px;");for(let h of p.slice(0,6)){let g=h.level==="warn";_.appendChild(B("div",`padding:8px 12px;border-left:3px solid ${g?n.amber:n.blue};background:${g?n.amberGlow:n.blueGlow};border-radius:0 ${y.sm} ${y.sm} 0;font-family:${u.sans};font-size:12px;color:${n.bone};`,le(h.text)))}t.appendChild(_)}let b=B("div","");D.tab==="company"?Ym(i,b):D.tab==="acq"?Jm(i,b):D.tab==="dispo"?Qm(i,b):D.tab==="marketing"?Zm(i,b):D.tab==="tc"?Xm(i,b):eb(i,b),t.appendChild(b)},ht=null,tb=()=>{let e=Q();if(e){try{fetch(Um,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"sync",tenant_id:e})}).catch(()=>{})}catch{}ht&&window.clearTimeout(ht),ht=window.setTimeout(()=>{ht=null,D.open&&(D.cache.clear(),bt(!0))},9e4)}},ha=()=>{if(document.getElementById(Ir))return;D.open=!0,tb();let e=B("div",`position:fixed;inset:0;z-index:100000;background:${n.obsidian};display:flex;flex-direction:column;font-family:${u.sans};`);e.id=Ir;let t=B("div",`padding:18px 24px 14px;border-bottom:1px solid ${n.slate};flex-shrink:0;`),o=B("div","display:flex;align-items:center;gap:12px;margin-bottom:12px;");o.appendChild(B("div",`font-family:${u.mono};font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${n.bone};`,`Analytics <span style="color:${n.emerald};">\xB7</span> <span style="color:${n.ash};">REInvest OS</span>`));let r=B("button",`margin-left:auto;background:transparent;border:1px solid ${n.steel};border-radius:${y.sm};color:${n.ash};font-size:14px;line-height:1;padding:6px 10px;cursor:pointer;`,"\u2715");r.onclick=Zi,o.appendChild(r),t.appendChild(o),t.appendChild(B("div","","")).setAttribute("data-ws-analytics-controls","1"),e.appendChild(t);let a=B("div","flex:1;overflow-y:auto;padding:20px 24px 40px;");a.setAttribute("data-ws-analytics-body","1"),e.appendChild(a),document.body.appendChild(e),document.addEventListener("keydown",Qi),ut(),D.data||bt()},Qi=e=>{e.key==="Escape"&&Zi()},Zi=()=>{D.open=!1,ht&&(window.clearTimeout(ht),ht=null),document.getElementById(Ir)?.remove(),document.removeEventListener("keydown",Qi)},ob=["/kpis","ws-kpis","ws-analytics"],rb=/\/custom-menu-link\//,ba=!1,Vi=()=>{if(ba||!rb.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return ob.some(i=>s.includes(i))});if(r){ba=!0,m.info(`[analytics] custom-menu-link route detected (src=${r.src}) \u2014 opening overlay`);try{history.back()}catch{}setTimeout(()=>{ha(),ba=!1},50);return}e<10&&setTimeout(t,150)};t()},Yi=!1,Xi=()=>{if(Yi)return;Yi=!0,ge(()=>setTimeout(Vi,50)),Vi();let e=()=>{let t=window.location.hash.replace("#","");(t==="ws-analytics"||t==="ws-kpis")&&ha()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_ANALYTICS=()=>ha(),m.info("[analytics] mounted (menu-link route + hash + window trigger)")};var ol="ws-buybox-nav-icon",ga="ws-buybox-panel",el="ws-buybox-modal",nb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",fa="https://mcclivetim.github.io/reinvest-os-cdn/geo",Or=null,Co=null,Lo=null,va=async()=>{if(Or)return Or;try{let e=await fetch(`${fa}/states.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return Or=await e.json(),Or}catch(e){return m.error("[buy-box] failed to fetch states.json",e),[]}},ab=async e=>{if(!Co)try{let t=await fetch(`${fa}/counties.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Co=await t.json()}catch(t){return m.error("[buy-box] failed to fetch counties.json",t),[]}return Co?.[e]??[]},sb=async e=>{if(!Lo)try{let t=await fetch(`${fa}/cities.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Lo=await t.json()}catch(t){return m.error("[buy-box] failed to fetch cities.json",t),[]}return Lo?.[e]??[]},xa=async e=>await(await fetch(nb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),ib=(e,t)=>xa({tenant_id:e,action:"list",buyer_contact_id:t}),lb=(e,t,o,r)=>xa({tenant_id:e,action:"add",buyer_contact_id:t,geo_level:o,geo_value:r}),db=(e,t)=>xa({tenant_id:e,action:"remove",entry_id:t}),J=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),cb=(e,t)=>{let o=t.find(r=>r.code===e);return o?`${o.name} (${e})`:e},pb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',mb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',bb="nav.w-13, nav[class*='w-13']",ub=".flex-1.h-full.relative.overflow-hidden.rounded-lg",hb=async()=>{try{return await I(bb,{timeoutMs:2500})}catch{return null}},_b=async()=>{try{return await I(ub,{timeoutMs:2500})}catch{return null}},yb=e=>e.querySelector("div[class*='bg-contacts-panel']")??null,vb=(e,t)=>{let o=document.createElement("div");return o.id=ga,o.dataset.buyerContactId=t,o.style.cssText=`
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
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{wb(e,t,()=>wa(e,t))}),o},wa=async(e,t)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([ib(e,t),va()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${J(r.error||"Failed to load buy-box entries")}</div>`;return}gb(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,e,t)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${J(r.message)}</div>`}},gb=(e,t,o,r,a)=>{if(t.state.length+t.county.length+t.city.length+t.zip.length===0){e.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let d=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(l=>t[l.key].length>0).map(l=>{let c=t[l.key].map(p=>{let b=l.key==="state"?cb(p.geo_value,o):p.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${J(b)}</span>
              <button type="button" data-entry-id="${J(p.id)}" data-entry-label="${J(b)}" class="ws-buybox-remove" aria-label="Remove ${J(b)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${y.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${mb}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${u.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${J(l.label)} (${t[l.key].length})</div>
          ${c}
        </div>
      `}).join("");e.innerHTML=d,e.querySelectorAll(".ws-buybox-remove").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.color=n.crimson}),l.addEventListener("mouseleave",()=>{l.style.color=n.ash}),l.addEventListener("click",()=>{let c=l.dataset.entryId||"",p=l.dataset.entryLabel||"this area";confirm(`Remove "${p}" from this buyer's buy-box?`)&&(l.disabled=!0,db(r,c).then(b=>{if(!b.ok){alert(`Failed to remove: ${b.error||"unknown error"}`),l.disabled=!1;return}wa(r,a)}).catch(b=>{alert(`Network error: ${b.message}`),l.disabled=!1}))})})},Br=!1,rl=(e,t)=>{Br=t;let o=yb(e.panelArea);console.log(`[buy-box] setActive(${t}) \u2014 nativePanel=${!!o} panel=${!!e.panel} iconBtn=${!!e.iconBtn}`),t?(e.iconBtn.className=fb,e.iconBtn.dataset.active="true",o&&(e.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),e.panel.style.display="flex",wa(e.tenantId,e.buyerContactId)):(e.iconBtn.className=nl,delete e.iconBtn.dataset.active,e.panel.style.display="none",o&&(o.style.display=e.nativePanelOriginalDisplay||""))},nl="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",fb="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",xb=e=>{let t=document.createElement("button");return t.id=ol,t.type="button",t.title="Buy-Box",t.setAttribute("aria-label","Buy-Box"),t.className=nl,t.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${pb.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,t.addEventListener("click",o=>{o.stopPropagation();let r=e();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!Br;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),rl(r,a)}),t},wb=(e,t,o)=>{let r=document.getElementById(el);r&&r.remove();let a=document.createElement("div");a.id=el,a.style.cssText=`
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
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",w=>{w.target===a&&a.remove()});let i={step:1,granularity:null,stateCode:null,value:null},d=async()=>{if(i.step===1)s.innerHTML=l(),c();else if(i.step===2){s.innerHTML=p();let w=await va();s.innerHTML=b(w),_(w)}else if(i.step===3)if(i.granularity==="zip")s.innerHTML=v(),x();else if(i.granularity==="state"){let w=await va();s.innerHTML=g(w),k(w)}else i.granularity==="county"?(s.innerHTML=h(i.stateCode||""),await ab(i.stateCode||""),s.innerHTML=f("County"),E()):i.granularity==="city"&&(s.innerHTML=h(i.stateCode||""),await sb(i.stateCode||""),s.innerHTML=f("City"),E())},l=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(w=>`
        <button type="button" data-granularity="${w}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${y.md};
          padding: 20px 16px; cursor: pointer; font-family: ${u.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${w.charAt(0).toUpperCase()+w.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,c=()=>{s.querySelectorAll(".ws-buybox-tile").forEach(w=>{w.addEventListener("mouseenter",()=>{w.style.borderColor=n.emerald,w.style.background=n.emeraldGlow}),w.addEventListener("mouseleave",()=>{w.style.borderColor=n.steel,w.style.background=n.steel}),w.addEventListener("click",()=>{let T=w.dataset.granularity;i.granularity=T,i.step=T==="zip"?3:2,d()})}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},p=()=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,b=w=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${J(i.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.sm};
      font-family: ${u.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${y.sm};">
      ${w.map(T=>`
        <div data-state-code="${J(T.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${J(T.name)} <span style="color: ${n.ash}; font-family: ${u.mono}; font-size: 11px;">(${J(T.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
    </div>
  `,_=w=>{let T=s.querySelector("#ws-buybox-state-search"),L=s.querySelectorAll(".ws-buybox-state-row");L.forEach(A=>{A.addEventListener("mouseenter",()=>{A.style.background=n.emeraldGlow}),A.addEventListener("mouseleave",()=>{A.style.background="transparent"}),A.addEventListener("click",()=>{i.stateCode=A.dataset.stateCode||"",i.step=3,d()})}),T?.addEventListener("input",()=>{let A=(T.value||"").toLowerCase().trim();w.forEach((G,U)=>{let j=L[U];if(!j)return;let R=!A||G.name.toLowerCase().includes(A)||G.code.toLowerCase()===A;j.style.display=R?"":"none"})}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>T?.focus(),0)},h=w=>`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${J(w)}\u2026</div>
  `,g=w=>{let T=w.find(L=>L.code===i.stateCode);return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${J(T?T.name:i.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${T?J(T.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Add ${T?J(T.name):"State"}</button>
        </div>
      </div>
    `},k=w=>{s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>C(i.stateCode||""))},f=w=>{let T=i.granularity==="county"?Co?.[i.stateCode||""]??[]:Lo?.[i.stateCode||""]??[];return`
      <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${J(w)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${T.length.toLocaleString()} ${J(w).toLowerCase()}s in ${J(i.stateCode||"")}.</div>
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
    `},E=()=>{let w=i.granularity==="county"?Co?.[i.stateCode||""]??[]:Lo?.[i.stateCode||""]??[],T=s.querySelector("#ws-buybox-value-search"),L=s.querySelector("#ws-buybox-value-list");if(!T||!L)return;let A=G=>{let U=G.toLowerCase().trim();if(!U){L.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let j=w.filter(R=>R.toLowerCase().includes(U)).slice(0,50);if(j.length===0){L.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${J(i.stateCode||"")}.</div>`;return}L.innerHTML=j.map(R=>`
        <div data-value="${J(R)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${J(R)}
        </div>
      `).join(""),L.querySelectorAll(".ws-buybox-value-row").forEach(R=>{R.addEventListener("mouseenter",()=>{R.style.background=n.emeraldGlow}),R.addEventListener("mouseleave",()=>{R.style.background="transparent"}),R.addEventListener("click",()=>{i.value=R.dataset.value||"",C(i.value)})})};T.addEventListener("input",()=>A(T.value)),A(""),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>T.focus(),0)},v=()=>`
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
  `,x=()=>{let w=s.querySelector("#ws-buybox-zip"),T=s.querySelector("#ws-buybox-err");w&&(w.addEventListener("input",()=>{w.value=w.value.replace(/\D/g,"").slice(0,5),T&&(T.textContent="")}),w.addEventListener("keydown",L=>{L.key==="Enter"&&(L.preventDefault(),$())}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void $()),setTimeout(()=>w.focus(),0))},$=async()=>{let w=s.querySelector("#ws-buybox-zip"),T=s.querySelector("#ws-buybox-err"),L=(w?.value||"").trim();if(!/^\d{5}$/.test(L)){T&&(T.textContent="Zip must be exactly 5 digits.");return}await C(L)},C=async w=>{if(!i.granularity||!w)return;let T=s.querySelector("#ws-buybox-err"),L=s.querySelector("#ws-buybox-save");L&&(L.disabled=!0,L.textContent="Adding\u2026"),T&&(T.textContent="");try{let A=await lb(e,t,i.granularity,w);if(!A.ok){T&&(T.textContent=A.error||"Failed to add entry."),L&&(L.disabled=!1,L.textContent="Add");return}o(),s.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${J(w)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${A.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{i.step=1,i.granularity=null,i.stateCode=null,i.value=null,d()},900)}catch(A){T&&(T.textContent=`Network error: ${A.message}`),L&&(L.disabled=!1,L.textContent="Add")}};d()},ya=!1,At=null,So=null,tl=()=>{document.getElementById(ol)?.remove(),document.getElementById(ga)?.remove(),So&&At&&At.nav.removeEventListener("click",So,!0),So=null,At=null,Br=!1},al=()=>{kb()},kb=async()=>{if(!ya){ya=!0;try{let e=z();if(!e){tl();return}let t=document.getElementById(ga);if(t&&t.dataset.buyerContactId===e.contactId&&At)return;tl();let o=null;try{o=await Pe(e.contactId,e.locationId)}catch(b){m.warn("[buy-box] Contact Type fetch failed",b);return}if(Oe(o)!=="buyer")return;if(!e.locationId){m.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,s]=await Promise.all([hb(),_b()]);if(!a||!s){m.warn("[buy-box] right-rail nav or panel area not found");return}let i=z();if(!i||i.contactId!==e.contactId)return;let d=vb(e.locationId,e.contactId),l=xb(()=>At),c={buyerContactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:l,panel:d,nativePanelOriginalDisplay:""};At=c;let p=a.querySelector(".flex.flex-col.items-center.gap-2");p?p.appendChild(l):a.appendChild(l),s.appendChild(d),So=b=>{let _=b.target;if(!_||c.iconBtn.contains(_))return;_.closest("button.sidebar-option-button")&&Br&&rl(c,!1)},a.addEventListener("click",So,!0),m.info(`[buy-box] right-rail mount complete for buyer ${e.contactId}`)}finally{ya=!1}}};var Z=".crm-opportunities-modal .ui-modal-heading .description",sl=new Map,ka=null,Ea,Eb=()=>{let e=new Map;for(let[t,{selector:o,cb:r}]of sl){let a=e.get(o);if(a===void 0&&(a=!!document.querySelector(o),e.set(o,a)),!!a)try{r()}catch(s){m.error(`[arrival-watcher] callback "${t}" threw`,s)}}},V=(e,t,o)=>{sl.set(e,{selector:t,cb:o}),!ka&&(ka=new MutationObserver(()=>{Ea===void 0&&(Ea=window.setTimeout(()=>{Ea=void 0,Eb()},300))}),ka.observe(document.body,{childList:!0,subtree:!0}))};var il="ws-crm-dispo-action-row",Y=e=>{let t=document.getElementById(il);if(t)return t;e.classList.contains("description")&&(e.style.display="flex",e.style.alignItems="center",e.style.gap="12px",e.style.flexWrap="wrap");let o=document.createElement("span");return o.id=il,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",e.appendChild(o),o};var $b=e=>{let t=(o,r,a)=>o.style.setProperty(r,a,"important");e.querySelectorAll("input, textarea, select").forEach(o=>{if(o instanceof HTMLInputElement&&o.type==="checkbox")return;t(o,"background-color",n.obsidian),t(o,"color",n.bone),t(o,"-webkit-text-fill-color",n.bone),t(o,"border-color",n.steel);let r=o.previousElementSibling;r instanceof HTMLElement&&r.tagName==="DIV"&&(t(r,"color",n.bone),t(r,"-webkit-text-fill-color",n.bone))}),e.querySelectorAll("div").forEach(o=>{t(o,"background-color","transparent"),t(o,"border-style","none")})},Mt=(e,t=8e3)=>{let o=null,r=()=>{o?.disconnect(),$b(e),o?.observe(e,{attributes:!0,attributeFilter:["style"],subtree:!0})};o=new MutationObserver(r),r(),window.setTimeout(()=>{o?.disconnect(),o=null},t)};var Tb=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],Cb=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,Lb=".hr-card.hr-modal.crm-opportunities-modal",N=()=>{let e=document.querySelector(Lb);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(Cb);if(a){let s=a[1];if(Tb.includes(s))return s}}return null},X=async(e=2500)=>{let t=Date.now();for(;Date.now()-t<e;){let o=N();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var Sb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",Ht="ws-crm-change-primary-wrap",Ot="ws-change-primary-modal",Ab=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Mb=/\/v2\/location\/([A-Za-z0-9]+)/,Bt=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Ib=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,It=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;`,Pt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,_t=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Pb=async e=>{let t=await fetch(Sb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok)throw new Error(`Webhook returned ${t.status} ${t.statusText}`);let o=await t.json();return Array.isArray(o)?o[0]:o},Ca=e=>{document.getElementById(Ot)?.remove();let t=document.createElement("div");t.id=Ot,t.style.cssText=`
    position: fixed; inset: 0; z-index: 1000000;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${u.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 94vw); max-height: 90vh; overflow-y: auto;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.lg}; padding: 28px 32px; color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.fixedNewPrimary||null,a=e.addrLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Bt(e.addrLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>',s=r?`<div style="font-size: 14px; margin-bottom: 14px;">New primary contact: <strong>${Bt(r.name||"this contact")}</strong></div>`:`
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
      <div>${Pt("First Name *")}<input id="ws-cp-first" type="text" autocomplete="off" placeholder="Jordan" style="${It}"></div>
      <div>${Pt("Last Name")}<input id="ws-cp-last" type="text" autocomplete="off" placeholder="Seller" style="${It}"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Pt("Phone")}<input id="ws-cp-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${It}"></div>
      <div>${Pt("Email")}<input id="ws-cp-email" type="email" autocomplete="off" placeholder="name@email.com" style="${It}"></div>
    </div>`;o.innerHTML=`
    <style id="ws-cp-style">
      #${Ot} input::placeholder, #${Ot} textarea::placeholder {
        color: ${n.ash} !important; -webkit-text-fill-color: ${n.ash} !important; opacity: 1 !important;
      }
      #${Ot} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Change Primary Contact</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Moves the deal to the new decision-maker: the opp, seller roles, deal state, claim, and dial lists all follow. The current primary's conversation history stays on their record.</div>
    ${a}
    ${s}
    <div style="margin-bottom: 12px;">
      ${Pt("Current primary stays\u2026")}
      <select id="ws-cp-old" style="${It} cursor: pointer;">
        <option value="seller_2" selected>On the deal as Second Seller (still a signer)</option>
        <option value="detach">Not on title \u2014 detach from the property roles</option>
      </select>
    </div>
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-cp-stop" type="checkbox" checked>
      <span>Stop calling/texting the current primary <span style="color:${n.ash};">(drips end, off dial lists)</span></span>
    </label>
    <div style="margin-bottom: 14px;">
      ${Pt("Note (optional)")}
      <textarea id="ws-cp-note" rows="2" autocomplete="off" placeholder="e.g. Son handles the sale \u2014 mom is on the deed" style="${It} resize: vertical;"></textarea>
    </div>
    <div id="ws-cp-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-cp-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-cp-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">${r?"Make Primary":"Change Primary"}</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Mt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-cp-cancel")?.addEventListener("click",()=>t.remove()),window.setTimeout(()=>o.querySelector("#ws-cp-first")?.focus(),0);let i=o.querySelector("#ws-cp-err"),d=c=>{i&&(i.textContent=c)},l=async(c,p)=>{d("");let b=p?.textContent||"";p&&(p.disabled=!0,p.textContent="Working\u2026",p.style.opacity="0.7");try{let _=await Pb({tenant_id:e.tenantId,acq_opp_id:e.acqOppId||void 0,property_record_id:e.propertyRecordId||void 0,new_primary:c,old_disposition:o.querySelector("#ws-cp-old")?.value||"seller_2",stop_old_outreach:o.querySelector("#ws-cp-stop")?.checked??!0,note:(o.querySelector("#ws-cp-note")?.value||"").trim(),triggered_by_user_id:P()||""});if(!_?.ok){d(_?.error||"Something went wrong \u2014 try again."),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1");return}m.info(`Primary contact changed -> ${_.new_primary_contact_id}`),Ob(o,_,e),e.onSuccess?.(_)}catch(_){m.error("Change primary failed",_),d(`Network error: ${_ instanceof Error?_.message:"request failed"}`),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1")}};o.querySelector("#ws-cp-promote")?.addEventListener("click",c=>{l({promote_seller_2:!0},c.currentTarget)}),o.querySelector("#ws-cp-submit")?.addEventListener("click",c=>{let p=c.currentTarget;if(r){l({contact_id:r.contactId},p);return}let b=(o.querySelector("#ws-cp-first")?.value||"").trim(),_=(o.querySelector("#ws-cp-last")?.value||"").trim(),h=(o.querySelector("#ws-cp-phone")?.value||"").trim(),g=(o.querySelector("#ws-cp-email")?.value||"").trim().toLowerCase();if(!b){d("First name is required (or use Promote above).");return}let k="";if(h){let f=h.replace(/\D/g,"");if(f.length===11&&f.startsWith("1")&&(f=f.slice(1)),f.length!==10){d("Phone must be a 10-digit US number.");return}k=`+1${f}`}if(g&&!/.+@.+\..+/.test(g)){d("That email doesn't look valid.");return}if(!k&&!g){d("Add a phone or an email for the new primary.");return}l({first_name:b,last_name:_,phone:k,email:g},p)})},Ob=(e,t,o)=>{let r=[];t.already_primary?r.push(_t("Already the primary contact","info")):(r.push(_t(t.contact_created?"Contact created":"Existing contact reused",t.contact_created?"good":"info")),r.push(_t(`Deal moved (${(t.opps_moved||[]).map(i=>i.pipeline).join(", ")||"ACQ"})`,"good")),t.old_role==="seller_2"?r.push(_t("Old primary kept as Second Seller","info")):t.old_role==="detached"&&r.push(_t("Old primary detached from roles","info")),(t.call_status_applied||"").startsWith("copied:")&&r.push(_t(`Inherited: ${Bt((t.call_status_applied||"").slice(7))}`,"good")),r.push(_t(t.outreach_stopped?"Old primary's outreach stopped":"Old primary still in rotation",t.outreach_stopped?"good":"warn")));let a=(t.warnings||[]).map(i=>`<div style="font-size:11px;color:${n.amber};margin-top:4px;">\xB7 ${Bt(i)}</div>`).join(""),s=t.new_primary_contact_id?`${window.location.origin}/v2/location/${encodeURIComponent(o.tenantId)}/contacts/detail/${encodeURIComponent(t.new_primary_contact_id)}`:"";e.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Primary Contact Changed</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Bt(t.new_primary_name||"New primary")} now owns this deal</div>
    <div style="line-height: 1;">${r.join("")}</div>
    ${a}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      ${s?`<a href="${Bt(s)}" style="display:inline-flex;align-items:center;background: transparent; color: ${n.emeraldBright}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; text-decoration:none;">Open new primary</a>`:""}
      <button id="ws-cp-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-cp-done")?.addEventListener("click",()=>{document.getElementById(Ot)?.remove()})},Hr=()=>{let e=window.location.pathname,t=e.match(Ab),o=t?t[1]:fe();if(!o)return null;let r=e.match(Mb);return{oppId:o,locationId:r?r[1]:null}},Bb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Hb=async()=>{for(let e of Bb)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Rr=!1,$a=async()=>{if(!Rr){Rr=!0;try{await Rb()}finally{Rr=!1}}},Rb=async()=>{let e=Hr();if(!e||!e.locationId){document.getElementById(Ht)?.remove(),Mo();return}let t=document.getElementById(Ht);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Acquisitions"&&(t.remove(),Mo());return}t&&t.remove();let o=await Hb();if(!o)return;let r=await X();if(r!=="Acquisitions"){m.debug(`[change-primary] gated off \u2014 pipeline="${r}" (expected Acquisitions)`);return}let a=Hr();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=Ht,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:4;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=H,i.title="Seller says someone else handles the sale? Hand the deal to that person \u2014 opp, seller roles, deal state, and dial lists all follow",i.innerHTML=`${Ib(n.amber)}<span>Change Primary Contact</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let d=Hr();!d||!d.locationId||Ca({tenantId:d.locationId,acqOppId:d.oppId})}),s.appendChild(i),Y(o).appendChild(s),m.debug(`Mounted Change Primary Contact button on opp ${e.oppId}`),Db(e.oppId)},Ao=null,Ta=null,Mo=()=>{Ao?.disconnect(),Ao=null,Ta=null},Db=e=>{if(Ao&&Ta===e)return;Mo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Ta=e,Ao=new MutationObserver(()=>{let o=Hr();if(!o||o.oppId!==e){Mo();return}let r=N();if(r!==null&&r!=="Acquisitions"){document.getElementById(Ht)?.remove(),Mo();return}document.getElementById(Ht)||$a()}),Ao.observe(t,{childList:!0,subtree:!0}))},ll=()=>{V("change-primary-contact",Z,()=>{!document.getElementById(Ht)&&!Rr&&$a()}),$a()};var pl="ws-properties-nav-icon",Ia="ws-properties-panel",dl="ws-properties-modal",Pa="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property",Fb=`${Pa}/list-for-contact`,zb=`${Pa}/create-with-opp`,Nb=`${Pa}/add-contact`,qb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",jb=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],de=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Ub=(e,t)=>`/v2/location/${e}/objects/property/list?recordId=${t}`,ml=e=>{if(e==null||e==="")return null;let t=Number(String(e).replace(/[^0-9.\-]/g,""));return Number.isFinite(t)&&t!==0?t:null},Dr=e=>{let t=ml(e);if(t===null)return"&mdash;";let o=Math.abs(t);return o>=1e6?`$${(t/1e6).toFixed(t%1e6?1:0)}M`:o>=1e3?`$${Math.round(t/1e3)}k`:`$${Math.round(t)}`},La=e=>{let t=ml(e);return t===null?"&mdash;":t.toLocaleString()},bl={easy:"Paint & Flooring",minor_rehab:"Kitchen & Bath",full_cosmetic:"Full Cosmetic",major_repairs:"Roof & Systems"},Wb=e=>{let t=(e||"").toString().trim();return t?de(bl[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase())):"&mdash;"},Gb=e=>{let t=(e||"").toString().trim();return t?bl[t]||t:""},Kb={single_family_residence_sfr:"Single Family Residence (SFR)",multifamily_24_units:"Multi-Family 2-4 Units",multifamily_5_units:"Multi-Family 5+ Units",land:"Land",commercial:"Commercial",mobile_home:"Mobile Home"},Vb=e=>{let t=(e||"").toString().trim();return t?Kb[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase()):""},Je=(e,t,o)=>`<div style="min-width:0;"><div style="font-size:9px;color:${n.ash};text-transform:uppercase;letter-spacing:.4px;">${e}</div><div title="${de(o||"")}" style="font-size:12px;color:${n.bone};font-weight:500;line-height:1.25;word-break:break-word;">${t}</div></div>`,Yb=e=>`
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid ${n.steel};">
    ${Je("Beds",La(e.beds))}
    ${Je("Baths",La(e.baths))}
    ${Je("Sq Ft",La(e.sqft))}
    ${Je("Rehab",Wb(e.rehab_level),Gb(e.rehab_level))}
    ${Je("ARV",Dr(e.arv))}
    ${Je("IMV",Dr(e.imv))}
    ${Je("MAO",Dr(e.mao))}
    ${Je("Ask",Dr(e.asking_price))}
  </div>`,Aa=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000001; padding: 10px 18px; border-radius: ${y.sm};
    background: ${t==="ok"?n.emerald:n.crimson}; color: ${n.bone};
    font-family: ${u.sans}; font-size: 13px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4e3)},Jb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',Qb='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>',Zb="nav.w-13, nav[class*='w-13']",Xb=".flex-1.h-full.relative.overflow-hidden.rounded-lg",ul="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",eu="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",tu=async()=>{try{return await I(Zb,{timeoutMs:2500})}catch{return null}},ou=async()=>{try{return await I(Xb,{timeoutMs:2500})}catch{return null}},Fr=async(e,t)=>await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"})).json(),Be=`width:100%;box-sizing:border-box;padding:8px 10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:13px;outline:none;margin-bottom:10px;`,He=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,Oa=`background:${n.emerald};color:${n.bone};border:none;border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${u.sans};font-size:13px;font-weight:600;`,hl=`background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 16px;cursor:pointer;font-family:${u.sans};font-size:13px;`,ru=(e,t)=>{let o=document.createElement("div");return o.id=Ia,o.dataset.contactId=t,o.style.cssText=`
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
        <button id="ws-prop-add" type="button" style="${Oa}">+ Add Property</button>
        <button id="ws-prop-close" type="button" title="Close" aria-label="Close" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;flex:0 0 auto;">&times;</button>
      </div>
    </div>
    <div id="ws-prop-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:13px;color:${n.bone};">
      <div style="color:${n.ash};font-style:italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-prop-add")?.addEventListener("click",()=>{au(e,t,()=>zr(e,t))}),o},zr=async(e,t)=>{let o=document.querySelector("#ws-prop-body");if(o)try{let r=await Fr(Fb,{tenant_id:e,contact_id:t});if(!r.ok){o.innerHTML=`<div style="color:${n.crimson};">${de(r.error||"Failed to load properties")}</div>`;return}nu(o,r.properties||[],e,t)}catch(r){o.innerHTML=`<div style="color:${n.crimson};">Network error: ${de(r.message)}</div>`}},nu=(e,t,o,r)=>{if(!t.length){e.innerHTML=`<div style="text-align:center;padding:32px 0;color:${n.ash};">No properties yet.<br><span style="font-size:12px;">Click "+ Add Property" to create one (a deal is created automatically).</span></div>`;return}e.innerHTML=t.map(a=>{let s=/lost|abandon/i.test(a.deal_stage||""),i=s?n.crimson:n.emeraldBright,d=s?n.steel:n.emeraldBorder,l=a.has_acq_opp?`<span title="Deal stage" style="font-size:10px;color:${i};border:1px solid ${d};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">${de(a.deal_stage||"Deal")}</span>`:`<span title="No ACQ deal yet" style="font-size:10px;color:${n.amber};border:1px solid ${n.steel};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">No deal</span>`,c=(a.roles||[]).map(p=>p==="seller_1"?"Seller 1":p==="seller_2"?"Seller 2":p==="tenant_contact"?"Tenant":p).join(", ");return`
      <div style="border:1px solid ${n.steel};border-radius:${y.md};padding:10px 12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div class="ws-prop-open" data-prop="${de(a.property_record_id)}" title="Open property record" style="font-size:13px;font-weight:500;color:${n.bone};cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-width:0;">
            <span style="text-decoration:underline;text-decoration-color:${n.steel};text-underline-offset:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${de(a.address)}</span>
            <span style="color:${n.emeraldBright};font-size:12px;line-height:1;flex:0 0 auto;">&#8599;</span>
          </div>
          ${l}
        </div>
        <div style="font-size:11px;color:${n.ash};margin-top:3px;">${de(c||"")}${a.property_type?" &middot; "+de(Vb(a.property_type)):""}</div>
        ${Yb(a)}
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="ws-prop-addperson" data-prop="${de(a.property_record_id)}" data-addr="${de(a.address)}" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${u.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">${Qb} Add person</button>
          ${(a.roles||[]).includes("seller_2")&&a.has_acq_opp&&a.opp_id?`<button type="button" class="ws-prop-makeprimary" data-prop="${de(a.property_record_id)}" data-addr="${de(a.address)}" data-opp="${de(a.opp_id)}" title="This contact is the Second Seller \u2014 make them the PRIMARY contact for this deal" style="background:transparent;border:1px solid ${n.emeraldBorder};color:${n.emeraldBright};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${u.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">Make primary</button>`:""}
        </div>
      </div>
    `}).join(""),e.querySelectorAll(".ws-prop-addperson").forEach(a=>{a.addEventListener("click",()=>{su(o,a.dataset.prop||"",a.dataset.addr||"this property",()=>zr(o,r))})}),e.querySelectorAll(".ws-prop-makeprimary").forEach(a=>{a.addEventListener("click",()=>{Ca({tenantId:o,acqOppId:a.dataset.opp||void 0,propertyRecordId:a.dataset.prop||void 0,addrLabel:a.dataset.addr||void 0,fixedNewPrimary:{contactId:r,name:"this contact"},onSuccess:()=>zr(o,r)})})}),e.querySelectorAll(".ws-prop-open").forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.prop||"";s&&window.open(Ub(o,s),"_blank","noopener")}),a.addEventListener("mouseenter",()=>{a.style.color=n.emeraldBright}),a.addEventListener("mouseleave",()=>{a.style.color=n.bone})})},_l=()=>{document.getElementById(dl)?.remove();let e=document.createElement("div");e.id=dl,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let t=document.createElement("div");return t.style.cssText=`width:min(440px,92vw);background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`,e.appendChild(t),document.body.appendChild(e),e.addEventListener("click",o=>{o.target===e&&e.remove()}),{overlay:e,card:t}},au=(e,t,o)=>{let{overlay:r,card:a}=_l();a.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add Property</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Creates the property linked to this seller and its own ACQ deal.</div>
    <label style="${He}">Street address</label>
    <input id="wp-address" type="text" style="${Be}" placeholder="123 Main St" />
    <div style="display:flex;gap:10px;">
      <div style="flex:2;"><label style="${He}">City</label><input id="wp-city" type="text" style="${Be}" /></div>
      <div style="flex:1;"><label style="${He}">State</label><input id="wp-state" type="text" maxlength="2" style="${Be}" placeholder="NC" /></div>
      <div style="flex:1;"><label style="${He}">Zip</label><input id="wp-zip" type="text" maxlength="10" style="${Be}" /></div>
    </div>
    <label style="${He}">Property type (optional)</label>
    <select id="wp-type" style="${Be}">
      <option value="">\u2014 select \u2014</option>
      ${jb.map(i=>`<option value="${de(i)}">${de(i)}</option>`).join("")}
    </select>
    <div id="wp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wp-cancel" type="button" style="${hl}">Cancel</button>
      <button id="wp-save" type="button" style="${Oa}">Create property + deal</button>
    </div>
  `;let s=a.querySelector("#wp-err");a.querySelector("#wp-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#wp-save")?.addEventListener("click",async()=>{let i=h=>(a.querySelector(h)?.value||"").trim(),d=i("#wp-address"),l=i("#wp-city"),c=i("#wp-state"),p=i("#wp-zip"),b=(a.querySelector("#wp-type")?.value||"").trim();if(!d&&!l&&!p){s&&(s.textContent="Enter at least a street address.");return}let _=a.querySelector("#wp-save");_&&(_.disabled=!0,_.textContent="Creating\u2026"),s&&(s.textContent="");try{let h=await Fr(zb,{tenant_id:e,contact_id:t,address:d,city:l,state:c,zip:p,property_type:b||void 0});if(!h.ok){s&&(s.textContent=h.error||"Failed to create property."),_&&(_.disabled=!1,_.textContent="Create property + deal");return}r.remove(),Aa("Property + deal created \u2713"),o()}catch(h){s&&(s.textContent=`Network error: ${h.message}`),_&&(_.disabled=!1,_.textContent="Create property + deal")}}),setTimeout(()=>a.querySelector("#wp-address")?.focus(),0)},su=(e,t,o,r)=>{let{overlay:a,card:s}=_l();s.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add person</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Attach a person to ${de(o)}.</div>
    <label style="${He}">Role</label>
    <select id="wpp-role" style="${Be}">
      <option value="seller_2">Second seller</option>
      <option value="tenant_contact">Tenant</option>
    </select>
    <div style="display:flex;gap:10px;">
      <div style="flex:1;"><label style="${He}">First name</label><input id="wpp-first" type="text" style="${Be}" /></div>
      <div style="flex:1;"><label style="${He}">Last name</label><input id="wpp-last" type="text" style="${Be}" /></div>
    </div>
    <label style="${He}">Phone (optional)</label>
    <input id="wpp-phone" type="text" style="${Be}" placeholder="+1..." />
    <label style="${He}">Email (optional)</label>
    <input id="wpp-email" type="text" style="${Be}" />
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
      <button id="wpp-cancel" type="button" style="${hl}">Cancel</button>
      <button id="wpp-save" type="button" style="${Oa}">Add person</button>
    </div>
  `;let i=s.querySelector("#wpp-err");s.querySelector("#wpp-cancel")?.addEventListener("click",()=>a.remove());let d=s.querySelector("#wpp-role"),l=s.querySelector("#wpp-primary-block"),c=s.querySelector("#wpp-makeprimary"),p=s.querySelector("#wpp-stop-row"),b=()=>{let _=(d?.value||"seller_2")==="seller_2";l&&(l.style.display=_?"":"none"),!_&&c&&(c.checked=!1),p&&(p.style.display=c?.checked?"flex":"none")};d?.addEventListener("change",b),c?.addEventListener("change",b),b(),s.querySelector("#wpp-save")?.addEventListener("click",async()=>{let _=s.querySelector("#wpp-role")?.value||"seller_2",h=$=>(s.querySelector($)?.value||"").trim(),g=h("#wpp-first"),k=h("#wpp-last"),f=h("#wpp-phone"),E=h("#wpp-email"),v=_==="seller_2"&&(c?.checked??!1);if(!g&&!k){i&&(i.textContent="Enter at least a first or last name.");return}if(v&&!g){i&&(i.textContent="First name is required to make them the primary.");return}if(v&&!f&&!E){i&&(i.textContent="A phone or email is required to make them the primary.");return}let x=s.querySelector("#wpp-save");x&&(x.disabled=!0,x.textContent=v?"Handing off\u2026":"Adding\u2026"),i&&(i.textContent="");try{if(v){let C=await Fr(qb,{tenant_id:e,property_record_id:t,new_primary:{first_name:g,last_name:k,phone:f||void 0,email:E||void 0},old_disposition:"seller_2",stop_old_outreach:s.querySelector("#wpp-stopold")?.checked??!0,triggered_by_user_id:P()||""});if(!C.ok){i&&(i.textContent=C.error||"Failed to change the primary."),x&&(x.disabled=!1,x.textContent="Add person");return}a.remove();let w=Array.isArray(C.warnings)&&C.warnings.length?` \u2014 ${C.warnings[0]}`:"";Aa(`Now the primary contact \u2713${w}`),r();return}let $=await Fr(Nb,{tenant_id:e,property_record_id:t,role:_,new_contact:{firstName:g,lastName:k,phone:f||void 0,email:E||void 0}});if(!$.ok){i&&(i.textContent=$.error||"Failed to add person."),x&&(x.disabled=!1,x.textContent="Add person");return}a.remove(),Aa("Person added \u2713"),r()}catch($){i&&(i.textContent=`Network error: ${$.message}`),x&&(x.disabled=!1,x.textContent="Add person")}}),setTimeout(()=>s.querySelector("#wpp-first")?.focus(),0)},Nr=!1,ve=null,Sa=!1,Io=null,iu=(e,t,o)=>{let r=t.getBoundingClientRect(),a=null;try{a=o?o.getBoundingClientRect():null}catch{a=null}let s=!!(a&&a.height>40&&a.width>=280&&a.width<=520&&a.left>=r.left-560),i=s&&a?Math.round(a.width):400,d=Math.round(s&&a?a.top:r.top),l=Math.round(s&&a?a.height:r.height),c=6;e.style.top=`${d}px`,e.style.height=`${l}px`,e.style.width=`${i}px`,e.style.left=`${Math.round(r.left-i-c)}px`,e.style.right="auto",e.style.bottom="auto"},lu=()=>{try{let e=new URL(window.location.href);e.searchParams.get("view")!=="activities"&&(e.searchParams.set("view","activities"),history.replaceState(history.state,"",e.toString()))}catch{}},Ma=(e,t)=>{Nr=t,t?(e.iconBtn.className=eu,e.iconBtn.dataset.active="true",lu(),iu(e.panel,e.nav,e.panelArea),e.panel.style.display="flex",zr(e.tenantId,e.contactId)):(e.iconBtn.className=ul,delete e.iconBtn.dataset.active,e.panel.style.display="none")},du=()=>{let e=document.createElement("button");return e.id=pl,e.type="button",e.title="Properties",e.setAttribute("aria-label","Properties"),e.className=ul,e.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;line-height:0;pointer-events:none;">${Jb.replace("<svg ",'<svg style="pointer-events:none;" ')}</span>`,e.addEventListener("click",t=>{t.stopPropagation(),ve&&Ma(ve,!Nr)}),e},cl=()=>{document.getElementById(pl)?.remove(),document.getElementById(Ia)?.remove(),Io&&ve&&ve.nav.removeEventListener("click",Io,!0),Io=null,ve=null,Nr=!1},yl=()=>{cu()},cu=async()=>{if(!Sa){Sa=!0;try{let e=z();if(!e||!e.locationId){cl();return}let t=document.getElementById(Ia);if(t&&t.dataset.contactId===e.contactId&&ve)return;cl();let o=null;try{o=await Pe(e.contactId,e.locationId)}catch(p){m.warn("[properties] Contact Type fetch failed",p);return}if(Oe(o)!=="seller")return;let[a,s]=await Promise.all([tu(),ou()]);if(!a||!s){m.warn("[properties] right-rail nav or panel area not found");return}let i=z();if(!i||i.contactId!==e.contactId)return;let d=ru(e.locationId,e.contactId),l=du();ve={contactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:l,panel:d},(a.querySelector(".flex.flex-col.items-center.gap-2")||a).appendChild(l),document.body.appendChild(d),d.querySelector("#ws-prop-close")?.addEventListener("click",()=>{ve&&Ma(ve,!1)}),Io=p=>{let b=p.target;!b||ve&&ve.iconBtn.contains(b)||b.closest("button.sidebar-option-button")&&Nr&&ve&&Ma(ve,!1)},a.addEventListener("click",Io,!0),m.info(`[properties] right-rail mount complete for seller ${e.contactId}`)}finally{Sa=!1}}};var vl="ws-non-seller-contact",gl=()=>{pu()},pu=async()=>{let e=z();if(!e||!e.contactId||!e.locationId){document.documentElement.classList.remove(vl);return}let t="seller";try{t=Oe(await Pe(e.contactId,e.locationId))}catch(o){m.warn("[seller-flag] contact-type resolve failed",o)}document.documentElement.classList.toggle(vl,t!=="seller")};var Qe="ws-crm-claim-release-pill",mu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",bu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",uu=async e=>{let t=await fetch(mu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Get returned ${t.status} ${t.statusText}`);return await t.json()},hu=async e=>{let t=await fetch(bu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId,action:e.action}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Set returned ${t.status} ${t.statusText}`);return await t.json()},wl=e=>{let t=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},Dt=(e,t)=>{let o=t==="claim"?"emerald":"amber",r=t==="claim"?n.emerald:n.amber;e.dataset.mode=t,e.style.cssText=Ni(o),e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `},_u=({contactId:e,mode:t})=>{let o=document.createElement("button");return o.id=Qe,o.type="button",o.dataset.contactId=e,Dt(o,t),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=z();if(!a||!a.locationId||a.contactId!==e)return;let s=P();if(!s){m.warn("Claim/Release click: no user ID detected (login session not exposing it)");let d=o.querySelector(".ws-cr-label");d&&(d.textContent="Sign-in needed"),setTimeout(()=>Dt(o,r),2500);return}m.info(`Claim/Release click \u2014 contact=${e} mode=${r} user=${s}`);let i=r==="claim"?"release":"claim";Dt(o,i),o.disabled=!0,o.style.opacity="0.8";try{let d=await hu({contactId:e,locationId:a.locationId,userId:s,action:r}),l=d?.mode==="claim"||d?.mode==="release"?d.mode:i;Dt(o,l),m.info(`Claim/Release done \u2192 new mode: ${l}`)}catch(d){m.error("Claim/Release Set webhook failed",d),Dt(o,r);let l=o.querySelector(".ws-cr-label");if(l){let c=l.textContent??"";l.textContent="Try again",setTimeout(()=>{l.textContent==="Try again"&&(l.textContent=c)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},fl=async e=>{try{let t=await uu({contactId:e.contactId,locationId:e.locationId,userId:P()}),o=document.getElementById(Qe);if(!o||o.dataset.contactId!==e.contactId)return;let r=t?.mode==="release"?"release":"claim";Dt(o,r)}catch(t){m.warn("Claim/Release Get failed; pill stays in default 'claim' mode",t)}},yu=async(e,t=1e4)=>{let o=Date.now();for(;Date.now()-o<t;){let r=wl(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},xl=(e,t)=>{let o=_u({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${Qe}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),e.appendChild(r)},Rt=null,vu=async()=>{let e=z();if(!e){Rt?.disconnect(),Rt=null,document.getElementById(Qe)?.remove();return}let t=document.getElementById(Qe);if(!(t&&t.dataset.contactId===e.contactId)){t&&t.remove();try{let o=await I("#record-details-lhs",{timeoutMs:1e4}),r=await yu(o),a=z();if(!a||a.contactId!==e.contactId)return;if(!r){m.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}xl(r,e.contactId),m.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`),document.getElementById(Qe)&&e.locationId&&fl({contactId:e.contactId,locationId:e.locationId}),Rt?.disconnect(),Rt=new MutationObserver(async()=>{if(!(z()?.contactId===e.contactId)){Rt?.disconnect();return}if(document.getElementById(Qe))return;let d=wl(o);d&&(xl(d,e.contactId),document.getElementById(Qe)&&e.locationId&&fl({contactId:e.contactId,locationId:e.locationId}),m.debug("Re-mounted Claim/Release pill after React wipe"))}),Rt.observe(o,{childList:!0,subtree:!0})}catch(o){m.warn("Could not mount Claim/Release pill:",o)}}},kl=()=>{vu()};var Al="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",gu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set",fu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",xu=async({contactId:e,locationId:t,status:o,userId:r,deadReason:a,webhookUrl:s,kind:i})=>{let d=s||Al,l;if(i==="buyer"){let p=Pl.find(_=>_.label===o),b=p?p.value:o.toLowerCase().replace(/\s+/g,"-");l={tenant_id:t,contact_id:e,new_status:b,triggered_by_user_id:r??""}}else{let p={call_status:o,triggered_by_user_id:r??""};a&&(p.dead_reason=a),l={contact_id:e,location:{id:t},customData:p}}let c=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l),credentials:"omit"});if(!c.ok)throw new Error(`Webhook returned ${c.status} ${c.statusText}`)},wu=async({contactId:e,tenantId:t})=>{let o=await fetch(fu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:e}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()},Ft="ws-crm-contact-actions-bar",Ml="ws-crm-call-status-dropdown",Il="ws-crm-call-status-menu",jr="ws-crm-offer-made-modal",El=!1,ku=()=>{El||(El=!0,document.addEventListener("click",e=>{let t=document.getElementById(Il);if(!t||t.style.display==="none")return;let o=document.getElementById(Ml);o&&!o.contains(e.target)&&(t.style.display="none")}))},Eu=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"no-show",label:"No Show",color:"orange"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],Pl=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"vm-left",label:"VM Left",color:"purple"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"wrong-market",label:"Wrong Market",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],$u=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],Tu=async()=>{for(let e of $u)try{let t=await I(e,{timeoutMs:2e3});if(t)return m.debug(`[actions-bar] mount target found via selector: ${e}`),t}catch{}try{let e=await I("#contact-conversation-panel",{timeoutMs:2e3});if(e.parentElement)return m.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),e.parentElement}catch{}for(let e of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let t=await I(e,{timeoutMs:1500});if(t)return m.debug(`[actions-bar] mount target via fallback: ${e}`),t.parentElement??t}catch{}return m.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},Cu=({contactId:e,kind:t})=>{let o=t==="buyer"?Pl:Eu,r=t==="buyer"?gu:Al,a=t==="buyer"?"Buyer Call Status":"Seller Call Status",s=document.createElement("div");s.id=Ml,s.style.cssText="position: relative; flex-shrink: 0; order: 1;";let i=document.createElement("button");i.type="button",i.style.cssText=H,i.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let d=document.createElement("div");return d.id=Il,d.style.cssText=`
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
  `,o.forEach(l=>{let c=document.createElement("button");c.type="button",c.style.cssText=`
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
        background: ${sa[l.color]};
        flex-shrink: 0;
      "></span>
      <span>${l.label}</span>
    `,c.addEventListener("mouseenter",()=>{c.style.background=n.slate}),c.addEventListener("mouseleave",()=>{c.style.background="transparent"}),c.addEventListener("click",async()=>{m.info(`Call Status set to "${l.label}" (${l.value}, ${l.color}) for contact ${e}`);let p=i.firstElementChild,b=i.children[1],_=i.children[2];p&&(p.style.background=sa[l.color]),b&&(b.textContent=l.label),d.style.display="none";let g=z()?.locationId,k=P();if(!g){m.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),b&&(b.textContent=`${l.label} (no tenant!)`),b&&(b.style.color=n.amber);return}if(t==="seller"&&l.color==="green"&&!k){m.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),b&&(b.textContent=`${l.label} (no user!)`),b&&(b.style.color=n.amber);return}let f=_?.textContent??"\u25BE",E=async v=>{_&&(_.textContent="\u2026"),i.style.opacity="0.75";try{await xu({contactId:e,locationId:g,status:l.label,userId:k,deadReason:v,webhookUrl:r,kind:t}),_&&(_.textContent="\u2713"),setTimeout(()=>{_&&(_.textContent=f),i.style.opacity="1"},900)}catch(x){m.warn("Call Status webhook failed:",x),_&&(_.textContent="\u2717"),b&&(b.style.color=n.amber),i.style.opacity="1",setTimeout(()=>{_&&(_.textContent=f),b&&(b.style.color=n.bone)},1800)}};if(t==="seller"&&l.value==="dead-deal"){let v=b?.textContent??"";Pu(x=>{E(x)},()=>{b&&(b.textContent=v)});return}if(t==="seller"&&l.value==="appointment-booked"){let v=b?.textContent??"";try{(await wu({contactId:e,tenantId:g})).ok?await E():Ou(()=>{E()},()=>{b&&(b.textContent=v)})}catch(x){m.warn("Appointment sanity check failed; firing anyway:",x),await E()}return}await E()}),d.appendChild(c)}),i.addEventListener("click",l=>{l.stopPropagation(),d.style.display=d.style.display==="none"?"block":"none"}),ku(),s.appendChild(i),s.appendChild(d),s},Lu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",Su=async e=>{let t=await fetch(Lu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,kind:e.kind,amount:e.amount,expires_at:e.expiresAt,triggered_by_user_id:e.userId,opp_id:e.oppId??void 0,property_record_id:e.propertyRecordId??void 0,asking_price:e.askingPrice??void 0}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Au="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/list-for-contact",Ha=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Mu=async(e,t)=>{let o=await fetch(Au,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();return(Array.isArray(r.properties)?r.properties:[]).filter(s=>s.has_acq_opp&&s.opp_id).map(s=>({oppId:String(s.opp_id),propertyRecordId:String(s.property_record_id||""),address:String(s.address||"(no address)"),dealStage:s.deal_stage||null,askingPrice:s.asking_price??null}))},Iu=e=>new Promise(t=>{document.getElementById(jr)?.remove();let o=document.createElement("div");o.id=jr,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,d)=>`
      <button type="button" class="ws-deal-pick" data-i="${d}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${u.sans};">
        <div style="font-size:14px;font-weight:500;">${Ha(i.address)}</div>
        ${i.dealStage?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Ha(i.dealStage)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This seller has ${e.length} deals</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is this offer for?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-deal-cancel" type="button" style="${H} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-deal-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-deal-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),Po=(e,t="seller",o)=>{document.getElementById(jr)?.remove();let r=t==="seller",a=r?"Record Your Offer":"Record Buyer's Offer",s=r?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=r?n.emerald:n.amber,d=document.createElement("div");d.id=jr,d.style.cssText=`
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
      " />`:"",_=r&&o&&o.address?`<div style="font-size:12px;color:${n.bone};background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 10px;margin-bottom:16px;">Offer for: <strong>${Ha(o.address)}</strong></div>`:"",h=o&&o.askingPrice!=null&&Number(o.askingPrice)>0?String(Number(o.askingPrice)):"",g=r&&o&&o.propertyRecordId?`
    <label style="display:block;font-family:${u.mono};font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin-bottom:6px;">Seller's Asking Price <span style="text-transform:none;letter-spacing:0;color:${n.ash};">(optional)</span></label>
    <div style="display:flex;align-items:center;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:0 12px;margin-bottom:16px;">
      <span style="color:${n.ash};font-family:${u.mono};font-size:14px;">$</span>
      <input id="ws-offer-asking" type="number" min="0" step="100" placeholder="0" value="${h}" style="flex:1;background:transparent;border:none;outline:none;color:${n.bone};font-family:${u.mono};font-size:14px;padding:10px 8px;" />
    </div>`:"";l.innerHTML=`
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

    ${_}

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
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${ae}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,d.appendChild(l),document.body.appendChild(d);let k=()=>d.remove();d.addEventListener("click",x=>{x.target===d&&k()});let f=l.querySelector("#ws-offer-error"),E=l.querySelector("#ws-offer-cancel"),v=l.querySelector("#ws-offer-submit");E?.addEventListener("click",k),v?.addEventListener("click",async()=>{let x=(l.querySelector("#ws-offer-amount")?.value??"").trim(),$=r?l.querySelector("#ws-offer-expires")?.value??"":"";if(!x||Number(x)<=0){f&&(f.textContent="Enter a positive offer amount."),m.warn("Offer Made submit blocked \u2014 invalid amount");return}let C=Number(x);if(C<100){f&&(f.textContent=`That looks low \u2014 did you mean $${(C*1e3).toLocaleString("en-US")}?`);return}let T=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),L=T?T[1]:null;if(!L){f&&(f.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}f&&(f.textContent=""),v&&(v.disabled=!0,v.textContent="Recording\u2026",v.style.opacity="0.7"),E&&(E.disabled=!0);try{let A=(l.querySelector("#ws-offer-asking")?.value??"").trim(),G=A?Number(A):null,U=await Su({tenantId:L,contactId:e,kind:t,amount:C,expiresAt:$||null,userId:P(),oppId:o?.oppId??null,propertyRecordId:o?.propertyRecordId??null,askingPrice:G&&G>0?G:null});if(!U.ok){f&&(f.textContent=U.error??"Something went wrong."),v&&(v.disabled=!1,v.textContent="Record Offer",v.style.opacity="1"),E&&(E.disabled=!1);return}m.info(`Offer Made (${t}) recorded for contact ${e}: $${C} on ${U.opp_pipeline} opp (stage: ${U.opp_stage_name??"?"})`),k()}catch(A){m.error("Offer Made webhook failed",A),f&&(f.textContent=A instanceof Error?A.message:"Network error \u2014 try again."),v&&(v.disabled=!1,v.textContent="Record Offer",v.style.opacity="1"),E&&(E.disabled=!1)}}),setTimeout(()=>{l.querySelector("#ws-offer-amount")?.focus()},0)},$l="ws-crm-dead-deal-modal",Pu=(e,t)=>{document.getElementById($l)?.remove();let o=document.createElement("div");o.id=$l,o.style.cssText=`
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
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${ae}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),s=()=>{a(),t()};o.addEventListener("click",d=>{d.target===o&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let d=r.querySelector("#ws-dead-reason"),l=r.querySelector("#ws-dead-error"),c=(d?.value??"").trim();if(!c){l&&(l.textContent="Please enter a reason."),d?.focus();return}if(c.length<4){l&&(l.textContent="Please enter at least a few words."),d?.focus();return}a(),e(c)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),i()),d.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},Tl="ws-crm-appointment-sanity-modal",Ou=(e,t)=>{document.getElementById(Tl)?.remove();let o=document.createElement("div");o.id=Tl,o.style.cssText=`
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
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${ae}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>{document.removeEventListener("keydown",i),o.remove()},s=()=>{a(),t()};o.addEventListener("click",d=>{d.target===o&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),e()});let i=d=>{d.key==="Escape"&&s()};document.addEventListener("keydown",i)},Cl=(e,t)=>{let o=document.createElement("div");if(o.id=Ft,o.dataset.contactId=e,o.dataset.contactKind=t,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,t==="seller"||t==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=H,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",async()=>{if(t!=="seller"){Po(e,t);return}let a=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),s=a?a[1]:null;if(!s){Po(e,t);return}let i=r.innerHTML;r.disabled=!0,r.style.opacity="0.7",r.innerHTML="<span>Loading\u2026</span>";let d=()=>{r.innerHTML=i,r.disabled=!1,r.style.opacity="1"},l=[];try{l=await Mu(s,e)}catch(p){m.warn("[offer-made] deal lookup failed, using legacy path",p),d(),Po(e,t);return}if(d(),l.length<=1){Po(e,t,l[0]);return}let c=await Iu(l);c&&Po(e,t,c)}),o.appendChild(r),o.appendChild(Cu({contactId:e,kind:t}))}return o},Ba=!1,Ll=()=>{document.querySelectorAll(`[id="${Ft}"]`).forEach(e=>e.remove())},Ol=async()=>{if(m.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),Ba){m.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}Ba=!0;try{await Bu()}finally{Ba=!1}},Bu=async()=>{let e=z();if(!e){m.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),Ll();return}if(m.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${e.contactId} locationId=${e.locationId??"(null)"} source=${e.source}`),e.source!=="url"){m.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),Ll();return}let t="seller";try{let l=await Pe(e.contactId,e.locationId),c=Oe(l);c==="buyer"?t="buyer":c==="other"&&(t="other"),m.debug(`[actions-bar:03] kind resolved \u2014 kind=${t} (raw type=${l??"(null)"})`)}catch(l){m.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",l)}let o=z();if(!o||o.contactId!==e.contactId){m.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${Ft}"]`));if(r.length===1&&r[0].dataset.contactId===e.contactId&&r[0].dataset.contactKind===t){m.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${e.contactId} kind=${t} \u2014 no-op`);return}r.length>0&&(m.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(l=>l.remove()));let a=await Tu();if(!a){m.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}m.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let s=z();if(!s||s.contactId!==e.contactId){m.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let i;try{i=Cl(e.contactId,t)}catch(l){m.error("[actions-bar:08-FAIL] buildBar threw:",l);return}i.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(i,a.firstChild)}catch(l){m.error("[actions-bar:09-FAIL] insertBefore threw:",l);return}if(!document.getElementById(Ft)){m.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}m.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${e.contactId} kind=${t}`),qr?.disconnect(),qr=new MutationObserver(()=>{if(!(z()?.contactId===e.contactId)){qr?.disconnect();return}let c=document.querySelectorAll(`[id="${Ft}"]`);if(c.length>1){for(let p=1;p<c.length;p++)c[p].remove();m.debug(`[actions-bar:WATCHDOG] trimmed ${c.length-1} duplicate bar(s)`);return}if(c.length===0){let p=document.querySelector(".central-panel")||a,b=Cl(e.contactId,t);b.dataset.mountTarget=i.dataset.mountTarget??"";try{p.insertBefore(b,p.firstChild),m.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${e.contactId}`)}catch(_){m.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",_)}}}),qr.observe(a,{childList:!0})},qr=null,Sl=null,Hu=()=>{Sl===null&&(Sl=window.setInterval(()=>{let e=z();e&&(document.getElementById(Ft)||(m.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",e.contactId),Ol()))},3e3))},Bl=()=>{Hu(),Ol()};var Ur="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Ru=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),Oo="data-ws-crm-favicon",Ra=e=>e.hasAttribute(Oo),Hl=e=>{if(e.tagName!=="LINK")return!1;let t=(e.getAttribute("rel")??"").toLowerCase();return Ru.has(t)},Wr=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{Hl(r)&&!Ra(r)&&r.remove()});let t=document.head.querySelector(`link[${Oo}="1"]`);t?t.href!==Ur&&(t.href=Ur):(t=document.createElement("link"),t.setAttribute(Oo,"1"),t.rel="icon",t.type="image/png",t.href=Ur,document.head.appendChild(t),m.debug("Favicon installed"));let o=document.head.querySelector(`link[${Oo}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(Oo,"apple"),o.rel="apple-touch-icon",o.href=Ur,document.head.appendChild(o))},Rl=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)Wr();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),Wr())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&Hl(i)&&!Ra(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&Ra(i)&&(a=!0)});a&&Wr()}).observe(document.head,{childList:!0,subtree:!1});let t=0,o=window.setInterval(()=>{t+=1,Wr(),t>=5&&window.clearInterval(o)},1e3)};var Du="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",Te="ws-crm-mt-offer-made-button",Dl="ws-crm-mt-offer-made-modal",Fu=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,zu=/\/v2\/location\/([A-Za-z0-9]+)/,Vr=()=>{let e=window.location.pathname,t=e.match(Fu),o=t?t[1]:fe();if(!o)return null;let r=e.match(zu);return{oppId:o,locationId:r?r[1]:null}},Nu=async e=>{let t=await fetch(Du,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,kind:"buyer",amount:e.amount,triggered_by_user_id:e.userId}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Gr=()=>{document.getElementById(Dl)?.remove()},qu=e=>{Gr();let t=document.createElement("div");t.id=Dl,t.style.cssText=`
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
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${ae}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),s=o.querySelector("#ws-mt-offer-cancel"),i=o.querySelector("#ws-mt-offer-submit");setTimeout(()=>r?.focus(),50);let d=l=>{l.key==="Enter"?(l.preventDefault(),i?.click()):l.key==="Escape"&&(l.preventDefault(),s?.click())};o.addEventListener("keydown",d),t.addEventListener("click",l=>{l.target===t&&Gr()}),s?.addEventListener("click",()=>Gr()),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let l=r.value.trim();if(!l||Number(l)<=0){a.textContent="Enter a positive offer amount.",r.focus();return}let c=Number(l);if(c<100){a.textContent=`That looks low \u2014 did you mean $${(c*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Recording\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{let p=await Nu({oppId:e.oppId,locationId:e.locationId,amount:c,userId:P()});if(!p.ok){a.textContent=p.error??"Something went wrong.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1);return}Gr(),e.onSuccess()}catch(p){m.error("MT Offer Made webhook failed",p),a.textContent=p instanceof Error?p.message:"Network error \u2014 try again.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1)}})},ju=e=>{let t=document.createElement("button");return t.id=Te,t.type="button",t.dataset.oppId=e,t.style.cssText=H,t.title="Record this buyer's offer on the property and advance to 'Made an Offer'",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=Vr();!o||!o.locationId||o.oppId!==e||qu({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=t.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),t.style.background=n.emeraldGlow,t.style.color=n.emeraldBright,t.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",t.style.cssText=H)},4e3)}})}),t},Uu=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Wu=async()=>{for(let e of Uu)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Kr=!1,Fa=async()=>{if(!Kr){Kr=!0;try{await Gu()}finally{Kr=!1}}},Gu=async()=>{let e=Vr();if(!e||!e.locationId){document.getElementById(Te)?.remove(),document.getElementById(`${Te}-wrap`)?.remove(),Ho();return}let t=document.getElementById(Te);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Te}-wrap`)?.remove(),Ho());return}t&&(t.remove(),document.getElementById(`${Te}-wrap`)?.remove());let o=await Wu();if(!o){m.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){m.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Vr();if(!a||a.oppId!==e.oppId)return;let s=ju(e.oppId),i=document.createElement("span");i.id=`${Te}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted MT Offer Made button on opp ${e.oppId}`),Ku(e.oppId)},Bo=null,Da=null,zt,Ho=()=>{Bo?.disconnect(),Bo=null,Da=null,zt!==void 0&&(window.clearTimeout(zt),zt=void 0)},Ku=e=>{if(Bo&&Da===e)return;Ho();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Da=e,Bo=new MutationObserver(()=>{zt===void 0&&(zt=window.setTimeout(()=>{zt=void 0;let o=Vr();if(!o||o.oppId!==e){Ho();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Te)?.remove(),document.getElementById(`${Te}-wrap`)?.remove(),Ho();return}document.getElementById(Te)||Fa()},250))}),Bo.observe(t,{childList:!0,subtree:!0}))},Vu=()=>{V("mt-offer-made",Z,()=>{!document.getElementById(Te)&&!Kr&&Fa()})},Fl=()=>{Vu(),Fa()};var Yu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",Ce="ws-crm-not-interested-button",Ju=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Qu=/\/v2\/location\/([A-Za-z0-9]+)/,Jr=()=>{let e=window.location.pathname,t=e.match(Ju),o=t?t[1]:fe();if(!o)return null;let r=e.match(Qu);return{oppId:o,locationId:r?r[1]:null}},Zu=async e=>{let t=await fetch(Yu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Not Interested webhook returned ${t.status} ${t.statusText}`);return await t.json()},Xu=e=>{let t=document.createElement("button");return t.id=Ce,t.type="button",t.dataset.oppId=e,t.style.cssText=H,t.title="Close this Marketing Tracker opp as Not Interested for THIS property only",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",async()=>{let o=Jr();if(!o||!o.locationId||o.oppId!==e)return;let r=P(),a=t.querySelector(".ws-ni-label");t.disabled=!0,t.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let s=await Zu({oppId:o.oppId,locationId:o.locationId,userId:r});if(s?.ok)a&&(a.textContent="Marked Not Interested"),t.style.background=n.crimsonGlow,t.style.color=n.crimson,m.info(`Not Interested set for opp ${e} \u2192 ${s.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(s){m.error("Not Interested webhook failed",s),a&&(a.textContent="Try again"),t.disabled=!1,t.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),t},eh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],th=async()=>{for(let e of eh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Yr=!1,Na=async()=>{if(!Yr){Yr=!0;try{await oh()}finally{Yr=!1}}},oh=async()=>{let e=Jr();if(!e||!e.locationId){document.getElementById(Ce)?.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),Do();return}let t=document.getElementById(Ce);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),Do());return}t&&(t.remove(),document.getElementById(`${Ce}-wrap`)?.remove());let o=await th();if(!o){m.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){m.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Jr();if(!a||a.oppId!==e.oppId)return;let s=Xu(e.oppId),i=document.createElement("span");i.id=`${Ce}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted Not Interested button on opp ${e.oppId}`),rh(e.oppId)},Ro=null,za=null,Do=()=>{Ro?.disconnect(),Ro=null,za=null},rh=e=>{if(Ro&&za===e)return;Do();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(za=e,Ro=new MutationObserver(()=>{let o=Jr();if(!o||o.oppId!==e){Do();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ce)?.remove(),document.getElementById(`${Ce}-wrap`)?.remove(),Do();return}document.getElementById(Ce)||Na()}),Ro.observe(t,{childList:!0,subtree:!0}))},nh=()=>{V("not-interested",Z,()=>{!document.getElementById(Ce)&&!Yr&&Na()})},zl=()=>{nh(),Na()};var ah="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",xe="ws-crm-schedule-walkthrough-button",qa="ws-crm-schedule-walkthrough-modal",sh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,ih=/\/v2\/location\/([A-Za-z0-9]+)/,Xr=()=>{let e=window.location.pathname,t=e.match(sh),o=t?t[1]:fe();if(!o)return null;let r=e.match(ih);return{oppId:o,locationId:r?r[1]:null}},Qr=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},lh=(e,t)=>{document.getElementById(qa)?.remove();let o=document.createElement("div");o.id=qa,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${qa} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
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
      <button id="wsw-submit" type="button" style="${ae}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",l=>{l.target===o&&i()}),document.getElementById("wsw-cancel")?.addEventListener("click",i);let d=document.getElementById("wsw-submit");d?.addEventListener("click",async()=>{let l=document.getElementById("wsw-dt")?.value||"",c=document.getElementById("wsw-dur")?.value||"30";if(!l){Qr("Pick a date and time.","err");return}let p=new Date(l).toISOString();d.disabled=!0,d.textContent="Scheduling\u2026";try{if((await fetch(ah,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,start_time:p,duration_min:Number(c)}),credentials:"omit"})).ok){i(),Qr("Walkthrough scheduled \u2713");let _=document.querySelector(`#${xe} .ws-sw-label`);_&&(_.textContent="Walkthrough Scheduled")}else d.disabled=!1,d.textContent="Schedule",Qr("Scheduling failed \u2014 try again.","err")}catch(b){m.warn("[schedule-walkthrough] failed:",b),d.disabled=!1,d.textContent="Schedule",Qr("Couldn't reach the scheduler. Try again.","err")}})},dh=e=>{let t=document.createElement("button");return t.id=xe,t.type="button",t.dataset.oppId=e,t.style.cssText=H,t.title="Schedule this buyer's property walkthrough",t.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=Xr();!o||!o.locationId||o.oppId!==e||lh(o.oppId,o.locationId)}),t},ch=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],ph=async()=>{for(let e of ch)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Zr=!1,Ua=async()=>{if(!Zr){Zr=!0;try{await mh()}finally{Zr=!1}}},mh=async()=>{let e=Xr();if(!e||!e.locationId){document.getElementById(xe)?.remove(),document.getElementById(`${xe}-wrap`)?.remove(),zo();return}let t=document.getElementById(xe);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${xe}-wrap`)?.remove(),zo());return}t&&(t.remove(),document.getElementById(`${xe}-wrap`)?.remove());let o=await ph();if(!o){m.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){m.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=Xr();if(!a||a.oppId!==e.oppId)return;let s=dh(e.oppId),i=document.createElement("span");i.id=`${xe}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted Schedule Walkthrough button on opp ${e.oppId}`),bh(e.oppId)},Fo=null,ja=null,Nt,zo=()=>{Fo?.disconnect(),Fo=null,ja=null,Nt!==void 0&&(window.clearTimeout(Nt),Nt=void 0)},bh=e=>{if(Fo&&ja===e)return;zo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ja=e,Fo=new MutationObserver(()=>{Nt===void 0&&(Nt=window.setTimeout(()=>{Nt=void 0;let o=Xr();if(!o||o.oppId!==e){zo();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(xe)?.remove(),document.getElementById(`${xe}-wrap`)?.remove(),zo();return}document.getElementById(xe)||Ua()},250))}),Fo.observe(t,{childList:!0,subtree:!0}))},uh=()=>{V("schedule-walkthrough",Z,()=>{!document.getElementById(xe)&&!Zr&&Ua()})},Nl=()=>{uh(),Ua()};var hh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",qt="ws-crm-resend-deal-link-wrap",_h=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,yh=/\/v2\/location\/([A-Za-z0-9]+)/,tn=()=>{let e=window.location.pathname,t=e.match(_h),o=t?t[1]:fe();if(!o)return null;let r=e.match(yh);return{oppId:o,locationId:r?r[1]:null}},vh=async e=>{let t=await fetch(hh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,channel:e.channel,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Resend webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},gh=e=>e.replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t]||t),ql=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Ga=(e,t)=>{e.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=H,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${ql(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>fh(e,t)),e.appendChild(o)},fh=(e,t)=>{e.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,s=(d,l)=>{let c=document.createElement("button");return c.type="button",c.textContent=d,c.style.cssText=a,c.addEventListener("click",()=>void xh(e,t,l,o)),c};o.appendChild(s("Text","sms")),o.appendChild(s("Email","email"));let i=document.createElement("button");i.type="button",i.textContent="\u2715",i.title="Cancel",i.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,i.addEventListener("click",()=>Ga(e,t)),o.appendChild(i),e.appendChild(o)},xh=async(e,t,o,r)=>{let a=tn();if(!(!a||!a.locationId||a.oppId!==t)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let s=await vh({oppId:a.oppId,locationId:a.locationId,channel:o,userId:P()});if(s?.ok)r.innerHTML=`${ql(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,m.info(`Resend deal link (${o}) for opp ${t}`);else throw new Error(s?.error||"Send failed")}catch(s){let i=s instanceof Error?s.message:"Send failed";m.error("Resend deal link failed",s),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${gh(i)}</span>`}window.setTimeout(()=>Ga(e,t),3500)}},wh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],kh=async()=>{for(let e of wh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},en=!1,Ka=async()=>{if(!en){en=!0;try{await Eh()}finally{en=!1}}},Eh=async()=>{let e=tn();if(!e||!e.locationId){document.getElementById(qt)?.remove(),qo();return}let t=document.getElementById(qt);if(t&&t.dataset.oppId===e.oppId){let i=N();i!==null&&i!=="Marketing Tracker"&&(t.remove(),qo());return}t&&t.remove();let o=await kh();if(!o)return;let r=await X();if(r!=="Marketing Tracker"){m.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=tn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=qt,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",Y(o).appendChild(s),Ga(s,e.oppId),m.debug(`Mounted Resend Deal Link button on opp ${e.oppId}`),$h(e.oppId)},No=null,Wa=null,qo=()=>{No?.disconnect(),No=null,Wa=null},$h=e=>{if(No&&Wa===e)return;qo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Wa=e,No=new MutationObserver(()=>{let o=tn();if(!o||o.oppId!==e){qo();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(qt)?.remove(),qo();return}document.getElementById(qt)||Ka()}),No.observe(t,{childList:!0,subtree:!0}))},Th=()=>{V("resend-deal-link",Z,()=>{!document.getElementById(qt)&&!en&&Ka()})},jl=()=>{Th(),Ka()};var Ch="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/referred",Lh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/mt-opps",Wt="ws-crm-add-referral-wrap",on="ws-crm-add-referral-contact-btn",Ya="ws-crm-contact-actions-bar",we="ws-referral-modal",Sh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Ah=/\/v2\/location\/([A-Za-z0-9]+)/,Ne=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Gl=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Mh=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;opacity:0;pointer-events:none;",document.body.appendChild(t),t.select();let o=document.execCommand("copy");return t.remove(),o}catch{return!1}},Ih=e=>{let t=e.trim();if(!t)return{ok:!0,value:""};let o=t.replace(/\D/g,"");return o.length===11&&o.startsWith("1")&&(o=o.slice(1)),o.length!==10?{ok:!1,value:""}:{ok:!0,value:`+1${o}`}},yt=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;`,jt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,Za=e=>{document.getElementById(we)?.remove();let t=document.createElement("div");t.id=we,t.style.cssText=`
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
  `;let r=e.propertyLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Ne(e.propertyLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>';o.innerHTML=`
    <style id="ws-referral-modal-style">
      #${we} input::placeholder,
      #${we} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      #${we} input:-webkit-autofill,
      #${we} input:-webkit-autofill:hover,
      #${we} input:-webkit-autofill:focus,
      #${we} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${y.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
      #${we} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Add Referral Buyer</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Creates the buyer, links them to this property's Marketing Tracker, and gets their personalized deal link. Re-adding the same person just returns their existing link.</div>
    ${r}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${jt("First Name *")}
        <input id="ws-ref-first" type="text" autocomplete="off" placeholder="Jane" style="${yt}">
      </div>
      <div>
        ${jt("Last Name")}
        <input id="ws-ref-last" type="text" autocomplete="off" placeholder="Doe" style="${yt}">
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${jt("Phone")}
        <input id="ws-ref-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${yt}">
      </div>
      <div>
        ${jt("Email")}
        <input id="ws-ref-email" type="email" autocomplete="off" placeholder="jane@company.com" style="${yt}">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      ${jt("Buyer Status")}
      <select id="ws-ref-status" style="${yt} cursor: pointer;">
        <option value="Unqualified" selected>Unqualified (partial address on deal page)</option>
        <option value="Qualified">Qualified (full address on deal page)</option>
      </select>
    </div>

    <div style="margin-bottom: 14px;">
      ${jt("Note (optional)")}
      <textarea id="ws-ref-note" rows="2" autocomplete="off" placeholder="e.g. Husband makes the buying decisions \u2014 wife is on the deed" style="${yt} resize: vertical;"></textarea>
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
  `,t.appendChild(o),document.body.appendChild(t),Mt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-ref-cancel")?.addEventListener("click",()=>t.remove());let a=o.querySelector("#ws-ref-first"),s=o.querySelector("#ws-ref-phone"),i=o.querySelector("#ws-ref-email"),d=o.querySelector("#ws-ref-send-label");window.setTimeout(()=>a?.focus(),0);let l=()=>{if(!d)return;let c=!!s?.value.trim(),p=!!i?.value.trim();d.textContent=!c&&p?"Email them the link now":"Text them the link now"};s?.addEventListener("input",l),i?.addEventListener("input",l),o.querySelector("#ws-ref-submit")?.addEventListener("click",async()=>{let c=o.querySelector("#ws-ref-err"),p=w=>{c&&(c.textContent=w)};p("");let b=(a?.value||"").trim(),_=(o.querySelector("#ws-ref-last")?.value||"").trim(),h=(s?.value||"").trim(),g=(i?.value||"").trim().toLowerCase(),k=o.querySelector("#ws-ref-status")?.value||"Unqualified",f=(o.querySelector("#ws-ref-note")?.value||"").trim(),E=o.querySelector("#ws-ref-send")?.checked??!0,v=o.querySelector("#ws-ref-close")?.checked??!1;if(!b){p("First name is required.");return}let x=Ih(h);if(!x.ok){p("Phone must be a 10-digit US number.");return}if(g&&!/.+@.+\..+/.test(g)){p("That email doesn't look valid.");return}if(!x.value&&!g){p("Add a phone or an email for the new buyer.");return}let $=o.querySelector("#ws-ref-submit");$&&($.disabled=!0,$.textContent="Adding\u2026",$.style.opacity="0.7");let C=()=>{$&&($.disabled=!1,$.textContent="Add Buyer",$.style.opacity="1")};try{let w=await fetch(Ch,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,referring_mt_opp_id:e.referringOppId,referred:{first_name:b,last_name:_,phone:x.value,email:g,buyer_status:k,note:f},send_link:E,close_original:v,triggered_by_user_id:P()||""}),credentials:"omit"});if(!w.ok)throw new Error(`Webhook returned ${w.status} ${w.statusText}`);let T=await w.json(),L=Array.isArray(T)?T[0]:T;if(!L?.ok){p(L?.error||"Something went wrong \u2014 try again."),C();return}m.info(`Referral buyer added (opp ${L.mt_opp_id||"?"})`),Ph(o,L,e,`${b} ${_}`.trim())}catch(w){m.error("Add referral buyer failed",w),p(`Network error: ${w instanceof Error?w.message:"request failed"}`),C()}})},Ut=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;gap:6px;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Ph=(e,t,o,r)=>{let a=[];t.contact_created===!1&&a.push(Ut("Existing buyer \u2014 profile reused","info")),t.mt_opp_deduped?a.push(Ut(`Existing deal reused${t.mt_opp_stage?` \u2014 ${Ne(t.mt_opp_stage)}`:""}`,"info")):t.mt_opp_created&&a.push(Ut(`Deal created${t.mt_opp_stage?` \u2014 ${Ne(t.mt_opp_stage)}`:""}`,"good")),t.sent?a.push(Ut(t.sent_channel==="email"?"Email sent \u2713":"Text sent \u2713","good")):t.send_error&&a.push(Ut(`Not sent \u2014 ${Ne(t.send_error)}`,"warn")),t.original_closed&&a.push(Ut("Original buyer's deal closed (Lost - Withdrew)","info"));let s=(t.warnings||[]).map(l=>`<div style="font-size:11px;color:${n.ash};margin-top:4px;">\xB7 ${Ne(l)}</div>`).join(""),i=t.link?`
      <div style="margin: 16px 0 4px;">
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Their personalized deal link</div>
        <span style="display:flex;gap:8px;align-items:center;">
          <input id="ws-ref-link" type="text" readonly value="${Ne(t.link)}" style="${yt} flex:1; font-family:${u.mono}; font-size:12px;">
          <button id="ws-ref-copy" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 16px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600; flex-shrink:0;">Copy</button>
        </span>
      </div>`:`<div style="margin: 16px 0 4px; color:${n.amber}; font-size:13px;">No deal link available \u2014 check the property's landing page setup.</div>`;e.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Referral Added</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Ne(r||"Buyer")} is set up</div>
    <div style="line-height: 1;">${a.join("")}</div>
    ${s}
    ${i}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      <button id="ws-ref-another" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${u.sans}; font-size: 13px;">Add Another</button>
      <button id="ws-ref-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${u.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-ref-done")?.addEventListener("click",()=>{document.getElementById(we)?.remove()}),e.querySelector("#ws-ref-another")?.addEventListener("click",()=>{Za(o)});let d=e.querySelector("#ws-ref-copy");d?.addEventListener("click",async()=>{let l=await Mh(t.link||"");d.textContent=l?"Copied \u2713":"Copy failed",window.setTimeout(()=>{d.textContent="Copy"},2e3)})},Oh=e=>new Promise(t=>{document.getElementById(we)?.remove();let o=document.createElement("div");o.id=we,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,d)=>`
      <button type="button" class="ws-ref-pick" data-i="${d}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${u.sans};">
        <div style="font-size:14px;font-weight:500;">${Ne(i.property_address||"(no address)")}</div>
        ${i.stage_name?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Ne(i.stage_name)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This buyer is on ${e.length} properties</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is the referral about?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-ref-pick-cancel" type="button" style="${H} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-ref-pick-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-ref-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),rn=()=>{let e=window.location.pathname,t=e.match(Sh),o=t?t[1]:fe();if(!o)return null;let r=e.match(Ah);return{oppId:o,locationId:r?r[1]:null}},Bh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Hh=async()=>{for(let e of Bh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},nn=!1,Ja=async()=>{if(!nn){nn=!0;try{await Rh()}finally{nn=!1}}},Rh=async()=>{let e=rn();if(!e||!e.locationId){document.getElementById(Wt)?.remove(),Uo();return}let t=document.getElementById(Wt);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Marketing Tracker"&&(t.remove(),Uo());return}t&&t.remove();let o=await Hh();if(!o)return;let r=await X();if(r!=="Marketing Tracker"){m.debug(`[add-referral] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=rn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=Wt,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:3;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=H,i.title="The buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal for this property and gets their personalized link",i.innerHTML=`${Gl(n.amber)}<span>Add Referral Buyer</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let d=rn();!d||!d.locationId||Za({tenantId:d.locationId,referringOppId:d.oppId})}),s.appendChild(i),Y(o).appendChild(s),m.debug(`Mounted Add Referral Buyer button on opp ${e.oppId}`),Dh(e.oppId)},jo=null,Qa=null,Uo=()=>{jo?.disconnect(),jo=null,Qa=null},Dh=e=>{if(jo&&Qa===e)return;Uo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Qa=e,jo=new MutationObserver(()=>{let o=rn();if(!o||o.oppId!==e){Uo();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Wt)?.remove(),Uo();return}document.getElementById(Wt)||Ja()}),jo.observe(t,{childList:!0,subtree:!0}))},Ul=(e,t)=>{let o=e.querySelector("span");if(!o)return;let r=e.style.color;o.textContent=t.length>72?`${t.slice(0,69)}\u2026`:t,e.style.color=n.crimson,window.setTimeout(()=>{o.textContent="Add Referral Buyer",e.style.color=r},4500)},Fh=async e=>{let t=z();if(!t||!t.locationId)return;let o=e.querySelector("span");o&&(o.textContent="Loading deals\u2026"),e.disabled=!0;try{let r=await fetch(`${Lh}?tenant_id=${encodeURIComponent(t.locationId)}&contact_id=${encodeURIComponent(t.contactId)}`,{credentials:"omit"}),a=await r.json(),s=Array.isArray(a)?a[0]:a;if(!s?.ok)throw new Error(s?.error||`Lookup failed (${r.status})`);let i=s.opps||[];if(o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,!i.length){Ul(e,"No open Marketing Tracker deals for this buyer");return}let d=i.length===1?i[0]:await Oh(i);if(!d)return;Za({tenantId:t.locationId,referringOppId:d.mt_opp_id,propertyLabel:d.property_address})}catch(r){m.error("Add referral buyer lookup failed",r),o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,Ul(e,r instanceof Error?r.message:"Lookup failed")}},Va=!1,Kl=async()=>{if(!Va){Va=!0;try{await zh()}finally{Va=!1}}},zh=async()=>{if(!z())return;let t=document.getElementById(Ya);if(!t)try{t=await I(`#${Ya}`,{timeoutMs:dt+2e3})}catch{t=null}if(!t)return;if(t.dataset.contactKind!=="buyer"){document.getElementById(on)?.remove();return}let o=z();if(!o||!o.locationId)return;let r=document.getElementById(on);if(r&&r.dataset.contactId===o.contactId&&r.parentElement===t)return;r?.remove();let a=document.createElement("button");a.type="button",a.id=on,a.dataset.contactId=o.contactId,a.style.cssText=H,a.style.order="6",a.title="This buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal and gets their personalized link",a.innerHTML=`${Gl(n.amber)}<span>Add Referral Buyer</span>`,a.addEventListener("click",()=>void Fh(a)),t.appendChild(a),m.debug(`Mounted Add Referral Buyer on buyer contact ${o.contactId}`)},Wl=!1,Nh=()=>{Wl||(Wl=!0,window.setInterval(()=>{let e=document.getElementById(Ya);!e||e.dataset.contactKind!=="buyer"||document.getElementById(on)||Kl()},3e3))},Vl=()=>{V("add-referral-buyer",Z,()=>{!document.getElementById(Wt)&&!nn&&Ja()}),Ja(),Kl(),Nh()};var qh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",jh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",Le="ws-crm-reduce-price-button",Yl="ws-crm-reduce-price-modal",Uh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Wh=/\/v2\/location\/([A-Za-z0-9]+)/,ln=()=>{let e=window.location.pathname,t=e.match(Uh);if(!t)return null;let o=e.match(Wh);return{oppId:t[1],locationId:o?o[1]:null}},Gh=async e=>{let t=await fetch(qh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,dispo_opp_id:e.oppId,new_price:e.newPrice,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Reduce Price webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},Kh=async(e,t)=>{try{let o=new URL(jh);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.total_will_text=="number"?a.total_will_text:null}catch(o){return m.warn("[reduce-price] buyer-count fetch failed:",o),null}},Vh=(e,t)=>{let o=t!==null?`${t} buyer${t===1?"":"s"}`:"all eligible buyers";return`Confirm that you wish to reduce the price of this property to $${Math.round(e).toLocaleString("en-US")} and resend it to ${o}.

Every one of them gets the new-price SMS immediately. This cannot be reversed.`},an=()=>{document.getElementById(Yl)?.remove()},Yh=e=>{an();let t=document.createElement("div");t.id=Yl,t.style.cssText=`
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
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),s=o.querySelector("#ws-reduce-cancel"),i=o.querySelector("#ws-reduce-submit"),d=null;Kh(e.oppId,e.locationId).then(c=>{d=c;let p=o.querySelector("#ws-reduce-count");p&&c!==null&&(p.textContent=`${c} buyer${c===1?"":"s"} (active + previously-withdrew)`)}),setTimeout(()=>r?.focus(),50),r?.addEventListener("input",()=>{let p=r.value.replace(/[^0-9.]/g,"").split(".");r.value=p[0]+(p.length>1?"."+p.slice(1).join(""):"")});let l=c=>{c.key==="Enter"?(c.preventDefault(),i?.click()):c.key==="Escape"&&(c.preventDefault(),s?.click())};o.addEventListener("keydown",l),t.addEventListener("click",c=>{c.target===t&&an()}),s?.addEventListener("click",()=>{an()}),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let c=r.value.trim();if(!c){a.textContent="Enter a new listing price.",r.focus();return}let p=parseFloat(c);if(!Number.isFinite(p)||p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}if(window.confirm(Vh(p,d))){a.textContent="",i.disabled=!0,i.textContent="Reducing\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{await Gh({oppId:e.oppId,locationId:e.locationId,newPrice:p,userId:P()}),an(),e.onSuccess()}catch(b){m.error("Reduce Price webhook failed",b),a.textContent=b instanceof Error?b.message:"Something went wrong. Try again.",i.disabled=!1,i.textContent="Reduce Price",i.style.opacity="1",s&&(s.disabled=!1)}}})},Jh=(e,t)=>{let o=document.createElement("button");return o.id=Le,o.type="button",o.dataset.oppId=e,o.style.cssText=H,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
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
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=ln();!r||!r.locationId||r.oppId!==e||Yh({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),s=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,s&&(s.style.background=n.emerald,s.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=H,s&&(s.style.background=n.amber,s.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},Qh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Zh=async()=>{for(let e of Qh)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},sn=!1,es=async()=>{if(!sn){sn=!0;try{await Xh()}finally{sn=!1}}},Xh=async()=>{let e=ln();if(!e||!e.locationId){document.getElementById(Le)?.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Go();return}let t=document.getElementById(Le);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Disposition"&&(t.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Go());return}t&&(t.remove(),document.getElementById(`${Le}-wrap`)?.remove());let o=await Zh();if(!o){m.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Disposition"){m.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=ln();if(!a||a.oppId!==e.oppId)return;let s=Jh(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Le}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted Reduce Price button on opp ${e.oppId}`),e_(e.oppId)},Wo=null,Xa=null,Gt,Go=()=>{Wo?.disconnect(),Wo=null,Xa=null,Gt!==void 0&&(window.clearTimeout(Gt),Gt=void 0)},e_=e=>{if(Wo&&Xa===e)return;Go();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Xa=e,Wo=new MutationObserver(()=>{Gt===void 0&&(Gt=window.setTimeout(()=>{Gt=void 0;let o=ln();if(!o||o.oppId!==e){Go();return}let r=N();if(r!==null&&r!=="Disposition"){document.getElementById(Le)?.remove(),document.getElementById(`${Le}-wrap`)?.remove(),Go();return}document.getElementById(Le)||es()},250))}),Wo.observe(t,{childList:!0,subtree:!0}))},t_=()=>{V("reduce-price",Z,()=>{!document.getElementById(Le)&&!sn&&es()})},Jl=()=>{t_(),es()};var Kt="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",dn="deals.reinvestos.com";var Se="ws-crm-edit-landing-button",o_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,r_=/\/v2\/location\/([A-Za-z0-9]+)/,pn=()=>{let e=window.location.pathname,t=e.match(o_);if(!t)return null;let o=e.match(r_);return{oppId:t[1],locationId:o?o[1]:null}},n_=(e,t)=>{let o=new URL(`https://${dn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",Kt);let r=P();return r&&o.searchParams.set("user",r),o.toString()},a_=(e,t)=>{let o=document.createElement("button");return o.id=Se,o.type="button",o.dataset.oppId=e,o.style.cssText=H,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Landing Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=pn();if(!r||!r.locationId||r.oppId!==e)return;if(!Kt){m.warn("[edit-landing] editor session key not configured in this build");return}let a=n_(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let s=o.querySelector(".ws-elp-label");if(s){let i=s.textContent;s.textContent="Opening editor\u2026",setTimeout(()=>{s.textContent==="Opening editor\u2026"&&(s.textContent=i)},2500)}}),o},s_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],i_=async()=>{for(let e of s_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},cn=!1,os=async()=>{if(!cn){cn=!0;try{await l_()}finally{cn=!1}}},l_=async()=>{let e=pn();if(!e||!e.locationId){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Vo();return}let t=document.getElementById(Se);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Disposition"&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Vo());return}t&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove());let o=await i_();if(!o)return;let r=await X();if(r!=="Disposition"){m.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=pn();if(!a||a.oppId!==e.oppId)return;let s=a_(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Se}-wrap`,i.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted Edit Landing Page button on opp ${e.oppId}`),d_(e.oppId)},Ko=null,ts=null,Vt,Vo=()=>{Ko?.disconnect(),Ko=null,ts=null,Vt!==void 0&&(window.clearTimeout(Vt),Vt=void 0)},d_=e=>{if(Ko&&ts===e)return;Vo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ts=e,Ko=new MutationObserver(()=>{Vt===void 0&&(Vt=window.setTimeout(()=>{Vt=void 0;let o=pn();if(!o||o.oppId!==e){Vo();return}let r=N();if(r!==null&&r!=="Disposition"){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),Vo();return}document.getElementById(Se)||os()},250))}),Ko.observe(t,{childList:!0,subtree:!0}))},c_=()=>{V("edit-landing-page",Z,()=>{!document.getElementById(Se)&&!cn&&os()})},Ql=()=>{c_(),os()};var ed="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",p_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",Jt="ws-crm-publish-button",Yo="ws-crm-publish-wrap",bn="ws-crm-publish-dropdown",m_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,b_=/\/v2\/location\/([A-Za-z0-9]+)/,rs=()=>{let e=window.location.pathname,t=e.match(m_);if(!t)return null;let o=e.match(b_);return{oppId:t[1],locationId:o?o[1]:null}},Zl=async(e,t)=>{try{let o=await fetch(ed,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,dry_run:!0,triggered_by_user_id:P()??null}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[publish] dry_run fetch failed:",o),null}},u_=async(e,t)=>{try{let o=new URL(p_);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.open_count=="number"?a.open_count:null}catch(o){return m.warn("[publish] buyer-count fetch failed:",o),null}},h_=e=>`Publish this deal and start the buyer blast?

${e!==null?`${e} matched buyer${e===1?"":"s"}`:"all matched buyers"} will be texted about this property \u2014 VIP & Qualified buyers get the full property SMS immediately, Unqualified buyers start the teaser sequence.

This cannot be reversed.`,__=async(e,t)=>{let o=await fetch(ed,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,triggered_by_user_id:P()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},y_=(e,t)=>{if(!Kt){m.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${dn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",Kt);let r=P();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},je=()=>{document.getElementById(bn)?.remove()},Xl=(e,t,o,r,a)=>{je();let s=document.createElement("div");s.id=bn;let i=t.getBoundingClientRect();s.style.cssText=`
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
  `;let d=e.length,l=e.filter(k=>k.filled).length,c=l===d,p=document.createElement("div");p.innerHTML=`
    <div style="
      font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${c?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${c?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${l} of ${d} ready</div>
  `,s.appendChild(p),e.forEach(k=>{let f=document.createElement("div");f.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${k.filled?n.bone:n.ash};
    `;let E=k.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;f.innerHTML=`${E}<span style="flex: 1;">${k.label}</span>`,s.appendChild(f)});let b=document.createElement("div");b.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let _=document.createElement("button");_.type="button",_.textContent="Open editor to finish \u2192",_.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${y.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,_.addEventListener("click",k=>{k.stopPropagation(),y_(o,r)}),b.appendChild(_);let h=document.createElement("button");h.type="button",h.textContent="Re-check",h.title="Re-check after editing the page",h.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,h.addEventListener("click",k=>{k.stopPropagation(),je(),a()}),b.appendChild(h),s.appendChild(b),document.body.appendChild(s);let g=k=>{let f=k.target;!s.contains(f)&&!t.contains(f)&&(je(),document.removeEventListener("click",g))};window.setTimeout(()=>document.addEventListener("click",g),0)},qe=(e,t)=>{let o=e.querySelector(".ws-pub-label"),r=e.querySelector(".ws-pub-dot"),a=e.querySelector(".ws-pub-chevron"),s="transparent",i=n.steel,d=n.bone,l=n.coolGray,c="Publish Deal",p="",b="pointer",_="1";switch(t.status){case"checking":i=n.steel,d=n.ash,c="Checking\u2026",b="wait",_="0.8";break;case"ready":s=n.emerald,i=n.emerald,d=n.obsidian,l=n.obsidian,c="Publish Deal";break;case"incomplete":{let h=t.checks?.filter(k=>k.filled).length??0,g=t.checks?.length??0;i=n.amber,d=n.amber,l=n.amber,c=`${h} of ${g} ready`,p="\u25BE";break}case"publishing":s=n.emerald,i=n.emerald,d=n.obsidian,l=n.obsidian,c="Publishing\u2026",b="wait",_="0.8";break;case"published":s="transparent",i=n.steel,d=n.ash,l=n.emerald,c="Deal Published",b="default",_="0.9";break;case"error":i=n.amber,d=n.amber,l=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=d,e.style.cursor=b,e.style.opacity=_,r&&(r.style.background=l,r.style.boxShadow=t.status==="ready"||t.status==="published"?`0 0 6px ${l}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},v_=(e,t)=>{let o=document.createElement("button");o.id=Jt,o.type="button",o.dataset.oppId=e,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${ae}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};qe(o,r);let a=!1,s=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let h=await Zl(e,t);if(!h||!Array.isArray(h.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},qe(o,r);return}r={status:h.published?"published":h.ready?"ready":"incomplete",checks:h.checks},qe(o,r),document.getElementById(bn)&&r.checks&&Xl(r.checks,o,e,t,()=>void s())}finally{a=!1}}},i=async()=>{r={status:"publishing",checks:r.checks},qe(o,r),je();try{let[h,g]=await Promise.all([Zl(e,t),u_(e,t)]);if(h?.published){r={status:"published"},qe(o,r),m.info(`[publish] pre-publish check: opp ${e} already published \u2014 skipping`);return}if(!window.confirm(h_(g))){r={status:"ready",checks:r.checks},qe(o,r),m.info(`[publish] rep cancelled publish confirm for opp ${e}`);return}let k=await __(e,t);if(k.ok&&k.published)r={status:"published"},qe(o,r),m.info(`[publish] published opp ${e}`);else if(k.missing&&k.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},qe(o,r);else throw new Error(k.error||"Publish failed")}catch(h){let g=h instanceof Error?h.message:"Publish failed";m.error("[publish] publish failed",h),r={status:"error",message:g.length>28?"Error \u2014 try again":g},qe(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":i();break;case"incomplete":{document.getElementById(bn)?je():r.checks&&Xl(r.checks,o,e,t,()=>void s());break}case"error":s();break}}),s();let d=Date.now(),l=8e3,c=()=>{o.isConnected&&(a||r.status==="publishing"||r.status==="published"||Date.now()-d<l||(d=Date.now(),s()))},p=()=>c(),b=()=>{document.visibilityState==="visible"&&c()};window.addEventListener("focus",p),document.addEventListener("visibilitychange",b);let _=window.setInterval(()=>{document.body.contains(o)||(window.removeEventListener("focus",p),document.removeEventListener("visibilitychange",b),window.clearInterval(_))},5e3);return o},g_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],f_=async()=>{for(let e of g_)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},mn=!1,as=async()=>{if(!mn){mn=!0;try{await x_()}finally{mn=!1}}},x_=async()=>{let e=rs();if(!e||!e.locationId){document.getElementById(Jt)?.remove(),document.getElementById(Yo)?.remove(),je(),Qo();return}let t=document.getElementById(Jt);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Disposition"&&(t.remove(),document.getElementById(Yo)?.remove(),je(),Qo());return}t&&(t.remove(),document.getElementById(Yo)?.remove(),je());let o=await f_();if(!o)return;let r=await X();if(r!=="Disposition"){m.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=rs();if(!a||a.oppId!==e.oppId||!a.locationId)return;let s=v_(e.oppId,a.locationId),i=document.createElement("span");i.id=Yo,i.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",i.appendChild(s),Y(o).appendChild(i),m.debug(`Mounted Publish button on opp ${e.oppId}`),w_(e.oppId)},Jo=null,ns=null,Yt,Qo=()=>{Jo?.disconnect(),Jo=null,ns=null,Yt!==void 0&&(window.clearTimeout(Yt),Yt=void 0)},w_=e=>{if(Jo&&ns===e)return;Qo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ns=e,Jo=new MutationObserver(()=>{Yt===void 0&&(Yt=window.setTimeout(()=>{Yt=void 0;let o=rs();if(!o||o.oppId!==e){Qo();return}let r=N();if(r!==null&&r!=="Disposition"){document.getElementById(Jt)?.remove(),document.getElementById(Yo)?.remove(),je(),Qo();return}document.getElementById(Jt)||as()},250))}),Jo.observe(t,{childList:!0,subtree:!0}))},k_=()=>{V("publish-button",Z,()=>{!document.getElementById(Jt)&&!mn&&as()})},td=()=>{k_(),as()};var od="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",rd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var E_=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],nd=e=>`ws-crm-map-links-${e}`,ad=()=>Array.from(document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']")),un=(e,t)=>{let o=t.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let s=a.querySelector("input, textarea");if(s&&(s.value||"").trim())return s.value.trim()}return""},sd=(e,t=ad())=>{let o=un(t,e.addr),r=un(t,e.city),a=un(t,e.state),s=un(t,e.zip),i;return r&&o&&o.toLowerCase().includes(r.toLowerCase())?i=o:i=[o,r,a,s].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},$_=e=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`,T_=e=>`https://www.zillow.com/homes/${e.replace(/\s+/g,"-")}_rb`,C_=(e,t)=>{let{full:o,hasAny:r}=sd(e);r&&window.open(t(o),"_blank","noopener,noreferrer")},L_=e=>{let t=document.createElement("span");t.id=nd(e.key),t.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",t.appendChild(o);let r=(a,s,i)=>{let d=document.createElement("img");return d.src=a,d.title=s,d.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",d.addEventListener("mouseenter",()=>{d.style.transform="scale(1.12)"}),d.addEventListener("mouseleave",()=>{d.style.transform="scale(1)"}),d.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),C_(e,i)}),d};return t.appendChild(r(od,"Open in Google Maps",$_)),t.appendChild(r(rd,"Search on Zillow",T_)),t},S_=(e,t)=>{let o=t.addr.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},id=()=>{let e=ad();if(e.length)for(let t of E_){if(document.getElementById(nd(t.key)))continue;let{hasAny:o}=sd(t,e);if(!o)continue;let r=S_(e,t);r&&(r.style.display="flex",r.style.alignItems="center",r.style.width="100%",r.appendChild(L_(t)),m.debug(`[map-links] injected on "${t.addr}"`))}},Qt=null,Zt,A_=()=>{let e=Lt();return e==="contact-detail"||e==="other"},M_=()=>{Qt||(Qt=new MutationObserver(()=>{Zt===void 0&&(Zt=window.setTimeout(()=>{Zt=void 0;try{id()}catch(e){m.warn("[map-links] ensureInjected failed",e)}},300))}),Qt.observe(document.body,{childList:!0,subtree:!0}))},ld=()=>{Qt&&(Qt.disconnect(),Qt=null),Zt!==void 0&&(window.clearTimeout(Zt),Zt=void 0)},dd=()=>{if(!A_()){ld();return}M_(),id()},cd=()=>{ld()};var pd="ws-crm-hide-launchpad",ss=/\/launchpad\/?$/,is=()=>{if(!St()){if(!document.getElementById(pd)){let e=document.createElement("style");e.id=pd,e.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(e),m.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(ss.test(location.pathname)){let e=location.pathname.replace(ss,"/dashboard")+location.search;m.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${e}`);try{history.replaceState({},"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.setTimeout(()=>{(!!document.getElementById("launchpad-main")||!!document.querySelector('[class*="launchpad-container"]'))&&!ss.test(location.pathname)&&(m.warn("[hide-launchpad] SPA redirect ignored by router \u2014 hard nav fallback"),location.replace(e))},2e3)}catch(t){m.warn("[hide-launchpad] SPA redirect failed, falling back to hard nav",t),location.replace(e)}}}};var I_=[{label:"Buy-Box Entries"},{label:"Memberships"}],md=e=>{e.size!==0&&document.querySelectorAll(".nav-title").forEach(t=>{let o=(t.textContent||"").trim().toLowerCase();if(!e.has(o))return;let r=t.closest("a")||t.closest("li")||t.parentElement;r&&r.style.display!=="none"&&(r.style.setProperty("display","none","important"),m.info(`[hide-nav-items] hid "${t.textContent?.trim()}"`))})},ls=()=>{let e=St(),t=new Set(I_.filter(o=>o.agencyToo||!e).map(o=>o.label.trim().toLowerCase()));if(t.size!==0){md(t);for(let o of[150,500,1200,2500])setTimeout(()=>md(t),o)}};var P_=[{from:"Payments",to:"Contracts"}],O_=".nav-title, .topmenu-navtitle",bd=()=>{document.querySelectorAll(O_).forEach(e=>{let t=(e.textContent||"").trim(),o=P_.find(r=>r.from===t);o&&(e.textContent=o.to,m.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},ds=()=>{bd();for(let e of[150,500,1200,2500])setTimeout(bd,e)};var ud="/payments/proposals-estimates",B_=/\/payments\/invoices\/?$/,H_=/\/payments\//,R_='#sb_payments, a[meta="payments"]',_d=(e=0)=>{if(e>25)return;let t=location.pathname;if(!t.includes(ud)&&!(e>3&&!H_.test(t))){if(B_.test(t)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(ud));if(o){m.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>_d(e+1),120)}},hd=!1,D_=()=>{hd||(hd=!0,document.addEventListener("click",e=>{e.target?.closest?.(R_)&&setTimeout(()=>_d(),80)},!0),m.info("[contracts-section] section-entry redirect armed"))},cs=()=>{D_()};var yd=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],vd="ws-crm-hide-topmenu-tabs",ps=()=>{if(document.getElementById(vd))return;let e=yd.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),t=document.createElement("style");t.id=vd,t.textContent=`${e}{display:none !important;}`,(document.head||document.documentElement).appendChild(t),m.info(`[hide-topmenu-tabs] hid ${yd.length} top tabs`)};var xd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",Ze="ws-crm-send-to-closing-office-button",vt="ws-crm-send-to-title-co-wrap",yn="ws-crm-stc-dropdown",F_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,z_=/\/v2\/location\/([A-Za-z0-9]+)/,er=()=>{let e=window.location.pathname,t=e.match(F_);if(!t)return null;let o=e.match(z_);return{oppId:t[1],locationId:o?o[1]:null}},N_=5*60*1e3,us=e=>`ws-crm-stc-cache:${e}`,q_=e=>{try{let t=window.localStorage.getItem(us(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>N_||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},j_=(e,t)=>{try{window.localStorage.setItem(us(e),JSON.stringify(t))}catch{}},wd=e=>{try{window.localStorage.removeItem(us(e))}catch{}},ms="ws-crm:opp-fields-updated",kd=e=>{if(e){wd(e);try{window.dispatchEvent(new CustomEvent(ms,{detail:{oppId:e}}))}catch{}}},U_=async(e,t)=>{try{let o=await fetch(xd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:P()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[stc] dry_run fetch failed:",o),null}},W_=async(e,t,o)=>{let r=await fetch(xd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:P()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},G_=(e,t)=>{let o=e?.name?`${e.name}${e.email?` (${e.email})`:""}`:"the closing agent",r=e?.closingOffice?` at ${e.closingOffice}`:"",a=e?.propertyAddress?` for ${e.propertyAddress}`:"",s=t?`

\u26A0\uFE0F This deal was already sent on ${new Date(t).toLocaleString()} \u2014 this will send it AGAIN.`:"";return`Send this deal${a} to the closing office now?

This emails the executed Purchase + Assignment contracts to ${o}${r}. This cannot be undone.`+s},K_=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!t)return!1;let o=t.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===e)return a.click(),!0;let r=t.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===e)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return m.warn(`[stc] folder tab not found for "${e}"`),!1},gd=e=>{let t=document.getElementById(e);if(!t){m.warn(`[stc] field ${e} not found in DOM \u2014 can't scroll to it`);return}t.scrollIntoView({behavior:"smooth",block:"center"});let o=t.style.boxShadow,r=t.style.transition;t.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",t.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{t.style.boxShadow=o,window.setTimeout(()=>{t.style.transition=r},400)},2800)},V_=(e,t)=>{if(t&&K_(t)){window.setTimeout(()=>gd(e),300);return}gd(e)},Ae=()=>{document.getElementById(yn)?.remove()},hn=(e,t,o)=>{Ae();let r=document.createElement("div");r.id=yn;let a=o.getBoundingClientRect();r.style.cssText=`
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
  `;let s=e.length,i=e.filter(h=>h.filled).length,d=i===s,l=document.createElement("div");l.innerHTML=`
    <div style="
      font-family: ${u.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${d?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${d?"Ready to send":"Required fields"}</div>
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
  `,r.appendChild(l);let c=["TC","ACQ","MT","DISPO","Property"],p={};e.forEach(h=>{p[h.group]||(p[h.group]=[]),p[h.group].push(h)});let b=[...c.filter(h=>p[h]),...Object.keys(p).filter(h=>!c.includes(h))];for(let h of b){let g=p[h],k=document.createElement("div");k.style.cssText="margin-top: 12px;";let f=document.createElement("div");f.style.cssText=`
      font-family: ${u.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,f.textContent=h,k.appendChild(f),g.forEach(E=>{let v=document.createElement("div"),x=!E.filled&&E.navigable&&E.field_id;v.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${y.sm};
        font-size: 12px;
        color: ${E.filled?n.bone:n.ash};
        ${x?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,x&&(v.addEventListener("mouseenter",()=>{v.style.background=n.slate}),v.addEventListener("mouseleave",()=>{v.style.background="transparent"}),v.addEventListener("click",w=>{w.stopPropagation(),E.field_id&&(V_(E.field_id,E.folder),Ae())}));let $=E.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,C=x?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";v.innerHTML=`${$}<span style="flex: 1;">${E.label}</span>${C}`,k.appendChild(v)}),r.appendChild(k)}document.body.appendChild(r);let _=h=>{let g=h.target;!r.contains(g)&&!o.contains(g)&&(Ae(),document.removeEventListener("click",_))};window.setTimeout(()=>document.addEventListener("click",_),0)},Re=(e,t)=>{let o=e.querySelector(".ws-stc-label"),r=e.querySelector(".ws-stc-dot"),a=e.querySelector(".ws-stc-chevron"),s,i,d=n.bone,l,c="Send to Closing Office",p="",b="pointer",_="1";switch(t.status){case"checking":s="transparent",i=n.steel,d=n.ash,l=n.coolGray,c="Checking\u2026",b="wait",_="0.8";break;case"ready":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",c=t.previouslySentAt?"Re-send to Closing Office":"Send to Closing Office";break;case"incomplete":{let h=t.checks?.filter(k=>k.filled).length??0,g=t.checks?.length??0;s="transparent",i=n.amber,d=n.amber,l=n.amber,c=`${h} of ${g} Fields Ready`;break}case"sending":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",c="Sending\u2026",b="wait",_="0.8";break;case"sent":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",c="Sent \u2713";break;case"error":s="transparent",i=n.amber,d=n.amber,l=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=d,e.style.cursor=b,e.style.opacity=_,r&&(r.style.background=l,r.style.boxShadow=t.status==="ready"||t.status==="sent"?`0 0 6px ${l}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},Y_=(e,t)=>{let o=document.createElement("button");o.id=Ze,o.type="button",o.dataset.oppId=e;let r=q_(e),a=r?{status:r.checks.every(v=>v.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"},s=r?.send_meta??null;o.style.cssText=`
    ${H}
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
  `,Re(o,a);let i=new Set,d=async()=>{if(a.status==="sending")return;let v=await U_(e,t);if(!v){a={status:"error",message:"Check failed \u2014 click to retry"},Re(o,a);return}if(v.rate_limited){g=Date.now()+h,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},Re(o,a),m.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(g).toLocaleTimeString()}`);return}if(!Array.isArray(v.checks)||v.checks.length===0){a={status:"error",message:v.error||"Check failed \u2014 click to retry"},Re(o,a),m.warn("[stc] dry_run returned no checks:",v);return}let x=v.pipeline_name;if(x&&x!=="Transaction Coordination"){m.debug(`[stc] dry_run reports pipeline="${x}" (not TC) \u2014 retracting button + caching`),vn.add(e),document.getElementById(Ze)?.remove(),document.getElementById(vt)?.remove(),Ae(),Xo();return}let $=v.checks;if(a.checks&&a.checks.length===v.checks.length){let w=new Set;$=v.checks.map((T,L)=>a.checks[L]?.filled&&!T.filled?i.has(T.label)?T:(w.add(T.label),{...T,filled:!0}):T),i=w}else i=new Set;a={status:$.every(w=>w.filled)?"ready":"incomplete",checks:$,previouslySentAt:v.previously_sent_at??null},(v.closing_agent||v.property_address||v.closing_office)&&(s={name:(v.closing_agent?.name??"").trim(),email:(v.closing_agent?.email??"").trim(),closingOffice:(v.closing_office??"").trim(),propertyAddress:(v.property_address??"").trim()}),j_(e,{checks:$,previously_sent_at:v.previously_sent_at??null,pipeline_name:x,send_meta:s,ts:Date.now()}),Re(o,a),document.getElementById(yn)&&hn($,v.previously_sent_at,o)},l=async()=>{let v=!!a.previouslySentAt;if(window.confirm(G_(s,a.previouslySentAt))){a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},Re(o,a),Ae();try{let x=await W_(e,t,v);if(x.needs_confirm){a={status:"ready",checks:x.checks,previouslySentAt:x.previously_sent_at},Re(o,a),x.checks&&hn(x.checks,x.previously_sent_at,o);return}if(x.ok){a={status:"sent",checks:x.checks,previouslySentAt:new Date().toISOString()},Re(o,a),window.setTimeout(()=>{f()},3500);return}a={status:"error",checks:x.checks,message:x.error||"Validation failed"},Re(o,a),x.checks&&hn(x.checks,x.previously_sent_at,o)}catch(x){m.error("[stc] send failed:",x),a={status:"error",message:"Network error \u2014 click to retry"},Re(o,a)}}};o.addEventListener("click",()=>{switch(a.status){case"ready":l();break;case"incomplete":{document.getElementById(yn)?Ae():a.checks&&hn(a.checks,a.previouslySentAt,o);break}case"error":case"sent":f();break}});let c,p=!1,b=Date.now(),_=1e4,h=5*60*1e3,g=0,k=!1,f=async()=>{if(o.isConnected&&(k=!0),k&&!o.isConnected)return;let v=er();if(!(!v||v.oppId!==e)&&!p){if(Date.now()<g){m.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(g).toLocaleTimeString()}`);return}p=!0,b=Date.now();try{await d()}finally{p=!1}}};f();let E=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(E){let v=new MutationObserver(()=>{if(c!==void 0||p)return;let C=Date.now()-b,w=Math.max(1500,_-C);c=window.setTimeout(()=>{c=void 0,a.status!=="sending"&&f()},w)});v.observe(E,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let x=C=>{let w=C.detail;if(!w||w.oppId!==e)return;wd(e);let T=0,L=()=>{if(p&&T<8){T+=1,window.setTimeout(L,500);return}f()};L()};window.addEventListener(ms,x);let $=window.setInterval(()=>{document.body.contains(o)||(v.disconnect(),c!==void 0&&window.clearTimeout(c),window.removeEventListener(ms,x),window.clearInterval($))},5e3)}return o},J_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Q_=async()=>{for(let e of J_)try{let t=await I(e,{timeoutMs:1500});if(t)return m.debug(`[send-to-title-co] mount target: ${e}`),t}catch{}return m.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},vn=new Set,fd=null,Z_=e=>{e&&e!==fd&&(vn.clear(),fd=e)},_n=!1,hs=async()=>{if(_n){m.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}_n=!0;try{await X_()}catch(e){m.error("[stc] ensureMountedImpl threw:",e)}finally{_n=!1}},X_=async()=>{m.debug("[stc] mount:01 ensureMountedImpl entered");let e=er();if(!e||!e.locationId){m.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(e)}`),document.getElementById(Ze)?.remove(),document.getElementById(vt)?.remove(),Ae();return}if(m.debug(`[stc] mount:02 ctx ok \u2014 oppId=${e.oppId} locId=${e.locationId}`),Z_(e.oppId),vn.has(e.oppId)){m.debug(`[stc] mount:02-BAIL opp ${e.oppId} previously confirmed non-TC this session`),document.getElementById(Ze)?.remove(),document.getElementById(vt)?.remove(),Ae();return}let t=document.getElementById(Ze);if(t&&t.dataset.oppId===e.oppId){m.debug("[stc] mount:03-SKIP existing button for same opp");let d=N();d!==null&&d!=="Transaction Coordination"&&(t.remove(),document.getElementById(vt)?.remove(),Ae(),Xo());return}t&&(m.debug("[stc] mount:03 removing stale existing button"),t.remove(),document.getElementById(vt)?.remove(),Ae()),m.debug("[stc] mount:04 calling findMountTarget");let o=await Q_();if(!o){m.debug("[stc] mount:04-BAIL findMountTarget returned null");return}m.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=N();if(r!==null&&r!=="Transaction Coordination"){m.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=er();if(!a||a.oppId!==e.oppId||!a.locationId){m.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${e.oppId} now=${a?.oppId}`);return}m.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let s=Y_(e.oppId,a.locationId),i=document.createElement("span");i.id=vt,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,i.appendChild(s),Y(o).appendChild(i),m.debug(`[stc] mount:07-OK Mounted on opp ${e.oppId}, inDoc=${document.body.contains(s)}`),ey(e.oppId)},Zo=null,bs=null,Xo=()=>{Zo?.disconnect(),Zo=null,bs=null},ey=e=>{if(Zo&&bs===e)return;Xo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(bs=e,Zo=new MutationObserver(()=>{let o=er();if(!o||o.oppId!==e){Xo();return}let r=N();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(Ze)?.remove(),document.getElementById(vt)?.remove(),Ae(),Xo();return}document.getElementById(Ze)||hs()}),Zo.observe(t,{childList:!0,subtree:!0}))},ty=()=>{V("send-to-closing",Z,()=>{if(document.getElementById(Ze)||_n)return;let e=er();e&&vn.has(e.oppId)||hs()})},Ed=()=>{ty(),hs()};var $d="ws-crm-vault-datepicker-panel",oy=1000010,Td=264,ry=["S","M","T","W","T","F","S"],ny=["January","February","March","April","May","June","July","August","September","October","November","December"],Cd=()=>{let e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),t=o=>Number(e.find(r=>r.type===o)?.value??"0");return{y:t("year"),m:t("month"),d:t("day")}},ay=e=>e%4===0&&e%100!==0||e%400===0,_s=(e,t)=>[31,ay(e)?29:28,31,30,31,30,31,31,30,31,30,31][t-1],sy=({y:e,m:t,d:o})=>o<_s(e,t)?{y:e,m:t,d:o+1}:t<12?{y:e,m:t+1,d:1}:{y:e+1,m:1,d:1},fn=e=>String(e).padStart(2,"0"),ys=({y:e,m:t,d:o})=>`${e}-${fn(t)}-${fn(o)}`,gn=e=>{let[t,o,r]=e.split("-").map(Number);return{y:t,m:o,d:r}},iy=e=>{let{y:t,m:o,d:r}=gn(e);return`${fn(o)}/${fn(r)}/${t}`},ly=()=>ys(sy(Cd())),dy=(e,t,o)=>{let r=[0,3,2,5,0,3,5,1,4,6,2,4],a=t<3?e-1:e;return(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+r[t-1]+o)%7},xn=(e,t)=>`<input id="${e}" type="text" inputmode="none" readonly autocomplete="off" placeholder="MM/DD/YYYY" data-vault-datepicker-field="1" style="${t}cursor:pointer;caret-color:transparent;">`,wn=e=>e?.dataset.isoValue??"",kn=(e,t={})=>{let o=document.getElementById(e);if(!o){m.warn(`[vault-datepicker] #${e} not found \u2014 skipping attach`);return}let r=t.minDate??ly(),a=gn(r),s=ys(Cd()),i=f=>{o.dataset.isoValue=f,o.value=f?iy(f):""};t.initialValue&&i(t.initialValue);let d=null,l=a.y,c=a.m,p=()=>{d&&(d.remove(),d=null,document.removeEventListener("mousedown",b,!0),document.removeEventListener("keydown",_,!0))};function b(f){let E=f.target;d&&!d.contains(E)&&E!==o&&p()}function _(f){f.key==="Escape"&&p()}let h=f=>{i(f),p(),t.onChange?.(f)},g=()=>{if(!d)return;let f=d,E=l===a.y&&c===a.m,v=`${ny[c-1]} ${l}`,x=o.dataset.isoValue||"",$=(M,W)=>`
      <button type="button" data-nav="${M}" aria-label="${M==="prev"?"Previous":"Next"} month" ${W?"disabled":""} style="
        background:transparent;border:none;color:${W?n.coolGray:n.ash};
        cursor:${W?"default":"pointer"};padding:2px 8px;font-size:15px;line-height:1.4;
        border-radius:${y.sm};font-family:${u.sans};
      ">${M==="prev"?"\u2039":"\u203A"}</button>`,C=ry.map(M=>`<div style="text-align:center;font-family:${u.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};padding:4px 0;">${M}</div>`).join(""),w=dy(l,c,1),T=_s(l,c),L=c===1?12:c-1,A=c===1?l-1:l,G=_s(A,L),U=[];for(let M=0;M<w;M++){let W=G-w+1+M;U.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};color:${n.coolGray};">${W}</div>`)}for(let M=1;M<=T;M++){let W=ys({y:l,m:c,d:M}),st=W<r,Ye=W===x,it=W===s,$e=`text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};border-radius:${y.sm};`;Ye?$e+=`background:${n.emerald};color:${n.obsidian};font-weight:600;cursor:pointer;`:st?$e+=`color:${n.coolGray};opacity:0.5;cursor:default;`:$e+=`color:${n.bone};cursor:pointer;`,it&&!Ye&&($e+=`box-shadow:inset 0 0 0 1px ${n.emerald};`),U.push(`<div data-iso="${W}" style="${$e}">${M}</div>`)}let j=(w+T)%7,R=j===0?0:7-j;for(let M=1;M<=R;M++)U.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${u.sans};color:${n.coolGray};">${M}</div>`);f.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 8px 6px;">
        ${$("prev",E)}
        <div style="font-size:12.5px;font-weight:600;color:${n.bone};font-family:${u.sans};">${v}</div>
        ${$("next",!1)}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:0 10px;">${C}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:2px 10px 8px;">${U.join("")}</div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid ${n.steel};">
        <button type="button" data-action="clear" style="background:transparent;border:none;color:${n.emerald};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Clear</button>
        <button type="button" data-action="today" style="background:transparent;border:none;color:${n.emerald};font-family:${u.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Today</button>
      </div>
    `;let me=f.querySelector('[data-nav="prev"]');me&&!E&&(me.addEventListener("mouseenter",()=>me.style.color=n.bone),me.addEventListener("mouseleave",()=>me.style.color=n.ash),me.addEventListener("click",()=>{c-=1,c<1&&(c=12,l-=1),g()}));let be=f.querySelector('[data-nav="next"]');be&&(be.addEventListener("mouseenter",()=>be.style.color=n.bone),be.addEventListener("mouseleave",()=>be.style.color=n.ash),be.addEventListener("click",()=>{c+=1,c>12&&(c=1,l+=1),g()})),f.querySelectorAll("[data-iso]").forEach(M=>{let W=M.dataset.iso||"";!W||W<r||(M.addEventListener("mouseenter",()=>{W!==x&&(M.style.background=n.slate)}),M.addEventListener("mouseleave",()=>{W!==x&&(M.style.background="transparent")}),M.addEventListener("click",()=>h(W)))});let te=f.querySelector('[data-action="clear"]');te?.addEventListener("mouseenter",()=>te.style.color=n.emeraldBright),te?.addEventListener("mouseleave",()=>te.style.color=n.emerald),te?.addEventListener("click",()=>h(""));let ne=f.querySelector('[data-action="today"]');ne?.addEventListener("mouseenter",()=>ne.style.color=n.emeraldBright),ne?.addEventListener("mouseleave",()=>ne.style.color=n.emerald),ne?.addEventListener("click",()=>{let M=gn(s);l=M.y,c=M.m,g()})},k=()=>{if(d)return;document.getElementById($d)?.remove();let f=o.dataset.isoValue||r,E=gn(f);l=E.y,c=E.m,d=document.createElement("div"),d.id=$d;let v=o.getBoundingClientRect(),x=Math.max(8,Math.min(v.left,window.innerWidth-Td-8));d.style.cssText=`
      position:fixed;top:${v.bottom+6}px;left:${x}px;z-index:${oy};
      width:${Td}px;background:${n.graphite};border:1px solid ${n.steel};
      border-radius:${y.lg};box-shadow:0 14px 34px rgba(0,0,0,0.55);font-family:${u.sans};
    `,document.body.appendChild(d),g(),setTimeout(()=>{document.addEventListener("mousedown",b,!0),document.addEventListener("keydown",_,!0)},0)};o.addEventListener("click",k),o.addEventListener("focus",k)};var nr="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",cy=`${nr}/tc/welcome-call-prefill`,py=`${nr}/tc/welcome-call-save`,my=`${nr}/tc/order-lockbox`,by=`${nr}/tc/order-photos`,uy=`${nr}/tc/photo-price-quote`,tr="ws-crm-welcome-call-overlay",ar=[{value:15,label:"15 photos"},{value:30,label:"30 photos"},{value:50,label:"50 photos"}],hy=[{value:"homejab",label:"Schedule photos right now with HomeJab"},{value:"later",label:"I'll schedule photos myself later"}],xs=[{value:"anytime",label:"Anytime"},{value:"8amto11am",label:"8\u201311 AM"},{value:"9amto12pm",label:"9 AM\u201312 PM"},{value:"10amto1pm",label:"10 AM\u20131 PM"},{value:"11amto2pm",label:"11 AM\u20132 PM"},{value:"12pmto3pm",label:"12\u20133 PM"},{value:"1pmto4pm",label:"1\u20134 PM"},{value:"2pmto5pm",label:"2\u20135 PM"},{value:"3pmto6pm",label:"3\u20136 PM"}],_y=["Regular Contract","Subject To","Seller Finance","Novation"],yy=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],vy=["Gas","Electric","Propane","Oil"],gy=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],fy=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],Xe=["Yes","No"],xy=["Yes","No","Unknown"],wy=["Professional Photographer","Seller","Tenant"],ky=["Month-to-Month","Annual"],Ld=["Current","Behind"],Ey=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],pe=e=>(e==null?"":String(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),oo=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;margin-top:4px;`,ws="margin-bottom:12px;",Ad=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,$y=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,Sd=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),ie=(e,t,o)=>{let r=Sd(o);return`<select id="${e}" style="${oo}"><option value=""></option>${t.map(a=>`<option ${r!==""&&Sd(a)===r?"selected":""}>${pe(a)}</option>`).join("")}</select>`},Ty=(e,t,o)=>`<select id="${e}" style="${oo}">${t.map(r=>`<option value="${pe(r.value)}" ${r.value===o?"selected":""}>${pe(r.label)}</option>`).join("")}</select>`,ce=(e,t,o="")=>`<input id="${e}" type="text" value="${pe(t)}" placeholder="${pe(o)}" style="${oo}">`,Md=(e,t)=>`<textarea id="${e}" rows="3" style="${oo}resize:vertical;">${pe(t)}</textarea>`,Cy=(e,t)=>`<input id="${e}" type="date" value="${pe(t)}" style="${oo}">`,q=(e,t)=>`<div style="${ws}"><label style="${Ad}">${pe(e)}</label>${t}</div>`,vs=(e,t)=>{let o=Array.isArray(t)?t:[];return`<div style="margin-top:4px;">${Ey.map(r=>`<label style="${$y}"><input type="checkbox" data-grp="${e}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},Ue=e=>`<div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${pe(e)}</div>`,eo=()=>{document.getElementById(tr)?.remove()},Xt=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${u.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Ly=e=>{let t=e.tenant||{},o=`
    ${q("Who is providing photos?",ie("wc-photos_provided_by",wy,e.photos_provided_by))}
    <div style="${ws}">
      <label style="${Ad}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${vs("photos_avail_mornings",e.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${vs("photos_avail_afternoons",e.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${vs("photos_avail_evenings",e.photos_avail_evenings)}
    </div>
  `,r=`
    ${Sy()}
    <div id="wc-photos-manual">${o}</div>
    <div id="wc-photos-homejab" style="display:none;">${Ay()}</div>
  `;return`
    ${Ue("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${pe(e.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${pe(e.deal_address)||"(no address on file)"}</div>

    ${Ue("Contract")}
    ${q("Type of Contract",ie("wc-contract_type",_y,e.contract_type))}

    ${Ue("Property")}
    ${q("Property Type",ie("wc-property_type",gy,e.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${q("Beds",ce("wc-beds",e.beds))}</div>
      <div style="flex:1;">${q("Baths",ce("wc-baths",e.baths))}</div>
      <div style="flex:1;">${q("Sq Ft",ce("wc-sqft",e.sqft))}</div>
    </div>
    ${q("Utilities",ie("wc-utilities",yy,e.utilities))}
    ${q("Heat Source",ie("wc-heat_source",vy,e.heat_source))}

    ${Ue("Liens & Permits")}
    ${q("Is there a mortgage?",ie("wc-has_mortgage",Xe,e.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${q("Mortgage payment status",ie("wc-mortgage_payment_status",Ld,e.mortgage_payment_status))}</div>
    ${q("Any other liens? (back taxes, code violations, HELOC, etc.)",ie("wc-has_other_liens",Xe,e.has_other_liens))}
    ${q("Any open or expired permits?",ie("wc-has_permit_issues",Xe,e.has_permit_issues))}
    ${q("Is the property in probate?",ie("wc-in_probate",Xe,e.in_probate))}

    ${Ue("Occupancy")}
    ${q("Property occupancy",ie("wc-occupancy",fy,e.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("First name",ce("wc-tenant_first_name",t.first_name))}</div>
        <div style="flex:1;">${q("Last name",ce("wc-tenant_last_name",t.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Phone",ce("wc-tenant_phone",t.phone))}</div>
        <div style="flex:1;">${q("Email",ce("wc-tenant_email",t.email))}</div>
      </div>
      ${q("Lease type",ie("wc-tenant_lease_type",ky,t.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Monthly rent",ce("wc-tenant_monthly_rent",t.monthly_rent))}</div>
        <div style="flex:1;">${q("Rent due day",ce("wc-tenant_rent_due_day",t.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Rent status",ie("wc-tenant_rent_status",Ld,t.rent_status))}</div>
        <div style="flex:1;">${q("Last rent paid",Cy("wc-tenant_last_rent_paid",t.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Lease on hand?",ie("wc-tenant_lease_on_hand",Xe,t.lease_on_hand))}</div>
        <div style="flex:1;">${q("Security deposit",ce("wc-tenant_security_deposit",t.security_deposit))}</div>
      </div>
      ${q("Selling with tenant in place?",ie("wc-selling_with_tenant",Xe,e.selling_with_tenant))}
    </div>

    ${Ue("HOA")}
    ${q("Part of an HOA?",ie("wc-in_hoa",Xe,e.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${q("HOA monthly fee",ce("wc-hoa_monthly_fee",e.hoa_monthly_fee))}${q("HOA rental restriction?",ie("wc-hoa_rental_restriction",xy,e.hoa_rental_restriction))}</div>

    ${Ue("Photos & Access")}
    ${r}

    ${Ue("Lockbox")}
    ${q("Lockbox needed?",ie("wc-lockbox_needed",Xe,e.lockbox_needed))}
    ${q("Lockbox code (agree with the seller; recorded on the property for future use)",ce("wc-lockbox_code",e.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Recipient name",ce("wc-lockbox_recipient_name",e.lockbox_recipient_name))}</div>
        <div style="flex:1;">${q("Recipient phone",ce("wc-lockbox_recipient_phone",e.lockbox_recipient_phone))}</div>
      </div>
      ${q("Mailing address (if different from property)",ce("wc-lockbox_mailing_address",e.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${u.sans};cursor:pointer;flex-shrink:0;">${En(e).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${En(e).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${En(e).on?n.emerald:n.amber};flex-shrink:0;"></span>${En(e).text}</span>
      </div>
      <div id="wc-lockbox-confirmation" style="display:none;margin-top:10px;padding:12px 14px;background:${n.slate};border:1px solid ${n.emeraldBorder};border-radius:${y.sm};"></div>
    </div>

    ${Ue("Notes")}
    ${q("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",Md("wc-welcome_call_notes",e.welcome_call_notes))}
  `},O=e=>{let t=document.getElementById(e);return t?(t.value||"").trim():""},gs=e=>Array.from(document.querySelectorAll(`input[data-grp="${e}"]:checked`)).map(t=>t.value),fs=()=>{let e=(o,r)=>{let a=document.getElementById(o);a&&(a.style.display=r?"block":"none")};e("wc-mortgage-detail",O("wc-has_mortgage")==="Yes"),e("wc-hoa-detail",O("wc-in_hoa")==="Yes"),e("wc-lockbox-detail",O("wc-lockbox_needed")==="Yes"),e("wc-tenant-block",O("wc-occupancy")==="Tenant Occupied");let t=document.querySelector('input[name="wc-photo-mode"]:checked')?.value??"later";e("wc-photos-manual",t!=="homejab"),e("wc-photos-homejab",t==="homejab")},En=e=>{let t=e,o=String(t.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=t.lockbox_order_date?pe(t.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},Sy=()=>`
  <div style="${ws}">
    ${hy.map(e=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:6px;cursor:pointer;"><input type="radio" name="wc-photo-mode" value="${e.value}" ${e.value==="later"?"checked":""}>${pe(e.label)}</label>`).join("")}
  </div>
`,Ay=()=>{let e=ar.map((t,o)=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wc-op-photocount" value="${t.value}" ${o===1?"checked":""}><span id="wc-op-pkg-label-${t.value}">${pe(t.label)}</span></label>`).join("");return`
    <div id="wc-op-form">
      ${q("Package",`<div style="margin-top:4px;">${e}</div>`)}
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wc-op-aerial"> <span id="wc-op-aerial-label">+ Aerial photos</span></label>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${q("Shoot date",xn("wc-op-date",oo))}</div>
        <div style="flex:1;">${q("Time window",Ty("wc-op-time",xs,"anytime"))}</div>
      </div>
      ${q("Must-have shots",Md("wc-op-shots",""))}
      ${q("Access notes (beyond the lockbox code on file)",ce("wc-op-access","","Optional \u2014 pets, gate code, parking\u2026"))}
      <div id="wc-op-total" style="font-size:13px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wc-op-error" style="display:none;font-size:12px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:8px 10px;margin:2px 0 12px;line-height:1.4;"></div>
      <button type="button" id="wc-order-photos" disabled style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${u.sans};cursor:pointer;flex-shrink:0;opacity:0.5;">Order Photos</button>
    </div>
  `},ks=e=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file for this account \u2014 the owner needs to add one.":"Lockbox order failed \u2014 try again.",Es=(e,t)=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file \u2014 the owner needs to add one.":e==="vendor_order_failed"?t===!0?"Order failed after payment \u2014 the charge was automatically refunded. Ops has been alerted.":"Order failed after payment and the auto-refund ALSO failed \u2014 ops has been alerted to refund manually.":"Photo order failed \u2014 try again.",gt=e=>Number.isFinite(e)?Number.isInteger(e)?String(e):e.toFixed(2):"0",to=(e,t)=>`p${e}${t?"_aerial":""}`,$s=async e=>{try{let t=await fetch(uy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,menu:!0}),credentials:"omit"});if(!t.ok){let o="quote_unavailable";try{let r=await t.json();r.reason&&(o=r.reason)}catch{}return{ok:!1,reason:o}}return await t.json()}catch(t){return m.warn("[photo-menu] fetch failed:",t),{ok:!1,reason:"quote_unavailable"}}},Ts=(e,t)=>{let o=t?.[to(e,!1)];return typeof o=="number"?`${e} photos \u2014 $${gt(o)}`:`${e} photos`},Cs=(e,t)=>{let o=t?.[to(e,!1)],r=t?.[to(e,!0)];return typeof o=="number"&&typeof r=="number"?`+ Aerial photos (+$${gt(r-o)})`:"+ Aerial photos"},or="Pricing is temporarily unavailable \u2014 try again shortly",rr=e=>`Total: <span style="color:${n.emerald};font-weight:600;">$${gt(e)}</span> \u2014 charged to the card on file`,Ls=e=>`Order HomeJab photos for this deal now? The card on file will be charged $${gt(e)}. This cannot be reversed.`,Ss=e=>`HomeJab's price just changed \u2014 new total $${gt(e)}. Confirm again to order.`,As=(e,t,o)=>`
  <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">HomeJab</div>
  <div style="font-size:14px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:8px;">Paid <span style="color:${n.emerald};">\u2713</span> $${gt(o)} \u2014 HomeJab order #${pe(t)} placed.</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;margin-bottom:14px;">The shoot will appear on this deal once HomeJab confirms scheduling.</div>
  <button type="button" id="${e}-done" style="${ae} width:100%; justify-content:center;">Done</button>
`,My=e=>typeof e=="number"&&Number.isFinite(e)?`Paid <span style="color:${n.emerald};">\u2713</span> $${gt(e)} \u2014 lockbox ordered`:`Paid <span style="color:${n.emerald};">\u2713</span> \u2014 lockbox ordered`,Iy="Ops will ship it and add tracking to the property record.",Id=e=>`
  <div style="font-size:13px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:4px;">${My(e)}</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;">${Iy}</div>
`,Pd=(e,t)=>`
  <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Lockbox</div>
  ${Id(t)}
  <button type="button" id="${e}-done" style="${ae} width:100%; justify-content:center;margin-top:12px;">Done</button>
`,Py=e=>({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,contract_type:O("wc-contract_type"),property_type:O("wc-property_type"),beds:O("wc-beds"),baths:O("wc-baths"),sqft:O("wc-sqft"),utilities:O("wc-utilities"),heat_source:O("wc-heat_source"),has_mortgage:O("wc-has_mortgage"),mortgage_payment_status:O("wc-mortgage_payment_status"),has_other_liens:O("wc-has_other_liens"),has_permit_issues:O("wc-has_permit_issues"),in_probate:O("wc-in_probate"),occupancy:O("wc-occupancy"),selling_with_tenant:O("wc-selling_with_tenant"),in_hoa:O("wc-in_hoa"),hoa_rental_restriction:O("wc-hoa_rental_restriction"),hoa_monthly_fee:O("wc-hoa_monthly_fee"),photos_provided_by:O("wc-photos_provided_by"),photos_avail_mornings:gs("photos_avail_mornings"),photos_avail_afternoons:gs("photos_avail_afternoons"),photos_avail_evenings:gs("photos_avail_evenings"),lockbox_needed:O("wc-lockbox_needed"),lockbox_code:O("wc-lockbox_code"),lockbox_recipient_name:O("wc-lockbox_recipient_name"),lockbox_recipient_phone:O("wc-lockbox_recipient_phone"),lockbox_mailing_address:O("wc-lockbox_mailing_address"),welcome_call_notes:O("wc-welcome_call_notes"),tenant:O("wc-occupancy")==="Tenant Occupied"?{first_name:O("wc-tenant_first_name"),last_name:O("wc-tenant_last_name"),phone:O("wc-tenant_phone"),email:O("wc-tenant_email"),lease_type:O("wc-tenant_lease_type"),monthly_rent:O("wc-tenant_monthly_rent"),rent_due_day:O("wc-tenant_rent_due_day"),rent_status:O("wc-tenant_rent_status"),last_rent_paid:O("wc-tenant_last_rent_paid"),lease_on_hand:O("wc-tenant_lease_on_hand"),security_deposit:O("wc-tenant_security_deposit")}:void 0}),Oy=e=>{eo();let t=document.createElement("div");t.id=tr,t.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${u.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${tr} input[type="date"]::-webkit-calendar-picker-indicator,#${tr} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${y.lg} ${y.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${Ly(e)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${y.lg} ${y.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${ae}">Complete Welcome Call</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",g=>{g.target===t&&eo()}),document.getElementById("wc-close")?.addEventListener("click",eo),document.getElementById("wc-cancel")?.addEventListener("click",eo);let r=null,a=null,s=0,i=g=>{let k=document.getElementById("wc-order-photos");k&&(k.disabled=g,k.style.opacity=g?"0.5":"1")},d=g=>{let k=document.getElementById("wc-op-error");k&&(k.textContent=g,k.style.display="block")},l=()=>{let g=document.getElementById("wc-op-error");g&&(g.style.display="none",g.textContent="")},c=()=>{let g=Number(document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30"),k=document.getElementById("wc-op-aerial")?.checked??!1;ar.forEach(x=>{let $=document.getElementById(`wc-op-pkg-label-${x.value}`);$&&($.textContent=Ts(x.value,r))});let f=document.getElementById("wc-op-aerial-label");f&&(f.textContent=Cs(g,r));let E=document.getElementById("wc-op-total"),v=r?.[to(g,k)];typeof v=="number"?(a={tenant_price:v},E&&(E.innerHTML=rr(v)),i(!1)):(a=null,E&&(E.textContent=r?"":"Getting price\u2026"),i(!0))},p=async()=>{let g=++s;r=null,l(),c();let k=await $s(String(e.tenant_id??""));if(g===s)if(k.ok&&k.menu)r=k.menu,c();else{r=null;let f=document.getElementById("wc-op-total");f&&(f.textContent=""),d(or),i(!0)}};["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(g=>{document.getElementById(g)?.addEventListener("change",fs)}),document.querySelectorAll('input[name="wc-photo-mode"]').forEach(g=>{g.addEventListener("change",()=>{fs(),g.checked&&g.value==="homejab"&&p()})}),document.querySelectorAll('input[name="wc-op-photocount"]').forEach(g=>{g.addEventListener("change",c)}),document.getElementById("wc-op-aerial")?.addEventListener("change",c),document.getElementById("wc-op-date")&&kn("wc-op-date"),fs();let b=document.getElementById("wc-save");b?.addEventListener("click",async()=>{if(!O("wc-occupancy")){Xt("Set the property occupancy before completing.","err");return}b.textContent="Saving\u2026",b.style.opacity="0.8",b.disabled=!0;try{(await fetch(py,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Py(e)),credentials:"omit"})).ok?(eo(),Xt("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,Xt("Save failed \u2014 try again.","err"))}catch(g){m.warn("[welcome-call] save failed:",g),b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,Xt("Couldn't reach the save handler. Try again.","err")}});let _=document.getElementById("wc-order-lockbox");_?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let g=document.getElementById("wc-lockbox-status"),k=document.getElementById("wc-lockbox-confirmation");_.disabled=!0,_.textContent="Ordering\u2026";try{let f=await fetch(my,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,ship_to:O("wc-lockbox_mailing_address")||e.deal_address||"",recipient_name:O("wc-lockbox_recipient_name"),recipient_phone:O("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"});if(f.ok){let E=await f.json().catch(()=>({}));_.textContent="Re-order Lockbox",_.disabled=!1,g&&(g.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,g.style.color=n.emerald),k&&(k.innerHTML=Id(typeof E.price=="number"?E.price:void 0),k.style.display="block")}else{let E="";try{E=String((await f.json()).reason??"")}catch{}_.textContent="Order Lockbox",_.disabled=!1,Xt(ks(E),"err")}}catch(f){m.warn("[welcome-call] order lockbox failed:",f),_.textContent="Order Lockbox",_.disabled=!1,Xt("Couldn't reach the lockbox handler. Try again.","err")}});let h=document.getElementById("wc-order-photos");h?.addEventListener("click",async()=>{let g=document.getElementById("wc-op-date"),k=wn(g);if(!k){d("Pick a shoot date first.");return}if(!a){d(or);return}if(!window.confirm(Ls(a.tenant_price)))return;l();let f=document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30",E=document.getElementById("wc-op-aerial")?.checked??!1,v=document.getElementById("wc-op-time")?.value||"anytime";h.disabled=!0,h.textContent="Ordering\u2026";try{let x=await fetch(by,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,package:{photocount:Number(f),aerial:E},quoted_price:a.tenant_price,scheduling_date:k,scheduling_time:v,must_have_shots:O("wc-op-shots"),access_extra:O("wc-op-access")}),credentials:"omit"});if(x.ok){let w=await x.json().catch(()=>({})),T=String(w.hj_order_id??""),L=document.getElementById("wc-op-form");L&&(L.innerHTML=As("wc-op",T,Number(w.tenant_price??a.tenant_price)),document.getElementById("wc-op-done")?.addEventListener("click",()=>{L.innerHTML=`<span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${n.emerald};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered \u2014 HomeJab #${pe(T)}</span>`}));return}if(x.status===409){let w=null;try{let T=await x.json();T.reason==="reprice"&&typeof T.tenant_price=="number"&&(w=T.tenant_price)}catch{}if(w!==null){a={tenant_price:w};let T=document.getElementById("wc-op-total");T&&(T.innerHTML=rr(w)),d(Ss(w))}else d("HomeJab's price just changed. Refresh and try again.");h.disabled=!1,h.textContent="Order Photos";return}let $="",C;try{let w=await x.json();$=String(w.reason??""),C=w.refunded}catch{}h.disabled=!1,h.textContent="Order Photos",d(Es($,C))}catch(x){m.warn("[welcome-call] order photos failed:",x),h.disabled=!1,h.textContent="Order Photos",d("Couldn't reach the photo order handler. Try again.")}})},Od=async(e,t)=>{eo();let o=document.createElement("div");o.id=tr,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${u.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:e,tenant_id:t};try{let a=await fetch(`${cy}?tc_opp_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let s=await a.json();r={...s,opp_id:s.opp_id||e,tenant_id:t}}else m.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){m.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=t,Oy(r)};var Ln="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",By=`${Ln}/tc/confirm-photo-appointment`,Hy=`${Ln}/tc/order-lockbox`,Ry=`${Ln}/tc/order-photos`,Dy=`${Ln}/tc/welcome-call-prefill`,Is="ws-crm-opp-action-bar",Hd="ws-crm-opp-overflow",Rd="ws-crm-opp-action-menu",Cn="ws-crm-opp-action-popover",Dd="ws-crm-reorder-lockbox-modal",Fd=".hr-card.hr-modal.crm-opportunities-modal",Fy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,zy=/\/v2\/location\/([A-Za-z0-9]+)/,zd="Welcome Call Needed",Os="Scheduling Photos",Nd="Photos Scheduled",Ny=[zd,Os,Nd,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],qd=()=>{let e=window.location.pathname,t=e.match(Fy);if(!t)return null;let o=e.match(zy);return o?{oppId:t[1],locationId:o[1]}:null},qy=()=>{let e=document.querySelector(Fd);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(Ny.includes(r))return r}return null},Me=()=>{document.getElementById(Rd)?.remove(),document.getElementById(Cn)?.remove(),document.getElementById(Dd)?.remove()},ro=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ft=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${y.md};
    background: ${n.graphite};
    border: 1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${t==="ok"?n.emerald:n.crimson};
    font-family: ${u.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},jy=e=>{Od(e.oppId,e.locationId)},Uy=async(e,t,o)=>{let r=await fetch(Hy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,contact_id:t.contact_id||"",property_record_id:t.property_record_id||"",deal_address:t.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"});if(r.ok){let s;try{let i=await r.json();typeof i.price=="number"&&(s=i.price)}catch{}return{ok:!0,reason:"",price:s}}let a="";try{a=String((await r.json()).reason??"")}catch{}return{ok:!1,reason:a}},Wy=(e,t)=>{Me();let o=document.createElement("div");o.id=Dd,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${u.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,i=t.lockbox_mailing_address||t.deal_address||"";r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${s}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${ro(t.lockbox_recipient_name)}" />
    <label style="${s}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${ro(t.lockbox_recipient_phone)}" />
    <label style="${s}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${ro(i)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${u.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${ae}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let d=()=>o.remove();o.addEventListener("click",c=>{c.target===o&&d()}),document.getElementById("wsrl-cancel")?.addEventListener("click",d);let l=document.getElementById("wsrl-submit");l?.addEventListener("click",async()=>{let c=document.getElementById("wsrl-name")?.value.trim()||"",p=document.getElementById("wsrl-phone")?.value.trim()||"",b=document.getElementById("wsrl-address")?.value.trim()||"";if(!c||!b){ft("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){l.disabled=!0,l.textContent="Ordering\u2026";try{let _=await Uy(e,t,{recipient_name:c,recipient_phone:p,ship_to:b});_.ok?(r.innerHTML=Pd("wsrl",_.price),r.querySelector("#wsrl-done")?.addEventListener("click",d)):(l.disabled=!1,l.textContent="Order Lockbox",ft(ks(_.reason),"err"))}catch(_){m.warn("[action-bar] reorder lockbox failed:",_),l.disabled=!1,l.textContent="Order Lockbox",ft("Couldn't reach the lockbox handler. Try again.","err")}}})},jd=async e=>{Me();let t={};try{t=await fetch(`${Dy}?tc_opp_id=${encodeURIComponent(e.oppId)}&tenant_id=${encodeURIComponent(e.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}Wy(e,t)},Gy=(e,t)=>{Me();let o=document.createElement("div");o.id=Cn;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `,o.innerHTML=`
    <style>#${Cn} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${ae} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),s=o.querySelector("#wsap-vendor"),i=o.querySelector("#wsap-confirm");i?.addEventListener("click",async()=>{if(!a?.value){ft("Pick the booked date and time first.","err");return}i.textContent="Booking\u2026",i.style.opacity="0.8";try{(await fetch(By,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:s?.value?.trim()||null}),credentials:"omit"})).ok?(Me(),ft("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(i.textContent="Confirm & advance",i.style.opacity="1",ft("Booking failed \u2014 try again.","err"))}catch(l){m.warn("[action-bar] confirm photo failed:",l),i.textContent="Confirm & advance",i.style.opacity="1",ft("Couldn't reach the booking handler. Try again.","err")}});let d=l=>{let c=l.target;!o.contains(c)&&!t.contains(c)&&(Me(),document.removeEventListener("click",d))};window.setTimeout(()=>document.addEventListener("click",d),0)},Ky=(e,t)=>{Me();let o=document.createElement("div");o.id=Cn;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 320px; max-width: 340px;
    max-height: calc(100vh - 90px); overflow-y: auto;
    padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `;let a=`width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${u.sans};font-size:12px;`,s=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,i=ar.map((v,x)=>`<label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wsop-photocount" value="${v.value}" ${x===1?"checked":""}><span id="wsop-pkg-label-${v.value}">${ro(v.label)}</span></label>`).join(""),d=xs.map(v=>`<option value="${ro(v.value)}" ${v.value==="anytime"?"selected":""}>${ro(v.label)}</option>`).join("");o.innerHTML=`
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Order Photos \u2014 HomeJab</div>
    <div id="wsop-form">
      <label style="${s}">Package</label>
      <div style="margin:2px 0 10px;">${i}</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wsop-aerial"><span id="wsop-aerial-label">+ Aerial photos</span></label>
      <label style="${s}">Shoot date</label>
      ${xn("wsop-date",a)}
      <label style="${s}">Time window</label>
      <select id="wsop-time" style="${a}">${d}</select>
      <label style="${s}">Must-have shots</label>
      <textarea id="wsop-shots" rows="2" style="${a}resize:vertical;" placeholder="e.g. curb appeal, kitchen island, primary suite"></textarea>
      <label style="${s}">Access notes (beyond the lockbox code on file)</label>
      <input id="wsop-access" type="text" style="${a}" placeholder="Optional \u2014 pets, gate code, parking\u2026" />
      <div id="wsop-total" style="font-size:11px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wsop-error" style="display:none;font-size:11px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:7px 9px;margin:2px 0 12px;line-height:1.4;"></div>
      <button id="wsop-submit" type="button" disabled style="${ae} width:100%; justify-content:center; opacity:0.5;">Order Photos</button>
    </div>
  `,document.body.appendChild(o),kn("wsop-date");let l=null,c=null,p=0,b=v=>{let x=o.querySelector("#wsop-submit");x&&(x.disabled=v,x.style.opacity=v?"0.5":"1")},_=v=>{let x=o.querySelector("#wsop-error");x&&(x.textContent=v,x.style.display="block")},h=()=>{let v=o.querySelector("#wsop-error");v&&(v.style.display="none",v.textContent="")},g=()=>{let v=Number(o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30"),x=o.querySelector("#wsop-aerial")?.checked??!1;ar.forEach(T=>{let L=o.querySelector(`#wsop-pkg-label-${T.value}`);L&&(L.textContent=Ts(T.value,l))});let $=o.querySelector("#wsop-aerial-label");$&&($.textContent=Cs(v,l));let C=o.querySelector("#wsop-total"),w=l?.[to(v,x)];typeof w=="number"?(c={tenant_price:w},C&&(C.innerHTML=rr(w)),b(!1)):(c=null,C&&(C.textContent=l?"":"Getting price\u2026"),b(!0))},k=async()=>{let v=++p;l=null,h(),g();let x=await $s(e.locationId);if(v===p)if(x.ok&&x.menu)l=x.menu,g();else{l=null;let $=o.querySelector("#wsop-total");$&&($.textContent=""),_(or),b(!0)}};o.querySelectorAll('input[name="wsop-photocount"]').forEach(v=>{v.addEventListener("change",g)}),o.querySelector("#wsop-aerial")?.addEventListener("change",g),k();let f=o.querySelector("#wsop-submit");f?.addEventListener("click",async()=>{let v=o.querySelector("#wsop-date"),x=wn(v);if(!x){_("Pick a shoot date first.");return}if(!c){_(or);return}if(!window.confirm(Ls(c.tenant_price)))return;h();let $=o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30",C=o.querySelector("#wsop-aerial")?.checked??!1,w=o.querySelector("#wsop-time")?.value||"anytime",T=o.querySelector("#wsop-shots")?.value.trim()||"",L=o.querySelector("#wsop-access")?.value.trim()||"";f.disabled=!0,f.textContent="Ordering\u2026";try{let A=await fetch(Ry,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,package:{photocount:Number($),aerial:C},quoted_price:c.tenant_price,scheduling_date:x,scheduling_time:w,must_have_shots:T,access_extra:L}),credentials:"omit"});if(A.ok){let j=await A.json().catch(()=>({})),R=o.querySelector("#wsop-form");R&&(R.innerHTML=As("wsop",String(j.hj_order_id??""),Number(j.tenant_price??c.tenant_price)),o.querySelector("#wsop-done")?.addEventListener("click",()=>Me()));return}if(A.status===409){let j=null;try{let R=await A.json();R.reason==="reprice"&&typeof R.tenant_price=="number"&&(j=R.tenant_price)}catch{}if(j!==null){c={tenant_price:j};let R=o.querySelector("#wsop-total");R&&(R.innerHTML=rr(j)),_(Ss(j))}else _("HomeJab's price just changed. Refresh and try again.");f.disabled=!1,f.textContent="Order Photos";return}let G="",U;try{let j=await A.json();G=String(j.reason??""),U=j.refunded}catch{}f.disabled=!1,f.textContent="Order Photos",_(Es(G,U))}catch(A){m.warn("[action-bar] order photos failed:",A),f.disabled=!1,f.textContent="Order Photos",_("Couldn't reach the photo order handler. Try again.")}});let E=v=>{let x=v.target;!o.contains(x)&&!t.contains(x)&&(Me(),document.removeEventListener("click",E))};window.setTimeout(()=>document.addEventListener("click",E),0)},Vy=(e,t)=>{Me();let o=document.createElement("div");o.id=Rd;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${u.sans};
  `;for(let s of e){let i=document.createElement("div");i.textContent=s.label,i.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${y.sm};cursor:pointer;`,i.addEventListener("mouseenter",()=>i.style.background=n.steel),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",d=>{d.stopPropagation(),s.onClick()}),o.appendChild(i)}document.body.appendChild(o);let a=s=>{let i=s.target;!o.contains(i)&&!t.contains(i)&&(Me(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},sr=(e,t)=>{let o=document.createElement("button");return o.type="button",t==="primary"?o.style.cssText=ae:o.style.cssText=H,o.textContent=e,o},Yy=()=>{let e=sr("\u22EE","ghost");return e.style.lineHeight="1",e},Jy=(e,t)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",t===zd){let r=sr("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>jy(e)),o.appendChild(r),o}if(t===Os){let r=sr("Order Photos","ghost");r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Order Photos</span>`,r.addEventListener("click",()=>Ky(e,r)),o.appendChild(r);let a=sr("Confirm Photos","ghost");return a.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,a.addEventListener("click",()=>Gy(e,a)),o.appendChild(a),o}if(t===Nd){let r=sr("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void jd(e)),o.appendChild(r),o}return null},Qy=(e,t)=>{let o=[];if(t===Os&&(o=[{label:"Re-order Lockbox",onClick:()=>void jd(e)}]),!o.length)return null;let r=document.createElement("span");r.id=Hd,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=Yy();return a.addEventListener("click",s=>{s.stopPropagation(),Vy(o,a)}),r.appendChild(a),r},Zy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Xy=async()=>{for(let e of Zy)try{let t=await I(e,{timeoutMs:1200});if(t)return t}catch{}return null},$n=()=>{document.getElementById(Is)?.remove(),document.getElementById(Hd)?.remove(),Me()},Tn=!1,Bs=async()=>{if(!Tn){Tn=!0;try{let e=qd();if(!e){$n();return}let t=N();if(t===null)return;if(t!=="Transaction Coordination"){$n();return}let o=qy(),r=document.getElementById(Is);if(r&&r.dataset.oppId===e.oppId&&r.dataset.stage===(o??""))return;let a=Jy(e,o);if(!a){$n();return}let s=await Xy();if(!s)return;$n();let i=Y(s),d=document.createElement("span");d.id=Is,d.dataset.oppId=e.oppId,d.dataset.stage=o??"",d.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",d.appendChild(a),i.appendChild(d);let l=Qy(e,o);l&&i.appendChild(l),ev(e.oppId)}catch(e){m.error("[action-bar] ensureBar threw:",e)}finally{Tn=!1}}},ir=null,Ps=null,Ms,Bd=()=>{ir?.disconnect(),ir=null,Ps=null},ev=e=>{if(ir&&Ps===e)return;Bd();let t=document.querySelector(Fd);t&&(Ps=e,ir=new MutationObserver(()=>{let o=qd();if(!o||o.oppId!==e){Bd();return}Ms===void 0&&(Ms=window.setTimeout(()=>{Ms=void 0,Bs()},250))}),ir.observe(t,{childList:!0,subtree:!0}))},tv=()=>{V("opp-action-bar",".crm-opportunities-modal .ui-modal-heading",()=>{Tn||Bs()})},Ud=()=>{tv(),Bs()};var ov="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Hs=null,Wd=null,Gd=async()=>{let e=Q(),t=P();if(!e||!t)return null;if(Hs&&Wd===e)return Hs;try{let a=(await(await fetch(ov,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(i=>i.id===t);if(!a)return null;let s={name:[a.first_name,a.last_name].filter(Boolean).join(" ").trim(),email:(a.email??"").trim(),phone:(a.phone??"").trim(),role:(a.roles??[])[0]?.display??""};return Hs=s,Wd=e,s}catch(o){return m.warn("[current-rep] roster load failed",o),null}};var We="ws-support-modal",Kd="ws-support-toast",rv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",Vd="ws-support-submitter-name",Yd="ws-support-submitter-email",Jd="ws-support-submitter-role",nv=["Bug","Feature Request","Question","Billing","Onboarding Help"],xt=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),av=(e,t="success",o)=>{let r=document.getElementById(Kd);r&&r.remove();let a=document.createElement("div");a.id=Kd;let s=t==="success"?n.emerald:n.crimson;a.style.cssText=`
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
    <div style="font-weight: 500;">${xt(e)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${xt(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},Xd=()=>{document.getElementById(We)?.remove();let e=(localStorage.getItem(Vd)??"").trim(),t=(localStorage.getItem(Yd)??"").trim(),o=(localStorage.getItem(Jd)??"").trim(),r={category:null,title:"",description:"",submitterName:e,submitterEmail:t,submitterRole:o},a=document.createElement("div");a.id=We,a.style.cssText=`
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
  `;let i=d=>`
    <button type="button" data-category="${xt(d)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.md};
      padding: 12px 10px; cursor: pointer; font-family: ${u.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${xt(d)}</button>
  `;s.innerHTML=`
    <style id="ws-support-modal-style">
      /* Muted placeholder ("helper") text inside every field. !important +
         id-scope beats the VAULT theme's global "input::placeholder { coolGray
         !important }" rule (theme-stylesheet.ts ~L945). */
      #${We} input::placeholder,
      #${We} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      /* Kill Chrome's autofill wash on Name/Email (the gray box): keep the field
         obsidian and the text bone even when the browser autofills it. */
      #${We} input:-webkit-autofill,
      #${We} input:-webkit-autofill:hover,
      #${We} input:-webkit-autofill:focus,
      #${We} input:-webkit-autofill:active {
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
      ${nv.map(i).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" autocomplete="off" value="${xt(e)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" autocomplete="off" value="${xt(t)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" autocomplete="off" value="${xt(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${u.sans}; font-size: 13px;">
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
  `,a.appendChild(s),document.body.appendChild(a),Mt(s),Gd().then(d=>{if(!d||!document.getElementById(We))return;let l=(c,p)=>{let b=s.querySelector(c);b&&!b.value.trim()&&p&&(b.value=p)};l("#ws-support-name",d.name),l("#ws-support-email",d.email),l("#ws-support-role",d.role)}),a.addEventListener("click",d=>{d.target===a&&a.remove()}),s.querySelectorAll(".ws-support-tile").forEach(d=>{d.addEventListener("mouseenter",()=>{d.dataset.selected!=="true"&&(d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow)}),d.addEventListener("mouseleave",()=>{d.dataset.selected!=="true"&&(d.style.borderColor=n.steel,d.style.background=n.steel)}),d.addEventListener("click",()=>{r.category=d.dataset.category||null,s.querySelectorAll(".ws-support-tile").forEach(l=>{l===d?(l.dataset.selected="true",l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow,l.style.color=n.emeraldBright):(l.dataset.selected="false",l.style.borderColor=n.steel,l.style.background=n.steel,l.style.color=n.bone)})})}),s.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let d=s.querySelector("#ws-support-err"),l=b=>{d&&(d.textContent=b)};if(l(""),r.title=(s.querySelector("#ws-support-title")?.value||"").trim(),r.description=(s.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(s.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(s.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(s.querySelector("#ws-support-role")?.value||"").trim(),!r.category){l("Pick a category at the top.");return}if(!r.title){l("Add a title \u2014 a short summary.");return}if(!r.description){l("Add a description so we know what you're seeing.");return}if(!r.submitterName){l("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){l("Add a valid email so we can reply.");return}let c=Q();if(!c){l("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(Vd,r.submitterName),localStorage.setItem(Yd,r.submitterEmail),r.submitterRole&&localStorage.setItem(Jd,r.submitterRole)}catch{}let p=s.querySelector("#ws-support-submit");p&&(p.disabled=!0,p.textContent="Submitting\u2026",p.style.opacity="0.7");try{let _=await(await fetch(rv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:c,category:r.category,title:r.title,description:r.description,submitter_user_id:P()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!_.ok){l(_.error||"Failed to submit ticket."),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1");return}a.remove();let h=_.ticket_short_id||"submitted";av(`Ticket ${h} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(b){l(`Network error: ${b.message}`),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1")}})},sv=["/support-ticket","ws-support-modal","ws-support"],iv=/\/custom-menu-link\//,Rs=!1,Qd=()=>{if(Rs||!iv.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return sv.some(i=>s.includes(i))});if(r){Rs=!0,m.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{Xd(),Rs=!1},50);return}e<10&&setTimeout(t,150)};t()},lv=e=>{if(!(e instanceof Element))return!1;let t=e.closest("a.custom-link");return!!t&&/^\s*Support\s*$/.test(t.textContent||"")},Zd=!1,ec=()=>{Zd||(Zd=!0,document.addEventListener("click",e=>{lv(e.target)&&(e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),m.info("[support-nav] intercepted Support click (capture) \u2014 opening modal in place, no GHL navigation"),Xd())},!0),ge(()=>setTimeout(Qd,50)),Qd(),m.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var tc="ws-phone-assignments-modal",oc="ws-phone-assignments-toast",dv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",cv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",pv=["ACQ","DISPO","TC"],ac="",et=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),mv=(e,t="success",o)=>{document.getElementById(oc)?.remove();let r=document.createElement("div");r.id=oc;let a=t==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${y.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${u.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${et(e)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${et(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},bv=(e,t,o)=>{let r=[`<option value="" ${o===ac?"selected":""}>\u2014 Unassigned \u2014</option>`,...t.map(a=>`<option value="${et(a)}" ${o===a?"selected":""}>${et(a)}</option>`)].join("");return`<select data-assign="${et(e)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${y.sm};
    font-family: ${u.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},uv=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,Fs=async e=>{document.getElementById(tc)?.remove();let t=e||Q(),o=document.createElement("div");o.id=tc,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${u.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${y.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",_=>{_.target===o&&o.remove()}),!t){let _=r.querySelector("#ws-pa-body");_&&(_.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${dv}?tenant_id=${encodeURIComponent(t)}`,{method:"GET",credentials:"omit"})).json()}catch(_){m.error("[phone-assignments] GET failed",_);let h=r.querySelector("#ws-pa-body");h&&(h.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${et(_.message)}). The backend may not be wired yet.</span>`);return}let s=a.teams&&a.teams.length?a.teams:pv,i=a.numbers??[],d={...a.config?.numberTeam??{}},l=_=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${_} found.</div>`,c=i.length?i.map(_=>`<div style="${uv}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${et(_.label||_.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${u.mono};">${et(_.e164)}</div>
            </div>
            ${bv(`num:${_.e164}`,s,d[_.e164]??ac)}
          </div>`).join(""):l("phone numbers"),p=_=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${_}</div>`,b=r.querySelector("#ws-pa-body");b&&(b.innerHTML=`
    ${p("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${y.md};overflow:hidden;">${c}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${u.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-family:${u.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,b.querySelectorAll("select[data-assign]").forEach(_=>{_.addEventListener("change",()=>{let h=_.getAttribute("data-assign")||"",[g,...k]=h.split(":"),f=k.join(":");g==="num"&&(_.value?d[f]=_.value:delete d[f])})}),b.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),b.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let _=b.querySelector("#ws-pa-err"),h=k=>{_&&(_.textContent=k)};h("");let g=b.querySelector("#ws-pa-save");g&&(g.disabled=!0,g.textContent="Saving\u2026",g.style.opacity="0.7");try{let f=await(await fetch(cv,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,numberTeam:d})})).json();if(!f.ok){h(f.error||"Save failed."),g&&(g.disabled=!1,g.textContent="Save",g.style.opacity="1");return}o.remove(),mv("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(k){h(`Network error: ${k.message}`),g&&(g.disabled=!1,g.textContent="Save",g.style.opacity="1")}}))},hv=["ws-phone-assignments","phone-assignments"],_v=/\/custom-menu-link\//,Ds=!1,rc=()=>{if(Ds||!_v.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return hv.some(i=>s.includes(i))});if(r){Ds=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),s=a?a[1]:void 0;m.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${s})`);try{history.back()}catch{}setTimeout(()=>{Fs(s),Ds=!1},50);return}e<10&&setTimeout(t,150)};t()},nc=!1,sc=()=>{if(nc)return;nc=!0,ge(()=>setTimeout(rc,50)),rc();let e=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&Fs()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void Fs(),m.info("[phone-assignments] mounted (route + hash + window trigger)")};var ic="powerDialerApp",yv=".dialer",vv='button[aria-label="Voice Calling"], button[title="Voice Calling"]',gv=".dial-item.dial-btn.dial-btn-enabled",no=e=>{for(let t of["pointerdown","mousedown","pointerup","mouseup","click"])try{e.dispatchEvent(new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window}))}catch{}},fv=e=>{let t=(e||"").match(/\+\d{10,15}/);return t?t[0]:null},zs=()=>{try{let t=window[ic]?._context?.provides?.emitter;if(t&&typeof t.emit=="function")return t}catch(e){m.debug("[dialer-bridge] getEmitter failed",e)}return null},ao=()=>document.querySelector(yv),Sn=()=>zs()!==null||ao()!==null?!0:!!window[ic],An=(e,t)=>{let o=zs();if(!o)return m.warn(`[dialer-bridge] no emitter; cannot emit ${e}`),!1;try{return o.emit(e,t),!0}catch(r){return m.error(`[dialer-bridge] emit ${e} threw`,r),!1}},lc=()=>{if(ao())return;let e=document.querySelector(vv);e?no(e):m.warn("[dialer-bridge] Voice Calling button not found")},xv=()=>{let e=document.querySelector(".number-list-container")||ao();if(!e)return[];let t=[];for(let o of e.querySelectorAll(".number")){let r=(o.innerText||"").replace(/\s+/g," ").trim();!r||/closest to the contact/i.test(r)||t.push({label:r,el:o})}return t},Ns=()=>{let e=document.querySelector(".number-config, .dialer-config");return e?fv(e.innerText):null},dc=(e,t)=>{if(Ns()===e)return!0;let o=zs();if(o)try{return o.emit("selectNumber",{phoneNumber:e,friendlyName:t||e}),!0}catch(r){m.warn("[dialer-bridge] selectNumber emit failed",r)}if(t){let r=document.querySelector(".number-config, .dialer-config");r&&no(r);let a=xv(),s=a.find(i=>i.label===t)||a.find(i=>i.label.includes(t));if(s)return no(s.el),!0}return m.warn(`[dialer-bridge] could not select Calling From ${e} (${t||""})`),!1},cc=e=>{let t=e.replace(/[^\d*#+]/g,"");if(An("sendDigitToDial",{value:t,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of t){let a=o.find(s=>s.querySelector(".dial-number")?.textContent?.trim()===r);a&&no(a)}},pc=()=>{let e=ao();if(!e)return m.warn("[dialer-bridge] no dialer present to place call"),!1;let t=e.querySelector(gv)||[...e.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let s=+a[1],i=+a[2],d=+a[3];return i>120&&i>s+40&&i>d+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return t?(no(t),!0):An("makeCall",{provider:"twilio"})};var qs=()=>{let e=ao();if(!e)return;let t=[...e.querySelectorAll("button, div, span")].find(o=>/^.{0,4}end call.{0,4}$/i.test((o.textContent||"").replace(/\s+/g," ").trim())&&(o.textContent||"").length<24);t?no(t.closest("button")||t):An("closeCallBox")},mc=()=>{An("closeCallBox")},bc=e=>{let t=!1,o=()=>{let s=ao()?.innerText||"",i=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(s)&&!/Call Summary|Call Ended/.test(s),d=/Call Summary|Call Ended/.test(s);if(i&&(t=!0),t&&d){t=!1;try{e()}catch(l){m.error("[dialer-bridge] onCallEnded cb threw",l)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var wv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",kv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",uc=["acq","dispo","tc"],dr={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},lr=null,hc=null,Ev=async(e=!1)=>{let t={numberTeam:{},numberLabel:{}},o=Q();if(!o)return t;if(!e&&lr&&hc===o)return lr;try{let a=await(await fetch(`${wv}?tenant_id=${encodeURIComponent(o)}`,{method:"GET",credentials:"omit"})).json(),s={};for(let i of a?.numbers??[])i?.e164&&(s[i.e164]=(i.label||"").trim());return lr={numberTeam:a?.config?.numberTeam??{},numberLabel:s},hc=o,lr}catch(r){return m.warn("[silo] config load failed",r),lr??t}},wt=null,_c=null,js=async(e=!1)=>{let t=Q(),o=P();if(!t||!o)return[];if(!e&&wt&&_c===t)return wt;try{let s=(await(await fetch(kv,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,action:"list"})})).json())?.roster?.find(i=>i.id===o);if(s){let i=s.role_keys??[];wt=uc.filter(d=>i.includes(d))}else St()?wt=[...uc]:wt=[];return _c=t,wt}catch(r){return m.warn("[silo] roster load failed",r),wt??[]}},vc=()=>`ws-pd-calling-as:${P()||"anon"}`,gc=e=>{try{localStorage.setItem(vc(),e)}catch{}},Us=async()=>{let e=await js();if(e.length===0)return null;if(e.length===1)return e[0];let t=null;try{t=localStorage.getItem(vc())}catch{}return t&&e.includes(t)?t:e[0]},yc=e=>{let t=(e||"").replace(/\D/g,"");return t.length===11&&t[0]==="1"?t.slice(1,4):t.length===10?t.slice(0,3):null},$v=(e,t)=>Object.entries(e).filter(([,o])=>o===t).map(([o])=>o),fc=async e=>{let t=await Us();if(!t)return m.debug("[silo] no active team for current rep; leaving GHL default"),null;let{numberTeam:o,numberLabel:r}=await Ev(),a=$v(o,t);if(!a.length)return m.debug(`[silo] ${t} has no numbers; leaving GHL default`),null;let s=yc(e),i=s?a.find(p=>yc(p)===s):void 0,d=i||a[0];if(!dc(d,r[d]||void 0))return m.warn(`[silo] could not issue Calling-From ${d} (dialer not ready?)`),null;m.info(`[silo] ${dr[t]}: calling ${e} from ${d}${i?" (local match)":" (pool default)"}`),await new Promise(p=>setTimeout(p,150));let c=Ns();return c&&c!==d&&m.warn(`[silo] caller-ID did not stick: wanted ${d} but header shows ${c} \u2014 GHL dialer DOM/event may have changed`),d};var Tv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",xc="data-ws-pd",wc="ws-crm-pd-panel",kc="ws-crm-pd-session",tt=e=>new Promise(t=>setTimeout(t,e)),cr=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Cv=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector(".crm-opportunities-card-wrapper"))return t;t=t.parentElement}return null},Lv=e=>{let t=[e,...Array.from(e.querySelectorAll("*"))];for(let o of t)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return e},Sv=e=>{let t=[],o=new Set;for(let r of Array.from(e.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),s=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!s||o.has(s))continue;let i=Array.from(r.querySelectorAll("[id]")).find(d=>/^[A-Za-z0-9]{18,22}$/.test(d.id));o.add(s),t.push({oppId:i?.id||"",contactId:s,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return t},Av=async e=>{let t=Cv(e);if(!t)return[];let o=Lv(t),r=-1;for(let a=0;a<60;a++){let s=t.querySelectorAll(".crm-opportunities-card-wrapper").length;if(s===r)break;r=s,o.scrollTop=o.scrollHeight,await tt(550)}return o.scrollTop=0,Sv(t)},Mv=async(e,t)=>{try{let r=await(await fetch(Tv,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})})).json();return r?.ok?{name:r.name||"",phone:r.phone||"",skip:!!r.skip}:null}catch(o){return m.warn("[bulk-dialer] resolvePhone failed",o),null}},Iv=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${u.sans};`,Gs=(e,t,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(wc)?.remove();let r=document.createElement("div");r.id=wc,r.style.cssText=Iv;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let s=t.map((k,f)=>`<label data-row="${f}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${f}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cr(k.name||k.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${cr(e)}</div>
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
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-size:13px;font-family:${u.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${y.md};min-height:120px;">${s||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${u.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${u.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",k=>{k.target===r&&r.remove()});let i=a.querySelector("#ws-pd-list"),d=a.querySelector("#ws-pd-count"),l=()=>{let k=a.querySelectorAll(".ws-pd-cb:checked").length;d&&(d.textContent=`${k} selected`)};l(),i?.addEventListener("change",l);let c=a.querySelector("#ws-pd-auto-bar"),p=a.querySelector("#ws-pd-auto"),b=a.querySelector("#ws-pd-auto-track"),_=a.querySelector("#ws-pd-auto-knob"),h=()=>{let k=!!p?.checked;b&&(b.style.background=k?n.emerald:n.steel),_&&(_.style.left=k?"20px":"2px"),c?.setAttribute("aria-checked",String(k))},g=()=>{p&&(p.checked=!p.checked,h())};c?.addEventListener("click",g),c?.addEventListener("keydown",k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),g())}),h(),a.querySelector("#ws-pd-search")?.addEventListener("input",k=>{let f=k.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach(E=>{let v=(E.textContent||"").toLowerCase();E.style.display=v.includes(f)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",k=>{let f=k.target.checked;a.querySelectorAll("[data-row]").forEach(E=>{if(E.style.display==="none")return;let v=E.querySelector(".ws-pd-cb");v&&(v.checked=f)}),l()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let k=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(E=>{let v=Number(E.getAttribute("data-i"));t[v]&&k.push(t[v])});let f=a.querySelector("#ws-pd-auto")?.checked??!0;r.remove(),k.length&&$c(e,k,f)})},$c=async(e,t,o)=>{let r=Q();if(!r)return;document.getElementById(kc)?.remove();let a={skip:!1,paused:!1,stopped:!1,advance:!1},s=document.createElement("div");s.id=kc,s.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${y.md};padding:14px 16px;color:${n.bone};font-family:${u.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(s);let i=(d,l,c)=>{s.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${u.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${cr(e)} \xB7 ${l+1} of ${t.length}</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cr(c)}</div>
      <div style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${cr(d)}</div>
      <div style="display:flex;gap:6px;">
        <button id="ws-pd-skip" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${y.sm};padding:6px;cursor:pointer;font-size:12px;">Skip</button>
        <button id="ws-pd-pause" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${y.sm};padding:6px;cursor:pointer;font-size:12px;">${a.paused?"Resume":"Pause"}</button>
        <button id="ws-pd-next" style="flex:1;background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:6px;cursor:pointer;font-size:12px;font-weight:600;">Call Next</button>
      </div>`,s.querySelector("#ws-pd-end")?.addEventListener("click",()=>{a.stopped=!0;try{qs()}catch{}s.remove()}),s.querySelector("#ws-pd-skip")?.addEventListener("click",()=>{a.skip=!0;try{qs()}catch{}}),s.querySelector("#ws-pd-pause")?.addEventListener("click",()=>{a.paused=!a.paused}),s.querySelector("#ws-pd-next")?.addEventListener("click",()=>{a.advance=!0})};for(let d=0;d<t.length&&!a.stopped;d++){let l=t[d];a.skip=!1,a.advance=!1,i("Resolving number\u2026",d,l.name);let p=!l.contactId||l.contactId==="__test__"?null:await Mv(r,l.contactId);if(a.stopped)break;if(p?.skip){i("Called in last 2h \u2014 skipping",d,p.name||l.name),await tt(1200);continue}let b=l._phone||p?.phone||"",_=p?.name||l.name;if(!b){i("No phone on file \u2014 skipping",d,l.name||p?.name||l.contactId),await tt(1400);continue}if(await fc(b),a.stopped)break;if(l.contactId&&l.contactId!=="__test__")try{let g=`/v2/location/${(window.location.pathname.match(/\/v2\/location\/([^/]+)/)||[])[1]||r}/contacts/detail/${l.contactId}`;window.location.pathname!==g&&(history.pushState({},"",g),window.dispatchEvent(new PopStateEvent("popstate")))}catch(h){m.debug("[bulk-dialer] screen-follow nav failed",h)}i(`Calling ${b}\u2026`,d,_);try{lc(),await tt(250),cc(b),await tt(250),pc()}catch(h){m.error("[bulk-dialer] dial failed",h)}if(await new Promise(h=>{let g=!1,k=()=>{g||(g=!0,window.clearInterval(E),f(),h())},f=bc(k),E=window.setInterval(()=>{(a.stopped||a.skip)&&k()},300)}),a.stopped)break;try{mc()}catch{}if(d<t.length-1)if(o)for(let h=5;h>0&&!a.stopped&&!a.advance;h--){for(i(`Next call in ${h}s\u2026`,d,_);a.paused&&!a.stopped&&!a.advance;)await tt(200);if(a.advance||a.stopped)break;await tt(1e3)}else for(i("Ready \u2014 press Call Next",d,_);!a.advance&&!a.stopped;)await tt(200)}a.stopped||(s.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${t.length} contact${t.length===1?"":"s"} dialed.</div>`,setTimeout(()=>s.remove(),5e3))},Ks='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Vs=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},Pv=()=>{if(Lt()!=="opportunity-list"||!Vs()||!Sn())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(t=>{if(t.querySelector(`[${xc}]`))return;let o=t.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute(xc,"1"),a.title=`Power Dialer \u2014 call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${y.pill};cursor:pointer;font-family:${u.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${Ks}<span>DIAL</span>`,a.addEventListener("click",async s=>{s.stopPropagation(),s.preventDefault();let i=a.querySelector("span"),d=i?.textContent||"DIAL";i&&(i.textContent="Loading\u2026"),a.style.opacity="0.7";try{let l=await Av(t);Gs(r,l)}catch(l){m.error("[bulk-dialer] harvest failed",l)}finally{i&&(i.textContent=d),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},so=null,Ws,Ec=!1,Tc=()=>{if(Ec)return;Ec=!0,window.WS_CRM_PD_TEST=t=>void $c("Verification",[{oppId:"",contactId:"__test__",name:`Test ${t}`,_phone:t}],!1);let e=()=>{Ws!==void 0&&window.clearTimeout(Ws),Ws=window.setTimeout(Pv,400)};ge(t=>{t==="opportunity-list"?(e(),so||(so=new MutationObserver(e),so.observe(document.body,{childList:!0,subtree:!0}))):so&&(so.disconnect(),so=null)})};var Cc="ws-crm-pd-contacts-btn",Ov=e=>new Promise(t=>setTimeout(t,e)),Bv=e=>{let t=e.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return t?`+1${t[1]}${t[2]}${t[3]}`:""},Hv=()=>document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0,Ys=(e,t)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(t){let l=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(l&&l.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||e.has(a))return;let s=(r?.textContent||"").replace(/\s+/g," ").trim(),i=Bv(o.textContent||""),d=s&&s!=="-"?s:i||a;e.set(a,{oppId:"",contactId:a,name:d,_phone:i||void 0})})},Rv=async e=>{let t=new Map;if(e)return Ys(t,!0),[...t.values()];let o=document.querySelector(".tabulator-tableholder");if(Ys(t,!1),!o)return[...t.values()];let r=-1,a=-1,s=0;for(let i=0;i<200&&(Ys(t,!1),t.size===a?s++:(s=0,a=t.size),!(i>0&&o.scrollTop===r&&s>=2));i++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await Ov(220);return o.scrollTop=0,[...t.values()]},Dv=()=>{if(Lt()!=="contact-list"||!Vs()||!Sn()||document.getElementById(Cc))return;let e=document.querySelector("#views-bar .bar");if(!e)return;let t=document.createElement("button");t.id=Cc,t.type="button",t.title="Power Dialer: call through this list, or the rows you've checked",t.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${y.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${u.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,t.innerHTML=`${Ks}<span>Power Dialer</span>`;let o=t.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=t.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),t.style.setProperty("border-color",n.emerald,"important"),t.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let s=t.querySelector("span"),i=s?.textContent||"Power Dialer";s&&(s.textContent="Loading\u2026"),t.style.opacity="0.7";try{let d=Hv(),l=await Rv(d);Gs(d?"Selected contacts":"Smart list",l,{one:"contact",many:"contacts"})}catch(d){m.error("[bulk-dialer-contacts] harvest failed",d)}finally{s&&(s.textContent=i),t.style.opacity="1"}}),e.appendChild(t)},io=null,Js,Lc=!1,Sc=()=>{if(Lc)return;Lc=!0;let e=()=>{Js!==void 0&&window.clearTimeout(Js),Js=window.setTimeout(Dv,400)};ge(t=>{t==="contact-list"?(e(),io||(io=new MutationObserver(e),io.observe(document.body,{childList:!0,subtree:!0}))):io&&(io.disconnect(),io=null)})};var Fv="ws-calling-as-chip",zv=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},Qs=!1,kt=null,Ac,Ic=0,Nv=3e4,qv=()=>{let e=document.querySelector(".hl_header--controls");if(!e)return null;let t=e.querySelector('button[aria-label*="Voice Calling" i], button[aria-label*="call" i]');if(!t)return null;let o=t;for(;o&&o.parentElement!==e;)o=o.parentElement;return o?{parent:e,before:o}:null},Zs=()=>{if(!kt||kt.isConnected)return;let e=qv();e&&e.parent.insertBefore(kt,e.before)},Mc=async()=>{if(!(Qs||kt)&&zv()){Qs=!0;try{let e=await js();if(!e.length)return;let t=await Us()??e[0],o=e.length>1,r=document.createElement("div");r.id=Fv,r.style.cssText="position:relative;display:inline-flex;align-items:center;margin:0 6px;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:7px;padding:5px 11px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${y.pill};color:${n.bone};font-family:${u.sans};font-size:11px;white-space:nowrap;cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${u.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${dr[t]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let s=i=>{let d=a.querySelector(".ws-ca-team");d&&(d.textContent=dr[i])};if(o){let i=document.createElement("div");i.style.cssText=`position:fixed;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;z-index:99999;`;let d=()=>{i.innerHTML="",e.forEach(l=>{let c=document.createElement("div"),p=l===t;c.style.cssText=`padding:9px 14px;font-family:${u.sans};font-size:13px;color:${p?n.emeraldBright:n.bone};cursor:pointer;background:${p?n.emeraldGlow:"transparent"};`,c.textContent=dr[l],c.addEventListener("mouseenter",()=>{l!==t&&(c.style.background=n.steel)}),c.addEventListener("mouseleave",()=>{l!==t&&(c.style.background="transparent")}),c.addEventListener("click",b=>{b.stopPropagation(),t=l,gc(l),s(l),d(),i.style.display="none"}),i.appendChild(c)})};d(),document.body.appendChild(i),a.addEventListener("click",l=>{if(l.stopPropagation(),i.style.display==="block"){i.style.display="none";return}let c=a.getBoundingClientRect();i.style.top=`${Math.round(c.bottom+6)}px`,i.style.left=`${Math.round(c.left)}px`,i.style.display="block"}),document.addEventListener("click",()=>{i.style.display="none"})}kt=r,Zs(),m.info(`[calling-as] chip mounted in header (roles=${e.join(",")}, active=${t}, multi=${o})`)}catch(e){m.error("[calling-as] build failed",e)}finally{Qs=!1,Ic=Date.now()}}},Pc=()=>{kt?Zs():Mc(),Ac===void 0&&(Ac=window.setInterval(()=>{kt?Zs():Date.now()-Ic>=Nv&&Mc()},1500))};var jv="#12161D",Uv="#EDEEF0",Oc=e=>{let o=getComputedStyle(e).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],s=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&s>=230},Bc=e=>{e.style.setProperty("background-color",jv,"important"),e.style.setProperty("color",Uv,"important")},Wv=()=>{for(let e of Array.from(document.body.children)){if(e.tagName!=="DIV")continue;let t=e;if(!(t.id||t.className)&&getComputedStyle(t).position==="fixed")return t}return null},Gv=e=>{Oc(e)&&Bc(e);for(let t of Array.from(e.querySelectorAll("*")))Oc(t)&&Bc(t)},Xs=null,pr=null,Rc=()=>{pr&&(pr.disconnect(),pr=null),Xs=null},Kv=e=>{if(Xs===e)return;Rc(),Xs=e;let t=!1,o=()=>{t=!1;try{Gv(e)}catch(a){m.debug("[dialer-theme] paint failed",a)}},r=()=>{t||(t=!0,requestAnimationFrame(o))};pr=new MutationObserver(r),pr.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),m.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},Hc=!1,Mn=()=>{if(Hc)return;Hc=!0;let e=()=>{let o=Wv();o?Kv(o):Rc()};e(),new MutationObserver(e).observe(document.body,{childList:!0})};var Vv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",Yv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",Jv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",zc="tc_closing_agent",Qv="tc_closing_office",Ie="ws-crm-closing-agent-picker-button",Nc="ws-crm-closing-agent-picker-modal",Zv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Xv=/\/v2\/location\/([A-Za-z0-9]+)/,ur=()=>{let e=window.location.pathname,t=e.match(Zv);if(!t)return null;let o=e.match(Xv);return{oppId:t[1],locationId:o?o[1]:null}},ai=async e=>{let t=await fetch(Vv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,query:e.query??"",contact_id:e.contactId??null,contact_type:e.contactType??null,limit:e.limit??20}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Dc=async e=>{let t=await fetch(Yv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,opp_id:e.oppId,field_key:e.fieldKey,value:e.value}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},eg=async(e,t)=>{try{let o=await fetch(Jv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,field_key:zc}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let s=await ai({tenantId:t,contactId:a,limit:1});if(!s.ok||!s.results.length)return null;let i=s.results[0];return{id:i.id,name:i.name,companyName:i.companyName??""}}catch(o){return m.warn("[closing-agent] fetchCurrent failed:",o),null}},Et=null,tg=60*60*1e3,si=e=>`ws-crm-to-cache:${e}`,qc=e=>{try{let t=window.localStorage.getItem(si(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>tg||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},jc=(e,t,o)=>{try{window.localStorage.setItem(si(e),JSON.stringify({contactId:t,contactName:o,ts:Date.now()}))}catch{}},og=e=>{try{window.localStorage.removeItem(si(e))}catch{}},ti="ws-crm-closing-agent-field-link",rg=()=>{let e=document.querySelector(".crm-opportunities-modal");e&&(e.querySelectorAll(`.${ti}`).forEach(t=>t.remove()),e.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(t=>{t.style.removeProperty("color"),t.style.removeProperty("caret-color"),t.style.removeProperty("visibility"),delete t.dataset.wsClosingAgentDecorated}))},ei=!1,ii=async e=>{if(ei)return;let t=Uc();if(!t)return;let o=(t.value||"").trim();if(!o){m.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){m.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(t.dataset.wsClosingAgentDecorated!==o){ei=!0;try{m.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await ai({tenantId:e,contactId:o,limit:1});if(!r.ok||!r.results.length){m.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];m.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),oi(a.id,a.name,e);let s=document.getElementById(Ie);if(s){ot(s,{status:"linked",contactName:a.name});let i=ur();i&&jc(i.oppId,a.id,a.name)}}catch(r){m.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{ei=!1}}},ng=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,Uc=()=>{let t=document.querySelectorAll("*"),o=[],r=[],a=[];for(let l of t){let c=(l.textContent||"").trim();ng.test(c)?o.push(l):c.length<80&&/Title\s+Officer/i.test(c)&&r.push(c);for(let p of["aria-label","placeholder","data-label","title","name","data-test"]){let b=l.getAttribute(p);b&&/Title\s+Officer/i.test(b)&&a.push({tag:l.tagName.toLowerCase(),attr:p,value:b})}}if(m.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&m.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&m.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((l,c)=>l.querySelectorAll("*").length-c.querySelectorAll("*").length);let i=o[0].parentElement,d=0;for(;i&&d<8;){let l=i.querySelector("input");if(l)return m.info(`[closing-agent] findInput: located input ${d} levels up from label`),l;i=i.parentElement,d+=1}return m.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},oi=(e,t,o)=>{let r=Uc();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==e){a&&r.parentElement?.querySelectorAll(`.${ti}`).forEach(i=>i.remove());{let s=r.parentElement;if(!s)return;r.dataset.wsClosingAgentDecorated=e,r.style.visibility="hidden",window.getComputedStyle(s).position==="static"&&(s.style.position="relative");let d=document.createElement("a");d.className=ti,d.href=`/v2/location/${o}/contacts/detail/${e}`,d.textContent=t,d.style.cssText=`
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
    `,d.addEventListener("mouseenter",()=>{d.style.textDecoration="underline"}),d.addEventListener("mouseleave",()=>{d.style.textDecoration="none"}),d.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),window.location.href=d.href}),s.appendChild(d)}}},In=()=>{document.getElementById(Nc)?.remove()},ag=e=>{In();let t=document.createElement("div");t.id=Nc,t.style.cssText=`
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
        ${H}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),s=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),t.addEventListener("click",c=>{c.target===t&&In()}),s?.addEventListener("click",In);let i,d="",l=async c=>{if(a&&c!==d){if(d=c,!c.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let p=await ai({tenantId:e.locationId,query:c,contactType:"closing_agent",limit:20});if(!p.ok||!Array.isArray(p.results)||p.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",p.results.forEach(b=>{let _=document.createElement("button");_.type="button",_.style.cssText=`
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
        `,_.innerHTML=`
          <div style="font-weight: 500;">${Pn(b.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${Pn(b.email||"(no email)")} \xB7 ${Pn(b.phone||"no phone")}
            ${b.companyName?` \xB7 ${Pn(b.companyName)}`:""}
          </div>
        `,_.addEventListener("mouseenter",()=>{_.style.background=n.slate}),_.addEventListener("mouseleave",()=>{_.style.background="transparent"}),_.addEventListener("click",()=>{In(),e.onPick(b)}),a.appendChild(_)})}catch(p){m.error("Closing Agent picker search failed",p),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let c=r.value;i!==void 0&&clearTimeout(i),i=window.setTimeout(()=>{l(c)},250)})},Pn=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),ot=(e,t)=>{let o=e.querySelector(".ws-top-label"),r=e.querySelector(".ws-top-dot"),a="Link Closing Agent",s=n.amber,i=n.bone,d="transparent",l=n.steel,c="pointer";switch(t.status){case"loading":a="Loading Closing Agent\u2026",s=n.coolGray,i=n.ash,c="wait";break;case"empty":a="Link Closing Agent",s=n.amber;break;case"linked":a=t.contactName?`Closing Agent: ${t.contactName}`:"Closing Agent: \u2713",s=n.emerald,d=n.emeraldGlow,l=n.emeraldBorder,i=n.emeraldBright;break;case"saving":a="Linking\u2026",s=n.coolGray,i=n.ash,c="wait";break}o&&(o.textContent=a),r&&(r.style.background=s,r.style.boxShadow=`0 0 6px ${s}`),e.style.background=d,e.style.borderColor=l,e.style.color=i,e.style.cursor=c},sg=(e,t)=>{let o=document.createElement("button");o.id=Ie,o.type="button",o.dataset.oppId=e,o.style.cssText=H,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};ot(o,r);let a=qc(e);return a&&(r={status:"linked",contactName:a.contactName},ot(o,r),Et={oppId:e,contactId:a.contactId,contactName:a.contactName,tenantId:t}),(async()=>{let i=await eg(e,t);i?(r={status:"linked",contactName:i.name},ot(o,r),Et={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},oi(i.id,i.name,t)):a||(r={status:"empty"},ot(o,r),Et?.oppId===e&&(Et=null),rg(),og(e))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||ag({oppId:e,locationId:t,onPick:async i=>{r={status:"saving"},ot(o,r);try{let d=await Dc({tenantId:t,oppId:e,fieldKey:zc,value:i.id});if(!d.ok)throw new Error(d.error??"Save failed");i.companyName&&i.companyName.trim()&&await Dc({tenantId:t,oppId:e,fieldKey:Qv,value:i.companyName.trim()}),r={status:"linked",contactName:i.name},ot(o,r),Et={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},jc(e,i.id,i.name),oi(i.id,i.name,t),kd(e),m.info(`Closing Agent linked: ${i.name} (${i.id})${i.companyName?` \u2014 Company: ${i.companyName}`:""}`)}catch(d){m.error("Closing Agent link failed",d),r={status:"empty"},ot(o,r)}}})}),o},ig=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],lg=async()=>{for(let e of ig)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},mr=!1,Bn=async()=>{if(!mr){mr=!0;try{await dg()}finally{mr=!1}}},dg=async()=>{let e=ur();if(!e||!e.locationId){document.getElementById(Ie)?.remove(),document.getElementById(`${Ie}-wrap`)?.remove(),On();return}let t=document.getElementById(Ie);if(t&&t.dataset.oppId===e.oppId){let l=N();l!==null&&l!=="Transaction Coordination"&&(t.remove(),document.getElementById(`${Ie}-wrap`)?.remove(),On());return}t&&(t.remove(),document.getElementById(`${Ie}-wrap`)?.remove());let o=N();if(o!==null&&o!=="Transaction Coordination")return;let r=await lg();if(!r||!(qc(e.oppId)!==null||Et!==null&&Et.oppId===e.oppId)&&await X()!=="Transaction Coordination")return;let s=ur();if(!s||s.oppId!==e.oppId||!s.locationId)return;let i=sg(e.oppId,s.locationId),d=document.createElement("span");d.id=`${Ie}-wrap`,d.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,d.appendChild(i),Y(r).appendChild(d),m.debug(`Mounted Closing Agent picker on opp ${e.oppId}`),cg(e.oppId),ii(s.locationId)},br=null,ri=null,ni=null,On=()=>{br?.disconnect(),br=null,ri=null,ni=null},cg=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(br&&ri===e&&ni===t||(On(),ri=e,ni=t,br=new MutationObserver(()=>{let o=ur();if(!o||o.oppId!==e||!o.locationId){On();return}document.getElementById(Ie)||Bn(),ii(o.locationId)}),br.observe(t,{childList:!0,subtree:!0})))},pg=()=>{V("closing-agent-picker",Z,()=>{!document.getElementById(Ie)&&!mr&&Bn()})},Fc,mg=()=>{Fc===void 0&&(Fc=window.setInterval(()=>{let e=ur();if(!e||!e.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(Ie)&&!mr&&(m.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),Bn()),ii(e.locationId)},2e3))},Wc=()=>{m.info("[closing-agent] mountClosingAgentPickerButton invoked"),pg(),mg(),Bn()};var bg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Ge="ws-crm-manage-team-cta",Kc="ws-crm-manage-team-modal",ug=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,Vc={manager:"Owner",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator",acq_manager:"ACQ Manager",dispo_manager:"Dispo Manager",tc_manager:"TC Manager"},hg={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson},acq_manager:{bg:n.emeraldGlow,fg:n.emerald},dispo_manager:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc_manager:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},Yc=()=>{let e=window.location.pathname.match(ug);return e?{tenantId:e[1]}:null},Rn=async e=>{let t=await fetch(bg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok){let o="";try{o=await t.text()}catch{}throw new Error(`Team.Manage HTTP ${t.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await t.json()},ke=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),rt=e=>ke(e),li="ws-crm-manage-team-toast",pi=(e,t="info",o=4e3)=>{document.getElementById(li)?.remove();let r=t==="success"?n.emerald:t==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=li,a.style.cssText=`
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
  `,a.textContent=e,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(li)===a&&a.remove()},o)},di=()=>{document.getElementById(Kc)?.remove()},_g=(e,t)=>{let o=hg[e]||{bg:n.slate,fg:n.ash};return`
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
    ">${ke(t)}</span>
  `},yg=(e,t)=>{let o=[e.first_name,e.last_name].filter(Boolean).join(" ")||"(no name)",r=e.roles.map(i=>_g(i.key,i.display)).join(""),a=t?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",s=t?"":'title="Owner-only action"';return`
    <div data-user-id="${rt(e.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${ke(o)}
          ${e.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${u.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${ke(e.email)}${e.phone?` &middot; ${ke(e.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${s}>
        <button class="ws-team-edit" data-email="${rt(e.email)}" data-user-id="${rt(e.id)}" data-name="${rt(o)}" data-current-roles="${rt(e.role_keys.join(","))}" style="${H} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${rt(e.email)}" data-name="${rt(o)}" data-role-count="${rt(String(e.role_keys.length))}" style="${H} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},vg=(e,t)=>e.length===0?`
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
  `+e.map(r=>yg(r,t)).join(""),Dn=async e=>{di();let t=document.createElement("div");t.id=Kc,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${u.sans};
  `,t.addEventListener("click",l=>{l.target===t&&di()});let o=document.createElement("div");o.style.cssText=`
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
      <button id="ws-team-close" style="${H} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 10px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),o.querySelector("#ws-team-close")?.addEventListener("click",di);let r;try{r=await Rn({tenant_id:e,action:"list"})}catch(l){let c=o.querySelector("#ws-team-content");c&&(c.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${ke(l.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let l=o.querySelector("#ws-team-content");l&&(l.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${ke(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=P(),s=!!(a&&r.roster.some(l=>l.id===a&&l.role_keys.includes("manager"))),i=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${u.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} owner</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",d=o.querySelector("#ws-team-content");if(d&&(d.innerHTML=i+vg(r.roster,s)),s)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{gg(e)}),o.querySelectorAll(".ws-team-edit").forEach(l=>{l.addEventListener("click",c=>{let p=c.currentTarget;fg(e,{email:p.dataset.email||"",name:p.dataset.name||"",currentRoles:(p.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(l=>{l.addEventListener("click",c=>{let p=c.currentTarget;xg(e,{email:p.dataset.email||"",name:p.dataset.name||"",roleCount:parseInt(p.dataset.roleCount||"0",10)})})});else{let l=o.querySelector("#ws-team-actions");l&&(l.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Owner. Owner role required to add/edit/remove team members.
        </div>
      `)}},gg=e=>{let t="ws-crm-manage-team-add-modal";document.getElementById(t)?.remove();let o=document.createElement("div");o.id=t,o.style.cssText=`
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
      <button id="ws-team-add-cancel" style="${H} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(s),document.body.appendChild(o),s.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),s.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let i=(s.querySelector("#ws-team-add-first")?.value||"").trim(),d=(s.querySelector("#ws-team-add-last")?.value||"").trim(),l=(s.querySelector("#ws-team-add-email")?.value||"").trim(),c=(s.querySelector("#ws-team-add-mobile")?.value||"").trim(),p=(s.querySelector("#ws-team-add-role")?.value||"").trim(),b=s.querySelector("#ws-team-add-error"),_=s.querySelector("#ws-team-add-submit");if(!i||!d||!l||!c||!p){b&&(b.textContent="All fields are required.");return}_&&(_.disabled=!0,_.textContent="Adding\u2026",_.style.opacity="0.7"),b&&(b.textContent="");try{let h=await Rn({tenant_id:e,action:"add",first_name:i,last_name:d,email:l,mobile:c,role:p,triggered_by_user_id:P()});if(!h.ok){b&&(b.textContent=h.error||"Failed to add employee"),_&&(_.disabled=!1,_.textContent="Add Employee",_.style.opacity="1");return}o.remove(),pi(`Added ${i} ${d} as ${Vc[p]||p}.`,"success"),await Dn(e)}catch(h){b&&(b.textContent=h.message),_&&(_.disabled=!1,_.textContent="Add Employee",_.style.opacity="1")}})},fg=(e,t)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
  `;let s=i=>{let d=t.currentRoles.includes(i)?"checked":"";return`
      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: ${n.slate}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; cursor: pointer; margin-bottom: 6px;">
        <input type="checkbox" data-role-key="${i}" ${d} style="cursor: pointer;" />
        <span style="font-size: 13px;">${ke(Vc[i])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${u.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${ke(t.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${ke(t.email)}</div>

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
      <button id="ws-team-edit-cancel" style="${H} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let i=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(c=>c.checked).map(c=>c.dataset.roleKey||"").filter(Boolean),d=a.querySelector("#ws-team-edit-error"),l=a.querySelector("#ws-team-edit-submit");if(i.length===0){d&&(d.textContent="Select at least one role. To fully offboard, use Remove instead.");return}l&&(l.disabled=!0,l.textContent="Saving\u2026",l.style.opacity="0.7"),d&&(d.textContent="");try{let c=await Rn({tenant_id:e,action:"update",email:t.email,roles:i,triggered_by_user_id:P()});if(!c.ok){d&&(d.textContent=c.error||"Failed to update roles"),l&&(l.disabled=!1,l.textContent="Save Roles",l.style.opacity="1");return}r.remove(),pi(`Updated roles for ${t.name}.`,"success"),await Dn(e)}catch(c){d&&(d.textContent=c.message),l&&(l.disabled=!1,l.textContent="Save Roles",l.style.opacity="1")}})},xg=(e,t)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${ke(t.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${ke(t.email)} will be removed from all ${t.roleCount} role${t.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${u.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${H} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${u.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let s=a.querySelector("#ws-team-remove-error"),i=a.querySelector("#ws-team-remove-submit");i&&(i.disabled=!0,i.textContent="Removing\u2026",i.style.opacity="0.7"),s&&(s.textContent="");try{let d=await Rn({tenant_id:e,action:"remove",email:t.email,triggered_by_user_id:P()});if(!d.ok){s&&(s.textContent=d.error||"Failed to remove"),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1");return}r.remove(),pi(`Removed ${t.name} from the team.`,"success"),await Dn(e)}catch(d){s&&(s.textContent=d.message),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1")}})},wg=89,kg=93,Eg=310,$g=34,Tg=14,Cg=14,Lg=3,Hn=e=>{let t=document.querySelector('iframe[name="settings-app"]');if(!t){e.style.right="24px";return}let o=t.getBoundingClientRect(),r=window.innerWidth-o.right+wg;e.style.right=`${Math.max(r,16)}px`},Sg=e=>{let t=document.createElement("button");return t.id=Ge,t.type="button",t.style.cssText=`
    position: fixed;
    top: ${kg}px;
    right: 24px;
    width: ${Eg}px;
    height: ${$g}px;
    padding: 0 ${Cg}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${Lg}px;
    font-family: ${u.sans};
    font-size: ${Tg}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,t.addEventListener("mouseenter",()=>{t.style.background=n.emeraldBright}),t.addEventListener("mouseleave",()=>{t.style.background=n.emerald}),t.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,t.addEventListener("click",()=>{Dn(e)}),Hn(t),setTimeout(()=>Hn(t),200),setTimeout(()=>Hn(t),800),Ag(),t},Gc=!1,Ag=()=>{Gc||(Gc=!0,window.addEventListener("resize",()=>{let e=document.getElementById(Ge);e instanceof HTMLButtonElement&&Hn(e)}))},ci=!1,Mg=()=>{if(!ci){ci=!0;try{let e=Yc();if(!e){document.getElementById(Ge)?.remove(),document.getElementById(`${Ge}-floater`)?.remove();return}let t=document.getElementById(Ge);if(t&&t.dataset.tenantId===e.tenantId)return;document.getElementById(`${Ge}-floater`)?.remove();let o=document.createElement("div");o.id=`${Ge}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=Sg(e.tenantId);r.dataset.tenantId=e.tenantId,o.appendChild(r),document.body.appendChild(o),m.debug(`[manage-team] mounted (floater) for tenant ${e.tenantId}`)}finally{ci=!1}}},Jc=()=>{if(!Yc()){document.getElementById(Ge)?.remove(),document.getElementById(`${Ge}-floater`)?.remove();return}Mg()};var Ig="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",Pg="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/add-contact",ui="ws-crm-prepare-contract-button",Qc="ws-crm-prepare-contract-menu",Ee="ws-crm-prepare-contract-modal",Zc="ws-crm-modal-date-style",Ke="https://services.leadconnectorhq.com",ap=()=>{if(document.getElementById(Zc))return;let e=document.createElement("style");e.id=Zc,e.textContent=`
    #${Ee} input[type="date"] { color-scheme: dark; }
    #${Ee} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
  `,document.head.appendChild(e)},hi="__WS_CRM_CAPTURED_AUTH",Og=50*60*1e3,vr=()=>{try{let e=localStorage.getItem(hi);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>Og?(localStorage.removeItem(hi),null):t:null}catch{return null}},Bg=e=>{try{localStorage.setItem(hi,JSON.stringify(e))}catch{}},po=()=>{let e=vr(),t=window;if(t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{},t.__WS_CRM_DIAG.authChecks=(t.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${t.__WS_CRM_DIAG.authChecks}]`,e?`present (captured ${Date.now()-e.capturedAt}ms ago, ${e.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!e)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(o["token-id"]=e.tokenId),o},Xc=(e,t)=>new Promise(o=>{let r=Date.now(),a=()=>{if((vr()?.capturedAt??0)>e)return o(!0);if(Date.now()-r>t)return o(!1);window.setTimeout(a,250)};a()}),co=async(e,t={},o=2)=>{let r=vr()?.capturedAt??0,a;try{a={...po(),...t.headers??{}}}catch(i){if(o>0&&await Xc(r,4e3))return co(e,t,o-1);throw i}let s=await fetch(e,{...t,headers:a});return s.status!==401||o<=0?s:await Xc(r,4e3)?co(e,t,o-1):s},ep=!1,Hg=()=>{if(ep)return;ep=!0;let e=window;e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let t=()=>{let l=vr();return!!(l&&l.authorization&&Date.now()-(l.capturedAt||0)<3e5)},o=(l,c,p)=>{e.__WS_CRM_DIAG.lastSeenHeaders={url:l,headers:c,source:p};let b=c.authorization||c.Authorization;if(!b){e.__WS_CRM_DIAG.fetchCalls+e.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${p} no-auth]`,{url:l.split("?")[0],headerKeys:Object.keys(c)});return}p==="fetch"?e.__WS_CRM_DIAG.fetchAuthSeen++:e.__WS_CRM_DIAG.xhrAuthSeen++;let _=c["token-id"]||c["Token-Id"]||void 0,h=vr()?.authorization;Bg({authorization:b,tokenId:_,capturedAt:Date.now()}),h!==b&&(e.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${p}] captured GHL auth from ${l.split("?")[0]} (${b.slice(0,24)}\u2026)`))},r=window.fetch;window.fetch=async function(...l){let c=typeof l[0]=="string"?l[0]:l[0]instanceof URL?l[0].toString():l[0].url,p=l[1]||{};if(c&&c.includes("services.leadconnectorhq.com")&&!t()){e.__WS_CRM_DIAG.fetchCalls++;let b=p.headers;!b&&l[0]instanceof Request&&(b=l[0].headers);let _={};if(b instanceof Headers)b.forEach((h,g)=>_[g.toLowerCase()]=h);else if(Array.isArray(b))b.forEach(([h,g])=>_[h.toLowerCase()]=g);else if(b&&typeof b=="object")for(let h of Object.keys(b))_[h.toLowerCase()]=b[h];o(c,_,"fetch")}return r.apply(this,l)};let a=XMLHttpRequest.prototype,s=a.open,i=a.setRequestHeader,d=a.send;a.open=function(l,c,...p){return this.__wsCrmUrl=c,this.__wsCrmHeaders={},s.call(this,l,c,...p)},a.setRequestHeader=function(l,c){return this.__wsCrmHeaders&&typeof l=="string"&&(this.__wsCrmHeaders[l.toLowerCase()]=c),i.call(this,l,c)},a.send=function(l){let c=this.__wsCrmUrl,p=this.__wsCrmHeaders;return c&&c.includes("services.leadconnectorhq.com")&&p&&!t()&&(e.__WS_CRM_DIAG.xhrCalls++,o(c,p,"xhr")),d.call(this,l)},m.debug("[prepare-contract] interceptors installed (fetch + XHR)")},sp=()=>{let e=z();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},Rg=e=>{let t=e.dataset;return t.tenantId&&t.contactId?{tenantId:t.tenantId,contactId:t.contactId,oppId:t.oppId||void 0}:t.tenantId&&t.oppId?{tenantId:t.tenantId,contactId:"",oppId:t.oppId}:sp()},Dg=e=>{let t=(e||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(t)||/assignment.*(contract|agreement)/i.test(t)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(t)||/purchase.*(contract|agreement)/i.test(t)?"PA":"passthrough"},_i=e=>/2\s*signers?/i.test(e||""),ip="__WS_CRM_TEMPLATES_CACHE_V1",Fg=24*60*60*1e3,tp=e=>{try{let t=window.localStorage.getItem(ip);if(!t)return null;let o=JSON.parse(t);return o.tenantId!==e||Date.now()-o.cachedAt>Fg?null:o.templates}catch{return null}},zg=(e,t)=>{try{let o={tenantId:e,templates:t,cachedAt:Date.now()};window.localStorage.setItem(ip,JSON.stringify(o))}catch{}},Ng=async e=>{let t=`${Ke}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(e)}&skip=0&limit=10`,o;try{o=await co(t,{method:"GET"})}catch(i){let d=tp(e);if(d)return m.info(`[prepare-contract] templates network failure, using cache (${d.length} items)`),d;throw i}if(!o.ok){let i=tp(e);if(i)return m.info(`[prepare-contract] templates fetch ${o.status}, using cache (${i.length} items)`),i;let d="";try{d=await o.text()}catch{}let l=d?` \u2014 ${d.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${l}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let s=a.map(i=>({id:(i._id??i.id??i.templateId)||"",name:i.name||i.title||"(unnamed template)",type:Dg(i.name||i.title||"")})).filter(i=>!!i.id);return s.length>0&&zg(e,s),s},qg=async(e,t)=>{let o=await co(`${Ke}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(d=>/acquisition/i.test(d.name));if(!a)throw new Error("No Acquisition pipeline found on tenant");let s=await co(`${Ke}/opportunities/search?location_id=${encodeURIComponent(e)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(t)}&status=open&limit=20`,{method:"GET"});if(!s.ok)throw new Error(`ACQ opp search ${s.status}`);return((await s.json()).opportunities||[]).map(d=>({id:d.id,name:d.name||"(unnamed opp)",propertyAddress:d.name||"",updatedAt:d.updatedAt||null})).sort((d,l)=>{let c=d.updatedAt?Date.parse(d.updatedAt):0;return(l.updatedAt?Date.parse(l.updatedAt):0)-c})},jg=async(e,t)=>{let o=await co(`${Ke}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(l=>/marketing\s*tracker/i.test(l.name));if(!a)throw new Error("No Marketing Tracker pipeline found on tenant");let s=await fetch(`${Ke}/opportunities/search?location_id=${encodeURIComponent(e)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(t)}&status=open&limit=20`,{method:"GET",headers:po()});if(!s.ok)throw new Error(`MT opp search ${s.status}`);return((await s.json()).opportunities||[]).map(l=>({id:l.id,name:l.name||"(unnamed opp)",propertyAddress:l.name||"",updatedAt:l.updatedAt||null})).sort((l,c)=>{let p=l.updatedAt?Date.parse(l.updatedAt):0;return(c.updatedAt?Date.parse(c.updatedAt):0)-p})},Ug=async e=>{let t=await fetch(Ig,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,template_id:e.templateId,template_type:e.templateType,opp_id:e.oppId,closing_date:e.closingDate,buyer_earnest_due_date:e.buyerEarnestDueDate,lender_source:e.lenderSource,triggered_by_user_id:e.userId,overrides:e.overrides,need_second_seller:e.needSecondSeller||void 0}),credentials:"omit"});if(!t.ok)throw new Error(`Contract.Stage HTTP ${t.status}`);return await t.json()},Wg=async(e,t,o)=>{let r=`${Ke}/proposals/templates/to-proposal/${e}/${t}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:po()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let s=await a.json(),i=s._id||s.id||s.proposal?._id||s.proposal?.id;if(!i)throw new Error("to-proposal returned no proposal id");return i},Gg=async(e,t)=>{let o=await fetch(`${Ke}/proposals/document/${t}?locationId=${encodeURIComponent(e)}`,{method:"GET",headers:po()});if(!o.ok){let s=await o.text().catch(()=>"");throw new Error(`GET proposal ${t} HTTP ${o.status} ${s.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},lp=async e=>{let t=await fetch(`${Ke}/contacts/${e}`,{method:"GET",headers:po()});if(!t.ok){let a=await t.text().catch(()=>"");throw new Error(`GET contact ${e} HTTP ${t.status} ${a.slice(0,200)}`)}let o=await t.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},Kg=(e,t,o)=>{let a="ENTER 2ND SELLER NAME",s=v=>v==="signature2"||/_s2$/.test(v),i=v=>/^seller2_name_/.test(v),d={},l=new Set,c=0,p=0,b=0,_=0,h=Array.isArray(e.pages)?e.pages:[],g=(v,x)=>{!v||typeof v!="object"||(x(v),(v.children||[]).forEach($=>g($,x)))},k=(v,x)=>{(v.children||[]).forEach($=>g($,x))},f=!1;h.forEach(v=>k(v,x=>{let $=x.component?.options;$&&$.entityName==="contacts"&&s($.fieldId||"")&&(f=!0)}));let E=new Set;return h.forEach(v=>{let x={};k(v,$=>{let C=$.component?.options;if(!C||C.entityName!=="contacts"||!$.responsiveStyles?.large?.position)return;let w=(C.fieldId||"").replace(/_s2$/,"").replace(/^signature2$/,"signature1"),T=`${$.type}|${w}`;(x[T]=x[T]||[]).push($)}),Object.values(x).forEach($=>{$.sort((w,T)=>(w.responsiveStyles?.large?.position?.top??0)-(T.responsiveStyles?.large?.position?.top??0));let C=[];$.forEach(w=>{let T=w.responsiveStyles?.large?.position?.top??0,L=C.find(A=>Math.abs(A.top-T)<=30);L?L.els.push(w):C.push({top:T,els:[w]})}),C.forEach(w=>w.els.sort((T,L)=>(T.responsiveStyles?.large?.position?.left??0)-(L.responsiveStyles?.large?.position?.left??0))),C.every(w=>w.els.length===2)?C.forEach(w=>E.add(w.els[1].id)):C.every(w=>w.els.length===1)&&C.length===2?E.add(C[1].els[0].id):C.forEach(w=>{w.els.length===2&&E.add(w.els[1].id)})})}),h.forEach(v=>{k(v,x=>{let $=x.component?.options;if(!$||!x.id)return;if(i($.fieldId||"")||typeof $.text=="string"&&$.text.trim()===a||typeof $.placeholder=="string"&&$.placeholder.trim()===a){$.text=o.contactName,l.add(x.id),b+=1;return}if($.entityName!=="contacts")return;let C=s($.fieldId||""),w=E.has(x.id);f&&C!==w&&(_+=1);let T=f?C:w;$.recipient=T?o.id:t,d[x.id]=$.recipient,T?p+=1:c+=1})}),(e.fillableFields||[]).forEach(v=>{v.entityType==="contacts"&&d[v.id]&&(v.recipient=d[v.id]),(l.has(v.id)||i(v.fieldId||"")||typeof v.value=="string"&&v.value.trim()===a)&&(v.value=o.contactName)}),{s1Count:c,s2Count:p,nameFills:b,usedGeometry:!f,disagreements:_}},Vg=async(e,t,o,r,a)=>{let s;try{s=await Gg(e,t)}catch(g){return{ok:!1,body:`fetchProposalDocument: ${g.message}`}}let i;try{i=await lp(o)}catch(g){return{ok:!1,body:`fetchContactBasics: ${g.message}`}}let d=`${i.firstName} ${i.lastName}`.trim()||i.email||o,l={id:o,firstName:i.firstName,lastName:i.lastName,email:i.email,contactName:d,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},b=[...(Array.isArray(s.recipients)?s.recipients:[]).filter(g=>g?.entityName!=="contacts"),l];if(a&&a.id!==o){b.push({id:a.id,firstName:a.firstName,lastName:a.lastName,email:a.email,contactName:a.contactName,isPrimary:!1,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"});let g=Kg(s,o,a);m.info(`[prepare-contract] second-seller assignment: S1=${g.s1Count} S2=${g.s2Count} nameFills=${g.nameFills}${g.usedGeometry?" (geometry fallback \u2014 template not hardened)":""}${g.disagreements>0?` \u2014 ${g.disagreements} marker/geometry disagreement(s), markers used`:""}`),g.s2Count===0&&m.warn("[prepare-contract] second seller attached as recipient but NO signer-2 elements were found to assign \u2014 template may need review")}let _={name:r||s.name,locationId:s.locationId||e,pages:s.pages||[],variables:s.variables||[],fillableFields:s.fillableFields||[],timezone:s.timezone||{},recipients:b,grandTotal:s.grandTotal},h=await fetch(`${Ke}/proposals/document/${t}`,{method:"PUT",headers:{...po(),"Content-Type":"application/json"},body:JSON.stringify(_)});if(!h.ok){let g=await h.text().catch(()=>"");return{ok:!1,status:h.status,body:g}}return{ok:!0}},Yg=(e,t)=>{let o=`/v2/location/${e}/payments/proposals-estimates/edit/${t}`;window.location.href=o},zn="__WS_CRM_PENDING_INSTRUCTIONS",Jg=60*1e3,Qg=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],Zg=e=>{let t=(e||"").toLowerCase();for(let o of Qg)if(t.includes(o.matches.toLowerCase()))return o;return null},Xg=(e,t,o)=>{try{let r={proposalId:e,title:t,bodyHtml:o,ts:Date.now()};localStorage.setItem(zn,JSON.stringify(r))}catch{}},ef=()=>{try{let e=localStorage.getItem(zn);if(!e)return null;let t=JSON.parse(e);return!t?.proposalId||!t?.title||!t?.bodyHtml||Date.now()-(t.ts||0)>Jg?(localStorage.removeItem(zn),null):t}catch{return null}},tf=()=>{try{localStorage.removeItem(zn)}catch{}},of=(e,t)=>{document.getElementById(Ee)?.remove();let o=document.createElement("div");o.id=Ee,o.style.cssText=`
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
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},rf=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,nf=()=>{let e=window.location.pathname.match(rf);if(!e)return;let t=e[1],o=ef();o&&o.proposalId===t&&(tf(),window.setTimeout(()=>{of(o.title,o.bodyHtml)},600))},op="ws-crm-prepare-contract-toast",ee=(e,t="info",o=4e3)=>{document.getElementById(op)?.remove();let r=document.createElement("div");r.id=op;let a=t==="error"?n.crimson:n.emerald;r.style.cssText=`
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
  `,r.textContent=e,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},rp=(e,t)=>new Promise(o=>{document.getElementById(Ee)?.remove();let r=document.createElement("div");r.id=Ee,r.style.cssText=`
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
    `;let s=l=>{if(!l)return"";try{return new Date(l).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}catch{return l}},i=e.map(l=>`
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${De(l.id)}" style="
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
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${ye(l.propertyAddress||l.name)}</div>
          ${l.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${ye(s(l.updatedAt))}</div>`:""}
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
    `,r.appendChild(a),document.body.appendChild(r);let d=l=>{r.remove(),o(l)};r.addEventListener("click",l=>{l.target===r&&d(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>d(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.borderColor=n.emerald,l.style.background=n.graphite}),l.addEventListener("mouseleave",()=>{l.style.borderColor=n.steel,l.style.background=n.slate}),l.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault();let p=l.dataset.oppId||"";p&&d(p)})})}),af=(e,t,o)=>new Promise(r=>{document.getElementById(Ee)?.remove();let a=document.createElement("div");a.id=Ee,a.style.cssText=`
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
    `,d=`
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
        <div style="flex: 1;"><label style="${i}">First name</label><input id="ws-pc-s2-first" type="text" style="${d}" /></div>
        <div style="flex: 1;"><label style="${i}">Last name</label><input id="ws-pc-s2-last" type="text" style="${d}" /></div>
      </div>
      <label style="${i}">Email <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0;">(required \u2014 contracts are emailed for signing)</span></label>
      <input id="ws-pc-s2-email" type="email" style="${d}" />
      <label style="${i}">Phone <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0;">(optional)</span></label>
      <input id="ws-pc-s2-phone" type="text" placeholder="+1..." style="${d}" />
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
    `,a.appendChild(s),document.body.appendChild(a);let l=b=>{a.remove(),r(b)};a.addEventListener("click",b=>{b.target===a&&l(!1)}),s.querySelector("#ws-pc-s2-cancel")?.addEventListener("click",()=>l(!1));let c=s.querySelector("#ws-pc-s2-err"),p=s.querySelector("#ws-pc-s2-save");p?.addEventListener("click",async()=>{let b=f=>(s.querySelector(f)?.value||"").trim(),_=b("#ws-pc-s2-first"),h=b("#ws-pc-s2-last"),g=b("#ws-pc-s2-email"),k=b("#ws-pc-s2-phone");if(!_&&!h){c&&(c.textContent="Enter at least a first or last name.");return}if(!g){c&&(c.textContent="Email is required \u2014 the contract is emailed to them for signing.");return}c&&(c.textContent=""),p&&(p.disabled=!0,p.textContent="Adding\u2026");try{let f=await fetch(Pg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,property_record_id:t,role:"seller_2",new_contact:{firstName:_,lastName:h,email:g,phone:k||void 0}})}),E=await f.json().catch(()=>({}));if(!f.ok||E?.ok===!1){c&&(c.textContent=E?.error||`Failed to add second seller (HTTP ${f.status}). You can add them from the Properties panel instead.`),p&&(p.disabled=!1,p.textContent="Add & Continue");return}m.info("[prepare-contract] second seller added + linked via gate modal"),l(!0)}catch(f){c&&(c.textContent=`Network error: ${f.message}`),p&&(p.disabled=!1,p.textContent="Add & Continue")}}),window.setTimeout(()=>s.querySelector("#ws-pc-s2-first")?.focus(),0)}),np=async(e,t,o,r,a,s)=>{if(s.second_seller)return s;if(s.second_seller_warning)return ee(`This property's second-seller link looks broken (${s.second_seller_warning}). Fix it from the contact's Properties panel, then try again.`,"error",9e3),m.warn(`[prepare-contract] 2-signer gate: ${s.second_seller_warning}`),null;if(!s.property_record_id)return ee("Couldn't resolve the property record for this deal, so the second seller can't be linked here. Add them from the contact's Properties panel (Add person \u2192 Second seller), then try again.","error",9e3),null;if(!await af(e,s.property_record_id,o.name))return m.info("[prepare-contract] 2-signer gate cancelled \u2014 aborting contract flow"),null;let d=await lo({tenantId:e,contactId:t,template:o,oppId:r,userId:a,needSecondSeller:o.type==="passthrough"?!0:void 0});return d.second_seller?d:(ee("Second seller was added but didn't resolve on re-check. Verify the property link in the Properties panel, then try again.","error",9e3),m.warn("[prepare-contract] 2-signer gate: re-stage still has no second_seller",d),null)},sf=({tenantId:e,contactId:t,template:o,staged:r})=>{document.getElementById(Ee)?.remove(),ap();let a=r.debug||{},s=typeof a.propertyAddress=="string"?a.propertyAddress:"",i=typeof a.sellerName=="string"?a.sellerName:"",d=typeof a.purchasePrice=="number"?a.purchasePrice:0,l=typeof a.emd=="number"?a.emd:0,c=typeof a.cashAtClose=="number"?a.cashAtClose:d-l,p=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),b=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),_=typeof a.additionalTerms=="string"?a.additionalTerms:"",h=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",g=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",k=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],f=document.createElement("div");f.id=Ee,f.style.cssText=`
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
  `,x=`
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
  `,$=`${x} text-align: right;`,C=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,w=`
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
  `,L=`
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
  `,A=M=>['<option value="">(unset)</option>'].concat(k.map(W=>`<option value="${De(W)}"${W===M?" selected":""}>${ye(W)}</option>`)).join("");E.innerHTML=`
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
      <div style="${w}">
        <div style="${v}">Property Address</div>
        <div style="${C}">${ye(s||"(set on Property record)")}</div>
      </div>
      <div style="${w}">
        <div style="${v}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${De(i)}" placeholder="Seller name" style="${x}" />
      </div>
      <div style="${w}">
        <div style="${v}">Purchase Price</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${d}" style="${$}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${v}">Earnest Deposit</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${l}" style="${$}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${v}">Cash at Close</div>
        <div style="${T}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${c}" style="${$}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${v}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${De(p)}" placeholder="e.g. 30" style="${x}" />
      </div>
      <div style="${w}">
        <div style="${v}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${De(b)}" placeholder="e.g. 10" style="${x}" />
      </div>
      <div style="${w}">
        <div style="${v}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${L}">${A(h)}</select>
      </div>
      <div style="${w}">
        <div style="${v}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${L}">${A(g)}</select>
      </div>
      <div style="${w} align-items: flex-start;">
        <div style="${v}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${x} resize: vertical; min-height: 60px; font-family: ${u.sans};">${ye(_)}</textarea>
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
  `,f.appendChild(E),document.body.appendChild(f);let G=E.querySelector("#ws-pc-purchase-price"),U=E.querySelector("#ws-pc-emd"),j=E.querySelector("#ws-pc-cash-at-close"),R=!1;j?.addEventListener("input",()=>{R=!0});let me=()=>{if(R)return;let M=Number(G?.value||0),W=Number(U?.value||0);j&&(j.value=String(Math.max(0,M-W)))};G?.addEventListener("input",me),U?.addEventListener("input",me);let be=()=>f.remove();f.addEventListener("click",M=>{M.target===f&&be()}),E.querySelector("#ws-pc-cancel")?.addEventListener("click",be);let te=E.querySelector("#ws-pc-submit"),ne=E.querySelector("#ws-pc-error");te?.addEventListener("click",async()=>{if(te){ne&&(ne.textContent=""),te.disabled=!0,te.textContent="Opening\u2026";try{let M=(E.querySelector("#ws-pc-seller-name")?.value||"").trim(),W=Number(G?.value||0),st=Number(U?.value||0),Ye=Number(j?.value||0),it=(E.querySelector("#ws-pc-days-to-close")?.value??"").trim(),$e=(E.querySelector("#ws-pc-inspection-days")?.value??"").trim(),go=(E.querySelector("#ws-pc-additional-terms")?.value??"").trim(),Ct=(E.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),fo=(E.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),ue={};if(M!==i&&(ue.sellerName=M),W!==d&&(ue.purchasePrice=W),st!==l&&(ue.emd=st),Ye!==c&&(ue.cashAtClose=Ye),it!==p&&(ue.daysToClose=it),$e!==b&&(ue.inspectionDays=$e),go!==_&&(ue.additionalTerms=go),Ct!==h&&(ue.currentOccupancy=Ct),fo!==g&&(ue.occupancyAtClose=fo),Object.keys(ue).length>0){m.info("[prepare-contract] PA modal submit with overrides:",ue),te.textContent="Saving\u2026";let ea=P(),xo=await lo({tenantId:e,contactId:t,template:o,userId:ea,overrides:ue});m.info("[prepare-contract] re-stage with overrides ok:",xo),te.textContent="Opening\u2026"}else m.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let he=s?`${s} - Purchase Agreement`:void 0,Xn=_i(o.name)&&r.second_seller||null;await gi(e,t,o,he,Xn)}catch(M){te.disabled=!1,te.textContent="Open Contract",ne&&(ne.textContent=M.message||"Failed to open contract."),m.warn("[prepare-contract] PA confirm submit failed:",M)}}})},lf=({tenantId:e,contactId:t,template:o,oppId:r,staged:a,userId:s,defaultClosingDate:i,defaultEMDDueDate:d})=>{document.getElementById(Ee)?.remove(),ap();let l=a.debug||{},c=typeof l.propertyAddress=="string"?l.propertyAddress:"",p=typeof l.sellerDisplay=="string"?l.sellerDisplay:"",b=typeof l.assignmentPrice=="number"?l.assignmentPrice:0,_=typeof l.buyerEMD=="number"?l.buyerEMD:0,h=typeof l.assignmentFee=="number"?l.assignmentFee:0,g=typeof l.acqPurchasePrice=="number"?l.acqPurchasePrice:0,k=typeof l.closingOffice=="string"?l.closingOffice:"",f=typeof l.buyerCompanyName=="string"?l.buyerCompanyName:"",E=i,v=d,x="",$=document.createElement("div");$.id=Ee,$.style.cssText=`
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
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
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
  `,T=`
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
  `,L=`${T} text-align: right;`,A=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,G=`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 0;
    border-bottom: 1px solid ${n.steel};
  `,U=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `;C.innerHTML=`
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
      <div style="${G}">
        <div style="${w}">Property Address</div>
        <div style="${A}">${ye(c||"(set on Property record)")}</div>
      </div>
      <div style="${G}">
        <div style="${w}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${De(p)}" placeholder="Seller name" style="${T}" />
      </div>
      <div style="${G}">
        <div style="${w}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${De(f)}" placeholder="Buyer's entity / LLC name" style="${T}" />
      </div>
      <div style="${G}">
        <div style="${w}">Assignment Price</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${b}" style="${L}" />
        </div>
      </div>
      <div style="${G}">
        <div style="${w}">Buyer Earnest Money</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${_}" style="${L}" />
        </div>
      </div>
      <div style="${G}">
        <div style="${w}">Assignment Fee</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${h}" style="${L}" />
        </div>
      </div>
      <div style="${G}">
        <div style="${w}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${De(k)}" placeholder="Title company" style="${T}" />
      </div>
      <div style="${G}">
        <div style="${w}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${De(E)}" style="${T}" />
      </div>
      <div style="${G}">
        <div style="${w}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${De(v)}" style="${T}" />
      </div>
      <div style="${G}">
        <div style="${w}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${u.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${T}" />
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
  `,$.appendChild(C),document.body.appendChild($);let j=C.querySelector("#ws-pc-assignment-price"),R=C.querySelector("#ws-pc-assignment-fee"),me=!1;R?.addEventListener("input",()=>{me=!0});let be=()=>{if(me)return;let W=Number(j?.value||0);R&&(R.value=String(Math.max(0,W-g)))};j?.addEventListener("input",be);let te=()=>$.remove();$.addEventListener("click",W=>{W.target===$&&te()}),C.querySelector("#ws-pc-cancel")?.addEventListener("click",te);let ne=C.querySelector("#ws-pc-submit"),M=C.querySelector("#ws-pc-error");ne?.addEventListener("click",async()=>{if(!ne)return;M&&(M.textContent="");let W=(C.querySelector("#ws-pc-seller-name")?.value||"").trim(),st=Number(j?.value||0),Ye=Number(C.querySelector("#ws-pc-buyer-emd")?.value||0),it=Number(R?.value||0),$e=(C.querySelector("#ws-pc-closing-office")?.value||"").trim(),go=(C.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),Ct=(C.querySelector("#ws-pc-closing-date")?.value||"").trim(),fo=(C.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),ue=(C.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!Ct){M&&(M.textContent="Closing Date is required.");return}ne.disabled=!0,ne.textContent="Opening\u2026";try{let he={};W!==p&&(he.sellerName=W),st!==b&&(he.assignmentPrice=st),Ye!==_&&(he.buyerEMD=Ye),it!==h&&(he.assignmentFee=it),$e!==k&&(he.closingOffice=$e),go!==f&&(he.buyerCompanyName=go);let Xn=Ct!==E||fo!==v||ue!==x,ea=Object.keys(he).length>0||Xn,xo=a;ea?(m.info("[prepare-contract] AA modal submit, re-staging with overrides:",he),ne.textContent="Saving\u2026",xo=await lo({tenantId:e,contactId:t,template:o,oppId:r,closingDate:Ct,buyerEarnestDueDate:fo,lenderSource:ue,userId:s,overrides:Object.keys(he).length>0?he:void 0}),m.info("[prepare-contract] AA re-stage ok:",xo),ne.textContent="Opening\u2026"):m.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let Pi=xo?.debug?.propertyAddress||c,pm=Pi?`${Pi} - Assignment Agreement`:void 0;await gi(e,t,o,pm),te()}catch(he){ne.disabled=!1,ne.textContent="Open Contract",M&&(M.textContent=he.message||"Failed to prepare contract."),m.warn("[prepare-contract] AA submit failed:",he)}})},lo=async e=>{m.info(`[prepare-contract] staging \u2014 template "${e.template.name}" (${e.template.type})`);let t=await Ug({tenantId:e.tenantId,contactId:e.contactId,templateId:e.template.id,templateType:e.template.type,oppId:e.oppId,closingDate:e.closingDate,buyerEarnestDueDate:e.buyerEarnestDueDate,lenderSource:e.lenderSource,userId:e.userId,overrides:e.overrides,needSecondSeller:e.needSecondSeller});if(m.info(`[prepare-contract] stage response: ok=${t.ok}`,t),!t.ok)throw new Error(t.error||"Contract.Stage returned not ok");return t},gi=async(e,t,o,r,a)=>{if(a&&!(a.email||"").trim()){ee(`Second seller ${a.contactName} has no email. Contracts are emailed for signing \u2014 add an email to their contact, then prepare the contract again.`,"error",9e3),m.warn(`[prepare-contract] aborting \u2014 second seller ${a.id} has no email`);return}let s=null;try{s=(await lp(t)).email||""}catch(c){m.warn("[prepare-contract] email pre-check fetch failed, proceeding:",c),s=null}if(s!==null&&!s.trim()){ee("This contact has no email. A contract is sent to the recipient for signing, so GHL needs an email to populate it. Add an email to the contact, then prepare the contract again.","error",9e3),m.warn(`[prepare-contract] aborting \u2014 contact ${t} has no email; not creating an empty proposal`);return}m.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${t}`);let i=await Wg(e,o.id,t);m.info(`[prepare-contract] proposal created: ${i}`),m.info(`[prepare-contract] attaching contact ${t} as primary signer${a?` + second seller ${a.id} (${a.contactName})`:""}${r?`, renaming to "${r}"`:""}`);let d=await Vg(e,i,t,r,a);d.ok?m.info(`[prepare-contract] contact${a?"s":""} attached to proposal ${i}`):(m.warn(`[prepare-contract] attach failed (status=${d.status??"n/a"}): ${d.body?.slice(0,300)??"no body"}`),ee(`Proposal created but couldn't auto-attach contact (HTTP ${d.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",d.body));let l=Zg(o.name);l&&!(a&&d.ok)&&(m.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),Xg(i,l.title,l.bodyHtml)),Yg(e,i)},df=async e=>{let t=Rg(e);if(!t){ee("Could not resolve contact context.","error");return}document.getElementById(Qc)?.remove();let o=document.createElement("div");o.id=Qc,o.style.cssText=`
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
    ">Loading templates\u2026</div>`,e.appendChild(o);let r=s=>{!o.contains(s.target)&&s.target!==e&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await Ng(t.tenantId)}catch(s){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${ye(s.message)}
      </div>`;return}if(a.length===0){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.ash}; font-size: 12px;">
        No proposal templates found on this tenant.
      </div>`;return}a.sort((s,i)=>{let d={PA:0,AA:1,passthrough:2};return d[s.type]!==d[i.type]?d[s.type]-d[i.type]:s.name.localeCompare(i.name)}),o.innerHTML="";for(let s of a){let i=document.createElement("button");i.type="button",i.style.cssText=`
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
    `;let d=s.type==="PA"?n.emerald:s.type==="AA"?n.blue:n.coolGray;i.innerHTML=`
      <div style="display: flex; align-items: baseline; gap: 8px;">
        <span style="
          font-family: ${u.mono};
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${d};
          flex-shrink: 0;
          min-width: 30px;
        ">${s.type==="passthrough"?"DOC":s.type}</span>
        <span style="flex: 1;">${ye(s.name)}</span>
      </div>`,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async l=>{l.stopPropagation(),l.preventDefault(),m.info(`[prepare-contract] template picked: ${s.name} (type=${s.type})`),o.remove(),document.removeEventListener("click",r,!0);let c=P();try{if(s.type==="AA"){let p;if(t.oppId)p=t.oppId,m.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${p} directly`);else{let E;try{E=await jg(t.tenantId,t.contactId)}catch(v){ee(`Failed to load buyer's MT opps: ${v.message}`,"error",6e3),m.warn("[prepare-contract] AA fetch opps failed:",v);return}if(E.length===0){ee("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if(E.length===1)p=E[0].id,m.info(`[prepare-contract] auto-selected MT opp ${p} (only one)`);else{m.info(`[prepare-contract] showing MT opp picker (${E.length} opps)`);let v=await rp(E,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!v){m.info("[prepare-contract] MT opp picker cancelled");return}p=v,m.info(`[prepare-contract] picked MT opp ${p}`)}}let b=E=>{let v=E.getFullYear(),x=String(E.getMonth()+1).padStart(2,"0"),$=String(E.getDate()).padStart(2,"0");return`${v}-${x}-${$}`},_=E=>{let v=new Date;return v.setDate(v.getDate()+E),b(v)},h=_(45),g=_(7);ee("Reading contract data\u2026","info",2500);let k;try{k=await lo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:p,closingDate:h,buyerEarnestDueDate:g,userId:c})}catch(E){ee(`Failed to prepare contract: ${E.message}`,"error",6e3),m.warn("[prepare-contract] AA stage failed:",E);return}let f=t.contactId||k.contact_id||"";if(!f){ee("Could not resolve buyer contact for this opp.","error",6e3);return}lf({tenantId:t.tenantId,contactId:f,template:s,oppId:p,staged:k,userId:c,defaultClosingDate:h,defaultEMDDueDate:g})}else if(s.type==="PA"){if(!t.contactId){ee("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let p;try{p=await qg(t.tenantId,t.contactId)}catch(h){ee(`Failed to load ACQ opps: ${h.message}`,"error",6e3),m.warn("[prepare-contract] PA fetch opps failed:",h);return}if(p.length===0){ee("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let b;if(p.length===1)b=p[0].id,m.info(`[prepare-contract] auto-selected ACQ opp ${b} (only one)`);else{m.info(`[prepare-contract] showing ACQ opp picker (${p.length} opps)`);let h=await rp(p,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!h){m.info("[prepare-contract] ACQ opp picker cancelled");return}b=h,m.info(`[prepare-contract] picked ACQ opp ${b}`)}ee("Reading contract data\u2026","info",2500);let _;try{_=await lo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:b,userId:c})}catch(h){ee(`Failed to prepare contract: ${h.message}`,"error",6e3),m.warn("[prepare-contract] PA stage failed:",h);return}if(_i(s.name)){let h=await np(t.tenantId,t.contactId,s,b,c,_);if(!h)return;_=h}sf({tenantId:t.tenantId,contactId:t.contactId,template:s,staged:_})}else{if(!t.contactId){ee("This template needs to be started from a contact page.","error",6e3);return}let p=null;if(_i(s.name)){let b;try{b=await lo({tenantId:t.tenantId,contactId:t.contactId,template:s,userId:c,needSecondSeller:!0})}catch(h){ee(`Failed to prepare contract: ${h.message}`,"error",6e3),m.warn("[prepare-contract] passthrough stage failed:",h);return}let _=await np(t.tenantId,t.contactId,s,void 0,c,b);if(!_)return;p=_.second_seller||null}ee(`Opening ${s.name}\u2026`,"info",2500);try{await gi(t.tenantId,t.contactId,s,void 0,p)}catch(b){ee(`Failed to open contract: ${b.message}`,"error",6e3),m.warn("[prepare-contract] passthrough failed:",b)}}}catch(p){m.warn("[prepare-contract] picker click handler failed:",p),ee(`Unexpected error: ${p.message}`,"error",6e3)}}),o.appendChild(i)}},dp=()=>{let e=document.createElement("button");return e.id=ui,e.type="button",e.style.cssText=`${H} position: relative; order: 5;`,e.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,e.addEventListener("mouseenter",()=>{e.style.borderColor=n.emerald}),e.addEventListener("mouseleave",()=>{e.style.borderColor=n.steel}),e.addEventListener("click",t=>{t.stopPropagation(),df(e)}),e},cf="ws-crm-contact-actions-bar",pf=async()=>{let e=sp();if(!e){document.getElementById(ui)?.remove();return}let t=null;try{t=await I(`#${cf}`,{timeoutMs:dt+2e3})}catch{m.debug("[prepare-contract] actions bar not found within timeout");return}if(!t)return;let o=document.getElementById(ui);if(o){if(o.dataset.contactId===e.contactId)return;o.remove()}let r=dp();r.dataset.contactId=e.contactId,r.dataset.tenantId=e.tenantId,t.appendChild(r),m.debug(`[prepare-contract] mounted for contact ${e.contactId}`)},$t="ws-crm-prepare-contract-button-opp",hr=`${$t}-wrap`,mf=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,bf=/\/v2\/location\/([A-Za-z0-9]+)/,uf=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],yi=()=>{let e=window.location.pathname,t=e.match(mf);if(!t)return null;let o=e.match(bf);return o?{oppId:t[1],tenantId:o[1]}:null},hf=async()=>{for(let e of uf)try{let t=await I(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Fn=!1,_r=null,vi=null,mi=null,bi,yr=()=>{_r?.disconnect(),_r=null,vi=null},_f=e=>{if(_r&&vi===e)return;yr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(vi=e,_r=new MutationObserver(()=>{let o=yi();if(!o||o.oppId!==e){yr();return}let r=N();if(r!==null&&r!=="Marketing Tracker"){document.getElementById($t)?.remove(),document.getElementById(hr)?.remove(),yr();return}document.getElementById($t)||cp()}),_r.observe(t,{childList:!0,subtree:!0}))},yf=()=>{mi||(mi=new MutationObserver(()=>{bi===void 0&&(bi=window.setTimeout(()=>{bi=void 0;let e=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),t=!!document.getElementById($t);e&&!t&&!Fn&&cp()},300))}),mi.observe(document.body,{childList:!0,subtree:!0}))},cp=async()=>{if(!Fn){Fn=!0;try{let e=yi();if(!e){document.getElementById($t)?.remove(),document.getElementById(hr)?.remove(),yr();return}let t=document.getElementById($t);if(t&&t.dataset.oppId===e.oppId){let d=N();d!==null&&d!=="Marketing Tracker"&&(t.remove(),document.getElementById(hr)?.remove(),yr());return}t&&(t.remove(),document.getElementById(hr)?.remove());let o=await hf();if(!o){m.debug("[prepare-contract] opp mount target not found");return}let r=await X();if(r!=="Marketing Tracker"){m.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=yi();if(!a||a.oppId!==e.oppId)return;let s=dp();s.id=$t,s.dataset.oppId=e.oppId,s.dataset.tenantId=e.tenantId;let i=document.createElement("span");i.id=hr,i.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),o.appendChild(i),m.debug(`[prepare-contract] mounted on MT opp ${e.oppId} (contactId deferred to click)`),_f(e.oppId)}finally{Fn=!1}}},pp=()=>{nf(),pf()};Hg();function ye(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function De(e){return ye(e)}var vf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",Tt="ws-crm-compute-offer-button",wi="ws-crm-compute-offer-popover",gp="ws-crm-offer-modal",mp="ws-crm-contact-actions-bar",gf=[".central-panel","[class*='central-panel']"],nt=e=>typeof e=="number"?`$${Math.round(e).toLocaleString("en-US")}`:"-",fi=e=>{if(typeof e!="number"||Math.round(e)===0)return"$0";let t=`$${Math.abs(Math.round(e)).toLocaleString("en-US")}`;return e<0?`\u2212${t}`:`+${t}`},ff=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bp=e=>{if(!e)return"";let t=String(e).split("-");return t.length!==3?String(e):`${ff[Number(t[1])-1]||""} ${Number(t[2])}`.trim()},K=(e,t,o)=>{let r=document.createElement(e);return t&&(r.style.cssText=t),o!=null&&(r.textContent=o),r},up=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:12px;outline:none;`,xi=async e=>{let t={tenant_id:e.tenantId,mode:e.mode};e.propertyRecordId?t.property_record_id=e.propertyRecordId:e.contactId&&(t.contact_id=e.contactId),e.mode!=="get"&&(e.propertyCondition!=null&&(t.property_condition=e.propertyCondition),e.repairOverride!==void 0&&(t.repair_override=e.repairOverride));let o=await fetch(vf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},mo=()=>{document.getElementById(wi)?.remove(),document.removeEventListener("mousedown",fp,!0)};function fp(e){let t=document.getElementById(wi),o=document.getElementById(Tt),r=e.target;t&&!t.contains(r)&&o&&!o.contains(r)&&mo()}var xp=(e,t)=>{mo();let o=e.getBoundingClientRect(),r=document.createElement("div");r.id=wi;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${y.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${u.sans};color:${n.bone};font-size:13px;line-height:1.35;`,t(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",fp,!0),0)},Nn=(e,t)=>{xp(e,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(K("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(K("div",`color:${n.bone};font-size:12px;`,t))})},xf=(e,t,o)=>{xp(e,r=>{r.appendChild(K("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),t.forEach(a=>{let s=K("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${u.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);s.type="button",s.addEventListener("mouseenter",()=>s.style.borderColor=n.blue),s.addEventListener("mouseleave",()=>s.style.borderColor=n.steel),s.addEventListener("click",()=>{mo(),o(a.property_record_id)}),r.appendChild(s)})})},jn=()=>{document.getElementById(gp)?.remove(),document.removeEventListener("keydown",wp,!0)};function wp(e){e.key==="Escape"&&jn()}var hp=(e,t,o)=>{jn(),mo();let r=o,a=!1,s="",i=document.createElement("div");i.id=gp,i.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${u.sans};`,i.addEventListener("mousedown",p=>{p.target===i&&jn()});let d=K("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);i.appendChild(d);let l=(p,b,_)=>{a||(a=!0,s="",c(),xi({tenantId:e,propertyRecordId:t,mode:p,propertyCondition:b,repairOverride:_}).then(h=>{h&&h.ok?r={...h,current_offer:h.current_offer??r.current_offer,current_offer_date:h.current_offer_date??r.current_offer_date}:s=h&&h.error||"Request failed."}).catch(h=>{m.error("[compute-offer] worksheet request failed:",h),s="Request failed. Try again."}).finally(()=>{a=!1,c()}))};function c(){let p=r,b=!!p.has_comps;d.innerHTML="";let _=K("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),h=K("div","");h.appendChild(K("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),h.appendChild(K("div",`font-size:12px;color:${n.ash};margin-top:2px;`,p.address||"-"));let g=K("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");g.type="button",g.addEventListener("click",jn),_.append(h,g),d.appendChild(_);let k=K("div","padding:14px 18px 18px;");d.appendChild(k);let f=K("select",up());(p.rehab_levels||[]).forEach(U=>{let j=document.createElement("option");j.value=U.key,j.textContent=U.label,U.key===(p.tier||p.property_condition)&&(j.selected=!0),f.appendChild(j)}),f.disabled=a,f.addEventListener("change",()=>l("recompute",f.value,E.value.trim()));let E=K("input",up());E.type="number",E.placeholder="uses the level",E.value=p.repair_override!=null?String(p.repair_override):"",E.disabled=a,E.addEventListener("keydown",U=>{U.key==="Enter"&&E.blur()}),E.addEventListener("change",()=>l("recompute",f.value,E.value.trim()));let v=K("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");v.appendChild(K("div",`font-size:12px;color:${b?n.bone:n.amber};`,b?`Investor comps: $${p.comp_price_per_sqft}/sqft \xB7 ${p.comp_count} comps${p.comp_pull_at?` \xB7 pulled ${bp(p.comp_pull_at)}`:""}`:"No comps pulled yet."));let x=K("button",`flex-shrink:0;padding:6px 12px;border-radius:${y.sm};border:1px solid ${n.blue};background:${b?"transparent":n.blue};color:${b?n.blue:"#fff"};font-family:${u.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":b?"Re-pull Comps":"Pull Comps");x.type="button",x.disabled=a,x.addEventListener("click",()=>l("pull",f.value,E.value.trim())),v.append(x),k.appendChild(v),p.low_confidence&&b&&k.appendChild(K("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${p.comp_count??0} comps in window.`));let $=p.current_offer!=null;k.appendChild(K("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${y.sm};background:${n.slate};border:1px solid ${n.steel};color:${$?n.bone:n.ash};`,$?`Last offer made: ${nt(p.current_offer)}${p.current_offer_date?` \xB7 ${bp(p.current_offer_date)}`:""}`:"No offer made yet."));let C=K("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),w=K("div","");w.appendChild(K("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),w.appendChild(f);let T=K("div","");T.appendChild(K("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),T.appendChild(E),C.append(w,T),k.appendChild(C);let L=K("div",`border-top:1px solid ${n.steel};padding-top:12px;`),A=(U,j,R)=>{let me=K("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${R?.strong?"font-weight:700;":""}`),be=K("div","");be.appendChild(K("div",`font-size:${R?.strong?"13":"12"}px;color:${n.bone};`,U)),R?.sub&&be.appendChild(K("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,R.sub));let te=K("div",`font-size:${R?.strong?"15":"12"}px;color:${R?.color||n.bone};white-space:nowrap;`,j);me.append(be,te),L.appendChild(me)};if(b&&p.imv!=null){A("Investor Market Value (IMV)",nt(p.imv)),p.arv!=null&&A("After Repair Value (ARV)",nt(p.arv),{color:n.ash});let U=p.repair_adjustment??0,j=-U,R=p.repair_override?"Repair override":p.property_condition_label||"Repairs";U===0?A(`Repairs (${R})`,"Included",{color:n.ash,sub:`${nt(p.repair_total)} in repairs included at IMV`}):A(`Repairs (${R})`,fi(j),{color:j<0?n.crimson:n.emerald,sub:`${nt(p.repair_total)} total, ${nt(p.baseline_repairs)} included at IMV`}),A("Min. Profit Target",fi(-(p.profit_target??0)),{color:n.ash}),A("Maximum Cash Offer (MAO)",nt(p.mao),{strong:!0,color:n.blue}),A("Target Profit",fi(-(p.ico_delta??0)),{color:n.ash}),A("Initial Cash Offer (ICO)",nt(p.ico),{strong:!0,color:n.blue})}else L.appendChild(K("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));k.appendChild(L);let G=K("div",`margin-top:12px;font-size:11px;min-height:14px;color:${s?n.crimson:n.ash};`);G.textContent=a?"Saving\u2026":s||(b?"Saved to the Property.":""),k.appendChild(G)}c(),document.body.appendChild(i),document.addEventListener("keydown",wp,!0)},_p=(e,t)=>{let o=document.createElement("button");o.type="button",o.id=Tt,o.dataset.contactId=e,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${y.sm};font-family:${u.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=i=>{o.disabled=i,o.style.cursor=i?"default":"pointer";let d=r();d&&(d.textContent=i?"Opening\u2026":"Offer Worksheet")},s=i=>{if(i.needs_property_selection&&i.properties&&i.properties.length){xf(o,i.properties,d=>{a(!0),xi({tenantId:t,propertyRecordId:d,mode:"get"}).then(l=>{l.ok&&l.property_record_id?hp(t,l.property_record_id,l):Nn(o,l.error||"Couldn't load that property.")}).catch(l=>{m.error("[compute-offer] get failed:",l),Nn(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}i.ok&&i.property_record_id?hp(t,i.property_record_id,i):Nn(o,i.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{s(await xi({tenantId:t,contactId:e,mode:"get"}))}catch(i){m.error("[compute-offer] webhook failed:",i),Nn(o,"Request failed. Try again.")}finally{a(!1)}}}),o},wf=async()=>{for(let e of gf)try{let t=await I(e,{timeoutMs:3e3});if(t)return t}catch{}return null},yp=async(e,t)=>{let o=t.querySelector(`#${mp}`);if(!o)try{o=await I(`#${mp}`,{timeoutMs:3e3,root:t})}catch{o=null}return o?(e.style.order="3",o.appendChild(e),!0):!1},vp=()=>{let e=document.querySelectorAll(`#${Tt}`);for(let t=1;t<e.length;t++)e[t].remove()},kf=async()=>{let e=z();if(!e||!e.locationId||e.source!=="url"){document.getElementById(Tt)?.remove(),mo();return}let t=e.locationId,o=document.getElementById(Tt);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove(),mo();let r="seller";try{r=Oe(await Pe(e.contactId,t))}catch(d){m.warn("[compute-offer] contact-type fetch threw - defaulting seller:",d)}if(r!=="seller"){m.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(Tt)?.remove();return}let a=await wf();if(!a){m.warn("[compute-offer] no central panel found");return}let s=z();if(!s||s.contactId!==e.contactId)return;let i=_p(e.contactId,t);if(!await yp(i,a)){m.warn("[compute-offer] actions bar not found after waiting");return}vp(),m.debug(`[compute-offer] mounted for ${e.contactId}`),qn?.disconnect(),qn=new MutationObserver(()=>{if(z()?.contactId!==e.contactId){qn?.disconnect();return}if(!document.getElementById(Tt)){let d=_p(e.contactId,t);yp(d,a).then(()=>vp())}}),qn.observe(a,{childList:!0})},qn=null,gr=null,kp=()=>{let e=z()?.contactId??null;if(gr&&gr.id===e)return;let t=kf().finally(()=>{gr?.promise===t&&(gr=null)});gr={id:e,promise:t}};var Yn="reos-theme-stylesheet",jp="reos-theme-fonts",_o=!1,Ef=()=>{let e=document.getElementById(jp);e&&e.remove()},$f=`

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

`,Tf=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],Cf=e=>{if(!e||e[0]!=="#")return e;let t=e.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return e;let o=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return e;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${s})`}return`rgb(${o}, ${r}, ${a})`},Lf=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),Sf=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],Un=new WeakSet,Ep=e=>{try{if(!document.body)return;(e??document.body.querySelectorAll("*")).forEach(o=>{try{if(o.classList&&(o.classList.contains("hr-drawer-container")||o.classList.contains("hr-detached-container"))){(o.getAttribute("style")||"").includes("background")&&(o.style.removeProperty("background-color"),o.style.removeProperty("background-image"));return}if(Un.has(o)&&o.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest(".hl_header, header.hl_header, header.app-header")||o.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let r=o.tagName;if(r==="INPUT"||r==="TEXTAREA"||r==="SELECT"||r==="SCRIPT"||r==="STYLE"||r==="SVG"||r==="PATH"||r==="IMG")return;let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!i)return;let d=+i[1],l=+i[2],c=+i[3];if((i[4]!==void 0?+i[4]:1)<.5||d<230||l<230||c<230)return;let b=o.style.getPropertyValue("background-color");if(b==="rgb(18, 22, 29)"){Un.add(o);return}if(o.closest(".hr-button")&&!(o.classList&&o.classList.contains("hr-button"))){b!=="transparent"&&(o.style.setProperty("background-color","transparent","important"),o.style.setProperty("background-image","none","important")),Un.add(o);return}o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"),Un.add(o)}catch{}})}catch{}},ki=new WeakSet,bo=()=>{document.querySelectorAll(Sf.join(", ")).forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.querySelectorAll("*");[t,...Array.from(o)].forEach(r=>{if(r.classList&&(r.classList.contains("hr-drawer-container")||r.classList.contains("hr-detached-container"))){(r.getAttribute("style")||"").includes("background")&&(r.style.removeProperty("background-color"),r.style.removeProperty("background-image"));return}if(ki.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH"||r.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=+i[1],l=+i[2],c=+i[3];if(!(d<230||l<230||c<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),ki.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),ki.add(r)}})})},$p=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.classList&&t.classList.contains("hr-button"))return;let o=t.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(t.style.setProperty("background-color","transparent","important"),t.style.setProperty("background-image","none","important"))})},Tp=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(e=>{e.style.setProperty("background-color","#252C36","important"),e.style.setProperty("background-image","none","important"),e.style.setProperty("color","#EDEEF0","important")})},Cp=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"),t.style.removeProperty("border-style"),t.style.removeProperty("border-width"),t.style.removeProperty("border-radius"))})},Wn=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(t=>{let o=t.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let i=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(i){let d=+i[1],l=+i[2],c=+i[3];(i[4]!==void 0?+i[4]:1)>=.5&&d>=180&&l>=180&&c>=180&&d+l+c>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},Lp=()=>{let e="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(e)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},uo=()=>{if(!_o)for(let e of Tf){let t;try{t=document.querySelectorAll(e.selector)}catch{continue}t.forEach(o=>{for(let[r,a]of Object.entries(e.styles)){let s=o.style.getPropertyPriority(r),i=o.style.getPropertyValue(r),d=Lf.has(r)?Cf(a):a;s==="important"&&i===d||o.style.setProperty(r,a,"important")}})}},Jn="#1A1F28",Af=26,Mf=31,If=40,Sp=new Set,Ap=new Set,Gn=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let a=o.getBoundingClientRect();if(a.width===0||a.height===0||a.width>800)return;o.style.setProperty("display","none","important");let s=o.className?.toString()||"<no class>";!Ap.has(s)&&s!=="<no class>"&&(Ap.add(s),m.debug(`Hid empty "--" leaf: "${s}"`))})},Pf=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],Of=["trash","Trash","TRASH","delete","Delete","DELETE"],Bf=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.getAttribute("data-reos-trash")==="true")return;let o=t.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(Of.some(s=>a.includes(s))&&(r=!0),r||o.querySelectorAll("path").forEach(i=>{if(r)return;let d=i.getAttribute("d")||"";Pf.some(l=>d.includes(l))&&(r=!0)}),!r){let s=(t.id||"").toLowerCase(),i=(t.getAttribute("aria-label")||"").toLowerCase(),d=(t.getAttribute("title")||"").toLowerCase();(s.includes("delete")||s.includes("remove")||s.includes("trash")||i.includes("delete")||i.includes("remove")||i.includes("trash")||d.includes("delete")||d.includes("remove")||d.includes("trash"))&&(r=!0)}r&&t.setAttribute("data-reos-trash","true")})},Hf=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),Rf=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=(t.textContent||"").trim();o.length===0||o.length>40||Hf.has(o)&&t.style.display!=="none"&&(t.style.setProperty("display","none","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("pointer-events","none","important"))})},Mp=new Set,Ip=new WeakSet,Df=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(Ip.has(o)&&o.style.getPropertyValue("color")==="rgb(237, 238, 240)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;let r=(o.className?.toString()||"").toLowerCase();if(r.includes("ai-button")||r.includes("ask-ai")||r.includes("bg-clip-text")||r.includes("text-transparent")||o.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let a=o.tagName.toLowerCase();if(a==="svg"||a==="path"||a==="circle"||a==="rect"||a==="polygon"||a==="polyline"||a==="line"||a==="g")return;let s=!1;for(let _ of Array.from(o.childNodes))if(_.nodeType===Node.TEXT_NODE&&(_.textContent||"").trim()){s=!0;break}if(!s)return;let i=Array.from(o.children);if(i.length>0&&i.every(_=>{let h=_.tagName.toLowerCase();return h==="svg"||h==="img"})&&!s)return;let c=window.getComputedStyle(o).color;if(!(c==="rgb(255, 255, 255)"||c==="rgba(255, 255, 255, 1)"||c==="#ffffff"||c==="white"))return;o.style.setProperty("color","#EDEEF0","important"),o.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),Ip.add(o);let b=o.className?.toString()||"<no class>";!Mp.has(b)&&b!=="<no class>"&&(Mp.add(b),m.debug(`Remapped pure-white text -> bone: "${b}"`))})},Pp=new Set,Ff=()=>{let e=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),t="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(t)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),e.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(s=>{if(s.closest("[id^='ws-crm-']"))return;let i=(s.className?.toString()||"").toLowerCase();if(i.includes("avatar"))return;let d=window.getComputedStyle(s),l=d.backgroundColor,c=d.backgroundImage||"",p=!1;if(c!=="none"&&c.includes("gradient"))p=!0;else if(l&&l!=="rgba(0, 0, 0, 0)"&&l!=="transparent"){let $=l.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if($&&parseFloat($[1])<.6)return;let C=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(C){let w=parseInt(C[1],10),T=parseInt(C[2],10),L=parseInt(C[3],10);(w>=60||T>=60||L>=60)&&(w>230&&T>230&&L>230||(w>=80||T>=80||L>=80)&&(p=!0))}}if(!p)return;let _=(s.textContent||"").trim(),h=i,g=Array.from(s.querySelectorAll("*")).map($=>($.className?.toString()||"").toLowerCase()).join(" "),k=_.toLowerCase()==="ask ai"||h.includes("ai-button")||h.includes("ask-ai")||h.includes("askai"),f=h.includes("bg-clip-text")||h.includes("text-transparent")||g.includes("bg-clip-text")||g.includes("text-transparent"),E=Array.from(s.querySelectorAll("*")).some($=>{let C=window.getComputedStyle($),w=C.getPropertyValue("-webkit-background-clip")||"",T=C.getPropertyValue("background-clip")||"";return w.includes("text")||T.includes("text")});if(k||f||E){let $=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],C=w=>{$.forEach(T=>w.style.removeProperty(T))};C(s),s.querySelectorAll("*").forEach(C);return}let v="#12161D";s.style.setProperty("color",v,"important"),s.querySelectorAll("*").forEach($=>{let C=$.tagName.toLowerCase();C==="svg"||C==="path"||C==="circle"||C==="rect"||C==="polygon"||C==="polyline"||C==="line"||C==="g"?($.style.setProperty("fill",v,"important"),$.style.setProperty("stroke",v,"important"),$.style.setProperty("color",v,"important")):($.style.setProperty("color",v,"important"),$.style.setProperty("-webkit-text-fill-color",v,"important"))});let x=s.className?.toString()||"<no class>";!Pp.has(x)&&x!=="<no class>"&&(Pp.add(x),m.debug(`Darkened SVG icons on colored button: "${x}"`))})})},Op=new Set,zf=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;if((t.className?.toString()||"").toLowerCase().includes("default-avatar")){t.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(l=>{(l.getAttribute("style")||"").includes("translateY(11px)")&&l.style.removeProperty("transform")});return}let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(l=>{let c=l;if(c.closest("[id^='ws-crm-']"))return;let p=l.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let b=p.left<r.right&&p.right>r.left,_=p.top<r.bottom&&p.bottom>r.top;if(!(b&&_)||p.top+p.height/2<a)return;let g=p.width*p.height/(r.width*r.height);if(g>.55)return;let k=c,f=c.parentElement,E=0;for(;f&&f!==t&&E<3;){let x=f.getBoundingClientRect();if(x.width>0&&x.width<=30&&x.height<=30)k=f;else break;f=f.parentElement,E++}k.style.setProperty("transform","translateY(11px)","important");let v=(k.className?.toString()||"")+" "+k.tagName;Op.has(v)||(Op.add(v),m.debug(`Dropped activity badge 11px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${g.toFixed(2)}): "${v}"`))})})},Nf="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",qf=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",Nf,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},Bp=new Set,jf=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=parseInt(i[1],10),l=parseInt(i[2],10),c=parseInt(i[3],10);if(!(d>200&&l>200&&c>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!Bp.has(p)&&p!=="<no class>"&&(Bp.add(p),m.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${d},${l},${c})): "${p}"`))})})},Hp=new Set,Uf=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=o.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let d=o.className?.toString()||"<no class>";!Hp.has(d)&&d!=="<no class>"&&(Hp.add(d),m.debug(`Painted Ask AI wrapper graphite: "${d}"`))}}o=o.parentElement,r++}})},Rp=new Set,Wf=()=>{let e=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),o=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let d=a.getBoundingClientRect();d.width<240||d.height<120||d.width>1500||d.height>900||o.push(a)}),[...e,...o].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let d=(i.className?.toString()||"").toLowerCase();if(d.includes("avatar")||d.includes("notification-dot")||d.includes("indicator"))return;if(d.includes("sidebar-option-button")||i.closest(".sidebar-option-button")||i.closest("nav[class*='w-13']")){let f=i.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(d.includes("tabulator")||d.includes("tabulator-page")||i.closest("[class*='tabulator']")){(i.getAttribute("style")||"").includes("background-color")&&i.style.removeProperty("background-color");return}if(d.includes("hr-card")||i.closest(".hr-card")||i.id&&i.id.startsWith("opportunity-")){let f=i.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(d.includes("ai-button")||d.includes("ask-ai")||d.includes("bg-clip-text")||d.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let l=window.getComputedStyle(i).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let c=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let p=parseInt(c[1],10),b=parseInt(c[2],10),_=parseInt(c[3],10);if(!(p>200&&b>200&&_>200))return;let g=i.getBoundingClientRect();if(g.width<24||g.height<16||g.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let k=i.className?.toString()||"<no class>";!Rp.has(k)&&k!=="<no class>"&&(Rp.add(k),m.debug(`Coerced light bg (${g.width.toFixed(0)}x${g.height.toFixed(0)}, rgb(${p},${b},${_})): "${k}"`))})})},Dp=new Set,Gf=e=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";(e??document.body.querySelectorAll("*")).forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']")||r.children.length>0)return;let a=(r.textContent||"").trim();if(a.length===0||a.length>80||a==="--"||r.closest(t)||r.closest("[class*='avatar'], [class*='hr-avatar']")||r.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||r.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(r.matches("[role='heading']")||r.closest("[role='heading']")||r.matches("h1, h2, h3")||r.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){r.matches("h1, h2, h3")&&(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let x=r.getAttribute("style")||"";(x.includes("color")||x.includes("background"))&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"),r.style.removeProperty("background-color"));return}if(r.closest("#SettingTexasSmsBlock")||r.matches("p.ui-text-sm-medium")&&r.parentElement?.classList?.contains("flex")&&r.parentElement?.classList?.contains("items-center")&&r.parentElement?.children?.length===1){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-button, .n-button")||r.matches(".hr-button__content, .n-button__content")||r.closest(".hr-button__content, .n-button__content")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".bg-primary-50, [class*='bg-primary-50']")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}let s=r,i=null;for(let x=0;x<4&&s;x++){let $=s.nextElementSibling;if($&&($.matches(t)||$.querySelector(t)!==null)){i=$;break}s=s.parentElement}if(!i)return;let d=r.getBoundingClientRect();if(d.width===0||d.height===0||d.width>400||d.height>60)return;r.style.setProperty("color","#9098A3","important"),r.style.setProperty("-webkit-text-fill-color","#9098A3","important");let l=i,c=l.getBoundingClientRect(),p=l.className?.toString()||"",b=p.includes("schedule-ui-form-weekly-schedule-checkbox")||l.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,_=p.includes("hl-form-item")||p.includes("n-form-item--top-labelled")||l.closest(".hl-form-item")!==null,h=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",g=(p.includes("hr-form-item-blank")||p.includes("hr-form-item")||l.matches(h))&&(l.matches(h)||l.querySelector(h)!==null);g&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let k=p.includes("hr-radio")||l.closest(".hr-radio, [class*='hr-radio']")!==null;k&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let f=p.includes("hr-breadcrumb")||l.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;f&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let E=p.includes("hr-header-lite")||l.closest("[class*='hr-header-lite']")!==null;E&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius")),!b&&!_&&!g&&!k&&!f&&!E&&c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(l.style.setProperty("background-color",Jn,"important"),l.style.setProperty("border-color","#252C36","important"),l.style.setProperty("border-style","solid","important"),l.style.setProperty("border-width","1px","important"),l.style.setProperty("border-radius","4px","important"));let v=r.className?.toString()||"<no class>";!Dp.has(v)&&v!=="<no class>"&&(Dp.add(v),m.debug(`Colored field label "${a.slice(0,30)}": "${v}"`))})},Fp=new Set,Kf=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),d=Math.max(16,Math.min(24,Math.round(i*.6)));t.style.setProperty("font-size",`${d}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${d}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let l=t.className?.toString()||"<no class>";!Fp.has(l)&&l!=="<no class>"&&(Fp.add(l),m.debug(`Resized avatar text to ${d}px (circle ${i.toFixed(0)}px): "${l}"`))})},zp=new Set,Vf=new Set(["Enter Dashboard Name"]),Yf=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=t.placeholder||"";if(Vf.has(r)){(t.getAttribute("style")||"").includes("background-color")&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"));return}t.style.setProperty("background-color",Jn,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=t.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",Jn,"important"),a.style.setProperty("border-color","#252C36","important"));let s=t.className?.toString()||"<no class>";!zp.has(s)&&s!=="<no class>"&&(zp.add(s),m.debug(`Forced input slate bg: "${s}"`))})},Kn=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||o.id==="chat-filter"||o.id==="phone-calls"||o.id==="archive-conversation"||o.id==="star-toggle"||o.id==="read-toggle"||o.id==="delete-conversation")return;if(o.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}let r=o.className?.toString()||"";if(r.includes("bg-inherit")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.closest(".pipeline-ribbon")&&r.split(" ").includes("count")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.split(" ").includes("tabulator-page")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(h=>r.includes(h))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("schedule-ui-form-weekly-schedule-checkbox")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("border-color")||h.includes("border-style")||h.includes("border-width"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"));return}if(r.includes("n-button")&&r.includes("icon-only")&&!r.includes("quaternary")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-button--tertiary-type")||r.includes("n-button--tertiary-type")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"),o.style.removeProperty("border-radius"));return}if(r.includes("hr-data-table-td")||r.includes("hr-data-table-tr")||r.includes("hr-data-table__body-cell")||r.includes("hr-data-table__cell")||r.includes("hr-data-table__header-cell")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-data-table-td--fixed-right")||r.includes("n-data-table-td--last-col")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.classList.contains("hr-tabs")||r.includes("hr-tabs-tab-wrapper")||r.includes("hr-tabs-nav")||r.includes("hr-tabs-nav-scroll-content")||r.includes("hr-tabs-content")||r.includes("hr-tabs-pane")||r.includes("hr-tabs-rail")||r.includes("hr-tabs-wrapper")||r.includes("hr-tabs-pane-wrapper")||r.includes("hr-tab-pane")){let h=o.getAttribute("style")||"";(h.includes("background-color: rgb(26, 31, 40)")||h.includes("background-color: #1A1F28")||h.includes("background-color: #1a1f28"))&&o.style.removeProperty("background-color");return}if(r.includes("hr-date-panel")||r.includes("n-date-panel")||o.closest(".hr-date-panel, .n-date-panel")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-tag")&&r.includes("ui-default")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if((r.includes("bg-purple-50")||r.includes("bg-purple-100"))&&(r.includes("rounded-lg")||r.includes("rounded-md")||r.includes("rounded-full"))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-alert")||o.closest(".n-alert")||r.includes("hl-warning")||r.includes("hl-error")||r.includes("hl-info")||r.includes("hl-success")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-card")||o.closest(".hr-card")||o.id&&o.id.startsWith("opportunity-")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("bg-gray-50")||r.includes("bg-gray-100")||r.includes("bg-gray-200")||r.includes("bg-white")||r.includes("bg-blue-50")||r.includes("bg-blue-100")||r.includes("bg-sky-50")||r.includes("bg-indigo-50")||r.includes("bg-slate-50")||r.includes("bg-neutral-50")||r.includes("bg-zinc-50")||r.includes("bg-stone-50")||r.includes("F7F9FD")||r.includes("F9FAFB")||r.includes("ECEEF2")||r.includes("eceef2")||r.includes("EFF4FF")||r.includes("eff4ff")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-collapse-item")||r.includes("hr-collapse hr-accordion")||r.includes("hr-accordion"))return;if(r.includes("sidebar-option-button")||o.closest(".sidebar-option-button")||o.closest("nav[class*='w-13']")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let h=o.getAttribute("style")||"";(h.includes("background-color")||h.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=parseInt(i[1],10),l=parseInt(i[2],10),c=parseInt(i[3],10);if(!(d<Af&&l<Mf&&c<If))return;let b=o.getBoundingClientRect();if(b.width===0||b.height===0||b.width>800||b.height>200)return;o.style.setProperty("background-color",Jn,"important");let _=o.className?.toString()||"<no class>";!Sp.has(_)&&_!=="<no class>"&&(Sp.add(_),m.debug(`Coerced dark bg to slate (${b.width.toFixed(0)}x${b.height.toFixed(0)}, rgb(${d},${l},${c})): "${_}"`))})},Vn=()=>{let e="#4B8BF5",t=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(s=>{s.setAttribute("data-reos-recolored","1"),s.setAttribute("data-reos-recolored-v2","1"),s.setAttribute("data-reos-recolored-v3","1");let d=(s.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!d)return;let l;try{l=atob(d[1])}catch{return}let c=l,p=!1;if(t.forEach(h=>{c.includes(h)&&(c=c.split(h).join(e),p=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(h=>{c.includes(h)&&(c=c.split(h).join("transparent"),p=!0)}),s.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(g=>{c.includes(g)&&(c=c.split(g).join("#EDEEF0"),p=!0)}),!!p)try{let h=btoa(c);s.setAttribute("src",`data:image/svg+xml;base64,${h}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(s=>{let i=s.getAttribute("src")||"";if(!i||i.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(i))return;s.setAttribute("data-reos-masked","1");let d=`url("${i}")`;s.style.setProperty("-webkit-mask-image",d,"important"),s.style.setProperty("-webkit-mask-size","contain","important"),s.style.setProperty("-webkit-mask-repeat","no-repeat","important"),s.style.setProperty("-webkit-mask-position","center","important"),s.style.setProperty("mask-image",d,"important"),s.style.setProperty("mask-size","contain","important"),s.style.setProperty("mask-repeat","no-repeat","important"),s.style.setProperty("mask-position","center","important"),s.style.setProperty("background-color","var(--reos-blue)","important"),s.setAttribute("src",o)})},fr=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(t=>{[...t.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);t.classList.contains(r)||t.classList.add(r)}})})},Jf=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("background"))})},ho=()=>{let e=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},t=document.querySelector(".crm-opportunities-modal");t&&t.querySelectorAll(".hr-base-selection").forEach(a=>{e(a),a.querySelectorAll("div, span").forEach(i=>{if(i.id?.startsWith("ws-crm-"))return;let d=window.getComputedStyle(i).backgroundColor;d==="rgba(0, 0, 0, 0)"||d==="transparent"||!d||e(i)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{e(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let s="rgb(150, 162, 173)",i="rgb(0, 191, 124)",d=c=>{let p=r.querySelector(".ui-upload-icon svg");p&&(p.style.setProperty("color",c,"important"),p.style.setProperty("stroke",c,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(b=>{b.style.setProperty("stroke",c,"important")})},l=!1;try{l=r.matches(":hover")}catch{}d(l?i:s),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>d(i)),r.addEventListener("mouseleave",()=>d(s)))})},Ei=new WeakSet,Qf=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(t=>{if(!Ei.has(t))try{let o=t.contentDocument||t.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){Ei.add(t);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),t.style.background="#FFFFFF",t.style.borderRadius="6px",Ei.add(t)}catch{}})},Zf=()=>{let e=document.getElementById("edit-phone-number-modal");e&&e.querySelectorAll("textarea").forEach(t=>{let o=getComputedStyle(t).backgroundColor;o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"&&t.style.setProperty("border-color",o,"important")})},Ve=!1,Ci=null,Np=!1,Xf=()=>{if(Np)return;Np=!0;let e=null,t=0;document.addEventListener("pointerdown",r=>{r.isPrimary&&(e=r.clientX,t=r.clientY,Ve=!1)},!0),document.addEventListener("pointermove",r=>{e!==null&&!Ve&&Math.abs(r.clientX-e)+Math.abs(r.clientY-t)>6&&(Ve=!0)},!0);let o=()=>{e=null,Ve&&(Ve=!1,Ci&&Ci())};document.addEventListener("pointerup",o,!0),document.addEventListener("pointercancel",o,!0)},qp=()=>{let e,o=()=>{if(_o||Ve)return;let d=document.body?document.body.querySelectorAll("*"):void 0;fr(),uo(),Yf(),Kn(d),Gn(d),Gf(d),Qf(),Wf(),Uf(),jf(),qf(),Ff(),Kf(),zf(),Df(d),Vn(),Rf(),Bf(),ho(),bo(),Ep(d),Cp(),Lp(),Wn(),Jf(),ho(),$p(),Tp(),Zf()},r=()=>{let d=document.activeElement;if(!d)return!1;let l=d.tagName;return l==="TEXTAREA"||l==="INPUT"||d.isContentEditable===!0},a=()=>{if(!(_o||Ve)){if(r()){e!==void 0&&clearTimeout(e),e=window.setTimeout(()=>{e=void 0,o()},800);return}e===void 0&&(e=window.setTimeout(()=>{e=void 0,o()},800))}};fr(),uo(),Kn(),Gn(),Vn(),ho(),bo(),Ep(),Cp(),Lp(),Wn(),$p(),Tp(),window.setTimeout(()=>{fr(),uo(),Kn(),Gn(),Vn(),ho(),bo(),Wn()},500),window.setTimeout(()=>{fr(),uo(),Kn(),Gn(),Vn(),ho(),bo(),Wn()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{bo(),uo()});let s=!1;Ci=()=>a(),Xf(),new MutationObserver(()=>{Ve||s||(s=!0,requestAnimationFrame(()=>{s=!1,a()}))}).observe(document.body,{childList:!0,subtree:!0})},$i,ex=()=>{let e=()=>{if(_o)return;let o=document.getElementById(Yn);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let i=s.tagName.toLowerCase();if(i==="style"||i==="link"){if(s.id===Yn||s.id===jp)continue;r=!0;break}}if(r)break}r&&$i===void 0&&($i=window.setTimeout(()=>{$i=void 0,e()},150))}).observe(document.head,{childList:!0}),e()},xr=()=>{if(_o=!1,Ef(),!document.getElementById(Yn)){let e=document.createElement("style");e.id=Yn,e.textContent=$f,document.head.appendChild(e),m.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?qp():window.addEventListener("DOMContentLoaded",qp)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,ex())},Ti=[],Li=()=>{for(let t of Ti)window.clearTimeout(t);Ti=[];let e=()=>{_o||Ve||(fr(),uo(),ho(),bo())};e(),Ti.push(window.setTimeout(e,150),window.setTimeout(e,400))};var Up="ws-crm-customizer-version-badge",Qn=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",Qn,{once:!0});return}if(document.getElementById(Up))return;let e=document.createElement("div");e.id=Up,e.style.cssText=`
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
  `,e.textContent=`Customizer v${Cr}`,e.title=`Built ${Lr}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var Qp=new Set(["ej0SqnTYIprechAMAPrd"]),yo="contact-select-trigger",Zp="ws-crm-reply-from-warning",Xp="contact-select-menu",Wp="ws-crm-rf-thread-opt",Si="",Ai=!1,wr=null,Zn=null,Gp=!1,kr="",Kp,at=(...e)=>{try{console.log("[reply-from]",...e)}catch{}},Mi=e=>{let t=(e?.textContent||"").match(/\+?1?\d{10}\b/);return t?t[0]:""},Fe=e=>(e||"").replace(/\D/g,"").slice(-10),Vp=e=>{let t=Fe(e);return t.length===10?`+1 ${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:e},tx=e=>{let t=e.meta||{};return(e.direction||"").toLowerCase()==="inbound"?t.to||"":t.from||""},ox=async()=>{let e=window.location.pathname,t=e.match(/\/contacts\/detail\/([A-Za-z0-9]{15,})/);if(t){let r=Q();if(!r)return null;let a=await da(`${ia}/conversations/search?locationId=${encodeURIComponent(r)}&contactId=${encodeURIComponent(t[1])}`);if(!a||!a.ok)return at("getConversationId: search miss",a?a.status:"null"),null;try{return(await a.json())?.conversations?.[0]?.id||null}catch{return null}}let o=e.split("/").filter(Boolean).pop()||"";return/^[A-Za-z0-9]{15,}$/.test(o)?o:null},rx=async()=>{let e=await ox();if(!e)return null;let t=await da(`${ia}/conversations/${e}/messages?limit=20`);if(!t||!t.ok)return at("getThreadNumber: fetch miss",t?t.status:"null"),null;let o;try{o=await t.json()}catch{return null}let r=o?.messages?.messages||[];for(let a of r){if(a.type!==2&&a.messageType!=="TYPE_SMS")continue;let s=tx(a);if(Fe(s).length===10)return s}return null},vo=()=>document.getElementById(Zp)?.remove(),em=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector("#conv-composer-textarea-input, textarea[placeholder]"))return t;t=t.parentElement}return null},nx=e=>e.replace(/[&<>"]/g,t=>t==="&"?"&amp;":t==="<"?"&lt;":t===">"?"&gt;":"&quot;"),tm=(e,t,o)=>{vo();let r=document.getElementById(yo);if(!r)return;let a=em(r);if(!a||!a.parentElement)return;let s=document.createElement("div");s.id=Zp,s.style.cssText="display:flex;align-items:flex-start;gap:9px;padding:10px 12px;margin:0 0 6px;background:rgba(232,163,60,0.14);border-left:3px solid var(--reos-amber,#E8A33C);border-radius:0;font-size:12.5px;line-height:1.5;color:var(--reos-bone,#EDEEF0);font-family:inherit;";let i=t?` (${nx(t)})`:"";s.innerHTML=`<span style="color:var(--reos-amber,#E8A33C)!important;font-size:16px;line-height:1;margin-top:1px;flex-shrink:0;" aria-hidden="true">&#9888;</span><div>This thread is on <span style="color:var(--reos-amber,#E8A33C)!important;font-weight:500;">${Vp(e)}</span>${i}. You're set to reply from ${Vp(o)}. <span style="color:var(--reos-amber,#E8A33C)!important;">Switch the From before sending.</span></div>`,a.parentElement.insertBefore(s,a)},ax=e=>{wr?.disconnect();let t=document.getElementById(yo);if(!t)return;let o=em(t)||t,r=Fe(Mi(t));wr=new MutationObserver(()=>{let a=Mi(document.getElementById(yo)),s=Fe(a);!s||s===r||(r=s,s===Fe(e)?vo():tm(e,"",a))}),wr.observe(o,{childList:!0,subtree:!0,characterData:!0})},Yp=()=>{let e=document.getElementById(Xp);if(!e)return;let t=Array.from(e.children).filter(d=>d.id!=="hr-dropdown-option-__search__"),o=d=>{let l=(d.textContent||"").match(/\+?1?\d{10}/);return l?l[0]:""},r=null,a="";if(kr&&(r=t.find(d=>Fe(o(d))===Fe(kr))||null,a="thread line"),r||(r=t.find(d=>/Last Used/i.test(d.textContent||""))||null,a="last used"),at("decorateMenu: cache=",kr,"target=",r?a:"NONE"),!r)return;let s=document.getElementById(Wp);s&&s!==r&&s.removeAttribute("id"),r.id=Wp;let i=d=>{d.style.setProperty("color","var(--reos-emerald,#0FB57E)","important"),d.style.setProperty("-webkit-text-fill-color","var(--reos-emerald,#0FB57E)","important")};i(r),r.querySelectorAll("*").forEach(d=>{i(d),d.style.setProperty("background-color","transparent","important")})},sx=()=>{if(!Qp.has(Q()||""))return;Zn?.disconnect();let e=0,t=()=>{let o=document.getElementById(Xp);if(o){Yp(),Zn=new MutationObserver(()=>Yp()),Zn.observe(o,{childList:!0,subtree:!0});return}++e<20&&window.setTimeout(t,50)};t()},ix=e=>{let t=e.target;t&&t.closest&&t.closest("#"+yo)&&(at("From trigger clicked -> waiting for menu"),sx())},lx=async()=>{if(!Ai){Ai=!0;try{let e=document.getElementById(yo);if(!e)return;let t=Mi(e),o=await rx();if(kr=o||"",at("check: from=",t,"thread=",o),!o){vo();return}Fe(t)&&Fe(t)!==Fe(o)?(at("MISMATCH -> banner"),tm(o,"",t)):(at("match -> no banner"),vo()),ax(o)}finally{Ai=!1}}},Jp=()=>{if(!Qp.has(Q()||""))return;let e=window.location.pathname;if(!e.includes("/conversations")&&!e.includes("/contacts/detail/")){Si="",kr="",wr?.disconnect(),Zn?.disconnect(),vo();return}let t=!!document.getElementById(yo),o=e.split("/").filter(Boolean).pop()||"",r=(t?"T":"F")+"|"+o;if(r!==Si){if(Si=r,!t){wr?.disconnect(),vo();return}at("composer expanded on",o),lx()}},om=()=>{Kp===void 0&&(Kp=window.setInterval(Jp,500)),Gp||(document.addEventListener("click",ix,!0),Gp=!0),Jp()};var dx="#1A1F28",cx="#EDEEF0",Ii="#9098A3",px=e=>{let t=(e||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null},mx=e=>.2126*e.r+.7152*e.g+.0722*e.b,bx=e=>{let t=e.r/255,o=e.g/255,r=e.b/255,a=Math.max(t,o,r),s=Math.min(t,o,r),i=(a+s)/2,d=a-s,l=0,c=0;return d!==0&&(c=d/(1-Math.abs(2*i-1)),a===t?l=(o-r)/d%6:a===o?l=(r-t)/d+2:l=(t-o)/d+4,l=l*60,l<0&&(l+=360)),`hsl(${Math.round(l)}, ${Math.round(Math.max(.62,c)*100)}%, 60%)`},rm=(e,t,o)=>{e.querySelectorAll(t).forEach(r=>{r.style.setProperty("color",o,"important"),r.style.setProperty("-webkit-text-fill-color",o,"important")})},ux=e=>{let t=px(getComputedStyle(e).backgroundColor);if(!t||mx(t)<120)return;let o=bx(t);e.style.setProperty("background-color",dx,"important"),e.style.setProperty("box-shadow",`inset 3px 0 0 0 ${o}`,"important"),rm(e,".note-content, .note-content *, [class*='text-gray-9'], [class*='text-gray-7']",cx),rm(e,"#note-date-added-text, [class*='475467']",Ii)},hx=e=>{e.querySelectorAll("[class*='hr-tag__count']").forEach(t=>{t.style.setProperty("background-color","transparent","important")}),e.querySelectorAll(".hr-tag, .hr-tag *").forEach(t=>{t.style.setProperty("color",Ii,"important"),t.style.setProperty("-webkit-text-fill-color",Ii,"important")}),e.querySelectorAll("button.hr-button, .hr-button__border, .hr-button__state-border").forEach(t=>{t.style.setProperty("border","none","important"),t.style.setProperty("box-shadow","none","important")})},nm=()=>{let e=document.querySelectorAll(".note-card-accent");for(let t=0;t<e.length;t++)ux(e[t]),hx(e[t])},am,sm=()=>{am===void 0&&(am=window.setInterval(nm,700)),nm()};var _x='input:not([autocomplete]):not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="range"]):not([type="color"]),textarea:not([autocomplete])',im=()=>{document.querySelectorAll(_x).forEach(e=>{e.setAttribute("autocomplete","off")})},lm,dm=()=>{lm===void 0&&(lm=window.setInterval(im,1e3)),im()};console.log("[ws-crm-customizer] bundle-loaded");var S=(e,t)=>{try{m.debug(`[main] calling ${e}`),t(),m.debug(`[main] ${e} OK`)}catch(o){m.error(`[main:FAIL] ${e} threw:`,o)}},cm=()=>{m.info(`Loaded v${Cr} (built ${Lr})`),ta()?(m.info(`[main] excluded location ${Q()} \u2014 theme only, skipping feature mounts`),S("mountThemeStylesheet",xr),S("mountDialerThemeFix",Mn)):(S("mountVersionBadge (initial)",Qn),S("mountFavicon",Rl),S("mountThemeStylesheet",xr),S("mountHideLaunchpad",is),S("mountHideNavItems",ls),S("mountRelabelNav",ds),S("mountHideTopmenuTabs",ps),S("mountContractsSection",cs)),S("installOppIdCapture",zi),S("initPageRouter",Hi),m.info("[main] registering onPageChange subscriber"),ge(t=>{if(m.debug(`[main] onPageChange callback fired for page=${t}`),ta()){m.info(`[main] page change into excluded location ${Q()} \u2014 theme only, skipping feature mounts`),S("mountThemeStylesheet",xr),S("runThemeFastPass",Li),S("mountDialerThemeFix",Mn),S("unmountContactMapLinks",cd);return}S("mountThemeStylesheet",xr),S("runThemeFastPass",Li),S("mountVersionBadge",Qn),S("mountHideLaunchpad",is),S("mountHideNavItems",ls),S("mountRelabelNav",ds),S("mountHideTopmenuTabs",ps),S("mountContractsSection",cs),S("mountAnalyticsDashboard",Xi),S("mountClaimReleaseToggle",kl),S("mountContactActionsBar",Bl),S("mountActiveFollowUpButton",Ki),S("mountMtOfferMadeButton",Fl),S("mountNotInterestedButton",zl),S("mountScheduleWalkthroughButton",Nl),S("mountResendDealLinkButton",jl),S("mountAddReferralBuyer",Vl),S("mountChangePrimaryContactButton",ll),S("mountReducePriceButton",Jl),S("mountEditLandingPageButton",Ql),S("mountPublishButton",td),S("mountContactMapLinks",dd),S("mountSendToClosingOfficeButton",Ed),S("mountOppActionBar",Ud),S("mountClosingAgentPickerButton",Wc),S("mountPrepareContractButton",pp),S("mountComputeOfferButton",kp),S("mountManageTeam",Jc),S("mountBuyBoxWidget",al),S("mountSellerContactFlag",gl),S("mountPropertiesWidget",yl),S("mountSupportNavItem",ec),S("mountPhoneAssignmentsWidget",sc),S("mountBulkPowerDialer",Tc),S("mountBulkPowerDialerContacts",Sc),S("mountCallingAsChip",Pc),S("mountDialerThemeFix",Mn),S("mountReplyFromWarning",om),S("mountNoteCanon",sm),S("mountSuppressAutofill",dm)}),m.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cm):cm();})();
//# sourceMappingURL=customizer.js.map
