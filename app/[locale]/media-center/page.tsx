'use client';
import { use } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import NewsCard from '@/components/NewsCard';
import MediaGallery from '@/components/MediaGallery';

const galleryItems = [
  {
    id: 'g1',
    titleEn: 'Emergency Response Operations',
    titleAr: 'عمليات الاستجابة الطارئة',
    descriptionEn: 'Rapid humanitarian relief reaching families in crisis-affected regions.',
    descriptionAr: 'إغاثة إنسانية سريعة تصل إلى الأسر في المناطق المتأثرة بالأزمات.',
    imageUrl: '/media/emergency-response.svg',
    type: 'image' as const,
  },
  {
    id: 'g2',
    titleEn: 'Mobile Health Clinics',
    titleAr: 'العيادات الصحية المتنقلة',
    descriptionEn: 'Bringing medical care to underserved communities across 5 countries.',
    descriptionAr: 'تقديم الرعاية الطبية للمجتمعات المحرومة في 5 دول.',
    imageUrl: '/media/healthcare-clinic.svg',
    type: 'image' as const,
  },
  {
    id: 'g3',
    titleEn: 'Education Programs',
    titleAr: 'برامج التعليم',
    descriptionEn: 'Literacy and skills training reaching 25,000+ students.',
    descriptionAr: 'محو الأمية والتدريب على المهارات يصل إلى أكثر من 25000 طالب.',
    imageUrl: '/media/education-program.svg',
    type: 'image' as const,
  },
  {
    id: 'g4',
    titleEn: 'Food Security Distribution',
    titleAr: 'توزيع الأمن الغذائي',
    descriptionEn: 'Emergency food assistance supporting vulnerable families.',
    descriptionAr: 'مساعدات غذائية طارئة لدعم الأسر الضعيفة.',
    imageUrl: '/media/food-distribution.svg',
    type: 'image' as const,
  },
  {
    id: 'g5',
    titleEn: 'Clean Water Initiative',
    titleAr: 'مبادرة المياه النظيفة',
    descriptionEn: 'Water wells providing clean access for thousands of people.',
    descriptionAr: 'آبار مياه توفر وصولاً نظيفاً لآلاف الأشخاص.',
    imageUrl: '/media/water-wells.svg',
    type: 'image' as const,
  },
  {
    id: 'g6',
    titleEn: 'Volunteers in the Field',
    titleAr: 'المتطوعون في الميدان',
    descriptionEn: '2,500+ volunteers delivering programs worldwide.',
    descriptionAr: 'أكثر من 2500 متطوع ينفذون البرامج حول العالم.',
    imageUrl: '/media/volunteers-field.svg',
    type: 'image' as const,
  },
];

