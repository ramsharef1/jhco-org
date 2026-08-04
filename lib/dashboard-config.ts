/**
 * JHCO Impact Dashboard Configuration
 * Centralized settings and constants for the dashboard
 */

// Dashboard sections configuration
export const DASHBOARD_SECTIONS = {
  metrics: {
    id: 'metrics',
    title: 'Key Impact Metrics',
    description: 'Track JHCO\'s progress across key performance indicators',
    icon: '📊',
  },
  financial: {
    id: 'financial',
    title: 'Financial Overview',
    description: 'Budget allocation and spending by program',
    icon: '💰',
  },
  geographic: {
    id: 'geographic',
    title: 'Geographic Coverage',
    description: 'Map of JHCO operations worldwide',
    icon: '🌍',
  },
  stories: {
    id: 'stories',
    title: 'Impact Stories',
    description: 'Real stories from beneficiaries and communities',
    icon: '📖',
  },
  certifications: {
    id: 'certifications',
    title: 'Trust & Transparency',
    description: 'Audit reports and certifications',
    icon: '✓',
  },
  testimonials: {
    id: 'testimonials',
    title: 'Testimonials',
    description: 'Feedback from donors and beneficiaries',
    icon: '💬',
  },
  volunteer: {
    id: 'volunteer',
    title: 'Get Involved',
    description: 'Join JHCO\'s volunteer community',
    icon: '🤝',
  },
};

// Program categories
export const PROGRAMS = [
  { id: 'healthcare', label: 'Healthcare', label_ar: 'الصحة' },
  { id: 'education', label: 'Education', label_ar: 'التعليم' },
  { id: 'food-aid', label: 'Food Aid', label_ar: 'المساعدات الغذائية' },
  { id: 'livelihoods', label: 'Livelihoods', label_ar: 'سبل العيش' },
  { id: 'emergency', label: 'Emergency Relief', label_ar: 'الإغاثة الطوارئ' },
];

// Geographic regions
export const REGIONS = [
  { id: 'mena', label: 'Middle East & North Africa', label_ar: 'الشرق الأوسط وشمال أفريقيا' },
  { id: 'asia', label: 'Asia', label_ar: 'آسيا' },
  { id: 'africa', label: 'Africa', label_ar: 'أفريقيا' },
  { id: 'europe', label: 'Europe', label_ar: 'أوروبا' },
];

// Verification statuses
export const VERIFICATION_STATUSES = [
  { id: 'VERIFIED', label: 'Verified', label_ar: 'موثق', color: 'green' },
  { id: 'PENDING', label: 'Pending Review', label_ar: 'قيد المراجعة', color: 'yellow' },
  { id: 'UNVERIFIED', label: 'Unverified', label_ar: 'غير موثق', color: 'gray' },
];

// Badge types
export const BADGE_TYPES = [
  { id: 'AUDIT', label: 'Audit Report', label_ar: 'تقرير التدقيق' },
  { id: 'ISO', label: 'ISO Certification', label_ar: 'شهادة ISO' },
  { id: 'ACCREDITATION', label: 'Accreditation', label_ar: 'الاعتماد' },
  { id: 'AWARD', label: 'Award', label_ar: 'جائزة' },
];

// Export formats
export const EXPORT_FORMATS = [
  { id: 'PDF', label: 'PDF Document', icon: '📄' },
  { id: 'EXCEL', label: 'Excel Spreadsheet', icon: '📊' },
  { id: 'CSV', label: 'CSV File', icon: '📋' },
];

// Chart colors (JHCO royal palette)
export const CHART_COLORS = {
  primary: '#b45309', // Amber-700
  secondary: '#d97706', // Amber-600
  tertiary: '#f59e0b', // Amber-500
  accent: '#fbbf24', // Amber-400
  light: '#fcd34d', // Amber-300
};

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

// Dashboard grid settings
export const GRID_SETTINGS = {
  metricsColumns: {
    mobile: 1,
    tablet: 2,
    desktop: 5,
  },
  storiesColumns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
};

// Default filter settings
export const DEFAULT_FILTERS = {
  program: '',
  region: '',
  startDate: '',
  endDate: '',
  verification_status: '',
};

// Analytics tracking configuration
export const ANALYTICS_CONFIG = {
  enableTracking: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false',
  batchSize: 10,
  flushInterval: 5000, // 5 seconds
};

