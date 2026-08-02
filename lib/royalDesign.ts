// Royal Design System - JHCO (Royal Charity under Hashemite Patronage)
// PHILOSOPHY: ROYAL FIRST, CHARITY SECOND
// Inspired by: Jordanian Royal Hashemite Court, Royal Jordanian Airlines, Arab Royal Aesthetics
// Hierarchy: Authority → Prestige → Formal Elegance → Then Charitable Mission

export const royalColors = {
  // PRIMARY PALETTE: ROYAL AUTHORITY (Inspired by Jordanian Royal Heritage)
  // These colors establish AUTHORITY, PRESTIGE, and OFFICIAL STATUS first
  deepRoyal: '#4a148c',        // Deep Royal Purple (most formal, regal, prestigious)
  darkNavy: '#001a4d',         // Dark Navy (formal authority, official)
  hashemiteGold: '#d4af37',    // Hashemite Gold (precious metal, royal privilege, power)
  royalBurgundy: '#5d1049',    // Royal Burgundy (heritage, nobility, formality)
  deepCrimson: '#8b0000',      // Deep Crimson (formal, stately, official)

  // SECONDARY PALETTE: FORMAL ELEGANCE (Supporting Royal Authority)
  formalCharcoal: '#2b2d42',   // Formal Charcoal (sophisticated, reserved)
  ivoryBg: '#f5f1e8',          // Ivory/Cream (refined, elegant, not "warm")
  paleGold: '#e8dcc8',         // Pale Gold (subtle, formal accent)
  darkGrayText: '#2c2c2c',     // Dark Gray for text (readable, formal)

  // TERTIARY PALETTE: CHARITY COLORS (Charity as Support, Not Primary)
  // These appear only in specific contexts to support the royal mission
  charityRed: '#c41e3a',       // Charity Red (formal, not bright - used sparingly)
  compassionTeal: '#0d7377',   // Compassion Teal (muted, formal - secondary)
  impactGreen: '#1b4332',      // Impact Green (dark, formal - supporting)

  // NEUTRAL PALETTE: Text & Backgrounds
  textOfficial: '#1a1a2e',     // Official text (very dark, authoritative)
  textSecondary: '#5a5a6a',    // Secondary text (muted, formal)
  bgLight: '#ffffff',          // Light background
  bgRefined: '#faf8f5',        // Refined background (ivory-leaning)
  borderFormal: '#d4c5a9',     // Formal border (gold-tinted, elegant)
  borderSubtle: '#e8dcc8',     // Subtle border (pale)

  // ACCENTS: GOLD (Royal Precious Metal)
  goldBright: '#f4c430',       // Bright Gold (hover, emphasis)
  goldDark: '#b8860b',         // Dark Gold (active, depth)
};


export const royalTypography = {
  // Font Families: FORMAL & ELEGANT (Not warm, not friendly - ROYAL)
  serif: '"Garamond", "Georgia", "Bodoni MT", serif',         // Formal elegance, timeless, aristocratic
  sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif', // Only for body, secondary content

  // Sizes: Traditional royal hierarchy (formal, not inviting)
  sizes: {
    h1: '64px',      // Monumental, official (was 56px, increased for authority)
    h2: '48px',      // Stately, impressive
    h3: '32px',      // Formal subsection
    h4: '22px',      // Card titles, structured
    h5: '18px',      // Labels, formal
    body: '16px',    // Body text (base, formal)
    small: '14px',   // Secondary text
    tiny: '12px',    // Fine print, metadata
  },

  // Weights: Formal, strong presence
  weights: {
    light: 300,      // Delicate headings only
    regular: 400,    // Body text
    medium: 500,     // Formal labels
    semibold: 600,   // Emphasis
    bold: 700,       // Headings, authority
    extrabold: 800,  // Most important headings
  },

  // Line Heights: TIGHT for formal elegance (not generous/warm)
  lineHeights: {
    tight: 1.1,      // Headings (compressed, formal)
    normal: 1.4,     // Body text (readable, formal)
    relaxed: 1.6,    // Only for quotes, special sections
  },

  // Letter Spacing: INCREASED for formal, royal elegance
  letterSpacing: {
    tight: '0px',
    normal: '0.5px',   // Standard body (subtle formality)
    wide: '1px',       // Labels, emphasis
    wider: '1.5px',    // Section headers (formal)
    widest: '2.5px',   // ALL-CAPS titles (traditional royal style)
  },
};

// GRADIENT COMBINATIONS: ROYAL & FORMAL (Sophisticated, not warm)
export const gradients = {
  // Royal Primary Gradients (Deep, Formal, Prestigious)
  royalPrimary: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',     // Purple to Navy (most formal)
  royalGold: 'linear-gradient(135deg, #4a148c 0%, #d4af37 100%)',        // Purple to Gold (royal prestige)
  darkFormal: 'linear-gradient(135deg, #001a4d 0%, #2b2d42 100%)',      // Navy to Charcoal (authority)

  // Formal Heraldic Gradients (Official, stately)
  burgandy: 'linear-gradient(135deg, #5d1049 0%, #8b0000 100%)',         // Burgundy to Crimson (heritage)
  goldRegal: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',        // Gold shades (precious, formal)

  // Background Gradients (Refined, not inviting)
  refinedBg: 'linear-gradient(135deg, #faf8f5 0%, #f5f1e8 100%)',        // Ivory gradients (elegant)
  formalOverlay: 'linear-gradient(180deg, rgba(74, 20, 140, 0.8) 0%, rgba(0, 26, 77, 0.6) 100%)', // Deep formal overlay

  // Charity Support Gradients (Subtle, secondary)
  charityAccent: 'linear-gradient(135deg, rgba(196, 30, 58, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)',  // Red+Gold muted
};

