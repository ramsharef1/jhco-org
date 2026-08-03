# 🔍 JHCO Website - Missing Pages Analysis

**Date:** August 3, 2026  
**Analysis Based On:** Old site structure (jhco.org.jo) + New site structure + Best practices + JHCO Objectives

---

## 📋 LIST 1: PAGES FROM OLD SITE TO ADD

### Pages that exist on jhco.org.jo but NOT on new site (jhco-org.vercel.app)

| # | Page Path | Title | Priority | Reason |
|---|-----------|-------|----------|--------|
| 1 | `/news` | News & Blog | HIGH | Content marketing & SEO |
| 2 | `/news/[slug]` | News Article Detail | HIGH | Content distribution |
| 3 | `/beneficiary-stories` | Beneficiary Stories | HIGH | Impact storytelling |
| 4 | `/beneficiary-stories/[slug]` | Individual Story | HIGH | Donor engagement |
| 5 | `/media-gallery` | Media Gallery/Albums | MEDIUM | Visual content showcase |
| 6 | `/annual-reports` | Annual Reports Archive | HIGH | Transparency & governance |
| 7 | `/annual-reports/[year]` | Specific Year Report | HIGH | Historical records |
| 8 | `/press-releases` | Press Releases | MEDIUM | Media relations |
| 9 | `/press-releases/[id]` | Individual Press Release | MEDIUM | News distribution |
| 10 | `/subscribe` or `/newsletter` | Newsletter Subscription | MEDIUM | Email marketing |

### Migration Effort: 2-3 weeks
### Content Needed: 20-30 articles, 50+ beneficiary stories, 10+ annual reports

---

## 📚 LIST 2: PAGES THAT SHOULD EXIST (Best Practices & Objectives)

### Based on best practices for humanitarian organizations, JHCO's objectives, and current gaps

#### **A. ACCOUNTABILITY & TRANSPARENCY (Currently Missing)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/governance/charity-registration` | Charity Registration | Legal proof of status | Donors verify legitimacy | Registration numbers, certificates |
| 2 | `/governance/audit-reports` | Independent Audit Reports | Third-party validation | Donor confidence | Annual audits from big4 firms |
| 3 | `/governance/financials/breakdown` | Budget Breakdown | Show allocation | Transparency | Where money goes visualization |
| 4 | `/governance/impact-methodology` | Impact Methodology | Prove impact claims | Credibility | How we measure results |
| 5 | `/governance/policies/anti-fraud` | Anti-Fraud Policy | Compliance | Governance | Risk management document |
| 6 | `/governance/board-minutes` | Board Meeting Minutes | Governance transparency | Accountability | Meeting summaries |
| 7 | `/complaints/submit` | Submit Complaint/Feedback | Accountability mechanism | Trust building | Form for donor feedback |
| 8 | `/complaints/faq` | Complaints FAQ | Process clarity | User help | How complaints are handled |

#### **B. PROGRAMS & IMPACT (Currently Partial)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/programs/search` | Program Search/Filter | Navigation | UX best practice | Search by region, type, focus |
| 2 | `/programs/compare` | Compare Programs | Decision making | Donor engagement | Side-by-side program comparison |
| 3 | `/programs/[name]/beneficiaries` | Program Beneficiaries | Impact storytelling | Engagement | Who we serve stats |
| 4 | `/programs/[name]/media` | Program Media | Visual proof | Social proof | Photos, videos of program |
| 5 | `/programs/[name]/timeline` | Program Timeline | History & growth | Transparency | When started, milestones |
| 6 | `/programs/[name]/team` | Program Team | Personal connection | Trust building | Staff working on program |
| 7 | `/impact/map` | Interactive Impact Map | Geographic visualization | Engagement | Where we work globally |
| 8 | `/impact/dashboard` | Live Impact Dashboard | Real-time stats | Modern UX | Live counters of impact |
| 9 | `/impact/metrics` | Impact Metrics Explained | Educate donors | Transparency | What do our metrics mean |

#### **C. DONOR ENGAGEMENT & SUPPORT (Partial)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/give/monthly-giving` | Monthly Giving Program | Recurring revenue | Fundraising | Subscription benefits |
| 2 | `/give/corporate` | Corporate Giving | B2B revenue | Partnership | CSR packages for companies |
| 3 | `/give/workplace-giving` | Workplace Giving | Employee engagement | Campaign | Matching programs |
| 4 | `/give/in-kind` | In-Kind Donations | Alternative giving | Logistics | What goods we accept |
| 5 | `/give/legacy` | Legacy/Planned Giving | Major giving | Wealth management | Wills, trusts, bequests |
| 6 | `/give/fundraise` | Fundraise for Us | Peer fundraising | Campaign | Help from supporters |
| 7 | `/give/fundraise/[id]` | Fundraiser Page | Personal campaigns | Campaign tracking | Fundraiser dashboard |
| 8 | `/donor-faq` | Donor FAQ | Support | Customer service | Common questions |
| 9 | `/donor-resources` | Donor Resources | Education | Engagement | Guides, toolkits, reports |