// Feature flags
export const FEATURE_FLAGS = {
  enableDashboard: process.env.NEXT_PUBLIC_ENABLE_DASHBOARD !== 'false',
  enableExports: process.env.NEXT_PUBLIC_ENABLE_EXPORTS !== 'false',
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false',
  enableVolunteerSignup: process.env.NEXT_PUBLIC_ENABLE_VOLUNTEER_SIGNUP !== 'false',
  // Wave 2 Features
  enableRichMedia: process.env.NEXT_PUBLIC_ENABLE_RICH_MEDIA !== 'false',
  enableAIInsights: process.env.NEXT_PUBLIC_ENABLE_AI_INSIGHTS !== 'false',
  enableAnomalyDetection: process.env.NEXT_PUBLIC_ENABLE_ANOMALY_DETECTION !== 'false',
  enableLeaderboards: process.env.NEXT_PUBLIC_ENABLE_LEADERBOARDS !== 'false',
  enableChallenges: process.env.NEXT_PUBLIC_ENABLE_CHALLENGES !== 'false',
  enableNewsletter: process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER !== 'false',
  enableCostImpact: process.env.NEXT_PUBLIC_ENABLE_COST_IMPACT !== 'false',
  enableEmbedWidgets: process.env.NEXT_PUBLIC_ENABLE_EMBED_WIDGETS !== 'false',
};

// Performance settings
export const PERFORMANCE_CONFIG = {
  debounceMs: 300, // Debounce filter changes
  cacheTimeMs: 300000, // 5 minutes
  maxRetries: 3,
};

// Internationalization settings
export const I18N_CONFIG = {
  defaultLanguage: 'en',
  languages: {
    en: { name: 'English', direction: 'ltr' },
    ar: { name: 'العربية', direction: 'rtl' },
  },
};

// Accessibility settings
export const ACCESSIBILITY_CONFIG = {
  enableKeyboardNavigation: true,
  enableScreenReaderOptimization: true,
  focusOutlineColor: '#b45309',
};

// API endpoints
export const API_ENDPOINTS = {
  metrics: '/api/dashboard/metrics',
  financial: '/api/dashboard/financial',
  stories: '/api/dashboard/stories',
  certifications: '/api/dashboard/certifications',
  exports: '/api/dashboard/export',
  events: '/api/dashboard/analytics/events',
  signups: '/api/dashboard/signups',
  // Wave 2 endpoints
  media: '/api/dashboard/media',
  costImpact: '/api/dashboard/cost-impact',
  analyze: '/api/dashboard/analyze',
  summaries: '/api/dashboard/summaries',
  recommendations: '/api/dashboard/recommendations',
  leaderboard: '/api/dashboard/leaderboard',
  newsletter: '/api/dashboard/newsletter/subscribe',
};

// Metric categories
export const METRIC_CATEGORIES = [
  { id: 'families_served', label: 'Families Served', icon: '👨‍👩‍👧‍👦' },
  { id: 'countries', label: 'Countries Reached', icon: '🌍' },
  { id: 'volunteers', label: 'Active Volunteers', icon: '🤝' },
  { id: 'programs', label: 'Programs Running', icon: '📋' },
  { id: 'total_impact', label: 'Total Impact', icon: '⭐' },
];

// Toast notification durations (ms)
export const TOAST_DURATIONS = {
  short: 2000,
  medium: 5000,
  long: 8000,
};

// Wave 2 Cost Impact Categories
export const COST_IMPACT_CATEGORIES = [
  { id: 'healthcare', label: 'Healthcare', label_ar: 'الرعاية الصحية' },
  { id: 'education', label: 'Education', label_ar: 'التعليم' },
  { id: 'food-aid', label: 'Food Aid', label_ar: 'المساعدات الغذائية' },
  { id: 'livelihoods', label: 'Livelihoods', label_ar: 'سبل العيش' },
  { id: 'emergency', label: 'Emergency Relief', label_ar: 'الإغاثة الطوارئ' },
];

// Wave 2 Challenge Types
export const CHALLENGE_TYPES = [
  { id: 'fundraise', label: 'Fundraising Campaign', label_ar: 'حملة جمع التبرعات' },
  { id: 'volunteer_hours', label: 'Volunteer Hours', label_ar: 'ساعات التطوع' },
  { id: 'awareness', label: 'Awareness Campaign', label_ar: 'حملة التوعية' },
];

