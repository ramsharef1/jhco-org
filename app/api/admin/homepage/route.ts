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

    let content = await prisma.content.findFirst({
      where: { type: 'homepage' },
    });

    if (!content) {
      content = await prisma.content.create({
        data: {
          type: 'homepage',
          title: 'JHCO - Royal Authority',
          description: 'Transforming lives through compassion and service',
          data: {
            heroTitle: 'Welcome to JHCO',
            heroSubtitle: 'Royal Authority in Service',
            heroImage: '',
            mission: 'To provide comprehensive support and services to communities in need',
            vision: 'A world where compassion and dignity are universal',
          },
        },
      });
    }

    return NextResponse.json({
      id: content.id,
      heroTitle: content.data.heroTitle || '',
      heroSubtitle: content.data.heroSubtitle || '',
      heroImage: content.data.heroImage || '',
      mission: content.data.mission || '',
      vision: content.data.vision || '',
      updatedAt: content.updatedAt,
    });
  } catch (error) {
    console.error('Homepage fetch error:', error);
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

    const body = await request.json();

    let content = await prisma.content.findFirst({
      where: { type: 'homepage' },
    });

    if (!content) {
      content = await prisma.content.create({
        data: {
          type: 'homepage',
          title: 'JHCO - Royal Authority',
          description: 'Transforming lives through compassion and service',
          data: body,
        },
      });
    } else {
      content = await prisma.content.update({
        where: { id: content.id },
        data: { data: body },
      });
    }

    return NextResponse.json({
      id: content.id,
      heroTitle: content.data.heroTitle || '',
      heroSubtitle: content.data.heroSubtitle || '',
      heroImage: content.data.heroImage || '',
      mission: content.data.mission || '',
      vision: content.data.vision || '',
      updatedAt: content.updatedAt,
    });
  } catch (error) {
    console.error('Homepage save error:', error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
