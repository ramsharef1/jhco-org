import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stats = await prisma.statistic.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        label: true,
        value: true,
        unit: true,
        category: true,
        createdAt: true,
      },
    });

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Fetch statistics error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { label, value, unit, category } = await request.json();

    const stat = await prisma.statistic.create({
      data: {
        label,
        value,
        unit,
        category,
        createdById: user.userId,
      },
      select: {
        id: true,
        label: true,
        value: true,
        unit: true,
        category: true,
        createdAt: true,
      },
    });

    return NextResponse.json(stat);
  } catch (error) {
    console.error('Create statistic error:', error);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
