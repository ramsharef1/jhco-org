'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const conductContent = {
  en: {
    title: 'Code of Conduct',
    heroTitle: 'Professional Ethics & Conduct',
    heroSubtitle: 'Standards for employees, volunteers, and representatives of JHCO.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      {
        title: 'Our Code of Conduct',
        content: [
          'The Jordan Hashemite Charity Organization (JHCO) is committed to the highest standards of professional conduct and ethical behavior. This Code of Conduct applies to all employees, volunteers, contractors, board members, and representatives of JHCO.',
          'Our Code reflects our values of integrity, respect, accountability, and transparency. It guides our interactions with colleagues, beneficiaries, partners, and the public.',
        ],
      },
      {
        title: 'Core Principles',
        content: [
          'Integrity: We act with honesty and transparency in all professional dealings.',
          'Respect: We respect the dignity, rights, and diversity of all individuals.',
          'Accountability: We take responsibility for our actions and decisions.',
          'Professionalism: We maintain high standards of competence and conduct.',
          'Impartiality: We serve all individuals equitably regardless of background or status.',
          'Confidentiality: We protect sensitive information entrusted to us.',
        ],
      },
      {
        title: 'Professional Behavior',
        content: [
          'All JHCO personnel are expected to:',
          '• Treat colleagues, beneficiaries, and partners with respect and dignity',
          '• Maintain professional standards in appearance, communication, and behavior',
          '• Avoid conflicts of interest and disclose any potential conflicts',
          '• Respect cultural differences and avoid discrimination',
          '• Use organizational resources responsibly and appropriately',
          '• Comply with all applicable laws and regulations',
          '• Report misconduct through appropriate channels',
          '• Maintain confidentiality of sensitive information',
          '• Support colleagues and create an inclusive workplace environment',
        ],
      },
      {
        title: 'Discrimination and Harassment Policy',
        content: [
          'JHCO is committed to providing a workplace free from discrimination and harassment. We prohibit:',
          '• Discrimination based on race, ethnicity, gender, religion, disability, age, or sexual orientation',
          '• Sexual harassment, unwanted advances, or hostile work environment',
          '• Bullying, intimidation, or verbal abuse',
          '• Retaliation against individuals reporting misconduct',
          'All complaints will be investigated promptly and confidentially. Substantiated violations will result in appropriate disciplinary action.',
        ],
      },
      {
        title: 'Conflict of Interest',
        content: [
          'JHCO personnel must avoid situations where personal interests could compromise their professional judgment:',
          '• Do not use your position for personal financial gain',
          '• Disclose any financial interests in organizations we work with',
          '• Avoid hiring relatives or close associates in supervisory relationships',
          '• Do not accept gifts or benefits that could influence your decision-making',
          '• Recuse yourself from decisions affecting your family or close associates',
          'All conflicts of interest must be disclosed to management immediately.',
        ],
      },
      {
        title: 'Confidentiality and Data Protection',
        content: [
          'JHCO personnel are responsible for protecting confidential information:',
          '• Do not disclose beneficiary information or personal data without authorization',
          '• Protect organizational documents and intellectual property',
          '• Follow data protection policies and security protocols',
          '• Maintain confidentiality even after leaving JHCO',
          '• Report any data breaches immediately',
          'Unauthorized disclosure of confidential information may result in legal action.',
        ],
      },
      {
        title: 'Financial Integrity',
        content: [
          'JHCO maintains strict financial controls and transparency:',
          '• All expenses must be documented and justified',
          '• Do not submit false claims or receipts for reimbursement',
          '• Follow approval procedures for all financial transactions',
          '• Report any financial irregularities immediately',
          '• Do not use organizational funds for personal purposes',
          '• Cooperate fully with audits and financial reviews',
        ],
      },
      {
        title: 'Health and Safety',
        content: [
          'JHCO is committed to maintaining safe and healthy working conditions:',
          '• Report hazards, accidents, or injuries immediately',
          '• Follow all safety protocols and procedures',
          '• Use personal protective equipment as required',
          '• Do not work under the influence of drugs or alcohol',
          '• Support colleagues\' health and wellbeing',
          '• Cooperate with safety investigations and training',
        ],
      },
      {
        title: 'Social Media and Communications',
        content: [
          'Personnel must exercise professional judgment in communications:',
          '• Do not share confidential organizational information on social media',
          '• Represent JHCO respectfully in public and online',
          '• Do not engage in offensive or discriminatory social media posts',
          '• Do not harass or defame colleagues online',
          '• Clearly indicate when expressing personal opinions',
          '• Follow organizational social media policies',
        ],
      },
      {
        title: 'Reporting and Whistleblower Protection',
        content: [
          'JHCO encourages reporting of misconduct and maintains multiple confidential reporting channels:',
          '• Report to your direct supervisor or manager',
          '• Contact Human Resources or Compliance',
          '• Use the confidential ethics hotline: ethics@jhco.org',
          '• Submit anonymous reports via secure web portal',
          'JHCO protects whistleblowers from retaliation. No employee will be punished for reporting misconduct in good faith.',
          'All reports are investigated promptly and treated confidentially.',
        ],
      },
      {
        title: 'Training and Compliance',
        content: [
          'All JHCO personnel must:',
          '• Complete mandatory ethics training upon hire',
          '• Participate in annual ethics and compliance training',
          '• Acknowledge understanding of this Code of Conduct in writing',
          '• Certify compliance with organizational policies',
          '• Report any questions or concerns to management',
        ],
      },
      {
        title: 'Violations and Consequences',
        content: [
          'Violations of this Code of Conduct may result in:',
          '• Verbal or written warnings',
          '• Suspension of duties or benefits',
          '• Mandatory training or counseling',
          '• Demotion or reassignment',
          '• Termination of employment or volunteer service',
          '• Legal action and prosecution',
          'The severity of consequences depends on the nature and severity of the violation.',
        ],
      },
      {
        title: 'Acknowledgment',
        content: [
          'By working with or volunteering for JHCO, you acknowledge that you have read, understood, and agree to comply with this Code of Conduct. You are also responsible for ensuring that others are aware of these standards and for maintaining the ethical culture of JHCO.',
        ],
      },
    ],
  },
  ar: {
    title: 'مدونة السلوك',
    heroTitle: 'الأخلاقيات المهنية والسلوك',
    heroSubtitle: 'معايير للموظفين والمتطوعين وممثلي الهيئة.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      {
        title: 'مدونة السلوك لدينا',
        content: [
          'الهيئة الخيرية الأردنية الهاشمية ملتزمة بأعلى معايير السلوك المهني والسلوك الأخلاقي. تنطبق مدونة السلوك هذه على جميع الموظفين والمتطوعين والمقاولين وأعضاء مجلس الإدارة وممثلي الهيئة.',
          'تعكس مدونتنا قيمنا المتمثلة في النزاهة والاحترام والمساءلة والشفافية. فهي توجه تفاعلاتنا مع الزملاء والمستفيدين والشركاء والجمهور.',
        ],
      },
      {
        title: 'المبادئ الأساسية',
        content: [
          'النزاهة: نتصرف بصدق وشفافية في جميع التعاملات المهنية.',
          'الاحترام: نحترم كرامة وحقوق وتنوع جميع الأفراد.',
          'المساءلة: نتحمل مسؤولية أعمالنا وقراراتنا.',
          'الاحترافية: نحافظ على معايير عالية من الكفاءة والسلوك.',
          'الحياد: نخدم جميع الأفراد بإنصاف بغض النظر عن خلفيتهم أو وضعهم.',
          'السرية: نحمي المعلومات الحساسة الموكولة إلينا.',
        ],
      },
      {
        title: 'السلوك المهني',
        content: [
          'يتوقع من جميع موظفي الهيئة:',
          '• معاملة الزملاء والمستفيدين والشركاء باحترام وكرامة',
          '• الحفاظ على معايير مهنية في المظهر والتواصل والسلوك',
          '• تجنب تضارب المصالح والكشف عن أي تضارب محتمل',
          '• احترام الاختلافات الثقافية وتجنب التمييز',
          '• استخدام موارد المنظمة بمسؤولية وملاءمة',
          '• الامتثال لجميع القوانين واللوائح السارية',
          '• الإبلاغ عن سوء السلوك من خلال القنوات المناسبة',
          '• الحفاظ على سرية المعلومات الحساسة',
          '• دعم الزملاء وإنشاء بيئة عمل شاملة',
        ],
      },
      {
        title: 'سياسة عدم التمييز والتحرش',
        content: [
          'الهيئة ملتزمة بتوفير مكان عمل خالٍ من التمييز والتحرش. نحظر:',
          '• التمييز على أساس العرق أو العرق أو الجنس أو الدين أو الإعاقة أو العمر أو التوجه الجنسي',
          '• التحرش الجنسي أو المحاولات غير المرغوبة أو بيئة العمل العدائية',
          '• التنمر أو الترهيب أو الإساءة اللفظية',
          '• الانتقام ضد الأفراد الذين يبلغون عن سوء السلوك',
          'سيتم التحقيق في جميع الشكاوى بسرعة وسرية. سيؤدي الانتهاكات المؤكدة إلى اتخاذ إجراء تأديبي مناسب.',
        ],
      },
      {
        title: 'تضارب المصالح',
        content: [
          'يجب على موظفي الهيئة تجنب الحالات التي قد تضر فيها المصالح الشخصية بحكمهم المهني:',
          '• لا تستخدم موقفك لتحقيق مكاسب شخصية',
          '• كشف عن أي مصالح مالية في المنظمات التي نعمل معها',
          '• تجنب توظيف الأقارب أو المعارف القريبة في علاقات إشرافية',
          '• لا تقبل هدايا أو فوائد قد تؤثر على قرارك',
          '• انسحب من القرارات التي تؤثر على عائلتك أو المعارف القريبة',
          'يجب الكشف عن جميع تضاربات المصالح للإدارة على الفور.',
        ],
      },
      {
        title: 'السرية وحماية البيانات',
        content: [
          'يتحمل موظفو الهيئة مسؤولية حماية المعلومات السرية:',
          '• لا تكشف معلومات المستفيدين أو البيانات الشخصية بدون تفويض',
          '• حماية وثائق المنظمة والملكية الفكرية',
          '• اتبع سياسات حماية البيانات وبروتوكولات الأمان',
          '• الحفاظ على السرية حتى بعد مغادرة الهيئة',
          '• أبلغ عن أي انتهاكات البيانات على الفور',
          'قد يؤدي الكشف غير المصرح به للمعلومات السرية إلى اتخاذ إجراء قانوني.',
        ],
      },
      {
        title: 'النزاهة المالية',
        content: [
          'تحافظ الهيئة على ضوابط مالية صارمة والشفافية:',
          '• يجب توثيق جميع النفقات وتبريرها',
          '• لا تقدم مطالبات أو إيصالات كاذبة للتعويض',
          '• اتبع إجراءات الموافقة لجميع المعاملات المالية',
          '• أبلغ عن أي مخالفات مالية على الفور',
          '• لا تستخدم أموال المنظمة لأغراض شخصية',
          '• تعاون بشكل كامل مع التدقيق والمراجعات المالية',
        ],
      },
      {
        title: 'الصحة والسلامة',
        content: [
          'الهيئة ملتزمة بالحفاظ على ظروف عمل آمنة وصحية:',
          '• أبلغ عن المخاطر أو الحوادث أو الإصابات على الفور',
          '• اتبع جميع بروتوكولات وإجراءات السلامة',
          '• استخدم معدات الحماية الشخصية حسب الحاجة',
          '• لا تعمل تحت تأثير المخدرات أو الكحول',
          '• دعم صحة ورفاهية الزملاء',
          '• تعاون مع تحقيقات ودورات السلامة',
        ],
      },
      {
        title: 'وسائل التواصل الاجتماعي والاتصالات',
        content: [
          'يجب على الموظفين ممارسة الحكم المهني في الاتصالات:',
          '• لا تشارك معلومات سرية للمنظمة على وسائل التواصل الاجتماعي',
          '• تمثيل الهيئة بشكل احترافي في الأماكن العامة والإنترنت',
          '• لا تشارك في منشورات وسائل التواصل الاجتماعي المسيئة أو التمييزية',
          '• لا تضايق أو تشوه سمعة الزملاء عبر الإنترنت',
          '• بوضوح أن تعبر عن آرائك الشخصية',
          '• اتبع سياسات وسائل التواصل الاجتماعي للمنظمة',
        ],
      },
      {
        title: 'الإبلاغ وحماية المبلغين',
        content: [
          'تشجع الهيئة الإبلاغ عن سوء السلوك والحفاظ على قنوات إبلاغ سرية متعددة:',
          '• ابلغ مدير مباشر أو مدير',
          '• اتصل بالموارد البشرية أو الامتثال',
          '• استخدم خط الأخلاقيات السري: ethics@jhco.org',
          '• قدم تقارير مجهولة عبر بوابة الويب الآمنة',
          'تحمي الهيئة المبلغين من الانتقام. لن يتم معاقبة أي موظف على الإبلاغ عن سوء السلوك بحسن نية.',
          'يتم التحقيق في جميع التقارير بسرعة وتعامل سرية.',
        ],
      },
      {
        title: 'التدريب والامتثال',
        content: [
          'يجب على جميع موظفي الهيئة:',
          '• إكمال التدريب الإلزامي على الأخلاقيات عند التوظيف',
          '• المشاركة في تدريب الأخلاقيات والامتثال السنوي',
          '• الاعتراف بفهم مدونة السلوك هذه كتابياً',
          '• إثبات الامتثال لسياسات المنظمة',
          '• الإبلاغ عن أي أسئلة أو مخاوف للإدارة',
        ],
      },
      {
        title: 'الانتهاكات والعواقب',
        content: [
          'قد تؤدي انتهاكات مدونة السلوك هذه إلى:',
          '• تحذيرات شفهية أو مكتوبة',
          '• وقف الواجبات أو المزايا',
          '• التدريب الإلزامي أو الاستشارة',
          '• الحط من الرتبة أو إعادة التعيين',
          '• إنهاء التوظيف أو التطوع',
          '• إجراء قانوني ومقاضاة',
          'تعتمد شدة العواقب على طبيعة وشدة الانتهاك.',
        ],
      },
      {
        title: 'الاعتراف',
        content: [
          'بالعمل مع الهيئة أو التطوع معها، فإنك تقر بأنك قرأت وفهمت وتوافق على الامتثال لمدونة السلوك هذه. أنت أيضاً مسؤول عن ضمان أن يكون الآخرون على علم بهذه المعايير والحفاظ على الثقافة الأخلاقية للهيئة.',
        ],
      },
    ],
  },
};

