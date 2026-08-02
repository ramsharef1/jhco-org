# JHCO Website - Quick Start Guide

## 📦 Project Structure

```
jhco-org/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Redirect to /en
│   └── [locale]/
│       ├── layout.tsx                # Locale wrapper (Header, MegaMenu, Footer)
│       ├── page.tsx                  # ✅ Homepage (DONE)
│       ├── programs/
│       │   ├── page.tsx              # ✅ Programs listing (DONE)
│       │   └── [slug]/
│       │       └── page.tsx          # ✅ Program detail (DONE)
│       ├── news/                     # TODO
│       ├── about/                    # TODO
│       ├── get-involved/             # TODO
│       └── [other pages]/            # TODO
├── components/
│   ├── Header.tsx                    # ✅ Sticky header with nav
│   ├── MegaMenu.tsx                  # ✅ 6-column mega menu
│   └── Footer.tsx                    # ✅ Multi-column footer
├── lib/
│   ├── i18n.ts                       # ✅ Bilingual translations
│   └── mockData.ts                   # ✅ Sample content
├── ENRICHMENT_PLAN.md                # 📋 Detailed expansion roadmap
└── QUICK_START.md                    # This file
```

---

## 🚀 Next Pages to Build (Priority Order)

### 1. **About Pages** (3 pages)
```
/about/mission      - Mission, vision, history
/about/impact       - Success stories, testimonials
/about/team         - Leadership, organization
```

**File:** `app/[locale]/about/page.tsx` and subpages

### 2. **News Pages** (2 pages)
```
/news               - News listing with pagination
/news/[slug]        - Individual news article
```

**File:** `app/[locale]/news/page.tsx` and `app/[locale]/news/[slug]/page.tsx`

### 3. **Get Involved Pages** (4 pages)
```
/get-involved/donate      - Donation form
/get-involved/volunteer   - Volunteer opportunities
/get-involved/corporate   - CSR partnerships
/get-involved/events      - Event calendar
```

### 4. **Government & Transparency** (5 pages)
```
/media-center       - Press releases, media kit
/reports            - Annual reports, audits
/partnerships       - Partner organizations
/operations         - Regional operations
/compliance         - Legal & compliance docs
```

### 5. **Contact & Support**
```
/contact            - Contact form + locations
/careers            - Job listings
/faq                - Frequently asked questions
```

---

## 💻 How to Add a New Page

### Simple Page Example (e.g., Mission Page)

```typescript
// app/[locale]/about/mission/page.tsx
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <section style={{ padding: '80px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>{ar ? 'مهمتنا' : 'Our Mission'}</h1>
        
        {/* Add your content here */}
        <p>Content in both languages</p>
      </div>
    </section>
  );
}
```

### Listing Page with Cards (e.g., News)

See `/programs/page.tsx` for a complete example:
- Grid layout with pagination
- Category/tag filtering
- Cards with hover effects
- CTA buttons

### Detail Page with Related Items (e.g., News Article)

See `/programs/[slug]/page.tsx` for a complete example:
- Hero section with metadata
- Main content area
- Sidebar information
- Related items section

---

## 🎨 Design System

### Colors
- **Primary Navy:** `#0a1428`
- **Accent Gold:** `#d4af37`
- **Light Background:** `#f9f7f4`
- **Text Dark:** `#3d3d3d`
- **Text Light:** `#6b6b6b`
- **Border:** `#e8e4db`

### Typography
- **Headings:** Georgia, serif (font-family: 'Georgia, serif')
- **Body:** System font stack
- **Font Weights:** 400 (regular), 600 (semibold), 700 (bold)

### Common Styles

**Section Padding:**
```typescript
style={{ padding: '80px 32px' }}
```

**Max Width Container:**
```typescript
style={{ maxWidth: '1500px', margin: '0 auto' }}
```

**Hero Section:**
```typescript
style={{
  background: 'linear-gradient(135deg, #0a1428, #142850)',
  padding: '80px 32px',
  color: 'white'
}}
```

