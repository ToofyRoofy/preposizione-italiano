/* ─── CONTEXT_SENTENCES ─── */
const CONTEXT_SENTENCES = [
  // Stage 1 — IL
  {blank:'Vado ___ bar.',             full:'Vado al bar.',              answer:'al',    prep:'a',  art:'il',  ar:'أذهب إلى الكافيه',       stage:1},
  {blank:'Torno ___ lavoro.',         full:'Torno dal lavoro.',         answer:'dal',   prep:'da', art:'il',  ar:'أعود من العمل',           stage:1},
  {blank:'Il libro è ___ tavolo.',    full:'Il libro è sul tavolo.',    answer:'sul',   prep:'su', art:'il',  ar:'الكتاب على الطاولة',      stage:1},
  {blank:'Parlo ___ professore.',     full:'Parlo del professore.',     answer:'del',   prep:'di', art:'il',  ar:'أتكلم عن الأستاذ',        stage:1},
  {blank:'Vado ___ parco.',           full:'Vado nel parco.',           answer:'nel',   prep:'in', art:'il',  ar:'أذهب في الحديقة',         stage:1},
  // Stage 2 — LA + L'
  {blank:'Vado ___ stazione.',        full:'Vado alla stazione.',       answer:'alla',  prep:'a',  art:'la',  ar:'أذهب إلى المحطة',         stage:2},
  {blank:'Vengo ___ scuola.',         full:'Vengo dalla scuola.',       answer:'dalla', prep:'da', art:'la',  ar:'أجيء من المدرسة',         stage:2},
  {blank:'Il telefono è ___ borsa.',  full:"Il telefono è nella borsa.",answer:'nella', prep:'in', art:'la',  ar:'الهاتف في الحقيبة',       stage:2},
  {blank:'Il gatto è ___ sedia.',     full:"Il gatto è sulla sedia.",   answer:'sulla', prep:'su', art:'la',  ar:'القطة على الكرسي',        stage:2},
  {blank:"Vado ___ università.",      full:"Vado all'università.",      answer:"all'",  prep:'a',  art:"l'",  ar:'أذهب إلى الجامعة',        stage:2},
  {blank:"Torno ___ ospedale.",       full:"Torno dall'ospedale.",      answer:"dall'", prep:'da', art:"l'",  ar:'أعود من المستشفى',        stage:2},
  {blank:"Sono ___ appartamento.",    full:"Sono nell'appartamento.",   answer:"nell'", prep:'in', art:"l'",  ar:'أنا في الشقة',            stage:2},
  {blank:"Il telefono è ___ autobus.",full:"Il telefono è sull'autobus.",answer:"sull'",prep:'su', art:"l'",  ar:'الهاتف على الأتوبيس',    stage:2},
  // Stage 3 — LO
  {blank:'Vado ___ stadio.',          full:'Vado allo stadio.',         answer:'allo',  prep:'a',  art:'lo',  ar:'أذهب إلى الملعب',         stage:3},
  {blank:'Torno ___ stadio.',         full:'Torno dallo stadio.',       answer:'dallo', prep:'da', art:'lo',  ar:'أعود من الملعب',          stage:3},
  {blank:"L'immagine è ___ schermo.", full:"L'immagine è sullo schermo.",answer:'sullo',prep:'su', art:'lo',  ar:'الصورة على الشاشة',       stage:3},
  {blank:'I colori ___ zaino sono belli.', full:'I colori dello zaino sono belli.', answer:'dello', prep:'di', art:'lo', ar:'ألوان الحقيبة جميلة', stage:3},
  // Stage 4 — الجمع
  {blank:'Parlo ___ amici.',          full:'Parlo degli amici.',        answer:'degli', prep:'di', art:'gli', ar:'أتكلم عن الأصدقاء',       stage:4},
  {blank:'Vado ___ negozi.',          full:'Vado ai negozi.',           answer:'ai',    prep:'a',  art:'i',   ar:'أذهب إلى المحلات',        stage:4},
  {blank:'Vado ___ feste.',           full:'Vado alle feste.',          answer:'alle',  prep:'a',  art:'le',  ar:'أذهب إلى الحفلات',        stage:4},
  {blank:'Torno ___ ragazzi.',        full:'Torno dai ragazzi.',        answer:'dai',   prep:'da', art:'i',   ar:'أعود من الشباب',          stage:4},
  {blank:'Abito ___ case nuove.',     full:'Abito nelle case nuove.',   answer:'nelle', prep:'in', art:'le',  ar:'أسكن في المنازل الجديدة', stage:4},
  {blank:'I libri sono ___ scaffali.',full:'I libri sono sugli scaffali.',answer:'sugli',prep:'su',art:'gli',  ar:'الكتب على الرفوف',        stage:4},
  // Stage 5 — مختلط
  {blank:'Arrivo ___ aeroporto.',     full:"Arrivo all'aeroporto.",     answer:"all'",  prep:'a',  art:"l'",  ar:'أصل إلى المطار',          stage:5},
  {blank:'Vengo ___ mercato.',        full:'Vengo dal mercato.',        answer:'dal',   prep:'da', art:'il',  ar:'أجيء من السوق',           stage:5},
];

/* ─── COMMON_MISTAKES ─── */
const COMMON_MISTAKES = [
  {wrong:"in il parco",  correct:"nel parco",    rule:"in + il = nel دائماً، لا تُكتبان منفصلتين",          tip:"حروف الجر a/da/in/su/di تتدمج مع il/lo/la/l'/i/gli/le وجوباً"},
  {wrong:"a il bar",     correct:"al bar",        rule:"a + il = al دائماً",                                  tip:"الدمج إجباري وليس اختيارياً في الإيطالية"},
  {wrong:"di il pane",   correct:"del pane",      rule:"di + il = del",                                       tip:"di تتدمج مع كل أدوات التعريف"},
  {wrong:"su la sedia",  correct:"sulla sedia",   rule:"su + la = sulla",                                     tip:"su تتدمج مع la وتصبح sulla"},
  {wrong:"da il dottore",correct:"dal dottore",   rule:"da + il = dal",                                       tip:"da تتدمج مع il وتصبح dal"},
  {wrong:"col ragazzo",  correct:"con il ragazzo",rule:"con لا تتدمج في الإيطالية الحديثة",                   tip:"col شكل قديم لا يُستخدم اليوم — استخدم con il دائماً"},
  {wrong:"alle ragazzi", correct:"ai ragazzi",    rule:"alle = a + le (مؤنث جمع) — ragazzi مذكر جمع",        tip:"ai للجمع المذكر العادي، alle للجمع المؤنث فقط"},
  {wrong:"ai ragazze",   correct:"alle ragazze",  rule:"ai = a + i (مذكر جمع) — ragazze مؤنث جمع",           tip:"alle للجمع المؤنث، ai للجمع المذكر"},
  {wrong:"al studente",  correct:"allo studente", rule:"studente يبدأ بـ st → نستخدم lo وليس il",             tip:"الكلمات التي تبدأ بـ s+ساكن أو z تأخذ lo/allo/dello/..."},
  {wrong:"degli ragazze",correct:"delle ragazze", rule:"degli = di + gli (مذكر) — ragazze مؤنث جمع",          tip:"delle للجمع المؤنث، degli للجمع المذكر المتحرك أو s+ساكن"},
  {wrong:"a il mercato", correct:"al mercato",    rule:"a + il = al — الدمج إجباري دائماً",                   tip:"لا يمكن كتابة حروف الجر الخمسة مع أدوات التعريف منفصلة"},
];
