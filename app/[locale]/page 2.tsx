'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getDictionary, type Locale } from '@/lib/i18n';
import { programs, impactStats, news } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Royal Jordanian color palette - Navy, White, Grey
  const colors = {
    primaryNavy: '#1a3a52',
    textNavy: '#2c4563',
    lightGrey: '#f5f5f5',
    white: '#ffffff',
    textGrey: '#555555',
    accentGold: '#d4af37',
    border: '#e0e0e0',
  };

  // Program accents - subtle navy/grey
  const programAccents = [
    colors.textNavy,
    colors.textNavy,
    colors.textNavy,
    colors.textNavy,
    colors.textNavy,
    colors.textNavy,
  ];

  // Impact stat configuration
  const statData = [
    { value: '75K+', label: 'Families Served', icon: null },
    { value: '30+', label: 'Countries', icon: null },
    { value: '2.5K+', label: 'Volunteers', icon: null },
    { value: '100%', label: 'Verified Impact', icon: null },
  ];

  const whyReasons = [
    {
      icon: null,
      title: 'Transparent Operations',
      description: 'Every donation tracked, every impact verified. Full accountability to our donors.',
    },
    {
      icon: null,
      title: 'Royal Heritage, Human Heart',
      description: 'Guided by principles of dignity and respect for every person we serve.',
    },
    {
      icon: null,
      title: 'Community-Led Change',
      description: 'Working alongside local partners who know their communities best.',
    },
    {
      icon: null,
      title: 'Proven Track Record',
      description: 'Decades of sustainable impact across healthcare, education, and livelihood.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Cairo, Egypt',
      role: 'Donor',
      quote: 'JHCO gave my family a way to give back meaningfully. The transparency and heart behind their work is unmatched.',
      avatar: 'SA',
    },
    {
      name: 'James Martin',
      location: 'London, UK',
      role: 'Volunteer',
      quote: 'Volunteering with JHCO transformed how I see the world. The relationships we build last a lifetime.',
      avatar: 'JM',
    },
    {
      name: 'Fatima Hassan',
      location: 'Amman, Jordan',
      role: 'Program Beneficiary',
      quote: 'JHCO believed in me when I needed it most. Now I\'m helping others in my community.',
      avatar: 'FH',
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION - Royal Formal */}
      <section style={{ background: colors.primaryNavy, padding: '160px 32px 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            {/* Left: Headline & CTAs */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '3px', margin: '0 0 20px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  SERVING HUMANITY
                </p>
                <h1 style={{ fontSize: '72px', fontWeight: '400', lineHeight: '1.2', color: 'white', marginBottom: '0', fontFamily: "'Georgia', 'Garamond', serif", textTransform: 'none', letterSpacing: '0' }}>
                  With Dignity
                </h1>
              </div>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '56px', lineHeight: '1.8', maxWidth: '540px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Across 30+ countries, serving 75,000+ families. One mission, countless lives transformed.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link
                  href={`${base}/get-involved/donate`}
                  style={{
                    padding: '16px 48px',
                    backgroundColor: colors.white,
                    color: colors.primaryNavy,
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '700',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: `2px solid ${colors.white}`,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primaryNavy;
                    e.currentTarget.style.color = colors.white;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = colors.white;
                    e.currentTarget.style.color = colors.primaryNavy;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Donate Now
                </Link>
                <Link
                  href={`${base}/get-involved/volunteer`}
                  style={{
                    padding: '16px 48px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '700',
                    borderRadius: '0px',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: `2px solid white`,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Volunteer
                </Link>
              </div>
            </div>

            {/* Right: Hero Image Placeholder */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid rgba(255,255,255,0.2)`,
                  overflow: 'hidden',
                }}
              >
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', '-apple-system', sans-serif", letterSpacing: '1px', textTransform: 'uppercase' }}>Professional</div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', opacity: 0.3, fontFamily: "'Inter', '-apple-system', sans-serif" }}>Photography Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS SECTION - Modern Impact Display */}
      <section style={{ backgroundColor: colors.lightBg, padding: '110px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', color: colors.navy, marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              Our Global Impact
            </h2>
            <p style={{ fontSize: '16px', color: colors.textSecondary, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Measurable change across communities and lives worldwide
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
            {statData.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  padding: '52px 36px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: 'none',
                  borderTop: `4px solid ${programColors[idx]}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ fontSize: '44px', marginBottom: '20px' }}>{stat.icon}</div>
                <p style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 12px 0', fontFamily: "'Georgia', 'Garamond', serif", color: programColors[idx] }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', margin: 0, color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED STORY SECTION - Modern Testimonial */}
      <section style={{ backgroundColor: 'white', padding: '110px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '90px', alignItems: 'center' }}>
            {/* Left: Story Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '0.95',
                  backgroundColor: `linear-gradient(135deg, ${colors.teal}15 0%, ${colors.coral}15 100%)`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px',
                  border: 'none',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ opacity: 0.8 }}>👩‍👧‍👦</div>
                  <p style={{ margin: '16px 0 0 0', fontSize: '13px', color: colors.textSecondary }}>Beneficiary story image</p>
                </div>
              </div>
            </div>

            {/* Right: Story Quote & Details */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '12px', color: colors.teal, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', margin: '0 0 16px 0' }}>
                  REAL IMPACT
                </p>
                <h2 style={{ fontSize: '38px', fontWeight: '700', color: colors.navy, marginBottom: '0', fontFamily: "'Georgia', 'Garamond', serif", lineHeight: '1.15' }}>
                  "JHCO gave me hope when I had lost it all."
                </h2>
              </div>

              <p style={{ fontSize: '15px', color: colors.textSecondary, lineHeight: '1.8', marginBottom: '40px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Amira's family faced severe hardship when her father became ill. Through JHCO's healthcare program, not only did her father receive treatment, but Amira was enrolled in our education initiative. Today, she's in secondary school and dreams of becoming a teacher to help others in her community.
              </p>

              <div style={{ backgroundColor: colors.lightBg, padding: '32px 28px', borderRadius: '8px', borderLeft: `3px solid ${colors.coral}`, marginBottom: '40px' }}>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: colors.darkText, margin: 0, lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  "I remember the day the JHCO team came to our village. They didn't just bring medicine—they brought belief in us. My family felt valued for the first time in years."
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '15px', fontWeight: '700', color: colors.darkText, margin: '0 0 6px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>Amira Hassan</p>
                <p style={{ fontSize: '13px', color: colors.textSecondary, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>Cairo, Egypt • Healthcare & Education Program</p>
              </div>

              <Link
                href={`${base}/stories`}
                style={{
                  padding: '14px 36px',
                  backgroundColor: 'white',
                  color: colors.teal,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: `2px solid ${colors.teal}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.teal;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = colors.teal;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Read More Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS GRID - Modern Program Cards */}
      <section style={{ backgroundColor: colors.lightBg, padding: '110px 32px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', color: colors.navy, marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              Our Programs
            </h2>
            <p style={{ fontSize: '16px', color: colors.textSecondary, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Six transformative initiatives changing lives across healthcare, education, and livelihood
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '56px' }}>
            {programs.slice(0, 6).map((program, idx) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  {/* Program Image Placeholder with Color */}
                  <div
                    style={{
                      position: 'relative',
                      height: '220px',
                      background: `linear-gradient(135deg, ${programColors[idx]}, ${programColors[idx]}e0)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '64px',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div style={{ textAlign: 'center', opacity: 0.9 }}>
                      {idx === 0 && '❤️'}
                      {idx === 1 && '📚'}
                      {idx === 2 && '💼'}
                      {idx === 3 && '🏥'}
                      {idx === 4 && '🤝'}
                      {idx === 5 && '🌱'}
                    </div>
                  </div>

                  {/* Program Content */}
                  <div style={{ flex: 1, padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.darkText, marginBottom: '12px', lineHeight: '1.4', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {ar ? program.nameAr : program.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.7', flex: 1, marginBottom: '20px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {ar ? program.descriptionAr : program.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: `1px solid ${programColors[idx]}25` }}>
                      <p style={{ fontSize: '12px', color: programColors[idx], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        {ar ? program.impactAr : program.impact}
                      </p>
                      <span style={{ fontSize: '18px', color: programColors[idx], fontWeight: '600' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href={`${base}/programs`}
              style={{
                padding: '16px 44px',
                backgroundColor: colors.navy,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-block',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                border: 'none',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0f2439';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.navy;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
              }}
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY JHCO SECTION - Why Trust Us */}
      <section style={{ backgroundColor: 'white', padding: '110px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', color: colors.navy, marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              Why Choose JHCO?
            </h2>
            <p style={{ fontSize: '16px', color: colors.textSecondary, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Trusted by donors and communities for our integrity, expertise, and genuine commitment
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
            {whyReasons.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.lightBg,
                  padding: '44px 36px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.lightBg;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{reason.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: colors.navy, marginBottom: '14px', textTransform: 'none', letterSpacing: '0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '13px', color: colors.textSecondary, lineHeight: '1.7', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION - Make Difference */}
      <section style={{ background: `linear-gradient(135deg, ${colors.coral} 0%, ${colors.navy} 100%)`, padding: '110px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative accent circles */}
        <div style={{ position: 'absolute', top: '-40px', right: '10%', width: '300px', height: '300px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-60px', left: '5%', width: '280px', height: '280px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: 'white', marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
            Make a Difference Today
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto 56px', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            Choose how you want to contribute to our mission of serving humanity with dignity
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                icon: '💝',
                title: 'Donate',
                description: 'One gift. Many lives transformed.',
                link: `${base}/get-involved/donate`,
              },
              {
                icon: '🤲',
                title: 'Volunteer',
                description: 'Give your time. Make lasting impact.',
                link: `${base}/get-involved/volunteer`,
              },
              {
                icon: '🏢',
                title: 'Partner',
                description: 'Collaborate for greater good.',
                link: `${base}/get-involved/partner`,
              },
            ].map((cta, idx) => (
              <Link key={idx} href={cta.link} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    padding: '48px 36px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{cta.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                    {cta.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                    {cta.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL - Voices of Impact */}
      <section style={{ backgroundColor: colors.lightBg, padding: '110px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: '700', color: colors.navy, marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              Voices of Impact
            </h2>
            <p style={{ fontSize: '16px', color: colors.textSecondary, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Hear from donors, volunteers, and beneficiaries whose lives have been touched
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  padding: '48px 40px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  border: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '28px', color: colors.teal, marginBottom: '16px', opacity: 0.7 }}>
                    "
                  </div>
                  <p style={{ fontSize: '15px', color: colors.darkText, lineHeight: '1.8', fontStyle: 'italic', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                    {testimonial.quote}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '28px', borderTop: `1px solid ${colors.teal}20` }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: colors.teal,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: colors.darkText, margin: '0 0 4px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION - Stay Updated */}
      <section style={{ backgroundColor: 'white', padding: '110px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', color: colors.navy, marginBottom: '16px', fontFamily: "'Georgia', 'Garamond', serif" }}>
            Stay Updated
          </h2>
          <p style={{ fontSize: '16px', color: colors.textSecondary, marginBottom: '52px', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            Get stories of impact, program updates, and ways to help delivered to your inbox
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '14px',
                border: `2px solid ${colors.teal}30`,
                borderRadius: '6px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: colors.lightBg,
              } as React.CSSProperties}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.teal;
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.teal}15`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = `${colors.teal}30`;
                e.currentTarget.style.backgroundColor = colors.lightBg;
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              style={{
                padding: '14px 44px',
                backgroundColor: colors.teal,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                flexShrink: 0,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0a7a6d';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.teal;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
              }}
            >
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 9. FOOTER - Professional Footer */}
      <footer style={{ backgroundColor: colors.navy, color: 'white', padding: '90px 32px 50px', borderTop: `1px solid ${colors.teal}40` }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '56px', marginBottom: '70px' }}>
            {/* Brand Column */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: 'white', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                JHCO
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', marginBottom: '28px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Serving humanity with dignity across 30+ countries
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['f', 't', 'i', 'l'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = colors.teal;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Column */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '28px', color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Programs
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Healthcare', 'Education', 'Livelihood', 'Water & Sanitation'].map((item) => (
                  <li key={item} style={{ marginBottom: '14px' }}>
                    <Link
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.25s ease',
                        fontFamily: "'Inter', '-apple-system', sans-serif",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = colors.teal;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved Column */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '28px', color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Get Involved
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Donate', 'Volunteer', 'Partner', 'Career'].map((item) => (
                  <li key={item} style={{ marginBottom: '14px' }}>
                    <Link
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.25s ease',
                        fontFamily: "'Inter', '-apple-system', sans-serif",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = colors.teal;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '28px', color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                About
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Our Mission', 'Our Team', 'Contact Us', 'Privacy Policy'].map((item) => (
                  <li key={item} style={{ marginBottom: '14px' }}>
                    <Link
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.25s ease',
                        fontFamily: "'Inter', '-apple-system', sans-serif",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = colors.teal;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: '50px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Copyright 2026 JHCO. Serving Humanity with Dignity.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
