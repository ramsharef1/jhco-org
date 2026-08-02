import { getDictionary, type Locale } from '@/lib/i18n';
import { programs } from '@/lib/mockData';
import Link from 'next/link';

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #a8312f, #8b2f2d)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'ساهم معنا' : 'Make a Donation'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 0 }}>
            {ar ? 'كل تبرع يُحدث فرقاً حقيقياً في حياة الملايين' : 'Every donation makes a real difference in millions of lives'}
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Donation Amounts */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'اختر مبلغ التبرع' : 'Choose Donation Amount'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              {['$25', '$50', '$100', '$250', '$500', '$1000'].map((amount) => (
                <button
                  key={amount}
                  style={{
                    padding: '24px',
                    border: '2px solid #e8e4db',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#0a1428',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  {amount}
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <input
                type="text"
                placeholder={ar ? 'مبلغ مخصص' : 'Custom Amount'}
                style={{ padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '16px', width: '200px', textAlign: 'center' }}
              />
            </div>
          </div>

          {/* Donation Types */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'نوع التبرع' : 'Donation Type'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* One-Time */}
              <div style={{ padding: '32px', backgroundColor: '#f9f7f4', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {ar ? 'تبرع لمرة واحدة' : 'One-Time Donation'}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '16px' }}>
                  {ar ? 'ساهم بمبلغ محدد لدعم برنامج أو حملة معينة' : 'Contribute a specific amount to support a program or campaign'}
                </p>
                <button style={{ padding: '12px 32px', backgroundColor: '#a8312f', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                  {ar ? 'تبرع الآن' : 'Donate Now'}
                </button>
              </div>

              {/* Monthly */}
              <div style={{ padding: '32px', backgroundColor: '#0a1428', borderRadius: '8px', color: 'white' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                  {ar ? 'تبرع شهري' : 'Monthly Subscription'}
                </h3>
                <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6', marginBottom: '16px' }}>
                  {ar ? 'ساهم بشكل منتظم لضمان تأثير مستدام' : 'Contribute regularly to ensure sustained impact'}
                </p>
                <button style={{ padding: '12px 32px', backgroundColor: '#d4af37', color: '#0a1428', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                  {ar ? 'اشترك الآن' : 'Subscribe Now'}
                </button>
              </div>
            </div>
          </div>

          {/* Donate to Programs */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'ادعم برنامجاً محددًا' : 'Support a Specific Program'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {programs.slice(0, 6).map((program) => (
                <div key={program.id} style={{ padding: '24px', backgroundColor: '#f9f7f4', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? program.nameAr : program.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '16px' }}>
                    {ar ? program.descriptionAr : program.description}
                  </p>
                  <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', marginBottom: '16px' }}>
                    {ar ? program.impactAr : program.impact}
                  </p>
                  <button style={{ width: '100%', padding: '12px', backgroundColor: '#a8312f', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                    {ar ? 'ادعم هذا البرنامج' : 'Support This'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'لماذا تتبرع' : 'Why Donate'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: ar ? 'شفافية كاملة' : 'Full Transparency', desc: ar ? 'نشارك تقاريراً مفصلة عن استخدام التبرعات' : 'We share detailed reports on fund usage' },
              { title: ar ? 'تأثير مُقاس' : 'Measured Impact', desc: ar ? 'كل تبرع يُقاس تأثيره بدقة' : 'Every donation\'s impact is precisely measured' },
              { title: ar ? 'استقلالية' : 'Independence', desc: ar ? 'نعمل بحياد دون تحيز سياسي' : 'We operate with impartiality and no bias' },
              { title: ar ? 'ملايين مستفيدة' : 'Millions Served', desc: ar ? 'تبرعاتك تصل إلى أولئك الذين يحتاجونها' : 'Your donations reach those who need it most' },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '8px', borderLeft: '3px solid #d4af37' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#d4af37', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#ccc', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section style={{ padding: '64px 32px', backgroundColor: '#f9f7f4', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
            {ar ? 'معلومات ضريبية' : 'Tax Information'}
          </h3>
          <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: 0 }}>
            {ar ? 'JHCO هي منظمة خيرية مسجلة. قد تكون تبرعاتك قابلة للخصم من الضرائب. احتفظ برسالة التبرع الخاصة بك.' : 'JHCO is a registered charity. Your donations may be tax-deductible. Keep your donation receipt.'}
          </p>
        </div>
      </section>
    </>
  );
}
