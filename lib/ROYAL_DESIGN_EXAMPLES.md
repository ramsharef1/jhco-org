# JHCO Royal Design System - Implementation Examples

## Quick Reference: Component Implementations

---

## 1. Hero Section (ROYAL FIRST)

```tsx
// Hero Section - Most formal, most royal
<section style={{
  background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
  borderLeft: '4px solid #d4af37',
  padding: '80px 24px',
  color: '#ffffff',
  textAlign: 'center'
}}>
  <h1 style={{
    fontFamily: 'Garamond, Georgia, serif',
    fontSize: '64px',
    fontWeight: 800,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: '#d4af37',
    marginBottom: '24px'
  }}>
    👑 Royal Jordanian Humanitarian Commission
  </h1>
  
  <p style={{
    fontSize: '20px',
    lineHeight: '1.6',
    fontWeight: 300,
    marginBottom: '32px'
  }}>
    Official Humanitarian Authority Under Royal Patronage
  </p>

  <button style={{
    background: '#4a148c',
    color: '#d4af37',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    fontFamily: 'Garamond, serif',
    letterSpacing: '0.5px'
  }}>
    Learn About Our Mission
  </button>
</section>
```

**Key Principles**:
- Gold text on dark purple (formal, royal)
- UPPERCASE serif heading (traditional royal style)
- Gold left border (heraldic)
- Primary Royal Button (purple with gold text)

---

## 2. Royal Program Card

```tsx
// Royal Card - Formal, prestigious
<div style={{
  background: '#ffffff',
  border: '2px solid #d4af37',
  borderRadius: '0px',
  padding: '28px',
  boxShadow: '0 12px 28px -4px rgba(74, 20, 140, 0.15)'
}}>
  <h3 style={{
    fontFamily: 'Garamond, Georgia, serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#4a148c',
    marginBottom: '16px',
    letterSpacing: '0.5px'
  }}>
    Crisis Response Program
  </h3>

  <p style={{
    fontSize: '16px',
    lineHeight: '1.4',
    color: '#2c2c2c',
    marginBottom: '20px'
  }}>
    Official humanitarian response under royal authority, delivering formal aid and structured support.
  </p>

  <button style={{
    background: 'transparent',
    border: '2px solid #d4af37',
    color: '#001a4d',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '2px',
    cursor: 'pointer',
    letterSpacing: '1px'
  }}>
    Learn More
  </button>
</div>
```

**Key Principles**:
- Gold border (royal, formal)
- Sharp corners (0px radius)
- Purple heading (royal color)
- Dark text (formal, not warm)
- Secondary button styling

---

## 3. Formal Statistics Section

```tsx
// Statistics Grid - Formal data presentation
<section style={{
  background: '#f5f1e8',
  padding: '80px 24px',
  borderBottom: '1px solid #d4c5a9'
}}>
  <h2 style={{
    fontFamily: 'Garamond, Georgia, serif',
    fontSize: '48px',
    fontWeight: 700,
    color: '#4a148c',
    textAlign: 'center',
    marginBottom: '64px',
    letterSpacing: '0.5px'
  }}>
    Formal Impact Metrics
  </h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px'
  }}>
    {/* Stat Card 1 */}
    <div style={{
      background: '#ffffff',
      border: '1px solid #d4c5a9',
      padding: '28px',
      textAlign: 'center',
      borderRadius: '0px'
    }}>
      <div style={{
        fontSize: '56px',
        fontWeight: 800,
        color: '#4a148c',
        fontFamily: 'Garamond, serif',
        marginBottom: '12px'
      }}>
        500K+
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a'
      }}>
        People Assisted
      </div>
    </div>

    {/* Stat Card 2 */}
    <div style={{
      background: '#ffffff',
      border: '1px solid #d4c5a9',
      padding: '28px',
      textAlign: 'center',
      borderRadius: '0px'
    }}>
      <div style={{
        fontSize: '56px',
        fontWeight: 800,
        color: '#4a148c',
        fontFamily: 'Garamond, serif',
        marginBottom: '12px'
      }}>
        25+
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a'
      }}>
        Countries Served
      </div>
    </div>

    {/* Stat Card 3 */}
    <div style={{
      background: '#ffffff',
      border: '1px solid #d4c5a9',
      padding: '28px',
      textAlign: 'center',
      borderRadius: '0px'
    }}>
      <div style={{
        fontSize: '56px',
        fontWeight: 800,
        color: '#4a148c',
        fontFamily: 'Garamond, serif',
        marginBottom: '12px'
      }}>
        50+
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a'
      }}>
        Active Programs
      </div>
    </div>
  </div>
</section>
```

