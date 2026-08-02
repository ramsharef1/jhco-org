'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useEffect } from 'react';

const aboutContent = {
  en: {
    // Hero Section
    hero: {
      title: 'About the Jordan Hashemite Charity Organization',
      subtitle: 'Serving Humanity with Dignity Since 1990',
      overlay: 'Empowering lives, transforming communities, building hope',
    },

    // Mission Section
    mission: {
      title: 'Our Mission',
      statement: 'Serving Humanity with Dignity',
      description: 'The Jordan Hashemite Charity Organization (JHCO) is a prestigious humanitarian organization dedicated to providing comprehensive humanitarian aid and sustainable development support to vulnerable populations across more than 30 countries, under the patronage of the Hashemite Kingdom of Jordan.',
    },

    // Story/Timeline Section
    story: {
      title: 'Our Story',
      timeline: [
        { year: 1990, icon: '🌱', title: 'Founded', description: 'JHCO established under Royal Patronage with a vision to serve humanity' },
        { year: 1995, icon: '🤝', title: 'Global Reach', description: 'Expanded operations to Middle East and North Africa' },
        { year: 2000, icon: '🏥', title: 'Healthcare Programs', description: 'Launched comprehensive health and medical initiatives' },
        { year: 2008, icon: '📚', title: 'Education Focus', description: 'Established educational scholarships and learning centers' },
        { year: 2015, icon: '🚨', title: 'Crisis Response', description: 'Major humanitarian response to regional emergencies' },
        { year: 2024, icon: '⭐', title: 'Global Impact', description: 'Serving 75,000+ families across 30+ countries with 2,500+ dedicated volunteers' },
      ],
    },

    // Impact Stats Section
    impact: {
      title: 'Our Impact at a Glance',
      stats: [
        { number: 30, suffix: '+', label: 'Countries Served', color: royalColors.charityRed },
        { number: 75000, suffix: '+', label: 'Families Impacted', color: royalColors.compassionTeal },
        { number: 2500, suffix: '+', label: 'Dedicated Volunteers', color: royalColors.hashemiteGold },
        { number: 50, suffix: 'M+', label: 'Aid Delivered', color: royalColors.impactGreen },
      ],
    },

    // Values Section
    values: {
      title: 'Our Core Values',
      description: 'The principles that guide everything we do',
      items: [
        {
          icon: '❤️',
          title: 'Compassion',
          description: 'We approach every situation with empathy and genuine care for human dignity',
          color: royalColors.charityRed,
        },
        {
          icon: '⭐',
          title: 'Excellence',
          description: 'We strive for the highest standards in all our humanitarian work',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '🤝',
          title: 'Integrity',
          description: 'We operate with transparency and honesty in all our endeavors',
          color: royalColors.impactGreen,
        },
        {
          icon: '🌍',
          title: 'Inclusivity',
          description: 'We serve all people regardless of nationality, ethnicity, or belief',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🛡️',
          title: 'Accountability',
          description: 'We are answerable to those we serve and stakeholders we work with',
          color: royalColors.skyBlue,
        },
      ],
    },

    // Team Section
    team: {
      title: 'Meet Our Team',
      description: 'Exceptional people united by a shared passion for humanitarian impact',
      leadership: [
        {
          name: 'Dr. Ahmed Al-Hashemi',
          role: 'Executive Director',
          bio: 'Visionary leader with 25+ years of humanitarian experience',
          image: '👨‍💼',
        },
        {
          name: 'Fatima Al-Mansouri',
          role: 'Deputy Director',
          bio: 'Strategic thinker driving program innovation and expansion',
          image: '👩‍💼',
        },
        {
          name: 'Mohammed Al-Rashid',
          role: 'Operations Director',
          bio: 'Expert in coordinating large-scale humanitarian initiatives',
          image: '👨‍💼',
        },
        {
          name: 'Dr. Layla Al-Noor',
          role: 'Head of Programs',
          bio: 'Passionate about sustainable development and community empowerment',
          image: '👩‍⚕️',
        },
      ],
    },

    // Programs Section
    programs: {
      title: 'Our Programs',
      description: 'Comprehensive humanitarian support across multiple areas',
      items: [
        { icon: '🚨', name: 'Crisis Response', color: royalColors.charityRed, desc: 'Emergency humanitarian aid' },
        { icon: '🏥', name: 'Healthcare', color: royalColors.compassionTeal, desc: 'Medical services & health initiatives' },
        { icon: '📚', name: 'Education', color: royalColors.hashemiteGold, desc: 'Learning opportunities for all' },
        { icon: '🍽️', name: 'Food Security', color: royalColors.impactGreen, desc: 'Nutrition & livelihoods support' },
        { icon: '🏠', name: 'Shelter & Housing', color: royalColors.skyBlue, desc: 'Safe housing solutions' },
        { icon: '👩‍💼', name: 'Women Empowerment', color: royalColors.charityRed, desc: 'Economic & social empowerment' },
      ],
    },

    // Partners Section
    partners: {
      title: 'Our Partners',
      description: 'Working alongside trusted international organizations',
      note: 'Partnerships with UN agencies, governments, and NGOs worldwide',
    },

    // Commitment Section
    commitment: {
      title: 'Our Commitment to You',
      description: 'We uphold the highest standards in everything we do',
      items: [
        {
          icon: '👁️',
          title: 'Transparent',
          description: 'Clear, honest reporting on how we work and where resources go',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🎯',
          title: 'Professional',
          description: 'Established expertise, certified staff, and proven methodologies',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '👑',
          title: 'Royal Heritage',
          description: 'Operating under prestigious royal patronage since 1990',
          color: royalColors.darkNavy,
        },
        {
          icon: '❤️',
          title: 'People-First',
          description: 'Human dignity and community voice at the center of all decisions',
          color: royalColors.charityRed,
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Join Our Mission',
      subtitle: 'Be part of a global movement for human dignity',
      buttons: [
        { label: 'Donate Now', href: '/donate', icon: '💝' },
        { label: 'Volunteer', href: '/volunteer', icon: '🤝' },
        { label: 'Learn More', href: '/contact', icon: 'ℹ️' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'عن الهيئة الخيرية الأردنية الهاشمية',
      subtitle: 'نخدم الإنسانية بكرامة منذ عام 1990',
      overlay: 'تمكين الحياة، تحويل المجتمعات، بناء الأمل',
    },

    // Mission Section
    mission: {
      title: 'مهمتنا',
      statement: 'خدمة الإنسانية بكرامة',
      description: 'الهيئة الخيرية الأردنية الهاشمية هي منظمة إنسانية مرموقة مكرسة لتقديم المساعدات الإنسانية الشاملة والدعم التنموي المستدام للفئات الضعيفة في أكثر من 30 دولة، تحت رعاية المملكة الأردنية الهاشمية.',
    },

    // Story/Timeline Section
    story: {
      title: 'قصتنا',
      timeline: [
        { year: 1990, icon: '🌱', title: 'التأسيس', description: 'تأسيس الهيئة تحت الرعاية الملكية برؤية خدمة الإنسانية' },
        { year: 1995, icon: '🤝', title: 'التوسع العالمي', description: 'توسيع العمليات إلى الشرق الأوسط وشمال أفريقيا' },
        { year: 2000, icon: '🏥', title: 'برامج الصحة', description: 'إطلاق المبادرات الصحية والطبية الشاملة' },
        { year: 2008, icon: '📚', title: 'التركيز على التعليم', description: 'إنشاء منح دراسية ومراكز تعليمية' },
        { year: 2015, icon: '🚨', title: 'الاستجابة للأزمات', description: 'استجابة إنسانية كبرى للطوارئ الإقليمية' },
        { year: 2024, icon: '⭐', title: 'التأثير العالمي', description: 'خدمة أكثر من 75,000 عائلة في 30+ دول مع 2,500+ متطوع مكرس' },
      ],
    },

    // Impact Stats Section
    impact: {
      title: 'تأثيرنا في لمحة سريعة',
      stats: [
        { number: 30, suffix: '+', label: 'الدول المخدومة', color: royalColors.charityRed },
        { number: 75000, suffix: '+', label: 'العائلات المستفيدة', color: royalColors.compassionTeal },
        { number: 2500, suffix: '+', label: 'المتطوعون المكرسون', color: royalColors.hashemiteGold },
        { number: 50, suffix: 'M+', label: 'المساعدات المقدمة', color: royalColors.impactGreen },
      ],
    },

    // Values Section
    values: {
      title: 'قيمنا الأساسية',
      description: 'المبادئ التي توجه كل عملنا',
      items: [
        {
          icon: '❤️',
          title: 'الرحمة',
          description: 'نتعامل مع كل موقف برحمة وعناية حقيقية لكرامة الإنسان',
          color: royalColors.charityRed,
        },
        {
          icon: '⭐',
          title: 'التميز',
          description: 'نسعى لأعلى معايير الجودة في كل عملنا الإنساني',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '🤝',
          title: 'النزاهة',
          description: 'نعمل بشفافية وصدق في كل جهودنا',
          color: royalColors.impactGreen,
        },
        {
          icon: '🌍',
          title: 'الشمولية',
          description: 'نخدم جميع الناس بغض النظر عن الجنسية أو العرق أو المعتقد',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🛡️',
          title: 'المساءلة',
          description: 'نحن مسؤولون أمام الأشخاص الذين نخدمهم والشركاء الذين نعمل معهم',
          color: royalColors.skyBlue,
        },
      ],
    },

    // Team Section
    team: {
      title: 'تعرف على فريقنا',
      description: 'أشخاص استثنائيون موحدون برغبة مشتركة في التأثير الإنساني',
      leadership: [
        {
          name: 'د. أحمد الهاشمي',
          role: 'المدير التنفيذي',
          bio: 'قائد رؤيوي بخبرة 25+ سنة في العمل الإنساني',
          image: '👨‍💼',
        },
        {
          name: 'فاطمة المنصوري',
          role: 'نائبة المدير',
          bio: 'مفكرة استراتيجية تقود الابتكار والتوسع البرامجي',
          image: '👩‍💼',
        },
        {
          name: 'محمد الراشد',
          role: 'مدير العمليات',
          bio: 'خبير في تنسيق المبادرات الإنسانية على نطاق واسع',
          image: '👨‍💼',
        },
        {
          name: 'د. ليلى النور',
          role: 'مديرة البرامج',
          bio: 'شغوفة بالتنمية المستدامة وتمكين المجتمعات',
          image: '👩‍⚕️',
        },
      ],
    },

    // Programs Section
    programs: {
      title: 'برامجنا',
      description: 'دعم إنساني شامل في عدة مجالات',
      items: [
        { icon: '🚨', name: 'الاستجابة للأزمات', color: royalColors.charityRed, desc: 'المساعدات الإنسانية الطارئة' },
        { icon: '🏥', name: 'الصحة', color: royalColors.compassionTeal, desc: 'الخدمات الطبية والمبادرات الصحية' },
        { icon: '📚', name: 'التعليم', color: royalColors.hashemiteGold, desc: 'فرص التعليم للجميع' },
        { icon: '🍽️', name: 'الأمن الغذائي', color: royalColors.impactGreen, desc: 'دعم التغذية وسبل العيش' },
        { icon: '🏠', name: 'المأوى والإسكان', color: royalColors.skyBlue, desc: 'حلول السكن الآمن' },
        { icon: '👩‍💼', name: 'تمكين النساء', color: royalColors.charityRed, desc: 'التمكين الاقتصادي والاجتماعي' },
      ],
    },

    // Partners Section
    partners: {
      title: 'شركاؤنا',
      description: 'العمل إلى جانب منظمات دولية موثوقة',
      note: 'شراكات مع وكالات الأمم المتحدة والحكومات والمنظمات غير الحكومية في جميع أنحاء العالم',
    },

    // Commitment Section
    commitment: {
      title: 'التزامنا تجاهك',
      description: 'نحن نلتزم بأعلى المعايير في كل عملنا',
      items: [
        {
          icon: '👁️',
          title: 'الشفافية',
          description: 'تقارير واضحة وصادقة عن كيفية عملنا والموارد',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🎯',
          title: 'المهنية',
          description: 'خبرة راسخة وفريق معتمد وممارسات مثبتة',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '👑',
          title: 'الإرث الملكي',
          description: 'العمل تحت الرعاية الملكية المرموقة منذ 1990',
          color: royalColors.darkNavy,
        },
        {
          icon: '❤️',
          title: 'التركيز على الإنسان',
          description: 'كرامة الإنسان وصوت المجتمع في قلب كل القرارات',
          color: royalColors.charityRed,
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'انضم إلى مهمتنا',
      subtitle: 'كن جزءاً من حركة عالمية لكرامة الإنسان',
      buttons: [
        { label: 'تبرع الآن', href: '/donate', icon: '💝' },
        { label: 'تطوع معنا', href: '/volunteer', icon: '🤝' },
        { label: 'اتصل بنا', href: '/contact', icon: 'ℹ️' },
      ],
    },
  },
};

// Animated Counter Component
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = aboutContent[locale] || aboutContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 50%, ${royalColors.hashemiteGold} 100%)`,
        backgroundSize: '400% 400%',
        color: 'white',
        padding: '120px 32px',
        textAlign: textAlign as any,
        direction,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Team Photo Placeholder */}
        <div style={{
          position: 'absolute',
          right: ar ? '32px' : 'auto',
          left: ar ? 'auto' : '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '120px',
          opacity: 0.15,
          display: 'none',
        }}>
          👥
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            👑 {ar ? 'الرعاية الملكية' : 'ROYAL PATRONAGE'}
          </p>
          <h1 style={{
            fontSize: '52px',
            fontFamily: 'Garamond, serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            maxWidth: '800px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.hero.title}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0 0 12px 0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.hero.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontStyle: 'italic',
            margin: '0',
          }}>
            "{content.hero.overlay}"
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '100px 32px',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 16px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.mission.title}
          </h2>
          <h3 style={{
            fontSize: '32px',
            color: royalColors.charityRed,
            margin: '0 0 24px 0',
            fontWeight: '700',
            fontFamily: 'Garamond, serif',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.mission.statement}
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: royalColors.textOfficial,
            maxWidth: '800px',
            margin: '0',
          }}>
            {content.mission.description}
          </p>
        </div>
      </section>

      {/* 3. OUR STORY - TIMELINE */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 60px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.story.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.story.timeline.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: royalColors.bgRefined,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `2px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `2px solid ${royalColors.hashemiteGold}` : 'none',
                textAlign: textAlign as any,
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '8px',
                }}>
                  {item.year}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT AT A GLANCE */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 100%)`,
        color: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 60px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'white',
          }}>
            {content.impact.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}>
            {content.impact.stats.map((stat, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: `rgba(255, 255, 255, 0.1)`,
                borderRadius: '0px',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${stat.color}`,
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '44px',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '8px',
                }}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div style={{
                  fontSize: '16px',
                  opacity: 0.95,
                  lineHeight: '1.6',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.values.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.values.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {content.values.items.map((value, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${value.color}08`,
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {value.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: value.color,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {value.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR TEAM */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.team.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.team.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}>
            {content.team.leadership.map((member, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: shadows.md,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '60px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {member.image}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 4px 0',
                  fontWeight: '600',
                }}>
                  {member.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.hashemiteGold,
                  margin: '0 0 12px 0',
                  fontWeight: '600',
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROGRAMS */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.programs.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.programs.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {content.programs.items.map((program, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: `${program.color}08`,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `2px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `2px solid ${royalColors.hashemiteGold}` : 'none',
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {program.icon}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: program.color,
                  margin: '0 0 6px 0',
                  fontWeight: '600',
                }}>
                  {program.name}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0',
                }}>
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR PARTNERS */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.partners.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 12px 0',
            maxWidth: '600px',
          }}>
            {content.partners.description}
          </p>
          <p style={{
            fontSize: '14px',
            color: royalColors.textSecondary,
            fontStyle: 'italic',
            margin: '0 0 48px 0',
          }}>
            {content.partners.note}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '24px',
            opacity: 0.7,
          }}>
            {[...Array(8)].map((_, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: 'center',
                fontSize: '32px',
              }}>
                🤝
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR COMMITMENT */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.commitment.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.commitment.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {content.commitment.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${item.color}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: item.color,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL-TO-ACTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepPurple} 100%)`,
        color: 'white',
        textAlign: 'center',
        direction,
        borderTop: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'white',
          }}>
            {content.cta.title}
          </h2>
          <p style={{
            fontSize: '18px',
            margin: '0 0 48px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
          }}>
            {content.cta.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {content.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={`/${locale}${button.href}`}
                style={{
                  padding: '16px 32px',
                  background: 'white',
                  color: royalColors.darkNavy,
                  textDecoration: 'none',
                  borderRadius: '0px',
                  fontWeight: '700',
                  transition: 'all 0.3s',
                  display: 'inline-block',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = shadows.lg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
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
