import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Create homepage content
    let homepage = await prisma.content.findFirst({
      where: { type: 'homepage' },
    });

    if (!homepage) {
      homepage = await prisma.content.create({
        data: {
          type: 'homepage',
          title: 'JHCO - Royal Authority',
          description: 'Transforming lives through compassion and service',
          data: {
            heroTitle: 'Welcome to JHCO',
            heroSubtitle: 'Royal Authority in Service - Dedicated to Excellence',
            heroImage: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=1600&h=900&fit=crop',
            mission: 'To provide comprehensive support, development, and opportunities to communities in need through innovative programs and compassionate service.',
            vision: 'A world where every individual has access to quality healthcare, education, and economic opportunities, empowered to reach their full potential.',
          },
        },
      });
    }

    // Create sample statistics
    const existingStats = await prisma.statistic.count();

    if (existingStats === 0) {
      await prisma.statistic.createMany({
        data: [
          {
            label: 'People Helped',
            value: '500,000+',
            unit: 'individuals',
            category: 'impact',
            createdById: user.userId,
          },
          {
            label: 'Schools Supported',
            value: '250',
            unit: 'schools',
            category: 'programs',
            createdById: user.userId,
          },
          {
            label: 'Healthcare Centers',
            value: '120',
            unit: 'centers',
            category: 'reach',
            createdById: user.userId,
          },
          {
            label: 'Active Donors',
            value: '15,000+',
            unit: 'supporters',
            category: 'donors',
            createdById: user.userId,
          },
        ],
      });
    }

    // Create sample story
    const existingStories = await prisma.story.count();

    if (existingStories === 0) {
      await prisma.story.create({
        data: {
          title: 'Hope Through Education',
          content: 'Fatima was just a young girl when she came to our education program. Today, she is excelling in school and dreams of becoming a doctor. With your support, we continue to transform lives through quality education.',
          heroImage: 'https://images.unsplash.com/photo-1427504494785-cdec0f72edd3?w=800&h=600&fit=crop',
          program: 'education',
          featured: true,
          createdById: user.userId,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Sample data created successfully',
      data: {
        homepage: !!homepage,
        statistics: existingStats === 0 ? 4 : existingStats,
        stories: existingStories === 0 ? 1 : existingStories,
      },
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 });
  }
}
