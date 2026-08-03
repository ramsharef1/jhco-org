import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const diagnostics: any = {
    env: {
      hasDatabase: !!process.env.DATABASE_URL,
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasApiUrl: !!process.env.NEXT_PUBLIC_API_URL,
    },
    database: {
      connected: false,
      users: 0,
      error: null,
    },
  };

  // Test database connection
  try {
    const userCount = await prisma.user.count();
    const adminUser = await prisma.user.findUnique({
      where: { email: 'admin@convertec.cloud' },
    });

    diagnostics.database.connected = true;
    diagnostics.database.users = userCount;
    diagnostics.database.admin = {
      exists: !!adminUser,
      email: adminUser?.email,
      role: adminUser?.role,
      hasPassword: !!adminUser?.password,
    };
  } catch (error: any) {
    diagnostics.database.error = error.message;
  }

  return NextResponse.json(diagnostics);
}
