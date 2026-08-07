'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbNav from '@/components/BreadcrumbNav';

// Bilingual labels for known route segments; unknown segments fall back to a
// humanized version of the slug (shown for both languages).
const segmentLabels: Record<string, { en: string; ar: string }> = {
  'about': { en: 'About', ar: 'من نحن' },
  'programs': { en: 'Programs', ar: 'البرامج' },
  'impact': { en: 'Impact', ar: 'التأثير' },
  'stories': { en: 'Stories', ar: 'القصص' },
  'news': { en: 'News', ar: 'الأخبار' },
  'events': { en: 'Events', ar: 'الأحداث' },
  'media-center': { en: 'Media Center', ar: 'مركز الإعلام' },
  'staff-directory': { en: 'Staff Directory', ar: 'دليل الموظفين' },
  'get-involved': { en: 'Get Involved', ar: 'شارك معنا' },
  'volunteer': { en: 'Volunteer', ar: 'التطوع' },
  'donate': { en: 'Donate', ar: 'تبرع' },
  'give': { en: 'Give', ar: 'العطاء' },
  'governance': { en: 'Governance', ar: 'الحوكمة' },
  'financials': { en: 'Financials', ar: 'البيانات المالية' },
  'policies': { en: 'Policies', ar: 'السياسات' },
  'regions': { en: 'Regions', ar: 'المناطق' },
  'careers': { en: 'Careers', ar: 'الوظائف' },
  'contact': { en: 'Contact', ar: 'اتصل بنا' },
  'faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  'resources': { en: 'Resources', ar: 'الموارد' },
  'guides': { en: 'Guides', ar: 'الأدلة' },
  'opportunities': { en: 'Opportunities', ar: 'الفرص' },
  'royal-initiatives': { en: 'Royal Initiatives', ar: 'المبادرات الملكية' },
  'royal-patronage': { en: 'Royal Patronage', ar: 'الرعاية الملكية' },
  'royal-message': { en: 'Royal Message', ar: 'الرسالة الملكية' },
  'partners': { en: 'Partners', ar: 'الشركاء' },
  'transparency': { en: 'Transparency', ar: 'الشفافية' },
  'blog': { en: 'Blog', ar: 'المدونة' },
  'campaigns': { en: 'Campaigns', ar: 'الحملات' },
  'leadership': { en: 'Leadership', ar: 'القيادة' },
  'mission': { en: 'Mission', ar: 'الرسالة' },
  'vision': { en: 'Vision', ar: 'الرؤية' },
  'values': { en: 'Values', ar: 'القيم' },
  'history': { en: 'History', ar: 'التاريخ' },
  'team': { en: 'Team', ar: 'الفريق' },
  'awards': { en: 'Awards', ar: 'الجوائز' },
  'office-locations': { en: 'Office Locations', ar: 'مواقع المكاتب' },
  'where-we-work': { en: 'Where We Work', ar: 'أين نعمل' },
  'emergency-alerts': { en: 'Emergency Alerts', ar: 'تنبيهات الطوارئ' },
  'financial-reports': { en: 'Financial Reports', ar: 'التقارير المالية' },
  'annual-reports': { en: 'Annual Reports', ar: 'التقارير السنوية' },
  'newsletter': { en: 'Newsletter', ar: 'النشرة الإخبارية' },
  'departments': { en: 'Departments', ar: 'الأقسام' },
};

function humanize(segment: string): string {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function AutoBreadcrumbs({ locale }: { locale: string }) {
  const pathname = usePathname() || '';
  const base = `/${locale}`;

  // Segments after the locale prefix
  const segments = pathname
    .replace(new RegExp(`^/${locale}`), '')
    .split('/')
    .filter(Boolean);

  // Hide on the homepage
  if (segments.length === 0) return null;

  let href = base;
  const items = segments.map((segment, idx) => {
    href += `/${segment}`;
    const decoded = decodeURIComponent(segment);
    const known = segmentLabels[decoded];
    return {
      labelEn: known ? known.en : humanize(decoded),
      labelAr: known ? known.ar : humanize(decoded),
      // Last item is the current page — no link
      href: idx < segments.length - 1 ? href : undefined,
    };
  });

  return <BreadcrumbNav items={items} locale={locale} />;
}
