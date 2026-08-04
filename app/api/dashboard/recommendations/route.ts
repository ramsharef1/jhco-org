import { NextRequest, NextResponse } from 'next/server';
import { generateRecommendations } from '@/lib/ai/claude';

export async function POST(request: NextRequest) {
  try {
    const { userType, interests } = await request.json();

    const recommendations = await generateRecommendations(
      userType || 'donor',
      interests || ['healthcare', 'education']
    );

    return NextResponse.json({
      recommendations,
      count: recommendations.length,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate recommendations' }, { status: 500 });
  }
}
