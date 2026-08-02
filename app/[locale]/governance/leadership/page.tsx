'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Leadership History',
    heroTitle: 'Leadership History',
    heroSubtitle: 'JHCO\'s evolution through dedicated leadership over three decades',
    leaders: [
      {
        period: '2020-Present',
        chairman: 'His Excellency Dr. Abdullah Al-Hashash',
        executive: 'Mr. Khalid Al-Zou\'bi',
        focus: 'Global Expansion & Innovation',
        achievements: 'Expanded to 30+ countries, established regional hubs, digitized operations, enhanced partnerships',
      },
      {
        period: '2010-2020',
        chairman: 'His Excellency Prof. Muhammad Al-Rashid',
        executive: 'Dr. Hassan Al-Kharusi',
        focus: 'Crisis Response Excellence',
        achievements: 'Established emergency response capability, humanitarian awards, UN partnerships',
      },
      {
        period: '2000-2010',
        chairman: 'His Excellency Dr. Faisal Al-Qassem',
        executive: 'Mr. Ahmed Al-Mansouri',
        focus: 'Program Diversification',
        achievements: 'Developed healthcare, education, livelihood programs across 15 countries',
      },
      {
        period: '1990-2000',
        chairman: 'His Excellency Sheikh Zayed Al-Nuaimi',
        executive: 'Mr. Khalid Al-Rashid',
        focus: 'Foundation & Growth',
        achievements: 'Established organizational structure, first international operations, core programs',
      },
    ],
  },
  ar: {
    title: 'تاريخ القيادة',
    heroTitle: 'تاريخ القيادة',
    heroSubtitle: 'تطور الهيئة من خلال قيادة مكرسة على مدى ثلاثة عقود',
    leaders: [
      {
        period: '2020-الحاضر',
        chairman: 'سعادة الدكتور عبدالله الحشاش',
        executive: 'السيد خالد الزعبي',
        focus: 'التوسع العالمي والابتكار',
        achievements: 'توسع إلى 30+ دولة، إنشاء مكاتب إقليمية، رقمنة العمليات، تعزيز الشراكات',
      },
      {
        period: '2010-2020',
        chairman: 'سعادة أ.د. محمد الرشيد',
        executive: 'الدكتور حسن الخاروسي',
        focus: 'التميز في الاستجابة للأزمات',
        achievements: 'إنشاء القدرة على الاستجابة للطوارئ، الجوائز الإنسانية، الشراكات الأممية',
      },
      {
        period: '2000-2010',
        chairman: 'سعادة الدكتور فيصل القاسم',
        executive: 'السيد أحمد المنصوري',
        focus: 'تنويع البرامج',
        achievements: 'تطوير برامج الصحة والتعليم وسبل العيش عبر 15 دولة',
      },
      {
        period: '1990-2000',
        chairman: 'سعادة الشيخ زايد النعيمي',
        executive: 'السيد خالد الرشيد',
        focus: 'التأسيس والنمو',
        achievements: 'تأسيس الهيكل التنظيمي، أول عمليات دولية، البرامج الأساسية',
      },
    ],
  },
};

export default function LeadershipHistoryPage({ params }: { params: { locale: Locale } }) {
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
            Historical Overview
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

      {/* Leadership Timeline */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            paddingLeft: ar ? 0 : '60px',
            paddingRight: ar ? '60px' : 0,
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              [ar ? 'right' : 'left']: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: royalColors.royalGold,
            }} />

            {/* Timeline items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {content.leaders.map((leader, idx) => (
                <div key={idx} style={{
                  position: 'relative',
                  paddingBottom: '32px',
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    [ar ? 'right' : 'left']: '-38px',
                    top: '12px',
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.royalGold,
                    borderRadius: '50%',
                    border: `3px solid ${royalColors.ivory}`,
                    boxShadow: `0 0 0 3px ${royalColors.royalGold}`,
                  }} />

                  {/* Content */}
                  <div style={{
                    backgroundColor: 'white',
                    padding: '40px 32px',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.border}`,
                    boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                  }}>
                    <p style={{
                      color: royalColors.royalGold,
                      fontSize: '14px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '12px',
                      margin: 0,
                    }}>
                      {leader.period}
                    </p>

                    <h3 style={{
                      fontSize: '24px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.deepNavy,
                      marginBottom: '20px',
                      marginTop: '12px',
                    }}>
                      {leader.focus}
                    </h3>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '32px',
                      marginBottom: '20px',
                    }}>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <p style={{
                          fontSize: '12px',
                          color: '#6b6b6b',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: '600',
                          marginBottom: '6px',
                          margin: 0,
                        }}>
                          Board Chairman
                        </p>
                        <p style={{
                          fontSize: '16px',
                          color: royalColors.deepNavy,
                          fontWeight: '600',
                          marginTop: '6px',
                          margin: 0,
                        }}>
                          {leader.chairman}
                        </p>
                      </div>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <p style={{
                          fontSize: '12px',
                          color: '#6b6b6b',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: '600',
                          marginBottom: '6px',
                          margin: 0,
                        }}>
                          Executive Director
                        </p>
                        <p style={{
                          fontSize: '16px',
                          color: royalColors.deepNavy,
                          fontWeight: '600',
                          marginTop: '6px',
                          margin: 0,
                        }}>
                          {leader.executive}
                        </p>
                      </div>
                    </div>

                    <div style={{
                      height: '1px',
                      backgroundColor: royalColors.border,
                      marginBottom: '20px',
                    }} />

                    <p style={{
                      fontSize: '16px',
                      color: '#3d3d3d',
                      lineHeight: '1.6',
                      margin: 0,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {leader.achievements}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
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
            A Legacy of <span style={{ color: royalColors.royalGold }}>Excellence</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Through decades of dedicated leadership, JHCO has evolved from a regional humanitarian organization to a globally recognized force for positive change. Each generation of leaders has built upon the foundation laid by their predecessors, maintaining our core values while innovating our approaches to meet emerging humanitarian challenges.
          </p>
        </div>
      </section>
    </div>
  );
}
