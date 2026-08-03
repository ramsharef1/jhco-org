'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get donation details from query parameters
  const donationAmount = searchParams.get('amount') || '50';
  const donorName = searchParams.get('name') || (ar ? 'المتبرع الكريم' : 'Valued Donor');
  const donationType = searchParams.get('type') || 'one-time';
  const transactionId = searchParams.get('txId') || 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();

  // Colors matching the site design
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

  // Impact metrics based on donation amount
  const getImpactMetrics = (amount: number) => {
    return [
      {
        label: ar ? 'وجبات يتم توفيرها' : 'Meals Provided',
        value: Math.floor(amount / 2),
        description: ar ? 'للعائلات في برامجنا' : 'for families in our programs',
      },
      {
        label: ar ? 'فحوصات طبية' : 'Medical Checkups',
        value: Math.floor(amount / 25),
        description: ar ? 'في عياداتنا' : 'at our clinics',
      },
      {
        label: ar ? 'ساعات تعليم' : 'Educational Hours',
        value: Math.floor(amount / 5),
        description: ar ? 'للطلاب' : 'for students',
      },
      {
        label: ar ? 'أشخاص مستفيدين' : 'Lives Touched',
        value: Math.ceil(amount / 10),
        description: ar ? 'من خلال برامجنا' : 'through our programs',
      },
    ];
  };

  const impactMetrics = getImpactMetrics(parseInt(donationAmount));

  // Next steps
  const nextSteps = [
    {
      number: ar ? '١' : '1',
      title: ar ? 'تأكيد البريد الإلكتروني' : 'Email Confirmation',
      description: ar ? 'سنرسل لك تأكيداً مفصلاً برقم معاملتك وإيصال الدعم' : 'Check your email for detailed confirmation and tax receipt',
    },
    {
      number: ar ? '٢' : '2',
      title: ar ? 'تقرير التأثير' : 'Impact Report',
      description: ar ? 'ستتلقى تقرير شامل عن كيفية استخدام تبرعك' : 'Receive a comprehensive report on how your donation is used',
    },
    {
      number: ar ? '٣' : '3',
      title: ar ? 'البقاء على اطلاع' : 'Stay Updated',
      description: ar ? 'انضم إلى نشرتنا الإخبارية لمتابعة التحديثات' : 'Join our newsletter for regular impact updates',
    },
  ];

  // Share options for social media
  const shareOptions = [
    {
      platform: ar ? 'فيسبوك' : 'Facebook',
      icon: 'f',
      url: `https://facebook.com/sharer/sharer.php?u=jhco.org${base}`,
    },
    {
      platform: ar ? 'تويتر' : 'Twitter',
      icon: '𝕏',
      url: `https://twitter.com/intent/tweet?text=I just donated to JHCO&url=jhco.org${base}`,
    },
    {
      platform: ar ? 'لينكدإن' : 'LinkedIn',
      icon: 'in',
      url: `https://linkedin.com/sharing/share-offsite/?url=jhco.org${base}`,
    },
  ];

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
            {ar ? 'شكراً لتبرعك' : 'Thank You for Your Donation'}
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
              ? 'تبرعك يساهم في إحداث تغيير حقيقي في حياة الآلاف من الأشخاص حول العالم.'
              : 'Your generous donation is making a real difference in the lives of thousands around the world.'}
          </p>

          {/* Donation Summary Card */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '32px',
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ textAlign: 'center' }}>
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
                {ar ? 'المبلغ' : 'Amount'}
              </p>
              <p
                style={{
                  fontSize: '36px',
                  color: 'white',
                  margin: 0,
                  fontFamily: "'Georgia', 'Garamond', serif",
                  fontWeight: '300',
                }}
              >
                ${donationAmount}
              </p>
            </div>

            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

            <div style={{ textAlign: 'center' }}>
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
                {ar ? 'نوع التبرع' : 'Donation Type'}
              </p>
              <p
                style={{
                  fontSize: '18px',
                  color: 'white',
                  margin: 0,
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}
              >
                {donationType === 'monthly' ? (ar ? 'شهري' : 'Monthly') : ar ? 'لمرة واحدة' : 'One-Time'}
              </p>
            </div>

            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

            <div style={{ textAlign: 'center' }}>
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
                {ar ? 'معرّف المعاملة' : 'Transaction ID'}
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
                {transactionId}
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

      {/* Impact Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
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
              {ar ? 'تأثير تبرعك' : 'Your Impact Today'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'إليك كيف سيساهم تبرعك في التغيير الإيجابي:'
                : 'Here\'s how your donation makes an immediate impact:'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  padding: '48px 32px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: `1px solid ${colors.border}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <p
                  style={{
                    fontSize: '44px',
                    fontWeight: '300',
                    color: colors.primaryNavy,
                    margin: '0 0 16px 0',
                    fontFamily: "'Georgia', 'Garamond', serif",
                  }}
                >
                  {metric.value}+
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: '0 0 12px 0',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {metric.label}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: colors.textGrey,
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {metric.description}
                </p>
              </div>
            ))}
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

      {/* Story/Testimonial Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: colors.primaryNavy,
              marginBottom: '60px',
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {ar ? 'قصة تأثير حقيقية' : 'Real Impact Story'}
          </h2>

          <div
            style={{
              backgroundColor: colors.white,
              padding: '56px 48px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: `1px solid ${colors.border}`,
            }}
          >
            <p
              style={{
                fontSize: '18px',
                fontStyle: 'italic',
                color: colors.textNavy,
                lineHeight: '1.9',
                marginBottom: '32px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar
                ? '"تبرعات المتبرعين مثلك ساعدتنا على توفير التعليم والرعاية الصحية لأكثر من 1000 طفل هذا العام. كل دولار يصل مباشرة إلى المجتمعات التي تحتاجها."'
                : '"Donor support like yours helped us provide education and healthcare to over 1,000 children this year. Every dollar reaches the communities that need it most."'}
            </p>

            <div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: colors.primaryNavy,
                  margin: '0 0 8px 0',
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                }}
              >
                {ar ? 'أمنية الخليلي' : 'Amnia Al-Khalili'}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: colors.textGrey,
                  margin: 0,
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                }}
              >
                {ar ? 'مدير برامج JHCO' : 'JHCO Programs Director'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.white,
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
            {ar ? 'شارك صدقتك' : 'Share Your Giving'}
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
              ? 'ألهم الآخرين للانضمام إلى حركة التغيير. شارك تبرعك على وسائل التواصل الاجتماعي.'
              : 'Inspire others to join the movement for change. Share your giving on social media.'}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* CTA Section - More Ways to Help */}
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
            {ar ? 'طرق أخرى للمساعدة' : 'More Ways to Help'}
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
              ? 'بالإضافة إلى التبرعات المالية، هناك طرق أخرى قيمة للمساهمة في مهمتنا.'
              : 'Beyond financial donations, there are other meaningful ways to support our mission.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px' }}>
            {[
              {
                title: ar ? 'التطوع' : 'Volunteer',
                description: ar
                  ? 'ساهم بمهاراتك وخبرتك في برامجنا'
                  : 'Contribute your skills to our programs',
                link: `${base}/get-involved/volunteer`,
              },
              {
                title: ar ? 'الشراكة' : 'Partner',
                description: ar
                  ? 'تعاون مع JHCO لتحقيق تأثير أكبر'
                  : 'Collaborate with us for greater impact',
                link: `${base}/get-involved/partner`,
              },
              {
                title: ar ? 'تعرف على برامجنا' : 'Learn More',
                description: ar
                  ? 'اكتشف تأثيرنا وقصصنا الملهمة'
                  : 'Discover our impact and stories',
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

          <div style={{ marginTop: '80px' }}>
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
              ? 'تلقَّ تقارير تأثير منتظمة وتحديثات برامجنا مباشرة في بريدك الإلكتروني.'
              : 'Receive regular impact reports and program updates directly in your inbox.'}
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
