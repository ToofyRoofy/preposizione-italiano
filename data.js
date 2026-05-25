/* ═══════════════════════════ THE DATA (v1 Ultimate) ═══════════════════════════ */
const STORAGE_KEY = 'prep_v4_merged';

const CHUNKS = [
  {it:'a calcio', ar:'(لعب) كرة القدم', note:'الألعاب والرياضات مع giocare تأخذ a بدون أداة — giocare a calcio, a tennis, a carte'},
  {it:'a carte', ar:'(اللعب) بالكوتشينة', note:'الألعاب تأخذ a بدون أداة تعريف — giocare a carte = يلعب ورق'},
  {it:'a casa', ar:'في المنزل / إلى المنزل', note:'a مع البيت بدون أداة — البيت هنا فكرة مش مبنى: torno a casa = أعود للبيت'},
  {it:'a letto', ar:'في السرير', note:'a letto تعبير ثابت — الفراش كحالة (نوم أو مرض): sono a letto = أنا في السرير'},
  {it:'a Milano', ar:'في ميلانو', note:'جميع المدن مع a'},
  {it:'a Napoli', ar:'في نابولي', note:'المدن دايماً a بدون استثناء — a Napoli, a Parigi, a Londra, a Il Cairo'},
  {it:'a piedi', ar:'مشياً / سيراً', note:'الوحيدة الاستثنائية وتأخذ a'},
  {it:'a Roma', ar:'في روما / إلى روما', note:'المدن دائماً نستخدم معها a'},
  {it:'a scuola', ar:'في المدرسة / إلى المدرسة', note:'a مع المؤسسات اليومية بدون أداة — المدرسة كروتين: vado a scuola = أذهب للمدرسة'},
  {it:'a tennis', ar:'تنس', note:'الألعاب مع giocare تأخذ a بدون أداة — giocare a tennis: يلعب تنس'},
  {it:'a terra', ar:'على الأرض / في الأسفل', note:'تعبير ثابت: a terra = على الأرض/ساقطاً — بدون أداة تعريف مثل a piedi وa letto'},
  {it:'a tutti', ar:'للجميع (كإلقاء تحية أو سؤال لعامة حاضرين)', note:'كجملة التوزيع والعموم (Buongiorono a tutti)'},
  {it:'a volte', ar:'أحياناً', note:'A volte كظرف زمني التكرار والتنويع'},

  {it:'al bar', ar:'في الكافيه', note:'الكافيه وجهة يومية تأخذ a — bar مذكر غير قابل للتصريف: vado al bar'},
  {it:'al fratello', ar:'للأخ', note:'(للـمُهدي، المُرسل إليه - حرف لام العربية كحرف إهداء وعطاء)'},
  {it:'al lavoro', ar:'في العمل / إلى العمل', note:'العمل وجهة محددة تأخذ a — al = a + il: vado al lavoro = أذهب للعمل'},
  {it:'al mattino', ar:'في الصباح', note:'al mattino = di mattina تقريباً — لكن al أكثر تحديداً: mi sveglio al mattino'},
  {it:'al mercato', ar:'إلى السوق / في السوق', note:'الأسواق وجهات تأخذ a — al = a + il: vado al mercato = أروح السوق'},
  {it:'al parco', ar:'إلى الحديقة/المتنزه العام', note:'الوجهات الترفيهية المحددة تأخذ a — al = a + il: vado al parco = أروح الحديقة'},
  {it:'al primo piano', ar:'في الطابق الأول', note:'لترتيب طوابق المباني، نستخدم أداة التعريف a'},
  {it:'al ristorante', ar:'في المطعم', note:'المطاعم وجهات محددة تأخذ a — al = a + il: andiamo al ristorante'},
  {it:'al secondo piano', ar:'في الطابق الثاني', note:'الطوابق وجهات تأخذ a — al = a + il: abito al secondo piano = أسكن في الطابق الثاني'},
  {it:'al supermercato', ar:'في السوبرماركت', note:'الأسواق والمحلات وجهات تأخذ a — al = a + il: vado al supermercato'},
  {it:'al telefono', ar:'بالهاتف/على الهاتف', note:'مشغول باستخدام الهاتف/الاتصال'},
  {it:'alla festa', ar:'في الحفلة', note:'المناسبات والحفلات وجهات تأخذ a — festa مؤنث: vado alla festa = أروح الحفلة'},
  {it:'alla madre', ar:'للأم', note:'حرف a لتوجيه وإعطاء المفعول به الثاني (مباشر وغير مباشر)'},
  {it:'alla stazione', ar:'في المحطة', note:'المحطة وجهة تأخذ a — وهي مؤنث: alla = a + la: vado alla stazione'},

  {it:'di caldo', ar:'من الحر', note:'di للسببية — morire di caldo: يموت من الحر، نفس قاعدة di fame وdi freddo'},
  {it:'di casa', ar:'شيء منزلي / متعلق بالبيت', note:'di casa كصفة: oggetti di casa = أشياء منزلية.'},
  {it:'di cucina', ar:'عن الطبخ / كتاب طبخ', note:'di للتصنيف والموضوع: libro di cucina = كتاب طبخ.'},
  {it:'di fame', ar:'من الجوع (السبب)', note:'di للسببية: muoiono di fame = يموتون جوعاً.'},
  {it:'di freddo', ar:'من الصقيع والبرد', note:'di للسببية — morire di freddo: يموت من البرد، البرد هو السبب'},
  {it:'di mattina', ar:'في الصباح', note:'di مع أوقات اليوم الثلاثة: di mattina صباحاً، di sera مساءً، di notte ليلاً — الاستثناء: nel pomeriggio'},
  {it:'di noia', ar:'من الملل', note:'di للسبب المجازي: morire di noia = يموت من الملل.'},
  {it:'di notte', ar:'في الليل', note:'di مع أوقات اليوم الثلاثة بدون أداة — nel pomeriggio الوحيد يأخذ أداة لأنه مذكر محدد'},
  {it:'di paura', ar:'من الخوف', note:'di للسببية — tremare di paura: يرتجف من الخوف'},
  {it:'di sera', ar:'في المساء', note:'di مع أوقات اليوم بدون أداة: di mattina, di sera, di notte — الاستثناء: nel pomeriggio'},
  {it:'di sport', ar:'عن الرياضة / رياضي', note:'di للتخصيص والتصنيف: pagine di sport.'},
  {it:'di stanchezza', ar:'من التعب', note:'di للسببية — morire di stanchezza: يتهالك من التعب'},
  {it:'di storia', ar:'حول التاريخ / مادة التاريخ', note:'di كرابط للموضوع: un esame di storia = امتحان التاريخ.'},
  {it:'di viaggi', ar:'عن الرحلات / سياحي', note:'di للتصنيف: rivista di viaggi = مجلة سفر.'},

  {it:'da casa', ar:'من البيت/منزل', note:'المنبع والنقطة الزمنية/مكان الانطلاق والمغادرة بـ DA بدون تعريف.'},
  {it:'da Marco', ar:'عند ماركو', note:'Da مع شخص تعني (عند) هذا الشخص'},
  {it:'dai miei amici', ar:'عند أصدقائي', note:'da مع الأشخاص تعني عند — dai = da + i: sono dai miei amici = أنا عند أصدقائي'},
  {it:'dal dentista', ar:'عند طبيب الأسنان', note:'da = عند المختص في عيادته — dentista مذكر رغم نهايته a، يُحفظ'},
  {it:'dal dottore', ar:'عند الطبيب', note:'da مع المهن تعني عند في مكانه — dal = da + il: vado dal dottore = أروح عند الدكتور'},
  {it:'dal lavoro', ar:'من الشغل/عائد', note:'da = من (نقطة الانطلاق) — torno dal lavoro: أعود قادماً من العمل'},
  {it:'dal letto', ar:'من السرير (نهض/قام)', note:'da للانطلاق من مكان — mi alzo dal letto = أقوم من الفراش'},
  {it:'dal motorino', ar:'من/على الدرجة (الناريّة)', note:'da مع النزول من أي شيء — scendo dal motorino = أنزل من الدراجة'},
  {it:'dal treno', ar:'من القطار', note:'da مع النزول والمغادرة — scendo dal treno: أنزل من القطار'},
  {it:'dalla macchina', ar:'من السيارة / نزل من السيارة', note:'da = من (مغادرة) — scendo dalla macchina: أنزل من السيارة'},
  {it:'dalla porta', ar:'عبر/من خلال الباب', note:'da = من/عبر — entro dalla porta: أدخل عابراً من الباب'},

  {it:'in appartamento', ar:'في شقة سكنية', note:'in مع نوع السكن بدون أداة — in appartamento, in villa, in casa' },
  {it:'in ascensore', ar:'بالمصعد', note:'in مع ما تكون داخله — in ascensore = في المصعد، مثل in treno وin macchina'},
  {it:'in autobus', ar:'بالأتوبيس', note:'المواصلات العامة تأخذ in لأنك داخلها — in autobus, in treno, in metro'},
  {it:'in bagno', ar:'في الحمام', note:'غرف المنزل دايماً in بدون أداة — sono in bagno = أنا في الحمام'},
  {it:'in banca', ar:'في البنك', note:'المؤسسات الخدمية تأخذ in بدون أداة — in banca, in farmacia, in biblioteca'},
  {it:'in biblioteca', ar:'في المكتبة', note:'المؤسسات الثقافية والعامة تأخذ in بدون أداة — studio in biblioteca'},
  {it:'in bici', ar:'بالدراجة', note:'اختصار in bicicletta'},
  {it:'in bicicletta', ar:'بالدراجة الهوائية', note:'in bicicletta = الشكل الكامل لـ in bici.'},
  {it:'in camera', ar:'في الغرفة', note:'غرف المنزل دايماً in بدون أداة — sono in camera = أنا في الغرفة'},
  {it:'in campagna', ar:'في الريف', note:'in بدون أداة تعريف مع البيئات الجغرافية العامة: in campagna, in montagna, in città'},
  {it:'in casa', ar:'في البيت / داخل المنزل', note:'فرق عن a casa (اتجاه): in casa تعني داخل المنزل.'},
  {it:'in centro', ar:'في وسط/مركز المدينة', note:'in بدون أداة تعريف مع centro كمكان عام: in centro = في وسط المدينة' },
  {it:'in classe', ar:'في الفصل الدراسي', note:'الفصل الدراسي كمكان يأخذ in — sono in classe = أنا في الفصل'},
  {it:'in cucina', ar:'في المطبخ', note:'غرف المنزل دايماً in — تخيّل إنك داخل الغرفة: in cucina, in camera, in bagno'},
  {it:'in Egitto', ar:'في مصر', note:'الدول دايماً in — سواء مؤنثة أو مذكرة: in Italia, in Egitto, in Giappone'},
  {it:'in estate', ar:'في الصيف', note:'الفصول الأربعة دايماً in: in primavera, in estate, in autunno, in inverno'},
  {it:'in Europa', ar:'في أوروبا', note:'القارات تعامل زي الدول تأخذ in — in Europa, in Africa, in Asia, in America'},
  {it:'in famiglia', ar:'في كنف الأسرة / داخل العائلة', note:'in بمعنى داخل أو في كنف.' },
  {it:'in farmacia', ar:'في الصيدلية', note:'المؤسسات الخدمية تأخذ in بدون أداة — in farmacia, in banca, in biblioteca'},
  {it:'in Francia', ar:'في فرنسا', note:'الدول دايماً in بدون استثناء — مش مرتبط بالجنس: in Francia, in Egitto, in Giappone'},
  {it:'in fretta', ar:'على عجل / بسرعة', note:'in كظرف حال يصف طريقة الفعل.'},
  {it:'in inverno', ar:'في الشتاء', note:'الفصول دايماً in بدون أداة تعريف — in inverno, in estate, in autunno, in primavera'},
  {it:'in Italia', ar:'في إيطاليا', note:'الدول دائماً مع in'},
  {it:'in italiano', ar:'بالإيطالية (كلغة)', note:'in مع أسماء اللغات للتعبير عن وسيلة التواصل.' },
  {it:'in macchina', ar:'بالسيارة', note:'السيارة تأخذ in لأنك داخلها — عكس sul motorino حيث أنت فوقها'},
  {it:'in palestra', ar:'في الجيم', note:'الجيم فضاء داخلي يأخذ in بدون أداة — vado in palestra = أروح الجيم'},
  {it:'in primavera', ar:'في الربيع', note:'الفصول الأربعة تأخذ in بدون أداة تعريف: in primavera, in estate, in autunno, in inverno'},
  {it:'in silenzio', ar:'في صمت / بهدوء', note:'in كظرف حال يصف طريقة الفعل.'},
  {it:'in strada', ar:'في الطريق / في الشارع', note:'in بدون أداة تعريف مع الأماكن العامة المفتوحة: in strada, in piazza'},
  {it:'in treno', ar:'بالقطار', note:'وسائل المواصلات تأخذ in في الوضع الطبيعي'},
  {it:'in ufficio', ar:'في المكتب', note:'المكتب كمكان عمل يأخذ in بدون أداة — lavoro in ufficio = أشتغل في المكتب'},
  {it:'in un appartamento', ar:'في شقة / في سكن خاص', note:'in مع السكن — النكرة تأخذ un: vivo in un appartamento = أسكن في شقة'},
  {it:'in una piccola città', ar:'في مدينة صغيرة', note:'in مع النكرة: in una + صفة + اسم — يختلف عن in città (معرفة بدون أداة)'},
  {it:'in via Roma', ar:'في شارع روما', note:'شائع جداً: in via للإشارة إلى الشوارع.'},
  {it:'nel pomeriggio', ar:'بعد الظهر', note:'pomeriggio مذكر محدد يحتاج أداة تعريف — nel = in + il، عكس di mattina وdi sera'},
  {it:'nel salotto', ar:'في صالون البيت (الغرفة الواسعة للجلوس)', note:'الغرف المحددة المذكرة تأخذ nel — nel = in + il: sono nel salotto = أنا في الصالون' },

  {it:'sul cellulare', ar:'على الموبايل', note:'su = على — المحتوى على شاشتك: leggo sul cellulare = أقرأ على موبايلي'},
  {it:'sul motorino', ar:'على الدراجة النارية', note:'أنت تجلس عليها لذلك su وليس in'},
  {it:'sul quaderno', ar:'على الكراسة / الدفتر', note:'للكتابة على السطح'},
  {it:'sul tavolo', ar:'على الطاولة', note:'su = على سطح مادي — il libro è sul tavolo: الكتاب فوق الطاولة'},
  {it:'sul treno', ar:'على القطار', note:'الصعود وتواجدك بداخل قطار كبير (ركوب على)'},
  {it:'sul web', ar:'على الإنترنت', note:'su = على — تتصفح على الإنترنت مثلما تكتب على الورق: cerco sul web'},
  {it:'sulla sedia', ar:'على الكرسي', note:'su = على سطح — la borsa è sulla sedia: الحقيبة فوق الكرسي'},
  {it:'sulle scale', ar:'على السلالم', note:'su = على — السلالم سطح تمشي عليه: salgo sulle scale = أصعد على السلم'},

  {it:'per caso', ar:'بالصدفة', note:'per caso تعبير ثابت = بالصدفة — ci siamo incontrati per caso = التقينا صدفة'},
  {it:'per lavoro', ar:'للعمل / من أجل العمل', note:'per تجيب على سؤال "ليه؟" — per lavoro = من أجل العمل: viaggiare per lavoro'},
  {it:'per ore', ar:'لساعات / لمدة ساعات', note:'للحديث عن مدة مستغرقة (Duration)'},
  {it:'per Roma', ar:'نحو / تجاه روما', note:'مروراً أو سفراً باتجاه الوجهة'},
  {it:'per sempre', ar:'للأبد', note:'per تجيب على سؤال "لكم من الوقت؟" — per sempre = للأبد، per tre ore = لثلاث ساعات'},

  {it:'con attenzione', ar:'باهتمام', note:'التركيز والانتباه كأداة حسية للعمل'},
  {it:'con cura', ar:'بعناية', note:'con بدون أداة تعريف تصف طريقة الفعل — con cura = بعناية، con calma = بهدوء'},
  {it:'con gli amici', ar:'مع الأصدقاء', note:'con لا يتدمج مع أداة التعريف أبداً — يُكتب مفصولاً: con gli amici, con il padre'},
  {it:'con il cugino', ar:'مع ابن العم/الخال', note:'con لا يتدمج أبداً — يُكتب مفصولاً: esco con il cugino = أخرج مع ابن عمي'},
  {it:'con il fratello', ar:'مع الأخ', note:'con لا يتدمج — col موجود في القواميس لكن con il هو الصواب في الإيطالية المعاصرة'},
  {it:'con il padre', ar:'مع الأب', note:'con لا يتدمج — con وper الوحيدان اللي ما بيتدمجوش عكس a وda وin وsu'},
  {it:'con il professore', ar:'مع الأستاذ', note:'con لا يتدمج — وهذا يميزه عن a وda وin وsu التي تتدمج كلها مع أداة التعريف'},
  {it:'con la famiglia', ar:'مع العائلة', note:'con لا يتدمج — يُكتب مفصولاً دايماً: esco con la famiglia = أخرج مع العائلة'},
  {it:'con la madre', ar:'مع الأم', note:'con لا يتدمج — يُكتب مفصولاً دايماً: esco con la madre = أخرج مع أمي'},
  {it:'con la sorella', ar:'مع الأخت', note:'con لا يتدمج — يُكتب con la وليس colla (غير مستخدم في الإيطالية المعاصرة)'},
  {it:'con noi', ar:'معنا', note:'استخدام مع الضمائر بشكل مباشر'},
  {it:'con passione', ar:'بشغف', note:'حال يصف أداء شيء بمتعة أو إخلاص'},
  {it:'con un sorriso', ar:'بابتسامة', note:'الطريقة والأداءة غير المُعرّفة (مع نكرة)'},

  {it:'fra poco', ar:'بعد قليل (عما قريب)', note:'تتطابق Fra تماماً في المعنى والاستخدام مع Tra'},
  {it:'tra amici', ar:'بين الأصدقاء (بشكل عام)', note:'tra مع النكرة للحديث بشكل عام — tra amici: بين الأصدقاء بصيغة مطلقة'},
  {it:'tra due ore', ar:'خلال/بعد ساعتين', note:'دائماً تشير لمستقبل، مسافة زمنية تفصل بين الآن وبين الحدث'},
  {it:'tra gli amici', ar:'بين الأصدقاء', note:'tra = وسط/بين — tra gli amici: في وسط الأصدقاء'},

  {it:'senza bussare', ar:'بدون طرق الباب', note:'senza + مصدر (infinito) للتعبير عن الحال.'},

  {it:'vicino al mare', ar:'قريب من البحر', note:'vicino a + أداة التعريف — mare مذكر: vicino al mare = بجانب البحر'},
  {it:'vicino al parco', ar:'قريب من المتنزه', note:'vicino a + أداة التعريف — parco مذكر: vicino al parco = بجانب الحديقة'},
  {it:'vicino alla scuola', ar:'قريب من المدرسة', note:'vicino a + أداة التعريف — scuola مؤنث: vicino alla scuola = بجانب المدرسة'},
  // Con (مع/ بواسطة),
  // DI Additional Usage Subject/Material/Fear...,
  // Extra specific rules...,
  // Tra/Fra (بين / بعد أو خلال مدة زمنية),
  // استثنائات وتعابير (a, da, di, in),
  // الأشخاص (Da),
  // الأماكن,
  // الاستخدامات المادية بـ Su (على),
  // الدول والقارات,
  // المؤسسات والمحلات بـ a أو in,
  // المدن,
  // المواصلات,
  // الوقت,
  // تعبيرات لـ Per (لأجل/نحو/مدة),
  {it:"all'ospedale", ar:'في المستشفى', note:"المستشفى وجهة تأخذ a — يبدأ بمتحرك فيصبح all': vado all'ospedale = أروح المستشفى"},
  {it:"all'università", ar:'في الجامعة', note:"الجامعة وجهة تعليمية تأخذ a — يبدأ بمتحرك فيصبح all': vado all'università = أروح الجامعة"},
  {it:"sull'autobus", ar:'على الأتوبيس', note:'استخدام خاص: راكب على / فوق الأتوبيس'}
];

