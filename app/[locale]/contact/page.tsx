import { getDictionary, type Locale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('contact', locale);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 0 }}>
            {ar ? 'نحن هنا للإجابة على أسئلتك والاستماع لاقتراحاتك' : 'We\'re here to answer your questions and listen to your suggestions'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'معلومات التواصل' : 'Contact Information'}
              </h2>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  📍 {ar ? 'المقر الرئيسي' : 'Headquarters'}
                </h3>
                <p style={{ fontSize: '16px', color: '#3d3d3d', lineHeight: '1.8', margin: 0 }}>
                  {ar ? 'عمّان، الأردن' : 'Amman, Jordan'}
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ☎️ {ar ? 'الهاتف' : 'Phone'}
                </h3>
                <p style={{ fontSize: '16px', color: '#3d3d3d', margin: 0 }}>
                  +962 (0) 6 123 4567
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ✉️ {ar ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <p style={{ fontSize: '16px', color: '#3d3d3d', margin: 0 }}>
                  info@jhco.org
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  🌐 {ar ? 'وسائل التواصل' : 'Social Media'}
                </h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="#" style={{ color: '#0a1428', fontSize: '20px', textDecoration: 'none' }}>f</a>
                  <a href="#" style={{ color: '#0a1428', fontSize: '20px', textDecoration: 'none' }}>𝕏</a>
                  <a href="#" style={{ color: '#0a1428', fontSize: '20px', textDecoration: 'none' }}>in</a>
                  <a href="#" style={{ color: '#0a1428', fontSize: '20px', textDecoration: 'none' }}>📷</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    placeholder={ar ? 'الاسم الكامل' : 'Full Name'}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    placeholder={ar ? 'موضوع الرسالة' : 'Subject'}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    placeholder={ar ? 'اكتب رسالتك هنا' : 'Write your message here'}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', minHeight: '150px', boxSizing: 'border-box', fontFamily: 'inherit' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ padding: '12px 32px', backgroundColor: '#a8312f', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', alignSelf: 'flex-start' }}
                >
                  {ar ? 'أرسل الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الأقسام' : 'Departments'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { name: ar ? 'البرامج' : 'Programs', email: 'programs@jhco.org' },
              { name: ar ? 'التبرعات' : 'Donations', email: 'donate@jhco.org' },
              { name: ar ? 'التطوع' : 'Volunteering', email: 'volunteer@jhco.org' },
              { name: ar ? 'الشراكات' : 'Partnerships', email: 'partners@jhco.org' },
              { name: ar ? 'الإعلام' : 'Media', email: 'media@jhco.org' },
              { name: ar ? 'الدعم التقني' : 'Support', email: 'support@jhco.org' },
            ].map((dept, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #e8e4db' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {dept.name}
                </h3>
                <a href={`mailto:${dept.email}`} style={{ fontSize: '14px', color: '#d4af37', textDecoration: 'none' }}>
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