// SPACING SYSTEM: Consistent, warm layouts
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

// BORDER RADIUS: Warm, inviting shapes
export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
  card: '12px',
  button: '8px',
};

// SHADOWS: FORMAL & REGAL (Deep, dignified, prestigious)
export const shadows = {
  none: 'none',
  xs: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
  sm: '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
  md: '0 8px 16px 0 rgba(0, 0, 0, 0.15)',
  lg: '0 12px 28px 0 rgba(0, 0, 0, 0.2)',
  xl: '0 20px 40px 0 rgba(0, 0, 0, 0.25)',
  // Formal depths (not warm glows)
  royal: '0 12px 28px -4px rgba(74, 20, 140, 0.2)',       // Royal purple depth
  formal: '0 8px 20px -2px rgba(0, 26, 77, 0.2)',         // Navy formal
  gold: '0 8px 24px -4px rgba(212, 175, 55, 0.15)',       // Gold shine (subtle)
};

// TRANSITIONS: Smooth, elegant
export const transitions = {
  fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
  colorFast: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  colorSlow: 'color 350ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const royalElements = {
  // ROYAL SYMBOLS (Primary, formal)
  crown: '👑',              // Royal Hashemite Crown - symbol of authority
  seal: '⚜️',              // Official seal - heraldic authority
  shield: '🛡️',            // Heraldic shield - royal protection
  flag: '🇯🇴',             // Jordanian flag - national identity
  star: '⭐',              // Seven-pointed star - royal insignia

  // FORMAL SYMBOLS (Secondary, used sparingly)
  scroll: '📜',            // Official documents, heritage
  building: '🏛️',         // Government, institutional

  // CHARITY SYMBOLS (Tertiary, used minimally)
  heart: '❤️',             // Compassion (used sparingly, not prominent)
  handshake: '🤝',         // Partnership (used sparingly)
  helping: '🙏',           // Support (used sparingly, formal tone)
};

