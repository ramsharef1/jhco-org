'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Our Mission',
    heroTitle: 'Our Mission',
    heroSubtitle: 'Delivering humanitarian excellence with dignity, compassion, and integrity across the globe',
    missionStatement: 'To provide comprehensive humanitarian assistance and sustainable development support to vulnerable populations affected by poverty, conflict, and natural disasters, guided by the principles of humanity, impartiality, neutrality, and independence.',
    pillars: [
      {
        title: 'Humanitarian Assistance',
        description: 'Immediate emergency relief and life-saving aid in crisis situations, including food security, shelter, healthcare, and WASH services.',
      },
      {
        title: 'Development Programs',
        description: 'Long-term sustainable programs addressing root causes of vulnerability through education, livelihood development, and economic empowerment.',
      },
      {
        title: 'Community Engagement',
        description: 'Working with local communities to understand needs, build capacity, and ensure programs are responsive and culturally appropriate.',
      },
      {
        title: 'Advocacy & Partnerships',
        description: 'Advocating for humanitarian principles and building strategic partnerships with governments, UN agencies, and international organizations.',
      },
    ],
    commitment: 'JHCO is committed to upholding humanitarian principles in all our work. We operate with transparency, maintain accountability to beneficiaries and donors, and ensure every resource is used effectively to maximize human impact. Our mission drives us to reach those in greatest need, regardless of borders, politics, or beliefs.',
  },
  ar: {
    title: 'مهمتنا',
    heroTitle: 'مهمتنا',
    heroSubtitle: 'تقديم التميز الإنساني برحمة والتزام وتكامل عبر العالم',
    missionStatement: 'تقديم المساعدات الإنسانية الشاملة والدعم التنموي المستدام للسكان الضعفاء المتضررين من الفقر والنزاع والكوارث الطبيعية، موجهاً بمبادئ الإنسانية والحيادية وعدم الانحياز والاستقلال.',
    pillars: [
      {
        title: 'المساعدات الإنسانية',
        description: 'الإغاثة الطارئة الفورية والمساعدات الإنقاذية في حالات الأزمات، بما في ذلك الأمن الغذائي والمأوى والرعاية الصحية والمياه والصرف الصحي.',
      },
      {
        title: 'برامج التنمية',
        description: 'برامج طويلة الأجل مستدامة تعالج الأسباب الجذرية للضعف من خلال التعليم وتنمية سبل العيش والتمكين الاقتصادي.',
      },
      {
        title: 'الانخراط المجتمعي',
        description: 'العمل مع المجتمعات المحلية لفهم الاحتياجات وبناء القدرات وضمان أن تكون البرامج استجابة وثقافية مناسبة.',
      },
      {
        title: 'الدعوة والشراكات',
        description: 'الدعوة للمبادئ الإنسانية وبناء شراكات استراتيجية مع الحكومات ووكالات الأمم المتحدة والمنظمات الدولية.',
      },
    ],
    commitment: 'تلتزم الهيئة الخيرية الأردنية الهاشمية بالحفاظ على المبادئ الإنسانية في جميع أعمالنا. نعمل بشفافية وندافع عن المسؤولية تجاه المستفيدين والمانحين، ونضمن استخدام كل موارد بكفاءة لتعظيم التأثير الإنساني. تدفعنا مهمتنا للوصول إلى أولئك الأكثر احتياجاً، بغض النظر عن الحدود أو السياسة أو المعتقدات.',
  },
};

export default function MissionPage({ params }: { params: { locale: Locale } }) {
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
            Our Purpose
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

      {/* Mission Statement */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '60px 48px',
            borderRadius: '8px',
            border: `2px solid ${royalColors.royalGold}`,
            boxShadow: '0 8px 20px rgba(10,20,40,0.15)',
          }}>
            <p style={{
              fontSize: '24px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              lineHeight: '1.8',
              fontWeight: '400',
              marginTop: 0,
              marginBottom: '24px',
            }}>
              {content.missionStatement}
            </p>
            <div style={{
              height: '4px',
              width: '80px',
              backgroundColor: royalColors.royalGold,
              margin: '0 auto',
            }} />
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section style={{
        backgroundColor: '#f9f7f4',
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '24px',
            }}>
              Four <span style={{ color: royalColors.royalGold }}>Pillars</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#3d3d3d',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              The core areas of our humanitarian work
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {content.pillars.map((pillar, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: royalColors.royalGold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: royalColors.deepNavy,
                  marginBottom: '20px',
                  marginLeft: ar ? 'auto' : 0,
                }}>
                  {idx + 1}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#3d3d3d',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.crimson})`,
        padding: '64px 32px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            marginBottom: '32px',
          }}>
            Our <span style={{ color: royalColors.royalGold }}>Commitment</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {content.commitment}
          </p>
        </div>
      </section>
    </div>
  );
}
