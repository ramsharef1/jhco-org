# JHCO Design System - Visual Reference Guide

## 🎨 Color Palette Visual Map

### Primary Palette: The Balance

```
ROYAL AUTHORITY                          WARM COMPASSION
        |                                      |
        V                                      V
    
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Deep Navy         Warm Gold         Teal         │
│   #0a1428           #e8b923          #1abc9c       │
│   ████████          ████████         ████████       │
│   Professional      Premium          Healing       │
│   Trustworthy       Inviting          Growth       │
│   Formal            Encouraging       Hopeful      │
│                                                     │
└─────────────────────────────────────────────────────┘

                    +

┌─────────────────────────────────────────────────────┐
│                                                     │
│   Compassion Red    Warm Beige                      │
│   #e74c3c           #f5e6d3                        │
│   ████████          ████████                       │
│   Urgent            Natural                        │
│   Emotional         Approachable                   │
│   Human             Human                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Secondary Palette: Support Colors

```
Deep Green          Sky Blue           Coral
#27ae60             #3498db            #ff6b6b
████████            ████████           ████████
Life                Trust              Energy
Growth              Care               Connection
Sustainable         Professional       Community
```

### Neutral Palette: Foundations

```
Rich Cream          Soft Gray           Text Dark
#faf8f5             #7f8c8d             #2c3e50
████████            ████████            ████████
Warm Background     Secondary Text      Primary Text
```

---

## 🎯 Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                         JHCO DESIGN SYSTEM                       │
└─────────────────────────────────────────────────────────────────┘

         ┌──────────────────────────────────────────┐
         │           CORE DESIGN TOKENS             │
         └──────────────────────────────────────────┘
                  │                    │
        ┌─────────┴─────────┐    ┌─────┴──────────┐
        │                   │    │                │
    ┌───┴────┐         ┌───┴────┴───┐      ┌──────┴──────┐
    │ COLORS │         │ TYPOGRAPHY  │      │   SPACING   │
    │  (32)  │         │             │      │   (8 levels)│
    └────────┘         └─────────────┘      └─────────────┘
        │                   │                        │
        └────────┬──────────┴────────────┬───────────┘
                 │                      │
            ┌────┴──────────────────────┴────┐
            │     COMPONENT STYLES            │
            │  (Buttons, Cards, Sections)     │
            └────┬──────────────────────┬─────┘
                 │                      │
    ┌────────────┴────────┐  ┌──────────┴──────────┐
    │                     │  │                     │
┌───┴───────┬───────────┬─┴──┴┬────────┬──────────┴──┐
│ WarmCard  │  Emotional│Impact│ Story  │ CtaSection │
│           │ Button    │ Stat │ Card   │            │
│ Color:    │ Variant:  │Color │ Emotion│ Background │
│ 4 options │ 5 variants│ 4 opt│ Story  │ 3 types    │
└───────────┴───────────┴──────┴────────┴────────────┘
```

---

## 🎭 Button Variants at a Glance

```
PRIMARY                ROYAL                COMPASSION
Gold Background        Navy + Gold Border    Red Background
Dark Navy Text         Dark Navy Text        White Text
#e8b923               #0a1428 + #e8b923    #e74c3c
████████              ████████              ████████
"Donate"              "View Reports"        "Get Help"
"Learn More"          "Access Portal"       "Emergency"


HOPEFUL                SECONDARY
Teal Background        Light Background
White Text             Navy Text
#1abc9c               Subtle Gray Border
████████              ████████
"Join Program"        "Explore More"
"Get Started"         "Learn More"
```

---

## 🃏 Card Variations

```
WARM CARD              COMPASSIONATE          HOPEFUL CARD
Cream Background       Red/Gold Gradient      Teal/Blue Gradient
Gold Accent Line       Emotional Content      Positive Content
#fef9f3               Recovery Stories       Transformation
████████              ████████              ████████
├─ Image              ├─ Urgent Message      ├─ Success Story
├─ Icon               ├─ Call to Action      ├─ Positive Quote
├─ Title              └─ Strong Emotion      └─ Growth Marker
└─ Action Link


ELEVATED CARD          DEFAULT CARD
Premium Shadow         Simple Clean
White Background       White Background
High Elevation         Light Border
████████              ████████
└─ Featured Content    └─ Standard Content
```

---

## 📊 Typography Hierarchy

