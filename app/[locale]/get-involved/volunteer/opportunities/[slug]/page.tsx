import { volunteerOpportunities } from '@/lib/mockData';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('get-involved/volunteer/opportunities', locale);
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const opportunity = volunteerOpportunities.find(opp => opp.slug === slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '64px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`${base}/get-involved/volunteer/opportunities`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', fontWeight: '600', marginBottom: '24px', display: 'inline-block' }}>
            ← {ar ? 'العودة إلى الفرص' : 'Back to Opportunities'}
          </Link>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span style={{ fontSize: '42px' }}>{opportunity.icon}</span>
                <div>
                  <span style={{ fontSize: '13px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {ar ? opportunity.typeAr : opportunity.type}
                  </span>
                </div>
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: '400', margin: '0 0 16px 0', fontFamily: 'Georgia, serif', lineHeight: '1.3' }}>
                {ar ? opportunity.titleAr : opportunity.title}
              </h1>
              <p style={{ fontSize: '16px', color: '#d4af37', margin: 0 }}>
                {ar ? opportunity.locationAr : opportunity.location}
              </p>
            </div>

            <div style={{ textAlign: 'right', padding: '24px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', minWidth: '200px' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#d4af37', marginBottom: '8px' }}>
                {ar ? opportunity.commitmentAr : opportunity.commitment}
              </div>
              <p style={{ fontSize: '13px', color: '#ccc', margin: 0, fontWeight: '600' }}>
                {ar ? 'الالتزام الزمني' : 'Time Commitment'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px', marginBottom: '80px' }}>
            {/* Content */}
            <div>
              {/* Overview */}
              <div style={{ marginBottom: '64px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'نظرة عامة' : 'Overview'}
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a', marginBottom: '24px' }}>
                  {ar ? opportunity.descriptionAr : opportunity.description}
                </p>
                <div style={{ padding: '24px', backgroundColor: '#f9f7f4', borderRadius: '8px', borderLeft: '4px solid #d4af37' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>
                    {ar ? 'التأثير المتوقع' : 'Expected Impact'}
                  </h4>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                    {ar ? opportunity.impactAr : opportunity.impact}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div style={{ marginBottom: '64px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'المتطلبات' : 'Requirements'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                      {ar ? 'ما نبحث عنه' : 'What We\'re Looking For'}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {(ar ? opportunity.requirementsAr : opportunity.requirements).map((req: string, idx: number) => (
                        <li key={idx} style={{ fontSize: '14px', color: '#4a4a4a', marginBottom: '12px', paddingLeft: '24px', position: 'relative', lineHeight: '1.6' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#d4af37', fontWeight: 'bold' }}>✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '64px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'المهارات المطلوبة' : 'Key Skills'}
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {(ar ? opportunity.skillsAr : opportunity.skills).map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-block',
                        fontSize: '14px',
                        padding: '10px 18px',
                        backgroundColor: '#0a1428',
                        color: '#d4af37',
                        borderRadius: '4px',
                        fontWeight: '600',
                        border: '1px solid #d4af37',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why Join Us */}
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'لماذا تنضم إلينا' : 'Why Join Us'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    { title: ar ? 'تأثير حقيقي' : 'Real Impact', desc: ar ? 'اعمل مباشرة على تحسين حياة الناس' : 'Work directly on improving lives' },
                    { title: ar ? 'فريق داعم' : 'Supportive Team', desc: ar ? 'كن جزءاً من فريق متعاون وملتزم' : 'Join a committed team' },
                    { title: ar ? 'تطوير المهارات' : 'Skill Development', desc: ar ? 'اكتسب خبرات قيمة وطور مهاراتك' : 'Grow professionally' },
                    { title: ar ? 'مجتمع عالمي' : 'Global Community', desc: ar ? 'التقي بأشخاص من حول العالم' : 'Connect globally' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ padding: '20px', backgroundColor: '#f9f7f4', borderRadius: '8px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0, lineHeight: '1.5' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Key Info Card */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', marginBottom: '32px', position: 'sticky', top: '80px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '24px' }}>
                  {ar ? 'معلومات الفرصة' : 'Opportunity Details'}
                </h3>

                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e8e4db' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {ar ? 'النوع' : 'Type'}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                    {ar ? opportunity.typeAr : opportunity.type}
                  </p>
                </div>

                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e8e4db' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {ar ? 'الموقع' : 'Location'}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                    {ar ? opportunity.locationAr : opportunity.location}
                  </p>
                </div>

                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e8e4db' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {ar ? 'الفئة' : 'Category'}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                    {ar ? opportunity.categoryAr : opportunity.category}
                  </p>
                </div>

                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e8e4db' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {ar ? 'الالتزام' : 'Commitment'}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                    {ar ? opportunity.commitmentAr : opportunity.commitment}
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    {ar ? 'الحالة' : 'Status'}
                  </p>
                  <div style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: '#28a745', color: 'white', borderRadius: '4px', fontSize: '13px', fontWeight: '600' }}>
                    {ar ? opportunity.statusAr : opportunity.status}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    backgroundColor: '#0a1428',
                    color: '#d4af37',
                    border: '2px solid #d4af37',
                    borderRadius: '4px',
                    fontWeight: '700',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    marginBottom: '12px',
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#d4af37';
                    (e.currentTarget as HTMLElement).style.color = '#0a1428';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#0a1428';
                    (e.currentTarget as HTMLElement).style.color = '#d4af37';
                  }}
                >
                  {ar ? 'تقدم الآن' : 'Apply Now'}
                </button>

                <button
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    backgroundColor: 'transparent',
                    color: '#0a1428',
                    border: '2px solid #0a1428',
                    borderRadius: '4px',
                    fontWeight: '700',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  {ar ? 'إرسال إلى صديق' : 'Share with Friend'}
                </button>
              </div>

              {/* FAQ */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '24px' }}>
                  {ar ? 'أسئلة شائعة' : 'FAQ'}
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'هل يجب أن أكون في الموقع؟' : 'Is on-site presence required?'}
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b6b6b', margin: 0, lineHeight: '1.5' }}>
                    {ar ? 'يعتمد على نوع الفرصة. الفرص الميدانية تتطلب التواجد الفعلي، بينما الفرص عن بُعد يمكن إنجازها من المنزل.' : 'Field opportunities require on-site presence, while remote roles can be done from home.'}
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'كم من الوقت تستغرق عملية التقديم؟' : 'How long is the application process?'}
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b6b6b', margin: 0, lineHeight: '1.5' }}>
                    {ar ? 'عادة تستغرق 2-3 أسابيع من التقديم إلى قبول الطلب والبدء بالعمل.' : 'Typically 2-3 weeks from application to start.'}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {ar ? 'هل هناك متطلبات لغوية؟' : 'Are there language requirements?'}
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b6b6b', margin: 0, lineHeight: '1.5' }}>
                    {ar ? 'نعم، معظم الأدوار تتطلب إجادة اللغة العربية والإنجليزية أو أحدهما.' : 'Most roles require Arabic or English proficiency.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Opportunities */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f4', borderTop: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'فرص مماثلة' : 'Similar Opportunities'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
            {volunteerOpportunities
              .filter(opp => opp.category === opportunity.category && opp.id !== opportunity.id)
              .slice(0, 3)
              .map((opp) => (
                <Link key={opp.id} href={`${base}/get-involved/volunteer/opportunities/${opp.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', padding: '28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '32px' }}>{opp.icon}</span>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                        {ar ? opp.titleAr : opp.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '13px', color: '#6b6b6b', marginBottom: '12px', flex: 1 }}>
                      {ar ? opp.descriptionAr : opp.description}
                    </p>
                    <div style={{ fontSize: '14px', color: '#d4af37', fontWeight: '600' }}>
                      {ar ? opp.locationAr : opp.location}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#a8312f', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'لديك أسئلة؟' : 'Questions?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>
            {ar ? 'اتصل بفريقنا. نحن هنا لمساعدتك.' : 'Contact our team. We\'re here to help.'}
          </p>
          <Link href={`${base}/contact`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px' }}>
            {ar ? 'اتصل بنا' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </>
  );
}