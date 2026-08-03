'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Healthcare Program',
    subtitle: 'Providing Quality Medical Care',
    overview: 'Our Healthcare Program delivers essential medical services, health education, and preventative care across 15 countries.',
  },
  ar: {
    title: 'برنامج الصحة',
    subtitle: 'توفير الرعاية الطبية الجودة',
    overview: 'يقدم برنامج الصحة الخدمات الطبية الأساسية والتثقيف الصحي عبر 15 دولة.',
  },
};

export default function HealthcareProgram({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: `linear-gradient(135deg, ${royalColors.impactGreen} 0%, ${royalColors.darkNavy} 100%)`, color: 'white', padding: '100px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9 }}>{text.subtitle}</p>
      </section>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>{text.overview}</p>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/get-involved/donate" style={{ padding: '16px 32px', backgroundColor: royalColors.impactGreen, color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block' }}>
            Support Program
          </Link>
        </div>
      </section>
    </div>
  );
}
