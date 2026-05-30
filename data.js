/* ═══════════════════════════ THE DATA (v2 — Story-Based Pedagogy) ═══════════════════════════
 *
 * التغييرات الرئيسية (من منظور Pedagogy):
 *
 * 1. [جديد] حقل `scene` — يربط كل chunk بـ Core Story Pattern من المقال (S1–S10)
 *    يسمح للتطبيق بعرض الـ chunk في سياق مشهده الطبيعي بدل عزله.
 *
 * 2. [جديد] حقل `img` — الصورة الذهنية الأساسية (اتجاه / داخل / انطلاق / ارتباط ...)
 *    هي قبل الترجمة، وهي اللي يبنيها العقل للاستخدام التلقائي.
 *
 * 3. [جديد] حقل `contrast` — يجمّع الـ chunks في مجموعات Contrast Learning
 *    أهم مجموعة: HOME → in casa / a casa / da casa
 *
 * 4. [تعديل] بعض الـ notes كانت تشرح قاعدة نحوية بدل ما تبني صورة ذهنية.
 *    تم تعديلها لتبدأ بالمعنى الحركي/المكاني أولاً.
 *
 * 5. [تعديل] buildChunkQueue — تم تغيير الترتيب:
 *    قبل: see → mcq_ar (ترجمة أولاً ❌)
 *    بعد: see → mcq_note (صورة ذهنية أولاً ✓) → mcq_it → mcq_ar
 *    المبدأ: الإحساس قبل الترجمة.
 *    وتم حذف write_ar — الهدف الكتابة بالإيطالي لا الترجمة للعربي.
 *
 * 6. [جديد] ثابت CONTRAST_GROUPS — لتشغيل جلسات المقارنة المباشرة.
 *
 * 7. [جديد] ثابت SCENES — تعريف الـ 10 Core Story Patterns من المقال.
 * ═══════════════════════════════════════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'prep_v4_merged';

/* ── Core Story Patterns (المشاهد العشرة من المقال) ── */
const SCENES = {
  S1:  { id:'S1',  name:'Going to a Place',     template:'Marco va ___ lavoro ogni mattina.',    img:'شخص يتحرك نحو وجهة' },
  S2:  { id:'S2',  name:'Inside a Place',        template:'Adesso Marco è ___ ufficio.',          img:'شخص داخل مساحة فعلية' },
  S3:  { id:'S3',  name:'Coming From a Place',   template:'Marco torna ___ lavoro alle sei.',     img:'رجوع أو خروج من نقطة بداية' },
  S4:  { id:'S4',  name:'At Someone\'s Place',   template:'Stasera siamo ___ Marco.',             img:'التواجد عند شخص أو مختص' },
  S5:  { id:'S5',  name:'With People',           template:'Marco cena ___ famiglia.',             img:'شخص مع أشخاص آخرين' },
  S6:  { id:'S6',  name:'Transportation',        template:'Vado al lavoro ___ treno.',            img:'طريقة التنقل' },
  S7:  { id:'S7',  name:'Sports & Games',        template:'Nel weekend giochiamo ___ calcio.',    img:'نشاط كهدف أو اتجاه' },
  S8:  { id:'S8',  name:'Time of Day / Season',  template:'Studio italiano ___ mattina.',         img:'وقت حدوث الفعل' },
  S9:  { id:'S9',  name:'Countries & Geography', template:'Vorrei vivere ___ Italia.',            img:'الوجود داخل مساحة جغرافية' },
  S10: { id:'S10', name:'On / Surface',          template:'Il telefono è ___ tavolo.',            img:'شيء فوق سطح' },
};

/* ── Mental Image Keywords ── */
// اتجاه | داخل | انطلاق | عند-شخص | مصاحبة | وسيلة-داخل | فوق | هدف | ارتباط | سبب | وقت | مسافة-زمنية | طريقة | قرب

/* ── Contrast Groups ── 
 * أهم جزء في النظام: يُشغّل جلسة مقارنة مباشرة بين نفس المكان/الفكرة مع حروف جر مختلفة.
 * المقال: "هذا النوع من المقارنات يبني الفهم الحقيقي"
 */
const CONTRAST_GROUPS = {
  HOME: {
    name: 'البيت — المثلث الأشهر',
    concept: 'نفس الكلمة، ثلاثة معانٍ مختلفة حسب الحرف',
    items: ['in casa', 'a casa', 'da casa'],
    mini_stories: [
      'Sono in casa.   → أنا داخل البيت (مساحة)',
      'Vado a casa.    → أذهب للبيت (اتجاه)',
      'Vengo da casa.  → آتي من البيت (انطلاق)',
    ]
  },
  WORK: {
    name: 'الشغل — نفس القاعدة',
    concept: 'in / a / da مع أي مكان روتيني',
    items: ['in ufficio', 'al lavoro', 'dal lavoro'],
    mini_stories: [
      'Sono in ufficio.      → داخل المكتب',
      'Vado al lavoro.       → اتجاه للعمل',
      'Torno dal lavoro.     → راجع من العمل',
    ]
  },
  TRANSPORT: {
    name: 'المواصلات — داخل أم فوق؟',
    concept: 'السر: in = داخل حاوية | su = فوق سطح',
    items: ['in macchina', 'in treno', 'in autobus', 'sul motorino', 'sulla bici', "sull'autobus"],
    mini_stories: [
      'in macchina / in treno / in autobus → أنت محاط بجدران (داخل)',
      'sul motorino / sulla bici           → أنت فوق الوسيلة (مكشوف)',
    ]
  },
  TIME_OF_DAY: {
    name: 'أوقات اليوم — di vs nel',
    concept: 'di مع الثلاثة الكبار | nel فقط مع pomeriggio',
    items: ['di mattina', 'di sera', 'di notte', 'nel pomeriggio', 'al mattino'],
    mini_stories: [
      'di mattina / di sera / di notte  → بدون أداة (أوقات عامة)',
      'nel pomeriggio                   → مذكر محدد يحتاج أداة (nel = in + il)',
      'al mattino                       → تحديد أكثر، مثل: mi sveglio al mattino',
    ]
  },
  CITY_VS_COUNTRY: {
    name: 'المدينة vs البلد',
    concept: 'a مع المدن | in مع الدول والقارات',
    items: ['a Roma', 'a Milano', 'a Napoli', 'in Italia', 'in Francia', 'in Europa'],
    mini_stories: [
      'a Roma / a Milano / a Napoli   → المدينة نقطة (اتجاه)',
      'in Italia / in Europa          → الدولة مساحة تحتويك (داخل)',
    ]
  },
  PLACE_A_VS_IN: {
    name: 'نفس المكان — a أم in؟',
    concept: 'a = اتجاه/وجهة | in = أنت داخله',
    items: ['a scuola', 'in classe', 'al lavoro', 'in ufficio'],
    mini_stories: [
      'Vado a scuola.    → أذهب للمدرسة (اتجاه)',
      'Sono in classe.   → أنا داخل الفصل (مساحة)',
      'Vado al lavoro.   → أذهب للعمل (اتجاه)',
      'Sono in ufficio.  → أنا داخل المكتب (مساحة)',
    ]
  },
};

