'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Our Values',
    heroTitle: 'Core Principles',
    heroSubtitle: 'Five fundamental values guide every decision and action at JHCO',
    values: [
      {
        icon: '❤️',
        title: 'Humanity',
        description: 'We place human dignity and wellbeing at the center of everything we do. Every individual deserves respect, compassion, and access to humanitarian support regardless of circumstances.',
      },
      {
        icon: '⚖️',
        title: 'Impartiality',
        description: 'Our aid is based solely on need. We provide assistance without discrimination based on race, religion, nationality, political opinion, or any other factor.',
      },
      {
        icon: '🕊️',
        title: 'Neutrality',
        description: 'We maintain our independence and neutrality to preserve our ability to act with all parties. This enables us to reach those in need across all regions and contexts.',
      },
      {
        icon: '👁️',
        title: 'Transparency',
        description: 'We operate with complete transparency in our finances, programs, and operations. Accountability to our stakeholders and beneficiaries is fundamental to our work.',
      },
      {
        icon: '🌟',
        title: 'Excellence',
        description: 'We are committed to delivering the highest quality humanitarian assistance. Continuous improvement and innovation drive our efforts to maximize impact and effectiveness.',
      },
    ],
  },
  ar: {
    title: 'قيمنا',
    heroTitle: 'المبادئ الأساسية',
    heroSubtitle: 'خمس قيم أساسية توجه كل قرار وإجراء في الهيئة',
    values: [
      {
        icon: '❤️',
        title: 'الإنسانية',
        description: 'نضع كرامة الإنسان وسلامته في مركز كل عمل نقوم به. يستحق كل فرد الاحترام والرحمة والوصول إلى المساعدات الإنسانية بغض النظر عن الظروف.',
      },
      {
        icon: '⚖️',
        title: 'الحيادية',
        description: 'تستند مساعداتنا فقط على الحاجة. نقدم المساعدة دون تمييز على أساس العرق أو الدين أو الجنسية أو الرأي السياسي أو أي عامل آخر.',
      },
      {
        icon: '🕊️',
        title: 'عدم الانحياز',
        description: 'نحافظ على استقلاليتنا وعدم انحيازنا للحفاظ على قدرتنا على التصرف مع جميع الأطراف. يمكننا من الوصول إلى المحتاجين عبر جميع المناطق والسياقات.',
      },
      {
        icon: '👁️',
        title: 'الشفافية',
        description: 'نعمل بكل شفافية في تمويلنا وبرامجنا وعملياتنا. المسؤولية تجاه أصحاب المصلحة والمستفيدين أساسية في عملنا.',
      },
      {
        icon: '🌟',
        title: 'التميز',
        description: 'نحن ملتزمون بتقديم أعلى جودة من المساعدات الإنسانية. التحسين المستمر والابتكار يدفعان جهودنا لتعظيم التأثير والفعالية.',
      },
    ],
  },
};

export default function ValuesPage({ params }: { params: { locale: Locale } }) {
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
            Our Foundation
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

      {/* Values Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {content.values.map((value, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                transition: 'all 0.3s ease',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  fontSize: '64px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#3d3d3d',
                  lineHeight: '1.8',
                  margin: 0,
                }}>
                  {value.description}
                </p>
                <div style={{
                  height: '4px',
                  width: '60px',
                  backgroundColor: royalColors.royalGold,
                  marginTop: '24px',
                  borderRadius: '2px',
                }} />
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
            Living Our <span style={{ color: royalColors.royalGold }}>Values</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 40px',
          }}>
            These five values are not merely statements—they are the operational framework that guides our team, partnerships, and programs. Every staff member and volunteer at JHCO is trained to uphold these principles in their daily work, ensuring that our humanitarian mission is executed with integrity, dignity, and excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
