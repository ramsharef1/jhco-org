import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProgramCard from '@/components/ProgramCard';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('programs', locale);
}

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
                    <ProgramCard
                      key={program.id}
                      id={String(program.id)}
                      slug={program.slug}
                      nameEn={program.name}
                      nameAr={program.nameAr}
                      descriptionEn={program.description}
                      descriptionAr={program.descriptionAr}
                      icon="🎯"
                      impactEn={program.impact}
                      impactAr={program.impactAr}
                      categoryEn={program.category}
                      categoryAr={program.categoryAr}
                      href={`${base}/programs/${program.slug}`}
                      locale={locale}
                    />
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
