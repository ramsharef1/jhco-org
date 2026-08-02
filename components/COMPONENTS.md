# JHCO Warm Charitable Component Library

A comprehensive collection of warm, emotional, and engaging React components designed for JHCO's royal yet human brand identity.

## Philosophy

Each component balances:
- **Royal Authority**: Professional, trustworthy, official
- **Human Warmth**: Emotional, approachable, inviting
- **Charitable Mission**: Impact-focused, action-oriented, hopeful

All components use the `royalDesign` system for consistent colors, spacing, typography, and animations.

---

## Components Overview

### 1. **WarmCard** (`WarmCard.tsx`)
Inviting content card with warm backgrounds and soft styling.

**Props:**
- `title` (string, required) - Card title
- `description` (string, optional) - Subtitle/description
- `icon` (string, optional) - Emoji or icon
- `color` ('gold' | 'teal' | 'coral' | 'green', default: 'gold') - Accent color
- `image` (string, optional) - Image URL
- `actionLabel` (string, optional) - Call-to-action text
- `actionHref` (string, optional) - CTA link

**Usage:**
```tsx
import { WarmCard } from '@/components';

<WarmCard
  title="Healthcare Program"
  description="Bringing medical care to underserved communities"
  icon="🏥"
  color="teal"
  image="/healthcare.jpg"
  actionLabel="Learn More"
  actionHref="/programs/healthcare"
/>
```

**Use Cases:** Programs, services, offerings, featured initiatives

---

### 2. **EmotionalButton** (`EmotionalButton.tsx`)
Engaging CTA button with multiple variants and sizes.

**Props:**
- `label` (string, required) - Button text
- `variant` ('primary' | 'compassion' | 'hopeful' | 'secondary', default: 'primary')
- `size` ('sm' | 'md' | 'lg', default: 'md')
- `icon` (string, optional) - Emoji
- `onClick` (function, optional) - Click handler
- `href` (string, optional) - Link destination
- `disabled` (boolean, default: false)
- `fullWidth` (boolean, default: false)

**Usage:**
```tsx
<EmotionalButton
  label="Donate Now"
  variant="compassion"
  size="lg"
  icon="💝"
  href="/donate"
/>
```

**Use Cases:** Donate, volunteer, learn more, get involved

---

### 3. **ImpactStat** (`ImpactStat.tsx`)
Visual statistic display with animated counters and colorful backgrounds.

**Props:**
- `number` (string | number, required) - Stat value
- `label` (string, required) - Stat label
- `icon` (string, optional) - Display icon
- `color` ('gold' | 'teal' | 'coral' | 'green' | 'red', default: 'gold')
- `suffix` (string, optional) - Unit suffix
- `trend` ('up' | 'down' | 'stable', optional)
- `animateOnScroll` (boolean, default: true)

**Usage:**
```tsx
<ImpactStat
  number={5000}
  label="Lives Impacted"
  icon="❤️"
  color="red"
  suffix="+"
  trend="up"
/>
```

**Use Cases:** Dashboard, homepage stats, impact highlights

---

### 4. **StoryCard** (`StoryCard.tsx`)
Testimonial/success story card with photo and quote.

**Props:**
- `image` (string, optional) - Story photo
- `quote` (string, required) - Person's quote
- `author` (string, required) - Author name
- `role` (string, optional) - Person's role/role
- `location` (string, optional) - Location
- `programTag` (string, optional) - Program name tag
- `borderColor` ('gold' | 'teal' | 'coral' | 'green', default: 'gold')

**Usage:**
```tsx
<StoryCard
  image="/person.jpg"
  quote="This program changed my life and gave me hope for the future"
  author="Fatima Al-Rashid"
  role="Healthcare Recipient"
  location="Amman, Jordan"
  programTag="Healthcare"
  borderColor="teal"
/>
```

**Use Cases:** Success stories, testimonials, case studies

---