```
H1 - PAGE HEADING (56px, Bold, Serif)
  ├─ Hero titles
  └─ Section titles


H2 - SECTION HEADING (42px, Bold, Serif)
  ├─ Main content sections
  └─ Important headings


H3 - SUBSECTION HEADING (28px, Semibold, Serif)
  ├─ Card titles
  └─ Content subsections


H4 - LABEL (20px, Semibold, Sans)
  ├─ Card headings
  └─ Emphasis text


BODY TEXT (16px, Regular, Sans)
  ├─ Primary content
  └─ Main paragraph text


SMALL TEXT (14px, Regular, Sans)
  ├─ Secondary content
  └─ Descriptions


TINY TEXT (12px, Regular, Sans)
  └─ Metadata, fine print
```

---

## 🌈 Gradient Combinations

```
ROYAL TO WARM                 GOLD TO RED
Navy → Teal                   Gold → Compassion Red
#0a1428 → #1abc9c            #e8b923 → #e74c3c
████████████                  ████████████
Professional + Hopeful        Premium + Urgent


TEAL TO GREEN                 WARM BACKGROUND
Teal → Deep Green             Cream → Beige
#1abc9c → #27ae60            #fef9f3 → #f5e6d3
████████████                  ████████████
Hope + Growth                 Subtle + Inviting


HOPEFUL                       COMPASSIONATE
Teal → Sky Blue               Red → Gold
#1abc9c → #3498db            #e74c3c → #e8b923
████████████                  ████████████
Hope + Trust                  Emotion + Warmth
```

---

## 📐 Spacing System

```
xs      4px   └─ Tiny gaps, component internals
sm      8px   └─ Small gaps, minor spacing
md     16px   └─ Default spacing, padding
lg     24px   └─ Generous spacing, card padding
xl     32px   └─ Large spacing, element gaps
xxl    48px   └─ Extra large, section gaps
xxxl   64px   └─ Maximum, section padding
```

Visual:
```
┌─────────────────────────────────┐
│ xs sm md lg xl  xxl  xxxl        │
│ █ ██ ██████ ██████████ ...      │
└─────────────────────────────────┘
```

---

## 🔲 Border Radius Scale

```
none    0px   ────────────── Sharp corners (rare)
sm      4px   ╭─────────────╮ Subtle roundness
md      8px   ╭────────────╮ Default (UI elements)
lg     12px   ╭──────────╮ Generous (cards)
xl     16px   ╭────────╮ Premium (sections)
full  9999px ○───────○ Fully rounded (pills, circles)
```

---

## 💡 Usage by Section

### Header
```
Background: Deep Navy
Text: Warm Beige
Accent: Warm Gold
CTA Button: Primary (Gold)
Tone: Professional + Welcoming
```

### Hero Section
```
Background: Gradient (Navy → Teal or Gold → Red)
Text: White
Accent: Warm Gold
CTA Button: Primary or Compassion
Tone: Inspirational + Action-Oriented
```

### Program Cards Section
```
Background: Warm Beige
Card Style: WarmCard
Colors: 4 different options (gold, red, teal, green)
Accent: Colored accent lines
Tone: Inviting + Approachable
```

### Impact Statistics
```
Background: Light or gradient
Component: ImpactStat (colorful boxes)
Colors: Multiple (gold, red, teal, green)
Accents: Emoji icons, trend indicators
Tone: Impressive + Celebratory
```

### Stories Section
```
Background: Dark Navy or White
Component: StoryCard
Image: Photo
Quote: Italic serif text
Tone: Human + Emotional
```

### Government Section
```
Background: Deep Navy
Text: White
Accent: Warm Gold (minimal)
Tone: Professional + Formal
```

### CTA Sections
```
Background: Gradient (Gold → Red or Navy → Teal)
Text: Contrasting (white or navy)
Buttons: Primary + Secondary
Tone: Urgent + Hopeful
```

### Footer
```
Background: Warm Beige or Deep Navy
Text: Navy or White
Accent: Warm Gold
Tone: Professional + Approachable
```

---

## 🎬 Interaction States

```
DEFAULT               HOVER                 ACTIVE
────────              ─────                 ──────

Button:
Gold                  Lighter Gold          Darker Gold
                      +2px lift              Pressed in
                      Glow effect            Stronger shadow


Card:
Border light          Border glowing         Border active
Shadow normal         Shadow +4px lift      Shadow focused
                      Slightly elevated     


Text Link:
Gray text            Underline appears     Darker color
                     Hover accent          Stronger


Form Input:
Light border         Focused border        Valid/Invalid
                     Color accent          Indicator color
```

