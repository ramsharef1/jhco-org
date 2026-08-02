# JHCO Royal-First Design System - Implementation Guide

## Overview
This document outlines the comprehensive application of the royal-first design system to all 76+ pages of the JHCO website. The design system prioritizes royal authority and formal elegance, with charity framed as a supporting element.

## Design System Philosophy: ROYAL FIRST, CHARITY SECOND

### Core Principles
1. **Royal Authority**: Deep purple/navy establishes power and prestige
2. **Formal Elegance**: Garamond serif, increased letter spacing, tight line heights
3. **Precious Metals**: Gold (#d4af37) represents royal privilege and wealth
4. **Structured Hierarchy**: Clear, formal, organized layouts
5. **Official Tone**: Formal, dignified, authoritative (NOT warm, NOT friendly)
6. **Charity as Support**: Charitable mission exists to serve royal vision, not primary

## Color Palette

### PRIMARY ROYAL PALETTE
- **Deep Royal Purple** (#4a148c): Most formal, regal, prestigious color
  - Use for: Main headings, primary sections, hero backgrounds
  - Psychology: Power, royalty, prestige, authority
  
- **Dark Navy** (#001a4d): Formal authority, official government tone
  - Use for: Navigation, body sections, text emphasis
  - Psychology: Trust, formal authority, professional
  
- **Hashemite Gold** (#d4af37): Royal privilege, power, precious resource
  - Use for: Accents, buttons, highlights, borders (formal use only)
  - Psychology: Wealth, prestige, value, nobility
  - **IMPORTANT**: Gold is an ACCENT only, not primary

### SECONDARY FORMAL PALETTE
- **Formal Charcoal** (#2b2d42): Sophisticated, reserved
- **Ivory/Cream** (#f5f1e8): Refined, elegant (not "warm")
- **Pale Gold** (#e8dcc8): Subtle, formal accent
- **Dark Gray Text** (#2c2c2c): Readable, formal

### TERTIARY CHARITY PALETTE (Formal, Muted)
- **Charity Red** (#c41e3a): Formal, dignified (used sparingly for donation CTAs)
- **Compassion Teal** (#0d7377): Muted, formal (secondary support)
- **Impact Green** (#1b4332): Dark, formal (supporting role)

## Typography System

### Font Families
- **Headings**: Garamond, Georgia, Bodoni MT (serif)
- **Body**: System sans-serif (-apple-system, Segoe UI, etc.)

### Font Sizes
- h1: 64px (monumental, official)
- h2: 48px (stately, impressive)
- h3: 32px (formal subsection)
- h4: 22px (card titles)
- h5: 18px (labels, formal)
- Body: 16px (base, formal)
- Small: 14px (secondary text)
- Tiny: 12px (fine print)

### Font Weights
- Light: 300 (delicate headings only)
- Regular: 400 (body text)
- Medium: 500 (formal labels)
- Semibold: 600 (emphasis)
- Bold: 700 (headings, authority)
- Extrabold: 800 (most important headings)

### Line Heights
- Tight: 1.1 (headings - compressed, formal)
- Normal: 1.4 (body text - readable, formal)
- Relaxed: 1.6 (only special formal content)

### Letter Spacing
- Tight: 0px
- Normal: 0.5px (standard body - subtle formality)
- Wide: 1px (labels, emphasis)
- Wider: 1.5px (section headers)
- Widest: 2.5px (ALL-CAPS titles - traditional royal style)

## Component Styles

### Buttons - STRICT HIERARCHY

#### Primary Royal (Deep Purple + Gold)
- Background: Deep Royal Purple (#4a148c)
- Text: Hashemite Gold (#d4af37)
- Style: Uppercase, 0px radius, sharp corners
- Shadow: 0 8px 20px -2px rgba(74, 20, 140, 0.2)
- Uses: Official actions, learn more, primary CTAs
- Tone: "This is an official action of a prestigious organization"

#### Secondary Royal (Navy + Gold Border)
- Background: Transparent
- Border: 2px solid Gold (#d4af37)
- Text: Dark Navy (#001a4d)
- Style: Uppercase, 0px radius
- Uses: Secondary official actions, links
- Tone: Professional, authoritative

#### Charity Action (Formal Red)
- Background: Charity Red (#c41e3a)
- Text: White
- Style: Uppercase, 0px radius
- Uses: **ONLY for donation and emergency help**
- Tone: Urgent but formal, NOT casual
- **IMPORTANT**: Not the primary button on the page

#### Tertiary (Formal, Minimal)
- Background: Transparent
- Border: 1px solid formal border
- Text: Secondary text color
- Uses: Skip links, secondary navigation

### Cards - FORMAL & DIGNIFIED

#### Royal Card (Gold Border)
- Background: White
- Border: 2px solid Gold (#d4af37)
- Radius: 0px (sharp formal)
- Padding: 28px
- Shadow: 0 12px 28px -4px rgba(74, 20, 140, 0.15)
- Uses: Most important content, official messaging
- Tone: Prestigious, formal, elevated

#### Formal Card (Subtle Border)
- Background: White
- Border: 1px solid formal border (#d4c5a9)
- Radius: 0px
- Padding: 28px
- Shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1)
- Uses: Standard programs, official info
- Tone: Professional, organized

#### Refined Card (Ivory Background)
- Background: Ivory (#f5f1e8)
- Border: 1px subtle border
- Radius: 0px
- Padding: 28px
- Shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08)
- Uses: Supporting content, quotes, heritage
- Tone: Elegant, formal, timeless

#### Dark Formal Card (Navy Background)
- Background: Dark Navy (#001a4d)
- Border: 1px Gold (#d4af37)
- Radius: 0px
- Text: White
- Padding: 28px
- Shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2)
- Uses: Government, compliance, official declarations
- Tone: Most authoritative, official

### Sections - FORMAL, STRUCTURED

#### Royal Section (Purple Gradient)
- Background: Linear gradient (Purple → Navy)
- Color: White text
- Padding: 80px 24px
- Border-left: 4px solid Gold
- Uses: Hero, main messages, monarchy sections
- Tone: Authoritative, prestigious

#### Royal Dark Section (Navy Gradient)
- Background: Linear gradient (Navy → Charcoal)
- Color: White text
- Padding: 80px 24px
- Border-left: 4px solid Gold
- Uses: Authority, government, official
- Tone: Formal, official, authoritative

#### Government Section (Deep Background)
- Background: Very dark (#1a1a2e)
- Color: Gold text (#d4af37)
- Padding: 80px 24px
- Border-left: 4px solid Gold
- Uses: Compliance, transparency, official sections
- Tone: Most authoritative, official

#### Refined Section (Ivory)
- Background: Ivory (#f5f1e8)
- Padding: 80px 24px
- Border-bottom: 1px formal border
- Uses: Supporting sections, heritage, context
- Tone: Elegant, formal

#### Light Section (White)
- Background: White
- Padding: 80px 24px
- Border-bottom: 1px subtle border
- Uses: Standard content sections
- Tone: Clean, formal

### Dividers - FORMAL GOLD ACCENTS

#### Simple Gold Divider
- Height: 1px
- Color: Gold (#d4af37)
- Margin: 32px 0

#### Double Gold Divider
- Background: Linear gradient (gold dots)
- Height: 3px
- Margin: 32px 0

#### Accent Divider
- Background: Linear gradient (Purple → Gold → Purple)
- Height: 2px
- Margin: 32px 0

## Implementation Checklist

### Global Foundation
- [x] Update globals.css with royal color palette
- [x] Update typography to serif (Garamond) with formal spacing
- [x] Create royal-design.css utility file
- [x] Import royal design utilities

### Core Components (In Progress)
- [ ] Header: Deep navy with gold accents
- [ ] Footer: Deep purple with gold dividers
- [ ] HeroSection: Deep gradient with gold text
- [ ] CtaSection: Purple gradient, gold text, formal buttons
- [ ] Cards: Ivory/white with gold borders, 0px radius
- [ ] Buttons: Deep purple bg, gold text, UPPERCASE, sharp

### Pages by Phase

#### Phase 1 - Core Pages (5)
- [ ] page.tsx (homepage)
- [ ] about/page.tsx
- [ ] impact/page.tsx
- [ ] get-involved/donate/page.tsx
- [ ] royal-patronage/page.tsx (if exists)

#### Phase 2 - Organizational Pages (23)
- [ ] about/* (6 subsections)
- [ ] governance/* (3 pages)
- [ ] impact/* (6 detail pages)
- [ ] transparency/page.tsx
- [ ] compliance/page.tsx
- [ ] financial-reports/page.tsx
- [ ] media-center/page.tsx
- [ ] faq/page.tsx

#### Phase 3 - Geographic Pages
- [ ] regions/page.tsx
- [ ] regions/[regionSlug]/page.tsx
- [ ] region pages (4 main regions)
- [ ] country-specific pages

#### Phase 4 - Legal & Engagement (10)
- [ ] legal/* (6 pages)
- [ ] resources/* (2 pages)
- [ ] events/page.tsx
- [ ] newsletter/page.tsx
- [ ] news pages

## Language & Tone Guidelines

### FORMAL, AUTHORITATIVE TONE
✓ "Official", "Royal", "Authoritative", "Established"
✓ "Formal elegance", "Dignified", "Prestigious"
✓ "Royal duty", "Official service", "Authorized mission"
✓ "Hashemite authority", "Official mandate"

### AVOID WARM/FRIENDLY TONE
❌ "Join us", "Let's work together", "Human warmth"
❌ "Warm", "Friendly", "Welcoming", "Inviting"
❌ "We care", "Compassionate", "Heartfelt"
❌ Playful language, casual tone

### CHARITY FRAMING
- Primary: Royal mission, official service, authorized work
- Secondary: Humanitarian support, formal duty
- Tertiary: Charitable element (supporting royal mandate)

## Bilingual Support (EN/AR)
- Maintain Arabic translations
- Formal tone in both languages
- Same royal colors in both versions
- RTL/LTR layout support preserved

## Design Assets

### Colors (CSS Variables)
```css
--color-deep-royal: #4a148c
--color-dark-navy: #001a4d
--color-hashemite-gold: #d4af37
--color-charity-red: #c41e3a
--color-ivory-bg: #f5f1e8
```

### Utility Classes
See `/app/royal-design.css` for complete utility class documentation

### Gradients
- `gradient-royal`: Purple to Navy (most formal)
- `gradient-royal-gold`: Purple to Gold (royal prestige)
- `gradient-dark-formal`: Navy to Charcoal (authority)

## What NOT to Do

❌ Do NOT use warm colors as primary
❌ Do NOT use bright, saturated colors (all colors should be formal/muted)
❌ Do NOT use rounded corners on cards (use sharp formal edges - 0px)
❌ Do NOT use friendly or casual tone in copy
❌ Do NOT emphasize charity mission equally with royal authority
❌ Do NOT use playful fonts or modern sans-serif for headings
❌ Do NOT use generous white space for "breathing room" (use formal spacing)
❌ Do NOT create "warm" or "inviting" sections (use formal elegance)
❌ Do NOT make buttons colorful or playful (use formal, restrained colors)
❌ Do NOT prioritize emotion over authority in design decisions

## Verification Checklist

For each page, verify:
- ✓ Royal color palette applied (no warm colors)
- ✓ Formal Garamond typography on headings
- ✓ Sharp corners (0px border-radius on cards/buttons)
- ✓ Gold dividers and accents (formal use)
- ✓ Formal, authoritative tone (no warm language)
- ✓ Deep purple/navy sections with gold accents
- ✓ Charity mentions as secondary elements
- ✓ Bilingual support maintained (EN/AR)
- ✓ Responsive design preserved
- ✓ All interactive elements functional

## File Locations

- Royal Design System Definition: `/lib/royalDesign.ts`
- Global CSS: `/app/globals.css`
- Royal Utility Classes: `/app/royal-design.css`
- Components: `/components/*.tsx`
- Page Files: `/app/[locale]/**/*.tsx`

## Support & References

- Design System: See `/lib/royalDesign.ts` for complete specifications
- Color Palette: Defined in globals.css CSS variables
- Component Examples: Check updated component files for implementation patterns
- Bilingual Structure: Uses `locale` parameter from Next.js routing

---

**Status**: Implementation in progress
**Last Updated**: 2026-08-03
**Total Pages to Update**: 49+ (76+ total)
**Phases**: 4 (Core → Organizational → Geographic → Legal)
