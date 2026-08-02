'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Awards & Recognition',
    heroTitle: 'Global Recognition',
    heroSubtitle: 'JHCO has received numerous international awards and recognitions for humanitarian excellence',
    awards: [
      {
        year: '2023',
        title: 'UN Humanitarian Award',
        issuer: 'United Nations Office for the Coordination of Humanitarian Affairs',
        description: 'Recognition for exceptional humanitarian work and dedication to humanitarian principles across crisis zones.',
      },
      {
        year: '2022',
        title: 'International Red Crescent Medal',
        issuer: 'International Federation of Red Crescent Societies',
        description: 'Honoring outstanding contributions to humanitarian aid and cross-border assistance initiatives.',
      },
      {
        year: '2021',
        title: 'World Humanitarian Summit Award',
        issuer: 'World Humanitarian Summit',
        description: 'Recognition for innovative approaches in humanitarian response and community engagement.',
      },
      {
        year: '2020',
        title: 'Global Charity Excellence Certificate',
        issuer: 'Charity Navigator International',
        description: 'Certified for transparency, efficiency, and accountability in humanitarian operations.',
      },
      {
        year: '2019',
        title: 'Best NGO in Emergency Response',
        issuer: 'Arab Humanitarian Alliance',
        description: 'Awarded for rapid deployment and effective crisis response in regional emergencies.',
      },
      {
        year: '2018',
        title: 'Excellence in Development Programming',
        issuer: 'Islamic Development Bank',
        description: 'Recognition for sustainable development initiatives and long-term community transformation.',
      },
    ],
    certifications: [
      {
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certification',
      },
      {
        title: 'ISO 26000',
        description: 'Social Responsibility Certification',
      },
      {
        title: 'UN OCHA Registered',
        description: 'United Nations Verified NGO Status',
      },
      {
        title: 'SPHERE Certified',
        description: 'Humanitarian Charter and Minimum Standards',
      },
      {
        title: 'FFP Accredited',
        description: 'Food For Peace Implementing Partner',
      },
      {
        title: 'GCN Member',
        description: 'Global Compact Network Signatory',
      },
    ],
  },
  ar: {
    title: 'الجوائز والاعترافات',
    heroTitle: 'الاعتراف العالمي',
    heroSubtitle: 'حصلت الهيئة على عديد من الجوائز والاعترافات الدولية على التميز الإنساني',
    awards: [
      {
        year: '2023',
        title: 'جائزة الأمم المتحدة الإنسانية',
        issuer: 'مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية',
        description: 'اعتراف بالعمل الإنساني الاستثنائي والالتزام بالمبادئ الإنسانية عبر مناطق الأزمات.',
      },
      {
        year: '2022',
        title: 'ميدالية الهلال الأحمر الدولية',
        issuer: 'الاتحاد الدولي لجمعيات الهلال الأحمر',
        description: 'تكريماً للمساهمات البارزة في المساعدات الإنسانية والمبادرات عبر الحدود.',
      },
      {
        year: '2021',
        title: 'جائزة القمة الإنسانية العالمية',
        issuer: 'القمة الإنسانية العالمية',
        description: 'اعتراف بالمناهج المبتكرة في الاستجابة الإنسانية والانخراط المجتمعي.',
      },
      {
        year: '2020',
        title: 'شهادة التميز في الأعمال الخيرية العالمية',
        issuer: 'Charity Navigator International',
        description: 'معتمدة للشفافية والكفاءة والمساءلة في العمليات الإنسانية.',
      },
      {
        year: '2019',
        title: 'أفضل منظمة غير حكومية في الاستجابة للطوارئ',
        issuer: 'التحالف العربي الإنساني',
        description: 'مكافأة للنشر السريع والاستجابة الفعالة للطوارئ الإقليمية.',
      },
      {
        year: '2018',
        title: 'التميز في برمجة التنمية',
        issuer: 'البنك الإسلامي للتنمية',
        description: 'اعتراف بمبادرات التنمية المستدامة وتحول المجتمع على المدى الطويل.',
      },
    ],
    certifications: [
      {
        title: 'ISO 9001:2015',
        description: 'شهادة نظام إدارة الجودة',
      },
      {
        title: 'ISO 26000',
        description: 'شهادة المسؤولية الاجتماعية',
      },
      {
        title: 'مسجل لدى الأمم المتحدة',
        description: 'حالة منظمة غير حكومية معتمدة من الأمم المتحدة',
      },
      {
        title: 'معتمد من SPHERE',
        description: 'ميثاق إنساني والحد الأدنى من المعايير',
      },
      {
        title: 'معتمد من FFP',
        description: 'شريك تنفيذ برنامج الغذاء من أجل السلام',
      },
      {
        title: 'عضو GCN',
        description: 'موقع العقد العالمي',
      },
    ],
  },
};

export default function AwardsPage({ params }: { params: { locale: Locale } }) {
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
            Excellence Recognized
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

      {/* Awards Timeline */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {content.awards.map((award, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                borderLeft: `5px solid ${royalColors.hashemiteGold}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <p style={{
                  color: royalColors.hashemiteGold,
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px',
                  margin: 0,
                }}>
                  {award.year}
                </p>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                  marginTop: '8px',
                }}>
                  {award.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: '8px 0 12px 0',
                }}>
                  {award.issuer}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '24px',
            }}>
              Professional <span style={{ color: royalColors.hashemiteGold }}>Certifications</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textOfficial,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Accreditations and certifications demonstrating our commitment to international standards
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.certifications.map((cert, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px 24px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
              }}>
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px',
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  margin: 0,
                }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
