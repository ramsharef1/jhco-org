import { NextRequest, NextResponse } from 'next/server';

interface DashboardEvent {
  event_type: 'VIEW' | 'EXPORT' | 'FILTER' | 'SHARE' | 'SIGNUP';
  event_name: string;
  user_id?: string;
  metadata?: Record<string, any>;
  session_id?: string;
}

/**
 * POST /api/dashboard/analytics/events
 * Log user interactions with the dashboard
 * Used for Google Analytics integration and usage tracking
 */
export async function POST(request: NextRequest) {
  try {
    const body: DashboardEvent = await request.json();
    const {
      event_type,
      event_name,
      user_id,
      metadata = {},
      session_id,
    } = body;

    if (!event_type || !event_name) {
      return NextResponse.json(
        { error: 'Missing required fields: event_type, event_name' },
        { status: 400 }
      );
    }

    // In production, save to database
    // const event = await prisma.dashboardEvent.create({
    //   data: {
    //     event_type,
    //     event_name,
    //     user_id,
    //     metadata,
    //     session_id,
    //   },
    // });

    // Send to Google Analytics (if configured)
    try {
      if (process.env.NEXT_PUBLIC_GA_ID) {
        // GA4 measurement API call
        await fetch('https://www.google-analytics.com/mp/collect', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            measurement_id: process.env.NEXT_PUBLIC_GA_ID,
            api_secret: process.env.GA_API_SECRET,
            events: [
              {
                name: event_name,
                params: {
                  event_type,
                  session_id,
                  ...metadata,
                },
              },
            ],
          }),
        }).catch(() => null); // Silently fail if GA is unavailable
      }
    } catch (gaError) {
      console.error('GA tracking error:', gaError);
    }

    return NextResponse.json(
      {
        success: true,
        event_type,
        event_name,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to log event' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/dashboard/analytics/events
 * Retrieve analytics summary (optional, for admin dashboard)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const days = parseInt(searchParams.get('days') || '7');
    const event_type = searchParams.get('event_type');

    // Mock summary data - in production, query database
    const mockSummary = {
      totalViews: 1247,
      totalExports: 43,
      totalSignups: 128,
      topEvents: [
        { name: 'metrics_viewed', count: 456 },
        { name: 'financial_data_viewed', count: 234 },
        { name: 'stories_viewed', count: 189 },
        { name: 'dashboard_exported_as_pdf', count: 32 },
        { name: 'dashboard_exported_as_excel', count: 11 },
      ],
      periodDays: days,
    };

    return NextResponse.json(mockSummary);
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
