export type Locale = 'en' | 'ar';

export function getDictionary(locale: Locale) {
  const translations = {
    en: {
      hero: {
        eyebrow: 'Established 1990 · Amman, Jordan',
        title: 'Serving Humanity with Dignity',
        intro1: 'The Jordan Hashemite Charity Organization delivers humanitarian aid and development support across',
        introHighlight: '30+ countries',
        intro2: '— with compassion, impartiality, and excellence.',
        statCountries: 'Countries',
        statFamilies: 'Families Supported',
        statVolunteers: 'Volunteers Active',
        ctaDonate: 'Make a Donation',
        ctaMission: 'Our Mission',
      },
      patronage: {
        label: 'Royal Patronage',
        statement: 'The official humanitarian arm of the Hashemite Kingdom of Jordan',
      },
      impact: {
        label: 'Our Global Reach',
        titlePre: 'Transforming',
        titleAccent: 'Lives',
        subtitle: 'Dedicated humanitarian service across continents, touching millions of lives with compassion and excellence',
      },
      programs: {
        label: 'Humanitarian Excellence',
        titlePre: 'Our',
        titleAccent: 'Programs',
        subtitle: 'Making tangible impact across 30+ countries through strategic, sustainable humanitarian initiatives',
      },
      news: {
        label: 'Latest Updates',
        titlePre: 'News &',
        titleAccent: 'Stories',
        subtitle: 'Stay informed about our latest humanitarian initiatives, partnerships, and impact stories',
      },
      nav: {
        donate: 'Donate',
        donateNow: 'Donate Now',
      },
    },
    ar: {
      hero: {
        eyebrow: 'تأسست عام 1990 · عمّان، الأردن',
        title: 'حقيقة الإنسانية بكرامة',
        intro1: 'تقدّم الهيئة الخيرية الأردنية الهاشمية المساعدات الإنسانية والدعم التنموي عبر',
        introHighlight: '30+ دول',
        intro2: '— برحمة وحيادية وتميّز.',
        statCountries: 'الدول',
        statFamilies: 'الأسر المدعومة',
        statVolunteers: 'المتطوعون النشطون',
        ctaDonate: 'قدم تبرعك',
        ctaMission: 'مهمتنا',
      },
      patronage: {
        label: 'الرعاية الملكية',
        statement: 'الذراع الإنساني الرسمي للمملكة الأردنية الهاشمية',
      },
      impact: {
        label: 'نطاقنا العالمي',
        titlePre: 'تغيير',
        titleAccent: 'الحياة',
        subtitle: 'خدمة إنسانية مكرسة عبر جميع القارات، لمس حياة الملايين برحمة وتميز',
      },
      programs: {
        label: 'التميز الإنساني',
        titlePre: 'برامج',
        titleAccent: 'الهيئة',
        subtitle: 'إحداث تأثير ملموس عبر 30+ دول من خلال مبادرات إنسانية استراتيجية ومستدامة',
      },
      news: {
        label: 'آخر التحديثات',
        titlePre: 'الأخبار',
        titleAccent: 'والقصص',
        subtitle: 'ابق على اطّلاع بأحدث مبادراتنا الإنسانية والشراكات وقصص التأثير',
      },
      nav: {
        donate: 'تبرع',
        donateNow: 'تبرع الآن',
      },
    },
  };

  return translations[locale];
}

export function hasLocale(locale: unknown): locale is Locale {
  return locale === 'en' || locale === 'ar';
}
