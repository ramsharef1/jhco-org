'use client';

import React, { useEffect, useRef, useState } from 'react';
import { royalColors, borderRadius, spacing } from '@/lib/royalDesign';

interface ImpactStatProps {
  number: string | number;
  label: string;
  icon?: string;
  color?: 'gold' | 'teal' | 'coral' | 'green' | 'red';
  suffix?: string;
  trend?: 'up' | 'down' | 'stable';
  animateOnScroll?: boolean;
}

export default function ImpactStat({
  number,
  label,
  icon,
  color = 'gold',
  suffix,
  trend,
  animateOnScroll = true,
}: ImpactStatProps) {
  const [isVisible, setIsVisible] = useState(!animateOnScroll);
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const colorMap = {
    gold: { bg: '#f5f1e8', text: '#d4af37', border: '#d4af37' },
    teal: { bg: '#f5f1e8', text: '#0d7377', border: '#0d7377' },
    coral: { bg: '#f5f1e8', text: '#ff6b6b', border: '#ff6b6b' },
    green: { bg: '#f5f1e8', text: '#1b4332', border: '#1b4332' },
    red: { bg: '#f5f1e8', text: '#c41e3a', border: '#c41e3a' },
  };

  const current = colorMap[color];

  // Intersection Observer for scroll animation
  useEffect(() => {
    if (!animateOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animateOnScroll]);

  // Animated counter
  useEffect(() => {
    if (!isVisible) return;

    const numValue = typeof number === 'string' ? parseInt(number.replace(/[^0-9]/g, ''), 10) : number;
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayNumber(numValue);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  const trendMap = {
    up: { icon: '📈', color: royalColors.impactGreen },
    down: { icon: '📉', color: royalColors.charityRed },
    stable: { icon: '➡️', color: royalColors.darkGrayText },
  };

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: current.bg,
        borderRadius: '0px',
        padding: spacing.lg,
        border: `2px solid ${current.border}`,
        textAlign: 'center',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 4px 20px -2px ${current.border}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      {icon && (
        <div
          style={{
            fontSize: '40px',
            marginBottom: spacing.sm,
            animation: isVisible ? 'pulse 2s ease-in-out' : 'none',
          }}
        >
          {icon}
        </div>
      )}

      {/* Number with Trend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: spacing.sm }}>
        <div
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: current.text,
            lineHeight: 1,
          }}
        >
          {displayNumber}
          {suffix && <span style={{ fontSize: '24px', marginLeft: '4px' }}>{suffix}</span>}
        </div>
        {trend && (
          <span style={{ fontSize: '24px', color: trendMap[trend].color }}>
            {trendMap[trend].icon}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: royalColors.textOfficial,
          marginTop: spacing.md,
          marginBottom: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </p>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
