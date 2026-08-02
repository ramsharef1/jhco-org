'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { type Locale } from '@/lib/i18n';
import { royalColors, menuStructure, transitions, spacing } from '@/lib/royalDesign';

export default function Header({ locale = 'en' as Locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const otherLocale: Locale = locale === 'ar' ? 'en' : 'ar';
  const switchHref = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: royalColors.bgLight, borderBottom: `2px solid ${royalColors.warmGold}`, boxShadow: '0 4px 20px rgba(232, 185, 35, 0.1)' }}>
      {/* Heraldic top border */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${royalColors.warmGold}, ${royalColors.compassionRed}, ${royalColors.hopeTeal}, ${royalColors.warmGold})` }}></div>

      {/* Main Header */}
      <nav style={{ maxWidth: '1500px', margin: '0 auto', padding: spacing.md + ' ' + spacing.xl, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: spacing.xl }}>
        {/* Logo & Organization Name */}
        <Link href={base} style={{ display: 'flex', alignItems: 'center', gap: spacing.md, textDecoration: 'none', flex: 1 }}>
          <img src="/jhco-logo.webp" alt="JHCO" style={{ width: '50px', height: '50px' }} />
          <div>
            <div style={{ fontSize: '14px', color: royalColors.warmGold, fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {ar ? 'الهيئة الخيرية' : 'JHCO'}
            </div>
            <div style={{ fontSize: '10px', color: royalColors.softGray, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {ar ? 'الأردنية الهاشمية' : 'Royal Charity'}
            </div>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {menuStructure.main.map((item, idx) => (
            <Link
              key={idx}
              href={`${base}${item.href}`}
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: royalColors.deepNavy,
                textDecoration: 'none',
                transition: transitions.base,
                paddingBottom: '4px',
                borderBottom: '2px solid transparent',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = royalColors.warmGold;
                e.currentTarget.style.borderBottomColor = royalColors.warmGold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = royalColors.deepNavy;
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {ar ? item.label : item.labelEn}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
          {/* Language Switcher */}
          <Link
            href={switchHref}
            style={{
              padding: '10px 16px',
              border: `2px solid ${royalColors.warmGold}`,
              color: royalColors.warmGold,
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: transitions.base,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${royalColors.warmGold}15`;
              e.currentTarget.style.boxShadow = `0 4px 12px rgba(232, 185, 35, 0.3)`;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {locale === 'ar' ? 'EN' : 'عربي'}
          </Link>

          {/* Donate Button (Warm Compassion) */}
          <Link
            href={`${base}/get-involved/donate`}
            style={{
              padding: '12px 32px',
              backgroundColor: royalColors.compassionRed,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: transitions.base,
              boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.redLight;
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(231, 76, 60, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.compassionRed;
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            💝 {ar ? 'تبرع' : 'Donate'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
