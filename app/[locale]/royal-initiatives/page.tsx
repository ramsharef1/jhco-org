import { royalInitiatives } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function RoyalInitiativesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get unique categories
  const categories = [...new Set(royalInitiatives.map(i => i.category))];

  return (
    <>
      {/* Royal Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: '100px 32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative gold border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />

        <div style={{ maxWidth: '1500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '48px' }}>👑</div>
            <span style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {ar ? 'المبادرات الملكية' : 'ROYAL INITIATIVES'}
            </span>
          </div>
          <h1 style={{ fontSize: '64px', fontWeight: '300', margin: '0 0 32px 0', fontFamily: 'Georgia, serif', letterSpacing: '1px' }}>
            {ar ? 'مبادرات متميزة برعاية ملكية' : 'Initiatives of Royal Patronage'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '700px', lineHeight: '1.8', fontWeight: '300' }}>
            {ar ? 'برامج إنسانية متميزة بدعم مؤسسي ورعاية ملكية، توحد الجهود لإحداث تأثير حقيقي ومستدام' : 'Distinguished humanitarian programs with institutional support and royal patronage, uniting efforts to create lasting impact and meaningful change'}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{ padding: '64px 32px', backgroundColor: '#f5f5f5', borderTop: '2px solid #d4af37', borderBottom: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                {royalInitiatives.length}
              </div>
              <div style={{ fontSize: '16px', color: '#666', fontWeight: '500' }}>
                {ar ? 'مبادرات ملكية نشطة' : 'Active Royal Initiatives'}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                {ar ? '78K+' : '78K+'}
              </div>
              <div style={{ fontSize: '16px', color: '#666', fontWeight: '500' }}>
                {ar ? 'مستفيد كلي' : 'Total Beneficiaries'}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                {ar ? '5' : '5'}
              </div>
              <div style={{ fontSize: '16px', color: '#666', fontWeight: '500' }}>
                {ar ? 'شراكات ملكية' : 'Royal Partnerships'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          {/* Categories */}
          {categories.map((category) => {
            const categoryInitiatives = royalInitiatives.filter(i => i.category === category);
            return (
              <div key={category} style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                  <div style={{ fontSize: '32px' }}>⚜️</div>
                  <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#1a1a2e', margin: 0, fontFamily: 'Georgia, serif', borderBottom: '3px solid #d4af37', paddingBottom: '12px', flex: 1 }}>
                    {category}
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '40px' }}>
                  {categoryInitiatives.map((initiative) => (
                    <Link key={initiative.id} href={`${base}/royal-initiatives/${initiative.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div style={{ backgroundColor: 'white', border: '2px solid #d4af37', borderRadius: '0px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 16px rgba(212,175,55,0.15)' }}>
                        {/* Header Badge */}
                        <div style={{ backgroundColor: 'linear-gradient(135deg, #1a1a2e, #16213e)', padding: '28px', color: 'white', borderBottom: '2px solid #d4af37' }}>
                          <div style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                            {ar ? initiative.categoryAr : initiative.category}
                          </div>
                          <h3 style={{ fontSize: '20px', fontWeight: '500', margin: '0 0 12px 0', lineHeight: '1.4', fontFamily: 'Georgia, serif' }}>
                            {ar ? initiative.nameAr : initiative.name}
                          </h3>
                          <div style={{ fontSize: '13px', color: '#d4af37', fontWeight: '600', marginTop: '8px' }}>
                            {ar ? `شريك: ${initiative.partnerAr}` : `Partner: ${initiative.partner}`}
                          </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', flex: 1, marginBottom: '24px' }}>
                            {ar ? initiative.descriptionAr : initiative.description}
                          </p>

                          {/* Impact Card */}
                          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderLeft: '4px solid #d4af37', marginBottom: '24px' }}>
                            <div style={{ fontSize: '11px', color: '#999', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                              {ar ? 'التأثير' : 'IMPACT'}
                            </div>
                            <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>
                              {ar ? initiative.impactAr : initiative.impact}
                            </div>
                          </div>

                          {/* Key Objectives */}
                          <div style={{ marginBottom: '24px' }}>
                            <div style={{ fontSize: '11px', color: '#999', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                              {ar ? 'الأهداف الرئيسية' : 'KEY OBJECTIVES'}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {(ar ? initiative.objectivesAr : initiative.objectives).slice(0, 3).map((obj, idx) => (
                                <span key={idx} style={{ fontSize: '12px', color: '#1a1a2e', backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '20px', border: '1px solid #e0e0e0' }}>
                                  {obj}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Footer */}
                          <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '13px', fontWeight: '600', color: '#d4af37' }}>
                              {ar ? 'تعرف على المزيد' : 'Learn More'}
                            </div>
                            <div style={{ fontSize: '20px', color: '#d4af37' }}>→</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partnership Excellence Section */}
      <section style={{ backgroundColor: '#1a1a2e', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ borderLeft: '4px solid #d4af37', paddingLeft: '32px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '400', margin: '0 0 16px 0', fontFamily: 'Georgia, serif' }}>
              {ar ? 'التميز في الشراكة' : 'Partnership Excellence'}
            </h2>
            <p style={{ fontSize: '16px', color: '#d4af37', margin: 0, maxWidth: '600px' }}>
              {ar ? 'تتعاون الهيئة مع أعرق المؤسسات والجهات الملكية لتقديم برامج إنسانية متميزة' : 'JHCO collaborates with prestigious institutions and royal entities to deliver distinguished humanitarian programs'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid #d4af37', padding: '32px', borderRadius: '0px' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'شراكات مؤسسية' : 'Institutional Partnerships'}
              </h3>
              <p style={{ fontSize: '14px', color: '#d4af37', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'تعاون استراتيجي مع المؤسسات الملكية والحكومية' : 'Strategic collaboration with royal and governmental institutions'}
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid #d4af37', padding: '32px', borderRadius: '0px' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>✨</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'برامج متميزة' : 'Premium Programs'}
              </h3>
              <p style={{ fontSize: '14px', color: '#d4af37', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'مبادرات إنسانية رفيعة المستوى بجودة عالية' : 'High-quality humanitarian initiatives with premium standards'}
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid #d4af37', padding: '32px', borderRadius: '0px' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>🌍</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'نطاق عالمي' : 'Global Reach'}
              </h3>
              <p style={{ fontSize: '14px', color: '#d4af37', lineHeight: '1.6', margin: 0 }}>
                {ar ? 'تأثير إنساني عالمي بدعم محلي قوي' : 'Global humanitarian impact with strong local support'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', textAlign: 'center', color: 'white', borderTop: '4px solid #d4af37' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif', letterSpacing: '1px' }}>
            {ar ? 'كن شريكاً في التميز الإنساني' : 'Be a Partner in Humanitarian Excellence'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.8' }}>
            {ar ? 'ادعم مبادرات فريدة من نوعها تجمع بين الرؤية الملكية والعمل الإنساني' : 'Support unique initiatives that combine royal vision with humanitarian action'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '0px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>
            <Link href={`${base}/get-involved`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '0px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'كيف تساهم' : 'Get Involved'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
