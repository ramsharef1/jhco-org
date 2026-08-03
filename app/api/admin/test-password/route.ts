import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email: 'admin@convertec.cloud' },
      select: { password: true, email: true }
    });

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    console.log('Stored hash:', user.password.substring(0, 50));
    console.log('Password length:', password.length);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log('Password match result:', isMatch);

    return NextResponse.json({
      success: isMatch,
      email: user.email,
      matches: isMatch,
      hashLength: user.password.length,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
