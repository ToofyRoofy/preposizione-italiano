/* ═══ SETS DATA ═══ */
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
