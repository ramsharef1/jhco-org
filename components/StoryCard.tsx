'use client';

import React from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface StoryCardProps {
  image?: string;
  quote: string;
  author: string;
  role?: string;
  location?: string;
  programTag?: string;
  borderColor?: 'gold' | 'teal' | 'coral' | 'green';
}

export default function StoryCard({
  image,
  quote,
  author,
  role,
  location,
  programTag,
  borderColor = 'gold',
}: StoryCardProps) {
  const colorMap = {
    gold: royalColors.warmGold,
    teal: royalColors.hopeTeal,
    coral: royalColors.coral,
    green: royalColors.deepGreen,
  };

  const borderAccent = colorMap[borderColor];

  return (
    <div
      style={{
        backgroundColor: royalColors.bgLight,
        borderRadius: borderRadius.card,
        overflow: 'hidden',
        boxShadow: shadows.md,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        borderTop: `4px solid ${borderAccent}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadows.xl;
        e.currentTarget.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = shadows.md;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      {image && (
        <div
          style={{
            width: '100%',
            height: '280px',
            backgroundColor: royalColors.border,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={author}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Quote Section */}
      <div style={{ padding: spacing.lg }}>
        {/* Quote */}
        <blockquote
          style={{
            fontSize: '16px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            margin: 0,
            marginBottom: spacing.md,
            borderLeft: `3px solid ${borderAccent}`,
            paddingLeft: spacing.md,
            color: royalColors.deepNavy,
          }}
        >
          "{quote}"
        </blockquote>

        {/* Attribution */}
        <div
          style={{
            paddingTop: spacing.md,
            borderTop: `1px solid ${royalColors.border}`,
          }}
        >
          {/* Author & Role */}
          <div style={{ marginBottom: spacing.sm }}>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: royalColors.deepNavy,
                margin: 0,
                marginBottom: '4px',
              }}
            >
              {author}
            </p>
            {role && (
              <p
                style={{
                  fontSize: '12px',
                  color: borderAccent,
                  fontWeight: 600,
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {role}
              </p>
            )}
          </div>

          {/* Location */}
          {location && (
            <p
              style={{
                fontSize: '12px',
                color: royalColors.textMuted,
                margin: '4px 0',
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
              }}
            >
              📍 {location}
            </p>
          )}

          {/* Program Tag */}
          {programTag && (
            <div
              style={{
                display: 'inline-block',
                backgroundColor: `${borderAccent}20`,
                color: borderAccent,
                padding: '4px 12px',
                borderRadius: borderRadius.full,
                fontSize: '11px',
                fontWeight: 600,
                marginTop: spacing.sm,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {programTag}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
