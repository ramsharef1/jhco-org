'use client';

import React from 'react';
import Link from 'next/link';
import { royalColors, borderRadius, spacing } from '@/lib/royalDesign';

interface HeroButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
}

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  buttons?: HeroButton[];
  overlayOpacity?: number;
  alignment?: 'left' | 'center' | 'right';
  minHeight?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  backgroundImage,
  backgroundColor,
  backgroundGradient = 'linear-gradient(135deg, rgba(232, 185, 35, 0.95) 0%, rgba(26, 188, 156, 0.95) 100%)',
  buttons = [],
  overlayOpacity = 0.7,
  alignment = 'center',
  minHeight = '500px',
}: HeroSectionProps) {
  const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  } as const;

  const textAlignMap = {
    left: 'left' as const,
    center: 'center' as const,
    right: 'right' as const,
  } as const;

  const backgroundStyle: React.CSSProperties = {
    position: 'relative',
    minHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: alignmentMap[alignment],
    overflow: 'hidden',
  };

  // Set background
  if (backgroundImage) {
    backgroundStyle.backgroundImage = `url(${backgroundImage})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  } else if (backgroundGradient) {
    backgroundStyle.background = backgroundGradient;
  } else if (backgroundColor) {
    backgroundStyle.backgroundColor = backgroundColor;
  }

  return (
    <section style={backgroundStyle}>
      {/* Overlay */}
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(10, 20, 40, ${overlayOpacity})`,
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          padding: `${spacing.xl} ${spacing.xl}`,
          textAlign: textAlignMap[alignment],
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#ffffff',
            margin: `0 0 ${spacing.lg} 0`,
            fontFamily: '"Merriweather", Georgia, serif',
          }}
        >
          {headline}
        </h1>

        {/* Subheadline */}
        {subheadline && (
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              margin: `0 0 ${spacing.xl} 0`,
              maxWidth: '600px',
              marginLeft: alignment === 'center' ? 'auto' : 0,
              marginRight: alignment === 'center' ? 'auto' : 0,
            }}
          >
            {subheadline}
          </p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: spacing.md,
              justifyContent: alignmentMap[alignment],
              flexWrap: 'wrap',
            }}
          >
            {buttons.map((button, idx) => {
              const isPrimary = button.variant === 'primary' || idx === 0;

              return (
                <Link
                  key={idx}
                  href={button.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                    padding: `${spacing.md} ${spacing.xl}`,
                    borderRadius: borderRadius.button,
                    backgroundColor: isPrimary ? royalColors.warmGold : 'rgba(255, 255, 255, 0.2)',
                    color: isPrimary ? royalColors.deepNavy : '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '16px',
                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    border: isPrimary ? 'none' : '2px solid rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (isPrimary) {
                      e.currentTarget.style.backgroundColor = royalColors.goldLight;
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(232, 185, 35, 0.3)';
                    } else {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                    }
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (isPrimary) {
                      e.currentTarget.style.backgroundColor = royalColors.warmGold;
                      e.currentTarget.style.boxShadow = 'none';
                    } else {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {button.icon && <span style={{ fontSize: '1.2em' }}>{button.icon}</span>}
                  {button.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
