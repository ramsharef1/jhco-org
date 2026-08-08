'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Impact Statistics',
    heroTitle: 'Our Impact By The Numbers',
    heroSubtitle: 'Measurable outcomes demonstrating JHCO\'s humanitarian reach and effectiveness',
    keyMetrics: [
      { number: '30+', label: 'Countries Served', description: 'Active humanitarian programs across three continents' },
      { number: '75K+', label: 'Families Supported', description: 'Direct beneficiaries receiving assistance annually' },
      { number: '2.5K+', label: 'Volunteers Active', description: 'Dedicated humanitarian workers in the field' },
      { number: '200+', label: 'Staff Members', description: 'Professional team delivering quality programs' },
      { number: '$50M+', label: 'Annual Impact', description: 'Resources deployed for humanitarian assistance' },
      { number: '500K+', label: 'People Reached', description: 'Direct and indirect beneficiaries annually' },
    ],
    sectors: [
      {
        title: 'Emergency Response',
        icon: '🚨',
        percentage: '25%',
        description: 'Crisis response and emergency relief operations',
        impact: '15,000+ families assisted in emergencies',
      },
      {
        title: 'Healthcare',
        icon: '🏥',
        percentage: '20%',
        description: 'Medical services and health promotion',
        impact: '100,000+ health consultations annually',
      },
      {
        title: 'Education',
        icon: '📚',
        percentage: '18%',
        description: 'Literacy and skills training programs',
        impact: '25,000+ students supported',
      },
      {
        title: 'Food Security',
        icon: '🍽️',
        percentage: '15%',
        description: 'Food distribution and nutrition programs',
        impact: '50,000+ people fed regularly',
      },
      {
        title: 'Shelter & WASH',
        icon: '🏠',
        percentage: '12%',
        description: 'Housing and water/sanitation infrastructure',
        impact: '10,000+ people with improved shelter',
      },
      {
        title: 'Livelihoods',
        icon: '💼',
        percentage: '10%',
        description: 'Economic empowerment and skills development',
        impact: '5,000+ people with new income sources',
      },
    ],
  },
  ar: {
    title: 'إحصائيات التأثير',
    heroTitle: 'تأثيرنا بالأرقام',
    heroSubtitle: 'النتائج القابلة للقياس التي تدل على وصول وفعالية الهيئة الإنسانية',
    keyMetrics: [
      { number: '30+', label: 'دول مخدومة', description: 'برامج إنسانية نشطة عبر ثلاث قارات' },
      { number: '75K+', label: 'أسر مدعومة', description: 'المستفيدون المباشرون الذين يتلقون المساعدة سنويًا' },
      { number: '2.5K+', label: 'متطوعون نشطون', description: 'عمال إنسانيون مكرسون في الميدان' },
      { number: '200+', label: 'موظفو', description: 'فريق متخصص يقدم برامج عالية الجودة' },
      { number: '$50M+', label: 'التأثير السنوي', description: 'الموارد المستخدمة للمساعدات الإنسانية' },
      { number: '500K+', label: 'الأشخاص الذين تم الوصول إليهم', description: 'المستفيدون المباشرون وغير المباشرين سنويًا' },
    ],
    sectors: [
      {
        title: 'الاستجابة للطوارئ',
        icon: '🚨',
        percentage: '25%',
        description: 'عمليات الاستجابة للأزمات والإغاثة الطارئة',
        impact: '15000+ أسرة مساعدة في حالات الطوارئ',
      },
      {
        title: 'الصحة',
        icon: '🏥',
        percentage: '20%',
        description: 'الخدمات الطبية وبرامج تعزيز الصحة',
        impact: '100000+ استشارة صحية سنويًا',
      },
      {
        title: 'التعليم',
        icon: '📚',
        percentage: '18%',
        description: 'برامج محو الأمية والتدريب المهني',
        impact: '25000+ طالب مدعوم',
      },
      {
        title: 'الأمن الغذائي',
        icon: '🍽️',
        percentage: '15%',
        description: 'توزيع الغذاء وبرامج التغذية',
        impact: '50000+ شخص يتم إطعامهم بانتظام',
      },
      {
        title: 'المأوى والمياه والصرف الصحي',
        icon: '🏠',
        percentage: '12%',
        description: 'البنية التحتية للإسكان والمياه والصرف الصحي',
        impact: '10000+ شخص بمأوى محسّن',
      },
      {
        title: 'سبل العيش',
        icon: '💼',
        percentage: '10%',
        description: 'التمكين الاقتصادي وتنمية المهارات',
        impact: '5000+ شخص بمصادر دخل جديدة',
      },
    ],
  },
};

export default function StatisticsPage({ params }: { params: { locale: Locale } }) {
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
            Impact Metrics
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

      {/* Key Metrics */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.keyMetrics.map((metric, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '56px',
                  color: royalColors.hashemiteGold,
                  fontFamily: royalTypography.serif,
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: 0,
                }}>
                  {metric.number}
                </p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  marginTop: '12px',
                }}>
                  {metric.label}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Sectors */}
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
              Program <span style={{ color: royalColors.hashemiteGold }}>Sectors</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textOfficial,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Distribution of our humanitarian programs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.sectors.map((sector, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div style={{
                    fontSize: '40px',
                  }}>
                    {sector.icon}
                  </div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: royalColors.hashemiteGold,
                  }}>
                    {sector.percentage}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {sector.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  marginBottom: '16px',
                  margin: '12px 0 16px 0',
                }}>
                  {sector.description}
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '16px',
                }} />
                <p style={{
                  fontSize: '15px',
                  color: royalColors.darkNavy,
                  fontWeight: '600',
                  margin: 0,
                }}>
                  {sector.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
