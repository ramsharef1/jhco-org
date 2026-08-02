// Royal Design System - JHCO (Royal Charity under Hashemite Patronage)
// Balanced: Professional + Royal | Warm + Human

export const royalColors = {
  // PRIMARY PALETTE: Authority & Warmth Balance
  // Royal Authority
  deepNavy: '#0a1428',         // Royal Navy (authority, trust, professional)
  warmGold: '#e8b923',         // Warm Gold (vibrant, inviting, premium)
  compassionRed: '#e74c3c',    // Compassion Red (emotion, urgency, human)
  hopeTeal: '#1abc9c',         // Hope Teal (healing, growth, recovery)
  warmBeige: '#f5e6d3',        // Warm Beige (approachable, human, natural)

  // SECONDARY PALETTE: Supporting Colors
  deepGreen: '#27ae60',        // Deep Green (life, growth, sustainability)
  skyBlue: '#3498db',          // Sky Blue (trust, care, openness)
  coral: '#ff6b6b',            // Coral (energy, connection, enthusiasm)
  richCream: '#faf8f5',        // Rich Cream (warm background)
  softGray: '#7f8c8d',         // Soft Gray (subtle text, secondary)

  // NEUTRAL PALETTE: Text & Backgrounds
  textDark: '#2c3e50',         // Dark text (readable, warm)
  textMuted: '#95a5a6',        // Muted text (secondary)
  bgLight: '#ffffff',          // Light background
  bgWarm: '#fef9f3',           // Warm background
  border: '#e8dcc8',           // Warm border (beige-based)
  borderLight: '#f0e6d6',      // Light warm border

  // TINTS & SHADES
  goldLight: '#f5d667',        // Light gold (hover states)
  goldDark: '#c9961b',         // Dark gold (active states)
  tealLight: '#48ddc4',        // Light teal (accents)
  tealDark: '#16a085',         // Dark teal (buttons)
  redLight: '#ec7063',         // Light compassion red
  redDark: '#cb4335',          // Dark compassion red
  greenLight: '#52be80',       // Light green (accents)
  greenDark: '#1e8449',        // Dark green (buttons)
};

export const royalTypography = {
  // Font Families: Balance serif (royal) with sans-serif (warmth)
  serif: '"Merriweather", Georgia, "Garamond", serif',        // Warmth + authority
  sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif', // Accessible, warm

  // Sizes: Improved for visual hierarchy & readability
  sizes: {
    h1: '56px',      // Large, inviting (was 64px, adjusted for warmth)
    h2: '42px',      // Secondary heading
    h3: '28px',      // Tertiary heading
    h4: '20px',      // Subheading
    h5: '18px',      // Label
    body: '16px',    // Body text (base)
    small: '14px',   // Small text
    tiny: '12px',    // Tiny text
  },

  // Weights: Warm + readable
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights: More spacing for warmth & readability
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing: Improved for elegance
  letterSpacing: {
    tight: '-0.5px',
    normal: '0px',
    wide: '0.5px',
    wider: '1px',
    widest: '2px',
  },
};

// GRADIENT COMBINATIONS: Premium yet warm
export const gradients = {
  // Royal + Warm gradients
  royalToWarm: 'linear-gradient(135deg, #0a1428 0%, #1abc9c 100%)',    // Navy to Teal
  goldToWarm: 'linear-gradient(135deg, #e8b923 0%, #e74c3c 100%)',     // Gold to Red
  tealToGreen: 'linear-gradient(135deg, #1abc9c 0%, #27ae60 100%)',    // Teal to Green
  warmBg: 'linear-gradient(135deg, #fef9f3 0%, #f5e6d3 100%)',         // Warm background
  compassionate: 'linear-gradient(135deg, #e74c3c 0%, #e8b923 100%)',  // Red to Gold (emotion + warmth)
  hopeful: 'linear-gradient(135deg, #1abc9c 0%, #3498db 100%)',        // Teal to Blue (hope + trust)
  vibrant: 'linear-gradient(135deg, #ff6b6b 0%, #f5d667 100%)',        // Coral to Gold (energy + warmth)
  overlay: 'linear-gradient(180deg, rgba(10, 20, 40, 0.7) 0%, rgba(26, 188, 156, 0.3) 100%)', // Dark overlay
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

// SHADOWS: Warm depth
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  warm: '0 4px 20px -2px rgba(232, 185, 35, 0.15)', // Gold glow
  compassionate: '0 4px 20px -2px rgba(231, 76, 60, 0.15)', // Red glow
  hopeful: '0 4px 20px -2px rgba(26, 188, 156, 0.15)', // Teal glow
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
  // Crown symbol for royalty
  crown: '👑',
  // Heraldic symbols
  shield: '🛡️',
  // Official seals
  seal: '⚜️',
  // National elements
  flag: '🇯🇴',
  // Warmth symbols
  heart: '❤️',
  handshake: '🤝',
  star: '⭐',
  leaf: '🌿',
};

