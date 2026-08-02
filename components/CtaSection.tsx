'use client';

import React from 'react';
import Link from 'next/link';
import { royalColors, borderRadius, spacing } from '@/lib/royalDesign';

interface CtaOption {
  label: string;
  href: string;
  icon: string;
  description?: string;
}

interface CtaSectionProps {
  heading: string;
  subheading?: string;
  options: CtaOption[];
  background?: 'compassionate' | 'hopeful' | 'royal' | 'warm';
  fullWidth?: boolean;
}

export default function CtaSection({
  heading,
  subheading,
  options,
  background = 'compassionate',
  fullWidth = true,
}: CtaSectionProps) {
  const bgMap = {
    compassionate: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
    hopeful: 'linear-gradient(135deg, #0d7377 0%, #001a4d 100%)',
    royal: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
    warm: 'linear-gradient(135deg, #001a4d 0%, #2b2d42 100%)',
  };

  const textColorMap = {
    compassionate: '#ffffff',
    hopeful: '#ffffff',
    royal: '#ffffff',
    warm: royalColors.darkNavy,
  };

  return (
    <section
      style={{
        background: bgMap[background],
        padding: fullWidth ? `${spacing.xxxl} ${spacing.xl}` : `${spacing.xxl} ${spacing.xl}`,
        borderRadius: fullWidth ? '0' : borderRadius.card,
        textAlign: 'center',
        color: textColorMap[background],
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: '56px',
            fontWeight: 800,
            margin: `0 0 ${spacing.md} 0`,
            lineHeight: 1.1,
            fontFamily: '"Garamond", Georgia, serif',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {heading}
        </h2>

        {/* Subheading */}
        {subheading && (
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              margin: `0 0 ${spacing.xl} 0`,
              opacity: 0.95,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subheading}
          </p>
        )}

        {/* CTA Options Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            gap: spacing.lg,
            marginTop: spacing.xl,
          }}
        >
          {options.map((option, idx) => (
            <Link
              key={idx}
              href={option.href}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '0px',
                padding: spacing.lg,
                textDecoration: 'none',
                color: textColorMap[background],
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid rgba(212, 175, 55, 0.4)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: spacing.md,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.7)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '40px' }}>{option.icon}</span>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {option.label}
              </span>
              {option.description && (
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.4,
                    opacity: 0.85,
                  }}
                >
                  {option.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
