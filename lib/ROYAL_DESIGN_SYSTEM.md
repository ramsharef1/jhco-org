# JHCO Royal Design System
## ROYAL FIRST, CHARITY SECOND

**Version**: 2.0 - Complete Redesign
**Inspired by**: Jordanian Royal Hashemite Court, Royal Jordanian Airlines, Arab Royal Aesthetics
**Philosophy**: Authority and prestige first, with charitable mission as supporting role

---

## Core Philosophy

This design system is deliberately structured to communicate **ROYAL AUTHORITY FIRST**, with charitable work presented as the **dignified duty of that authority**.

### Visual Hierarchy
1. **Royal Authority** (Deep Purple, Navy, Gold accents)
2. **Formal Elegance** (Serif typography, formal spacing, dignified layouts)
3. **Institutional Trust** (Official colors, heraldic elements)
4. **Charitable Mission** (Formal red, muted tones, secondary position)

### First Impression Strategy
**What the visitor thinks on seeing the site:**
1. "This is an **OFFICIAL, PRESTIGIOUS, ROYAL** organization"
2. "They exercise **FORMAL AUTHORITY** and institutional power"
3. "They do important **HUMANITARIAN WORK** under this authority"

**NOT**: "This is a friendly charity" or "This is a warm, approachable NGO"

---

## Color System

### Primary Royal Palette (Authority & Prestige)

#### Deep Royal Purple (`#4a148c`)
- **Purpose**: Maximum formal authority, regal prestige
- **Psychology**: Power, prestige, aristocracy, heritage
- **Use Cases**: Main headings, hero sections, primary backgrounds
- **Tone**: Official, formal, most prestigious
- **When to Use**: 
  - Page titles (H1)
  - Hero section backgrounds
  - Most important messaging
  - Primary card accents
- **When NOT to Use**: 
  - Body text (too dark)
  - Everything (needs hierarchy)
  - Casual content

#### Dark Navy (`#001a4d`)
- **Purpose**: Formal governmental authority
- **Psychology**: Official, trustworthy, governmental
- **Use Cases**: Headers, navigation, formal sections
- **Tone**: Authoritative, professional
- **When to Use**: 
  - Navigation bars
  - Secondary headings
  - Government/compliance sections
  - Formal text emphasis
- **When NOT to Use**: 
  - As the ONLY color (use with gold accents)

#### Hashemite Gold (`#d4af37`)
- **Purpose**: Royal privilege, precious resource, exclusive wealth
- **Psychology**: Nobility, luxury, precious metals, royal status
- **Use Cases**: Accents, borders, highlights, buttons
- **Tone**: Royal, precious, exclusive (used sparingly)
- **When to Use**: 
  - Border accents on formal cards
  - Button styling (with purple/navy)
  - Divider lines (heraldic)
  - Icon accents
- **CRITICAL**: Gold is an ACCENT ONLY, never the primary color
- **Hover State**: `#f4c430` (bright)
- **Active State**: `#b8860b` (dark)

### Secondary Formal Palette (Supporting, Dignified)

#### Formal Charcoal (`#2b2d42`)
- **Purpose**: Sophisticated supporting text and backgrounds
- **Use Cases**: Secondary backgrounds, subtle elements
- **Tone**: Sophisticated, reserved, formal

#### Ivory/Cream (`#f5f1e8`)
- **Purpose**: Refined background (NOT warm, NOT inviting)
- **Psychology**: Elegant, timeless, refined (not friendly)
- **Use Cases**: Card backgrounds, section backgrounds
- **Tone**: Elegant, formal, timelessly beautiful
- **NOT**: "warm" or "cozy"

### Tertiary Charity Palette (Secondary Role - Used Sparingly)

#### Charity Red (`#c41e3a`)
- **Purpose**: Formal, dignified charity work
- **Psychology**: Compassion, action, urgency (formal version)
- **Use Cases**: Donation buttons, emergency sections
- **Tone**: Formal, dignified, NOT bright or casual
- **When to Use**: 
  - "Donate Now" button only
  - Emergency help sections
  - Crisis response (formal presentation)
- **When NOT to Use**: 
  - Primary CTAs
  - Casual messaging
  - Multiple buttons (use sparingly)

#### Compassion Teal (`#0d7377`)
- **Purpose**: Formal support for programs
- **Psychology**: Care, healing (formal)
- **Use Cases**: Program support, secondary messaging
- **Tone**: Muted, formal, supporting role

#### Impact Green (`#1b4332`)
- **Purpose**: Formal environmental/livelihoods work
- **Psychology**: Growth, sustainability (formal)
- **Use Cases**: Environmental programs, livelihoods
- **Tone**: Dark, formal, supporting role

