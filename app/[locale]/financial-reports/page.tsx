'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Financial Reports',
    heroTitle: 'Financial Transparency',
    heroSubtitle: 'Complete financial reporting demonstrating fiscal responsibility and transparency',
    financialHighlights: [
      { metric: '$50M+', label: 'Annual Humanitarian Impact', description: 'Resources deployed for humanitarian programs' },
      { metric: '94%', label: 'Program Spending', description: 'Percentage of budget allocated to programs' },
      { metric: '6%', label: 'Administrative Costs', description: 'Minimal overhead maintaining operational efficiency' },
      { metric: '100%', label: 'Audit Compliance', description: 'Full independent audit results' },
    ],
    expenditures: [
      { category: 'Emergency Response', percentage: 25 },
      { category: 'Healthcare Programs', percentage: 20 },
      { category: 'Education', percentage: 18 },
      { category: 'Food Security', percentage: 15 },
      { category: 'Shelter & WASH', percentage: 12 },
      { category: 'Livelihoods', percentage: 10 },
    ],
  },
  ar: {
    title: 'التقارير المالية',
    heroTitle: 'الشفافية المالية',
    heroSubtitle: 'التقارير المالية الكاملة التي تثبت المسؤولية المالية والشفافية',
    financialHighlights: [
      { metric: '$50M+', label: 'التأثير الإنساني السنوي', description: 'الموارد المستخدمة لبرامج إنسانية' },
      { metric: '94%', label: 'نفقات البرنامج', description: 'النسبة المئوية من الميزانية المخصصة للبرامج' },
      { metric: '6%', label: 'تكاليف إدارية', description: 'النفقات الإدارية المنخفضة الحفاظ على الكفاءة التشغيلية' },
      { metric: '100%', label: 'امتثال التدقيق', description: 'نتائج التدقيق المستقل الكامل' },
    ],
    expenditures: [
      { category: 'الاستجابة للطوارئ', percentage: 25 },
      { category: 'برامج الرعاية الصحية', percentage: 20 },
      { category: 'التعليم', percentage: 18 },
      { category: 'الأمن الغذائي', percentage: 15 },
      { category: 'المأوى والمياه والصرف', percentage: 12 },
      { category: 'سبل العيش', percentage: 10 },
    ],
  },
};

export default function FinancialReportsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.deepNavy})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.warmGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Fiscal Accountability
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

      {/* Financial Highlights */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            marginBottom: '96px',
          }}>
            {content.financialHighlights.map((metric, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '44px',
                  color: royalColors.warmGold,
                  fontFamily: royalTypography.serif,
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: 0,
                }}>
                  {metric.metric}
                </p>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: royalColors.deepNavy,
                  marginBottom: '8px',
                  marginTop: '12px',
                }}>
                  {metric.label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textDark,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Expenditure Breakdown */}
          <div>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '64px',
              textAlign: 'center',
            }}>
              Budget <span style={{ color: royalColors.warmGold }}>Allocation</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}>
              {content.expenditures.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.border}`,
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}>
                    <p style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: royalColors.deepNavy,
                      margin: 0,
                    }}>
                      {item.category}
                    </p>
                    <span style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: royalColors.warmGold,
                    }}>
                      {item.percentage}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div style={{
                    height: '8px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      backgroundColor: royalColors.warmGold,
                      width: `${item.percentage}%`,
                      borderRadius: '4px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Statement */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.deepNavy})`,
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
            Our Commitment to <span style={{ color: royalColors.warmGold }}>Accountability</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            JHCO maintains the highest standards of financial transparency and accountability. All funds are independently audited, and we maintain detailed records of all program expenditures. We believe every dollar donated must be accounted for and used effectively to maximize humanitarian impact.
          </p>
        </div>
      </section>
    </div>
  );
}
