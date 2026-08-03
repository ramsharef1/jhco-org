// Comprehensive sitemap structure for header and footer navigation
// This ensures consistency across all navigation elements

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
  icon?: string;
  description?: string;
  descriptionAr?: string;
  children?: NavItem[];
}

export interface SitemapSection {
  title: string;
  titleAr: string;
  icon?: string;
  items: NavItem[];
}

export const sitemap = {
  // Main header navigation with mega menu support
  main: [
    {
      label: 'الرعاية الملكية',
      labelEn: 'Royal Patronage',
      href: '/royal-patronage',
      icon: '👑',
      description: 'Royal heritage and governance',
      descriptionAr: 'الإرث الملكي والحوكمة',
      children: [
        { label: 'البيان التاريخي', labelEn: 'Royal Message', href: '/royal-message' },
        { label: 'الدعم الملكي', labelEn: 'Royal Support', href: '/royal-patronage/support' },
        { label: 'الشركاء الملكيون', labelEn: 'Royal Partners', href: '/royal-patronage/partners' },
        { label: 'المبادرات الملكية', labelEn: 'Royal Initiatives', href: '/royal-patronage/initiatives' },
      ],
    },
    {
      label: 'برامجنا',
      labelEn: 'Our Programs',
      href: '/programs',
      icon: '🌍',
      description: 'Transformative humanitarian programs',
      descriptionAr: 'برامج إنسانية تحويلية',
      children: [
        {
          label: 'الاستجابة للأزمات',
          labelEn: 'Crisis Response',
          href: '/programs/crisis',
        },
        {
          label: 'الصحة والرعاية',
          labelEn: 'Healthcare',
          href: '/programs/healthcare',
        },
        {
          label: 'التعليم والتطوير',
          labelEn: 'Education',
          href: '/programs/education',
        },
        {
          label: 'الأمن الغذائي',
          labelEn: 'Food Security',
          href: '/programs/food-aid',
        },
        {
          label: 'سبل العيش',
          labelEn: 'Livelihood',
          href: '/programs/livelihoods',
        },
        {
          label: 'الملبس والإغاثة',
          labelEn: 'Clothing Bank',
          href: '/programs/clothing-bank',
        },
        {
          label: 'جميع البرامج',
          labelEn: 'View All Programs',
          href: '/programs',
        },
      ],
    },
    {
      label: 'من نحن',
      labelEn: 'About Us',
      href: '/about',
      icon: 'ℹ️',
      description: 'Learn about our organization',
      descriptionAr: 'تعرف على منظمتنا',
      children: [
        { label: 'المهمة والرؤية', labelEn: 'Mission & Vision', href: '/about/mission' },
        { label: 'القيم والمبادئ', labelEn: 'Values', href: '/about/values' },
        { label: 'تاريخنا', labelEn: 'History', href: '/about/history' },
        { label: 'القيادة', labelEn: 'Leadership', href: '/about/leadership' },
        { label: 'الفريق', labelEn: 'Team', href: '/about/team' },
        { label: 'الجوائز والاعترافات', labelEn: 'Awards', href: '/about/awards' },
        { label: 'الشهادات', labelEn: 'Testimonials', href: '/impact/testimonials' },
      ],
    },
    {
      label: 'الحكومة والشفافية',
      labelEn: 'Government',
      href: '/government',
      icon: '🏛️',
      description: 'Governance and accountability',
      descriptionAr: 'الحوكمة والمساءلة',
      children: [
        { label: 'مركز الإعلام', labelEn: 'Media Center', href: '/media-center' },
        { label: 'التقارير المالية', labelEn: 'Financial Reports', href: '/financial-reports' },
        { label: 'الامتثال والسياسات', labelEn: 'Compliance', href: '/compliance' },
        { label: 'هيكل الحوكمة', labelEn: 'Governance Structure', href: '/governance/structure' },
        { label: 'مجلس الإدارة', labelEn: 'Board', href: '/governance/board' },
        { label: 'الشفافية والمساءلة', labelEn: 'Transparency', href: '/transparency' },
        { label: 'الإفصاحات', labelEn: 'Disclosures', href: '/governance/disclosures' },
      ],
    },
    {
      label: 'التأثير',
      labelEn: 'Impact',
      href: '/impact',
      icon: '📈',
      description: 'See our results and stories',
      descriptionAr: 'شاهد نتائجنا وقصصنا',
      children: [
        { label: 'إحصائيات التأثير', labelEn: 'Impact Statistics', href: '/impact/statistics' },
        { label: 'قصص النجاح', labelEn: 'Success Stories', href: '/impact/stories' },
        { label: 'دراسات الحالة', labelEn: 'Case Studies', href: '/impact/case-studies' },
        { label: 'التقارير السنوية', labelEn: 'Annual Reports', href: '/impact/reports' },
        { label: 'المنشورات والأبحاث', labelEn: 'Publications', href: '/impact/publications' },
        { label: 'أين نعمل', labelEn: 'Where We Work', href: '/where-we-work' },
        { label: 'الخريطة التفاعلية', labelEn: 'Interactive Map', href: '/impact/map' },
      ],
    },
    {
      label: 'شارك معنا',
      labelEn: 'Get Involved',
      href: '/get-involved',
      icon: '🤝',
      description: 'Make a difference today',
      descriptionAr: 'احدث فرقاً اليوم',
      children: [
        { label: 'تبرع الآن', labelEn: 'Donate', href: '/get-involved/donate', icon: '💝' },
        {
          label: 'التطوع معنا',
          labelEn: 'Volunteer',
          href: '/volunteer',
          icon: '👥',
          children: [
            { label: 'فرص التطوع', labelEn: 'Opportunities', href: '/volunteer/opportunities' },
            { label: 'شهادات المتطوعين', labelEn: 'Testimonials', href: '/volunteer/testimonials' },
            { label: 'بوابة المتطوعين', labelEn: 'Volunteer Portal', href: '/volunteer/portal' },
          ],
        },
        { label: 'الشراكات', labelEn: 'Partnerships', href: '/get-involved/partner', icon: '🤲' },
        { label: 'الفعاليات', labelEn: 'Events', href: '/events', icon: '🎪' },
        { label: 'CSR الشركات', labelEn: 'Corporate CSR', href: '/get-involved/corporate', icon: '🏢' },
        { label: 'اتصل بنا', labelEn: 'Contact Us', href: '/contact', icon: '📞' },
      ],
    },
    {
      label: 'الحملات',
      labelEn: 'Campaigns',
      href: '/campaigns',
      icon: '📢',
      description: 'Active campaigns and initiatives',
      descriptionAr: 'الحملات والمبادرات النشطة',
      children: [
        { label: 'جميع الحملات', labelEn: 'All Campaigns', href: '/campaigns' },
        { label: 'الحملات الجارية', labelEn: 'Ongoing Campaigns', href: '/campaigns/ongoing' },
        { label: 'الحملات المرتقبة', labelEn: 'Upcoming Campaigns', href: '/campaigns/upcoming' },
        { label: 'الحملات السابقة', labelEn: 'Past Campaigns', href: '/campaigns/past' },
      ],
    },
    {
      label: 'الوظائف والمسار الوظيفي',
      labelEn: 'Careers',
      href: '/careers',
      icon: '💼',
      description: 'Join our mission-driven team',
      descriptionAr: 'انضم لفريقنا المركز على الرسالة',
      children: [
        { label: 'جميع الوظائف', labelEn: 'All Jobs', href: '/careers' },
        { label: 'برامج التدريب', labelEn: 'Internships', href: '/careers/internships' },
        { label: 'ثقافة المؤسسة', labelEn: 'Our Culture', href: '/careers/culture' },
        { label: 'الفريق', labelEn: 'Staff Directory', href: '/staff-directory' },
      ],
    },
  ],

  // Footer sections
  footer: [
    {
      title: 'About JHCO',
      titleAr: 'حول الهيئة الخيرية الأردنية الهاشمية',
      icon: '🏢',
      items: [
        { label: 'مهمتنا', labelEn: 'Our Mission', href: '/about/mission' },
        { label: 'رؤيتنا', labelEn: 'Our Vision', href: '/about/vision' },
        { label: 'قيمنا', labelEn: 'Our Values', href: '/about/values' },
        { label: 'تاريخنا', labelEn: 'History', href: '/about/history' },
        { label: 'قيادتنا', labelEn: 'Leadership', href: '/about/leadership' },
        { label: 'فريقنا', labelEn: 'Team', href: '/about/team' },
        { label: 'الجوائز', labelEn: 'Awards', href: '/about/awards' },
      ],
    },
    {
      title: 'Programs',
      titleAr: 'البرامج',
      icon: '🎯',
      items: [
        { label: 'جميع البرامج', labelEn: 'All Programs', href: '/programs' },
        { label: 'الاستجابة للأزمات', labelEn: 'Crisis Response', href: '/programs/crisis' },
        { label: 'الصحة والتعليم', labelEn: 'Education', href: '/programs/education' },
        { label: 'الأمن الغذائي', labelEn: 'Food Security', href: '/programs/food-aid' },
        { label: 'سبل العيش', labelEn: 'Livelihoods', href: '/programs/livelihoods' },
        { label: 'الملبس والإغاثة', labelEn: 'Clothing Bank', href: '/programs/clothing-bank' },
        { label: 'تقارير البرامج', labelEn: 'Program Reports', href: '/programs/reports' },
      ],
    },
    {
      title: 'Impact',
      titleAr: 'التأثير',
      icon: '📊',
      items: [
        { label: 'أين نعمل', labelEn: 'Where We Work', href: '/where-we-work' },
        { label: 'إحصائيات التأثير', labelEn: 'Impact Stats', href: '/impact/statistics' },
        { label: 'قصص النجاح', labelEn: 'Success Stories', href: '/impact/stories' },
        { label: 'الشهادات', labelEn: 'Testimonials', href: '/impact/testimonials' },
        { label: 'التقارير السنوية', labelEn: 'Annual Reports', href: '/impact/reports' },
        { label: 'دراسات الحالة', labelEn: 'Case Studies', href: '/impact/case-studies' },
      ],
    },
    {
      title: 'Government',
      titleAr: 'الحكومة والشفافية',
      icon: '🛡️',
      items: [
        { label: 'مركز الإعلام', labelEn: 'Media Center', href: '/media-center' },
        { label: 'التقارير المالية', labelEn: 'Financial Reports', href: '/financial-reports' },
        { label: 'الامتثال', labelEn: 'Compliance', href: '/compliance' },
        { label: 'الحوكمة', labelEn: 'Governance', href: '/governance' },
        { label: 'قانون السلوك', labelEn: 'Code of Conduct', href: '/code-of-conduct' },
        { label: 'الشفافية', labelEn: 'Transparency', href: '/transparency' },
      ],
    },
    {
      title: 'Governance & Compliance',
      titleAr: 'الحوكمة والامتثال',
      icon: '🏛️',
      items: [
        { label: 'تسجيل الجمعية الخيرية', labelEn: 'Charity Registration', href: '/governance/registration' },
        { label: 'تقارير التدقيق', labelEn: 'Audit Reports', href: '/governance/audits' },
        { label: 'محاضر اجتماعات المجلس', labelEn: 'Board Minutes', href: '/governance/board-minutes' },
        { label: 'سياسة مكافحة الاحتيال', labelEn: 'Anti-Fraud Policy', href: '/governance/policies/anti-fraud' },
        { label: 'سياسة حماية المبلغين', labelEn: 'Whistleblower Policy', href: '/governance/whistleblower' },
        { label: 'الشهادات والامتثال', labelEn: 'Compliance Certifications', href: '/governance/compliance-certifications' },
        { label: 'الإفصاح المالي', labelEn: 'Financial Disclosure', href: '/governance/financial-disclosure' },
        { label: 'الحوكمة', labelEn: 'Governance', href: '/governance' },
      ],
    },
    {
      title: 'Transparency & Accountability',
      titleAr: 'الشفافية والمساءلة',
      icon: '📊',
      items: [
        { label: 'توزيع الميزانية', labelEn: 'Budget Breakdown', href: '/governance/financials/breakdown' },
        { label: 'منهجية قياس التأثير', labelEn: 'Impact Methodology', href: '/impact/methodology' },
        { label: 'شرح المقاييس', labelEn: 'Metrics Explained', href: '/impact/metrics-explained' },
        { label: 'بوابة الشكاوى والملاحظات', labelEn: 'Complaints Portal', href: '/governance/complaints' },
        { label: 'مركز الإعلام', labelEn: 'Media Center', href: '/media-center' },
        { label: 'الشفافية', labelEn: 'Transparency', href: '/transparency' },
      ],
    },
    {
      title: 'Ways to Give',
      titleAr: 'طرق التبرع',
      icon: '💝',
      items: [
        { label: 'تبرع الآن', labelEn: 'Donate Now', href: '/donate' },
        { label: 'التبرعات الشهرية', labelEn: 'Monthly Giving', href: '/give/monthly-giving' },
        { label: 'التبرعات الشركات', labelEn: 'Corporate Giving', href: '/give/corporate' },
        { label: 'التبرعات من مكان العمل', labelEn: 'Workplace Giving', href: '/give/workplace-giving' },
        { label: 'تبرعات عينية', labelEn: 'In-Kind Donations', href: '/give/in-kind' },
        { label: 'التبرعات الموصية بها', labelEn: 'Legacy Giving', href: '/give/legacy' },
        { label: 'جمع التبرعات', labelEn: 'Fundraise for Us', href: '/give/fundraise' },
        { label: 'التبرعات المتكررة', labelEn: 'Recurring Donations', href: '/donate/recurring' },
      ],
    },
    {
      title: 'Donor Support',
      titleAr: 'دعم المانحين',
      icon: '🤝',
      items: [
        { label: 'أسئلة المانحين الشائعة', labelEn: 'Donor FAQ', href: '/donor-faq' },
        { label: 'موارد المانحين', labelEn: 'Donor Resources', href: '/donor-resources' },
        { label: 'معلومات الخصم الضريبي', labelEn: 'Tax Deductibility', href: '/give/tax-info' },
        { label: 'مقارنة خطط التبرع', labelEn: 'Giving Plans', href: '/give/plans' },
        { label: 'سجل التبرعات', labelEn: 'Donation History', href: '/account/donations' },
        { label: 'نجاح التبرع', labelEn: 'Donation Success', href: '/donate/success' },
      ],
    },
    {
      title: 'Get Involved',
      titleAr: 'شارك معنا',
      icon: '🤲',
      items: [
        { label: 'التطوع', labelEn: 'Volunteer', href: '/volunteer' },
        { label: 'فرص التطوع', labelEn: 'Volunteer Opportunities', href: '/volunteer/opportunities' },
        { label: 'شهادات المتطوعين', labelEn: 'Volunteer Testimonials', href: '/volunteer/testimonials' },
        { label: 'بوابة المتطوعين', labelEn: 'Volunteer Portal', href: '/volunteer/portal' },
        { label: 'الفعاليات', labelEn: 'Events', href: '/events' },
      ],
    },
    {
      title: 'Learning Center',
      titleAr: 'مركز التعلم',
      icon: '📚',
      items: [
        { label: 'أرشيف المدونة', labelEn: 'Blog Archive', href: '/blog' },
        { label: 'أرشيف الأخبار', labelEn: 'News Archive', href: '/news/archive' },
        { label: 'جميع الأخبار', labelEn: 'All News', href: '/news/all' },
        { label: 'المنشورات البحثية', labelEn: 'Research Publications', href: '/research' },
        { label: 'الندوات والتدريب', labelEn: 'Webinars', href: '/webinars' },
        { label: 'دراسات الحالة', labelEn: 'Case Studies', href: '/impact/case-studies' },
        { label: 'أدلة الموارد', labelEn: 'Resource Guides', href: '/resources/guides' },
        { label: 'معرض الصور', labelEn: 'Photo Gallery', href: '/resources/gallery' },
        { label: 'مكتبة الفيديو', labelEn: 'Video Library', href: '/resources/videos' },
        { label: 'مركز التعلم', labelEn: 'Learning Center', href: '/learning' },
        { label: 'البودكاست', labelEn: 'Podcast', href: '/podcast' },
      ],
    },
    {
      title: 'Emergency Response',
      titleAr: 'الاستجابة للطوارئ',
      icon: '🆘',
      items: [
        { label: 'مركز الاستجابة للطوارئ', labelEn: 'Emergency Hub', href: '/programs/emergency' },
        { label: 'الاستجابة للأزمات', labelEn: 'Crisis Response', href: '/programs/crisis' },
        { label: 'التبرع الطارئ', labelEn: 'Emergency Donation', href: '/get-involved/donate/emergency' },
        { label: 'تنبيهات الطوارئ', labelEn: 'Emergency Alerts', href: '/emergency-alerts' },
        { label: 'عمليات منطقة الشرق الأوسط', labelEn: 'MENA Operations', href: '/regions/middle-east' },
        { label: 'عمليات أفريقيا', labelEn: 'Africa Hub', href: '/regions/africa' },
        { label: 'عمليات الأمريكتين', labelEn: 'Americas Operations', href: '/regions/americas' },
        { label: 'عمليات آسيا', labelEn: 'Asia Operations', href: '/regions/asia' },
        { label: 'عمليات أوروبا', labelEn: 'Europe Operations', href: '/regions/europe' },
      ],
    },
    {
      title: 'Partnerships',
      titleAr: 'الشراكات',
      icon: '🤝',
      items: [
        { label: 'دليل الشركاء', labelEn: 'Partner Directory', href: '/partners/directory' },
        { label: 'أصبح شريكا', labelEn: 'Become a Partner', href: '/partners/apply' },
        { label: 'معلومات المورد', labelEn: 'Supplier Info', href: '/suppliers' },
      ],
    },
    {
      title: 'Careers',
      titleAr: 'الوظائف والمسار الوظيفي',
      icon: '💼',
      items: [
        { label: 'جميع الوظائف', labelEn: 'All Jobs', href: '/careers' },
        { label: 'برامج التدريب', labelEn: 'Internships', href: '/careers/internships' },
        { label: 'ثقافة المؤسسة', labelEn: 'Our Culture', href: '/careers/culture' },
        { label: 'دليل الموظفين', labelEn: 'Staff Directory', href: '/staff-directory' },
        { label: 'مواقع المكاتب', labelEn: 'Office Locations', href: '/office-locations' },
      ],
    },
    {
      title: 'Account',
      titleAr: 'الحساب',
      icon: '👤',
      items: [
        { label: 'الإعدادات', labelEn: 'Settings', href: '/account/settings' },
        { label: 'التفضيلات', labelEn: 'Preferences', href: '/account/preferences' },
        { label: 'الأمان', labelEn: 'Security', href: '/account/security' },
        { label: 'حسابي', labelEn: 'My Account', href: '/account' },
        { label: 'سجل التبرعات', labelEn: 'Donation History', href: '/account/donations' },
        { label: 'التطوعات', labelEn: 'My Volunteering', href: '/account/volunteering' },
      ],
    },
    {
      title: 'Apps',
      titleAr: 'التطبيقات',
      icon: '📱',
      items: [
        { label: 'تطبيق iOS', labelEn: 'iOS App', href: '/apps/ios' },
        { label: 'تطبيق Android', labelEn: 'Android App', href: '/apps/android' },
        { label: 'التطبيقات المحمولة', labelEn: 'Mobile Apps', href: '/apps' },
      ],
    },
    {
      title: 'Campaigns',
      titleAr: 'الحملات',
      icon: '📢',
      items: [
        { label: 'جميع الحملات', labelEn: 'All Campaigns', href: '/campaigns' },
        { label: 'الحملات الجارية', labelEn: 'Ongoing Campaigns', href: '/campaigns/ongoing' },
        { label: 'الحملات المرتقبة', labelEn: 'Upcoming Campaigns', href: '/campaigns/upcoming' },
        { label: 'الحملات السابقة', labelEn: 'Past Campaigns', href: '/campaigns/past' },
      ],
    },
    {
      title: 'Resources',
      titleAr: 'الموارد',
      icon: '📚',
      items: [
        { label: 'الأخبار والمدونة', labelEn: 'News & Blog', href: '/news' },
        { label: 'مقاطع فيديو', labelEn: 'Videos', href: '/videos' },
        { label: 'معرض الصور', labelEn: 'Photo Gallery', href: '/gallery' },
        { label: 'الأسئلة الشائعة', labelEn: 'FAQ', href: '/faq' },
        { label: 'اتصل بنا', labelEn: 'Contact', href: '/contact' },
        { label: 'نجاح التسجيل', labelEn: 'Registration Success', href: '/register/success' },
        { label: 'خريطة الموقع', labelEn: 'Sitemap', href: '/sitemap' },
      ],
    },
    {
      title: 'Legal',
      titleAr: 'القانونية',
      icon: '⚖️',
      items: [
        { label: 'سياسة الخصوصية', labelEn: 'Privacy Policy', href: '/privacy' },
        { label: 'الشروط والأحكام', labelEn: 'Terms', href: '/terms' },
        { label: 'سياسة الاستخدام', labelEn: 'Usage Policy', href: '/usage-policy' },
        { label: 'إمكانية الوصول', labelEn: 'Accessibility', href: '/accessibility' },
        { label: 'الاتجار بالبشر', labelEn: 'Human Trafficking', href: '/trafficking' },
        { label: 'الإفصاح المالي', labelEn: 'Financial Disclosure', href: '/disclosure' },
      ],
    },
    {
      title: 'Governance',
      titleAr: 'الحوكمة',
      icon: '🏛️',
      items: [
        { label: 'إطار الحوكمة', labelEn: 'Governance Framework', href: '/governance/framework' },
        { label: 'مجلس الإدارة', labelEn: 'Board of Directors', href: '/governance/board' },
        { label: 'هيكل القيادة', labelEn: 'Leadership Structure', href: '/governance/leadership-structure' },
        { label: 'عملية صنع القرار', labelEn: 'Decision Making Process', href: '/governance/decision-process' },
        { label: 'السياسات والإجراءات', labelEn: 'Policies & Procedures', href: '/governance/policies' },
        { label: 'قانون الأخلاقيات', labelEn: 'Code of Ethics', href: '/governance/ethics' },
        { label: 'معايير الامتثال', labelEn: 'Compliance Standards', href: '/governance/compliance' },
        { label: 'إدارة المخاطر', labelEn: 'Risk Management', href: '/governance/risk-management' },
      ],
    },
    {
      title: 'Transparency',
      titleAr: 'الشفافية',
      icon: '🔍',
      items: [
        { label: 'التقارير السنوية', labelEn: 'Annual Reports', href: '/transparency/annual-reports' },
        { label: 'البيانات المالية', labelEn: 'Financial Statements', href: '/transparency/financial-statements' },
        { label: 'تقارير التدقيق', labelEn: 'Audit Reports', href: '/transparency/audit-reports' },
        { label: 'الإفصاحات البرنامجية', labelEn: 'Program Disclosures', href: '/transparency/program-disclosures' },
        { label: 'تقارير التأثير', labelEn: 'Impact Reports', href: '/transparency/impact-reports' },
        { label: 'مصادر التمويل', labelEn: 'Funding Sources', href: '/transparency/funding-sources' },
        { label: 'رواتب الإدارة', labelEn: 'Executive Compensation', href: '/transparency/executive-compensation' },
        { label: 'سياسة تضارب المصالح', labelEn: 'Conflict of Interest Policy', href: '/transparency/conflict-policy' },
      ],
    },
    {
      title: 'Donor Engagement',
      titleAr: 'تفاعل المانحين',
      icon: '💝',
      items: [
        { label: 'أصبح متبرعاً', labelEn: 'Become a Donor', href: '/donor-engagement/become-donor' },
        { label: 'خيارات التبرع', labelEn: 'Donation Options', href: '/donor-engagement/donation-options' },
        { label: 'الهدايا الرئيسية', labelEn: 'Major Gifts', href: '/donor-engagement/major-gifts' },
        { label: 'إعطاء الشركات', labelEn: 'Corporate Giving', href: '/donor-engagement/corporate-giving' },
        { label: 'الهدايا الموروثة', labelEn: 'Legacy Giving', href: '/donor-engagement/legacy-giving' },
        { label: 'تقدير المتبرعين', labelEn: 'Donor Recognition', href: '/donor-engagement/recognition' },
        { label: 'فعاليات المانحين', labelEn: 'Donor Events', href: '/donor-engagement/events' },
        { label: 'دعم المتبرعين', labelEn: 'Donor Support', href: '/donor-engagement/support' },
        { label: 'تحديثات التأثير للمتبرعين', labelEn: 'Impact Updates', href: '/donor-engagement/impact-updates' },
      ],
    },
    {
      title: 'Content',
      titleAr: 'المحتوى',
      icon: '📝',
      items: [
        { label: 'المدونة والمقالات', labelEn: 'Blog & Articles', href: '/content/blog' },
        { label: 'مكتبة الفيديو', labelEn: 'Video Library', href: '/content/videos' },
        { label: 'معرض الصور', labelEn: 'Photo Gallery', href: '/content/gallery' },
        { label: 'دراسات الحالة', labelEn: 'Case Studies', href: '/content/case-studies' },
        { label: 'البودكاست', labelEn: 'Podcasts', href: '/content/podcasts' },
        { label: 'الندوات عبر الإنترنت', labelEn: 'Webinars', href: '/content/webinars' },
        { label: 'المنشورات', labelEn: 'Publications', href: '/content/publications' },
      ],
    },
    {
      title: 'Operations',
      titleAr: 'العمليات',
      icon: '⚙️',
      items: [
        { label: 'الهيكل التنظيمي', labelEn: 'Organizational Structure', href: '/operations/structure' },
        { label: 'خطة العمليات', labelEn: 'Operations Plan', href: '/operations/plan' },
        { label: 'الخطة الاستراتيجية', labelEn: 'Strategic Plan', href: '/operations/strategic-plan' },
        { label: 'مقاييس الأداء', labelEn: 'Performance Metrics', href: '/operations/metrics' },
        { label: 'ضمان الجودة', labelEn: 'Quality Assurance', href: '/operations/quality-assurance' },
        { label: 'دليل الموظفين', labelEn: 'Staff Directory', href: '/operations/staff-directory' },
        { label: 'فرص العمل', labelEn: 'Career Opportunities', href: '/operations/careers' },
        { label: 'السياسات الداخلية', labelEn: 'Internal Policies', href: '/operations/policies' },
      ],
    },
    {
      title: 'Impact',
      titleAr: 'التأثير',
      icon: '📊',
      items: [
        { label: 'نظرة عامة على التأثير', labelEn: 'Impact Overview', href: '/impact-section/overview' },
        { label: 'نتائج البرامج', labelEn: 'Program Results', href: '/impact-section/program-results' },
        { label: 'قصص المستفيدين', labelEn: 'Beneficiary Stories', href: '/impact-section/beneficiary-stories' },
        { label: 'المقاييس الرئيسية', labelEn: 'Key Metrics', href: '/impact-section/key-metrics' },
        { label: 'التأثير الإقليمي', labelEn: 'Regional Impact', href: '/impact-section/regional-impact' },
        { label: 'تأثير القطاع', labelEn: 'Sector Impact', href: '/impact-section/sector-impact' },
        { label: 'البحث والتقييم', labelEn: 'Research & Evaluation', href: '/impact-section/research' },
        { label: 'تقارير التأثير', labelEn: 'Impact Reports', href: '/impact-section/reports' },
        { label: 'أهداف التأثير المستقبلية', labelEn: 'Future Impact Goals', href: '/impact-section/future-goals' },
      ],
    },
  ],

  // Quick links (used in footer)
  quickLinks: [
    { label: 'تبرع', labelEn: 'Donate', href: '/donate' },
    { label: 'طلب المساعدة', labelEn: 'Request Help', href: '/help' },
    { label: 'اتصل بنا', labelEn: 'Contact', href: '/contact' },
    { label: 'المدونة', labelEn: 'Blog', href: '/news' },
  ],

  // Social links
  social: [
    { label: 'Facebook', href: 'https://facebook.com/jhco', icon: 'f' },
    { label: 'Twitter', href: 'https://twitter.com/jhco', icon: 't' },
    { label: 'Instagram', href: 'https://instagram.com/jhco', icon: 'i' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/jhco', icon: 'l' },
  ],
};

// Helper function to get all pages from sitemap (for sitemap.xml generation)
export function getAllPages() {
  const pages = new Set<string>();

  // Add main nav items
  sitemap.main.forEach((item) => {
    pages.add(item.href);
    if (item.children) {
      item.children.forEach((child) => {
        pages.add(child.href);
      });
    }
  });

  // Add footer section items
  sitemap.footer.forEach((section) => {
    section.items.forEach((item) => {
      pages.add(item.href);
    });
  });

  // Add quick links
  sitemap.quickLinks.forEach((item) => {
    pages.add(item.href);
  });

  return Array.from(pages).sort();
}

// Get breadcrumbs for a given path
export function getBreadcrumbs(path: string): NavItem[] {
  const breadcrumbs: NavItem[] = [];

  // Find the item in main nav
  for (const item of sitemap.main) {
    if (item.href === path) {
      breadcrumbs.push(item);
      break;
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.href === path) {
          breadcrumbs.push(item);
          breadcrumbs.push(child);
          break;
        }
      }
    }
  }

  // Search in footer sections
  if (breadcrumbs.length === 0) {
    for (const section of sitemap.footer) {
      for (const item of section.items) {
        if (item.href === path) {
          breadcrumbs.push(item);
          break;
        }
      }
      if (breadcrumbs.length > 0) break;
    }
  }

  return breadcrumbs;
}
