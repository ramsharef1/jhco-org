'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState } from 'react';

const recurringDonationsContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Recurring Donations',
      subtitle: 'Make a Lasting Impact with Consistent Support',
      overlay: 'Join thousands of monthly donors sustaining our mission',
    },

    // Benefits Section
    benefits: {
      title: 'Why Recurring Donations?',
      description: 'Consistent giving enables us to plan and deliver more effective programs',
      items: [
        {
          icon: '📅',
          title: 'Predictable Impact',
          description: 'Your monthly gift helps us plan programs with confidence and consistency',
        },
        {
          icon: '💰',
          title: 'Lower Administrative Costs',
          description: 'Recurring donations reduce processing costs, meaning more funds reach those in need',
        },
        {
          icon: '🎯',
          title: 'Flexible Control',
          description: 'Easily adjust your donation amount or pause your gift anytime from your dashboard',
        },
        {
          icon: '📊',
          title: 'Detailed Tracking',
          description: 'Monitor the exact impact of your contributions with detailed monthly reports',
        },
        {
          icon: '🌍',
          title: 'Global Reach',
          description: 'Your steady support enables us to sustain long-term initiatives across regions',
        },
        {
          icon: '❤️',
          title: 'Tax Deductible',
          description: 'All recurring donations are fully tax-deductible. Receive monthly receipts automatically',
        },
      ],
    },

    // How It Works Section
    howItWorks: {
      title: 'How Recurring Donations Work',
      description: 'Simple, transparent, and secure',
      steps: [
        {
          number: '1',
          title: 'Choose Your Amount',
          description: 'Select a monthly donation amount that works for your budget. Start from as little as $5/month',
        },
        {
          number: '2',
          title: 'Select Your Focus',
          description: 'Direct your gift to a specific program or let us allocate it where it\'s needed most',
        },
        {
          number: '3',
          title: 'Choose Payment Method',
          description: 'We accept credit cards, bank transfers, and digital wallets. Your payment is secure and encrypted',
        },
        {
          number: '4',
          title: 'Confirm & Setup',
          description: 'Review your details and confirm. Your first donation will be processed immediately',
        },
        {
          number: '5',
          title: 'Receive Impact Updates',
          description: 'Get monthly emails with your receipt, impact report, and stories from the field',
        },
        {
          number: '6',
          title: 'Manage Anytime',
          description: 'Change your amount, pause, resume, or cancel your donation anytime via your dashboard',
        },
      ],
    },

    // Plans Section
    plans: {
      title: 'Choose Your Giving Plan',
      description: 'Select a recurring donation plan or create a custom amount',
      items: [
        {
          amount: '$5',
          frequency: 'Monthly',
          color: royalColors.skyBlue,
          impact: 'Provides educational materials for one child',
          features: [
            'Monthly tax deductible receipt',
            'Impact updates via email',
            'Access to donor portal',
            'Annual impact report',
          ],
        },
        {
          amount: '$15',
          frequency: 'Monthly',
          color: royalColors.compassionTeal,
          impact: 'Supplies nutrition for 2-3 families for a month',
          features: [
            'Monthly tax deductible receipt',
            'Detailed impact updates',
            'Priority donor portal access',
            'Quarterly video updates',
            'Recognition in annual report',
          ],
          badge: 'MOST POPULAR',
        },
        {
          amount: '$50',
          frequency: 'Monthly',
          color: royalColors.impactGreen,
          impact: 'Provides emergency medical care for multiple families',
          features: [
            'Monthly tax deductible receipt',
            'Personalized impact updates',
            'VIP donor portal access',
            'Monthly video updates',
            'Quarterly direct calls with team',
            'Premium recognition in reports',
          ],
        },
        {
          amount: '$100+',
          frequency: 'Monthly',
          color: royalColors.hashemiteGold,
          impact: 'Sustains comprehensive programs in entire communities',
          features: [
            'Monthly tax deductible receipt',
            'Customized impact reports',
            'Platinum donor portal access',
            'Weekly video updates',
            'Monthly direct engagement calls',
            'Naming opportunities',
            'Exclusive partner events',
          ],
        },
      ],
    },

    // Security & Transparency Section
    security: {
      title: 'Security & Transparency',
      description: 'Your trust is our highest priority',
      items: [
        {
          icon: '🔒',
          title: 'Bank-Level Security',
          description: 'We use 256-bit SSL encryption and PCI DSS compliance to protect your payment information',
        },
        {
          icon: '⚖️',
          title: 'No Hidden Fees',
          description: 'Your full donation amount goes to our mission. We clearly display any payment processing costs',
        },
        {
          icon: '🛡️',
          title: 'Your Control',
          description: 'You can modify or cancel your recurring donation anytime with just one click',
        },
        {
          icon: '📋',
          title: 'Compliance Certified',
          description: 'JHCO is a registered nonprofit with full compliance certifications and independent audits',
        },
      ],
    },

    // Impact Stories Section
    impactStories: {
      title: 'Stories from Our Donors',
      description: 'See how recurring donations are making a real difference',
      stories: [
        {
          quote: 'By giving $25 monthly, I feel like I\'m part of something meaningful every single day. The impact reports show exactly how my donation helps.',
          author: 'Sarah M.',
          role: 'Monthly Donor for 3 years',
          location: 'USA',
        },
        {
          quote: 'I love that I can support JHCO without thinking about it each month. It\'s automatic, transparent, and I can track everything online.',
          author: 'Ahmed Al-Rashid',
          role: 'Monthly Donor for 2 years',
          location: 'UAE',
        },
        {
          quote: 'The quarterly calls with the team give me such a clear picture of the work being done. Recurring donations let me support initiatives over the long term.',
          author: 'David Chen',
          role: 'Monthly Donor for 18 months',
          location: 'Singapore',
        },
      ],
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Everything you need to know about recurring donations',
      items: [
        {
          q: 'When will my first donation be charged?',
          a: 'Your first donation is processed immediately after you confirm your setup. Subsequent donations will be processed on the same day each month.',
        },
        {
          q: 'Can I change my donation amount?',
          a: 'Yes! You can increase, decrease, or pause your donation anytime from your donor dashboard. Changes take effect on your next billing date.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and digital wallets. All payments are secure and encrypted.',
        },
        {
          q: 'Are recurring donations tax-deductible?',
          a: 'Yes, all donations to JHCO are fully tax-deductible. You\'ll receive a separate tax receipt each month for your records.',
        },
        {
          q: 'How do I cancel my recurring donation?',
          a: 'You can cancel anytime by logging into your donor portal and clicking "Manage Donation" or by contacting our support team. No questions asked.',
        },
        {
          q: 'How will I know where my money is going?',
          a: 'You\'ll receive detailed monthly impact updates via email. Log into your portal anytime to view specific reports and stories from the programs you support.',
        },
        {
          q: 'What if I need to pause my donation temporarily?',
          a: 'You can pause your donation for any length of time and resume whenever you\'re ready. Just update your settings in your donor dashboard.',
        },
        {
          q: 'Is my financial information secure?',
          a: 'Absolutely. We use bank-level encryption (256-bit SSL) and comply with PCI DSS standards. Your financial data is never stored on our servers.',
        },
      ],
    },

    // Comparison Section
    comparison: {
      title: 'Recurring vs One-Time Giving',
      description: 'Understand the benefits of sustained support',
      table: {
        headers: ['Feature', 'Recurring Donation', 'One-Time Donation'],
        rows: [
          ['Automatic processing', '✓', '✗'],
          ['Flexible scheduling', '✓', '✗'],
          ['Detailed monthly reports', '✓', '◐'],
          ['Tax receipts per month', '✓', '✗'],
          ['Easy to manage/pause', '✓', '◐'],
          ['Enables long-term planning', '✓', '◐'],
          ['Lower admin overhead', '✓', '✗'],
          ['Flexible amount adjustment', '✓', '✗'],
        ],
      },
    },

    // CTA Section
    cta: {
      title: 'Start Your Monthly Giving Today',
      subtitle: 'Join our community of monthly donors making a lasting impact',
      buttons: [
        { label: 'Set Up Recurring Donation', href: '/donate/recurring', icon: '💝' },
        { label: 'Learn More', href: '/about', icon: '📚' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'التبرعات المتكررة',
      subtitle: 'احدث تأثيراً دائماً من خلال الدعم المستمر',
      overlay: 'انضم إلى آلاف المتبرعين الشهريين الذين يدعمون مهمتنا',
    },

    // Benefits Section
    benefits: {
      title: 'لماذا التبرعات المتكررة؟',
      description: 'يمكّن الإعطاء المستمر من التخطيط وتقديم برامج أكثر فعالية',
      items: [
        {
          icon: '📅',
          title: 'تأثير يمكن التنبؤ به',
          description: 'تساعدنا هديتك الشهرية على التخطيط للبرامج بثقة واستمرارية',
        },
        {
          icon: '💰',
          title: 'تكاليف إدارية أقل',
          description: 'تقلل التبرعات المتكررة من تكاليف المعالجة، مما يعني وصول المزيد من الأموال إلى المحتاجين',
        },
        {
          icon: '🎯',
          title: 'تحكم مرن',
          description: 'يمكنك بسهولة تعديل مبلغ التبرع أو إيقاف هديتك في أي وقت من لوحة التحكم',
        },
        {
          icon: '📊',
          title: 'تتبع مفصل',
          description: 'راقب التأثير الدقيق لمساهماتك من خلال تقارير شهرية مفصلة',
        },
        {
          icon: '🌍',
          title: 'وصول عالمي',
          description: 'يمكّن دعمك المستقر من الحفاظ على المبادرات طويلة الأجل عبر المناطق',
        },
        {
          icon: '❤️',
          title: 'معفى من الضرائب',
          description: 'جميع التبرعات المتكررة معفاة بالكامل من الضرائب. تلقى إيصالات شهرية تلقائياً',
        },
      ],
    },

    // How It Works Section
    howItWorks: {
      title: 'كيف تعمل التبرعات المتكررة',
      description: 'بسيط وشفاف وآمن',
      steps: [
        {
          number: '1',
          title: 'اختر المبلغ الخاص بك',
          description: 'اختر مبلغ تبرع شهري يناسب ميزانيتك. ابدأ من 5 دولارات فقط شهرياً',
        },
        {
          number: '2',
          title: 'اختر تركيزك',
          description: 'وجه هديتك إلى برنامج معين أو دعنا نخصصها حيث تكون هناك حاجة أكثر',
        },
        {
          number: '3',
          title: 'اختر طريقة الدفع',
          description: 'نقبل بطاقات الائتمان والتحويلات البنكية والمحافظ الرقمية. دفعتك آمنة ومشفرة',
        },
        {
          number: '4',
          title: 'تأكيد والإعداد',
          description: 'راجع التفاصيل الخاصة بك وأكد. سيتم معالجة تبرعك الأول على الفور',
        },
        {
          number: '5',
          title: 'تلقي تحديثات التأثير',
          description: 'احصل على رسائل بريد إلكترونية شهرية تتضمن الإيصال وتقرير التأثير والقصص من الميدان',
        },
        {
          number: '6',
          title: 'الإدارة في أي وقت',
          description: 'غير المبلغ أو أيقف أو استأنف أو ألغ تبرعك في أي وقت عبر لوحة التحكم',
        },
      ],
    },

    // Plans Section
    plans: {
      title: 'اختر خطة الإعطاء الخاصة بك',
      description: 'حدد خطة تبرع متكررة أو أنشئ مبلغاً مخصصاً',
      items: [
        {
          amount: '٥ دولارات',
          frequency: 'شهرياً',
          color: royalColors.skyBlue,
          impact: 'يوفر مواد تعليمية لطفل واحد',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات التأثير عبر البريد الإلكتروني',
            'الوصول إلى بوابة المانحين',
            'تقرير التأثير السنوي',
          ],
        },
        {
          amount: '١٥ دولار',
          frequency: 'شهرياً',
          color: royalColors.compassionTeal,
          impact: 'توفر التغذية لعائلات 2-3 لمدة شهر',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات تأثير مفصلة',
            'وصول أولوي لبوابة المانحين',
            'تحديثات فيديو ربع سنوية',
            'الاعتراف في التقرير السنوي',
          ],
          badge: 'الأكثر شهرة',
        },
        {
          amount: '٥٠ دولار',
          frequency: 'شهرياً',
          color: royalColors.impactGreen,
          impact: 'يوفر الرعاية الطبية الطارئة لعائلات متعددة',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات تأثير مخصصة',
            'وصول VIP لبوابة المانحين',
            'تحديثات فيديو شهرية',
            'اتصالات مباشرة ربع سنوية مع الفريق',
            'اعتراف بريميوم في التقارير',
          ],
        },
        {
          amount: '١٠٠+ دولار',
          frequency: 'شهرياً',
          color: royalColors.hashemiteGold,
          impact: 'يدعم برامج شاملة في المجتمعات بأكملها',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تقارير تأثير مخصصة',
            'وصول مانح بلاتيني لبوابة المانحين',
            'تحديثات فيديو أسبوعية',
            'اتصالات مباشرة شهرية',
            'فرص التسمية',
            'أحداث الشراكة الحصرية',
          ],
        },
      ],
    },

    // Security & Transparency Section
    security: {
      title: 'الأمان والشفافية',
      description: 'ثقتك هي أولويتنا الأعلى',
      items: [
        {
          icon: '🔒',
          title: 'أمان بمستوى البنك',
          description: 'نستخدم تشفير SSL بـ 256 بت وامتثال PCI DSS لحماية معلومات الدفع الخاصة بك',
        },
        {
          icon: '⚖️',
          title: 'بدون رسوم مخفية',
          description: 'كامل مبلغ التبرع يذهب إلى مهمتنا. نعرض بوضوح أي تكاليف معالجة دفع',
        },
        {
          icon: '🛡️',
          title: 'تحكمك',
          description: 'يمكنك تعديل أو إلغاء التبرع المتكرر في أي وقت بنقرة واحدة فقط',
        },
        {
          icon: '📋',
          title: 'معتمد من حيث الامتثال',
          description: 'JHCO منظمة غير هادفة للربح مسجلة مع شهادات الامتثال الكاملة والتدقيقات المستقلة',
        },
      ],
    },

    // Impact Stories Section
    impactStories: {
      title: 'قصص من متبرعينا',
      description: 'انظر كيف تحدث التبرعات المتكررة فرقاً حقيقياً',
      stories: [
        {
          quote: 'من خلال الإعطاء 25 دولار شهرياً، أشعر أنني جزء من شيء ذي مغزى كل يوم. تقارير التأثير توضح بالضبط كيف يساعد تبرعي.',
          author: 'سارة م.',
          role: 'متبرعة شهرية منذ 3 سنوات',
          location: 'الولايات المتحدة',
        },
        {
          quote: 'أحب أن أدعم JHCO بدون التفكير في الأمر كل شهر. إنه تلقائي وشفاف ويمكنني تتبع كل شيء عبر الإنترنت.',
          author: 'أحمد الرشيد',
          role: 'متبرع شهري منذ سنتين',
          location: 'الإمارات',
        },
        {
          quote: 'تعطيني الاتصالات ربع السنوية مع الفريق صورة واضحة جداً للعمل الجاري. تتيح لي التبرعات المتكررة دعم المبادرات على المدى الطويل.',
          author: 'ديفيد تشين',
          role: 'متبرع شهري منذ 18 شهراً',
          location: 'سنغافورة',
        },
      ],
    },

    // FAQ Section
    faq: {
      title: 'الأسئلة الشائعة',
      description: 'كل ما تحتاج إلى معرفته عن التبرعات المتكررة',
      items: [
        {
          q: 'متى سيتم خصم تبرعي الأول؟',
          a: 'يتم معالجة تبرعك الأول على الفور بعد تأكيد إعدادك. سيتم معالجة التبرعات اللاحقة في نفس اليوم من كل شهر.',
        },
        {
          q: 'هل يمكنني تغيير مبلغ التبرع؟',
          a: 'نعم! يمكنك زيادة أو تقليل أو إيقاف التبرع في أي وقت من لوحة تحكم المانح. تدخل التغييرات حيز التنفيذ في تاريخ الفواتير التالي.',
        },
        {
          q: 'ما طرق الدفع التي تقبلونها؟',
          a: 'نقبل جميع بطاقات الائتمان الرئيسية (Visa و Mastercard و American Express) والتحويلات البنكية والمحافظ الرقمية. جميع المدفوعات آمنة ومشفرة.',
        },
        {
          q: 'هل التبرعات المتكررة معفاة من الضرائب؟',
          a: 'نعم، جميع التبرعات إلى JHCO معفاة بالكامل من الضرائب. ستتلقى إيصالاً منفصلاً كل شهر لسجلاتك.',
        },
        {
          q: 'كيف ألغي التبرع المتكرر؟',
          a: 'يمكنك الإلغاء في أي وقت بتسجيل الدخول إلى بوابة المانح والنقر على "إدارة التبرع" أو الاتصال بفريق الدعم. بدون أسئلة.',
        },
        {
          q: 'كيف سأعرف أين ذهب المال؟',
          a: 'ستتلقى تحديثات تأثير مفصلة شهرياً عبر البريد الإلكتروني. سجل الدخول إلى البوابة في أي وقت لعرض التقارير المحددة والقصص من البرامج التي تدعمها.',
        },
        {
          q: 'ماذا لو احتجت إلى إيقاف التبرع مؤقتاً؟',
          a: 'يمكنك إيقاف التبرع لأي فترة زمنية واستئناف متى شئت. ما عليك سوى تحديث الإعدادات في لوحة تحكم المانح.',
        },
        {
          q: 'هل معلوماتي المالية آمنة؟',
          a: 'بالتأكيد. نستخدم تشفيراً بمستوى البنك (SSL بـ 256 بت) والامتثال لمعايير PCI DSS. لا يتم تخزين بيانات المالية على خوادمنا.',
        },
      ],
    },

    // Comparison Section
    comparison: {
      title: 'التبرعات المتكررة مقابل التبرعات لمرة واحدة',
      description: 'فهم فوائد الدعم المستمر',
      table: {
        headers: ['الميزة', 'التبرع المتكرر', 'التبرع لمرة واحدة'],
        rows: [
          ['معالجة تلقائية', '✓', '✗'],
          ['جدولة مرنة', '✓', '✗'],
          ['تقارير شهرية مفصلة', '✓', '◐'],
          ['إيصالات ضريبية شهرية', '✓', '✗'],
          ['سهل الإدارة/الإيقاف', '✓', '◐'],
          ['يمكّن التخطيط طويل الأجل', '✓', '◐'],
          ['انخفاض النفقات الإدارية', '✓', '✗'],
          ['تعديل المبلغ المرن', '✓', '✗'],
        ],
      },
    },

    // CTA Section
    cta: {
      title: 'ابدأ الإعطاء الشهري الخاص بك اليوم',
      subtitle: 'انضم إلى مجتمع المتبرعين الشهريين لدينا الذين يحدثون تأثيراً دائماً',
      buttons: [
        { label: 'إعداد التبرع المتكرر', href: '/donate/recurring', icon: '💝' },
        { label: 'تعرف على المزيد', href: '/about', icon: '📚' },
      ],
    },
  },
};

