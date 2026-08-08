'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useEffect } from 'react';

const clothingBankContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Clothing Bank Program',
      subtitle: 'Dignified Attire, Renewed Confidence, Thriving Communities',
      overlay: 'Every person deserves to dress with dignity. We provide clothing assistance and foster community inclusion.',
    },

    // Mission Section
    mission: {
      title: 'Program Mission',
      statement: 'Dignity Through Attire & Community Empowerment',
      description: 'The JHCO Clothing Bank Program is dedicated to providing dignified clothing assistance to vulnerable populations while promoting community integration and self-esteem. We recognize that proper attire is essential for employment, education, and social participation, enabling individuals and families to engage fully in society.',
    },

    // Overview Section
    overview: {
      title: 'Program Overview',
      content: 'Lack of appropriate clothing is a significant barrier to social participation, employment opportunities, and education access. Our comprehensive Clothing Bank Program addresses this fundamental need by providing quality clothing while fostering dignity, confidence, and community belonging.',
      keyPoints: [
        'Emergency clothing distribution to vulnerable populations',
        'Career clothing assistance for job seekers and employment training',
        'School uniforms and educational attire for children',
        'Seasonal clothing support for winter and summer needs',
        'Formal wear for important life events and occasions',
        'Community sewing and tailoring skill development',
      ],
    },

    // Strategic Pillars
    pillars: {
      title: 'Strategic Pillars',
      description: 'Our Clothing Bank Program is built on interconnected pillars ensuring comprehensive impact and dignity',
      items: [
        {
          icon: '👔',
          title: 'Career Readiness',
          description: 'Professional clothing assistance for job interviews, employment, and workplace success',
          color: royalColors.charityRed,
        },
        {
          icon: '👧',
          title: 'Educational Access',
          description: 'School uniforms and appropriate attire ensuring children can attend school without barriers',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🧵',
          title: 'Skills Development',
          description: 'Sewing, tailoring, and clothing repair training for income generation and self-sufficiency',
          color: royalColors.impactGreen,
        },
        {
          icon: '❄️',
          title: 'Seasonal Support',
          description: 'Winter coats, summer clothing, and weather-appropriate attire for vulnerable populations',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '💫',
          title: 'Dignity & Confidence',
          description: 'Psychological support and empowerment through appropriate and respectful clothing assistance',
          color: royalColors.skyBlue,
        },
        {
          icon: '🤝',
          title: 'Community Integration',
          description: 'Fostering social participation and community belonging through clothing support programs',
          color: royalColors.charityRed,
        },
      ],
    },

    // Implementation Approach
    implementation: {
      title: 'Implementation Approach',
      description: 'Multi-layered strategy ensuring dignified assistance and sustainable impact',
      phases: [
        {
          phase: '1',
          title: 'Assessment & Collection',
          description: 'Identify community needs and collect quality clothing from donors and partners',
        },
        {
          phase: '2',
          title: 'Distribution & Support',
          description: 'Provide clothing assistance with dignity and respect, matching needs to beneficiaries',
        },
        {
          phase: '3',
          title: 'Skills Training',
          description: 'Offer sewing and tailoring training for self-sufficiency and income generation',
        },
        {
          phase: '4',
          title: 'Community Empowerment',
          description: 'Foster long-term community participation and social integration through continued support',
        },
      ],
    },

    // Impact Metrics
    impact: {
      title: 'Our Impact',
      stats: [
        { number: 45000, suffix: '+', label: 'People Served Annually', color: royalColors.charityRed },
        { number: 18, suffix: '', label: 'Countries Active', color: royalColors.impactGreen },
        { number: 280, suffix: '+', label: 'Community Programs', color: royalColors.compassionTeal },
        { number: 88, suffix: '%', label: 'Employment Placement Rate', color: royalColors.hashemiteGold },
      ],
    },

    // Program Activities
    activities: {
      title: 'Core Activities',
      description: 'Evidence-based interventions making real difference in communities',
      items: [
        {
          icon: '🎽',
          name: 'Emergency Clothing Distribution',
          desc: 'Rapid assistance providing essential clothing to vulnerable populations',
        },
        {
          icon: '👨‍💼',
          name: 'Career Clothing Programs',
          desc: 'Professional attire assistance for job seekers and employment training',
        },
        {
          icon: '📚',
          name: 'School Uniform Programs',
          desc: 'Uniforms and educational attire for children in schools',
        },
        {
          icon: '🧥',
          name: 'Seasonal Support',
          desc: 'Winter coats and seasonal clothing for weather protection',
        },
        {
          icon: '🧵',
          name: 'Sewing & Tailoring Training',
          desc: 'Skills development for clothing repair and tailoring business',
        },
        {
          icon: '💼',
          name: 'Microenterprise Support',
          desc: 'Business training for clothing and textile-based enterprises',
        },
      ],
    },

    // Regional Focus
    regions: {
      title: 'Geographic Focus',
      description: 'Active in communities facing poverty and employment barriers',
      areas: [
        'Sub-Saharan Africa (Kenya, Uganda, Rwanda, Ethiopia)',
        'Middle East & North Africa (Palestine, Syria, Lebanon)',
        'South Asia (Afghanistan, Pakistan, India)',
        'Southeast Asia (Cambodia, Myanmar)',
      ],
    },

    // Success Stories
    stories: {
      title: 'Success Stories',
      description: 'Real transformations through clothing assistance and dignity',
      testimonials: [
        {
          name: 'Zainab, Palestine',
          story: 'I was unemployed and couldn\'t afford professional clothes for interviews. The Clothing Bank provided me with business attire and confidence. I now work as an office manager and support my family with dignity.',
          image: '👩‍💼',
        },
        {
          name: 'Mohammed, Sudan',
          story: 'Through the sewing training program, I learned tailoring skills. Today I run my own tailoring business and employ others from my community.',
          image: '👨‍🔧',
        },
        {
          name: 'Amara, Kenya',
          story: 'My children couldn\'t attend school because we couldn\'t afford uniforms. The school uniform program changed everything. They are now thriving students.',
          image: '👧',
        },
      ],
    },

    // Partnerships
    partnerships: {
      title: 'Key Partnerships',
      description: 'Collaborating with organizations to maximize impact',
      partners: [
        'International Labor Organization (ILO)',
        'UNHCR & Refugee Agencies',
        'Employment Training Organizations',
        'Fashion & Textile Industry Partners',
        'Local Communities & Businesses',
      ],
    },

    // Challenges & Solutions
    challenges: {
      title: 'Challenges & Our Response',
      description: 'Addressing barriers to dignity and employment',
      items: [
        {
          challenge: 'Employment Barriers',
          solution: 'Career clothing programs and employment skills training integrated with attire provision',
        },
        {
          challenge: 'Educational Access',
          solution: 'School uniform programs and transportation support for students',
        },
        {
          challenge: 'Clothing Quality & Sustainability',
          solution: 'Quality control standards and local sewing/repair training for sustainability',
        },
        {
          challenge: 'Cultural Sensitivity',
          solution: 'Community consultation and culturally appropriate clothing selections',
        },
      ],
    },

    // Call to Action
    cta: {
      title: 'Join Our Mission',
      subtitle: 'Help us restore dignity through clothing assistance and community empowerment',
      buttons: [
        { label: 'Donate Clothing', href: '/donate', icon: '🎁' },
        { label: 'Partner With Us', href: '/partners', icon: '🤝' },
        { label: 'Learn More', href: '/contact', icon: 'ℹ️' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'برنامج بنك الملابس',
      subtitle: 'ملابس كريمة وثقة متجددة ومجتمعات مزدهرة',
      overlay: 'كل شخص يستحق أن يرتدي ملابس بكرامة. نوفر المساعدة في الملابس ونعزز الاندماج المجتمعي.',
    },

    // Mission Section
    mission: {
      title: 'مهمة البرنامج',
      statement: 'الكرامة من خلال الملابس والتمكين المجتمعي',
      description: 'برنامج بنك الملابس بالهيئة مكرس لتوفير المساعدة في الملابس الكريمة للسكان الضعفاء مع تعزيز الاندماج المجتمعي والثقة بالنفس. ندرك أن الملابس المناسبة ضرورية للعمل والتعليم والمشاركة الاجتماعية.',
    },

    // Overview Section
    overview: {
      title: 'نظرة عامة على البرنامج',
      content: 'نقص الملابس المناسبة عائق كبير أمام المشاركة الاجتماعية وفرص العمل والتعليم. يعالج برنامج بنك الملابس الشامل هذه الحاجة الأساسية بتوفير ملابس عالية الجودة مع تعزيز الكرامة والثقة والانتماء المجتمعي.',
      keyPoints: [
        'توزيع الملابس الطارئة للسكان الضعفاء',
        'مساعدة ملابس المسيرة الوظيفية للباحثين عن عمل',
        'الزي المدرسي والملابس التعليمية للأطفال',
        'دعم الملابس الموسمية للاحتياجات الشتوية والصيفية',
        'الملابس الرسمية للمناسبات المهمة والاحتفالات',
        'تطوير مهارات الخياطة والتفصيل على المستوى المجتمعي',
      ],
    },

    // Strategic Pillars
    pillars: {
      title: 'الأعمدة الاستراتيجية',
      description: 'يُبنى برنامج بنك الملابس على أعمدة مترابطة تضمن تأثيراً شاملاً والكرامة',
      items: [
        {
          icon: '👔',
          title: 'الجاهزية الوظيفية',
          description: 'مساعدة الملابس المهنية لمقابلات العمل والنجاح الوظيفي',
          color: royalColors.charityRed,
        },
        {
          icon: '👧',
          title: 'الوصول التعليمي',
          description: 'الزي المدرسي والملابس المناسبة لضمان وصول الأطفال للمدرسة',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🧵',
          title: 'تطوير المهارات',
          description: 'التدريب على الخياطة والتفصيل وإصلاح الملابس لتوليد الدخل',
          color: royalColors.impactGreen,
        },
        {
          icon: '❄️',
          title: 'الدعم الموسمي',
          description: 'المعاطف والملابس الموسمية المناسبة للطقس للسكان الضعفاء',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '💫',
          title: 'الكرامة والثقة',
          description: 'الدعم النفسي والتمكين من خلال المساعدة في الملابس المحترمة',
          color: royalColors.skyBlue,
        },
        {
          icon: '🤝',
          title: 'الاندماج المجتمعي',
          description: 'تعزيز المشاركة الاجتماعية والانتماء المجتمعي من خلال دعم الملابس',
          color: royalColors.charityRed,
        },
      ],
    },

    // Implementation Approach
    implementation: {
      title: 'نهج التنفيذ',
      description: 'استراتيجية متعددة الطبقات تضمن المساعدة الكريمة والتأثير المستدام',
      phases: [
        {
          phase: '1',
          title: 'التقييم والجمع',
          description: 'تحديد احتياجات المجتمع وجمع الملابس عالية الجودة من المتبرعين',
        },
        {
          phase: '2',
          title: 'التوزيع والدعم',
          description: 'توفير مساعدة الملابس بكرامة واحترام، مطابقة الاحتياجات للمستفيدين',
        },
        {
          phase: '3',
          title: 'تدريب المهارات',
          description: 'تقديم التدريب على الخياطة والتفصيل لتحقيق الاستقلالية وتوليد الدخل',
        },
        {
          phase: '4',
          title: 'تمكين المجتمع',
          description: 'تعزيز المشاركة المجتمعية طويلة الأجل والاندماج الاجتماعي',
        },
      ],
    },

    // Impact Metrics
    impact: {
      title: 'تأثيرنا',
      stats: [
        { number: 45000, suffix: '+', label: 'شخص مخدوم سنوياً', color: royalColors.charityRed },
        { number: 18, suffix: '', label: 'دولة نشطة', color: royalColors.impactGreen },
        { number: 280, suffix: '+', label: 'برنامج مجتمعي', color: royalColors.compassionTeal },
        { number: 88, suffix: '%', label: 'معدل التوظيف', color: royalColors.hashemiteGold },
      ],
    },

    // Program Activities
    activities: {
      title: 'الأنشطة الأساسية',
      description: 'تدخلات قائمة على الأدلة تحدث فرقاً حقيقياً في المجتمعات',
      items: [
        {
          icon: '🎽',
          name: 'توزيع الملابس الطارئة',
          desc: 'المساعدة السريعة بتوفير الملابس الأساسية للسكان الضعفاء',
        },
        {
          icon: '👨‍💼',
          name: 'برامج ملابس المسيرة الوظيفية',
          desc: 'مساعدة الملابس المهنية للباحثين عن عمل والتدريب الوظيفي',
        },
        {
          icon: '📚',
          name: 'برامج الزي المدرسي',
          desc: 'الزي المدرسي والملابس التعليمية للأطفال',
        },
        {
          icon: '🧥',
          name: 'الدعم الموسمي',
          desc: 'المعاطف الشتوية والملابس الموسمية لحماية الطقس',
        },
        {
          icon: '🧵',
          name: 'تدريب الخياطة والتفصيل',
          desc: 'تطوير مهارات إصلاح الملابس وأعمال التفصيل',
        },
        {
          icon: '💼',
          name: 'دعم المشاريع الصغيرة',
          desc: 'التدريب التجاري للمشاريع الصغيرة في الملابس والنسيج',
        },
      ],
    },

    // Regional Focus
    regions: {
      title: 'التركيز الجغرافي',
      description: 'نشطة في المجتمعات التي تواجه الفقر وعوائق التوظيف',
      areas: [
        'أفريقيا جنوب الصحراء (كينيا وأوغندا ورواندا وإثيوبيا)',
        'الشرق الأوسط وشمال أفريقيا (فلسطين وسوريا ولبنان)',
        'جنوب آسيا (أفغانستان وباكستان والهند)',
        'جنوب شرق آسيا (كمبوديا وميانمار)',
      ],
    },

    // Success Stories
    stories: {
      title: 'قصص النجاح',
      description: 'تحولات حقيقية من خلال مساعدة الملابس والكرامة',
      testimonials: [
        {
          name: 'زينب، فلسطين',
          story: 'كنت عاطلة عن العمل ولم أستطع تحمل تكاليف الملابس المهنية للمقابلات. وفر لي بنك الملابس ملابس العمل والثقة. الآن أعمل مديرة مكتب وأعيل أسرتي بكرامة.',
          image: '👩‍💼',
        },
        {
          name: 'محمد، السودان',
          story: 'تعلمت مهارات الخياطة من خلال برنامج التدريب. اليوم أدير عملي في التفصيل وأوظف آخرين من مجتمعي.',
          image: '👨‍🔧',
        },
        {
          name: 'أمارة، كينيا',
          story: 'لم يستطع أطفالي الذهاب إلى المدرسة لأننا لم نتمكن من تحمل تكاليف الزي المدرسي. غيّر برنامج الزي المدرسي كل شيء. هم الآن طلاب متفوقون.',
          image: '👧',
        },
      ],
    },

    // Partnerships
    partnerships: {
      title: 'الشراكات الرئيسية',
      description: 'التعاون مع المنظمات لتعظيم التأثير',
      partners: [
        'منظمة العمل الدولية',
        'المفوضية السامية للاجئين والوكالات ذات الصلة',
        'منظمات التدريب على التوظيف',
        'شركاء صناعة الأزياء والنسيج',
        'المجتمعات المحلية والشركات',
      ],
    },

    // Challenges & Solutions
    challenges: {
      title: 'التحديات واستجابتنا',
      description: 'معالجة العوائق أمام الكرامة والتوظيف',
      items: [
        {
          challenge: 'عوائق التوظيف',
          solution: 'برامج ملابس المسيرة الوظيفية والتدريب المدمج مع توفير الملابس',
        },
        {
          challenge: 'الوصول التعليمي',
          solution: 'برامج الزي المدرسي والدعم اللوجستي للطلاب',
        },
        {
          challenge: 'جودة الملابس والاستدامة',
          solution: 'معايير مراقبة الجودة والتدريب المحلي على الإصلاح',
        },
        {
          challenge: 'الحساسية الثقافية',
          solution: 'استشارة المجتمع واختيار الملابس المناسبة ثقافياً',
        },
      ],
    },

    // Call to Action
    cta: {
      title: 'انضم إلى مهمتنا',
      subtitle: 'ساعدنا في استعادة الكرامة من خلال مساعدة الملابس والتمكين المجتمعي',
      buttons: [
        { label: 'تبرع بملابس', href: '/donate', icon: '🎁' },
        { label: 'اعمل معنا', href: '/partners', icon: '🤝' },
        { label: 'اتصل بنا', href: '/contact', icon: 'ℹ️' },
      ],
    },
  },
};

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

