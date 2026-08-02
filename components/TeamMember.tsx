'use client';

import React from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface TeamMemberProps {
  name: string;
  title: string;
  bio?: string;
  image?: string;
  socialLinks?: SocialLink[];
  accentColor?: 'gold' | 'teal' | 'coral' | 'green';
}

export default function TeamMember({
  name,
  title,
  bio,
  image,
  socialLinks = [],
  accentColor = 'gold',
}: TeamMemberProps) {
  const colorMap = {
    gold: royalColors.hashemiteGold,
    teal: royalColors.compassionTeal,
    coral: royalColors.charityRed,
    green: royalColors.impactGreen,
  };

  const accent = colorMap[accentColor];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        overflow: 'hidden',
        boxShadow: shadows.md,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        border: `2px solid ${accent}`,
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
            backgroundColor: royalColors.borderFormal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Info Section */}
      <div style={{ padding: spacing.lg }}>
        {/* Name */}
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: royalColors.darkNavy,
            margin: `0 0 ${spacing.xs} 0`,
            lineHeight: 1.2,
          }}
        >
          {name}
        </h3>

        {/* Title */}
        <p
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: accent,
            margin: `0 0 ${spacing.md} 0`,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </p>

        {/* Bio */}
        {bio && (
          <p
            style={{
              fontSize: '14px',
              color: royalColors.textSecondary,
              lineHeight: 1.5,
              margin: `0 0 ${spacing.md} 0`,
            }}
          >
            {bio}
          </p>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: spacing.sm,
              paddingTop: spacing.md,
              borderTop: `1px solid ${royalColors.borderFormal}`,
            }}
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.platform}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: borderRadius.full,
                  backgroundColor: `${accent}20`,
                  color: accent,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accent;
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${accent}20`;
                  e.currentTarget.style.color = accent;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
