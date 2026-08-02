/**
 * JHCO Warm Design Components
 * Professional + Royal with Warm + Human Touch
 *
 * Components:
 * - WarmCard: Inviting content with warm styling
 * - EmotionalButton: Warm CTAs with emotional resonance
 * - ImpactStat: Colorful stat display
 * - ImpactStatGrid: Multiple stats grid
 * - StoryCard: Photo + quote storytelling
 * - CtaSection: Full-width call-to-action
 */

import React, { ReactNode } from 'react';
import { royalColors, gradients, componentStyles, spacing, borderRadius } from '@/lib/royalDesign';

// ============================================================================
// WARM CARD COMPONENT
// ============================================================================

interface WarmCardProps {
  title: string;
  description?: string;
  icon?: string;
  color?: 'gold' | 'red' | 'teal' | 'green';
  image?: string;
  action?: string;
  actionHref?: string;
  children?: ReactNode;
}

export const WarmCard: React.FC<WarmCardProps> = ({
  title,
  description,
  icon,
  color = 'gold',
  image,
  action,
  actionHref,
  children,
}) => {
  const colorMap = {
    gold: royalColors.warmGold,
    red: royalColors.compassionRed,
    teal: royalColors.hopeTeal,
    green: royalColors.deepGreen,
  };

  const accentColor = colorMap[color];

  return (
    <div
      style={{
        ...componentStyles.cards.warm,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: borderRadius.card,
            marginBottom: spacing.lg,
            marginTop: `-${spacing.lg}`,
            marginLeft: `-${spacing.lg}`,
            marginRight: `-${spacing.lg}`,
          }}
        />
      )}

      {icon && (
        <div style={{ fontSize: '32px', marginBottom: spacing.md }}>
          {icon}
        </div>
      )}

      {/* Accent line */}
      <div
        style={{
          width: '40px',
          height: '3px',
          backgroundColor: accentColor,
          borderRadius: '2px',
          marginBottom: spacing.md,
        }}
      />

      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          color: royalColors.deepNavy,
          marginBottom: spacing.md,
          marginTop: 0,
          fontFamily: '"Merriweather", Georgia, serif',
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: royalColors.textMuted,
            marginBottom: spacing.lg,
            flexGrow: 1,
          }}
        >
          {description}
        </p>
      )}

      {children}

      {action && actionHref && (
        <a
          href={actionHref}
          style={{
            display: 'inline-block',
            color: accentColor,
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            marginTop: spacing.md,
            padding: '8px 0',
            borderBottom: `2px solid ${accentColor}`,
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.opacity = '1';
          }}
        >
          {action} →
        </a>
      )}
    </div>
  );
};

// ============================================================================
// EMOTIONAL BUTTON COMPONENT
// ============================================================================

interface EmotionalButtonProps {
  label: string;
  variant?: 'primary' | 'compassion' | 'hopeful' | 'secondary' | 'royal';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const EmotionalButton: React.FC<EmotionalButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  className,
  style,
}) => {
  const variantStyles = componentStyles.buttons[variant as keyof typeof componentStyles.buttons];

  const sizeMap = {
    sm: { padding: '8px 16px', fontSize: '14px' },
    md: { padding: '12px 24px', fontSize: '16px' },
    lg: { padding: '16px 32px', fontSize: '18px' },
  };

  const buttonStyle: React.CSSProperties = {
    ...variantStyles,
    ...sizeMap[size],
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: icon ? spacing.sm : 0,
    ...style,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.target as HTMLElement).style.transform = 'translateY(-2px)';
          (e.target as HTMLElement).style.boxShadow = `0 6px 20px ${
            variant === 'compassion'
              ? 'rgba(231, 76, 60, 0.3)'
              : variant === 'hopeful'
              ? 'rgba(26, 188, 156, 0.3)'
              : 'rgba(232, 185, 35, 0.3)'
          }`;
        }
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.transform = 'translateY(0)';
        (e.target as HTMLElement).style.boxShadow = variantStyles.boxShadow;
      }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

// ============================================================================
// IMPACT STAT COMPONENT
// ============================================================================

interface ImpactStatProps {
  number: string | number;
  label: string;
  icon?: string;
  color?: 'gold' | 'red' | 'teal' | 'green';
  suffix?: string;
  trend?: 'up' | 'down' | 'stable';
}

