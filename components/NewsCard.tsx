'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface NewsCardProps {
  id: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  dateEn: string;
  dateAr: string;
  categoryEn?: string;
  categoryAr?: string;
  imageUrl?: string;
  authorEn?: string;
  authorAr?: string;
  icon: string;
  href?: string;
  locale?: string;
  featured?: boolean;
}

export default function NewsCard({
  titleEn,
  titleAr,
  excerptEn,
  excerptAr,
  dateEn,
  dateAr,
  categoryEn,
  categoryAr,
  imageUrl,
  authorEn,
  authorAr,
  icon,
  href,
  locale = 'en',
  featured = false,
}: NewsCardProps) {
  const ar = locale === 'ar';

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: featured ? `2px solid ${royalColors.hashemiteGold}` : `1px solid ${royalColors.bgRefined}`,
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: href ? 'pointer' : 'default',
        transition: transitions.base,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: featured ? '0 8px 20px rgba(212, 175, 55, 0.15)' : '0 2px 8px rgba(10,20,40,0.08)',
      }}
      onMouseEnter={(e) => {
        if (!href) return;
        const div = e.currentTarget as HTMLDivElement;
        div.style.transform = 'translateY(-4px)';
        div.style.boxShadow = featured 
          ? '0 12px 28px rgba(212, 175, 55, 0.25)'
          : '0 12px 24px rgba(10,20,40,0.12)';
      }}
      onMouseLeave={(e) => {
        if (!href) return;
        const div = e.currentTarget as HTMLDivElement;
        div.style.transform = 'translateY(0)';
        div.style.boxShadow = featured 
          ? '0 8px 20px rgba(212, 175, 55, 0.15)'
          : '0 2px 8px rgba(10,20,40,0.08)';
      }}
    >
      {/* Image or Icon */}
      <div
        style={{
          height: imageUrl ? '200px' : '100px',
          backgroundColor: royalColors.bgRefined,
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: imageUrl ? '0' : '42px',
          borderBottom: `2px solid ${featured ? royalColors.hashemiteGold : royalColors.bgRefined}`,
          position: 'relative',
        }}
      >
        {!imageUrl && icon}
        {featured && (
          <div
            style={{
              position: 'absolute',
              top: spacing.md,
              left: spacing.md,
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.deepRoyal,
              fontSize: '10px',
              fontWeight: '700',
              padding: `${spacing.sm} ${spacing.md}`,
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {ar ? 'مميز' : 'Featured'}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: spacing.lg, display: 'flex', flexDirection: 'column' }}>
        {/* Category */}
        {(categoryEn || categoryAr) && (
          <p
            style={{
              fontSize: '11px',
              color: royalColors.hashemiteGold,
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              margin: `0 0 ${spacing.md} 0`,
            }}
          >
            {ar ? categoryAr : categoryEn}
          </p>
        )}

        {/* Title */}
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: royalColors.darkNavy,
            margin: `0 0 ${spacing.sm} 0`,
            lineHeight: '1.4',
            fontFamily: 'Georgia, serif',
          }}
        >
          {ar ? titleAr : titleEn}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontSize: '13px',
            color: royalColors.textSecondary,
            lineHeight: '1.6',
            flex: 1,
            margin: `0 0 ${spacing.md} 0`,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {ar ? excerptAr : excerptEn}
        </p>

        {/* Date & Author */}
        <div
          style={{
            borderTop: `1px solid ${royalColors.bgRefined}`,
            paddingTop: spacing.md,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: royalColors.textSecondary,
          }}
        >
          <div>
            <span>📅</span> {ar ? dateAr : dateEn}
          </div>
          {(authorEn || authorAr) && (
            <div style={{ fontSize: '11px' }}>
              {ar ? authorAr : authorEn}
            </div>
          )}
        </div>

        {/* Read More */}
        {href && (
          <div style={{ marginTop: spacing.md, paddingTop: spacing.md, borderTop: `1px solid ${royalColors.bgRefined}` }}>
            <a
              href={href}
              style={{
                fontSize: '12px',
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: transitions.base,
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = royalColors.deepRoyal;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = royalColors.hashemiteGold;
              }}
            >
              {ar ? 'اقرأ المقال' : 'Read Article'} {ar ? '←' : '→'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
