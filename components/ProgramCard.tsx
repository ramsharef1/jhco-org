'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface ProgramCardProps {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  impactEn: string;
  impactAr: string;
  categoryEn: string;
  categoryAr: string;
  href: string;
  locale?: string;
}

export default function ProgramCard({
  nameEn,
  nameAr,
  descriptionEn,
  descriptionAr,
  icon,
  impactEn,
  impactAr,
  categoryEn,
  categoryAr,
  href,
  locale = 'en',
}: ProgramCardProps) {
  const ar = locale === 'ar';

  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          backgroundColor: 'white',
          border: `1px solid ${royalColors.bgRefined}`,
          borderRadius: '8px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: transitions.base,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0 2px 8px rgba(10,20,40,0.08)`,
        }}
        onMouseEnter={(e) => {
          const div = e.currentTarget as HTMLDivElement;
          div.style.transform = 'translateY(-4px)';
          div.style.boxShadow = `0 12px 24px rgba(10,20,40,0.12)`;
          div.style.borderColor = royalColors.hashemiteGold;
        }}
        onMouseLeave={(e) => {
          const div = e.currentTarget as HTMLDivElement;
          div.style.transform = 'translateY(0)';
          div.style.boxShadow = `0 2px 8px rgba(10,20,40,0.08)`;
          div.style.borderColor = royalColors.bgRefined;
        }}
      >
        {/* Icon Area */}
        <div
          style={{
            height: '140px',
            backgroundColor: royalColors.bgRefined,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            borderBottom: `2px solid ${royalColors.hashemiteGold}`,
          }}
        >
          {icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: spacing.xl, display: 'flex', flexDirection: 'column' }}>
          {/* Category Badge */}
          <div style={{ marginBottom: spacing.md }}>
            <span
              style={{
                fontSize: '11px',
                color: royalColors.hashemiteGold,
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {ar ? categoryAr : categoryEn}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              margin: `0 0 ${spacing.md} 0`,
              lineHeight: '1.4',
              fontFamily: 'Georgia, serif',
            }}
          >
            {ar ? nameAr : nameEn}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '14px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              flex: 1,
              margin: `0 0 ${spacing.lg} 0`,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {ar ? descriptionAr : descriptionEn}
          </p>

          {/* Impact Footer */}
          <div
            style={{
              borderTop: `1px solid ${royalColors.bgRefined}`,
              paddingTop: spacing.md,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '12px',
                  color: royalColors.hashemiteGold,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  margin: 0,
                }}
              >
                {ar ? impactAr : impactEn}
              </p>
            </div>
            <div style={{ fontSize: '18px', color: royalColors.hashemiteGold }}>
              {ar ? '←' : '→'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
