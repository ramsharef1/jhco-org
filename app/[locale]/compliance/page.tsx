'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Compliance',
    heroTitle: 'Legal & Compliance',
    heroSubtitle: 'JHCO operates under strict legal and regulatory compliance frameworks',
    registrations: [
      {
        title: 'UN OCHA Registration',
        status: 'Active',
        date: 'Since 2000',
        description: 'Registered with United Nations Office for the Coordination of Humanitarian Affairs for international humanitarian operations',
      },
      {
        title: 'ISO 9001:2015 Certification',
        status: 'Active',
        date: 'Since 2018',
        description: 'Quality Management System certification ensuring consistent standards across all programs',
      },
      {
        title: 'ISO 26000 Compliance',
        status: 'Active',
        date: 'Since 2019',
        description: 'Social responsibility guidelines compliance demonstrating commitment to ethical operations',
      },
      {
        title: 'SPHERE Certified',
        status: 'Active',
        date: 'Since 2015',
        description: 'Humanitarian Charter and Minimum Standards certification for emergency response',
      },
      {
        title: 'NGO Registration - Jordan',
        status: 'Active',
        date: 'Since 1990',
        description: 'Licensed and registered with Jordanian Ministry of Social Development',
      },
      {
        title: 'Tax Exempt Status',
        status: 'Active',
        date: 'Ongoing',
        description: 'Recognized tax-exempt charitable organization in multiple jurisdictions',
      },
    ],
    policies: [
      'Data Protection & Privacy Policy',
      'Safeguarding & Child Protection Policy',
      'Anti-Fraud & Corruption Policy',
      'Environmental Sustainability Policy',
      'Gender Equality Policy',
      'Whistleblower Protection Policy',
      'Conflict of Interest Policy',
      'Document Retention Policy',
    ],
  },
  ar: {
    title: 'الامتثال',
    heroTitle: 'القانون والامتثال',
    heroSubtitle: 'تعمل الهيئة في إطار أطر امتثال قانونية وتنظيمية صارمة',
    registrations: [
      {
        title: 'تسجيل الأمم المتحدة OCHA',
        status: 'نشط',
        date: 'منذ 2000',
        description: 'مسجلة لدى مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية للعمليات الإنسانية الدولية',
      },
      {
        title: 'شهادة ISO 9001:2015',
        status: 'نشط',
        date: 'منذ 2018',
        description: 'شهادة نظام إدارة الجودة التي تضمن معايير متسقة عبر جميع البرامج',
      },
      {
        title: 'امتثال ISO 26000',
        status: 'نشط',
        date: 'منذ 2019',
        description: 'امتثال مبادئ المسؤولية الاجتماعية يثبت الالتزام بالعمليات الأخلاقية',
      },
      {
        title: 'معتمد من SPHERE',
        status: 'نشط',
        date: 'منذ 2015',
        description: 'شهادة الميثاق الإنساني والحد الأدنى من المعايير للاستجابة الطارئة',
      },
      {
        title: 'تسجيل المنظمات غير الحكومية - الأردن',
        status: 'نشط',
        date: 'منذ 1990',
        description: 'مرخصة ومسجلة لدى وزارة التنمية الاجتماعية الأردنية',
      },
      {
        title: 'حالة معفاة من الضرائب',
        status: 'نشط',
        date: 'مستمر',
        description: 'منظمة خيرية معترف بها معفاة من الضرائب في عدد من الولايات القضائية',
      },
    ],
    policies: [
      'سياسة حماية البيانات والخصوصية',
      'سياسة الحماية من الأذى وحماية الأطفال',
      'سياسة مكافحة الاحتيال والفساد',
      'سياسة الاستدامة البيئية',
      'سياسة المساواة بين الجنسين',
      'سياسة حماية المبلغين عن المخالفات',
      'سياسة تضارب المصالح',
      'سياسة الاحتفاظ بالوثائق',
    ],
  },
};

export default function CompliancePage({ params }: { params: { locale: Locale } }) {
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
            Regulatory Standards
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

      {/* Registrations & Certifications */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.deepNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            Certifications & <span style={{ color: royalColors.royalGold }}>Registrations</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '96px',
          }}>
            {content.registrations.map((reg, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.deepNavy,
                      marginBottom: '8px',
                      marginTop: 0,
                    }}>
                      {reg.title}
                    </h3>
                  </div>
                  <span style={{
                    backgroundColor: royalColors.royalGold,
                    color: royalColors.deepNavy,
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap',
                  }}>
                    {reg.status}
                  </span>
                </div>

                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  fontWeight: '600',
                  marginBottom: '16px',
                  margin: '8px 0 16px 0',
                }}>
                  {reg.date}
                </p>

                <p style={{
                  fontSize: '15px',
                  color: '#3d3d3d',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {reg.description}
                </p>
              </div>
            ))}
          </div>

          {/* Policies */}
          <div>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '64px',
              textAlign: 'center',
            }}>
              Organizational <span style={{ color: royalColors.royalGold }}>Policies</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              backgroundColor: 'white',
              padding: '48px 40px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.border}`,
            }}>
              {content.policies.map((policy, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: ar ? 'right' : 'left',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <span style={{
                    color: royalColors.royalGold,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  <p style={{
                    fontSize: '15px',
                    color: '#3d3d3d',
                    fontWeight: '600',
                    margin: 0,
                  }}>
                    {policy}
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