**Button:**
```typescript
<Link href={href} style={{
  padding: '12px 32px',
  backgroundColor: '#a8312f',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: '600',
  fontSize: '14px'
}}>
  Button Text
</Link>
```

---

## 🌐 Bilingual Support

Every page automatically supports both English and Arabic:

```typescript
const ar = locale === 'ar';

// In JSX:
<h1>{ar ? 'النص بالعربية' : 'English Text'}</h1>
```

Add translations to `lib/i18n.ts`:
```typescript
export function getDictionary(locale: Locale) {
  return {
    en: {
      page: { title: 'Title', description: 'Description' }
    },
    ar: {
      page: { title: 'العنوان', description: 'الوصف' }
    }
  };
}
```

---

## 📱 Mobile Responsive

Use CSS Grid with `auto-fit`:
```typescript
style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}
```

Always test at:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

---

## 🔗 Navigation Links

All internal links use Next.js `Link`:
```typescript
import Link from 'next/link';

const base = `/${locale}`;
<Link href={`${base}/programs`}>Programs</Link>
```

---

## 📊 Adding Content to Mock Data

Edit `lib/mockData.ts`:

```typescript
export const news = [
  {
    id: 4,
    slug: 'new-article',
    title: 'Article Title',
    titleAr: 'عنوان المقالة',
    excerpt: 'Summary...',
    excerptAr: 'الملخص...',
    date: new Date('2026-08-15'),
    category: 'Program Updates',
    categoryAr: 'تحديثات البرامج',
  },
  // Add more items
];
```

---

## 🧪 Testing Locally

```bash
# Build
npm run build

# Development server
npm run dev

# Test bilingual
# http://localhost:3000/en
# http://localhost:3000/ar
```

---

## 📈 Performance Tips

1. **Images:** Use placeholder divs for now, optimize later
2. **Code Splitting:** Pages are automatically split by route
3. **Static Generation:** All pages pre-built at deploy time
4. **Lazy Loading:** Add to images when added
5. **Caching:** Header/Footer/MegaMenu cached across pages

---

## 🚢 Deployment

```bash
# Push to GitHub
git push origin main

# Deploy to Vercel
# (Auto-deploys when you push)

# Get live URL from Vercel dashboard
```

---

## 📋 Checklist for Each New Page

- [ ] Create file at correct path
- [ ] Add to `generateStaticParams` if dynamic
- [ ] Import `getDictionary` and `type Locale`
- [ ] Add English and Arabic content
- [ ] Style with inline styles (or add to tailwind.config.ts)
- [ ] Test at /en and /ar
- [ ] Test mobile responsiveness
- [ ] Add to ENRICHMENT_PLAN.md progress
- [ ] Commit with meaningful message

---

## 🆘 Common Issues

**Build error: "Expected ';'"**
- Check for unclosed JSX tags or missing braces

**Page shows 404**
- Verify file path matches URL
- Check `generateStaticParams` export if using [slug]
- Ensure locale parameter is handled

**Styling not applied**
- Inline styles take precedence; use `style={{}}` prop
- Check color values (#0a1428, #d4af37)
- Verify maxWidth container (1500px, 1200px, etc.)

**Bilingual content missing**
- Add translations to `lib/i18n.ts` getDictionary()
- Use `ar ? arabicText : englishText` pattern
- Set `dir={ar ? 'rtl' : 'ltr'}` on containers

---

## 📞 Quick Links

- **GitHub:** https://github.com/ramsharef1/jhco-org
- **Deployment:** Vercel (auto-deploy from main branch)
- **Documentation:** See ENRICHMENT_PLAN.md for detailed roadmap

---

## 🎯 Target Completion Timeline

- **Week 1:** About & News pages
- **Week 2:** Get Involved pages
- **Week 3:** Government & Transparency pages
- **Week 4:** Contact, FAQ, Regional pages
- **Week 5+:** Polish, optimize, additional features

---

**Ready to build?** Pick one page from the "Next Pages" section above and follow the template! 🚀
