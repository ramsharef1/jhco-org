'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius, royalTypography, gradients } from '@/lib/royalDesign';
import { useState } from 'react';

const royalMessageContent = {
  en: {
    // Page Meta
    title: 'Royal Messages',
    subtitle: 'Official Communications from Our Leadership',

    // Hero Section
    hero: {
      title: 'Royal Messages',
      subtitle: 'Official Communications from Our Leadership',
      overlay: 'Serving with dignity, leading with purpose',
      decorative: '👑 UNDER ROYAL PATRONAGE 👑',
    },

    // Messages Section
    messages: [
      {
        id: 1,
        speaker: 'His Royal Highness',
        role: 'Royal Patron',
        title: 'A Message of Compassion and Commitment',
        date: 'August 2024',
        content: `It is with profound honor and deep commitment that I address you today as the royal patron of the Jordan Hashemite Charity Organization. For over three decades, this esteemed institution has embodied the values of compassion, dignity, and excellence in serving humanity across our region and beyond.

The work of JHCO represents the highest ideals of the Hashemite Kingdom—a commitment to uplifting those in need and building bridges of hope across communities. Through healthcare initiatives, educational programs, and emergency relief, we have reached hundreds of thousands of souls and transformed countless lives.

As we look toward the future, I reaffirm our steadfast dedication to this noble mission. Let us continue to serve with unwavering purpose, guided by our principles of humanity and justice. Together, we build not just aid, but lasting change.

With every blessing of the Almighty,`,
        signature: 'Royal Seal',
        accent: royalColors.hashemiteGold,
      },
      {
        id: 2,
        speaker: 'Dr. Ahmed Al-Hashemi',
        role: 'Executive Director',
        title: 'Building Bridges, Transforming Lives',
        date: 'August 2024',
        content: `As Executive Director of JHCO, I am honored to share our vision for the coming years. We stand at a pivotal moment in humanitarian work—one where innovation meets tradition, and compassion meets strategy.

Our 2024 initiatives have expanded our reach to 30+ countries, serving over 75,000 families through integrated programs spanning healthcare, education, food security, and disaster response. Yet, this is just the beginning.

What sets JHCO apart is our holistic approach. We do not simply provide aid; we empower communities to build sustainable futures. Our partnerships with UN agencies, governments, and civil society organizations create multiplier effects that extend far beyond our direct interventions.

I invite you to join this transformative journey. Whether through donations, volunteer service, or partnership, your contribution matters profoundly.`,
        signature: 'Dr. Ahmed Al-Hashemi',
        accent: royalColors.deepRoyal,
      },
      {
        id: 3,
        speaker: 'Fatima Al-Mansouri',
        role: 'Deputy Director & Strategic Lead',
        title: 'Innovation in Humanitarian Response',
        date: 'July 2024',
        content: `Humanitarian work demands constant evolution. At JHCO, we leverage cutting-edge technology, research-driven methodologies, and community-centered design to maximize our impact.

Our recent innovations include:
• Digital health platforms reaching remote villages
• AI-powered needs assessment for targeted interventions
• Community feedback loops ensuring accountability
• Sustainable supply chain models for long-term aid

These tools serve one purpose: to ensure that every dollar invested, every hour volunteered, and every program launched creates measurable, lasting change in people's lives.

The future of humanitarian work is collaborative, data-driven, and deeply human. We are proud to lead this charge.`,
        signature: 'Fatima Al-Mansouri',
        accent: royalColors.royalBurgundy,
      },
      {
        id: 4,
        speaker: 'Dr. Layla Al-Noor',
        role: 'Head of Programs',
        title: 'Healthcare as a Human Right',
        date: 'June 2024',
        content: `Every human being deserves access to quality healthcare. This principle underpins all our medical initiatives worldwide.

Through mobile clinics, telemedicine networks, and capacity-building programs, we have:
• Conducted 250,000+ medical consultations
• Trained 5,000+ local health workers
• Established 15 permanent health centers
• Responded to 8 major health emergencies

Yet healthcare is only the beginning. True wellness requires education, nutrition, mental health support, and community empowerment. Our integrated programs address these holistically.

I am inspired daily by the resilience of the communities we serve and the dedication of our staff. Together, we are building a healthier, more equitable world.`,
        signature: 'Dr. Layla Al-Noor',
        accent: royalColors.compassionTeal,
      },
    ],

    // Impact Section
    impact: {
      title: 'Our Global Impact',
      description: 'Measurable change across communities we serve',
      stats: [
        { number: 30, suffix: '+', label: 'Countries', color: royalColors.hashemiteGold },
        { number: 75000, suffix: '+', label: 'Families Served', color: royalColors.charityRed },
        { number: 2500, suffix: '+', label: 'Volunteers', color: royalColors.impactGreen },
        { number: 250, suffix: 'K+', label: 'Lives Touched', color: royalColors.skyBlue },
      ],
    },

    // CTA Section
    cta: {
      title: 'Join the Royal Mission',
      subtitle: 'Be part of our commitment to humanity',
      buttons: [
        { label: 'Donate Now', href: '/donate', icon: '💝' },
        { label: 'Volunteer With Us', href: '/volunteer', icon: '🤝' },
        { label: 'Partner With JHCO', href: '/contact', icon: '🌍' },
      ],
    },
  },

  ar: {
    // Page Meta
    title: 'الرسائل الملكية',
    subtitle: 'التواصلات الرسمية من قيادتنا',

    // Hero Section
    hero: {
      title: 'الرسائل الملكية',
      subtitle: 'التواصلات الرسمية من قيادتنا',
      overlay: 'نخدم بكرامة، نقود بهدف',
      decorative: '👑 تحت الرعاية الملكية 👑',
    },

    // Messages Section
    messages: [
      {
        id: 1,
        speaker: 'صاحب السمو الملكي',
        role: 'الراعي الملكي',
        title: 'رسالة الرحمة والالتزام',
        date: 'أغسطس 2024',
        content: `يشرفني أن أتحدث إليكم اليوم كراعٍ ملكي للهيئة الخيرية الأردنية الهاشمية. لأكثر من ثلاثة عقود، جسدت هذه المؤسسة الموقرة قيم الرحمة والكرامة والتميز في خدمة الإنسانية عبر منطقتنا والعالم.

يمثل عمل الهيئة أسمى مثل المملكة الأردنية الهاشمية - التزام برفع مستوى من هم في حاجة وبناء جسور الأمل بين المجتمعات. من خلال المبادرات الصحية والبرامج التعليمية والإغاثة الطارئة، وصلنا إلى مئات الآلاف من الأرواح وحولنا حياة لا تُحصى.

وبينما نتطلع إلى المستقبل، أؤكد التزامنا الثابت برسالتنا السامية. فلننصب جهودنا بغرض ثابت، مسترشدين بمبادئ الإنسانية والعدل. معاً، نبني ليس مجرد مساعدة، بل تغييراً دائماً.`,
        signature: 'الختم الملكي',
        accent: royalColors.hashemiteGold,
      },
      {
        id: 2,
        speaker: 'د. أحمد الهاشمي',
        role: 'المدير التنفيذي',
        title: 'بناء الجسور، تحويل الحياة',
        date: 'أغسطس 2024',
        content: `يشرفني أن أشاركم رؤيتنا للسنوات القادمة كمدير تنفيذي للهيئة. نحن نقف في لحظة محورية من العمل الإنساني - حيث يلتقي الابتكار بالتقاليد، والرحمة بالاستراتيجية.

توسعت مبادراتنا عام 2024 لتصل إلى أكثر من 30 دولة، خادمة أكثر من 75 ألف عائلة من خلال برامج متكاملة تشمل الصحة والتعليم والأمن الغذائي والاستجابة للكوارث.

ما يميز الهيئة هو نهجنا الشامل. لا نقدم المساعدة فحسب؛ نمكّن المجتمعات من بناء مستقبل مستدام. تمكننا شراكاتنا مع وكالات الأمم المتحدة والحكومات والمنظمات الأهلية من خلق تأثيرات مضاعفة تتجاوز تدخلاتنا المباشرة.`,
        signature: 'د. أحمد الهاشمي',
        accent: royalColors.deepRoyal,
      },
    ],

    // Impact Section
    impact: {
      title: 'تأثيرنا العالمي',
      description: 'تغيير قابل للقياس عبر المجتمعات التي نخدمها',
      stats: [
        { number: 30, suffix: '+', label: 'دول', color: royalColors.hashemiteGold },
        { number: 75000, suffix: '+', label: 'عائلة خدمة', color: royalColors.charityRed },
        { number: 2500, suffix: '+', label: 'متطوع', color: royalColors.impactGreen },
        { number: 250, suffix: 'K+', label: 'حياة تأثرت', color: royalColors.skyBlue },
      ],
    },

    // CTA Section
    cta: {
      title: 'انضم إلى الرسالة الملكية',
      subtitle: 'كن جزءاً من التزامنا تجاه الإنسانية',
      buttons: [
        { label: 'تبرع الآن', href: '/donate', icon: '💝' },
        { label: 'تطوع معنا', href: '/volunteer', icon: '🤝' },
        { label: 'شارك معنا', href: '/contact', icon: '🌍' },
      ],
    },
  },
};

