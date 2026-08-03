# Campaign Page Routing Documentation

## Overview

The JHCO website now includes a fully functional campaign system with dynamic routing at `/campaigns/[id]`. This enables individual campaign detail pages that are automatically generated from the program data.

## File Structure

```
app/[locale]/campaigns/
├── page.tsx              # Main campaigns listing page
├── layout.tsx            # Layout wrapper for campaigns section
└── [id]/
    └── page.tsx          # Dynamic campaign detail page
```

## Routes

### Campaigns List Page
- **Route:** `/{locale}/campaigns`
- **File:** `app/[locale]/campaigns/page.tsx`
- **Description:** Displays all campaigns with filtering and search functionality
- **Features:**
  - Category filtering
  - Full-text search
  - Campaign statistics
  - Grid view with hover effects
  - Responsive design

### Campaign Detail Page
- **Route:** `/{locale}/campaigns/{id}`
- **File:** `app/[locale]/campaigns/[id]/page.tsx`
- **Description:** Shows detailed information about a specific campaign
- **Features:**
  - Hero section with campaign overview
  - Campaign objectives
  - Impact metrics
  - Related campaigns
  - Call-to-action buttons
  - Full bilingual support (EN/AR)

## Data Source

Campaigns are derived from the `programs` array in `/lib/mockData.ts`. Each program is automatically converted to a campaign with a unique numeric ID (starting from 1).

### Campaign Object Structure

```typescript
interface Campaign {
  id: number;                    // Unique numeric identifier (1, 2, 3, ...)
  slug: string;                  // URL-friendly identifier from program slug
  name: string;                  // Campaign name in English
  nameAr: string;                // Campaign name in Arabic
  description: string;           // Short description in English
  descriptionAr: string;         // Short description in Arabic
  longDescription: string;       // Detailed description in English
  longDescriptionAr: string;     // Detailed description in Arabic
  category: string;              // Campaign category in English
  categoryAr: string;            // Campaign category in Arabic
  impact: string;                // Impact statement in English
  impactAr: string;              // Impact statement in Arabic
  status: string;                // Campaign status (Active, Completed, etc.)
  objectives: string[];          // Array of objectives in English
  objectivesAr: string[];        // Array of objectives in Arabic
}
```

## Usage Examples

### Linking to Campaigns List

```tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <Link href="/en/campaigns">
      View All Campaigns
    </Link>
  );
}
```

### Linking to Specific Campaign

```tsx
import Link from 'next/link';

export default function CampaignCard() {
  const campaignId = 1; // First campaign
  
  return (
    <Link href={`/en/campaigns/${campaignId}`}>
      View Campaign Details
    </Link>
  );
}
```

### Dynamic Campaign Data Access

```tsx
'use client';

import { programs } from '@/lib/mockData';
import { useMemo } from 'react';

export default function MyCampaignComponent() {
  const campaigns = useMemo(
    () => programs.map((program, index) => ({
      ...program,
      id: index + 1,
    })),
    []
  );

  // Use campaigns array...
}
```

## Features

### Campaigns List Page (`/campaigns`)

#### Filtering
- **Category Filter:** Users can filter campaigns by category
- **Search:** Full-text search across campaign names and descriptions
- **Stats Display:** Shows total campaigns, active campaigns, and number of categories

#### Campaign Cards
Each campaign card displays:
- Campaign category and ID
- Campaign name
- Brief description
- Impact metrics
- Hover effects for better interactivity

### Campaign Detail Page (`/campaigns/[id]`)

#### Sections
1. **Hero Section**
   - Back link to campaigns list
   - Campaign title
   - Category badge
   - Status, Impact, and Campaign ID metrics

2. **Overview Section**
   - Long description of the campaign
   - Campaign objectives list

3. **Sidebar Information**
   - Campaign info card (category, status, impact)
   - Call-to-action section (Donate, Volunteer)

4. **Impact Metrics**
   - Beneficiaries count
   - Campaign duration
   - Geographic coverage
   - Efficiency rating

5. **Related Campaigns**
   - Shows up to 3 related campaigns in the same category
   - Links to other campaign details

## Localization

The campaign pages are fully bilingual, supporting both English and Arabic:

- **English Routes:** `/en/campaigns`, `/en/campaigns/{id}`
- **Arabic Routes:** `/ar/campaigns`, `/ar/campaigns/{id}`