export default function ConductPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = conductContent[locale] || conductContent.en;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: gradients.goldToWarm,
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: `0 0 ${spacing.md} 0`,
          }}>
            {ar ? '🤝 السلوك والأخلاقيات' : '🤝 ETHICS & CONDUCT'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.md} 0`,
            maxWidth: '800px',
            color: 'white',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.85)',
            margin: `${spacing.lg} 0 0 0`,
            opacity: 0.9,
          }}>
            {content.lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        {content.sections.map((section, idx) => (
          <div key={idx} style={{
            marginBottom: spacing.xxxl,
            padding: spacing.xl,
            background: idx % 2 === 0 ? royalColors.ivoryBg : 'white',
            borderRadius: borderRadius.lg,
            borderTop: `3px solid ${royalColors.hashemiteGold}`,
          }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: '"Merriweather", Georgia, serif',
              color: royalColors.darkNavy,
              margin: `0 0 ${spacing.lg} 0`,
              borderBottom: `2px solid ${royalColors.hashemiteGold}`,
              paddingBottom: spacing.md,
            }}>
              {section.title}
            </h2>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: royalColors.textOfficial,
                margin: `${spacing.md} 0`,
                marginLeft: ar ? '0' : (paragraph.startsWith('•') ? spacing.lg : '0'),
                marginRight: ar ? (paragraph.startsWith('•') ? spacing.lg : '0') : '0',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Footer Navigation */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: `${spacing.xxl} ${spacing.xl}`,
        borderTop: `3px solid ${royalColors.hashemiteGold}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`/${locale}`} style={{
            color: royalColors.darkNavy,
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            display: 'inline-block',
            padding: `${spacing.sm} ${spacing.lg}`,
            border: `2px solid ${royalColors.hashemiteGold}`,
            borderRadius: borderRadius.md,
            transition: 'all 0.3s',
            background: royalColors.hashemiteGold,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
            (e.currentTarget as HTMLElement).style.color = 'white';
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.darkNavy;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.hashemiteGold;
            (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.hashemiteGold;
          }}
          >
            {ar ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </section>
    </main>
  );
}
