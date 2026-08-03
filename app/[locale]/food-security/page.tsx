'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useEffect } from 'react';

const foodSecurityContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Food Security Program',
      subtitle: 'Ensuring Nutritional Dignity and Sustainable Livelihoods',
      overlay: 'No one should go hungry. We provide emergency food aid and build lasting solutions.',
    },

    // Mission Section
    mission: {
      title: 'Program Mission',
      statement: 'Nutrition & Sustainable Livelihoods',
      description: 'The JHCO Food Security Program is dedicated to addressing hunger and malnutrition across vulnerable communities. We provide emergency food assistance, nutrition education, and livelihood support to ensure food security and economic independence for families in need.',
    },

    // Overview Section
    overview: {
      title: 'Program Overview',
      content: 'Food insecurity remains a critical humanitarian challenge affecting millions globally. Our comprehensive approach combines immediate emergency relief with long-term sustainable solutions, empowering communities to achieve food independence.',
      keyPoints: [
        'Emergency food distribution to crisis-affected populations',
        'Nutrition counseling and health education programs',
        'Agricultural training and livelihood development',
        'School feeding initiatives for children',
        'Food storage and preservation capacity building',
        'Market linkage support for small producers',
      ],
    },

    // Strategic Pillars
    pillars: {
      title: 'Strategic Pillars',
      description: 'Our Food Security Program is built on interconnected pillars ensuring comprehensive impact',
      items: [
        {
          icon: '🚨',
          title: 'Emergency Response',
          description: 'Rapid food distribution and emergency nutrition support during crises, droughts, and conflicts',
          color: royalColors.charityRed,
        },
        {
          icon: '👶',
          title: 'Child Nutrition',
          description: 'School feeding programs and nutritional support for infants, children, and pregnant mothers',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌾',
          title: 'Agricultural Development',
          description: 'Training in sustainable farming, crop diversification, and soil conservation techniques',
          color: royalColors.impactGreen,
        },
        {
          icon: '💼',
          title: 'Livelihoods',
          description: 'Economic empowerment through market linkages, microfinance, and value chain development',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '📚',
          title: 'Education',
          description: 'Nutrition education and food safety awareness programs for communities',
          color: royalColors.skyBlue,
        },
        {
          icon: '🔄',
          title: 'Sustainability',
          description: 'Building long-term food systems resilience and community self-sufficiency',
          color: royalColors.charityRed,
        },
      ],
    },

    // Implementation Approach
    implementation: {
      title: 'Implementation Approach',
      description: 'Multi-layered strategy ensuring immediate relief and lasting impact',
      phases: [
        {
          phase: '1',
          title: 'Assessment & Response',
          description: 'Rapid needs assessment and emergency food provision to crisis-affected populations',
        },
        {
          phase: '2',
          title: 'Stabilization',
          description: 'Nutrition programs, health education, and livelihood support initiation',
        },
        {
          phase: '3',
          title: 'Development',
          description: 'Agricultural training, market access, and economic empowerment initiatives',
        },
        {
          phase: '4',
          title: 'Sustainability',
          description: 'Community ownership, local leadership, and transition to self-sufficiency',
        },
      ],
    },

    // Impact Metrics
    impact: {
      title: 'Our Impact',
      stats: [
        { number: 125000, suffix: '+', label: 'People Served Annually', color: royalColors.charityRed },
        { number: 32, suffix: '', label: 'Countries Active', color: royalColors.impactGreen },
        { number: 450, suffix: '+', label: 'Community Programs', color: royalColors.compassionTeal },
        { number: 95, suffix: '%', label: 'Food Security Achievement', color: royalColors.hashemiteGold },
      ],
    },

    // Program Activities
    activities: {
      title: 'Core Activities',
      description: 'Evidence-based interventions making real difference in communities',
      items: [
        {
          icon: '📦',
          name: 'Emergency Food Distribution',
          desc: 'Monthly food baskets containing staple foods and nutritional supplements',
        },
        {
          icon: '🍎',
          name: 'School Feeding Programs',
          desc: 'Nutritious daily meals for children in primary schools',
        },
        {
          icon: '👨‍🌾',
          name: 'Agricultural Training',
          desc: 'Hands-on training in sustainable farming and home gardening',
        },
        {
          icon: '💰',
          name: 'Livelihood Support',
          desc: 'Microfinance and business training for income generation',
        },
        {
          icon: '🥗',
          name: 'Nutrition Counseling',
          desc: 'Health and nutrition education for families',
        },
        {
          icon: '🤝',
          name: 'Community Groups',
          desc: 'Women\'s groups and village savings associations',
        },
      ],
    },

    // Regional Focus
    regions: {
      title: 'Geographic Focus',
      description: 'Active in major food-insecure regions across the globe',
      areas: [
        'Sub-Saharan Africa (Sudan, Somalia, South Sudan, Ethiopia)',
        'Middle East & North Africa (Palestine, Syria, Lebanon, Yemen)',
        'South Asia (Afghanistan, Pakistan, Bangladesh)',
        'Southeast Asia (Myanmar, Cambodia)',
      ],
    },

    // Success Stories
    stories: {
      title: 'Success Stories',
      description: 'Real transformations happening in communities',
      testimonials: [
        {
          name: 'Fatima, Sudan',
          story: 'Our family was facing severe hunger. The emergency food assistance and agricultural training helped us establish a vegetable garden. Now we grow enough to feed our family and sell surplus at the market.',
          image: '👩',
        },
        {
          name: 'Ahmed, Palestine',
          story: 'My children were malnourished. The school feeding program and nutrition counseling changed everything. They are healthier and performing better in school.',
          image: '👨',
        },
        {
          name: 'Amina, Afghanistan',
          story: 'Through livelihood training and microfinance, I started a small food processing business. Now I provide for my family with dignity.',
          image: '👩‍💼',
        },
      ],
    },

    // Partnerships
    partnerships: {
      title: 'Key Partnerships',
      description: 'Collaborating with international organizations to maximize impact',
      partners: [
        'World Food Programme (WFP)',
        'Food and Agriculture Organization (FAO)',
        'UN World Health Organization',
        'International NGOs & Local Communities',
      ],
    },

    // Challenges & Solutions
    challenges: {
      title: 'Challenges & Our Response',
      description: 'Addressing complex barriers to food security',
      items: [
        {
          challenge: 'Climate Change & Droughts',
          solution: 'Climate-resilient agriculture training and water harvesting initiatives',
        },
        {
          challenge: 'Conflict & Displacement',
          solution: 'Mobile food distribution units and rapid response teams',
        },
        {
          challenge: 'Poverty & Limited Access',
          solution: 'Cash-for-work programs and community-based distribution',
        },
        {
          challenge: 'Lack of Market Access',
          solution: 'Value chain development and farmer cooperative strengthening',
        },
      ],
    },

    // Call to Action
    cta: {
      title: 'Join Our Mission',
      subtitle: 'Help us ensure food security and dignity for vulnerable families',
      buttons: [
        { label: 'Donate Now', href: '/donate', icon: '💝' },
        { label: 'Partner With Us', href: '/partners', icon: '🤝' },
        { label: 'Learn More', href: '/contact', icon: 'ℹ️' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'برنامج الأمن الغذائي',
      subtitle: 'ضمان الكرامة الغذائية والعيش المستدام',
      overlay: 'لا يجب أن يجوع أحد. نقدم الإغاثة الغذائية الطارئة ونبني حلولاً دائمة.',
    },

    // Mission Section
    mission: {
      title: 'مهمة البرنامج',
      statement: 'التغذية وسبل العيش المستدامة',
      description: 'برنامج الأمن الغذائي بالهيئة مكرس للقضاء على الجوع وسوء التغذية عبر المجتمعات الضعيفة. نوفر المساعدة الغذائية الطارئة والتثقيف الغذائي ودعم سبل العيش لضمان الأمن الغذائي والاستقلال الاقتصادي للأسر المحتاجة.',
    },

    // Overview Section
    overview: {
      title: 'نظرة عامة على البرنامج',
      content: 'ينظر انعدام الأمن الغذائي على أنه تحد إنساني حرج يؤثر على الملايين عالمياً. يجمع نهجنا الشامل بين الإغاثة الطارئة الفورية والحلول المستدامة طويلة الأجل، مما يمكن المجتمعات من تحقيق الاستقلال الغذائي.',
      keyPoints: [
        'توزيع الغذاء الطارئ للسكان المتأثرين بالأزمات',
        'برامج الاستشارة الغذائية والتثقيف الصحي',
        'التدريب الزراعي وتطوير سبل العيش',
        'مبادرات التغذية المدرسية للأطفال',
        'بناء القدرات على تخزين وحفظ الغذاء',
        'دعم الربط بالأسواق للمنتجين الصغار',
      ],
    },

    // Strategic Pillars
    pillars: {
      title: 'الأعمدة الاستراتيجية',
      description: 'يُبنى برنامج الأمن الغذائي على أعمدة مترابطة تضمن تأثيراً شاملاً',
      items: [
        {
          icon: '🚨',
          title: 'الاستجابة الطارئة',
          description: 'توزيع غذائي سريع ودعم تغذوي طارئ أثناء الأزمات والجفاف والصراعات',
          color: royalColors.charityRed,
        },
        {
          icon: '👶',
          title: 'تغذية الأطفال',
          description: 'برامج التغذية المدرسية والدعم الغذائي للرضع والأطفال والأمهات الحوامل',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌾',
          title: 'التنمية الزراعية',
          description: 'التدريب على الزراعة المستدامة وتنويع المحاصيل وتقنيات حماية التربة',
          color: royalColors.impactGreen,
        },
        {
          icon: '💼',
          title: 'سبل العيش',
          description: 'التمكين الاقتصادي من خلال الربط بالأسواق والتمويل الأصغر وتطوير السلسلة',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '📚',
          title: 'التعليم',
          description: 'التثقيف الغذائي وبرامج الوعي بسلامة الغذاء للمجتمعات',
          color: royalColors.skyBlue,
        },
        {
          icon: '🔄',
          title: 'الاستدامة',
          description: 'بناء مرونة أنظمة الغذاء طويلة الأجل والاعتماد على الذات المجتمعي',
          color: royalColors.charityRed,
        },
      ],
    },

    // Implementation Approach
    implementation: {
      title: 'نهج التنفيذ',
      description: 'استراتيجية متعددة الطبقات تضمن الإغاثة الفورية والتأثير الدائم',
      phases: [
        {
          phase: '1',
          title: 'التقييم والاستجابة',
          description: 'تقييم احتياجات سريع وتقديم الغذاء الطارئ للسكان المتأثرين بالأزمات',
        },
        {
          phase: '2',
          title: 'التثبيت',
          description: 'برامج التغذية والتثقيف الصحي وبدء دعم سبل العيش',
        },
        {
          phase: '3',
          title: 'التطوير',
          description: 'التدريب الزراعي والوصول إلى الأسواق ومبادرات التمكين الاقتصادي',
        },
        {
          phase: '4',
          title: 'الاستدامة',
          description: 'ملكية المجتمع والقيادة المحلية والانتقال إلى الاعتماد على الذات',
        },
      ],
    },

    // Impact Metrics
    impact: {
      title: 'تأثيرنا',
      stats: [
        { number: 125000, suffix: '+', label: 'شخص مخدوم سنوياً', color: royalColors.charityRed },
        { number: 32, suffix: '', label: 'دولة نشطة', color: royalColors.impactGreen },
        { number: 450, suffix: '+', label: 'برنامج مجتمعي', color: royalColors.compassionTeal },
        { number: 95, suffix: '%', label: 'تحقيق الأمن الغذائي', color: royalColors.hashemiteGold },
      ],
    },

    // Program Activities
    activities: {
      title: 'الأنشطة الأساسية',
      description: 'تدخلات قائمة على الأدلة تحدث فرقاً حقيقياً في المجتمعات',
      items: [
        {
          icon: '📦',
          name: 'توزيع الغذاء الطارئ',
          desc: 'سلال غذائية شهرية تحتوي على الأطعمة الأساسية والمكملات الغذائية',
        },
        {
          icon: '🍎',
          name: 'برامج التغذية المدرسية',
          desc: 'وجبات غذائية صحية يومية للأطفال في المدارس الابتدائية',
        },
        {
          icon: '👨‍🌾',
          name: 'التدريب الزراعي',
          desc: 'تدريب عملي على الزراعة المستدامة والبستنة المنزلية',
        },
        {
          icon: '💰',
          name: 'دعم سبل العيش',
          desc: 'التمويل الأصغر والتدريب على الأعمال لتوليد الدخل',
        },
        {
          icon: '🥗',
          name: 'الاستشارة الغذائية',
          desc: 'التثقيف الصحي والغذائي للأسر',
        },
        {
          icon: '🤝',
          name: 'مجموعات المجتمع',
          desc: 'مجموعات النساء وجمعيات الادخار القروية',
        },
      ],
    },

    // Regional Focus
    regions: {
      title: 'التركيز الجغرافي',
      description: 'نشطة في المناطق الرئيسية المعرضة لانعدام الأمن الغذائي عالمياً',
      areas: [
        'أفريقيا جنوب الصحراء (السودان والصومال وجنوب السودان وإثيوبيا)',
        'الشرق الأوسط وشمال أفريقيا (فلسطين وسوريا ولبنان واليمن)',
        'جنوب آسيا (أفغانستان وباكستان وبنغلاديش)',
        'جنوب شرق آسيا (ميانمار وكمبوديا)',
      ],
    },

    // Success Stories
    stories: {
      title: 'قصص النجاح',
      description: 'تحولات حقيقية تحدث في المجتمعات',
      testimonials: [
        {
          name: 'فاطمة، السودان',
          story: 'كانت أسرتي تواجه جوعاً شديداً. ساعدتنا الإغاثة الغذائية الطارئة والتدريب الزراعي على إنشاء حديقة للخضروات. الآن ننمو ما يكفي لإطعام عائلتنا وبيع الفائض في السوق.',
          image: '👩',
        },
        {
          name: 'أحمد، فلسطين',
          story: 'كان أطفالي يعانون من سوء التغذية. غيّرت برنامج التغذية المدرسية والاستشارة الغذائية كل شيء. هم الآن أصحاء وأدائهم أفضل في المدرسة.',
          image: '👨',
        },
        {
          name: 'أمينة، أفغانستان',
          story: 'من خلال التدريب على سبل العيش والتمويل الأصغر، بدأت عملاً صغيراً في معالجة الغذاء. الآن أعيل أسرتي بكرامة.',
          image: '👩‍💼',
        },
      ],
    },

    // Partnerships
    partnerships: {
      title: 'الشراكات الرئيسية',
      description: 'التعاون مع منظمات دولية لتعظيم التأثير',
      partners: [
        'برنامج الأغذية العالمي',
        'منظمة الأغذية والزراعة',
        'منظمة الصحة العالمية',
        'المنظمات غير الحكومية الدولية والمجتمعات المحلية',
      ],
    },

    // Challenges & Solutions
    challenges: {
      title: 'التحديات واستجابتنا',
      description: 'معالجة العوائق المعقدة أمام الأمن الغذائي',
      items: [
        {
          challenge: 'تغير المناخ والجفاف',
          solution: 'التدريب على الزراعة المتكيفة مع المناخ ومبادرات حصاد المياه',
        },
        {
          challenge: 'الصراع والنزوح',
          solution: 'وحدات توزيع غذائي متنقلة وفرق استجابة سريعة',
        },
        {
          challenge: 'الفقر والوصول المحدود',
          solution: 'برامج النقد مقابل العمل والتوزيع القائم على المجتمع',
        },
        {
          challenge: 'نقص الوصول إلى السوق',
          solution: 'تطوير السلسلة تعزيز تعاونيات المزارعين',
        },
      ],
    },

    // Call to Action
    cta: {
      title: 'انضم إلى مهمتنا',
      subtitle: 'ساعدنا في ضمان الأمن الغذائي والكرامة للأسر الضعيفة',
      buttons: [
        { label: 'تبرع الآن', href: '/donate', icon: '💝' },
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

export default function FoodSecurityPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = foodSecurityContent[locale] || foodSecurityContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.impactGreen} 50%, ${royalColors.hashemiteGold} 100%)`,
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
          🌾
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
            🍽️ {ar ? 'برنامج إنساني' : 'HUMANITARIAN PROGRAM'}
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
                background: `${royalColors.impactGreen}08`,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `3px solid ${royalColors.impactGreen}`,
                borderRight: ar ? `3px solid ${royalColors.impactGreen}` : 'none',
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
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.impactGreen} 100%)`,
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
