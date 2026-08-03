'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getDictionary, type Locale } from '@/lib/i18n';
import { programs, impactStats, news } from '@/lib/mockData';
import Link from 'next/link';

// Helper function to create placeholder images with text overlays
const createPlaceholder = (width: number, height: number, title: string, description: string): string => {
  const bgColor = '#f5f5f5';
  const textColor = '#1a3a52';

  // Escape special characters for SVG
  const escapeSvg = (str: string) => str.replace(/[&<>"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[char] || char));

  // Calculate text size based on image dimensions
  const titleSize = Math.max(16, width / 20);
  const descSize = Math.max(12, width / 28);
  const lineHeight = descSize * 1.5;

  // Split description into lines for better readability
  const maxCharsPerLine = Math.floor(width / (descSize * 0.6));
  const descLines = description.split('\n').flatMap(line => {
    const words = line.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length > maxCharsPerLine) {
        if (currentLine) lines.push(currentLine.trim());
        currentLine = word;
      } else {
        currentLine += (currentLine ? ' ' : '') + word;
      }
    });
    if (currentLine) lines.push(currentLine.trim());

    return lines;
  });

  // Calculate total content height
  const titleY = height * 0.15;
  const descStartY = titleY + titleSize + 30;
  const totalTextHeight = titleSize + 30 + (descLines.length * lineHeight) + 20;
  const startY = Math.max(height * 0.1, (height - totalTextHeight) / 2);

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="${width / 2}" y="${startY + titleSize}" font-family="Arial, sans-serif" font-size="${titleSize}" font-weight="bold" fill="${textColor}" text-anchor="middle">
        ${escapeSvg(title)}
      </text>
      ${descLines.map((line, idx) => `
        <text x="${width / 2}" y="${startY + titleSize + 30 + (idx * lineHeight)}" font-family="Arial, sans-serif" font-size="${descSize}" fill="${textColor}" text-anchor="middle">
          ${escapeSvg(line)}
        </text>
      `).join('')}
      <text x="${width / 2}" y="${height - 20}" font-family="Arial, sans-serif" font-size="${Math.max(11, width / 40)}" fill="#999" text-anchor="middle">
        ${width}x${height}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

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

            {/* Right: Hero Image */}
            <div style={{ position: 'relative' }}>
              <img
                src={createPlaceholder(600, 400, 'Hero Image: Community Unity', 'Should show: Diverse group of people coming together, humanitarian action, hope')}
                alt="Hero Image placeholder: Community Unity"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: '0px',
                  border: `1px solid rgba(255,255,255,0.2)`,
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS SECTION - Royal Impact Display */}
      <section style={{ backgroundColor: colors.lightGrey, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
              Our Global Impact
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Measurable change across communities and lives worldwide
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {statData.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  padding: '56px 40px',
                  borderRadius: '0px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  border: `1px solid ${colors.border}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <p style={{ fontSize: '48px', fontWeight: '300', margin: '0 0 16px 0', fontFamily: "'Georgia', 'Garamond', serif", color: colors.primaryNavy }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: colors.textGrey, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED STORY SECTION - Royal Formal Story */}
      <section style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '100px', alignItems: 'center' }}>
            {/* Left: Story Image */}
            <div style={{ position: 'relative' }}>
              <img
                src={createPlaceholder(400, 450, 'Featured Story Image: Beneficiary Portrait', 'Should show: Dignified portrait of a person/family member, conveying hope and resilience')}
                alt="Featured Story Image placeholder: Beneficiary Portrait"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '0.9',
                  objectFit: 'cover',
                  borderRadius: '0px',
                  border: `1px solid ${colors.border}`,
                  display: 'block',
                }}
              />
            </div>

            {/* Right: Story Quote & Details */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '12px', color: colors.textGrey, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 20px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  REAL IMPACT
                </p>
                <h2 style={{ fontSize: '44px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '0', fontFamily: "'Georgia', 'Garamond', serif", lineHeight: '1.2' }}>
                  "JHCO gave me hope when I had lost it all."
                </h2>
              </div>

              <p style={{ fontSize: '16px', color: colors.textGrey, lineHeight: '1.8', marginBottom: '44px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Amira's family faced severe hardship when her father became ill. Through JHCO's healthcare program, not only did her father receive treatment, but Amira was enrolled in our education initiative. Today, she's in secondary school and dreams of becoming a teacher to help others in her community.
              </p>

              <div style={{ backgroundColor: colors.lightGrey, padding: '36px 36px', borderRadius: '0px', borderLeft: `3px solid ${colors.primaryNavy}`, marginBottom: '44px' }}>
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: colors.textNavy, margin: 0, lineHeight: '1.8', fontFamily: "'Georgia', 'Garamond', serif" }}>
                  "I remember the day the JHCO team came to our village. They didn't just bring medicine—they brought belief in us. My family felt valued for the first time in years."
                </p>
              </div>

              <div style={{ marginBottom: '44px' }}>
                <p style={{ fontSize: '15px', fontWeight: '700', color: colors.primaryNavy, margin: '0 0 6px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>Amira Hassan</p>
                <p style={{ fontSize: '13px', color: colors.textGrey, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>Cairo, Egypt • Healthcare & Education Program</p>
              </div>

              <Link
                href={`${base}/stories`}
                style={{
                  padding: '14px 40px',
                  backgroundColor: colors.white,
                  color: colors.primaryNavy,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: `2px solid ${colors.primaryNavy}`,
                  borderRadius: '0px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-block',
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
                  e.currentTarget.style.backgroundColor = colors.white;
                  e.currentTarget.style.color = colors.primaryNavy;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS GRID - Royal Program Cards */}
      <section style={{ backgroundColor: colors.lightGrey, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
              Our Programs
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Six transformative initiatives changing lives across healthcare, education, and livelihood
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px', marginBottom: '60px' }}>
            {programs.slice(0, 6).map((program, idx) => (
              <Link key={program.id} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: '0px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                  }}
                >
                  {/* Program Image */}
                  <img
                    src={
                      program.id === 1
                        ? createPlaceholder(600, 300, 'Gaza Aid Program Image', 'Should show: Humanitarian assistance, medical aid, or community care')
                        : program.id === 2
                        ? createPlaceholder(600, 300, 'Healthcare Program: Amputees', 'Should show: Prosthetic limbs, rehabilitation, medical care')
                        : program.id === 3
                        ? createPlaceholder(600, 300, 'Clothing Bank Program', 'Should show: Clothing distribution, community care, dignity')
                        : program.id === 4
                        ? createPlaceholder(600, 300, 'Education Program', 'Should show: Students, learning, classroom, education services')
                        : program.id === 5
                        ? createPlaceholder(600, 300, 'Medical Clinics Network', 'Should show: Doctor, patient consultation, medical services')
                        : createPlaceholder(600, 300, 'Livelihood & Skills Training', 'Should show: Vocational training, skills development, economic empowerment')
                    }
                    alt={ar ? program.nameAr : program.name}
                    style={{
                      position: 'relative',
                      height: '240px',
                      width: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                  />

                  {/* Program Content */}
                  <div style={{ flex: 1, padding: '40px 36px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.primaryNavy, marginBottom: '14px', lineHeight: '1.4', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {ar ? program.nameAr : program.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: colors.textGrey, lineHeight: '1.7', flex: 1, marginBottom: '24px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {ar ? program.descriptionAr : program.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: `1px solid ${colors.border}` }}>
                      <p style={{ fontSize: '12px', color: colors.textGrey, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                        {ar ? program.impactAr : program.impact}
                      </p>
                      <span style={{ fontSize: '16px', color: colors.textGrey, fontWeight: '400' }}>→</span>
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
                padding: '16px 48px',
                backgroundColor: colors.primaryNavy,
                color: colors.white,
                textDecoration: 'none',
                borderRadius: '0px',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-block',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${colors.primaryNavy}`,
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
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY JHCO SECTION - Royal Why Trust Us */}
      <section style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
              Why Choose JHCO?
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Trusted by donors and communities for our integrity, expertise, and genuine commitment
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {whyReasons.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.lightGrey,
                  padding: '48px 40px',
                  borderRadius: '0px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: `1px solid ${colors.border}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.white;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.lightGrey;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '0px', backgroundColor: colors.primaryNavy, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '24px' }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.primaryNavy, marginBottom: '16px', textTransform: 'none', letterSpacing: '0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '13px', color: colors.textGrey, lineHeight: '1.7', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION - Royal Make Difference */}
      <section style={{ background: colors.primaryNavy, padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '52px', fontWeight: '400', color: 'white', marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
            Make a Difference Today
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto 60px', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            Choose how you want to contribute to our mission of serving humanity with dignity
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px' }}>
            {[
              {
                icon: null,
                title: 'Donate',
                description: 'One gift. Many lives transformed.',
                link: `${base}/get-involved/donate`,
              },
              {
                icon: null,
                title: 'Volunteer',
                description: 'Give your time. Make lasting impact.',
                link: `${base}/get-involved/volunteer`,
              },
              {
                icon: null,
                title: 'Partner',
                description: 'Collaborate for greater good.',
                link: `${base}/get-involved/partner`,
              },
            ].map((cta, idx) => (
              <Link key={idx} href={cta.link} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    padding: '52px 40px',
                    borderRadius: '0px',
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
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px', fontFamily: "'Georgia', 'Garamond', serif" }}>
                    {cta.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                    {cta.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL - Royal Voices of Impact */}
      <section style={{ backgroundColor: colors.lightGrey, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
              Voices of Impact
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
              Hear from donors, volunteers, and beneficiaries whose lives have been touched
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px' }}>
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  padding: '52px 44px',
                  borderRadius: '0px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  border: `1px solid ${colors.border}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '32px', color: colors.textGrey, marginBottom: '16px', opacity: 0.4, fontFamily: "'Georgia', 'Garamond', serif" }}>
                    "
                  </div>
                  <p style={{ fontSize: '15px', color: colors.textNavy, lineHeight: '1.8', fontStyle: 'italic', margin: 0, fontFamily: "'Georgia', 'Garamond', serif" }}>
                    {testimonial.quote}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '32px', borderTop: `1px solid ${colors.border}` }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '0px',
                      backgroundColor: colors.primaryNavy,
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
                    <p style={{ fontSize: '14px', fontWeight: '700', color: colors.primaryNavy, margin: '0 0 4px 0', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: '12px', color: colors.textGrey, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION - Royal Stay Updated */}
      <section style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif", letterSpacing: '0' }}>
            Stay Updated
          </h2>
          <p style={{ fontSize: '16px', color: colors.textGrey, marginBottom: '56px', lineHeight: '1.8', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            Get stories of impact, program updates, and ways to help delivered to your inbox
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '14px 20px',
                fontSize: '14px',
                border: `1px solid ${colors.border}`,
                borderRadius: '0px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: colors.white,
              } as React.CSSProperties}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.primaryNavy;
                e.currentTarget.style.backgroundColor = colors.white;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.backgroundColor = colors.white;
              }}
            />
            <button
              style={{
                padding: '14px 44px',
                backgroundColor: colors.primaryNavy,
                color: 'white',
                border: `2px solid ${colors.primaryNavy}`,
                borderRadius: '0px',
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
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '12px', color: colors.textGrey, margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif" }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 9. FOOTER - Royal Professional Footer */}
      <footer style={{ backgroundColor: colors.primaryNavy, color: 'white', padding: '100px 32px 50px', borderTop: `1px solid rgba(255,255,255,0.1)` }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', marginBottom: '80px' }}>
            {/* Brand Column */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', color: 'white', fontFamily: "'Inter', '-apple-system', sans-serif", letterSpacing: '0.5px' }}>
                JHCO
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '32px', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
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
                      borderRadius: '0px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '16px',
                      fontWeight: '600',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
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
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '28px', color: 'rgba(255,255,255,0.9)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Programs
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Healthcare', 'Education', 'Livelihood', 'Water & Sanitation'].map((item) => (
                  <li key={item} style={{ marginBottom: '16px' }}>
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
                        e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
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
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '28px', color: 'rgba(255,255,255,0.9)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                Get Involved
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Donate', 'Volunteer', 'Partner', 'Career'].map((item) => (
                  <li key={item} style={{ marginBottom: '16px' }}>
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
                        e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
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
              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '28px', color: 'rgba(255,255,255,0.9)', fontFamily: "'Inter', '-apple-system', sans-serif" }}>
                About
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Our Mission', 'Our Team', 'Contact Us', 'Privacy Policy'].map((item) => (
                  <li key={item} style={{ marginBottom: '16px' }}>
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
                        e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
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
          <div style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: '48px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0, fontFamily: "'Inter', '-apple-system', sans-serif", letterSpacing: '0.5px' }}>
              Copyright 2026 JHCO. Serving Humanity with Dignity.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