### 5. **ImpactCalculator** (`ImpactCalculator.tsx`)
Interactive donation calculator showing real-time impact.

**Props:**
- `minAmount` (number, default: 10)
- `maxAmount` (number, default: 1000)
- `defaultAmount` (number, default: 50)
- `currency` (string, default: '$')
- `impacts` (ImpactItem[], default: preset items)
- `onDonationChange` (function, optional)
- `primaryColor` (string, default: warmGold)

**Usage:**
```tsx
<ImpactCalculator
  minAmount={25}
  maxAmount={500}
  defaultAmount={100}
  currency="JD"
  impacts={[
    { icon: '📚', label: 'Textbooks', amount: 30 },
    { icon: '🍽️', label: 'Meals', amount: 20 },
  ]}
  onDonationChange={(amount) => console.log(amount)}
/>
```

**Use Cases:** Donation pages, giving campaigns, impact visualization

---

### 6. **CtaSection** (`CtaSection.tsx`)
Full-width call-to-action section with gradient background.

**Props:**
- `heading` (string, required)
- `subheading` (string, optional)
- `options` (CtaOption[], required) - CTA options with icon, label, href
- `background` ('compassionate' | 'hopeful' | 'royal' | 'warm', default: 'compassionate')
- `fullWidth` (boolean, default: true)

**Usage:**
```tsx
<CtaSection
  heading="Join Us in Making a Difference"
  subheading="Choose your way to contribute"
  options={[
    { label: 'Donate', href: '/donate', icon: '💝' },
    { label: 'Volunteer', href: '/volunteer', icon: '🤝' },
    { label: 'Partner', href: '/partner', icon: '👥' },
  ]}
  background="hopeful"
/>
```

**Use Cases:** Page sections, multi-option CTAs, engagement hubs

---

### 7. **TeamMember** (`TeamMember.tsx`)
Staff/leadership profile card.

**Props:**
- `name` (string, required)
- `title` (string, required)
- `bio` (string, optional)
- `image` (string, optional)
- `socialLinks` (SocialLink[], optional) - Links with platform, url, icon
- `accentColor` ('gold' | 'teal' | 'coral' | 'green', default: 'gold')

**Usage:**
```tsx
<TeamMember
  name="Dr. Ahmed Al-Mansouri"
  title="Executive Director"
  bio="20+ years of humanitarian experience"
  image="/team/ahmed.jpg"
  socialLinks={[
    { platform: 'LinkedIn', url: 'https://linkedin.com/...', icon: '🔗' },
  ]}
  accentColor="gold"
/>
```

**Use Cases:** Team pages, leadership bios, about sections

---

### 8. **StatCard** (`StatCard.tsx`)
Simple statistic display card.

**Props:**
- `number` (string | number, required)
- `label` (string, required)
- `description` (string, optional)
- `color` ('gold' | 'teal' | 'coral' | 'green' | 'red', default: 'gold')
- `icon` (string, optional)
- `suffix` (string, optional)

**Usage:**
```tsx
<StatCard
  number={250}
  label="Beneficiaries"
  description="Served in 2025"
  icon="👨‍👩‍👧‍👦"
  color="coral"
/>
```

**Use Cases:** Stat displays, quick facts, dashboard cards

---

### 9. **TestimonialCarousel** (`TestimonialCarousel.tsx`)
Rotating testimonials with navigation.

**Props:**
- `testimonials` (Testimonial[], required) - Array of testimonials
- `autoRotate` (boolean, default: true)
- `rotationInterval` (number, default: 5000ms)

**Usage:**
```tsx
<TestimonialCarousel
  testimonials={[
    { id: '1', name: 'Layla', quote: 'Amazing program!', role: 'Beneficiary' },
    { id: '2', name: 'Omar', quote: 'Life-changing', image: '/omar.jpg' },
  ]}
  autoRotate={true}
  rotationInterval={4000}
/>
```

**Use Cases:** Testimonial sections, success stories carousel

---

