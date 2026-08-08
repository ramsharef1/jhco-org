import { news } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import NewsCard from '@/components/NewsCard';
import NewsletterForm from '@/components/NewsletterForm';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('news', locale);
}

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
              <NewsCard
                key={article.id}
                id={String(article.id)}
                titleEn={article.title}
                titleAr={article.titleAr}
                excerptEn={article.excerpt}
                excerptAr={article.excerptAr}
                dateEn={article.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                dateAr={article.date.toLocaleDateString('ar-JO', { year: 'numeric', month: 'long', day: 'numeric' })}
                categoryEn={article.category}
                categoryAr={article.categoryAr}
                icon="📰"
                href={`${base}/news/${article.slug}`}
                locale={locale}
              />
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
          <NewsletterForm locale={locale} />
        </div>
      </section>
    </>
  );
}
