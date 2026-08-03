'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Whistleblower Protection Policy',
    heroTitle: 'Whistleblower Protection Policy',
    heroSubtitle: 'Ensuring safe, confidential reporting of concerns and protection against retaliation',
    policyOverview: {
      title: 'Policy Overview',
      content: 'JHCO is committed to maintaining the highest standards of ethical conduct, integrity, and transparency. This policy establishes a comprehensive framework to protect individuals who report genuine concerns about potential violations of law, regulation, or organizational policy. We recognize that whistleblowers play a vital role in maintaining organizational integrity and protecting the public interest.',
    },
    protectionGuarantees: {
      title: 'Protection Guarantees',
      items: [
        {
          heading: 'Non-Retaliation Assurance',
          description: 'JHCO strictly prohibits any form of retaliation, discrimination, or adverse action against anyone who reports concerns in good faith. Protected whistleblowers cannot be terminated, demoted, suspended, threatened, harassed, or otherwise disadvantaged.',
        },
        {
          heading: 'Legal Protection Framework',
          description: 'All whistleblowers are protected under applicable local, national, and international laws. JHCO complies with anti-retaliation provisions in relevant legislation and international standards.',
        },
        {
          heading: 'Moral and Ethical Protection',
          description: 'Beyond legal requirements, JHCO commits to providing moral and ethical protection to those who report concerns. We recognize the courage required to speak out and commit to treating reporters with respect and dignity.',
        },
      ],
    },
    reportingChannels: {
      title: 'Confidential Reporting Channels',
      intro: 'Multiple secure channels are available for reporting concerns:',
      channels: [
        {
          name: 'Direct Reporting',
          description: 'Report directly to the Chief Compliance Officer or designated Ethics Officer. This channel provides immediate, personalized support and guidance.',
          contact: 'ethics@jhco.org',
        },
        {
          name: 'Confidential Hotline',
          description: 'Use our independent, 24/7 confidential hotline operated by a third-party service provider. Calls can be made anonymously and are not traced.',
          contact: 'Available in English and Arabic',
        },
        {
          name: 'Online Reporting Portal',
          description: 'Submit concerns through our secure, encrypted online portal. Anonymous submissions are accepted and protected by advanced encryption.',
          contact: 'whistleblower.jhco.org',
        },
        {
          name: 'Written Submission',
          description: 'Send written concerns to the Chief Compliance Officer by mail or email. All submissions are handled with strict confidentiality.',
          contact: 'Sealed envelope marked "Confidential - Ethics Report"',
        },
        {
          name: 'Third-Party Reporting',
          description: 'Report through an authorized legal representative or trusted advisor who can file reports on behalf of the whistleblower.',
          contact: 'Approved by Ethics Office',
        },
      ],
    },
    confidentiality: {
      title: 'Confidentiality Assurance',
      emphasis: true,
      sections: [
        {
          heading: 'Identity Protection',
          content: 'The identity of whistleblowers is treated with the utmost confidentiality. Access to identity information is strictly limited to those with a legitimate need to know. Names and identifying information are separated from the report content whenever possible.',
        },
        {
          heading: 'Documentation Security',
          content: 'All reports, evidence, and related documentation are stored securely with restricted access. Digital records are encrypted and protected by multiple layers of security. Physical records are maintained in locked, secure facilities.',
        },
        {
          heading: 'Limited Disclosure',
          content: 'Information about a report is disclosed only when necessary for conducting an investigation, protecting individuals from imminent harm, or complying with legal obligations. Any disclosure is made with the whistleblower\'s consent when possible.',
        },
        {
          heading: 'Eternal Confidentiality',
          content: 'Confidentiality protection continues indefinitely, even after an investigation concludes or employment ends. Information about reports is never shared for non-investigative purposes without explicit consent.',
        },
        {
          heading: 'Media and Public Records',
          content: 'Reporter identity is protected in all public communications and media statements. The organization does not disclose whistleblower information unless required by law or court order.',
        },
      ],
    },
    investigationProcess: {
      title: 'Investigation Process',
      intro: 'JHCO follows a structured, fair, and impartial investigation process:',
      steps: [
        {
          number: '1',
          title: 'Initial Acceptance',
          description: 'All reports are documented and assessed for relevance and jurisdiction. The whistleblower is acknowledged and informed of their rights and protections.',
        },
        {
          number: '2',
          title: 'Investigation Assignment',
          description: 'An independent investigator or investigation committee is assigned based on the nature of the concern. Investigators are trained in handling sensitive matters and protecting whistleblower confidentiality.',
        },
        {
          number: '3',
          title: 'Preliminary Assessment',
          description: 'A preliminary assessment determines the validity and urgency of the report. Immediate action is taken if there is imminent risk to safety or organizational interests.',
        },
        {
          number: '4',
          title: 'Investigation Conduct',
          description: 'A thorough, impartial investigation is conducted. The whistleblower may be interviewed, but confidentiality protections remain in place. Evidence is carefully gathered and preserved.',
        },
        {
          number: '5',
          title: 'Report Findings',
          description: 'A detailed investigation report is prepared documenting findings, conclusions, and recommended actions. The report identifies substantiated concerns and any violations.',
        },
        {
          number: '6',
          title: 'Remedial Actions',
          description: 'Appropriate corrective or disciplinary actions are implemented based on findings. These may include termination, remediation programs, policy changes, or referral to authorities.',
        },
        {
          number: '7',
          title: 'Closure Notification',
          description: 'The whistleblower is notified of investigation completion and remedial actions (within confidentiality constraints). Feedback is provided without compromising subject privacy.',
        },
      ],
    },
    retaliationProhibition: {
      title: 'Absolute Retaliation Prohibition',
      intro: 'JHCO enforces a zero-tolerance policy against retaliation:',
      prohibitions: [
        'Termination, dismissal, or non-renewal of employment',
        'Demotion or reduction in position, compensation, or benefits',
        'Suspension, exclusion, or denial of work opportunities',
        'Harassment, intimidation, or hostile work environment',
        'Negative performance reviews or evaluation actions motivated by reporting',
        'Blacklisting or damage to professional reputation',
        'Isolation from projects, teams, or workplace activities',
        'Transfer or reassignment as punishment for reporting',
        'Any other adverse employment action',
      ],
      enforcement: 'Violations of this prohibition are treated as serious misconduct subject to disciplinary action up to and including termination. Retaliation is investigated promptly and thoroughly.',
    },
    supportResources: {
      title: 'Support Resources & Assistance',
      resources: [
        {
          title: 'Counseling Services',
          description: 'Confidential counseling and psychological support services are available to whistleblowers and their families. Professional counselors can assist with stress, anxiety, or other concerns related to the reporting process.',
        },
        {
          title: 'Legal Support',
          description: 'JHCO provides or reimburses qualified legal counsel for whistleblowers facing legal challenges. Legal advisors can guide reporters through investigation and potential legal processes.',
        },
        {
          title: 'Job Security Measures',
          description: 'Job protections and security measures are implemented for whistleblowers, including priority in transfer opportunities and special consideration in organizational changes.',
        },
        {
          title: 'Financial Protection',
          description: 'In cases of economic hardship resulting from reporting, JHCO explores appropriate support mechanisms within organizational policy and legal frameworks.',
        },
        {
          title: 'Mediation Services',
          description: 'Neutral mediation services are available to resolve workplace conflicts that may arise. Professional mediators facilitate dialogue and resolution.',
        },
        {
          title: 'Regular Check-ins',
          description: 'Designated ethics officers conduct regular, confidential check-ins with whistleblowers to monitor their well-being and address any emerging concerns or retaliation.',
        },
        {
          title: 'Documentation Support',
          description: 'Assistance in documenting concerns and preparing reports is available. Trained ethics staff can help organize information and ensure complete submission.',
        },
        {
          title: 'External Resources',
          description: 'Information about external support organizations, legal aid societies, and advocacy groups is available to all whistleblowers.',
        },
      ],
    },
    goodFaith: {
      title: 'Good Faith Requirement',
      content: 'This policy protects individuals who report concerns based on a reasonable belief that the information is true. Reports made with the intent to harm, defame, or maliciously accuse others may not be protected. However, an individual is not required to prove the truth of allegations to receive protection.',
    },
    governance: {
      title: 'Policy Governance',
      items: [
        'This policy is approved and overseen by the Board of Trustees',
        'Implementation is managed by the Chief Compliance Officer and Ethics Officer',
        'Annual review ensures compliance and identifies improvements',
        'Quarterly reporting to the Audit Committee monitors reporting trends',
        'All staff receive training on whistleblower protections and reporting procedures',
        'External audits verify protection mechanisms and compliance',
      ],
    },
  },
  ar: {
    title: 'سياسة حماية المبلغين عن الانتهاكات',
    heroTitle: 'سياسة حماية المبلغين عن الانتهاكات',
    heroSubtitle: 'ضمان الإبلاغ الآمن والسري عن المخاوف والحماية من الانتقام',
    policyOverview: {
      title: 'نظرة عامة على السياسة',
      content: 'تلتزم الهيئة بالحفاظ على أعلى معايير السلوك الأخلاقي والنزاهة والشفافية. تضع هذه السياسة إطاراً شاملاً لحماية الأفراد الذين يبلغون عن المخاوف الحقيقية بشأن الانتهاكات المحتملة للقانون أو اللوائح أو سياسة المنظمة. ندرك أن المبلغين عن الانتهاكات يلعبون دوراً حيوياً في الحفاظ على نزاهة المنظمة وحماية المصلحة العامة.',
    },
    protectionGuarantees: {
      title: 'ضمانات الحماية',
      items: [
        {
          heading: 'ضمان عدم الانتقام',
          description: 'تحظر الهيئة بشدة أي شكل من أشكال الانتقام أو التمييز أو الإجراءات السلبية ضد أي شخص يبلغ عن المخاوف بحسن نية. لا يمكن إنهاء خدمة المبلغين المحميين أو تخفيض درجاتهم أو تعليق عملهم أو تهديدهم أو مضايقتهم أو الإضرار بهم بطريقة أخرى.',
        },
        {
          heading: 'إطار الحماية القانونية',
          description: 'يتمتع جميع المبلغين بالحماية بموجب القوانين المحلية والوطنية والدولية المعمول بها. تمتثل الهيئة لأحكام الحماية من الانتقام في التشريعات ذات الصلة والمعايير الدولية.',
        },
        {
          heading: 'الحماية الأخلاقية والمعنوية',
          description: 'بالإضافة إلى المتطلبات القانونية، تلتزم الهيئة بتوفير الحماية الأخلاقية والمعنوية لمن يبلغون عن المخاوف. ندرك الشجاعة المطلوبة للتحدث والالتزام بمعاملة المبلغين باحترام وكرامة.',
        },
      ],
    },
    reportingChannels: {
      title: 'قنوات الإبلاغ السرية',
      intro: 'توجد قنوات آمنة متعددة للإبلاغ عن المخاوف:',
      channels: [
        {
          name: 'الإبلاغ المباشر',
          description: 'أبلغ مباشرة إلى ضابط الامتثال الرئيسي أو ضابط الأخلاقيات المعين. توفر هذه القناة الدعم والتوجيه الفورية والشخصية.',
          contact: 'ethics@jhco.org',
        },
        {
          name: 'خط الإبلاغ السري',
          description: 'استخدم خط الإبلاغ السري المستقل والمتاح 24/7 الذي تديره جهة خدمة خارجية. يمكن إجراء المكالمات بشكل مجهول ولا يتم تتبعها.',
          contact: 'متاح باللغتين الإنجليزية والعربية',
        },
        {
          name: 'بوابة الإبلاغ الإلكترونية',
          description: 'قدم المخاوف من خلال بوابتنا الآمنة والمشفرة عبر الإنترنت. يتم قبول التقديمات المجهولة وحمايتها بالتشفير المتقدم.',
          contact: 'whistleblower.jhco.org',
        },
        {
          name: 'التقديم الكتابي',
          description: 'أرسل المخاوف الكتابية إلى ضابط الامتثال الرئيسي بالبريد أو البريد الإلكتروني. يتم التعامل مع جميع التقديمات بسرية صارمة.',
          contact: 'ظرف مختوم موضوع عليه "سري - تقرير أخلاقيات"',
        },
        {
          name: 'الإبلاغ من خلال طرف ثالث',
          description: 'أبلغ من خلال ممثل قانوني معتمد أو مستشار موثوق يمكنه تقديم التقارير نيابة عن المبلغ.',
          contact: 'معتمد من قبل مكتب الأخلاقيات',
        },
      ],
    },
    confidentiality: {
      title: 'ضمان السرية',
      emphasis: true,
      sections: [
        {
          heading: 'حماية الهوية',
          content: 'يتم التعامل مع هوية المبلغين بسرية تامة. يقتصر الوصول إلى معلومات الهوية على من لديهم حاجة شرعية للمعرفة. يتم فصل الأسماء والمعلومات المحددة للهوية عن محتوى التقرير قدر الإمكان.',
        },
        {
          heading: 'أمان التوثيق',
          content: 'يتم تخزين جميع التقارير والأدلة والوثائق ذات الصلة بشكل آمن مع إمكانية الوصول المقيدة. يتم تشفير السجلات الرقمية وحمايتها بطبقات أمان متعددة. يتم الاحتفاظ بالسجلات المادية في مرافق آمنة مقفلة.',
        },
        {
          heading: 'الإفصاح المحدود',
          content: 'يتم الإفصاح عن معلومات التقرير فقط عند الضرورة لإجراء تحقيق أو حماية الأفراد من الأذى الوشيك أو الامتثال للالتزامات القانونية. يتم أي إفصاح برضا المبلغ عند الإمكان.',
        },
        {
          heading: 'السرية الدائمة',
          content: 'تستمر حماية السرية إلى أجل غير مسمى، حتى بعد انتهاء التحقيق أو انتهاء العمل. لا يتم مشاركة المعلومات حول التقارير لأغراض غير تحقيقية دون موافقة صريحة.',
        },
        {
          heading: 'وسائل الإعلام والسجلات العامة',
          content: 'يتم حماية هوية المبلغ في جميع الاتصالات العامة والبيانات الإعلامية. لا تفصح المنظمة عن معلومات المبلغ إلا إذا كان مطلوباً بموجب القانون أو أمر من المحكمة.',
        },
      ],
    },
    investigationProcess: {
      title: 'عملية التحقيق',
      intro: 'تتبع الهيئة عملية تحقيق منظمة وعادلة وحيادية:',
      steps: [
        {
          number: '1',
          title: 'القبول الأولي',
          description: 'يتم توثيق جميع التقارير وتقييمها من حيث الصلة والاختصاص. يتم الاعتراف بالمبلغ وإبلاغه بحقوقه وحمايته.',
        },
        {
          number: '2',
          title: 'إسناد التحقيق',
          description: 'يتم إسناد محقق مستقل أو لجنة تحقيق بناءً على طبيعة المخاوف. يتدرب المحققون على التعامل مع المسائل الحساسة وحماية سرية المبلغ.',
        },
        {
          number: '3',
          title: 'التقييم الأولي',
          description: 'يحدد التقييم الأولي صحة وحجية التقرير. يتم اتخاذ إجراء فوري إذا كان هناك خطر وشيك على السلامة أو مصالح المنظمة.',
        },
        {
          number: '4',
          title: 'إجراء التحقيق',
          description: 'يتم إجراء تحقيق شامل وحيادي. قد يتم مقابلة المبلغ، لكن حماية السرية تبقى سارية. يتم جمع الأدلة وحفظها بعناية.',
        },
        {
          number: '5',
          title: 'تقرير النتائج',
          description: 'يتم إعداد تقرير تحقيق مفصل يوثق النتائج والاستنتاجات والإجراءات الموصى بها. يحدد التقرير المخاوف الثابتة والانتهاكات.',
        },
        {
          number: '6',
          title: 'الإجراءات العلاجية',
          description: 'يتم تنفيذ الإجراءات التصحيحية أو الانضباطية المناسبة بناءً على النتائج. قد تشمل هذه الإنهاء أو برامج الإصلاح أو تغييرات السياسة أو الإحالة إلى السلطات.',
        },
        {
          number: '7',
          title: 'إخطار الإغلاق',
          description: 'يتم إخطار المبلغ بانتهاء التحقيق والإجراءات العلاجية (ضمن قيود السرية). يتم تقديم التعليقات دون المساس بخصوصية الموضوع.',
        },
      ],
    },
    retaliationProhibition: {
      title: 'حظر الانتقام المطلق',
      intro: 'تطبق الهيئة سياسة عدم التسامح مطلقاً ضد الانتقام:',
      prohibitions: [
        'إنهاء الخدمة أو الفصل أو عدم تجديد العمل',
        'تخفيض الدرجة أو تقليل الراتب أو المزايا',
        'الإيقاف المؤقت أو الاستبعاد أو رفض فرص العمل',
        'المضايقة أو التخويف أو بيئة عمل معادية',
        'تقييمات الأداء السلبية أو إجراءات التقييم الناجمة عن الإبلاغ',
        'وضع على القائمة السوداء أو الإضرار بالسمعة المهنية',
        'العزل عن المشاريع أو الفرق أو أنشطة مكان العمل',
        'النقل أو إعادة التعيين كعقاب على الإبلاغ',
        'أي إجراء عمل عكسي آخر',
      ],
      enforcement: 'يتم التعامل مع انتهاكات هذا الحظر كسوء سلوك خطير يخضع لإجراء تأديبي حتى الفصل. يتم التحقيق في الانتقام بسرعة وشمولية.',
    },
    supportResources: {
      title: 'موارد وخدمات الدعم',
      resources: [
        {
          title: 'خدمات الاستشارة',
          description: 'توفر خدمات الاستشارة والدعم النفسي السري للمبلغين وأسرهم. يمكن للمستشارين المحترفين تقديم المساعدة في التوتر والقلق أو المخاوف الأخرى المتعلقة بعملية الإبلاغ.',
        },
        {
          title: 'الدعم القانوني',
          description: 'توفر الهيئة أو تعيد تمويل محام مؤهل للمبلغين الذين يواجهون تحديات قانونية. يمكن للمستشارين القانونيين توجيه المبلغين من خلال التحقيق والعمليات القانونية المحتملة.',
        },
        {
          title: 'تدابير الأمان الوظيفي',
          description: 'يتم تنفيذ تدابير حماية وأمان الوظيفة للمبلغين، بما في ذلك الأولوية في فرص النقل والاعتبار الخاص في التغييرات التنظيمية.',
        },
        {
          title: 'الحماية المالية',
          description: 'في حالات المشقة الاقتصادية الناجمة عن الإبلاغ، تستكشف الهيئة آليات الدعم المناسبة ضمن سياسة المنظمة والأطر القانونية.',
        },
        {
          title: 'خدمات الوساطة',
          description: 'توفر خدمات وساطة محايدة لتسوية النزاعات في مكان العمل. يسهل الوسطاء المحترفون الحوار والتسوية.',
        },
        {
          title: 'الفحوصات المنتظمة',
          description: 'يجري ضباط الأخلاقيات المعينون فحوصات منتظمة وسرية مع المبلغين لمراقبة رفاهيتهم ومعالجة أي مخاوف ناشئة أو انتقام.',
        },
        {
          title: 'دعم التوثيق',
          description: 'يتوفر الدعم في توثيق المخاوف وإعداد التقارير. يمكن لموظفي الأخلاقيات المدربين تنظيم المعلومات وضمان التقديم الكامل.',
        },
        {
          title: 'الموارد الخارجية',
          description: 'تتوفر معلومات حول منظمات الدعم الخارجية وجمعيات المساعدة القانونية ومجموعات الدعوة لجميع المبلغين.',
        },
      ],
    },
    goodFaith: {
      title: 'متطلب حسن النية',
      content: 'تحمي هذه السياسة الأفراد الذين يبلغون عن المخاوف على أساس معقول بأن المعلومات صحيحة. قد لا تكون التقارير المقدمة بقصد إيذاء أو تشويه سمعة أو اتهام خبيث بالآخرين محمية. ومع ذلك، لا يُطلب من الفرد إثبات صحة الاتهامات للحصول على الحماية.',
    },
    governance: {
      title: 'حوكمة السياسة',
      items: [
        'تتم الموافقة على هذه السياسة والإشراف عليها من قبل مجلس الأمناء',
        'يدير التنفيذ ضابط الامتثال الرئيسي وضابط الأخلاقيات',
        'يضمن الاستعراض السنوي الامتثال وتحديد التحسينات',
        'تراقب التقارير الفصلية إلى لجنة التدقيق اتجاهات الإبلاغ',
        'يتلقى جميع الموظفين تدريباً على حماية المبلغين وإجراءات الإبلاغ',
        'تتحقق المراجعات الخارجية من آليات الحماية والامتثال',
      ],
    },
  },
};

