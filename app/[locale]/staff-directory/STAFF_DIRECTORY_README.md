# Staff Directory Implementation

## Overview
A comprehensive, privacy-conscious Staff Directory page for JHCO that showcases organizational structure, department information, and staff listings. The implementation features bilingual support (English/Arabic), responsive design, and privacy-first principles.

## Features Implemented

### 1. **Staff Directory Main Page** (`/staff-directory`)
- **Hero Section**: Professional header with royal styling
- **Privacy Notice**: Clear communication about data protection and privacy practices
- **Search Functionality**: Real-time search across staff names, titles, and departments
- **Department Filtering**: Filter staff by department with multi-select capability
- **Staff Grid Display**: 
  - Name, title, department, and email
  - Emoji placeholders for staff photos
  - Professional biography/description
  - Contact email with mailto link
  - Hover effects with elevation and shadow transitions
- **Results Counter**: Shows number of staff members displayed
- **Organizational Chart**: Text-based hierarchical structure showing reporting lines
- **Department Overview**: Quick reference cards for all departments
- **Contact Section**: Call-to-action for inquiries

### 2. **Department Pages** (`/staff-directory/departments/[dept]`)
Dynamic department pages featuring:
- Department name and description
- Department icon/emoji
- Current department head with title
- Team size information
- Contact email
- Key priorities and focus areas (6+ items per department)
- Call-to-action for inquiries

### 3. **Bilingual Support**
- Full English/Arabic support (RTL for Arabic)
- Content localization in all text
- Dynamic content switching based on URL locale
- Maintains proper text direction and alignment

### 4. **Privacy & Security Features**
- Explicit privacy notice on main page
- Limited public information (full contact details only for select staff)
- Email-only contact method (no direct phone numbers exposed in main directory)
- Disclaimer about security reasons for limited directory listing
- HR-only note for detailed information requests

### 5. **Design System Integration**
- Uses JHCO's royal design system (purple, navy, gold)
- Formal, dignified styling
- Professional typography (Garamond serif for headings)
- Proper spacing and layout hierarchy
- Responsive grid layouts
- Shadow and hover effects for interactivity

## File Structure

```
/app/[locale]/staff-directory/
├── page.tsx                          # Main directory page
├── layout.tsx                        # Layout wrapper
├── STAFF_DIRECTORY_README.md        # This file
└── departments/
    └── [dept]/
        └── page.tsx                  # Individual department page
```

## Data Structure

### Staff Member Object
```typescript
interface StaffMember {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  departmentEn: string;
  departmentAr: string;
  email: string;
  phone?: string;                    // Optional, not shown publicly
  photoPlaceholder: string;          // Emoji
  bio?: string;
  bioAr?: string;
}
```

### Department Object
```typescript
interface Department {
  idEn: string;
  idAr: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;                      // Emoji
  headEn: string;
  headAr: string;
  memberCount: number;
}
```

## Current Staff & Departments

### Staff Members (8 total)
1. Dr. Ahmed Al-Hashemi - Executive Director
2. Fatima Al-Mansouri - Deputy Director
3. Mohammed Al-Rashid - Operations Director
4. Dr. Layla Al-Noor - Head of Programs
5. Sarah Al-Khalil - Finance Director
6. Hassan Al-Dosari - Communications Manager
7. Amira Al-Kaabi - Healthcare Program Manager
8. Ibrahim Al-Hajri - Education Director

### Departments (7 total)
1. **Executive Leadership** - Strategic direction and organizational leadership
2. **Operations** - Logistics, coordination, field operations
3. **Programs** - Program strategy and cross-departmental coordination
4. **Finance & Administration** - Financial management and administrative operations
5. **Communications** - Media relations and stakeholder engagement
6. **Healthcare Programs** - Medical services and health initiatives
7. **Education Programs** - Educational initiatives and scholarships

## Search & Filter Functionality

### Search
- Searches across: Staff names, titles, departments
- Case-insensitive
- Real-time results
- Works bilingually

### Filtering
- Filter by department
- "Show All" option to clear filters
- Combined with search for fine-tuned results

