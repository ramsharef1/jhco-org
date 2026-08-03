import { mobileApps } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function AndroidAppsPage({
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
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            {ar ? 'تطبيقات الأندرويد' : 'Android Apps'}
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 24px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? (
              <>
                <span style={{ color: '#d4af37' }}>تطبيقاتنا</span> متاحة على Android
              </>
            ) : (
              <>
                Our Apps Available on <span style={{ color: '#d4af37' }}>Android</span>
              </>
            )}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '700px', lineHeight: '1.6' }}>
            {ar ? 'جميع تطبيقات الهيئة محسّنة بالكامل لأجهزة Android بأحدث الميزات والأداء الأمثل' : 'All JHCO apps fully optimized for Android with the latest features and peak performance'}
          </p>
        </div>
      </section>

      {/* Android-Specific Features */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'ميزات Android المتقدمة' : 'Advanced Android Features'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '12px auto 64px', textAlign: 'center' }}>
            {ar ? 'استمتع بأحدث تقنيات Android لتجربة تطبيق أسرع وأفضل' : 'Experience cutting-edge Android technology for faster, better app performance'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '80px' }}>
            {[
              {
                title: ar ? 'تعارض Material Design 3' : 'Material Design 3',
                description: ar ? 'واجهة مستخدم حديثة وسلسة متطابقة مع معايير Android الأحدث' : 'Modern and sleek UI matching the latest Android standards',
                icon: '🎨',
              },
              {
                title: ar ? 'تكامل النظام العميق' : 'Deep System Integration',
                description: ar ? 'تكامل كامل مع ميزات Android مثل الإشعارات والمشاركة والصيانة' : 'Full integration with Android features like notifications, sharing, and maintenance',
                icon: '⚙️',
              },
              {
                title: ar ? 'وضع الظلام الكامل' : 'Full Dark Mode',
                description: ar ? 'دعم شامل لوضع الظلام لتقليل إجهاد العين والحفاظ على البطارية' : 'Complete dark mode support for eye comfort and battery saving',
                icon: '🌙',
              },
              {
                title: ar ? 'الأداء المحسّن' : 'Optimized Performance',
                description: ar ? 'تطبيقات سريعة ومستقرة محسّنة لجميع إصدارات Android' : 'Fast and stable apps optimized for all Android versions',
                icon: '⚡',
              },
              {
                title: ar ? 'الوصول بدون الاتصال' : 'Offline Access',
                description: ar ? 'استمتع بميزات التطبيق حتى بدون اتصال إنترنت آمن' : 'Enjoy app features even without a secure internet connection',
                icon: '📡',
              },
              {
                title: ar ? 'الامتثال للخصوصية' : 'Privacy Compliance',
                description: ar ? 'الامتثال الكامل لسياسات خصوصية Android وحماية البيانات' : 'Full compliance with Android privacy policies and data protection',
                icon: '🔐',
              },
            ].map((feature, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #e8e4db', boxShadow: '0 2px 8px rgba(10,20,40,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</p>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
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

      {/* Android Apps Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تطبيقاتنا على Android' : 'Our Android Apps'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '12px auto 64px', textAlign: 'center' }}>
            {ar ? 'اختر التطبيق الذي يناسب احتياجاتك واحصل عليه من Google Play Store' : 'Choose the app that fits your needs and get it from Google Play Store'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {mobileApps.map((app) => (
              <div key={app.id} style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(10,20,40,0.08)', transition: 'all 0.4s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* App Icon Header */}
                <div style={{ backgroundColor: '#f0f0f0', padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e8e4db' }}>
                  <div style={{ fontSize: '48px' }}>{app.icon}</div>
                  <div style={{ textAlign: ar ? 'left' : 'right' }}>
                    <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                      {ar ? app.categoryAr : app.category}
                    </p>
                    <p style={{ fontSize: '10px', color: '#0a1428', fontWeight: '600', margin: 0 }}>
                      {ar ? 'Android المحسّن' : 'Android Optimized'}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                    {ar ? app.nameAr : app.name}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '20px' }}>
                    {ar ? app.descriptionAr : app.description}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                      {dict.apps.features}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {(ar ? app.featuresAr : app.features).slice(0, 3).map((feature, idx) => (
                        <span key={idx} style={{ fontSize: '12px', backgroundColor: '#f5f5f5', color: '#333', padding: '6px 12px', borderRadius: '4px', border: '1px solid #e8e4db' }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{ marginBottom: '24px', paddingTop: '20px', borderTop: '1px solid #e8e4db', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: '700', color: '#0a1428', margin: '0 0 4px 0' }}>
                        {app.rating}
                      </p>
                      <p style={{ fontSize: '11px', color: '#999', margin: 0, marginBottom: '4px' }}>
                        {dict.apps.rating}
                      </p>
                      <p style={{ fontSize: '11px', color: '#d4af37', margin: 0 }}>
                        ⭐ {app.reviews.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: '700', color: '#0a1428', margin: '0 0 4px 0' }}>
                        {app.downloads}
                      </p>
                      <p style={{ fontSize: '11px', color: '#999', margin: 0 }}>
                        {ar ? 'التحميلات' : 'Downloads'}
                      </p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button style={{ width: '100%', padding: '12px', backgroundColor: '#0a1428', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', transition: 'all 0.3s', marginTop: 'auto' }}>
                    🔵 {ar ? 'احصل عليه على Google Play' : 'Get on Google Play'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Android System Requirements */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'متطلبات النظام' : 'System Requirements'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '12px auto 64px', textAlign: 'center' }}>
            {ar ? 'تأكد من أن جهازك يفي بالحد الأدنى من المتطلبات للأداء الأمثل' : 'Ensure your device meets minimum requirements for optimal performance'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              {
                title: ar ? 'الحد الأدنى للإصدار' : 'Minimum Version',
                value: 'Android 8.0',
                description: ar ? 'Oreo وأحدث' : 'Oreo and newer',
              },
              {
                title: ar ? 'ذاكرة RAM' : 'RAM Memory',
                value: '2 GB+',
                description: ar ? 'للأداء السلس' : 'for smooth performance',
              },
              {
                title: ar ? 'مساحة التخزين' : 'Storage Space',
                value: '50-200 MB',
                description: ar ? 'حسب التطبيق' : 'per app',
              },
              {
                title: ar ? 'الاتصال' : 'Connectivity',
                value: 'WiFi/4G',
                description: ar ? 'للميزات الكاملة' : 'for full features',
              },
            ].map((req, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #e8e4db', boxShadow: '0 2px 8px rgba(10,20,40,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  {req.title}
                </p>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {req.value}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الأمان والخصوصية' : 'Security & Privacy'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '40px', marginBottom: '24px' }}>🔒</p>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'تشفير من الدرجة البنكية' : 'Bank-Level Encryption'}
              </h3>
              <ul style={{ fontSize: '16px', color: '#6b6b6b', lineHeight: '1.8', margin: 0, paddingLeft: '24px' }}>
                <li>{ar ? 'تشفير بيانات النهاية إلى النهاية' : 'End-to-end data encryption'}</li>
                <li>{ar ? 'حماية معلومات المستخدم الشاملة' : 'Comprehensive user information protection'}</li>
                <li>{ar ? 'الامتثال لمعايير GDPR و CCPA' : 'GDPR and CCPA compliance'}</li>
                <li>{ar ? 'عمليات تدقيق الأمان المنتظمة' : 'Regular security audits'}</li>
              </ul>
            </div>

            <div>
              <p style={{ fontSize: '40px', marginBottom: '24px' }}>👤</p>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'التحكم في الخصوصية' : 'Privacy Control'}
              </h3>
              <ul style={{ fontSize: '16px', color: '#6b6b6b', lineHeight: '1.8', margin: 0, paddingLeft: '24px' }}>
                <li>{ar ? 'صلاحيات التطبيق الشفافة' : 'Transparent app permissions'}</li>
                <li>{ar ? 'التحكم الكامل في البيانات الشخصية' : 'Full personal data control'}</li>
                <li>{ar ? 'سهولة حذف البيانات' : 'Easy data deletion'}</li>
                <li>{ar ? 'عدم مشاركة البيانات مع أطراف ثالثة' : 'No third-party data sharing'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Google Play Store CTA */}
      <section style={{ padding: '80px 32px', backgroundColor: '#0a1428' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            {ar ? 'احصل عليها الآن' : 'Get Started Now'}
          </p>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'تحميل تطبيقات JHCO على Android' : 'Download JHCO Apps on Android'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '48px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            {ar ? 'انضم إلى الملايين من المستخدمين الذين يعملون مع الهيئة من خلال تطبيقاتنا على Android' : 'Join millions of users making an impact with JHCO through our Android apps'}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button style={{ padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '12px' }}>
              🔵 {ar ? 'احصل على Google Play' : 'Get on Google Play'}
            </button>
            <Link href={`${base}/apps`} style={{ display: 'inline-flex', padding: '16px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '16px', border: '2px solid #d4af37', transition: 'all 0.3s', alignItems: 'center', gap: '12px' }}>
              {ar ? 'جميع التطبيقات' : 'All Apps'}
            </Link>
          </div>

          <p style={{ fontSize: '14px', color: '#999' }}>
            {ar ? 'متوفر على متجر Google Play الرسمي' : 'Available on official Google Play Store'}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'أسئلة Android الشائعة' : 'Android FAQs'}
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                q: ar ? 'ما أقدم إصدار Android يدعمه التطبيق؟' : 'What is the oldest Android version supported?',
                a: ar ? 'جميع تطبيقاتنا تدعم Android 8.0 Oreo والإصدارات الأحدث لضمان التوافق الواسع.' : 'Our apps support Android 8.0 Oreo and newer to ensure broad compatibility.',
              },
              {
                q: ar ? 'هل التطبيقات تستهلك الكثير من البيانات؟' : 'Do the apps consume lots of data?',
                a: ar ? 'لا، تم تحسين تطبيقاتنا لاستخدام الحد الأدنى من البيانات. استخدام البيانات يعتمد على ميزات محددة مثل الإشعارات والتحديثات.' : 'No, our apps are optimized for minimal data usage. Data consumption depends on specific features like notifications and updates.',
              },
              {
                q: ar ? 'هل يمكنني تثبيت التطبيق على بطاقة SD؟' : 'Can I install the app on an SD card?',
                a: ar ? 'معظم تطبيقاتنا يمكن تثبيتها على بطاقة SD من خلال إعدادات Android. تحقق من وصف التطبيق على Google Play للتفاصيل.' : 'Most of our apps can be installed on SD cards through Android settings. Check the app description on Google Play for details.',
              },
              {
                q: ar ? 'كيف أحدث التطبيق إلى أحدث إصدار؟' : 'How do I update to the latest version?',
                a: ar ? 'افتح Google Play Store وابحث عن التطبيق ثم انقر فوق "تحديث". يمكنك أيضاً تفعيل التحديثات التلقائية في الإعدادات.' : 'Open Google Play Store, search for the app, and tap "Update". You can also enable automatic updates in settings.',
              },
              {
                q: ar ? 'ماذا أفعل إذا واجهت خطأ أثناء التثبيت؟' : 'What if I encounter an error during installation?',
                a: ar ? 'حاول مسح ذاكرة التخزين المؤقت لـ Google Play، أعد تشغيل جهازك، أو أعد تثبيت التطبيق. إذا استمرت المشكلة، تواصل مع دعمنا.' : 'Try clearing Google Play cache, restarting your device, or reinstalling the app. If the issue persists, contact our support.',
              },
            ].map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #e8e4db' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'هل تحتاج إلى المساعدة؟' : 'Need Help?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'فريق الدعم الخاص بنا متاح 24/7 للإجابة على أسئلتك' : 'Our support team is available 24/7 to answer your questions'}
          </p>
          <Link href={`${base}/contact`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'اتصل بنا' : 'Contact Support'}
          </Link>
        </div>
      </section>
    </>
  );
}
