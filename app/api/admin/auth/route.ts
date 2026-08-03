import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import { createJWT } from '@/lib/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, action } = body;

    if (action === 'login') {
      // Find user
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      // Verify password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      // Create JWT token
      const token = await createJWT(user.id, user.email, user.role);

      return NextResponse.json({
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      });
    }

    if (action === 'register') {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: 'Admin User',
          role: 'ADMIN',
        },
      });

      // Create JWT token
      const token = await createJWT(newUser.id, newUser.email, newUser.role);

      return NextResponse.json({
        success: true,
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
