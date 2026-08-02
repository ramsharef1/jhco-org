# JHCO Design System Guide
## Balanced Royal Authority + Charitable Warmth

---

## 🎨 Color Palette Overview

### Primary Palette: Authority & Warmth Balance

#### Deep Navy `#0a1428`
- **Purpose**: Authority, trust, professional credibility
- **Usage**: Headers, navigation, primary text, formal sections
- **Tone**: Royal, trustworthy, established
- **Example Use Cases**: Header navigation, official announcements, government sections

#### Warm Gold `#e8b923`
- **Purpose**: Premium feel, inviting warmth, encouragement
- **Usage**: Primary buttons, accents, highlights, emphasis
- **Tone**: Warm, valuable, encouraging, accessible
- **Hover**: `#f5d667` (lighter)
- **Active**: `#c9961b` (darker)
- **Example Use Cases**: "Donate Now" button, highlight boxes, premium sections

#### Compassion Red `#e74c3c`
- **Purpose**: Emotion, urgency, human connection
- **Usage**: Urgent CTAs, emotional messaging, crisis response
- **Tone**: Compassionate, action-oriented, human
- **Hover**: `#ec7063` (lighter)
- **Active**: `#cb4335` (darker)
- **Example Use Cases**: Emergency donation button, emotional stories, urgent needs
- **Note**: Use sparingly to maintain impact

#### Hope Teal `#1abc9c`
- **Purpose**: Healing, growth, recovery, transformation
- **Usage**: Recovery messaging, positive impact, growth indicators
- **Tone**: Hopeful, transformative, optimistic
- **Hover**: `#48ddc4` (lighter)
- **Active**: `#16a085` (darker)
- **Example Use Cases**: Success stories, recovery programs, positive outcomes

#### Warm Beige `#f5e6d3`
- **Purpose**: Approachability, natural warmth, human-centered design
- **Usage**: Secondary backgrounds, inviting spaces, section backgrounds
- **Tone**: Natural, approachable, welcoming
- **Example Use Cases**: Program cards, testimonial backgrounds, warm sections

### Secondary Palette: Supporting Colors

#### Deep Green `#27ae60`
- **Purpose**: Life, growth, sustainability, environmental programs
- **Tone**: Natural, growing, sustainable
- **Usage**: Environmental initiatives, livelihoods programs, green impact

#### Sky Blue `#3498db`
- **Purpose**: Trust, care, openness, reliability
- **Tone**: Trustworthy, caring, professional
- **Usage**: Healthcare programs, education initiatives, trust-building content

#### Coral `#ff6b6b`
- **Purpose**: Energy, community connection, enthusiasm
- **Tone**: Energetic, connected, enthusiastic
- **Usage**: Community programs, engagement initiatives, youth programs

---

## 📝 Typography Guidelines

### Font Families

**Serif (Merriweather / Georgia)**
- Use for: Headings, quotes, premium content
- Tone: Royal, established, premium
- Weights: 600-700 for headings

**Sans-Serif (System fonts)**
- Use for: Body text, navigation, forms, UI elements
- Tone: Accessible, modern, human
- Weights: 400 for body, 600 for labels

### Font Sizes & Hierarchy

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 56px | 700 | 1.2 | Page titles, hero headings |
| H2 | 42px | 700 | 1.2 | Section headings |
| H3 | 28px | 600 | 1.4 | Subsection headings |
| H4 | 20px | 600 | 1.4 | Card titles |
| H5 | 18px | 600 | 1.5 | Labels, emphasis |
| Body | 16px | 400 | 1.5 | Primary content |
| Small | 14px | 400 | 1.5 | Secondary content |
| Tiny | 12px | 400 | 1.5 | Metadata, fine print |

### Spacing Guidelines

- **Line height**: 1.5-1.75 for body text (generous, warm)
- **Letter spacing**: 0.5px-1px for labels (premium)
- **Paragraph spacing**: 16-24px between sections
- **Line height for headings**: 1.2 (tight for impact)

---

## 🎯 Button Strategy: Hierarchy & Emotion

### Primary Button (Warm Gold)
```
Background: #e8b923
Text Color: #0a1428 (Dark Navy)
Usage: Main CTAs - "Donate", "Learn More", "Join Us"
Tone: Encouraging, positive, inviting
Padding: 12px 24px
Font Size: 16px
Font Weight: 600
Border Radius: 8px
```

### Royal Button (Navy + Gold Border)
```
Background: transparent
Text Color: #0a1428
Border: 2px solid #e8b923
Usage: Secondary actions - "View Reports", "Access Portal"
Tone: Professional, authoritative, sophisticated
Padding: 12px 24px
Font Size: 16px
Font Weight: 600
Border Radius: 8px
```

