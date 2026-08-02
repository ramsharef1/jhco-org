'use client';

import React from 'react';
import Link from 'next/link';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  color?: 'gold' | 'teal' | 'coral' | 'green' | 'red';
  linkLabel?: string;
  linkHref?: string;
}

export default function ValueCard({
  icon,
  title,
  description,
  color = 'gold',
  linkLabel,
  linkHref,
}: ValueCardProps) {
  const colorMap = {
    gold: royalColors.warmGold,
    teal: royalColors.hopeTeal,
    coral: royalColors.coral,
    green: royalColors.deepGreen,
    red: royalColors.compassionRed,
  };

  const bgColorMap = {
    gold: 'rgba(232, 185, 35, 0.08)',
    teal: 'rgba(26, 188, 156, 0.08)',
    coral: 'rgba(255, 107, 107, 0.08)',
    green: 'rgba(39, 174, 96, 0.08)',
    red: 'rgba(231, 76, 60, 0.08)',
  };

  const accentColor = colorMap[color];
  const bgColor = bgColorMap[color];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: borderRadius.card,
        padding: spacing.lg,
        border: `2px solid ${accentColor}40`,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${accentColor}15`;
        e.currentTarget.style.boxShadow = shadows.md;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: `${accentColor}25`,
          borderRadius: borderRadius.lg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          marginBottom: spacing.md,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: royalColors.deepNavy,
          margin: `0 0 ${spacing.sm} 0`,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          color: royalColors.textMuted,
          lineHeight: 1.5,
          margin: `0 0 ${spacing.md} 0`,
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Link */}
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: spacing.sm,
            fontSize: '13px',
            fontWeight: 600,
            color: accentColor,
            textDecoration: 'none',
            marginTop: 'auto',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as any).style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as any).style.transform = 'translateX(0)';
          }}
        >
          {linkLabel}
          <span>→</span>
        </Link>
      )}
    </div>
  );
}