export default function ClothingBankPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = clothingBankContent[locale] || clothingBankContent.en;

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
          👔
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
            🎽 {ar ? 'برنامج إنساني' : 'HUMANITARIAN PROGRAM'}
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

      {/* 2. MISSION */}
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

      {/* 3. OVERVIEW */}
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
            margin: '0 0 24px 0',
            textAlign: textAlign as any,
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
            margin: '0 0 48px 0',
          }}>
            {content.overview.content}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.overview.keyPoints.map((point, idx) => (
              <div key={idx} style={{
                padding: '24px',
                background: `${royalColors.compassionTeal}08`,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `3px solid ${royalColors.compassionTeal}`,
                borderRight: ar ? `3px solid ${royalColors.compassionTeal}` : 'none',
                textAlign: textAlign as any,
              }}>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  ✓ {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC PILLARS */}
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
            {content.pillars.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.pillars.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}>
            {content.pillars.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${item.color}08`,
                borderRadius: '0px',
                border: `2px solid ${item.color}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '36px',
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

      {/* 5. IMPACT METRICS */}
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

      {/* 6. PROGRAM ACTIVITIES */}
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
            {content.activities.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.activities.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {content.activities.items.map((activity, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
                boxShadow: shadows.sm,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {activity.icon}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {activity.name}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.5',
                }}>
                  {activity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION PHASES */}
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
            {content.implementation.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.implementation.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {content.implementation.phases.map((phase, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: royalColors.bgRefined,
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '16px',
                }}>
                  {phase.phase}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {phase.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS STORIES */}
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
            {content.stories.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.stories.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.stories.testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: shadows.md,
                textAlign: textAlign as any,
                borderTop: `4px solid ${royalColors.charityRed}`,
              }}>
                <div style={{
                  fontSize: '60px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {testimonial.image}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 12px 0',
                  fontWeight: '600',
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}>
                  "{testimonial.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL-TO-ACTION */}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
