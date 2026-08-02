'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

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

export default function MediaCenterPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.ivory }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.crimson})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.royalGold,
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
            color: royalColors.deepNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            Latest <span style={{ color: royalColors.royalGold }}>News</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '64px',
          }}>
            {content.latestNews.map((news, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                overflow: 'hidden',
                textAlign: ar ? 'right' : 'left',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <div style={{
                  backgroundColor: '#f9f7f4',
                  padding: '24px 32px',
                  borderBottom: `1px solid ${royalColors.border}`,
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: ar ? 'row-reverse' : 'row',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b6b6b',
                      fontWeight: '600',
                      margin: 0,
                    }}>
                      {new Date(news.date).toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                    </p>
                    <span style={{
                      backgroundColor: royalColors.royalGold,
                      color: royalColors.deepNavy,
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {news.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.deepNavy,
                    marginBottom: '16px',
                    marginTop: 0,
                  }}>
                    {news.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    color: '#3d3d3d',
                    lineHeight: '1.6',
                    flex: 1,
                    margin: 0,
                    marginBottom: '20px',
                  }}>
                    {news.excerpt}
                  </p>

                  <a href="#" style={{
                    color: royalColors.royalGold,
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {ar ? 'اقرأ المزيد' : 'Read More'} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Media Contact */}
          <div style={{
            backgroundColor: 'white',
            padding: '48px 40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.border}`,
            textAlign: ar ? 'right' : 'left',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
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
                  color: royalColors.deepNavy,
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
                  color: royalColors.royalGold,
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
                  color: royalColors.royalGold,
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
                  color: royalColors.deepNavy,
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