### 10. **ProgressBar** (`ProgressBar.tsx`)
Visual fundraising/goal tracking bar.

**Props:**
- `currentAmount` (number, required)
- `targetAmount` (number, required)
- `title` (string, optional)
- `description` (string, optional)
- `donorCount` (number, optional)
- `currency` (string, default: '$')
- `motivationalText` (string, optional)
- `color` ('gold' | 'teal' | 'coral' | 'green', default: 'gold')
- `showPercentage` (boolean, default: true)

**Usage:**
```tsx
<ProgressBar
  currentAmount={75000}
  targetAmount={100000}
  title="Healthcare Fund"
  currency="JD"
  donorCount={1250}
  motivationalText="We're 75% of the way to our goal!"
  color="teal"
/>
```

**Use Cases:** Fundraising campaigns, goal tracking, donation progress

---

### 11. **ValueCard** (`ValueCard.tsx`)
Values, benefits, or features display card.

**Props:**
- `icon` (string, required)
- `title` (string, required)
- `description` (string, required)
- `color` ('gold' | 'teal' | 'coral' | 'green' | 'red', default: 'gold')
- `linkLabel` (string, optional)
- `linkHref` (string, optional)

**Usage:**
```tsx
<ValueCard
  icon="🤝"
  title="Community First"
  description="We listen to and serve our communities with dignity and respect"
  color="teal"
  linkLabel="Our Values"
  linkHref="/about/values"
/>
```

**Use Cases:** Values section, benefits display, mission highlights

---

### 12. **HeroSection** (`HeroSection.tsx`)
Page hero with headline, optional image, and CTAs.

**Props:**
- `headline` (string, required)
- `subheadline` (string, optional)
- `backgroundImage` (string, optional)
- `backgroundColor` (string, optional)
- `backgroundGradient` (string, optional)
- `buttons` (HeroButton[], optional)
- `overlayOpacity` (number, default: 0.7)
- `alignment` ('left' | 'center' | 'right', default: 'center')
- `minHeight` (string, default: '500px')

**Usage:**
```tsx
<HeroSection
  headline="Transforming Lives Through Compassion"
  subheadline="Join JHCO in building a better future"
  backgroundImage="/hero-bg.jpg"
  buttons={[
    { label: 'Donate', href: '/donate', variant: 'primary', icon: '💝' },
    { label: 'Learn More', href: '/about', variant: 'secondary' },
  ]}
  alignment="center"
/>
```

**Use Cases:** Page headers, campaign heroes, landing pages

---

### 13. **FeatureSection** (`FeatureSection.tsx`)
Content section with image and feature list.

**Props:**
- `title` (string, required)
- `description` (string, optional)
- `image` (string, optional)
- `imagePosition` ('left' | 'right', default: 'right')
- `backgroundColor` ('white' | 'warm' | 'light', default: 'white')
- `items` (FeatureItem[], optional)
- `primaryColor` ('gold' | 'teal' | 'coral' | 'green', default: 'gold')
- `callToActionLabel` (string, optional)
- `callToActionHref` (string, optional)
- `listLayout` ('grid' | 'stacked', default: 'grid')

**Usage:**
```tsx
<FeatureSection
  title="Our Impact"
  description="Making real change in real communities"
  image="/impact.jpg"
  imagePosition="right"
  items={[
    { icon: '❤️', label: 'Compassionate Care' },
    { icon: '🎓', label: 'Quality Education' },
  ]}
  callToActionLabel="Explore Programs"
  callToActionHref="/programs"
/>
```

**Use Cases:** Program pages, feature highlights, capability showcase

---

### 14. **Header** (`Header.tsx` - Updated)
Enhanced header with warm accents and improved visual hierarchy.

**Features:**
- Logo with organization name
- Language switcher (Arabic/English)
- Warm-styled donate button
- Sticky positioning
- Responsive design
- Improved hover states

**Use Cases:** Site header, navigation

---

