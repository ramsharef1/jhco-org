import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { email: 'admin@convertec.cloud' },
      select: {
        email: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    return NextResponse.json({
      email: user.email,
      role: user.role,
      passwordHash: user.password,
      passwordHashLength: user.password.length,
      startsWithBcrypt: user.password.startsWith('$2'),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
