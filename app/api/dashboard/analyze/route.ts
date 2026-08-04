import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { detectAnomalies } from '@/lib/ai/claude';

export async function POST(request: NextRequest) {
  try {
    const { metrics, baseline } = await request.json();

    const anomalies = await detectAnomalies(metrics, baseline || {});

    for (const anomaly of anomalies) {
      await prisma.anomalyAlert.create({
        data: {
          metric_name: anomaly.metric,
          alert_type: anomaly.change > 0 ? 'unusual_spike' : 'unusual_drop',
          severity: anomaly.severity,
          description: `${anomaly.metric} changed by ${anomaly.change.toFixed(1)}%`,
        },
      });
    }

    return NextResponse.json({ anomalies, detected: anomalies.length });
  } catch (error) {
    return NextResponse.json({ error: 'Anomaly detection failed' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const alerts = await prisma.anomalyAlert.findMany({
      where: { resolved: false },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    return NextResponse.json(alerts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 });
  }
}