const CHUNKS = [
  /* ════════════════════ A ════════════════════ */
  {it:'a calcio',   ar:'(لعب) كرة القدم',
   scene:'S7', img:'هدف / نشاط',
   note:'النشاط نفسه كهدف — giocare a calcio: اللعب يُعامل كوجهة، مثلما تذهب لمكان تذهب لنشاط. بدون أداة تعريف مع الألعاب دايماً.'},

  {it:'a carte',    ar:'(اللعب) بالكوتشينة',
   scene:'S7', img:'هدف / نشاط',
   note:'اللعبة كهدف — giocare a carte: نفس منطق a calcio وa tennis. النشاط وجهة ذهنية.'},

  {it:'a casa',     ar:'إلى المنزل / في المنزل',
   scene:'S1', img:'اتجاه',
   contrast:'HOME',
   note:'🏠 الاتجاه للبيت — torno a casa: البيت هنا فكرة لا مبنى. قارن: in casa (داخل) | da casa (خروج). الثلاثة معاً هم أهم مثلث في الإيطالي.'},

  {it:'a letto',    ar:'في السرير',
   scene:null, img:'اتجاه / حالة',
   note:'الفراش كحالة أو وجهة — vado a letto: أذهب للنوم (حركة نحو حالة). sono a letto: أنا في وضع النوم.'},

  {it:'a Milano',   ar:'في ميلانو / إلى ميلانو',
   scene:'S9', img:'اتجاه / نقطة',
   contrast:'CITY_VS_COUNTRY',
   note:'المدينة نقطة — الإيطالي يرى المدينة كنقطة على الخريطة يتجه نحوها. جميع المدن بلا استثناء: a Roma, a Parigi, al Cairo (Il Cairo → al Cairo لأن a + il = al).'},

  {it:'a Napoli',   ar:'في نابولي / إلى نابولي',
   scene:'S9', img:'اتجاه / نقطة',
   contrast:'CITY_VS_COUNTRY',
   note:'المدن دايماً a — نفس القاعدة في كل مدن العالم بلا استثناء.'},

  {it:'a piedi',    ar:'مشياً / سيراً',
   scene:'S6', img:'طريقة',
   note:'المشي كطريقة تنقل — a piedi: الجسم نفسه كوسيلة. وحيدة بين المواصلات تأخذ a لأن الأقدام نقطة تماس مع الأرض.'},

  {it:'a Roma',     ar:'في روما / إلى روما',
   scene:'S9', img:'اتجاه / نقطة',
   contrast:'CITY_VS_COUNTRY',
   note:'المدينة نقطة اتجاه — vivo a Roma (نقطة إقامة) | vado a Roma (حركة نحو نقطة). كلاهما a لأن المدينة تُرى كنقطة.'},

  {it:'a scuola',   ar:'إلى المدرسة / في المدرسة',
   scene:'S1', img:'اتجاه / وجهة',
   contrast:'PLACE_A_VS_IN',
   note:'🎒 المدرسة كوجهة يومية — vado a scuola: الروتين يجعلها وجهة لا مساحة. قارن: sono in classe (داخل الفصل) — هناك الجزئية والمساحة.'},

  {it:'a tennis',   ar:'تنس',
   scene:'S7', img:'هدف / نشاط',
   note:'اللعبة كهدف — giocare a tennis: النشاط وجهة. نفس منطق a calcio وa carte.'},

  {it:'a terra',    ar:'على الأرض / في الأسفل',
   scene:null, img:'اتجاه / حالة',
   note:'تعبير ثابت يصف حالة أو موقع — a terra: شيء سقط أو في الأسفل. a piedi, a letto, a terra: كلها أحوال ثابتة بدون أداة.'},

  {it:'a tutti',    ar:'للجميع',
   scene:null, img:'توجيه',
   note:'التوجيه لمجموعة عامة — Buongiorno a tutti: a تُعبّر عن وصول الكلام أو الفعل لجهة. حرف العطاء والتوجيه.'},

  {it:'a volte',    ar:'أحياناً',
   scene:null, img:'تكرار',
   note:'ظرف تكرار ثابت — a volte: أحياناً. qualche volta أيضاً تعني نفس المعنى. a volte مرتبطة بفكرة "في بعض الأوقات" (نقاط زمنية متفرقة).'},

  /* ── AL / ALLA ── */
  {it:'al bar',         ar:'في الكافيه',
   scene:'S1', img:'اتجاه / وجهة',
   note:'الكافيه وجهة يومية — bar مذكر غير قابل للتصريف: vado al bar (al = a + il). المكان المحدد المذكور بالتعريف يأخذ الأداة المدمجة.'},

  {it:'al fratello',    ar:'للأخ',
   scene:null, img:'توجيه / إعطاء',
   note:'a كحرف الإعطاء والتوجيه — do il libro al fratello: a تربط الفعل بمن يستقبل. هذا هو "المفعول به غير المباشر" في الإيطالي.'},

  {it:'al lavoro',      ar:'إلى العمل / في العمل',
   scene:'S1', img:'اتجاه / وجهة',
   contrast:'WORK',
   note:'⚙️ العمل كوجهة — vado al lavoro (al = a + il): الحركة نحو مكان العمل. قارن: sono in ufficio (داخل) | torno dal lavoro (خروج).'},

  {it:'al mattino',     ar:'في الصباح',
   scene:'S8', img:'وقت / نقطة زمنية',
   contrast:'TIME_OF_DAY',
   note:'الصباح كنقطة زمنية محددة — al mattino: تحديد أكثر من di mattina. mi sveglio al mattino = أصحى في الصباح (نقطة يومية ثابتة).'},

  {it:'al mercato',     ar:'إلى السوق / في السوق',
   scene:'S1', img:'اتجاه / وجهة',
   note:'السوق وجهة — vado al mercato (al = a + il): الحركة نحو مكان تجاري محدد. وجهة = a + أداة التعريف المدمجة.'},

  {it:'al parco',       ar:'إلى الحديقة',
   scene:'S1', img:'اتجاه / وجهة',
   note:'الحديقة وجهة ترفيهية — vado al parco (al = a + il): مكان محدد يتجه إليه المتكلم.'},

  {it:'al primo piano', ar:'في الطابق الأول',
   scene:null, img:'موقع / نقطة',
   note:'الطابق كموقع محدد — abito al primo piano: رقم الطابق نقطة تحديد. al = a + il مع أرقام الطوابق دايماً.'},

  {it:'al ristorante',  ar:'في المطعم',
   scene:'S1', img:'اتجاه / وجهة',
   note:'المطعم وجهة اجتماعية — andiamo al ristorante (al = a + il): مكان محدد مذكر. وجهة يومية تأخذ a.'},

  {it:'al secondo piano', ar:'في الطابق الثاني',
   scene:null, img:'موقع / نقطة',
   note:'نفس منطق al primo piano — abito al secondo piano: الطابق نقطة موقع محددة.'},

  {it:'al supermercato', ar:'في السوبرماركت',
   scene:'S1', img:'اتجاه / وجهة',
   note:'السوبرماركت وجهة — vado al supermercato (al = a + il): مكان يتجه إليه المتكلم لغرض.'},

  {it:'al telefono',    ar:'على الهاتف / بالهاتف',
   scene:null, img:'اتصال / وسيلة',
   note:'تعبير ثابت — sono al telefono: مشغول بمكالمة هاتفية. al telefono جملة جامدة موروثة. للوسيلة نستخدم per: parlare per telefono. الفرق: sono al telefono (أنا في مكالمة) ≠ chiama per telefono (يتصل عبر الهاتف).'},

  {it:'alla festa',     ar:'في الحفلة',
   scene:'S1', img:'اتجاه / وجهة',
   note:'الحفلة وجهة اجتماعية — vado alla festa (alla = a + la): festa مؤنث. مناسبة محددة = a مع أداة.'},

  {it:'alla madre',     ar:'للأم',
   scene:null, img:'توجيه / إعطاء',
   note:'a كحرف الإعطاء — scrivo alla madre: a تصل الفعل إلى المستقبِل. نفس وظيفة al fratello.'},

  {it:'alla stazione',  ar:'إلى المحطة',
   scene:'S1', img:'اتجاه / وجهة',
   note:'المحطة وجهة — vado alla stazione (alla = a + la): stazione مؤنث. نقطة مواصلات يتجه إليها.'},

  /* ════════════════════ DI ════════════════════ */
  {it:'di caldo',       ar:'من الحر (السبب)',
   scene:null, img:'سبب',
   note:'di للسببية — morire di caldo: البرهان أن الحر هو السبب. di fame, di freddo, di paura: كلها أسباب تستخدم di.'},

  {it:'di casa',        ar:'منزلي / متعلق بالبيت',
   scene:null, img:'ارتباط / وصف',
   note:'di كرابط ارتباط — oggetti di casa: di لا تترجم "من" هنا بل تربط الشيء بتصنيفه. الكلمة الثانية تصف الأولى.'},

  {it:'di cucina',      ar:'متعلق بالطبخ',
   scene:null, img:'ارتباط / موضوع',
   note:'di لتصنيف الموضوع — libro di cucina: كتاب الطبخ. di تربط العنوان بتصنيفه. لا تترجم حرفياً.'},

  {it:'di fame',        ar:'من الجوع (السبب)',
   scene:null, img:'سبب',
   note:'di للسببية — muoiono di fame: الجوع هو السبب. نمط ثابت: [فعل] + di + [سبب المعاناة].'},

  {it:'di freddo',      ar:'من البرد',
   scene:null, img:'سبب',
   note:'di للسببية — morire di freddo: البرد هو السبب. نفس نمط di fame وdi caldo.'},

  {it:'di mattina',     ar:'في الصباح',
   scene:'S8', img:'وقت',
   contrast:'TIME_OF_DAY',
   note:'⏰ di مع أوقات اليوم الثلاثة — di mattina, di sera, di notte: بدون أداة. الاستثناء الوحيد: nel pomeriggio (مذكر محدد).'},

  {it:'di noia',        ar:'من الملل',
   scene:null, img:'سبب',
   note:'di للسببية المجازية — morire di noia: الملل كسبب مجازي. نفس نمط di fame وdi paura.'},

  {it:'di notte',       ar:'في الليل',
   scene:'S8', img:'وقت',
   contrast:'TIME_OF_DAY',
   note:'⏰ di مع الليل — di notte: وقت عام بدون أداة. الثلاثة: di mattina, di sera, di notte. الاستثناء: nel pomeriggio.'},

  {it:'di paura',       ar:'من الخوف',
   scene:null, img:'سبب',
   note:'di للسببية — tremare di paura: الخوف سبب الارتجاف. نفس نمط di fame وdi freddo.'},

  {it:'di sera',        ar:'في المساء',
   scene:'S8', img:'وقت',
   contrast:'TIME_OF_DAY',
   note:'⏰ di مع المساء — di sera: وقت عام بدون أداة. مع الثلاثة الكبار: mattina, sera, notte = دايماً di.'},

  {it:'di sport',       ar:'رياضي / عن الرياضة',
   scene:null, img:'ارتباط / موضوع',
   note:'di لتصنيف الموضوع — pagine di sport: di تربط المحتوى بتصنيفه.'},

  {it:'di stanchezza',  ar:'من التعب',
   scene:null, img:'سبب',
   note:'di للسببية — morire di stanchezza: التعب هو السبب. نفس النمط.'},

  {it:'di storia',      ar:'حول التاريخ / مادة التاريخ',
   scene:null, img:'ارتباط / موضوع',
   note:'di لتصنيف الموضوع — un esame di storia: التاريخ هو موضوع الامتحان. di تربط عنصرين لا تترجم.'},

  {it:'di viaggi',      ar:'عن الرحلات / سياحي',
   scene:null, img:'ارتباط / موضوع',
   note:'di لتصنيف المحتوى — rivista di viaggi: مجلة موضوعها السفر. نفس نمط di storia وdi sport.'},

  /* ════════════════════ DA ════════════════════ */
  {it:'da casa',        ar:'من البيت',
   scene:'S3', img:'نقطة انطلاق',
   contrast:'HOME',
   note:'🏠 الخروج من البيت — vengo da casa: البيت نقطة انطلاق. قارن: a casa (اتجاه) | in casa (داخل). هذا المثلث هو قلب نظام المقارنة.'},

  {it:'da Marco',       ar:'عند ماركو',
   scene:'S4', img:'عند شخص',
   note:'da مع الشخص = "عنده" — sono da Marco: da + اسم شخص تعني التواجد في مكانه. الشخص يصبح المكان.'},

  {it:'dai miei amici', ar:'عند أصدقائي',
   scene:'S4', img:'عند شخص',
   note:'da مع أشخاص = "عندهم" — sono dai miei amici (dai = da + i): أنا في مكانهم. نفس منطق da Marco.'},

  {it:'dal dentista',   ar:'عند طبيب الأسنان',
   scene:'S4', img:'عند مختص',
   note:'da مع المختص = "في عيادته" — vado dal dentista: الطبيب يصبح المكان. dentista مذكر رغم نهايته بـ a (يُحفظ).'},

  {it:'dal dottore',    ar:'عند الطبيب',
   scene:'S4', img:'عند مختص',
   note:'da مع المختص = "في عيادته" — vado dal dottore (dal = da + il): الطبيب يصبح المكان. نفس منطق dal dentista.'},

  {it:'dal lavoro',     ar:'من العمل (عائد)',
   scene:'S3', img:'نقطة انطلاق',
   contrast:'WORK',
   note:'⚙️ العمل كنقطة انطلاق — torno dal lavoro: قادم من مكان العمل. قارن: al lavoro (اتجاه) | in ufficio (داخل).'},

  {it:'dal letto',      ar:'من السرير (نهض)',
   scene:'S3', img:'نقطة انطلاق',
   note:'الفراش كنقطة انطلاق — mi alzo dal letto: النهوض هو الخروج من نقطة. da دايماً تعني بداية حركة.'},

  {it:'dal motorino',   ar:'من الدراجة النارية',
   scene:'S3', img:'نقطة انطلاق',
   note:'النزول = انطلاق من نقطة — scendo dal motorino: da للنزول والمغادرة. مقارن: sul motorino (الصعود/التواجد فوقها).'},

  {it:'dal treno',      ar:'من القطار',
   scene:'S3', img:'نقطة انطلاق',
   note:'النزول من وسيلة = نقطة انطلاق — scendo dal treno: da تعني مغادرة نقطة. مقارن: in treno (التواجد داخله).'},

  {it:'dalla macchina', ar:'من السيارة',
   scene:'S3', img:'نقطة انطلاق',
   note:'الخروج من وسيلة — scendo dalla macchina: da = مغادرة نقطة. dalla = da + la (السيارة مؤنث).'},

  {it:'dalla porta',    ar:'عبر الباب / من الباب',
   scene:null, img:'عبور / نقطة انطلاق',
   note:'الباب كنقطة عبور — entro dalla porta: da تعني "عابراً من خلال". الباب نقطة الانتقال.'},

  {it:'da tre anni',   ar:'منذ ثلاث سنوات',
   scene:null, img:'مدة زمنية ممتدة',
   note:'da + مدة زمنية = منذ (وما زال مستمراً) — Studio italiano da tre anni: أدرس الإيطالية منذ 3 سنوات (وأنا ما زلت أدرس). الفرق عن per: per tre anni = لمدة ثلاث سنوات (انتهت).'},

  {it:'da stamattina', ar:'منذ الصباح',
   scene:null, img:'مدة زمنية ممتدة',
   note:'da + وقت = منذ ذلك الوقت — Aspetto da stamattina: أنتظر منذ الصباح. stamattina = questa mattina. da يربط لحظة الماضي بالحاضر.'},

  {it:'da sempre',     ar:'منذ الأبد / دائماً',
   scene:null, img:'مدة زمنية لانهائية',
   note:'da sempre: منذ الأبد — Ti amo da sempre: أحبك منذ الأبد. قارن: per sempre (للأبد في المستقبل) vs. da sempre (منذ الماضي حتى الآن).'},

  /* ════════════════════ IN ════════════════════ */
  {it:'in appartamento', ar:'في شقة سكنية',
   scene:'S2', img:'داخل مساحة',
   note:'نوع السكن كمساحة — in appartamento: بدون أداة مع نوع السكن. الإيطالي يرى نفسه داخل هذا الحيز. in villa, in casa: نفس النمط.'},

  {it:'in ascensore',   ar:'بالمصعد',
   scene:'S6', img:'داخل مساحة',
   note:'المصعد حاوية تحتويك — sono in ascensore: أنت داخل صندوق يتحرك. نفس منطق in treno وin macchina.'},

  {it:'in autobus',     ar:'بالأتوبيس',
   scene:'S6', img:'داخل وسيلة',
   contrast:'TRANSPORT',
   note:'🚌 داخل الأتوبيس — in autobus: أنت داخل حاوية. قارن: sull\'autobus (أنت فوق/صاعد إليه — أقل شيوعاً). in هو الطبيعي للمواصلات العامة.'},

  {it:'in bagno',       ar:'في الحمام',
   scene:'S2', img:'داخل غرفة',
   note:'غرف المنزل = داخل مساحة — sono in bagno: أنت داخل الحمام. غرف المنزل دايماً in بدون أداة: in bagno, in camera, in cucina.'},

  {it:'in banca',       ar:'في البنك',
   scene:'S2', img:'داخل مؤسسة',
   note:'المؤسسة الخدمية كمساحة — sono in banca: أنت داخل المؤسسة. in بدون أداة مع: banca, farmacia, biblioteca, ufficio.'},

  {it:'in biblioteca',  ar:'في المكتبة',
   scene:'S2', img:'داخل مؤسسة',
   note:'المؤسسة الثقافية كمساحة — studio in biblioteca: أنت داخل الفضاء. نفس نمط in banca وin farmacia.'},

  {it:'in bici',        ar:'بالدراجة',
   scene:'S6', img:'وسيلة',
   note:'اختصار طبيعي لـ in bicicletta — vado in bici: الاختصار شائع في الكلام اليومي.'},

  {it:'in bicicletta',  ar:'بالدراجة الهوائية',
   scene:'S6', img:'وسيلة',
   contrast:'TRANSPORT',
   note:'تعبير ثابت محفوظ — in bicicletta: الإيطاليون اعتادوا تاريخياً استخدام in مع الدراجة الهوائية. قارن: sul motorino (دراجة نارية). القاعدة: in bicicletta وsul motorino يُحفظان معاً كزوج. ⚠️ لا تُعمِّم القاعدة على وسائل أخرى.'},

  {it:'in camera',      ar:'في الغرفة',
   scene:'S2', img:'داخل غرفة',
   note:'غرفة النوم كمساحة — sono in camera: داخل الغرفة. غرف المنزل: in camera, in bagno, in cucina, in salotto.'},

  {it:'in campagna',    ar:'في الريف',
   scene:'S9', img:'داخل مساحة جغرافية',
   note:'الريف كمساحة جغرافية واسعة — vivo in campagna: البيئة الطبيعية تحتويك. in بدون أداة مع: campagna, montagna, città.'},

  {it:'in casa',        ar:'داخل المنزل',
   scene:'S2', img:'داخل مساحة',
   contrast:'HOME',
   note:'🏠 داخل البيت — sono in casa: أنت داخل المساحة. قارن: a casa (اتجاه للبيت) | da casa (خروج منه). هذا المثلث أهم ما في الإيطالي.'},

  {it:'in centro',      ar:'في وسط المدينة',
   scene:'S2', img:'داخل مساحة',
   note:'المركز كمساحة — sono in centro: أنت داخل منطقة المدينة. in بدون أداة مع centro كمفهوم عام.'},

  {it:'in classe',      ar:'في الفصل الدراسي',
   scene:'S2', img:'داخل مساحة',
   contrast:'PLACE_A_VS_IN',
   note:'الفصل كمساحة — sono in classe: أنت داخل الغرفة الفعلية. قارن: a scuola (وجهة: الذهاب للمدرسة كروتين). الجزئية والاتجاه مختلفان.'},

  {it:'in cucina',      ar:'في المطبخ',
   scene:'S2', img:'داخل غرفة',
   note:'المطبخ كمساحة — sono in cucina: أنت داخل الغرفة. غرف المنزل دايماً in: cucina, camera, bagno, salotto.'},

  {it:'in Egitto',      ar:'في مصر',
   scene:'S9', img:'داخل مساحة جغرافية',
   note:'الدولة كمساحة تحتويك — vivo in Egitto: الدولة تحيط بك. الدول دايماً in بغض النظر عن الجنس: in Italia, in Egitto, in Giappone.'},

  {it:'in estate',      ar:'في الصيف',
   scene:'S8', img:'داخل فترة زمنية',
   note:'الفصل كفترة تحتويك — in estate: أنت داخل موسم. الفصول الأربعة كلها in: in primavera, in estate, in autunno, in inverno.'},

  {it:'in Europa',      ar:'في أوروبا',
   scene:'S9', img:'داخل مساحة جغرافية',
   note:'القارة كمساحة جغرافية — vivo in Europa: القارات تُعامل مثل الدول. in Africa, in Asia, in America: نفس النمط.'},

  {it:'in famiglia',    ar:'في كنف الأسرة',
   scene:'S5', img:'داخل مجموعة',
   note:'الأسرة كمساحة اجتماعية — crescere in famiglia: في أحضان العائلة. in هنا تعني الانتماء والاحتواء.'},

  {it:'in farmacia',    ar:'في الصيدلية',
   scene:'S2', img:'داخل مؤسسة',
   note:'الصيدلية كمساحة خدمية — sono in farmacia: داخل المؤسسة. in بدون أداة: farmacia, banca, biblioteca.'},

  {it:'in Francia',     ar:'في فرنسا',
   scene:'S9', img:'داخل مساحة جغرافية',
   contrast:'CITY_VS_COUNTRY',
   note:'الدولة كمساحة — vivo in Francia: الدولة تحيط بك. قارن: a Parigi (مدينة = نقطة). الدول = in، المدن = a.'},

  {it:'in fretta',      ar:'على عجل / بسرعة',
   scene:null, img:'طريقة / حال',
   note:'طريقة تنفيذ الفعل — faccio tutto in fretta: in هنا تصف الحال. in silenzio, in fretta, in pace: أحوال بدون أداة.'},

  {it:'in inverno',     ar:'في الشتاء',
   scene:'S8', img:'داخل فترة زمنية',
   note:'الشتاء كموسم يحتويك — in inverno: داخل فترة. الفصول الأربعة كلها in بدون أداة.'},

  {it:'in Italia',      ar:'في إيطاليا',
   scene:'S9', img:'داخل مساحة جغرافية',
   contrast:'CITY_VS_COUNTRY',
   note:'إيطاليا كمساحة تحتويك — vivo in Italia: الدولة فضاء أنت بداخله. قارن: a Roma (مدينة = نقطة اتجاه).'},

  {it:'in italiano',    ar:'بالإيطالية',
   scene:null, img:'داخل / وسيلة لغوية',
   note:'اللغة كمساحة تعبير — parlo in italiano: أنت "داخل" هذه اللغة تتحرك فيها. in مع أسماء اللغات للتعبير عن وسيلة التواصل.'},

  {it:'in macchina',    ar:'بالسيارة',
   scene:'S6', img:'داخل وسيلة',
   contrast:'TRANSPORT',
   note:'🚗 السيارة تحتويك — vado in macchina: أنت داخل حاوية. قارن: sul motorino (فوق سطح مكشوف). داخل = in، فوق = su.'},

  {it:'in palestra',    ar:'في الجيم',
   scene:'S2', img:'داخل مساحة',
   note:'الجيم كفضاء داخلي — vado in palestra: مكان رياضي تدخله. in بدون أداة مع الأماكن الرياضية العامة.'},

  {it:'in primavera',   ar:'في الربيع',
   scene:'S8', img:'داخل فترة زمنية',
   note:'الربيع كموسم يحتويك — in primavera: داخل فترة. الفصول الأربعة: in primavera, in estate, in autunno, in inverno.'},

  {it:'in silenzio',    ar:'في صمت / بهدوء',
   scene:null, img:'طريقة / حال',
   note:'الصمت كطريقة تنفيذ — faccio tutto in silenzio: in تصف الحال. في: in fretta, in silenzio, in pace.'},

  {it:'in strada',      ar:'في الشارع',
   scene:'S2', img:'داخل مساحة',
   note:'الشارع كمساحة — sono in strada: أنت في الفضاء العام. in بدون أداة مع الأماكن العامة المفتوحة: in strada, in piazza.'},

  {it:'in treno',       ar:'بالقطار',
   scene:'S6', img:'داخل وسيلة',
   contrast:'TRANSPORT',
   note:'🚆 القطار يحتويك — viaggio in treno: أنت داخل عربة. مع المواصلات التي تحتوي الجسم: in treno, in macchina, in autobus.'},

  {it:'in ufficio',     ar:'في المكتب',
   scene:'S2', img:'داخل مساحة',
   contrast:'WORK',
   note:'⚙️ المكتب كمساحة — lavoro in ufficio: داخل مكان العمل. قارن: al lavoro (الاتجاه للعمل كروتين). الجزئية والاتجاه مختلفان.'},

  {it:'in un appartamento', ar:'في شقة',
   scene:'S2', img:'داخل مساحة',
   note:'نكرة + in — vivo in un appartamento: السكن نوع لا مكان محدد. in + نكرة تصف نوع المكان لا وجهة محددة.'},

  {it:'in una piccola città', ar:'في مدينة صغيرة',
   scene:'S9', img:'داخل مساحة',
   note:'وصف المكان بالنكرة — abito in una piccola città: in + صفة + اسم. يختلف عن in città (عامة بدون أداة).'},

  {it:'in via Roma',    ar:'في شارع روما',
   scene:null, img:'داخل مساحة / موقع',
   note:'العنوان كموقع — abito in via Roma: in via + اسم الشارع هو الصيغة الثابتة للعناوين.'},

  {it:'nel pomeriggio', ar:'بعد الظهر',
   scene:'S8', img:'داخل فترة زمنية',
   contrast:'TIME_OF_DAY',
   note:'⏰ الاستثناء الوحيد — nel pomeriggio (nel = in + il): pomeriggio مذكر محدد يحتاج أداة تعريف. عكس di mattina وdi sera وdi notte (كلها بدون أداة).'},

  {it:'nel salotto',    ar:'في الصالون',
   scene:'S2', img:'داخل غرفة',
   note:'الصالون كغرفة محددة — sono nel salotto (nel = in + il): الغرف المذكرة المحددة تأخذ nel. في الكلام اليومي: in salotto أيضاً مقبول.'},

  /* ════════════════════ SU ════════════════════ */
  {it:'sul cellulare',  ar:'على الموبايل',
   scene:'S10', img:'فوق سطح رقمي',
   note:'الشاشة كسطح — leggo sul cellulare: المحتوى "فوق" الشاشة. su مع الأجهزة الإلكترونية: sul cellulare, sul computer, sul web.'},

  {it:'sul motorino',   ar:'على الدراجة النارية',
   scene:'S6', img:'فوق وسيلة',
   contrast:'TRANSPORT',
   note:'🛵 فوق الدراجة النارية — vado sul motorino: أنت فوق سطح مكشوف. قارن: in macchina (داخل حاوية). الفرق الجسدي: داخل=in، فوق=su.'},

  {it:'sul quaderno',   ar:'على الدفتر',
   scene:'S10', img:'فوق سطح',
   note:'الدفتر كسطح كتابي — scrivo sul quaderno: الكلمات تُكتب فوق السطح. su = على سطح مادي.'},

  {it:'sul tavolo',     ar:'على الطاولة',
   scene:'S10', img:'فوق سطح',
   note:'الطاولة كسطح — il libro è sul tavolo (sul = su + il): الكتاب فوق السطح. المثال الكلاسيكي لـ su.'},

  {it:'sul treno',      ar:'على/في القطار',
   scene:'S6', img:'فوق / على وسيلة',
   note:'الصعود على القطار — salgo sul treno: لحظة الصعود أو التواجد في القطار الكبير. sul تستخدم عند التأكيد على الصعود. in treno هي الأشيع في السفر العادي.'},

  {it:'sul web',        ar:'على الإنترنت',
   scene:'S10', img:'فوق سطح رقمي',
   note:'الإنترنت كسطح — cerco sul web: تتصفح فوق سطح رقمي. مثل sul cellulare وsul computer.'},

  {it:'sulla sedia',    ar:'على الكرسي',
   scene:'S10', img:'فوق سطح',
   note:'الكرسي كسطح — la borsa è sulla sedia (sulla = su + la): الحقيبة فوق سطح الكرسي.'},

  {it:'sulle scale',    ar:'على السلالم',
   scene:'S10', img:'فوق سطح',
   note:'السلالم كسطح — salgo sulle scale (sulle = su + le): تمشي فوق درجات السلم. su + سطح تمشي عليه.'},

  /* ════════════════════ PER ════════════════════ */
  {it:'per caso',       ar:'بالصدفة',
   scene:null, img:'سبب / ظرف',
   note:'per caso تعبير ثابت — ci siamo incontrati per caso: الصدفة هي السبب/الظرف. per تجيب على "ليه حدث هذا؟"'},

  {it:'per lavoro',     ar:'للعمل / من أجل العمل',
   scene:null, img:'هدف / سبب',
   note:'per للهدف — viaggio per lavoro: العمل هو الهدف من السفر. per تجيب على "ليه؟": per lavoro, per studio, per piacere.'},

  {it:'per ore',        ar:'لساعات / لمدة ساعات',
   scene:null, img:'مدة زمنية',
   note:'per للمدة — studio per ore: المدة الزمنية المستغرقة. per due ore, per tre giorni, per sempre: كلها مدد زمنية.'},

  {it:'per Roma',       ar:'نحو روما / باتجاه روما',
   scene:null, img:'اتجاه / مرور',
   note:'per للاتجاه/المرور — parto per Roma: الرحلة في اتجاه روما أو مروراً بها. per هنا تحدد المسار لا الوجهة النهائية.'},

  {it:'per sempre',     ar:'للأبد',
   scene:null, img:'مدة زمنية',
   note:'per للمدة اللانهائية — te lo dico per sempre: المدة = كل الوقت. per + مدة زمنية: per sempre, per due ore, per tre giorni.'},

  /* ════════════════════ CON ════════════════════ */
  {it:'con attenzione', ar:'باهتمام / بانتباه',
   scene:null, img:'طريقة / أداة',
   note:'con لطريقة التنفيذ — faccio tutto con attenzione: الانتباه هو الأداة الذهنية. con بدون أداة تعريف يصف الطريقة: con cura, con calma, con passione.'},

  {it:'con cura',       ar:'بعناية',
   scene:null, img:'طريقة',
   note:'con لطريقة التنفيذ — lavoro con cura: العناية هي الطريقة. نمط ثابت: con + [قيمة]: con cura, con calma, con attenzione.'},

  {it:'con gli amici',  ar:'مع الأصدقاء',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع جمع المذكر — esco con gli amici: con لا يتدمج أبداً مع أداة التعريف (يكتب مفصولاً دايماً).'},

  {it:'con il cugino',  ar:'مع ابن العم',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع مفرد مذكر — esco con il cugino: con لا يتدمج. وهذا يميزه عن a وda وin وsu التي تتدمج كلها.'},

  {it:'con il fratello', ar:'مع الأخ',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة — esco con il fratello: con لا يتدمج. col موجود في القواميس لكن con il هو المعيار في الإيطالية المعاصرة.'},

  {it:'con il padre',   ar:'مع الأب',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع والد — con il padre: con وper هما الوحيدان اللذان لا يتدمجان. كل الآخرين (a, da, in, su, di) يتدمجون.'},

  {it:'con il professore', ar:'مع الأستاذ',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع معلم — studio con il professore: con لا يتدمج. الفصل بين con وأداة التعريف دائم.'},

  {it:'con la famiglia', ar:'مع العائلة',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع العائلة — ceno con la famiglia: con لا يتدمج. المعنى واضح: الشخص يقوم بالفعل مع هذه المجموعة.'},

  {it:'con la madre',   ar:'مع الأم',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع الأم — esco con la madre: con لا يتدمج. يُكتب مفصولاً دايماً مع أي أداة تعريف.'},

  {it:'con la sorella', ar:'مع الأخت',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع أخت — con la sorella: con لا يتدمج. colla غير مستخدمة في الإيطالية المعاصرة.'},

  {it:'con noi',        ar:'معنا',
   scene:'S5', img:'مصاحبة',
   note:'المصاحبة مع ضمير — vieni con noi: con مع الضمائر مباشرة بدون أداة. con me, con te, con lui, con noi, con loro.'},

  {it:'con passione',   ar:'بشغف',
   scene:null, img:'طريقة / أداة',
   note:'الشغف كطريقة تنفيذ — lavora con passione: الشغف هو الأداة الروحية. con + [قيمة داخلية].'},

  {it:'con un sorriso', ar:'بابتسامة',
   scene:null, img:'طريقة / حال',
   note:'الابتسامة كطريقة — risponde con un sorriso: con + نكرة تصف الحال عند تنفيذ الفعل.'},

  /* ════════════════════ TRA / FRA ════════════════════ */
  {it:'fra poco',       ar:'بعد قليل / عما قريب',
   scene:null, img:'مسافة زمنية',
   note:'Fra = Tra تماماً — fra poco: مسافة زمنية صغيرة تفصل الآن عن المستقبل. tra poco وfra poco مترادفتان.'},

  {it:'tra amici',      ar:'بين الأصدقاء',
   scene:'S5', img:'بين / وسط',
   note:'tra للوجود بين مجموعة — tra amici (نكرة): بين الأصدقاء بصيغة مطلقة/عامة. الشعور بالانتماء لمجموعة.'},

  {it:'tra due ore',    ar:'بعد ساعتين / خلال ساعتين',
   scene:null, img:'مسافة زمنية',
   note:'tra للمستقبل القريب — ci vediamo tra due ore: مسافة زمنية من الآن للحدث. دايماً مستقبل.'},

  {it:'tra gli amici',  ar:'بين الأصدقاء',
   scene:'S5', img:'بين / وسط',
   note:'tra مع المعرفة — tra gli amici (معرفة): في وسط هؤلاء الأصدقاء المحددين. الفرق عن tra amici (نكرة) دقيق جداً.'},

  /* ════════════════════ SENZA ════════════════════ */
  {it:'senza bussare',  ar:'بدون طرق الباب',
   scene:null, img:'غياب / بدون',
   note:'senza + مصدر (infinito) — entra senza bussare: senza تنفي الفعل المصاحب. senza + infinito تعبر عن الحال السلبي.'},

  /* ════════════════════ VICINO A ════════════════════ */
  {it:'vicino al mare',     ar:'قريب من البحر',
   scene:null, img:'قرب / موقع نسبي',
   note:'vicino a + أداة التعريف — abito vicino al mare (al = a + il): mare مذكر. vicino a يصف القرب النسبي من موقع.'},

  {it:'vicino al parco',    ar:'قريب من الحديقة',
   scene:null, img:'قرب / موقع نسبي',
   note:'vicino a + أداة التعريف — abito vicino al parco (al = a + il): parco مذكر. vicino a + المكان.'},

  {it:'vicino alla scuola', ar:'قريب من المدرسة',
   scene:null, img:'قرب / موقع نسبي',
   note:'vicino a + أداة التعريف — abito vicino alla scuola (alla = a + la): scuola مؤنث.'},

  /* ════════════════════ ALL' ════════════════════ */
  {it:"all'ospedale",   ar:'إلى المستشفى / في المستشفى',
   scene:'S1', img:'اتجاه / وجهة',
   note:"المستشفى وجهة — vado all'ospedale: يبدأ بمتحرك فيُكتب all' بدل al (a + l'). نفس نمط باقي وجهات a."},

  {it:"all'università", ar:'إلى الجامعة / في الجامعة',
   scene:'S1', img:'اتجاه / وجهة',
   note:"الجامعة وجهة تعليمية — vado all'università: يبدأ بمتحرك فيُكتب all'. نفس منطق a scuola لكن مع elision."},

  {it:"sull'autobus",   ar:'على الأتوبيس',
   scene:'S6', img:'فوق وسيلة',
   contrast:'TRANSPORT',
   note:"sull' = su + l' — sono sull'autobus: استخدام أقل شيوعاً من in autobus، لكن يُسمع عند التأكيد على الصعود. في الكلام العادي: in autobus."}
];

/* ═══════════════════════════ SYSTEM LOGIC (Spaced Repetition & Engine) ═══════════════════════════ */
const MASTERY = [
  { lv:0, name:'جديد',       days:1,  decay:10 },
  { lv:1, name:'مألوف',      days:3,  decay:7  },
  { lv:2, name:'مرتاح',      days:7,  decay:4  },
  { lv:3, name:'قوي',        days:14, decay:2  },
  { lv:4, name:'محفوظ جيداً',days:30, decay:1  }
];

let appState = { cp:{}, sets:{A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0, I:0}, tts:true, ips:null, lastDecay:null };
let session = null;
let sessionStats = { c:0, w:0 };
let currentItem = null;
let waiting = false;
let pickedMcq = null;
let retryMode = false;

function $(id) { return document.getElementById(id); }
function norm(s) { return (s || '').trim().toLowerCase().replace(/[àáâã]/g,'a').replace(/[èéêë]/g,'e').replace(/[ìíîï]/g,'i').replace(/[òóôõ]/g,'o').replace(/[ùúûü]/g,'u').replace(/[.,!?]/g,'').replace(/\s+/g,' ').replace(/[\u2018\u2019\u0060\u02BC']/g,"'"); }
function normDecomp(s) {
  return norm(s).replace(/\s*\+\s*/g,'+').replace(/\s+/g,'');
}
function normCombine(s) {
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
  if(appState.sets.I === undefined) appState.sets.I = 0;  // ← الإصلاح
  if(appState.tts === undefined) appState.tts = true;
}

function getCP(it) {
  if (!appState.cp[it]) appState.cp[it] = { m:0, mem:0, nextRv:0, lastRv:0, interval:1 };
  return appState.cp[it];
}

function processDecay() {
  const today = new Date().toISOString().split('T')[0];
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
  let full = (article + ' ' + word).replace(/'/g, ' ').replace(/\s+/g, ' ').trim();
  playTTS(full);
}
function playTTS(txt) {
  if (!appState.tts || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  let clean = txt.replace(/l['\u2019]\s+/gi, "l'").trim();
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = 'it-IT';
  u.rate = 0.85;
  // مؤشر مرئي: تغيير كل 🔊 إلى 🔉 أثناء التشغيل
  document.querySelectorAll('[onclick*="playTTS"]').forEach(el => {
    el.dataset.origText = el.innerHTML;
    el.innerHTML = el.innerHTML.replace('🔊', '🔉');
  });
  u.onend = function() {
    document.querySelectorAll('[onclick*="playTTS"]').forEach(el => {
      if (el.dataset.origText) el.innerHTML = el.dataset.origText;
    });
  };
  window.speechSynthesis.speak(u);
}

/* ──────────────────────────────────────────────────────────────────────────
 * buildChunkQueue — ترتيب الخطوات التعليمية
 *
 * [تعديل جوهري من منظور Pedagogy]:
 *
 * الترتيب القديم ❌:
 *   see → mcq_ar → mcq_it → mcq_note → write_ar → write → ...
 *   المشكلة: الترجمة (mcq_ar) جاءت قبل الصورة الذهنية (mcq_note)
 *             وهذا يبني عادة الترجمة بدل الإحساس الطبيعي.
 *
 * الترتيب الجديد ✓:
 *   see → mcq_note → mcq_it → mcq_ar → write → ...
 *   المبدأ: الصورة الذهنية (img) أولاً → السياق الإيطالي → الترجمة أخيراً.
 *   وتم حذف write_ar لأن الهدف الكتابة بالإيطالي لا الترجمة للعربي.
 * ────────────────────────────────────────────────────────────────────────── */
function buildChunkQueue(c) {
  return [
    { type:'see',      chunk:c },          // 1. رؤية الـ chunk كاملاً مع صورته الذهنية
    { type:'mcq_note', chunk:c },          // 2. اختيار الصورة الذهنية/المشهد (قبل الترجمة ✓)
    { type:'mcq_it',   chunk:c },          // 3. اختيار الجملة الإيطالية الصحيحة في السياق
    { type:'mcq_ar',   chunk:c },          // 4. الترجمة (تأتي بعد بناء الإحساس)
    { type:'write',    chunk:c },          // 5. كتابة إيطالي
    { type:'mcq_note', chunk:c, noHint:true },  // 6. اختبار الصورة الذهنية بدون تلميح
    { type:'mcq_it',   chunk:c },          // 7. سياق بدون hint
    { type:'mcq_ar',   chunk:c, noHint:true }, // 8. ترجمة بدون hint
    { type:'write',    chunk:c }           // 9. كتابة إيطالي نهائية
  ];
}
