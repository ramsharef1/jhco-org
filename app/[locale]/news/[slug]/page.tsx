import { news } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
    locale: 'en',
  })).concat(
    news.map((article) => ({
      slug: article.slug,
      locale: 'ar',
    }))
  );
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const article = news.find(a => a.slug === slug);
  if (!article) notFound();

  // Get related articles
  const relatedArticles = news.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link href={`${base}/news`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
            ← {ar ? 'العودة للأخبار' : 'Back to News'}
          </Link>
          <h1 style={{ fontSize: '48px', fontWeight: '400', margin: '20px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? article.titleAr : article.title}
          </h1>
          <div style={{ display: 'flex', gap: '32px', fontSize: '14px', marginTop: '24px' }}>
            <span style={{ color: '#d4af37', fontWeight: '700', textTransform: 'uppercase' }}>
              {ar ? article.categoryAr : article.category}
            </span>
            <span style={{ color: '#aaa' }} dir="ltr">
              {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Featured Image */}
          <div style={{ width: '100%', height: '400px', backgroundColor: '#e8e4db', borderRadius: '8px', marginBottom: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '96px' }}>
            📰
          </div>

          {/* Article Text */}
          <div style={{ fontSize: '18px', lineHeight: '1.9', color: '#3d3d3d', marginBottom: '64px' }}>
            <p>
              {ar
                ? article.excerptAr
                : article.excerpt
              }
            </p>

            <p style={{ marginTop: '32px' }}>
              {ar
                ? 'هذا يمثل جزءاً من التزامنا المستمر بتقديم خدمات إنسانية فعالة وشاملة. نعمل مع شركائنا المحليين والدوليين لضمان وصول المساعدة إلى أولئك الذين يحتاجونها بشكل أكثر إلحاحاً.'
                : 'This represents part of our ongoing commitment to delivering effective and comprehensive humanitarian services. We work with our local and international partners to ensure aid reaches those who need it most urgently.'
              }
            </p>

            <p style={{ marginTop: '32px' }}>
              {ar
                ? 'لنا أن نشكر جميع المتبرعين والمتطوعين وشركائنا الذين جعلوا هذا العمل ممكناً. معاً، نحن نصنع فرقاً حقيقياً في حياة الملايين حول العالم.'
                : 'We thank all our donors, volunteers, and partners who made this work possible. Together, we are making a real difference in the lives of millions around the world.'
              }
            </p>
          </div>

          {/* Share & CTA */}
          <div style={{ borderTop: '1px solid #e8e4db', borderBottom: '1px solid #e8e4db', padding: '32px 0', marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                {ar ? 'شارك هذا المنشور' : 'Share This'}
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ color: '#0a1428', textDecoration: 'none', fontSize: '20px' }}>f</a>
                <a href="#" style={{ color: '#0a1428', textDecoration: 'none', fontSize: '20px' }}>𝕏</a>
                <a href="#" style={{ color: '#0a1428', textDecoration: 'none', fontSize: '20px' }}>in</a>
              </div>
            </div>
            <Link href={`${base}/get-involved/donate`} style={{ padding: '12px 32px', backgroundColor: '#a8312f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600' }}>
              {ar ? 'ادعم هذا العمل' : 'Support This'}
            </Link>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'قراءات ذات صلة' : 'Related Articles'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`${base}/news/${relatedArticle.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ backgroundColor: '#f9f7f4', padding: '24px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}>
                      <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {ar ? relatedArticle.categoryAr : relatedArticle.category}
                      </p>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                        {ar ? relatedArticle.titleAr : relatedArticle.title}
                      </h4>
                      <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>
                        {ar ? relatedArticle.excerptAr : relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
