'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function RegistrationSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get event registration details from query parameters
  const eventName = searchParams.get('eventName') || (ar ? 'حدث JHCO' : 'JHCO Event');
  const eventDate = searchParams.get('eventDate') || '2024-09-15';
  const eventTime = searchParams.get('eventTime') || '10:00 AM';
  const eventLocation = searchParams.get('eventLocation') || (ar ? 'موقعنا الرئيسي' : 'Main Location');
  const attendeeName = searchParams.get('name') || (ar ? 'الحضور الكريم' : 'Valued Attendee');
  const confirmationNumber = searchParams.get('confirmationId') || 'CONF' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const ticketType = searchParams.get('ticketType') || (ar ? 'عام' : 'General');
  const attendeeEmail = searchParams.get('email') || '';

  // Color scheme matching site design
  const colors = {
    primaryNavy: '#1a3a52',
    textNavy: '#2c4563',
    lightGrey: '#f5f5f5',
    white: '#ffffff',
    textGrey: '#555555',
    accentGold: '#d4af37',
    successGreen: '#27ae60',
    border: '#e0e0e0',
  };

  // Next steps after registration
  const nextSteps = [
    {
      number: ar ? '١' : '1',
      title: ar ? 'تأكيد البريد الإلكتروني' : 'Email Confirmation',
      description: ar ? 'سيتم إرسال رقم التأكيد وتفاصيل الحدث إلى بريدك الإلكتروني' : 'Your confirmation and event details have been sent to your email',
    },
    {
      number: ar ? '٢' : '2',
      title: ar ? 'إضافة إلى التقويم' : 'Add to Calendar',
      description: ar ? 'انقر على الرابط في البريد لإضافة الحدث تلقائياً إلى تقويمك' : 'Click the link in your email to add the event to your calendar',
    },
    {
      number: ar ? '٣' : '3',
      title: ar ? 'الوصول المبكر' : 'Early Access',
      description: ar ? 'كن من أوائل الحضور بالوصول 15 دقيقة قبل بدء الحدث' : 'Arrive 15 minutes early for registration and networking',
    },
  ];

  // Share options
  const shareOptions = [
    {
      platform: ar ? 'فيسبوك' : 'Facebook',
      icon: 'f',
      url: `https://facebook.com/sharer/sharer.php?u=jhco.org${base}/events`,
    },
    {
      platform: ar ? 'تويتر' : 'Twitter',
      icon: '𝕏',
      url: `https://twitter.com/intent/tweet?text=I just registered for a JHCO event&url=jhco.org${base}`,
    },
    {
      platform: ar ? 'لينكدإن' : 'LinkedIn',
      icon: 'in',
      url: `https://linkedin.com/sharing/share-offsite/?url=jhco.org${base}/events`,
    },
  ];

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (ar) {
      return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      {/* Success Hero Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: colors.primaryNavy,
          padding: '140px 32px 100px',
          position: 'relative',
          overflow: 'hidden',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Success Checkmark Animation */}
          <div
            style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 40px',
              borderRadius: '50%',
              backgroundColor: colors.successGreen,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              color: 'white',
              fontWeight: 'bold',
              animation: 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            ✓
          </div>

          <h1
            style={{
              fontSize: '60px',
              fontWeight: '400',
              color: 'white',
              marginBottom: '20px',
              fontFamily: "'Georgia', 'Garamond', serif",
              lineHeight: '1.2',
            }}
          >
            {ar ? 'تم تأكيد تسجيلك' : 'Registration Confirmed'}
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '40px',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto 40px',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'شكراً لتسجيلك في الحدث. نتطلع لرؤيتك هناك!'
              : 'Thank you for registering! We look forward to seeing you at the event.'}
          </p>

          {/* Event Details Card */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '40px',
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ textAlign: 'center', minWidth: '200px' }}>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 12px 0',
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                }}
              >
                {ar ? 'اسم الحدث' : 'Event'}
              </p>
              <p
                style={{
                  fontSize: '18px',
                  color: 'white',
                  margin: 0,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  fontWeight: '300',
                }}
              >
                {eventName}
              </p>
            </div>

            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

            <div style={{ textAlign: 'center', minWidth: '200px' }}>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 12px 0',
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                }}
              >
                {ar ? 'التاريخ والوقت' : 'Date & Time'}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'white',
                  margin: 0,
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                }}
              >
                {formatDate(eventDate)}
                <br />
                {eventTime}
              </p>
            </div>

            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

            <div style={{ textAlign: 'center', minWidth: '200px' }}>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 12px 0',
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                }}
              >
                {ar ? 'رقم التأكيد' : 'Confirmation #'}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '1px',
                }}
              >
                {confirmationNumber}
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scale-in {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Registration Details Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'تفاصيل التسجيل' : 'Registration Details'}
            </h2>
          </div>

          <div
            style={{
              backgroundColor: colors.white,
              padding: '48px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              {/* Left column */}
              <div>
                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.textGrey,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      margin: '0 0 8px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {ar ? 'اسم الحاضر' : 'Attendee Name'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {attendeeName}
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.textGrey,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      margin: '0 0 8px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {ar ? 'البريد الإلكتروني' : 'Email Address'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {attendeeEmail || (ar ? 'لم يتم تحديده' : 'Not provided')}
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div>
                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.textGrey,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      margin: '0 0 8px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {ar ? 'الموقع' : 'Location'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {eventLocation}
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.textGrey,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      margin: '0 0 8px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {ar ? 'نوع التذكرة' : 'Ticket Type'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {ticketType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.white,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'الخطوات التالية' : 'What Happens Next'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {nextSteps.map((step, idx) => (
              <div key={idx} style={{ textAlign: ar ? 'right' : 'left' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: colors.primaryNavy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    lineHeight: '1.7',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: colors.primaryNavy,
              marginBottom: '20px',
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {ar ? 'شارك الحدث' : 'Share the Event'}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: colors.textGrey,
              marginBottom: '56px',
              lineHeight: '1.8',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'ادعُ أصدقاءك للانضمام إلى هذا الحدث المهم. شارك التفاصيل على وسائل التواصل الاجتماعي.'
              : 'Invite your friends to join this important event. Share on social media.'}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {shareOptions.map((option, idx) => (
              <a
                key={idx}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '8px',
                  backgroundColor: colors.primaryNavy,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: `2px solid ${colors.primaryNavy}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = colors.primaryNavy;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primaryNavy;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={option.platform}
              >
                {option.icon}
              </a>
            ))}
          </div>

          <button
            style={{
              padding: '14px 44px',
              backgroundColor: colors.primaryNavy,
              color: 'white',
              border: `2px solid ${colors.primaryNavy}`,
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
            onClick={() => {
              const text = ar ? `تم تسجيلي للحدث: ${eventName}` : `I registered for: ${eventName}`;
              if (navigator.share) {
                navigator.share({
                  title: eventName,
                  text: text,
                  url: window.location.href,
                });
              } else {
                alert(ar ? 'تم نسخ الرابط' : 'Link copied to clipboard');
              }
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(26, 58, 82, 0.9)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = colors.primaryNavy;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {ar ? 'مشاركة' : 'Share'}
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: colors.primaryNavy,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: 'white',
              marginBottom: '20px',
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {ar ? 'تعرف على المزيد' : 'Learn More'}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '60px',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto 60px',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'اكتشف المزيد عن برامجنا والأحداث القادمة.'
              : 'Discover more about our programs and upcoming events.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '36px', marginBottom: '60px' }}>
            {[
              {
                title: ar ? 'جميع الأحداث' : 'All Events',
                description: ar ? 'استعرض قائمة الأحداث القادمة' : 'Browse upcoming events',
                link: `${base}/events`,
              },
              {
                title: ar ? 'برامجنا' : 'Our Programs',
                description: ar ? 'تعرف على برامجنا الخاصة' : 'Learn about our programs',
                link: `${base}/programs`,
              },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    padding: '52px 40px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '12px',
                      fontFamily: "'Georgia', 'Garamond', serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.8)',
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href={base}
            style={{
              padding: '16px 48px',
              backgroundColor: 'white',
              color: colors.primaryNavy,
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '13px',
              display: 'inline-block',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              border: `2px solid white`,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = colors.primaryNavy;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {ar ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: colors.primaryNavy,
              marginBottom: '20px',
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {ar ? 'ابقَ على اطلاع' : 'Stay Updated'}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: colors.textGrey,
              marginBottom: '56px',
              lineHeight: '1.8',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'تلقَّ إشعارات عن الأحداث والبرامج الجديدة في نشرتنا الإخبارية.'
              : 'Get notified about upcoming events and programs. Subscribe to our newsletter.'}
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexDirection: ar ? 'row-reverse' : 'row' }}>
            <input
              type="email"
              placeholder={ar ? 'عنوان بريدك الإلكتروني' : 'Your email address'}
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '14px',
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: colors.white,
              } as React.CSSProperties}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.primaryNavy;
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 58, 82, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              style={{
                padding: '14px 44px',
                backgroundColor: colors.primaryNavy,
                color: 'white',
                border: `2px solid ${colors.primaryNavy}`,
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                flexShrink: 0,
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 58, 82, 0.9)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryNavy;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {ar ? 'اشترك' : 'Subscribe'}
            </button>
          </div>

          <p
            style={{
              fontSize: '12px',
              color: colors.textGrey,
              margin: 0,
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar ? 'نحترم خصوصيتك. ألغِ الاشتراك في أي وقت.' : 'We respect your privacy. Unsubscribe at any time.'}
          </p>
        </div>
      </section>
    </>
  );
}