// ── Stage 1: تحديد هل الكلمة تبدأ بحرف متحرك؟ (نعم / لا) ──
// بدون lo — السؤال ثنائي بسيط لتدريب العين على الحرف الأول
const SET_A1_WORDS = [
  {it:'estate',    ar:'صيف',       startType:'vowel',    article:"l'", gender:'f'},
  {it:'amico',     ar:'صديق',      startType:'vowel',    article:"l'", gender:'m'},
  {it:'autobus',   ar:'أتوبيس',    startType:'vowel',    article:"l'", gender:'m'},
  {it:'amica',     ar:'صديقة',     startType:'vowel',    article:"l'", gender:'f'},
  {it:'libro',     ar:'كتاب',      startType:'consonant',article:'il', gender:'m'},
  {it:'treno',     ar:'قطار',      startType:'consonant',article:'il', gender:'m'},
  {it:'cinema',    ar:'سينما',     startType:'consonant',article:'il', gender:'m'},
  {it:'giornale',  ar:'جريدة',     startType:'consonant',article:'il', gender:'m'},
  {it:'pizza',     ar:'بيتزا',     startType:'consonant',article:'la', gender:'f'},
  {it:'cucina',    ar:'مطبخ',      startType:'consonant',article:'la', gender:'f'},
  {it:'porta',     ar:'باب',       startType:'consonant',article:'la', gender:'f'},
  {it:'camera',    ar:'غرفة',      startType:'consonant',article:'la', gender:'f'},
];

