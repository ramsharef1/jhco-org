'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <html lang="en">
      <head>
        <title>JHCO - Access</title>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a1428 0%, #3d2a52 100%)',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            padding: '48px 32px',
            background: '#f9f7f4',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(10, 20, 40, 0.3)',
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👑</div>
              <h1 style={{
                fontSize: '28px',
                color: '#0a1428',
                margin: '0 0 8px 0',
                fontFamily: 'Georgia, serif',
                fontWeight: '400',
              }}>
                JHCO
              </h1>
              <p style={{
                fontSize: '12px',
                color: '#d4af37',
                margin: '0',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '600',
              }}>
                Royal Charity Organization
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="password" style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#0a1428',
                  fontWeight: '600',
                  marginBottom: '8px',
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
                    border: '1px solid #d4af37',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div style={{
                  padding: '12px',
                  marginBottom: '24px',
                  background: '#ffebee',
                  border: '1px solid #c41e1e',
                  borderRadius: '4px',
                  color: '#8b1a1a',
                  fontSize: '13px',
                }}>
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !password}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: '#0a1428',
                  color: '#d4af37',
                  border: '2px solid #d4af37',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  opacity: loading || !password ? 0.6 : 1,
                }}
              >
                {loading ? 'Verifying...' : 'Access Website'}
              </button>
            </form>

            {/* Footer */}
            <div style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #e8e4db',
              textAlign: 'center',
              fontSize: '12px',
              color: '#6b6b6b',
            }}>
              <p style={{ margin: '0' }}>
                🛡️ This site is password protected
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '11px' }}>
                Authorized users only
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
