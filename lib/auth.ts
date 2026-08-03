// Authentication utilities for JHCO Admin Panel

import { jwtVerify, SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

// Legacy password auth (for backwards compatibility with password-protected site)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'secure@123';
const SESSION_COOKIE_NAME = 'jhco_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// JWT Authentication for Admin Panel
export async function verifyAuth(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  try {
    const token = authHeader.substring(7);
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload as any;
  } catch (error) {
    return null;
  }
}

export async function createJWT(userId: string, email: string, role: string) {
  return await new SignJWT({
    userId,
    email,
    role,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

export function generatePassword(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Legacy password validation (site-wide protection)
export async function validatePassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}

export function createSession(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function getSessionFromCookies(cookies: string): string | null {
  const cookieArray = cookies.split(';');
  for (const cookie of cookieArray) {
    const [name, value] = cookie.trim().split('=');
    if (name === SESSION_COOKIE_NAME && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export function createSessionCookie(session: string): string {
  const expiry = new Date(Date.now() + SESSION_DURATION).toUTCString();
  return `${SESSION_COOKIE_NAME}=${encodeURIComponent(session)}; Path=/; Expires=${expiry}; HttpOnly; SameSite=Strict`;
}
