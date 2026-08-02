'use client';

import React, { useEffect, useState } from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface ProgressBarProps {
  currentAmount: number;
  targetAmount: number;
  title?: string;
  description?: string;
  donorCount?: number;
  currency?: string;
  motivationalText?: string;
  color?: 'gold' | 'teal' | 'coral' | 'green';
  showPercentage?: boolean;
}

export default function ProgressBar({
  currentAmount,
  targetAmount,
  title,
  description,
  donorCount,
  currency = '$',
  motivationalText,
  color = 'gold',
  showPercentage = true,
}: ProgressBarProps) {
  const [displayAmount, setDisplayAmount] = useState(0);
  const percentage = Math.round((currentAmount / targetAmount) * 100);

  const colorMap = {
    gold: royalColors.hashemiteGold,
    teal: royalColors.compassionTeal,
    coral: royalColors.charityRed,
    green: royalColors.impactGreen,
  };

  const accentColor = colorMap[color];

  // Animated counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = currentAmount / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= currentAmount) {
        setDisplayAmount(currentAmount);
        clearInterval(timer);
      } else {
        setDisplayAmount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [currentAmount]);

  return (
    <div
      style={{
        backgroundColor: '#f5f1e8',
        borderRadius: '0px',
        padding: spacing.lg,
        boxShadow: shadows.md,
        border: `2px solid ${accentColor}`,
      }}
    >
      {/* Title & Description */}
      {title && (
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: royalColors.darkNavy,
            margin: `0 0 ${spacing.sm} 0`,
          }}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          style={{
            fontSize: '14px',
            color: royalColors.textSecondary,
            margin: `0 0 ${spacing.md} 0`,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}

      {/* Amount Info */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing.md,
        }}
      >
        <div>
          <p
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: accentColor,
              margin: 0,
              lineHeight: 1,
            }}
          >
            {currency}
            {displayAmount.toLocaleString()}
          </p>
          <p
            style={{
              fontSize: '12px',
              color: royalColors.textSecondary,
              margin: `${spacing.xs} 0 0 0`,
            }}
          >
            of {currency}
            {targetAmount.toLocaleString()}
          </p>
        </div>

        {showPercentage && (
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: accentColor,
              lineHeight: 1,
            }}
          >
            {percentage}%
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '12px',
          backgroundColor: '#e8dcc8',
          borderRadius: '0px',
          overflow: 'hidden',
          marginBottom: spacing.md,
          boxShadow: `inset 0 2px 4px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <div
          style={{
            width: `${Math.min(percentage, 100)}%`,
            height: '100%',
            backgroundColor: accentColor,
            transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '0px',
            boxShadow: `0 0 8px ${accentColor}`,
          }}
        />
      </div>

      {/* Donor Count */}
      {donorCount !== undefined && (
        <p
          style={{
            fontSize: '12px',
            color: royalColors.textSecondary,
            margin: 0,
            marginBottom: spacing.md,
            textAlign: 'right',
          }}
        >
          👥 {donorCount.toLocaleString()} donor{donorCount !== 1 ? 's' : ''}
        </p>
      )}

      {/* Motivational Text */}
      {motivationalText && (
        <div
          style={{
            padding: spacing.md,
            backgroundColor: `${accentColor}10`,
            borderRadius: '0px',
            borderLeft: `2px solid ${accentColor}`,
            fontSize: '14px',
            color: royalColors.darkNavy,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          💡 {motivationalText}
        </div>
      )}
    </div>
  );
}
