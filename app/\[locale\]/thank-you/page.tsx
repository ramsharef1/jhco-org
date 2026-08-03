'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Thank You!',
    message: 'Your donation has been received and is making a difference',
    details: 'A confirmation email has been sent to your email address. Your generosity will help vulnerable populations across the globe.',
    nextSteps: [
      'Check your email for the donation receipt',
      'Share your giving journey on social media',
      'Track your impact in your donor portal',
      'Consider setting up a recurring donation',
    ],
  },
  ar: {
    title: 'شكراً!',
    message: 'تم استلام تبرعك وإحداث فرق',
    details: 'تم إرسال رسالة تأكيد إلى عنوان بريدك الإلكتروني. ستساعد كرمك السكان الضعفاء حول العالم.',
    nextSteps: [
      'تحقق من بريدك الإلكتروني للحصول على إيصال التبرع',
      'شارك رحلة عطائك على وسائل التواصل الاجتماعي',
      'تتبع تأثيرك في بوابة المانح',
      'فكر في إنشاء تبرع متكرر',
    ],
  },
};

export default function ThankYouPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: royalColors.bgRefined, padding: '32px' }}>
      <div style={{ maxWidth: '600px', textAlign: 'center', padding: '60px 40px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '60px', marginBottom: '24px' }}>✓</div>
        <h1 style={{ fontSize: '48px', color: royalColors.charityRed, marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', color: royalColors.textOfficial, marginBottom: '24px' }}>{text.message}</p>
        <p style={{ fontSize: '16px', color: royalColors.textOfficial, lineHeight: '1.6', marginBottom: '40px' }}>{text.details}</p>

        <div style={{ backgroundColor: royalColors.bgRefined, padding: '24px', borderRadius: '4px', marginBottom: '40px', textAlign: ar ? 'right' : 'left' }}>
          <h3 style={{ color: royalColors.darkNavy, marginBottom: '16px' }}>Next Steps:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {text.nextSteps.map((step, i) => (
              <li key={i} style={{ padding: '8px 0', color: royalColors.textOfficial }}>{i + 1}. {step}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexDirection: ar ? 'row-reverse' : 'row' }}>
          <Link href="/" style={{ padding: '12px 24px', backgroundColor: royalColors.charityRed, color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Go Home
          </Link>
          <Link href="/donor-portal" style={{ padding: '12px 24px', border: `2px solid ${royalColors.charityRed}`, color: royalColors.charityRed, textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
