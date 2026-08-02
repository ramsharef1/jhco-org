'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const accessibilityContent = {
  en: {
    title: 'Accessibility Statement',
    heroTitle: 'Accessibility & Inclusivity',
    heroSubtitle: 'We are committed to ensuring our website is accessible to all users, regardless of ability.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      {
        title: 'Our Commitment',
        content: [
          'The Jordan Hashemite Charity Organization (JHCO) is committed to ensuring that our website is accessible to all individuals, including those with disabilities. We believe that digital accessibility is a fundamental right and essential to our mission of serving humanity.',
          'We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and work continuously to improve the accessibility of our digital platforms.',
        ],
      },
      {
        title: 'WCAG 2.1 Level AA Compliance',
        content: [
          'Our website has been designed and tested to meet WCAG 2.1 Level AA standards. These guidelines ensure that web content is:',
          '• Perceivable: Information and user interface components must be presentable to users',
          '• Operable: Users must be able to navigate and use all functionality via keyboard and other assistive technologies',
          '• Understandable: Text must be readable and pages must be predictable in their operation',
          '• Robust: Content must be compatible with current and future assistive technologies',
        ],
      },
      {
        title: 'Accessibility Features',
        content: [
          'Our website includes the following accessibility features:',
          '• Semantic HTML structure for proper content organization',
          '• Alt text for all images to support screen readers',
          '• Keyboard navigation support for all interactive elements',
          '• Sufficient color contrast ratios meeting WCAG AA standards',
          '• Resizable text without loss of functionality',
          '• Clear and descriptive link text',
          '• Proper heading hierarchy for logical content structure',
          '• Video captions and transcripts where applicable',
          '• Support for screen readers including NVDA, JAWS, and VoiceOver',
          '• Language identification for multilingual content (English and Arabic)',
        ],
      },
      {
        title: 'Keyboard Navigation',
        content: [
          'All functionality of the website is available from the keyboard. Users can navigate through the website using Tab and Shift+Tab keys, and activate buttons and links using the Enter key.',
          'A visible focus indicator is displayed for all interactive elements to show which element currently has keyboard focus.',
        ],
      },
      {
        title: 'Screen Reader Support',
        content: [
          'Our website is designed to be compatible with popular screen readers including:',
          '• NVDA (NonVisual Desktop Access)',
          '• JAWS (Job Access With Speech)',
          '• Apple VoiceOver',
          '• Android TalkBack',
          'We use proper ARIA labels and roles to ensure all interactive elements are properly announced to screen reader users.',
        ],
      },
      {
        title: 'Text Size and Zoom',
        content: [
          'Users can adjust text size using browser features without breaking page layout. The website supports up to 200% zoom level without loss of functionality or content.',
          'We avoid using text as images, which allows users to adjust font size and style as needed.',
        ],
      },
      {
        title: 'Color and Contrast',
        content: [
          'All text and interactive elements meet or exceed WCAG AA color contrast ratios (4.5:1 for normal text, 3:1 for large text).',
          'We do not rely on color alone to convey information. Status messages, errors, and important information are accompanied by text descriptions.',
        ],
      },
      {
        title: 'Language Support',
        content: [
          'Our website is available in both English and Arabic. The page language is properly identified in the HTML markup to support assistive technologies in providing correct pronunciation and grammar rules.',
        ],
      },
      {
        title: 'Known Accessibility Issues',
        content: [
          'We are committed to identifying and resolving accessibility barriers. While we strive for full accessibility, some third-party content or embedded resources may have limitations. We continuously work to replace or update such content.',
          'If you encounter any accessibility issues, please report them to us so we can address them promptly.',
        ],
      },
      {
        title: 'Accessibility Support',
        content: [
          'For questions or feedback regarding the accessibility of our website, please contact our Accessibility Officer:',
          'Email: accessibility@jhco.org',
          'Phone: +962 6 123 4567',
          'We welcome all feedback and will respond to accessibility inquiries within 5 business days.',
        ],
      },
      {
        title: 'Third-Party Services',
        content: [
          'Our website may contain embedded content from third-party services. While we select partners with accessibility in mind, we do not have full control over their accessibility practices. If you encounter accessibility barriers in third-party content, please let us know.',
        ],
      },
      {
        title: 'Continuous Improvement',
        content: [
          'Accessibility is an ongoing commitment. We regularly conduct accessibility audits, user testing, and monitor feedback to identify areas for improvement. Our development team receives ongoing training in accessible web design and development practices.',
        ],
      },
    ],
  },
  ar: {
    title: 'بيان الوصولية',
    heroTitle: 'الوصولية والشمولية',
    heroSubtitle: 'نحن ملتزمون بضمان أن موقعنا متاح لجميع المستخدمين، بغض النظر عن قدراتهم.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      {
        title: 'التزامنا',
        content: [
          'الهيئة الخيرية الأردنية الهاشمية ملتزمة بضمان أن موقعنا الإلكتروني متاح لجميع الأفراد، بما في ذلك أولئك الذين يعانون من إعاقات. نعتقد أن الوصولية الرقمية حق أساسي وضروري لتحقيق مهمتنا في خدمة الإنسانية.',
          'نسعى جاهدين للامتثال لمعايير إرشادات الوصولية إلى محتوى الويب (WCAG) 2.1 المستوى AA والعمل بشكل مستمر على تحسين وصولية منصاتنا الرقمية.',
        ],
      },
      {
        title: 'امتثال WCAG 2.1 المستوى AA',
        content: [
          'تم تصميم واختبار موقعنا ليتوافق مع معايير WCAG 2.1 المستوى AA. تضمن هذه الإرشادات أن محتوى الويب:',
          '• قابل للإدراك: يجب أن تكون المعلومات ومكونات واجهة المستخدم قابلة للعرض للمستخدمين',
          '• قابل التشغيل: يجب أن يتمكن المستخدمون من التنقل واستخدام جميع الوظائف عبر لوحة المفاتيح والتقنيات المساعدة الأخرى',
          '• مفهوم: يجب أن يكون النص مقروءاً والصفحات يجب أن تكون متوقعة في عملها',
          '• قوي: يجب أن يكون المحتوى متوافقاً مع التقنيات المساعدة الحالية والمستقبلية',
        ],
      },
      {
        title: 'ميزات الوصولية',
        content: [
          'يتضمن موقعنا ميزات الوصولية التالية:',
          '• هيكل HTML دلالي لتنظيم المحتوى الصحيح',
          '• نصوص بديلة لجميع الصور لدعم قارئات الشاشة',
          '• دعم التنقل عبر لوحة المفاتيح لجميع العناصر التفاعلية',
          '• نسب تباين ألوان كافية تفي بمعايير WCAG AA',
          '• نص قابل للتغيير الحجم بدون فقدان الوظائف',
          '• نص رابط واضح وموصوف',
          '• تسلسل هرمي صحيح للعناوين لهيكل محتوى منطقي',
          '• تسميات توضيحية لمقاطع الفيديو ونصوص كاملة حيث ينطبق الأمر',
          '• دعم لقارئات الشاشة بما في ذلك NVDA و JAWS و VoiceOver',
          '• تحديد اللغة للمحتوى متعدد اللغات (الإنجليزية والعربية)',
        ],
      },
      {
        title: 'التنقل عبر لوحة المفاتيح',
        content: [
          'جميع وظائف الموقع متاحة من لوحة المفاتيح. يمكن للمستخدمين التنقل عبر الموقع باستخدام مفاتيح Tab و Shift+Tab، وتفعيل الأزرار والروابط باستخدام مفتاح الإدخال.',
          'يتم عرض مؤشر تركيز مرئي لجميع العناصر التفاعلية لإظهار العنصر الذي يحتوي على تركيز لوحة المفاتيح حالياً.',
        ],
      },
      {
        title: 'دعم قارئات الشاشة',
        content: [
          'تم تصميم موقعنا ليكون متوافقاً مع قارئات الشاشة الشهيرة بما في ذلك:',
          '• NVDA (NonVisual Desktop Access)',
          '• JAWS (Job Access With Speech)',
          '• Apple VoiceOver',
          '• Android TalkBack',
          'نستخدم تسميات وأدوار ARIA الصحيحة لضمان إعلان جميع العناصر التفاعلية بشكل صحيح لمستخدمي قارئات الشاشة.',
        ],
      },
      {
        title: 'حجم النص والتكبير',
        content: [
          'يمكن للمستخدمين ضبط حجم النص باستخدام ميزات المستعرض بدون كسر تخطيط الصفحة. يدعم الموقع ما يصل إلى 200٪ مستوى تكبير بدون فقدان الوظائف أو المحتوى.',
          'نتجنب استخدام النص كصور، مما يسمح للمستخدمين بضبط حجم الخط والنمط حسب الحاجة.',
        ],
      },
      {
        title: 'اللون والتباين',
        content: [
          'يفي جميع النصوص والعناصر التفاعلية أو يتجاوز نسب تباين الألوان WCAG AA (4.5:1 للنص العادي، 3:1 للنص الكبير).',
          'لا نعتمد على اللون وحده لنقل المعلومات. رسائل الحالة والأخطاء والمعلومات المهمة مصحوبة بأوصاف نصية.',
        ],
      },
      {
        title: 'دعم اللغة',
        content: [
          'يتوفر موقعنا باللغتين الإنجليزية والعربية. يتم تحديد لغة الصفحة بشكل صحيح في علامات HTML لدعم التقنيات المساعدة في توفير القواعد الصحيحة للنطق والقواعد النحوية.',
        ],
      },
      {
        title: 'المشاكل المعروفة في الوصولية',
        content: [
          'نحن ملتزمون بتحديد وحل حواجز الوصولية. بينما نسعى للوصولية الكاملة، قد يكون لبعض محتوى الطرف الثالث أو الموارد المدمجة قيود. نعمل باستمرار على استبدال أو تحديث مثل هذا المحتوى.',
          'إذا واجهت أي مشاكل في الوصولية، يرجى إخطارنا حتى نتمكن من حلها على الفور.',
        ],
      },
      {
        title: 'دعم الوصولية',
        content: [
          'للأسئلة أو التعليقات بخصوص وصولية موقعنا، يرجى الاتصال بمسؤول الوصولية لدينا:',
          'البريد الإلكتروني: accessibility@jhco.org',
          'الهاتف: +962 6 123 4567',
          'نرحب بجميع التعليقات وسنرد على استفسارات الوصولية في غضون 5 أيام عمل.',
        ],
      },
      {
        title: 'خدمات الطرف الثالث',
        content: [
          'قد يحتوي موقعنا على محتوى مدمج من خدمات الطرف الثالث. بينما نختار الشركاء مع مراعاة الوصولية، ليس لدينا السيطرة الكاملة على ممارسات الوصولية الخاصة بهم. إذا واجهت حواجز وصولية في محتوى الطرف الثالث، يرجى إخطارنا.',
        ],
      },
      {
        title: 'التحسين المستمر',
        content: [
          'الوصولية التزام مستمر. نجري بانتظام تدقيقات الوصولية واختبارات المستخدمين ومراقبة التعليقات لتحديد مجالات التحسين. يتلقى فريق التطوير لدينا تدريباً مستمراً في ممارسات تصميم وتطوير الويب الوصول.',
        ],
      },
    ],
  },
};

export default function AccessibilityPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = accessibilityContent[locale] || accessibilityContent.en;

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
            {ar ? '♿ الوصولية' : '♿ ACCESSIBILITY'}
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
