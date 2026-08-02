'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const disclosureContent = {
  en: {
    title: 'Financial Disclosure',
    heroTitle: 'Financial Transparency',
    heroSubtitle: 'JHCO is committed to financial transparency and accountability to all stakeholders.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      {
        title: 'Commitment to Transparency',
        content: [
          'The Jordan Hashemite Charity Organization (JHCO) believes that transparency is fundamental to building public trust and ensuring accountability. We are committed to providing timely, accurate, and comprehensive financial information to our donors, partners, beneficiaries, and the public.',
          'Our financial practices reflect our commitment to the highest standards of governance and responsible stewardship of resources entrusted to us.',
        ],
      },
      {
        title: 'Annual Financial Statements',
        content: [
          'JHCO publishes comprehensive annual financial statements prepared in accordance with International Financial Reporting Standards (IFRS). Our annual reports include:',
          '• Detailed income and expenditure statements',
          '• Balance sheet and financial position analysis',
          '• Cash flow statements and liquidity analysis',
          '• Fund breakdown and allocation details',
          '• Program expense ratios and administrative costs',
          '• Independent external audit reports',
          '• Management discussion and analysis',
          'Annual reports are available on our website and upon request in both English and Arabic.',
        ],
      },
      {
        title: 'Program Spending',
        content: [
          'JHCO maintains detailed records of program spending:',
          '• Minimum 85% of donations support direct program activities',
          '• Administration costs are kept below 10% of annual revenue',
          '• Fundraising costs do not exceed 5% of funds raised',
          '• Emergency response programs receive immediate full funding',
          '• Beneficiary support programs include monitoring and evaluation',
          'Program spending is tracked by region, sector, and beneficiary type to ensure equitable resource allocation.',
        ],
      },
      {
        title: 'Fund Management',
        content: [
          'JHCO manages donor funds with care and accountability:',
          '• Restricted funds are used exclusively for designated purposes',
          '• All fundraising is conducted in accordance with international standards',
          '• Funds are invested conservatively to preserve capital and generate modest returns',
          '• Currency risks are managed to protect fund value',
          '• Investment income is used to support program delivery',
          '• Fund balances are maintained for operational continuity and emergency response',
        ],
      },
      {
        title: 'Independent Audits',
        content: [
          'JHCO undergoes annual independent audits:',
          '• External audits conducted by Big Four or equivalent accounting firms',
          '• Internal audit department provides ongoing monitoring',
          '• Audits cover compliance with laws, regulations, and policies',
          '• Special audits conducted for major programs or initiatives',
          '• Audit findings are reported to the Board and disclosed publicly',
          '• Management responds to audit recommendations with action plans',
        ],
      },
      {
        title: 'Budgeting and Planning',
        content: [
          'JHCO follows rigorous budgeting and financial planning processes:',
          '• Annual budgets approved by the Board of Trustees',
          '• Multi-year strategic plans guide resource allocation',
          '• Program budgets align with strategic objectives',
          '• Quarterly financial monitoring against approved budgets',
          '• Variance analysis and corrective actions documented',
          '• Budget flexibility to respond to emergencies and opportunities',
        ],
      },
      {
        title: 'Donor Accountability',
        content: [
          'JHCO is accountable to our donors:',
          '• Regular donor communications on program impact',
          '• Impact reports showing measurable outcomes',
          '• Customized reporting for major donors on their supported programs',
          '• Annual fundraising disclosure of costs and efficiency',
          '• Transparency regarding overhead and administrative expenses',
          '• Responsiveness to donor inquiries and concerns',
        ],
      },
      {
        title: 'Conflict of Interest Disclosures',
        content: [
          'JHCO maintains strict conflict of interest policies:',
          '• Board members disclose all material conflicts of interest',
          '• Related-party transactions are disclosed and approved by the Board',
          '• Staff members must disclose financial interests in vendors or suppliers',
          '• Procurement processes ensure competitive bidding and value for money',
          '• Conflict of interest policies are reviewed annually',
          'Detailed conflict disclosures are maintained and available to auditors.',
        ],
      },
      {
        title: 'Compliance and Regulatory Reporting',
        content: [
          'JHCO complies with all applicable regulatory requirements:',
          '• Registration and licensing maintained in all jurisdictions',
          '• Tax compliance and returns filed appropriately',
          '• Charity status certifications maintained and current',
          '• Annual reports filed with relevant authorities',
          '• Compliance with sanctions and anti-money laundering regulations',
          '• Adherence to data protection and privacy laws',
          'Compliance certifications and registrations are available upon request.',
        ],
      },
      {
        title: 'Anti-Fraud Measures',
        content: [
          'JHCO maintains robust anti-fraud and corruption controls:',
          '• Segregation of financial duties and approval authorities',
          '• Regular fraud risk assessments',
          '• Whistleblower hotline for reporting suspected fraud',
          '• Investigation protocols for fraud allegations',
          '• Background checks for key financial personnel',
          '• Physical and system security for financial records',
          'Zero-tolerance policy for fraud and corruption.',
        ],
      },
      {
        title: 'Beneficiary Impact and Outcomes',
        content: [
          'JHCO measures and reports on beneficiary impact:',
          '• Beneficiaries reached by program and sector',
          '• Measurable outcomes and impact indicators',
          '• Beneficiary satisfaction surveys and feedback',
          '• Long-term follow-up on program participants',
          '• Case studies and success stories',
          '• Lessons learned and program improvements',
          'Impact data is analyzed to ensure programs achieve their objectives.',
        ],
      },
      {
        title: 'Information Access',
        content: [
          'JHCO makes financial information available to the public:',
          '• Annual financial statements on our website',
          '• Summary financial data in accessible formats',
          '• Program reports and impact data',
          '• Annual reports for the past five years',
          '• Charity registration and tax exemption documentation',
          '• Request process for additional financial information',
          'Requests for financial information are responded to within 10 business days.',
        ],
      },
      {
        title: 'Contact for Financial Inquiries',
        content: [
          'For questions about JHCO\'s finances and financial reporting:',
          'Email: finance@jhco.org',
          'Phone: +962 6 123 4567',
          'Website: www.jhco.org',
          'Mailing Address: Finance Department, JHCO, Amman, Jordan',
          'Request Form: www.jhco.org/financial-inquiry',
          'All inquiries are treated confidentially and responded to promptly.',
        ],
      },
    ],
  },
  ar: {
    title: 'الإفصاح المالي',
    heroTitle: 'الشفافية المالية',
    heroSubtitle: 'الهيئة ملتزمة بالشفافية المالية والمساءلة تجاه جميع أصحاب المصلحة.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      {
        title: 'الالتزام بالشفافية',
        content: [
          'الهيئة الخيرية الأردنية الهاشمية تعتقد أن الشفافية أساسية لبناء الثقة العامة وضمان المساءلة. نحن ملتزمون بتقديم معلومات مالية في الوقت المناسب وموثوقة وشاملة للمتبرعين والشركاء والمستفيدين والجمهور.',
          'تعكس ممارساتنا المالية التزامنا بأعلى معايير الحوكمة والإدارة المسؤولة للموارد الموكولة إلينا.',
        ],
      },
      {
        title: 'البيانات المالية السنوية',
        content: [
          'تنشر الهيئة بيانات مالية سنوية شاملة معدة وفقاً لمعايير التقارير المالية الدولية (IFRS). تتضمن التقارير السنوية:',
          '• بيانات الدخل والنفقات المفصلة',
          '• تحليل الميزانية العمومية والوضع المالي',
          '• بيانات التدفقات النقدية وتحليل السيولة',
          '• تفاصيل تقسيم الأموال والتخصيص',
          '• نسب نفقات البرامج والتكاليف الإدارية',
          '• تقارير التدقيق الخارجي المستقل',
          '• مناقشة وتحليل الإدارة',
          'التقارير السنوية متاحة على موقعنا وعند الطلب باللغتين الإنجليزية والعربية.',
        ],
      },
      {
        title: 'نفقات البرامج',
        content: [
          'تحتفظ الهيئة بسجلات مفصلة لنفقات البرامج:',
          '• الحد الأدنى 85٪ من التبرعات تدعم الأنشطة البرامجية المباشرة',
          '• يتم الحفاظ على تكاليف الإدارة أقل من 10٪ من الإيرادات السنوية',
          '• لا تتجاوز تكاليف جمع التبرعات 5٪ من الأموال المجمعة',
          '• برامج الاستجابة للطوارئ تتلقى تمويل كامل فوري',
          '• برامج دعم المستفيدين تشمل المراقبة والتقييم',
          'يتم تتبع نفقات البرنامج حسب المنطقة والقطاع ونوع المستفيد لضمان توزيع عادل للموارد.',
        ],
      },
      {
        title: 'إدارة الأموال',
        content: [
          'تدير الهيئة أموال المتبرعين بعناية ومساءلة:',
          '• يتم استخدام الأموال المقيدة حصراً للأغراض المحددة',
          '• يتم إجراء جميع جمع التبرعات وفقاً للمعايير الدولية',
          '• يتم استثمار الأموال بشكل متحفظ للحفاظ على رأس المال وتوليد عوائد متواضعة',
          '• يتم إدارة مخاطر الصرف الأجنبي لحماية قيمة الأموال',
          '• يتم استخدام دخل الاستثمار لدعم تقديم البرامج',
          '• يتم الحفاظ على أرصدة الأموال لاستمرارية التشغيل والاستجابة للطوارئ',
        ],
      },
      {
        title: 'التدقيقات المستقلة',
        content: [
          'تخضع الهيئة لتدقيقات مستقلة سنوية:',
          '• تدقيقات خارجية تجريها شركات محاسبة من الدرجة الأولى أو ما يعادلها',
          '• قسم التدقيق الداخلي يوفر مراقبة مستمرة',
          '• التدقيقات تغطي الامتثال للقوانين واللوائح والسياسات',
          '• تدقيقات خاصة تجرى للبرامج الكبرى أو المبادرات',
          '• يتم الإبلاغ عن نتائج التدقيق إلى مجلس الإدارة والإفصاح عنها علناً',
          '• تستجيب الإدارة لتوصيات التدقيق بخطط عمل',
        ],
      },
      {
        title: 'الموازنة والتخطيط',
        content: [
          'تتبع الهيئة عمليات موازنة وتخطيط مالي صارمة:',
          '• الموازنات السنوية معتمدة من مجلس الأمناء',
          '• الخطط الاستراتيجية متعددة السنوات توجه تخصيص الموارد',
          '• موازنات البرامج تتوافق مع الأهداف الاستراتيجية',
          '• المراقبة المالية الفصلية مقابل الموازنات المعتمدة',
          '• تحليل الفروقات والإجراءات التصحيحية موثقة',
          '• مرونة الموازنة للاستجابة للطوارئ والفرص',
        ],
      },
      {
        title: 'مساءلة المتبرعين',
        content: [
          'الهيئة مسؤولة أمام المتبرعين:',
          '• اتصالات منتظمة مع المتبرعين حول تأثير البرنامج',
          '• تقارير التأثير تظهر النتائج القابلة للقياس',
          '• تقارير مخصصة للمتبرعين الكبار حول البرامج المدعومة من قبلهم',
          '• الإفصاح السنوي عن تكاليف جمع التبرعات والكفاءة',
          '• الشفافية بخصوص النفقات العامة والإدارية',
          '• الاستجابة لاستفسارات وشواغل المتبرعين',
        ],
      },
      {
        title: 'كشفات تضارب المصالح',
        content: [
          'تحتفظ الهيئة بسياسات صارمة لتضارب المصالح:',
          '• يكشف أعضاء مجلس الإدارة عن جميع تضاربات المصالح المادية',
          '• يتم الكشف عن معاملات الأطراف ذات الصلة والموافقة عليها من قبل مجلس الإدارة',
          '• يجب على موظفي الموظفين الكشف عن المصالح المالية في البائعين أو الموردين',
          '• تضمن عمليات المشتريات المزايدة التنافسية والقيمة مقابل المال',
          '• يتم مراجعة سياسات تضارب المصالح بشكل سنوي',
          'يتم الاحتفاظ بكشفات تضارب المصالح التفصيلية وتتوفر للمدققين.',
        ],
      },
      {
        title: 'الامتثال والإبلاغ التنظيمي',
        content: [
          'الهيئة تمتثل لجميع المتطلبات التنظيمية السارية:',
          '• التسجيل والترخيص يتم الاحتفاظ به في جميع الاختصاصات',
          '• الامتثال الضريبي والعودة المقدمة بشكل مناسب',
          '• شهادات حالة الجمعية الخيرية يتم الاحتفاظ بها وحاليتها',
          '• التقارير السنوية المقدمة للسلطات ذات الصلة',
          '• الامتثال للعقوبات واللوائح المناهضة لغسل الأموال',
          '• الالتزام بقوانين حماية البيانات والخصوصية',
          'شهادات الامتثال والتسجيلات متاحة عند الطلب.',
        ],
      },
      {
        title: 'تدابير مكافحة الاحتيال',
        content: [
          'تحتفظ الهيئة بضوابط قوية لمكافحة الاحتيال والفساد:',
          '• فصل الواجبات المالية وسلطات الموافقة',
          '• تقييمات دورية لمخاطر الاحتيال',
          '• خط الموظفين للإبلاغ عن الاحتيال المشبوه',
          '• بروتوكولات التحقيق في اتهامات الاحتيال',
          '• فحوصات الخلفية لموظفي الشؤون المالية الرئيسيين',
          '• الأمان المادي وتقنيات السجلات المالية',
          'سياسة عدم التسامح مع الاحتيال والفساد.',
        ],
      },
      {
        title: 'تأثير المستفيدين والنتائج',
        content: [
          'تقيس الهيئة وتقرر عن تأثير المستفيدين:',
          '• المستفيدون الذين وصلتهم البرامج والقطاع',
          '• النتائج والمؤشرات التأثير القابلة للقياس',
          '• دراسات استطلاع رضا المستفيدين والتعليقات',
          '• المتابعة طويلة الأجل على مشاركي البرنامج',
          '• دراسات الحالات وقصص النجاح',
          '• الدروس المستفادة وتحسينات البرنامج',
          'يتم تحليل بيانات التأثير لضمان تحقيق البرامج لأهدافها.',
        ],
      },
      {
        title: 'الوصول إلى المعلومات',
        content: [
          'تتيح الهيئة المعلومات المالية للجمهور:',
          '• البيانات المالية السنوية على موقعنا',
          '• ملخص البيانات المالية بصيغ سهلة الوصول',
          '• تقارير البرامج وبيانات التأثير',
          '• التقارير السنوية لآخر خمس سنوات',
          '• وثائق التسجيل الخيري والإعفاء الضريبي',
          '• طلب عملية معلومات مالية إضافية',
          'الطلبات للحصول على المعلومات المالية يتم الرد عليها في غضون 10 أيام عمل.',
        ],
      },
      {
        title: 'الاتصال لاستفسارات مالية',
        content: [
          'للأسئلة حول مالية الهيئة والإفصاح المالي:',
          'البريد الإلكتروني: finance@jhco.org',
          'الهاتف: +962 6 123 4567',
          'الموقع: www.jhco.org',
          'العنوان البريدي: قسم المالية، الهيئة، عمّان، الأردن',
          'نموذج الطلب: www.jhco.org/financial-inquiry',
          'يتم التعامل مع جميع الاستفسارات بسرية والرد عليها بسرعة.',
        ],
      },
    ],
  },
};

