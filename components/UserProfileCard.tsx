'use client';

import Link from 'next/link';
import { royalColors, spacing, borderRadius, shadows, transitions } from '@/lib/royalDesign';

interface UserProfileCardProps {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  badge?: string;
  status?: 'verified' | 'unverified' | 'pending';
  role?: string;
  locale?: 'en' | 'ar';
  compact?: boolean;
  clickable?: boolean;
  onProfileClick?: () => void;
}

const content = {
  en: {
    verified: 'Verified',
    unverified: 'Unverified',
    pending: 'Pending',
    viewProfile: 'View Profile',
    lastActive: 'Last active',
  },
  ar: {
    verified: 'تم التحقق',
    unverified: 'لم يتم التحقق',
    pending: 'قيد الانتظار',
    viewProfile: 'عرض الملف الشخصي',
    lastActive: 'آخر نشاط',
  },
};

const statusColors = {
  verified: '#1b4332',
  unverified: '#c41e3a',
  pending: '#d4af37',
};

export default function UserProfileCard({
  firstName,
  lastName,
  email,
  avatar = '👤',
  badge,
  status = 'verified',
  role,
  locale = 'en',
  compact = false,
  clickable = false,
  onProfileClick,
}: UserProfileCardProps) {
  const ar = locale === 'ar';
  const text = content[locale];

  const containerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: `1px solid ${royalColors.borderFormal}`,
    borderRadius: borderRadius.lg,
    padding: compact ? spacing.lg : spacing.xl,
    boxShadow: shadows.sm,
    transition: transitions.base,
    cursor: clickable ? 'pointer' : 'default',
    direction: ar ? 'rtl' : 'ltr',
  };

  const handleClick = () => {
    if (clickable && onProfileClick) {
      onProfileClick();
    }
  };

  return (
    <div
      style={containerStyle}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (clickable) {
          e.currentTarget.style.borderColor = royalColors.hashemiteGold;
          e.currentTarget.style.boxShadow = shadows.md;
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (clickable) {
          e.currentTarget.style.borderColor = royalColors.borderFormal;
          e.currentTarget.style.boxShadow = shadows.sm;
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {/* Top Section: Avatar and Status Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: spacing.md,
        marginBottom: compact ? spacing.md : spacing.lg,
        flexDirection: ar ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
      }}>
        {/* Avatar */}
        <div style={{
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{
            width: compact ? '48px' : '64px',
            height: compact ? '48px' : '64px',
            borderRadius: '50%',
            backgroundColor: royalColors.bgRefined,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: compact ? '24px' : '32px',
            border: `2px solid ${royalColors.hashemiteGold}`,
          }}>
            {avatar}
          </div>

          {/* Status Badge */}
          {status && (
            <div
              title={text[status]}
              style={{
                position: 'absolute',
                bottom: '0',
                [ar ? 'left' : 'right']: '0',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: statusColors[status],
                border: `2px solid white`,
                cursor: 'help',
              }}
            />
          )}
        </div>

        {/* Badge/Icon (optional) */}
        {badge && (
          <div style={{
            fontSize: compact ? '20px' : '24px',
            opacity: 0.8,
          }}>
            {badge}
          </div>
        )}
      </div>

      {/* Name and Email */}
      <div style={{
        marginBottom: compact ? spacing.sm : spacing.md,
      }}>
        <h3 style={{
          fontSize: compact ? '14px' : '16px',
          fontWeight: '700',
          color: royalColors.deepRoyal,
          margin: '0 0 4px 0',
          fontFamily: 'Georgia, serif',
          letterSpacing: '0.5px',
        }}>
          {firstName} {lastName}
        </h3>

        <p style={{
          fontSize: compact ? '12px' : '13px',
          color: royalColors.textSecondary,
          margin: '2px 0',
          wordBreak: 'break-all',
        }}>
          {email}
        </p>

        {role && (
          <p style={{
            fontSize: '12px',
            color: royalColors.hashemiteGold,
            margin: '4px 0 0 0',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            {role}
          </p>
        )}
      </div>

      {/* Status Label */}
      <div style={{
        fontSize: '11px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: statusColors[status],
        marginBottom: compact ? '0' : spacing.md,
      }}>
        {text[status]}
      </div>

      {/* Action Link */}
      {clickable && (
        <Link
          href="#"
          style={{
            display: 'inline-block',
            fontSize: '12px',
            color: royalColors.deepRoyal,
            textDecoration: 'none',
            fontWeight: '600',
            marginTop: compact ? '0' : spacing.md,
            padding: '6px 0',
            borderBottom: `1px solid transparent`,
            transition: transitions.base,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = royalColors.deepRoyal;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'transparent';
          }}
        >
          → {text.viewProfile}
        </Link>
      )}
    </div>
  );
}