const pageContent = {
  en: {
    title: 'Media Center',
    heroTitle: 'Media Center',
    heroSubtitle: 'Press releases, media resources, and featured news about JHCO',
    latestNews: [
      {
        date: '2024-07-15',
        title: 'JHCO Launches Emergency Response to Regional Crisis',
        excerpt: 'The Jordan Hashemite Charity Organization mobilizes immediate humanitarian assistance reaching 50,000 families in affected regions.',
        category: 'Emergency',
      },
      {
        date: '2024-07-01',
        title: 'New Healthcare Initiative Reaches 100,000 People',
        excerpt: 'Expansion of mobile clinic network brings medical services to underserved communities across 5 countries.',
        category: 'Healthcare',
      },
      {
        date: '2024-06-20',
        title: 'JHCO Receives International Humanitarian Recognition',
        excerpt: 'Organization honored with prestigious award for excellence in humanitarian work and organizational transparency.',
        category: 'Awards',
      },
      {
        date: '2024-06-01',
        title: 'Education Program Celebrates 25,000 Students Milestone',
        excerpt: 'JHCO\'s education initiatives reach quarter-million students, expanding literacy and skills training across regions.',
        category: 'Education',
      },
    ],
    contact: {
      title: 'Media Contact',
      name: 'Communications Department',
      email: 'media@jhco.org',
      phone: '+962-6-123-4567',
      address: 'JHCO Headquarters, Amman, Jordan',
    },
  },
  ar: {
    title: 'مركز الإعلام',
    heroTitle: 'مركز الإعلام',
    heroSubtitle: 'بيانات صحفية وموارد إعلامية والأخبار المهمة عن الهيئة',
    latestNews: [
      {
        date: '2024-07-15',
        title: 'الهيئة تطلق الاستجابة الطارئة للأزمة الإقليمية',
        excerpt: 'تعبئة الهيئة الخيرية الأردنية الهاشمية المساعدات الإنسانية الفورية للوصول إلى 50000 أسرة في المناطق المتأثرة.',
        category: 'الطوارئ',
      },
      {
        date: '2024-07-01',
        title: 'مبادرة رعاية صحية جديدة تصل إلى 100000 شخص',
        excerpt: 'توسيع شبكة العيادات المتنقلة يجلب الخدمات الطبية للمجتمعات المحرومة عبر 5 دول.',
        category: 'الصحة',
      },
      {
        date: '2024-06-20',
        title: 'الهيئة تتلقى اعترافاً إنسانياً دولياً',
        excerpt: 'تكريم المنظمة بجائزة مرموقة للتميز في العمل الإنساني وشفافية المنظمة.',
        category: 'الجوائز',
      },
      {
        date: '2024-06-01',
        title: 'برنامج التعليم يحتفل بمرحلة 25000 طالب',
        excerpt: 'تصل مبادرات التعليم بالهيئة إلى ربع مليون طالب، مع توسيع محو الأمية والتدريب المهني عبر المناطق.',
        category: 'التعليم',
      },
    ],
    contact: {
      title: 'جهات الاتصال الإعلامية',
      name: 'قسم الاتصالات',
      email: 'media@jhco.org',
      phone: '+962-6-123-4567',
      address: 'مقر الهيئة الخيرية الأردنية الهاشمية، عمّان، الأردن',
    },
  },
};

export default function MediaCenterPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Press & Communications
          </p>
          <h1 style={{
            fontSize: '64px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            Latest <span style={{ color: royalColors.hashemiteGold }}>News</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '64px',
          }}>
            {pageContent.en.latestNews.map((news, idx) => {
              const arNews = pageContent.ar.latestNews[idx];
              return (
                <NewsCard
                  key={idx}
                  id={String(idx)}
                  titleEn={news.title}
                  titleAr={arNews.title}
                  excerptEn={news.excerpt}
                  excerptAr={arNews.excerpt}
                  dateEn={new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  dateAr={new Date(news.date).toLocaleDateString('ar-JO', { year: 'numeric', month: 'long', day: 'numeric' })}
                  categoryEn={news.category}
                  categoryAr={arNews.category}
                  icon="📰"
                  href={`/${locale}/news`}
                  locale={locale}
                  featured={idx === 0}
                />
              );
            })}
          </div>

          {/* Photo & Video Gallery */}
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {ar ? 'معرض ' : 'Media '}<span style={{ color: royalColors.hashemiteGold }}>{ar ? 'الوسائط' : 'Gallery'}</span>
          </h2>
          <MediaGallery items={galleryItems} locale={locale} />

          {/* Media Contact */}
          <div style={{
            backgroundColor: 'white',
            padding: '48px 40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderFormal}`,
            textAlign: ar ? 'right' : 'left',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '32px',
              marginTop: 0,
            }}>
              {content.contact.title}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '32px',
            }}>
              <div>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  Department
                </p>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  margin: 0,
                  marginTop: '8px',
                }}>
                  {content.contact.name}
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  Email
                </p>
                <a href={`mailto:${content.contact.email}`} style={{
                  fontSize: '16px',
                  color: royalColors.hashemiteGold,
                  textDecoration: 'none',
                  fontWeight: '600',
                  margin: 0,
                  marginTop: '8px',
                }}>
                  {content.contact.email}
                </a>
              </div>

              <div>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  Phone
                </p>
                <a href={`tel:${content.contact.phone}`} style={{
                  fontSize: '16px',
                  color: royalColors.hashemiteGold,
                  textDecoration: 'none',
                  fontWeight: '600',
                  margin: 0,
                  marginTop: '8px',
                }}>
                  {content.contact.phone}
                </a>
              </div>

              <div>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  Address
                </p>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  fontWeight: '500',
                  margin: 0,
                  marginTop: '8px',
                  lineHeight: '1.5',
                }}>
                  {content.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