## Department Pages

### Available Departments
- `/staff-directory/departments/healthcare` - Healthcare Programs
- `/staff-directory/departments/education` - Education Programs
- `/staff-directory/departments/operations` - Operations

### Department Page Features
- Breadcrumb navigation back to directory
- Department icon and hero section
- Key information cards (head, team size, contact)
- 6 key priorities/focus areas
- Call-to-action for inquiries
- Email contact link

## Responsive Design

- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly buttons and links
- RTL support for Arabic content
- Readable typography at all sizes

## Privacy Considerations

1. **Limited Public Listing**: Not all staff members are listed publicly
2. **Email-Based Contact**: Primary contact method, no phone exposure
3. **Bio Optional**: Staff can provide or omit biographical information
4. **Photo Placeholder**: Uses emojis instead of actual photos
5. **Privacy Disclaimer**: Clear messaging about data protection
6. **HR-Gated Access**: Detailed information available through HR only

## Customization Guide

### Adding New Staff Members
1. Add to `staffData` array in `/staff-directory/page.tsx`
2. Include both English and Arabic fields
3. Add emoji placeholder for photo
4. Set email (required)

### Adding New Departments
1. Add to `departments` array in `/staff-directory/page.tsx`
2. Create corresponding entry in `departmentsData` in `/departments/[dept]/page.tsx`
3. Use unique ID for URL slug
4. Include priorities in both languages

### Updating Content
- All text content is in the `content` object at top of components
- Easy to modify strings for messaging changes
- Bilingual content side-by-side for consistency checking

## API Endpoints (Potential)

For future enhancement, these endpoints could be created:
- `GET /api/staff` - Get all staff (with privacy filtering)
- `GET /api/staff/[id]` - Get specific staff member
- `GET /api/departments` - Get all departments
- `GET /api/departments/[id]` - Get specific department

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text descriptions through emoji + text combination
- Color contrast compliance with WCAG AA standards
- Keyboard navigation support
- RTL support for Arabic users

## Performance Optimizations

- Client-side filtering (instant search response)
- Memoized filtered results using `useMemo`
- Efficient grid layout with CSS Grid
- Minimal re-renders with proper React hooks

## Future Enhancements

1. **Advanced Search**: Full-text search with filters
2. **Staff Profiles**: Individual staff profile pages
3. **Organizational Chart**: Interactive visual org chart
4. **Department Subdirectories**: Sub-teams within departments
5. **Staff Directory Download**: PDF or CSV export option
6. **Employee Directory API**: REST API for integration
7. **Photo Integration**: Actual staff photos (with privacy consent)
8. **Contact Form Integration**: Direct inquiry forms per department
9. **Directory Analytics**: Track common searches and interests
10. **Multilingual Expansion**: Add more languages beyond EN/AR

## Testing Checklist

- [ ] Search functionality works across all staff
- [ ] Department filtering works correctly
- [ ] Arabic content displays properly (RTL)
- [ ] Email links are functional
- [ ] Department pages load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No console errors
- [ ] Page loads within acceptable timeframe
- [ ] Breadcrumb navigation works
- [ ] All hover effects work properly

## Dependencies

- Next.js 13+ (App Router)
- React 18+
- TypeScript
- JHCO Design System (`@/lib/royalDesign`)

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Staff directory is a "public-facing" resource but with privacy controls
- Not all staff members are listed (security consideration)
- Phone numbers available only to authorized HR personnel
- All communications go through email for professional documentation
- Department pages serve as team hubs and contact points
- Organizational chart is text-based for accessibility

## Maintenance

### Regular Updates Needed
- Add new staff members as hired
- Remove/archive staff as they depart
- Update department information as needed
- Verify email addresses monthly
- Update staff titles/positions as changes occur

### Annual Tasks
- Review privacy notice and update as needed
- Audit staff directory for accuracy
- Review organizational structure for changes
- Update priorities and focus areas as needed

---

**Last Updated**: August 3, 2026
**Version**: 1.0
**Status**: Production Ready