---

## Typography System

### Font Families

#### Serif (Garamond, Georgia)
- **Purpose**: Formal elegance, timeless authority, royalty
- **Use For**: ALL HEADINGS, official text, formal content
- **Character**: Elegant, aristocratic, timeless (NOT modern)
- **Weight for Headings**: 700-800 (bold for authority)
- **Example**: "Official Jordanian Humanitarian Commission"

#### Sans-Serif (System Fonts)
- **Purpose**: Readable, formal body text
- **Use For**: Body content only (secondary)
- **Character**: Professional, readable, formal (NOT warm or friendly)
- **Weight for Body**: 400 (regular)
- **Weight for Labels**: 600 (formal emphasis)

### Type Sizes

| Element | Size | Weight | Line Height | Use Case |
|---------|------|--------|-------------|----------|
| H1 | 64px | 800 | 1.1 | Official title (UPPERCASE) |
| H2 | 48px | 700 | 1.1 | Main heading |
| H3 | 32px | 700 | 1.2 | Subheading |
| H4 | 22px | 600 | 1.2 | Card title |
| Body | 16px | 400 | 1.4 | Standard content |
| Label | 14px | 600 | 1.4 | Formal labels (UPPERCASE) |
| Small | 12px | 600 | 1.4 | Metadata, captions |

### Line Height Strategy

**Formal, NOT Generous**

- **Headings**: 1.1 (compressed, formal, prestigious)
- **Body**: 1.4 (readable but formal, not generous)
- **Quotes**: 1.6 (special formal content only)

