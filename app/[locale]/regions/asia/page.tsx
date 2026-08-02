'use client';

import { countries, regions } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';

export default function AsiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const region = regions.find(r => r.slug === 'asia')!;
  const regionCountries = countries.filter(c => c.region === 'asia');

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={`${base}/where-we-work`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '16px', display: 'inline-block', fontWeight: '700' }}>
            ← {ar ? 'العودة' : 'Back'}
          </Link>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '16px 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? region.nameAr : region.name}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '600px', lineHeight: '1.6' }}>
            {ar ? region.descriptionAr : region.description}
          </p>
        </div>
      </section>

      {/* Region Overview */}
      <section style={{ padding: '60px 32px', backgroundColor: '#f9f7f4', borderBottom: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '42px', fontWeight: '700', color: '#d4af37', marginBottom: '12px' }}>
              {regionCountries.length}
            </div>
            <div style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
              {ar ? 'دول مخدومة' : 'Countries Served'}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '42px', fontWeight: '700', color: '#d4af37', marginBottom: '12px' }}>
              {regionCountries.reduce((sum, c) => sum + c.programs.length, 0)}
            </div>
            <div style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
              {ar ? 'برنامج نشط' : 'Active Programs'}
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '60px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الدول المخدومة' : 'Countries We Serve'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
            {regionCountries.map((country) => (
              <Link key={country.id} href={`${base}/regions/${country.region}/${country.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                  {/* Flag Header */}
                  <div style={{ backgroundColor: '#0a1428', padding: '24px', fontSize: '64px', textAlign: 'center' }}>
                    {country.flag}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', margin: 0 }}>
                      {ar ? country.nameAr : country.name}
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px 0' }}>
                        {ar ? 'البرامج:' : 'Programs:'}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {(ar ? country.programsAr : country.programs).slice(0, 3).map((prog, idx) => (
                          <span key={idx} style={{ fontSize: '11px', backgroundColor: '#f0f0f0', color: '#0a1428', padding: '4px 8px', borderRadius: '4px' }}>
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p style={{ fontSize: '13px', color: '#d4af37', fontWeight: '700', marginBottom: '16px', margin: 0 }}>
                      {ar ? country.impactAr : country.impact}
                    </p>

                    {/* Footer */}
                    <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#6b6b6b' }}>
                        {ar ? 'اقرأ المزيد' : 'Learn More'}
                      </span>
                      <span style={{ fontSize: '20px' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'ساعدنا في دعم هذه المنطقة' : 'Help Us Support This Region'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar ? 'تبرعك سيحدث فرقاً حقيقياً في حياة الملايين عبر آسيا' : 'Your donation will make a real difference in the lives of millions across Asia'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
        </div>
      </section>
    </>
  );
}
