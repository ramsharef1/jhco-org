import { NextRequest, NextResponse } from 'next/server';

// Mock data - replace with database queries
const MOCK_FINANCIAL_DATA = [
  {
    id: '1',
    category: 'Healthcare',
    category_ar: 'الصحة',
    amount: 1250000,
    currency: 'JOD',
    fiscal_year: 2024,
    description: 'Medical services and clinic operations',
    description_ar: 'الخدمات الطبية وتشغيل العيادات',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-01'),
    data_source: 'Financial Records',
  },
  {
    id: '2',
    category: 'Education',
    category_ar: 'التعليم',
    amount: 980000,
    currency: 'JOD',
    fiscal_year: 2024,
    description: 'School programs and scholarships',
    description_ar: 'برامج المدارس والمنح الدراسية',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-01'),
    data_source: 'Financial Records',
  },
  {
    id: '3',
    category: 'Food Aid',
    category_ar: 'المساعدات الغذائية',
    amount: 650000,
    currency: 'JOD',
    fiscal_year: 2024,
    description: 'Food distribution and nutrition programs',
    description_ar: 'توزيع الغذاء وبرامج التغذية',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-01'),
    data_source: 'Financial Records',
  },
  {
    id: '4',
    category: 'Livelihoods',
    category_ar: 'سبل العيش',
    amount: 520000,
    currency: 'JOD',
    fiscal_year: 2024,
    description: 'Job training and microfinance initiatives',
    description_ar: 'التدريب الوظيفي ومبادرات التمويل الأصغر',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-01'),
    data_source: 'Financial Records',
  },
  {
    id: '5',
    category: 'Emergency Relief',
    category_ar: 'الإغاثة الطوارئ',
    amount: 380000,
    currency: 'JOD',
    fiscal_year: 2024,
    description: 'Disaster response and humanitarian aid',
    description_ar: 'الاستجابة للكوارث والمساعدات الإنسانية',
    verification_status: 'PENDING',
    verified_at: null,
    data_source: 'Field Reports',
  },
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const fiscal_year = searchParams.get('fiscal_year');
    const verification_status = searchParams.get('verification_status');

    // Filter data
    let filtered = MOCK_FINANCIAL_DATA;

    if (category) {
      filtered = filtered.filter((record) => record.category === category);
    }

    if (fiscal_year) {
      filtered = filtered.filter((record) => record.fiscal_year === parseInt(fiscal_year));
    }

    if (verification_status) {
      filtered = filtered.filter((record) => record.verification_status === verification_status);
    }

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'VIEW',
          event_name: 'financial_data_viewed',
          metadata: { filters: { category, fiscal_year, verification_status } },
        }),
      }).catch(() => null);
    } catch (e) {
      console.error('Analytics error:', e);
    }

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Financial API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch financial data' },
      { status: 500 }
    );
  }
}
