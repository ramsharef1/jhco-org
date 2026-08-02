import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow access to login page and password check endpoint
  if (pathname === '/login' || pathname === '/api/auth/login') {
    return NextResponse.next();
  }

  // Check if user has password cookie
  const passwordCookie = request.cookies.get('jhco_password');

  // If no cookie, redirect to login
  if (!passwordCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verify the cookie is valid
  const validPassword = Buffer.from('secure@123').toString('base64');
  if (passwordCookie.value !== validPassword) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files and API
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|login|api/auth).*)',
  ],
};
