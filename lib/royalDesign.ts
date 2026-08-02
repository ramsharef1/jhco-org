// Royal Design System - JHCO (Royal Charity under Hashemite Patronage)

export const royalColors = {
  // Primary Royal Palette
  deepNavy: '#0a1428',      // Royal Navy (formal)
  royalGold: '#d4af37',     // 24K Gold (accent)
  crimson: '#8b1a1a',       // Royal Crimson (secondary)
  ivory: '#f9f7f4',         // Ivory (background)

  // Accents
  lightGold: '#e8c547',
  darkGold: '#a89830',
  paleIvory: '#fafaf8',
  charcoal: '#3d3d3d',
  lightGray: '#6b6b6b',
  border: '#e8e4db',
};

export const royalTypography = {
  serif: 'Georgia, "Garamond", serif',
  sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  sizes: {
    h1: '64px',
    h2: '48px',
    h3: '32px',
    h4: '24px',
    body: '16px',
    small: '14px',
    tiny: '12px',
  },
};

export const royalElements = {
  // Crown symbol for royalty
  crown: '👑',
  // Heraldic symbols
  shield: '🛡️',
  // Official seals
  seal: '⚜️',
  // National elements
  flag: '🇯🇴',
};

export const menuStructure = {
  main: [
    {
      label: 'الرعاية الملكية',
      labelEn: 'Royal Patronage',
      href: '/royal-patronage',
      icon: '👑',
    },
    {
      label: 'برامجنا',
      labelEn: 'Our Programs',
      href: '/programs',
      icon: '🎯',
    },
    {
      label: 'عن الهيئة',
      labelEn: 'About Us',
      href: '/about',
      icon: 'ℹ️',
    },
    {
      label: 'الحكومة والشفافية',
      labelEn: 'Government',
      href: '/government',
      icon: '📋',
    },
    {
      label: 'التأثير والإحصائيات',
      labelEn: 'Impact',
      href: '/impact',
      icon: '📊',
    },
    {
      label: 'شارك معنا',
      labelEn: 'Get Involved',
      href: '/get-involved',
      icon: '❤️',
    },
  ],
  government: [
    { label: 'مركز الإعلام', labelEn: 'Media Center', icon: '📰' },
    { label: 'التقارير', labelEn: 'Reports', icon: '📄' },
    { label: 'الامتثال', labelEn: 'Compliance', icon: '⚖️' },
    { label: 'الشفافية', labelEn: 'Transparency', icon: '👁️' },
    { label: 'الإعلانات', labelEn: 'Announcements', icon: '📢' },
    { label: 'الجهات الحكومية', labelEn: 'Government Partners', icon: '🏛️' },
  ],
  programs: [
    { label: 'الأزمات والطوارئ', labelEn: 'Crisis Response', icon: '🚨' },
    { label: 'الرعاية الصحية', labelEn: 'Healthcare', icon: '🏥' },
    { label: 'التعليم', labelEn: 'Education', icon: '📚' },
    { label: 'الأمن الغذائي', labelEn: 'Food Security', icon: '🍽️' },
    { label: 'المأوى والإسكان', labelEn: 'Shelter', icon: '🏠' },
    { label: 'سبل العيش', labelEn: 'Livelihoods', icon: '💼' },
    { label: 'تمكين النساء', labelEn: 'Women Empowerment', icon: '👩' },
    { label: 'البرامج الشبابية', labelEn: 'Youth Programs', icon: '👦' },
  ],
  regions: [
    { label: 'الشرق الأوسط', labelEn: 'Middle East', icon: '🌍' },
    { label: 'شمال أفريقيا', labelEn: 'North Africa', icon: '🌍' },
    { label: 'أفريقيا جنوب الصحراء', labelEn: 'Sub-Saharan Africa', icon: '🌍' },
    { label: 'آسيا والمحيط الهادئ', labelEn: 'Asia & Pacific', icon: '🌏' },
  ],
  resources: [
    { label: 'الأخبار', labelEn: 'News', icon: '📰' },
    { label: 'المدونة', labelEn: 'Blog', icon: '✍️' },
    { label: 'الفيديوهات', labelEn: 'Videos', icon: '🎥' },
    { label: 'المنشورات', labelEn: 'Publications', icon: '📖' },
    { label: 'قصص النجاح', labelEn: 'Success Stories', icon: '⭐' },
  ],
  getInvolved: [
    { label: 'تبرع', labelEn: 'Donate', icon: '💝' },
    { label: 'تطوع', labelEn: 'Volunteer', icon: '🤝' },
    { label: 'الشراكات', labelEn: 'Partnerships', icon: '👥' },
    { label: 'الأحداث', labelEn: 'Events', icon: '🎪' },
    { label: 'الرعاية المؤسسية', labelEn: 'Corporate Giving', icon: '🏢' },
  ],
};

