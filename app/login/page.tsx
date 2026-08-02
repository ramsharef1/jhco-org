'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { royalColors, transitions, spacing } from '@/lib/royalDesign';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Cookie is set by API, redirect to home
        router.push('/en');
      } else {
        setError('Invalid password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 100%)`,
          padding: spacing.lg,
        }}>
          <div style={{
            width: '100%',
            maxWidth: '420px',
            padding: spacing.xxl + ' ' + spacing.xl,
            background: royalColors.ivoryBg,
            borderRadius: '12px',
            boxShadow: `0 10px 40px rgba(10, 20, 40, 0.3), 0 0 60px rgba(26, 188, 156, 0.15)`,
            border: `2px solid ${royalColors.hashemiteGold}40`,
            transition: transitions.base,
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: spacing.xxxl }}>
              <img
                src="/jhco-logo.webp"
                alt="JHCO Logo"
                style={{
                  width: '120px',
                  height: '120px',
                  marginBottom: spacing.lg,
                  filter: 'drop-shadow(0 4px 12px rgba(232, 185, 35, 0.2))',
                }}
              />
              <h1 style={{
                fontSize: '32px',
                color: royalColors.darkNavy,
                margin: '0 0 8px 0',
                fontFamily: '"Merriweather", Georgia, serif',
                fontWeight: '700',
                letterSpacing: '2px',
              }}>
                JHCO
              </h1>
              <p style={{
                fontSize: '12px',
                color: royalColors.hashemiteGold,
                margin: '0',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '700',
              }}>
                Royal Charity Organization
              </p>
              <div style={{
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${royalColors.hashemiteGold}, transparent)`,
                margin: spacing.lg + ' 0 0 0',
              }}></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: spacing.xl }}>
                <label htmlFor="password" style={{
                  display: 'block',
                  fontSize: '13px',
                  color: royalColors.darkNavy,
                  fontWeight: '700',
                  marginBottom: spacing.md,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Access Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '14px',
                    border: `2px solid ${royalColors.hashemiteGold}`,
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    color: royalColors.darkNavy,
                    background: '#ffffff',
                    transition: transitions.base,
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = royalColors.compassionTeal;
                    e.currentTarget.style.boxShadow = `0 0 0 3px rgba(26, 188, 156, 0.1)`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = royalColors.hashemiteGold;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div style={{
                  padding: spacing.md,
                  marginBottom: spacing.xl,
                  background: 'rgba(231, 76, 60, 0.1)',
                  border: `2px solid ${royalColors.charityRed}`,
                  borderRadius: '8px',
                  color: royalColors.redDark,
                  fontSize: '13px',
                  fontWeight: '500',
                  transition: transitions.base,
                }}>
                  ⚠️ {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !password}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: royalColors.charityRed,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: loading || !password ? 'not-allowed' : 'pointer',
                  transition: transitions.base,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  opacity: loading || !password ? 0.7 : 1,
                  boxShadow: `0 4px 12px rgba(231, 76, 60, 0.3)`,
                }}
                onMouseEnter={(e) => {
                  if (!loading && password) {
                    e.currentTarget.style.background = royalColors.redLight;
                    e.currentTarget.style.boxShadow = `0 8px 20px rgba(231, 76, 60, 0.4)`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading && password) {
                    e.currentTarget.style.background = royalColors.charityRed;
                    e.currentTarget.style.boxShadow = `0 4px 12px rgba(231, 76, 60, 0.3)`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? '⏳ Verifying...' : '🔓 Access Website'}
              </button>
            </form>

            {/* Footer */}
            <div style={{
              marginTop: spacing.xxxl,
              paddingTop: spacing.xl,
              borderTop: `2px solid ${royalColors.hashemiteGold}40`,
              textAlign: 'center',
              fontSize: '12px',
              color: royalColors.textSecondary,
            }}>
              <p style={{ margin: '0', fontWeight: '600' }}>
                🛡️ Password Protected
              </p>
              <p style={{ margin: spacing.sm + ' 0 0 0', fontSize: '11px', color: royalColors.darkGrayText }}>
                Authorized users only
              </p>
            </div>
          </div>
        </div>
  );
}