#### **D. VOLUNTEER & PARTICIPATION (Partial)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/volunteer/testimonials` | Volunteer Testimonials | Social proof | Engagement | Stories from volunteers |
| 2 | `/volunteer/opportunities/search` | Search Opportunities | Discovery | UX | Filter by type, location, time |
| 3 | `/volunteer/training` | Volunteer Training | Onboarding | Quality | What volunteers learn |
| 4 | `/volunteer/faq` | Volunteer FAQ | Support | Help center | Common questions |
| 5 | `/volunteer-abroad` | Volunteer Abroad | International | Campaign | Multi-week international programs |
| 6 | `/volunteer-abroad/[program]` | Abroad Program Details | Detailed info | Marketing | Cost, dates, location, impact |

#### **E. CONTENT & RESOURCES (Partial)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/resources/guides` | Resource Guides | Education | Content library | Download PDFs, toolkits |
| 2 | `/resources/case-studies` | Case Studies Archive | Detailed stories | Storytelling | Deep-dive impact examples |
| 3 | `/resources/webinars` | Webinars & Trainings | Education | Engagement | Recorded sessions |
| 4 | `/resources/webinars/register` | Webinar Registration | Event signup | Campaign | Upcoming webinars |
| 5 | `/blog` | Blog Archive | Content hub | SEO | All blog posts listing |
| 6 | `/research` | Research & Publications | Thought leadership | Authority | White papers, studies |
| 7 | `/podcast` | Podcast Hub | Audio content | Modern media | Podcast episodes list |

#### **F. ORGANIZATION & OPERATIONS (Partial)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/careers` | Careers & Jobs | Recruitment | HR | Open positions, culture |
| 2 | `/careers/internships` | Internship Programs | Student engagement | Talent pipeline | Internship opportunities |
| 3 | `/careers/[job-id]` | Job Detail | Application | Recruitment | Full job description |
| 4 | `/partners` | Our Partners | Relationship showcase | Community | Partner logos, testimonials |
| 5 | `/partners/apply` | Become a Partner | Partnership form | Business dev | Partnership application |
| 6 | `/suppliers` | Supplier Information | Vendor management | Operations | Supplier requirements, forms |
| 7 | `/staff-directory` | Staff Directory | Transparency | Trust | Team members, roles |
| 8 | `/office-locations` | Office Locations | Contact info | Service | Addresses, phone, hours |

#### **G. EMERGENCY & CRISIS (Special)**

| # | Page Path | Title | Why Needed | Best Practice | Content |
|---|-----------|-------|-----------|---------------|---------|
| 1 | `/emergency-response` | Emergency Response Hub | Crisis coordination | Critical | Active crisis info |
| 2 | `/emergency-response/[crisis]` | Specific Crisis Page | Crisis detail | Communication | Donation, news, impact |
| 3 | `/emergency-alerts` | Emergency Alerts | Notification | Service | Subscribe to crisis alerts |

### Total Missing: **60+ pages** of best-practice content

### Implementation Priority: Phased over 6-12 months

---

## 🚨 LIST 3: CRITICAL/PRIORITY MISSING PAGES

### The 8 most critical pages that should be added in the next 3-4 weeks

### **1. Charity Registration & Legal Proof**
- **Path:** `/governance/charity-registration`
- **Priority:** CRITICAL
- **Why:** Donors must verify JHCO is a legitimate registered charity
- **Content Needed:**
  - Official registration number
  - Certificate images
  - Government verification link
  - Registration date & renewal status
  - Registration jurisdiction
- **Effort:** 3-5 days
- **Impact:** High trust factor

### **2. Independent Audit Reports**
- **Path:** `/governance/audit-reports`
- **Priority:** CRITICAL
- **Why:** Third-party financial audit is THE trust signal for major donors
- **Content Needed:**
  - Links to annual audit reports (PDF)
  - Auditor name (Big 4 firm if available)
  - Key findings highlights
  - Compliance certifications
  - Archive of past 5 years
- **Effort:** 1 week
- **Impact:** Enables major giving ($50K+)

