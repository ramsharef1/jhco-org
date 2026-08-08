import { getDictionary, type Locale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('get-involved/volunteer', locale);
}

export default async function VolunteerPage({
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
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'تطوع معنا' : 'Volunteer With Us'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 0 }}>
            {ar ? 'كن جزءاً من فريق المتطوعين العاملين على تغيير العالم' : 'Be part of a volunteer team changing the world'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Why Volunteer */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'لماذا تتطوع' : 'Why Volunteer'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {ar ? 'احدث فرقاً' : 'Make a Difference'}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d' }}>
                  {ar ? 'ساهم مباشرة في تحسين حياة الآلاف من الأشخاص المحتاجين حول العالم' : 'Directly contribute to improving the lives of thousands of people in need around the world'}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {ar ? 'تطور مهاراتك' : 'Develop Skills'}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d' }}>
                  {ar ? 'اكتسب خبرات جديدة وتطور مهاراتك من خلال العمل في بيئة إنسانية متنوعة' : 'Gain new experience and develop skills in a diverse humanitarian environment'}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {ar ? 'توسع شبكتك' : 'Build Connections'}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d' }}>
                  {ar ? 'التقي بأشخاص متحمسين من حول العالم يشاركونك نفس القيم' : 'Meet passionate people worldwide who share your values'}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {ar ? 'نمو شخصي' : 'Personal Growth'}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d' }}>
                  {ar ? 'انمِ على الصعيد الشخصي وكن جزءاً من شيء أكبر من نفسك' : 'Grow personally and be part of something bigger than yourself'}
                </p>
              </div>
            </div>
          </div>

          {/* Opportunity Types */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'فرص التطوع' : 'Volunteer Opportunities'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {[
                { title: ar ? 'ميداني' : 'Field', desc: ar ? 'عمل مباشر مع المستفيدين' : 'Direct work with beneficiaries', icon: '🌍' },
                { title: ar ? 'بدون منصب (Remote)' : 'Remote', desc: ar ? 'ساهم من منزلك' : 'Contribute from home', icon: '💻' },
                { title: ar ? 'إداري' : 'Administrative', desc: ar ? 'دعم العمليات الإدارية' : 'Support operations', icon: '📋' },
                { title: ar ? 'متخصص' : 'Specialized', desc: ar ? 'استخدم مهاراتك المتخصصة' : 'Use your expertise', icon: '🎯' },
              ].map((opp, idx) => (
                <div key={idx} style={{ padding: '32px', backgroundColor: '#f9f7f4', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{opp.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {opp.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '16px' }}>
                    {opp.desc}
                  </p>
                  <button style={{ padding: '10px 24px', backgroundColor: '#0a1428', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>
                    {ar ? 'تعرف أكثر' : 'Learn More'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              {ar ? 'متطلبات التطوع' : 'Volunteer Requirements'}
            </h2>

            <div style={{ backgroundColor: '#0a1428', color: 'white', padding: '48px', borderRadius: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                    {ar ? 'الأساسي' : 'Basic'}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? '18 سنة فأكثر' : '18 years or older'}</li>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? 'اهتمام حقيقي بالعمل الإنساني' : 'Genuine interest in humanitarian work'}</li>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? 'الالتزام بقيمنا' : 'Commitment to our values'}</li>
                    <li style={{ fontSize: '14px', color: '#ccc' }}>✓ {ar ? 'مرونة وإرادة قوية' : 'Flexibility and willingness'}</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                    {ar ? 'بعض الأدوار' : 'For Some Roles'}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? 'فحص صحي' : 'Health screening'}</li>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? 'تدريب محدد' : 'Specific training'}</li>
                    <li style={{ fontSize: '14px', marginBottom: '12px', color: '#ccc' }}>✓ {ar ? 'مهارات معينة' : 'Certain skills'}</li>
                    <li style={{ fontSize: '14px', color: '#ccc' }}>✓ {ar ? 'خبرة سابقة' : 'Prior experience'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#a8312f', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'جاهز للتطوع' : 'Ready to Volunteer?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>
            {ar ? 'أرسل لنا طلبك اليوم وانضم إلى فريقنا' : 'Send us your application today and join our team'}
          </p>
          <button style={{ padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', cursor: 'pointer' }}>
            {ar ? 'تقدم بطلب' : 'Apply Now'}
          </button>
        </div>
      </section>
    </>
  );
}
