/**
 * JHCO Design System - Usage Examples
 *
 * This file demonstrates how to use the new Warm Design Components
 * across different sections of the JHCO website.
 *
 * Copy, modify, and integrate these examples into your pages!
 */

import React from 'react';
import {
  WarmCard,
  EmotionalButton,
  ImpactStat,
  ImpactStatGrid,
  StoryCard,
  CtaSection,
} from './WarmDesignComponents';
import { royalColors, gradients, spacing } from '@/lib/royalDesign';

// ============================================================================
// EXAMPLE 1: PROGRAMS SECTION
// ============================================================================

export const ProgramsSectionExample = () => {
  const programs = [
    {
      title: 'Healthcare Access',
      description: 'Providing quality healthcare services to underserved communities',
      icon: '🏥',
      color: 'teal' as const,
      action: 'Learn More',
      actionHref: '/programs/healthcare',
    },
    {
      title: 'Education & Skills',
      description: 'Empowering youth through quality education and vocational training',
      icon: '📚',
      color: 'gold' as const,
      action: 'Learn More',
      actionHref: '/programs/education',
    },
    {
      title: 'Crisis Response',
      description: 'Rapid humanitarian response to emergencies and natural disasters',
      icon: '🆘',
      color: 'red' as const,
      action: 'Learn More',
      actionHref: '/programs/crisis',
    },
    {
      title: 'Women Empowerment',
      description: 'Supporting women and girls through economic and social initiatives',
      icon: '👩',
      color: 'green' as const,
      action: 'Learn More',
      actionHref: '/programs/women',
    },
  ];

  return (
    <section style={{ padding: `${spacing.xxxl} ${spacing.lg}`, backgroundColor: royalColors.bgRefined }}>
      <h2
        style={{
          fontSize: '42px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: spacing.xxl,
          color: royalColors.darkNavy,
          fontFamily: '"Merriweather", Georgia, serif',
        }}
      >
        Our Programs
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: spacing.xl,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {programs.map((program, index) => (
          <WarmCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// EXAMPLE 2: IMPACT STATISTICS SECTION
// ============================================================================

export const ImpactSectionExample = () => {
  const impactStats = [
    {
      number: '2.5M',
      label: 'People Reached',
      icon: '👥',
      color: 'teal' as const,
      trend: 'up' as const,
    },
    {
      number: '150+',
      label: 'Programs Active',
      icon: '🎯',
      color: 'gold' as const,
      trend: 'up' as const,
    },
    {
      number: '45',
      label: 'Countries Served',
      icon: '🌍',
      color: 'green' as const,
      trend: 'stable' as const,
    },
    {
      number: '$500M+',
      label: 'Support Delivered',
      icon: '💰',
      color: 'red' as const,
      trend: 'up' as const,
    },
  ];

  return (
    <section style={{ padding: `${spacing.xxxl} ${spacing.lg}` }}>
      <h2
        style={{
          fontSize: '42px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: spacing.xl,
          color: royalColors.darkNavy,
          fontFamily: '"Merriweather", Georgia, serif',
        }}
      >
        Our Impact
      </h2>

      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          color: royalColors.textSecondary,
          marginBottom: spacing.xxl,
          maxWidth: '600px',
          margin: `0 auto ${spacing.xxl}`,
        }}
      >
        Real numbers that represent real lives changed and communities transformed
      </p>

      <ImpactStatGrid stats={impactStats} columns={4} />
    </section>
  );
};

// ============================================================================
// EXAMPLE 3: EMOTIONAL BUTTONS SHOWCASE
// ============================================================================

export const ButtonsShowcaseExample = () => {
  return (
    <section
      style={{
        padding: `${spacing.xxxl} ${spacing.lg}`,
        backgroundColor: royalColors.bgRefined,
      }}
    >
      <h2
        style={{
          fontSize: '42px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: spacing.xl,
          color: royalColors.darkNavy,
          fontFamily: '"Merriweather", Georgia, serif',
        }}
      >
        Button Variations
      </h2>

      <div
        style={{
          display: 'flex',
          gap: spacing.lg,
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: royalColors.darkGrayText, marginBottom: spacing.sm }}>
            Primary (Gold)
          </p>
          <EmotionalButton
            label="Explore Programs"
            variant="primary"
            onClick={() => alert('Clicked!')}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: royalColors.darkGrayText, marginBottom: spacing.sm }}>
            Compassion (Red)
          </p>
          <EmotionalButton
            label="Donate Now"
            variant="compassion"
            icon="❤️"
            onClick={() => alert('Clicked!')}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: royalColors.darkGrayText, marginBottom: spacing.sm }}>
            Hopeful (Teal)
          </p>
          <EmotionalButton
            label="Join Program"
            variant="hopeful"
            icon="🌟"
            onClick={() => alert('Clicked!')}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: royalColors.darkGrayText, marginBottom: spacing.sm }}>
            Royal (Navy)
          </p>
          <EmotionalButton
            label="View Reports"
            variant="royal"
            onClick={() => alert('Clicked!')}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: royalColors.darkGrayText, marginBottom: spacing.sm }}>
            Secondary
          </p>
          <EmotionalButton
            label="Learn More"
            variant="secondary"
            onClick={() => alert('Clicked!')}
          />
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// EXAMPLE 4: SUCCESS STORIES SECTION
// ============================================================================

