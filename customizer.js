/* Wholesaling CRM Customizer v0.48.0 — built 2026-07-06T18:42:59.437Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var Go="[wholesaling-crm-customizer]",jc="__WS_CRM_DEBUG",Wc=()=>!!window[jc],c={info(...t){console.log(Go,...t)},warn(...t){console.warn(Go,...t)},error(...t){console.error(Go,...t)},debug(...t){Wc()&&console.log(Go,"[debug]",...t)}};var Gc=/\/v2\/location\/([A-Za-z0-9]+)/,Kc=new Set(["8ntUQzMflUkR0YvrRgVk"]),J=()=>{let t=window.location.pathname.match(Gc);return t?t[1]:null},hn=()=>{let t=J();return t!==null&&Kc.has(t)};var $s=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,un=/\/v2\/location\/([A-Za-z0-9]+)/,Vc=t=>{let e=t.match($s);if(!e)return null;let o=t.match(un);return{contactId:e[1],locationId:o?o[1]:null,source:"url"}},Yc=()=>{let t=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let e of t){let o=document.querySelector(e);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match($s);if(!a)continue;let s=r.match(un)||window.location.pathname.match(un);return{contactId:a[1],locationId:s?s[1]:null,source:"dom"}}return null},H=()=>{let t=Vc(window.location.pathname);return t||Yc()};var Ts=()=>{let t=window.location.pathname;return t.includes("/contacts/detail/")?"contact-detail":t.includes("/contacts/smart-list")||t.includes("/contacts/")?"contact-list":t.includes("/opportunities/detail/")?"opportunity-detail":t.includes("/opportunities")?"opportunity-list":t.includes("/calendars/")?"calendar":t.includes("/dashboard")?"dashboard":t.includes("/conversations")?"conversations":t.includes("/settings")?"settings":"other"},Vo="",_n=null,oe="other",vn=new Set,Ko=()=>{let t=H()?.contactId??null;if(!(!(window.location.pathname!==Vo)&&!(t!==_n))){Vo=window.location.pathname,_n=t,oe=Ts(),c.debug("Page/context changed:",oe,Vo,"contact:",t);for(let r of vn)try{r(oe)}catch(a){c.error("Subscriber threw:",a)}}},Et=t=>(vn.add(t),setTimeout(()=>t(oe),0),()=>{vn.delete(t)}),Cs=()=>{oe=Ts(),Vo=window.location.pathname,_n=H()?.contactId??null,c.debug("Router init, current page:",oe);let t=history.pushState.bind(history),e=history.replaceState.bind(history);history.pushState=function(o,r,a){t(o,r,a),Ko()},history.replaceState=function(o,r,a){e(o,r,a),Ko()},window.addEventListener("popstate",Ko),setInterval(Ko,1e3)},ue=()=>oe;var Jc=/\/opportunities\/([A-Za-z0-9]{16,24})(?:[/?]|$)/,Ss=null,As=!1,Ls=t=>{let e=t.match(Jc);e&&(Ss=e[1])},Is=()=>{if(!As){As=!0;try{let t=window.fetch.bind(window);window.fetch=(o,r)=>{try{let a=typeof o=="string"?o:o instanceof URL?o.href:o.url;a&&Ls(a)}catch{}return t(o,r)};let e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(o,r,...a){try{Ls(typeof r=="string"?r:r.href)}catch{}return e.call(this,o,r,...a)},c.debug("[opp-id-capture] installed")}catch(t){c.warn("[opp-id-capture] install failed",t)}}},qt=()=>Ss;var Yo="0.48.0",Jo="2026-07-06T18:42:59.442Z";var Qc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",Qo=new Map,yn=new Map,Zc=3e4,Ze=4e3,Xc=Ze,$t=async(t,e)=>{if(!t)return null;let o=Qo.get(t);if(o){if(o.failedAt===void 0)return o.type;if(Date.now()-o.failedAt<Zc)return null}if(!e)return c.warn(`Cannot fetch Contact Type for ${t} \u2014 tenant_id missing from URL context`),null;let r=yn.get(t);if(r)return r;let s=(async()=>{let i=new AbortController,d=setTimeout(()=>i.abort(),Xc);try{let l=`${Qc}?contact_id=${encodeURIComponent(t)}&tenant_id=${encodeURIComponent(e)}`,p=await fetch(l,{method:"GET",headers:{Accept:"application/json"},signal:i.signal});if(!p.ok)return clearTimeout(d),c.warn(`Contact Type fetch returned ${p.status} for ${t}`),Qo.set(t,{type:null,failedAt:Date.now()}),null;let m=await p.json();clearTimeout(d);let h=(m.contact_type||"").toLowerCase().trim()||null;return Qo.set(t,{type:h}),c.debug(`Resolved Contact Type for ${t}: ${h??"(unset)"}`),h}catch(l){return clearTimeout(d),c.warn(`Contact Type fetch failed for ${t}:`,l),Qo.set(t,{type:null,failedAt:Date.now()}),null}})();yn.set(t,s);try{return await s}finally{yn.delete(t)}},Tt=t=>t==="buyer"?"buyer":t==="seller"?"seller":t==="agent"||t==="closing_agent"||t==="closing_office"||t==="vendor"||t==="tenant"?"other":"seller";var M=(t,e={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=e;return new Promise((s,i)=>{let d=a.querySelector(t);if(d){s(d);return}let l,p,m=()=>{l!==void 0&&window.clearTimeout(l),p!==void 0&&window.clearInterval(p)};p=window.setInterval(()=>{let h=a.querySelector(t);h&&(m(),s(h))},r),l=window.setTimeout(()=>{m(),c.warn(`waitForElement timed out for selector: ${t}`),i(new Error(`Selector not found within ${o}ms: ${t}`))},o)})};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"},v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},b={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},gn={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},Ms=t=>{let e=t==="emerald"?n.emeraldGlow:t==="amber"?n.amberGlow:n.slate,o=t==="emerald"?n.emeraldBorder:t==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=t==="emerald"?n.emerald:t==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${e};
    color: ${r};
    border: 1px solid ${o};
    border-radius: ${v.pill};
    font-family: ${b.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},ot=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
  border: none;
  border-radius: ${v.sm};
  font-family: ${b.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,B=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${v.sm};
  font-family: ${b.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var tp=/^[A-Za-z0-9]{15,30}$/,Xe=t=>typeof t=="string"&&tp.test(t),Ps=t=>{try{let e=t.split(".");if(e.length!==3)return null;let o=e[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},ep=()=>{let t=window.WS_CRM_USER_ID;return Xe(t)?t:null},op=()=>{let t=window,e=[t.appState?.user?.id,t.user?.id,t.currentUser?.id,t.LCUser?.id,t.HL?.user?.id];for(let o of e)if(Xe(o))return o;return null},rp=()=>{try{let t=localStorage.getItem("refreshedToken");if(!t)return null;let e=t.startsWith('"')?t.slice(1,-1):t,o=Ps(e);if(!o)return null;let r=o.uid;if(Xe(r))return r;let a=o.claims;if(a&&Xe(a.user_id))return a.user_id}catch{}return null},np=()=>{try{let t=["user","tokenUser","currentUser","ghl_user"];for(let e of t){let o=localStorage.getItem(e);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if(Xe(a))return a}catch{}}}catch{}return null},R=()=>ep()||rp()||op()||np()||null,ap=()=>{try{let t=localStorage.getItem("refreshedToken");if(!t)return null;let e=t.startsWith('"')?t.slice(1,-1):t,o=Ps(e);return o?o.claims??o:null}catch{return null}},_e=()=>{let t=window.WS_CRM_FORCE_AGENCY;return typeof t=="boolean"?t:ap()?.type==="agency"};var Hs="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",sp=`${Hs}/active-follow-up-get`,ip=`${Hs}/active-follow-up-set`,re="ws-crm-active-follow-up-button",xn={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"In Active Follow Up",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"Not in Follow Up",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},lp=()=>{let t=H();return!t||!t.locationId?null:{contactId:t.contactId,tenantId:t.locationId}},dp=async t=>{let e=await fetch(sp,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId}),credentials:"omit"});if(!e.ok)throw new Error(`Get webhook returned ${e.status} ${e.statusText}`);return await e.json()},cp=async(t,e)=>{let o=await fetch(ip,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,triggered_by_user_id:e??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},ne=(t,e)=>{let o=xn[e];t.dataset.state=e,t.disabled=!o.clickable,t.style.cursor=o.clickable?"pointer":"default",t.style.background=o.bg,t.style.borderColor=o.border,t.style.color=o.color;let r=t.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=t.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},Os=t=>{let e=document.createElement("button");return e.type="button",e.id=re,e.dataset.contactId=t,e.style.cssText=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: ${n.slate};
    color: ${n.ash};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    font-family: ${b.sans};
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
  `,ne(e,"loading"),e.addEventListener("click",async()=>{if(e.dataset.state!=="amber")return;let r=lp();if(!(!r||r.contactId!==t)){ne(e,"blue"),e.style.transform="scale(0.97)",setTimeout(()=>e.style.transform="",120);try{let a=await cp(r,R()),s=a&&a.state&&a.state in xn?a.state:"blue";ne(e,s),c.info(`Active Follow Up set for ${t} \u2192 ${s}`)}catch(a){c.error("Active Follow Up Set webhook failed",a),ne(e,"error"),setTimeout(()=>void Xo(e,r),4e3)}}}),e},pp=3e4,Xo=async(t,e)=>{t.dataset.lastRefreshAt=String(Date.now()),ne(t,"loading");try{let o=await dp(e),r=o&&o.state&&o.state in xn?o.state:"gray",a=document.getElementById(re);if(!a||a.dataset.contactId!==e.contactId)return;ne(a,r)}catch(o){c.warn("Active Follow Up Get webhook failed",o),delete t.dataset.lastRefreshAt,ne(t,"error")}},mp=[".central-panel","[class*='central-panel']"],fn="ws-crm-contact-actions-bar",bp=async()=>{for(let t of mp)try{let e=await M(t,{timeoutMs:3e3});if(e)return e}catch{}try{return(await M("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},hp=async(t,e)=>{let o=e.querySelector(`#${fn}`);if(!o)try{o=await M(`#${fn}`,{timeoutMs:Ze+2e3,root:e})}catch{o=null}if(o){let s=e.querySelector("#ws-crm-afu-wrap");return s&&s.remove(),t.style.order="2",o.appendChild(t),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=e.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let s=e.querySelector(`#${fn}`);s&&s.parentElement===e?e.insertBefore(a,s.nextSibling):e.insertBefore(a,e.firstChild)}return a.appendChild(t),{container:a,placement:"fallback"}},up=()=>{let t=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!t)return null;let e=t;for(let o=0;o<8&&!(!e||!e.parentElement);o++){let r=e.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let s=r.children[1];return s instanceof HTMLElement?s:r}e=r}return null},_p=(t,e)=>{t.style.marginRight="4px",e.insertBefore(t,e.firstChild)},vp=async t=>{if(t==="url"){let o=await bp();return o?{kind:"contact-detail",target:o}:null}let e=up();return e?{kind:"conversations",target:e}:null},Bs=async(t,e)=>{if(e.kind==="contact-detail"){let{placement:o}=await hp(t,e.target);return o}return _p(t,e.target),"conversations-header"},yp=async()=>{let t=H();if(!t||!t.locationId){document.getElementById(re)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let e={contactId:t.contactId,tenantId:t.locationId},o=document.getElementById(re);if(o&&o.dataset.contactId===e.contactId){let l=Number(o.dataset.lastRefreshAt||0);Date.now()-l>=pp&&Xo(o,e);return}o&&o.remove();let r=await vp(t.source);if(!r){c.warn(`Active Follow Up: no mount target on ${t.source}-source page`);return}let a=H();if(!a||a.contactId!==e.contactId)return;let s=Os(e.contactId),i=await Bs(s,r);c.debug(`Active Follow Up mounted (${r.kind}/${i}) for ${e.contactId}`),Rs();let d=document.getElementById(re)??s;Xo(d,e),Zo?.disconnect(),Zo=new MutationObserver(()=>{let l=document.getElementById(re);if(!(H()?.contactId===e.contactId)){Zo?.disconnect();return}if(!l){let m=Os(e.contactId);Bs(m,r).then(()=>{Rs(),Xo(m,e)}),c.debug(`Active Follow Up re-mounted after wipe for ${e.contactId}`)}}),Zo.observe(r.target,{childList:!0})},Zo=null,to=null,Ds=()=>{let t=H()?.contactId??null;if(to&&to.contactId===t)return;let e=yp().finally(()=>{to?.promise===e&&(to=null)});to={contactId:t,promise:e}},Rs=()=>{let t=document.querySelectorAll(`#${re}`);if(!(t.length<=1)){c.debug(`Active Follow Up: found ${t.length} duplicate buttons, keeping first, removing ${t.length-1}`);for(let e=1;e<t.length;e++)t[e].remove()}};var gp="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/analytics/compute",Fs="ws-crm-analytics-launcher",tr="ws-crm-analytics-overlay",fp=[{key:"this_week",label:"This week"},{key:"last_week",label:"Last week"},{key:"this_month",label:"This month"},{key:"last_month",label:"Last month"},{key:"last_365",label:"Last 365 days"},{key:"all_time",label:"All time"},{key:"custom",label:"Custom"}],xp=[{key:"company",label:"Company"},{key:"acq",label:"Acquisitions"},{key:"dispo",label:"Disposition"},{key:"marketing",label:"Marketing"},{key:"tc",label:"Transactions"},{key:"velocity",label:"Velocity"}],P={open:!1,range:"this_month",customStart:"",customEnd:"",tab:"company",loading:!1,error:null,data:null,cache:new Map},K=t=>{let e=Number(t)||0;return"$"+Math.round(e).toLocaleString("en-US")},D=t=>(Number(t)||0).toLocaleString("en-US"),wn=t=>{let e=Number(t);return!Number.isFinite(e)||e<=0?"\u2014":new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},wp=()=>`${P.range}|${P.customStart}|${P.customEnd}`,ve=async(t=!1)=>{let e=wp();if(!t&&P.cache.has(e)){P.data=P.cache.get(e),P.error=null,ae();return}let o=J();if(!o){P.error="Could not resolve the sub-account id from the URL.",ae();return}P.loading=!0,P.error=null,ae();try{let r={tenant_id:o,range:P.range,tz_offset_minutes:new Date().getTimezoneOffset()};P.range==="custom"&&(r.start=P.customStart,r.end=P.customEnd);let a=await fetch(gp,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await a.json();if(!s||s.ok===!1)throw new Error(s&&s.error||`HTTP ${a.status}`);P.data=s,P.cache.set(e,s)}catch(r){P.error=r instanceof Error?r.message:String(r)}finally{P.loading=!1,ae()}},S=(t,e,o)=>{let r=document.createElement(t);return r.style.cssText=e,o!==void 0&&(r.innerHTML=o),r},rt=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),or=`background:${n.graphite};border:1px solid ${n.slate};border-radius:${v.lg};padding:16px 18px;min-width:0;`,kn=`font-family:${b.mono};font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin:0 0 12px;`,lt=(t,e,o)=>{let r=S("div",or+"flex:1;min-width:150px;");return r.appendChild(S("div",kn+"margin-bottom:8px;",rt(t))),r.appendChild(S("div",`font-family:${b.sans};font-size:24px;font-weight:600;color:${n.bone};line-height:1.1;`,rt(e))),o&&r.appendChild(S("div",`font-family:${b.sans};font-size:11px;color:${n.coolGray};margin-top:6px;`,rt(o))),r},nt=(t,e)=>{let o=S("div",or);if(o.appendChild(S("div",kn,rt(t))),!e.length)return o.appendChild(S("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),o;let r=Math.max(...e.map(a=>a.barVal),1);for(let a of e.slice(0,12)){let s=S("div","margin:0 0 10px;"),i=S("div","display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;");i.appendChild(S("span",`font-size:12px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,rt(a.label)));let d=S("span",`font-size:12px;color:${n.bone};font-weight:600;white-space:nowrap;`,rt(a.primary)+(a.secondary?` <span style="color:${n.coolGray};font-weight:400;">${rt(a.secondary)}</span>`:""));i.appendChild(d),s.appendChild(i);let l=S("div",`height:6px;background:${n.slate};border-radius:3px;overflow:hidden;`);l.appendChild(S("div",`height:100%;width:${Math.max(2,Math.round(a.barVal/r*100))}%;background:${n.emerald};border-radius:3px;`)),s.appendChild(l),o.appendChild(s)}return e.length>12&&o.appendChild(S("div",`font-size:11px;color:${n.coolGray};`,`+${e.length-12} more`)),o},er=(t,e,o)=>{let r=S("div",or+"overflow-x:auto;");if(r.appendChild(S("div",kn,rt(t))),!o.length)return r.appendChild(S("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),r;let a=`text-align:left;padding:6px 10px;font-family:${b.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,s=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`,i=`<table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr>${e.map(d=>`<th style="${a}">${rt(d)}</th>`).join("")}</tr></thead>
    <tbody>${o.map(d=>`<tr>${d.map(l=>`<td style="${s}">${rt(l)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;return r.appendChild(S("div","",i)),r},ut=(t,e)=>{let o=S("div",`display:grid;grid-template-columns:${t};gap:14px;margin-bottom:14px;`);for(let r of e)o.appendChild(r);return o},oo=t=>{let e=S("div","display:flex;flex-wrap:wrap;gap:14px;margin-bottom:14px;");for(let o of t)e.appendChild(o);return e},Ot=t=>(t||[]).map(e=>({label:e.label,primary:D(e.count),barVal:e.count})),kp=t=>(t||[]).map(e=>({label:e.label,primary:K(e.sum),secondary:`\xB7 ${D(e.count)} deal${e.count===1?"":"s"}`,barVal:e.sum})),Ep=(t,e)=>{let o=t.company||{},r=o.left_to_close_this_month||{};e.appendChild(oo([lt("Closed revenue \u2014 365d",K(o.closed_revenue_365),`${D(o.closed_count_365)} closings`),lt("Avg deal size \u2014 365d",K(o.avg_deal_size_365)),lt("Left to close this month",K(r.sum),`${D(r.count)} deal(s)`+(r.missing_est_close?` \xB7 ${D(r.missing_est_close)} missing est. close date`:"")),lt("New leads",D(o.total_leads),"in selected range")])),e.appendChild(oo([lt("Contracts",`${D((o.contracts||{}).count)}`,K((o.contracts||{}).sum)+" projected"),lt("Assignments",`${D((o.assignments||{}).count)}`,K((o.assignments||{}).sum)+" assigned"),lt("Deals closed",`${D((o.closed||{}).count)}`,K((o.closed||{}).sum)+" closed")])),e.appendChild(ut("1fr 1fr 1fr",[nt("New leads by source",Ot(o.new_leads_by_source)),nt("Contacts per closer (all time)",Ot(o.contacts_per_closer)),nt("Dispo deals per rep (all time)",Ot(o.dispo_deals_per_rep))]))},$p=(t,e)=>{let o=t.acq||{};e.appendChild(ut("1fr 1fr",[nt("Offers made per rep",Ot(o.offers_per_rep)),nt("Contracts acquired per closer",(o.contracts_per_closer||[]).map(r=>({label:r.label,primary:D(r.count),secondary:`\xB7 ${K(r.sum)} projected`,barVal:r.count})))])),e.appendChild(ut("1fr 1fr",[nt("Projected revenue per closer (open escrows)",kp(o.projected_per_closer)),nt("Closed revenue per closer",(o.closed_per_closer||[]).map(r=>({label:r.label,primary:K(r.sum),secondary:`\xB7 ${D(r.count)} closings \xB7 avg ${K(r.avg)}`,barVal:r.sum})))]))},Tp=(t,e)=>{let o=t.dispo||{};e.appendChild(ut("1fr 1fr",[nt("Buyers qualified per dispo rep",Ot(o.buyers_qualified_per_rep)),nt("Assignments per dispo rep",(o.assignments_per_rep||[]).map(r=>({label:r.label,primary:D(r.count),secondary:`\xB7 ${K(r.sum)} assigned`,barVal:r.count})))])),e.appendChild(ut("1fr",[nt("Closed revenue per dispo rep",(o.closed_per_dispo||[]).map(r=>({label:r.label,primary:K(r.sum),secondary:`\xB7 ${D(r.count)} closings \xB7 avg ${K(r.avg)}`,barVal:r.sum})))]))},Cp=(t,e)=>{let o=t.marketing||{},r=o.lead_quality||{};e.appendChild(oo([lt("Open leads",D(r.open)),lt("Won (under contract+)",D(r.won)),lt("Lost / dead",D(r.lost))]));let a=(o.per_channel||[]).map(i=>[i.label,D(i.leads),D(i.offers),D(i.contracts),`${D(i.assigned_count)} / ${K(i.assigned_sum)}`,`${D(i.closed_count)} / ${K(i.closed_sum)}`,K(i.avg_deal)]);e.appendChild(ut("1fr",[er("Per marketing channel",["Channel","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],a)]));let s=(o.per_city||[]).slice(0,15).map(i=>[i.label,D(i.leads),D(i.offers),D(i.contracts),`${D(i.assigned_count)} / ${K(i.assigned_sum)}`,`${D(i.closed_count)} / ${K(i.closed_sum)}`,K(i.avg_deal)]);e.appendChild(ut("1fr",[er("Per city (top 15 by leads)",["City","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],s)])),e.appendChild(ut("1fr 1fr",[nt("Dead leads by channel",Ot(o.dead_by_channel)),nt("Dead leads by city",Ot(o.dead_by_city))]))},Ap=(t,e)=>{let o=t.tc||{};e.appendChild(oo([lt("Contracted",D(o.contracted),"in selected range"),lt("Closed",D(o.closed)),lt("Lost in escrow",D(o.lost_in_escrow)),lt("Fall-out rate",o.fallout_rate_pct==null?"\u2014":`${o.fallout_rate_pct}%`,"lost \xF7 (closed + lost)")])),e.appendChild(ut("1fr 1fr",[nt("Deals per TC (contracted in range)",Ot(o.per_tc)),nt("Open escrows by stage",Ot(o.open_by_stage))]));let r=(o.board||[]).map(a=>[a.name,a.stage,a.owner,K(a.value),wn(a.est_close),a.acq_closer,a.dispo_rep]);e.appendChild(ut("1fr",[er("TC deal board (open escrows)",["Deal","Stage","TC","Value","Est. close","Closer","Dispo"],r)]))},Lp=(t,e)=>{let o=t.velocity||{},r=o.offers_per_contract||{};e.appendChild(oo([lt("Offers per contract",r.ratio==null?"\u2014":String(r.ratio),`${D(r.offers)} offers \xB7 ${D(r.contracts)} contracts`)]));let a=d=>(d||[]).map(l=>({label:l.label,primary:`${l.avg_days} days`,secondary:`\xB7 ${D(l.n)} deal${l.n===1?"":"s"}`,barVal:l.avg_days}));e.appendChild(ut("1fr 1fr",[nt("Days lead \u2192 contract, by source",a(o.days_to_contract_by_source)),nt("Days contract \u2192 close, by source",a(o.days_contract_to_close_by_source))]));let s=(o.leads_per_contract_by_source||[]).map(d=>[d.label,D(d.leads),D(d.contracts),d.ratio==null?"\u2014":`${d.ratio} : 1`]);e.appendChild(ut("1fr",[er("Leads per contract, by source",["Source","Leads","Contracts","Leads : contract"],s)]));let i=o.talk_time||{};i.available||e.appendChild(S("div",`${or}border-left:3px solid ${n.amber};border-radius:0 ${v.lg} ${v.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Talk time per contract per rep \u2014 coming in v2.</strong> ${rt(i.note||"")}`))},eo=t=>`padding:5px 12px;border-radius:${v.pill};border:1px solid ${t?n.emeraldBorder:n.steel};background:${t?n.emeraldGlow:"transparent"};color:${t?n.emerald:n.ash};font-family:${b.sans};font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;`,ae=()=>{let t=document.getElementById(tr);if(!t)return;let e=t.querySelector("[data-ws-analytics-body]"),o=t.querySelector("[data-ws-analytics-controls]");if(!e||!o)return;o.innerHTML="";let r=S("div","display:flex;flex-wrap:wrap;gap:6px;align-items:center;");for(let m of fp){let h=S("button",eo(P.range===m.key),rt(m.label));h.onclick=()=>{P.range=m.key,m.key!=="custom"?ve():ae()},r.appendChild(h)}if(P.range==="custom"){let m=`background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:12px;padding:4px 8px;color-scheme:dark;`,h=S("input",m);h.type="date",h.value=P.customStart;let _=S("input",m);_.type="date",_.value=P.customEnd;let u=S("button",eo(!0),"Apply");u.onclick=()=>{P.customStart=h.value,P.customEnd=_.value,P.customStart&&P.customEnd&&ve()},r.appendChild(h),r.appendChild(_),r.appendChild(u)}let a=S("button",eo(!1)+"margin-left:auto;","\u21BB Refresh");a.onclick=()=>void ve(!0),r.appendChild(a),o.appendChild(r);let s=S("div","display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;");for(let m of xp){let h=S("button",eo(P.tab===m.key),rt(m.label));h.onclick=()=>{P.tab=m.key,ae()},s.appendChild(h)}if(o.appendChild(s),e.innerHTML="",P.loading){e.appendChild(S("div",`padding:60px;text-align:center;color:${n.ash};font-family:${b.sans};font-size:13px;`,"Computing analytics\u2026"));return}if(P.error){let m=S("div",`padding:40px;text-align:center;color:${n.crimson};font-family:${b.sans};font-size:13px;`,`Couldn't load analytics: ${rt(P.error)}`),h=S("button",eo(!0)+"margin:14px auto 0;display:inline-block;","Retry");h.onclick=()=>void ve(!0);let _=S("div","text-align:center;");_.appendChild(m),_.appendChild(h),e.appendChild(_);return}let i=P.data;if(!i){ve();return}let d=i.range||{};e.appendChild(S("div",`font-family:${b.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.coolGray};margin:0 0 12px;`,`${rt(d.label||"")} \xB7 ${wn(d.start)} \u2192 ${wn(d.end)} \xB7 ${D((i.meta||{}).opps)} opps \xB7 ${D((i.meta||{}).contacts)} contacts`));let l=i.insights||[];if(l.length){let m=S("div","display:flex;flex-direction:column;gap:6px;margin:0 0 16px;");for(let h of l.slice(0,6)){let _=h.level==="warn";m.appendChild(S("div",`padding:8px 12px;border-left:3px solid ${_?n.amber:n.blue};background:${_?n.amberGlow:n.blueGlow};border-radius:0 ${v.sm} ${v.sm} 0;font-family:${b.sans};font-size:12px;color:${n.bone};`,rt(h.text)))}e.appendChild(m)}let p=S("div","");P.tab==="company"?Ep(i,p):P.tab==="acq"?$p(i,p):P.tab==="dispo"?Tp(i,p):P.tab==="marketing"?Cp(i,p):P.tab==="tc"?Ap(i,p):Lp(i,p),e.appendChild(p)},Sp=()=>{if(document.getElementById(tr))return;P.open=!0;let t=S("div",`position:fixed;inset:0;z-index:100000;background:${n.obsidian};display:flex;flex-direction:column;font-family:${b.sans};`);t.id=tr;let e=S("div",`padding:18px 24px 14px;border-bottom:1px solid ${n.slate};flex-shrink:0;`),o=S("div","display:flex;align-items:center;gap:12px;margin-bottom:12px;");o.appendChild(S("div",`font-family:${b.mono};font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${n.bone};`,`Analytics <span style="color:${n.emerald};">\xB7</span> <span style="color:${n.ash};">REInvest OS</span>`));let r=S("button",`margin-left:auto;background:transparent;border:1px solid ${n.steel};border-radius:${v.sm};color:${n.ash};font-size:14px;line-height:1;padding:6px 10px;cursor:pointer;`,"\u2715");r.onclick=Ns,o.appendChild(r),e.appendChild(o),e.appendChild(S("div","","")).setAttribute("data-ws-analytics-controls","1"),t.appendChild(e);let a=S("div","flex:1;overflow-y:auto;padding:20px 24px 40px;");a.setAttribute("data-ws-analytics-body","1"),t.appendChild(a),document.body.appendChild(t),document.addEventListener("keydown",zs),ae(),P.data||ve()},zs=t=>{t.key==="Escape"&&Ns()},Ns=()=>{P.open=!1,document.getElementById(tr)?.remove(),document.removeEventListener("keydown",zs)},qs=()=>{let t=window.location.pathname.includes("/dashboard"),e=document.getElementById(Fs);if(!t){e?.remove();return}if(e)return;let o=S("button",`position:fixed;bottom:52px;right:16px;z-index:99990;display:inline-flex;align-items:center;gap:8px;padding:9px 16px;background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.pill};font-family:${b.mono};font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 24px rgba(15,181,126,0.35);`,"\u25A6 Analytics");o.id=Fs,o.onclick=Sp,document.body.appendChild(o),c.debug("[analytics] launcher mounted")};var Ws="ws-buybox-nav-icon",Tn="ws-buybox-panel",Us="ws-buybox-modal",Ip="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",Cn="https://mcclivetim.github.io/reinvest-os-cdn/geo",rr=null,ro=null,no=null,$n=async()=>{if(rr)return rr;try{let t=await fetch(`${Cn}/states.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);return rr=await t.json(),rr}catch(t){return c.error("[buy-box] failed to fetch states.json",t),[]}},Mp=async t=>{if(!ro)try{let e=await fetch(`${Cn}/counties.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);ro=await e.json()}catch(e){return c.error("[buy-box] failed to fetch counties.json",e),[]}return ro?.[t]??[]},Pp=async t=>{if(!no)try{let e=await fetch(`${Cn}/cities.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);no=await e.json()}catch(e){return c.error("[buy-box] failed to fetch cities.json",e),[]}return no?.[t]??[]},An=async t=>await(await fetch(Ip,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json(),Op=(t,e)=>An({tenant_id:t,action:"list",buyer_contact_id:e}),Bp=(t,e,o,r)=>An({tenant_id:t,action:"add",buyer_contact_id:e,geo_level:o,geo_value:r}),Rp=(t,e)=>An({tenant_id:t,action:"remove",entry_id:e}),G=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Hp=(t,e)=>{let o=e.find(r=>r.code===t);return o?`${o.name} (${t})`:t},Dp='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',Fp='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',zp="nav.w-13, nav[class*='w-13']",Np=".flex-1.h-full.relative.overflow-hidden.rounded-lg",qp=async()=>{try{return await M(zp,{timeoutMs:2500})}catch{return null}},Up=async()=>{try{return await M(Np,{timeoutMs:2500})}catch{return null}},jp=t=>t.querySelector("div[class*='bg-contacts-panel']")??null,Wp=(t,e)=>{let o=document.createElement("div");return o.id=Tn,o.dataset.buyerContactId=e,o.style.cssText=`
    width: 100%; height: 100%;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    display: none;
    flex-direction: column;
    overflow: hidden;
    color: ${n.bone};
    font-family: ${b.sans};
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
        font-family: ${b.sans}; font-size: 13px; font-weight: 600;
      ">+ Add Area</button>
    </div>
    <div id="ws-buybox-body" style="
      flex: 1; overflow-y: auto; padding: 14px 16px;
      font-size: 13px; color: ${n.bone};
    ">
      <div style="color: ${n.ash}; font-style: italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{Yp(t,e,()=>Ln(t,e))}),o},Ln=async(t,e)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([Op(t,e),$n()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${G(r.error||"Failed to load buy-box entries")}</div>`;return}Gp(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,t,e)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${G(r.message)}</div>`}},Gp=(t,e,o,r,a)=>{if(e.state.length+e.county.length+e.city.length+e.zip.length===0){t.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let d=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(l=>e[l.key].length>0).map(l=>{let p=e[l.key].map(m=>{let h=l.key==="state"?Hp(m.geo_value,o):m.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${G(h)}</span>
              <button type="button" data-entry-id="${G(m.id)}" data-entry-label="${G(h)}" class="ws-buybox-remove" aria-label="Remove ${G(h)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${v.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${Fp}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${b.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${G(l.label)} (${e[l.key].length})</div>
          ${p}
        </div>
      `}).join("");t.innerHTML=d,t.querySelectorAll(".ws-buybox-remove").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.color=n.crimson}),l.addEventListener("mouseleave",()=>{l.style.color=n.ash}),l.addEventListener("click",()=>{let p=l.dataset.entryId||"",m=l.dataset.entryLabel||"this area";confirm(`Remove "${m}" from this buyer's buy-box?`)&&(l.disabled=!0,Rp(r,p).then(h=>{if(!h.ok){alert(`Failed to remove: ${h.error||"unknown error"}`),l.disabled=!1;return}Ln(r,a)}).catch(h=>{alert(`Network error: ${h.message}`),l.disabled=!1}))})})},nr=!1,Gs=(t,e)=>{nr=e;let o=jp(t.panelArea);console.log(`[buy-box] setActive(${e}) \u2014 nativePanel=${!!o} panel=${!!t.panel} iconBtn=${!!t.iconBtn}`),e?(t.iconBtn.className=Kp,t.iconBtn.dataset.active="true",o&&(t.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),t.panel.style.display="flex",Ln(t.tenantId,t.buyerContactId)):(t.iconBtn.className=Ks,delete t.iconBtn.dataset.active,t.panel.style.display="none",o&&(o.style.display=t.nativePanelOriginalDisplay||""))},Ks="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",Kp="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",Vp=t=>{let e=document.createElement("button");return e.id=Ws,e.type="button",e.title="Buy-Box",e.setAttribute("aria-label","Buy-Box"),e.className=Ks,e.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${Dp.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,e.addEventListener("click",o=>{o.stopPropagation();let r=t();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!nr;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),Gs(r,a)}),e},Yp=(t,e,o)=>{let r=document.getElementById(Us);r&&r.remove();let a=document.createElement("div");a.id=Us,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${b.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(480px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",w=>{w.target===a&&a.remove()});let i={step:1,granularity:null,stateCode:null,value:null},d=async()=>{if(i.step===1)s.innerHTML=l(),p();else if(i.step===2){s.innerHTML=m();let w=await $n();s.innerHTML=h(w),_(w)}else if(i.step===3)if(i.granularity==="zip")s.innerHTML=g(),$();else if(i.granularity==="state"){let w=await $n();s.innerHTML=x(w),f(w)}else i.granularity==="county"?(s.innerHTML=u(i.stateCode||""),await Mp(i.stateCode||""),s.innerHTML=k("County"),y()):i.granularity==="city"&&(s.innerHTML=u(i.stateCode||""),await Pp(i.stateCode||""),s.innerHTML=k("City"),y())},l=()=>`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(w=>`
        <button type="button" data-granularity="${w}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${v.md};
          padding: 20px 16px; cursor: pointer; font-family: ${b.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${w.charAt(0).toUpperCase()+w.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
    </div>
  `,p=()=>{s.querySelectorAll(".ws-buybox-tile").forEach(w=>{w.addEventListener("mouseenter",()=>{w.style.borderColor=n.emerald,w.style.background=n.emeraldGlow}),w.addEventListener("mouseleave",()=>{w.style.borderColor=n.steel,w.style.background=n.steel}),w.addEventListener("click",()=>{let E=w.dataset.granularity;i.granularity=E,i.step=E==="zip"?3:2,d()})}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},m=()=>`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,h=w=>`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${G(i.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${b.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};">
      ${w.map(E=>`
        <div data-state-code="${G(E.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${G(E.name)} <span style="color: ${n.ash}; font-family: ${b.mono}; font-size: 11px;">(${G(E.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
    </div>
  `,_=w=>{let E=s.querySelector("#ws-buybox-state-search"),L=s.querySelectorAll(".ws-buybox-state-row");L.forEach(O=>{O.addEventListener("mouseenter",()=>{O.style.background=n.emeraldGlow}),O.addEventListener("mouseleave",()=>{O.style.background="transparent"}),O.addEventListener("click",()=>{i.stateCode=O.dataset.stateCode||"",i.step=3,d()})}),E?.addEventListener("input",()=>{let O=(E.value||"").toLowerCase().trim();w.forEach((j,U)=>{let W=L[U];if(!W)return;let N=!O||j.name.toLowerCase().includes(O)||j.code.toLowerCase()===O;W.style.display=N?"":"none"})}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>E?.focus(),0)},u=w=>`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${G(w)}\u2026</div>
  `,x=w=>{let E=w.find(L=>L.code===i.stateCode);return`
      <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${v.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${G(E?E.name:i.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${E?G(E.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${b.sans}; font-size: 13px; font-weight: 600;">Add ${E?G(E.name):"State"}</button>
        </div>
      </div>
    `},f=w=>{s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>T(i.stateCode||""))},k=w=>{let E=i.granularity==="county"?ro?.[i.stateCode||""]??[]:no?.[i.stateCode||""]??[];return`
      <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${G(w)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${E.length.toLocaleString()} ${G(w).toLowerCase()}s in ${G(i.stateCode||"")}.</div>
      <input id="ws-buybox-value-search" type="text" placeholder="Start typing\u2026" autofocus style="
        width: 100%; box-sizing: border-box; padding: 8px 12px;
        background: ${n.obsidian}; color: ${n.bone};
        border: 1px solid ${n.steel}; border-radius: ${v.sm};
        font-family: ${b.sans}; font-size: 13px; margin-bottom: 10px;
      ">
      <div id="ws-buybox-value-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};"></div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-top: 8px;"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 12px;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Back</button>
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
      </div>
    `},y=()=>{let w=i.granularity==="county"?ro?.[i.stateCode||""]??[]:no?.[i.stateCode||""]??[],E=s.querySelector("#ws-buybox-value-search"),L=s.querySelector("#ws-buybox-value-list");if(!E||!L)return;let O=j=>{let U=j.toLowerCase().trim();if(!U){L.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let W=w.filter(N=>N.toLowerCase().includes(U)).slice(0,50);if(W.length===0){L.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${G(i.stateCode||"")}.</div>`;return}L.innerHTML=W.map(N=>`
        <div data-value="${G(N)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${G(N)}
        </div>
      `).join(""),L.querySelectorAll(".ws-buybox-value-row").forEach(N=>{N.addEventListener("mouseenter",()=>{N.style.background=n.emeraldGlow}),N.addEventListener("mouseleave",()=>{N.style.background="transparent"}),N.addEventListener("click",()=>{i.value=N.dataset.value||"",T(i.value)})})};E.addEventListener("input",()=>O(E.value)),O(""),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>E.focus(),0)},g=()=>`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Enter Zip</div>
    <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">5-digit US zip code. Zips don't need a state (most are unique to one state anyway).</div>
    <input id="ws-buybox-zip" type="text" inputmode="numeric" placeholder="33101" autofocus maxlength="5" style="
      width: 100%; box-sizing: border-box; padding: 12px 14px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${b.mono}; font-size: 18px; text-align: center; letter-spacing: 0.12em;
      margin-bottom: 10px;
    ">
    <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: space-between;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Back</button>
      <div style="display: flex; gap: 8px;">
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
        <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${b.sans}; font-size: 13px; font-weight: 600;">Add Zip</button>
      </div>
    </div>
  `,$=()=>{let w=s.querySelector("#ws-buybox-zip"),E=s.querySelector("#ws-buybox-err");w&&(w.addEventListener("input",()=>{w.value=w.value.replace(/\D/g,"").slice(0,5),E&&(E.textContent="")}),w.addEventListener("keydown",L=>{L.key==="Enter"&&(L.preventDefault(),A())}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,d()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void A()),setTimeout(()=>w.focus(),0))},A=async()=>{let w=s.querySelector("#ws-buybox-zip"),E=s.querySelector("#ws-buybox-err"),L=(w?.value||"").trim();if(!/^\d{5}$/.test(L)){E&&(E.textContent="Zip must be exactly 5 digits.");return}await T(L)},T=async w=>{if(!i.granularity||!w)return;let E=s.querySelector("#ws-buybox-err"),L=s.querySelector("#ws-buybox-save");L&&(L.disabled=!0,L.textContent="Adding\u2026"),E&&(E.textContent="");try{let O=await Bp(t,e,i.granularity,w);if(!O.ok){E&&(E.textContent=O.error||"Failed to add entry."),L&&(L.disabled=!1,L.textContent="Add");return}o(),s.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${G(w)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${O.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{i.step=1,i.granularity=null,i.stateCode=null,i.value=null,d()},900)}catch(O){E&&(E.textContent=`Network error: ${O.message}`),L&&(L.disabled=!1,L.textContent="Add")}};d()},En=!1,ye=null,ao=null,js=()=>{document.getElementById(Ws)?.remove(),document.getElementById(Tn)?.remove(),ao&&ye&&ye.nav.removeEventListener("click",ao,!0),ao=null,ye=null,nr=!1},Vs=()=>{Jp()},Jp=async()=>{if(!En){En=!0;try{let t=H();if(!t){js();return}let e=document.getElementById(Tn);if(e&&e.dataset.buyerContactId===t.contactId&&ye)return;js();let o=null;try{o=await $t(t.contactId,t.locationId)}catch(h){c.warn("[buy-box] Contact Type fetch failed",h);return}if(Tt(o)!=="buyer")return;if(!t.locationId){c.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,s]=await Promise.all([qp(),Up()]);if(!a||!s){c.warn("[buy-box] right-rail nav or panel area not found");return}let i=H();if(!i||i.contactId!==t.contactId)return;let d=Wp(t.locationId,t.contactId),l=Vp(()=>ye),p={buyerContactId:t.contactId,tenantId:t.locationId,nav:a,panelArea:s,iconBtn:l,panel:d,nativePanelOriginalDisplay:""};ye=p;let m=a.querySelector(".flex.flex-col.items-center.gap-2");m?m.appendChild(l):a.appendChild(l),s.appendChild(d),ao=h=>{let _=h.target;if(!_||p.iconBtn.contains(_))return;_.closest("button.sidebar-option-button")&&nr&&Gs(p,!1)},a.addEventListener("click",ao,!0),c.info(`[buy-box] right-rail mount complete for buyer ${t.contactId}`)}finally{En=!1}}};var Qs="ws-properties-nav-icon",Pn="ws-properties-panel",Ys="ws-properties-modal",On="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property",Qp=`${On}/list-for-contact`,Zp=`${On}/create-with-opp`,Xp=`${On}/add-contact`,tm=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],pt=t=>(t||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),em=(t,e)=>`/v2/location/${t}/objects/property/list?recordId=${e}`,Zs=t=>{if(t==null||t==="")return null;let e=Number(String(t).replace(/[^0-9.\-]/g,""));return Number.isFinite(e)&&e!==0?e:null},ar=t=>{let e=Zs(t);if(e===null)return"&mdash;";let o=Math.abs(e);return o>=1e6?`$${(e/1e6).toFixed(e%1e6?1:0)}M`:o>=1e3?`$${Math.round(e/1e3)}k`:`$${Math.round(e)}`},Sn=t=>{let e=Zs(t);return e===null?"&mdash;":e.toLocaleString()},Xs={easy:"Paint & Flooring",minor_rehab:"Kitchen & Bath",full_cosmetic:"Full Cosmetic",major_repairs:"Roof & Systems"},om=t=>{let e=(t||"").toString().trim();return e?pt(Xs[e]||e.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase())):"&mdash;"},rm=t=>{let e=(t||"").toString().trim();return e?Xs[e]||e:""},nm={single_family_residence_sfr:"Single Family Residence (SFR)",multifamily_24_units:"Multi-Family 2-4 Units",multifamily_5_units:"Multi-Family 5+ Units",land:"Land",commercial:"Commercial",mobile_home:"Mobile Home"},am=t=>{let e=(t||"").toString().trim();return e?nm[e]||e.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase()):""},Ut=(t,e,o)=>`<div style="min-width:0;"><div style="font-size:9px;color:${n.ash};text-transform:uppercase;letter-spacing:.4px;">${t}</div><div title="${pt(o||"")}" style="font-size:12px;color:${n.bone};font-weight:500;line-height:1.25;word-break:break-word;">${e}</div></div>`,sm=t=>`
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid ${n.steel};">
    ${Ut("Beds",Sn(t.beds))}
    ${Ut("Baths",Sn(t.baths))}
    ${Ut("Sq Ft",Sn(t.sqft))}
    ${Ut("Rehab",om(t.rehab_level),rm(t.rehab_level))}
    ${Ut("ARV",ar(t.arv))}
    ${Ut("IMV",ar(t.imv))}
    ${Ut("MAO",ar(t.mao))}
    ${Ut("Ask",ar(t.asking_price))}
  </div>`,ti=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000001; padding: 10px 18px; border-radius: ${v.sm};
    background: ${e==="ok"?n.emerald:n.crimson}; color: ${n.bone};
    font-family: ${b.sans}; font-size: 13px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  `,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4e3)},im='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',lm='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>',dm="nav.w-13, nav[class*='w-13']",cm=".flex-1.h-full.relative.overflow-hidden.rounded-lg",ei="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",pm="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",mm=async()=>{try{return await M(dm,{timeoutMs:2500})}catch{return null}},bm=async()=>{try{return await M(cm,{timeoutMs:2500})}catch{return null}},Bn=async(t,e)=>await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"})).json(),Ct=`width:100%;box-sizing:border-box;padding:8px 10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${b.sans};font-size:13px;outline:none;margin-bottom:10px;`,At=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,Rn=`background:${n.emerald};color:${n.bone};border:none;border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-family:${b.sans};font-size:13px;font-weight:600;`,oi=`background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 16px;cursor:pointer;font-family:${b.sans};font-size:13px;`,hm=(t,e)=>{let o=document.createElement("div");return o.id=Pn,o.dataset.contactId=e,o.style.cssText=`
    position: fixed; z-index: 9998; display: none;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.lg}; flex-direction: column; overflow: hidden;
    color: ${n.bone}; font-family: ${b.sans};
    box-shadow: 0 12px 40px rgba(0,0,0,0.55);
  `,o.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px 16px;border-bottom:1px solid ${n.steel};">
      <div>
        <div style="font-size:16px;font-weight:500;color:${n.bone};">Properties</div>
        <div style="font-size:11px;color:${n.ash};margin-top:2px;">Properties this seller owns</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button id="ws-prop-add" type="button" style="${Rn}">+ Add Property</button>
        <button id="ws-prop-close" type="button" title="Close" aria-label="Close" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};width:30px;height:30px;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;flex:0 0 auto;">&times;</button>
      </div>
    </div>
    <div id="ws-prop-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:13px;color:${n.bone};">
      <div style="color:${n.ash};font-style:italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-prop-add")?.addEventListener("click",()=>{_m(t,e,()=>Hn(t,e))}),o},Hn=async(t,e)=>{let o=document.querySelector("#ws-prop-body");if(o)try{let r=await Bn(Qp,{tenant_id:t,contact_id:e});if(!r.ok){o.innerHTML=`<div style="color:${n.crimson};">${pt(r.error||"Failed to load properties")}</div>`;return}um(o,r.properties||[],t,e)}catch(r){o.innerHTML=`<div style="color:${n.crimson};">Network error: ${pt(r.message)}</div>`}},um=(t,e,o,r)=>{if(!e.length){t.innerHTML=`<div style="text-align:center;padding:32px 0;color:${n.ash};">No properties yet.<br><span style="font-size:12px;">Click "+ Add Property" to create one (a deal is created automatically).</span></div>`;return}t.innerHTML=e.map(a=>{let s=/lost|abandon/i.test(a.deal_stage||""),i=s?n.crimson:n.emeraldBright,d=s?n.steel:n.emeraldBorder,l=a.has_acq_opp?`<span title="Deal stage" style="font-size:10px;color:${i};border:1px solid ${d};border-radius:${v.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">${pt(a.deal_stage||"Deal")}</span>`:`<span title="No ACQ deal yet" style="font-size:10px;color:${n.amber};border:1px solid ${n.steel};border-radius:${v.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">No deal</span>`,p=(a.roles||[]).map(m=>m==="seller_1"?"Seller 1":m==="seller_2"?"Seller 2":m==="tenant_contact"?"Tenant":m).join(", ");return`
      <div style="border:1px solid ${n.steel};border-radius:${v.md};padding:10px 12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div class="ws-prop-open" data-prop="${pt(a.property_record_id)}" title="Open property record" style="font-size:13px;font-weight:500;color:${n.bone};cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-width:0;">
            <span style="text-decoration:underline;text-decoration-color:${n.steel};text-underline-offset:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pt(a.address)}</span>
            <span style="color:${n.emeraldBright};font-size:12px;line-height:1;flex:0 0 auto;">&#8599;</span>
          </div>
          ${l}
        </div>
        <div style="font-size:11px;color:${n.ash};margin-top:3px;">${pt(p||"")}${a.property_type?" &middot; "+pt(am(a.property_type)):""}</div>
        ${sm(a)}
        <div style="margin-top:10px;">
          <button type="button" class="ws-prop-addperson" data-prop="${pt(a.property_record_id)}" data-addr="${pt(a.address)}" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:4px 10px;cursor:pointer;font-family:${b.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">${lm} Add person</button>
        </div>
      </div>
    `}).join(""),t.querySelectorAll(".ws-prop-addperson").forEach(a=>{a.addEventListener("click",()=>{vm(o,a.dataset.prop||"",a.dataset.addr||"this property",()=>Hn(o,r))})}),t.querySelectorAll(".ws-prop-open").forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.prop||"";s&&window.open(em(o,s),"_blank","noopener")}),a.addEventListener("mouseenter",()=>{a.style.color=n.emeraldBright}),a.addEventListener("mouseleave",()=>{a.style.color=n.bone})})},ri=()=>{document.getElementById(Ys)?.remove();let t=document.createElement("div");t.id=Ys,t.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${b.sans};`;let e=document.createElement("div");return e.style.cssText=`width:min(440px,92vw);background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`,t.appendChild(e),document.body.appendChild(t),t.addEventListener("click",o=>{o.target===t&&t.remove()}),{overlay:t,card:e}},_m=(t,e,o)=>{let{overlay:r,card:a}=ri();a.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add Property</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Creates the property linked to this seller and its own ACQ deal.</div>
    <label style="${At}">Street address</label>
    <input id="wp-address" type="text" style="${Ct}" placeholder="123 Main St" />
    <div style="display:flex;gap:10px;">
      <div style="flex:2;"><label style="${At}">City</label><input id="wp-city" type="text" style="${Ct}" /></div>
      <div style="flex:1;"><label style="${At}">State</label><input id="wp-state" type="text" maxlength="2" style="${Ct}" placeholder="NC" /></div>
      <div style="flex:1;"><label style="${At}">Zip</label><input id="wp-zip" type="text" maxlength="10" style="${Ct}" /></div>
    </div>
    <label style="${At}">Property type (optional)</label>
    <select id="wp-type" style="${Ct}">
      <option value="">\u2014 select \u2014</option>
      ${tm.map(i=>`<option value="${pt(i)}">${pt(i)}</option>`).join("")}
    </select>
    <div id="wp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wp-cancel" type="button" style="${oi}">Cancel</button>
      <button id="wp-save" type="button" style="${Rn}">Create property + deal</button>
    </div>
  `;let s=a.querySelector("#wp-err");a.querySelector("#wp-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#wp-save")?.addEventListener("click",async()=>{let i=u=>(a.querySelector(u)?.value||"").trim(),d=i("#wp-address"),l=i("#wp-city"),p=i("#wp-state"),m=i("#wp-zip"),h=(a.querySelector("#wp-type")?.value||"").trim();if(!d&&!l&&!m){s&&(s.textContent="Enter at least a street address.");return}let _=a.querySelector("#wp-save");_&&(_.disabled=!0,_.textContent="Creating\u2026"),s&&(s.textContent="");try{let u=await Bn(Zp,{tenant_id:t,contact_id:e,address:d,city:l,state:p,zip:m,property_type:h||void 0});if(!u.ok){s&&(s.textContent=u.error||"Failed to create property."),_&&(_.disabled=!1,_.textContent="Create property + deal");return}r.remove(),ti("Property + deal created \u2713"),o()}catch(u){s&&(s.textContent=`Network error: ${u.message}`),_&&(_.disabled=!1,_.textContent="Create property + deal")}}),setTimeout(()=>a.querySelector("#wp-address")?.focus(),0)},vm=(t,e,o,r)=>{let{overlay:a,card:s}=ri();s.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add person</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Attach a person to ${pt(o)}.</div>
    <label style="${At}">Role</label>
    <select id="wpp-role" style="${Ct}">
      <option value="seller_2">Second seller</option>
      <option value="tenant_contact">Tenant</option>
    </select>
    <div style="display:flex;gap:10px;">
      <div style="flex:1;"><label style="${At}">First name</label><input id="wpp-first" type="text" style="${Ct}" /></div>
      <div style="flex:1;"><label style="${At}">Last name</label><input id="wpp-last" type="text" style="${Ct}" /></div>
    </div>
    <label style="${At}">Phone (optional)</label>
    <input id="wpp-phone" type="text" style="${Ct}" placeholder="+1..." />
    <label style="${At}">Email (optional)</label>
    <input id="wpp-email" type="text" style="${Ct}" />
    <div id="wpp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wpp-cancel" type="button" style="${oi}">Cancel</button>
      <button id="wpp-save" type="button" style="${Rn}">Add person</button>
    </div>
  `;let i=s.querySelector("#wpp-err");s.querySelector("#wpp-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#wpp-save")?.addEventListener("click",async()=>{let d=s.querySelector("#wpp-role")?.value||"seller_2",l=x=>(s.querySelector(x)?.value||"").trim(),p=l("#wpp-first"),m=l("#wpp-last"),h=l("#wpp-phone"),_=l("#wpp-email");if(!p&&!m){i&&(i.textContent="Enter at least a first or last name.");return}let u=s.querySelector("#wpp-save");u&&(u.disabled=!0,u.textContent="Adding\u2026"),i&&(i.textContent="");try{let x=await Bn(Xp,{tenant_id:t,property_record_id:e,role:d,new_contact:{firstName:p,lastName:m,phone:h||void 0,email:_||void 0}});if(!x.ok){i&&(i.textContent=x.error||"Failed to add person."),u&&(u.disabled=!1,u.textContent="Add person");return}a.remove(),ti("Person added \u2713"),r()}catch(x){i&&(i.textContent=`Network error: ${x.message}`),u&&(u.disabled=!1,u.textContent="Add person")}}),setTimeout(()=>s.querySelector("#wpp-first")?.focus(),0)},sr=!1,ht=null,In=!1,so=null,ym=(t,e,o)=>{let r=e.getBoundingClientRect(),a=null;try{a=o?o.getBoundingClientRect():null}catch{a=null}let s=!!(a&&a.height>40&&a.width>=280&&a.width<=520&&a.left>=r.left-560),i=s&&a?Math.round(a.width):400,d=Math.round(s&&a?a.top:r.top),l=Math.round(s&&a?a.height:r.height),p=6;t.style.top=`${d}px`,t.style.height=`${l}px`,t.style.width=`${i}px`,t.style.left=`${Math.round(r.left-i-p)}px`,t.style.right="auto",t.style.bottom="auto"},gm=()=>{try{let t=new URL(window.location.href);t.searchParams.get("view")!=="activities"&&(t.searchParams.set("view","activities"),history.replaceState(history.state,"",t.toString()))}catch{}},Mn=(t,e)=>{sr=e,e?(t.iconBtn.className=pm,t.iconBtn.dataset.active="true",gm(),ym(t.panel,t.nav,t.panelArea),t.panel.style.display="flex",Hn(t.tenantId,t.contactId)):(t.iconBtn.className=ei,delete t.iconBtn.dataset.active,t.panel.style.display="none")},fm=()=>{let t=document.createElement("button");return t.id=Qs,t.type="button",t.title="Properties",t.setAttribute("aria-label","Properties"),t.className=ei,t.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;line-height:0;pointer-events:none;">${im.replace("<svg ",'<svg style="pointer-events:none;" ')}</span>`,t.addEventListener("click",e=>{e.stopPropagation(),ht&&Mn(ht,!sr)}),t},Js=()=>{document.getElementById(Qs)?.remove(),document.getElementById(Pn)?.remove(),so&&ht&&ht.nav.removeEventListener("click",so,!0),so=null,ht=null,sr=!1},ni=()=>{xm()},xm=async()=>{if(!In){In=!0;try{let t=H();if(!t||!t.locationId){Js();return}let e=document.getElementById(Pn);if(e&&e.dataset.contactId===t.contactId&&ht)return;Js();let o=null;try{o=await $t(t.contactId,t.locationId)}catch(m){c.warn("[properties] Contact Type fetch failed",m);return}if(Tt(o)!=="seller")return;let[a,s]=await Promise.all([mm(),bm()]);if(!a||!s){c.warn("[properties] right-rail nav or panel area not found");return}let i=H();if(!i||i.contactId!==t.contactId)return;let d=hm(t.locationId,t.contactId),l=fm();ht={contactId:t.contactId,tenantId:t.locationId,nav:a,panelArea:s,iconBtn:l,panel:d},(a.querySelector(".flex.flex-col.items-center.gap-2")||a).appendChild(l),document.body.appendChild(d),d.querySelector("#ws-prop-close")?.addEventListener("click",()=>{ht&&Mn(ht,!1)}),so=m=>{let h=m.target;!h||ht&&ht.iconBtn.contains(h)||h.closest("button.sidebar-option-button")&&sr&&ht&&Mn(ht,!1)},a.addEventListener("click",so,!0),c.info(`[properties] right-rail mount complete for seller ${t.contactId}`)}finally{In=!1}}};var ai="ws-non-seller-contact",si=()=>{wm()},wm=async()=>{let t=H();if(!t||!t.contactId||!t.locationId){document.documentElement.classList.remove(ai);return}let e="seller";try{e=Tt(await $t(t.contactId,t.locationId))}catch(o){c.warn("[seller-flag] contact-type resolve failed",o)}document.documentElement.classList.toggle(ai,e!=="seller")};var jt="ws-crm-claim-release-pill",km="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",Em="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",$m=async t=>{let e=await fetch(km,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,contact_id:t.contactId,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Claim/Release Get returned ${e.status} ${e.statusText}`);return await e.json()},Tm=async t=>{let e=await fetch(Em,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,contact_id:t.contactId,triggered_by_user_id:t.userId,action:t.action}),credentials:"omit"});if(!e.ok)throw new Error(`Claim/Release Set returned ${e.status} ${e.statusText}`);return await e.json()},di=t=>{let e=Array.from(t.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return e?e.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},fe=(t,e)=>{let o=e==="claim"?"emerald":"amber",r=e==="claim"?n.emerald:n.amber;t.dataset.mode=e,t.style.cssText=Ms(o),t.title=e==="claim"?"Take ownership of this lead":"Return this lead to the pool",t.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${e==="claim"?"Claim Lead":"Release Lead"}</span>
  `},Cm=({contactId:t,mode:e})=>{let o=document.createElement("button");return o.id=jt,o.type="button",o.dataset.contactId=t,fe(o,e),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=H();if(!a||!a.locationId||a.contactId!==t)return;let s=R();if(!s){c.warn("Claim/Release click: no user ID detected (login session not exposing it)");let d=o.querySelector(".ws-cr-label");d&&(d.textContent="Sign-in needed"),setTimeout(()=>fe(o,r),2500);return}c.info(`Claim/Release click \u2014 contact=${t} mode=${r} user=${s}`);let i=r==="claim"?"release":"claim";fe(o,i),o.disabled=!0,o.style.opacity="0.8";try{let d=await Tm({contactId:t,locationId:a.locationId,userId:s,action:r}),l=d?.mode==="claim"||d?.mode==="release"?d.mode:i;fe(o,l),c.info(`Claim/Release done \u2192 new mode: ${l}`)}catch(d){c.error("Claim/Release Set webhook failed",d),fe(o,r);let l=o.querySelector(".ws-cr-label");if(l){let p=l.textContent??"";l.textContent="Try again",setTimeout(()=>{l.textContent==="Try again"&&(l.textContent=p)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},ii=async t=>{try{let e=await $m({contactId:t.contactId,locationId:t.locationId,userId:R()}),o=document.getElementById(jt);if(!o||o.dataset.contactId!==t.contactId)return;let r=e?.mode==="release"?"release":"claim";fe(o,r)}catch(e){c.warn("Claim/Release Get failed; pill stays in default 'claim' mode",e)}},Am=async(t,e=1e4)=>{let o=Date.now();for(;Date.now()-o<e;){let r=di(t);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},li=(t,e)=>{let o=Cm({contactId:e,mode:"claim"}),r=document.createElement("span");r.id=`${jt}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),t.appendChild(r)},ge=null,Lm=async()=>{let t=H();if(!t){ge?.disconnect(),ge=null,document.getElementById(jt)?.remove();return}let e=document.getElementById(jt);if(!(e&&e.dataset.contactId===t.contactId)){e&&e.remove();try{let o=await M("#record-details-lhs",{timeoutMs:1e4}),r=await Am(o),a=H();if(!a||a.contactId!==t.contactId)return;if(!r){c.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}li(r,t.contactId),c.debug(`Mounted Claim/Release pill next to name for ${t.contactId}`),document.getElementById(jt)&&t.locationId&&ii({contactId:t.contactId,locationId:t.locationId}),ge?.disconnect(),ge=new MutationObserver(async()=>{if(!(H()?.contactId===t.contactId)){ge?.disconnect();return}if(document.getElementById(jt))return;let d=di(o);d&&(li(d,t.contactId),document.getElementById(jt)&&t.locationId&&ii({contactId:t.contactId,locationId:t.locationId}),c.debug("Re-mounted Claim/Release pill after React wipe"))}),ge.observe(o,{childList:!0,subtree:!0})}catch(o){c.warn("Could not mount Claim/Release pill:",o)}}},ci=()=>{Lm()};var vi="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",Sm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set",Im="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",Mm=async({contactId:t,locationId:e,status:o,userId:r,deadReason:a,webhookUrl:s,kind:i})=>{let d=s||vi,l;if(i==="buyer"){let m=fi.find(_=>_.label===o),h=m?m.value:o.toLowerCase().replace(/\s+/g,"-");l={tenant_id:e,contact_id:t,new_status:h,triggered_by_user_id:r??""}}else{let m={call_status:o,triggered_by_user_id:r??""};a&&(m.dead_reason=a),l={contact_id:t,location:{id:e},customData:m}}let p=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l),credentials:"omit"});if(!p.ok)throw new Error(`Webhook returned ${p.status} ${p.statusText}`)},Pm=async({contactId:t,tenantId:e})=>{let o=await fetch(Im,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()},xe="ws-crm-contact-actions-bar",yi="ws-crm-call-status-dropdown",gi="ws-crm-call-status-menu",lr="ws-crm-offer-made-modal",pi=!1,Om=()=>{pi||(pi=!0,document.addEventListener("click",t=>{let e=document.getElementById(gi);if(!e||e.style.display==="none")return;let o=document.getElementById(yi);o&&!o.contains(t.target)&&(e.style.display="none")}))},Bm=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],fi=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"vm-left",label:"VM Left",color:"purple"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"wrong-market",label:"Wrong Market",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],Rm=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],Hm=async()=>{for(let t of Rm)try{let e=await M(t,{timeoutMs:2e3});if(e)return c.debug(`[actions-bar] mount target found via selector: ${t}`),e}catch{}try{let t=await M("#contact-conversation-panel",{timeoutMs:2e3});if(t.parentElement)return c.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),t.parentElement}catch{}for(let t of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let e=await M(t,{timeoutMs:1500});if(e)return c.debug(`[actions-bar] mount target via fallback: ${t}`),e.parentElement??e}catch{}return c.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},Dm=({contactId:t,kind:e})=>{let o=e==="buyer"?fi:Bm,r=e==="buyer"?Sm:vi,a=e==="buyer"?"Buyer Call Status":"Seller Call Status",s=document.createElement("div");s.id=yi,s.style.cssText="position: relative; flex-shrink: 0; order: 1;";let i=document.createElement("button");i.type="button",i.style.cssText=B,i.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let d=document.createElement("div");return d.id=gi,d.style.cssText=`
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
  `,o.forEach(l=>{let p=document.createElement("button");p.type="button",p.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${v.sm};
      font-family: ${b.sans};
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
        background: ${gn[l.color]};
        flex-shrink: 0;
      "></span>
      <span>${l.label}</span>
    `,p.addEventListener("mouseenter",()=>{p.style.background=n.slate}),p.addEventListener("mouseleave",()=>{p.style.background="transparent"}),p.addEventListener("click",async()=>{c.info(`Call Status set to "${l.label}" (${l.value}, ${l.color}) for contact ${t}`);let m=i.firstElementChild,h=i.children[1],_=i.children[2];m&&(m.style.background=gn[l.color]),h&&(h.textContent=l.label),d.style.display="none";let x=H()?.locationId,f=R();if(!x){c.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),h&&(h.textContent=`${l.label} (no tenant!)`),h&&(h.style.color=n.amber);return}if(e==="seller"&&l.color==="green"&&!f){c.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),h&&(h.textContent=`${l.label} (no user!)`),h&&(h.style.color=n.amber);return}let k=_?.textContent??"\u25BE",y=async g=>{_&&(_.textContent="\u2026"),i.style.opacity="0.75";try{await Mm({contactId:t,locationId:x,status:l.label,userId:f,deadReason:g,webhookUrl:r,kind:e}),_&&(_.textContent="\u2713"),setTimeout(()=>{_&&(_.textContent=k),i.style.opacity="1"},900)}catch($){c.warn("Call Status webhook failed:",$),_&&(_.textContent="\u2717"),h&&(h.style.color=n.amber),i.style.opacity="1",setTimeout(()=>{_&&(_.textContent=k),h&&(h.style.color=n.bone)},1800)}};if(e==="seller"&&l.value==="dead-deal"){let g=h?.textContent??"";jm($=>{y($)},()=>{h&&(h.textContent=g)});return}if(e==="seller"&&l.value==="appointment-booked"){let g=h?.textContent??"";try{(await Pm({contactId:t,tenantId:x})).ok?await y():Wm(()=>{y()},()=>{h&&(h.textContent=g)})}catch($){c.warn("Appointment sanity check failed; firing anyway:",$),await y()}return}await y()}),d.appendChild(p)}),i.addEventListener("click",l=>{l.stopPropagation(),d.style.display=d.style.display==="none"?"block":"none"}),Om(),s.appendChild(i),s.appendChild(d),s},Fm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",zm=async t=>{let e=await fetch(Fm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,kind:t.kind,amount:t.amount,expires_at:t.expiresAt,triggered_by_user_id:t.userId,opp_id:t.oppId??void 0,property_record_id:t.propertyRecordId??void 0,asking_price:t.askingPrice??void 0}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},Nm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/list-for-contact",Fn=t=>(t||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),qm=async(t,e)=>{let o=await fetch(Nm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:e}),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();return(Array.isArray(r.properties)?r.properties:[]).filter(s=>s.has_acq_opp&&s.opp_id).map(s=>({oppId:String(s.opp_id),propertyRecordId:String(s.property_record_id||""),address:String(s.address||"(no address)"),dealStage:s.deal_stage||null,askingPrice:s.asking_price??null}))},Um=t=>new Promise(e=>{document.getElementById(lr)?.remove();let o=document.createElement("div");o.id=lr,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${b.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=t.map((i,d)=>`
      <button type="button" class="ws-deal-pick" data-i="${d}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${b.sans};">
        <div style="font-size:14px;font-weight:500;">${Fn(i.address)}</div>
        ${i.dealStage?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Fn(i.dealStage)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This seller has ${t.length} deals</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is this offer for?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-deal-cancel" type="button" style="${B} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),e(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-deal-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-deal-pick").forEach(i=>{i.addEventListener("click",()=>s(t[Number(i.dataset.i)]??null))})}),io=(t,e="seller",o)=>{document.getElementById(lr)?.remove();let r=e==="seller",a=r?"Record Your Offer":"Record Buyer's Offer",s=r?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=r?n.emerald:n.amber,d=document.createElement("div");d.id=lr,d.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `;let l=document.createElement("div");l.style.cssText=`
    width: min(420px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let p=new Date,m=new Date(p.getTime()+5*24*60*60*1e3).toISOString().slice(0,10),h=r?`
    <label style="
      display: block;
      font-family: ${b.mono};
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
    ">Offer Expires</label>
    <input id="ws-offer-expires" type="date" value="${m}"
      style="
        width: 100%;
        background: ${n.slate};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        color: ${n.bone};
        font-family: ${b.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 16px;
        outline: none;
        box-sizing: border-box;
      " />`:"",_=r&&o&&o.address?`<div style="font-size:12px;color:${n.bone};background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 10px;margin-bottom:16px;">Offer for: <strong>${Fn(o.address)}</strong></div>`:"",u=o&&o.askingPrice!=null&&Number(o.askingPrice)>0?String(Number(o.askingPrice)):"",x=r&&o&&o.propertyRecordId?`
    <label style="display:block;font-family:${b.mono};font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin-bottom:6px;">Seller's Asking Price <span style="text-transform:none;letter-spacing:0;color:${n.ash};">(optional)</span></label>
    <div style="display:flex;align-items:center;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:0 12px;margin-bottom:16px;">
      <span style="color:${n.ash};font-family:${b.mono};font-size:14px;">$</span>
      <input id="ws-offer-asking" type="number" min="0" step="100" placeholder="0" value="${u}" style="flex:1;background:transparent;border:none;outline:none;color:${n.bone};font-family:${b.mono};font-size:14px;padding:10px 8px;" />
    </div>`:"";l.innerHTML=`
    <div style="
      font-family: ${b.mono};
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
      font-family: ${b.mono};
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
      <span style="color: ${n.ash}; font-family: ${b.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${b.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    ${x}

    ${h}

    <div id="ws-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${B}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${ot}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,d.appendChild(l),document.body.appendChild(d);let f=()=>d.remove();d.addEventListener("click",$=>{$.target===d&&f()});let k=l.querySelector("#ws-offer-error"),y=l.querySelector("#ws-offer-cancel"),g=l.querySelector("#ws-offer-submit");y?.addEventListener("click",f),g?.addEventListener("click",async()=>{let $=(l.querySelector("#ws-offer-amount")?.value??"").trim(),A=r?l.querySelector("#ws-offer-expires")?.value??"":"";if(!$||Number($)<=0){k&&(k.textContent="Enter a positive offer amount."),c.warn("Offer Made submit blocked \u2014 invalid amount");return}let T=Number($);if(T<100){k&&(k.textContent=`That looks low \u2014 did you mean $${(T*1e3).toLocaleString("en-US")}?`);return}let E=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),L=E?E[1]:null;if(!L){k&&(k.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}k&&(k.textContent=""),g&&(g.disabled=!0,g.textContent="Recording\u2026",g.style.opacity="0.7"),y&&(y.disabled=!0);try{let O=(l.querySelector("#ws-offer-asking")?.value??"").trim(),j=O?Number(O):null,U=await zm({tenantId:L,contactId:t,kind:e,amount:T,expiresAt:A||null,userId:R(),oppId:o?.oppId??null,propertyRecordId:o?.propertyRecordId??null,askingPrice:j&&j>0?j:null});if(!U.ok){k&&(k.textContent=U.error??"Something went wrong."),g&&(g.disabled=!1,g.textContent="Record Offer",g.style.opacity="1"),y&&(y.disabled=!1);return}c.info(`Offer Made (${e}) recorded for contact ${t}: $${T} on ${U.opp_pipeline} opp (stage: ${U.opp_stage_name??"?"})`),f()}catch(O){c.error("Offer Made webhook failed",O),k&&(k.textContent=O instanceof Error?O.message:"Network error \u2014 try again."),g&&(g.disabled=!1,g.textContent="Record Offer",g.style.opacity="1"),y&&(y.disabled=!1)}}),setTimeout(()=>{l.querySelector("#ws-offer-amount")?.focus()},0)},mi="ws-crm-dead-deal-modal",jm=(t,e)=>{document.getElementById(mi)?.remove();let o=document.createElement("div");o.id=mi,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
      font-family: ${b.mono};
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
        font-family: ${b.sans};
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
        ${B}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${ot}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),s=()=>{a(),e()};o.addEventListener("click",d=>{d.target===o&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let d=r.querySelector("#ws-dead-reason"),l=r.querySelector("#ws-dead-error"),p=(d?.value??"").trim();if(!p){l&&(l.textContent="Please enter a reason."),d?.focus();return}if(p.length<4){l&&(l.textContent="Please enter at least a few words."),d?.focus();return}a(),t(p)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),i()),d.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},bi="ws-crm-appointment-sanity-modal",Wm=(t,e)=>{document.getElementById(bi)?.remove();let o=document.createElement("div");o.id=bi,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
        ${B}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${ot}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>{document.removeEventListener("keydown",i),o.remove()},s=()=>{a(),e()};o.addEventListener("click",d=>{d.target===o&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),t()});let i=d=>{d.key==="Escape"&&s()};document.addEventListener("keydown",i)},hi=(t,e)=>{let o=document.createElement("div");if(o.id=xe,o.dataset.contactId=t,o.dataset.contactKind=e,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,e==="seller"||e==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=B,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",async()=>{if(e!=="seller"){io(t,e);return}let a=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),s=a?a[1]:null;if(!s){io(t,e);return}let i=r.innerHTML;r.disabled=!0,r.style.opacity="0.7",r.innerHTML="<span>Loading\u2026</span>";let d=()=>{r.innerHTML=i,r.disabled=!1,r.style.opacity="1"},l=[];try{l=await qm(s,t)}catch(m){c.warn("[offer-made] deal lookup failed, using legacy path",m),d(),io(t,e);return}if(d(),l.length<=1){io(t,e,l[0]);return}let p=await Um(l);p&&io(t,e,p)}),o.appendChild(r),o.appendChild(Dm({contactId:t,kind:e}))}return o},Dn=!1,ui=()=>{document.querySelectorAll(`[id="${xe}"]`).forEach(t=>t.remove())},xi=async()=>{if(c.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),Dn){c.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}Dn=!0;try{await Gm()}finally{Dn=!1}},Gm=async()=>{let t=H();if(!t){c.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),ui();return}if(c.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${t.contactId} locationId=${t.locationId??"(null)"} source=${t.source}`),t.source!=="url"){c.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),ui();return}let e="seller";try{let l=await $t(t.contactId,t.locationId),p=Tt(l);p==="buyer"?e="buyer":p==="other"&&(e="other"),c.debug(`[actions-bar:03] kind resolved \u2014 kind=${e} (raw type=${l??"(null)"})`)}catch(l){c.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",l)}let o=H();if(!o||o.contactId!==t.contactId){c.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${xe}"]`));if(r.length===1&&r[0].dataset.contactId===t.contactId&&r[0].dataset.contactKind===e){c.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${t.contactId} kind=${e} \u2014 no-op`);return}r.length>0&&(c.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(l=>l.remove()));let a=await Hm();if(!a){c.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}c.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let s=H();if(!s||s.contactId!==t.contactId){c.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let i;try{i=hi(t.contactId,e)}catch(l){c.error("[actions-bar:08-FAIL] buildBar threw:",l);return}i.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(i,a.firstChild)}catch(l){c.error("[actions-bar:09-FAIL] insertBefore threw:",l);return}if(!document.getElementById(xe)){c.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}c.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${t.contactId} kind=${e}`),ir?.disconnect(),ir=new MutationObserver(()=>{if(!(H()?.contactId===t.contactId)){ir?.disconnect();return}let p=document.querySelectorAll(`[id="${xe}"]`);if(p.length>1){for(let m=1;m<p.length;m++)p[m].remove();c.debug(`[actions-bar:WATCHDOG] trimmed ${p.length-1} duplicate bar(s)`);return}if(p.length===0){let m=document.querySelector(".central-panel")||a,h=hi(t.contactId,e);h.dataset.mountTarget=i.dataset.mountTarget??"";try{m.insertBefore(h,m.firstChild),c.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${t.contactId}`)}catch(_){c.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",_)}}}),ir.observe(a,{childList:!0})},ir=null,_i=null,Km=()=>{_i===null&&(_i=window.setInterval(()=>{let t=H();t&&(document.getElementById(xe)||(c.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",t.contactId),xi()))},3e3))},wi=()=>{Km(),xi()};var dr="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",Vm=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),lo="data-ws-crm-favicon",zn=t=>t.hasAttribute(lo),ki=t=>{if(t.tagName!=="LINK")return!1;let e=(t.getAttribute("rel")??"").toLowerCase();return Vm.has(e)},cr=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{ki(r)&&!zn(r)&&r.remove()});let e=document.head.querySelector(`link[${lo}="1"]`);e?e.href!==dr&&(e.href=dr):(e=document.createElement("link"),e.setAttribute(lo,"1"),e.rel="icon",e.type="image/png",e.href=dr,document.head.appendChild(e),c.debug("Favicon installed"));let o=document.head.querySelector(`link[${lo}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(lo,"apple"),o.rel="apple-touch-icon",o.href=dr,document.head.appendChild(o))},Ei=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)cr();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),cr())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&ki(i)&&!zn(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&zn(i)&&(a=!0)});a&&cr()}).observe(document.head,{childList:!0,subtree:!1});let e=0,o=window.setInterval(()=>{e+=1,cr(),e>=5&&window.clearInterval(o)},1e3)};var Z=".crm-opportunities-modal .ui-modal-heading .description",$i=new Map,Nn=null,qn,Ym=()=>{let t=new Map;for(let[e,{selector:o,cb:r}]of $i){let a=t.get(o);if(a===void 0&&(a=!!document.querySelector(o),t.set(o,a)),!!a)try{r()}catch(s){c.error(`[arrival-watcher] callback "${e}" threw`,s)}}},V=(t,e,o)=>{$i.set(t,{selector:e,cb:o}),!Nn&&(Nn=new MutationObserver(()=>{qn===void 0&&(qn=window.setTimeout(()=>{qn=void 0,Ym()},300))}),Nn.observe(document.body,{childList:!0,subtree:!0}))};var Jm=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],Qm=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,Zm=".hr-card.hr-modal.crm-opportunities-modal",z=()=>{let t=document.querySelector(Zm);if(!t)return null;let e=t.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of e){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(Qm);if(a){let s=a[1];if(Jm.includes(s))return s}}return null},X=async(t=2500)=>{let e=Date.now();for(;Date.now()-e<t;){let o=z();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var Ti="ws-crm-dispo-action-row",Y=t=>{let e=document.getElementById(Ti);if(e)return e;t.classList.contains("description")&&(t.style.display="flex",t.style.alignItems="center",t.style.gap="12px",t.style.flexWrap="wrap");let o=document.createElement("span");return o.id=Ti,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",t.appendChild(o),o};var Xm="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",yt="ws-crm-mt-offer-made-button",Ci="ws-crm-mt-offer-made-modal",tb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,eb=/\/v2\/location\/([A-Za-z0-9]+)/,br=()=>{let t=window.location.pathname,e=t.match(tb),o=e?e[1]:qt();if(!o)return null;let r=t.match(eb);return{oppId:o,locationId:r?r[1]:null}},ob=async t=>{let e=await fetch(Xm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,kind:"buyer",amount:t.amount,triggered_by_user_id:t.userId}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},pr=()=>{document.getElementById(Ci)?.remove()},rb=t=>{pr();let e=document.createElement("div");e.id=Ci,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
      font-family: ${b.mono};
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
      <span style="color: ${n.ash}; font-family: ${b.mono}; font-size: 14px;">$</span>
      <input id="ws-mt-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${b.mono};
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
        ${B}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${ot}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),s=o.querySelector("#ws-mt-offer-cancel"),i=o.querySelector("#ws-mt-offer-submit");setTimeout(()=>r?.focus(),50);let d=l=>{l.key==="Enter"?(l.preventDefault(),i?.click()):l.key==="Escape"&&(l.preventDefault(),s?.click())};o.addEventListener("keydown",d),e.addEventListener("click",l=>{l.target===e&&pr()}),s?.addEventListener("click",()=>pr()),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let l=r.value.trim();if(!l||Number(l)<=0){a.textContent="Enter a positive offer amount.",r.focus();return}let p=Number(l);if(p<100){a.textContent=`That looks low \u2014 did you mean $${(p*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Recording\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{let m=await ob({oppId:t.oppId,locationId:t.locationId,amount:p,userId:R()});if(!m.ok){a.textContent=m.error??"Something went wrong.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1);return}pr(),t.onSuccess()}catch(m){c.error("MT Offer Made webhook failed",m),a.textContent=m instanceof Error?m.message:"Network error \u2014 try again.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1)}})},nb=t=>{let e=document.createElement("button");return e.id=yt,e.type="button",e.dataset.oppId=t,e.style.cssText=B,e.title="Record this buyer's offer on the property and advance to 'Made an Offer'",e.innerHTML=`
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
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{let o=br();!o||!o.locationId||o.oppId!==t||rb({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=e.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),e.style.background=n.emeraldGlow,e.style.color=n.emeraldBright,e.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",e.style.cssText=B)},4e3)}})}),e},ab=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],sb=async()=>{for(let t of ab)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},mr=!1,jn=async()=>{if(!mr){mr=!0;try{await ib()}finally{mr=!1}}},ib=async()=>{let t=br();if(!t||!t.locationId){document.getElementById(yt)?.remove(),document.getElementById(`${yt}-wrap`)?.remove(),po();return}let e=document.getElementById(yt);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${yt}-wrap`)?.remove(),po());return}e&&(e.remove(),document.getElementById(`${yt}-wrap`)?.remove());let o=await sb();if(!o){c.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){c.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=br();if(!a||a.oppId!==t.oppId)return;let s=nb(t.oppId),i=document.createElement("span");i.id=`${yt}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted MT Offer Made button on opp ${t.oppId}`),lb(t.oppId)},co=null,Un=null,we,po=()=>{co?.disconnect(),co=null,Un=null,we!==void 0&&(window.clearTimeout(we),we=void 0)},lb=t=>{if(co&&Un===t)return;po();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Un=t,co=new MutationObserver(()=>{we===void 0&&(we=window.setTimeout(()=>{we=void 0;let o=br();if(!o||o.oppId!==t){po();return}let r=z();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(yt)?.remove(),document.getElementById(`${yt}-wrap`)?.remove(),po();return}document.getElementById(yt)||jn()},250))}),co.observe(e,{childList:!0,subtree:!0}))},db=()=>{V("mt-offer-made",Z,()=>{!document.getElementById(yt)&&!mr&&jn()})},Ai=()=>{db(),jn()};var cb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",gt="ws-crm-not-interested-button",pb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,mb=/\/v2\/location\/([A-Za-z0-9]+)/,ur=()=>{let t=window.location.pathname,e=t.match(pb),o=e?e[1]:qt();if(!o)return null;let r=t.match(mb);return{oppId:o,locationId:r?r[1]:null}},bb=async t=>{let e=await fetch(cb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Not Interested webhook returned ${e.status} ${e.statusText}`);return await e.json()},hb=t=>{let e=document.createElement("button");return e.id=gt,e.type="button",e.dataset.oppId=t,e.style.cssText=B,e.title="Close this Marketing Tracker opp as Not Interested for THIS property only",e.innerHTML=`
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
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",async()=>{let o=ur();if(!o||!o.locationId||o.oppId!==t)return;let r=R(),a=e.querySelector(".ws-ni-label");e.disabled=!0,e.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let s=await bb({oppId:o.oppId,locationId:o.locationId,userId:r});if(s?.ok)a&&(a.textContent="Marked Not Interested"),e.style.background=n.crimsonGlow,e.style.color=n.crimson,c.info(`Not Interested set for opp ${t} \u2192 ${s.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(s){c.error("Not Interested webhook failed",s),a&&(a.textContent="Try again"),e.disabled=!1,e.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),e},ub=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],_b=async()=>{for(let t of ub)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},hr=!1,Gn=async()=>{if(!hr){hr=!0;try{await vb()}finally{hr=!1}}},vb=async()=>{let t=ur();if(!t||!t.locationId){document.getElementById(gt)?.remove(),document.getElementById(`${gt}-wrap`)?.remove(),bo();return}let e=document.getElementById(gt);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${gt}-wrap`)?.remove(),bo());return}e&&(e.remove(),document.getElementById(`${gt}-wrap`)?.remove());let o=await _b();if(!o){c.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){c.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=ur();if(!a||a.oppId!==t.oppId)return;let s=hb(t.oppId),i=document.createElement("span");i.id=`${gt}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted Not Interested button on opp ${t.oppId}`),yb(t.oppId)},mo=null,Wn=null,bo=()=>{mo?.disconnect(),mo=null,Wn=null},yb=t=>{if(mo&&Wn===t)return;bo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Wn=t,mo=new MutationObserver(()=>{let o=ur();if(!o||o.oppId!==t){bo();return}let r=z();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(gt)?.remove(),document.getElementById(`${gt}-wrap`)?.remove(),bo();return}document.getElementById(gt)||Gn()}),mo.observe(e,{childList:!0,subtree:!0}))},gb=()=>{V("not-interested",Z,()=>{!document.getElementById(gt)&&!hr&&Gn()})},Li=()=>{gb(),Gn()};var fb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",_t="ws-crm-schedule-walkthrough-button",Kn="ws-crm-schedule-walkthrough-modal",xb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,wb=/\/v2\/location\/([A-Za-z0-9]+)/,yr=()=>{let t=window.location.pathname,e=t.match(xb),o=e?e[1]:qt();if(!o)return null;let r=t.match(wb);return{oppId:o,locationId:r?r[1]:null}},_r=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${e==="ok"?n.emerald:n.crimson};font-family:${b.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},kb=(t,e)=>{document.getElementById(Kn)?.remove();let o=document.createElement("div");o.id=Kn,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${b.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${Kn} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Marketing Tracker</div>
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
      <button id="wsw-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${b.sans};cursor:pointer;">Cancel</button>
      <button id="wsw-submit" type="button" style="${ot}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",l=>{l.target===o&&i()}),document.getElementById("wsw-cancel")?.addEventListener("click",i);let d=document.getElementById("wsw-submit");d?.addEventListener("click",async()=>{let l=document.getElementById("wsw-dt")?.value||"",p=document.getElementById("wsw-dur")?.value||"30";if(!l){_r("Pick a date and time.","err");return}let m=new Date(l).toISOString();d.disabled=!0,d.textContent="Scheduling\u2026";try{if((await fetch(fb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,start_time:m,duration_min:Number(p)}),credentials:"omit"})).ok){i(),_r("Walkthrough scheduled \u2713");let _=document.querySelector(`#${_t} .ws-sw-label`);_&&(_.textContent="Walkthrough Scheduled")}else d.disabled=!1,d.textContent="Schedule",_r("Scheduling failed \u2014 try again.","err")}catch(h){c.warn("[schedule-walkthrough] failed:",h),d.disabled=!1,d.textContent="Schedule",_r("Couldn't reach the scheduler. Try again.","err")}})},Eb=t=>{let e=document.createElement("button");return e.id=_t,e.type="button",e.dataset.oppId=t,e.style.cssText=B,e.title="Schedule this buyer's property walkthrough",e.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)"}),e.addEventListener("click",()=>{let o=yr();!o||!o.locationId||o.oppId!==t||kb(o.oppId,o.locationId)}),e},$b=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Tb=async()=>{for(let t of $b)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},vr=!1,Yn=async()=>{if(!vr){vr=!0;try{await Cb()}finally{vr=!1}}},Cb=async()=>{let t=yr();if(!t||!t.locationId){document.getElementById(_t)?.remove(),document.getElementById(`${_t}-wrap`)?.remove(),uo();return}let e=document.getElementById(_t);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Marketing Tracker"&&(e.remove(),document.getElementById(`${_t}-wrap`)?.remove(),uo());return}e&&(e.remove(),document.getElementById(`${_t}-wrap`)?.remove());let o=await Tb();if(!o){c.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await X();if(r!=="Marketing Tracker"){c.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=yr();if(!a||a.oppId!==t.oppId)return;let s=Eb(t.oppId),i=document.createElement("span");i.id=`${_t}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted Schedule Walkthrough button on opp ${t.oppId}`),Ab(t.oppId)},ho=null,Vn=null,ke,uo=()=>{ho?.disconnect(),ho=null,Vn=null,ke!==void 0&&(window.clearTimeout(ke),ke=void 0)},Ab=t=>{if(ho&&Vn===t)return;uo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Vn=t,ho=new MutationObserver(()=>{ke===void 0&&(ke=window.setTimeout(()=>{ke=void 0;let o=yr();if(!o||o.oppId!==t){uo();return}let r=z();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(_t)?.remove(),document.getElementById(`${_t}-wrap`)?.remove(),uo();return}document.getElementById(_t)||Yn()},250))}),ho.observe(e,{childList:!0,subtree:!0}))},Lb=()=>{V("schedule-walkthrough",Z,()=>{!document.getElementById(_t)&&!vr&&Yn()})},Si=()=>{Lb(),Yn()};var Sb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",Ee="ws-crm-resend-deal-link-wrap",Ib=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Mb=/\/v2\/location\/([A-Za-z0-9]+)/,fr=()=>{let t=window.location.pathname,e=t.match(Ib),o=e?e[1]:qt();if(!o)return null;let r=t.match(Mb);return{oppId:o,locationId:r?r[1]:null}},Pb=async t=>{let e=await fetch(Sb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,mt_opp_id:t.oppId,channel:t.channel,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Resend webhook returned ${e.status} ${e.statusText}`);let o=await e.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},Ob=t=>t.replace(/[<>&]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[e]||e),Ii=t=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t};box-shadow:0 0 6px ${t};flex-shrink:0;"></span>`,Qn=(t,e)=>{t.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=B,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${Ii(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>Bb(t,e)),t.appendChild(o)},Bb=(t,e)=>{t.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,s=(d,l)=>{let p=document.createElement("button");return p.type="button",p.textContent=d,p.style.cssText=a,p.addEventListener("click",()=>void Rb(t,e,l,o)),p};o.appendChild(s("Text","sms")),o.appendChild(s("Email","email"));let i=document.createElement("button");i.type="button",i.textContent="\u2715",i.title="Cancel",i.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,i.addEventListener("click",()=>Qn(t,e)),o.appendChild(i),t.appendChild(o)},Rb=async(t,e,o,r)=>{let a=fr();if(!(!a||!a.locationId||a.oppId!==e)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let s=await Pb({oppId:a.oppId,locationId:a.locationId,channel:o,userId:R()});if(s?.ok)r.innerHTML=`${Ii(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,c.info(`Resend deal link (${o}) for opp ${e}`);else throw new Error(s?.error||"Send failed")}catch(s){let i=s instanceof Error?s.message:"Send failed";c.error("Resend deal link failed",s),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${Ob(i)}</span>`}window.setTimeout(()=>Qn(t,e),3500)}},Hb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Db=async()=>{for(let t of Hb)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},gr=!1,Zn=async()=>{if(!gr){gr=!0;try{await Fb()}finally{gr=!1}}},Fb=async()=>{let t=fr();if(!t||!t.locationId){document.getElementById(Ee)?.remove(),vo();return}let e=document.getElementById(Ee);if(e&&e.dataset.oppId===t.oppId){let i=z();i!==null&&i!=="Marketing Tracker"&&(e.remove(),vo());return}e&&e.remove();let o=await Db();if(!o)return;let r=await X();if(r!=="Marketing Tracker"){c.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=fr();if(!a||a.oppId!==t.oppId)return;let s=document.createElement("span");s.id=Ee,s.dataset.oppId=t.oppId,s.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",Y(o).appendChild(s),Qn(s,t.oppId),c.debug(`Mounted Resend Deal Link button on opp ${t.oppId}`),zb(t.oppId)},_o=null,Jn=null,vo=()=>{_o?.disconnect(),_o=null,Jn=null},zb=t=>{if(_o&&Jn===t)return;vo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Jn=t,_o=new MutationObserver(()=>{let o=fr();if(!o||o.oppId!==t){vo();return}let r=z();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ee)?.remove(),vo();return}document.getElementById(Ee)||Zn()}),_o.observe(e,{childList:!0,subtree:!0}))},Nb=()=>{V("resend-deal-link",Z,()=>{!document.getElementById(Ee)&&!gr&&Zn()})},Mi=()=>{Nb(),Zn()};var qb="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",ft="ws-crm-reduce-price-button",Pi="ws-crm-reduce-price-modal",Ub=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,jb=/\/v2\/location\/([A-Za-z0-9]+)/,kr=()=>{let t=window.location.pathname,e=t.match(Ub);if(!e)return null;let o=t.match(jb);return{oppId:e[1],locationId:o?o[1]:null}},Wb=async t=>{let e=await fetch(qb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,dispo_opp_id:t.oppId,new_price:t.newPrice,triggered_by_user_id:t.userId??null}),credentials:"omit"});if(!e.ok)throw new Error(`Reduce Price webhook returned ${e.status} ${e.statusText}`);let o=await e.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},xr=()=>{document.getElementById(Pi)?.remove()},Gb=t=>{xr();let e=document.createElement("div");e.id=Pi,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
      font-family: ${b.mono};
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
          font-family: ${b.sans};
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
        font-family: ${b.sans};
        font-size: 13px;
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-reduce-submit" type="button" style="
        background: ${n.amber};
        border: 1px solid ${n.amber};
        color: ${n.obsidian};
        padding: 8px 16px;
        border-radius: ${v.sm};
        font-family: ${b.sans};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      ">Reduce Price</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),s=o.querySelector("#ws-reduce-cancel"),i=o.querySelector("#ws-reduce-submit");setTimeout(()=>r?.focus(),50),r?.addEventListener("input",()=>{let p=r.value.replace(/[^0-9.]/g,"").split(".");r.value=p[0]+(p.length>1?"."+p.slice(1).join(""):"")});let d=l=>{l.key==="Enter"?(l.preventDefault(),i?.click()):l.key==="Escape"&&(l.preventDefault(),s?.click())};o.addEventListener("keydown",d),e.addEventListener("click",l=>{l.target===e&&xr()}),s?.addEventListener("click",()=>{xr()}),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let l=r.value.trim();if(!l){a.textContent="Enter a new listing price.",r.focus();return}let p=parseFloat(l);if(!Number.isFinite(p)||p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Reducing\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{await Wb({oppId:t.oppId,locationId:t.locationId,newPrice:p,userId:R()}),xr(),t.onSuccess()}catch(m){c.error("Reduce Price webhook failed",m),a.textContent=m instanceof Error?m.message:"Something went wrong. Try again.",i.disabled=!1,i.textContent="Reduce Price",i.style.opacity="1",s&&(s.disabled=!1)}})},Kb=(t,e)=>{let o=document.createElement("button");return o.id=ft,o.type="button",o.dataset.oppId=t,o.style.cssText=B,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
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
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=kr();!r||!r.locationId||r.oppId!==t||Gb({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),s=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,s&&(s.style.background=n.emerald,s.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=B,s&&(s.style.background=n.amber,s.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},Vb=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Yb=async()=>{for(let t of Vb)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},wr=!1,ta=async()=>{if(!wr){wr=!0;try{await Jb()}finally{wr=!1}}},Jb=async()=>{let t=kr();if(!t||!t.locationId){document.getElementById(ft)?.remove(),document.getElementById(`${ft}-wrap`)?.remove(),go();return}let e=document.getElementById(ft);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Disposition"&&(e.remove(),document.getElementById(`${ft}-wrap`)?.remove(),go());return}e&&(e.remove(),document.getElementById(`${ft}-wrap`)?.remove());let o=await Yb();if(!o){c.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await X();if(r!=="Disposition"){c.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=kr();if(!a||a.oppId!==t.oppId)return;let s=Kb(t.oppId,t.locationId),i=document.createElement("span");i.id=`${ft}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted Reduce Price button on opp ${t.oppId}`),Qb(t.oppId)},yo=null,Xn=null,$e,go=()=>{yo?.disconnect(),yo=null,Xn=null,$e!==void 0&&(window.clearTimeout($e),$e=void 0)},Qb=t=>{if(yo&&Xn===t)return;go();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Xn=t,yo=new MutationObserver(()=>{$e===void 0&&($e=window.setTimeout(()=>{$e=void 0;let o=kr();if(!o||o.oppId!==t){go();return}let r=z();if(r!==null&&r!=="Disposition"){document.getElementById(ft)?.remove(),document.getElementById(`${ft}-wrap`)?.remove(),go();return}document.getElementById(ft)||ta()},250))}),yo.observe(e,{childList:!0,subtree:!0}))},Zb=()=>{V("reduce-price",Z,()=>{!document.getElementById(ft)&&!wr&&ta()})},Oi=()=>{Zb(),ta()};var Te="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",Er="deals.reinvestos.com";var xt="ws-crm-edit-landing-button",Xb=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,th=/\/v2\/location\/([A-Za-z0-9]+)/,Tr=()=>{let t=window.location.pathname,e=t.match(Xb);if(!e)return null;let o=t.match(th);return{oppId:e[1],locationId:o?o[1]:null}},eh=(t,e)=>{let o=new URL(`https://${Er}/editor`);o.searchParams.set("loc",e),o.searchParams.set("opp",t),o.searchParams.set("k",Te);let r=R();return r&&o.searchParams.set("user",r),o.toString()},oh=(t,e)=>{let o=document.createElement("button");return o.id=xt,o.type="button",o.dataset.oppId=t,o.style.cssText=B,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Landing Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=Tr();if(!r||!r.locationId||r.oppId!==t)return;if(!Te){c.warn("[edit-landing] editor session key not configured in this build");return}let a=eh(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let s=o.querySelector(".ws-elp-label");if(s){let i=s.textContent;s.textContent="Opening editor\u2026",setTimeout(()=>{s.textContent==="Opening editor\u2026"&&(s.textContent=i)},2500)}}),o},rh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],nh=async()=>{for(let t of rh)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},$r=!1,oa=async()=>{if(!$r){$r=!0;try{await ah()}finally{$r=!1}}},ah=async()=>{let t=Tr();if(!t||!t.locationId){document.getElementById(xt)?.remove(),document.getElementById(`${xt}-wrap`)?.remove(),xo();return}let e=document.getElementById(xt);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Disposition"&&(e.remove(),document.getElementById(`${xt}-wrap`)?.remove(),xo());return}e&&(e.remove(),document.getElementById(`${xt}-wrap`)?.remove());let o=await nh();if(!o)return;let r=await X();if(r!=="Disposition"){c.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=Tr();if(!a||a.oppId!==t.oppId)return;let s=oh(t.oppId,t.locationId),i=document.createElement("span");i.id=`${xt}-wrap`,i.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted Edit Landing Page button on opp ${t.oppId}`),sh(t.oppId)},fo=null,ea=null,Ce,xo=()=>{fo?.disconnect(),fo=null,ea=null,Ce!==void 0&&(window.clearTimeout(Ce),Ce=void 0)},sh=t=>{if(fo&&ea===t)return;xo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(ea=t,fo=new MutationObserver(()=>{Ce===void 0&&(Ce=window.setTimeout(()=>{Ce=void 0;let o=Tr();if(!o||o.oppId!==t){xo();return}let r=z();if(r!==null&&r!=="Disposition"){document.getElementById(xt)?.remove(),document.getElementById(`${xt}-wrap`)?.remove(),xo();return}document.getElementById(xt)||oa()},250))}),fo.observe(e,{childList:!0,subtree:!0}))},ih=()=>{V("edit-landing-page",Z,()=>{!document.getElementById(xt)&&!$r&&oa()})},Bi=()=>{ih(),oa()};var Di="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",Le="ws-crm-publish-button",wo="ws-crm-publish-wrap",Ar="ws-crm-publish-dropdown",lh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,dh=/\/v2\/location\/([A-Za-z0-9]+)/,ra=()=>{let t=window.location.pathname,e=t.match(lh);if(!e)return null;let o=t.match(dh);return{oppId:e[1],locationId:o?o[1]:null}},Ri=async(t,e)=>{try{let o=await fetch(Di,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,dry_run:!0,triggered_by_user_id:R()??null}),credentials:"omit"});return o.ok?await o.json():(c.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return c.warn("[publish] dry_run fetch failed:",o),null}},ch=async(t,e)=>{let o=await fetch(Di,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,triggered_by_user_id:R()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},ph=(t,e)=>{if(!Te){c.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${Er}/editor`);o.searchParams.set("loc",e),o.searchParams.set("opp",t),o.searchParams.set("k",Te);let r=R();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},Bt=()=>{document.getElementById(Ar)?.remove()},Hi=(t,e,o,r,a)=>{Bt();let s=document.createElement("div");s.id=Ar;let i=e.getBoundingClientRect();s.style.cssText=`
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
    border-radius: ${v.md};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    padding: 14px 16px;
    font-family: ${b.sans};
  `;let d=t.length,l=t.filter(f=>f.filled).length,p=l===d,m=document.createElement("div");m.innerHTML=`
    <div style="
      font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${p?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${p?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${l} of ${d} ready</div>
  `,s.appendChild(m),t.forEach(f=>{let k=document.createElement("div");k.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${f.filled?n.bone:n.ash};
    `;let y=f.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;k.innerHTML=`${y}<span style="flex: 1;">${f.label}</span>`,s.appendChild(k)});let h=document.createElement("div");h.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let _=document.createElement("button");_.type="button",_.textContent="Open editor to finish \u2192",_.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${v.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,_.addEventListener("click",f=>{f.stopPropagation(),ph(o,r)}),h.appendChild(_);let u=document.createElement("button");u.type="button",u.textContent="Re-check",u.title="Re-check after editing the page",u.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,u.addEventListener("click",f=>{f.stopPropagation(),Bt(),a()}),h.appendChild(u),s.appendChild(h),document.body.appendChild(s);let x=f=>{let k=f.target;!s.contains(k)&&!e.contains(k)&&(Bt(),document.removeEventListener("click",x))};window.setTimeout(()=>document.addEventListener("click",x),0)},Wt=(t,e)=>{let o=t.querySelector(".ws-pub-label"),r=t.querySelector(".ws-pub-dot"),a=t.querySelector(".ws-pub-chevron"),s="transparent",i=n.steel,d=n.bone,l=n.coolGray,p="Publish Deal",m="",h="pointer",_="1";switch(e.status){case"checking":i=n.steel,d=n.ash,p="Checking\u2026",h="wait",_="0.8";break;case"ready":s=n.emerald,i=n.emerald,d=n.obsidian,l=n.obsidian,p="Publish Deal";break;case"incomplete":{let u=e.checks?.filter(f=>f.filled).length??0,x=e.checks?.length??0;i=n.amber,d=n.amber,l=n.amber,p=`${u} of ${x} ready`,m="\u25BE";break}case"publishing":s=n.emerald,i=n.emerald,d=n.obsidian,l=n.obsidian,p="Publishing\u2026",h="wait",_="0.8";break;case"published":s="transparent",i=n.steel,d=n.ash,l=n.emerald,p="Deal Published",h="default",_="0.9";break;case"error":i=n.amber,d=n.amber,l=n.amber,p=e.message??"Try again";break}t.style.background=s,t.style.borderColor=i,t.style.color=d,t.style.cursor=h,t.style.opacity=_,r&&(r.style.background=l,r.style.boxShadow=e.status==="ready"||e.status==="published"?`0 0 6px ${l}`:""),o&&(o.textContent=p),a&&(a.textContent=m)},mh=(t,e)=>{let o=document.createElement("button");o.id=Le,o.type="button",o.dataset.oppId=t,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${ot}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};Wt(o,r);let a=!1,s=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let u=await Ri(t,e);if(!u||!Array.isArray(u.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},Wt(o,r);return}r={status:u.published?"published":u.ready?"ready":"incomplete",checks:u.checks},Wt(o,r),document.getElementById(Ar)&&r.checks&&Hi(r.checks,o,t,e,()=>void s())}finally{a=!1}}},i=async()=>{r={status:"publishing",checks:r.checks},Wt(o,r),Bt();try{if((await Ri(t,e))?.published){r={status:"published"},Wt(o,r),c.info(`[publish] pre-publish check: opp ${t} already published \u2014 skipping`);return}let x=await ch(t,e);if(x.ok&&x.published)r={status:"published"},Wt(o,r),c.info(`[publish] published opp ${t}`);else if(x.missing&&x.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},Wt(o,r);else throw new Error(x.error||"Publish failed")}catch(u){let x=u instanceof Error?u.message:"Publish failed";c.error("[publish] publish failed",u),r={status:"error",message:x.length>28?"Error \u2014 try again":x},Wt(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":i();break;case"incomplete":{document.getElementById(Ar)?Bt():r.checks&&Hi(r.checks,o,t,e,()=>void s());break}case"error":s();break}}),s();let d=Date.now(),l=8e3,p=()=>{o.isConnected&&(a||r.status==="publishing"||r.status==="published"||Date.now()-d<l||(d=Date.now(),s()))},m=()=>p(),h=()=>{document.visibilityState==="visible"&&p()};window.addEventListener("focus",m),document.addEventListener("visibilitychange",h);let _=window.setInterval(()=>{document.body.contains(o)||(window.removeEventListener("focus",m),document.removeEventListener("visibilitychange",h),window.clearInterval(_))},5e3);return o},bh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],hh=async()=>{for(let t of bh)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Cr=!1,aa=async()=>{if(!Cr){Cr=!0;try{await uh()}finally{Cr=!1}}},uh=async()=>{let t=ra();if(!t||!t.locationId){document.getElementById(Le)?.remove(),document.getElementById(wo)?.remove(),Bt(),Eo();return}let e=document.getElementById(Le);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Disposition"&&(e.remove(),document.getElementById(wo)?.remove(),Bt(),Eo());return}e&&(e.remove(),document.getElementById(wo)?.remove(),Bt());let o=await hh();if(!o)return;let r=await X();if(r!=="Disposition"){c.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=ra();if(!a||a.oppId!==t.oppId||!a.locationId)return;let s=mh(t.oppId,a.locationId),i=document.createElement("span");i.id=wo,i.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",i.appendChild(s),Y(o).appendChild(i),c.debug(`Mounted Publish button on opp ${t.oppId}`),_h(t.oppId)},ko=null,na=null,Ae,Eo=()=>{ko?.disconnect(),ko=null,na=null,Ae!==void 0&&(window.clearTimeout(Ae),Ae=void 0)},_h=t=>{if(ko&&na===t)return;Eo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(na=t,ko=new MutationObserver(()=>{Ae===void 0&&(Ae=window.setTimeout(()=>{Ae=void 0;let o=ra();if(!o||o.oppId!==t){Eo();return}let r=z();if(r!==null&&r!=="Disposition"){document.getElementById(Le)?.remove(),document.getElementById(wo)?.remove(),Bt(),Eo();return}document.getElementById(Le)||aa()},250))}),ko.observe(e,{childList:!0,subtree:!0}))},vh=()=>{V("publish-button",Z,()=>{!document.getElementById(Le)&&!Cr&&aa()})},Fi=()=>{vh(),aa()};var zi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",Ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var yh=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],qi=t=>`ws-crm-map-links-${t}`,Ui=()=>Array.from(document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']")),Lr=(t,e)=>{let o=e.toLowerCase();for(let r of t)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let s=a.querySelector("input, textarea");if(s&&(s.value||"").trim())return s.value.trim()}return""},ji=(t,e=Ui())=>{let o=Lr(e,t.addr),r=Lr(e,t.city),a=Lr(e,t.state),s=Lr(e,t.zip),i;return r&&o&&o.toLowerCase().includes(r.toLowerCase())?i=o:i=[o,r,a,s].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},gh=t=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`,fh=t=>`https://www.zillow.com/homes/${t.replace(/\s+/g,"-")}_rb`,xh=(t,e)=>{let{full:o,hasAny:r}=ji(t);r&&window.open(e(o),"_blank","noopener,noreferrer")},wh=t=>{let e=document.createElement("span");e.id=qi(t.key),e.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",e.appendChild(o);let r=(a,s,i)=>{let d=document.createElement("img");return d.src=a,d.title=s,d.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",d.addEventListener("mouseenter",()=>{d.style.transform="scale(1.12)"}),d.addEventListener("mouseleave",()=>{d.style.transform="scale(1)"}),d.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),xh(t,i)}),d};return e.appendChild(r(zi,"Open in Google Maps",gh)),e.appendChild(r(Ni,"Search on Zillow",fh)),e},kh=(t,e)=>{let o=e.addr.toLowerCase();for(let r of t)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},Wi=()=>{let t=Ui();if(t.length)for(let e of yh){if(document.getElementById(qi(e.key)))continue;let{hasAny:o}=ji(e,t);if(!o)continue;let r=kh(t,e);r&&(r.style.display="flex",r.style.alignItems="center",r.style.width="100%",r.appendChild(wh(e)),c.debug(`[map-links] injected on "${e.addr}"`))}},Se=null,Ie,Eh=()=>{let t=ue();return t==="contact-detail"||t==="other"},$h=()=>{Se||(Se=new MutationObserver(()=>{Ie===void 0&&(Ie=window.setTimeout(()=>{Ie=void 0;try{Wi()}catch(t){c.warn("[map-links] ensureInjected failed",t)}},300))}),Se.observe(document.body,{childList:!0,subtree:!0}))},Gi=()=>{Se&&(Se.disconnect(),Se=null),Ie!==void 0&&(window.clearTimeout(Ie),Ie=void 0)},Ki=()=>{if(!Eh()){Gi();return}$h(),Wi()},Vi=()=>{Gi()};var Yi="ws-crm-hide-launchpad",sa=/\/launchpad\/?$/,ia=()=>{if(!_e()){if(!document.getElementById(Yi)){let t=document.createElement("style");t.id=Yi,t.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(t),c.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(sa.test(location.pathname)){let t=location.pathname.replace(sa,"/dashboard")+location.search;c.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${t}`);try{history.replaceState({},"",t),window.dispatchEvent(new PopStateEvent("popstate")),window.setTimeout(()=>{(!!document.getElementById("launchpad-main")||!!document.querySelector('[class*="launchpad-container"]'))&&!sa.test(location.pathname)&&(c.warn("[hide-launchpad] SPA redirect ignored by router \u2014 hard nav fallback"),location.replace(t))},2e3)}catch(e){c.warn("[hide-launchpad] SPA redirect failed, falling back to hard nav",e),location.replace(t)}}}};var Th=[{label:"Buy-Box Entries"},{label:"Memberships"}],Ji=t=>{t.size!==0&&document.querySelectorAll(".nav-title").forEach(e=>{let o=(e.textContent||"").trim().toLowerCase();if(!t.has(o))return;let r=e.closest("a")||e.closest("li")||e.parentElement;r&&r.style.display!=="none"&&(r.style.setProperty("display","none","important"),c.info(`[hide-nav-items] hid "${e.textContent?.trim()}"`))})},la=()=>{let t=_e(),e=new Set(Th.filter(o=>o.agencyToo||!t).map(o=>o.label.trim().toLowerCase()));if(e.size!==0){Ji(e);for(let o of[150,500,1200,2500])setTimeout(()=>Ji(e),o)}};var Ch=[{from:"Payments",to:"Contracts"}],Ah=".nav-title, .topmenu-navtitle",Qi=()=>{document.querySelectorAll(Ah).forEach(t=>{let e=(t.textContent||"").trim(),o=Ch.find(r=>r.from===e);o&&(t.textContent=o.to,c.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},da=()=>{Qi();for(let t of[150,500,1200,2500])setTimeout(Qi,t)};var Zi="/payments/proposals-estimates",Lh=/\/payments\/invoices\/?$/,Sh=/\/payments\//,Ih='#sb_payments, a[meta="payments"]',tl=(t=0)=>{if(t>25)return;let e=location.pathname;if(!e.includes(Zi)&&!(t>3&&!Sh.test(e))){if(Lh.test(e)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(Zi));if(o){c.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>tl(t+1),120)}},Xi=!1,Mh=()=>{Xi||(Xi=!0,document.addEventListener("click",t=>{t.target?.closest?.(Ih)&&setTimeout(()=>tl(),80)},!0),c.info("[contracts-section] section-entry redirect armed"))},ca=()=>{Mh()};var el=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],ol="ws-crm-hide-topmenu-tabs",pa=()=>{if(document.getElementById(ol))return;let t=el.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),e=document.createElement("style");e.id=ol,e.textContent=`${t}{display:none !important;}`,(document.head||document.documentElement).appendChild(e),c.info(`[hide-topmenu-tabs] hid ${el.length} top tabs`)};var al="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",Gt="ws-crm-send-to-closing-office-button",se="ws-crm-send-to-title-co-wrap",Mr="ws-crm-stc-dropdown",Ph=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Oh=/\/v2\/location\/([A-Za-z0-9]+)/,Co=()=>{let t=window.location.pathname,e=t.match(Ph);if(!e)return null;let o=t.match(Oh);return{oppId:e[1],locationId:o?o[1]:null}},Bh=5*60*1e3,ha=t=>`ws-crm-stc-cache:${t}`,Rh=t=>{try{let e=window.localStorage.getItem(ha(t));if(!e)return null;let o=JSON.parse(e);return!o.ts||Date.now()-o.ts>Bh||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},Hh=(t,e)=>{try{window.localStorage.setItem(ha(t),JSON.stringify(e))}catch{}},sl=t=>{try{window.localStorage.removeItem(ha(t))}catch{}},ma="ws-crm:opp-fields-updated",il=t=>{if(t){sl(t);try{window.dispatchEvent(new CustomEvent(ma,{detail:{oppId:t}}))}catch{}}},Dh=async(t,e)=>{try{let o=await fetch(al,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,tc_opp_id:t,triggered_by_user_id:R()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(c.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return c.warn("[stc] dry_run fetch failed:",o),null}},Fh=async(t,e,o)=>{let r=await fetch(al,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,tc_opp_id:t,triggered_by_user_id:R()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},zh=t=>{let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!e)return!1;let o=e.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===t)return a.click(),!0;let r=e.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===t)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return c.warn(`[stc] folder tab not found for "${t}"`),!1},rl=t=>{let e=document.getElementById(t);if(!e){c.warn(`[stc] field ${t} not found in DOM \u2014 can't scroll to it`);return}e.scrollIntoView({behavior:"smooth",block:"center"});let o=e.style.boxShadow,r=e.style.transition;e.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",e.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{e.style.boxShadow=o,window.setTimeout(()=>{e.style.transition=r},400)},2800)},Nh=(t,e)=>{if(e&&zh(e)){window.setTimeout(()=>rl(t),300);return}rl(t)},wt=()=>{document.getElementById(Mr)?.remove()},Sr=(t,e,o)=>{wt();let r=document.createElement("div");r.id=Mr;let a=o.getBoundingClientRect();r.style.cssText=`
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
    font-family: ${b.sans};
  `;let s=t.length,i=t.filter(u=>u.filled).length,d=i===s,l=document.createElement("div");l.innerHTML=`
    <div style="
      font-family: ${b.mono};
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${d?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${d?"Ready to send":"Required fields"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${i} of ${s} ready</div>
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
  `,r.appendChild(l);let p=["TC","ACQ","MT","DISPO","Property"],m={};t.forEach(u=>{m[u.group]||(m[u.group]=[]),m[u.group].push(u)});let h=[...p.filter(u=>m[u]),...Object.keys(m).filter(u=>!p.includes(u))];for(let u of h){let x=m[u],f=document.createElement("div");f.style.cssText="margin-top: 12px;";let k=document.createElement("div");k.style.cssText=`
      font-family: ${b.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,k.textContent=u,f.appendChild(k),x.forEach(y=>{let g=document.createElement("div"),$=!y.filled&&y.navigable&&y.field_id;g.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${v.sm};
        font-size: 12px;
        color: ${y.filled?n.bone:n.ash};
        ${$?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,$&&(g.addEventListener("mouseenter",()=>{g.style.background=n.slate}),g.addEventListener("mouseleave",()=>{g.style.background="transparent"}),g.addEventListener("click",w=>{w.stopPropagation(),y.field_id&&(Nh(y.field_id,y.folder),wt())}));let A=y.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,T=$?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";g.innerHTML=`${A}<span style="flex: 1;">${y.label}</span>${T}`,f.appendChild(g)}),r.appendChild(f)}document.body.appendChild(r);let _=u=>{let x=u.target;!r.contains(x)&&!o.contains(x)&&(wt(),document.removeEventListener("click",_))};window.setTimeout(()=>document.addEventListener("click",_),0)},Lt=(t,e)=>{let o=t.querySelector(".ws-stc-label"),r=t.querySelector(".ws-stc-dot"),a=t.querySelector(".ws-stc-chevron"),s,i,d=n.bone,l,p="Send to Closing Office",m="",h="pointer",_="1";switch(e.status){case"checking":s="transparent",i=n.steel,d=n.ash,l=n.coolGray,p="Checking\u2026",h="wait",_="0.8";break;case"ready":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",p=e.previouslySentAt?"Re-send to Closing Office":"Send to Closing Office";break;case"incomplete":{let u=e.checks?.filter(f=>f.filled).length??0,x=e.checks?.length??0;s="transparent",i=n.amber,d=n.amber,l=n.amber,p=`${u} of ${x} Fields Ready`;break}case"sending":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",p="Sending\u2026",h="wait",_="0.8";break;case"sent":s=n.emerald,i=n.emerald,d="#0a0e14",l="#0a0e14",p="Sent \u2713";break;case"error":s="transparent",i=n.amber,d=n.amber,l=n.amber,p=e.message??"Try again";break}t.style.background=s,t.style.borderColor=i,t.style.color=d,t.style.cursor=h,t.style.opacity=_,r&&(r.style.background=l,r.style.boxShadow=e.status==="ready"||e.status==="sent"?`0 0 6px ${l}`:""),o&&(o.textContent=p),a&&(a.textContent=m)},qh=(t,e)=>{let o=document.createElement("button");o.id=Gt,o.type="button",o.dataset.oppId=t;let r=Rh(t),a=r?{status:r.checks.every(y=>y.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"};o.style.cssText=`
    ${B}
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
  `,Lt(o,a);let s=new Set,i=async()=>{if(a.status==="sending")return;let y=await Dh(t,e);if(!y){a={status:"error",message:"Check failed \u2014 click to retry"},Lt(o,a);return}if(y.rate_limited){u=Date.now()+_,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},Lt(o,a),c.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(u).toLocaleTimeString()}`);return}if(!Array.isArray(y.checks)||y.checks.length===0){a={status:"error",message:y.error||"Check failed \u2014 click to retry"},Lt(o,a),c.warn("[stc] dry_run returned no checks:",y);return}let g=y.pipeline_name;if(g&&g!=="Transaction Coordination"){c.debug(`[stc] dry_run reports pipeline="${g}" (not TC) \u2014 retracting button + caching`),Pr.add(t),document.getElementById(Gt)?.remove(),document.getElementById(se)?.remove(),wt(),To();return}let $=y.checks;if(a.checks&&a.checks.length===y.checks.length){let T=new Set;$=y.checks.map((w,E)=>a.checks[E]?.filled&&!w.filled?s.has(w.label)?w:(T.add(w.label),{...w,filled:!0}):w),s=T}else s=new Set;a={status:$.every(T=>T.filled)?"ready":"incomplete",checks:$,previouslySentAt:y.previously_sent_at??null},Hh(t,{checks:$,previously_sent_at:y.previously_sent_at??null,pipeline_name:g,ts:Date.now()}),Lt(o,a),document.getElementById(Mr)&&Sr($,y.previously_sent_at,o)},d=async()=>{let y=!!a.previouslySentAt;a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},Lt(o,a),wt();try{let g=await Fh(t,e,y);if(g.needs_confirm){a={status:"ready",checks:g.checks,previouslySentAt:g.previously_sent_at},Lt(o,a),g.checks&&Sr(g.checks,g.previously_sent_at,o);return}if(g.ok){a={status:"sent",checks:g.checks,previouslySentAt:new Date().toISOString()},Lt(o,a),window.setTimeout(()=>{f()},3500);return}a={status:"error",checks:g.checks,message:g.error||"Validation failed"},Lt(o,a),g.checks&&Sr(g.checks,g.previously_sent_at,o)}catch(g){c.error("[stc] send failed:",g),a={status:"error",message:"Network error \u2014 click to retry"},Lt(o,a)}};o.addEventListener("click",()=>{switch(a.status){case"ready":d();break;case"incomplete":{document.getElementById(Mr)?wt():a.checks&&Sr(a.checks,a.previouslySentAt,o);break}case"error":case"sent":f();break}});let l,p=!1,m=Date.now(),h=1e4,_=5*60*1e3,u=0,x=!1,f=async()=>{if(o.isConnected&&(x=!0),x&&!o.isConnected)return;let y=Co();if(!(!y||y.oppId!==t)&&!p){if(Date.now()<u){c.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(u).toLocaleTimeString()}`);return}p=!0,m=Date.now();try{await i()}finally{p=!1}}};f();let k=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(k){let y=new MutationObserver(()=>{if(l!==void 0||p)return;let A=Date.now()-m,T=Math.max(1500,h-A);l=window.setTimeout(()=>{l=void 0,a.status!=="sending"&&f()},T)});y.observe(k,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let g=A=>{let T=A.detail;if(!T||T.oppId!==t)return;sl(t);let w=0,E=()=>{if(p&&w<8){w+=1,window.setTimeout(E,500);return}f()};E()};window.addEventListener(ma,g);let $=window.setInterval(()=>{document.body.contains(o)||(y.disconnect(),l!==void 0&&window.clearTimeout(l),window.removeEventListener(ma,g),window.clearInterval($))},5e3)}return o},Uh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],jh=async()=>{for(let t of Uh)try{let e=await M(t,{timeoutMs:1500});if(e)return c.debug(`[send-to-title-co] mount target: ${t}`),e}catch{}return c.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},Pr=new Set,nl=null,Wh=t=>{t&&t!==nl&&(Pr.clear(),nl=t)},Ir=!1,ua=async()=>{if(Ir){c.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}Ir=!0;try{await Gh()}catch(t){c.error("[stc] ensureMountedImpl threw:",t)}finally{Ir=!1}},Gh=async()=>{c.debug("[stc] mount:01 ensureMountedImpl entered");let t=Co();if(!t||!t.locationId){c.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(t)}`),document.getElementById(Gt)?.remove(),document.getElementById(se)?.remove(),wt();return}if(c.debug(`[stc] mount:02 ctx ok \u2014 oppId=${t.oppId} locId=${t.locationId}`),Wh(t.oppId),Pr.has(t.oppId)){c.debug(`[stc] mount:02-BAIL opp ${t.oppId} previously confirmed non-TC this session`),document.getElementById(Gt)?.remove(),document.getElementById(se)?.remove(),wt();return}let e=document.getElementById(Gt);if(e&&e.dataset.oppId===t.oppId){c.debug("[stc] mount:03-SKIP existing button for same opp");let d=z();d!==null&&d!=="Transaction Coordination"&&(e.remove(),document.getElementById(se)?.remove(),wt(),To());return}e&&(c.debug("[stc] mount:03 removing stale existing button"),e.remove(),document.getElementById(se)?.remove(),wt()),c.debug("[stc] mount:04 calling findMountTarget");let o=await jh();if(!o){c.debug("[stc] mount:04-BAIL findMountTarget returned null");return}c.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=z();if(r!==null&&r!=="Transaction Coordination"){c.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=Co();if(!a||a.oppId!==t.oppId||!a.locationId){c.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${t.oppId} now=${a?.oppId}`);return}c.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let s=qh(t.oppId,a.locationId),i=document.createElement("span");i.id=se,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,i.appendChild(s),Y(o).appendChild(i),c.debug(`[stc] mount:07-OK Mounted on opp ${t.oppId}, inDoc=${document.body.contains(s)}`),Kh(t.oppId)},$o=null,ba=null,To=()=>{$o?.disconnect(),$o=null,ba=null},Kh=t=>{if($o&&ba===t)return;To();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(ba=t,$o=new MutationObserver(()=>{let o=Co();if(!o||o.oppId!==t){To();return}let r=z();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(Gt)?.remove(),document.getElementById(se)?.remove(),wt(),To();return}document.getElementById(Gt)||ua()}),$o.observe(e,{childList:!0,subtree:!0}))},Vh=()=>{V("send-to-closing",Z,()=>{if(document.getElementById(Gt)||Ir)return;let t=Co();t&&Pr.has(t.oppId)||ua()})},ll=()=>{Vh(),ua()};var ya="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Yh=`${ya}/tc/welcome-call-prefill`,Jh=`${ya}/tc/welcome-call-save`,Qh=`${ya}/tc/order-lockbox`,Ao="ws-crm-welcome-call-overlay",Zh=["Regular Contract","Subject To","Seller Finance","Novation"],Xh=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],tu=["Gas","Electric","Propane","Oil"],eu=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],ou=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],Kt=["Yes","No"],ru=["Yes","No","Unknown"],nu=["Professional Photographer","Seller","Tenant"],au=["Month-to-Month","Annual"],dl=["Current","Behind"],su=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],St=t=>(t==null?"":String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Br=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:13px;margin-top:4px;`,ml="margin-bottom:12px;",bl=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,iu=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,cl=t=>String(t??"").toLowerCase().replace(/[^a-z0-9]/g,""),tt=(t,e,o)=>{let r=cl(o);return`<select id="${t}" style="${Br}"><option value=""></option>${e.map(a=>`<option ${r!==""&&cl(a)===r?"selected":""}>${St(a)}</option>`).join("")}</select>`},dt=(t,e,o="")=>`<input id="${t}" type="text" value="${St(e)}" placeholder="${St(o)}" style="${Br}">`,lu=(t,e)=>`<textarea id="${t}" rows="3" style="${Br}resize:vertical;">${St(e)}</textarea>`,du=(t,e)=>`<input id="${t}" type="date" value="${St(e)}" style="${Br}">`,F=(t,e)=>`<div style="${ml}"><label style="${bl}">${St(t)}</label>${e}</div>`,_a=(t,e)=>{let o=Array.isArray(e)?e:[];return`<div style="margin-top:4px;">${su.map(r=>`<label style="${iu}"><input type="checkbox" data-grp="${t}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},Rt=t=>`<div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${St(t)}</div>`,Me=()=>{document.getElementById(Ao)?.remove()},ie=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${e==="ok"?n.emerald:n.crimson};font-family:${b.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},cu=t=>{let e=t.tenant||{};return`
    ${Rt("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${St(t.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${St(t.deal_address)||"(no address on file)"}</div>

    ${Rt("Contract")}
    ${F("Type of Contract",tt("wc-contract_type",Zh,t.contract_type))}

    ${Rt("Property")}
    ${F("Property Type",tt("wc-property_type",eu,t.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${F("Beds",dt("wc-beds",t.beds))}</div>
      <div style="flex:1;">${F("Baths",dt("wc-baths",t.baths))}</div>
      <div style="flex:1;">${F("Sq Ft",dt("wc-sqft",t.sqft))}</div>
    </div>
    ${F("Utilities",tt("wc-utilities",Xh,t.utilities))}
    ${F("Heat Source",tt("wc-heat_source",tu,t.heat_source))}

    ${Rt("Liens & Permits")}
    ${F("Is there a mortgage?",tt("wc-has_mortgage",Kt,t.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${F("Mortgage payment status",tt("wc-mortgage_payment_status",dl,t.mortgage_payment_status))}</div>
    ${F("Any other liens? (back taxes, code violations, HELOC, etc.)",tt("wc-has_other_liens",Kt,t.has_other_liens))}
    ${F("Any open or expired permits?",tt("wc-has_permit_issues",Kt,t.has_permit_issues))}
    ${F("Is the property in probate?",tt("wc-in_probate",Kt,t.in_probate))}

    ${Rt("Occupancy")}
    ${F("Property occupancy",tt("wc-occupancy",ou,t.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("First name",dt("wc-tenant_first_name",e.first_name))}</div>
        <div style="flex:1;">${F("Last name",dt("wc-tenant_last_name",e.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("Phone",dt("wc-tenant_phone",e.phone))}</div>
        <div style="flex:1;">${F("Email",dt("wc-tenant_email",e.email))}</div>
      </div>
      ${F("Lease type",tt("wc-tenant_lease_type",au,e.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("Monthly rent",dt("wc-tenant_monthly_rent",e.monthly_rent))}</div>
        <div style="flex:1;">${F("Rent due day",dt("wc-tenant_rent_due_day",e.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("Rent status",tt("wc-tenant_rent_status",dl,e.rent_status))}</div>
        <div style="flex:1;">${F("Last rent paid",du("wc-tenant_last_rent_paid",e.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("Lease on hand?",tt("wc-tenant_lease_on_hand",Kt,e.lease_on_hand))}</div>
        <div style="flex:1;">${F("Security deposit",dt("wc-tenant_security_deposit",e.security_deposit))}</div>
      </div>
      ${F("Selling with tenant in place?",tt("wc-selling_with_tenant",Kt,t.selling_with_tenant))}
    </div>

    ${Rt("HOA")}
    ${F("Part of an HOA?",tt("wc-in_hoa",Kt,t.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${F("HOA monthly fee",dt("wc-hoa_monthly_fee",t.hoa_monthly_fee))}${F("HOA rental restriction?",tt("wc-hoa_rental_restriction",ru,t.hoa_rental_restriction))}</div>

    ${Rt("Photos & Access")}
    ${F("Who is providing photos?",tt("wc-photos_provided_by",nu,t.photos_provided_by))}
    <div style="${ml}">
      <label style="${bl}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${_a("photos_avail_mornings",t.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${_a("photos_avail_afternoons",t.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${_a("photos_avail_evenings",t.photos_avail_evenings)}
    </div>

    ${Rt("Lockbox")}
    ${F("Lockbox needed?",tt("wc-lockbox_needed",Kt,t.lockbox_needed))}
    ${F("Lockbox code (agree with the seller; recorded on the property for future use)",dt("wc-lockbox_code",t.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${F("Recipient name",dt("wc-lockbox_recipient_name",t.lockbox_recipient_name))}</div>
        <div style="flex:1;">${F("Recipient phone",dt("wc-lockbox_recipient_phone",t.lockbox_recipient_phone))}</div>
      </div>
      ${F("Mailing address (if different from property)",dt("wc-lockbox_mailing_address",t.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${v.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${b.sans};cursor:pointer;flex-shrink:0;">${Or(t).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${Or(t).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${Or(t).on?n.emerald:n.amber};flex-shrink:0;"></span>${Or(t).text}</span>
      </div>
    </div>

    ${Rt("Notes")}
    ${F("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",lu("wc-welcome_call_notes",t.welcome_call_notes))}
  `},I=t=>{let e=document.getElementById(t);return e?(e.value||"").trim():""},va=t=>Array.from(document.querySelectorAll(`input[data-grp="${t}"]:checked`)).map(e=>e.value),pl=()=>{let t=(e,o)=>{let r=document.getElementById(e);r&&(r.style.display=o?"block":"none")};t("wc-mortgage-detail",I("wc-has_mortgage")==="Yes"),t("wc-hoa-detail",I("wc-in_hoa")==="Yes"),t("wc-lockbox-detail",I("wc-lockbox_needed")==="Yes"),t("wc-tenant-block",I("wc-occupancy")==="Tenant Occupied")},Or=t=>{let e=t,o=String(e.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=e.lockbox_order_date?St(e.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},pu=t=>({tenant_id:t.tenant_id,opp_id:t.opp_id,contact_id:t.contact_id,property_record_id:t.property_record_id,deal_address:t.deal_address,contract_type:I("wc-contract_type"),property_type:I("wc-property_type"),beds:I("wc-beds"),baths:I("wc-baths"),sqft:I("wc-sqft"),utilities:I("wc-utilities"),heat_source:I("wc-heat_source"),has_mortgage:I("wc-has_mortgage"),mortgage_payment_status:I("wc-mortgage_payment_status"),has_other_liens:I("wc-has_other_liens"),has_permit_issues:I("wc-has_permit_issues"),in_probate:I("wc-in_probate"),occupancy:I("wc-occupancy"),selling_with_tenant:I("wc-selling_with_tenant"),in_hoa:I("wc-in_hoa"),hoa_rental_restriction:I("wc-hoa_rental_restriction"),hoa_monthly_fee:I("wc-hoa_monthly_fee"),photos_provided_by:I("wc-photos_provided_by"),photos_avail_mornings:va("photos_avail_mornings"),photos_avail_afternoons:va("photos_avail_afternoons"),photos_avail_evenings:va("photos_avail_evenings"),lockbox_needed:I("wc-lockbox_needed"),lockbox_code:I("wc-lockbox_code"),lockbox_recipient_name:I("wc-lockbox_recipient_name"),lockbox_recipient_phone:I("wc-lockbox_recipient_phone"),lockbox_mailing_address:I("wc-lockbox_mailing_address"),welcome_call_notes:I("wc-welcome_call_notes"),tenant:I("wc-occupancy")==="Tenant Occupied"?{first_name:I("wc-tenant_first_name"),last_name:I("wc-tenant_last_name"),phone:I("wc-tenant_phone"),email:I("wc-tenant_email"),lease_type:I("wc-tenant_lease_type"),monthly_rent:I("wc-tenant_monthly_rent"),rent_due_day:I("wc-tenant_rent_due_day"),rent_status:I("wc-tenant_rent_status"),last_rent_paid:I("wc-tenant_last_rent_paid"),lease_on_hand:I("wc-tenant_lease_on_hand"),security_deposit:I("wc-tenant_security_deposit")}:void 0}),mu=t=>{Me();let e=document.createElement("div");e.id=Ao,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${b.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${Ao} input[type="date"]::-webkit-calendar-picker-indicator,#${Ao} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${v.lg} ${v.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${cu(t)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${v.lg} ${v.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${b.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${ot}">Complete Welcome Call</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&Me()}),document.getElementById("wc-close")?.addEventListener("click",Me),document.getElementById("wc-cancel")?.addEventListener("click",Me),["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(s=>{document.getElementById(s)?.addEventListener("change",pl)}),pl();let r=document.getElementById("wc-save");r?.addEventListener("click",async()=>{if(!I("wc-occupancy")){ie("Set the property occupancy before completing.","err");return}r.textContent="Saving\u2026",r.style.opacity="0.8",r.disabled=!0;try{(await fetch(Jh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pu(t)),credentials:"omit"})).ok?(Me(),ie("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(r.textContent="Complete Welcome Call",r.style.opacity="1",r.disabled=!1,ie("Save failed \u2014 try again.","err"))}catch(s){c.warn("[welcome-call] save failed:",s),r.textContent="Complete Welcome Call",r.style.opacity="1",r.disabled=!1,ie("Couldn't reach the save handler. Try again.","err")}});let a=document.getElementById("wc-order-lockbox");a?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let s=document.getElementById("wc-lockbox-status");a.disabled=!0,a.textContent="Ordering\u2026";try{(await fetch(Qh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenant_id,opp_id:t.opp_id,contact_id:t.contact_id,property_record_id:t.property_record_id,deal_address:t.deal_address,ship_to:I("wc-lockbox_mailing_address")||t.deal_address||"",recipient_name:I("wc-lockbox_recipient_name"),recipient_phone:I("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"})).ok?(a.textContent="Re-order Lockbox",a.disabled=!1,s&&(s.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,s.style.color=n.emerald),ie("Lockbox order sent to ops \u2713")):(a.textContent="Order Lockbox",a.disabled=!1,ie("Lockbox order failed \u2014 try again.","err"))}catch(i){c.warn("[welcome-call] order lockbox failed:",i),a.textContent="Order Lockbox",a.disabled=!1,ie("Couldn't reach the lockbox handler. Try again.","err")}})},hl=async(t,e)=>{Me();let o=document.createElement("div");o.id=Ao,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${b.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:t,tenant_id:e};try{let a=await fetch(`${Yh}?tc_opp_id=${encodeURIComponent(t)}&tenant_id=${encodeURIComponent(e)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let s=await a.json();r={...s,opp_id:s.opp_id||t,tenant_id:e}}else c.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){c.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=e,mu(r)};var Ea="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",bu=`${Ea}/tc/confirm-photo-appointment`,hu=`${Ea}/tc/order-lockbox`,uu=`${Ea}/tc/welcome-call-prefill`,xa="ws-crm-opp-action-bar",_l="ws-crm-opp-overflow",vl="ws-crm-opp-action-menu",wa="ws-crm-opp-action-popover",yl="ws-crm-reorder-lockbox-modal",gl=".hr-card.hr-modal.crm-opportunities-modal",_u=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,vu=/\/v2\/location\/([A-Za-z0-9]+)/,fl="Welcome Call Needed",$a="Scheduling Photos",xl="Photos Scheduled",yu=[fl,$a,xl,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],wl=()=>{let t=window.location.pathname,e=t.match(_u);if(!e)return null;let o=t.match(vu);return o?{oppId:e[1],locationId:o[1]}:null},gu=()=>{let t=document.querySelector(gl);if(!t)return null;let e=t.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of e){let r=o.textContent?.trim()??"";if(yu.includes(r))return r}return null},Yt=()=>{document.getElementById(vl)?.remove(),document.getElementById(wa)?.remove(),document.getElementById(yl)?.remove()},ga=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Vt=(t,e="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${v.md};
    background: ${n.graphite};
    border: 1px solid ${e==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${e==="ok"?n.emerald:n.crimson};
    font-family: ${b.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=t,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},fu=t=>{hl(t.oppId,t.locationId)},xu=async(t,e,o)=>(await fetch(hu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,opp_id:t.oppId,contact_id:e.contact_id||"",property_record_id:e.property_record_id||"",deal_address:e.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"})).ok,wu=(t,e)=>{Yt();let o=document.createElement("div");o.id=yl,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${b.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,i=e.lockbox_mailing_address||e.deal_address||"";r.innerHTML=`
    <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${s}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${ga(e.lockbox_recipient_name)}" />
    <label style="${s}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${ga(e.lockbox_recipient_phone)}" />
    <label style="${s}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${ga(i)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${b.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${ot}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let d=()=>o.remove();o.addEventListener("click",p=>{p.target===o&&d()}),document.getElementById("wsrl-cancel")?.addEventListener("click",d);let l=document.getElementById("wsrl-submit");l?.addEventListener("click",async()=>{let p=document.getElementById("wsrl-name")?.value.trim()||"",m=document.getElementById("wsrl-phone")?.value.trim()||"",h=document.getElementById("wsrl-address")?.value.trim()||"";if(!p||!h){Vt("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){l.disabled=!0,l.textContent="Ordering\u2026";try{await xu(t,e,{recipient_name:p,recipient_phone:m,ship_to:h})?(d(),Vt("Lockbox re-order sent to ops \u2713")):(l.disabled=!1,l.textContent="Order Lockbox",Vt("Re-order failed \u2014 try again.","err"))}catch(_){c.warn("[action-bar] reorder lockbox failed:",_),l.disabled=!1,l.textContent="Order Lockbox",Vt("Couldn't reach the lockbox handler. Try again.","err")}}})},kl=async t=>{Yt();let e={};try{e=await fetch(`${uu}?tc_opp_id=${encodeURIComponent(t.oppId)}&tenant_id=${encodeURIComponent(t.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}wu(t,e)},ku=(t,e)=>{Yt();let o=document.createElement("div");o.id=wa;let r=e.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${b.sans};
  `,o.innerHTML=`
    <style>#${wa} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${b.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${ot} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),s=o.querySelector("#wsap-vendor"),i=o.querySelector("#wsap-confirm");i?.addEventListener("click",async()=>{if(!a?.value){Vt("Pick the booked date and time first.","err");return}i.textContent="Booking\u2026",i.style.opacity="0.8";try{(await fetch(bu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.locationId,opp_id:t.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:s?.value?.trim()||null}),credentials:"omit"})).ok?(Yt(),Vt("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(i.textContent="Confirm & advance",i.style.opacity="1",Vt("Booking failed \u2014 try again.","err"))}catch(l){c.warn("[action-bar] confirm photo failed:",l),i.textContent="Confirm & advance",i.style.opacity="1",Vt("Couldn't reach the booking handler. Try again.","err")}});let d=l=>{let p=l.target;!o.contains(p)&&!e.contains(p)&&(Yt(),document.removeEventListener("click",d))};window.setTimeout(()=>document.addEventListener("click",d),0)},Eu=(t,e)=>{Yt();let o=document.createElement("div");o.id=vl;let r=e.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${b.sans};
  `;for(let s of t){let i=document.createElement("div");i.textContent=s.label,i.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${v.sm};cursor:pointer;`,i.addEventListener("mouseenter",()=>i.style.background=n.steel),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",d=>{d.stopPropagation(),s.onClick()}),o.appendChild(i)}document.body.appendChild(o);let a=s=>{let i=s.target;!o.contains(i)&&!e.contains(i)&&(Yt(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},Hr=(t,e)=>{let o=document.createElement("button");return o.type="button",e==="primary"?o.style.cssText=ot:o.style.cssText=B,o.textContent=t,o},$u=()=>{let t=Hr("\u22EE","ghost");return t.style.lineHeight="1",t},Tu=(t,e)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",e===fl){let r=Hr("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>fu(t)),o.appendChild(r),o}if(e===$a){let r=Hr("Confirm Photos","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,r.addEventListener("click",()=>ku(t,r)),o.appendChild(r),o}if(e===xl){let r=Hr("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void kl(t)),o.appendChild(r),o}return null},Cu=(t,e)=>{let o=[];if(e===$a&&(o=[{label:"Re-order Lockbox",onClick:()=>void kl(t)}]),!o.length)return null;let r=document.createElement("span");r.id=_l,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=$u();return a.addEventListener("click",s=>{s.stopPropagation(),Eu(o,a)}),r.appendChild(a),r},Au=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Lu=async()=>{for(let t of Au)try{let e=await M(t,{timeoutMs:1200});if(e)return e}catch{}return null},Rr=()=>{document.getElementById(xa)?.remove(),document.getElementById(_l)?.remove(),Yt()},Dr=!1,Ta=async()=>{if(!Dr){Dr=!0;try{let t=wl();if(!t){Rr();return}let e=z();if(e===null)return;if(e!=="Transaction Coordination"){Rr();return}let o=gu(),r=document.getElementById(xa);if(r&&r.dataset.oppId===t.oppId&&r.dataset.stage===(o??""))return;let a=Tu(t,o);if(!a){Rr();return}let s=await Lu();if(!s)return;Rr();let i=Y(s),d=document.createElement("span");d.id=xa,d.dataset.oppId=t.oppId,d.dataset.stage=o??"",d.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",d.appendChild(a),i.appendChild(d);let l=Cu(t,o);l&&i.appendChild(l),Su(t.oppId)}catch(t){c.error("[action-bar] ensureBar threw:",t)}finally{Dr=!1}}},Lo=null,ka=null,fa,ul=()=>{Lo?.disconnect(),Lo=null,ka=null},Su=t=>{if(Lo&&ka===t)return;ul();let e=document.querySelector(gl);e&&(ka=t,Lo=new MutationObserver(()=>{let o=wl();if(!o||o.oppId!==t){ul();return}fa===void 0&&(fa=window.setTimeout(()=>{fa=void 0,Ta()},250))}),Lo.observe(e,{childList:!0,subtree:!0}))},Iu=()=>{V("opp-action-bar",".crm-opportunities-modal .ui-modal-heading",()=>{Dr||Ta()})},El=()=>{Iu(),Ta()};var $l="ws-support-modal",Tl="ws-support-toast",Mu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",Cl="ws-support-submitter-name",Al="ws-support-submitter-email",Ll="ws-support-submitter-role",Pu=["Bug","Feature Request","Question","Billing","Onboarding Help"],le=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Ou=(t,e="success",o)=>{let r=document.getElementById(Tl);r&&r.remove();let a=document.createElement("div");a.id=Tl;let s=e==="success"?n.emerald:n.crimson;a.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100000;
    background: ${n.graphite};
    border: 1px solid ${s};
    border-left: 4px solid ${s};
    border-radius: ${v.md};
    padding: 14px 20px;
    color: ${n.bone};
    font-family: ${b.sans};
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-width: 340px;
    animation: ws-toast-in 0.2s ease-out;
  `,a.innerHTML=`
    <div style="font-weight: 500;">${le(t)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${le(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},Bu=()=>{document.getElementById($l)?.remove();let t=(localStorage.getItem(Cl)??"").trim(),e=(localStorage.getItem(Al)??"").trim(),o=(localStorage.getItem(Ll)??"").trim(),r={category:null,title:"",description:"",submitterName:t,submitterEmail:e,submitterRole:o},a=document.createElement("div");a.id=$l,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${b.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(560px, 94vw);
    max-height: 90vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let i=d=>`
    <button type="button" data-category="${le(d)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.md};
      padding: 12px 10px; cursor: pointer; font-family: ${b.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${le(d)}</button>
  `;s.innerHTML=`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Submit a Support Ticket</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 18px;">Get help from the REInvest OS team. Tickets are tracked and answered as fast as we can.</div>

    <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">Category</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px;">
      ${Pu.map(i).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" value="${le(t)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${b.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" value="${le(e)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${b.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" value="${le(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${b.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Title</div>
      <input id="ws-support-title" type="text" placeholder="Short summary" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${b.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Description</div>
      <textarea id="ws-support-description" rows="5" placeholder="Walk us through what happened. The more detail the faster we can help." style="width: 100%; box-sizing: border-box; padding: 10px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${b.sans}; font-size: 13px; resize: vertical;"></textarea>
    </div>

    <div id="ws-support-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-support-close" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${b.sans}; font-size: 13px;">Close</button>
      <button id="ws-support-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${b.sans}; font-size: 13px; font-weight: 600;">Submit Ticket</button>
    </div>
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),s.querySelectorAll(".ws-support-tile").forEach(d=>{d.addEventListener("mouseenter",()=>{d.dataset.selected!=="true"&&(d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow)}),d.addEventListener("mouseleave",()=>{d.dataset.selected!=="true"&&(d.style.borderColor=n.steel,d.style.background=n.steel)}),d.addEventListener("click",()=>{r.category=d.dataset.category||null,s.querySelectorAll(".ws-support-tile").forEach(l=>{l===d?(l.dataset.selected="true",l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow,l.style.color=n.emeraldBright):(l.dataset.selected="false",l.style.borderColor=n.steel,l.style.background=n.steel,l.style.color=n.bone)})})}),s.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let d=s.querySelector("#ws-support-err"),l=h=>{d&&(d.textContent=h)};if(l(""),r.title=(s.querySelector("#ws-support-title")?.value||"").trim(),r.description=(s.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(s.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(s.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(s.querySelector("#ws-support-role")?.value||"").trim(),!r.category){l("Pick a category at the top.");return}if(!r.title){l("Add a title \u2014 a short summary.");return}if(!r.description){l("Add a description so we know what you're seeing.");return}if(!r.submitterName){l("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){l("Add a valid email so we can reply.");return}let p=J();if(!p){l("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(Cl,r.submitterName),localStorage.setItem(Al,r.submitterEmail),r.submitterRole&&localStorage.setItem(Ll,r.submitterRole)}catch{}let m=s.querySelector("#ws-support-submit");m&&(m.disabled=!0,m.textContent="Submitting\u2026",m.style.opacity="0.7");try{let _=await(await fetch(Mu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:p,category:r.category,title:r.title,description:r.description,submitter_user_id:R()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!_.ok){l(_.error||"Failed to submit ticket."),m&&(m.disabled=!1,m.textContent="Submit Ticket",m.style.opacity="1");return}a.remove();let u=_.ticket_short_id||"submitted";Ou(`Ticket ${u} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(h){l(`Network error: ${h.message}`),m&&(m.disabled=!1,m.textContent="Submit Ticket",m.style.opacity="1")}})},Ru=["/support-ticket","ws-support-modal","ws-support"],Hu=/\/custom-menu-link\//,Ca=!1,Sl=()=>{if(Ca||!Hu.test(window.location.pathname))return;let t=0,e=()=>{t++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return Ru.some(i=>s.includes(i))});if(r){Ca=!0,c.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{Bu(),Ca=!1},50);return}t<10&&setTimeout(e,150)};e()},Il=!1,Ml=()=>{Il||(Il=!0,Et(()=>setTimeout(Sl,50)),Sl(),c.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var Pl="ws-phone-assignments-modal",Ol="ws-phone-assignments-toast",Du="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Fu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",zu=["ACQ","DISPO","TC"],Hl="",Jt=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Nu=(t,e="success",o)=>{document.getElementById(Ol)?.remove();let r=document.createElement("div");r.id=Ol;let a=e==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${v.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${b.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${Jt(t)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${Jt(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},qu=(t,e,o)=>{let r=[`<option value="" ${o===Hl?"selected":""}>\u2014 Unassigned \u2014</option>`,...e.map(a=>`<option value="${Jt(a)}" ${o===a?"selected":""}>${Jt(a)}</option>`)].join("");return`<select data-assign="${Jt(t)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${v.sm};
    font-family: ${b.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},Uu=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,La=async t=>{document.getElementById(Pl)?.remove();let e=t||J(),o=document.createElement("div");o.id=Pl,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${b.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${v.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",_=>{_.target===o&&o.remove()}),!e){let _=r.querySelector("#ws-pa-body");_&&(_.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${Du}?tenant_id=${encodeURIComponent(e)}`,{method:"GET",credentials:"omit"})).json()}catch(_){c.error("[phone-assignments] GET failed",_);let u=r.querySelector("#ws-pa-body");u&&(u.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${Jt(_.message)}). The backend may not be wired yet.</span>`);return}let s=a.teams&&a.teams.length?a.teams:zu,i=a.numbers??[],d={...a.config?.numberTeam??{}},l=_=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${_} found.</div>`,p=i.length?i.map(_=>`<div style="${Uu}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${Jt(_.label||_.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${b.mono};">${Jt(_.e164)}</div>
            </div>
            ${qu(`num:${_.e164}`,s,d[_.e164]??Hl)}
          </div>`).join(""):l("phone numbers"),m=_=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${_}</div>`,h=r.querySelector("#ws-pa-body");h&&(h.innerHTML=`
    ${m("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${v.md};overflow:hidden;">${p}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-family:${b.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-family:${b.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,h.querySelectorAll("select[data-assign]").forEach(_=>{_.addEventListener("change",()=>{let u=_.getAttribute("data-assign")||"",[x,...f]=u.split(":"),k=f.join(":");x==="num"&&(_.value?d[k]=_.value:delete d[k])})}),h.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),h.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let _=h.querySelector("#ws-pa-err"),u=f=>{_&&(_.textContent=f)};u("");let x=h.querySelector("#ws-pa-save");x&&(x.disabled=!0,x.textContent="Saving\u2026",x.style.opacity="0.7");try{let k=await(await fetch(Fu,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,numberTeam:d})})).json();if(!k.ok){u(k.error||"Save failed."),x&&(x.disabled=!1,x.textContent="Save",x.style.opacity="1");return}o.remove(),Nu("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(f){u(`Network error: ${f.message}`),x&&(x.disabled=!1,x.textContent="Save",x.style.opacity="1")}}))},ju=["ws-phone-assignments","phone-assignments"],Wu=/\/custom-menu-link\//,Aa=!1,Bl=()=>{if(Aa||!Wu.test(window.location.pathname))return;let t=0,e=()=>{t++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return ju.some(i=>s.includes(i))});if(r){Aa=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),s=a?a[1]:void 0;c.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${s})`);try{history.back()}catch{}setTimeout(()=>{La(s),Aa=!1},50);return}t<10&&setTimeout(e,150)};e()},Rl=!1,Dl=()=>{if(Rl)return;Rl=!0,Et(()=>setTimeout(Bl,50)),Bl();let t=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&La()};window.addEventListener("hashchange",t),t(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void La(),c.info("[phone-assignments] mounted (route + hash + window trigger)")};var Fl="powerDialerApp",Gu=".dialer",Ku='button[aria-label="Voice Calling"], button[title="Voice Calling"]',Vu=".dial-item.dial-btn.dial-btn-enabled",Pe=t=>{for(let e of["pointerdown","mousedown","pointerup","mouseup","click"])try{t.dispatchEvent(new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window}))}catch{}},Yu=t=>{let e=(t||"").match(/\+\d{10,15}/);return e?e[0]:null},Sa=()=>{try{let e=window[Fl]?._context?.provides?.emitter;if(e&&typeof e.emit=="function")return e}catch(t){c.debug("[dialer-bridge] getEmitter failed",t)}return null},Oe=()=>document.querySelector(Gu),Fr=()=>Sa()!==null||Oe()!==null?!0:!!window[Fl],zr=(t,e)=>{let o=Sa();if(!o)return c.warn(`[dialer-bridge] no emitter; cannot emit ${t}`),!1;try{return o.emit(t,e),!0}catch(r){return c.error(`[dialer-bridge] emit ${t} threw`,r),!1}},zl=()=>{if(Oe())return;let t=document.querySelector(Ku);t?Pe(t):c.warn("[dialer-bridge] Voice Calling button not found")},Ju=()=>{let t=document.querySelector(".number-list-container")||Oe();if(!t)return[];let e=[];for(let o of t.querySelectorAll(".number")){let r=(o.innerText||"").replace(/\s+/g," ").trim();!r||/closest to the contact/i.test(r)||e.push({label:r,el:o})}return e},Ia=()=>{let t=document.querySelector(".number-config, .dialer-config");return t?Yu(t.innerText):null},Nl=(t,e)=>{if(Ia()===t)return!0;let o=Sa();if(o)try{return o.emit("selectNumber",{phoneNumber:t,friendlyName:e||t}),!0}catch(r){c.warn("[dialer-bridge] selectNumber emit failed",r)}if(e){let r=document.querySelector(".number-config, .dialer-config");r&&Pe(r);let a=Ju(),s=a.find(i=>i.label===e)||a.find(i=>i.label.includes(e));if(s)return Pe(s.el),!0}return c.warn(`[dialer-bridge] could not select Calling From ${t} (${e||""})`),!1},ql=t=>{let e=t.replace(/[^\d*#+]/g,"");if(zr("sendDigitToDial",{value:e,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of e){let a=o.find(s=>s.querySelector(".dial-number")?.textContent?.trim()===r);a&&Pe(a)}},Ul=()=>{let t=Oe();if(!t)return c.warn("[dialer-bridge] no dialer present to place call"),!1;let e=t.querySelector(Vu)||[...t.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let s=+a[1],i=+a[2],d=+a[3];return i>120&&i>s+40&&i>d+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return e?(Pe(e),!0):zr("makeCall",{provider:"twilio"})};var Ma=()=>{let t=Oe();if(!t)return;let e=[...t.querySelectorAll("button, div, span")].find(o=>/^.{0,4}end call.{0,4}$/i.test((o.textContent||"").replace(/\s+/g," ").trim())&&(o.textContent||"").length<24);e?Pe(e.closest("button")||e):zr("closeCallBox")},jl=()=>{zr("closeCallBox")},Wl=t=>{let e=!1,o=()=>{let s=Oe()?.innerText||"",i=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(s)&&!/Call Summary|Call Ended/.test(s),d=/Call Summary|Call Ended/.test(s);if(i&&(e=!0),e&&d){e=!1;try{t()}catch(l){c.error("[dialer-bridge] onCallEnded cb threw",l)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var Qu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Zu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Gl=["acq","dispo","tc"],Io={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},So=null,Kl=null,Xu=async(t=!1)=>{let e={numberTeam:{},numberLabel:{}},o=J();if(!o)return e;if(!t&&So&&Kl===o)return So;try{let a=await(await fetch(`${Qu}?tenant_id=${encodeURIComponent(o)}`,{method:"GET",credentials:"omit"})).json(),s={};for(let i of a?.numbers??[])i?.e164&&(s[i.e164]=(i.label||"").trim());return So={numberTeam:a?.config?.numberTeam??{},numberLabel:s},Kl=o,So}catch(r){return c.warn("[silo] config load failed",r),So??e}},de=null,Vl=null,Pa=async(t=!1)=>{let e=J(),o=R();if(!e||!o)return[];if(!t&&de&&Vl===e)return de;try{let s=(await(await fetch(Zu,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(i=>i.id===o);if(s){let i=s.role_keys??[];de=Gl.filter(d=>i.includes(d))}else _e()?de=[...Gl]:de=[];return Vl=e,de}catch(r){return c.warn("[silo] roster load failed",r),de??[]}},Jl=()=>`ws-pd-calling-as:${R()||"anon"}`,Ql=t=>{try{localStorage.setItem(Jl(),t)}catch{}},Oa=async()=>{let t=await Pa();if(t.length===0)return null;if(t.length===1)return t[0];let e=null;try{e=localStorage.getItem(Jl())}catch{}return e&&t.includes(e)?e:t[0]},Yl=t=>{let e=(t||"").replace(/\D/g,"");return e.length===11&&e[0]==="1"?e.slice(1,4):e.length===10?e.slice(0,3):null},t_=(t,e)=>Object.entries(t).filter(([,o])=>o===e).map(([o])=>o),Zl=async t=>{let e=await Oa();if(!e)return c.debug("[silo] no active team for current rep; leaving GHL default"),null;let{numberTeam:o,numberLabel:r}=await Xu(),a=t_(o,e);if(!a.length)return c.debug(`[silo] ${e} has no numbers; leaving GHL default`),null;let s=Yl(t),i=s?a.find(m=>Yl(m)===s):void 0,d=i||a[0];if(!Nl(d,r[d]||void 0))return c.warn(`[silo] could not issue Calling-From ${d} (dialer not ready?)`),null;c.info(`[silo] ${Io[e]}: calling ${t} from ${d}${i?" (local match)":" (pool default)"}`),await new Promise(m=>setTimeout(m,150));let p=Ia();return p&&p!==d&&c.warn(`[silo] caller-ID did not stick: wanted ${d} but header shows ${p} \u2014 GHL dialer DOM/event may have changed`),d};var e_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",Xl="data-ws-pd",td="ws-crm-pd-panel",ed="ws-crm-pd-session",Qt=t=>new Promise(e=>setTimeout(e,t)),Mo=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),o_=t=>{let e=t;for(let o=0;o<8&&e;o++){if(e.querySelector(".crm-opportunities-card-wrapper"))return e;e=e.parentElement}return null},r_=t=>{let e=[t,...Array.from(t.querySelectorAll("*"))];for(let o of e)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return t},n_=t=>{let e=[],o=new Set;for(let r of Array.from(t.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),s=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!s||o.has(s))continue;let i=Array.from(r.querySelectorAll("[id]")).find(d=>/^[A-Za-z0-9]{18,22}$/.test(d.id));o.add(s),e.push({oppId:i?.id||"",contactId:s,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return e},a_=async t=>{let e=o_(t);if(!e)return[];let o=r_(e),r=-1;for(let a=0;a<60;a++){let s=e.querySelectorAll(".crm-opportunities-card-wrapper").length;if(s===r)break;r=s,o.scrollTop=o.scrollHeight,await Qt(550)}return o.scrollTop=0,n_(e)},s_=async(t,e)=>{try{let r=await(await fetch(e_,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,contact_id:e})})).json();return r?.ok?{name:r.name||"",phone:r.phone||"",skip:!!r.skip}:null}catch(o){return c.warn("[bulk-dialer] resolvePhone failed",o),null}},i_=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${b.sans};`,Ra=(t,e,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(td)?.remove();let r=document.createElement("div");r.id=td,r.style.cssText=i_;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let s=e.map((f,k)=>`<label data-row="${k}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${k}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Mo(f.name||f.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${Mo(t)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:12px;">${e.length} ${e.length===1?o.one:o.many} loaded. Pick who to call.</div>
    <div id="ws-pd-auto-bar" role="switch" aria-checked="true" tabindex="0" title="Toggle auto-advance" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};border-radius:${v.md};cursor:pointer;user-select:none;outline:none;">
      <div style="display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:13px;font-weight:600;color:${n.bone};">Auto-advance to the next call</span>
        <span style="font-size:11px;color:${n.ash};">5s countdown between calls, with Pause / Skip</span>
      </div>
      <span id="ws-pd-auto-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${v.pill};background:${n.emerald};transition:background .15s ease;">
        <span id="ws-pd-auto-knob" style="position:absolute;top:2px;left:20px;width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
      <input id="ws-pd-auto" type="checkbox" checked style="display:none;" />
    </div>
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-size:13px;font-family:${b.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${v.md};min-height:120px;">${s||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${b.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${b.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",f=>{f.target===r&&r.remove()});let i=a.querySelector("#ws-pd-list"),d=a.querySelector("#ws-pd-count"),l=()=>{let f=a.querySelectorAll(".ws-pd-cb:checked").length;d&&(d.textContent=`${f} selected`)};l(),i?.addEventListener("change",l);let p=a.querySelector("#ws-pd-auto-bar"),m=a.querySelector("#ws-pd-auto"),h=a.querySelector("#ws-pd-auto-track"),_=a.querySelector("#ws-pd-auto-knob"),u=()=>{let f=!!m?.checked;h&&(h.style.background=f?n.emerald:n.steel),_&&(_.style.left=f?"20px":"2px"),p?.setAttribute("aria-checked",String(f))},x=()=>{m&&(m.checked=!m.checked,u())};p?.addEventListener("click",x),p?.addEventListener("keydown",f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),x())}),u(),a.querySelector("#ws-pd-search")?.addEventListener("input",f=>{let k=f.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach(y=>{let g=(y.textContent||"").toLowerCase();y.style.display=g.includes(k)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",f=>{let k=f.target.checked;a.querySelectorAll("[data-row]").forEach(y=>{if(y.style.display==="none")return;let g=y.querySelector(".ws-pd-cb");g&&(g.checked=k)}),l()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let f=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(y=>{let g=Number(y.getAttribute("data-i"));e[g]&&f.push(e[g])});let k=a.querySelector("#ws-pd-auto")?.checked??!0;r.remove(),f.length&&rd(t,f,k)})},rd=async(t,e,o)=>{let r=J();if(!r)return;document.getElementById(ed)?.remove();let a={skip:!1,paused:!1,stopped:!1,advance:!1},s=document.createElement("div");s.id=ed,s.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${v.md};padding:14px 16px;color:${n.bone};font-family:${b.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(s);let i=(d,l,p)=>{s.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${b.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${Mo(t)} \xB7 ${l+1} of ${e.length}</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Mo(p)}</div>
      <div style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${Mo(d)}</div>
      <div style="display:flex;gap:6px;">
        <button id="ws-pd-skip" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;">Skip</button>
        <button id="ws-pd-pause" style="flex:1;background:${n.steel};color:${n.bone};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;">${a.paused?"Resume":"Pause"}</button>
        <button id="ws-pd-next" style="flex:1;background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;font-weight:600;">Call Next</button>
      </div>`,s.querySelector("#ws-pd-end")?.addEventListener("click",()=>{a.stopped=!0;try{Ma()}catch{}s.remove()}),s.querySelector("#ws-pd-skip")?.addEventListener("click",()=>{a.skip=!0;try{Ma()}catch{}}),s.querySelector("#ws-pd-pause")?.addEventListener("click",()=>{a.paused=!a.paused}),s.querySelector("#ws-pd-next")?.addEventListener("click",()=>{a.advance=!0})};for(let d=0;d<e.length&&!a.stopped;d++){let l=e[d];a.skip=!1,a.advance=!1,i("Resolving number\u2026",d,l.name);let m=!l.contactId||l.contactId==="__test__"?null:await s_(r,l.contactId);if(a.stopped)break;if(m?.skip){i("Called in last 2h \u2014 skipping",d,m.name||l.name),await Qt(1200);continue}let h=l._phone||m?.phone||"",_=m?.name||l.name;if(!h){i("No phone on file \u2014 skipping",d,l.name||m?.name||l.contactId),await Qt(1400);continue}if(await Zl(h),a.stopped)break;if(l.contactId&&l.contactId!=="__test__")try{let x=`/v2/location/${(window.location.pathname.match(/\/v2\/location\/([^/]+)/)||[])[1]||r}/contacts/detail/${l.contactId}`;window.location.pathname!==x&&(history.pushState({},"",x),window.dispatchEvent(new PopStateEvent("popstate")))}catch(u){c.debug("[bulk-dialer] screen-follow nav failed",u)}i(`Calling ${h}\u2026`,d,_);try{zl(),await Qt(250),ql(h),await Qt(250),Ul()}catch(u){c.error("[bulk-dialer] dial failed",u)}if(await new Promise(u=>{let x=!1,f=()=>{x||(x=!0,window.clearInterval(y),k(),u())},k=Wl(f),y=window.setInterval(()=>{(a.stopped||a.skip)&&f()},300)}),a.stopped)break;try{jl()}catch{}if(d<e.length-1)if(o)for(let u=5;u>0&&!a.stopped&&!a.advance;u--){for(i(`Next call in ${u}s\u2026`,d,_);a.paused&&!a.stopped&&!a.advance;)await Qt(200);if(a.advance||a.stopped)break;await Qt(1e3)}else for(i("Ready \u2014 press Call Next",d,_);!a.advance&&!a.stopped;)await Qt(200)}a.stopped||(s.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${e.length} contact${e.length===1?"":"s"} dialed.</div>`,setTimeout(()=>s.remove(),5e3))},Ha='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Da=()=>{try{let t=localStorage.getItem("ws-pd");if(t==="1")return!0;if(t==="0")return!1}catch{}return!0},l_=()=>{if(ue()!=="opportunity-list"||!Da()||!Fr())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(e=>{if(e.querySelector(`[${Xl}]`))return;let o=e.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute(Xl,"1"),a.title=`Power Dialer \u2014 call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${v.pill};cursor:pointer;font-family:${b.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${Ha}<span>DIAL</span>`,a.addEventListener("click",async s=>{s.stopPropagation(),s.preventDefault();let i=a.querySelector("span"),d=i?.textContent||"DIAL";i&&(i.textContent="Loading\u2026"),a.style.opacity="0.7";try{let l=await a_(e);Ra(r,l)}catch(l){c.error("[bulk-dialer] harvest failed",l)}finally{i&&(i.textContent=d),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},Be=null,Ba,od=!1,nd=()=>{if(od)return;od=!0,window.WS_CRM_PD_TEST=e=>void rd("Verification",[{oppId:"",contactId:"__test__",name:`Test ${e}`,_phone:e}],!1);let t=()=>{Ba!==void 0&&window.clearTimeout(Ba),Ba=window.setTimeout(l_,400)};Et(e=>{e==="opportunity-list"?(t(),Be||(Be=new MutationObserver(t),Be.observe(document.body,{childList:!0,subtree:!0}))):Be&&(Be.disconnect(),Be=null)})};var ad="ws-crm-pd-contacts-btn",d_=t=>new Promise(e=>setTimeout(e,t)),c_=t=>{let e=t.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return e?`+1${e[1]}${e[2]}${e[3]}`:""},p_=()=>document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0,Fa=(t,e)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(e){let l=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(l&&l.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||t.has(a))return;let s=(r?.textContent||"").replace(/\s+/g," ").trim(),i=c_(o.textContent||""),d=s&&s!=="-"?s:i||a;t.set(a,{oppId:"",contactId:a,name:d,_phone:i||void 0})})},m_=async t=>{let e=new Map;if(t)return Fa(e,!0),[...e.values()];let o=document.querySelector(".tabulator-tableholder");if(Fa(e,!1),!o)return[...e.values()];let r=-1,a=-1,s=0;for(let i=0;i<200&&(Fa(e,!1),e.size===a?s++:(s=0,a=e.size),!(i>0&&o.scrollTop===r&&s>=2));i++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await d_(220);return o.scrollTop=0,[...e.values()]},b_=()=>{if(ue()!=="contact-list"||!Da()||!Fr()||document.getElementById(ad))return;let t=document.querySelector("#views-bar .bar");if(!t)return;let e=document.createElement("button");e.id=ad,e.type="button",e.title="Power Dialer: call through this list, or the rows you've checked",e.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${v.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${b.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,e.innerHTML=`${Ha}<span>Power Dialer</span>`;let o=e.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=e.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),e.style.setProperty("border-color",n.emerald,"important"),e.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let s=e.querySelector("span"),i=s?.textContent||"Power Dialer";s&&(s.textContent="Loading\u2026"),e.style.opacity="0.7";try{let d=p_(),l=await m_(d);Ra(d?"Selected contacts":"Smart list",l,{one:"contact",many:"contacts"})}catch(d){c.error("[bulk-dialer-contacts] harvest failed",d)}finally{s&&(s.textContent=i),e.style.opacity="1"}}),t.appendChild(e)},Re=null,za,sd=!1,id=()=>{if(sd)return;sd=!0;let t=()=>{za!==void 0&&window.clearTimeout(za),za=window.setTimeout(b_,400)};Et(e=>{e==="contact-list"?(t(),Re||(Re=new MutationObserver(t),Re.observe(document.body,{childList:!0,subtree:!0}))):Re&&(Re.disconnect(),Re=null)})};var h_="ws-calling-as-chip",u_=()=>{try{let t=localStorage.getItem("ws-pd");if(t==="1")return!0;if(t==="0")return!1}catch{}return!0},Na=!1,ce=null,ld,cd=0,__=3e4,v_=()=>{let t=document.querySelector(".hl_header--controls");if(!t)return null;let e=t.querySelector('button[aria-label*="Voice Calling" i], button[aria-label*="call" i]');if(!e)return null;let o=e;for(;o&&o.parentElement!==t;)o=o.parentElement;return o?{parent:t,before:o}:null},qa=()=>{if(!ce||ce.isConnected)return;let t=v_();t&&t.parent.insertBefore(ce,t.before)},dd=async()=>{if(!(Na||ce)&&u_()){Na=!0;try{let t=await Pa();if(!t.length)return;let e=await Oa()??t[0],o=t.length>1,r=document.createElement("div");r.id=h_,r.style.cssText="position:relative;display:inline-flex;align-items:center;margin:0 6px;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:7px;padding:5px 11px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${v.pill};color:${n.bone};font-family:${b.sans};font-size:11px;white-space:nowrap;cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${b.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${Io[e]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let s=i=>{let d=a.querySelector(".ws-ca-team");d&&(d.textContent=Io[i])};if(o){let i=document.createElement("div");i.style.cssText=`position:fixed;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;z-index:99999;`;let d=()=>{i.innerHTML="",t.forEach(l=>{let p=document.createElement("div"),m=l===e;p.style.cssText=`padding:9px 14px;font-family:${b.sans};font-size:13px;color:${m?n.emeraldBright:n.bone};cursor:pointer;background:${m?n.emeraldGlow:"transparent"};`,p.textContent=Io[l],p.addEventListener("mouseenter",()=>{l!==e&&(p.style.background=n.steel)}),p.addEventListener("mouseleave",()=>{l!==e&&(p.style.background="transparent")}),p.addEventListener("click",h=>{h.stopPropagation(),e=l,Ql(l),s(l),d(),i.style.display="none"}),i.appendChild(p)})};d(),document.body.appendChild(i),a.addEventListener("click",l=>{if(l.stopPropagation(),i.style.display==="block"){i.style.display="none";return}let p=a.getBoundingClientRect();i.style.top=`${Math.round(p.bottom+6)}px`,i.style.left=`${Math.round(p.left)}px`,i.style.display="block"}),document.addEventListener("click",()=>{i.style.display="none"})}ce=r,qa(),c.info(`[calling-as] chip mounted in header (roles=${t.join(",")}, active=${e}, multi=${o})`)}catch(t){c.error("[calling-as] build failed",t)}finally{Na=!1,cd=Date.now()}}},pd=()=>{ce?qa():dd(),ld===void 0&&(ld=window.setInterval(()=>{ce?qa():Date.now()-cd>=__&&dd()},1500))};var y_="#12161D",g_="#EDEEF0",md=t=>{let o=getComputedStyle(t).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],s=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&s>=230},bd=t=>{t.style.setProperty("background-color",y_,"important"),t.style.setProperty("color",g_,"important")},f_=()=>{for(let t of Array.from(document.body.children)){if(t.tagName!=="DIV")continue;let e=t;if(!(e.id||e.className)&&getComputedStyle(e).position==="fixed")return e}return null},x_=t=>{md(t)&&bd(t);for(let e of Array.from(t.querySelectorAll("*")))md(e)&&bd(e)},Ua=null,Po=null,ud=()=>{Po&&(Po.disconnect(),Po=null),Ua=null},w_=t=>{if(Ua===t)return;ud(),Ua=t;let e=!1,o=()=>{e=!1;try{x_(t)}catch(a){c.debug("[dialer-theme] paint failed",a)}},r=()=>{e||(e=!0,requestAnimationFrame(o))};Po=new MutationObserver(r),Po.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),c.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},hd=!1,Nr=()=>{if(hd)return;hd=!0;let t=()=>{let o=f_();o?w_(o):ud()};t(),new MutationObserver(t).observe(document.body,{childList:!0})};var k_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",E_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",$_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",yd="tc_closing_agent",T_="tc_closing_office",kt="ws-crm-closing-agent-picker-button",gd="ws-crm-closing-agent-picker-modal",C_=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,A_=/\/v2\/location\/([A-Za-z0-9]+)/,Ro=()=>{let t=window.location.pathname,e=t.match(C_);if(!e)return null;let o=t.match(A_);return{oppId:e[1],locationId:o?o[1]:null}},Ya=async t=>{let e=await fetch(k_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,query:t.query??"",contact_id:t.contactId??null,contact_type:t.contactType??null,limit:t.limit??20}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},_d=async t=>{let e=await fetch(E_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,opp_id:t.oppId,field_key:t.fieldKey,value:t.value}),credentials:"omit"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()},L_=async(t,e)=>{try{let o=await fetch($_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,opp_id:t,field_key:yd}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let s=await Ya({tenantId:e,contactId:a,limit:1});if(!s.ok||!s.results.length)return null;let i=s.results[0];return{id:i.id,name:i.name,companyName:i.companyName??""}}catch(o){return c.warn("[closing-agent] fetchCurrent failed:",o),null}},pe=null,S_=60*60*1e3,Ja=t=>`ws-crm-to-cache:${t}`,fd=t=>{try{let e=window.localStorage.getItem(Ja(t));if(!e)return null;let o=JSON.parse(e);return!o.ts||Date.now()-o.ts>S_||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},xd=(t,e,o)=>{try{window.localStorage.setItem(Ja(t),JSON.stringify({contactId:e,contactName:o,ts:Date.now()}))}catch{}},I_=t=>{try{window.localStorage.removeItem(Ja(t))}catch{}},Wa="ws-crm-closing-agent-field-link",M_=()=>{let t=document.querySelector(".crm-opportunities-modal");t&&(t.querySelectorAll(`.${Wa}`).forEach(e=>e.remove()),t.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(e=>{e.style.removeProperty("color"),e.style.removeProperty("caret-color"),e.style.removeProperty("visibility"),delete e.dataset.wsClosingAgentDecorated}))},ja=!1,Qa=async t=>{if(ja)return;let e=wd();if(!e)return;let o=(e.value||"").trim();if(!o){c.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){c.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(e.dataset.wsClosingAgentDecorated!==o){ja=!0;try{c.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await Ya({tenantId:t,contactId:o,limit:1});if(!r.ok||!r.results.length){c.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];c.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),Ga(a.id,a.name,t);let s=document.getElementById(kt);if(s){Zt(s,{status:"linked",contactName:a.name});let i=Ro();i&&xd(i.oppId,a.id,a.name)}}catch(r){c.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{ja=!1}}},P_=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,wd=()=>{let e=document.querySelectorAll("*"),o=[],r=[],a=[];for(let l of e){let p=(l.textContent||"").trim();P_.test(p)?o.push(l):p.length<80&&/Title\s+Officer/i.test(p)&&r.push(p);for(let m of["aria-label","placeholder","data-label","title","name","data-test"]){let h=l.getAttribute(m);h&&/Title\s+Officer/i.test(h)&&a.push({tag:l.tagName.toLowerCase(),attr:m,value:h})}}if(c.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&c.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&c.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((l,p)=>l.querySelectorAll("*").length-p.querySelectorAll("*").length);let i=o[0].parentElement,d=0;for(;i&&d<8;){let l=i.querySelector("input");if(l)return c.info(`[closing-agent] findInput: located input ${d} levels up from label`),l;i=i.parentElement,d+=1}return c.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},Ga=(t,e,o)=>{let r=wd();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==t){a&&r.parentElement?.querySelectorAll(`.${Wa}`).forEach(i=>i.remove());{let s=r.parentElement;if(!s)return;r.dataset.wsClosingAgentDecorated=t,r.style.visibility="hidden",window.getComputedStyle(s).position==="static"&&(s.style.position="relative");let d=document.createElement("a");d.className=Wa,d.href=`/v2/location/${o}/contacts/detail/${t}`,d.textContent=e,d.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: ${n.bone};
      font-family: ${b.sans};
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      pointer-events: auto;
      background: ${n.slate};
      border-radius: ${v.sm};
      z-index: 2;
    `,d.addEventListener("mouseenter",()=>{d.style.textDecoration="underline"}),d.addEventListener("mouseleave",()=>{d.style.textDecoration="none"}),d.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),window.location.href=d.href}),s.appendChild(d)}}},qr=()=>{document.getElementById(gd)?.remove()},O_=t=>{qr();let e=document.createElement("div");e.id=gd,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
        font-family: ${b.sans};
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
        ${B}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),s=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),e.addEventListener("click",p=>{p.target===e&&qr()}),s?.addEventListener("click",qr);let i,d="",l=async p=>{if(a&&p!==d){if(d=p,!p.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let m=await Ya({tenantId:t.locationId,query:p,contactType:"closing_agent",limit:20});if(!m.ok||!Array.isArray(m.results)||m.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",m.results.forEach(h=>{let _=document.createElement("button");_.type="button",_.style.cssText=`
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          background: transparent;
          border: none;
          border-bottom: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${b.sans};
          font-size: 13px;
          cursor: pointer;
          transition: background 0.1s ease;
        `,_.innerHTML=`
          <div style="font-weight: 500;">${Ur(h.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${Ur(h.email||"(no email)")} \xB7 ${Ur(h.phone||"no phone")}
            ${h.companyName?` \xB7 ${Ur(h.companyName)}`:""}
          </div>
        `,_.addEventListener("mouseenter",()=>{_.style.background=n.slate}),_.addEventListener("mouseleave",()=>{_.style.background="transparent"}),_.addEventListener("click",()=>{qr(),t.onPick(h)}),a.appendChild(_)})}catch(m){c.error("Closing Agent picker search failed",m),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let p=r.value;i!==void 0&&clearTimeout(i),i=window.setTimeout(()=>{l(p)},250)})},Ur=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Zt=(t,e)=>{let o=t.querySelector(".ws-top-label"),r=t.querySelector(".ws-top-dot"),a="Link Closing Agent",s=n.amber,i=n.bone,d="transparent",l=n.steel,p="pointer";switch(e.status){case"loading":a="Loading Closing Agent\u2026",s=n.coolGray,i=n.ash,p="wait";break;case"empty":a="Link Closing Agent",s=n.amber;break;case"linked":a=e.contactName?`Closing Agent: ${e.contactName}`:"Closing Agent: \u2713",s=n.emerald,d=n.emeraldGlow,l=n.emeraldBorder,i=n.emeraldBright;break;case"saving":a="Linking\u2026",s=n.coolGray,i=n.ash,p="wait";break}o&&(o.textContent=a),r&&(r.style.background=s,r.style.boxShadow=`0 0 6px ${s}`),t.style.background=d,t.style.borderColor=l,t.style.color=i,t.style.cursor=p},B_=(t,e)=>{let o=document.createElement("button");o.id=kt,o.type="button",o.dataset.oppId=t,o.style.cssText=B,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};Zt(o,r);let a=fd(t);return a&&(r={status:"linked",contactName:a.contactName},Zt(o,r),pe={oppId:t,contactId:a.contactId,contactName:a.contactName,tenantId:e}),(async()=>{let i=await L_(t,e);i?(r={status:"linked",contactName:i.name},Zt(o,r),pe={oppId:t,contactId:i.id,contactName:i.name,tenantId:e},Ga(i.id,i.name,e)):a||(r={status:"empty"},Zt(o,r),pe?.oppId===t&&(pe=null),M_(),I_(t))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||O_({oppId:t,locationId:e,onPick:async i=>{r={status:"saving"},Zt(o,r);try{let d=await _d({tenantId:e,oppId:t,fieldKey:yd,value:i.id});if(!d.ok)throw new Error(d.error??"Save failed");i.companyName&&i.companyName.trim()&&await _d({tenantId:e,oppId:t,fieldKey:T_,value:i.companyName.trim()}),r={status:"linked",contactName:i.name},Zt(o,r),pe={oppId:t,contactId:i.id,contactName:i.name,tenantId:e},xd(t,i.id,i.name),Ga(i.id,i.name,e),il(t),c.info(`Closing Agent linked: ${i.name} (${i.id})${i.companyName?` \u2014 Company: ${i.companyName}`:""}`)}catch(d){c.error("Closing Agent link failed",d),r={status:"empty"},Zt(o,r)}}})}),o},R_=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],H_=async()=>{for(let t of R_)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Oo=!1,Wr=async()=>{if(!Oo){Oo=!0;try{await D_()}finally{Oo=!1}}},D_=async()=>{let t=Ro();if(!t||!t.locationId){document.getElementById(kt)?.remove(),document.getElementById(`${kt}-wrap`)?.remove(),jr();return}let e=document.getElementById(kt);if(e&&e.dataset.oppId===t.oppId){let l=z();l!==null&&l!=="Transaction Coordination"&&(e.remove(),document.getElementById(`${kt}-wrap`)?.remove(),jr());return}e&&(e.remove(),document.getElementById(`${kt}-wrap`)?.remove());let o=z();if(o!==null&&o!=="Transaction Coordination")return;let r=await H_();if(!r||!(fd(t.oppId)!==null||pe!==null&&pe.oppId===t.oppId)&&await X()!=="Transaction Coordination")return;let s=Ro();if(!s||s.oppId!==t.oppId||!s.locationId)return;let i=B_(t.oppId,s.locationId),d=document.createElement("span");d.id=`${kt}-wrap`,d.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,d.appendChild(i),Y(r).appendChild(d),c.debug(`Mounted Closing Agent picker on opp ${t.oppId}`),F_(t.oppId),Qa(s.locationId)},Bo=null,Ka=null,Va=null,jr=()=>{Bo?.disconnect(),Bo=null,Ka=null,Va=null},F_=t=>{let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(Bo&&Ka===t&&Va===e||(jr(),Ka=t,Va=e,Bo=new MutationObserver(()=>{let o=Ro();if(!o||o.oppId!==t||!o.locationId){jr();return}document.getElementById(kt)||Wr(),Qa(o.locationId)}),Bo.observe(e,{childList:!0,subtree:!0})))},z_=()=>{V("closing-agent-picker",Z,()=>{!document.getElementById(kt)&&!Oo&&Wr()})},vd,N_=()=>{vd===void 0&&(vd=window.setInterval(()=>{let t=Ro();if(!t||!t.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(kt)&&!Oo&&(c.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),Wr()),Qa(t.locationId)},2e3))},kd=()=>{c.info("[closing-agent] mountClosingAgentPickerButton invoked"),z_(),N_(),Wr()};var q_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Ht="ws-crm-manage-team-cta",$d="ws-crm-manage-team-modal",U_=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,Td={manager:"Owner",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator",acq_manager:"ACQ Manager",dispo_manager:"Dispo Manager",tc_manager:"TC Manager"},j_={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson},acq_manager:{bg:n.emeraldGlow,fg:n.emerald},dispo_manager:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc_manager:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},Cd=()=>{let t=window.location.pathname.match(U_);return t?{tenantId:t[1]}:null},Kr=async t=>{let e=await fetch(q_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!e.ok){let o="";try{o=await e.text()}catch{}throw new Error(`Team.Manage HTTP ${e.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await e.json()},vt=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Xt=t=>vt(t),Za="ws-crm-manage-team-toast",es=(t,e="info",o=4e3)=>{document.getElementById(Za)?.remove();let r=e==="success"?n.emerald:e==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=Za,a.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999999;
    background: ${n.graphite};
    border: 1px solid ${r};
    border-radius: ${v.sm};
    color: ${n.bone};
    padding: 12px 18px;
    font-family: ${b.sans};
    font-size: 13px;
    max-width: 400px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  `,a.textContent=t,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(Za)===a&&a.remove()},o)},Xa=()=>{document.getElementById($d)?.remove()},W_=(t,e)=>{let o=j_[t]||{bg:n.slate,fg:n.ash};return`
    <span style="
      display: inline-block;
      background: ${o.bg};
      color: ${o.fg};
      border: 1px solid ${o.fg};
      border-radius: ${v.pill};
      padding: 2px 10px;
      font-family: ${b.mono};
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-bottom: 4px;
    ">${vt(e)}</span>
  `},G_=(t,e)=>{let o=[t.first_name,t.last_name].filter(Boolean).join(" ")||"(no name)",r=t.roles.map(i=>W_(i.key,i.display)).join(""),a=e?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",s=e?"":'title="Owner-only action"';return`
    <div data-user-id="${Xt(t.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${vt(o)}
          ${t.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${b.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${vt(t.email)}${t.phone?` &middot; ${vt(t.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${s}>
        <button class="ws-team-edit" data-email="${Xt(t.email)}" data-user-id="${Xt(t.id)}" data-name="${Xt(o)}" data-current-roles="${Xt(t.role_keys.join(","))}" style="${B} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${Xt(t.email)}" data-name="${Xt(o)}" data-role-count="${Xt(String(t.role_keys.length))}" style="${B} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},K_=(t,e)=>t.length===0?`
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
      font-family: ${b.mono};
      font-size: 10px;
      color: ${n.ash};
      letter-spacing: 0.1em;
      text-transform: uppercase;
    ">
      <div>Member</div>
      <div>Roles</div>
      <div style="text-align: right;">Actions</div>
    </div>
  `+t.map(r=>G_(r,e)).join(""),Vr=async t=>{Xa();let e=document.createElement("div");e.id=$d,e.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `,e.addEventListener("click",l=>{l.target===e&&Xa()});let o=document.createElement("div");o.style.cssText=`
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
        <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
        <div style="font-size: 20px; font-weight: 500;">Roster</div>
      </div>
      <button id="ws-team-close" style="${B} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 10px 18px; font-family: ${b.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,e.appendChild(o),document.body.appendChild(e),o.querySelector("#ws-team-close")?.addEventListener("click",Xa);let r;try{r=await Kr({tenant_id:t,action:"list"})}catch(l){let p=o.querySelector("#ws-team-content");p&&(p.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${vt(l.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let l=o.querySelector("#ws-team-content");l&&(l.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${vt(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=R(),s=!!(a&&r.roster.some(l=>l.id===a&&l.role_keys.includes("manager"))),i=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${b.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} owner</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",d=o.querySelector("#ws-team-content");if(d&&(d.innerHTML=i+K_(r.roster,s)),s)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{V_(t)}),o.querySelectorAll(".ws-team-edit").forEach(l=>{l.addEventListener("click",p=>{let m=p.currentTarget;Y_(t,{email:m.dataset.email||"",name:m.dataset.name||"",currentRoles:(m.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(l=>{l.addEventListener("click",p=>{let m=p.currentTarget;J_(t,{email:m.dataset.email||"",name:m.dataset.name||"",roleCount:parseInt(m.dataset.roleCount||"0",10)})})});else{let l=o.querySelector("#ws-team-actions");l&&(l.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Owner. Owner role required to add/edit/remove team members.
        </div>
      `)}},V_=t=>{let e="ws-crm-manage-team-add-modal";document.getElementById(e)?.remove();let o=document.createElement("div");o.id=e,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `,o.addEventListener("click",i=>{i.target===o&&o.remove()});let r=`
    width: 100%;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${b.sans};
    font-size: 13px;
    padding: 10px 14px;
    outline: none;
    box-sizing: border-box;
  `,a=`
    display: block;
    font-family: ${b.mono};
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
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,s.innerHTML=`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
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
      <button id="ws-team-add-cancel" style="${B} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${b.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(s),document.body.appendChild(o),s.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),s.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let i=(s.querySelector("#ws-team-add-first")?.value||"").trim(),d=(s.querySelector("#ws-team-add-last")?.value||"").trim(),l=(s.querySelector("#ws-team-add-email")?.value||"").trim(),p=(s.querySelector("#ws-team-add-mobile")?.value||"").trim(),m=(s.querySelector("#ws-team-add-role")?.value||"").trim(),h=s.querySelector("#ws-team-add-error"),_=s.querySelector("#ws-team-add-submit");if(!i||!d||!l||!p||!m){h&&(h.textContent="All fields are required.");return}_&&(_.disabled=!0,_.textContent="Adding\u2026",_.style.opacity="0.7"),h&&(h.textContent="");try{let u=await Kr({tenant_id:t,action:"add",first_name:i,last_name:d,email:l,mobile:p,role:m,triggered_by_user_id:R()});if(!u.ok){h&&(h.textContent=u.error||"Failed to add employee"),_&&(_.disabled=!1,_.textContent="Add Employee",_.style.opacity="1");return}o.remove(),es(`Added ${i} ${d} as ${Td[m]||m}.`,"success"),await Vr(t)}catch(u){h&&(h.textContent=u.message),_&&(_.disabled=!1,_.textContent="Add Employee",_.style.opacity="1")}})},Y_=(t,e)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `,r.addEventListener("click",i=>{i.target===r&&r.remove()});let a=document.createElement("div");a.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let s=i=>{let d=e.currentRoles.includes(i)?"checked":"";return`
      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: ${n.slate}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; cursor: pointer; margin-bottom: 6px;">
        <input type="checkbox" data-role-key="${i}" ${d} style="cursor: pointer;" />
        <span style="font-size: 13px;">${vt(Td[i])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${vt(e.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${vt(e.email)}</div>

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
      <button id="ws-team-edit-cancel" style="${B} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${b.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let i=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(p=>p.checked).map(p=>p.dataset.roleKey||"").filter(Boolean),d=a.querySelector("#ws-team-edit-error"),l=a.querySelector("#ws-team-edit-submit");if(i.length===0){d&&(d.textContent="Select at least one role. To fully offboard, use Remove instead.");return}l&&(l.disabled=!0,l.textContent="Saving\u2026",l.style.opacity="0.7"),d&&(d.textContent="");try{let p=await Kr({tenant_id:t,action:"update",email:e.email,roles:i,triggered_by_user_id:R()});if(!p.ok){d&&(d.textContent=p.error||"Failed to update roles"),l&&(l.disabled=!1,l.textContent="Save Roles",l.style.opacity="1");return}r.remove(),es(`Updated roles for ${e.name}.`,"success"),await Vr(t)}catch(p){d&&(d.textContent=p.message),l&&(l.disabled=!1,l.textContent="Save Roles",l.style.opacity="1")}})},J_=(t,e)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `,r.addEventListener("click",s=>{s.target===r&&r.remove()});let a=document.createElement("div");a.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.crimson};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.innerHTML=`
    <div style="font-family: ${b.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.crimson}; margin-bottom: 4px;">Remove from Team</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${vt(e.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${vt(e.email)} will be removed from all ${e.roleCount} role${e.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${b.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${B} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${b.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let s=a.querySelector("#ws-team-remove-error"),i=a.querySelector("#ws-team-remove-submit");i&&(i.disabled=!0,i.textContent="Removing\u2026",i.style.opacity="0.7"),s&&(s.textContent="");try{let d=await Kr({tenant_id:t,action:"remove",email:e.email,triggered_by_user_id:R()});if(!d.ok){s&&(s.textContent=d.error||"Failed to remove"),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1");return}r.remove(),es(`Removed ${e.name} from the team.`,"success"),await Vr(t)}catch(d){s&&(s.textContent=d.message),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1")}})},Q_=89,Z_=93,X_=310,tv=34,ev=14,ov=14,rv=3,Gr=t=>{let e=document.querySelector('iframe[name="settings-app"]');if(!e){t.style.right="24px";return}let o=e.getBoundingClientRect(),r=window.innerWidth-o.right+Q_;t.style.right=`${Math.max(r,16)}px`},nv=t=>{let e=document.createElement("button");return e.id=Ht,e.type="button",e.style.cssText=`
    position: fixed;
    top: ${Z_}px;
    right: 24px;
    width: ${X_}px;
    height: ${tv}px;
    padding: 0 ${ov}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${rv}px;
    font-family: ${b.sans};
    font-size: ${ev}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,e.addEventListener("mouseenter",()=>{e.style.background=n.emeraldBright}),e.addEventListener("mouseleave",()=>{e.style.background=n.emerald}),e.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,e.addEventListener("click",()=>{Vr(t)}),Gr(e),setTimeout(()=>Gr(e),200),setTimeout(()=>Gr(e),800),av(),e},Ed=!1,av=()=>{Ed||(Ed=!0,window.addEventListener("resize",()=>{let t=document.getElementById(Ht);t instanceof HTMLButtonElement&&Gr(t)}))},ts=!1,sv=()=>{if(!ts){ts=!0;try{let t=Cd();if(!t){document.getElementById(Ht)?.remove(),document.getElementById(`${Ht}-floater`)?.remove();return}let e=document.getElementById(Ht);if(e&&e.dataset.tenantId===t.tenantId)return;document.getElementById(`${Ht}-floater`)?.remove();let o=document.createElement("div");o.id=`${Ht}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=nv(t.tenantId);r.dataset.tenantId=t.tenantId,o.appendChild(r),document.body.appendChild(o),c.debug(`[manage-team] mounted (floater) for tenant ${t.tenantId}`)}finally{ts=!1}}},Ad=()=>{if(!Cd()){document.getElementById(Ht)?.remove(),document.getElementById(`${Ht}-floater`)?.remove();return}sv()};var iv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",ns="ws-crm-prepare-contract-button",Ld="ws-crm-prepare-contract-menu",Mt="ws-crm-prepare-contract-modal",Sd="ws-crm-modal-date-style",Dt="https://services.leadconnectorhq.com",Rd=()=>{if(document.getElementById(Sd))return;let t=document.createElement("style");t.id=Sd,t.textContent=`
    #${Mt} input[type="date"] { color-scheme: dark; }
    #${Mt} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
  `,document.head.appendChild(t)},as="__WS_CRM_CAPTURED_AUTH",lv=50*60*1e3,zo=()=>{try{let t=localStorage.getItem(as);if(!t)return null;let e=JSON.parse(t);return e?.authorization?Date.now()-(e.capturedAt||0)>lv?(localStorage.removeItem(as),null):e:null}catch{return null}},dv=t=>{try{localStorage.setItem(as,JSON.stringify(t))}catch{}},De=()=>{let t=zo(),e=window;if(e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{},e.__WS_CRM_DIAG.authChecks=(e.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${e.__WS_CRM_DIAG.authChecks}]`,t?`present (captured ${Date.now()-t.capturedAt}ms ago, ${t.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!t)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:t.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return t.tokenId&&(o["token-id"]=t.tokenId),o},Id=(t,e)=>new Promise(o=>{let r=Date.now(),a=()=>{if((zo()?.capturedAt??0)>t)return o(!0);if(Date.now()-r>e)return o(!1);window.setTimeout(a,250)};a()}),He=async(t,e={},o=2)=>{let r=zo()?.capturedAt??0,a;try{a={...De(),...e.headers??{}}}catch(i){if(o>0&&await Id(r,4e3))return He(t,e,o-1);throw i}let s=await fetch(t,{...e,headers:a});return s.status!==401||o<=0?s:await Id(r,4e3)?He(t,e,o-1):s},Md=!1,cv=()=>{if(Md)return;Md=!0;let t=window;t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let e=()=>{let l=zo();return!!(l&&l.authorization&&Date.now()-(l.capturedAt||0)<3e5)},o=(l,p,m)=>{t.__WS_CRM_DIAG.lastSeenHeaders={url:l,headers:p,source:m};let h=p.authorization||p.Authorization;if(!h){t.__WS_CRM_DIAG.fetchCalls+t.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${m} no-auth]`,{url:l.split("?")[0],headerKeys:Object.keys(p)});return}m==="fetch"?t.__WS_CRM_DIAG.fetchAuthSeen++:t.__WS_CRM_DIAG.xhrAuthSeen++;let _=p["token-id"]||p["Token-Id"]||void 0,u=zo()?.authorization;dv({authorization:h,tokenId:_,capturedAt:Date.now()}),u!==h&&(t.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${m}] captured GHL auth from ${l.split("?")[0]} (${h.slice(0,24)}\u2026)`))},r=window.fetch;window.fetch=async function(...l){let p=typeof l[0]=="string"?l[0]:l[0]instanceof URL?l[0].toString():l[0].url,m=l[1]||{};if(p&&p.includes("services.leadconnectorhq.com")&&!e()){t.__WS_CRM_DIAG.fetchCalls++;let h=m.headers;!h&&l[0]instanceof Request&&(h=l[0].headers);let _={};if(h instanceof Headers)h.forEach((u,x)=>_[x.toLowerCase()]=u);else if(Array.isArray(h))h.forEach(([u,x])=>_[u.toLowerCase()]=x);else if(h&&typeof h=="object")for(let u of Object.keys(h))_[u.toLowerCase()]=h[u];o(p,_,"fetch")}return r.apply(this,l)};let a=XMLHttpRequest.prototype,s=a.open,i=a.setRequestHeader,d=a.send;a.open=function(l,p,...m){return this.__wsCrmUrl=p,this.__wsCrmHeaders={},s.call(this,l,p,...m)},a.setRequestHeader=function(l,p){return this.__wsCrmHeaders&&typeof l=="string"&&(this.__wsCrmHeaders[l.toLowerCase()]=p),i.call(this,l,p)},a.send=function(l){let p=this.__wsCrmUrl,m=this.__wsCrmHeaders;return p&&p.includes("services.leadconnectorhq.com")&&m&&!e()&&(t.__WS_CRM_DIAG.xhrCalls++,o(p,m,"xhr")),d.call(this,l)},c.debug("[prepare-contract] interceptors installed (fetch + XHR)")},Hd=()=>{let t=H();return!t||!t.locationId?null:{contactId:t.contactId,tenantId:t.locationId}},pv=t=>{let e=t.dataset;return e.tenantId&&e.contactId?{tenantId:e.tenantId,contactId:e.contactId,oppId:e.oppId||void 0}:e.tenantId&&e.oppId?{tenantId:e.tenantId,contactId:"",oppId:e.oppId}:Hd()},mv=t=>{let e=(t||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(e)||/assignment.*(contract|agreement)/i.test(e)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(e)||/purchase.*(contract|agreement)/i.test(e)?"PA":"passthrough"},Dd="__WS_CRM_TEMPLATES_CACHE_V1",bv=24*60*60*1e3,Pd=t=>{try{let e=window.localStorage.getItem(Dd);if(!e)return null;let o=JSON.parse(e);return o.tenantId!==t||Date.now()-o.cachedAt>bv?null:o.templates}catch{return null}},hv=(t,e)=>{try{let o={tenantId:t,templates:e,cachedAt:Date.now()};window.localStorage.setItem(Dd,JSON.stringify(o))}catch{}},uv=async t=>{let e=`${Dt}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(t)}&skip=0&limit=10`,o;try{o=await He(e,{method:"GET"})}catch(i){let d=Pd(t);if(d)return c.info(`[prepare-contract] templates network failure, using cache (${d.length} items)`),d;throw i}if(!o.ok){let i=Pd(t);if(i)return c.info(`[prepare-contract] templates fetch ${o.status}, using cache (${i.length} items)`),i;let d="";try{d=await o.text()}catch{}let l=d?` \u2014 ${d.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${l}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let s=a.map(i=>({id:(i._id??i.id??i.templateId)||"",name:i.name||i.title||"(unnamed template)",type:mv(i.name||i.title||"")})).filter(i=>!!i.id);return s.length>0&&hv(t,s),s},_v=async(t,e)=>{let o=await He(`${Dt}/opportunities/pipelines?locationId=${encodeURIComponent(t)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(d=>/acquisition/i.test(d.name));if(!a)throw new Error("No Acquisition pipeline found on tenant");let s=await He(`${Dt}/opportunities/search?location_id=${encodeURIComponent(t)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(e)}&status=open&limit=20`,{method:"GET"});if(!s.ok)throw new Error(`ACQ opp search ${s.status}`);return((await s.json()).opportunities||[]).map(d=>({id:d.id,name:d.name||"(unnamed opp)",propertyAddress:d.name||"",updatedAt:d.updatedAt||null})).sort((d,l)=>{let p=d.updatedAt?Date.parse(d.updatedAt):0;return(l.updatedAt?Date.parse(l.updatedAt):0)-p})},vv=async(t,e)=>{let o=await He(`${Dt}/opportunities/pipelines?locationId=${encodeURIComponent(t)}`,{method:"GET"});if(!o.ok)throw new Error(`Pipelines fetch ${o.status}`);let a=((await o.json()).pipelines||[]).find(l=>/marketing\s*tracker/i.test(l.name));if(!a)throw new Error("No Marketing Tracker pipeline found on tenant");let s=await fetch(`${Dt}/opportunities/search?location_id=${encodeURIComponent(t)}&pipeline_id=${encodeURIComponent(a.id)}&contact_id=${encodeURIComponent(e)}&status=open&limit=20`,{method:"GET",headers:De()});if(!s.ok)throw new Error(`MT opp search ${s.status}`);return((await s.json()).opportunities||[]).map(l=>({id:l.id,name:l.name||"(unnamed opp)",propertyAddress:l.name||"",updatedAt:l.updatedAt||null})).sort((l,p)=>{let m=l.updatedAt?Date.parse(l.updatedAt):0;return(p.updatedAt?Date.parse(p.updatedAt):0)-m})},yv=async t=>{let e=await fetch(iv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t.tenantId,contact_id:t.contactId,template_id:t.templateId,template_type:t.templateType,opp_id:t.oppId,closing_date:t.closingDate,buyer_earnest_due_date:t.buyerEarnestDueDate,lender_source:t.lenderSource,triggered_by_user_id:t.userId,overrides:t.overrides}),credentials:"omit"});if(!e.ok)throw new Error(`Contract.Stage HTTP ${e.status}`);return await e.json()},gv=async(t,e,o)=>{let r=`${Dt}/proposals/templates/to-proposal/${t}/${e}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:De()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let s=await a.json(),i=s._id||s.id||s.proposal?._id||s.proposal?.id;if(!i)throw new Error("to-proposal returned no proposal id");return i},fv=async(t,e)=>{let o=await fetch(`${Dt}/proposals/document/${e}?locationId=${encodeURIComponent(t)}`,{method:"GET",headers:De()});if(!o.ok){let s=await o.text().catch(()=>"");throw new Error(`GET proposal ${e} HTTP ${o.status} ${s.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},Fd=async t=>{let e=await fetch(`${Dt}/contacts/${t}`,{method:"GET",headers:De()});if(!e.ok){let a=await e.text().catch(()=>"");throw new Error(`GET contact ${t} HTTP ${e.status} ${a.slice(0,200)}`)}let o=await e.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},xv=async(t,e,o,r)=>{let a;try{a=await fv(t,e)}catch(u){return{ok:!1,body:`fetchProposalDocument: ${u.message}`}}let s;try{s=await Fd(o)}catch(u){return{ok:!1,body:`fetchContactBasics: ${u.message}`}}let i=`${s.firstName} ${s.lastName}`.trim()||s.email||o,d={id:o,firstName:s.firstName,lastName:s.lastName,email:s.email,contactName:i,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},m=[...(Array.isArray(a.recipients)?a.recipients:[]).filter(u=>u?.entityName!=="contacts"),d],h={name:r||a.name,locationId:a.locationId||t,pages:a.pages||[],variables:a.variables||[],fillableFields:a.fillableFields||[],timezone:a.timezone||{},recipients:m,grandTotal:a.grandTotal},_=await fetch(`${Dt}/proposals/document/${e}`,{method:"PUT",headers:{...De(),"Content-Type":"application/json"},body:JSON.stringify(h)});if(!_.ok){let u=await _.text().catch(()=>"");return{ok:!1,status:_.status,body:u}}return{ok:!0}},wv=(t,e)=>{let o=`/v2/location/${t}/payments/proposals-estimates/edit/${e}`;window.location.href=o},Jr="__WS_CRM_PENDING_INSTRUCTIONS",kv=60*1e3,Ev=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],$v=t=>{let e=(t||"").toLowerCase();for(let o of Ev)if(e.includes(o.matches.toLowerCase()))return o;return null},Tv=(t,e,o)=>{try{let r={proposalId:t,title:e,bodyHtml:o,ts:Date.now()};localStorage.setItem(Jr,JSON.stringify(r))}catch{}},Cv=()=>{try{let t=localStorage.getItem(Jr);if(!t)return null;let e=JSON.parse(t);return!e?.proposalId||!e?.title||!e?.bodyHtml||Date.now()-(e.ts||0)>kv?(localStorage.removeItem(Jr),null):e}catch{return null}},Av=()=>{try{localStorage.removeItem(Jr)}catch{}},Lv=(t,e)=>{document.getElementById(Mt)?.remove();let o=document.createElement("div");o.id=Mt,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
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
      font-family: ${b.mono};
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
    ">${mt(t)}</div>
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
        font-family: ${b.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Got it, continue</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},Sv=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,Iv=()=>{let t=window.location.pathname.match(Sv);if(!t)return;let e=t[1],o=Cv();o&&o.proposalId===e&&(Av(),window.setTimeout(()=>{Lv(o.title,o.bodyHtml)},600))},Od="ws-crm-prepare-contract-toast",et=(t,e="info",o=4e3)=>{document.getElementById(Od)?.remove();let r=document.createElement("div");r.id=Od;let a=e==="error"?n.crimson:n.emerald;r.style.cssText=`
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
    font-family: ${b.sans};
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  `,r.textContent=t,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},Bd=(t,e)=>new Promise(o=>{document.getElementById(Mt)?.remove();let r=document.createElement("div");r.id=Mt,r.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${b.sans};
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
    `;let s=l=>{if(!l)return"";try{return new Date(l).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}catch{return l}},i=t.map(l=>`
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${It(l.id)}" style="
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
          font-family: ${b.sans};
        ">
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${mt(l.propertyAddress||l.name)}</div>
          ${l.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${mt(s(l.updatedAt))}</div>`:""}
        </button>
      `).join("");a.innerHTML=`
      <div style="
        font-family: ${b.mono};
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
      ">This ${mt(e.perspective)} has ${t.length} open deals</div>
      <div style="
        font-size: 12px;
        color: ${n.ash};
        margin-bottom: 16px;
        line-height: 1.4;
      ">Which property is this contract for? The ${mt(e.agreementLabel)} will use that opp's data.</div>
      <div>${i}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
        <button id="ws-pc-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${b.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${v.sm};
          cursor: pointer;
        ">Cancel</button>
      </div>
    `,r.appendChild(a),document.body.appendChild(r);let d=l=>{r.remove(),o(l)};r.addEventListener("click",l=>{l.target===r&&d(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>d(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.borderColor=n.emerald,l.style.background=n.graphite}),l.addEventListener("mouseleave",()=>{l.style.borderColor=n.steel,l.style.background=n.slate}),l.addEventListener("click",p=>{p.stopPropagation(),p.preventDefault();let m=l.dataset.oppId||"";m&&d(m)})})}),Mv=({tenantId:t,contactId:e,template:o,staged:r})=>{document.getElementById(Mt)?.remove(),Rd();let a=r.debug||{},s=typeof a.propertyAddress=="string"?a.propertyAddress:"",i=typeof a.sellerName=="string"?a.sellerName:"",d=typeof a.purchasePrice=="number"?a.purchasePrice:0,l=typeof a.emd=="number"?a.emd:0,p=typeof a.cashAtClose=="number"?a.cashAtClose:d-l,m=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),h=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),_=typeof a.additionalTerms=="string"?a.additionalTerms:"",u=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",x=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",f=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],k=document.createElement("div");k.id=Mt,k.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `;let y=document.createElement("div");y.style.cssText=`
    width: min(520px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let g=`
    font-family: ${b.mono};
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
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${b.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,A=`${$} text-align: right;`,T=`
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
  `,E=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `,L=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${b.sans};
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
  `,O=Q=>['<option value="">(unset)</option>'].concat(f.map(at=>`<option value="${It(at)}"${at===Q?" selected":""}>${mt(at)}</option>`)).join("");y.innerHTML=`
    <div style="
      font-family: ${b.mono};
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
    ">${mt(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the ACQ opportunity.</div>

    <div style="margin-bottom: 12px;">
      <div style="${w}">
        <div style="${g}">Property Address</div>
        <div style="${T}">${mt(s||"(set on Property record)")}</div>
      </div>
      <div style="${w}">
        <div style="${g}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${It(i)}" placeholder="Seller name" style="${$}" />
      </div>
      <div style="${w}">
        <div style="${g}">Purchase Price</div>
        <div style="${E}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${d}" style="${A}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Earnest Deposit</div>
        <div style="${E}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${l}" style="${A}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Cash at Close</div>
        <div style="${E}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${p}" style="${A}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${It(m)}" placeholder="e.g. 30" style="${$}" />
      </div>
      <div style="${w}">
        <div style="${g}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${It(h)}" placeholder="e.g. 10" style="${$}" />
      </div>
      <div style="${w}">
        <div style="${g}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${L}">${O(u)}</select>
      </div>
      <div style="${w}">
        <div style="${g}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${L}">${O(x)}</select>
      </div>
      <div style="${w} align-items: flex-start;">
        <div style="${g}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${$} resize: vertical; min-height: 60px; font-family: ${b.sans};">${mt(_)}</textarea>
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
        font-family: ${b.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${b.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,k.appendChild(y),document.body.appendChild(k);let j=y.querySelector("#ws-pc-purchase-price"),U=y.querySelector("#ws-pc-emd"),W=y.querySelector("#ws-pc-cash-at-close"),N=!1;W?.addEventListener("input",()=>{N=!0});let zt=()=>{if(N)return;let Q=Number(j?.value||0),at=Number(U?.value||0);W&&(W.value=String(Math.max(0,Q-at)))};j?.addEventListener("input",zt),U?.addEventListener("input",zt);let Nt=()=>k.remove();k.addEventListener("click",Q=>{Q.target===k&&Nt()}),y.querySelector("#ws-pc-cancel")?.addEventListener("click",Nt);let ct=y.querySelector("#ws-pc-submit"),bt=y.querySelector("#ws-pc-error");ct?.addEventListener("click",async()=>{if(ct){bt&&(bt.textContent=""),ct.disabled=!0,ct.textContent="Opening\u2026";try{let Q=(y.querySelector("#ws-pc-seller-name")?.value||"").trim(),at=Number(j?.value||0),Ge=Number(U?.value||0),Ke=Number(W?.value||0),Ve=(y.querySelector("#ws-pc-days-to-close")?.value??"").trim(),Ye=(y.querySelector("#ws-pc-inspection-days")?.value??"").trim(),Je=(y.querySelector("#ws-pc-additional-terms")?.value??"").trim(),he=(y.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),Qe=(y.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),st={};if(Q!==i&&(st.sellerName=Q),at!==d&&(st.purchasePrice=at),Ge!==l&&(st.emd=Ge),Ke!==p&&(st.cashAtClose=Ke),Ve!==m&&(st.daysToClose=Ve),Ye!==h&&(st.inspectionDays=Ye),Je!==_&&(st.additionalTerms=Je),he!==u&&(st.currentOccupancy=he),Qe!==x&&(st.occupancyAtClose=Qe),Object.keys(st).length>0){c.info("[prepare-contract] PA modal submit with overrides:",st),ct.textContent="Saving\u2026";let pn=R(),mn=await Qr({tenantId:t,contactId:e,template:o,userId:pn,overrides:st});c.info("[prepare-contract] re-stage with overrides ok:",mn),ct.textContent="Opening\u2026"}else c.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let it=s?`${s} - Purchase Agreement`:void 0;await ls(t,e,o,it)}catch(Q){ct.disabled=!1,ct.textContent="Open Contract",bt&&(bt.textContent=Q.message||"Failed to open contract."),c.warn("[prepare-contract] PA confirm submit failed:",Q)}}})},Pv=({tenantId:t,contactId:e,template:o,oppId:r,staged:a,userId:s,defaultClosingDate:i,defaultEMDDueDate:d})=>{document.getElementById(Mt)?.remove(),Rd();let l=a.debug||{},p=typeof l.propertyAddress=="string"?l.propertyAddress:"",m=typeof l.sellerDisplay=="string"?l.sellerDisplay:"",h=typeof l.assignmentPrice=="number"?l.assignmentPrice:0,_=typeof l.buyerEMD=="number"?l.buyerEMD:0,u=typeof l.assignmentFee=="number"?l.assignmentFee:0,x=typeof l.acqPurchasePrice=="number"?l.acqPurchasePrice:0,f=typeof l.closingOffice=="string"?l.closingOffice:"",k=typeof l.buyerCompanyName=="string"?l.buyerCompanyName:"",y=i,g=d,$="",A=document.createElement("div");A.id=Mt,A.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${b.sans};
  `;let T=document.createElement("div");T.style.cssText=`
    width: min(520px, 92vw);
    max-height: 88vh;
    overflow-y: auto;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let w=`
    font-family: ${b.mono};
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
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${b.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,L=`${E} text-align: right;`,O=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,j=`
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
  `;T.innerHTML=`
    <div style="
      font-family: ${b.mono};
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
    ">${mt(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the source opp (MT/ACQ/Dispo/TC). Closing date, EMD due date, and lender source live only on the contract.</div>

    <div style="margin-bottom: 12px;">
      <div style="${j}">
        <div style="${w}">Property Address</div>
        <div style="${O}">${mt(p||"(set on Property record)")}</div>
      </div>
      <div style="${j}">
        <div style="${w}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${It(m)}" placeholder="Seller name" style="${E}" />
      </div>
      <div style="${j}">
        <div style="${w}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${b.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${It(k)}" placeholder="Buyer's entity / LLC name" style="${E}" />
      </div>
      <div style="${j}">
        <div style="${w}">Assignment Price</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${h}" style="${L}" />
        </div>
      </div>
      <div style="${j}">
        <div style="${w}">Buyer Earnest Money</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${_}" style="${L}" />
        </div>
      </div>
      <div style="${j}">
        <div style="${w}">Assignment Fee</div>
        <div style="${U}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${u}" style="${L}" />
        </div>
      </div>
      <div style="${j}">
        <div style="${w}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${It(f)}" placeholder="Title company" style="${E}" />
      </div>
      <div style="${j}">
        <div style="${w}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${It(y)}" style="${E}" />
      </div>
      <div style="${j}">
        <div style="${w}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${It(g)}" style="${E}" />
      </div>
      <div style="${j}">
        <div style="${w}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${b.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${E}" />
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
        font-family: ${b.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${b.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,A.appendChild(T),document.body.appendChild(A);let W=T.querySelector("#ws-pc-assignment-price"),N=T.querySelector("#ws-pc-assignment-fee"),zt=!1;N?.addEventListener("input",()=>{zt=!0});let Nt=()=>{if(zt)return;let at=Number(W?.value||0);N&&(N.value=String(Math.max(0,at-x)))};W?.addEventListener("input",Nt);let ct=()=>A.remove();A.addEventListener("click",at=>{at.target===A&&ct()}),T.querySelector("#ws-pc-cancel")?.addEventListener("click",ct);let bt=T.querySelector("#ws-pc-submit"),Q=T.querySelector("#ws-pc-error");bt?.addEventListener("click",async()=>{if(!bt)return;Q&&(Q.textContent="");let at=(T.querySelector("#ws-pc-seller-name")?.value||"").trim(),Ge=Number(W?.value||0),Ke=Number(T.querySelector("#ws-pc-buyer-emd")?.value||0),Ve=Number(N?.value||0),Ye=(T.querySelector("#ws-pc-closing-office")?.value||"").trim(),Je=(T.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),he=(T.querySelector("#ws-pc-closing-date")?.value||"").trim(),Qe=(T.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),st=(T.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!he){Q&&(Q.textContent="Closing Date is required.");return}bt.disabled=!0,bt.textContent="Opening\u2026";try{let it={};at!==m&&(it.sellerName=at),Ge!==h&&(it.assignmentPrice=Ge),Ke!==_&&(it.buyerEMD=Ke),Ve!==u&&(it.assignmentFee=Ve),Ye!==f&&(it.closingOffice=Ye),Je!==k&&(it.buyerCompanyName=Je);let pn=he!==y||Qe!==g||st!==$,mn=Object.keys(it).length>0||pn,bn=a;mn?(c.info("[prepare-contract] AA modal submit, re-staging with overrides:",it),bt.textContent="Saving\u2026",bn=await Qr({tenantId:t,contactId:e,template:o,oppId:r,closingDate:he,buyerEarnestDueDate:Qe,lenderSource:st,userId:s,overrides:Object.keys(it).length>0?it:void 0}),c.info("[prepare-contract] AA re-stage ok:",bn),bt.textContent="Opening\u2026"):c.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let Es=bn?.debug?.propertyAddress||p,Uc=Es?`${Es} - Assignment Agreement`:void 0;await ls(t,e,o,Uc),ct()}catch(it){bt.disabled=!1,bt.textContent="Open Contract",Q&&(Q.textContent=it.message||"Failed to prepare contract."),c.warn("[prepare-contract] AA submit failed:",it)}})},Qr=async t=>{c.info(`[prepare-contract] staging \u2014 template "${t.template.name}" (${t.template.type})`);let e=await yv({tenantId:t.tenantId,contactId:t.contactId,templateId:t.template.id,templateType:t.template.type,oppId:t.oppId,closingDate:t.closingDate,buyerEarnestDueDate:t.buyerEarnestDueDate,lenderSource:t.lenderSource,userId:t.userId,overrides:t.overrides});if(c.info(`[prepare-contract] stage response: ok=${e.ok}`,e),!e.ok)throw new Error(e.error||"Contract.Stage returned not ok");return e},ls=async(t,e,o,r)=>{let a=null;try{a=(await Fd(e)).email||""}catch(l){c.warn("[prepare-contract] email pre-check fetch failed, proceeding:",l),a=null}if(a!==null&&!a.trim()){et("This contact has no email. A contract is sent to the recipient for signing, so GHL needs an email to populate it. Add an email to the contact, then prepare the contract again.","error",9e3),c.warn(`[prepare-contract] aborting \u2014 contact ${e} has no email; not creating an empty proposal`);return}c.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${e}`);let s=await gv(t,o.id,e);c.info(`[prepare-contract] proposal created: ${s}`),c.info(`[prepare-contract] attaching contact ${e} as primary signer${r?`, renaming to "${r}"`:""}`);let i=await xv(t,s,e,r);i.ok?c.info(`[prepare-contract] contact attached to proposal ${s}`):(c.warn(`[prepare-contract] attach failed (status=${i.status??"n/a"}): ${i.body?.slice(0,300)??"no body"}`),et(`Proposal created but couldn't auto-attach contact (HTTP ${i.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",i.body));let d=$v(o.name);d&&(c.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),Tv(s,d.title,d.bodyHtml)),wv(t,s)},Ov=async t=>{let e=pv(t);if(!e){et("Could not resolve contact context.","error");return}document.getElementById(Ld)?.remove();let o=document.createElement("div");o.id=Ld,o.style.cssText=`
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
    font-family: ${b.sans};
  `,o.innerHTML=`
    <div style="
      font-family: ${b.mono};
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      padding: 8px 14px 6px;
    ">Loading templates\u2026</div>`,t.appendChild(o);let r=s=>{!o.contains(s.target)&&s.target!==t&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await uv(e.tenantId)}catch(s){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${mt(s.message)}
      </div>`;return}if(a.length===0){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.ash}; font-size: 12px;">
        No proposal templates found on this tenant.
      </div>`;return}a.sort((s,i)=>{let d={PA:0,AA:1,passthrough:2};return d[s.type]!==d[i.type]?d[s.type]-d[i.type]:s.name.localeCompare(i.name)}),o.innerHTML="";for(let s of a){let i=document.createElement("button");i.type="button",i.style.cssText=`
      display: block;
      width: 100%;
      background: transparent;
      border: none;
      color: ${n.bone};
      font-family: ${b.sans};
      font-size: 13px;
      text-align: left;
      padding: 10px 14px;
      cursor: pointer;
      transition: background 0.1s ease;
    `;let d=s.type==="PA"?n.emerald:s.type==="AA"?n.blue:n.coolGray;i.innerHTML=`
      <div style="display: flex; align-items: baseline; gap: 8px;">
        <span style="
          font-family: ${b.mono};
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${d};
          flex-shrink: 0;
          min-width: 30px;
        ">${s.type==="passthrough"?"DOC":s.type}</span>
        <span style="flex: 1;">${mt(s.name)}</span>
      </div>`,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async l=>{l.stopPropagation(),l.preventDefault(),c.info(`[prepare-contract] template picked: ${s.name} (type=${s.type})`),o.remove(),document.removeEventListener("click",r,!0);let p=R();try{if(s.type==="AA"){let m;if(e.oppId)m=e.oppId,c.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${m} directly`);else{let y;try{y=await vv(e.tenantId,e.contactId)}catch(g){et(`Failed to load buyer's MT opps: ${g.message}`,"error",6e3),c.warn("[prepare-contract] AA fetch opps failed:",g);return}if(y.length===0){et("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if(y.length===1)m=y[0].id,c.info(`[prepare-contract] auto-selected MT opp ${m} (only one)`);else{c.info(`[prepare-contract] showing MT opp picker (${y.length} opps)`);let g=await Bd(y,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!g){c.info("[prepare-contract] MT opp picker cancelled");return}m=g,c.info(`[prepare-contract] picked MT opp ${m}`)}}let h=y=>{let g=y.getFullYear(),$=String(y.getMonth()+1).padStart(2,"0"),A=String(y.getDate()).padStart(2,"0");return`${g}-${$}-${A}`},_=y=>{let g=new Date;return g.setDate(g.getDate()+y),h(g)},u=_(45),x=_(7);et("Reading contract data\u2026","info",2500);let f;try{f=await Qr({tenantId:e.tenantId,contactId:e.contactId,template:s,oppId:m,closingDate:u,buyerEarnestDueDate:x,userId:p})}catch(y){et(`Failed to prepare contract: ${y.message}`,"error",6e3),c.warn("[prepare-contract] AA stage failed:",y);return}let k=e.contactId||f.contact_id||"";if(!k){et("Could not resolve buyer contact for this opp.","error",6e3);return}Pv({tenantId:e.tenantId,contactId:k,template:s,oppId:m,staged:f,userId:p,defaultClosingDate:u,defaultEMDDueDate:x})}else if(s.type==="PA"){if(!e.contactId){et("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let m;try{m=await _v(e.tenantId,e.contactId)}catch(u){et(`Failed to load ACQ opps: ${u.message}`,"error",6e3),c.warn("[prepare-contract] PA fetch opps failed:",u);return}if(m.length===0){et("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let h;if(m.length===1)h=m[0].id,c.info(`[prepare-contract] auto-selected ACQ opp ${h} (only one)`);else{c.info(`[prepare-contract] showing ACQ opp picker (${m.length} opps)`);let u=await Bd(m,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!u){c.info("[prepare-contract] ACQ opp picker cancelled");return}h=u,c.info(`[prepare-contract] picked ACQ opp ${h}`)}et("Reading contract data\u2026","info",2500);let _;try{_=await Qr({tenantId:e.tenantId,contactId:e.contactId,template:s,oppId:h,userId:p})}catch(u){et(`Failed to prepare contract: ${u.message}`,"error",6e3),c.warn("[prepare-contract] PA stage failed:",u);return}Mv({tenantId:e.tenantId,contactId:e.contactId,template:s,staged:_})}else{if(!e.contactId){et("This template needs to be started from a contact page.","error",6e3);return}et(`Opening ${s.name}\u2026`,"info",2500);try{await ls(e.tenantId,e.contactId,s)}catch(m){et(`Failed to open contract: ${m.message}`,"error",6e3),c.warn("[prepare-contract] passthrough failed:",m)}}}catch(m){c.warn("[prepare-contract] picker click handler failed:",m),et(`Unexpected error: ${m.message}`,"error",6e3)}}),o.appendChild(i)}},zd=()=>{let t=document.createElement("button");return t.id=ns,t.type="button",t.style.cssText=`${B} position: relative; order: 5;`,t.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,t.addEventListener("mouseenter",()=>{t.style.borderColor=n.emerald}),t.addEventListener("mouseleave",()=>{t.style.borderColor=n.steel}),t.addEventListener("click",e=>{e.stopPropagation(),Ov(t)}),t},Bv="ws-crm-contact-actions-bar",Rv=async()=>{let t=Hd();if(!t){document.getElementById(ns)?.remove();return}let e=null;try{e=await M(`#${Bv}`,{timeoutMs:Ze+2e3})}catch{c.debug("[prepare-contract] actions bar not found within timeout");return}if(!e)return;let o=document.getElementById(ns);if(o){if(o.dataset.contactId===t.contactId)return;o.remove()}let r=zd();r.dataset.contactId=t.contactId,r.dataset.tenantId=t.tenantId,e.appendChild(r),c.debug(`[prepare-contract] mounted for contact ${t.contactId}`)},me="ws-crm-prepare-contract-button-opp",Ho=`${me}-wrap`,Hv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Dv=/\/v2\/location\/([A-Za-z0-9]+)/,Fv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],ss=()=>{let t=window.location.pathname,e=t.match(Hv);if(!e)return null;let o=t.match(Dv);return o?{oppId:e[1],tenantId:o[1]}:null},zv=async()=>{for(let t of Fv)try{let e=await M(t,{timeoutMs:2e3});if(e)return e}catch{}return null},Yr=!1,Do=null,is=null,os=null,rs,Fo=()=>{Do?.disconnect(),Do=null,is=null},Nv=t=>{if(Do&&is===t)return;Fo();let e=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");e&&(is=t,Do=new MutationObserver(()=>{let o=ss();if(!o||o.oppId!==t){Fo();return}let r=z();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(me)?.remove(),document.getElementById(Ho)?.remove(),Fo();return}document.getElementById(me)||Nd()}),Do.observe(e,{childList:!0,subtree:!0}))},qv=()=>{os||(os=new MutationObserver(()=>{rs===void 0&&(rs=window.setTimeout(()=>{rs=void 0;let t=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),e=!!document.getElementById(me);t&&!e&&!Yr&&Nd()},300))}),os.observe(document.body,{childList:!0,subtree:!0}))},Nd=async()=>{if(!Yr){Yr=!0;try{let t=ss();if(!t){document.getElementById(me)?.remove(),document.getElementById(Ho)?.remove(),Fo();return}let e=document.getElementById(me);if(e&&e.dataset.oppId===t.oppId){let d=z();d!==null&&d!=="Marketing Tracker"&&(e.remove(),document.getElementById(Ho)?.remove(),Fo());return}e&&(e.remove(),document.getElementById(Ho)?.remove());let o=await zv();if(!o){c.debug("[prepare-contract] opp mount target not found");return}let r=await X();if(r!=="Marketing Tracker"){c.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=ss();if(!a||a.oppId!==t.oppId)return;let s=zd();s.id=me,s.dataset.oppId=t.oppId,s.dataset.tenantId=t.tenantId;let i=document.createElement("span");i.id=Ho,i.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),o.appendChild(i),c.debug(`[prepare-contract] mounted on MT opp ${t.oppId} (contactId deferred to click)`),Nv(t.oppId)}finally{Yr=!1}}},qd=()=>{Iv(),Rv()};cv();function mt(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function It(t){return mt(t)}var Uv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",be="ws-crm-compute-offer-button",ps="ws-crm-compute-offer-popover",Jd="ws-crm-offer-modal",Ud="ws-crm-contact-actions-bar",jv=[".central-panel","[class*='central-panel']"],te=t=>typeof t=="number"?`$${Math.round(t).toLocaleString("en-US")}`:"-",ds=t=>{if(typeof t!="number"||Math.round(t)===0)return"$0";let e=`$${Math.abs(Math.round(t)).toLocaleString("en-US")}`;return t<0?`\u2212${e}`:`+${e}`},Wv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],jd=t=>{if(!t)return"";let e=String(t).split("-");return e.length!==3?String(t):`${Wv[Number(e[1])-1]||""} ${Number(e[2])}`.trim()},q=(t,e,o)=>{let r=document.createElement(t);return e&&(r.style.cssText=e),o!=null&&(r.textContent=o),r},Wd=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${b.sans};font-size:12px;outline:none;`,cs=async t=>{let e={tenant_id:t.tenantId,mode:t.mode};t.propertyRecordId?e.property_record_id=t.propertyRecordId:t.contactId&&(e.contact_id=t.contactId),t.mode!=="get"&&(t.propertyCondition!=null&&(e.property_condition=t.propertyCondition),t.repairOverride!==void 0&&(e.repair_override=t.repairOverride));let o=await fetch(Uv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},Fe=()=>{document.getElementById(ps)?.remove(),document.removeEventListener("mousedown",Qd,!0)};function Qd(t){let e=document.getElementById(ps),o=document.getElementById(be),r=t.target;e&&!e.contains(r)&&o&&!o.contains(r)&&Fe()}var Zd=(t,e)=>{Fe();let o=t.getBoundingClientRect(),r=document.createElement("div");r.id=ps;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${v.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${b.sans};color:${n.bone};font-size:13px;line-height:1.35;`,e(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",Qd,!0),0)},Zr=(t,e)=>{Zd(t,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(q("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(q("div",`color:${n.bone};font-size:12px;`,e))})},Gv=(t,e,o)=>{Zd(t,r=>{r.appendChild(q("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),e.forEach(a=>{let s=q("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${b.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);s.type="button",s.addEventListener("mouseenter",()=>s.style.borderColor=n.blue),s.addEventListener("mouseleave",()=>s.style.borderColor=n.steel),s.addEventListener("click",()=>{Fe(),o(a.property_record_id)}),r.appendChild(s)})})},tn=()=>{document.getElementById(Jd)?.remove(),document.removeEventListener("keydown",Xd,!0)};function Xd(t){t.key==="Escape"&&tn()}var Gd=(t,e,o)=>{tn(),Fe();let r=o,a=!1,s="",i=document.createElement("div");i.id=Jd,i.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${b.sans};`,i.addEventListener("mousedown",m=>{m.target===i&&tn()});let d=q("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);i.appendChild(d);let l=(m,h,_)=>{a||(a=!0,s="",p(),cs({tenantId:t,propertyRecordId:e,mode:m,propertyCondition:h,repairOverride:_}).then(u=>{u&&u.ok?r={...u,current_offer:u.current_offer??r.current_offer,current_offer_date:u.current_offer_date??r.current_offer_date}:s=u&&u.error||"Request failed."}).catch(u=>{c.error("[compute-offer] worksheet request failed:",u),s="Request failed. Try again."}).finally(()=>{a=!1,p()}))};function p(){let m=r,h=!!m.has_comps;d.innerHTML="";let _=q("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),u=q("div","");u.appendChild(q("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),u.appendChild(q("div",`font-size:12px;color:${n.ash};margin-top:2px;`,m.address||"-"));let x=q("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");x.type="button",x.addEventListener("click",tn),_.append(u,x),d.appendChild(_);let f=q("div","padding:14px 18px 18px;");d.appendChild(f);let k=q("select",Wd());(m.rehab_levels||[]).forEach(U=>{let W=document.createElement("option");W.value=U.key,W.textContent=U.label,U.key===(m.tier||m.property_condition)&&(W.selected=!0),k.appendChild(W)}),k.disabled=a,k.addEventListener("change",()=>l("recompute",k.value,y.value.trim()));let y=q("input",Wd());y.type="number",y.placeholder="uses the level",y.value=m.repair_override!=null?String(m.repair_override):"",y.disabled=a,y.addEventListener("keydown",U=>{U.key==="Enter"&&y.blur()}),y.addEventListener("change",()=>l("recompute",k.value,y.value.trim()));let g=q("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");g.appendChild(q("div",`font-size:12px;color:${h?n.bone:n.amber};`,h?`Investor comps: $${m.comp_price_per_sqft}/sqft \xB7 ${m.comp_count} comps${m.comp_pull_at?` \xB7 pulled ${jd(m.comp_pull_at)}`:""}`:"No comps pulled yet."));let $=q("button",`flex-shrink:0;padding:6px 12px;border-radius:${v.sm};border:1px solid ${n.blue};background:${h?"transparent":n.blue};color:${h?n.blue:"#fff"};font-family:${b.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":h?"Re-pull Comps":"Pull Comps");$.type="button",$.disabled=a,$.addEventListener("click",()=>l("pull",k.value,y.value.trim())),g.append($),f.appendChild(g),m.low_confidence&&h&&f.appendChild(q("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${m.comp_count??0} comps in window.`));let A=m.current_offer!=null;f.appendChild(q("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${v.sm};background:${n.slate};border:1px solid ${n.steel};color:${A?n.bone:n.ash};`,A?`Last offer made: ${te(m.current_offer)}${m.current_offer_date?` \xB7 ${jd(m.current_offer_date)}`:""}`:"No offer made yet."));let T=q("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),w=q("div","");w.appendChild(q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),w.appendChild(k);let E=q("div","");E.appendChild(q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),E.appendChild(y),T.append(w,E),f.appendChild(T);let L=q("div",`border-top:1px solid ${n.steel};padding-top:12px;`),O=(U,W,N)=>{let zt=q("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${N?.strong?"font-weight:700;":""}`),Nt=q("div","");Nt.appendChild(q("div",`font-size:${N?.strong?"13":"12"}px;color:${n.bone};`,U)),N?.sub&&Nt.appendChild(q("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,N.sub));let ct=q("div",`font-size:${N?.strong?"15":"12"}px;color:${N?.color||n.bone};white-space:nowrap;`,W);zt.append(Nt,ct),L.appendChild(zt)};if(h&&m.imv!=null){O("Investor Market Value (IMV)",te(m.imv)),m.arv!=null&&O("After Repair Value (ARV)",te(m.arv),{color:n.ash});let U=m.repair_adjustment??0,W=-U,N=m.repair_override?"Repair override":m.property_condition_label||"Repairs";U===0?O(`Repairs (${N})`,"Included",{color:n.ash,sub:`${te(m.repair_total)} in repairs included at IMV`}):O(`Repairs (${N})`,ds(W),{color:W<0?n.crimson:n.emerald,sub:`${te(m.repair_total)} total, ${te(m.baseline_repairs)} included at IMV`}),O("Min. Profit Target",ds(-(m.profit_target??0)),{color:n.ash}),O("Maximum Cash Offer (MAO)",te(m.mao),{strong:!0,color:n.blue}),O("Target Profit",ds(-(m.ico_delta??0)),{color:n.ash}),O("Initial Cash Offer (ICO)",te(m.ico),{strong:!0,color:n.blue})}else L.appendChild(q("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));f.appendChild(L);let j=q("div",`margin-top:12px;font-size:11px;min-height:14px;color:${s?n.crimson:n.ash};`);j.textContent=a?"Saving\u2026":s||(h?"Saved to the Property.":""),f.appendChild(j)}p(),document.body.appendChild(i),document.addEventListener("keydown",Xd,!0)},Kd=(t,e)=>{let o=document.createElement("button");o.type="button",o.id=be,o.dataset.contactId=t,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${v.sm};font-family:${b.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=i=>{o.disabled=i,o.style.cursor=i?"default":"pointer";let d=r();d&&(d.textContent=i?"Opening\u2026":"Offer Worksheet")},s=i=>{if(i.needs_property_selection&&i.properties&&i.properties.length){Gv(o,i.properties,d=>{a(!0),cs({tenantId:e,propertyRecordId:d,mode:"get"}).then(l=>{l.ok&&l.property_record_id?Gd(e,l.property_record_id,l):Zr(o,l.error||"Couldn't load that property.")}).catch(l=>{c.error("[compute-offer] get failed:",l),Zr(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}i.ok&&i.property_record_id?Gd(e,i.property_record_id,i):Zr(o,i.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{s(await cs({tenantId:e,contactId:t,mode:"get"}))}catch(i){c.error("[compute-offer] webhook failed:",i),Zr(o,"Request failed. Try again.")}finally{a(!1)}}}),o},Kv=async()=>{for(let t of jv)try{let e=await M(t,{timeoutMs:3e3});if(e)return e}catch{}return null},Vd=async(t,e)=>{let o=e.querySelector(`#${Ud}`);if(!o)try{o=await M(`#${Ud}`,{timeoutMs:3e3,root:e})}catch{o=null}return o?(t.style.order="3",o.appendChild(t),!0):!1},Yd=()=>{let t=document.querySelectorAll(`#${be}`);for(let e=1;e<t.length;e++)t[e].remove()},Vv=async()=>{let t=H();if(!t||!t.locationId||t.source!=="url"){document.getElementById(be)?.remove(),Fe();return}let e=t.locationId,o=document.getElementById(be);if(o&&o.dataset.contactId===t.contactId)return;o&&o.remove(),Fe();let r="seller";try{r=Tt(await $t(t.contactId,e))}catch(d){c.warn("[compute-offer] contact-type fetch threw - defaulting seller:",d)}if(r!=="seller"){c.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(be)?.remove();return}let a=await Kv();if(!a){c.warn("[compute-offer] no central panel found");return}let s=H();if(!s||s.contactId!==t.contactId)return;let i=Kd(t.contactId,e);if(!await Vd(i,a)){c.warn("[compute-offer] actions bar not found after waiting");return}Yd(),c.debug(`[compute-offer] mounted for ${t.contactId}`),Xr?.disconnect(),Xr=new MutationObserver(()=>{if(H()?.contactId!==t.contactId){Xr?.disconnect();return}if(!document.getElementById(be)){let d=Kd(t.contactId,e);Vd(d,a).then(()=>Yd())}}),Xr.observe(a,{childList:!0})},Xr=null,No=null,tc=()=>{let t=H()?.contactId??null;if(No&&No.id===t)return;let e=Vv().finally(()=>{No?.promise===e&&(No=null)});No={id:t,promise:e}};var sn="reos-theme-stylesheet",fc="reos-theme-fonts",Ue=!1,Yv=()=>{let t=document.getElementById(fc);t&&t.remove()},Jv=`

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

`,Qv=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],Zv=t=>{if(!t||t[0]!=="#")return t;let e=t.slice(1);if(e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6&&e.length!==8)return t;let o=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return t;if(e.length===8){let s=parseInt(e.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${s})`}return`rgb(${o}, ${r}, ${a})`},Xv=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),ty=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],en=new WeakSet,ec=t=>{try{if(!document.body)return;(t??document.body.querySelectorAll("*")).forEach(o=>{try{if(o.classList&&(o.classList.contains("hr-drawer-container")||o.classList.contains("hr-detached-container"))){(o.getAttribute("style")||"").includes("background")&&(o.style.removeProperty("background-color"),o.style.removeProperty("background-image"));return}if(en.has(o)&&o.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest(".hl_header, header.hl_header, header.app-header")||o.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let r=o.tagName;if(r==="INPUT"||r==="TEXTAREA"||r==="SELECT"||r==="SCRIPT"||r==="STYLE"||r==="SVG"||r==="PATH"||r==="IMG")return;let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!i)return;let d=+i[1],l=+i[2],p=+i[3];if((i[4]!==void 0?+i[4]:1)<.5||d<230||l<230||p<230)return;let h=o.style.getPropertyValue("background-color");if(h==="rgb(18, 22, 29)"){en.add(o);return}if(o.closest(".hr-button")&&!(o.classList&&o.classList.contains("hr-button"))){h!=="transparent"&&(o.style.setProperty("background-color","transparent","important"),o.style.setProperty("background-image","none","important")),en.add(o);return}o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"),en.add(o)}catch{}})}catch{}},ms=new WeakSet,ze=()=>{document.querySelectorAll(ty.join(", ")).forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.querySelectorAll("*");[e,...Array.from(o)].forEach(r=>{if(r.classList&&(r.classList.contains("hr-drawer-container")||r.classList.contains("hr-detached-container"))){(r.getAttribute("style")||"").includes("background")&&(r.style.removeProperty("background-color"),r.style.removeProperty("background-image"));return}if(ms.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH"||r.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=+i[1],l=+i[2],p=+i[3];if(!(d<230||l<230||p<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),ms.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),ms.add(r)}})})},oc=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.classList&&e.classList.contains("hr-button"))return;let o=e.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(e.style.setProperty("background-color","transparent","important"),e.style.setProperty("background-image","none","important"))})},rc=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(t=>{t.style.setProperty("background-color","#252C36","important"),t.style.setProperty("background-image","none","important"),t.style.setProperty("color","#EDEEF0","important")})},nc=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"),e.style.removeProperty("border-style"),e.style.removeProperty("border-width"),e.style.removeProperty("border-radius"))})},on=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(e=>{let o=e.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let i=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(i){let d=+i[1],l=+i[2],p=+i[3];(i[4]!==void 0?+i[4]:1)>=.5&&d>=180&&l>=180&&p>=180&&d+l+p>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},ac=()=>{let t="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(t)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},Ne=()=>{if(!Ue)for(let t of Qv){let e;try{e=document.querySelectorAll(t.selector)}catch{continue}e.forEach(o=>{for(let[r,a]of Object.entries(t.styles)){let s=o.style.getPropertyPriority(r),i=o.style.getPropertyValue(r),d=Xv.has(r)?Zv(a):a;s==="important"&&i===d||o.style.setProperty(r,a,"important")}})}},ln="#1A1F28",ey=26,oy=31,ry=40,sc=new Set,ic=new Set,rn=t=>{(t??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let a=o.getBoundingClientRect();if(a.width===0||a.height===0||a.width>800)return;o.style.setProperty("display","none","important");let s=o.className?.toString()||"<no class>";!ic.has(s)&&s!=="<no class>"&&(ic.add(s),c.debug(`Hid empty "--" leaf: "${s}"`))})},ny=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],ay=["trash","Trash","TRASH","delete","Delete","DELETE"],sy=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']")||e.getAttribute("data-reos-trash")==="true")return;let o=e.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(ay.some(s=>a.includes(s))&&(r=!0),r||o.querySelectorAll("path").forEach(i=>{if(r)return;let d=i.getAttribute("d")||"";ny.some(l=>d.includes(l))&&(r=!0)}),!r){let s=(e.id||"").toLowerCase(),i=(e.getAttribute("aria-label")||"").toLowerCase(),d=(e.getAttribute("title")||"").toLowerCase();(s.includes("delete")||s.includes("remove")||s.includes("trash")||i.includes("delete")||i.includes("remove")||i.includes("trash")||d.includes("delete")||d.includes("remove")||d.includes("trash"))&&(r=!0)}r&&e.setAttribute("data-reos-trash","true")})},iy=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),ly=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=(e.textContent||"").trim();o.length===0||o.length>40||iy.has(o)&&e.style.display!=="none"&&(e.style.setProperty("display","none","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("pointer-events","none","important"))})},lc=new Set,dc=new WeakSet,dy=t=>{(t??document.body.querySelectorAll("*")).forEach(o=>{if(dc.has(o)&&o.style.getPropertyValue("color")==="rgb(237, 238, 240)"||o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;let r=(o.className?.toString()||"").toLowerCase();if(r.includes("ai-button")||r.includes("ask-ai")||r.includes("bg-clip-text")||r.includes("text-transparent")||o.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let a=o.tagName.toLowerCase();if(a==="svg"||a==="path"||a==="circle"||a==="rect"||a==="polygon"||a==="polyline"||a==="line"||a==="g")return;let s=!1;for(let _ of Array.from(o.childNodes))if(_.nodeType===Node.TEXT_NODE&&(_.textContent||"").trim()){s=!0;break}if(!s)return;let i=Array.from(o.children);if(i.length>0&&i.every(_=>{let u=_.tagName.toLowerCase();return u==="svg"||u==="img"})&&!s)return;let p=window.getComputedStyle(o).color;if(!(p==="rgb(255, 255, 255)"||p==="rgba(255, 255, 255, 1)"||p==="#ffffff"||p==="white"))return;o.style.setProperty("color","#EDEEF0","important"),o.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),dc.add(o);let h=o.className?.toString()||"<no class>";!lc.has(h)&&h!=="<no class>"&&(lc.add(h),c.debug(`Remapped pure-white text -> bone: "${h}"`))})},cc=new Set,cy=()=>{let t=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),e="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(e)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),t.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(s=>{if(s.closest("[id^='ws-crm-']"))return;let i=(s.className?.toString()||"").toLowerCase();if(i.includes("avatar"))return;let d=window.getComputedStyle(s),l=d.backgroundColor,p=d.backgroundImage||"",m=!1;if(p!=="none"&&p.includes("gradient"))m=!0;else if(l&&l!=="rgba(0, 0, 0, 0)"&&l!=="transparent"){let A=l.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(A&&parseFloat(A[1])<.6)return;let T=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(T){let w=parseInt(T[1],10),E=parseInt(T[2],10),L=parseInt(T[3],10);(w>=60||E>=60||L>=60)&&(w>230&&E>230&&L>230||(w>=80||E>=80||L>=80)&&(m=!0))}}if(!m)return;let _=(s.textContent||"").trim(),u=i,x=Array.from(s.querySelectorAll("*")).map(A=>(A.className?.toString()||"").toLowerCase()).join(" "),f=_.toLowerCase()==="ask ai"||u.includes("ai-button")||u.includes("ask-ai")||u.includes("askai"),k=u.includes("bg-clip-text")||u.includes("text-transparent")||x.includes("bg-clip-text")||x.includes("text-transparent"),y=Array.from(s.querySelectorAll("*")).some(A=>{let T=window.getComputedStyle(A),w=T.getPropertyValue("-webkit-background-clip")||"",E=T.getPropertyValue("background-clip")||"";return w.includes("text")||E.includes("text")});if(f||k||y){let A=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],T=w=>{A.forEach(E=>w.style.removeProperty(E))};T(s),s.querySelectorAll("*").forEach(T);return}let g="#12161D";s.style.setProperty("color",g,"important"),s.querySelectorAll("*").forEach(A=>{let T=A.tagName.toLowerCase();T==="svg"||T==="path"||T==="circle"||T==="rect"||T==="polygon"||T==="polyline"||T==="line"||T==="g"?(A.style.setProperty("fill",g,"important"),A.style.setProperty("stroke",g,"important"),A.style.setProperty("color",g,"important")):(A.style.setProperty("color",g,"important"),A.style.setProperty("-webkit-text-fill-color",g,"important"))});let $=s.className?.toString()||"<no class>";!cc.has($)&&$!=="<no class>"&&(cc.add($),c.debug(`Darkened SVG icons on colored button: "${$}"`))})})},pc=new Set,py=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;if((e.className?.toString()||"").toLowerCase().includes("default-avatar")){e.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(l=>{(l.getAttribute("style")||"").includes("translateY(11px)")&&l.style.removeProperty("transform")});return}let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(e.parentElement||e).querySelectorAll("svg, img").forEach(l=>{let p=l;if(p.closest("[id^='ws-crm-']"))return;let m=l.getBoundingClientRect();if(m.width===0||m.width>28||m.height>28)return;let h=m.left<r.right&&m.right>r.left,_=m.top<r.bottom&&m.bottom>r.top;if(!(h&&_)||m.top+m.height/2<a)return;let x=m.width*m.height/(r.width*r.height);if(x>.55)return;let f=p,k=p.parentElement,y=0;for(;k&&k!==e&&y<3;){let $=k.getBoundingClientRect();if($.width>0&&$.width<=30&&$.height<=30)f=k;else break;k=k.parentElement,y++}f.style.setProperty("transform","translateY(11px)","important");let g=(f.className?.toString()||"")+" "+f.tagName;pc.has(g)||(pc.add(g),c.debug(`Dropped activity badge 11px (${m.width.toFixed(0)}x${m.height.toFixed(0)} icon, ratio ${x.toFixed(2)}): "${g}"`))})})},my="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",by=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(e.style.setProperty("color","#0FB57E","important"),e.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),e.style.setProperty("opacity","1","important"),e.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),e.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",my,"important")}),e.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((e.style.color==="rgb(18, 22, 29)"||e.style.color==="#12161D"||e.style.color==="#0FB57E"||e.style.color==="rgb(15, 181, 126)")&&(e.style.removeProperty("color"),e.style.removeProperty("-webkit-text-fill-color")),e.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),e.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},mc=new Set,hy=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;e.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=parseInt(i[1],10),l=parseInt(i[2],10),p=parseInt(i[3],10);if(!(d>200&&l>200&&p>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let m=r.className?.toString()||"<no class>";!mc.has(m)&&m!=="<no class>"&&(mc.add(m),c.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${d},${l},${p})): "${m}"`))})})},bc=new Set,uy=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=o.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let d=o.className?.toString()||"<no class>";!bc.has(d)&&d!=="<no class>"&&(bc.add(d),c.debug(`Painted Ask AI wrapper graphite: "${d}"`))}}o=o.parentElement,r++}})},hc=new Set,_y=()=>{let t=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),e=document.querySelectorAll("div, section, aside"),o=[];e.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let d=a.getBoundingClientRect();d.width<240||d.height<120||d.width>1500||d.height>900||o.push(a)}),[...t,...o].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let d=(i.className?.toString()||"").toLowerCase();if(d.includes("avatar")||d.includes("notification-dot")||d.includes("indicator"))return;if(d.includes("sidebar-option-button")||i.closest(".sidebar-option-button")||i.closest("nav[class*='w-13']")){let k=i.getAttribute("style")||"";(k.includes("background-color")||k.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(d.includes("tabulator")||d.includes("tabulator-page")||i.closest("[class*='tabulator']")){(i.getAttribute("style")||"").includes("background-color")&&i.style.removeProperty("background-color");return}if(d.includes("hr-card")||i.closest(".hr-card")||i.id&&i.id.startsWith("opportunity-")){let k=i.getAttribute("style")||"";(k.includes("background-color")||k.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(d.includes("ai-button")||d.includes("ask-ai")||d.includes("bg-clip-text")||d.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let l=window.getComputedStyle(i).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let p=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!p)return;let m=parseInt(p[1],10),h=parseInt(p[2],10),_=parseInt(p[3],10);if(!(m>200&&h>200&&_>200))return;let x=i.getBoundingClientRect();if(x.width<24||x.height<16||x.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let f=i.className?.toString()||"<no class>";!hc.has(f)&&f!=="<no class>"&&(hc.add(f),c.debug(`Coerced light bg (${x.width.toFixed(0)}x${x.height.toFixed(0)}, rgb(${m},${h},${_})): "${f}"`))})})},uc=new Set,vy=t=>{let e="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";(t??document.body.querySelectorAll("*")).forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']")||r.children.length>0)return;let a=(r.textContent||"").trim();if(a.length===0||a.length>80||a==="--"||r.closest(e)||r.closest("[class*='avatar'], [class*='hr-avatar']")||r.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||r.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(r.matches("[role='heading']")||r.closest("[role='heading']")||r.matches("h1, h2, h3")||r.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){r.matches("h1, h2, h3")&&(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let $=r.getAttribute("style")||"";($.includes("color")||$.includes("background"))&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"),r.style.removeProperty("background-color"));return}if(r.closest("#SettingTexasSmsBlock")||r.matches("p.ui-text-sm-medium")&&r.parentElement?.classList?.contains("flex")&&r.parentElement?.classList?.contains("items-center")&&r.parentElement?.children?.length===1){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-button, .n-button")||r.matches(".hr-button__content, .n-button__content")||r.closest(".hr-button__content, .n-button__content")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".bg-primary-50, [class*='bg-primary-50']")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}let s=r,i=null;for(let $=0;$<4&&s;$++){let A=s.nextElementSibling;if(A&&(A.matches(e)||A.querySelector(e)!==null)){i=A;break}s=s.parentElement}if(!i)return;let d=r.getBoundingClientRect();if(d.width===0||d.height===0||d.width>400||d.height>60)return;r.style.setProperty("color","#9098A3","important"),r.style.setProperty("-webkit-text-fill-color","#9098A3","important");let l=i,p=l.getBoundingClientRect(),m=l.className?.toString()||"",h=m.includes("schedule-ui-form-weekly-schedule-checkbox")||l.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,_=m.includes("hl-form-item")||m.includes("n-form-item--top-labelled")||l.closest(".hl-form-item")!==null,u=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",x=(m.includes("hr-form-item-blank")||m.includes("hr-form-item")||l.matches(u))&&(l.matches(u)||l.querySelector(u)!==null);x&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let f=m.includes("hr-radio")||l.closest(".hr-radio, [class*='hr-radio']")!==null;f&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let k=m.includes("hr-breadcrumb")||l.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;k&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius"));let y=m.includes("hr-header-lite")||l.closest("[class*='hr-header-lite']")!==null;y&&(l.getAttribute("style")||"").includes("background-color")&&(l.style.removeProperty("background-color"),l.style.removeProperty("border-color"),l.style.removeProperty("border-style"),l.style.removeProperty("border-width"),l.style.removeProperty("border-radius")),!h&&!_&&!x&&!f&&!k&&!y&&p.width>0&&p.width<=800&&p.height>0&&p.height<=100&&(l.style.setProperty("background-color",ln,"important"),l.style.setProperty("border-color","#252C36","important"),l.style.setProperty("border-style","solid","important"),l.style.setProperty("border-width","1px","important"),l.style.setProperty("border-radius","4px","important"));let g=r.className?.toString()||"<no class>";!uc.has(g)&&g!=="<no class>"&&(uc.add(g),c.debug(`Colored field label "${a.slice(0,30)}": "${g}"`))})},_c=new Set,yy=()=>{document.querySelectorAll("[class*='avatar']").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=(e.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=e.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||e.querySelector("svg, img")!==null)return;let s=(e.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),d=Math.max(16,Math.min(24,Math.round(i*.6)));e.style.setProperty("font-size",`${d}px`,"important"),e.style.setProperty("line-height","1","important"),e.style.setProperty("display","flex","important"),e.style.setProperty("align-items","center","important"),e.style.setProperty("justify-content","center","important"),e.style.setProperty("text-align","center","important"),e.querySelectorAll("*").forEach(p=>{p.tagName==="svg"||p.tagName==="SVG"||p.tagName!=="IMG"&&(p.style.setProperty("font-size",`${d}px`,"important"),p.style.setProperty("line-height","1","important"),p.style.setProperty("text-align","center","important"))});let l=e.className?.toString()||"<no class>";!_c.has(l)&&l!=="<no class>"&&(_c.add(l),c.debug(`Resized avatar text to ${d}px (circle ${i.toFixed(0)}px): "${l}"`))})},vc=new Set,gy=new Set(["Enter Dashboard Name"]),fy=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(e=>{if(e.closest("[id^='ws-crm-']"))return;let o=e.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=e.placeholder||"";if(gy.has(r)){(e.getAttribute("style")||"").includes("background-color")&&(e.style.removeProperty("background-color"),e.style.removeProperty("border-color"));return}e.style.setProperty("background-color",ln,"important"),e.style.setProperty("border-color","#252C36","important"),e.style.setProperty("color","#EDEEF0","important"),e.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=e.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",ln,"important"),a.style.setProperty("border-color","#252C36","important"));let s=e.className?.toString()||"<no class>";!vc.has(s)&&s!=="<no class>"&&(vc.add(s),c.debug(`Forced input slate bg: "${s}"`))})},nn=t=>{(t??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||o.id==="chat-filter"||o.id==="phone-calls"||o.id==="archive-conversation"||o.id==="star-toggle"||o.id==="read-toggle"||o.id==="delete-conversation")return;if(o.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}let r=o.className?.toString()||"";if(r.includes("bg-inherit")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.closest(".pipeline-ribbon")&&r.split(" ").includes("count")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.split(" ").includes("tabulator-page")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(u=>r.includes(u))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("schedule-ui-form-weekly-schedule-checkbox")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("border-color")||u.includes("border-style")||u.includes("border-width"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"));return}if(r.includes("n-button")&&r.includes("icon-only")&&!r.includes("quaternary")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-button--tertiary-type")||r.includes("n-button--tertiary-type")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"),o.style.removeProperty("border-color"),o.style.removeProperty("border-style"),o.style.removeProperty("border-width"),o.style.removeProperty("border-radius"));return}if(r.includes("hr-data-table-td")||r.includes("hr-data-table-tr")||r.includes("hr-data-table__body-cell")||r.includes("hr-data-table__cell")||r.includes("hr-data-table__header-cell")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-data-table-td--fixed-right")||r.includes("n-data-table-td--last-col")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(o.classList.contains("hr-tabs")||r.includes("hr-tabs-tab-wrapper")||r.includes("hr-tabs-nav")||r.includes("hr-tabs-nav-scroll-content")||r.includes("hr-tabs-content")||r.includes("hr-tabs-pane")||r.includes("hr-tabs-rail")||r.includes("hr-tabs-wrapper")||r.includes("hr-tabs-pane-wrapper")||r.includes("hr-tab-pane")){let u=o.getAttribute("style")||"";(u.includes("background-color: rgb(26, 31, 40)")||u.includes("background-color: #1A1F28")||u.includes("background-color: #1a1f28"))&&o.style.removeProperty("background-color");return}if(r.includes("hr-date-panel")||r.includes("n-date-panel")||o.closest(".hr-date-panel, .n-date-panel")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-tag")&&r.includes("ui-default")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if((r.includes("bg-purple-50")||r.includes("bg-purple-100"))&&(r.includes("rounded-lg")||r.includes("rounded-md")||r.includes("rounded-full"))){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("n-alert")||o.closest(".n-alert")||r.includes("hl-warning")||r.includes("hl-error")||r.includes("hl-info")||r.includes("hl-success")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-card")||o.closest(".hr-card")||o.id&&o.id.startsWith("opportunity-")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("bg-gray-50")||r.includes("bg-gray-100")||r.includes("bg-gray-200")||r.includes("bg-white")||r.includes("bg-blue-50")||r.includes("bg-blue-100")||r.includes("bg-sky-50")||r.includes("bg-indigo-50")||r.includes("bg-slate-50")||r.includes("bg-neutral-50")||r.includes("bg-zinc-50")||r.includes("bg-stone-50")||r.includes("F7F9FD")||r.includes("F9FAFB")||r.includes("ECEEF2")||r.includes("eceef2")||r.includes("EFF4FF")||r.includes("eff4ff")){(o.getAttribute("style")||"").includes("background-color")&&o.style.removeProperty("background-color");return}if(r.includes("hr-collapse-item")||r.includes("hr-collapse hr-accordion")||r.includes("hr-accordion"))return;if(r.includes("sidebar-option-button")||o.closest(".sidebar-option-button")||o.closest("nav[class*='w-13']")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}if(o.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let u=o.getAttribute("style")||"";(u.includes("background-color")||u.includes("color"))&&(o.style.removeProperty("background-color"),o.style.removeProperty("color"));return}let s=window.getComputedStyle(o).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let d=parseInt(i[1],10),l=parseInt(i[2],10),p=parseInt(i[3],10);if(!(d<ey&&l<oy&&p<ry))return;let h=o.getBoundingClientRect();if(h.width===0||h.height===0||h.width>800||h.height>200)return;o.style.setProperty("background-color",ln,"important");let _=o.className?.toString()||"<no class>";!sc.has(_)&&_!=="<no class>"&&(sc.add(_),c.debug(`Coerced dark bg to slate (${h.width.toFixed(0)}x${h.height.toFixed(0)}, rgb(${d},${l},${p})): "${_}"`))})},an=()=>{let t="#4B8BF5",e=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(s=>{s.setAttribute("data-reos-recolored","1"),s.setAttribute("data-reos-recolored-v2","1"),s.setAttribute("data-reos-recolored-v3","1");let d=(s.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!d)return;let l;try{l=atob(d[1])}catch{return}let p=l,m=!1;if(e.forEach(u=>{p.includes(u)&&(p=p.split(u).join(t),m=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(u=>{p.includes(u)&&(p=p.split(u).join("transparent"),m=!0)}),s.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(x=>{p.includes(x)&&(p=p.split(x).join("#EDEEF0"),m=!0)}),!!m)try{let u=btoa(p);s.setAttribute("src",`data:image/svg+xml;base64,${u}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(s=>{let i=s.getAttribute("src")||"";if(!i||i.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(i))return;s.setAttribute("data-reos-masked","1");let d=`url("${i}")`;s.style.setProperty("-webkit-mask-image",d,"important"),s.style.setProperty("-webkit-mask-size","contain","important"),s.style.setProperty("-webkit-mask-repeat","no-repeat","important"),s.style.setProperty("-webkit-mask-position","center","important"),s.style.setProperty("mask-image",d,"important"),s.style.setProperty("mask-size","contain","important"),s.style.setProperty("mask-repeat","no-repeat","important"),s.style.setProperty("mask-position","center","important"),s.style.setProperty("background-color","var(--reos-blue)","important"),s.setAttribute("src",o)})},qo=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(e=>{[...e.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);e.classList.contains(r)||e.classList.add(r)}})})},xy=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(e=>{if(e.id?.startsWith("ws-crm-")||e.closest("[id^='ws-crm-']"))return;let o=e.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(e.style.removeProperty("background-color"),e.style.removeProperty("background"))})},qe=()=>{let t=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},e=document.querySelector(".crm-opportunities-modal");e&&e.querySelectorAll(".hr-base-selection").forEach(a=>{t(a),a.querySelectorAll("div, span").forEach(i=>{if(i.id?.startsWith("ws-crm-"))return;let d=window.getComputedStyle(i).backgroundColor;d==="rgba(0, 0, 0, 0)"||d==="transparent"||!d||t(i)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{t(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let s="rgb(150, 162, 173)",i="rgb(0, 191, 124)",d=p=>{let m=r.querySelector(".ui-upload-icon svg");m&&(m.style.setProperty("color",p,"important"),m.style.setProperty("stroke",p,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(h=>{h.style.setProperty("stroke",p,"important")})},l=!1;try{l=r.matches(":hover")}catch{}d(l?i:s),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>d(i)),r.addEventListener("mouseleave",()=>d(s)))})},bs=new WeakSet,wy=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(e=>{if(!bs.has(e))try{let o=e.contentDocument||e.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){bs.add(e);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),e.style.background="#FFFFFF",e.style.borderRadius="6px",bs.add(e)}catch{}})},ky=()=>{let t=document.getElementById("edit-phone-number-modal");t&&t.querySelectorAll("textarea").forEach(e=>{let o=getComputedStyle(e).backgroundColor;o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"&&e.style.setProperty("border-color",o,"important")})},Ft=!1,_s=null,yc=!1,Ey=()=>{if(yc)return;yc=!0;let t=null,e=0;document.addEventListener("pointerdown",r=>{r.isPrimary&&(t=r.clientX,e=r.clientY,Ft=!1)},!0),document.addEventListener("pointermove",r=>{t!==null&&!Ft&&Math.abs(r.clientX-t)+Math.abs(r.clientY-e)>6&&(Ft=!0)},!0);let o=()=>{t=null,Ft&&(Ft=!1,_s&&_s())};document.addEventListener("pointerup",o,!0),document.addEventListener("pointercancel",o,!0)},gc=()=>{let t,o=()=>{if(Ue||Ft)return;let d=document.body?document.body.querySelectorAll("*"):void 0;qo(),Ne(),fy(),nn(d),rn(d),vy(d),wy(),_y(),uy(),hy(),by(),cy(),yy(),py(),dy(d),an(),ly(),sy(),qe(),ze(),ec(d),nc(),ac(),on(),xy(),qe(),oc(),rc(),ky()},r=()=>{let d=document.activeElement;if(!d)return!1;let l=d.tagName;return l==="TEXTAREA"||l==="INPUT"||d.isContentEditable===!0},a=()=>{if(!(Ue||Ft)){if(r()){t!==void 0&&clearTimeout(t),t=window.setTimeout(()=>{t=void 0,o()},800);return}t===void 0&&(t=window.setTimeout(()=>{t=void 0,o()},800))}};qo(),Ne(),nn(),rn(),an(),qe(),ze(),ec(),nc(),ac(),on(),oc(),rc(),window.setTimeout(()=>{qo(),Ne(),nn(),rn(),an(),qe(),ze(),on()},500),window.setTimeout(()=>{qo(),Ne(),nn(),rn(),an(),qe(),ze(),on()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{ze(),Ne()});let s=!1;_s=()=>a(),Ey(),new MutationObserver(()=>{Ft||s||(s=!0,requestAnimationFrame(()=>{s=!1,a()}))}).observe(document.body,{childList:!0,subtree:!0})},hs,$y=()=>{let t=()=>{if(Ue)return;let o=document.getElementById(sn);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let i=s.tagName.toLowerCase();if(i==="style"||i==="link"){if(s.id===sn||s.id===fc)continue;r=!0;break}}if(r)break}r&&hs===void 0&&(hs=window.setTimeout(()=>{hs=void 0,t()},150))}).observe(document.head,{childList:!0}),t()},Uo=()=>{if(Ue=!1,Yv(),!document.getElementById(sn)){let t=document.createElement("style");t.id=sn,t.textContent=Jv,document.head.appendChild(t),c.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?gc():window.addEventListener("DOMContentLoaded",gc)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,$y())},us=[],vs=()=>{for(let e of us)window.clearTimeout(e);us=[];let t=()=>{Ue||Ft||(qo(),Ne(),qe(),ze())};t(),us.push(window.setTimeout(t,150),window.setTimeout(t,400))};var xc="ws-crm-customizer-version-badge",dn=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",dn,{once:!0});return}if(document.getElementById(xc))return;let t=document.createElement("div");t.id=xc,t.style.cssText=`
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
  `,t.textContent=`Customizer v${Yo}`,t.title=`Built ${Jo}
Click to dismiss for this session`,t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)}),document.body.appendChild(t)};var ys="https://services.leadconnectorhq.com",wc="__WS_CRM_CAPTURED_AUTH";var Ty=()=>{try{let t=localStorage.getItem(wc);if(!t)return null;let e=JSON.parse(t);return e?.authorization?Date.now()-(e.capturedAt||0)>3e6?(localStorage.removeItem(wc),null):e:null}catch{return null}},Cy=()=>{let t=Ty();if(!t)return null;let e={Authorization:t.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return t.tokenId&&(e["token-id"]=t.tokenId),e},gs=async(t,e={})=>{let o=Cy();if(!o)return null;try{return await fetch(t,{...e,headers:{...o,...e.headers??{}}})}catch{return null}};var Lc=new Set(["ej0SqnTYIprechAMAPrd"]),je="contact-select-trigger",Sc="ws-crm-reply-from-warning",Ic="contact-select-menu",kc="ws-crm-rf-thread-opt",fs="",xs=!1,jo=null,cn=null,Ec=!1,Wo="",$c,ee=(...t)=>{try{console.log("[reply-from]",...t)}catch{}},ws=t=>{let e=(t?.textContent||"").match(/\+?1?\d{10}\b/);return e?e[0]:""},Pt=t=>(t||"").replace(/\D/g,"").slice(-10),Tc=t=>{let e=Pt(t);return e.length===10?`+1 ${e.slice(0,3)}-${e.slice(3,6)}-${e.slice(6)}`:t},Ay=t=>{let e=t.meta||{};return(t.direction||"").toLowerCase()==="inbound"?e.to||"":e.from||""},Ly=async()=>{let t=window.location.pathname,e=t.match(/\/contacts\/detail\/([A-Za-z0-9]{15,})/);if(e){let r=J();if(!r)return null;let a=await gs(`${ys}/conversations/search?locationId=${encodeURIComponent(r)}&contactId=${encodeURIComponent(e[1])}`);if(!a||!a.ok)return ee("getConversationId: search miss",a?a.status:"null"),null;try{return(await a.json())?.conversations?.[0]?.id||null}catch{return null}}let o=t.split("/").filter(Boolean).pop()||"";return/^[A-Za-z0-9]{15,}$/.test(o)?o:null},Sy=async()=>{let t=await Ly();if(!t)return null;let e=await gs(`${ys}/conversations/${t}/messages?limit=20`);if(!e||!e.ok)return ee("getThreadNumber: fetch miss",e?e.status:"null"),null;let o;try{o=await e.json()}catch{return null}let r=o?.messages?.messages||[];for(let a of r){if(a.type!==2&&a.messageType!=="TYPE_SMS")continue;let s=Ay(a);if(Pt(s).length===10)return s}return null},We=()=>document.getElementById(Sc)?.remove(),Mc=t=>{let e=t;for(let o=0;o<8&&e;o++){if(e.querySelector("#conv-composer-textarea-input, textarea[placeholder]"))return e;e=e.parentElement}return null},Iy=t=>t.replace(/[&<>"]/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":"&quot;"),Pc=(t,e,o)=>{We();let r=document.getElementById(je);if(!r)return;let a=Mc(r);if(!a||!a.parentElement)return;let s=document.createElement("div");s.id=Sc,s.style.cssText="display:flex;align-items:flex-start;gap:9px;padding:10px 12px;margin:0 0 6px;background:rgba(232,163,60,0.14);border-left:3px solid var(--reos-amber,#E8A33C);border-radius:0;font-size:12.5px;line-height:1.5;color:var(--reos-bone,#EDEEF0);font-family:inherit;";let i=e?` (${Iy(e)})`:"";s.innerHTML=`<span style="color:var(--reos-amber,#E8A33C)!important;font-size:16px;line-height:1;margin-top:1px;flex-shrink:0;" aria-hidden="true">&#9888;</span><div>This thread is on <span style="color:var(--reos-amber,#E8A33C)!important;font-weight:500;">${Tc(t)}</span>${i}. You're set to reply from ${Tc(o)}. <span style="color:var(--reos-amber,#E8A33C)!important;">Switch the From before sending.</span></div>`,a.parentElement.insertBefore(s,a)},My=t=>{jo?.disconnect();let e=document.getElementById(je);if(!e)return;let o=Mc(e)||e,r=Pt(ws(e));jo=new MutationObserver(()=>{let a=ws(document.getElementById(je)),s=Pt(a);!s||s===r||(r=s,s===Pt(t)?We():Pc(t,"",a))}),jo.observe(o,{childList:!0,subtree:!0,characterData:!0})},Cc=()=>{let t=document.getElementById(Ic);if(!t)return;let e=Array.from(t.children).filter(d=>d.id!=="hr-dropdown-option-__search__"),o=d=>{let l=(d.textContent||"").match(/\+?1?\d{10}/);return l?l[0]:""},r=null,a="";if(Wo&&(r=e.find(d=>Pt(o(d))===Pt(Wo))||null,a="thread line"),r||(r=e.find(d=>/Last Used/i.test(d.textContent||""))||null,a="last used"),ee("decorateMenu: cache=",Wo,"target=",r?a:"NONE"),!r)return;let s=document.getElementById(kc);s&&s!==r&&s.removeAttribute("id"),r.id=kc;let i=d=>{d.style.setProperty("color","var(--reos-emerald,#0FB57E)","important"),d.style.setProperty("-webkit-text-fill-color","var(--reos-emerald,#0FB57E)","important")};i(r),r.querySelectorAll("*").forEach(d=>{i(d),d.style.setProperty("background-color","transparent","important")})},Py=()=>{if(!Lc.has(J()||""))return;cn?.disconnect();let t=0,e=()=>{let o=document.getElementById(Ic);if(o){Cc(),cn=new MutationObserver(()=>Cc()),cn.observe(o,{childList:!0,subtree:!0});return}++t<20&&window.setTimeout(e,50)};e()},Oy=t=>{let e=t.target;e&&e.closest&&e.closest("#"+je)&&(ee("From trigger clicked -> waiting for menu"),Py())},By=async()=>{if(!xs){xs=!0;try{let t=document.getElementById(je);if(!t)return;let e=ws(t),o=await Sy();if(Wo=o||"",ee("check: from=",e,"thread=",o),!o){We();return}Pt(e)&&Pt(e)!==Pt(o)?(ee("MISMATCH -> banner"),Pc(o,"",e)):(ee("match -> no banner"),We()),My(o)}finally{xs=!1}}},Ac=()=>{if(!Lc.has(J()||""))return;let t=window.location.pathname;if(!t.includes("/conversations")&&!t.includes("/contacts/detail/")){fs="",Wo="",jo?.disconnect(),cn?.disconnect(),We();return}let e=!!document.getElementById(je),o=t.split("/").filter(Boolean).pop()||"",r=(e?"T":"F")+"|"+o;if(r!==fs){if(fs=r,!e){jo?.disconnect(),We();return}ee("composer expanded on",o),By()}},Oc=()=>{$c===void 0&&($c=window.setInterval(Ac,500)),Ec||(document.addEventListener("click",Oy,!0),Ec=!0),Ac()};var Ry="#1A1F28",Hy="#EDEEF0",ks="#9098A3",Dy=t=>{let e=(t||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return e?{r:+e[1],g:+e[2],b:+e[3]}:null},Fy=t=>.2126*t.r+.7152*t.g+.0722*t.b,zy=t=>{let e=t.r/255,o=t.g/255,r=t.b/255,a=Math.max(e,o,r),s=Math.min(e,o,r),i=(a+s)/2,d=a-s,l=0,p=0;return d!==0&&(p=d/(1-Math.abs(2*i-1)),a===e?l=(o-r)/d%6:a===o?l=(r-e)/d+2:l=(e-o)/d+4,l=l*60,l<0&&(l+=360)),`hsl(${Math.round(l)}, ${Math.round(Math.max(.62,p)*100)}%, 60%)`},Bc=(t,e,o)=>{t.querySelectorAll(e).forEach(r=>{r.style.setProperty("color",o,"important"),r.style.setProperty("-webkit-text-fill-color",o,"important")})},Ny=t=>{let e=Dy(getComputedStyle(t).backgroundColor);if(!e||Fy(e)<120)return;let o=zy(e);t.style.setProperty("background-color",Ry,"important"),t.style.setProperty("box-shadow",`inset 3px 0 0 0 ${o}`,"important"),Bc(t,".note-content, .note-content *, [class*='text-gray-9'], [class*='text-gray-7']",Hy),Bc(t,"#note-date-added-text, [class*='475467']",ks)},qy=t=>{t.querySelectorAll("[class*='hr-tag__count']").forEach(e=>{e.style.setProperty("background-color","transparent","important")}),t.querySelectorAll(".hr-tag, .hr-tag *").forEach(e=>{e.style.setProperty("color",ks,"important"),e.style.setProperty("-webkit-text-fill-color",ks,"important")}),t.querySelectorAll("button.hr-button, .hr-button__border, .hr-button__state-border").forEach(e=>{e.style.setProperty("border","none","important"),e.style.setProperty("box-shadow","none","important")})},Rc=()=>{let t=document.querySelectorAll(".note-card-accent");for(let e=0;e<t.length;e++)Ny(t[e]),qy(t[e])},Hc,Dc=()=>{Hc===void 0&&(Hc=window.setInterval(Rc,700)),Rc()};var Uy='input:not([autocomplete]):not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="range"]):not([type="color"]),textarea:not([autocomplete])',Fc=()=>{document.querySelectorAll(Uy).forEach(t=>{t.setAttribute("autocomplete","off")})},zc,Nc=()=>{zc===void 0&&(zc=window.setInterval(Fc,1e3)),Fc()};console.log("[ws-crm-customizer] bundle-loaded");var C=(t,e)=>{try{c.debug(`[main] calling ${t}`),e(),c.debug(`[main] ${t} OK`)}catch(o){c.error(`[main:FAIL] ${t} threw:`,o)}},qc=()=>{c.info(`Loaded v${Yo} (built ${Jo})`),hn()?(c.info(`[main] excluded location ${J()} \u2014 theme only, skipping feature mounts`),C("mountThemeStylesheet",Uo),C("mountDialerThemeFix",Nr)):(C("mountVersionBadge (initial)",dn),C("mountFavicon",Ei),C("mountThemeStylesheet",Uo),C("mountHideLaunchpad",ia),C("mountHideNavItems",la),C("mountRelabelNav",da),C("mountHideTopmenuTabs",pa),C("mountContractsSection",ca)),C("installOppIdCapture",Is),C("initPageRouter",Cs),c.info("[main] registering onPageChange subscriber"),Et(e=>{if(c.debug(`[main] onPageChange callback fired for page=${e}`),hn()){c.info(`[main] page change into excluded location ${J()} \u2014 theme only, skipping feature mounts`),C("mountThemeStylesheet",Uo),C("runThemeFastPass",vs),C("mountDialerThemeFix",Nr),C("unmountContactMapLinks",Vi);return}C("mountThemeStylesheet",Uo),C("runThemeFastPass",vs),C("mountVersionBadge",dn),C("mountHideLaunchpad",ia),C("mountHideNavItems",la),C("mountRelabelNav",da),C("mountHideTopmenuTabs",pa),C("mountContractsSection",ca),C("mountAnalyticsDashboard",qs),C("mountClaimReleaseToggle",ci),C("mountContactActionsBar",wi),C("mountActiveFollowUpButton",Ds),C("mountMtOfferMadeButton",Ai),C("mountNotInterestedButton",Li),C("mountScheduleWalkthroughButton",Si),C("mountResendDealLinkButton",Mi),C("mountReducePriceButton",Oi),C("mountEditLandingPageButton",Bi),C("mountPublishButton",Fi),C("mountContactMapLinks",Ki),C("mountSendToClosingOfficeButton",ll),C("mountOppActionBar",El),C("mountClosingAgentPickerButton",kd),C("mountPrepareContractButton",qd),C("mountComputeOfferButton",tc),C("mountManageTeam",Ad),C("mountBuyBoxWidget",Vs),C("mountSellerContactFlag",si),C("mountPropertiesWidget",ni),C("mountSupportNavItem",Ml),C("mountPhoneAssignmentsWidget",Dl),C("mountBulkPowerDialer",nd),C("mountBulkPowerDialerContacts",id),C("mountCallingAsChip",pd),C("mountDialerThemeFix",Nr),C("mountReplyFromWarning",Oc),C("mountNoteCanon",Dc),C("mountSuppressAutofill",Nc)}),c.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qc):qc();})();
//# sourceMappingURL=customizer.js.map
