'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

const legacyContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Create a Lasting Legacy',
      subtitle: 'Secure Your Philanthropic Vision for Generations to Come',
      overlay: 'Transform your values into enduring impact through planned giving',
    },

    // Introduction Section
    introduction: {
      title: 'Planned Giving: Your Path to Lasting Impact',
      description: 'At the Jordan Hashemite Charity Organization, we recognize that your most meaningful gift may be one you plan thoughtfully over time. Planned giving allows you to make a significant difference while achieving your personal financial and estate planning goals.',
      benefits: [
        'Support causes you care about deeply',
        'Achieve meaningful tax advantages',
        'Preserve and grow your wealth',
        'Create a lasting family legacy',
        'Receive professional guidance throughout',
      ],
    },

    // Types of Planned Gifts Section
    giftTypes: {
      title: 'Types of Planned Gifts',
      subtitle: 'Explore the various ways you can create a legacy',
      types: [
        {
          icon: '📄',
          name: 'Bequests in Your Will',
          description: 'Leave a gift through your will or living trust. This is one of the easiest ways to support JHCO while ensuring your estate is distributed exactly as you wish.',
          features: [
            'Flexible gift amounts',
            'No income restriction',
            'Allows you to benefit family first',
            'Simple documentation process',
            'Estate tax deductible',
          ],
        },
        {
          icon: '🏛️',
          name: 'Charitable Remainder Trust (CRT)',
          description: 'Receive income for your lifetime or a specified period, with the remainder going to JHCO. This strategy provides immediate tax benefits and steady income.',
          features: [
            'Lifetime income stream',
            'Significant tax deduction',
            'Diversify appreciated assets',
            'Professional management',
            'Flexibility in income distribution',
          ],
        },
        {
          icon: '💰',
          name: 'Charitable Lead Trust (CLT)',
          description: 'Provide current income to JHCO while preserving wealth for your heirs. Ideal for minimizing estate taxes while supporting our mission.',
          features: [
            'Reduces taxable estate',
            'Supports JHCO immediately',
            'Wealth transfers to beneficiaries',
            'Customizable payment terms',
            'Protects family wealth',
          ],
        },
        {
          icon: '🛡️',
          name: 'Life Insurance Gifts',
          description: 'Designate JHCO as a beneficiary of your life insurance policy. An affordable way to create a substantial gift without impacting current cash flow.',
          features: [
            'Maximize your giving capacity',
            'Relatively low annual cost',
            'Can change beneficiaries anytime',
            'Significant tax deduction available',
            'Simple administrative process',
          ],
        },
        {
          icon: '📊',
          name: 'Donor Advised Fund (DAF)',
          description: 'Contribute appreciated assets to a fund you advise. Receive immediate tax benefits while distributing to JHCO over time.',
          features: [
            'Immediate tax deduction',
            'Investment growth tax-free',
            'Distribute at your timing',
            'Support multiple charities',
            'Simplified record-keeping',
          ],
        },
        {
          icon: '🏘️',
          name: 'Real Property Gifts',
          description: 'Donate real estate, property, or land. Your appreciated real property can provide substantial tax advantages while supporting our humanitarian mission.',
          features: [
            'Avoid capital gains tax',
            'Maximize charitable deduction',
            'Remove asset management burden',
            'Support JHCO operations',
            'Significant impact on mission',
          ],
        },
      ],
    },

    // Tax Benefits Section
    taxBenefits: {
      title: 'Tax Advantages of Planned Giving',
      subtitle: 'Understand how planned giving benefits you financially',
      benefits: [
        {
          icon: '💳',
          title: 'Immediate Tax Deduction',
          description: 'Many planned gifts provide significant federal income tax deductions in the year the gift is made, potentially reducing your tax liability by 20-60%.',
          note: 'Deduction amount varies based on gift type and asset value',
        },
        {
          icon: '📈',
          title: 'Capital Gains Tax Avoidance',
          description: 'By donating appreciated securities, real estate, or other assets, you avoid capital gains taxes while receiving a charitable deduction for the full market value.',
          note: 'No capital gains tax on appreciated assets transferred to JHCO',
        },
        {
          icon: '🏠',
          title: 'Estate Tax Reduction',
          description: 'Planned gifts reduce the size of your taxable estate, potentially saving your heirs substantial estate taxes upon your passing.',
          note: 'Estate tax exemptions may vary; consult your tax advisor',
        },
        {
          icon: '💵',
          title: 'Income Stream Benefits',
          description: 'With trusts and annuities, you receive regular income payments while enjoying tax deductions, providing cash flow throughout retirement.',
          note: 'Income amounts depend on trust structure and market performance',
        },
      ],
    },

    // Legacy Donor Circle Section
    legacyCircle: {
      title: 'The Legacy Donor Circle',
      subtitle: 'Join an Exclusive Community of Visionary Philanthropists',
      description: 'Members of the Legacy Donor Circle represent the highest level of commitment to JHCO\'s mission. These visionary philanthropists have included JHCO in their estate plans, securing transformative gifts that will impact vulnerable populations for generations to come.',
      benefits: [
        'Recognition in our Annual Legacy Circle',
        'Quarterly impact reports and updates',
        'Invitation to exclusive events',
        'Legacy giving tax consultation support',
        'Personalized impact tracking dashboard',
        'Priority access to leadership',
        'Complimentary estate planning guide',
      ],
      commitment: 'Legacy Circle members commit to planned gifts of $25,000 or more. This commitment may be fulfilled through any combination of planned giving vehicles.',
    },

    // Honor Wall Section
    honorWall: {
      title: 'Our Legacy Donors Honor Wall',
      subtitle: 'Celebrating the Vision and Generosity of Our Legacy Circle',
      description: 'These remarkable individuals and families have chosen to create lasting legacies through planned gifts to JHCO. Their vision ensures that humanitarian aid and sustainable development continue for generations to come.',
    },

    // Donor Stories Section
    stories: {
      title: 'Stories of Legacy Impact',
      subtitle: 'Hear from our Legacy Circle members',
      intro: 'These stories reveal the personal motivations and profound impact of planned giving.',
      storiesList: [
        {
          name: 'Margaret & Thomas Wilson',
          gift: 'Charitable Remainder Trust',
          story: 'After a lifelong commitment to humanitarian work, Margaret and Thomas structured a Charitable Remainder Trust that provides them retirement income while eventually supporting JHCO\'s education programs. "We wanted to ensure our values lived on after us," Margaret shares. "This trust lets us see the impact during our lifetime while creating a lasting legacy for causes we love."',
          impact: 'Their CRT is projected to contribute over $500,000 to education initiatives over 20 years.',
        },
        {
          name: 'Dr. Amira Al-Rashid',
          gift: 'Life Insurance Beneficiary',
          story: 'As a successful physician, Dr. Al-Rashid designated JHCO as the beneficiary of her life insurance policy, a decision she describes as "one of the most meaningful I\'ve made." The relatively modest annual premiums will transform into a substantial gift supporting healthcare access in vulnerable regions. "Medicine taught me that prevention and access save lives," she explains.',
          impact: 'Her policy will provide $1 million to support healthcare programs in underserved communities.',
        },
        {
          name: 'The Hassan Family Foundation',
          gift: 'Donor Advised Fund',
          story: 'The Hassan family established a Donor Advised Fund to systematically support JHCO\'s food security and livelihood programs over several decades. "We wanted flexibility to respond to emerging needs while maintaining a structured giving plan," explains family patriarch Hassan Al-Hassan. Their strategic approach has created a blueprint for multi-generational philanthropy.',
          impact: 'The foundation has committed to distributing $2 million over the next 25 years to sustainable development initiatives.',
        },
        {
          name: 'Professor Elizabeth Chen',
          gift: 'Bequest in Will',
          story: 'A longtime supporter of JHCO\'s education programs, Professor Chen recently modified her will to include a substantial bequest to establish scholarship endowments. "My academic career was enabled by scholarships and mentorship," she reflects. "I wanted to pass that opportunity forward to students who will change the world."',
          impact: 'Her estate gift will establish an endowed scholarship fund supporting 50+ students annually in perpetuity.',
        },
      ],
    },

    // Estate Planning Guidance Section
    estatePlanning: {
      title: 'Estate Planning Guidance',
      subtitle: 'Steps to Include JHCO in Your Plans',
      steps: [
        {
          number: '1',
          title: 'Evaluate Your Goals',
          description: 'Reflect on your financial priorities, legacy intentions, and philanthropic values. Consider how JHCO\'s mission aligns with your personal vision.',
        },
        {
          number: '2',
          title: 'Consult Your Advisors',
          description: 'Meet with your tax advisor, attorney, and financial planner. They can recommend strategies tailored to your specific situation and maximize tax benefits.',
        },
        {
          number: '3',
          title: 'Connect with Our Team',
          description: 'Contact our Legacy Giving Specialist to discuss options, ask questions, and receive guidance without any obligation.',
        },
        {
          number: '4',
          title: 'Document Your Intent',
          description: 'Work with your attorney to formally document your planned gift through your will, trust, or other legal vehicle.',
        },
        {
          number: '5',
          title: 'Notify JHCO',
          description: 'Inform us of your planned gift so we can recognize you, track impact, and provide ongoing stewardship.',
        },
        {
          number: '6',
          title: 'Review Periodically',
          description: 'As your circumstances change, review and update your giving plans to ensure they continue reflecting your values and goals.',
        },
      ],
    },

    // Contact Section
    contact: {
      title: 'Begin Your Legacy Journey',
      subtitle: 'Let us guide you toward meaningful impact',
      description: 'Our experienced Legacy Giving Specialist is ready to answer your questions and help you create a giving plan that reflects your values and achieves your financial goals.',
      specialist: {
        name: 'Layla Al-Mansouri',
        title: 'Director of Legacy Giving',
        bio: 'With over 18 years of experience in philanthropic planning, Layla helps donors create meaningful legacies that transform lives around the world.',
      },
      contactMethods: [
        {
          method: 'Email',
          value: 'legacy@jhco.org',
          icon: '✉️',
        },
        {
          method: 'Phone',
          value: '+962 6 463 4455 ext. 305',
          icon: '📞',
        },
        {
          method: 'Schedule Consultation',
          value: 'Via secure video or in-person',
          icon: '📅',
        },
      ],
      confidentiality: 'Your planning information is completely confidential. We maintain strict privacy standards in all legacy giving consultations.',
    },

    // CTA Section
    cta: {
      title: 'Ready to Make a Difference?',
      subtitle: 'Your legacy can transform lives for generations',
      buttons: [
        { label: 'Schedule Consultation', href: '/contact?type=legacy', icon: '📅' },
        { label: 'Download Estate Planning Guide', href: '#guide', icon: '📚' },
        { label: 'Explore Other Giving Options', href: '/give', icon: '💝' },
      ],
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          q: 'Is a minimum gift required to be recognized as a Legacy Donor?',
          a: 'Legacy Circle membership requires planned gifts of $25,000 or more, though all planned gifts of any amount are deeply valued and create meaningful impact.',
        },
        {
          q: 'Can I change my mind after making a planned gift commitment?',
          a: 'Yes, with most planned giving vehicles, you retain flexibility and can modify your gift if circumstances change. We recommend consulting your attorney about your specific situation.',
        },
        {
          q: 'How long does the process take?',
          a: 'The timeline varies depending on the type of gift and your circumstances. Simple bequests can be arranged in weeks, while more complex trusts may take several months. We guide you through each step.',
        },
        {
          q: 'What happens if I need access to my assets?',
          a: 'Many planned giving strategies preserve significant access to your resources. For example, Charitable Remainder Trusts provide income to you, and Donor Advised Funds remain in your control.',
        },
        {
          q: 'How can I learn about tax deductions for my specific situation?',
          a: 'We recommend consulting with your tax advisor or CPA about deductions available for your particular planned gift. We\'re happy to provide documentation and information to support those discussions.',
        },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'خلق إرث دائم',
      subtitle: 'تأمين رؤيتك الخيرية للأجيال القادمة',
      overlay: 'تحويل قيمك إلى تأثير دائم من خلال الهبات المخطط لها',
    },

    // Introduction Section
    introduction: {
      title: 'الهبات المخطط لها: طريقك نحو تأثير دائم',
      description: 'في الهيئة الخيرية الأردنية الهاشمية، ندرك أن أكثر هباتك معنى قد تكون تلك التي تخطط لها بعناية على مدار الوقت. تتيح لك الهبات المخطط لها إحداث فرق كبير مع تحقيق أهدافك المالية والتخطيطية العقارية الشخصية.',
      benefits: [
        'دعم الأسباب التي تهتم بها بعمق',
        'تحقيق مزايا ضريبية كبيرة',
        'الحفاظ على الثروة ونموها',
        'خلق إرث عائلي دائم',
        'تلقي التوجيه المهني في جميع أنحاء العملية',
      ],
    },

    // Types of Planned Gifts Section
    giftTypes: {
      title: 'أنواع الهبات المخطط لها',
      subtitle: 'استكشف الطرق المختلفة لخلق إرث',
      types: [
        {
          icon: '📄',
          name: 'الهبات في وصيتك',
          description: 'اترك هبة من خلال وصيتك أو الثقة الحية. هذه واحدة من أسهل الطرق لدعم الهيئة الخيرية مع ضمان توزيع تركتك بالضبط كما تريد.',
          features: [
            'مبالغ هبة مرنة',
            'لا توجد قيود على الدخل',
            'يسمح لك بالاستفادة من الأسرة أولاً',
            'عملية توثيق بسيطة',
            'معفاة من الضرائب العقارية',
          ],
        },
        {
          icon: '🏛️',
          name: 'الثقة الخيرية المتبقية (CRT)',
          description: 'احصل على دخل مدى الحياة أو لفترة محددة، مع ذهاب الباقي إلى الهيئة الخيرية. تقدم هذه الاستراتيجية فوائد ضريبية فورية ودخل ثابت.',
          features: [
            'تدفق دخل مدى الحياة',
            'خصم ضريبي كبير',
            'تنويع الأصول ذات التقدير',
            'إدارة احترافية',
            'المرونة في توزيع الدخل',
          ],
        },
        {
          icon: '💰',
          name: 'الثقة الخيرية الرئيسية (CLT)',
          description: 'توفير دخل حالي للهيئة الخيرية مع الحفاظ على الثروة لورثتك. مثالي لتقليل ضرائب العقارات مع دعم مهمتنا.',
          features: [
            'تقليل التركة الخاضعة للضريبة',
            'دعم الهيئة الخيرية الفوري',
            'نقل الثروة للمستفيدين',
            'شروط دفع قابلة للتخصيص',
            'حماية ثروة الأسرة',
          ],
        },
        {
          icon: '🛡️',
          name: 'هبات التأمين على الحياة',
          description: 'عيّن الهيئة الخيرية كمستفيدة من بوليصة التأمين على حياتك. طريقة ميسورة التكلفة لإنشاء هبة كبيرة دون التأثير على التدفق النقدي الحالي.',
          features: [
            'زيادة قدرتك على العطاء',
            'تكلفة سنوية منخفضة نسبياً',
            'يمكنك تغيير المستفيدين في أي وقت',
            'الخصم الضريبي الكبير متاح',
            'عملية إدارية بسيطة',
          ],
        },
        {
          icon: '📊',
          name: 'صندوق الموصي به (DAF)',
          description: 'ساهم بالأصول المقدرة في صندوق تنصحه. احصل على خصم ضريبي فوري مع التوزيع على الهيئة الخيرية بمرور الوقت.',
          features: [
            'خصم ضريبي فوري',
            'نمو الاستثمار معفى من الضرائب',
            'التوزيع في توقيتك',
            'دعم جمعيات خيرية متعددة',
            'حفظ السجلات المبسط',
          ],
        },
        {
          icon: '🏘️',
          name: 'هبات الممتلكات العقارية',
          description: 'تبرع بالعقارات أو الممتلكات أو الأراضي. يمكن لممتلكاتك العقارية المقدرة أن توفر مزايا ضريبية كبيرة مع دعم مهمتنا الإنسانية.',
          features: [
            'تجنب ضريبة الأرباح الرأسمالية',
            'تعظيم الخصم الخيري',
            'إزالة عبء إدارة الأصول',
            'دعم عمليات الهيئة الخيرية',
            'تأثير كبير على المهمة',
          ],
        },
      ],
    },

    // Tax Benefits Section
    taxBenefits: {
      title: 'المزايا الضريبية للهبات المخطط لها',
      subtitle: 'فهم كيفية استفادتك من الهبات المخطط لها مالياً',
      benefits: [
        {
          icon: '💳',
          title: 'خصم ضريبي فوري',
          description: 'توفر العديد من الهبات المخطط لها خصومات ضريبية فيدرالية كبيرة على الدخل في السنة التي يتم فيها تقديم الهبة، مما قد يقلل التزاماتك الضريبية بنسبة 20-60٪.',
          note: 'يختلف مبلغ الخصم بناءً على نوع الهبة وقيمة الأصول',
        },
        {
          icon: '📈',
          title: 'تجنب ضريبة الأرباح الرأسمالية',
          description: 'بالتبرع بالأوراق المالية أو العقارات أو الأصول الأخرى ذات التقدير، تتجنب ضرائب الأرباح الرأسمالية مع تلقي خصم خيري عن القيمة السوقية الكاملة.',
          note: 'لا توجد ضريبة أرباح رأسمالية على الأصول المقدرة المحولة إلى الهيئة الخيرية',
        },
        {
          icon: '🏠',
          title: 'تقليل ضريبة العقارات',
          description: 'تقلل الهبات المخطط لها من حجم تركتك الخاضعة للضريبة، مما قد يوفر لورثتك ضرائب عقارية كبيرة عند وفاتك.',
          note: 'قد تختلف إعفاءات ضريبة العقارات؛ استشر مستشارك الضريبي',
        },
        {
          icon: '💵',
          title: 'مزايا تدفق الدخل',
          description: 'مع الثقات والأقساط السنوية، تتلقى دفعات دخل منتظمة مع الاستمتاع بخصومات ضريبية، مما يوفر تدفق نقدي طوال التقاعد.',
          note: 'تعتمد المبالغ على هيكل الثقة وأداء السوق',
        },
      ],
    },

    // Legacy Donor Circle Section
    legacyCircle: {
      title: 'دائرة المانحين الموروثين',
      subtitle: 'انضم إلى مجتمع حصري من رجال الأعمال الخيريين الرؤيويين',
      description: 'يمثل أعضاء دائرة المانحين الموروثين أعلى مستوى من الالتزام برسالة الهيئة الخيرية. اختار هؤلاء الفلاسفة الرؤيويون للهيئة الخيرية في خططهم العقارية، مما يضمن هبات تحويلية ستؤثر على السكان الضعفاء لأجيال قادمة.',
      benefits: [
        'الاعتراف في دائرة الموروثين السنوية',
        'تقارير التأثير والتحديثات ربع السنوية',
        'الدعوة إلى الأحداث الحصرية',
        'دعم استشارة ضريبة الهبة الموروثة',
        'لوحة تتبع التأثير المخصصة',
        'الوصول الأولوي للقيادة',
        'دليل التخطيط العقاري المجاني',
      ],
      commitment: 'يلتزم أعضاء دائرة الموروثين بهبات مخطط لها بقيمة 25000 دولار أو أكثر. قد يتم تحقيق هذا الالتزام من خلال أي مزيج من آليات الهبة المخطط لها.',
    },

    // Honor Wall Section
    honorWall: {
      title: 'جدار الشرف للمانحين الموروثين',
      subtitle: 'الاحتفاء برؤية وسخاء دائرة الموروثين',
      description: 'اختار هؤلاء الأفراد والعائلات الرائعون خلق إرث دائم من خلال الهبات المخطط لها للهيئة الخيرية. رؤيتهم تضمن أن المساعدات الإنسانية والتنمية المستدامة تستمر لأجيال قادمة.',
    },

    // Donor Stories Section
    stories: {
      title: 'قصص تأثير الإرث',
      subtitle: 'استمع من أعضاء دائرة الموروثين لدينا',
      intro: 'تكشف هذه القصص الحوافز الشخصية والتأثير العميق للهبات المخطط لها.',
      storiesList: [
        {
          name: 'مارجريت وتوماس ويلسون',
          gift: 'الثقة الخيرية المتبقية',
          story: 'بعد التزام دائم بالعمل الإنساني، قام مارجريت وتوماس بتنظيم ثقة خيرية متبقية توفر لهما دخل التقاعد مع دعم برامج تعليم الهيئة الخيرية في النهاية. "أردنا التأكد من أن قيمنا استمرت بعدنا،" تقول مارجريت. "تسمح لنا هذه الثقة برؤية التأثير خلال حياتنا مع خلق إرث دائم للأسباب التي نحبها."',
          impact: 'يُتوقع أن يساهم صندوقهم بأكثر من 500000 دولار لمبادرات التعليم على مدار 20 سنة.',
        },
        {
          name: 'د. أميرة الراشد',
          gift: 'المستفيد من التأمين على الحياة',
          story: 'كطبيبة ناجحة، عينت د. الراشد الهيئة الخيرية كمستفيدة من بوليصة التأمين على حياتها، وهي قرار تصفه بأنه "أحد أكثر القرارات معنى التي اتخذتها". ستتحول الأقساط السنوية المتواضعة نسبياً إلى هبة جوهرية تدعم الوصول الطبي في المناطق الضعيفة. "علمتني الطب أن الوقاية والوصول ينقذان الأرواح،" تشرح.',
          impact: 'ستوفر بوليصتها 1 مليون دولار لدعم برامج الرعاية الصحية في المجتمعات المحرومة.',
        },
        {
          name: 'مؤسسة عائلة الحسن',
          gift: 'صندوق الموصي به',
          story: 'أنشأت عائلة الحسن صندوق موصى به لدعم برامج الأمن الغذائي والسبل الكفيفة للهيئة الخيرية على مدار عقود عديدة. "أردنا المرونة للرد على الاحتياجات الناشئة مع الحفاظ على خطة إعطاء منظمة،" يشرح الأب الأسرى الحسن. قد يكون نهجهم الاستراتيجي بمثابة نموذج للعطاء متعدد الأجيال.',
          impact: 'التزمت المؤسسة بتوزيع 2 مليون دولار على مدار الـ 25 سنة القادمة لمبادرات التنمية المستدامة.',
        },
        {
          name: 'الأستاذ اليزابيث تشين',
          gift: 'الوصية في الوصية',
          story: 'كمؤيد دائم لبرامج التعليم في الهيئة الخيرية، قامت الأستاذ تشين مؤخراً بتعديل وصيتها لتضمين وصية جوهرية لإنشاء أموال منح دراسية بتمويل دائم. "تم تمكين مساري الأكاديمي من خلال المنح الدراسية والإرشاد،" تتأمل. "أردت تمرير هذه الفرصة إلى الأمام للطلاب الذين سيغيرون العالم."',
          impact: 'ستنشئ هبة تركتها صندوق منح دراسية بتمويل دائم يدعم 50+ طالب سنوياً في الأبد.',
        },
      ],
    },

    // Estate Planning Guidance Section
    estatePlanning: {
      title: 'إرشادات التخطيط العقاري',
      subtitle: 'خطوات لإدراج الهيئة الخيرية في خططك',
      steps: [
        {
          number: '1',
          title: 'تقييم أهدافك',
          description: 'تأمل في أولويتك المالية ونواياك الموروثة وقيمك الخيرية. فكر في كيفية توافق مهمة الهيئة الخيرية مع رؤيتك الشخصية.',
        },
        {
          number: '2',
          title: 'استشر المستشارين',
          description: 'التقِ بمستشارك الضريبي والمحامي والمخطط المالي. يمكنهم التوصية باستراتيجيات مخصصة لموقفك المحدد وتعظيم الفوائد الضريبية.',
        },
        {
          number: '3',
          title: 'اتصل بفريقنا',
          description: 'اتصل بمتخصص الهبة الموروثة لدينا لمناقشة الخيارات والإجابة على الأسئلة وتلقي التوجيه دون أي التزام.',
        },
        {
          number: '4',
          title: 'وثق نيتك',
          description: 'العمل مع محاميك لتوثيق هبتك المخطط لها رسمياً من خلال وصيتك أو ثقتك أو وسيلة قانونية أخرى.',
        },
        {
          number: '5',
          title: 'أخبر الهيئة الخيرية',
          description: 'أخبرنا عن هبتك المخطط لها حتى نتمكن من الاعتراف بك وتتبع التأثير وتقديم الرعاية المستمرة.',
        },
        {
          number: '6',
          title: 'مراجعة دورية',
          description: 'مع تغير ظروفك، راجع وحدّث خطط إعطائك للتأكد من استمرار عكسها لقيمك وأهدافك.',
        },
      ],
    },

    // Contact Section
    contact: {
      title: 'ابدأ رحلة إرثك',
      subtitle: 'دعنا نرشدك نحو تأثير ذي مغزى',
      description: 'متخصص الهبة الموروثة ذو الخبرة لدينا مستعد للإجابة على أسئلتك ومساعدتك في إنشاء خطة إعطاء تعكس قيمك وتحقق أهدافك المالية.',
      specialist: {
        name: 'ليلى المنصوري',
        title: 'مديرة الهبات الموروثة',
        bio: 'مع أكثر من 18 سنة من الخبرة في التخطيط الخيري، تساعد ليلى المانحين على خلق إرث ذي مغزى يغير الحياة حول العالم.',
      },
      contactMethods: [
        {
          method: 'البريد الإلكتروني',
          value: 'legacy@jhco.org',
          icon: '✉️',
        },
        {
          method: 'الهاتف',
          value: '+962 6 463 4455 ext. 305',
          icon: '📞',
        },
        {
          method: 'جدولة الاستشارة',
          value: 'عبر الفيديو الآمن أو وجهاً لوجه',
          icon: '📅',
        },
      ],
      confidentiality: 'معلومات التخطيط الخاصة بك سرية تماماً. نحتفظ بمعايير خصوصية صارمة في جميع استشارات الهبات الموروثة.',
    },

    // CTA Section
    cta: {
      title: 'هل أنت مستعد لإحداث فرق؟',
      subtitle: 'يمكن لإرثك تحويل الحياة لأجيال',
      buttons: [
        { label: 'جدولة الاستشارة', href: '/contact?type=legacy', icon: '📅' },
        { label: 'تنزيل دليل التخطيط العقاري', href: '#guide', icon: '📚' },
        { label: 'استكشف خيارات الإعطاء الأخرى', href: '/give', icon: '💝' },
      ],
    },

    // FAQ Section
    faq: {
      title: 'الأسئلة الشائعة',
      questions: [
        {
          q: 'هل يلزم الحد الأدنى للهبة للاعتراف كمانح موروث؟',
          a: 'يتطلب عضوية دائرة الموروثين هبات مخطط لها بقيمة 25000 دولار أو أكثر، على الرغم من أن جميع الهبات المخطط لها بأي مبلغ تُقدر بعمق وتخلق تأثيراً ذا معنى.',
        },
        {
          q: 'هل يمكنني تغيير رأيي بعد الالتزام بهبة مخطط لها؟',
          a: 'نعم، مع معظم آليات الهبة المخطط لها، تحتفظ بالمرونة ويمكنك تعديل هبتك إذا تغيرت ظروفك. نوصيك باستشارة محاميك حول موقفك المحدد.',
        },
        {
          q: 'كم من الوقت تستغرق العملية؟',
          a: 'يختلف الجدول الزمني حسب نوع الهبة وظروفك. يمكن ترتيب الوصايا البسيطة في غضون أسابيع، بينما قد تستغرق الثقات الأكثر تعقيداً عدة أشهر. نحن نرشدك في كل خطوة.',
        },
        {
          q: 'ماذا يحدث إذا احتجت إلى الوصول إلى أصولي؟',
          a: 'تحافظ العديد من استراتيجيات الهبة المخطط لها على وصول كبير إلى مواردك. على سبيل المثال، توفر الثقات الخيرية المتبقية دخلاً لك، وتبقى الصناديق الموصى بها تحت سيطرتك.',
        },
        {
          q: 'كيف يمكنني تعلم الخصومات الضريبية لموقفي المحدد؟',
          a: 'نوصيك باستشارة مستشارك الضريبي أو المحاسب العام حول الخصومات المتاحة لهبتك المخطط لها المعينة. نحن سعداء بتوفير الوثائق والمعلومات لدعم هذه النقاشات.',
        },
      ],
    },
  },
};

