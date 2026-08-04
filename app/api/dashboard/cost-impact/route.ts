import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get('program');
    const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());

    const metrics = await prisma.costImpactMetric.findMany({
      where: {
        ...(program && { program }),
        fiscal_year: year,
      },
      orderBy: { cost: 'asc' },
    });

    const withEfficiency = metrics.map((m) => ({
      ...m,
      efficiency: (m.cost / m.outcome_count).toFixed(3),
    }));

    return NextResponse.json(withEfficiency);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cost metrics' }, { status: 500 });
  }
}
