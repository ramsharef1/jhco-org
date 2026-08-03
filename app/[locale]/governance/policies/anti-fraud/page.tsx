'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import Link from 'next/link';

const pageContent = {
  en: {
    title: 'Anti-Fraud Policy',
    heroTitle: 'Anti-Fraud Policy',
    heroSubtitle: 'Comprehensive framework to prevent, detect, and respond to fraudulent activities within JHCO',
    sections: [
      {
        title: 'Policy Overview',
        icon: '📋',
        content: `JHCO is committed to maintaining the highest standards of integrity and transparency. This Anti-Fraud Policy establishes guidelines and procedures to prevent, detect, and address fraudulent activities that could compromise our organizational integrity, financial resources, or stakeholder trust. Fraud is defined as any intentional act or omission designed to deceive or mislead, resulting in unauthorized benefit or loss to JHCO or its stakeholders.

All employees, board members, contractors, volunteers, and partners are expected to adhere to this policy and report suspected fraud immediately.`,
      },
      {
        title: 'Risk Management Framework',
        icon: '🛡️',
        content: `JHCO implements a comprehensive risk management framework to identify and mitigate fraud risks:

• Regular Risk Assessment: Quarterly fraud risk assessments identify vulnerable processes, high-value transactions, and areas requiring enhanced controls
• Risk Categorization: Risks are classified by likelihood and impact (financial, reputational, operational)
• Mitigation Strategies: Specific controls are implemented for identified risks, with continuous monitoring
• Documentation: All risk assessments and mitigation strategies are documented and reviewed by the audit committee
• Stakeholder Communication: Management and board oversight ensure awareness of fraud risks across the organization`,
      },
      {
        title: 'Internal Controls',
        icon: '🔐',
        content: `JHCO maintains robust internal controls to prevent and detect fraud:

Financial Controls:
• Segregation of duties in financial transactions (approval, authorization, recording, reconciliation)
• Dual approval requirements for transactions exceeding established thresholds
• Monthly bank reconciliations performed by personnel independent of transaction processing
• Regular review of account reconciliations by supervisory personnel

Operational Controls:
• Asset management and inventory tracking systems with regular physical counts
• Access controls limiting employee access to systems and records based on job responsibilities
• Surprise audits and random sampling of transactions to detect anomalies
• Regular testing of critical systems and processes

Information Technology Controls:
• System access logging with audit trails for all financial and operational systems
• Password management and multi-factor authentication requirements
• Regular security updates and vulnerability assessments
• Restricted access to sensitive data with need-to-know basis principle
• Backup systems and disaster recovery procedures`,
      },
      {
        title: 'Staff Training Requirements',
        icon: '📚',
        content: `JHCO requires comprehensive fraud awareness training for all personnel:

Mandatory Training:
• All new employees must complete anti-fraud training within 30 days of hire
• Annual refresher training for all staff members is mandatory
• Board members receive specialized governance and fraud oversight training annually
• Contractors and volunteers working with financial or sensitive data receive targeted training

Training Content Covers:
• Definition and types of fraud (embezzlement, falsification of records, unauthorized transactions)
• Common fraud schemes and red flags
• The organization's fraud prevention policies and reporting procedures
• Ethical decision-making and handling of conflicts of interest
• Whistleblower protections and confidentiality assurances
• Consequences of fraudulent behavior

Training Delivery:
• In-person training sessions with discussion and case studies
• Online modules for ongoing accessibility and reference
• Department-specific training addressing role-specific fraud risks
• Documentation of all training attendance and completion`,
      },
      {
        title: 'Reporting Procedures',
        icon: '📞',
        content: `JHCO provides multiple confidential channels for reporting suspected fraud:

Reporting Channels:
1. Direct Report: Employees may report to their immediate supervisor or department manager
2. Anonymous Hotline: A confidential fraud hotline (1-800-JHCO-FRAUD) is available 24/7 for anonymous reporting
3. Email: Confidential reports can be sent to fraud.reporting@jhco.org
4. In-Person: Employees may speak directly with the Compliance Officer or Internal Audit Director
5. Board Channel: Audit Committee members are available for direct communication

Reporting Requirements:
• Reports should include specific details, dates, amounts, and individuals involved
• Supporting documentation should be provided when available
• Reporters are encouraged to provide contact information but anonymity is respected
• All reports are documented and tracked through completion

Protections for Reporters:
• JHCO maintains strict confidentiality to protect reporter identity
• No retaliation against employees who report fraud in good faith
• Legal protections under whistleblower laws apply to all reporters
• Internal and external safeguards prevent unauthorized disclosure of reporter information`,
      },
      {
        title: 'Investigation Process',
        icon: '🔍',
        content: `JHCO follows a structured investigation process for all fraud allegations:

Initial Assessment (24-48 hours):
• Fraud report is received and immediately logged
• Preliminary assessment determines if allegations warrant investigation
• Preliminary assessment includes verification of basic facts and credibility assessment
• Investigation Committee is formed if warranted

Investigation Phase (4-12 weeks):
• Internal Audit and Compliance Team lead investigation activities
• Evidence is gathered through interviews, document review, and system analysis
• Investigation maintains confidentiality while gathering necessary information
• Preservation of evidence and chain of custody procedures are followed
• Investigation findings are documented in a detailed report

Investigation Committee:
• Consists of Compliance Officer, Internal Audit Director, and HR Representative
• May include external forensic specialists for complex cases
• Reports to the Audit Committee of the Board
• Ensures independence and impartiality of investigation

Due Process:
• Suspected individuals are notified of allegations before final determination (except in cases requiring immediate action)
• Opportunity to provide explanation and respond to allegations
• Access to legal representation as appropriate
• Full documentation of investigation procedures and findings

Investigation Conclusion (varies):
• Substantiated: Sufficient evidence of fraudulent activity
• Unsubstantiated: Insufficient evidence to support allegations
• Inconclusive: Investigation unable to reach definitive conclusion
• All findings are documented regardless of outcome`,
      },
      {
        title: 'Consequences for Violations',
        icon: '⚖️',
        content: `JHCO enforces consistent and proportionate consequences for substantiated fraud:

Disciplinary Actions:
• Written Warning: For minor violations or first-time offenses
• Suspension: Temporary removal from duties during investigation or as disciplinary measure
• Termination: For serious fraud, repeat offenses, or violations of trust
• Criminal Prosecution: JHCO cooperates with law enforcement as appropriate

Financial Consequences:
• Full restitution of misappropriated funds or assets
• Loss of earned bonuses or benefits related to fraudulent performance
• Forfeiture of accrued vacation or paid time off as determined by policy
• Civil action to recover damages and associated costs

Professional Consequences:
• Removal from leadership or supervisory positions
• Permanent disqualification from certain roles or certifications
• Notification to professional licensing boards where applicable
• Inclusion in background check systems as appropriate

Legal Consequences:
• Cooperation with law enforcement investigations
• Civil lawsuits to recover damages
• Criminal prosecution for serious offenses
• Reporting to relevant regulatory authorities

Factors in Determining Consequences:
• Severity and duration of fraudulent activity
• Amount involved and impact on organization
• Employee's position and level of responsibility
• Prior disciplinary history
• Cooperation with investigation
• Evidence of remorse and intent to make restitution

Communication:
• Personnel decisions are communicated confidentially to affected parties
• Organization-wide communication addresses serious violations while protecting privacy
• Lessons learned are shared to strengthen fraud prevention systems`,
      },
    ],
    relatedLinks: [
      {
        title: 'Code of Conduct',
        description: 'Ethical standards and principles',
        link: '/code-of-conduct',
        icon: '📜',
      },
      {
        title: 'Compliance',
        description: 'Registrations and certifications',
        link: '/compliance',
        icon: '⚖️',
      },
      {
        title: 'Transparency',
        description: 'Accountability and openness',
        link: '/transparency',
        icon: '👁️',
      },
    ],
  },
  ar: {
    title: 'سياسة مكافحة الاحتيال',
    heroTitle: 'سياسة مكافحة الاحتيال',
    heroSubtitle: 'إطار شامل لمنع واكتشاف والاستجابة للأنشطة الاحتيالية داخل الهيئة',
    sections: [
      {
        title: 'نظرة عامة على السياسة',
        icon: '📋',
        content: `تلتزم الهيئة بالحفاظ على أعلى معايير النزاهة والشفافية. تضع سياسة مكافحة الاحتيال هذه إرشادات وإجراءات لمنع واكتشاف ومعالجة الأنشطة الاحتيالية التي قد تعرض سلامة المنظمة أو الموارد المالية أو ثقة أصحاب المصلحة للخطر. يُعرّف الاحتيال بأنه أي عمل أو إغفال متعمد مصمم للخداع أو التضليل، مما يؤدي إلى فائدة غير مصرح بها أو خسارة للهيئة أو أصحاب المصلحة.

يُتوقع من جميع الموظفين وأعضاء المجلس والمقاولين والمتطوعين والشركاء الالتزام بهذه السياسة والإبلاغ فوراً عن أي احتيال مشبوه.`,
      },
      {
        title: 'إطار إدارة المخاطر',
        icon: '🛡️',
        content: `تطبق الهيئة إطار شامل لإدارة المخاطر لتحديد ومعالجة مخاطر الاحتيال:

• تقييم المخاطر المنتظم: تقييمات احتيال مخاطر ربع سنوية تحدد العمليات الضعيفة والمعاملات عالية القيمة والمجالات التي تتطلب ضوابط محسنة
• تصنيف المخاطر: يتم تصنيف المخاطر حسب احتمال التأثير (مالي وسمعة وتشغيلي)
• استراتيجيات التخفيف: يتم تنفيذ ضوابط محددة للمخاطر المحددة مع المراقبة المستمرة
• التوثيق: يتم توثيق جميع تقييمات المخاطر واستراتيجيات التخفيف ومراجعتها من قبل لجنة التدقيق
• التواصل مع أصحاب المصلحة: يضمن الإشراف الإداري ومجلس الإدارة الوعي بمخاطر الاحتيال عبر المنظمة`,
      },
      {
        title: 'الضوابط الداخلية',
        icon: '🔐',
        content: `تحافظ الهيئة على ضوابط داخلية قوية لمنع واكتشاف الاحتيال:

الضوابط المالية:
• فصل الواجبات في المعاملات المالية (الموافقة والتفويض والتسجيل والمطابقة)
• متطلبات الموافقة المزدوجة للمعاملات التي تتجاوز الحدود المقررة
• مطابقة بنكية شهرية يقوم بها أشخاص مستقلون عن معالجة المعاملات
• مراجعة منتظمة لمطابقات الحسابات من قبل الموظفين الإشرافيين

الضوابط التشغيلية:
• أنظمة إدارة الأصول وتتبع المخزون مع جرود فعلية منتظمة
• ضوابط الوصول التي تحد من وصول الموظفين إلى الأنظمة والسجلات بناءً على مسؤولياتهم الوظيفية
• عمليات تدقيق مفاجئة وأخذ عينات عشوائية من المعاملات للكشف عن الحالات الشاذة
• اختبار منتظم للأنظمة والعمليات الحرجة

ضوابط تكنولوجيا المعلومات:
• تسجيل وصول النظام مع مسارات تدقيق لجميع الأنظمة المالية والتشغيلية
• متطلبات إدارة كلمات المرور والمصادقة متعددة العوامل
• تحديثات أمان منتظمة وتقييمات الثغرات الأمنية
• وصول مقيد للبيانات الحساسة مع مبدأ الحاجة إلى المعرفة
• أنظمة النسخ الاحتياطي وإجراءات استعادة الكوارث`,
      },
      {
        title: 'متطلبات تدريب الموظفين',
        icon: '📚',
        content: `تطلب الهيئة تدريباً شاملاً على الوعي بالاحتيال لجميع الموظفين:

التدريب الإلزامي:
• يجب أن يكمل جميع الموظفين الجدد تدريب مكافحة الاحتيال في غضون 30 يوماً من بدء العمل
• التدريب الإنعاشي السنوي لجميع أعضاء الموظفين إلزامي
• يتلقى أعضاء المجلس تدريباً متخصصاً على الحوكمة والإشراف على الاحتيال سنوياً
• المقاولون والمتطوعون الذين يعملون مع البيانات المالية أو الحساسة يتلقون تدريباً موجهاً

محتوى التدريب يغطي:
• تعريف وأنواع الاحتيال (الاختلاس وتزييف السجلات والمعاملات غير المصرح بها)
• أنظمة احتيال شائعة والعلامات الحمراء
• سياسات مكافحة الاحتيال والإجراءات الإبلاغية للمنظمة
• صنع القرار الأخلاقي والتعامل مع تضارب المصالح
• حماية المبلغ عن الانتهاكات والتأكيدات السرية
• عواقب السلوك الاحتيالي

توصيل التدريب:
• جلسات تدريب شخصية مع النقاش ودراسات الحالات
• وحدات عبر الإنترنت للوصول والمراجع المستمرة
• تدريب محدد للأقسام يعالج مخاطر احتيال خاصة بالدور الوظيفي
• توثيق جميع حضور التدريب والإنجازات`,
      },
      {
        title: 'إجراءات الإبلاغ',
        icon: '📞',
        content: `توفر الهيئة قنوات متعددة سرية للإبلاغ عن الاحتيال المشبوه:

قنوات الإبلاغ:
1. التقرير المباشر: قد يبلغ الموظفون عن الإشراف المباشر أو رئيس القسم
2. خط الاتصال المجاني: خط اتصال احتيال سري (1-800-JHCO-FRAUD) متاح على مدار الساعة للإبلاغ المجهول
3. البريد الإلكتروني: يمكن إرسال التقارير السرية إلى fraud.reporting@jhco.org
4. شخصياً: قد يتحدث الموظفون مباشرة مع مسؤول الامتثال أو مدير التدقيق الداخلي
5. قناة مجلس الإدارة: أعضاء لجنة التدقيق متاحون للتواصل المباشر

متطلبات الإبلاغ:
• يجب أن تتضمن التقارير تفاصيل محددة وتواريخ وأرقام وأفراداً متورطين
• يجب توفير الوثائق الداعمة عند توفرها
• يُشجع المبلغون على توفير معلومات الاتصال لكن يُحترم الكتمان
• يتم توثيق جميع التقارير وتتبعها حتى الانتهاء

الحماية للمبلغين:
• تحافظ الهيئة على سرية صارمة لحماية هوية المبلغ
• عدم الانتقام من الموظفين الذين يبلغون عن احتيال بحسن نية
• تنطبق الحماية القانونية بموجب قوانين حماية المبلغين على جميع المبلغين
• توجد صفقات داخلية وخارجية لمنع الكشف غير المصرح به عن معلومات المبلغ`,
      },
      {
        title: 'عملية التحقيق',
        icon: '🔍',
        content: `تتبع الهيئة عملية تحقيق منظمة لجميع ادعاءات الاحتيال:

التقييم الأولي (24-48 ساعة):
• يتم استقبال تقرير الاحتيال وتسجيله فوراً
• التقييم الأولي يحدد ما إذا كانت الادعاءات تستحق التحقيق
• يتضمن التقييم الأولي التحقق من الحقائق الأساسية وتقييم المصداقية
• تتشكل لجنة التحقيق إذا لزم الأمر

مرحلة التحقيق (4-12 أسبوعاً):
• يقود قسم التدقيق الداخلي والامتثال أنشطة التحقيق
• يتم جمع الأدلة من خلال المقابلات ومراجعة المستندات وتحليل النظام
• يحافظ التحقيق على السرية أثناء جمع المعلومات الضرورية
• يتم اتباع إجراءات الحفاظ على الأدلة وسلسلة الحراسة
• يتم توثيق نتائج التحقيق في تقرير مفصل

لجنة التحقيق:
• تتكون من مسؤول الامتثال ومدير التدقيق الداخلي وممثل الموارد البشرية
• قد تشمل متخصصي الطب الشرعي الخارجيين للقضايا المعقدة
• تقدم التقارير إلى لجنة التدقيق في مجلس الإدارة
• تضمن استقلالية وحيادية التحقيق

الإجراءات القانونية:
• يتم إبلاغ الأفراد المشبوهين بالادعاءات قبل التحديد النهائي (باستثناء الحالات التي تتطلب إجراء فوري)
• فرصة لتقديم تفسير والرد على الادعاءات
• الوصول إلى تمثيل قانوني حسب الاقتضاء
• توثيق كامل لإجراءات التحقيق والنتائج

استنتاج التحقيق (يختلف):
• ثابت: أدلة كافية على نشاط احتيالي
• لم يتم إثباته: أدلة غير كافية لدعم الادعاءات
• غير حاسم: عجز التحقيق عن التوصل إلى استنتاج قاطع
• يتم توثيق جميع النتائج بغض النظر عن النتيجة`,
      },
      {
        title: 'عواقب الانتهاكات',
        icon: '⚖️',
        content: `تطبق الهيئة عواقب متسقة ومتناسبة للاحتيال الثابت:

الإجراءات التأديبية:
• تحذير كتابي: لانتهاكات طفيفة أو انتهاكات المرة الأولى
• التعليق: الإزالة المؤقتة من الواجبات أثناء التحقيق أو كإجراء تأديبي
• الإنهاء: للاحتيال الخطير أو الانتهاكات المتكررة أو انتهاكات الثقة
• الملاحقة الجنائية: تتعاون الهيئة مع السلطات القانونية حسب الاقتضاء

العواقب المالية:
• الرد الكامل للأموال أو الأصول المختلسة
• فقدان المكافآت أو الفوائد المكتسبة المتعلقة بالأداء الاحتيالي
• مصادرة الإجازة المتراكمة أو الوقت المدفوع كما تحدده السياسة
• الإجراء المدني لاسترجاع الأضرار والتكاليف المرتبطة

العواقب المهنية:
• الإزالة من مناصب القيادة أو الإشراف
• عدم التأهل الدائم لأدوار أو شهادات معينة
• إخطار مجالس الترخيص المهني حيث ينطبق
• إدراج في أنظمة فحص الخلفية حسب الاقتضاء

العواقب القانونية:
• التعاون مع التحقيقات القانونية
• دعاوى مدنية لاسترجاع الأضرار
• الملاحقة الجنائية للانتهاكات الخطيرة
• الإبلاغ للسلطات التنظيمية ذات الصلة

العوامل في تحديد العواقب:
• خطورة ومدة النشاط الاحتيالي
• المبلغ المتورط والتأثير على المنظمة
• منصب الموظف ومستوى المسؤولية
• السجل التأديبي السابق
• التعاون مع التحقيق
• أدلة الندم والنية في تقديم التعويض

التواصل:
• يتم توصيل قرارات الموظفين بسرية إلى الأطراف المتأثرة
• يتم توصيل التواصل في جميع أنحاء المنظمة للانتهاكات الخطيرة مع حماية الخصوصية
• يتم مشاركة الدروس المستفادة لتعزيز أنظمة منع الاحتيال`,
      },
    ],
    relatedLinks: [
      {
        title: 'مدونة السلوك',
        description: 'المبادئ والمعايير الأخلاقية',
        link: '/code-of-conduct',
        icon: '📜',
      },
      {
        title: 'الامتثال',
        description: 'التسجيلات والشهادات',
        link: '/compliance',
        icon: '⚖️',
      },
      {
        title: 'الشفافية',
        description: 'المسؤولية والانفتاح',
        link: '/transparency',
        icon: '👁️',
      },
    ],
  },
};

