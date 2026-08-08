'use client';

import { useState, useMemo } from 'react';
import { news, newsAuthors } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NewsArchivePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Get all unique categories
  const categories = Array.from(
    new Set(news.map((article) => (ar ? article.categoryAr : article.category)))
  );

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return news.filter((article) => {
      const title = ar ? article.titleAr : article.title;
      const excerpt = ar ? article.excerptAr : article.excerpt;
      const category = ar ? article.categoryAr : article.category;

      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, ar]);

  // Get author info
  const getAuthor = (authorId: number) => newsAuthors.find((a) => a.id === authorId);

  // Get related articles (same category, different article)
  const getRelatedArticles = (articleId: number, categoryAr: string, category: string) => {
    const currentCategory = ar ? categoryAr : category;
    return news
      .filter(
        (a) =>
          a.id !== articleId &&
          (ar ? a.categoryAr : a.category) === currentCategory
      )
      .slice(0, 3);
  };

  const selectedArticleData = selectedArticle
    ? news.find((a) => a.id === selectedArticle)
    : null;

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a1428, #142850)',
          padding: '80px 32px',
          color: 'white',
          textAlign: ar ? 'right' : 'left',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: '400',
              margin: '0 0 16px 0',
              fontFamily: 'Georgia, serif',
            }}
          >
            {ar ? 'أرشيف الأخبار' : 'News Archive'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', margin: '0 0 32px 0', maxWidth: '600px' }}>
            {ar
              ? 'استكشف مكتبتنا الشاملة من الأخبار والقصص والتحديثات'
              : 'Explore our comprehensive library of news, stories, and updates'}
          </p>
        </div>
      </section>

      {/* Main Archive Content */}
      <section
        style={{
          padding: '80px 32px',
          backgroundColor: 'white',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
            {/* Main Content */}
            <div>
              {/* Search Bar */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <input
                    type="text"
                    placeholder={ar ? 'ابحث عن الأخبار...' : 'Search news...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 48px 14px 16px',
                      fontSize: '16px',
                      border: '2px solid #e8e4db',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      [ar ? 'left' : 'right']: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999',
                      fontSize: '20px',
                    }}
                  >
                    🔍
                  </span>
                </div>

                {/* Category Filter */}
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#0a1428',
                      marginBottom: '12px',
                    }}
                  >
                    {ar ? 'الفئات' : 'Categories'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '24px',
                        border: selectedCategory === null ? 'none' : '2px solid #e8e4db',
                        backgroundColor:
                          selectedCategory === null ? '#0a1428' : 'transparent',
                        color: selectedCategory === null ? 'white' : '#0a1428',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        transition: 'all 0.3s',
                      }}
                    >
                      {ar ? 'الكل' : 'All'}
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '24px',
                          border:
                            selectedCategory === category ? 'none' : '2px solid #e8e4db',
                          backgroundColor:
                            selectedCategory === category ? '#d4af37' : 'transparent',
                          color:
                            selectedCategory === category ? '#0a1428' : '#0a1428',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600',
                          transition: 'all 0.3s',
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '24px' }}>
                  {ar ? `${filteredArticles.length} مقالة` : `${filteredArticles.length} articles`}
                </p>

                {filteredArticles.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => setSelectedArticle(article.id)}
                        style={{
                          backgroundColor: '#f9f7f3',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          border:
                            selectedArticle === article.id
                              ? '2px solid #d4af37'
                              : '1px solid #e8e4db',
                          display: 'grid',
                          gridTemplateColumns: '120px 1fr',
                          boxShadow:
                            selectedArticle === article.id
                              ? '0 4px 12px rgba(212,175,55,0.2)'
                              : 'none',
                        }}
                      >
                        {/* Thumbnail */}
                        <div
                          style={{
                            backgroundColor: '#e8e4db',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                            order: ar ? 2 : 1,
                          }}
                        >
                          📰
                        </div>

                        {/* Content */}
                        <div
                          style={{
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            order: ar ? 1 : 2,
                            textAlign: ar ? 'right' : 'left',
                          }}
                        >
                          {/* Meta */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '8px',
                              fontSize: '12px',
                            }}
                          >
                            <span
                              style={{
                                color: '#d4af37',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                              }}
                            >
                              {ar ? article.categoryAr : article.category}
                            </span>
                            <span style={{ color: '#999' }} dir="ltr">
                              {article.date.toLocaleDateString(
                                ar ? 'ar-JO' : 'en-US'
                              )}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#0a1428',
                              marginBottom: '8px',
                              lineHeight: '1.4',
                            }}
                          >
                            {ar ? article.titleAr : article.title}
                          </h3>

                          {/* Excerpt */}
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#6b6b6b',
                              lineHeight: '1.5',
                              marginBottom: '8px',
                            }}
                          >
                            {ar ? article.excerptAr : article.excerpt}
                          </p>

                          {/* Read More Link */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '12px',
                            }}
                          >
                            <span style={{ color: '#999' }}>
                              {ar ? `${article.readTime} دقائق` : `${article.readTime} min read`}
                            </span>
                            <span style={{ color: '#d4af37', fontWeight: '700' }}>
                              {ar ? '← اقرأ المزيد' : 'Read More →'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                    <p style={{ fontSize: '18px', color: '#6b6b6b' }}>
                      {ar ? 'لا توجد مقالات تطابق بحثك' : 'No articles match your search'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Author Bios */}
              <div style={{ marginBottom: '40px' }}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#0a1428',
                    marginBottom: '16px',
                    textAlign: ar ? 'right' : 'left',
                  }}
                >
                  {ar ? 'كتابنا' : 'Our Authors'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {newsAuthors.map((author) => (
                    <div
                      key={author.id}
                      onClick={() =>
                        setExpandedAuthor(
                          expandedAuthor === author.id ? null : author.id
                        )
                      }
                      style={{
                        backgroundColor: '#f9f7f3',
                        borderRadius: '8px',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        borderLeft:
                          expandedAuthor === author.id
                            ? '4px solid #d4af37'
                            : '4px solid #e8e4db',
                        textAlign: ar ? 'right' : 'left',
                        direction: ar ? 'rtl' : 'ltr',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '32px' }}>{author.avatar}</span>
                        <div>
                          <p
                            style={{
                              fontWeight: '600',
                              color: '#0a1428',
                              margin: '0 0 4px 0',
                              fontSize: '14px',
                            }}
                          >
                            {ar ? author.nameAr : author.name}
                          </p>
                          <p style={{ color: '#d4af37', margin: 0, fontSize: '12px' }}>
                            {ar ? author.titleAr : author.title}
                          </p>
                        </div>
                      </div>

                      {expandedAuthor === author.id && (
                        <p
                          style={{
                            fontSize: '13px',
                            color: '#6b6b6b',
                            lineHeight: '1.6',
                            margin: 0,
                            paddingTop: '12px',
                            borderTop: '1px solid #e8e4db',
                          }}
                        >
                          {ar ? author.bioAr : author.bio}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div
                style={{
                  backgroundColor: '#0a1428',
                  color: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  textAlign: ar ? 'right' : 'left',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              >
                <h4 style={{ marginTop: 0, marginBottom: '12px', fontSize: '14px' }}>
                  {ar ? 'هل تريد أن تبقى على اطلاع؟' : 'Stay Updated'}
                </h4>
                <p style={{ fontSize: '13px', color: '#d4af37', marginBottom: '16px' }}>
                  {ar
                    ? 'اشترك في نشرتنا الإخبارية للحصول على أحدث الأخبار'
                    : 'Subscribe to our newsletter for latest updates'}
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#d4af37',
                    color: '#0a1428',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  {ar ? 'اشترك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal/Section */}
      {selectedArticleData && (
        <section
          style={{
            padding: '80px 32px',
            backgroundColor: '#f9f7f3',
            direction: ar ? 'rtl' : 'ltr',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                marginBottom: '24px',
                float: ar ? 'left' : 'right',
              }}
            >
              ✕
            </button>

            {/* Article Header */}
            <div style={{ clear: 'both', textAlign: ar ? 'right' : 'left' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#d4af37',
                  color: '#0a1428',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginBottom: '16px',
                }}
              >
                {ar ? selectedArticleData.categoryAr : selectedArticleData.category}
              </div>

              <h1
                style={{
                  fontSize: '42px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '16px',
                  lineHeight: '1.3',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {ar ? selectedArticleData.titleAr : selectedArticleData.title}
              </h1>

              {/* Article Meta */}
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  color: '#999',
                  fontSize: '14px',
                  marginBottom: '32px',
                  borderBottom: '1px solid #e8e4db',
                  paddingBottom: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}
              >
                <span dir="ltr">
                  {selectedArticleData.date.toLocaleDateString(
                    ar ? 'ar-JO' : 'en-US'
                  )}
                </span>
                <span>
                  {ar ? `${selectedArticleData.readTime} دقائق` : `${selectedArticleData.readTime} min read`}
                </span>
              </div>

              {/* Author Info */}
              {getAuthor(selectedArticleData.author) && (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    marginBottom: '32px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    flexDirection: ar ? 'row-reverse' : 'row',
                  }}
                >
                  <span style={{ fontSize: '32px' }}>
                    {getAuthor(selectedArticleData.author)?.avatar}
                  </span>
                  <div style={{ textAlign: ar ? 'right' : 'left' }}>
                    <p
                      style={{
                        fontWeight: '600',
                        color: '#0a1428',
                        margin: '0 0 4px 0',
                        fontSize: '14px',
                      }}
                    >
                      {ar
                        ? getAuthor(selectedArticleData.author)?.nameAr
                        : getAuthor(selectedArticleData.author)?.name}
                    </p>
                    <p style={{ color: '#999', margin: 0, fontSize: '12px' }}>
                      {ar
                        ? getAuthor(selectedArticleData.author)?.titleAr
                        : getAuthor(selectedArticleData.author)?.title}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '8px',
                marginBottom: '40px',
                textAlign: ar ? 'right' : 'left',
                lineHeight: '1.8',
                fontSize: '16px',
                color: '#333',
              }}
            >
              <p>{ar ? selectedArticleData.contentAr : selectedArticleData.content}</p>

              {/* Additional Content Sections */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginTop: '32px',
                  marginBottom: '16px',
                }}
              >
                {ar ? 'التأثير' : 'Impact'}
              </h3>
              <p style={{ color: '#6b6b6b' }}>
                {ar
                  ? 'هذه المبادرة تعكس التزام الهيئة بخدمة الإنسانية وتوفير الكرامة لجميع الفئات المحتاجة.'
                  : 'This initiative reflects JHCO\'s commitment to humanitarian service and providing dignity to all vulnerable populations.'}
              </p>
            </div>

            {/* Related Articles */}
            <div style={{ marginBottom: '40px', textAlign: ar ? 'right' : 'left' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '24px',
                }}
              >
                {ar ? 'مقالات ذات صلة' : 'Related Articles'}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                }}
              >
                {getRelatedArticles(
                  selectedArticleData.id,
                  selectedArticleData.categoryAr,
                  selectedArticleData.category
                ).map((relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    onClick={() => setSelectedArticle(relatedArticle.id)}
                    style={{
                      backgroundColor: '#f9f7f3',
                      borderRadius: '8px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      border: '1px solid #e8e4db',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  >
                    <p
                      style={{
                        color: '#d4af37',
                        fontSize: '12px',
                        fontWeight: '700',
                        marginBottom: '8px',
                      }}
                    >
                      {ar
                        ? relatedArticle.categoryAr
                        : relatedArticle.category}
                    </p>
                    <h4
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#0a1428',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4',
                      }}
                    >
                      {ar ? relatedArticle.titleAr : relatedArticle.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#999',
                        margin: 0,
                      }}
                    >
                      {ar
                        ? relatedArticle.date.toLocaleDateString('ar-JO')
                        : relatedArticle.date.toLocaleDateString('en-US')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Section Placeholder */}
            <div
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '8px',
                textAlign: ar ? 'right' : 'left',
                direction: ar ? 'rtl' : 'ltr',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '24px',
                }}
              >
                {ar ? 'التعليقات' : 'Comments'}
              </h3>

              {/* Comment Form */}
              <div style={{ marginBottom: '32px' }}>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6b6b6b',
                    marginBottom: '16px',
                  }}
                >
                  {ar
                    ? 'شارك رأيك وانضم إلى الحوار'
                    : 'Share your thoughts and join the conversation'}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <input
                    type="text"
                    placeholder={ar ? 'اسمك' : 'Your name'}
                    style={{
                      padding: '10px',
                      border: '1px solid #e8e4db',
                      borderRadius: '4px',
                      fontSize: '14px',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  />
                  <input
                    type="email"
                    placeholder={ar ? 'بريدك الإلكتروني' : 'Your email'}
                    style={{
                      padding: '10px',
                      border: '1px solid #e8e4db',
                      borderRadius: '4px',
                      fontSize: '14px',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  />
                </div>
                <textarea
                  placeholder={ar ? 'اكتب تعليقك هنا...' : 'Write your comment here...'}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e8e4db',
                    borderRadius: '4px',
                    fontSize: '14px',
                    minHeight: '120px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    textAlign: ar ? 'right' : 'left',
                  }}
                />
                <button
                  style={{
                    marginTop: '12px',
                    padding: '10px 24px',
                    backgroundColor: '#d4af37',
                    color: '#0a1428',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  {ar ? 'نشر التعليق' : 'Post Comment'}
                </button>
              </div>

              {/* Comments Placeholder */}
              <div
                style={{
                  backgroundColor: '#f9f7f3',
                  padding: '24px',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: '#999', margin: 0 }}>
                  {ar
                    ? 'لا توجد تعليقات بعد. كن أول من يعلق!'
                    : 'No comments yet. Be the first to comment!'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section
        style={{
          backgroundColor: '#0a1428',
          padding: '64px 32px',
          textAlign: 'center',
          color: 'white',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '400',
              marginBottom: '24px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {ar ? 'ابقَ على اطّلاع' : 'Stay Updated'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: '#d4af37' }}>
            {ar
              ? 'اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والقصص'
              : 'Subscribe to our newsletter for latest news and stories'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '16px',
              flexDirection: ar ? 'row-reverse' : 'row',
            }}
          >
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
            <button
              style={{
                padding: '12px 32px',
                backgroundColor: '#d4af37',
                color: '#0a1428',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              {ar ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
