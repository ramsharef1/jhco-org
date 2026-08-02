'use client';

import React, { useState } from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface ImpactItem {
  icon: string;
  label: string;
  amount: number;
}

interface ImpactCalculatorProps {
  minAmount?: number;
  maxAmount?: number;
  defaultAmount?: number;
  currency?: string;
  impacts: ImpactItem[];
  onDonationChange?: (amount: number) => void;
  primaryColor?: string;
}

export default function ImpactCalculator({
  minAmount = 10,
  maxAmount = 1000,
  defaultAmount = 50,
  currency = '$',
  impacts = [
    { icon: '📚', label: 'Textbooks provided', amount: 20 },
    { icon: '🍽️', label: 'Meals provided', amount: 15 },
    { icon: '💊', label: 'Medical supplies', amount: 50 },
    { icon: '🏠', label: 'Days of shelter', amount: 100 },
  ],
  onDonationChange,
  primaryColor = royalColors.hashemiteGold,
}: ImpactCalculatorProps) {
  const [amount, setAmount] = useState(defaultAmount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value, 10);
    setAmount(newAmount);
    onDonationChange?.(newAmount);
  };

  const handleQuickSelect = (value: number) => {
    setAmount(value);
    onDonationChange?.(value);
  };

  const calculateImpact = (itemAmount: number) => {
    return Math.floor(amount / itemAmount);
  };

  const quickAmounts = [25, 50, 100, 250];

  return (
    <div
      style={{
        backgroundColor: royalColors.bgRefined,
        borderRadius: borderRadius.card,
        padding: spacing.xl,
        boxShadow: shadows.md,
      }}
    >
      <h3
        style={{
          fontSize: '24px',
          fontWeight: 700,
          color: royalColors.darkNavy,
          margin: `0 0 ${spacing.md} 0`,
          textAlign: 'center',
        }}
      >
        💝 Your Impact Matters
      </h3>

      {/* Amount Display */}
      <div
        style={{
          backgroundColor: royalColors.bgLight,
          borderRadius: borderRadius.md,
          padding: spacing.lg,
          marginBottom: spacing.lg,
          border: `2px solid ${primaryColor}`,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: royalColors.textSecondary,
            margin: `0 0 ${spacing.sm} 0`,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
          }}
        >
          Your Donation Amount
        </p>
        <p
          style={{
            fontSize: '42px',
            fontWeight: 700,
            color: primaryColor,
            margin: 0,
            lineHeight: 1,
          }}
        >
          {currency}
          {amount}
        </p>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: spacing.lg }}>
        <input
          type="range"
          min={minAmount}
          max={maxAmount}
          value={amount}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: royalColors.borderFormal,
            outline: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
          }}
        />
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: ${primaryColor};
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 2px solid white;
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: ${primaryColor};
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 2px solid white;
          }
        `}</style>
      </div>

      {/* Quick Select Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: spacing.sm,
          marginBottom: spacing.lg,
        }}
      >
        {quickAmounts.map((value) => (
          <button
            key={value}
            onClick={() => handleQuickSelect(value)}
            style={{
              padding: spacing.md,
              borderRadius: borderRadius.sm,
              border: `2px solid ${amount === value ? primaryColor : royalColors.borderFormal}`,
              backgroundColor: amount === value ? `${primaryColor}20` : royalColors.bgLight,
              color: amount === value ? primaryColor : royalColors.textOfficial,
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${primaryColor}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = amount === value ? `${primaryColor}20` : royalColors.bgLight;
            }}
          >
            {currency}
            {value}
          </button>
        ))}
      </div>

      {/* Impact Display */}
      <div
        style={{
          borderTop: `1px solid ${royalColors.borderFormal}`,
          paddingTop: spacing.lg,
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: royalColors.textSecondary,
            margin: `0 0 ${spacing.md} 0`,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
          }}
        >
          Your Impact
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: spacing.md,
          }}
        >
          {impacts.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: royalColors.bgLight,
                borderRadius: borderRadius.md,
                padding: spacing.md,
                textAlign: 'center',
                border: `1px solid ${royalColors.borderFormal}`,
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  marginBottom: spacing.sm,
                }}
              >
                {item.icon}
              </div>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: primaryColor,
                  margin: `0 0 ${spacing.xs} 0`,
                  lineHeight: 1,
                }}
              >
                {calculateImpact(item.amount)}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: royalColors.textSecondary,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
