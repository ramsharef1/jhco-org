'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface HeroSlide {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  ctaTextEn: string;
  ctaTextAr: string;
  ctaLink: string;
  gradient: string;
  icon: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    titleEn: 'Humanitarian Impact',
    titleAr: 'التأثير الإنساني',
    descriptionEn: 'Transforming lives through compassion, dignity, and sustainable support',
    descriptionAr: 'تحويل الحياة من خلال التعاطف والكرامة والدعم المستدام',
    ctaTextEn: 'Learn More',
    ctaTextAr: 'اعرف المزيد',
    ctaLink: '/impact',
    gradient: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
    icon: '👑',
  },
  {
    id: 2,
    titleEn: 'Royal Patronage',
    titleAr: 'الرعاية الملكية',
    descriptionEn: 'Supporting charitable works under royal patronage since 1990',
    descriptionAr: 'دعم الأعمال الخيرية تحت الرعاية الملكية منذ عام 1990',
    ctaTextEn: 'Discover Programs',
    ctaTextAr: 'اكتشف البرامج',
    ctaLink: '/programs',
    gradient: 'linear-gradient(135deg, #5d1049 0%, #d4af37 100%)',
    icon: '⭐',
  },
  {
    id: 3,
    titleEn: 'Make a Difference',
    titleAr: 'احدث فرقا',
    descriptionEn: 'Join thousands supporting our mission to serve vulnerable communities',
    descriptionAr: 'انضم إلى الآلاف الذين يدعمون مهمتنا في خدمة المجتمعات الضعيفة',
    ctaTextEn: 'Get Involved',
    ctaTextAr: 'شارك معنا',
    ctaLink: '/get-involved',
    gradient: 'linear-gradient(135deg, #001a4d 0%, #4a7c7e 100%)',
    icon: '❤️',
  },
];

export default function HeroSlider({ locale = 'en' }: { locale?: string }) {
  const ar = locale === 'ar';
  const base = `/${locale}`;
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <div style={{
      position: 'relative',
      height: '600px',
      overflow: 'hidden',
      backgroundColor: royalColors.bgDark,
    }}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: slide.gradient,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: `${spacing.xl}`,
            direction: ar ? 'rtl' : 'ltr',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '64px', marginBottom: spacing.lg }}>{slide.icon}</div>
            <h1 style={{
              fontSize: '56px',
              fontWeight: '400',
              margin: `0 0 ${spacing.lg} 0`,
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px',
            }}>
              {ar ? slide.titleAr : slide.titleEn}
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: `0 0 ${spacing.xxl} 0`,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: `0 auto ${spacing.xxl}`,
            }}>
              {ar ? slide.descriptionAr : slide.descriptionEn}
            </p>
            <Link href={`${base}${slide.ctaLink}`} style={{
              display: 'inline-block',
              padding: `${spacing.md} ${spacing.xl}`,
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.deepRoyal,
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '2px',
              transition: transitions.base,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f4c430';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              {ar ? slide.ctaTextAr : slide.ctaTextEn}
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div style={{
        position: 'absolute',
        bottom: spacing.xl,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: spacing.md,
        zIndex: 10,
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setIsAutoPlay(false);
            }}
            style={{
              width: idx === current ? '32px' : '8px',
              height: '8px',
              backgroundColor: idx === current ? royalColors.hashemiteGold : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: transitions.base,
            }}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        style={{
          position: 'absolute',
          [ar ? 'right' : 'left']: spacing.xl,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          padding: `${spacing.md} ${spacing.lg}`,
          cursor: 'pointer',
          zIndex: 10,
          transition: transitions.base,
          borderRadius: '2px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
        }}
      >
        {ar ? '→' : '←'}
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        style={{
          position: 'absolute',
          [ar ? 'left' : 'right']: spacing.xl,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          padding: `${spacing.md} ${spacing.lg}`,
          cursor: 'pointer',
          zIndex: 10,
          transition: transitions.base,
          borderRadius: '2px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
        }}
      >
        {ar ? '←' : '→'}
      </button>
    </div>
  );
}
