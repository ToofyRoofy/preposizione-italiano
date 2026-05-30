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
      word: 'università',
      ar: 'جامعة',
      gender: 'femminile',
      article: "l'",
      starts_with: 'vowel',
      example: {it: "L'università è grande.", ar: 'الجامعة كبيرة.'}
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
      explanation: "università تبدأ بـ U (متحرك) فتأخذ l'، وحرف الجر a مع l' يتدمجان ويصبحان all'"
    },
    expression: {
      it: "all'università",
      ar: 'إلى الجامعة / في الجامعة',
      sentences: [
        {it: "Vado all'università.", ar: 'أذهب إلى الجامعة.'},
        {it: "Studio all'università.", ar: 'أدرس في الجامعة.'},
        {it: "Lavoro all'università.", ar: 'أعمل في الجامعة.'}
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
      example: {it: 'Lo stadio è pieno.', ar: 'الملعب ممتلئ.'}
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
