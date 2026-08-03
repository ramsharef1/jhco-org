'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { type Locale } from '@/lib/i18n';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';
import MegaMenu from './MegaMenu';

export default function Header({ locale = 'en' as Locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const otherLocale: Locale = locale === 'ar' ? 'en' : 'ar';
  const switchHref = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`)
    : `/${otherLocale}`;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: royalColors.bgLight, borderBottom: `2px solid ${royalColors.hashemiteGold}`, boxShadow: '0 4px 20px rgba(212, 175, 55, 0.1)' }}>
      {/* Heraldic top border */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${royalColors.hashemiteGold}, ${royalColors.deepRoyal}, ${royalColors.darkNavy}, ${royalColors.hashemiteGold})` }}></div>

      {/* Main Header */}
      <nav style={{ maxWidth: '1500px', margin: '0 auto', padding: spacing.md + ' ' + spacing.xl, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: spacing.xl, flexDirection: ar ? 'row-reverse' : 'row' }}>
        {/* Logo */}
        <a href={base} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', flexShrink: 0, minWidth: '80px', width: '80px' }}>
          <img src="/jhco-logo.webp" alt="JHCO" style={{ height: '60px', width: 'auto', display: 'block' }} />
        </a>

        {/* Navigation Links - Mega Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', flex: 1 }}>
          <MegaMenu locale={locale} base={base} />
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
          {/* Language Switcher */}
          <Link
            href={switchHref}
            style={{
              padding: '10px 16px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              color: royalColors.hashemiteGold,
              borderRadius: '0px',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: transitions.base,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
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

          {/* Donate Button (Formal Red - Charity CTA) */}
          <Link
            href={`${base}/get-involved/donate`}
            style={{
              padding: '12px 32px',
              backgroundColor: royalColors.charityRed,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0px',
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: transitions.base,
              boxShadow: '0 8px 16px -2px rgba(196, 30, 58, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a21830';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(196, 30, 58, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.charityRed;
              e.currentTarget.style.boxShadow = '0 8px 16px -2px rgba(196, 30, 58, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {ar ? 'تبرع' : 'DONATE'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
