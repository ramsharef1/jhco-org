'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Transparency',
    heroTitle: 'Transparency & Accountability',
    heroSubtitle: 'JHCO\'s commitment to openness and public accountability in all operations',
    commitments: [
      {
        title: 'Financial Transparency',
        description: 'All financial reports publicly available. Independent annual audits. Detailed budget breakdowns. Donor funds tracked meticulously. No undisclosed expenses.',
      },
      {
        title: 'Program Reporting',
        description: 'Regular impact reports published. Program outcomes documented. Beneficiary data maintained. Success and challenges both reported honestly.',
      },
      {
        title: 'Governance Openness',
        description: 'Board composition public. Meeting summaries available. Leadership decisions documented. Stakeholder engagement transparent.',
      },
      {
        title: 'Beneficiary Voice',
        description: 'Community feedback mechanisms in place. Complaints procedures documented. Beneficiary perspectives valued. Changes based on feedback.',
      },
      {
        title: 'Staff Accountability',
        description: 'Code of conduct enforced. Ethical violations investigated. Grievance procedures available. Anti-corruption measures active.',
      },
      {
        title: 'Public Engagement',
        description: 'Website information updated regularly. Social media engagement authentic. News releases prompt. Inquiries responded to quickly.',
      },
    ],
    frameworks: [
      {
        framework: 'UN Sustainable Development Goals',
        alignment: 'All programs aligned with SDGs 1-5, 8, 10, 16, 17',
      },
      {
        framework: 'Humanitarian Accountability Partnership',
        alignment: 'Commitments to accountability and organizational learning',
      },
      {
        framework: 'SPHERE Standards',
        alignment: 'Minimum standards for humanitarian response',
      },
      {
        framework: 'Core Humanitarian Standard',
        alignment: 'Nine commitments to quality and accountability',
      },
    ],
  },
  ar: {
    title: 'الشفافية',
    heroTitle: 'الشفافية والمسؤولية',
    heroSubtitle: 'التزام الهيئة بالانفتاح والمسؤولية العامة في جميع العمليات',
    commitments: [
      {
        title: 'الشفافية المالية',
        description: 'جميع التقارير المالية متاحة للجمهور. التدقيق السنوي المستقل. كسر الميزانية المفصل. تتبع أموال المانحين بعناية. لا نفقات غير مكشوفة.',
      },
      {
        title: 'إعداد التقارير البرامجية',
        description: 'تقارير التأثير المنتظمة المنشورة. نتائج البرامج الموثقة. بيانات المستفيدين المحفوظة. يتم الإبلاغ عن النجاحات والتحديات بصدق.',
      },
      {
        title: 'انفتاح الحكومة',
        description: 'تركيبة المجلس عام. ملخصات الاجتماع المتاحة. قرارات القيادة الموثقة. الانخراط صاحب المصلحة شفاف.',
      },
      {
        title: 'صوت المستفيد',
        description: 'آليات التغذية الراجعة المجتمعية في مكانها. إجراءات الشكاوى الموثقة. آراء المستفيدين ذات قيمة. التغييرات على أساس الملاحظات.',
      },
      {
        title: 'مسؤولية الموظفين',
        description: 'تطبيق مدونة السلوك. التحقيق في الانتهاكات الأخلاقية. إجراءات الشكاوى المتاحة. تدابير مكافحة الفساد نشطة.',
      },
      {
        title: 'الانخراط العام',
        description: 'معلومات الموقع محدثة بانتظام. انخراط وسائل التواصل الاجتماعي أصيل. البيانات الصحفية الفورية. الاستجابة للاستفسارات بسرعة.',
      },
    ],
    frameworks: [
      {
        framework: 'أهداف التنمية المستدامة للأمم المتحدة',
        alignment: 'جميع البرامج محاذاة مع أهداف التنمية المستدامة 1-5 و 8 و 10 و 16 و 17',
      },
      {
        framework: 'شراكة المساءلة الإنسانية',
        alignment: 'الالتزامات بالمساءلة والتعلم التنظيمي',
      },
      {
        framework: 'معايير SPHERE',
        alignment: 'الحد الأدنى من المعايير للاستجابة الإنسانية',
      },
      {
        framework: 'معيار إنساني أساسي',
        alignment: 'تسعة التزامات للجودة والمسؤولية',
      },
    ],
  },
};

export default function TransparencyPage({ params }: { params: { locale: Locale } }) {
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
            Our Commitment
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

      {/* Transparency Commitments */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '96px',
          }}>
            {content.commitments.map((commitment, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {commitment.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textDark,
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          {/* Standards Frameworks */}
          <div style={{
            backgroundColor: royalColors.bgWarm,
            padding: '48px 40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.border}`,
          }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '48px',
              textAlign: 'center',
              marginTop: 0,
            }}>
              International <span style={{ color: royalColors.warmGold }}>Frameworks</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}>
              {content.frameworks.map((fw, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '6px',
                  border: `1px solid ${royalColors.border}`,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: royalColors.deepNavy,
                    marginBottom: '12px',
                    marginTop: 0,
                  }}>
                    {fw.framework}
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    color: royalColors.textDark,
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {fw.alignment}
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
