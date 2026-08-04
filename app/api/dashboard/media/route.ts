import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get('program');
    const type = searchParams.get('type');

    const where: any = {};
    if (program) where.program = program;
    if (type) where.type = type;

    const media = await prisma.richMediaContent.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json(media);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const media = await prisma.richMediaContent.create({
      data: {
        type: data.type,
        title_en: data.title_en,
        title_ar: data.title_ar,
        url: data.url,
        program: data.program,
        featured: data.featured || false,
        createdById: 'system',
      },
    });
    return NextResponse.json(media, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create media' }, { status: 500 });
  }
}
