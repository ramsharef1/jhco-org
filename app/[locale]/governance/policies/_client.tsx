'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import Link from 'next/link';

const pageContent = {
  en: {
    title: 'Governance Policies',
    heroTitle: 'Organizational Policies',
    heroSubtitle: 'Comprehensive policies governing JHCO\'s operations, ethics, and risk management',
    description: 'JHCO maintains a comprehensive set of governance policies designed to ensure organizational integrity, financial accountability, and ethical conduct across all operations. These policies provide clear guidelines for employees, contractors, and stakeholders.',
    policies: [
      {
        title: 'Anti-Fraud Policy',
        description: 'Comprehensive framework to prevent, detect, and respond to fraudulent activities within the organization.',
        link: '/governance/policies/anti-fraud',
        icon: '🛡️',
      },
    ],
  },
  ar: {
    title: 'سياسات الحوكمة',
    heroTitle: 'سياسات المنظمة',
    heroSubtitle: 'سياسات شاملة تحكم عمليات الهيئة والأخلاقيات وإدارة المخاطر',
    description: 'تحافظ الهيئة على مجموعة شاملة من سياسات الحوكمة المصممة لضمان سلامة المنظمة والمسؤولية المالية والسلوك الأخلاقي عبر جميع العمليات. توفر هذه السياسات إرشادات واضحة للموظفين والمقاولين وأصحاب المصلحة.',
    policies: [
      {
        title: 'سياسة مكافحة الاحتيال',
        description: 'إطار شامل لمنع واكتشاف والاستجابة للأنشطة الاحتيالية داخل المنظمة.',
        link: '/governance/policies/anti-fraud',
        icon: '🛡️',
      },
    ],
  },
};

export default function PoliciesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const base = `/${locale}`;

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
            {ar ? 'الحوكمة' : 'Governance'}
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

      {/* Overview Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '48px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderFormal}`,
            boxShadow: '0 4px 12px rgba(10,20,40,0.08)',
            marginBottom: '64px',
          }}>
            <h2 style={{
              fontSize: '36px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginTop: 0,
              marginBottom: '24px',
            }}>
              {ar ? 'نظرة عامة على السياسات' : 'Policy Overview'}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textOfficial,
              lineHeight: '1.8',
              margin: 0,
            }}>
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {ar ? 'السياسات' : 'Available Policies'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '40px',
          }}>
            {content.policies.map((policy, idx) => (
              <Link key={idx} href={`${base}${policy.link}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '48px 32px',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: ar ? 'right' : 'left',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  ':hover': {
                    boxShadow: '0 8px 24px rgba(10,20,40,0.15)',
                  },
                }}>
                  <div style={{
                    fontSize: '56px',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}>
                    {policy.icon}
                  </div>
                  <h3 style={{
                    fontSize: '28px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    marginBottom: '16px',
                    marginTop: 0,
                  }}>
                    {policy.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.7',
                    flex: 1,
                    margin: 0,
                    marginBottom: '20px',
                  }}>
                    {policy.description}
                  </p>
                  <div style={{
                    height: '1px',
                    backgroundColor: royalColors.borderFormal,
                    marginBottom: '16px',
                  }} />
                  <p style={{
                    color: royalColors.hashemiteGold,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '12px',
                    margin: 0,
                  }}>
                    {ar ? 'اقرأ السياسة الكاملة' : 'Read Full Policy'} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {content.policies.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '64px 32px',
              backgroundColor: royalColors.bgRefined,
              borderRadius: '8px',
            }}>
              <p style={{
                fontSize: '18px',
                color: royalColors.textOfficial,
              }}>
                {ar ? 'سيتم إضافة السياسات قريباً' : 'Policies coming soon'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Governance Pages */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
          }}>
            {ar ? 'مزيد من الحوكمة' : 'Explore More Governance'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <Link href={`${base}/governance/board`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '48px', margin: 0, marginBottom: '16px' }}>👑</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'مجلس الأمناء' : 'Board of Trustees'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: 0,
                }}>
                  {ar ? 'الإشراف الاستراتيجي والقيادة' : 'Strategic oversight & leadership'}
                </p>
              </div>
            </Link>

            <Link href={`${base}/governance/structure`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '48px', margin: 0, marginBottom: '16px' }}>🏢</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'الهيكل التنظيمي' : 'Organizational Structure'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: 0,
                }}>
                  {ar ? 'الأقسام وخطوط التقارير' : 'Departments & reporting lines'}
                </p>
              </div>
            </Link>

            <Link href={`${base}/code-of-conduct`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '48px', margin: 0, marginBottom: '16px' }}>📜</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'مدونة السلوك' : 'Code of Conduct'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: 0,
                }}>
                  {ar ? 'المعايير الأخلاقية' : 'Ethical standards'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
