'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Fundraising Campaigns',
    subtitle: 'Be Part of Something Bigger',
    campaigns: [
      { icon: '🚨', title: 'Emergency Relief', desc: 'Support families affected by crisis', goal: '$500K', raised: '$350K' },
      { icon: '📚', title: 'Education Initiative', desc: 'Provide scholarships to students', goal: '$200K', raised: '$145K' },
      { icon: '🏥', title: 'Healthcare Access', desc: 'Build medical facilities', goal: '$300K', raised: '$220K' },
      { icon: '🌾', title: 'Food Security', desc: 'Combat hunger and malnutrition', goal: '$150K', raised: '$98K' },
    ],
  },
  ar: {
    title: 'حملات جمع التبرعات',
    subtitle: 'كن جزءاً من شيء أكبر',
    campaigns: [
      { icon: '🚨', title: 'الإغاثة الطارئة', desc: 'دعم الأسر المتأثرة بالأزمات', goal: '500K$', raised: '350K$' },
      { icon: '📚', title: 'مبادرة التعليم', desc: 'توفير المنح الدراسية للطلاب', goal: '200K$', raised: '145K$' },
      { icon: '🏥', title: 'الوصول الصحي', desc: 'بناء المنشآت الطبية', goal: '300K$', raised: '220K$' },
      { icon: '🌾', title: 'الأمن الغذائي', desc: 'محاربة الجوع وسوء التغذية', goal: '150K$', raised: '98K$' },
    ],
  },
};

export default function CampaignsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: `linear-gradient(135deg, ${royalColors.hashemiteGold} 0%, ${royalColors.charityRed} 100%)`, color: 'white', padding: '100px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9 }}>{text.subtitle}</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {text.campaigns.map((camp, i) => (
            <div key={i} style={{ padding: '32px', backgroundColor: 'white', borderRadius: '8px', border: `2px solid ${royalColors.bgRefined}`, transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{camp.icon}</div>
              <h3 style={{ fontSize: '20px', color: royalColors.darkNavy, marginBottom: '8px' }}>{camp.title}</h3>
              <p style={{ fontSize: '14px', color: royalColors.textOfficial, marginBottom: '16px' }}>{camp.desc}</p>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', color: royalColors.textOfficial }}>
                  <span>{camp.raised}</span>
                  <span>{camp.goal}</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: royalColors.bgRefined, borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', backgroundColor: royalColors.hashemiteGold }}></div>
                </div>
              </div>

              <Link href="/get-involved/donate" style={{ display: 'block', padding: '8px', backgroundColor: royalColors.hashemiteGold, color: royalColors.darkNavy, textDecoration: 'none', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
                Contribute
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