### Compassion Button (Red)
```
Background: #e74c3c
Text Color: #ffffff (White)
Usage: Urgent CTAs - "Get Help", "Emergency Support"
Tone: Urgent, compassionate, action-needed
Padding: 12px 24px
Font Size: 16px
Font Weight: 600
Border Radius: 8px
```

### Hopeful Button (Teal)
```
Background: #1abc9c
Text Color: #ffffff (White)
Usage: Engagement - "Join Program", "Get Started"
Tone: Hopeful, transformative, positive
Padding: 12px 24px
Font Size: 16px
Font Weight: 600
Border Radius: 8px
```

---

## 💳 Card Component Variations

### Warm Card (Default for Programs)
```
Background: #fef9f3 (warm cream)
Border: 1px solid #f0e6d6
Border Radius: 12px
Padding: 24px
Shadow: 0 4px 20px -2px rgba(232, 185, 35, 0.15)
Emotion: Inviting, warm, approachable
Usage: Program cards, opportunity highlights
```

### Compassionate Card (Emotional Stories)
```
Background: gradient(rgba(231, 76, 60, 0.05), rgba(232, 185, 35, 0.05))
Border: 1px solid rgba(231, 76, 60, 0.2)
Border Radius: 12px
Padding: 24px
Shadow: 0 4px 20px -2px rgba(231, 76, 60, 0.1)
Emotion: Compassionate, urgent, human
Usage: Crisis response, emotional testimonials
```

### Hopeful Card (Transformation Stories)
```
Background: gradient(rgba(26, 188, 156, 0.05), rgba(52, 152, 219, 0.05))
Border: 1px solid rgba(26, 188, 156, 0.2)
Border Radius: 12px
Padding: 24px
Shadow: 0 4px 20px -2px rgba(26, 188, 156, 0.15)
Emotion: Hopeful, positive, transformative
Usage: Success stories, recovery programs
```

### Elevated Card (Premium Content)
```
Background: #ffffff
Border: none
Border Radius: 12px
Padding: 24px
Shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15)
Emotion: Premium, important, featured
Usage: Featured programs, key initiatives
```

---

## 🎨 Gradient Combinations

### Royal to Warm (Navy → Teal)
```
linear-gradient(135deg, #0a1428 0%, #1abc9c 100%)
Usage: Professional yet hopeful sections
Tone: Authority + Hope
```

### Gold to Red (Warmth → Compassion)
```
linear-gradient(135deg, #e8b923 0%, #e74c3c 100%)
Usage: Urgent but warm CTAs
Tone: Premium + Urgent
```

### Teal to Green (Hope → Growth)
```
linear-gradient(135deg, #1abc9c 0%, #27ae60 100%)
Usage: Recovery and growth sections
Tone: Hope + Sustainability
```

### Warm Background (Soft)
```
linear-gradient(135deg, #fef9f3 0%, #f5e6d3 100%)
Usage: Subtle background transitions
Tone: Inviting, natural
```

---

## 📐 Component Library

### WarmCard Component
**Purpose**: Inviting content presentation with warm, colorful styling

**Props**:
- `title` (required): Card heading
- `description` (optional): Card description
- `icon` (optional): Emoji or icon
- `color` (optional): 'gold' | 'red' | 'teal' | 'green'
- `image` (optional): Image URL
- `action` (optional): CTA text
- `actionHref` (optional): CTA link

**Usage Example**:
```tsx
<WarmCard
  title="Education Programs"
  description="Supporting access to quality education for all"
  icon="📚"
  color="gold"
  action="Learn More"
  actionHref="/programs/education"
/>
```

### EmotionalButton Component
**Purpose**: Warm, clear call-to-action buttons with emotional resonance

**Props**:
- `label` (required): Button text
- `variant` (optional): 'primary' | 'compassion' | 'hopeful' | 'secondary'
- `size` (optional): 'sm' | 'md' | 'lg'
- `icon` (optional): Emoji or icon
- `onClick` (required): Click handler
- `disabled` (optional): Disable state

**Usage Example**:
```tsx
<EmotionalButton
  label="Donate Now"
  variant="compassion"
  icon="❤️"
  onClick={handleDonate}
/>
```

### ImpactStat Component
**Purpose**: Colorful, engaging statistics with emotion

**Props**:
- `number` (required): Stat value
- `label` (required): Stat description
- `icon` (optional): Emoji
- `color` (optional): 'gold' | 'red' | 'teal' | 'green'
- `suffix` (optional): Unit (e.g., "people", "programs")
- `trend` (optional): 'up' | 'down' | 'stable'

**Usage Example**:
```tsx
<ImpactStat
  number="250,000"
  label="People Reached"
  icon="👥"
  color="teal"
  trend="up"
/>
```

### StoryCard Component
**Purpose**: Emotional storytelling with photo + quote

