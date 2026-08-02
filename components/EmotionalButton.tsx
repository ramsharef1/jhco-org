'use client';

import React from 'react';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

interface EmotionalButtonProps {
  label: string;
  variant?: 'primary' | 'compassion' | 'hopeful' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function EmotionalButton({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  disabled = false,
  fullWidth = false,
}: EmotionalButtonProps) {
  const variantStyles = {
    primary: {
      bg: '#4a148c',
      text: '#d4af37',
      hover: '#5e35b1',
      active: '#3d0f66',
      shadow: shadows.royal,
      border: 'none',
    },
    compassion: {
      bg: '#c41e3a',
      text: '#ffffff',
      hover: '#a21830',
      active: '#8b1428',
      shadow: shadows.md,
      border: 'none',
    },
    hopeful: {
      bg: '#0d7377',
      text: '#ffffff',
      hover: '#094d52',
      active: '#063239',
      shadow: shadows.md,
      border: 'none',
    },
    secondary: {
      bg: 'transparent',
      text: '#001a4d',
      hover: '#f5f1e8',
      active: '#d4c5a9',
      shadow: 'none',
      border: `2px solid #d4af37`,
    },
  };

  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: '12px',
      gap: '6px',
    },
    md: {
      padding: '12px 24px',
      fontSize: '14px',
      gap: '8px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '16px',
      gap: '10px',
    },
  };

  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: currentSize.gap,
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: '0px',
    border: currentVariant.border || 'none',
    backgroundColor: currentVariant.bg,
    color: currentVariant.text,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: currentVariant.shadow,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  };

  const commonEventHandlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!disabled) {
        (e.currentTarget as any).style.backgroundColor = currentVariant.hover;
        (e.currentTarget as any).style.transform = 'translateY(-2px)';
        (e.currentTarget as any).style.boxShadow = shadows.lg;
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!disabled) {
        (e.currentTarget as any).style.backgroundColor = currentVariant.bg;
        (e.currentTarget as any).style.transform = 'translateY(0)';
        (e.currentTarget as any).style.boxShadow = currentVariant.shadow;
      }
    },
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'inherit',
  };

  if (href && !disabled) {
    return (
      <a href={href} style={buttonStyle as React.CSSProperties} {...commonEventHandlers}>
        <div style={contentStyle}>
          {icon && <span style={{ fontSize: '1.2em' }}>{icon}</span>}
          {label}
        </div>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      {...commonEventHandlers}
    >
      {icon && <span style={{ fontSize: '1.2em' }}>{icon}</span>}
      {label}
    </button>
  );
}
