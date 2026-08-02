'use client';

import React from 'react';
import Link from 'next/link';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface FeatureSectionProps {
  title: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'warm' | 'light';
  items?: Array<{
    icon: string;
    label: string;
    description?: string;
  }>;
  primaryColor?: 'gold' | 'teal' | 'coral' | 'green';
  callToActionLabel?: string;
  callToActionHref?: string;
  listLayout?: 'grid' | 'stacked';
}

export default function FeatureSection({
  title,
  description,
  image,
  imagePosition = 'right',
  backgroundColor = 'white',
  items = [],
  primaryColor = 'gold',
  callToActionLabel,
  callToActionHref,
  listLayout = 'grid',
}: FeatureSectionProps) {
  const bgColorMap = {
    white: royalColors.bgLight,
    warm: royalColors.bgWarm,
    light: '#f9f9f9',
  };

  const colorMap = {
    gold: royalColors.warmGold,
    teal: royalColors.hopeTeal,
    coral: royalColors.coral,
    green: royalColors.deepGreen,
  };

  const primaryColorValue = colorMap[primaryColor];

  const gridColumn = imagePosition === 'left' ? 'auto' : 'auto / span 2';
  const imageGridColumn = imagePosition === 'left' ? 'auto / span 1' : 'auto / span 1';

  return (
    <section
      style={{
        backgroundColor: bgColorMap[backgroundColor],
        padding: `${spacing.xxxl} ${spacing.xl}`,
        borderBottom: `1px solid ${royalColors.border}`,
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            marginBottom: spacing.xxl,
            maxWidth: '600px',
            marginLeft: imagePosition === 'right' ? 0 : 'auto',
            marginRight: imagePosition === 'right' ? 'auto' : 0,
          }}
        >
          <h2
            style={{
              fontSize: '42px',
              fontWeight: 700,
              color: royalColors.deepNavy,
              margin: `0 0 ${spacing.lg} 0`,
              lineHeight: 1.2,
              fontFamily: '"Merriweather", Georgia, serif',
            }}
          >
            {title}
          </h2>

          {description && (
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: royalColors.textMuted,
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: image ? '1fr 1fr' : '1fr',
            gap: spacing.xl,
            alignItems: 'center',
            gridAutoFlow: imagePosition === 'right' ? 'dense' : 'row',
          }}
        >
          {/* Image (if left) */}
          {image && imagePosition === 'left' && (
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: royalColors.border,
                borderRadius: borderRadius.card,
                overflow: 'hidden',
                boxShadow: shadows.lg,
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Items or Description */}
          <div>
            {items.length > 0 ? (
              <div
                style={{
                  display: listLayout === 'grid' ? 'grid' : 'flex',
                  gridTemplateColumns: listLayout === 'grid' ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'auto',
                  flexDirection: listLayout === 'stacked' ? 'column' : 'row',
                  gap: spacing.lg,
                }}
              >
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: spacing.md,
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: `${primaryColorValue}20`,
                        borderRadius: borderRadius.lg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: royalColors.deepNavy,
                          margin: `0 0 ${spacing.xs} 0`,
                        }}
                      >
                        {item.label}
                      </h3>
                      {item.description && (
                        <p
                          style={{
                            fontSize: '14px',
                            color: royalColors.textMuted,
                            lineHeight: 1.5,
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* CTA */}
            {callToActionLabel && callToActionHref && (
              <Link
                href={callToActionHref}
                style={{
                  display: 'inline-block',
                  marginTop: spacing.lg,
                  padding: `${spacing.md} ${spacing.lg}`,
                  backgroundColor: primaryColorValue,
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: borderRadius.button,
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: shadows.md,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = shadows.lg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = shadows.md;
                }}
              >
                {callToActionLabel} →
              </Link>
            )}
          </div>

          {/* Image (if right) */}
          {image && imagePosition === 'right' && (
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: royalColors.border,
                borderRadius: borderRadius.card,
                overflow: 'hidden',
                boxShadow: shadows.lg,
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
