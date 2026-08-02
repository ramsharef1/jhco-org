import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'من نحن' : 'Who We Are'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', marginTop: '16px' }}>
            {ar ? 'الهيئة الخيرية الأردنية الهاشمية' : 'Jordan Hashemite Charity Organization'}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }}>
            {/* Mission */}
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'مهمتنا' : 'Our Mission'}
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '16px' }}>
                {ar
                  ? 'تقديم المساعدات الإنسانية والدعم التنموي عبر أكثر من 30 دولة برحمة وحيادية وتميّز، مع السعي لاستعادة الكرامة الإنسانية وتحقيق المساواة في الفرص للجميع.'
                  : 'To deliver humanitarian aid and development support across 30+ countries with compassion, impartiality, and excellence, striving to restore human dignity and achieve equal opportunity for all.'
                }
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '16px' }}>
                {ar
                  ? 'عالم خالٍ من الفقر والمعاناة، حيث يتمتع كل فرد بحقه في الحياة الكريمة والفرص المتساوية، وتسود العدالة والمساواة والسلام.'
                  : 'A world free from poverty and suffering, where every individual enjoys their right to a dignified life and equal opportunities, with justice, equality, and peace prevailing.'
                }
              </p>
            </div>
          </div>

          {/* History */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px', marginTop: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'تاريخنا' : 'Our History'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
              {/* 1990 */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                  1990
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d', margin: 0 }}>
                  {ar
                    ? 'تأسست الهيئة الخيرية الأردنية الهاشمية برعاية ملكية سامية لتقديم الخدمات الإنسانية.'
                    : 'JHCO was established under royal patronage to provide humanitarian services.'
                  }
                </p>
              </div>

              {/* 2000s */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                  2000s
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d', margin: 0 }}>
                  {ar
                    ? 'توسّع العمل لتغطية برامج التعليم والصحة والتنمية الاقتصادية في أكثر من 30 دولة.'
                    : 'Expanded operations to cover education, healthcare, and economic development programs in 30+ countries.'
                  }
                </p>
              </div>

              {/* Today */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', marginBottom: '16px' }}>
                  {ar ? 'اليوم' : 'Today'}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#3d3d3d', margin: 0 }}>
                  {ar
                    ? 'نخدم أكثر من 75,000 أسرة سنوياً مع 2,500+ متطوع وشراكات عالمية قوية.'
                    : 'Serving 75,000+ families annually with 2,500+ volunteers and strong global partnerships.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div style={{ borderTop: '2px solid #d4af37', paddingTop: '80px', marginTop: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'قيمنا الأساسية' : 'Core Values'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
              {[
                { title: ar ? 'الإنسانية' : 'Humanity', desc: ar ? 'احترام الكرامة الإنسانية' : 'Respect for human dignity' },
                { title: ar ? 'الحياد' : 'Impartiality', desc: ar ? 'عدم التمييز بسبب المعتقد' : 'No discrimination based on beliefs' },
                { title: ar ? 'الشفافية' : 'Transparency', desc: ar ? 'المساءلة والنزاهة' : 'Accountability & integrity' },
                { title: ar ? 'التميّز' : 'Excellence', desc: ar ? 'جودة عالية في كل عمل' : 'Quality in everything we do' },
              ].map((value, idx) => (
                <div key={idx} style={{ backgroundColor: '#0a1428', color: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#d4af37', marginBottom: '12px' }}>
                    {value.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'انضم إلى مهمتنا' : 'Join Our Mission'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#d4af37' }}>
            {ar ? 'ساهم في صنع الفرق في حياة الملايين' : 'Help make a difference in millions of lives'}
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px' }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>
            <Link href={`${base}/get-involved/volunteer`} style={{ display: 'inline-block', padding: '16px 48px', border: '2px solid #d4af37', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px' }}>
              {ar ? 'تطوع معنا' : 'Volunteer'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
