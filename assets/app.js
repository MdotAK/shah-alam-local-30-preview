(function(){
  const businesses=window.BUSINESSES||[];
  const esc=s=>String(s||'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const displayPhone=p=>{const n=p.slice(2);if(n.startsWith('3'))return `+60 3-${n.slice(1,5)} ${n.slice(5)}`;if(n.startsWith('11'))return `+60 11-${n.slice(2,6)} ${n.slice(6)}`;return `+60 ${n.slice(0,2)}-${n.slice(2,5)} ${n.slice(5)}`};
  const wa=(b,msg)=>`https://wa.me/${b.phone}?text=${encodeURIComponent(msg)}`;

  function initDirectory(){
    const list=document.querySelector('#listing'); if(!list)return;
    const search=document.querySelector('#searchInput'), filters=document.querySelector('#filters'), count=document.querySelector('#visibleCount');
    const cats=['All',...new Set(businesses.map(b=>b.category))]; let active='All';
    filters.innerHTML=cats.map(c=>`<button class="${c==='All'?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
    function render(){
      const q=search.value.trim().toLowerCase();
      const data=businesses.filter(b=>(active==='All'||b.category===active)&&`${b.name} ${b.type} ${b.area} ${b.address}`.toLowerCase().includes(q));
      count.textContent=data.length;
      list.innerHTML=data.length?data.map((b,i)=>`<article class="listing-card">
        <span class="num">${String(i+1).padStart(2,'0')}</span>
        <div><h2>${esc(b.name)}</h2><p>${esc(b.type)}</p></div>
        <div class="details"><span class="pill">${esc(b.category)}</span><p>${esc(b.area)} · ${esc(displayPhone(b.phone))}</p></div>
        <a class="source-link" href="${b.source}" target="_blank" rel="noreferrer">Research source ↗<br>${esc(b.sourceType)}</a>
        <a class="view-site" href="site.html?id=${encodeURIComponent(b.id)}">View concept <span>→</span></a>
      </article>`).join(''):`<p class="empty">No businesses match that search.</p>`;
    }
    filters.addEventListener('click',e=>{if(!e.target.matches('button'))return;active=e.target.dataset.cat;filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===e.target));render()});
    search.addEventListener('input',render); render();
  }

  const content={
    Food:{verb:'Come hungry.',summary:'Local flavour, an easy table, and food worth making the trip for.',symbol:'食',toolTitle:'Plan your table',toolCopy:'Choose your group size and preferred time. We’ll prepare a WhatsApp message for a quick reservation request.',services:['Signature dishes','Family tables','Takeaway ready']},
    Beauty:{verb:'Leave renewed.',summary:'Thoughtful care, personal recommendations, and a look that feels like you.',symbol:'✦',toolTitle:'Build your appointment',toolCopy:'Select a service and time. Your request opens in WhatsApp so the team can confirm availability.',services:['Personal consult','Care treatments','Style & finish']},
    Auto:{verb:'Drive with confidence.',summary:'Straightforward advice, careful hands, and practical service for the road ahead.',symbol:'↗',toolTitle:'Describe the issue',toolCopy:'A few details help the workshop understand your car before you arrive. This is a request, not a confirmed quote.',services:['Inspection first','Clear next steps','Parts & fitting']},
    Services:{verb:'Make it tangible.',summary:'Practical production support for ideas that need to look sharp in the real world.',symbol:'CMYK',toolTitle:'Build a print brief',toolCopy:'Choose the product, quantity and deadline to create a ready-to-send quotation request.',services:['Artwork check','Production advice','Pickup or delivery']},
    Retail:{verb:'Say it beautifully.',summary:'Fresh flowers, thoughtful arrangements, and delivery for days that matter.',symbol:'✿',toolTitle:'Build a bouquet brief',toolCopy:'Set the occasion, budget and delivery date. The florist will confirm flower availability.',services:['Fresh bouquets','Custom messages','Local delivery']},
    Pets:{verb:'For their good days.',summary:'Everyday supplies and gentle care for the smallest, most opinionated family members.',symbol:'●',toolTitle:'Plan a pet visit',toolCopy:'Tell the team who is coming and what they need before you make the trip.',services:['Daily essentials','Care guidance','Pet-friendly help']},
    Classes:{verb:'Find your rhythm.',summary:'A welcoming place to move, learn and grow—one count at a time.',symbol:'08',toolTitle:'Find a trial class',toolCopy:'Share age group and experience so the studio can recommend the best first class.',services:['Beginner welcome','Structured levels','Trial sessions']}
  };
  function fieldsFor(b){
    if(b.feature==='menu'||b.feature==='event')return `<div class="form-row"><div class="field"><label>Guests</label><select id="f1"><option>2 people</option><option>4 people</option><option>6 people</option><option>8+ people</option></select></div><div class="field"><label>When</label><input id="f2" type="datetime-local"></div></div><div class="field"><label>Notes</label><textarea id="f3" placeholder="High chair, celebration, dietary needs…"></textarea></div>`;
    if(b.feature==='booking')return `<div class="form-row"><div class="field"><label>Service</label><select id="f1"><option>Cut & finish</option><option>Colour consultation</option><option>Treatment</option><option>Facial / spa</option></select></div><div class="field"><label>Preferred time</label><input id="f2" type="datetime-local"></div></div><div class="field"><label>What would you like help with?</label><textarea id="f3" placeholder="Hair length, desired look, skin concern…"></textarea></div>`;
    if(['diagnostic','tyres','battery'].includes(b.feature))return `<div class="form-row"><div class="field"><label>Vehicle</label><input id="f1" placeholder="e.g. 2019 Perodua Myvi"></div><div class="field"><label>Need help with</label><select id="f2"><option>Service / inspection</option><option>Warning light</option><option>Tyres / wheels</option><option>Battery / cannot start</option><option>Noise / vibration</option></select></div></div><div class="field"><label>Symptoms</label><textarea id="f3" placeholder="What happened, and when did it start?"></textarea></div>`;
    if(b.feature==='print')return `<div class="form-row"><div class="field"><label>Product</label><select id="f1"><option>Business cards</option><option>Flyers / menus</option><option>Banner / signage</option><option>Stickers / labels</option><option>Other</option></select></div><div class="field"><label>Quantity</label><input id="f2" type="number" min="1" placeholder="500"></div></div><div class="field"><label>Size, material & deadline</label><textarea id="f3" placeholder="A5, double-sided, needed by Friday…"></textarea></div>`;
    if(b.feature==='flowers')return `<div class="form-row"><div class="field"><label>Occasion</label><select id="f1"><option>Birthday</option><option>Anniversary</option><option>Congratulations</option><option>Sympathy</option><option>Just because</option></select></div><div class="field"><label>Budget (RM)</label><input id="f2" type="number" min="50" placeholder="150"></div></div><div class="field"><label>Colours, message & delivery date</label><textarea id="f3" placeholder="Soft pinks, delivery Saturday afternoon…"></textarea></div>`;
    if(b.feature==='pets')return `<div class="form-row"><div class="field"><label>Pet</label><select id="f1"><option>Cat</option><option>Dog</option><option>Small animal</option><option>Other</option></select></div><div class="field"><label>Need</label><select id="f2"><option>Food & supplies</option><option>Care advice</option><option>Grooming enquiry</option><option>Product availability</option></select></div></div><div class="field"><label>Tell us more</label><textarea id="f3" placeholder="Breed, age, preferred brand or concern…"></textarea></div>`;
    return `<div class="form-row"><div class="field"><label>Student age</label><select id="f1"><option>Under 7</option><option>7–12</option><option>13–17</option><option>Adult</option></select></div><div class="field"><label>Experience</label><select id="f2"><option>Complete beginner</option><option>Some experience</option><option>Returning dancer</option></select></div></div><div class="field"><label>Availability</label><textarea id="f3" placeholder="Weekday evenings or Saturday morning…"></textarea></div>`;
  }
  function initConcept(){
    const app=document.querySelector('#conceptApp'); if(!app)return;
    const id=new URLSearchParams(location.search).get('id'); const b=businesses.find(x=>x.id===id)||businesses[0]; const c=content[b.category];
    document.title=`${b.name} — Concept website`; document.documentElement.style.cssText=`--ink:${b.ink};--paper:${b.paper};--accent:${b.accent}`;
    app.innerHTML=`<div class="concept-shell category-${esc(b.category)}">
      <div class="concept-notice"><span>Unofficial concept website</span><span>·</span><span>Details must be verified with owner</span></div>
      <nav class="concept-nav"><a class="brand" href="#">${esc(b.name)}</a><div class="nav-actions"><a class="btn" href="#services">Explore</a><a class="btn primary" href="${wa(b,`Hi ${b.name}, I found your concept website and would like to enquire.`)}" target="_blank" rel="noreferrer">WhatsApp</a></div></nav>
      <header class="concept-hero"><div class="hero-copy"><p class="eyebrow">${esc(b.type)} · ${esc(b.area)}</p><h1>${esc(c.verb.split(' ').slice(0,-1).join(' '))}<span>${esc(c.verb.split(' ').slice(-1))}</span></h1><div class="hero-summary"><p>${esc(c.summary)}</p><a class="btn" href="#book">Plan your visit ↓</a></div></div><div class="hero-art" aria-hidden="true"><div class="art-orbit"><span class="art-symbol">${esc(c.symbol)}</span></div></div></header>
      <section class="info-strip"><div><small>Visit</small><p>${esc(b.address)}</p></div><div><small>Hours</small><p>${esc(b.hours)}</p></div><div><small>Call</small><p>${esc(displayPhone(b.phone))}</p></div></section>
      <section class="utility" id="book"><div class="section-head"><h2>${esc(c.toolTitle)}</h2><p>${esc(c.toolCopy)}</p></div><div class="tool-panel"><aside class="tool-aside"><p class="eyebrow">Quick enquiry</p><h3>Less back-and-forth. More useful detail.</h3><p class="small">No data is stored. The button prepares a WhatsApp message for you to review before sending.</p></aside><form class="tool-form" id="enquiryForm">${fieldsFor(b)}<div class="result" id="formResult">Complete the fields, then send the request via WhatsApp. The business will confirm details directly.</div><button class="btn primary" type="submit">Prepare WhatsApp request →</button></form></div></section>
      <section class="utility" id="services"><div class="section-head"><h2>What to expect</h2><p>A clear digital front door makes the useful things easy to find: what’s offered, when to come, and how to ask.</p></div><div class="services-grid">${c.services.map((s,i)=>`<article class="service-card"><span>0${i+1}</span><strong>${esc(s)}</strong><span>Ask the team for current options and pricing →</span></article>`).join('')}</div></section>
      <section class="contact-block"><h2>Ready when<br>you are.</h2><div class="contact-details"><p>${esc(b.address)}<br>${esc(b.hours)}</p><a class="btn" href="${wa(b,`Hi ${b.name}, I would like to make an enquiry.`)}" target="_blank" rel="noreferrer">Message ${esc(b.name)} →</a></div></section>
      <footer class="concept-footer"><span>Concept only · not an official business website</span><a class="back-index" href="index.html">← Return to Local 30 index</a></footer>
    </div>`;
    document.querySelector('#enquiryForm').addEventListener('submit',e=>{e.preventDefault();const vals=['f1','f2','f3'].map(x=>document.getElementById(x)?.value||'Not specified');const msg=`Hi ${b.name}, I would like to enquire via the concept website.\n\n${vals[0]}\n${vals[1]}\n${vals[2]}`;window.open(wa(b,msg),'_blank','noopener')});
  }
  initDirectory(); if(!window.LOCAL30_CUSTOM_CONCEPT) initConcept();
})();