export const footerStructure = {
  aboutUs: {
    title: 'عن الهيئة',
    titleEn: 'About JHCO',
    links: [
      { label: 'مهمتنا', labelEn: 'Our Mission', href: '/about/mission' },
      { label: 'رؤيتنا', labelEn: 'Our Vision', href: '/about/vision' },
      { label: 'التاريخ', labelEn: 'History', href: '/about/history' },
      { label: 'القيادة', labelEn: 'Leadership', href: '/about/leadership' },
      { label: 'القيم', labelEn: 'Values', href: '/about/values' },
      { label: 'الفريق', labelEn: 'Team', href: '/about/team' },
    ],
  },
  programs: {
    title: 'البرامج',
    titleEn: 'Programs',
    links: [
      { label: 'جميع البرامج', labelEn: 'All Programs', href: '/programs' },
      { label: 'الأزمات والطوارئ', labelEn: 'Crisis Response', href: '/programs/crisis' },
      { label: 'الصحة والتعليم', labelEn: 'Health & Education', href: '/programs/health' },
      { label: 'الأمن الغذائي', labelEn: 'Food Security', href: '/programs/food' },
      { label: 'التنمية المجتمعية', labelEn: 'Community Dev.', href: '/programs/community' },
      { label: 'التقارير البرامجية', labelEn: 'Program Reports', href: '/programs/reports' },
    ],
  },
  impact: {
    title: 'التأثير',
    titleEn: 'Impact',
    links: [
      { label: 'إحصائيات التأثير', labelEn: 'Impact Stats', href: '/impact/statistics' },
      { label: 'قصص النجاح', labelEn: 'Success Stories', href: '/impact/stories' },
      { label: 'شهادات المستفيدين', labelEn: 'Testimonials', href: '/impact/testimonials' },
      { label: 'التقارير السنوية', labelEn: 'Annual Reports', href: '/impact/reports' },
      { label: 'حالات الدراسة', labelEn: 'Case Studies', href: '/impact/case-studies' },
      { label: 'المنشورات', labelEn: 'Publications', href: '/impact/publications' },
    ],
  },
  government: {
    title: 'الحكومة والشفافية',
    titleEn: 'Government',
    links: [
      { label: 'مركز الإعلام', labelEn: 'Media Center', href: '/media-center' },
      { label: 'التقارير المالية', labelEn: 'Financial Reports', href: '/financial-reports' },
      { label: 'سياسات الامتثال', labelEn: 'Compliance', href: '/compliance' },
      { label: 'الحكومة الرشيدة', labelEn: 'Governance', href: '/governance' },
      { label: 'مدونة السلوك', labelEn: 'Code of Conduct', href: '/code-of-conduct' },
      { label: 'الشفافية', labelEn: 'Transparency', href: '/transparency' },
    ],
  },
  getInvolved: {
    title: 'شارك معنا',
    titleEn: 'Get Involved',
    links: [
      { label: 'تبرع الآن', labelEn: 'Donate Now', href: '/donate' },
      { label: 'تطوع معنا', labelEn: 'Volunteer', href: '/volunteer' },
      { label: 'الشراكات والرعاية', labelEn: 'Partnerships', href: '/partnerships' },
      { label: 'أحداثنا', labelEn: 'Events', href: '/events' },
      { label: 'الرعاية المؤسسية', labelEn: 'Corporate CSR', href: '/corporate' },
      { label: 'نشرتنا الإخبارية', labelEn: 'Newsletter', href: '/newsletter' },
    ],
  },
  resources: {
    title: 'الموارد',
    titleEn: 'Resources',
    links: [
      { label: 'الأخبار والمدونة', labelEn: 'News & Blog', href: '/news' },
      { label: 'الفيديوهات', labelEn: 'Videos', href: '/videos' },
      { label: 'معرض الصور', labelEn: 'Photo Gallery', href: '/gallery' },
      { label: 'الأسئلة الشائعة', labelEn: 'FAQ', href: '/faq' },
      { label: 'اتصل بنا', labelEn: 'Contact', href: '/contact' },
      { label: 'الخريطة', labelEn: 'Sitemap', href: '/sitemap' },
    ],
  },
  legal: {
    title: 'القانونية',
    titleEn: 'Legal',
    links: [
      { label: 'سياسة الخصوصية', labelEn: 'Privacy Policy', href: '/privacy' },
      { label: 'الشروط والأحكام', labelEn: 'Terms', href: '/terms' },
      { label: 'سياسات الاستخدام', labelEn: 'Usage Policy', href: '/usage-policy' },
      { label: 'الوصولية', labelEn: 'Accessibility', href: '/accessibility' },
      { label: 'الاتجار بالبشر', labelEn: 'Human Trafficking', href: '/trafficking' },
      { label: 'الإفصاح المالي', labelEn: 'Financial Disclosure', href: '/disclosure' },
    ],
  },
  contact: {
    title: 'اتصل بنا',
    titleEn: 'Contact Us',
    links: [
      { label: 'المقر الرئيسي - عمّان', labelEn: 'HQ - Amman', href: '/contact/amman' },
      { label: 'المكاتب الإقليمية', labelEn: 'Regional Offices', href: '/contact/regional' },
      { label: 'نموذج الاتصال', labelEn: 'Contact Form', href: '/contact/form' },
      { label: 'البريد الإلكتروني', labelEn: 'Email', href: 'mailto:info@jhco.org' },
      { label: 'الهاتف', labelEn: 'Phone', href: 'tel:+962612345678' },
      { label: 'وسائل التواصل', labelEn: 'Social Media', href: '/contact/social' },
    ],
  },
};