export default function RoyalMessagePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const content = royalMessageContent[locale];
  const [selectedMessage, setSelectedMessage] = useState(0);

  return (
    <main className="min-h-screen bg-white" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: gradients.royalGold,
          position: 'relative',
        }}
      >
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${royalColors.hashemiteGold} 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, ${royalColors.deepRoyal} 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="mb-6 text-2xl tracking-widest font-serif"
            style={{ color: royalColors.ivoryBg, letterSpacing: '3px' }}
          >
            {content.hero.decorative}
          </div>

          <h1
            className="mb-6 leading-tight"
            style={{
              fontSize: royalTypography.sizes.h1,
              fontFamily: royalTypography.serif,
              color: royalColors.ivoryBg,
              fontWeight: 700,
              letterSpacing: royalTypography.letterSpacing.widest,
              textTransform: 'uppercase',
            }}
          >
            {content.hero.title}
          </h1>

          <p
            className="mb-8 text-2xl"
            style={{
              color: royalColors.paleGold,
              fontFamily: royalTypography.serif,
            }}
          >
            {content.hero.subtitle}
          </p>

          <p
            className="text-lg"
            style={{
              color: royalColors.ivoryBg,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: royalTypography.lineHeights.relaxed,
            }}
          >
            {content.hero.overlay}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div
            className="animate-bounce"
            style={{
              width: '32px',
              height: '32px',
              border: `2px solid ${royalColors.ivoryBg}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: royalColors.ivoryBg,
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </section>

      {/* Messages Navigation Tabs */}
      <section
        className="py-8 sticky top-0 z-40 border-b"
        style={{
          backgroundColor: royalColors.ivoryBg,
          borderColor: royalColors.borderFormal,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {content.messages.map((message, index) => (
              <button
                key={message.id}
                onClick={() => setSelectedMessage(index)}
                className="px-6 py-3 whitespace-nowrap transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor:
                    selectedMessage === index
                      ? message.accent
                      : 'transparent',
                  color:
                    selectedMessage === index
                      ? royalColors.ivoryBg
                      : royalColors.textOfficial,
                  border: `2px solid ${message.accent}`,
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                }}
              >
                {message.speaker}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Message Display */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Message Card */}
          <div
            className="rounded-lg overflow-hidden transition-all duration-500"
            style={{
              backgroundColor: royalColors.ivoryBg,
              border: `3px solid ${content.messages[selectedMessage].accent}`,
              boxShadow: shadows.royal,
            }}
          >
            {/* Header with accent bar */}
            <div
              className="h-2"
              style={{ backgroundColor: content.messages[selectedMessage].accent }}
            />

            <div className="p-12">
              {/* Crown decoration */}
              <div className="text-center mb-8 text-4xl">👑</div>

              {/* Speaker info */}
              <div className="text-center mb-8">
                <h2
                  className="mb-2"
                  style={{
                    fontSize: royalTypography.sizes.h3,
                    fontFamily: royalTypography.serif,
                    color: royalColors.textOfficial,
                    fontWeight: 700,
                    letterSpacing: royalTypography.letterSpacing.widest,
                    textTransform: 'uppercase',
                  }}
                >
                  {content.messages[selectedMessage].speaker}
                </h2>
                <p
                  style={{
                    fontSize: royalTypography.sizes.h5,
                    color: content.messages[selectedMessage].accent,
                    fontWeight: 600,
                    letterSpacing: royalTypography.letterSpacing.wide,
                    textTransform: 'uppercase',
                  }}
                >
                  {content.messages[selectedMessage].role}
                </p>
              </div>

              {/* Message Title */}
              <h3
                className="text-center mb-4"
                style={{
                  fontSize: royalTypography.sizes.h2,
                  fontFamily: royalTypography.serif,
                  color: content.messages[selectedMessage].accent,
                  fontWeight: 600,
                  lineHeight: royalTypography.lineHeights.tight,
                }}
              >
                {content.messages[selectedMessage].title}
              </h3>

              {/* Date */}
              <p
                className="text-center mb-8"
                style={{
                  fontSize: royalTypography.sizes.small,
                  color: royalColors.textSecondary,
                  letterSpacing: royalTypography.letterSpacing.wide,
                  textTransform: 'uppercase',
                }}
              >
                {content.messages[selectedMessage].date}
              </p>

              {/* Divider */}
              <div
                className="h-1 w-24 mx-auto mb-8"
                style={{
                  background: gradients.royalGold,
                  borderRadius: '2px',
                }}
              />

              {/* Message Content */}
              <div
                className="prose prose-lg max-w-none mb-8"
                style={{
                  color: royalColors.textOfficial,
                  fontFamily: royalTypography.sansSerif,
                }}
              >
                {content.messages[selectedMessage].content.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-6"
                    style={{
                      fontSize: royalTypography.sizes.body,
                      lineHeight: royalTypography.lineHeights.normal,
                      color: royalColors.textOfficial,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="text-center pt-8 border-t" style={{ borderColor: royalColors.borderSubtle }}>
                <p
                  className="italic"
                  style={{
                    fontSize: royalTypography.sizes.h4,
                    color: royalColors.textOfficial,
                    fontFamily: royalTypography.serif,
                    fontWeight: 400,
                  }}
                >
                  {content.messages[selectedMessage].signature}
                </p>
              </div>
            </div>
          </div>

          {/* Message Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() =>
                setSelectedMessage(
                  (prev) =>
                    (prev - 1 + content.messages.length) % content.messages.length
                )
              }
              className="px-6 py-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: royalColors.deepRoyal,
                color: royalColors.ivoryBg,
                fontWeight: 600,
              }}
            >
              ← {locale === 'ar' ? 'التالية' : 'Previous'}
            </button>

            <div
              style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
              }}
            >
              {selectedMessage + 1} / {content.messages.length}
            </div>

            <button
              onClick={() =>
                setSelectedMessage((prev) => (prev + 1) % content.messages.length)
              }
              className="px-6 py-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: royalColors.deepRoyal,
                color: royalColors.ivoryBg,
                fontWeight: 600,
              }}
            >
              {locale === 'ar' ? 'السابقة' : 'Next'} →
            </button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section
        className="py-20"
        style={{
          background: gradients.royalPrimary,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: royalTypography.sizes.h2,
                fontFamily: royalTypography.serif,
                color: royalColors.hashemiteGold,
                fontWeight: 700,
                letterSpacing: royalTypography.letterSpacing.widest,
                textTransform: 'uppercase',
              }}
            >
              {content.impact.title}
            </h2>
            <p
              style={{
                fontSize: royalTypography.sizes.h4,
                color: royalColors.ivoryBg,
              }}
            >
              {content.impact.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.impact.stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center"
                style={{
                  padding: '32px',
                  backgroundColor: royalColors.ivoryBg,
                  borderRadius: borderRadius.lg,
                  boxShadow: shadows.royal,
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: stat.color,
                    fontFamily: royalTypography.serif,
                  }}
                >
                  {stat.number}
                  <span
                    style={{
                      fontSize: '32px',
                    }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: royalTypography.sizes.small,
                    color: royalColors.textSecondary,
                    fontWeight: 600,
                    letterSpacing: royalTypography.letterSpacing.wide,
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: royalTypography.sizes.h2,
              fontFamily: royalTypography.serif,
              color: royalColors.deepRoyal,
              fontWeight: 700,
              letterSpacing: royalTypography.letterSpacing.widest,
              textTransform: 'uppercase',
            }}
          >
            {content.cta.title}
          </h2>
          <p
            className="mb-12 text-xl"
            style={{
              color: royalColors.textSecondary,
            }}
          >
            {content.cta.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
            {content.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={`/${locale}${button.href}`}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105 active:scale-95"
                style={{
                  backgroundColor:
                    idx === 0 ? royalColors.deepRoyal : royalColors.hashemiteGold,
                  color:
                    idx === 0 ? royalColors.hashemiteGold : royalColors.textOfficial,
                  border: `2px solid ${
                    idx === 0 ? royalColors.deepRoyal : royalColors.hashemiteGold
                  }`,
                  boxShadow: shadows.royal,
                }}
              >
                {button.icon} {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
