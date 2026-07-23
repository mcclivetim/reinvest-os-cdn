/* Wholesaling CRM Customizer v0.84.0 — built 2026-07-23T00:47:35.459Z */
"use strict";var WholesalingCRMCustomizer=(()=>{var Kr="[wholesaling-crm-customizer]",lu="__WS_CRM_DEBUG",du=()=>!!window[lu],m={info(...e){console.log(Kr,...e)},warn(...e){console.warn(Kr,...e)},error(...e){console.error(Kr,...e)},debug(...e){du()&&console.log(Kr,"[debug]",...e)}};var cu=/\/v2\/location\/([A-Za-z0-9]+)/,pu=new Set(["8ntUQzMflUkR0YvrRgVk"]),J=()=>{let e=window.location.pathname.match(cu);return e?e[1]:null},za=()=>{let e=J();return e!==null&&pu.has(e)};var n={obsidian:"#0A0D12",graphite:"#12161D",slate:"#1A1F28",steel:"#252C36",bone:"#EDEEF0",ash:"#9098A3",coolGray:"#5A6470",emerald:"#0FB57E",emeraldBright:"#14C98B",blue:"#4B8BF5",amber:"#E8A33C",crimson:"#D43F4A",emeraldGlow:"rgba(15, 181, 126, 0.12)",emeraldBorder:"rgba(15, 181, 126, 0.3)",blueGlow:"rgba(75, 139, 245, 0.12)",amberGlow:"rgba(232, 163, 60, 0.12)",crimsonGlow:"rgba(212, 63, 74, 0.12)"};var v={sm:"4px",md:"6px",lg:"10px",pill:"999px"},h={sans:"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"},qa={purple:"#8B5CF6",green:n.emerald,orange:n.amber,red:n.crimson},jl=e=>{let t=e==="emerald"?n.emeraldGlow:e==="amber"?n.amberGlow:n.slate,o=e==="emerald"?n.emeraldBorder:e==="amber"?"rgba(232, 163, 60, 0.3)":n.steel,r=e==="emerald"?n.emerald:e==="amber"?n.amber:n.bone;return`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: ${t};
    color: ${r};
    border: 1px solid ${o};
    border-radius: ${v.pill};
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
  `},pe=`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: ${n.emerald};
  color: ${n.obsidian};
  border: none;
  border-radius: ${v.sm};
  font-family: ${h.sans};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
`,z=`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: transparent;
  color: ${n.bone};
  border: 1px solid ${n.steel};
  border-radius: ${v.sm};
  font-family: ${h.sans};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
`;var mu="rbWy2hPHguDS6WJ3qODY",qe=`/v2/location/${mu}`,Ut={tcWelcomeOpp:"zEDjyIusaOcecimh0Yjn",dispoPhotosOpp:"Lq0hAXhCHm21IYYFXuKs",dispoMtOpp:"RjxuF4COlLJzUfCCosXW",assignedOpp:"FAfGcbjba72KHce3Dqgn",buyerContact:"d1dVlYA7qS4SE56mnFIM",sellerContact:"iccGZmYOkxH7NLzTsGdH"},Ka="ws-crm-demo-tour",Wa="ws-crm-demo-tour-launch",Ul="ws-crm-demo-tour-v2",X=e=>`<strong style="color:${n.emeraldBright};font-weight:650;">${e}</strong>`,bu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/demo/reset-now",Wl=e=>{try{let t=`ws-tour-reset-${e}`;if(sessionStorage.getItem(t))return;sessionStorage.setItem(t,"1")}catch{}try{fetch(bu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scope:e}),keepalive:!0})}catch{}},uu=()=>{try{for(let e of["seller","welcome","publish","handoff","fixtures"])sessionStorage.removeItem(`ws-tour-reset-${e}`)}catch{}},Ze=[{route:`${qe}/dashboard`,center:!0,title:"Welcome to the Test Drive",body:"This is Summit Home Offers, a fictional wholesale real estate shop running on the real REInvest OS. That $291K of closed revenue is live pipeline data, and everything you are about to click really works. Nothing here can text or call anyone real.",next:"Start the Tour"},{route:`${qe}/contacts/smart_list/All`,ready:{sel:"a, [role=tab], span",text:"Active Follow"},title:"Acquisitions Works From Contacts",body:"Reps live here, not bouncing around in 6 other screens. Every seller in the pipeline is a contact, and the smart lists across the top are the acquisition team's whole day, prioritized automatically."},{anchorText:{sel:"a, [role=tab], .tab, span",text:"Active Follow"},interact:!0,advance:{anchorClick:!0},title:"The Active Follow Up List",body:`This list builds itself. New leads, callbacks due, missed appointments, and expiring offers all land here, scored and sorted, so a rep is always on the phone with the leads that are most likely to convert. They always know exactly who to call next. ${X("Click it to see.")}`},{anchorText:{sel:"a, [role=tab], .tab, span",text:"Revival"},title:"The Revival List",body:"Cold leads and dead-for-now deals do not get forgotten. The Revival List quietly ranks and resurfaces old leads on a schedule, so the leads you already paid for keep turning into deals."},{route:`${qe}/contacts/smart_list/All`,ready:{sel:"#ws-crm-pd-contacts-btn"},anchor:"ws-crm-pd-contacts-btn",interact:!0,advance:{appears:"ws-crm-pd-feed-launch"},title:"The Power Dialer",body:`This is where the acquisition day actually happens. One click and the dialer serves your rep the most important lead in the building, over and over, until they press End. The calls are simulated in this demo account, but the machine is real. ${X("Click Power Dialer.")}`},{freeRoam:!0,advance:{appears:"ws-crm-pd-session"},title:"The Endless Call Feed",body:`No list building, no cherry-picking, no guessing. Brand new PPC leads come first, then today's callbacks, then Active Follow Up and Revival. Double-dial is already on, so an unanswered first try gets one immediate second call. ${X("Click Start Calling.")}`},{freeRoam:!0,advance:{textIn:{sel:"#ws-crm-pd-session",text:"\u{1F4C5}"}},title:"Watch It Work",body:`The feed is live: it pulled the top seller up and the screen follows every call. The first try rings out, the dialer fires one immediate redial, then moves on after a 5 second countdown. Your rep never decides who is next. ${X("Watch the first call, no clicks needed.")}`},{freeRoam:!0,advance:{textIn:{sel:"#ws-crm-pd-session",text:"Holding for"}},title:"Appointment Awareness",body:`See the calendar line that just appeared: this rep has a seller call booked in a few minutes, so the countdown is already amber. The dialer tracks it between calls and never lets a rep get trapped mid-conversation when an appointment is close. ${X("Keep watching.")}`},{freeRoam:!0,advance:{textIn:{sel:"#ws-crm-pd-session",text:"NEW PPC LEAD"}},title:"The Wind-Down Hold",body:`The appointment is minutes away now, so the feed just stopped serving leads and is holding for it. Protecting booked appointments beats squeezing in one more cold call. ${X("Stay put, something is about to interrupt.")}`},{freeRoam:!0,next:"Continue the Tour",title:"Speed To Lead",body:`A brand new PPC lead just hit the system and it outranks everything: the panel flips red and serves it with its live age, before the seller has even finished the form. Web leads get called in under a minute, not under an hour. ${X("Press End on the dialer panel, then click Continue the Tour.")}`},{anchor:"ws-calling-as-chip",title:"Every Team Calls From Its Own Numbers",body:"See the Calling As chip up top. Acquisitions and Dispo each dial from their own siloed pool of numbers. Each call comes from an area code local to the person the rep is dialing, increasing answer rates and ensuring returned calls always reach the right department. Reps who wear both hats flip teams by clicking the chip, and every call routes through the right pool automatically."},{route:`${qe}/contacts/detail/${Ut.sellerContact}`,ready:{sel:"#ws-crm-contact-actions-bar"},title:"Meet Your Seller",body:"The tour just opened a seller lead for you. This one screen is where an acquisitions rep lives for the whole conversation, and everything that follows happens without leaving it.",next:"Next"},{anchor:"ws-properties-nav-icon",interact:!0,advance:{appears:"ws-properties-panel"},title:"The Property Panel",body:`${X("Click the Property icon in the right side panel.")} The deal is anchored to the PROPERTY, not just the person, and this panel is where the two meet.`},{anchor:"ws-properties-panel",interact:!0,next:"Next",title:"Second Sellers, Tenants, More Properties",body:`${X("This panel is live, poke around.")} A rep can attach a second seller, a tenant, or any related contact in seconds, and if this owner has more than one property, add the next property right here. We designed this system to mirror reality: a seller can have more than one property, and a property can have more than one seller.`},{anchor:"ws-crm-claim-release-pill",interact:!0,advance:{anchorTextChange:!0},title:"Claim the Lead",body:`When it comes to PPC leads, speed wins deals. We developed a system that helps you get to PPC leads in 60 seconds or less. Leads sit in the pool until someone claims them. Fastest rep wins. ${X("Click Claim and watch it flip to you.")}`},{anchor:"ws-crm-call-status-dropdown",interact:!0,advance:{appears:"ws-crm-call-status-menu",appearsGone:!0},title:"Call Status Runs the Show",body:`${X("Click Call Status and look the outcomes over.")} Every result a rep can have on a call is just one tap away, and each one drives what happens next: follow-up lists get built, SMS drips start or stop, and the pipeline moves. We keep reps engaged on the phone instead of digging through fields. ${X("Pick one or close the menu to keep going.")}`},{anchor:"ws-crm-active-follow-up-button",title:"SMS Drips Ride the Status",body:"This is the SMS follow-up status. It tells reps at a glance if a contact is in a drip campaign. When it reads Add to Active Follow Up like this, it means a seller has engaged and the SMS drip has paused. The rep calls, but if they do not make contact, just one click adds them onto the Active Follow Up List so hot leads are not lost or forgotten. Nobody needs to create follow-up tasks manually."},{anchor:"ws-crm-compute-offer-button",interact:!0,advance:{appears:"ws-crm-offer-modal",appearsGone:!0},title:"The Offer Worksheet",body:`${X("Click the Offer Worksheet, then Pull Comps to create an offer.")} The rep just selects the rehab level, then the rest is automatic: the Max Allowable Offer and Initial Cash Offer come out, and the numbers all save to the Property itself. No more bouncing around or retyping the address in 3 different platforms to create an offer. Offers are calculated with data from InvestorBase, and our offer calculator learns from every deal you do, so your numbers are always getting more accurate. ${X("Close the worksheet when you are done.")}`},{anchorText:{sel:"#ws-crm-contact-actions-bar button, #ws-crm-contact-actions-bar span",text:"Offer Made"},interact:!0,advance:{appears:"ws-crm-offer-made-modal",appearsGone:!0},title:"Offer Made",body:`${X("Click Offer Made.")} Amount and expiration, two fields. ${X("Save it (or close the window) and watch the pipeline move behind it.")} The tour waits until you are done.`},{anchor:"ws-crm-prepare-contract-button",interact:!0,advance:{appears:"ws-crm-prepare-contract-menu",appearsGone:!0},title:"Prepare Contract",body:`Give the bar a beat to settle after your offer, then: seller says yes? ${X("Click Prepare Contract.")} It builds the Purchase Agreement from the deal's own data, both signers filled, and sends it by TEXT. The seller signs with a finger while the rep is still on the phone. ${X("Look the menu over, then close it to keep going.")}`},{title:"No Hunting. Ever.",body:"Notice what just happened: claim, status, offer, contract, all without leaving this one screen. Everything an acquisitions rep touches lives right here. That is the whole point of an operating system."},{route:`${qe}/opportunities/${Ut.tcWelcomeOpp}?tab=Opportunity+details`,ready:{sel:"button",text:"Start Welcome Call"},title:"Hand It to the TC",resetScope:"seller",body:"When a contract signs, Transaction Coordination takes over. The tour just opened a deal sitting in Welcome Call Needed, no hunting through pipelines. Everything the TC needs lives on this one screen.",next:"Next"},{anchorText:{sel:"button",text:"Start Welcome Call"},interact:!0,advance:{appears:"ws-crm-welcome-call-overlay",appearsGone:!0},title:"The Welcome Call Checklist",body:`${X("Click Start Welcome Call.")} The TC's first call is scripted right here, and look closely: photo ordering and lockbox ordering are IN the checklist. The TC can order both while on the phone with the seller, without opening another tool. No credit card entry, no back and forth with the seller, just a couple clicks and it is done. ${X("Close it when you are done looking.")}`},{route:`${qe}/opportunities/${Ut.dispoPhotosOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-edit-landing-button"},title:"Dispo Time",resetScope:"welcome",body:"Photos came back. This deal sits in Photos Received, and photos ordered through the system land straight on the property's own Deal Page.",next:"Next"},{anchor:"ws-crm-edit-landing-button",interact:!0,title:"Edit the Deal Page",body:`${X("Click Edit Deal Page if you want to see the page builder (it opens in a new tab, close that tab to come back to the tour), or press Continue.")} Every property gets its own Deal Page: photos, beds and baths, price, and much more. Plus, buyers can request a walkthrough directly from the Deal Page. If you order photos through the platform, they get delivered here automatically. No downloading just to re-upload, no sorting required, just one more way we save you time and energy.`,next:"Continue"},{title:"The Page IS the Marketing",body:"That page was built from the property record and the photos, no designer, no copy and paste. It becomes the destination for every buyer we blast. Which brings us to the ONE-Click that we are most proud of!"},{anchor:"ws-crm-publish-wrap",interact:!0,mock:"dispo-sms",advance:{anchorTextChange:!0},title:"One-Click Dispo",body:`${X("Click One-Click Dispo.")} That's right, just one click matches every buyer whose buy box fits this property, while simultaneously pulling a list of new prospective buyers from InvestorBase, and each matched buyer gets a text like the one below with their OWN unique, trackable link. Opens, clicks, and walkthrough requests go to the Dispo rep and tie back to each buyer automatically.`},{title:"One Click. 73 Buyers.",body:"That single click just did a full day of dispo work. 28 buyers matched from Summit's own buyer list, and InvestorBase surfaced 45 more real investors already buying in this market, 73 in total. Every one of them gets that text with their OWN unique, trackable link, and a Marketing Tracker deal spins up for each so nothing goes untracked. Which is exactly where we are headed next.",next:"Keep Going"},{route:`${qe}/opportunities/${Ut.dispoMtOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-schedule-walkthrough-button"},title:"Every Buyer Gets a Tracker",resetScope:"publish",body:"Each matched buyer gets their own Marketing Tracker deal, so Dispo can see exactly who opened, who is interested, and who went quiet. The tour just opened the tracker for one of the 5620 Bridgetowne Way buyers.",next:"Next"},{anchor:"ws-crm-schedule-walkthrough-button",title:"Schedule Walkthrough",body:"A buyer wants to see it? Buyers can request walkthroughs from the Deal Page, or reps can schedule the walkthrough from right here. The system knows if the property is vacant or occupied and adjusts on its own. Tenant occupied? The buyer and the tenant both get reminders. Owner occupied? The buyer and the owner both. Vacant with a lockbox? The buyer gets the reminders, and the code arrives automatically once a rep confirms the walkthrough."},{anchor:"ws-crm-mt-offer-made-button",title:"Mark Offer Made",body:"When this buyer makes an offer, it is logged here, against this buyer, on this property. Dispo sees every offer on the deal side by side."},{anchor:"ws-crm-resend-deal-link-wrap",title:"Resend Deal Link",body:"Buyer lost the text or asks you to send it to their email? Resend the Deal Page with their unique link in one click. Same link, same tracking, no need to manually create anything or even leave this screen."},{anchor:"ws-crm-not-interested-button",title:"Mark Not Interested",body:"A pass is information too. Mark it and this buyer stops getting touches on THIS deal while staying active for every future deal that fits their buy box."},{anchor:"ws-crm-add-referral-wrap",title:"Add Referral Buyer",body:"Buyer says a friend might want it or asks you to send it to their business partner? Add the referral mid-call: contact, tracker deal, and their own personalized Deal Page link, all from one place with just a couple of clicks."},{route:`${qe}/contacts/detail/${Ut.buyerContact}`,ready:{sel:"#ws-crm-contact-actions-bar button",text:"Buyer Call Status"},title:"The Buyer Side",body:"Dispo reps work buyers the same way acquisitions works sellers. The tour opened a buyer contact, and the action bar flipped to its buyer version.",next:"Next"},{anchor:"ws-crm-call-status-dropdown",interact:!0,advance:{appears:"ws-crm-call-status-menu",appearsGone:!0},title:"Buyer Call Status",body:`Same muscle memory, different outcomes: ${X("click Buyer Call Status and look over dispositions tailored to Dispo.")} Offer Made works exactly the same on this side too. ${X("Pick one or close the menu to keep going.")}`},{anchor:"ws-buybox-nav-icon",interact:!0,advance:{appears:"ws-buybox-panel"},title:"Buy Boxes Drive the Matching",body:`${X("Click the Buy Box icon in the right side panel.")} A buy box is simply the markets where this buyer purchases, and One-Click Dispo matches every deal against every buy box in the system. Unlike most CRMs, we never force a market level: a buyer can be as broad as a whole state and as granular as a single zip code, all in the same list. No need to write it down and update it later. The speed and simplicity of the Buy Box system lets a rep add or change criteria mid-call while staying engaged with the buyer on the phone.`},{anchor:"ws-buybox-panel",interact:!0,next:"Next",advance:{appears:"ws-buybox-modal",appearsGone:!0},title:"Add a Buy Box in Seconds",body:`This panel is live. ${X("Click Add Buy Box, pick a market, and save.")} County X and zip code Y can sit side by side, as broad or as granular as the buyer likes, which most CRMs flat out refuse to allow. Every future deal that fits gets this buyer texted automatically. ${X("Close the window when you are done.")}`},{anchor:"ws-crm-prepare-contract-button",title:"Assignments Are One Click Too",body:"Assignment Agreements work exactly like Purchase Contracts. One click builds it from the known deal info, fills the buyer, assignment price, and the property info, and sends it for signature via text and/or email. No DocuSign babysitting."},{route:`${qe}/opportunities/${Ut.assignedOpp}?tab=Opportunity+details`,ready:{sel:"#ws-crm-closing-agent-picker-button"},title:"The Assigned Deal",body:"Buyer signed. This deal sits in Assigned, ready to go to title. One field stands between the TC and a finished handoff.",next:"Next"},{anchor:"ws-crm-send-to-title-co-wrap",title:"The TC Checklist",body:"Everything the TC and Closing Agent need is already here: the signed Purchase Agreement, the Assignment Agreement, dates, deposits. The amber checks that remain are all the same missing piece, the closing agent, and the handoff button knows it."},{anchor:"ws-crm-closing-agent-picker-button",interact:!0,advance:{anchorTextChange:!0},title:"Link the Closing Agent",body:`${X("Click Link Closing Agent and type Dana. Pick Dana Whitfield with Pioneer Title & Escrow.")} That is the last missing piece.`},{anchor:"ws-crm-send-to-title-co-wrap",advance:{textIn:{sel:"#ws-crm-send-to-title-co-wrap",text:"One-Click Handoff"}},title:"Watch It Turn Green",body:"Dana is linked. The checklist re-checks itself and flips from amber to green. The moment it reads One-Click Handoff, this deal is one click away from having everything necessary automatically sent to the closing agent (title, escrow, or attorney) of your choice."},{anchor:"ws-crm-send-to-title-co-wrap",interact:!0,advance:{anchorClick:!0},title:"One-Click Handoff",body:`${X("Click it.")} Dana receives the Purchase Agreement, the Assignment Agreement, and every detail needed to open escrow, in ONE email, from ONE click. Nothing re-typed, nothing forgotten.`},{center:!0,title:"Built for the Work That Matters",resetScope:"handoff",body:"Acquisitions, Dispo, and TC, all on one Operating System. REInvest OS stops forcing your team to do mental gymnastics to complete tasks. No typing into needless fields, never type the same info twice, everything is exactly WHERE you need it, WHEN you need it! You and your team can stop focusing on busy work and stay focused on revenue building activities. Book a Demo to see how we can help you and your team make more money!",next:"Next"},{center:!0,title:"Thank You For Taking the Test Drive",body:`Thanks for spending the time. Want to see REInvest OS running on your own numbers, with a human walking you through it?
      <button data-tour="book" style="display:block;width:100%;margin-top:12px;background:${n.emerald};color:#04130d;border:0;border-radius:9px;padding:11px 15px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;">Book a 1 on 1 Demo</button>`,next:"Next"},{route:`${qe}/contacts/smart_list/All`,ready:{sel:"a, [role=tab], span",text:"Active Follow"},center:!0,title:"The Screen Is Yours",body:"This demo account is yours to explore now. Poke around, open anything, click everything. Nothing here can text or call a real person. And if you want the guided tour again, the Tour button at the bottom left restarts it anytime.",next:"Done"}],wt=()=>{try{let e=localStorage.getItem(Ul);if(e)return JSON.parse(e)}catch{}return{i:0,done:!1,started:!1}},on=e=>{try{localStorage.setItem(Ul,JSON.stringify(e))}catch{}},Qr=null,zo=null,Vr=!1,Fo=null,Ga=0,Zr=!1,Yr=!1,Xr=e=>{if(!e)return!1;let t=e,o=getComputedStyle(t);if(o.display==="none"||o.visibility==="hidden")return!1;let r=t.getBoundingClientRect();return r.width>1&&r.height>1},en=e=>e.advance?.appears?document.getElementById(e.advance.appears):e.advance?.appearsSel?document.querySelector(e.advance.appearsSel):null,ja=e=>{if(Zr)return;let t=en(e);if(!t||!Xr(t))return;let r=Array.from(t.querySelectorAll("button")).find(a=>/^(cancel|close|✕|×|x)$/i.test((a.textContent||"").trim()));if(r){r.click();return}t.remove()},Gl=(e,t)=>{let o=document.querySelectorAll(e);for(let r of Array.from(o)){let a=(r.textContent||"").trim();if(a&&a.length<80&&a.toLowerCase().includes(t.toLowerCase()))return r}return null},hu=e=>!e.ready||Date.now()-Ga>6e3?!0:e.ready.text?!!Gl(e.ready.sel,e.ready.text):!!document.querySelector(e.ready.sel),Ua=e=>{if(e.anchor)return document.getElementById(e.anchor);if(e.anchorSel){for(let t of e.anchorSel.split(",")){let o=document.querySelector(t.trim());if(o)return o}return null}return e.anchorText?Gl(e.anchorText.sel,e.anchorText.text):null},tn=()=>{Qr!==null&&(window.clearInterval(Qr),Qr=null),zo&&(document.removeEventListener("click",zo,!0),zo=null)},Va=()=>{document.getElementById(Ka)?.remove()},Jr=e=>{let t=wt();on({...t,done:e?!0:t.done,started:!1}),tn(),Va(),Wl("fixtures")},_u=`
  <img src="https://mcclivetim.github.io/reinvest-os-cdn/demo-photos/house-1.jpg" alt=""
    style="width:100%;display:block;margin-top:12px;border-radius:12px 12px 4px 4px;" />
  <div style="margin-top:4px;background:${n.obsidian};border:1px solid ${n.emeraldBorder};
      border-radius:4px 4px 12px 4px;padding:10px 12px;font-size:12px;line-height:1.5;color:#d6f5ea;">
    New Deal: 5620 Bridgetowne Way, Raleigh. 3/2.5, 1,292 sqft, asking $195,000.
    Photos + details: <span style="color:${n.emeraldBright};text-decoration:underline;">deals.reinvestos.com/e/x8Kq2</span>
  </div>
  <div style="margin-top:6px;font-size:10.5px;color:${n.coolGray};">
    Example text. Every buyer's link is unique and trackable.
  </div>`,Ya=()=>{let e=wt();if(e.done||!e.started)return;let t=Ze[e.i];if(!t){Jr(!0);return}Va(),tn(),Vr=!1,Fo=null,Ga=Date.now(),t.resetScope&&Wl(t.resetScope),Zr=Xr(en(t)),Yr=!1;let o=document.createElement("div");o.id=Ka,o.style.cssText=`position: fixed; inset: 0; z-index: 1000000; font-family: ${h.sans}; pointer-events: none;`;let r=()=>{let b=document.createElement("div");return b.style.cssText="position: fixed; background: rgba(10,13,18,.42); pointer-events: auto; transition: all .2s ease;",b},a=[r(),r(),r(),r()];a.forEach(b=>o.appendChild(b));let s=document.createElement("div");s.style.cssText="position: fixed; pointer-events: auto; background: transparent;",o.appendChild(s);let i=document.createElement("div");i.style.cssText=`position: fixed; border: 2px solid ${n.emeraldBright}; border-radius: 10px;
    box-shadow: 0 0 22px ${n.emeraldGlow}; pointer-events: none; transition: all .2s ease; opacity: 0;`,o.appendChild(i);let l=document.createElement("div");l.style.cssText=`
    position: fixed; width: 380px; max-width: calc(100vw - 24px);
    background: ${n.graphite}; border: 1px solid ${n.emeraldBorder};
    border-radius: 14px; padding: 18px 18px 14px;
    box-shadow: 0 24px 70px rgba(0,0,0,.55); pointer-events: auto; z-index: 1000002;`;let d=t.interact?`<div style="margin-top:8px;font-family:${h.mono};font-size:10px;letter-spacing:1px;color:${n.emeraldBright};text-transform:uppercase;">The highlighted spot is live. Click it.</div>`:"",c=!!t.interact||!!t.advance&&!t.next;l.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:1.6px;color:${n.emeraldBright};text-transform:uppercase;">
      Tour \xB7 Step ${e.i+1} of ${Ze.length}</div>
    <div style="color:${n.bone};font-size:16.5px;font-weight:650;margin-top:6px;letter-spacing:-.2px;">${t.title}</div>
    <div style="color:${n.ash};font-size:13px;line-height:1.55;margin-top:8px;">${t.body}</div>
    ${t.mock==="dispo-sms"?_u:""}
    ${d}
    <div style="margin-top:14px;display:flex;align-items:center;justify-content:space-between;">
      <span></span>
      <span style="display:flex;gap:8px;">
        ${e.i>0?`<button data-tour="back" style="background:transparent;border:1px solid rgba(255,255,255,.18);
          color:${n.ash};border-radius:9px;padding:8px 13px;font-size:12.5px;font-weight:600;cursor:pointer;
          font-family:${h.sans};">Back</button>`:""}
        <button data-tour="next" style="background:${c?"transparent":n.emerald};
          border:${c?`1px solid ${n.emeraldBorder}`:"0"};
          color:${c?n.emeraldBright:"#04120c"};border-radius:9px;
          padding:8px 15px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:${h.sans};">
          ${t.next??(e.i===Ze.length-1?"Finish":c?"Skip This One":"Next")}</button>
      </span>
    </div>
    <button data-tour="end" style="position:absolute;top:10px;right:12px;background:none;border:none;
      color:${n.coolGray};font-size:11px;cursor:pointer;font-family:${h.sans};">End Tour</button>`,o.appendChild(l),document.body.appendChild(o);let p=()=>{if(!hu(t)){if(a.forEach($=>Object.assign($.style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0",t.center)Object.assign(l.style,{left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:".92"});else{let $=l.offsetHeight||220;Object.assign(l.style,{left:"50%",top:`${window.innerHeight-$-24}px`,transform:"translateX(-50%)",opacity:".92"})}return}l.style.opacity="1";let b=Ua(t);if(!!t.freeRoam||!!t.interact&&Vr||!!t.interact&&!b&&Date.now()-Ga>6e3){a.forEach(f=>Object.assign(f.style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0";let $=l.offsetHeight||220;Object.assign(l.style,{left:"50%",top:`${window.innerHeight-$-24}px`,transform:"translateX(-50%)"});return}let y=b?.getBoundingClientRect()??null,g=window.innerWidth,x=window.innerHeight;if(y&&y.width>0){let f=Math.max(0,y.left-6),w=Math.max(0,y.top-6),S=Math.min(g,y.right+6),T=Math.min(x,y.bottom+6);Object.assign(a[0].style,{left:"0px",top:"0px",width:`${g}px`,height:`${w}px`}),Object.assign(a[1].style,{left:"0px",top:`${T}px`,width:`${g}px`,height:`${x-T}px`}),Object.assign(a[2].style,{left:"0px",top:`${w}px`,width:`${f}px`,height:`${T-w}px`}),Object.assign(a[3].style,{left:`${S}px`,top:`${w}px`,width:`${g-S}px`,height:`${T-w}px`}),Object.assign(i.style,{left:`${f}px`,top:`${w}px`,width:`${S-f}px`,height:`${T-w}px`,opacity:"1"}),t.interact?s.style.display="none":(s.style.display="block",Object.assign(s.style,{left:`${f}px`,top:`${w}px`,width:`${S-f}px`,height:`${T-w}px`}));let k=380,C=l.offsetHeight||240,E=14,L=D=>Math.min(Math.max(D,12),g-k-12),A=D=>Math.min(Math.max(D,12),x-C-12),M=[{left:y.left,top:y.bottom+E},{left:y.left,top:y.top-C-E},{left:y.left-k-E,top:y.top+(y.height-C)/2},{left:y.right+E,top:y.top+(y.height-C)/2}],O=[{l:f,t:w,rr:S,b:T}],P=en(t);if(Xr(P)){let D=P.getBoundingClientRect();O.push({l:D.left-6,t:D.top-6,rr:D.right+6,b:D.bottom+6})}let Z=!1;for(let D of M){let V=L(D.left),Y=A(D.top);if(!O.some(U=>V<U.rr&&V+k>U.l&&Y<U.b&&Y+C>U.t)){Object.assign(l.style,{left:`${V}px`,top:`${Y}px`,transform:"none"}),Z=!0;break}}Z||Object.assign(l.style,{left:"50%",top:`${x-C-24}px`,transform:"translateX(-50%)"}),Fo===null&&(Fo=(b?.textContent||"").trim())}else if(Object.assign(a[0].style,{left:"0px",top:"0px",width:`${g}px`,height:`${x}px`}),[1,2,3].forEach($=>Object.assign(a[$].style,{width:"0px",height:"0px"})),s.style.display="none",i.style.opacity="0",t.center)Object.assign(l.style,{left:"50%",top:"50%",transform:"translate(-50%, -50%)"});else{let $=l.offsetHeight||240;Object.assign(l.style,{left:"50%",top:`${x-$-24}px`,transform:"translateX(-50%)"})}};p(),zo=b=>{let _=Ua(t);_&&_.contains(b.target)&&(Vr=!0)},document.addEventListener("click",zo,!0);let u=(b,_=!1)=>{on({...wt(),i:b});let y=Ze[b]?.route;if(!y&&_){for(let g=b;g>=0;g--)if(Ze[g].route){y=Ze[g].route;break}}if(y&&!window.location.pathname.startsWith(y.split("?")[0])){window.location.href=y;return}Ya()};l.querySelector('[data-tour="next"]')?.addEventListener("click",()=>{ja(t);let b=wt();if(b.i>=Ze.length-1){Jr(!0);return}u(b.i+1)}),l.querySelector('[data-tour="back"]')?.addEventListener("click",()=>{ja(t);let b=wt();b.i>0&&u(b.i-1,!0)}),l.querySelector('[data-tour="book"]')?.addEventListener("click",()=>{window.open("https://api.leadconnectorhq.com/widget/booking/nNpqNLm5XUckJCj68BPc","_blank","noopener")}),l.querySelector('[data-tour="end"]')?.addEventListener("click",()=>{ja(t),Jr(!0)}),Qr=window.setInterval(()=>{p();let b=t.advance;if(!b)return;let _=!1;if(b.urlIncludes&&window.location.href.includes(b.urlIncludes)&&(_=!0),!_&&(b.appears||b.appearsSel)){let y=Xr(en(t));b.appearsGone?!Yr&&!Zr&&y?Yr=!0:Yr&&!y&&(_=!0):!Zr&&y&&(_=!0)}if(!_&&b.textIn){let y=document.querySelector(b.textIn.sel);y&&(y.textContent||"").includes(b.textIn.text)&&(_=!0)}if(!_&&b.anchorClick&&Vr&&(_=!0),!_&&b.anchorTextChange&&Fo!==null){let g=(Ua(t)?.textContent||"").trim();g&&g!==Fo&&(_=!0)}if(_){t.title==="Claim the Lead"&&window.setTimeout(()=>{try{document.querySelectorAll("span, div").forEach(g=>{g.children.length===0&&(g.closest("#ws-calling-as-chip")||(g.textContent||"").trim()==="ACQ Team"&&(g.textContent="You"))})}catch{}},700);let y=wt();if(y.i>=Ze.length-1){Jr(!0);return}tn(),window.setTimeout(()=>u(y.i+1),650)}},450)},yu=()=>{if(!document.body||document.getElementById(Wa))return;let e=document.createElement("button");e.id=Wa,e.style.cssText=`
    position: fixed; bottom: 12px; left: 76px; z-index: 999999;
    padding: 6px 12px; border-radius: 999px; border: 1px solid ${n.emeraldBorder};
    background: ${n.slate}; color: ${n.emeraldBright};
    font-family: ${h.sans}; font-size: 11px; font-weight: 700;
    letter-spacing: .6px; line-height: 1; cursor: pointer;`,e.textContent="Tour",e.title="Restart the guided tour",e.addEventListener("click",()=>{uu(),on({i:0,done:!1,started:!0});let t=Ze[0];if(t.route&&!window.location.pathname.startsWith(t.route.split("?")[0])){window.location.href=t.route;return}Ya()}),document.body.appendChild(e)},Kl=()=>{yu();let e=wt();e.done||(e.started||on({...e,started:!0}),document.getElementById(Ka)||Ya())},Vl=()=>{tn(),Va(),document.getElementById(Wa)?.remove()};var es="rbWy2hPHguDS6WJ3qODY",Jl="05E79Mn51i8pIlynjZ8R",fe=()=>J()===es,Ja="ws-crm-demo-badge",Qa="ws-crm-demo-conv-banner",an="ws-crm-demo-call-modal",Ql="ws-crm-demo-call-leg",Yl="ws-crm-demo-style",Wt=null,rn=null,nn=null,ts=()=>{if(document.getElementById(Yl))return;let e=document.createElement("style");e.id=Yl,e.textContent=`
    @keyframes wsDemoPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.12); opacity: .75; }
    }
    @keyframes wsDemoDots {
      0% { content: ""; } 25% { content: "."; }
      50% { content: ".."; } 75% { content: "..."; }
    }
    #${an} .ws-demo-ringing::after, #${Ql} .ws-demo-ringing::after {
      display: inline-block; width: 14px; text-align: left;
      content: "..."; animation: wsDemoDots 1.2s steps(1) infinite;
    }
  `,document.head.appendChild(e)},vu=()=>{if(!document.body||document.getElementById(Ja))return;let e=document.createElement("div");e.id=Ja,e.style.cssText=`
    position: fixed; bottom: 12px; left: 12px; z-index: 999999;
    padding: 6px 12px; border-radius: 999px;
    background: linear-gradient(135deg, ${n.emerald}, ${n.emeraldBright});
    color: #04120c; font-family: ${h.sans}; font-size: 11px;
    font-weight: 700; letter-spacing: .8px; line-height: 1;
    box-shadow: 0 4px 14px ${n.emeraldGlow}; user-select: none;
    pointer-events: auto; cursor: default;
  `,e.textContent="DEMO",e.title="Demo account \u2014 calls and messages are simulated. Data is fictional.",document.body.appendChild(e)},Zl=()=>{rn!==null&&(window.clearTimeout(rn),rn=null),nn!==null&&(window.clearInterval(nn),nn=null)},Za=()=>{Zl(),document.getElementById(an)?.remove()},gu=()=>{let o=document.querySelector("#record-details-lhs")?.querySelector("h2, h3")?.textContent?.trim();return o&&o.length>1&&o.length<60?o:null},fu=e=>{if(document.getElementById(an))return;ts();let t=gu(),o=document.createElement("div");o.id=an,o.style.cssText=`
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
  `,o.appendChild(r),r.addEventListener("click",l=>l.stopPropagation()),o.addEventListener("click",Za),document.body.appendChild(o);let a=r.querySelector(".ws-demo-status"),s=r.querySelector(".ws-demo-hangup"),i=0;rn=window.setTimeout(()=>{a&&(a.classList.remove("ws-demo-ringing"),a.textContent="Connected \xB7 0:00",nn=window.setInterval(()=>{i+=1;let l=Math.floor(i/60),d=String(i%60).padStart(2,"0");a.textContent=`Connected \xB7 ${l}:${d}`},1e3))},2400),s?.addEventListener("click",()=>{Zl(),a&&(a.textContent="Call Ended"),s&&(s.disabled=!0),window.setTimeout(Za,900)})},Xl="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/demo/dialer-showcase",ed=e=>{if(!fe()||!e)return null;Xa={};try{return fetch(Xl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:es,rep_user_id:e}),keepalive:!0}).catch(t=>m.debug("[demo-mode] showcase kick failed",t))}catch(t){return m.debug("[demo-mode] showcase kick threw",t),null}},Xa={},td=(e,t)=>{if(!fe()||!e)return;let o=t===0?"imminent":t===1?"hold_ppc":null;if(!(!o||Xa[o])){Xa[o]=!0;try{fetch(Xl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:es,rep_user_id:e,phase:o}),keepalive:!0}).catch(r=>m.debug(`[demo-mode] showcase phase ${o} failed`,r))}catch(r){m.debug("[demo-mode] showcase phase threw",r)}}},kt=null,od=()=>{kt&&kt()},xu=e=>{let t=String(e||"").match(/^\+?1?(\d{3})(\d{3})(\d{4})$/);return t?`(${t[1]}) ${t[2]}-${t[3]}`:String(e||"")},rd=e=>{od(),ts();let t=window.WS_CRM_SIM||{},o=e.leg>=2,r=o?t.ring2??4e3:t.ring1??6500,a=t.vm??4e3,s=document.getElementById("ws-calling-as-chip"),i=s?s.getBoundingClientRect():null,l=i&&i.bottom>0?Math.round(i.bottom+10):56,d=i?Math.max(12,Math.round(window.innerWidth-i.right)):24,c=document.createElement("div");c.id=Ql,c.style.cssText=`
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
    <div style="color:${n.ash};font-size:12px;margin-top:2px;">${xu(e.phone)}</div>
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
  `,document.body.appendChild(c);let p=c.querySelector(".ws-demo-status"),u=c.querySelector(".ws-demo-hangup");return new Promise(b=>{let _=[],y=0,g=!1,x=()=>{for(let f of _)window.clearTimeout(f),window.clearInterval(f);c.remove(),kt===x&&(kt=null),g||(g=!0,b({outcome:"",talkSecs:y,repEnded:!0}))};kt=x;let $=(f,w,S)=>{if(!g){g=!0;for(let T of _)window.clearTimeout(T),window.clearInterval(T);p&&(p.classList.remove("ws-demo-ringing"),p.textContent=f),u&&(u.disabled=!0),window.setTimeout(()=>{c.remove(),kt===x&&(kt=null),b(w)},S)}};_.push(window.setInterval(()=>{e.shouldEnd&&e.shouldEnd()&&$("Call Ended",{outcome:"",talkSecs:y,repEnded:!0},400)},200)),u?.addEventListener("click",()=>$("Call Ended",{outcome:"",talkSecs:y,repEnded:!0},500)),_.push(window.setTimeout(()=>{if(!g){if(!o){$("No Answer",{outcome:"no-answer",talkSecs:0,repEnded:!1},900);return}p&&(p.classList.remove("ws-demo-ringing"),p.textContent="Voicemail \xB7 0:00"),_.push(window.setInterval(()=>{y+=1,p&&(p.textContent=`Voicemail \xB7 0:${String(y).padStart(2,"0")}`)},1e3)),_.push(window.setTimeout(()=>{$("Call Ended",{outcome:"voicemail",talkSecs:Math.max(y,1),repEnded:!0},700)},a))}},r))})},wu=e=>{let t=(e.getAttribute("aria-label")??e.getAttribute("title")??e.getAttribute("data-tooltip")??"").trim().toLowerCase();return t.startsWith("call:")?{hit:!0,phone:t.slice(5).trim()||null}:{hit:["call","call contact","make a call","voice calling"].includes(t),phone:null}},ku=()=>{Wt||(Wt=e=>{if(!fe())return;let t=e.target;if(!t)return;let o=t.closest?.('a[href^="tel:"]'),r=o?null:t.closest?.("[aria-label], [title], [data-tooltip]")??null,a=r?wu(r):{hit:!1,phone:null};if(!o&&!a.hit)return;e.preventDefault(),e.stopPropagation();let s=o?decodeURIComponent(o.href.replace(/^tel:/,"")):a.phone;m.info(`[demo-mode] intercepted call click (${s??"button"}) \u2014 opening sim call`),fu(s)},document.addEventListener("click",Wt,!0))},Eu=()=>{let e=window.location.pathname.includes("/conversations"),t=document.getElementById(Qa);if(!e){t?.remove();return}if(t||!document.body)return;let o=document.createElement("div");o.id=Qa,o.style.cssText=`
    position: fixed; top: 8px; left: 50%; transform: translateX(-50%);
    z-index: 999998; padding: 7px 14px; border-radius: 999px;
    background: ${n.slate}; border: 1px solid ${n.emeraldBorder};
    color: ${n.ash}; font-family: ${h.sans}; font-size: 11.5px;
    font-weight: 600; box-shadow: 0 6px 18px rgba(0,0,0,.35); user-select: none;
  `,o.innerHTML=`<span style="color:${n.emeraldBright};font-weight:700;">Demo</span>
    &nbsp;Outbound texting is simulated in this demo account \u2014 the live product sends
    from your business number.`,document.body.appendChild(o)},os=()=>{Vl(),document.getElementById(Ja)?.remove(),document.getElementById(Qa)?.remove(),Za(),od(),Wt&&(document.removeEventListener("click",Wt,!0),Wt=null)},rs=()=>{if(!fe()){os();return}ts(),vu(),ku(),Eu(),Kl()};var nd=/(?:\/contacts\/detail\/|\/contacts\/|\/objects\/contact\/detail\/|\/objects\/contact\/)([A-Za-z0-9]{16,})(?:[/?#]|$)/,ns=/\/v2\/location\/([A-Za-z0-9]+)/,$u=e=>{let t=e.match(nd);if(!t)return null;let o=e.match(ns);return{contactId:t[1],locationId:o?o[1]:null,source:"url"}},Tu=()=>{let e=["#central-panel-conversations-mount a[href*='/contacts/detail/']","#record-details-lhs a[href*='/contacts/detail/']","#contact-conversation-panel a[href*='/contacts/detail/']",".central-panel a[href*='/contacts/detail/']"];for(let t of e){let o=document.querySelector(t);if(!o)continue;let r=o.getAttribute("href")||o.href||"",a=r.match(nd);if(!a)continue;let s=r.match(ns)||window.location.pathname.match(ns);return{contactId:a[1],locationId:s?s[1]:null,source:"dom"}}return null},W=()=>{let e=$u(window.location.pathname);return e||Tu()};var ad=()=>{let e=window.location.pathname;return e.includes("/contacts/detail/")?"contact-detail":e.includes("/contacts/smart-list")||e.includes("/contacts/")?"contact-list":e.includes("/opportunities/detail/")?"opportunity-detail":e.includes("/opportunities")?"opportunity-list":e.includes("/calendars/")?"calendar":e.includes("/dashboard")?"dashboard":e.includes("/conversations")?"conversations":e.includes("/settings")?"settings":"other"},ln="",as=null,Et="other",ss=new Set,sn=()=>{let e=W()?.contactId??null;if(!(!(window.location.pathname!==ln)&&!(e!==as))){ln=window.location.pathname,as=e,Et=ad(),m.debug("Page/context changed:",Et,ln,"contact:",e);for(let r of ss)try{r(Et)}catch(a){m.error("Subscriber threw:",a)}}},Se=e=>(ss.add(e),setTimeout(()=>e(Et),0),()=>{ss.delete(e)}),sd=()=>{Et=ad(),ln=window.location.pathname,as=W()?.contactId??null,m.debug("Router init, current page:",Et);let e=history.pushState.bind(history),t=history.replaceState.bind(history);history.pushState=function(o,r,a){e(o,r,a),sn()},history.replaceState=function(o,r,a){t(o,r,a),sn()},window.addEventListener("popstate",sn),setInterval(sn,1e3)},Gt=()=>Et;var Cu=/\/opportunities\/([A-Za-z0-9]{16,24})(?:[/?]|$)/,dd=null,id=!1,ld=e=>{let t=e.match(Cu);t&&(dd=t[1])},cd=()=>{if(!id){id=!0;try{let e=window.fetch.bind(window);window.fetch=(o,r)=>{try{let a=typeof o=="string"?o:o instanceof URL?o.href:o.url;a&&ld(a)}catch{}return e(o,r)};let t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(o,r,...a){try{ld(typeof r=="string"?r:r.href)}catch{}return t.call(this,o,r,...a)},m.debug("[opp-id-capture] installed")}catch(e){m.warn("[opp-id-capture] install failed",e)}}},Le=()=>dd;var pd=/\/contacts\/search/,ud=new Map,md=!1,bd=(e,t)=>{if(!(typeof t!="string"||!t))try{let o=JSON.parse(t);if(!o?.locationId||o.page===void 0)return;ud.set(o.locationId,{url:e,bodyRaw:t,capturedAt:Date.now()})}catch{}},hd=e=>ud.get(e)??null,_d=()=>{if(!md){md=!0;try{let e=XMLHttpRequest.prototype,t=e.open,o=e.send;e.open=function(...r){try{let a=String(r[1]??"");pd.test(a)&&(this.__wsSearchUrl=a)}catch{}return t.apply(this,r)},e.send=function(r){try{let a=this.__wsSearchUrl;a&&bd(a,r)}catch{}return o.call(this,r)}}catch(e){m.warn("[search-capture] XHR tap install failed",e)}try{let e=window.fetch;window.fetch=function(...t){try{let o=typeof t[0]=="string"?t[0]:t[0]instanceof URL?t[0].href:t[0]?.url||"";pd.test(o)&&bd(o,t[1]?.body)}catch{}return e.apply(this,t)}}catch(e){m.warn("[search-capture] fetch tap install failed",e)}}};var dn="0.84.0",cn="2026-07-23T00:47:35.460Z";var Su="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/type",pn=new Map,is=new Map,Lu=3e4,$t=4e3,Au=$t,je=async(e,t)=>{if(!e)return null;let o=pn.get(e);if(o){if(o.failedAt===void 0)return o.type;if(Date.now()-o.failedAt<Lu)return null}if(!t)return m.warn(`Cannot fetch Contact Type for ${e} \u2014 tenant_id missing from URL context`),null;let r=is.get(e);if(r)return r;let s=(async()=>{let i=new AbortController,l=setTimeout(()=>i.abort(),Au);try{let d=`${Su}?contact_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,c=await fetch(d,{method:"GET",headers:{Accept:"application/json"},signal:i.signal});if(!c.ok)return clearTimeout(l),m.warn(`Contact Type fetch returned ${c.status} for ${e}`),pn.set(e,{type:null,failedAt:Date.now()}),null;let p=await c.json();clearTimeout(l);let u=(p.contact_type||"").toLowerCase().trim()||null;return pn.set(e,{type:u}),m.debug(`Resolved Contact Type for ${e}: ${u??"(unset)"}`),u}catch(d){return clearTimeout(l),m.warn(`Contact Type fetch failed for ${e}:`,d),pn.set(e,{type:null,failedAt:Date.now()}),null}})();is.set(e,s);try{return await s}finally{is.delete(e)}},Ue=e=>e==="buyer"?"buyer":e==="seller"?"seller":e==="agent"||e==="closing_agent"||e==="closing_office"||e==="vendor"||e==="tenant"?"other":"seller";var N=(e,t={})=>{let{timeoutMs:o=8e3,pollMs:r=100,root:a=document}=t;return new Promise((s,i)=>{let l=a.querySelector(e);if(l){s(l);return}let d,c,p=()=>{d!==void 0&&window.clearTimeout(d),c!==void 0&&window.clearInterval(c)};c=window.setInterval(()=>{let u=a.querySelector(e);u&&(p(),s(u))},r),d=window.setTimeout(()=>{p(),m.warn(`waitForElement timed out for selector: ${e}`),i(new Error(`Selector not found within ${o}ms: ${e}`))},o)})};var Kt="https://services.leadconnectorhq.com",yd="__WS_CRM_CAPTURED_AUTH";var mn=()=>{try{let e=localStorage.getItem(yd);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>3e6?(localStorage.removeItem(yd),null):t:null}catch{return null}},Mu=()=>{let e=mn();if(!e)return null;let t={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(t["token-id"]=e.tokenId),t},lt=async(e,t={})=>{let o=Mu();if(!o)return null;try{return await fetch(e,{...t,headers:{...o,...t.headers??{}}})}catch{return null}};var Iu=/^[A-Za-z0-9]{15,30}$/,Tt=e=>typeof e=="string"&&Iu.test(e),bn=e=>{try{let t=e.split(".");if(t.length!==3)return null;let o=t[1].replace(/-/g,"+").replace(/_/g,"/"),r=o+"=".repeat((4-o.length%4)%4);return JSON.parse(atob(r))}catch{return null}},Ou=()=>{let e=window.WS_CRM_USER_ID;return Tt(e)?e:null},Pu=()=>{let e=window,t=[e.appState?.user?.id,e.user?.id,e.currentUser?.id,e.LCUser?.id,e.HL?.user?.id];for(let o of t)if(Tt(o))return o;return null},Bu=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e,o=bn(t);if(!o)return null;let r=o.uid;if(Tt(r))return r;let a=o.claims;if(a&&Tt(a.user_id))return a.user_id}catch{}return null},Hu=()=>{try{let e=mn();if(!e?.authorization)return null;let t=e.authorization.replace(/^Bearer\s+/i,""),o=bn(t);if(!o)return null;if(o.authClass==="User"&&Tt(o.authClassId))return o.authClassId;if(Tt(o.primaryAuthClassId))return o.primaryAuthClassId}catch{}return null},Du=()=>{try{let e=["user","tokenUser","currentUser","ghl_user"];for(let t of e){let o=localStorage.getItem(t);if(o)try{let r=JSON.parse(o),a=r.id??r._id;if(Tt(a))return a}catch{}}}catch{}return null},H=()=>Ou()||Bu()||Hu()||Pu()||Du()||null,Ru=()=>{try{let e=localStorage.getItem("refreshedToken");if(!e)return null;let t=e.startsWith('"')?e.slice(1,-1):e;return bn(t)}catch{return null}},Nu=()=>{try{let e=mn();return e?.authorization?bn(e.authorization.replace(/^Bearer\s+/i,"")):null}catch{return null}},vd=e=>e?e.authClass==="Company"?!0:(e.claims??e).type==="agency":!1,Fu="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/user/agency-check",gd="ws-crm-agency-verdict",zu=7*24*60*60*1e3,ds=()=>{try{let e=localStorage.getItem(gd);if(!e)return null;let t=JSON.parse(e);return!t||typeof t.isAgency!="boolean"||!t.uid||Date.now()-(t.ts||0)>zu?null:t}catch{return null}},ls=!1,qu=()=>{if(ls)return;let e=H();if(!e)return;let t=ds();t&&t.uid===e||(ls=!0,fetch(Fu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"omit"}).then(o=>o.ok?o.json():Promise.reject(new Error(`HTTP ${o.status}`))).then(o=>{if(!o?.ok||typeof o.isAgency!="boolean")return;let r=ds(),a=!r||r.uid!==e||r.isAgency!==o.isAgency;try{localStorage.setItem(gd,JSON.stringify({uid:e,isAgency:o.isAgency,ts:Date.now()}))}catch{}m.info(`[user-id] agency verdict for ${e}: ${o.isAgency}`),a&&window.dispatchEvent(new CustomEvent("ws-crm-agency-changed"))}).catch(o=>m.debug("[user-id] agency check failed (JWT signals still apply):",o)).finally(()=>{ls=!1}))},dt=()=>{let e=window.WS_CRM_FORCE_AGENCY;if(typeof e=="boolean")return e;if(vd(Ru())||vd(Nu()))return!0;qu();let t=ds();if(!t)return!1;let o=H();return o?t.uid===o&&t.isAgency:t.isAgency};var kd="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact",ju=`${kd}/active-follow-up-get`,Uu=`${kd}/active-follow-up-set`,Ct="ws-crm-active-follow-up-button",ps={amber:{label:"Add to Active Follow Up",bg:n.amberGlow,border:"rgba(232, 163, 60, 0.45)",color:n.amber,clickable:!0,dotColor:n.amber},blue:{label:"SMS Drip Active",bg:n.blueGlow,border:"rgba(75, 139, 245, 0.45)",color:n.blue,clickable:!1,dotColor:n.blue},gray:{label:"No Active SMS Drip",bg:n.slate,border:n.steel,color:n.coolGray,clickable:!1,dotColor:n.coolGray},loading:{label:"Active Follow Up\u2026",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.ash},error:{label:"Follow Up status unavailable",bg:n.slate,border:n.steel,color:n.ash,clickable:!1,dotColor:n.crimson}},Wu=()=>{let e=W();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},Gu=async e=>{let t=await fetch(ju,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId}),credentials:"omit"});if(!t.ok)throw new Error(`Get webhook returned ${t.status} ${t.statusText}`);return await t.json()},Ku=async(e,t)=>{let o=await fetch(Uu,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,triggered_by_user_id:t??null}),credentials:"omit"});if(!o.ok)throw new Error(`Set webhook returned ${o.status} ${o.statusText}`);return await o.json()},St=(e,t)=>{let o=ps[t];e.dataset.state=t,e.disabled=!o.clickable,e.style.cursor=o.clickable?"pointer":"default",e.style.background=o.bg,e.style.borderColor=o.border,e.style.color=o.color;let r=e.querySelector(".ws-afu-dot");r&&(r.style.background=o.dotColor);let a=e.querySelector(".ws-afu-label");a&&(a.textContent=o.label)},fd=e=>{let t=document.createElement("button");return t.type="button",t.id=Ct,t.dataset.contactId=e,t.style.cssText=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: ${n.slate};
    color: ${n.ash};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
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
  `,St(t,"loading"),t.addEventListener("click",async()=>{if(t.dataset.state!=="amber")return;let r=Wu();if(!(!r||r.contactId!==e)){St(t,"blue"),t.style.transform="scale(0.97)",setTimeout(()=>t.style.transform="",120);try{let a=await Ku(r,H()),s=a&&a.state&&a.state in ps?a.state:"blue";St(t,s),m.info(`Active Follow Up set for ${e} \u2192 ${s}`)}catch(a){m.error("Active Follow Up Set webhook failed",a),St(t,"error"),setTimeout(()=>void hn(t,r),4e3)}}}),t},Vu=3e4,hn=async(e,t)=>{e.dataset.lastRefreshAt=String(Date.now()),St(e,"loading");try{let o=await Gu(t),r=o&&o.state&&o.state in ps?o.state:"gray",a=document.getElementById(Ct);if(!a||a.dataset.contactId!==t.contactId)return;St(a,r)}catch(o){m.warn("Active Follow Up Get webhook failed",o),delete e.dataset.lastRefreshAt,St(e,"error")}},Yu=[".central-panel","[class*='central-panel']"],cs="ws-crm-contact-actions-bar",Ju=async()=>{for(let e of Yu)try{let t=await N(e,{timeoutMs:3e3});if(t)return t}catch{}try{return(await N("#contact-conversation-panel",{timeoutMs:3e3})).parentElement??null}catch{return null}},Qu=async(e,t)=>{let o=t.querySelector(`#${cs}`);if(!o)try{o=await N(`#${cs}`,{timeoutMs:$t+2e3,root:t})}catch{o=null}if(o){let s=t.querySelector("#ws-crm-afu-wrap");return s&&s.remove(),e.style.order="2",o.appendChild(e),{container:o,placement:"actions-bar"}}let r="ws-crm-afu-wrap",a=t.querySelector(`#${r}`);if(!a){a=document.createElement("div"),a.id=r,a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: ${n.graphite};
      border-bottom: 1px solid ${n.steel};
      flex-shrink: 0;
    `;let s=t.querySelector(`#${cs}`);s&&s.parentElement===t?t.insertBefore(a,s.nextSibling):t.insertBefore(a,t.firstChild)}return a.appendChild(e),{container:a,placement:"fallback"}},Zu=()=>{let e=document.querySelector("[data-testid='CENTRALPANEL_NAME']");if(!e)return null;let t=e;for(let o=0;o<8&&!(!t||!t.parentElement);o++){let r=t.parentElement,a=(r.className||"").toString();if(a.includes("justify-between")&&a.includes("border-b")){let s=r.children[1];return s instanceof HTMLElement?s:r}t=r}return null},Xu=(e,t)=>{e.style.marginRight="4px",t.insertBefore(e,t.firstChild)},eh=async e=>{if(e==="url"){let o=await Ju();return o?{kind:"contact-detail",target:o}:null}let t=Zu();return t?{kind:"conversations",target:t}:null},xd=async(e,t)=>{if(t.kind==="contact-detail"){let{placement:o}=await Qu(e,t.target);return o}return Xu(e,t.target),"conversations-header"},th=async()=>{let e=W();if(!e||!e.locationId){document.getElementById(Ct)?.remove(),document.getElementById("ws-crm-afu-wrap")?.remove();return}let t={contactId:e.contactId,tenantId:e.locationId},o=document.getElementById(Ct);if(o&&o.dataset.contactId===t.contactId){let d=Number(o.dataset.lastRefreshAt||0);Date.now()-d>=Vu&&hn(o,t);return}o&&o.remove();let r=await eh(e.source);if(!r){m.warn(`Active Follow Up: no mount target on ${e.source}-source page`);return}let a=W();if(!a||a.contactId!==t.contactId)return;let s=fd(t.contactId),i=await xd(s,r);m.debug(`Active Follow Up mounted (${r.kind}/${i}) for ${t.contactId}`),wd();let l=document.getElementById(Ct)??s;hn(l,t),un?.disconnect(),un=new MutationObserver(()=>{let d=document.getElementById(Ct);if(!(W()?.contactId===t.contactId)){un?.disconnect();return}if(!d){let p=fd(t.contactId);xd(p,r).then(()=>{wd(),hn(p,t)}),m.debug(`Active Follow Up re-mounted after wipe for ${t.contactId}`)}}),un.observe(r.target,{childList:!0})},un=null,qo=null,Ed=()=>{let e=W()?.contactId??null;if(qo&&qo.contactId===e)return;let t=th().finally(()=>{qo?.promise===t&&(qo=null)});qo={contactId:e,promise:t}},wd=()=>{let e=document.querySelectorAll(`#${Ct}`);if(!(e.length<=1)){m.debug(`Active Follow Up: found ${e.length} duplicate buttons, keeping first, removing ${e.length-1}`);for(let t=1;t<e.length;t++)e[t].remove()}};var oh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/analytics/compute",rh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/callstats/sweep-run",_n="ws-crm-analytics-overlay",nh=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"this_week",label:"This week"},{key:"last_week",label:"Last week"},{key:"this_month",label:"This month"},{key:"last_month",label:"Last month"},{key:"last_365",label:"Last 365 days"},{key:"all_time",label:"All time"},{key:"custom",label:"Custom"}],ah=[{key:"company",label:"Company"},{key:"acq",label:"Acquisitions"},{key:"dispo",label:"Disposition"},{key:"marketing",label:"Marketing"},{key:"tc",label:"Transactions"},{key:"velocity",label:"Velocity"}],j={open:!1,range:"this_month",customStart:"",customEnd:"",tab:"company",loading:!1,error:null,data:null,cache:new Map},le=e=>{let t=Number(e)||0;return"$"+Math.round(t).toLocaleString("en-US")},q=e=>(Number(e)||0).toLocaleString("en-US"),bs=e=>{let t=Number(e);return!Number.isFinite(t)||t<=0?"\u2014":new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Uo=e=>{let t=Math.round(Number(e)||0);if(t<60)return`${t}s`;let o=Math.floor(t/3600),r=Math.round(t%3600/60);return o>0?`${o}h ${r}m`:`${r}m`},sh=()=>`${j.range}|${j.customStart}|${j.customEnd}`,Lt=async(e=!1)=>{let t=sh();if(!e&&j.cache.has(t)){j.data=j.cache.get(t),j.error=null,At();return}let o=J();if(!o){j.error="Could not resolve the sub-account id from the URL.",At();return}j.loading=!0,j.error=null,At();try{let r={tenant_id:o,range:j.range,tz_offset_minutes:new Date().getTimezoneOffset()};j.range==="custom"&&(r.start=j.customStart,r.end=j.customEnd);let a=await fetch(oh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),s=await a.json();if(!s||s.ok===!1)throw new Error(s&&s.error||`HTTP ${a.status}`);j.data=s,j.cache.set(t,s)}catch(r){j.error=r instanceof Error?r.message:String(r)}finally{j.loading=!1,At()}},R=(e,t,o)=>{let r=document.createElement(e);return r.style.cssText=t,o!==void 0&&(r.innerHTML=o),r},me=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Vt=`background:${n.graphite};border:1px solid ${n.slate};border-radius:${v.lg};padding:16px 18px;min-width:0;`,vn=`font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin:0 0 12px;`,xe=(e,t,o)=>{let r=R("div",Vt+"flex:1;min-width:150px;");return r.appendChild(R("div",vn+"margin-bottom:8px;",me(e))),r.appendChild(R("div",`font-family:${h.sans};font-size:24px;font-weight:600;color:${n.bone};line-height:1.1;`,me(t))),o&&r.appendChild(R("div",`font-family:${h.sans};font-size:11px;color:${n.coolGray};margin-top:6px;`,me(o))),r},ce=(e,t)=>{let o=R("div",Vt);if(o.appendChild(R("div",vn,me(e))),!t.length)return o.appendChild(R("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),o;let r=Math.max(...t.map(a=>a.barVal),1);for(let a of t.slice(0,12)){let s=R("div","margin:0 0 10px;"),i=R("div","display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;");i.appendChild(R("span",`font-size:12px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,me(a.label)));let l=R("span",`font-size:12px;color:${n.bone};font-weight:600;white-space:nowrap;`,me(a.primary)+(a.secondary?` <span style="color:${n.coolGray};font-weight:400;">${me(a.secondary)}</span>`:""));i.appendChild(l),s.appendChild(i);let d=R("div",`height:6px;background:${n.slate};border-radius:3px;overflow:hidden;`);d.appendChild(R("div",`height:100%;width:${Math.max(2,Math.round(a.barVal/r*100))}%;background:${n.emerald};border-radius:3px;`)),s.appendChild(d),o.appendChild(s)}return t.length>12&&o.appendChild(R("div",`font-size:11px;color:${n.coolGray};`,`+${t.length-12} more`)),o},yn=(e,t,o)=>{let r=R("div",Vt+"overflow-x:auto;");if(r.appendChild(R("div",vn,me(e))),!o.length)return r.appendChild(R("div",`font-size:12px;color:${n.coolGray};`,"No data in this range")),r;let a=`text-align:left;padding:6px 10px;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,s=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`,i=`<table style="border-collapse:collapse;width:100%;min-width:480px;">
    <thead><tr>${t.map(l=>`<th style="${a}">${me(l)}</th>`).join("")}</tr></thead>
    <tbody>${o.map(l=>`<tr>${l.map(d=>`<td style="${s}">${me(d)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;return r.appendChild(R("div","",i)),r},de=(e,t)=>{let o=R("div",`display:grid;grid-template-columns:${e};gap:14px;margin-bottom:14px;`);for(let r of t)o.appendChild(r);return o},Wo=e=>{let t=R("div","display:flex;flex-wrap:wrap;gap:14px;margin-bottom:14px;");for(let o of e)t.appendChild(o);return t},Xe=e=>(e||[]).map(t=>({label:t.label,primary:q(t.count),barVal:t.count})),ih=e=>(e||[]).map(t=>({label:t.label,primary:le(t.sum),secondary:`\xB7 ${q(t.count)} deal${t.count===1?"":"s"}`,barVal:t.sum})),Cd=(e,t)=>{let o=e.calls||{};if(!o.available)return[R("div",`${Vt}border-left:3px solid ${n.amber};border-radius:0 ${v.lg} ${v.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Call metrics unavailable.</strong> ${me(o.note||"CallStats.Sweep runs every 30 minutes \u2014 check back shortly.")}`)];let r=t==="acq"?"Seller":"Buyer",a=o[t]||[],s=a.filter(c=>c.dials>0||c.connects>0||c.inbound>0).map(c=>({label:c.label,primary:`${q(c.dials)} dials`,secondary:`\xB7 ${q(c.connects)} connected \xB7 ${q(c.inbound)} inbound`,barVal:c.dials})),i=a.filter(c=>c.talk_seconds>0).map(c=>({label:c.label,primary:Uo(c.talk_seconds),secondary:c.talk_per_contract_seconds!=null?`\xB7 ${Uo(c.talk_per_contract_seconds)} per contract`:"",barVal:c.talk_seconds})),l=[ce(`${r} calls per rep (dials)`,s),ce(`${r} talk time per rep`,i)],d=(o.other||[]).filter(c=>c.dials>0||c.talk_seconds>0);return d.length&&l.push(ce("Unclassified calls per rep (contact is neither seller nor buyer)",d.map(c=>({label:c.label,primary:`${q(c.dials)} dials`,secondary:`\xB7 ${Uo(c.talk_seconds)} talk`,barVal:c.dials})))),l},lh=(e,t)=>{let o=e.company||{},r=o.left_to_close_this_month||{};t.appendChild(Wo([xe("Closed revenue \u2014 365d",le(o.closed_revenue_365),`${q(o.closed_count_365)} closings`),xe("Avg deal size \u2014 365d",le(o.avg_deal_size_365)),xe("Left to close this month",le(r.sum),`${q(r.count)} deal(s)`+(r.missing_est_close?` \xB7 ${q(r.missing_est_close)} missing est. close date`:"")),xe("New leads",q(o.total_leads),"in selected range")])),t.appendChild(Wo([xe("Contracts",`${q((o.contracts||{}).count)}`,le((o.contracts||{}).sum)+" projected"),xe("Assignments",`${q((o.assignments||{}).count)}`,le((o.assignments||{}).sum)+" assigned"),xe("Deals closed",`${q((o.closed||{}).count)}`,le((o.closed||{}).sum)+" closed")])),t.appendChild(de("1fr 1fr 1fr",[ce("New leads by source",Xe(o.new_leads_by_source)),ce("Contacts per closer (all time)",Xe(o.contacts_per_closer)),ce("Dispo deals per rep (all time)",Xe(o.dispo_deals_per_rep))]))},dh=(e,t)=>{let o=e.acq||{};t.appendChild(de("1fr 1fr",[ce("Offers made per rep",Xe(o.offers_per_rep)),ce("Contracts acquired per closer",(o.contracts_per_closer||[]).map(s=>({label:s.label,primary:q(s.count),secondary:`\xB7 ${le(s.sum)} projected`,barVal:s.count})))])),t.appendChild(de("1fr 1fr",[ce("Projected revenue per closer (open escrows)",ih(o.projected_per_closer)),ce("Closed revenue per closer",(o.closed_per_closer||[]).map(s=>({label:s.label,primary:le(s.sum),secondary:`\xB7 ${q(s.count)} closings \xB7 avg ${le(s.avg)}`,barVal:s.sum})))]));let r=Cd(e,"acq");t.appendChild(r.length>=2?de("1fr 1fr",r.slice(0,2)):de("1fr",r)),r.length>2&&t.appendChild(de("1fr",r.slice(2)));let a=e.dialer||{};if(a.available&&(a.per_rep||[]).length){let s=c=>c==null?"\u2014":`<span style="color:${c>=50?n.crimson:c>=30?n.amber:n.bone};font-weight:600;">${c}%</span>`,i=R("div",Vt+"overflow-x:auto;");i.appendChild(R("div",vn,"Endless dialer \u2014 activity & skips per rep"));let l=`text-align:left;padding:6px 10px;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};border-bottom:1px solid ${n.slate};white-space:nowrap;`,d=`padding:7px 10px;font-size:12px;color:${n.bone};border-bottom:1px solid ${n.slate};white-space:nowrap;`;i.appendChild(R("div","",`<table style="border-collapse:collapse;width:100%;min-width:420px;">
      <thead><tr>${["Rep","Served","Dialed","Skipped","Skip rate"].map(c=>`<th style="${l}">${me(c)}</th>`).join("")}</tr></thead>
      <tbody>${a.per_rep.map(c=>`<tr><td style="${d}">${me(c.label)}</td><td style="${d}">${q(c.dispensed)}</td><td style="${d}">${q(c.dialed)}</td><td style="${d}">${q(c.skipped)}</td><td style="${d}">${s(c.skip_rate_pct)}</td></tr>`).join("")}</tbody>
    </table>`)),t.appendChild(de("1fr",[i]))}},ch=(e,t)=>{let o=e.dispo||{};t.appendChild(de("1fr 1fr",[ce("Buyers qualified per dispo rep",Xe(o.buyers_qualified_per_rep)),ce("Assignments per dispo rep",(o.assignments_per_rep||[]).map(a=>({label:a.label,primary:q(a.count),secondary:`\xB7 ${le(a.sum)} assigned`,barVal:a.count})))])),t.appendChild(de("1fr",[ce("Closed revenue per dispo rep",(o.closed_per_dispo||[]).map(a=>({label:a.label,primary:le(a.sum),secondary:`\xB7 ${q(a.count)} closings \xB7 avg ${le(a.avg)}`,barVal:a.sum})))]));let r=Cd(e,"dispo");t.appendChild(r.length>=2?de("1fr 1fr",r.slice(0,2)):de("1fr",r)),r.length>2&&t.appendChild(de("1fr",r.slice(2)))},ph=(e,t)=>{let o=e.marketing||{},r=o.lead_quality||{};t.appendChild(Wo([xe("Open leads",q(r.open)),xe("Won (under contract+)",q(r.won)),xe("Lost / dead",q(r.lost))]));let a=(o.per_channel||[]).map(i=>[i.label,q(i.leads),q(i.offers),q(i.contracts),`${q(i.assigned_count)} / ${le(i.assigned_sum)}`,`${q(i.closed_count)} / ${le(i.closed_sum)}`,le(i.avg_deal)]);t.appendChild(de("1fr",[yn("Per marketing channel",["Channel","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],a)]));let s=(o.per_city||[]).slice(0,15).map(i=>[i.label,q(i.leads),q(i.offers),q(i.contracts),`${q(i.assigned_count)} / ${le(i.assigned_sum)}`,`${q(i.closed_count)} / ${le(i.closed_sum)}`,le(i.avg_deal)]);t.appendChild(de("1fr",[yn("Per city (top 15 by leads)",["City","Leads","Offers","Contracts","Assigned (# / $)","Closed (# / $)","Avg deal"],s)])),t.appendChild(de("1fr 1fr",[ce("Dead leads by channel",Xe(o.dead_by_channel)),ce("Dead leads by city",Xe(o.dead_by_city))]))},mh=(e,t)=>{let o=e.tc||{};t.appendChild(Wo([xe("Contracted",q(o.contracted),"in selected range"),xe("Closed",q(o.closed)),xe("Lost in escrow",q(o.lost_in_escrow)),xe("Fall-out rate",o.fallout_rate_pct==null?"\u2014":`${o.fallout_rate_pct}%`,"lost \xF7 (closed + lost)")])),t.appendChild(de("1fr 1fr",[ce("Deals per TC (contracted in range)",Xe(o.per_tc)),ce("Open escrows by stage",Xe(o.open_by_stage))]));let r=(o.board||[]).map(a=>[a.name,a.stage,a.owner,le(a.value),bs(a.est_close),a.acq_closer,a.dispo_rep]);t.appendChild(de("1fr",[yn("TC deal board (open escrows)",["Deal","Stage","TC","Value","Est. close","Closer","Dispo"],r)]))},bh=(e,t)=>{let o=e.velocity||{},r=o.offers_per_contract||{};t.appendChild(Wo([xe("Offers per contract",r.ratio==null?"\u2014":String(r.ratio),`${q(r.offers)} offers \xB7 ${q(r.contracts)} contracts`)]));let a=l=>(l||[]).map(d=>({label:d.label,primary:`${d.avg_days} days`,secondary:`\xB7 ${q(d.n)} deal${d.n===1?"":"s"}`,barVal:d.avg_days}));t.appendChild(de("1fr 1fr",[ce("Days lead \u2192 contract, by source",a(o.days_to_contract_by_source)),ce("Days contract \u2192 close, by source",a(o.days_contract_to_close_by_source))]));let s=(o.leads_per_contract_by_source||[]).map(l=>[l.label,q(l.leads),q(l.contracts),l.ratio==null?"\u2014":`${l.ratio} : 1`]);t.appendChild(de("1fr",[yn("Leads per contract, by source",["Source","Leads","Contracts","Leads : contract"],s)]));let i=o.talk_time||{};if(i.available){let l=(i.per_rep||[]).filter(d=>d.talk_seconds>0).map(d=>({label:d.label,primary:d.talk_per_contract_seconds!=null?`${Uo(d.talk_per_contract_seconds)} / contract`:"\u2014",secondary:`\xB7 ${Uo(d.talk_seconds)} total \xB7 ${q(d.contracts)} contract${d.contracts===1?"":"s"}`,barVal:d.talk_per_contract_seconds!=null?d.talk_per_contract_seconds:0}));t.appendChild(de("1fr",[ce("Talk time per contract per rep",l)]))}else t.appendChild(R("div",`${Vt}border-left:3px solid ${n.amber};border-radius:0 ${v.lg} ${v.lg} 0;font-size:12px;color:${n.ash};`,`<strong style="color:${n.bone};">Talk time per contract per rep \u2014 pending first sweep.</strong> ${me(i.note||"")}`))},jo=e=>`padding:5px 12px;border-radius:${v.pill};border:1px solid ${e?n.emeraldBorder:n.steel};background:${e?n.emeraldGlow:"transparent"};color:${e?n.emerald:n.ash};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;`,At=()=>{let e=document.getElementById(_n);if(!e)return;let t=e.querySelector("[data-ws-analytics-body]"),o=e.querySelector("[data-ws-analytics-controls]");if(!t||!o)return;o.innerHTML="";let r=R("div","display:flex;flex-wrap:wrap;gap:6px;align-items:center;");for(let b of nh){let _=R("button",jo(j.range===b.key),me(b.label));_.onclick=()=>{j.range=b.key,b.key!=="custom"?Lt():At()},r.appendChild(_)}if(j.range==="custom"){let b=`background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:12px;padding:4px 8px;color-scheme:dark;`,_=R("input",b);_.type="date",_.value=j.customStart;let y=R("input",b);y.type="date",y.value=j.customEnd;let g=R("button",jo(!0),"Apply");g.onclick=()=>{j.customStart=_.value,j.customEnd=y.value,j.customStart&&j.customEnd&&Lt()},r.appendChild(_),r.appendChild(y),r.appendChild(g)}let a=R("button",jo(!1)+"margin-left:auto;","\u21BB Refresh");a.onclick=()=>void Lt(!0),r.appendChild(a),o.appendChild(r);let s=R("div","display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;");for(let b of ah){let _=R("button",jo(j.tab===b.key),me(b.label));_.onclick=()=>{j.tab=b.key,At()},s.appendChild(_)}if(o.appendChild(s),t.innerHTML="",j.loading){t.appendChild(R("div",`padding:60px;text-align:center;color:${n.ash};font-family:${h.sans};font-size:13px;`,"Computing analytics\u2026"));return}if(j.error){let b=R("div",`padding:40px;text-align:center;color:${n.crimson};font-family:${h.sans};font-size:13px;`,`Couldn't load analytics: ${me(j.error)}`),_=R("button",jo(!0)+"margin:14px auto 0;display:inline-block;","Retry");_.onclick=()=>void Lt(!0);let y=R("div","text-align:center;");y.appendChild(b),y.appendChild(_),t.appendChild(y);return}let i=j.data;if(!i){Lt();return}let l=i.range||{},d=Number((i.calls||{}).last_swept)||0,c=d>0?` \xB7 calls as of ${new Date(d).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})} (syncing)`:"";t.appendChild(R("div",`font-family:${h.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.coolGray};margin:0 0 12px;`,`${me(l.label||"")} \xB7 ${bs(l.start)} \u2192 ${bs(l.end)} \xB7 ${q((i.meta||{}).opps)} opps \xB7 ${q((i.meta||{}).contacts)} contacts${c}`));let p=i.insights||[];if(p.length){let b=R("div","display:flex;flex-direction:column;gap:6px;margin:0 0 16px;");for(let _ of p.slice(0,6)){let y=_.level==="warn";b.appendChild(R("div",`padding:8px 12px;border-left:3px solid ${y?n.amber:n.blue};background:${y?n.amberGlow:n.blueGlow};border-radius:0 ${v.sm} ${v.sm} 0;font-family:${h.sans};font-size:12px;color:${n.bone};`,me(_.text)))}t.appendChild(b)}let u=R("div","");j.tab==="company"?lh(i,u):j.tab==="acq"?dh(i,u):j.tab==="dispo"?ch(i,u):j.tab==="marketing"?ph(i,u):j.tab==="tc"?mh(i,u):bh(i,u),t.appendChild(u)},Mt=null,uh=()=>{let e=J();if(e){try{fetch(rh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"sync",tenant_id:e})}).catch(()=>{})}catch{}Mt&&window.clearTimeout(Mt),Mt=window.setTimeout(()=>{Mt=null,j.open&&(j.cache.clear(),Lt(!0))},9e4)}},us=()=>{if(document.getElementById(_n))return;j.open=!0,uh();let e=R("div",`position:fixed;inset:0;z-index:100000;background:${n.obsidian};display:flex;flex-direction:column;font-family:${h.sans};`);e.id=_n;let t=R("div",`padding:18px 24px 14px;border-bottom:1px solid ${n.slate};flex-shrink:0;`),o=R("div","display:flex;align-items:center;gap:12px;margin-bottom:12px;");o.appendChild(R("div",`font-family:${h.mono};font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${n.bone};`,`Analytics <span style="color:${n.emerald};">\xB7</span> <span style="color:${n.ash};">REInvest OS</span>`));let r=R("button",`margin-left:auto;background:transparent;border:1px solid ${n.steel};border-radius:${v.sm};color:${n.ash};font-size:14px;line-height:1;padding:6px 10px;cursor:pointer;`,"\u2715");r.onclick=Ld,o.appendChild(r),t.appendChild(o),t.appendChild(R("div","","")).setAttribute("data-ws-analytics-controls","1"),e.appendChild(t);let a=R("div","flex:1;overflow-y:auto;padding:20px 24px 40px;");a.setAttribute("data-ws-analytics-body","1"),e.appendChild(a),document.body.appendChild(e),document.addEventListener("keydown",Sd),At(),j.data||Lt()},Sd=e=>{e.key==="Escape"&&Ld()},Ld=()=>{j.open=!1,Mt&&(window.clearTimeout(Mt),Mt=null),document.getElementById(_n)?.remove(),document.removeEventListener("keydown",Sd)},hh=["/kpis","ws-kpis","ws-analytics"],_h=/\/custom-menu-link\//,ms=!1,$d=()=>{if(ms||!_h.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return hh.some(i=>s.includes(i))});if(r){ms=!0,m.info(`[analytics] custom-menu-link route detected (src=${r.src}) \u2014 opening overlay`);try{history.back()}catch{}setTimeout(()=>{us(),ms=!1},50);return}e<10&&setTimeout(t,150)};t()},Td=!1,Ad=()=>{if(Td)return;Td=!0,Se(()=>setTimeout($d,50)),$d();let e=()=>{let t=window.location.hash.replace("#","");(t==="ws-analytics"||t==="ws-kpis")&&us()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_ANALYTICS=()=>us(),m.info("[analytics] mounted (menu-link route + hash + window trigger)")};var Od="ws-buybox-nav-icon",ys="ws-buybox-panel",Md="ws-buybox-modal",yh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buy-box/manage",vs="https://mcclivetim.github.io/reinvest-os-cdn/geo",gn=null,Go=null,Ko=null,_s=async()=>{if(gn)return gn;try{let e=await fetch(`${vs}/states.json`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return gn=await e.json(),gn}catch(e){return m.error("[buy-box] failed to fetch states.json",e),[]}},vh=async e=>{if(!Go)try{let t=await fetch(`${vs}/counties.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Go=await t.json()}catch(t){return m.error("[buy-box] failed to fetch counties.json",t),[]}return Go?.[e]??[]},gh=async e=>{if(!Ko)try{let t=await fetch(`${vs}/cities.json`);if(!t.ok)throw new Error(`HTTP ${t.status}`);Ko=await t.json()}catch(t){return m.error("[buy-box] failed to fetch cities.json",t),[]}return Ko?.[e]??[]},gs=async e=>await(await fetch(yh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),fh=(e,t)=>gs({tenant_id:e,action:"list",buyer_contact_id:t}),xh=(e,t,o,r)=>gs({tenant_id:e,action:"add",buyer_contact_id:t,geo_level:o,geo_value:r}),wh=(e,t)=>gs({tenant_id:e,action:"remove",entry_id:t}),ne=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),kh=(e,t)=>{let o=t.find(r=>r.code===e);return o?`${o.name} (${e})`:e},Eh='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',$h='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6m-9 4h12l-1 13a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7zM4 7h16M10 11v6M14 11v6" /></svg>',Th="nav.w-13, nav[class*='w-13']",Ch=".flex-1.h-full.relative.overflow-hidden.rounded-lg",Sh=async()=>{try{return await N(Th,{timeoutMs:2500})}catch{return null}},Lh=async()=>{try{return await N(Ch,{timeoutMs:2500})}catch{return null}},Ah=e=>e.querySelector("div[class*='bg-contacts-panel']")??null,Mh=(e,t)=>{let o=document.createElement("div");return o.id=ys,o.dataset.buyerContactId=t,o.style.cssText=`
    width: 100%; height: 100%;
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
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
        border-radius: ${v.sm}; padding: 7px 14px; cursor: pointer;
        font-family: ${h.sans}; font-size: 13px; font-weight: 600;
      ">+ Add Area</button>
    </div>
    <div id="ws-buybox-body" style="
      flex: 1; overflow-y: auto; padding: 14px 16px;
      font-size: 13px; color: ${n.bone};
    ">
      <div style="color: ${n.ash}; font-style: italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-buybox-add")?.addEventListener("click",()=>{Bh(e,t,()=>fs(e,t))}),o},fs=async(e,t)=>{let o=document.querySelector("#ws-buybox-body");if(o)try{let[r,a]=await Promise.all([fh(e,t),_s()]);if(!r.ok){o.innerHTML=`<div style="color: ${n.crimson};">${ne(r.error||"Failed to load buy-box entries")}</div>`;return}Ih(o,r.grouped||{state:[],county:[],city:[],zip:[]},a,e,t)}catch(r){o.innerHTML=`<div style="color: ${n.crimson};">Network error: ${ne(r.message)}</div>`}},Ih=(e,t,o,r,a)=>{if(t.state.length+t.county.length+t.city.length+t.zip.length===0){e.innerHTML=`
      <div style="text-align: center; padding: 32px 0; color: ${n.ash};">
        No buy-box areas set yet.<br>
        <span style="font-size: 12px;">Click "+ Add Area" to define where this buyer is shopping.</span>
      </div>
    `;return}let l=[{key:"state",label:"States"},{key:"county",label:"Counties"},{key:"city",label:"Cities"},{key:"zip",label:"Zip Codes"}].filter(d=>t[d.key].length>0).map(d=>{let c=t[d.key].map(p=>{let u=d.key==="state"?kh(p.geo_value,o):p.geo_value;return`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid ${n.steel};">
              <span>${ne(u)}</span>
              <button type="button" data-entry-id="${ne(p.id)}" data-entry-label="${ne(u)}" class="ws-buybox-remove" aria-label="Remove ${ne(u)}" style="
                background: transparent; border: none; cursor: pointer;
                color: ${n.ash}; padding: 4px;
                border-radius: ${v.sm};
                display: inline-flex; align-items: center; justify-content: center;
                transition: color 0.12s;
              " title="Remove">${$h}</button>
            </div>
          `}).join("");return`
        <div style="margin-bottom: 18px;">
          <div style="font-family: ${h.mono}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${n.ash}; margin-bottom: 6px;">${ne(d.label)} (${t[d.key].length})</div>
          ${c}
        </div>
      `}).join("");e.innerHTML=l,e.querySelectorAll(".ws-buybox-remove").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.color=n.crimson}),d.addEventListener("mouseleave",()=>{d.style.color=n.ash}),d.addEventListener("click",()=>{let c=d.dataset.entryId||"",p=d.dataset.entryLabel||"this area";confirm(`Remove "${p}" from this buyer's buy-box?`)&&(d.disabled=!0,wh(r,c).then(u=>{if(!u.ok){alert(`Failed to remove: ${u.error||"unknown error"}`),d.disabled=!1;return}fs(r,a)}).catch(u=>{alert(`Network error: ${u.message}`),d.disabled=!1}))})})},fn=!1,Pd=(e,t)=>{fn=t;let o=Ah(e.panelArea);console.log(`[buy-box] setActive(${t}) \u2014 nativePanel=${!!o} panel=${!!e.panel} iconBtn=${!!e.iconBtn}`),t?(e.iconBtn.className=Oh,e.iconBtn.dataset.active="true",o&&(e.nativePanelOriginalDisplay=o.style.display||"",o.style.display="none"),e.panel.style.display="flex",fs(e.tenantId,e.buyerContactId)):(e.iconBtn.className=Bd,delete e.iconBtn.dataset.active,e.panel.style.display="none",o&&(o.style.display=e.nativePanelOriginalDisplay||""))},Bd="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",Oh="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",Ph=e=>{let t=document.createElement("button");return t.id=Od,t.type="button",t.title="Buy-Box",t.setAttribute("aria-label","Buy-Box"),t.className=Bd,t.innerHTML=`<span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; line-height: 0; pointer-events: none;">${Eh.replace("<svg ",'<svg style="pointer-events: none;" ')}</span>`,t.addEventListener("click",o=>{o.stopPropagation();let r=e();if(!r){console.warn("[buy-box] icon clicked but currentState is null");return}let a=!fn;console.log(`[buy-box] icon clicked \u2192 turningOn=${a}`),Pd(r,a)}),t},Bh=(e,t,o)=>{let r=document.getElementById(Md);r&&r.remove();let a=document.createElement("div");a.id=Md,a.style.cssText=`
    position: fixed; inset: 0; z-index: 99999;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
  `;let s=document.createElement("div");s.style.cssText=`
    width: min(480px, 92vw);
    background: ${n.graphite};
    border: 1px solid ${n.steel};
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.appendChild(s),document.body.appendChild(a),a.addEventListener("click",k=>{k.target===a&&a.remove()});let i={step:1,granularity:null,stateCode:null,value:null},l=async()=>{if(i.step===1)s.innerHTML=d(),c();else if(i.step===2){s.innerHTML=p();let k=await _s();s.innerHTML=u(k),b(k)}else if(i.step===3)if(i.granularity==="zip")s.innerHTML=f(),w();else if(i.granularity==="state"){let k=await _s();s.innerHTML=y(k),g(k)}else i.granularity==="county"?(s.innerHTML=_(i.stateCode||""),await vh(i.stateCode||""),s.innerHTML=x("County"),$()):i.granularity==="city"&&(s.innerHTML=_(i.stateCode||""),await gh(i.stateCode||""),s.innerHTML=x("City"),$())},d=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 1 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">What kind of area?</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
      ${["state","county","city","zip"].map(k=>`
        <button type="button" data-granularity="${k}" class="ws-buybox-tile" style="
          background: ${n.steel}; color: ${n.bone};
          border: 1px solid ${n.steel}; border-radius: ${v.md};
          padding: 20px 16px; cursor: pointer; font-family: ${h.sans};
          font-size: 14px; font-weight: 500; text-align: center;
        ">${k.charAt(0).toUpperCase()+k.slice(1)}</button>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
    </div>
  `,c=()=>{s.querySelectorAll(".ws-buybox-tile").forEach(k=>{k.addEventListener("mouseenter",()=>{k.style.borderColor=n.emerald,k.style.background=n.emeraldGlow}),k.addEventListener("mouseleave",()=>{k.style.borderColor=n.steel,k.style.background=n.steel}),k.addEventListener("click",()=>{let C=k.dataset.granularity;i.granularity=C,i.step=C==="zip"?3:2,l()})}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove())},p=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Pick a state</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading states\u2026</div>
  `,u=k=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 2 of 3</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">Pick a state</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 14px;">Which state is this ${ne(i.granularity||"")} in?</div>
    <input id="ws-buybox-state-search" type="text" placeholder="Filter\u2026" autofocus style="
      width: 100%; box-sizing: border-box; padding: 8px 12px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${h.sans}; font-size: 13px; margin-bottom: 10px;
    ">
    <div id="ws-buybox-state-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};">
      ${k.map(C=>`
        <div data-state-code="${ne(C.code)}" class="ws-buybox-state-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${ne(C.name)} <span style="color: ${n.ash}; font-family: ${h.mono}; font-size: 11px;">(${ne(C.code)})</span>
        </div>
      `).join("")}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
      <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
    </div>
  `,b=k=>{let C=s.querySelector("#ws-buybox-state-search"),E=s.querySelectorAll(".ws-buybox-state-row");E.forEach(L=>{L.addEventListener("mouseenter",()=>{L.style.background=n.emeraldGlow}),L.addEventListener("mouseleave",()=>{L.style.background="transparent"}),L.addEventListener("click",()=>{i.stateCode=L.dataset.stateCode||"",i.step=3,l()})}),C?.addEventListener("input",()=>{let L=(C.value||"").toLowerCase().trim();k.forEach((A,M)=>{let O=E[M];if(!O)return;let P=!L||A.name.toLowerCase().includes(L)||A.code.toLowerCase()===L;O.style.display=P?"":"none"})}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>C?.focus(),0)},_=k=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3</div>
    <div style="color: ${n.ash}; padding: 20px 0; text-align: center;">Loading list for ${ne(k)}\u2026</div>
  `,y=k=>{let C=k.find(E=>E.code===i.stateCode);return`
      <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Confirm</div>
      <div style="font-size: 18px; font-weight: 500; margin-bottom: 16px;">Add entire state as an area?</div>
      <div style="background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder}; border-radius: ${v.md}; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 22px; font-weight: 500;">${ne(C?C.name:i.stateCode||"")}</div>
        <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">This buyer will match every property in ${C?ne(C.name):""} regardless of county / city / zip.</div>
      </div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
      <div style="display: flex; justify-content: space-between;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
        <div style="display: flex; gap: 8px;">
          <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
          <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add ${C?ne(C.name):"State"}</button>
        </div>
      </div>
    `},g=k=>{s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>T(i.stateCode||""))},x=k=>{let C=i.granularity==="county"?Go?.[i.stateCode||""]??[]:Ko?.[i.stateCode||""]??[];return`
      <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Pick a ${ne(k)}</div>
      <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">Type to filter ${C.length.toLocaleString()} ${ne(k).toLowerCase()}s in ${ne(i.stateCode||"")}.</div>
      <input id="ws-buybox-value-search" type="text" placeholder="Start typing\u2026" autofocus style="
        width: 100%; box-sizing: border-box; padding: 8px 12px;
        background: ${n.obsidian}; color: ${n.bone};
        border: 1px solid ${n.steel}; border-radius: ${v.sm};
        font-family: ${h.sans}; font-size: 13px; margin-bottom: 10px;
      ">
      <div id="ws-buybox-value-list" style="max-height: 280px; overflow-y: auto; border: 1px solid ${n.steel}; border-radius: ${v.sm};"></div>
      <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-top: 8px;"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 12px;">
        <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
      </div>
    `},$=()=>{let k=i.granularity==="county"?Go?.[i.stateCode||""]??[]:Ko?.[i.stateCode||""]??[],C=s.querySelector("#ws-buybox-value-search"),E=s.querySelector("#ws-buybox-value-list");if(!C||!E)return;let L=A=>{let M=A.toLowerCase().trim();if(!M){E.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">Start typing to filter.</div>`;return}let O=k.filter(P=>P.toLowerCase().includes(M)).slice(0,50);if(O.length===0){E.innerHTML=`<div style="padding: 12px; color: ${n.ash}; font-size: 12px;">No matches in ${ne(i.stateCode||"")}.</div>`;return}E.innerHTML=O.map(P=>`
        <div data-value="${ne(P)}" class="ws-buybox-value-row" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid ${n.steel};">
          ${ne(P)}
        </div>
      `).join(""),E.querySelectorAll(".ws-buybox-value-row").forEach(P=>{P.addEventListener("mouseenter",()=>{P.style.background=n.emeraldGlow}),P.addEventListener("mouseleave",()=>{P.style.background="transparent"}),P.addEventListener("click",()=>{i.value=P.dataset.value||"",T(i.value)})})};C.addEventListener("input",()=>L(C.value)),L(""),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=2,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),setTimeout(()=>C.focus(),0)},f=()=>`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Step 3 of 3 \u2014 Enter Zip</div>
    <div style="font-size: 14px; color: ${n.ash}; margin-bottom: 10px;">5-digit US zip code. Zips don't need a state (most are unique to one state anyway).</div>
    <input id="ws-buybox-zip" type="text" inputmode="numeric" placeholder="33101" autofocus maxlength="5" style="
      width: 100%; box-sizing: border-box; padding: 12px 14px;
      background: ${n.obsidian}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.sm};
      font-family: ${h.mono}; font-size: 18px; text-align: center; letter-spacing: 0.12em;
      margin-bottom: 10px;
    ">
    <div id="ws-buybox-err" style="color: ${n.crimson}; font-size: 12px; min-height: 16px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: space-between;">
      <button id="ws-buybox-back" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Back</button>
      <div style="display: flex; gap: 8px;">
        <button id="ws-buybox-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
        <button id="ws-buybox-save" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add Zip</button>
      </div>
    </div>
  `,w=()=>{let k=s.querySelector("#ws-buybox-zip"),C=s.querySelector("#ws-buybox-err");k&&(k.addEventListener("input",()=>{k.value=k.value.replace(/\D/g,"").slice(0,5),C&&(C.textContent="")}),k.addEventListener("keydown",E=>{E.key==="Enter"&&(E.preventDefault(),S())}),s.querySelector("#ws-buybox-back")?.addEventListener("click",()=>{i.step=1,l()}),s.querySelector("#ws-buybox-cancel")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-buybox-save")?.addEventListener("click",()=>void S()),setTimeout(()=>k.focus(),0))},S=async()=>{let k=s.querySelector("#ws-buybox-zip"),C=s.querySelector("#ws-buybox-err"),E=(k?.value||"").trim();if(!/^\d{5}$/.test(E)){C&&(C.textContent="Zip must be exactly 5 digits.");return}await T(E)},T=async k=>{if(!i.granularity||!k)return;let C=s.querySelector("#ws-buybox-err"),E=s.querySelector("#ws-buybox-save");E&&(E.disabled=!0,E.textContent="Adding\u2026"),C&&(C.textContent="");try{let L=await xh(e,t,i.granularity,k);if(!L.ok){C&&(C.textContent=L.error||"Failed to add entry."),E&&(E.disabled=!1,E.textContent="Add");return}o(),s.innerHTML=`
        <div style="text-align: center; padding: 40px 0;">
          <div style="font-size: 32px;">\u2713</div>
          <div style="font-size: 16px; margin-top: 8px;">Added <strong>${ne(k)}</strong> to the buy-box.</div>
          <div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${L.deduplicated?"(Already existed; not duplicated.)":""}</div>
        </div>
      `,setTimeout(()=>{i.step=1,i.granularity=null,i.stateCode=null,i.value=null,l()},900)}catch(L){C&&(C.textContent=`Network error: ${L.message}`),E&&(E.disabled=!1,E.textContent="Add")}};l()},hs=!1,Yt=null,Vo=null,Id=()=>{document.getElementById(Od)?.remove(),document.getElementById(ys)?.remove(),Vo&&Yt&&Yt.nav.removeEventListener("click",Vo,!0),Vo=null,Yt=null,fn=!1},Hd=()=>{Hh()},Hh=async()=>{if(!hs){hs=!0;try{let e=W();if(!e){Id();return}let t=document.getElementById(ys);if(t&&t.dataset.buyerContactId===e.contactId&&Yt)return;Id();let o=null;try{o=await je(e.contactId,e.locationId)}catch(u){m.warn("[buy-box] Contact Type fetch failed",u);return}if(Ue(o)!=="buyer")return;if(!e.locationId){m.warn("[buy-box] no locationId in context; can't mount widget");return}let[a,s]=await Promise.all([Sh(),Lh()]);if(!a||!s){m.warn("[buy-box] right-rail nav or panel area not found");return}let i=W();if(!i||i.contactId!==e.contactId)return;let l=Mh(e.locationId,e.contactId),d=Ph(()=>Yt),c={buyerContactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l,nativePanelOriginalDisplay:""};Yt=c;let p=a.querySelector(".flex.flex-col.items-center.gap-2");p?p.appendChild(d):a.appendChild(d),s.appendChild(l),Vo=u=>{let b=u.target;if(!b||c.iconBtn.contains(b))return;b.closest("button.sidebar-option-button")&&fn&&Pd(c,!1)},a.addEventListener("click",Vo,!0),m.info(`[buy-box] right-rail mount complete for buyer ${e.contactId}`)}finally{hs=!1}}};var ae=".crm-opportunities-modal .ui-modal-heading .description",Dd=new Map,xs=null,ws,Dh=()=>{let e=new Map;for(let[t,{selector:o,cb:r}]of Dd){let a=e.get(o);if(a===void 0&&(a=!!document.querySelector(o),e.set(o,a)),!!a)try{r()}catch(s){m.error(`[arrival-watcher] callback "${t}" threw`,s)}}},oe=(e,t,o)=>{Dd.set(e,{selector:t,cb:o}),!xs&&(xs=new MutationObserver(()=>{ws===void 0&&(ws=window.setTimeout(()=>{ws=void 0,Dh()},300))}),xs.observe(document.body,{childList:!0,subtree:!0}))};var Rd="ws-crm-dispo-action-row",re=e=>{let t=document.getElementById(Rd);if(t)return t;e.classList.contains("description")&&(e.style.display="flex",e.style.alignItems="center",e.style.gap="12px",e.style.flexWrap="wrap");let o=document.createElement("span");return o.id=Rd,o.style.cssText="display: inline-flex; align-items: center; gap: 8px; margin-left: auto; flex-wrap: nowrap; flex-shrink: 0; vertical-align: middle;",e.appendChild(o),o};var Rh=e=>{let t=(o,r,a)=>o.style.setProperty(r,a,"important");e.querySelectorAll("input, textarea, select").forEach(o=>{if(o instanceof HTMLInputElement&&o.type==="checkbox")return;t(o,"background-color",n.obsidian),t(o,"color",n.bone),t(o,"-webkit-text-fill-color",n.bone),t(o,"border-color",n.steel);let r=o.previousElementSibling;r instanceof HTMLElement&&r.tagName==="DIV"&&(t(r,"color",n.bone),t(r,"-webkit-text-fill-color",n.bone))}),e.querySelectorAll("div").forEach(o=>{t(o,"background-color","transparent"),t(o,"border-style","none")})},Jt=(e,t=8e3)=>{let o=null,r=()=>{o?.disconnect(),Rh(e),o?.observe(e,{attributes:!0,attributeFilter:["style"],subtree:!0})};o=new MutationObserver(r),r(),window.setTimeout(()=>{o?.disconnect(),o=null},t)};var Nh=["Acquisitions","Transaction Coordination","Disposition","Marketing Tracker"],Fh=/^(?:\d+\)\s*)?(Acquisitions|Transaction Coordination|Disposition|Marketing Tracker)\s*$/,zh=".hr-card.hr-modal.crm-opportunities-modal",G=()=>{let e=document.querySelector(zh);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(!r)continue;let a=r.match(Fh);if(a){let s=a[1];if(Nh.includes(s))return s}}return null},se=async(e=2500)=>{let t=Date.now();for(;Date.now()-t<e;){let o=G();if(o!==null)return o;await new Promise(r=>setTimeout(r,100))}return null};var qh="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",to="ws-crm-change-primary-wrap",Xt="ws-change-primary-modal",jh=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Uh=/\/v2\/location\/([A-Za-z0-9]+)/,eo=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Wh=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Qt=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;`,Zt=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,It=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},Gh=async e=>{let t=await fetch(qh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok)throw new Error(`Webhook returned ${t.status} ${t.statusText}`);let o=await t.json();return Array.isArray(o)?o[0]:o},$s=e=>{document.getElementById(Xt)?.remove();let t=document.createElement("div");t.id=Xt,t.style.cssText=`
    position: fixed; inset: 0; z-index: 1000000;
    background: rgba(10, 13, 18, 0.75);
    display: flex; align-items: center; justify-content: center;
    font-family: ${h.sans};
  `;let o=document.createElement("div");o.style.cssText=`
    width: min(520px, 94vw); max-height: 90vh; overflow-y: auto;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.lg}; padding: 28px 32px; color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.fixedNewPrimary||null,a=e.addrLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${eo(e.addrLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>',s=r?`<div style="font-size: 14px; margin-bottom: 14px;">New primary contact: <strong>${eo(r.name||"this contact")}</strong></div>`:`
    <button id="ws-cp-promote" type="button" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:12px 14px;margin-bottom:12px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
      <span style="font-size:14px;font-weight:500;display:block;">Promote the existing Second Seller</span>
      <span style="font-size:11px;color:${n.ash};display:block;margin-top:3px;">They're already on this property \u2014 make them the primary contact.</span>
    </button>
    <div style="display:flex;align-items:center;gap:10px;margin: 4px 0 12px;">
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
      <span style="font-size:11px;color:${n.ash};">or add a new person</span>
      <span style="flex:1;height:1px;background:${n.steel};display:block;"></span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Zt("First Name *")}<input id="ws-cp-first" type="text" autocomplete="off" placeholder="Jordan" style="${Qt}"></div>
      <div>${Zt("Last Name")}<input id="ws-cp-last" type="text" autocomplete="off" placeholder="Seller" style="${Qt}"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>${Zt("Phone")}<input id="ws-cp-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${Qt}"></div>
      <div>${Zt("Email")}<input id="ws-cp-email" type="email" autocomplete="off" placeholder="name@email.com" style="${Qt}"></div>
    </div>`;o.innerHTML=`
    <style id="ws-cp-style">
      #${Xt} input::placeholder, #${Xt} textarea::placeholder {
        color: ${n.ash} !important; -webkit-text-fill-color: ${n.ash} !important; opacity: 1 !important;
      }
      #${Xt} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Change Primary Contact</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Moves the deal to the new decision-maker: the opp, seller roles, deal state, claim, and dial lists all follow. The current primary's conversation history stays on their record.</div>
    ${a}
    ${s}
    <div style="margin-bottom: 12px;">
      ${Zt("Current primary stays\u2026")}
      <select id="ws-cp-old" style="${Qt} cursor: pointer;">
        <option value="seller_2" selected>On the deal as Second Seller (still a signer)</option>
        <option value="detach">Not on title \u2014 detach from the property roles</option>
      </select>
    </div>
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer; font-size: 13px; color: ${n.bone};">
      <input id="ws-cp-stop" type="checkbox" checked>
      <span>Stop calling/texting the current primary <span style="color:${n.ash};">(drips end, off dial lists)</span></span>
    </label>
    <div style="margin-bottom: 14px;">
      ${Zt("Note (optional)")}
      <textarea id="ws-cp-note" rows="2" autocomplete="off" placeholder="e.g. Son handles the sale \u2014 mom is on the deed" style="${Qt} resize: vertical;"></textarea>
    </div>
    <div id="ws-cp-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>
    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-cp-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-cp-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">${r?"Make Primary":"Change Primary"}</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Jt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-cp-cancel")?.addEventListener("click",()=>t.remove()),window.setTimeout(()=>o.querySelector("#ws-cp-first")?.focus(),0);let i=o.querySelector("#ws-cp-err"),l=c=>{i&&(i.textContent=c)},d=async(c,p)=>{l("");let u=p?.textContent||"";p&&(p.disabled=!0,p.textContent="Working\u2026",p.style.opacity="0.7");try{let b=await Gh({tenant_id:e.tenantId,acq_opp_id:e.acqOppId||void 0,property_record_id:e.propertyRecordId||void 0,new_primary:c,old_disposition:o.querySelector("#ws-cp-old")?.value||"seller_2",stop_old_outreach:o.querySelector("#ws-cp-stop")?.checked??!0,note:(o.querySelector("#ws-cp-note")?.value||"").trim(),triggered_by_user_id:H()||""});if(!b?.ok){l(b?.error||"Something went wrong \u2014 try again."),p&&(p.disabled=!1,p.textContent=u,p.style.opacity="1");return}m.info(`Primary contact changed -> ${b.new_primary_contact_id}`),Kh(o,b,e),e.onSuccess?.(b)}catch(b){m.error("Change primary failed",b),l(`Network error: ${b instanceof Error?b.message:"request failed"}`),p&&(p.disabled=!1,p.textContent=u,p.style.opacity="1")}};o.querySelector("#ws-cp-promote")?.addEventListener("click",c=>{d({promote_seller_2:!0},c.currentTarget)}),o.querySelector("#ws-cp-submit")?.addEventListener("click",c=>{let p=c.currentTarget;if(r){d({contact_id:r.contactId},p);return}let u=(o.querySelector("#ws-cp-first")?.value||"").trim(),b=(o.querySelector("#ws-cp-last")?.value||"").trim(),_=(o.querySelector("#ws-cp-phone")?.value||"").trim(),y=(o.querySelector("#ws-cp-email")?.value||"").trim().toLowerCase();if(!u){l("First name is required (or use Promote above).");return}let g="";if(_){let x=_.replace(/\D/g,"");if(x.length===11&&x.startsWith("1")&&(x=x.slice(1)),x.length!==10){l("Phone must be a 10-digit US number.");return}g=`+1${x}`}if(y&&!/.+@.+\..+/.test(y)){l("That email doesn't look valid.");return}if(!g&&!y){l("Add a phone or an email for the new primary.");return}d({first_name:u,last_name:b,phone:g,email:y},p)})},Kh=(e,t,o)=>{let r=[];t.already_primary?r.push(It("Already the primary contact","info")):(r.push(It(t.contact_created?"Contact created":"Existing contact reused",t.contact_created?"good":"info")),r.push(It(`Deal moved (${(t.opps_moved||[]).map(i=>i.pipeline).join(", ")||"ACQ"})`,"good")),t.old_role==="seller_2"?r.push(It("Old primary kept as Second Seller","info")):t.old_role==="detached"&&r.push(It("Old primary detached from roles","info")),(t.call_status_applied||"").startsWith("copied:")&&r.push(It(`Inherited: ${eo((t.call_status_applied||"").slice(7))}`,"good")),r.push(It(t.outreach_stopped?"Old primary's outreach stopped":"Old primary still in rotation",t.outreach_stopped?"good":"warn")));let a=(t.warnings||[]).map(i=>`<div style="font-size:11px;color:${n.amber};margin-top:4px;">\xB7 ${eo(i)}</div>`).join(""),s=t.new_primary_contact_id?`${window.location.origin}/v2/location/${encodeURIComponent(o.tenantId)}/contacts/detail/${encodeURIComponent(t.new_primary_contact_id)}`:"";e.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Primary Contact Changed</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${eo(t.new_primary_name||"New primary")} now owns this deal</div>
    <div style="line-height: 1;">${r.join("")}</div>
    ${a}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      ${s?`<a href="${eo(s)}" style="display:inline-flex;align-items:center;background: transparent; color: ${n.emeraldBright}; border: 1px solid ${n.emeraldBorder}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; text-decoration:none;">Open new primary</a>`:""}
      <button id="ws-cp-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-cp-done")?.addEventListener("click",()=>{document.getElementById(Xt)?.remove()})},xn=()=>{let e=window.location.pathname,t=e.match(jh),o=t?t[1]:Le();if(!o)return null;let r=e.match(Uh);return{oppId:o,locationId:r?r[1]:null}},Vh=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Yh=async()=>{for(let e of Vh)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},wn=!1,ks=async()=>{if(!wn){wn=!0;try{await Jh()}finally{wn=!1}}},Jh=async()=>{let e=xn();if(!e||!e.locationId){document.getElementById(to)?.remove(),Jo();return}let t=document.getElementById(to);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Acquisitions"&&(t.remove(),Jo());return}t&&t.remove();let o=await Yh();if(!o)return;let r=await se();if(r!=="Acquisitions"){m.debug(`[change-primary] gated off \u2014 pipeline="${r}" (expected Acquisitions)`);return}let a=xn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=to,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:4;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=z,i.title="Seller says someone else handles the sale? Hand the deal to that person \u2014 opp, seller roles, deal state, and dial lists all follow",i.innerHTML=`${Wh(n.amber)}<span>Change Primary Contact</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=xn();!l||!l.locationId||$s({tenantId:l.locationId,acqOppId:l.oppId})}),s.appendChild(i),re(o).appendChild(s),m.debug(`Mounted Change Primary Contact button on opp ${e.oppId}`),Qh(e.oppId)},Yo=null,Es=null,Jo=()=>{Yo?.disconnect(),Yo=null,Es=null},Qh=e=>{if(Yo&&Es===e)return;Jo();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Es=e,Yo=new MutationObserver(()=>{let o=xn();if(!o||o.oppId!==e){Jo();return}let r=G();if(r!==null&&r!=="Acquisitions"){document.getElementById(to)?.remove(),Jo();return}document.getElementById(to)||ks()}),Yo.observe(t,{childList:!0,subtree:!0}))},Nd=()=>{oe("change-primary-contact",ae,()=>{!document.getElementById(to)&&!wn&&ks()}),ks()};var jd="ws-properties-nav-icon",Ms="ws-properties-panel",Fd="ws-properties-modal",Is="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property",Zh=`${Is}/list-for-contact`,Xh=`${Is}/create-with-opp`,e_=`${Is}/add-contact`,t_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/seller/primary-contact/set",o_=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],ue=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),r_=(e,t)=>`/v2/location/${e}/objects/property/list?recordId=${t}`,Ud=e=>{if(e==null||e==="")return null;let t=Number(String(e).replace(/[^0-9.\-]/g,""));return Number.isFinite(t)&&t!==0?t:null},kn=e=>{let t=Ud(e);if(t===null)return"&mdash;";let o=Math.abs(t);return o>=1e6?`$${(t/1e6).toFixed(t%1e6?1:0)}M`:o>=1e3?`$${Math.round(t/1e3)}k`:`$${Math.round(t)}`},Ts=e=>{let t=Ud(e);return t===null?"&mdash;":t.toLocaleString()},Wd={easy:"Paint & Flooring",minor_rehab:"Kitchen & Bath",full_cosmetic:"Full Cosmetic",major_repairs:"Roof & Systems"},n_=e=>{let t=(e||"").toString().trim();return t?ue(Wd[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase())):"&mdash;"},a_=e=>{let t=(e||"").toString().trim();return t?Wd[t]||t:""},s_={single_family_residence_sfr:"Single Family Residence (SFR)",multifamily_24_units:"Multi-Family 2-4 Units",multifamily_5_units:"Multi-Family 5+ Units",land:"Land",commercial:"Commercial",mobile_home:"Mobile Home"},i_=e=>{let t=(e||"").toString().trim();return t?s_[t]||t.replace(/_/g," ").replace(/\b\w/g,o=>o.toUpperCase()):""},ct=(e,t,o)=>`<div style="min-width:0;"><div style="font-size:9px;color:${n.ash};text-transform:uppercase;letter-spacing:.4px;">${e}</div><div title="${ue(o||"")}" style="font-size:12px;color:${n.bone};font-weight:500;line-height:1.25;word-break:break-word;">${t}</div></div>`,l_=e=>`
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid ${n.steel};">
    ${ct("Beds",Ts(e.beds))}
    ${ct("Baths",Ts(e.baths))}
    ${ct("Sq Ft",Ts(e.sqft))}
    ${ct("Rehab",n_(e.rehab_level),a_(e.rehab_level))}
    ${ct("ARV",kn(e.arv))}
    ${ct("IMV",kn(e.imv))}
    ${ct("MAO",kn(e.mao))}
    ${ct("Ask",kn(e.asking_price))}
  </div>`,Ss=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000001; padding: 10px 18px; border-radius: ${v.sm};
    background: ${t==="ok"?n.emerald:n.crimson}; color: ${n.bone};
    font-family: ${h.sans}; font-size: 13px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4e3)},d_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',c_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" width="15" height="15"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>',p_="nav.w-13, nav[class*='w-13']",m_=".flex-1.h-full.relative.overflow-hidden.rounded-lg",Gd="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-gray-900 hover:text-blue-600",b_="relative w-8 h-8 rounded-lg flex items-center justify-center sidebar-option-button text-blue-600 bg-white",u_=async()=>{try{return await N(p_,{timeoutMs:2500})}catch{return null}},h_=async()=>{try{return await N(m_,{timeoutMs:2500})}catch{return null}},En=async(e,t)=>await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"})).json(),We=`width:100%;box-sizing:border-box;padding:8px 10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${h.sans};font-size:13px;outline:none;margin-bottom:10px;`,Ge=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,Os=`background:${n.emerald};color:${n.bone};border:none;border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-family:${h.sans};font-size:13px;font-weight:600;`,Kd=`background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 16px;cursor:pointer;font-family:${h.sans};font-size:13px;`,__=(e,t)=>{let o=document.createElement("div");return o.id=Ms,o.dataset.contactId=t,o.style.cssText=`
    position: fixed; z-index: 9998; display: none;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.lg}; flex-direction: column; overflow: hidden;
    color: ${n.bone}; font-family: ${h.sans};
    box-shadow: 0 12px 40px rgba(0,0,0,0.55);
  `,o.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px 16px;border-bottom:1px solid ${n.steel};">
      <div>
        <div style="font-size:16px;font-weight:500;color:${n.bone};">Properties</div>
        <div style="font-size:11px;color:${n.ash};margin-top:2px;">Properties this seller owns</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button id="ws-prop-add" type="button" style="${Os}">+ Add Property</button>
        <button id="ws-prop-close" type="button" title="Close" aria-label="Close" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};width:30px;height:30px;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;flex:0 0 auto;">&times;</button>
      </div>
    </div>
    <div id="ws-prop-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:13px;color:${n.bone};">
      <div style="color:${n.ash};font-style:italic;">Loading\u2026</div>
    </div>
  `,o.querySelector("#ws-prop-add")?.addEventListener("click",()=>{v_(e,t,()=>$n(e,t))}),o},$n=async(e,t)=>{let o=document.querySelector("#ws-prop-body");if(o)try{let r=await En(Zh,{tenant_id:e,contact_id:t});if(!r.ok){o.innerHTML=`<div style="color:${n.crimson};">${ue(r.error||"Failed to load properties")}</div>`;return}y_(o,r.properties||[],e,t)}catch(r){o.innerHTML=`<div style="color:${n.crimson};">Network error: ${ue(r.message)}</div>`}},y_=(e,t,o,r)=>{if(!t.length){e.innerHTML=`<div style="text-align:center;padding:32px 0;color:${n.ash};">No properties yet.<br><span style="font-size:12px;">Click "+ Add Property" to create one (a deal is created automatically).</span></div>`;return}e.innerHTML=t.map(a=>{let s=/lost|abandon/i.test(a.deal_stage||""),i=s?n.crimson:n.emeraldBright,l=s?n.steel:n.emeraldBorder,d=a.has_acq_opp?`<span title="Deal stage" style="font-size:10px;color:${i};border:1px solid ${l};border-radius:${v.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">${ue(a.deal_stage||"Deal")}</span>`:`<span title="No ACQ deal yet" style="font-size:10px;color:${n.amber};border:1px solid ${n.steel};border-radius:${v.sm};padding:1px 7px;white-space:nowrap;flex:0 0 auto;">No deal</span>`,c=(a.roles||[]).map(p=>p==="seller_1"?"Seller 1":p==="seller_2"?"Seller 2":p==="tenant_contact"?"Tenant":p).join(", ");return`
      <div style="border:1px solid ${n.steel};border-radius:${v.md};padding:10px 12px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          <div class="ws-prop-open" data-prop="${ue(a.property_record_id)}" title="Open property record" style="font-size:13px;font-weight:500;color:${n.bone};cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-width:0;">
            <span style="text-decoration:underline;text-decoration-color:${n.steel};text-underline-offset:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ue(a.address)}</span>
            <span style="color:${n.emeraldBright};font-size:12px;line-height:1;flex:0 0 auto;">&#8599;</span>
          </div>
          ${d}
        </div>
        <div style="font-size:11px;color:${n.ash};margin-top:3px;">${ue(c||"")}${a.property_type?" &middot; "+ue(i_(a.property_type)):""}</div>
        ${l_(a)}
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="ws-prop-addperson" data-prop="${ue(a.property_record_id)}" data-addr="${ue(a.address)}" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:4px 10px;cursor:pointer;font-family:${h.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">${c_} Add person</button>
          ${(a.roles||[]).includes("seller_2")&&a.has_acq_opp&&a.opp_id?`<button type="button" class="ws-prop-makeprimary" data-prop="${ue(a.property_record_id)}" data-addr="${ue(a.address)}" data-opp="${ue(a.opp_id)}" title="This contact is the Second Seller \u2014 make them the PRIMARY contact for this deal" style="background:transparent;border:1px solid ${n.emeraldBorder};color:${n.emeraldBright};border-radius:${v.sm};padding:4px 10px;cursor:pointer;font-family:${h.sans};font-size:12px;display:inline-flex;align-items:center;gap:5px;">Make primary</button>`:""}
        </div>
      </div>
    `}).join(""),e.querySelectorAll(".ws-prop-addperson").forEach(a=>{a.addEventListener("click",()=>{g_(o,a.dataset.prop||"",a.dataset.addr||"this property",()=>$n(o,r))})}),e.querySelectorAll(".ws-prop-makeprimary").forEach(a=>{a.addEventListener("click",()=>{$s({tenantId:o,acqOppId:a.dataset.opp||void 0,propertyRecordId:a.dataset.prop||void 0,addrLabel:a.dataset.addr||void 0,fixedNewPrimary:{contactId:r,name:"this contact"},onSuccess:()=>$n(o,r)})})}),e.querySelectorAll(".ws-prop-open").forEach(a=>{a.addEventListener("click",()=>{let s=a.dataset.prop||"";s&&window.open(r_(o,s),"_blank","noopener")}),a.addEventListener("mouseenter",()=>{a.style.color=n.emeraldBright}),a.addEventListener("mouseleave",()=>{a.style.color=n.bone})})},Vd=()=>{document.getElementById(Fd)?.remove();let e=document.createElement("div");e.id=Fd,e.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let t=document.createElement("div");return t.style.cssText=`width:min(440px,92vw);background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`,e.appendChild(t),document.body.appendChild(e),e.addEventListener("click",o=>{o.target===e&&e.remove()}),{overlay:e,card:t}},v_=(e,t,o)=>{let{overlay:r,card:a}=Vd();a.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add Property</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Creates the property linked to this seller and its own ACQ deal.</div>
    <label style="${Ge}">Street address</label>
    <input id="wp-address" type="text" style="${We}" placeholder="123 Main St" />
    <div style="display:flex;gap:10px;">
      <div style="flex:2;"><label style="${Ge}">City</label><input id="wp-city" type="text" style="${We}" /></div>
      <div style="flex:1;"><label style="${Ge}">State</label><input id="wp-state" type="text" maxlength="2" style="${We}" placeholder="NC" /></div>
      <div style="flex:1;"><label style="${Ge}">Zip</label><input id="wp-zip" type="text" maxlength="10" style="${We}" /></div>
    </div>
    <label style="${Ge}">Property type (optional)</label>
    <select id="wp-type" style="${We}">
      <option value="">\u2014 select \u2014</option>
      ${o_.map(i=>`<option value="${ue(i)}">${ue(i)}</option>`).join("")}
    </select>
    <div id="wp-err" style="color:${n.crimson};font-size:12px;min-height:16px;margin-bottom:6px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button id="wp-cancel" type="button" style="${Kd}">Cancel</button>
      <button id="wp-save" type="button" style="${Os}">Create Property + Deal</button>
    </div>
  `;let s=a.querySelector("#wp-err");a.querySelector("#wp-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#wp-save")?.addEventListener("click",async()=>{let i=_=>(a.querySelector(_)?.value||"").trim(),l=i("#wp-address"),d=i("#wp-city"),c=i("#wp-state"),p=i("#wp-zip"),u=(a.querySelector("#wp-type")?.value||"").trim();if(!l&&!d&&!p){s&&(s.textContent="Enter at least a street address.");return}let b=a.querySelector("#wp-save");b&&(b.disabled=!0,b.textContent="Creating\u2026"),s&&(s.textContent="");try{let _=await En(Xh,{tenant_id:e,contact_id:t,address:l,city:d,state:c,zip:p,property_type:u||void 0});if(!_.ok){s&&(s.textContent=_.error||"Failed to create property."),b&&(b.disabled=!1,b.textContent="Create Property + Deal");return}r.remove(),Ss("Property + deal created \u2713"),o()}catch(_){s&&(s.textContent=`Network error: ${_.message}`),b&&(b.disabled=!1,b.textContent="Create Property + Deal")}}),setTimeout(()=>a.querySelector("#wp-address")?.focus(),0)},g_=(e,t,o,r)=>{let{overlay:a,card:s}=Vd();s.innerHTML=`
    <div style="font-size:17px;font-weight:500;margin-bottom:4px;">Add person</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;">Attach a person to ${ue(o)}.</div>
    <label style="${Ge}">Role</label>
    <select id="wpp-role" style="${We};appearance:none;-webkit-appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22><path d=%22M0 0l5 6 5-6z%22 fill=%22%238b98a5%22/></svg>');background-repeat:no-repeat;background-position:right 12px center;padding-right:30px">
      <option value="seller_2">Second seller</option>
      <option value="tenant_contact">Tenant</option>
    </select>
    <div style="display:flex;gap:10px;">
      <div style="flex:1;"><label style="${Ge}">First name</label><input id="wpp-first" type="text" style="${We}" /></div>
      <div style="flex:1;"><label style="${Ge}">Last name</label><input id="wpp-last" type="text" style="${We}" /></div>
    </div>
    <label style="${Ge}">Phone (optional)</label>
    <input id="wpp-phone" type="text" style="${We}" placeholder="+1..." />
    <label style="${Ge}">Email (optional)</label>
    <input id="wpp-email" type="text" style="${We}" />
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
      <button id="wpp-cancel" type="button" style="${Kd}">Cancel</button>
      <button id="wpp-save" type="button" style="${Os}">Add person</button>
    </div>
  `;let i=s.querySelector("#wpp-err");s.querySelector("#wpp-cancel")?.addEventListener("click",()=>a.remove());let l=s.querySelector("#wpp-role"),d=s.querySelector("#wpp-primary-block"),c=s.querySelector("#wpp-makeprimary"),p=s.querySelector("#wpp-stop-row"),u=()=>{let b=(l?.value||"seller_2")==="seller_2";d&&(d.style.display=b?"":"none"),!b&&c&&(c.checked=!1),p&&(p.style.display=c?.checked?"flex":"none")};l?.addEventListener("change",u),c?.addEventListener("change",u),u(),s.querySelector("#wpp-save")?.addEventListener("click",async()=>{let b=s.querySelector("#wpp-role")?.value||"seller_2",_=S=>(s.querySelector(S)?.value||"").trim(),y=_("#wpp-first"),g=_("#wpp-last"),x=_("#wpp-phone"),$=_("#wpp-email"),f=b==="seller_2"&&(c?.checked??!1);if(!y&&!g){i&&(i.textContent="Enter at least a first or last name.");return}if(f&&!y){i&&(i.textContent="First name is required to make them the primary.");return}if(f&&!x&&!$){i&&(i.textContent="A phone or email is required to make them the primary.");return}let w=s.querySelector("#wpp-save");w&&(w.disabled=!0,w.textContent=f?"Handing off\u2026":"Adding\u2026"),i&&(i.textContent="");try{if(f){let T=await En(t_,{tenant_id:e,property_record_id:t,new_primary:{first_name:y,last_name:g,phone:x||void 0,email:$||void 0},old_disposition:"seller_2",stop_old_outreach:s.querySelector("#wpp-stopold")?.checked??!0,triggered_by_user_id:H()||""});if(!T.ok){i&&(i.textContent=T.error||"Failed to change the primary."),w&&(w.disabled=!1,w.textContent="Add person");return}a.remove();let k=Array.isArray(T.warnings)&&T.warnings.length?` \u2014 ${T.warnings[0]}`:"";Ss(`Now the primary contact \u2713${k}`),r();return}let S=await En(e_,{tenant_id:e,property_record_id:t,role:b,new_contact:{firstName:y,lastName:g,phone:x||void 0,email:$||void 0}});if(!S.ok){i&&(i.textContent=S.error||"Failed to add person."),w&&(w.disabled=!1,w.textContent="Add person");return}a.remove(),Ss("Person added \u2713"),r()}catch(S){i&&(i.textContent=`Network error: ${S.message}`),w&&(w.disabled=!1,w.textContent="Add person")}}),setTimeout(()=>s.querySelector("#wpp-first")?.focus(),0)},Tn=!1,Ce=null,Cs=!1,Qo=null,f_=(e,t,o)=>{let r=t.getBoundingClientRect(),a=null;try{a=o?o.getBoundingClientRect():null}catch{a=null}let s=!!(a&&a.height>40&&a.width>=280&&a.width<=520&&a.left>=r.left-560),i=s&&a?Math.round(a.width):400,l=Math.round(s&&a?a.top:r.top),d=Math.round(s&&a?a.height:r.height),c=6;e.style.top=`${l}px`,e.style.height=`${d}px`,e.style.width=`${i}px`,e.style.left=`${Math.round(r.left-i-c)}px`,e.style.right="auto",e.style.bottom="auto"},x_=()=>{try{let e=new URL(window.location.href);e.searchParams.get("view")!=="activities"&&(e.searchParams.set("view","activities"),history.replaceState(history.state,"",e.toString()))}catch{}},Ls=(e,t)=>{Tn=t,t?(e.iconBtn.className=b_,e.iconBtn.dataset.active="true",x_(),f_(e.panel,e.nav,e.panelArea),e.panel.style.display="flex",$n(e.tenantId,e.contactId)):(e.iconBtn.className=Gd,delete e.iconBtn.dataset.active,e.panel.style.display="none")},w_=()=>{let e=document.createElement("button");return e.id=jd,e.type="button",e.title="Properties",e.setAttribute("aria-label","Properties"),e.className=Gd,e.innerHTML=`<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;line-height:0;pointer-events:none;">${d_.replace("<svg ",'<svg style="pointer-events:none;" ')}</span>`,e.addEventListener("click",t=>{t.stopPropagation(),Ce&&Ls(Ce,!Tn)}),e},zd=()=>{document.getElementById(jd)?.remove(),document.getElementById(Ms)?.remove(),Qo&&Ce&&Ce.nav.removeEventListener("click",Qo,!0),Qo=null,Ce=null,Tn=!1},As=[],k_=()=>{As.forEach(e=>window.clearTimeout(e)),As=[]},Yd=()=>{k_(),qd().then(e=>{if(e==="retry")for(let t of[900,2500,8e3,32e3])As.push(window.setTimeout(()=>{qd()},t))})},qd=async()=>{if(Cs)return"done";Cs=!0;try{let e=W();if(!e||!e.locationId)return zd(),"done";let t=document.getElementById(Ms);if(t&&t.dataset.contactId===e.contactId&&Ce)return"done";zd();let o=null;try{o=await je(e.contactId,e.locationId)}catch(p){return m.warn("[properties] Contact Type fetch failed",p),"retry"}if(Ue(o)!=="seller")return"done";let[a,s]=await Promise.all([u_(),h_()]);if(!a||!s)return m.warn("[properties] right-rail nav or panel area not found"),"retry";let i=W();if(!i||i.contactId!==e.contactId)return"done";let l=__(e.locationId,e.contactId),d=w_();return Ce={contactId:e.contactId,tenantId:e.locationId,nav:a,panelArea:s,iconBtn:d,panel:l},(a.querySelector(".flex.flex-col.items-center.gap-2")||a).appendChild(d),document.body.appendChild(l),l.querySelector("#ws-prop-close")?.addEventListener("click",()=>{Ce&&Ls(Ce,!1)}),Qo=p=>{let u=p.target;!u||Ce&&Ce.iconBtn.contains(u)||u.closest("button.sidebar-option-button")&&Tn&&Ce&&Ls(Ce,!1)},a.addEventListener("click",Qo,!0),m.info(`[properties] right-rail mount complete for seller ${e.contactId}`),"done"}finally{Cs=!1}};var Jd="ws-non-seller-contact",Qd=()=>{E_()},E_=async()=>{let e=W();if(!e||!e.contactId||!e.locationId){document.documentElement.classList.remove(Jd);return}let t="seller";try{t=Ue(await je(e.contactId,e.locationId))}catch(o){m.warn("[seller-flag] contact-type resolve failed",o)}document.documentElement.classList.toggle(Jd,t!=="seller")};var pt="ws-crm-claim-release-pill",$_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-get",T_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/claim-release-set",C_=async e=>{let t=await fetch($_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Get returned ${t.status} ${t.statusText}`);return await t.json()},S_=async e=>{let t=await fetch(T_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,contact_id:e.contactId,triggered_by_user_id:e.userId,action:e.action}),credentials:"omit"});if(!t.ok)throw new Error(`Claim/Release Set returned ${t.status} ${t.statusText}`);return await t.json()},ec=e=>{let t=Array.from(e.children).find(r=>{if(!(r instanceof HTMLElement))return!1;let a=r.className?.toString()??"";return a.includes("flex")&&a.includes("flex-col")});return t?t.querySelector(".flex.items-center, [class~='flex'][class~='items-center']")??null:null},ro=(e,t)=>{let o=t==="claim"?"emerald":"amber",r=t==="claim"?n.emerald:n.amber;e.dataset.mode=t,e.style.cssText=jl(o),e.title=t==="claim"?"Take ownership of this lead":"Return this lead to the pool",e.innerHTML=`
    <span style="
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${r};
      box-shadow: 0 0 6px ${r};
      flex-shrink: 0;
    "></span>
    <span class="ws-cr-label">${t==="claim"?"Claim Lead":"Release Lead"}</span>
  `},L_=({contactId:e,mode:t})=>{let o=document.createElement("button");return o.id=pt,o.type="button",o.dataset.contactId=e,ro(o,t),o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",async()=>{let r=o.dataset.mode??"claim",a=W();if(!a||!a.locationId||a.contactId!==e)return;let s=H();if(!s){m.warn("Claim/Release click: no user ID detected (login session not exposing it)");let l=o.querySelector(".ws-cr-label");l&&(l.textContent="Sign-in needed"),setTimeout(()=>ro(o,r),2500);return}m.info(`Claim/Release click \u2014 contact=${e} mode=${r} user=${s}`);let i=r==="claim"?"release":"claim";ro(o,i),o.disabled=!0,o.style.opacity="0.8";try{let l=await S_({contactId:e,locationId:a.locationId,userId:s,action:r}),d=l?.mode==="claim"||l?.mode==="release"?l.mode:i;ro(o,d),m.info(`Claim/Release done \u2192 new mode: ${d}`)}catch(l){m.error("Claim/Release Set webhook failed",l),ro(o,r);let d=o.querySelector(".ws-cr-label");if(d){let c=d.textContent??"";d.textContent="Try again",setTimeout(()=>{d.textContent==="Try again"&&(d.textContent=c)},2500)}}finally{o.disabled=!1,o.style.opacity="1"}}),o},Zd=async e=>{try{let t=await C_({contactId:e.contactId,locationId:e.locationId,userId:H()}),o=document.getElementById(pt);if(!o||o.dataset.contactId!==e.contactId)return;let r=t?.mode==="release"?"release":"claim";ro(o,r)}catch(t){m.warn("Claim/Release Get failed; pill stays in default 'claim' mode",t)}},A_=async(e,t=1e4)=>{let o=Date.now();for(;Date.now()-o<t;){let r=ec(e);if(r)return r;await new Promise(a=>setTimeout(a,150))}return null},Xd=(e,t)=>{let o=L_({contactId:t,mode:"claim"}),r=document.createElement("span");r.id=`${pt}-wrap`,r.style.cssText=`
    display: inline-flex;
    align-items: center;
    margin-left: 12px;
    vertical-align: middle;
  `,r.appendChild(o),e.appendChild(r)},oo=null,M_=async()=>{let e=W();if(!e){oo?.disconnect(),oo=null,document.getElementById(pt)?.remove();return}let t=document.getElementById(pt);if(!(t&&t.dataset.contactId===e.contactId)){t&&t.remove();try{let o=await N("#record-details-lhs",{timeoutMs:1e4}),r=await A_(o),a=W();if(!a||a.contactId!==e.contactId)return;if(!r){m.warn("Claim/Release pill \u2014 name row not found within timeout; skipping mount");return}Xd(r,e.contactId),m.debug(`Mounted Claim/Release pill next to name for ${e.contactId}`),document.getElementById(pt)&&e.locationId&&Zd({contactId:e.contactId,locationId:e.locationId}),oo?.disconnect(),oo=new MutationObserver(async()=>{if(!(W()?.contactId===e.contactId)){oo?.disconnect();return}if(document.getElementById(pt))return;let l=ec(o);l&&(Xd(l,e.contactId),document.getElementById(pt)&&e.locationId&&Zd({contactId:e.contactId,locationId:e.locationId}),m.debug("Re-mounted Claim/Release pill after React wipe"))}),oo.observe(o,{childList:!0,subtree:!0})}catch(o){m.warn("Could not mount Claim/Release pill:",o)}}},tc=()=>{M_()};var I_=e=>{let t=(e||"").replace(/[^0-9.]/g,""),o=t.indexOf(".");return o===-1?t:t.slice(0,o+1)+t.slice(o+1).replace(/\./g,"")},Bs=e=>{let t=I_(e);if(!t)return"";let o=t.indexOf("."),r=o===-1?t:t.slice(0,o),a=o===-1?"":t.slice(o);return r.replace(/\B(?=(\d{3})+(?!\d))/g,",")+a},he=e=>{let t=parseFloat((e??"").replace(/,/g,""));return Number.isFinite(t)?t:0},Ps=e=>{let t=e.value,o=Bs(t);if(o===t)return;let r=e.selectionStart??t.length,a=t.slice(0,r).replace(/[^0-9.]/g,"").length,s=0,i=0;for(;s<o.length&&i<a;)o[s]!==","&&(i+=1),s+=1;e.value=o;try{e.setSelectionRange(s,s)}catch{}},$e=e=>{if(!e||e.dataset.wsCurrency==="1")return;if(e.dataset.wsCurrency="1",e.type!=="text"){let o=e.value;e.type="text",e.value=o}e.setAttribute("inputmode","decimal"),e.autocomplete="off",e.value=Bs(e.value),e.addEventListener("input",()=>Ps(e)),e.addEventListener("keydown",o=>{if(o.key!=="Backspace"&&o.key!=="Delete")return;let r=e.selectionStart??0,a=e.selectionEnd??0;if(r!==a)return;let s=e.value;o.key==="Backspace"&&r>=2&&s[r-1]===","?(o.preventDefault(),e.value=s.slice(0,r-2)+s.slice(r),e.setSelectionRange(r-2,r-2),Ps(e),e.dispatchEvent(new Event("input",{bubbles:!0}))):o.key==="Delete"&&s[r]===","&&r+2<=s.length&&(o.preventDefault(),e.value=s.slice(0,r)+s.slice(r+2),e.setSelectionRange(r,r),Ps(e),e.dispatchEvent(new Event("input",{bubbles:!0})))});let t=!1;e.addEventListener("focus",()=>{e.select(),t=!0}),e.addEventListener("mouseup",o=>{t&&(o.preventDefault(),t=!1)}),e.addEventListener("blur",()=>{t=!1})},Hs=(e,t)=>{e&&(e.value=Bs(String(t)))};var dc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/call-status-set",O_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer-call-status/set",P_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/appointment-status",B_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",H_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/link-clicked",D_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/open-opps",R_=async({contactId:e,locationId:t,status:o,userId:r,deadReason:a,webhookUrl:s,kind:i})=>{let l=s||dc,d;if(i==="buyer"){let p=mc.find(b=>b.label===o),u=p?p.value:o.toLowerCase().replace(/\s+/g,"-");d={tenant_id:t,contact_id:e,new_status:u,triggered_by_user_id:r??""}}else{let p={call_status:o,triggered_by_user_id:r??""};a&&(p.dead_reason=a),d={contact_id:e,location:{id:t},customData:p}}let c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),credentials:"omit"});if(!c.ok)throw new Error(`Webhook returned ${c.status} ${c.statusText}`)},N_=async({contactId:e,tenantId:t})=>{let o=await fetch(P_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:e}),credentials:"omit"});if(!o.ok)throw new Error(`Sanity check returned ${o.status} ${o.statusText}`);return await o.json()},no="ws-crm-contact-actions-bar",cc="ws-crm-call-status-dropdown",pc="ws-crm-call-status-menu",Sn="ws-crm-offer-made-modal",oc=!1,F_=()=>{oc||(oc=!0,document.addEventListener("click",e=>{let t=document.getElementById(pc);if(!t||t.style.display==="none")return;let o=document.getElementById(cc);o&&!o.contains(e.target)&&(t.style.display="none")}))},z_=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"needs-offer",label:"Needs Offer",color:"green"},{value:"appointment-booked",label:"Appointment Booked",color:"green"},{value:"no-show",label:"No Show",color:"orange"},{value:"negotiating",label:"Negotiating",color:"green"},{value:"under-contract",label:"Under Contract",color:"green"},{value:"offer-rejected",label:"Offer Rejected",color:"orange"},{value:"not-ready",label:"Not Ready",color:"orange"},{value:"wants-retail",label:"Wants Retail",color:"orange"},{value:"already-listed",label:"Already Listed",color:"orange"},{value:"working-with-a-buyer",label:"Working with a Buyer",color:"orange"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"sold-on-market",label:"Sold on Market",color:"red"},{value:"sold-off-market",label:"Sold off Market",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"dead-deal",label:"Dead Deal",color:"red"}],mc=[{value:"not-contacted",label:"Not Contacted",color:"purple"},{value:"showed-interest",label:"Showed Interest",color:"green"},{value:"qualified-buyer",label:"Qualified Buyer",color:"green"},{value:"upgrade-to-vip",label:"Upgrade to VIP",color:"green"},{value:"walkthrough-scheduled",label:"Walkthrough Scheduled",color:"green"},{value:"made-an-offer",label:"Made an Offer",color:"green"},{value:"not-interested",label:"Not Interested",color:"orange"},{value:"no-longer-buying",label:"No Longer Buying",color:"red"},{value:"wrong-number",label:"Wrong Number",color:"red"},{value:"blacklisted",label:"Blacklisted",color:"red"}],q_=[".central-panel","[class*='central-panel']","[data-testid='central-panel']","[data-test='central-panel']",".contact-detail-page .central-panel",".contact-detail-page [class*='central']"],j_=async()=>{for(let e of q_)try{let t=await N(e,{timeoutMs:2e3});if(t)return m.debug(`[actions-bar] mount target found via selector: ${e}`),t}catch{}try{let e=await N("#contact-conversation-panel",{timeoutMs:2e3});if(e.parentElement)return m.debug("[actions-bar] mount target found via #contact-conversation-panel.parentElement"),e.parentElement}catch{}for(let e of["[id*='conversation-panel']","[class*='conversation-panel']","[class*='contact-detail'] [class*='panel']","main [class*='central']","main [class*='panel']:not([class*='sidebar']):not([class*='nav'])"])try{let t=await N(e,{timeoutMs:1500});if(t)return m.debug(`[actions-bar] mount target via fallback: ${e}`),t.parentElement??t}catch{}return m.warn("[actions-bar] no mount target found via any selector \u2014 URL:",window.location.pathname),null},U_=({contactId:e,kind:t})=>{let o=t==="buyer"?mc:z_,r=t==="buyer"?O_:dc,a=t==="buyer"?"Buyer Call Status":"Seller Call Status",s=document.createElement("div");s.id=cc,s.style.cssText="position: relative; flex-shrink: 0; order: 1;";let i=document.createElement("button");i.type="button",i.style.cssText=z,i.innerHTML=`
    <span style="
      display: inline-flex;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span>${a}</span>
  `;let l=document.createElement("div");return l.id=pc,l.style.cssText=`
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
  `,o.forEach(d=>{let c=fe()&&(d.color==="red"||t==="buyer"&&d.value==="not-interested"),p=document.createElement("button");p.type="button",p.disabled=c,c&&(p.title="Disabled in the demo account",p.setAttribute("aria-disabled","true")),p.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      color: ${n.bone};
      border: none;
      border-radius: ${v.sm};
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
        background: ${qa[d.color]};
        flex-shrink: 0;
      "></span>
      <span>${d.label}</span>
    `,p.addEventListener("mouseenter",()=>{p.style.background=n.slate}),p.addEventListener("mouseleave",()=>{p.style.background="transparent"}),p.addEventListener("click",async()=>{m.info(`Call Status set to "${d.label}" (${d.value}, ${d.color}) for contact ${e}`);let u=i.firstElementChild,b=i.children[1],_=i.children[2];u&&(u.style.background=qa[d.color]),b&&(b.textContent=d.label),l.style.display="none";let g=W()?.locationId,x=H();if(!g){m.warn("Cannot fire Call Status webhook \u2014 locationId missing from URL context"),b&&(b.textContent=`${d.label} (no tenant!)`),b&&(b.style.color=n.amber);return}if(t==="seller"&&d.color==="green"&&!x){m.warn("Green Call Status clicked but no user ID found \u2014 n8n Green handler will throw. Set window.WS_CRM_USER_ID = '<your-ghl-user-id>' as a temporary workaround."),b&&(b.textContent=`${d.label} (no user!)`),b&&(b.style.color=n.amber);return}let $=_?.textContent??"\u25BE",f=async w=>{_&&(_.textContent="\u2026"),i.style.opacity="0.75";try{await R_({contactId:e,locationId:g,status:d.label,userId:x,deadReason:w,webhookUrl:r,kind:t}),_&&(_.textContent="\u2713"),setTimeout(()=>{_&&(_.textContent=$),i.style.opacity="1"},900)}catch(S){m.warn("Call Status webhook failed:",S),_&&(_.textContent="\u2717"),b&&(b.style.color=n.amber),i.style.opacity="1",setTimeout(()=>{_&&(_.textContent=$),b&&(b.style.color=n.bone)},1800)}};if(t==="seller"&&d.value==="dead-deal"){let w=b?.textContent??"";ty(S=>{f(S)},()=>{b&&(b.textContent=w)});return}if(t==="seller"&&d.value==="appointment-booked"){let w=b?.textContent??"";try{(await N_({contactId:e,tenantId:g})).ok?await f():oy(()=>{f()},()=>{b&&(b.textContent=w)})}catch(S){m.warn("Appointment sanity check failed; firing anyway:",S),await f()}return}if(t==="buyer"&&(d.value==="not-interested"||d.value==="showed-interest")){await f(),Z_(d.value,{contactId:e,locationId:g,label:b,dispositionLabel:d.label});return}await f()}),l.appendChild(p)}),i.addEventListener("click",d=>{d.stopPropagation(),l.style.display=l.style.display==="none"?"block":"none"}),F_(),s.appendChild(i),s.appendChild(l),s},W_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",G_=async e=>{let t=await fetch(W_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,kind:e.kind,amount:e.amount,expires_at:e.expiresAt,triggered_by_user_id:e.userId,opp_id:e.oppId??void 0,property_record_id:e.propertyRecordId??void 0,asking_price:e.askingPrice??void 0}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},K_="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/list-for-contact",Ke=e=>(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),rc="ws-crm-ni-mt-picker",V_={"not-interested":{webhook:B_,eligible:()=>!0,guardStageName:"",title:"Which deals is this buyer out on?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"}. Closing moves them to \u201CLost - Withdrew\u201D \u2014 the buyer stays eligible for other properties.`,allLabel:"Not interested in ALL of them",goLabel:e=>e?`Close ${e} Selected`:"Close Selected",accent:n.crimson,accentGlow:n.crimsonGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} closed`:`${e}/${t} closed \u2014 retry the rest`},"showed-interest":{webhook:H_,eligible:(e,t,o)=>{let r=t.get(e.stageId);return r!==void 0&&o>=0&&r<o},guardStageName:"Showed Interest",title:"Which deals are they interested in?",sub:e=>`${e} open Marketing Tracker opp${e===1?"":"s"} can move to \u201CShowed Interest\u201D.`,allLabel:"Interested in ALL of them",goLabel:e=>e?`Move ${e} to Showed Interest`:"Move to Showed Interest",accent:n.emerald,accentGlow:n.emeraldGlow,doneNote:(e,t)=>e===t?`${e} deal${e===1?"":"s"} moved`:`${e}/${t} moved \u2014 retry the rest`}},Y_=async(e,t)=>{try{let o=await fetch(D_,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})});if(!o.ok)return null;let r=await o.json();if(!r?.ok)return null;let a=r.stages??[];return{opps:r.opps??[],stageIndexById:new Map(a.map(s=>[s.id,s.index])),stageIdxOf:s=>{let i=a.find(l=>l.name===s);return i?i.index:-1}}}catch{return null}},J_=async(e,t,o,r)=>{try{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,mt_opp_id:o,triggered_by_user_id:r??null})});return a.ok?(await a.json().catch(()=>({})))?.ok!==!1:!1}catch{return!1}},Q_=(e,t,o,r)=>{document.getElementById(rc)?.remove();let a=document.createElement("div");a.id=rc,a.style.cssText=`position:fixed;inset:0;z-index:100003;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let s=document.createElement("div");s.style.cssText=`width:min(520px,94vw);max-height:80vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${t.accent};border-radius:${v.lg};padding:22px 26px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let i=e.map(u=>`<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-ni-mt-cb" data-id="${Ke(u.id)}" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
        <span style="font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ke(u.name)}</span>
      </label>`).join("");s.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${t.accent};">${Ke(o)}</div>
    <div style="font-size:14px;font-weight:600;margin:4px 0 2px;">${Ke(t.title)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:10px;">${Ke(t.sub(e.length))}</div>
    <label style="display:flex;align-items:center;gap:10px;padding:9px 10px;margin-bottom:6px;background:${t.accentGlow};border:1px solid ${n.steel};border-radius:${v.md};cursor:pointer;">
      <input id="ws-ni-mt-all" type="checkbox" style="width:15px;height:15px;accent-color:${t.accent};flex-shrink:0;" />
      <span style="font-size:13px;font-weight:600;">${Ke(t.allLabel)}</span>
    </label>
    <div style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${v.md};min-height:60px;">${i}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-ni-mt-go" type="button" disabled style="background:${t.accent};color:${t.accent===n.emerald?n.obsidian:n.bone};border:none;border-radius:${v.sm};padding:8px 20px;cursor:pointer;font-size:13px;font-weight:600;font-family:${h.sans};opacity:0.5;">${Ke(t.goLabel(0))}</button>
    </div>`,a.appendChild(s),document.body.appendChild(a);let l=()=>[...s.querySelectorAll(".ws-ni-mt-cb")],d=s.querySelector("#ws-ni-mt-all"),c=s.querySelector("#ws-ni-mt-go"),p=()=>{let u=l().filter(b=>b.checked).length;c&&(c.disabled=u===0,c.style.opacity=u===0?"0.5":"1",c.textContent=t.goLabel(u)),d&&(d.checked=u===e.length)};d?.addEventListener("change",()=>{l().forEach(u=>{u.checked=!!d.checked}),p()}),s.addEventListener("change",p),a.addEventListener("click",u=>{u.target===a&&a.remove()}),c?.addEventListener("click",()=>{let u=l().filter(b=>b.checked).map(b=>b.getAttribute("data-id")||"").filter(Boolean);a.remove(),u.length&&r(u)})},Z_=async(e,t)=>{let o=V_[e],r=H(),a=c=>{if(!t.label)return;let p=t.dispositionLabel;t.label.textContent=`${p} \u2014 ${c}`,setTimeout(()=>{t.label&&t.label.textContent?.startsWith(`${p} \u2014 `)&&(t.label.textContent=p)},3e3)},s=await Y_(t.locationId,t.contactId);if(s===null){m.warn(`[${e}] MT opp lookup unavailable \u2014 disposition recorded, no opps touched`),a("recorded \u2014 couldn't check deals, re-click to retry");return}let i=o.guardStageName?s.stageIdxOf(o.guardStageName):-1,l=s.opps.filter(c=>o.eligible(c,s.stageIndexById,i));if(!l.length){m.info(`[${e}] no eligible open MT opps \u2014 record only`),s.opps.length&&a("no deals to move");return}let d=async c=>{let p=0;for(let u of c)await J_(o.webhook,t.locationId,u,r)&&p++;m.info(`[${e}] acted on ${p}/${c.length} MT opp(s)`),a(o.doneNote(p,c.length))};if(l.length===1){await d([l[0].id]);return}Q_(l,o,t.dispositionLabel,c=>{d(c)})},X_=async(e,t)=>{let o=await fetch(K_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,contact_id:t}),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();return(Array.isArray(r.properties)?r.properties:[]).filter(s=>s.has_acq_opp&&s.opp_id).map(s=>({oppId:String(s.opp_id),propertyRecordId:String(s.property_record_id||""),address:String(s.address||"(no address)"),dealStage:s.deal_stage||null,askingPrice:s.asking_price??null}))},ey=e=>new Promise(t=>{document.getElementById(Sn)?.remove();let o=document.createElement("div");o.id=Sn,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-deal-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
        <div style="font-size:14px;font-weight:500;">${Ke(i.address)}</div>
        ${i.dealStage?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${Ke(i.dealStage)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This seller has ${e.length} deals</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is this offer for?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-deal-cancel" type="button" style="${z} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-deal-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-deal-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),Zo=(e,t="seller",o)=>{document.getElementById(Sn)?.remove();let r=t==="seller",a=r?"Record Your Offer":"Record Buyer's Offer",s=r?"Attributes the offer to you for KPI tracking. Updates the ACQ opportunity's offer fields.":"Logs the buyer's offer on their Marketing Tracker card. Advances them to 'Made an Offer'.",i=r?n.emerald:n.amber,l=document.createElement("div");l.id=Sn,l.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let c=new Date,p=new Date(c.getTime()+5*24*60*60*1e3).toISOString().slice(0,10),u=r?`
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
        border-radius: ${v.sm};
        color: ${n.bone};
        font-family: ${h.sans};
        font-size: 14px;
        padding: 10px 12px;
        margin-bottom: 16px;
        outline: none;
        box-sizing: border-box;
      " />`:"",b=r&&o&&o.address?`<div style="font-size:12px;color:${n.bone};background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 10px;margin-bottom:16px;">Offer for: <strong>${Ke(o.address)}</strong></div>`:"",_=o&&o.askingPrice!=null&&Number(o.askingPrice)>0?String(Number(o.askingPrice)):"",y=r&&o&&o.propertyRecordId?`
    <label style="display:block;font-family:${h.mono};font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:${n.ash};margin-bottom:6px;">Seller's Asking Price <span style="text-transform:none;letter-spacing:0;color:${n.ash};">(optional)</span></label>
    <div style="display:flex;align-items:center;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:0 12px;margin-bottom:16px;">
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

    ${b}

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
      border-radius: ${v.sm};
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

    ${y}

    ${u}

    <div id="ws-offer-error" style="
      font-size: 11px;
      color: ${n.crimson};
      min-height: 16px;
      margin-bottom: 8px;
    "></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end;">
      <button id="ws-offer-cancel" type="button" style="
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-offer-submit" type="button" style="
        ${pe}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,l.appendChild(d),document.body.appendChild(l),$e(d.querySelector("#ws-offer-amount")),$e(d.querySelector("#ws-offer-asking"));let g=()=>l.remove();l.addEventListener("click",w=>{w.target===l&&g()});let x=d.querySelector("#ws-offer-error"),$=d.querySelector("#ws-offer-cancel"),f=d.querySelector("#ws-offer-submit");$?.addEventListener("click",g),f?.addEventListener("click",async()=>{let w=(d.querySelector("#ws-offer-amount")?.value??"").trim(),S=r?d.querySelector("#ws-offer-expires")?.value??"":"",T=he(w);if(!w||T<=0){x&&(x.textContent="Enter a positive offer amount."),m.warn("Offer Made submit blocked \u2014 invalid amount");return}if(T<100){x&&(x.textContent=`That looks low \u2014 did you mean $${(T*1e3).toLocaleString("en-US")}?`);return}let C=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),E=C?C[1]:null;if(!E){x&&(x.textContent="Couldn't resolve tenant from URL. Refresh and try again.");return}x&&(x.textContent=""),f&&(f.disabled=!0,f.textContent="Recording\u2026",f.style.opacity="0.7"),$&&($.disabled=!0);try{let L=(d.querySelector("#ws-offer-asking")?.value??"").trim(),A=L?he(L):null,M=await G_({tenantId:E,contactId:e,kind:t,amount:T,expiresAt:S||null,userId:H(),oppId:o?.oppId??null,propertyRecordId:o?.propertyRecordId??null,askingPrice:A&&A>0?A:null});if(!M.ok){x&&(x.textContent=M.error??"Something went wrong."),f&&(f.disabled=!1,f.textContent="Record Offer",f.style.opacity="1"),$&&($.disabled=!1);return}m.info(`Offer Made (${t}) recorded for contact ${e}: $${T} on ${M.opp_pipeline} opp (stage: ${M.opp_stage_name??"?"})`),g()}catch(L){m.error("Offer Made webhook failed",L),x&&(x.textContent=L instanceof Error?L.message:"Network error \u2014 try again."),f&&(f.disabled=!1,f.textContent="Record Offer",f.style.opacity="1"),$&&($.disabled=!1)}}),setTimeout(()=>{d.querySelector("#ws-offer-amount")?.focus()},0)},nc="ws-crm-dead-deal-modal",ty=(e,t)=>{document.getElementById(nc)?.remove();let o=document.createElement("div");o.id=nc,o.style.cssText=`
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
    border-radius: ${v.lg};
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
        border-radius: ${v.sm};
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
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-dead-submit" type="button" style="
        ${pe}
        padding: 8px 16px;
        font-size: 13px;
      ">Mark Dead</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>o.remove(),s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-dead-cancel")?.addEventListener("click",s);let i=()=>{let l=r.querySelector("#ws-dead-reason"),d=r.querySelector("#ws-dead-error"),c=(l?.value??"").trim();if(!c){d&&(d.textContent="Please enter a reason."),l?.focus();return}if(c.length<4){d&&(d.textContent="Please enter at least a few words."),l?.focus();return}a(),e(c)};r.querySelector("#ws-dead-submit")?.addEventListener("click",i),r.querySelector("#ws-dead-reason")?.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),i()),l.key==="Escape"&&s()}),setTimeout(()=>{r.querySelector("#ws-dead-reason")?.focus()},0)},ac="ws-crm-appointment-sanity-modal",oy=(e,t)=>{document.getElementById(ac)?.remove();let o=document.createElement("div");o.id=ac,o.style.cssText=`
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
    border-radius: ${v.lg};
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
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-appt-sanity-mark" type="button" style="
        ${pe}
        padding: 8px 16px;
        font-size: 13px;
        background: ${n.amber};
      ">Mark Anyway</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let a=()=>{document.removeEventListener("keydown",i),o.remove()},s=()=>{a(),t()};o.addEventListener("click",l=>{l.target===o&&s()}),r.querySelector("#ws-appt-sanity-cancel")?.addEventListener("click",s),r.querySelector("#ws-appt-sanity-mark")?.addEventListener("click",()=>{a(),e()});let i=l=>{l.key==="Escape"&&s()};document.addEventListener("keydown",i)},sc=(e,t)=>{let o=document.createElement("div");if(o.id=no,o.dataset.contactId=e,o.dataset.contactKind=t,o.style.cssText=`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: ${n.graphite};
    border-bottom: 1px solid ${n.steel};
    flex-shrink: 0;
  `,t==="seller"||t==="buyer"){let r=document.createElement("button");r.type="button",r.style.cssText=z,r.style.order="4",r.innerHTML=`
      <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
      <span>Offer Made</span>
    `,r.addEventListener("mouseenter",()=>{r.style.borderColor=n.emerald}),r.addEventListener("mouseleave",()=>{r.style.borderColor=n.steel}),r.addEventListener("click",async()=>{if(t!=="seller"){Zo(e,t);return}let a=window.location.pathname.match(/\/v2\/location\/([A-Za-z0-9]+)/),s=a?a[1]:null;if(!s){Zo(e,t);return}let i=r.innerHTML;r.disabled=!0,r.style.opacity="0.7",r.innerHTML="<span>Loading\u2026</span>";let l=()=>{r.innerHTML=i,r.disabled=!1,r.style.opacity="1"},d=[];try{d=await X_(s,e)}catch(p){m.warn("[offer-made] deal lookup failed, using legacy path",p),l(),Zo(e,t);return}if(l(),d.length<=1){Zo(e,t,d[0]);return}let c=await ey(d);c&&Zo(e,t,c)}),o.appendChild(r),o.appendChild(U_({contactId:e,kind:t}))}return o},Ds=!1,ic=()=>{document.querySelectorAll(`[id="${no}"]`).forEach(e=>e.remove())},bc=async()=>{if(m.debug("[actions-bar:01] ensureMounted called; url:",window.location.pathname),Ds){m.debug("[actions-bar:00-LOCKED] ensureMounted already in-flight \u2014 skip");return}Ds=!0;try{await ry()}finally{Ds=!1}},ry=async()=>{let e=W();if(!e){m.debug("[actions-bar:02-BAIL] no contact context (URL didn't match patterns AND no in-page contact link). URL:",window.location.pathname),ic();return}if(m.debug(`[actions-bar:02] ctx resolved \u2014 contactId=${e.contactId} locationId=${e.locationId??"(null)"} source=${e.source}`),e.source!=="url"){m.debug("[actions-bar:02-DOM] non-URL (Conversations) source \u2014 actions bar is contact-detail only; skipping"),ic();return}let t="seller";try{let d=await je(e.contactId,e.locationId),c=Ue(d);c==="buyer"?t="buyer":c==="other"&&(t="other"),m.debug(`[actions-bar:03] kind resolved \u2014 kind=${t} (raw type=${d??"(null)"})`)}catch(d){m.warn("[actions-bar:03-FAIL] Contact Type resolution threw \u2014 defaulting to seller:",d)}let o=W();if(!o||o.contactId!==e.contactId){m.debug("[actions-bar:04-BAIL] context changed during Contact Type fetch \u2014 aborting mount");return}let r=Array.from(document.querySelectorAll(`[id="${no}"]`));if(r.length===1&&r[0].dataset.contactId===e.contactId&&r[0].dataset.contactKind===t){m.debug(`[actions-bar:05-SKIP] bar already mounted for contact=${e.contactId} kind=${t} \u2014 no-op`);return}r.length>0&&(m.debug(`[actions-bar:05] removing ${r.length} stale bar(s) before remount`),r.forEach(d=>d.remove()));let a=await j_();if(!a){m.warn("[actions-bar:06-FAIL] findMountTarget returned null \u2014 no .central-panel or fallback selector matched within timeout. URL:",window.location.pathname);return}m.debug(`[actions-bar:06] mount target found \u2014 tagName=${a.tagName} class="${a.className}"`);let s=W();if(!s||s.contactId!==e.contactId){m.debug("[actions-bar:07-BAIL] context changed during findMountTarget wait \u2014 aborting mount");return}let i;try{i=sc(e.contactId,t)}catch(d){m.error("[actions-bar:08-FAIL] buildBar threw:",d);return}i.dataset.mountTarget=a.className||"central-panel";try{a.insertBefore(i,a.firstChild)}catch(d){m.error("[actions-bar:09-FAIL] insertBefore threw:",d);return}if(!document.getElementById(no)){m.warn("[actions-bar:10-DETACHED] bar inserted but not in document tree \u2014 target was likely re-rendered by Vue. Will retry next page-change.");return}m.debug(`[actions-bar:10-OK] bar mounted + verified in document for contact=${e.contactId} kind=${t}`),Cn?.disconnect(),Cn=new MutationObserver(()=>{if(!(W()?.contactId===e.contactId)){Cn?.disconnect();return}let c=document.querySelectorAll(`[id="${no}"]`);if(c.length>1){for(let p=1;p<c.length;p++)c[p].remove();m.debug(`[actions-bar:WATCHDOG] trimmed ${c.length-1} duplicate bar(s)`);return}if(c.length===0){let p=document.querySelector(".central-panel")||a,u=sc(e.contactId,t);u.dataset.mountTarget=i.dataset.mountTarget??"";try{p.insertBefore(u,p.firstChild),m.debug(`[actions-bar:WATCHDOG] re-mounted after wipe for ${e.contactId}`)}catch(b){m.warn("[actions-bar:WATCHDOG-FAIL] re-mount threw:",b)}}}),Cn.observe(a,{childList:!0})},Cn=null,lc=null,ny=()=>{lc===null&&(lc=window.setInterval(()=>{let e=W();e&&(document.getElementById(no)||(m.debug("[actions-bar:HEALER] no bar on contact page \u2014 re-triggering mount for",e.contactId),bc()))},3e3))},uc=()=>{ny(),bc()};var Ln="https://assets.cdn.filesafe.space/ZqGLfSMNKm26UQP7ENj1/media/6a08c6430a69f1e766a71d54.png",ay=new Set(["icon","shortcut icon","apple-touch-icon","apple-touch-icon-precomposed","mask-icon"]),Xo="data-ws-crm-favicon",Rs=e=>e.hasAttribute(Xo),hc=e=>{if(e.tagName!=="LINK")return!1;let t=(e.getAttribute("rel")??"").toLowerCase();return ay.has(t)},An=()=>{document.head.querySelectorAll("link[rel]").forEach(r=>{hc(r)&&!Rs(r)&&r.remove()});let t=document.head.querySelector(`link[${Xo}="1"]`);t?t.href!==Ln&&(t.href=Ln):(t=document.createElement("link"),t.setAttribute(Xo,"1"),t.rel="icon",t.type="image/png",t.href=Ln,document.head.appendChild(t),m.debug("Favicon installed"));let o=document.head.querySelector(`link[${Xo}="apple"]`);o||(o=document.createElement("link"),o.setAttribute(Xo,"apple"),o.rel="apple-touch-icon",o.href=Ln,document.head.appendChild(o))},_c=()=>{if(window.__reosFaviconInstalled)return;if(window.__reosFaviconInstalled=!0,document.head)An();else{let r=window.setInterval(()=>{document.head&&(window.clearInterval(r),An())},50)}new MutationObserver(r=>{let a=!1;for(let s of r)s.addedNodes.forEach(i=>{i instanceof HTMLLinkElement&&hc(i)&&!Rs(i)&&(a=!0)}),s.removedNodes.forEach(i=>{i instanceof HTMLLinkElement&&Rs(i)&&(a=!0)});a&&An()}).observe(document.head,{childList:!0,subtree:!1});let t=0,o=window.setInterval(()=>{t+=1,An(),t>=5&&window.clearInterval(o)},1e3)};var sy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/offer-made/set",Be="ws-crm-mt-offer-made-button",yc="ws-crm-mt-offer-made-modal",iy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,ly=/\/v2\/location\/([A-Za-z0-9]+)/,On=()=>{let e=window.location.pathname,t=e.match(iy),o=t?t[1]:Le();if(!o)return null;let r=e.match(ly);return{oppId:o,locationId:r?r[1]:null}},dy=async e=>{let t=await fetch(sy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,kind:"buyer",amount:e.amount,triggered_by_user_id:e.userId}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Mn=()=>{document.getElementById(yc)?.remove()},cy=e=>{Mn();let t=document.createElement("div");t.id=yc,t.style.cssText=`
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
    border-radius: ${v.lg};
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
      border-radius: ${v.sm};
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
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
      <button id="ws-mt-offer-submit" type="button" style="
        ${pe}
        padding: 8px 16px;
        font-size: 13px;
      ">Record Offer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-mt-offer-amount"),a=o.querySelector("#ws-mt-offer-error"),s=o.querySelector("#ws-mt-offer-cancel"),i=o.querySelector("#ws-mt-offer-submit");$e(r),setTimeout(()=>r?.focus(),50);let l=d=>{d.key==="Enter"?(d.preventDefault(),i?.click()):d.key==="Escape"&&(d.preventDefault(),s?.click())};o.addEventListener("keydown",l),t.addEventListener("click",d=>{d.target===t&&Mn()}),s?.addEventListener("click",()=>Mn()),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let d=r.value.trim(),c=he(d);if(!d||c<=0){a.textContent="Enter a positive offer amount.",r.focus();return}if(c<100){a.textContent=`That looks low \u2014 did you mean $${(c*1e3).toLocaleString("en-US")}?`,r.focus();return}a.textContent="",i.disabled=!0,i.textContent="Recording\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{let p=await dy({oppId:e.oppId,locationId:e.locationId,amount:c,userId:H()});if(!p.ok){a.textContent=p.error??"Something went wrong.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1);return}Mn(),e.onSuccess()}catch(p){m.error("MT Offer Made webhook failed",p),a.textContent=p instanceof Error?p.message:"Network error \u2014 try again.",i.disabled=!1,i.textContent="Record Offer",i.style.opacity="1",s&&(s.disabled=!1)}})},py=e=>{let t=document.createElement("button");return t.id=Be,t.type="button",t.dataset.oppId=e,t.style.cssText=z,t.title="Record this buyer's offer on the property and advance to 'Made an Offer'",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=On();!o||!o.locationId||o.oppId!==e||cy({oppId:o.oppId,locationId:o.locationId,onSuccess:()=>{let r=t.querySelector(".ws-mt-om-label");r&&(r.textContent="Offer Recorded"),t.style.background=n.emeraldGlow,t.style.color=n.emeraldBright,t.style.borderColor=n.emeraldBorder,setTimeout(()=>{r&&r.textContent==="Offer Recorded"&&(r.textContent="Mark Offer Made",t.style.cssText=z)},4e3)}})}),t},my=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],by=async()=>{for(let e of my)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},In=!1,Fs=async()=>{if(!In){In=!0;try{await uy()}finally{In=!1}}},uy=async()=>{let e=On();if(!e||!e.locationId){document.getElementById(Be)?.remove(),document.getElementById(`${Be}-wrap`)?.remove(),tr();return}let t=document.getElementById(Be);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Be}-wrap`)?.remove(),tr());return}t&&(t.remove(),document.getElementById(`${Be}-wrap`)?.remove());let o=await by();if(!o){m.warn("MT Offer Made: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await se();if(r!=="Marketing Tracker"){m.debug(`[mt-offer] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=On();if(!a||a.oppId!==e.oppId)return;let s=py(e.oppId),i=document.createElement("span");i.id=`${Be}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 1;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted MT Offer Made button on opp ${e.oppId}`),hy(e.oppId)},er=null,Ns=null,ao,tr=()=>{er?.disconnect(),er=null,Ns=null,ao!==void 0&&(window.clearTimeout(ao),ao=void 0)},hy=e=>{if(er&&Ns===e)return;tr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Ns=e,er=new MutationObserver(()=>{ao===void 0&&(ao=window.setTimeout(()=>{ao=void 0;let o=On();if(!o||o.oppId!==e){tr();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Be)?.remove(),document.getElementById(`${Be}-wrap`)?.remove(),tr();return}document.getElementById(Be)||Fs()},250))}),er.observe(t,{childList:!0,subtree:!0}))},_y=()=>{oe("mt-offer-made",ae,()=>{!document.getElementById(Be)&&!In&&Fs()})},vc=()=>{_y(),Fs()};var yy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/not-interested",He="ws-crm-not-interested-button",vy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,gy=/\/v2\/location\/([A-Za-z0-9]+)/,Bn=()=>{let e=window.location.pathname,t=e.match(vy),o=t?t[1]:Le();if(!o)return null;let r=e.match(gy);return{oppId:o,locationId:r?r[1]:null}},fy=async e=>{let t=await fetch(yy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Not Interested webhook returned ${t.status} ${t.statusText}`);return await t.json()},xy=e=>{let t=document.createElement("button");return t.id=He,t.type="button",t.dataset.oppId=e,t.style.cssText=z,t.title="Close this Marketing Tracker opp as Not Interested for THIS property only",t.innerHTML=`
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
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",async()=>{let o=Bn();if(!o||!o.locationId||o.oppId!==e)return;let r=H(),a=t.querySelector(".ws-ni-label");t.disabled=!0,t.style.opacity="0.7",a&&(a.textContent="Closing\u2026");try{let s=await fy({oppId:o.oppId,locationId:o.locationId,userId:r});if(s?.ok)a&&(a.textContent="Marked Not Interested"),t.style.background=n.crimsonGlow,t.style.color=n.crimson,m.info(`Not Interested set for opp ${e} \u2192 ${s.new_stage}`);else throw new Error("Webhook returned ok=false")}catch(s){m.error("Not Interested webhook failed",s),a&&(a.textContent="Try again"),t.disabled=!1,t.style.opacity="1",setTimeout(()=>{a&&a.textContent==="Try again"&&(a.textContent="Mark Not Interested")},3e3)}}),t},wy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],ky=async()=>{for(let e of wy)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Pn=!1,qs=async()=>{if(!Pn){Pn=!0;try{await Ey()}finally{Pn=!1}}},Ey=async()=>{let e=Bn();if(!e||!e.locationId){document.getElementById(He)?.remove(),document.getElementById(`${He}-wrap`)?.remove(),rr();return}let t=document.getElementById(He);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${He}-wrap`)?.remove(),rr());return}t&&(t.remove(),document.getElementById(`${He}-wrap`)?.remove());let o=await ky();if(!o){m.warn("Not Interested: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await se();if(r!=="Marketing Tracker"){m.debug(`[not-interested] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Bn();if(!a||a.oppId!==e.oppId)return;let s=xy(e.oppId),i=document.createElement("span");i.id=`${He}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted Not Interested button on opp ${e.oppId}`),$y(e.oppId)},or=null,zs=null,rr=()=>{or?.disconnect(),or=null,zs=null},$y=e=>{if(or&&zs===e)return;rr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(zs=e,or=new MutationObserver(()=>{let o=Bn();if(!o||o.oppId!==e){rr();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(He)?.remove(),document.getElementById(`${He}-wrap`)?.remove(),rr();return}document.getElementById(He)||qs()}),or.observe(t,{childList:!0,subtree:!0}))},Ty=()=>{oe("not-interested",ae,()=>{!document.getElementById(He)&&!Pn&&qs()})},gc=()=>{Ty(),qs()};var Cy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/walkthrough/rep-schedule",Ae="ws-crm-schedule-walkthrough-button",js="ws-crm-schedule-walkthrough-modal",Sy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Ly=/\/v2\/location\/([A-Za-z0-9]+)/,Rn=()=>{let e=window.location.pathname,t=e.match(Sy),o=t?t[1]:Le();if(!o)return null;let r=e.match(Ly);return{oppId:o,locationId:r?r[1]:null}},Hn=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${h.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Ay=(e,t)=>{document.getElementById(js)?.remove();let o=document.createElement("div");o.id=js,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:420px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`;r.innerHTML=`
    <style>#${js} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
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
      <button id="wsw-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wsw-submit" type="button" style="${pe}">Schedule</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let i=()=>o.remove();o.addEventListener("click",d=>{d.target===o&&i()}),document.getElementById("wsw-cancel")?.addEventListener("click",i);let l=document.getElementById("wsw-submit");l?.addEventListener("click",async()=>{let d=document.getElementById("wsw-dt")?.value||"",c=document.getElementById("wsw-dur")?.value||"30";if(!d){Hn("Pick a date and time.","err");return}let p=new Date(d).toISOString();l.disabled=!0,l.textContent="Scheduling\u2026";try{if((await fetch(Cy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,start_time:p,duration_min:Number(c)}),credentials:"omit"})).ok){i(),Hn("Walkthrough scheduled \u2713");let b=document.querySelector(`#${Ae} .ws-sw-label`);b&&(b.textContent="Walkthrough Scheduled")}else l.disabled=!1,l.textContent="Schedule",Hn("Scheduling failed \u2014 try again.","err")}catch(u){m.warn("[schedule-walkthrough] failed:",u),l.disabled=!1,l.textContent="Schedule",Hn("Couldn't reach the scheduler. Try again.","err")}})},My=e=>{let t=document.createElement("button");return t.id=Ae,t.type="button",t.dataset.oppId=e,t.style.cssText=z,t.title="Schedule this buyer's property walkthrough",t.innerHTML=`
    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};box-shadow:0 0 6px ${n.emerald};flex-shrink:0;"></span>
    <span class="ws-sw-label">Schedule Walkthrough</span>
  `,t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)"}),t.addEventListener("click",()=>{let o=Rn();!o||!o.locationId||o.oppId!==e||Ay(o.oppId,o.locationId)}),t},Iy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],Oy=async()=>{for(let e of Iy)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Dn=!1,Ws=async()=>{if(!Dn){Dn=!0;try{await Py()}finally{Dn=!1}}},Py=async()=>{let e=Rn();if(!e||!e.locationId){document.getElementById(Ae)?.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),ar();return}let t=document.getElementById(Ae);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),ar());return}t&&(t.remove(),document.getElementById(`${Ae}-wrap`)?.remove());let o=await Oy();if(!o){m.warn("Schedule Walkthrough: no opp-header mount target found \u2014 skipping mount");return}let r=await se();if(r!=="Marketing Tracker"){m.debug(`[schedule-walkthrough] gated off \u2014 pipeline="${r}"`);return}let a=Rn();if(!a||a.oppId!==e.oppId)return;let s=My(e.oppId),i=document.createElement("span");i.id=`${Ae}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 0;
    flex-shrink: 0;
    vertical-align: middle;
  `,i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted Schedule Walkthrough button on opp ${e.oppId}`),By(e.oppId)},nr=null,Us=null,so,ar=()=>{nr?.disconnect(),nr=null,Us=null,so!==void 0&&(window.clearTimeout(so),so=void 0)},By=e=>{if(nr&&Us===e)return;ar();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Us=e,nr=new MutationObserver(()=>{so===void 0&&(so=window.setTimeout(()=>{so=void 0;let o=Rn();if(!o||o.oppId!==e){ar();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(Ae)?.remove(),document.getElementById(`${Ae}-wrap`)?.remove(),ar();return}document.getElementById(Ae)||Ws()},250))}),nr.observe(t,{childList:!0,subtree:!0}))},Hy=()=>{oe("schedule-walkthrough",ae,()=>{!document.getElementById(Ae)&&!Dn&&Ws()})},fc=()=>{Hy(),Ws()};var Dy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/resend-deal-link",io="ws-crm-resend-deal-link-wrap",Ry=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Ny=/\/v2\/location\/([A-Za-z0-9]+)/,Fn=()=>{let e=window.location.pathname,t=e.match(Ry),o=t?t[1]:Le();if(!o)return null;let r=e.match(Ny);return{oppId:o,locationId:r?r[1]:null}},Fy=async e=>{let t=await fetch(Dy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,mt_opp_id:e.oppId,channel:e.channel,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Resend webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);return Array.isArray(r)?r[0]:r}catch{return{}}},zy=e=>e.replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t]||t),xc=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Ks=(e,t)=>{e.innerHTML="";let o=document.createElement("button");o.type="button",o.style.cssText=z,o.title="Resend this property's deal-page link to the buyer via text or email",o.innerHTML=`${xc(n.emerald)}<span>Resend Deal Link</span>`,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>qy(e,t)),e.appendChild(o)},qy=(e,t)=>{e.innerHTML="";let o=document.createElement("span");o.style.cssText="display:inline-flex;align-items:center;gap:8px;";let r=document.createElement("span");r.textContent="Resend via:",r.style.cssText=`color:${n.ash};font-size:13px;`,o.appendChild(r);let a=`display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:6px 12px;border-radius:6px;background:${n.emeraldGlow};border:1px solid ${n.emeraldBorder};color:${n.emerald};`,s=(l,d)=>{let c=document.createElement("button");return c.type="button",c.textContent=l,c.style.cssText=a,c.addEventListener("click",()=>void jy(e,t,d,o)),c};o.appendChild(s("Text","sms")),o.appendChild(s("Email","email"));let i=document.createElement("button");i.type="button",i.textContent="\u2715",i.title="Cancel",i.style.cssText=`cursor:pointer;background:transparent;border:none;color:${n.ash};font-size:14px;padding:4px;`,i.addEventListener("click",()=>Ks(e,t)),o.appendChild(i),e.appendChild(o)},jy=async(e,t,o,r)=>{let a=Fn();if(!(!a||!a.locationId||a.oppId!==t)){r.innerHTML=`<span style="color:${n.ash};font-size:13px;">Sending ${o==="sms"?"text":"email"}\u2026</span>`;try{let s=await Fy({oppId:a.oppId,locationId:a.locationId,channel:o,userId:H()});if(s?.ok)r.innerHTML=`${xc(n.emerald)}<span style="color:${n.emerald};font-size:13px;font-weight:600;">${o==="sms"?"Text":"Email"} sent</span>`,m.info(`Resend deal link (${o}) for opp ${t}`);else throw new Error(s?.error||"Send failed")}catch(s){let i=s instanceof Error?s.message:"Send failed";m.error("Resend deal link failed",s),r.innerHTML=`<span style="color:${n.crimson};font-size:13px;">${zy(i)}</span>`}window.setTimeout(()=>Ks(e,t),3500)}},Uy=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Wy=async()=>{for(let e of Uy)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Nn=!1,Vs=async()=>{if(!Nn){Nn=!0;try{await Gy()}finally{Nn=!1}}},Gy=async()=>{let e=Fn();if(!e||!e.locationId){document.getElementById(io)?.remove(),ir();return}let t=document.getElementById(io);if(t&&t.dataset.oppId===e.oppId){let i=G();i!==null&&i!=="Marketing Tracker"&&(t.remove(),ir());return}t&&t.remove();let o=await Wy();if(!o)return;let r=await se();if(r!=="Marketing Tracker"){m.debug(`[resend-deal] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=Fn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=io,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:2;flex-shrink:0;vertical-align:middle;",re(o).appendChild(s),Ks(s,e.oppId),m.debug(`Mounted Resend Deal Link button on opp ${e.oppId}`),Ky(e.oppId)},sr=null,Gs=null,ir=()=>{sr?.disconnect(),sr=null,Gs=null},Ky=e=>{if(sr&&Gs===e)return;ir();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Gs=e,sr=new MutationObserver(()=>{let o=Fn();if(!o||o.oppId!==e){ir();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(io)?.remove(),ir();return}document.getElementById(io)||Vs()}),sr.observe(t,{childList:!0,subtree:!0}))},Vy=()=>{oe("resend-deal-link",ae,()=>{!document.getElementById(io)&&!Nn&&Vs()})},wc=()=>{Vy(),Vs()};var Yy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/referred",Jy="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/buyer/mt-opps",po="ws-crm-add-referral-wrap",zn="ws-crm-add-referral-contact-btn",Js="ws-crm-contact-actions-bar",Me="ws-referral-modal",Qy=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Zy=/\/v2\/location\/([A-Za-z0-9]+)/,et=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),$c=e=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};box-shadow:0 0 6px ${e};flex-shrink:0;"></span>`,Xy=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;opacity:0;pointer-events:none;",document.body.appendChild(t),t.select();let o=document.execCommand("copy");return t.remove(),o}catch{return!1}},ev=e=>{let t=e.trim();if(!t)return{ok:!0,value:""};let o=t.replace(/\D/g,"");return o.length===11&&o.startsWith("1")&&(o=o.slice(1)),o.length!==10?{ok:!1,value:""}:{ok:!0,value:`+1${o}`}},Ot=`width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;`,lo=e=>`<div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">${e}</div>`,Xs=e=>{document.getElementById(Me)?.remove();let t=document.createElement("div");t.id=Me,t.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let r=e.propertyLabel?`<div style="font-size: 12px; color: ${n.emeraldBright}; margin-bottom: 14px;">Property: ${et(e.propertyLabel)}</div>`:'<div style="margin-bottom: 14px;"></div>';o.innerHTML=`
    <style id="ws-referral-modal-style">
      #${Me} input::placeholder,
      #${Me} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      #${Me} input:-webkit-autofill,
      #${Me} input:-webkit-autofill:hover,
      #${Me} input:-webkit-autofill:focus,
      #${Me} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
      #${Me} input[type="checkbox"] { accent-color: ${n.emerald}; width: 15px; height: 15px; cursor: pointer; }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Add Referral Buyer</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 6px;">Creates the buyer, links them to this property's Marketing Tracker, and gets their personalized deal link. Re-adding the same person just returns their existing link.</div>
    ${r}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${lo("First Name *")}
        <input id="ws-ref-first" type="text" autocomplete="off" placeholder="Jane" style="${Ot}">
      </div>
      <div>
        ${lo("Last Name")}
        <input id="ws-ref-last" type="text" autocomplete="off" placeholder="Doe" style="${Ot}">
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        ${lo("Phone")}
        <input id="ws-ref-phone" type="tel" autocomplete="off" placeholder="(555) 555-0100" style="${Ot}">
      </div>
      <div>
        ${lo("Email")}
        <input id="ws-ref-email" type="email" autocomplete="off" placeholder="jane@company.com" style="${Ot}">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      ${lo("Buyer Status")}
      <select id="ws-ref-status" style="${Ot} cursor: pointer;">
        <option value="Unqualified" selected>Unqualified (partial address on deal page)</option>
        <option value="Qualified">Qualified (full address on deal page)</option>
      </select>
    </div>

    <div style="margin-bottom: 14px;">
      ${lo("Note (optional)")}
      <textarea id="ws-ref-note" rows="2" autocomplete="off" placeholder="e.g. Husband makes the buying decisions \u2014 wife is on the deed" style="${Ot} resize: vertical;"></textarea>
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
      <button id="ws-ref-cancel" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Cancel</button>
      <button id="ws-ref-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Add Buyer</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),Jt(o),t.addEventListener("click",c=>{c.target===t&&t.remove()}),o.querySelector("#ws-ref-cancel")?.addEventListener("click",()=>t.remove());let a=o.querySelector("#ws-ref-first"),s=o.querySelector("#ws-ref-phone"),i=o.querySelector("#ws-ref-email"),l=o.querySelector("#ws-ref-send-label");window.setTimeout(()=>a?.focus(),0);let d=()=>{if(!l)return;let c=!!s?.value.trim(),p=!!i?.value.trim();l.textContent=!c&&p?"Email them the link now":"Text them the link now"};s?.addEventListener("input",d),i?.addEventListener("input",d),o.querySelector("#ws-ref-submit")?.addEventListener("click",async()=>{let c=o.querySelector("#ws-ref-err"),p=k=>{c&&(c.textContent=k)};p("");let u=(a?.value||"").trim(),b=(o.querySelector("#ws-ref-last")?.value||"").trim(),_=(s?.value||"").trim(),y=(i?.value||"").trim().toLowerCase(),g=o.querySelector("#ws-ref-status")?.value||"Unqualified",x=(o.querySelector("#ws-ref-note")?.value||"").trim(),$=o.querySelector("#ws-ref-send")?.checked??!0,f=o.querySelector("#ws-ref-close")?.checked??!1;if(!u){p("First name is required.");return}let w=ev(_);if(!w.ok){p("Phone must be a 10-digit US number.");return}if(y&&!/.+@.+\..+/.test(y)){p("That email doesn't look valid.");return}if(!w.value&&!y){p("Add a phone or an email for the new buyer.");return}let S=o.querySelector("#ws-ref-submit");S&&(S.disabled=!0,S.textContent="Adding\u2026",S.style.opacity="0.7");let T=()=>{S&&(S.disabled=!1,S.textContent="Add Buyer",S.style.opacity="1")};try{let k=await fetch(Yy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,referring_mt_opp_id:e.referringOppId,referred:{first_name:u,last_name:b,phone:w.value,email:y,buyer_status:g,note:x},send_link:$,close_original:f,triggered_by_user_id:H()||""}),credentials:"omit"});if(!k.ok)throw new Error(`Webhook returned ${k.status} ${k.statusText}`);let C=await k.json(),E=Array.isArray(C)?C[0]:C;if(!E?.ok){p(E?.error||"Something went wrong \u2014 try again."),T();return}m.info(`Referral buyer added (opp ${E.mt_opp_id||"?"})`),tv(o,E,e,`${u} ${b}`.trim())}catch(k){m.error("Add referral buyer failed",k),p(`Network error: ${k instanceof Error?k.message:"request failed"}`),T()}})},co=(e,t)=>{let o=t==="good"?n.emerald:t==="warn"?n.amber:n.ash;return`<span style="display:inline-flex;align-items:center;gap:6px;background:${t==="good"?n.emeraldGlow:"transparent"};border:1px solid ${o};border-radius:999px;padding:4px 12px;font-size:12px;color:${o};margin:0 6px 6px 0;">${e}</span>`},tv=(e,t,o,r)=>{let a=[];t.contact_created===!1&&a.push(co("Existing buyer \u2014 profile reused","info")),t.mt_opp_deduped?a.push(co(`Existing deal reused${t.mt_opp_stage?` \u2014 ${et(t.mt_opp_stage)}`:""}`,"info")):t.mt_opp_created&&a.push(co(`Deal created${t.mt_opp_stage?` \u2014 ${et(t.mt_opp_stage)}`:""}`,"good")),t.sent?a.push(co(t.sent_channel==="email"?"Email sent \u2713":"Text sent \u2713","good")):t.send_error&&a.push(co(`Not sent \u2014 ${et(t.send_error)}`,"warn")),t.original_closed&&a.push(co("Original buyer's deal closed (Lost - Withdrew)","info"));let s=(t.warnings||[]).map(d=>`<div style="font-size:11px;color:${n.ash};margin-top:4px;">\xB7 ${et(d)}</div>`).join(""),i=t.link?`
      <div style="margin: 16px 0 4px;">
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Their personalized deal link</div>
        <span style="display:flex;gap:8px;align-items:center;">
          <input id="ws-ref-link" type="text" readonly value="${et(t.link)}" style="${Ot} flex:1; font-family:${h.mono}; font-size:12px;">
          <button id="ws-ref-copy" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 16px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600; flex-shrink:0;">Copy</button>
        </span>
      </div>`:`<div style="margin: 16px 0 4px; color:${n.amber}; font-size:13px;">No deal link available \u2014 check the property's landing page setup.</div>`;e.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Referral Added</div>
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 10px;">${et(r||"Buyer")} is set up</div>
    <div style="line-height: 1;">${a.join("")}</div>
    ${s}
    ${i}
    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px;">
      <button id="ws-ref-another" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Add Another</button>
      <button id="ws-ref-done" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Done</button>
    </div>
  `,e.querySelector("#ws-ref-done")?.addEventListener("click",()=>{document.getElementById(Me)?.remove()}),e.querySelector("#ws-ref-another")?.addEventListener("click",()=>{Xs(o)});let l=e.querySelector("#ws-ref-copy");l?.addEventListener("click",async()=>{let d=await Xy(t.link||"");l.textContent=d?"Copied \u2713":"Copy failed",window.setTimeout(()=>{l.textContent="Copy"},2e3)})},ov=e=>new Promise(t=>{document.getElementById(Me)?.remove();let o=document.createElement("div");o.id=Me,o.style.cssText=`position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:min(460px,92vw);max-height:80vh;overflow-y:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 12px 32px rgba(0,0,0,0.5);`;let a=e.map((i,l)=>`
      <button type="button" class="ws-ref-pick" data-i="${l}" style="display:block;width:100%;text-align:left;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};padding:12px 14px;margin-bottom:8px;cursor:pointer;color:${n.bone};font-family:${h.sans};">
        <div style="font-size:14px;font-weight:500;">${et(i.property_address||"(no address)")}</div>
        ${i.stage_name?`<div style="font-size:11px;color:${n.ash};margin-top:3px;">${et(i.stage_name)}</div>`:""}
      </button>`).join("");r.innerHTML=`
      <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Pick a Property</div>
      <div style="font-size:18px;font-weight:500;margin-bottom:4px;">This buyer is on ${e.length} properties</div>
      <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.4;">Which property is the referral about?</div>
      <div>${a}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button id="ws-ref-pick-cancel" type="button" style="${z} padding:8px 16px;font-size:13px;">Cancel</button>
      </div>`,o.appendChild(r),document.body.appendChild(o);let s=i=>{o.remove(),t(i)};o.addEventListener("click",i=>{i.target===o&&s(null)}),r.querySelector("#ws-ref-pick-cancel")?.addEventListener("click",()=>s(null)),r.querySelectorAll(".ws-ref-pick").forEach(i=>{i.addEventListener("click",()=>s(e[Number(i.dataset.i)]??null))})}),qn=()=>{let e=window.location.pathname,t=e.match(Qy),o=t?t[1]:Le();if(!o)return null;let r=e.match(Zy);return{oppId:o,locationId:r?r[1]:null}},rv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],nv=async()=>{for(let e of rv)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},jn=!1,Qs=async()=>{if(!jn){jn=!0;try{await av()}finally{jn=!1}}},av=async()=>{let e=qn();if(!e||!e.locationId){document.getElementById(po)?.remove(),dr();return}let t=document.getElementById(po);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Marketing Tracker"&&(t.remove(),dr());return}t&&t.remove();let o=await nv();if(!o)return;let r=await se();if(r!=="Marketing Tracker"){m.debug(`[add-referral] gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=qn();if(!a||a.oppId!==e.oppId)return;let s=document.createElement("span");s.id=po,s.dataset.oppId=e.oppId,s.style.cssText="display:inline-flex;align-items:center;order:3;flex-shrink:0;vertical-align:middle;";let i=document.createElement("button");i.type="button",i.style.cssText=z,i.title="The buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal for this property and gets their personalized link",i.innerHTML=`${$c(n.amber)}<span>Add Referral Buyer</span>`,i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-1px)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)"}),i.addEventListener("click",()=>{let l=qn();!l||!l.locationId||Xs({tenantId:l.locationId,referringOppId:l.oppId})}),s.appendChild(i),re(o).appendChild(s),m.debug(`Mounted Add Referral Buyer button on opp ${e.oppId}`),sv(e.oppId)},lr=null,Zs=null,dr=()=>{lr?.disconnect(),lr=null,Zs=null},sv=e=>{if(lr&&Zs===e)return;dr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Zs=e,lr=new MutationObserver(()=>{let o=qn();if(!o||o.oppId!==e){dr();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(po)?.remove(),dr();return}document.getElementById(po)||Qs()}),lr.observe(t,{childList:!0,subtree:!0}))},kc=(e,t)=>{let o=e.querySelector("span");if(!o)return;let r=e.style.color;o.textContent=t.length>72?`${t.slice(0,69)}\u2026`:t,e.style.color=n.crimson,window.setTimeout(()=>{o.textContent="Add Referral Buyer",e.style.color=r},4500)},iv=async e=>{let t=W();if(!t||!t.locationId)return;let o=e.querySelector("span");o&&(o.textContent="Loading deals\u2026"),e.disabled=!0;try{let r=await fetch(`${Jy}?tenant_id=${encodeURIComponent(t.locationId)}&contact_id=${encodeURIComponent(t.contactId)}`,{credentials:"omit"}),a=await r.json(),s=Array.isArray(a)?a[0]:a;if(!s?.ok)throw new Error(s?.error||`Lookup failed (${r.status})`);let i=s.opps||[];if(o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,!i.length){kc(e,"No open Marketing Tracker deals for this buyer");return}let l=i.length===1?i[0]:await ov(i);if(!l)return;Xs({tenantId:t.locationId,referringOppId:l.mt_opp_id,propertyLabel:l.property_address})}catch(r){m.error("Add referral buyer lookup failed",r),o&&(o.textContent="Add Referral Buyer"),e.disabled=!1,kc(e,r instanceof Error?r.message:"Lookup failed")}},Ys=!1,Tc=async()=>{if(!Ys){Ys=!0;try{await lv()}finally{Ys=!1}}},lv=async()=>{if(!W())return;let t=document.getElementById(Js);if(!t)try{t=await N(`#${Js}`,{timeoutMs:$t+2e3})}catch{t=null}if(!t)return;if(t.dataset.contactKind!=="buyer"){document.getElementById(zn)?.remove();return}let o=W();if(!o||!o.locationId)return;let r=document.getElementById(zn);if(r&&r.dataset.contactId===o.contactId&&r.parentElement===t)return;r?.remove();let a=document.createElement("button");a.type="button",a.id=zn,a.dataset.contactId=o.contactId,a.style.cssText=z,a.style.order="6",a.title="This buyer referred you to someone else? Add that person \u2014 creates their contact + Marketing Tracker deal and gets their personalized link",a.innerHTML=`${$c(n.amber)}<span>Add Referral Buyer</span>`,a.addEventListener("click",()=>void iv(a)),t.appendChild(a),m.debug(`Mounted Add Referral Buyer on buyer contact ${o.contactId}`)},Ec=!1,dv=()=>{Ec||(Ec=!0,window.setInterval(()=>{let e=document.getElementById(Js);!e||e.dataset.contactKind!=="buyer"||document.getElementById(zn)||Tc()},3e3))},Cc=()=>{oe("add-referral-buyer",ae,()=>{!document.getElementById(po)&&!jn&&Qs()}),Qs(),Tc(),dv()};var cv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/listing-price-changed",pv="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",De="ws-crm-reduce-price-button",Sc="ws-crm-reduce-price-modal",mv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,bv=/\/v2\/location\/([A-Za-z0-9]+)/,Gn=()=>{let e=window.location.pathname,t=e.match(mv);if(!t)return null;let o=e.match(bv);return{oppId:t[1],locationId:o?o[1]:null}},uv=async e=>{let t=await fetch(cv,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,dispo_opp_id:e.oppId,new_price:e.newPrice,triggered_by_user_id:e.userId??null}),credentials:"omit"});if(!t.ok)throw new Error(`Reduce Price webhook returned ${t.status} ${t.statusText}`);let o=await t.text();try{let r=JSON.parse(o);if(r?.ok===!1&&r?.error)throw new Error(r.error);return r}catch(r){if(r instanceof Error&&/returned/.test(r.message))throw r;return{}}},hv=async(e,t)=>{try{let o=new URL(pv);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.total_will_text=="number"?a.total_will_text:null}catch(o){return m.warn("[reduce-price] buyer-count fetch failed:",o),null}},_v=(e,t)=>{let o=t!==null?`${t} buyer${t===1?"":"s"}`:"all eligible buyers";return`Confirm that you wish to reduce the price of this property to $${Math.round(e).toLocaleString("en-US")} and resend it to ${o}.

Every one of them gets the new-price SMS immediately. This cannot be reversed.`},Un=()=>{document.getElementById(Sc)?.remove()},yv=e=>{Un();let t=document.createElement("div");t.id=Sc,t.style.cssText=`
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
    border-radius: ${v.lg};
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
          border-radius: ${v.sm};
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
        border-radius: ${v.sm};
        font-family: ${h.sans};
        font-size: 13px;
        cursor: pointer;
      ">Cancel</button>
      <button id="ws-reduce-submit" type="button" style="
        background: ${n.amber};
        border: 1px solid ${n.amber};
        color: ${n.obsidian};
        padding: 8px 16px;
        border-radius: ${v.sm};
        font-family: ${h.sans};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      ">Reduce Price</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-reduce-price-input"),a=o.querySelector("#ws-reduce-error"),s=o.querySelector("#ws-reduce-cancel"),i=o.querySelector("#ws-reduce-submit"),l=null;hv(e.oppId,e.locationId).then(c=>{l=c;let p=o.querySelector("#ws-reduce-count");p&&c!==null&&(p.textContent=`${c} buyer${c===1?"":"s"} (active + previously-withdrew)`)}),$e(r),setTimeout(()=>r?.focus(),50);let d=c=>{c.key==="Enter"?(c.preventDefault(),i?.click()):c.key==="Escape"&&(c.preventDefault(),s?.click())};o.addEventListener("keydown",d),t.addEventListener("click",c=>{c.target===t&&Un()}),s?.addEventListener("click",()=>{Un()}),i?.addEventListener("click",async()=>{if(!r||!a||!i)return;let c=r.value.trim();if(!c){a.textContent="Enter a new listing price.",r.focus();return}let p=he(c);if(p<=0){a.textContent="Price must be a positive number.",r.focus();return}if(p<1e3){a.textContent=`That looks low \u2014 did you mean $${Math.round(p*1e3).toLocaleString("en-US")}?`,r.focus();return}if(window.confirm(_v(p,l))){a.textContent="",i.disabled=!0,i.textContent="Reducing\u2026",i.style.opacity="0.7",s&&(s.disabled=!0);try{await uv({oppId:e.oppId,locationId:e.locationId,newPrice:p,userId:H()}),Un(),e.onSuccess()}catch(u){m.error("Reduce Price webhook failed",u),a.textContent=u instanceof Error?u.message:"Something went wrong. Try again.",i.disabled=!1,i.textContent="Reduce Price",i.style.opacity="1",s&&(s.disabled=!1)}}})},vv=(e,t)=>{let o=document.createElement("button");return o.id=De,o.type="button",o.dataset.oppId=e,o.style.cssText=z,o.title="Set a new listing price and notify active + previously-withdrew buyers",o.innerHTML=`
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
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=Gn();!r||!r.locationId||r.oppId!==e||yv({oppId:r.oppId,locationId:r.locationId,onSuccess:()=>{let a=o.querySelector(".ws-rp-label"),s=o.querySelector(":scope > span:first-child");a&&(a.textContent="Price Reduced \u2014 Buyers Alerted"),o.style.background=n.emeraldGlow,o.style.color=n.emeraldBright,o.style.borderColor=n.emeraldBorder,s&&(s.style.background=n.emerald,s.style.boxShadow=`0 0 6px ${n.emerald}`),setTimeout(()=>{a&&a.textContent==="Price Reduced \u2014 Buyers Alerted"&&(a.textContent="Reduce Price and Alert Buyers",o.style.cssText=z,s&&(s.style.background=n.amber,s.style.boxShadow=`0 0 6px ${n.amber}`))},4e3)}})}),o},gv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],fv=async()=>{for(let e of gv)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Wn=!1,ti=async()=>{if(!Wn){Wn=!0;try{await xv()}finally{Wn=!1}}},xv=async()=>{let e=Gn();if(!e||!e.locationId){document.getElementById(De)?.remove(),document.getElementById(`${De}-wrap`)?.remove(),pr();return}let t=document.getElementById(De);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${De}-wrap`)?.remove(),pr());return}t&&(t.remove(),document.getElementById(`${De}-wrap`)?.remove());let o=await fv();if(!o){m.warn("Reduce Price: no opp-header mount target found within timeout \u2014 skipping mount");return}let r=await se();if(r!=="Disposition"){m.debug(`[reduce-price] gated off \u2014 pipeline="${r}" (expected Disposition)`);return}let a=Gn();if(!a||a.oppId!==e.oppId)return;let s=vv(e.oppId,e.locationId),i=document.createElement("span");i.id=`${De}-wrap`,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    order: 3;
    flex-shrink: 0;
    vertical-align: middle;
  `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted Reduce Price button on opp ${e.oppId}`),wv(e.oppId)},cr=null,ei=null,mo,pr=()=>{cr?.disconnect(),cr=null,ei=null,mo!==void 0&&(window.clearTimeout(mo),mo=void 0)},wv=e=>{if(cr&&ei===e)return;pr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ei=e,cr=new MutationObserver(()=>{mo===void 0&&(mo=window.setTimeout(()=>{mo=void 0;let o=Gn();if(!o||o.oppId!==e){pr();return}let r=G();if(r!==null&&r!=="Disposition"){document.getElementById(De)?.remove(),document.getElementById(`${De}-wrap`)?.remove(),pr();return}document.getElementById(De)||ti()},250))}),cr.observe(t,{childList:!0,subtree:!0}))},kv=()=>{oe("reduce-price",ae,()=>{!document.getElementById(De)&&!Wn&&ti()})},Lc=()=>{kv(),ti()};var bo="b7d6ebff40fd11dcee371883f0f2670eeace5693cbc0bd5d",Kn="deals.reinvestos.com";var Re="ws-crm-edit-landing-button",Ev=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,$v=/\/v2\/location\/([A-Za-z0-9]+)/,Yn=()=>{let e=window.location.pathname,t=e.match(Ev);if(!t)return null;let o=e.match($v);return{oppId:t[1],locationId:o?o[1]:null}},Tv=(e,t)=>{let o=new URL(`https://${Kn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",bo);let r=H();return r&&o.searchParams.set("user",r),o.toString()},Cv=(e,t)=>{let o=document.createElement("button");return o.id=Re,o.type="button",o.dataset.oppId=e,o.style.cssText=z,o.title="Open the deal-page editor for this property (photos, price, details, live preview)",o.innerHTML=`
    <span style="
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      background: ${n.blue}; box-shadow: 0 0 6px ${n.blue}; flex-shrink: 0;
    "></span>
    <span class="ws-elp-label">Edit Deal Page</span>
  `,o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{let r=Yn();if(!r||!r.locationId||r.oppId!==e)return;if(!bo){m.warn("[edit-landing] editor session key not configured in this build");return}let a=Tv(r.oppId,r.locationId);window.open(a,"_blank","noopener,noreferrer");let s=o.querySelector(".ws-elp-label");if(s){let i=s.textContent;s.textContent="Opening editor\u2026",setTimeout(()=>{s.textContent==="Opening editor\u2026"&&(s.textContent=i)},2500)}}),o},Sv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],Lv=async()=>{for(let e of Sv)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Vn=!1,ri=async()=>{if(!Vn){Vn=!0;try{await Av()}finally{Vn=!1}}},Av=async()=>{let e=Yn();if(!e||!e.locationId){document.getElementById(Re)?.remove(),document.getElementById(`${Re}-wrap`)?.remove(),br();return}let t=document.getElementById(Re);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(`${Re}-wrap`)?.remove(),br());return}t&&(t.remove(),document.getElementById(`${Re}-wrap`)?.remove());let o=await Lv();if(!o)return;let r=await se();if(r!=="Disposition"){m.debug(`[edit-landing] gated off \u2014 pipeline="${r}"`);return}let a=Yn();if(!a||a.oppId!==e.oppId)return;let s=Cv(e.oppId,e.locationId),i=document.createElement("span");i.id=`${Re}-wrap`,i.style.cssText="display: inline-flex; align-items: center; order: 2; flex-shrink: 0; vertical-align: middle;",o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="12px",o.style.flexWrap="wrap"),i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted Edit Landing Page button on opp ${e.oppId}`),Mv(e.oppId)},mr=null,oi=null,uo,br=()=>{mr?.disconnect(),mr=null,oi=null,uo!==void 0&&(window.clearTimeout(uo),uo=void 0)},Mv=e=>{if(mr&&oi===e)return;br();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(oi=e,mr=new MutationObserver(()=>{uo===void 0&&(uo=window.setTimeout(()=>{uo=void 0;let o=Yn();if(!o||o.oppId!==e){br();return}let r=G();if(r!==null&&r!=="Disposition"){document.getElementById(Re)?.remove(),document.getElementById(`${Re}-wrap`)?.remove(),br();return}document.getElementById(Re)||ri()},250))}),mr.observe(t,{childList:!0,subtree:!0}))},Iv=()=>{oe("edit-landing-page",ae,()=>{!document.getElementById(Re)&&!Vn&&ri()})},Ac=()=>{Iv(),ri()};var Oc="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dispo/publish",Ov="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/mt-opp-count",_o="ws-crm-publish-button",ur="ws-crm-publish-wrap",Qn="ws-crm-publish-dropdown",Pv=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Bv=/\/v2\/location\/([A-Za-z0-9]+)/,ni=()=>{let e=window.location.pathname,t=e.match(Pv);if(!t)return null;let o=e.match(Bv);return{oppId:t[1],locationId:o?o[1]:null}},Mc=async(e,t)=>{try{let o=await fetch(Oc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,dry_run:!0,triggered_by_user_id:H()??null}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[publish] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[publish] dry_run fetch failed:",o),null}},Hv=async(e,t)=>{try{let o=new URL(Ov);o.searchParams.set("dispo_opp_id",e),o.searchParams.set("tenant_id",t);let r=await fetch(o.toString(),{credentials:"omit"});if(!r.ok)return null;let a=await r.json();return typeof a.open_count=="number"?a.open_count:null}catch(o){return m.warn("[publish] buyer-count fetch failed:",o),null}},Dv=e=>`Publish this deal and start the buyer blast?

${e!==null?`${e} matched buyer${e===1?"":"s"}`:"all matched buyers"} will be texted about this property - VIP & Qualified buyers get the full property SMS immediately, Unqualified buyers start the teaser sequence.

This cannot be reversed.`,Rv=async(e,t)=>{let o=await fetch(Oc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,triggered_by_user_id:H()??null}),credentials:"omit"});if(!o.ok&&o.status!==200)throw new Error(`HTTP ${o.status}`);return await o.json()},Nv=(e,t)=>{if(!bo){m.warn("[publish] editor session key not configured in this build");return}let o=new URL(`https://${Kn}/editor`);o.searchParams.set("loc",t),o.searchParams.set("opp",e),o.searchParams.set("k",bo);let r=H();r&&o.searchParams.set("user",r),window.open(o.toString(),"_blank","noopener,noreferrer")},ot=()=>{document.getElementById(Qn)?.remove()},Ic=(e,t,o,r,a)=>{ot();let s=document.createElement("div");s.id=Qn;let i=t.getBoundingClientRect();s.style.cssText=`
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
    font-family: ${h.sans};
  `;let l=e.length,d=e.filter(g=>g.filled).length,c=d===l,p=document.createElement("div");p.innerHTML=`
    <div style="
      font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${c?n.emerald:n.amber};
      margin-bottom: 4px;
    ">${c?"Ready to publish":"Finish the landing page"}</div>
    <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">${d} of ${l} ready</div>
  `,s.appendChild(p),e.forEach(g=>{let x=document.createElement("div");x.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      padding: 6px 4px; font-size: 12px;
      color: ${g.filled?n.bone:n.ash};
    `;let $=g.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`;x.innerHTML=`${$}<span style="flex: 1;">${g.label}</span>`,s.appendChild(x)});let u=document.createElement("div");u.style.cssText=`
    display: flex; align-items: center; gap: 10px;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid ${n.steel};
  `;let b=document.createElement("button");b.type="button",b.textContent="Open editor to finish \u2192",b.style.cssText=`
    cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 600;
    padding: 7px 12px; border-radius: ${v.sm};
    background: ${n.emeraldGlow}; border: 1px solid ${n.emeraldBorder};
    color: ${n.emerald};
  `,b.addEventListener("click",g=>{g.stopPropagation(),Nv(o,r)}),u.appendChild(b);let _=document.createElement("button");_.type="button",_.textContent="Re-check",_.title="Re-check after editing the page",_.style.cssText=`
    margin-left: auto; cursor: pointer; background: transparent; border: none;
    color: ${n.ash}; font-size: 12px; text-decoration: underline;
  `,_.addEventListener("click",g=>{g.stopPropagation(),ot(),a()}),u.appendChild(_),s.appendChild(u),document.body.appendChild(s);let y=g=>{let x=g.target;!s.contains(x)&&!t.contains(x)&&(ot(),document.removeEventListener("click",y))};window.setTimeout(()=>document.addEventListener("click",y),0)},tt=(e,t)=>{let o=e.querySelector(".ws-pub-label"),r=e.querySelector(".ws-pub-dot"),a=e.querySelector(".ws-pub-chevron"),s="transparent",i=n.steel,l=n.bone,d=n.coolGray,c="One-Click Dispo",p="",u="pointer",b="1";switch(t.status){case"checking":i=n.steel,l=n.ash,c="Checking\u2026",u="wait",b="0.8";break;case"ready":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="One-Click Dispo";break;case"incomplete":{let _=t.checks?.filter(g=>g.filled).length??0,y=t.checks?.length??0;i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${y} ready`,p="\u25BE";break}case"publishing":s=n.emerald,i=n.emerald,l=n.obsidian,d=n.obsidian,c="Publishing\u2026",u="wait",b="0.8";break;case"published":s="transparent",i=n.steel,l=n.ash,d=n.emerald,c="Deal Published",u="default",b="0.9";break;case"error":i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=u,e.style.opacity=b,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="published"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},Fv=(e,t)=>{let o=document.createElement("button");o.id=_o,o.type="button",o.dataset.oppId=e,o.title="Publish this deal and send it to your buyers (requires a finished landing page)",o.style.cssText=`
    ${pe}
    background: transparent;
    border: 1px solid ${n.steel};
    color: ${n.ash};
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
  `,o.innerHTML=`
    <span class="ws-pub-dot" style="width: 6px; height: 6px; border-radius: 50%; background: ${n.coolGray}; flex-shrink: 0;"></span>
    <span class="ws-pub-label">Checking\u2026</span>
    <span class="ws-pub-chevron" style="font-size: 10px; margin-left: 2px;"></span>
  `;let r={status:"checking"};tt(o,r);let a=!1,s=async()=>{if(!(r.status==="publishing"||r.status==="published")&&!a){a=!0;try{let _=await Mc(e,t);if(!_||!Array.isArray(_.checks)){r={status:"error",message:"Check failed \u2014 click to retry"},tt(o,r);return}r={status:_.published?"published":_.ready?"ready":"incomplete",checks:_.checks},tt(o,r),document.getElementById(Qn)&&r.checks&&Ic(r.checks,o,e,t,()=>void s())}finally{a=!1}}},i=async()=>{r={status:"publishing",checks:r.checks},tt(o,r),ot();try{let[_,y]=await Promise.all([Mc(e,t),Hv(e,t)]);if(_?.published){r={status:"published"},tt(o,r),m.info(`[publish] pre-publish check: opp ${e} already published \u2014 skipping`);return}if(!window.confirm(Dv(y))){r={status:"ready",checks:r.checks},tt(o,r),m.info(`[publish] rep cancelled publish confirm for opp ${e}`);return}let g=await Rv(e,t);if(g.ok&&g.published)r={status:"published"},tt(o,r),m.info(`[publish] published opp ${e}`);else if(g.missing&&g.missing.length)r={status:"error",message:"Not ready \u2014 re-check"},tt(o,r);else throw new Error(g.error||"Publish failed")}catch(_){let y=_ instanceof Error?_.message:"Publish failed";m.error("[publish] publish failed",_),r={status:"error",message:y.length>28?"Error \u2014 try again":y},tt(o,r)}};o.addEventListener("mouseenter",()=>{r.status==="ready"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{switch(r.status){case"ready":i();break;case"incomplete":{document.getElementById(Qn)?ot():r.checks&&Ic(r.checks,o,e,t,()=>void s());break}case"error":s();break}}),s();let l=Date.now(),d=8e3,c=()=>{o.isConnected&&(a||r.status==="publishing"||r.status==="published"||Date.now()-l<d||(l=Date.now(),s()))},p=()=>c(),u=()=>{document.visibilityState==="visible"&&c()};window.addEventListener("focus",p),document.addEventListener("visibilitychange",u);let b=window.setInterval(()=>{document.body.contains(o)||(window.removeEventListener("focus",p),document.removeEventListener("visibilitychange",u),window.clearInterval(b))},5e3);return o},zv=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],qv=async()=>{for(let e of zv)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Jn=!1,si=async()=>{if(!Jn){Jn=!0;try{await jv()}finally{Jn=!1}}},jv=async()=>{let e=ni();if(!e||!e.locationId){document.getElementById(_o)?.remove(),document.getElementById(ur)?.remove(),ot(),_r();return}let t=document.getElementById(_o);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Disposition"&&(t.remove(),document.getElementById(ur)?.remove(),ot(),_r());return}t&&(t.remove(),document.getElementById(ur)?.remove(),ot());let o=await qv();if(!o)return;let r=await se();if(r!=="Disposition"){m.debug(`[publish] gated off \u2014 pipeline="${r}"`);return}let a=ni();if(!a||a.oppId!==e.oppId||!a.locationId)return;let s=Fv(e.oppId,a.locationId),i=document.createElement("span");i.id=ur,i.style.cssText="display: inline-flex; align-items: center; order: 1; flex-shrink: 0; vertical-align: middle;",i.appendChild(s),re(o).appendChild(i),m.debug(`Mounted Publish button on opp ${e.oppId}`),Uv(e.oppId)},hr=null,ai=null,ho,_r=()=>{hr?.disconnect(),hr=null,ai=null,ho!==void 0&&(window.clearTimeout(ho),ho=void 0)},Uv=e=>{if(hr&&ai===e)return;_r();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(ai=e,hr=new MutationObserver(()=>{ho===void 0&&(ho=window.setTimeout(()=>{ho=void 0;let o=ni();if(!o||o.oppId!==e){_r();return}let r=G();if(r!==null&&r!=="Disposition"){document.getElementById(_o)?.remove(),document.getElementById(ur)?.remove(),ot(),_r();return}document.getElementById(_o)||si()},250))}),hr.observe(t,{childList:!0,subtree:!0}))},Wv=()=>{oe("publish-button",ae,()=>{!document.getElementById(_o)&&!Jn&&si()})},Pc=()=>{Wv(),si()};var Bc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAGAAAAABAAAAYAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAACmNL5cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH6ElEQVRYCe2Ye2wcRx3Hv7O799i78/mV2L7YcR52HMdOiJPU1GlNFFSpIRAFNVHSChWhAkJCqgRCogJBU8pDokICVFEJaBsEqgRtBUVpKVSRaBODYpQ6ceM8SoXJw42Dk/hx9vnudm93h9/s3fj27L0kTpX/Mvbd7s7O/H6f+f5mfjM2cLcsVGBk61b9TGdncOGbhTVsYdWdqTm3/Z7tCmf7HMa2gKOGvOQY4xcZZ4d5MPdy++GTo36e7zjg0Lbu5QGF/ZQc7aUrszgH/bpFZQwqvTAcfoU7ztPrjr77q/mQdxRwsPfjbWGNHwopytqM7QjfBbRSDAJlGsEa3Hmm453j3/K+LQvY9Mv9n2aautexnQiFwTVsc8vty5gC8VOuOPSqMmvh4BsfdteZTqvBpWbleuTN0kBgOs5X1h05/rxs6Qso4KCph5iqqCIeOcemC0etHkdIDWAym8JsLkP3QdDAFxRDVfDo6Uk83n8VWaVUNRFW2cUhm66uBQtCSRsYg21v6ugbuCKqtQXWqYIU2g+C46bFDTuHdTXN+NrmvewTjesRCYRxIfk/vPzBEf7S2cM04hw5lC4phnQbI/V2npuE5bIV34m78xkDI4bJwqRWeyTMKzQVAlQUm1TQVaU+w9kj9PgzUecbJwc8lFfOwsalq/HKrgNsz5peJI1ZnL5+Hq3Vjfhc+ydZWAu6ygpDslik0KopE40zOVhKEU4odyqVYW9NTLOzs1kMzKTx5niSzVh2CYRNrBzsQWnPX0Gac2JMGlPx9NYvsPpoNX7Y/xJ/fugvmDEzaK1qpBBnMZoah06QHg44xNSQshAiT4ZYolTEt1gkZwiMFvIc0CTBvZ/OsnvjUe5RUURkhciTnWfOmL6AwqhN866NlOpZ1oG+D4fw7MnXKCUoeKB5C2r0CtepeP735AjOjl9034l+omhOPmT5p/x3joYsPkVN8+BZxzsL822pdyAZj6viqSygGFFNuIJGTBATI8jZFApNwbe7H2GbG9bkLdH3waG/4pt9v+YRLeTWCYCJiArbQyJwo7Rw6oIaLmRNBEhFOYTloaAbLbczfYloUPyubT12LCvqygKKUFxNT8EiJbvqWhDWAmSU4ycDr/KKoI6dK7vZQzQvr2WS0rZ7FeoNVwVxLaJhScaeAxWT/f7KGHGl2FXTciE7Y2GsCAfF4pizIfKhyfkR4nQrfReJaK1RhhmeGsXfL53EPQ1rcaDn86wmHMfbIyfw3+Qo1i9ZRavPwdHLp7iYq7IoZFbAHW6OQbWKjkUg46Tijpo437O0yv10xSIeNJE9wLK2k3ag/k7aK6ugbPDUsd/y1ZUJ9tWu3Xh47XY2aaTQUrXMff3CqTcxMPYBgmqpGctiGO6JgI2RuhPUtMAvZ1uMQEXxKieeRerJ2Py5DUf7z4lnUYpDzz+73/Fd6/cylW0QalzPTONvF46Lyc3qItVuHnx//BKeHfwz/8Xga2LF0ciLEy5Dk6+3ysBz3VOsqhosOeDkk3mxicdT8TaoKMxwnMHprPLFFy5fNuSb0qHLWs9VqDOWnsR3//kbHqUkHaDndM6ASQk8RPNSzFVZBNz91QZe7JxgS8Se0KOidtjG+FuUzIO+WrhdxeBt2x4H177U86/+aWlPXMvOQW8jkU5EUra47cIJxcSzUE+WErggbY0iIdLKr3qolilrmuhwld/HZXvvNaiqmOnd1tfR13/CWy/ubwlQdhJAQrEiVv6NhDsolCvAMdiUmmI4rzyG2f1fZjwWA3xyHkwTVs99yO57uLiipMPFAnr6zd1KOBHW2jk4i5JyFP8xHsO00QLevBzmzl3ETGH3FnrmdfUwd+/xh6e2i1LQa1vce+GWBAphpSOZo1QiXf0krGAXJV3KtzlSqXcbnJZWwPKEmhQ1P/UZxmvogD0fvuDstgFL4IRydIyh8zKYFscswfFoNxoTS6HrUXDhPBSC+cAO0SjvmkCdlatgbekGozCXK7cFuACOFgRTLCSzlRgNHQAimyhkWai04pclGqFHCNIwYHd0wlneTGqRipTkc/f10moL073v9HOZFw1YDm4qW4Un3v4eDryxBcmUQedd4ZcXIXUdDqlobdzMGK1oXllFwBtKQ+4j46IAS+AKc04oJ+C+885TGBzrwulLBn7wJwVTs7RdlkA2IRIkwLa1lO40OM0rwatp7vmtbA/oLQOWwMk554F790oX5UYDoQDw3kW4kMn5kPUJhFashFNRAbt5Bf1Jd3P3N29Bo1kAV5hzUjkJJwcuIb8/X0k6gCRWtyHQ1Ayb0suN5p60dVPAxcJJwxJyfrg12jVqHv8GC27cBE7p52blhoASrmSH8AlrOSe+kJRyAi1tSLS2Qw/rJKI84/hbKQso4Up2iEXASXe+kFaOzpsKpaAmN0/Kv0dkH+/VF3DaeyqR29dtwElHvpCFFJRoaEREj+STuezgufoCPtqQUl5cP4G5jf8jwElfJZDpYgrSKOUkSMnKyur5ZxC3qy/gz9uTdq2e31u9eW7+apXOb/U6B/nH0jwZovyYqE9k/Oz4AuY4+wM36UQXBaatBJ78x49x4vq9iITpPzKa/pE+Ou0oQ6M6fvR6hE46OipiURim4ZiO/Xs/QF9ZRcPp97bt1sJs3zNHvh57fXgHjwUpLjdecH72/etIlhQdcnZ8DOyJz6qpmXT61eaGxkP+je/W3lXgrgI3VOD/Ibqk1WsZsgkAAAAASUVORK5CYII=",Hc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAFSUlEQVRYCe2Wa0wcVRTH7zx2Z1n2ActbHiWABUuCIdqqxSim1FbaYGOjTWoKsZomao1p049+U9uY+sEYv6gJ1dhYsfZlDFGsVYtpNW2lohZoKSjLe9/sLrs7j3s9s7Ows+xAl4ISk95sdu/O3Lm/e875n3OGQgeG0UoMeiWgMvMO+D/z/P/U1QQhfJs+WoLFEqEoVJLJIJEgOMEix+2CeVKZozvdYru6P/fQFqtVTyFhcXBq0QUEfIvJ8w+kH9pqzTHFzt09Iuw/4/uuL4x0FKJSsn2RYIHkmJm3m6zNa43J27/XGXjjW//ENE6FzSY/P+8VntSVcx88k7EmXze7RpKII4hHfRJ8TBz1YIn+y54wkQhibmF6amAs73OgwQzuBUENe6Q/x4Urw8Jvo8J1h2D3YU8YY5CYSNKMzOnnbHDr4Fm/qOBnz5g4ScHVBOUZ6X2PmKrz2XP9kYt/870O0RvEMTFDUBXjJGThqLZm2+Z7DIBovxZ+5aR3wCEi0J3WSAlcZGFAsiMeEUkze+ioIitTW8hetgtjAQzZLFNbbJurZKoyhr3S3hPeM90hTcWlAIZtwI2ApFGmia69S/doGVdfwUGk3zrnf7czwEvIzFGfNdsao7bOcOVfCaODZ6de7/ALOBp11b0FwZA5gGRQWRZbX85tquQeKuWKoWJEx542z4cXgnDXzNHHdtm2rInbqtpfnnb0hl864b3pltS9cB5xgX2ElGezjVWGpmrDulK9xRAvNf4I2X3M/UVXCKIr27rL1qhFBXOnwngqhAsszN669Ne+9gfBjJmIa4EFUpmve/MJy8ZKTs1T7HAH8c6j7m+uhWNULQ/DSu80frLVdcMpBngSEAgBjQByhgoLksAiqchjv3ohqyI76RZCYz5px8euzps8UEFNn4KtSXFVztfeEz7fF5ElrfBUSGVB4u4YgWTa92SvymQiInEGcLaJ5tjYQ4MucftH7i47j1jKGs2cTSoNByNkbEoa8khDXmlySjraNS2LOR4fBRf/VoEJMumpp2vSWn8OXhnmB5ximp7+4eVsBdw7ITx1xN0zLoCtBSb68xbbw2Vcv0O8OiJctvNdo0K/U4S8CkVwLOXguDEVxmHqWYKqaQphkBVIAE4qkFcbzO9sy4DVv48K21pdAy5RjitLvbjeSFFUx/VIn1OcDuFYT5x1JoQzhVahsljuOtG3v2itYRhqZ63cCS4N8duPuOxeCTwMf8OEHO4MkjB0giiKRpSOykyj80x0voUpNNMQnePd4RFfQvKobVXmCeD4bYnUlujXrdL/NBCBuE76o1RIa4nIbRfKVo6uOpe9t1BXU6BbncMWZTBZ6bQ+ejJXEH/ya0gt4Pi2qtl8YLT7/vSLgxHwsAsqIgyR5FmYtcW6x8q59aVcVR6bYdRWTlvXtAvMnadEz6K1wARlW6Hwk8ffdwaCpDiH3Xg3t7XaUFeqz7UsKJjorsehOGsfaRYqT7TACEEuQV/bUGF49j7jhtWcLX2hnXC0QnlCGGpLn0P8xS4rPwGi9UcLjNGOmrR99SZ1w1c/65nGkNM9EyJ05Z5JEXQ3HpC8YRISCIYeDLlxa26yxRjlmunDTdY5IRxyyyl74S/+kl3oc8itEIPMlEII7gCFAww+Kdiq2JBksUSgpypUqLdQHL6/EflxgP9jQvDByxToDDBgE3xDsi5hzAVD+jaUc6e6Qye7Q+cH+SGl+QMGTJmpnUvAxR9NqFxwmaGRzUA7piTZjQAD5L8z5loMTRTeGpfXOM2Ta1m0pNhpUjQuaoE1li3/pTvg5ffpPDuumKv/Adt/MSwF/+Q1AAAAAElFTkSuQmCC";var Gv=[{key:"contact",addr:"Street address",city:"City",state:"State",zip:"Postal code"},{key:"property",addr:"Property Address",city:"Property City",state:"Property State",zip:"Property Zip"}],Dc=e=>`ws-crm-map-links-${e}`,Rc=()=>Array.from(document.querySelectorAll(".hr-form-item-label__text, [class*='label__text']")),Zn=(e,t)=>{let o=t.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o){let a=r.closest(".hr-form-item");if(!a)continue;let s=a.querySelector("input, textarea");if(s&&(s.value||"").trim())return s.value.trim()}return""},Nc=(e,t=Rc())=>{let o=Zn(t,e.addr),r=Zn(t,e.city),a=Zn(t,e.state),s=Zn(t,e.zip),i;return r&&o&&o.toLowerCase().includes(r.toLowerCase())?i=o:i=[o,r,a,s].filter(Boolean).join(", "),{full:i,hasAny:i.length>0}},Kv=e=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`,Vv=e=>`https://www.zillow.com/homes/${e.replace(/\s+/g,"-")}_rb`,Yv=(e,t)=>{let{full:o,hasAny:r}=Nc(e);r&&window.open(t(o),"_blank","noopener,noreferrer")},Jv=e=>{let t=document.createElement("span");t.id=Dc(e.key),t.style.cssText="display:inline-flex;align-items:center;gap:6px;margin-left:auto;font-weight:400;flex-shrink:0;";let o=document.createElement("span");o.textContent="View maps:",o.style.cssText="font-size:11px;color:#9098A3;white-space:nowrap;",t.appendChild(o);let r=(a,s,i)=>{let l=document.createElement("img");return l.src=a,l.title=s,l.style.cssText="width:18px;height:18px;cursor:pointer;border-radius:3px;display:inline-block;transition:transform 0.1s ease;",l.addEventListener("mouseenter",()=>{l.style.transform="scale(1.12)"}),l.addEventListener("mouseleave",()=>{l.style.transform="scale(1)"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),Yv(e,i)}),l};return t.appendChild(r(Bc,"Open in Google Maps",Kv)),t.appendChild(r(Hc,"Search on Zillow",Vv)),t},Qv=(e,t)=>{let o=t.addr.toLowerCase();for(let r of e)if((r.textContent||"").trim().toLowerCase()===o)return r.closest(".hr-form-item")?.querySelector(".hr-form-item-label")||r.parentElement;return null},Fc=()=>{let e=Rc();if(e.length)for(let t of Gv){if(document.getElementById(Dc(t.key)))continue;let{hasAny:o}=Nc(t,e);if(!o)continue;let r=Qv(e,t);r&&(r.style.display="flex",r.style.alignItems="center",r.style.width="100%",r.appendChild(Jv(t)),m.debug(`[map-links] injected on "${t.addr}"`))}},yo=null,vo,Zv=()=>{let e=Gt();return e==="contact-detail"||e==="other"},Xv=()=>{yo||(yo=new MutationObserver(()=>{vo===void 0&&(vo=window.setTimeout(()=>{vo=void 0;try{Fc()}catch(e){m.warn("[map-links] ensureInjected failed",e)}},300))}),yo.observe(document.body,{childList:!0,subtree:!0}))},zc=()=>{yo&&(yo.disconnect(),yo=null),vo!==void 0&&(window.clearTimeout(vo),vo=void 0)},qc=()=>{if(!Zv()){zc();return}Xv(),Fc()},jc=()=>{zc()};var Uc="ws-crm-hide-launchpad",ii=/\/launchpad\/?$/,li=()=>{if(!dt()){if(!document.getElementById(Uc)){let e=document.createElement("style");e.id=Uc,e.textContent='a[href*="/location/"][href$="/launchpad"]{display:none !important;}',(document.head||document.documentElement).appendChild(e),m.info("[hide-launchpad] Launchpad nav hidden for tenant user")}if(ii.test(location.pathname)){let e=location.pathname.replace(ii,"/dashboard")+location.search;m.info(`[hide-launchpad] redirecting tenant user off Launchpad -> ${e}`);try{history.replaceState({},"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.setTimeout(()=>{(!!document.getElementById("launchpad-main")||!!document.querySelector('[class*="launchpad-container"]'))&&!ii.test(location.pathname)&&(m.warn("[hide-launchpad] SPA redirect ignored by router \u2014 hard nav fallback"),location.replace(e))},2e3)}catch(t){m.warn("[hide-launchpad] SPA redirect failed, falling back to hard nav",t),location.replace(e)}}}};var go="rbWy2hPHguDS6WJ3qODY",eg=[{label:"Buy-Box Entries"},{label:"Memberships"},{label:"AI Agents",onlyLocation:go},{label:"Marketing",onlyLocation:go},{label:"Sites",onlyLocation:go},{label:"Media Storage",onlyLocation:go},{label:"Reporting",onlyLocation:go},{label:"Settings",onlyLocation:go}],di="wsCrmNavHidden",ci=e=>{let t=dt(),o=new Set(eg.filter(r=>(r.agencyToo||!t)&&(!r.onlyLocation||r.onlyLocation===e)).map(r=>r.label.trim().toLowerCase()));document.querySelectorAll(".nav-title").forEach(r=>{let a=(r.textContent||"").trim().toLowerCase(),s=r.closest("a")||r.closest("li")||r.parentElement;s instanceof HTMLElement&&(o.has(a)?s.style.display!=="none"&&(s.style.setProperty("display","none","important"),s.dataset[di]="1",m.info(`[hide-nav-items] hid "${r.textContent?.trim()}"`)):s.dataset[di]==="1"&&(s.style.removeProperty("display"),delete s.dataset[di],m.info(`[hide-nav-items] restored "${r.textContent?.trim()}" (agency)`)))})},Wc=!1,tg=()=>{Wc||(Wc=!0,window.addEventListener("ws-crm-agency-changed",()=>{m.info("[hide-nav-items] agency verdict changed \u2014 reconciling nav"),ci(J())}))},pi=()=>{let e=J();tg(),ci(e);for(let t of[150,500,1200,2500,4e3])setTimeout(()=>ci(e),t)};var og=[{from:"Payments",to:"Contracts"}],rg=".nav-title, .topmenu-navtitle",Gc=()=>{document.querySelectorAll(rg).forEach(e=>{let t=(e.textContent||"").trim(),o=og.find(r=>r.from===t);o&&(e.textContent=o.to,m.info(`[relabel-nav] "${o.from}" -> "${o.to}"`))})},mi=()=>{Gc();for(let e of[150,500,1200,2500])setTimeout(Gc,e)};var Kc="/payments/proposals-estimates",ng=/\/payments\/invoices\/?$/,ag=/\/payments\//,sg='#sb_payments, a[meta="payments"]',Yc=(e=0)=>{if(e>25)return;let t=location.pathname;if(!t.includes(Kc)&&!(e>3&&!ag.test(t))){if(ng.test(t)){let o=[...document.querySelectorAll(".topmenu-nav a")].find(r=>(r.getAttribute("href")||"").includes(Kc));if(o){m.info("[contracts-section] section entry -> proposals-estimates"),o.click();return}}setTimeout(()=>Yc(e+1),120)}},Vc=!1,ig=()=>{Vc||(Vc=!0,document.addEventListener("click",e=>{e.target?.closest?.(sg)&&setTimeout(()=>Yc(),80)},!0),m.info("[contracts-section] section-entry redirect armed"))},bi=()=>{ig()};var Jc=["/payments/v2/orders","/payments/v2/subscriptions","/payments/v2/paymentlinks","/payments/v2/transactions","/payments/products","/payments/coupons","/payments/gift-cards","/payments/settings","/payments/integrations","/funnels-websites/client-portal"],Qc="ws-crm-hide-topmenu-tabs",ui=()=>{if(document.getElementById(Qc))return;let e=Jc.map(o=>`.topmenu-nav a[href*="${o}"]`).join(","),t=document.createElement("style");t.id=Qc,t.textContent=`${e}{display:none !important;}`,(document.head||document.documentElement).appendChild(t),m.info(`[hide-topmenu-tabs] hid ${Jc.length} top tabs`)};var ep="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/tc/send-to-title-co",mt="ws-crm-send-to-closing-office-button",Pt="ws-crm-send-to-title-co-wrap",ta="ws-crm-stc-dropdown",lg=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,dg=/\/v2\/location\/([A-Za-z0-9]+)/,gr=()=>{let e=window.location.pathname,t=e.match(lg);if(!t)return null;let o=e.match(dg);return{oppId:t[1],locationId:o?o[1]:null}},cg=5*60*1e3,yi=e=>`ws-crm-stc-cache:${e}`,pg=e=>{try{let t=window.localStorage.getItem(yi(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>cg||!Array.isArray(o.checks)||o.checks.length===0?null:o}catch{return null}},mg=(e,t)=>{try{window.localStorage.setItem(yi(e),JSON.stringify(t))}catch{}},tp=e=>{try{window.localStorage.removeItem(yi(e))}catch{}},hi="ws-crm:opp-fields-updated",op=e=>{if(e){tp(e);try{window.dispatchEvent(new CustomEvent(hi,{detail:{oppId:e}}))}catch{}}},bg=async(e,t)=>{try{let o=await fetch(ep,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:H()??null,dry_run:!0}),credentials:"omit"});return o.ok?await o.json():(m.warn(`[stc] dry_run returned HTTP ${o.status}`),null)}catch(o){return m.warn("[stc] dry_run fetch failed:",o),null}},ug=async(e,t,o)=>{let r=await fetch(ep,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,tc_opp_id:e,triggered_by_user_id:H()??null,confirm_resend:o}),credentials:"omit"});if(!r.ok&&r.status!==200)throw new Error(`HTTP ${r.status}`);return await r.json()},hg=(e,t)=>{let o=e?.name?`${e.name}${e.email?` (${e.email})`:""}`:"the closing agent",r=e?.closingOffice?` at ${e.closingOffice}`:"",a=e?.propertyAddress?` for ${e.propertyAddress}`:"",s=t?`

\u26A0\uFE0F This deal was already sent on ${new Date(t).toLocaleString()} \u2014 this will send it AGAIN.`:"";return`Send this deal${a} to the closing office now?

This emails the executed Purchase + Assignment contracts to ${o}${r}. This cannot be undone.`+s},_g=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if(!t)return!1;let o=t.querySelectorAll("a, button, li, [role='tab'], [role='menuitem'], .crm-opportunities-modal-content [class*='tab']");for(let a of o)if((a.textContent?.trim()??"")===e)return a.click(),!0;let r=t.querySelectorAll("*");for(let a of r){if(a.children.length>1)continue;if((a.textContent?.trim()??"")===e)return(a.closest("a, button, li, [role='tab']")||a.parentElement||a).click(),!0}return m.warn(`[stc] folder tab not found for "${e}"`),!1},Zc=e=>{let t=document.getElementById(e);if(!t){m.warn(`[stc] field ${e} not found in DOM \u2014 can't scroll to it`);return}t.scrollIntoView({behavior:"smooth",block:"center"});let o=t.style.boxShadow,r=t.style.transition;t.style.transition="box-shadow 0.3s ease, background-color 0.3s ease",t.style.boxShadow=`0 0 0 3px ${n.emerald}, 0 0 18px ${n.emerald}`,window.setTimeout(()=>{t.style.boxShadow=o,window.setTimeout(()=>{t.style.transition=r},400)},2800)},yg=(e,t)=>{if(t&&_g(t)){window.setTimeout(()=>Zc(e),300);return}Zc(e)},Ne=()=>{document.getElementById(ta)?.remove()},Xn=(e,t,o)=>{Ne();let r=document.createElement("div");r.id=ta;let a=o.getBoundingClientRect();r.style.cssText=`
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
            border-radius: ${v.sm};
            border-left: 2px solid ${n.amber};
          ">Previously sent: ${new Date(t).toLocaleString()}.
          Clicking Send again will re-send.</div>`:""}
  `,r.appendChild(d);let c=["TC","ACQ","MT","DISPO","Property"],p={};e.forEach(_=>{p[_.group]||(p[_.group]=[]),p[_.group].push(_)});let u=[...c.filter(_=>p[_]),...Object.keys(p).filter(_=>!c.includes(_))];for(let _ of u){let y=p[_],g=document.createElement("div");g.style.cssText="margin-top: 12px;";let x=document.createElement("div");x.style.cssText=`
      font-family: ${h.mono};
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid ${n.steel};
    `,x.textContent=_,g.appendChild(x),y.forEach($=>{let f=document.createElement("div"),w=!$.filled&&$.navigable&&$.field_id;f.style.cssText=`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: ${v.sm};
        font-size: 12px;
        color: ${$.filled?n.bone:n.ash};
        ${w?"cursor: pointer;":""}
        transition: background 0.1s ease;
      `,w&&(f.addEventListener("mouseenter",()=>{f.style.background=n.slate}),f.addEventListener("mouseleave",()=>{f.style.background="transparent"}),f.addEventListener("click",k=>{k.stopPropagation(),$.field_id&&(yg($.field_id,$.folder),Ne())}));let S=$.filled?`<span style="color: ${n.emerald}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u2713</span>`:`<span style="color: ${n.amber}; font-size: 14px; line-height: 1; flex-shrink: 0;">\u25CB</span>`,T=w?`<span style="margin-left: auto; color: ${n.ash}; font-size: 11px;">\u2192</span>`:"";f.innerHTML=`${S}<span style="flex: 1;">${$.label}</span>${T}`,g.appendChild(f)}),r.appendChild(g)}document.body.appendChild(r);let b=_=>{let y=_.target;!r.contains(y)&&!o.contains(y)&&(Ne(),document.removeEventListener("click",b))};window.setTimeout(()=>document.addEventListener("click",b),0)},Ve=(e,t)=>{let o=e.querySelector(".ws-stc-label"),r=e.querySelector(".ws-stc-dot"),a=e.querySelector(".ws-stc-chevron"),s,i,l=n.bone,d,c="One-Click Handoff",p="",u="pointer",b="1";switch(t.status){case"checking":s="transparent",i=n.steel,l=n.ash,d=n.coolGray,c="Checking\u2026",u="wait",b="0.8";break;case"ready":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c=t.previouslySentAt?"Re-send Handoff":"One-Click Handoff";break;case"incomplete":{let _=t.checks?.filter(g=>g.filled).length??0,y=t.checks?.length??0;s="transparent",i=n.amber,l=n.amber,d=n.amber,c=`${_} of ${y} Fields Ready`;break}case"sending":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sending\u2026",u="wait",b="0.8";break;case"sent":s=n.emerald,i=n.emerald,l="#0a0e14",d="#0a0e14",c="Sent \u2713";break;case"error":s="transparent",i=n.amber,l=n.amber,d=n.amber,c=t.message??"Try again";break}e.style.background=s,e.style.borderColor=i,e.style.color=l,e.style.cursor=u,e.style.opacity=b,r&&(r.style.background=d,r.style.boxShadow=t.status==="ready"||t.status==="sent"?`0 0 6px ${d}`:""),o&&(o.textContent=c),a&&(a.textContent=p)},vg=(e,t)=>{let o=document.createElement("button");o.id=mt,o.type="button",o.dataset.oppId=e;let r=pg(e),a=r?{status:r.checks.every(f=>f.filled)?"ready":"incomplete",checks:r.checks,previouslySentAt:r.previously_sent_at}:{status:"checking"},s=r?.send_meta??null;o.style.cssText=`
    ${z}
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
  `,Ve(o,a);let i=new Set,l=async()=>{if(a.status==="sending")return;let f=await bg(e,t);if(!f){a={status:"error",message:"Check failed \u2014 click to retry"},Ve(o,a);return}if(f.rate_limited){y=Date.now()+_,a={status:"error",checks:a.checks,message:"Rate-limited by GHL \u2014 will retry in 5m"},Ve(o,a),m.warn(`[stc] dry_run rate-limited \u2014 cooling down until ${new Date(y).toLocaleTimeString()}`);return}if(!Array.isArray(f.checks)||f.checks.length===0){a={status:"error",message:f.error||"Check failed \u2014 click to retry"},Ve(o,a),m.warn("[stc] dry_run returned no checks:",f);return}let w=f.pipeline_name;if(w&&w!=="Transaction Coordination"){m.debug(`[stc] dry_run reports pipeline="${w}" (not TC) \u2014 retracting button + caching`),oa.add(e),document.getElementById(mt)?.remove(),document.getElementById(Pt)?.remove(),Ne(),vr();return}let S=f.checks;if(a.checks&&a.checks.length===f.checks.length){let k=new Set;S=f.checks.map((C,E)=>a.checks[E]?.filled&&!C.filled?i.has(C.label)?C:(k.add(C.label),{...C,filled:!0}):C),i=k}else i=new Set;a={status:S.every(k=>k.filled)?"ready":"incomplete",checks:S,previouslySentAt:f.previously_sent_at??null},(f.closing_agent||f.property_address||f.closing_office)&&(s={name:(f.closing_agent?.name??"").trim(),email:(f.closing_agent?.email??"").trim(),closingOffice:(f.closing_office??"").trim(),propertyAddress:(f.property_address??"").trim()}),mg(e,{checks:S,previously_sent_at:f.previously_sent_at??null,pipeline_name:w,send_meta:s,ts:Date.now()}),Ve(o,a),document.getElementById(ta)&&Xn(S,f.previously_sent_at,o)},d=async()=>{let f=!!a.previouslySentAt;if(window.confirm(hg(s,a.previouslySentAt))){a={status:"sending",checks:a.checks,previouslySentAt:a.previouslySentAt},Ve(o,a),Ne();try{let w=await ug(e,t,f);if(w.needs_confirm){a={status:"ready",checks:w.checks,previouslySentAt:w.previously_sent_at},Ve(o,a),w.checks&&Xn(w.checks,w.previously_sent_at,o);return}if(w.ok){a={status:"sent",checks:w.checks,previouslySentAt:new Date().toISOString()},Ve(o,a),window.setTimeout(()=>{x()},3500);return}a={status:"error",checks:w.checks,message:w.error||"Validation failed"},Ve(o,a),w.checks&&Xn(w.checks,w.previously_sent_at,o)}catch(w){m.error("[stc] send failed:",w),a={status:"error",message:"Network error \u2014 click to retry"},Ve(o,a)}}};o.addEventListener("click",()=>{switch(a.status){case"ready":d();break;case"incomplete":{document.getElementById(ta)?Ne():a.checks&&Xn(a.checks,a.previouslySentAt,o);break}case"error":case"sent":x();break}});let c,p=!1,u=Date.now(),b=1e4,_=5*60*1e3,y=0,g=!1,x=async()=>{if(o.isConnected&&(g=!0),g&&!o.isConnected)return;let f=gr();if(!(!f||f.oppId!==e)&&!p){if(Date.now()<y){m.debug(`[stc] dry_run suppressed \u2014 rate-limit cooldown until ${new Date(y).toLocaleTimeString()}`);return}p=!0,u=Date.now();try{await l()}finally{p=!1}}};x();let $=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");if($){let f=new MutationObserver(()=>{if(c!==void 0||p)return;let T=Date.now()-u,k=Math.max(1500,b-T);c=window.setTimeout(()=>{c=void 0,a.status!=="sending"&&x()},k)});f.observe($,{childList:!0,subtree:!0,characterData:!0}),o.dataset.observerActive="1";let w=T=>{let k=T.detail;if(!k||k.oppId!==e)return;tp(e);let C=0,E=()=>{if(p&&C<8){C+=1,window.setTimeout(E,500);return}x()};E()};window.addEventListener(hi,w);let S=window.setInterval(()=>{document.body.contains(o)||(f.disconnect(),c!==void 0&&window.clearTimeout(c),window.removeEventListener(hi,w),window.clearInterval(S))},5e3)}return o},gg=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],fg=async()=>{for(let e of gg)try{let t=await N(e,{timeoutMs:1500});if(t)return m.debug(`[send-to-title-co] mount target: ${e}`),t}catch{}return m.warn(`[send-to-title-co] no mount target found. URL: ${window.location.pathname}`),null},oa=new Set,Xc=null,xg=e=>{e&&e!==Xc&&(oa.clear(),Xc=e)},ea=!1,vi=async()=>{if(ea){m.debug("[stc] mount:00-LOCKED ensureMounted already in-flight \u2014 skip");return}ea=!0;try{await wg()}catch(e){m.error("[stc] ensureMountedImpl threw:",e)}finally{ea=!1}},wg=async()=>{m.debug("[stc] mount:01 ensureMountedImpl entered");let e=gr();if(!e||!e.locationId){m.debug(`[stc] mount:02-BAIL no ctx or no locationId. ctx=${JSON.stringify(e)}`),document.getElementById(mt)?.remove(),document.getElementById(Pt)?.remove(),Ne();return}if(m.debug(`[stc] mount:02 ctx ok \u2014 oppId=${e.oppId} locId=${e.locationId}`),xg(e.oppId),oa.has(e.oppId)){m.debug(`[stc] mount:02-BAIL opp ${e.oppId} previously confirmed non-TC this session`),document.getElementById(mt)?.remove(),document.getElementById(Pt)?.remove(),Ne();return}let t=document.getElementById(mt);if(t&&t.dataset.oppId===e.oppId){m.debug("[stc] mount:03-SKIP existing button for same opp");let l=G();l!==null&&l!=="Transaction Coordination"&&(t.remove(),document.getElementById(Pt)?.remove(),Ne(),vr());return}t&&(m.debug("[stc] mount:03 removing stale existing button"),t.remove(),document.getElementById(Pt)?.remove(),Ne()),m.debug("[stc] mount:04 calling findMountTarget");let o=await fg();if(!o){m.debug("[stc] mount:04-BAIL findMountTarget returned null");return}m.debug(`[stc] mount:04 target found tag=${o.tagName} class="${o.className}"`);let r=G();if(r!==null&&r!=="Transaction Coordination"){m.debug(`[stc] mount:05-GATED DOM pipeline="${r}" \u2014 skipping mount`);return}let a=gr();if(!a||a.oppId!==e.oppId||!a.locationId){m.debug(`[stc] mount:06-BAIL ctx changed during awaits. was=${e.oppId} now=${a?.oppId}`);return}m.debug("[stc] mount:06 building button (pipeline gate will run via dry_run)");let s=vg(e.oppId,a.locationId),i=document.createElement("span");i.id=Pt,i.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 3;
  `,i.appendChild(s),re(o).appendChild(i),m.debug(`[stc] mount:07-OK Mounted on opp ${e.oppId}, inDoc=${document.body.contains(s)}`),kg(e.oppId)},yr=null,_i=null,vr=()=>{yr?.disconnect(),yr=null,_i=null},kg=e=>{if(yr&&_i===e)return;vr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(_i=e,yr=new MutationObserver(()=>{let o=gr();if(!o||o.oppId!==e){vr();return}let r=G();if(r!==null&&r!=="Transaction Coordination"){document.getElementById(mt)?.remove(),document.getElementById(Pt)?.remove(),Ne(),vr();return}document.getElementById(mt)||vi()}),yr.observe(t,{childList:!0,subtree:!0}))},Eg=()=>{oe("send-to-closing",ae,()=>{if(document.getElementById(mt)||ea)return;let e=gr();e&&oa.has(e.oppId)||vi()})},rp=()=>{Eg(),vi()};var np="ws-crm-vault-datepicker-panel",$g=1000010,ap=264,Tg=["S","M","T","W","T","F","S"],Cg=["January","February","March","April","May","June","July","August","September","October","November","December"],sp=()=>{let e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),t=o=>Number(e.find(r=>r.type===o)?.value??"0");return{y:t("year"),m:t("month"),d:t("day")}},Sg=e=>e%4===0&&e%100!==0||e%400===0,gi=(e,t)=>[31,Sg(e)?29:28,31,30,31,30,31,31,30,31,30,31][t-1],Lg=({y:e,m:t,d:o})=>o<gi(e,t)?{y:e,m:t,d:o+1}:t<12?{y:e,m:t+1,d:1}:{y:e+1,m:1,d:1},na=e=>String(e).padStart(2,"0"),fi=({y:e,m:t,d:o})=>`${e}-${na(t)}-${na(o)}`,ra=e=>{let[t,o,r]=e.split("-").map(Number);return{y:t,m:o,d:r}},Ag=e=>{let{y:t,m:o,d:r}=ra(e);return`${na(o)}/${na(r)}/${t}`},Mg=()=>fi(Lg(sp())),Ig=(e,t,o)=>{let r=[0,3,2,5,0,3,5,1,4,6,2,4],a=t<3?e-1:e;return(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+r[t-1]+o)%7},aa=(e,t)=>`<input id="${e}" type="text" inputmode="none" readonly autocomplete="off" placeholder="MM/DD/YYYY" data-vault-datepicker-field="1" style="${t}cursor:pointer;caret-color:transparent;">`,sa=e=>e?.dataset.isoValue??"",ia=(e,t={})=>{let o=document.getElementById(e);if(!o){m.warn(`[vault-datepicker] #${e} not found \u2014 skipping attach`);return}let r=t.minDate??Mg(),a=ra(r),s=fi(sp()),i=x=>{o.dataset.isoValue=x,o.value=x?Ag(x):""};t.initialValue&&i(t.initialValue);let l=null,d=a.y,c=a.m,p=()=>{l&&(l.remove(),l=null,document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",b,!0))};function u(x){let $=x.target;l&&!l.contains($)&&$!==o&&p()}function b(x){x.key==="Escape"&&p()}let _=x=>{i(x),p(),t.onChange?.(x)},y=()=>{if(!l)return;let x=l,$=d===a.y&&c===a.m,f=`${Cg[c-1]} ${d}`,w=o.dataset.isoValue||"",S=(B,U)=>`
      <button type="button" data-nav="${B}" aria-label="${B==="prev"?"Previous":"Next"} month" ${U?"disabled":""} style="
        background:transparent;border:none;color:${U?n.coolGray:n.ash};
        cursor:${U?"default":"pointer"};padding:2px 8px;font-size:15px;line-height:1.4;
        border-radius:${v.sm};font-family:${h.sans};
      ">${B==="prev"?"\u2039":"\u203A"}</button>`,T=Tg.map(B=>`<div style="text-align:center;font-family:${h.mono};font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:${n.ash};padding:4px 0;">${B}</div>`).join(""),k=Ig(d,c,1),C=gi(d,c),E=c===1?12:c-1,L=c===1?d-1:d,A=gi(L,E),M=[];for(let B=0;B<k;B++){let U=A-k+1+B;M.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};color:${n.coolGray};">${U}</div>`)}for(let B=1;B<=C;B++){let U=fi({y:d,m:c,d:B}),ee=U<r,Ee=U===w,Oe=U===s,Pe=`text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};border-radius:${v.sm};`;Ee?Pe+=`background:${n.emerald};color:${n.obsidian};font-weight:600;cursor:pointer;`:ee?Pe+=`color:${n.coolGray};opacity:0.5;cursor:default;`:Pe+=`color:${n.bone};cursor:pointer;`,Oe&&!Ee&&(Pe+=`box-shadow:inset 0 0 0 1px ${n.emerald};`),M.push(`<div data-iso="${U}" style="${Pe}">${B}</div>`)}let O=(k+C)%7,P=O===0?0:7-O;for(let B=1;B<=P;B++)M.push(`<div style="text-align:center;padding:5px 0;font-size:12px;font-family:${h.sans};color:${n.coolGray};">${B}</div>`);x.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 8px 6px;">
        ${S("prev",$)}
        <div style="font-size:12.5px;font-weight:600;color:${n.bone};font-family:${h.sans};">${f}</div>
        ${S("next",!1)}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);padding:0 10px;">${T}</div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:2px 10px 8px;">${M.join("")}</div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid ${n.steel};">
        <button type="button" data-action="clear" style="background:transparent;border:none;color:${n.emerald};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Clear</button>
        <button type="button" data-action="today" style="background:transparent;border:none;color:${n.emerald};font-family:${h.sans};font-size:12px;font-weight:500;cursor:pointer;padding:2px 4px;">Today</button>
      </div>
    `;let Z=x.querySelector('[data-nav="prev"]');Z&&!$&&(Z.addEventListener("mouseenter",()=>Z.style.color=n.bone),Z.addEventListener("mouseleave",()=>Z.style.color=n.ash),Z.addEventListener("click",()=>{c-=1,c<1&&(c=12,d-=1),y()}));let D=x.querySelector('[data-nav="next"]');D&&(D.addEventListener("mouseenter",()=>D.style.color=n.bone),D.addEventListener("mouseleave",()=>D.style.color=n.ash),D.addEventListener("click",()=>{c+=1,c>12&&(c=1,d+=1),y()})),x.querySelectorAll("[data-iso]").forEach(B=>{let U=B.dataset.iso||"";!U||U<r||(B.addEventListener("mouseenter",()=>{U!==w&&(B.style.background=n.slate)}),B.addEventListener("mouseleave",()=>{U!==w&&(B.style.background="transparent")}),B.addEventListener("click",()=>_(U)))});let V=x.querySelector('[data-action="clear"]');V?.addEventListener("mouseenter",()=>V.style.color=n.emeraldBright),V?.addEventListener("mouseleave",()=>V.style.color=n.emerald),V?.addEventListener("click",()=>_(""));let Y=x.querySelector('[data-action="today"]');Y?.addEventListener("mouseenter",()=>Y.style.color=n.emeraldBright),Y?.addEventListener("mouseleave",()=>Y.style.color=n.emerald),Y?.addEventListener("click",()=>{let B=ra(s);d=B.y,c=B.m,y()})},g=()=>{if(l)return;document.getElementById(np)?.remove();let x=o.dataset.isoValue||r,$=ra(x);d=$.y,c=$.m,l=document.createElement("div"),l.id=np;let f=o.getBoundingClientRect(),w=Math.max(8,Math.min(f.left,window.innerWidth-ap-8));l.style.cssText=`
      position:fixed;top:${f.bottom+6}px;left:${w}px;z-index:${$g};
      width:${ap}px;background:${n.graphite};border:1px solid ${n.steel};
      border-radius:${v.lg};box-shadow:0 14px 34px rgba(0,0,0,0.55);font-family:${h.sans};
    `,document.body.appendChild(l),y(),setTimeout(()=>{document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",b,!0)},0)};o.addEventListener("click",g),o.addEventListener("focus",g)};var kr="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",Og=`${kr}/tc/welcome-call-prefill`,Pg=`${kr}/tc/welcome-call-save`,Bg=`${kr}/tc/order-lockbox`,Hg=`${kr}/tc/order-photos`,Dg=`${kr}/tc/photo-price-quote`,fr="ws-crm-welcome-call-overlay",Er=[{value:15,label:"15 photos"},{value:30,label:"30 photos"},{value:50,label:"50 photos"}],Rg=[{value:"homejab",label:"Schedule photos right now with HomeJab"},{value:"later",label:"I'll schedule photos myself later"}],Ei=[{value:"anytime",label:"Anytime"},{value:"8amto11am",label:"8\u201311 AM"},{value:"9amto12pm",label:"9 AM\u201312 PM"},{value:"10amto1pm",label:"10 AM\u20131 PM"},{value:"11amto2pm",label:"11 AM\u20132 PM"},{value:"12pmto3pm",label:"12\u20133 PM"},{value:"1pmto4pm",label:"1\u20134 PM"},{value:"2pmto5pm",label:"2\u20135 PM"},{value:"3pmto6pm",label:"3\u20136 PM"}],Ng=["Regular Contract","Subject To","Seller Finance","Novation"],Fg=["City Water & Sewer","City Water & Septic","Well & Septic","Water Tank & Septic"],zg=["Gas","Electric","Propane","Oil"],qg=["Single Family Residence (SFR)","Multi-Family 2-4 Units","Multi-Family 5+ Units","Land","Commercial","Mobile Home"],jg=["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],bt=["Yes","No"],Ug=["Yes","No","Unknown"],Wg=["Professional Photographer","Seller","Tenant"],Gg=["Month-to-Month","Annual"],ip=["Current","Behind"],Kg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ye=e=>(e==null?"":String(e)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ko=`width:100%;box-sizing:border-box;padding:8px 9px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:13px;margin-top:4px;`,$i="margin-bottom:12px;",dp=`display:block;font-size:11px;color:${n.ash};text-transform:uppercase;letter-spacing:0.04em;`,Vg=`display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${n.bone};margin-right:10px;`,lp=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),be=(e,t,o)=>{let r=lp(o);return`<select id="${e}" style="${ko}"><option value=""></option>${t.map(a=>`<option ${r!==""&&lp(a)===r?"selected":""}>${ye(a)}</option>`).join("")}</select>`},Yg=(e,t,o)=>`<select id="${e}" style="${ko}">${t.map(r=>`<option value="${ye(r.value)}" ${r.value===o?"selected":""}>${ye(r.label)}</option>`).join("")}</select>`,_e=(e,t,o="")=>`<input id="${e}" type="text" value="${ye(t)}" placeholder="${ye(o)}" style="${ko}">`,cp=(e,t)=>`<textarea id="${e}" rows="3" style="${ko}resize:vertical;">${ye(t)}</textarea>`,Jg=(e,t)=>`<input id="${e}" type="date" value="${ye(t)}" style="${ko}">`,K=(e,t)=>`<div style="${$i}"><label style="${dp}">${ye(e)}</label>${t}</div>`,xi=(e,t)=>{let o=Array.isArray(t)?t:[];return`<div style="margin-top:4px;">${Kg.map(r=>`<label style="${Vg}"><input type="checkbox" data-grp="${e}" value="${r}" ${o.includes(r)?"checked":""}>${r}</label>`).join("")}</div>`},rt=e=>`<div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid ${n.steel};">${ye(e)}</div>`,xo=()=>{document.getElementById(fr)?.remove()},fo=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000001;padding:10px 16px;border-radius:${v.md};background:${n.graphite};border:1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};color:${t==="ok"?n.emerald:n.crimson};font-family:${h.sans};font-size:13px;font-weight:500;box-shadow:0 12px 32px rgba(0,0,0,0.5);`,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},Qg=e=>{let t=e.tenant||{},o=`
    ${K("Who is providing photos?",be("wc-photos_provided_by",Wg,e.photos_provided_by))}
    <div style="${$i}">
      <label style="${dp}">Seller availability for the shoot <span style="color:${n.coolGray};text-transform:none;letter-spacing:0;">(daylight hours \u2014 TC confirms the exact time with the vendor)</span></label>
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Mornings</div>${xi("photos_avail_mornings",e.photos_avail_mornings)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Afternoons</div>${xi("photos_avail_afternoons",e.photos_avail_afternoons)}
      <div style="font-size:11px;color:${n.ash};margin-top:8px;">Evenings</div>${xi("photos_avail_evenings",e.photos_avail_evenings)}
    </div>
  `,r=`
    ${Zg()}
    <div id="wc-photos-manual">${o}</div>
    <div id="wc-photos-homejab" style="display:none;">${Xg()}</div>
  `;return`
    ${rt("Identifiers")}
    <div style="font-size:13px;color:${n.bone};margin-bottom:4px;"><b>${ye(e.seller_name)||"(seller)"}</b></div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:6px;">${ye(e.deal_address)||"(no address on file)"}</div>

    ${rt("Contract")}
    ${K("Type of Contract",be("wc-contract_type",Ng,e.contract_type))}

    ${rt("Property")}
    ${K("Property Type",be("wc-property_type",qg,e.property_type))}
    <div style="display:flex;gap:10px;">
      <div style="flex:1;">${K("Beds",_e("wc-beds",e.beds))}</div>
      <div style="flex:1;">${K("Baths",_e("wc-baths",e.baths))}</div>
      <div style="flex:1;">${K("Sq Ft",_e("wc-sqft",e.sqft))}</div>
    </div>
    ${K("Utilities",be("wc-utilities",Fg,e.utilities))}
    ${K("Heat Source",be("wc-heat_source",zg,e.heat_source))}

    ${rt("Liens & Permits")}
    ${K("Is there a mortgage?",be("wc-has_mortgage",bt,e.has_mortgage))}
    <div id="wc-mortgage-detail" style="display:none;">${K("Mortgage payment status",be("wc-mortgage_payment_status",ip,e.mortgage_payment_status))}</div>
    ${K("Any other liens? (back taxes, code violations, HELOC, etc.)",be("wc-has_other_liens",bt,e.has_other_liens))}
    ${K("Any open or expired permits?",be("wc-has_permit_issues",bt,e.has_permit_issues))}
    ${K("Is the property in probate?",be("wc-in_probate",bt,e.in_probate))}

    ${rt("Occupancy")}
    ${K("Property occupancy",be("wc-occupancy",jg,e.occupancy))}
    <div id="wc-tenant-block" style="display:none;border-left:2px solid ${n.steel};padding-left:12px;margin:4px 0 8px;">
      <div style="font-size:11px;color:${n.ash};margin-bottom:8px;">Tenant (saved as its own linked contact)</div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("First name",_e("wc-tenant_first_name",t.first_name))}</div>
        <div style="flex:1;">${K("Last name",_e("wc-tenant_last_name",t.last_name))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Phone",_e("wc-tenant_phone",t.phone))}</div>
        <div style="flex:1;">${K("Email",_e("wc-tenant_email",t.email))}</div>
      </div>
      ${K("Lease type",be("wc-tenant_lease_type",Gg,t.lease_type))}
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Monthly rent",_e("wc-tenant_monthly_rent",t.monthly_rent))}</div>
        <div style="flex:1;">${K("Rent due day",_e("wc-tenant_rent_due_day",t.rent_due_day,"e.g. 1st"))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Rent status",be("wc-tenant_rent_status",ip,t.rent_status))}</div>
        <div style="flex:1;">${K("Last rent paid",Jg("wc-tenant_last_rent_paid",t.last_rent_paid))}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Lease on hand?",be("wc-tenant_lease_on_hand",bt,t.lease_on_hand))}</div>
        <div style="flex:1;">${K("Security deposit",_e("wc-tenant_security_deposit",t.security_deposit))}</div>
      </div>
      ${K("Selling with tenant in place?",be("wc-selling_with_tenant",bt,e.selling_with_tenant))}
    </div>

    ${rt("HOA")}
    ${K("Part of an HOA?",be("wc-in_hoa",bt,e.in_hoa))}
    <div id="wc-hoa-detail" style="display:none;">${K("HOA monthly fee",_e("wc-hoa_monthly_fee",e.hoa_monthly_fee))}${K("HOA rental restriction?",be("wc-hoa_rental_restriction",Ug,e.hoa_rental_restriction))}</div>

    ${rt("Photos & Access")}
    ${r}

    ${rt("Lockbox")}
    ${K("Lockbox needed?",be("wc-lockbox_needed",bt,e.lockbox_needed))}
    ${K("Lockbox code (agree with the seller; recorded on the property for future use)",_e("wc-lockbox_code",e.lockbox_code))}
    <div id="wc-lockbox-detail" style="display:none;">
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Recipient name",_e("wc-lockbox_recipient_name",e.lockbox_recipient_name))}</div>
        <div style="flex:1;">${K("Recipient phone",_e("wc-lockbox_recipient_phone",e.lockbox_recipient_phone))}</div>
      </div>
      ${K("Mailing address (if different from property)",_e("wc-lockbox_mailing_address",e.lockbox_mailing_address))}
      <div style="display:flex;align-items:center;gap:12px;margin-top:2px;">
        <button type="button" id="wc-order-lockbox" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${v.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${h.sans};cursor:pointer;flex-shrink:0;">${la(e).on?"Re-order Lockbox":"Order Lockbox"}</button>
        <span id="wc-lockbox-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${la(e).on?n.emerald:n.ash};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${la(e).on?n.emerald:n.amber};flex-shrink:0;"></span>${la(e).text}</span>
      </div>
      <div id="wc-lockbox-confirmation" style="display:none;margin-top:10px;padding:12px 14px;background:${n.slate};border:1px solid ${n.emeraldBorder};border-radius:${v.sm};"></div>
    </div>

    ${rt("Notes")}
    ${K("Welcome call notes (lien/permit specifics, HOA contact + docs, probate/deed status, anything else)",cp("wc-welcome_call_notes",e.welcome_call_notes))}
  `},F=e=>{let t=document.getElementById(e);return t?(t.value||"").trim():""},wi=e=>Array.from(document.querySelectorAll(`input[data-grp="${e}"]:checked`)).map(t=>t.value),ki=()=>{let e=(o,r)=>{let a=document.getElementById(o);a&&(a.style.display=r?"block":"none")};e("wc-mortgage-detail",F("wc-has_mortgage")==="Yes"),e("wc-hoa-detail",F("wc-in_hoa")==="Yes"),e("wc-lockbox-detail",F("wc-lockbox_needed")==="Yes"),e("wc-tenant-block",F("wc-occupancy")==="Tenant Occupied");let t=document.querySelector('input[name="wc-photo-mode"]:checked')?.value??"later";e("wc-photos-manual",t!=="homejab"),e("wc-photos-homejab",t==="homejab")},la=e=>{let t=e,o=String(t.lockbox_order_status??"").toLowerCase(),r=o==="ordered"||o==="shipped"||o==="delivered"||o==="queued",a=t.lockbox_order_date?ye(t.lockbox_order_date):"";return{on:r,text:r?`\u2713 Ordered${a?" "+a:""}`:"Not ordered yet"}},Zg=()=>`
  <div style="${$i}">
    ${Rg.map(e=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:6px;cursor:pointer;"><input type="radio" name="wc-photo-mode" value="${e.value}" ${e.value==="later"?"checked":""}>${ye(e.label)}</label>`).join("")}
  </div>
`,Xg=()=>{let e=Er.map((t,o)=>`<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wc-op-photocount" value="${t.value}" ${o===1?"checked":""}><span id="wc-op-pkg-label-${t.value}">${ye(t.label)}</span></label>`).join("");return`
    <div id="wc-op-form">
      ${K("Package",`<div style="margin-top:4px;">${e}</div>`)}
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wc-op-aerial"> <span id="wc-op-aerial-label">+ Aerial photos</span></label>
      <div style="display:flex;gap:10px;">
        <div style="flex:1;">${K("Shoot date",aa("wc-op-date",ko))}</div>
        <div style="flex:1;">${K("Time window",Yg("wc-op-time",Ei,"anytime"))}</div>
      </div>
      ${K("Must-have shots",cp("wc-op-shots",""))}
      ${K("Access notes (beyond the lockbox code on file)",_e("wc-op-access","","Optional \u2014 pets, gate code, parking\u2026"))}
      <div id="wc-op-total" style="font-size:13px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wc-op-error" style="display:none;font-size:12px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${v.sm};padding:8px 10px;margin:2px 0 12px;line-height:1.4;"></div>
      <button type="button" id="wc-order-photos" disabled style="background:transparent;border:1px solid ${n.steel};color:${n.bone};border-radius:${v.sm};padding:8px 14px;font-size:12px;font-weight:500;font-family:${h.sans};cursor:pointer;flex-shrink:0;opacity:0.5;">Order Photos</button>
    </div>
  `},Ti=e=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file for this account \u2014 the owner needs to add one.":"Lockbox order failed \u2014 try again.",Ci=(e,t)=>e==="charge_failed"?"Payment declined \u2014 check the card on file.":e==="no_billing_profile"?"No card on file \u2014 the owner needs to add one.":e==="vendor_order_failed"?t===!0?"Order failed after payment \u2014 the charge was automatically refunded. Ops has been alerted.":"Order failed after payment and the auto-refund ALSO failed \u2014 ops has been alerted to refund manually.":"Photo order failed \u2014 try again.",Bt=e=>Number.isFinite(e)?Number.isInteger(e)?String(e):e.toFixed(2):"0",wo=(e,t)=>`p${e}${t?"_aerial":""}`,Si=async e=>{try{let t=await fetch(Dg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,menu:!0}),credentials:"omit"});if(!t.ok){let o="quote_unavailable";try{let r=await t.json();r.reason&&(o=r.reason)}catch{}return{ok:!1,reason:o}}return await t.json()}catch(t){return m.warn("[photo-menu] fetch failed:",t),{ok:!1,reason:"quote_unavailable"}}},Li=(e,t)=>{let o=t?.[wo(e,!1)];return typeof o=="number"?`${e} photos \u2014 $${Bt(o)}`:`${e} photos`},Ai=(e,t)=>{let o=t?.[wo(e,!1)],r=t?.[wo(e,!0)];return typeof o=="number"&&typeof r=="number"?`+ Aerial photos (+$${Bt(r-o)})`:"+ Aerial photos"},xr="Pricing is temporarily unavailable \u2014 try again shortly",wr=e=>`Total: <span style="color:${n.emerald};font-weight:600;">$${Bt(e)}</span> \u2014 charged to the card on file`,Mi=e=>`Order HomeJab photos for this deal now? The card on file will be charged $${Bt(e)}. This cannot be reversed.`,Ii=e=>`HomeJab's price just changed \u2014 new total $${Bt(e)}. Confirm again to order.`,Oi=(e,t,o)=>`
  <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">HomeJab</div>
  <div style="font-size:14px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:8px;">Paid <span style="color:${n.emerald};">\u2713</span> $${Bt(o)} \u2014 HomeJab order #${ye(t)} placed.</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;margin-bottom:14px;">The shoot will appear on this deal once HomeJab confirms scheduling.</div>
  <button type="button" id="${e}-done" style="${pe} width:100%; justify-content:center;">Done</button>
`,ef=e=>typeof e=="number"&&Number.isFinite(e)?`Paid <span style="color:${n.emerald};">\u2713</span> $${Bt(e)} \u2014 lockbox ordered`:`Paid <span style="color:${n.emerald};">\u2713</span> \u2014 lockbox ordered`,tf="Ops will ship it and add tracking to the property record.",pp=e=>`
  <div style="font-size:13px;font-weight:600;color:${n.bone};line-height:1.4;margin-bottom:4px;">${ef(e)}</div>
  <div style="font-size:12px;color:${n.ash};line-height:1.5;">${tf}</div>
`,mp=(e,t)=>`
  <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Lockbox</div>
  ${pp(t)}
  <button type="button" id="${e}-done" style="${pe} width:100%; justify-content:center;margin-top:12px;">Done</button>
`,of=e=>({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,contract_type:F("wc-contract_type"),property_type:F("wc-property_type"),beds:F("wc-beds"),baths:F("wc-baths"),sqft:F("wc-sqft"),utilities:F("wc-utilities"),heat_source:F("wc-heat_source"),has_mortgage:F("wc-has_mortgage"),mortgage_payment_status:F("wc-mortgage_payment_status"),has_other_liens:F("wc-has_other_liens"),has_permit_issues:F("wc-has_permit_issues"),in_probate:F("wc-in_probate"),occupancy:F("wc-occupancy"),selling_with_tenant:F("wc-selling_with_tenant"),in_hoa:F("wc-in_hoa"),hoa_rental_restriction:F("wc-hoa_rental_restriction"),hoa_monthly_fee:F("wc-hoa_monthly_fee"),photos_provided_by:F("wc-photos_provided_by"),photos_avail_mornings:wi("photos_avail_mornings"),photos_avail_afternoons:wi("photos_avail_afternoons"),photos_avail_evenings:wi("photos_avail_evenings"),lockbox_needed:F("wc-lockbox_needed"),lockbox_code:F("wc-lockbox_code"),lockbox_recipient_name:F("wc-lockbox_recipient_name"),lockbox_recipient_phone:F("wc-lockbox_recipient_phone"),lockbox_mailing_address:F("wc-lockbox_mailing_address"),welcome_call_notes:F("wc-welcome_call_notes"),tenant:F("wc-occupancy")==="Tenant Occupied"?{first_name:F("wc-tenant_first_name"),last_name:F("wc-tenant_last_name"),phone:F("wc-tenant_phone"),email:F("wc-tenant_email"),lease_type:F("wc-tenant_lease_type"),monthly_rent:F("wc-tenant_monthly_rent"),rent_due_day:F("wc-tenant_rent_due_day"),rent_status:F("wc-tenant_rent_status"),last_rent_paid:F("wc-tenant_last_rent_paid"),lease_on_hand:F("wc-tenant_lease_on_hand"),security_deposit:F("wc-tenant_security_deposit")}:void 0}),rf=e=>{xo();let t=document.createElement("div");t.id=fr,t.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;overflow-y:auto;font-family:${h.sans};`;let o=document.createElement("div");o.style.cssText=`width:100%;max-width:680px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);`,o.innerHTML=`
    <style>#${fr} input[type="date"]::-webkit-calendar-picker-indicator,#${fr} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="position:sticky;top:0;background:${n.graphite};border-bottom:1px solid ${n.steel};border-radius:${v.lg} ${v.lg} 0 0;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;z-index:2;">
      <div>
        <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};">Transaction Coordination</div>
        <div style="font-size:16px;font-weight:600;color:${n.bone};margin-top:2px;">Welcome Call</div>
      </div>
      <button id="wc-close" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};width:30px;height:30px;font-size:16px;cursor:pointer;line-height:1;">\xD7</button>
    </div>
    <div style="padding:8px 20px 16px;">${Qg(e)}</div>
    <div style="position:sticky;bottom:0;background:${n.graphite};border-top:1px solid ${n.steel};border-radius:0 0 ${v.lg} ${v.lg};padding:14px 20px;display:flex;justify-content:flex-end;gap:10px;">
      <button id="wc-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:9px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wc-save" type="button" style="${pe}">Complete Welcome Call</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",y=>{y.target===t&&xo()}),document.getElementById("wc-close")?.addEventListener("click",xo),document.getElementById("wc-cancel")?.addEventListener("click",xo);let r=null,a=null,s=0,i=y=>{let g=document.getElementById("wc-order-photos");g&&(g.disabled=y,g.style.opacity=y?"0.5":"1")},l=y=>{let g=document.getElementById("wc-op-error");g&&(g.textContent=y,g.style.display="block")},d=()=>{let y=document.getElementById("wc-op-error");y&&(y.style.display="none",y.textContent="")},c=()=>{let y=Number(document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30"),g=document.getElementById("wc-op-aerial")?.checked??!1;Er.forEach(w=>{let S=document.getElementById(`wc-op-pkg-label-${w.value}`);S&&(S.textContent=Li(w.value,r))});let x=document.getElementById("wc-op-aerial-label");x&&(x.textContent=Ai(y,r));let $=document.getElementById("wc-op-total"),f=r?.[wo(y,g)];typeof f=="number"?(a={tenant_price:f},$&&($.innerHTML=wr(f)),i(!1)):(a=null,$&&($.textContent=r?"":"Getting price\u2026"),i(!0))},p=async()=>{let y=++s;r=null,d(),c();let g=await Si(String(e.tenant_id??""));if(y===s)if(g.ok&&g.menu)r=g.menu,c();else{r=null;let x=document.getElementById("wc-op-total");x&&(x.textContent=""),l(xr),i(!0)}};["wc-has_mortgage","wc-in_hoa","wc-lockbox_needed","wc-occupancy"].forEach(y=>{document.getElementById(y)?.addEventListener("change",ki)}),document.querySelectorAll('input[name="wc-photo-mode"]').forEach(y=>{y.addEventListener("change",()=>{ki(),y.checked&&y.value==="homejab"&&p()})}),document.querySelectorAll('input[name="wc-op-photocount"]').forEach(y=>{y.addEventListener("change",c)}),document.getElementById("wc-op-aerial")?.addEventListener("change",c),document.getElementById("wc-op-date")&&ia("wc-op-date"),ki();let u=document.getElementById("wc-save");u?.addEventListener("click",async()=>{if(!F("wc-occupancy")){fo("Set the property occupancy before completing.","err");return}u.textContent="Saving\u2026",u.style.opacity="0.8",u.disabled=!0;try{(await fetch(Pg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(of(e)),credentials:"omit"})).ok?(xo(),fo("Welcome call saved \u2014 deal advanced to Scheduling Photos \u2713")):(u.textContent="Complete Welcome Call",u.style.opacity="1",u.disabled=!1,fo("Save failed \u2014 try again.","err"))}catch(y){m.warn("[welcome-call] save failed:",y),u.textContent="Complete Welcome Call",u.style.opacity="1",u.disabled=!1,fo("Couldn't reach the save handler. Try again.","err")}});let b=document.getElementById("wc-order-lockbox");b?.addEventListener("click",async()=>{if(!window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed."))return;let y=document.getElementById("wc-lockbox-status"),g=document.getElementById("wc-lockbox-confirmation");b.disabled=!0,b.textContent="Ordering\u2026";try{let x=await fetch(Bg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,contact_id:e.contact_id,property_record_id:e.property_record_id,deal_address:e.deal_address,ship_to:F("wc-lockbox_mailing_address")||e.deal_address||"",recipient_name:F("wc-lockbox_recipient_name"),recipient_phone:F("wc-lockbox_recipient_phone"),source:"welcome-call"}),credentials:"omit"});if(x.ok){let $=await x.json().catch(()=>({}));b.textContent="Re-order Lockbox",b.disabled=!1,y&&(y.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered just now`,y.style.color=n.emerald),g&&(g.innerHTML=pp(typeof $.price=="number"?$.price:void 0),g.style.display="block")}else{let $="";try{$=String((await x.json()).reason??"")}catch{}b.textContent="Order Lockbox",b.disabled=!1,fo(Ti($),"err")}}catch(x){m.warn("[welcome-call] order lockbox failed:",x),b.textContent="Order Lockbox",b.disabled=!1,fo("Couldn't reach the lockbox handler. Try again.","err")}});let _=document.getElementById("wc-order-photos");_?.addEventListener("click",async()=>{let y=document.getElementById("wc-op-date"),g=sa(y);if(!g){l("Pick a shoot date first.");return}if(!a){l(xr);return}if(!window.confirm(Mi(a.tenant_price)))return;d();let x=document.querySelector('input[name="wc-op-photocount"]:checked')?.value||"30",$=document.getElementById("wc-op-aerial")?.checked??!1,f=document.getElementById("wc-op-time")?.value||"anytime";_.disabled=!0,_.textContent="Ordering\u2026";try{let w=await fetch(Hg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenant_id,opp_id:e.opp_id,package:{photocount:Number(x),aerial:$},quoted_price:a.tenant_price,scheduling_date:g,scheduling_time:f,must_have_shots:F("wc-op-shots"),access_extra:F("wc-op-access")}),credentials:"omit"});if(w.ok){let k=await w.json().catch(()=>({})),C=String(k.hj_order_id??""),E=document.getElementById("wc-op-form");E&&(E.innerHTML=Oi("wc-op",C,Number(k.tenant_price??a.tenant_price)),document.getElementById("wc-op-done")?.addEventListener("click",()=>{E.innerHTML=`<span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:${n.emerald};"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>\u2713 Ordered \u2014 HomeJab #${ye(C)}</span>`}));return}if(w.status===409){let k=null;try{let C=await w.json();C.reason==="reprice"&&typeof C.tenant_price=="number"&&(k=C.tenant_price)}catch{}if(k!==null){a={tenant_price:k};let C=document.getElementById("wc-op-total");C&&(C.innerHTML=wr(k)),l(Ii(k))}else l("HomeJab's price just changed. Refresh and try again.");_.disabled=!1,_.textContent="Order Photos";return}let S="",T;try{let k=await w.json();S=String(k.reason??""),T=k.refunded}catch{}_.disabled=!1,_.textContent="Order Photos",l(Ci(S,T))}catch(w){m.warn("[welcome-call] order photos failed:",w),_.disabled=!1,_.textContent="Order Photos",l("Couldn't reach the photo order handler. Try again.")}})},bp=async(e,t)=>{xo();let o=document.createElement("div");o.id=fr,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;color:${n.ash};font-family:${h.sans};font-size:14px;`,o.textContent="Loading welcome call\u2026",document.body.appendChild(o);let r={ok:!0,opp_id:e,tenant_id:t};try{let a=await fetch(`${Og}?tc_opp_id=${encodeURIComponent(e)}&tenant_id=${encodeURIComponent(t)}`,{method:"GET",headers:{Accept:"application/json"},credentials:"omit"});if(a.ok){let s=await a.json();r={...s,opp_id:s.opp_id||e,tenant_id:t}}else m.warn(`[welcome-call] prefill returned ${a.status} \u2014 opening blank`)}catch(a){m.warn("[welcome-call] prefill fetch failed \u2014 opening blank:",a)}r.tenant_id=t,rf(r)};var ma="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os",nf=`${ma}/tc/confirm-photo-appointment`,af=`${ma}/tc/order-lockbox`,sf=`${ma}/tc/order-photos`,lf=`${ma}/tc/welcome-call-prefill`,Bi="ws-crm-opp-action-bar",hp="ws-crm-opp-overflow",_p="ws-crm-opp-action-menu",pa="ws-crm-opp-action-popover",yp="ws-crm-reorder-lockbox-modal",vp=".hr-card.hr-modal.crm-opportunities-modal",df=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,cf=/\/v2\/location\/([A-Za-z0-9]+)/,gp="Welcome Call Needed",Di="Scheduling Photos",fp="Photos Scheduled",pf=[gp,Di,fp,"Photos Received","Marketing Deal","Assigned","EMD Received","Clear to Close","Funded","Lost"],xp=()=>{let e=window.location.pathname,t=e.match(df);if(!t)return null;let o=e.match(cf);return o?{oppId:t[1],locationId:o[1]}:null},mf=()=>{let e=document.querySelector(vp);if(!e)return null;let t=e.querySelectorAll(".hr-base-selection-overlay__wrapper, .hr-base-selection");for(let o of t){let r=o.textContent?.trim()??"";if(pf.includes(r))return r}return null},Fe=()=>{document.getElementById(_p)?.remove(),document.getElementById(pa)?.remove(),document.getElementById(yp)?.remove()},Eo=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ht=(e,t="ok")=>{let o=document.createElement("div");o.style.cssText=`
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 1000000; padding: 10px 16px; border-radius: ${v.md};
    background: ${n.graphite};
    border: 1px solid ${t==="ok"?n.emeraldBorder:"rgba(212,63,74,0.4)"};
    color: ${t==="ok"?n.emerald:n.crimson};
    font-family: ${h.sans}; font-size: 13px; font-weight: 500;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  `,o.textContent=e,document.body.appendChild(o),window.setTimeout(()=>o.remove(),4200)},bf=e=>{bp(e.oppId,e.locationId)},uf=async(e,t,o)=>{let r=await fetch(af,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,contact_id:t.contact_id||"",property_record_id:t.property_record_id||"",deal_address:t.deal_address||"",ship_to:o.ship_to,recipient_name:o.recipient_name,recipient_phone:o.recipient_phone,source:"tc-reorder"}),credentials:"omit"});if(r.ok){let s;try{let i=await r.json();typeof i.price=="number"&&(s=i.price)}catch{}return{ok:!0,reason:"",price:s}}let a="";try{a=String((await r.json()).reason??"")}catch{}return{ok:!1,reason:a}},hf=(e,t)=>{Fe();let o=document.createElement("div");o.id=yp,o.style.cssText=`position:fixed;inset:0;z-index:1000000;background:rgba(5,7,10,0.72);display:flex;align-items:center;justify-content:center;padding:24px;font-family:${h.sans};`;let r=document.createElement("div");r.style.cssText=`width:100%;max-width:440px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};box-shadow:0 24px 60px rgba(0,0,0,0.6);padding:22px 24px;`;let a=`width:100%;box-sizing:border-box;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:13px;padding:9px 11px;outline:none;margin-bottom:12px;`,s=`display:block;font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:${n.ash};margin-bottom:4px;`,i=t.lockbox_mailing_address||t.deal_address||"";r.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:6px;">Lockbox</div>
    <div style="font-size:17px;font-weight:600;color:${n.bone};margin-bottom:6px;">Re-order Lockbox</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:16px;line-height:1.45;">A re-order usually ships to a different person or place than the original. Confirm where this lockbox should go.</div>
    <label style="${s}">Recipient name</label>
    <input id="wsrl-name" type="text" style="${a}" value="${Eo(t.lockbox_recipient_name)}" />
    <label style="${s}">Recipient phone</label>
    <input id="wsrl-phone" type="text" style="${a}" value="${Eo(t.lockbox_recipient_phone)}" />
    <label style="${s}">Shipping address</label>
    <textarea id="wsrl-address" rows="2" style="${a}resize:vertical;">${Eo(i)}</textarea>
    <div style="font-size:11px;color:${n.amber};margin:2px 0 16px;line-height:1.4;">This will be charged to the default credit card on file. This cannot be reversed.</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="wsrl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.ash};border-radius:${v.sm};padding:8px 16px;font-size:13px;font-weight:500;font-family:${h.sans};cursor:pointer;">Cancel</button>
      <button id="wsrl-submit" type="button" style="${pe}">Order Lockbox</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o);let l=()=>o.remove();o.addEventListener("click",c=>{c.target===o&&l()}),document.getElementById("wsrl-cancel")?.addEventListener("click",l);let d=document.getElementById("wsrl-submit");d?.addEventListener("click",async()=>{let c=document.getElementById("wsrl-name")?.value.trim()||"",p=document.getElementById("wsrl-phone")?.value.trim()||"",u=document.getElementById("wsrl-address")?.value.trim()||"";if(!c||!u){Ht("Add a recipient name and shipping address.","err");return}if(window.confirm("Order a lockbox for this deal now? The lockbox will be charged to the default credit card on file. This cannot be reversed.")){d.disabled=!0,d.textContent="Ordering\u2026";try{let b=await uf(e,t,{recipient_name:c,recipient_phone:p,ship_to:u});b.ok?(r.innerHTML=mp("wsrl",b.price),r.querySelector("#wsrl-done")?.addEventListener("click",l)):(d.disabled=!1,d.textContent="Order Lockbox",Ht(Ti(b.reason),"err"))}catch(b){m.warn("[action-bar] reorder lockbox failed:",b),d.disabled=!1,d.textContent="Order Lockbox",Ht("Couldn't reach the lockbox handler. Try again.","err")}}})},wp=async e=>{Fe();let t={};try{t=await fetch(`${lf}?tc_opp_id=${encodeURIComponent(e.oppId)}&tenant_id=${encodeURIComponent(e.locationId)}`,{credentials:"omit"}).then(o=>o.json())}catch{}hf(e,t)},_f=(e,t)=>{Fe();let o=document.createElement("div");o.id=pa;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 280px; padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `,o.innerHTML=`
    <style>#${pa} input[type="datetime-local"]::-webkit-calendar-picker-indicator{filter:invert(48%) sepia(99%) saturate(1200%) hue-rotate(190deg);cursor:pointer;opacity:1}</style>
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Confirm Photos</div>
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Booked date &amp; time (daylight)</label>
    <input id="wsap-dt" type="datetime-local" style="width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:12px;" />
    <label style="display:block;font-size:11px;color:${n.ash};margin-bottom:4px;">Photo vendor</label>
    <input id="wsap-vendor" type="text" placeholder="e.g. SnapPro Media" style="width:100%;box-sizing:border-box;margin-bottom:12px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:12px;" />
    <button id="wsap-confirm" type="button" style="${pe} width:100%; justify-content:center;">Confirm &amp; Advance</button>
  `,document.body.appendChild(o);let a=o.querySelector("#wsap-dt"),s=o.querySelector("#wsap-vendor"),i=o.querySelector("#wsap-confirm");i?.addEventListener("click",async()=>{if(!a?.value){Ht("Pick the booked date and time first.","err");return}i.textContent="Booking\u2026",i.style.opacity="0.8";try{(await fetch(nf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,photo_datetime:new Date(a.value).toISOString(),photo_vendor:s?.value?.trim()||null}),credentials:"omit"})).ok?(Fe(),Ht("Photo shoot booked \u2014 deal advanced to Photos Scheduled \u2713")):(i.textContent="Confirm & advance",i.style.opacity="1",Ht("Booking failed \u2014 try again.","err"))}catch(d){m.warn("[action-bar] confirm photo failed:",d),i.textContent="Confirm & advance",i.style.opacity="1",Ht("Couldn't reach the booking handler. Try again.","err")}});let l=d=>{let c=d.target;!o.contains(c)&&!t.contains(c)&&(Fe(),document.removeEventListener("click",l))};window.setTimeout(()=>document.addEventListener("click",l),0)},yf=(e,t)=>{Fe();let o=document.createElement("div");o.id=pa;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 320px; max-width: 340px;
    max-height: calc(100vh - 90px); overflow-y: auto;
    padding: 14px 16px;
    background: ${n.graphite}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `;let a=`width:100%;box-sizing:border-box;margin-bottom:10px;padding:7px 8px;background:${n.slate};border:1px solid ${n.steel};border-radius:${v.sm};color:${n.bone};font-family:${h.sans};font-size:12px;`,s=`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,i=Er.map((f,w)=>`<label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:4px;"><input type="radio" name="wsop-photocount" value="${f.value}" ${w===1?"checked":""}><span id="wsop-pkg-label-${f.value}">${Eo(f.label)}</span></label>`).join(""),l=Ei.map(f=>`<option value="${Eo(f.value)}" ${f.value==="anytime"?"selected":""}>${Eo(f.label)}</option>`).join("");o.innerHTML=`
    <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};margin-bottom:10px;">Order Photos \u2014 HomeJab</div>
    <div id="wsop-form">
      <label style="${s}">Package</label>
      <div style="margin:2px 0 10px;">${i}</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:${n.bone};margin-bottom:12px;"><input type="checkbox" id="wsop-aerial"><span id="wsop-aerial-label">+ Aerial photos</span></label>
      <label style="${s}">Shoot date</label>
      ${aa("wsop-date",a)}
      <label style="${s}">Time window</label>
      <select id="wsop-time" style="${a}">${l}</select>
      <label style="${s}">Must-have shots</label>
      <textarea id="wsop-shots" rows="2" style="${a}resize:vertical;" placeholder="e.g. curb appeal, kitchen island, primary suite"></textarea>
      <label style="${s}">Access notes (beyond the lockbox code on file)</label>
      <input id="wsop-access" type="text" style="${a}" placeholder="Optional \u2014 pets, gate code, parking\u2026" />
      <div id="wsop-total" style="font-size:11px;color:${n.ash};margin:2px 0 12px;line-height:1.4;">Getting price\u2026</div>
      <div id="wsop-error" style="display:none;font-size:11px;color:${n.crimson};background:rgba(212,63,74,0.08);border:1px solid rgba(212,63,74,0.3);border-radius:${v.sm};padding:7px 9px;margin:2px 0 12px;line-height:1.4;"></div>
      <button id="wsop-submit" type="button" disabled style="${pe} width:100%; justify-content:center; opacity:0.5;">Order Photos</button>
    </div>
  `,document.body.appendChild(o),ia("wsop-date");let d=null,c=null,p=0,u=f=>{let w=o.querySelector("#wsop-submit");w&&(w.disabled=f,w.style.opacity=f?"0.5":"1")},b=f=>{let w=o.querySelector("#wsop-error");w&&(w.textContent=f,w.style.display="block")},_=()=>{let f=o.querySelector("#wsop-error");f&&(f.style.display="none",f.textContent="")},y=()=>{let f=Number(o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30"),w=o.querySelector("#wsop-aerial")?.checked??!1;Er.forEach(C=>{let E=o.querySelector(`#wsop-pkg-label-${C.value}`);E&&(E.textContent=Li(C.value,d))});let S=o.querySelector("#wsop-aerial-label");S&&(S.textContent=Ai(f,d));let T=o.querySelector("#wsop-total"),k=d?.[wo(f,w)];typeof k=="number"?(c={tenant_price:k},T&&(T.innerHTML=wr(k)),u(!1)):(c=null,T&&(T.textContent=d?"":"Getting price\u2026"),u(!0))},g=async()=>{let f=++p;d=null,_(),y();let w=await Si(e.locationId);if(f===p)if(w.ok&&w.menu)d=w.menu,y();else{d=null;let S=o.querySelector("#wsop-total");S&&(S.textContent=""),b(xr),u(!0)}};o.querySelectorAll('input[name="wsop-photocount"]').forEach(f=>{f.addEventListener("change",y)}),o.querySelector("#wsop-aerial")?.addEventListener("change",y),g();let x=o.querySelector("#wsop-submit");x?.addEventListener("click",async()=>{let f=o.querySelector("#wsop-date"),w=sa(f);if(!w){b("Pick a shoot date first.");return}if(!c){b(xr);return}if(!window.confirm(Mi(c.tenant_price)))return;_();let S=o.querySelector('input[name="wsop-photocount"]:checked')?.value||"30",T=o.querySelector("#wsop-aerial")?.checked??!1,k=o.querySelector("#wsop-time")?.value||"anytime",C=o.querySelector("#wsop-shots")?.value.trim()||"",E=o.querySelector("#wsop-access")?.value.trim()||"";x.disabled=!0,x.textContent="Ordering\u2026";try{let L=await fetch(sf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.locationId,opp_id:e.oppId,package:{photocount:Number(S),aerial:T},quoted_price:c.tenant_price,scheduling_date:w,scheduling_time:k,must_have_shots:C,access_extra:E}),credentials:"omit"});if(L.ok){let O=await L.json().catch(()=>({})),P=o.querySelector("#wsop-form");P&&(P.innerHTML=Oi("wsop",String(O.hj_order_id??""),Number(O.tenant_price??c.tenant_price)),o.querySelector("#wsop-done")?.addEventListener("click",()=>Fe()));return}if(L.status===409){let O=null;try{let P=await L.json();P.reason==="reprice"&&typeof P.tenant_price=="number"&&(O=P.tenant_price)}catch{}if(O!==null){c={tenant_price:O};let P=o.querySelector("#wsop-total");P&&(P.innerHTML=wr(O)),b(Ii(O))}else b("HomeJab's price just changed. Refresh and try again.");x.disabled=!1,x.textContent="Order Photos";return}let A="",M;try{let O=await L.json();A=String(O.reason??""),M=O.refunded}catch{}x.disabled=!1,x.textContent="Order Photos",b(Ci(A,M))}catch(L){m.warn("[action-bar] order photos failed:",L),x.disabled=!1,x.textContent="Order Photos",b("Couldn't reach the photo order handler. Try again.")}});let $=f=>{let w=f.target;!o.contains(w)&&!t.contains(w)&&(Fe(),document.removeEventListener("click",$))};window.setTimeout(()=>document.addEventListener("click",$),0)},vf=(e,t)=>{Fe();let o=document.createElement("div");o.id=_p;let r=t.getBoundingClientRect();o.style.cssText=`
    position: fixed; top: ${r.bottom+6}px;
    right: ${Math.max(16,window.innerWidth-r.right)}px;
    z-index: 999999; min-width: 200px; padding: 6px;
    background: ${n.slate}; border: 1px solid ${n.steel};
    border-radius: ${v.md}; box-shadow: 0 14px 34px rgba(0,0,0,0.55);
    font-family: ${h.sans};
  `;for(let s of e){let i=document.createElement("div");i.textContent=s.label,i.style.cssText=`padding:9px 11px;font-size:12.5px;color:${n.bone};border-radius:${v.sm};cursor:pointer;`,i.addEventListener("mouseenter",()=>i.style.background=n.steel),i.addEventListener("mouseleave",()=>i.style.background="transparent"),i.addEventListener("click",l=>{l.stopPropagation(),s.onClick()}),o.appendChild(i)}document.body.appendChild(o);let a=s=>{let i=s.target;!o.contains(i)&&!t.contains(i)&&(Fe(),document.removeEventListener("click",a))};window.setTimeout(()=>document.addEventListener("click",a),0)},$r=(e,t)=>{let o=document.createElement("button");return o.type="button",t==="primary"?o.style.cssText=pe:o.style.cssText=z,o.textContent=e,o},gf=()=>{let e=$r("\u22EE","ghost");return e.style.lineHeight="1",e},ff=(e,t)=>{let o=document.createElement("span");if(o.style.cssText="display:inline-flex;align-items:center;gap:8px;",t===gp){let r=$r("Start Welcome Call","ghost");return r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Start Welcome Call</span>`,r.addEventListener("click",()=>bf(e)),o.appendChild(r),o}if(t===Di){let r=$r("Order Photos","ghost");r.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Order Photos</span>`,r.addEventListener("click",()=>yf(e,r)),o.appendChild(r);let a=$r("Confirm Photos","ghost");return a.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.amber};box-shadow:0 0 6px ${n.amber};flex-shrink:0;"></span><span>Confirm Photos</span>`,a.addEventListener("click",()=>_f(e,a)),o.appendChild(a),o}if(t===fp){let r=$r("Re-order Lockbox","ghost");return r.addEventListener("click",()=>void wp(e)),o.appendChild(r),o}return null},xf=(e,t)=>{let o=[];if(t===Di&&(o=[{label:"Re-order Lockbox",onClick:()=>void wp(e)}]),!o.length)return null;let r=document.createElement("span");r.id=hp,r.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:4;";let a=gf();return a.addEventListener("click",s=>{s.stopPropagation(),vf(o,a)}),r.appendChild(a),r},wf=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],kf=async()=>{for(let e of wf)try{let t=await N(e,{timeoutMs:1200});if(t)return t}catch{}return null},da=()=>{document.getElementById(Bi)?.remove(),document.getElementById(hp)?.remove(),Fe()},ca=!1,Ri=async()=>{if(!ca){ca=!0;try{let e=xp();if(!e){da();return}let t=G();if(t===null)return;if(t!=="Transaction Coordination"){da();return}let o=mf(),r=document.getElementById(Bi);if(r&&r.dataset.oppId===e.oppId&&r.dataset.stage===(o??""))return;let a=ff(e,o);if(!a){da();return}let s=await kf();if(!s)return;da();let i=re(s),l=document.createElement("span");l.id=Bi,l.dataset.oppId=e.oppId,l.dataset.stage=o??"",l.style.cssText="display:inline-flex;align-items:center;flex-shrink:0;vertical-align:middle;order:1;",l.appendChild(a),i.appendChild(l);let d=xf(e,o);d&&i.appendChild(d),Ef(e.oppId)}catch(e){m.error("[action-bar] ensureBar threw:",e)}finally{ca=!1}}},Tr=null,Hi=null,Pi,up=()=>{Tr?.disconnect(),Tr=null,Hi=null},Ef=e=>{if(Tr&&Hi===e)return;up();let t=document.querySelector(vp);t&&(Hi=e,Tr=new MutationObserver(()=>{let o=xp();if(!o||o.oppId!==e){up();return}Pi===void 0&&(Pi=window.setTimeout(()=>{Pi=void 0,Ri()},250))}),Tr.observe(t,{childList:!0,subtree:!0}))},$f=()=>{oe("opp-action-bar",".crm-opportunities-modal .ui-modal-heading",()=>{ca||Ri()})},kp=()=>{$f(),Ri()};var Tf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Ni=null,Ep=null,$p=async()=>{let e=J(),t=H();if(!e||!t)return null;if(Ni&&Ep===e)return Ni;try{let a=(await(await fetch(Tf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,action:"list"})})).json())?.roster?.find(i=>i.id===t);if(!a)return null;let s={name:[a.first_name,a.last_name].filter(Boolean).join(" ").trim(),email:(a.email??"").trim(),phone:(a.phone??"").trim(),role:(a.roles??[])[0]?.display??""};return Ni=s,Ep=e,s}catch(o){return m.warn("[current-rep] roster load failed",o),null}};var nt="ws-support-modal",Tp="ws-support-toast",Cf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/support/submit",Cp="ws-support-submitter-name",Sp="ws-support-submitter-email",Lp="ws-support-submitter-role",Sf=["Bug","Feature Request","Question","Billing","Onboarding Help"],Dt=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Lf=(e,t="success",o)=>{let r=document.getElementById(Tp);r&&r.remove();let a=document.createElement("div");a.id=Tp;let s=t==="success"?n.emerald:n.crimson;a.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100000;
    background: ${n.graphite};
    border: 1px solid ${s};
    border-left: 4px solid ${s};
    border-radius: ${v.md};
    padding: 14px 20px;
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-width: 340px;
    animation: ws-toast-in 0.2s ease-out;
  `,a.innerHTML=`
    <div style="font-weight: 500;">${Dt(e)}</div>
    ${o?`<div style="font-size: 12px; color: ${n.ash}; margin-top: 4px;">${Dt(o)}</div>`:""}
  `,document.body.appendChild(a),setTimeout(()=>{a.style.transition="opacity 0.3s, transform 0.3s",a.style.opacity="0",a.style.transform="translateY(20px)",setTimeout(()=>a.remove(),300)},6e3)},Ip=()=>{document.getElementById(nt)?.remove();let e=(localStorage.getItem(Cp)??"").trim(),t=(localStorage.getItem(Sp)??"").trim(),o=(localStorage.getItem(Lp)??"").trim(),r={category:null,title:"",description:"",submitterName:e,submitterEmail:t,submitterRole:o},a=document.createElement("div");a.id=nt,a.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  `;let i=l=>`
    <button type="button" data-category="${Dt(l)}" class="ws-support-tile" style="
      background: ${n.steel}; color: ${n.bone};
      border: 1px solid ${n.steel}; border-radius: ${v.md};
      padding: 12px 10px; cursor: pointer; font-family: ${h.sans};
      font-size: 13px; font-weight: 500; text-align: center;
      transition: border-color 0.12s, background 0.12s;
    ">${Dt(l)}</button>
  `;s.innerHTML=`
    <style id="ws-support-modal-style">
      /* Muted placeholder ("helper") text inside every field. !important +
         id-scope beats the VAULT theme's global "input::placeholder { coolGray
         !important }" rule (theme-stylesheet.ts ~L945). */
      #${nt} input::placeholder,
      #${nt} textarea::placeholder {
        color: ${n.ash} !important;
        -webkit-text-fill-color: ${n.ash} !important;
        opacity: 1 !important;
      }
      /* Kill Chrome's autofill wash on Name/Email (the gray box): keep the field
         obsidian and the text bone even when the browser autofills it. */
      #${nt} input:-webkit-autofill,
      #${nt} input:-webkit-autofill:hover,
      #${nt} input:-webkit-autofill:focus,
      #${nt} input:-webkit-autofill:active {
        -webkit-text-fill-color: ${n.bone};
        -webkit-box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        box-shadow: 0 0 0 1000px ${n.obsidian} inset;
        caret-color: ${n.bone};
        border: 1px solid ${n.steel};
        border-radius: ${v.sm};
        transition: background-color 9999s ease-in-out 0s;
      }
    </style>
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: ${n.emeraldBright}; margin-bottom: 4px;">Submit a Support Ticket</div>
    <div style="font-size: 13px; color: ${n.ash}; margin-bottom: 18px;">Get help from the REInvest OS team. Tickets are tracked and answered as fast as we can.</div>

    <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 8px;">Category</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px;">
      ${Sf.map(i).join("")}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Name</div>
        <input id="ws-support-name" type="text" autocomplete="off" value="${Dt(e)}" placeholder="Your full name" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;">
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Email</div>
        <input id="ws-support-email" type="email" autocomplete="off" value="${Dt(t)}" placeholder="you@company.com" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;">
      </div>
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Your Role (optional)</div>
      <input id="ws-support-role" type="text" autocomplete="off" value="${Dt(o)}" placeholder="ACQ Rep / Manager / Owner / etc" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Title</div>
      <input id="ws-support-title" type="text" autocomplete="off" placeholder="Short summary" style="width: 100%; box-sizing: border-box; padding: 8px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px;">
    </div>

    <div style="margin-bottom: 16px;">
      <div style="font-size: 12px; font-weight: 500; color: ${n.bone}; margin-bottom: 6px;">Description</div>
      <textarea id="ws-support-description" rows="5" autocomplete="off" placeholder="Walk us through what happened. The more detail the faster we can help." style="width: 100%; box-sizing: border-box; padding: 10px 12px; background: ${n.obsidian}; color: ${n.bone}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; font-family: ${h.sans}; font-size: 13px; resize: vertical;"></textarea>
    </div>

    <div id="ws-support-err" style="color: ${n.crimson}; font-size: 12px; min-height: 18px; margin-bottom: 8px;"></div>

    <div style="display: flex; justify-content: flex-end; gap: 8px;">
      <button id="ws-support-close" type="button" style="background: transparent; color: ${n.ash}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; padding: 8px 18px; cursor: pointer; font-family: ${h.sans}; font-size: 13px;">Close</button>
      <button id="ws-support-submit" type="button" style="background: ${n.emerald}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 22px; cursor: pointer; font-family: ${h.sans}; font-size: 13px; font-weight: 600;">Submit Ticket</button>
    </div>
  `,a.appendChild(s),document.body.appendChild(a),Jt(s),$p().then(l=>{if(!l||!document.getElementById(nt))return;let d=(c,p)=>{let u=s.querySelector(c);u&&!u.value.trim()&&p&&(u.value=p)};d("#ws-support-name",l.name),d("#ws-support-email",l.email),d("#ws-support-role",l.role)}),a.addEventListener("click",l=>{l.target===a&&a.remove()}),s.querySelectorAll(".ws-support-tile").forEach(l=>{l.addEventListener("mouseenter",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.emerald,l.style.background=n.emeraldGlow)}),l.addEventListener("mouseleave",()=>{l.dataset.selected!=="true"&&(l.style.borderColor=n.steel,l.style.background=n.steel)}),l.addEventListener("click",()=>{r.category=l.dataset.category||null,s.querySelectorAll(".ws-support-tile").forEach(d=>{d===l?(d.dataset.selected="true",d.style.borderColor=n.emerald,d.style.background=n.emeraldGlow,d.style.color=n.emeraldBright):(d.dataset.selected="false",d.style.borderColor=n.steel,d.style.background=n.steel,d.style.color=n.bone)})})}),s.querySelector("#ws-support-close")?.addEventListener("click",()=>a.remove()),s.querySelector("#ws-support-submit")?.addEventListener("click",async()=>{let l=s.querySelector("#ws-support-err"),d=u=>{l&&(l.textContent=u)};if(d(""),r.title=(s.querySelector("#ws-support-title")?.value||"").trim(),r.description=(s.querySelector("#ws-support-description")?.value||"").trim(),r.submitterName=(s.querySelector("#ws-support-name")?.value||"").trim(),r.submitterEmail=(s.querySelector("#ws-support-email")?.value||"").trim(),r.submitterRole=(s.querySelector("#ws-support-role")?.value||"").trim(),!r.category){d("Pick a category at the top.");return}if(!r.title){d("Add a title \u2014 a short summary.");return}if(!r.description){d("Add a description so we know what you're seeing.");return}if(!r.submitterName){d("Tell us who you are (Your Name).");return}if(!r.submitterEmail||!/.+@.+\..+/.test(r.submitterEmail)){d("Add a valid email so we can reply.");return}let c=J();if(!c){d("Couldn't detect which tenant you're in. Refresh the page and try again.");return}try{localStorage.setItem(Cp,r.submitterName),localStorage.setItem(Sp,r.submitterEmail),r.submitterRole&&localStorage.setItem(Lp,r.submitterRole)}catch{}let p=s.querySelector("#ws-support-submit");p&&(p.disabled=!0,p.textContent="Submitting\u2026",p.style.opacity="0.7");try{let b=await(await fetch(Cf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:c,category:r.category,title:r.title,description:r.description,submitter_user_id:H()||"",submitter_name:r.submitterName,submitter_email:r.submitterEmail,submitter_role:r.submitterRole||"",url:window.location.href,browser_info:(navigator.userAgent||"").slice(0,500)})})).json();if(!b.ok){d(b.error||"Failed to submit ticket."),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1");return}a.remove();let _=b.ticket_short_id||"submitted";Lf(`Ticket ${_} submitted`,"success","We'll respond as fast as we can. Thanks for the heads up.")}catch(u){d(`Network error: ${u.message}`),p&&(p.disabled=!1,p.textContent="Submit Ticket",p.style.opacity="1")}})},Af=["/support-ticket","ws-support-modal","ws-support"],Mf=/\/custom-menu-link\//,Fi=!1,Ap=()=>{if(Fi||!Mf.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return Af.some(i=>s.includes(i))});if(r){Fi=!0,m.info(`[support-nav] detected custom-menu-link route + matching iframe (src=${r.src}) \u2014 opening modal + navigating back`);try{history.back()}catch{}setTimeout(()=>{Ip(),Fi=!1},50);return}e<10&&setTimeout(t,150)};t()},If=e=>{if(!(e instanceof Element))return!1;let t=e.closest("a.custom-link");return!!t&&/^\s*Support\s*$/.test(t.textContent||"")},Mp=!1,Op=()=>{Mp||(Mp=!0,document.addEventListener("click",e=>{If(e.target)&&(e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),m.info("[support-nav] intercepted Support click (capture) \u2014 opening modal in place, no GHL navigation"),Ip())},!0),Se(()=>setTimeout(Ap,50)),Ap(),m.info("[support-nav] URL + iframe watcher installed (page-router subscription)"))};var Pp="ws-phone-assignments-modal",Bp="ws-phone-assignments-toast",Of="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Pf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/save",Bf=["ACQ","DISPO","TC"],Rp="",ut=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Hf=(e,t="success",o)=>{document.getElementById(Bp)?.remove();let r=document.createElement("div");r.id=Bp;let a=t==="success"?n.emerald:n.crimson;r.style.cssText=`
    position: fixed; bottom: 32px; right: 32px; z-index: 100001;
    background: ${n.graphite}; border: 1px solid ${a};
    border-left: 4px solid ${a}; border-radius: ${v.md};
    padding: 14px 20px; color: ${n.bone}; font-family: ${h.sans};
    font-size: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); max-width: 340px;`,r.innerHTML=`<div style="font-weight:500;">${ut(e)}</div>${o?`<div style="font-size:12px;color:${n.ash};margin-top:4px;">${ut(o)}</div>`:""}`,document.body.appendChild(r),setTimeout(()=>{r.style.transition="opacity 0.3s, transform 0.3s",r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>r.remove(),300)},5e3)},Df=(e,t,o)=>{let r=[`<option value="" ${o===Rp?"selected":""}>\u2014 Unassigned \u2014</option>`,...t.map(a=>`<option value="${ut(a)}" ${o===a?"selected":""}>${ut(a)}</option>`)].join("");return`<select data-assign="${ut(e)}" style="
    padding: 6px 10px; background: ${n.obsidian}; color: ${n.bone};
    border: 1px solid ${n.steel}; border-radius: ${v.sm};
    font-family: ${h.sans}; font-size: 12px; min-width: 130px;">${r}</select>`},Rf=`display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-bottom:1px solid ${n.steel};`,qi=async e=>{document.getElementById(Pp)?.remove();let t=e||J(),o=document.createElement("div");o.id=Pp,o.style.cssText=`position: fixed; inset: 0; z-index: 100000;
    background: rgba(10,13,18,0.75); display:flex; align-items:center;
    justify-content:center; font-family:${h.sans};`;let r=document.createElement("div");if(r.style.cssText=`width:min(620px,94vw); max-height:90vh; overflow-y:auto;
    background:${n.graphite}; border:1px solid ${n.steel};
    border-radius:${v.lg}; padding:28px 32px; color:${n.bone};
    box-shadow:0 16px 40px rgba(0,0,0,0.5);`,r.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};margin-bottom:4px;">Phone Number Assignments</div>
    <div style="font-size:13px;color:${n.ash};margin-bottom:18px;">Map each phone number to a team. Local-presence dialing keeps each team on its own numbers, so callbacks route to the right people. (Rep roles live in Manage Team; multi-role reps pick their team at the dialer.)</div>
    <div id="ws-pa-body" style="font-size:13px;color:${n.ash};">Loading\u2026</div>`,o.appendChild(r),document.body.appendChild(o),o.addEventListener("click",b=>{b.target===o&&o.remove()}),!t){let b=r.querySelector("#ws-pa-body");b&&(b.textContent="Couldn't detect which tenant you're in. Refresh and try again.");return}let a={};try{a=await(await fetch(`${Of}?tenant_id=${encodeURIComponent(t)}`,{method:"GET",credentials:"omit"})).json()}catch(b){m.error("[phone-assignments] GET failed",b);let _=r.querySelector("#ws-pa-body");_&&(_.innerHTML=`<span style="color:${n.crimson};">Couldn't load assignments (${ut(b.message)}). The backend may not be wired yet.</span>`);return}let s=a.teams&&a.teams.length?a.teams:Bf,i=a.numbers??[],l={...a.config?.numberTeam??{}},d=b=>`<div style="padding:8px 10px;color:${n.coolGray};font-size:12px;">No ${b} found.</div>`,c=i.length?i.map(b=>`<div style="${Rf}">
            <div style="min-width:0;">
              <div style="color:${n.bone};font-size:13px;font-weight:500;">${ut(b.label||b.e164)}</div>
              <div style="color:${n.coolGray};font-size:11px;font-family:${h.mono};">${ut(b.e164)}</div>
            </div>
            ${Df(`num:${b.e164}`,s,l[b.e164]??Rp)}
          </div>`).join(""):d("phone numbers"),p=b=>`<div style="font-size:12px;font-weight:600;color:${n.bone};margin:18px 0 6px;letter-spacing:0.04em;text-transform:uppercase;">${b}</div>`,u=r.querySelector("#ws-pa-body");u&&(u.innerHTML=`
    ${p("Numbers \u2192 Team")}
    <div style="border:1px solid ${n.steel};border-radius:${v.md};overflow:hidden;">${c}</div>
    <div id="ws-pa-err" style="color:${n.crimson};font-size:12px;min-height:18px;margin-top:10px;"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button id="ws-pa-close" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-family:${h.sans};font-size:13px;">Close</button>
      <button id="ws-pa-save" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-family:${h.sans};font-size:13px;font-weight:600;">Save</button>
    </div>`,u.querySelectorAll("select[data-assign]").forEach(b=>{b.addEventListener("change",()=>{let _=b.getAttribute("data-assign")||"",[y,...g]=_.split(":"),x=g.join(":");y==="num"&&(b.value?l[x]=b.value:delete l[x])})}),u.querySelector("#ws-pa-close")?.addEventListener("click",()=>o.remove()),u.querySelector("#ws-pa-save")?.addEventListener("click",async()=>{let b=u.querySelector("#ws-pa-err"),_=g=>{b&&(b.textContent=g)};_("");let y=u.querySelector("#ws-pa-save");y&&(y.disabled=!0,y.textContent="Saving\u2026",y.style.opacity="0.7");try{let x=await(await fetch(Pf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,numberTeam:l})})).json();if(!x.ok){_(x.error||"Save failed."),y&&(y.disabled=!1,y.textContent="Save",y.style.opacity="1");return}o.remove(),Hf("Phone assignments saved","success","Local-presence dialing will use these team pools.")}catch(g){_(`Network error: ${g.message}`),y&&(y.disabled=!1,y.textContent="Save",y.style.opacity="1")}}))},Nf=["ws-phone-assignments","phone-assignments"],Ff=/\/custom-menu-link\//,zi=!1,Hp=()=>{if(zi||!Ff.test(window.location.pathname))return;let e=0,t=()=>{e++;let r=Array.from(document.querySelectorAll("iframe")).find(a=>{let s=a.src||a.getAttribute("src")||"";return Nf.some(i=>s.includes(i))});if(r){zi=!0;let a=window.location.pathname.match(/\/location\/([A-Za-z0-9]+)/),s=a?a[1]:void 0;m.info(`[phone-assignments] custom-menu-link route detected (src=${r.src}) \u2014 opening modal (loc=${s})`);try{history.back()}catch{}setTimeout(()=>{qi(s),zi=!1},50);return}e<10&&setTimeout(t,150)};t()},Dp=!1,Np=()=>{if(Dp)return;Dp=!0,Se(()=>setTimeout(Hp,50)),Hp();let e=()=>{window.location.hash.replace("#","")==="ws-phone-assignments"&&qi()};window.addEventListener("hashchange",e),e(),window.WS_CRM_OPEN_PHONE_ASSIGNMENTS=()=>void qi(),m.info("[phone-assignments] mounted (route + hash + window trigger)")};var Fp="powerDialerApp",zf=".dialer",qf='button[aria-label="Voice Calling"], button[title="Voice Calling"]',jf=".dial-item.dial-btn.dial-btn-enabled",_t=e=>{for(let t of["pointerdown","mousedown","pointerup","mouseup","click"])try{e.dispatchEvent(new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window}))}catch{}},Uf=e=>{let t=(e||"").match(/\+\d{10,15}/);return t?t[0]:null},zp=e=>{let t=(e||"").match(/^\+1(\d{3})(\d{3})(\d{4})$/);return t?`(${t[1]}) ${t[2]}-${t[3]}`:e},ht=null,qp=()=>ht,ji=()=>{try{let t=window[Fp]?._context?.provides?.emitter;if(t&&typeof t.emit=="function")return t}catch(e){m.debug("[dialer-bridge] getEmitter failed",e)}return null},at=()=>document.querySelector(zf),ba=()=>ji()!==null||at()!==null?!0:!!window[Fp],Ui=(e,t)=>{let o=ji();if(!o)return m.warn(`[dialer-bridge] no emitter; cannot emit ${e}`),!1;try{return o.emit(e,t),!0}catch(r){return m.error(`[dialer-bridge] emit ${e} threw`,r),!1}},Wi=()=>{if(at())return;let e=document.querySelector(qf);e?_t(e):m.warn("[dialer-bridge] Voice Calling button not found")},Wf=()=>{let e=document.querySelector(".number-list-container")||at();if(!e)return[];let t=[];for(let o of e.querySelectorAll(".number")){let r=(o.innerText||"").replace(/\s+/g," ").trim();!r||/closest to the contact/i.test(r)||t.push({label:r,el:o})}return t},Cr=()=>{let e=document.querySelector(".number-config, .dialer-config"),t=e?Uf(e.innerText):null;return t&&(ht={e164:t,label:ht?.e164===t?ht.label:void 0}),t},jp=(e,t)=>{if(Cr()===e)return ht={e164:e,label:t||ht?.label},!0;let o=ji();if(o)try{return o.emit("selectNumber",{phoneNumber:e,friendlyName:t||e}),ht={e164:e,label:t},!0}catch(r){m.warn("[dialer-bridge] selectNumber emit failed",r)}if(t){let r=document.querySelector(".number-config, .dialer-config");r&&_t(r);let a=Wf(),s=a.find(i=>i.label===t)||a.find(i=>i.label.includes(t));if(s)return _t(s.el),ht={e164:e,label:t},!0}return m.warn(`[dialer-bridge] could not select Calling From ${e} (${t||""})`),!1},Up=e=>{let t=e.replace(/[^\d*#+]/g,"");if(Ui("sendDigitToDial",{value:t,fromInput:!0}))return;let o=[...document.querySelectorAll(".dial-item")];for(let r of t){let a=o.find(s=>s.querySelector(".dial-number")?.textContent?.trim()===r);a&&_t(a)}},Wp=()=>{let e=at();if(!e)return m.warn("[dialer-bridge] no dialer present to place call"),!1;let t=e.querySelector(jf)||[...e.querySelectorAll(".dial-item.dial-btn, button")].find(o=>{let a=getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!a)return!1;let s=+a[1],i=+a[2],l=+a[3];return i>120&&i>s+40&&i>l+40&&o.offsetWidth>=40&&o.offsetWidth<=95&&o.querySelector("svg")!==null});return t?(_t(t),!0):Ui("makeCall",{provider:"twilio"})},Gi=()=>{let e=at()?.innerText||"";return/Outgoing Call|Connected|On Call|\d{1,2}:\d{2}/.test(e)&&!/Call Summary|Call Ended/.test(e)},Ki=()=>{let e=document.getElementById("end-call-button");if(e)return _t(e),!0;let t=at();if(t){let o=[...t.querySelectorAll("button")].find(a=>{let s=(a.textContent||"").replace(/\s+/g," ").trim();return/^.{0,4}end call.{0,4}$/i.test(s)&&s.length<24});if(o)return _t(o),!0;let r=[...t.querySelectorAll("button, .dial-item")].find(a=>{let i=getComputedStyle(a).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return!1;let l=+i[1],d=+i[2],c=+i[3];return l>150&&l>d+60&&l>c+60&&a.offsetWidth>=32&&a.querySelector("svg")!==null});if(r)return _t(r),!0}return m.warn("[dialer-bridge] endCall: no hang-up control (#end-call-button absent, no End Call button)"),!1},Gp=()=>{Ui("closeCallBox")},Kp=e=>{let t=!1,o=()=>{let s=at()?.innerText||"",i=/Outgoing Call|Connected|\d{1,2}:\d{2}/.test(s)&&!/Call Summary|Call Ended/.test(s),l=/Call Summary|Call Ended/.test(s);if(i&&(t=!0),t&&l){t=!1;try{e()}catch(d){m.error("[dialer-bridge] onCallEnded cb threw",d)}}},r=new MutationObserver(o);r.observe(document.body,{childList:!0,subtree:!0,characterData:!0});let a=window.setInterval(o,500);return()=>{r.disconnect(),window.clearInterval(a)}};var Vp={201:[40.84,-74.05],202:[38.9,-77.04],203:[41.29,-73.12],204:[51.2,-98.73],205:[33.43,-86.89],206:[47.56,-122.35],207:[44,-69.99],208:[44.42,-115.56],209:[37.6,-121],210:[29.42,-98.49],212:[40.71,-74.01],213:[34.05,-118.24],214:[32.86,-96.84],215:[40.05,-75],216:[41.47,-81.62],217:[39.92,-88.9],218:[46.3,-94.06],219:[41.57,-87.26],220:[39.75,-82.66],223:[40.15,-76.58],224:[42.15,-87.95],225:[30.45,-91.15],226:[43.23,-81.23],227:[39.05,-77.12],228:[30.39,-88.85],229:[31.21,-83.72],231:[43.02,-85.18],234:[41.06,-81.31],235:[37.15,-93.91],236:[50.43,-121.52],239:[26.46,-81.8],240:[39.05,-77.12],248:[42.54,-83.26],249:[46.04,-80],250:[50.84,-121.84],251:[30.72,-88.06],252:[35.42,-77.43],253:[47.23,-122.37],254:[31.2,-97.58],256:[34.42,-86.64],260:[41.13,-85.13],262:[42.99,-88.04],267:[40.05,-75],269:[42.27,-85.45],270:[37.44,-87.01],272:[41.24,-76.1],274:[43.95,-88.28],276:[37.55,-77.46],279:[38.54,-121.4],281:[29.71,-95.3],283:[39.35,-84.5],289:[43.57,-79.33],301:[39.05,-77.12],302:[39.53,-75.61],303:[39.78,-105],304:[39.36,-81.16],305:[25.74,-80.36],306:[51.4,-105.69],307:[42.4,-105.56],308:[40.92,-99.4],309:[40.93,-89.86],310:[33.9,-118.35],312:[41.88,-88.2],313:[42.31,-83.2],314:[38.65,-90.32],315:[43.25,-75.86],316:[37.69,-97.34],317:[39.87,-86.07],318:[32.28,-92.94],319:[41.92,-91.78],320:[45.56,-94.16],321:[28.38,-81.15],323:[33.99,-118.21],325:[31.96,-100.09],326:[39.85,-84.12],329:[41.47,-74.06],330:[41.06,-81.31],331:[41.88,-88.09],332:[40.71,-74.01],334:[32.19,-85.86],336:[35.99,-79.86],337:[30.24,-92.5],339:[42.39,-71.1],341:[37.43,-121.81],343:[44.96,-76.09],346:[29.71,-95.3],347:[40.69,-73.96],350:[37.6,-121],351:[42.6,-71.23],352:[28.37,-81.78],353:[43.04,-89.56],360:[47.41,-122.57],361:[28.04,-97.42],363:[40.7,-73.6],364:[37.44,-87.01],365:[43.58,-79.35],369:[38.51,-122.53],380:[40.01,-83.01],385:[40.65,-111.88],386:[29.17,-81.11],401:[41.77,-71.42],402:[41.24,-96.88],403:[51.21,-113.59],404:[33.73,-84.37],405:[35.5,-97.41],406:[46.41,-111.57],407:[28.39,-81.31],408:[37.27,-121.88],409:[29.66,-94.44],410:[39.25,-76.59],412:[40.4,-79.92],413:[42.2,-72.71],414:[42.95,-87.95],415:[37.93,-122.52],416:[43.46,-79.7],417:[37.15,-93.91],418:[47.22,-71.38],419:[41.13,-83.21],423:[35.84,-83.68],424:[33.9,-118.35],425:[47.73,-121.86],431:[51.2,-98.73],432:[32.03,-102.02],434:[37.34,-79.02],435:[39.27,-112.69],437:[43.7,-79.42],438:[45.55,-73.88],440:[41.48,-81.7],442:[33.67,-116.76],443:[39.25,-76.59],445:[40.05,-75],447:[39.92,-88.9],448:[30.42,-86.61],450:[45.79,-73.22],458:[43.77,-123.19],463:[39.87,-86.07],464:[41.71,-87.73],469:[32.87,-96.83],472:[34.76,-78.45],475:[41.29,-73.12],478:[32.73,-83.62],479:[35.85,-93.99],480:[33.43,-111.79],484:[40.25,-75.46],501:[34.77,-92.42],502:[38.23,-85.32],503:[45.35,-122.8],504:[29.94,-90.09],505:[35.55,-107.15],506:[46.57,-66.06],507:[44.05,-92.94],508:[42.01,-71.22],509:[46.77,-118.73],510:[37.43,-121.81],512:[30.36,-97.77],513:[39.35,-84.5],514:[46.13,-73.36],515:[41.84,-93.75],516:[40.7,-73.6],517:[42.49,-84.14],518:[42.82,-73.83],519:[43.21,-81.14],520:[32.12,-110.98],530:[39.34,-121.57],531:[41.24,-96.88],539:[36.18,-95.78],540:[37.83,-79.5],541:[43.77,-123.19],551:[40.84,-74.05],557:[38.65,-90.32],559:[36.51,-119.54],561:[26.56,-80.14],562:[33.9,-118.08],563:[41.76,-90.6],564:[47.41,-122.57],567:[41.13,-83.21],570:[41.24,-76.1],571:[38.83,-77.27],572:[35.5,-97.41],573:[38.28,-91.34],574:[41.67,-86.07],575:[33.02,-104.64],579:[45.76,-73.28],580:[35.17,-97.96],581:[47.26,-71.35],582:[40.94,-78.82],585:[43.17,-77.58],586:[42.54,-82.97],587:[52.69,-113.7],601:[32.2,-89.96],602:[33.45,-112.07],603:[43.05,-71.33],604:[49.31,-122.98],605:[44.47,-99.18],606:[38.48,-82.64],607:[42.21,-76.41],608:[43.04,-89.56],609:[39.97,-74.71],610:[40.25,-75.46],612:[44.97,-93.32],613:[44.94,-76.4],614:[40.01,-83.01],615:[36.11,-86.59],616:[42.92,-85.73],617:[42.35,-71.1],618:[38.57,-89.93],619:[32.72,-117.05],620:[38.05,-98.75],623:[33.58,-112.3],626:[34.08,-118.01],628:[37.93,-122.52],629:[36.11,-86.59],630:[41.88,-88.09],631:[40.79,-73.21],636:[38.71,-90.6],639:[51.64,-106],640:[39.97,-74.71],641:[42.07,-92.84],645:[25.74,-80.36],646:[40.71,-74.01],647:[43.7,-79.42],650:[37.53,-122.28],651:[44.91,-93.08],656:[28.05,-82.43],657:[33.8,-117.92],659:[33.43,-86.89],660:[38.7,-93.23],661:[35.12,-118.77],662:[34.11,-89.63],667:[39.25,-76.59],669:[37.27,-121.88],678:[33.81,-84.36],679:[42.31,-83.2],680:[43.25,-75.86],681:[39.36,-81.16],682:[32.76,-97.22],686:[38.83,-77.27],689:[28.39,-81.31],701:[47.46,-99],702:[36.14,-115.11],703:[38.83,-77.27],704:[35.37,-80.75],705:[45.72,-80.31],706:[33.64,-83.94],707:[38.51,-122.53],708:[41.71,-87.73],709:[48.95,-55.96],712:[41.88,-96.13],713:[29.71,-95.3],714:[33.8,-117.92],715:[45.25,-90.7],716:[42.88,-78.9],717:[40.15,-76.58],718:[40.69,-73.96],719:[38.64,-104.75],720:[39.78,-105],724:[40.57,-79.99],725:[36.14,-115.11],726:[29.42,-98.49],727:[28.01,-82.74],730:[38.57,-89.93],731:[35.61,-88.81],732:[40.42,-74.32],734:[42.25,-83.41],737:[30.36,-97.77],740:[39.75,-82.66],743:[35.99,-79.86],747:[34.19,-118.44],754:[26.14,-80.2],757:[36.87,-76.31],760:[33.67,-116.76],762:[33.64,-83.94],763:[45.1,-93.36],765:[40.29,-85.94],769:[32.2,-89.96],770:[33.83,-84.36],771:[38.9,-77.04],772:[27.37,-80.35],773:[41.88,-88.2],774:[42.01,-71.22],775:[38.61,-118.83],778:[50.34,-122.21],779:[42.05,-88.62],780:[53.93,-113.87],781:[42.39,-71.1],782:[45.07,-63.87],785:[38.98,-96.88],786:[25.74,-80.36],801:[40.65,-111.88],802:[44.36,-72.87],803:[34.09,-81.06],804:[37.46,-77.42],805:[34.6,-119.7],806:[34.33,-101.8],807:[47.5,-88.85],808:[20.96,-157.24],810:[42.99,-83.24],812:[38.67,-86.39],813:[28.05,-82.43],814:[40.94,-78.82],815:[42.05,-88.62],816:[39.1,-94.5],817:[32.76,-97.22],818:[34.19,-118.44],819:[46.34,-73.47],820:[34.6,-119.7],825:[53.55,-113.32],826:[37.46,-77.42],828:[35.67,-81.95],830:[29.48,-99.33],831:[36.76,-121.77],832:[29.71,-95.3],835:[40.25,-75.46],838:[42.82,-73.83],839:[34.09,-81.06],840:[34.07,-117.54],843:[33.09,-79.9],845:[41.47,-74.06],847:[42.15,-87.95],848:[40.42,-74.32],850:[30.42,-86.61],854:[33.09,-79.9],856:[39.74,-75.05],857:[42.35,-71.1],858:[32.96,-117.04],859:[38.45,-84.48],860:[41.67,-72.64],861:[40.93,-89.86],862:[40.83,-74.22],863:[28.03,-81.84],864:[34.72,-82.29],865:[35.93,-84.11],867:[62.31,-105.97],870:[34.65,-91.68],872:[41.88,-88.2],873:[46.47,-74.1],878:[40.46,-79.96],901:[35.12,-89.85],902:[45.44,-63.16],903:[33.01,-95.53],904:[30.25,-81.61],905:[43.57,-79.33],907:[60.27,-141.14],908:[40.66,-74.29],909:[34.07,-117.54],910:[34.76,-78.45],912:[32.13,-81.49],913:[39.03,-94.72],914:[41.03,-73.81],915:[31.71,-106.4],916:[38.54,-121.4],917:[40.7,-73.97],918:[36.18,-95.78],919:[35.73,-78.77],920:[43.95,-88.28],925:[37.89,-121.94],928:[34.32,-113.55],929:[40.69,-73.96],930:[38.67,-86.39],931:[36.1,-86.63],934:[40.79,-73.21],936:[30.99,-95.1],937:[39.85,-84.12],938:[34.42,-86.64],940:[33.39,-97.54],941:[27.2,-82.34],943:[33.73,-84.37],945:[32.86,-96.84],947:[42.54,-83.26],948:[36.87,-76.31],949:[33.57,-117.73],951:[33.82,-117.26],952:[44.84,-93.41],954:[26.14,-80.2],956:[26.3,-98.14],959:[41.67,-72.64],970:[40.12,-105.85],971:[45.35,-122.8],972:[32.87,-96.83],973:[40.83,-74.22],978:[42.6,-71.23],979:[30.11,-96.05],980:[35.37,-80.75],983:[39.78,-105],984:[35.73,-78.77],985:[29.98,-90.33],986:[44.42,-115.56],989:[43.53,-84.16]},Gf=3958.8,ua=e=>e*Math.PI/180,Kf=(e,t)=>{let o=ua(t[0]-e[0]),r=ua(t[1]-e[1]),a=Math.sin(o/2)**2+Math.cos(ua(e[0]))*Math.cos(ua(t[0]))*Math.sin(r/2)**2;return 2*Gf*Math.asin(Math.sqrt(a))},Yp=(e,t)=>{let o=Vp[e];if(!o)return null;let r=null;for(let a of[...new Set(t)].sort()){let s=Vp[a];if(!s)continue;let i=Kf(o,s);(!r||i<r.miles)&&(r={code:a,miles:i})}return r};var Vf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/phone-assignments/get",Yf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",Jp=["acq","dispo","tc"],Lr={acq:"Acquisition Team",dispo:"Disposition Team",tc:"Transaction Coordination"},Sr=null,Qp=null,Jf=async(e=!1)=>{let t={numberTeam:{},numberLabel:{}},o=J();if(!o)return t;if(!e&&Sr&&Qp===o)return Sr;try{let a=await(await fetch(`${Vf}?tenant_id=${encodeURIComponent(o)}`,{method:"GET",credentials:"omit"})).json(),s={};for(let i of a?.numbers??[])i?.e164&&(s[i.e164]=(i.label||"").trim());return Sr={numberTeam:a?.config?.numberTeam??{},numberLabel:s},Qp=o,Sr}catch(r){return m.warn("[silo] config load failed",r),Sr??t}},Rt=null,Zp=null,Yi=async(e=!1)=>{let t=J(),o=H();if(!t||!o)return[];if(!e&&Rt&&Zp===t)return Rt;try{let s=(await(await fetch(Yf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:t,action:"list"})})).json())?.roster?.find(i=>i.id===o);if(s){let i=s.role_keys??[];Rt=Jp.filter(l=>i.includes(l))}else dt()?Rt=[...Jp]:Rt=[];return Zp=t,Rt}catch(r){return m.warn("[silo] roster load failed",r),Rt??[]}},Xp=()=>`ws-pd-calling-as:${H()||"anon"}`,em=e=>{try{localStorage.setItem(Xp(),e)}catch{}},Ar=async()=>{let e=await Yi();if(e.length===0)return null;if(e.length===1)return e[0];let t=null;try{t=localStorage.getItem(Xp())}catch{}return t&&e.includes(t)?t:e[0]},Vi=e=>{let t=(e||"").replace(/\D/g,"");return t.length===11&&t[0]==="1"?t.slice(1,4):t.length===10?t.slice(0,3):null},Qf=(e,t)=>Object.entries(e).filter(([,o])=>String(o).toLowerCase()===t).map(([o])=>o),tm=async e=>{let t=await Ar(),{numberTeam:o,numberLabel:r}=await Jf(),a=Object.keys(o),s=t?Qf(o,t):[];if(!s.length){if(!a.length)return m.debug("[silo] no phone-assignments config; leaving GHL default"),null;m.warn(`[silo] ${t?`${t} pool empty`:"no active team"} \u2014 using all-assigned union (${a.length} numbers)`),s=a}let i=Vi(e),l,d="pool default";if(i)if(l=s.find(u=>Vi(u)===i),l)d="local match";else{let u=new Map;for(let y of s){let g=Vi(y);g&&!u.has(g)&&u.set(g,y)}let b=Yp(i,[...u.keys()]),_=b?u.get(b.code):void 0;b&&_&&(l=_,d=`nearest ${b.code}, ~${Math.round(b.miles)}mi`)}if(l||(l=s[0]),!jp(l,r[l]||void 0))return m.warn(`[silo] could not issue Calling-From ${l} (dialer not ready?)`),null;m.info(`[silo] ${t?Lr[t]:"All teams (no active team)"}: calling ${e} from ${l} (${d})`),await new Promise(u=>setTimeout(u,150));let p=Cr();return p&&p!==l&&m.warn(`[silo] caller-ID did not stick: wanted ${l} but header shows ${p} \u2014 GHL dialer DOM/event may have changed`),l};var Ji="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/dialer",$o=null,om=async e=>{if($o&&$o.tenant===e&&Date.now()-$o.at<5*6e4)return $o.enabled;try{let o=await(await fetch(`${Ji}/config?tenant_id=${encodeURIComponent(e)}`,{method:"GET",credentials:"omit"})).json(),r=o?.ok===!0&&o?.enabled===!0;return $o={at:Date.now(),tenant:e,enabled:r},r}catch(t){return m.warn("[endless-feed] config fetch failed \u2014 treating as disabled",t),$o={at:Date.now(),tenant:e,enabled:!1},!1}},rm=async(e,t)=>{try{let r=await(await fetch(`${Ji}/next`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,rep_user_id:t})})).json();return r?.ok!==!0?(m.warn(`[endless-feed] dispense not ok: ${r?.error||"unknown"}`),r?.error?null:r):r}catch(o){return m.warn("[endless-feed] dispense failed",o),null}},nm=(e,t,o,r)=>{fetch(`${Ji}/report`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,rep_user_id:t,contact_id:o,action:r})}).catch(a=>m.warn("[endless-feed] report failed",a))};var Zf="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/bulk-call/resolve-contact",am="data-ws-pd",sm="ws-crm-pd-panel",im="ws-crm-pd-session",Te=e=>new Promise(t=>setTimeout(t,e)),yt=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t),Xf=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector(".crm-opportunities-card-wrapper"))return t;t=t.parentElement}return null},ex=e=>{let t=[e,...Array.from(e.querySelectorAll("*"))];for(let o of t)if(o.scrollHeight>o.clientHeight+40&&/auto|scroll/.test(getComputedStyle(o).overflowY))return o;return e},tx=e=>{let t=[],o=new Set;for(let r of Array.from(e.querySelectorAll(".crm-opportunities-card-wrapper"))){let a=r.querySelector('a[href*="/detail/"]'),s=(a?.getAttribute("href")||"").split("/detail/")[1]?.split(/[/?#]/)[0]||"";if(!s||o.has(s))continue;let i=Array.from(r.querySelectorAll("[id]")).find(l=>/^[A-Za-z0-9]{18,22}$/.test(l.id));o.add(s),t.push({oppId:i?.id||"",contactId:s,name:(a?.textContent||r.textContent||"").replace(/\s+/g," ").trim().slice(0,60)})}return t},To=null,ox=async e=>{if(To&&To.loc===e&&Date.now()-To.at<6e5)return To.list;let t=await lt(`${Kt}/opportunities/pipelines?locationId=${encodeURIComponent(e)}`);if(!t||!t.ok)return To?.list??[];let r=((await t.json()).pipelines??[]).map(a=>({id:a.id||"",name:(a.name||"").trim(),stages:(a.stages??[]).map(s=>({id:s.id||"",name:(s.name||"").trim()}))}));return r.length&&(To={loc:e,at:Date.now(),list:r}),r},rx=(e,t)=>{let o=e.filter(s=>s.stages.some(i=>i.name===t));if(o.length===1)return o[0];if(!o.length)return null;let r=new Set([...document.querySelectorAll("[id^='data-stage-name-']")].map(s=>(s.textContent||"").trim()).filter(Boolean));if(r.size){let s=null,i=-1;for(let l of o){let d=l.stages.filter(c=>r.has(c.name)).length;d>i&&(s=l,i=d)}if(s&&i>=Math.ceil(r.size/2))return s}let a=new Map(o.map(s=>[s.name.toLowerCase(),s]));for(let s of document.querySelectorAll("button, [role='combobox'], [class*='pipeline' i] *, span, div")){if(s.childElementCount>2)continue;let i=(s.textContent||"").replace(/\s+/g," ").trim().toLowerCase();if(!i||i.length>40)continue;let l=a.get(i);if(l&&s.getBoundingClientRect().width)return l}return null},nx=async(e,t)=>{let o=J();if(!o)return null;let r=await ox(o);if(!r.length)return m.warn("[bulk-dialer] pipelines unavailable (no captured auth yet?) \u2014 DOM fallback"),null;let a=rx(r,e),s=a?.stages.find(c=>c.name===e);if(!a||!s)return m.warn(`[bulk-dialer] stage "${e}" ambiguous/unknown across pipelines \u2014 DOM fallback`),null;let i=new Map,l=null,d=20;for(let c=1;c<=d;c++){let p=await lt(`${Kt}/opportunities/search?location_id=${encodeURIComponent(o)}&pipeline_id=${a.id}&pipeline_stage_id=${s.id}&limit=100&status=open&page=${c}`);if(!p||!p.ok)return i.size?(m.warn(`[bulk-dialer] stage harvest PARTIAL: ${i.size}${l?` of ~${l}`:""} \u2014 page ${c} fetch failed (auth expired mid-walk?)`),[...i.values()]):null;let u=await p.json(),b=u.opportunities??[];typeof u.meta?.total=="number"&&(l=u.meta.total);for(let _ of b){let y=_.contactId||_.contact?.id||"";if(!y||i.has(y))continue;let g=(_.contact?.name||_.name||y).replace(/\s+/g," ").trim().slice(0,60),x=(_.contact?.phone||"").trim();i.set(y,{oppId:_.id||"",contactId:y,name:g,_phone:/^\+\d{10,15}$/.test(x)?x:void 0})}if(t(i.size,l),b.length<100||l!==null&&i.size>=l)break}return l!==null&&l>d*100&&m.warn(`[bulk-dialer] stage has ${l} opps \u2014 capped at ${d*100}`),m.info(`[bulk-dialer] API stage harvest: ${i.size} opps from "${a.name}" / "${e}"`),[...i.values()]},ax=async e=>{let t=Xf(e);if(!t)return[];let o=ex(t),r=-1;for(let a=0;a<60;a++){let s=t.querySelectorAll(".crm-opportunities-card-wrapper").length;if(s===r)break;r=s,o.scrollTop=o.scrollHeight,await Te(550)}return o.scrollTop=0,tx(t)},sx=async(e,t)=>{try{let r=await(await fetch(Zf,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",body:JSON.stringify({tenant_id:e,contact_id:t})})).json();return r?.ok?{name:r.name||"",phone:r.phone||"",skip:!!r.skip}:null}catch(o){return m.warn("[bulk-dialer] resolvePhone failed",o),null}},ix=`position:fixed;inset:0;z-index:100000;background:rgba(10,13,18,0.75);display:flex;align-items:center;justify-content:center;font-family:${h.sans};`,Zi=(e,t,o={one:"opportunity",many:"opportunities"})=>{document.getElementById(sm)?.remove();let r=document.createElement("div");r.id=sm,r.style.cssText=ix;let a=document.createElement("div");a.style.cssText=`width:min(560px,94vw);max-height:88vh;display:flex;flex-direction:column;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:24px 28px;color:${n.bone};box-shadow:0 16px 40px rgba(0,0,0,0.5);`;let s=t.map((T,k)=>`<label data-row="${k}" style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-bottom:1px solid ${n.steel};cursor:pointer;">
        <input type="checkbox" class="ws-pd-cb" data-i="${k}" checked style="width:15px;height:15px;accent-color:${n.emerald};" />
        <span style="font-size:13px;color:${n.bone};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${yt(T.name||T.contactId)}</span>
      </label>`).join("");a.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${n.emeraldBright};">Power Dialer</div>
    <div style="font-size:14px;font-weight:600;margin:2px 0 2px;">${yt(e)}</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:12px;">${t.length} ${t.length===1?o.one:o.many} loaded. Pick who to call.</div>
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
    <div id="ws-pd-dd-bar" role="switch" aria-checked="false" tabindex="0" title="Toggle double-dial" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:transparent;border:1px solid ${n.steel};border-radius:${v.md};cursor:pointer;user-select:none;outline:none;">
      <div style="display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:13px;font-weight:600;color:${n.bone};">Double-dial each contact</span>
        <span style="font-size:11px;color:${n.ash};">Unanswered first try gets one immediate second call</span>
      </div>
      <span id="ws-pd-dd-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${v.pill};background:${n.steel};transition:background .15s ease;">
        <span id="ws-pd-dd-knob" style="position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
      <input id="ws-pd-dd" type="checkbox" style="display:none;" />
    </div>
    <input id="ws-pd-search" type="text" placeholder="Filter by name or address\u2026" style="width:100%;box-sizing:border-box;padding:8px 12px;margin-bottom:10px;background:${n.obsidian};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-size:13px;font-family:${h.sans};" />
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${n.ash};cursor:pointer;"><input id="ws-pd-all" type="checkbox" checked style="accent-color:${n.emerald};" /> Select all (visible)</label>
      <span id="ws-pd-count" style="font-size:12px;color:${n.ash};"></span>
    </div>
    <div id="ws-pd-list" style="flex:1;overflow-y:auto;border:1px solid ${n.steel};border-radius:${v.md};min-height:120px;">${s||`<div style="padding:14px;color:${n.coolGray};font-size:12px;">No ${o.many} found.</div>`}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px;">
      <button id="ws-pd-cancel" type="button" style="background:transparent;color:${n.ash};border:1px solid ${n.steel};border-radius:${v.sm};padding:8px 18px;cursor:pointer;font-size:13px;font-family:${h.sans};">Cancel</button>
      <button id="ws-pd-start" type="button" style="background:${n.emerald};color:${n.obsidian};border:none;border-radius:${v.sm};padding:8px 22px;cursor:pointer;font-size:13px;font-weight:600;font-family:${h.sans};">Start Calling</button>
    </div>`,r.appendChild(a),document.body.appendChild(r),r.addEventListener("click",T=>{T.target===r&&r.remove()});let i=a.querySelector("#ws-pd-list"),l=a.querySelector("#ws-pd-count"),d=()=>{let T=a.querySelectorAll(".ws-pd-cb:checked").length;l&&(l.textContent=`${T} selected`)};d(),i?.addEventListener("change",d);let c=a.querySelector("#ws-pd-auto-bar"),p=a.querySelector("#ws-pd-auto"),u=a.querySelector("#ws-pd-auto-track"),b=a.querySelector("#ws-pd-auto-knob"),_=()=>{let T=!!p?.checked;u&&(u.style.background=T?n.emerald:n.steel),b&&(b.style.left=T?"20px":"2px"),c?.setAttribute("aria-checked",String(T))},y=()=>{p&&(p.checked=!p.checked,_())};c?.addEventListener("click",y),c?.addEventListener("keydown",T=>{(T.key===" "||T.key==="Enter")&&(T.preventDefault(),y())}),_();let g=a.querySelector("#ws-pd-dd-bar"),x=a.querySelector("#ws-pd-dd"),$=a.querySelector("#ws-pd-dd-track"),f=a.querySelector("#ws-pd-dd-knob");try{x&&(x.checked=localStorage.getItem(lm)==="1")}catch{}let w=()=>{let T=!!x?.checked;$&&($.style.background=T?n.emerald:n.steel),f&&(f.style.left=T?"20px":"2px"),g?.setAttribute("aria-checked",String(T))},S=()=>{x&&(x.checked=!x.checked,w())};g?.addEventListener("click",S),g?.addEventListener("keydown",T=>{(T.key===" "||T.key==="Enter")&&(T.preventDefault(),S())}),w(),a.querySelector("#ws-pd-search")?.addEventListener("input",T=>{let k=T.target.value.toLowerCase();a.querySelectorAll("[data-row]").forEach(C=>{let E=(C.textContent||"").toLowerCase();C.style.display=E.includes(k)?"flex":"none"})}),a.querySelector("#ws-pd-all")?.addEventListener("change",T=>{let k=T.target.checked;a.querySelectorAll("[data-row]").forEach(C=>{if(C.style.display==="none")return;let E=C.querySelector(".ws-pd-cb");E&&(E.checked=k)}),d()}),a.querySelector("#ws-pd-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-pd-start")?.addEventListener("click",()=>{let T=[];a.querySelectorAll(".ws-pd-cb:checked").forEach(E=>{let L=Number(E.getAttribute("data-i"));t[L]&&T.push(t[L])});let k=a.querySelector("#ws-pd-auto")?.checked??!0,C=a.querySelector("#ws-pd-dd")?.checked??!1;try{localStorage.setItem(lm,C?"1":"0")}catch{}r.remove(),T.length&&Xi(e,T,k,C)})},lx=75e3,dx=4e4,cx=30,px=3,mx=6e3,lm="ws-pd-double-dial",te=null,Ye,ha=null,bx=()=>{let e=te?.appt;if(!e)return"";let t=Math.round((new Date(e.at).getTime()-Date.now())/6e4);if(t>60||t<0)return"";let o=new Date(e.at).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),r=e.round_robined&&e.booked_by?" \xB7 round-robined, read notes first":"";return`<div style="font-size:11px;color:${t<=15?n.amber:n.ash};margin:2px 0;">\u{1F4C5} ${o} \xB7 ${yt(e.title)} (${t}m)${yt(r)}</div>`},ux=()=>{let e=te?.lead;if(!e||!e.hot)return"";let t=Math.max(0,Math.round((Date.now()-(te?.dispensedAtMs||Date.now()))/1e3))+(e.age_seconds||0),o=!e.name||/new lead/i.test(e.name);return`<div style="background:rgba(220,68,68,0.14);border:1px solid ${n.crimson};border-radius:${v.sm};padding:6px 8px;margin:4px 0;font-size:11px;color:${n.bone};">\u{1F525} <strong>NEW PPC LEAD</strong> \xB7 <span id="ws-pd-hotage">${t}</span>s old${o?" \xB7 no name yet, seller may still be on the form":""}</div>`},Xi=async(e,t,o,r=!1,a)=>{let s=J();if(!s)return;document.getElementById(im)?.remove(),te=a?{rep:a,lead:null,appt:null,dispensedAtMs:0}:null;let i={skip:!1,paused:!1,stopped:!1,advance:!1,redial:!1,cancelRedial:!1,hangupAt:0},l=document.createElement("div");l.id=im,l.style.cssText=`position:fixed;bottom:24px;left:24px;z-index:100002;width:300px;background:${n.graphite};border:1px solid ${n.steel};border-left:4px solid ${n.emerald};border-radius:${v.md};padding:14px 16px;color:${n.bone};font-family:${h.sans};box-shadow:0 10px 30px rgba(0,0,0,0.5);`,document.body.appendChild(l);let d={danger:`background:${n.crimson};color:${n.bone};font-weight:600;`,neutral:`background:${n.steel};color:${n.bone};`,primary:`background:${n.emerald};color:${n.obsidian};font-weight:600;`},c=(E,L,A,M)=>{let O=!!te,P=!!te?.lead?.hot;l.style.borderLeftColor=P?n.crimson:n.emerald,Ye!==void 0&&(window.clearInterval(Ye),Ye=void 0);let Z=O?`Endless Feed \xB7 call ${L+1}${te?.lead?.why_now&&!te.lead.hot?` \xB7 ${yt(te.lead.why_now)}`:""}`:`${yt(e)} \xB7 ${L+1} of ${t.length}`;l.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${P?n.crimson:n.emeraldBright};">Power Dialer${O?" \xB7 Feed":""}</div>
        <button id="ws-pd-end" style="background:transparent;border:none;color:${n.ash};cursor:pointer;font-size:12px;">End</button>
      </div>
      <div style="font-size:12px;color:${n.ash};margin:4px 0;">${Z}</div>
      ${ux()}${bx()}
      <div style="font-size:14px;font-weight:600;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${yt(A)}</div>
      ${(()=>{let D=Cr()??qp()?.e164??null;return D?`<div style="font-family:${h.mono};font-size:11px;color:${n.emeraldBright};margin:1px 0 3px;">from ${zp(D)}</div>`:""})()}
      <div id="ws-pd-status" style="font-size:12px;color:${n.ash};min-height:16px;margin-bottom:8px;">${yt(E)}</div>
      <div style="display:flex;gap:6px;">${M.map(D=>`<button id="${D.id}" style="flex:1;border:none;border-radius:${v.sm};padding:6px;cursor:pointer;font-size:12px;${d[D.kind]}">${D.label}</button>`).join("")}</div>`,l.querySelector("#ws-pd-end")?.addEventListener("click",()=>{i.stopped=!0,u(),Ye!==void 0&&(window.clearInterval(Ye),Ye=void 0),l.remove()});for(let D of M){let V=l.querySelector(`#${D.id}`);V&&V.addEventListener("click",()=>D.on(V))}if(P){let D=te?.lead?.age_seconds||0,V=te?.dispensedAtMs||Date.now();Ye=window.setInterval(()=>{let Y=l.querySelector("#ws-pd-hotage");Y&&(Y.textContent=String(D+Math.max(0,Math.round((Date.now()-V)/1e3))))},1e3)}},p=E=>{let L=l.querySelector("#ws-pd-status");L&&(L.textContent=E)},u=E=>{let L=!1;try{L=Ki()}catch{}if(!L){try{Wi()}catch{}window.setTimeout(()=>{let A=!1;try{A=Ki()}catch{}!A&&E&&E()},450)}},b=()=>({id:"ws-pd-pause",label:i.paused?"Resume":"Pause",kind:"neutral",on:E=>{i.paused=!i.paused,E.textContent=i.paused?"Resume":"Pause"}}),_=(E,L,A,M)=>c(M>1?`${E} \xB7 dial ${M}`:E,L,A,[{id:"ws-pd-hangup",label:"Hang Up",kind:"danger",on:()=>{i.hangupAt=Date.now(),u(()=>p("Couldn't hang up. Use the call window"))}},{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{i.skip=!0,u()}},b()]),y=(E,L,A)=>c(E,L,A,[{id:"ws-pd-redial",label:"Redial",kind:"neutral",on:()=>{i.redial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{i.advance=!0}},b()]),g=(E,L,A)=>c(E,L,A,[{id:"ws-pd-dd-skip",label:"Skip 2nd dial",kind:"neutral",on:()=>{i.cancelRedial=!0}},{id:"ws-pd-next",label:"Call Next",kind:"primary",on:()=>{i.advance=!0}},b()]),x=(E,L,A)=>c(E,L,A,[{id:"ws-pd-skip",label:"Skip",kind:"neutral",on:()=>{i.skip=!0}},b()]),$=()=>new Promise(E=>{let L=!1,A=()=>{L||(L=!0,window.clearInterval(O),M(),E())},M=Kp(A),O=window.setInterval(()=>{i.stopped||i.skip?A():i.hangupAt&&Date.now()-i.hangupAt>mx&&(i.hangupAt=0,p("No hang-up detected. Call may still be live; Skip to move on"))},300)}),f=async()=>{for(let E=0;E<7;E++){let L=(at()?.innerText||"").replace(/\s+/g," "),A=L.match(/Call Ended\s+(Completed|Voicemail|No ?Answer|Busy|Failed|Cancell?ed)\b/i),M=L.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Min(?:ute)?s?\s*(\d+)\s*Sec/i)||L.match(/Call Ended\s+(?:[A-Za-z ]{0,12}?)(\d+)\s*Sec/i);if(M||A){let O=M?M[2]!==void 0?parseInt(M[1],10)*60+parseInt(M[2],10):parseInt(M[1],10):null;return{outcome:A?A[1].toLowerCase().replace(/\s+/g,"-"):"",talkSecs:O}}await Te(200)}return{outcome:"",talkSecs:null}},w=async(E,L,A,M)=>{if(fe()){i.hangupAt=0,_(`Calling ${E}\u2026`,L,A,M);let V=Date.now(),Y=await rd({phone:E,name:A,leg:M,shouldEnd:()=>i.stopped||i.skip});return{ms:Date.now()-V,repEnded:Y.repEnded||i.skip,outcome:Y.outcome,talkSecs:Y.talkSecs}}if(Gi()){u();for(let V=0;V<10&&Gi()&&!i.stopped;V++)await Te(400)}if(await tm(E),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};i.hangupAt=0,_(`Calling ${E}\u2026`,L,A,M);let O=Date.now();try{if(Wi(),await Te(250),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};if(Up(E),await Te(250),i.stopped||i.skip)return{ms:0,outcome:"",talkSecs:null,repEnded:i.skip};Wp()}catch(V){m.error("[bulk-dialer] dial failed",V)}await $();let P=i.hangupAt>0||i.skip,Z=i.stopped?{outcome:"",talkSecs:null}:await f();if(!i.stopped)try{Gp()}catch{}let D={ms:Date.now()-O,repEnded:P,...Z};return m.info(`[bulk-dialer] call ended: outcome=${D.outcome||"?"} talk=${D.talkSecs??"?"}s wall=${Math.round(D.ms/1e3)}s repEnded=${P}`),D},S=E=>E.talkSecs!==null&&E.talkSecs>0&&!E.repEnded?!0:E.talkSecs!==null?E.talkSecs>=cx:E.outcome&&!/completed|voicemail/.test(E.outcome)?!1:E.ms>=dx,T=async E=>{let L=Date.now()+E;for(;!i.stopped&&Date.now()<L;)await Te(200)},k=async E=>{if(!te)return null;E===0&&ha&&(x("Setting up your feed\u2026",E,"\xB7"),await Promise.race([ha,T(8e3)]),ha=null);let L=0;for(;!i.stopped;){let A=await rm(s,te.rep);if(i.stopped)return null;if(!A){if(L++,L>=3)return x("Feed unavailable. Use a list selection instead - ending.",E,"\xB7"),await T(4e3),null;x(`Feed unavailable, retrying in 20s (${L}/3)\u2026`,E,"\xB7"),await T(2e4);continue}if(L=0,te.appt=A.next_appointment||null,A.hold){te.lead=null;let M=new Date(A.hold.until).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});x(`\u{1F4C5} Holding for your ${M} \xB7 ${A.hold.title}`,E,"Appointment coming up"),await T(fe()?1e4:3e4);continue}if(!A.lead){if(A.none_reason==="retry")continue;te.lead=null;let M=fe()?15e3:6e4;x(`Feed empty, rechecking in ${Math.round(M/1e3)}s\u2026`,E,"All caught up"),await T(M);continue}return te.lead=A.lead,te.dispensedAtMs=Date.now(),{oppId:"",contactId:A.lead.contact_id,name:A.lead.name||"New lead (no name yet)",_phone:A.lead.phone}}return null},C=-1;for(;!i.stopped;){C++;let E;if(te){let ee=await k(C);if(!ee)break;E=ee}else{if(C>=t.length)break;E=t[C]}let L=!1,A=ee=>{!te||L||!E.contactId||(L=!0,nm(s,te.rep,E.contactId,ee),td(te.rep,C))};i.skip=!1,i.advance=!1,x("Resolving number\u2026",C,E.name);let O=!E.contactId||E.contactId==="__test__"?null:await sx(s,E.contactId);if(i.stopped)break;if(i.skip){A("skipped");continue}if(O?.skip){A("skipped"),x("Called in last 2h, skipping",C,O.name||E.name),await Te(1200);continue}let P=E._phone||O?.phone||"",Z=O?.name||E.name;if(!P){A("skipped"),x("No phone on file, skipping",C,E.name||O?.name||E.contactId),await Te(1400);continue}if(E.contactId&&E.contactId!=="__test__")try{let Ee=`/v2/location/${(window.location.pathname.match(/\/v2\/location\/([^/]+)/)||[])[1]||s}/contacts/detail/${E.contactId}`;window.location.pathname!==Ee&&(history.pushState({},"",Ee),window.dispatchEvent(new PopStateEvent("popstate")))}catch(ee){m.debug("[bulk-dialer] screen-follow nav failed",ee)}let D=0,V=!0,Y=!1,B=!1;for(;V&&!i.stopped;){V=!1,D++;let ee=await w(P,C,Z,D);if(ee.ms>0&&(B=!0),i.stopped)break;if(Y=S(ee),r&&D===1&&!i.skip&&!Y&&ee.ms<lx){i.cancelRedial=!1;let Ee=!0;for(let Oe=px;Oe>0;Oe--){for(g(`Double-dialing in ${Oe}s\u2026`,C,Z);i.paused&&!i.stopped&&!i.cancelRedial&&!i.advance;)await Te(200);if(i.stopped||i.cancelRedial||i.advance){Ee=!1;break}await Te(1e3)}Ee&&!i.stopped&&(V=!0)}}if(A(B?"dialed":"skipped"),i.stopped)break;let U=te?!1:C>=t.length-1;for(;!i.stopped&&(!U||Y&&!i.skip)&&!i.advance;){if(i.redial=!1,Y&&!i.skip)for(y(U?"Answered. Set a call status, then Call Next to finish":"Answered. Set a call status, then Call Next",C,Z);!i.advance&&!i.stopped&&!i.redial;)await Te(200);else if(o)for(let ee=5;ee>0&&!i.stopped&&!i.advance&&!i.redial;ee--){for(y(`Next call in ${ee}s\u2026`,C,Z);i.paused&&!i.stopped&&!i.advance&&!i.redial;)await Te(200);if(i.advance||i.stopped||i.redial)break;await Te(1e3)}else for(y("Ready. Press Call Next or Redial",C,Z);!i.advance&&!i.stopped&&!i.redial;)await Te(200);if(!i.redial||i.stopped)break;i.skip=!1,Y=S(await w(P,C,Z,++D))}}if(!i.stopped){let E=te?C:t.length;l.innerHTML=`<div style="font-size:13px;color:${n.bone};">Call session complete.</div><div style="font-size:12px;color:${n.ash};margin-top:4px;">${E} contact${E===1?"":"s"} dialed.</div>`,setTimeout(()=>l.remove(),5e3)}Ye!==void 0&&(window.clearInterval(Ye),Ye=void 0),te=null},cm=(e,t=!0,o=!1)=>(ha=ed(e),Xi("Endless Feed",[],t,o,e)),pm=e=>{document.getElementById("ws-crm-pd-feed-launch")?.remove();let t=document.createElement("div");t.id="ws-crm-pd-feed-launch",t.style.cssText="position:fixed;inset:0;z-index:100001;background:rgba(4,6,10,0.62);display:flex;align-items:center;justify-content:center;";let o=document.createElement("div");o.style.cssText=`width:430px;max-width:92vw;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.lg};padding:22px 24px;color:${n.bone};font-family:${h.sans};box-shadow:0 18px 50px rgba(0,0,0,0.55);`;let r={auto:!0,dd:fe()},a=(l,d,c,p)=>`
    <div id="${l}" role="switch" aria-checked="${p}" tabindex="0" style="display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 13px;margin-bottom:12px;background:${p?n.emeraldGlow:"transparent"};border:1px solid ${p?n.emeraldBorder:n.steel};border-radius:${v.md};cursor:pointer;user-select:none;outline:none;">
      <span><span style="display:block;font-size:13px;font-weight:600;">${d}</span>
      <span style="display:block;font-size:11px;color:${n.ash};margin-top:2px;">${c}</span></span>
      <span class="ws-fl-track" style="position:relative;flex:none;width:40px;height:22px;border-radius:${v.pill};background:${p?n.emerald:n.steel};transition:background .15s ease;">
        <span class="ws-fl-knob" style="position:absolute;top:2px;left:${p?"20px":"2px"};width:18px;height:18px;border-radius:50%;background:${n.bone};transition:left .15s ease;box-shadow:0 1px 2px rgba(0,0,0,0.45);"></span>
      </span>
    </div>`;o.innerHTML=`
    <div style="font-family:${h.mono};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${n.emerald};margin-bottom:8px;">Power Dialer</div>
    <div style="font-size:18px;font-weight:500;margin-bottom:4px;">Endless call feed</div>
    <div style="font-size:12px;color:${n.ash};margin-bottom:18px;line-height:1.5;">No list to manage. Each time you're free, the dialer serves the most important lead on the floor: brand-new PPC leads first, then today's callbacks, then Active Follow Up and Revival. Press <strong style="color:${n.bone};">End</strong> whenever you're done.</div>
    ${a("ws-fl-auto","Auto-advance to the next call","5s countdown between calls, with Pause / Skip",r.auto)}
    ${a("ws-fl-dd","Double-dial each contact","Unanswered first try gets one immediate second call",r.dd)}
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:6px;">
      <button id="ws-fl-cancel" type="button" style="background:transparent;border:1px solid ${n.steel};color:${n.bone};padding:8px 18px;border-radius:${v.sm};font-family:${h.sans};font-size:13px;cursor:pointer;">Cancel</button>
      <button id="ws-fl-start" type="button" style="background:${n.emerald};border:none;color:${n.obsidian};padding:8px 22px;border-radius:${v.sm};font-family:${h.sans};font-size:13px;font-weight:600;cursor:pointer;">Start Calling</button>
    </div>`,t.appendChild(o),document.body.appendChild(t);let s=(l,d)=>{let c=o.querySelector(`#${l}`);if(!c)return;let p=b=>{r[d]=b,c.setAttribute("aria-checked",String(b)),c.style.background=b?n.emeraldGlow:"transparent",c.style.borderColor=b?n.emeraldBorder:n.steel;let _=c.querySelector(".ws-fl-track"),y=c.querySelector(".ws-fl-knob");_&&(_.style.background=b?n.emerald:n.steel),y&&(y.style.left=b?"20px":"2px")},u=()=>p(!r[d]);c.addEventListener("click",u),c.addEventListener("keydown",b=>{(b.key===" "||b.key==="Enter")&&(b.preventDefault(),u())})};s("ws-fl-auto","auto"),s("ws-fl-dd","dd");let i=()=>t.remove();t.addEventListener("click",l=>{l.target===t&&i()}),o.querySelector("#ws-fl-cancel")?.addEventListener("click",i),o.querySelector("#ws-fl-start")?.addEventListener("click",()=>{i(),e(r.auto,r.dd)})},el='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',tl=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},hx=()=>{if(Gt()!=="opportunity-list"||!tl()||!ba())return;document.querySelectorAll('[class*="stageHeaderBg"]').forEach(t=>{if(t.querySelector(`[${am}]`))return;let o=t.querySelector('[id^="data-stage-name-"]');if(!o)return;let r=(o.textContent||"Stage").trim(),a=document.createElement("button");a.setAttribute(am,"1"),a.title=`Power Dialer: call through ${r}`,a.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:8px;padding:3px 8px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emeraldBorder};border-radius:${v.pill};cursor:pointer;font-family:${h.mono};font-size:10px;font-weight:600;letter-spacing:0.06em;flex-shrink:0;`,a.innerHTML=`${el}<span>DIAL</span>`,a.addEventListener("click",async s=>{s.stopPropagation(),s.preventDefault();let i=a.querySelector("span"),l=i?.textContent||"DIAL";i&&(i.textContent="Loading\u2026"),a.style.opacity="0.7";try{let c=await nx(r,(p,u)=>{i&&(i.textContent=`${p}${u?`/${u}`:""}`)})??await ax(t);Zi(r,c)}catch(d){m.error("[bulk-dialer] harvest failed",d)}finally{i&&(i.textContent=l),a.style.opacity="1"}}),o.parentElement?.appendChild(a)})},Co=null,Qi,dm=!1,mm=()=>{if(dm)return;dm=!0,window.WS_CRM_PD_TEST=(t,o=!1)=>void Xi("Verification",[{oppId:"",contactId:"__test__",name:`Test ${t}`,_phone:t}],!1,o);let e=()=>{Qi!==void 0&&window.clearTimeout(Qi),Qi=window.setTimeout(hx,400)};Se(t=>{t==="opportunity-list"?(e(),Co||(Co=new MutationObserver(e),Co.observe(document.body,{childList:!0,subtree:!0}))):Co&&(Co.disconnect(),Co=null)})};var bm="ws-crm-pd-contacts-btn",_x=e=>new Promise(t=>setTimeout(t,e)),vm=e=>{let t=e.match(/(?:\+?1[\s.\-]?)?\(?(\d{3})\)?[\s.\-]?(\d{3})[\s.\-]?(\d{4})/);return t?`+1${t[1]}${t[2]}${t[3]}`:""},yx=()=>/\ball\s+[\d,]+\s+contacts?\s+selected\b/i.test(document.body.innerText)?"all":document.querySelector('.tabulator-header input[type="checkbox"]')?.checked?"page":document.querySelectorAll(".tabulator-row.tabulator-selected, .tabulator-row input[type=checkbox]:checked").length>0?"rows":"none",um=(e,t)=>{document.querySelectorAll(".tabulator-row").forEach(o=>{if(t){let d=o.querySelector('input[type="checkbox"]');if(!(o.classList.contains("tabulator-selected")||!!(d&&d.checked)))return}let r=o.querySelector('a[href*="/contacts/detail/"]'),a=(r?.getAttribute("href")||"").split("/contacts/detail/")[1]?.split(/[/?#]/)[0]||"";if(!a||e.has(a))return;let s=(r?.textContent||"").replace(/\s+/g," ").trim(),i=vm(o.textContent||""),l=s&&s!=="-"?s:i||a;e.set(a,{oppId:"",contactId:a,name:l,_phone:i||void 0})})},ol=async e=>{let t=new Map,o=document.querySelector(".tabulator-tableholder");if(um(t,e),!o)return[...t.values()];let r=-1,a=-1,s=0;for(let i=0;i<200&&(um(t,e),t.size===a?s++:(s=0,a=t.size),!(i>0&&o.scrollTop===r&&s>=2));i++)r=o.scrollTop,o.scrollTop=r+Math.max(120,o.clientHeight*.85),await _x(220);return o.scrollTop=0,[...t.values()]},vx=e=>{let t=e?.id||"";if(!t)return null;let o=(e.contactName||`${e.firstName||""} ${e.lastName||""}`.trim()||e.phone||t).replace(/\s+/g," ").trim().slice(0,60),r=(e.phone||"").trim(),a=/^\+\d{10,15}$/.test(r)?r:vm(r);return{oppId:"",contactId:t,name:o,_phone:a||void 0}},hm=async(e,t)=>{let o=new AbortController,r=window.setTimeout(()=>o.abort(),2e4);try{let a=await lt(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:o.signal});return!a||!a.ok?null:await a.json()}catch{return null}finally{window.clearTimeout(r)}},_m=async(e,t)=>{let o=J();if(!o)return null;let r=hd(o);if(!r)return m.warn("[bulk-dialer-contacts] no captured grid search \u2014 DOM fallback"),null;let a;try{a=JSON.parse(r.bodyRaw)}catch{return null}let s=new Map,i=p=>{for(let u of p||[]){let b=vx(u);b&&!s.has(b.contactId)&&s.set(b.contactId,b)}};if(e==="page"){let p=await hm(r.url,a);return p?(i(p.contacts),[...s.values()]):null}let l={...a,pageLimit:100,includeTotal:!0};delete l.searchAfter;let d=100,c=null;for(let p=1;p<=d;p++){l.page=p;let u=await hm(r.url,l);if(!u)return s.size?[...s.values()]:null;if(typeof u.total=="number"&&(c=u.total),i(u.contacts),t(s.size,c),!u.contacts||u.contacts.length<100||c!==null&&s.size>=Math.min(c,d*100))break}return c!==null&&c>d*100&&m.warn(`[bulk-dialer-contacts] list has ${c} contacts \u2014 capped at ${d*100}`),[...s.values()]},gx=()=>{if(Gt()!=="contact-list"||!tl()||!ba()||document.getElementById(bm))return;let e=document.querySelector("#views-bar .bar");if(!e)return;let t=document.createElement("button");t.id=bm,t.type="button",t.title="Power Dialer: call through this list, or the rows you've checked",t.style.cssText=`display:inline-flex;align-items:center;justify-content:center;gap:5px;margin-left:auto;margin-right:4px;align-self:center;padding:5px 12px;background:${n.emeraldGlow};color:${n.emerald};border:1px solid ${n.emerald};border-radius:${v.pill};box-shadow:0 0 0 1px rgba(15,181,126,0.35),0 0 10px 1px rgba(15,181,126,0.5);cursor:pointer;font-family:${h.mono};font-size:11px;font-weight:600;letter-spacing:0.04em;flex-shrink:0;`,t.innerHTML=`${el}<span>Power Dialer</span>`;let o=t.querySelector("span");o&&(o.style.setProperty("color",n.emerald,"important"),o.style.setProperty("-webkit-text-fill-color",n.emerald,"important"));let r=t.querySelector("svg");r&&(r.style.setProperty("color",n.emerald,"important"),r.style.setProperty("stroke",n.emerald,"important")),t.style.setProperty("border-color",n.emerald,"important"),t.addEventListener("click",async a=>{a.stopPropagation(),a.preventDefault();let s=t.querySelector("span"),i=s?.textContent||"Power Dialer",l=(d,c)=>{s&&(s.textContent=`Loading\u2026 ${d}${c?` / ${c}`:""}`)};s&&(s.textContent="Loading\u2026"),t.style.opacity="0.7";try{let d=yx();if(d==="none"){let u=J(),b=fe()&&dt()?Jl:H();if(u&&b){let[_,y]=await Promise.all([Ar(),om(u)]);if(_==="acq"&&y){s&&(s.textContent=i),t.style.opacity="1",pm((g,x)=>void cm(b,g,x));return}}}let c,p;d==="rows"?(c=await ol(!0),p="Selected contacts"):d==="page"?(c=await _m("page",l)??await ol(!0),p="This page"):(c=await _m("all",l)??await ol(!1),p=d==="all"?"All in list":"Smart list"),Zi(p,c,{one:"contact",many:"contacts"})}catch(d){m.error("[bulk-dialer-contacts] harvest failed",d)}finally{s&&(s.textContent=i),t.style.opacity="1"}}),e.appendChild(t)},So=null,rl,ym=!1,gm=()=>{if(ym)return;ym=!0;let e=()=>{rl!==void 0&&window.clearTimeout(rl),rl=window.setTimeout(gx,400)};Se(t=>{t==="contact-list"?(e(),So||(So=new MutationObserver(e),So.observe(document.body,{childList:!0,subtree:!0}))):So&&(So.disconnect(),So=null)})};var fx="ws-calling-as-chip",xx=()=>{try{let e=localStorage.getItem("ws-pd");if(e==="1")return!0;if(e==="0")return!1}catch{}return!0},nl=!1,Nt=null,fm,wm=0,wx=3e4,kx=()=>{let e=document.querySelector(".hl_header--controls");if(!e)return null;let t=e.querySelector('button[aria-label*="Voice Calling" i], button[aria-label*="call" i]');if(!t)return null;let o=t;for(;o&&o.parentElement!==e;)o=o.parentElement;return o?{parent:e,before:o}:null},al=()=>{if(!Nt||Nt.isConnected)return;let e=kx();e&&e.parent.insertBefore(Nt,e.before)},xm=async()=>{if(!(nl||Nt)&&xx()){nl=!0;try{let e=await Yi();if(!e.length)return;let t=await Ar()??e[0],o=e.length>1,r=document.createElement("div");r.id=fx,r.style.cssText="position:relative;display:inline-flex;align-items:center;margin:0 6px;";let a=document.createElement("button");a.type="button",a.style.cssText=`display:inline-flex;align-items:center;gap:7px;padding:5px 11px;background:${n.graphite};border:1px solid ${n.steel};border-left:3px solid ${n.emerald};border-radius:${v.pill};color:${n.bone};font-family:${h.sans};font-size:11px;white-space:nowrap;cursor:${o?"pointer":"default"};`,a.innerHTML=`<span style="font-family:${h.mono};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:${n.ash};">Calling as</span><span class="ws-ca-team" style="font-weight:600;">${Lr[t]}</span>${o?`<span style="color:${n.ash};">\u25BE</span>`:""}`,r.appendChild(a);let s=i=>{let l=a.querySelector(".ws-ca-team");l&&(l.textContent=Lr[i])};if(o){let i=document.createElement("div");i.style.cssText=`position:fixed;min-width:200px;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 8px 24px rgba(0,0,0,0.45);overflow:hidden;display:none;z-index:99999;`;let l=()=>{i.innerHTML="",e.forEach(d=>{let c=document.createElement("div"),p=d===t;c.style.cssText=`padding:9px 14px;font-family:${h.sans};font-size:13px;color:${p?n.emeraldBright:n.bone};cursor:pointer;background:${p?n.emeraldGlow:"transparent"};`,c.textContent=Lr[d],c.addEventListener("mouseenter",()=>{d!==t&&(c.style.background=n.steel)}),c.addEventListener("mouseleave",()=>{d!==t&&(c.style.background="transparent")}),c.addEventListener("click",u=>{u.stopPropagation(),t=d,em(d),s(d),l(),i.style.display="none"}),i.appendChild(c)})};l(),document.body.appendChild(i),a.addEventListener("click",d=>{if(d.stopPropagation(),i.style.display==="block"){i.style.display="none";return}let c=a.getBoundingClientRect();i.style.top=`${Math.round(c.bottom+6)}px`,i.style.left=`${Math.round(c.left)}px`,i.style.display="block"}),document.addEventListener("click",()=>{i.style.display="none"})}Nt=r,al(),m.info(`[calling-as] chip mounted in header (roles=${e.join(",")}, active=${t}, multi=${o})`)}catch(e){m.error("[calling-as] build failed",e)}finally{nl=!1,wm=Date.now()}}},km=()=>{Nt?al():xm(),fm===void 0&&(fm=window.setInterval(()=>{Nt?al():Date.now()-wm>=wx&&xm()},1500))};var Ex="#12161D",$x="#EDEEF0",Em=e=>{let o=getComputedStyle(e).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!o)return!1;let r=+o[1],a=+o[2],s=+o[3];return(o[4]!==void 0?+o[4]:1)>.1&&r>=230&&a>=230&&s>=230},$m=e=>{e.style.setProperty("background-color",Ex,"important"),e.style.setProperty("color",$x,"important")},Tx=()=>{for(let e of Array.from(document.body.children)){if(e.tagName!=="DIV")continue;let t=e;if(!(t.id||t.className)&&getComputedStyle(t).position==="fixed")return t}return null},Cx=e=>{Em(e)&&$m(e);for(let t of Array.from(e.querySelectorAll("*")))Em(t)&&$m(t)},sl=null,Mr=null,Cm=()=>{Mr&&(Mr.disconnect(),Mr=null),sl=null},Sx=e=>{if(sl===e)return;Cm(),sl=e;let t=!1,o=()=>{t=!1;try{Cx(e)}catch(a){m.debug("[dialer-theme] paint failed",a)}},r=()=>{t||(t=!0,requestAnimationFrame(o))};Mr=new MutationObserver(r),Mr.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),r(),m.info("[dialer-theme] fast white-flash guard attached to teleported softphone panel")},Tm=!1,_a=()=>{if(Tm)return;Tm=!0;let e=()=>{let o=Tx();o?Sx(o):Cm()};e(),new MutationObserver(e).observe(document.body,{childList:!0})};var Lx="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contact/search",Ax="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/set-field",Mx="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/opp/get-field",Am="tc_closing_agent",Ix="tc_closing_office",ze="ws-crm-closing-agent-picker-button",Mm="ws-crm-closing-agent-picker-modal",Ox=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Px=/\/v2\/location\/([A-Za-z0-9]+)/,Pr=()=>{let e=window.location.pathname,t=e.match(Ox);if(!t)return null;let o=e.match(Px);return{oppId:t[1],locationId:o?o[1]:null}},ml=async e=>{let t=await fetch(Lx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,query:e.query??"",contact_id:e.contactId??null,contact_type:e.contactType??null,limit:e.limit??20}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Sm=async e=>{let t=await fetch(Ax,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,opp_id:e.oppId,field_key:e.fieldKey,value:e.value}),credentials:"omit"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()},Bx=async(e,t)=>{try{let o=await fetch(Mx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,opp_id:e,field_key:Am}),credentials:"omit"});if(!o.ok)return null;let r=await o.json(),a=typeof r.value=="string"&&r.value.trim()?r.value.trim():null;if(!a||!/^[A-Za-z0-9]{16,}$/.test(a))return null;let s=await ml({tenantId:t,contactId:a,limit:1});if(!s.ok||!s.results.length)return null;let i=s.results[0];return{id:i.id,name:i.name,companyName:i.companyName??""}}catch(o){return m.warn("[closing-agent] fetchCurrent failed:",o),null}},Ft=null,Hx=60*60*1e3,bl=e=>`ws-crm-to-cache:${e}`,Im=e=>{try{let t=window.localStorage.getItem(bl(e));if(!t)return null;let o=JSON.parse(t);return!o.ts||Date.now()-o.ts>Hx||typeof o.contactId!="string"||!o.contactId||typeof o.contactName!="string"||!o.contactName?null:o}catch{return null}},Om=(e,t,o)=>{try{window.localStorage.setItem(bl(e),JSON.stringify({contactId:t,contactName:o,ts:Date.now()}))}catch{}},Dx=e=>{try{window.localStorage.removeItem(bl(e))}catch{}},ll="ws-crm-closing-agent-field-link",Rx=()=>{let e=document.querySelector(".crm-opportunities-modal");e&&(e.querySelectorAll(`.${ll}`).forEach(t=>t.remove()),e.querySelectorAll("input[data-ws-closing-agent-decorated]").forEach(t=>{t.style.removeProperty("color"),t.style.removeProperty("caret-color"),t.style.removeProperty("visibility"),delete t.dataset.wsClosingAgentDecorated}))},il=!1,ul=async e=>{if(il)return;let t=Pm();if(!t)return;let o=(t.value||"").trim();if(!o){m.info("[closing-agent] tryDecorate: input has empty value");return}if(!/^[A-Za-z0-9]{16,}$/.test(o)){m.info(`[closing-agent] tryDecorate: value '${o}' doesn't match contact-ID pattern (expecting 16+ alphanumeric)`);return}if(t.dataset.wsClosingAgentDecorated!==o){il=!0;try{m.info(`[closing-agent] tryDecorate: looking up ${o}`);let r=await ml({tenantId:e,contactId:o,limit:1});if(!r.ok||!r.results.length){m.warn(`[closing-agent] tryDecorate: contact ${o} not found`);return}let a=r.results[0];m.info(`[closing-agent] tryDecorate: applying ${a.name} (${a.id})`),dl(a.id,a.name,e);let s=document.getElementById(ze);if(s){vt(s,{status:"linked",contactName:a.name});let i=Pr();i&&Om(i.oppId,a.id,a.name)}}catch(r){m.warn("[closing-agent] tryDecorate lookup failed:",r)}finally{il=!1}}},Nx=/^TC\s*[-‐–—]\s*Closing\s+Agent$/i,Pm=()=>{let t=document.querySelectorAll("*"),o=[],r=[],a=[];for(let d of t){let c=(d.textContent||"").trim();Nx.test(c)?o.push(d):c.length<80&&/Title\s+Officer/i.test(c)&&r.push(c);for(let p of["aria-label","placeholder","data-label","title","name","data-test"]){let u=d.getAttribute(p);u&&/Title\s+Officer/i.test(u)&&a.push({tag:d.tagName.toLowerCase(),attr:p,value:u})}}if(m.info(`[closing-agent] findInput: ${o.length} regex-matched, ${r.length} near-text matches, ${a.length} attribute matches`),r.length&&m.warn("[closing-agent] near-text samples:",[...new Set(r)].slice(0,8)),a.length&&m.warn("[closing-agent] attribute matches:",a.slice(0,8)),o.length===0)return null;o.sort((d,c)=>d.querySelectorAll("*").length-c.querySelectorAll("*").length);let i=o[0].parentElement,l=0;for(;i&&l<8;){let d=i.querySelector("input");if(d)return m.info(`[closing-agent] findInput: located input ${l} levels up from label`),d;i=i.parentElement,l+=1}return m.warn("[closing-agent] findInput: label found but no <input> within 8 ancestors"),null},dl=(e,t,o)=>{let r=Pm();if(!r)return;let a=r.dataset.wsClosingAgentDecorated;if(a!==e){a&&r.parentElement?.querySelectorAll(`.${ll}`).forEach(i=>i.remove());{let s=r.parentElement;if(!s)return;r.dataset.wsClosingAgentDecorated=e,r.style.visibility="hidden",window.getComputedStyle(s).position==="static"&&(s.style.position="relative");let l=document.createElement("a");l.className=ll,l.href=`/v2/location/${o}/contacts/detail/${e}`,l.textContent=t,l.style.cssText=`
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
      border-radius: ${v.sm};
      z-index: 2;
    `,l.addEventListener("mouseenter",()=>{l.style.textDecoration="underline"}),l.addEventListener("mouseleave",()=>{l.style.textDecoration="none"}),l.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),window.location.href=l.href}),s.appendChild(l)}}},ya=()=>{document.getElementById(Mm)?.remove()},Fx=e=>{ya();let t=document.createElement("div");t.id=Mm,t.style.cssText=`
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
    border-radius: ${v.lg};
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
        border-radius: ${v.sm};
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
        ${z}
        padding: 8px 16px;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t);let r=o.querySelector("#ws-top-search"),a=o.querySelector("#ws-top-results"),s=o.querySelector("#ws-top-cancel");setTimeout(()=>r?.focus(),50),t.addEventListener("click",c=>{c.target===t&&ya()}),s?.addEventListener("click",ya);let i,l="",d=async c=>{if(a&&c!==l){if(l=c,!c.trim()){a.innerHTML=`
        <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
          Start typing to search.
        </div>`;return}a.innerHTML=`
      <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
        Searching\u2026
      </div>`;try{let p=await ml({tenantId:e.locationId,query:c,contactType:"closing_agent",limit:20});if(!p.ok||!Array.isArray(p.results)||p.results.length===0){a.innerHTML=`
          <div style="padding: 16px; color: ${n.ash}; font-size: 13px; text-align: center;">
            No results.
          </div>`;return}a.innerHTML="",p.results.forEach(u=>{let b=document.createElement("button");b.type="button",b.style.cssText=`
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
        `,b.innerHTML=`
          <div style="font-weight: 500;">${va(u.name)}</div>
          <div style="color: ${n.ash}; font-size: 11px; margin-top: 2px;">
            ${va(u.email||"(no email)")} \xB7 ${va(u.phone||"no phone")}
            ${u.companyName?` \xB7 ${va(u.companyName)}`:""}
          </div>
        `,b.addEventListener("mouseenter",()=>{b.style.background=n.slate}),b.addEventListener("mouseleave",()=>{b.style.background="transparent"}),b.addEventListener("click",()=>{ya(),e.onPick(u)}),a.appendChild(b)})}catch(p){m.error("Closing Agent picker search failed",p),a&&(a.innerHTML=`
          <div style="padding: 16px; color: ${n.crimson}; font-size: 13px; text-align: center;">
            Search failed. Try again.
          </div>`)}}};r?.addEventListener("input",()=>{let c=r.value;i!==void 0&&clearTimeout(i),i=window.setTimeout(()=>{d(c)},250)})},va=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),vt=(e,t)=>{let o=e.querySelector(".ws-top-label"),r=e.querySelector(".ws-top-dot"),a="Link Closing Agent",s=n.amber,i=n.bone,l="transparent",d=n.steel,c="pointer";switch(t.status){case"loading":a="Loading Closing Agent\u2026",s=n.coolGray,i=n.ash,c="wait";break;case"empty":a="Link Closing Agent",s=n.amber;break;case"linked":a=t.contactName?`Closing Agent: ${t.contactName}`:"Closing Agent: \u2713",s=n.emerald,l=n.emeraldGlow,d=n.emeraldBorder,i=n.emeraldBright;break;case"saving":a="Linking\u2026",s=n.coolGray,i=n.ash,c="wait";break}o&&(o.textContent=a),r&&(r.style.background=s,r.style.boxShadow=`0 0 6px ${s}`),e.style.background=l,e.style.borderColor=d,e.style.color=i,e.style.cursor=c},zx=(e,t)=>{let o=document.createElement("button");o.id=ze,o.type="button",o.dataset.oppId=e,o.style.cssText=z,o.title="Pick the Closing Agent contact for this deal. Their email + phone will flow into the title-co handoff email.",o.innerHTML=`
    <span class="ws-top-dot" style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${n.coolGray};
      flex-shrink: 0;
    "></span>
    <span class="ws-top-label">Loading Closing Agent\u2026</span>
  `;let r={status:"loading"};vt(o,r);let a=fe()?null:Im(e);return a&&(r={status:"linked",contactName:a.contactName},vt(o,r),Ft={oppId:e,contactId:a.contactId,contactName:a.contactName,tenantId:t}),(async()=>{let i=await Bx(e,t);i?(r={status:"linked",contactName:i.name},vt(o,r),Ft={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},dl(i.id,i.name,t)):a||(r={status:"empty"},vt(o,r),Ft?.oppId===e&&(Ft=null),Rx(),Dx(e))})(),o.addEventListener("mouseenter",()=>{r.status!=="loading"&&r.status!=="saving"&&(o.style.transform="translateY(-1px)")}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)"}),o.addEventListener("click",()=>{r.status==="loading"||r.status==="saving"||Fx({oppId:e,locationId:t,onPick:async i=>{r={status:"saving"},vt(o,r);try{let l=await Sm({tenantId:t,oppId:e,fieldKey:Am,value:i.id});if(!l.ok)throw new Error(l.error??"Save failed");i.companyName&&i.companyName.trim()&&await Sm({tenantId:t,oppId:e,fieldKey:Ix,value:i.companyName.trim()}),r={status:"linked",contactName:i.name},vt(o,r),Ft={oppId:e,contactId:i.id,contactName:i.name,tenantId:t},Om(e,i.id,i.name),dl(i.id,i.name,t),op(e),m.info(`Closing Agent linked: ${i.name} (${i.id})${i.companyName?` \u2014 Company: ${i.companyName}`:""}`)}catch(l){m.error("Closing Agent link failed",l),r={status:"empty"},vt(o,r)}}})}),o},qx=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading"],jx=async()=>{for(let e of qx)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Ir=!1,fa=async()=>{if(!Ir){Ir=!0;try{await Ux()}finally{Ir=!1}}},Ux=async()=>{let e=Pr();if(!e||!e.locationId){document.getElementById(ze)?.remove(),document.getElementById(`${ze}-wrap`)?.remove(),ga();return}let t=document.getElementById(ze);if(t&&t.dataset.oppId===e.oppId){let d=G();d!==null&&d!=="Transaction Coordination"&&(t.remove(),document.getElementById(`${ze}-wrap`)?.remove(),ga());return}t&&(t.remove(),document.getElementById(`${ze}-wrap`)?.remove());let o=G();if(o!==null&&o!=="Transaction Coordination")return;let r=await jx();if(!r||!(Im(e.oppId)!==null||Ft!==null&&Ft.oppId===e.oppId)&&await se()!=="Transaction Coordination")return;let s=Pr();if(!s||s.oppId!==e.oppId||!s.locationId)return;let i=zx(e.oppId,s.locationId),l=document.createElement("span");l.id=`${ze}-wrap`,l.style.cssText=`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    vertical-align: middle;
    order: 2;
  `,l.appendChild(i),re(r).appendChild(l),m.debug(`Mounted Closing Agent picker on opp ${e.oppId}`),Wx(e.oppId),ul(s.locationId)},Or=null,cl=null,pl=null,ga=()=>{Or?.disconnect(),Or=null,cl=null,pl=null},Wx=e=>{let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Or&&cl===e&&pl===t||(ga(),cl=e,pl=t,Or=new MutationObserver(()=>{let o=Pr();if(!o||o.oppId!==e||!o.locationId){ga();return}document.getElementById(ze)||fa(),ul(o.locationId)}),Or.observe(t,{childList:!0,subtree:!0})))},Gx=()=>{oe("closing-agent-picker",ae,()=>{!document.getElementById(ze)&&!Ir&&fa()})},Lm,Kx=()=>{Lm===void 0&&(Lm=window.setInterval(()=>{let e=Pr();if(!e||!e.locationId||!!!document.querySelector(".crm-opportunities-modal"))return;!!!document.getElementById(ze)&&!Ir&&(m.info("[closing-agent] safety-net: button missing on opp page \u2014 remounting"),fa()),ul(e.locationId)},2e3))},Bm=()=>{m.info("[closing-agent] mountClosingAgentPickerButton invoked"),Gx(),Kx(),fa()};var Vx="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/team/manage",st="ws-crm-manage-team-cta",Dm="ws-crm-manage-team-modal",Yx=/\/v2\/location\/([A-Za-z0-9]+)\/settings\/staff\/team/,Rm={manager:"Owner",acq:"Acquisitions Rep",dispo:"Disposition Rep",tc:"Transaction Coordinator",acq_manager:"ACQ Manager",dispo_manager:"Dispo Manager",tc_manager:"TC Manager"},Jx={manager:{bg:"rgba(75, 139, 245, 0.15)",fg:n.blue},acq:{bg:n.emeraldGlow,fg:n.emerald},dispo:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson},acq_manager:{bg:n.emeraldGlow,fg:n.emerald},dispo_manager:{bg:"rgba(232, 163, 60, 0.15)",fg:n.amber},tc_manager:{bg:"rgba(212, 63, 74, 0.15)",fg:n.crimson}},Nm=()=>{let e=window.location.pathname.match(Yx);return e?{tenantId:e[1]}:null},wa=async e=>{let t=await fetch(Vx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"omit"});if(!t.ok){let o="";try{o=await t.text()}catch{}throw new Error(`Team.Manage HTTP ${t.status}${o?` \u2014 ${o.slice(0,200)}`:""}`)}return await t.json()},Ie=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),gt=e=>Ie(e),hl="ws-crm-manage-team-toast",vl=(e,t="info",o=4e3)=>{document.getElementById(hl)?.remove();let r=t==="success"?n.emerald:t==="error"?n.crimson:n.ash,a=document.createElement("div");a.id=hl,a.style.cssText=`
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999999;
    background: ${n.graphite};
    border: 1px solid ${r};
    border-radius: ${v.sm};
    color: ${n.bone};
    padding: 12px 18px;
    font-family: ${h.sans};
    font-size: 13px;
    max-width: 400px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  `,a.textContent=e,document.body.appendChild(a),o>0&&window.setTimeout(()=>{document.getElementById(hl)===a&&a.remove()},o)},_l=()=>{document.getElementById(Dm)?.remove()},Qx=(e,t)=>{let o=Jx[e]||{bg:n.slate,fg:n.ash};return`
    <span style="
      display: inline-block;
      background: ${o.bg};
      color: ${o.fg};
      border: 1px solid ${o.fg};
      border-radius: ${v.pill};
      padding: 2px 10px;
      font-family: ${h.mono};
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-bottom: 4px;
    ">${Ie(t)}</span>
  `},Zx=(e,t)=>{let o=[e.first_name,e.last_name].filter(Boolean).join(" ")||"(no name)",r=e.roles.map(i=>Qx(i.key,i.display)).join(""),a=t?"":"opacity: 0.45; pointer-events: none; cursor: not-allowed;",s=t?"":'title="Owner-only action"';return`
    <div data-user-id="${gt(e.id)}" style="
      display: grid;
      grid-template-columns: 1fr 220px 200px;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid ${n.steel};
      align-items: center;
    ">
      <div>
        <div style="font-size: 14px; font-weight: 500; color: ${n.bone}; margin-bottom: 4px;">
          ${Ie(o)}
          ${e.deactivated?`<span style="font-size: 10px; color: ${n.crimson}; font-family: ${h.mono}; margin-left: 8px;">DEACTIVATED</span>`:""}
        </div>
        <div style="font-size: 12px; color: ${n.ash};">
          ${Ie(e.email)}${e.phone?` &middot; ${Ie(e.phone)}`:""}
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${r||`<span style="color: ${n.coolGray}; font-size: 12px; font-style: italic;">no roles</span>`}
      </div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; ${a}" ${s}>
        <button class="ws-team-edit" data-email="${gt(e.email)}" data-user-id="${gt(e.id)}" data-name="${gt(o)}" data-current-roles="${gt(e.role_keys.join(","))}" style="${z} font-size: 11px; padding: 5px 10px;">Edit Roles</button>
        <button class="ws-team-remove" data-email="${gt(e.email)}" data-name="${gt(o)}" data-role-count="${gt(String(e.role_keys.length))}" style="${z} font-size: 11px; padding: 5px 10px; border-color: ${n.crimson}; color: ${n.crimson};">Remove</button>
      </div>
    </div>
  `},Xx=(e,t)=>e.length===0?`
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
  `+e.map(r=>Zx(r,t)).join(""),ka=async e=>{_l();let t=document.createElement("div");t.id=Dm,t.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 999998;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${h.sans};
  `,t.addEventListener("click",d=>{d.target===t&&_l()});let o=document.createElement("div");o.style.cssText=`
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
        <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Manage Team</div>
        <div style="font-size: 20px; font-weight: 500;">Roster</div>
      </div>
      <button id="ws-team-close" style="${z} font-size: 12px;">Close</button>
    </div>
    <div id="ws-team-content" style="margin-bottom: 16px;">
      <div style="padding: 40px; text-align: center; color: ${n.ash};">Loading roster\u2026</div>
    </div>
    <div id="ws-team-actions" style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid ${n.steel};">
      <button id="ws-team-add" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 10px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">+ Add Employee</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),o.querySelector("#ws-team-close")?.addEventListener("click",_l);let r;try{r=await wa({tenant_id:e,action:"list"})}catch(d){let c=o.querySelector("#ws-team-content");c&&(c.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          Failed to load roster: ${Ie(d.message)}
        </div>
      `);return}if(!r.ok||!r.roster){let d=o.querySelector("#ws-team-content");d&&(d.innerHTML=`
        <div style="padding: 40px; text-align: center; color: ${n.crimson};">
          ${Ie(r.error||"Unknown error loading roster")}
        </div>
      `);return}let a=H(),s=!!(a&&r.roster.some(d=>d.id===a&&d.role_keys.includes("manager"))),i=r.summary?`
      <div style="display: flex; gap: 16px; padding: 0 16px 14px; font-family: ${h.mono}; font-size: 11px; color: ${n.ash}; letter-spacing: 0.08em;">
        <span>${r.summary.total} total</span>
        <span>${r.summary.managers} owner</span>
        <span>${r.summary.acq} acq</span>
        <span>${r.summary.dispo} dispo</span>
        <span>${r.summary.tc} tc</span>
      </div>
    `:"",l=o.querySelector("#ws-team-content");if(l&&(l.innerHTML=i+Xx(r.roster,s)),s)o.querySelector("#ws-team-add")?.addEventListener("click",()=>{ew(e)}),o.querySelectorAll(".ws-team-edit").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;tw(e,{email:p.dataset.email||"",name:p.dataset.name||"",currentRoles:(p.dataset.currentRoles||"").split(",").filter(Boolean)})})}),o.querySelectorAll(".ws-team-remove").forEach(d=>{d.addEventListener("click",c=>{let p=c.currentTarget;ow(e,{email:p.dataset.email||"",name:p.dataset.name||"",roleCount:parseInt(p.dataset.roleCount||"0",10)})})});else{let d=o.querySelector("#ws-team-actions");d&&(d.innerHTML=`
        <div style="color: ${n.coolGray}; font-size: 12px; font-style: italic; flex: 1; align-self: center;">
          You're viewing this page as a non-Owner. Owner role required to add/edit/remove team members.
        </div>
      `)}},ew=e=>{let t="ws-crm-manage-team-add-modal";document.getElementById(t)?.remove();let o=document.createElement("div");o.id=t,o.style.cssText=`
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
    border-radius: ${v.sm};
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
    border-radius: ${v.lg};
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
      <button id="ws-team-add-cancel" style="${z} font-size: 12px;">Cancel</button>
      <button id="ws-team-add-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Add Employee</button>
    </div>
  `,o.appendChild(s),document.body.appendChild(o),s.querySelector("#ws-team-add-cancel")?.addEventListener("click",()=>o.remove()),s.querySelector("#ws-team-add-submit")?.addEventListener("click",async()=>{let i=(s.querySelector("#ws-team-add-first")?.value||"").trim(),l=(s.querySelector("#ws-team-add-last")?.value||"").trim(),d=(s.querySelector("#ws-team-add-email")?.value||"").trim(),c=(s.querySelector("#ws-team-add-mobile")?.value||"").trim(),p=(s.querySelector("#ws-team-add-role")?.value||"").trim(),u=s.querySelector("#ws-team-add-error"),b=s.querySelector("#ws-team-add-submit");if(!i||!l||!d||!c||!p){u&&(u.textContent="All fields are required.");return}b&&(b.disabled=!0,b.textContent="Adding\u2026",b.style.opacity="0.7"),u&&(u.textContent="");try{let _=await wa({tenant_id:e,action:"add",first_name:i,last_name:l,email:d,mobile:c,role:p,triggered_by_user_id:H()});if(!_.ok){u&&(u.textContent=_.error||"Failed to add employee"),b&&(b.disabled=!1,b.textContent="Add Employee",b.style.opacity="1");return}o.remove(),vl(`Added ${i} ${l} as ${Rm[p]||p}.`,"success"),await ka(e)}catch(_){u&&(u.textContent=_.message),b&&(b.disabled=!1,b.textContent="Add Employee",b.style.opacity="1")}})},tw=(e,t)=>{let o="ws-crm-manage-team-edit-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let s=i=>{let l=t.currentRoles.includes(i)?"checked":"";return`
      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: ${n.slate}; border: 1px solid ${n.steel}; border-radius: ${v.sm}; cursor: pointer; margin-bottom: 6px;">
        <input type="checkbox" data-role-key="${i}" ${l} style="cursor: pointer;" />
        <span style="font-size: 13px;">${Ie(Rm[i])}</span>
      </label>
    `};a.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.emerald}; margin-bottom: 4px;">Edit Roles</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 4px;">${Ie(t.name)}</div>
    <div style="font-size: 12px; color: ${n.ash}; margin-bottom: 16px;">${Ie(t.email)}</div>

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
      <button id="ws-team-edit-cancel" style="${z} font-size: 12px;">Cancel</button>
      <button id="ws-team-edit-submit" style="background: ${n.emerald}; color: ${n.obsidian}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Save Roles</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-edit-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-edit-submit")?.addEventListener("click",async()=>{let i=Array.from(a.querySelectorAll('input[type="checkbox"]')).filter(c=>c.checked).map(c=>c.dataset.roleKey||"").filter(Boolean),l=a.querySelector("#ws-team-edit-error"),d=a.querySelector("#ws-team-edit-submit");if(i.length===0){l&&(l.textContent="Select at least one role. To fully offboard, use Remove instead.");return}d&&(d.disabled=!0,d.textContent="Saving\u2026",d.style.opacity="0.7"),l&&(l.textContent="");try{let c=await wa({tenant_id:e,action:"update",email:t.email,roles:i,triggered_by_user_id:H()});if(!c.ok){l&&(l.textContent=c.error||"Failed to update roles"),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1");return}r.remove(),vl(`Updated roles for ${t.name}.`,"success"),await ka(e)}catch(c){l&&(l.textContent=c.message),d&&(d.disabled=!1,d.textContent="Save Roles",d.style.opacity="1")}})},ow=(e,t)=>{let o="ws-crm-manage-team-remove-modal";document.getElementById(o)?.remove();let r=document.createElement("div");r.id=o,r.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 28px 32px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `,a.innerHTML=`
    <div style="font-family: ${h.mono}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: ${n.crimson}; margin-bottom: 4px;">Remove from Team</div>
    <div style="font-size: 18px; font-weight: 500; margin-bottom: 12px;">${Ie(t.name)}</div>
    <div style="font-size: 13px; color: ${n.bone}; line-height: 1.5; margin-bottom: 8px;">
      ${Ie(t.email)} will be removed from all ${t.roleCount} role${t.roleCount===1?"":"s"}.
    </div>
    <div style="font-size: 12px; color: ${n.ash}; line-height: 1.5; margin-bottom: 16px;">
      Their GHL user account is soft-deactivated: every permission flag is stripped (no contacts, calls, settings, or conversations) and their first name is prefixed with <span style="font-family: ${h.mono}; color: ${n.bone};">DEACTIVATED</span> as a visible flag in My Staff. Their email cannot be renamed by API (GHL limitation); if you want to free the address for a new hire, change it manually in Settings \u2192 My Staff. The user record stays in GHL so past contacts and opportunities they touched still show their name. Open deals they currently own need to be reassigned manually for now.
    </div>

    <div id="ws-team-remove-error" style="color: ${n.crimson}; font-size: 11px; min-height: 16px;"></div>

    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;">
      <button id="ws-team-remove-cancel" style="${z} font-size: 12px;">Cancel</button>
      <button id="ws-team-remove-submit" style="background: ${n.crimson}; color: ${n.bone}; border: none; border-radius: ${v.sm}; padding: 8px 18px; font-family: ${h.sans}; font-size: 13px; font-weight: 600; cursor: pointer;">Remove from Team</button>
    </div>
  `,r.appendChild(a),document.body.appendChild(r),a.querySelector("#ws-team-remove-cancel")?.addEventListener("click",()=>r.remove()),a.querySelector("#ws-team-remove-submit")?.addEventListener("click",async()=>{let s=a.querySelector("#ws-team-remove-error"),i=a.querySelector("#ws-team-remove-submit");i&&(i.disabled=!0,i.textContent="Removing\u2026",i.style.opacity="0.7"),s&&(s.textContent="");try{let l=await wa({tenant_id:e,action:"remove",email:t.email,triggered_by_user_id:H()});if(!l.ok){s&&(s.textContent=l.error||"Failed to remove"),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1");return}r.remove(),vl(`Removed ${t.name} from the team.`,"success"),await ka(e)}catch(l){s&&(s.textContent=l.message),i&&(i.disabled=!1,i.textContent="Remove from Team",i.style.opacity="1")}})},rw=89,nw=93,aw=310,sw=34,iw=14,lw=14,dw=3,xa=e=>{let t=document.querySelector('iframe[name="settings-app"]');if(!t){e.style.right="24px";return}let o=t.getBoundingClientRect(),r=window.innerWidth-o.right+rw;e.style.right=`${Math.max(r,16)}px`},cw=e=>{let t=document.createElement("button");return t.id=st,t.type="button",t.style.cssText=`
    position: fixed;
    top: ${nw}px;
    right: 24px;
    width: ${aw}px;
    height: ${sw}px;
    padding: 0 ${lw}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${n.emerald};
    color: ${n.obsidian};
    border: 1px solid ${n.emerald};
    border-radius: ${dw}px;
    font-family: ${h.sans};
    font-size: ${iw}px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.12s ease, color 0.12s ease;
  `,t.addEventListener("mouseenter",()=>{t.style.background=n.emeraldBright}),t.addEventListener("mouseleave",()=>{t.style.background=n.emerald}),t.innerHTML=`
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${n.obsidian}; flex-shrink: 0;"></span>
    <span>Manage Team</span>
  `,t.addEventListener("click",()=>{ka(e)}),xa(t),setTimeout(()=>xa(t),200),setTimeout(()=>xa(t),800),pw(),t},Hm=!1,pw=()=>{Hm||(Hm=!0,window.addEventListener("resize",()=>{let e=document.getElementById(st);e instanceof HTMLButtonElement&&xa(e)}))},yl=!1,mw=()=>{if(!yl){yl=!0;try{let e=Nm();if(!e){document.getElementById(st)?.remove(),document.getElementById(`${st}-floater`)?.remove();return}let t=document.getElementById(st);if(t&&t.dataset.tenantId===e.tenantId)return;document.getElementById(`${st}-floater`)?.remove();let o=document.createElement("div");o.id=`${st}-floater`,o.style.cssText=`
      position: fixed;
      top: 88px;
      right: 32px;
      z-index: 99999;
    `;let r=cw(e.tenantId);r.dataset.tenantId=e.tenantId,o.appendChild(r),document.body.appendChild(o),m.debug(`[manage-team] mounted (floater) for tenant ${e.tenantId}`)}finally{yl=!1}}},Fm=()=>{if(!Nm()){document.getElementById(st)?.remove(),document.getElementById(`${st}-floater`)?.remove();return}mw()};var bw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/contract/stage",uw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/property/add-contact",xl="ws-crm-prepare-contract-button",zm="ws-crm-prepare-contract-menu",we="ws-crm-prepare-contract-modal",qm="ws-crm-modal-date-style",Nr="https://services.leadconnectorhq.com",Ym=()=>{if(document.getElementById(qm))return;let e=document.createElement("style");e.id=qm,e.textContent=`
    #${we} input[type="date"] { color-scheme: dark; }
    #${we} input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(46%) sepia(89%) saturate(1500%) hue-rotate(199deg) brightness(101%) contrast(94%);
      cursor: pointer;
      opacity: 1;
    }
    #${we} input[type="number"]::-webkit-inner-spin-button,
    #${we} input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    #${we} input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  `,document.head.appendChild(e)},Jm=e=>{e.querySelectorAll('input[type="number"]').forEach(t=>{let o=!1;t.addEventListener("focus",()=>{t.select(),o=!0}),t.addEventListener("mouseup",r=>{o&&(r.preventDefault(),o=!1)}),t.addEventListener("blur",()=>{o=!1})})},wl="__WS_CRM_CAPTURED_AUTH",hw=50*60*1e3,Rr=()=>{try{let e=localStorage.getItem(wl);if(!e)return null;let t=JSON.parse(e);return t?.authorization?Date.now()-(t.capturedAt||0)>hw?(localStorage.removeItem(wl),null):t:null}catch{return null}},_w=e=>{try{localStorage.setItem(wl,JSON.stringify(e))}catch{}},Fr=()=>{let e=Rr(),t=window;if(t.__WS_CRM_DIAG=t.__WS_CRM_DIAG||{},t.__WS_CRM_DIAG.authChecks=(t.__WS_CRM_DIAG.authChecks||0)+1,console.log(`[ws-crm-customizer] [auth-check #${t.__WS_CRM_DIAG.authChecks}]`,e?`present (captured ${Date.now()-e.capturedAt}ms ago, ${e.authorization.slice(0,20)}\u2026)`:"NULL \u2014 interceptor has not captured a token yet"),!e)throw new Error("GHL auth not yet captured. Try clicking around the page (refresh, open a contact) to trigger a GHL API call, then retry.");let o={Authorization:e.authorization,Version:"2021-07-28",Channel:"APP",Source:"WEB_USER"};return e.tokenId&&(o["token-id"]=e.tokenId),o},jm=(e,t)=>new Promise(o=>{let r=Date.now(),a=()=>{if((Rr()?.capturedAt??0)>e)return o(!0);if(Date.now()-r>t)return o(!1);window.setTimeout(a,250)};a()}),kl=async(e,t={},o=2)=>{let r=Rr()?.capturedAt??0,a;try{a={...Fr(),...t.headers??{}}}catch(i){if(o>0&&await jm(r,4e3))return kl(e,t,o-1);throw i}let s=await fetch(e,{...t,headers:a});return s.status!==401||o<=0?s:await jm(r,4e3)?kl(e,t,o-1):s},Um=!1,yw=()=>{if(Um)return;Um=!0;let e=window;e.__WS_CRM_DIAG=e.__WS_CRM_DIAG||{fetchCalls:0,xhrCalls:0,fetchAuthSeen:0,xhrAuthSeen:0,captured:0,lastSeenHeaders:null};let t=()=>{let d=Rr();return!!(d&&d.authorization&&Date.now()-(d.capturedAt||0)<3e5)},o=(d,c,p)=>{e.__WS_CRM_DIAG.lastSeenHeaders={url:d,headers:c,source:p};let u=c.authorization||c.Authorization;if(!u){e.__WS_CRM_DIAG.fetchCalls+e.__WS_CRM_DIAG.xhrCalls<=3&&console.log(`[ws-crm-customizer] [intercept:${p} no-auth]`,{url:d.split("?")[0],headerKeys:Object.keys(c)});return}p==="fetch"?e.__WS_CRM_DIAG.fetchAuthSeen++:e.__WS_CRM_DIAG.xhrAuthSeen++;let b=c["token-id"]||c["Token-Id"]||void 0,_=Rr()?.authorization;_w({authorization:u,tokenId:b,capturedAt:Date.now()}),_!==u&&(e.__WS_CRM_DIAG.captured++,console.log(`[ws-crm-customizer] [intercept:${p}] captured GHL auth from ${d.split("?")[0]} (${u.slice(0,24)}\u2026)`))},r=window.fetch;window.fetch=async function(...d){let c=typeof d[0]=="string"?d[0]:d[0]instanceof URL?d[0].toString():d[0].url,p=d[1]||{};if(c&&c.includes("services.leadconnectorhq.com")&&!t()){e.__WS_CRM_DIAG.fetchCalls++;let u=p.headers;!u&&d[0]instanceof Request&&(u=d[0].headers);let b={};if(u instanceof Headers)u.forEach((_,y)=>b[y.toLowerCase()]=_);else if(Array.isArray(u))u.forEach(([_,y])=>b[_.toLowerCase()]=y);else if(u&&typeof u=="object")for(let _ of Object.keys(u))b[_.toLowerCase()]=u[_];o(c,b,"fetch")}return r.apply(this,d)};let a=XMLHttpRequest.prototype,s=a.open,i=a.setRequestHeader,l=a.send;a.open=function(d,c,...p){return this.__wsCrmUrl=c,this.__wsCrmHeaders={},s.call(this,d,c,...p)},a.setRequestHeader=function(d,c){return this.__wsCrmHeaders&&typeof d=="string"&&(this.__wsCrmHeaders[d.toLowerCase()]=c),i.call(this,d,c)},a.send=function(d){let c=this.__wsCrmUrl,p=this.__wsCrmHeaders;return c&&c.includes("services.leadconnectorhq.com")&&p&&!t()&&(e.__WS_CRM_DIAG.xhrCalls++,o(c,p,"xhr")),l.call(this,d)},m.debug("[prepare-contract] interceptors installed (fetch + XHR)")},Qm=()=>{let e=W();return!e||!e.locationId?null:{contactId:e.contactId,tenantId:e.locationId}},vw=e=>{let t=e.dataset;return t.tenantId&&t.contactId?{tenantId:t.tenantId,contactId:t.contactId,oppId:t.oppId||void 0}:t.tenantId&&t.oppId?{tenantId:t.tenantId,contactId:"",oppId:t.oppId}:Qm()},gw=e=>{let t=(e||"").trim().toLowerCase();return/^\[?\s*aa\s*\]?\s*[-\s]/i.test(t)||/assignment.*(contract|agreement)/i.test(t)?"AA":/^\[?\s*pa\s*\]?\s*[-\s]/i.test(t)||/purchase.*(contract|agreement)/i.test(t)?"PA":"passthrough"},El=e=>/2\s*signers?/i.test(e||""),Zm="__WS_CRM_TEMPLATES_CACHE_V1",fw=24*60*60*1e3,Wm=e=>{try{let t=window.localStorage.getItem(Zm);if(!t)return null;let o=JSON.parse(t);return o.tenantId!==e||Date.now()-o.cachedAt>fw?null:o.templates}catch{return null}},xw=(e,t)=>{try{let o={tenantId:e,templates:t,cachedAt:Date.now()};window.localStorage.setItem(Zm,JSON.stringify(o))}catch{}},ww=async e=>{let t=`${Nr}/proposals/templates/bulk?type.in%5B%5D=proposal&type.in%5B%5D=estimate&locationId.eq=${encodeURIComponent(e)}&skip=0&limit=10`,o;try{o=await kl(t,{method:"GET"})}catch(i){let l=Wm(e);if(l)return m.info(`[prepare-contract] templates network failure, using cache (${l.length} items)`),l;throw i}if(!o.ok){let i=Wm(e);if(i)return m.info(`[prepare-contract] templates fetch ${o.status}, using cache (${i.length} items)`),i;let l="";try{l=await o.text()}catch{}let d=l?` \u2014 ${l.slice(0,200)}`:"";throw new Error(`Templates fetch returned ${o.status} ${o.statusText}${d}`)}let r=await o.json();console.log("[ws-crm-customizer] [templates response]",Array.isArray(r)?`array of ${r.length}`:`keys: ${Object.keys(r||{}).join(", ")}`,r);let a=[];Array.isArray(r)?a=r:Array.isArray(r?.templates)?a=r.templates:Array.isArray(r?.items)?a=r.items:Array.isArray(r?.data)?a=r.data:Array.isArray(r?.results)?a=r.results:Array.isArray(r?.docs)?a=r.docs:r?.data&&Array.isArray(r.data.templates)?a=r.data.templates:r?.data&&Array.isArray(r.data.items)&&(a=r.data.items);let s=a.map(i=>({id:(i._id??i.id??i.templateId)||"",name:i.name||i.title||"(unnamed template)",type:gw(i.name||i.title||"")})).filter(i=>!!i.id);return s.length>0&&xw(e,s),s},kw="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/open-opps",Ew="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/mt/open-opps",Xm=async(e,t,o,r)=>{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:t,contact_id:o}),credentials:"omit"});if(!a.ok)throw new Error(`${r} opp lookup HTTP ${a.status}`);let s=await a.json();if(!s.ok)throw new Error(s.reason||`${r} opp lookup failed`);return(s.opps||[]).map(i=>({id:i.id,name:i.name||"(unnamed opp)",propertyAddress:i.name||"",updatedAt:i.updatedAt||null})).sort((i,l)=>{let d=i.updatedAt?Date.parse(i.updatedAt):0;return(l.updatedAt?Date.parse(l.updatedAt):0)-d})},$w=(e,t)=>Xm(kw,e,t,"ACQ"),Tw=(e,t)=>Xm(Ew,e,t,"MT"),Cw=async e=>{let t=await fetch(bw,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e.tenantId,contact_id:e.contactId,template_id:e.templateId,template_type:e.templateType,opp_id:e.oppId,closing_date:e.closingDate,buyer_earnest_due_date:e.buyerEarnestDueDate,lender_source:e.lenderSource,triggered_by_user_id:e.userId,overrides:e.overrides,need_second_seller:e.needSecondSeller||void 0}),credentials:"omit"});if(!t.ok)throw new Error(`Contract.Stage HTTP ${t.status}`);return await t.json()},Sw=async(e,t,o)=>{let r=`${Nr}/proposals/templates/to-proposal/${e}/${t}?locale=en-US&contactId=${encodeURIComponent(o)}`,a=await fetch(r,{method:"POST",headers:Fr()});if(!a.ok)throw new Error(`to-proposal HTTP ${a.status} ${a.statusText}`);let s=await a.json(),i=s._id||s.id||s.proposal?._id||s.proposal?.id;if(!i)throw new Error("to-proposal returned no proposal id");return i},Lw=async(e,t)=>{let o=await fetch(`${Nr}/proposals/document/${t}?locationId=${encodeURIComponent(e)}`,{method:"GET",headers:Fr()});if(!o.ok){let s=await o.text().catch(()=>"");throw new Error(`GET proposal ${t} HTTP ${o.status} ${s.slice(0,200)}`)}let r=await o.json(),a=r?.document||r?.proposal||r;if(!a||typeof a!="object")throw new Error(`GET proposal returned unexpected shape: ${JSON.stringify(r).slice(0,200)}`);return a},eb=async e=>{let t=await fetch(`${Nr}/contacts/${e}`,{method:"GET",headers:Fr()});if(!t.ok){let a=await t.text().catch(()=>"");throw new Error(`GET contact ${e} HTTP ${t.status} ${a.slice(0,200)}`)}let o=await t.json(),r=o?.contact||o;return{firstName:r?.firstName||"",lastName:r?.lastName||"",email:r?.email||""}},Aw=(e,t,o)=>{let a="ENTER 2ND SELLER NAME",s=f=>f==="signature2"||/_s2$/.test(f),i=f=>/^seller2_name_/.test(f),l={},d=new Set,c=0,p=0,u=0,b=0,_=Array.isArray(e.pages)?e.pages:[],y=(f,w)=>{!f||typeof f!="object"||(w(f),(f.children||[]).forEach(S=>y(S,w)))},g=(f,w)=>{(f.children||[]).forEach(S=>y(S,w))},x=!1;_.forEach(f=>g(f,w=>{let S=w.component?.options;S&&S.entityName==="contacts"&&s(S.fieldId||"")&&(x=!0)}));let $=new Set;return _.forEach(f=>{let w={};g(f,S=>{let T=S.component?.options;if(!T||T.entityName!=="contacts"||!S.responsiveStyles?.large?.position)return;let k=(T.fieldId||"").replace(/_s2$/,"").replace(/^signature2$/,"signature1"),C=`${S.type}|${k}`;(w[C]=w[C]||[]).push(S)}),Object.values(w).forEach(S=>{S.sort((k,C)=>(k.responsiveStyles?.large?.position?.top??0)-(C.responsiveStyles?.large?.position?.top??0));let T=[];S.forEach(k=>{let C=k.responsiveStyles?.large?.position?.top??0,E=T.find(L=>Math.abs(L.top-C)<=30);E?E.els.push(k):T.push({top:C,els:[k]})}),T.forEach(k=>k.els.sort((C,E)=>(C.responsiveStyles?.large?.position?.left??0)-(E.responsiveStyles?.large?.position?.left??0))),T.every(k=>k.els.length===2)?T.forEach(k=>$.add(k.els[1].id)):T.every(k=>k.els.length===1)&&T.length===2?$.add(T[1].els[0].id):T.forEach(k=>{k.els.length===2&&$.add(k.els[1].id)})})}),_.forEach(f=>{g(f,w=>{let S=w.component?.options;if(!S||!w.id)return;if(i(S.fieldId||"")||typeof S.text=="string"&&S.text.trim()===a||typeof S.placeholder=="string"&&S.placeholder.trim()===a){S.text=o.contactName,d.add(w.id),u+=1;return}if(S.entityName!=="contacts")return;let T=s(S.fieldId||""),k=$.has(w.id);x&&T!==k&&(b+=1);let C=x?T:k;S.recipient=C?o.id:t,l[w.id]=S.recipient,C?p+=1:c+=1})}),(e.fillableFields||[]).forEach(f=>{f.entityType==="contacts"&&l[f.id]&&(f.recipient=l[f.id]),(d.has(f.id)||i(f.fieldId||"")||typeof f.value=="string"&&f.value.trim()===a)&&(f.value=o.contactName)}),{s1Count:c,s2Count:p,nameFills:u,usedGeometry:!x,disagreements:b}},Mw=async(e,t,o,r,a)=>{let s;try{s=await Lw(e,t)}catch(y){return{ok:!1,body:`fetchProposalDocument: ${y.message}`}}let i;try{i=await eb(o)}catch(y){return{ok:!1,body:`fetchContactBasics: ${y.message}`}}let l=`${i.firstName} ${i.lastName}`.trim()||i.email||o,d={id:o,firstName:i.firstName,lastName:i.lastName,email:i.email,contactName:l,isPrimary:!0,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"},u=[...(Array.isArray(s.recipients)?s.recipients:[]).filter(y=>y?.entityName!=="contacts"),d];if(a&&a.id!==o){u.push({id:a.id,firstName:a.firstName,lastName:a.lastName,email:a.email,contactName:a.contactName,isPrimary:!1,hasCompleted:!1,imgUrl:"",entityName:"contacts",role:"signer"});let y=Aw(s,o,a);m.info(`[prepare-contract] second-seller assignment: S1=${y.s1Count} S2=${y.s2Count} nameFills=${y.nameFills}${y.usedGeometry?" (geometry fallback \u2014 template not hardened)":""}${y.disagreements>0?` \u2014 ${y.disagreements} marker/geometry disagreement(s), markers used`:""}`),y.s2Count===0&&m.warn("[prepare-contract] second seller attached as recipient but NO signer-2 elements were found to assign \u2014 template may need review")}let b={name:r||s.name,locationId:s.locationId||e,pages:s.pages||[],variables:s.variables||[],fillableFields:s.fillableFields||[],timezone:s.timezone||{},recipients:u,grandTotal:s.grandTotal},_=await fetch(`${Nr}/proposals/document/${t}`,{method:"PUT",headers:{...Fr(),"Content-Type":"application/json"},body:JSON.stringify(b)});if(!_.ok){let y=await _.text().catch(()=>"");return{ok:!1,status:_.status,body:y}}return{ok:!0}},Iw=(e,t)=>{let o=`/v2/location/${e}/payments/proposals-estimates/edit/${t}`;window.location.href=o},$a="__WS_CRM_PENDING_INSTRUCTIONS",Ow=60*1e3,Pw=[{matches:"2 signers",title:"Special Instructions for 2-Signer Agreement",bodyHtml:`
      <p style="margin: 0 0 14px 0; line-height: 1.5;">Primary contact is already populated, but you have to <strong>manually assign the Second Seller</strong> and the associated fields.</p>
      <ol style="margin: 0; padding-left: 22px; line-height: 1.7;">
        <li>Click the <strong>person icon (\u{1F464})</strong> in the top left corner</li>
        <li>Click <strong>+ Add More Recipients</strong></li>
        <li>Choose <strong>Second Seller</strong>, or <strong>"Add New Client"</strong> if Second Seller does not yet exist</li>
        <li>Manually change all fields that read <strong>"ENTER 2ND SELLER NAME"</strong> \u2014 type Second Seller name in its place</li>
        <li>Manually change Second Seller initial and signature fields (<strong>4 initial fields and 2 signature fields</strong>)</li>
        <li>Preview before sending to verify that all info looks correct</li>
      </ol>
    `}],Bw=e=>{let t=(e||"").toLowerCase();for(let o of Pw)if(t.includes(o.matches.toLowerCase()))return o;return null},Hw=(e,t,o)=>{try{let r={proposalId:e,title:t,bodyHtml:o,ts:Date.now()};localStorage.setItem($a,JSON.stringify(r))}catch{}},Dw=()=>{try{let e=localStorage.getItem($a);if(!e)return null;let t=JSON.parse(e);return!t?.proposalId||!t?.title||!t?.bodyHtml||Date.now()-(t.ts||0)>Ow?(localStorage.removeItem($a),null):t}catch{return null}},Rw=()=>{try{localStorage.removeItem($a)}catch{}},Nw=(e,t)=>{document.getElementById(we)?.remove();let o=document.createElement("div");o.id=we,o.style.cssText=`
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
    border-radius: ${v.lg};
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
    ">${ke(e)}</div>
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
        border-radius: ${v.sm};
        cursor: pointer;
      ">Got it, continue</button>
    </div>
  `,o.appendChild(r),document.body.appendChild(o),r.querySelector("#ws-pc-instructions-ack")?.addEventListener("click",()=>o.remove())},Fw=/\/v2\/location\/[^/]+\/payments\/proposals-estimates\/edit\/([a-zA-Z0-9]+)/,zw=()=>{let e=window.location.pathname.match(Fw);if(!e)return;let t=e[1],o=Dw();o&&o.proposalId===t&&(Rw(),window.setTimeout(()=>{Nw(o.title,o.bodyHtml)},600))},Gm="ws-crm-prepare-contract-toast",ie=(e,t="info",o=4e3)=>{document.getElementById(Gm)?.remove();let r=document.createElement("div");r.id=Gm;let a=t==="error"?n.crimson:n.emerald;r.style.cssText=`
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
    font-family: ${h.sans};
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  `,r.textContent=e,document.body.appendChild(r),window.setTimeout(()=>r.remove(),o)},Km=(e,t)=>new Promise(o=>{document.getElementById(we)?.remove();let r=document.createElement("div");r.id=we,r.style.cssText=`
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
      border-radius: ${v.lg};
      padding: 24px 28px;
      color: ${n.bone};
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    `;let s=d=>{if(!d)return"";try{return new Date(d).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}catch{return d}},i=e.map(d=>`
        <button type="button" class="ws-pc-acq-opp" data-opp-id="${Je(d.id)}" style="
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
          font-family: ${h.sans};
        ">
          <div style="font-size: 14px; font-weight: 500; line-height: 1.3;">${ke(d.propertyAddress||d.name)}</div>
          ${d.updatedAt?`<div style="font-size: 11px; color: ${n.ash}; margin-top: 4px;">Last updated ${ke(s(d.updatedAt))}</div>`:""}
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
      ">This ${ke(t.perspective)} has ${e.length} open deals</div>
      <div style="
        font-size: 12px;
        color: ${n.ash};
        margin-bottom: 16px;
        line-height: 1.4;
      ">Which property is this contract for? The ${ke(t.agreementLabel)} will use that opp's data.</div>
      <div>${i}</div>
      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
        <button id="ws-pc-cancel" type="button" style="
          background: transparent;
          border: 1px solid ${n.steel};
          color: ${n.bone};
          font-family: ${h.sans};
          font-size: 13px;
          padding: 8px 16px;
          border-radius: ${v.sm};
          cursor: pointer;
        ">Cancel</button>
      </div>
    `,r.appendChild(a),document.body.appendChild(r);let l=d=>{r.remove(),o(d)};r.addEventListener("click",d=>{d.target===r&&l(null)}),a.querySelector("#ws-pc-cancel")?.addEventListener("click",()=>l(null)),a.querySelectorAll(".ws-pc-acq-opp").forEach(d=>{d.addEventListener("mouseenter",()=>{d.style.borderColor=n.emerald,d.style.background=n.graphite}),d.addEventListener("mouseleave",()=>{d.style.borderColor=n.steel,d.style.background=n.slate}),d.addEventListener("click",c=>{c.stopPropagation(),c.preventDefault();let p=d.dataset.oppId||"";p&&l(p)})})}),qw=(e,t,o)=>new Promise(r=>{document.getElementById(we)?.remove();let a=document.createElement("div");a.id=we,a.style.cssText=`
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
      border-radius: ${v.lg};
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
      border-radius: ${v.sm};
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
      <div style="font-size: 17px; font-weight: 500; margin-bottom: 6px;">${ke(o)}</div>
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
          border-radius: ${v.sm};
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
          border-radius: ${v.sm};
          cursor: pointer;
        ">Add & Continue</button>
      </div>
    `,a.appendChild(s),document.body.appendChild(a);let d=u=>{a.remove(),r(u)};a.addEventListener("click",u=>{u.target===a&&d(!1)}),s.querySelector("#ws-pc-s2-cancel")?.addEventListener("click",()=>d(!1));let c=s.querySelector("#ws-pc-s2-err"),p=s.querySelector("#ws-pc-s2-save");p?.addEventListener("click",async()=>{let u=x=>(s.querySelector(x)?.value||"").trim(),b=u("#ws-pc-s2-first"),_=u("#ws-pc-s2-last"),y=u("#ws-pc-s2-email"),g=u("#ws-pc-s2-phone");if(!b&&!_){c&&(c.textContent="Enter at least a first or last name.");return}if(!y){c&&(c.textContent="Email is required \u2014 the contract is emailed to them for signing.");return}c&&(c.textContent=""),p&&(p.disabled=!0,p.textContent="Adding\u2026");try{let x=await fetch(uw,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tenant_id:e,property_record_id:t,role:"seller_2",new_contact:{firstName:b,lastName:_,email:y,phone:g||void 0}})}),$=await x.json().catch(()=>({}));if(!x.ok||$?.ok===!1){c&&(c.textContent=$?.error||`Failed to add second seller (HTTP ${x.status}). You can add them from the Properties panel instead.`),p&&(p.disabled=!1,p.textContent="Add & Continue");return}m.info("[prepare-contract] second seller added + linked via gate modal"),d(!0)}catch(x){c&&(c.textContent=`Network error: ${x.message}`),p&&(p.disabled=!1,p.textContent="Add & Continue")}}),window.setTimeout(()=>s.querySelector("#ws-pc-s2-first")?.focus(),0)}),Vm=async(e,t,o,r,a,s)=>{if(s.second_seller)return s;if(s.second_seller_warning)return ie(`This property's second-seller link looks broken (${s.second_seller_warning}). Fix it from the contact's Properties panel, then try again.`,"error",9e3),m.warn(`[prepare-contract] 2-signer gate: ${s.second_seller_warning}`),null;if(!s.property_record_id)return ie("Couldn't resolve the property record for this deal, so the second seller can't be linked here. Add them from the contact's Properties panel (Add person \u2192 Second seller), then try again.","error",9e3),null;if(!await qw(e,s.property_record_id,o.name))return m.info("[prepare-contract] 2-signer gate cancelled \u2014 aborting contract flow"),null;let l=await Lo({tenantId:e,contactId:t,template:o,oppId:r,userId:a,needSecondSeller:o.type==="passthrough"?!0:void 0});return l.second_seller?l:(ie("Second seller was added but didn't resolve on re-check. Verify the property link in the Properties panel, then try again.","error",9e3),m.warn("[prepare-contract] 2-signer gate: re-stage still has no second_seller",l),null)},jw=({tenantId:e,contactId:t,template:o,staged:r})=>{document.getElementById(we)?.remove(),Ym();let a=r.debug||{},s=typeof a.propertyAddress=="string"?a.propertyAddress:"",i=typeof a.sellerName=="string"?a.sellerName:"",l=typeof a.purchasePrice=="number"?a.purchasePrice:0,d=typeof a.emd=="number"?a.emd:0,c=typeof a.cashAtClose=="number"?a.cashAtClose:l-d,p=a.daysToClose===void 0||a.daysToClose===null||a.daysToClose===""?"":String(a.daysToClose),u=a.inspectionDays===void 0||a.inspectionDays===null||a.inspectionDays===""?"":String(a.inspectionDays),b=typeof a.additionalTerms=="string"?a.additionalTerms:"",_=typeof a.currentOccupancy=="string"?a.currentOccupancy:"",y=typeof a.occupancyAtClose=="string"?a.occupancyAtClose:"",g=Array.isArray(a.occupancyOptions)&&a.occupancyOptions.length>0?a.occupancyOptions:["Vacant","Owner Occupied","Tenant Occupied","Squatter Occupied"],x=document.createElement("div");x.id=we,x.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let f=`
    font-family: ${h.mono};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.ash};
    width: 40%;
    flex-shrink: 0;
    padding-top: 10px;
  `,w=`
    flex: 1;
    background: ${n.slate};
    border: 1px solid ${n.steel};
    border-radius: ${v.sm};
    color: ${n.bone};
    font-family: ${h.sans};
    font-size: 13px;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
    text-align: left;
    min-width: 0;
  `,S=`${w} text-align: right;`,T=`
    flex: 1;
    color: ${n.bone};
    font-size: 13px;
    padding: 10px 0;
    text-align: left;
    word-break: break-word;
  `,k=`
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
    border-radius: ${v.sm};
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
  `,L=B=>['<option value="">(unset)</option>'].concat(g.map(U=>`<option value="${Je(U)}"${U===B?" selected":""}>${ke(U)}</option>`)).join("");$.innerHTML=`
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
    ">${ke(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the ACQ opportunity.</div>

    <div style="margin-bottom: 12px;">
      <div style="${k}">
        <div style="${f}">Property Address</div>
        <div style="${T}">${ke(s||"(set on Property record)")}</div>
      </div>
      <div style="${k}">
        <div style="${f}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${Je(i)}" placeholder="Seller name" style="${w}" />
      </div>
      <div style="${k}">
        <div style="${f}">Purchase Price</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-purchase-price" type="number" min="0" step="0.01" value="${l}" style="${S}" />
        </div>
      </div>
      <div style="${k}">
        <div style="${f}">Earnest Deposit</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-emd" type="number" min="0" step="0.01" value="${d}" style="${S}" />
        </div>
      </div>
      <div style="${k}">
        <div style="${f}">Cash at Close</div>
        <div style="${C}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-cash-at-close" type="number" min="0" step="0.01" value="${c}" style="${S}" />
        </div>
      </div>
      <div style="${k}">
        <div style="${f}">Days to Close</div>
        <input id="ws-pc-days-to-close" type="number" min="0" step="1" value="${Je(p)}" placeholder="e.g. 30" style="${w}" />
      </div>
      <div style="${k}">
        <div style="${f}">Inspection Period (Days)</div>
        <input id="ws-pc-inspection-days" type="number" min="0" step="1" value="${Je(u)}" placeholder="e.g. 10" style="${w}" />
      </div>
      <div style="${k}">
        <div style="${f}">Current Occupancy</div>
        <select id="ws-pc-current-occupancy" style="${E}">${L(_)}</select>
      </div>
      <div style="${k}">
        <div style="${f}">Occupancy at Close</div>
        <select id="ws-pc-occupancy-at-close" style="${E}">${L(y)}</select>
      </div>
      <div style="${k} align-items: flex-start;">
        <div style="${f}">Additional Terms</div>
        <textarea id="ws-pc-additional-terms" rows="3" placeholder="Any extra clauses, contingencies, or notes for the contract" style="${w} resize: vertical; min-height: 60px; font-family: ${h.sans};">${ke(b)}</textarea>
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
        border-radius: ${v.sm};
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
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,x.appendChild($),document.body.appendChild(x);let A=$.querySelector("#ws-pc-purchase-price"),M=$.querySelector("#ws-pc-emd"),O=$.querySelector("#ws-pc-cash-at-close");$e(A),$e(M),$e(O),Jm($);let P=!1;O?.addEventListener("input",()=>{P=!0});let Z=()=>{if(P)return;let B=he(A?.value),U=he(M?.value);O&&Hs(O,Math.max(0,B-U))};A?.addEventListener("input",Z),M?.addEventListener("input",Z);let D=()=>x.remove();x.addEventListener("click",B=>{B.target===x&&D()}),$.querySelector("#ws-pc-cancel")?.addEventListener("click",D);let V=$.querySelector("#ws-pc-submit"),Y=$.querySelector("#ws-pc-error");V?.addEventListener("click",async()=>{if(V){Y&&(Y.textContent=""),V.disabled=!0,V.textContent="Opening\u2026";try{let B=($.querySelector("#ws-pc-seller-name")?.value||"").trim(),U=he(A?.value),ee=he(M?.value),Ee=he(O?.value),Oe=($.querySelector("#ws-pc-days-to-close")?.value??"").trim(),Pe=($.querySelector("#ws-pc-inspection-days")?.value??"").trim(),Ro=($.querySelector("#ws-pc-additional-terms")?.value??"").trim(),No=($.querySelector("#ws-pc-current-occupancy")?.value??"").trim(),jt=($.querySelector("#ws-pc-occupancy-at-close")?.value??"").trim(),ve={};if(B!==i&&(ve.sellerName=B),U!==l&&(ve.purchasePrice=U),ee!==d&&(ve.emd=ee),Ee!==c&&(ve.cashAtClose=Ee),Oe!==p&&(ve.daysToClose=Oe),Pe!==u&&(ve.inspectionDays=Pe),Ro!==b&&(ve.additionalTerms=Ro),No!==_&&(ve.currentOccupancy=No),jt!==y&&(ve.occupancyAtClose=jt),Object.keys(ve).length>0){m.info("[prepare-contract] PA modal submit with overrides:",ve),V.textContent="Saving\u2026";let Ra=H(),Na=await Lo({tenantId:e,contactId:t,template:o,userId:Ra,overrides:ve});m.info("[prepare-contract] re-stage with overrides ok:",Na),V.textContent="Opening\u2026"}else m.info("[prepare-contract] PA modal submit \u2014 no edits, skipping re-stage");let Gr=s?`${s} - Purchase Agreement`:void 0,ge=El(o.name)&&r.second_seller||null;await Cl(e,t,o,Gr,ge)}catch(B){V.disabled=!1,V.textContent="Open Contract",Y&&(Y.textContent=B.message||"Failed to open contract."),m.warn("[prepare-contract] PA confirm submit failed:",B)}}})},Uw=({tenantId:e,contactId:t,template:o,oppId:r,staged:a,userId:s,defaultClosingDate:i,defaultEMDDueDate:l})=>{document.getElementById(we)?.remove(),Ym();let d=a.debug||{},c=typeof d.propertyAddress=="string"?d.propertyAddress:"",p=typeof d.sellerDisplay=="string"?d.sellerDisplay:"",u=typeof d.assignmentPrice=="number"?d.assignmentPrice:0,b=typeof d.buyerEMD=="number"?d.buyerEMD:0,_=typeof d.assignmentFee=="number"?d.assignmentFee:0,y=typeof d.acqPurchasePrice=="number"?d.acqPurchasePrice:0,g=typeof d.closingOffice=="string"?d.closingOffice:"",x=typeof d.buyerCompanyName=="string"?d.buyerCompanyName:"",$=i,f=l,w="",S=document.createElement("div");S.id=we,S.style.cssText=`
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
    border-radius: ${v.lg};
    padding: 24px 28px;
    color: ${n.bone};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  `;let k=`
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
    border-radius: ${v.sm};
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
    ">${ke(o.name)}</div>
    <div style="
      font-size: 12px;
      color: ${n.ash};
      margin-bottom: 16px;
      line-height: 1.4;
    ">Review and edit before opening the contract. Edits save back to the source opp (MT/ACQ/Dispo/TC). Closing date, EMD due date, and lender source live only on the contract.</div>

    <div style="margin-bottom: 12px;">
      <div style="${A}">
        <div style="${k}">Property Address</div>
        <div style="${L}">${ke(c||"(set on Property record)")}</div>
      </div>
      <div style="${A}">
        <div style="${k}">Seller Name</div>
        <input id="ws-pc-seller-name" type="text" value="${Je(p)}" placeholder="Seller name" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${k}">Buyer LLC <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${h.sans};">(assignee)</span></div>
        <input id="ws-pc-buyer-llc" type="text" value="${Je(x)}" placeholder="Buyer's entity / LLC name" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${k}">Assignment Price</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-price" type="number" min="0" step="0.01" value="${u}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${k}">Buyer Earnest Money</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-buyer-emd" type="number" min="0" step="0.01" value="${b}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${k}">Assignment Fee</div>
        <div style="${M}">
          <span style="color: ${n.ash}; font-size: 13px;">$</span>
          <input id="ws-pc-assignment-fee" type="number" min="0" step="0.01" value="${_}" style="${E}" />
        </div>
      </div>
      <div style="${A}">
        <div style="${k}">Closing Office</div>
        <input id="ws-pc-closing-office" type="text" value="${Je(g)}" placeholder="Title company" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${k}">Closing Date</div>
        <input id="ws-pc-closing-date" type="date" value="${Je($)}" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${k}">Buyer EMD Due Date</div>
        <input id="ws-pc-emd-due-date" type="date" value="${Je(f)}" style="${C}" />
      </div>
      <div style="${A}">
        <div style="${k}">Lender Source <span style="color: ${n.coolGray}; text-transform: none; letter-spacing: 0; font-family: ${h.sans};">(optional)</span></div>
        <input id="ws-pc-lender-source" type="text" placeholder="e.g. ABC Hard Money LLC" style="${C}" />
      </div>
    </div>
    <div style="
      font-size: 11px;
      color: ${n.coolGray};
      margin: 0 0 14px;
      line-height: 1.4;
    ">Assignment Fee = Assignment Price \u2212 Original Purchase ($${y.toLocaleString("en-US",{minimumFractionDigits:2})}), auto-recalculated on Price edit. Type a value to override.</div>

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
        border-radius: ${v.sm};
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
        border-radius: ${v.sm};
        cursor: pointer;
      ">Open Contract</button>
    </div>
  `,S.appendChild(T),document.body.appendChild(S);let O=T.querySelector("#ws-pc-assignment-price"),P=T.querySelector("#ws-pc-assignment-fee"),Z=T.querySelector("#ws-pc-buyer-emd");$e(O),$e(P),$e(Z),Jm(T);let D=!1;P?.addEventListener("input",()=>{D=!0});let V=()=>{if(D)return;let ee=he(O?.value);P&&Hs(P,Math.max(0,ee-y))};O?.addEventListener("input",V);let Y=()=>S.remove();S.addEventListener("click",ee=>{ee.target===S&&Y()}),T.querySelector("#ws-pc-cancel")?.addEventListener("click",Y);let B=T.querySelector("#ws-pc-submit"),U=T.querySelector("#ws-pc-error");B?.addEventListener("click",async()=>{if(!B)return;U&&(U.textContent="");let ee=(T.querySelector("#ws-pc-seller-name")?.value||"").trim(),Ee=he(O?.value),Oe=he(Z?.value),Pe=he(P?.value),Ro=(T.querySelector("#ws-pc-closing-office")?.value||"").trim(),No=(T.querySelector("#ws-pc-buyer-llc")?.value||"").trim(),jt=(T.querySelector("#ws-pc-closing-date")?.value||"").trim(),ve=(T.querySelector("#ws-pc-emd-due-date")?.value||"").trim(),Gr=(T.querySelector("#ws-pc-lender-source")?.value||"").trim();if(!jt){U&&(U.textContent="Closing Date is required.");return}B.disabled=!0,B.textContent="Opening\u2026";try{let ge={};ee!==p&&(ge.sellerName=ee),Ee!==u&&(ge.assignmentPrice=Ee),Oe!==b&&(ge.buyerEMD=Oe),Pe!==_&&(ge.assignmentFee=Pe),Ro!==g&&(ge.closingOffice=Ro),No!==x&&(ge.buyerCompanyName=No);let Ra=jt!==$||ve!==f||Gr!==w,Na=Object.keys(ge).length>0||Ra,Fa=a;Na?(m.info("[prepare-contract] AA modal submit, re-staging with overrides:",ge),B.textContent="Saving\u2026",Fa=await Lo({tenantId:e,contactId:t,template:o,oppId:r,closingDate:jt,buyerEarnestDueDate:ve,lenderSource:Gr,userId:s,overrides:Object.keys(ge).length>0?ge:void 0}),m.info("[prepare-contract] AA re-stage ok:",Fa),B.textContent="Opening\u2026"):m.info("[prepare-contract] AA modal submit \u2014 no edits, skipping re-stage");let ql=Fa?.debug?.propertyAddress||c,iu=ql?`${ql} - Assignment Agreement`:void 0;await Cl(e,t,o,iu),Y()}catch(ge){B.disabled=!1,B.textContent="Open Contract",U&&(U.textContent=ge.message||"Failed to prepare contract."),m.warn("[prepare-contract] AA submit failed:",ge)}})},Lo=async e=>{m.info(`[prepare-contract] staging \u2014 template "${e.template.name}" (${e.template.type})`);let t=await Cw({tenantId:e.tenantId,contactId:e.contactId,templateId:e.template.id,templateType:e.template.type,oppId:e.oppId,closingDate:e.closingDate,buyerEarnestDueDate:e.buyerEarnestDueDate,lenderSource:e.lenderSource,userId:e.userId,overrides:e.overrides,needSecondSeller:e.needSecondSeller});if(m.info(`[prepare-contract] stage response: ok=${t.ok}`,t),!t.ok)throw new Error(t.error||"Contract.Stage returned not ok");return t},Cl=async(e,t,o,r,a)=>{if(a&&!(a.email||"").trim()){ie(`Second seller ${a.contactName} has no email. Contracts are emailed for signing \u2014 add an email to their contact, then prepare the contract again.`,"error",9e3),m.warn(`[prepare-contract] aborting \u2014 second seller ${a.id} has no email`);return}let s=null;try{s=(await eb(t)).email||""}catch(c){m.warn("[prepare-contract] email pre-check fetch failed, proceeding:",c),s=null}if(s!==null&&!s.trim()){ie("This contact has no email. A contract is sent to the recipient for signing, so GHL needs an email to populate it. Add an email to the contact, then prepare the contract again.","error",9e3),m.warn(`[prepare-contract] aborting \u2014 contact ${t} has no email; not creating an empty proposal`);return}m.info(`[prepare-contract] creating proposal from template ${o.id} for contact ${t}`);let i=await Sw(e,o.id,t);m.info(`[prepare-contract] proposal created: ${i}`),m.info(`[prepare-contract] attaching contact ${t} as primary signer${a?` + second seller ${a.id} (${a.contactName})`:""}${r?`, renaming to "${r}"`:""}`);let l=await Mw(e,i,t,r,a);l.ok?m.info(`[prepare-contract] contact${a?"s":""} attached to proposal ${i}`):(m.warn(`[prepare-contract] attach failed (status=${l.status??"n/a"}): ${l.body?.slice(0,300)??"no body"}`),ie(`Proposal created but couldn't auto-attach contact (HTTP ${l.status??"?"}). You'll need to pick the recipient manually.`,"error",8e3),console.warn("[ws-crm-customizer] attach-recipient GHL response:",l.body));let d=Bw(o.name);d&&!(a&&l.ok)&&(m.info(`[prepare-contract] stashing post-redirect instructions for "${o.name}"`),Hw(i,d.title,d.bodyHtml)),Iw(e,i)},Ww=async e=>{let t=vw(e);if(!t){ie("Could not resolve contact context.","error");return}document.getElementById(zm)?.remove();let o=document.createElement("div");o.id=zm,o.style.cssText=`
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
    font-family: ${h.sans};
  `,o.innerHTML=`
    <div style="
      font-family: ${h.mono};
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${n.ash};
      padding: 8px 14px 6px;
    ">Loading templates\u2026</div>`,e.appendChild(o);let r=s=>{!o.contains(s.target)&&s.target!==e&&(o.remove(),document.removeEventListener("click",r,!0))};window.setTimeout(()=>document.addEventListener("click",r,!0),0);let a;try{a=await ww(t.tenantId)}catch(s){o.innerHTML=`
      <div style="padding: 12px 14px; color: ${n.crimson}; font-size: 12px;">
        Failed to load templates: ${ke(s.message)}
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
        <span style="flex: 1;">${ke(s.name)}</span>
      </div>`,i.addEventListener("mouseenter",()=>{i.style.background=n.slate}),i.addEventListener("mouseleave",()=>{i.style.background="transparent"}),i.addEventListener("click",async d=>{d.stopPropagation(),d.preventDefault(),m.info(`[prepare-contract] template picked: ${s.name} (type=${s.type})`),o.remove(),document.removeEventListener("click",r,!0);let c=H();try{if(s.type==="AA"){let p;if(t.oppId)p=t.oppId,m.info(`[prepare-contract] AA from MT opp page \u2014 using opp ${p} directly`);else{let $;try{$=await Tw(t.tenantId,t.contactId)}catch(f){ie(`Failed to load buyer's MT opps: ${f.message}`,"error",6e3),m.warn("[prepare-contract] AA fetch opps failed:",f);return}if($.length===0){ie("No open MT deal found for this buyer. Create an MT opp first.","error",6e3);return}if($.length===1)p=$[0].id,m.info(`[prepare-contract] auto-selected MT opp ${p} (only one)`);else{m.info(`[prepare-contract] showing MT opp picker (${$.length} opps)`);let f=await Km($,{perspective:"buyer",agreementLabel:"Assignment Agreement"});if(!f){m.info("[prepare-contract] MT opp picker cancelled");return}p=f,m.info(`[prepare-contract] picked MT opp ${p}`)}}let u=$=>{let f=$.getFullYear(),w=String($.getMonth()+1).padStart(2,"0"),S=String($.getDate()).padStart(2,"0");return`${f}-${w}-${S}`},b=$=>{let f=new Date;return f.setDate(f.getDate()+$),u(f)},_=b(45),y=b(7);ie("Reading contract data\u2026","info",2500);let g;try{g=await Lo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:p,closingDate:_,buyerEarnestDueDate:y,userId:c})}catch($){ie(`Failed to prepare contract: ${$.message}`,"error",6e3),m.warn("[prepare-contract] AA stage failed:",$);return}let x=t.contactId||g.contact_id||"";if(!x){ie("Could not resolve buyer contact for this opp.","error",6e3);return}Uw({tenantId:t.tenantId,contactId:x,template:s,oppId:p,staged:g,userId:c,defaultClosingDate:_,defaultEMDDueDate:y})}else if(s.type==="PA"){if(!t.contactId){ie("Purchase Agreements need to be started from the seller's contact page.","error",6e3);return}let p;try{p=await $w(t.tenantId,t.contactId)}catch(_){ie(`Failed to load ACQ opps: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA fetch opps failed:",_);return}if(p.length===0){ie("No open ACQ deal found for this contact. Create an ACQ opp first.","error",6e3);return}let u;if(p.length===1)u=p[0].id,m.info(`[prepare-contract] auto-selected ACQ opp ${u} (only one)`);else{m.info(`[prepare-contract] showing ACQ opp picker (${p.length} opps)`);let _=await Km(p,{perspective:"seller",agreementLabel:"Purchase Agreement"});if(!_){m.info("[prepare-contract] ACQ opp picker cancelled");return}u=_,m.info(`[prepare-contract] picked ACQ opp ${u}`)}ie("Reading contract data\u2026","info",2500);let b;try{b=await Lo({tenantId:t.tenantId,contactId:t.contactId,template:s,oppId:u,userId:c})}catch(_){ie(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] PA stage failed:",_);return}if(El(s.name)){let _=await Vm(t.tenantId,t.contactId,s,u,c,b);if(!_)return;b=_}jw({tenantId:t.tenantId,contactId:t.contactId,template:s,staged:b})}else{if(!t.contactId){ie("This template needs to be started from a contact page.","error",6e3);return}let p=null;if(El(s.name)){let u;try{u=await Lo({tenantId:t.tenantId,contactId:t.contactId,template:s,userId:c,needSecondSeller:!0})}catch(_){ie(`Failed to prepare contract: ${_.message}`,"error",6e3),m.warn("[prepare-contract] passthrough stage failed:",_);return}let b=await Vm(t.tenantId,t.contactId,s,void 0,c,u);if(!b)return;p=b.second_seller||null}ie(`Opening ${s.name}\u2026`,"info",2500);try{await Cl(t.tenantId,t.contactId,s,void 0,p)}catch(u){ie(`Failed to open contract: ${u.message}`,"error",6e3),m.warn("[prepare-contract] passthrough failed:",u)}}}catch(p){m.warn("[prepare-contract] picker click handler failed:",p),ie(`Unexpected error: ${p.message}`,"error",6e3)}}),o.appendChild(i)}},tb=()=>{let e=document.createElement("button");return e.id=xl,e.type="button",e.style.cssText=`${z} position: relative; order: 5;`,e.innerHTML=`
    <span style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.emerald};flex-shrink:0;"></span>
    <span>Prepare Contract</span>
  `,e.addEventListener("mouseenter",()=>{e.style.borderColor=n.emerald}),e.addEventListener("mouseleave",()=>{e.style.borderColor=n.steel}),e.addEventListener("click",t=>{t.stopPropagation(),Ww(e)}),e},Gw="ws-crm-contact-actions-bar",Kw=async()=>{let e=Qm();if(!e){document.getElementById(xl)?.remove();return}let t=null;try{t=await N(`#${Gw}`,{timeoutMs:$t+2e3})}catch{m.debug("[prepare-contract] actions bar not found within timeout");return}if(!t)return;let o=document.getElementById(xl);if(o){if(o.dataset.contactId===e.contactId)return;o.remove()}let r=tb();r.dataset.contactId=e.contactId,r.dataset.tenantId=e.tenantId,t.appendChild(r),m.debug(`[prepare-contract] mounted for contact ${e.contactId}`)},zt="ws-crm-prepare-contract-button-opp",Br=`${zt}-wrap`,Vw=/\/opportunities\/(?:detail\/)?([A-Za-z0-9]{16,})(?:[/?#]|$)/,Yw=/\/v2\/location\/([A-Za-z0-9]+)/,Jw=[".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading .description",".crm-opportunities-modal .ui-modal-heading .description",".hr-card.hr-modal.crm-opportunities-modal .ui-modal-heading",".crm-opportunities-modal .ui-modal-heading",".hr-card.hr-modal.crm-opportunities-modal .hr-card-header__main",".crm-opportunities-modal .hr-card-header__main"],$l=()=>{let e=window.location.pathname,t=e.match(Vw);if(!t)return null;let o=e.match(Yw);return o?{oppId:t[1],tenantId:o[1]}:null},Qw=async()=>{for(let e of Jw)try{let t=await N(e,{timeoutMs:2e3});if(t)return t}catch{}return null},Ea=!1,Hr=null,Tl=null,gl=null,fl,Dr=()=>{Hr?.disconnect(),Hr=null,Tl=null},Zw=e=>{if(Hr&&Tl===e)return;Dr();let t=document.querySelector(".hr-card.hr-modal.crm-opportunities-modal");t&&(Tl=e,Hr=new MutationObserver(()=>{let o=$l();if(!o||o.oppId!==e){Dr();return}let r=G();if(r!==null&&r!=="Marketing Tracker"){document.getElementById(zt)?.remove(),document.getElementById(Br)?.remove(),Dr();return}document.getElementById(zt)||ob()}),Hr.observe(t,{childList:!0,subtree:!0}))},Xw=()=>{gl||(gl=new MutationObserver(()=>{fl===void 0&&(fl=window.setTimeout(()=>{fl=void 0;let e=!!document.querySelector(".crm-opportunities-modal .ui-modal-heading .description"),t=!!document.getElementById(zt);e&&!t&&!Ea&&ob()},300))}),gl.observe(document.body,{childList:!0,subtree:!0}))},ob=async()=>{if(!Ea){Ea=!0;try{let e=$l();if(!e){document.getElementById(zt)?.remove(),document.getElementById(Br)?.remove(),Dr();return}let t=document.getElementById(zt);if(t&&t.dataset.oppId===e.oppId){let l=G();l!==null&&l!=="Marketing Tracker"&&(t.remove(),document.getElementById(Br)?.remove(),Dr());return}t&&(t.remove(),document.getElementById(Br)?.remove());let o=await Qw();if(!o){m.debug("[prepare-contract] opp mount target not found");return}let r=await se();if(r!=="Marketing Tracker"){m.debug(`[prepare-contract] opp mount gated off \u2014 pipeline="${r}" (expected Marketing Tracker)`);return}let a=$l();if(!a||a.oppId!==e.oppId)return;let s=tb();s.id=zt,s.dataset.oppId=e.oppId,s.dataset.tenantId=e.tenantId;let i=document.createElement("span");i.id=Br,i.style.cssText=`
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      vertical-align: middle;
      margin-left: 12px;
    `,o.classList.contains("description")&&(o.style.display="flex",o.style.alignItems="center",o.style.gap="16px",o.style.flexWrap="wrap"),i.appendChild(s),o.appendChild(i),m.debug(`[prepare-contract] mounted on MT opp ${e.oppId} (contactId deferred to click)`),Zw(e.oppId)}finally{Ea=!1}}},rb=()=>{zw(),Kw()};yw();function ke(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Je(e){return ke(e)}var e0="https://n8n.srv942822.hstgr.cloud/webhook/reinvest-os/acq/compute-offer",qt="ws-crm-compute-offer-button",Al="ws-crm-compute-offer-popover",pb="ws-crm-offer-modal",nb="ws-crm-contact-actions-bar",t0=[".central-panel","[class*='central-panel']"],ft=e=>typeof e=="number"?`$${Math.round(e).toLocaleString("en-US")}`:"-",Sl=e=>{if(typeof e!="number"||Math.round(e)===0)return"$0";let t=`$${Math.abs(Math.round(e)).toLocaleString("en-US")}`;return e<0?`\u2212${t}`:`+${t}`},o0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ab=e=>{if(!e)return"";let t=String(e).split("-");return t.length!==3?String(e):`${o0[Number(t[1])-1]||""} ${Number(t[2])}`.trim()},Q=(e,t,o)=>{let r=document.createElement(e);return t&&(r.style.cssText=t),o!=null&&(r.textContent=o),r},sb=()=>`width:100%;box-sizing:border-box;padding:7px 9px;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${h.sans};font-size:12px;outline:none;`,Ll=async e=>{let t={tenant_id:e.tenantId,mode:e.mode};e.propertyRecordId?t.property_record_id=e.propertyRecordId:e.contactId&&(t.contact_id=e.contactId),e.mode!=="get"&&(e.propertyCondition!=null&&(t.property_condition=e.propertyCondition),e.repairOverride!==void 0&&(t.repair_override=e.repairOverride));let o=await fetch(e0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"omit"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},Ao=()=>{document.getElementById(Al)?.remove(),document.removeEventListener("mousedown",mb,!0)};function mb(e){let t=document.getElementById(Al),o=document.getElementById(qt),r=e.target;t&&!t.contains(r)&&o&&!o.contains(r)&&Ao()}var bb=(e,t)=>{Ao();let o=e.getBoundingClientRect(),r=document.createElement("div");r.id=Al;let a=Math.max(8,Math.min(o.left,window.innerWidth-348));r.style.cssText=`position:fixed;top:${o.bottom+6}px;left:${a}px;z-index:1000002;min-width:240px;max-width:340px;padding:11px 13px;border-radius:${v.md};background:${n.graphite};border:1px solid ${n.steel};box-shadow:0 14px 36px rgba(0,0,0,0.55);font-family:${h.sans};color:${n.bone};font-size:13px;line-height:1.35;`,t(r),document.body.appendChild(r),setTimeout(()=>document.addEventListener("mousedown",mb,!0),0)},Ta=(e,t)=>{bb(e,o=>{o.style.borderColor="rgba(212,63,74,0.55)",o.appendChild(Q("div",`font-weight:600;margin-bottom:5px;color:${n.crimson};`,"Couldn't open worksheet")),o.appendChild(Q("div",`color:${n.bone};font-size:12px;`,t))})},r0=(e,t,o)=>{bb(e,r=>{r.appendChild(Q("div",`font-weight:600;margin-bottom:7px;color:${n.bone};font-size:12px;`,"This seller has multiple properties. Which one?")),t.forEach(a=>{let s=Q("button",`display:block;width:100%;text-align:left;padding:8px 10px;margin:4px 0;background:${n.slate};color:${n.bone};border:1px solid ${n.steel};border-radius:${v.sm};font-family:${h.sans};font-size:12px;cursor:pointer;transition:border-color 0.12s ease;`,a.address||a.property_record_id);s.type="button",s.addEventListener("mouseenter",()=>s.style.borderColor=n.blue),s.addEventListener("mouseleave",()=>s.style.borderColor=n.steel),s.addEventListener("click",()=>{Ao(),o(a.property_record_id)}),r.appendChild(s)})})},Sa=()=>{document.getElementById(pb)?.remove(),document.removeEventListener("keydown",ub,!0)};function ub(e){e.key==="Escape"&&Sa()}var ib=(e,t,o)=>{Sa(),Ao();let r=o,a=!1,s="",i=document.createElement("div");i.id=pb,i.style.cssText=`position:fixed;inset:0;z-index:1000003;display:flex;align-items:flex-start;justify-content:center;padding-top:8vh;background:rgba(8,10,14,0.62);backdrop-filter:blur(2px);font-family:${h.sans};`,i.addEventListener("mousedown",p=>{p.target===i&&Sa()});let l=Q("div",`width:460px;max-width:calc(100vw - 32px);max-height:84vh;overflow:auto;background:${n.graphite};border:1px solid ${n.steel};border-radius:${v.md};box-shadow:0 24px 64px rgba(0,0,0,0.6);color:${n.bone};`);i.appendChild(l);let d=(p,u,b)=>{a||(a=!0,s="",c(),Ll({tenantId:e,propertyRecordId:t,mode:p,propertyCondition:u,repairOverride:b}).then(_=>{_&&_.ok?r={..._,current_offer:_.current_offer??r.current_offer,current_offer_date:_.current_offer_date??r.current_offer_date}:s=_&&_.error||"Request failed."}).catch(_=>{m.error("[compute-offer] worksheet request failed:",_),s="Request failed. Try again."}).finally(()=>{a=!1,c()}))};function c(){let p=r,u=!!p.has_comps;l.innerHTML="";let b=Q("div",`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 12px;border-bottom:1px solid ${n.steel};`),_=Q("div","");_.appendChild(Q("div",`font-weight:700;font-size:15px;color:${n.bone};`,"Offer Worksheet")),_.appendChild(Q("div",`font-size:12px;color:${n.ash};margin-top:2px;`,p.address||"-"));let y=Q("button",`background:transparent;border:none;color:${n.ash};font-size:22px;line-height:1;cursor:pointer;padding:0 2px;`,"\xD7");y.type="button",y.addEventListener("click",Sa),b.append(_,y),l.appendChild(b);let g=Q("div","padding:14px 18px 18px;");l.appendChild(g);let x=Q("select",sb());(p.rehab_levels||[]).forEach(M=>{let O=document.createElement("option");O.value=M.key,O.textContent=M.label,M.key===(p.tier||p.property_condition)&&(O.selected=!0),x.appendChild(O)}),x.disabled=a,x.addEventListener("change",()=>d("recompute",x.value,$.value.trim()));let $=Q("input",sb());$.type="number",$.placeholder="uses the level",$.value=p.repair_override!=null?String(p.repair_override):"",$.disabled=a,$.addEventListener("keydown",M=>{M.key==="Enter"&&$.blur()}),$.addEventListener("change",()=>d("recompute",x.value,$.value.trim()));let f=Q("div","display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;");f.appendChild(Q("div",`font-size:12px;color:${u?n.bone:n.amber};`,u?`Investor comps: $${p.comp_price_per_sqft}/sqft \xB7 ${p.comp_count} comps${p.comp_pull_at?` \xB7 pulled ${ab(p.comp_pull_at)}`:""}`:"No comps pulled yet."));let w=Q("button",`flex-shrink:0;padding:6px 12px;border-radius:${v.sm};border:1px solid ${n.blue};background:${u?"transparent":n.blue};color:${u?n.blue:"#fff"};font-family:${h.sans};font-size:12px;font-weight:600;cursor:${a?"default":"pointer"};`,a?"Working\u2026":u?"Re-pull Comps":"Pull Comps");w.type="button",w.disabled=a,w.addEventListener("click",()=>d("pull",x.value,$.value.trim())),f.append(w),g.appendChild(f),p.low_confidence&&u&&g.appendChild(Q("div",`font-size:11px;color:${n.amber};margin:-6px 0 10px;`,`\u26A0 Low confidence: only ${p.comp_count??0} comps in window.`));let S=p.current_offer!=null;g.appendChild(Q("div",`font-size:12px;margin:0 0 12px;padding:7px 10px;border-radius:${v.sm};background:${n.slate};border:1px solid ${n.steel};color:${S?n.bone:n.ash};`,S?`Last offer made: ${ft(p.current_offer)}${p.current_offer_date?` \xB7 ${ab(p.current_offer_date)}`:""}`:"No offer made yet."));let T=Q("div","display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;"),k=Q("div","");k.appendChild(Q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Rehab Level")),k.appendChild(x);let C=Q("div","");C.appendChild(Q("label",`display:block;font-size:11px;color:${n.ash};margin-bottom:4px;`,"Repair Override ($)")),C.appendChild($),T.append(k,C),g.appendChild(T);let E=Q("div",`border-top:1px solid ${n.steel};padding-top:12px;`),L=(M,O,P)=>{let Z=Q("div",`display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:4px 0;${P?.strong?"font-weight:700;":""}`),D=Q("div","");D.appendChild(Q("div",`font-size:${P?.strong?"13":"12"}px;color:${n.bone};`,M)),P?.sub&&D.appendChild(Q("div",`font-size:10px;color:${n.ash};font-weight:400;margin-top:1px;`,P.sub));let V=Q("div",`font-size:${P?.strong?"15":"12"}px;color:${P?.color||n.bone};white-space:nowrap;`,O);Z.append(D,V),E.appendChild(Z)};if(u&&p.imv!=null){L("Investor Market Value (IMV)",ft(p.imv)),p.arv!=null&&L("After Repair Value (ARV)",ft(p.arv),{color:n.ash});let M=p.repair_adjustment??0,O=-M,P=p.repair_override?"Repair override":p.property_condition_label||"Repairs";M===0?L(`Repairs (${P})`,"Included",{color:n.ash,sub:`${ft(p.repair_total)} in repairs included at IMV`}):L(`Repairs (${P})`,Sl(O),{color:O<0?n.crimson:n.emerald,sub:`${ft(p.repair_total)} total, ${ft(p.baseline_repairs)} included at IMV`}),L("Min. Profit Target",Sl(-(p.profit_target??0)),{color:n.ash}),L("Maximum Cash Offer (MAO)",ft(p.mao),{strong:!0,color:n.blue}),L("Target Profit",Sl(-(p.ico_delta??0)),{color:n.ash}),L("Initial Cash Offer (ICO)",ft(p.ico),{strong:!0,color:n.blue})}else E.appendChild(Q("div",`font-size:12px;color:${n.ash};padding:6px 0;line-height:1.45;`,"Pull comps to compute the offer. You can set the rehab level and override first."));g.appendChild(E);let A=Q("div",`margin-top:12px;font-size:11px;min-height:14px;color:${s?n.crimson:n.ash};`);A.textContent=a?"Saving\u2026":s||(u?"Saved to the Property.":""),g.appendChild(A)}c(),document.body.appendChild(i),document.addEventListener("keydown",ub,!0)},lb=(e,t)=>{let o=document.createElement("button");o.type="button",o.id=qt,o.dataset.contactId=e,o.style.cssText=`
    display:inline-flex;align-items:center;gap:8px;padding:6px 12px;
    background:transparent;color:${n.bone};border:1px solid ${n.steel};
    border-radius:${v.sm};font-family:${h.sans};font-size:12px;
    font-weight:500;line-height:1.2;cursor:pointer;user-select:none;
    transition:border-color 0.15s ease,background 0.15s ease;flex-shrink:0;order:3;
  `,o.innerHTML=`
    <span class="ws-co-dot" style="display:inline-flex;width:8px;height:8px;border-radius:50%;background:${n.blue};flex-shrink:0;"></span>
    <span class="ws-co-label">Offer Worksheet</span>
  `,o.addEventListener("mouseenter",()=>{o.disabled||(o.style.borderColor=n.blue)}),o.addEventListener("mouseleave",()=>{o.style.borderColor=n.steel});let r=()=>o.querySelector(".ws-co-label"),a=i=>{o.disabled=i,o.style.cursor=i?"default":"pointer";let l=r();l&&(l.textContent=i?"Opening\u2026":"Offer Worksheet")},s=i=>{if(i.needs_property_selection&&i.properties&&i.properties.length){r0(o,i.properties,l=>{a(!0),Ll({tenantId:t,propertyRecordId:l,mode:"get"}).then(d=>{d.ok&&d.property_record_id?ib(t,d.property_record_id,d):Ta(o,d.error||"Couldn't load that property.")}).catch(d=>{m.error("[compute-offer] get failed:",d),Ta(o,"Request failed. Try again.")}).finally(()=>a(!1))});return}i.ok&&i.property_record_id?ib(t,i.property_record_id,i):Ta(o,i.error||"No property linked to this contact.")};return o.addEventListener("click",async()=>{if(!o.disabled){a(!0);try{s(await Ll({tenantId:t,contactId:e,mode:"get"}))}catch(i){m.error("[compute-offer] webhook failed:",i),Ta(o,"Request failed. Try again.")}finally{a(!1)}}}),o},n0=async()=>{for(let e of t0)try{let t=await N(e,{timeoutMs:3e3});if(t)return t}catch{}return null},db=async(e,t)=>{let o=t.querySelector(`#${nb}`);if(!o)try{o=await N(`#${nb}`,{timeoutMs:3e3,root:t})}catch{o=null}return o?(e.style.order="3",o.appendChild(e),!0):!1},cb=()=>{let e=document.querySelectorAll(`#${qt}`);for(let t=1;t<e.length;t++)e[t].remove()},a0=async()=>{let e=W();if(!e||!e.locationId||e.source!=="url"){document.getElementById(qt)?.remove(),Ao();return}let t=e.locationId,o=document.getElementById(qt);if(o&&o.dataset.contactId===e.contactId)return;o&&o.remove(),Ao();let r="seller";try{r=Ue(await je(e.contactId,t))}catch(l){m.warn("[compute-offer] contact-type fetch threw - defaulting seller:",l)}if(r!=="seller"){m.debug(`[compute-offer] gated off - kind=${r}`),document.getElementById(qt)?.remove();return}let a=await n0();if(!a){m.warn("[compute-offer] no central panel found");return}let s=W();if(!s||s.contactId!==e.contactId)return;let i=lb(e.contactId,t);if(!await db(i,a)){m.warn("[compute-offer] actions bar not found after waiting");return}cb(),m.debug(`[compute-offer] mounted for ${e.contactId}`),Ca?.disconnect(),Ca=new MutationObserver(()=>{if(W()?.contactId!==e.contactId){Ca?.disconnect();return}if(!document.getElementById(qt)){let l=lb(e.contactId,t);db(l,a).then(()=>cb())}}),Ca.observe(a,{childList:!0})},Ca=null,zr=null,hb=()=>{let e=W()?.contactId??null;if(zr&&zr.id===e)return;let t=a0().finally(()=>{zr?.promise===t&&(zr=null)});zr={id:e,promise:t}};var Pa="reos-theme-stylesheet",Rb="reos-theme-fonts",Bo=!1,s0=()=>{let e=document.getElementById(Rb);e&&e.remove()},i0=`

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

`,l0=[{selector:".hr-input__input-el, .hr-input__textarea-el, [class*='hr-input'] input, [class*='hr-input'] textarea",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-data-table-wrapper, .hr-data-table-wrapper-responsive, .hr-data-table-wrapper-header, .hr-data-table-wrapper-footer, .hr-data-table, .hr-data-table__body, .hr-table-freezer-wrapper, [class*='hr-data-table-wrapper'], [class*='hr-table-freezer']",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-data-table-tr, tr.n-data-table-tr",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".back-to-sites, .n-tabs-nav, .n-tabs-nav-scroll-content, .n-tabs-nav-scroll-wrapper, .n-tabs-wrapper, .n-tabs-tab-wrapper, .n-tabs-tab-pad",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:"#setup-guide-button, .setup-guide-button-container",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".default-avatar, .n-avatar.default-avatar",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:"#steps-sidebar, .steps-sidebar",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".search-box",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".my-table.tabulator, .tabulator, .tabulator-tableholder, .tabulator-table, .tabulator-header, .tabulator-headers, .tabulator-footer, .tabulator-row, .table-container, .cardWrapper, .quick-filter-bar, #skeleton-loader, .skeleton-loader",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".tabulator-col, .tabulator-frozen, .tabulator-frozen-left, .tabulator-frozen-right",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".mb-2\\.5.bg-white, div.bg-white, .bg-white.px-3, .mx-auto > .bg-white",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-data-table__header, .hr-data-table__cell-header, thead.hr-data-table__header",styles:{"background-color":"#1A1F28",color:"#EDEEF0"}},{selector:".hr-wrapper-container, .platform-ui__highrise, .full-screen.platform-ui__highrise, [class*='platform-ui__highrise'], .hl_topbar-tabs, .hl_wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-collapse-item__header, .hr-collapse-item__header-main, .hr-collapse-item__title",styles:{color:"#EDEEF0","background-color":"#12161D"}},{selector:".hr-collapse-item__content, .hr-collapse-item__content-inner, .hr-collapse-item__content-wrap",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs, .hr-tabs-nav, .hr-tabs-nav-scroll-content, .hr-tabs-content, .hr-tabs-pane, .hr-tabs-rail, .hr-tabs-tab-wrapper",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".hr-tabs-capsule",styles:{"background-color":"transparent",background:"transparent",border:"none"}},{selector:".hr-avatar:not(.default-avatar), .hr-avatar:not(.default-avatar) .hr-avatar__text, .hr-avatar:not(.default-avatar) .hr-avatar__text p, .hr-avatar:not(.default-avatar) p, .hr-avatar:not(.default-avatar) span, .hr-avatar:not(.default-avatar) div, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar), [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) span, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) p, [class*='avatar']:not([class*='dropdown']):not([class*='option-avatar']):not([class*='option']):not([class*='select']):not(.default-avatar) div",styles:{color:"#0A0D12","-webkit-text-fill-color":"#0A0D12","font-weight":"600"}},{selector:".default-avatar, .default-avatar *",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0",stroke:"#EDEEF0","font-weight":"600"}},{selector:".hr-button--tertiary",styles:{"background-color":"#1A1F28",color:"#0FB57E"}},{selector:".hr-text:not([role='button']):not(.cursor-pointer)",styles:{color:"#EDEEF0"}},{selector:"[class*='field-value'], [class*='field-display'], [class*='empty-value'], [class*='field-empty'], [class*='value-display'], [class*='display-value']",styles:{color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hr-select__value, .hr-select__display, .hr-select-trigger, .hr-select-trigger__value, .hr-base-select__value, .hr-base-select__display, [class*='select__value'], [class*='select__display'], [class*='select-trigger']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".hr-select, .hr-select__input, .hr-select__inner, .hr-select-trigger, .hr-base-select, .hr-base-select__inner, .el-select, .el-select__wrapper, .el-input__wrapper, .el-input__inner, [role='combobox'], [aria-haspopup='listbox']",styles:{"background-color":"#1A1F28","border-color":"#252C36"}},{selector:"input[type='date'], input[type='datetime-local'], input[type='time'], input[type='month'], input[type='week'], .hr-date-picker, .hr-date-input, .hr-datepicker, .hr-time-picker, [class*='date-picker'], [class*='datepicker'], [class*='date-input'], [class*='time-picker'], [class*='time-input']",styles:{"background-color":"#1A1F28","border-color":"#252C36",color:"#EDEEF0"}},{selector:"[class*='F7F9FD'], [class*='F7F9FB'], [class*='F9FAFB'], [class*='eff4ff'], [class*='EFF4FF'], [class*='ECEEF2'], [class*='eceef2']",styles:{"background-color":"#12161D"}},{selector:"[style*='background-color: white'], [style*='background-color:white'], [style*='background-color: #fff'], [style*='background-color:#fff'], [style*='background-color: #FFF'], [style*='background-color:#FFF'], [style*='background-color: #ffffff'], [style*='background-color:#ffffff'], [style*='background-color: #FFFFFF'], [style*='background-color:#FFFFFF'], [style*='background-color: rgb(255, 255, 255)'], [style*='background-color:rgb(255, 255, 255)'], [style*='background-color: rgb(255,255,255)'], [style*='background-color:rgb(255,255,255)']",styles:{"background-color":"#12161D"}},{selector:".chart-container.hl-card, [class*='chart-container'][class*='hl-card'], .dashboard-widget-type-custom .hl-card, .dashboard-widget-module-custom .hl-card",styles:{"background-color":"#12161D"}},{selector:".bg-gray-50, .bg-white, .bg-gray-100",styles:{"background-color":"#12161D",color:"#EDEEF0"}},{selector:".n-base-select-menu, .n-popselect-menu, .n-popover, .n-dropdown, .n-dropdown-menu, .hr-base-select-menu, .hr-popselect-menu, .hr-popover, .hr-dropdown, .hr-dropdown-menu",styles:{"background-color":"#12161D",color:"#EDEEF0","border-color":"#252C36","--n-option-color":"transparent","--n-option-color-hover":"#1A1F28","--n-option-color-active":"rgba(15, 181, 126, 0.12)","--n-option-color-active-hover":"rgba(15, 181, 126, 0.12)","--n-option-text-color":"#EDEEF0","--n-option-text-color-hover":"#EDEEF0","--n-option-text-color-active":"#0FB57E","--n-option-text-color-disabled":"#9098A3","--n-color":"transparent","--n-color-hover":"#1A1F28","--n-color-active":"rgba(15, 181, 126, 0.12)","--n-text-color":"#EDEEF0","--n-text-color-hover":"#EDEEF0","--n-text-color-active":"#0FB57E","--n-text-color-disabled":"#9098A3"}},{selector:".n-dropdown-option--disabled, .n-dropdown-option--disabled .n-dropdown-option-body, .n-dropdown-option--disabled .n-dropdown-option-body__label, .n-dropdown-option--disabled .n-dropdown-option-body__prefix, .n-dropdown-option--disabled .n-dropdown-option-body__suffix, .n-dropdown-option[aria-disabled='true'], .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__label, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__prefix, .n-dropdown-option[aria-disabled='true'] .n-dropdown-option-body__suffix, .n-base-select-option--disabled, .n-base-select-option--disabled *, .n-base-select-option[aria-disabled='true'], .n-base-select-option[aria-disabled='true'] *, .hr-dropdown-option--disabled, .hr-dropdown-option--disabled *, .hr-dropdown-option[aria-disabled='true'], .hr-dropdown-option[aria-disabled='true'] *, .hr-base-select-option--disabled, .hr-base-select-option--disabled *, .hr-base-select-option[aria-disabled='true'], .hr-base-select-option[aria-disabled='true'] *",styles:{"background-color":"transparent",color:"#9098A3","-webkit-text-fill-color":"#9098A3"}},{selector:".hl-card-header [role='heading'], .hl-card-header p[role='heading'], [class*='hl-card-header'] [role='heading']",styles:{color:"#EDEEF0","-webkit-text-fill-color":"#EDEEF0"}},{selector:".n-button:not(.n-button--primary-type):not(.n-button--error-type):not(.n-button--warning-type):not(.n-button--success-type):not(.n-button--info-type)",styles:{"background-color":"#1A1F28"}},{selector:".hl_header--controls .platform-ui__highrise, .hl_header--controls .hr-wrapper-container, a.hl_header--avatar, .hl_header--avatar.dropdown-toggle",styles:{"background-color":"transparent",background:"transparent"}}],d0=e=>{if(!e||e[0]!=="#")return e;let t=e.slice(1);if(t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6&&t.length!==8)return e;let o=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);if(isNaN(o)||isNaN(r)||isNaN(a))return e;if(t.length===8){let s=parseInt(t.slice(6,8),16)/255;return`rgba(${o}, ${r}, ${a}, ${s})`}return`rgb(${o}, ${r}, ${a})`},c0=new Set(["color","background-color","background","border-color","border-top-color","border-right-color","border-bottom-color","border-left-color","fill","stroke","-webkit-text-fill-color","caret-color","outline-color"]),p0=["#inventory-table","#inventory","[id^='collections-']","[id^='products-']","[id^='reviews-']",".sites-container","[data-testid='wordpress-app-dashboard']","[data-testid$='-app-dashboard']","[data-testid$='-dashboard']:not([data-testid*='widget']):not([data-testid*='card'])","#wordpress-management-app","[id$='-management-app']"],Mo=new WeakSet,m0=8,_b=0,yb=new WeakSet,vb=new WeakSet,gb=new WeakSet,Hl=(e,t)=>{let o=[];return e.forEach(r=>{t.has(r)||o.push(r)}),o},b0="#F9FAFB",Nb=e=>e.tagName!=="IFRAME"||!e.src.includes("ghl-isv-app-prod.leadconnectorhq.com")?!1:(e.style.getPropertyValue("background-color")!=="rgb(249, 250, 251)"&&e.style.setProperty("background-color",b0,"important"),!0),fb=(e,t=!1)=>{try{if(!document.body)return;let o=e??document.body.querySelectorAll("*");(t?Hl(o,yb):o).forEach(a=>{try{if(a.classList&&(a.classList.contains("hr-drawer-container")||a.classList.contains("hr-detached-container"))){(a.getAttribute("style")||"").includes("background")&&(a.style.removeProperty("background-color"),a.style.removeProperty("background-image"));return}if(Nb(a)){Mo.add(a);return}if(Mo.has(a)&&a.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']")||a.closest(".hl_header, header.hl_header, header.app-header")||a.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=a.tagName;if(s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||s==="SCRIPT"||s==="STYLE"||s==="SVG"||s==="PATH"||s==="IMG")return;let l=window.getComputedStyle(a).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let d=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(!d)return;let c=+d[1],p=+d[2],u=+d[3];if((d[4]!==void 0?+d[4]:1)<.5||c<230||p<230||u<230)return;let _=a.style.getPropertyValue("background-color");if(_==="rgb(18, 22, 29)"){Mo.add(a);return}if(a.closest(".hr-button")&&!(a.classList&&a.classList.contains("hr-button"))){_!=="transparent"&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background-image","none","important")),Mo.add(a);return}a.style.setProperty("background-color","rgb(18, 22, 29)","important"),a.style.setProperty("color","rgb(237, 238, 240)","important"),Mo.add(a)}catch{}}),t||o.forEach(a=>{Mo.has(a)||yb.add(a)})}catch{}},La=new WeakSet,Io=()=>{document.querySelectorAll(p0.join(", ")).forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.querySelectorAll("*");[t,...Array.from(o)].forEach(r=>{if(r.classList&&(r.classList.contains("hr-drawer-container")||r.classList.contains("hr-detached-container"))){(r.getAttribute("style")||"").includes("background")&&(r.style.removeProperty("background-color"),r.style.removeProperty("background-image"));return}if(Nb(r)){La.add(r);return}if(La.has(r)&&r.style.getPropertyValue("background-color")==="rgb(18, 22, 29)"||r.id?.startsWith("ws-crm-")||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.tagName==="SELECT"||r.tagName==="SCRIPT"||r.tagName==="STYLE"||r.tagName==="SVG"||r.tagName==="PATH"||r.closest(".hr-avatar, .avatar, [id^='avatar-']"))return;let s=window.getComputedStyle(r).backgroundColor;if(!s||s==="rgba(0, 0, 0, 0)"||s==="transparent")return;let i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=+i[1],d=+i[2],c=+i[3];if(!(l<230||d<230||c<230)){if(r.closest(".hr-button")&&!(r.classList&&r.classList.contains("hr-button"))){r.style.getPropertyValue("background-color")!=="transparent"&&(r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background-image","none","important")),La.add(r);return}r.style.setProperty("background-color","#12161D","important"),r.style.setProperty("color","#EDEEF0","important"),La.add(r)}})})},xb=()=>{document.querySelectorAll(".hr-button .hr-button__content, .hr-button .hr-icon-inner, .hr-button .hr-text, .hr-button .hr-button__label").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.classList&&t.classList.contains("hr-button"))return;let o=t.style.getPropertyValue("background-color");o&&o!=="transparent"&&o!=="rgba(0, 0, 0, 0)"&&(t.style.setProperty("background-color","transparent","important"),t.style.setProperty("background-image","none","important"))})},wb=()=>{document.querySelectorAll(".hl_header--controls .bg-primary-50 .bg-primary-600").forEach(e=>{e.style.setProperty("background-color","#252C36","important"),e.style.setProperty("background-image","none","important"),e.style.setProperty("color","#EDEEF0","important")})},kb=()=>{document.querySelectorAll(".hr-header-lite-left, .hr-header-lite-right, .hr-header-lite-content, .hr-header-lite-icon-item, [class*='hr-header-lite']:not([class*='container']):not([class*='wrapper']), .hr-breadcrumb, .hr-breadcrumb-item, .hr-breadcrumb-item__link, .hr-breadcrumb-item__separator").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color: rgb(26, 31, 40)")||o.includes("background-color: #1A1F28")||o.includes("background-color: #1a1f28"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"),t.style.removeProperty("border-style"),t.style.removeProperty("border-width"),t.style.removeProperty("border-radius"))})},Aa=()=>{document.querySelectorAll(".hr-header-lite-container-v2, [id^='hr-header-lite-v-']").forEach(t=>{let o=t.parentElement,r=0;for(;o&&r<6&&o!==document.body;){if(r+=1,o.id?.startsWith("ws-crm-")||o.classList.contains("hl_header")||o.classList.contains("app-header")||o.tagName==="MAIN"||o.tagName==="BODY")return;let i=window.getComputedStyle(o).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);if(i){let l=+i[1],d=+i[2],c=+i[3];(i[4]!==void 0?+i[4]:1)>=.5&&l>=180&&d>=180&&c>=180&&l+d+c>=600&&o.style.getPropertyValue("background-color")!=="rgb(18, 22, 29)"&&(o.style.setProperty("background-color","rgb(18, 22, 29)","important"),o.style.setProperty("color","rgb(237, 238, 240)","important"))}o=o.parentElement}})},Eb=()=>{let e="rgb(144, 152, 163)";document.querySelectorAll(".primary-property-name, .primary-property-name *, .folder-name, .folder-name *, .hr-form-item-label__asterisk, span.hr-form-item-label__asterisk").forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']"))return;(o.getAttribute("style")||"").includes(e)&&(o.style.removeProperty("color"),o.style.removeProperty("-webkit-text-fill-color"))})},Oo=()=>{if(!Bo)for(let e of l0){let t;try{t=document.querySelectorAll(e.selector)}catch{continue}t.forEach(o=>{for(let[r,a]of Object.entries(e.styles)){let s=o.style.getPropertyPriority(r),i=o.style.getPropertyValue(r),l=c0.has(r)?d0(a):a;s==="important"&&i===l||o.style.setProperty(r,a,"important")}})}},Ba="#1A1F28",u0=26,h0=31,_0=40,$b=new Set,Tb=new Set,Ma=e=>{(e??document.body.querySelectorAll("*")).forEach(o=>{if(o.id?.startsWith("ws-crm-")||o.closest("[id^='ws-crm-']")||o.children.length>0||(o.textContent||"").trim()!=="--")return;let a=o.getBoundingClientRect();if(a.width===0||a.height===0||a.width>800)return;o.style.setProperty("display","none","important");let s=o.className?.toString()||"<no class>";!Tb.has(s)&&s!=="<no class>"&&(Tb.add(s),m.debug(`Hid empty "--" leaf: "${s}"`))})},y0=["M3 6","M5 6","M2 6","M6 6","M9 3h6","M16 6v","M19 6v","M5 6V","M16.5 4","48.816","2.991","14.74 9","9.26 9","2.244","M19 4h-","M19 7l-"],v0=["trash","Trash","TRASH","delete","Delete","DELETE"],g0=()=>{document.querySelectorAll("button.hr-button, button.n-button, button.icon-only, .hr-button.icon-only, .n-button.icon-only").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']")||t.getAttribute("data-reos-trash")==="true")return;let o=t.querySelector("svg");if(!o)return;let r=!1,a=(o.getAttribute("class")||"")+" "+(o.getAttribute("data-icon")||"");if(v0.some(s=>a.includes(s))&&(r=!0),r||o.querySelectorAll("path").forEach(i=>{if(r)return;let l=i.getAttribute("d")||"";y0.some(d=>l.includes(d))&&(r=!0)}),!r){let s=(t.id||"").toLowerCase(),i=(t.getAttribute("aria-label")||"").toLowerCase(),l=(t.getAttribute("title")||"").toLowerCase();(s.includes("delete")||s.includes("remove")||s.includes("trash")||i.includes("delete")||i.includes("remove")||i.includes("trash")||l.includes("delete")||l.includes("remove")||l.includes("trash"))&&(r=!0)}r&&t.setAttribute("data-reos-trash","true")})},f0=new Set(["Delete Reminder","Delete","Remove","Trash","Edit","Copy","Duplicate","Add another reminder","Add","Close","Dismiss"]),x0=()=>{document.querySelectorAll(".hr-tooltip, .hr-popover-shared, [role='tooltip']").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=(t.textContent||"").trim();o.length===0||o.length>40||f0.has(o)&&t.style.display!=="none"&&(t.style.setProperty("display","none","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("pointer-events","none","important"))})},Cb=new Set,Ml=new WeakSet,w0=(e,t=!1)=>{let o=e??document.body.querySelectorAll("*");(t?Hl(o,vb):o).forEach(a=>{if(Ml.has(a)&&a.style.getPropertyValue("color")==="rgb(237, 238, 240)"||a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=(a.className?.toString()||"").toLowerCase();if(s.includes("ai-button")||s.includes("ask-ai")||s.includes("bg-clip-text")||s.includes("text-transparent")||a.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let i=a.tagName.toLowerCase();if(i==="svg"||i==="path"||i==="circle"||i==="rect"||i==="polygon"||i==="polyline"||i==="line"||i==="g")return;let l=!1;for(let y of Array.from(a.childNodes))if(y.nodeType===Node.TEXT_NODE&&(y.textContent||"").trim()){l=!0;break}if(!l)return;let d=Array.from(a.children);if(d.length>0&&d.every(y=>{let g=y.tagName.toLowerCase();return g==="svg"||g==="img"})&&!l)return;let u=window.getComputedStyle(a).color;if(!(u==="rgb(255, 255, 255)"||u==="rgba(255, 255, 255, 1)"||u==="#ffffff"||u==="white"))return;a.style.setProperty("color","#EDEEF0","important"),a.style.setProperty("-webkit-text-fill-color","#EDEEF0","important"),Ml.add(a);let _=a.className?.toString()||"<no class>";!Cb.has(_)&&_!=="<no class>"&&(Cb.add(_),m.debug(`Remapped pure-white text -> bone: "${_}"`))}),t||o.forEach(a=>{Ml.has(a)||vb.add(a)})},Sb=new Set,k0=()=>{let e=document.querySelectorAll(".hl_header, header.hl_header, header.app-header, .hl_header--controls, .top-bar, .topbar"),t="rgb(18, 22, 29)";document.querySelectorAll(".hr-content-switcher svg, .hr-content-switcher svg *, .hr-content-switcher i, .hr-radio-button svg, .hr-radio-button svg *, .hr-radio-button i, [class*='hr-content-switcher'] svg, [class*='hr-content-switcher'] svg *, [class*='hr-content-switcher'] i").forEach(r=>{if(r.closest(".hl_header"))return;let a=r.getAttribute("style")||"";(a.includes(t)||a.includes("#12161D")||a.includes("#12161d"))&&(r.style.removeProperty("fill"),r.style.removeProperty("stroke"),r.style.removeProperty("color"))}),e.forEach(r=>{r.querySelectorAll("button, a, [role='button'], [class*='rounded-full'], [class*='rounded-md'], [class*='rounded-xl'], [class*='pill'], span[class*='rounded'], div[class*='rounded']").forEach(s=>{if(s.closest("[id^='ws-crm-']"))return;let i=(s.className?.toString()||"").toLowerCase();if(i.includes("avatar"))return;let l=window.getComputedStyle(s),d=l.backgroundColor,c=l.backgroundImage||"",p=!1;if(c!=="none"&&c.includes("gradient"))p=!0;else if(d&&d!=="rgba(0, 0, 0, 0)"&&d!=="transparent"){let S=d.match(/rgba?\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(S&&parseFloat(S[1])<.6)return;let T=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(T){let k=parseInt(T[1],10),C=parseInt(T[2],10),E=parseInt(T[3],10);(k>=60||C>=60||E>=60)&&(k>230&&C>230&&E>230||(k>=80||C>=80||E>=80)&&(p=!0))}}if(!p)return;let b=(s.textContent||"").trim(),_=i,y=Array.from(s.querySelectorAll("*")).map(S=>(S.className?.toString()||"").toLowerCase()).join(" "),g=b.toLowerCase()==="ask ai"||_.includes("ai-button")||_.includes("ask-ai")||_.includes("askai"),x=_.includes("bg-clip-text")||_.includes("text-transparent")||y.includes("bg-clip-text")||y.includes("text-transparent"),$=Array.from(s.querySelectorAll("*")).some(S=>{let T=window.getComputedStyle(S),k=T.getPropertyValue("-webkit-background-clip")||"",C=T.getPropertyValue("background-clip")||"";return k.includes("text")||C.includes("text")});if(g||x||$){let S=["color","-webkit-text-fill-color","fill","stroke","background","background-color","background-image","background-clip","-webkit-background-clip","text-shadow"],T=k=>{S.forEach(C=>k.style.removeProperty(C))};T(s),s.querySelectorAll("*").forEach(T);return}let f="#12161D";s.style.setProperty("color",f,"important"),s.querySelectorAll("*").forEach(S=>{let T=S.tagName.toLowerCase();T==="svg"||T==="path"||T==="circle"||T==="rect"||T==="polygon"||T==="polyline"||T==="line"||T==="g"?(S.style.setProperty("fill",f,"important"),S.style.setProperty("stroke",f,"important"),S.style.setProperty("color",f,"important")):(S.style.setProperty("color",f,"important"),S.style.setProperty("-webkit-text-fill-color",f,"important"))});let w=s.className?.toString()||"<no class>";!Sb.has(w)&&w!=="<no class>"&&(Sb.add(w),m.debug(`Darkened SVG icons on colored button: "${w}"`))})})},Lb=new Set,E0=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;if((t.className?.toString()||"").toLowerCase().includes("default-avatar")){t.querySelectorAll(".n-avatar__text, [class*='avatar__text']").forEach(d=>{(d.getAttribute("style")||"").includes("translateY(11px)")&&d.style.removeProperty("transform")});return}let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.width<20||r.width>64||r.height<20||r.height>64)return;let a=r.top+r.height/2;(t.parentElement||t).querySelectorAll("svg, img").forEach(d=>{let c=d;if(c.closest("[id^='ws-crm-']"))return;let p=d.getBoundingClientRect();if(p.width===0||p.width>28||p.height>28)return;let u=p.left<r.right&&p.right>r.left,b=p.top<r.bottom&&p.bottom>r.top;if(!(u&&b)||p.top+p.height/2<a)return;let y=p.width*p.height/(r.width*r.height);if(y>.55)return;let g=c,x=c.parentElement,$=0;for(;x&&x!==t&&$<3;){let w=x.getBoundingClientRect();if(w.width>0&&w.width<=30&&w.height<=30)g=x;else break;x=x.parentElement,$++}g.style.setProperty("transform","translateY(11px)","important");let f=(g.className?.toString()||"")+" "+g.tagName;Lb.has(f)||(Lb.add(f),m.debug(`Dropped activity badge 11px (${p.width.toFixed(0)}x${p.height.toFixed(0)} icon, ratio ${y.toFixed(2)}): "${f}"`))})})},$0="brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(442%) hue-rotate(122deg) brightness(96%) contrast(89%)",T0=()=>{document.querySelectorAll("aside.default-bg-color a, [class*='sidebar'] a").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();o.includes("active")||o.includes("router-link-active")?(t.style.setProperty("color","#0FB57E","important"),t.style.setProperty("-webkit-text-fill-color","#0FB57E","important"),t.style.setProperty("opacity","1","important"),t.querySelectorAll("span, p, div").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("-webkit-text-fill-color","#0FB57E","important")}),t.querySelectorAll("img").forEach(a=>{a.style.setProperty("filter",$0,"important")}),t.querySelectorAll("svg").forEach(a=>{a.style.setProperty("color","#0FB57E","important"),a.style.setProperty("stroke","#0FB57E","important")})):((t.style.color==="rgb(18, 22, 29)"||t.style.color==="#12161D"||t.style.color==="#0FB57E"||t.style.color==="rgb(15, 181, 126)")&&(t.style.removeProperty("color"),t.style.removeProperty("-webkit-text-fill-color")),t.querySelectorAll("span, p, div").forEach(a=>{let s=a.style.color;(s==="rgb(18, 22, 29)"||s==="#12161D"||s==="#0FB57E"||s==="rgb(15, 181, 126)")&&(a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"))}),t.querySelectorAll("img").forEach(a=>{a.style.filter&&a.style.filter.includes("hue-rotate(122")&&a.style.removeProperty("filter")}))})},Ab=new Set,C0=()=>{document.querySelectorAll(".n-dialog, [class*='n-dialog'], [class*='dialog'], [role='dialog']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;t.querySelectorAll("div, span, i").forEach(r=>{if(r.closest("[id^='ws-crm-']"))return;let a=r.getBoundingClientRect();if(a.width===0||a.height===0||a.width>56||a.height>56||!r.querySelector("svg"))return;let i=window.getComputedStyle(r).backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!i)return;let l=parseInt(i[1],10),d=parseInt(i[2],10),c=parseInt(i[3],10);if(!(l>200&&d>200&&c>200))return;r.style.setProperty("background-color","transparent","important"),r.style.setProperty("background","transparent","important"),r.style.setProperty("box-shadow","none","important"),r.style.setProperty("border","none","important");let p=r.className?.toString()||"<no class>";!Ab.has(p)&&p!=="<no class>"&&(Ab.add(p),m.debug(`Stripped dialog icon circle (${a.width.toFixed(0)}x${a.height.toFixed(0)}, rgb(${l},${d},${c})): "${p}"`))})})},Mb=new Set,S0=()=>{document.querySelectorAll("[class*='ai-button'], [class*='ask-ai'], [class*='askai']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.parentElement,r=0;for(;o&&r<3&&!o.closest("[id^='ws-crm-']");){let a=(o.className?.toString()||"").toLowerCase();if(!(a.includes("ai-button")||a.includes("ask-ai")||a.includes("askai"))){let i=o.getBoundingClientRect();if(i.width>0&&i.height>0&&i.width<=400&&i.height<=80){o.style.setProperty("background-color","#12161D","important"),o.style.setProperty("background-image","none","important");let l=o.className?.toString()||"<no class>";!Mb.has(l)&&l!=="<no class>"&&(Mb.add(l),m.debug(`Painted Ask AI wrapper graphite: "${l}"`))}}o=o.parentElement,r++}})},Ib=new Set,L0=()=>{let e=Array.from(document.querySelectorAll("#contact-conversation-panel, [class*='conversation-panel'], [class*='message-list'], [class*='activity-log'], .hl_header, header.hl_header, [class*='topbar'], [class*='top-bar'], header.app-header, .modal, .modal-content, [class*='modal'], [class*='dialog'], [role='dialog'], [class*='popover'], [class*='popup'], [class*='dropdown-menu'], [class*='select-menu'], [class*='popselect'], [class*='base-select'], .n-base-select-menu, .n-popselect, .n-popover")),t=document.querySelectorAll("div, section, aside"),o=[];t.forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']"))return;let s=window.getComputedStyle(a);if(s.position!=="fixed"&&s.position!=="absolute")return;let i=parseInt(s.zIndex,10);if(!isFinite(i)||i<50)return;let l=a.getBoundingClientRect();l.width<240||l.height<120||l.width>1500||l.height>900||o.push(a)}),[...e,...o].forEach(a=>{a.querySelectorAll("*").forEach(i=>{if(i.id?.startsWith("ws-crm-")||i.closest("[id^='ws-crm-']"))return;let l=(i.className?.toString()||"").toLowerCase();if(l.includes("avatar")||l.includes("notification-dot")||l.includes("indicator"))return;if(l.includes("sidebar-option-button")||i.closest(".sidebar-option-button")||i.closest("nav[class*='w-13']")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("tabulator")||l.includes("tabulator-page")||i.closest("[class*='tabulator']")){(i.getAttribute("style")||"").includes("background-color")&&i.style.removeProperty("background-color");return}if(l.includes("hr-card")||i.closest(".hr-card")||i.id&&i.id.startsWith("opportunity-")){let x=i.getAttribute("style")||"";(x.includes("background-color")||x.includes("color"))&&(i.style.removeProperty("background-color"),i.style.removeProperty("color"));return}if(l.includes("ai-button")||l.includes("ask-ai")||l.includes("bg-clip-text")||l.includes("text-transparent")||i.closest("[class*='ai-button'], [class*='ask-ai'], [class*='bg-clip-text'], [class*='text-transparent']"))return;let d=window.getComputedStyle(i).backgroundColor;if(!d||d==="rgba(0, 0, 0, 0)"||d==="transparent")return;let c=d.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!c)return;let p=parseInt(c[1],10),u=parseInt(c[2],10),b=parseInt(c[3],10);if(!(p>200&&u>200&&b>200))return;let y=i.getBoundingClientRect();if(y.width<24||y.height<16||y.width>1400)return;i.style.setProperty("background-color","#12161D","important"),i.style.setProperty("color","#EDEEF0","important");let g=i.className?.toString()||"<no class>";!Ib.has(g)&&g!=="<no class>"&&(Ib.add(g),m.debug(`Coerced light bg (${y.width.toFixed(0)}x${y.height.toFixed(0)}, rgb(${p},${u},${b})): "${g}"`))})})},Ob=new Set,A0=e=>{let t="input, select, textarea, [class*='hr-input'], [class*='hr-select'], [class*='hr-base-select'], [class*='hr-date-picker'], [class*='hr-datepicker']";(e??document.body.querySelectorAll("*")).forEach(r=>{if(r.id?.startsWith("ws-crm-")||r.closest("[id^='ws-crm-']")||r.children.length>0)return;let a=(r.textContent||"").trim();if(a.length===0||a.length>80||a==="--"||r.closest(t)||r.closest("[class*='avatar'], [class*='hr-avatar']")||r.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||r.closest("[class*='hr-tabs-tab'], [class*='tab-label'], [class*='tabs-nav'], [role='tab']"))return;if(r.matches("[role='heading']")||r.closest("[role='heading']")||r.matches("h1, h2, h3")||r.closest(".hl-card-header, [class*='hl-card-header'], [class*='card-header']")){r.matches("h1, h2, h3")&&(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-alert, .hr-alert-body, [class*='hr-alert']")){let w=r.getAttribute("style")||"";(w.includes("color")||w.includes("background"))&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"),r.style.removeProperty("background-color"));return}if(r.closest("#SettingTexasSmsBlock")||r.matches("p.ui-text-sm-medium")&&r.parentElement?.classList?.contains("flex")&&r.parentElement?.classList?.contains("items-center")&&r.parentElement?.children?.length===1){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".hr-button, .n-button")||r.matches(".hr-button__content, .n-button__content")||r.closest(".hr-button__content, .n-button__content")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}if(r.closest(".bg-primary-50, [class*='bg-primary-50']")){(r.getAttribute("style")||"").includes("color")&&(r.style.removeProperty("color"),r.style.removeProperty("-webkit-text-fill-color"));return}let s=r,i=null;for(let w=0;w<4&&s;w++){let S=s.nextElementSibling;if(S&&(S.matches(t)||S.querySelector(t)!==null)){i=S;break}s=s.parentElement}if(!i)return;let l=r.getBoundingClientRect();if(l.width===0||l.height===0||l.width>400||l.height>60)return;r.style.setProperty("color","#9098A3","important"),r.style.setProperty("-webkit-text-fill-color","#9098A3","important");let d=i,c=d.getBoundingClientRect(),p=d.className?.toString()||"",u=p.includes("schedule-ui-form-weekly-schedule-checkbox")||d.closest(".schedule-ui-form-weekly-schedule-checkbox")!==null,b=p.includes("hl-form-item")||p.includes("n-form-item--top-labelled")||d.closest(".hl-form-item")!==null,_=".hr-input, .hr-input-number, .hr-base-select, .hr-select, .hr-date-picker, .hr-datepicker",y=(p.includes("hr-form-item-blank")||p.includes("hr-form-item")||d.matches(_))&&(d.matches(_)||d.querySelector(_)!==null);y&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let g=p.includes("hr-radio")||d.closest(".hr-radio, [class*='hr-radio']")!==null;g&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let x=p.includes("hr-breadcrumb")||d.closest(".hr-breadcrumb, [class*='hr-breadcrumb']")!==null;x&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius"));let $=p.includes("hr-header-lite")||d.closest("[class*='hr-header-lite']")!==null;$&&(d.getAttribute("style")||"").includes("background-color")&&(d.style.removeProperty("background-color"),d.style.removeProperty("border-color"),d.style.removeProperty("border-style"),d.style.removeProperty("border-width"),d.style.removeProperty("border-radius")),!u&&!b&&!y&&!g&&!x&&!$&&c.width>0&&c.width<=800&&c.height>0&&c.height<=100&&(d.style.setProperty("background-color",Ba,"important"),d.style.setProperty("border-color","#252C36","important"),d.style.setProperty("border-style","solid","important"),d.style.setProperty("border-width","1px","important"),d.style.setProperty("border-radius","4px","important"));let f=r.className?.toString()||"<no class>";!Ob.has(f)&&f!=="<no class>"&&(Ob.add(f),m.debug(`Colored field label "${a.slice(0,30)}": "${f}"`))})},Pb=new Set,M0=()=>{document.querySelectorAll("[class*='avatar']").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=(t.className?.toString()||"").toLowerCase();if(o.includes("dropdown")||o.includes("option-avatar"))return;let r=t.getBoundingClientRect();if(r.width===0||r.height===0||r.height>80||t.querySelector("svg, img")!==null)return;let s=(t.textContent||"").trim();if(s.length===0||s.length>4)return;let i=Math.min(r.width,r.height),l=Math.max(16,Math.min(24,Math.round(i*.6)));t.style.setProperty("font-size",`${l}px`,"important"),t.style.setProperty("line-height","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("text-align","center","important"),t.querySelectorAll("*").forEach(c=>{c.tagName==="svg"||c.tagName==="SVG"||c.tagName!=="IMG"&&(c.style.setProperty("font-size",`${l}px`,"important"),c.style.setProperty("line-height","1","important"),c.style.setProperty("text-align","center","important"))});let d=t.className?.toString()||"<no class>";!Pb.has(d)&&d!=="<no class>"&&(Pb.add(d),m.debug(`Resized avatar text to ${l}px (circle ${i.toFixed(0)}px): "${d}"`))})},Bb=new Set,I0=new Set(["Enter Dashboard Name"]),O0=()=>{document.querySelectorAll("input:not([type='checkbox']):not([type='radio']):not([type='button']):not([type='submit']):not([type='reset']):not([type='hidden']):not([type='file']), textarea, select").forEach(t=>{if(t.closest("[id^='ws-crm-']"))return;let o=t.getBoundingClientRect();if(o.width===0||o.height===0)return;let r=t.placeholder||"";if(I0.has(r)){(t.getAttribute("style")||"").includes("background-color")&&(t.style.removeProperty("background-color"),t.style.removeProperty("border-color"));return}t.style.setProperty("background-color",Ba,"important"),t.style.setProperty("border-color","#252C36","important"),t.style.setProperty("color","#EDEEF0","important"),t.style.setProperty("-webkit-text-fill-color","#EDEEF0","important");let a=t.closest(".hr-input-wrapper, .hr-input, .hr-input__input");a&&(a.style.setProperty("background-color",Ba,"important"),a.style.setProperty("border-color","#252C36","important"));let s=t.className?.toString()||"<no class>";!Bb.has(s)&&s!=="<no class>"&&(Bb.add(s),m.debug(`Forced input slate bg: "${s}"`))})},Ia=(e,t=!1)=>{let o=e??document.body.querySelectorAll("*");(t?Hl(o,gb):o).forEach(a=>{if(a.id?.startsWith("ws-crm-")||a.closest("[id^='ws-crm-']")||a.closest("[class*='collapse-item__header'], [class*='hr-collapse-item__header'], [class*='collapse-header'], [class*='folder-header']")||a.id==="chat-filter"||a.id==="phone-calls"||a.id==="archive-conversation"||a.id==="star-toggle"||a.id==="read-toggle"||a.id==="delete-conversation")return;if(a.closest(".hr-tooltip, .hr-popover-shared, .hr-popover, [class*='hr-tooltip'], [class*='hr-popover']")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(a.closest(".hr-base-select-menu, .hr-select-menu, .hr-select__menu-container, .hr-dropdown-menu, [class*='hr-base-select-menu']")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}let s=a.className?.toString()||"";if(s.includes("bg-inherit")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(a.closest(".pipeline-ribbon")&&s.split(" ").includes("count")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.split(" ").includes("tabulator-page")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(["tabulator-cell","tabulator-row","tabulator-col","tabulator-header","tabulator-tableholder","tabulator-table"].some(g=>s.includes(g))){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("schedule-ui-form-weekly-schedule-checkbox")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("border-color")||g.includes("border-style")||g.includes("border-width"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("border-color"),a.style.removeProperty("border-style"),a.style.removeProperty("border-width"));return}if(s.includes("n-button")&&s.includes("icon-only")&&!s.includes("quaternary")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-button--tertiary-type")||s.includes("n-button--tertiary-type")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"),a.style.removeProperty("-webkit-text-fill-color"),a.style.removeProperty("border-color"),a.style.removeProperty("border-style"),a.style.removeProperty("border-width"),a.style.removeProperty("border-radius"));return}if(s.includes("hr-data-table-td")||s.includes("hr-data-table-tr")||s.includes("hr-data-table__body-cell")||s.includes("hr-data-table__cell")||s.includes("hr-data-table__header-cell")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("n-data-table-td--fixed-right")||s.includes("n-data-table-td--last-col")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(a.classList.contains("hr-tabs")||s.includes("hr-tabs-tab-wrapper")||s.includes("hr-tabs-nav")||s.includes("hr-tabs-nav-scroll-content")||s.includes("hr-tabs-content")||s.includes("hr-tabs-pane")||s.includes("hr-tabs-rail")||s.includes("hr-tabs-wrapper")||s.includes("hr-tabs-pane-wrapper")||s.includes("hr-tab-pane")){let g=a.getAttribute("style")||"";(g.includes("background-color: rgb(26, 31, 40)")||g.includes("background-color: #1A1F28")||g.includes("background-color: #1a1f28"))&&a.style.removeProperty("background-color");return}if(s.includes("hr-date-panel")||s.includes("n-date-panel")||a.closest(".hr-date-panel, .n-date-panel")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-tag")&&s.includes("ui-default")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if((s.includes("bg-purple-50")||s.includes("bg-purple-100"))&&(s.includes("rounded-lg")||s.includes("rounded-md")||s.includes("rounded-full"))){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("n-alert")||a.closest(".n-alert")||s.includes("hl-warning")||s.includes("hl-error")||s.includes("hl-info")||s.includes("hl-success")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-card")||a.closest(".hr-card")||a.id&&a.id.startsWith("opportunity-")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("bg-gray-50")||s.includes("bg-gray-100")||s.includes("bg-gray-200")||s.includes("bg-white")||s.includes("bg-blue-50")||s.includes("bg-blue-100")||s.includes("bg-sky-50")||s.includes("bg-indigo-50")||s.includes("bg-slate-50")||s.includes("bg-neutral-50")||s.includes("bg-zinc-50")||s.includes("bg-stone-50")||s.includes("F7F9FD")||s.includes("F9FAFB")||s.includes("ECEEF2")||s.includes("eceef2")||s.includes("EFF4FF")||s.includes("eff4ff")){(a.getAttribute("style")||"").includes("background-color")&&a.style.removeProperty("background-color");return}if(s.includes("hr-collapse-item")||s.includes("hr-collapse hr-accordion")||s.includes("hr-accordion"))return;if(s.includes("sidebar-option-button")||a.closest(".sidebar-option-button")||a.closest("nav[class*='w-13']")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}if(a.closest(".inbox-panel, .conversation-list-container, [class*='conversation-list-container']")){let g=a.getAttribute("style")||"";(g.includes("background-color")||g.includes("color"))&&(a.style.removeProperty("background-color"),a.style.removeProperty("color"));return}let l=window.getComputedStyle(a).backgroundColor;if(!l||l==="rgba(0, 0, 0, 0)"||l==="transparent")return;let d=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(!d)return;let c=parseInt(d[1],10),p=parseInt(d[2],10),u=parseInt(d[3],10);if(!(c<u0&&p<h0&&u<_0))return;let _=a.getBoundingClientRect();if(_.width===0||_.height===0||_.width>800||_.height>200)return;a.style.setProperty("background-color",Ba,"important");let y=a.className?.toString()||"<no class>";!$b.has(y)&&y!=="<no class>"&&($b.add(y),m.debug(`Coerced dark bg to slate (${_.width.toFixed(0)}x${_.height.toFixed(0)}, rgb(${c},${p},${u})): "${y}"`))}),t||o.forEach(a=>{gb.add(a)})},Oa=()=>{let e="#4B8BF5",t=["#155EEF","#155eef","#004EEB","#004eeb","#175CD3","#175cd3"],o="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";document.querySelectorAll("img[src^='data:image/svg+xml;base64,']:not([data-reos-recolored-v3])").forEach(s=>{s.setAttribute("data-reos-recolored","1"),s.setAttribute("data-reos-recolored-v2","1"),s.setAttribute("data-reos-recolored-v3","1");let l=(s.getAttribute("src")||"").match(/^data:image\/svg\+xml;base64,(.+)$/);if(!l)return;let d;try{d=atob(l[1])}catch{return}let c=d,p=!1;if(t.forEach(_=>{c.includes(_)&&(c=c.split(_).join(e),p=!0)}),["#F8F9FC","#f8f9fc","#F9FAFB","#f9fafb","#F2F4F7","#f2f4f7"].forEach(_=>{c.includes(_)&&(c=c.split(_).join("transparent"),p=!0)}),s.closest(".toolbar_button, .editor-toolbar, [class*='toolbar']")!==null&&["#000000","#000","#040E13","#040e13","#111827","#111","#101828","#101"].forEach(y=>{c.includes(y)&&(c=c.split(y).join("#EDEEF0"),p=!0)}),!!p)try{let _=btoa(c);s.setAttribute("src",`data:image/svg+xml;base64,${_}`)}catch{}}),document.querySelectorAll(".hl-checkbox-group-item img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-icon img:not([data-reos-masked]):not([data-reos-recolored]), .hl-checkbox-group-item-container img:not([data-reos-masked]):not([data-reos-recolored])").forEach(s=>{let i=s.getAttribute("src")||"";if(!i||i.startsWith("data:")||!/\.svg(?:[?#]|$)/i.test(i))return;s.setAttribute("data-reos-masked","1");let l=`url("${i}")`;s.style.setProperty("-webkit-mask-image",l,"important"),s.style.setProperty("-webkit-mask-size","contain","important"),s.style.setProperty("-webkit-mask-repeat","no-repeat","important"),s.style.setProperty("-webkit-mask-position","center","important"),s.style.setProperty("mask-image",l,"important"),s.style.setProperty("mask-size","contain","important"),s.style.setProperty("mask-repeat","no-repeat","important"),s.style.setProperty("mask-position","center","important"),s.style.setProperty("background-color","var(--reos-blue)","important"),s.setAttribute("src",o)})},qr=()=>{document.querySelectorAll("[class*='n-date-panel']").forEach(t=>{[...t.classList].forEach(o=>{if(o.startsWith("n-date-panel")){let r="hr-date-panel"+o.slice(12);t.classList.contains(r)||t.classList.add(r)}})})},P0=()=>{document.querySelectorAll("button.hr-button.hr-button--3xs:not(.hr-button--primary-type), button.hr-button.hr-button--xs:not(.hr-button--primary-type), #manage-association-btn").forEach(t=>{if(t.id?.startsWith("ws-crm-")||t.closest("[id^='ws-crm-']"))return;let o=t.getAttribute("style")||"";(o.includes("background-color")||o.includes("background:"))&&(t.style.removeProperty("background-color"),t.style.removeProperty("background"))})},Po=()=>{let e=r=>{r.style.getPropertyValue("background-color")!=="rgb(26, 31, 40)"&&r.style.setProperty("background-color","rgb(26, 31, 40)","important")},t=document.querySelector(".crm-opportunities-modal");t&&t.querySelectorAll(".hr-base-selection").forEach(a=>{e(a),a.querySelectorAll("div, span").forEach(i=>{if(i.id?.startsWith("ws-crm-"))return;let l=window.getComputedStyle(i).backgroundColor;l==="rgba(0, 0, 0, 0)"||l==="transparent"||!l||e(i)})}),document.querySelectorAll(".hr-upload-dragger").forEach(r=>{e(r);let a=r.querySelector(".ui-upload-icon");a&&(a.style.setProperty("background-color","transparent","important"),a.style.setProperty("background","transparent","important"));let s="rgb(150, 162, 173)",i="rgb(0, 191, 124)",l=c=>{let p=r.querySelector(".ui-upload-icon svg");p&&(p.style.setProperty("color",c,"important"),p.style.setProperty("stroke",c,"important")),r.querySelectorAll(".ui-upload-icon svg path").forEach(u=>{u.style.setProperty("stroke",c,"important")})},d=!1;try{d=r.matches(":hover")}catch{}l(d?i:s),r.dataset.hoverBound!=="1"&&(r.dataset.hoverBound="1",r.addEventListener("mouseenter",()=>l(i)),r.addEventListener("mouseleave",()=>l(s)))})},Il=new WeakSet,B0=()=>{document.querySelectorAll('iframe[title="Email"]').forEach(t=>{if(!Il.has(t))try{let o=t.contentDocument||t.contentWindow?.document;if(!o||!o.head)return;if(o.querySelector("style[data-ws-crm-email-fix]")){Il.add(t);return}let r=o.createElement("style");r.setAttribute("data-ws-crm-email-fix","1"),r.textContent=`
        html, body {
          background-color: #FFFFFF !important;
          color: #101828 !important;
        }
        body { padding: 16px !important; }
      `,o.head.appendChild(r),t.style.background="#FFFFFF",t.style.borderRadius="6px",Il.add(t)}catch{}})},H0=()=>{let e=document.getElementById("edit-phone-number-modal");e&&e.querySelectorAll("textarea").forEach(t=>{let o=getComputedStyle(t).backgroundColor;o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"&&t.style.setProperty("border-color",o,"important")})},it=!1,Bl=null,Hb=!1,D0=()=>{if(Hb)return;Hb=!0;let e=null,t=0;document.addEventListener("pointerdown",r=>{r.isPrimary&&(e=r.clientX,t=r.clientY,it=!1)},!0),document.addEventListener("pointermove",r=>{e!==null&&!it&&Math.abs(r.clientX-e)+Math.abs(r.clientY-t)>6&&(it=!0)},!0);let o=()=>{e=null,it&&(it=!1,Bl&&Bl())};document.addEventListener("pointerup",o,!0),document.addEventListener("pointercancel",o,!0)},Db=()=>{let e,o=()=>{if(Bo||it)return;_b++;let p=_b%m0!==0,u=document.body?document.body.querySelectorAll("*"):void 0;qr(),Oo(),O0(),Ia(u,p),Ma(u),A0(u),B0(),L0(),S0(),C0(),T0(),k0(),M0(),E0(),w0(u,p),Oa(),x0(),g0(),Po(),Io(),fb(u,p),kb(),Eb(),Aa(),P0(),Po(),xb(),wb(),H0()},r=()=>{let p=document.activeElement;if(!p)return!1;let u=p.tagName;return u==="TEXTAREA"||u==="INPUT"||p.isContentEditable===!0},a=0,s=()=>{a=Date.now()};document.addEventListener("scroll",s,{capture:!0,passive:!0}),document.addEventListener("wheel",s,{capture:!0,passive:!0});let i=()=>Date.now()-a<600,l=()=>{if(!(Bo||it)){if(r()||i()){e!==void 0&&clearTimeout(e),e=window.setTimeout(()=>{e=void 0,o()},800);return}e===void 0&&(e=window.setTimeout(()=>{e=void 0,o()},800))}};qr(),Oo(),Ia(),Ma(),Oa(),Po(),Io(),fb(),kb(),Eb(),Aa(),xb(),wb(),window.setTimeout(()=>{qr(),Oo(),Ia(),Ma(),Oa(),Po(),Io(),Aa()},500),window.setTimeout(()=>{qr(),Oo(),Ia(),Ma(),Oa(),Po(),Io(),Aa()},1500),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{Io(),Oo()});let d=!1;Bl=()=>l(),D0(),new MutationObserver(()=>{it||d||(d=!0,requestAnimationFrame(()=>{d=!1,l()}))}).observe(document.body,{childList:!0,subtree:!0})},Ol,R0=()=>{let e=()=>{if(Bo)return;let o=document.getElementById(Pa);!o||!document.head||document.head.lastElementChild===o||document.head.appendChild(o)};new MutationObserver(o=>{let r=!1;for(let a of o){for(let s of Array.from(a.addedNodes)){if(!(s instanceof Element))continue;let i=s.tagName.toLowerCase();if(i==="style"||i==="link"){if(s.id===Pa||s.id===Rb)continue;r=!0;break}}if(r)break}r&&Ol===void 0&&(Ol=window.setTimeout(()=>{Ol=void 0,e()},150))}).observe(document.head,{childList:!0}),e()},jr=()=>{if(Bo=!1,s0(),!document.getElementById(Pa)){let e=document.createElement("style");e.id=Pa,e.textContent=i0,document.head.appendChild(e),m.info("REInvest OS theme stylesheet mounted")}window.__reosForceInstalled||(window.__reosForceInstalled=!0,document.body?Db():window.addEventListener("DOMContentLoaded",Db)),window.__reosCascadeInstalled||(window.__reosCascadeInstalled=!0,R0())},Pl=[],Dl=()=>{for(let t of Pl)window.clearTimeout(t);Pl=[];let e=()=>{Bo||it||(qr(),Oo(),Po(),Io())};e(),Pl.push(window.setTimeout(e,150),window.setTimeout(e,400))};var Fb="ws-crm-customizer-version-badge",Ha=()=>{if(!document.body){document.addEventListener("DOMContentLoaded",Ha,{once:!0});return}if(document.getElementById(Fb))return;let e=document.createElement("div");e.id=Fb,e.style.cssText=`
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
  `,e.textContent=`Customizer v${dn}`,e.title=`Built ${cn}
Click to dismiss for this session`,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)}),document.body.appendChild(e)};var Kb=new Set(["ej0SqnTYIprechAMAPrd"]),Ho="contact-select-trigger",Vb="ws-crm-reply-from-warning",Yb="contact-select-menu",zb="ws-crm-rf-thread-opt",Rl="",Nl=!1,Ur=null,Da=null,qb=!1,Wr="",jb,xt=(...e)=>{try{console.log("[reply-from]",...e)}catch{}},Fl=e=>{let t=(e?.textContent||"").match(/\+?1?\d{10}\b/);return t?t[0]:""},Qe=e=>(e||"").replace(/\D/g,"").slice(-10),Ub=e=>{let t=Qe(e);return t.length===10?`+1 ${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:e},N0=e=>{let t=e.meta||{};return(e.direction||"").toLowerCase()==="inbound"?t.to||"":t.from||""},F0=async()=>{let e=window.location.pathname,t=e.match(/\/contacts\/detail\/([A-Za-z0-9]{15,})/);if(t){let r=J();if(!r)return null;let a=await lt(`${Kt}/conversations/search?locationId=${encodeURIComponent(r)}&contactId=${encodeURIComponent(t[1])}`);if(!a||!a.ok)return xt("getConversationId: search miss",a?a.status:"null"),null;try{return(await a.json())?.conversations?.[0]?.id||null}catch{return null}}let o=e.split("/").filter(Boolean).pop()||"";return/^[A-Za-z0-9]{15,}$/.test(o)?o:null},z0=async()=>{let e=await F0();if(!e)return null;let t=await lt(`${Kt}/conversations/${e}/messages?limit=20`);if(!t||!t.ok)return xt("getThreadNumber: fetch miss",t?t.status:"null"),null;let o;try{o=await t.json()}catch{return null}let r=o?.messages?.messages||[];for(let a of r){if(a.type!==2&&a.messageType!=="TYPE_SMS")continue;let s=N0(a);if(Qe(s).length===10)return s}return null},Do=()=>document.getElementById(Vb)?.remove(),Jb=e=>{let t=e;for(let o=0;o<8&&t;o++){if(t.querySelector("#conv-composer-textarea-input, textarea[placeholder]"))return t;t=t.parentElement}return null},q0=e=>e.replace(/[&<>"]/g,t=>t==="&"?"&amp;":t==="<"?"&lt;":t===">"?"&gt;":"&quot;"),Qb=(e,t,o)=>{Do();let r=document.getElementById(Ho);if(!r)return;let a=Jb(r);if(!a||!a.parentElement)return;let s=document.createElement("div");s.id=Vb,s.style.cssText="display:flex;align-items:flex-start;gap:9px;padding:10px 12px;margin:0 0 6px;background:rgba(232,163,60,0.14);border-left:3px solid var(--reos-amber,#E8A33C);border-radius:0;font-size:12.5px;line-height:1.5;color:var(--reos-bone,#EDEEF0);font-family:inherit;";let i=t?` (${q0(t)})`:"";s.innerHTML=`<span style="color:var(--reos-amber,#E8A33C)!important;font-size:16px;line-height:1;margin-top:1px;flex-shrink:0;" aria-hidden="true">&#9888;</span><div>This thread is on <span style="color:var(--reos-amber,#E8A33C)!important;font-weight:500;">${Ub(e)}</span>${i}. You're set to reply from ${Ub(o)}. <span style="color:var(--reos-amber,#E8A33C)!important;">Switch the From before sending.</span></div>`,a.parentElement.insertBefore(s,a)},j0=e=>{Ur?.disconnect();let t=document.getElementById(Ho);if(!t)return;let o=Jb(t)||t,r=Qe(Fl(t));Ur=new MutationObserver(()=>{let a=Fl(document.getElementById(Ho)),s=Qe(a);!s||s===r||(r=s,s===Qe(e)?Do():Qb(e,"",a))}),Ur.observe(o,{childList:!0,subtree:!0,characterData:!0})},Wb=()=>{let e=document.getElementById(Yb);if(!e)return;let t=Array.from(e.children).filter(l=>l.id!=="hr-dropdown-option-__search__"),o=l=>{let d=(l.textContent||"").match(/\+?1?\d{10}/);return d?d[0]:""},r=null,a="";if(Wr&&(r=t.find(l=>Qe(o(l))===Qe(Wr))||null,a="thread line"),r||(r=t.find(l=>/Last Used/i.test(l.textContent||""))||null,a="last used"),xt("decorateMenu: cache=",Wr,"target=",r?a:"NONE"),!r)return;let s=document.getElementById(zb);s&&s!==r&&s.removeAttribute("id"),r.id=zb;let i=l=>{l.style.setProperty("color","var(--reos-emerald,#0FB57E)","important"),l.style.setProperty("-webkit-text-fill-color","var(--reos-emerald,#0FB57E)","important")};i(r),r.querySelectorAll("*").forEach(l=>{i(l),l.style.setProperty("background-color","transparent","important")})},U0=()=>{if(!Kb.has(J()||""))return;Da?.disconnect();let e=0,t=()=>{let o=document.getElementById(Yb);if(o){Wb(),Da=new MutationObserver(()=>Wb()),Da.observe(o,{childList:!0,subtree:!0});return}++e<20&&window.setTimeout(t,50)};t()},W0=e=>{let t=e.target;t&&t.closest&&t.closest("#"+Ho)&&(xt("From trigger clicked -> waiting for menu"),U0())},G0=async()=>{if(!Nl){Nl=!0;try{let e=document.getElementById(Ho);if(!e)return;let t=Fl(e),o=await z0();if(Wr=o||"",xt("check: from=",t,"thread=",o),!o){Do();return}Qe(t)&&Qe(t)!==Qe(o)?(xt("MISMATCH -> banner"),Qb(o,"",t)):(xt("match -> no banner"),Do()),j0(o)}finally{Nl=!1}}},Gb=()=>{if(!Kb.has(J()||""))return;let e=window.location.pathname;if(!e.includes("/conversations")&&!e.includes("/contacts/detail/")){Rl="",Wr="",Ur?.disconnect(),Da?.disconnect(),Do();return}let t=!!document.getElementById(Ho),o=e.split("/").filter(Boolean).pop()||"",r=(t?"T":"F")+"|"+o;if(r!==Rl){if(Rl=r,!t){Ur?.disconnect(),Do();return}xt("composer expanded on",o),G0()}},Zb=()=>{jb===void 0&&(jb=window.setInterval(Gb,500)),qb||(document.addEventListener("click",W0,!0),qb=!0),Gb()};var K0="#1A1F28",V0="#EDEEF0",zl="#9098A3",Y0=e=>{let t=(e||"").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null},J0=e=>.2126*e.r+.7152*e.g+.0722*e.b,Q0=e=>{let t=e.r/255,o=e.g/255,r=e.b/255,a=Math.max(t,o,r),s=Math.min(t,o,r),i=(a+s)/2,l=a-s,d=0,c=0;return l!==0&&(c=l/(1-Math.abs(2*i-1)),a===t?d=(o-r)/l%6:a===o?d=(r-t)/l+2:d=(t-o)/l+4,d=d*60,d<0&&(d+=360)),`hsl(${Math.round(d)}, ${Math.round(Math.max(.62,c)*100)}%, 60%)`},Xb=(e,t,o)=>{e.querySelectorAll(t).forEach(r=>{r.style.setProperty("color",o,"important"),r.style.setProperty("-webkit-text-fill-color",o,"important")})},Z0=e=>{let t=Y0(getComputedStyle(e).backgroundColor);if(!t||J0(t)<120)return;let o=Q0(t);e.style.setProperty("background-color",K0,"important"),e.style.setProperty("box-shadow",`inset 3px 0 0 0 ${o}`,"important"),Xb(e,".note-content, .note-content *, [class*='text-gray-9'], [class*='text-gray-7']",V0),Xb(e,"#note-date-added-text, [class*='475467']",zl)},X0=e=>{e.querySelectorAll("[class*='hr-tag__count']").forEach(t=>{t.style.setProperty("background-color","transparent","important")}),e.querySelectorAll(".hr-tag, .hr-tag *").forEach(t=>{t.style.setProperty("color",zl,"important"),t.style.setProperty("-webkit-text-fill-color",zl,"important")}),e.querySelectorAll("button.hr-button, .hr-button__border, .hr-button__state-border").forEach(t=>{t.style.setProperty("border","none","important"),t.style.setProperty("box-shadow","none","important")})},eu=()=>{let e=document.querySelectorAll(".note-card-accent");for(let t=0;t<e.length;t++)Z0(e[t]),X0(e[t])},tu,ou=()=>{tu===void 0&&(tu=window.setInterval(eu,700)),eu()};var ek='input:not([autocomplete]):not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="range"]):not([type="color"]),textarea:not([autocomplete])',ru=()=>{document.querySelectorAll(ek).forEach(e=>{e.setAttribute("autocomplete","off")})},nu,au=()=>{nu===void 0&&(nu=window.setInterval(ru,1e3)),ru()};console.log("[ws-crm-customizer] bundle-loaded");var I=(e,t)=>{try{m.debug(`[main] calling ${e}`),t(),m.debug(`[main] ${e} OK`)}catch(o){m.error(`[main:FAIL] ${e} threw:`,o)}},su=()=>{m.info(`Loaded v${dn} (built ${cn})`),za()?(m.info(`[main] excluded location ${J()} \u2014 theme only, skipping feature mounts`),I("mountThemeStylesheet",jr),I("mountDialerThemeFix",_a)):(I("mountVersionBadge (initial)",Ha),I("mountDemoMode (initial)",rs),I("mountFavicon",_c),I("mountThemeStylesheet",jr),I("mountHideLaunchpad",li),I("mountHideNavItems",pi),I("mountRelabelNav",mi),I("mountHideTopmenuTabs",ui),I("mountContractsSection",bi)),I("installOppIdCapture",cd),I("installContactsSearchCapture",_d),I("initPageRouter",sd),m.info("[main] registering onPageChange subscriber"),Se(t=>{if(m.debug(`[main] onPageChange callback fired for page=${t}`),za()){m.info(`[main] page change into excluded location ${J()} \u2014 theme only, skipping feature mounts`),I("mountThemeStylesheet",jr),I("runThemeFastPass",Dl),I("mountDialerThemeFix",_a),I("unmountContactMapLinks",jc),I("unmountDemoMode",os);return}I("mountThemeStylesheet",jr),I("runThemeFastPass",Dl),I("mountVersionBadge",Ha),I("mountDemoMode",rs),I("mountHideLaunchpad",li),I("mountHideNavItems",pi),I("mountRelabelNav",mi),I("mountHideTopmenuTabs",ui),I("mountContractsSection",bi),I("mountAnalyticsDashboard",Ad),I("mountClaimReleaseToggle",tc),I("mountContactActionsBar",uc),I("mountActiveFollowUpButton",Ed),I("mountMtOfferMadeButton",vc),I("mountNotInterestedButton",gc),I("mountScheduleWalkthroughButton",fc),I("mountResendDealLinkButton",wc),I("mountAddReferralBuyer",Cc),I("mountChangePrimaryContactButton",Nd),I("mountReducePriceButton",Lc),I("mountEditLandingPageButton",Ac),I("mountPublishButton",Pc),I("mountContactMapLinks",qc),I("mountSendToClosingOfficeButton",rp),I("mountOppActionBar",kp),I("mountClosingAgentPickerButton",Bm),I("mountPrepareContractButton",rb),I("mountComputeOfferButton",hb),I("mountManageTeam",Fm),I("mountBuyBoxWidget",Hd),I("mountSellerContactFlag",Qd),I("mountPropertiesWidget",Yd),I("mountSupportNavItem",Op),I("mountPhoneAssignmentsWidget",Np),I("mountBulkPowerDialer",mm),I("mountBulkPowerDialerContacts",gm),I("mountCallingAsChip",km),I("mountDialerThemeFix",_a),I("mountReplyFromWarning",Zb),I("mountNoteCanon",ou),I("mountSuppressAutofill",au)}),m.info("[main] onPageChange registered; main() complete")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",su):su();})();
//# sourceMappingURL=customizer.js.map
