/* ─── SET I: أدوات الاستفهام ─── */

/*
  كل chunk يمثل أداة استفهام واحدة مع:
  - المعنى بالعربي
  - ملاحظة نحوية
  - أمثلة جمل في سياق
*/
const SET_I_CHUNKS = [
  {
    it: 'QUANDO',
    ar: 'متى',
    note: 'للسؤال عن الزمن — لا تتغير ولا تتدمج مع شيء',
    examples: [
      {it:'Quando arrivi?',       ar:'متى تصل؟'},
      {it:'Quando parte il treno?',ar:'متى يغادر القطار؟'},
      {it:'Quando sei libero?',   ar:'متى تكون فاضياً؟'},
      {it:'Quando inizia il film?',ar:'متى يبدأ الفيلم؟'},
    ]
  },
  {
    it: 'DOVE',
    ar: 'أين',
    note: 'للسؤال عن المكان — مع الفعل essere يصبح غالباً "dov\'è"',
    examples: [
      {it:"Dov'è la stazione?",   ar:'أين المحطة؟'},
      {it:'Dove abiti?',          ar:'أين تسكن؟'},
      {it:'Dove lavori?',         ar:'أين تعمل؟'},
      {it:'Dove andiamo stasera?',ar:'أين نذهب الليلة؟'},
    ]
  },
  {
    it: 'COME',
    ar: 'كيف',
    note: 'للسؤال عن الحال أو الطريقة — مع essere: "com\'è"',
    examples: [
      {it:'Come stai?',           ar:'كيف حالك؟'},
      {it:"Com'è il tempo?",      ar:'كيف الطقس؟'},
      {it:'Come si chiama?',      ar:'ما اسمه؟ (كيف يُسمى؟)'},
      {it:'Come arrivo lì?',      ar:'كيف أصل هناك؟'},
    ]
  },
  {
    it: 'COSA / CHE COSA',
    ar: 'ماذا / ما',
    note: 'للسؤال عن الشيء — cosa وche cosa وche كلهم صحيحون، cosa الأكثر شيوعاً في المحادثة',
    examples: [
      {it:'Cosa fai oggi?',       ar:'ماذا تفعل اليوم؟'},
      {it:'Cosa mangi?',          ar:'ماذا تأكل؟'},
      {it:'Che cosa hai detto?',  ar:'ماذا قلت؟'},
      {it:'Cosa c\'è in borsa?',  ar:'ماذا يوجد في الحقيبة؟'},
    ]
  },
  {
    it: 'CHI',
    ar: 'من',
    note: 'للسؤال عن الشخص — لا يتغير للمفرد أو الجمع',
    examples: [
      {it:'Chi sei?',             ar:'من أنت؟'},
      {it:'Chi viene alla festa?',ar:'من يجيء للحفلة؟'},
      {it:'Con chi parli?',       ar:'مع من تتكلم؟'},
      {it:'Di chi è questo libro?',ar:'لمن هذا الكتاب؟'},
    ]
  },
  {
    it: 'QUANTO / QUANTA / QUANTI / QUANTE',
    ar: 'كم / كم من',
    note: 'يتفق مع جنس وعدد الاسم الذي يليه — quanto (م.مفرد) / quanta (م.مفردة) / quanti (م.جمع) / quante (م.جمع)',
    examples: [
      {it:'Quanto costa?',        ar:'بكم؟ (كم تكلف؟)'},
      {it:'Quanti anni hai?',     ar:'كم عمرك؟'},
      {it:'Quante persone ci sono?',ar:'كم شخصاً يوجد؟'},
      {it:'Quanta acqua vuoi?',   ar:'كم تريد من الماء؟'},
    ]
  },
  {
    it: 'PERCHÉ',
    ar: 'لماذا / لأن',
    note: 'يُستخدم للسؤال (لماذا؟) وللإجابة (لأن...) في نفس الوقت — الضغط على الحرف الأخير مهم',
    examples: [
      {it:'Perché studi italiano?',ar:'لماذا تدرس الإيطالية؟'},
      {it:'Perché sei triste?',   ar:'لماذا أنت حزين؟'},
      {it:'Perché non vieni?',    ar:'لماذا لا تأتي؟'},
      {it:'Perché sono stanco.',  ar:'لأنني تعبان. (إجابة)'},
    ]
  },
  {
    it: 'QUALE / QUALI',
    ar: 'أي / أيّ',
    note: 'للاختيار بين خيارات — quale (مفرد) / quali (جمع) — لا يتغير حسب الجنس',
    examples: [
      {it:'Quale preferisci?',    ar:'أيهما تفضل؟'},
      {it:'Quale è il tuo numero?',ar:'ما هو رقمك؟'},
      {it:'Quali lingue parli?',  ar:'أي لغات تتكلم؟'},
      {it:'Quale strada prendo?', ar:'أي طريق آخذ؟'},
    ]
  },
];

