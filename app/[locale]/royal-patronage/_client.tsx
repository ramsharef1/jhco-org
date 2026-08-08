'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { useState, useEffect } from 'react';

const royalPatronageContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Royal Patronage Program',
      subtitle: 'Elevating Humanitarian Excellence Through Distinguished Partnership',
      overlay: 'Supporting transformative change with prestige and purpose',
    },

    // Overview Section
    overview: {
      title: 'What is Royal Patronage?',
      description: 'The Royal Patronage Program represents our commitment to fostering deep, meaningful partnerships with organizations, corporations, and individuals who share our vision of transforming lives and communities. Through this exclusive program, patrons gain recognition and the opportunity to shape the future of humanitarian excellence.',
      benefits: [
        'Exclusive partnership opportunities with JHCO initiatives',
        'Recognition in global humanitarian circles',
        'Access to leadership events and networking',
        'Direct impact on program outcomes',
      ],
    },

    // Levels Section
    levels: {
      title: 'Patronage Levels',
      description: 'Choose the level of partnership that best aligns with your mission',
      tiers: [
        {
          name: 'Diamond Patron',
          description: 'Premier partnership level for transformational impact',
          commitment: 'USD $1,000,000+',
          features: [
            'Named recognition across all JHCO platforms',
            'Board-level engagement',
            'Custom program development',
            'Annual recognition gala invitation',
            'Dedicated partnership coordinator',
            'Impact reporting with quarterly updates',
          ],
          color: '#d4af37',
        },
        {
          name: 'Platinum Patron',
          description: 'Major partnership level for significant change',
          commitment: 'USD $500,000 - $999,999',
          features: [
            'Recognition in major initiatives',
            'Executive-level engagement',
            'Program co-sponsorship opportunities',
            'Bi-annual recognition events',
            'Dedicated support team',
            'Comprehensive impact reports',
          ],
          color: '#c0c0c0',
        },
        {
          name: 'Gold Patron',
          description: 'Strategic partnership level for meaningful contribution',
          commitment: 'USD $250,000 - $499,999',
          features: [
            'Recognition in program communications',
            'Senior leadership engagement',
            'Partnership opportunities in specific programs',
            'Annual recognition event',
            'Support team access',
            'Regular impact updates',
          ],
          color: '#b8860b',
        },
        {
          name: 'Silver Patron',
          description: 'Established partnership level for dedicated support',
          commitment: 'USD $100,000 - $249,999',
          features: [
            'Recognition in program materials',
            'Leadership engagement opportunities',
            'Program partnership options',
            'Annual recognition acknowledgment',
            'Impact reporting access',
          ],
          color: '#a9a9a9',
        },
      ],
    },

    // Impact Section
    impact: {
      title: 'Patron Impact Stories',
      description: 'See how patronage is transforming humanitarian work',
      stories: [
        {
          title: 'Healthcare Program Expansion',
          description: 'Through Diamond Patronage, comprehensive medical services now reach over 50,000 families across five countries.',
          icon: '🏥',
          metrics: '50K+ Families Reached',
        },
        {
          title: 'Educational Excellence',
          description: 'Patron-supported scholarships have enabled 15,000 students to pursue quality education.',
          icon: '📚',
          metrics: '15K+ Students',
        },
        {
          title: 'Emergency Response',
          description: 'Swift patronage support provided critical humanitarian aid during regional crises.',
          icon: '🚨',
          metrics: '100K+ Lives Protected',
        },
        {
          title: 'Community Development',
          description: 'Long-term patronage enables sustainable development projects in underserved communities.',
          icon: '🏘️',
          metrics: '200+ Communities',
        },
      ],
    },

    // Recognition Section
    recognition: {
      title: 'Global Recognition Network',
      description: 'Our patrons represent the finest in humanitarian commitment',
      categories: [
        {
          name: 'Corporate Patrons',
          count: '45+',
          icon: '🏢',
        },
        {
          name: 'Individual Patrons',
          count: '180+',
          icon: '👥',
        },
        {
          name: 'Foundation Patrons',
          count: '30+',
          icon: '🏛️',
        },
        {
          name: 'Government Partners',
          count: '15+',
          icon: '🏛️',
        },
      ],
    },

    // Featured Patrons Section
    featured: {
      title: 'Our Distinguished Patrons',
      description: 'Leading organizations and individuals committed to humanitarian excellence',
      patrons: [
        {
          name: 'Global Health Initiative Foundation',
          logo: '🏥',
          since: '2018',
          focus: 'Healthcare',
        },
        {
          name: 'Education for Tomorrow',
          logo: '📚',
          since: '2019',
          focus: 'Education',
        },
        {
          name: 'Sustainable Development Corp',
          logo: '🌍',
          since: '2020',
          focus: 'Community Development',
        },
        {
          name: 'Emergency Relief Partners',
          logo: '🚨',
          since: '2017',
          focus: 'Disaster Response',
        },
        {
          name: 'Tech for Good Initiative',
          logo: '💻',
          since: '2021',
          focus: 'Innovation',
        },
        {
          name: 'Women Empowerment Network',
          logo: '👩‍💼',
          since: '2019',
          focus: 'Women\'s Programs',
        },
      ],
    },

    // Process Section
    process: {
      title: 'Becoming a Royal Patron',
      description: 'Our transparent and collaborative partnership journey',
      steps: [
        {
          number: '1',
          title: 'Discovery',
          description: 'Connect with our partnership team to explore your interests and goals',
        },
        {
          number: '2',
          title: 'Alignment',
          description: 'Identify programs and initiatives that resonate with your mission',
        },
        {
          number: '3',
          title: 'Customization',
          description: 'Develop a tailored patronage package that meets your objectives',
        },
        {
          number: '4',
          title: 'Partnership',
          description: 'Formalize your commitment and begin making transformational impact',
        },
        {
          number: '5',
          title: 'Engagement',
          description: 'Participate in exclusive events and receive regular impact updates',
        },
        {
          number: '6',
          title: 'Legacy',
          description: 'Build lasting change through sustained partnership and recognition',
        },
      ],
    },

    // Benefits Section
    benefits_detail: {
      title: 'Exclusive Patron Benefits',
      items: [
        {
          title: 'Global Recognition',
          description: 'Your name and logo featured across international platforms and events',
          icon: '🌍',
        },
        {
          title: 'Impact Transparency',
          description: 'Detailed reports showing exactly how your support creates change',
          icon: '📊',
        },
        {
          title: 'Leadership Access',
          description: 'Direct engagement with JHCO senior leadership and boards',
          icon: '👔',
        },
        {
          title: 'Networking Events',
          description: 'Exclusive invitation-only gatherings with fellow patrons and leaders',
          icon: '🤝',
        },
        {
          title: 'Tax Benefits',
          description: 'Maximize your giving impact with comprehensive tax documentation',
          icon: '📋',
        },
        {
          title: 'Custom Reports',
          description: 'Personalized impact analytics tailored to your interests and goals',
          icon: '📈',
        },
      ],
    },

    // Statistics Section
    statistics: {
      title: 'Patronage Impact by the Numbers',
      stats: [
        {
          number: '270+',
          label: 'Active Patrons',
          description: 'Organizations and individuals driving change',
        },
        {
          number: '$150M+',
          label: 'Total Investment',
          description: 'Committed to humanitarian initiatives',
        },
        {
          number: '45',
          label: 'Countries Supported',
          description: 'Through patron-funded programs',
        },
        {
          number: '5M+',
          label: 'Lives Impacted',
          description: 'Through patronage initiatives',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Ready to Make a Difference?',
      description: 'Join our network of distinguished patrons and help us create lasting humanitarian impact',
      buttons: [
        {
          text: 'Become a Patron',
          link: '/contact',
          style: 'primary',
        },
        {
          text: 'Download Patron Guide',
          link: '#',
          style: 'secondary',
        },
      ],
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What commitment level should I choose?',
          answer: 'The right level depends on your organization\'s capacity and humanitarian goals. Our partnership team can guide you through options that align with your mission and budget.',
        },
        {
          question: 'Can patronage be renewed annually?',
          answer: 'Yes, most patrons renew annually or commit to multi-year partnerships. This allows for sustained impact and deeper engagement.',
        },
        {
          question: 'Are there tax benefits for patronage?',
          answer: 'JHCO is a registered charitable organization. We provide comprehensive tax documentation for all patron contributions.',
        },
        {
          question: 'How is patronage impact measured?',
          answer: 'We provide detailed impact reports showing program outcomes, beneficiary stories, and financial accountability for every aspect of patronage support.',
        },
        {
          question: 'Can I customize my patronage focus?',
          answer: 'Absolutely. We work closely with each patron to align their support with specific programs, regions, or humanitarian causes they care about most.',
        },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'برنامج الرعاية الملكية',
      subtitle: 'رفع مستوى التميز الإنساني من خلال الشراكة المتميزة',
      overlay: 'دعم التغيير التحويلي بالمكانة والهدف',
    },

    // Overview Section
    overview: {
      title: 'ما هو برنامج الرعاية الملكية؟',
      description: 'يمثل برنامج الرعاية الملكية التزامنا بتعزيز شراكات عميقة وذات مغزى مع المنظمات والشركات والأفراد الذين يتشاركون رؤيتنا في تحويل الحياة والمجتمعات. من خلال هذا البرنامج الحصري، يحصل الراعون على الاعتراف والفرصة لتشكيل مستقبل التميز الإنساني.',
      benefits: [
        'فرص شراكة حصرية مع مبادرات JHCO',
        'الاعتراف في الأوساط الإنسانية العالمية',
        'الوصول إلى الفعاليات القيادية والتواصل',
        'التأثير المباشر على نتائج البرامج',
      ],
    },

    // Levels Section - Continues in Arabic
    levels: {
      title: 'مستويات الرعاية',
      description: 'اختر مستوى الشراكة الذي يتوافق بشكل أفضل مع مهمتك',
      tiers: [
        {
          name: 'راعي الماس',
          description: 'مستوى الشراكة الأول لتحقيق تأثير تحويلي',
          commitment: '+$1,000,000 دولار أمريكي',
          features: [
            'الاعتراف المسمى عبر جميع منصات JHCO',
            'التعامل على المستوى الإداري',
            'تطوير برنامج مخصص',
            'دعوة حفل الاعتراف السنوي',
            'منسق شراكة مخصص',
            'إعداد التقارير مع تحديثات ربع سنوية',
          ],
          color: '#d4af37',
        },
        {
          name: 'راعي البلاتين',
          description: 'مستوى شراكة رئيسي لتحقيق تغيير كبير',
          commitment: '$500,000 - $999,999 دولار أمريكي',
          features: [
            'الاعتراف في المبادرات الرئيسية',
            'التعامل على المستوى التنفيذي',
            'فرص رعاية البرنامج',
            'فعاليات اعتراف نصف سنوية',
            'فريق دعم مخصص',
            'تقارير تأثير شاملة',
          ],
          color: '#c0c0c0',
        },
        {
          name: 'راعي الذهب',
          description: 'مستوى شراكة استراتيجي لمساهمة ذات مغزى',
          commitment: '$250,000 - $499,999 دولار أمريكي',
          features: [
            'الاعتراف في اتصالات البرنامج',
            'التعامل على المستوى الإداري العليا',
            'فرص الشراكة في البرامج المحددة',
            'فعالية الاعتراف السنوية',
            'الوصول إلى فريق الدعم',
            'تحديثات تأثير منتظمة',
          ],
          color: '#b8860b',
        },
        {
          name: 'راعي الفضة',
          description: 'مستوى شراكة راسخ للدعم المخصص',
          commitment: '$100,000 - $249,999 دولار أمريكي',
          features: [
            'الاعتراف في مواد البرنامج',
            'فرص التعامل القيادي',
            'خيارات الشراكة بالبرنامج',
            'الإقرار بالاعتراف السنوي',
            'الوصول إلى تقارير التأثير',
          ],
          color: '#a9a9a9',
        },
      ],
    },

    // Impact Section - Arabic
    impact: {
      title: 'قصص تأثير الراعين',
      description: 'انظر كيف تحول الرعاية العمل الإنساني',
      stories: [
        {
          title: 'توسيع برنامج الرعاية الصحية',
          description: 'من خلال الرعاية الماسية، تصل الخدمات الطبية الشاملة الآن إلى أكثر من 50,000 أسرة عبر خمس دول.',
          icon: '🏥',
          metrics: '50K+ أسرة',
        },
        {
          title: 'التميز التعليمي',
          description: 'مكّنت المنح الدراسية المدعومة من الراعين 15,000 طالب من متابعة التعليم الجيد.',
          icon: '📚',
          metrics: '15K+ طلاب',
        },
        {
          title: 'الاستجابة للطوارئ',
          description: 'وفّرت دعم الرعاية السريعة المساعدة الإنسانية الحرجة أثناء الأزمات الإقليمية.',
          icon: '🚨',
          metrics: '100K+ حياة',
        },
        {
          title: 'تنمية المجتمع',
          description: 'تتيح الرعاية طويلة الأمد مشاريع التنمية المستدامة في المجتمعات المحرومة.',
          icon: '🏘️',
          metrics: '200+ مجتمع',
        },
      ],
    },

    // Continue with other sections in Arabic (similar structure)
    recognition: {
      title: 'شبكة الاعتراف العالمية',
      description: 'يمثل رعاتنا أفضل ما في الالتزام الإنساني',
      categories: [
        {
          name: 'الراعون المؤسسيون',
          count: '45+',
          icon: '🏢',
        },
        {
          name: 'الراعون الأفراد',
          count: '180+',
          icon: '👥',
        },
        {
          name: 'راعون المؤسسات',
          count: '30+',
          icon: '🏛️',
        },
        {
          name: 'شركاء حكوميون',
          count: '15+',
          icon: '🏛️',
        },
      ],
    },

    featured: {
      title: 'رعاتنا المتميزون',
      description: 'المنظمات والأفراد الرائدون الملتزمون بالتميز الإنساني',
      patrons: [
        {
          name: 'مؤسسة المبادرة العالمية للصحة',
          logo: '🏥',
          since: '2018',
          focus: 'الرعاية الصحية',
        },
        {
          name: 'التعليم للغد',
          logo: '📚',
          since: '2019',
          focus: 'التعليم',
        },
        {
          name: 'شركة التنمية المستدامة',
          logo: '🌍',
          since: '2020',
          focus: 'تنمية المجتمع',
        },
        {
          name: 'شركاء الإغاثة في حالات الطوارئ',
          logo: '🚨',
          since: '2017',
          focus: 'الاستجابة للكوارث',
        },
        {
          name: 'مبادرة التكنولوجيا من أجل الخير',
          logo: '💻',
          since: '2021',
          focus: 'الابتكار',
        },
        {
          name: 'شبكة تمكين المرأة',
          logo: '👩‍💼',
          since: '2019',
          focus: 'برامج النساء',
        },
      ],
    },

    process: {
      title: 'أصبح راعياً ملكياً',
      description: 'رحلة الشراكة الشفافة والتعاونية لدينا',
      steps: [
        {
          number: '1',
          title: 'الاكتشاف',
          description: 'تواصل مع فريق شراكتنا لاستكشاف اهتماماتك وأهدافك',
        },
        {
          number: '2',
          title: 'المحاذاة',
          description: 'حدد البرامج والمبادرات التي تتوافق مع مهمتك',
        },
        {
          number: '3',
          title: 'التخصيص',
          description: 'طور حزمة رعاية مخصصة تلبي أهدافك',
        },
        {
          number: '4',
          title: 'الشراكة',
          description: 'اشرع في الالتزام وابدأ في إحداث تأثير تحويلي',
        },
        {
          number: '5',
          title: 'الانخراط',
          description: 'شارك في الفعاليات الحصرية واستقبل التحديثات المنتظمة',
        },
        {
          number: '6',
          title: 'الإرث',
          description: 'ابن تغييراً دائماً من خلال الشراكة المستدامة والاعتراف',
        },
      ],
    },

    benefits_detail: {
      title: 'مزايا الراعي الحصري',
      items: [
        {
          title: 'الاعتراف العالمي',
          description: 'اسمك وشعارك معروضان عبر المنصات والأحداث الدولية',
          icon: '🌍',
        },
        {
          title: 'شفافية التأثير',
          description: 'تقارير مفصلة توضح كيفية إحداث دعمك للتغيير',
          icon: '📊',
        },
        {
          title: 'الوصول القيادي',
          description: 'التعامل المباشر مع القيادة العليا والمجالس',
          icon: '👔',
        },
        {
          title: 'فعاليات التواصل',
          description: 'اجتماعات حصرية بدعوة فقط مع الراعين الآخرين والقادة',
          icon: '🤝',
        },
        {
          title: 'المزايا الضريبية',
          description: 'عظّم تأثير عطائك بالتوثيق الضريبي الشامل',
          icon: '📋',
        },
        {
          title: 'التقارير المخصصة',
          description: 'تحليلات تأثير شخصية مخصصة لاهتماماتك وأهدافك',
          icon: '📈',
        },
      ],
    },

    statistics: {
      title: 'تأثير الرعاية بالأرقام',
      stats: [
        {
          number: '270+',
          label: 'الراعون النشطون',
          description: 'المنظمات والأفراد الذين يقودون التغيير',
        },
        {
          number: '$150M+',
          label: 'إجمالي الاستثمار',
          description: 'المخصص للمبادرات الإنسانية',
        },
        {
          number: '45',
          label: 'دول مدعومة',
          description: 'من خلال برامج ممولة من الراعين',
        },
        {
          number: '5M+',
          label: 'حياة متأثرة',
          description: 'من خلال مبادرات الرعاية',
        },
      ],
    },

    cta: {
      title: 'هل أنت مستعد لإحداث فرق؟',
      description: 'انضم إلى شبكة رعاتنا المتميزين وساعدنا في تحقيق تأثير إنساني دائم',
      buttons: [
        {
          text: 'أصبح راعياً',
          link: '/contact',
          style: 'primary',
        },
        {
          text: 'تحميل دليل الراعي',
          link: '#',
          style: 'secondary',
        },
      ],
    },

    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'ما مستوى الالتزام الذي يجب أن أختاره؟',
          answer: 'يعتمد المستوى المناسب على قدرة مؤسستك والأهداف الإنسانية. يمكن لفريق الشراكة الخاص بنا أن يرشدك خلال الخيارات التي تتوافق مع مهمتك والميزانية.',
        },
        {
          question: 'هل يمكن تجديد الرعاية سنوياً؟',
          answer: 'نعم، معظم الراعين يجددون سنوياً أو يلتزمون بشراكات متعددة السنوات. هذا يسمح بتأثير مستدام وانخراط أعمق.',
        },
        {
          question: 'هل هناك فوائد ضريبية للرعاية؟',
          answer: 'JHCO هي منظمة خيرية مسجلة. نقدم توثيقاً ضريبياً شاملاً لجميع مساهمات الرعاة.',
        },
        {
          question: 'كيف يتم قياس تأثير الرعاية؟',
          answer: 'نقدم تقارير تأثير مفصلة توضح نتائج البرنامج وقصص المستفيدين والمساءلة المالية لكل جوانب دعم الرعاية.',
        },
        {
          question: 'هل يمكنني تخصيص تركيز الرعاية؟',
          answer: 'بالتأكيد. نعمل بشكل وثيق مع كل راعٍ لمحاذاة دعمه مع برامج أو مناطق أو أسباب إنسانية محددة يهتمون بها أكثر.',
        },
      ],
    },
  },
};

