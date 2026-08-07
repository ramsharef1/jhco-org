import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProgramCard from '@/components/ProgramCard';

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
    locale: 'en',
  })).concat(
    programs.map((program) => ({
      slug: program.slug,
      locale: 'ar',
    }))
  );
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const program = programs.find(p => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={`${base}/programs`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
            ← {ar ? 'العودة للبرامج' : 'Back to Programs'}
          </Link>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '20px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? program.nameAr : program.name}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', marginBottom: '32px' }}>
            {ar ? program.categoryAr : program.category}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px' }}>{ar ? 'الحالة' : 'Status'}</p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>{program.status}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px' }}>{ar ? 'التأثير' : 'Impact'}</p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>{ar ? program.impactAr : program.impact}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px' }}>{ar ? 'المستفيدون' : 'Beneficiaries'}</p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>Thousands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Overview */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'نظرة عامة' : 'Program Overview'}
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '24px' }}>
              {ar ? program.longDescriptionAr : program.longDescription}
            </p>
          </div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', marginBottom: '80px' }}>
            {/* Objectives */}
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'الأهداف' : 'Objectives'}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(ar ? program.objectivesAr : program.objectives).map((obj, idx) => (
                  <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #e8e4db', color: '#3d3d3d', fontSize: '16px', lineHeight: '1.6' }}>
                    ✓ {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  {ar ? 'معلومات البرنامج' : 'Program Info'}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{ar ? 'الفئة' : 'Category'}</p>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428' }}>{ar ? program.categoryAr : program.category}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{ar ? 'الحالة' : 'Status'}</p>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#d4af37' }}>{program.status}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{ar ? 'التأثير' : 'Impact'}</p>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#d4af37' }}>{ar ? program.impactAr : program.impact}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href={`${base}/get-involved/donate`} style={{ display: 'block', padding: '16px 32px', backgroundColor: '#a8312f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', textAlign: 'center', transition: 'all 0.3s' }}>
                {ar ? 'ادعم هذا البرنامج' : 'Support This Program'}
              </Link>
            </div>
          </div>

          {/* Related Programs */}
          <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '80px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'برامج ذات صلة' : 'Related Programs'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
              {(() => {
                const sameCategory = programs.filter(p => p.category === program.category && p.id !== program.id);
                const others = programs.filter(p => p.category !== program.category && p.id !== program.id);
                return [...sameCategory, ...others].slice(0, 3);
              })().map((relatedProgram) => (
                <ProgramCard
                  key={relatedProgram.id}
                  id={String(relatedProgram.id)}
                  slug={relatedProgram.slug}
                  nameEn={relatedProgram.name}
                  nameAr={relatedProgram.nameAr}
                  descriptionEn={relatedProgram.description}
                  descriptionAr={relatedProgram.descriptionAr}
                  icon="🎯"
                  impactEn={relatedProgram.impact}
                  impactAr={relatedProgram.impactAr}
                  categoryEn={relatedProgram.category}
                  categoryAr={relatedProgram.categoryAr}
                  href={`${base}/programs/${relatedProgram.slug}`}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