// ── Stage 2: اختيار الأداة من (il / lo / la / l') — 5 لكل حالة ──
const SET_A2_WORDS = [
  // l' — أي جنس + متحرك (5)
  {it:'invito',      ar:'دعوة',      startType:'vowel',    article:"l'", gender:'m'},
  {it:'ospedale',    ar:'مستشفى',    startType:'vowel',    article:"l'", gender:'m'},
  {it:'italiano',    ar:'الإيطالية', startType:'vowel',    article:"l'", gender:'m'},
  {it:'università',  ar:'جامعة',     startType:'vowel',    article:"l'", gender:'f'},
  {it:'ufficio',     ar:'مكتب',      startType:'vowel',    article:"l'", gender:'m'},
  // il — مذكر + ساكن عادي (5)
  {it:'caffè',       ar:'قهوة',      startType:'consonant',article:'il', gender:'m'},
  {it:'succo',       ar:'عصير',      startType:'consonant',article:'il', gender:'m'},
  {it:'tempo',       ar:'وقت',       startType:'consonant',article:'il', gender:'m'},
  {it:'quaderno',    ar:'كراسة',     startType:'consonant',article:'il', gender:'m'},
  {it:'cellulare',   ar:'موبايل',    startType:'consonant',article:'il', gender:'m'},
  // la — مؤنث + ساكن (5) — تشمل storia التي تبدأ بـ S+ساكن لكن مؤنثة
  {it:'palestra',    ar:'جيم',       startType:'consonant',article:'la', gender:'f'},
  {it:'bicicletta',  ar:'دراجة',     startType:'consonant',article:'la', gender:'f'},
  {it:'macchina',    ar:'سيارة',     startType:'consonant',article:'la', gender:'f'},
  {it:'storia',      ar:'تاريخ',     startType:'s_impure', article:'la', gender:'f'},
  {it:'colazione',   ar:'إفطار',     startType:'consonant',article:'la', gender:'f'},
  // lo — مذكر + S+ساكن (s_impure) (5)
  {it:'studente',    ar:'طالب',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'sport',       ar:'رياضة',     startType:'s_impure', article:'lo', gender:'m'},
  {it:'stadio',      ar:'ملعب',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'schermo',     ar:'شاشة',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'spazio',      ar:'فضاء',      startType:'s_impure', article:'lo', gender:'m'},
  // lo — مذكر + Z (5)
  {it:'zaino',       ar:'حقيبة ظهر', startType:'z',        article:'lo', gender:'m'},
  {it:'zio',         ar:'عم / خال',  startType:'z',        article:'lo', gender:'m'},
  {it:'zero',        ar:'صفر',       startType:'z',        article:'lo', gender:'m'},
  {it:'zucchero',    ar:'سكر',       startType:'z',        article:'lo', gender:'m'},
  {it:'zoo',         ar:'حديقة حيوان',startType:'z',       article:'lo', gender:'m'},
];

// ── Stage 3: كتابة الأداة من الذاكرة — 5 لكل حالة، كلمات جديدة أصعب ──
const SET_A3_WORDS = [
  // l' (5)
  {it:'appartamento',ar:'شقة',       startType:'vowel',    article:"l'", gender:'m'},
  {it:'ora',         ar:'ساعة',      startType:'vowel',    article:"l'", gender:'f'},
  {it:'inverno',     ar:'شتاء',      startType:'vowel',    article:"l'", gender:'m'},
  {it:'isola',       ar:'جزيرة',     startType:'vowel',    article:"l'", gender:'f'},
  {it:'esame',       ar:'امتحان',    startType:'vowel',    article:"l'", gender:'m'},
  // il (5)
  {it:'telefono',    ar:'هاتف',      startType:'consonant',article:'il', gender:'m'},
  {it:'tè',          ar:'شاي',       startType:'consonant',article:'il', gender:'m'},
  {it:'film',        ar:'فيلم',      startType:'consonant',article:'il', gender:'m'},
  {it:'messaggio',   ar:'رسالة',     startType:'consonant',article:'il', gender:'m'},
  {it:'regalo',      ar:'هدية',      startType:'consonant',article:'il', gender:'m'},
  // la (5) — تشمل stazione التي تبدأ بـ S+ساكن لكن مؤنثة
  {it:'verità',      ar:'حقيقة',     startType:'consonant',article:'la', gender:'f'},
  {it:'spesa',       ar:'تسوق',      startType:'s_impure', article:'la', gender:'f'},
  {it:'voce',        ar:'صوت',       startType:'consonant',article:'la', gender:'f'},
  {it:'lingua',      ar:'لغة',       startType:'consonant',article:'la', gender:'f'},
  {it:'famiglia',    ar:'عائلة',     startType:'consonant',article:'la', gender:'f'},
  // lo — S+ساكن (5) — نفس المرحلة 2 لكن الآن الطالب يكتب بدون خيارات
  {it:'studente',    ar:'طالب',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'sport',       ar:'رياضة',     startType:'s_impure', article:'lo', gender:'m'},
  {it:'stadio',      ar:'ملعب',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'schermo',     ar:'شاشة',      startType:'s_impure', article:'lo', gender:'m'},
  {it:'spazio',      ar:'فضاء',      startType:'s_impure', article:'lo', gender:'m'},
  // lo — Z (5)
  {it:'zaino',       ar:'حقيبة ظهر', startType:'z',        article:'lo', gender:'m'},
  {it:'zio',         ar:'عم / خال',  startType:'z',        article:'lo', gender:'m'},
  {it:'zero',        ar:'صفر',       startType:'z',        article:'lo', gender:'m'},
  {it:'zucchero',    ar:'سكر',       startType:'z',        article:'lo', gender:'m'},
  {it:'zoo',         ar:'حديقة حيوان',startType:'z',       article:'lo', gender:'m'},
];

