'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const privacyContent = {
  en: {
    title: 'Privacy Policy',
    heroTitle: 'Privacy & Data Protection',
    heroSubtitle: 'Your privacy is our priority. Learn how we protect your personal information.',
    lastUpdated: 'Last Updated: August 2024',
    sections: [
      { title: 'Information We Collect', icon: '📋', content: ['When you visit our website or use our services, we may collect personal information such as your name, email address, phone number, and mailing address. We also collect information about your browsing behavior, including pages visited and time spent on our site.', 'If you donate, volunteer, or participate in our programs, we collect additional information necessary to process your involvement and communicate with you about JHCO\'s work.', 'Like most websites, we use cookies and similar tracking technologies to enhance your browsing experience and gather analytics data.'] },
      { title: 'How We Use Your Information', icon: '🔄', content: ['We use your information to provide, maintain, and improve our services, including processing donations, managing volunteer programs, and sending newsletters.', 'Your information helps us communicate with you about JHCO programs, events, and important updates that may be relevant to your interests.', 'We analyze usage patterns to better understand how our website is used and to optimize user experience.', 'We may use your information to comply with legal obligations, enforce our terms, and protect the security of our services.'] },
      { title: 'Data Security', icon: '🔒', content: ['We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, and disclosure. All sensitive data transmission is encrypted using SSL/TLS technology.', 'Our security practices comply with international data protection standards and are regularly reviewed and updated to address emerging threats.', 'However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.'] },
      { title: 'Your Privacy Rights', icon: '✓', content: ['You have the right to access, correct, or delete your personal information. You can update your preferences or request data deletion by contacting our privacy team.', 'You may opt out of non-essential communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.', 'If you are in the EU or other regions with data protection regulations, you may have additional rights regarding your data, including the right to data portability and the right to object to certain processing.', 'We respect your privacy choices and will not discriminate against you for exercising your privacy rights.'] },
      { title: 'Third-Party Services', icon: '🔗', content: ['Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.', 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to strict confidentiality agreements.', 'We do not sell or rent your personal information to third parties for marketing purposes.'] },
      { title: 'International Data Transfers', icon: '🌍', content: ['JHCO operates internationally. Your information may be transferred to, stored in, and processed in countries other than your country of residence. By using our website, you consent to such transfers.', 'All international transfers are subject to appropriate safeguards and comply with data protection laws.'] },
      { title: 'Children\'s Privacy', icon: '👧', content: ['Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If we discover we have collected information from a child, we will promptly delete such information.', 'Parents or guardians who believe their child has provided information to us should contact us immediately.'] },
      { title: 'Contact Us', icon: '💬', content: ['If you have questions about this privacy policy or our privacy practices, please contact our Privacy Officer at: privacy@jhco.org or call +962 6 123 4567.', 'You may also write to us at: JHCO Privacy Office, Amman, Jordan.'] },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    heroTitle: 'الخصوصية وحماية البيانات',
    heroSubtitle: 'خصوصيتك أولويتنا. تعرف على كيفية حماية معلوماتك الشخصية.',
    lastUpdated: 'آخر تحديث: أغسطس 2024',
    sections: [
      { title: 'المعلومات التي نجمعها', icon: '📋', content: ['عند زيارتك لموقعنا أو استخدامك لخدماتنا، قد نجمع معلومات شخصية مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وعنوانك البريدي. كما نجمع معلومات عن سلوكك أثناء التصفح، بما في ذلك الصفحات التي تزورها والوقت الذي تقضيه على موقعنا.', 'إذا تبرعت أو تطوعت أو شاركت في برامجنا، نجمع معلومات إضافية ضرورية لمعالجة مشاركتك والتواصل معك بشأن عمل الهيئة.', 'مثل معظم المواقع الإلكترونية، نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح لديك وجمع بيانات التحليلات.'] },
      { title: 'كيفية استخدام معلوماتك', icon: '🔄', content: ['نستخدم معلوماتك لتقديم خدماتنا والحفاظ عليها وتحسينها، بما في ذلك معالجة التبرعات وإدارة برامج التطوع وإرسال النشرات الإخبارية.', 'تساعدك معلوماتك على التواصل معك بشأن برامج الهيئة والأحداث والتحديثات المهمة التي قد تكون ذات صلة باهتماماتك.', 'نحلل أنماط الاستخدام لفهم أفضل لكيفية استخدام موقعنا وتحسين تجربة المستخدم.', 'قد نستخدم معلوماتك للامتثال للالتزامات القانونية وفرض شروطنا وحماية أمان خدماتنا.'] },
      { title: 'أمان البيانات', icon: '🔒', content: ['نطبق تدابير أمان شاملة لحماية معلوماتك الشخصية من الوصول غير المصرح به والتغيير والكشف. يتم تشفير جميع نقل البيانات الحساسة باستخدام تقنية SSL/TLS.', 'تتوافق ممارسات الأمان لدينا مع معايير حماية البيانات الدولية ويتم مراجعتها وتحديثها بانتظام لمعالجة التهديدات الناشئة.', 'ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪. بينما نسعى جاهدين لحماية معلوماتك، لا يمكننا ضمان الأمان المطلق.'] },
      { title: 'حقوق خصوصيتك', icon: '✓', content: ['لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك تحديث تفضيلاتك أو طلب حذف البيانات بالاتصال بفريق الخصوصية لدينا.', 'يمكنك عدم تلقي الاتصالات غير الأساسية في أي وقت بالنقر على رابط "إلغاء الاشتراك" في رسائلنا الإلكترونية أو الاتصال بنا مباشرة.', 'إذا كنت في الاتحاد الأوروبي أو المناطق الأخرى ذات لوائح حماية البيانات، قد تكون لديك حقوق إضافية فيما يتعلق ببياناتك، بما في ذلك الحق في نقل البيانات والحق في الاعتراض على معالجة معينة.', 'نحترم خيارات الخصوصية لديك ولن نميز ضدك لممارسة حقوقك في الخصوصية.'] },
      { title: 'خدمات الطرف الثالث', icon: '🔗', content: ['قد يحتوي موقعنا على روابط لمواقع ويب تابعة لجهات خارجية. نحن غير مسؤولين عن ممارسات الخصوصية الخاصة بهم. نشجعك على مراجعة سياسات الخصوصية الخاصة بهم قبل تقديم أي معلومات.', 'قد نشارك معلوماتك مع مقدمي خدمات موثوقين من جهات خارجية يساعدوننا في تشغيل موقعنا وإجراء أعمالنا، خاضعين لاتفاقيات سرية صارمة.', 'نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة لأغراض التسويق.'] },
      { title: 'نقل البيانات الدولية', icon: '🌍', content: ['تعمل الهيئة على الصعيد الدولي. قد يتم نقل معلوماتك وتخزينها ومعالجتها في دول غير دولة إقامتك. باستخدامك لموقعنا، فإنك توافق على مثل هذا النقل.', 'جميع التحويلات الدولية تخضع لضمانات مناسبة والامتثال لقوانين حماية البيانات.'] },
      { title: 'خصوصية الأطفال', icon: '👧', content: ['موقعنا ليس موجهاً للأطفال دون سن 13. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا اكتشفنا أننا جمعنا معلومات من طفل، فسنحذفها على الفور.', 'يجب على الآباء أو الأوصياء الذين يعتقدون أن طفلهم قدم معلومات لنا الاتصال بنا على الفور.'] },
      { title: 'اتصل بنا', icon: '💬', content: ['إذا كان لديك أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، يرجى الاتصال بمسؤول الخصوصية لدينا على: privacy@jhco.org أو الاتصال على +962 6 123 4567.', 'يمكنك أيضاً كتابة إلينا على: مكتب خصوصية الهيئة الخيرية الأردنية الهاشمية، عمّان، الأردن.'] },
    ],
  },
};

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = privacyContent[locale] || privacyContent.en;

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
            backgroundColor: idx % 2 === 0 ? royalColors.warmBeige : 'transparent',
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
                color: royalColors.deepNavy,
                margin: '0',
                borderBottom: `3px solid ${royalColors.warmGold}`,
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
                color: royalColors.textDark,
                margin: `${spacing.md} 0`,
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Warm CTA Section */}
      <section style={{
        background: royalColors.warmBeige,
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
        borderTop: `3px solid ${royalColors.warmGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`/${locale}`} style={{
            display: 'inline-block',
            color: royalColors.deepNavy,
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            padding: `${spacing.md} ${spacing.xl}`,
            backgroundColor: royalColors.warmGold,
            borderRadius: borderRadius.button,
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 12px rgba(232, 185, 35, 0.2)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.goldLight;
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(232, 185, 35, 0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.warmGold;
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
