'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius, spacing } from '@/lib/royalDesign';
import { useState } from 'react';

const monthlyGivingContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Monthly Giving Program',
      subtitle: 'Become a Sustaining Partner in Our Mission',
      overlay: 'Join our community of committed monthly donors transforming lives across the globe',
    },

    // Program Overview Section
    overview: {
      title: 'What is Monthly Giving?',
      description: 'Monthly giving is the most powerful way to create lasting change. Your consistent support enables us to plan, build, and sustain life-changing programs year-round.',
      highlights: [
        'Automatic monthly donations processed securely',
        'Complete flexibility to increase, decrease, or pause anytime',
        'Monthly impact updates tracking your donation\'s direct effect',
        'Tax-deductible receipts sent automatically each month',
        'Access to exclusive donor reports and impact data',
      ],
    },

    // Benefits Section
    benefits: {
      title: 'Why Become a Monthly Donor?',
      description: 'Monthly giving creates predictable, sustainable funding that transforms our capacity to serve',
      items: [
        {
          icon: '🎯',
          title: 'Predictable Impact',
          description: 'Your consistent monthly gift helps us plan multi-year programs and deliver measurable results',
        },
        {
          icon: '💰',
          title: 'Lower Costs = More Impact',
          description: 'Monthly giving reduces processing costs by 30%, ensuring more funds directly reach beneficiaries',
        },
        {
          icon: '📊',
          title: 'Transparent Tracking',
          description: 'View detailed monthly reports showing exactly how your donation improves lives',
        },
        {
          icon: '🔄',
          title: 'Complete Control',
          description: 'Adjust your amount, pause, resume, or cancel anytime with just one click from your dashboard',
        },
        {
          icon: '🌍',
          title: 'Sustain Global Programs',
          description: 'Your steady support sustains long-term initiatives across multiple regions and programs',
        },
        {
          icon: '⭐',
          title: 'VIP Recognition',
          description: 'Receive exclusive recognition, direct team engagement, and special events reserved for monthly donors',
        },
      ],
    },

    // Giving Plans
    plans: {
      title: 'Choose Your Monthly Giving Level',
      description: 'Select a plan that works for your budget. Every amount matters.',
      items: [
        {
          amount: '$5',
          frequency: 'Monthly',
          color: royalColors.skyBlue,
          impact: 'Provides educational materials for one child for a month',
          features: [
            'Monthly tax-deductible receipt',
            'Monthly impact email updates',
            'Access to donor portal',
            'Annual impact report',
            'Recognition in annual report',
          ],
        },
        {
          amount: '$15',
          frequency: 'Monthly',
          color: royalColors.compassionTeal,
          impact: 'Supplies emergency meals for 5-10 families for a week',
          features: [
            'Monthly tax-deductible receipt',
            'Detailed bi-weekly impact updates',
            'Priority donor portal access',
            'Quarterly video updates from the field',
            'Recognition in annual & monthly reports',
            'Quarterly newsletter with special stories',
          ],
          badge: 'MOST POPULAR',
        },
        {
          amount: '$50',
          frequency: 'Monthly',
          color: royalColors.impactGreen,
          impact: 'Provides primary healthcare for one family for three months',
          features: [
            'Monthly tax-deductible receipt',
            'Personalized impact updates bi-weekly',
            'VIP donor portal access with analytics',
            'Monthly video updates from field teams',
            'Bi-monthly direct calls with program managers',
            'Premium recognition in reports',
            'Invitation to annual donor appreciation event',
          ],
        },
        {
          amount: '$100+',
          frequency: 'Monthly',
          color: royalColors.hashemiteGold,
          impact: 'Sustains comprehensive programs in entire communities',
          features: [
            'Monthly tax-deductible receipt',
            'Customized monthly impact reports',
            'Platinum donor portal with full analytics',
            'Weekly video updates and program reports',
            'Monthly direct engagement calls with leadership',
            'Naming opportunities for major initiatives',
            'Invitation to exclusive partner events',
            'Custom giving strategy consultation',
            'Dedicated donor relations manager',
          ],
        },
      ],
    },

    // Impact Showcase
    impactShowcase: {
      title: 'The Power of Monthly Giving',
      subtitle: 'See how monthly gifts create cascading impact',
      stats: [
        {
          amount: '$5/month',
          period: '12 months',
          total: '$60',
          impact: 'Provides complete school supplies for 5 children',
        },
        {
          amount: '$15/month',
          period: '12 months',
          total: '$180',
          impact: 'Delivers emergency medical care for 20+ families',
        },
        {
          amount: '$50/month',
          period: '12 months',
          total: '$600',
          impact: 'Trains 2-3 women in income-generating skills',
        },
        {
          amount: '$100/month',
          period: '12 months',
          total: '$1,200',
          impact: 'Establishes a community water and sanitation system',
        },
      ],
    },

    // How It Works
    howItWorks: {
      title: 'How Monthly Giving Works',
      description: 'Simple, secure, and transparent',
      steps: [
        {
          number: '1',
          title: 'Choose Your Amount & Impact',
          description: 'Select a monthly donation level that aligns with your giving capacity. Customize your giving at any time.',
        },
        {
          number: '2',
          title: 'Select Program Focus',
          description: 'Direct your gift to a specific program (Healthcare, Education, Food Security, etc.) or let us allocate it where needed most.',
        },
        {
          number: '3',
          title: 'Secure Payment Setup',
          description: 'We accept all major credit cards, bank transfers, and digital wallets. Bank-level 256-bit SSL encryption secures every transaction.',
        },
        {
          number: '4',
          title: 'Confirm & First Donation',
          description: 'Review your settings, confirm, and your first donation processes immediately. Subsequent donations occur on your chosen date.',
        },
        {
          number: '5',
          title: 'Receive Monthly Updates',
          description: 'Each month you\'ll receive your tax receipt, detailed impact report, and inspiring stories from communities your gift supports.',
        },
        {
          number: '6',
          title: 'Manage From Your Dashboard',
          description: 'Update amounts, change focus areas, pause temporarily, or cancel anytime. Full control is always in your hands.',
        },
      ],
    },

    // Success Stories - Donor Testimonials
    successStories: {
      title: 'Meet Our Monthly Donors',
      subtitle: 'Real people creating extraordinary change through monthly giving',
      stories: [
        {
          quote: 'Monthly giving transformed how I support JHCO. Instead of thinking about it once a year, I\'m connected every single month to the lives we\'re changing.',
          author: 'Sarah Thompson',
          role: 'Monthly Donor, $25/month',
          location: 'United States',
          duration: '3 years',
          impact: 'Supported education for 15+ children',
        },
        {
          quote: 'The monthly impact reports are incredible. Seeing exactly how my $50 feeds families and provides healthcare makes it feel so personal and meaningful.',
          author: 'Ahmed Al-Mansouri',
          role: 'Monthly Donor, $50/month',
          location: 'UAE',
          duration: '2 years',
          impact: 'Provided healthcare for 100+ beneficiaries',
        },
        {
          quote: 'As a monthly donor at $100/month, I\'ve been included in strategy calls and named initiatives. It\'s like being part of the JHCO team itself.',
          author: 'Michael Chen',
          role: 'Platinum Monthly Donor, $100/month',
          location: 'Singapore',
          duration: '4 years',
          impact: 'Funded comprehensive community development',
        },
        {
          quote: 'I love that I can pause when finances are tight or increase when I can give more. Monthly giving fits my life perfectly.',
          author: 'Fatima Al-Rashid',
          role: 'Monthly Donor, $30/month',
          location: 'Jordan',
          duration: '18 months',
          impact: 'Supported food security for 40+ families',
        },
      ],
    },

    // Billing & Security Section
    billing: {
      title: 'Billing & Payment Security',
      subtitle: 'Your trust and security are our top priority',
      info: [
        {
          title: 'Bank-Level Security',
          description: 'We use 256-bit SSL encryption and comply with PCI DSS standards. Your financial data is encrypted and never stored on our servers.',
        },
        {
          title: 'Flexible Billing',
          description: 'Choose your preferred billing date (any day of the month). Donations process automatically, and you can update payment methods anytime.',
        },
        {
          title: 'Automatic Tax Receipts',
          description: 'Receive a separate tax-deductible receipt each month. All receipts are digital and instantly available in your donor dashboard.',
        },
        {
          title: 'No Hidden Fees',
          description: 'Your full donation amount goes to our mission. We clearly disclose any payment processing costs upfront.',
        },
        {
          title: 'Multiple Payment Methods',
          description: 'We accept Visa, Mastercard, American Express, bank transfers, and leading digital wallets for your convenience.',
        },
        {
          title: 'Cancel Anytime',
          description: 'Change your amount, pause for a month, or cancel completely anytime from your dashboard. No penalty or questions asked.',
        },
      ],
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Everything you need to know about monthly giving',
      items: [
        {
          q: 'When will my first donation be charged?',
          a: 'Your first donation processes immediately after you confirm setup. Subsequent donations occur on the same day each month.',
        },
        {
          q: 'Can I change my donation amount?',
          a: 'Yes! Adjust your amount up or down anytime, and the change takes effect on your next billing date. You can also set up recurring changes (increase by $5 each year, for example).',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept Visa, Mastercard, American Express, bank transfers (ACH in the US), Apple Pay, Google Pay, and other digital wallets.',
        },
        {
          q: 'Are donations tax-deductible?',
          a: 'Yes! JHCO is a registered 501(c)(3) nonprofit. You\'ll receive a separate tax receipt each month for your tax records.',
        },
        {
          q: 'What if I need to pause my donation temporarily?',
          a: 'You can pause your monthly donation for any period and resume whenever ready. Changes take effect immediately in your dashboard.',
        },
        {
          q: 'How do I know where my donation goes?',
          a: 'Log into your donor portal anytime to see detailed impact reports, watch video updates from the field, and track your specific donation\'s effect.',
        },
        {
          q: 'Can I direct my donation to a specific program?',
          a: 'Absolutely! Select from Healthcare, Education, Food Security, Emergency Response, Women Empowerment, or Youth Programs. You can also change your focus monthly.',
        },
        {
          q: 'Is my financial information secure?',
          a: 'Yes. We use bank-level 256-bit SSL encryption and comply with PCI DSS Level 1 standards. Your data is never stored on our servers.',
        },
        {
          q: 'What if I want to increase my giving?',
          a: 'You can increase your monthly gift anytime. Many donors start at one level and grow their gift over time as their capacity allows.',
        },
        {
          q: 'Do you offer corporate monthly giving?',
          a: 'Yes! Corporations can set up monthly giving programs, often with matching gifts. Contact our corporate partnerships team for details.',
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: 'Why Monthly Donors Love JHCO',
      items: [
        {
          icon: '📱',
          text: 'The donor portal is so easy to use. I can check my impact anytime, update my preferences, and see real stories from the field.',
        },
        {
          icon: '🎯',
          text: 'Monthly giving lets me be strategic about my support. I\'m not just giving once—I\'m building something meaningful over time.',
        },
        {
          icon: '❤️',
          text: 'The team reaches out regularly with personal updates and insights. I truly feel like I\'m part of the JHCO mission.',
        },
        {
          icon: '🌍',
          text: 'Seeing how many lives my consistent monthly donation touches is incredibly motivating. The transparency is outstanding.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Start Your Monthly Giving Journey Today',
      subtitle: 'Join thousands of committed donors creating sustainable, measurable change',
      primaryButton: 'Become a Monthly Donor',
      primaryHref: '/give/setup-monthly',
      secondaryButton: 'Schedule a Call',
      secondaryHref: '/contact?inquiry=monthly-giving',
    },

    // Comparison Table
    comparisonTable: {
      title: 'Monthly vs One-Time Giving',
      description: 'Compare the impact of sustained support',
      headers: ['Feature', 'Monthly Giving', 'One-Time Giving'],
      rows: [
        ['Automatic processing', '✓', '✗'],
        ['Predictable impact', '✓', '◐'],
        ['Monthly tax receipts', '✓', '✗'],
        ['Detailed monthly reports', '✓', '◐'],
        ['Flexible scheduling', '✓', '✗'],
        ['Easy to pause/resume', '✓', '◐'],
        ['Enables long-term planning', '✓', '◐'],
        ['Lower administrative costs', '✓', '✗'],
        ['VIP recognition', '✓', '✗'],
        ['Direct team engagement', '✓', '✗'],
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'برنامج التبرع الشهري',
      subtitle: 'كن شريكاً ملتزماً في مهمتنا',
      overlay: 'انضم إلى مجتمعنا من المتبرعين الشهريين الملتزمين بتحسين الحياة عبر العالم',
    },

    // Program Overview Section
    overview: {
      title: 'ما هو التبرع الشهري؟',
      description: 'التبرع الشهري هو أقوى طريقة لإحداث تغيير دائم. يمكّن دعمك المستمر من التخطيط وبناء والاستمرار في برامج تغير الحياة طوال العام.',
      highlights: [
        'تبرعات شهرية تلقائية تتم بأمان تام',
        'مرونة كاملة لزيادة أو تقليل أو إيقاف التبرع في أي وقت',
        'تحديثات تأثير شهرية تتتبع تأثير تبرعك المباشر',
        'إيصالات معفاة من الضرائب ترسل تلقائياً كل شهر',
        'الوصول إلى تقارير المتبرعين حصرية وبيانات التأثير',
      ],
    },

    // Benefits Section
    benefits: {
      title: 'لماذا تصبح متبرعاً شهرياً؟',
      description: 'يخلق التبرع الشهري تمويلاً متوقعاً وقابلاً للاستدامة يحول قدرتنا على الخدمة',
      items: [
        {
          icon: '🎯',
          title: 'تأثير يمكن التنبؤ به',
          description: 'يساعدنا هديتك الشهرية المتسقة على التخطيط لبرامج متعددة السنوات وتحقيق نتائج قابلة للقياس',
        },
        {
          icon: '💰',
          title: 'تكاليف أقل = تأثير أكبر',
          description: 'يقلل التبرع الشهري تكاليف المعالجة بنسبة 30٪، مما يضمن وصول المزيد من الأموال مباشرة إلى المستفيدين',
        },
        {
          icon: '📊',
          title: 'تتبع شفاف',
          description: 'اعرض تقارير شهرية مفصلة توضح بالضبط كيف يحسن تبرعك الحياة',
        },
        {
          icon: '🔄',
          title: 'التحكم الكامل',
          description: 'اضبط مبلغك أو أوقف أو استأنف أو ألغِ في أي وقت بنقرة واحدة من لوحة المعلومات الخاصة بك',
        },
        {
          icon: '🌍',
          title: 'استدامة البرامج العالمية',
          description: 'يستدام دعمك المستمر المبادرات طويلة الأجل عبر عدة مناطق وبرامج',
        },
        {
          icon: '⭐',
          title: 'اعتراف VIP',
          description: 'احصل على اعتراف حصري وانخراط مباشر مع الفريق وأحداث خاصة محفوظة للمتبرعين الشهريين',
        },
      ],
    },

    // Giving Plans
    plans: {
      title: 'اختر مستوى التبرع الشهري الخاص بك',
      description: 'حدد خطة تناسب ميزانيتك. كل مبلغ مهم.',
      items: [
        {
          amount: '$5',
          frequency: 'شهرياً',
          color: royalColors.skyBlue,
          impact: 'يوفر المواد التعليمية لطفل واحد لمدة شهر',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات بريد إلكترونية بالتأثير الشهري',
            'الوصول إلى بوابة المتبرع',
            'تقرير التأثير السنوي',
            'الاعتراف في التقرير السنوي',
          ],
        },
        {
          amount: '$15',
          frequency: 'شهرياً',
          color: royalColors.compassionTeal,
          impact: 'توفير وجبات الطوارئ لـ 5-10 عائلات لمدة أسبوع',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات تأثير مفصلة كل أسبوعين',
            'وصول أولويات إلى بوابة المتبرع',
            'تحديثات فيديو ربع سنوية من الميدان',
            'الاعتراف في التقارير السنوية والشهرية',
            'رسالة إخبارية فصلية برسائل خاصة',
          ],
          badge: 'الأكثر شيوعاً',
        },
        {
          amount: '$50',
          frequency: 'شهرياً',
          color: royalColors.impactGreen,
          impact: 'توفير الرعاية الصحية الأولية لعائلة واحدة لمدة ثلاثة أشهر',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تحديثات تأثير مخصصة كل أسبوعين',
            'وصول VIP إلى بوابة المتبرع مع تحليلات',
            'تحديثات فيديو شهرية من فرق الميدان',
            'مكالمات مباشرة مرتين شهرياً مع مديري البرامج',
            'اعتراف متميز في التقارير',
            'دعوة لفعالية تقدير المتبرعين السنوية',
          ],
        },
        {
          amount: '$100+',
          frequency: 'شهرياً',
          color: royalColors.hashemiteGold,
          impact: 'استدامة البرامج الشاملة في المجتمعات بأكملها',
          features: [
            'إيصال معفى من الضرائب شهرياً',
            'تقارير تأثير مخصصة شهرياً',
            'وصول بوابة متبرع بلاتينيوم مع تحليلات كاملة',
            'تحديثات فيديو أسبوعية وتقارير البرنامج',
            'مكالمات انخراط مباشرة شهرية مع القيادة',
            'فرص التسمية للمبادرات الرئيسية',
            'دعوة لفعاليات شركاء حصرية',
            'استشارة إستراتيجية تبرع مخصصة',
            'مدير علاقات متبرع مخصص',
          ],
        },
      ],
    },

    // Impact Showcase
    impactShowcase: {
      title: 'قوة التبرع الشهري',
      subtitle: 'شاهد كيف تخلق الهدايا الشهرية تأثيراً متدفقاً',
      stats: [
        {
          amount: '$5/شهرياً',
          period: '12 شهراً',
          total: '$60',
          impact: 'يوفر إمدادات المدرسة الكاملة لـ 5 أطفال',
        },
        {
          amount: '$15/شهرياً',
          period: '12 شهراً',
          total: '$180',
          impact: 'يوفر الرعاية الطبية الطارئة لـ 20+ عائلة',
        },
        {
          amount: '$50/شهرياً',
          period: '12 شهراً',
          total: '$600',
          impact: 'يدرب 2-3 نساء في مهارات توليد الدخل',
        },
        {
          amount: '$100/شهرياً',
          period: '12 شهراً',
          total: '$1,200',
          impact: 'ينشئ نظام مياه وصرف صحي مجتمعي',
        },
      ],
    },

    // How It Works
    howItWorks: {
      title: 'كيف يعمل التبرع الشهري',
      description: 'بسيط وآمن وشفاف',
      steps: [
        {
          number: '1',
          title: 'اختر المبلغ والتأثير',
          description: 'حدد مستوى التبرع الشهري الذي يتوافق مع قدرتك على الإعطاء. خصص إعطاءك في أي وقت.',
        },
        {
          number: '2',
          title: 'حدد تركيز البرنامج',
          description: 'وجه هديتك إلى برنامج محدد (الرعاية الصحية، التعليم، الأمن الغذائي، إلخ) أو اسمح لنا بتخصيصها حيث تكون بحاجة ماسة.',
        },
        {
          number: '3',
          title: 'إعداد الدفع الآمن',
          description: 'نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية والمحافظ الرقمية. تشفير SSL بمستوى 256 بت يؤمن كل معاملة.',
        },
        {
          number: '4',
          title: 'تأكيد والتبرع الأول',
          description: 'راجع إعداداتك وأكد والتبرع الأول في الحال. ستحدث التبرعات اللاحقة في التاريخ الذي اخترته.',
        },
        {
          number: '5',
          title: 'استقبال التحديثات الشهرية',
          description: 'كل شهر ستتلقى إيصالك الضريبي وتقرير التأثير المفصل والقصص الملهمة من المجتمعات التي تدعمها هديتك.',
        },
        {
          number: '6',
          title: 'إدارة من لوحة المعلومات الخاصة بك',
          description: 'تحديث المبالغ وتغيير المناطق الفاصلة أو الإيقاف المؤقت أو الإلغاء في أي وقت. التحكم الكامل دائماً في يديك.',
        },
      ],
    },

    // Success Stories - Donor Testimonials
    successStories: {
      title: 'التقابل مع المتبرعين الشهريين',
      subtitle: 'أشخاص حقيقيون يخلقون تغييراً غير عادي من خلال التبرع الشهري',
      stories: [
        {
          quote: 'غيّر التبرع الشهري الطريقة التي أدعم بها JHCO. بدلاً من التفكير فيها مرة واحدة في السنة، أنا متصل كل شهر بالحياة التي نغيرها.',
          author: 'سارة ثومبسون',
          role: 'متبرعة شهرية، $25/شهرياً',
          location: 'الولايات المتحدة',
          duration: '3 سنوات',
          impact: 'دعمت التعليم لـ 15+ طفل',
        },
        {
          quote: 'تقارير التأثير الشهرية مذهلة. رؤية كيفية أن تعود $50 الخاصة بي بالفوائد على الأسر وتوفير الرعاية الصحية تجعلها تشعر بأنها شخصية جداً وذات مغزى.',
          author: 'أحمد المنصوري',
          role: 'متبرع شهري، $50/شهرياً',
          location: 'الإمارات',
          duration: 'سنتان',
          impact: 'توفير الرعاية الصحية لـ 100+ مستفيد',
        },
        {
          quote: 'كمتبرع شهري بمستوى $100/شهري، تم تضمين مي في مكالمات الإستراتيجية والمبادرات المسماة. يبدو الأمر وكأنني جزء من فريق JHCO نفسه.',
          author: 'مايكل تشن',
          role: 'متبرع بلاتيني شهري، $100/شهرياً',
          location: 'سنغافورة',
          duration: '4 سنوات',
          impact: 'تمويل التنمية المجتمعية الشاملة',
        },
        {
          quote: 'أحب أنني أستطيع الإيقاف المؤقت عندما تكون الأوضاع المالية ضيقة أو زيادة عندما أستطيع إعطاء أكثر. يناسب التبرع الشهري حياتي تماماً.',
          author: 'فاطمة الراشد',
          role: 'متبرعة شهرية، $30/شهرياً',
          location: 'الأردن',
          duration: '18 شهراً',
          impact: 'دعمت الأمن الغذائي لـ 40+ عائلة',
        },
      ],
    },

    // Billing & Security Section
    billing: {
      title: 'الفواتير والأمان الدفع',
      subtitle: 'ثقتك وأمانك هما أولويتنا الأولى',
      info: [
        {
          title: 'أمان بمستوى البنك',
          description: 'نستخدم تشفير SSL بمستوى 256 بت ونامتثل معايير PCI DSS. يتم تشفير بيانات البطاقة الخاصة بك ولا تُخزن أبداً على خوادمنا.',
        },
        {
          title: 'الفواتير المرنة',
          description: 'اختر تاريخ الفاتورة المفضل لديك (أي يوم من الشهر). تتم معالجة التبرعات تلقائياً ويمكنك تحديث طرق الدفع في أي وقت.',
        },
        {
          title: 'الإيصالات الضريبية التلقائية',
          description: 'استقبل إيصال معفى من الضرائب منفصل كل شهر. جميع الإيصالات رقمية وفي متناول يديك فوراً في لوحة معلومات المتبرع الخاصة بك.',
        },
        {
          title: 'بدون رسوم مخفية',
          description: 'المبلغ الكامل للتبرع يذهب إلى مهمتنا. ندفع بوضوح عن أي تكاليف معالجة دفع مقدماً.',
        },
        {
          title: 'طرق دفع متعددة',
          description: 'نقبل Visa و Mastercard و American Express والتحويلات البنكية والمحافظ الرقمية الرائدة لراحتك.',
        },
        {
          title: 'ألغِ في أي وقت',
          description: 'غير المبلغ أو أوقف لمدة شهر أو ألغِ تماماً في أي وقت من لوحة المعلومات الخاصة بك. لا عقوبة أو أسئلة.',
        },
      ],
    },

    // FAQ Section
    faq: {
      title: 'الأسئلة المتكررة',
      description: 'كل ما تحتاج إلى معرفته عن التبرع الشهري',
      items: [
        {
          q: 'متى سيتم فرض التبرع الأول؟',
          a: 'يتم معالجة التبرع الأول فوراً بعد تأكيد الإعداد. تحدث التبرعات اللاحقة في نفس اليوم من كل شهر.',
        },
        {
          q: 'هل يمكنني تغيير مبلغ التبرع؟',
          a: 'نعم! اضبط مبلغك صعوداً أو هبوطاً في أي وقت ويسري التغيير على تاريخ الفاتورة التالي. يمكنك أيضاً إعداد تغييرات متكررة.',
        },
        {
          q: 'ما طرق الدفع التي تقبلونها؟',
          a: 'نقبل Visa و Mastercard و American Express والتحويلات البنكية وApple Pay و Google Pay ومحافظ رقمية أخرى.',
        },
        {
          q: 'هل التبرعات معفاة من الضرائب؟',
          a: 'نعم! JHCO منظمة 501(c)(3) مسجلة. ستتلقى إيصال ضريبي منفصل كل شهر لسجلاتك الضريبية.',
        },
        {
          q: 'ماذا لو أحتاج إلى إيقاف التبرع مؤقتاً؟',
          a: 'يمكنك إيقاف التبرع الشهري لأي فترة واستئنافه متى تكون مستعداً. يسري التغيير فوراً في لوحة المعلومات الخاصة بك.',
        },
        {
          q: 'كيف أعرف أين ذهب تبرعي؟',
          a: 'انسخ إلى بوابة المتبرع في أي وقت لرؤية تقارير التأثير المفصلة ومشاهدة تحديثات الفيديو من الميدان وتتبع تأثير التبرع المحدد.',
        },
        {
          q: 'هل يمكن تخصيص التبرع لبرنامج معين؟',
          a: 'بالتأكيد! اختر من الرعاية الصحية والتعليم والأمن الغذائي والاستجابة للطوارئ وتمكين النساء والبرامج الشبابية. يمكنك أيضاً تغيير التركيز شهرياً.',
        },
        {
          q: 'هل معلومات البطاقة الخاصة بي آمنة؟',
          a: 'نعم تماماً. نستخدم تشفير SSL بمستوى 256 بت ونامتثل معايير PCI DSS Level 1. البيانات المالية الخاصة بك لا تُخزن أبداً على خوادمنا.',
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: 'لماذا يحب المتبرعون الشهريون JHCO',
      items: [
        {
          icon: '📱',
          text: 'بوابة المتبرع سهلة الاستخدام جداً. يمكنني التحقق من التأثير الخاص بي في أي وقت وتحديث تفضيلاتي ورؤية قصص حقيقية من الميدان.',
        },
        {
          icon: '🎯',
          text: 'يتيح التبرع الشهري لي أن أكون إستراتيجياً بشأن دعمي. لا أعطي فقط مرة واحدة - أنا أبني شيئاً ذا مغزى عبر الزمن.',
        },
        {
          icon: '❤️',
          text: 'الفريق يتواصل بانتظام مع تحديثات شخصية ورؤى. أشعر حقاً أنني جزء من مهمة JHCO.',
        },
        {
          icon: '🌍',
          text: 'معرفة عدد الحياة التي يؤثر بها التبرع الشهري المتسق لدي أمر محفز للغاية. الشفافية رائعة.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'ابدأ رحلة التبرع الشهري اليوم',
      subtitle: 'انضم إلى آلاف المتبرعين الملتزمين بإحداث تغيير مستدام وقابل للقياس',
      primaryButton: 'أصبح متبرعاً شهرياً',
      primaryHref: '/give/setup-monthly',
      secondaryButton: 'جدول مكالمة',
      secondaryHref: '/contact?inquiry=monthly-giving',
    },

    // Comparison Table
    comparisonTable: {
      title: 'التبرع الشهري مقابل التبرع لمرة واحدة',
      description: 'قارن تأثير الدعم المستمر',
      headers: ['الميزة', 'التبرع الشهري', 'التبرع لمرة واحدة'],
      rows: [
        ['المعالجة التلقائية', '✓', '✗'],
        ['التأثير المتوقع', '✓', '◐'],
        ['الإيصالات الضريبية الشهرية', '✓', '✗'],
        ['التقارير الشهرية المفصلة', '✓', '◐'],
        ['الجدولة المرنة', '✓', '✗'],
        ['سهل الإيقاف المؤقت/الاستئناف', '✓', '◐'],
        ['يمكن التخطيط طويل الأجل', '✓', '◐'],
        ['تكاليف إدارية أقل', '✓', '✗'],
        ['اعتراف VIP', '✓', '✗'],
        ['الانخراط المباشر مع الفريق', '✓', '✗'],
      ],
    },
  },
};

export default function MonthlyGivingPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number>(1);
  const content = monthlyGivingContent[params.locale];

  return (
    <div style={{ backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: '#ffffff',
          padding: '120px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1
            style={{
              fontSize: '64px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 800,
              marginBottom: '20px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            {content.hero.title}
          </h1>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 400,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}
          >
            {content.hero.subtitle}
          </p>
          <p
            style={{
              fontSize: '18px',
              opacity: 0.95,
              marginBottom: '0',
              letterSpacing: '0.5px',
            }}
          >
            {content.hero.overlay}
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              textAlign: 'center',
            }}
          >
            {content.overview.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '40px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 40px',
            }}
          >
            {content.overview.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {content.overview.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  boxShadow: shadows.sm,
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    color: royalColors.deepRoyal,
                    fontWeight: 600,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  ✓ {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.benefits.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 60px',
            }}
          >
            {content.benefits.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {content.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '16px',
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Plans Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.plans.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 60px',
            }}
          >
            {content.plans.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {content.plans.items.map((plan, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  border: `2px solid ${plan.color}`,
                  borderRadius: '4px',
                  boxShadow: shadows.md,
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 250ms ease-in-out',
                  transform: selectedPlan === idx ? 'translateY(-8px)' : 'translateY(0)',
                }}
                onClick={() => setSelectedPlan(idx)}
              >
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '16px',
                      backgroundColor: plan.color,
                      color: '#ffffff',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      borderRadius: '2px',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div
                  style={{
                    fontSize: '36px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 800,
                    color: plan.color,
                    marginBottom: '8px',
                  }}
                >
                  {plan.amount}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    marginBottom: '20px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {plan.frequency}
                </div>
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: royalColors.bgRefined,
                    marginBottom: '20px',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      color: royalColors.deepRoyal,
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {plan.impact}
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        fontSize: '14px',
                        color: royalColors.textSecondary,
                        padding: '8px 0',
                        borderBottom: fidx < plan.features.length - 1 ? `1px solid ${royalColors.borderSubtle}` : 'none',
                      }}
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    marginTop: '24px',
                    padding: '14px 20px',
                    backgroundColor: plan.color,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {params.locale === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.impactShowcase.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
            }}
          >
            {content.impactShowcase.subtitle}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {content.impactShowcase.stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '8px',
                    fontFamily: '"Garamond", "Georgia", serif',
                  }}
                >
                  {stat.amount}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    marginBottom: '12px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {stat.period}
                </div>
                <div
                  style={{
                    fontSize: '32px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 800,
                    color: royalColors.hashemiteGold,
                    marginBottom: '12px',
                  }}
                >
                  {stat.total}
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    color: royalColors.textSecondary,
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.howItWorks.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 60px',
            }}
          >
            {content.howItWorks.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {content.howItWorks.steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  boxShadow: shadows.sm,
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 800,
                    color: royalColors.hashemiteGold,
                    marginBottom: '12px',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.successStories.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 60px',
            }}
          >
            {content.successStories.subtitle}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {content.successStories.stories.map((story, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                    color: royalColors.deepRoyal,
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    margin: 0,
                  }}
                >
                  "{story.quote}"
                </p>
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: `1px solid ${royalColors.borderSubtle}` }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: royalColors.deepRoyal,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {story.author}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      marginTop: '4px',
                    }}
                  >
                    {story.role}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      marginTop: '2px',
                    }}
                  >
                    {story.location} • {story.duration}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: royalColors.hashemiteGold,
                      fontWeight: 600,
                      marginTop: '8px',
                    }}
                  >
                    Impact: {story.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing & Security */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.billing.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 60px',
            }}
          >
            {content.billing.subtitle}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {content.billing.info.map((info, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  boxShadow: shadows.sm,
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: '"Garamond", "Georgia", serif',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {info.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.faq.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '60px',
              lineHeight: 1.6,
            }}
          >
            {content.faq.description}
          </p>
          <div>
            {content.faq.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '16px',
                  borderBottom: `1px solid ${royalColors.borderSubtle}`,
                  paddingBottom: '20px',
                }}
              >
                <button
                  onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '18px',
                      fontFamily: '"Garamond", "Georgia", serif',
                      fontWeight: 700,
                      color: royalColors.deepRoyal,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.q}
                  </h3>
                  <span
                    style={{
                      fontSize: '24px',
                      color: royalColors.hashemiteGold,
                      marginLeft: '16px',
                      transform: expandedFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 250ms ease-in-out',
                    }}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaqIndex === idx && (
                  <p
                    style={{
                      fontSize: '15px',
                      color: royalColors.textSecondary,
                      lineHeight: 1.6,
                      padding: '16px 16px 0 16px',
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '60px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.testimonials.title}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {content.testimonials.items.map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{testimonial.icon}</div>
                <p
                  style={{
                    fontSize: '15px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: '#ffffff',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.cta.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              marginBottom: '40px',
              lineHeight: 1.6,
              opacity: 0.95,
            }}
          >
            {content.cta.subtitle}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href={content.cta.primaryHref}>
              <button
                style={{
                  padding: '16px 32px',
                  backgroundColor: royalColors.hashemiteGold,
                  color: royalColors.deepRoyal,
                  border: 'none',
                  borderRadius: '2px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease-in-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = shadows.lg;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {content.cta.primaryButton}
              </button>
            </Link>
            <Link href={content.cta.secondaryHref}>
              <button
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  borderRadius: '2px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease-in-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
                  e.currentTarget.style.color = royalColors.deepRoyal;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                {content.cta.secondaryButton}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontFamily: '"Garamond", "Georgia", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {content.comparisonTable.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            {content.comparisonTable.description}
          </p>
          <div
            style={{
              overflowX: 'auto',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '0',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: royalColors.deepRoyal }}>
                  {content.comparisonTable.headers.map((header, idx) => (
                    <th
                      key={idx}
                      style={{
                        padding: '16px',
                        color: '#ffffff',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? royalColors.bgRefined : '#ffffff',
                      borderBottom: `1px solid ${royalColors.borderSubtle}`,
                    }}
                  >
                    {row.map((cell, cidx) => (
                      <td
                        key={cidx}
                        style={{
                          padding: '16px',
                          color: cidx === 0 ? royalColors.deepRoyal : royalColors.textSecondary,
                          fontSize: '14px',
                          fontWeight: cidx === 0 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
