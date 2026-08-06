'use client';

import { useState, useEffect } from 'react';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  quoteEn: string;
  quoteAr: string;
  icon: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  locale?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  locale = 'en',
  autoPlay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const ar = locale === 'ar';
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlay || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length, interval]);

  if (testimonials.length === 0) return null;

  const slide = testimonials[current];

  return (
    <section style={{
      backgroundColor: royalColors.bgRefined,
      padding: `${spacing.xxxl} ${spacing.xl}`,
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Testimonial */}
        <div style={{
          backgroundColor: 'white',
          padding: spacing.xxxl,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
          textAlign: 'center',
          direction: ar ? 'rtl' : 'ltr',
        }}>
          {/* Icon */}
          <div style={{ fontSize: '48px', marginBottom: spacing.lg }}>
            {slide.icon}
          </div>

          {/* Quote */}
          <blockquote style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: royalColors.darkNavy,
            margin: `0 0 ${spacing.lg} 0`,
            lineHeight: '1.8',
            fontFamily: 'Georgia, serif',
          }}>
            &ldquo;{ar ? slide.quoteAr : slide.quoteEn}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div style={{ marginBottom: spacing.lg }}>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              margin: '0 0 4px 0',
            }}>
              {ar ? slide.nameAr : slide.nameEn}
            </p>
            <p style={{
              fontSize: '12px',
              color: royalColors.textSecondary,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              {ar ? slide.roleAr : slide.roleEn}
            </p>
          </div>

          {/* Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: spacing.md,
            marginTop: spacing.lg,
          }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setIsAutoPlay(false);
                }}
                style={{
                  width: idx === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: idx === current ? royalColors.hashemiteGold : 'rgba(212, 175, 55, 0.3)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: transitions.base,
                }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(autoPlay)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