**Key Principles**:
- Ivory background (refined, not warm)
- Purple numbers (royal color)
- Formal stat cards with subtle borders
- Small-cap labels (formal)
- No colors on stats (formal presentation)

---

## 4. Government/Compliance Section (MOST FORMAL)

```tsx
// Government Section - Most authoritative
<section style={{
  background: '#1a1a2e',
  borderLeft: '4px solid #d4af37',
  padding: '80px 24px',
  color: '#d4af37'
}}>
  <h2 style={{
    fontFamily: 'Garamond, Georgia, serif',
    fontSize: '48px',
    fontWeight: 700,
    color: '#d4af37',
    marginBottom: '48px',
    letterSpacing: '0.5px'
  }}>
    ⚜️ Governance & Transparency
  </h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px'
  }}>
    <div>
      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        fontFamily: 'Garamond, serif',
        marginBottom: '16px',
        color: '#d4af37'
      }}>
        Official Reports
      </h3>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#ffffff',
        marginBottom: '20px'
      }}>
        Comprehensive annual reports and financial statements filed with governmental authorities.
      </p>
      <button style={{
        background: '#4a148c',
        color: '#d4af37',
        border: 'none',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        borderRadius: '2px',
        cursor: 'pointer',
        letterSpacing: '1px'
      }}>
        View Reports
      </button>
    </div>

    <div>
      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        fontFamily: 'Garamond, serif',
        marginBottom: '16px',
        color: '#d4af37'
      }}>
        Compliance
      </h3>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#ffffff',
        marginBottom: '20px'
      }}>
        Full adherence to international humanitarian standards and governmental oversight.
      </p>
      <button style={{
        background: '#4a148c',
        color: '#d4af37',
        border: 'none',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        borderRadius: '2px',
        cursor: 'pointer',
        letterSpacing: '1px'
      }}>
        Learn More
      </button>
    </div>
  </div>
</section>
```

**Key Principles**:
- Dark navy background (most authoritative)
- Gold text (most formal, official)
- Gold left border (heraldic)
- Seal emoji (⚜️) for official sections
- Royal purple buttons (formal)

---

## 5. Donation Section (CHARITY - Secondary)

```tsx
// Donation Section - Formal charity messaging
<section style={{
  background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
  borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
  padding: '80px 24px',
  textAlign: 'center'
}}>
  <h2 style={{
    fontFamily: 'Garamond, Georgia, serif',
    fontSize: '48px',
    fontWeight: 700,
    color: '#4a148c',
    marginBottom: '24px',
    letterSpacing: '0.5px'
  }}>
    Support Our Humanitarian Mission
  </h2>

  <p style={{
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#2c2c2c',
    maxWidth: '600px',
    margin: '0 auto 32px',
  }}>
    Your formal contribution enables official humanitarian work under royal authority.
  </p>

  <button style={{
    background: '#c41e3a',
    color: '#ffffff',
    border: 'none',
    padding: '14px 40px',
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '2px',
    cursor: 'pointer',
    fontFamily: 'Garamond, serif',
    letterSpacing: '0.5px',
    boxShadow: '0 8px 16px -2px rgba(196, 30, 58, 0.2)'
  }}>
    Donate Now
  </button>

  <p style={{
    fontSize: '12px',
    marginTop: '16px',
    color: '#7f7f8f',
    letterSpacing: '0.5px'
  }}>
    All donations are formally reported and receipted for tax purposes.
  </p>
</section>
```

