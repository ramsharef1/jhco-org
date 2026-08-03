import { mobileApps } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function AppsPage({
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
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            {dict.apps.label}
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 24px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? (
              <>
                <span style={{ color: '#d4af37' }}>{dict.apps.titleAccent}</span> {dict.apps.titlePre}
              </>
            ) : (
              <>
                {dict.apps.titlePre} <span style={{ color: '#d4af37' }}>{dict.apps.titleAccent}</span>
              </>
            )}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '700px', lineHeight: '1.6' }}>
            {dict.apps.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Apps Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تطبيقاتنا الرئيسية' : 'Our Featured Apps'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '12px auto 64px', textAlign: 'center' }}>
            {ar ? 'اختر التطبيق الذي يناسب احتياجاتك وابدأ رحلتك معنا' : 'Choose the app that fits your needs and start your journey with us'}
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
                        {dict.apps.downloads}
                      </p>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', flexDirection: ar ? 'row-reverse' : 'row' }}>
                    <button style={{ flex: 1, padding: '12px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', transition: 'all 0.3s' }}>
                      🍎 App Store
                    </button>
                    <button style={{ flex: 1, padding: '12px', backgroundColor: '#0a1428', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', transition: 'all 0.3s' }}>
                      🔵 Play Store
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Benefits Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'لماذا تختار تطبيقاتنا' : 'Why Choose Our Apps'}
          </h2>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '64px', maxWidth: '600px', margin: '12px auto 64px', textAlign: 'center' }}>
            {ar ? 'استفد من التكنولوجيا الحديثة للمشاركة في مهمتنا الإنسانية' : 'Leverage cutting-edge technology to participate in our humanitarian mission'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              {
                title: ar ? 'سهولة الاستخدام' : 'Easy to Use',
                description: ar ? 'واجهة بديهية مصممة لجميع الأعمار والمستويات التقنية' : 'Intuitive interface designed for all ages and technical levels',
                icon: '✨',
              },
              {
                title: ar ? 'تتبع التأثير' : 'Track Impact',
                description: ar ? 'اطّلع في الوقت الفعلي على تأثير مساهمتك وتطوعك' : 'See real-time impact of your contributions and volunteering',
                icon: '📊',
              },
              {
                title: ar ? 'آمن وموثوق' : 'Secure & Trusted',
                description: ar ? 'تشفير من الدرجة الأولى وحماية بيانات شاملة' : 'Bank-level encryption and comprehensive data protection',
                icon: '🔒',
              },
              {
                title: ar ? 'دعم متعدد اللغات' : 'Multi-Language',
                description: ar ? 'اختر لغتك المفضلة والعمل مع فريقك بسهولة' : 'Choose your preferred language and work seamlessly',
                icon: '🌍',
              },
              {
                title: ar ? 'التحديثات المستمرة' : 'Regular Updates',
                description: ar ? 'ميزات جديدة وتحسينات مستمرة بناءً على ملاحظاتك' : 'New features and improvements based on your feedback',
                icon: '🚀',
              },
              {
                title: ar ? 'الدعم 24/7' : '24/7 Support',
                description: ar ? 'فريق الدعم الخاص بنا جاهز دائماً لمساعدتك' : 'Our support team is always ready to help you',
                icon: '💬',
              },
            ].map((benefit, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #e8e4db', boxShadow: '0 2px 8px rgba(10,20,40,0.04)', textAlign: 'center' }}>
                <p style={{ fontSize: '40px', marginBottom: '16px' }}>{benefit.icon}</p>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'ابدأ اليوم' : 'Get Started Today'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', marginBottom: '48px', lineHeight: '1.6' }}>
            {ar ? 'حمّل أي من تطبيقاتنا الآن واكتشف كيفية يمكنك الانضمام إلى مهمتنا الإنسانية العالمية' : 'Download any of our apps now and discover how you can join our global humanitarian mission'}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button style={{ padding: '16px 48px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '12px' }}>
              🍎 {dict.apps.downloadOnAppStore}
            </button>
            <button style={{ padding: '16px 48px', backgroundColor: '#0a1428', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '6px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '12px' }}>
              🔵 {dict.apps.getOnGooglePlay}
            </button>
          </div>

          <p style={{ fontSize: '14px', color: '#999' }}>
            {ar ? 'متوفر على iOS و Android' : 'Available on iOS and Android'}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                q: ar ? 'هل التطبيقات آمنة؟' : 'Are the apps secure?',
                a: ar ? 'نعم، جميع تطبيقاتنا تستخدم تشفيراً من الدرجة البنكية وتلتزم بأعلى معايير الحماية والخصوصية.' : 'Yes, all our apps use bank-level encryption and comply with the highest security and privacy standards.',
              },
              {
                q: ar ? 'هل التطبيقات مجانية؟' : 'Are the apps free?',
                a: ar ? 'نعم، جميع تطبيقاتنا مجانية تماماً. لا توجد أي رسوم خفية أو اشتراكات إضافية.' : 'Yes, all our apps are completely free. There are no hidden fees or additional subscriptions.',
              },
              {
                q: ar ? 'كم مساحة التخزين المطلوبة؟' : 'How much storage is required?',
                a: ar ? 'تتطلب معظم تطبيقاتنا من 50 إلى 200 ميجابايت من مساحة التخزين الحرة، حسب التطبيق.' : 'Our apps require between 50-200 MB of free storage, depending on the app.',
              },
              {
                q: ar ? 'هل يمكنني استخدام التطبيق بدون اتصال إنترنت؟' : 'Can I use the app offline?',
                a: ar ? 'بعض التطبيقات توفر وضعاً بدون اتصال محدوداً. تحقق من وصف كل تطبيق لمعرفة المميزات المتاحة بدون اتصال.' : 'Some apps offer limited offline functionality. Check each app description for offline features.',
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

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'تابعنا في كل مكان' : 'Follow Us Everywhere'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'وصّل إلى مليون قلب في جميع أنحاء العالم من خلال تطبيقاتنا' : 'Reach millions of hearts around the world through our apps'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', marginRight: '16px', marginBottom: '16px' }}>
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
          <Link href={`${base}/get-involved/volunteer`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', border: '2px solid #d4af37', transition: 'all 0.3s' }}>
            {ar ? 'تطوع معنا' : 'Volunteer With Us'}
          </Link>
        </div>
      </section>
    </>
  );
}
