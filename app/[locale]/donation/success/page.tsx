'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DonationSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Get donation details from query parameters
  const donationAmount = searchParams.get('amount') || '50';
  const donorName = searchParams.get('name') || (ar ? 'المتبرع الكريم' : 'Valued Donor');
  const donationType = searchParams.get('type') || 'one-time';
  const email = searchParams.get('email') || (ar ? 'your@email.com' : 'your@email.com');
  const transactionId = searchParams.get('txId') || 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const donationDate = searchParams.get('date') || new Date().toLocaleDateString();
  const paymentMethod = searchParams.get('method') || (ar ? 'بطاقة ائتمان' : 'Credit Card');

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
              ? 'تبرعك تم استلامه بنجاح ويساهم في إحداث تغيير حقيقي في حياة الآلاف من الأشخاص حول العالم.'
              : 'Your donation has been successfully received and is making a real difference in the lives of thousands around the world.'}
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

      {/* Confirmation Details Section */}
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
              {ar ? 'تفاصيل التبرع' : 'Donation Details'}
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
                ? 'أرسلنا تأكيداً مفصلاً إلى بريدك الإلكتروني. احتفظ بهذا للرجوع إليه في المستقبل.'
                : 'We\'ve sent a detailed confirmation to your email. Keep this for your records.'}
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: '8px',
              padding: '56px 48px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              {/* Left Column */}
              <div>
                <div style={{ marginBottom: '48px' }}>
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
                    {ar ? 'اسم المتبرع' : 'Donor Name'}
                  </p>
                  <p
                    style={{
                      fontSize: '18px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {donorName}
                  </p>
                </div>

                <div style={{ marginBottom: '48px' }}>
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
                    {email}
                  </p>
                </div>

                <div style={{ marginBottom: '0' }}>
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
                    {ar ? 'تاريخ التبرع' : 'Donation Date'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {donationDate}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ marginBottom: '48px' }}>
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
                    {ar ? 'مبلغ التبرع' : 'Donation Amount'}
                  </p>
                  <p
                    style={{
                      fontSize: '28px',
                      color: colors.successGreen,
                      margin: 0,
                      fontFamily: "'Georgia', 'Garamond', serif",
                      fontWeight: '600',
                    }}
                  >
                    ${donationAmount}
                  </p>
                </div>

                <div style={{ marginBottom: '48px' }}>
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
                    {ar ? 'طريقة الدفع' : 'Payment Method'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
                      margin: 0,
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {paymentMethod}
                  </p>
                </div>

                <div style={{ marginBottom: '0' }}>
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
                    {ar ? 'رقم المعاملة' : 'Transaction Number'}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: colors.textNavy,
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

            {/* Action Buttons */}
            <div style={{ marginTop: '56px', borderTop: `1px solid ${colors.border}`, paddingTop: '40px', display: 'flex', gap: '20px', flexDirection: ar ? 'row-reverse' : 'row' }}>
              <button
                onClick={() => window.print()}
                style={{
                  padding: '14px 32px',
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
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(26, 58, 82, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primaryNavy;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {ar ? 'طباعة' : 'Print'}
              </button>

              <button
                onClick={() => {
                  const text = `Donation Confirmation\n\nDonor Name: ${donorName}\nAmount: $${donationAmount}\nType: ${donationType}\nDate: ${donationDate}\nTransaction ID: ${transactionId}`;
                  const element = document.createElement('a');
                  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                  element.setAttribute('download', 'donation-receipt.txt');
                  element.style.display = 'none';
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
                style={{
                  padding: '14px 32px',
                  backgroundColor: 'transparent',
                  color: colors.primaryNavy,
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
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primaryNavy;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.primaryNavy;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {ar ? 'تحميل' : 'Download'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
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
            {[
              {
                number: ar ? '١' : '1',
                title: ar ? 'تأكيد البريد الإلكتروني' : 'Email Confirmation',
                description: ar
                  ? 'سنرسل لك تأكيداً مفصلاً برقم معاملتك وإيصال الدعم للحفظ'
                  : 'Check your email for a detailed confirmation and tax receipt',
              },
              {
                number: ar ? '٢' : '2',
                title: ar ? 'تقرير التأثير' : 'Impact Report',
                description: ar
                  ? 'ستتلقى تقرير شامل عن كيفية استخدام تبرعك في برامجنا'
                  : 'Receive updates on how your donation is making a direct impact',
              },
              {
                number: ar ? '٣' : '3',
                title: ar ? 'البقاء على اطلاع' : 'Stay Connected',
                description: ar
                  ? 'انضم إلى نشرتنا الإخبارية لمتابعة التحديثات والقصص الملهمة'
                  : 'Join our newsletter for regular updates and inspiring stories',
              },
            ].map((step, idx) => (
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

      {/* Tax Deduction Information */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '80px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: '8px',
              padding: '48px',
              border: `2px solid ${colors.primaryNavy}`,
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar ? 'معلومات الخصم الضريبي' : 'Tax Deduction Information'}
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: colors.textGrey,
                lineHeight: '1.8',
                marginBottom: '20px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'JHCO هي منظمة خيرية مرخصة ومعتمدة. تبرعك قد يكون معفى من الضرائب حسب القوانين المحلية. سيتم إرسال إيصالك الضريبي مع البريد الإلكتروني للتأكيد.'
                : 'JHCO is a registered charitable organization. Your donation may be tax-deductible. Your official tax receipt will be sent with your confirmation email.'}
            </p>

            <p
              style={{
                fontSize: '13px',
                color: colors.textGrey,
                margin: 0,
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'تحقق من السلطات الضريبية المحلية للحصول على معلومات محددة عن فوائد الخصم الضريبي.'
                : 'Consult with your local tax authorities for specific information about tax benefits.'}
            </p>
          </div>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px', marginBottom: '60px' }}>
            {[
              {
                title: ar ? 'التطوع' : 'Volunteer',
                description: ar ? 'ساهم بمهاراتك وخبرتك' : 'Contribute your skills',
                link: `${base}/get-involved`,
              },
              {
                title: ar ? 'الشراكة' : 'Partner with Us',
                description: ar ? 'تعاون لتحقيق تأثير أكبر' : 'Collaborate for greater impact',
                link: `${base}/contact`,
              },
              {
                title: ar ? 'تعرف على برامجنا' : 'Learn More',
                description: ar ? 'اكتشف قصصنا وتأثيرنا' : 'Discover our programs',
                link: `${base}/impact`,
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
    </>
  );
}
