'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale } from '@/lib/i18n';
import { royalColors, menuStructure } from '@/lib/royalDesign';

export default function Header({ locale = 'en' as Locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const otherLocale: Locale = locale === 'ar' ? 'en' : 'ar';
  const switchHref = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: royalColors.ivory, borderBottom: `1px solid ${royalColors.border}`, boxShadow: '0 4px 12px rgba(10,20,40,0.1)' }}>
      {/* Heraldic top border */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${royalColors.royalGold}, ${royalColors.crimson}, ${royalColors.royalGold})` }}></div>

      {/* Main Header */}
      <nav style={{ maxWidth: '1500px', margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        {/* Logo & Organization Name */}
        <Link href={base} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flex: 1 }}>
          <div style={{ fontSize: '28px' }}>👑</div>
          <div>
            <div style={{ fontSize: '14px', color: royalColors.royalGold, fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {ar ? 'الهيئة الخيرية' : 'JHCO'}
            </div>
            <div style={{ fontSize: '10px', color: royalColors.lightGray, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {ar ? 'الأردنية الهاشمية' : 'Royal Charity'}
            </div>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }}>
          {menuStructure.main.map((item, idx) => (
            <Link
              key={idx}
              href={`${base}${item.href}`}
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: royalColors.deepNavy,
                textDecoration: 'none',
                transition: 'all 0.3s',
                borderBottom: '2px solid transparent',
              }}
            >
              {ar ? item.label : item.labelEn}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Language Switcher */}
          <Link
            href={switchHref}
            style={{
              padding: '10px 16px',
              border: `1px solid ${royalColors.royalGold}`,
              color: royalColors.royalGold,
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {locale === 'ar' ? 'EN' : 'عربي'}
          </Link>

          {/* Donate Button (Royal Crimson) */}
          <Link
            href={`${base}/get-involved/donate`}
            style={{
              padding: '12px 32px',
              backgroundColor: royalColors.crimson,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '2px',
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(139, 26, 26, 0.3)',
            }}
          >
            💝 {ar ? 'تبرع' : 'Donate'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
