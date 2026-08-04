import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'donor'; // 'donor' or 'volunteer'

    const leaderboard = await prisma.leaderboardEntry.findMany({
      where: { type },
      orderBy: { points: 'desc' },
      take: 20,
    });

    return NextResponse.json(
      leaderboard.map((entry, idx) => ({
        ...entry,
        rank: idx + 1,
      }))
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const entry = await prisma.leaderboardEntry.upsert({
      where: { user_email_type: { user_email: data.email, type: data.type } },
      update: { points: { increment: data.points } },
      create: {
        user_name: data.name,
        user_email: data.email,
        type: data.type,
        points: data.points,
      },
    });
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update leaderboard' }, { status: 500 });
  }
}