/* ─── INTERROGATIVE_SENTENCES: جمل الفراغ للتدريب ─── */
const INTERROGATIVE_SENTENCES = [
  // Stage 1 — quando / dove
  {blank:'___ arrivi a Roma?',           full:'Quando arrivi a Roma?',           answer:'Quando',  word:'quando', ar:'متى تصل إلى روما؟',             stage:1},
  {blank:"___ è la stazione?",           full:"Dov'è la stazione?",              answer:"Dov'",    word:'dove',   ar:'أين المحطة؟',                    stage:1},
  {blank:'___ parte il treno?',          full:'Quando parte il treno?',          answer:'Quando',  word:'quando', ar:'متى يغادر القطار؟',              stage:1},
  {blank:'___ abiti?',                   full:'Dove abiti?',                     answer:'Dove',    word:'dove',   ar:'أين تسكن؟',                      stage:1},
  {blank:'___ inizia il film?',          full:'Quando inizia il film?',          answer:'Quando',  word:'quando', ar:'متى يبدأ الفيلم؟',               stage:1},
  // Stage 2 — come / cosa
  {blank:'___ stai?',                    full:'Come stai?',                      answer:'Come',    word:'come',   ar:'كيف حالك؟',                      stage:2},
  {blank:'___ fai oggi?',                full:'Cosa fai oggi?',                  answer:'Cosa',    word:'cosa',   ar:'ماذا تفعل اليوم؟',               stage:2},
  {blank:"___ è il tempo?",              full:"Com'è il tempo?",                 answer:"Com'",    word:'come',   ar:'كيف الطقس؟',                     stage:2},
  {blank:'___ mangi a colazione?',       full:'Cosa mangi a colazione?',         answer:'Cosa',    word:'cosa',   ar:'ماذا تأكل في الإفطار؟',          stage:2},
  {blank:'___ si chiama tua sorella?',   full:'Come si chiama tua sorella?',     answer:'Come',    word:'come',   ar:'ما اسم أختك؟',                   stage:2},
  // Stage 3 — chi / perché
  {blank:'___ viene alla festa?',        full:'Chi viene alla festa?',           answer:'Chi',     word:'chi',    ar:'من يجيء للحفلة؟',                stage:3},
  {blank:'___ non studi?',               full:'Perché non studi?',               answer:'Perché',  word:'perché', ar:'لماذا لا تدرس؟',                 stage:3},
  {blank:'Con ___ parli?',               full:'Con chi parli?',                  answer:'chi',     word:'chi',    ar:'مع من تتكلم؟',                   stage:3},
  {blank:'___ sei in ritardo?',          full:'Perché sei in ritardo?',          answer:'Perché',  word:'perché', ar:'لماذا أنت متأخر؟',               stage:3},
  {blank:'Di ___ è questo zaino?',       full:'Di chi è questo zaino?',          answer:'chi',     word:'chi',    ar:'لمن هذه الحقيبة؟',               stage:3},
  // Stage 4 — quanto / quale
  {blank:'___ costa questo libro?',      full:'Quanto costa questo libro?',      answer:'Quanto',  word:'quanto', ar:'بكم هذا الكتاب؟',                stage:4},
  {blank:'___ preferisci, il tè o il caffè?', full:'Quale preferisci, il tè o il caffè?', answer:'Quale', word:'quale', ar:'أيهما تفضل، الشاي أم القهوة؟', stage:4},
  {blank:'___ anni hai?',                full:'Quanti anni hai?',                answer:'Quanti',  word:'quanto', ar:'كم عمرك؟',                       stage:4},
  {blank:'___ lingue parli?',            full:'Quali lingue parli?',             answer:'Quali',   word:'quale',  ar:'أي لغات تتكلم؟',                 stage:4},
  {blank:'___ persone ci sono?',         full:'Quante persone ci sono?',         answer:'Quante',  word:'quanto', ar:'كم شخصاً يوجد؟',                 stage:4},
  // Stage 5 — مختلط
  {blank:'___ lavori?',                  full:'Dove lavori?',                    answer:'Dove',    word:'dove',   ar:'أين تعمل؟',                      stage:5},
  {blank:'___ hai detto?',               full:'Che cosa hai detto?',             answer:'Che cosa',word:'cosa',   ar:'ماذا قلت؟',                      stage:5},
  {blank:'___ sei libero questa settimana?', full:'Quando sei libero questa settimana?', answer:'Quando', word:'quando', ar:'متى تكون فاضياً هذا الأسبوع؟', stage:5},
  {blank:'___ strada prendo?',           full:'Quale strada prendo?',            answer:'Quale',   word:'quale',  ar:'أي طريق آخذ؟',                   stage:5},
  {blank:'___ non vieni alla festa?',    full:'Perché non vieni alla festa?',    answer:'Perché',  word:'perché', ar:'لماذا لا تأتي للحفلة؟',          stage:5},
];

