import { Metadata, type MetadataRoute } from 'next';
import { Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic ? 'التأثير حسب البرنامج | الهيئة الخيرية الأردنية الهاشمية' : 'Impact by Program | JHCO',
    description: isArabic
      ? 'استكشف النتائج الملموسة لكل برنامج من برامجنا الإنسانية وشاهد التأثير الفعلي الذي نُحدثه'
      : 'Explore the tangible results of each humanitarian program and see the real impact we\'re making',
    keywords: isArabic
      ? ['تأثير', 'برامج', 'إحصائيات', 'قصص نجاح', 'مقارنة البرامج']
      : ['impact', 'programs', 'statistics', 'success stories', 'program comparison'],
    openGraph: {
      title: isArabic ? 'التأثير حسب البرنامج' : 'Impact by Program',
      description: isArabic
        ? 'استكشف النتائج الملموسة لكل برنامج'
        : 'Explore the tangible results of each program',
      type: 'website',
      images: [
        {
          url: '/images/impact-programs.jpg',
          width: 1200,
          height: 630,
          alt: isArabic ? 'تأثير البرامج' : 'Program Impact',
        },
      ],
    },
  };
}

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
