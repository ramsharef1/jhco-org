import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { generateSummary } from '@/lib/ai/claude';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get('program') || 'healthcare';

    // Mock metrics for demo
    const metrics = {
      families_served: 15430,
      volunteers: 847,
      programs: 12,
      countries: 8,
    };

    const summary = await generateSummary(metrics, program);

    const saved = await prisma.aIGeneration.create({
      data: {
        type: 'summary',
        prompt: `Summarize ${program} impact`,
        output: summary,
      },
    });

    return NextResponse.json({ program, summary, id: saved.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
  }
}