---

## 📱 Responsive Breakpoints

```
Mobile          Tablet          Desktop
< 768px         768px-1024px    > 1024px
──────────      ────────────    ────────
1 column        2 columns       3 columns
Full width      80% width       Centered max-width
Tight padding   Moderate        Generous padding

Grid: 1fr    →  Grid: 1fr 1fr  →  Grid: 1fr 1fr 1fr
Gap: 16px    →  Gap: 24px      →  Gap: 32px
```

---

## ✨ Shadow System

```
XS Shadow      SM Shadow      MD Shadow      LG Shadow
Subtle         Light          Moderate       Strong
────           ────           ────           ────
Metadata       Cards          Elevated       Modals
Subtle hints   Default        Important      Prominent


COLOR-TINTED SHADOWS:

Gold Glow       Red Glow        Teal Glow
#e8b923         #e74c3c         #1abc9c
Warm shadow     Urgent shadow   Hopeful shadow
```

---

## 🎯 Design Decision Matrix

```
                PROFESSIONAL          WARM
              (Royal Authority)   (Charitable Warmth)
           
Formal         Deep Navy            Warm Gold
Sections       Serif Font           Serif Font
               Minimal Color        Single Accent
               
Emotional      Compassion Red       Hope Teal
Sections       Sans Font            Sans Font
               Strong Color         Soft Gradient
               
Community      Sky Blue             Coral
Sections       Accessible           Energetic
               Trust-focused        Connection-focused
               

DECISION: Use BOTH in every design!
- Header: Navy (professional) + Gold (warm)
- Hero: Gradient (both)
- Programs: Gold (warm) + Cards (inviting)
- Stories: Navy (trust) + Warm text
```

---

## 📋 Component Selection Flowchart

```
"What am I designing?"
        │
    ┌───┼───┐
    │   │   │
 [Button] [Card] [Section]
    │      │        │
    ├─ Primary?  ├─ Content?  ├─ Purpose?
    │  └─ Gold   │  ├─ Program  │  ├─ Hero
    │            │  │ └─ Warm   │  │ └─ Gradient
    │ ├─ Donate? │  │           │  │
    │ │ └─ Red   │  └─ Story    │  ├─ Impact
    │ │          │    └─ Story  │  │ └─ Light
    │ ├─ Join?   │               │  │
    │ │ └─ Teal  │ ├─ Crisis?   │  └─ Gov
    │ │          │ │ └─ Comp.   │    └─ Navy
    │ └─ Info?   │ │            │
    │   └─ Navy  │ └─ Recovery  │
    │            │   └─ Hopeful │
    │
    └─ Use component!
```

---

## 🎨 Color Emotional Association

```
Deep Navy       Professional, Trustworthy, Royal
████████        "We are authoritative and established"

Warm Gold       Inviting, Premium, Encouraging  
████████        "We value you and appreciate your help"

Compassion Red  Urgent, Emotional, Human
████████        "We feel your pain and want to help"

Hope Teal       Healing, Growth, Transformation
████████        "Your life is changing for better"

Warm Beige      Natural, Approachable, Human
████████        "We are accessible and real"

Deep Green      Life, Sustainability, Growth
████████        "We build for the future"

Sky Blue        Care, Trust, Openness
████████        "We are here to support you"

Coral           Energy, Community, Connection
████████        "Together we are stronger"
```

---

## ✅ Quick Implementation Checklist

- [ ] Import `royalDesign.ts`
- [ ] Import components
- [ ] Use `royalColors` for all colors
- [ ] Use `spacing` for all padding/gaps
- [ ] Use `borderRadius` for all corners
- [ ] Use `gradients` for backgrounds
- [ ] Use `componentStyles` for reusable styles
- [ ] Choose button variant by context
- [ ] Choose card variant by content
- [ ] Test on mobile/tablet/desktop
- [ ] Verify color contrast (WCAG AA+)
- [ ] Add hover effects
- [ ] Test keyboard navigation

---

**This visual reference is your quick guide to the JHCO design system.
Refer back to DESIGN_SYSTEM_GUIDE.md for detailed usage patterns.**