export const ImpactStat: React.FC<ImpactStatProps> = ({
  number,
  label,
  icon,
  color = 'gold',
  suffix,
  trend,
}) => {
  const colorMap = {
    gold: royalColors.warmGold,
    red: royalColors.compassionRed,
    teal: royalColors.hopeTeal,
    green: royalColors.deepGreen,
  };

  const accentColor = colorMap[color];

  const trendIcon = {
    up: '📈',
    down: '📉',
    stable: '→',
  };

  return (
    <div
      style={{
        padding: spacing.lg,
        borderRadius: borderRadius.card,
        backgroundColor: `${accentColor}15`,
        border: `1px solid ${accentColor}40`,
        textAlign: 'center',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${accentColor}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {icon && (
        <div style={{ fontSize: '32px', marginBottom: spacing.md }}>
          {icon}
        </div>
      )}

      <div
        style={{
          fontSize: '48px',
          fontWeight: 700,
          color: accentColor,
          lineHeight: 1,
          marginBottom: spacing.sm,
        }}
      >
        {number}
        {suffix && (
          <span
            style={{
              fontSize: '24px',
              marginLeft: spacing.sm,
              color: royalColors.textMuted,
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      <p
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: royalColors.textDark,
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        {label}
      </p>

      {trend && (
        <div
          style={{
            fontSize: '16px',
            marginTop: spacing.md,
            color: trend === 'up' ? '#27ae60' : trend === 'down' ? '#e74c3c' : royalColors.softGray,
          }}
        >
          {trendIcon[trend]}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// IMPACT STAT GRID COMPONENT
// ============================================================================

interface ImpactStatGridProps {
  stats: ImpactStatProps[];
  columns?: 2 | 3 | 4;
}

export const ImpactStatGrid: React.FC<ImpactStatGridProps> = ({
  stats,
  columns = 3,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${100 / columns}%, 1fr))`,
        gap: spacing.lg,
      }}
    >
      {stats.map((stat, index) => (
        <ImpactStat key={index} {...stat} />
      ))}
    </div>
  );
};

// ============================================================================
// STORY CARD COMPONENT
// ============================================================================

interface StoryCardProps {
  image: string;
  quote: string;
  author: string;
  role?: string;
  country?: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  image,
  quote,
  author,
  role,
  country,
}) => {
  return (
    <div
      style={{
        borderRadius: borderRadius.card,
        overflow: 'hidden',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={author}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Quote Section */}
      <div
        style={{
          padding: spacing.xl,
          backgroundColor: royalColors.bgWarm,
        }}
      >
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: royalColors.deepNavy,
            margin: 0,
            marginBottom: spacing.lg,
            fontFamily: '"Merriweather", Georgia, serif',
          }}
        >
          "{quote}"
        </p>

        {/* Attribution */}
        <div
          style={{
            paddingTop: spacing.lg,
            borderTop: `2px solid ${royalColors.warmGold}`,
          }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: royalColors.deepNavy,
              margin: 0,
              marginBottom: space.xs,
            }}
          >
            {author}
          </p>
          {role && (
            <p
              style={{
                fontSize: '12px',
                color: royalColors.textMuted,
                margin: 0,
                marginBottom: space.xs,
              }}
            >
              {role}
            </p>
          )}
          {country && (
            <p
              style={{
                fontSize: '12px',
                color: royalColors.softGray,
                margin: 0,
              }}
            >
              {country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// TEMP: Define space mapping for the typo
const space: { [key: string]: string } = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
};

// ============================================================================
// CTA SECTION COMPONENT
// ============================================================================

interface CtaSectionProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: 'gradient' | 'image' | 'color';
  backgroundValue?: string;
  alignment?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = 'gradient',
  backgroundValue,
  alignment = 'center',
  children,
}) => {
  const backgroundStyle: React.CSSProperties = {};

  if (background === 'gradient') {
    backgroundStyle.background = backgroundValue || gradients.goldToWarm;
  } else if (background === 'image') {
    backgroundStyle.backgroundImage = `url(${backgroundValue})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  } else if (background === 'color') {
    backgroundStyle.backgroundColor = backgroundValue || royalColors.warmGold;
  }

  const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return (
    <section
      style={{
        padding: '64px 24px',
        borderRadius: borderRadius.xl,
        display: 'flex',
        flexDirection: 'column',
        alignItems: alignmentMap[alignment],
        textAlign: alignment,
        ...backgroundStyle,
        color: '#ffffff',
      }}
    >
      <h2
        style={{
          fontSize: '48px',
          fontWeight: 700,
          marginBottom: spacing.lg,
          marginTop: 0,
          fontFamily: '"Merriweather", Georgia, serif',
          color: alignment === 'center' ? '#ffffff' : '#0a1428',
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            marginBottom: spacing.xl,
            maxWidth: '600px',
            color: alignment === 'center' ? '#ffffff' : '#2c3e50',
          }}
        >
          {description}
        </p>
      )}

      {children}

      <div
        style={{
          display: 'flex',
          gap: spacing.lg,
          justifyContent: alignmentMap[alignment],
          flexWrap: 'wrap',
          marginTop: spacing.lg,
        }}
      >
        <a
          href={primaryCta.href}
          style={{
            display: 'inline-block',
            backgroundColor: royalColors.warmGold,
            color: royalColors.deepNavy,
            padding: '12px 32px',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: borderRadius.button,
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 12px rgba(232, 185, 35, 0.2)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(232, 185, 35, 0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(232, 185, 35, 0.2)';
          }}
        >
          {primaryCta.label}
        </a>

        {secondaryCta && (
          <a
            href={secondaryCta.href}
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: borderRadius.button,
              textDecoration: 'none',
              border: '2px solid #ffffff',
              cursor: 'pointer',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
    </section>
  );
};

// ============================================================================
// EXPORT ALL COMPONENTS
// ============================================================================

export default {
  WarmCard,
  EmotionalButton,
  ImpactStat,
  ImpactStatGrid,
  StoryCard,
  CtaSection,
};
