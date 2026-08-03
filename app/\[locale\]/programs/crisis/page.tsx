'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, transitions } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Crisis Response Program',
    subtitle: 'Swift Humanitarian Aid During Times of Emergency',
    description: 'Our Crisis Response Program provides immediate assistance to populations affected by emergencies, conflicts, and natural disasters across multiple regions.',
    sections: {
      overview: {
        title: 'Program Overview',
        content: 'The Crisis Response Program is designed to provide rapid humanitarian assistance to vulnerable populations affected by emergencies, armed conflicts, and natural disasters. Our team works 24/7 to assess needs and deliver life-saving aid including food, shelter, medical care, and psychological support.',
      },
      impact: {
        title: 'Our Impact',
        stats: [
          { label: 'People Assisted', value: '125,000+' },
          { label: 'Countries Responded', value: '8' },
          { label: 'Active Teams', value: '45' },
          { label: 'Emergency Kits Distributed', value: '50,000+' },
        ],
      },
      services: {
        title: 'Services Provided',
        list: [
          'Emergency Food Distribution',
          'Temporary Shelter & Accommodation',
          'Medical Care & Health Services',
          'Water & Sanitation Solutions',
          'Psychosocial Support',
          'Protection Services',
          'Family Tracing Assistance',
          'Cash Assistance Programs',
        ],
      },
    },
  },
  ar: {
    title: 'برنامج الاستجابة للأزمات',
    subtitle: 'المساعدة الإنسانية السريعة في أوقات الطوارئ',
    description: 'يوفر برنامج الاستجابة للأزمات مساعدة فورية للسكان المتضررين من الطوارئ والنزاعات والكوارث الطبيعية.',
    sections: {
      overview: {
        title: 'نظرة عامة على البرنامج',
        content: 'تم تصميم برنامج الاستجابة للأزمات لتقديم مساعدة إنسانية سريعة للسكان الضعفاء المتضررين من الطوارئ والنزاعات والكوارث الطبيعية. يعمل فريقنا على مدار الساعة لتقييم الاحتياجات وتقديم المساعدات الحية.',
      },
      impact: {
        title: 'تأثيرنا',
        stats: [
          { label: 'الأشخاص المساعدون', value: '125,000+' },
          { label: 'الدول المستجيبة', value: '8' },
          { label: 'الفرق النشطة', value: '45' },
          { label: 'مجموعات الطوارئ الموزعة', value: '50,000+' },
        ],
      },
      services: {
        title: 'الخدمات المقدمة',
        list: [
          'توزيع الغذاء الطارئ',
          'المأوى المؤقت والإقامة',
          'الرعاية الطبية والخدمات الصحية',
          'حلول المياه والصرف الصحي',
          'الدعم النفسي والاجتماعي',
          'خدمات الحماية',
          'مساعدة البحث عن الأسرة',
          'برامج المساعدة النقدية',
        ],
      },
    },
  },
};

export default function CrisisResponsePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.charityRed} 0%, ${royalColors.darkNavy} 100%)`,
        color: 'white',
        padding: '100px 32px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9 }}>{text.subtitle}</p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        {/* Overview */}
        <div style={{
          padding: '40px',
          backgroundColor: royalColors.bgRefined,
          borderRadius: '8px',
          marginBottom: '40px',
        }}>
          <h2 style={{ fontSize: '32px', color: royalColors.darkNavy, marginBottom: '16px', fontFamily: 'serif' }}>
            {text.sections.overview.title}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: royalColors.textOfficial }}>
            {text.sections.overview.content}
          </p>
        </div>

        {/* Impact Stats */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', color: royalColors.darkNavy, marginBottom: '32px', fontFamily: 'serif' }}>
            {text.sections.impact.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {text.sections.impact.stats.map((stat, idx) => (
              <div key={idx} style={{
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: `2px solid ${royalColors.charityRed}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: royalColors.charityRed, marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: royalColors.textOfficial }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div style={{
          padding: '40px',
          backgroundColor: `${royalColors.charityRed}10`,
          borderRadius: '8px',
        }}>
          <h2 style={{ fontSize: '32px', color: royalColors.darkNavy, marginBottom: '24px', fontFamily: 'serif' }}>
            {text.sections.services.title}
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
          }}>
            {text.sections.services.list.map((service, idx) => (
              <li key={idx} style={{
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '4px',
                borderLeft: `4px solid ${royalColors.charityRed}`,
                fontSize: '16px',
                color: royalColors.textOfficial,
              }}>
                ✓ {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/get-involved/donate" style={{
            padding: '16px 32px',
            backgroundColor: royalColors.charityRed,
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'inline-block',
            transition: transitions.base,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.darkNavy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.charityRed;
          }}>
            Support This Program
          </Link>
        </div>
      </section>
    </div>
  );
}
