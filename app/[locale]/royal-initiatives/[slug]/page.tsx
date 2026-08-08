import { royalInitiatives } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('royal-initiatives', locale);
}

export default async function RoyalInitiativeDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const initiative = royalInitiatives.find(i => i.slug === slug);

  if (!initiative) {
    return (
      <section style={{ padding: '80px 32px', textAlign: 'center', color: '#999' }}>
        <h1>{ar ? 'المبادرة غير موجودة' : 'Initiative Not Found'}</h1>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: '100px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href={`${base}/royal-initiatives`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', fontWeight: '600', marginBottom: '24px', display: 'inline-block' }}>
            ← {ar ? 'العودة إلى المبادرات الملكية' : 'Back to Royal Initiatives'}
          </Link>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              {ar ? initiative.categoryAr : initiative.category}
            </span>
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 24px 0', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            {ar ? initiative.nameAr : initiative.name}
          </h1>
          <div style={{ fontSize: '18px', color: '#d4af37', fontWeight: '600', marginBottom: '16px' }}>
            👑 {ar ? `شريك: ${initiative.partnerAr}` : `Partner: ${initiative.partner}`}
          </div>
          <p style={{ fontSize: '18px', color: '#e8e8e8', maxWidth: '700px', lineHeight: '1.8', margin: 0 }}>
            {ar ? initiative.descriptionAr : initiative.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px' }}>
            {/* Main Content */}
            <div>
              {/* Long Description */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#1a1a2e', marginBottom: '24px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'نبذة تفصيلية' : 'About This Initiative'}
                </h2>
                <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '0' }}>
                  {ar ? initiative.longDescriptionAr : initiative.longDescription}
                </p>
              </div>

              {/* Objectives */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#1a1a2e', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'الأهداف الرئيسية' : 'Key Objectives'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  {(ar ? initiative.objectivesAr : initiative.objectives).map((objective, idx) => (
                    <div key={idx} style={{ backgroundColor: '#f5f5f5', padding: '28px', borderLeft: '4px solid #d4af37', borderRadius: '4px' }}>
                      <div style={{ fontSize: '24px', marginBottom: '12px', color: '#d4af37' }}>
                        {idx === 0 ? '🎯' : idx === 1 ? '📚' : idx === 2 ? '💪' : idx === 3 ? '🌟' : '✓'}
                      </div>
                      <p style={{ fontSize: '15px', color: '#333', fontWeight: '500', margin: '0' }}>
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Structure */}
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#1a1a2e', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {ar ? 'بنية البرنامج' : 'Program Structure'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ backgroundColor: '#f0f8ff', padding: '28px', borderRadius: '4px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>
                      {ar ? 'المستفيدون المستهدفون' : 'Target Beneficiaries'}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', fontSize: '14px', lineHeight: '1.8' }}>
                      <li>{ar ? 'الفئات المحرومة والضعيفة' : 'Underprivileged and vulnerable populations'}</li>
                      <li>{ar ? 'الشباب والنساء' : 'Youth and women'}</li>
                      <li>{ar ? 'المجتمعات المتضررة من الأزمات' : 'Crisis-affected communities'}</li>
                      <li>{ar ? 'المناطق الريفية والنائية' : 'Rural and remote areas'}</li>
                    </ul>
                  </div>
                  <div style={{ backgroundColor: '#fff8f0', padding: '28px', borderRadius: '4px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>
                      {ar ? 'الخدمات المقدمة' : 'Services Provided'}
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', fontSize: '14px', lineHeight: '1.8' }}>
                      <li>{ar ? 'التدريب والتطوير' : 'Training and Development'}</li>
                      <li>{ar ? 'الدعم المالي والتمويل' : 'Financial Support and Funding'}</li>
                      <li>{ar ? 'الإرشاد والمتابعة' : 'Mentorship and Guidance'}</li>
                      <li>{ar ? 'المساعدة المستمرة' : 'Ongoing Assistance'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Impact Box */}
              <div style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '32px', marginBottom: '32px', borderTop: '4px solid #d4af37' }}>
                <div style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>
                  {ar ? 'التأثير المقاس' : 'MEASURED IMPACT'}
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#d4af37', marginBottom: '12px' }}>
                  {ar ? initiative.impactAr : initiative.impact}
                </div>
                <p style={{ fontSize: '13px', color: '#aaa', margin: 0, lineHeight: '1.6' }}>
                  {ar ? 'المستفيدون المباشرون من البرنامج حتى الآن' : 'Direct program beneficiaries to date'}
                </p>
              </div>

              {/* Status Box */}
              <div style={{ backgroundColor: '#f5f5f5', padding: '28px', marginBottom: '32px', borderLeft: '4px solid #d4af37' }}>
                <div style={{ fontSize: '12px', color: '#999', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {ar ? 'حالة البرنامج' : 'PROGRAM STATUS'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                  {ar ? (initiative.status === 'Active' ? 'نشط' : 'غير نشط') : initiative.status}
                </div>
                <div style={{ display: 'inline-block', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                  ● {ar ? 'قيد التنفيذ' : 'Ongoing'}
                </div>
              </div>

              {/* Partner Box */}
              <div style={{ backgroundColor: '#fff8f0', padding: '28px', marginBottom: '32px', borderLeft: '4px solid #d4af37' }}>
                <div style={{ fontSize: '12px', color: '#999', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {ar ? 'الشريك المؤسسي' : 'PARTNER ORGANIZATION'}
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                  {ar ? initiative.partnerAr : initiative.partner}
                </div>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                  {ar ? 'شراكة استراتيجية لتعزيز التأثير الإنساني' : 'Strategic partnership for enhanced humanitarian impact'}
                </p>
              </div>

              {/* CTA Button */}
              <div style={{ display: 'grid', gap: '12px' }}>
                <Link href={`${base}/get-involved/donate`} style={{ display: 'block', padding: '16px', backgroundColor: '#d4af37', color: '#1a1a2e', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '15px', textAlign: 'center', transition: 'all 0.3s' }}>
                  {ar ? 'ادعم هذه المبادرة' : 'Support This Initiative'}
                </Link>
                <Link href={`${base}/get-involved`} style={{ display: 'block', padding: '16px', backgroundColor: 'white', color: '#1a1a2e', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '15px', textAlign: 'center', transition: 'all 0.3s', border: '2px solid #1a1a2e' }}>
                  {ar ? 'طرق أخرى للمساهمة' : 'Other Ways to Help'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Initiatives */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '48px', textAlign: 'center', fontFamily: 'Georgia, serif', color: '#1a1a2e' }}>
            {ar ? 'مبادرات ملكية أخرى' : 'Other Royal Initiatives'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
            {royalInitiatives.filter(i => i.slug !== slug).slice(0, 3).map((relatedInitiative) => (
              <Link key={relatedInitiative.id} href={`${base}/royal-initiatives/${relatedInitiative.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', padding: '28px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }}>
                  <div style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {ar ? relatedInitiative.categoryAr : relatedInitiative.category}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '12px', lineHeight: '1.3' }}>
                    {ar ? relatedInitiative.nameAr : relatedInitiative.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>
                    {ar ? relatedInitiative.descriptionAr : relatedInitiative.description}
                  </p>
                  <div style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700' }}>
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'اكتشف المزيد من المبادرات' : 'Explore All Initiatives'}
          </h2>
          <Link href={`${base}/royal-initiatives`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'عودة إلى المبادرات الملكية' : 'Back to Royal Initiatives'}
          </Link>
        </div>
      </section>
    </>
  );
}
