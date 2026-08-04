/**
 * Dashboard utility functions and helpers
 */

import {
  DashboardFilters,
  DashboardMetricsResponse,
  DashboardFinancialResponse,
  DashboardEventsResponse,
  DashboardExportResponse,
  EventType,
} from '@/lib/types/dashboard';

/**
 * Build query string from filters object
 */
export function buildFilterQueryString(filters: DashboardFilters): string {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, String(value));
    }
  });

  return params.toString();
}

/**
 * Fetch metrics from API
 */
export async function fetchDashboardMetrics(
  filters?: DashboardFilters
): Promise<DashboardMetricsResponse> {
  const queryString = filters ? buildFilterQueryString(filters) : '';
  const url = `/api/dashboard/metrics${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch metrics: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch financial data from API
 */
export async function fetchDashboardFinancial(
  filters?: DashboardFilters
): Promise<DashboardFinancialResponse> {
  const queryString = filters ? buildFilterQueryString(filters) : '';
  const url = `/api/dashboard/financial${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch financial data: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Track analytics event
 */
export async function trackDashboardEvent(
  event_type: EventType,
  event_name: string,
  metadata?: Record<string, any>
): Promise<void> {
  try {
    await fetch('/api/dashboard/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type,
        event_name,
        metadata,
        session_id: getSessionId(),
      }),
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

/**
 * Get or create session ID for analytics
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = sessionStorage.getItem('dashboard_session_id');

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('dashboard_session_id', sessionId);
  }

  return sessionId;
}

/**
 * Format currency value
 */
export function formatCurrency(
  amount: number,
  currency: string = 'JOD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format large numbers with K, M, B suffix
 */
export function formatLargeNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string, locale: string = 'en-US'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate percentage change
 */
export function calculatePercentageChange(previous: number, current: number): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / Math.abs(previous)) * 100;
}

/**
 * Check if certification is expired
 */
export function isCertificationExpired(expiry_date?: string | Date): boolean {
  if (!expiry_date) return false;
  const expiryDate = typeof expiry_date === 'string' ? new Date(expiry_date) : expiry_date;
  return expiryDate < new Date();
}

/**
 * Get verification status badge color
 */
export function getVerificationStatusColor(status: string): {
  bg: string;
  text: string;
  border: string;
} {
  switch (status) {
    case 'VERIFIED':
      return {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-800 dark:text-green-200',
        border: 'border-green-300 dark:border-green-700',
      };
    case 'PENDING':
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-800 dark:text-yellow-200',
        border: 'border-yellow-300 dark:border-yellow-700',
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-800 dark:text-gray-200',
        border: 'border-gray-300 dark:border-gray-700',
      };
  }
}

/**
 * Generate export filename with timestamp
 */
export function generateExportFilename(format: string, title?: string): string {
  const timestamp = new Date().toISOString().split('T')[0];
  const ext = format.toLowerCase() === 'excel' ? 'xlsx' : format.toLowerCase();
  const name = title ? title.replace(/\s+/g, '_') : 'dashboard_export';
  return `${name}_${timestamp}.${ext}`;
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
}

/**
 * Get plural form of word
 */
export function getPluralForm(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural;
}
