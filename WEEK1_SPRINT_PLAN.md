# 🚀 WEEK 1 SPRINT PLAN - EXECUTION

**Client Decisions Confirmed:**
- ✅ Hero Image: **Royal Authority** positioning
- ✅ CMS: **Custom** (full control)
- ✅ Visual Brand: **Royal** (navy/gold, formal elegance)
- ✅ Real Data: **All available** statistics
- ✅ Images: **JHCO org sources only** (old website, social, official)

---

## 📅 WEEK 1 TIMELINE

### DAY 1 (TODAY): Admin Panel Architecture & Homepage Hero Design

#### Task 1.1: Design Custom Admin Panel Architecture
**Deliverable:** Database schema + UI mockup

**Admin Panel Features (MVP):**
```
Dashboard
├── Homepage Management
│   ├── Hero Image Upload
│   ├── Hero Text Editor
│   ├── Impact Statistics (live fields)
│   └── Featured Content Selector
├── Image Gallery
│   ├── Upload Images
│   ├── Organize by Program/Category
│   ├── Bulk Operations
│   └── License Tracking
├── Content Management
│   ├── Story Editor
│   ├── Program Updates
│   ├── Press Releases
│   └── Testimonials
├── Analytics
│   ├── Page Views
│   ├── Image Performance
│   └── Engagement Metrics
└── Settings
    ├── User Roles
    ├── Publish Schedule
    └── Backups
```

**Database Tables Needed:**
```
users (admin authentication)
├── id, email, password, role, created_at

images (photo management)
├── id, filename, url, category, program, metadata, license, uploaded_by, created_at

content (dynamic content)
├── id, type (homepage/story/program), key, value_text, value_image, published, created_at

statistics (impact metrics)
├── id, metric_name, value, unit, last_updated, source

stories (beneficiary/impact stories)
├── id, title, content, images[], program, featured, published, created_at

press (media/press releases)
├── id, title, content, images[], published_date, created_at
```

**Technology Stack:**
- Frontend: React/Next.js (already using)
- Backend: Next.js API Routes + Prisma ORM
- Database: PostgreSQL (cloud-hosted) or SQLite (local)
- Authentication: NextAuth.js (simple, effective)
- File Storage: Vercel Blob or AWS S3 (image hosting)

**Status:** Ready to build

---

#### Task 1.2: Homepage Hero Redesign (Royal Authority)
**Deliverable:** New homepage hero section design

**Royal Authority Messaging (Copy):**
```
HEADLINE:
"Humanitarian Excellence Under Royal Patronage"

SUBHEADING:
"Serving 30+ countries with institutional integrity and measurable impact. 
Where royal heritage meets professional excellence."

CALL-TO-ACTION OPTIONS:
Primary: "Support Our Mission" (elegant button, gold accent)
Secondary: "Learn Our Impact" (outline button, white text on dark)

CTA DESTINATIONS:
- Support → /get-involved/donate
- Impact → /impact/statistics
```

**Royal Authority Visual Elements:**
```
LAYOUT: 
Image (left) + Text (right)
→ Shows power, balance, professionalism

HERO IMAGE:
Subject: Royal setting, official event, or dignified beneficiary
Style: Professional, high-contrast, formal
Size: 2560x1440px minimum
Mood: Impressive, trustworthy, impressive

TEXT POSITIONING:
- Large, serif font (Georgia/Garamond)
- Deep navy text on subtle background
- Gold accent line under headline
- Generous whitespace

TRUST SIGNALS BELOW HERO:
✓ "Royal Patronage" badge/logo
✓ "Independent Audits" link
✓ "30+ Countries" stat
✓ "75,000+ Families Served" stat
```

**Design Mockup Code:**
```tsx
// ROYAL AUTHORITY HERO SECTION
<section className="hero-royal">
  <div className="hero-content">
    <div className="hero-image">
      <img src={heroImage} alt="Royal patronage" />
    </div>
    
    <div className="hero-text">
      <p className="overline">HUMANITARIAN EXCELLENCE</p>
      <h1>Under Royal Patronage</h1>
      <p className="subheading">
        Serving 30+ countries with institutional integrity 
        and measurable impact. Where royal heritage meets 
        professional excellence.
      </p>
      
      <div className="cta-buttons">
        <button className="btn-primary">Support Our Mission</button>
        <button className="btn-secondary">Learn Our Impact</button>
      </div>
    </div>
  </div>
  
  <div className="trust-signals">
    <div className="signal">✓ Royal Patronage</div>
    <div className="signal">✓ Independent Audits</div>
    <div className="signal">✓ 30+ Countries</div>
    <div className="signal">✓ 75,000+ Families</div>
  </div>
</section>
```

