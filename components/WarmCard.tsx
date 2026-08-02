'use client';

import React from 'react';
import { royalColors, shadows, borderRadius, spacing } from '@/lib/royalDesign';

interface WarmCardProps {
  title: string;
  description?: string;
  icon?: string;
  color?: 'gold' | 'teal' | 'coral' | 'green';
  image?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function WarmCard({
  title,
  description,
  icon,
  color = 'gold',
  image,
  actionLabel,
  actionHref,
}: WarmCardProps) {
  const colorMap = {
    gold: royalColors.warmGold,
    teal: royalColors.hopeTeal,
    coral: royalColors.coral,
    green: royalColors.deepGreen,
  };

  const accentColor = colorMap[color];

  const borderColorMap = {
    gold: 'rgba(232, 185, 35, 0.3)',
    teal: 'rgba(26, 188, 156, 0.3)',
    coral: 'rgba(255, 107, 107, 0.3)',
    green: 'rgba(39, 174, 96, 0.3)',
  };

  return (
    <div
      style={{
        backgroundColor: royalColors.bgWarm,
        borderRadius: borderRadius.card,
        padding: spacing.lg,
        boxShadow: shadows.sm,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        borderLeft: `4px solid ${accentColor}`,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadows.lg;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = shadows.sm;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      {image && (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: borderColorMap[color],
            borderRadius: borderRadius.md,
            marginBottom: spacing.md,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Icon + Title */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.md, marginBottom: spacing.sm }}>
        {icon && (
          <span style={{ fontSize: '32px', lineHeight: 1 }}>
            {icon}
          </span>
        )}
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: royalColors.deepNavy,
            margin: 0,
            lineHeight: 1.3,
            flex: 1,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: '14px',
            color: royalColors.textMuted,
            lineHeight: 1.5,
            margin: `${spacing.sm} 0 ${spacing.md} 0`,
            flex: 1,
          }}
        >
          {description}
        </p>
      )}

      {/* Action Link */}
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          style={{
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: 600,
            color: accentColor,
            textDecoration: 'none',
            marginTop: 'auto',
            paddingTop: spacing.md,
            borderTop: `1px solid ${borderColorMap[color]}`,
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = accentColor;
            e.currentTarget.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = accentColor;
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          {actionLabel} →
        </a>
      )}
    </div>
  );
}
