import { news } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'أخبارنا' : 'Our News'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '600px' }}>
            {ar ? 'تابع أحدث التطورات والمبادرات والقصص من مهمتنا الإنسانية' : 'Stay updated with the latest developments, initiatives, and stories from our humanitarian mission'}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '32px' }}>
            {news.map((article) => (
              <Link key={article.id} href={`${base}/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                  {/* Image */}
                  <div style={{ position: 'relative', height: '240px', backgroundColor: '#f0f0f0' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
                      📰
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
                    {/* Date & Category */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '12px' }}>
                      <span style={{ color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {ar ? article.categoryAr : article.category}
                      </span>
                      <span style={{ color: '#999' }} dir="ltr">
                        {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                      {ar ? article.titleAr : article.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                      {ar ? article.excerptAr : article.excerpt}
                    </p>

                    {/* Read More */}
                    <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px' }}>
                      <span style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700' }}>
                        {ar ? 'اقرأ المزيد →' : 'Read More →'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No News */}
          {news.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 32px' }}>
              <p style={{ fontSize: '18px', color: '#6b6b6b' }}>
                {ar ? 'لا توجد أخبار حالياً' : 'No news available'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'ابقَ على اطّلاع' : 'Stay Updated'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: '#d4af37' }}>
            {ar ? 'اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والقصص' : 'Subscribe to our newsletter for latest news and stories'}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input
              type="email"
              placeholder={ar ? 'بريدك الإلكتروني' : 'Your email'}
              style={{ flex: 1, padding: '12px 16px', borderRadius: '4px', border: 'none', fontSize: '14px' }}
            />
            <button style={{ padding: '12px 32px', backgroundColor: '#d4af37', color: '#0a1428', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer' }}>
              {ar ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
