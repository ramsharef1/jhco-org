import Link from 'next/link';
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: 'linear-gradient(135deg, #0a1428, #142850)',
          padding: '160px 32px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '700px', textAlign: 'center' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1
              style={{
                fontSize: '200px',
                fontWeight: '300',
                margin: '0 0 20px 0',
                color: '#d4af37',
                fontFamily: "'Georgia', 'Garamond', serif",
                lineHeight: '1',
              }}
            >
              404
            </h1>
            <div
              style={{
                fontSize: '120px',
                marginBottom: '30px',
                animation: 'pulse 2s infinite',
              }}
            >
              🔍
            </div>
          </div>

          <h2
            style={{
              fontSize: '48px',
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
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            {ar
              ? 'عذرا، الصفحة التي تبحث عنها غير موجودة. قد تكون قد تم نقلها أو حذفها.'
              : "Sorry, the page you're looking for doesn't exist. It may have been moved or deleted."}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            <Link
              href={base}
              style={{
                padding: '16px 32px',
                backgroundColor: '#d4af37',
                color: '#0a1428',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '700',
                borderRadius: '4px',
                transition: 'all 0.3s',
                display: 'inline-block',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {ar ? 'الصفحة الرئيسية' : 'Go Home'}
            </Link>

            <Link
              href={`${base}/programs`}
              style={{
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#d4af37',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '700',
                border: '2px solid #d4af37',
                borderRadius: '4px',
                transition: 'all 0.3s',
                display: 'inline-block',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {ar ? 'البرامج' : 'Our Programs'}
            </Link>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '40px' }}>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '20px',
              }}
            >
              {ar ? 'اكتشف المزيد من محتويات الموقع:' : 'Explore more of our site:'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {[
                { href: `${base}/impact`, label: ar ? 'التأثير' : 'Impact' },
                {
                  href: `${base}/get-involved/donate`,
                  label: ar ? 'تبرع' : 'Donate',
                },
                {
                  href: `${base}/get-involved/volunteer`,
                  label: ar ? 'تطوع' : 'Volunteer',
                },
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

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
}
