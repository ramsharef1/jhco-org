import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    return NextResponse.json({
      userFound: true,
      email: user.email,
      storedPassword: user.password.substring(0, 20) + '...',
      passwordProvidedLength: password.length,
      passwordMatch,
      error: passwordMatch ? null : 'Password does not match',
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack,
    });
  }
}
