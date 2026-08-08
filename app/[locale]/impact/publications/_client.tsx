'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Publications',
    heroTitle: 'Research & Publications',
    heroSubtitle: 'JHCO research papers, policy briefs, and knowledge resources',
    publications: [
      {
        title: 'Emergency Response Best Practices in Crisis Zones',
        author: 'JHCO Research Team',
        year: '2023',
        type: 'Research Paper',
        description: 'Evidence-based best practices for rapid humanitarian response in conflict and disaster zones based on 33 years of field experience.',
      },
      {
        title: 'Healthcare Access in Underserved Regions: Lessons from 25 Countries',
        author: 'Dr. Fatima Al-Mansouri',
        year: '2023',
        type: 'Research Study',
        description: 'Comprehensive study on establishing healthcare in resource-limited settings with practical implementation guidance.',
      },
      {
        title: 'Education in Crisis: Breaking the Cycle of Poverty',
        author: 'JHCO Education Department',
        year: '2022',
        type: 'Policy Brief',
        description: 'Policy recommendations for maintaining education access during humanitarian emergencies and conflicts.',
      },
      {
        title: 'Microfinance and Economic Empowerment in Developing Nations',
        author: 'Prof. Hassan Al-Kharusi',
        year: '2022',
        type: 'Research Report',
        description: 'Analysis of microfinance effectiveness in creating sustainable livelihood solutions for vulnerable populations.',
      },
      {
        title: 'Climate Change and Humanitarian Response: Future Challenges',
        author: 'JHCO Strategy Team',
        year: '2022',
        type: 'White Paper',
        description: 'Strategic analysis of climate change\'s humanitarian implications and adaptation strategies for NGOs.',
      },
      {
        title: 'Women Empowerment and Community Development',
        author: 'Ms. Amira Al-Shobaki',
        year: '2021',
        type: 'Research Study',
        description: 'Qualitative and quantitative evidence of women\'s leadership impact on family and community development.',
      },
    ],
  },
  ar: {
    title: 'المنشورات',
    heroTitle: 'البحوث والمنشورات',
    heroSubtitle: 'أوراق بحث الهيئة وموجزات السياسات وموارد المعرفة',
    publications: [
      {
        title: 'أفضل الممارسات في الاستجابة للطوارئ في مناطق الأزمات',
        author: 'فريق البحث بالهيئة',
        year: '2023',
        type: 'ورقة بحثية',
        description: 'أفضل الممارسات المستندة إلى الأدلة للاستجابة الإنسانية السريعة في مناطق النزاع والكوارث بناءً على 33 سنة من الخبرة الميدانية.',
      },
      {
        title: 'الوصول إلى الرعاية الصحية في المناطق المحرومة: دروس من 25 دولة',
        author: 'الدكتورة فاطمة المنصوري',
        year: '2023',
        type: 'دراسة بحثية',
        description: 'دراسة شاملة حول تأسيس الرعاية الصحية في البيئات المحدودة الموارد مع إرشادات تطبيق عملية.',
      },
      {
        title: 'التعليم في الأزمات: كسر دورة الفقر',
        author: 'قسم التعليم بالهيئة',
        year: '2022',
        type: 'موجز سياسة',
        description: 'توصيات السياسة للحفاظ على الوصول إلى التعليم أثناء الطوارئ الإنسانية والنزاعات.',
      },
      {
        title: 'التمويل متناهي الصغر والتمكين الاقتصادي في الدول النامية',
        author: 'أ.د. حسن الخاروسي',
        year: '2022',
        type: 'تقرير بحثي',
        description: 'تحليل لفعالية التمويل متناهي الصغر في خلق حلول سبل عيش مستدامة للسكان الضعفاء.',
      },
      {
        title: 'تغير المناخ والاستجابة الإنسانية: التحديات المستقبلية',
        author: 'فريق الاستراتيجية بالهيئة',
        year: '2022',
        type: 'ورقة بيضاء',
        description: 'تحليل استراتيجي للآثار الإنسانية لتغير المناخ واستراتيجيات التكيف للمنظمات غير الحكومية.',
      },
      {
        title: 'تمكين النساء والتنمية المجتمعية',
        author: 'السيدة أميرة الشوبكي',
        year: '2021',
        type: 'دراسة بحثية',
        description: 'دليل نوعي وكمي على تأثير قيادة النساء على تنمية الأسرة والمجتمع.',
      },
    ],
  },
};

export default function PublicationsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
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
            Knowledge Sharing
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

      {/* Publications Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}>
            {content.publications.map((pub, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.hashemiteGold,
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px',
                      margin: 0,
                    }}>
                      {pub.year}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#6b6b6b',
                      fontWeight: '600',
                      margin: '4px 0 0 0',
                    }}>
                      {pub.type}
                    </p>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {pub.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  fontWeight: '600',
                  marginBottom: '16px',
                  margin: '12px 0 16px 0',
                  fontStyle: 'italic',
                }}>
                  {pub.author}
                </p>

                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  flex: 1,
                  margin: '16px 0 24px 0',
                }}>
                  {pub.description}
                </p>

                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '16px',
                }} />

                <button style={{
                  backgroundColor: royalColors.darkNavy,
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  alignSelf: ar ? 'flex-end' : 'flex-start',
                }}>
                  {ar ? 'قراءة' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