export default function RecurringDonationsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = recurringDonationsContent[locale] || recurringDonationsContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.hashemiteGold} 50%, ${royalColors.compassionTeal} 100%)`,
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
          💝
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
            👑 {ar ? 'الدعم المستدام' : 'SUSTAINED GIVING'}
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

      {/* 2. BENEFITS SECTION */}
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
            {content.benefits.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.benefits.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.benefits.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `linear-gradient(135deg, ${royalColors.compassionTeal}08 0%, ${royalColors.hashemiteGold}08 100%)`,
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.md;
                (e.currentTarget as HTMLElement).style.borderColor = royalColors.compassionTeal;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = royalColors.hashemiteGold;
              }}
              >
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {item.icon}
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

      {/* 3. HOW IT WORKS SECTION */}
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
            {content.howItWorks.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.howItWorks.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {content.howItWorks.steps.map((step, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: royalColors.hashemiteGold,
                    color: royalColors.darkNavy,
                    borderRadius: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}>
                    {step.number}
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    color: royalColors.darkNavy,
                    margin: '0',
                    fontWeight: '600',
                  }}>
                    {step.title}
                  </h4>
                </div>
                <p style={{
                  fontSize: '14px',
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

      {/* 4. PLANS SECTION */}
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
            {content.plans.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.plans.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}>
            {content.plans.items.map((plan, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${plan.color}08`,
                borderRadius: '0px',
                border: `2px solid ${plan.color}`,
                textAlign: textAlign as any,
                position: 'relative',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.lg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: ar ? 'auto' : '20px',
                    left: ar ? '20px' : 'auto',
                    background: royalColors.charityRed,
                    color: 'white',
                    padding: '6px 16px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '0px',
                  }}>
                    {plan.badge}
                  </div>
                )}
                <h4 style={{
                  fontSize: '32px',
                  color: plan.color,
                  margin: '0 0 4px 0',
                  fontWeight: '700',
                }}>
                  {plan.amount}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0 0 20px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600',
                }}>
                  {plan.frequency}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.darkNavy,
                  margin: '0 0 20px 0',
                  lineHeight: '1.6',
                  fontWeight: '600',
                }}>
                  {plan.impact}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}>
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} style={{
                      fontSize: '13px',
                      color: royalColors.textOfficial,
                      padding: '6px 0',
                      paddingLeft: ar ? '0' : '20px',
                      paddingRight: ar ? '20px' : '0',
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECURITY & TRANSPARENCY SECTION */}
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
            {content.security.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.security.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {content.security.items.map((item, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${royalColors.impactGreen}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '12px',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.impactGreen,
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

      {/* 6. IMPACT STORIES SECTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepPurple} 100%)`,
        color: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: 'white',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.impactStories.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#ddd',
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.impactStories.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.impactStories.stories.map((story, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'rgba(212, 175, 55, 0.1)',
                borderRadius: '0px',
                border: `2px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
              }}>
                <p style={{
                  fontSize: '16px',
                  color: '#ddd',
                  margin: '0 0 20px 0',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                }}>
                  "{story.quote}"
                </p>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.hashemiteGold,
                  margin: '0 0 4px 0',
                  fontWeight: '600',
                }}>
                  {story.author}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#aaa',
                  margin: '0 0 4px 0',
                }}>
                  {story.role}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#aaa',
                  margin: '0',
                }}>
                  {story.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.faq.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
          }}>
            {content.faq.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            {content.faq.items.map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.sm;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    color: royalColors.darkNavy,
                    margin: '0',
                    fontWeight: '600',
                    flex: 1,
                    textAlign: textAlign as any,
                  }}>
                    {faq.q}
                  </h4>
                  <div style={{
                    fontSize: '16px',
                    transition: 'transform 0.3s',
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}>
                    ▼
                  </div>
                </div>
                {expandedFaq === idx && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    margin: '12px 0 0 0',
                    lineHeight: '1.6',
                    paddingTop: '12px',
                    borderTop: `1px solid ${royalColors.borderFormal}`,
                    textAlign: textAlign as any,
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
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
            color: royalColors.darkNavy,
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
            color: royalColors.textSecondary,
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
                  background: royalColors.charityRed,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0px',
                  fontWeight: '700',
                  transition: 'all 0.3s',
                  display: 'inline-block',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: `2px solid ${royalColors.charityRed}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = royalColors.charityRed;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = royalColors.charityRed;
                  (e.currentTarget as HTMLElement).style.color = 'white';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
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