**Styling (Luxury):**
```css
.hero-royal {
  background: linear-gradient(135deg, #0a1428 0%, #1a2f4a 100%);
  padding: 120px 32px;
  color: white;
}

.hero-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0; /* Modern luxury: no border-radius */
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.1;
  color: white;
  margin: 20px 0 0;
  letter-spacing: -0.5px;
  border-bottom: 3px solid #d4af37;
  padding-bottom: 20px;
}

.overline {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
}

.subheading {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255,255,255,0.85);
  margin: 20px 0 40px;
}

.btn-primary {
  background: #d4af37;
  color: #0a1428;
  padding: 16px 48px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #e8c547;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212,175,55,0.3);
}

.trust-signals {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 60px;
  padding: 40px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(212,175,55,0.2);
}

.signal {
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  h1 {
    font-size: 48px;
  }
  .trust-signals {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Status:** Ready to implement

---

### DAY 2-3: Custom Admin Panel Development

#### Task 2.1: Set Up Backend Infrastructure
**Deliverable:** Admin API ready for CRUD operations

**Steps:**
1. [ ] Set up Prisma ORM with PostgreSQL (or SQLite for local)
2. [ ] Create database schema (users, images, content, statistics, stories)
3. [ ] Build NextAuth.js authentication
4. [ ] Create API routes:
   - `POST /api/admin/login` - Authentication
   - `GET /api/admin/images` - List images
   - `POST /api/admin/images` - Upload image
   - `PUT /api/admin/images/:id` - Update image metadata
   - `DELETE /api/admin/images/:id` - Delete image
   - `GET /api/admin/content/:type` - Get content by type
   - `PUT /api/admin/content/:id` - Update content
   - `GET /api/admin/statistics` - Get all stats
   - `PUT /api/admin/statistics/:id` - Update stat
   - `GET /api/admin/stories` - List stories
   - `POST /api/admin/stories` - Create story
   - `PUT /api/admin/stories/:id` - Update story

**Database Connection String:**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/jhco"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

---

#### Task 2.2: Build Admin Dashboard UI
**Deliverable:** Admin panel interface

**Admin Dashboard Structure:**
```
/admin/dashboard
├── /admin/images (image management)
├── /admin/content/homepage (homepage editor)
├── /admin/content/stories (story manager)
├── /admin/statistics (impact metrics)
├── /admin/settings (users, roles, backups)
└── /admin/analytics (view stats)
```

**Key Admin Components:**
```tsx
// AdminLayout.tsx - Main admin wrapper with nav

// ImageUploader.tsx
- Drag-drop image upload
- Preview before upload
- Auto-optimize (resize, compress)
- Add metadata (program, category, license)
- Bulk operations

// HomepageEditor.tsx
- Hero image selector (from gallery)
- Hero text WYSIWYG editor
- Impact stats form (editable numbers)
- Preview live changes
- Publish button

// StoryManager.tsx
- Story form (title, content, images)
- Multi-image upload
- Program selector
- Featured toggle
- Auto-save to draft

// StatisticsManager.tsx
- Impact metric form
- Update existing metrics
- Add new metrics
- Timestamp tracking
- Source attribution

// Settings.tsx
- User management
- Role assignment
- Backup/restore
- Activity log
```

**Status:** Ready to implement

---

#### Task 2.3: File Storage Setup
**Deliverable:** Image hosting system ready

**Options:**
1. **Vercel Blob** (simplest, integrated)
   - Automatic CDN
   - Easy to implement
   - Cost-effective
   - Recommended ✓

2. **AWS S3** (most control)
   - Full control
   - Scalable
   - Requires setup
   - More expensive

**Implementation (Vercel Blob):**
```tsx
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  const blob = await put(file.name, file, {
    access: 'public',
  });
  
  return Response.json(blob);
}
```

**Status:** Ready to implement

---

### DAY 4: Integration & Testing

#### Task 4.1: Connect Admin to Homepage
**Deliverable:** Live homepage pulling from admin

**Flow:**
```
Admin Panel:
  Upload hero image → Stored in Blob
  Update hero text → Stored in DB
  Update statistics → Stored in DB
    ↓
API Routes:
  /api/content/homepage → Returns latest content
    ↓
Homepage Component:
  Fetches from API
  Displays real images
  Shows real statistics
  Updates in real-time