// COMPONENT STYLES: ROYAL AUTHORITY + FORMAL ELEGANCE
export const componentStyles = {
  // BUTTONS: FORMAL, AUTHORITATIVE, ROYAL FIRST
  buttons: {
    // PRIMARY ROYAL: Deep purple/navy with gold - maximum authority
    royalPrimary: {
      bg: '#4a148c',           // Deep Royal Purple (authority, prestige)
      text: '#d4af37',         // Hashemite Gold (royal, precious)
      hover: '#5e35b1',        // Lighter Purple (subtle elevation)
      active: '#3d0f66',       // Darker Purple (depth)
      padding: '14px 32px',    // More formal spacing
      fontSize: '16px',
      fontWeight: 700,         // Bold for authority
      fontFamily: 'Garamond, serif',
      letterSpacing: '0.5px',  // Formal spacing
      textTransform: 'uppercase', // Traditional royal style
      borderRadius: '2px',     // Sharp, formal corners
      border: 'none',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      boxShadow: '0 8px 20px -2px rgba(74, 20, 140, 0.2)',
    },

    // SECONDARY ROYAL: Navy with gold border - formal, official
    royalSecondary: {
      bg: 'transparent',
      text: '#001a4d',         // Dark Navy (authority)
      hover: '#f5f1e8',        // Ivory hover
      active: 'rgba(0, 26, 77, 0.1)',
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: 700,
      fontFamily: 'Garamond, serif',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      borderRadius: '2px',
      border: '2px solid #d4af37', // Gold formal border
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      boxShadow: 'none',
    },

    // CHARITY CTA: Used sparingly for donation/help actions (NOT primary)
    charityAction: {
      bg: '#c41e3a',           // Formal Charity Red (not bright)
      text: '#ffffff',         // White
      hover: '#a21830',        // Darker red
      active: '#8b1428',       // Much darker
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: 700,
      fontFamily: 'Garamond, serif',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      borderRadius: '2px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      boxShadow: '0 8px 16px -2px rgba(196, 30, 58, 0.2)',
    },

    // TERTIARY: Formal secondary action
    tertiary: {
      bg: 'transparent',
      text: '#5a5a6a',         // Secondary text (muted, formal)
      hover: '#e8dcc8',        // Pale gold hover
      active: '#d4c5a9',       // Formal border color
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '2px',
      border: '1px solid #d4c5a9',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      boxShadow: 'none',
    },
  },

  // CARDS: FORMAL & ELEGANT (Structured, dignified, royal)
  cards: {
    // ROYAL CARD: Deep background with gold border (formal, prestigious)
    royal: {
      bg: '#ffffff',
      border: '2px solid #d4af37',      // Gold formal border (royal)
      borderRadius: '0px',              // Sharp, formal corners
      padding: '28px',
      boxShadow: '0 12px 28px -4px rgba(74, 20, 140, 0.15)',
      transition: 'all 200ms ease-in-out',
    },

    // FORMAL DEFAULT: Clean, official (white with formal border)
    formal: {
      bg: '#ffffff',
      border: '1px solid #d4c5a9',      // Formal gold-tinted border
      borderRadius: '0px',
      padding: '28px',
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
      transition: 'all 200ms ease-in-out',
    },

    // REFINED: Ivory background (elegant, not warm)
    refined: {
      bg: '#f5f1e8',                    // Ivory (refined, elegant)
      border: '1px solid #e8dcc8',
      borderRadius: '0px',
      padding: '28px',
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
      transition: 'all 200ms ease-in-out',
    },

    // DARK FORMAL: Deep background for official/government content
    darkFormal: {
      bg: '#001a4d',                    // Dark Navy (authoritative)
      border: '1px solid #d4af37',      // Gold accent border
      borderRadius: '0px',
      padding: '28px',
      color: '#ffffff',
      boxShadow: '0 12px 28px 0 rgba(0, 0, 0, 0.2)',
      transition: 'all 200ms ease-in-out',
    },

    // CHARITY SUPPORT: Muted red/gold (charity as secondary)
    charitySupport: {
      bg: 'rgba(196, 30, 58, 0.03)',    // Very subtle red (not prominent)
      border: '1px solid rgba(212, 175, 55, 0.3)', // Gold hint
      borderRadius: '0px',
      padding: '28px',
      boxShadow: 'none',
      transition: 'all 200ms ease-in-out',
    },
  },

  // SECTIONS: Full-width containers (FORMAL, ROYAL-FOCUSED)
  sections: {
    // LIGHT FORMAL: White/Ivory (standard, approachable formal)
    light: {
      bg: '#ffffff',
      padding: '80px 24px',               // Generous, formal spacing
      borderBottom: '1px solid #e8dcc8',  // Formal divider
      borderLeft: 'none',
      borderRight: 'none',
    },

    // REFINED: Ivory background (elegant, not warm)
    refined: {
      bg: '#f5f1e8',
      padding: '80px 24px',
      borderBottom: '1px solid #d4c5a9',
      borderLeft: 'none',
      borderRight: 'none',
    },

    // ROYAL PRIMARY: Deep purple (most authoritative, formal)
    royal: {
      bg: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
      color: '#ffffff',
      padding: '80px 24px',
      borderBottom: 'none',
      borderLeft: '4px solid #d4af37',    // Gold formal accent
      borderRight: 'none',
    },

    // ROYAL DARK: Navy (formal, official authority)
    royalDark: {
      bg: 'linear-gradient(135deg, #001a4d 0%, #2b2d42 100%)',
      color: '#ffffff',
      padding: '80px 24px',
      borderBottom: 'none',
      borderLeft: '4px solid #d4af37',
      borderRight: 'none',
    },

    // GOVERNMENT OFFICIAL: Deep formal for compliance/official sections
    government: {
      bg: '#1a1a2e',                      // Very dark (authority)
      color: '#d4af37',                   // Gold text (official, formal)
      padding: '80px 24px',
      borderBottom: 'none',
      borderLeft: '4px solid #d4af37',
      borderRight: 'none',
    },

    // CHARITY SUPPORT SECTION: Red/Gold but muted (NOT primary)
    charity: {
      bg: 'linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
      color: '#2c2c2c',
      padding: '80px 24px',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      borderLeft: 'none',
      borderRight: 'none',
    },
  },

  // TEXT STYLES (FORMAL, ROYAL, ELEGANT)
  text: {
    // Official heading (most formal)
    officialHeading: {
      fontSize: '64px',
      lineHeight: 1.1,
      color: '#4a148c',                  // Deep Royal Purple
      fontWeight: 800,
      fontFamily: '"Garamond", "Georgia", serif',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',        // Traditional royal style
    },

    // Primary heading (formal, regal)
    heading: {
      fontSize: '56px',
      lineHeight: 1.1,
      color: '#001a4d',                  // Dark Navy (authority)
      fontWeight: 700,
      fontFamily: '"Garamond", "Georgia", serif',
      letterSpacing: '0.5px',
    },

    // Subheading (formal)
    subheading: {
      fontSize: '32px',
      lineHeight: 1.2,
      color: '#4a148c',                  // Royal Purple
      fontWeight: 700,
      fontFamily: '"Garamond", "Georgia", serif',
      letterSpacing: '0.5px',
    },

    // Body text (formal, readable)
    body: {
      fontSize: '16px',
      lineHeight: 1.4,
      color: '#2c2c2c',                  // Dark Gray (formal, not warm)
      fontWeight: 400,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      letterSpacing: '0px',
    },

    // Label (formal, official)
    label: {
      fontSize: '14px',
      lineHeight: 1.4,
      color: '#5a5a6a',                  // Secondary text (formal)
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',              // Formal spacing
    },

    // Formal caption (small official text)
    caption: {
      fontSize: '12px',
      lineHeight: 1.4,
      color: '#7f7f8f',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
};

// COMPONENT DEFINITIONS: ROYAL-FOCUSED, FORMAL ELEGANCE
export const componentDefinitions = {
  // ROYAL CARD: Formal, prestigious card (primary component)
  RoyalCard: {
    name: 'RoyalCard',
    description: 'Formal royal card with gold border and dignified styling',
    props: {
      title: 'string (required)',
      description: 'string (optional)',
      icon: 'string/emoji (optional)',
      variant: 'royal | formal | refined (default: royal)',
      image: 'string (optional)',
      action: 'string (optional)',
      actionHref: 'string (optional)',
    },
    styles: {
      royal: {
        bg: '#ffffff',
        border: '2px solid #d4af37',
        padding: '28px',
        borderRadius: '0px',
        boxShadow: '0 12px 28px -4px rgba(74, 20, 140, 0.15)',
      },
      formal: {
        bg: '#ffffff',
        border: '1px solid #d4c5a9',
        padding: '28px',
        borderRadius: '0px',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
      },
      refined: {
        bg: '#f5f1e8',
        border: '1px solid #e8dcc8',
        padding: '28px',
        borderRadius: '0px',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },

  // ROYAL BUTTON: Formal, authoritative CTA
  RoyalButton: {
    name: 'RoyalButton',
    description: 'Formal royal button with authority and elegance',
    props: {
      label: 'string (required)',
      variant: 'royalPrimary | royalSecondary | charityAction (default: royalPrimary)',
      size: 'sm | md | lg (default: md)',
      icon: 'string/emoji (optional)',
      onClick: 'function (required)',
      disabled: 'boolean (optional)',
    },
    styles: {
      variants: {
        royalPrimary: componentStyles.buttons.royalPrimary,
        royalSecondary: componentStyles.buttons.royalSecondary,
        charityAction: componentStyles.buttons.charityAction,
      },
    },
  },

  // ROYAL STAT: Formal data presentation with royal styling
  RoyalStat: {
    name: 'RoyalStat',
    description: 'Formal royal stat display with dignity and authority',
    props: {
      number: 'string | number (required)',
      label: 'string (required)',
      icon: 'string/emoji (optional)',
      suffix: 'string (optional)',
      trend: 'up | down | stable (optional)',
    },
    styles: {
      container: {
        padding: '32px',
        borderRadius: '0px',
        textAlign: 'center',
        border: '1px solid #d4c5a9',
        bg: '#f5f1e8',
      },
      number: {
        fontSize: '56px',
        fontWeight: 800,
        lineHeight: 1,
        color: '#4a148c',
        fontFamily: '"Garamond", serif',
      },
      label: {
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a',
      },
    },
  },

  // OFFICIAL SEAL: Royal authority symbol
  OfficialSeal: {
    name: 'OfficialSeal',
    description: 'Official royal seal or certification mark',
    props: {
      text: 'string (required)',
      icon: 'string/emoji (default: 👑)',
      subtitle: 'string (optional)',
    },
    styles: {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '16px',
        border: '2px solid #d4af37',
        borderRadius: '50%',
        width: '120px',
        height: '120px',
      },
      icon: {
        fontSize: '48px',
      },
      text: {
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        textAlign: 'center',
        color: '#4a148c',
      },
    },
  },

  // FORMAL DIVIDER: Gold line with formal styling
  FormalDivider: {
    name: 'FormalDivider',
    description: 'Formal gold divider line (heraldic element)',
    props: {
      variant: 'simple | double | accent (default: simple)',
      width: 'string (optional, default: 100%)',
    },
    styles: {
      simple: {
        height: '1px',
        bg: '#d4af37',
        margin: '32px 0',
      },
      double: {
        background: 'linear-gradient(to right, #d4af37 0%, #d4af37 48%, transparent 48%, transparent 52%, #d4af37 52%, #d4af37 100%)',
        height: '3px',
        margin: '32px 0',
      },
      accent: {
        height: '2px',
        bg: 'linear-gradient(to right, #4a148c 0%, #d4af37 50%, #4a148c 100%)',
        margin: '32px 0',
      },
    },
  },

  // HERITAGE SECTION: Formal section with royal styling
  HeritageSection: {
    name: 'HeritageSection',
    description: 'Formal heritage/history section with regal styling',
    props: {
      title: 'string (required)',
      description: 'string (optional)',
      content: 'ReactNode (optional)',
      image: 'string (optional)',
      alignment: 'left | right (default: left)',
    },
    styles: {
      container: {
        padding: '80px 24px',
        bg: '#f5f1e8',
        borderLeft: '4px solid #d4af37',
      },
      title: {
        fontSize: '48px',
        fontFamily: '"Garamond", serif',
        fontWeight: 700,
        color: '#4a148c',
        letterSpacing: '0.5px',
      },
    },
  },

  // FORMAL BLOCK QUOTE: Elegantly styled quote
  FormalQuote: {
    name: 'FormalQuote',
    description: 'Formal block quote with royal styling',
    props: {
      quote: 'string (required)',
      attribution: 'string (optional)',
      icon: 'string/emoji (default: ")',
    },
    styles: {
      container: {
        padding: '32px',
        bg: '#faf8f5',
        border: '1px solid #d4c5a9',
        borderLeft: '4px solid #d4af37',
      },
      quote: {
        fontSize: '20px',
        fontStyle: 'italic',
        fontFamily: '"Garamond", serif',
        color: '#4a148c',
        lineHeight: 1.6,
      },
      attribution: {
        marginTop: '16px',
        fontSize: '14px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a',
      },
    },
  },
};

export const menuStructure = {
  main: [
    {
      label: 'الرعاية الملكية',
      labelEn: 'Royal Patronage',
      href: '/royal-patronage',
      icon: '👑',
    },
    {
      label: 'برامجنا',
      labelEn: 'Our Programs',
      href: '/programs',
      icon: '🎯',
    },
    {
      label: 'عن الهيئة',
      labelEn: 'About Us',
      href: '/about',
      icon: 'ℹ️',
    },
    {
      label: 'الحكومة والشفافية',
      labelEn: 'Government',
      href: '/government',
      icon: '📋',
    },
    {
      label: 'التأثير والإحصائيات',
      labelEn: 'Impact',
      href: '/impact',
      icon: '📊',
    },
    {
      label: 'شارك معنا',
      labelEn: 'Get Involved',
      href: '/get-involved',
      icon: '❤️',
    },
  ],
  government: [
    { label: 'مركز الإعلام', labelEn: 'Media Center', icon: '📰' },
    { label: 'التقارير', labelEn: 'Reports', icon: '📄' },
    { label: 'الامتثال', labelEn: 'Compliance', icon: '⚖️' },
    { label: 'الشفافية', labelEn: 'Transparency', icon: '👁️' },
    { label: 'الإعلانات', labelEn: 'Announcements', icon: '📢' },
    { label: 'الجهات الحكومية', labelEn: 'Government Partners', icon: '🏛️' },
  ],
  programs: [
    { label: 'الأزمات والطوارئ', labelEn: 'Crisis Response', icon: '🚨' },
    { label: 'الرعاية الصحية', labelEn: 'Healthcare', icon: '🏥' },
    { label: 'التعليم', labelEn: 'Education', icon: '📚' },
    { label: 'الأمن الغذائي', labelEn: 'Food Security', icon: '🍽️' },
    { label: 'المأوى والإسكان', labelEn: 'Shelter', icon: '🏠' },
    { label: 'سبل العيش', labelEn: 'Livelihoods', icon: '💼' },
    { label: 'تمكين النساء', labelEn: 'Women Empowerment', icon: '👩' },
    { label: 'البرامج الشبابية', labelEn: 'Youth Programs', icon: '👦' },
  ],
  regions: [
    { label: 'الشرق الأوسط', labelEn: 'Middle East', icon: '🌍' },
    { label: 'شمال أفريقيا', labelEn: 'North Africa', icon: '🌍' },
    { label: 'أفريقيا جنوب الصحراء', labelEn: 'Sub-Saharan Africa', icon: '🌍' },
    { label: 'آسيا والمحيط الهادئ', labelEn: 'Asia & Pacific', icon: '🌏' },
  ],
  resources: [
    { label: 'الأخبار', labelEn: 'News', icon: '📰' },
    { label: 'المدونة', labelEn: 'Blog', icon: '✍️' },
    { label: 'الفيديوهات', labelEn: 'Videos', icon: '🎥' },
    { label: 'المنشورات', labelEn: 'Publications', icon: '📖' },
    { label: 'قصص النجاح', labelEn: 'Success Stories', icon: '⭐' },
  ],
  getInvolved: [
    { label: 'تبرع', labelEn: 'Donate', icon: '💝' },
    { label: 'تطوع', labelEn: 'Volunteer', icon: '🤝' },
    { label: 'الشراكات', labelEn: 'Partnerships', icon: '👥' },
    { label: 'الأحداث', labelEn: 'Events', icon: '🎪' },
    { label: 'الرعاية المؤسسية', labelEn: 'Corporate Giving', icon: '🏢' },
  ],
};

export const footerStructure = {
  aboutUs: {
    title: 'عن الهيئة',
    titleEn: 'About JHCO',
    links: [
      { label: 'مهمتنا', labelEn: 'Our Mission', href: '/about/mission' },
      { label: 'رؤيتنا', labelEn: 'Our Vision', href: '/about/vision' },
      { label: 'التاريخ', labelEn: 'History', href: '/about/history' },
      { label: 'القيادة', labelEn: 'Leadership', href: '/about/leadership' },
      { label: 'القيم', labelEn: 'Values', href: '/about/values' },
      { label: 'الفريق', labelEn: 'Team', href: '/about/team' },
    ],
  },
  programs: {
    title: 'البرامج',
    titleEn: 'Programs',
    links: [
      { label: 'جميع البرامج', labelEn: 'All Programs', href: '/programs' },
      { label: 'الأزمات والطوارئ', labelEn: 'Crisis Response', href: '/programs/crisis' },
      { label: 'الصحة والتعليم', labelEn: 'Health & Education', href: '/programs/health' },
      { label: 'الأمن الغذائي', labelEn: 'Food Security', href: '/programs/food' },
      { label: 'التنمية المجتمعية', labelEn: 'Community Dev.', href: '/programs/community' },
      { label: 'التقارير البرامجية', labelEn: 'Program Reports', href: '/programs/reports' },
    ],
  },
  impact: {
    title: 'التأثير',
    titleEn: 'Impact',
    links: [
      { label: 'حيث نعمل', labelEn: 'Where We Work', href: '/where-we-work' },
      { label: 'إحصائيات التأثير', labelEn: 'Impact Stats', href: '/impact/statistics' },
      { label: 'قصص النجاح', labelEn: 'Success Stories', href: '/impact/stories' },
      { label: 'شهادات المستفيدين', labelEn: 'Testimonials', href: '/impact/testimonials' },
      { label: 'التقارير السنوية', labelEn: 'Annual Reports', href: '/impact/reports' },
      { label: 'حالات الدراسة', labelEn: 'Case Studies', href: '/impact/case-studies' },
    ],
  },
  government: {
    title: 'الحكومة والشفافية',
    titleEn: 'Government',
    links: [
      { label: 'مركز الإعلام', labelEn: 'Media Center', href: '/media-center' },
      { label: 'التقارير المالية', labelEn: 'Financial Reports', href: '/financial-reports' },
      { label: 'سياسات الامتثال', labelEn: 'Compliance', href: '/compliance' },
      { label: 'الحكومة الرشيدة', labelEn: 'Governance', href: '/governance' },
      { label: 'مدونة السلوك', labelEn: 'Code of Conduct', href: '/code-of-conduct' },
      { label: 'الشفافية', labelEn: 'Transparency', href: '/transparency' },
    ],
  },
  getInvolved: {
    title: 'شارك معنا',
    titleEn: 'Get Involved',
    links: [
      { label: 'تبرع الآن', labelEn: 'Donate Now', href: '/donate' },
      { label: 'تطوع معنا', labelEn: 'Volunteer', href: '/volunteer' },
      { label: 'الشراكات والرعاية', labelEn: 'Partnerships', href: '/partnerships' },
      { label: 'أحداثنا', labelEn: 'Events', href: '/events' },
      { label: 'الرعاية المؤسسية', labelEn: 'Corporate CSR', href: '/corporate' },
      { label: 'نشرتنا الإخبارية', labelEn: 'Newsletter', href: '/newsletter' },
    ],
  },
  resources: {
    title: 'الموارد',
    titleEn: 'Resources',
    links: [
      { label: 'الأخبار والمدونة', labelEn: 'News & Blog', href: '/news' },
      { label: 'الفيديوهات', labelEn: 'Videos', href: '/videos' },
      { label: 'معرض الصور', labelEn: 'Photo Gallery', href: '/gallery' },
      { label: 'الأسئلة الشائعة', labelEn: 'FAQ', href: '/faq' },
      { label: 'اتصل بنا', labelEn: 'Contact', href: '/contact' },
      { label: 'الخريطة', labelEn: 'Sitemap', href: '/sitemap' },
    ],
  },
  legal: {
    title: 'القانونية',
    titleEn: 'Legal',
    links: [
      { label: 'سياسة الخصوصية', labelEn: 'Privacy Policy', href: '/privacy' },
      { label: 'الشروط والأحكام', labelEn: 'Terms', href: '/terms' },
      { label: 'سياسات الاستخدام', labelEn: 'Usage Policy', href: '/usage-policy' },
      { label: 'الوصولية', labelEn: 'Accessibility', href: '/accessibility' },
      { label: 'الاتجار بالبشر', labelEn: 'Human Trafficking', href: '/trafficking' },
      { label: 'الإفصاح المالي', labelEn: 'Financial Disclosure', href: '/disclosure' },
    ],
  },
  contact: {
    title: 'اتصل بنا',
    titleEn: 'Contact Us',
    links: [
      { label: 'المقر الرئيسي - عمّان', labelEn: 'HQ - Amman', href: '/contact/amman' },
      { label: 'المكاتب الإقليمية', labelEn: 'Regional Offices', href: '/contact/regional' },
      { label: 'نموذج الاتصال', labelEn: 'Contact Form', href: '/contact/form' },
      { label: 'البريد الإلكتروني', labelEn: 'Email', href: 'mailto:info@jhco.org' },
      { label: 'الهاتف', labelEn: 'Phone', href: 'tel:+962612345678' },
      { label: 'وسائل التواصل', labelEn: 'Social Media', href: '/contact/social' },
    ],
  },
};

// ============================================================================
// DESIGN SYSTEM DOCUMENTATION & GUIDELINES
// ROYAL FIRST, CHARITY SECOND
// ============================================================================

/**
 * JHCO DESIGN SYSTEM: ROYAL AUTHORITY FIRST, CHARITABLE MISSION SECOND
 *
 * PHILOSOPHY:
 * This design system is deliberately ROYAL FIRST, CHARITY SECOND.
 * The visitor's first impression must be: "This is an official, prestigious, royal organization"
 * Only the second thought should be: "They do important humanitarian work"
 *
 * INSPIRED BY:
 * - Jordanian Royal Hashemite Court
 * - Royal Jordanian Airlines branding (gold + navy + formal elegance)
 * - Arab royal institutional design (formal, dignified, authoritative)
 * - Traditional heraldry and official seals
 *
 * CORE PRINCIPLES:
 * 1. ROYAL AUTHORITY: Deep purple/navy establishes power and prestige
 * 2. FORMAL ELEGANCE: Garamond serif, increased letter spacing, tight line heights
 * 3. PRECIOUS METALS: Gold (#d4af37) represents royal privilege and wealth
 * 4. STRUCTURED HIERARCHY: Clear, formal, organized layouts
 * 5. OFFICIAL TONE: Formal, dignified, authoritative (NOT warm, NOT friendly)
 * 6. CHARITY AS SUPPORT: Charitable mission exists to serve royal vision, not primary
 *
 * ============================================================================
 * COLOR HIERARCHY: ROYAL FIRST
 * ============================================================================
 *
 * PRIMARY ROYAL (#4a148c - Deep Purple)
 * - Most formal, regal, prestigious color
 * - Use for: Main headings, primary sections, hero backgrounds
 * - Psychology: Power, royalty, prestige, authority
 * - Tone: Official, formal, aristocratic
 *
 * ROYAL NAVY (#001a4d - Dark Navy)
 * - Formal authority, official government tone
 * - Use for: Navigation, body sections, text emphasis
 * - Psychology: Trust, formal authority, professional
 * - Tone: Official, dignified, authoritative
 *
 * HASHEMITE GOLD (#d4af37 - Precious Metal)
 * - Royal privilege, power, precious resource
 * - Use for: Accents, buttons, highlights, borders (formal use only)
 * - Psychology: Wealth, prestige, value, nobility
 * - Tone: Royal, precious, exclusive
 * - IMPORTANT: Gold is an ACCENT only, not primary
 *
 * SECONDARY COLORS (Charity - Formal, not bright)
 * - Charity Red (#c41e3a): Formal, dignified, used sparingly
 * - Compassion Teal (#0d7377): Muted, formal, secondary support
 * - Impact Green (#1b4332): Dark, formal, supporting role
 * - These colors SUPPORT the royal mission, not lead it
 *
 * ============================================================================
 * TYPOGRAPHY: FORMAL, ELEGANT, NOT WARM
 * ============================================================================
 *
 * SERIF FONTS (Garamond, Georgia)
 * Use for: All headings, official text, formal content
 * Character: Elegant, timeless, aristocratic, NOT modern
 * Weights: Bold (700-800) for maximum formality
 * Spacing: 0.5px+ letter-spacing for regal feel
 * Transform: UPPERCASE for most important headings (traditional royal style)
 *
 * SANS-SERIF (System fonts)
 * Use for: Body text only (secondary)
 * Character: Readable, formal, not warm or approachable
 * Weights: Regular (400) for body, medium (500-600) for labels
 *
 * LINE HEIGHT STRATEGY (Tight, formal)
 * - Headings: 1.1 (compressed, formal, prestigious)
 * - Body: 1.4 (readable but formal, not generous)
 * - Quotes: 1.6 (only special formal content)
 *
 * LETTER SPACING STRATEGY (Generous, formal)
 * - Body: 0.5px (subtle formality)
 * - Labels: 1px+ (formal, official tone)
 * - Headings: 0.5px+ (regal, dignified)
 * - ALL-CAPS: 2.5px+ (traditional royal elegance)
 *
 * ============================================================================
 * LAYOUT & STRUCTURE: FORMAL, DIGNIFIED, HIERARCHICAL
 * ============================================================================
 *
 * SPACING PRINCIPLE: Generous, formal (not cozy or warm)
 * - Section padding: 80px (formal, stately)
 * - Card padding: 28px (dignified interior)
 * - Element gaps: 24px-32px (structured, not cramped)
 *
 * CORNER RADIUS: Sharp, formal (not rounded, not friendly)
 * - Cards: 0px (sharp formal edges)
 * - Buttons: 2px (minimal rounding, formal)
 * - Special elements: 0px default (formal rectangle)
 *
 * DIVIDERS: Gold lines (heraldic, formal)
 * - Main sections: 4px gold left border
 * - Accent: Gold horizontal lines between sections
 * - Purpose: Formal, official visual structure
 *
 * ALIGNMENT: Centered, symmetrical (traditional formal)
 * - Hero sections: Center-aligned
 * - Key messaging: Symmetrical layouts
 * - CTAs: Centered (formal, not left-aligned)
 *
 * ============================================================================
 * COMPONENT PHILOSOPHY: ROYAL FIRST
 * ============================================================================
 *
 * ROYAL COMPONENTS (Primary, prominent)
 * - RoyalCard: White with gold border (most prestigious)
 * - RoyalButton: Deep purple with gold text (authoritative)
 * - FormalDivider: Gold lines (heraldic structure)
 * - OfficialSeal: Royal emblem with crown
 * - HeritageSection: Formal brown/gold (royal legacy)
 * Use: Headers, primary CTAs, official messaging, government sections
 *
 * FORMAL COMPONENTS (Secondary, supporting)
 * - FormalQuote: Serif italic with gold accent
 * - RoyalStat: Formal data presentation
 * - Dark formal sections: Navy/charcoal backgrounds
 * Use: Heritage, impact data, official information
 *
 * CHARITY COMPONENTS (Tertiary, minimal)
 * - Charity action buttons: Formal red only
 * - Charity support cards: Very subtle red/gold tint
 * - Only used for specific donation/help sections
 * Use: Sparingly, in designated sections, not prominent
 *
 * ============================================================================
 * BUTTONS: STRICT HIERARCHY (Royal First)
 * ============================================================================
 *
 * PRIMARY ROYAL (Deep Purple + Gold)
 * - Most prominent, formal, authoritative
 * - Uses: Learn more, official actions, official CTAs
 * - Tone: "This is an official action of a prestigious organization"
 * - NOT for casual "donate" - use for formal actions
 *
 * SECONDARY ROYAL (Navy + Gold Border)
 * - Professional, official, less prominent than primary
 * - Uses: Secondary official actions, links
 * - Tone: Professional, authoritative
 *
 * CHARITY ACTION (Formal Red)
 * - ONLY for donation and emergency help
 * - Uses: "Donate Now", "Get Emergency Help"
 * - Tone: Urgent but formal, not casual
 * - IMPORTANT: Not the primary button on the page
 *
 * TERTIARY (Formal, minimal)
 * - Gray/minimal styling
 * - Uses: Skip links, secondary navigation
 * - Tone: Understated, formal
 *
 * ============================================================================
 * CARDS: FORMAL, DIGNIFIED
 * ============================================================================
 *
 * ROYAL CARD (Gold border)
 * - White background with 2px gold border
 * - Uses: Most important content, official messaging
 * - Tone: Prestigious, formal, elevated
 *
 * FORMAL CARD (Subtle border)
 * - White with thin formal border
 * - Uses: Standard content, programs, official info
 * - Tone: Professional, organized
 *
 * REFINED CARD (Ivory background)
 * - Ivory background with subtle border
 * - Uses: Supporting content, quotes, heritage
 * - Tone: Elegant, formal, timeless
 *
 * DARK FORMAL (Navy background)
 * - Deep navy with gold border
 * - Uses: Government, compliance, official declarations
 * - Tone: Most authoritative, official
 *
 * ============================================================================
 * SECTIONS: FORMAL, STRUCTURED
 * ============================================================================
 *
 * ROYAL SECTION (Purple gradient + gold border)
 * - Most prominent sections (hero, main messages)
 * - Tone: Authoritative, prestigious
 *
 * ROYAL DARK (Navy gradient + gold border)
 * - Authority, government, official
 * - Tone: Formal, official, authoritative
 *
 * GOVERNMENT (Deep background + gold text)
 * - Compliance, transparency, official sections
 * - Tone: Most authoritative, official
 *
 * REFINED (Ivory background)
 * - Supporting sections, heritage, context
 * - Tone: Elegant, formal
 *
 * CHARITY (Muted red/gold tint - minimal use)
 * - Only for designated charity sections
 * - Tone: Formal, not prominent
 *
 * ============================================================================
 * WHAT NOT TO DO (Anti-patterns)
 * ============================================================================
 *
 * ❌ Do NOT use warm colors as primary (gold should be accent only)
 * ❌ Do NOT use bright, saturated colors (all colors should be formal/muted)
 * ❌ Do NOT use rounded corners on cards (use sharp formal edges)
 * ❌ Do NOT use friendly or casual tone in copy
 * ❌ Do NOT emphasize charity mission equally with royal authority
 * ❌ Do NOT use playful fonts or modern sans-serif for headings
 * ❌ Do NOT use generous white space for "breathing room" (use formal spacing)
 * ❌ Do NOT create "warm" or "inviting" sections (use formal elegance)
 * ❌ Do NOT make buttons colorful or playful (use formal, restrained colors)
 * ❌ Do NOT prioritize emotion over authority in design decisions
 *
 * ============================================================================
 * IMPLEMENTATION CHECKLIST: ROYAL FIRST
 * ============================================================================
 *
 * ✓ Header: Deep purple/navy background with gold accents (royal authority)
 * ✓ Hero: Purple/navy gradient with gold dividers (most formal section)
 * ✓ Stats: Formal stat cards with serif numbers (official impact data)
 * ✓ Programs: RoyalCards with gold borders (not warm, not inviting)
 * ✓ Heritage: FormalQuotes + HeritageSection (royal legacy)
 * ✓ CTAs: RoyalButtons as primary (royal authority first)
 * ✓ Charity: Formal red button ONLY for donations (charity is secondary)
 * ✓ Footer: Formal navy or ivory (continues formal tone)
 * ✓ Government: Dark navy sections + gold text (most authoritative)
 * ✓ Dividers: Gold heraldic lines (formal structure)
 *
 * ============================================================================
 */

// USAGE UTILITIES - ROYAL FIRST HIERARCHY
export const designSystemUsage = {
  // Quick color lookup by ROYAL HIERARCHY (not emotion)
  byHierarchy: {
    // ROYAL (Primary)
    royalPrimary: royalColors.deepRoyal,      // Most formal, most prominent
    royalSecondary: royalColors.darkNavy,     // Formal authority
    royalAccent: royalColors.hashemiteGold,   // Precious accent only

    // FORMAL (Supporting)
    formalText: royalColors.formalCharcoal,
    formalBg: royalColors.ivoryBg,

    // CHARITY (Tertiary, minimal)
    charityPrimary: royalColors.charityRed,   // Formal, muted
    charitySupport: royalColors.compassionTeal,
  },

  // Quick button selection - ROYAL FIRST
  buttonsByContext: {
    // ROYAL ACTIONS (Primary, most prominent)
    official: 'royalPrimary',           // Official actions
    learnMore: 'royalPrimary',         // Learning (official)
    viewReports: 'royalSecondary',     // Government info
    accessPortal: 'royalSecondary',    // Official portal

    // CHARITY ACTIONS (Tertiary, minimal)
    donate: 'charityAction',            // Donation (only button for this)
    emergencyHelp: 'charityAction',    // Emergency (formal, not casual)
    secondary: 'tertiary',             // Minimal actions
  },

  // Quick card selection - ROYAL FIRST
  cardsByContent: {
    // ROYAL (Primary)
    official: 'royal',                 // Official messaging
    government: 'darkFormal',          // Government/compliance
    heritage: 'refined',               // Royal heritage

    // FORMAL (Supporting)
    program: 'formal',                 // Standard programs
    quote: 'refined',                  // Formal quotes
    stat: 'royal',                     // Impact statistics (formal)

    // CHARITY (Tertiary)
    charitySupport: 'charitySupport',  // Only for charity sections
  },

  // Quick section selection - ROYAL FIRST
  sectionsByPurpose: {
    // ROYAL (Primary)
    hero: 'royal',                     // Hero section (most formal)
    monarchy: 'royal',                 // Royal patronage
    authority: 'royalDark',            // Authority sections

    // FORMAL (Supporting)
    programs: 'refined',               // Program content
    heritage: 'refined',               // Royal heritage
    impact: 'light',                   // Impact data

    // GOVERNMENT (Most authoritative)
    government: 'government',          // Compliance/official
    transparency: 'government',        // Transparency/official

    // CHARITY (Tertiary, minimal)
    charity: 'charity',                // Only for designated charity sections
  },

  // Component selection by purpose
  componentsByPurpose: {
    // ROYAL
    mainHeading: 'officialHeading',
    primaryCard: 'RoyalCard',
    primaryButton: 'RoyalButton (royalPrimary)',
    seal: 'OfficialSeal',

    // FORMAL
    quote: 'FormalQuote',
    divider: 'FormalDivider',
    statistic: 'RoyalStat',
    heritage: 'HeritageSection',

    // CHARITY (Minimal)
    donateButton: 'RoyalButton (charityAction)',
  },

  // Design principles to follow
  principles: {
    colorHierarchy: 'Royal Purple/Navy first, Gold accents second, Charity colors tertiary',
    typography: 'Serif (Garamond) for all headings, formal spacing (0.5px+ letter-spacing)',
    layout: 'Formal, structured, hierarchical (NOT cozy, NOT inviting)',
    tone: 'Authoritative, dignified, official (NOT warm, NOT friendly)',
    borders: 'Sharp corners (0-2px radius), formal gold dividers',
    spacing: 'Generous formal spacing (80px sections, 28px cards)',
    emojis: 'Crown 👑 for royal, Seal ⚜️ for official, Heart ❤️ for charity (sparingly)',
  },
};
