'use client';

import React from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface StatCardProps {
  number: string | number;
  label: string;
  description?: string;
  color?: 'gold' | 'teal' | 'coral' | 'green' | 'red';
  icon?: string;
  suffix?: string;
}

export default function StatCard({
  number,
  label,
  description,
  color = 'gold',
  icon,
  suffix,
}: StatCardProps) {
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
      {/* Icon + Number Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: spacing.md,
          marginBottom: spacing.md,
        }}
      >
        {icon && (
          <div
            style={{
              fontSize: '36px',
              lineHeight: 1,
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: accentColor,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {number}
            {suffix && <span style={{ fontSize: '20px', marginLeft: '4px' }}>{suffix}</span>}
          </p>
        </div>
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: royalColors.textDark,
          margin: `0 0 ${spacing.sm} 0`,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </p>

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: '13px',
            color: royalColors.textMuted,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