**Key Principles**:
- Muted red/gold gradient (charity is secondary)
- Formal charity red button only (not primary)
- Purple heading (royal color leads)
- Formal copy (not emotional)
- Single CTA (formal, controlled)

---

## 6. Formal Quote Section

```tsx
// Formal Quote - Heraldic design element
<section style={{
  background: '#f5f1e8',
  padding: '80px 24px'
}}>
  <div style={{
    maxWidth: '800px',
    margin: '0 auto',
    background: '#ffffff',
    border: '1px solid #d4c5a9',
    borderLeft: '4px solid #d4af37',
    padding: '40px',
    borderRadius: '0px'
  }}>
    <div style={{
      fontSize: '48px',
      color: '#d4af37',
      marginBottom: '16px'
    }}>
      "
    </div>

    <p style={{
      fontFamily: 'Garamond, Georgia, serif',
      fontSize: '20px',
      fontStyle: 'italic',
      color: '#4a148c',
      lineHeight: '1.6',
      marginBottom: '24px'
    }}>
      Official humanitarian work is a solemn duty and formal responsibility of those endowed with authority.
    </p>

    <div style={{
      borderTop: '1px solid #d4c5a9',
      paddingTop: '16px'
    }}>
      <p style={{
        fontSize: '14px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#5a5a6a'
      }}>
        — Official Statement
      </p>
    </div>
  </div>
</section>
```

**Key Principles**:
- Gold left border (heraldic)
- Serif italic quote (formal)
- Formal attribution (not casual)
- Sharp corners (formal)
- Minimal styling (elegant restraint)

---

## 7. Heritage/Royal History Section

```tsx
// Heritage Section - Royal legacy
<section style={{
  background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
  borderLeft: '4px solid #d4af37',
  padding: '80px 24px',
  color: '#ffffff'
}}>
  <div style={{
    maxWidth: '900px',
    margin: '0 auto'
  }}>
    <h2 style={{
      fontFamily: 'Garamond, Georgia, serif',
      fontSize: '48px',
      fontWeight: 700,
      color: '#d4af37',
      marginBottom: '32px',
      letterSpacing: '0.5px'
    }}>
      Royal Heritage & Legacy
    </h2>

    <p style={{
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '24px',
      color: '#f5f1e8'
    }}>
      For decades, the Jordanian Royal Family has provided formal oversight and official patronage to humanitarian work across the region and world.
    </p>

    <p style={{
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '32px',
      color: '#f5f1e8'
    }}>
      This is not charitable work born from commercial motivation, but formal humanitarian service under royal authority.
    </p>

    <div style={{
      borderTop: '1px solid rgba(212, 175, 55, 0.3)',
      paddingTop: '32px'
    }}>
      <button style={{
        background: '#ffffff',
        color: '#4a148c',
        border: 'none',
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: 700,
        textTransform: 'uppercase',
        borderRadius: '2px',
        cursor: 'pointer',
        fontFamily: 'Garamond, serif',
        letterSpacing: '0.5px'
      }}>
        Learn Our History
      </button>
    </div>
  </div>
</section>
```

**Key Principles**:
- Royal gradient background
- Gold text (most formal)
- Gold left border (heraldic)
- Serif typography (formal)
- White button on dark (formal)

---

## 8. Royal Seal/Badge Component

```tsx
// Official Seal Badge - Formal certification
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '140px',
  height: '140px',
  border: '2px solid #d4af37',
  borderRadius: '50%',
  background: '#f5f1e8',
  gap: '8px'
}}>
  <div style={{
    fontSize: '56px'
  }}>
    👑
  </div>
  <div style={{
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    textAlign: 'center',
    color: '#4a148c'
  }}>
    Official<br/>Seal
  </div>
</div>
```

**Key Principles**:
- Circular with gold border (formal seal)
- Crown emoji (royal)
- UPPERCASE text (formal)
- Centered composition (formal balance)

---

## 9. Formal Divider Lines