export default function RoyalPatronagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState<Locale>('en');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [expandedTier, setExpandedTier] = useState<number>(0);

  useEffect(() => {
    params.then(({ locale: l }) => setLocale((l as Locale) || 'en'));
  }, [params]);

  const content = royalPatronageContent[locale] || royalPatronageContent.en;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
          padding: '120px 32px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: '800',
              margin: '0 0 24px 0',
              fontFamily: 'Georgia, serif',
              color: '#d4af37',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {content.hero.title}
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#ffffff',
              margin: '0 0 16px 0',
              fontWeight: '300',
              lineHeight: '1.4',
            }}
          >
            {content.hero.subtitle}
          </p>
          <p
            style={{
              fontSize: '18px',
              color: '#d4af37',
              margin: 0,
              fontStyle: 'italic',
              letterSpacing: '1px',
            }}
          >
            {content.hero.overlay}
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '52px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 24px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.overview.title}
            </h2>
            <div style={{ height: '3px', width: '80px', background: '#d4af37', margin: '0 auto 32px' }} />
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '18px',
                color: '#333',
                lineHeight: '1.8',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              {content.overview.description}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {content.overview.benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f5f1e8',
                    padding: '24px',
                    borderLeft: '4px solid #d4af37',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      color: '#333',
                      fontWeight: '500',
                      lineHeight: '1.6',
                    }}
                  >
                    ✓ {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS/TIERS SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f5f1e8', borderBottom: '1px solid #d4c5a9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '52px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.levels.title}
            </h2>
            <p style={{ fontSize: '18px', color: '#666', margin: '16px 0 0 0' }}>
              {content.levels.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {content.levels.tiers.map((tier, index) => (
              <div
                key={index}
                onClick={() => setExpandedTier(expandedTier === index ? -1 : index)}
                style={{
                  background: '#ffffff',
                  border: `2px solid ${tier.color}`,
                  borderRadius: '2px',
                  padding: '32px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: expandedTier === index ? `0 12px 28px -4px rgba(212, 175, 55, 0.25)` : '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: tier.color,
                  }}
                />
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: tier.color,
                    borderRadius: '50%',
                    opacity: 0.1,
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                  }}
                />
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: tier.color,
                    margin: '0 0 8px 0',
                    fontFamily: 'Georgia, serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {tier.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  {tier.description}
                </p>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#4a148c',
                    margin: '16px 0',
                    paddingTop: '16px',
                    borderTop: `1px solid ${tier.color}`,
                  }}
                >
                  {tier.commitment}
                </div>

                {expandedTier === index && (
                  <div style={{ marginTop: '24px', borderTop: `1px solid #e8e4db`, paddingTop: '16px' }}>
                    <h4
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#666',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '12px',
                      }}
                    >
                      Key Features:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {tier.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          style={{
                            fontSize: '14px',
                            color: '#333',
                            margin: '8px 0',
                            lineHeight: '1.5',
                          }}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
          padding: '80px 32px',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '700',
              textAlign: 'center',
              margin: '0 0 60px 0',
              fontFamily: 'Georgia, serif',
              textTransform: 'uppercase',
              color: '#d4af37',
              letterSpacing: '1px',
            }}
          >
            {content.statistics.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {content.statistics.stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  borderBottom: '2px solid #d4af37',
                }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: '#d4af37',
                    marginBottom: '8px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {stat.label}
                </div>
                <p style={{ fontSize: '14px', color: '#ccc', margin: 0, lineHeight: '1.5' }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PATRONS SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.featured.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '16px 0 0 0' }}>
              {content.featured.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '28px' }}>
            {content.featured.patrons.map((patron, index) => (
              <div
                key={index}
                style={{
                  background: '#f5f1e8',
                  padding: '32px 24px',
                  borderRadius: '2px',
                  textAlign: 'center',
                  borderTop: '4px solid #d4af37',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(74, 20, 140, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>{patron.logo}</div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#4a148c',
                    margin: '0 0 8px 0',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {patron.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: '8px 0' }}>
                  <strong>Since:</strong> {patron.since}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#d4af37',
                    margin: 0,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {patron.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STORIES SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f5f1e8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.impact.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '16px 0 0 0' }}>
              {content.impact.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {content.impact.stories.map((story, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  padding: '32px 24px',
                  borderRadius: '2px',
                  border: '1px solid #d4c5a9',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{story.icon}</div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#4a148c',
                    margin: '0 0 12px 0',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {story.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                  {story.description}
                </p>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#d4af37',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {story.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.process.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '16px 0 0 0' }}>
              {content.process.description}
            </p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {content.process.steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '24px', marginBottom: index < content.process.steps.length - 1 ? '32px' : 0 }}>
                {/* Timeline circle */}
                <div
                  style={{
                    flex: '0 0 60px',
                    minWidth: '60px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: '#d4af37',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#4a148c',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {step.number}
                  </div>
                  {index < content.process.steps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '29px',
                        top: '60px',
                        width: '2px',
                        height: '40px',
                        background: '#d4af37',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: '8px' }}>
                  <h4
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#4a148c',
                      margin: '0 0 8px 0',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '16px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS DETAIL SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f5f1e8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 24px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.benefits_detail.title}
            </h2>
            <div style={{ height: '3px', width: '80px', background: '#d4af37', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {content.benefits_detail.items.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#4a148c',
                    margin: '0 0 12px 0',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.faq.title}
            </h2>
            <div style={{ height: '3px', width: '80px', background: '#d4af37', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {content.faq.items.map((item, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #d4c5a9',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  boxShadow: openFaqIndex === index ? '0 8px 20px rgba(74, 20, 140, 0.15)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: openFaqIndex === index ? '#f5f1e8' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s',
                    fontSize: '16px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: '700',
                      color: '#4a148c',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px',
                      textAlign: ar ? 'right' : 'left',
                      flex: 1,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontSize: '24px',
                      color: '#d4af37',
                      marginLeft: ar ? '0' : '16px',
                      marginRight: ar ? '16px' : '0',
                      transition: 'transform 0.3s',
                      transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </button>

                {openFaqIndex === index && (
                  <div
                    style={{
                      padding: '20px 24px',
                      backgroundColor: '#f5f1e8',
                      borderTop: '1px solid #d4c5a9',
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
          padding: '80px 32px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '52px',
              fontWeight: '700',
              margin: '0 0 24px 0',
              fontFamily: 'Georgia, serif',
              textTransform: 'uppercase',
              color: '#d4af37',
              letterSpacing: '1px',
            }}
          >
            {content.cta.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#ffffff',
              margin: '0 0 40px 0',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            {content.cta.description}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {content.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={`${base}${button.link}`}
                style={{
                  display: 'inline-block',
                  padding: '16px 48px',
                  backgroundColor: button.style === 'primary' ? '#d4af37' : 'transparent',
                  color: button.style === 'primary' ? '#4a148c' : '#d4af37',
                  border: button.style === 'primary' ? 'none' : '2px solid #d4af37',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontWeight: '700',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontFamily: 'Georgia, serif',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION STATS SECTION */}
      <section style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#4a148c',
                margin: '0 0 16px 0',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {content.recognition.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '16px 0 0 0' }}>
              {content.recognition.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {content.recognition.categories.map((category, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>{category.icon}</div>
                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: '800',
                    color: '#d4af37',
                    marginBottom: '8px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {category.count}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#4a148c',
                    margin: 0,
                    fontFamily: 'Georgia, serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
