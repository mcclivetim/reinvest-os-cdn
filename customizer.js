/* Wholesaling CRM Customizer v0.82.2 — built 2026-07-22T17:57:08.438Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var Gr="[wholesaling-crm-customizer]",tu="__WS_CRM_DEBUG",ou=()=>!!window[tu],m={info(...e){console.log(Gr,...e)},warn(...e){console.warn(Gr,...e)},error(...e){console.error(Gr,...e)},debug(...e){ou()&&console.log(Gr,"[debug]",...e)}};var ru=/\/v2\/location\/([A-Za-z0-9]+)/,nu=new Set(["8ntUQzMflUkR0YvrRgVk"]),J=()=>{let e=window.location.pathname.match(ru);return e?e[1]:null},Na=()=>{let e=J();return e!==null&&nu.has(e)};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"};var y={sm:"4px",md:"6px",lg:"10px",pill:"999px"},h={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},Fa={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},Nl=e=>{let t=e==="emerald"?n.emeraldGlow:e==="amber"?n.amberGlow:n.slate,o=e==="emerald"?n.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=e==="emerald"?n.emerald:e==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${o};
    border-radius: ${y.pill};
    font-family: ${h.mono};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  `},ce=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
  border: none;
  border-radius: ${y.sm};
  font-family: ${h.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,F=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${y.sm};
  font-family: ${h.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var au="rbWy2hPHguDS6WJ3qODY",Je=`/v2/location/${au}`,jt={tcWelcomeOpp:"zEDjyIusaOcecimh0Yjn",dispoPhotosOpp:"Lq0hAXhCHm21IYYFXuKs",dispoMtOpp:"RjxuF4COlLJzUfCCosXW",assignedOpp:"FAfGcbjba72KHce3Dqgn",buyerContact:"d1dVlYA7qS4SE56mnFIM",sellerContact:"iccGZmYOkxH7NLzTsGdH"},Wa="ws-crm-demo-tour",ja="ws-crm-demo-tour-launch",Fl="ws-crm-demo-tour-v2",su="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/demo/reset-now",zl=e=>{try{let t=`ws-tour-reset-${e}`;if(sessionStorage.getItem(t))return;sessionStorage.setItem(t,"1")}catch{}try{fetch(su,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:e}),keepalive:!0})}catch{}},iu=()=>{try{for(let e of["seller","welcome","publish","handoff","fixtures"])sessionStorage.removeItem(`ws-tour-reset-${e}`)}catch{}},Qe=[{route:`${Je}/dashboard`,center:!0,title:"Welcome to the Test Drive",body:"This is Summit Home Offers, a fictional wholesale real estate shop running on the real REInvest OS. That $291K of closed revenue is live pipeline data, and everything you are about to click really works. Nothing here can text or call anyone real.",next:"Start the Tour"},{route:`${Je}/contacts/smart_list/All`,ready:{sel:"a, [role=tab], span",text:"Active Follow"},title:"Acquisitions Works From Contacts",body:"Reps live here, not bouncing around in 6 other screens. Every seller in the pipeline is a contact, and the smart lists across the top are the acquisition team's whole day, prioritized automatically."},{anchorText:{sel:"a, [role=tab], .tab, span",text:"Active Follow"},interact:!0,advance:{anchorClick:!0},title:"The Active Follow Up List",body:"This list builds itself. New leads, callbacks due, missed appointments, and expiring offers all land here, scored and sorted, so a rep is always on the phone with the leads that are most likely to convert. They always know exactly who to call next. Click it to see."},{anchorText:{sel:"a, [role=tab], .tab, span",text:"Revival"},title:"The Revival List",body:"Cold leads and dead-for-now deals do not get forgotten. The Revival List quietly ranks and resurfaces old leads on a schedule, so the leads you already paid for keep turning into deals."},{anchorSel:"#ws-crm-pd-launch, [id^='ws-crm-pd'], button[title*='Power Dialer']",title:"The Power Dialer",body:"One click turns any list into a calling session: local presence numbers, automatic dispositions, and double-dial for missed connects. In this demo account the calls are simulated, but the machine is real."},{anchor:"ws-calling-as-chip",title:"Every Team Calls From Its Own Numbers",body:"See the Calling As chip up top. Acquisitions and Dispo each dial from their own siloed pool of numbers. Each call comes from an area code local to the person the rep is dialing, increasing answer rates and ensuring returned calls always reach the right department. Reps who wear both hats flip teams by clicking the chip, and every call routes through the right pool automatically."},{route:`${Je}/contacts/detail/${jt.sellerContact}`,ready:{sel:"#ws-crm-contact-actions-bar"},title:"Meet Your Seller",body:"The tour just opened a seller lead for you. This one screen is where an acquisitions rep lives for the whole conversation, and everything that follows happens without leaving it.",next:"Next"},{anchor:"ws-properties-nav-icon",interact:!0,advance:{appears:"ws-properties-panel"},title:"The Property Panel",body:"Click the Property icon in the right side panel. The deal is anchored to the PROPERTY, not just the person, and this panel is where the two meet."},{anchor:"ws-properties-panel",interact:!0,next:"Next",title:"Second Sellers, Tenants, More Properties",body:"This panel is live, poke around. A rep can attach a second seller, a tenant, or any related contact in seconds, and if this owner has more than one property, add the next property right here. We designed this system to mirror reality: a seller can have more than one property, and a property can have more than one seller."},{anchor:"ws-crm-claim-release-pill",interact:!0,advance:{anchorTextChange:!0},title:"Claim the Lead",body:"When it comes to PPC leads, speed wins deals. We developed a system that helps you get to PPC leads in 60 seconds or less. Leads sit in the pool until someone claims them. Fastest rep wins. Click Claim and watch it flip to you."},{anchor:"ws-crm-call-status-dropdown",interact:!0,advance:{appears:"ws-crm-call-status-menu",appearsGone:!0},title:"Call Status Runs the Show",body:"Click Call Status and look the outcomes over. Every result a rep can have on a call is just one tap away, and each one drives what happens next: follow-up lists get built, SMS drips start or stop, and the pipeline moves. We keep reps engaged on the phone instead of digging through fields. Pick one or close the menu to keep going."},{anchor:"ws-crm-active-follow-up-button",title:"SMS Drips Ride the Status",body:"This is the SMS follow-up status. It tells reps at a glance if a contact is in a drip campaign. When it reads Add to Active Follow Up like this, it means a seller has engaged and the SMS drip has paused. The rep calls, but if they do not make contact, just one click adds them onto the Active Follow Up List so hot leads are not lost or forgotten. Nobody needs to create follow-up tasks manually."},{anchor:"ws-crm-compute-offer-button",interact:!0,advance:{appears:"ws-crm-offer-modal",appearsGone:!0},title:"The Offer Worksheet",body:"Click the Offer Worksheet, then Pull Comps to create an offer. The rep just selects the rehab level, then the rest is automatic: the Max Allowable Offer and Initial Cash Offer come out, and the numbers all save to the Property itself. No more bouncing around or retyping the address in 3 different platforms to create an offer. Offers are calculated with data from InvestorBase, and our offer calculator learns from every deal you do, so your numbers are always getting more accurate. Close the worksheet when you are done."},{anchorText:{sel:"#ws-crm-contact-actions-bar button, #ws-crm-contact-actions-bar span",text:"Offer Made"},interact:!0,advance:{appears:"ws-crm-offer-made-modal",appearsGone:!0},title:"Offer Made",body:"Click Offer Made. Amount and expiration, two fields. Save it (or close the window) and watch the pipeline move behind it. The tour waits until you are done."},{anchor:"ws-crm-prepare-contract-button",interact:!0,advance:{appears:"ws-crm-prepare-contract-menu",appearsGone:!0},title:"Prepare Contract",body:"Give the bar a beat to settle after your offer, then: seller says yes? Click Prepare Contract. It builds the Purchase Agreement from the deal's own data, both signers filled, and sends it by TEXT. The seller signs with a finger while the rep is still on the phone. Look the menu over, then close it to keep going."},{title:"No Hunting. Ever.",body:"Notice what just happened: claim, status, offer, contract, all without leaving this one screen. Everything an acquisitions rep touches lives right here. That is the whole point of an operating system."},{route:`${Je}/opportunities/${jt.tcWelcomeOpp}?tab=Opportunity+details`,ready:{sel:"button",text:"Start Welcome Call"},title:"Hand It to the TC",resetScope:"seller",body:"When a contract signs, Transaction Coordination takes over. The tour just opened a deal sitting in Welcome Call Needed, no hunting through pipelines. Everything the TC needs lives on this one screen.",next:"Next"},{anchorText:{sel:"button",text:"Start Welcome Call"},interact:!0,advance:{appears:"ws-crm-welcome-call-overlay",appearsGone:!0},title:"The Welcome Call Checklist",body:"Click Start Welcome Call. The TC's first call is scripted right here, and look closely: photo ordering and lockbox ordering are IN the checklist. The TC can order both while on the phone with the seller, without opening another tool. No credit card entry, no back and forth with the seller, just a couple clicks and it is done. Close it when you are done looking."},{route:`${Je}/opportunities/${jt.dispoPhotosOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-edit-landing-button"},title:"Dispo Time",resetScope:"welcome",body:"Photos came back. This deal sits in Photos Received, and photos ordered through the system land straight on the property's own Deal Page.",next:"Next"},{anchor:"ws-crm-edit-landing-button",interact:!0,title:"Edit the Deal Page",body:"Click Edit Deal Page if you want to see the page builder (it opens in a new tab, close that tab to come back to the tour), or press Continue. Every property gets its own Deal Page: photos, beds and baths, price, and much more. Plus, buyers can request a walkthrough directly from the Deal Page. If you order photos through the platform, they get delivered here automatically. No downloading just to re-upload, no sorting required, just one more way we save you time and energy.",next:"Continue"},{title:"The Page IS the Marketing",body:"That page was built from the property record and the photos, no designer, no copy and paste. It becomes the destination for every buyer we blast. Which brings us to the ONE-Click that we are most proud of!"},{anchor:"ws-crm-publish-wrap",interact:!0,mock:"dispo-sms",advance:{anchorTextChange:!0},title:"One-Click Dispo",body:"Click One-Click Dispo. That's right, just one click matches every buyer whose buy box fits this property, while simultaneously pulling a list of new prospective buyers from InvestorBase, and each matched buyer gets a text like the one below with their OWN unique, trackable link. Opens, clicks, and walkthrough requests go to the Dispo rep and tie back to each buyer automatically."},{title:"One Click. 73 Buyers.",body:"That single click just did a full day of dispo work. 28 buyers matched from Summit's own buyer list, and InvestorBase surfaced 45 more real investors already buying in this market, 73 in total. Every one of them gets that text with their OWN unique, trackable link, and a Marketing Tracker deal spins up for each so nothing goes untracked. Which is exactly where we are headed next.",next:"Keep Going"},{route:`${Je}/opportunities/${jt.dispoMtOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-schedule-walkthrough-button"},title:"Every Buyer Gets a Tracker",resetScope:"publish",body:"Each matched buyer gets their own Marketing Tracker deal, so Dispo can see exactly who opened, who is interested, and who went quiet. The tour just opened the tracker for one of the 5620 Bridgetowne Way buyers.",next:"Next"},{anchor:"ws-crm-schedule-walkthrough-button",title:"Schedule Walkthrough",body:"A buyer wants to see it? Buyers can request walkthroughs from the Deal Page, or reps can schedule the walkthrough from right here. The system knows if the property is vacant or occupied and adjusts on its own. Tenant occupied? The buyer and the tenant both get reminders. Owner occupied? The buyer and the owner both. Vacant with a lockbox? The buyer gets the reminders, and the code arrives automatically once a rep confirms the walkthrough."},{anchor:"ws-crm-mt-offer-made-button",title:"Mark Offer Made",body:"When this buyer makes an offer, it is logged here, against this buyer, on this property. Dispo sees every offer on the deal side by side."},{anchor:"ws-crm-resend-deal-link-wrap",title:"Resend Deal Link",body:"Buyer lost the text or asks you to send it to their email? Resend the Deal Page with their unique link in one click. Same link, same tracking, no need to manually create anything or even leave this screen."},{anchor:"ws-crm-not-interested-button",title:"Mark Not Interested",body:"A pass is information too. Mark it and this buyer stops getting touches on THIS deal while staying active for every future deal that fits their buy box."},{anchor:"ws-crm-add-referral-wrap",title:"Add Referral Buyer",body:"Buyer says a friend might want it or asks you to send it to their business partner? Add the referral mid-call: contact, tracker deal, and their own personalized Deal Page link, all from one place with just a couple of clicks."},{route:`${Je}/contacts/detail/${jt.buyerContact}`,ready:{sel:"#ws-crm-contact-actions-bar button",text:"Buyer Call Status"},title:"The Buyer Side",body:"Dispo reps work buyers the same way acquisitions works sellers. The tour opened a buyer contact, and the action bar flipped to its buyer version.",next:"Next"},{anchor:"ws-crm-call-status-dropdown",interact:!0,advance:{appears:"ws-crm-call-status-menu",appearsGone:!0},title:"Buyer Call Status",body:"Same muscle memory, different outcomes: click Buyer Call Status and look over dispositions tailored to Dispo. Offer Made works exactly the same on this side too. Pick one or close the menu to keep going."},{anchor:"ws-buybox-nav-icon",interact:!0,advance:{appears:"ws-buybox-panel"},title:"Buy Boxes Drive the Matching",body:"Click the Buy Box icon in the right side panel. A buy box is simply the markets where this buyer purchases, and One-Click Dispo matches every deal against every buy box in the system. Unlike most CRMs, we never force a market level: a buyer can be as broad as a whole state and as granular as a single zip code, all in the same list. No need to write it down and update it later. The speed and simplicity of the Buy Box system lets a rep add or change criteria mid-call while staying engaged with the buyer on the phone."},{anchor:"ws-buybox-panel",interact:!0,next:"Next",advance:{appears:"ws-buybox-modal",appearsGone:!0},title:"Add a Buy Box in Seconds",body:"This panel is live. Click Add Buy Box, pick a market, and save. County X and zip code Y can sit side by side, as broad or as granular as the buyer likes, which most CRMs flat out refuse to allow. Every future deal that fits gets this buyer texted automatically. Close the window when you are done."},{anchor:"ws-crm-prepare-contract-button",title:"Assignments Are One Click Too",body:"Assignment Agreements work exactly like Purchase Contracts. One click builds it from the known deal info, fills the buyer, assignment price, and the property info, and sends it for signature via text and/or email. No DocuSign babysitting."},{route:`${Je}/opportunities/${jt.assignedOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-closing-agent-picker-button"},title:"The Assigned Deal",body:"Buyer signed. This deal sits in Assigned, ready to go to title. One field stands between the TC and a finished handoff.",next:"Next"},{anchor:"ws-crm-send-to-title-co-wrap",title:"The TC Checklist",body:"Everything the TC and Closing Agent need is already here: the signed Purchase Agreement, the Assignment Agreement, dates, deposits. The amber checks that remain are all the same missing piece, the closing agent, and the handoff button knows it."},{anchor:"ws-crm-closing-agent-picker-button",interact:!0,advance:{anchorTextChange:!0},title:"Link the Closing Agent",body:"Click Link Closing Agent and type Dana. Pick Dana Whitfield with Pioneer Title & Escrow. That is the last missing piece."},{anchor:"ws-crm-send-to-title-co-wrap",advance:{textIn:{sel:"#ws-crm-send-to-title-co-wrap",text:"One-Click Handoff"}},title:"Watch It Turn Green",body:"Dana is linked. The checklist re-checks itself and flips from amber to green. The moment it reads One-Click Handoff, this deal is one click away from having everything necessary automatically sent to the closing agent (title, escrow, or attorney) of your choice."},{anchor:"ws-crm-send-to-title-co-wrap",interact:!0,advance:{anchorClick:!0},title:"One-Click Handoff",body:"Click it. Dana receives the Purchase Agreement, the Assignment Agreement, and every detail needed to open escrow, in ONE email, from ONE click. Nothing re-typed, nothing forgotten."},{center:!0,title:"Built for the Work That Matters",resetScope:"handoff",body:"Acquisitions, Dispo, and TC, all on one Operating System. REInvest OS stops forcing your team to do mental gymnastics to complete tasks. No typing into needless fields, never type the same info twice, everything is exactly WHERE you need it, WHEN you need it! You and your team can stop focusing on busy work and stay focused on revenue building activities. Book a Demo to see how we can help you and your team make more money!",next:"Next"},{center:!0,title:"Thank You For Taking the Test Drive",body:`Thanks for spending the time. Want to see REInvest OS running on your own numbers, with a human walking you through it?
      <button data-tour="book" style="display:block;width:100%;margin-top:12px;background:${n.emerald};color:#04130d;border:0;border-radius:9px;padding:11px 15px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;">Book a 1 on 1 Demo</button>`,next:"Next"},{route:`${Je}/contacts/smart_list/All`,ready:{sel:"a, [role=tab], span",text:"Active Follow"},center:!0,title:"The Screen Is Yours",body:"This demo account is yours to explore now. Poke around, open anything, click everything. Nothing here can text or call a real person. And if you want the guided tour again, the Tour button at the bottom left restarts it anytime.",next:"Done"}],xt=()=>{try{let e=localStorage.getItem(Fl);if(e)return JSON.parse(e)}catch{}return{i:0,done:!1,started:!1}},tn=e=>{try{localStorage.setItem(Fl,JSON.stringify(e))}catch{}},Jr=null,Fo=null,Kr=!1,No=null,Ua=0,Qr=!1,Vr=!1,Zr=e=>{if(!e)return!1;let t=e,o=getComputedStyle(t);if(o.display==="none"||o.visibility==="hidden")return!1;let r=t.getBoundingClientRect();return r.width>1&&r.height>1},Xr=e=>e.advance?.appears?document.getElementById(e.advance.appears):e.advance?.appearsSel?document.querySelector(e.advance.appearsSel):null,za=e=>{if(Qr)return;let t=Xr(e);if(!t||!Zr(t))return;let r=Array.from(t.querySelectorAll("button")).find(a=>/^(cancel|close|✕|×|x)$/i.test((a.textContent||"").trim()));if(r){r.click();return}t.remove()},ql=(e,t)=>{let o=document.querySelectorAll(e);for(let r of Array.from(o)){let a=(r.textContent||"").trim();if(a&&a.length<80&&a.toLowerCase().includes(t.toLowerCase()))return r}return null},lu=e=>!e.ready||Date.now()-Ua>6e3?!0:e.ready.text?!!ql(e.ready.sel,e.ready.text):!!document.querySelector(e.ready.sel),qa=e=>{if(e.anchor)return document.getElementById(e.anchor);if(e.anchorSel){for(let t of e.anchorSel.split(",")){let o=document.querySelector(t.trim());if(o)return o}return null}return e.anchorText?ql(e.anchorText.sel,e.anchorText.text):null},en=()=>{Jr!==null&&(window.clearInterval(Jr),Jr=null),Fo&&(document.removeEventListener("click",Fo,!0),Fo=null)},Ga=()=>{document.getElementById(Wa)?.remove()},Yr=e=>{let t=xt();tn({...t,done:e?!0:t.done,started:!1}),en(),Ga(),zl("fixtures")},du=`
  <img src="https://mcclivetim.github.io/reinvest-os-cdn/demo-photos/house-1.jpg" alt=""
    style="width:100%;display:block;margin-top:12px;border-radius:12px 12px 4px 4px;" />
  <div style="margin-top:4px;background:${n.obsidian};border:1px solid ${n.emeraldBorder};
      border-radius:4px 4px 12px 4px;padding:10px 12px;font-size:12px;line-height:1.5;color:#d6f5ea;">
    New Deal: 5620 Bridgetowne Way, Raleigh. 3/2.5, 1,292 sqft, asking $195,000.
    Photos + details: <span style="color:${n.emeraldBright};text-decoration:underline;">deals.reinvestos.com/e/x8Kq2</span>
  </div>
  <div style="margin-top:6px;font-size:10.5px;color:${n.coolGray};">
    Example text. Every buyer's link is unique and trackable.
  </div>`,Ka=()=>{let e=xt();if(e.done||!e.started)return;let t=Qe[e.i];if(!t){Yr(!0);return}Ga(),en(),Kr=!1,No=null,Ua=Date.now(),t.resetScope&&zl(t.resetScope),Qr=Zr(Xr(t)),Vr=!1;let o=document.createElement("div");o.id=Wa,o.style.cssText=`position: fixed; inset: 0; z-index: 1000000; font-family: ${h.sans}; pointer-events: none;`;let r=()=>{let b=document.createElement("div");return b.style.cssText="position: fixed; background: rgba(10,13,18,.42); pointer-events: auto; transition: all .2s ease;",b},a=[r(),r(),r(),r()];a.forEach(b=>o.appendChild(b));let s=document.createElement("div");s.style.cssText="position: fixed; pointer-events: auto; background: transparent;",o.appendChild(s);let i=document.createElement("div");i.style.cssText=`position: fixed; border: 2px solid ${n.emeraldBright}; border-radius: 10px;
    box-shadow: 0 0 22px ${n.emeraldGlow}; pointer-events: none; transition: all .2s ease; opacity: 0;`,o.appendChild(i);let l=document.createElement("div");l.style.cssText=`
    position: fixed; width: 380px; max-width: calc(100vw - 24px);
    background: ${n.graphite}; border: 1px solid ${n.emeraldBorder};
    border-radius: 14px; padding: 18px 18px 14px;
    box-shadow: 0 24px 70px rgba(0,0,0,.55); pointer-events: auto; z-index: 1000002;`;let d=t.interact?`<div style="margin-top:8px;font-family:${h.mono};font-size:10px;letter-spacing:1px;color:${n.emeraldBright};text-transform:uppercase;">The highlighted spot is live. Click it.</div>`:"";l.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:1.6px;color:${n.emeraldBright};text-transform:uppercase;">
      Tour \xB7 Step ${e.i+1} of ${Qe.length}</div>
    <div style="color:${n.bone};font-size:16.5px;font-weight:650;margin-top:6px;letter-spacing:-.2px;">${t.title}</div>
    <div style="color:${n.ash};font-size:13px;line-height:1.55;margin-top:8px;">${t.body}</div>
    ${t.mock==="dispo-sms"?du:""}
    ${d}
    <div style="margin-top:14px;display:flex;align-items:center;justify-content:space-between;">
      <span></span>
      <span style="display:flex;gap:8px;">
        ${e.i>0?`<button data-tour="back" style="background:transparent;border:1px solid rgba(255,255,255,.18);
          color:${n.ash};border-radius:9px;padding:8px 13px;font-size:12.5px;font-weight:600;cursor:pointer;
          font-family:${h.sans};">Back</button>`:""}
        <button data-tour="next" style="background:${t.interact?"transparent":n.emerald};
          border:${t.interact?`1px solid ${n.emeraldBorder}`:"0"};
          color:${t.interact?n.emeraldBright:"#04120c"};border-radius:9px;
          padding:8px 15px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:${h.sans};">
          ${t.next??(e.i===Qe.length-1?"Finish":t.interact?"Skip This One":"Next")}</button>
      </span>
    </div>
    <button data-tour="end" style="position:absolute;top:10px;right:12px;background:none;border:none;
      color:${n.coolGray};font-size:11px;cursor:pointer;font-family:${h.sans};">End Tour</button>`,o.appendChild(l),document.body.appendChild(o);let c=()=>{if(!lu(t)){if(a.forEach(x=>Object.assign(x.style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0",t.center)Object.assign(l.style,{left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:".92"});else{let x=l.offsetHeight||220;Object.assign(l.style,{left:"50%",top:`${window.innerHeight-x-24}px`,transform:"translateX(-50%)",opacity:".92"})}return}l.style.opacity="1";let b=qa(t);if(!!t.freeRoam||!!t.interact&&Kr||!!t.interact&&!b&&Date.now()-Ua>6e3){a.forEach($=>Object.assign($.style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0";let x=l.offsetHeight||220;Object.assign(l.style,{left:"50%",top:`${window.innerHeight-x-24}px`,transform:"translateX(-50%)"});return}let _=b?.getBoundingClientRect()??null,v=window.innerWidth,f=window.innerHeight;if(_&&_.width>0){let $=Math.max(0,_.left-6),g=Math.max(0,_.top-6),k=Math.min(v,_.right+6),S=Math.min(f,_.bottom+6);Object.assign(a[0].style,{left:"0px",top:"0px",width:`${v}px`,height:`${g}px`}),Object.assign(a[1].style,{left:"0px",top:`${S}px`,width:`${v}px`,height:`${f-S}px`}),Object.assign(a[2].style,{left:"0px",top:`${g}px`,width:`${$}px`,height:`${S-g}px`}),Object.assign(a[3].style,{left:`${k}px`,top:`${g}px`,width:`${v-k}px`,height:`${S-g}px`}),Object.assign(i.style,{left:`${$}px`,top:`${g}px`,width:`${k-$}px`,height:`${S-g}px`,opacity:"1"}),t.interact?s.style.display="none":(s.style.display="block",Object.assign(s.style,{left:`${$}px`,top:`${g}px`,width:`${k-$}px`,height:`${S-g}px`}));let T=380,w=l.offsetHeight||240,C=14,E=V=>Math.min(Math.max(V,12),v-T-12),L=V=>Math.min(Math.max(V,12),f-w-12),A=[{left:_.left,top:_.bottom+C},{left:_.left,top:_.top-w-C},{left:_.left-T-C,top:_.top+(_.height-w)/2},{left:_.right+C,top:_.top+(_.height-w)/2}],M=[{l:$,t:g,rr:k,b:S}],O=Xr(t);if(Zr(O)){let V=O.getBoundingClientRect();M.push({l:V.left-6,t:V.top-6,rr:V.right+6,b:V.bottom+6})}let P=!1;for(let V of A){let j=E(V.left),K=L(V.top);if(!M.some(B=>j<B.rr&&j+T>B.l&&K<B.b&&K+w>B.t)){Object.assign(l.style,{left:`${j}px`,top:`${K}px`,transform:"none"}),P=!0;break}}P||Object.assign(l.style,{left:"50%",top:`${f-w-24}px`,transform:"translateX(-50%)"}),No===null&&(No=(b?.textContent||"").trim())}else if(Object.assign(a[0].style,{left:"0px",top:"0px",width:`${v}px`,height:`${f}px`}),[1,2,3].forEach(x=>Object.assign(a[x].style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0",t.center)Object.assign(l.style,{left:"50%",top:"50%",transform:"translate(-50%, -50%)"});else{let x=l.offsetHeight||240;Object.assign(l.style,{left:"50%",top:`${f-x-24}px`,transform:"translateX(-50%)"})}};c(),Fo=b=>{let u=qa(t);u&&u.contains(b.target)&&(Kr=!0)},document.addEventListener("click",Fo,!0);let p=(b,u=!1)=>{tn({...xt(),i:b});let _=Qe[b]?.route;if(!_&&u){for(let v=b;v>=0;v--)if(Qe[v].route){_=Qe[v].route;break}}if(_&&!window.location.pathname.startsWith(_.split("?")[0])){window.location.href=_;return}Ka()};l.querySelector('[data-tour="next"]')?.addEventListener("click",()=>{za(t);let b=xt();if(b.i>=Qe.length-1){Yr(!0);return}p(b.i+1)}),l.querySelector('[data-tour="back"]')?.addEventListener("click",()=>{za(t);let b=xt();b.i>0&&p(b.i-1,!0)}),l.querySelector('[data-tour="book"]')?.addEventListener("click",()=>{window.open("https://api.leadconnectorhq.com/widget/booking/nNpqNLm5XUckJCj68BPc","_blank","noopener")}),l.querySelector('[data-tour="end"]')?.addEventListener("click",()=>{za(t),Yr(!0)}),Jr=window.setInterval(()=>{c();let b=t.advance;if(!b)return;let u=!1;if(b.urlIncludes&&window.location.href.includes(b.urlIncludes)&&(u=!0),!u&&(b.appears||b.appearsSel)){let _=Zr(Xr(t));b.appearsGone?!Vr&&!Qr&&_?Vr=!0:Vr&&!_&&(u=!0):!Qr&&_&&(u=!0)}if(!u&&b.textIn){let _=document.querySelector(b.textIn.sel);_&&(_.textContent||"").includes(b.textIn.text)&&(u=!0)}if(!u&&b.anchorClick&&Kr&&(u=!0),!u&&b.anchorTextChange&&No!==null){let v=(qa(t)?.textContent||"").trim();v&&v!==No&&(u=!0)}if(u){t.title==="Claim the Lead"&&window.setTimeout(()=>{try{document.querySelectorAll("span, div").forEach(v=>{v.children.length===0&&(v.closest("#ws-calling-as-chip")||(v.textContent||"").trim()==="ACQ Team"&&(v.textContent="You"))})}catch{}},700);let _=xt();if(_.i>=Qe.length-1){Yr(!0);return}en(),window.setTimeout(()=>p(_.i+1),650)}},450)},cu=()=>{if(!document.body||document.getElementById(ja))return;let e=document.createElement("button");e.id=ja,e.style.cssText=`
    position: fixed; bottom: 12px; left: 76px; z-index: 999999;
    padding: 6px 12px; border-radius: 999px; border: 1px solid ${n.emeraldBorder};
    background: ${n.slate}; color: ${n.emeraldBright};
    font-family: ${h.sans}; font-size: 11px; font-weight: 700;
    letter-spacing: .6px; line-height: 1; cursor: pointer;`,e.textContent="Tour",e.title="Restart the guided tour",e.addEventListener("click",()=>{iu(),tn({i:0,done:!1,started:!0});let t=Qe[0];if(t.route&&!window.location.pathname.startsWith(t.route.split("?")[0])){window.location.href=t.route;return}Ka()}),document.body.appendChild(e)},jl=()=>{cu();let e=xt();e.done||(e.started||tn({...e,started:!0}),document.getElementById(Wa)||Ka())},Ul=()=>{en(),Ga(),document.getElementById(ja)?.remove()};var pu="rbWy2hPHguDS6WJ3qODY",Gl="05E79Mn51i8pIlynjZ8R",Fe=()=>J()===pu,Va="ws-crm-demo-badge",Ya="ws-crm-demo-conv-banner",nn="ws-crm-demo-call-modal",Kl="ws-crm-demo-call-leg",Wl="ws-crm-demo-style",Ut=null,on=null,rn=null,Qa=()=>{if(document.getElementById(Wl))return;let e=document.createElement("style");e.id=Wl,e.textContent=`
    @keyframes wsDemoPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.12); opacity: .75; }
    }
    @keyframes wsDemoDots {
      0% { content: ""; } 25% { content: "."; }
      50% { content: ".."; } 75% { content: "..."; }
    }
    #${nn} .ws-demo-ringing::after, #${Kl} .ws-demo-ringing::after {
      display: inline-block; width: 14px; text-align: left;
      content: "..."; animation: wsDemoDots 1.2s steps(1) infinite;
    }
  `,document.head.appendChild(e)},mu=()=>{if(!document.body||document.getElementById(Va))return;let e=document.createElement("div");e.id=Va,e.style.cssText=`
    position: fixed; bottom: 12px; left: 12px; z-index: 999999;
    padding: 6px 12px; border-radius: 999px;
    background: linear-gradient(135deg, ${n.emerald}, ${n.emeraldBright});
    color: #04120c; font-family: ${h.sans}; font-size: 11px;
    font-weight: 700; letter-spacing: .8px; line-height: 1;
    box-shadow: 0 4px 14px ${n.emeraldGlow}; user-select: none;
    pointer-events: auto; cursor: default;
  `,e.textContent="DEMO",e.title="Demo account \u2014 calls and messages are simulated. Data is fictional.",document.body.appendChild(e)},Vl=()=>{on!==null&&(window.clearTimeout(on),on=null),rn!==null&&(window.clearInterval(rn),rn=null)},Ja=()=>{Vl(),document.getElementById(nn)?.remove()},bu=()=>{let o=document.querySelector("#record-details-lhs")?.querySelector("h2, h3")?.textContent?.trim();return o&&o.length>1&&o.length<60?o:null},uu=e=>{if(document.getElementById(nn))return;Qa();let t=bu(),o=document.createElement("div");o.id=nn,o.style.cssText=`
    position: fixed; inset: 0; z-index: 1000001;
    background: rgba(10, 13, 18, .66); backdrop-filter: blur(2px);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
  `;let r=document.createElement("div");r.style.cssText=`
    width: 320px; padding: 26px 22px 20px; text-align: center;
    background: ${n.graphite}; border: 1px solid ${n.emeraldBorder};
    border-radius: 14px; box-shadow: 0 24px 70px rgba(0,0,0,.55);
  `,r.innerHTML=`
    <div style="width:56px;height:56px;margin:0 auto 12px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};
        animation: wsDemoPulse 1.4s ease-in-out infinite;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2
          1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5
          c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" fill="${n.emeraldBright}"/>
      </svg>
    </div>
    <div style="color:${n.bone};font-size:16px;font-weight:650;letter-spacing:-.2px;">
      ${t??"Seller"}
    </div>
    <div style="color:${n.ash};font-size:12.5px;margin-top:2px;">${e??""}</div>
    <div class="ws-demo-status ws-demo-ringing"
         style="color:${n.emeraldBright};font-size:13px;font-weight:600;margin-top:14px;">
      Ringing</div>
    <div style="color:${n.coolGray};font-size:11.5px;line-height:1.5;margin-top:12px;">
      Simulated call. The live product dials from your local-presence
      business number. This demo account has no phone line on purpose.
    </div>
    <button class="ws-demo-hangup" style="
      margin-top:16px;padding:10px 22px;border:0;border-radius:999px;cursor:pointer;
      background:${n.crimson};color:#fff;font-family:${h.sans};
      font-size:13px;font-weight:650;">Hang Up</button>
  `,o.appendChild(r),r.addEventListener("click",l=>l.stopPropagation()),o.addEventListener("click",Ja),document.body.appendChild(o);let a=r.querySelector(".ws-demo-status"),s=r.querySelector(".ws-demo-hangup"),i=0;on=window.setTimeout(()=>{a&&(a.classList.remove("ws-demo-ringing"),a.textContent="Connected \xB7 0:00",rn=window.setInterval(()=>{i+=1;let l=Math.floor(i/60),d=String(i%60).padStart(2,"0");a.textContent=`Connected \xB7 ${l}:${d}`},1e3))},2400),s?.addEventListener("click",()=>{Vl(),a&&(a.textContent="Call Ended"),s&&(s.disabled=!0),window.setTimeout(Ja,900)})},wt=null,Yl=()=>{wt&&wt()},hu=e=>{let t=String(e||"").match(/^\+?1?(\d{3})(\d{3})(\d{4})$/);return t?`(${t[1]}) ${t[2]}-${t[3]}`:String(e||"")},Jl=e=>{Yl(),Qa();let t=window.WS_CRM_SIM||{},o=e.leg>=2,r=o?t.ring2??4e3:t.ring1??6500,a=t.vm??4e3,s=document.getElementById("ws-calling-as-chip"),i=s?s.getBoundingClientRect():null,l=i&&i.bottom>0?Math.round(i.bottom+10):56,d=i?Math.max(12,Math.round(window.innerWidth-i.right)):24,c=document.createElement("div");c.id=Kl,c.style.cssText=`
    position: fixed; right: ${d}px; top: ${l}px; z-index: 100003;
    width: 280px; padding: 18px 16px 14px; text-align: center;
    background: ${n.graphite}; border: 1px solid ${n.emeraldBorder};
    border-radius: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.5);
    font-family: ${h.sans};
  `,c.innerHTML=`
    <div style="width:44px;height:44px;margin:0 auto 10px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};
        animation: wsDemoPulse 1.4s ease-in-out infinite;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2
          1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5
          c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" fill="${n.emeraldBright}"/>
      </svg>
    </div>
    <div style="color:${n.bone};font-size:15px;font-weight:650;letter-spacing:-.2px;">
      ${e.name||"Seller"}
    </div>
    <div style="color:${n.ash};font-size:12px;margin-top:2px;">${hu(e.phone)}</div>
    <div class="ws-demo-status ws-demo-ringing"
         style="color:${n.emeraldBright};font-size:13px;font-weight:600;margin-top:12px;">
      Ringing</div>
    <button id="end-call-button" class="ws-demo-hangup" style="
      margin-top:12px;padding:8px 20px;border:0;border-radius:999px;cursor:pointer;
      background:${n.crimson};color:#fff;font-family:${h.sans};
      font-size:12.5px;font-weight:650;">Hang Up</button>
    <div style="color:${n.coolGray};font-size:10.5px;line-height:1.45;margin-top:10px;">
      Simulated call. This demo account has no phone line on purpose.
    </div>
  `,document.body.appendChild(c);let p=c.querySelector(".ws-demo-status"),b=c.querySelector(".ws-demo-hangup");return new Promise(u=>{let _=[],v=0,f=!1,x=()=>{for(let g of _)window.clearTimeout(g),window.clearInterval(g);c.remove(),wt===x&&(wt=null),f||(f=!0,u({outcome:"",talkSecs:v,repEnded:!0}))};wt=x;let $=(g,k,S)=>{if(!f){f=!0;for(let T of _)window.clearTimeout(T),window.clearInterval(T);p&&(p.classList.remove("ws-demo-ringing"),p.textContent=g),b&&(b.disabled=!0),window.setTimeout(()=>{c.remove(),wt===x&&(wt=null),u(k)},S)}};_.push(window.setInterval(()=>{e.shouldEnd&&e.shouldEnd()&&$("Call Ended",{outcome:"",talkSecs:v,repEnded:!0},400)},200)),b?.addEventListener("click",()=>$("Call Ended",{outcome:"",talkSecs:v,repEnded:!0},500)),_.push(window.setTimeout(()=>{if(!f){if(!o){$("No Answer",{outcome:"no-answer",talkSecs:0,repEnded:!1},900);return}p&&(p.classList.remove("ws-demo-ringing"),p.textContent="Voicemail \xB7 0:00"),_.push(window.setInterval(()=>{v+=1,p&&(p.textContent=`Voicemail \xB7 0:${String(v).padStart(2,"0")}`)},1e3)),_.push(window.setTimeout(()=>{$("Call Ended",{outcome:"voicemail",talkSecs:Math.max(v,1),repEnded:!0},700)},a))}},r))})},_u=e=>{let t=(e.getAttribute("aria-label")??e.getAttribute("title")??e.getAttribute("data-tooltip")??"").trim().toLowerCase();return t.startsWith("call:")?{hit:!0,phone:t.slice(5).trim()||null}:{hit:["call","call contact","make a call","voice calling"].includes(t),phone:null}},yu=()=>{Ut||(Ut=e=>{if(!Fe())return;let t=e.target;if(!t)return;let o=t.closest?.('a[href^="tel:"]'),r=o?null:t.closest?.("[aria-label], [title], [data-tooltip]")??null,a=r?_u(r):{hit:!1,phone:null};if(!o&&!a.hit)return;e.preventDefault(),e.stopPropagation();let s=o?decodeURIComponent(o.href.replace(/^tel:/,"")):a.phone;m.info(`[demo-mode] intercepted call click (${s??"button"}) \u2014 opening sim call`),uu(s)},document.addEventListener("click",Ut,!0))},vu=()=>{let e=window.location.pathname.includes("/conversations"),t=document.getElementById(Ya);if(!e){t?.remove();return}if(t||!document.body)return;let o=document.createElement("div");o.id=Ya,o.style.cssText=`
    position: fixed; top: 8px; left: 50%; transform: translateX(-50%);
    z-index: 999998; padding: 7px 14px; border-radius: 999px;
    background: ${n.slate}; border: 1px solid ${n.emeraldBorder};
    color: ${n.ash}; font-family: ${h.sans}; font-size: 11.5px;
    font-weight: 600; box-shadow: 0 6px 18px rgba(0,0,0,.35); user-select: none;
  `,o.innerHTML=`<span style="color:${n.emeraldBright};font-weight:700;">Demo</span>
    &nbsp;Outbound texting is simulated in this demo account \u2014 the live product sends
    from your business number.`,document.body.appendChild(o)},Za=()=>{Ul(),document.getElementById(Va)?.remove(),document.getElementById(Ya)?.remove(),Ja(),Yl(),Ut&&(document.removeEventListener("click",Ut,!0),Ut=null)},Xa=()=>{if(!Fe()){Za();return}Qa(),mu(),yu(),vu(),jl()};var Ql=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,es=/\/v2\/location\/([A-Za-z0-9]+)/,gu=e=>{let t=e.match(Ql);if(!t)return null;let o=e.match(es);return{contactId:t[1],locationId:o?o[1]:null,source:"url"}},fu=()=>{let e=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let t of e){let o=document.querySelector(t);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match(Ql);if(!a)continue;let s=r.match(es)||window.location.pathname.match(es);return{contactId:a[1],locationId:s?s[1]:null,source:"dom"}}return null},U=()=>{let e=gu(window.location.pathname);return e||fu()};var Zl=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},sn="",ts=null,kt="other",os=new Set,an=()=>{let e=U()?.contactId??null;if(!(!(window.location.pathname!==sn)&&!(e!==ts))){sn=window.location.pathname,ts=e,kt=Zl(),m.debug("Page/context changed:",kt,sn,"contact:",e);for(let r of os)try{r(kt)}catch(a){m.error("Subscriber threw:",a)}}},Te=e=>(os.add(e),setTimeout(()=>e(kt),0),()=>{os.delete(e)}),Xl=()=>{kt=Zl(),sn=window.location.pathname,ts=U()?.contactId??null,m.debug("Router init, current page:",kt);let e=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(o,r,a){e(o,r,a),an()},history.replaceState=function(o,r,a){t(o,r,a),an()},window.addEventListener("popstate",an),setInterval(an,1e3)},Wt=()=>kt;var xu=/\/opportunities\/([A-Za-z0-9]{16,24})(?:[/?]|$)/,od=null,ed=!1,td=e=>{let t=e.match(xu);t&&(od=t[1])},rd=()=>{if(!ed){ed=!0;try{let e=window.fetch.bind(window);window.fetch=(o,r)=>{try{let a=typeof o=="string"?o:o instanceof URL?o.href:o.url;a&&td(a)}catch{}return e(o,r)};let t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(o,r,...a){try{td(typeof r=="string"?r:r.href)}catch{}return t.call(this,o,r,...a)},m.debug("[opp-id-capture] installed")}catch(e){m.warn("[opp-id-capture] install failed",e)}}},Ce=()=>od;var nd=/\/contacts\/search/,id=new Map,ad=!1,sd=(e,t)=>{if(!(typeof t!="string"||!t))try{let o=JSON.parse(t);if(!o?.locationId||o.page===void 0)return;id.set(o.locationId,{url:e,bodyRaw:t,capturedAt:Date.now()})}catch{}},ld=e=>id.get(e)??null,dd=()=>{if(!ad){ad=!0;try{let e=XMLHttpRequest.prototype,t=e.open,o=e.send;e.open=function(...r){try{let a=String(r[1]??"");nd.test(a)&&(this.__wsSearchUrl=a)}catch{}return t.apply(this,r)},e.send=function(r){try{let a=this.__wsSearchUrl;a&&sd(a,r)}catch{}return o.call(this,r)}}catch(e){m.warn("[search-capture] XHR tap install failed",e)}try{let e=window.fetch;window.fetch=function(...t){try{let o=typeof t[0]=="string"?t[0]:t[0]instanceof URL?t[0].href:t[0]?.url||"";nd.test(o)&&sd(o,t[1]?.body)}catch{}return e.apply(this,t)}}catch(e){m.warn("[search-capture] fetch tap install failed",e)}}};var ln="0.82.2",dn="2026-07-22T17:57:08.439Z";var wu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",cn=new Map,rs=new Map,ku=3e4,Et=4e3,Eu=Et,ze=async(e,t)=>{if(!e)return null;let o=cn.get(e);if(o){if(o.failedAt===void 0)return o.type;if(Date.now()-o.failedAt<ku)return null}if(!t)return m.warn(`Cannot fetch Contact Type for ${e} \u2014 tenant_id missing from URL context`),null;let r=rs.get(e);if(r)return r;let s=(async()=>{let i=new AbortController,l=setTimeout(()=>i.abort(),Eu);try{let d=`${wu}?contact_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,c=await fetch(d,{method:"GET",headers:{Accept:"application/json"},signal:i.signal});if(!c.ok)return clearTimeout(l),m.warn(`Contact Type fetch returned ${c.status} for ${e}`),cn.set(e,{type:null,failedAt:Date.now()}),null;let p=await c.json();clearTimeout(l);let b=(p.contact_type||"").toLowerCase().trim()||null;return cn.set(e,{type:b}),m.debug(`Resolved Contact Type for ${e}: ${b??"(unset)"}`),b}catch(d){return clearTimeout(l),m.warn(`Contact Type fetch failed for ${e}:`,d),cn.set(e,{type:null,failedAt:Date.now()}),null}})();rs.set(e,s);try{return await s}finally{rs.delete(e)}},qe=e=>e==="buyer"?"buyer":e==="seller"?"seller":e==="agent"||e==="closing_agent"||e==="closing_office"||e==="vendor"||e==="tenant"?"other":"seller";var R=(e,t={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let l=a.querySelector(e);if(l){s(l);return}let d,c,p=()=>{d!==void 0&&window.clearTimeout(d),c!==void 0&&window.clearInterval(c)};c=window.setInterval(()=>{let b=a.querySelector(e);b&&(p(),s(b))},r),d=window.setTimeout(()=>{p(),m.warn(`waitForElement timed out for selector: ${e}`),i(new Error(`Selector not found within ${o}ms: ${e}`))},o)})};var Gt="https://services.leadconnectorhq.com",cd="__WS_CRM_CAPTURED_AUTH";var pn=()=>{try{let e=localStorage.getItem(cd);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>3e6?(localStorage.removeItem(cd),null):t:null}catch{return null}},$u=()=>{let e=pn();if(!e)return null;let t={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(t["token-id"]=e.tokenId),t},it=async(e,t={})=>{let o=$u();if(!o)return null;try{return await fetch(e,{...t,headers:{...o,...t.headers??{}}})}catch{return null}};var Tu=/^[A-Za-z0-9]{15,30}$/,$t=e=>typeof e=="string"&&Tu.test(e),mn=e=>{try{let t=e.split(".");if(t.length!==3)return null;let o=t[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},Cu=()=>{let e=window.WS_CRM_USER_ID;return $t(e)?e:null},Su=()=>{let e=window,t=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let o of t)if($t(o))return o;return null},Lu=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=mn(t);if(!o)return null;let r=o.uid;if($t(r))return r;let a=o.claims;if(a&&$t(a.user_id))return a.user_id}catch{}return null},Au=()=>{try{let e=pn();if(!e?.authorization)return null;let t=e.authorization.replace(/^Bearer\s+/i,""),o=mn(t);if(!o)return null;if(o.authClass==="User"&&$t(o.authClassId))return o.authClassId;if($t(o.primaryAuthClassId))return o.primaryAuthClassId}catch{}return null},Mu=()=>{try{let e=["user","tokenUser","currentUser","ghl_user"];for(let t of e){let o=localStorage.getItem(t);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if($t(a))return a}catch{}}}catch{}return null},H=()=>Cu()||Lu()||Au()||Su()||Mu()||null,Iu=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e;return mn(t)}catch{return null}},Ou=()=>{try{let e=pn();return e?.authorization?mn(e.authorization.replace(/^Bearer\s+/i,"")):null}catch{return null}},pd=e=>e?e.authClass==="Company"?!0:(e.claims??e).type==="agency":!1,Pu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/user/agency-check",md="ws-crm-agency-verdict",Bu=7*24*60*60*1e3,as=()=>{try{let e=localStorage.getItem(md);if(!e)return null;let t=JSON.parse(e);return!t||typeof t.isAgency!="boolean"||!t.uid||Date.now()-(t.ts||0)>Bu?null:t}catch{return null}},ns=!1,Hu=()=>{if(ns)return;let e=H();if(!e)return;let t=as();t&&t.uid===e||(ns=!0,fetch(Pu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"omit"}).then(o=>o.ok?o.json():Promise.reject(new Error(`HTTP ${o.status}`))).then(o=>{if(!o?.ok||typeof o.isAgency!="boolean")return;let r=as(),a=!r||r.uid!==e||r.isAgency!==o.isAgency;try{localStorage.setItem(md,JSON.stringify({uid:e,isAgency:o.isAgency,ts:Date.now()}))}catch{}m.info(`[user-id] agency verdict for ${e}: ${o.isAgency}`),a&&window.dispatchEvent(new CustomEvent("ws-crm-agency-changed"))}).catch(o=>m.debug("[user-id] agency check failed (JWT signals still apply):",o)).finally(()=>{ns=!1}))},lt=()=>{let e=window.WS_CRM_FORCE_AGENCY;if(typeof e=="boolean")return e;if(pd(Iu())||pd(Ou()))return!0;Hu();let t=as();if(!t)return!1;let o=H();return o?t.uid===o&&t.isAgency:t.isAgency};var _d="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",Du=`${_d}/active-follow-up-get`,Ru=`${_d}/active-follow-up-set`,Tt="ws-crm-active-follow-up-button",is={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"SMS Drip Active",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"No Active SMS Drip",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},Nu=()=>{let e=U();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},Fu=async e=>{let t=await fetch(Du,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId}),credentials:"omit"});if(!t.ok)throw new Error(`Get webhook returned ${t.status} ${t.statusText}`);return await t.json()},zu=async(e,t)=>{let o=await fetch(Ru,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,triggered_by_user_id:t??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},Ct=(e,t)=>{let o=is[t];e.dataset.state=t,e.disabled=!o.clickable,e.style.cursor=o.clickable?"pointer":"default",e.style.background=o.bg,e.style.borderColor=o.border,e.style.color=o.color;let r=e.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=e.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},bd=e=>{let t=document.createElement("button");return t.type="button",t.id=Tt,t.dataset.contactId=e,t.style.cssText=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: ${n.slate};
    color: ${n.ash};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    font-family: ${h.sans};
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
  `,Ct(t,"loading"),t.addEventListener("click",async()=>{if(t.dataset.state!=="amber")return;let r=Nu();if(!(!r||r.contactId!==e)){Ct(t,"blue"),t.style.transform="scale(0.97)",setTimeout(()=>t.style.transform="",120);try{let a=await zu(r,H()),s=a&&a.state&&a.state in is?a.state:"blue";Ct(t,s),m.info(`Active Follow Up set for ${e} \u2192 ${s}`)}catch(a){m.error("Active Follow Up Set webhook failed",a),Ct(t,"error"),setTimeout(()=>void un(t,r),4e3)}}}),t},qu=3e4,un=async(e,t)=>{e.dataset.lastRefreshAt=String(Date.now()),Ct(e,"loading");try{let o=await Fu(t),r=o&&o.state&&o.state in is?o.state:"gray",a=document.getElementById(Tt);if(!a||a.dataset.contactId!==t.contactId)return;Ct(a,r)}catch(o){m.warn("Active Follow Up Get webhook failed",o),delete e.dataset.lastRefreshAt,Ct(e,"error")}},ju=[".central-panel","[class*='central-panel']"],ss="ws-crm-contact-actions-bar",Uu=async()=>{for(let e of ju)try{let t=await R(e,{timeoutMs:3e3});if(t)return t}catch{}try{return(await R("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Wu=async(e,t)=>{let o=t.querySelector(`#${ss}`);if(!o)try{o=await R(`#${ss}`,{timeoutMs:Et+2e3,root:t})}catch{o=null}if(o){let s=t.querySelector("#ws-crm-afu-wrap");return s&&s.remove(),e.style.order="2",o.appendChild(e),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=t.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let s=t.querySelector(`#${ss}`);s&&s.parentElement===t?t.insertBefore(a,s.nextSibling):t.insertBefore(a,t.firstChild)}return a.appendChild(e),{container:a,placement:"fallback"}},Gu=()=>{let e=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!e)return null;let t=e;for(let o=0;o<8&&!(!t||!t.parentElement);o++){let r=t.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let s=r.children[1];return s instanceof HTMLElement?s:r}t=r}return null},Ku=(e,t)=>{e.style.marginRight="4px",t.insertBefore(e,t.firstChild)},Vu=async e=>{if(e==="url"){let o=await Uu();return o?{kind:"contact-detail",target:o}:null}let t=Gu();return t?{kind:"conversations",target:t}:null},ud=async(e,t)=>{if(t.kind==="contact-detail"){let{placement:o}=await Wu(e,t.target);return o}return Ku(e,t.target),"conversations-header"},Yu=async()=>{let e=U();if(!e||!e.locationId){document.getElementById(Tt)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let t={contactId:e.contactId,tenantId:e.locationId},o=document.getElementById(Tt);if(o&&o.dataset.contactId===t.contactId){let d=Number(o.dataset.lastRefreshAt||0);Date.now()-d>=qu&&un(o,t);return}o&&o.remove();let r=await Vu(e.source);if(!r){m.warn(`Active Follow Up: no mount target on ${e.source}-source page`);return}let a=U();if(!a||a.contactId!==t.contactId)return;let s=bd(t.contactId),i=await ud(s,r);m.debug(`Active Follow Up mounted (${r.kind}/${i}) for ${t.contactId}`),hd();let l=document.getElementById(Tt)??s;un(l,t),bn?.disconnect(),bn=new MutationObserver(()=>{let d=document.getElementById(Tt);if(!(U()?.contactId===t.contactId)){bn?.disconnect();return}if(!d){let p=bd(t.contactId);ud(p,r).then(()=>{hd(),un(p,t)}),m.debug(`Active Follow Up re-mounted after wipe for ${t.contactId}`)}}),bn.observe(r.target,{childList:!0})},bn=null,zo=null,yd=()=>{let e=U()?.contactId??null;if(zo&&zo.contactId===e)return;let t=Yu().finally(()=>{zo?.promise===t&&(zo=null)});zo={contactId:e,promise:t}},hd=()=>{let e=document.querySelectorAll(`#${Tt}`);if(!(e.length<=1)){m.debug(`Active Follow Up: found ${e.length} duplicate buttons, keeping first, removing ${e.length-1}`);for(let t=1;t<e.length;t++)e[t].remove()}};var Ju="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/analytics/compute",Qu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/callstats/sweep-run",hn="ws-crm-analytics-overlay",Zu=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"this_week",label:"This week"},{key:"last_week",label:"Last week"},{key:"this_month",label:"This month"},{key:"last_month",label:"Last month"},{key:"last_365",label:"Last 365 days"},{key:"all_time",label:"All time"},{key:"custom",label:"Custom"}],Xu=[{key:"company",label:"Company"},{key:"acq",label:"Acquisitions"},{key:"dispo",label:"Disposition"},{key:"marketing",label:"Marketing"},{key:"tc",label:"Transactions"},{key:"velocity",label:"Velocity"}],q={open:!1,range:"this_month",customStart:"",customEnd:"",tab:"company",loading:!1,error:null,data:null,cache:new Map},ie=e=>{let t=Number(e)||0;return"$"+Math.round(t).toLocaleString("en-US")},z=e=>(Number(e)||0).toLocaleString("en-US"),ds=e=>{let t=Number(e);return!Number.isFinite(t)||t<=0?"\u2014":new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},jo=e=>{let t=Math.round(Number(e)||0);if(t<60)return`${t}s`;let o=Math.floor(t/3600),r=Math.round(t%3600/60);return o>0?`${o}h ${r}m`:`${r}m`},eh=()=>`${q.range}|${q.customStart}|${q.customEnd}`,St=async(e=!1)=>{let t=eh();if(!e&&q.cache.has(t)){q.data=q.cache.get(t),q.error=null,Lt();return}let o=J();if(!o){q.error="Could not resolve the sub-account id from the URL.",Lt();return}q.loading=!0,q.error=null,Lt();try{let r={tenant_id:o,range:q.range,tz_offset_minutes:new Date().getTimezoneOffset()};q.range==="custom"&&(r.start=q.customStart,r.end=q.customEnd);let a=await fetch(Ju,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await a.json();if(!s||s.ok===!1)throw new Error(s&&s.error||`HTTP ${a.status}`);q.data=s,q.cache.set(t,s)}catch(r){q.error=r instanceof Error?r.message:String(r)}finally{q.loading=!1,Lt()}},D=(e,t,o)=>{let r=document.createElement(e);return r.style.cssText=t,o!==void 0&&(r.innerHTML=o),r},pe=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Kt=`background:${n.graphite};border:1px solid ${n.slate};border-radius:${y.lg};padding:16px 18px;min-width:0;`,yn=`font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin:0 0 12px;`,ge=(e,t,o)=>{let r=D("div",Kt+"flex:1;min-width:150px;");return r.appendChild(D("div",yn+"margin-bottom:8px;",pe(e))),r.appendChild(D("div",`font-family:${h.sans};font-size:24px;font-weight:600;color:${n.bone};line-height:1.1;`,pe(t))),o&&r.appendChild(D("div",`font-family:${h.sans};font-size:11px;color:${n.coolGray};margin-top:6px;`,pe(o))),r},de=(e,t)=>{let o=D("div",Kt);if(o.appendChild(D("div",yn,pe(e))),!t.length)return o.appendChild(D("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),o;let r=Math.max(...t.map(a=>a.barVal),1);for(let a of t.slice(0,12)){let s=D("div","margin:0 0 10px;"),i=D("div","display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;");i.appendChild(D("span",`font-size:12px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,pe(a.label)));let l=D("span",`font-size:12px;color:${n.bone};font-weight:600;white-space:nowrap;`,pe(a.primary)+(a.secondary?` <span style="color:${n.coolGray};font-weight:400;">${pe(a.secondary)}</span>`:""));i.appendChild(l),s.appendChild(i);let d=D("div",`height:6px;background:${n.slate};border-radius:3px;overflow:hidden;`);d.appendChild(D("div",`height:100%;width:${Math.max(2,Math.round(a.barVal/r*100))}%;background:${n.emerald};border-radius:3px;`)),s.appendChild(d),o.appendChild(s)}return t.length>12&&o.appendChild(D("div",`font-size:11px;color:${n.coolGray};`,`+${t.length-12} more`)),o},_n=(e,t,o)=>{let r=D("div",Kt+"overflow-x:auto;");if(r.appendChild(D("div",yn,pe(e))),!o.length)return r.appendChild(D("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),r;let a=`text-align:left;padding:6px 10px;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,s=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`,i=`<table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr>${t.map(l=>`<th style="${a}">${pe(l)}</th>`).join("")}</tr></thead>
    <tbody>${o.map(l=>`<tr>${l.map(d=>`<td style="${s}">${pe(d)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;return r.appendChild(D("div","",i)),r},le=(e,t)=>{let o=D("div",`display:grid;grid-template-columns:${e};gap:14px;margin-bottom:14px;`);for(let r of t)o.appendChild(r);return o},Uo=e=>{let t=D("div","display:flex;flex-wrap:wrap;gap:14px;margin-bottom:14px;");for(let o of e)t.appendChild(o);return t},Ze=e=>(e||[]).map(t=>({label:t.label,primary:z(t.count),barVal:t.count})),th=e=>(e||[]).map(t=>({label:t.label,primary:ie(t.sum),secondary:`\xB7 ${z(t.count)} deal${t.count===1?"":"s"}`,barVal:t.sum})),fd=(e,t)=>{let o=e.calls||{};if(!o.available)return[D("div",`${Kt}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Call metrics unavailable.</strong> ${pe(o.note||"CallStats.Sweep runs every 30 minutes \u2014 check back shortly.")}`)];let r=t==="acq"?"Seller":"Buyer",a=o[t]||[],s=a.filter(c=>c.dials>0||c.connects>0||c.inbound>0).map(c=>({label:c.label,primary:`${z(c.dials)} dials`,secondary:`\xB7 ${z(c.connects)} connected \xB7 ${z(c.inbound)} inbound`,barVal:c.dials})),i=a.filter(c=>c.talk_seconds>0).map(c=>({label:c.label,primary:jo(c.talk_seconds),secondary:c.talk_per_contract_seconds!=null?`\xB7 ${jo(c.talk_per_contract_seconds)} per contract`:"",barVal:c.talk_seconds})),l=[de(`${r} calls per rep (dials)`,s),de(`${r} talk time per rep`,i)],d=(o.other||[]).filter(c=>c.dials>0||c.talk_seconds>0);return d.length&&l.push(de("Unclassified calls per rep (contact is neither seller nor buyer)",d.map(c=>({label:c.label,primary:`${z(c.dials)} dials`,secondary:`\xB7 ${jo(c.talk_seconds)} talk`,barVal:c.dials})))),l},oh=(e,t)=>{let o=e.company||{},r=o.left_to_close_this_month||{};t.appendChild(Uo([ge("Closed revenue \u2014 365d",ie(o.closed_revenue_365),`${z(o.closed_count_365)} closings`),ge("Avg deal size \u2014 365d",ie(o.avg_deal_size_365)),ge("Left to close this month",ie(r.sum),`${z(r.count)} deal(s)`+(r.missing_est_close?` \xB7 ${z(r.missing_est_close)} missing est. close date`:"")),ge("New leads",z(o.total_leads),"in selected range")])),t.appendChild(Uo([ge("Contracts",`${z((o.contracts||{}).count)}`,ie((o.contracts||{}).sum)+" projected"),ge("Assignments",`${z((o.assignments||{}).count)}`,ie((o.assignments||{}).sum)+" assigned"),ge("Deals closed",`${z((o.closed||{}).count)}`,ie((o.closed||{}).sum)+" closed")])),t.appendChild(le("1fr 1fr 1fr",[de("New leads by source",Ze(o.new_leads_by_source)),de("Contacts per closer (all time)",Ze(o.contacts_per_closer)),de("Dispo deals per rep (all time)",Ze(o.dispo_deals_per_rep))]))},rh=(e,t)=>{let o=e.acq||{};t.appendChild(le("1fr 1fr",[de("Offers made per rep",Ze(o.offers_per_rep)),de("Contracts acquired per closer",(o.contracts_per_closer||[]).map(s=>({label:s.label,primary:z(s.count),secondary:`\xB7 ${ie(s.sum)} projected`,barVal:s.count})))])),t.appendChild(le("1fr 1fr",[de("Projected revenue per closer (open escrows)",th(o.projected_per_closer)),de("Closed revenue per closer",(o.closed_per_closer||[]).map(s=>({label:s.label,primary:ie(s.sum),secondary:`\xB7 ${z(s.count)} closings \xB7 avg ${ie(s.avg)}`,barVal:s.sum})))]));let r=fd(e,"acq");t.appendChild(r.length>=2?le("1fr 1fr",r.slice(0,2)):le("1fr",r)),r.length>2&&t.appendChild(le("1fr",r.slice(2)));let a=e.dialer||{};if(a.available&&(a.per_rep||[]).length){let s=c=>c==null?"\u2014":`<span style="color:${c>=50?n.crimson:c>=30?n.amber:n.bone};font-weight:600;">${c}%</span>`,i=D("div",Kt+"overflow-x:auto;");i.appendChild(D("div",yn,"Endless dialer \u2014 activity & skips per rep"));let l=`text-align:left;padding:6px 10px;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,d=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`;i.appendChild(D("div","",`<table style="border-collapse:collapse;width:100%;min-width:420px;">
      <thead><tr>${["Rep","Served","Dialed","Skipped","Skip rate"].map(c=>`<th style="${l}">${pe(c)}</th>`).join("")}</tr></thead>
      <tbody>${a.per_rep.map(c=>`<tr><td style="${d}">${pe(c.label)}</td><td style="${d}">${z(c.dispensed)}</td><td style="${d}">${z(c.dialed)}</td><td style="${d}">${z(c.skipped)}</td><td style="${d}">${s(c.skip_rate_pct)}</td></tr>`).join("")}</tbody>
    </table>`)),t.appendChild(le("1fr",[i]))}},nh=(e,t)=>{let o=e.dispo||{};t.appendChild(le("1fr 1fr",[de("Buyers qualified per dispo rep",Ze(o.buyers_qualified_per_rep)),de("Assignments per dispo rep",(o.assignments_per_rep||[]).map(a=>({label:a.label,primary:z(a.count),secondary:`\xB7 ${ie(a.sum)} assigned`,barVal:a.count})))])),t.appendChild(le("1fr",[de("Closed revenue per dispo rep",(o.closed_per_dispo||[]).map(a=>({label:a.label,primary:ie(a.sum),secondary:`\xB7 ${z(a.count)} closings \xB7 avg ${ie(a.avg)}`,barVal:a.sum})))]));let r=fd(e,"dispo");t.appendChild(r.length>=2?le("1fr 1fr",r.slice(0,2)):le("1fr",r)),r.length>2&&t.appendChild(le("1fr",r.slice(2)))},ah=(e,t)=>{let o=e.marketing||{},r=o.lead_quality||{};t.appendChild(Uo([ge("Open leads",z(r.open)),ge("Won (under contract+)",z(r.won)),ge("Lost / dead",z(r.lost))]));let a=(o.per_channel||[]).map(i=>[i.label,z(i.leads),z(i.offers),z(i.contracts),`${z(i.assigned_count)} / ${ie(i.assigned_sum)}`,`${z(i.closed_count)} / ${ie(i.closed_sum)}`,ie(i.avg_deal)]);t.appendChild(le("1fr",[_n("Per marketing channel",["Channel","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],a)]));let s=(o.per_city||[]).slice(0,15).map(i=>[i.label,z(i.leads),z(i.offers),z(i.contracts),`${z(i.assigned_count)} / ${ie(i.assigned_sum)}`,`${z(i.closed_count)} / ${ie(i.closed_sum)}`,ie(i.avg_deal)]);t.appendChild(le("1fr",[_n("Per city (top 15 by leads)",["City","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],s)])),t.appendChild(le("1fr 1fr",[de("Dead leads by channel",Ze(o.dead_by_channel)),de("Dead leads by city",Ze(o.dead_by_city))]))},sh=(e,t)=>{let o=e.tc||{};t.appendChild(Uo([ge("Contracted",z(o.contracted),"in selected range"),ge("Closed",z(o.closed)),ge("Lost in escrow",z(o.lost_in_escrow)),ge("Fall-out rate",o.fallout_rate_pct==null?"\u2014":`${o.fallout_rate_pct}%`,"lost \xF7 (closed + lost)")])),t.appendChild(le("1fr 1fr",[de("Deals per TC (contracted in range)",Ze(o.per_tc)),de("Open escrows by stage",Ze(o.open_by_stage))]));let r=(o.board||[]).map(a=>[a.name,a.stage,a.owner,ie(a.value),ds(a.est_close),a.acq_closer,a.dispo_rep]);t.appendChild(le("1fr",[_n("TC deal board (open escrows)",["Deal","Stage","TC","Value","Est. close","Closer","Dispo"],r)]))},ih=(e,t)=>{let o=e.velocity||{},r=o.offers_per_contract||{};t.appendChild(Uo([ge("Offers per contract",r.ratio==null?"\u2014":String(r.ratio),`${z(r.offers)} offers \xB7 ${z(r.contracts)} contracts`)]));let a=l=>(l||[]).map(d=>({label:d.label,primary:`${d.avg_days} days`,secondary:`\xB7 ${z(d.n)} deal${d.n===1?"":"s"}`,barVal:d.avg_days}));t.appendChild(le("1fr 1fr",[de("Days lead \u2192 contract, by source",a(o.days_to_contract_by_source)),de("Days contract \u2192 close, by source",a(o.days_contract_to_close_by_source))]));let s=(o.leads_per_contract_by_source||[]).map(l=>[l.label,z(l.leads),z(l.contracts),l.ratio==null?"\u2014":`${l.ratio} : 1`]);t.appendChild(le("1fr",[_n("Leads per contract, by source",["Source","Leads","Contracts","Leads : contract"],s)]));let i=o.talk_time||{};if(i.available){let l=(i.per_rep||[]).filter(d=>d.talk_seconds>0).map(d=>({label:d.label,primary:d.talk_per_contract_seconds!=null?`${jo(d.talk_per_contract_seconds)} / contract`:"\u2014",secondary:`\xB7 ${jo(d.talk_seconds)} total \xB7 ${z(d.contracts)} contract${d.contracts===1?"":"s"}`,barVal:d.talk_per_contract_seconds!=null?d.talk_per_contract_seconds:0}));t.appendChild(le("1fr",[de("Talk time per contract per rep",l)]))}else t.appendChild(D("div",`${Kt}border-left:3px solid ${n.amber};border-radius:0 ${y.lg} ${y.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Talk time per contract per rep \u2014 pending first sweep.</strong> ${pe(i.note||"")}`))},qo=e=>`padding:5px 12px;border-radius:${y.pill};border:1px solid ${e?n.emeraldBorder:n.steel};background:${e?n.emeraldGlow:"transparent"};color:${e?n.emerald:n.ash};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;`,Lt=()=>{let e=document.getElementById(hn);if(!e)return;let t=e.querySelector("[data-ws-analytics-body]"),o=e.querySelector("[data-ws-analytics-controls]");if(!t||!o)return;o.innerHTML="";let r=D("div","display:flex;flex-wrap:wrap;gap:6px;align-items:center;");for(let u of Zu){let _=D("button",qo(q.range===u.key),pe(u.label));_.onclick=()=>{q.range=u.key,u.key!=="custom"?St():Lt()},r.appendChild(_)}if(q.range==="custom"){let u=`background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:12px;padding:4px 8px;color-scheme:dark;`,_=D("input",u);_.type="date",_.value=q.customStart;let v=D("input",u);v.type="date",v.value=q.customEnd;let f=D("button",qo(!0),"Apply");f.onclick=()=>{q.customStart=_.value,q.customEnd=v.value,q.customStart&&q.customEnd&&St()},r.appendChild(_),r.appendChild(v),r.appendChild(f)}let a=D("button",qo(!1)+"margin-left:auto;","\u21BB Refresh");a.onclick=()=>void St(!0),r.appendChild(a),o.appendChild(r);let s=D("div","display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;");for(let u of Xu){let _=D("button",qo(q.tab===u.key),pe(u.label));_.onclick=()=>{q.tab=u.key,Lt()},s.appendChild(_)}if(o.appendChild(s),t.innerHTML="",q.loading){t.appendChild(D("div",`padding:60px;text-align:center;color:${n.ash};font-family:${h.sans};font-size:13px;`,"Computing analytics\u2026"));return}if(q.error){let u=D("div",`padding:40px;text-align:center;color:${n.crimson};font-family:${h.sans};font-size:13px;`,`Couldn't load analytics: ${pe(q.error)}`),_=D("button",qo(!0)+"margin:14px auto 0;display:inline-block;","Retry");_.onclick=()=>void St(!0);let v=D("div","text-align:center;");v.appendChild(u),v.appendChild(_),t.appendChild(v);return}let i=q.data;if(!i){St();return}let l=i.range||{},d=Number((i.calls||{}).last_swept)||0,c=d>0?` \xB7 calls as of ${new Date(d).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})} (syncing)`:"";t.appendChild(D("div",`font-family:${h.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.coolGray};margin:0 0 12px;`,`${pe(l.label||"")} \xB7 ${ds(l.start)} \u2192 ${ds(l.end)} \xB7 ${z((i.meta||{}).opps)} opps \xB7 ${z((i.meta||{}).contacts)} contacts${c}`));let p=i.insights||[];if(p.length){let u=D("div","display:flex;flex-direction:column;gap:6px;margin:0 0 16px;");for(let _ of p.slice(0,6)){let v=_.level==="warn";u.appendChild(D("div",`padding:8px 12px;border-left:3px solid ${v?n.amber:n.blue};background:${v?n.amberGlow:n.blueGlow};border-radius:0 ${y.sm} ${y.sm} 0;font-family:${h.sans};font-size:12px;color:${n.bone};`,pe(_.text)))}t.appendChild(u)}let b=D("div","");q.tab==="company"?oh(i,b):q.tab==="acq"?rh(i,b):q.tab==="dispo"?nh(i,b):q.tab==="marketing"?ah(i,b):q.tab==="tc"?sh(i,b):ih(i,b),t.appendChild(b)},At=null,lh=()=>{let e=J();if(e){try{fetch(Qu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"sync",tenant_id:e})}).catch(()=>{})}catch{}At&&window.clearTimeout(At),At=window.setTimeout(()=>{At=null,q.open&&(q.cache.clear(),St(!0))},9e4)}},cs=()=>{if(document.getElementById(hn))return;q.open=!0,lh();let e=D("div",`position:fixed;inset:0;z-index:100000;background:${n.obsidian};display:flex;flex-direction:column;font-family:${h.sans};`);e.id=hn;let t=D("div",`padding:18px 24px 14px;border-bottom:1px solid ${n.slate};flex-shrink:0;`),o=D("div","display:flex;align-items:center;gap:12px;margin-bottom:12px;");o.appendChild(D("div",`font-family:${h.mono};font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${n.bone};`,`Analytics <span style="color:${n.emerald};">\xB7</span> <span style="color:${n.ash};">REInvest OS</span>`));let r=D("button",`margin-left:auto;background:transparent;border:1px solid ${n.steel};border-radius:${y.sm};color:${n.ash};font-size:14px;line-height:1;padding:6px 10px;cursor:pointer;`,"\u2715");r.onclick=wd,o.appendChild(r),t.appendChild(o),t.appendChild(D("div","","")).setAttribute("data-ws-analytics-controls","1"),e.appendChild(t);let a=D("div","flex:1;overflow-y:auto;padding:20px 24px 40px;");a.setAttribute("data-ws-analytics-body","1"),e.appendChild(a),document.body.appendChild(e),document.addEventListener("keydown",xd),Lt(),q.data||St()},xd=e=>{e.key==="Escape"&&wd()},wd=()=>{q.open=!1,At&&(window.clearTimeout(At),At=null),document.getElementById(hn)?.remove(),document.removeEventListener("keydown",xd)},dh=["/kpis","ws-kpis","ws-analytics"],ch=/\/custom-menu-link\//,ls=!1,vd=()=>{if(ls||!ch.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return dh.some(i=>s.includes(i))});if(r){ls=!0,m.info(`[analytics] custom-menu-link route detected (src=${r.src}) \u2014 opening overlay`);try{history.back()}catch{}setTimeout(()=>{cs(),ls=!1},50);return}e<10&&setTimeout(t,150)};t()},gd=!1,kd=()=>{if(gd)return;gd=!0,Te(()=>setTimeout(vd,50)),vd();let e=()=>{let t=window.location.hash.replace("#","");(t==="ws-analytics"||t==="ws-kpis")&&cs()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_ANALYTICS=()=>cs(),m.info("[analytics] mounted (menu-link route + hash + window trigger)")};var Td="ws-buybox-nav-icon",bs="ws-buybox-panel",Ed="ws-buybox-modal",ph="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",us="https://mcclivetim.github.io/reinvest-os-cdn/geo",vn=null,Wo=null,Go=null,ms=async()=>{if(vn)return vn;try{let e=await fetch(`${us}/states.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return vn=await e.json(),vn}catch(e){return m.error("[buy-box] failed to fetch states.json",e),[]}},mh=async e=>{if(!Wo)try{let t=await fetch(`${us}/counties.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Wo=await t.json()}catch(t){return m.error("[buy-box] failed to fetch counties.json",t),[]}return Wo?.[e]??[]},bh=async e=>{if(!Go)try{let t=await fetch(`${us}/cities.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Go=await t.json()}catch(t){return m.error("[buy-box] failed to fetch cities.json",t),[]}return Go?.[e]??[]},hs=async e=>await(await fetch(ph,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),uh=(e,t)=>hs({tenant_id:e,action:"list",buyer_contact_id:t}),hh=(e,t,o,r)=>hs({tenant_id:e,action:"add",buyer_contact_id:t,geo_level:o,geo_value:r}),_h=(e,t)=>hs({tenant_id:e,action:"remove",entry_id:t}),oe=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),yh=(e,t)=>{let o=t.find(r=>r.code===e);return o?`${o.name} (${e})`:e},vh='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',gh='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',fh="nav.w-13, nav[class*='w-13']",xh=".flex-1.h-full.relative.overflow-hidden.rounded-lg",wh=async()=>{try{return await R(fh,{timeoutMs:2500})}catch{return null}},kh=async()=>{try{return await R(xh,{timeoutMs:2500})}catch{return null}},Eh=e=>e.querySelector("div[class*='bg-contacts-panel']")??null,$h=(e,t)=>{let o=document.createElement("div");return o.id=bs,o.dataset.buyerContactId=t,o.style.cssText=`
    width: 100%; height: 100%;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    display: none;
    flex-direction: column;
    overflow: hidden;
    color: ${n.bone};
    font-family: ${h.sans};
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
        font-family: ${h.sans}; font-size: 13px; font-weight: 600;
      ">+ Add Area</button>
    </div>
    <div id="ws-buybox-body" style="
      flex: 1; overflow-y: auto; padding: 14px 16px;
      font-size: 13px; color: ${n.bone};
    ">
      <div style="color: ${n.ash}; font-style: italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{Lh(e,t,()=>_s(e,t))}),o},_s=async(e,t)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([uh(e,t),ms()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${oe(r.error||"Failed to load buy-box entries")}</div>`;return}Th(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,e,t)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${oe(r.message)}</div>`}},Th=(e,t,o,r,a)=>{if(t.state.length+t.county.length+t.city.length+t.zip.length===0){e.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let l=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(d=>t[d.key].length>0).map(d=>{let c=t[d.key].map(p=>{let b=d.key==="state"?yh(p.geo_value,o):p.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${oe(b)}</span>
              <button type="button" data-entry-id="${oe(p.id)}" data-entry-label="${oe(b)}" class="ws-buybox-remove" aria-label="Remove ${oe(b)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${y.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${gh}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${h.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${oe(d.label)} (${t[d.key].length})</div>
          ${c}
        </div>
      `}).join("");e.innerHTML=l,e.querySelectorAll(".ws-buybox-remove").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.color=n.crimson}),d.addEventListener("mouseleave",()=>{d.style.color=n.ash}),d.addEventListener("click",()=>{let c=d.dataset.entryId||"",p=d.dataset.entryLabel||"this area";confirm(`Remove "${p}" from this buyer's buy-box?`)&&(d.disabled=!0,_h(r,c).then(b=>{if(!b.ok){alert(`Failed to remove: ${b.error||"unknown error"}`),d.disabled=!1;return}_s(r,a)}).catch(b=>{alert(`Network error: ${b.message}`),d.disabled=!1}))})})},gn=!1,Cd=(e,t)=>{gn=t;let o=Eh(e.panelArea);console.log(`[buy-box] setActive(${t}) \u2014 nativePanel=${!!o} panel=${!!e.panel} iconBtn=${!!e.iconBtn}`),t?(e.iconBtn.className=Ch,e.iconBtn.dataset.active="true",o&&(e.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),e.panel.style.display="flex",_s(e.tenantId,e.buyerContactId)):(e.iconBtn.className=Sd,delete e.iconBtn.dataset.active,e.panel.style.display="none",o&&(o.style.display=e.nativePanelOriginalDisplay||""))},Sd="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",Ch="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",Sh=e=>{let t=document.createElement("button");return t.id=Td,t.type="button",t.title="Buy-Box",t.setAttribute("aria-label","Buy-Box"),t.className=Sd,t.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${vh.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,t.addEventListener("click",o=>{o.stopPropagation();let r=e();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!gn;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),Cd(r,a)}),t},Lh=(e,t,o)=>{let r=document.getElementById(Ed);r&&r.remove();let a=document.createElement("div");a.id=Ed,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(480px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",w=>{w.target===a&&a.remove()});let i={step:1,granularity:null,stateCode:null,value:null},l=async()=>{if(i.step===1)s.innerHTML=d(),c();else if(i.step===2){s.innerHTML=p();let w=await ms();s.innerHTML=b(w),u(w)}else if(i.step===3)if(i.granularity==="zip")s.innerHTML=g(),k();else if(i.granularity==="state"){let w=await ms();s.innerHTML=v(w),f(w)}else i.granularity==="county"?(s.innerHTML=_(i.stateCode||""),await mh(i.stateCode||""),s.innerHTML=x("County"),$()):i.granularity==="city"&&(s.innerHTML=_(i.stateCode||""),await bh(i.stateCode||""),s.innerHTML=x("City"),$())},d=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(w=>`
        <button type="button" data-granularity="${w}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${y.md};
          padding: 20px 16px; cursor: pointer; font-family: ${h.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${w.charAt(0).toUpperCase()+w.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
    </div>
  `,c=()=>{s.querySelectorAll(".ws-buybox-tile").forEach(w=>{w.addEventListener("mouseenter",()=>{w.style.borderColor=n.emerald,w.style.background=n.emeraldGlow}),w.addEventListener("mouseleave",()=>{w.style.borderColor=n.steel,w.style.background=n.steel}),w.addEventListener("click",()=>{let C=w.dataset.granularity;i.granularity=C,i.step=C==="zip"?3:2,l()})}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},p=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,b=w=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${oe(i.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.sm};
      font-family: ${h.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${y.sm};">
      ${w.map(C=>`
        <div data-state-code="${oe(C.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${oe(C.name)} <span style="color: ${n.ash}; font-family: ${h.mono}; font-size: 11px;">(${oe(C.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
    </div>
  `,u=w=>{let C=s.querySelector("#ws-buybox-state-search"),E=s.querySelectorAll(".ws-buybox-state-row");E.forEach(L=>{L.addEventListener("mouseenter",()=>{L.style.background=n.emeraldGlow}),L.addEventListener("mouseleave",()=>{L.style.background="transparent"}),L.addEventListener("click",()=>{i.stateCode=L.dataset.stateCode||"",i.step=3,l()})}),C?.addEventListener("input",()=>{let L=(C.value||"").toLowerCase().trim();w.forEach((A,M)=>{let O=E[M];if(!O)return;let P=!L||A.name.toLowerCase().includes(L)||A.code.toLowerCase()===L;O.style.display=P?"":"none"})}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>C?.focus(),0)},_=w=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${oe(w)}\u2026</div>
  `,v=w=>{let C=w.find(E=>E.code===i.stateCode);return`
      <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${oe(C?C.name:i.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${C?oe(C.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add ${C?oe(C.name):"State"}</button>
        </div>
      </div>
    `},f=w=>{s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>T(i.stateCode||""))},x=w=>{let C=i.granularity==="county"?Wo?.[i.stateCode||""]??[]:Go?.[i.stateCode||""]??[];return`
      <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${oe(w)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${C.length.toLocaleString()} ${oe(w).toLowerCase()}s in ${oe(i.stateCode||"")}.</div>
      <input id="ws-buybox-value-search" type="text" placeholder="Start typing\u2026" autofocus style="
        width: 100%; box-sizing: border-box; padding: 8px 12px;
        background: ${n.obsidian}; color: ${n.bone};
        border: 1px solid ${n.steel}; border-radius: ${y.sm};
        font-family: ${h.sans}; font-size: 13px; margin-bottom: 10px;
      ">
      <div id="ws-buybox-value-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${y.sm};"></div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-top: 8px;"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 12px;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
      </div>
    `},$=()=>{let w=i.granularity==="county"?Wo?.[i.stateCode||""]??[]:Go?.[i.stateCode||""]??[],C=s.querySelector("#ws-buybox-value-search"),E=s.querySelector("#ws-buybox-value-list");if(!C||!E)return;let L=A=>{let M=A.toLowerCase().trim();if(!M){E.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let O=w.filter(P=>P.toLowerCase().includes(M)).slice(0,50);if(O.length===0){E.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${oe(i.stateCode||"")}.</div>`;return}E.innerHTML=O.map(P=>`
        <div data-value="${oe(P)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${oe(P)}
        </div>
      `).join(""),E.querySelectorAll(".ws-buybox-value-row").forEach(P=>{P.addEventListener("mouseenter",()=>{P.style.background=n.emeraldGlow}),P.addEventListener("mouseleave",()=>{P.style.background="transparent"}),P.addEventListener("click",()=>{i.value=P.dataset.value||"",T(i.value)})})};C.addEventListener("input",()=>L(C.value)),L(""),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>C.focus(),0)},g=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Enter Zip</div>
    <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">5-digit US zip code. Zips don't need a state (most are unique to one state anyway).</div>
    <input id="ws-buybox-zip" type="text" inputmode="numeric" placeholder="33101" autofocus maxlength="5" style="
      width: 100%; box-sizing: border-box; padding: 12px 14px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.sm};
      font-family: ${h.mono}; font-size: 18px; text-align: center; letter-spacing: 0.12em;
      margin-bottom: 10px;
    ">
    <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: space-between;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
      <div style="display: flex; gap: 8px;">
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
        <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add Zip</button>
      </div>
    </div>
  `,k=()=>{let w=s.querySelector("#ws-buybox-zip"),C=s.querySelector("#ws-buybox-err");w&&(w.addEventListener("input",()=>{w.value=w.value.replace(/\D/g,"").slice(0,5),C&&(C.textContent="")}),w.addEventListener("keydown",E=>{E.key==="Enter"&&(E.preventDefault(),S())}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void S()),setTimeout(()=>w.focus(),0))},S=async()=>{let w=s.querySelector("#ws-buybox-zip"),C=s.querySelector("#ws-buybox-err"),E=(w?.value||"").trim();if(!/^\d{5}$/.test(E)){C&&(C.textContent="Zip must be exactly 5 digits.");return}await T(E)},T=async w=>{if(!i.granularity||!w)return;let C=s.querySelector("#ws-buybox-err"),E=s.querySelector("#ws-buybox-save");E&&(E.disabled=!0,E.textContent="Adding\u2026"),C&&(C.textContent="");try{let L=await hh(e,t,i.granularity,w);if(!L.ok){C&&(C.textContent=L.error||"Failed to add entry."),E&&(E.disabled=!1,E.textContent="Add");return}o(),s.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${oe(w)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${L.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{i.step=1,i.granularity=null,i.stateCode=null,i.value=null,l()},900)}catch(L){C&&(C.textContent=`Network error: ${L.message}`),E&&(E.disabled=!1,E.textContent="Add")}};l()},ps=!1,Vt=null,Ko=null,$d=()=>{document.getElementById(Td)?.remove(),document.getElementById(bs)?.remove(),Ko&&Vt&&Vt.nav.removeEventListener("click",Ko,!0),Ko=null,Vt=null,gn=!1},Ld=()=>{Ah()},Ah=async()=>{if(!ps){ps=!0;try{let e=U();if(!e){$d();return}let t=document.getElementById(bs);if(t&&t.dataset.buyerContactId===e.contactId&&Vt)return;$d();let o=null;try{o=await ze(e.contactId,e.locationId)}catch(b){m.warn("[buy-box] Contact Type fetch failed",b);return}if(qe(o)!=="buyer")return;if(!e.locationId){m.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,s]=await Promise.all([wh(),kh()]);if(!a||!s){m.warn("[buy-box] right-rail nav or panel area not found");return}let i=U();if(!i||i.contactId!==e.contactId)return;let l=$h(e.locationId,e.contactId),d=Sh(()=>Vt),c={buyerContactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l,nativePanelOriginalDisplay:""};Vt=c;let p=a.querySelector(".flex.flex-col.items-center.gap-2");p?p.appendChild(d):a.appendChild(d),s.appendChild(l),Ko=b=>{let u=b.target;if(!u||c.iconBtn.contains(u))return;u.closest("button.sidebar-option-button")&&gn&&Cd(c,!1)},a.addEventListener("click",Ko,!0),m.info(`[buy-box] right-rail mount complete for buyer ${e.contactId}`)}finally{ps=!1}}};var re=".crm-opportunities-modal .ui-modal-heading .description",Ad=new Map,ys=null,vs,Mh=()=>{let e=new Map;for(let[t,{selector:o,cb:r}]of Ad){let a=e.get(o);if(a===void 0&&(a=!!document.querySelector(o),e.set(o,a)),!!a)try{r()}catch(s){m.error(`[arrival-watcher] callback "${t}" threw`,s)}}},ee=(e,t,o)=>{Ad.set(e,{selector:t,cb:o}),!ys&&(ys=new MutationObserver(()=>{vs===void 0&&(vs=window.setTimeout(()=>{vs=void 0,Mh()},300))}),ys.observe(document.body,{childList:!0,subtree:!0}))};var Md="ws-crm-dispo-action-row",te=e=>{let t=document.getElementById(Md);if(t)return t;e.classList.contains("description")&&(e.style.display="flex",e.style.alignItems="center",e.style.gap="12px",e.style.flexWrap="wrap");let o=document.createElement("span");return o.id=Md,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",e.appendChild(o),o};var Ih=e=>{let t=(o,r,a)=>o.style.setProperty(r,a,"important");e.querySelectorAll("input, textarea, select").forEach(o=>{if(o instanceof HTMLInputElement&&o.type==="checkbox")return;t(o,"background-color",n.obsidian),t(o,"color",n.bone),t(o,"-webkit-text-fill-color",n.bone),t(o,"border-color",n.steel);let r=o.previousElementSibling;r instanceof HTMLElement&&r.tagName==="DIV"&&(t(r,"color",n.bone),t(r,"-webkit-text-fill-color",n.bone))}),e.querySelectorAll("div").forEach(o=>{t(o,"background-color","transparent"),t(o,"border-style","none")})},Yt=(e,t=8e3)=>{let o=null,r=()=>{o?.disconnect(),Ih(e),o?.observe(e,{attributes:!0,attributeFilter:["style"],subtree:!0})};o=new MutationObserver(r),r(),window.setTimeout(()=>{o?.disconnect(),o=null},t)};var Oh=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],Ph=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,Bh=".hr-card.hr-modal.crm-opportunities-modal",W=()=>{let e=document.querySelector(Bh);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(Ph);if(a){let s=a[1];if(Oh.includes(s))return s}}return null},ne=async(e=2500)=>{let t=Date.now();for(;Date.now()-t<e;){let o=W();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var Hh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",eo="ws-crm-change-primary-wrap",Zt="ws-change-primary-modal",Dh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Rh=/\/v2\/location\/([A-Za-z0-9]+)/,Xt=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Nh=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Jt=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;`,Qt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,Mt=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Fh=async e=>{let t=await fetch(Hh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok)throw new Error(`Webhook returned ${t.status} ${t.statusText}`);let o=await t.json();return Array.isArray(o)?o[0]:o},xs=e=>{document.getElementById(Zt)?.remove();let t=document.createElement("div");t.id=Zt,t.style.cssText=`
    position: fixed; inset: 0; z-index: 1000000;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 94vw); max-height: 90vh; overflow-y: auto;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.lg}; padding: 28px 32px; color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.fixedNewPrimary||null,a=e.addrLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Xt(e.addrLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>',s=r?`<div style="font-size: 14px; margin-bottom: 14px;">New primary contact: <strong>${Xt(r.name||"this contact")}</strong></div>`:`
    <button id="ws-cp-promote" type="button" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:12px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
      <span style="font-size:14px;font-weight:500;display:block;">Promote the existing Second Seller</span>
      <span style="font-size:11px;color:${n.ash};display:block;margin-top:3px;">They're already on this property \u2014 make them the primary contact.</span>
    </button>
    <div style="display:flex;align-items:center;gap:10px;margin: 4px 0 12px;">
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
      <span style="font-size:11px;color:${n.ash};">or add a new person</span>
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Qt("First Name *")}<input id="ws-cp-first" type="text" autocomplete="off" placeholder="Jordan" style="${Jt}"></div>
      <div>${Qt("Last Name")}<input id="ws-cp-last" type="text" autocomplete="off" placeholder="Seller" style="${Jt}"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Qt("Phone")}<input id="ws-cp-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${Jt}"></div>
      <div>${Qt("Email")}<input id="ws-cp-email" type="email" autocomplete="off" placeholder="name@email.com" style="${Jt}"></div>
    </div>`;o.innerHTML=`
    <style id="ws-cp-style">
      #${Zt} input::placeholder, #${Zt} textarea::placeholder {
        color: ${n.ash} !important; -webkit-text-fill-color: ${n.ash} !important; opacity: 1 !important;
      }
      #${Zt} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Change Primary Contact</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Moves the deal to the new decision-maker: the opp, seller roles, deal state, claim, and dial lists all follow. The current primary's conversation history stays on their record.</div>
    ${a}
    ${s}
    <div style="margin-bottom: 12px;">
      ${Qt("Current primary stays\u2026")}
      <select id="ws-cp-old" style="${Jt} cursor: pointer;">
        <option value="seller_2" selected>On the deal as Second Seller (still a signer)</option>
        <option value="detach">Not on title \u2014 detach from the property roles</option>
      </select>
    </div>
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-cp-stop" type="checkbox" checked>
      <span>Stop calling/texting the current primary <span style="color:${n.ash};">(drips end, off dial lists)</span></span>
    </label>
    <div style="margin-bottom: 14px;">
      ${Qt("Note (optional)")}
      <textarea id="ws-cp-note" rows="2" autocomplete="off" placeholder="e.g. Son handles the sale \u2014 mom is on the deed" style="${Jt} resize: vertical;"></textarea>
    </div>
    <div id="ws-cp-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-cp-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-cp-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">${r?"Make Primary":"Change Primary"}</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Yt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-cp-cancel")?.addEventListener("click",()=>t.remove()),window.setTimeout(()=>o.querySelector("#ws-cp-first")?.focus(),0);let i=o.querySelector("#ws-cp-err"),l=c=>{i&&(i.textContent=c)},d=async(c,p)=>{l("");let b=p?.textContent||"";p&&(p.disabled=!0,p.textContent="Working\u2026",p.style.opacity="0.7");try{let u=await Fh({tenant_id:e.tenantId,acq_opp_id:e.acqOppId||void 0,property_record_id:e.propertyRecordId||void 0,new_primary:c,old_disposition:o.querySelector("#ws-cp-old")?.value||"seller_2",stop_old_outreach:o.querySelector("#ws-cp-stop")?.checked??!0,note:(o.querySelector("#ws-cp-note")?.value||"").trim(),triggered_by_user_id:H()||""});if(!u?.ok){l(u?.error||"Something went wrong \u2014 try again."),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1");return}m.info(`Primary contact changed -> ${u.new_primary_contact_id}`),zh(o,u,e),e.onSuccess?.(u)}catch(u){m.error("Change primary failed",u),l(`Network error: ${u instanceof Error?u.message:"request failed"}`),p&&(p.disabled=!1,p.textContent=b,p.style.opacity="1")}};o.querySelector("#ws-cp-promote")?.addEventListener("click",c=>{d({promote_seller_2:!0},c.currentTarget)}),o.querySelector("#ws-cp-submit")?.addEventListener("click",c=>{let p=c.currentTarget;if(r){d({contact_id:r.contactId},p);return}let b=(o.querySelector("#ws-cp-first")?.value||"").trim(),u=(o.querySelector("#ws-cp-last")?.value||"").trim(),_=(o.querySelector("#ws-cp-phone")?.value||"").trim(),v=(o.querySelector("#ws-cp-email")?.value||"").trim().toLowerCase();if(!b){l("First name is required (or use Promote above).");return}let f="";if(_){let x=_.replace(/\D/g,"");if(x.length===11&&x.startsWith("1")&&(x=x.slice(1)),x.length!==10){l("Phone must be a 10-digit US number.");return}f=`+1${x}`}if(v&&!/.+@.+\..+/.test(v)){l("That email doesn't look valid.");return}if(!f&&!v){l("Add a phone or an email for the new primary.");return}d({first_name:b,last_name:u,phone:f,email:v},p)})},zh=(e,t,o)=>{let r=[];t.already_primary?r.push(Mt("Already the primary contact","info")):(r.push(Mt(t.contact_created?"Contact created":"Existing contact reused",t.contact_created?"good":"info")),r.push(Mt(`Deal moved (${(t.opps_moved||[]).map(i=>i.pipeline).join(", ")||"ACQ"})`,"good")),t.old_role==="seller_2"?r.push(Mt("Old primary kept as Second Seller","info")):t.old_role==="detached"&&r.push(Mt("Old primary detached from roles","info")),(t.call_status_applied||"").startsWith("copied:")&&r.push(Mt(`Inherited: ${Xt((t.call_status_applied||"").slice(7))}`,"good")),r.push(Mt(t.outreach_stopped?"Old primary's outreach stopped":"Old primary still in rotation",t.outreach_stopped?"good":"warn")));let a=(t.warnings||[]).map(i=>`<div style="font-size:11px;color:${n.amber};margin-top:4px;">\xB7 ${Xt(i)}</div>`).join(""),s=t.new_primary_contact_id?`${window.location.origin}/v2/location/${encodeURIComponent(o.tenantId)}/contacts/detail/${encodeURIComponent(t.new_primary_contact_id)}`:"";e.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Primary Contact Changed</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Xt(t.new_primary_name||"New primary")} now owns this deal</div>
    <div style="line-height: 1;">${r.join("")}</div>
    ${a}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      ${s?`<a href="${Xt(s)}" style="display:inline-flex;align-items:center;background: transparent; color: ${n.emeraldBright}; border: 1px solid ${n.emeraldBorder}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; text-decoration:none;">Open new primary</a>`:""}
      <button id="ws-cp-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-cp-done")?.addEventListener("click",()=>{document.getElementById(Zt)?.remove()})},fn=()=>{let e=window.location.pathname,t=e.match(Dh),o=t?t[1]:Ce();if(!o)return null;let r=e.match(Rh);return{oppId:o,locationId:r?r[1]:null}},qh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],jh=async()=>{for(let e of qh)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},xn=!1,gs=async()=>{if(!xn){xn=!0;try{await Uh()}finally{xn=!1}}},Uh=async()=>{let e=fn();if(!e||!e.locationId){document.getElementById(eo)?.remove(),Yo();return}let t=document.getElementById(eo);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Acquisitions"&&(t.remove(),Yo());return}t&&t.remove();let o=await jh();if(!o)return;let r=await ne();if(r!=="Acquisitions"){m.debug(`[change-primary] gated off \u2014 pipeline="${r}" (expected Acquisitions)`);return}let a=fn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=eo,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:4;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=F,i.title="Seller says someone else handles the sale? Hand the deal to that person \u2014 opp, seller roles, deal state, and dial lists all follow",i.innerHTML=`${Nh(n.amber)}<span>Change Primary Contact</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=fn();!l||!l.locationId||xs({tenantId:l.locationId,acqOppId:l.oppId})}),s.appendChild(i),te(o).appendChild(s),m.debug(`Mounted Change Primary Contact button on opp ${e.oppId}`),Wh(e.oppId)},Vo=null,fs=null,Yo=()=>{Vo?.disconnect(),Vo=null,fs=null},Wh=e=>{if(Vo&&fs===e)return;Yo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(fs=e,Vo=new MutationObserver(()=>{let o=fn();if(!o||o.oppId!==e){Yo();return}let r=W();if(r!==null&&r!=="Acquisitions"){document.getElementById(eo)?.remove(),Yo();return}document.getElementById(eo)||gs()}),Vo.observe(t,{childList:!0,subtree:!0}))},Id=()=>{ee("change-primary-contact",re,()=>{!document.getElementById(eo)&&!xn&&gs()}),gs()};var Hd="ws-properties-nav-icon",Cs="ws-properties-panel",Od="ws-properties-modal",Ss="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property",Gh=`${Ss}/list-for-contact`,Kh=`${Ss}/create-with-opp`,Vh=`${Ss}/add-contact`,Yh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",Jh=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],be=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Qh=(e,t)=>`/v2/location/${e}/objects/property/list?recordId=${t}`,Dd=e=>{if(e==null||e==="")return null;let t=Number(String(e).replace(/[^0-9.\-]/g,""));return Number.isFinite(t)&&t!==0?t:null},wn=e=>{let t=Dd(e);if(t===null)return"&mdash;";let o=Math.abs(t);return o>=1e6?`$${(t/1e6).toFixed(t%1e6?1:0)}M`:o>=1e3?`$${Math.round(t/1e3)}k`:`$${Math.round(t)}`},ws=e=>{let t=Dd(e);return t===null?"&mdash;":t.toLocaleString()},Rd={easy:"Paint & Flooring",minor_rehab:"Kitchen & Bath",full_cosmetic:"Full Cosmetic",major_repairs:"Roof & Systems"},Zh=e=>{let t=(e||"").toString().trim();return t?be(Rd[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase())):"&mdash;"},Xh=e=>{let t=(e||"").toString().trim();return t?Rd[t]||t:""},e_={single_family_residence_sfr:"Single Family Residence (SFR)",multifamily_24_units:"Multi-Family 2-4 Units",multifamily_5_units:"Multi-Family 5+ Units",land:"Land",commercial:"Commercial",mobile_home:"Mobile Home"},t_=e=>{let t=(e||"").toString().trim();return t?e_[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase()):""},dt=(e,t,o)=>`<div style="min-width:0;"><div style="font-size:9px;color:${n.ash};text-transform:uppercase;letter-spacing:.4px;">${e}</div><div title="${be(o||"")}" style="font-size:12px;color:${n.bone};font-weight:500;line-height:1.25;word-break:break-word;">${t}</div></div>`,o_=e=>`
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid ${n.steel};">
    ${dt("Beds",ws(e.beds))}
    ${dt("Baths",ws(e.baths))}
    ${dt("Sq Ft",ws(e.sqft))}
    ${dt("Rehab",Zh(e.rehab_level),Xh(e.rehab_level))}
    ${dt("ARV",wn(e.arv))}
    ${dt("IMV",wn(e.imv))}
    ${dt("MAO",wn(e.mao))}
    ${dt("Ask",wn(e.asking_price))}
  </div>`,Es=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000001; padding: 10px 18px; border-radius: ${y.sm};
    background: ${t==="ok"?n.emerald:n.crimson}; color: ${n.bone};
    font-family: ${h.sans}; font-size: 13px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4e3)},r_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',n_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>',a_="nav.w-13, nav[class*='w-13']",s_=".flex-1.h-full.relative.overflow-hidden.rounded-lg",Nd="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",i_="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",l_=async()=>{try{return await R(a_,{timeoutMs:2500})}catch{return null}},d_=async()=>{try{return await R(s_,{timeoutMs:2500})}catch{return null}},kn=async(e,t)=>await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"})).json(),je=`width:100%;box-sizing:border-box;padding:8px 10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${h.sans};font-size:13px;outline:none;margin-bottom:10px;`,Ue=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,Ls=`background:${n.emerald};color:${n.bone};border:none;border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${h.sans};font-size:13px;font-weight:600;`,Fd=`background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 16px;cursor:pointer;font-family:${h.sans};font-size:13px;`,c_=(e,t)=>{let o=document.createElement("div");return o.id=Cs,o.dataset.contactId=t,o.style.cssText=`
    position: fixed; z-index: 9998; display: none;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.lg}; flex-direction: column; overflow: hidden;
    color: ${n.bone}; font-family: ${h.sans};
    box-shadow: 0 12px 40px rgba(0,0,0,0.55);
  `,o.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px 16px;border-bottom:1px solid ${n.steel};">
      <div>
        <div style="font-size:16px;font-weight:500;color:${n.bone};">Properties</div>
        <div style="font-size:11px;color:${n.ash};margin-top:2px;">Properties this seller owns</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button id="ws-prop-add" type="button" style="${Ls}">+ Add Property</button>
        <button id="ws-prop-close" type="button" title="Close" aria-label="Close" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;flex:0 0 auto;">&times;</button>
      </div>
    </div>
    <div id="ws-prop-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:13px;color:${n.bone};">
      <div style="color:${n.ash};font-style:italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-prop-add")?.addEventListener("click",()=>{m_(e,t,()=>En(e,t))}),o},En=async(e,t)=>{let o=document.querySelector("#ws-prop-body");if(o)try{let r=await kn(Gh,{tenant_id:e,contact_id:t});if(!r.ok){o.innerHTML=`<div style="color:${n.crimson};">${be(r.error||"Failed to load properties")}</div>`;return}p_(o,r.properties||[],e,t)}catch(r){o.innerHTML=`<div style="color:${n.crimson};">Network error: ${be(r.message)}</div>`}},p_=(e,t,o,r)=>{if(!t.length){e.innerHTML=`<div style="text-align:center;padding:32px 0;color:${n.ash};">No properties yet.<br><span style="font-size:12px;">Click "+ Add Property" to create one (a deal is created automatically).</span></div>`;return}e.innerHTML=t.map(a=>{let s=/lost|abandon/i.test(a.deal_stage||""),i=s?n.crimson:n.emeraldBright,l=s?n.steel:n.emeraldBorder,d=a.has_acq_opp?`<span title="Deal stage" style="font-size:10px;color:${i};border:1px solid ${l};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">${be(a.deal_stage||"Deal")}</span>`:`<span title="No ACQ deal yet" style="font-size:10px;color:${n.amber};border:1px solid ${n.steel};border-radius:${y.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">No deal</span>`,c=(a.roles||[]).map(p=>p==="seller_1"?"Seller 1":p==="seller_2"?"Seller 2":p==="tenant_contact"?"Tenant":p).join(", ");return`
      <div style="border:1px solid ${n.steel};border-radius:${y.md};padding:10px 12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div class="ws-prop-open" data-prop="${be(a.property_record_id)}" title="Open property record" style="font-size:13px;font-weight:500;color:${n.bone};cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-width:0;">
            <span style="text-decoration:underline;text-decoration-color:${n.steel};text-underline-offset:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${be(a.address)}</span>
            <span style="color:${n.emeraldBright};font-size:12px;line-height:1;flex:0 0 auto;">&#8599;</span>
          </div>
          ${d}
        </div>
        <div style="font-size:11px;color:${n.ash};margin-top:3px;">${be(c||"")}${a.property_type?" &middot; "+be(t_(a.property_type)):""}</div>
        ${o_(a)}
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="ws-prop-addperson" data-prop="${be(a.property_record_id)}" data-addr="${be(a.address)}" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${h.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">${n_} Add person</button>
          ${(a.roles||[]).includes("seller_2")&&a.has_acq_opp&&a.opp_id?`<button type="button" class="ws-prop-makeprimary" data-prop="${be(a.property_record_id)}" data-addr="${be(a.address)}" data-opp="${be(a.opp_id)}" title="This contact is the Second Seller \u2014 make them the PRIMARY contact for this deal" style="background:transparent;border:1px solid ${n.emeraldBorder};color:${n.emeraldBright};border-radius:${y.sm};padding:4px 10px;cursor:pointer;font-family:${h.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">Make primary</button>`:""}
        </div>
      </div>
    `}).join(""),e.querySelectorAll(".ws-prop-addperson").forEach(a=>{a.addEventListener("click",()=>{b_(o,a.dataset.prop||"",a.dataset.addr||"this property",()=>En(o,r))})}),e.querySelectorAll(".ws-prop-makeprimary").forEach(a=>{a.addEventListener("click",()=>{xs({tenantId:o,acqOppId:a.dataset.opp||void 0,propertyRecordId:a.dataset.prop||void 0,addrLabel:a.dataset.addr||void 0,fixedNewPrimary:{contactId:r,name:"this contact"},onSuccess:()=>En(o,r)})})}),e.querySelectorAll(".ws-prop-open").forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.prop||"";s&&window.open(Qh(o,s),"_blank","noopener")}),a.addEventListener("mouseenter",()=>{a.style.color=n.emeraldBright}),a.addEventListener("mouseleave",()=>{a.style.color=n.bone})})},zd=()=>{document.getElementById(Od)?.remove();let e=document.createElement("div");e.id=Od,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let t=document.createElement("div");return t.style.cssText=`width:min(440px,92vw);background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`,e.appendChild(t),document.body.appendChild(e),e.addEventListener("click",o=>{o.target===e&&e.remove()}),{overlay:e,card:t}},m_=(e,t,o)=>{let{overlay:r,card:a}=zd();a.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add Property</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Creates the property linked to this seller and its own ACQ deal.</div>
    <label style="${Ue}">Street address</label>
    <input id="wp-address" type="text" style="${je}" placeholder="123 Main St" />
    <div style="display:flex;gap:10px;">
      <div style="flex:2;"><label style="${Ue}">City</label><input id="wp-city" type="text" style="${je}" /></div>
      <div style="flex:1;"><label style="${Ue}">State</label><input id="wp-state" type="text" maxlength="2" style="${je}" placeholder="NC" /></div>
      <div style="flex:1;"><label style="${Ue}">Zip</label><input id="wp-zip" type="text" maxlength="10" style="${je}" /></div>
    </div>
    <label style="${Ue}">Property type (optional)</label>
    <select id="wp-type" style="${je}">
      <option value="">\u2014 select \u2014</option>
      ${Jh.map(i=>`<option value="${be(i)}">${be(i)}</option>`).join("")}
    </select>
    <div id="wp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wp-cancel" type="button" style="${Fd}">Cancel</button>
      <button id="wp-save" type="button" style="${Ls}">Create Property + Deal</button>
    </div>
  `;let s=a.querySelector("#wp-err");a.querySelector("#wp-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#wp-save")?.addEventListener("click",async()=>{let i=_=>(a.querySelector(_)?.value||"").trim(),l=i("#wp-address"),d=i("#wp-city"),c=i("#wp-state"),p=i("#wp-zip"),b=(a.querySelector("#wp-type")?.value||"").trim();if(!l&&!d&&!p){s&&(s.textContent="Enter at least a street address.");return}let u=a.querySelector("#wp-save");u&&(u.disabled=!0,u.textContent="Creating\u2026"),s&&(s.textContent="");try{let _=await kn(Kh,{tenant_id:e,contact_id:t,address:l,city:d,state:c,zip:p,property_type:b||void 0});if(!_.ok){s&&(s.textContent=_.error||"Failed to create property."),u&&(u.disabled=!1,u.textContent="Create Property + Deal");return}r.remove(),Es("Property + deal created \u2713"),o()}catch(_){s&&(s.textContent=`Network error: ${_.message}`),u&&(u.disabled=!1,u.textContent="Create Property + Deal")}}),setTimeout(()=>a.querySelector("#wp-address")?.focus(),0)},b_=(e,t,o,r)=>{let{overlay:a,card:s}=zd();s.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add person</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Attach a person to ${be(o)}.</div>
    <label style="${Ue}">Role</label>
    <select id="wpp-role" style="${je};appearance:none;-webkit-appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22><path d=%22M0 0l5 6 5-6z%22 fill=%22%238b98a5%22/></svg>');background-repeat:no-repeat;background-position:right 12px center;padding-right:30px">
      <option value="seller_2">Second seller</option>
      <option value="tenant_contact">Tenant</option>
    </select>
    <div style="display:flex;gap:10px;">
      <div style="flex:1;"><label style="${Ue}">First name</label><input id="wpp-first" type="text" style="${je}" /></div>
      <div style="flex:1;"><label style="${Ue}">Last name</label><input id="wpp-last" type="text" style="${je}" /></div>
    </div>
    <label style="${Ue}">Phone (optional)</label>
    <input id="wpp-phone" type="text" style="${je}" placeholder="+1..." />
    <label style="${Ue}">Email (optional)</label>
    <input id="wpp-email" type="text" style="${je}" />
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
      <button id="wpp-cancel" type="button" style="${Fd}">Cancel</button>
      <button id="wpp-save" type="button" style="${Ls}">Add person</button>
    </div>
  `;let i=s.querySelector("#wpp-err");s.querySelector("#wpp-cancel")?.addEventListener("click",()=>a.remove());let l=s.querySelector("#wpp-role"),d=s.querySelector("#wpp-primary-block"),c=s.querySelector("#wpp-makeprimary"),p=s.querySelector("#wpp-stop-row"),b=()=>{let u=(l?.value||"seller_2")==="seller_2";d&&(d.style.display=u?"":"none"),!u&&c&&(c.checked=!1),p&&(p.style.display=c?.checked?"flex":"none")};l?.addEventListener("change",b),c?.addEventListener("change",b),b(),s.querySelector("#wpp-save")?.addEventListener("click",async()=>{let u=s.querySelector("#wpp-role")?.value||"seller_2",_=S=>(s.querySelector(S)?.value||"").trim(),v=_("#wpp-first"),f=_("#wpp-last"),x=_("#wpp-phone"),$=_("#wpp-email"),g=u==="seller_2"&&(c?.checked??!1);if(!v&&!f){i&&(i.textContent="Enter at least a first or last name.");return}if(g&&!v){i&&(i.textContent="First name is required to make them the primary.");return}if(g&&!x&&!$){i&&(i.textContent="A phone or email is required to make them the primary.");return}let k=s.querySelector("#wpp-save");k&&(k.disabled=!0,k.textContent=g?"Handing off\u2026":"Adding\u2026"),i&&(i.textContent="");try{if(g){let T=await kn(Yh,{tenant_id:e,property_record_id:t,new_primary:{first_name:v,last_name:f,phone:x||void 0,email:$||void 0},old_disposition:"seller_2",stop_old_outreach:s.querySelector("#wpp-stopold")?.checked??!0,triggered_by_user_id:H()||""});if(!T.ok){i&&(i.textContent=T.error||"Failed to change the primary."),k&&(k.disabled=!1,k.textContent="Add person");return}a.remove();let w=Array.isArray(T.warnings)&&T.warnings.length?` \u2014 ${T.warnings[0]}`:"";Es(`Now the primary contact \u2713${w}`),r();return}let S=await kn(Vh,{tenant_id:e,property_record_id:t,role:u,new_contact:{firstName:v,lastName:f,phone:x||void 0,email:$||void 0}});if(!S.ok){i&&(i.textContent=S.error||"Failed to add person."),k&&(k.disabled=!1,k.textContent="Add person");return}a.remove(),Es("Person added \u2713"),r()}catch(S){i&&(i.textContent=`Network error: ${S.message}`),k&&(k.disabled=!1,k.textContent="Add person")}}),setTimeout(()=>s.querySelector("#wpp-first")?.focus(),0)},$n=!1,$e=null,ks=!1,Jo=null,u_=(e,t,o)=>{let r=t.getBoundingClientRect(),a=null;try{a=o?o.getBoundingClientRect():null}catch{a=null}let s=!!(a&&a.height>40&&a.width>=280&&a.width<=520&&a.left>=r.left-560),i=s&&a?Math.round(a.width):400,l=Math.round(s&&a?a.top:r.top),d=Math.round(s&&a?a.height:r.height),c=6;e.style.top=`${l}px`,e.style.height=`${d}px`,e.style.width=`${i}px`,e.style.left=`${Math.round(r.left-i-c)}px`,e.style.right="auto",e.style.bottom="auto"},h_=()=>{try{let e=new URL(window.location.href);e.searchParams.get("view")!=="activities"&&(e.searchParams.set("view","activities"),history.replaceState(history.state,"",e.toString()))}catch{}},$s=(e,t)=>{$n=t,t?(e.iconBtn.className=i_,e.iconBtn.dataset.active="true",h_(),u_(e.panel,e.nav,e.panelArea),e.panel.style.display="flex",En(e.tenantId,e.contactId)):(e.iconBtn.className=Nd,delete e.iconBtn.dataset.active,e.panel.style.display="none")},__=()=>{let e=document.createElement("button");return e.id=Hd,e.type="button",e.title="Properties",e.setAttribute("aria-label","Properties"),e.className=Nd,e.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;line-height:0;pointer-events:none;">${r_.replace("<svg ",'<svg style="pointer-events:none;" ')}</span>`,e.addEventListener("click",t=>{t.stopPropagation(),$e&&$s($e,!$n)}),e},Pd=()=>{document.getElementById(Hd)?.remove(),document.getElementById(Cs)?.remove(),Jo&&$e&&$e.nav.removeEventListener("click",Jo,!0),Jo=null,$e=null,$n=!1},Ts=[],y_=()=>{Ts.forEach(e=>window.clearTimeout(e)),Ts=[]},qd=()=>{y_(),Bd().then(e=>{if(e==="retry")for(let t of[900,2500,8e3,32e3])Ts.push(window.setTimeout(()=>{Bd()},t))})},Bd=async()=>{if(ks)return"done";ks=!0;try{let e=U();if(!e||!e.locationId)return Pd(),"done";let t=document.getElementById(Cs);if(t&&t.dataset.contactId===e.contactId&&$e)return"done";Pd();let o=null;try{o=await ze(e.contactId,e.locationId)}catch(p){return m.warn("[properties] Contact Type fetch failed",p),"retry"}if(qe(o)!=="seller")return"done";let[a,s]=await Promise.all([l_(),d_()]);if(!a||!s)return m.warn("[properties] right-rail nav or panel area not found"),"retry";let i=U();if(!i||i.contactId!==e.contactId)return"done";let l=c_(e.locationId,e.contactId),d=__();return $e={contactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l},(a.querySelector(".flex.flex-col.items-center.gap-2")||a).appendChild(d),document.body.appendChild(l),l.querySelector("#ws-prop-close")?.addEventListener("click",()=>{$e&&$s($e,!1)}),Jo=p=>{let b=p.target;!b||$e&&$e.iconBtn.contains(b)||b.closest("button.sidebar-option-button")&&$n&&$e&&$s($e,!1)},a.addEventListener("click",Jo,!0),m.info(`[properties] right-rail mount complete for seller ${e.contactId}`),"done"}finally{ks=!1}};var jd="ws-non-seller-contact",Ud=()=>{v_()},v_=async()=>{let e=U();if(!e||!e.contactId||!e.locationId){document.documentElement.classList.remove(jd);return}let t="seller";try{t=qe(await ze(e.contactId,e.locationId))}catch(o){m.warn("[seller-flag] contact-type resolve failed",o)}document.documentElement.classList.toggle(jd,t!=="seller")};var ct="ws-crm-claim-release-pill",g_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",f_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",x_=async e=>{let t=await fetch(g_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Get returned ${t.status} ${t.statusText}`);return await t.json()},w_=async e=>{let t=await fetch(f_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId,action:e.action}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Set returned ${t.status} ${t.statusText}`);return await t.json()},Kd=e=>{let t=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},oo=(e,t)=>{let o=t==="claim"?"emerald":"amber",r=t==="claim"?n.emerald:n.amber;e.dataset.mode=t,e.style.cssText=Nl(o),e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `},k_=({contactId:e,mode:t})=>{let o=document.createElement("button");return o.id=ct,o.type="button",o.dataset.contactId=e,oo(o,t),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=U();if(!a||!a.locationId||a.contactId!==e)return;let s=H();if(!s){m.warn("Claim/Release click: no user ID detected (login session not exposing it)");let l=o.querySelector(".ws-cr-label");l&&(l.textContent="Sign-in needed"),setTimeout(()=>oo(o,r),2500);return}m.info(`Claim/Release click \u2014 contact=${e} mode=${r} user=${s}`);let i=r==="claim"?"release":"claim";oo(o,i),o.disabled=!0,o.style.opacity="0.8";try{let l=await w_({contactId:e,locationId:a.locationId,userId:s,action:r}),d=l?.mode==="claim"||l?.mode==="release"?l.mode:i;oo(o,d),m.info(`Claim/Release done \u2192 new mode: ${d}`)}catch(l){m.error("Claim/Release Set webhook failed",l),oo(o,r);let d=o.querySelector(".ws-cr-label");if(d){let c=d.textContent??"";d.textContent="Try again",setTimeout(()=>{d.textContent==="Try again"&&(d.textContent=c)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},Wd=async e=>{try{let t=await x_({contactId:e.contactId,locationId:e.locationId,userId:H()}),o=document.getElementById(ct);if(!o||o.dataset.contactId!==e.contactId)return;let r=t?.mode==="release"?"release":"claim";oo(o,r)}catch(t){m.warn("Claim/Release Get failed; pill stays in default 'claim' mode",t)}},E_=async(e,t=1e4)=>{let o=Date.now();for(;Date.now()-o<t;){let r=Kd(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},Gd=(e,t)=>{let o=k_({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${ct}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),e.appendChild(r)},to=null,$_=async()=>{let e=U();if(!e){to?.disconnect(),to=null,document.getElementById(ct)?.remove();return}let t=document.getElementById(ct);if(!(t&&t.dataset.contactId===e.contactId)){t&&t.remove();try{let o=await R("#record-details-lhs",{timeoutMs:1e4}),r=await E_(o),a=U();if(!a||a.contactId!==e.contactId)return;if(!r){m.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}Gd(r,e.contactId),m.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`),document.getElementById(ct)&&e.locationId&&Wd({contactId:e.contactId,locationId:e.locationId}),to?.disconnect(),to=new MutationObserver(async()=>{if(!(U()?.contactId===e.contactId)){to?.disconnect();return}if(document.getElementById(ct))return;let l=Kd(o);l&&(Gd(l,e.contactId),document.getElementById(ct)&&e.locationId&&Wd({contactId:e.contactId,locationId:e.locationId}),m.debug("Re-mounted Claim/Release pill after React wipe"))}),to.observe(o,{childList:!0,subtree:!0})}catch(o){m.warn("Could not mount Claim/Release pill:",o)}}},Vd=()=>{$_()};var T_=e=>{let t=(e||"").replace(/[^0-9.]/g,""),o=t.indexOf(".");return o===-1?t:t.slice(0,o+1)+t.slice(o+1).replace(/\./g,"")},Ms=e=>{let t=T_(e);if(!t)return"";let o=t.indexOf("."),r=o===-1?t:t.slice(0,o),a=o===-1?"":t.slice(o);return r.replace(/\B(?=(\d{3})+(?!\d))/g,",")+a},ue=e=>{let t=parseFloat((e??"").replace(/,/g,""));return Number.isFinite(t)?t:0},As=e=>{let t=e.value,o=Ms(t);if(o===t)return;let r=e.selectionStart??t.length,a=t.slice(0,r).replace(/[^0-9.]/g,"").length,s=0,i=0;for(;s<o.length&&i<a;)o[s]!==","&&(i+=1),s+=1;e.value=o;try{e.setSelectionRange(s,s)}catch{}},ke=e=>{if(!e||e.dataset.wsCurrency==="1")return;if(e.dataset.wsCurrency="1",e.type!=="text"){let o=e.value;e.type="text",e.value=o}e.setAttribute("inputmode","decimal"),e.autocomplete="off",e.value=Ms(e.value),e.addEventListener("input",()=>As(e)),e.addEventListener("keydown",o=>{if(o.key!=="Backspace"&&o.key!=="Delete")return;let r=e.selectionStart??0,a=e.selectionEnd??0;if(r!==a)return;let s=e.value;o.key==="Backspace"&&r>=2&&s[r-1]===","?(o.preventDefault(),e.value=s.slice(0,r-2)+s.slice(r),e.setSelectionRange(r-2,r-2),As(e),e.dispatchEvent(new Event("input",{bubbles:!0}))):o.key==="Delete"&&s[r]===","&&r+2<=s.length&&(o.preventDefault(),e.value=s.slice(0,r)+s.slice(r+2),e.setSelectionRange(r,r),As(e),e.dispatchEvent(new Event("input",{bubbles:!0})))});let t=!1;e.addEventListener("focus",()=>{e.select(),t=!0}),e.addEventListener("mouseup",o=>{t&&(o.preventDefault(),t=!1)}),e.addEventListener("blur",()=>{t=!1})},Is=(e,t)=>{e&&(e.value=Ms(String(t)))};var oc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",C_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set",S_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",L_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",A_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/link-clicked",M_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/open-opps",I_=async({contactId:e,locationId:t,status:o,userId:r,deadReason:a,webhookUrl:s,kind:i})=>{let l=s||oc,d;if(i==="buyer"){let p=ac.find(u=>u.label===o),b=p?p.value:o.toLowerCase().replace(/\s+/g,"-");d={tenant_id:t,contact_id:e,new_status:b,triggered_by_user_id:r??""}}else{let p={call_status:o,triggered_by_user_id:r??""};a&&(p.dead_reason=a),d={contact_id:e,location:{id:t},customData:p}}let c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),credentials:"omit"});if(!c.ok)throw new Error(`Webhook returned ${c.status} ${c.statusText}`)},O_=async({contactId:e,tenantId:t})=>{let o=await fetch(S_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:e}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()},ro="ws-crm-contact-actions-bar",rc="ws-crm-call-status-dropdown",nc="ws-crm-call-status-menu",Cn="ws-crm-offer-made-modal",Yd=!1,P_=()=>{Yd||(Yd=!0,document.addEventListener("click",e=>{let t=document.getElementById(nc);if(!t||t.style.display==="none")return;let o=document.getElementById(rc);o&&!o.contains(e.target)&&(t.style.display="none")}))},B_=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"no-show",label:"No Show",color:"orange"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],ac=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"showed-interest",label:"Showed Interest",color:"green"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],H_=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],D_=async()=>{for(let e of H_)try{let t=await R(e,{timeoutMs:2e3});if(t)return m.debug(`[actions-bar] mount target found via selector: ${e}`),t}catch{}try{let e=await R("#contact-conversation-panel",{timeoutMs:2e3});if(e.parentElement)return m.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),e.parentElement}catch{}for(let e of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let t=await R(e,{timeoutMs:1500});if(t)return m.debug(`[actions-bar] mount target via fallback: ${e}`),t.parentElement??t}catch{}return m.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},R_=({contactId:e,kind:t})=>{let o=t==="buyer"?ac:B_,r=t==="buyer"?C_:oc,a=t==="buyer"?"Buyer Call Status":"Seller Call Status",s=document.createElement("div");s.id=rc,s.style.cssText="position: relative; flex-shrink: 0; order: 1;";let i=document.createElement("button");i.type="button",i.style.cssText=F,i.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let l=document.createElement("div");return l.id=nc,l.style.cssText=`
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
  `,o.forEach(d=>{let c=Fe()&&(d.color==="red"||t==="buyer"&&d.value==="not-interested"),p=document.createElement("button");p.type="button",p.disabled=c,c&&(p.title="Disabled in the demo account",p.setAttribute("aria-disabled","true")),p.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${y.sm};
      font-family: ${h.sans};
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;
      transition: background 0.1s ease;
      ${c?"opacity: 0.38; cursor: not-allowed;":""}
    `,p.innerHTML=`
      <span style="
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${Fa[d.color]};
        flex-shrink: 0;
      "></span>
      <span>${d.label}</span>
    `,p.addEventListener("mouseenter",()=>{p.style.background=n.slate}),p.addEventListener("mouseleave",()=>{p.style.background="transparent"}),p.addEventListener("click",async()=>{m.info(`Call Status set to "${d.label}" (${d.value}, ${d.color}) for contact ${e}`);let b=i.firstElementChild,u=i.children[1],_=i.children[2];b&&(b.style.background=Fa[d.color]),u&&(u.textContent=d.label),l.style.display="none";let f=U()?.locationId,x=H();if(!f){m.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),u&&(u.textContent=`${d.label} (no tenant!)`),u&&(u.style.color=n.amber);return}if(t==="seller"&&d.color==="green"&&!x){m.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),u&&(u.textContent=`${d.label} (no user!)`),u&&(u.style.color=n.amber);return}let $=_?.textContent??"\u25BE",g=async k=>{_&&(_.textContent="\u2026"),i.style.opacity="0.75";try{await I_({contactId:e,locationId:f,status:d.label,userId:x,deadReason:k,webhookUrl:r,kind:t}),_&&(_.textContent="\u2713"),setTimeout(()=>{_&&(_.textContent=$),i.style.opacity="1"},900)}catch(S){m.warn("Call Status webhook failed:",S),_&&(_.textContent="\u2717"),u&&(u.style.color=n.amber),i.style.opacity="1",setTimeout(()=>{_&&(_.textContent=$),u&&(u.style.color=n.bone)},1800)}};if(t==="seller"&&d.value==="dead-deal"){let k=u?.textContent??"";Y_(S=>{g(S)},()=>{u&&(u.textContent=k)});return}if(t==="seller"&&d.value==="appointment-booked"){let k=u?.textContent??"";try{(await O_({contactId:e,tenantId:f})).ok?await g():J_(()=>{g()},()=>{u&&(u.textContent=k)})}catch(S){m.warn("Appointment sanity check failed; firing anyway:",S),await g()}return}if(t==="buyer"&&(d.value==="not-interested"||d.value==="showed-interest")){await g(),G_(d.value,{contactId:e,locationId:f,label:u,dispositionLabel:d.label});return}await g()}),l.appendChild(p)}),i.addEventListener("click",d=>{d.stopPropagation(),l.style.display=l.style.display==="none"?"block":"none"}),P_(),s.appendChild(i),s.appendChild(l),s},N_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",F_=async e=>{let t=await fetch(N_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,kind:e.kind,amount:e.amount,expires_at:e.expiresAt,triggered_by_user_id:e.userId,opp_id:e.oppId??void 0,property_record_id:e.propertyRecordId??void 0,asking_price:e.askingPrice??void 0}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},z_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/list-for-contact",We=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Jd="ws-crm-ni-mt-picker",q_={"not-interested":{webhook:L_,eligible:()=>!0,guardStageName:"",title:"Which deals is this buyer out on?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"}. Closing moves them to \u201CLost - Withdrew\u201D \u2014 the buyer stays eligible for other properties.`,allLabel:"Not interested in ALL of them",goLabel:e=>e?`Close ${e} Selected`:"Close Selected",accent:n.crimson,accentGlow:n.crimsonGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} closed`:`${e}/${t} closed \u2014 retry the rest`},"showed-interest":{webhook:A_,eligible:(e,t,o)=>{let r=t.get(e.stageId);return r!==void 0&&o>=0&&r<o},guardStageName:"Showed Interest",title:"Which deals are they interested in?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"} can move to \u201CShowed Interest\u201D.`,allLabel:"Interested in ALL of them",goLabel:e=>e?`Move ${e} to Showed Interest`:"Move to Showed Interest",accent:n.emerald,accentGlow:n.emeraldGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} moved`:`${e}/${t} moved \u2014 retry the rest`}},j_=async(e,t)=>{try{let o=await fetch(M_,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})});if(!o.ok)return null;let r=await o.json();if(!r?.ok)return null;let a=r.stages??[];return{opps:r.opps??[],stageIndexById:new Map(a.map(s=>[s.id,s.index])),stageIdxOf:s=>{let i=a.find(l=>l.name===s);return i?i.index:-1}}}catch{return null}},U_=async(e,t,o,r)=>{try{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,mt_opp_id:o,triggered_by_user_id:r??null})});return a.ok?(await a.json().catch(()=>({})))?.ok!==!1:!1}catch{return!1}},W_=(e,t,o,r)=>{document.getElementById(Jd)?.remove();let a=document.createElement("div");a.id=Jd,a.style.cssText=`position:fixed;inset:0;z-index:100003;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let s=document.createElement("div");s.style.cssText=`width:min(520px,94vw);max-height:80vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${t.accent};border-radius:${y.lg};padding:22px 26px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let i=e.map(b=>`<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-ni-mt-cb" data-id="${We(b.id)}" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
        <span style="font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(b.name)}</span>
      </label>`).join("");s.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${t.accent};">${We(o)}</div>
    <div style="font-size:14px;font-weight:600;margin:4px 0 2px;">${We(t.title)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:10px;">${We(t.sub(e.length))}</div>
    <label style="display:flex;align-items:center;gap:10px;padding:9px 10px;margin-bottom:6px;background:${t.accentGlow};border:1px solid ${n.steel};border-radius:${y.md};cursor:pointer;">
      <input id="ws-ni-mt-all" type="checkbox" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
      <span style="font-size:13px;font-weight:600;">${We(t.allLabel)}</span>
    </label>
    <div style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${y.md};min-height:60px;">${i}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-ni-mt-go" type="button" disabled style="background:${t.accent};color:${t.accent===n.emerald?n.obsidian:n.bone};border:none;border-radius:${y.sm};padding:8px 20px;cursor:pointer;font-size:13px;font-weight:600;font-family:${h.sans};opacity:0.5;">${We(t.goLabel(0))}</button>
    </div>`,a.appendChild(s),document.body.appendChild(a);let l=()=>[...s.querySelectorAll(".ws-ni-mt-cb")],d=s.querySelector("#ws-ni-mt-all"),c=s.querySelector("#ws-ni-mt-go"),p=()=>{let b=l().filter(u=>u.checked).length;c&&(c.disabled=b===0,c.style.opacity=b===0?"0.5":"1",c.textContent=t.goLabel(b)),d&&(d.checked=b===e.length)};d?.addEventListener("change",()=>{l().forEach(b=>{b.checked=!!d.checked}),p()}),s.addEventListener("change",p),a.addEventListener("click",b=>{b.target===a&&a.remove()}),c?.addEventListener("click",()=>{let b=l().filter(u=>u.checked).map(u=>u.getAttribute("data-id")||"").filter(Boolean);a.remove(),b.length&&r(b)})},G_=async(e,t)=>{let o=q_[e],r=H(),a=c=>{if(!t.label)return;let p=t.dispositionLabel;t.label.textContent=`${p} \u2014 ${c}`,setTimeout(()=>{t.label&&t.label.textContent?.startsWith(`${p} \u2014 `)&&(t.label.textContent=p)},3e3)},s=await j_(t.locationId,t.contactId);if(s===null){m.warn(`[${e}] MT opp lookup unavailable \u2014 disposition recorded, no opps touched`),a("recorded \u2014 couldn't check deals, re-click to retry");return}let i=o.guardStageName?s.stageIdxOf(o.guardStageName):-1,l=s.opps.filter(c=>o.eligible(c,s.stageIndexById,i));if(!l.length){m.info(`[${e}] no eligible open MT opps \u2014 record only`),s.opps.length&&a("no deals to move");return}let d=async c=>{let p=0;for(let b of c)await U_(o.webhook,t.locationId,b,r)&&p++;m.info(`[${e}] acted on ${p}/${c.length} MT opp(s)`),a(o.doneNote(p,c.length))};if(l.length===1){await d([l[0].id]);return}W_(l,o,t.dispositionLabel,c=>{d(c)})},K_=async(e,t)=>{let o=await fetch(z_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();return(Array.isArray(r.properties)?r.properties:[]).filter(s=>s.has_acq_opp&&s.opp_id).map(s=>({oppId:String(s.opp_id),propertyRecordId:String(s.property_record_id||""),address:String(s.address||"(no address)"),dealStage:s.deal_stage||null,askingPrice:s.asking_price??null}))},V_=e=>new Promise(t=>{document.getElementById(Cn)?.remove();let o=document.createElement("div");o.id=Cn,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-deal-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
        <div style="font-size:14px;font-weight:500;">${We(i.address)}</div>
        ${i.dealStage?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${We(i.dealStage)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This seller has ${e.length} deals</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is this offer for?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-deal-cancel" type="button" style="${F} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-deal-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-deal-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),Qo=(e,t="seller",o)=>{document.getElementById(Cn)?.remove();let r=t==="seller",a=r?"Record Your Offer":"Record Buyer's Offer",s=r?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=r?n.emerald:n.amber,l=document.createElement("div");l.id=Cn,l.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
        font-family: ${h.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 16px;
        outline: none;
        box-sizing: border-box;
      " />`:"",u=r&&o&&o.address?`<div style="font-size:12px;color:${n.bone};background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 10px;margin-bottom:16px;">Offer for: <strong>${We(o.address)}</strong></div>`:"",_=o&&o.askingPrice!=null&&Number(o.askingPrice)>0?String(Number(o.askingPrice)):"",v=r&&o&&o.propertyRecordId?`
    <label style="display:block;font-family:${h.mono};font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin-bottom:6px;">Seller's Asking Price <span style="text-transform:none;letter-spacing:0;color:${n.ash};">(optional)</span></label>
    <div style="display:flex;align-items:center;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:0 12px;margin-bottom:16px;">
      <span style="color:${n.ash};font-family:${h.mono};font-size:14px;">$</span>
      <input id="ws-offer-asking" type="number" min="0" step="100" placeholder="0" value="${_}" style="flex:1;background:transparent;border:none;outline:none;color:${n.bone};font-family:${h.mono};font-size:14px;padding:10px 8px;" />
    </div>`:"";d.innerHTML=`
    <div style="
      font-family: ${h.mono};
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

    ${u}

    <label style="
      display: block;
      font-family: ${h.mono};
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
      <span style="color: ${n.ash}; font-family: ${h.mono}; font-size: 14px;">$</span>
      <input id="ws-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${h.mono};
          font-size: 14px;
          padding: 10px 8px;
        " />
    </div>

    ${v}

    ${b}

    <div id="ws-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${ce}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,l.appendChild(d),document.body.appendChild(l),ke(d.querySelector("#ws-offer-amount")),ke(d.querySelector("#ws-offer-asking"));let f=()=>l.remove();l.addEventListener("click",k=>{k.target===l&&f()});let x=d.querySelector("#ws-offer-error"),$=d.querySelector("#ws-offer-cancel"),g=d.querySelector("#ws-offer-submit");$?.addEventListener("click",f),g?.addEventListener("click",async()=>{let k=(d.querySelector("#ws-offer-amount")?.value??"").trim(),S=r?d.querySelector("#ws-offer-expires")?.value??"":"",T=ue(k);if(!k||T<=0){x&&(x.textContent="Enter a positive offer amount."),m.warn("Offer Made submit blocked \u2014 invalid amount");return}if(T<100){x&&(x.textContent=`That looks low \u2014 did you mean $${(T*1e3).toLocaleString("en-US")}?`);return}let C=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),E=C?C[1]:null;if(!E){x&&(x.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}x&&(x.textContent=""),g&&(g.disabled=!0,g.textContent="Recording\u2026",g.style.opacity="0.7"),$&&($.disabled=!0);try{let L=(d.querySelector("#ws-offer-asking")?.value??"").trim(),A=L?ue(L):null,M=await F_({tenantId:E,contactId:e,kind:t,amount:T,expiresAt:S||null,userId:H(),oppId:o?.oppId??null,propertyRecordId:o?.propertyRecordId??null,askingPrice:A&&A>0?A:null});if(!M.ok){x&&(x.textContent=M.error??"Something went wrong."),g&&(g.disabled=!1,g.textContent="Record Offer",g.style.opacity="1"),$&&($.disabled=!1);return}m.info(`Offer Made (${t}) recorded for contact ${e}: $${T} on ${M.opp_pipeline} opp (stage: ${M.opp_stage_name??"?"})`),f()}catch(L){m.error("Offer Made webhook failed",L),x&&(x.textContent=L instanceof Error?L.message:"Network error \u2014 try again."),g&&(g.disabled=!1,g.textContent="Record Offer",g.style.opacity="1"),$&&($.disabled=!1)}}),setTimeout(()=>{d.querySelector("#ws-offer-amount")?.focus()},0)},Qd="ws-crm-dead-deal-modal",Y_=(e,t)=>{document.getElementById(Qd)?.remove();let o=document.createElement("div");o.id=Qd,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
      font-family: ${h.mono};
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
        font-family: ${h.sans};
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
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${ce}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let l=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),c=(l?.value??"").trim();if(!c){d&&(d.textContent="Please enter a reason."),l?.focus();return}if(c.length<4){d&&(d.textContent="Please enter at least a few words."),l?.focus();return}a(),e(c)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),i()),l.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},Zd="ws-crm-appointment-sanity-modal",J_=(e,t)=>{document.getElementById(Zd)?.remove();let o=document.createElement("div");o.id=Zd,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${ce}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>{document.removeEventListener("keydown",i),o.remove()},s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),e()});let i=l=>{l.key==="Escape"&&s()};document.addEventListener("keydown",i)},Xd=(e,t)=>{let o=document.createElement("div");if(o.id=ro,o.dataset.contactId=e,o.dataset.contactKind=t,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,t==="seller"||t==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=F,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",async()=>{if(t!=="seller"){Qo(e,t);return}let a=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),s=a?a[1]:null;if(!s){Qo(e,t);return}let i=r.innerHTML;r.disabled=!0,r.style.opacity="0.7",r.innerHTML="<span>Loading\u2026</span>";let l=()=>{r.innerHTML=i,r.disabled=!1,r.style.opacity="1"},d=[];try{d=await K_(s,e)}catch(p){m.warn("[offer-made] deal lookup failed, using legacy path",p),l(),Qo(e,t);return}if(l(),d.length<=1){Qo(e,t,d[0]);return}let c=await V_(d);c&&Qo(e,t,c)}),o.appendChild(r),o.appendChild(R_({contactId:e,kind:t}))}return o},Os=!1,ec=()=>{document.querySelectorAll(`[id="${ro}"]`).forEach(e=>e.remove())},sc=async()=>{if(m.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),Os){m.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}Os=!0;try{await Q_()}finally{Os=!1}},Q_=async()=>{let e=U();if(!e){m.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),ec();return}if(m.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${e.contactId} locationId=${e.locationId??"(null)"} source=${e.source}`),e.source!=="url"){m.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),ec();return}let t="seller";try{let d=await ze(e.contactId,e.locationId),c=qe(d);c==="buyer"?t="buyer":c==="other"&&(t="other"),m.debug(`[actions-bar:03] kind resolved \u2014 kind=${t} (raw type=${d??"(null)"})`)}catch(d){m.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",d)}let o=U();if(!o||o.contactId!==e.contactId){m.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${ro}"]`));if(r.length===1&&r[0].dataset.contactId===e.contactId&&r[0].dataset.contactKind===t){m.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${e.contactId} kind=${t} \u2014 no-op`);return}r.length>0&&(m.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(d=>d.remove()));let a=await D_();if(!a){m.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}m.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let s=U();if(!s||s.contactId!==e.contactId){m.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let i;try{i=Xd(e.contactId,t)}catch(d){m.error("[actions-bar:08-FAIL] buildBar threw:",d);return}i.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(i,a.firstChild)}catch(d){m.error("[actions-bar:09-FAIL] insertBefore threw:",d);return}if(!document.getElementById(ro)){m.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}m.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${e.contactId} kind=${t}`),Tn?.disconnect(),Tn=new MutationObserver(()=>{if(!(U()?.contactId===e.contactId)){Tn?.disconnect();return}let c=document.querySelectorAll(`[id="${ro}"]`);if(c.length>1){for(let p=1;p<c.length;p++)c[p].remove();m.debug(`[actions-bar:WATCHDOG] trimmed ${c.length-1} duplicate bar(s)`);return}if(c.length===0){let p=document.querySelector(".central-panel")||a,b=Xd(e.contactId,t);b.dataset.mountTarget=i.dataset.mountTarget??"";try{p.insertBefore(b,p.firstChild),m.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${e.contactId}`)}catch(u){m.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",u)}}}),Tn.observe(a,{childList:!0})},Tn=null,tc=null,Z_=()=>{tc===null&&(tc=window.setInterval(()=>{let e=U();e&&(document.getElementById(ro)||(m.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",e.contactId),sc()))},3e3))},ic=()=>{Z_(),sc()};var Sn="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",X_=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),Zo="data-ws-crm-favicon",Ps=e=>e.hasAttribute(Zo),lc=e=>{if(e.tagName!=="LINK")return!1;let t=(e.getAttribute("rel")??"").toLowerCase();return X_.has(t)},Ln=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{lc(r)&&!Ps(r)&&r.remove()});let t=document.head.querySelector(`link[${Zo}="1"]`);t?t.href!==Sn&&(t.href=Sn):(t=document.createElement("link"),t.setAttribute(Zo,"1"),t.rel="icon",t.type="image/png",t.href=Sn,document.head.appendChild(t),m.debug("Favicon installed"));let o=document.head.querySelector(`link[${Zo}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(Zo,"apple"),o.rel="apple-touch-icon",o.href=Sn,document.head.appendChild(o))},dc=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)Ln();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),Ln())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&lc(i)&&!Ps(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&Ps(i)&&(a=!0)});a&&Ln()}).observe(document.head,{childList:!0,subtree:!1});let t=0,o=window.setInterval(()=>{t+=1,Ln(),t>=5&&window.clearInterval(o)},1e3)};var ey="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",Oe="ws-crm-mt-offer-made-button",cc="ws-crm-mt-offer-made-modal",ty=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,oy=/\/v2\/location\/([A-Za-z0-9]+)/,In=()=>{let e=window.location.pathname,t=e.match(ty),o=t?t[1]:Ce();if(!o)return null;let r=e.match(oy);return{oppId:o,locationId:r?r[1]:null}},ry=async e=>{let t=await fetch(ey,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,kind:"buyer",amount:e.amount,triggered_by_user_id:e.userId}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},An=()=>{document.getElementById(cc)?.remove()},ny=e=>{An();let t=document.createElement("div");t.id=cc,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
      font-family: ${h.mono};
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
      <span style="color: ${n.ash}; font-family: ${h.mono}; font-size: 14px;">$</span>
      <input id="ws-mt-offer-amount" type="number" min="0" step="100" placeholder="0"
        style="
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: ${n.bone};
          font-family: ${h.mono};
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
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${ce}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),s=o.querySelector("#ws-mt-offer-cancel"),i=o.querySelector("#ws-mt-offer-submit");ke(r),setTimeout(()=>r?.focus(),50);let l=d=>{d.key==="Enter"?(d.preventDefault(),i?.click()):d.key==="Escape"&&(d.preventDefault(),s?.click())};o.addEventListener("keydown",l),t.addEventListener("click",d=>{d.target===t&&An()}),s?.addEventListener("click",()=>An()),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let d=r.value.trim(),c=ue(d);if(!d||c<=0){a.textContent="Enter a positive offer amount.",r.focus();return}if(c<100){a.textContent=`That looks low \u2014 did you mean $${(c*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Recording\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{let p=await ry({oppId:e.oppId,locationId:e.locationId,amount:c,userId:H()});if(!p.ok){a.textContent=p.error??"Something went wrong.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1);return}An(),e.onSuccess()}catch(p){m.error("MT Offer Made webhook failed",p),a.textContent=p instanceof Error?p.message:"Network error \u2014 try again.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1)}})},ay=e=>{let t=document.createElement("button");return t.id=Oe,t.type="button",t.dataset.oppId=e,t.style.cssText=F,t.title="Record this buyer's offer on the property and advance to 'Made an Offer'",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=In();!o||!o.locationId||o.oppId!==e||ny({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=t.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),t.style.background=n.emeraldGlow,t.style.color=n.emeraldBright,t.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",t.style.cssText=F)},4e3)}})}),t},sy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],iy=async()=>{for(let e of sy)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Mn=!1,Hs=async()=>{if(!Mn){Mn=!0;try{await ly()}finally{Mn=!1}}},ly=async()=>{let e=In();if(!e||!e.locationId){document.getElementById(Oe)?.remove(),document.getElementById(`${Oe}-wrap`)?.remove(),er();return}let t=document.getElementById(Oe);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Oe}-wrap`)?.remove(),er());return}t&&(t.remove(),document.getElementById(`${Oe}-wrap`)?.remove());let o=await iy();if(!o){m.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=In();if(!a||a.oppId!==e.oppId)return;let s=ay(e.oppId),i=document.createElement("span");i.id=`${Oe}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted MT Offer Made button on opp ${e.oppId}`),dy(e.oppId)},Xo=null,Bs=null,no,er=()=>{Xo?.disconnect(),Xo=null,Bs=null,no!==void 0&&(window.clearTimeout(no),no=void 0)},dy=e=>{if(Xo&&Bs===e)return;er();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Bs=e,Xo=new MutationObserver(()=>{no===void 0&&(no=window.setTimeout(()=>{no=void 0;let o=In();if(!o||o.oppId!==e){er();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Oe)?.remove(),document.getElementById(`${Oe}-wrap`)?.remove(),er();return}document.getElementById(Oe)||Hs()},250))}),Xo.observe(t,{childList:!0,subtree:!0}))},cy=()=>{ee("mt-offer-made",re,()=>{!document.getElementById(Oe)&&!Mn&&Hs()})},pc=()=>{cy(),Hs()};var py="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",Pe="ws-crm-not-interested-button",my=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,by=/\/v2\/location\/([A-Za-z0-9]+)/,Pn=()=>{let e=window.location.pathname,t=e.match(my),o=t?t[1]:Ce();if(!o)return null;let r=e.match(by);return{oppId:o,locationId:r?r[1]:null}},uy=async e=>{let t=await fetch(py,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Not Interested webhook returned ${t.status} ${t.statusText}`);return await t.json()},hy=e=>{let t=document.createElement("button");return t.id=Pe,t.type="button",t.dataset.oppId=e,t.style.cssText=F,t.title="Close this Marketing Tracker opp as Not Interested for THIS property only",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",async()=>{let o=Pn();if(!o||!o.locationId||o.oppId!==e)return;let r=H(),a=t.querySelector(".ws-ni-label");t.disabled=!0,t.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let s=await uy({oppId:o.oppId,locationId:o.locationId,userId:r});if(s?.ok)a&&(a.textContent="Marked Not Interested"),t.style.background=n.crimsonGlow,t.style.color=n.crimson,m.info(`Not Interested set for opp ${e} \u2192 ${s.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(s){m.error("Not Interested webhook failed",s),a&&(a.textContent="Try again"),t.disabled=!1,t.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),t},_y=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],yy=async()=>{for(let e of _y)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},On=!1,Rs=async()=>{if(!On){On=!0;try{await vy()}finally{On=!1}}},vy=async()=>{let e=Pn();if(!e||!e.locationId){document.getElementById(Pe)?.remove(),document.getElementById(`${Pe}-wrap`)?.remove(),or();return}let t=document.getElementById(Pe);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Pe}-wrap`)?.remove(),or());return}t&&(t.remove(),document.getElementById(`${Pe}-wrap`)?.remove());let o=await yy();if(!o){m.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Pn();if(!a||a.oppId!==e.oppId)return;let s=hy(e.oppId),i=document.createElement("span");i.id=`${Pe}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted Not Interested button on opp ${e.oppId}`),gy(e.oppId)},tr=null,Ds=null,or=()=>{tr?.disconnect(),tr=null,Ds=null},gy=e=>{if(tr&&Ds===e)return;or();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Ds=e,tr=new MutationObserver(()=>{let o=Pn();if(!o||o.oppId!==e){or();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Pe)?.remove(),document.getElementById(`${Pe}-wrap`)?.remove(),or();return}document.getElementById(Pe)||Rs()}),tr.observe(t,{childList:!0,subtree:!0}))},fy=()=>{ee("not-interested",re,()=>{!document.getElementById(Pe)&&!On&&Rs()})},mc=()=>{fy(),Rs()};var xy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",Se="ws-crm-schedule-walkthrough-button",Ns="ws-crm-schedule-walkthrough-modal",wy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,ky=/\/v2\/location\/([A-Za-z0-9]+)/,Dn=()=>{let e=window.location.pathname,t=e.match(wy),o=t?t[1]:Ce();if(!o)return null;let r=e.match(ky);return{oppId:o,locationId:r?r[1]:null}},Bn=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${h.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Ey=(e,t)=>{document.getElementById(Ns)?.remove();let o=document.createElement("div");o.id=Ns,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${Ns} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Marketing Tracker</div>
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
      <button id="wsw-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wsw-submit" type="button" style="${ce}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",d=>{d.target===o&&i()}),document.getElementById("wsw-cancel")?.addEventListener("click",i);let l=document.getElementById("wsw-submit");l?.addEventListener("click",async()=>{let d=document.getElementById("wsw-dt")?.value||"",c=document.getElementById("wsw-dur")?.value||"30";if(!d){Bn("Pick a date and time.","err");return}let p=new Date(d).toISOString();l.disabled=!0,l.textContent="Scheduling\u2026";try{if((await fetch(xy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,start_time:p,duration_min:Number(c)}),credentials:"omit"})).ok){i(),Bn("Walkthrough scheduled \u2713");let u=document.querySelector(`#${Se} .ws-sw-label`);u&&(u.textContent="Walkthrough Scheduled")}else l.disabled=!1,l.textContent="Schedule",Bn("Scheduling failed \u2014 try again.","err")}catch(b){m.warn("[schedule-walkthrough] failed:",b),l.disabled=!1,l.textContent="Schedule",Bn("Couldn't reach the scheduler. Try again.","err")}})},$y=e=>{let t=document.createElement("button");return t.id=Se,t.type="button",t.dataset.oppId=e,t.style.cssText=F,t.title="Schedule this buyer's property walkthrough",t.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=Dn();!o||!o.locationId||o.oppId!==e||Ey(o.oppId,o.locationId)}),t},Ty=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Cy=async()=>{for(let e of Ty)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Hn=!1,zs=async()=>{if(!Hn){Hn=!0;try{await Sy()}finally{Hn=!1}}},Sy=async()=>{let e=Dn();if(!e||!e.locationId){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),nr();return}let t=document.getElementById(Se);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove(),nr());return}t&&(t.remove(),document.getElementById(`${Se}-wrap`)?.remove());let o=await Cy();if(!o){m.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=Dn();if(!a||a.oppId!==e.oppId)return;let s=$y(e.oppId),i=document.createElement("span");i.id=`${Se}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted Schedule Walkthrough button on opp ${e.oppId}`),Ly(e.oppId)},rr=null,Fs=null,ao,nr=()=>{rr?.disconnect(),rr=null,Fs=null,ao!==void 0&&(window.clearTimeout(ao),ao=void 0)},Ly=e=>{if(rr&&Fs===e)return;nr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Fs=e,rr=new MutationObserver(()=>{ao===void 0&&(ao=window.setTimeout(()=>{ao=void 0;let o=Dn();if(!o||o.oppId!==e){nr();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Se)?.remove(),document.getElementById(`${Se}-wrap`)?.remove(),nr();return}document.getElementById(Se)||zs()},250))}),rr.observe(t,{childList:!0,subtree:!0}))},Ay=()=>{ee("schedule-walkthrough",re,()=>{!document.getElementById(Se)&&!Hn&&zs()})},bc=()=>{Ay(),zs()};var My="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",so="ws-crm-resend-deal-link-wrap",Iy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Oy=/\/v2\/location\/([A-Za-z0-9]+)/,Nn=()=>{let e=window.location.pathname,t=e.match(Iy),o=t?t[1]:Ce();if(!o)return null;let r=e.match(Oy);return{oppId:o,locationId:r?r[1]:null}},Py=async e=>{let t=await fetch(My,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,channel:e.channel,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Resend webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},By=e=>e.replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t]||t),uc=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,js=(e,t)=>{e.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=F,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${uc(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>Hy(e,t)),e.appendChild(o)},Hy=(e,t)=>{e.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,s=(l,d)=>{let c=document.createElement("button");return c.type="button",c.textContent=l,c.style.cssText=a,c.addEventListener("click",()=>void Dy(e,t,d,o)),c};o.appendChild(s("Text","sms")),o.appendChild(s("Email","email"));let i=document.createElement("button");i.type="button",i.textContent="\u2715",i.title="Cancel",i.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,i.addEventListener("click",()=>js(e,t)),o.appendChild(i),e.appendChild(o)},Dy=async(e,t,o,r)=>{let a=Nn();if(!(!a||!a.locationId||a.oppId!==t)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let s=await Py({oppId:a.oppId,locationId:a.locationId,channel:o,userId:H()});if(s?.ok)r.innerHTML=`${uc(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,m.info(`Resend deal link (${o}) for opp ${t}`);else throw new Error(s?.error||"Send failed")}catch(s){let i=s instanceof Error?s.message:"Send failed";m.error("Resend deal link failed",s),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${By(i)}</span>`}window.setTimeout(()=>js(e,t),3500)}},Ry=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Ny=async()=>{for(let e of Ry)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Rn=!1,Us=async()=>{if(!Rn){Rn=!0;try{await Fy()}finally{Rn=!1}}},Fy=async()=>{let e=Nn();if(!e||!e.locationId){document.getElementById(so)?.remove(),sr();return}let t=document.getElementById(so);if(t&&t.dataset.oppId===e.oppId){let i=W();i!==null&&i!=="Marketing Tracker"&&(t.remove(),sr());return}t&&t.remove();let o=await Ny();if(!o)return;let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Nn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=so,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",te(o).appendChild(s),js(s,e.oppId),m.debug(`Mounted Resend Deal Link button on opp ${e.oppId}`),zy(e.oppId)},ar=null,qs=null,sr=()=>{ar?.disconnect(),ar=null,qs=null},zy=e=>{if(ar&&qs===e)return;sr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(qs=e,ar=new MutationObserver(()=>{let o=Nn();if(!o||o.oppId!==e){sr();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(so)?.remove(),sr();return}document.getElementById(so)||Us()}),ar.observe(t,{childList:!0,subtree:!0}))},qy=()=>{ee("resend-deal-link",re,()=>{!document.getElementById(so)&&!Rn&&Us()})},hc=()=>{qy(),Us()};var jy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/referred",Uy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/mt-opps",co="ws-crm-add-referral-wrap",Fn="ws-crm-add-referral-contact-btn",Gs="ws-crm-contact-actions-bar",Le="ws-referral-modal",Wy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Gy=/\/v2\/location\/([A-Za-z0-9]+)/,Xe=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),vc=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Ky=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;opacity:0;pointer-events:none;",document.body.appendChild(t),t.select();let o=document.execCommand("copy");return t.remove(),o}catch{return!1}},Vy=e=>{let t=e.trim();if(!t)return{ok:!0,value:""};let o=t.replace(/\D/g,"");return o.length===11&&o.startsWith("1")&&(o=o.slice(1)),o.length!==10?{ok:!1,value:""}:{ok:!0,value:`+1${o}`}},It=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;`,io=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,Ys=e=>{document.getElementById(Le)?.remove();let t=document.createElement("div");t.id=Le,t.style.cssText=`
    position: fixed; inset: 0; z-index: 999999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
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
  `;let r=e.propertyLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${Xe(e.propertyLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>';o.innerHTML=`
    <style id="ws-referral-modal-style">
      #${Le} input::placeholder,
      #${Le} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      #${Le} input:-webkit-autofill,
      #${Le} input:-webkit-autofill:hover,
      #${Le} input:-webkit-autofill:focus,
      #${Le} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${y.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
      #${Le} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Add Referral Buyer</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Creates the buyer, links them to this property's Marketing Tracker, and gets their personalized deal link. Re-adding the same person just returns their existing link.</div>
    ${r}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${io("First Name *")}
        <input id="ws-ref-first" type="text" autocomplete="off" placeholder="Jane" style="${It}">
      </div>
      <div>
        ${io("Last Name")}
        <input id="ws-ref-last" type="text" autocomplete="off" placeholder="Doe" style="${It}">
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${io("Phone")}
        <input id="ws-ref-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${It}">
      </div>
      <div>
        ${io("Email")}
        <input id="ws-ref-email" type="email" autocomplete="off" placeholder="jane@company.com" style="${It}">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      ${io("Buyer Status")}
      <select id="ws-ref-status" style="${It} cursor: pointer;">
        <option value="Unqualified" selected>Unqualified (partial address on deal page)</option>
        <option value="Qualified">Qualified (full address on deal page)</option>
      </select>
    </div>

    <div style="margin-bottom: 14px;">
      ${io("Note (optional)")}
      <textarea id="ws-ref-note" rows="2" autocomplete="off" placeholder="e.g. Husband makes the buying decisions \u2014 wife is on the deed" style="${It} resize: vertical;"></textarea>
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
      <button id="ws-ref-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-ref-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add Buyer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Yt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-ref-cancel")?.addEventListener("click",()=>t.remove());let a=o.querySelector("#ws-ref-first"),s=o.querySelector("#ws-ref-phone"),i=o.querySelector("#ws-ref-email"),l=o.querySelector("#ws-ref-send-label");window.setTimeout(()=>a?.focus(),0);let d=()=>{if(!l)return;let c=!!s?.value.trim(),p=!!i?.value.trim();l.textContent=!c&&p?"Email them the link now":"Text them the link now"};s?.addEventListener("input",d),i?.addEventListener("input",d),o.querySelector("#ws-ref-submit")?.addEventListener("click",async()=>{let c=o.querySelector("#ws-ref-err"),p=w=>{c&&(c.textContent=w)};p("");let b=(a?.value||"").trim(),u=(o.querySelector("#ws-ref-last")?.value||"").trim(),_=(s?.value||"").trim(),v=(i?.value||"").trim().toLowerCase(),f=o.querySelector("#ws-ref-status")?.value||"Unqualified",x=(o.querySelector("#ws-ref-note")?.value||"").trim(),$=o.querySelector("#ws-ref-send")?.checked??!0,g=o.querySelector("#ws-ref-close")?.checked??!1;if(!b){p("First name is required.");return}let k=Vy(_);if(!k.ok){p("Phone must be a 10-digit US number.");return}if(v&&!/.+@.+\..+/.test(v)){p("That email doesn't look valid.");return}if(!k.value&&!v){p("Add a phone or an email for the new buyer.");return}let S=o.querySelector("#ws-ref-submit");S&&(S.disabled=!0,S.textContent="Adding\u2026",S.style.opacity="0.7");let T=()=>{S&&(S.disabled=!1,S.textContent="Add Buyer",S.style.opacity="1")};try{let w=await fetch(jy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,referring_mt_opp_id:e.referringOppId,referred:{first_name:b,last_name:u,phone:k.value,email:v,buyer_status:f,note:x},send_link:$,close_original:g,triggered_by_user_id:H()||""}),credentials:"omit"});if(!w.ok)throw new Error(`Webhook returned ${w.status} ${w.statusText}`);let C=await w.json(),E=Array.isArray(C)?C[0]:C;if(!E?.ok){p(E?.error||"Something went wrong \u2014 try again."),T();return}m.info(`Referral buyer added (opp ${E.mt_opp_id||"?"})`),Yy(o,E,e,`${b} ${u}`.trim())}catch(w){m.error("Add referral buyer failed",w),p(`Network error: ${w instanceof Error?w.message:"request failed"}`),T()}})},lo=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;gap:6px;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Yy=(e,t,o,r)=>{let a=[];t.contact_created===!1&&a.push(lo("Existing buyer \u2014 profile reused","info")),t.mt_opp_deduped?a.push(lo(`Existing deal reused${t.mt_opp_stage?` \u2014 ${Xe(t.mt_opp_stage)}`:""}`,"info")):t.mt_opp_created&&a.push(lo(`Deal created${t.mt_opp_stage?` \u2014 ${Xe(t.mt_opp_stage)}`:""}`,"good")),t.sent?a.push(lo(t.sent_channel==="email"?"Email sent \u2713":"Text sent \u2713","good")):t.send_error&&a.push(lo(`Not sent \u2014 ${Xe(t.send_error)}`,"warn")),t.original_closed&&a.push(lo("Original buyer's deal closed (Lost - Withdrew)","info"));let s=(t.warnings||[]).map(d=>`<div style="font-size:11px;color:${n.ash};margin-top:4px;">\xB7 ${Xe(d)}</div>`).join(""),i=t.link?`
      <div style="margin: 16px 0 4px;">
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Their personalized deal link</div>
        <span style="display:flex;gap:8px;align-items:center;">
          <input id="ws-ref-link" type="text" readonly value="${Xe(t.link)}" style="${It} flex:1; font-family:${h.mono}; font-size:12px;">
          <button id="ws-ref-copy" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 16px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600; flex-shrink:0;">Copy</button>
        </span>
      </div>`:`<div style="margin: 16px 0 4px; color:${n.amber}; font-size:13px;">No deal link available \u2014 check the property's landing page setup.</div>`;e.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Referral Added</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${Xe(r||"Buyer")} is set up</div>
    <div style="line-height: 1;">${a.join("")}</div>
    ${s}
    ${i}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      <button id="ws-ref-another" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Add Another</button>
      <button id="ws-ref-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-ref-done")?.addEventListener("click",()=>{document.getElementById(Le)?.remove()}),e.querySelector("#ws-ref-another")?.addEventListener("click",()=>{Ys(o)});let l=e.querySelector("#ws-ref-copy");l?.addEventListener("click",async()=>{let d=await Ky(t.link||"");l.textContent=d?"Copied \u2713":"Copy failed",window.setTimeout(()=>{l.textContent="Copy"},2e3)})},Jy=e=>new Promise(t=>{document.getElementById(Le)?.remove();let o=document.createElement("div");o.id=Le,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-ref-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
        <div style="font-size:14px;font-weight:500;">${Xe(i.property_address||"(no address)")}</div>
        ${i.stage_name?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Xe(i.stage_name)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This buyer is on ${e.length} properties</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is the referral about?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-ref-pick-cancel" type="button" style="${F} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-ref-pick-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-ref-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),zn=()=>{let e=window.location.pathname,t=e.match(Wy),o=t?t[1]:Ce();if(!o)return null;let r=e.match(Gy);return{oppId:o,locationId:r?r[1]:null}},Qy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Zy=async()=>{for(let e of Qy)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},qn=!1,Ks=async()=>{if(!qn){qn=!0;try{await Xy()}finally{qn=!1}}},Xy=async()=>{let e=zn();if(!e||!e.locationId){document.getElementById(co)?.remove(),lr();return}let t=document.getElementById(co);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Marketing Tracker"&&(t.remove(),lr());return}t&&t.remove();let o=await Zy();if(!o)return;let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[add-referral] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=zn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=co,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:3;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=F,i.title="The buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal for this property and gets their personalized link",i.innerHTML=`${vc(n.amber)}<span>Add Referral Buyer</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=zn();!l||!l.locationId||Ys({tenantId:l.locationId,referringOppId:l.oppId})}),s.appendChild(i),te(o).appendChild(s),m.debug(`Mounted Add Referral Buyer button on opp ${e.oppId}`),ev(e.oppId)},ir=null,Vs=null,lr=()=>{ir?.disconnect(),ir=null,Vs=null},ev=e=>{if(ir&&Vs===e)return;lr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Vs=e,ir=new MutationObserver(()=>{let o=zn();if(!o||o.oppId!==e){lr();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(co)?.remove(),lr();return}document.getElementById(co)||Ks()}),ir.observe(t,{childList:!0,subtree:!0}))},_c=(e,t)=>{let o=e.querySelector("span");if(!o)return;let r=e.style.color;o.textContent=t.length>72?`${t.slice(0,69)}\u2026`:t,e.style.color=n.crimson,window.setTimeout(()=>{o.textContent="Add Referral Buyer",e.style.color=r},4500)},tv=async e=>{let t=U();if(!t||!t.locationId)return;let o=e.querySelector("span");o&&(o.textContent="Loading deals\u2026"),e.disabled=!0;try{let r=await fetch(`${Uy}?tenant_id=${encodeURIComponent(t.locationId)}&contact_id=${encodeURIComponent(t.contactId)}`,{credentials:"omit"}),a=await r.json(),s=Array.isArray(a)?a[0]:a;if(!s?.ok)throw new Error(s?.error||`Lookup failed (${r.status})`);let i=s.opps||[];if(o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,!i.length){_c(e,"No open Marketing Tracker deals for this buyer");return}let l=i.length===1?i[0]:await Jy(i);if(!l)return;Ys({tenantId:t.locationId,referringOppId:l.mt_opp_id,propertyLabel:l.property_address})}catch(r){m.error("Add referral buyer lookup failed",r),o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,_c(e,r instanceof Error?r.message:"Lookup failed")}},Ws=!1,gc=async()=>{if(!Ws){Ws=!0;try{await ov()}finally{Ws=!1}}},ov=async()=>{if(!U())return;let t=document.getElementById(Gs);if(!t)try{t=await R(`#${Gs}`,{timeoutMs:Et+2e3})}catch{t=null}if(!t)return;if(t.dataset.contactKind!=="buyer"){document.getElementById(Fn)?.remove();return}let o=U();if(!o||!o.locationId)return;let r=document.getElementById(Fn);if(r&&r.dataset.contactId===o.contactId&&r.parentElement===t)return;r?.remove();let a=document.createElement("button");a.type="button",a.id=Fn,a.dataset.contactId=o.contactId,a.style.cssText=F,a.style.order="6",a.title="This buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal and gets their personalized link",a.innerHTML=`${vc(n.amber)}<span>Add Referral Buyer</span>`,a.addEventListener("click",()=>void tv(a)),t.appendChild(a),m.debug(`Mounted Add Referral Buyer on buyer contact ${o.contactId}`)},yc=!1,rv=()=>{yc||(yc=!0,window.setInterval(()=>{let e=document.getElementById(Gs);!e||e.dataset.contactKind!=="buyer"||document.getElementById(Fn)||gc()},3e3))},fc=()=>{ee("add-referral-buyer",re,()=>{!document.getElementById(co)&&!qn&&Ks()}),Ks(),gc(),rv()};var nv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",av="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",Be="ws-crm-reduce-price-button",xc="ws-crm-reduce-price-modal",sv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,iv=/\/v2\/location\/([A-Za-z0-9]+)/,Wn=()=>{let e=window.location.pathname,t=e.match(sv);if(!t)return null;let o=e.match(iv);return{oppId:t[1],locationId:o?o[1]:null}},lv=async e=>{let t=await fetch(nv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,dispo_opp_id:e.oppId,new_price:e.newPrice,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Reduce Price webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},dv=async(e,t)=>{try{let o=new URL(av);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.total_will_text=="number"?a.total_will_text:null}catch(o){return m.warn("[reduce-price] buyer-count fetch failed:",o),null}},cv=(e,t)=>{let o=t!==null?`${t} buyer${t===1?"":"s"}`:"all eligible buyers";return`Confirm that you wish to reduce the price of this property to $${Math.round(e).toLocaleString("en-US")} and resend it to ${o}.

Every one of them gets the new-price SMS immediately. This cannot be reversed.`},jn=()=>{document.getElementById(xc)?.remove()},pv=e=>{jn();let t=document.createElement("div");t.id=xc,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
      font-family: ${h.mono};
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
      <input id="ws-reduce-price-input" type="text" inputmode="numeric" placeholder="125,000"
        style="
          width: 100%;
          background: ${n.slate};
          border: 1px solid ${n.steel};
          border-radius: ${y.sm};
          color: ${n.bone};
          font-family: ${h.sans};
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
        font-family: ${h.sans};
        font-size: 13px;
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-reduce-submit" type="button" style="
        background: ${n.amber};
        border: 1px solid ${n.amber};
        color: ${n.obsidian};
        padding: 8px 16px;
        border-radius: ${y.sm};
        font-family: ${h.sans};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      ">Reduce Price</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),s=o.querySelector("#ws-reduce-cancel"),i=o.querySelector("#ws-reduce-submit"),l=null;dv(e.oppId,e.locationId).then(c=>{l=c;let p=o.querySelector("#ws-reduce-count");p&&c!==null&&(p.textContent=`${c} buyer${c===1?"":"s"} (active + previously-withdrew)`)}),ke(r),setTimeout(()=>r?.focus(),50);let d=c=>{c.key==="Enter"?(c.preventDefault(),i?.click()):c.key==="Escape"&&(c.preventDefault(),s?.click())};o.addEventListener("keydown",d),t.addEventListener("click",c=>{c.target===t&&jn()}),s?.addEventListener("click",()=>{jn()}),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let c=r.value.trim();if(!c){a.textContent="Enter a new listing price.",r.focus();return}let p=ue(c);if(p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}if(window.confirm(cv(p,l))){a.textContent="",i.disabled=!0,i.textContent="Reducing\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{await lv({oppId:e.oppId,locationId:e.locationId,newPrice:p,userId:H()}),jn(),e.onSuccess()}catch(b){m.error("Reduce Price webhook failed",b),a.textContent=b instanceof Error?b.message:"Something went wrong. Try again.",i.disabled=!1,i.textContent="Reduce Price",i.style.opacity="1",s&&(s.disabled=!1)}}})},mv=(e,t)=>{let o=document.createElement("button");return o.id=Be,o.type="button",o.dataset.oppId=e,o.style.cssText=F,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
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
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=Wn();!r||!r.locationId||r.oppId!==e||pv({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),s=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,s&&(s.style.background=n.emerald,s.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=F,s&&(s.style.background=n.amber,s.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},bv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],uv=async()=>{for(let e of bv)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Un=!1,Qs=async()=>{if(!Un){Un=!0;try{await hv()}finally{Un=!1}}},hv=async()=>{let e=Wn();if(!e||!e.locationId){document.getElementById(Be)?.remove(),document.getElementById(`${Be}-wrap`)?.remove(),cr();return}let t=document.getElementById(Be);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${Be}-wrap`)?.remove(),cr());return}t&&(t.remove(),document.getElementById(`${Be}-wrap`)?.remove());let o=await uv();if(!o){m.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await ne();if(r!=="Disposition"){m.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=Wn();if(!a||a.oppId!==e.oppId)return;let s=mv(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Be}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted Reduce Price button on opp ${e.oppId}`),_v(e.oppId)},dr=null,Js=null,po,cr=()=>{dr?.disconnect(),dr=null,Js=null,po!==void 0&&(window.clearTimeout(po),po=void 0)},_v=e=>{if(dr&&Js===e)return;cr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Js=e,dr=new MutationObserver(()=>{po===void 0&&(po=window.setTimeout(()=>{po=void 0;let o=Wn();if(!o||o.oppId!==e){cr();return}let r=W();if(r!==null&&r!=="Disposition"){document.getElementById(Be)?.remove(),document.getElementById(`${Be}-wrap`)?.remove(),cr();return}document.getElementById(Be)||Qs()},250))}),dr.observe(t,{childList:!0,subtree:!0}))},yv=()=>{ee("reduce-price",re,()=>{!document.getElementById(Be)&&!Un&&Qs()})},wc=()=>{yv(),Qs()};var mo="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",Gn="deals.reinvestos.com";var He="ws-crm-edit-landing-button",vv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,gv=/\/v2\/location\/([A-Za-z0-9]+)/,Vn=()=>{let e=window.location.pathname,t=e.match(vv);if(!t)return null;let o=e.match(gv);return{oppId:t[1],locationId:o?o[1]:null}},fv=(e,t)=>{let o=new URL(`https://${Gn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",mo);let r=H();return r&&o.searchParams.set("user",r),o.toString()},xv=(e,t)=>{let o=document.createElement("button");return o.id=He,o.type="button",o.dataset.oppId=e,o.style.cssText=F,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Deal Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=Vn();if(!r||!r.locationId||r.oppId!==e)return;if(!mo){m.warn("[edit-landing] editor session key not configured in this build");return}let a=fv(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let s=o.querySelector(".ws-elp-label");if(s){let i=s.textContent;s.textContent="Opening editor\u2026",setTimeout(()=>{s.textContent==="Opening editor\u2026"&&(s.textContent=i)},2500)}}),o},wv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],kv=async()=>{for(let e of wv)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Kn=!1,Xs=async()=>{if(!Kn){Kn=!0;try{await Ev()}finally{Kn=!1}}},Ev=async()=>{let e=Vn();if(!e||!e.locationId){document.getElementById(He)?.remove(),document.getElementById(`${He}-wrap`)?.remove(),mr();return}let t=document.getElementById(He);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${He}-wrap`)?.remove(),mr());return}t&&(t.remove(),document.getElementById(`${He}-wrap`)?.remove());let o=await kv();if(!o)return;let r=await ne();if(r!=="Disposition"){m.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=Vn();if(!a||a.oppId!==e.oppId)return;let s=xv(e.oppId,e.locationId),i=document.createElement("span");i.id=`${He}-wrap`,i.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted Edit Landing Page button on opp ${e.oppId}`),$v(e.oppId)},pr=null,Zs=null,bo,mr=()=>{pr?.disconnect(),pr=null,Zs=null,bo!==void 0&&(window.clearTimeout(bo),bo=void 0)},$v=e=>{if(pr&&Zs===e)return;mr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Zs=e,pr=new MutationObserver(()=>{bo===void 0&&(bo=window.setTimeout(()=>{bo=void 0;let o=Vn();if(!o||o.oppId!==e){mr();return}let r=W();if(r!==null&&r!=="Disposition"){document.getElementById(He)?.remove(),document.getElementById(`${He}-wrap`)?.remove(),mr();return}document.getElementById(He)||Xs()},250))}),pr.observe(t,{childList:!0,subtree:!0}))},Tv=()=>{ee("edit-landing-page",re,()=>{!document.getElementById(He)&&!Kn&&Xs()})},kc=()=>{Tv(),Xs()};var Tc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",Cv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",ho="ws-crm-publish-button",br="ws-crm-publish-wrap",Jn="ws-crm-publish-dropdown",Sv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Lv=/\/v2\/location\/([A-Za-z0-9]+)/,ei=()=>{let e=window.location.pathname,t=e.match(Sv);if(!t)return null;let o=e.match(Lv);return{oppId:t[1],locationId:o?o[1]:null}},Ec=async(e,t)=>{try{let o=await fetch(Tc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,dry_run:!0,triggered_by_user_id:H()??null}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[publish] dry_run fetch failed:",o),null}},Av=async(e,t)=>{try{let o=new URL(Cv);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.open_count=="number"?a.open_count:null}catch(o){return m.warn("[publish] buyer-count fetch failed:",o),null}},Mv=e=>`Publish this deal and start the buyer blast?

${e!==null?`${e} matched buyer${e===1?"":"s"}`:"all matched buyers"} will be texted about this property - VIP & Qualified buyers get the full property SMS immediately, Unqualified buyers start the teaser sequence.

This cannot be reversed.`,Iv=async(e,t)=>{let o=await fetch(Tc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,triggered_by_user_id:H()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},Ov=(e,t)=>{if(!mo){m.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${Gn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",mo);let r=H();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},tt=()=>{document.getElementById(Jn)?.remove()},$c=(e,t,o,r,a)=>{tt();let s=document.createElement("div");s.id=Jn;let i=t.getBoundingClientRect();s.style.cssText=`
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
    font-family: ${h.sans};
  `;let l=e.length,d=e.filter(f=>f.filled).length,c=d===l,p=document.createElement("div");p.innerHTML=`
    <div style="
      font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${c?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${c?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${d} of ${l} ready</div>
  `,s.appendChild(p),e.forEach(f=>{let x=document.createElement("div");x.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${f.filled?n.bone:n.ash};
    `;let $=f.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;x.innerHTML=`${$}<span style="flex: 1;">${f.label}</span>`,s.appendChild(x)});let b=document.createElement("div");b.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let u=document.createElement("button");u.type="button",u.textContent="Open editor to finish \u2192",u.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${y.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,u.addEventListener("click",f=>{f.stopPropagation(),Ov(o,r)}),b.appendChild(u);let _=document.createElement("button");_.type="button",_.textContent="Re-check",_.title="Re-check after editing the page",_.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,_.addEventListener("click",f=>{f.stopPropagation(),tt(),a()}),b.appendChild(_),s.appendChild(b),document.body.appendChild(s);let v=f=>{let x=f.target;!s.contains(x)&&!t.contains(x)&&(tt(),document.removeEventListener("click",v))};window.setTimeout(()=>document.addEventListener("click",v),0)},et=(e,t)=>{let o=e.querySelector(".ws-pub-label"),r=e.querySelector(".ws-pub-dot"),a=e.querySelector(".ws-pub-chevron"),s="transparent",i=n.steel,l=n.bone,d=n.coolGray,c="One-Click Dispo",p="",b="pointer",u="1";switch(t.status){case"checking":i=n.steel,l=n.ash,c="Checking\u2026",b="wait",u="0.8";break;case"ready":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="One-Click Dispo";break;case"incomplete":{let _=t.checks?.filter(f=>f.filled).length??0,v=t.checks?.length??0;i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${v} ready`,p="\u25BE";break}case"publishing":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="Publishing\u2026",b="wait",u="0.8";break;case"published":s="transparent",i=n.steel,l=n.ash,d=n.emerald,c="Deal Published",b="default",u="0.9";break;case"error":i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=b,e.style.opacity=u,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="published"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},Pv=(e,t)=>{let o=document.createElement("button");o.id=ho,o.type="button",o.dataset.oppId=e,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${ce}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};et(o,r);let a=!1,s=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let _=await Ec(e,t);if(!_||!Array.isArray(_.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},et(o,r);return}r={status:_.published?"published":_.ready?"ready":"incomplete",checks:_.checks},et(o,r),document.getElementById(Jn)&&r.checks&&$c(r.checks,o,e,t,()=>void s())}finally{a=!1}}},i=async()=>{r={status:"publishing",checks:r.checks},et(o,r),tt();try{let[_,v]=await Promise.all([Ec(e,t),Av(e,t)]);if(_?.published){r={status:"published"},et(o,r),m.info(`[publish] pre-publish check: opp ${e} already published \u2014 skipping`);return}if(!window.confirm(Mv(v))){r={status:"ready",checks:r.checks},et(o,r),m.info(`[publish] rep cancelled publish confirm for opp ${e}`);return}let f=await Iv(e,t);if(f.ok&&f.published)r={status:"published"},et(o,r),m.info(`[publish] published opp ${e}`);else if(f.missing&&f.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},et(o,r);else throw new Error(f.error||"Publish failed")}catch(_){let v=_ instanceof Error?_.message:"Publish failed";m.error("[publish] publish failed",_),r={status:"error",message:v.length>28?"Error \u2014 try again":v},et(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":i();break;case"incomplete":{document.getElementById(Jn)?tt():r.checks&&$c(r.checks,o,e,t,()=>void s());break}case"error":s();break}}),s();let l=Date.now(),d=8e3,c=()=>{o.isConnected&&(a||r.status==="publishing"||r.status==="published"||Date.now()-l<d||(l=Date.now(),s()))},p=()=>c(),b=()=>{document.visibilityState==="visible"&&c()};window.addEventListener("focus",p),document.addEventListener("visibilitychange",b);let u=window.setInterval(()=>{document.body.contains(o)||(window.removeEventListener("focus",p),document.removeEventListener("visibilitychange",b),window.clearInterval(u))},5e3);return o},Bv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Hv=async()=>{for(let e of Bv)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Yn=!1,oi=async()=>{if(!Yn){Yn=!0;try{await Dv()}finally{Yn=!1}}},Dv=async()=>{let e=ei();if(!e||!e.locationId){document.getElementById(ho)?.remove(),document.getElementById(br)?.remove(),tt(),hr();return}let t=document.getElementById(ho);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(br)?.remove(),tt(),hr());return}t&&(t.remove(),document.getElementById(br)?.remove(),tt());let o=await Hv();if(!o)return;let r=await ne();if(r!=="Disposition"){m.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=ei();if(!a||a.oppId!==e.oppId||!a.locationId)return;let s=Pv(e.oppId,a.locationId),i=document.createElement("span");i.id=br,i.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",i.appendChild(s),te(o).appendChild(i),m.debug(`Mounted Publish button on opp ${e.oppId}`),Rv(e.oppId)},ur=null,ti=null,uo,hr=()=>{ur?.disconnect(),ur=null,ti=null,uo!==void 0&&(window.clearTimeout(uo),uo=void 0)},Rv=e=>{if(ur&&ti===e)return;hr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ti=e,ur=new MutationObserver(()=>{uo===void 0&&(uo=window.setTimeout(()=>{uo=void 0;let o=ei();if(!o||o.oppId!==e){hr();return}let r=W();if(r!==null&&r!=="Disposition"){document.getElementById(ho)?.remove(),document.getElementById(br)?.remove(),tt(),hr();return}document.getElementById(ho)||oi()},250))}),ur.observe(t,{childList:!0,subtree:!0}))},Nv=()=>{ee("publish-button",re,()=>{!document.getElementById(ho)&&!Yn&&oi()})},Cc=()=>{Nv(),oi()};var Sc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",Lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var Fv=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],Ac=e=>`ws-crm-map-links-${e}`,Mc=()=>Array.from(document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']")),Qn=(e,t)=>{let o=t.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let s=a.querySelector("input, textarea");if(s&&(s.value||"").trim())return s.value.trim()}return""},Ic=(e,t=Mc())=>{let o=Qn(t,e.addr),r=Qn(t,e.city),a=Qn(t,e.state),s=Qn(t,e.zip),i;return r&&o&&o.toLowerCase().includes(r.toLowerCase())?i=o:i=[o,r,a,s].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},zv=e=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`,qv=e=>`https://www.zillow.com/homes/${e.replace(/\s+/g,"-")}_rb`,jv=(e,t)=>{let{full:o,hasAny:r}=Ic(e);r&&window.open(t(o),"_blank","noopener,noreferrer")},Uv=e=>{let t=document.createElement("span");t.id=Ac(e.key),t.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",t.appendChild(o);let r=(a,s,i)=>{let l=document.createElement("img");return l.src=a,l.title=s,l.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",l.addEventListener("mouseenter",()=>{l.style.transform="scale(1.12)"}),l.addEventListener("mouseleave",()=>{l.style.transform="scale(1)"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),jv(e,i)}),l};return t.appendChild(r(Sc,"Open in Google Maps",zv)),t.appendChild(r(Lc,"Search on Zillow",qv)),t},Wv=(e,t)=>{let o=t.addr.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},Oc=()=>{let e=Mc();if(e.length)for(let t of Fv){if(document.getElementById(Ac(t.key)))continue;let{hasAny:o}=Ic(t,e);if(!o)continue;let r=Wv(e,t);r&&(r.style.display="flex",r.style.alignItems="center",r.style.width="100%",r.appendChild(Uv(t)),m.debug(`[map-links] injected on "${t.addr}"`))}},_o=null,yo,Gv=()=>{let e=Wt();return e==="contact-detail"||e==="other"},Kv=()=>{_o||(_o=new MutationObserver(()=>{yo===void 0&&(yo=window.setTimeout(()=>{yo=void 0;try{Oc()}catch(e){m.warn("[map-links] ensureInjected failed",e)}},300))}),_o.observe(document.body,{childList:!0,subtree:!0}))},Pc=()=>{_o&&(_o.disconnect(),_o=null),yo!==void 0&&(window.clearTimeout(yo),yo=void 0)},Bc=()=>{if(!Gv()){Pc();return}Kv(),Oc()},Hc=()=>{Pc()};var Dc="ws-crm-hide-launchpad",ri=/\/launchpad\/?$/,ni=()=>{if(!lt()){if(!document.getElementById(Dc)){let e=document.createElement("style");e.id=Dc,e.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(e),m.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(ri.test(location.pathname)){let e=location.pathname.replace(ri,"/dashboard")+location.search;m.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${e}`);try{history.replaceState({},"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.setTimeout(()=>{(!!document.getElementById("launchpad-main")||!!document.querySelector('[class*="launchpad-container"]'))&&!ri.test(location.pathname)&&(m.warn("[hide-launchpad] SPA redirect ignored by router \u2014 hard nav fallback"),location.replace(e))},2e3)}catch(t){m.warn("[hide-launchpad] SPA redirect failed, falling back to hard nav",t),location.replace(e)}}}};var vo="rbWy2hPHguDS6WJ3qODY",Vv=[{label:"Buy-Box Entries"},{label:"Memberships"},{label:"AI Agents",onlyLocation:vo},{label:"Marketing",onlyLocation:vo},{label:"Sites",onlyLocation:vo},{label:"Media Storage",onlyLocation:vo},{label:"Reporting",onlyLocation:vo},{label:"Settings",onlyLocation:vo}],ai="wsCrmNavHidden",si=e=>{let t=lt(),o=new Set(Vv.filter(r=>(r.agencyToo||!t)&&(!r.onlyLocation||r.onlyLocation===e)).map(r=>r.label.trim().toLowerCase()));document.querySelectorAll(".nav-title").forEach(r=>{let a=(r.textContent||"").trim().toLowerCase(),s=r.closest("a")||r.closest("li")||r.parentElement;s instanceof HTMLElement&&(o.has(a)?s.style.display!=="none"&&(s.style.setProperty("display","none","important"),s.dataset[ai]="1",m.info(`[hide-nav-items] hid "${r.textContent?.trim()}"`)):s.dataset[ai]==="1"&&(s.style.removeProperty("display"),delete s.dataset[ai],m.info(`[hide-nav-items] restored "${r.textContent?.trim()}" (agency)`)))})},Rc=!1,Yv=()=>{Rc||(Rc=!0,window.addEventListener("ws-crm-agency-changed",()=>{m.info("[hide-nav-items] agency verdict changed \u2014 reconciling nav"),si(J())}))},ii=()=>{let e=J();Yv(),si(e);for(let t of[150,500,1200,2500,4e3])setTimeout(()=>si(e),t)};var Jv=[{from:"Payments",to:"Contracts"}],Qv=".nav-title, .topmenu-navtitle",Nc=()=>{document.querySelectorAll(Qv).forEach(e=>{let t=(e.textContent||"").trim(),o=Jv.find(r=>r.from===t);o&&(e.textContent=o.to,m.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},li=()=>{Nc();for(let e of[150,500,1200,2500])setTimeout(Nc,e)};var Fc="/payments/proposals-estimates",Zv=/\/payments\/invoices\/?$/,Xv=/\/payments\//,eg='#sb_payments, a[meta="payments"]',qc=(e=0)=>{if(e>25)return;let t=location.pathname;if(!t.includes(Fc)&&!(e>3&&!Xv.test(t))){if(Zv.test(t)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(Fc));if(o){m.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>qc(e+1),120)}},zc=!1,tg=()=>{zc||(zc=!0,document.addEventListener("click",e=>{e.target?.closest?.(eg)&&setTimeout(()=>qc(),80)},!0),m.info("[contracts-section] section-entry redirect armed"))},di=()=>{tg()};var jc=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],Uc="ws-crm-hide-topmenu-tabs",ci=()=>{if(document.getElementById(Uc))return;let e=jc.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),t=document.createElement("style");t.id=Uc,t.textContent=`${e}{display:none !important;}`,(document.head||document.documentElement).appendChild(t),m.info(`[hide-topmenu-tabs] hid ${jc.length} top tabs`)};var Kc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",pt="ws-crm-send-to-closing-office-button",Ot="ws-crm-send-to-title-co-wrap",ea="ws-crm-stc-dropdown",og=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,rg=/\/v2\/location\/([A-Za-z0-9]+)/,vr=()=>{let e=window.location.pathname,t=e.match(og);if(!t)return null;let o=e.match(rg);return{oppId:t[1],locationId:o?o[1]:null}},ng=5*60*1e3,bi=e=>`ws-crm-stc-cache:${e}`,ag=e=>{try{let t=window.localStorage.getItem(bi(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>ng||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},sg=(e,t)=>{try{window.localStorage.setItem(bi(e),JSON.stringify(t))}catch{}},Vc=e=>{try{window.localStorage.removeItem(bi(e))}catch{}},pi="ws-crm:opp-fields-updated",Yc=e=>{if(e){Vc(e);try{window.dispatchEvent(new CustomEvent(pi,{detail:{oppId:e}}))}catch{}}},ig=async(e,t)=>{try{let o=await fetch(Kc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:H()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[stc] dry_run fetch failed:",o),null}},lg=async(e,t,o)=>{let r=await fetch(Kc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:H()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},dg=(e,t)=>{let o=e?.name?`${e.name}${e.email?` (${e.email})`:""}`:"the closing agent",r=e?.closingOffice?` at ${e.closingOffice}`:"",a=e?.propertyAddress?` for ${e.propertyAddress}`:"",s=t?`

\u26A0\uFE0F This deal was already sent on ${new Date(t).toLocaleString()} \u2014 this will send it AGAIN.`:"";return`Send this deal${a} to the closing office now?

This emails the executed Purchase + Assignment contracts to ${o}${r}. This cannot be undone.`+s},cg=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!t)return!1;let o=t.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===e)return a.click(),!0;let r=t.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===e)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return m.warn(`[stc] folder tab not found for "${e}"`),!1},Wc=e=>{let t=document.getElementById(e);if(!t){m.warn(`[stc] field ${e} not found in DOM \u2014 can't scroll to it`);return}t.scrollIntoView({behavior:"smooth",block:"center"});let o=t.style.boxShadow,r=t.style.transition;t.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",t.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{t.style.boxShadow=o,window.setTimeout(()=>{t.style.transition=r},400)},2800)},pg=(e,t)=>{if(t&&cg(t)){window.setTimeout(()=>Wc(e),300);return}Wc(e)},De=()=>{document.getElementById(ea)?.remove()},Zn=(e,t,o)=>{De();let r=document.createElement("div");r.id=ea;let a=o.getBoundingClientRect();r.style.cssText=`
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
    font-family: ${h.sans};
  `;let s=e.length,i=e.filter(_=>_.filled).length,l=i===s,d=document.createElement("div");d.innerHTML=`
    <div style="
      font-family: ${h.mono};
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
  `,r.appendChild(d);let c=["TC","ACQ","MT","DISPO","Property"],p={};e.forEach(_=>{p[_.group]||(p[_.group]=[]),p[_.group].push(_)});let b=[...c.filter(_=>p[_]),...Object.keys(p).filter(_=>!c.includes(_))];for(let _ of b){let v=p[_],f=document.createElement("div");f.style.cssText="margin-top: 12px;";let x=document.createElement("div");x.style.cssText=`
      font-family: ${h.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,x.textContent=_,f.appendChild(x),v.forEach($=>{let g=document.createElement("div"),k=!$.filled&&$.navigable&&$.field_id;g.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${y.sm};
        font-size: 12px;
        color: ${$.filled?n.bone:n.ash};
        ${k?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,k&&(g.addEventListener("mouseenter",()=>{g.style.background=n.slate}),g.addEventListener("mouseleave",()=>{g.style.background="transparent"}),g.addEventListener("click",w=>{w.stopPropagation(),$.field_id&&(pg($.field_id,$.folder),De())}));let S=$.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,T=k?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";g.innerHTML=`${S}<span style="flex: 1;">${$.label}</span>${T}`,f.appendChild(g)}),r.appendChild(f)}document.body.appendChild(r);let u=_=>{let v=_.target;!r.contains(v)&&!o.contains(v)&&(De(),document.removeEventListener("click",u))};window.setTimeout(()=>document.addEventListener("click",u),0)},Ge=(e,t)=>{let o=e.querySelector(".ws-stc-label"),r=e.querySelector(".ws-stc-dot"),a=e.querySelector(".ws-stc-chevron"),s,i,l=n.bone,d,c="One-Click Handoff",p="",b="pointer",u="1";switch(t.status){case"checking":s="transparent",i=n.steel,l=n.ash,d=n.coolGray,c="Checking\u2026",b="wait",u="0.8";break;case"ready":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c=t.previouslySentAt?"Re-send Handoff":"One-Click Handoff";break;case"incomplete":{let _=t.checks?.filter(f=>f.filled).length??0,v=t.checks?.length??0;s="transparent",i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${v} Fields Ready`;break}case"sending":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sending\u2026",b="wait",u="0.8";break;case"sent":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sent \u2713";break;case"error":s="transparent",i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=b,e.style.opacity=u,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="sent"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},mg=(e,t)=>{let o=document.createElement("button");o.id=pt,o.type="button",o.dataset.oppId=e;let r=ag(e),a=r?{status:r.checks.every(g=>g.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"},s=r?.send_meta??null;o.style.cssText=`
    ${F}
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
  `,Ge(o,a);let i=new Set,l=async()=>{if(a.status==="sending")return;let g=await ig(e,t);if(!g){a={status:"error",message:"Check failed \u2014 click to retry"},Ge(o,a);return}if(g.rate_limited){v=Date.now()+_,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},Ge(o,a),m.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(v).toLocaleTimeString()}`);return}if(!Array.isArray(g.checks)||g.checks.length===0){a={status:"error",message:g.error||"Check failed \u2014 click to retry"},Ge(o,a),m.warn("[stc] dry_run returned no checks:",g);return}let k=g.pipeline_name;if(k&&k!=="Transaction Coordination"){m.debug(`[stc] dry_run reports pipeline="${k}" (not TC) \u2014 retracting button + caching`),ta.add(e),document.getElementById(pt)?.remove(),document.getElementById(Ot)?.remove(),De(),yr();return}let S=g.checks;if(a.checks&&a.checks.length===g.checks.length){let w=new Set;S=g.checks.map((C,E)=>a.checks[E]?.filled&&!C.filled?i.has(C.label)?C:(w.add(C.label),{...C,filled:!0}):C),i=w}else i=new Set;a={status:S.every(w=>w.filled)?"ready":"incomplete",checks:S,previouslySentAt:g.previously_sent_at??null},(g.closing_agent||g.property_address||g.closing_office)&&(s={name:(g.closing_agent?.name??"").trim(),email:(g.closing_agent?.email??"").trim(),closingOffice:(g.closing_office??"").trim(),propertyAddress:(g.property_address??"").trim()}),sg(e,{checks:S,previously_sent_at:g.previously_sent_at??null,pipeline_name:k,send_meta:s,ts:Date.now()}),Ge(o,a),document.getElementById(ea)&&Zn(S,g.previously_sent_at,o)},d=async()=>{let g=!!a.previouslySentAt;if(window.confirm(dg(s,a.previouslySentAt))){a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},Ge(o,a),De();try{let k=await lg(e,t,g);if(k.needs_confirm){a={status:"ready",checks:k.checks,previouslySentAt:k.previously_sent_at},Ge(o,a),k.checks&&Zn(k.checks,k.previously_sent_at,o);return}if(k.ok){a={status:"sent",checks:k.checks,previouslySentAt:new Date().toISOString()},Ge(o,a),window.setTimeout(()=>{x()},3500);return}a={status:"error",checks:k.checks,message:k.error||"Validation failed"},Ge(o,a),k.checks&&Zn(k.checks,k.previously_sent_at,o)}catch(k){m.error("[stc] send failed:",k),a={status:"error",message:"Network error \u2014 click to retry"},Ge(o,a)}}};o.addEventListener("click",()=>{switch(a.status){case"ready":d();break;case"incomplete":{document.getElementById(ea)?De():a.checks&&Zn(a.checks,a.previouslySentAt,o);break}case"error":case"sent":x();break}});let c,p=!1,b=Date.now(),u=1e4,_=5*60*1e3,v=0,f=!1,x=async()=>{if(o.isConnected&&(f=!0),f&&!o.isConnected)return;let g=vr();if(!(!g||g.oppId!==e)&&!p){if(Date.now()<v){m.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(v).toLocaleTimeString()}`);return}p=!0,b=Date.now();try{await l()}finally{p=!1}}};x();let $=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if($){let g=new MutationObserver(()=>{if(c!==void 0||p)return;let T=Date.now()-b,w=Math.max(1500,u-T);c=window.setTimeout(()=>{c=void 0,a.status!=="sending"&&x()},w)});g.observe($,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let k=T=>{let w=T.detail;if(!w||w.oppId!==e)return;Vc(e);let C=0,E=()=>{if(p&&C<8){C+=1,window.setTimeout(E,500);return}x()};E()};window.addEventListener(pi,k);let S=window.setInterval(()=>{document.body.contains(o)||(g.disconnect(),c!==void 0&&window.clearTimeout(c),window.removeEventListener(pi,k),window.clearInterval(S))},5e3)}return o},bg=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],ug=async()=>{for(let e of bg)try{let t=await R(e,{timeoutMs:1500});if(t)return m.debug(`[send-to-title-co] mount target: ${e}`),t}catch{}return m.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},ta=new Set,Gc=null,hg=e=>{e&&e!==Gc&&(ta.clear(),Gc=e)},Xn=!1,ui=async()=>{if(Xn){m.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}Xn=!0;try{await _g()}catch(e){m.error("[stc] ensureMountedImpl threw:",e)}finally{Xn=!1}},_g=async()=>{m.debug("[stc] mount:01 ensureMountedImpl entered");let e=vr();if(!e||!e.locationId){m.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(e)}`),document.getElementById(pt)?.remove(),document.getElementById(Ot)?.remove(),De();return}if(m.debug(`[stc] mount:02 ctx ok \u2014 oppId=${e.oppId} locId=${e.locationId}`),hg(e.oppId),ta.has(e.oppId)){m.debug(`[stc] mount:02-BAIL opp ${e.oppId} previously confirmed non-TC this session`),document.getElementById(pt)?.remove(),document.getElementById(Ot)?.remove(),De();return}let t=document.getElementById(pt);if(t&&t.dataset.oppId===e.oppId){m.debug("[stc] mount:03-SKIP existing button for same opp");let l=W();l!==null&&l!=="Transaction Coordination"&&(t.remove(),document.getElementById(Ot)?.remove(),De(),yr());return}t&&(m.debug("[stc] mount:03 removing stale existing button"),t.remove(),document.getElementById(Ot)?.remove(),De()),m.debug("[stc] mount:04 calling findMountTarget");let o=await ug();if(!o){m.debug("[stc] mount:04-BAIL findMountTarget returned null");return}m.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=W();if(r!==null&&r!=="Transaction Coordination"){m.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=vr();if(!a||a.oppId!==e.oppId||!a.locationId){m.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${e.oppId} now=${a?.oppId}`);return}m.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let s=mg(e.oppId,a.locationId),i=document.createElement("span");i.id=Ot,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,i.appendChild(s),te(o).appendChild(i),m.debug(`[stc] mount:07-OK Mounted on opp ${e.oppId}, inDoc=${document.body.contains(s)}`),yg(e.oppId)},_r=null,mi=null,yr=()=>{_r?.disconnect(),_r=null,mi=null},yg=e=>{if(_r&&mi===e)return;yr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(mi=e,_r=new MutationObserver(()=>{let o=vr();if(!o||o.oppId!==e){yr();return}let r=W();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(pt)?.remove(),document.getElementById(Ot)?.remove(),De(),yr();return}document.getElementById(pt)||ui()}),_r.observe(t,{childList:!0,subtree:!0}))},vg=()=>{ee("send-to-closing",re,()=>{if(document.getElementById(pt)||Xn)return;let e=vr();e&&ta.has(e.oppId)||ui()})},Jc=()=>{vg(),ui()};var Qc="ws-crm-vault-datepicker-panel",gg=1000010,Zc=264,fg=["S","M","T","W","T","F","S"],xg=["January","February","March","April","May","June","July","August","September","October","November","December"],Xc=()=>{let e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),t=o=>Number(e.find(r=>r.type===o)?.value??"0");return{y:t("year"),m:t("month"),d:t("day")}},wg=e=>e%4===0&&e%100!==0||e%400===0,hi=(e,t)=>[31,wg(e)?29:28,31,30,31,30,31,31,30,31,30,31][t-1],kg=({y:e,m:t,d:o})=>o<hi(e,t)?{y:e,m:t,d:o+1}:t<12?{y:e,m:t+1,d:1}:{y:e+1,m:1,d:1},ra=e=>String(e).padStart(2,"0"),_i=({y:e,m:t,d:o})=>`${e}-${ra(t)}-${ra(o)}`,oa=e=>{let[t,o,r]=e.split("-").map(Number);return{y:t,m:o,d:r}},Eg=e=>{let{y:t,m:o,d:r}=oa(e);return`${ra(o)}/${ra(r)}/${t}`},$g=()=>_i(kg(Xc())),Tg=(e,t,o)=>{let r=[0,3,2,5,0,3,5,1,4,6,2,4],a=t<3?e-1:e;return(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+r[t-1]+o)%7},na=(e,t)=>`<input id="${e}" type="text" inputmode="none" readonly autocomplete="off" placeholder="MM/DD/YYYY" data-vault-datepicker-field="1" style="${t}cursor:pointer;caret-color:transparent;">`,aa=e=>e?.dataset.isoValue??"",sa=(e,t={})=>{let o=document.getElementById(e);if(!o){m.warn(`[vault-datepicker] #${e} not found \u2014 skipping attach`);return}let r=t.minDate??$g(),a=oa(r),s=_i(Xc()),i=x=>{o.dataset.isoValue=x,o.value=x?Eg(x):""};t.initialValue&&i(t.initialValue);let l=null,d=a.y,c=a.m,p=()=>{l&&(l.remove(),l=null,document.removeEventListener("mousedown",b,!0),document.removeEventListener("keydown",u,!0))};function b(x){let $=x.target;l&&!l.contains($)&&$!==o&&p()}function u(x){x.key==="Escape"&&p()}let _=x=>{i(x),p(),t.onChange?.(x)},v=()=>{if(!l)return;let x=l,$=d===a.y&&c===a.m,g=`${xg[c-1]} ${d}`,k=o.dataset.isoValue||"",S=(B,Y)=>`
      <button type="button" data-nav="${B}" aria-label="${B==="prev"?"Previous":"Next"} month" ${Y?"disabled":""} style="
        background:transparent;border:none;color:${Y?n.coolGray:n.ash};
        cursor:${Y?"default":"pointer"};padding:2px 8px;font-size:15px;line-height:1.4;
        border-radius:${y.sm};font-family:${h.sans};
      ">${B==="prev"?"\u2039":"\u203A"}</button>`,T=fg.map(B=>`<div style="text-align:center;font-family:${h.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};padding:4px 0;">${B}</div>`).join(""),w=Tg(d,c,1),C=hi(d,c),E=c===1?12:c-1,L=c===1?d-1:d,A=hi(L,E),M=[];for(let B=0;B<w;B++){let Y=A-w+1+B;M.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};color:${n.coolGray};">${Y}</div>`)}for(let B=1;B<=C;B++){let Y=_i({y:d,m:c,d:B}),X=Y<r,we=Y===k,Me=Y===s,Ie=`text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};border-radius:${y.sm};`;we?Ie+=`background:${n.emerald};color:${n.obsidian};font-weight:600;cursor:pointer;`:X?Ie+=`color:${n.coolGray};opacity:0.5;cursor:default;`:Ie+=`color:${n.bone};cursor:pointer;`,Me&&!we&&(Ie+=`box-shadow:inset 0 0 0 1px ${n.emerald};`),M.push(`<div data-iso="${Y}" style="${Ie}">${B}</div>`)}let O=(w+C)%7,P=O===0?0:7-O;for(let B=1;B<=P;B++)M.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};color:${n.coolGray};">${B}</div>`);x.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 8px 6px;">
        ${S("prev",$)}
        <div style="font-size:12.5px;font-weight:600;color:${n.bone};font-family:${h.sans};">${g}</div>
        ${S("next",!1)}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:0 10px;">${T}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:2px 10px 8px;">${M.join("")}</div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid ${n.steel};">
        <button type="button" data-action="clear" style="background:transparent;border:none;color:${n.emerald};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Clear</button>
        <button type="button" data-action="today" style="background:transparent;border:none;color:${n.emerald};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Today</button>
      </div>
    `;let V=x.querySelector('[data-nav="prev"]');V&&!$&&(V.addEventListener("mouseenter",()=>V.style.color=n.bone),V.addEventListener("mouseleave",()=>V.style.color=n.ash),V.addEventListener("click",()=>{c-=1,c<1&&(c=12,d-=1),v()}));let j=x.querySelector('[data-nav="next"]');j&&(j.addEventListener("mouseenter",()=>j.style.color=n.bone),j.addEventListener("mouseleave",()=>j.style.color=n.ash),j.addEventListener("click",()=>{c+=1,c>12&&(c=1,d+=1),v()})),x.querySelectorAll("[data-iso]").forEach(B=>{let Y=B.dataset.iso||"";!Y||Y<r||(B.addEventListener("mouseenter",()=>{Y!==k&&(B.style.background=n.slate)}),B.addEventListener("mouseleave",()=>{Y!==k&&(B.style.background="transparent")}),B.addEventListener("click",()=>_(Y)))});let K=x.querySelector('[data-action="clear"]');K?.addEventListener("mouseenter",()=>K.style.color=n.emeraldBright),K?.addEventListener("mouseleave",()=>K.style.color=n.emerald),K?.addEventListener("click",()=>_(""));let Z=x.querySelector('[data-action="today"]');Z?.addEventListener("mouseenter",()=>Z.style.color=n.emeraldBright),Z?.addEventListener("mouseleave",()=>Z.style.color=n.emerald),Z?.addEventListener("click",()=>{let B=oa(s);d=B.y,c=B.m,v()})},f=()=>{if(l)return;document.getElementById(Qc)?.remove();let x=o.dataset.isoValue||r,$=oa(x);d=$.y,c=$.m,l=document.createElement("div"),l.id=Qc;let g=o.getBoundingClientRect(),k=Math.max(8,Math.min(g.left,window.innerWidth-Zc-8));l.style.cssText=`
      position:fixed;top:${g.bottom+6}px;left:${k}px;z-index:${gg};
      width:${Zc}px;background:${n.graphite};border:1px solid ${n.steel};
      border-radius:${y.lg};box-shadow:0 14px 34px rgba(0,0,0,0.55);font-family:${h.sans};
    `,document.body.appendChild(l),v(),setTimeout(()=>{document.addEventListener("mousedown",b,!0),document.addEventListener("keydown",u,!0)},0)};o.addEventListener("click",f),o.addEventListener("focus",f)};var wr="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Cg=`${wr}/tc/welcome-call-prefill`,Sg=`${wr}/tc/welcome-call-save`,Lg=`${wr}/tc/order-lockbox`,Ag=`${wr}/tc/order-photos`,Mg=`${wr}/tc/photo-price-quote`,gr="ws-crm-welcome-call-overlay",kr=[{value:15,label:"15 photos"},{value:30,label:"30 photos"},{value:50,label:"50 photos"}],Ig=[{value:"homejab",label:"Schedule photos right now with HomeJab"},{value:"later",label:"I'll schedule photos myself later"}],fi=[{value:"anytime",label:"Anytime"},{value:"8amto11am",label:"8\u201311 AM"},{value:"9amto12pm",label:"9 AM\u201312 PM"},{value:"10amto1pm",label:"10 AM\u20131 PM"},{value:"11amto2pm",label:"11 AM\u20132 PM"},{value:"12pmto3pm",label:"12\u20133 PM"},{value:"1pmto4pm",label:"1\u20134 PM"},{value:"2pmto5pm",label:"2\u20135 PM"},{value:"3pmto6pm",label:"3\u20136 PM"}],Og=["Regular Contract","Subject To","Seller Finance","Novation"],Pg=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],Bg=["Gas","Electric","Propane","Oil"],Hg=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],Dg=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],mt=["Yes","No"],Rg=["Yes","No","Unknown"],Ng=["Professional Photographer","Seller","Tenant"],Fg=["Month-to-Month","Annual"],ep=["Current","Behind"],zg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],_e=e=>(e==null?"":String(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),wo=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:13px;margin-top:4px;`,xi="margin-bottom:12px;",op=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,qg=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,tp=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),me=(e,t,o)=>{let r=tp(o);return`<select id="${e}" style="${wo}"><option value=""></option>${t.map(a=>`<option ${r!==""&&tp(a)===r?"selected":""}>${_e(a)}</option>`).join("")}</select>`},jg=(e,t,o)=>`<select id="${e}" style="${wo}">${t.map(r=>`<option value="${_e(r.value)}" ${r.value===o?"selected":""}>${_e(r.label)}</option>`).join("")}</select>`,he=(e,t,o="")=>`<input id="${e}" type="text" value="${_e(t)}" placeholder="${_e(o)}" style="${wo}">`,rp=(e,t)=>`<textarea id="${e}" rows="3" style="${wo}resize:vertical;">${_e(t)}</textarea>`,Ug=(e,t)=>`<input id="${e}" type="date" value="${_e(t)}" style="${wo}">`,G=(e,t)=>`<div style="${xi}"><label style="${op}">${_e(e)}</label>${t}</div>`,yi=(e,t)=>{let o=Array.isArray(t)?t:[];return`<div style="margin-top:4px;">${zg.map(r=>`<label style="${qg}"><input type="checkbox" data-grp="${e}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},ot=e=>`<div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${_e(e)}</div>`,fo=()=>{document.getElementById(gr)?.remove()},go=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${y.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${h.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Wg=e=>{let t=e.tenant||{},o=`
    ${G("Who is providing photos?",me("wc-photos_provided_by",Ng,e.photos_provided_by))}
    <div style="${xi}">
      <label style="${op}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${yi("photos_avail_mornings",e.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${yi("photos_avail_afternoons",e.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${yi("photos_avail_evenings",e.photos_avail_evenings)}
    </div>
  `,r=`
    ${Gg()}
    <div id="wc-photos-manual">${o}</div>
    <div id="wc-photos-homejab" style="display:none;">${Kg()}</div>
  `;return`
    ${ot("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${_e(e.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${_e(e.deal_address)||"(no address on file)"}</div>

    ${ot("Contract")}
    ${G("Type of Contract",me("wc-contract_type",Og,e.contract_type))}

    ${ot("Property")}
    ${G("Property Type",me("wc-property_type",Hg,e.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${G("Beds",he("wc-beds",e.beds))}</div>
      <div style="flex:1;">${G("Baths",he("wc-baths",e.baths))}</div>
      <div style="flex:1;">${G("Sq Ft",he("wc-sqft",e.sqft))}</div>
    </div>
    ${G("Utilities",me("wc-utilities",Pg,e.utilities))}
    ${G("Heat Source",me("wc-heat_source",Bg,e.heat_source))}

    ${ot("Liens & Permits")}
    ${G("Is there a mortgage?",me("wc-has_mortgage",mt,e.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${G("Mortgage payment status",me("wc-mortgage_payment_status",ep,e.mortgage_payment_status))}</div>
    ${G("Any other liens? (back taxes, code violations, HELOC, etc.)",me("wc-has_other_liens",mt,e.has_other_liens))}
    ${G("Any open or expired permits?",me("wc-has_permit_issues",mt,e.has_permit_issues))}
    ${G("Is the property in probate?",me("wc-in_probate",mt,e.in_probate))}

    ${ot("Occupancy")}
    ${G("Property occupancy",me("wc-occupancy",Dg,e.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("First name",he("wc-tenant_first_name",t.first_name))}</div>
        <div style="flex:1;">${G("Last name",he("wc-tenant_last_name",t.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Phone",he("wc-tenant_phone",t.phone))}</div>
        <div style="flex:1;">${G("Email",he("wc-tenant_email",t.email))}</div>
      </div>
      ${G("Lease type",me("wc-tenant_lease_type",Fg,t.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Monthly rent",he("wc-tenant_monthly_rent",t.monthly_rent))}</div>
        <div style="flex:1;">${G("Rent due day",he("wc-tenant_rent_due_day",t.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Rent status",me("wc-tenant_rent_status",ep,t.rent_status))}</div>
        <div style="flex:1;">${G("Last rent paid",Ug("wc-tenant_last_rent_paid",t.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Lease on hand?",me("wc-tenant_lease_on_hand",mt,t.lease_on_hand))}</div>
        <div style="flex:1;">${G("Security deposit",he("wc-tenant_security_deposit",t.security_deposit))}</div>
      </div>
      ${G("Selling with tenant in place?",me("wc-selling_with_tenant",mt,e.selling_with_tenant))}
    </div>

    ${ot("HOA")}
    ${G("Part of an HOA?",me("wc-in_hoa",mt,e.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${G("HOA monthly fee",he("wc-hoa_monthly_fee",e.hoa_monthly_fee))}${G("HOA rental restriction?",me("wc-hoa_rental_restriction",Rg,e.hoa_rental_restriction))}</div>

    ${ot("Photos & Access")}
    ${r}

    ${ot("Lockbox")}
    ${G("Lockbox needed?",me("wc-lockbox_needed",mt,e.lockbox_needed))}
    ${G("Lockbox code (agree with the seller; recorded on the property for future use)",he("wc-lockbox_code",e.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Recipient name",he("wc-lockbox_recipient_name",e.lockbox_recipient_name))}</div>
        <div style="flex:1;">${G("Recipient phone",he("wc-lockbox_recipient_phone",e.lockbox_recipient_phone))}</div>
      </div>
      ${G("Mailing address (if different from property)",he("wc-lockbox_mailing_address",e.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${h.sans};cursor:pointer;flex-shrink:0;">${ia(e).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${ia(e).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${ia(e).on?n.emerald:n.amber};flex-shrink:0;"></span>${ia(e).text}</span>
      </div>
      <div id="wc-lockbox-confirmation" style="display:none;margin-top:10px;padding:12px 14px;background:${n.slate};border:1px solid ${n.emeraldBorder};border-radius:${y.sm};"></div>
    </div>

    ${ot("Notes")}
    ${G("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",rp("wc-welcome_call_notes",e.welcome_call_notes))}
  `},N=e=>{let t=document.getElementById(e);return t?(t.value||"").trim():""},vi=e=>Array.from(document.querySelectorAll(`input[data-grp="${e}"]:checked`)).map(t=>t.value),gi=()=>{let e=(o,r)=>{let a=document.getElementById(o);a&&(a.style.display=r?"block":"none")};e("wc-mortgage-detail",N("wc-has_mortgage")==="Yes"),e("wc-hoa-detail",N("wc-in_hoa")==="Yes"),e("wc-lockbox-detail",N("wc-lockbox_needed")==="Yes"),e("wc-tenant-block",N("wc-occupancy")==="Tenant Occupied");let t=document.querySelector('input[name="wc-photo-mode"]:checked')?.value??"later";e("wc-photos-manual",t!=="homejab"),e("wc-photos-homejab",t==="homejab")},ia=e=>{let t=e,o=String(t.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=t.lockbox_order_date?_e(t.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},Gg=()=>`
  <div style="${xi}">
    ${Ig.map(e=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:6px;cursor:pointer;"><input type="radio" name="wc-photo-mode" value="${e.value}" ${e.value==="later"?"checked":""}>${_e(e.label)}</label>`).join("")}
  </div>
`,Kg=()=>{let e=kr.map((t,o)=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wc-op-photocount" value="${t.value}" ${o===1?"checked":""}><span id="wc-op-pkg-label-${t.value}">${_e(t.label)}</span></label>`).join("");return`
    <div id="wc-op-form">
      ${G("Package",`<div style="margin-top:4px;">${e}</div>`)}
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wc-op-aerial"> <span id="wc-op-aerial-label">+ Aerial photos</span></label>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${G("Shoot date",na("wc-op-date",wo))}</div>
        <div style="flex:1;">${G("Time window",jg("wc-op-time",fi,"anytime"))}</div>
      </div>
      ${G("Must-have shots",rp("wc-op-shots",""))}
      ${G("Access notes (beyond the lockbox code on file)",he("wc-op-access","","Optional \u2014 pets, gate code, parking\u2026"))}
      <div id="wc-op-total" style="font-size:13px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wc-op-error" style="display:none;font-size:12px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:8px 10px;margin:2px 0 12px;line-height:1.4;"></div>
      <button type="button" id="wc-order-photos" disabled style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${y.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${h.sans};cursor:pointer;flex-shrink:0;opacity:0.5;">Order Photos</button>
    </div>
  `},wi=e=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file for this account \u2014 the owner needs to add one.":"Lockbox order failed \u2014 try again.",ki=(e,t)=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file \u2014 the owner needs to add one.":e==="vendor_order_failed"?t===!0?"Order failed after payment \u2014 the charge was automatically refunded. Ops has been alerted.":"Order failed after payment and the auto-refund ALSO failed \u2014 ops has been alerted to refund manually.":"Photo order failed \u2014 try again.",Pt=e=>Number.isFinite(e)?Number.isInteger(e)?String(e):e.toFixed(2):"0",xo=(e,t)=>`p${e}${t?"_aerial":""}`,Ei=async e=>{try{let t=await fetch(Mg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,menu:!0}),credentials:"omit"});if(!t.ok){let o="quote_unavailable";try{let r=await t.json();r.reason&&(o=r.reason)}catch{}return{ok:!1,reason:o}}return await t.json()}catch(t){return m.warn("[photo-menu] fetch failed:",t),{ok:!1,reason:"quote_unavailable"}}},$i=(e,t)=>{let o=t?.[xo(e,!1)];return typeof o=="number"?`${e} photos \u2014 $${Pt(o)}`:`${e} photos`},Ti=(e,t)=>{let o=t?.[xo(e,!1)],r=t?.[xo(e,!0)];return typeof o=="number"&&typeof r=="number"?`+ Aerial photos (+$${Pt(r-o)})`:"+ Aerial photos"},fr="Pricing is temporarily unavailable \u2014 try again shortly",xr=e=>`Total: <span style="color:${n.emerald};font-weight:600;">$${Pt(e)}</span> \u2014 charged to the card on file`,Ci=e=>`Order HomeJab photos for this deal now? The card on file will be charged $${Pt(e)}. This cannot be reversed.`,Si=e=>`HomeJab's price just changed \u2014 new total $${Pt(e)}. Confirm again to order.`,Li=(e,t,o)=>`
  <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">HomeJab</div>
  <div style="font-size:14px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:8px;">Paid <span style="color:${n.emerald};">\u2713</span> $${Pt(o)} \u2014 HomeJab order #${_e(t)} placed.</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;margin-bottom:14px;">The shoot will appear on this deal once HomeJab confirms scheduling.</div>
  <button type="button" id="${e}-done" style="${ce} width:100%; justify-content:center;">Done</button>
`,Vg=e=>typeof e=="number"&&Number.isFinite(e)?`Paid <span style="color:${n.emerald};">\u2713</span> $${Pt(e)} \u2014 lockbox ordered`:`Paid <span style="color:${n.emerald};">\u2713</span> \u2014 lockbox ordered`,Yg="Ops will ship it and add tracking to the property record.",np=e=>`
  <div style="font-size:13px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:4px;">${Vg(e)}</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;">${Yg}</div>
`,ap=(e,t)=>`
  <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Lockbox</div>
  ${np(t)}
  <button type="button" id="${e}-done" style="${ce} width:100%; justify-content:center;margin-top:12px;">Done</button>
`,Jg=e=>({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,contract_type:N("wc-contract_type"),property_type:N("wc-property_type"),beds:N("wc-beds"),baths:N("wc-baths"),sqft:N("wc-sqft"),utilities:N("wc-utilities"),heat_source:N("wc-heat_source"),has_mortgage:N("wc-has_mortgage"),mortgage_payment_status:N("wc-mortgage_payment_status"),has_other_liens:N("wc-has_other_liens"),has_permit_issues:N("wc-has_permit_issues"),in_probate:N("wc-in_probate"),occupancy:N("wc-occupancy"),selling_with_tenant:N("wc-selling_with_tenant"),in_hoa:N("wc-in_hoa"),hoa_rental_restriction:N("wc-hoa_rental_restriction"),hoa_monthly_fee:N("wc-hoa_monthly_fee"),photos_provided_by:N("wc-photos_provided_by"),photos_avail_mornings:vi("photos_avail_mornings"),photos_avail_afternoons:vi("photos_avail_afternoons"),photos_avail_evenings:vi("photos_avail_evenings"),lockbox_needed:N("wc-lockbox_needed"),lockbox_code:N("wc-lockbox_code"),lockbox_recipient_name:N("wc-lockbox_recipient_name"),lockbox_recipient_phone:N("wc-lockbox_recipient_phone"),lockbox_mailing_address:N("wc-lockbox_mailing_address"),welcome_call_notes:N("wc-welcome_call_notes"),tenant:N("wc-occupancy")==="Tenant Occupied"?{first_name:N("wc-tenant_first_name"),last_name:N("wc-tenant_last_name"),phone:N("wc-tenant_phone"),email:N("wc-tenant_email"),lease_type:N("wc-tenant_lease_type"),monthly_rent:N("wc-tenant_monthly_rent"),rent_due_day:N("wc-tenant_rent_due_day"),rent_status:N("wc-tenant_rent_status"),last_rent_paid:N("wc-tenant_last_rent_paid"),lease_on_hand:N("wc-tenant_lease_on_hand"),security_deposit:N("wc-tenant_security_deposit")}:void 0}),Qg=e=>{fo();let t=document.createElement("div");t.id=gr,t.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${h.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${gr} input[type="date"]::-webkit-calendar-picker-indicator,#${gr} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${y.lg} ${y.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${Wg(e)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${y.lg} ${y.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${ce}">Complete Welcome Call</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",v=>{v.target===t&&fo()}),document.getElementById("wc-close")?.addEventListener("click",fo),document.getElementById("wc-cancel")?.addEventListener("click",fo);let r=null,a=null,s=0,i=v=>{let f=document.getElementById("wc-order-photos");f&&(f.disabled=v,f.style.opacity=v?"0.5":"1")},l=v=>{let f=document.getElementById("wc-op-error");f&&(f.textContent=v,f.style.display="block")},d=()=>{let v=document.getElementById("wc-op-error");v&&(v.style.display="none",v.textContent="")},c=()=>{let v=Number(document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30"),f=document.getElementById("wc-op-aerial")?.checked??!1;kr.forEach(k=>{let S=document.getElementById(`wc-op-pkg-label-${k.value}`);S&&(S.textContent=$i(k.value,r))});let x=document.getElementById("wc-op-aerial-label");x&&(x.textContent=Ti(v,r));let $=document.getElementById("wc-op-total"),g=r?.[xo(v,f)];typeof g=="number"?(a={tenant_price:g},$&&($.innerHTML=xr(g)),i(!1)):(a=null,$&&($.textContent=r?"":"Getting price\u2026"),i(!0))},p=async()=>{let v=++s;r=null,d(),c();let f=await Ei(String(e.tenant_id??""));if(v===s)if(f.ok&&f.menu)r=f.menu,c();else{r=null;let x=document.getElementById("wc-op-total");x&&(x.textContent=""),l(fr),i(!0)}};["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(v=>{document.getElementById(v)?.addEventListener("change",gi)}),document.querySelectorAll('input[name="wc-photo-mode"]').forEach(v=>{v.addEventListener("change",()=>{gi(),v.checked&&v.value==="homejab"&&p()})}),document.querySelectorAll('input[name="wc-op-photocount"]').forEach(v=>{v.addEventListener("change",c)}),document.getElementById("wc-op-aerial")?.addEventListener("change",c),document.getElementById("wc-op-date")&&sa("wc-op-date"),gi();let b=document.getElementById("wc-save");b?.addEventListener("click",async()=>{if(!N("wc-occupancy")){go("Set the property occupancy before completing.","err");return}b.textContent="Saving\u2026",b.style.opacity="0.8",b.disabled=!0;try{(await fetch(Sg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Jg(e)),credentials:"omit"})).ok?(fo(),go("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,go("Save failed \u2014 try again.","err"))}catch(v){m.warn("[welcome-call] save failed:",v),b.textContent="Complete Welcome Call",b.style.opacity="1",b.disabled=!1,go("Couldn't reach the save handler. Try again.","err")}});let u=document.getElementById("wc-order-lockbox");u?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let v=document.getElementById("wc-lockbox-status"),f=document.getElementById("wc-lockbox-confirmation");u.disabled=!0,u.textContent="Ordering\u2026";try{let x=await fetch(Lg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,ship_to:N("wc-lockbox_mailing_address")||e.deal_address||"",recipient_name:N("wc-lockbox_recipient_name"),recipient_phone:N("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"});if(x.ok){let $=await x.json().catch(()=>({}));u.textContent="Re-order Lockbox",u.disabled=!1,v&&(v.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,v.style.color=n.emerald),f&&(f.innerHTML=np(typeof $.price=="number"?$.price:void 0),f.style.display="block")}else{let $="";try{$=String((await x.json()).reason??"")}catch{}u.textContent="Order Lockbox",u.disabled=!1,go(wi($),"err")}}catch(x){m.warn("[welcome-call] order lockbox failed:",x),u.textContent="Order Lockbox",u.disabled=!1,go("Couldn't reach the lockbox handler. Try again.","err")}});let _=document.getElementById("wc-order-photos");_?.addEventListener("click",async()=>{let v=document.getElementById("wc-op-date"),f=aa(v);if(!f){l("Pick a shoot date first.");return}if(!a){l(fr);return}if(!window.confirm(Ci(a.tenant_price)))return;d();let x=document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30",$=document.getElementById("wc-op-aerial")?.checked??!1,g=document.getElementById("wc-op-time")?.value||"anytime";_.disabled=!0,_.textContent="Ordering\u2026";try{let k=await fetch(Ag,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,package:{photocount:Number(x),aerial:$},quoted_price:a.tenant_price,scheduling_date:f,scheduling_time:g,must_have_shots:N("wc-op-shots"),access_extra:N("wc-op-access")}),credentials:"omit"});if(k.ok){let w=await k.json().catch(()=>({})),C=String(w.hj_order_id??""),E=document.getElementById("wc-op-form");E&&(E.innerHTML=Li("wc-op",C,Number(w.tenant_price??a.tenant_price)),document.getElementById("wc-op-done")?.addEventListener("click",()=>{E.innerHTML=`<span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${n.emerald};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered \u2014 HomeJab #${_e(C)}</span>`}));return}if(k.status===409){let w=null;try{let C=await k.json();C.reason==="reprice"&&typeof C.tenant_price=="number"&&(w=C.tenant_price)}catch{}if(w!==null){a={tenant_price:w};let C=document.getElementById("wc-op-total");C&&(C.innerHTML=xr(w)),l(Si(w))}else l("HomeJab's price just changed. Refresh and try again.");_.disabled=!1,_.textContent="Order Photos";return}let S="",T;try{let w=await k.json();S=String(w.reason??""),T=w.refunded}catch{}_.disabled=!1,_.textContent="Order Photos",l(ki(S,T))}catch(k){m.warn("[welcome-call] order photos failed:",k),_.disabled=!1,_.textContent="Order Photos",l("Couldn't reach the photo order handler. Try again.")}})},sp=async(e,t)=>{fo();let o=document.createElement("div");o.id=gr,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${h.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:e,tenant_id:t};try{let a=await fetch(`${Cg}?tc_opp_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let s=await a.json();r={...s,opp_id:s.opp_id||e,tenant_id:t}}else m.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){m.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=t,Qg(r)};var pa="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Zg=`${pa}/tc/confirm-photo-appointment`,Xg=`${pa}/tc/order-lockbox`,ef=`${pa}/tc/order-photos`,tf=`${pa}/tc/welcome-call-prefill`,Mi="ws-crm-opp-action-bar",lp="ws-crm-opp-overflow",dp="ws-crm-opp-action-menu",ca="ws-crm-opp-action-popover",cp="ws-crm-reorder-lockbox-modal",pp=".hr-card.hr-modal.crm-opportunities-modal",of=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,rf=/\/v2\/location\/([A-Za-z0-9]+)/,mp="Welcome Call Needed",Oi="Scheduling Photos",bp="Photos Scheduled",nf=[mp,Oi,bp,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],up=()=>{let e=window.location.pathname,t=e.match(of);if(!t)return null;let o=e.match(rf);return o?{oppId:t[1],locationId:o[1]}:null},af=()=>{let e=document.querySelector(pp);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(nf.includes(r))return r}return null},Re=()=>{document.getElementById(dp)?.remove(),document.getElementById(ca)?.remove(),document.getElementById(cp)?.remove()},ko=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Bt=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${y.md};
    background: ${n.graphite};
    border: 1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${t==="ok"?n.emerald:n.crimson};
    font-family: ${h.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},sf=e=>{sp(e.oppId,e.locationId)},lf=async(e,t,o)=>{let r=await fetch(Xg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,contact_id:t.contact_id||"",property_record_id:t.property_record_id||"",deal_address:t.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"});if(r.ok){let s;try{let i=await r.json();typeof i.price=="number"&&(s=i.price)}catch{}return{ok:!0,reason:"",price:s}}let a="";try{a=String((await r.json()).reason??"")}catch{}return{ok:!1,reason:a}},df=(e,t)=>{Re();let o=document.createElement("div");o.id=cp,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,i=t.lockbox_mailing_address||t.deal_address||"";r.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${s}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${ko(t.lockbox_recipient_name)}" />
    <label style="${s}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${ko(t.lockbox_recipient_phone)}" />
    <label style="${s}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${ko(i)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${y.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${ce}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let l=()=>o.remove();o.addEventListener("click",c=>{c.target===o&&l()}),document.getElementById("wsrl-cancel")?.addEventListener("click",l);let d=document.getElementById("wsrl-submit");d?.addEventListener("click",async()=>{let c=document.getElementById("wsrl-name")?.value.trim()||"",p=document.getElementById("wsrl-phone")?.value.trim()||"",b=document.getElementById("wsrl-address")?.value.trim()||"";if(!c||!b){Bt("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){d.disabled=!0,d.textContent="Ordering\u2026";try{let u=await lf(e,t,{recipient_name:c,recipient_phone:p,ship_to:b});u.ok?(r.innerHTML=ap("wsrl",u.price),r.querySelector("#wsrl-done")?.addEventListener("click",l)):(d.disabled=!1,d.textContent="Order Lockbox",Bt(wi(u.reason),"err"))}catch(u){m.warn("[action-bar] reorder lockbox failed:",u),d.disabled=!1,d.textContent="Order Lockbox",Bt("Couldn't reach the lockbox handler. Try again.","err")}}})},hp=async e=>{Re();let t={};try{t=await fetch(`${tf}?tc_opp_id=${encodeURIComponent(e.oppId)}&tenant_id=${encodeURIComponent(e.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}df(e,t)},cf=(e,t)=>{Re();let o=document.createElement("div");o.id=ca;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `,o.innerHTML=`
    <style>#${ca} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${ce} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),s=o.querySelector("#wsap-vendor"),i=o.querySelector("#wsap-confirm");i?.addEventListener("click",async()=>{if(!a?.value){Bt("Pick the booked date and time first.","err");return}i.textContent="Booking\u2026",i.style.opacity="0.8";try{(await fetch(Zg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:s?.value?.trim()||null}),credentials:"omit"})).ok?(Re(),Bt("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(i.textContent="Confirm & advance",i.style.opacity="1",Bt("Booking failed \u2014 try again.","err"))}catch(d){m.warn("[action-bar] confirm photo failed:",d),i.textContent="Confirm & advance",i.style.opacity="1",Bt("Couldn't reach the booking handler. Try again.","err")}});let l=d=>{let c=d.target;!o.contains(c)&&!t.contains(c)&&(Re(),document.removeEventListener("click",l))};window.setTimeout(()=>document.addEventListener("click",l),0)},pf=(e,t)=>{Re();let o=document.createElement("div");o.id=ca;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 320px; max-width: 340px;
    max-height: calc(100vh - 90px); overflow-y: auto;
    padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `;let a=`width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${y.sm};color:${n.bone};font-family:${h.sans};font-size:12px;`,s=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,i=kr.map((g,k)=>`<label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wsop-photocount" value="${g.value}" ${k===1?"checked":""}><span id="wsop-pkg-label-${g.value}">${ko(g.label)}</span></label>`).join(""),l=fi.map(g=>`<option value="${ko(g.value)}" ${g.value==="anytime"?"selected":""}>${ko(g.label)}</option>`).join("");o.innerHTML=`
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Order Photos \u2014 HomeJab</div>
    <div id="wsop-form">
      <label style="${s}">Package</label>
      <div style="margin:2px 0 10px;">${i}</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wsop-aerial"><span id="wsop-aerial-label">+ Aerial photos</span></label>
      <label style="${s}">Shoot date</label>
      ${na("wsop-date",a)}
      <label style="${s}">Time window</label>
      <select id="wsop-time" style="${a}">${l}</select>
      <label style="${s}">Must-have shots</label>
      <textarea id="wsop-shots" rows="2" style="${a}resize:vertical;" placeholder="e.g. curb appeal, kitchen island, primary suite"></textarea>
      <label style="${s}">Access notes (beyond the lockbox code on file)</label>
      <input id="wsop-access" type="text" style="${a}" placeholder="Optional \u2014 pets, gate code, parking\u2026" />
      <div id="wsop-total" style="font-size:11px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wsop-error" style="display:none;font-size:11px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${y.sm};padding:7px 9px;margin:2px 0 12px;line-height:1.4;"></div>
      <button id="wsop-submit" type="button" disabled style="${ce} width:100%; justify-content:center; opacity:0.5;">Order Photos</button>
    </div>
  `,document.body.appendChild(o),sa("wsop-date");let d=null,c=null,p=0,b=g=>{let k=o.querySelector("#wsop-submit");k&&(k.disabled=g,k.style.opacity=g?"0.5":"1")},u=g=>{let k=o.querySelector("#wsop-error");k&&(k.textContent=g,k.style.display="block")},_=()=>{let g=o.querySelector("#wsop-error");g&&(g.style.display="none",g.textContent="")},v=()=>{let g=Number(o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30"),k=o.querySelector("#wsop-aerial")?.checked??!1;kr.forEach(C=>{let E=o.querySelector(`#wsop-pkg-label-${C.value}`);E&&(E.textContent=$i(C.value,d))});let S=o.querySelector("#wsop-aerial-label");S&&(S.textContent=Ti(g,d));let T=o.querySelector("#wsop-total"),w=d?.[xo(g,k)];typeof w=="number"?(c={tenant_price:w},T&&(T.innerHTML=xr(w)),b(!1)):(c=null,T&&(T.textContent=d?"":"Getting price\u2026"),b(!0))},f=async()=>{let g=++p;d=null,_(),v();let k=await Ei(e.locationId);if(g===p)if(k.ok&&k.menu)d=k.menu,v();else{d=null;let S=o.querySelector("#wsop-total");S&&(S.textContent=""),u(fr),b(!0)}};o.querySelectorAll('input[name="wsop-photocount"]').forEach(g=>{g.addEventListener("change",v)}),o.querySelector("#wsop-aerial")?.addEventListener("change",v),f();let x=o.querySelector("#wsop-submit");x?.addEventListener("click",async()=>{let g=o.querySelector("#wsop-date"),k=aa(g);if(!k){u("Pick a shoot date first.");return}if(!c){u(fr);return}if(!window.confirm(Ci(c.tenant_price)))return;_();let S=o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30",T=o.querySelector("#wsop-aerial")?.checked??!1,w=o.querySelector("#wsop-time")?.value||"anytime",C=o.querySelector("#wsop-shots")?.value.trim()||"",E=o.querySelector("#wsop-access")?.value.trim()||"";x.disabled=!0,x.textContent="Ordering\u2026";try{let L=await fetch(ef,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,package:{photocount:Number(S),aerial:T},quoted_price:c.tenant_price,scheduling_date:k,scheduling_time:w,must_have_shots:C,access_extra:E}),credentials:"omit"});if(L.ok){let O=await L.json().catch(()=>({})),P=o.querySelector("#wsop-form");P&&(P.innerHTML=Li("wsop",String(O.hj_order_id??""),Number(O.tenant_price??c.tenant_price)),o.querySelector("#wsop-done")?.addEventListener("click",()=>Re()));return}if(L.status===409){let O=null;try{let P=await L.json();P.reason==="reprice"&&typeof P.tenant_price=="number"&&(O=P.tenant_price)}catch{}if(O!==null){c={tenant_price:O};let P=o.querySelector("#wsop-total");P&&(P.innerHTML=xr(O)),u(Si(O))}else u("HomeJab's price just changed. Refresh and try again.");x.disabled=!1,x.textContent="Order Photos";return}let A="",M;try{let O=await L.json();A=String(O.reason??""),M=O.refunded}catch{}x.disabled=!1,x.textContent="Order Photos",u(ki(A,M))}catch(L){m.warn("[action-bar] order photos failed:",L),x.disabled=!1,x.textContent="Order Photos",u("Couldn't reach the photo order handler. Try again.")}});let $=g=>{let k=g.target;!o.contains(k)&&!t.contains(k)&&(Re(),document.removeEventListener("click",$))};window.setTimeout(()=>document.addEventListener("click",$),0)},mf=(e,t)=>{Re();let o=document.createElement("div");o.id=dp;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${y.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `;for(let s of e){let i=document.createElement("div");i.textContent=s.label,i.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${y.sm};cursor:pointer;`,i.addEventListener("mouseenter",()=>i.style.background=n.steel),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",l=>{l.stopPropagation(),s.onClick()}),o.appendChild(i)}document.body.appendChild(o);let a=s=>{let i=s.target;!o.contains(i)&&!t.contains(i)&&(Re(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},Er=(e,t)=>{let o=document.createElement("button");return o.type="button",t==="primary"?o.style.cssText=ce:o.style.cssText=F,o.textContent=e,o},bf=()=>{let e=Er("\u22EE","ghost");return e.style.lineHeight="1",e},uf=(e,t)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",t===mp){let r=Er("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>sf(e)),o.appendChild(r),o}if(t===Oi){let r=Er("Order Photos","ghost");r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Order Photos</span>`,r.addEventListener("click",()=>pf(e,r)),o.appendChild(r);let a=Er("Confirm Photos","ghost");return a.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,a.addEventListener("click",()=>cf(e,a)),o.appendChild(a),o}if(t===bp){let r=Er("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void hp(e)),o.appendChild(r),o}return null},hf=(e,t)=>{let o=[];if(t===Oi&&(o=[{label:"Re-order Lockbox",onClick:()=>void hp(e)}]),!o.length)return null;let r=document.createElement("span");r.id=lp,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=bf();return a.addEventListener("click",s=>{s.stopPropagation(),mf(o,a)}),r.appendChild(a),r},_f=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],yf=async()=>{for(let e of _f)try{let t=await R(e,{timeoutMs:1200});if(t)return t}catch{}return null},la=()=>{document.getElementById(Mi)?.remove(),document.getElementById(lp)?.remove(),Re()},da=!1,Pi=async()=>{if(!da){da=!0;try{let e=up();if(!e){la();return}let t=W();if(t===null)return;if(t!=="Transaction Coordination"){la();return}let o=af(),r=document.getElementById(Mi);if(r&&r.dataset.oppId===e.oppId&&r.dataset.stage===(o??""))return;let a=uf(e,o);if(!a){la();return}let s=await yf();if(!s)return;la();let i=te(s),l=document.createElement("span");l.id=Mi,l.dataset.oppId=e.oppId,l.dataset.stage=o??"",l.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",l.appendChild(a),i.appendChild(l);let d=hf(e,o);d&&i.appendChild(d),vf(e.oppId)}catch(e){m.error("[action-bar] ensureBar threw:",e)}finally{da=!1}}},$r=null,Ii=null,Ai,ip=()=>{$r?.disconnect(),$r=null,Ii=null},vf=e=>{if($r&&Ii===e)return;ip();let t=document.querySelector(pp);t&&(Ii=e,$r=new MutationObserver(()=>{let o=up();if(!o||o.oppId!==e){ip();return}Ai===void 0&&(Ai=window.setTimeout(()=>{Ai=void 0,Pi()},250))}),$r.observe(t,{childList:!0,subtree:!0}))},gf=()=>{ee("opp-action-bar",".crm-opportunities-modal .ui-modal-heading",()=>{da||Pi()})},_p=()=>{gf(),Pi()};var ff="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Bi=null,yp=null,vp=async()=>{let e=J(),t=H();if(!e||!t)return null;if(Bi&&yp===e)return Bi;try{let a=(await(await fetch(ff,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(i=>i.id===t);if(!a)return null;let s={name:[a.first_name,a.last_name].filter(Boolean).join(" ").trim(),email:(a.email??"").trim(),phone:(a.phone??"").trim(),role:(a.roles??[])[0]?.display??""};return Bi=s,yp=e,s}catch(o){return m.warn("[current-rep] roster load failed",o),null}};var rt="ws-support-modal",gp="ws-support-toast",xf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",fp="ws-support-submitter-name",xp="ws-support-submitter-email",wp="ws-support-submitter-role",wf=["Bug","Feature Request","Question","Billing","Onboarding Help"],Ht=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),kf=(e,t="success",o)=>{let r=document.getElementById(gp);r&&r.remove();let a=document.createElement("div");a.id=gp;let s=t==="success"?n.emerald:n.crimson;a.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100000;
    background: ${n.graphite};
    border: 1px solid ${s};
    border-left: 4px solid ${s};
    border-radius: ${y.md};
    padding: 14px 20px;
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-width: 340px;
    animation: ws-toast-in 0.2s ease-out;
  `,a.innerHTML=`
    <div style="font-weight: 500;">${Ht(e)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${Ht(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},$p=()=>{document.getElementById(rt)?.remove();let e=(localStorage.getItem(fp)??"").trim(),t=(localStorage.getItem(xp)??"").trim(),o=(localStorage.getItem(wp)??"").trim(),r={category:null,title:"",description:"",submitterName:e,submitterEmail:t,submitterRole:o},a=document.createElement("div");a.id=rt,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
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
    <button type="button" data-category="${Ht(l)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${y.md};
      padding: 12px 10px; cursor: pointer; font-family: ${h.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${Ht(l)}</button>
  `;s.innerHTML=`
    <style id="ws-support-modal-style">
      /* Muted placeholder ("helper") text inside every field. !important +
         id-scope beats the VAULT theme's global "input::placeholder { coolGray
         !important }" rule (theme-stylesheet.ts ~L945). */
      #${rt} input::placeholder,
      #${rt} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      /* Kill Chrome's autofill wash on Name/Email (the gray box): keep the field
         obsidian and the text bone even when the browser autofills it. */
      #${rt} input:-webkit-autofill,
      #${rt} input:-webkit-autofill:hover,
      #${rt} input:-webkit-autofill:focus,
      #${rt} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${y.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Submit a Support Ticket</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 18px;">Get help from the REInvest OS team. Tickets are tracked and answered as fast as we can.</div>

    <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">Category</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px;">
      ${wf.map(i).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" autocomplete="off" value="${Ht(e)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" autocomplete="off" value="${Ht(t)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" autocomplete="off" value="${Ht(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Title</div>
      <input id="ws-support-title" type="text" autocomplete="off" placeholder="Short summary" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Description</div>
      <textarea id="ws-support-description" rows="5" autocomplete="off" placeholder="Walk us through what happened. The more detail the faster we can help." style="width: 100%; box-sizing: border-box; padding: 10px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; font-family: ${h.sans}; font-size: 13px; resize: vertical;"></textarea>
    </div>

    <div id="ws-support-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-support-close" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${y.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
      <button id="ws-support-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Submit Ticket</button>
    </div>
  `,a.appendChild(s),document.body.appendChild(a),Yt(s),vp().then(l=>{if(!l||!document.getElementById(rt))return;let d=(c,p)=>{let b=s.querySelector(c);b&&!b.value.trim()&&p&&(b.value=p)};d("#ws-support-name",l.name),d("#ws-support-email",l.email),d("#ws-support-role",l.role)}),a.addEventListener("click",l=>{l.target===a&&a.remove()}),s.querySelectorAll(".ws-support-tile").forEach(l=>{l.addEventListener("mouseenter",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow)}),l.addEventListener("mouseleave",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.steel,l.style.background=n.steel)}),l.addEventListener("click",()=>{r.category=l.dataset.category||null,s.querySelectorAll(".ws-support-tile").forEach(d=>{d===l?(d.dataset.selected="true",d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow,d.style.color=n.emeraldBright):(d.dataset.selected="false",d.style.borderColor=n.steel,d.style.background=n.steel,d.style.color=n.bone)})})}),s.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let l=s.querySelector("#ws-support-err"),d=b=>{l&&(l.textContent=b)};if(d(""),r.title=(s.querySelector("#ws-support-title")?.value||"").trim(),r.description=(s.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(s.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(s.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(s.querySelector("#ws-support-role")?.value||"").trim(),!r.category){d("Pick a category at the top.");return}if(!r.title){d("Add a title \u2014 a short summary.");return}if(!r.description){d("Add a description so we know what you're seeing.");return}if(!r.submitterName){d("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){d("Add a valid email so we can reply.");return}let c=J();if(!c){d("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(fp,r.submitterName),localStorage.setItem(xp,r.submitterEmail),r.submitterRole&&localStorage.setItem(wp,r.submitterRole)}catch{}let p=s.querySelector("#ws-support-submit");p&&(p.disabled=!0,p.textContent="Submitting\u2026",p.style.opacity="0.7");try{let u=await(await fetch(xf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:c,category:r.category,title:r.title,description:r.description,submitter_user_id:H()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!u.ok){d(u.error||"Failed to submit ticket."),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1");return}a.remove();let _=u.ticket_short_id||"submitted";kf(`Ticket ${_} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(b){d(`Network error: ${b.message}`),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1")}})},Ef=["/support-ticket","ws-support-modal","ws-support"],$f=/\/custom-menu-link\//,Hi=!1,kp=()=>{if(Hi||!$f.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return Ef.some(i=>s.includes(i))});if(r){Hi=!0,m.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{$p(),Hi=!1},50);return}e<10&&setTimeout(t,150)};t()},Tf=e=>{if(!(e instanceof Element))return!1;let t=e.closest("a.custom-link");return!!t&&/^\s*Support\s*$/.test(t.textContent||"")},Ep=!1,Tp=()=>{Ep||(Ep=!0,document.addEventListener("click",e=>{Tf(e.target)&&(e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),m.info("[support-nav] intercepted Support click (capture) \u2014 opening modal in place, no GHL navigation"),$p())},!0),Te(()=>setTimeout(kp,50)),kp(),m.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var Cp="ws-phone-assignments-modal",Sp="ws-phone-assignments-toast",Cf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Sf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",Lf=["ACQ","DISPO","TC"],Mp="",bt=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Af=(e,t="success",o)=>{document.getElementById(Sp)?.remove();let r=document.createElement("div");r.id=Sp;let a=t==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${y.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${h.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${bt(e)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${bt(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},Mf=(e,t,o)=>{let r=[`<option value="" ${o===Mp?"selected":""}>\u2014 Unassigned \u2014</option>`,...t.map(a=>`<option value="${bt(a)}" ${o===a?"selected":""}>${bt(a)}</option>`)].join("");return`<select data-assign="${bt(e)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${y.sm};
    font-family: ${h.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},If=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,Ri=async e=>{document.getElementById(Cp)?.remove();let t=e||J(),o=document.createElement("div");o.id=Cp,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${h.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${y.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",u=>{u.target===o&&o.remove()}),!t){let u=r.querySelector("#ws-pa-body");u&&(u.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${Cf}?tenant_id=${encodeURIComponent(t)}`,{method:"GET",credentials:"omit"})).json()}catch(u){m.error("[phone-assignments] GET failed",u);let _=r.querySelector("#ws-pa-body");_&&(_.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${bt(u.message)}). The backend may not be wired yet.</span>`);return}let s=a.teams&&a.teams.length?a.teams:Lf,i=a.numbers??[],l={...a.config?.numberTeam??{}},d=u=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${u} found.</div>`,c=i.length?i.map(u=>`<div style="${If}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${bt(u.label||u.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${h.mono};">${bt(u.e164)}</div>
            </div>
            ${Mf(`num:${u.e164}`,s,l[u.e164]??Mp)}
          </div>`).join(""):d("phone numbers"),p=u=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${u}</div>`,b=r.querySelector("#ws-pa-body");b&&(b.innerHTML=`
    ${p("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${y.md};overflow:hidden;">${c}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-family:${h.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-family:${h.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,b.querySelectorAll("select[data-assign]").forEach(u=>{u.addEventListener("change",()=>{let _=u.getAttribute("data-assign")||"",[v,...f]=_.split(":"),x=f.join(":");v==="num"&&(u.value?l[x]=u.value:delete l[x])})}),b.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),b.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let u=b.querySelector("#ws-pa-err"),_=f=>{u&&(u.textContent=f)};_("");let v=b.querySelector("#ws-pa-save");v&&(v.disabled=!0,v.textContent="Saving\u2026",v.style.opacity="0.7");try{let x=await(await fetch(Sf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,numberTeam:l})})).json();if(!x.ok){_(x.error||"Save failed."),v&&(v.disabled=!1,v.textContent="Save",v.style.opacity="1");return}o.remove(),Af("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(f){_(`Network error: ${f.message}`),v&&(v.disabled=!1,v.textContent="Save",v.style.opacity="1")}}))},Of=["ws-phone-assignments","phone-assignments"],Pf=/\/custom-menu-link\//,Di=!1,Lp=()=>{if(Di||!Pf.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return Of.some(i=>s.includes(i))});if(r){Di=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),s=a?a[1]:void 0;m.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${s})`);try{history.back()}catch{}setTimeout(()=>{Ri(s),Di=!1},50);return}e<10&&setTimeout(t,150)};t()},Ap=!1,Ip=()=>{if(Ap)return;Ap=!0,Te(()=>setTimeout(Lp,50)),Lp();let e=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&Ri()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void Ri(),m.info("[phone-assignments] mounted (route + hash + window trigger)")};var Op="powerDialerApp",Bf=".dialer",Hf='button[aria-label="Voice Calling"], button[title="Voice Calling"]',Df=".dial-item.dial-btn.dial-btn-enabled",ht=e=>{for(let t of["pointerdown","mousedown","pointerup","mouseup","click"])try{e.dispatchEvent(new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window}))}catch{}},Rf=e=>{let t=(e||"").match(/\+\d{10,15}/);return t?t[0]:null},Pp=e=>{let t=(e||"").match(/^\+1(\d{3})(\d{3})(\d{4})$/);return t?`(${t[1]}) ${t[2]}-${t[3]}`:e},ut=null,Bp=()=>ut,Ni=()=>{try{let t=window[Op]?._context?.provides?.emitter;if(t&&typeof t.emit=="function")return t}catch(e){m.debug("[dialer-bridge] getEmitter failed",e)}return null},nt=()=>document.querySelector(Bf),ma=()=>Ni()!==null||nt()!==null?!0:!!window[Op],Fi=(e,t)=>{let o=Ni();if(!o)return m.warn(`[dialer-bridge] no emitter; cannot emit ${e}`),!1;try{return o.emit(e,t),!0}catch(r){return m.error(`[dialer-bridge] emit ${e} threw`,r),!1}},zi=()=>{if(nt())return;let e=document.querySelector(Hf);e?ht(e):m.warn("[dialer-bridge] Voice Calling button not found")},Nf=()=>{let e=document.querySelector(".number-list-container")||nt();if(!e)return[];let t=[];for(let o of e.querySelectorAll(".number")){let r=(o.innerText||"").replace(/\s+/g," ").trim();!r||/closest to the contact/i.test(r)||t.push({label:r,el:o})}return t},Tr=()=>{let e=document.querySelector(".number-config, .dialer-config"),t=e?Rf(e.innerText):null;return t&&(ut={e164:t,label:ut?.e164===t?ut.label:void 0}),t},Hp=(e,t)=>{if(Tr()===e)return ut={e164:e,label:t||ut?.label},!0;let o=Ni();if(o)try{return o.emit("selectNumber",{phoneNumber:e,friendlyName:t||e}),ut={e164:e,label:t},!0}catch(r){m.warn("[dialer-bridge] selectNumber emit failed",r)}if(t){let r=document.querySelector(".number-config, .dialer-config");r&&ht(r);let a=Nf(),s=a.find(i=>i.label===t)||a.find(i=>i.label.includes(t));if(s)return ht(s.el),ut={e164:e,label:t},!0}return m.warn(`[dialer-bridge] could not select Calling From ${e} (${t||""})`),!1},Dp=e=>{let t=e.replace(/[^\d*#+]/g,"");if(Fi("sendDigitToDial",{value:t,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of t){let a=o.find(s=>s.querySelector(".dial-number")?.textContent?.trim()===r);a&&ht(a)}},Rp=()=>{let e=nt();if(!e)return m.warn("[dialer-bridge] no dialer present to place call"),!1;let t=e.querySelector(Df)||[...e.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let s=+a[1],i=+a[2],l=+a[3];return i>120&&i>s+40&&i>l+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return t?(ht(t),!0):Fi("makeCall",{provider:"twilio"})},qi=()=>{let e=nt()?.innerText||"";return/Outgoing Call|Connected|On Call|\d{1,2}:\d{2}/.test(e)&&!/Call Summary|Call Ended/.test(e)},ji=()=>{let e=document.getElementById("end-call-button");if(e)return ht(e),!0;let t=nt();if(t){let o=[...t.querySelectorAll("button")].find(a=>{let s=(a.textContent||"").replace(/\s+/g," ").trim();return/^.{0,4}end call.{0,4}$/i.test(s)&&s.length<24});if(o)return ht(o),!0;let r=[...t.querySelectorAll("button, .dial-item")].find(a=>{let i=getComputedStyle(a).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return!1;let l=+i[1],d=+i[2],c=+i[3];return l>150&&l>d+60&&l>c+60&&a.offsetWidth>=32&&a.querySelector("svg")!==null});if(r)return ht(r),!0}return m.warn("[dialer-bridge] endCall: no hang-up control (#end-call-button absent, no End Call button)"),!1},Np=()=>{Fi("closeCallBox")},Fp=e=>{let t=!1,o=()=>{let s=nt()?.innerText||"",i=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(s)&&!/Call Summary|Call Ended/.test(s),l=/Call Summary|Call Ended/.test(s);if(i&&(t=!0),t&&l){t=!1;try{e()}catch(d){m.error("[dialer-bridge] onCallEnded cb threw",d)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var zp={201:[40.84,-74.05],202:[38.9,-77.04],203:[41.29,-73.12],204:[51.2,-98.73],205:[33.43,-86.89],206:[47.56,-122.35],207:[44,-69.99],208:[44.42,-115.56],209:[37.6,-121],210:[29.42,-98.49],212:[40.71,-74.01],213:[34.05,-118.24],214:[32.86,-96.84],215:[40.05,-75],216:[41.47,-81.62],217:[39.92,-88.9],218:[46.3,-94.06],219:[41.57,-87.26],220:[39.75,-82.66],223:[40.15,-76.58],224:[42.15,-87.95],225:[30.45,-91.15],226:[43.23,-81.23],227:[39.05,-77.12],228:[30.39,-88.85],229:[31.21,-83.72],231:[43.02,-85.18],234:[41.06,-81.31],235:[37.15,-93.91],236:[50.43,-121.52],239:[26.46,-81.8],240:[39.05,-77.12],248:[42.54,-83.26],249:[46.04,-80],250:[50.84,-121.84],251:[30.72,-88.06],252:[35.42,-77.43],253:[47.23,-122.37],254:[31.2,-97.58],256:[34.42,-86.64],260:[41.13,-85.13],262:[42.99,-88.04],267:[40.05,-75],269:[42.27,-85.45],270:[37.44,-87.01],272:[41.24,-76.1],274:[43.95,-88.28],276:[37.55,-77.46],279:[38.54,-121.4],281:[29.71,-95.3],283:[39.35,-84.5],289:[43.57,-79.33],301:[39.05,-77.12],302:[39.53,-75.61],303:[39.78,-105],304:[39.36,-81.16],305:[25.74,-80.36],306:[51.4,-105.69],307:[42.4,-105.56],308:[40.92,-99.4],309:[40.93,-89.86],310:[33.9,-118.35],312:[41.88,-88.2],313:[42.31,-83.2],314:[38.65,-90.32],315:[43.25,-75.86],316:[37.69,-97.34],317:[39.87,-86.07],318:[32.28,-92.94],319:[41.92,-91.78],320:[45.56,-94.16],321:[28.38,-81.15],323:[33.99,-118.21],325:[31.96,-100.09],326:[39.85,-84.12],329:[41.47,-74.06],330:[41.06,-81.31],331:[41.88,-88.09],332:[40.71,-74.01],334:[32.19,-85.86],336:[35.99,-79.86],337:[30.24,-92.5],339:[42.39,-71.1],341:[37.43,-121.81],343:[44.96,-76.09],346:[29.71,-95.3],347:[40.69,-73.96],350:[37.6,-121],351:[42.6,-71.23],352:[28.37,-81.78],353:[43.04,-89.56],360:[47.41,-122.57],361:[28.04,-97.42],363:[40.7,-73.6],364:[37.44,-87.01],365:[43.58,-79.35],369:[38.51,-122.53],380:[40.01,-83.01],385:[40.65,-111.88],386:[29.17,-81.11],401:[41.77,-71.42],402:[41.24,-96.88],403:[51.21,-113.59],404:[33.73,-84.37],405:[35.5,-97.41],406:[46.41,-111.57],407:[28.39,-81.31],408:[37.27,-121.88],409:[29.66,-94.44],410:[39.25,-76.59],412:[40.4,-79.92],413:[42.2,-72.71],414:[42.95,-87.95],415:[37.93,-122.52],416:[43.46,-79.7],417:[37.15,-93.91],418:[47.22,-71.38],419:[41.13,-83.21],423:[35.84,-83.68],424:[33.9,-118.35],425:[47.73,-121.86],431:[51.2,-98.73],432:[32.03,-102.02],434:[37.34,-79.02],435:[39.27,-112.69],437:[43.7,-79.42],438:[45.55,-73.88],440:[41.48,-81.7],442:[33.67,-116.76],443:[39.25,-76.59],445:[40.05,-75],447:[39.92,-88.9],448:[30.42,-86.61],450:[45.79,-73.22],458:[43.77,-123.19],463:[39.87,-86.07],464:[41.71,-87.73],469:[32.87,-96.83],472:[34.76,-78.45],475:[41.29,-73.12],478:[32.73,-83.62],479:[35.85,-93.99],480:[33.43,-111.79],484:[40.25,-75.46],501:[34.77,-92.42],502:[38.23,-85.32],503:[45.35,-122.8],504:[29.94,-90.09],505:[35.55,-107.15],506:[46.57,-66.06],507:[44.05,-92.94],508:[42.01,-71.22],509:[46.77,-118.73],510:[37.43,-121.81],512:[30.36,-97.77],513:[39.35,-84.5],514:[46.13,-73.36],515:[41.84,-93.75],516:[40.7,-73.6],517:[42.49,-84.14],518:[42.82,-73.83],519:[43.21,-81.14],520:[32.12,-110.98],530:[39.34,-121.57],531:[41.24,-96.88],539:[36.18,-95.78],540:[37.83,-79.5],541:[43.77,-123.19],551:[40.84,-74.05],557:[38.65,-90.32],559:[36.51,-119.54],561:[26.56,-80.14],562:[33.9,-118.08],563:[41.76,-90.6],564:[47.41,-122.57],567:[41.13,-83.21],570:[41.24,-76.1],571:[38.83,-77.27],572:[35.5,-97.41],573:[38.28,-91.34],574:[41.67,-86.07],575:[33.02,-104.64],579:[45.76,-73.28],580:[35.17,-97.96],581:[47.26,-71.35],582:[40.94,-78.82],585:[43.17,-77.58],586:[42.54,-82.97],587:[52.69,-113.7],601:[32.2,-89.96],602:[33.45,-112.07],603:[43.05,-71.33],604:[49.31,-122.98],605:[44.47,-99.18],606:[38.48,-82.64],607:[42.21,-76.41],608:[43.04,-89.56],609:[39.97,-74.71],610:[40.25,-75.46],612:[44.97,-93.32],613:[44.94,-76.4],614:[40.01,-83.01],615:[36.11,-86.59],616:[42.92,-85.73],617:[42.35,-71.1],618:[38.57,-89.93],619:[32.72,-117.05],620:[38.05,-98.75],623:[33.58,-112.3],626:[34.08,-118.01],628:[37.93,-122.52],629:[36.11,-86.59],630:[41.88,-88.09],631:[40.79,-73.21],636:[38.71,-90.6],639:[51.64,-106],640:[39.97,-74.71],641:[42.07,-92.84],645:[25.74,-80.36],646:[40.71,-74.01],647:[43.7,-79.42],650:[37.53,-122.28],651:[44.91,-93.08],656:[28.05,-82.43],657:[33.8,-117.92],659:[33.43,-86.89],660:[38.7,-93.23],661:[35.12,-118.77],662:[34.11,-89.63],667:[39.25,-76.59],669:[37.27,-121.88],678:[33.81,-84.36],679:[42.31,-83.2],680:[43.25,-75.86],681:[39.36,-81.16],682:[32.76,-97.22],686:[38.83,-77.27],689:[28.39,-81.31],701:[47.46,-99],702:[36.14,-115.11],703:[38.83,-77.27],704:[35.37,-80.75],705:[45.72,-80.31],706:[33.64,-83.94],707:[38.51,-122.53],708:[41.71,-87.73],709:[48.95,-55.96],712:[41.88,-96.13],713:[29.71,-95.3],714:[33.8,-117.92],715:[45.25,-90.7],716:[42.88,-78.9],717:[40.15,-76.58],718:[40.69,-73.96],719:[38.64,-104.75],720:[39.78,-105],724:[40.57,-79.99],725:[36.14,-115.11],726:[29.42,-98.49],727:[28.01,-82.74],730:[38.57,-89.93],731:[35.61,-88.81],732:[40.42,-74.32],734:[42.25,-83.41],737:[30.36,-97.77],740:[39.75,-82.66],743:[35.99,-79.86],747:[34.19,-118.44],754:[26.14,-80.2],757:[36.87,-76.31],760:[33.67,-116.76],762:[33.64,-83.94],763:[45.1,-93.36],765:[40.29,-85.94],769:[32.2,-89.96],770:[33.83,-84.36],771:[38.9,-77.04],772:[27.37,-80.35],773:[41.88,-88.2],774:[42.01,-71.22],775:[38.61,-118.83],778:[50.34,-122.21],779:[42.05,-88.62],780:[53.93,-113.87],781:[42.39,-71.1],782:[45.07,-63.87],785:[38.98,-96.88],786:[25.74,-80.36],801:[40.65,-111.88],802:[44.36,-72.87],803:[34.09,-81.06],804:[37.46,-77.42],805:[34.6,-119.7],806:[34.33,-101.8],807:[47.5,-88.85],808:[20.96,-157.24],810:[42.99,-83.24],812:[38.67,-86.39],813:[28.05,-82.43],814:[40.94,-78.82],815:[42.05,-88.62],816:[39.1,-94.5],817:[32.76,-97.22],818:[34.19,-118.44],819:[46.34,-73.47],820:[34.6,-119.7],825:[53.55,-113.32],826:[37.46,-77.42],828:[35.67,-81.95],830:[29.48,-99.33],831:[36.76,-121.77],832:[29.71,-95.3],835:[40.25,-75.46],838:[42.82,-73.83],839:[34.09,-81.06],840:[34.07,-117.54],843:[33.09,-79.9],845:[41.47,-74.06],847:[42.15,-87.95],848:[40.42,-74.32],850:[30.42,-86.61],854:[33.09,-79.9],856:[39.74,-75.05],857:[42.35,-71.1],858:[32.96,-117.04],859:[38.45,-84.48],860:[41.67,-72.64],861:[40.93,-89.86],862:[40.83,-74.22],863:[28.03,-81.84],864:[34.72,-82.29],865:[35.93,-84.11],867:[62.31,-105.97],870:[34.65,-91.68],872:[41.88,-88.2],873:[46.47,-74.1],878:[40.46,-79.96],901:[35.12,-89.85],902:[45.44,-63.16],903:[33.01,-95.53],904:[30.25,-81.61],905:[43.57,-79.33],907:[60.27,-141.14],908:[40.66,-74.29],909:[34.07,-117.54],910:[34.76,-78.45],912:[32.13,-81.49],913:[39.03,-94.72],914:[41.03,-73.81],915:[31.71,-106.4],916:[38.54,-121.4],917:[40.7,-73.97],918:[36.18,-95.78],919:[35.73,-78.77],920:[43.95,-88.28],925:[37.89,-121.94],928:[34.32,-113.55],929:[40.69,-73.96],930:[38.67,-86.39],931:[36.1,-86.63],934:[40.79,-73.21],936:[30.99,-95.1],937:[39.85,-84.12],938:[34.42,-86.64],940:[33.39,-97.54],941:[27.2,-82.34],943:[33.73,-84.37],945:[32.86,-96.84],947:[42.54,-83.26],948:[36.87,-76.31],949:[33.57,-117.73],951:[33.82,-117.26],952:[44.84,-93.41],954:[26.14,-80.2],956:[26.3,-98.14],959:[41.67,-72.64],970:[40.12,-105.85],971:[45.35,-122.8],972:[32.87,-96.83],973:[40.83,-74.22],978:[42.6,-71.23],979:[30.11,-96.05],980:[35.37,-80.75],983:[39.78,-105],984:[35.73,-78.77],985:[29.98,-90.33],986:[44.42,-115.56],989:[43.53,-84.16]},Ff=3958.8,ba=e=>e*Math.PI/180,zf=(e,t)=>{let o=ba(t[0]-e[0]),r=ba(t[1]-e[1]),a=Math.sin(o/2)**2+Math.cos(ba(e[0]))*Math.cos(ba(t[0]))*Math.sin(r/2)**2;return 2*Ff*Math.asin(Math.sqrt(a))},qp=(e,t)=>{let o=zp[e];if(!o)return null;let r=null;for(let a of[...new Set(t)].sort()){let s=zp[a];if(!s)continue;let i=zf(o,s);(!r||i<r.miles)&&(r={code:a,miles:i})}return r};var qf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",jf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",jp=["acq","dispo","tc"],Sr={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},Cr=null,Up=null,Uf=async(e=!1)=>{let t={numberTeam:{},numberLabel:{}},o=J();if(!o)return t;if(!e&&Cr&&Up===o)return Cr;try{let a=await(await fetch(`${qf}?tenant_id=${encodeURIComponent(o)}`,{method:"GET",credentials:"omit"})).json(),s={};for(let i of a?.numbers??[])i?.e164&&(s[i.e164]=(i.label||"").trim());return Cr={numberTeam:a?.config?.numberTeam??{},numberLabel:s},Up=o,Cr}catch(r){return m.warn("[silo] config load failed",r),Cr??t}},Dt=null,Wp=null,Wi=async(e=!1)=>{let t=J(),o=H();if(!t||!o)return[];if(!e&&Dt&&Wp===t)return Dt;try{let s=(await(await fetch(jf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,action:"list"})})).json())?.roster?.find(i=>i.id===o);if(s){let i=s.role_keys??[];Dt=jp.filter(l=>i.includes(l))}else lt()?Dt=[...jp]:Dt=[];return Wp=t,Dt}catch(r){return m.warn("[silo] roster load failed",r),Dt??[]}},Gp=()=>`ws-pd-calling-as:${H()||"anon"}`,Kp=e=>{try{localStorage.setItem(Gp(),e)}catch{}},Lr=async()=>{let e=await Wi();if(e.length===0)return null;if(e.length===1)return e[0];let t=null;try{t=localStorage.getItem(Gp())}catch{}return t&&e.includes(t)?t:e[0]},Ui=e=>{let t=(e||"").replace(/\D/g,"");return t.length===11&&t[0]==="1"?t.slice(1,4):t.length===10?t.slice(0,3):null},Wf=(e,t)=>Object.entries(e).filter(([,o])=>String(o).toLowerCase()===t).map(([o])=>o),Vp=async e=>{let t=await Lr(),{numberTeam:o,numberLabel:r}=await Uf(),a=Object.keys(o),s=t?Wf(o,t):[];if(!s.length){if(!a.length)return m.debug("[silo] no phone-assignments config; leaving GHL default"),null;m.warn(`[silo] ${t?`${t} pool empty`:"no active team"} \u2014 using all-assigned union (${a.length} numbers)`),s=a}let i=Ui(e),l,d="pool default";if(i)if(l=s.find(b=>Ui(b)===i),l)d="local match";else{let b=new Map;for(let v of s){let f=Ui(v);f&&!b.has(f)&&b.set(f,v)}let u=qp(i,[...b.keys()]),_=u?b.get(u.code):void 0;u&&_&&(l=_,d=`nearest ${u.code}, ~${Math.round(u.miles)}mi`)}if(l||(l=s[0]),!Hp(l,r[l]||void 0))return m.warn(`[silo] could not issue Calling-From ${l} (dialer not ready?)`),null;m.info(`[silo] ${t?Sr[t]:"All teams (no active team)"}: calling ${e} from ${l} (${d})`),await new Promise(b=>setTimeout(b,150));let p=Tr();return p&&p!==l&&m.warn(`[silo] caller-ID did not stick: wanted ${l} but header shows ${p} \u2014 GHL dialer DOM/event may have changed`),l};var Gi="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dialer",Eo=null,Yp=async e=>{if(Eo&&Eo.tenant===e&&Date.now()-Eo.at<5*6e4)return Eo.enabled;try{let o=await(await fetch(`${Gi}/config?tenant_id=${encodeURIComponent(e)}`,{method:"GET",credentials:"omit"})).json(),r=o?.ok===!0&&o?.enabled===!0;return Eo={at:Date.now(),tenant:e,enabled:r},r}catch(t){return m.warn("[endless-feed] config fetch failed \u2014 treating as disabled",t),Eo={at:Date.now(),tenant:e,enabled:!1},!1}},Jp=async(e,t)=>{try{let r=await(await fetch(`${Gi}/next`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,rep_user_id:t})})).json();return r?.ok!==!0?(m.warn(`[endless-feed] dispense not ok: ${r?.error||"unknown"}`),r?.error?null:r):r}catch(o){return m.warn("[endless-feed] dispense failed",o),null}},Qp=(e,t,o,r)=>{fetch(`${Gi}/report`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,rep_user_id:t,contact_id:o,action:r})}).catch(a=>m.warn("[endless-feed] report failed",a))};var Gf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",Zp="data-ws-pd",Xp="ws-crm-pd-panel",em="ws-crm-pd-session",Ee=e=>new Promise(t=>setTimeout(t,e)),_t=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Kf=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector(".crm-opportunities-card-wrapper"))return t;t=t.parentElement}return null},Vf=e=>{let t=[e,...Array.from(e.querySelectorAll("*"))];for(let o of t)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return e},Yf=e=>{let t=[],o=new Set;for(let r of Array.from(e.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),s=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!s||o.has(s))continue;let i=Array.from(r.querySelectorAll("[id]")).find(l=>/^[A-Za-z0-9]{18,22}$/.test(l.id));o.add(s),t.push({oppId:i?.id||"",contactId:s,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return t},$o=null,Jf=async e=>{if($o&&$o.loc===e&&Date.now()-$o.at<6e5)return $o.list;let t=await it(`${Gt}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`);if(!t||!t.ok)return $o?.list??[];let r=((await t.json()).pipelines??[]).map(a=>({id:a.id||"",name:(a.name||"").trim(),stages:(a.stages??[]).map(s=>({id:s.id||"",name:(s.name||"").trim()}))}));return r.length&&($o={loc:e,at:Date.now(),list:r}),r},Qf=(e,t)=>{let o=e.filter(s=>s.stages.some(i=>i.name===t));if(o.length===1)return o[0];if(!o.length)return null;let r=new Set([...document.querySelectorAll("[id^='data-stage-name-']")].map(s=>(s.textContent||"").trim()).filter(Boolean));if(r.size){let s=null,i=-1;for(let l of o){let d=l.stages.filter(c=>r.has(c.name)).length;d>i&&(s=l,i=d)}if(s&&i>=Math.ceil(r.size/2))return s}let a=new Map(o.map(s=>[s.name.toLowerCase(),s]));for(let s of document.querySelectorAll("button, [role='combobox'], [class*='pipeline' i] *, span, div")){if(s.childElementCount>2)continue;let i=(s.textContent||"").replace(/\s+/g," ").trim().toLowerCase();if(!i||i.length>40)continue;let l=a.get(i);if(l&&s.getBoundingClientRect().width)return l}return null},Zf=async(e,t)=>{let o=J();if(!o)return null;let r=await Jf(o);if(!r.length)return m.warn("[bulk-dialer] pipelines unavailable (no captured auth yet?) \u2014 DOM fallback"),null;let a=Qf(r,e),s=a?.stages.find(c=>c.name===e);if(!a||!s)return m.warn(`[bulk-dialer] stage "${e}" ambiguous/unknown across pipelines \u2014 DOM fallback`),null;let i=new Map,l=null,d=20;for(let c=1;c<=d;c++){let p=await it(`${Gt}/opportunities/search?location_id=${encodeURIComponent(o)}&pipeline_id=${a.id}&pipeline_stage_id=${s.id}&limit=100&status=open&page=${c}`);if(!p||!p.ok)return i.size?(m.warn(`[bulk-dialer] stage harvest PARTIAL: ${i.size}${l?` of ~${l}`:""} \u2014 page ${c} fetch failed (auth expired mid-walk?)`),[...i.values()]):null;let b=await p.json(),u=b.opportunities??[];typeof b.meta?.total=="number"&&(l=b.meta.total);for(let _ of u){let v=_.contactId||_.contact?.id||"";if(!v||i.has(v))continue;let f=(_.contact?.name||_.name||v).replace(/\s+/g," ").trim().slice(0,60),x=(_.contact?.phone||"").trim();i.set(v,{oppId:_.id||"",contactId:v,name:f,_phone:/^\+\d{10,15}$/.test(x)?x:void 0})}if(t(i.size,l),u.length<100||l!==null&&i.size>=l)break}return l!==null&&l>d*100&&m.warn(`[bulk-dialer] stage has ${l} opps \u2014 capped at ${d*100}`),m.info(`[bulk-dialer] API stage harvest: ${i.size} opps from "${a.name}" / "${e}"`),[...i.values()]},Xf=async e=>{let t=Kf(e);if(!t)return[];let o=Vf(t),r=-1;for(let a=0;a<60;a++){let s=t.querySelectorAll(".crm-opportunities-card-wrapper").length;if(s===r)break;r=s,o.scrollTop=o.scrollHeight,await Ee(550)}return o.scrollTop=0,Yf(t)},ex=async(e,t)=>{try{let r=await(await fetch(Gf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})})).json();return r?.ok?{name:r.name||"",phone:r.phone||"",skip:!!r.skip}:null}catch(o){return m.warn("[bulk-dialer] resolvePhone failed",o),null}},tx=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`,Vi=(e,t,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(Xp)?.remove();let r=document.createElement("div");r.id=Xp,r.style.cssText=tx;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let s=t.map((T,w)=>`<label data-row="${w}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${w}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_t(T.name||T.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${_t(e)}</div>
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
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-size:13px;font-family:${h.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${y.md};min-height:120px;">${s||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${y.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${h.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${y.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${h.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",T=>{T.target===r&&r.remove()});let i=a.querySelector("#ws-pd-list"),l=a.querySelector("#ws-pd-count"),d=()=>{let T=a.querySelectorAll(".ws-pd-cb:checked").length;l&&(l.textContent=`${T} selected`)};d(),i?.addEventListener("change",d);let c=a.querySelector("#ws-pd-auto-bar"),p=a.querySelector("#ws-pd-auto"),b=a.querySelector("#ws-pd-auto-track"),u=a.querySelector("#ws-pd-auto-knob"),_=()=>{let T=!!p?.checked;b&&(b.style.background=T?n.emerald:n.steel),u&&(u.style.left=T?"20px":"2px"),c?.setAttribute("aria-checked",String(T))},v=()=>{p&&(p.checked=!p.checked,_())};c?.addEventListener("click",v),c?.addEventListener("keydown",T=>{(T.key===" "||T.key==="Enter")&&(T.preventDefault(),v())}),_();let f=a.querySelector("#ws-pd-dd-bar"),x=a.querySelector("#ws-pd-dd"),$=a.querySelector("#ws-pd-dd-track"),g=a.querySelector("#ws-pd-dd-knob");try{x&&(x.checked=localStorage.getItem(tm)==="1")}catch{}let k=()=>{let T=!!x?.checked;$&&($.style.background=T?n.emerald:n.steel),g&&(g.style.left=T?"20px":"2px"),f?.setAttribute("aria-checked",String(T))},S=()=>{x&&(x.checked=!x.checked,k())};f?.addEventListener("click",S),f?.addEventListener("keydown",T=>{(T.key===" "||T.key==="Enter")&&(T.preventDefault(),S())}),k(),a.querySelector("#ws-pd-search")?.addEventListener("input",T=>{let w=T.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach(C=>{let E=(C.textContent||"").toLowerCase();C.style.display=E.includes(w)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",T=>{let w=T.target.checked;a.querySelectorAll("[data-row]").forEach(C=>{if(C.style.display==="none")return;let E=C.querySelector(".ws-pd-cb");E&&(E.checked=w)}),d()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let T=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(E=>{let L=Number(E.getAttribute("data-i"));t[L]&&T.push(t[L])});let w=a.querySelector("#ws-pd-auto")?.checked??!0,C=a.querySelector("#ws-pd-dd")?.checked??!1;try{localStorage.setItem(tm,C?"1":"0")}catch{}r.remove(),T.length&&Yi(e,T,w,C)})},ox=75e3,rx=4e4,nx=30,ax=3,sx=6e3,tm="ws-pd-double-dial",ae=null,Ke,ix=()=>{let e=ae?.appt;if(!e)return"";let t=Math.round((new Date(e.at).getTime()-Date.now())/6e4);if(t>60||t<0)return"";let o=new Date(e.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),r=e.round_robined&&e.booked_by?" \xB7 round-robined, read notes first":"";return`<div style="font-size:11px;color:${t<=15?n.amber:n.ash};margin:2px 0;">\u{1F4C5} ${o} \xB7 ${_t(e.title)} (${t}m)${_t(r)}</div>`},lx=()=>{let e=ae?.lead;if(!e||!e.hot)return"";let t=Math.max(0,Math.round((Date.now()-(ae?.dispensedAtMs||Date.now()))/1e3))+(e.age_seconds||0),o=!e.name||/new lead/i.test(e.name);return`<div style="background:rgba(220,68,68,0.14);border:1px solid ${n.crimson};border-radius:${y.sm};padding:6px 8px;margin:4px 0;font-size:11px;color:${n.bone};">\u{1F525} <strong>NEW PPC LEAD</strong> \xB7 <span id="ws-pd-hotage">${t}</span>s old${o?" \xB7 no name yet, seller may still be on the form":""}</div>`},Yi=async(e,t,o,r=!1,a)=>{let s=J();if(!s)return;document.getElementById(em)?.remove(),ae=a?{rep:a,lead:null,appt:null,dispensedAtMs:0}:null;let i={skip:!1,paused:!1,stopped:!1,advance:!1,redial:!1,cancelRedial:!1,hangupAt:0},l=document.createElement("div");l.id=em,l.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${y.md};padding:14px 16px;color:${n.bone};font-family:${h.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(l);let d={danger:`background:${n.crimson};color:${n.bone};font-weight:600;`,neutral:`background:${n.steel};color:${n.bone};`,primary:`background:${n.emerald};color:${n.obsidian};font-weight:600;`},c=(E,L,A,M)=>{let O=!!ae,P=!!ae?.lead?.hot;l.style.borderLeftColor=P?n.crimson:n.emerald,Ke!==void 0&&(window.clearInterval(Ke),Ke=void 0);let V=O?`Endless Feed \xB7 call ${L+1}${ae?.lead?.why_now&&!ae.lead.hot?` \xB7 ${_t(ae.lead.why_now)}`:""}`:`${_t(e)} \xB7 ${L+1} of ${t.length}`;l.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${P?n.crimson:n.emeraldBright};">Power Dialer${O?" \xB7 Feed":""}</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${V}</div>
      ${lx()}${ix()}
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${_t(A)}</div>
      ${(()=>{let j=Tr()??Bp()?.e164??null;return j?`<div style="font-family:${h.mono};font-size:11px;color:${n.emeraldBright};margin:1px 0 3px;">from ${Pp(j)}</div>`:""})()}
      <div id="ws-pd-status" style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${_t(E)}</div>
      <div style="display:flex;gap:6px;">${M.map(j=>`<button id="${j.id}" style="flex:1;border:none;border-radius:${y.sm};padding:6px;cursor:pointer;font-size:12px;${d[j.kind]}">${j.label}</button>`).join("")}</div>`,l.querySelector("#ws-pd-end")?.addEventListener("click",()=>{i.stopped=!0,b(),Ke!==void 0&&(window.clearInterval(Ke),Ke=void 0),l.remove()});for(let j of M){let K=l.querySelector(`#${j.id}`);K&&K.addEventListener("click",()=>j.on(K))}if(P){let j=ae?.lead?.age_seconds||0,K=ae?.dispensedAtMs||Date.now();Ke=window.setInterval(()=>{let Z=l.querySelector("#ws-pd-hotage");Z&&(Z.textContent=String(j+Math.max(0,Math.round((Date.now()-K)/1e3))))},1e3)}},p=E=>{let L=l.querySelector("#ws-pd-status");L&&(L.textContent=E)},b=E=>{let L=!1;try{L=ji()}catch{}if(!L){try{zi()}catch{}window.setTimeout(()=>{let A=!1;try{A=ji()}catch{}!A&&E&&E()},450)}},u=()=>({id:"ws-pd-pause",label:i.paused?"Resume":"Pause",kind:"neutral",on:E=>{i.paused=!i.paused,E.textContent=i.paused?"Resume":"Pause"}}),_=(E,L,A,M)=>c(M>1?`${E} \xB7 dial ${M}`:E,L,A,[{id:"ws-pd-hangup",label:"Hang Up",kind:"danger",on:()=>{i.hangupAt=Date.now(),b(()=>p("Couldn't hang up. Use the call window"))}},{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{i.skip=!0,b()}},u()]),v=(E,L,A)=>c(E,L,A,[{id:"ws-pd-redial",label:"Redial",kind:"neutral",on:()=>{i.redial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{i.advance=!0}},u()]),f=(E,L,A)=>c(E,L,A,[{id:"ws-pd-dd-skip",label:"Skip 2nd dial",kind:"neutral",on:()=>{i.cancelRedial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{i.advance=!0}},u()]),x=(E,L,A)=>c(E,L,A,[{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{i.skip=!0}},u()]),$=()=>new Promise(E=>{let L=!1,A=()=>{L||(L=!0,window.clearInterval(O),M(),E())},M=Fp(A),O=window.setInterval(()=>{i.stopped||i.skip?A():i.hangupAt&&Date.now()-i.hangupAt>sx&&(i.hangupAt=0,p("No hang-up detected. Call may still be live; Skip to move on"))},300)}),g=async()=>{for(let E=0;E<7;E++){let L=(nt()?.innerText||"").replace(/\s+/g," "),A=L.match(/Call Ended\s+(Completed|Voicemail|No ?Answer|Busy|Failed|Cancell?ed)\b/i),M=L.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Min(?:ute)?s?\s*(\d+)\s*Sec/i)||L.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Sec/i);if(M||A){let O=M?M[2]!==void 0?parseInt(M[1],10)*60+parseInt(M[2],10):parseInt(M[1],10):null;return{outcome:A?A[1].toLowerCase().replace(/\s+/g,"-"):"",talkSecs:O}}await Ee(200)}return{outcome:"",talkSecs:null}},k=async(E,L,A,M)=>{if(Fe()){i.hangupAt=0,_(`Calling ${E}\u2026`,L,A,M);let K=Date.now(),Z=await Jl({phone:E,name:A,leg:M,shouldEnd:()=>i.stopped||i.skip});return{ms:Date.now()-K,repEnded:Z.repEnded||i.skip,outcome:Z.outcome,talkSecs:Z.talkSecs}}if(qi()){b();for(let K=0;K<10&&qi()&&!i.stopped;K++)await Ee(400)}if(await Vp(E),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};i.hangupAt=0,_(`Calling ${E}\u2026`,L,A,M);let O=Date.now();try{if(zi(),await Ee(250),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};if(Dp(E),await Ee(250),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};Rp()}catch(K){m.error("[bulk-dialer] dial failed",K)}await $();let P=i.hangupAt>0||i.skip,V=i.stopped?{outcome:"",talkSecs:null}:await g();if(!i.stopped)try{Np()}catch{}let j={ms:Date.now()-O,repEnded:P,...V};return m.info(`[bulk-dialer] call ended: outcome=${j.outcome||"?"} talk=${j.talkSecs??"?"}s wall=${Math.round(j.ms/1e3)}s repEnded=${P}`),j},S=E=>E.talkSecs!==null&&E.talkSecs>0&&!E.repEnded?!0:E.talkSecs!==null?E.talkSecs>=nx:E.outcome&&!/completed|voicemail/.test(E.outcome)?!1:E.ms>=rx,T=async E=>{let L=Date.now()+E;for(;!i.stopped&&Date.now()<L;)await Ee(200)},w=async E=>{if(!ae)return null;let L=0;for(;!i.stopped;){let A=await Jp(s,ae.rep);if(i.stopped)return null;if(!A){if(L++,L>=3)return x("Feed unavailable. Use a list selection instead - ending.",E,"\xB7"),await T(4e3),null;x(`Feed unavailable, retrying in 20s (${L}/3)\u2026`,E,"\xB7"),await T(2e4);continue}if(L=0,ae.appt=A.next_appointment||null,A.hold){let M=new Date(A.hold.until).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});x(`\u{1F4C5} Holding for your ${M} \xB7 ${A.hold.title}`,E,"Appointment coming up"),await T(3e4);continue}if(!A.lead){if(A.none_reason==="retry")continue;x("Feed empty, rechecking in 60s\u2026",E,"All caught up"),await T(6e4);continue}return ae.lead=A.lead,ae.dispensedAtMs=Date.now(),{oppId:"",contactId:A.lead.contact_id,name:A.lead.name||"New lead (no name yet)",_phone:A.lead.phone}}return null},C=-1;for(;!i.stopped;){C++;let E;if(ae){let X=await w(C);if(!X)break;E=X}else{if(C>=t.length)break;E=t[C]}let L=!1,A=X=>{!ae||L||!E.contactId||(L=!0,Qp(s,ae.rep,E.contactId,X))};i.skip=!1,i.advance=!1,x("Resolving number\u2026",C,E.name);let O=!E.contactId||E.contactId==="__test__"?null:await ex(s,E.contactId);if(i.stopped)break;if(i.skip){A("skipped");continue}if(O?.skip){A("skipped"),x("Called in last 2h, skipping",C,O.name||E.name),await Ee(1200);continue}let P=E._phone||O?.phone||"",V=O?.name||E.name;if(!P){A("skipped"),x("No phone on file, skipping",C,E.name||O?.name||E.contactId),await Ee(1400);continue}if(E.contactId&&E.contactId!=="__test__")try{let we=`/v2/location/${(window.location.pathname.match(/\/v2\/location\/([^/]+)/)||[])[1]||s}/contacts/detail/${E.contactId}`;window.location.pathname!==we&&(history.pushState({},"",we),window.dispatchEvent(new PopStateEvent("popstate")))}catch(X){m.debug("[bulk-dialer] screen-follow nav failed",X)}let j=0,K=!0,Z=!1,B=!1;for(;K&&!i.stopped;){K=!1,j++;let X=await k(P,C,V,j);if(X.ms>0&&(B=!0),i.stopped)break;if(Z=S(X),r&&j===1&&!i.skip&&!Z&&X.ms<ox){i.cancelRedial=!1;let we=!0;for(let Me=ax;Me>0;Me--){for(f(`Double-dialing in ${Me}s\u2026`,C,V);i.paused&&!i.stopped&&!i.cancelRedial&&!i.advance;)await Ee(200);if(i.stopped||i.cancelRedial||i.advance){we=!1;break}await Ee(1e3)}we&&!i.stopped&&(K=!0)}}if(A(B?"dialed":"skipped"),i.stopped)break;let Y=ae?!1:C>=t.length-1;for(;!i.stopped&&(!Y||Z&&!i.skip)&&!i.advance;){if(i.redial=!1,Z&&!i.skip)for(v(Y?"Answered. Set a call status, then Call Next to finish":"Answered. Set a call status, then Call Next",C,V);!i.advance&&!i.stopped&&!i.redial;)await Ee(200);else if(o)for(let X=5;X>0&&!i.stopped&&!i.advance&&!i.redial;X--){for(v(`Next call in ${X}s\u2026`,C,V);i.paused&&!i.stopped&&!i.advance&&!i.redial;)await Ee(200);if(i.advance||i.stopped||i.redial)break;await Ee(1e3)}else for(v("Ready. Press Call Next or Redial",C,V);!i.advance&&!i.stopped&&!i.redial;)await Ee(200);if(!i.redial||i.stopped)break;i.skip=!1,Z=S(await k(P,C,V,++j))}}if(!i.stopped){let E=ae?C:t.length;l.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${E} contact${E===1?"":"s"} dialed.</div>`,setTimeout(()=>l.remove(),5e3)}Ke!==void 0&&(window.clearInterval(Ke),Ke=void 0),ae=null},rm=(e,t=!0,o=!1)=>Yi("Endless Feed",[],t,o,e),nm=e=>{document.getElementById("ws-crm-pd-feed-launch")?.remove();let t=document.createElement("div");t.id="ws-crm-pd-feed-launch",t.style.cssText="position:fixed;inset:0;z-index:100001;background:rgba(4,6,10,0.62);display:flex;align-items:center;justify-content:center;";let o=document.createElement("div");o.style.cssText=`width:430px;max-width:92vw;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.lg};padding:22px 24px;color:${n.bone};font-family:${h.sans};box-shadow:0 18px 50px rgba(0,0,0,0.55);`;let r={auto:!0,dd:!1},a=(l,d,c,p)=>`
    <div id="${l}" role="switch" aria-checked="${p}" tabindex="0" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:${p?n.emeraldGlow:"transparent"};border:1px solid ${p?n.emeraldBorder:n.steel};border-radius:${y.md};cursor:pointer;user-select:none;outline:none;">
      <span><span style="display:block;font-size:13px;font-weight:600;">${d}</span>
      <span style="display:block;font-size:11px;color:${n.ash};margin-top:2px;">${c}</span></span>
      <span class="ws-fl-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${y.pill};background:${p?n.emerald:n.steel};transition:background .15s ease;">
        <span class="ws-fl-knob" style="position:absolute;top:2px;left:${p?"20px":"2px"};width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
    </div>`;o.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Power Dialer</div>
    <div style="font-size:18px;font-weight:500;margin-bottom:4px;">Endless call feed</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:18px;line-height:1.5;">No list to manage. Each time you're free, the dialer serves the most important lead on the floor: brand-new PPC leads first, then today's callbacks, then Active Follow Up and Revival. Press <strong style="color:${n.bone};">End</strong> whenever you're done.</div>
    ${a("ws-fl-auto","Auto-advance to the next call","5s countdown between calls, with Pause / Skip",!0)}
    ${a("ws-fl-dd","Double-dial each contact","Unanswered first try gets one immediate second call",!1)}
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:6px;">
      <button id="ws-fl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};padding:8px 18px;border-radius:${y.sm};font-family:${h.sans};font-size:13px;cursor:pointer;">Cancel</button>
      <button id="ws-fl-start" type="button" style="background:${n.emerald};border:none;color:${n.obsidian};padding:8px 22px;border-radius:${y.sm};font-family:${h.sans};font-size:13px;font-weight:600;cursor:pointer;">Start Calling</button>
    </div>`,t.appendChild(o),document.body.appendChild(t);let s=(l,d)=>{let c=o.querySelector(`#${l}`);if(!c)return;let p=u=>{r[d]=u,c.setAttribute("aria-checked",String(u)),c.style.background=u?n.emeraldGlow:"transparent",c.style.borderColor=u?n.emeraldBorder:n.steel;let _=c.querySelector(".ws-fl-track"),v=c.querySelector(".ws-fl-knob");_&&(_.style.background=u?n.emerald:n.steel),v&&(v.style.left=u?"20px":"2px")},b=()=>p(!r[d]);c.addEventListener("click",b),c.addEventListener("keydown",u=>{(u.key===" "||u.key==="Enter")&&(u.preventDefault(),b())})};s("ws-fl-auto","auto"),s("ws-fl-dd","dd");let i=()=>t.remove();t.addEventListener("click",l=>{l.target===t&&i()}),o.querySelector("#ws-fl-cancel")?.addEventListener("click",i),o.querySelector("#ws-fl-start")?.addEventListener("click",()=>{i(),e(r.auto,r.dd)})},Ji='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Qi=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},dx=()=>{if(Wt()!=="opportunity-list"||!Qi()||!ma())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(t=>{if(t.querySelector(`[${Zp}]`))return;let o=t.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute(Zp,"1"),a.title=`Power Dialer: call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${y.pill};cursor:pointer;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${Ji}<span>DIAL</span>`,a.addEventListener("click",async s=>{s.stopPropagation(),s.preventDefault();let i=a.querySelector("span"),l=i?.textContent||"DIAL";i&&(i.textContent="Loading\u2026"),a.style.opacity="0.7";try{let c=await Zf(r,(p,b)=>{i&&(i.textContent=`${p}${b?`/${b}`:""}`)})??await Xf(t);Vi(r,c)}catch(d){m.error("[bulk-dialer] harvest failed",d)}finally{i&&(i.textContent=l),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},To=null,Ki,om=!1,am=()=>{if(om)return;om=!0,window.WS_CRM_PD_TEST=(t,o=!1)=>void Yi("Verification",[{oppId:"",contactId:"__test__",name:`Test ${t}`,_phone:t}],!1,o);let e=()=>{Ki!==void 0&&window.clearTimeout(Ki),Ki=window.setTimeout(dx,400)};Te(t=>{t==="opportunity-list"?(e(),To||(To=new MutationObserver(e),To.observe(document.body,{childList:!0,subtree:!0}))):To&&(To.disconnect(),To=null)})};var sm="ws-crm-pd-contacts-btn",cx=e=>new Promise(t=>setTimeout(t,e)),pm=e=>{let t=e.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return t?`+1${t[1]}${t[2]}${t[3]}`:""},px=()=>/\ball\s+[\d,]+\s+contacts?\s+selected\b/i.test(document.body.innerText)?"all":document.querySelector('.tabulator-header input[type="checkbox"]')?.checked?"page":document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0?"rows":"none",im=(e,t)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(t){let d=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(d&&d.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||e.has(a))return;let s=(r?.textContent||"").replace(/\s+/g," ").trim(),i=pm(o.textContent||""),l=s&&s!=="-"?s:i||a;e.set(a,{oppId:"",contactId:a,name:l,_phone:i||void 0})})},Zi=async e=>{let t=new Map,o=document.querySelector(".tabulator-tableholder");if(im(t,e),!o)return[...t.values()];let r=-1,a=-1,s=0;for(let i=0;i<200&&(im(t,e),t.size===a?s++:(s=0,a=t.size),!(i>0&&o.scrollTop===r&&s>=2));i++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await cx(220);return o.scrollTop=0,[...t.values()]},mx=e=>{let t=e?.id||"";if(!t)return null;let o=(e.contactName||`${e.firstName||""} ${e.lastName||""}`.trim()||e.phone||t).replace(/\s+/g," ").trim().slice(0,60),r=(e.phone||"").trim(),a=/^\+\d{10,15}$/.test(r)?r:pm(r);return{oppId:"",contactId:t,name:o,_phone:a||void 0}},lm=async(e,t)=>{let o=new AbortController,r=window.setTimeout(()=>o.abort(),2e4);try{let a=await it(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:o.signal});return!a||!a.ok?null:await a.json()}catch{return null}finally{window.clearTimeout(r)}},dm=async(e,t)=>{let o=J();if(!o)return null;let r=ld(o);if(!r)return m.warn("[bulk-dialer-contacts] no captured grid search \u2014 DOM fallback"),null;let a;try{a=JSON.parse(r.bodyRaw)}catch{return null}let s=new Map,i=p=>{for(let b of p||[]){let u=mx(b);u&&!s.has(u.contactId)&&s.set(u.contactId,u)}};if(e==="page"){let p=await lm(r.url,a);return p?(i(p.contacts),[...s.values()]):null}let l={...a,pageLimit:100,includeTotal:!0};delete l.searchAfter;let d=100,c=null;for(let p=1;p<=d;p++){l.page=p;let b=await lm(r.url,l);if(!b)return s.size?[...s.values()]:null;if(typeof b.total=="number"&&(c=b.total),i(b.contacts),t(s.size,c),!b.contacts||b.contacts.length<100||c!==null&&s.size>=Math.min(c,d*100))break}return c!==null&&c>d*100&&m.warn(`[bulk-dialer-contacts] list has ${c} contacts \u2014 capped at ${d*100}`),[...s.values()]},bx=()=>{if(Wt()!=="contact-list"||!Qi()||!ma()||document.getElementById(sm))return;let e=document.querySelector("#views-bar .bar");if(!e)return;let t=document.createElement("button");t.id=sm,t.type="button",t.title="Power Dialer: call through this list, or the rows you've checked",t.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${y.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${h.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,t.innerHTML=`${Ji}<span>Power Dialer</span>`;let o=t.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=t.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),t.style.setProperty("border-color",n.emerald,"important"),t.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let s=t.querySelector("span"),i=s?.textContent||"Power Dialer",l=(d,c)=>{s&&(s.textContent=`Loading\u2026 ${d}${c?` / ${c}`:""}`)};s&&(s.textContent="Loading\u2026"),t.style.opacity="0.7";try{let d=px();if(d==="none"){let b=J(),u=Fe()&&lt()?Gl:H();if(b&&u){let[_,v]=await Promise.all([Lr(),Yp(b)]);if(_==="acq"&&v){s&&(s.textContent=i),t.style.opacity="1",nm((f,x)=>void rm(u,f,x));return}}}let c,p;d==="rows"?(c=await Zi(!0),p="Selected contacts"):d==="page"?(c=await dm("page",l)??await Zi(!0),p="This page"):(c=await dm("all",l)??await Zi(!1),p=d==="all"?"All in list":"Smart list"),Vi(p,c,{one:"contact",many:"contacts"})}catch(d){m.error("[bulk-dialer-contacts] harvest failed",d)}finally{s&&(s.textContent=i),t.style.opacity="1"}}),e.appendChild(t)},Co=null,Xi,cm=!1,mm=()=>{if(cm)return;cm=!0;let e=()=>{Xi!==void 0&&window.clearTimeout(Xi),Xi=window.setTimeout(bx,400)};Te(t=>{t==="contact-list"?(e(),Co||(Co=new MutationObserver(e),Co.observe(document.body,{childList:!0,subtree:!0}))):Co&&(Co.disconnect(),Co=null)})};var ux="ws-calling-as-chip",hx=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},el=!1,Rt=null,bm,hm=0,_x=3e4,yx=()=>{let e=document.querySelector(".hl_header--controls");if(!e)return null;let t=e.querySelector('button[aria-label*="Voice Calling" i], button[aria-label*="call" i]');if(!t)return null;let o=t;for(;o&&o.parentElement!==e;)o=o.parentElement;return o?{parent:e,before:o}:null},tl=()=>{if(!Rt||Rt.isConnected)return;let e=yx();e&&e.parent.insertBefore(Rt,e.before)},um=async()=>{if(!(el||Rt)&&hx()){el=!0;try{let e=await Wi();if(!e.length)return;let t=await Lr()??e[0],o=e.length>1,r=document.createElement("div");r.id=ux,r.style.cssText="position:relative;display:inline-flex;align-items:center;margin:0 6px;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:7px;padding:5px 11px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${y.pill};color:${n.bone};font-family:${h.sans};font-size:11px;white-space:nowrap;cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${h.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${Sr[t]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let s=i=>{let l=a.querySelector(".ws-ca-team");l&&(l.textContent=Sr[i])};if(o){let i=document.createElement("div");i.style.cssText=`position:fixed;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;z-index:99999;`;let l=()=>{i.innerHTML="",e.forEach(d=>{let c=document.createElement("div"),p=d===t;c.style.cssText=`padding:9px 14px;font-family:${h.sans};font-size:13px;color:${p?n.emeraldBright:n.bone};cursor:pointer;background:${p?n.emeraldGlow:"transparent"};`,c.textContent=Sr[d],c.addEventListener("mouseenter",()=>{d!==t&&(c.style.background=n.steel)}),c.addEventListener("mouseleave",()=>{d!==t&&(c.style.background="transparent")}),c.addEventListener("click",b=>{b.stopPropagation(),t=d,Kp(d),s(d),l(),i.style.display="none"}),i.appendChild(c)})};l(),document.body.appendChild(i),a.addEventListener("click",d=>{if(d.stopPropagation(),i.style.display==="block"){i.style.display="none";return}let c=a.getBoundingClientRect();i.style.top=`${Math.round(c.bottom+6)}px`,i.style.left=`${Math.round(c.left)}px`,i.style.display="block"}),document.addEventListener("click",()=>{i.style.display="none"})}Rt=r,tl(),m.info(`[calling-as] chip mounted in header (roles=${e.join(",")}, active=${t}, multi=${o})`)}catch(e){m.error("[calling-as] build failed",e)}finally{el=!1,hm=Date.now()}}},_m=()=>{Rt?tl():um(),bm===void 0&&(bm=window.setInterval(()=>{Rt?tl():Date.now()-hm>=_x&&um()},1500))};var vx="#12161D",gx="#EDEEF0",ym=e=>{let o=getComputedStyle(e).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],s=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&s>=230},vm=e=>{e.style.setProperty("background-color",vx,"important"),e.style.setProperty("color",gx,"important")},fx=()=>{for(let e of Array.from(document.body.children)){if(e.tagName!=="DIV")continue;let t=e;if(!(t.id||t.className)&&getComputedStyle(t).position==="fixed")return t}return null},xx=e=>{ym(e)&&vm(e);for(let t of Array.from(e.querySelectorAll("*")))ym(t)&&vm(t)},ol=null,Ar=null,fm=()=>{Ar&&(Ar.disconnect(),Ar=null),ol=null},wx=e=>{if(ol===e)return;fm(),ol=e;let t=!1,o=()=>{t=!1;try{xx(e)}catch(a){m.debug("[dialer-theme] paint failed",a)}},r=()=>{t||(t=!0,requestAnimationFrame(o))};Ar=new MutationObserver(r),Ar.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),m.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},gm=!1,ua=()=>{if(gm)return;gm=!0;let e=()=>{let o=fx();o?wx(o):fm()};e(),new MutationObserver(e).observe(document.body,{childList:!0})};var kx="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",Ex="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",$x="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",km="tc_closing_agent",Tx="tc_closing_office",Ne="ws-crm-closing-agent-picker-button",Em="ws-crm-closing-agent-picker-modal",Cx=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Sx=/\/v2\/location\/([A-Za-z0-9]+)/,Or=()=>{let e=window.location.pathname,t=e.match(Cx);if(!t)return null;let o=e.match(Sx);return{oppId:t[1],locationId:o?o[1]:null}},ll=async e=>{let t=await fetch(kx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,query:e.query??"",contact_id:e.contactId??null,contact_type:e.contactType??null,limit:e.limit??20}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},xm=async e=>{let t=await fetch(Ex,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,opp_id:e.oppId,field_key:e.fieldKey,value:e.value}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Lx=async(e,t)=>{try{let o=await fetch($x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,field_key:km}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let s=await ll({tenantId:t,contactId:a,limit:1});if(!s.ok||!s.results.length)return null;let i=s.results[0];return{id:i.id,name:i.name,companyName:i.companyName??""}}catch(o){return m.warn("[closing-agent] fetchCurrent failed:",o),null}},Nt=null,Ax=60*60*1e3,dl=e=>`ws-crm-to-cache:${e}`,$m=e=>{try{let t=window.localStorage.getItem(dl(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>Ax||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},Tm=(e,t,o)=>{try{window.localStorage.setItem(dl(e),JSON.stringify({contactId:t,contactName:o,ts:Date.now()}))}catch{}},Mx=e=>{try{window.localStorage.removeItem(dl(e))}catch{}},nl="ws-crm-closing-agent-field-link",Ix=()=>{let e=document.querySelector(".crm-opportunities-modal");e&&(e.querySelectorAll(`.${nl}`).forEach(t=>t.remove()),e.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(t=>{t.style.removeProperty("color"),t.style.removeProperty("caret-color"),t.style.removeProperty("visibility"),delete t.dataset.wsClosingAgentDecorated}))},rl=!1,cl=async e=>{if(rl)return;let t=Cm();if(!t)return;let o=(t.value||"").trim();if(!o){m.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){m.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(t.dataset.wsClosingAgentDecorated!==o){rl=!0;try{m.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await ll({tenantId:e,contactId:o,limit:1});if(!r.ok||!r.results.length){m.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];m.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),al(a.id,a.name,e);let s=document.getElementById(Ne);if(s){yt(s,{status:"linked",contactName:a.name});let i=Or();i&&Tm(i.oppId,a.id,a.name)}}catch(r){m.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{rl=!1}}},Ox=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,Cm=()=>{let t=document.querySelectorAll("*"),o=[],r=[],a=[];for(let d of t){let c=(d.textContent||"").trim();Ox.test(c)?o.push(d):c.length<80&&/Title\s+Officer/i.test(c)&&r.push(c);for(let p of["aria-label","placeholder","data-label","title","name","data-test"]){let b=d.getAttribute(p);b&&/Title\s+Officer/i.test(b)&&a.push({tag:d.tagName.toLowerCase(),attr:p,value:b})}}if(m.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&m.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&m.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((d,c)=>d.querySelectorAll("*").length-c.querySelectorAll("*").length);let i=o[0].parentElement,l=0;for(;i&&l<8;){let d=i.querySelector("input");if(d)return m.info(`[closing-agent] findInput: located input ${l} levels up from label`),d;i=i.parentElement,l+=1}return m.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},al=(e,t,o)=>{let r=Cm();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==e){a&&r.parentElement?.querySelectorAll(`.${nl}`).forEach(i=>i.remove());{let s=r.parentElement;if(!s)return;r.dataset.wsClosingAgentDecorated=e,r.style.visibility="hidden",window.getComputedStyle(s).position==="static"&&(s.style.position="relative");let l=document.createElement("a");l.className=nl,l.href=`/v2/location/${o}/contacts/detail/${e}`,l.textContent=t,l.style.cssText=`
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: ${n.bone};
      font-family: ${h.sans};
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      pointer-events: auto;
      background: ${n.slate};
      border-radius: ${y.sm};
      z-index: 2;
    `,l.addEventListener("mouseenter",()=>{l.style.textDecoration="underline"}),l.addEventListener("mouseleave",()=>{l.style.textDecoration="none"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),window.location.href=l.href}),s.appendChild(l)}}},ha=()=>{document.getElementById(Em)?.remove()},Px=e=>{ha();let t=document.createElement("div");t.id=Em,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
        font-family: ${h.sans};
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
        ${F}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),s=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),t.addEventListener("click",c=>{c.target===t&&ha()}),s?.addEventListener("click",ha);let i,l="",d=async c=>{if(a&&c!==l){if(l=c,!c.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let p=await ll({tenantId:e.locationId,query:c,contactType:"closing_agent",limit:20});if(!p.ok||!Array.isArray(p.results)||p.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",p.results.forEach(b=>{let u=document.createElement("button");u.type="button",u.style.cssText=`
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          background: transparent;
          border: none;
          border-bottom: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${h.sans};
          font-size: 13px;
          cursor: pointer;
          transition: background 0.1s ease;
        `,u.innerHTML=`
          <div style="font-weight: 500;">${_a(b.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${_a(b.email||"(no email)")} \xB7 ${_a(b.phone||"no phone")}
            ${b.companyName?` \xB7 ${_a(b.companyName)}`:""}
          </div>
        `,u.addEventListener("mouseenter",()=>{u.style.background=n.slate}),u.addEventListener("mouseleave",()=>{u.style.background="transparent"}),u.addEventListener("click",()=>{ha(),e.onPick(b)}),a.appendChild(u)})}catch(p){m.error("Closing Agent picker search failed",p),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let c=r.value;i!==void 0&&clearTimeout(i),i=window.setTimeout(()=>{d(c)},250)})},_a=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),yt=(e,t)=>{let o=e.querySelector(".ws-top-label"),r=e.querySelector(".ws-top-dot"),a="Link Closing Agent",s=n.amber,i=n.bone,l="transparent",d=n.steel,c="pointer";switch(t.status){case"loading":a="Loading Closing Agent\u2026",s=n.coolGray,i=n.ash,c="wait";break;case"empty":a="Link Closing Agent",s=n.amber;break;case"linked":a=t.contactName?`Closing Agent: ${t.contactName}`:"Closing Agent: \u2713",s=n.emerald,l=n.emeraldGlow,d=n.emeraldBorder,i=n.emeraldBright;break;case"saving":a="Linking\u2026",s=n.coolGray,i=n.ash,c="wait";break}o&&(o.textContent=a),r&&(r.style.background=s,r.style.boxShadow=`0 0 6px ${s}`),e.style.background=l,e.style.borderColor=d,e.style.color=i,e.style.cursor=c},Bx=(e,t)=>{let o=document.createElement("button");o.id=Ne,o.type="button",o.dataset.oppId=e,o.style.cssText=F,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};yt(o,r);let a=Fe()?null:$m(e);return a&&(r={status:"linked",contactName:a.contactName},yt(o,r),Nt={oppId:e,contactId:a.contactId,contactName:a.contactName,tenantId:t}),(async()=>{let i=await Lx(e,t);i?(r={status:"linked",contactName:i.name},yt(o,r),Nt={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},al(i.id,i.name,t)):a||(r={status:"empty"},yt(o,r),Nt?.oppId===e&&(Nt=null),Ix(),Mx(e))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||Px({oppId:e,locationId:t,onPick:async i=>{r={status:"saving"},yt(o,r);try{let l=await xm({tenantId:t,oppId:e,fieldKey:km,value:i.id});if(!l.ok)throw new Error(l.error??"Save failed");i.companyName&&i.companyName.trim()&&await xm({tenantId:t,oppId:e,fieldKey:Tx,value:i.companyName.trim()}),r={status:"linked",contactName:i.name},yt(o,r),Nt={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},Tm(e,i.id,i.name),al(i.id,i.name,t),Yc(e),m.info(`Closing Agent linked: ${i.name} (${i.id})${i.companyName?` \u2014 Company: ${i.companyName}`:""}`)}catch(l){m.error("Closing Agent link failed",l),r={status:"empty"},yt(o,r)}}})}),o},Hx=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Dx=async()=>{for(let e of Hx)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Mr=!1,va=async()=>{if(!Mr){Mr=!0;try{await Rx()}finally{Mr=!1}}},Rx=async()=>{let e=Or();if(!e||!e.locationId){document.getElementById(Ne)?.remove(),document.getElementById(`${Ne}-wrap`)?.remove(),ya();return}let t=document.getElementById(Ne);if(t&&t.dataset.oppId===e.oppId){let d=W();d!==null&&d!=="Transaction Coordination"&&(t.remove(),document.getElementById(`${Ne}-wrap`)?.remove(),ya());return}t&&(t.remove(),document.getElementById(`${Ne}-wrap`)?.remove());let o=W();if(o!==null&&o!=="Transaction Coordination")return;let r=await Dx();if(!r||!($m(e.oppId)!==null||Nt!==null&&Nt.oppId===e.oppId)&&await ne()!=="Transaction Coordination")return;let s=Or();if(!s||s.oppId!==e.oppId||!s.locationId)return;let i=Bx(e.oppId,s.locationId),l=document.createElement("span");l.id=`${Ne}-wrap`,l.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,l.appendChild(i),te(r).appendChild(l),m.debug(`Mounted Closing Agent picker on opp ${e.oppId}`),Nx(e.oppId),cl(s.locationId)},Ir=null,sl=null,il=null,ya=()=>{Ir?.disconnect(),Ir=null,sl=null,il=null},Nx=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Ir&&sl===e&&il===t||(ya(),sl=e,il=t,Ir=new MutationObserver(()=>{let o=Or();if(!o||o.oppId!==e||!o.locationId){ya();return}document.getElementById(Ne)||va(),cl(o.locationId)}),Ir.observe(t,{childList:!0,subtree:!0})))},Fx=()=>{ee("closing-agent-picker",re,()=>{!document.getElementById(Ne)&&!Mr&&va()})},wm,zx=()=>{wm===void 0&&(wm=window.setInterval(()=>{let e=Or();if(!e||!e.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(Ne)&&!Mr&&(m.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),va()),cl(e.locationId)},2e3))},Sm=()=>{m.info("[closing-agent] mountClosingAgentPickerButton invoked"),Fx(),zx(),va()};var qx="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",at="ws-crm-manage-team-cta",Am="ws-crm-manage-team-modal",jx=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,Mm={manager:"Owner",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator",acq_manager:"ACQ Manager",dispo_manager:"Dispo Manager",tc_manager:"TC Manager"},Ux={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson},acq_manager:{bg:n.emeraldGlow,fg:n.emerald},dispo_manager:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc_manager:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},Im=()=>{let e=window.location.pathname.match(jx);return e?{tenantId:e[1]}:null},fa=async e=>{let t=await fetch(qx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok){let o="";try{o=await t.text()}catch{}throw new Error(`Team.Manage HTTP ${t.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await t.json()},Ae=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),vt=e=>Ae(e),pl="ws-crm-manage-team-toast",ul=(e,t="info",o=4e3)=>{document.getElementById(pl)?.remove();let r=t==="success"?n.emerald:t==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=pl,a.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999999;
    background: ${n.graphite};
    border: 1px solid ${r};
    border-radius: ${y.sm};
    color: ${n.bone};
    padding: 12px 18px;
    font-family: ${h.sans};
    font-size: 13px;
    max-width: 400px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  `,a.textContent=e,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(pl)===a&&a.remove()},o)},ml=()=>{document.getElementById(Am)?.remove()},Wx=(e,t)=>{let o=Ux[e]||{bg:n.slate,fg:n.ash};return`
    <span style="
      display: inline-block;
      background: ${o.bg};
      color: ${o.fg};
      border: 1px solid ${o.fg};
      border-radius: ${y.pill};
      padding: 2px 10px;
      font-family: ${h.mono};
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-bottom: 4px;
    ">${Ae(t)}</span>
  `},Gx=(e,t)=>{let o=[e.first_name,e.last_name].filter(Boolean).join(" ")||"(no name)",r=e.roles.map(i=>Wx(i.key,i.display)).join(""),a=t?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",s=t?"":'title="Owner-only action"';return`
    <div data-user-id="${vt(e.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${Ae(o)}
          ${e.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${h.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${Ae(e.email)}${e.phone?` &middot; ${Ae(e.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${s}>
        <button class="ws-team-edit" data-email="${vt(e.email)}" data-user-id="${vt(e.id)}" data-name="${vt(o)}" data-current-roles="${vt(e.role_keys.join(","))}" style="${F} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${vt(e.email)}" data-name="${vt(o)}" data-role-count="${vt(String(e.role_keys.length))}" style="${F} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},Kx=(e,t)=>e.length===0?`
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
      font-family: ${h.mono};
      font-size: 10px;
      color: ${n.ash};
      letter-spacing: 0.1em;
      text-transform: uppercase;
    ">
      <div>Member</div>
      <div>Roles</div>
      <div style="text-align: right;">Actions</div>
    </div>
  `+e.map(r=>Gx(r,t)).join(""),xa=async e=>{ml();let t=document.createElement("div");t.id=Am,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `,t.addEventListener("click",d=>{d.target===t&&ml()});let o=document.createElement("div");o.style.cssText=`
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
        <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
        <div style="font-size: 20px; font-weight: 500;">Roster</div>
      </div>
      <button id="ws-team-close" style="${F} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 10px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),o.querySelector("#ws-team-close")?.addEventListener("click",ml);let r;try{r=await fa({tenant_id:e,action:"list"})}catch(d){let c=o.querySelector("#ws-team-content");c&&(c.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${Ae(d.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let d=o.querySelector("#ws-team-content");d&&(d.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${Ae(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=H(),s=!!(a&&r.roster.some(d=>d.id===a&&d.role_keys.includes("manager"))),i=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${h.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} owner</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",l=o.querySelector("#ws-team-content");if(l&&(l.innerHTML=i+Kx(r.roster,s)),s)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{Vx(e)}),o.querySelectorAll(".ws-team-edit").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;Yx(e,{email:p.dataset.email||"",name:p.dataset.name||"",currentRoles:(p.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;Jx(e,{email:p.dataset.email||"",name:p.dataset.name||"",roleCount:parseInt(p.dataset.roleCount||"0",10)})})});else{let d=o.querySelector("#ws-team-actions");d&&(d.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Owner. Owner role required to add/edit/remove team members.
        </div>
      `)}},Vx=e=>{let t="ws-crm-manage-team-add-modal";document.getElementById(t)?.remove();let o=document.createElement("div");o.id=t,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `,o.addEventListener("click",i=>{i.target===o&&o.remove()});let r=`
    width: 100%;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 13px;
    padding: 10px 14px;
    outline: none;
    box-sizing: border-box;
  `,a=`
    display: block;
    font-family: ${h.mono};
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
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
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
      <button id="ws-team-add-cancel" style="${F} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(s),document.body.appendChild(o),s.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),s.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let i=(s.querySelector("#ws-team-add-first")?.value||"").trim(),l=(s.querySelector("#ws-team-add-last")?.value||"").trim(),d=(s.querySelector("#ws-team-add-email")?.value||"").trim(),c=(s.querySelector("#ws-team-add-mobile")?.value||"").trim(),p=(s.querySelector("#ws-team-add-role")?.value||"").trim(),b=s.querySelector("#ws-team-add-error"),u=s.querySelector("#ws-team-add-submit");if(!i||!l||!d||!c||!p){b&&(b.textContent="All fields are required.");return}u&&(u.disabled=!0,u.textContent="Adding\u2026",u.style.opacity="0.7"),b&&(b.textContent="");try{let _=await fa({tenant_id:e,action:"add",first_name:i,last_name:l,email:d,mobile:c,role:p,triggered_by_user_id:H()});if(!_.ok){b&&(b.textContent=_.error||"Failed to add employee"),u&&(u.disabled=!1,u.textContent="Add Employee",u.style.opacity="1");return}o.remove(),ul(`Added ${i} ${l} as ${Mm[p]||p}.`,"success"),await xa(e)}catch(_){b&&(b.textContent=_.message),u&&(u.disabled=!1,u.textContent="Add Employee",u.style.opacity="1")}})},Yx=(e,t)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
        <span style="font-size: 13px;">${Ae(Mm[i])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${Ae(t.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${Ae(t.email)}</div>

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
      <button id="ws-team-edit-cancel" style="${F} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let i=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(c=>c.checked).map(c=>c.dataset.roleKey||"").filter(Boolean),l=a.querySelector("#ws-team-edit-error"),d=a.querySelector("#ws-team-edit-submit");if(i.length===0){l&&(l.textContent="Select at least one role. To fully offboard, use Remove instead.");return}d&&(d.disabled=!0,d.textContent="Saving\u2026",d.style.opacity="0.7"),l&&(l.textContent="");try{let c=await fa({tenant_id:e,action:"update",email:t.email,roles:i,triggered_by_user_id:H()});if(!c.ok){l&&(l.textContent=c.error||"Failed to update roles"),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1");return}r.remove(),ul(`Updated roles for ${t.name}.`,"success"),await xa(e)}catch(c){l&&(l.textContent=c.message),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1")}})},Jx=(e,t)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `,r.addEventListener("click",s=>{s.target===r&&r.remove()});let a=document.createElement("div");a.style.cssText=`
    width: min(440px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.crimson};
    border-radius: ${y.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.crimson}; margin-bottom: 4px;">Remove from Team</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${Ae(t.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${Ae(t.email)} will be removed from all ${t.roleCount} role${t.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${h.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${F} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${y.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let s=a.querySelector("#ws-team-remove-error"),i=a.querySelector("#ws-team-remove-submit");i&&(i.disabled=!0,i.textContent="Removing\u2026",i.style.opacity="0.7"),s&&(s.textContent="");try{let l=await fa({tenant_id:e,action:"remove",email:t.email,triggered_by_user_id:H()});if(!l.ok){s&&(s.textContent=l.error||"Failed to remove"),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1");return}r.remove(),ul(`Removed ${t.name} from the team.`,"success"),await xa(e)}catch(l){s&&(s.textContent=l.message),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1")}})},Qx=89,Zx=93,Xx=310,ew=34,tw=14,ow=14,rw=3,ga=e=>{let t=document.querySelector('iframe[name="settings-app"]');if(!t){e.style.right="24px";return}let o=t.getBoundingClientRect(),r=window.innerWidth-o.right+Qx;e.style.right=`${Math.max(r,16)}px`},nw=e=>{let t=document.createElement("button");return t.id=at,t.type="button",t.style.cssText=`
    position: fixed;
    top: ${Zx}px;
    right: 24px;
    width: ${Xx}px;
    height: ${ew}px;
    padding: 0 ${ow}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${rw}px;
    font-family: ${h.sans};
    font-size: ${tw}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,t.addEventListener("mouseenter",()=>{t.style.background=n.emeraldBright}),t.addEventListener("mouseleave",()=>{t.style.background=n.emerald}),t.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,t.addEventListener("click",()=>{xa(e)}),ga(t),setTimeout(()=>ga(t),200),setTimeout(()=>ga(t),800),aw(),t},Lm=!1,aw=()=>{Lm||(Lm=!0,window.addEventListener("resize",()=>{let e=document.getElementById(at);e instanceof HTMLButtonElement&&ga(e)}))},bl=!1,sw=()=>{if(!bl){bl=!0;try{let e=Im();if(!e){document.getElementById(at)?.remove(),document.getElementById(`${at}-floater`)?.remove();return}let t=document.getElementById(at);if(t&&t.dataset.tenantId===e.tenantId)return;document.getElementById(`${at}-floater`)?.remove();let o=document.createElement("div");o.id=`${at}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=nw(e.tenantId);r.dataset.tenantId=e.tenantId,o.appendChild(r),document.body.appendChild(o),m.debug(`[manage-team] mounted (floater) for tenant ${e.tenantId}`)}finally{bl=!1}}},Om=()=>{if(!Im()){document.getElementById(at)?.remove(),document.getElementById(`${at}-floater`)?.remove();return}sw()};var iw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",lw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/add-contact",yl="ws-crm-prepare-contract-button",Pm="ws-crm-prepare-contract-menu",fe="ws-crm-prepare-contract-modal",Bm="ws-crm-modal-date-style",Rr="https://services.leadconnectorhq.com",qm=()=>{if(document.getElementById(Bm))return;let e=document.createElement("style");e.id=Bm,e.textContent=`
    #${fe} input[type="date"] { color-scheme: dark; }
    #${fe} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
    #${fe} input[type="number"]::-webkit-inner-spin-button,
    #${fe} input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    #${fe} input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  `,document.head.appendChild(e)},jm=e=>{e.querySelectorAll('input[type="number"]').forEach(t=>{let o=!1;t.addEventListener("focus",()=>{t.select(),o=!0}),t.addEventListener("mouseup",r=>{o&&(r.preventDefault(),o=!1)}),t.addEventListener("blur",()=>{o=!1})})},vl="__WS_CRM_CAPTURED_AUTH",dw=50*60*1e3,Dr=()=>{try{let e=localStorage.getItem(vl);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>dw?(localStorage.removeItem(vl),null):t:null}catch{return null}},cw=e=>{try{localStorage.setItem(vl,JSON.stringify(e))}catch{}},Nr=()=>{let e=Dr(),t=window;if(t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{},t.__WS_CRM_DIAG.authChecks=(t.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${t.__WS_CRM_DIAG.authChecks}]`,e?`present (captured ${Date.now()-e.capturedAt}ms ago, ${e.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!e)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(o["token-id"]=e.tokenId),o},Hm=(e,t)=>new Promise(o=>{let r=Date.now(),a=()=>{if((Dr()?.capturedAt??0)>e)return o(!0);if(Date.now()-r>t)return o(!1);window.setTimeout(a,250)};a()}),gl=async(e,t={},o=2)=>{let r=Dr()?.capturedAt??0,a;try{a={...Nr(),...t.headers??{}}}catch(i){if(o>0&&await Hm(r,4e3))return gl(e,t,o-1);throw i}let s=await fetch(e,{...t,headers:a});return s.status!==401||o<=0?s:await Hm(r,4e3)?gl(e,t,o-1):s},Dm=!1,pw=()=>{if(Dm)return;Dm=!0;let e=window;e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let t=()=>{let d=Dr();return!!(d&&d.authorization&&Date.now()-(d.capturedAt||0)<3e5)},o=(d,c,p)=>{e.__WS_CRM_DIAG.lastSeenHeaders={url:d,headers:c,source:p};let b=c.authorization||c.Authorization;if(!b){e.__WS_CRM_DIAG.fetchCalls+e.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${p} no-auth]`,{url:d.split("?")[0],headerKeys:Object.keys(c)});return}p==="fetch"?e.__WS_CRM_DIAG.fetchAuthSeen++:e.__WS_CRM_DIAG.xhrAuthSeen++;let u=c["token-id"]||c["Token-Id"]||void 0,_=Dr()?.authorization;cw({authorization:b,tokenId:u,capturedAt:Date.now()}),_!==b&&(e.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${p}] captured GHL auth from ${d.split("?")[0]} (${b.slice(0,24)}\u2026)`))},r=window.fetch;window.fetch=async function(...d){let c=typeof d[0]=="string"?d[0]:d[0]instanceof URL?d[0].toString():d[0].url,p=d[1]||{};if(c&&c.includes("services.leadconnectorhq.com")&&!t()){e.__WS_CRM_DIAG.fetchCalls++;let b=p.headers;!b&&d[0]instanceof Request&&(b=d[0].headers);let u={};if(b instanceof Headers)b.forEach((_,v)=>u[v.toLowerCase()]=_);else if(Array.isArray(b))b.forEach(([_,v])=>u[_.toLowerCase()]=v);else if(b&&typeof b=="object")for(let _ of Object.keys(b))u[_.toLowerCase()]=b[_];o(c,u,"fetch")}return r.apply(this,d)};let a=XMLHttpRequest.prototype,s=a.open,i=a.setRequestHeader,l=a.send;a.open=function(d,c,...p){return this.__wsCrmUrl=c,this.__wsCrmHeaders={},s.call(this,d,c,...p)},a.setRequestHeader=function(d,c){return this.__wsCrmHeaders&&typeof d=="string"&&(this.__wsCrmHeaders[d.toLowerCase()]=c),i.call(this,d,c)},a.send=function(d){let c=this.__wsCrmUrl,p=this.__wsCrmHeaders;return c&&c.includes("services.leadconnectorhq.com")&&p&&!t()&&(e.__WS_CRM_DIAG.xhrCalls++,o(c,p,"xhr")),l.call(this,d)},m.debug("[prepare-contract] interceptors installed (fetch + XHR)")},Um=()=>{let e=U();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},mw=e=>{let t=e.dataset;return t.tenantId&&t.contactId?{tenantId:t.tenantId,contactId:t.contactId,oppId:t.oppId||void 0}:t.tenantId&&t.oppId?{tenantId:t.tenantId,contactId:"",oppId:t.oppId}:Um()},bw=e=>{let t=(e||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(t)||/assignment.*(contract|agreement)/i.test(t)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(t)||/purchase.*(contract|agreement)/i.test(t)?"PA":"passthrough"},fl=e=>/2\s*signers?/i.test(e||""),Wm="__WS_CRM_TEMPLATES_CACHE_V1",uw=24*60*60*1e3,Rm=e=>{try{let t=window.localStorage.getItem(Wm);if(!t)return null;let o=JSON.parse(t);return o.tenantId!==e||Date.now()-o.cachedAt>uw?null:o.templates}catch{return null}},hw=(e,t)=>{try{let o={tenantId:e,templates:t,cachedAt:Date.now()};window.localStorage.setItem(Wm,JSON.stringify(o))}catch{}},_w=async e=>{let t=`${Rr}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(e)}&skip=0&limit=10`,o;try{o=await gl(t,{method:"GET"})}catch(i){let l=Rm(e);if(l)return m.info(`[prepare-contract] templates network failure, using cache (${l.length} items)`),l;throw i}if(!o.ok){let i=Rm(e);if(i)return m.info(`[prepare-contract] templates fetch ${o.status}, using cache (${i.length} items)`),i;let l="";try{l=await o.text()}catch{}let d=l?` \u2014 ${l.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${d}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let s=a.map(i=>({id:(i._id??i.id??i.templateId)||"",name:i.name||i.title||"(unnamed template)",type:bw(i.name||i.title||"")})).filter(i=>!!i.id);return s.length>0&&hw(e,s),s},yw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/open-opps",vw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/open-opps",Gm=async(e,t,o,r)=>{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:o}),credentials:"omit"});if(!a.ok)throw new Error(`${r} opp lookup HTTP ${a.status}`);let s=await a.json();if(!s.ok)throw new Error(s.reason||`${r} opp lookup failed`);return(s.opps||[]).map(i=>({id:i.id,name:i.name||"(unnamed opp)",propertyAddress:i.name||"",updatedAt:i.updatedAt||null})).sort((i,l)=>{let d=i.updatedAt?Date.parse(i.updatedAt):0;return(l.updatedAt?Date.parse(l.updatedAt):0)-d})},gw=(e,t)=>Gm(yw,e,t,"ACQ"),fw=(e,t)=>Gm(vw,e,t,"MT"),xw=async e=>{let t=await fetch(iw,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,template_id:e.templateId,template_type:e.templateType,opp_id:e.oppId,closing_date:e.closingDate,buyer_earnest_due_date:e.buyerEarnestDueDate,lender_source:e.lenderSource,triggered_by_user_id:e.userId,overrides:e.overrides,need_second_seller:e.needSecondSeller||void 0}),credentials:"omit"});if(!t.ok)throw new Error(`Contract.Stage HTTP ${t.status}`);return await t.json()},ww=async(e,t,o)=>{let r=`${Rr}/proposals/templates/to-proposal/${e}/${t}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:Nr()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let s=await a.json(),i=s._id||s.id||s.proposal?._id||s.proposal?.id;if(!i)throw new Error("to-proposal returned no proposal id");return i},kw=async(e,t)=>{let o=await fetch(`${Rr}/proposals/document/${t}?locationId=${encodeURIComponent(e)}`,{method:"GET",headers:Nr()});if(!o.ok){let s=await o.text().catch(()=>"");throw new Error(`GET proposal ${t} HTTP ${o.status} ${s.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},Km=async e=>{let t=await fetch(`${Rr}/contacts/${e}`,{method:"GET",headers:Nr()});if(!t.ok){let a=await t.text().catch(()=>"");throw new Error(`GET contact ${e} HTTP ${t.status} ${a.slice(0,200)}`)}let o=await t.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},Ew=(e,t,o)=>{let a="ENTER 2ND SELLER NAME",s=g=>g==="signature2"||/_s2$/.test(g),i=g=>/^seller2_name_/.test(g),l={},d=new Set,c=0,p=0,b=0,u=0,_=Array.isArray(e.pages)?e.pages:[],v=(g,k)=>{!g||typeof g!="object"||(k(g),(g.children||[]).forEach(S=>v(S,k)))},f=(g,k)=>{(g.children||[]).forEach(S=>v(S,k))},x=!1;_.forEach(g=>f(g,k=>{let S=k.component?.options;S&&S.entityName==="contacts"&&s(S.fieldId||"")&&(x=!0)}));let $=new Set;return _.forEach(g=>{let k={};f(g,S=>{let T=S.component?.options;if(!T||T.entityName!=="contacts"||!S.responsiveStyles?.large?.position)return;let w=(T.fieldId||"").replace(/_s2$/,"").replace(/^signature2$/,"signature1"),C=`${S.type}|${w}`;(k[C]=k[C]||[]).push(S)}),Object.values(k).forEach(S=>{S.sort((w,C)=>(w.responsiveStyles?.large?.position?.top??0)-(C.responsiveStyles?.large?.position?.top??0));let T=[];S.forEach(w=>{let C=w.responsiveStyles?.large?.position?.top??0,E=T.find(L=>Math.abs(L.top-C)<=30);E?E.els.push(w):T.push({top:C,els:[w]})}),T.forEach(w=>w.els.sort((C,E)=>(C.responsiveStyles?.large?.position?.left??0)-(E.responsiveStyles?.large?.position?.left??0))),T.every(w=>w.els.length===2)?T.forEach(w=>$.add(w.els[1].id)):T.every(w=>w.els.length===1)&&T.length===2?$.add(T[1].els[0].id):T.forEach(w=>{w.els.length===2&&$.add(w.els[1].id)})})}),_.forEach(g=>{f(g,k=>{let S=k.component?.options;if(!S||!k.id)return;if(i(S.fieldId||"")||typeof S.text=="string"&&S.text.trim()===a||typeof S.placeholder=="string"&&S.placeholder.trim()===a){S.text=o.contactName,d.add(k.id),b+=1;return}if(S.entityName!=="contacts")return;let T=s(S.fieldId||""),w=$.has(k.id);x&&T!==w&&(u+=1);let C=x?T:w;S.recipient=C?o.id:t,l[k.id]=S.recipient,C?p+=1:c+=1})}),(e.fillableFields||[]).forEach(g=>{g.entityType==="contacts"&&l[g.id]&&(g.recipient=l[g.id]),(d.has(g.id)||i(g.fieldId||"")||typeof g.value=="string"&&g.value.trim()===a)&&(g.value=o.contactName)}),{s1Count:c,s2Count:p,nameFills:b,usedGeometry:!x,disagreements:u}},$w=async(e,t,o,r,a)=>{let s;try{s=await kw(e,t)}catch(v){return{ok:!1,body:`fetchProposalDocument: ${v.message}`}}let i;try{i=await Km(o)}catch(v){return{ok:!1,body:`fetchContactBasics: ${v.message}`}}let l=`${i.firstName} ${i.lastName}`.trim()||i.email||o,d={id:o,firstName:i.firstName,lastName:i.lastName,email:i.email,contactName:l,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},b=[...(Array.isArray(s.recipients)?s.recipients:[]).filter(v=>v?.entityName!=="contacts"),d];if(a&&a.id!==o){b.push({id:a.id,firstName:a.firstName,lastName:a.lastName,email:a.email,contactName:a.contactName,isPrimary:!1,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"});let v=Ew(s,o,a);m.info(`[prepare-contract] second-seller assignment: S1=${v.s1Count} S2=${v.s2Count} nameFills=${v.nameFills}${v.usedGeometry?" (geometry fallback \u2014 template not hardened)":""}${v.disagreements>0?` \u2014 ${v.disagreements} marker/geometry disagreement(s), markers used`:""}`),v.s2Count===0&&m.warn("[prepare-contract] second seller attached as recipient but NO signer-2 elements were found to assign \u2014 template may need review")}let u={name:r||s.name,locationId:s.locationId||e,pages:s.pages||[],variables:s.variables||[],fillableFields:s.fillableFields||[],timezone:s.timezone||{},recipients:b,grandTotal:s.grandTotal},_=await fetch(`${Rr}/proposals/document/${t}`,{method:"PUT",headers:{...Nr(),"Content-Type":"application/json"},body:JSON.stringify(u)});if(!_.ok){let v=await _.text().catch(()=>"");return{ok:!1,status:_.status,body:v}}return{ok:!0}},Tw=(e,t)=>{let o=`/v2/location/${e}/payments/proposals-estimates/edit/${t}`;window.location.href=o},ka="__WS_CRM_PENDING_INSTRUCTIONS",Cw=60*1e3,Sw=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],Lw=e=>{let t=(e||"").toLowerCase();for(let o of Sw)if(t.includes(o.matches.toLowerCase()))return o;return null},Aw=(e,t,o)=>{try{let r={proposalId:e,title:t,bodyHtml:o,ts:Date.now()};localStorage.setItem(ka,JSON.stringify(r))}catch{}},Mw=()=>{try{let e=localStorage.getItem(ka);if(!e)return null;let t=JSON.parse(e);return!t?.proposalId||!t?.title||!t?.bodyHtml||Date.now()-(t.ts||0)>Cw?(localStorage.removeItem(ka),null):t}catch{return null}},Iw=()=>{try{localStorage.removeItem(ka)}catch{}},Ow=(e,t)=>{document.getElementById(fe)?.remove();let o=document.createElement("div");o.id=fe,o.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
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
      font-family: ${h.mono};
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
    ">${xe(e)}</div>
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
        font-family: ${h.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Got it, continue</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},Pw=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,Bw=()=>{let e=window.location.pathname.match(Pw);if(!e)return;let t=e[1],o=Mw();o&&o.proposalId===t&&(Iw(),window.setTimeout(()=>{Ow(o.title,o.bodyHtml)},600))},Nm="ws-crm-prepare-contract-toast",se=(e,t="info",o=4e3)=>{document.getElementById(Nm)?.remove();let r=document.createElement("div");r.id=Nm;let a=t==="error"?n.crimson:n.emerald;r.style.cssText=`
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
    font-family: ${h.sans};
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  `,r.textContent=e,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},Fm=(e,t)=>new Promise(o=>{document.getElementById(fe)?.remove();let r=document.createElement("div");r.id=fe,r.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${h.sans};
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
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${Ve(d.id)}" style="
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
          font-family: ${h.sans};
        ">
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${xe(d.propertyAddress||d.name)}</div>
          ${d.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${xe(s(d.updatedAt))}</div>`:""}
        </button>
      `).join("");a.innerHTML=`
      <div style="
        font-family: ${h.mono};
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
      ">This ${xe(t.perspective)} has ${e.length} open deals</div>
      <div style="
        font-size: 12px;
        color: ${n.ash};
        margin-bottom: 16px;
        line-height: 1.4;
      ">Which property is this contract for? The ${xe(t.agreementLabel)} will use that opp's data.</div>
      <div>${i}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
        <button id="ws-pc-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${h.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Cancel</button>
      </div>
    `,r.appendChild(a),document.body.appendChild(r);let l=d=>{r.remove(),o(d)};r.addEventListener("click",d=>{d.target===r&&l(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>l(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.borderColor=n.emerald,d.style.background=n.graphite}),d.addEventListener("mouseleave",()=>{d.style.borderColor=n.steel,d.style.background=n.slate}),d.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault();let p=d.dataset.oppId||"";p&&l(p)})})}),Hw=(e,t,o)=>new Promise(r=>{document.getElementById(fe)?.remove();let a=document.createElement("div");a.id=fe,a.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${h.sans};
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
      font-family: ${h.mono};
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
      font-family: ${h.sans};
      font-size: 13px;
      padding: 8px 12px;
      outline: none;
      box-sizing: border-box;
    `;s.innerHTML=`
      <div style="
        font-family: ${h.mono};
        font-size: 10px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${n.emerald};
        margin-bottom: 8px;
      ">Second Seller Needed</div>
      <div style="font-size: 17px; font-weight: 500; margin-bottom: 6px;">${xe(o)}</div>
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
          font-family: ${h.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Cancel</button>
        <button id="ws-pc-s2-save" type="button" style="
          background: ${n.emerald};
          border: 1px solid ${n.emerald};
          color: ${n.bone};
          font-family: ${h.sans};
          font-size: 13px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: ${y.sm};
          cursor: pointer;
        ">Add & Continue</button>
      </div>
    `,a.appendChild(s),document.body.appendChild(a);let d=b=>{a.remove(),r(b)};a.addEventListener("click",b=>{b.target===a&&d(!1)}),s.querySelector("#ws-pc-s2-cancel")?.addEventListener("click",()=>d(!1));let c=s.querySelector("#ws-pc-s2-err"),p=s.querySelector("#ws-pc-s2-save");p?.addEventListener("click",async()=>{let b=x=>(s.querySelector(x)?.value||"").trim(),u=b("#ws-pc-s2-first"),_=b("#ws-pc-s2-last"),v=b("#ws-pc-s2-email"),f=b("#ws-pc-s2-phone");if(!u&&!_){c&&(c.textContent="Enter at least a first or last name.");return}if(!v){c&&(c.textContent="Email is required \u2014 the contract is emailed to them for signing.");return}c&&(c.textContent=""),p&&(p.disabled=!0,p.textContent="Adding\u2026");try{let x=await fetch(lw,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,property_record_id:t,role:"seller_2",new_contact:{firstName:u,lastName:_,email:v,phone:f||void 0}})}),$=await x.json().catch(()=>({}));if(!x.ok||$?.ok===!1){c&&(c.textContent=$?.error||`Failed to add second seller (HTTP ${x.status}). You can add them from the Properties panel instead.`),p&&(p.disabled=!1,p.textContent="Add & Continue");return}m.info("[prepare-contract] second seller added + linked via gate modal"),d(!0)}catch(x){c&&(c.textContent=`Network error: ${x.message}`),p&&(p.disabled=!1,p.textContent="Add & Continue")}}),window.setTimeout(()=>s.querySelector("#ws-pc-s2-first")?.focus(),0)}),zm=async(e,t,o,r,a,s)=>{if(s.second_seller)return s;if(s.second_seller_warning)return se(`This property's second-seller link looks broken (${s.second_seller_warning}). Fix it from the contact's Properties panel, then try again.`,"error",9e3),m.warn(`[prepare-contract] 2-signer gate: ${s.second_seller_warning}`),null;if(!s.property_record_id)return se("Couldn't resolve the property record for this deal, so the second seller can't be linked here. Add them from the contact's Properties panel (Add person \u2192 Second seller), then try again.","error",9e3),null;if(!await Hw(e,s.property_record_id,o.name))return m.info("[prepare-contract] 2-signer gate cancelled \u2014 aborting contract flow"),null;let l=await So({tenantId:e,contactId:t,template:o,oppId:r,userId:a,needSecondSeller:o.type==="passthrough"?!0:void 0});return l.second_seller?l:(se("Second seller was added but didn't resolve on re-check. Verify the property link in the Properties panel, then try again.","error",9e3),m.warn("[prepare-contract] 2-signer gate: re-stage still has no second_seller",l),null)},Dw=({tenantId:e,contactId:t,template:o,staged:r})=>{document.getElementById(fe)?.remove(),qm();let a=r.debug||{},s=typeof a.propertyAddress=="string"?a.propertyAddress:"",i=typeof a.sellerName=="string"?a.sellerName:"",l=typeof a.purchasePrice=="number"?a.purchasePrice:0,d=typeof a.emd=="number"?a.emd:0,c=typeof a.cashAtClose=="number"?a.cashAtClose:l-d,p=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),b=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),u=typeof a.additionalTerms=="string"?a.additionalTerms:"",_=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",v=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",f=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],x=document.createElement("div");x.id=fe,x.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `;let $=document.createElement("div");$.style.cssText=`
    width: min(520px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${y.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let g=`
    font-family: ${h.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,k=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,S=`${k} text-align: right;`,T=`
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
  `,C=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `,E=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${h.sans};
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
  `,L=B=>['<option value="">(unset)</option>'].concat(f.map(Y=>`<option value="${Ve(Y)}"${Y===B?" selected":""}>${xe(Y)}</option>`)).join("");$.innerHTML=`
    <div style="
      font-family: ${h.mono};
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
    ">${xe(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the ACQ opportunity.</div>

    <div style="margin-bottom: 12px;">
      <div style="${w}">
        <div style="${g}">Property Address</div>
        <div style="${T}">${xe(s||"(set on Property record)")}</div>
      </div>
      <div style="${w}">
        <div style="${g}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${Ve(i)}" placeholder="Seller name" style="${k}" />
      </div>
      <div style="${w}">
        <div style="${g}">Purchase Price</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${l}" style="${S}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Earnest Deposit</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${d}" style="${S}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Cash at Close</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${c}" style="${S}" />
        </div>
      </div>
      <div style="${w}">
        <div style="${g}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${Ve(p)}" placeholder="e.g. 30" style="${k}" />
      </div>
      <div style="${w}">
        <div style="${g}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${Ve(b)}" placeholder="e.g. 10" style="${k}" />
      </div>
      <div style="${w}">
        <div style="${g}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${E}">${L(_)}</select>
      </div>
      <div style="${w}">
        <div style="${g}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${E}">${L(v)}</select>
      </div>
      <div style="${w} align-items: flex-start;">
        <div style="${g}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${k} resize: vertical; min-height: 60px; font-family: ${h.sans};">${xe(u)}</textarea>
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
        font-family: ${h.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${h.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,x.appendChild($),document.body.appendChild(x);let A=$.querySelector("#ws-pc-purchase-price"),M=$.querySelector("#ws-pc-emd"),O=$.querySelector("#ws-pc-cash-at-close");ke(A),ke(M),ke(O),jm($);let P=!1;O?.addEventListener("input",()=>{P=!0});let V=()=>{if(P)return;let B=ue(A?.value),Y=ue(M?.value);O&&Is(O,Math.max(0,B-Y))};A?.addEventListener("input",V),M?.addEventListener("input",V);let j=()=>x.remove();x.addEventListener("click",B=>{B.target===x&&j()}),$.querySelector("#ws-pc-cancel")?.addEventListener("click",j);let K=$.querySelector("#ws-pc-submit"),Z=$.querySelector("#ws-pc-error");K?.addEventListener("click",async()=>{if(K){Z&&(Z.textContent=""),K.disabled=!0,K.textContent="Opening\u2026";try{let B=($.querySelector("#ws-pc-seller-name")?.value||"").trim(),Y=ue(A?.value),X=ue(M?.value),we=ue(O?.value),Me=($.querySelector("#ws-pc-days-to-close")?.value??"").trim(),Ie=($.querySelector("#ws-pc-inspection-days")?.value??"").trim(),Do=($.querySelector("#ws-pc-additional-terms")?.value??"").trim(),Ro=($.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),qt=($.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),ye={};if(B!==i&&(ye.sellerName=B),Y!==l&&(ye.purchasePrice=Y),X!==d&&(ye.emd=X),we!==c&&(ye.cashAtClose=we),Me!==p&&(ye.daysToClose=Me),Ie!==b&&(ye.inspectionDays=Ie),Do!==u&&(ye.additionalTerms=Do),Ro!==_&&(ye.currentOccupancy=Ro),qt!==v&&(ye.occupancyAtClose=qt),Object.keys(ye).length>0){m.info("[prepare-contract] PA modal submit with overrides:",ye),K.textContent="Saving\u2026";let Ha=H(),Da=await So({tenantId:e,contactId:t,template:o,userId:Ha,overrides:ye});m.info("[prepare-contract] re-stage with overrides ok:",Da),K.textContent="Opening\u2026"}else m.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let Wr=s?`${s} - Purchase Agreement`:void 0,ve=fl(o.name)&&r.second_seller||null;await kl(e,t,o,Wr,ve)}catch(B){K.disabled=!1,K.textContent="Open Contract",Z&&(Z.textContent=B.message||"Failed to open contract."),m.warn("[prepare-contract] PA confirm submit failed:",B)}}})},Rw=({tenantId:e,contactId:t,template:o,oppId:r,staged:a,userId:s,defaultClosingDate:i,defaultEMDDueDate:l})=>{document.getElementById(fe)?.remove(),qm();let d=a.debug||{},c=typeof d.propertyAddress=="string"?d.propertyAddress:"",p=typeof d.sellerDisplay=="string"?d.sellerDisplay:"",b=typeof d.assignmentPrice=="number"?d.assignmentPrice:0,u=typeof d.buyerEMD=="number"?d.buyerEMD:0,_=typeof d.assignmentFee=="number"?d.assignmentFee:0,v=typeof d.acqPurchasePrice=="number"?d.acqPurchasePrice:0,f=typeof d.closingOffice=="string"?d.closingOffice:"",x=typeof d.buyerCompanyName=="string"?d.buyerCompanyName:"",$=i,g=l,k="",S=document.createElement("div");S.id=fe,S.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `;let T=document.createElement("div");T.style.cssText=`
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
    font-family: ${h.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,C=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${y.sm};
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,E=`${C} text-align: right;`,L=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,A=`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 4px 0;
    border-bottom: 1px solid ${n.steel};
  `,M=`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 4px;
    padding: 4px 0;
  `;T.innerHTML=`
    <div style="
      font-family: ${h.mono};
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
    ">${xe(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the source opp (MT/ACQ/Dispo/TC). Closing date, EMD due date, and lender source live only on the contract.</div>

    <div style="margin-bottom: 12px;">
      <div style="${A}">
        <div style="${w}">Property Address</div>
        <div style="${L}">${xe(c||"(set on Property record)")}</div>
      </div>
      <div style="${A}">
        <div style="${w}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${Ve(p)}" placeholder="Seller name" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${w}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${h.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${Ve(x)}" placeholder="Buyer's entity / LLC name" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${w}">Assignment Price</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${b}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${w}">Buyer Earnest Money</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${u}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${w}">Assignment Fee</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${_}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${w}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${Ve(f)}" placeholder="Title company" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${w}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${Ve($)}" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${w}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${Ve(g)}" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${w}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${h.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${C}" />
      </div>
    </div>
    <div style="
      font-size: 11px;
      color: ${n.coolGray};
      margin: 0 0 14px;
      line-height: 1.4;
    ">Assignment Fee = Assignment Price \u2212 Original Purchase ($${v.toLocaleString("en-US",{minimumFractionDigits:2})}), auto-recalculated on Price edit. Type a value to override.</div>

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
        font-family: ${h.sans};
        font-size: 13px;
        padding: 8px 16px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-pc-submit" type="button" style="
        background: ${n.emerald};
        border: 1px solid ${n.emerald};
        color: ${n.bone};
        font-family: ${h.sans};
        font-size: 13px;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: ${y.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,S.appendChild(T),document.body.appendChild(S);let O=T.querySelector("#ws-pc-assignment-price"),P=T.querySelector("#ws-pc-assignment-fee"),V=T.querySelector("#ws-pc-buyer-emd");ke(O),ke(P),ke(V),jm(T);let j=!1;P?.addEventListener("input",()=>{j=!0});let K=()=>{if(j)return;let X=ue(O?.value);P&&Is(P,Math.max(0,X-v))};O?.addEventListener("input",K);let Z=()=>S.remove();S.addEventListener("click",X=>{X.target===S&&Z()}),T.querySelector("#ws-pc-cancel")?.addEventListener("click",Z);let B=T.querySelector("#ws-pc-submit"),Y=T.querySelector("#ws-pc-error");B?.addEventListener("click",async()=>{if(!B)return;Y&&(Y.textContent="");let X=(T.querySelector("#ws-pc-seller-name")?.value||"").trim(),we=ue(O?.value),Me=ue(V?.value),Ie=ue(P?.value),Do=(T.querySelector("#ws-pc-closing-office")?.value||"").trim(),Ro=(T.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),qt=(T.querySelector("#ws-pc-closing-date")?.value||"").trim(),ye=(T.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),Wr=(T.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!qt){Y&&(Y.textContent="Closing Date is required.");return}B.disabled=!0,B.textContent="Opening\u2026";try{let ve={};X!==p&&(ve.sellerName=X),we!==b&&(ve.assignmentPrice=we),Me!==u&&(ve.buyerEMD=Me),Ie!==_&&(ve.assignmentFee=Ie),Do!==f&&(ve.closingOffice=Do),Ro!==x&&(ve.buyerCompanyName=Ro);let Ha=qt!==$||ye!==g||Wr!==k,Da=Object.keys(ve).length>0||Ha,Ra=a;Da?(m.info("[prepare-contract] AA modal submit, re-staging with overrides:",ve),B.textContent="Saving\u2026",Ra=await So({tenantId:e,contactId:t,template:o,oppId:r,closingDate:qt,buyerEarnestDueDate:ye,lenderSource:Wr,userId:s,overrides:Object.keys(ve).length>0?ve:void 0}),m.info("[prepare-contract] AA re-stage ok:",Ra),B.textContent="Opening\u2026"):m.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let Rl=Ra?.debug?.propertyAddress||c,eu=Rl?`${Rl} - Assignment Agreement`:void 0;await kl(e,t,o,eu),Z()}catch(ve){B.disabled=!1,B.textContent="Open Contract",Y&&(Y.textContent=ve.message||"Failed to prepare contract."),m.warn("[prepare-contract] AA submit failed:",ve)}})},So=async e=>{m.info(`[prepare-contract] staging \u2014 template "${e.template.name}" (${e.template.type})`);let t=await xw({tenantId:e.tenantId,contactId:e.contactId,templateId:e.template.id,templateType:e.template.type,oppId:e.oppId,closingDate:e.closingDate,buyerEarnestDueDate:e.buyerEarnestDueDate,lenderSource:e.lenderSource,userId:e.userId,overrides:e.overrides,needSecondSeller:e.needSecondSeller});if(m.info(`[prepare-contract] stage response: ok=${t.ok}`,t),!t.ok)throw new Error(t.error||"Contract.Stage returned not ok");return t},kl=async(e,t,o,r,a)=>{if(a&&!(a.email||"").trim()){se(`Second seller ${a.contactName} has no email. Contracts are emailed for signing \u2014 add an email to their contact, then prepare the contract again.`,"error",9e3),m.warn(`[prepare-contract] aborting \u2014 second seller ${a.id} has no email`);return}let s=null;try{s=(await Km(t)).email||""}catch(c){m.warn("[prepare-contract] email pre-check fetch failed, proceeding:",c),s=null}if(s!==null&&!s.trim()){se("This contact has no email. A contract is sent to the recipient for signing, so GHL needs an email to populate it. Add an email to the contact, then prepare the contract again.","error",9e3),m.warn(`[prepare-contract] aborting \u2014 contact ${t} has no email; not creating an empty proposal`);return}m.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${t}`);let i=await ww(e,o.id,t);m.info(`[prepare-contract] proposal created: ${i}`),m.info(`[prepare-contract] attaching contact ${t} as primary signer${a?` + second seller ${a.id} (${a.contactName})`:""}${r?`, renaming to "${r}"`:""}`);let l=await $w(e,i,t,r,a);l.ok?m.info(`[prepare-contract] contact${a?"s":""} attached to proposal ${i}`):(m.warn(`[prepare-contract] attach failed (status=${l.status??"n/a"}): ${l.body?.slice(0,300)??"no body"}`),se(`Proposal created but couldn't auto-attach contact (HTTP ${l.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",l.body));let d=Lw(o.name);d&&!(a&&l.ok)&&(m.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),Aw(i,d.title,d.bodyHtml)),Tw(e,i)},Nw=async e=>{let t=mw(e);if(!t){se("Could not resolve contact context.","error");return}document.getElementById(Pm)?.remove();let o=document.createElement("div");o.id=Pm,o.style.cssText=`
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
    font-family: ${h.sans};
  `,o.innerHTML=`
    <div style="
      font-family: ${h.mono};
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      padding: 8px 14px 6px;
    ">Loading templates\u2026</div>`,e.appendChild(o);let r=s=>{!o.contains(s.target)&&s.target!==e&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await _w(t.tenantId)}catch(s){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${xe(s.message)}
      </div>`;return}if(a.length===0){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.ash}; font-size: 12px;">
        No proposal templates found on this tenant.
      </div>`;return}a.sort((s,i)=>{let l={PA:0,AA:1,passthrough:2};return l[s.type]!==l[i.type]?l[s.type]-l[i.type]:s.name.localeCompare(i.name)}),o.innerHTML="";for(let s of a){let i=document.createElement("button");i.type="button",i.style.cssText=`
      display: block;
      width: 100%;
      background: transparent;
      border: none;
      color: ${n.bone};
      font-family: ${h.sans};
      font-size: 13px;
      text-align: left;
      padding: 10px 14px;
      cursor: pointer;
      transition: background 0.1s ease;
    `;let l=s.type==="PA"?n.emerald:s.type==="AA"?n.blue:n.coolGray;i.innerHTML=`
      <div style="display: flex; align-items: baseline; gap: 8px;">
        <span style="
          font-family: ${h.mono};
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${l};
          flex-shrink: 0;
          min-width: 30px;
        ">${s.type==="passthrough"?"DOC":s.type}</span>
        <span style="flex: 1;">${xe(s.name)}</span>
      </div>`,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async d=>{d.stopPropagation(),d.preventDefault(),m.info(`[prepare-contract] template picked: ${s.name} (type=${s.type})`),o.remove(),document.removeEventListener("click",r,!0);let c=H();try{if(s.type==="AA"){let p;if(t.oppId)p=t.oppId,m.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${p} directly`);else{let $;try{$=await fw(t.tenantId,t.contactId)}catch(g){se(`Failed to load buyer's MT opps: ${g.message}`,"error",6e3),m.warn("[prepare-contract] AA fetch opps failed:",g);return}if($.length===0){se("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if($.length===1)p=$[0].id,m.info(`[prepare-contract] auto-selected MT opp ${p} (only one)`);else{m.info(`[prepare-contract] showing MT opp picker (${$.length} opps)`);let g=await Fm($,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!g){m.info("[prepare-contract] MT opp picker cancelled");return}p=g,m.info(`[prepare-contract] picked MT opp ${p}`)}}let b=$=>{let g=$.getFullYear(),k=String($.getMonth()+1).padStart(2,"0"),S=String($.getDate()).padStart(2,"0");return`${g}-${k}-${S}`},u=$=>{let g=new Date;return g.setDate(g.getDate()+$),b(g)},_=u(45),v=u(7);se("Reading contract data\u2026","info",2500);let f;try{f=await So({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:p,closingDate:_,buyerEarnestDueDate:v,userId:c})}catch($){se(`Failed to prepare contract: ${$.message}`,"error",6e3),m.warn("[prepare-contract] AA stage failed:",$);return}let x=t.contactId||f.contact_id||"";if(!x){se("Could not resolve buyer contact for this opp.","error",6e3);return}Rw({tenantId:t.tenantId,contactId:x,template:s,oppId:p,staged:f,userId:c,defaultClosingDate:_,defaultEMDDueDate:v})}else if(s.type==="PA"){if(!t.contactId){se("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let p;try{p=await gw(t.tenantId,t.contactId)}catch(_){se(`Failed to load ACQ opps: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA fetch opps failed:",_);return}if(p.length===0){se("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let b;if(p.length===1)b=p[0].id,m.info(`[prepare-contract] auto-selected ACQ opp ${b} (only one)`);else{m.info(`[prepare-contract] showing ACQ opp picker (${p.length} opps)`);let _=await Fm(p,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!_){m.info("[prepare-contract] ACQ opp picker cancelled");return}b=_,m.info(`[prepare-contract] picked ACQ opp ${b}`)}se("Reading contract data\u2026","info",2500);let u;try{u=await So({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:b,userId:c})}catch(_){se(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA stage failed:",_);return}if(fl(s.name)){let _=await zm(t.tenantId,t.contactId,s,b,c,u);if(!_)return;u=_}Dw({tenantId:t.tenantId,contactId:t.contactId,template:s,staged:u})}else{if(!t.contactId){se("This template needs to be started from a contact page.","error",6e3);return}let p=null;if(fl(s.name)){let b;try{b=await So({tenantId:t.tenantId,contactId:t.contactId,template:s,userId:c,needSecondSeller:!0})}catch(_){se(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] passthrough stage failed:",_);return}let u=await zm(t.tenantId,t.contactId,s,void 0,c,b);if(!u)return;p=u.second_seller||null}se(`Opening ${s.name}\u2026`,"info",2500);try{await kl(t.tenantId,t.contactId,s,void 0,p)}catch(b){se(`Failed to open contract: ${b.message}`,"error",6e3),m.warn("[prepare-contract] passthrough failed:",b)}}}catch(p){m.warn("[prepare-contract] picker click handler failed:",p),se(`Unexpected error: ${p.message}`,"error",6e3)}}),o.appendChild(i)}},Vm=()=>{let e=document.createElement("button");return e.id=yl,e.type="button",e.style.cssText=`${F} position: relative; order: 5;`,e.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,e.addEventListener("mouseenter",()=>{e.style.borderColor=n.emerald}),e.addEventListener("mouseleave",()=>{e.style.borderColor=n.steel}),e.addEventListener("click",t=>{t.stopPropagation(),Nw(e)}),e},Fw="ws-crm-contact-actions-bar",zw=async()=>{let e=Um();if(!e){document.getElementById(yl)?.remove();return}let t=null;try{t=await R(`#${Fw}`,{timeoutMs:Et+2e3})}catch{m.debug("[prepare-contract] actions bar not found within timeout");return}if(!t)return;let o=document.getElementById(yl);if(o){if(o.dataset.contactId===e.contactId)return;o.remove()}let r=Vm();r.dataset.contactId=e.contactId,r.dataset.tenantId=e.tenantId,t.appendChild(r),m.debug(`[prepare-contract] mounted for contact ${e.contactId}`)},Ft="ws-crm-prepare-contract-button-opp",Pr=`${Ft}-wrap`,qw=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,jw=/\/v2\/location\/([A-Za-z0-9]+)/,Uw=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],xl=()=>{let e=window.location.pathname,t=e.match(qw);if(!t)return null;let o=e.match(jw);return o?{oppId:t[1],tenantId:o[1]}:null},Ww=async()=>{for(let e of Uw)try{let t=await R(e,{timeoutMs:2e3});if(t)return t}catch{}return null},wa=!1,Br=null,wl=null,hl=null,_l,Hr=()=>{Br?.disconnect(),Br=null,wl=null},Gw=e=>{if(Br&&wl===e)return;Hr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(wl=e,Br=new MutationObserver(()=>{let o=xl();if(!o||o.oppId!==e){Hr();return}let r=W();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ft)?.remove(),document.getElementById(Pr)?.remove(),Hr();return}document.getElementById(Ft)||Ym()}),Br.observe(t,{childList:!0,subtree:!0}))},Kw=()=>{hl||(hl=new MutationObserver(()=>{_l===void 0&&(_l=window.setTimeout(()=>{_l=void 0;let e=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),t=!!document.getElementById(Ft);e&&!t&&!wa&&Ym()},300))}),hl.observe(document.body,{childList:!0,subtree:!0}))},Ym=async()=>{if(!wa){wa=!0;try{let e=xl();if(!e){document.getElementById(Ft)?.remove(),document.getElementById(Pr)?.remove(),Hr();return}let t=document.getElementById(Ft);if(t&&t.dataset.oppId===e.oppId){let l=W();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(Pr)?.remove(),Hr());return}t&&(t.remove(),document.getElementById(Pr)?.remove());let o=await Ww();if(!o){m.debug("[prepare-contract] opp mount target not found");return}let r=await ne();if(r!=="Marketing Tracker"){m.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=xl();if(!a||a.oppId!==e.oppId)return;let s=Vm();s.id=Ft,s.dataset.oppId=e.oppId,s.dataset.tenantId=e.tenantId;let i=document.createElement("span");i.id=Pr,i.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),o.appendChild(i),m.debug(`[prepare-contract] mounted on MT opp ${e.oppId} (contactId deferred to click)`),Gw(e.oppId)}finally{wa=!1}}},Jm=()=>{Bw(),zw()};pw();function xe(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ve(e){return xe(e)}var Vw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",zt="ws-crm-compute-offer-button",Tl="ws-crm-compute-offer-popover",nb="ws-crm-offer-modal",Qm="ws-crm-contact-actions-bar",Yw=[".central-panel","[class*='central-panel']"],gt=e=>typeof e=="number"?`$${Math.round(e).toLocaleString("en-US")}`:"-",El=e=>{if(typeof e!="number"||Math.round(e)===0)return"$0";let t=`$${Math.abs(Math.round(e)).toLocaleString("en-US")}`;return e<0?`\u2212${t}`:`+${t}`},Jw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zm=e=>{if(!e)return"";let t=String(e).split("-");return t.length!==3?String(e):`${Jw[Number(t[1])-1]||""} ${Number(t[2])}`.trim()},Q=(e,t,o)=>{let r=document.createElement(e);return t&&(r.style.cssText=t),o!=null&&(r.textContent=o),r},Xm=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${h.sans};font-size:12px;outline:none;`,$l=async e=>{let t={tenant_id:e.tenantId,mode:e.mode};e.propertyRecordId?t.property_record_id=e.propertyRecordId:e.contactId&&(t.contact_id=e.contactId),e.mode!=="get"&&(e.propertyCondition!=null&&(t.property_condition=e.propertyCondition),e.repairOverride!==void 0&&(t.repair_override=e.repairOverride));let o=await fetch(Vw,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},Lo=()=>{document.getElementById(Tl)?.remove(),document.removeEventListener("mousedown",ab,!0)};function ab(e){let t=document.getElementById(Tl),o=document.getElementById(zt),r=e.target;t&&!t.contains(r)&&o&&!o.contains(r)&&Lo()}var sb=(e,t)=>{Lo();let o=e.getBoundingClientRect(),r=document.createElement("div");r.id=Tl;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${y.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${h.sans};color:${n.bone};font-size:13px;line-height:1.35;`,t(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",ab,!0),0)},Ea=(e,t)=>{sb(e,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(Q("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(Q("div",`color:${n.bone};font-size:12px;`,t))})},Qw=(e,t,o)=>{sb(e,r=>{r.appendChild(Q("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),t.forEach(a=>{let s=Q("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${y.sm};font-family:${h.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);s.type="button",s.addEventListener("mouseenter",()=>s.style.borderColor=n.blue),s.addEventListener("mouseleave",()=>s.style.borderColor=n.steel),s.addEventListener("click",()=>{Lo(),o(a.property_record_id)}),r.appendChild(s)})})},Ta=()=>{document.getElementById(nb)?.remove(),document.removeEventListener("keydown",ib,!0)};function ib(e){e.key==="Escape"&&Ta()}var eb=(e,t,o)=>{Ta(),Lo();let r=o,a=!1,s="",i=document.createElement("div");i.id=nb,i.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${h.sans};`,i.addEventListener("mousedown",p=>{p.target===i&&Ta()});let l=Q("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${y.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);i.appendChild(l);let d=(p,b,u)=>{a||(a=!0,s="",c(),$l({tenantId:e,propertyRecordId:t,mode:p,propertyCondition:b,repairOverride:u}).then(_=>{_&&_.ok?r={..._,current_offer:_.current_offer??r.current_offer,current_offer_date:_.current_offer_date??r.current_offer_date}:s=_&&_.error||"Request failed."}).catch(_=>{m.error("[compute-offer] worksheet request failed:",_),s="Request failed. Try again."}).finally(()=>{a=!1,c()}))};function c(){let p=r,b=!!p.has_comps;l.innerHTML="";let u=Q("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),_=Q("div","");_.appendChild(Q("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),_.appendChild(Q("div",`font-size:12px;color:${n.ash};margin-top:2px;`,p.address||"-"));let v=Q("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");v.type="button",v.addEventListener("click",Ta),u.append(_,v),l.appendChild(u);let f=Q("div","padding:14px 18px 18px;");l.appendChild(f);let x=Q("select",Xm());(p.rehab_levels||[]).forEach(M=>{let O=document.createElement("option");O.value=M.key,O.textContent=M.label,M.key===(p.tier||p.property_condition)&&(O.selected=!0),x.appendChild(O)}),x.disabled=a,x.addEventListener("change",()=>d("recompute",x.value,$.value.trim()));let $=Q("input",Xm());$.type="number",$.placeholder="uses the level",$.value=p.repair_override!=null?String(p.repair_override):"",$.disabled=a,$.addEventListener("keydown",M=>{M.key==="Enter"&&$.blur()}),$.addEventListener("change",()=>d("recompute",x.value,$.value.trim()));let g=Q("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");g.appendChild(Q("div",`font-size:12px;color:${b?n.bone:n.amber};`,b?`Investor comps: $${p.comp_price_per_sqft}/sqft \xB7 ${p.comp_count} comps${p.comp_pull_at?` \xB7 pulled ${Zm(p.comp_pull_at)}`:""}`:"No comps pulled yet."));let k=Q("button",`flex-shrink:0;padding:6px 12px;border-radius:${y.sm};border:1px solid ${n.blue};background:${b?"transparent":n.blue};color:${b?n.blue:"#fff"};font-family:${h.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":b?"Re-pull Comps":"Pull Comps");k.type="button",k.disabled=a,k.addEventListener("click",()=>d("pull",x.value,$.value.trim())),g.append(k),f.appendChild(g),p.low_confidence&&b&&f.appendChild(Q("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${p.comp_count??0} comps in window.`));let S=p.current_offer!=null;f.appendChild(Q("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${y.sm};background:${n.slate};border:1px solid ${n.steel};color:${S?n.bone:n.ash};`,S?`Last offer made: ${gt(p.current_offer)}${p.current_offer_date?` \xB7 ${Zm(p.current_offer_date)}`:""}`:"No offer made yet."));let T=Q("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),w=Q("div","");w.appendChild(Q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),w.appendChild(x);let C=Q("div","");C.appendChild(Q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),C.appendChild($),T.append(w,C),f.appendChild(T);let E=Q("div",`border-top:1px solid ${n.steel};padding-top:12px;`),L=(M,O,P)=>{let V=Q("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${P?.strong?"font-weight:700;":""}`),j=Q("div","");j.appendChild(Q("div",`font-size:${P?.strong?"13":"12"}px;color:${n.bone};`,M)),P?.sub&&j.appendChild(Q("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,P.sub));let K=Q("div",`font-size:${P?.strong?"15":"12"}px;color:${P?.color||n.bone};white-space:nowrap;`,O);V.append(j,K),E.appendChild(V)};if(b&&p.imv!=null){L("Investor Market Value (IMV)",gt(p.imv)),p.arv!=null&&L("After Repair Value (ARV)",gt(p.arv),{color:n.ash});let M=p.repair_adjustment??0,O=-M,P=p.repair_override?"Repair override":p.property_condition_label||"Repairs";M===0?L(`Repairs (${P})`,"Included",{color:n.ash,sub:`${gt(p.repair_total)} in repairs included at IMV`}):L(`Repairs (${P})`,El(O),{color:O<0?n.crimson:n.emerald,sub:`${gt(p.repair_total)} total, ${gt(p.baseline_repairs)} included at IMV`}),L("Min. Profit Target",El(-(p.profit_target??0)),{color:n.ash}),L("Maximum Cash Offer (MAO)",gt(p.mao),{strong:!0,color:n.blue}),L("Target Profit",El(-(p.ico_delta??0)),{color:n.ash}),L("Initial Cash Offer (ICO)",gt(p.ico),{strong:!0,color:n.blue})}else E.appendChild(Q("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));f.appendChild(E);let A=Q("div",`margin-top:12px;font-size:11px;min-height:14px;color:${s?n.crimson:n.ash};`);A.textContent=a?"Saving\u2026":s||(b?"Saved to the Property.":""),f.appendChild(A)}c(),document.body.appendChild(i),document.addEventListener("keydown",ib,!0)},tb=(e,t)=>{let o=document.createElement("button");o.type="button",o.id=zt,o.dataset.contactId=e,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${y.sm};font-family:${h.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=i=>{o.disabled=i,o.style.cursor=i?"default":"pointer";let l=r();l&&(l.textContent=i?"Opening\u2026":"Offer Worksheet")},s=i=>{if(i.needs_property_selection&&i.properties&&i.properties.length){Qw(o,i.properties,l=>{a(!0),$l({tenantId:t,propertyRecordId:l,mode:"get"}).then(d=>{d.ok&&d.property_record_id?eb(t,d.property_record_id,d):Ea(o,d.error||"Couldn't load that property.")}).catch(d=>{m.error("[compute-offer] get failed:",d),Ea(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}i.ok&&i.property_record_id?eb(t,i.property_record_id,i):Ea(o,i.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{s(await $l({tenantId:t,contactId:e,mode:"get"}))}catch(i){m.error("[compute-offer] webhook failed:",i),Ea(o,"Request failed. Try again.")}finally{a(!1)}}}),o},Zw=async()=>{for(let e of Yw)try{let t=await R(e,{timeoutMs:3e3});if(t)return t}catch{}return null},ob=async(e,t)=>{let o=t.querySelector(`#${Qm}`);if(!o)try{o=await R(`#${Qm}`,{timeoutMs:3e3,root:t})}catch{o=null}return o?(e.style.order="3",o.appendChild(e),!0):!1},rb=()=>{let e=document.querySelectorAll(`#${zt}`);for(let t=1;t<e.length;t++)e[t].remove()},Xw=async()=>{let e=U();if(!e||!e.locationId||e.source!=="url"){document.getElementById(zt)?.remove(),Lo();return}let t=e.locationId,o=document.getElementById(zt);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove(),Lo();let r="seller";try{r=qe(await ze(e.contactId,t))}catch(l){m.warn("[compute-offer] contact-type fetch threw - defaulting seller:",l)}if(r!=="seller"){m.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(zt)?.remove();return}let a=await Zw();if(!a){m.warn("[compute-offer] no central panel found");return}let s=U();if(!s||s.contactId!==e.contactId)return;let i=tb(e.contactId,t);if(!await ob(i,a)){m.warn("[compute-offer] actions bar not found after waiting");return}rb(),m.debug(`[compute-offer] mounted for ${e.contactId}`),$a?.disconnect(),$a=new MutationObserver(()=>{if(U()?.contactId!==e.contactId){$a?.disconnect();return}if(!document.getElementById(zt)){let l=tb(e.contactId,t);ob(l,a).then(()=>rb())}}),$a.observe(a,{childList:!0})},$a=null,Fr=null,lb=()=>{let e=U()?.contactId??null;if(Fr&&Fr.id===e)return;let t=Xw().finally(()=>{Fr?.promise===t&&(Fr=null)});Fr={id:e,promise:t}};var Ia="reos-theme-stylesheet",Mb="reos-theme-fonts",Po=!1,e0=()=>{let e=document.getElementById(Mb);e&&e.remove()},t0=`

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

html body .n-tabs-tab:not(.n-tabs-tab--active):not(#__reos_never_id),
html body .n-tabs-tab:not(.n-tabs-tab--active):not(#__reos_never_id) .n-tabs-tab__label {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
}
html body .n-tabs-tab.n-tabs-tab--active:not(#__reos_never_id),
html body .n-tabs-tab.n-tabs-tab--active:not(#__reos_never_id) .n-tabs-tab__label {
  color: var(--reos-emerald) !important;
  -webkit-text-fill-color: var(--reos-emerald) !important;
}
html body .n-tabs-tab:not(#__reos_never_id):hover,
html body .n-tabs-tab:not(#__reos_never_id):hover .n-tabs-tab__label {
  color: var(--reos-emerald-bright) !important;
  -webkit-text-fill-color: var(--reos-emerald-bright) !important;
}

html body iframe[src*="ghl-isv-app-prod.leadconnectorhq.com"]:not(#__reos_never_id) {
  background-color: #F9FAFB !important;
  background: #F9FAFB !important;
}

html body .message-bubble .markdown-body:not(#__reos_never_id),
html body .message-bubble .markdown-body :not(#__reos_never_id):not(a):not(code):not(pre) {
  color: var(--reos-bone) !important;
  -webkit-text-fill-color: var(--reos-bone) !important;
}
html body .chat-view__thoughts-drawer :not(#__reos_never_id):not(a),
html body .chat-view__thoughts-title:not(#__reos_never_id) {
  color: var(--reos-ash) !important;
  -webkit-text-fill-color: var(--reos-ash) !important;
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

`,o0=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],r0=e=>{if(!e||e[0]!=="#")return e;let t=e.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return e;let o=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return e;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${s})`}return`rgb(${o}, ${r}, ${a})`},n0=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),a0=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],Ao=new WeakSet,s0=8,db=0,cb=new WeakSet,pb=new WeakSet,mb=new WeakSet,Il=(e,t)=>{let o=[];return e.forEach(r=>{t.has(r)||o.push(r)}),o},i0="#F9FAFB",Ib=e=>e.tagName!=="IFRAME"||!e.src.includes("ghl-isv-app-prod.leadconnectorhq.com")?!1:(e.style.getPropertyValue("background-color")!=="rgb(249, 250, 251)"&&e.style.setProperty("background-color",i0,"important"),!0),bb=(e,t=!1)=>{try{if(!document.body)return;let o=e??document.body.querySelectorAll("*");(t?Il(o,cb):o).forEach(a=>{try{if(a.classList&&(a.classList.contains("hr-drawer-container")||a.classList.contains("hr-detached-container"))){(a.getAttribute("style")||"").includes("background")&&(a.style.removeProperty("background-color"),a.style.removeProperty("background-image"));return}if(Ib(a)){Ao.add(a);return}if(Ao.has(a)&&a.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']")||a.closest(".hl_header, header.hl_header, header.app-header")||a.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=a.tagName;if(s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||s==="SCRIPT"||s==="STYLE"||s==="SVG"||s==="PATH"||s==="IMG")return;let l=window.getComputedStyle(a).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let d=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!d)return;let c=+d[1],p=+d[2],b=+d[3];if((d[4]!==void 0?+d[4]:1)<.5||c<230||p<230||b<230)return;let _=a.style.getPropertyValue("background-color");if(_==="rgb(18, 22, 29)"){Ao.add(a);return}if(a.closest(".hr-button")&&!(a.classList&&a.classList.contains("hr-button"))){_!=="transparent"&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background-image","none","important")),Ao.add(a);return}a.style.setProperty("background-color","rgb(18, 22, 29)","important"),a.style.setProperty("color","rgb(237, 238, 240)","important"),Ao.add(a)}catch{}}),t||o.forEach(a=>{Ao.has(a)||cb.add(a)})}catch{}},Ca=new WeakSet,Mo=()=>{document.querySelectorAll(a0.join(", ")).forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.querySelectorAll("*");[t,...Array.from(o)].forEach(r=>{if(r.classList&&(r.classList.contains("hr-drawer-container")||r.classList.contains("hr-detached-container"))){(r.getAttribute("style")||"").includes("background")&&(r.style.removeProperty("background-color"),r.style.removeProperty("background-image"));return}if(Ib(r)){Ca.add(r);return}if(Ca.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH"||r.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=+i[1],d=+i[2],c=+i[3];if(!(l<230||d<230||c<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),Ca.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),Ca.add(r)}})})},ub=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.classList&&t.classList.contains("hr-button"))return;let o=t.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(t.style.setProperty("background-color","transparent","important"),t.style.setProperty("background-image","none","important"))})},hb=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(e=>{e.style.setProperty("background-color","#252C36","important"),e.style.setProperty("background-image","none","important"),e.style.setProperty("color","#EDEEF0","important")})},_b=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"),t.style.removeProperty("border-style"),t.style.removeProperty("border-width"),t.style.removeProperty("border-radius"))})},Sa=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(t=>{let o=t.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let i=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(i){let l=+i[1],d=+i[2],c=+i[3];(i[4]!==void 0?+i[4]:1)>=.5&&l>=180&&d>=180&&c>=180&&l+d+c>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},yb=()=>{let e="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(e)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},Io=()=>{if(!Po)for(let e of o0){let t;try{t=document.querySelectorAll(e.selector)}catch{continue}t.forEach(o=>{for(let[r,a]of Object.entries(e.styles)){let s=o.style.getPropertyPriority(r),i=o.style.getPropertyValue(r),l=n0.has(r)?r0(a):a;s==="important"&&i===l||o.style.setProperty(r,a,"important")}})}},Oa="#1A1F28",l0=26,d0=31,c0=40,vb=new Set,gb=new Set,La=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let a=o.getBoundingClientRect();if(a.width===0||a.height===0||a.width>800)return;o.style.setProperty("display","none","important");let s=o.className?.toString()||"<no class>";!gb.has(s)&&s!=="<no class>"&&(gb.add(s),m.debug(`Hid empty "--" leaf: "${s}"`))})},p0=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],m0=["trash","Trash","TRASH","delete","Delete","DELETE"],b0=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.getAttribute("data-reos-trash")==="true")return;let o=t.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(m0.some(s=>a.includes(s))&&(r=!0),r||o.querySelectorAll("path").forEach(i=>{if(r)return;let l=i.getAttribute("d")||"";p0.some(d=>l.includes(d))&&(r=!0)}),!r){let s=(t.id||"").toLowerCase(),i=(t.getAttribute("aria-label")||"").toLowerCase(),l=(t.getAttribute("title")||"").toLowerCase();(s.includes("delete")||s.includes("remove")||s.includes("trash")||i.includes("delete")||i.includes("remove")||i.includes("trash")||l.includes("delete")||l.includes("remove")||l.includes("trash"))&&(r=!0)}r&&t.setAttribute("data-reos-trash","true")})},u0=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),h0=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=(t.textContent||"").trim();o.length===0||o.length>40||u0.has(o)&&t.style.display!=="none"&&(t.style.setProperty("display","none","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("pointer-events","none","important"))})},fb=new Set,Cl=new WeakSet,_0=(e,t=!1)=>{let o=e??document.body.querySelectorAll("*");(t?Il(o,pb):o).forEach(a=>{if(Cl.has(a)&&a.style.getPropertyValue("color")==="rgb(237, 238, 240)"||a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=(a.className?.toString()||"").toLowerCase();if(s.includes("ai-button")||s.includes("ask-ai")||s.includes("bg-clip-text")||s.includes("text-transparent")||a.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let i=a.tagName.toLowerCase();if(i==="svg"||i==="path"||i==="circle"||i==="rect"||i==="polygon"||i==="polyline"||i==="line"||i==="g")return;let l=!1;for(let v of Array.from(a.childNodes))if(v.nodeType===Node.TEXT_NODE&&(v.textContent||"").trim()){l=!0;break}if(!l)return;let d=Array.from(a.children);if(d.length>0&&d.every(v=>{let f=v.tagName.toLowerCase();return f==="svg"||f==="img"})&&!l)return;let b=window.getComputedStyle(a).color;if(!(b==="rgb(255, 255, 255)"||b==="rgba(255, 255, 255, 1)"||b==="#ffffff"||b==="white"))return;a.style.setProperty("color","#EDEEF0","important"),a.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),Cl.add(a);let _=a.className?.toString()||"<no class>";!fb.has(_)&&_!=="<no class>"&&(fb.add(_),m.debug(`Remapped pure-white text -> bone: "${_}"`))}),t||o.forEach(a=>{Cl.has(a)||pb.add(a)})},xb=new Set,y0=()=>{let e=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),t="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(t)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),e.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(s=>{if(s.closest("[id^='ws-crm-']"))return;let i=(s.className?.toString()||"").toLowerCase();if(i.includes("avatar"))return;let l=window.getComputedStyle(s),d=l.backgroundColor,c=l.backgroundImage||"",p=!1;if(c!=="none"&&c.includes("gradient"))p=!0;else if(d&&d!=="rgba(0, 0, 0, 0)"&&d!=="transparent"){let S=d.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(S&&parseFloat(S[1])<.6)return;let T=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(T){let w=parseInt(T[1],10),C=parseInt(T[2],10),E=parseInt(T[3],10);(w>=60||C>=60||E>=60)&&(w>230&&C>230&&E>230||(w>=80||C>=80||E>=80)&&(p=!0))}}if(!p)return;let u=(s.textContent||"").trim(),_=i,v=Array.from(s.querySelectorAll("*")).map(S=>(S.className?.toString()||"").toLowerCase()).join(" "),f=u.toLowerCase()==="ask ai"||_.includes("ai-button")||_.includes("ask-ai")||_.includes("askai"),x=_.includes("bg-clip-text")||_.includes("text-transparent")||v.includes("bg-clip-text")||v.includes("text-transparent"),$=Array.from(s.querySelectorAll("*")).some(S=>{let T=window.getComputedStyle(S),w=T.getPropertyValue("-webkit-background-clip")||"",C=T.getPropertyValue("background-clip")||"";return w.includes("text")||C.includes("text")});if(f||x||$){let S=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],T=w=>{S.forEach(C=>w.style.removeProperty(C))};T(s),s.querySelectorAll("*").forEach(T);return}let g="#12161D";s.style.setProperty("color",g,"important"),s.querySelectorAll("*").forEach(S=>{let T=S.tagName.toLowerCase();T==="svg"||T==="path"||T==="circle"||T==="rect"||T==="polygon"||T==="polyline"||T==="line"||T==="g"?(S.style.setProperty("fill",g,"important"),S.style.setProperty("stroke",g,"important"),S.style.setProperty("color",g,"important")):(S.style.setProperty("color",g,"important"),S.style.setProperty("-webkit-text-fill-color",g,"important"))});let k=s.className?.toString()||"<no class>";!xb.has(k)&&k!=="<no class>"&&(xb.add(k),m.debug(`Darkened SVG icons on colored button: "${k}"`))})})},wb=new Set,v0=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;if((t.className?.toString()||"").toLowerCase().includes("default-avatar")){t.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(d=>{(d.getAttribute("style")||"").includes("translateY(11px)")&&d.style.removeProperty("transform")});return}let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(d=>{let c=d;if(c.closest("[id^='ws-crm-']"))return;let p=d.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let b=p.left<r.right&&p.right>r.left,u=p.top<r.bottom&&p.bottom>r.top;if(!(b&&u)||p.top+p.height/2<a)return;let v=p.width*p.height/(r.width*r.height);if(v>.55)return;let f=c,x=c.parentElement,$=0;for(;x&&x!==t&&$<3;){let k=x.getBoundingClientRect();if(k.width>0&&k.width<=30&&k.height<=30)f=x;else break;x=x.parentElement,$++}f.style.setProperty("transform","translateY(11px)","important");let g=(f.className?.toString()||"")+" "+f.tagName;wb.has(g)||(wb.add(g),m.debug(`Dropped activity badge 11px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${v.toFixed(2)}): "${g}"`))})})},g0="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",f0=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",g0,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},kb=new Set,x0=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=parseInt(i[1],10),d=parseInt(i[2],10),c=parseInt(i[3],10);if(!(l>200&&d>200&&c>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!kb.has(p)&&p!=="<no class>"&&(kb.add(p),m.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${l},${d},${c})): "${p}"`))})})},Eb=new Set,w0=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=o.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let l=o.className?.toString()||"<no class>";!Eb.has(l)&&l!=="<no class>"&&(Eb.add(l),m.debug(`Painted Ask AI wrapper graphite: "${l}"`))}}o=o.parentElement,r++}})},$b=new Set,k0=()=>{let e=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),o=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let l=a.getBoundingClientRect();l.width<240||l.height<120||l.width>1500||l.height>900||o.push(a)}),[...e,...o].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let l=(i.className?.toString()||"").toLowerCase();if(l.includes("avatar")||l.includes("notification-dot")||l.includes("indicator"))return;if(l.includes("sidebar-option-button")||i.closest(".sidebar-option-button")||i.closest("nav[class*='w-13']")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("tabulator")||l.includes("tabulator-page")||i.closest("[class*='tabulator']")){(i.getAttribute("style")||"").includes("background-color")&&i.style.removeProperty("background-color");return}if(l.includes("hr-card")||i.closest(".hr-card")||i.id&&i.id.startsWith("opportunity-")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("ai-button")||l.includes("ask-ai")||l.includes("bg-clip-text")||l.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(i).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let c=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let p=parseInt(c[1],10),b=parseInt(c[2],10),u=parseInt(c[3],10);if(!(p>200&&b>200&&u>200))return;let v=i.getBoundingClientRect();if(v.width<24||v.height<16||v.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let f=i.className?.toString()||"<no class>";!$b.has(f)&&f!=="<no class>"&&($b.add(f),m.debug(`Coerced light bg (${v.width.toFixed(0)}x${v.height.toFixed(0)}, rgb(${p},${b},${u})): "${f}"`))})})},Tb=new Set,E0=e=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";(e??document.body.querySelectorAll("*")).forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']")||r.children.length>0)return;let a=(r.textContent||"").trim();if(a.length===0||a.length>80||a==="--"||r.closest(t)||r.closest("[class*='avatar'], [class*='hr-avatar']")||r.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||r.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(r.matches("[role='heading']")||r.closest("[role='heading']")||r.matches("h1, h2, h3")||r.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){r.matches("h1, h2, h3")&&(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let k=r.getAttribute("style")||"";(k.includes("color")||k.includes("background"))&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"),r.style.removeProperty("background-color"));return}if(r.closest("#SettingTexasSmsBlock")||r.matches("p.ui-text-sm-medium")&&r.parentElement?.classList?.contains("flex")&&r.parentElement?.classList?.contains("items-center")&&r.parentElement?.children?.length===1){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-button, .n-button")||r.matches(".hr-button__content, .n-button__content")||r.closest(".hr-button__content, .n-button__content")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".bg-primary-50, [class*='bg-primary-50']")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}let s=r,i=null;for(let k=0;k<4&&s;k++){let S=s.nextElementSibling;if(S&&(S.matches(t)||S.querySelector(t)!==null)){i=S;break}s=s.parentElement}if(!i)return;let l=r.getBoundingClientRect();if(l.width===0||l.height===0||l.width>400||l.height>60)return;r.style.setProperty("color","#9098A3","important"),r.style.setProperty("-webkit-text-fill-color","#9098A3","important");let d=i,c=d.getBoundingClientRect(),p=d.className?.toString()||"",b=p.includes("schedule-ui-form-weekly-schedule-checkbox")||d.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,u=p.includes("hl-form-item")||p.includes("n-form-item--top-labelled")||d.closest(".hl-form-item")!==null,_=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",v=(p.includes("hr-form-item-blank")||p.includes("hr-form-item")||d.matches(_))&&(d.matches(_)||d.querySelector(_)!==null);v&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let f=p.includes("hr-radio")||d.closest(".hr-radio, [class*='hr-radio']")!==null;f&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let x=p.includes("hr-breadcrumb")||d.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;x&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let $=p.includes("hr-header-lite")||d.closest("[class*='hr-header-lite']")!==null;$&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius")),!b&&!u&&!v&&!f&&!x&&!$&&c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(d.style.setProperty("background-color",Oa,"important"),d.style.setProperty("border-color","#252C36","important"),d.style.setProperty("border-style","solid","important"),d.style.setProperty("border-width","1px","important"),d.style.setProperty("border-radius","4px","important"));let g=r.className?.toString()||"<no class>";!Tb.has(g)&&g!=="<no class>"&&(Tb.add(g),m.debug(`Colored field label "${a.slice(0,30)}": "${g}"`))})},Cb=new Set,$0=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),l=Math.max(16,Math.min(24,Math.round(i*.6)));t.style.setProperty("font-size",`${l}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${l}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let d=t.className?.toString()||"<no class>";!Cb.has(d)&&d!=="<no class>"&&(Cb.add(d),m.debug(`Resized avatar text to ${l}px (circle ${i.toFixed(0)}px): "${d}"`))})},Sb=new Set,T0=new Set(["Enter Dashboard Name"]),C0=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=t.placeholder||"";if(T0.has(r)){(t.getAttribute("style")||"").includes("background-color")&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"));return}t.style.setProperty("background-color",Oa,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=t.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",Oa,"important"),a.style.setProperty("border-color","#252C36","important"));let s=t.className?.toString()||"<no class>";!Sb.has(s)&&s!=="<no class>"&&(Sb.add(s),m.debug(`Forced input slate bg: "${s}"`))})},Aa=(e,t=!1)=>{let o=e??document.body.querySelectorAll("*");(t?Il(o,mb):o).forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']")||a.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||a.id==="chat-filter"||a.id==="phone-calls"||a.id==="archive-conversation"||a.id==="star-toggle"||a.id==="read-toggle"||a.id==="delete-conversation")return;if(a.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(a.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}let s=a.className?.toString()||"";if(s.includes("bg-inherit")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(a.closest(".pipeline-ribbon")&&s.split(" ").includes("count")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.split(" ").includes("tabulator-page")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(f=>s.includes(f))){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("schedule-ui-form-weekly-schedule-checkbox")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("border-color")||f.includes("border-style")||f.includes("border-width"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("border-color"),a.style.removeProperty("border-style"),a.style.removeProperty("border-width"));return}if(s.includes("n-button")&&s.includes("icon-only")&&!s.includes("quaternary")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-button--tertiary-type")||s.includes("n-button--tertiary-type")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"),a.style.removeProperty("border-color"),a.style.removeProperty("border-style"),a.style.removeProperty("border-width"),a.style.removeProperty("border-radius"));return}if(s.includes("hr-data-table-td")||s.includes("hr-data-table-tr")||s.includes("hr-data-table__body-cell")||s.includes("hr-data-table__cell")||s.includes("hr-data-table__header-cell")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("n-data-table-td--fixed-right")||s.includes("n-data-table-td--last-col")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(a.classList.contains("hr-tabs")||s.includes("hr-tabs-tab-wrapper")||s.includes("hr-tabs-nav")||s.includes("hr-tabs-nav-scroll-content")||s.includes("hr-tabs-content")||s.includes("hr-tabs-pane")||s.includes("hr-tabs-rail")||s.includes("hr-tabs-wrapper")||s.includes("hr-tabs-pane-wrapper")||s.includes("hr-tab-pane")){let f=a.getAttribute("style")||"";(f.includes("background-color: rgb(26, 31, 40)")||f.includes("background-color: #1A1F28")||f.includes("background-color: #1a1f28"))&&a.style.removeProperty("background-color");return}if(s.includes("hr-date-panel")||s.includes("n-date-panel")||a.closest(".hr-date-panel, .n-date-panel")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-tag")&&s.includes("ui-default")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if((s.includes("bg-purple-50")||s.includes("bg-purple-100"))&&(s.includes("rounded-lg")||s.includes("rounded-md")||s.includes("rounded-full"))){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("n-alert")||a.closest(".n-alert")||s.includes("hl-warning")||s.includes("hl-error")||s.includes("hl-info")||s.includes("hl-success")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-card")||a.closest(".hr-card")||a.id&&a.id.startsWith("opportunity-")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("bg-gray-50")||s.includes("bg-gray-100")||s.includes("bg-gray-200")||s.includes("bg-white")||s.includes("bg-blue-50")||s.includes("bg-blue-100")||s.includes("bg-sky-50")||s.includes("bg-indigo-50")||s.includes("bg-slate-50")||s.includes("bg-neutral-50")||s.includes("bg-zinc-50")||s.includes("bg-stone-50")||s.includes("F7F9FD")||s.includes("F9FAFB")||s.includes("ECEEF2")||s.includes("eceef2")||s.includes("EFF4FF")||s.includes("eff4ff")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-collapse-item")||s.includes("hr-collapse hr-accordion")||s.includes("hr-accordion"))return;if(s.includes("sidebar-option-button")||a.closest(".sidebar-option-button")||a.closest("nav[class*='w-13']")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(a.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let f=a.getAttribute("style")||"";(f.includes("background-color")||f.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}let l=window.getComputedStyle(a).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let d=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!d)return;let c=parseInt(d[1],10),p=parseInt(d[2],10),b=parseInt(d[3],10);if(!(c<l0&&p<d0&&b<c0))return;let _=a.getBoundingClientRect();if(_.width===0||_.height===0||_.width>800||_.height>200)return;a.style.setProperty("background-color",Oa,"important");let v=a.className?.toString()||"<no class>";!vb.has(v)&&v!=="<no class>"&&(vb.add(v),m.debug(`Coerced dark bg to slate (${_.width.toFixed(0)}x${_.height.toFixed(0)}, rgb(${c},${p},${b})): "${v}"`))}),t||o.forEach(a=>{mb.add(a)})},Ma=()=>{let e="#4B8BF5",t=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(s=>{s.setAttribute("data-reos-recolored","1"),s.setAttribute("data-reos-recolored-v2","1"),s.setAttribute("data-reos-recolored-v3","1");let l=(s.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!l)return;let d;try{d=atob(l[1])}catch{return}let c=d,p=!1;if(t.forEach(_=>{c.includes(_)&&(c=c.split(_).join(e),p=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(_=>{c.includes(_)&&(c=c.split(_).join("transparent"),p=!0)}),s.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(v=>{c.includes(v)&&(c=c.split(v).join("#EDEEF0"),p=!0)}),!!p)try{let _=btoa(c);s.setAttribute("src",`data:image/svg+xml;base64,${_}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(s=>{let i=s.getAttribute("src")||"";if(!i||i.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(i))return;s.setAttribute("data-reos-masked","1");let l=`url("${i}")`;s.style.setProperty("-webkit-mask-image",l,"important"),s.style.setProperty("-webkit-mask-size","contain","important"),s.style.setProperty("-webkit-mask-repeat","no-repeat","important"),s.style.setProperty("-webkit-mask-position","center","important"),s.style.setProperty("mask-image",l,"important"),s.style.setProperty("mask-size","contain","important"),s.style.setProperty("mask-repeat","no-repeat","important"),s.style.setProperty("mask-position","center","important"),s.style.setProperty("background-color","var(--reos-blue)","important"),s.setAttribute("src",o)})},zr=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(t=>{[...t.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);t.classList.contains(r)||t.classList.add(r)}})})},S0=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("background"))})},Oo=()=>{let e=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},t=document.querySelector(".crm-opportunities-modal");t&&t.querySelectorAll(".hr-base-selection").forEach(a=>{e(a),a.querySelectorAll("div, span").forEach(i=>{if(i.id?.startsWith("ws-crm-"))return;let l=window.getComputedStyle(i).backgroundColor;l==="rgba(0, 0, 0, 0)"||l==="transparent"||!l||e(i)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{e(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let s="rgb(150, 162, 173)",i="rgb(0, 191, 124)",l=c=>{let p=r.querySelector(".ui-upload-icon svg");p&&(p.style.setProperty("color",c,"important"),p.style.setProperty("stroke",c,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(b=>{b.style.setProperty("stroke",c,"important")})},d=!1;try{d=r.matches(":hover")}catch{}l(d?i:s),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>l(i)),r.addEventListener("mouseleave",()=>l(s)))})},Sl=new WeakSet,L0=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(t=>{if(!Sl.has(t))try{let o=t.contentDocument||t.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){Sl.add(t);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),t.style.background="#FFFFFF",t.style.borderRadius="6px",Sl.add(t)}catch{}})},A0=()=>{let e=document.getElementById("edit-phone-number-modal");e&&e.querySelectorAll("textarea").forEach(t=>{let o=getComputedStyle(t).backgroundColor;o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"&&t.style.setProperty("border-color",o,"important")})},st=!1,Ml=null,Lb=!1,M0=()=>{if(Lb)return;Lb=!0;let e=null,t=0;document.addEventListener("pointerdown",r=>{r.isPrimary&&(e=r.clientX,t=r.clientY,st=!1)},!0),document.addEventListener("pointermove",r=>{e!==null&&!st&&Math.abs(r.clientX-e)+Math.abs(r.clientY-t)>6&&(st=!0)},!0);let o=()=>{e=null,st&&(st=!1,Ml&&Ml())};document.addEventListener("pointerup",o,!0),document.addEventListener("pointercancel",o,!0)},Ab=()=>{let e,o=()=>{if(Po||st)return;db++;let p=db%s0!==0,b=document.body?document.body.querySelectorAll("*"):void 0;zr(),Io(),C0(),Aa(b,p),La(b),E0(b),L0(),k0(),w0(),x0(),f0(),y0(),$0(),v0(),_0(b,p),Ma(),h0(),b0(),Oo(),Mo(),bb(b,p),_b(),yb(),Sa(),S0(),Oo(),ub(),hb(),A0()},r=()=>{let p=document.activeElement;if(!p)return!1;let b=p.tagName;return b==="TEXTAREA"||b==="INPUT"||p.isContentEditable===!0},a=0,s=()=>{a=Date.now()};document.addEventListener("scroll",s,{capture:!0,passive:!0}),document.addEventListener("wheel",s,{capture:!0,passive:!0});let i=()=>Date.now()-a<600,l=()=>{if(!(Po||st)){if(r()||i()){e!==void 0&&clearTimeout(e),e=window.setTimeout(()=>{e=void 0,o()},800);return}e===void 0&&(e=window.setTimeout(()=>{e=void 0,o()},800))}};zr(),Io(),Aa(),La(),Ma(),Oo(),Mo(),bb(),_b(),yb(),Sa(),ub(),hb(),window.setTimeout(()=>{zr(),Io(),Aa(),La(),Ma(),Oo(),Mo(),Sa()},500),window.setTimeout(()=>{zr(),Io(),Aa(),La(),Ma(),Oo(),Mo(),Sa()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{Mo(),Io()});let d=!1;Ml=()=>l(),M0(),new MutationObserver(()=>{st||d||(d=!0,requestAnimationFrame(()=>{d=!1,l()}))}).observe(document.body,{childList:!0,subtree:!0})},Ll,I0=()=>{let e=()=>{if(Po)return;let o=document.getElementById(Ia);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let i=s.tagName.toLowerCase();if(i==="style"||i==="link"){if(s.id===Ia||s.id===Mb)continue;r=!0;break}}if(r)break}r&&Ll===void 0&&(Ll=window.setTimeout(()=>{Ll=void 0,e()},150))}).observe(document.head,{childList:!0}),e()},qr=()=>{if(Po=!1,e0(),!document.getElementById(Ia)){let e=document.createElement("style");e.id=Ia,e.textContent=t0,document.head.appendChild(e),m.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?Ab():window.addEventListener("DOMContentLoaded",Ab)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,I0())},Al=[],Ol=()=>{for(let t of Al)window.clearTimeout(t);Al=[];let e=()=>{Po||st||(zr(),Io(),Oo(),Mo())};e(),Al.push(window.setTimeout(e,150),window.setTimeout(e,400))};var Ob="ws-crm-customizer-version-badge",Pa=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",Pa,{once:!0});return}if(document.getElementById(Ob))return;let e=document.createElement("div");e.id=Ob,e.style.cssText=`
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
  `,e.textContent=`Customizer v${ln}`,e.title=`Built ${dn}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var Fb=new Set(["ej0SqnTYIprechAMAPrd"]),Bo="contact-select-trigger",zb="ws-crm-reply-from-warning",qb="contact-select-menu",Pb="ws-crm-rf-thread-opt",Pl="",Bl=!1,jr=null,Ba=null,Bb=!1,Ur="",Hb,ft=(...e)=>{try{console.log("[reply-from]",...e)}catch{}},Hl=e=>{let t=(e?.textContent||"").match(/\+?1?\d{10}\b/);return t?t[0]:""},Ye=e=>(e||"").replace(/\D/g,"").slice(-10),Db=e=>{let t=Ye(e);return t.length===10?`+1 ${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:e},O0=e=>{let t=e.meta||{};return(e.direction||"").toLowerCase()==="inbound"?t.to||"":t.from||""},P0=async()=>{let e=window.location.pathname,t=e.match(/\/contacts\/detail\/([A-Za-z0-9]{15,})/);if(t){let r=J();if(!r)return null;let a=await it(`${Gt}/conversations/search?locationId=${encodeURIComponent(r)}&contactId=${encodeURIComponent(t[1])}`);if(!a||!a.ok)return ft("getConversationId: search miss",a?a.status:"null"),null;try{return(await a.json())?.conversations?.[0]?.id||null}catch{return null}}let o=e.split("/").filter(Boolean).pop()||"";return/^[A-Za-z0-9]{15,}$/.test(o)?o:null},B0=async()=>{let e=await P0();if(!e)return null;let t=await it(`${Gt}/conversations/${e}/messages?limit=20`);if(!t||!t.ok)return ft("getThreadNumber: fetch miss",t?t.status:"null"),null;let o;try{o=await t.json()}catch{return null}let r=o?.messages?.messages||[];for(let a of r){if(a.type!==2&&a.messageType!=="TYPE_SMS")continue;let s=O0(a);if(Ye(s).length===10)return s}return null},Ho=()=>document.getElementById(zb)?.remove(),jb=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector("#conv-composer-textarea-input, textarea[placeholder]"))return t;t=t.parentElement}return null},H0=e=>e.replace(/[&<>"]/g,t=>t==="&"?"&amp;":t==="<"?"&lt;":t===">"?"&gt;":"&quot;"),Ub=(e,t,o)=>{Ho();let r=document.getElementById(Bo);if(!r)return;let a=jb(r);if(!a||!a.parentElement)return;let s=document.createElement("div");s.id=zb,s.style.cssText="display:flex;align-items:flex-start;gap:9px;padding:10px 12px;margin:0 0 6px;background:rgba(232,163,60,0.14);border-left:3px solid var(--reos-amber,#E8A33C);border-radius:0;font-size:12.5px;line-height:1.5;color:var(--reos-bone,#EDEEF0);font-family:inherit;";let i=t?` (${H0(t)})`:"";s.innerHTML=`<span style="color:var(--reos-amber,#E8A33C)!important;font-size:16px;line-height:1;margin-top:1px;flex-shrink:0;" aria-hidden="true">&#9888;</span><div>This thread is on <span style="color:var(--reos-amber,#E8A33C)!important;font-weight:500;">${Db(e)}</span>${i}. You're set to reply from ${Db(o)}. <span style="color:var(--reos-amber,#E8A33C)!important;">Switch the From before sending.</span></div>`,a.parentElement.insertBefore(s,a)},D0=e=>{jr?.disconnect();let t=document.getElementById(Bo);if(!t)return;let o=jb(t)||t,r=Ye(Hl(t));jr=new MutationObserver(()=>{let a=Hl(document.getElementById(Bo)),s=Ye(a);!s||s===r||(r=s,s===Ye(e)?Ho():Ub(e,"",a))}),jr.observe(o,{childList:!0,subtree:!0,characterData:!0})},Rb=()=>{let e=document.getElementById(qb);if(!e)return;let t=Array.from(e.children).filter(l=>l.id!=="hr-dropdown-option-__search__"),o=l=>{let d=(l.textContent||"").match(/\+?1?\d{10}/);return d?d[0]:""},r=null,a="";if(Ur&&(r=t.find(l=>Ye(o(l))===Ye(Ur))||null,a="thread line"),r||(r=t.find(l=>/Last Used/i.test(l.textContent||""))||null,a="last used"),ft("decorateMenu: cache=",Ur,"target=",r?a:"NONE"),!r)return;let s=document.getElementById(Pb);s&&s!==r&&s.removeAttribute("id"),r.id=Pb;let i=l=>{l.style.setProperty("color","var(--reos-emerald,#0FB57E)","important"),l.style.setProperty("-webkit-text-fill-color","var(--reos-emerald,#0FB57E)","important")};i(r),r.querySelectorAll("*").forEach(l=>{i(l),l.style.setProperty("background-color","transparent","important")})},R0=()=>{if(!Fb.has(J()||""))return;Ba?.disconnect();let e=0,t=()=>{let o=document.getElementById(qb);if(o){Rb(),Ba=new MutationObserver(()=>Rb()),Ba.observe(o,{childList:!0,subtree:!0});return}++e<20&&window.setTimeout(t,50)};t()},N0=e=>{let t=e.target;t&&t.closest&&t.closest("#"+Bo)&&(ft("From trigger clicked -> waiting for menu"),R0())},F0=async()=>{if(!Bl){Bl=!0;try{let e=document.getElementById(Bo);if(!e)return;let t=Hl(e),o=await B0();if(Ur=o||"",ft("check: from=",t,"thread=",o),!o){Ho();return}Ye(t)&&Ye(t)!==Ye(o)?(ft("MISMATCH -> banner"),Ub(o,"",t)):(ft("match -> no banner"),Ho()),D0(o)}finally{Bl=!1}}},Nb=()=>{if(!Fb.has(J()||""))return;let e=window.location.pathname;if(!e.includes("/conversations")&&!e.includes("/contacts/detail/")){Pl="",Ur="",jr?.disconnect(),Ba?.disconnect(),Ho();return}let t=!!document.getElementById(Bo),o=e.split("/").filter(Boolean).pop()||"",r=(t?"T":"F")+"|"+o;if(r!==Pl){if(Pl=r,!t){jr?.disconnect(),Ho();return}ft("composer expanded on",o),F0()}},Wb=()=>{Hb===void 0&&(Hb=window.setInterval(Nb,500)),Bb||(document.addEventListener("click",N0,!0),Bb=!0),Nb()};var z0="#1A1F28",q0="#EDEEF0",Dl="#9098A3",j0=e=>{let t=(e||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null},U0=e=>.2126*e.r+.7152*e.g+.0722*e.b,W0=e=>{let t=e.r/255,o=e.g/255,r=e.b/255,a=Math.max(t,o,r),s=Math.min(t,o,r),i=(a+s)/2,l=a-s,d=0,c=0;return l!==0&&(c=l/(1-Math.abs(2*i-1)),a===t?d=(o-r)/l%6:a===o?d=(r-t)/l+2:d=(t-o)/l+4,d=d*60,d<0&&(d+=360)),`hsl(${Math.round(d)}, ${Math.round(Math.max(.62,c)*100)}%, 60%)`},Gb=(e,t,o)=>{e.querySelectorAll(t).forEach(r=>{r.style.setProperty("color",o,"important"),r.style.setProperty("-webkit-text-fill-color",o,"important")})},G0=e=>{let t=j0(getComputedStyle(e).backgroundColor);if(!t||U0(t)<120)return;let o=W0(t);e.style.setProperty("background-color",z0,"important"),e.style.setProperty("box-shadow",`inset 3px 0 0 0 ${o}`,"important"),Gb(e,".note-content, .note-content *, [class*='text-gray-9'], [class*='text-gray-7']",q0),Gb(e,"#note-date-added-text, [class*='475467']",Dl)},K0=e=>{e.querySelectorAll("[class*='hr-tag__count']").forEach(t=>{t.style.setProperty("background-color","transparent","important")}),e.querySelectorAll(".hr-tag, .hr-tag *").forEach(t=>{t.style.setProperty("color",Dl,"important"),t.style.setProperty("-webkit-text-fill-color",Dl,"important")}),e.querySelectorAll("button.hr-button, .hr-button__border, .hr-button__state-border").forEach(t=>{t.style.setProperty("border","none","important"),t.style.setProperty("box-shadow","none","important")})},Kb=()=>{let e=document.querySelectorAll(".note-card-accent");for(let t=0;t<e.length;t++)G0(e[t]),K0(e[t])},Vb,Yb=()=>{Vb===void 0&&(Vb=window.setInterval(Kb,700)),Kb()};var V0='input:not([autocomplete]):not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="range"]):not([type="color"]),textarea:not([autocomplete])',Jb=()=>{document.querySelectorAll(V0).forEach(e=>{e.setAttribute("autocomplete","off")})},Qb,Zb=()=>{Qb===void 0&&(Qb=window.setInterval(Jb,1e3)),Jb()};console.log("[ws-crm-customizer] bundle-loaded");var I=(e,t)=>{try{m.debug(`[main] calling ${e}`),t(),m.debug(`[main] ${e} OK`)}catch(o){m.error(`[main:FAIL] ${e} threw:`,o)}},Xb=()=>{m.info(`Loaded v${ln} (built ${dn})`),Na()?(m.info(`[main] excluded location ${J()} \u2014 theme only, skipping feature mounts`),I("mountThemeStylesheet",qr),I("mountDialerThemeFix",ua)):(I("mountVersionBadge (initial)",Pa),I("mountDemoMode (initial)",Xa),I("mountFavicon",dc),I("mountThemeStylesheet",qr),I("mountHideLaunchpad",ni),I("mountHideNavItems",ii),I("mountRelabelNav",li),I("mountHideTopmenuTabs",ci),I("mountContractsSection",di)),I("installOppIdCapture",rd),I("installContactsSearchCapture",dd),I("initPageRouter",Xl),m.info("[main] registering onPageChange subscriber"),Te(t=>{if(m.debug(`[main] onPageChange callback fired for page=${t}`),Na()){m.info(`[main] page change into excluded location ${J()} \u2014 theme only, skipping feature mounts`),I("mountThemeStylesheet",qr),I("runThemeFastPass",Ol),I("mountDialerThemeFix",ua),I("unmountContactMapLinks",Hc),I("unmountDemoMode",Za);return}I("mountThemeStylesheet",qr),I("runThemeFastPass",Ol),I("mountVersionBadge",Pa),I("mountDemoMode",Xa),I("mountHideLaunchpad",ni),I("mountHideNavItems",ii),I("mountRelabelNav",li),I("mountHideTopmenuTabs",ci),I("mountContractsSection",di),I("mountAnalyticsDashboard",kd),I("mountClaimReleaseToggle",Vd),I("mountContactActionsBar",ic),I("mountActiveFollowUpButton",yd),I("mountMtOfferMadeButton",pc),I("mountNotInterestedButton",mc),I("mountScheduleWalkthroughButton",bc),I("mountResendDealLinkButton",hc),I("mountAddReferralBuyer",fc),I("mountChangePrimaryContactButton",Id),I("mountReducePriceButton",wc),I("mountEditLandingPageButton",kc),I("mountPublishButton",Cc),I("mountContactMapLinks",Bc),I("mountSendToClosingOfficeButton",Jc),I("mountOppActionBar",_p),I("mountClosingAgentPickerButton",Sm),I("mountPrepareContractButton",Jm),I("mountComputeOfferButton",lb),I("mountManageTeam",Om),I("mountBuyBoxWidget",Ld),I("mountSellerContactFlag",Ud),I("mountPropertiesWidget",qd),I("mountSupportNavItem",Tp),I("mountPhoneAssignmentsWidget",Ip),I("mountBulkPowerDialer",am),I("mountBulkPowerDialerContacts",mm),I("mountCallingAsChip",_m),I("mountDialerThemeFix",ua),I("mountReplyFromWarning",Wb),I("mountNoteCanon",Yb),I("mountSuppressAutofill",Zb)}),m.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xb):Xb();})();
//# sourceMappingURL=customizer.js.map
