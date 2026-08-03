'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, transitions } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    hero: {
      title: 'Royal Patronage',
      subtitle: 'Under the Auspices of His Majesty',
      description: 'The Jordan Hashemite Charity Organization operates under the distinguished patronage of the Hashemite Kingdom of Jordan, embodying values of dignity, justice, and humanitarian excellence.',
    },
    sections: {
      heritage: {
        title: 'Royal Heritage',
        description: 'Our organization is deeply rooted in the values and vision of the Hashemite Kingdom. We carry forward the legacy of compassion and service that defines our nation\'s commitment to humanity.',
      },
      mission: {
        title: 'Royal Mission',
        description: 'Under royal guidance, we serve vulnerable populations across 30+ countries with unwavering dedication to human dignity and sustainable development.',
      },
      values: {
        title: 'Royal Values',
        items: [
          { icon: '👑', title: 'Dignity', desc: 'Treating every person with respect and honor' },
          { icon: '🤝', title: 'Compassion', desc: 'Acting with genuine care for those in need' },
          { icon: '⚖️', title: 'Justice', desc: 'Ensuring fair and equitable support' },
          { icon: '🌟', title: 'Excellence', desc: 'Pursuing the highest standards in service' },
        ],
      },
    },
    links: [
      { label: 'Royal Message', href: '/royal-patronage/message' },
      { label: 'Royal Support', href: '/royal-patronage/support' },
      { label: 'Royal Partners', href: '/royal-patronage/partners' },
      { label: 'Royal Initiatives', href: '/royal-patronage/initiatives' },
    ],
  },
  ar: {
    hero: {
      title: 'الرعاية الملكية',
      subtitle: 'تحت رعاية جلالة الملك',
      description: 'تعمل الهيئة الخيرية الأردنية الهاشمية تحت الرعاية السامية للمملكة الأردنية الهاشمية، حاملة قيم الكرامة والعدالة والتميز الإنساني.',
    },
    sections: {
      heritage: {
        title: 'الإرث الملكي',
        description: 'تتجذر منظمتنا في القيم والرؤية الهاشمية. نحمل إرث الرحمة والخدمة الذي يحدد التزام أمتنا تجاه الإنسانية.',
      },
      mission: {
        title: 'الرسالة الملكية',
        description: 'تحت التوجيه الملكي، نخدم السكان الضعفاء عبر 30+ دولة بتفانٍ لا يتزعزع لكرامة الإنسان والتنمية المستدامة.',
      },
      values: {
        title: 'القيم الملكية',
        items: [
          { icon: '👑', title: 'الكرامة', desc: 'معاملة كل شخص باحترام وتقدير' },
          { icon: '🤝', title: 'الرحمة', desc: 'التصرف برعاية حقيقية لمن هم في حاجة' },
          { icon: '⚖️', title: 'العدالة', desc: 'ضمان الدعم العادل والمتساوي' },
          { icon: '🌟', title: 'التميز', desc: 'السعي لأعلى معايير الخدمة' },
        ],
      },
    },
    links: [
      { label: 'الرسالة الملكية', href: '/royal-patronage/message' },
      { label: 'الدعم الملكي', href: '/royal-patronage/support' },
      { label: 'الشركاء الملكيون', href: '/royal-patronage/partners' },
      { label: 'المبادرات الملكية', href: '/royal-patronage/initiatives' },
    ],
  },
};

export default function RoyalPatronagePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
        color: 'white',
        padding: '120px 32px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            marginBottom: '16px',
          }}>
            👑 Royal Heritage
          </p>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 'bold',
            marginBottom: '16px',
            fontFamily: 'serif',
          }}>
            {text.hero.title}
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '24px',
            opacity: 0.9,
          }}>
            {text.hero.subtitle}
          </p>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.85,
            lineHeight: '1.6',
          }}>
            {text.hero.description}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '80px',
        }}>
          {/* Heritage */}
          <div style={{
            padding: '40px',
            backgroundColor: royalColors.bgRefined,
            borderRadius: '8px',
            borderLeft: `4px solid ${royalColors.hashemiteGold}`,
          }}>
            <h2 style={{
              fontSize: '28px',
              color: royalColors.darkNavy,
              marginBottom: '16px',
              fontFamily: 'serif',
            }}>
              {text.sections.heritage.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textOfficial,
              lineHeight: '1.8',
            }}>
              {text.sections.heritage.description}
            </p>
          </div>

          {/* Mission */}
          <div style={{
            padding: '40px',
            backgroundColor: royalColors.bgRefined,
            borderRadius: '8px',
            borderLeft: `4px solid ${royalColors.charityRed}`,
          }}>
            <h2 style={{
              fontSize: '28px',
              color: royalColors.darkNavy,
              marginBottom: '16px',
              fontFamily: 'serif',
            }}>
              {text.sections.mission.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textOfficial,
              lineHeight: '1.8',
            }}>
              {text.sections.mission.description}
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '40px',
            color: royalColors.darkNavy,
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: 'serif',
          }}>
            {text.sections.values.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {text.sections.values.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: `1px solid ${royalColors.bgRefined}`,
                textAlign: 'center',
                transition: transitions.base,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div style={{
          padding: '40px',
          backgroundColor: `${royalColors.hashemiteGold}10`,
          borderRadius: '8px',
          borderLeft: `4px solid ${royalColors.hashemiteGold}`,
        }}>
          <h3 style={{
            fontSize: '24px',
            color: royalColors.darkNavy,
            marginBottom: '24px',
            fontFamily: 'serif',
          }}>
            Explore More
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
          }}>
            {text.links.map((link, idx) => (
              <Link key={idx} href={link.href} style={{
                padding: '12px 16px',
                backgroundColor: royalColors.hashemiteGold,
                color: royalColors.darkNavy,
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                textAlign: 'center',
                transition: transitions.base,
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.darkNavy;
                e.currentTarget.style.color = royalColors.hashemiteGold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
                e.currentTarget.style.color = royalColors.darkNavy;
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