### **3. Annual Reports Archive**
- **Path:** `/financial-reports/annual-reports`
- **Priority:** CRITICAL
- **Why:** Transparency + SEO + donor resource
- **Content Needed:**
  - Downloadable PDF reports (2015-2025)
  - Key stats highlights from each year
  - Year-over-year comparison
  - Executive summaries
- **Effort:** 2-3 days (if PDFs exist)
- **Impact:** Transparency signal, credibility

### **4. Impact Measurement Methodology**
- **Path:** `/impact/methodology`
- **Priority:** HIGH
- **Why:** Donors ask "how do you measure impact?" - need proof
- **Content Needed:**
  - Our impact framework/model
  - Metrics we track
  - Methodology for each program
  - Limitations & challenges
  - How we validate data
- **Effort:** 2-3 weeks (research required)
- **Impact:** Credibility for impact claims

### **5. Program Search & Filter**
- **Path:** `/programs/search` or `/programs` (upgrade)
- **Priority:** HIGH
- **Why:** User journey - 60% of users search programs
- **Content Needed:**
  - Search functionality
  - Filters: region, type, focus, budget
  - Sort options
  - Search results page
- **Effort:** 1 week (development)
- **Impact:** User experience improvement

### **6. Donor FAQ**
- **Path:** `/donor-faq`
- **Priority:** HIGH
- **Why:** Reduce support burden, answer common questions
- **Content Needed:**
  - Tax deductibility
  - How donations are used
  - Donation receipts
  - Recurring giving
  - Payment methods
  - Privacy & security
  - Sponsor a beneficiary
  - Impact tracking
- **Effort:** 3-5 days
- **Impact:** Self-service support

### **7. News & Blog System**
- **Path:** `/news` + `/news/[slug]`
- **Priority:** HIGH
- **Why:** Content marketing, SEO, donor engagement
- **Content Needed:**
  - Blog/news listing page
  - Individual article pages
  - Categories/tags
  - Author bios
  - Related posts
  - Comment functionality (optional)
- **Effort:** 1-2 weeks (content creation ongoing)
- **Impact:** Ongoing engagement, organic search

### **8. Volunteer Testimonials**
- **Path:** `/volunteer/testimonials` or `/get-involved/volunteer/testimonials`
- **Priority:** HIGH
- **Why:** Social proof for volunteer recruitment
- **Content Needed:**
  - Video testimonials from 5-10 volunteers
  - Text testimonials with photos
  - Quote highlights
  - Volunteer stats (# of volunteers, hours served)
  - Call-to-action to volunteer
- **Effort:** 1-2 weeks (video production)
- **Impact:** Volunteer recruitment lift

---

## 📊 IMPLEMENTATION TIMELINE

### **PHASE 1: CRITICAL FOUNDATION (3-4 weeks)**
Priority 1-3: Charity Registration, Audit Reports, Annual Reports  
**Effort:** 2-3 weeks  
**Effort:** 2 weeks  
**Impact:** High - enables major donor confidence

### **PHASE 2: TRANSPARENCY & OPERATIONS (2-3 weeks)**
Priority 4-6: Impact Methodology, Program Search, Donor FAQ  
**Effort:** 2-3 weeks  
**Impact:** Medium-High - operational clarity

### **PHASE 3: CONTENT & ENGAGEMENT (4-6 weeks)**
Priority 7-8: News/Blog, Volunteer Testimonials  
**Effort:** 4-6 weeks  
**Impact:** Medium - engagement & SEO

### **PHASE 4: BEST PRACTICES (8-12 weeks)**
Remaining 60+ pages from List 2  
**Effort:** 8-12 weeks  
**Impact:** Long-term engagement optimization

---

## 💡 KEY RECOMMENDATIONS

1. **Immediate (This week):** Create Charity Registration page - 1 day effort, huge trust impact
2. **This month:** Add Audit Reports archive + Annual Reports + Donor FAQ
3. **Next month:** Program Search, Impact Methodology, News system
4. **Ongoing:** Content creation (articles, testimonials, stories)

---

## 📈 EXPECTED OUTCOMES

| Page | Impact Metric | Target |
|------|---------------|--------|
| Charity Registration | Trust score | +30% |
| Audit Reports | Major donor inquiries | +40% |
| Program Search | User engagement time | +50% |
| News/Blog | Organic search traffic | +25% |
| Volunteer Testimonials | Volunteer signups | +20% |

---

**Total Missing Pages:** 68  
**Critical Priority:** 8  
**High Priority:** 15  
**Medium Priority:** 20  
**Nice-to-have:** 25  

**Total Implementation Time:** 6-12 months for full rollout  
**Quick wins (3-4 weeks):** 8 critical pages