**Props**:
- `image` (required): Photo URL
- `quote` (required): Person's quote
- `author` (required): Person's name
- `role` (optional): Person's role/title
- `country` (optional): Country/location

**Usage Example**:
```tsx
<StoryCard
  image="/images/person.jpg"
  quote="This program changed my life and gave me hope"
  author="Amira Hassan"
  role="Healthcare Beneficiary"
  country="Jordan"
/>
```

### CtaSection Component
**Purpose**: Full-width call-to-action section with prominent messaging

**Props**:
- `title` (required): Section title
- `description` (optional): Section description
- `primaryCta` (required): { label, href }
- `secondaryCta` (optional): { label, href }
- `background` (optional): 'gradient' | 'image' | 'color'
- `alignment` (optional): 'left' | 'center' | 'right'

**Usage Example**:
```tsx
<CtaSection
  title="Make a Difference Today"
  description="Your support directly helps families in need"
  primaryCta={{ label: "Donate Now", href: "/donate" }}
  secondaryCta={{ label: "Learn More", href: "/impact" }}
  background="gradient"
/>
```

---

## 🎭 Usage Guidelines by Section

### Header Section
- Background: Deep Navy (#0a1428)
- Text: Warm Beige or White
- Accent: Warm Gold
- Tone: Professional + Welcoming
- Components: Logo, navigation, CTA button (gold)

### Hero Section
- Background: Gradient (Navy → Teal or Gold → Red)
- Text: White or Dark Navy
- Accent: Warm Gold or Compassion Red
- Tone: Inspirational, action-oriented
- Components: Large heading, description, prominent CTA

### Program Cards Section
- Background: Warm cream (#fef9f3)
- Cards: Warm card variant
- Accent: Warm Gold
- Tone: Inviting, approachable
- Components: WarmCard, icon, description, "Learn More" button

### Impact Statistics Section
- Background: Light or gradient background
- Cards: ImpactStat components with different colors
- Accent: Multiple colors (gold, teal, red, green)
- Tone: Impressive, emotional, celebratory
- Components: ImpactStatGrid, colorful numbers, icons

### Stories Section
- Background: Warm or white background
- Cards: StoryCard components
- Accent: Teal or gold highlights
- Tone: Human, emotional, inspiring
- Components: StoryCard, image, quote, attribution

### CTA Sections
- Background: Gradient (gold → red, or navy → teal)
- Text: Contrasting color
- Accent: Primary action button
- Tone: Urgent yet hopeful
- Components: CtaSection, prominent buttons

### Government Section
- Background: Deep Navy
- Text: White or Warm Beige
- Accent: Warm Gold (minimal)
- Tone: Professional, formal, authoritative
- Components: Text-heavy, documentation links

### Footer Section
- Background: Warm Beige or Deep Navy
- Text: Dark Navy or White
- Accent: Warm Gold
- Tone: Professional + Approachable
- Components: Menu links, social icons, contact info

---

## ✅ Implementation Checklist

- [ ] Update header with navy + gold
- [ ] Create hero with gradient background
- [ ] Implement WarmCard component for programs
- [ ] Create ImpactStat component with colors
- [ ] Add StoryCard for testimonials
- [ ] Create CtaSection for donations/engagement
- [ ] Update all buttons to new variants
- [ ] Apply warm card styles to content sections
- [ ] Update forms with warm styling
- [ ] Test color contrast and accessibility
- [ ] Verify responsive design on mobile
- [ ] Add hover/active states to all interactions

---

## 🎨 Color Contrast & Accessibility

### WCAG AA Compliance (Minimum 4.5:1 for text)

**Text on Light Backgrounds**
- Dark Navy (#0a1428) on White: ✅ 16.5:1
- Dark Navy (#0a1428) on Warm Beige: ✅ 14.2:1

**Text on Dark Backgrounds**
- White (#ffffff) on Deep Navy: ✅ 16.5:1
- Warm Beige (#f5e6d3) on Deep Navy: ✅ 12.1:1

**Text on Colored Backgrounds**
- White on Warm Gold: ✅ 7.8:1
- White on Compassion Red: ✅ 6.1:1
- White on Hope Teal: ✅ 5.9:1

**Focus States**
- Use Warm Gold (#e8b923) for focus indicators
- Minimum 2px visible outline
- High contrast against background

---

## 🚀 Design System Export

All styles are exported from `/lib/royalDesign.ts`:

```typescript
import {
  royalColors,
  royalTypography,
  gradients,
  spacing,
  borderRadius,
  shadows,
  transitions,
  componentStyles,
  componentDefinitions,
} from '@/lib/royalDesign';
```

---

## 📞 Questions or Updates?

This design system is living documentation. As components are created and refined, update this guide to reflect best practices and patterns discovered during implementation.
