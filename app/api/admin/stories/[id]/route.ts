import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, content, heroImage, program, featured } = await request.json();

    const story = await prisma.story.update({
      where: { id: params.id },
      data: {
        title,
        content,
        heroImage,
        program,
        featured,
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
    console.error('Update story error:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.story.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete story error:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
