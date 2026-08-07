'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname() || '';
  const ar = pathname.startsWith('/ar');
  const base = ar ? '/ar' : '/en';

  return (
    <section
      dir={ar ? 'rtl' : 'ltr'}
      style={{
        background: 'linear-gradient(135deg, #0a1428, #142850)',
        padding: '120px 32px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div style={{ maxWidth: '700px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '160px',
            fontWeight: '300',
            margin: '0 0 8px 0',
            color: '#d4af37',
            fontFamily: "'Georgia', 'Garamond', serif",
            lineHeight: '1',
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '16px',
            fontFamily: "'Georgia', 'Garamond', serif",
          }}
        >
          {ar ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>

        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '48px',
            lineHeight: '1.8',
          }}
        >
          {ar
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد نُقلت أو حُذفت.'
            : "Sorry, the page you're looking for doesn't exist. It may have been moved or deleted."}
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link
            href={base}
            style={{
              padding: '16px 40px',
              backgroundColor: '#d4af37',
              color: '#0a1428',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {ar ? 'الصفحة الرئيسية' : 'Go Home'}
          </Link>

          <Link
            href={`${base}/programs`}
            style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              border: '2px solid #d4af37',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {ar ? 'البرامج' : 'Our Programs'}
          </Link>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '32px' }}>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: `${base}/impact`, label: ar ? 'التأثير' : 'Impact' },
              { href: `${base}/get-involved/donate`, label: ar ? 'تبرع' : 'Donate' },
              { href: `${base}/get-involved/volunteer`, label: ar ? 'تطوع' : 'Volunteer' },
              { href: `${base}/news`, label: ar ? 'الأخبار' : 'News' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#d4af37';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
