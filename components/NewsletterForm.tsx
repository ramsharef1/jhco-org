'use client';

import { useState } from 'react';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

interface NewsletterFormProps {
  locale?: string;
  onSubmit?: (email: string) => void;
}

export default function NewsletterForm({ locale = 'en', onSubmit }: NewsletterFormProps) {
  const ar = locale === 'ar';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (onSubmit) {
      onSubmit(email);
    }
    
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: spacing.sm,
      direction: ar ? 'rtl' : 'ltr',
      flexWrap: 'wrap',
      justifyContent: ar ? 'flex-end' : 'flex-start',
    }}>
      <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
        <input
          type="email"
          placeholder={ar ? 'بريدك الإلكتروني' : 'Your email address'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: `${spacing.sm} ${spacing.md}`,
            border: `1px solid ${royalColors.bgRefined}`,
            borderRadius: '2px',
            fontSize: '14px',
            fontFamily: 'inherit',
            direction: ar ? 'rtl' : 'ltr',
            textAlign: ar ? 'right' : 'left',
            transition: transitions.base,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = royalColors.hashemiteGold;
            e.currentTarget.style.boxShadow = `0 0 0 3px rgba(212, 175, 55, 0.1)`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = royalColors.bgRefined;
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading || submitted}
        style={{
          padding: `${spacing.sm} ${spacing.lg}`,
          backgroundColor: submitted ? '#4caf50' : royalColors.hashemiteGold,
          color: royalColors.deepRoyal,
          border: 'none',
          borderRadius: '2px',
          fontWeight: '700',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          cursor: loading || submitted ? 'not-allowed' : 'pointer',
          transition: transitions.base,
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (!loading && !submitted) {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f4c430';
          }
        }}
        onMouseLeave={(e) => {
          if (!loading && !submitted) {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = royalColors.hashemiteGold;
          }
        }}
      >
        {loading ? '...' : submitted ? '✓ Subscribed' : (ar ? 'اشترك' : 'Subscribe')}
      </button>
    </form>
  );
}
