import { NextRequest, NextResponse } from 'next/server';

interface ExportRequest {
  export_format: 'PDF' | 'EXCEL' | 'CSV';
  title?: string;
  export_params?: Record<string, any>;
}

export async function POST(request: NextRequest) {
  try {
    const body: ExportRequest = await request.json();
    const { export_format, title, export_params } = body;

    if (!export_format || !['PDF', 'EXCEL', 'CSV'].includes(export_format)) {
      return NextResponse.json(
        { error: 'Invalid export format' },
        { status: 400 }
      );
    }

    // Generate mock file URL (in production, this would generate actual files)
    const timestamp = new Date().toISOString().split('T')[0];
    const fileExtension = {
      PDF: 'pdf',
      EXCEL: 'xlsx',
      CSV: 'csv',
    }[export_format];

    const fileName = `dashboard-export-${timestamp}.${fileExtension}`;

    // Mock file URL - in production, upload to cloud storage
    const fileUrl = `/exports/${fileName}`;

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'EXPORT',
          event_name: `dashboard_exported_as_${export_format.toLowerCase()}`,
          metadata: { export_params },
        }),
      }).catch(() => null);
    } catch (e) {
      console.error('Analytics error:', e);
    }

    return NextResponse.json({
      success: true,
      file_url: fileUrl,
      file_name: fileName,
      export_format,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Export API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate export' },
      { status: 500 }
    );
  }
}