// Honor Wall Data - Dummy Names
const honorWallDonors = [
  { name: 'The Rahmani Family', since: 2015 },
  { name: 'Dr. Youssef Al-Kareem', since: 2018 },
  { name: 'Ambassador Margaret Richardson', since: 2016 },
  { name: 'The Hassan Endowment Fund', since: 2017 },
  { name: 'Professor Mohammad Al-Rashid', since: 2019 },
  { name: 'Lady Catherine Von Berger', since: 2014 },
  { name: 'The Al-Mansouri Charitable Foundation', since: 2020 },
  { name: 'Dr. James Patterson', since: 2018 },
];

export default function LegacyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = legacyContent[locale] || legacyContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepPurple} 100%)`,
        color: 'white',
        padding: '140px 32px',
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
            👑 {ar ? 'الهبات المخطط لها' : 'PLANNED GIVING'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: 'Garamond, serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            maxWidth: '900px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {content.hero.title}
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#f0f0f0',
            margin: '0 0 12px 0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.hero.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            margin: '24px 0 0 0',
            fontStyle: 'italic',
          }}>
            {content.hero.overlay}
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
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
            margin: '0 0 16px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.introduction.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            margin: '0 0 32px 0',
            maxWidth: '900px',
            lineHeight: '1.8',
          }}>
            {content.introduction.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ar ? 'repeat(auto-fit, minmax(220px, 1fr))' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: '32px',
          }}>
            {content.introduction.benefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: `${royalColors.hashemiteGold}12`,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `3px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `3px solid ${royalColors.hashemiteGold}` : 'none',
                textAlign: textAlign as any,
              }}>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.darkNavy,
                  margin: '0',
                  fontWeight: '600',
                  lineHeight: '1.6',
                }}>
                  ✓ {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TYPES OF PLANNED GIFTS */}
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
            {content.giftTypes.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.giftTypes.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}>
            {content.giftTypes.types.map((gift, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: shadows.md,
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                  textAlign: 'left' as any,
                }}>
                  {gift.icon}
                </div>
                <h4 style={{
                  fontSize: '20px',
                  color: royalColors.darkNavy,
                  margin: '0 0 12px 0',
                  fontWeight: '700',
                }}>
                  {gift.name}
                </h4>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  margin: '0 0 16px 0',
                  lineHeight: '1.7',
                }}>
                  {gift.description}
                </p>
                <div style={{
                  borderTop: `1px solid ${royalColors.borderFormal}`,
                  paddingTop: '16px',
                  marginTop: '16px',
                }}>
                  {gift.features.map((feature, fidx) => (
                    <p key={fidx} style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      margin: fidx === 0 ? '0 0 8px 0' : '8px 0',
                      paddingLeft: ar ? '0' : '20px',
                      paddingRight: ar ? '20px' : '0',
                      position: 'relative',
                    }}>
                      {!ar && <span style={{ position: 'absolute', left: '0' }}>•</span>}
                      {ar && <span style={{ position: 'absolute', right: '0' }}>•</span>}
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAX BENEFITS SECTION */}
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
            {content.taxBenefits.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.taxBenefits.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.taxBenefits.benefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${benefit.icon === '💳' ? royalColors.compassionTeal : benefit.icon === '📈' ? royalColors.impactGreen : benefit.icon === '🏠' ? royalColors.charityRed : royalColors.skyBlue}12`,
                borderRadius: '0px',
                border: `2px solid ${benefit.icon === '💳' ? royalColors.compassionTeal : benefit.icon === '📈' ? royalColors.impactGreen : benefit.icon === '🏠' ? royalColors.charityRed : royalColors.skyBlue}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                  textAlign: 'left' as any,
                }}>
                  {benefit.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: benefit.icon === '💳' ? royalColors.compassionTeal : benefit.icon === '📈' ? royalColors.impactGreen : benefit.icon === '🏠' ? royalColors.charityRed : royalColors.skyBlue,
                  margin: '0 0 12px 0',
                  fontWeight: '700',
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0 0 12px 0',
                  lineHeight: '1.6',
                }}>
                  {benefit.description}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  fontStyle: 'italic',
                  paddingTop: '12px',
                  borderTop: `1px solid ${royalColors.borderFormal}`,
                }}>
                  {benefit.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEGACY DONOR CIRCLE */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy}08 0%, ${royalColors.hashemiteGold}08 100%)`,
        textAlign: textAlign as any,
        direction,
        borderTop: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            👑 {ar ? 'الامتياز والاعتراف' : 'PRIVILEGE & RECOGNITION'}
          </p>
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
            {content.legacyCircle.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 12px 0',
            maxWidth: '800px',
          }}>
            {content.legacyCircle.subtitle}
          </p>
          <p style={{
            fontSize: '15px',
            color: royalColors.textOfficial,
            margin: '0 0 32px 0',
            maxWidth: '800px',
            lineHeight: '1.8',
          }}>
            {content.legacyCircle.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {content.legacyCircle.benefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '16px',
                background: 'white',
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `2px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `2px solid ${royalColors.hashemiteGold}` : 'none',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.darkNavy,
                  margin: '0',
                  fontWeight: '600',
                }}>
                  ✨ {benefit}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            padding: '24px',
            background: 'white',
            borderRadius: '0px',
            border: `2px solid ${royalColors.hashemiteGold}`,
          }}>
            <p style={{
              fontSize: '15px',
              color: royalColors.darkNavy,
              margin: '0',
              lineHeight: '1.7',
              fontWeight: '600',
            }}>
              {content.legacyCircle.commitment}
            </p>
          </div>
        </div>
      </section>

      {/* 6. HONOR WALL */}
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
            {content.honorWall.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 12px 0',
            maxWidth: '800px',
          }}>
            {content.honorWall.subtitle}
          </p>
          <p style={{
            fontSize: '15px',
            color: royalColors.textOfficial,
            margin: '0 0 48px 0',
            maxWidth: '800px',
            lineHeight: '1.7',
          }}>
            {content.honorWall.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {honorWallDonors.map((donor, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: shadows.md,
                borderTop: `4px solid ${royalColors.hashemiteGold}`,
                textAlign: textAlign as any,
              }}>
                <p style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '700',
                }}>
                  {donor.name}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.hashemiteGold,
                  margin: '0',
                  fontWeight: '600',
                }}>
                  {ar ? `منذ ${donor.since}` : `Since ${donor.since}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DONOR STORIES */}
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
            {content.stories.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 12px 0',
          }}>
            {content.stories.subtitle}
          </p>
          <p style={{
            fontSize: '15px',
            color: royalColors.textOfficial,
            margin: '0 0 48px 0',
            maxWidth: '700px',
            lineHeight: '1.7',
          }}>
            {content.stories.intro}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
          }}>
            {content.stories.storiesList.map((story, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: `${idx % 2 === 0 ? royalColors.hashemiteGold : royalColors.compassionTeal}08`,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `4px solid ${idx % 2 === 0 ? royalColors.hashemiteGold : royalColors.compassionTeal}`,
                borderRight: ar ? `4px solid ${idx % 2 === 0 ? royalColors.hashemiteGold : royalColors.compassionTeal}` : 'none',
                textAlign: textAlign as any,
              }}>
                <h4 style={{
                  fontSize: '20px',
                  color: royalColors.darkNavy,
                  margin: '0 0 4px 0',
                  fontWeight: '700',
                }}>
                  {story.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: idx % 2 === 0 ? royalColors.hashemiteGold : royalColors.compassionTeal,
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                }}>
                  {story.gift}
                </p>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  margin: '0 0 12px 0',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}>
                  "{story.story}"
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  paddingTop: '12px',
                  borderTop: `1px solid ${royalColors.borderFormal}`,
                }}>
                  <strong>{ar ? 'التأثير المتوقع:' : 'Expected Impact:'}</strong> {story.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ESTATE PLANNING GUIDANCE */}
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
            {content.estatePlanning.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.estatePlanning.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.estatePlanning.steps.map((step, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: shadows.md,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: royalColors.hashemiteGold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    color: 'white',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}>
                    {step.number}
                  </div>
                  <h4 style={{
                    fontSize: '18px',
                    color: royalColors.darkNavy,
                    margin: '0',
                    fontWeight: '700',
                  }}>
                    {step.title}
                  </h4>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: '0',
                  lineHeight: '1.7',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 100%)`,
        color: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textAlign: textAlign as any,
          }}>
            {content.contact.title}
          </h2>
          <p style={{
            fontSize: '20px',
            color: royalColors.hashemiteGold,
            margin: '0 0 24px 0',
            fontWeight: '600',
            textAlign: textAlign as any,
          }}>
            {content.contact.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            margin: '0 0 40px 0',
            maxWidth: '700px',
            lineHeight: '1.8',
            textAlign: textAlign as any,
          }}>
            {content.contact.description}
          </p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '32px',
            borderRadius: '0px',
            marginBottom: '40px',
            borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
            borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
            textAlign: textAlign as any,
          }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              textAlign: 'left' as any,
            }}>
              👤
            </div>
            <h4 style={{
              fontSize: '20px',
              margin: '0 0 4px 0',
              fontWeight: '700',
            }}>
              {content.contact.specialist.name}
            </h4>
            <p style={{
              fontSize: '15px',
              color: royalColors.hashemiteGold,
              margin: '0 0 12px 0',
              fontWeight: '600',
            }}>
              {content.contact.specialist.title}
            </p>
            <p style={{
              fontSize: '14px',
              margin: '0',
              lineHeight: '1.6',
              opacity: 0.95,
            }}>
              {content.contact.specialist.bio}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}>
            {content.contact.contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.method === 'Email' || method.method === 'البريد الإلكتروني' ? `mailto:${method.value}` : method.method.includes('Phone') || method.method.includes('الهاتف') ? `tel:${method.value.replace(/[^0-9+]/g, '')}` : '#'}
                style={{
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '0px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s',
                  borderBottom: `2px solid ${royalColors.hashemiteGold}`,
                  textAlign: textAlign as any,
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.25)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                  {method.icon}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
                  {method.method}
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          <p style={{
            fontSize: '14px',
            margin: '0',
            fontStyle: 'italic',
            opacity: 0.9,
            paddingTop: '24px',
            borderTop: 'rgba(255, 255, 255, 0.2) 1px solid',
            textAlign: textAlign as any,
          }}>
            🔒 {content.contact.confidentiality}
          </p>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 48px 0',
            textAlign: textAlign as any,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.faq.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {content.faq.questions.map((item, idx) => (
              <details key={idx} style={{
                padding: '24px',
                background: royalColors.ivoryBg,
                borderRadius: '0px',
                borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
                cursor: 'pointer',
              }}>
                <summary style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  outline: 'none',
                  userSelect: 'none',
                  textAlign: textAlign as any,
                }}>
                  {item.q}
                </summary>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  margin: '16px 0 0 0',
                  lineHeight: '1.7',
                  textAlign: textAlign as any,
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CALL-TO-ACTION */}
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
            color: '#f0f0f0',
          }}>
            {content.cta.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
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
