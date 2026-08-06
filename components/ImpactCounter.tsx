'use client';

import { useEffect, useState } from 'react';
import { royalColors, spacing } from '@/lib/royalDesign';

interface Stat {
  value: string;
  label: string;
  labelAr: string;
  icon: string;
}

interface ImpactCounterProps {
  stats: Stat[];
  locale?: string;
}

export default function ImpactCounter({ stats, locale = 'en' }: ImpactCounterProps) {
  const ar = locale === 'ar';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-counter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="impact-counter" style={{
      backgroundColor: royalColors.bgRefined,
      padding: `${spacing.xxxl} ${spacing.xl}`,
    }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: spacing.xxl,
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: spacing.xl,
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,20,40,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: '48px',
                marginBottom: spacing.md,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '64px',
              }}>
                {stat.icon}
              </div>

              {/* Number */}
              <div style={{
                fontSize: '42px',
                fontWeight: '800',
                color: royalColors.deepRoyal,
                margin: `${spacing.sm} 0`,
                fontFamily: 'Georgia, serif',
                lineHeight: '1',
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {isVisible ? (
                  <CountUp value={stat.value} />
                ) : (
                  stat.value
                )}
              </div>

              {/* Label */}
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: royalColors.textSecondary,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                lineHeight: '1.4',
              }}>
                {ar ? stat.labelAr : stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/\d/g, '').trim();

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
