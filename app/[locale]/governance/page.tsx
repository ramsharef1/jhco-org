'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import Link from 'next/link';

const pageContent = {
  en: {
    title: 'Governance',
    heroTitle: 'Governance Hub',
    heroSubtitle: 'Comprehensive information about JHCO\'s governance, leadership, and organizational structure',
    sections: [
      {
        title: 'Board of Trustees',
        description: 'Meet the board members who provide strategic oversight and governance of JHCO\'s operations and direction.',
        link: '/governance/board',
        icon: '👑',
      },
      {
        title: 'Organizational Structure',
        description: 'Understand how JHCO is organized across departments and regional offices with clear reporting lines.',
        link: '/governance/structure',
        icon: '🏢',
      },
      {
        title: 'Leadership History',
        description: 'Explore the evolution of JHCO\'s leadership over three decades of humanitarian service.',
        link: '/governance/leadership',
        icon: '📜',
      },
    ],
    governance: {
      title: 'Governance Framework',
      description: 'JHCO operates under a comprehensive governance framework designed to ensure transparency, accountability, and effectiveness in all humanitarian work. Our board-led governance structure, combined with rigorous financial oversight and program evaluation, ensures that our organization maintains the highest standards of organizational management.',
      features: [
        'Board-led strategic governance',
        'Independent financial audits',
        'Transparent decision-making',
        'Stakeholder engagement',
        'Regular performance reviews',
        'Risk management protocols',
      ],
    },
  },
  ar: {
    title: 'الحكومة',
    heroTitle: 'مركز الحوكمة',
    heroSubtitle: 'معلومات شاملة عن حكومة الهيئة والقيادة والهيكل التنظيمي',
    sections: [
      {
        title: 'مجلس الأمناء',
        description: 'تعريف أعضاء المجلس الذين يقدمون الإشراف الاستراتيجي وحوكمة عمليات الهيئة واتجاهها.',
        link: '/governance/board',
        icon: '👑',
      },
      {
        title: 'الهيكل التنظيمي',
        description: 'فهم كيفية تنظيم الهيئة عبر الأقسام والمكاتب الإقليمية مع خطوط تقارير واضحة.',
        link: '/governance/structure',
        icon: '🏢',
      },
      {
        title: 'تاريخ القيادة',
        description: 'استكشاف تطور قيادة الهيئة على مدار ثلاثة عقود من الخدمة الإنسانية.',
        link: '/governance/leadership',
        icon: '📜',
      },
    ],
    governance: {
      title: 'إطار الحوكمة',
      description: 'تعمل الهيئة في إطار حكومة شامل مصمم لضمان الشفافية والمسؤولية والفعالية في جميع الأعمال الإنسانية. يضمن هيكل الحكومة التي يقودها المجلس، مقترناً برقابة مالية صارمة وتقييم البرامج، أن تحافظ منظمتنا على أعلى معايير إدارة المنظمة.',
      features: [
        'حكومة استراتيجية يقودها المجلس',
        'التدقيق المالي المستقل',
        'صنع القرار الشفاف',
        'الانخراط مع أصحاب المصلحة',
        'مراجعات الأداء المنتظمة',
        'بروتوكولات إدارة المخاطر',
      ],
    },
  },
};

export default function GovernancePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const base = `/${locale}`;

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
            Organizational Leadership
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

      {/* Governance Sections */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            marginBottom: '96px',
          }}>
            {content.sections.map((section, idx) => (
              <Link key={idx} href={`${base}${section.link}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '48px 32px',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.border}`,
                  boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: ar ? 'right' : 'left',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    fontSize: '56px',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}>
                    {section.icon}
                  </div>
                  <h3 style={{
                    fontSize: '28px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.deepNavy,
                    marginBottom: '16px',
                    marginTop: 0,
                  }}>
                    {section.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#3d3d3d',
                    lineHeight: '1.7',
                    flex: 1,
                    margin: 0,
                    marginBottom: '20px',
                  }}>
                    {section.description}
                  </p>
                  <div style={{
                    height: '1px',
                    backgroundColor: royalColors.border,
                    marginBottom: '16px',
                  }} />
                  <p style={{
                    color: royalColors.royalGold,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '12px',
                    margin: 0,
                  }}>
                    {ar ? 'اقرأ المزيد' : 'Learn More'} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Governance Framework */}
          <div style={{
            backgroundColor: 'white',
            padding: '64px 48px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.border}`,
            boxShadow: '0 8px 24px rgba(10,20,40,0.12)',
            textAlign: ar ? 'right' : 'left',
          }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '32px',
              marginTop: 0,
            }}>
              {content.governance.title}
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#3d3d3d',
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '900px',
            }}>
              {content.governance.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}>
              {content.governance.features.map((feature, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: ar ? 'right' : 'left',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <span style={{
                    color: royalColors.royalGold,
                    fontSize: '24px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  <p style={{
                    fontSize: '16px',
                    color: royalColors.deepNavy,
                    fontWeight: '600',
                    margin: 0,
                  }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section style={{
        backgroundColor: '#f9f7f4',
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.deepNavy,
            marginBottom: '64px',
          }}>
            Explore More <span style={{ color: royalColors.royalGold }}>Information</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <Link href={`${base}/compliance`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '32px', margin: 0, marginBottom: '16px' }}>⚖️</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.deepNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'الامتثال' : 'Compliance'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#3d3d3d',
                  margin: 0,
                }}>
                  {ar ? 'التسجيلات والشهادات والسياسات' : 'Registrations, certifications & policies'}
                </p>
              </div>
            </Link>

            <Link href={`${base}/code-of-conduct`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '32px', margin: 0, marginBottom: '16px' }}>📜</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.deepNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'مدونة السلوك' : 'Code of Conduct'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#3d3d3d',
                  margin: 0,
                }}>
                  {ar ? 'المبادئ والمعايير الأخلاقية' : 'Ethical standards & principles'}
                </p>
              </div>
            </Link>

            <Link href={`${base}/transparency`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: '32px', margin: 0, marginBottom: '16px' }}>👁️</p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.deepNavy,
                  marginBottom: '12px',
                }}>
                  {ar ? 'الشفافية' : 'Transparency'}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#3d3d3d',
                  margin: 0,
                }}>
                  {ar ? 'الشفافية والمسؤولية' : 'Accountability & openness'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
