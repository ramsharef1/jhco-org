import { NextRequest, NextResponse } from 'next/server';

// Mock data - replace with database queries
const MOCK_CERTIFICATIONS = [
  {
    id: '1',
    name_en: 'ISO 9001:2015 Quality Management',
    name_ar: 'معايير ISO 9001:2015 إدارة الجودة',
    issuer: 'International Organization for Standardization',
    issue_date: '2023-03-15',
    expiry_date: '2026-03-14',
    badge_type: 'ISO',
    icon_url: 'https://via.placeholder.com/100?text=ISO+9001',
    description_en: 'Certified quality management system',
    description_ar: 'نظام إدارة الجودة المعتمد',
  },
  {
    id: '2',
    name_en: 'NGO Accountability Charter',
    name_ar: 'ميثاق المسؤولية للمنظمات غير الحكومية',
    issuer: 'International NGO Accountability Charter',
    issue_date: '2024-01-10',
    expiry_date: '2027-01-09',
    badge_type: 'ACCREDITATION',
    icon_url: 'https://via.placeholder.com/100?text=NGO+Charter',
    description_en: 'Transparent organizational practices and ethical standards',
    description_ar: 'ممارسات تنظيمية شفافة والمعايير الأخلاقية',
  },
  {
    id: '3',
    name_en: 'Financial Audit - Clean Report',
    name_ar: 'تقرير التدقيق المالي - بدون ملاحظات',
    issuer: 'Big Four Audit Firm',
    issue_date: '2024-06-20',
    expiry_date: null,
    badge_type: 'AUDIT',
    icon_url: 'https://via.placeholder.com/100?text=Audit+Report',
    description_en: 'Annual financial audit with unqualified opinion',
    description_ar: 'التدقيق المالي السنوي مع رأي نظيف',
  },
  {
    id: '4',
    name_en: 'Best NGO Award 2024',
    name_ar: 'جائزة أفضل منظمة غير حكومية 2024',
    issuer: 'Regional Development Fund',
    issue_date: '2024-05-30',
    expiry_date: null,
    badge_type: 'AWARD',
    icon_url: 'https://via.placeholder.com/100?text=Award+2024',
    description_en: 'Recognition for outstanding impact and transparency',
    description_ar: 'اعتراف بالتأثير المتميز والشفافية',
  },
  {
    id: '5',
    name_en: 'Safeguarding Certification',
    name_ar: 'شهادة الحماية والسلامة',
    issuer: 'International Child Protection Organization',
    issue_date: '2024-02-15',
    expiry_date: '2025-02-14',
    badge_type: 'ACCREDITATION',
    icon_url: 'https://via.placeholder.com/100?text=Safeguarding',
    description_en: 'Certified safe practices for vulnerable populations',
    description_ar: 'ممارسات معتمدة آمنة للفئات الضعيفة',
  },
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const badge_type = searchParams.get('badge_type');

    // Filter data
    let filtered = MOCK_CERTIFICATIONS;

    if (badge_type) {
      filtered = filtered.filter((cert) => cert.badge_type === badge_type);
    }

    // Sort by expiry date (active certs first)
    filtered.sort((a, b) => {
      if (!a.expiry_date) return -1;
      if (!b.expiry_date) return 1;
      return new Date(b.expiry_date).getTime() - new Date(a.expiry_date).getTime();
    });

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'VIEW',
          event_name: 'certifications_viewed',
          metadata: { filters: { badge_type } },
        }),
      }).catch(() => null);
    } catch (e) {
      console.error('Analytics error:', e);
    }

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Certifications API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch certifications' },
      { status: 500 }
    );
  }
}