// Wave 2 Media Categories
export const MEDIA_CATEGORIES = [
  { id: 'behind-scenes', label: 'Behind the Scenes', label_ar: 'وراء الكواليس' },
  { id: 'impact-story', label: 'Impact Story', label_ar: 'قصة التأثير' },
  { id: 'volunteer-spotlight', label: 'Volunteer Spotlight', label_ar: 'عرض المتطوع' },
  { id: 'event', label: 'Event Coverage', label_ar: 'تغطية الحدث' },
];

// Media Types
export const MEDIA_TYPES = [
  { id: 'video', label: 'Video', icon: '🎥' },
  { id: 'image', label: 'Image', icon: '🖼️' },
  { id: 'gallery', label: 'Gallery', icon: '🎨' },
  { id: 'carousel', label: 'Carousel', icon: '📸' },
];

// Anomaly Severities
export const ANOMALY_SEVERITIES = [
  { id: 'LOW', label: 'Low', color: '#3b82f6' }, // blue
  { id: 'MEDIUM', label: 'Medium', color: '#f59e0b' }, // amber
  { id: 'HIGH', label: 'High', color: '#ef4444' }, // red
  { id: 'CRITICAL', label: 'Critical', color: '#7f1d1d' }, // dark red
];

// Leaderboard Periods
export const LEADERBOARD_PERIODS = [
  { id: 'CURRENT', label: 'Current Month', label_ar: 'الشهر الحالي' },
  { id: 'MONTHLY', label: 'Last 30 Days', label_ar: 'آخر 30 يوم' },
  { id: 'YEARLY', label: 'This Year', label_ar: 'هذا العام' },
  { id: 'ALL_TIME', label: 'All Time', label_ar: 'طوال الوقت' },
];

// Leaderboard Types
export const LEADERBOARD_TYPES = [
  { id: 'donors', label: 'Top Donors', label_ar: 'أفضل المتبرعين', icon: '🎖️' },
  { id: 'volunteers', label: 'Top Volunteers', label_ar: 'أفضل المتطوعين', icon: '⭐' },
  { id: 'fundraisers', label: 'Top Fundraisers', label_ar: 'أفضل مجمعي الأموال', icon: '🏆' },
];

// Badge definitions for gamification
export const BADGE_DEFINITIONS = {
  donor: [
    { id: 'first_donation', label: 'First Step', description: 'Made your first donation' },
    { id: 'five_donations', label: 'Regular Giver', description: 'Made 5 donations' },
    { id: 'fifty_donations', label: 'Legendary Donor', description: 'Made 50 donations' },
    { id: 'milestone_1000', label: 'Impact Maker', description: 'Donated 1000 JOD' },
  ],
  volunteer: [
    { id: 'first_volunteer', label: 'Welcome Aboard', description: 'Completed first volunteering' },
    { id: 'ten_hours', label: 'Helper', description: 'Volunteered 10 hours' },
    { id: 'hundred_hours', label: 'Community Champion', description: 'Volunteered 100 hours' },
    { id: 'mentor', label: 'Mentor', description: 'Mentored other volunteers' },
  ],
};

// AI Model settings for Claude integration
export const AI_CONFIG = {
  model: process.env.CLAUDE_MODEL || 'claude-3-5-sonnet-20241022',
  maxTokens: 1024,
  temperature: 0.7,
  rateLimitPerMinute: 60,
};

// SendGrid email configuration
export const EMAIL_CONFIG = {
  apiKey: process.env.SENDGRID_API_KEY,
  fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@jhco.org',
  fromName: 'JHCO Impact Dashboard',
  templates: {
    volunteerConfirmation: 'volunteer_confirmation_v1',
    donorAlert: 'donor_alert_v1',
    newsletter: 'newsletter_v1',
    anomalyAlert: 'anomaly_alert_v1',
    challengeUpdate: 'challenge_update_v1',
  },
};

// Widget embed configuration
export const EMBED_CONFIG = {
  defaultOrigins: ['localhost:3000', 'localhost:3001'],
  maxAllowedOrigins: 10,
  tokenExpiryDays: 365,
};

/**
 * Get a config value with optional fallback
 */
export function getConfig<T>(key: string, fallback?: T): T {
  const parts = key.split('.');
  let current: any = {
    DASHBOARD_SECTIONS,
    PROGRAMS,
    REGIONS,
    CHART_COLORS,
    API_ENDPOINTS,
    COST_IMPACT_CATEGORIES,
    CHALLENGE_TYPES,
    MEDIA_CATEGORIES,
    LEADERBOARD_TYPES,
    BADGE_DEFINITIONS,
  };

  for (const part of parts) {
    current = current[part];
    if (current === undefined) return fallback as T;
  }

  return current as T;
}
