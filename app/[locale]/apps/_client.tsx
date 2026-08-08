'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

const appsContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Mobile Applications',
      subtitle: 'Connecting Communities on the Go',
      overlay: 'Bringing humanitarian impact to every device',
    },

    // Introduction Section
    intro: {
      title: 'Our Mobile Platforms',
      description: 'The Jordan Hashemite Charity Organization has developed mobile applications to ensure our mission reaches people wherever they are, providing access to donations, volunteering, and community engagement at your fingertips.',
    },

    // iOS Section
    ios: {
      title: 'iOS Application',
      subtitle: 'For iPhone and iPad',
      icon: '🍎',
      description: 'Experience our charitable services optimized for Apple devices.',
      features: [
        {
          icon: '💝',
          title: 'Donate Securely',
          description: 'Make donations with Apple Pay and other secure payment methods',
        },
        {
          icon: '🤝',
          title: 'Volunteer Management',
          description: 'Find and register for volunteer opportunities in your area',
        },
        {
          icon: '📱',
          title: 'Push Notifications',
          description: 'Stay updated on campaigns and urgent calls to action',
        },
        {
          icon: '🗺️',
          title: 'Location Services',
          description: 'Discover nearby charitable initiatives and events',
        },
        {
          icon: '📊',
          title: 'Impact Tracking',
          description: 'See the direct impact of your contributions',
        },
        {
          icon: '🔐',
          title: 'Secure Account',
          description: 'Biometric login and encrypted data storage',
        },
      ],
      specs: [
        { label: 'Minimum Version', value: 'iOS 14.0 or later' },
        { label: 'Compatibility', value: 'iPhone 6s and newer, iPad' },
        { label: 'Size', value: '85 MB' },
        { label: 'Languages', value: 'English, Arabic, French' },
      ],
      buttons: [
        { label: 'Download on App Store', href: '#', icon: '📲' },
        { label: 'View Details', href: '#', icon: 'ℹ️' },
      ],
    },

    // Android Section
    android: {
      title: 'Android Application',
      subtitle: 'For Android Phones and Tablets',
      icon: '🤖',
      description: 'Seamless charitable services for Android users worldwide.',
      features: [
        {
          icon: '💝',
          title: 'Donate Easily',
          description: 'Support our causes with Google Pay and multiple payment options',
        },
        {
          icon: '🤝',
          title: 'Volunteer Opportunities',
          description: 'Browse and participate in meaningful volunteer work',
        },
        {
          icon: '🔔',
          title: 'Smart Notifications',
          description: 'Get alerts for campaigns that matter to you',
        },
        {
          icon: '🌍',
          title: 'Offline Mode',
          description: 'Access key features even without internet connection',
        },
        {
          icon: '📈',
          title: 'Impact Dashboard',
          description: 'Monitor your contributions and their real-world effects',
        },
        {
          icon: '🛡️',
          title: 'Privacy First',
          description: 'Your data is protected with industry-standard encryption',
        },
      ],
      specs: [
        { label: 'Minimum Version', value: 'Android 8.0 or higher' },
        { label: 'Compatibility', value: 'All modern Android devices' },
        { label: 'Size', value: '92 MB' },
        { label: 'Languages', value: 'English, Arabic, French' },
      ],
      buttons: [
        { label: 'Download on Google Play', href: '#', icon: '📲' },
        { label: 'View Details', href: '#', icon: 'ℹ️' },
      ],
    },

    // Features Comparison
    comparison: {
      title: 'Feature Comparison',
      description: 'Both platforms offer comprehensive functionality for engaging with our mission',
      features: [
        { name: 'Donations', ios: true, android: true },
        { name: 'Volunteer Registration', ios: true, android: true },
        { name: 'Push Notifications', ios: true, android: true },
        { name: 'Impact Tracking', ios: true, android: true },
        { name: 'Profile Management', ios: true, android: true },
        { name: 'Offline Mode', ios: false, android: true },
        { name: 'Biometric Login', ios: true, android: true },
        { name: 'Multi-language Support', ios: true, android: true },
      ],
    },

    // Support Section
    support: {
      title: 'Technical Support',
      description: 'Need help with our mobile apps?',
      items: [
        {
          icon: '❓',
          title: 'FAQs',
          description: 'Find answers to common questions about our applications',
          href: '/faq',
        },
        {
          icon: '📧',
          title: 'Contact Support',
          description: 'Reach our support team for technical assistance',
          href: '/contact',
        },
        {
          icon: '🐛',
          title: 'Report Issues',
          description: 'Help us improve by reporting bugs or suggesting features',
          href: '/contact',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Ready to Make an Impact?',
      subtitle: 'Download our app today and join millions of supporters worldwide',
      buttons: [
        { label: 'Get iOS App', href: '#', icon: '🍎' },
        { label: 'Get Android App', href: '#', icon: '🤖' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'التطبيقات المحمولة',
      subtitle: 'ربط المجتمعات أثناء التنقل',
      overlay: 'جلب التأثير الإنساني إلى كل جهاز',
    },

    // Introduction Section
    intro: {
      title: 'منصاتنا المحمولة',
      description: 'طورت الهيئة الخيرية الأردنية الهاشمية تطبيقات محمولة لضمان وصول مهمتنا إلى الناس أينما كانوا، مما يوفر إمكانية الوصول إلى التبرعات والتطوع والمشاركة المجتمعية في راحة يدك.',
    },

    // iOS Section
    ios: {
      title: 'تطبيق iOS',
      subtitle: 'لأجهزة iPhone و iPad',
      icon: '🍎',
      description: 'اختبر خدماتنا الخيرية المحسنة لأجهزة Apple.',
      features: [
        {
          icon: '💝',
          title: 'التبرع بأمان',
          description: 'قدم تبرعاتك باستخدام Apple Pay وطرق دفع آمنة أخرى',
        },
        {
          icon: '🤝',
          title: 'إدارة التطوع',
          description: 'ابحث عن فرص التطوع وسجل في برامجنا',
        },
        {
          icon: '📱',
          title: 'الإشعارات الفورية',
          description: 'ابقَ على اطلاع بالحملات والنداءات العاجلة',
        },
        {
          icon: '🗺️',
          title: 'خدمات الموقع',
          description: 'اكتشف المبادرات الخيرية والأحداث بالقرب منك',
        },
        {
          icon: '📊',
          title: 'تتبع التأثير',
          description: 'شاهد التأثير المباشر لمساهماتك',
        },
        {
          icon: '🔐',
          title: 'حساب آمن',
          description: 'تسجيل دخول بيومتري وتخزين البيانات المشفرة',
        },
      ],
      specs: [
        { label: 'أقل نسخة', value: 'iOS 14.0 أو أحدث' },
        { label: 'التوافقية', value: 'iPhone 6s والأحدث، iPad' },
        { label: 'الحجم', value: '85 MB' },
        { label: 'اللغات', value: 'الإنجليزية، العربية، الفرنسية' },
      ],
      buttons: [
        { label: 'حمل من App Store', href: '#', icon: '📲' },
        { label: 'المزيد من التفاصيل', href: '#', icon: 'ℹ️' },
      ],
    },

    // Android Section
    android: {
      title: 'تطبيق Android',
      subtitle: 'لهواتف وأجهزة لوحية Android',
      icon: '🤖',
      description: 'خدمات خيرية سلسة لمستخدمي Android في جميع أنحاء العالم.',
      features: [
        {
          icon: '💝',
          title: 'تبرع بسهولة',
          description: 'ادعم مبادراتنا باستخدام Google Pay وخيارات دفع متعددة',
        },
        {
          icon: '🤝',
          title: 'فرص التطوع',
          description: 'تصفح والمشاركة في عمل تطوعي هادف',
        },
        {
          icon: '🔔',
          title: 'إشعارات ذكية',
          description: 'احصل على تنبيهات للحملات المهمة بالنسبة لك',
        },
        {
          icon: '🌍',
          title: 'الوضع بدون اتصال',
          description: 'الوصول إلى الميزات الرئيسية بدون اتصال بالإنترنت',
        },
        {
          icon: '📈',
          title: 'لوحة معلومات التأثير',
          description: 'راقب مساهماتك وتأثيراتها الفعلية',
        },
        {
          icon: '🛡️',
          title: 'الخصوصية أولاً',
          description: 'بيانات محمية بتشفير بمعايير الصناعة',
        },
      ],
      specs: [
        { label: 'أقل نسخة', value: 'Android 8.0 أو أحدث' },
        { label: 'التوافقية', value: 'جميع أجهزة Android الحديثة' },
        { label: 'الحجم', value: '92 MB' },
        { label: 'اللغات', value: 'الإنجليزية، العربية، الفرنسية' },
      ],
      buttons: [
        { label: 'حمل من Google Play', href: '#', icon: '📲' },
        { label: 'المزيد من التفاصيل', href: '#', icon: 'ℹ️' },
      ],
    },

    // Features Comparison
    comparison: {
      title: 'مقارنة الميزات',
      description: 'كلا المنصتين توفران وظائف شاملة للتفاعل مع مهمتنا',
      features: [
        { name: 'التبرعات', ios: true, android: true },
        { name: 'تسجيل التطوع', ios: true, android: true },
        { name: 'الإشعارات الفورية', ios: true, android: true },
        { name: 'تتبع التأثير', ios: true, android: true },
        { name: 'إدارة الملف الشخصي', ios: true, android: true },
        { name: 'الوضع بدون اتصال', ios: false, android: true },
        { name: 'تسجيل دخول بيومتري', ios: true, android: true },
        { name: 'دعم متعدد اللغات', ios: true, android: true },
      ],
    },

    // Support Section
    support: {
      title: 'الدعم الفني',
      description: 'هل تحتاج إلى مساعدة بشأن تطبيقاتنا المحمولة؟',
      items: [
        {
          icon: '❓',
          title: 'الأسئلة الشائعة',
          description: 'ابحث عن إجابات للأسئلة الشائعة حول تطبيقاتنا',
          href: '/faq',
        },
        {
          icon: '📧',
          title: 'اتصل بالدعم',
          description: 'تواصل مع فريق الدعم الخاص بنا للمساعدة الفنية',
          href: '/contact',
        },
        {
          icon: '🐛',
          title: 'إبلاغ عن المشاكل',
          description: 'ساعدنا على التحسن من خلال الإبلاغ عن الأخطاء',
          href: '/contact',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'هل أنت مستعد لإحداث تأثير؟',
      subtitle: 'حمل تطبيقنا اليوم والتحق بملايين المؤيدين في جميع أنحاء العالم',
      buttons: [
        { label: 'احصل على تطبيق iOS', href: '#', icon: '🍎' },
        { label: 'احصل على تطبيق Android', href: '#', icon: '🤖' },
      ],
    },
  },
};

export default function AppsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = appsContent[locale] || appsContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 50%, ${royalColors.hashemiteGold} 100%)`,
        backgroundSize: '400% 400%',
        color: 'white',
        padding: '120px 32px',
        textAlign: textAlign as any,
        direction,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: ar ? '32px' : 'auto',
          left: ar ? 'auto' : '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '140px',
          opacity: 0.1,
        }}>
          📱
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            {ar ? '📱 التطبيقات الذكية' : '📱 MOBILE APPS'}
          </p>
          <h1 style={{
            fontSize: '52px',
            fontFamily: 'Garamond, serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            maxWidth: '800px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.hero.title}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0 0 12px 0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.hero.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontStyle: 'italic',
            margin: '0',
          }}>
            "{content.hero.overlay}"
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '100px 32px',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 24px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.intro.title}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: royalColors.textOfficial,
            maxWidth: '900px',
            margin: '0',
          }}>
            {content.intro.description}
          </p>
        </div>
      </section>

      {/* 3. iOS SECTION - Placeholder for brevity */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>
            <div style={{ order: ar ? 2 : 1 }}>
              <div style={{
                fontSize: '80px',
                marginBottom: '20px',
                textAlign: 'center',
              }}>
                {content.ios.icon}
              </div>
              <h2 style={{
                fontSize: '38px',
                fontFamily: 'Garamond, serif',
                color: royalColors.darkNavy,
                margin: '0 0 8px 0',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
                {content.ios.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: royalColors.hashemiteGold,
                margin: '0 0 16px 0',
                fontWeight: '600',
              }}>
                {content.ios.subtitle}
              </p>
            </div>
            <div style={{
              order: ar ? 1 : 2,
              textAlign: 'center',
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${royalColors.compassionTeal} 0%, ${royalColors.skyBlue} 100%)`,
                padding: '40px',
                borderRadius: '20px',
                color: 'white',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: shadows.lg,
              }}>
                <div style={{ fontSize: '100px', marginBottom: '20px' }}>📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANDROID SECTION - Placeholder for brevity */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>
            <div>
              <div style={{
                background: `linear-gradient(135deg, ${royalColors.impactGreen} 0%, ${royalColors.hashemiteGold} 100%)`,
                padding: '40px',
                borderRadius: '20px',
                color: 'white',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: shadows.lg,
              }}>
                <div style={{ fontSize: '100px', marginBottom: '20px' }}>📱</div>
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '80px',
                marginBottom: '20px',
                textAlign: 'center',
              }}>
                {content.android.icon}
              </div>
              <h2 style={{
                fontSize: '38px',
                fontFamily: 'Garamond, serif',
                color: royalColors.darkNavy,
                margin: '0 0 8px 0',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
                {content.android.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: royalColors.hashemiteGold,
                margin: '0 0 16px 0',
                fontWeight: '600',
              }}>
                {content.android.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
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
          }}>
            {content.cta.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {content.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={button.href}
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
