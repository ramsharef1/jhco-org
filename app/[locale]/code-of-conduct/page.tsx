'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Code of Conduct',
    heroTitle: 'Code of Conduct',
    heroSubtitle: 'Organizational ethics and standards guiding all JHCO staff and volunteers',
    principles: [
      {
        title: 'Humanity & Dignity',
        icon: '❤️',
        description: 'Treat all people with respect and uphold human dignity. Ensure all program participants are treated with compassion and respect regardless of circumstances.',
      },
      {
        title: 'Impartiality & Fairness',
        icon: '⚖️',
        description: 'Make decisions based solely on need without discrimination. All assistance is provided based on humanitarian principle and actual need, not favoritism.',
      },
      {
        title: 'Transparency & Honesty',
        icon: '🔍',
        description: 'Operate with complete honesty and transparency. Report accurately, avoid conflicts of interest, and maintain integrity in all dealings.',
      },
      {
        title: 'Professional Excellence',
        icon: '⭐',
        description: 'Maintain highest professional standards. Continuously develop skills, follow best practices, and deliver quality humanitarian work.',
      },
      {
        title: 'Safeguarding & Protection',
        icon: '🛡️',
        description: 'Protect vulnerable populations from harm. Implement child safeguarding, prevent sexual exploitation, and maintain confidentiality.',
      },
      {
        title: 'Environmental Responsibility',
        icon: '🌱',
        description: 'Minimize environmental impact of operations. Use resources sustainably and consider long-term environmental consequences of programs.',
      },
    ],
    violations: [
      'Sexual abuse or harassment of any kind is strictly prohibited',
      'Fraud, corruption, or misappropriation of funds will result in immediate dismissal and legal action',
      'Discrimination based on race, religion, gender, or other characteristics is forbidden',
      'Violence or threatening behavior toward colleagues, beneficiaries, or partners is unacceptable',
      'Theft or unauthorized use of JHCO resources is prohibited',
      'Substance abuse while on duty is grounds for termination',
      'Failure to report violations or cover-ups will be treated as misconduct',
    ],
  },
  ar: {
    title: 'مدونة السلوك',
    heroTitle: 'مدونة السلوك',
    heroSubtitle: 'الأخلاقيات التنظيمية والمعايير التي توجه جميع الموظفين والمتطوعين بالهيئة',
    principles: [
      {
        title: 'الإنسانية والكرامة',
        icon: '❤️',
        description: 'معاملة جميع الناس باحترام والحفاظ على كرامة الإنسان. ضمان معاملة جميع المستفيدين من البرامج بشفقة واحترام بغض النظر عن الظروف.',
      },
      {
        title: 'الحيادية والعدل',
        icon: '⚖️',
        description: 'اتخاذ القرارات استناداً فقط إلى الحاجة دون تمييز. تقدم جميع المساعدات على أساس المبدأ الإنساني والحاجة الفعلية، وليس المحاباة.',
      },
      {
        title: 'الشفافية والصدق',
        icon: '🔍',
        description: 'العمل بكل صدق وشفافية. الإبلاغ بدقة وتجنب تضارب المصالح والحفاظ على النزاهة في جميع التعاملات.',
      },
      {
        title: 'التميز المهني',
        icon: '⭐',
        description: 'الحفاظ على أعلى المعايير المهنية. تطوير المهارات باستمرار، واتباع أفضل الممارسات، وتقديم عمل إنساني عالي الجودة.',
      },
      {
        title: 'الحماية والحفاظ على السلامة',
        icon: '🛡️',
        description: 'حماية السكان الضعفاء من الأذى. تطبيق حماية الأطفال، منع الاستغلال الجنسي، والحفاظ على السرية.',
      },
      {
        title: 'المسؤولية البيئية',
        icon: '🌱',
        description: 'تقليل التأثير البيئي للعمليات. استخدام الموارد باستدامة والنظر في الآثار البيئية طويلة الأجل للبرامج.',
      },
    ],
    violations: [
      'الاعتداء الجنسي أو المضايقة من أي نوع محظور تماماً',
      'الاحتيال أو الفساد أو الاختلاس سيؤدي إلى الفصل الفوري والإجراءات القانونية',
      'التمييز على أساس العرق أو الدين أو الجنس أو خصائص أخرى محظور',
      'العنف أو السلوك المهدد تجاه الزملاء أو المستفيدين أو الشركاء غير مقبول',
      'السرقة أو الاستخدام غير المصرح لموارد الهيئة محظور',
      'تعاطي المخدرات أثناء العمل سبب للفصل',
      'عدم الإبلاغ عن الانتهاكات أو التستر عليها سيعتبر سوء سلوك',
    ],
  },
};

export default function CodeOfConductPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.darkNavy})`,
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
            Ethical Standards
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

      {/* Core Principles */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            Core <span style={{ color: royalColors.hashemiteGold }}>Principles</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '96px',
          }}>
            {content.principles.map((principle, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{ fontSize: '56px', marginBottom: '20px', textAlign: 'center' }}>
                  {principle.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {principle.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conduct Violations */}
          <div style={{
            backgroundColor: royalColors.bgRefined,
            padding: '48px 40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderFormal}`,
          }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '32px',
              textAlign: ar ? 'right' : 'left',
              marginTop: 0,
            }}>
              Prohibited <span style={{ color: royalColors.hashemiteGold }}>Conduct</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}>
              {content.violations.map((violation, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  textAlign: ar ? 'right' : 'left',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <span style={{
                    color: royalColors.charityRed,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>
                    ✕
                  </span>
                  <p style={{
                    fontSize: '15px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {violation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