export default function DisclosurePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = disclosureContent[locale] || disclosureContent.en;

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
            {ar ? '💰 الإفصاح المالي' : '💰 FINANCIAL DISCLOSURE'}
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
            background: idx % 2 === 0 ? royalColors.warmBeige : 'white',
            borderRadius: borderRadius.lg,
            borderTop: `3px solid ${royalColors.warmGold}`,
          }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: '"Merriweather", Georgia, serif',
              color: royalColors.deepNavy,
              margin: `0 0 ${spacing.lg} 0`,
              borderBottom: `2px solid ${royalColors.warmGold}`,
              paddingBottom: spacing.md,
            }}>
              {section.title}
            </h2>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: royalColors.textDark,
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
        background: royalColors.warmBeige,
        padding: `${spacing.xxl} ${spacing.xl}`,
        borderTop: `3px solid ${royalColors.warmGold}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`/${locale}`} style={{
            color: royalColors.deepNavy,
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            display: 'inline-block',
            padding: `${spacing.sm} ${spacing.lg}`,
            border: `2px solid ${royalColors.warmGold}`,
            borderRadius: borderRadius.md,
            transition: 'all 0.3s',
            background: royalColors.warmGold,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
            (e.currentTarget as HTMLElement).style.color = 'white';
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.deepNavy;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.warmGold;
            (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.warmGold;
          }}
          >
            {ar ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </section>
    </main>
  );
}