**NOT**: 1.5-1.75 (that's too warm and inviting)

### Letter Spacing Strategy

**Generous, Formal Elegance**

- **Body Text**: 0.5px (subtle formality)
- **Labels**: 1px+ (formal, official)
- **Headings**: 0.5px+ (regal, dignified)
- **ALL-CAPS Headers**: 2.5px (traditional royal elegance)

**Why**: Increased letter spacing is a hallmark of royal/formal design and communicates prestige through visual elegance.

---

## Component System

### Buttons

#### Primary Royal Button
```
Background: #4a148c (Deep Purple)
Text: #d4af37 (Gold)
Text Transform: UPPERCASE
Font: Garamond, 700 weight
Letter Spacing: 0.5px
Border Radius: 2px (sharp, formal)
Padding: 14px 32px (formal spacing)
```

**Use For**: 
- Main CTAs on official content
- "Learn More" on royal sections
- Primary actions

**NOT For**: 
- Casual actions
- Multiple prominent buttons
- Charity-only actions

#### Secondary Royal Button
```
Background: Transparent
Border: 2px solid #d4af37 (Gold border)
Text: #001a4d (Navy)
Text Transform: UPPERCASE
Font: Garamond, 700 weight
Letter Spacing: 0.5px
Border Radius: 2px
Padding: 14px 32px
```

**Use For**: 
- Secondary official actions
- "View Reports"
- "Access Portal"

#### Charity Action Button (Formal Red)
```
Background: #c41e3a (Formal Red)
Text: #ffffff (White)
Text Transform: UPPERCASE
Font: Garamond, 700 weight
Border Radius: 2px
Padding: 14px 32px
Box Shadow: Formal shadow
```

**Use For**: 
- "Donate Now" (ONLY donation button)
- "Emergency Help"

**CRITICAL**: Not the primary button, not multiple per page, formal presentation only

### Cards

#### Royal Card
```
Background: #ffffff (White)
Border: 2px solid #d4af37 (Gold formal border)
Border Radius: 0px (sharp, formal)
Padding: 28px (dignified)
Box Shadow: 0 12px 28px -4px rgba(74, 20, 140, 0.15)
```

**Use For**: 
- Most important content
- Official messaging
- Featured sections

#### Formal Card
```
Background: #ffffff
Border: 1px solid #d4c5a9 (Formal border)
Border Radius: 0px
Padding: 28px
Box Shadow: 0 8px 16px
```

**Use For**: 
- Standard content
- Program information
- Regular messaging

#### Refined Card
```
Background: #f5f1e8 (Ivory)
Border: 1px solid #e8dcc8
Border Radius: 0px
Padding: 28px
Box Shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08)
```

**Use For**: 
- Supporting content
- Quotes
- Heritage/legacy
- Testimonials

#### Dark Formal Card
```
Background: #001a4d (Dark Navy)
Border: 1px solid #d4af37 (Gold accent)
Border Radius: 0px
Padding: 28px
Color: #ffffff (White text)
Box Shadow: 0 12px 28px
```

**Use For**: 
- Government/compliance sections
- Most authoritative messaging
- Official declarations

### Sections

#### Royal Section
```
Background: linear-gradient(135deg, #4a148c 0%, #001a4d 100%)
Border-Left: 4px solid #d4af37 (Gold formal accent)
Padding: 80px 24px (generous, formal)
Color: #ffffff (White text)
```

**Use For**: 
- Hero sections
- Royal patronage messaging
- Primary messaging

#### Government Section
```
Background: #1a1a2e (Very dark)
Color: #d4af37 (Gold text - most authoritative)
Border-Left: 4px solid #d4af37
Padding: 80px 24px
```

**Use For**: 
- Compliance sections
- Transparency/governance
- Most authoritative messaging

#### Refined Section
```
Background: #f5f1e8 (Ivory)
Border-Bottom: 1px solid #d4c5a9
Padding: 80px 24px
```

**Use For**: 
- Supporting sections
- Heritage/legacy
- Context

#### Charity Section
```
Background: linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)
Border-Bottom: 1px solid rgba(212, 175, 55, 0.2)
Padding: 80px 24px
```

**Use For**: 
- Designated donation sections only
- Charity messaging (minimal, formal)
- Program support sections

---

## Styling Principles

### Corner Radius Philosophy
- **Primary**: 0px (sharp formal edges)
- **Buttons**: 2px (minimal rounding, formal)
- **Special elements**: 0px (formal rectangles)

**NOT**: 8-12px (that's too friendly and warm)

### Border Principles
- **Cards**: Use gold borders for formal cards (#d4af37)
- **Sections**: Use gold left border (4px) as heraldic accent
- **Dividers**: Gold horizontal lines between sections
- **Purpose**: Create formal, structured visual hierarchy

### Shadow Principles
- **Formal shadows**: 0 8px 16px or 0 12px 28px (deeper, more authoritative)
- **NOT**: Soft, delicate shadows (use substantial shadows for presence)
- **Color**: Based on purple/navy (not warm gold glow)

### Spacing Principles
- **Sections**: 80px padding (generous, formal, stately)
- **Cards**: 28px padding (dignified, not cramped or cozy)
- **Elements**: 24-32px gaps (structured, formal spacing)

**NOT**: Cramped spacing (conveys informality) or minimal gaps

---

## What NOT to Do (Anti-Patterns)

### Color Mistakes
❌ Making gold the primary color (it's an accent only)
❌ Using bright, saturated charity colors (use formal, muted tones)
❌ Adding warm colors as primary (royal purple/navy first)
❌ Mixing too many colors (keep it formal and controlled)

### Typography Mistakes
❌ Using sans-serif for headings (use serif for formality)
❌ Using lowercase headings (use UPPERCASE for royal style)
❌ No letter spacing (add 0.5px+ for formal elegance)
❌ Loose, generous line height (use tight 1.1-1.2 for headings)

### Layout Mistakes
❌ Rounded corners on cards (use 0px for formal)
❌ Cozy, inviting spacing (use formal, generous spacing)
❌ Asymmetrical layouts (use structured, formal hierarchies)
❌ Warm, inviting backgrounds (use royal colors and ivory)

### Tone Mistakes
❌ Friendly or casual copy ("Hey there!", "Join us!")
❌ Emphasizing charity equally with royal authority
❌ Playful design elements
❌ Inviting, warm messaging

### Component Mistakes
❌ Multiple prominent buttons (use hierarchy)
❌ Bright, colorful cards (use formal cards with gold borders)
❌ Casual charity messaging (keep it formal and dignified)
❌ Warm "welcome" sections (use formal, structured sections)

---

## Implementation Guide

### Header/Navigation
- Background: Deep Navy (#001a4d) or Deep Purple (#4a148c)
- Text: White or Gold (#d4af37)
- Borders: Gold divider line (formal)
- Tone: Authoritative, official

### Hero Section
- Background: Purple-to-Navy gradient with gold border
- Heading: UPPERCASE, serif, 64px, purple or navy
- Text: Formal, dignified, official
- CTA: Primary Royal Button
- Icon: Crown 👑 for royal sections

### Program Cards
- Style: Royal or Formal cards with gold borders
- NOT: Warm, inviting cards
- Tone: Professional, structured
- Icon: Seal ⚜️ for official programs

### Statistics Section
- Cards: Royal stat cards (formal, serif numbers)
- Background: Refined ivory
- Borders: Gold accents
- Tone: Official impact data (not emotional)

### Government/Compliance
- Section: Dark Government section (most authoritative)
- Text Color: Gold (#d4af37) on dark background
- Borders: Gold left border
- Tone: Most formal, most authoritative

### Donation Section
- Background: Charity section (muted red/gold)
- Button: Charity Action button (formal red)
- Tone: Formal, dignified (not casual)
- Copy: Official language, not emotional

### Footer
- Background: Navy or Ivory (continues formal tone)
- Links: Formal, organized structure
- Tone: Professional, official
- Borders: Gold dividers (formal structure)

---

## Royal Symbolism

### Crown (👑)
- **Use**: For royal sections, royal patronage, authority
- **Placement**: Page headers, royal messaging, formal badges
- **Frequency**: Prominent but not excessive

### Seal (⚜️)
- **Use**: Official declarations, government sections, seals
- **Placement**: Government content, official programs
- **Frequency**: Used for formal, official content

### Jordanian Flag (🇯🇴)
- **Use**: National identity, official messaging
- **Placement**: Heritage sections, national programs
- **Frequency**: As needed for context

### Heart (❤️)
- **Use**: Charity work ONLY (secondary)
- **Placement**: Minimal, only for charity sections
- **Frequency**: Sparingly (not prominent)

---

## Typography Examples

### Official Heading (Most Formal)
```
Font: Garamond, 64px, 800 weight
Text: "OFFICIAL HASHEMITE PATRONAGE"
Letter-spacing: 2.5px
Transform: UPPERCASE
Color: #4a148c (Deep Purple)
```

### Primary Heading
```
Font: Garamond, 56px, 700 weight
Text: "Royal Jordanian Humanitarian Commission"
Letter-spacing: 0.5px
Color: #001a4d (Dark Navy)
```

### Subheading
```
Font: Garamond, 32px, 700 weight
Text: "Programs Under Royal Authority"
Letter-spacing: 0.5px
Color: #4a148c (Deep Purple)
```

### Formal Label
```
Font: System sans-serif, 14px, 600 weight
Text: "OFFICIAL STATEMENT"
Letter-spacing: 1px
Transform: UPPERCASE
Color: #5a5a6a (Formal gray)
```

### Body Text
```
Font: System sans-serif, 16px, 400 weight
Letter-spacing: 0px
Line-height: 1.4
Color: #2c2c2c (Dark gray)
```

---

## Accessibility

### Color Contrast
- **Primary text on light**: Deep Navy or Purple (✓ 9+:1 ratio)
- **Primary text on dark**: White or Gold (✓ 7+:1 ratio)
- **Button text**: Always 4.5+:1 minimum ratio
- **Test**: Use WCAG AA standards

### Typography Accessibility
- **Font size minimum**: 12px (don't go smaller)
- **Line height**: 1.4+ for body text (readability)
- **Font weight**: 600+ for labels (emphasis visibility)
- **Letter spacing**: Formal but not excessive (1px max for body)

### Interactive Elements
- **Focus states**: Clear, visible, brand-colored border
- **Button targets**: Minimum 44x44px
- **Hover states**: Clear visual feedback
- **Always include text labels** (not just icons)

---

## Color Reference

### Quick Lookup

| Use Case | Color | Hex |
|----------|-------|-----|
| Royal primary | Deep Purple | #4a148c |
| Authority | Dark Navy | #001a4d |
| Formal accent | Hashemite Gold | #d4af37 |
| Charity (formal) | Charity Red | #c41e3a |
| Background (light) | Ivory | #f5f1e8 |
| Text (primary) | Dark Gray | #2c2c2c |
| Border (formal) | Pale Gold | #d4c5a9 |

---

## Design System Versioning

**Version 2.0** - Complete Redesign
- Changed philosophy from "Balanced Royal + Warm" to "ROYAL FIRST, CHARITY SECOND"
- Introduced Deep Purple as primary royal color
- Made Gold an accent-only color
- Changed all borders to sharp (0px radius) for formality
- Increased letter spacing for formal elegance
- Reduced line heights for formal compression
- Changed text styling to serif-first for all headings

**Breaking Changes**:
- All warm colors (compassion red, hope teal) are now secondary/tertiary
- All cards now use 0px border radius (was 12px)
- Buttons are now uppercase serif (was mixed)
- Section backgrounds are now formal/royal (was balanced)

---

## Need Help?

Refer to `/lib/royalDesign.ts` for:
- Exact color hex codes
- Component style objects
- Typography definitions
- Gradient combinations
- Shadow specifications

Use this guide for:
- Philosophy and context
- When/why to use colors
- Examples and implementations
- Anti-patterns to avoid
