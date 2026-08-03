// Comprehensive sitemap structure for header and footer navigation
// This ensures consistency across all navigation elements

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface SitemapSection {
  title: string;
  titleAr: string;
  icon?: string;
  items: NavItem[];
}

export const sitemap = {
  // Main header navigation
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
      icon: '🌍',
    },
    {
      label: 'من نحن',
      labelEn: 'About Us',
      href: '/about',
      icon: 'ℹ️',
    },
    {
      label: 'الحكومة والشفافية',
      labelEn: 'Government',
      href: '/government',
      icon: '🏛️',
    },
    {
      label: 'التأثير',
      labelEn: 'Impact',
      href: '/impact',
      icon: '📈',
    },
    {
      label: 'شارك معنا',
      labelEn: 'Get Involved',
      href: '/get-involved',
      icon: '🤝',
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
        { label: 'الصحة والتعليم', labelEn: 'Health & Education', href: '/programs/health' },
        { label: 'الأمن الغذائي', labelEn: 'Food Security', href: '/programs/food' },
        { label: 'تنمية المجتمع', labelEn: 'Community Dev.', href: '/programs/community' },
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
      title: 'Get Involved',
      titleAr: 'شارك معنا',
      icon: '💝',
      items: [
        { label: 'تبرع الآن', labelEn: 'Donate Now', href: '/donate' },
        { label: 'التطوع', labelEn: 'Volunteer', href: '/volunteer' },
        { label: 'الشراكات', labelEn: 'Partnerships', href: '/partnerships' },
        { label: 'الفعاليات', labelEn: 'Events', href: '/events' },
        { label: 'CSR الشركات', labelEn: 'Corporate CSR', href: '/corporate' },
        { label: 'النشرة الإخبارية', labelEn: 'Newsletter', href: '/newsletter' },
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
