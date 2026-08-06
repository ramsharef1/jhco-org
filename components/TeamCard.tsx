'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface TeamCardProps {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  bioEn?: string;
  bioAr?: string;
  imageUrl?: string;
  emailEn?: string;
  emailAr?: string;
  departmentEn?: string;
  departmentAr?: string;
  icon: string;
  href?: string;
  locale?: string;
}

export default function TeamCard({
  nameEn,
  nameAr,
  roleEn,
  roleAr,
  bioEn,
  bioAr,
  imageUrl,
  emailEn,
  emailAr,
  departmentEn,
  departmentAr,
  icon,
  href,
  locale = 'en',
}: TeamCardProps) {
  const ar = locale === 'ar';

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: `1px solid ${royalColors.bgRefined}`,
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: href ? 'pointer' : 'default',
        transition: transitions.base,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
      }}
      onMouseEnter={(e) => {
        if (!href) return;
        const div = e.currentTarget as HTMLDivElement;
        div.style.transform = 'translateY(-4px)';
        div.style.boxShadow = '0 12px 24px rgba(10,20,40,0.12)';
        div.style.borderColor = royalColors.hashemiteGold;
      }}
      onMouseLeave={(e) => {
        if (!href) return;
        const div = e.currentTarget as HTMLDivElement;
        div.style.transform = 'translateY(0)';
        div.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
        div.style.borderColor = royalColors.bgRefined;
      }}
    >
      {/* Image or Icon */}
      <div
        style={{
          height: imageUrl ? '220px' : '120px',
          backgroundColor: royalColors.bgRefined,
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: imageUrl ? '0' : '48px',
          borderBottom: `2px solid ${royalColors.hashemiteGold}`,
        }}
      >
        {!imageUrl && icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: spacing.lg, display: 'flex', flexDirection: 'column' }}>
        {/* Name */}
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
          {ar ? nameAr : nameEn}
        </h3>

        {/* Role */}
        <p
          style={{
            fontSize: '12px',
            color: royalColors.hashemiteGold,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            margin: `0 0 ${spacing.md} 0`,
          }}
        >
          {ar ? roleAr : roleEn}
        </p>

        {/* Department */}
        {(departmentEn || departmentAr) && (
          <p
            style={{
              fontSize: '11px',
              color: royalColors.textSecondary,
              margin: `0 0 ${spacing.md} 0`,
            }}
          >
            {ar ? departmentAr : departmentEn}
          </p>
        )}

        {/* Bio */}
        {(bioEn || bioAr) && (
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
            {ar ? bioAr : bioEn}
          </p>
        )}

        {/* Contact */}
        {(emailEn || emailAr) && (
          <div
            style={{
              borderTop: `1px solid ${royalColors.bgRefined}`,
              paddingTop: spacing.md,
              fontSize: '12px',
            }}
          >
            <a
              href={`mailto:${emailEn || emailAr}`}
              style={{
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
                transition: transitions.base,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = royalColors.deepRoyal;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = royalColors.hashemiteGold;
              }}
            >
              {ar ? '✉️ البريد الإلكتروني' : '✉️ Email'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
