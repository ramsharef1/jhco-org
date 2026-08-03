// Authentication utilities for JHCO website protection

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'secure@123';
const SESSION_COOKIE_NAME = 'jhco_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function validatePassword(password: string): Promise<boolean> {
  // Simple password validation
  // In production, use proper password hashing (bcrypt)
  return password === ADMIN_PASSWORD;
}

export function createSession(): string {
  // Generate a simple session token
  // In production, use cryptographically secure random generation
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