export default function AntiFraudPolicyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const base = `/${locale}`;

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
            {ar ? 'سياسات الحوكمة' : 'Governance Policies'}
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

      {/* Policy Sections */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {content.sections.map((section, idx) => (
            <div key={idx} style={{
              marginBottom: '64px',
              backgroundColor: 'white',
              padding: '48px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
              boxShadow: '0 4px 12px rgba(10,20,40,0.08)',
              textAlign: ar ? 'right' : 'left',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
                flexDirection: ar ? 'row-reverse' : 'row',
              }}>
                <span style={{ fontSize: '40px' }}>{section.icon}</span>
                <h2 style={{
                  fontSize: '36px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  margin: 0,
                }}>
                  {section.title}
                </h2>
              </div>

              <div style={{
                height: '2px',
                backgroundColor: royalColors.hashemiteGold,
                marginBottom: '32px',
              }} />

              <div style={{
                fontSize: '16px',
                color: royalColors.textOfficial,
                lineHeight: '1.8',
                whiteSpace: 'pre-wrap',
              }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Principles Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '96px 32px',
        borderTop: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
            marginTop: 0,
          }}>
            {ar ? 'المبادئ الرئيسية' : 'Key Principles'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                title: ar ? 'النزاهة' : 'Integrity',
                description: ar
                  ? 'الممارسات الأخلاقية والشفافة في جميع العمليات'
                  : 'Ethical and transparent practices in all operations',
                icon: '✨',
              },
              {
                title: ar ? 'الوقاية' : 'Prevention',
                description: ar
                  ? 'الضوابط الاستباقية وتقييمات المخاطر'
                  : 'Proactive controls and risk assessments',
                icon: '🛡️',
              },
              {
                title: ar ? 'الكشف' : 'Detection',
                description: ar
                  ? 'المراقبة المستمرة والاختبار المنتظم'
                  : 'Continuous monitoring and regular testing',
                icon: '🔍',
              },
              {
                title: ar ? 'الاستجابة' : 'Response',
                description: ar
                  ? 'التحقيق السريع والإجراء المناسب'
                  : 'Prompt investigation and appropriate action',
                icon: '⚡',
              },
              {
                title: ar ? 'الشفافية' : 'Transparency',
                description: ar
                  ? 'الإبلاغ المفتوح والتواصل الواضح'
                  : 'Open reporting and clear communication',
                icon: '📢',
              },
              {
                title: ar ? 'الحماية' : 'Protection',
                description: ar
                  ? 'حماية المبلغين والعاملين بحسن نية'
                  : 'Protection for good faith reporters',
                icon: '🔐',
              },
            ].map((principle, idx) => (
              <div key={idx} style={{
                backgroundColor: royalColors.bgRefined,
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {principle.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {principle.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  margin: 0,
                  lineHeight: '1.6',
                }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
          }}>
            {ar ? 'موارد ذات صلة' : 'Related Resources'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.relatedLinks.map((link, idx) => (
              <Link key={idx} href={`${base}${link.link}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '40px 32px',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <p style={{ fontSize: '48px', margin: 0, marginBottom: '16px' }}>
                    {link.icon}
                  </p>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    marginBottom: '12px',
                    marginTop: 0,
                  }}>
                    {link.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    margin: 0,
                    flex: 1,
                    marginBottom: '16px',
                  }}>
                    {link.description}
                  </p>
                  <p style={{
                    color: royalColors.hashemiteGold,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '12px',
                    margin: 0,
                  }}>
                    {ar ? 'اقرأ المزيد' : 'Learn More'} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '40px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '24px',
          }}>
            {ar ? 'أسئلة أو مخاوف؟' : 'Questions or Concerns?'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            lineHeight: '1.8',
            marginBottom: '32px',
            maxWidth: '700px',
            margin: '0 auto 32px',
          }}>
            {ar
              ? 'للحصول على معلومات إضافية حول سياسة مكافحة الاحتيال أو لتقديم مخاوفك، يرجى التواصل مع مسؤول الامتثال أو زيارة صفحة الامتثال الخاصة بنا.'
              : 'For additional information about this Anti-Fraud Policy or to submit your concerns, please contact our Compliance Officer or visit our Compliance page.'}
          </p>
          <Link href={`${base}/compliance`} style={{
            display: 'inline-block',
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '16px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '14px',
            transition: 'all 0.3s ease',
          }}>
            {ar ? 'زيارة الامتثال' : 'Visit Compliance'}
          </Link>
        </div>
      </section>
    </div>
  );
}