// COMPONENT STYLES: Professional + Warm
export const componentStyles = {
  // BUTTONS: Clear CTAs with warmth
  buttons: {
    primary: {
      bg: '#e8b923',           // Warm Gold
      text: '#0a1428',         // Dark Navy
      hover: '#f5d667',        // Light Gold
      active: '#c9961b',       // Dark Gold
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 12px rgba(232, 185, 35, 0.2)',
    },
    royal: {
      bg: '#0a1428',           // Deep Navy
      text: '#e8b923',         // Warm Gold
      hover: '#1a2540',        // Lighter Navy
      active: '#0a1428',       // Deep Navy
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: '2px solid #e8b923',
      cursor: 'pointer',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 12px rgba(10, 20, 40, 0.2)',
    },
    compassion: {
      bg: '#e74c3c',           // Compassion Red
      text: '#ffffff',         // White
      hover: '#ec7063',        // Light Red
      active: '#cb4335',       // Dark Red
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 12px rgba(231, 76, 60, 0.2)',
    },
    hopeful: {
      bg: '#1abc9c',           // Hope Teal
      text: '#ffffff',         // White
      hover: '#48ddc4',        // Light Teal
      active: '#16a085',       // Dark Teal
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 12px rgba(26, 188, 156, 0.2)',
    },
    secondary: {
      bg: 'transparent',
      text: '#0a1428',         // Dark Navy
      hover: '#f5e6d3',        // Warm Beige
      active: '#e8dcc8',       // Border Beige
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: '2px solid #7f8c8d',
      cursor: 'pointer',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: 'none',
    },
  },

  // CARDS: Inviting, organized content
  cards: {
    default: {
      bg: '#ffffff',
      border: '1px solid #e8dcc8',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    warm: {
      bg: '#fef9f3',           // Warm background
      border: '1px solid #f0e6d6',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px -2px rgba(232, 185, 35, 0.15)',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    compassionate: {
      bg: 'linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(232, 185, 35, 0.05) 100%)',
      border: '1px solid rgba(231, 76, 60, 0.2)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px -2px rgba(231, 76, 60, 0.1)',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    hopeful: {
      bg: 'linear-gradient(135deg, rgba(26, 188, 156, 0.05) 0%, rgba(52, 152, 219, 0.05) 100%)',
      border: '1px solid rgba(26, 188, 156, 0.2)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px -2px rgba(26, 188, 156, 0.15)',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    elevated: {
      bg: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // SECTIONS: Full-width containers
  sections: {
    default: {
      bg: '#ffffff',
      padding: '64px 24px',
      borderBottom: '1px solid #e8dcc8',
    },
    warm: {
      bg: '#fef9f3',           // Warm background
      padding: '64px 24px',
      borderBottom: '1px solid #f0e6d6',
    },
    royal: {
      bg: 'linear-gradient(135deg, #0a1428 0%, #1a2540 100%)',
      color: '#ffffff',
      padding: '64px 24px',
      borderBottom: 'none',
    },
    cta: {
      bg: 'linear-gradient(135deg, #e8b923 0%, #e74c3c 100%)',
      color: '#0a1428',
      padding: '64px 24px',
      borderBottom: 'none',
    },
    hopeful: {
      bg: 'linear-gradient(135deg, #1abc9c 0%, #3498db 100%)',
      color: '#ffffff',
      padding: '64px 24px',
      borderBottom: 'none',
    },
  },

  // TEXT STYLES
  text: {
    body: {
      fontSize: '16px',
      lineHeight: 1.5,
      color: '#2c3e50',
      fontWeight: 400,
    },
    heading: {
      fontSize: '56px',
      lineHeight: 1.2,
      color: '#0a1428',
      fontWeight: 700,
      fontFamily: '"Merriweather", Georgia, serif',
    },
    subheading: {
      fontSize: '28px',
      lineHeight: 1.4,
      color: '#0a1428',
      fontWeight: 600,
    },
    label: {
      fontSize: '14px',
      lineHeight: 1.5,
      color: '#7f8c8d',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
};

// COMPONENT DEFINITIONS: New warm & emotional components
export const componentDefinitions = {
  // WARM CARD: Inviting, colorful content presentation
  WarmCard: {
    name: 'WarmCard',
    description: 'Inviting card with warm background and soft styling',
    props: {
      title: 'string (required)',
      description: 'string (optional)',
      icon: 'string/emoji (optional)',
      color: 'gold | red | teal | green (optional, default: gold)',
      image: 'string (optional)',
      action: 'string (optional)',
      actionHref: 'string (optional)',
    },
    styles: {
      bg: '#fef9f3',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #f0e6d6',
      boxShadow: '0 4px 20px -2px rgba(232, 185, 35, 0.15)',
    },
  },

  // EMOTIONAL BUTTON: Warm, clear CTA
  EmotionalButton: {
    name: 'EmotionalButton',
    description: 'Warm, energetic button with clear call-to-action',
    props: {
      label: 'string (required)',
      variant: 'primary | compassion | hopeful | secondary (default: primary)',
      size: 'sm | md | lg (default: md)',
      icon: 'string/emoji (optional)',
      onClick: 'function (required)',
      disabled: 'boolean (optional)',
    },
    styles: {
      variants: {
        primary: componentStyles.buttons.primary,
        compassion: componentStyles.buttons.compassion,
        hopeful: componentStyles.buttons.hopeful,
        secondary: componentStyles.buttons.secondary,
      },
    },
  },

  // IMPACT STAT: Colorful data presentation
  ImpactStat: {
    name: 'ImpactStat',
    description: 'Colorful stat display with icon and label',
    props: {
      number: 'string | number (required)',
      label: 'string (required)',
      icon: 'string/emoji (optional)',
      color: 'gold | red | teal | green (optional)',
      suffix: 'string (optional)',
      trend: 'up | down | stable (optional)',
    },
    styles: {
      container: {
        padding: '24px',
        borderRadius: '12px',
        textAlign: 'center',
      },
      number: {
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: 1,
      },
      label: {
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '8px',
      },
    },
  },

  // STORY CARD: Photo + quote, emotional
  StoryCard: {
    name: 'StoryCard',
    description: 'Emotional story card with photo, quote, and attribution',
    props: {
      image: 'string (required)',
      quote: 'string (required)',
      author: 'string (required)',
      role: 'string (optional)',
      country: 'string (optional)',
    },
    styles: {
      container: {
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
      },
      image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
      },
      quote: {
        padding: '24px',
        bg: '#fef9f3',
        fontSize: '18px',
        fontStyle: 'italic',
        lineHeight: 1.6,
        color: '#0a1428',
      },
      attribution: {
        padding: '12px 24px',
        bg: '#f5e6d3',
        fontSize: '14px',
        fontWeight: 600,
      },
    },
  },

  // CTA SECTION: Prominent, warm, action-focused
  CtaSection: {
    name: 'CtaSection',
    description: 'Full-width CTA section with prominent messaging',
    props: {
      title: 'string (required)',
      description: 'string (optional)',
      primaryCta: '{ label: string, href: string } (required)',
      secondaryCta: '{ label: string, href: string } (optional)',
      background: 'gradient | image | color (optional)',
      alignment: 'left | center | right (default: center)',
    },
    styles: {
      container: {
        padding: '64px 24px',
        borderRadius: '16px',
        textAlign: 'center',
      },
      title: {
        fontSize: '48px',
        fontWeight: 700,
        marginBottom: '16px',
        color: '#0a1428',
      },
      description: {
        fontSize: '18px',
        lineHeight: 1.6,
        marginBottom: '32px',
        color: '#2c3e50',
      },
    },
  },

  // IMPACT STAT GRID: Multiple stats with colors
  ImpactStatGrid: {
    name: 'ImpactStatGrid',
    description: 'Grid of colorful impact statistics',
    props: {
      stats: 'ImpactStat[] (required)',
      columns: '2 | 3 | 4 (default: 3)',
      layout: 'grid | flex (default: grid)',
    },
    styles: {
      container: {
        display: 'grid',
        gap: '24px',
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
// ============================================================================

/**
 * JHCO DESIGN SYSTEM: BALANCED ROYAL + WARM
 *
 * MISSION:
 * Create a design system that says "Professional + Royal" AND "Warm + Human"
 * Balance authority with compassion, formality with approachability
 *
 * CORE PRINCIPLES:
 * 1. AUTHORITY: Deep Navy provides trust and professional credibility
 * 2. WARMTH: Warm Gold, Compassion Red, Hope Teal communicate human connection
 * 3. ACCESSIBILITY: Clear hierarchy, readable typography, generous spacing
 * 4. EMOTION: Colors convey feeling—joy, hope, compassion, growth
 * 5. CONSISTENCY: Unified visual language across all touchpoints
 *
 * ============================================================================
 * COLOR USAGE GUIDELINES
 * ============================================================================
 *
 * DEEP NAVY (#0a1428) - Authority & Trust
 * Use for: Headers, navigation, primary text, formal sections
 * Tone: Professional, trustworthy, royal
 * Avoid: Large backgrounds (use sparingly for contrast)
 *
 * WARM GOLD (#e8b923) - Premium & Warmth
 * Use for: Primary buttons, accents, highlights, premium feel
 * Tone: Inviting, valuable, encouraging
 * Hover: #f5d667 (lighter)
 * Active: #c9961b (darker)
 *
 * COMPASSION RED (#e74c3c) - Emotion & Urgency
 * Use for: Urgent CTAs, emotional messaging, donation buttons
 * Tone: Compassionate, action-oriented, human
 * Hover: #ec7063 (lighter)
 * Active: #cb4335 (darker)
 * Avoid: Use sparingly to maintain urgency impact
 *
 * HOPE TEAL (#1abc9c) - Healing & Growth
 * Use for: Recovery messaging, positive impact, growth indicators
 * Tone: Hopeful, healing, transformative
 * Hover: #48ddc4 (lighter)
 * Active: #16a085 (darker)
 *
 * WARM BEIGE (#f5e6d3) - Approachability
 * Use for: Secondary backgrounds, warm sections, inviting spaces
 * Tone: Natural, approachable, human
 * Combine with: Dark Navy for text contrast
 *
 * DEEP GREEN (#27ae60) - Life & Growth
 * Use for: Environmental programs, sustainable messaging, growth
 * Tone: Natural, growing, sustainable
 *
 * SKY BLUE (#3498db) - Trust & Care
 * Use for: Care-related messaging, trust building, information
 * Tone: Trustworthy, caring, professional
 *
 * CORAL (#ff6b6b) - Energy & Connection
 * Use for: Community programs, energetic messaging, engagement
 * Tone: Energetic, connected, enthusiastic
 *
 * ============================================================================
 * TYPOGRAPHY GUIDELINES
 * ============================================================================
 *
 * SERIF (Merriweather) - Formal, Premium
 * Use for: Headings, quotes, formal content
 * Tone: Royal, premium, established
 * Weight: 600-700 for headings
 *
 * SANS-SERIF (System fonts) - Accessible, Warm
 * Use for: Body text, navigation, forms, UI elements
 * Tone: Accessible, modern, human
 * Weight: 400 for body, 600 for labels
 *
 * LINE HEIGHT & SPACING
 * Body text: 1.5-1.75 (generous for warmth & readability)
 * Headings: 1.2 (tight for impact)
 * Letter spacing: 0.5px-1px for labels (premium feel)
 *
 * ============================================================================
 * COMPONENT USAGE: WARM vs ROYAL
 * ============================================================================
 *
 * ROYAL COMPONENTS (Authority)
 * - Header navigation
 * - Primary CTAs with Navy background
 * - Government/compliance sections
 * - Official messaging
 * Use colors: Deep Navy, Warm Gold, Dark text
 * Tone: Formal, professional, authoritative
 *
 * WARM COMPONENTS (Connection)
 * - Impact statistics
 * - Story cards
 * - Emotional messaging
 * - Community sections
 * Use colors: Warm Gold, Teal, Red, Beige backgrounds
 * Tone: Inviting, human, emotional
 *
 * ============================================================================
 * BUTTON STRATEGY: HIERARCHY & EMOTION
 * ============================================================================
 *
 * PRIMARY BUTTONS (Warm Gold #e8b923)
 * Usage: Main CTAs, standard actions
 * Tone: Encouraging, positive, inviting
 * When to use: Donate, Learn More, Join Us
 *
 * ROYAL BUTTONS (Navy with Gold border)
 * Usage: Secondary professional actions
 * Tone: Professional, authoritative
 * When to use: View Reports, Access Portal, Advanced
 *
 * COMPASSION BUTTONS (Red #e74c3c)
 * Usage: Urgent, emotional CTAs
 * Tone: Urgent, compassionate, action-needed
 * When to use: Donate Now, Get Help, Emergency
 *
 * HOPEFUL BUTTONS (Teal #1abc9c)
 * Usage: Positive action, engagement
 * Tone: Hopeful, transformative, optimistic
 * When to use: Join Program, Support Recovery, Get Started
 *
 * ============================================================================
 * CARD DESIGN: CONTEXT & EMOTION
 * ============================================================================
 *
 * WARM CARD
 * Background: #fef9f3 (warm cream)
 * Use for: Programs, opportunities, positive content
 * Emotion: Inviting, warm, approachable
 *
 * COMPASSIONATE CARD
 * Background: Gradient of red + gold
 * Use for: Crisis response, urgent needs, emotional stories
 * Emotion: Compassionate, urgent, human
 *
 * HOPEFUL CARD
 * Background: Gradient of teal + blue
 * Use for: Recovery, transformation, growth stories
 * Emotion: Hopeful, transformative, positive
 *
 * ============================================================================
 * GRADIENT COMBINATIONS: PREMIUM & WARM
 * ============================================================================
 *
 * Royal to Warm (Navy → Teal): Professional + Hopeful
 * Gold to Red (Gold → Red): Premium + Compassionate
 * Teal to Green (Teal → Green): Hope + Growth
 * Warm Background (Cream → Beige): Subtle, inviting
 *
 * ============================================================================
 * LAYOUT & SPACING: GENEROUS & HUMAN
 * ============================================================================
 *
 * Section padding: 64px (generous breathing room)
 * Card padding: 24px (inviting interior)
 * Element spacing: 16px-24px (warm, open feel)
 * Border radius: 12px (friendly, soft corners)
 *
 * ============================================================================
 * ACCESSIBILITY & CONTRAST
 * ============================================================================
 *
 * Primary text on light bg: Deep Navy (#0a1428)
 * Primary text on dark bg: Warm Beige or White
 * Button text contrast: Minimum 4.5:1 ratio
 * Icons with text: Always include text labels
 * Focus states: Clear, visible, brand-colored
 *
 * ============================================================================
 * IMPLEMENTATION CHECKLIST
 * ============================================================================
 *
 * ✓ Header: Use Deep Navy + Warm Gold (royal but inviting)
 * ✓ Hero section: Use gradients (royal to warm)
 * ✓ Impact statistics: Use colorful stat cards (emotional, engaging)
 * ✓ Programs section: Use warm cards (inviting, approachable)
 * ✓ Stories: Use story cards (emotional, human)
 * ✓ CTAs: Use gradient or warm gold buttons (clear action)
 * ✓ Footer: Use warm beige or light background (approachable)
 * ✓ Forms: Use light backgrounds + warm accents (friendly)
 * ✓ Testimonials: Use story cards or gradient backgrounds
 * ✓ Government section: Use navy backgrounds (formal, professional)
 *
 * ============================================================================
 */

// USAGE UTILITIES
export const designSystemUsage = {
  // Quick color lookup by emotion
  byEmotion: {
    professional: royalColors.deepNavy,
    warm: royalColors.warmGold,
    compassionate: royalColors.compassionRed,
    hopeful: royalColors.hopeTeal,
    natural: royalColors.warmBeige,
    growth: royalColors.deepGreen,
    energy: royalColors.coral,
  },

  // Quick button selection
  buttonsByContext: {
    donate: 'compassion',
    explore: 'primary',
    learn: 'primary',
    emergency: 'compassion',
    join: 'hopeful',
    official: 'royal',
    secondary: 'secondary',
  },

  // Quick card selection
  cardsByContent: {
    program: 'warm',
    story: 'elevated',
    crisis: 'compassionate',
    recovery: 'hopeful',
    impact: 'warm',
    official: 'default',
  },

  // Quick section selection
  sectionsByPurpose: {
    hero: 'cta',
    programs: 'warm',
    impact: 'default',
    government: 'royal',
    community: 'hopeful',
    stories: 'default',
  },
};