```

**Homepage Component Update:**
```tsx
'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [content, setContent] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch homepage content
    fetch('/api/content/homepage')
      .then(res => res.json())
      .then(data => setContent(data));

    // Fetch statistics
    fetch('/api/admin/statistics')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <section className="hero-royal">
      {/* Hero from DB */}
      <img src={content.heroImage} alt={content.heroAlt} />
      <h1>{content.headline}</h1>
      <p>{content.subheading}</p>

      {/* Statistics from DB */}
      <div className="trust-signals">
        {stats?.map(stat => (
          <div key={stat.id} className="signal">
            {stat.value}+ {stat.label}
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Status:** Ready to implement

---

#### Task 4.2: Test Admin Workflow
**Testing Checklist:**
- [ ] Upload image via admin → Appears on homepage
- [ ] Edit text via admin → Updates live
- [ ] Update stat via admin → Shows new number
- [ ] Delete image → Removes from display
- [ ] Authentication works (login/logout)
- [ ] Multiple images management
- [ ] File optimization working
- [ ] Mobile admin responsive

---

### DAY 5: Deployment & Content Population

#### Task 5.1: Deploy Admin Panel to Live
**Deliverable:** Admin accessible at `/admin`

**Deployment Checklist:**
- [ ] Database deployed (PostgreSQL)
- [ ] Environment variables set
- [ ] File storage configured
- [ ] Authentication verified
- [ ] Admin URL protected (login required)
- [ ] Backup system working

---

#### Task 5.2: Populate Initial Content
**Deliverable:** Homepage live with real images & data

**Content to Add:**
```
HOMEPAGE HERO:
☐ Hero image (royal authority - uploaded via admin)
☐ Headline text
☐ Subheading text
☐ CTA buttons

STATISTICS (Real Numbers):
☐ Families served: ___
☐ Countries: ___
☐ Volunteers: ___
☐ Years operating: ___
☐ Programs: ___

PROGRAM IMAGES:
☐ Healthcare (5 images)
☐ Education (5 images)
☐ Food Security (5 images)
☐ Livelihoods (5 images)
☐ Emergency (3 images)

TRUST SIGNALS:
☐ Royal patronage badge/text
☐ Audit reports link
☐ Team photos (5 key people)
☐ Media coverage (3 press logos/links)
```

---

## 🗂️ IMPLEMENTATION DETAILS

### Admin Panel Login
```
URL: https://jhco-org.vercel.app/admin
Email: admin@jhco.org (to be created)
Password: (secure, generated)

Features:
- Email/password login
- Role-based access (Admin, Editor, Viewer)
- Session expiry (24 hours)
- Activity logging
```

---

## 📁 File Structure (New)

```
jhco-org/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx (updated homepage with real content)
│   │   └── ... (existing pages)
│   ├── admin/
│   │   ├── layout.tsx (admin wrapper)
│   │   ├── dashboard/
│   │   │   └── page.tsx (admin home)
│   │   ├── images/
│   │   │   └── page.tsx (image manager)
│   │   ├── content/
│   │   │   ├── homepage/
│   │   │   │   └── page.tsx (homepage editor)
│   │   │   └── stories/
│   │   │       └── page.tsx (story manager)
│   │   ├── statistics/
│   │   │   └── page.tsx (stats manager)
│   │   └── settings/
│   │       └── page.tsx (admin settings)
│   └── api/
│       ├── admin/
│       │   ├── images/
│       │   │   ├── route.ts (GET, POST)
│       │   │   └── [id]/
│       │   │       ├── route.ts (PUT, DELETE)
│       │   │       └── upload.ts (file handling)
│       │   ├── content/
│       │   │   ├── route.ts (GET, PUT)
│       │   │   └── [type]/
│       │   │       └── route.ts (GET by type)
│       │   ├── statistics/
│       │   │   ├── route.ts (GET, POST, PUT)
│       │   │   └── [id]/
│       │   │       └── route.ts (PUT, DELETE)
│       │   ├── stories/
│       │   │   ├── route.ts (GET, POST)
│       │   │   └── [id]/
│       │   │       └── route.ts (PUT, DELETE)
│       │   └── auth/
│       │       ├── [...nextauth].ts (NextAuth config)
│       │       └── login.ts (login endpoint)
│       └── content/
│           └── homepage/
│               └── route.ts (public API for homepage)
│
├── lib/
│   ├── db.ts (Prisma client)
│   ├── auth.ts (auth utils)
│   └── storage.ts (Vercel Blob utils)
│
├── prisma/
│   └── schema.prisma (database schema)
│
├── public/
│   └── (static files)
│
└── .env.local (secrets)
```

---

## 🔐 Security Checklist

- [ ] Admin password hashed (bcrypt)
- [ ] Environment variables secured
- [ ] API routes protected (auth middleware)
- [ ] CORS configured properly
- [ ] Rate limiting on uploads
- [ ] File type validation (images only)
- [ ] Max file size limits (e.g., 10MB)
- [ ] SQL injection prevention (Prisma)

---

## 📊 Success Metrics (End of Week)

✅ **Homepage Hero**
- Real royal authority image displayed
- Professional messaging in place
- Admin can change via panel (no code)

✅ **Real Statistics**
- Actual numbers showing (families, countries, volunteers)
- Admin can update (editable fields)
- Updates show immediately on site

✅ **Image Management**
- 20+ real images uploaded to admin
- Images organized by program
- Program pages showing real photos

✅ **Admin Panel Live**
- Admin login working
- Can upload images
- Can edit content
- Can update statistics
- All changes live immediately

✅ **Professional Appearance**
- No more placeholders
- Royal authority positioning visible
- Dark navy + gold luxury branding
- Trust signals displayed

---

## 🚀 READY TO START?

**Next Action:** 
Confirm I should begin Day 1 tasks:
1. Admin panel architecture
2. Homepage hero redesign (royal authority)

**Information Needed (When Ready):**
- JHCO real statistics (families, countries, programs, years)
- Hero image file (or I can guide selection)
- Database hosting preference (PostgreSQL cloud vs local SQLite)
- Admin user email/password

**Ready to build the luxury product?** 🏰
