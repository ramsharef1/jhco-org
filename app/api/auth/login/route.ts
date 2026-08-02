import { NextRequest, NextResponse } from 'next/server';

const CORRECT_PASSWORD = 'secure@123';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Verify password
    if (password === CORRECT_PASSWORD) {
      // Create response with cookie
      const response = NextResponse.json(
        { success: true, message: 'Password verified' },
        { status: 200 }
      );

      // Set secure cookie (base64 encoded password for verification)
      const encodedPassword = Buffer.from(CORRECT_PASSWORD).toString('base64');
      response.cookies.set('jhco_password', encodedPassword, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
