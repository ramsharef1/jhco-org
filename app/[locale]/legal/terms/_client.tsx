'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const termsContent = {
  en: {
    title: 'Terms of Use',
    heroTitle: 'Terms & Conditions',
    heroSubtitle: 'Please read these terms carefully before using our website and services.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      {
        title: 'Agreement to Terms',
        icon: '📋',
        content: [
          'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
          'JHCO reserves the right to modify these terms at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.',
        ],
      },
      {
        title: 'Use License',
        icon: '✅',
        content: [
          'Permission is granted to temporarily download one copy of the materials (information or software) on JHCO\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
          '• Modify or copy the materials',
          '• Use the materials for any commercial purpose or for any public display',
          '• Attempt to decompile or reverse engineer any software contained on the website',
          '• Remove any copyright or other proprietary notations from the materials',
          '• Transfer the materials to another person or "mirror" the materials on any other server',
          '• Violate any applicable laws or regulations',
        ],
      },
      {
        title: 'Disclaimer',
        icon: '⚠️',
        content: [
          'The materials on JHCO\'s website are provided on an "as is" basis. JHCO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
          'Further, JHCO does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
        ],
      },
      {
        title: 'Limitations',
        icon: '⛔',
        content: [
          'In no event shall JHCO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JHCO\'s website, even if JHCO or an authorized representative has been notified orally or in writing of the possibility of such damage.',
          'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
        ],
      },
      {
        title: 'Accuracy of Materials',
        icon: '📊',
        content: [
          'The materials appearing on JHCO\'s website could include technical, typographical, or photographic errors. JHCO does not warrant that any of the materials on its website are accurate, complete, or current.',
          'JHCO may make changes to the materials contained on its website at any time without notice. However, JHCO does not make any commitment to update the materials.',
        ],
      },
      {
        title: 'Links',
        icon: '🔗',
        content: [
          'JHCO has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by JHCO of the site. Use of any such linked website is at the user\'s own risk.',
          'If you discover a link that violates these terms or is inappropriate, please notify us immediately at webmaster@jhco.org.',
        ],
      },
      {
        title: 'Modifications',
        icon: '✏️',
        content: [
          'JHCO may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
        ],
      },
      {
        title: 'Governing Law',
        icon: '⚖️',
        content: [
          'These terms and conditions are governed by and construed in accordance with the laws of the Hashemite Kingdom of Jordan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
        ],
      },
      {
        title: 'Intellectual Property Rights',
        icon: '🎨',
        content: [
          'All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of JHCO or its content suppliers and is protected by international copyright laws.',
          'You agree not to reproduce, retransmit, distribute, disseminate, sell, publish, broadcast, or circulate any materials without the written permission of JHCO.',
          'The JHCO name, logo, and related marks are trademarks of the Jordan Hashemite Charity Organization.',
        ],
      },
      {
        title: 'User Conduct',
        icon: '🤝',
        content: [
          'You agree not to use this website or its content in any way that violates any applicable law or regulation or infringes upon the rights of others.',
          'Prohibited conduct includes harassment, abuse, posting of offensive content, spam, or any other inappropriate behavior.',
          'JHCO reserves the right to remove any content or terminate access to the website for violations of these terms.',
        ],
      },
    ],
  },
  ar: {
    title: 'الشروط والأحكام',
    heroTitle: 'الشروط والأحكام',
    heroSubtitle: 'يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا وخدماتنا.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      {
        title: 'الموافقة على الشروط',
        icon: '📋',
        content: [
          'بالوصول واستخدام هذا الموقع، فإنك توافق على قبول الالتزام بشروط هذه الاتفاقية. إذا كنت لا توافق على الالتزام بما سبق، يرجى عدم استخدام هذه الخدمة.',
          'تحتفظ الهيئة بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع بعد أي تغييرات يعتبر قبولاً منك للشروط الجديدة.',
        ],
      },
      {
        title: 'ترخيص الاستخدام',
        icon: '✅',
        content: [
          'يُمنح الإذن بتنزيل نسخة واحدة مؤقتة من المواد (المعلومات أو البرامج) على موقع الهيئة لأغراض المشاهدة الشخصية غير التجارية المؤقتة فقط. هذا منح ترخيص، وليس نقل ملكية. وبموجب هذا الترخيص، لا يحق لك:',
          '• تعديل أو نسخ المواد',
          '• استخدام المواد لأي غرض تجاري أو لأي عرض عام',
          '• محاولة فك تشفير أو إعادة هندسة أي برامج موجودة على الموقع',
          '• إزالة أي إشعارات حقوق نشر أو إشعارات ملكية أخرى من المواد',
          '• نقل المواد إلى شخص آخر أو "مرآة" المواد على أي خادم آخر',
          '• انتهاك أي قوانين أو لوائح قابلة للتطبيق',
        ],
      },
      {
        title: 'إخلاء المسؤولية',
        icon: '⚠️',
        content: [
          'يتم توفير المواد على موقع الهيئة على أساس "كما هي". لا تقدم الهيئة أي ضمانات، صريحة أو ضمنية، وبموجب هذا تنفي وتنقض جميع الضمانات الأخرى بما في ذلك، على سبيل المثال لا الحصر، الضمانات الضمنية أو شروط الصلاحية للتسويق أو الملاءمة لغرض معين أو عدم انتهاك الملكية الفكرية أو انتهاك الحقوق الأخرى.',
          'علاوة على ذلك، لا تضمن الهيئة ولا تقدم أي تمثيلات تتعلق بدقة أو النتائج المحتملة أو موثوقية استخدام المواد على موقعها أو غير ذلك فيما يتعلق بهذه المواد أو على أي مواقع مرتبطة بهذا الموقع.',
        ],
      },
      {
        title: 'التحديدات',
        icon: '⛔',
        content: [
          'في أي حال من الأحوال، لن تكون الهيئة أو مورديها مسؤولين عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، أضرار فقدان البيانات أو الربح، أو بسبب انقطاع الأعمال) الناشئة عن استخدام أو عدم القدرة على استخدام المواد على موقع الهيئة، حتى لو تم إخطار الهيئة أو ممثل مصرح به شفهياً أو كتابياً بإمكانية حدوث مثل هذا الضرر.',
          'لأن بعض الاختصاصات القضائية لا تسمح بتحديدات الضمانات الضمنية أو تحديدات المسؤولية عن الأضرار العرضية أو اللاحقة، قد لا تنطبق هذه التحديدات عليك.',
        ],
      },
      {
        title: 'دقة المواد',
        icon: '📊',
        content: [
          'قد تحتوي المواد على موقع الهيئة على أخطاء تقنية أو طباعية أو فوتوغرافية. لا تضمن الهيئة أن أي من المواد على موقعها دقيقة أو كاملة أو حالية.',
          'قد تجري الهيئة تغييرات على المواد الموجودة على موقعها في أي وقت بدون إشعار. ومع ذلك، لا تتعهد الهيئة بتحديث المواد.',
        ],
      },
      {
        title: 'الروابط',
        icon: '🔗',
        content: [
          'لم تقم الهيئة بمراجعة جميع المواقع المرتبطة بموقعها وليست مسؤولة عن محتويات أي موقع مرتبط بهذا الشكل. لا يعني إدراج أي رابط موافقة الهيئة على الموقع. يتم استخدام أي موقع مرتبط بهذا الشكل على مسؤولية المستخدم.',
          'إذا اكتشفت رابطاً ينتهك هذه الشروط أو غير مناسب، يرجى إخطارنا على الفور على webmaster@jhco.org.',
        ],
      },
      {
        title: 'التعديلات',
        icon: '✏️',
        content: [
          'قد تقوم الهيئة بمراجعة شروط الخدمة هذه لموقعها في أي وقت بدون إشعار. باستخدام هذا الموقع، أنت توافق على الالتزام بالنسخة الحالية من شروط الخدمة هذه.',
        ],
      },
      {
        title: 'القانون الواجب التطبيق',
        icon: '⚖️',
        content: [
          'تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين المملكة الأردنية الهاشمية، وأنت توافق بشكل لا يمكن إلغاؤه على الاختصاص الحصري لمحاكم هذا الموقع.',
        ],
      },
      {
        title: 'حقوق الملكية الفكرية',
        icon: '🎨',
        content: [
          'جميع المحتويات على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والصور ومقاطع الصوت والبرامج، هي ملكية الهيئة أو موردي محتوياتها وتحمى بموجب قوانين حقوق النشر الدولية.',
          'توافق على عدم إعادة إنتاج أو إعادة نقل أو توزيع أو نشر أو بيع أو نشر أو بث أو تداول أي مواد بدون الإذن الكتابي من الهيئة.',
          'اسم الهيئة وشعارها والعلامات ذات الصلة هي علامات تجارية للهيئة الخيرية الأردنية الهاشمية.',
        ],
      },
      {
        title: 'سلوك المستخدم',
        icon: '🤝',
        content: [
          'توافق على عدم استخدام هذا الموقع أو محتوياته بأي طريقة تنتهك أي قانون أو لائحة قابلة للتطبيق أو تنتهك حقوق الآخرين.',
          'يشمل السلوك المحظور المضايقة والإساءة ونشر المحتوى المسيء والرسائل الاقتحامية أو أي سلوك غير مناسب آخر.',
          'تحتفظ الهيئة بالحق في إزالة أي محتوى أو إنهاء الوصول إلى الموقع لانتهاكات هذه الشروط.',
        ],
      },
    ],
  },
};

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = termsContent[locale] || termsContent.en;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Warm Hero Section */}
      <section style={{
        background: gradients.goldToWarm,
        color: 'white',
        padding: '100px 32px',
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
            {ar ? '⚖️ القانونية' : '⚖️ LEGAL'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.lg} 0`,
            maxWidth: '800px',
            color: '#ffffff',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.95)',
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
            opacity: 0.8,
          }}>
            {content.lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content with Warm Beige Background */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        {content.sections.map((section, idx) => (
          <div key={idx} style={{
            marginBottom: `${spacing.xxxl}`,
            backgroundColor: idx % 2 === 0 ? royalColors.ivoryBg : 'transparent',
            padding: idx % 2 === 0 ? spacing.xl : '0',
            borderRadius: idx % 2 === 0 ? borderRadius.card : '0',
          }}>
            {/* Section Header with Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              marginBottom: spacing.lg,
            }}>
              <span style={{ fontSize: '32px' }}>{section.icon}</span>
              <h2 style={{
                fontSize: '28px',
                fontFamily: '"Merriweather", Georgia, serif',
                color: royalColors.darkNavy,
                margin: '0',
                borderBottom: `3px solid ${royalColors.hashemiteGold}`,
                paddingBottom: spacing.md,
                flex: 1,
              }}>
                {section.title}
              </h2>
            </div>

            {/* Content with better readability */}
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: royalColors.textOfficial,
                margin: `${spacing.md} 0`,
                marginLeft: ar ? '0' : (paragraph.startsWith('•') ? spacing.xl : '0'),
                marginRight: ar ? (paragraph.startsWith('•') ? spacing.xl : '0') : '0',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Warm CTA Section */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
        borderTop: `3px solid ${royalColors.hashemiteGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`/${locale}`} style={{
            display: 'inline-block',
            color: royalColors.darkNavy,
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            padding: `${spacing.md} ${spacing.xl}`,
            backgroundColor: royalColors.hashemiteGold,
            borderRadius: borderRadius.button,
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 12px rgba(232, 185, 35, 0.2)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.paleGold;
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(232, 185, 35, 0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.hashemiteGold;
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(232, 185, 35, 0.2)';
          }}
          >
            {ar ? '← العودة إلى الرئيسية' : 'Back to Home →'}
          </Link>
        </div>
      </section>
    </main>
  );
}
