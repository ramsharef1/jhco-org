'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Leadership',
    heroTitle: 'Our Leadership Team',
    heroSubtitle: 'Dedicated professionals guiding JHCO\'s mission with vision and integrity',
    leaders: [
      {
        name: 'His Excellency Dr. Abdullah Al-Hashash',
        title: 'Board Chairman',
        portfolio: 'Strategic Direction & Governance',
        bio: 'With over 30 years of humanitarian experience, Dr. Al-Hashash leads JHCO\'s board with distinguished leadership and commitment to humanitarian excellence.',
      },
      {
        name: 'Mr. Khalid Al-Zou\'bi',
        title: 'Executive Director',
        portfolio: 'Operations & Programs',
        bio: 'Mr. Al-Zou\'bi oversees all operational aspects of JHCO, ensuring efficient delivery of humanitarian programs across 30+ countries.',
      },
      {
        name: 'Dr. Fatima Al-Mansouri',
        title: 'Deputy Director',
        portfolio: 'Strategic Partnerships & Development',
        bio: 'Dr. Al-Mansouri leads strategic partnerships with international organizations and coordinates development initiatives.',
      },
      {
        name: 'Mr. Hassan Al-Rashdan',
        title: 'Chief Financial Officer',
        portfolio: 'Finance & Fiscal Accountability',
        bio: 'Mr. Al-Rashdan ensures financial transparency and maintains the highest standards of fiscal accountability across all operations.',
      },
      {
        name: 'Ms. Amira Al-Shobaki',
        title: 'Director of Programs',
        portfolio: 'Program Development & Impact',
        bio: 'Ms. Al-Shobaki leads the design and implementation of humanitarian programs, ensuring maximum impact and sustainability.',
      },
      {
        name: 'Dr. Mohammed Al-Khatib',
        title: 'Director of International Relations',
        portfolio: 'Government & UN Relations',
        bio: 'Dr. Al-Khatib coordinates relationships with UN agencies and international partners, strengthening JHCO\'s global network.',
      },
    ],
  },
  ar: {
    title: 'القيادة',
    heroTitle: 'فريق القيادة لدينا',
    heroSubtitle: 'متخصصون مكرسون يوجهون مهمة الهيئة برؤية والتزام',
    leaders: [
      {
        name: 'سعادة الدكتور عبدالله الحشاش',
        title: 'رئيس مجلس الإدارة',
        portfolio: 'الاتجاه الاستراتيجي والحوكمة',
        bio: 'مع أكثر من 30 عاماً من الخبرة الإنسانية، يقود د. الحشاش مجلس إدارة الهيئة برؤية متميزة والتزام بالتميز الإنساني.',
      },
      {
        name: 'السيد خالد الزعبي',
        title: 'المدير التنفيذي',
        portfolio: 'العمليات والبرامج',
        bio: 'يشرف السيد الزعبي على جميع جوانب عمليات الهيئة، ويضمن تقديم فعال لبرامج إنسانية عبر 30+ دولة.',
      },
      {
        name: 'الدكتورة فاطمة المنصوري',
        title: 'نائب المدير',
        portfolio: 'الشراكات الاستراتيجية والتطوير',
        bio: 'تقود د. المنصوري الشراكات الاستراتيجية مع المنظمات الدولية وتنسق المبادرات التنموية.',
      },
      {
        name: 'السيد حسن الرشدان',
        title: 'المدير المالي',
        portfolio: 'المالية والمساءلة المالية',
        bio: 'يضمن السيد الرشدان الشفافية المالية ويحافظ على أعلى معايير المساءلة المالية عبر جميع العمليات.',
      },
      {
        name: 'السيدة أميرة الشوبكي',
        title: 'مدير البرامج',
        portfolio: 'تطوير البرامج والتأثير',
        bio: 'تقود السيدة الشوبكي تصميم وتنفيذ برامج إنسانية، مما يضمن أقصى تأثير واستدامة.',
      },
      {
        name: 'الدكتور محمد الخطيب',
        title: 'مدير العلاقات الدولية',
        portfolio: 'العلاقات الحكومية والأممية',
        bio: 'ينسق د. الخطيب العلاقات مع وكالات الأمم المتحدة والشركاء الدوليين، مما يعزز الشبكة العالمية للهيئة.',
      },
    ],
  },
};

export default function LeadershipPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.hopeTeal})`,
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
            Organization Leadership
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

      {/* Leadership Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
          }}>
            {content.leaders.map((leader, idx) => (
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
                  width: '80px',
                  height: '80px',
                  backgroundColor: royalColors.warmGold,
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  color: royalColors.deepNavy,
                  fontWeight: 'bold',
                }}>
                  {leader.name.charAt(0)}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '8px',
                  textAlign: 'center',
                  marginTop: 0,
                }}>
                  {leader.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.warmGold,
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textAlign: 'center',
                  marginBottom: '4px',
                  margin: 0,
                }}>
                  {leader.title}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textAlign: 'center',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {leader.portfolio}
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.border,
                  marginBottom: '20px',
                }} />
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textDark,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.hopeTeal})`,
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
            Leadership Committed to <span style={{ color: royalColors.warmGold }}>Excellence</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Our leadership team brings decades of combined humanitarian, governance, and operational experience. Each leader is personally committed to JHCO's mission of delivering humanitarian excellence with dignity, transparency, and impact.
          </p>
        </div>
      </section>
    </div>
  );
}