export const StoriesSectionExample = () => {
  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      quote: 'This program completely changed my life. I went from having nothing to building a sustainable future for my family.',
      author: 'Amira Hassan',
      role: 'Healthcare Beneficiary',
      country: 'Jordan',
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop',
      quote: 'The education program gave me the skills I needed to get a job and support my community.',
      author: 'Mohammed Al-Rashid',
      role: 'Youth Program Graduate',
      country: 'Syria',
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=300&fit=crop',
      quote: 'Thanks to the support, I was able to start my own business and employ 5 other women from my village.',
      author: 'Fatima Al-Mansour',
      role: 'Women Entrepreneur',
      country: 'Palestine',
    },
  ];

  return (
    <section
      style={{
        padding: `${spacing.xxxl} ${spacing.lg}`,
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, #1a2540 100%)`,
        color: '#ffffff',
      }}
    >
      <h2
        style={{
          fontSize: '42px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: spacing.xl,
          color: '#ffffff',
          fontFamily: '"Merriweather", Georgia, serif',
        }}
      >
        Stories of Impact
      </h2>

      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          color: royalColors.ivoryBg,
          marginBottom: spacing.xxl,
          maxWidth: '600px',
          margin: `0 auto ${spacing.xxl}`,
        }}
      >
        Real people. Real transformations. Real hope.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: spacing.xl,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// EXAMPLE 5: DONATION CTA SECTION
// ============================================================================

export const DonationCtaSectionExample = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `${spacing.xl}` }}>
      <CtaSection
        title="Make a Difference Today"
        description="Your support directly helps families in crisis. Every contribution, no matter the size, transforms lives and builds hope."
        primaryCta={{ label: 'Donate Now', href: '/donate' }}
        secondaryCta={{ label: 'Learn About Programs', href: '/programs' }}
        background="gradient"
        backgroundValue={gradients.goldToWarm}
        alignment="center"
      />
    </div>
  );
};

// ============================================================================
// EXAMPLE 6: CALL TO ACTION WITH CUSTOM STYLING
// ============================================================================

export const CustomCtaSectionExample = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `${spacing.xl}` }}>
      <CtaSection
        title="Join Our Team"
        description="We're looking for passionate individuals to help us make a difference. Explore career opportunities and make impact."
        primaryCta={{ label: 'View Careers', href: '/careers' }}
        background="gradient"
        backgroundValue={gradients.hopeful}
        alignment="center"
      />
    </div>
  );
};

// ============================================================================
// EXAMPLE 7: FULL PAGE LAYOUT COMPOSITION
// ============================================================================

export const FullPageLayoutExample = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: gradients.royalToWarm,
          color: '#ffffff',
          padding: `${spacing.xxxl} ${spacing.lg}`,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 700,
            marginBottom: spacing.lg,
            fontFamily: '"Merriweather", Georgia, serif',
          }}
        >
          Welcome to JHCO
        </h1>
        <p style={{ fontSize: '18px', lineHeight: 1.6, marginBottom: spacing.xl }}>
          Professional Excellence & Human Compassion Working Together
        </p>
        <EmotionalButton
          label="Explore Our Work"
          variant="primary"
          size="lg"
          onClick={() => alert('Navigating...')}
        />
      </section>

      {/* Programs Section */}
      <ProgramsSectionExample />

      {/* Impact Section */}
      <ImpactSectionExample />

      {/* Stories Section */}
      <StoriesSectionExample />

      {/* Donation CTA */}
      <DonationCtaSectionExample />
    </div>
  );
};

// ============================================================================
// EXPORT ALL EXAMPLES
// ============================================================================

export default {
  ProgramsSectionExample,
  ImpactSectionExample,
  ButtonsShowcaseExample,
  StoriesSectionExample,
  DonationCtaSectionExample,
  CustomCtaSectionExample,
  FullPageLayoutExample,
};
