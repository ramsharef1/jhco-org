'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Our Team',
    heroTitle: 'Dedicated Professionals',
    heroSubtitle: 'Over 200 staff members working across 30+ countries, supported by 2,500+ volunteers',
    departments: [
      {
        name: 'Emergency Response',
        icon: '🚨',
        staffCount: '45',
        description: 'Rapid response teams deployed to crisis zones providing immediate humanitarian assistance and emergency relief.',
      },
      {
        name: 'Healthcare Programs',
        icon: '🏥',
        staffCount: '38',
        description: 'Mobile clinics, maternal health, disease prevention, and medical training for vulnerable populations.',
      },
      {
        name: 'Education & Training',
        icon: '📚',
        staffCount: '32',
        description: 'Literacy programs, vocational training, and educational support for children and adults.',
      },
      {
        name: 'Food Security',
        icon: '🍽️',
        staffCount: '28',
        description: 'Food distribution, agricultural support, and nutrition programs addressing hunger and malnutrition.',
      },
      {
        name: 'Shelter & WASH',
        icon: '🏠',
        staffCount: '35',
        description: 'Housing construction, water and sanitation infrastructure, and emergency shelter provision.',
      },
      {
        name: 'Livelihoods & Economic Development',
        icon: '💼',
        staffCount: '30',
        description: 'Microfinance, skills training, and economic empowerment programs for sustainable development.',
      },
      {
        name: 'Women Empowerment',
        icon: '👩',
        staffCount: '22',
        description: 'Gender equality programs, women\'s leadership training, and support for vulnerable women.',
      },
      {
        name: 'Partnerships & Advocacy',
        icon: '🤝',
        staffCount: '18',
        description: 'Building strategic partnerships, advocacy campaigns, and international engagement.',
      },
      {
        name: 'Finance & Administration',
        icon: '📊',
        staffCount: '25',
        description: 'Financial management, audit compliance, HR, and organizational administration.',
      },
    ],
  },
  ar: {
    title: 'فريقنا',
    heroTitle: 'متخصصون مكرسون',
    heroSubtitle: 'أكثر من 200 موظف يعملون عبر 30+ دولة، مدعومين من 2500+ متطوع',
    departments: [
      {
        name: 'الاستجابة للطوارئ',
        icon: '🚨',
        staffCount: '45',
        description: 'فرق الاستجابة السريعة المنتشرة في مناطق الأزمات توفر المساعدات الإنسانية الفورية والإغاثة الطارئة.',
      },
      {
        name: 'برامج الرعاية الصحية',
        icon: '🏥',
        staffCount: '38',
        description: 'العيادات المتنقلة، صحة الأمومة، الوقاية من الأمراض، والتدريب الطبي للسكان الضعفاء.',
      },
      {
        name: 'التعليم والتدريب',
        icon: '📚',
        staffCount: '32',
        description: 'برامج محو الأمية، التدريب المهني، والدعم التعليمي للأطفال والبالغين.',
      },
      {
        name: 'الأمن الغذائي',
        icon: '🍽️',
        staffCount: '28',
        description: 'توزيع الغذاء، الدعم الزراعي، وبرامج التغذية تعالج الجوع والسوء التغذية.',
      },
      {
        name: 'المأوى والمياه والصرف الصحي',
        icon: '🏠',
        staffCount: '35',
        description: 'بناء المساكن، البنية التحتية للمياه والصرف الصحي، وتوفير المآوي الطارئة.',
      },
      {
        name: 'سبل العيش والتنمية الاقتصادية',
        icon: '💼',
        staffCount: '30',
        description: 'التمويل متناهي الصغر، التدريب المهني، وبرامج التمكين الاقتصادي للتنمية المستدامة.',
      },
      {
        name: 'تمكين المرأة',
        icon: '👩',
        staffCount: '22',
        description: 'برامج المساواة بين الجنسين، تدريب القيادة النسائية، والدعم للنساء الضعيفات.',
      },
      {
        name: 'الشراكات والدعوة',
        icon: '🤝',
        staffCount: '18',
        description: 'بناء الشراكات الاستراتيجية، حملات الدعوة، والانخراط الدولي.',
      },
      {
        name: 'المالية والإدارة',
        icon: '📊',
        staffCount: '25',
        description: 'الإدارة المالية، امتثال التدقيق، الموارد البشرية، والإدارة التنظيمية.',
      },
    ],
  },
};

export default function TeamPage({ params }: { params: { locale: Locale } }) {
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
            Staff Directory
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

      {/* Departments Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.departments.map((dept, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>
                  {dept.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {dept.name}
                </h3>
                <p style={{
                  fontSize: '28px',
                  color: royalColors.hashemiteGold,
                  fontWeight: '600',
                  marginBottom: '16px',
                  margin: '8px 0 16px 0',
                }}>
                  {dept.staffCount}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '16px',
                }}>
                  Staff Members
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '20px',
                }} />
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '64px 32px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            textAlign: 'center',
          }}>
            <div>
              <p style={{
                fontSize: '48px',
                color: royalColors.hashemiteGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
                margin: 0,
              }}>
                200+
              </p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                Staff Members
              </p>
            </div>
            <div>
              <p style={{
                fontSize: '48px',
                color: royalColors.hashemiteGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
                margin: 0,
              }}>
                2.5K+
              </p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                Volunteers
              </p>
            </div>
            <div>
              <p style={{
                fontSize: '48px',
                color: royalColors.hashemiteGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
                margin: 0,
              }}>
                30+
              </p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
