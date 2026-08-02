'use client';

import { countries, regions } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';

export default function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; regionSlug: string; countrySlug: string }>;
}) {
  const { locale, regionSlug, countrySlug } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const country = countries.find(c => c.slug === countrySlug);
  const region = regions.find(r => r.slug === regionSlug);
  const regionCountries = countries.filter(c => c.region === regionSlug);
  const countryIndex = regionCountries.findIndex(c => c.slug === countrySlug);
  const prevCountry = countryIndex > 0 ? regionCountries[countryIndex - 1] : null;
  const nextCountry = countryIndex < regionCountries.length - 1 ? regionCountries[countryIndex + 1] : null;

  if (!country || !region) {
    return (
      <div style={{ padding: '80px 32px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', color: '#0a1428', marginBottom: '16px' }}>
            {ar ? 'لم يتم العثور على الدولة' : 'Country Not Found'}
          </h1>
          <Link href={`${base}/where-we-work`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
            {ar ? 'العودة إلى خريطة العالم' : 'Back to Global Map'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={`${base}/regions/${regionSlug}`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '16px', display: 'inline-block', fontWeight: '700' }}>
            ← {ar ? 'العودة إلى' : 'Back to'} {ar ? region.nameAr : region.name}
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '24px' }}>
            <div style={{ fontSize: '80px' }}>{country.flag}</div>
            <div>
              <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 12px 0', fontFamily: 'Georgia, serif' }}>
                {ar ? country.nameAr : country.name}
              </h1>
              <p style={{ fontSize: '16px', color: '#d4af37', margin: 0, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {ar ? region.nameAr : region.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '60px 32px', backgroundColor: '#f9f7f4', borderBottom: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              {ar ? 'التأثير' : 'Impact'}
            </p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#0a1428', margin: 0 }}>
              {ar ? country.impactAr : country.impact}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              {ar ? 'البرامج النشطة' : 'Active Programs'}
            </p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#0a1428', margin: 0 }}>
              {(ar ? country.programsAr : country.programs).length}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              {ar ? 'المكتب المحلي' : 'Local Office'}
            </p>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
              {ar ? country.officeAr : country.office}
            </p>
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
              {ar ? 'نظرة عامة' : 'Overview'}
            </h2>
            <p style={{ fontSize: '16px', color: '#6b6b6b', lineHeight: '1.8', maxWidth: '900px' }}>
              {ar ? country.descriptionAr : country.description}
            </p>
          </div>

          {/* Programs Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
              {ar ? 'برامجنا' : 'Our Programs'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {(ar ? country.programsAr : country.programs).map((program, idx) => (
                <div key={idx} style={{ backgroundColor: '#f9f7f4', border: '1px solid #e8e4db', borderRadius: '8px', padding: '24px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                    {idx === 0 ? '🏥' : idx === 1 ? '📚' : idx === 2 ? '🍽️' : idx === 3 ? '💼' : '🤝'}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px', margin: 0 }}>
                    {program}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6' }}>
                    {ar ? 'برنامج شامل يوفر خدمات حيوية للمجتمعات المحتاجة' : 'Comprehensive program providing vital services to communities in need'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Countries */}
          {regionCountries.length > 1 && (
            <div>
              <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif', borderBottom: '2px solid #d4af37', paddingBottom: '16px' }}>
                {ar ? 'دول أخرى في المنطقة' : 'Other Countries in Region'}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
                {regionCountries.filter(c => c.slug !== countrySlug).slice(0, 6).map((relatedCountry) => (
                  <Link key={relatedCountry.id} href={`${base}/regions/${regionSlug}/${relatedCountry.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 2px 8px rgba(10,20,40,0.08)', textAlign: 'center', padding: '24px' }}>
                      <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                        {relatedCountry.flag}
                      </div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', margin: 0, marginBottom: '8px' }}>
                        {ar ? relatedCountry.nameAr : relatedCountry.name}
                      </h4>
                      <p style={{ fontSize: '13px', color: '#d4af37', fontWeight: '700', margin: 0 }}>
                        {ar ? relatedCountry.impactAr : relatedCountry.impact}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Between Countries */}
      <section style={{ padding: '60px 32px', backgroundColor: '#f9f7f4' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {prevCountry ? (
            <Link href={`${base}/regions/${regionSlug}/${prevCountry.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid #d4af37', borderRadius: '8px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s', textAlign: ar ? 'right' : 'left' }}>
                <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  {ar ? 'السابق' : 'Previous'}
                </p>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                  {prevCountry.flag} {ar ? prevCountry.nameAr : prevCountry.name}
                </h4>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextCountry ? (
            <Link href={`${base}/regions/${regionSlug}/${nextCountry.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid #d4af37', borderRadius: '8px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s', textAlign: ar ? 'left' : 'right' }}>
                <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  {ar ? 'التالي' : 'Next'}
                </p>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', margin: 0 }}>
                  {ar ? nextCountry.nameAr : nextCountry.name} {nextCountry.flag}
                </h4>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? `ساعدنا في دعم ${country.nameAr}` : `Help Us Support ${country.name}`}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'تبرعك المباشر سيحقق تأثيراً فوري وملموساً في حياة الآلاف' : 'Your direct donation will create immediate and tangible impact in the lives of thousands'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>
            <Link href={`${base}/programs`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', border: '2px solid #d4af37', transition: 'all 0.3s' }}>
              {ar ? 'اكتشف برامجنا' : 'Explore Programs'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