const SET_B_WORDS = [
  {it:'libro',     ar:'كتاب',      gender:'m', ending:'o', isException:false},
  {it:'treno',     ar:'قطار',      gender:'m', ending:'o', isException:false},
  {it:'fratello',  ar:'أخ',        gender:'m', ending:'o', isException:false},
  {it:'negozio',   ar:'متجر',      gender:'m', ending:'o', isException:false},
  {it:'porta',     ar:'باب',       gender:'f', ending:'a', isException:false},
  {it:'casa',      ar:'منزل',      gender:'f', ending:'a', isException:false},
  {it:'scuola',    ar:'مدرسة',     gender:'f', ending:'a', isException:false},
  {it:'macchina',  ar:'سيارة',     gender:'f', ending:'a', isException:false},
  {it:'padre',     ar:'أب',        gender:'m', ending:'e', isException:false},
  {it:'madre',     ar:'أم',        gender:'f', ending:'e', isException:false},
  {it:'nome',      ar:'اسم',       gender:'m', ending:'e', isException:false},
  {it:'voce',      ar:'صوت',       gender:'f', ending:'e', isException:false},
  {it:'radio',     ar:'راديو',     gender:'f', ending:'o', isException:true},
  {it:'mano',      ar:'يد',        gender:'f', ending:'o', isException:true},
  {it:'problema',  ar:'مشكلة',     gender:'m', ending:'a', isException:true},
  {it:'dentista',  ar:'طبيب أسنان',gender:'m', ending:'a', isException:true}
];

const SET_C_WORDS = [
  {it:'libro',        ar:'كتاب',      article:'il',  hint:'مذكر + ساكن عادي'},
  {it:'studente',     ar:'طالب',      article:'lo',  hint:'مذكر + S وساكن'},
  {it:'zaino',        ar:'حقيبة ظهر', article:'lo',  hint:'مذكر + Z'},
  {it:'amico',        ar:'صديق',      article:"l'",  hint:'مذكر + حرف متحرك A'},
  {it:'ospedale',     ar:'مستشفى',    article:"l'",  hint:'مذكر + حرف متحرك O'},
  {it:'porta',        ar:'باب',       article:'la',  hint:'مؤنث + ساكن'},
  {it:'macchina',     ar:'سيارة',     article:'la',  hint:'مؤنث + ساكن'},
  {it:'amica',        ar:'صديقة',     article:"l'",  hint:'مؤنث + حرف متحرك A'},
  {it:'università',   ar:'جامعة',     article:"l'",  hint:'مؤنث + حرف متحرك U'}
];

const SET_D_TERMS = [
  {it:'Il Genere',               ar:'المذكر والمؤنث',       note:'يصف جنس الأسماء الإيطالية — كل اسم إما مذكر أو مؤنث'},
  {it:'Articolo Determinativo',  ar:'أداة التعريف',         note:'il · lo · la · l\' · i · gli · le'},
  {it:'Preposizioni Semplici',   ar:'حروف الجر البسيطة',    note:'a · di · da · in · su · per · con · tra'},
  {it:'Preposizioni Articolate', ar:'حروف الجر المدمجة',    note:'al · del · dal · nel · sul ...'},
];

const SET_E_WORDS = [
  {it:'libro',    itP:'libri',    ar:'كتب',         artS:'il',  artP:'i',   rule:'-o → -i (مذكر)'},
  {it:'porta',    itP:'porte',    ar:'أبواب',        artS:'la',  artP:'le',  rule:'-a → -e (مؤنث)'},
  {it:'treno',    itP:'treni',    ar:'قطارات',       artS:'il',  artP:'i',   rule:'-o → -i (مذكر)'},
  {it:'casa',     itP:'case',     ar:'منازل',        artS:'la',  artP:'le',  rule:'-a → -e (مؤنث)'},
  {it:'amico',    itP:'amici',    ar:'أصدقاء (م)',   artS:"l'",  artP:'gli', rule:'-co → -ci | gli + متحرك'},
  {it:'amica',    itP:'amiche',   ar:'صديقات',       artS:"l'",  artP:'le',  rule:'-ca → -che'},
  {it:'studente', itP:'studenti', ar:'طلاب',         artS:'lo',  artP:'gli', rule:'-e → -i | gli + s_impure'},
  {it:'padre',    itP:'padri',    ar:'آباء',         artS:'il',  artP:'i',   rule:'-e → -i (مذكر)'},
  {it:'madre',    itP:'madri',    ar:'أمهات',        artS:'la',  artP:'le',  rule:'-e → -i (مؤنث)'},
  {it:'caffè',    itP:'caffè',    ar:'قهاوي',        artS:'il',  artP:'i',   rule:'نهاية مضغوطة → لا تتغير'},
  {it:'città',    itP:'città',    ar:'مدن',          artS:'la',  artP:'le',  rule:'نهاية مضغوطة → لا تتغير'},
];

/* Grammar Dictionaries for References Page */
const GENDER_RULES=[
  {rule:'نهاية -O غالباً مذكر / نهاية -A غالباً مؤنث',   examples:['libro — كتاب','porta — باب'], exceptions:['mano (مؤنث)','problema (مذكر)','dentista (مذكر)']},
  {rule:'الأسماء المنتهية بـ -E تحفظ بالاعتياد والبحث', examples:['padre (أب/مذكر)','madre (أم/مؤنث)'], exceptions:[]}
];
const ARTICLE_RULES=[
  {article:'il', rule:'مذكر يبدأ بساكن', examples:['il libro','il treno']},
  {article:'lo', rule:'مذكر يبدأ بـ S+ساكن أو Z', examples:['lo studente','lo zaino']},
  {article:"l'", rule:'مذكر أو مؤنث بمتحرك', examples:["l'amico","l'estate"]},
  {article:'la', rule:'مؤنث يبدأ بساكن', examples:['la porta','la scuola']},
  {article:'i',  rule:'جمع il', examples:['i libri']},
  {article:'gli',rule:'جمع lo / l\' المذكر', examples:['gli studenti','gli amici']},
  {article:'le', rule:'جمع مؤنث دائم (la / l\')', examples:['le porte','le amiche']}
];
const PREP_RULES=[
  {it:'a',  ar:'في/إلى',      note:'للمدن (a Roma) والأنشطة والأماكن العادية كـ a scuola.'},
  {it:'in', ar:'في/بواسطة',   note:'للدول (in Italia)، غرف البيت، المواصلات والشهور/الفصول.'},
  {it:'di', ar:'من/عن/لـ',    note:'للملكية والموضوع أو طبيعة ووقت (di mattina / di storia).'},
  {it:'da', ar:'من عند/مكان', note:'من وإلى الشخص (dal dottore) والأصل المغادر (dal lavoro).'},
  {it:'su', ar:'على',         note:'تأتي غالبا مُدمجة su+il=sul للأسطح المادية (sul tavolo).'},
  {it:'per',ar:'لـ/عبر',      note:'لاتتدمج؛ تعبر عن وجهة وسبب ووقت مقضِي.'},
  {it:'con',ar:'مع',          note:'للمرافقة والحال المادي والمعنوي.'},
  {it:'tra',ar:'خلال/بين',    note:'مسافة متبقية للفعل أو إيحاء بالمجتمع (fra و tra نفس الشيء).'}
];

/* ═══════════════════════════ SYSTEM LOGIC (Spaced Repetition & Engine) ═══════════════════════════ */
const MASTERY = [
  { lv:0, name:'جديد',       days:1, decay:10 },
  { lv:1, name:'مألوف',      days:3, decay:7 },
  { lv:2, name:'مرتاح',      days:7, decay:4 },
  { lv:3, name:'قوي',        days:14, decay:2 },
  { lv:4, name:'محفوظ جيداً',days:30, decay:1 }
];
let appState = { cp:{}, sets:{A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0}, tts:true, ips:null, lastDecay:null };
let session = null;
let sessionStats = { c:0, w:0 };
let currentItem = null;
let waiting = false;
let pickedMcq = null;
let retryMode = false;

