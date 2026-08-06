'use client';

import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface StoryCardProps {
  id: string;
  slug?: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  quoteEn?: string;
  quoteAr?: string;
  authorEn: string;
  authorAr: string;
  roleEn: string;
  roleAr: string;
  locationEn?: string;
  locationAr?: string;
  imageUrl?: string;
  icon: string;
  href?: string;
  locale?: string;
  variant?: 'story' | 'testimonial' | 'impact';
}

export default function StoryCard({
  titleEn,
  titleAr,
  excerptEn,
  excerptAr,
  quoteEn,
  quoteAr,
  authorEn,
  authorAr,
  roleEn,
  roleAr,
  locationEn,
  locationAr,
  imageUrl,
  icon,
  href,
  locale = 'en',
  variant = 'story',
}: StoryCardProps) {
  const ar = locale === 'ar';
  
  return (
    <div style={{
      backgroundColor: 'white',
      border: `1px solid #e8dcc8`,
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: href ? 'pointer' : 'default',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
    }}>
      <div style={{
        height: imageUrl ? '200px' : '120px',
        backgroundColor: '#f5f1e8',
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: imageUrl ? '0' : '42px',
      }}>
        {!imageUrl && icon}
      </div>
      
      <div style={{ flex: 1, padding: spacing.lg, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#001a4d',
          margin: `0 0 ${spacing.sm} 0`,
          lineHeight: '1.4',
          fontFamily: 'Georgia, serif',
        }}>
          {ar ? titleAr : titleEn}
        </h3>
        
        <p style={{
          fontSize: '13px',
          color: '#5a5a6a',
          lineHeight: '1.6',
          flex: 1,
          margin: `0 0 ${spacing.md} 0`,
        }}>
          {ar ? excerptAr : excerptEn}
        </p>
        
        <div style={{
          borderTop: '1px solid #e8dcc8',
          paddingTop: spacing.md,
          fontSize: '12px',
          fontWeight: '600',
          color: '#001a4d',
        }}>
          {ar ? authorAr : authorEn}
        </div>
      </div>
    </div>
  );
}
