import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get unique categories
  const categories = [...new Set(programs.map(p => p.category))];

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'برامجنا' : 'Our Programs'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '600px' }}>
            {ar ? 'استكشف مجموعتنا الشاملة من المبادرات الإنسانية المصممة لإحداث تأثير حقيقي في حياة الملايين' : 'Explore our comprehensive range of humanitarian initiatives designed to make real impact in the lives of millions'}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          {/* Categories */}
          {categories.map((category) => {
            const categoryPrograms = programs.filter(p => p.category === category);
            return (
              <div key={category} style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                  {category}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                  {categoryPrograms.map((program) => (
                    <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                        {/* Image Placeholder */}
                        <div style={{ position: 'relative', height: '240px', backgroundColor: '#f0f0f0' }}>
                          <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '48px' }}>
                            📋
                          </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ marginBottom: '12px' }}>
                            <span style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              {ar ? program.categoryAr : program.category}
                            </span>
                          </div>

                          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                            {ar ? program.nameAr : program.name}
                          </h3>

                          <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                            {ar ? program.descriptionAr : program.description}
                          </p>

                          {/* Footer */}
                          <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 0 }}>
                                {ar ? program.impactAr : program.impact}
                              </p>
                            </div>
                            <div style={{ fontSize: '20px' }}>→</div>
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

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'كن جزءًا من التغيير' : 'Be Part of the Change'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'ساهم في إحدى مبادراتنا واصنع فرقًا حقيقيًا في حياة الناس' : 'Support one of our initiatives and make a real difference in people\'s lives'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
        </div>
      </section>
    </>
  );
}
