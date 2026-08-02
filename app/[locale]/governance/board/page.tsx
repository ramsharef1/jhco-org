'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Board of Trustees',
    heroTitle: 'Board of Trustees',
    heroSubtitle: 'Governance and strategic oversight of JHCO operations',
    boardMembers: [
      {
        name: 'His Excellency Dr. Abdullah Al-Hashash',
        role: 'Chairman',
        portfolio: 'Strategic Direction & Board Governance',
        background: 'Former diplomat with 35+ years of international humanitarian experience and government relations',
      },
      {
        name: 'Dr. Fawaz Al-Zaben',
        role: 'Vice Chairman',
        portfolio: 'Finance & Audit Oversight',
        background: 'Leading financial expert and former CFO of regional humanitarian organizations',
      },
      {
        name: 'Ms. Layla Al-Khalili',
        role: 'Board Member',
        portfolio: 'Programs & Impact Assessment',
        background: 'Humanitarian program director with expertise in emergency response and community development',
      },
      {
        name: 'Dr. Ahmed Al-Mansouri',
        role: 'Board Member',
        portfolio: 'International Relations & Advocacy',
        background: 'Senior UN official experienced in humanitarian coordination and policy',
      },
      {
        name: 'Mr. Tariq Al-Rashdan',
        role: 'Board Member',
        portfolio: 'Partnerships & Resource Mobilization',
        background: 'Successful entrepreneur and philanthropist supporting humanitarian causes',
      },
      {
        name: 'Prof. Maha Al-Kharouf',
        role: 'Board Member',
        portfolio: 'Research & Knowledge Management',
        background: 'Academic leader in development studies and humanitarian policy',
      },
    ],
  },
  ar: {
    title: 'مجلس الأمناء',
    heroTitle: 'مجلس الأمناء',
    heroSubtitle: 'الحكومة والإشراف الاستراتيجي على عمليات الهيئة',
    boardMembers: [
      {
        name: 'سعادة الدكتور عبدالله الحشاش',
        role: 'الرئيس',
        portfolio: 'الاتجاه الاستراتيجي وحكومة المجلس',
        background: 'دبلوماسي سابق بخبرة إنسانية دولية تزيد عن 35 سنة وعلاقات حكومية',
      },
      {
        name: 'الدكتور فواز الزبن',
        role: 'نائب الرئيس',
        portfolio: 'المالية والإشراف على التدقيق',
        background: 'خبير مالي رائد ورئيس مالي سابق لمنظمات إنسانية إقليمية',
      },
      {
        name: 'السيدة ليلى الخليلي',
        role: 'عضو مجلس',
        portfolio: 'البرامج وتقييم التأثير',
        background: 'مدير برامج إنسانية متخصص في الاستجابة للطوارئ وتنمية المجتمع',
      },
      {
        name: 'الدكتور أحمد المنصوري',
        role: 'عضو مجلس',
        portfolio: 'العلاقات الدولية والدعوة',
        background: 'مسؤول أممي كبير ذو خبرة في التنسيق الإنساني والسياسة',
      },
      {
        name: 'السيد طارق الرشدان',
        role: 'عضو مجلس',
        portfolio: 'الشراكات وتعبئة الموارد',
        background: 'رجل أعمال ناجح وداعم خيري للقضايا الإنسانية',
      },
      {
        name: 'أ.د. مها الخاروف',
        role: 'عضو مجلس',
        portfolio: 'البحوث وإدارة المعرفة',
        background: 'قائدة أكاديمية في دراسات التنمية وسياسة العمل الإنساني',
      },
    ],
  },
};

export default function BoardPage({ params }: { params: { locale: Locale } }) {
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
            Governance
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

      {/* Board Members */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
          }}>
            {content.boardMembers.map((member, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                transition: 'all 0.3s ease',
                textAlign: ar ? 'right' : 'left',
                borderTop: `4px solid ${royalColors.royalGold}`,
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: royalColors.deepNavy,
                  borderRadius: '50%',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: royalColors.royalGold,
                  fontWeight: 'bold',
                  marginLeft: ar ? 'auto' : 0,
                }}>
                  {member.name.charAt(0)}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.deepNavy,
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.royalGold,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '4px',
                  margin: '8px 0 4px 0',
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#6b6b6b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '16px',
                  fontWeight: '600',
                }}>
                  {member.portfolio}
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.border,
                  marginBottom: '16px',
                }} />
                <p style={{
                  fontSize: '15px',
                  color: '#3d3d3d',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Info */}
      <section style={{
        backgroundColor: '#f9f7f4',
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.deepNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            Governance <span style={{ color: royalColors.royalGold }}>Framework</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
          }}>
            <div style={{ textAlign: ar ? 'right' : 'left' }}>
              <h3 style={{
                fontSize: '24px',
                fontFamily: royalTypography.serif,
                color: royalColors.deepNavy,
                marginBottom: '20px',
              }}>
                Board Responsibilities
              </h3>
              <ul style={{
                fontSize: '16px',
                color: '#3d3d3d',
                lineHeight: '1.8',
                paddingLeft: ar ? 0 : '24px',
                paddingRight: ar ? '24px' : 0,
              }}>
                <li>Strategic planning and organizational direction</li>
                <li>Fiduciary and financial oversight</li>
                <li>Policy development and approval</li>
                <li>Performance evaluation and accountability</li>
                <li>Risk management and compliance</li>
                <li>Resource mobilization and partnerships</li>
              </ul>
            </div>

            <div style={{ textAlign: ar ? 'right' : 'left' }}>
              <h3 style={{
                fontSize: '24px',
                fontFamily: royalTypography.serif,
                color: royalColors.deepNavy,
                marginBottom: '20px',
              }}>
                Board Operations
              </h3>
              <ul style={{
                fontSize: '16px',
                color: '#3d3d3d',
                lineHeight: '1.8',
                paddingLeft: ar ? 0 : '24px',
                paddingRight: ar ? '24px' : 0,
              }}>
                <li>Regular board meetings (quarterly minimum)</li>
                <li>Board committees (Finance, Programs, Governance)</li>
                <li>Annual strategic retreats and planning sessions</li>
                <li>Board member professional development</li>
                <li>Transparent reporting and accountability</li>
                <li>Independent audit and evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
