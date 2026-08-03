'use client';

import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

interface Campaign {
  id: number;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  category: string;
  categoryAr: string;
  impact: string;
  impactAr: string;
  status: string;
  objectives: string[];
  objectivesAr: string[];
}

export default function CampaignsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = params.locale as string;
  const ar = locale === 'ar';
  const base = `/${locale}`;
  const dict = getDictionary(locale as Locale);

  // Convert programs to campaigns
  const campaigns: Campaign[] = useMemo(
    () => programs.map((program, index) => ({
      ...program,
      id: index + 1,
    })),
    []
  );

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(campaigns.map(c => ar ? c.categoryAr : c.category));
    return Array.from(uniqueCategories);
  }, [ar]);

  // Filter by category
  const selectedCategory = searchParams.get('category');
  const filteredCampaigns = selectedCategory
    ? campaigns.filter(c => (ar ? c.categoryAr : c.category) === selectedCategory)
    : campaigns;

  const [searchQuery, setSearchQuery] = useState('');

  // Search functionality
  const searchedCampaigns = filteredCampaigns.filter(campaign => {
    const searchText = searchQuery.toLowerCase();
    return (
      (ar ? campaign.nameAr : campaign.name).toLowerCase().includes(searchText) ||
      (ar ? campaign.descriptionAr : campaign.description).toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '100px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'حملاتنا' : 'Our Campaigns'}
          </h1>
          <p style={{ fontSize: '20px', color: '#d4af37', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
            {ar ? 'اكتشف حملاتنا الإنسانية المتنوعة التي تغير حياة الملايين' : 'Discover our diverse humanitarian campaigns making a difference in millions of lives'}
          </p>
          <p style={{ fontSize: '16px', color: '#aaa', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            {ar ? 'من الإغاثة الطارئة إلى البرامج التنموية طويلة الأجل، تعمل حملاتنا على تقديم الدعم والأمل للمجتمعات حول العالم.' : 'From emergency relief to long-term development programs, our campaigns work to provide support and hope to communities worldwide.'}
          </p>
        </div>
      </section>

      {/* Campaigns Section */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Filters */}
          <div style={{ marginBottom: '60px' }}>
            {/* Search Bar */}
            <div style={{ marginBottom: '32px' }}>
              <input
                type="text"
                placeholder={ar ? 'ابحث عن حملة...' : 'Search campaigns...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  padding: '14px 20px',
                  fontSize: '16px',
                  border: '2px solid #e8e4db',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#d4af37')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e4db')}
              />
            </div>

            {/* Category Filter */}
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {ar ? 'الفئات' : 'Categories'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href={`${base}/campaigns`}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '24px',
                    backgroundColor: !selectedCategory ? '#d4af37' : '#f9f7f4',
                    color: !selectedCategory ? '#0a1428' : '#0a1428',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {ar ? 'جميع الحملات' : 'All Campaigns'}
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`${base}/campaigns?category=${encodeURIComponent(category)}`}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '24px',
                      backgroundColor: selectedCategory === category ? '#d4af37' : '#f9f7f4',
                      color: selectedCategory === category ? '#0a1428' : '#0a1428',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            <div style={{ backgroundColor: '#f9f7f4', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                {ar ? 'إجمالي الحملات' : 'Total Campaigns'}
              </p>
              <p style={{ fontSize: '32px', fontWeight: '600', color: '#d4af37' }}>
                {campaigns.length}
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f7f4', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                {ar ? 'الحملات النشطة' : 'Active Campaigns'}
              </p>
              <p style={{ fontSize: '32px', fontWeight: '600', color: '#d4af37' }}>
                {campaigns.filter(c => c.status === 'Active').length}
              </p>
            </div>
            <div style={{ backgroundColor: '#f9f7f4', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                {ar ? 'عدد الفئات' : 'Categories'}
              </p>
              <p style={{ fontSize: '32px', fontWeight: '600', color: '#d4af37' }}>
                {categories.length}
              </p>
            </div>
          </div>

          {/* Campaigns Grid */}
          {searchedCampaigns.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
              {searchedCampaigns.map((campaign) => (
                <Link
                  key={campaign.id}
                  href={`${base}/campaigns/${campaign.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #e8e4db',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Campaign Header Background */}
                    <div
                      style={{
                        height: '120px',
                        background: 'linear-gradient(135deg, #0a1428, #142850)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '16px'
                      }}
                    >
                      <div style={{ color: 'white' }}>
                        <p style={{ fontSize: '11px', color: '#d4af37', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
                          {ar ? campaign.categoryAr : campaign.category}
                        </p>
                        <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>
                          #{String(campaign.id).padStart(3, '0')}
                        </p>
                      </div>
                    </div>

                    {/* Campaign Content */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                        {ar ? campaign.nameAr : campaign.name}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>
                        {ar ? campaign.descriptionAr : campaign.description}
                      </p>

                      {/* Footer */}
                      <div style={{ borderTop: '1px solid #e8e4db', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <p style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase' }}>
                            {ar ? 'التأثير' : 'Impact'}
                          </p>
                          <p style={{ fontSize: '13px', fontWeight: '600', color: '#d4af37' }}>
                            {ar ? campaign.impactAr : campaign.impact}
                          </p>
                        </div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            backgroundColor: '#f9f7f4',
                            borderRadius: '50%',
                            color: '#d4af37',
                            fontWeight: 'bold'
                          }}
                        >
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 32px' }}>
              <h3 style={{ fontSize: '24px', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'لا توجد حملات' : 'No Campaigns Found'}
              </h3>
              <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px' }}>
                {ar ? 'لم نتمكن من العثور على حملات تطابق بحثك.' : 'We could not find campaigns matching your search.'}
              </p>
              <Link
                href={`${base}/campaigns`}
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  backgroundColor: '#d4af37',
                  color: '#0a1428',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600'
                }}
              >
                {ar ? 'عرض جميع الحملات' : 'View All Campaigns'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'كن جزءاً من الحل' : 'Be Part of the Solution'}
          </h2>
          <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '40px', lineHeight: '1.8' }}>
            {ar ? 'ساعدنا في جعل فرق في حياة الآلاف. اختر حملة واحترك معنا اليوم.' : 'Help us make a difference in thousands of lives. Choose a campaign and join us today.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '14px 32px',
                backgroundColor: '#d4af37',
                color: '#0a1428',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </button>
            <Link
              href={`${base}/volunteer`}
              style={{
                padding: '14px 32px',
                backgroundColor: 'transparent',
                color: '#d4af37',
                border: '2px solid #d4af37',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              {ar ? 'تطوع معنا' : 'Volunteer With Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
