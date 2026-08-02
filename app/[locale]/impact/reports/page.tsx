'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Reports',
    heroTitle: 'Annual & Financial Reports',
    heroSubtitle: 'Comprehensive documentation of JHCO\'s humanitarian work and impact',
    reports: [
      {
        year: '2023',
        title: 'Annual Report 2023',
        type: 'Annual Report',
        size: '15 MB',
        description: 'Comprehensive annual report covering programs, impact, financial performance, and strategic initiatives across all 30+ countries.',
      },
      {
        year: '2023',
        title: 'Financial Audit Report 2023',
        type: 'Audit Report',
        size: '8 MB',
        description: 'Independent financial audit conducted by international accounting firm. Full transparency and accountability documentation.',
      },
      {
        year: '2023',
        title: 'Program Impact Report 2023',
        type: 'Impact Report',
        size: '12 MB',
        description: 'Detailed program outcomes including emergency response, healthcare, education, food security, and livelihood impact metrics.',
      },
      {
        year: '2022',
        title: 'Annual Report 2022',
        type: 'Annual Report',
        size: '14 MB',
        description: 'Annual operations summary including expansion to new countries, partnership development, and program scaling.',
      },
      {
        year: '2022',
        title: 'Financial Audit Report 2022',
        type: 'Audit Report',
        size: '7 MB',
        description: 'Independent financial audit and compliance verification for fiscal year 2022.',
      },
      {
        year: '2021',
        title: 'COVID-19 Response Report',
        type: 'Special Report',
        size: '10 MB',
        description: 'Special report on JHCO\'s rapid response to COVID-19 pandemic across operational regions.',
      },
    ],
  },
  ar: {
    title: 'التقارير',
    heroTitle: 'التقارير السنوية والمالية',
    heroSubtitle: 'تثقيف شامل لعمل الهيئة الإنساني والتأثير',
    reports: [
      {
        year: '2023',
        title: 'التقرير السنوي 2023',
        type: 'التقرير السنوي',
        size: '15 MB',
        description: 'تقرير سنوي شامل يغطي البرامج والتأثير والأداء المالي والمبادرات الاستراتيجية عبر جميع 30+ دول.',
      },
      {
        year: '2023',
        title: 'تقرير التدقيق المالي 2023',
        type: 'تقرير التدقيق',
        size: '8 MB',
        description: 'تدقيق مالي مستقل من قبل شركة محاسبة دولية. توثيق شفافية كاملة ومسؤولية.',
      },
      {
        year: '2023',
        title: 'تقرير تأثير البرامج 2023',
        type: 'تقرير التأثير',
        size: '12 MB',
        description: 'نتائج البرامج المفصلة بما في ذلك الاستجابة للطوارئ والصحة والتعليم والأمن الغذائي وقياس تأثير سبل العيش.',
      },
      {
        year: '2022',
        title: 'التقرير السنوي 2022',
        type: 'التقرير السنوي',
        size: '14 MB',
        description: 'ملخص العمليات السنوية بما في ذلك التوسع إلى دول جديدة وتطوير الشراكات وتوسيع البرامج.',
      },
      {
        year: '2022',
        title: 'تقرير التدقيق المالي 2022',
        type: 'تقرير التدقيق',
        size: '7 MB',
        description: 'تدقيق مالي مستقل والتحقق من الامتثال للسنة المالية 2022.',
      },
      {
        year: '2021',
        title: 'تقرير الاستجابة لـ COVID-19',
        type: 'تقرير خاص',
        size: '10 MB',
        description: 'تقرير خاص حول الاستجابة السريعة للهيئة لوباء COVID-19 عبر المناطق التشغيلية.',
      },
    ],
  },
};

export default function ReportsPage({ params }: { params: { locale: Locale } }) {
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
            Transparency
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

      {/* Reports Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}>
            {content.reports.map((report, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div>
                    <p style={{
                      color: royalColors.royalGold,
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px',
                      margin: 0,
                    }}>
                      {report.year}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b6b6b',
                      fontWeight: '600',
                      margin: '4px 0 0 0',
                    }}>
                      {report.type}
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: '#f9f7f4',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#6b6b6b',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>
                    {report.size}
                  </div>
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {report.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#3d3d3d',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  flex: 1,
                  margin: '16px 0 24px 0',
                }}>
                  {report.description}
                </p>

                <button style={{
                  backgroundColor: royalColors.deepNavy,
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  alignSelf: ar ? 'flex-end' : 'flex-start',
                }}>
                  {ar ? 'تحميل' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