```tsx
// Simple gold divider (heraldic element)
<div style={{
  height: '1px',
  background: '#d4af37',
  margin: '32px 0'
}}></div>

// Double formal divider
<div style={{
  height: '3px',
  background: 'linear-gradient(to right, #d4af37 0%, #d4af37 48%, transparent 48%, transparent 52%, #d4af37 52%, #d4af37 100%)',
  margin: '32px 0'
}}></div>

// Accent divider (purple + gold)
<div style={{
  height: '2px',
  background: 'linear-gradient(to right, #4a148c 0%, #d4af37 50%, #4a148c 100%)',
  margin: '32px 0'
}}></div>
```

**Key Principles**:
- Gold as primary divider
- Formal, clean lines
- Minimal, elegant
- Creates visual structure

---

## 10. Color Palette Reference

```tsx
// Quick color reference component
const RoyalColors = {
  // Royal Authority
  deepRoyal: '#4a148c',         // Deep Purple - Most formal
  darkNavy: '#001a4d',          // Navy - Governmental
  hashemiteGold: '#d4af37',     // Gold - Accent only

  // Formal Support
  formalCharcoal: '#2b2d42',    // Charcoal - Secondary
  ivoryBg: '#f5f1e8',           // Ivory - Refined

  // Charity (Secondary)
  charityRed: '#c41e3a',        // Formal red - Donation only
  charityTeal: '#0d7377',       // Compassion teal - Support
  charityGreen: '#1b4332',      // Impact green - Programs

  // Neutrals
  textOfficial: '#1a1a2e',      // Dark text
  textSecondary: '#5a5a6a',     // Secondary text
  textMuted: '#7f7f8f',         // Muted text
  bgLight: '#ffffff',           // Light bg
  bgRefined: '#faf8f5',         // Refined bg
};
```

---

## Typography Hierarchy Quick Reference

```
OFFICIAL HEADING (64px, 800 weight, UPPERCASE)
Primary Heading (56px, 700 weight, serif)
Subheading (32px, 700 weight, serif)
Card Title (22px, 600 weight, serif)
Body Text (16px, 400 weight, sans-serif)
Formal Label (14px, 600 weight, UPPERCASE, 1px letter-spacing)
Small Text (12px, 600 weight)
```

---

## Button States

```
PRIMARY ROYAL:
  Default:  Purple bg, gold text
  Hover:    Lighter purple
  Active:   Darker purple
  Disabled: Gray bg, gray text

SECONDARY ROYAL:
  Default:  Transparent, gold border, navy text
  Hover:    Ivory bg
  Active:   Gold bg, navy text
  Disabled: Light gray

CHARITY ACTION:
  Default:  Formal red bg, white text
  Hover:    Darker red
  Active:   Much darker red
  Disabled: Light gray bg
```

---

## Migration Guide: From Old to New System

| Old System | New System | Reason |
|-----------|-----------|--------|
| Warm Gold as primary | Deep Purple as primary | More formal, royal |
| Compassion Red prominent | Charity Red secondary | Charity supports authority |
| Hope Teal in cards | Muted Teal sparingly | Less colorful, more formal |
| 12px border radius | 0px border radius | Formal, sharp edges |
| 1.5-1.75 line height | 1.1-1.4 line height | Formal, compressed |
| Generous spacing | Formal spacing | Still generous but structured |
| Friendly copy | Formal copy | Authority-focused |
| Multiple bright buttons | Hierarchical buttons | Clear royal priority |

---

## Dos and Don'ts

### DO
✓ Use Deep Purple for main headings
✓ Use Gold as accents only
✓ Use 0px border radius on cards
✓ Use serif fonts for headings
✓ Use UPPERCASE for important headings
✓ Use formal tone in copy
✓ Use structured, hierarchical layouts
✓ Use gold left borders on formal sections
✓ Make Royal buttons primary
✓ Make Charity button secondary

### DON'T
✗ Make gold the primary color
✗ Use rounded corners on cards
✗ Use sans-serif for headings
✗ Use warm, friendly copy
✗ Use colorful, playful design
✗ Emphasize charity equally with authority
✗ Use multiple prominent buttons
✗ Use bright, saturated colors
✗ Create "cozy" or "inviting" sections
✗ Use casual design elements
