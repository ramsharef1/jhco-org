'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Volunteer With Us',
    subtitle: 'Make a Difference in the Lives of Others',
    description: 'Join thousands of volunteers worldwide who are committed to serving vulnerable populations and creating positive change.',
    opportunities: [
      { icon: '🏥', title: 'Healthcare', desc: 'Support medical missions' },
      { icon: '📚', title: 'Education', desc: 'Teach and mentor' },
      { icon: '🌾', title: 'Development', desc: 'Community building' },
      { icon: '🤝', title: 'Support Services', desc: 'Administrative & logistics' },
    ],
    stats: [
      { label: 'Active Volunteers', value: '2,500+' },
      { label: 'Countries', value: '30+' },
      { label: 'Hours Served', value: '500K+' },
      { label: 'Lives Impacted', value: '500K+' },
    ],
  },
  ar: {
    title: 'تطوع معنا',
    subtitle: 'احدث فرقاً في حياة الآخرين',
    description: 'انضم إلى آلاف المتطوعين حول العالم الملتزمين بخدمة السكان الضعفاء وإحداث تغيير إيجابي.',
    opportunities: [
      { icon: '🏥', title: 'الصحة', desc: 'دعم البعثات الطبية' },
      { icon: '📚', title: 'التعليم', desc: 'تدريس وتوجيه' },
      { icon: '🌾', title: 'التنمية', desc: 'بناء المجتمع' },
      { icon: '🤝', title: 'خدمات الدعم', desc: 'إدارة واللوجستيات' },
    ],
    stats: [
      { label: 'المتطوعون النشطون', value: '2,500+' },
      { label: 'الدول', value: '30+' },
      { label: 'الساعات المخدومة', value: '500K+' },
      { label: 'الحياة المتأثرة', value: '500K+' },
    ],
  },
};

export default function VolunteerPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: `linear-gradient(135deg, ${royalColors.compassionTeal} 0%, ${royalColors.darkNavy} 100%)`, color: 'white', padding: '100px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', marginBottom: '24px', opacity: 0.9 }}>{text.subtitle}</p>
        <p style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>{text.description}</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        <h2 style={{ fontSize: '32px', color: royalColors.darkNavy, marginBottom: '40px', textAlign: 'center', fontFamily: 'serif' }}>Volunteer Opportunities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {text.opportunities.map((opp, i) => (
            <div key={i} style={{ padding: '32px', backgroundColor: `${royalColors.compassionTeal}10`, borderRadius: '8px', textAlign: 'center', border: `1px solid ${royalColors.compassionTeal}` }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{opp.icon}</div>
              <h3 style={{ fontSize: '18px', color: royalColors.darkNavy, marginBottom: '8px' }}>{opp.title}</h3>
              <p style={{ fontSize: '14px', color: royalColors.textOfficial, margin: 0 }}>{opp.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', color: royalColors.darkNavy, marginBottom: '32px', textAlign: 'center', fontFamily: 'serif' }}>Our Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {text.stats.map((stat, i) => (
              <div key={i} style={{ padding: '24px', textAlign: 'center', border: `2px solid ${royalColors.compassionTeal}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: royalColors.compassionTeal }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: royalColors.textOfficial }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/get-involved/volunteer-opportunities" style={{ padding: '16px 40px', backgroundColor: royalColors.compassionTeal, color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', display: 'inline-block' }}>
            Browse Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
