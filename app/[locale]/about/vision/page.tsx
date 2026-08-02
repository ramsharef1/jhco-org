'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Our Vision',
    heroTitle: 'Shaping a Compassionate Future',
    heroSubtitle: 'By 2030, JHCO envisions a world where humanitarian excellence transforms communities and empowers vulnerable populations',
    sections: [
      {
        title: 'Vision 2030',
        content: 'We envision a world where humanitarian assistance is immediate, effective, and reaches every person in need. By 2030, JHCO aims to be the leading humanitarian organization in the region, setting standards for excellence, innovation, and impact.',
      },
      {
        title: 'Strategic Direction',
        content: 'Our path forward focuses on three key pillars: expanding our geographic reach to underserved regions, deepening our impact through specialized programs addressing root causes, and strengthening local capacities to build sustainable solutions.',
      },
      {
        title: 'Global Role',
        content: 'As the official humanitarian arm of the Hashemite Kingdom of Jordan, JHCO is positioned to bridge international humanitarian efforts with grassroots community needs. We strive to be a catalyst for positive change, working with governments, NGOs, and communities to build resilience and sustainable development.',
      },
    ],
    goals: [
      {
        number: '40+',
        label: 'Countries by 2030',
        description: 'Expand operations to reach vulnerable populations in 10 additional countries',
      },
      {
        number: '500K+',
        label: 'Beneficiaries',
        description: 'Scale direct assistance to reach half a million people annually',
      },
      {
        number: '5K+',
        label: 'Humanitarian Workforce',
        description: 'Triple our volunteer and staff base for greater impact',
      },
      {
        number: '100M+',
        label: 'Annual Impact',
        description: 'Double our annual humanitarian investment to $100 million',
      },
    ],
  },
  ar: {
    title: 'رؤيتنا',
    heroTitle: 'صياغة مستقبل رحيم',
    heroSubtitle: 'بحلول عام 2030، تتصور الهيئة عالماً حيث يحول التميز الإنساني المجتمعات وينمي السكان الضعفاء',
    sections: [
      {
        title: 'رؤية 2030',
        content: 'نتصور عالماً حيث تكون المساعدات الإنسانية فورية وفعالة وتصل إلى كل شخص في حاجة. بحلول عام 2030، تهدف الهيئة إلى أن تكون المنظمة الإنسانية الرائدة في المنطقة، مما يحدد معايير التميز والابتكار والتأثير.',
      },
      {
        title: 'الاتجاه الاستراتيجي',
        content: 'يركز مسارنا للأمام على ثلاث دعائم رئيسية: توسيع نطاقنا الجغرافي للوصول إلى المناطق المحرومة، وتعميق تأثيرنا من خلال برامج متخصصة تعالج الأسباب الجذرية، وتعزيز القدرات المحلية لبناء حلول مستدامة.',
      },
      {
        title: 'الدور العالمي',
        content: 'كالذراع الإنساني الرسمي للمملكة الأردنية الهاشمية، تتمتع الهيئة بموقع متميز لربط الجهود الإنسانية الدولية باحتياجات المجتمع الشعبية. نسعى لأن نكون محفزاً للتغيير الإيجابي، والعمل مع الحكومات والمنظمات غير الحكومية والمجتمعات لبناء المرونة والتنمية المستدامة.',
      },
    ],
    goals: [
      {
        number: '40+',
        label: 'دولة بحلول 2030',
        description: 'توسيع العمليات للوصول إلى السكان الضعفاء في 10 دول إضافية',
      },
      {
        number: '500K+',
        label: 'المستفيدين',
        description: 'توسيع نطاق المساعدة المباشرة للوصول إلى نصف مليون شخص سنويًا',
      },
      {
        number: '5K+',
        label: 'القوة العاملة الإنسانية',
        description: 'ثلاثة أضعاف قوتنا من المتطوعين والموظفين لتحقيق تأثير أكبر',
      },
      {
        number: '100M+',
        label: 'التأثير السنوي',
        description: 'ضاعفة استثمارنا الإنساني السنوي إلى 100 مليون دولار',
      },
    ],
  },
};

export default function VisionPage({ params }: { params: { locale: Locale } }) {
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
            Looking Forward
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

      {/* Vision Sections */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {content.sections.map((section, idx) => (
            <div key={idx} style={{
              marginBottom: idx < content.sections.length - 1 ? '60px' : 0,
              textAlign: ar ? 'right' : 'left',
            }}>
              <h2 style={{
                fontSize: '32px',
                fontFamily: royalTypography.serif,
                color: royalColors.deepNavy,
                marginBottom: '24px',
              }}>
                {section.title}
              </h2>
              <p style={{
                fontSize: '18px',
                color: royalColors.textDark,
                lineHeight: '1.8',
                maxWidth: '900px',
              }}>
                {section.content}
              </p>
              <div style={{
                height: '1px',
                backgroundColor: royalColors.border,
                margin: '40px 0',
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* 2030 Goals */}
      <section style={{
        background: `linear-gradient(180deg, #f9f7f4, #fafaf8)`,
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.deepNavy,
              marginBottom: '24px',
            }}>
              Our 2030 <span style={{ color: royalColors.warmGold }}>Goals</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textDark,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Strategic targets to amplify our humanitarian impact and reach
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
          }}>
            {content.goals.map((goal, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                textAlign: 'center',
                borderTop: `4px solid ${royalColors.warmGold}`,
              }}>
                <p style={{
                  fontSize: '44px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.warmGold,
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: 0,
                }}>
                  {goal.number}
                </p>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: royalColors.deepNavy,
                  marginBottom: '12px',
                  marginTop: '12px',
                }}>
                  {goal.label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textDark,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
