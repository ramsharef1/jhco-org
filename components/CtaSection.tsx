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
    compassionate: 'linear-gradient(135deg, rgba(231, 76, 60, 0.95) 0%, rgba(232, 185, 35, 0.95) 100%)',
    hopeful: 'linear-gradient(135deg, rgba(26, 188, 156, 0.95) 0%, rgba(52, 152, 219, 0.95) 100%)',
    royal: 'linear-gradient(135deg, rgba(10, 20, 40, 0.95) 0%, rgba(26, 188, 156, 0.95) 100%)',
    warm: 'linear-gradient(135deg, rgba(232, 185, 35, 0.95) 0%, rgba(245, 214, 103, 0.95) 100%)',
  };

  const textColorMap = {
    compassionate: '#ffffff',
    hopeful: '#ffffff',
    royal: '#ffffff',
    warm: royalColors.deepNavy,
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
            fontSize: '48px',
            fontWeight: 700,
            margin: `0 0 ${spacing.md} 0`,
            lineHeight: 1.2,
            fontFamily: '"Merriweather", Georgia, serif',
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
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: borderRadius.card,
                padding: spacing.lg,
                textDecoration: 'none',
                color: textColorMap[background],
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid rgba(255, 255, 255, 0.2)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: spacing.md,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '40px' }}>{option.icon}</span>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 1.2,
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
