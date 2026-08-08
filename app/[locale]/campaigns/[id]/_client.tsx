'use client';

import { programs } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

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

export default function CampaignDetailPage() {
  const params = useParams();
  const locale = params.locale as string;
  const id = params.id as string;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Convert programs to campaigns (using programs as the source)
  const campaigns: Campaign[] = useMemo(
    () => programs.map((program, index) => ({
      ...program,
      id: index + 1,
    })),
    []
  );

  // Find campaign by ID
  const campaignId = parseInt(id, 10);
  const campaign = campaigns.find(c => c.id === campaignId);

  if (!campaign) {
    return (
      <div style={{ padding: '80px 32px', textAlign: 'center', minHeight: '400px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', color: '#0a1428', marginBottom: '16px' }}>
            {ar ? 'الحملة غير موجودة' : 'Campaign Not Found'}
          </h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
            {ar ? 'عذراً، لا يمكن العثور على الحملة المطلوبة.' : 'Sorry, the campaign you are looking for could not be found.'}
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
            {ar ? 'العودة للحملات' : 'Back to Campaigns'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link
            href={`${base}/campaigns`}
            style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}
          >
            ← {ar ? 'العودة للحملات' : 'Back to Campaigns'}
          </Link>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '20px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? campaign.nameAr : campaign.name}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', marginBottom: '32px' }}>
            {ar ? campaign.categoryAr : campaign.category}
          </p>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'الحالة' : 'Status'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>
                {campaign.status}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'التأثير' : 'Impact'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>
                {ar ? campaign.impactAr : campaign.impact}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'رقم الحملة' : 'Campaign ID'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37' }}>
                #{String(campaign.id).padStart(3, '0')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Overview */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'نظرة عامة على الحملة' : 'Campaign Overview'}
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '24px' }}>
              {ar ? campaign.longDescriptionAr : campaign.longDescription}
            </p>
          </div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
            {/* Objectives */}
            <div>
              <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'أهداف الحملة' : 'Campaign Objectives'}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(ar ? campaign.objectivesAr : campaign.objectives).map((obj, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '16px 0',
                      borderBottom: '1px solid #e8e4db',
                      color: '#3d3d3d',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{ color: '#d4af37', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              {/* Campaign Info Card */}
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                  {ar ? 'معلومات الحملة' : 'Campaign Information'}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                      {ar ? 'الفئة' : 'Category'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#0a1428' }}>
                      {ar ? campaign.categoryAr : campaign.category}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                      {ar ? 'الحالة' : 'Status'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
                      {campaign.status}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
                      {ar ? 'التأثير المتوقع' : 'Expected Impact'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#d4af37', fontWeight: '600' }}>
                      {ar ? campaign.impactAr : campaign.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div style={{ backgroundColor: '#0a1428', padding: '32px', borderRadius: '8px', color: 'white' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
                  {ar ? 'ساعدنا في هذه الحملة' : 'Support This Campaign'}
                </h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', color: '#ddd' }}>
                  {ar ? 'انضم إلينا في جعل فرق في حياة الآلاف. ساهم الآن بتبرعك أو تطوعك.' : 'Join us in making a difference in thousands of lives. Contribute now through donation or volunteering.'}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    style={{
                      padding: '14px 24px',
                      backgroundColor: '#d4af37',
                      color: '#0a1428',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '16px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    {ar ? 'تبرع الآن' : 'Donate Now'}
                  </button>
                  <Link
                    href={`${base}/volunteer`}
                    style={{
                      padding: '14px 24px',
                      backgroundColor: 'transparent',
                      color: '#d4af37',
                      border: '2px solid #d4af37',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '16px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    {ar ? 'تطوع معنا' : 'Volunteer With Us'}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div style={{ backgroundColor: '#f9f7f4', padding: '60px 40px', borderRadius: '8px', marginBottom: '80px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'مقاييس التأثير' : 'Impact Metrics'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
              {[
                {
                  label: ar ? 'المستفيدون' : 'Beneficiaries',
                  value: ar ? campaign.impactAr : campaign.impact
                },
                {
                  label: ar ? 'مدة الحملة' : 'Campaign Duration',
                  value: ar ? '12 شهر' : '12 Months'
                },
                {
                  label: ar ? 'التغطية الجغرافية' : 'Geographic Coverage',
                  value: ar ? 'متعدد الدول' : 'Multi-Country'
                },
                {
                  label: ar ? 'الكفاءة' : 'Efficiency',
                  value: '95%'
                }
              ].map((metric, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '600', letterSpacing: '1px' }}>
                    {metric.label}
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: '600', color: '#d4af37' }}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Campaigns Section */}
          <div>
            <h3 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'حملات مشابهة' : 'Related Campaigns'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
              {campaigns
                .filter(c => c.categoryAr === campaign.categoryAr && c.id !== campaign.id)
                .slice(0, 3)
                .map((relatedCampaign) => (
                  <Link
                    key={relatedCampaign.id}
                    href={`${base}/campaigns/${relatedCampaign.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      style={{
                        padding: '24px',
                        borderRadius: '8px',
                        border: '1px solid #e8e4db',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                          {ar ? relatedCampaign.categoryAr : relatedCampaign.category}
                        </p>
                        <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                          {ar ? relatedCampaign.nameAr : relatedCampaign.name}
                        </h4>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                          {ar ? relatedCampaign.descriptionAr : relatedCampaign.description}
                        </p>
                      </div>
                      <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '600' }}>
                        {ar ? relatedCampaign.impactAr : relatedCampaign.impact}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
