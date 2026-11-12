/* Kon Store landing interactions (generated from theme-prototype/src.html) */
(function(){
  var $=function(id){return document.getElementById(id)},IMG=window.KON_IMG||{};
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var APPS={
    snapchat:['سناب بلس',['حفظ الصور والمقاطع والستوريات','مشاهدة الستوري دون ظهور المشاهدة، في الإصدارات الداعمة','خيارات إضافية للتحكم في إشعارات المحادثات','تخصيص واجهة التطبيق والألوان','أدوات إضافية لإدارة الوسائط والمحادثات','مميزات أخرى تختلف حسب نسخة التطبيق']],
    whatsapp:['واتساب بلس',['تخصيص ألوان وثيمات المحادثات','خيارات إضافية لإعدادات الخصوصية','إرسال الوسائط بخيارات جودة مختلفة','التحكم في بعض إعدادات ظهور الحالة','تخصيص الخطوط والواجهة','أدوات إضافية لإدارة المحادثات']],
    instagram:['إنستقرام بلس',['تحميل الصور والفيديوهات والريلز','حفظ الستوري مباشرة على الجهاز','مشاهدة القصص دون ظهور المشاهدة','خيارات إضافية للتحكم في تشغيل المقاطع','نسخ النصوص والتعليقات بسهولة','تخصيص بعض إعدادات واجهة التطبيق']],
    tiktok:['تيك توك بلس',['تحميل المقاطع دون علامة مائية، حسب النسخة','التحكم في تشغيل الفيديوهات','خيارات إضافية لإدارة الإعلانات داخل التطبيق','حفظ الصور والمقاطع المتاحة','تخصيص بعض إعدادات المشاهدة','أدوات إضافية لتجربة استخدام أكثر مرونة']],
    youtube:['يوتيوب بلس',['تشغيل الفيديوهات في الخلفية','وضع صورة داخل صورة (PiP)','خيارات لتقليل الإعلانات','التحكم في جودة الفيديو والتشغيل','تخصيص واجهة المشاهدة','مميزات إضافية تختلف حسب الإصدار']],
    x:['إكس بلس',['تحميل الفيديوهات والصور من التغريدات','إخفاء الإعلانات والتغريدات المروّجة','نسخ النصوص بسهولة','تخصيص واجهة التطبيق']],
    twitter:['تويتر بلس',['يرجّع شكل تويتر الكلاسيكي بالعصفور الأزرق','تحميل الفيديوهات والصور','إخفاء الإعلانات','تخصيص الواجهة والخطوط']],
    facebook:['فيسبوك بلس',['تحميل الفيديوهات والريلز','حفظ الصور والقصص','إخفاء الإعلانات','خيارات إضافية للخصوصية']],
    wabusiness:['واتساب أعمال بلس',['تخصيص ألوان وثيمات المحادثات','خيارات إضافية للخصوصية','التحكم في ظهور الحالة','إرسال الوسائط بجودة أعلى']],
    ytmusic:['يوتيوب ميوزك بلس',['تشغيل الأغاني في الخلفية','تخطي الإعلانات','تحميل الأغاني للاستماع بدون إنترنت','التحكم في جودة الصوت']],
    twitch:['تويتش بلس',['مشاهدة البث بدون إعلانات','تشغيل البث في الخلفية','وضع صورة داخل صورة','التحكم في جودة البث']],
    minichat:['ميني شات بلس',['مميزات إضافية مفتوحة داخل التطبيق','تقليل الإعلانات','تخصيص بعض الإعدادات']],
    jodel:['جودل بلس',['تصفح منشورات مدن ثانية','حفظ الصور والمنشورات','تقليل الإعلانات']]
  };


  // hero orbit + tilt
  var orb=$('orbit'),okeys=['snapchat','instagram','youtube','whatsapp','tiktok','x'],sats=[];
  okeys.forEach(function(k){var d=document.createElement('div');d.className='sat';d.innerHTML='<img src="'+IMG[k]+'" alt="">';orb.appendChild(d);sats.push(d)});
  function orbit(ts){var w=orb.clientWidth,hh=orb.clientHeight;sats.forEach(function(d,i){var a=ts/5200+i*(Math.PI*2/sats.length),x=w/2+Math.cos(a)*w/2,y=hh/2+Math.sin(a)*hh/2,s=.75+.25*(Math.sin(a)+1)/2;d.style.transform='translate('+x+'px,'+y+'px) scale('+s+')';d.style.zIndex=Math.sin(a)>0?3:1;d.style.opacity=.5+.5*(Math.sin(a)+1)/2});if(!reduce)requestAnimationFrame(orbit)}
  requestAnimationFrame(orbit);
  var art=$('heroArt');if(IMG.herochar_is_logo)document.querySelector('.hc-art').classList.add('logo-mode');
  if(!reduce){addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;art.style.transform='perspective(900px) rotateY('+(x*10)+'deg) rotateX('+(-y*8)+'deg)'});
    addEventListener('deviceorientation',function(e){if(e.gamma==null)return;art.style.transform='perspective(900px) rotateY('+Math.max(-8,Math.min(8,e.gamma/4))+'deg) rotateX('+Math.max(-6,Math.min(6,(e.beta-45)/6))+'deg)'})}

  // hero embers
  var ec=$('embers'),eg=ec.getContext('2d'),E=[];
  function sizeE(){ec.width=ec.clientWidth*devicePixelRatio;ec.height=ec.clientHeight*devicePixelRatio}
  sizeE();addEventListener('resize',sizeE);
  for(var q=0;q<46;q++)E.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.8,v:.0006+Math.random()*.0016,w:Math.random()*6.28});
  function ember(){eg.clearRect(0,0,ec.width,ec.height);E.forEach(function(p){p.y-=p.v;p.w+=.02;if(p.y<-.05){p.y=1.05;p.x=Math.random()}
    var x=(p.x+Math.sin(p.w)*.01)*ec.width,y=p.y*ec.height,a=Math.min(1,(1-p.y)*1.6)*Math.min(1,p.y*3);
    eg.beginPath();eg.arc(x,y,p.r*devicePixelRatio,0,6.28);eg.fillStyle='rgba(255,'+(90+Math.round(p.r*40))+',110,'+(a*.8)+')';eg.shadowColor='rgba(255,45,78,.9)';eg.shadowBlur=8;eg.fill()});
    if(!reduce)requestAnimationFrame(ember)}
  ember();



  // add to cart -> real Salla cart, then straight to checkout
  var ROOT=document.querySelector('.kon-home'),tt;
  function toast(msg){var t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('show')},2200)}
  ROOT.addEventListener('click',function(e){var b=e.target.closest('.add');if(!b)return;e.preventDefault();
    if(b.id==='bbGo'){var i=+(($('pkSwitch').querySelector('[aria-selected="true"]')||{}).dataset||{}).i||0;b=document.querySelectorAll('.pkc .add')[i]||b}
    var id=b.dataset.id,label=b.innerHTML;if(!id||b.classList.contains('busy'))return;
    b.classList.add('busy');
    var done=function(){b.classList.remove('busy');b.textContent='انضافت ✓';b.classList.add('done');toast(b.dataset.n+' انضافت للسلة');
      setTimeout(function(){location.href=(window.salla&&salla.url&&salla.url.get('cart'))||ROOT.dataset.cartUrl||'/cart'},700)};
    var fail=function(){b.classList.remove('busy');b.innerHTML=label;toast('صار خطأ، جرّب مرة ثانية')};
    if(window.salla&&salla.cart&&salla.cart.addItem){salla.cart.addItem({id:id,quantity:1}).then(done).catch(fail)}
    else{location.href='/p'+id}
  });

  // packages: switch + swipe between the two cards
  var sw=$('pkSwitch'),cards=[].slice.call(document.querySelectorAll('.pkc')),cur=0,busy=false;
  function go(i){if(i===cur||busy)return;busy=true;var a=cards[cur],b=cards[i];
    sw.classList.toggle('b',i===1);sw.querySelectorAll('button').forEach(function(x,j){x.setAttribute('aria-selected',j===i)});
    a.classList.add('out');setTimeout(function(){a.classList.remove('out');a.classList.add('back');b.classList.remove('back');cur=i;busy=false},reduce?0:420)}
  sw.addEventListener('click',function(e){var bt=e.target.closest('button');if(bt)go(+bt.dataset.i)});
  var sx=null,st=$('pkStage');
  st.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  st.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(cur?0:1);sx=null});
  st.addEventListener('click',function(e){if(!e.target.closest('.go')&&e.target.closest('.pkc'))go(cur?0:1)});



  // app lanes: two rows of real icons moving in opposite directions
  var laneKeys=['instagram','x','snapchat','facebook','tiktok','twitch','youtube','whatsapp','ytmusic','twitter','wabusiness','minichat','jodel'];
  function fillLane(el,ks){var h='';ks.forEach(function(k){h+='<button class="app-i" type="button" data-k="'+k+'" aria-label="'+APPS[k][0]+'"><img src="'+IMG[k]+'" alt=""></button>'});el.innerHTML=h+h+h}
  fillLane($('lane1'),laneKeys.slice(0,7));fillLane($('lane2'),laneKeys.slice(6).concat(laneKeys.slice(0,1)));
  var fx=$('fx'),ghost=$('ghost'),hex=$('hex'),apc=$('apc'),lanes=$('lanes'),openBtn=null,openKey=null,busyFx=false;
  function center(sz){return {x:innerWidth/2-sz/2,y:innerHeight/2-sz/2}}
  function openApp(btn){if(busyFx)return;busyFx=true;openBtn=btn;openKey=btn.dataset.k;var k=openKey,r=btn.getBoundingClientRect(),big=Math.min(150,innerWidth*.36),c=center(big);
    lanes.classList.add('paused');fx.classList.add('on');fx.setAttribute('aria-hidden','false');btn.classList.add('gone');
    $('apcImg').src=IMG[k];$('apcName').textContent=APPS[k][0];$('apcCnt').textContent=APPS[k][1].length;
    $('apcTop').innerHTML=APPS[k][1].slice(0,3).map(function(f){return '<li>'+f+'</li>'}).join('');
    $('apcAll').innerHTML=APPS[k][1].map(function(f){return '<li>'+f+'</li>'}).join('');
    $('apcMore').hidden=APPS[k][1].length<=3;apc.classList.remove('full');$('apcMoreT').textContent='استكشف باقي المزايا';
    ghost.src=IMG[k];ghost.style.width=ghost.style.height=r.width+'px';
    var T=reduce?1:1;
    var a1=ghost.animate([{transform:'translate('+r.left+'px,'+r.top+'px) scale(1)',opacity:1},{transform:'translate('+(r.left+(c.x-r.left)*.5)+'px,'+(r.top-60)+'px) rotate(-8deg) scale('+(big/r.width*.8)+')',opacity:1,offset:.55},{transform:'translate('+c.x+'px,'+c.y+'px) scale('+(big/r.width)+')',opacity:1}],{duration:reduce?1:620,easing:'cubic-bezier(.3,.8,.3,1)',fill:'forwards'});
    hex.classList.remove('go');void hex.offsetWidth;if(!reduce)hex.classList.add('go');
    setTimeout(function(){apc.classList.add('on');
      var ir=$('apcImg').getBoundingClientRect();
      ghost.animate([{transform:'translate('+c.x+'px,'+c.y+'px) scale('+(big/r.width)+')',opacity:1},{transform:'translate('+ir.left+'px,'+ir.top+'px) scale('+(ir.width/r.width)+')',opacity:1,offset:.85},{transform:'translate('+ir.left+'px,'+ir.top+'px) scale('+(ir.width/r.width)+')',opacity:0}],{duration:reduce?1:520,easing:'cubic-bezier(.4,.1,.2,1)',fill:'forwards'});
      stagger('#apcTop li',420,140);busyFx=false;$('apcX').focus()},reduce?0:900)}
  function stagger(sel,d0,step){document.querySelectorAll(sel).forEach(function(li,i){li.classList.remove('in');setTimeout(function(){li.classList.add('in')},reduce?0:d0+i*step)})}
  function closeApp(){if(!openBtn||busyFx)return;busyFx=true;var btn=openBtn,r=btn.getBoundingClientRect(),ir=$('apcImg').getBoundingClientRect(),w=r.width;
    ghost.style.width=ghost.style.height=w+'px';apc.classList.remove('on');
    ghost.animate([{transform:'translate('+ir.left+'px,'+ir.top+'px) scale('+(ir.width/w)+')',opacity:1},{transform:'translate('+r.left+'px,'+r.top+'px) scale(1)',opacity:1}],{duration:reduce?1:520,easing:'cubic-bezier(.3,.8,.3,1)',fill:'forwards'}).onfinish=function(){
      btn.classList.remove('gone');ghost.getAnimations().forEach(function(a){a.cancel()});ghost.style.opacity=0;fx.classList.remove('on');fx.setAttribute('aria-hidden','true');lanes.classList.remove('paused');openBtn=null;busyFx=false;btn.focus()}}
  lanes.addEventListener('click',function(e){var b=e.target.closest('.app-i');if(b)openApp(b)});
  $('apcX').onclick=closeApp;$('fxBg').onclick=closeApp;document.addEventListener('keydown',function(e){if(e.key==='Escape')closeApp()});
  $('apcMore').onclick=function(){var full=apc.classList.toggle('full');$('apcMoreT').textContent=full?'إخفاء باقي المزايا':'استكشف باقي المزايا';
    if(full)stagger('#apcAll li',40,55);else stagger('#apcTop li',40,110);apc.scrollTop=0};



  // phone settings demo
  var dKeys=['snapchat','whatsapp','instagram','tiktok','youtube','x','facebook','ytmusic','twitch'],dock=$('dock'),dT=[],dIdx=0,touched=false;
  dKeys.forEach(function(k,i){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-label',APPS[k][0]);b.setAttribute('aria-selected',i===0);b.innerHTML='<img src="'+IMG[k]+'" alt="">';b.onclick=function(){touched=true;showD(i)};dock.appendChild(b)});
  function showD(i){dIdx=i;var k=dKeys[i];dock.querySelectorAll('button').forEach(function(x,j){x.setAttribute('aria-selected',j===i)});dT.forEach(clearTimeout);dT=[];
    $('dImg').src=IMG[k];$('dName').textContent=APPS[k][0];var f=APPS[k][1];
    $('dRows').innerHTML=f.slice(0,5).map(function(t){return '<div class="trow"><span>'+t+'</span><span class="sw" aria-hidden="true"></span></div>'}).join('');
    $('dFoot').textContent=f.length+' مميزات مفعّلة في '+APPS[k][0];
    $('dRows').querySelectorAll('.trow').forEach(function(r,j){if(reduce)r.classList.add('on');else dT.push(setTimeout(function(){r.classList.add('on')},300+j*320))})}
  showD(0);
  setInterval(function(){if(reduce||touched)return;var r=dock.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)showD((dIdx+1)%dKeys.length)},4600);

  // drag compare
  var X='<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></i>',V='<i><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg></i>';
  var A=['حفظ الستوري ممنوع','مشاهدتك تبان للكل','يوقف لما تقفل الشاشة','تحميل بعلامة مائية','نفس الشكل للكل'],B=['حفظ الستوري والمقاطع','مشاهدة بدون ما تنكشف','تشغيل في الخلفية','تحميل بدون علامة مائية','ثيمات وألوان على كيفك'];
  $('cmpA').innerHTML=A.map(function(t){return '<li>'+X+t+'</li>'}).join('');$('cmpB').innerHTML=B.map(function(t){return '<li>'+V+t+'</li>'}).join('');
  var cmp=$('cmp'),drag=false,moved=false;
  function setCut(px){var r=cmp.getBoundingClientRect(),p=Math.max(4,Math.min(96,(px-r.left)/r.width*100));cmp.style.setProperty('--cut',p+'%')}
  cmp.addEventListener('pointerdown',function(e){drag=true;moved=true;cmp.setPointerCapture(e.pointerId);setCut(e.clientX)});
  cmp.addEventListener('pointermove',function(e){if(drag)setCut(e.clientX)});
  cmp.addEventListener('pointerup',function(){drag=false});cmp.addEventListener('pointercancel',function(){drag=false});
  (function hintLoop(t0){if(reduce)return;function f(t){if(moved)return;var p=50+Math.sin((t-t0)/800)*8;cmp.style.setProperty('--cut',p+'%');requestAnimationFrame(f)}requestAnimationFrame(f)})(performance.now());

  // delivery: notification then chat
  // delivery chat plays when on screen
  var msgs=[].slice.call(document.querySelectorAll('#chatBody .msg')),typing=$('typing'),playing=false;
  function play(){if(playing)return;playing=true;var nf=document.getElementById('notif');nf.classList.add('show');setTimeout(function(){nf.classList.remove('show')},2600);msgs.forEach(function(m){m.classList.remove('show')});typing.classList.remove('show');
    var seq=[[900,function(){msgs[0].classList.add('show')}],[700,function(){typing.classList.add('show')}],[1700,function(){typing.classList.remove('show');msgs[1].classList.add('show')}],[2500,function(){msgs[2].classList.add('show')}],[3300,function(){msgs[3].classList.add('show')}],[9000,function(){playing=false;if(onScreen)play()}]];
    seq.forEach(function(s){setTimeout(s[1],s[0])})}
  var onScreen=false;if(reduce)msgs.forEach(function(m){m.classList.add('show')});else{msgs.forEach(function(m){m.classList.add('show')});new IntersectionObserver(function(es){es.forEach(function(e){onScreen=e.isIntersecting;if(onScreen)play()})},{threshold:.5}).observe($('chat'))}



  // reviews: two moving rows
  var RV=[['تركي الحربي','من افضل متاجر البلس، خدمة العملاء عندهم شي اخر، والبلس وصلني بخمس دقايق فقط'],['عبدالمجيد العقيلي','افضل واروع اشتراك وسريع جدا في الطلب، انصح فيه بشده ولو فيه اكثر من ٥ نجوم يستاهل'],['حكيم','اشتراك تاريييييخييييييي شغال معاي من بريطانيا ولاغلطه ماشاءالله'],['بدر لافي','قسم بالله ان المتجر هذا افضل متجر من واقع تجربة، متخيلين ارسل لهم الساعه ٣ الليل يردون !!']];
  function rvc(r){return '<article class="rvc"><q>'+r[1]+'</q><div class="who"><span class="av">'+r[0].charAt(0)+'</span><div>'+r[0]+'<small>✓ عميل كون</small></div><span class="st" aria-label="5 نجوم">★★★★★</span></div></article>'}
  var ra=RV.map(rvc).join(''),rb=RV.slice(2).concat(RV.slice(0,2)).map(rvc).join('');
  $('rvRows').innerHTML='<div class="rv-row">'+ra+ra+ra+'</div><div class="rv-row r2">'+rb+rb+rb+'</div>';

  // faq chat
  var FAQ=[['كيف أطلب من المتجر؟','اختر باقتك، أضفها للسلة، وأكمل الدفع. بعدها مباشرة يوصلك كود التفعيل وطريقة التثبيت على جوالك وإيميلك.'],['كم مدة الاشتراك والضمان؟','الاشتراك سنة كاملة، مع ضمان 6 أشهر من تاريخ الشراء وفق سياسة الضمان.'],['يحتاج جلبريك أو كمبيوتر؟','لا، التثبيت يكون من جوالك نفسه عن طريق ملف تعريف من متصفح Safari.'],['وش أسوي إذا توقف التطبيق؟','تواصل معنا على الواتساب. وإذا انلغت الشهادة خلال فترة الضمان، نوفر لك اشتراك بديل وفق شروط الضمان.'],['هل الدفع آمن؟','الدفع يتم عن طريق منصة سلة المشفّرة، وبيانات بطاقتك ما تنحفظ عندنا.']];
  var body=$('askBody'),qs=$('qs'),askBusy=false;
  function addB(cls,txt){var d=document.createElement('div');d.className='bub '+cls;d.textContent=txt;body.appendChild(d);body.scrollTop=body.scrollHeight;return d}
  function ask(i,instant){if(askBusy)return;askBusy=true;qs.children[i].disabled=true;addB('me',FAQ[i][0]);
    var ty=document.createElement('div');ty.className='typing2';ty.innerHTML='<i></i><i></i><i></i>';
    setTimeout(function(){body.appendChild(ty);body.scrollTop=body.scrollHeight},instant||reduce?0:250);
    setTimeout(function(){ty.remove();addB('us',FAQ[i][1]);askBusy=false},instant||reduce?0:1100)}
  FAQ.forEach(function(q,i){var b=document.createElement('button');b.type='button';b.textContent=q[0];b.onclick=function(){ask(i)};qs.appendChild(b)});
  addB('us','هلا فيك 👋 اختر سؤالك من تحت ونجاوبك على طول.');ask(0,true);


  // easy steps: draw the wire, then cycle the active tile
  var easy=$('easy'),ess=easy.querySelectorAll('.es'),ei=0,eT=null;
  new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){easy.classList.add('on');if(!eT&&!reduce){eT=setInterval(function(){ess.forEach(function(x,i){x.classList.toggle('act',i===ei)});ei=(ei+1)%3},1400)}}})},{threshold:.4}).observe(easy);
  if(reduce)easy.classList.add('on');
  var dets=document.querySelectorAll('.det'),di=0;if(!reduce)setInterval(function(){dets.forEach(function(x,i){x.classList.toggle('act',i===di)});di=(di+1)%3},1800);

  // sticky buy bar follows the chosen plan
  var bb=$('buybar'),plansEl=$('plans');
  function syncBar(){var i=+((document.querySelector('.pk-switch button[aria-selected="true"]')||{}).dataset||{}).i||0;
    $('bbImg').src=i?IMG.android:IMG.iphone;$('bbName').textContent=i?'باقة بلس للأندرويد':'باقة بلس للآيفون';$('bbPrice').textContent=i?'39.99':'69.99'}
  document.querySelector('.pk-switch').addEventListener('click',function(){setTimeout(syncBar,50)});
  addEventListener('scroll',function(){var r=plansEl.getBoundingClientRect(),past=r.bottom<80,ftr=(document.querySelector('footer')||document.body).getBoundingClientRect().top<innerHeight;var show=past&&!ftr;bb.classList.toggle('show',show);document.querySelector('.wa').style.bottom=show?'calc(92px + env(safe-area-inset-bottom,0px))':'';bb.setAttribute('aria-hidden',!show)},{passive:true});

  // ripples on buttons
  document.addEventListener('pointerdown',function(e){var b=e.target.closest('.btn,.go,.add,.pk-switch button,.qs button,.buybar a,.dock button');if(!b||reduce)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),sp=document.createElement('span');sp.className='rip';sp.style.width=sp.style.height=d+'px';sp.style.left=(e.clientX-r.left-d/2)+'px';sp.style.top=(e.clientY-r.top-d/2)+'px';if(getComputedStyle(b).position==='static')b.style.position='relative';b.style.overflow='hidden';b.appendChild(sp);setTimeout(function(){sp.remove()},650)});

  // confetti + haptic on add to cart
  ROOT.addEventListener('click',function(e){var b=e.target.closest('.add');if(!b)return;try{navigator.vibrate&&navigator.vibrate(18)}catch(_){}
    if(reduce)return;var r=b.getBoundingClientRect(),cx0=r.left+r.width/2,cy0=r.top+r.height/2,cols=['#ff2d4e','#ffd5dc','#e6c48f','#ffffff','#ff8a9c'];
    for(var q=0;q<26;q++){(function(){var c=document.createElement('span');c.className='conf';c.style.background=cols[Math.floor(Math.random()*cols.length)];c.style.left=cx0+'px';c.style.top=cy0+'px';ROOT.appendChild(c);
      var a=Math.random()*Math.PI*2,v=80+Math.random()*140,dx=Math.cos(a)*v,dy=Math.sin(a)*v-120,rot=Math.random()*720-360;
      c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+dx+'px,'+(dy+220)+'px) rotate('+rot+'deg)',opacity:0}],{duration:900+Math.random()*500,easing:'cubic-bezier(.2,.7,.4,1)'}).onfinish=function(){c.remove()}})()}});

  // spotlight that follows the mouse, and tilt on package cards
  var spot=$('spot');addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||reduce)return;spot.classList.add('on');spot.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
  document.querySelectorAll('.pkc,.det').forEach(function(c){c.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||reduce)return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=(c.classList.contains('back')?'':'')+'perspective(800px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});

  // lift-in + progress + nav
  var lifts=document.querySelectorAll('.lift.pre');
  if(reduce)lifts.forEach(function(l){l.classList.remove('pre')});
  else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.2});lifts.forEach(function(l){io.observe(l)})}
  var prog=$('prog');addEventListener('scroll',function(){var m=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(m>0?scrollY/m:0)+')'},{passive:true});
})();
