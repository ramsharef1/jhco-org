'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, spacing } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'My Account',
    subtitle: 'Manage Your Profile & Preferences',
    sections: {
      profile: { title: 'Profile Information', desc: 'View and manage your personal information' },
      donations: { title: 'My Donations', desc: 'Track your giving history and impact' },
      preferences: { title: 'Communication Preferences', desc: 'Manage how we contact you' },
      security: { title: 'Account Security', desc: 'Update password and security settings' },
    },
  },
  ar: {
    title: 'حسابي',
    subtitle: 'إدارة ملفك الشخصي والتفضيلات',
    sections: {
      profile: { title: 'معلومات الملف الشخصي', desc: 'عرض وإدارة معلوماتك الشخصية' },
      donations: { title: 'تبرعاتي', desc: 'تتبع سجل عطاؤك وتأثيرك' },
      preferences: { title: 'تفضيلات الاتصال', desc: 'إدارة كيف نتصل بك' },
      security: { title: 'أمان الحساب', desc: 'تحديث كلمة المرور وإعدادات الأمان' },
    },
  },
};

export default function AccountPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  const menuItems = [
    { key: 'profile', label: text.sections.profile.title, desc: text.sections.profile.desc, icon: '👤' },
    { key: 'donations', label: text.sections.donations.title, desc: text.sections.donations.desc, icon: '💝' },
    { key: 'preferences', label: text.sections.preferences.title, desc: text.sections.preferences.desc, icon: '⚙️' },
    { key: 'security', label: text.sections.security.title, desc: text.sections.security.desc, icon: '🔒' },
  ];

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`, color: 'white', padding: '80px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>{text.title}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9 }}>{text.subtitle}</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {menuItems.map((item) => (
            <Link key={item.key} href={`/account/${item.key === 'profile' ? '' : item.key}`} style={{
              padding: '32px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: `2px solid ${royalColors.bgRefined}`,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = royalColors.hashemiteGold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = royalColors.bgRefined;
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', color: royalColors.darkNavy, marginBottom: '8px' }}>{item.label}</h3>
              <p style={{ fontSize: '14px', color: royalColors.textOfficial, margin: 0 }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
