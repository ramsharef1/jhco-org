# Page Building Templates & Rapid Generation Guide

## Overview
With 66+ pages remaining to build, we've created reusable templates that follow the same pattern as Phase 1 pages. This guide shows how to efficiently build all remaining pages.

## Template 1: Simple Hub Page (About/Governance/Impact Sub-Pages)

**Files to Create:**
- `app/[locale]/section/subsection/page.tsx`

**Pattern Used In:**
- `/en/about/history`, `/en/about/values`, `/en/about/team`, etc.
- `/en/impact/statistics`, `/en/impact/stories`, etc.
- `/en/governance/board`, etc.

**Template Structure:**
```tsx
'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Page Title',
    heroTitle: 'Hero Title',
    heroSubtitle: 'Subtitle',
    sections: [
      { title: 'Section 1', description: 'Content...' },
      { title: 'Section 2', description: 'Content...' },
    ],
  },
  ar: {
    title: 'عنوان الصفحة',
    heroTitle: 'عنوان البطل',
    heroSubtitle: 'العنوان الفرعي',
    sections: [
      { title: 'القسم 1', description: 'المحتوى...' },
      { title: 'القسم 2', description: 'المحتوى...' },
    ],
  },
};

export default function PageName({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.deepPurple})`,
        color: 'white',
        padding: '100px 32px',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            margin: '0 0 16px 0',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        {content.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: 'Georgia, serif',
              color: royalColors.deepNavy,
              margin: '0 0 16px 0',
              borderBottom: `2px solid ${royalColors.royalGold}`,
              paddingBottom: '12px',
            }}>
              {section.title}
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#444',
              margin: '20px 0 0 0',
            }}>
              {section.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
```

## Template 2: Grid Card Page (Partners, Media, etc.)

**Pattern Used In:**
- `/en/media-center`
- `/en/partnerships`
- `/en/resources/gallery`

**Extends Template 1 with:**
```tsx
{/* Cards Grid */}
<section style={{
  background: royalColors.ivory,
  padding: '80px 32px',
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    }}>
      {content.items.map((item, idx) => (
        <div key={idx} style={{
          padding: '24px',
          border: `2px solid ${royalColors.royalGold}`,
          borderRadius: '4px',
        }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Template 3: List Page (News Archive, Events, etc.)

**Pattern Used In:**
- `/en/news/archive`
- `/en/events`
- `/en/testimonials`

**Key Addition:**
```tsx
<section style={{
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '80px 32px',
}}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    {content.items.map((item, idx) => (
      <Link href={item.href} key={idx} style={{
        padding: '24px',
        border: `1px solid ${royalColors.royalGold}`,
        textDecoration: 'none',
        color: royalColors.deepNavy,
      }}>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <span style={{ color: royalColors.royalGold }}>Read More →</span>
      </Link>
    ))}
  </div>
</section>
```

## Pages Ready to Build (By Priority)

### PHASE 2: About Section (7 pages)
```
/en/about/history       → Our Journey & History Timeline
/en/about/values        → Core Values Explained
/en/about/vision        → Vision & Mission Statement
/en/about/leadership    → Leadership Bios
/en/about/team          → Team Member Directory
/en/about/awards        → Awards & Recognition
/en/about/mission       → UPDATE existing page
```

### PHASE 2: Governance (3 pages)
```
/en/governance/board    → Board of Trustees
/en/governance/structure → Organizational Structure
/en/governance/leadership → Leadership History
```

### PHASE 2: Impact Sub-Pages (6 pages)
```
/en/impact/statistics   → Detailed Statistics & Metrics
/en/impact/stories      → Success Stories Hub
/en/impact/testimonials → Beneficiary Testimonials
/en/impact/case-studies → Case Studies
/en/impact/reports      → Annual & Financial Reports
/en/impact/publications → Research & Publications
```

### PHASE 2: Government/Transparency (6 pages)
```
/en/media-center        → Press Releases & Media
/en/financial-reports   → Financial Transparency
/en/compliance          → Compliance & Certifications
/en/code-of-conduct     → Code of Conduct
/en/transparency        → Transparency Statement
/en/governance          → (same as governance/board)
```

### PHASE 3: Geographic Content (33+ pages)
```
/en/where-we-work       → Geographic Hub
/en/regions/asia        → Asia Operations (17 countries)
/en/regions/africa      → Africa Operations (9 countries)
/en/regions/europe      → Europe Operations (7 countries)
/en/regions/americas    → Americas (Haiti + future)
/en/regions/[country]   → Individual country pages (33 total)
```

### PHASE 4: Legal & Resources (8+ pages)
```
/en/legal/privacy       → Privacy Policy
/en/legal/terms         → Terms of Use
/en/legal/accessibility → Accessibility Statement
/en/legal/trafficking   → Anti-Trafficking Policy
/en/legal/conduct       → Code of Conduct
/en/legal/disclosure    → Financial Disclosure
/en/resources/gallery   → Photo Gallery
/en/resources/videos    → Video Library
```

## Quick Build Commands (Future Automation)

Once templates are tested, you can use a script-based approach:

```bash
# Generate new page from template
generate-page.sh --path "about/history" --template "hub" --title "Our History"

# Bulk generate multiple pages
generate-pages.sh --phase 2 --template "hub"
```

## Content Guidelines for Builders

When creating new pages:

1. **Hero Section**: Always start with royal gradient background
2. **Content Sections**: Use serif font for titles, sans-serif for body
3. **Bilingual**: Always provide EN and AR translations
4. **RTL Support**: Test Arabic pages with `direction: rtl`
5. **Colors**: Use royal colors from `royalDesign.ts`
6. **Typography**: Georgia serif for h1-h3, sans-serif for body
7. **Spacing**: 80px padding for sections, 24px gap for grids
8. **Mobile**: Use responsive grids with `minmax(280px, 1fr)`

## Estimated Build Time

- Simple Hub Page: 15-20 minutes (copy template + customize content)
- Grid Card Page: 20-30 minutes (add card grid + content)
- List Page: 15-25 minutes (add list items + links)
- Bilingual: +5-10 minutes per page (translate content)

**Total for 66 pages at 20 min/page = 22 hours**

## Next Session Action Items

1. Test Phase 1 pages in browser
2. Create Phase 2: About section (7 pages)
3. Create Phase 2: Governance (3 pages)
4. Create Phase 2: Impact Sub-Pages (6 pages)
5. Create Phase 3: Geographic content (33 pages)
6. Create Phase 4: Legal & Resources (8 pages)
7. Final testing & QA

---

**Use this guide to systematically build all remaining pages!**
