'use client';

import { regions, impactStats } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';

export default function WhereWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'حيث نعمل' : 'Where We Work'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '600px', lineHeight: '1.6' }}>
            {ar ? 'الهيئة الخيرية الأردنية الهاشمية تخدم أكثر من 30 دولة عبر أربع قارات، توفر المساعدة الإنسانية والدعم التنموي للملايين' : 'The Jordan Hashemite Charity Organization serves 30+ countries across four continents, delivering humanitarian aid and development support to millions'}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{ padding: '60px 32px', backgroundColor: '#f9f7f4', borderBottom: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {impactStats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#d4af37', marginBottom: '12px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
                  {ar ? stat.labelAr : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#0a1428', marginBottom: '60px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'مناطقنا الجغرافية' : 'Our Geographic Regions'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {regions.map((region) => (
              <Link key={region.id} href={`${base}/regions/${region.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                  {/* Header */}
                  <div style={{ backgroundColor: '#0a1428', padding: '32px', color: 'white' }}>
                    <h3 style={{ fontSize: '28px', fontWeight: '600', margin: '0 0 8px 0', fontFamily: 'Georgia, serif' }}>
                      {ar ? region.nameAr : region.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#d4af37', margin: 0, fontWeight: '700' }}>
                      {region.countries.length} {ar ? 'دول' : 'Countries'}
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '15px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '20px' }}>
                      {ar ? region.descriptionAr : region.description}
                    </p>

                    {/* Footer */}
                    <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700' }}>
                        {ar ? 'اكتشف المزيد' : 'Explore Region'}
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

      {/* Global Impact Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'نطاقنا العالمي' : 'Our Global Impact'}
          </h2>
          <p style={{ fontSize: '18px', color: '#d4af37', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
            {ar ? 'من خلال شبكتنا المتسعة من الشركاء والمتطوعين، نصل إلى أكثر الفئات ضعفاً في العالم' : 'Through our expanding network of partners and volunteers, we reach the most vulnerable populations worldwide'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'ساعد الآن' : 'Help Now'}
          </Link>
        </div>
      </section>
    </>
  );
}
