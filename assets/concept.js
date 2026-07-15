window.LOCAL30_CUSTOM_CONCEPT=true;
(function(){
  const designs={
    'restoran-hatinie':{v:'v01',layout:'menu',font:'Fraunces',headline:'Kelantan on the table.',motif:'IKAN · ULAM · TEMPOYAK',mark:'H',tone:'Dapur keluarga, lauk penuh rasa.'},
    'restoran-azira':{v:'v02',layout:'sunrise',font:'Yeseva One',headline:'Shah Alam starts here.',motif:'7:00 PAGI',mark:'A',tone:'Sarapan awal. Makan tengah hari yang jujur.'},
    'restoran-aidania':{v:'v03',layout:'tiles',font:'Playfair Display',headline:'Asam pedas, properly.',motif:'PEDAS / MASAM / PUAS',mark:'AP',tone:'Masakan tempatan untuk meja yang ramai.'},
    'alrawsha':{v:'v04',layout:'arch',font:'Cormorant Garamond',headline:'Gather around the feast.',motif:'مشاوي',mark:'AR',tone:'Middle Eastern plates made for sharing.'},
    'nihonkai':{v:'v05',layout:'zen',font:'Newsreader',headline:'Quiet room. Honest Japanese food.',motif:'日本海',mark:'日',tone:'A calm family table in Kota Kemuning.'},
    'bei-ping':{v:'v06',layout:'stamp',font:'Yeseva One',headline:'Chinese Muslim classics.',motif:'清真 · 家常',mark:'北',tone:'Familiar dishes, generous sharing plates.'},
    'salai-power':{v:'v07',layout:'smoke',font:'Bebas Neue',headline:'Fire. Smoke. Lunch.',motif:'SALAI',mark:'SP',tone:'Slow smoke and bold Negeri flavours.'},
    'pine-38':{v:'v08',layout:'garden',font:'Cormorant Garamond',headline:'A table for every hour.',motif:'CAFE · DINNER · EVENTS',mark:'38',tone:'Coffee, dinner and gatherings under one roof.'},
    'tomyam-rejab':{v:'v09',layout:'night',font:'Syne',headline:'Hot bowls after dark.',motif:'5PM—2AM',mark:'TR',tone:'Thai comfort food for Shah Alam nights.'},
    'kwf-subang-perdana':{v:'v10',layout:'diner',font:'Barlow Condensed',headline:'Big western plates. Easy prices.',motif:'GRILL OPEN',mark:'KWF',tone:'Neighbourhood western food without the fuss.'},
    'the-editor-salon':{v:'v11',layout:'editorial',font:'Playfair Display',headline:'Your next look, edited.',motif:'CUT / COLOUR / FORM',mark:'E',tone:'Modern hair craft with an editorial eye.'},
    'lepaque-cut':{v:'v12',layout:'softframe',font:'Fraunces',headline:'Private care for every strand.',motif:'MUSLIMAH STUDIO',mark:'LC',tone:'A comfortable, covered space for hair care.'},
    'elyana-hair-salon':{v:'v13',layout:'neighbour',font:'Yeseva One',headline:'Good hair, close to home.',motif:'OPEN LATE',mark:'EH',tone:'Friendly neighbourhood styling in Padang Jawa.'},
    'dinara-beauty':{v:'v14',layout:'gem',font:'Cormorant Garamond',headline:'A little time for yourself.',motif:'CARE · GLOW · REST',mark:'D',tone:'Beauty rituals shaped around your needs.'},
    'n96-hair':{v:'v15',layout:'nineties',font:'Anybody',headline:'Shape. Colour. Confidence.',motif:'N—96',mark:'96',tone:'A direct, modern approach to everyday hair.'},
    'keith-hair-studio':{v:'v16',layout:'precision',font:'Space Grotesk',headline:'A cut that keeps its shape.',motif:'MEASURED / PERSONAL',mark:'K',tone:'Experienced hands and considered recommendations.'},
    'velvet-spa':{v:'v17',layout:'velvet',font:'Playfair Display',headline:'Let the day soften.',motif:'WOMEN’S SPA',mark:'V',tone:'Facial, massage and restorative body care.'},
    'gmr-werkstatt':{v:'v18',layout:'garage',font:'Barlow Condensed',headline:'Diagnostics before guesswork.',motif:'EURO / LOCAL / JAPANESE',mark:'GMR',tone:'Workshop thinking for every kilometre ahead.'},
    'zafran-auto':{v:'v19',layout:'blueprint',font:'Space Grotesk',headline:'Service, mapped clearly.',motif:'SCAN · CHECK · REPAIR',mark:'ZA',tone:'Systematic vehicle care with clear next steps.'},
    'raudhah-auto':{v:'v20',layout:'road',font:'Anybody',headline:'Back on the road, properly.',motif:'PREFERRED WORKSHOP',mark:'RR',tone:'Inspection, repair and practical guidance.'},
    'ab-auto-works':{v:'v21',layout:'ledger',font:'DM Mono',headline:'Tell us what the car is doing.',motif:'JOB CARD 001',mark:'AB',tone:'A straightforward workshop for everyday repairs.'},
    'arm-sportrim':{v:'v22',layout:'wheel',font:'Bebas Neue',headline:'The right stance starts here.',motif:'RIM / TYRE / FIT',mark:'ARM',tone:'Wheel choices, fitment and tyre care in Setia Alam.'},
    'setia-alam-tyre':{v:'v23',layout:'spec',font:'Barlow Condensed',headline:'Grip for the road you drive.',motif:'PRESSURE / TREAD / ALIGN',mark:'SAT',tone:'Tyres and servicing with the specifications visible.'},
    'azn-auto':{v:'v24',layout:'signal',font:'Syne',headline:'Notice the signs early.',motif:'CHECK / LISTEN / FIX',mark:'AZN',tone:'Preventive service and problem diagnosis.'},
    'bateri-jalan-kebun':{v:'v25',layout:'charge',font:'Anybody',headline:'Flat battery? We come to you.',motif:'DELIVER + INSTALL',mark:'⚡',tone:'Fast mobile battery fitting around Jalan Kebun.'},
    'online-printing-network':{v:'v26',layout:'cmyk',font:'Space Grotesk',headline:'From file to finished piece.',motif:'C M Y K',mark:'OPN',tone:'Commercial print, artwork checks and production.'},
    'teratai-floral':{v:'v27',layout:'bloom',font:'Cormorant Garamond',headline:'Flowers that say it gently.',motif:'FRESH / DAILY',mark:'✿',tone:'Bouquets and delivery for meaningful moments.'},
    'pet-cottage':{v:'v28',layout:'play',font:'Fraunces',headline:'Good things for good companions.',motif:'TAILS WELCOME',mark:'PC',tone:'Everyday pet supplies with neighbourhood care.'},
    'mysarah-printing':{v:'v29',layout:'paper',font:'Syne',headline:'Print it. Pack it. Make it real.',motif:'INK ON PAPER',mark:'MP',tone:'Practical small-run printing for local businesses.'},
    'dance-point':{v:'v30',layout:'motion',font:'Anybody',headline:'Start on five, six, seven, eight.',motif:'MOVE / LEARN / REPEAT',mark:'8',tone:'Dance classes that meet every level with momentum.'}
  };
  const categoryContent={
    Food:{tool:'Reserve a table',services:[['Signature plates','Explore the dishes the kitchen is known for before deciding when to visit.'],['Family tables','Share your group size early so the team can confirm suitable seating.'],['Takeaway','Check the current menu, preparation time and collection details directly.']]},
    Beauty:{tool:'Request an appointment',services:[['Consultation','Describe the result you want so the team can recommend a suitable service.'],['Treatment','Share your hair, skin or care concerns before selecting a treatment.'],['Finish','Confirm timing, expected result and aftercare directly with the studio.']]},
    Auto:{tool:'Start a service request',services:[['Inspect','Send the vehicle details and symptoms before arranging an inspection.'],['Explain','Ask for the diagnosis, recommended work and estimate before approval.'],['Repair','Confirm parts, timing and collection arrangements directly with the workshop.']]},
    Services:{tool:'Request a print quote',services:[['Artwork check','Share the file format, finished size and whether design support is required.'],['Production','Specify material, quantity, finishing and the date the job is needed.'],['Collection','Confirm proof approval, turnaround time and pickup or delivery options.']]},
    Retail:{tool:'Plan an arrangement',services:[['Fresh flowers','Ask what is in season and available for the required date.'],['Personal message','Share the occasion, preferred mood and card wording with the florist.'],['Delivery','Confirm recipient details, delivery window and final fee before ordering.']]},
    Pets:{tool:'Ask before you visit',services:[['Supplies','Check stock for the preferred food, accessory or care product before visiting.'],['Care guidance','Share the pet type, age and need so the team can suggest suitable options.'],['Product check','Confirm brand, size, price and availability directly with the shop.']]},
    Classes:{tool:'Request a trial class',services:[['Beginners','Share the student age and experience to identify a suitable starting class.'],['Progression','Ask how levels, schedules and advancement are structured.'],['Trial session','Confirm the trial date, attire, fees and arrival instructions beforehand.']]}
  };
  const esc=s=>String(s||'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const wa=(b,msg)=>`https://wa.me/${b.phone}?text=${encodeURIComponent(msg)}`;
  const hasMobileContact=b=>b.phone.startsWith('601');
  const phone=b=>`+${b.phone}`;
  const displayPhone=b=>{const n=b.phone.slice(2);if(n.startsWith('3'))return `+60 3-${n.slice(1,5)} ${n.slice(5)}`;if(n.startsWith('11'))return `+60 11-${n.slice(2,6)} ${n.slice(6)}`;return `+60 ${n.slice(0,2)}-${n.slice(2,5)} ${n.slice(5)}`};
  const mapSrc=b=>`https://maps.google.com/maps?hl=en&z=15&iwloc=B&output=embed&q=${encodeURIComponent(b.address)}`;
  const mapLink=b=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`;
  const imageFor=b=>b.category==='Food'?'food-table.jpg':b.category==='Beauty'?'beauty-hair.jpg':b.category==='Auto'?'auto-diagnostic.jpg':b.feature==='flowers'?'florist-bouquet.jpg':b.feature==='pets'?'pet-shop.jpg':b.category==='Classes'?'dance-studio.jpg':'print-production.jpg';
  function hero(b,d){
    const common=`<div class="brand-motif" aria-hidden="true">${esc(d.motif)}</div><div class="hero-mark" aria-hidden="true">${esc(d.mark)}</div>`;
    const copy=`<div class="hero-words"><p class="site-kicker">${esc(b.type)} · ${esc(b.area)}</p><h1>${esc(d.headline)}</h1><p class="site-tone">${esc(d.tone)}</p><div class="hero-actions"><a class="action solid" href="#enquire">${esc(categoryContent[b.category].tool)}</a><a class="action ghost" href="tel:${phone(b)}">Call ${esc(displayPhone(b))}</a></div></div>`;
    const badge=`<div class="identity-card"><span>${esc(d.mark)}</span><small>${esc(b.name)}<br>${esc(b.area)}</small></div>`;
    const layouts={
      menu:`<header class="brand-hero hero-menu">${copy}<div class="menu-panel"><p>Today’s table</p><strong>Local recipes<br>made to share</strong><span>${esc(b.hours)}</span></div>${common}</header>`,
      sunrise:`<header class="brand-hero hero-sunrise">${common}${copy}<div class="sun-disc"><span>OPEN</span><strong>07</strong><small>AM</small></div></header>`,
      tiles:`<header class="brand-hero hero-tiles">${copy}<div class="tile-wall"><i>ASAM</i><i>PEDAS</i><i>NASI</i><i>PUAS</i></div>${common}</header>`,
      arch:`<header class="brand-hero hero-arch"><div class="archway">${badge}</div>${copy}${common}</header>`,
      zen:`<header class="brand-hero hero-zen">${copy}<div class="zen-circle">${esc(d.mark)}</div>${common}</header>`,
      stamp:`<header class="brand-hero hero-stamp">${common}<div class="stamp-seal">${esc(d.mark)}</div>${copy}</header>`,
      smoke:`<header class="brand-hero hero-smoke"><div class="smoke-lines" aria-hidden="true"></div>${copy}${common}</header>`,
      garden:`<header class="brand-hero hero-garden">${common}${badge}${copy}<div class="leaf-cluster" aria-hidden="true">38</div></header>`,
      night:`<header class="brand-hero hero-night"><div class="neon-bowl" aria-hidden="true">⌣</div>${copy}${common}</header>`,
      diner:`<header class="brand-hero hero-diner"><div class="diner-sign">${esc(d.mark)}<small>WESTERN FOOD</small></div>${copy}${common}</header>`,
      editorial:`<header class="brand-hero hero-editorial"><div class="issue">ISSUE 01<br>SHAH ALAM</div>${copy}${badge}${common}</header>`,
      softframe:`<header class="brand-hero hero-softframe"><div class="soft-window">${esc(d.mark)}</div>${copy}${common}</header>`,
      neighbour:`<header class="brand-hero hero-neighbour">${common}<div class="open-card">OPEN<br>LATE</div>${copy}</header>`,
      gem:`<header class="brand-hero hero-gem"><div class="gem-shape">${esc(d.mark)}</div>${copy}${common}</header>`,
      nineties:`<header class="brand-hero hero-nineties">${common}${copy}<div class="number-hero">96</div></header>`,
      precision:`<header class="brand-hero hero-precision"><div class="measure">0———10———20———30</div>${copy}${common}</header>`,
      velvet:`<header class="brand-hero hero-velvet">${copy}<div class="velvet-fold">V</div>${common}</header>`,
      garage:`<header class="brand-hero hero-garage"><div class="garage-code">GMR<br><span>WERKSTATT</span></div>${copy}${common}</header>`,
      blueprint:`<header class="brand-hero hero-blueprint">${common}<div class="blueprint-car">FRONT<br>○──○</div>${copy}</header>`,
      road:`<header class="brand-hero hero-road"><div class="road-line"></div>${copy}${common}</header>`,
      ledger:`<header class="brand-hero hero-ledger"><div class="job-ticket">JOB CARD<br><strong>001</strong><br>STATUS: READY</div>${copy}${common}</header>`,
      wheel:`<header class="brand-hero hero-wheel"><div class="wheel-ring">${esc(d.mark)}</div>${copy}${common}</header>`,
      spec:`<header class="brand-hero hero-spec">${copy}<div class="tyre-spec">205<br><span>/55 R16</span></div>${common}</header>`,
      signal:`<header class="brand-hero hero-signal"><div class="signal-lamp">!</div>${copy}${common}</header>`,
      charge:`<header class="brand-hero hero-charge">${common}${copy}<div class="battery"><span>+</span><strong>100%</strong><span>−</span></div></header>`,
      cmyk:`<header class="brand-hero hero-cmyk"><div class="colour-circles"><i>C</i><i>M</i><i>Y</i><i>K</i></div>${copy}${common}</header>`,
      bloom:`<header class="brand-hero hero-bloom"><div class="petals"><i></i><i></i><i></i><i></i><b>✿</b></div>${copy}${common}</header>`,
      play:`<header class="brand-hero hero-play">${common}<div class="pet-face">•ᴥ•</div>${copy}</header>`,
      paper:`<header class="brand-hero hero-paper"><div class="paper-stack"><i></i><i></i><strong>${esc(d.mark)}</strong></div>${copy}${common}</header>`,
      motion:`<header class="brand-hero hero-motion"><div class="countdown">5<br>6<br>7<br><b>8</b></div>${copy}${common}</header>`
    }; return layouts[d.layout];
  }
  function enquiryFields(b){
    if(b.category==='Food')return `<div class="input-pair"><label>Guests<select id="q1"><option>2 people</option><option>4 people</option><option>6 people</option><option>8+ people</option></select></label><label>Preferred time<input id="q2" type="datetime-local"></label></div><label>Notes<textarea id="q3" placeholder="Dietary needs, high chair, celebration…"></textarea></label>`;
    if(b.category==='Beauty')return `<div class="input-pair"><label>Service<select id="q1"><option>Cut & finish</option><option>Colour consultation</option><option>Treatment</option><option>Facial / spa</option></select></label><label>Preferred time<input id="q2" type="datetime-local"></label></div><label>Notes<textarea id="q3" placeholder="Current length, desired look or concern…"></textarea></label>`;
    if(b.category==='Auto')return `<div class="input-pair"><label>Vehicle<input id="q1" placeholder="2019 Perodua Myvi"></label><label>Issue<select id="q2"><option>Service / inspection</option><option>Warning light</option><option>Tyres / wheels</option><option>Battery / cannot start</option><option>Noise / vibration</option></select></label></div><label>Symptoms<textarea id="q3" placeholder="What happened and when did it start?"></textarea></label>`;
    if(b.feature==='print')return `<div class="input-pair"><label>Product<select id="q1"><option>Business cards</option><option>Flyers / menus</option><option>Banner / signage</option><option>Stickers / labels</option></select></label><label>Quantity<input id="q2" type="number" min="1" placeholder="500"></label></div><label>Specifications<textarea id="q3" placeholder="Size, material and deadline…"></textarea></label>`;
    if(b.feature==='flowers')return `<div class="input-pair"><label>Occasion<select id="q1"><option>Birthday</option><option>Anniversary</option><option>Congratulations</option><option>Sympathy</option></select></label><label>Budget (RM)<input id="q2" type="number" min="50" placeholder="150"></label></div><label>Brief<textarea id="q3" placeholder="Colours, message and delivery date…"></textarea></label>`;
    if(b.feature==='pets')return `<div class="input-pair"><label>Pet<select id="q1"><option>Cat</option><option>Dog</option><option>Small animal</option></select></label><label>Need<select id="q2"><option>Food & supplies</option><option>Care advice</option><option>Product availability</option></select></label></div><label>Details<textarea id="q3" placeholder="Breed, age or preferred brand…"></textarea></label>`;
    return `<div class="input-pair"><label>Age group<select id="q1"><option>Under 7</option><option>7–12</option><option>13–17</option><option>Adult</option></select></label><label>Experience<select id="q2"><option>Complete beginner</option><option>Some experience</option><option>Returning dancer</option></select></label></div><label>Availability<textarea id="q3" placeholder="Weekday evenings or Saturday morning…"></textarea></label>`;
  }
  function render(){
    const app=document.getElementById('conceptApp'); if(!app)return;
    const id=new URLSearchParams(location.search).get('id'); const b=(window.BUSINESSES||[]).find(x=>x.id===id)||(window.BUSINESSES||[])[0]; if(!b)return;
    const d=designs[b.id], cc=categoryContent[b.category];
    document.title=`${b.name} — Website concept`;
    document.documentElement.style.cssText=`--ink:${b.ink};--paper:${b.paper};--accent:${b.accent};--display:'${d.font}'`;
    app.innerHTML=`<div class="bespoke-site ${d.v} layout-${d.layout}" style="--display:'${esc(d.font)}'">
      <div class="prototype-note">Unofficial concept · details to be verified with owner</div>
      <nav class="brand-nav"><a href="#" class="wordmark">${esc(b.name)}</a><div><a href="#visit">Visit</a><a href="#enquire">Enquire</a><a class="nav-call" href="tel:${phone(b)}">${esc(displayPhone(b))}</a></div></nav>
      ${hero(b,d)}
      <section class="photo-gallery" aria-label="Concept photography plan for ${esc(b.name)}">
        <figure><img src="assets/images/${imageFor(b)}" alt="Conceptual editorial scene representing ${esc(b.type)}" loading="eager"><figcaption>Concept image · replace with owner-approved photo</figcaption></figure>
        <div class="photo-brief"><small>OWNER PHOTO 01</small><strong>${esc(b.type)}</strong><p>Replace with a real product, service or signature-detail photograph.</p></div>
        <div class="photo-brief"><small>OWNER PHOTO 02</small><strong>${esc(b.area)}</strong><p>Replace with a real team, premises or customer-experience photograph.</p></div>
      </section>
      <section class="business-ribbon"><div><small>RESEARCHED HOURS · CONFIRM</small><strong>${esc(b.hours)}</strong></div><div><small>RESEARCHED LOCATION · CONFIRM</small><strong>${esc(b.area)}, Shah Alam</strong></div><div><small>PUBLIC CONTACT · CONFIRM</small><a href="tel:${phone(b)}">${esc(displayPhone(b))}</a></div></section>
      <section class="offer-section"><div class="offer-intro"><span>What we make easy</span><h2>${esc(cc.tool)}</h2></div><div class="offer-list">${cc.services.map((x,i)=>`<article><small>0${i+1}</small><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('')}</div></section>
      <section class="enquiry-section" id="enquire"><div class="enquiry-copy"><span>QUICK REQUEST</span><h2>Start with the useful details.</h2><p>${hasMobileContact(b)?'This form stores nothing. It prepares an enquiry for you to review before opening WhatsApp.':'This listing has a public landline, not a verified WhatsApp number. Prepare your notes here, then call the business directly.'}</p></div><form id="bespokeForm">${enquiryFields(b)}<button type="submit">${hasMobileContact(b)?'Review in WhatsApp ↗':'Copy enquiry notes'}</button><p class="form-status" id="formStatus" aria-live="polite"></p></form></section>
      <section class="visit-section" id="visit"><div class="map-wrap"><iframe title="Google Map showing ${esc(b.name)}" src="${mapSrc(b)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="map-pin" href="${mapLink(b)}" target="_blank" rel="noreferrer"><b>●</b><span>Google Maps pin<br><small>${esc(b.name)}</small></span></a></div><div class="visit-copy"><span>FIND US</span><h2>${esc(b.area)}</h2><p>${esc(b.address)}</p><p>${esc(b.hours)}</p><p class="research-note">Public details were research-sourced on 15 July 2026 and require owner confirmation. <a href="${esc(b.source)}" target="_blank" rel="noreferrer">View research source ↗</a></p><div class="visit-actions"><a href="${mapLink(b)}" target="_blank" rel="noreferrer">Open in Google Maps ↗</a><a href="tel:${phone(b)}">Call ${esc(displayPhone(b))}</a></div></div></section>
      <footer class="bespoke-footer"><strong>${esc(b.name)}</strong><span>Concept website · not affiliated with the business</span><a href="index.html">Return to Local 30</a></footer>
      ${hasMobileContact(b)?`<a class="floating-wa" href="${wa(b,`Hi ${b.name}, I would like to enquire about your ${b.type.toLowerCase()}.`)}" target="_blank" rel="noreferrer" aria-label="Open WhatsApp enquiry for ${esc(b.name)}"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.7A12 12 0 1 0 16 3Zm0 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.1 1 1.1-4-.3-.4A9.5 9.5 0 1 1 16 24.7Zm5.2-7.1c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.4.2-.7.1-2.2-1-3.7-2-5-4.3-.4-.7.4-.7 1.1-2 .1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1 1-.9 2.4-.8 2.7.1 2.7 2.3 5.3 4.7 6.8 3.6 2.2 4.4 2.4 5.7 2.2.9-.1 1.7-.8 2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.5-.3Z"/></svg><span>WhatsApp</span></a>`:`<a class="floating-call" href="tel:${phone(b)}" aria-label="Call ${esc(b.name)}"><span aria-hidden="true">☎</span><span>Call</span></a>`}
    </div>`;
    document.getElementById('bespokeForm').addEventListener('submit',async e=>{e.preventDefault();const values=['q1','q2','q3'].map(x=>document.getElementById(x)?.value||'Not specified');const message=`Hi ${b.name}, I would like to enquire.\n\n${values[0]}\n${values[1]}\n${values[2]}`;if(hasMobileContact(b)){window.open(wa(b,message),'_blank','noopener');return}const status=document.getElementById('formStatus');try{await navigator.clipboard.writeText(message);status.innerHTML=`Enquiry notes copied. <a href="tel:${phone(b)}">Call ${esc(displayPhone(b))} now →</a>`}catch{status.innerHTML=`Copy these notes, then <a href="tel:${phone(b)}">call ${esc(displayPhone(b))}</a>:<br>${esc(message).replace(/\n/g,'<br>')}`}});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