Content automatically switches based on the locale parameter in the URL.

## Styling

The campaigns section uses the same design system as the rest of the JHCO website:

- **Color Scheme:**
  - Primary: `#0a1428` (Dark Blue)
  - Accent: `#d4af37` (Gold)
  - Light Background: `#f9f7f4` (Off-white)

- **Typography:**
  - Headings: Georgia serif font
  - Body: System default sans-serif

- **Responsive Design:**
  - Mobile-first approach
  - Grid layouts with `repeat(auto-fit, minmax())`
  - Touch-friendly interactive elements

## Adding New Campaigns

Since campaigns are derived from the `programs` data in `/lib/mockData.ts`, simply add a new program entry:

```typescript
export const programs = [
  // ... existing programs
  {
    id: 11,  // Note: id field in programs is optional, index is used for campaign id
    slug: 'new-campaign-slug',
    name: 'New Campaign Name',
    nameAr: 'اسم الحملة الجديدة',
    description: 'Short description...',
    descriptionAr: 'وصف قصير...',
    // ... other fields
  }
];
```

The campaign will automatically appear on the campaigns list and be accessible at `/campaigns/{id}`.

## SEO Considerations

- Campaign pages use descriptive titles and meta descriptions
- URLs are semantic and use campaign IDs
- HTML structure follows best practices for accessibility
- Open graph tags can be added to `page.tsx` for social sharing

## Performance

- Pages use `'use client'` directive for interactivity
- Search and filtering happen on the client side
- No external API calls for campaign data
- Campaigns are converted once using `useMemo`

## Future Enhancements

Potential improvements for the campaign system:

1. **Database Integration:** Replace mockData with actual database
2. **Image Support:** Add hero images and gallery support
3. **Pagination:** Implement pagination for large campaign lists
4. **Sorting:** Add sorting options (newest, most impactful, etc.)
5. **Comments:** Enable user comments on campaigns
6. **Analytics:** Track campaign page views and interactions
7. **Export:** Allow exporting campaign data as PDF or CSV
8. **API Route:** Create `/api/campaigns` for external integrations

## Troubleshooting

### Campaign Not Found

If accessing `/campaigns/[id]` returns a "Campaign Not Found" message:
- Verify the ID is valid (1 through total number of programs)
- Check that the locale parameter is correct (`en` or `ar`)
- Ensure the URL format is correct: `/{locale}/campaigns/{id}`

### Styling Issues

If styles appear broken:
- Check that global CSS is properly imported in the root layout
- Verify inline styles are properly applied
- Test in different browsers for compatibility

### Locale Not Switching

If the Arabic/English toggle isn't working:
- Verify the locale parameter is included in the URL
- Check that `useParams()` is correctly reading the locale
- Ensure navigation links include the locale prefix

## Testing

To test the campaign routing:

1. Navigate to `http://localhost:3000/en/campaigns`
2. Click on any campaign card to view details
3. Use the "Back to Campaigns" link to return
4. Test the category filter
5. Test the search functionality
6. Switch to Arabic: `http://localhost:3000/ar/campaigns`
7. Verify all content displays in Arabic

## API Reference

### Campaign Data Methods

```typescript
// Get all campaigns
const campaigns = programs.map((program, index) => ({
  ...program,
  id: index + 1,
}));

// Get campaign by ID
const campaign = campaigns.find(c => c.id === 1);

// Get campaigns by category
const categoryName = 'Crisis Response';
const categoryCampaigns = campaigns.filter(
  c => c.category === categoryName
);

// Search campaigns
const searchTerm = 'education';
const results = campaigns.filter(c =>
  c.name.toLowerCase().includes(searchTerm) ||
  c.description.toLowerCase().includes(searchTerm)
);
```

## File Checklist

- [x] `/app/[locale]/campaigns/page.tsx` - Campaigns list page
- [x] `/app/[locale]/campaigns/[id]/page.tsx` - Campaign detail page
- [x] `/app/[locale]/campaigns/layout.tsx` - Layout wrapper
- [x] `/CAMPAIGN_ROUTING.md` - This documentation file

---

**Last Updated:** August 3, 2024
**Created By:** Claude AI
**Status:** Complete and Ready for Production
