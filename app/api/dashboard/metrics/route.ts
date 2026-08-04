import { NextRequest, NextResponse } from 'next/server';

// Mock data - replace with database queries
const MOCK_METRICS = [
  {
    id: '1',
    label_en: 'Families Served',
    label_ar: 'العائلات المخدومة',
    value: 125430,
    unit_en: 'families',
    unit_ar: 'عائلات',
    category: 'families_served',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-15'),
    icon: '👨‍👩‍👧‍👦',
    trend: 12.5,
    color: '#b45309',
    data_source: 'Admin Dashboard',
  },
  {
    id: '2',
    label_en: 'Countries Reached',
    label_ar: 'الدول المستهدفة',
    value: 12,
    unit_en: 'countries',
    unit_ar: 'دول',
    category: 'countries',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-15'),
    icon: '🌍',
    trend: 0,
    color: '#d97706',
    data_source: 'Admin Dashboard',
  },
  {
    id: '3',
    label_en: 'Active Volunteers',
    label_ar: 'المتطوعون النشطون',
    value: 3847,
    unit_en: 'volunteers',
    unit_ar: 'متطوع',
    category: 'volunteers',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-15'),
    icon: '🤝',
    trend: 8.3,
    color: '#f59e0b',
    data_source: 'Admin Dashboard',
  },
  {
    id: '4',
    label_en: 'Programs Running',
    label_ar: 'البرامج المنفذة',
    value: 52,
    unit_en: 'programs',
    unit_ar: 'برنامج',
    category: 'programs',
    verification_status: 'VERIFIED',
    verified_at: new Date('2024-06-15'),
    icon: '📋',
    trend: 4.2,
    color: '#fbbf24',
    data_source: 'Admin Dashboard',
  },
  {
    id: '5',
    label_en: 'Total Impact',
    label_ar: 'الأثر الإجمالي',
    value: 542108,
    unit_en: 'lives impacted',
    unit_ar: 'حياة تأثرت',
    category: 'total_impact',
    verification_status: 'PENDING',
    verified_at: null,
    icon: '⭐',
    trend: 15.7,
    color: '#fcd34d',
    data_source: 'Field Reports',
  },
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters for filtering
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const verification_status = searchParams.get('verification_status');

    // Filter metrics based on query parameters
    let filtered = MOCK_METRICS;

    if (category) {
      filtered = filtered.filter((m) => m.category === category);
    }

    if (verification_status) {
      filtered = filtered.filter((m) => m.verification_status === verification_status);
    }

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'VIEW',
          event_name: 'metrics_viewed',
          metadata: { filters: { category, verification_status } },
        }),
      }).catch(() => null); // Silently fail if analytics fails
    } catch (e) {
      console.error('Analytics error:', e);
    }

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Metrics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}
