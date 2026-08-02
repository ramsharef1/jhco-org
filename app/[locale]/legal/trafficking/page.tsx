'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const traffickingContent = {
  en: {
    title: 'Anti-Human Trafficking Policy',
    heroTitle: 'Zero Tolerance for Human Trafficking',
    heroSubtitle: 'JHCO is committed to combating human trafficking in all forms and maintaining the highest ethical standards.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      {
        title: 'Our Commitment',
        content: [
          'The Jordan Hashemite Charity Organization (JHCO) maintains a zero-tolerance policy toward human trafficking, slavery, forced labor, and exploitative labor practices. We are committed to identifying, preventing, and remediating human trafficking risks throughout our operations and supply chain.',
          'This policy reflects our dedication to human dignity and our adherence to international standards including the UN Protocol on Human Trafficking and International Labour Organization conventions.',
        ],
      },
      {
        title: 'Policy Scope',
        content: [
          'This policy applies to all employees, volunteers, contractors, partners, and vendors of JHCO. It covers all activities, locations, and operations worldwide where JHCO conducts business.',
          'JHCO requires all third parties, including suppliers, service providers, and partners, to comply with this policy and applicable laws prohibiting human trafficking and forced labor.',
        ],
      },
      {
        title: 'Prohibited Activities',
        content: [
          'JHCO prohibits and will not tolerate:',
          '• Human trafficking in any form, including sex trafficking and labor trafficking',
          '• Forced labor, involuntary servitude, or indentured servitude',
          '• Child labor or exploitation of minors',
          '• Exploitative labor practices, including excessive working hours and unsafe conditions',
          '• Debt bondage or wage theft',
          '• Restrictions on freedom of movement or communication',
          '• Withholding of identification documents',
          '• Use of threats, deception, or coercion to recruit, transport, or exploit workers',
          '• Any activity that violates fundamental human rights',
        ],
      },
      {
        title: 'Due Diligence',
        content: [
          'JHCO conducts risk assessments to identify potential trafficking vulnerabilities in our operations and supply chains. Our due diligence includes:',
          '• Screening of employees, contractors, and partners against available databases and watch lists',
          '• Evaluation of high-risk regions and sectors',
          '• Assessment of labor practices and working conditions',
          '• Regular audits and monitoring of compliance',
          '• Engagement with third-party auditors and compliance experts',
        ],
      },
      {
        title: 'Employee Protections',
        content: [
          'JHCO ensures that all employees and workers:',
          '• Have the right to fair wages and safe working conditions',
          '• Work voluntary employment with freedom to leave',
          '• Have access to clear employment contracts and terms',
          '• Are not subjected to deceptive recruitment practices',
          '• Have their personal documents and identification secure',
          '• Have access to grievance mechanisms and legal remedies',
          '• Receive information about their rights in their native language',
        ],
      },
      {
        title: 'Reporting and Investigation',
        content: [
          'JHCO maintains multiple confidential channels for reporting suspected human trafficking:',
          '• Hotline: +962 6 XXXX XXXX (available 24/7)',
          '• Email: trafficking-report@jhco.org',
          '• Anonymous web portal: www.jhco.org/report',
          '• In-person reporting to HR or management',
          'All reports are taken seriously and investigated promptly and confidentially. JHCO does not tolerate retaliation against individuals who report suspected trafficking in good faith.',
        ],
      },
      {
        title: 'Investigation Process',
        content: [
          'Upon receiving a report of potential trafficking:',
          '• JHCO will investigate thoroughly and promptly',
          '• Steps will be taken to secure the safety of potential victims',
          '• Cooperation with law enforcement and NGOs will be provided as appropriate',
          '• Evidence will be preserved for potential prosecution',
          '• Confidentiality will be maintained to protect victims and witnesses',
          '• Regular updates will be provided to stakeholders',
        ],
      },
      {
        title: 'Victim Support',
        content: [
          'JHCO is committed to supporting trafficking victims:',
          '• Immediate access to emergency services and medical care',
          '• Connection with local and international anti-trafficking organizations',
          '• Legal assistance and representation where appropriate',
          '• Accommodation and transitional housing support',
          '• Psychosocial counseling and trauma support',
          '• Assistance with repatriation for foreign nationals',
          '• Long-term support for rehabilitation and reintegration',
        ],
      },
      {
        title: 'Third-Party Compliance',
        content: [
          'JHCO requires all vendors, contractors, and business partners to:',
          '• Certify their compliance with this policy',
          '• Maintain their own anti-trafficking policies and procedures',
          '• Conduct due diligence on their supply chains',
          '• Maintain transparency and submit to audits',
          '• Commit to remediation of any violations',
          'JHCO reserves the right to terminate relationships with non-compliant partners.',
        ],
      },
      {
        title: 'Training and Awareness',
        content: [
          'JHCO provides regular training and awareness programs to:',
          '• All employees and volunteers on identification of trafficking indicators',
          '• Management on investigations and victim support',
          '• Field staff on high-risk regions and populations',
          '• Partners and vendors on compliance requirements',
          'Training is mandatory and documented.',
        ],
      },
      {
        title: 'Transparency and Accountability',
        content: [
          'JHCO maintains transparency regarding human trafficking efforts:',
          '• Annual reporting on anti-trafficking activities and outcomes',
          '• Disclosure of incidents and remedial actions taken',
          '• Public accountability to stakeholders and beneficiaries',
          '• Collaboration with external monitors and auditors',
          '• Commitment to continuous improvement based on lessons learned',
        ],
      },
      {
        title: 'Contact for Concerns',
        content: [
          'To report suspected human trafficking or seek additional information:',
          'JHCO Anti-Trafficking Hotline: +962 6 123 4567 (24/7)',
          'Email: trafficking-report@jhco.org',
          'Online Report: www.jhco.org/report-trafficking',
          'International Trafficking Hotline: 1-888-373-7888 (US)',
          'INTERPOL: www.interpol.int',
          'Local law enforcement in your country',
        ],
      },
    ],
  },
  ar: {
    title: 'سياسة مكافحة الاتجار بالبشر',
    heroTitle: 'عدم التسامح مع الاتجار بالبشر',
    heroSubtitle: 'تلتزم الهيئة بمكافحة الاتجار بالبشر بجميع أشكاله والحفاظ على أعلى معايير الأخلاقيات.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      {
        title: 'التزامنا',
        content: [
          'الهيئة الخيرية الأردنية الهاشمية تحتفظ بسياسة عدم تسامح مطلق تجاه الاتجار بالبشر بجميع أشكاله والعبودية والعمل القسري وممارسات العمل الاستغلالية. نحن ملتزمون بتحديد ومنع وتعويض مخاطر الاتجار بالبشر في جميع عملياتنا وسلسلة التوريد لدينا.',
          'تعكس هذه السياسة التزامنا بكرامة الإنسان وامتثالنا لمعايير دولية تشمل بروتوكول الأمم المتحدة بشأن الاتجار بالبشر واتفاقيات منظمة العمل الدولية.',
        ],
      },
      {
        title: 'نطاق السياسة',
        content: [
          'تنطبق هذه السياسة على جميع الموظفين والمتطوعين والمقاولين والشركاء والبائعين لدى الهيئة. تغطي جميع الأنشطة والمواقع والعمليات في جميع أنحاء العالم حيث تمارس الهيئة أعمالها.',
          'تطلب الهيئة من جميع الأطراف الثالثة، بما في ذلك الموردين ومقدمي الخدمات والشركاء، الامتثال لهذه السياسة والقوانين السارية التي تحظر الاتجار بالبشر والعمل القسري.',
        ],
      },
      {
        title: 'الأنشطة المحظورة',
        content: [
          'تحظر الهيئة ولن تتسامح مع:',
          '• الاتجار بالبشر بأي شكل من الأشكال، بما في ذلك الاتجار بالجنس والاتجار بالعمل',
          '• العمل القسري أو السخرة أو العبودية بالدين',
          '• عمل الأطفال أو استغلال القاصرين',
          '• ممارسات العمل الاستغلالية، بما في ذلك ساعات العمل الطويلة والظروف غير الآمنة',
          '• الرق بالدين أو سرقة الأجور',
          '• تقييد حرية الحركة أو الاتصال',
          '• حبس وثائق الهوية',
          '• استخدام التهديدات أو الخداع أو الإكراه لتجنيد أو نقل أو استغلال العمال',
          '• أي نشاط ينتهك حقوق الإنسان الأساسية',
        ],
      },
      {
        title: 'العناية الواجبة',
        content: [
          'تجري الهيئة تقييمات للمخاطر لتحديد نقاط ضعف محتملة للاتجار بالبشر في عملياتنا وسلاسل التوريد. تشمل عنايتنا الواجبة:',
          '• فحص الموظفين والمقاولين والشركاء مقابل قواعد البيانات ولوائح المراقبة المتاحة',
          '• تقييم المناطق والقطاعات عالية المخاطر',
          '• تقييم ممارسات العمل وظروف العمل',
          '• عمليات التدقيق المنتظمة ومراقبة الامتثال',
          '• التعاون مع مدققي الطرف الثالث وخبراء الامتثال',
        ],
      },
      {
        title: 'حماية الموظفين',
        content: [
          'تضمن الهيئة أن جميع الموظفين والعمال:',
          '• لهم الحق في أجور عادلة وظروف عمل آمنة',
          '• يعملون عن طواعية مع حرية المغادرة',
          '• لديهم إمكانية الوصول إلى عقود العمل والشروط واضحة',
          '• لا يتعرضون لممارسات تجنيد خادعة',
          '• وثائقهم الشخصية وهويتهم آمنة',
          '• لديهم إمكانية الوصول إلى آليات الشكاوى والسبل القانونية',
          '• يتلقون معلومات عن حقوقهم بلغتهم الأم',
        ],
      },
      {
        title: 'الإبلاغ والتحقيق',
        content: [
          'تحتفظ الهيئة بقنوات سرية متعددة للإبلاغ عن الاتجار بالبشر المشبوه:',
          '• الخط الساخن: +962 6 1234 5678 (متاح 24/7)',
          '• البريد الإلكتروني: trafficking-report@jhco.org',
          '• بوابة الويب المجهولة: www.jhco.org/report',
          '• الإبلاغ الشخصي للموارد البشرية أو الإدارة',
          'يتم أخذ جميع الإبلاغات على محمل الجد والتحقيق منها على الفور وسرياً. لا تتسامح الهيئة مع الانتقام من الأفراد الذين يبلغون عن الاتجار بالبشر المشبوه بحسن نية.',
        ],
      },
      {
        title: 'عملية التحقيق',
        content: [
          'عند تلقي تقرير عن اتجار بالبشر محتمل:',
          '• ستحقق الهيئة بشكل دقيق وسريع',
          '• سيتم اتخاذ خطوات لتأمين سلامة الضحايا المحتملين',
          '• سيتم توفير التعاون مع إنفاذ القانون والمنظمات غير الحكومية حسب الاقتضاء',
          '• سيتم الحفاظ على الأدلة للمقاضاة المحتملة',
          '• سيتم الحفاظ على السرية لحماية الضحايا والشهود',
          '• سيتم توفير تحديثات منتظمة لأصحاب المصلحة',
        ],
      },
      {
        title: 'دعم الضحايا',
        content: [
          'الهيئة ملتزمة بدعم ضحايا الاتجار بالبشر:',
          '• الوصول الفوري إلى خدمات الطوارئ والرعاية الطبية',
          '• الاتصال بمنظمات مكافحة الاتجار بالبشر المحلية والدولية',
          '• المساعدة القانونية والتمثيل حسب الاقتضاء',
          '• الإقامة ودعم السكن الانتقالي',
          '• الاستشارة النفسية والاجتماعية ودعم الصدمات',
          '• المساعدة في الترحيل للرعايا الأجانب',
          '• الدعم طويل الأجل لإعادة التأهيل وإعادة الاندماج',
        ],
      },
      {
        title: 'امتثال الطرف الثالث',
        content: [
          'تطلب الهيئة من جميع البائعين والمقاولين والشركاء التجاريين:',
          '• إثبات امتثالهم لهذه السياسة',
          '• الحفاظ على سياسات وإجراءات مكافحة الاتجار بالبشر الخاصة بهم',
          '• إجراء العناية الواجبة على سلاسل التوريد الخاصة بهم',
          '• الحفاظ على الشفافية والخضوع للتدقيق',
          '• الالتزام بتصحيح أي انتهاكات',
          'تحتفظ الهيئة بالحق في إنهاء العلاقات مع الشركاء غير الممتثلين.',
        ],
      },
      {
        title: 'التدريب والتوعية',
        content: [
          'تقدم الهيئة برامج تدريب وتوعية منتظمة لـ:',
          '• جميع الموظفين والمتطوعين حول تحديد مؤشرات الاتجار بالبشر',
          '• الإدارة حول التحقيقات ودعم الضحايا',
          '• الموظفين الميدانيين حول المناطق والفئات السكانية عالية المخاطر',
          '• الشركاء والبائعين حول متطلبات الامتثال',
          'التدريب إلزامي وموثق.',
        ],
      },
      {
        title: 'الشفافية والمساءلة',
        content: [
          'تحتفظ الهيئة بالشفافية فيما يتعلق بجهود مكافحة الاتجار بالبشر:',
          '• الإبلاغ السنوي عن أنشطة وتنتائج مكافحة الاتجار بالبشر',
          '• الكشف عن الحوادث والإجراءات العلاجية المتخذة',
          '• المساءلة العامة لأصحاب المصلحة والمستفيدين',
          '• التعاون مع المراقبين والمدققين الخارجيين',
          '• الالتزام بالتحسين المستمر بناءً على الدروس المستفادة',
        ],
      },
      {
        title: 'الاتصال للإبلاغ عن المخاوف',
        content: [
          'للإبلاغ عن الاتجار بالبشر المشبوه أو الحصول على معلومات إضافية:',
          'خط الهيئة الساخن لمكافحة الاتجار بالبشر: +962 6 123 4567 (24/7)',
          'البريد الإلكتروني: trafficking-report@jhco.org',
          'التقرير عبر الإنترنت: www.jhco.org/report-trafficking',
          'خط الاتجار الدولي بالبشر: 1-888-373-7888 (الولايات المتحدة)',
          'الإنتربول: www.interpol.int',
          'إنفاذ القانون المحلي في دولتك',
        ],
      },
    ],
  },
};

export default function TraffickingPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = traffickingContent[locale] || traffickingContent.en;

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
            {ar ? '🆘 مكافحة الاتجار' : '🆘 ANTI-TRAFFICKING'}
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