### 15. **Footer** (`Footer.tsx` - Updated)
Warm, inviting footer with comprehensive link organization.

**Features:**
- Multi-section link structure
- Organization values showcase
- Warm gradient background
- Improved typography
- Hover effects on links
- Copyright information

**Use Cases:** Site footer, link organization

---

## Color System

All components use the warm color palette:

```
Primary Colors:
- warmGold: #e8b923 (Premium, inviting)
- compassionRed: #e74c3c (Emotional, urgent)
- hopeTeal: #1abc9c (Healing, growth)
- deepGreen: #27ae60 (Life, sustainability)

Text Colors:
- deepNavy: #0a1428 (Authority, professional)
- textDark: #2c3e50 (Readable, warm)
- textMuted: #95a5a6 (Secondary)

Backgrounds:
- bgLight: #ffffff
- bgWarm: #fef9f3 (Warm, inviting)
```

---

## Spacing System

Consistent spacing across components:
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
xxl: 48px
xxxl: 64px
```

---

## Animations & Interactions

All components include:
- **Hover effects**: Smooth color/position transitions
- **Scroll animations**: Counter animations, fade-in effects
- **Transitions**: 250ms cubic-bezier timing function
- **Responsive**: Mobile-friendly, adaptive grids

---

## Accessibility

Components follow WCAG guidelines:
- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support
- ARIA labels where appropriate
- Readable font sizes
- Focus states for interactive elements

---

## Responsive Design

All components are fully responsive:
- Mobile-first approach
- Adaptive grid layouts
- Responsive typography
- Touch-friendly interactive elements
- Flexible spacing

---

## Usage Example - Homepage Section

```tsx
import {
  HeroSection,
  WarmCard,
  ImpactStat,
  CtaSection,
  FeatureSection,
} from '@/components';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="Making a Global Impact"
        subheadline="Join JHCO's mission to transform lives"
        backgroundImage="/hero.jpg"
        buttons={[
          { label: 'Donate', href: '/donate', icon: '💝' },
        ]}
      />

      {/* Stats */}
      <section style={{ padding: '64px 32px', backgroundColor: '#fef9f3' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          <ImpactStat number={50000} label="Lives Changed" icon="❤️" />
          <ImpactStat number={75} label="Countries Served" icon="🌍" />
          <ImpactStat number={100} label="Programs Active" icon="🎯" />
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <WarmCard
            title="Healthcare"
            description="Medical care for underserved communities"
            icon="🏥"
            color="teal"
          />
          <WarmCard
            title="Education"
            description="Quality education for all"
            icon="📚"
            color="gold"
          />
          <WarmCard
            title="Emergency Relief"
            description="Crisis response and humanitarian aid"
            icon="🚨"
            color="coral"
          />
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading="Ready to Help?"
        subheading="Choose your way to make an impact"
        options={[
          { label: 'Donate', href: '/donate', icon: '💝' },
          { label: 'Volunteer', href: '/volunteer', icon: '🤝' },
          { label: 'Partner', href: '/partner', icon: '👥' },
        ]}
      />
    </>
  );
}
```

---

## Best Practices

1. **Consistency**: Use the warm color palette across all pages
2. **Hierarchy**: Combine different component sizes for visual hierarchy
3. **Spacing**: Use the spacing system for consistent layouts
4. **Storytelling**: Use StoryCard and TestimonialCarousel for impact narrative
5. **CTAs**: Place EmotionalButton strategically for conversions
6. **Accessibility**: Test with screen readers and keyboard navigation
7. **Performance**: Optimize images before use
8. **Responsive**: Test on mobile, tablet, desktop

---

## Component Status

✅ All 15 components implemented
✅ Warm color system integrated
✅ Animations and interactions included
✅ Responsive design applied
✅ TypeScript support complete
✅ Accessibility features included
✅ Ready for production use

---

## Support & Updates

For questions or improvements, refer to the design system in `/lib/royalDesign.ts`.