/* ─── INTERROGATIVE_MISTAKES: أخطاء شائعة ─── */
const INTERROGATIVE_MISTAKES = [
  {wrong:'Come ti chiami nome?',      correct:'Come ti chiami?',         rule:'come ti chiami كافية وحدها للسؤال عن الاسم',              tip:'كلمة nome زيادة — الجملة كاملة بدونها'},
  {wrong:'Dove sei da?',             correct:'Di dove sei?',             rule:'للسؤال عن الأصل نستخدم di dove وليس dove ... da',        tip:'"Di dove sei?" = من أين أنت أصلاً؟'},
  {wrong:'Perchè',                   correct:'Perché',                   rule:'الضغط الصحيح على الحرف الأخير: perché وليس perchè',      tip:'الضغط على É مهم في الكتابة الإيطالية'},
  {wrong:'Quale è il problema?',     correct:"Qual è il problema?",      rule:'quale أمام è تحذف الـ e: quale → qual\'',                 tip:"qual'è اختصار شائع جداً في الإيطالية المحكية والمكتوبة"},
  {wrong:'Quando anni hai?',         correct:'Quanti anni hai?',         rule:'للسؤال عن الكمية نستخدم quanto وليس quando',             tip:'quando = متى (زمن) | quanto = كم (كمية)'},
  {wrong:'Chi cosa fai?',            correct:'Cosa fai?',                rule:'chi للأشخاص فقط — للأشياء والأفعال نستخدم cosa',         tip:'chi = من (شخص) | cosa = ماذا (فعل أو شيء)'},
  {wrong:'Come perché sei triste?',  correct:'Perché sei triste?',       rule:'come وperché سؤالان مختلفان — لا يجتمعان',               tip:'come = كيف (الحال) | perché = لماذا (السبب)'},
  {wrong:'Quanti acqua vuoi?',       correct:'Quanta acqua vuoi?',       rule:'acqua مؤنث مفرد → quanta وليس quanti',                   tip:'quanto يتفق مع الاسم: quanto/quanta/quanti/quante'},
];