function $(id) { return document.getElementById(id); }
function norm(s) { return (s || '').trim().toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').replace(/[\u2018\u2019\u0060\u02BC']/g, "'"); }
function normDecomp(s) {
  // Accept "a + il" == "a+il" == "a il" for decompose answers
  return norm(s).replace(/\s*\+\s*/g,'+').replace(/\s+/g,'');
}
function normCombine(s) {
  // Accept uppercase/lowercase for combine answers  
  return norm(s).replace(/\s+/g,'');
}
function shuffle(a) { let b=[...a]; for(let i=b.length-1; i>0; i--) { const j=0|Math.random()*(i+1); [b[i],b[j]]=[b[j],b[i]]; } return b; }
function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); } catch(e){} }
function load() { 
  try { const d = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (d && d.cp) appState = d; } catch(e){}
  if(appState.sets === undefined) appState.sets = {A:0, B:0, C:0, D:0, E:0, F:0, G:0};
  if(appState.sets.D === undefined) appState.sets.D = 0;
  if(appState.sets.E === undefined) appState.sets.E = 0;
  if(appState.sets.G === undefined) appState.sets.G = 0;
  if(appState.sets.H === undefined) appState.sets.H = 0;
  if(appState.tts === undefined) appState.tts = true;
}

function getCP(it) {
  if (!appState.cp[it]) appState.cp[it] = { m:0, mem:0, nextRv:0, lastRv:0, interval:1 };
  return appState.cp[it];
}

function processDecay() {
  const today = new Date().toDateString();
  if(appState.lastDecay === today) return;
  appState.lastDecay = today;
  CHUNKS.forEach(c => {
    let p = getCP(c.it);
    if(p.m > 0) {
      let loss = MASTERY[Math.min(4, p.m-1)].decay;
      p.mem = Math.max(0, p.mem - loss);
    }
  });
  save();
}

