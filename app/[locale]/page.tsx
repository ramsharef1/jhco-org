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

  // Color palette for program cards
  const programColors = [
    '#FF6B6B', // Coral Red
    '#1abc9c', // Teal
    '#27AE60', // Green
    '#F39C12', // Gold/Orange
    '#E74C3C', // Red
    '#9B59B6', // Purple
  ];

  // Color palette for stat cards
  const statColors = [
    { bg: '#FF6B6B', icon: '👨‍👩‍👧‍👦' }, // Coral
    { bg: '#1abc9c', icon: '🌍' }, // Teal
    { bg: '#27AE60', icon: '❤️' }, // Green
    { bg: '#F39C12', icon: '⭐' }, // Gold
  ];

  const statData = [
    { value: '75K+', label: 'Families Served', icon: '👨‍👩‍👧‍👦' },
    { value: '30+', label: 'Countries', icon: '🌍' },
    { value: '2.5K+', label: 'Volunteers', icon: '❤️' },
    { value: '100%', label: 'Verified Impact', icon: '⭐' },
  ];

  const whyReasons = [
    {
      icon: '🔍',
      title: 'Transparent Operations',
      description: 'Every donation tracked, every impact verified. Full accountability to our donors.',
    },
    {
      icon: '👑',
      title: 'Royal Heritage, Human Heart',
      description: 'Guided by principles of dignity and respect for every person we serve.',
    },
    {
      icon: '🤝',
      title: 'Community-Led Change',
      description: 'Working alongside local partners who know their communities best.',
    },
    {
      icon: '✓',
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
      {/* 1. HERO SECTION - Warm, Emotional */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428 0%, #1abc9c 100%)', padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Royal seal accent in corner */}
        <div style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '48px', opacity: 0.15 }}>
          👑
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left: Emotional Headline & CTAs */}
            <div>
              <h1 style={{ fontSize: '56px', fontWeight: '300', lineHeight: '1.2', color: 'white', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                Serving Humanity with Dignity
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.95)', marginBottom: '32px', lineHeight: '1.8', maxWidth: '500px' }}>
                Across 30+ countries | 75K+ families | One mission
              </p>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <Link
                  href={`${base}/get-involved/donate`}
                  style={{
                    padding: '16px 40px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#c0392b';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(231, 76, 60, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#e74c3c';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
                  }}
                >
                  Donate Now
                </Link>
                <Link
                  href={`${base}/get-involved/volunteer`}
                  style={{
                    padding: '16px 40px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid white',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
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
                  aspectRatio: '1',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
                  <div style={{ fontSize: '80px', marginBottom: '16px' }}>🌟</div>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>Real people, Real impact</p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', opacity: 0.8 }}>Hero image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS SECTION - Visual, Colorful, Animated */}
      <section style={{ backgroundColor: '#f5f1e6', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Our Global Impact
            </h2>
            <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Making measurable difference in communities around the world
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {statData.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: statColors[idx].bg,
                  padding: '48px 32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{stat.icon}</div>
                <p style={{ fontSize: '48px', fontWeight: '700', margin: '0 0 12px 0', fontFamily: 'Georgia, serif' }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '16px', fontWeight: '600', margin: 0, opacity: 0.95 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED STORY SECTION - Emotional Connection */}
      <section style={{ backgroundColor: 'white', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left: Story Image */}
            <div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: '#f5e6d3',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px',
                  border: '4px solid #e8e4db',
                  overflow: 'hidden',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ opacity: 0.6 }}>👩‍👧‍👦</div>
                  <p style={{ margin: '16px 0 0 0', fontSize: '14px', color: '#999' }}>Beneficiary story image</p>
                </div>
              </div>
            </div>

            {/* Right: Story Quote & Details */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '14px', color: '#e74c3c', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  Their Story
                </p>
                <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif', lineHeight: '1.3' }}>
                  "JHCO gave me hope when I had lost it all."
                </h2>
              </div>

              <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
                Amira's family faced severe hardship when her father became ill. Through JHCO's healthcare program, not only did her father receive treatment, but Amira was enrolled in our education initiative. Today, she's in secondary school and dreams of becoming a teacher to help others in her community.
              </p>

              <div style={{ backgroundColor: '#f5f1e6', padding: '32px', borderRadius: '12px', borderLeft: '4px solid #e74c3c', marginBottom: '32px' }}>
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#333', margin: 0, lineHeight: '1.8' }}>
                  "I remember the day the JHCO team came to our village. They didn't just bring medicine—they brought belief in us. My family felt valued for the first time in years."
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1428', margin: '0 0 4px 0' }}>Amira Hassan</p>
                <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>Cairo, Egypt • Healthcare & Education Program</p>
              </div>

              <Link
                href={`${base}/stories`}
                style={{
                  padding: '14px 32px',
                  backgroundColor: 'white',
                  color: '#e74c3c',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: '2px solid #e74c3c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e74c3c';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#e74c3c';
                }}
              >
                Read More Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS GRID - Color-Coded, Visual */}
      <section style={{ backgroundColor: '#f5f1e6', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Our Programs
            </h2>
            <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Six transformative initiatives changing lives across healthcare, education, and livelihood
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
            {programs.slice(0, 6).map((program, idx) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    borderTop: `6px solid ${programColors[idx]}`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  {/* Program Image Placeholder with Color */}
                  <div
                    style={{
                      position: 'relative',
                      height: '200px',
                      background: `linear-gradient(135deg, ${programColors[idx]}, ${programColors[idx]}dd)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '64px',
                    }}
                  >
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                      {idx === 0 && '❤️'}
                      {idx === 1 && '📚'}
                      {idx === 2 && '💼'}
                      {idx === 3 && '🏥'}
                      {idx === 4 && '🤝'}
                      {idx === 5 && '🌱'}
                    </div>
                  </div>

                  {/* Program Content */}
                  <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                      {ar ? program.nameAr : program.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                      {ar ? program.descriptionAr : program.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: `2px solid ${programColors[idx]}20` }}>
                      <p style={{ fontSize: '12px', color: programColors[idx], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        {ar ? program.impactAr : program.impact}
                      </p>
                      <span style={{ fontSize: '16px', color: programColors[idx] }}>→</span>
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
                padding: '14px 40px',
                backgroundColor: '#e74c3c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#c0392b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#e74c3c';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY JHCO SECTION - Trust & Authority */}
      <section style={{ backgroundColor: 'white', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Why Choose JHCO?
            </h2>
            <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Trusted by donors and communities for our integrity, expertise, and genuine commitment
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {whyReasons.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f5f1e6',
                  padding: '40px 32px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e4db';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f1e6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{reason.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0a1428', marginBottom: '12px' }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION - Prominent & Warm */}
      <section style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            Make a Difference Today
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.95)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.8' }}>
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
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '48px 32px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{cta.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                    {cta.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                    {cta.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL - Social Proof */}
      <section style={{ backgroundColor: '#f5f1e6', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Voices of Impact
            </h2>
            <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
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
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '2px solid #e8e4db',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '24px', color: '#e74c3c', marginBottom: '16px' }}>
                    "
                  </div>
                  <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8', fontStyle: 'italic', margin: 0 }}>
                    {testimonial.quote}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '24px', borderTop: '2px solid #e8e4db' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#e74c3c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '14px',
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1428', margin: 0 }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION - Engagement */}
      <section style={{ backgroundColor: 'white', padding: '96px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
            Stay Updated
          </h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '48px', lineHeight: '1.8' }}>
            Get stories of impact, program updates, and ways to help delivered to your inbox
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '14px',
                border: '2px solid #e8e4db',
                borderRadius: '8px',
                fontFamily: 'inherit',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#e74c3c';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(231,76,60,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e8e4db';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              style={{
                padding: '14px 40px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#c0392b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#e74c3c';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 9. FOOTER - Warm & Professional */}
      <footer style={{ backgroundColor: '#0a1428', color: 'white', padding: '80px 32px 40px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', marginBottom: '60px' }}>
            {/* Brand Column */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: '#d4af37' }}>
                JHCO
              </h4>
              <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.8', marginBottom: '24px' }}>
                Serving humanity with dignity across 30+ countries
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['f', 't', 'i', 'l'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '16px',
                      fontWeight: '700',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e74c3c';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: '#d4af37' }}>
                Programs
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Healthcare', 'Education', 'Livelihood', 'Water & Sanitation'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <Link
                      href="#"
                      style={{
                        color: '#aaa',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#d4af37';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#aaa';
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: '#d4af37' }}>
                Get Involved
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Donate', 'Volunteer', 'Partner', 'Career'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <Link
                      href="#"
                      style={{
                        color: '#aaa',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#d4af37';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#aaa';
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: '#d4af37' }}>
                About
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Our Mission', 'Our Team', 'Contact Us', 'Privacy Policy'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <Link
                      href="#"
                      style={{
                        color: '#aaa',
                        textDecoration: 'none',
                        fontSize: '13px',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#d4af37';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#aaa';
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
          <div style={{ borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#aaa', margin: 0 }}>
              Copyright 2026 JHCO. Serving Humanity with Dignity.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
