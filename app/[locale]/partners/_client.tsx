'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useEffect } from 'react';

const partnersContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Royal Partners',
      subtitle: 'Building Global Impact Together',
      overlay: 'A network of distinguished organizations united in service to humanity',
    },

    // Partnership Overview
    overview: {
      title: 'Our Partnership Network',
      description: 'JHCO partners with leading international organizations, governments, and corporations to amplify humanitarian impact across the globe. Together, we create sustainable change and serve vulnerable populations with dignity and excellence.',
      stats: [
        { number: 150, suffix: '+', label: 'Global Partners', color: royalColors.darkNavy },
        { number: 50, suffix: '+', label: 'Countries', color: royalColors.charityRed },
        { number: 2500, suffix: '+', label: 'Partner Staff', color: royalColors.hashemiteGold },
        { number: 500, suffix: 'M+', label: 'Joint Impact', color: royalColors.impactGreen },
      ],
    },

    // Partnership Tiers
    tiers: {
      title: 'Partnership Levels',
      description: 'We welcome partnerships at multiple levels, each with distinct opportunities and commitments',
      items: [
        {
          icon: '👑',
          title: 'Royal Strategic Partners',
          description: 'Premium partnerships with shared vision for global humanitarian impact',
          benefits: [
            'Executive engagement and board representation',
            'Co-branded initiatives and programs',
            'Annual strategic summits and planning',
            'Dedicated partnership coordinator',
            'Featured prominence in all official materials',
          ],
          color: royalColors.deepRoyal,
        },
        {
          icon: '🏛️',
          title: 'Institutional Partners',
          description: 'Established organizations committed to collaborative programming',
          benefits: [
            'Joint program implementation',
            'Capacity building and knowledge exchange',
            'Semi-annual coordination meetings',
            'Marketing and visibility support',
            'Custom reporting and impact metrics',
          ],
          color: royalColors.darkNavy,
        },
        {
          icon: '🤝',
          title: 'Program Partners',
          description: 'Organizations collaborating on specific initiatives or sectors',
          benefits: [
            'Targeted program collaboration',
            'Technical expertise and support',
            'Regular program updates and reports',
            'Social media recognition',
            'Event participation opportunities',
          ],
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌍',
          title: 'Regional Partners',
          description: 'Local organizations advancing our mission in their communities',
          benefits: [
            'Community-level program delivery',
            'Local capacity strengthening',
            'Quarterly coordination meetings',
            'Partnership certificate and toolkit',
            'Access to JHCO resources and training',
          ],
          color: royalColors.impactGreen,
        },
      ],
    },

    // Featured Partners
    featured: {
      title: 'Featured Partners',
      description: 'Some of our distinguished partners advancing our shared mission',
      partners: [
        { name: 'United Nations Development Programme', category: 'International Organization', year: '2015' },
        { name: 'World Health Organization', category: 'Global Health', year: '2010' },
        { name: 'Jordanian Ministry of Health', category: 'Government Agency', year: '1990' },
        { name: 'International Committee of the Red Crescent', category: 'Humanitarian', year: '2005' },
        { name: 'World Food Programme', category: 'Food Security', year: '2012' },
        { name: 'Global Education First Initiative', category: 'Education', year: '2013' },
        { name: 'Islamic Development Bank', category: 'Development Finance', year: '2008' },
        { name: 'Arab Fund for Economic and Social Development', category: 'Regional Fund', year: '2006' },
      ],
    },

    // Why Partner With JHCO
    whyPartner: {
      title: 'Why Partner With JHCO',
      description: 'Discover the advantages of joining our global network',
      items: [
        {
          icon: '👑',
          title: 'Royal Patronage & Prestige',
          description: 'Access to a respected organization with prestigious heritage and royal patronage',
          color: royalColors.deepRoyal,
        },
        {
          icon: '🌐',
          title: 'Global Reach',
          description: 'Operations in 30+ countries with established infrastructure and local expertise',
          color: royalColors.darkNavy,
        },
        {
          icon: '📊',
          title: 'Proven Impact',
          description: 'Demonstrated track record of sustainable, measurable humanitarian outcomes',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '🎯',
          title: 'Strategic Alignment',
          description: 'Flexible partnerships aligned with your organization\'s mission and goals',
          color: royalColors.charityRed,
        },
        {
          icon: '🤝',
          title: 'Collaborative Culture',
          description: 'Committed to genuine partnership with shared decision-making and mutual respect',
          color: royalColors.compassionTeal,
        },
        {
          icon: '📈',
          title: 'Capacity Building',
          description: 'Access to training, expertise, and resources to strengthen partner effectiveness',
          color: royalColors.impactGreen,
        },
      ],
    },

    // Partnership Categories
    categories: {
      title: 'Areas of Partnership',
      description: 'We welcome partnerships across our key program areas',
      items: [
        { icon: '🚨', name: 'Crisis Response', desc: 'Emergency humanitarian assistance' },
        { icon: '🏥', name: 'Healthcare', desc: 'Medical services and health initiatives' },
        { icon: '📚', name: 'Education', desc: 'Learning opportunities and scholarships' },
        { icon: '🍽️', name: 'Food Security', desc: 'Nutrition and livelihoods programs' },
        { icon: '🏠', name: 'Shelter', desc: 'Housing and community development' },
        { icon: '👩‍💼', name: 'Women Empowerment', desc: 'Economic and social advancement' },
        { icon: '💼', name: 'Youth Programs', desc: 'Skills development and employment' },
        { icon: '⚡', name: 'Sustainable Development', desc: 'Long-term community resilience' },
      ],
    },

    // Partner Testimonials
    testimonials: {
      title: 'Partner Testimonials',
      description: 'Hear from organizations working alongside JHCO',
      items: [
        {
          quote: 'JHCO\'s professionalism, transparency, and genuine commitment to impact make them an exemplary partner. Our collaboration has transformed lives across multiple regions.',
          author: 'Dr. Sarah Mitchell',
          role: 'International NGO Director',
        },
        {
          quote: 'The royal heritage and institutional credibility of JHCO opened doors for us in communities we couldn\'t reach alone. Together, we\'ve achieved exponentially greater impact.',
          author: 'Ahmed Al-Dosari',
          role: 'Regional Development Expert',
        },
        {
          quote: 'As a government partner, we deeply value JHCO\'s adherence to the highest standards of governance and transparency. They are trusted partners in our nation\'s humanitarian efforts.',
          author: 'Hon. Fatima Al-Rashid',
          role: 'Government Minister',
        },
      ],
    },

    // How to Become a Partner
    become: {
      title: 'Become a Partner',
      description: 'We welcome inquiries from organizations aligned with our mission and values',
      steps: [
        {
          number: '1',
          title: 'Initial Inquiry',
          description: 'Contact our Partnership Development team with information about your organization and partnership interests',
        },
        {
          number: '2',
          title: 'Consultation Meeting',
          description: 'Discuss mutual interests, values alignment, and explore potential collaboration opportunities',
        },
        {
          number: '3',
          title: 'Partnership Development',
          description: 'Work with our team to develop a formal partnership agreement and implementation plan',
        },
        {
          number: '4',
          title: 'Official Launch',
          description: 'Formalize partnership with joint announcements and begin collaborative programs',
        },
        {
          number: '5',
          title: 'Ongoing Coordination',
          description: 'Regular meetings, reporting, and joint strategy sessions to maximize impact',
        },
      ],
    },

    // Partner Resources
    resources: {
      title: 'Partner Resources',
      description: 'Tools and materials to support successful partnerships',
      items: [
        { icon: '📄', title: 'Partnership Agreement Template', desc: 'Standard agreement framework' },
        { icon: '📊', title: 'Impact Measurement Guide', desc: 'Standardized metrics and reporting' },
        { icon: '🎓', title: 'Training & Capacity Building', desc: 'Programs for partner organizations' },
        { icon: '📱', title: 'Partner Portal', desc: 'Communication and coordination hub' },
      ],
    },

    // Contact Section
    contact: {
      title: 'Ready to Partner?',
      subtitle: 'Our Partnership Development team is ready to discuss opportunities',
      email: 'partnerships@jhco.org',
      phone: '+962-6-123-4567',
    },

    // CTA Section
    cta: {
      title: 'Join Our Network',
      subtitle: 'Partner with JHCO to amplify your humanitarian impact',
      buttons: [
        { label: 'Contact Partnerships Team', href: '/contact', icon: '📧' },
        { label: 'View Partnership Guide', href: '/resources', icon: '📖' },
        { label: 'Learn More', href: '/about', icon: 'ℹ️' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'الشركاء الملكيون',
      subtitle: 'بناء التأثير العالمي معاً',
      overlay: 'شبكة من المنظمات المتميزة الموحدة في خدمة الإنسانية',
    },

    // Partnership Overview
    overview: {
      title: 'شبكة شراكاتنا',
      description: 'تتعاون الهيئة الخيرية الأردنية الهاشمية مع المنظمات الدولية الرائدة والحكومات والشركات لتضخيم التأثير الإنساني حول العالم. معاً، نخلق تغييراً مستدام ونخدم السكان الضعفاء بكرامة وتميز.',
      stats: [
        { number: 150, suffix: '+', label: 'شركاء عالميون', color: royalColors.darkNavy },
        { number: 50, suffix: '+', label: 'دول', color: royalColors.charityRed },
        { number: 2500, suffix: '+', label: 'موظفو الشركاء', color: royalColors.hashemiteGold },
        { number: 500, suffix: 'M+', label: 'التأثير المشترك', color: royalColors.impactGreen },
      ],
    },

    // Partnership Tiers
    tiers: {
      title: 'مستويات الشراكة',
      description: 'نرحب بالشراكات على عدة مستويات، لكل منها فرص والتزامات متميزة',
      items: [
        {
          icon: '👑',
          title: 'الشركاء الملكيون الإستراتيجيون',
          description: 'شراكات متميزة برؤية مشتركة للتأثير الإنساني العالمي',
          benefits: [
            'تشارك تنفيذي وتمثيل المجلس',
            'مبادرات وبرامج موسومة بالعلامات المشتركة',
            'قمم استراتيجية سنوية والتخطيط',
            'منسق شراكة مخصص',
            'ظهور متميز في جميع المواد الرسمية',
          ],
          color: royalColors.deepRoyal,
        },
        {
          icon: '🏛️',
          title: 'شركاء المؤسسات',
          description: 'منظمات راسخة ملتزمة بالبرمجة التعاونية',
          benefits: [
            'تنفيذ البرامج المشتركة',
            'تبادل بناء القدرات والمعرفة',
            'اجتماعات التنسيق نصف السنوية',
            'دعم التسويق والظهور',
            'تقارير وقياس التأثير المخصص',
          ],
          color: royalColors.darkNavy,
        },
        {
          icon: '🤝',
          title: 'شركاء البرنامج',
          description: 'منظمات التعاون في مبادرات أو قطاعات محددة',
          benefits: [
            'التعاون في البرنامج المستهدف',
            'الخبرة التقنية والدعم',
            'تحديثات البرنامج والتقارير المنتظمة',
            'الاعتراف بوسائل التواصل الاجتماعي',
            'فرص المشاركة في الأحداث',
          ],
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌍',
          title: 'الشركاء الإقليميون',
          description: 'منظمات محلية تعزز رسالتنا في مجتمعاتهم',
          benefits: [
            'تقديم البرامج على مستوى المجتمع',
            'تقوية القدرات المحلية',
            'اجتماعات التنسيق ربع السنوية',
            'شهادة الشراكة والمجموعة',
            'الوصول إلى موارد وتدريب JHCO',
          ],
          color: royalColors.impactGreen,
        },
      ],
    },

    // Featured Partners
    featured: {
      title: 'الشركاء المميزون',
      description: 'بعض من شركائنا المتميزين الذين يعملون على تعزيز مهمتنا المشتركة',
      partners: [
        { name: 'برنامج الأمم المتحدة الإنمائي', category: 'منظمة دولية', year: '2015' },
        { name: 'منظمة الصحة العالمية', category: 'الصحة العالمية', year: '2010' },
        { name: 'وزارة الصحة الأردنية', category: 'وكالة حكومية', year: '1990' },
        { name: 'اللجنة الدولية للهلال الأحمر', category: 'إنسانية', year: '2005' },
        { name: 'برنامج الغذاء العالمي', category: 'الأمن الغذائي', year: '2012' },
        { name: 'مبادرة التعليم أولاً العالمية', category: 'التعليم', year: '2013' },
        { name: 'البنك الإسلامي للتنمية', category: 'تمويل التنمية', year: '2008' },
        { name: 'الصندوق العربي للإنماء الاقتصادي والاجتماعي', category: 'الصندوق الإقليمي', year: '2006' },
      ],
    },

    // Why Partner With JHCO
    whyPartner: {
      title: 'لماذا الشراكة مع الهيئة',
      description: 'اكتشف مزايا الانضمام إلى شبكتنا العالمية',
      items: [
        {
          icon: '👑',
          title: 'الرعاية الملكية والمكانة',
          description: 'الوصول إلى منظمة محترمة برعاية ملكية متميزة وتراث عريق',
          color: royalColors.deepRoyal,
        },
        {
          icon: '🌐',
          title: 'الوصول العالمي',
          description: 'العمليات في أكثر من 30 دولة مع البنية التحتية والخبرة المحلية',
          color: royalColors.darkNavy,
        },
        {
          icon: '📊',
          title: 'التأثير المثبت',
          description: 'سجل موثق للنتائج الإنسانية المستدامة والقابلة للقياس',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '🎯',
          title: 'المواءمة الإستراتيجية',
          description: 'شراكات مرنة تتماشى مع مهمة ومع أهداف منظمتك',
          color: royalColors.charityRed,
        },
        {
          icon: '🤝',
          title: 'ثقافة التعاون',
          description: 'التزام بالشراكة الحقيقية مع اتخاذ القرارات المشتركة والاحترام المتبادل',
          color: royalColors.compassionTeal,
        },
        {
          icon: '📈',
          title: 'بناء القدرات',
          description: 'الوصول إلى التدريب والخبرة والموارد لتعزيز فعالية الشريك',
          color: royalColors.impactGreen,
        },
      ],
    },

    // Partnership Categories
    categories: {
      title: 'مجالات الشراكة',
      description: 'نرحب بالشراكات عبر مناطق البرنامج الرئيسية الخاصة بنا',
      items: [
        { icon: '🚨', name: 'الاستجابة للأزمات', desc: 'المساعدة الإنسانية الطارئة' },
        { icon: '🏥', name: 'الصحة', desc: 'الخدمات الطبية والمبادرات الصحية' },
        { icon: '📚', name: 'التعليم', desc: 'فرص التعليم والمنح الدراسية' },
        { icon: '🍽️', name: 'الأمن الغذائي', desc: 'برامج التغذية وسبل العيش' },
        { icon: '🏠', name: 'المأوى', desc: 'الإسكان وتنمية المجتمع' },
        { icon: '👩‍💼', name: 'تمكين النساء', desc: 'التقدم الاقتصادي والاجتماعي' },
        { icon: '💼', name: 'برامج الشباب', desc: 'تطوير المهارات والتوظيف' },
        { icon: '⚡', name: 'التنمية المستدامة', desc: 'صمود المجتمع على المدى الطويل' },
      ],
    },

    // Partner Testimonials
    testimonials: {
      title: 'شهادات الشركاء',
      description: 'اسمع من المنظمات التي تعمل جنباً إلى جنب مع الهيئة',
      items: [
        {
          quote: 'احترافية الهيئة وشفافيتها والتزامها الحقيقي بالتأثير يجعلهم شريكاً نموذجياً. تعاوننا غيّر حياة الآلاف عبر مناطق متعددة.',
          author: 'د. سارة ميتشيل',
          role: 'مديرة منظمة دولية',
        },
        {
          quote: 'التراث الملكي والمصداقية المؤسسية للهيئة فتحت الأبواب أمامنا في مجتمعات لم نتمكن من الوصول إليها وحدنا. معاً، حققنا تأثيراً أكبر بكثير.',
          author: 'أحمد الدوسري',
          role: 'خبير التنمية الإقليمي',
        },
        {
          quote: 'كشريك حكومي، نقدر بعمق التزام الهيئة بأعلى معايير الحكم والشفافية. إنهم شركاء موثوقون في جهودنا الإنسانية الوطنية.',
          author: 'الفخامة فاطمة الراشد',
          role: 'وزيرة حكومية',
        },
      ],
    },

    // How to Become a Partner
    become: {
      title: 'كيفية أن تصبح شريكاً',
      description: 'نرحب باستفسارات من المنظمات المتوافقة مع مهمتنا وقيمنا',
      steps: [
        {
          number: '1',
          title: 'الاستفسار الأولي',
          description: 'اتصل بفريق تطوير الشراكات لدينا بمعلومات حول منظمتك واهتمامات الشراكة',
        },
        {
          number: '2',
          title: 'اجتماع الاستشارة',
          description: 'ناقش المصالح المتبادلة ومواءمة القيم واستكشف فرص التعاون المحتملة',
        },
        {
          number: '3',
          title: 'تطوير الشراكة',
          description: 'العمل مع فريقنا لتطوير اتفاقية شراكة رسمية وخطة التنفيذ',
        },
        {
          number: '4',
          title: 'الإطلاق الرسمي',
          description: 'توثيق الشراكة مع الإعلانات المشتركة وبدء البرامج التعاونية',
        },
        {
          number: '5',
          title: 'التنسيق المستمر',
          description: 'الاجتماعات المنتظمة والتقارير والجلسات الإستراتيجية المشتركة لتعظيم التأثير',
        },
      ],
    },

    // Partner Resources
    resources: {
      title: 'موارد الشراكة',
      description: 'الأدوات والمواد لدعم الشراكات الناجحة',
      items: [
        { icon: '📄', title: 'قالب اتفاقية الشراكة', desc: 'إطار الاتفاق القياسي' },
        { icon: '📊', title: 'دليل قياس التأثير', desc: 'المقاييس والتقارير الموحدة' },
        { icon: '🎓', title: 'التدريب وبناء القدرات', desc: 'برامج للمنظمات الشريكة' },
        { icon: '📱', title: 'بوابة الشراكة', desc: 'مركز الاتصال والتنسيق' },
      ],
    },

    // Contact Section
    contact: {
      title: 'مستعد للشراكة؟',
      subtitle: 'فريق تطوير الشراكات لدينا جاهز لمناقشة الفرص',
      email: 'partnerships@jhco.org',
      phone: '+962-6-123-4567',
    },

    // CTA Section
    cta: {
      title: 'انضم إلى شبكتنا',
      subtitle: 'شارك مع الهيئة لتضخيم تأثيرك الإنساني',
      buttons: [
        { label: 'اتصل بفريق الشراكات', href: '/contact', icon: '📧' },
        { label: 'عرض دليل الشراكة', href: '/resources', icon: '📖' },
        { label: 'تعرف على المزيد', href: '/about', icon: 'ℹ️' },
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

export default function PartnersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = partnersContent[locale] || partnersContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 50%, ${royalColors.compassionTeal} 100%)`,
        color: 'white',
        padding: '120px 32px',
        textAlign: textAlign as any,
        direction,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            👑 {ar ? 'الشراكات الملكية' : 'ROYAL PARTNERSHIPS'}
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

      {/* 2. PARTNERSHIP OVERVIEW */}
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
            margin: '0 0 24px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.overview.title}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: royalColors.textOfficial,
            maxWidth: '900px',
            margin: '0 0 60px 0',
          }}>
            {content.overview.description}
          </p>

          {/* Partnership Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}>
            {content.overview.stats.map((stat, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${stat.color}`,
                textAlign: 'center',
                boxShadow: shadows.md,
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
                  color: royalColors.textSecondary,
                  lineHeight: '1.6',
                  fontWeight: '600',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP TIERS */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.tiers.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 60px 0',
            maxWidth: '600px',
          }}>
            {content.tiers.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}>
            {content.tiers.items.map((tier, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${tier.color}`,
                boxShadow: shadows.md,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '12px',
                }}>
                  {tier.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  color: tier.color,
                  margin: '0 0 8px 0',
                  fontWeight: '700',
                  fontFamily: 'Garamond, serif',
                }}>
                  {tier.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0 0 20px 0',
                  lineHeight: '1.6',
                }}>
                  {tier.description}
                </p>
                <div style={{
                  borderTop: `1px solid ${tier.color}20`,
                  paddingTop: '16px',
                }}>
                  {tier.benefits.map((benefit, bidx) => (
                    <div key={bidx} style={{
                      fontSize: '13px',
                      color: royalColors.textOfficial,
                      margin: '0 0 8px 0',
                      lineHeight: '1.5',
                      paddingLeft: '16px',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: ar ? 'auto' : '0',
                        right: ar ? '0' : 'auto',
                        color: tier.color,
                        fontWeight: '600',
                      }}>✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PARTNERS */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.featured.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.featured.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.featured.partners.map((partner, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: shadows.sm,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '28px',
                  marginBottom: '12px',
                  textAlign: 'center',
                }}>
                  🤝
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  margin: '0 0 6px 0',
                  fontWeight: '600',
                  lineHeight: '1.4',
                }}>
                  {partner.name}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {partner.category}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  fontStyle: 'italic',
                }}>
                  {ar ? 'منذ عام' : 'Since'} {partner.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY PARTNER WITH JHCO */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.whyPartner.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.whyPartner.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.whyPartner.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${item.color}08`,
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

      {/* 6. PARTNERSHIP CATEGORIES */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.categories.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.categories.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {content.categories.items.map((category, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: textAlign as any,
                boxShadow: shadows.sm,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {category.icon}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  margin: '0 0 6px 0',
                  fontWeight: '600',
                }}>
                  {category.name}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0',
                }}>
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PARTNER TESTIMONIALS */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.testimonials.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.testimonials.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.testimonials.items.map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: royalColors.bgRefined,
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                boxShadow: shadows.md,
                textAlign: textAlign as any,
              }}>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  margin: '0 0 20px 0',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{
                  borderTop: `1px solid ${royalColors.hashemiteGold}`,
                  paddingTop: '16px',
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.darkNavy,
                    margin: '0 0 4px 0',
                    fontWeight: '600',
                  }}>
                    {testimonial.author}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: royalColors.textSecondary,
                    margin: '0',
                    fontStyle: 'italic',
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW TO BECOME A PARTNER */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.become.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.become.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {content.become.steps.map((step, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: royalColors.darkNavy,
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  marginLeft: ar ? '0' : '0',
                  marginRight: ar ? '0' : '0',
                }}>
                  {step.number}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNER RESOURCES */}
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
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.resources.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.resources.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {content.resources.items.map((resource, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${royalColors.darkNavy}08`,
                borderRadius: '0px',
                border: `2px solid ${royalColors.darkNavy}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {resource.icon}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  margin: '0 0 6px 0',
                  fontWeight: '600',
                }}>
                  {resource.title}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0',
                }}>
                  {resource.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 100%)`,
        color: 'white',
        textAlign: 'center',
        direction,
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
            {content.contact.title}
          </h2>
          <p style={{
            fontSize: '18px',
            margin: '0 0 32px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
          }}>
            {content.contact.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginTop: '32px',
          }}>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 8px 0',
              }}>
                {ar ? 'البريد الإلكتروني' : 'EMAIL'}
              </p>
              <a href={`mailto:${content.contact.email}`} style={{
                color: royalColors.hashemiteGold,
                fontSize: '16px',
                textDecoration: 'none',
              }}>
                {content.contact.email}
              </a>
            </div>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 8px 0',
              }}>
                {ar ? 'الهاتف' : 'PHONE'}
              </p>
              <a href={`tel:${content.contact.phone}`} style={{
                color: royalColors.hashemiteGold,
                fontSize: '16px',
                textDecoration: 'none',
              }}>
                {content.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
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
