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

    const stories = await prisma.story.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        content: true,
        heroImage: true,
        program: true,
        featured: true,
        createdAt: true,
      },
    });

    return NextResponse.json(stories);
  } catch (error) {
    console.error('Fetch stories error:', error);
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

    const { title, content, heroImage, program, featured } = await request.json();

    const story = await prisma.story.create({
      data: {
        title,
        content,
        heroImage,
        program,
        featured,
        createdById: user.userId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        heroImage: true,
        program: true,
        featured: true,
        createdAt: true,
      },
    });

    return NextResponse.json(story);
  } catch (error) {
    console.error('Create story error:', error);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
