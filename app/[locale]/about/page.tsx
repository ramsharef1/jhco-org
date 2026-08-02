'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

const aboutSections = {
  en: {
    title: 'About JHCO',
    heroTitle: 'About the Jordan Hashemite Charity Organization',
    heroSubtitle: 'Serving Humanity with Dignity Since 1990',
    sections: [
      {
        title: 'Our Organization',
        description: 'The Jordan Hashemite Charity Organization (JHCO) is a prestigious humanitarian organization established in 1990 under the patronage of the Hashemite Kingdom of Jordan. For over three decades, JHCO has been dedicated to providing humanitarian aid and development support to vulnerable populations across more than 30 countries.',
      },
      {
        title: 'Our Reach',
        description: 'JHCO operates across multiple continents, with active programs in Asia, Africa, Europe, and the Americas. Our work spans emergency response, healthcare, education, food security, livelihoods development, and community empowerment initiatives.',
      },
      {
        title: 'Our Commitment',
        description: 'Operating under royal patronage, JHCO is committed to delivering humanitarian assistance with the highest standards of professionalism, transparency, and accountability. We serve all individuals regardless of nationality, ethnicity, or religion.',
      },
    ],
    subsections: [
      { label: 'Our Mission', href: '/about/mission' },
      { label: 'Our Vision', href: '/about/vision' },
      { label: 'Our History', href: '/about/history' },
      { label: 'Our Values', href: '/about/values' },
      { label: 'Leadership Team', href: '/about/leadership' },
      { label: 'Team Members', href: '/about/team' },
      { label: 'Awards & Recognition', href: '/about/awards' },
    ],
  },
  ar: {
    title: 'عن الهيئة',
    heroTitle: 'عن الهيئة الخيرية الأردنية الهاشمية',
    heroSubtitle: 'نخدم الإنسانية بكرامة منذ عام 1990',
    sections: [
      {
        title: 'منظمتنا',
        description: 'الهيئة الخيرية الأردنية الهاشمية هي منظمة إنسانية مرموقة تأسست عام 1990 تحت رعاية المملكة الأردنية الهاشمية. لمدة أكثر من ثلاثة عقود، كانت الهيئة ملتزمة بتقديم المساعدات الإنسانية والدعم التنموي للفئات الضعيفة في أكثر من 30 دولة حول العالم.',
      },
      {
        title: 'نطاق عملنا',
        description: 'تعمل الهيئة عبر عدة قارات، مع برامج نشطة في آسيا وأفريقيا وأوروبا والأمريكتين. يشمل عملنا الاستجابة للطوارئ والرعاية الصحية والتعليم والأمن الغذائي وتنمية سبل العيش وتمكين المجتمعات.',
      },
      {
        title: 'التزامنا',
        description: 'تعمل الهيئة تحت الرعاية الملكية بالتزام قوي بتقديم المساعدات الإنسانية بأعلى معايير المهنية والشفافية والمساءلة. نخدم جميع الأفراد بغض النظر عن جنسيتهم أو عرقهم أو معتقداتهم الدينية.',
      },
    ],
    subsections: [
      { label: 'مهمتنا', href: '/about/mission' },
      { label: 'رؤيتنا', href: '/about/vision' },
      { label: 'تاريخنا', href: '/about/history' },
      { label: 'قيمنا', href: '/about/values' },
      { label: 'فريق القيادة', href: '/about/leadership' },
      { label: 'أعضاء الفريق', href: '/about/team' },
      { label: 'الجوائز والتكريمات', href: '/about/awards' },
    ],
  },
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = aboutSections[locale] || aboutSections.en;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.deepPurple})`,
        color: 'white',
        padding: ar ? '100px 32px' : '100px 32px',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.royalGold,
            margin: '0 0 16px 0',
          }}>
            {ar ? '👑 الرعاية الملكية' : '👑 ROYAL PATRONAGE'}
          </p>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            margin: '0 0 16px 0',
            maxWidth: '800px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        {content.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: 'Georgia, serif',
              color: royalColors.deepNavy,
              margin: '0 0 16px 0',
              borderBottom: `2px solid ${royalColors.royalGold}`,
              paddingBottom: '12px',
            }}>
              {section.title}
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#444',
              margin: '20px 0 0 0',
            }}>
              {section.description}
            </p>
          </div>
        ))}
      </section>

      {/* Subsections Navigation */}
      <section style={{
        background: `rgba(${royalColors.royalGold}, 0.05)`,
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Georgia, serif',
            color: royalColors.deepNavy,
            margin: '0 0 48px 0',
            textAlign: ar ? 'right' : 'left',
          }}>
            {ar ? 'معرفة المزيد' : 'Learn More'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.subsections.map((subsection, idx) => (
              <Link
                key={idx}
                href={`/${locale}${subsection.href}`}
                style={{
                  padding: '24px',
                  border: `2px solid ${royalColors.royalGold}`,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: royalColors.deepNavy,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = royalColors.royalGold;
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
                }}
              >
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}>
                  {subsection.label}
                </div>
                <div style={{
                  fontSize: '12px',
                  opacity: 0.8,
                }}>
                  {ar ? '→' : '→'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
