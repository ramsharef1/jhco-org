import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('apps/ios', locale);
}

export default async function iOSLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '100px 32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', backgroundColor: 'rgba(212, 175, 55, 0.08)', borderRadius: '50%' }} />

        <div style={{ maxWidth: '1500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexDirection: ar ? 'row-reverse' : 'row', flexWrap: 'wrap' }}>
            {/* Left Content */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                🍎 {ar ? 'تطبيق iOS' : 'iOS App'}
              </p>
              <h1 style={{ fontSize: '64px', fontWeight: '400', margin: '0 0 24px 0', fontFamily: 'Georgia, serif', lineHeight: '1.1' }}>
                {ar ? (
                  <>
                    <span style={{ color: '#d4af37' }}>الإنسانية</span> في جيبك
                  </>
                ) : (
                  <>
                    Humanity in Your <span style={{ color: '#d4af37' }}>Pocket</span>
                  </>
                )}
              </h1>
              <p style={{ fontSize: '20px', color: '#d4af37', margin: '0 0 32px 0', maxWidth: '500px', lineHeight: '1.6', fontWeight: '300' }}>
                {ar ? 'اكتشف قوة التطبيقات المحسّنة لـ iOS. تجربة سلسة مع أداء متفوق وتصميم أصلي' : 'Discover the power of optimized iOS apps. Seamless experience with superior performance and native design'}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexDirection: ar ? 'row-reverse' : 'row', marginBottom: '32px', flexWrap: 'wrap' }}>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }}
                >
                  🍎 {ar ? 'حمّل من App Store' : 'Download on App Store'}
                </a>
                <Link
                  href={`${base}/apps`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', backgroundColor: 'transparent', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }}
                >
                  {ar ? 'اكتشف جميع التطبيقات' : 'Explore All Apps'}
                </Link>
              </div>

              <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>
                {ar ? 'متوفر على iOS 13 والإصدارات الأحدث • لا توجد رسوم • 4.8 نجمات' : 'Available on iOS 13+ • Free • 4.8★ Rating'}
              </p>
            </div>

            {/* Right Visual */}
            <div style={{ flex: 1, minWidth: '300px', textAlign: ar ? 'left' : 'right' }}>
              <div style={{ display: 'inline-block', position: 'relative' }}>
                <div style={{ fontSize: '200px', lineHeight: '1', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
                  📱
                </div>
                <div style={{ position: 'absolute', top: '20px', right: ar ? 'auto' : '-30px', left: ar ? '-30px' : 'auto', backgroundColor: '#d4af37', color: '#0a1428', padding: '12px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', boxShadow: '0 10px 30px rgba(212,175,55,0.3)', animation: 'pulse 2s infinite' }}>
                  ⭐ Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS-Specific Features */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'ميزات مُحسّنة لـ iOS' : 'iOS Optimized Features'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '16px auto 64px', textAlign: 'center' }}>
            {ar ? 'مصمم خصيصاً لأجهزة Apple مع أداء محسّن وتكامل عميق' : 'Purpose-built for Apple devices with optimized performance and deep integration'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '60px' }}>
            {[
              {
                icon: '⚡',
                title: ar ? 'أداء فائق السرعة' : 'Lightning-Fast Performance',
                description: ar ? 'تم تحسينه لمعالجات Apple الحديثة مع استهلاك أقل للبطارية' : 'Optimized for modern Apple processors with minimal battery drain',
              },
              {
                icon: '🔐',
                title: ar ? 'الخصوصية المدمجة' : 'Built-in Privacy',
                description: ar ? 'استفد من ميزات الخصوصية المتقدمة في iOS مثل App Tracking Transparency' : 'Leverage iOS privacy features including App Tracking Transparency',
              },
              {
                icon: '🎨',
                title: ar ? 'تصميم أصلي' : 'Native Design',
                description: ar ? 'يتبع إرشادات Apple Design وينسجم تماماً مع أنظمة التشغيل' : 'Follows Apple Design Guidelines and blends seamlessly with your device',
              },
              {
                icon: '📲',
                title: ar ? 'تكامل Siri' : 'Siri Integration',
                description: ar ? 'تحكم بالتطبيق بصوتك واستخدم الاختصارات المخصصة' : 'Voice control and custom Shortcuts for hands-free operation',
              },
              {
                icon: '⏱️',
                title: ar ? 'دعم الويدجت' : 'Widget Support',
                description: ar ? 'أضف ويدجتات إلى شاشتك الرئيسية للوصول السريع' : 'Add home screen widgets for quick access and information',
              },
              {
                icon: '🔔',
                title: ar ? 'إشعارات ذكية' : 'Smart Notifications',
                description: ar ? 'إشعارات مجمعة وموقوتة بذكاء لتقليل التشتت' : 'Intelligently grouped and scheduled notifications',
              },
              {
                icon: '🤝',
                title: ar ? 'مشاركة عبر AirDrop' : 'AirDrop Sharing',
                description: ar ? 'شارك الداخلية بسهولة باستخدام AirDrop مع أجهزة Apple القريبة' : 'Easily share content via AirDrop with nearby Apple devices',
              },
              {
                icon: '🔄',
                title: ar ? 'Handoff & Continuity' : 'Handoff & Continuity',
                description: ar ? 'ابدأ المهمة على جهاز وأنهها على آخر بسلاسة' : 'Start a task on one device and continue on another seamlessly',
              },
            ].map((feature, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9f7f2', padding: '32px', borderRadius: '12px', border: '1px solid #e8e4db', textAlign: ar ? 'right' : 'left' }}>
                <p style={{ fontSize: '48px', marginBottom: '16px', margin: '0 0 16px 0' }}>
                  {feature.icon}
                </p>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Store Features Showcase */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'ما يقوله المستخدمون' : 'What Users Say'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {[
              {
                rating: 5,
                title: ar ? 'تطبيق رائع ويسير العمل بسلاسة' : 'Amazing app, works like a charm',
                review: ar ? 'التصميم احترافي والواجهة سهلة جداً. أفضل تطبيق خيري استخدمته' : 'Professional design and intuitive interface. Best charity app I\'ve used',
                author: ar ? 'أحمد' : 'Ahmed',
                role: ar ? 'مستخدم عادي' : 'Regular User',
              },
              {
                rating: 5,
                title: ar ? 'أداء ممتاز والخصوصية مهمة' : 'Excellent performance and privacy-focused',
                review: ar ? 'التطبيق سريع جداً ولا يستهلك البطارية. أشعر بالأمان حقاً' : 'Super fast and battery efficient. Feels very secure',
                author: ar ? 'فاطمة' : 'Fatima',
                role: ar ? 'متطوعة' : 'Volunteer',
              },
              {
                rating: 5,
                title: ar ? 'سهولة الاستخدام لا تقارن' : 'Unmatched ease of use',
                review: ar ? 'جدتي تستطيع استخدامه بسهولة. التطبيق مصمم بذكاء حقاً' : 'My grandmother can use it easily. Brilliantly designed',
                author: ar ? 'محمد' : 'Mohammad',
                role: ar ? 'مانح' : 'Donor',
              },
            ].map((review, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e8e4db', boxShadow: '0 2px 8px rgba(10,20,40,0.04)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array(review.rating).fill(0).map((_, i) => (
                    <span key={i} style={{ fontSize: '18px' }}>⭐</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {review.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                  "{review.review}"
                </p>
                <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', margin: '0 0 4px 0' }}>
                    {review.author}
                  </p>
                  <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37', margin: '0 0 12px 0' }}>
                4.8★
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'تقييم مثالي' : 'Perfect Rating'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? '2,547 من المراجعات' : '2,547+ Reviews'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37', margin: '0 0 12px 0' }}>
                100K+
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'التنزيلات' : 'Downloads'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'نمو سريع' : 'Growing Fast'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37', margin: '0 0 12px 0' }}>
                0%
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'الأخطاء' : 'Crashes'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'استقرار مثالي' : 'Bulletproof'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37', margin: '0 0 12px 0' }}>
                &lt;2MB
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'استهلاك البطارية' : 'Battery Usage'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'محسّن بكفاءة' : 'Highly Optimized'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'التوافقية والدعم' : 'Compatibility & Support'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '48px', maxWidth: '600px', margin: '16px auto 48px', textAlign: 'center' }}>
            {ar ? 'يعمل بسلاسة على جميع أجهزة Apple الحديثة' : 'Seamlessly compatible with all modern Apple devices'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { device: 'iPhone 15 Pro Max', compatibility: '✓ Fully Optimized' },
              { device: 'iPhone 15 Pro', compatibility: '✓ Fully Optimized' },
              { device: 'iPhone 15', compatibility: '✓ Fully Optimized' },
              { device: 'iPhone 14 Series', compatibility: '✓ Fully Supported' },
              { device: 'iPhone 13 Series', compatibility: '✓ Fully Supported' },
              { device: 'iPhone 12 & Earlier', compatibility: '✓ iOS 13+' },
              { device: 'iPad (7th Gen+)', compatibility: '✓ Fully Supported' },
              { device: 'iPad Air (3rd Gen+)', compatibility: '✓ Fully Optimized' },
              { device: 'iPad Pro (11" & 12.9")', compatibility: '✓ Fully Optimized' },
              { device: 'iPad mini (5th Gen+)', compatibility: '✓ Fully Supported' },
              { device: 'Apple Watch', compatibility: '✓ Companion App' },
              { device: 'Apple Vision Pro', compatibility: '✓ Coming Soon' },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e8e4db', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428' }}>
                  {item.device}
                </span>
                <span style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700' }}>
                  {item.compatibility}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy Deep Dive */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الأمان والخصوصية أولاً' : 'Security & Privacy First'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ backgroundColor: '#f9f7f2', padding: '40px', borderRadius: '12px', border: '1px solid #e8e4db' }}>
              <p style={{ fontSize: '36px', marginBottom: '16px' }}>🔐</p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'التشفير من الدرجة العسكرية' : 'Military-Grade Encryption'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'تشفير AES-256 لجميع البيانات الحساسة. يتم فحص الخوادم بشكل مستقل' : 'AES-256 encryption for all sensitive data. Independently audited servers'}
              </p>
            </div>

            <div style={{ backgroundColor: '#f9f7f2', padding: '40px', borderRadius: '12px', border: '1px solid #e8e4db' }}>
              <p style={{ fontSize: '36px', marginBottom: '16px' }}>👤</p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'لا تتبع تجاري' : 'No Tracking'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'نحن لا نبيع بيانات المستخدم أو نسمح بتتبع الإعلانات' : 'We never sell user data or allow ad tracking'}
              </p>
            </div>

            <div style={{ backgroundColor: '#f9f7f2', padding: '40px', borderRadius: '12px', border: '1px solid #e8e4db' }}>
              <p style={{ fontSize: '36px', marginBottom: '16px' }}>✅</p>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'معايير دولية' : 'International Standards'}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'متطابق مع GDPR و CCPA والمعايير العالمية' : 'GDPR, CCPA, and international compliance certified'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'أسئلة شائعة عن iOS' : 'iOS App FAQs'}
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                q: ar ? 'ما هو متطلب iOS؟' : 'What is the iOS requirement?',
                a: ar ? 'يتطلب التطبيق iOS 13.0 أو أحدث. يعمل بشكل مثالي على iOS 15+' : 'The app requires iOS 13.0 or later. Optimized for iOS 15+',
              },
              {
                q: ar ? 'هل التطبيق آمن حقاً؟' : 'Is the app really secure?',
                a: ar ? 'نعم! نستخدم تشفير من الدرجة العسكرية وتم فحص الخادم من قبل خبراء أمان مستقلين' : 'Absolutely! We use military-grade encryption and undergo regular security audits by third-party experts',
              },
              {
                q: ar ? 'هل يمكن استخدام التطبيق بدون الإنترنت؟' : 'Can I use it without internet?',
                a: ar ? 'يعمل بعض الميزات بدون اتصال. ستحتاج للإنترنت لمزامنة البيانات' : 'Some features work offline. Internet needed for data sync and transactions',
              },
              {
                q: ar ? 'كم حجم التطبيق؟' : 'How much space does it use?',
                a: ar ? 'التطبيق يحتل حوالي 45 ميجابايت فقط من مساحة التخزين' : 'Just 45 MB of storage. Very lightweight compared to similar apps',
              },
              {
                q: ar ? 'هل يستهلك البطارية كثيراً؟' : 'Does it drain battery?',
                a: ar ? 'لا! تم تحسين التطبيق بكفاءة عالية. بطاريتك ستبقى معك طويلاً' : 'No! Highly optimized for battery life. Uses minimal background power',
              },
              {
                q: ar ? 'هل يعمل على iPad أيضاً؟' : 'Does it work on iPad?',
                a: ar ? 'نعم! التطبيق متوافق بنسبة 100% مع iPad وتم تحسينه للشاشات الكبيرة' : 'Yes! Fully compatible with iPad and optimized for larger screens',
              },
            ].map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '28px', borderRadius: '8px', border: '1px solid #e8e4db' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e8e4db' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0, marginTop: '12px' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '100px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px' }}>
            🍎 {ar ? 'جهز جهازك' : 'Ready to Join?'}
          </p>
          <h2 style={{ fontSize: '56px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'الإنسانية تبدأ من هاتفك' : 'Humanity Starts in Your Hand'}
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '48px', color: '#d4af37', maxWidth: '600px', margin: '24px auto 48px', lineHeight: '1.6', fontWeight: '300' }}>
            {ar ? 'حمّل التطبيق الآن واكتشف كيفية يمكنك إحداث فرق في حياة الملايين' : 'Download now and discover how you can make a difference in millions of lives'}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s' }}
            >
              🍎 {ar ? 'حمّل الآن' : 'Download Now'}
            </a>
            <Link
              href={`${base}/apps`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '18px', border: '2px solid #d4af37', cursor: 'pointer', transition: 'all 0.3s' }}
            >
              {ar ? 'جميع التطبيقات' : 'All Apps'}
            </Link>
          </div>

          <p style={{ fontSize: '14px', color: '#999' }}>
            {ar ? 'متوفر على App Store • تطبيق مجاني بلا رسوم • التحديثات مستمرة' : 'Available on App Store • Free app, no in-app purchases • Regular updates'}
          </p>
        </div>
      </section>

      {/* Footer Info */}
      <section style={{ padding: '60px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '32px' }}>
            {ar ? 'معلومات إضافية' : 'Additional Information'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '32px', marginBottom: '12px' }}>📚</p>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'مركز المساعدة' : 'Help Center'}
              </h4>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'اطّلع على الأسئلة الشائعة والدروس والمستندات' : 'Browse FAQs, tutorials, and documentation'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '32px', marginBottom: '12px' }}>💬</p>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'الدعم المباشر' : 'Live Support'}
              </h4>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'تحدث مع فريقنا في أي وقت' : 'Chat with our team anytime'}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '32px', marginBottom: '12px' }}>🔄</p>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'التحديثات المنتظمة' : 'Regular Updates'}
              </h4>
              <p style={{ fontSize: '14px', color: '#6b6b6b' }}>
                {ar ? 'ميزات جديدة كل شهر' : 'New features every month'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
