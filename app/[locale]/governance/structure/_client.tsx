'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Organizational Structure',
    heroTitle: 'Organizational Structure',
    heroSubtitle: 'JHCO\'s hierarchical organization enabling effective program delivery',
    structure: [
      {
        level: 'Board of Trustees',
        icon: '👑',
        description: 'Strategic governance and oversight',
        departments: ['Finance Committee', 'Programs Committee', 'Governance Committee'],
      },
      {
        level: 'Executive Director',
        icon: '🎯',
        description: 'Overall organizational leadership',
        departments: ['Executive Office', 'Strategic Initiatives', 'International Relations'],
      },
      {
        level: 'Deputy Director & Director of Operations',
        icon: '⚙️',
        description: 'Operational oversight and coordination',
        departments: ['Operations Management', 'Quality Assurance', 'Logistics'],
      },
      {
        level: 'Program Departments',
        icon: '📊',
        description: 'Core humanitarian and development work',
        departments: [
          'Emergency Response',
          'Healthcare Programs',
          'Education & Training',
          'Food Security',
          'Shelter & WASH',
          'Livelihoods & Economic Development',
          'Women Empowerment',
        ],
      },
      {
        level: 'Support Functions',
        icon: '🛠️',
        description: 'Administrative and enabling services',
        departments: [
          'Finance & Administration',
          'Human Resources',
          'Information Technology',
          'Communications & Advocacy',
          'Monitoring & Evaluation',
          'Partnerships & Resource Mobilization',
        ],
      },
    ],
  },
  ar: {
    title: 'الهيكل التنظيمي',
    heroTitle: 'الهيكل التنظيمي',
    heroSubtitle: 'تنظيم الهيئة الهرمي الذي يمكّن التسليم الفعال للبرامج',
    structure: [
      {
        level: 'مجلس الأمناء',
        icon: '👑',
        description: 'الحكومة الاستراتيجية والإشراف',
        departments: ['لجنة المالية', 'لجنة البرامج', 'لجنة الحوكمة'],
      },
      {
        level: 'المدير التنفيذي',
        icon: '🎯',
        description: 'قيادة المنظمة الشاملة',
        departments: ['المكتب التنفيذي', 'المبادرات الاستراتيجية', 'العلاقات الدولية'],
      },
      {
        level: 'نائب المدير ومدير العمليات',
        icon: '⚙️',
        description: 'الإشراف التشغيلي والتنسيق',
        departments: ['إدارة العمليات', 'ضمان الجودة', 'الخدمات اللوجستية'],
      },
      {
        level: 'أقسام البرامج',
        icon: '📊',
        description: 'العمل الإنساني والتنموي الأساسي',
        departments: [
          'الاستجابة للطوارئ',
          'برامج الرعاية الصحية',
          'التعليم والتدريب',
          'الأمن الغذائي',
          'المأوى والمياه والصرف الصحي',
          'سبل العيش والتنمية الاقتصادية',
          'تمكين المرأة',
        ],
      },
      {
        level: 'الوظائف الداعمة',
        icon: '🛠️',
        description: 'الخدمات الإدارية والتمكينية',
        departments: [
          'المالية والإدارة',
          'الموارد البشرية',
          'تكنولوجيا المعلومات',
          'الاتصالات والدعوة',
          'المراقبة والتقييم',
          'الشراكات وتعبئة الموارد',
        ],
      },
    ],
  },
};

export default function StructurePage({ params }: { params: { locale: Locale } }) {
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
            Organization
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

      {/* Organizational Structure */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {content.structure.map((level, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                borderLeft: `5px solid ${royalColors.hashemiteGold}`,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '24px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div style={{
                    fontSize: '48px',
                  }}>
                    {level.icon}
                  </div>
                  <div style={{ textAlign: ar ? 'right' : 'left', flex: 1 }}>
                    <h3 style={{
                      fontSize: '28px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.darkNavy,
                      marginBottom: '8px',
                      marginTop: 0,
                    }}>
                      {level.level}
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#6b6b6b',
                      margin: 0,
                      fontStyle: 'italic',
                    }}>
                      {level.description}
                    </p>
                  </div>
                </div>

                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '24px',
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px',
                }}>
                  {level.departments.map((dept, dIdx) => (
                    <div key={dIdx} style={{
                      backgroundColor: royalColors.bgRefined,
                      padding: '16px',
                      borderRadius: '4px',
                      fontSize: '15px',
                      color: royalColors.textOfficial,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      • {dept}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Lines */}
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
            Coordination & <span style={{ color: royalColors.hashemiteGold }}>Communication</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '40px 32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <div style={{ fontSize: '44px', marginBottom: '12px' }}>📋</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                Clear Lines of Reporting
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                margin: 0,
              }}>
                Every position reports clearly through the hierarchy to the Executive Director and Board
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '40px 32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <div style={{ fontSize: '44px', marginBottom: '12px' }}>🤝</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                Cross-Functional Teams
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                margin: 0,
              }}>
                Regular coordination between departments for program integration and efficiency
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '40px 32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <div style={{ fontSize: '44px', marginBottom: '12px' }}>📊</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                Regular Reviews
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                margin: 0,
              }}>
                Quarterly performance reviews and annual strategic assessments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
