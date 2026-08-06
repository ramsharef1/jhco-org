'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface EventCardProps {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  dateEn: string;
  dateAr: string;
  timeEn?: string;
  timeAr?: string;
  locationEn?: string;
  locationAr?: string;
  icon: string;
  href?: string;
  locale?: string;
  status?: 'upcoming' | 'ongoing' | 'past';
}

export default function EventCard({
  titleEn,
  titleAr,
  descriptionEn,
  descriptionAr,
  dateEn,
  dateAr,
  timeEn,
  timeAr,
  locationEn,
  locationAr,
  icon,
  href,
  locale = 'en',
  status = 'upcoming',
}: EventCardProps) {
  const ar = locale === 'ar';
  const statusColors = {
    upcoming: royalColors.hashemiteGold,
    ongoing: '#4caf50',
    past: royalColors.textSecondary,
  };

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
      {/* Icon + Status */}
      <div
        style={{
          height: '100px',
          backgroundColor: royalColors.bgRefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          borderBottom: `2px solid ${statusColors[status]}`,
          position: 'relative',
        }}
      >
        {icon}
        <div
          style={{
            position: 'absolute',
            top: spacing.md,
            right: spacing.md,
            backgroundColor: statusColors[status],
            color: 'white',
            fontSize: '10px',
            fontWeight: '700',
            padding: `${spacing.sm} ${spacing.md}`,
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {status === 'upcoming' && (ar ? 'قريباً' : 'Upcoming')}
          {status === 'ongoing' && (ar ? 'جاري' : 'Ongoing')}
          {status === 'past' && (ar ? 'انتهى' : 'Past')}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: spacing.lg, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: royalColors.darkNavy,
            margin: `0 0 ${spacing.md} 0`,
            lineHeight: '1.4',
            fontFamily: 'Georgia, serif',
          }}
        >
          {ar ? titleAr : titleEn}
        </h3>

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
          {ar ? descriptionAr : descriptionEn}
        </p>

        {/* Date, Time, Location */}
        <div style={{
          borderTop: `1px solid ${royalColors.bgRefined}`,
          paddingTop: spacing.md,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.sm,
          fontSize: '12px',
          color: royalColors.textSecondary,
        }}>
          <div>
            <span style={{ fontWeight: '600' }}>📅</span> {ar ? dateAr : dateEn}
          </div>
          {(timeEn || timeAr) && (
            <div>
              <span style={{ fontWeight: '600' }}>🕐</span> {ar ? timeAr : timeEn}
            </div>
          )}
          {(locationEn || locationAr) && (
            <div>
              <span style={{ fontWeight: '600' }}>📍</span> {ar ? locationAr : locationEn}
            </div>
          )}
        </div>

        {/* Learn More Link */}
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
              {ar ? 'اعرف المزيد' : 'Learn More'} {ar ? '←' : '→'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
