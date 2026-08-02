'use client';

import React, { useState, useEffect } from 'react';
import { royalColors, borderRadius, spacing, shadows } from '@/lib/royalDesign';

interface Testimonial {
  id: string;
  image?: string;
  name: string;
  quote: string;
  role?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoRotate = true,
  rotationInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate || testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [autoRotate, rotationInterval, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <div
        style={{
          padding: spacing.xl,
          textAlign: 'center',
          color: royalColors.textMuted,
        }}
      >
        No testimonials available
      </div>
    );
  }

  const current = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        backgroundColor: royalColors.bgLight,
        borderRadius: borderRadius.card,
        padding: spacing.xl,
        boxShadow: shadows.md,
      }}
    >
      {/* Testimonial Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: current.image ? '1fr 1fr' : '1fr',
          gap: spacing.xl,
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        {/* Image */}
        {current.image && (
          <div
            style={{
              width: '100%',
              height: '300px',
              backgroundColor: royalColors.border,
              borderRadius: borderRadius.card,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 500ms ease-in-out',
            }}
          >
            <img
              src={current.image}
              alt={current.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Quote & Attribution */}
        <div style={{ animation: 'fadeIn 500ms ease-in-out' }}>
          {/* Quote */}
          <blockquote
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: royalColors.deepNavy,
              margin: `0 0 ${spacing.lg} 0`,
              borderLeft: `4px solid ${royalColors.warmGold}`,
              paddingLeft: spacing.lg,
            }}
          >
            "{current.quote}"
          </blockquote>

          {/* Author Info */}
          <div>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: royalColors.deepNavy,
                margin: `0 0 ${spacing.xs} 0`,
              }}
            >
              {current.name}
            </p>
            {current.role && (
              <p
                style={{
                  fontSize: '13px',
                  color: royalColors.warmGold,
                  fontWeight: 600,
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {current.role}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: spacing.xl,
          paddingTop: spacing.lg,
          borderTop: `1px solid ${royalColors.border}`,
        }}
      >
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: borderRadius.full,
            border: `2px solid ${royalColors.warmGold}`,
            backgroundColor: 'transparent',
            color: royalColors.warmGold,
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.warmGold;
            e.currentTarget.style.color = royalColors.deepNavy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = royalColors.warmGold;
          }}
        >
          ←
        </button>

        {/* Dot Navigation */}
        <div
          style={{
            display: 'flex',
            gap: spacing.sm,
            justifyContent: 'center',
          }}
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: idx === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: borderRadius.full,
                backgroundColor: idx === currentIndex ? royalColors.warmGold : royalColors.border,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                if (idx !== currentIndex) {
                  e.currentTarget.style.backgroundColor = royalColors.goldLight;
                }
              }}
              onMouseLeave={(e) => {
                if (idx !== currentIndex) {
                  e.currentTarget.style.backgroundColor = royalColors.border;
                }
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: borderRadius.full,
            border: `2px solid ${royalColors.warmGold}`,
            backgroundColor: 'transparent',
            color: royalColors.warmGold,
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.warmGold;
            e.currentTarget.style.color = royalColors.deepNavy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = royalColors.warmGold;
          }}
        >
          →
        </button>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
