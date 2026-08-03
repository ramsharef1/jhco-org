'use client';

import { useState, useMemo } from 'react';
import { news, newsAuthors } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);
  const [selectedDateRange, setSelectedDateRange] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Get all unique categories
  const categories = Array.from(
    new Set(news.map((article) => (ar ? article.categoryAr : article.category)))
  );

  // Get date ranges (last 30 days, last 60 days, last 90 days, all time)
  const getDateRangeFilter = (range: string, articleDate: Date) => {
    const now = new Date();
    const daysAgo = (days: number) => new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

    switch (range) {
      case '30':
        return articleDate >= daysAgo(30);
      case '60':
        return articleDate >= daysAgo(60);
      case '90':
        return articleDate >= daysAgo(90);
      default:
        return true;
    }
  };

  // Filter articles based on search, category, author, and date
  const filteredArticles = useMemo(() => {
    return news.filter((article) => {
      const title = ar ? article.titleAr : article.title;
      const excerpt = ar ? article.excerptAr : article.excerpt;
      const category = ar ? article.categoryAr : article.category;

      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || category === selectedCategory;
      const matchesAuthor = !selectedAuthor || article.author === selectedAuthor;
      const matchesDate = !selectedDateRange || getDateRangeFilter(selectedDateRange, article.date);

      return matchesSearch && matchesCategory && matchesAuthor && matchesDate;
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [searchQuery, selectedCategory, selectedAuthor, selectedDateRange, ar]);

  // Featured posts (top 3 from filtered, or first 3 if no filter)
  const featuredPosts = filteredArticles.slice(0, 3);

  // Paginate filtered articles
  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Get author info
  const getAuthor = (authorId: number) => newsAuthors.find((a) => a.id === authorId);

  // Calculate reading time label
  const getReadingTimeLabel = (minutes: number) => {
    if (ar) {
      return minutes === 1 ? 'دقيقة واحدة' : `${minutes} دقيقة`;
    }
    return minutes === 1 ? '1 min read' : `${minutes} min read`;
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1428, #142850)',
        padding: '80px 32px',
        color: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'مدونة الأخبار' : 'Blog & News'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: 0, maxWidth: '600px' }}>
            {ar ? 'استكشف رحلتنا الإنسانية من خلال مقالات معمقة وقصص ملهمة' : 'Explore our humanitarian journey through in-depth articles and inspiring stories'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 32px', backgroundColor: '#fafaf8', direction: ar ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>

          {/* Search Bar */}
          <div style={{ marginBottom: '48px' }}>
            <input
              type="text"
              placeholder={ar ? 'ابحث عن مقالات...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '16px',
                border: '2px solid #d4af37',
                borderRadius: '8px',
                outline: 'none',
                backgroundColor: 'white',
                color: '#0a1428',
                textAlign: ar ? 'right' : 'left',
              }}
            />
          </div>

          {/* Filters */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}>
            {/* Category Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px', color: '#0a1428' }}>
                {ar ? 'الفئة' : 'Category'}
              </label>
              <select
                value={selectedCategory || ''}
                onChange={(e) => {
                  setSelectedCategory(e.target.value || null);
                  setCurrentPage(1);
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid #e8e4db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#0a1428',
                  cursor: 'pointer',
                }}
              >
                <option value="">{ar ? 'جميع الفئات' : 'All Categories'}</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Author Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px', color: '#0a1428' }}>
                {ar ? 'المؤلف' : 'Author'}
              </label>
              <select
                value={selectedAuthor || ''}
                onChange={(e) => {
                  setSelectedAuthor(e.target.value ? Number(e.target.value) : null);
                  setCurrentPage(1);
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid #e8e4db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#0a1428',
                  cursor: 'pointer',
                }}
              >
                <option value="">{ar ? 'جميع المؤلفين' : 'All Authors'}</option>
                {newsAuthors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {ar ? author.nameAr : author.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px', color: '#0a1428' }}>
                {ar ? 'نطاق التاريخ' : 'Date Range'}
              </label>
              <select
                value={selectedDateRange || ''}
                onChange={(e) => {
                  setSelectedDateRange(e.target.value || null);
                  setCurrentPage(1);
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid #e8e4db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#0a1428',
                  cursor: 'pointer',
                }}
              >
                <option value="">{ar ? 'كل الأوقات' : 'All Time'}</option>
                <option value="30">{ar ? 'آخر 30 يوم' : 'Last 30 days'}</option>
                <option value="60">{ar ? 'آخر 60 يوم' : 'Last 60 days'}</option>
                <option value="90">{ar ? 'آخر 90 يوم' : 'Last 90 days'}</option>
              </select>
            </div>
          </div>

          {/* Featured Posts Carousel */}
          {featuredPosts.length > 0 && (
            <div style={{ marginBottom: '64px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '32px', color: '#0a1428' }}>
                {ar ? 'المقالات المميزة' : 'Featured Stories'}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {featuredPosts.map((article) => {
                  const author = getAuthor(article.author);
                  return (
                    <Link key={article.id} href={`${base}/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        backgroundColor: 'white',
                        border: '2px solid #d4af37',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.4s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 4px 12px rgba(212, 175, 55, 0.15)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.15)';
                      }}>
                        {/* Image */}
                        <div style={{ position: 'relative', height: '200px', backgroundColor: '#f0f0f0' }}>
                          <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
                            ⭐
                          </div>
                          <div style={{ position: 'absolute', top: '12px', right: ar ? '12px' : 'auto', left: ar ? 'auto' : '12px', backgroundColor: '#d4af37', color: '#0a1428', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                            {ar ? 'مميز' : 'Featured'}
                          </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                          {/* Date & Category */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '12px', flexDirection: ar ? 'row-reverse' : 'row', gap: '12px' }}>
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

                          {/* Author & Read Time */}
                          <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                            <span style={{ color: '#999' }}>
                              {author ? (ar ? author.nameAr : author.name) : 'JHCO'}
                            </span>
                            <span style={{ color: '#d4af37', fontWeight: '700' }}>
                              {getReadingTimeLabel(article.readTime)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div style={{ marginBottom: '24px', fontSize: '14px', color: '#6b6b6b' }}>
            {ar
              ? `عرض ${paginatedArticles.length} من ${filteredArticles.length} مقالة`
              : `Showing ${paginatedArticles.length} of ${filteredArticles.length} articles`}
          </div>

          {/* All Articles Grid */}
          {paginatedArticles.length > 0 ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px', marginBottom: '48px' }}>
                {paginatedArticles.map((article) => {
                  const author = getAuthor(article.author);
                  return (
                    <Link key={article.id} href={`${base}/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        backgroundColor: 'white',
                        border: '1px solid #e8e4db',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(10,20,40,0.12)';
                        e.currentTarget.style.borderColor = '#d4af37';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
                        e.currentTarget.style.borderColor = '#e8e4db';
                      }}>
                        {/* Image */}
                        <div style={{ position: 'relative', height: '200px', backgroundColor: '#f0f0f0' }}>
                          <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px' }}>
                            📰
                          </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                          {/* Meta */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '12px', flexDirection: ar ? 'row-reverse' : 'row', gap: '12px' }}>
                            <span style={{ color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                              {ar ? article.categoryAr : article.category}
                            </span>
                            <span style={{ color: '#999' }} dir="ltr">
                              {article.date.toLocaleDateString(ar ? 'ar-JO' : 'en-US')}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                            {ar ? article.titleAr : article.title}
                          </h3>

                          {/* Excerpt */}
                          <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                            {ar ? article.excerptAr : article.excerpt}
                          </p>

                          {/* Footer */}
                          <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                              <span>{author?.avatar || '👤'}</span>
                              <span style={{ color: '#999' }}>
                                {author ? (ar ? author.nameAr : author.name) : 'JHCO'}
                              </span>
                            </div>
                            <span style={{ color: '#d4af37', fontWeight: '700' }}>
                              {getReadingTimeLabel(article.readTime)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', flexDirection: ar ? 'row-reverse' : 'row' }}>
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: currentPage === 1 ? '#f0f0f0' : '#d4af37',
                      color: currentPage === 1 ? '#999' : '#0a1428',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    {ar ? '← السابق' : 'Previous'}
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: currentPage === page ? '#0a1428' : '#f0f0f0',
                        color: currentPage === page ? '#d4af37' : '#0a1428',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: currentPage === page ? '700' : '600',
                        fontSize: '14px',
                      }}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: currentPage === totalPages ? '#f0f0f0' : '#d4af37',
                      color: currentPage === totalPages ? '#999' : '#0a1428',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    {ar ? 'التالي ←' : 'Next'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 32px' }}>
              <p style={{ fontSize: '18px', color: '#6b6b6b' }}>
                {ar ? 'لا توجد مقالات تطابق معايير البحث الخاصة بك' : 'No articles match your search criteria'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Author Profiles Section */}
      <section style={{ padding: '64px 32px', backgroundColor: 'white', direction: ar ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '48px', color: '#0a1428', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            {ar ? 'فريق التحرير الخاص بنا' : 'Our Editorial Team'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {newsAuthors.map((author) => (
              <div key={author.id} style={{
                backgroundColor: '#fafaf8',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid #e8e4db',
              }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>
                  {author.avatar}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? author.nameAr : author.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#d4af37', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {ar ? author.titleAr : author.title}
                </p>
                <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6' }}>
                  {ar ? author.bioAr : author.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white', direction: ar ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'ابقَ على اطّلاع' : 'Stay Updated'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: '#d4af37' }}>
            {ar ? 'اشترك في نشرتنا الإخبارية للحصول على آخر أخبارنا مباشرة في صندوق بريدك' : 'Subscribe to our newsletter for the latest news delivered straight to your inbox'}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexDirection: ar ? 'row-reverse' : 'row' }}>
            <input
              type="email"
              placeholder={ar ? 'بريدك الإلكتروني' : 'Your email'}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '14px',
                textAlign: ar ? 'right' : 'left',
              }}
            />
            <button style={{
              padding: '12px 32px',
              backgroundColor: '#d4af37',
              color: '#0a1428',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              {ar ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
          <p style={{ fontSize: '12px', color: '#999' }}>
            {ar ? 'لن نشارك بريدك الإلكتروني مع أي شخص آخر.' : 'We won\'t share your email with anyone else.'}
          </p>
        </div>
      </section>
    </>
  );
}
