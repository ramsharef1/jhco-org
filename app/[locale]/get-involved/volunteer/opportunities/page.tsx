import { volunteerOpportunities } from '@/lib/mockData';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('get-involved/volunteer/opportunities', locale);
}

export default async function VolunteerOpportunitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get unique categories
  const categories = [...new Set(volunteerOpportunities.map(opp => opp.category))];
  const categoryOrder = ['Field', 'Remote', 'Administrative'];
  const sortedCategories = categoryOrder.filter(cat => categories.includes(cat));

  const getCategoryAr = (category: string) => {
    const opp = volunteerOpportunities.find(o => o.category === category);
    return opp?.categoryAr || category;
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'فرص التطوع' : 'Volunteer Opportunities'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '700px' }}>
            {ar ? 'اختر الفرصة التي تناسبك وانضم إلى فريقنا في إحداث فرق في العالم' : 'Find the opportunity that matches your skills and join our team in making a difference'}
          </p>
        </div>
      </section>

      {/* Filter Stats */}
      <section style={{ padding: '48px 32px', backgroundColor: '#f9f7f4', borderBottom: '1px solid #e8e4db' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#0a1428', marginBottom: '8px' }}>
                {volunteerOpportunities.length}
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0, fontWeight: '600' }}>
                {ar ? 'فرص متاحة' : 'Opportunities'}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#0a1428', marginBottom: '8px' }}>
                {Math.floor(volunteerOpportunities.reduce((sum, opp: any) => {
                  const hours = parseInt(opp.commitment.split('-')[0]);
                  return sum + hours;
                }, 0) / volunteerOpportunities.length)}
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0, fontWeight: '600' }}>
                {ar ? 'متوسط الساعات' : 'Avg Commitment'}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#0a1428', marginBottom: '8px' }}>
                {volunteerOpportunities.filter((opp: any) => opp.type === 'Remote').length}
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0, fontWeight: '600' }}>
                {ar ? 'فرص عن بُعد' : 'Remote Jobs'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid by Category */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          {sortedCategories.map((category) => {
            const categoryOpps = volunteerOpportunities.filter(opp => opp.category === category);
            return (
              <div key={category} style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', fontFamily: 'Georgia, serif', margin: 0 }}>
                    {ar ? getCategoryAr(category) : category}
                  </h2>
                  <span style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700', marginLeft: 'auto' }}>
                    {categoryOpps.length} {ar ? 'فرصة' : 'opportunities'}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                  {categoryOpps.map((opportunity: any) => (
                    <div
                      key={opportunity.id}
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid #e8e4db',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        transition: 'all 0.4s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                        ':hover': {
                          boxShadow: '0 8px 24px rgba(10,20,40,0.16)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      {/* Header */}
                      <div style={{ padding: '32px 28px', backgroundColor: '#f9f7f4', borderBottom: '1px solid #e8e4db' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <div>
                            <span style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '12px' }}>
                              {opportunity.icon} {ar ? opportunity.typeAr : opportunity.type}
                            </span>
                            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                              {ar ? opportunity.titleAr : opportunity.title}
                            </h3>
                          </div>
                        </div>

                        {/* Location & Commitment */}
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: '#6b6b6b' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '14px' }}>📍</span>
                            <span>{ar ? opportunity.locationAr : opportunity.location}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '14px' }}>⏱️</span>
                            <span>{ar ? opportunity.commitmentAr : opportunity.commitment}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '20px' }}>
                          {ar ? opportunity.descriptionAr : opportunity.description}
                        </p>

                        {/* Skills */}
                        <div style={{ marginBottom: '20px' }}>
                          <p style={{ fontSize: '11px', fontWeight: '700', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                            {ar ? 'المهارات المطلوبة' : 'Key Skills'}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {(ar ? opportunity.skillsAr : opportunity.skills).slice(0, 3).map((skill: string, idx: number) => (
                              <span
                                key={idx}
                                style={{
                                  display: 'inline-block',
                                  fontSize: '12px',
                                  padding: '6px 12px',
                                  backgroundColor: '#f0f0f0',
                                  borderRadius: '4px',
                                  color: '#0a1428',
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                            {(ar ? opportunity.skillsAr : opportunity.skills).length > 3 && (
                              <span style={{ fontSize: '12px', color: '#d4af37', fontWeight: '600' }}>
                                +{(ar ? opportunity.skillsAr : opportunity.skills).length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Impact */}
                        <div style={{ padding: '16px', backgroundColor: '#f9f7f4', borderRadius: '6px', marginBottom: '20px' }}>
                          <p style={{ fontSize: '12px', color: '#6b6b6b', margin: '0 0 6px 0', fontWeight: '600' }}>
                            {ar ? 'التأثير المتوقع' : 'Expected Impact'}
                          </p>
                          <p style={{ fontSize: '14px', color: '#0a1428', margin: 0, fontWeight: '600' }}>
                            {ar ? opportunity.impactAr : opportunity.impact}
                          </p>
                        </div>

                        {/* Footer */}
                        <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                          <span style={{ fontSize: '12px', color: '#28a745', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {ar ? opportunity.statusAr : opportunity.status}
                          </span>
                          <Link href={`${base}/get-involved/volunteer/opportunities/${opportunity.slug}`} style={{ fontSize: '18px', textDecoration: 'none', color: '#d4af37', fontWeight: '600' }}>
                            →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Steps */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f4', borderTop: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'كيفية التقديم' : 'How to Apply'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
            {[
              { num: '1', title: ar ? 'اختر الفرصة' : 'Choose an Opportunity', desc: ar ? 'اختر الفرصة التي تتناسب مع مهاراتك واهتماماتك' : 'Select the opportunity that matches your skills and interests' },
              { num: '2', title: ar ? 'أكمل الطلب' : 'Complete Application', desc: ar ? 'امأ نموذج الطلب بمعلوماتك الشخصية والمهنية' : 'Fill out the application form with your details' },
              { num: '3', title: ar ? 'مقابلة' : 'Interview', desc: ar ? 'سنتواصل معك لمناقشة الفرصة والمتطلبات' : 'We\'ll contact you for an interview' },
              { num: '4', title: ar ? 'ابدأ التطوع' : 'Start Volunteering', desc: ar ? 'انضم إلى فريقنا وابدأ رحلتك الإنسانية' : 'Begin your humanitarian journey with us' },
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37', marginBottom: '16px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'جاهز للانضمام' : 'Ready to Make an Impact?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'اختر فرصة من الفرص أعلاه وابدأ في إحداث فرق في حياة الناس' : 'Choose an opportunity above and start making a difference in people\'s lives'}
          </p>
          <button style={{ padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s' }}>
            {ar ? 'اختر الفرصة' : 'Explore Opportunities'}
          </button>
        </div>
      </section>
    </>
  );
}