export default function WhistleblowerPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Governance
          </p>
          <h1 style={{
            fontSize: '64px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Policy Overview */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '40px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.policyOverview.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            lineHeight: '1.8',
            textAlign: ar ? 'right' : 'left',
            marginBottom: '0',
          }}>
            {content.policyOverview.content}
          </p>
        </div>
      </section>

      {/* Protection Guarantees */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '80px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '60px',
            textAlign: 'center',
          }}>
            {content.protectionGuarantees.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}>
            {content.protectionGuarantees.items.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {item.heading}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Channels */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '20px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.reportingChannels.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            marginBottom: '48px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.reportingChannels.intro}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {content.reportingChannels.channels.map((channel, idx) => (
              <div key={idx} style={{
                backgroundColor: royalColors.bgRefined,
                padding: '36px 28px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.hashemiteGold,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {channel.name}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.7',
                  marginBottom: '12px',
                }}>
                  {channel.description}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.hashemiteGold,
                  fontWeight: '700',
                  margin: '0',
                }}>
                  {channel.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Assurance - EMPHASIZED */}
      <section style={{
        backgroundColor: royalColors.darkNavy,
        padding: '80px 32px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.hashemiteGold,
            marginBottom: '60px',
            textAlign: 'center',
          }}>
            {content.confidentiality.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
          }}>
            {content.confidentiality.sections.map((section, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '36px 28px',
                borderRadius: '8px',
                borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
                borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.hashemiteGold,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {section.heading}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#e8e8e8',
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section style={{ padding: '80px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '20px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.investigationProcess.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            marginBottom: '48px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.investigationProcess.intro}
          </p>

          <div style={{ display: 'grid', gap: '24px' }}>
            {content.investigationProcess.steps.map((step, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: ar ? '0' : '24px',
                flexDirection: ar ? 'row-reverse' : 'row',
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
              }}>
                <div style={{
                  flex: '0 0 60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: royalColors.hashemiteGold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: royalColors.darkNavy,
                  }}>
                    {step.number}
                  </div>
                </div>
                <div style={{ flex: 1, textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    marginBottom: '8px',
                    marginTop: 0,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retaliation Prohibition */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '80px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '20px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.retaliationProhibition.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            marginBottom: '40px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.retaliationProhibition.intro}
          </p>

          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderFormal}`,
            marginBottom: '32px',
          }}>
            <ul style={{
              fontSize: '16px',
              color: royalColors.textOfficial,
              lineHeight: '2',
              paddingLeft: ar ? 0 : '32px',
              paddingRight: ar ? '32px' : 0,
              margin: 0,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.retaliationProhibition.prohibitions.map((prohibition, idx) => (
                <li key={idx}>{prohibition}</li>
              ))}
            </ul>
          </div>

          <div style={{
            backgroundColor: '#fef3e5',
            padding: '32px',
            borderRadius: '8px',
            borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
            borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
            textAlign: ar ? 'right' : 'left',
          }}>
            <p style={{
              fontSize: '16px',
              color: royalColors.darkNavy,
              lineHeight: '1.7',
              margin: 0,
              fontWeight: '600',
            }}>
              {content.retaliationProhibition.enforcement}
            </p>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '60px',
            textAlign: 'center',
          }}>
            {content.supportResources.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {content.supportResources.resources.map((resource, idx) => (
              <div key={idx} style={{
                backgroundColor: royalColors.bgRefined,
                padding: '36px 28px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.hashemiteGold,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {resource.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good Faith Section */}
      <section style={{
        backgroundColor: '#f0f7ff',
        padding: '60px 32px',
        borderLeft: ar ? 'none' : `6px solid ${royalColors.compassionTeal}`,
        borderRight: ar ? `6px solid ${royalColors.compassionTeal}` : 'none',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '24px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.goodFaith.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.8',
            textAlign: ar ? 'right' : 'left',
            margin: 0,
          }}>
            {content.goodFaith.content}
          </p>
        </div>
      </section>

      {/* Governance Section */}
      <section style={{ padding: '80px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '40px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.governance.title}
          </h2>

          <ul style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '2',
            paddingLeft: ar ? 0 : '28px',
            paddingRight: ar ? '28px' : 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.governance.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer Note */}
      <section style={{
        backgroundColor: royalColors.darkNavy,
        padding: '60px 32px',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            opacity: 0.95,
            margin: 0,
          }}>
            {ar ? 'هذه السياسة سارية المفعول اعتباراً من [التاريخ] وتطبق على جميع الموظفين والمتعاقدين والشركاء.' : 'This policy is effective as of [Date] and applies to all employees, contractors, and partners.'}
          </p>
        </div>
      </section>
    </div>
  );
}
