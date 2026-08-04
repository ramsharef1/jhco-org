import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendNewsletter } from '@/lib/email/sendgrid';

export async function GET(request: NextRequest) {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      where: { subscribed: true, verified: true },
      select: { email: true, preferences: true },
    });
    return NextResponse.json({
      total: subscribers.length,
      subscribers: subscribers.slice(0, 5), // Return first 5 as sample
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Subscribe
    if (data.action === 'subscribe') {
      const subscriber = await prisma.newsletterSubscriber.upsert({
        where: { email: data.email },
        update: { subscribed: true },
        create: {
          email: data.email,
          name: data.name,
          verified: false,
        },
      });
      return NextResponse.json(subscriber, { status: 201 });
    }

    // Send newsletter
    if (data.action === 'send') {
      const subscribers = await prisma.newsletterSubscriber.findMany({
        where: { subscribed: true, verified: true },
        select: { email: true },
      });

      const sent = await sendNewsletter(
        subscribers.map((s) => s.email),
        data.subject || 'JHCO Monthly Impact Report',
        data.html || '<p>Monthly impact update coming soon</p>'
      );

      return NextResponse.json({ sent, total: subscribers.length });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Newsletter operation failed' }, { status: 500 });
  }
}