function ttsWord(article, word) {
  // Read "l' amico" as "l amico" for cleaner TTS
  let full = (article + ' ' + word).replace(/'/g, ' ').replace(/\s+/g, ' ').trim();
  playTTS(full);
}
function playTTS(txt) {
  if (!appState.tts || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  // Remove any space after l' so TTS reads "l'ospedale" as one natural Italian token
  let clean = txt.replace(/l['\u2019]\s+/gi, "l'").trim();
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = 'it-IT';
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

function buildChunkQueue(c) {
  return [
    { type:'see',      chunk:c },
    { type:'mcq_ar',   chunk:c },
    { type:'mcq_it',   chunk:c },
    { type:'mcq_note', chunk:c },
    { type:'write_ar', chunk:c },
    { type:'write',    chunk:c },
    { type:'see',      chunk:c },
    { type:'mcq_ar',   chunk:c, noHint:true },
    { type:'mcq_it',   chunk:c },
    { type:'write',    chunk:c }
  ];
}

// Set Builders (A, B, C) ported from v1 into v3 logic array shapes
const SET_F_CHUNKS = [
  {it:'A',        ar:'في / إلى',           note:'للمدن (a Roma) والأماكن اليومية (a scuola, a casa) والألعاب (a calcio) — لا تتدمج مع per وcon'},
  {it:'DI',       ar:'من / عن / لـ',        note:'للملكية (il libro di Marco) والموضوع (di storia) والسببية (di fame) وأوقات اليوم (di mattina)'},
  {it:'DA',       ar:'من / منذ / عند',      note:'للانطلاق (da Roma) ومع الأشخاص بمعنى عند (dal dottore) وللمدة الزمنية (da tre anni)'},
  {it:'IN',       ar:'في / بـ',             note:'للدول (in Italia) وغرف البيت (in cucina) والمواصلات (in treno) والفصول (in estate)'},
  {it:'SU',       ar:'على / حول',           note:'للأسطح المادية (sul tavolo) والرقمية (sul cellulare) — تتدمج: su+il=sul, su+la=sulla'},
  {it:'PER',      ar:'لـ / من أجل / لمدة',  note:'للهدف (per lavoro) والمدة الزمنية (per tre ore) والسبب (per sempre) — لا تتدمج أبداً'},
  {it:'CON',      ar:'مع / بواسطة',         note:'للمرافقة (con gli amici) والطريقة (con cura) — لا تتدمج أبداً: con il, con la, con gli'},
  {it:'TRA / FRA',ar:'بين / خلال',          note:'للمسافة الزمنية (tra due ore) والمكانية (tra le montagne) — tra وfra متطابقتان تماماً'},
];


const SET_G_CHUNKS = [
  // ── IL (مذكر مفرد ساكن عادي) ──
  {it:'AL',    ar:'a + il',    note:'مذكر مفرد يبدأ بساكن عادي — a + il = AL',
   decomp:'a + il', prep:'a', art:'il',
   examples:[{it:'al bar',ar:'في الكافيه'},{it:'al lavoro',ar:'في العمل'},{it:'al parco',ar:'في الحديقة'},{it:'al mercato',ar:'في السوق'}]},
  {it:'DAL',   ar:'da + il',   note:'مذكر مفرد ساكن — da + il = DAL',
   decomp:'da + il', prep:'da', art:'il',
   examples:[{it:'dal dottore',ar:'من عند الطبيب'},{it:'dal lavoro',ar:'من العمل'},{it:'dal treno',ar:'من القطار'},{it:'dal bar',ar:'من الكافيه'}]},
  {it:'NEL',   ar:'in + il',   note:'مذكر مفرد ساكن — in + il = NEL',
   decomp:'in + il', prep:'in', art:'il',
   examples:[{it:'nel salotto',ar:'في الصالون'},{it:'nel parco',ar:'في الحديقة'},{it:'nel pomeriggio',ar:'بعد الظهر'},{it:'nel libro',ar:'في الكتاب'}]},
  {it:'SUL',   ar:'su + il',   note:'مذكر مفرد ساكن — su + il = SUL',
   decomp:'su + il', prep:'su', art:'il',
   examples:[{it:'sul tavolo',ar:'على الطاولة'},{it:'sul cellulare',ar:'على الموبايل'},{it:'sul web',ar:'على الإنترنت'},{it:'sul treno',ar:'على القطار'}]},
  {it:'DEL',   ar:'di + il',   note:'مذكر مفرد ساكن — di + il = DEL',
   decomp:'di + il', prep:'di', art:'il',
   examples:[{it:'del pane',ar:'من الخبز'},{it:'del tempo',ar:'من الوقت'},{it:'del vino',ar:'من النبيذ'},{it:'del caffè',ar:'من القهوة'}]},
  // ── LA (مؤنث مفرد ساكن) ──
  {it:'ALLA',  ar:'a + la',    note:'مؤنث مفرد يبدأ بساكن — a + la = ALLA',
   decomp:'a + la', prep:'a', art:'la',
   examples:[{it:'alla stazione',ar:'إلى المحطة'},{it:'alla festa',ar:'في الحفل'},{it:'alla fine',ar:'في النهاية'},{it:'alla porta',ar:'عند الباب'}]},
  {it:'DALLA', ar:'da + la',   note:'مؤنث مفرد ساكن — da + la = DALLA',
   decomp:'da + la', prep:'da', art:'la',
   examples:[{it:'dalla porta',ar:'من الباب'},{it:'dalla stazione',ar:'من المحطة'},{it:'dalla finestra',ar:'من النافذة'},{it:'dalla mamma',ar:'من الأم'}]},
  {it:'NELLA', ar:'in + la',   note:'مؤنث مفرد ساكن — in + la = NELLA',
   decomp:'in + la', prep:'in', art:'la',
   examples:[{it:'nella stanza',ar:'في الغرفة'},{it:'nella cucina',ar:'في المطبخ'},{it:'nella borsa',ar:'في الحقيبة'},{it:'nella casa',ar:'في المنزل'}]},
  {it:'SULLA', ar:'su + la',   note:'مؤنث مفرد ساكن — su + la = SULLA',
   decomp:'su + la', prep:'su', art:'la',
   examples:[{it:'sulla sedia',ar:'على الكرسي'},{it:'sulla strada',ar:'على الطريق'},{it:'sulla carta',ar:'على الورقة'},{it:'sulla tavola',ar:'على المائدة'}]},
  {it:'DELLA', ar:'di + la',   note:'مؤنث مفرد ساكن — di + la = DELLA',
   decomp:'di + la', prep:'di', art:'la',
   examples:[{it:'della casa',ar:'من/لـ المنزل'},{it:'della pizza',ar:'من/لـ البيتزا'},{it:'della città',ar:'من/لـ المدينة'},{it:'della famiglia',ar:'من/لـ العائلة'}]},
  // ── L' (مفرد متحرك) ──
  {it:"ALL'",  ar:"a + l'",    note:"مفرد يبدأ بمتحرك أي جنس — a + l' = ALL'",
   decomp:"a + l'", prep:'a', art:"l'",
   examples:[{it:"all'ospedale",ar:"إلى المستشفى"},{it:"all'università",ar:"إلى الجامعة"},{it:"all'aeroporto",ar:"إلى المطار"},{it:"all'inizio",ar:"في البداية"}]},
  {it:"DALL'", ar:"da + l'",   note:"مفرد متحرك أي جنس — da + l' = DALL'",
   decomp:"da + l'", prep:'da', art:"l'",
   examples:[{it:"dall'amico",ar:"من الصديق"},{it:"dall'ospedale",ar:"من المستشفى"},{it:"dall'aeroporto",ar:"من المطار"},{it:"dall'inizio",ar:"من البداية"}]},
  {it:"NELL'", ar:"in + l'",   note:"مفرد متحرك أي جنس — in + l' = NELL'",
   decomp:"in + l'", prep:'in', art:"l'",
   examples:[{it:"nell'appartamento",ar:"في الشقة"},{it:"nell'aria",ar:"في الهواء"},{it:"nell'ospedale",ar:"في المستشفى"},{it:"nell'università",ar:"في الجامعة"}]},
  {it:"SULL'", ar:"su + l'",   note:"مفرد متحرك أي جنس — su + l' = SULL'",
   decomp:"su + l'", prep:'su', art:"l'",
   examples:[{it:"sull'autobus",ar:"على الأتوبيس"},{it:"sull'albero",ar:"على الشجرة"},{it:"sull'aereo",ar:"على الطائرة"},{it:"sull'isola",ar:"على الجزيرة"}]},
  {it:"DELL'", ar:"di + l'",   note:"مفرد متحرك أي جنس — di + l' = DELL'",
   decomp:"di + l'", prep:'di', art:"l'",
   examples:[{it:"dell'amico",ar:"لـ/من الصديق"},{it:"dell'estate",ar:"من/لـ الصيف"},{it:"dell'acqua",ar:"من الماء"},{it:"dell'ospedale",ar:"من المستشفى"}]},
  // ── LO (مذكر مفرد s+ساكن أو z) ──
  {it:'ALLO',  ar:'a + lo',    note:'مذكر مفرد يبدأ بـ s+ساكن أو z — a + lo = ALLO',
   decomp:'a + lo', prep:'a', art:'lo',
   examples:[{it:'allo stadio',ar:'إلى الملعب'},{it:'allo specchio',ar:'في المرآة'},{it:'allo studente',ar:'للطالب'},{it:'allo zaino',ar:'للحقيبة'}]},
  {it:'DALLO', ar:'da + lo',   note:'مذكر مفرد s+ساكن أو z — da + lo = DALLO',
   decomp:'da + lo', prep:'da', art:'lo',
   examples:[{it:'dallo stadio',ar:'من الملعب'},{it:'dallo specchio',ar:'من المرآة'},{it:'dallo studente',ar:'من الطالب'},{it:'dallo zaino',ar:'من الحقيبة'}]},
  {it:'NELLO', ar:'in + lo',   note:'مذكر مفرد s+ساكن أو z — in + lo = NELLO',
   decomp:'in + lo', prep:'in', art:'lo',
   examples:[{it:'nello stadio',ar:'في الملعب'},{it:'nello specchio',ar:'في المرآة'},{it:'nello zaino',ar:'في الحقيبة'},{it:'nello stesso posto',ar:'في نفس المكان'}]},
  {it:'SULLO', ar:'su + lo',   note:'مذكر مفرد s+ساكن أو z — su + lo = SULLO',
   decomp:'su + lo', prep:'su', art:'lo',
   examples:[{it:'sullo schermo',ar:'على الشاشة'},{it:'sullo zaino',ar:'على الحقيبة'},{it:'sullo stadio',ar:'فوق الملعب'},{it:'sullo stesso tavolo',ar:'على نفس الطاولة'}]},
  {it:'DELLO', ar:'di + lo',   note:'مذكر مفرد s+ساكن أو z — di + lo = DELLO',
   decomp:'di + lo', prep:'di', art:'lo',
   examples:[{it:'dello studente',ar:'لـ/من الطالب'},{it:'dello zaino',ar:'لـ/من الحقيبة'},{it:'dello stadio',ar:'لـ/من الملعب'},{it:'dello specchio',ar:'لـ/من المرآة'}]},
  // ── الجمع المذكر عادي ──
  {it:'AI',    ar:'a + i',     note:'جمع مذكر عادي — a + i = AI',
   decomp:'a + i', prep:'a', art:'i',
   examples:[{it:'ai bambini',ar:'للأطفال'},{it:'ai ragazzi',ar:'للشباب'},{it:'ai negozi',ar:'للمحلات'},{it:'ai miei amici',ar:'لأصدقائي'}]},
  {it:'DAI',   ar:'da + i',    note:'جمع مذكر عادي — da + i = DAI',
   decomp:'da + i', prep:'da', art:'i',
   examples:[{it:'dai ragazzi',ar:'من الشباب'},{it:'dai miei amici',ar:'من أصدقائي'},{it:'dai bambini',ar:'من الأطفال'},{it:'dai negozi',ar:'من المحلات'}]},
  {it:'NEI',   ar:'in + i',    note:'جمع مذكر عادي — in + i = NEI',
   decomp:'in + i', prep:'in', art:'i',
   examples:[{it:'nei parchi',ar:'في الحدائق'},{it:'nei libri',ar:'في الكتب'},{it:'nei negozi',ar:'في المحلات'},{it:'nei paesi',ar:'في البلدان'}]},
  {it:'SUI',   ar:'su + i',    note:'جمع مذكر عادي — su + i = SUI',
   decomp:'su + i', prep:'su', art:'i',
   examples:[{it:'sui libri',ar:'على الكتب'},{it:'sui tavoli',ar:'على الطاولات'},{it:'sui giornali',ar:'في الجرائد'},{it:'sui muri',ar:'على الجدران'}]},
  {it:'DEI',   ar:'di + i',    note:'جمع مذكر عادي — di + i = DEI',
   decomp:'di + i', prep:'di', art:'i',
   examples:[{it:'dei libri',ar:'من/بعض الكتب'},{it:'dei ragazzi',ar:'من/بعض الشباب'},{it:'dei problemi',ar:'من المشاكل'},{it:'dei soldi',ar:'من الأموال'}]},
  // ── الجمع المذكر متحرك/s+ساكن ──
  {it:'AGLI',  ar:'a + gli',   note:'جمع مذكر متحرك أو s+ساكن — a + gli = AGLI',
   decomp:'a + gli', prep:'a', art:'gli',
   examples:[{it:'agli amici',ar:'للأصدقاء'},{it:'agli studenti',ar:'للطلاب'},{it:'agli alberi',ar:'للأشجار'},{it:'agli esami',ar:'للامتحانات'}]},
  {it:'DAGLI', ar:'da + gli',  note:'جمع مذكر متحرك أو s+ساكن — da + gli = DAGLI',
   decomp:'da + gli', prep:'da', art:'gli',
   examples:[{it:'dagli amici',ar:'من الأصدقاء'},{it:'dagli studenti',ar:'من الطلاب'},{it:'dagli alberi',ar:'من الأشجار'},{it:'dagli esami',ar:'من الامتحانات'}]},
  {it:'NEGLI', ar:'in + gli',  note:'جمع مذكر متحرك أو s+ساكن — in + gli = NEGLI',
   decomp:'in + gli', prep:'in', art:'gli',
   examples:[{it:'negli appartamenti',ar:'في الشقق'},{it:'negli stadi',ar:'في الملاعب'},{it:'negli esami',ar:'في الامتحانات'},{it:'negli anni',ar:'في السنوات'}]},
  {it:'SUGLI', ar:'su + gli',  note:'جمع مذكر متحرك أو s+ساكن — su + gli = SUGLI',
   decomp:'su + gli', prep:'su', art:'gli',
   examples:[{it:'sugli alberi',ar:'على الأشجار'},{it:'sugli specchi',ar:'على المرايا'},{it:'sugli scaffali',ar:'على الرفوف'},{it:'sugli studenti',ar:'عن الطلاب'}]},
  {it:'DEGLI', ar:'di + gli',  note:'جمع مذكر متحرك أو s+ساكن — di + gli = DEGLI',
   decomp:'di + gli', prep:'di', art:'gli',
   examples:[{it:'degli amici',ar:'من/بعض الأصدقاء'},{it:'degli studenti',ar:'من/بعض الطلاب'},{it:'degli alberi',ar:'من الأشجار'},{it:'degli esercizi',ar:'من التمارين'}]},
  // ── الجمع المؤنث ──
  {it:'ALLE',  ar:'a + le',    note:'جمع مؤنث دائماً — a + le = ALLE',
   decomp:'a + le', prep:'a', art:'le',
   examples:[{it:'alle ragazze',ar:'للبنات'},{it:'alle feste',ar:'للحفلات'},{it:'alle otto',ar:'الساعة الثامنة'},{it:'alle scuole',ar:'للمدارس'}]},
  {it:'DALLE', ar:'da + le',   note:'جمع مؤنث — da + le = DALLE',
   decomp:'da + le', prep:'da', art:'le',
   examples:[{it:'dalle ragazze',ar:'من البنات'},{it:'dalle case',ar:'من المنازل'},{it:'dalle otto',ar:'من الساعة الثامنة'},{it:'dalle strade',ar:'من الشوارع'}]},
  {it:'NELLE', ar:'in + le',   note:'جمع مؤنث — in + le = NELLE',
   decomp:'in + le', prep:'in', art:'le',
   examples:[{it:'nelle case',ar:'في المنازل'},{it:'nelle strade',ar:'في الشوارع'},{it:'nelle scuole',ar:'في المدارس'},{it:'nelle città',ar:'في المدن'}]},
  {it:'SULLE', ar:'su + le',   note:'جمع مؤنث — su + le = SULLE',
   decomp:'su + le', prep:'su', art:'le',
   examples:[{it:'sulle sedie',ar:'على الكراسي'},{it:'sulle scale',ar:'على السلالم'},{it:'sulle mappe',ar:'على الخرائط'},{it:'sulle strade',ar:'على الطرق'}]},
  {it:'DELLE', ar:'di + le',   note:'جمع مؤنث — di + le = DELLE',
   decomp:'di + le', prep:'di', art:'le',
   examples:[{it:'delle ragazze',ar:'من/بعض البنات'},{it:'delle case',ar:'من/بعض المنازل'},{it:'delle città',ar:'من/بعض المدن'},{it:'delle strade',ar:'من الشوارع'}]},
];

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

/* ═══════════════════════════ LEARNING UNITS — نظام الطبقات الأربع ═══════════════════════════ */
/*
  كل وحدة تعليمية تمر بـ 4 طبقات:
  Layer 1: الكلمة (vocab) — تعلم الكلمة الأساسية ومعناها وجنسها
  Layer 2: حرف الجر (prep) — تعلم حرف الجر ومعناه ولماذا يُستخدم هنا
  Layer 3: منطق الدمج (fusion) — شرح كيف ولماذا يحدث الدمج
  Layer 4: التطبيق (application) — أسئلة تطبيقية متنوعة
*/

const LEARNING_UNITS = [
  // ═══════════════════════════ مجموعة AL (a + il) ═══════════════════════════
  {
    id: 'al_bar',
    vocab: {
      word: 'bar',
      ar: 'كافيه / بار',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il bar è aperto.', ar: 'الكافيه مفتوح.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان (وجهة)',
      example: {it: 'Vado a Roma.', ar: 'أذهب إلى روما.'}
    },
    fusion: {
      formula: 'a + il = al',
      result: 'al',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'bar مذكر (il bar)، وحرف الجر a مع il يتدمجان ويصبحان al'
    },
    expression: {
      it: 'al bar',
      ar: 'إلى الكافيه / في الكافيه',
      sentences: [
        {it: 'Vado al bar.', ar: 'أذهب إلى الكافيه.'},
        {it: 'Sono al bar.', ar: 'أنا في الكافيه.'},
        {it: 'Ti aspetto al bar.', ar: 'أنتظرك في الكافيه.'}
      ]
    },
    stage: 1
  },
  {
    id: 'al_lavoro',
    vocab: {
      word: 'lavoro',
      ar: 'عمل / شغل',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il lavoro è importante.', ar: 'العمل مهم.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان العمل',
      example: {it: 'Vado a scuola.', ar: 'أذهب إلى المدرسة.'}
    },
    fusion: {
      formula: 'a + il = al',
      result: 'al',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'lavoro مذكر (il lavoro)، وحرف الجر a مع il يتدمجان ويصبحان al'
    },
    expression: {
      it: 'al lavoro',
      ar: 'في العمل / إلى العمل',
      sentences: [
        {it: 'Vado al lavoro.', ar: 'أذهب إلى العمل.'},
        {it: 'Sono al lavoro.', ar: 'أنا في العمل.'},
        {it: 'Torno dal lavoro.', ar: 'أعود من العمل.'}
      ]
    },
    stage: 1
  },
  {
    id: 'al_parco',
    vocab: {
      word: 'parco',
      ar: 'حديقة / متنزه',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il parco è grande.', ar: 'الحديقة كبيرة.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان للتنزه',
      example: {it: 'Vado a casa.', ar: 'أذهب إلى البيت.'}
    },
    fusion: {
      formula: 'a + il = al',
      result: 'al',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'parco مذكر (il parco)، وحرف الجر a مع il يتدمجان ويصبحان al'
    },
    expression: {
      it: 'al parco',
      ar: 'في الحديقة / إلى الحديقة',
      sentences: [
        {it: 'Vado al parco.', ar: 'أذهب إلى الحديقة.'},
        {it: 'Gioco al parco.', ar: 'ألعب في الحديقة.'},
        {it: 'I bambini sono al parco.', ar: 'الأطفال في الحديقة.'}
      ]
    },
    stage: 1
  },
  {
    id: 'al_ristorante',
    vocab: {
      word: 'ristorante',
      ar: 'مطعم',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il ristorante è buono.', ar: 'المطعم جيد.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان لتناول الطعام',
      example: {it: 'Andiamo a mangiare.', ar: 'نذهب لنأكل.'}
    },
    fusion: {
      formula: 'a + il = al',
      result: 'al',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'ristorante مذكر (il ristorante)، وحرف الجر a مع il يتدمجان ويصبحان al'
    },
    expression: {
      it: 'al ristorante',
      ar: 'في المطعم / إلى المطعم',
      sentences: [
        {it: 'Andiamo al ristorante.', ar: 'نذهب إلى المطعم.'},
        {it: 'Mangio al ristorante.', ar: 'آكل في المطعم.'},
        {it: 'Lavoro al ristorante.', ar: 'أعمل في المطعم.'}
      ]
    },
    stage: 1
  },
  // ═══════════════════════════ مجموعة ALLA (a + la) ═══════════════════════════
  {
    id: 'alla_stazione',
    vocab: {
      word: 'stazione',
      ar: 'محطة',
      gender: 'femminile',
      article: 'la',
      starts_with: 'consonant',
      example: {it: 'La stazione è vicina.', ar: 'المحطة قريبة.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان (محطة القطار/الباص)',
      example: {it: 'Vado a Roma.', ar: 'أذهب إلى روما.'}
    },
    fusion: {
      formula: 'a + la = alla',
      result: 'alla',
      rule: 'مؤنث مفرد يبدأ بساكن',
      explanation: 'stazione مؤنث (la stazione)، وحرف الجر a مع la يتدمجان ويصبحان alla'
    },
    expression: {
      it: 'alla stazione',
      ar: 'في المحطة / إلى المحطة',
      sentences: [
        {it: 'Vado alla stazione.', ar: 'أذهب إلى المحطة.'},
        {it: 'Ti aspetto alla stazione.', ar: 'أنتظرك في المحطة.'},
        {it: 'Arrivo alla stazione.', ar: 'أصل إلى المحطة.'}
      ]
    },
    stage: 2
  },
  {
    id: 'alla_festa',
    vocab: {
      word: 'festa',
      ar: 'حفلة',
      gender: 'femminile',
      article: 'la',
      starts_with: 'consonant',
      example: {it: 'La festa è bellissima.', ar: 'الحفلة جميلة جدا.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مناسبة أو حدث',
      example: {it: 'Vado a ballare.', ar: 'أذهب للرقص.'}
    },
    fusion: {
      formula: 'a + la = alla',
      result: 'alla',
      rule: 'مؤنث مفرد يبدأ بساكن',
      explanation: 'festa مؤنث (la festa)، وحرف الجر a مع la يتدمجان ويصبحان alla'
    },
    expression: {
      it: 'alla festa',
      ar: 'في الحفلة / إلى الحفلة',
      sentences: [
        {it: 'Vado alla festa.', ar: 'أذهب إلى الحفلة.'},
        {it: 'Ci vediamo alla festa.', ar: 'نلتقي في الحفلة.'},
        {it: 'Ballo alla festa.', ar: 'أرقص في الحفلة.'}
      ]
    },
    stage: 2
  },
  // ═══════════════════════════ مجموعة DAL (da + il) ═══════════════════════════
  {
    id: 'dal_dottore',
    vocab: {
      word: 'dottore',
      ar: 'طبيب / دكتور',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il dottore è bravo.', ar: 'الطبيب ماهر.'}
    },
    prep: {
      letter: 'da',
      meaning: 'عند / من',
      why_here: 'da مع الأشخاص تعني "عند" — أذهب عند الطبيب في عيادته',
      example: {it: 'Vengo da Roma.', ar: 'أجيء من روما.'}
    },
    fusion: {
      formula: 'da + il = dal',
      result: 'dal',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'dottore مذكر (il dottore)، وحرف الجر da مع il يتدمجان ويصبحان dal'
    },
    expression: {
      it: 'dal dottore',
      ar: 'عند الطبيب',
      sentences: [
        {it: 'Vado dal dottore.', ar: 'أذهب عند الطبيب.'},
        {it: 'Torno dal dottore.', ar: 'أعود من عند الطبيب.'},
        {it: 'Sono dal dottore.', ar: 'أنا عند الطبيب.'}
      ]
    },
    stage: 1
  },
  {
    id: 'dal_lavoro',
    vocab: {
      word: 'lavoro',
      ar: 'عمل / شغل',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il lavoro è finito.', ar: 'العمل انتهى.'}
    },
    prep: {
      letter: 'da',
      meaning: 'من',
      why_here: 'da تعني "من" — أعود قادما من العمل',
      example: {it: 'Vengo da casa.', ar: 'أجيء من البيت.'}
    },
    fusion: {
      formula: 'da + il = dal',
      result: 'dal',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'lavoro مذكر (il lavoro)، وحرف الجر da مع il يتدمجان ويصبحان dal'
    },
    expression: {
      it: 'dal lavoro',
      ar: 'من العمل',
      sentences: [
        {it: 'Torno dal lavoro.', ar: 'أعود من العمل.'},
        {it: 'Vengo dal lavoro.', ar: 'أجيء من العمل.'},
        {it: 'Esco dal lavoro alle 6.', ar: 'أخرج من العمل الساعة 6.'}
      ]
    },
    stage: 1
  },
  // ═══════════════════════════ مجموعة SUL (su + il) ═══════════════════════════
  {
    id: 'sul_tavolo',
    vocab: {
      word: 'tavolo',
      ar: 'طاولة',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il tavolo è di legno.', ar: 'الطاولة من خشب.'}
    },
    prep: {
      letter: 'su',
      meaning: 'على',
      why_here: 'su تعني "على" — الكتاب فوق سطح الطاولة',
      example: {it: 'Il gatto è su.', ar: 'القط في الأعلى.'}
    },
    fusion: {
      formula: 'su + il = sul',
      result: 'sul',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'tavolo مذكر (il tavolo)، وحرف الجر su مع il يتدمجان ويصبحان sul'
    },
    expression: {
      it: 'sul tavolo',
      ar: 'على الطاولة',
      sentences: [
        {it: 'Il libro è sul tavolo.', ar: 'الكتاب على الطاولة.'},
        {it: 'Metto le chiavi sul tavolo.', ar: 'أضع المفاتيح على الطاولة.'},
        {it: 'Mangiamo sul tavolo.', ar: 'نأكل على الطاولة.'}
      ]
    },
    stage: 1
  },
  {
    id: 'sulla_sedia',
    vocab: {
      word: 'sedia',
      ar: 'كرسي',
      gender: 'femminile',
      article: 'la',
      starts_with: 'consonant',
      example: {it: 'La sedia è comoda.', ar: 'الكرسي مريح.'}
    },
    prep: {
      letter: 'su',
      meaning: 'على',
      why_here: 'su تعني "على" — شيء موضوع فوق سطح الكرسي',
      example: {it: 'Siediti su.', ar: 'اجلس.'}
    },
    fusion: {
      formula: 'su + la = sulla',
      result: 'sulla',
      rule: 'مؤنث مفرد يبدأ بساكن',
      explanation: 'sedia مؤنث (la sedia)، وحرف الجر su مع la يتدمجان ويصبحان sulla'
    },
    expression: {
      it: 'sulla sedia',
      ar: 'على الكرسي',
      sentences: [
        {it: 'La borsa è sulla sedia.', ar: 'الحقيبة على الكرسي.'},
        {it: 'Il gatto dorme sulla sedia.', ar: 'القط ينام على الكرسي.'},
        {it: 'Siediti sulla sedia.', ar: 'اجلس على الكرسي.'}
      ]
    },
    stage: 2
  },
  // ═══════════════════════════ مجموعة NEL (in + il) ═══════════════════════════
  {
    id: 'nel_parco',
    vocab: {
      word: 'parco',
      ar: 'حديقة / متنزه',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il parco è bello.', ar: 'الحديقة جميلة.'}
    },
    prep: {
      letter: 'in',
      meaning: 'في',
      why_here: 'in تعني "في" — داخل الحديقة',
      example: {it: 'Sono in Italia.', ar: 'أنا في إيطاليا.'}
    },
    fusion: {
      formula: 'in + il = nel',
      result: 'nel',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'parco مذكر (il parco)، وحرف الجر in مع il يتدمجان ويصبحان nel'
    },
    expression: {
      it: 'nel parco',
      ar: 'في الحديقة',
      sentences: [
        {it: 'Cammino nel parco.', ar: 'أمشي في الحديقة.'},
        {it: 'I bambini giocano nel parco.', ar: 'الأطفال يلعبون في الحديقة.'},
        {it: 'C\'è un lago nel parco.', ar: 'يوجد بحيرة في الحديقة.'}
      ]
    },
    stage: 1
  },
  {
    id: 'nella_borsa',
    vocab: {
      word: 'borsa',
      ar: 'حقيبة',
      gender: 'femminile',
      article: 'la',
      starts_with: 'consonant',
      example: {it: 'La borsa è nuova.', ar: 'الحقيبة جديدة.'}
    },
    prep: {
      letter: 'in',
      meaning: 'في',
      why_here: 'in تعني "في" — داخل الحقيبة',
      example: {it: 'Metto in tasca.', ar: 'أضع في الجيب.'}
    },
    fusion: {
      formula: 'in + la = nella',
      result: 'nella',
      rule: 'مؤنث مفرد يبدأ بساكن',
      explanation: 'borsa مؤنث (la borsa)، وحرف الجر in مع la يتدمجان ويصبحان nella'
    },
    expression: {
      it: 'nella borsa',
      ar: 'في الحقيبة',
      sentences: [
        {it: 'Le chiavi sono nella borsa.', ar: 'المفاتيح في الحقيبة.'},
        {it: 'Metto il telefono nella borsa.', ar: 'أضع الهاتف في الحقيبة.'},
        {it: 'Cerco nella borsa.', ar: 'أبحث في الحقيبة.'}
      ]
    },
    stage: 2
  },
  // ═══════════════════════════ مجموعة DEL (di + il) ═══════════════════════════
  {
    id: 'del_pane',
    vocab: {
      word: 'pane',
      ar: 'خبز',
      gender: 'maschile',
      article: 'il',
      starts_with: 'consonant',
      example: {it: 'Il pane è fresco.', ar: 'الخبز طازج.'}
    },
    prep: {
      letter: 'di',
      meaning: 'من / بعض',
      why_here: 'di تستخدم للتعبير عن "بعض من" أو الملكية',
      example: {it: 'Un bicchiere di acqua.', ar: 'كوب من الماء.'}
    },
    fusion: {
      formula: 'di + il = del',
      result: 'del',
      rule: 'مذكر مفرد يبدأ بساكن عادي',
      explanation: 'pane مذكر (il pane)، وحرف الجر di مع il يتدمجان ويصبحان del'
    },
    expression: {
      it: 'del pane',
      ar: 'بعض الخبز / من الخبز',
      sentences: [
        {it: 'Voglio del pane.', ar: 'أريد بعض الخبز.'},
        {it: 'Compro del pane.', ar: 'أشتري خبزا.'},
        {it: 'Il prezzo del pane.', ar: 'سعر الخبز.'}
      ]
    },
    stage: 1
  },
  // ═══════════════════════════ مجموعة ALL' (a + l') ═══════════════════════════
  {
    id: 'all_universita',
    vocab: {
      word: 'universita',
      ar: 'جامعة',
      gender: 'femminile',
      article: "l'",
      starts_with: 'vowel',
      example: {it: "L'universita e grande.", ar: 'الجامعة كبيرة.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان (الجامعة)',
      example: {it: 'Vado a Roma.', ar: 'أذهب إلى روما.'}
    },
    fusion: {
      formula: "a + l' = all'",
      result: "all'",
      rule: 'مفرد يبدأ بحرف متحرك',
      explanation: "universita تبدأ بـ U (متحرك) فتأخذ l'، وحرف الجر a مع l' يتدمجان ويصبحان all'"
    },
    expression: {
      it: "all'universita",
      ar: 'إلى الجامعة / في الجامعة',
      sentences: [
        {it: "Vado all'universita.", ar: 'أذهب إلى الجامعة.'},
        {it: "Studio all'universita.", ar: 'أدرس في الجامعة.'},
        {it: "Lavoro all'universita.", ar: 'أعمل في الجامعة.'}
      ]
    },
    stage: 2
  },
  // ═══════════════════════════ مجموعة ALLO (a + lo) ═══════════════════════════
  {
    id: 'allo_stadio',
    vocab: {
      word: 'stadio',
      ar: 'ملعب',
      gender: 'maschile',
      article: 'lo',
      starts_with: 's_impure',
      example: {it: 'Lo stadio e pieno.', ar: 'الملعب ممتلئ.'}
    },
    prep: {
      letter: 'a',
      meaning: 'إلى / في',
      why_here: 'لأننا نذهب إلى مكان (الملعب)',
      example: {it: 'Vado a vedere la partita.', ar: 'أذهب لمشاهدة المباراة.'}
    },
    fusion: {
      formula: 'a + lo = allo',
      result: 'allo',
      rule: 'مذكر يبدأ بـ s+ساكن أو z',
      explanation: 'stadio يبدأ بـ st (s+ساكن) فيأخذ lo، وحرف الجر a مع lo يتدمجان ويصبحان allo'
    },
    expression: {
      it: 'allo stadio',
      ar: 'إلى الملعب / في الملعب',
      sentences: [
        {it: 'Vado allo stadio.', ar: 'أذهب إلى الملعب.'},
        {it: 'Sono allo stadio.', ar: 'أنا في الملعب.'},
        {it: 'Ci vediamo allo stadio.', ar: 'نلتقي في الملعب.'}
      ]
    },
    stage: 3
  }
];
