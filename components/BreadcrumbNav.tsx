'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface BreadcrumbItem {
  labelEn: string;
  labelAr: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  locale?: string;
}

export default function BreadcrumbNav({ items, locale = 'en' }: BreadcrumbNavProps) {
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <nav style={{
      padding: `${spacing.md} ${spacing.xl}`,
      backgroundColor: royalColors.bgRefined,
      borderBottom: `1px solid ${royalColors.bgRefined}`,
      fontSize: '13px',
      direction: ar ? 'rtl' : 'ltr',
    }}>
      <div style={{
        maxWidth: '1500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: spacing.sm,
        flexWrap: 'wrap',
      }}>
        {/* Home Link */}
        <Link href={base} style={{
          color: royalColors.hashemiteGold,
          textDecoration: 'none',
          transition: transitions.base,
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = royalColors.deepRoyal}
        onMouseLeave={(e) => e.currentTarget.style.color = royalColors.hashemiteGold}
        >
          🏠
        </Link>

        {/* Breadcrumb Items */}
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
            {/* Separator */}
            <span style={{ color: royalColors.textSecondary, margin: '0 2px' }}>
              {ar ? '‹' : '›'}
            </span>

            {/* Item */}
            {item.href ? (
              <Link href={item.href} style={{
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
                transition: transitions.base,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = royalColors.deepRoyal}
              onMouseLeave={(e) => e.currentTarget.style.color = royalColors.hashemiteGold}
              >
                {ar ? item.labelAr : item.labelEn}
              </Link>
            ) : (
              <span style={{ color: royalColors.textSecondary }}>
                {ar ? item.labelAr : item.labelEn}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
