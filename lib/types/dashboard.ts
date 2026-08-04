/**
 * Type definitions for JHCO Phase 1 Impact Dashboard
 * Aligns with Prisma schema models
 */

// Verification status enum
export enum VerificationStatus {
  UNVERIFIED = 'UNVERIFIED',
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
}

// Badge types for certifications
export enum BadgeType {
  AUDIT = 'AUDIT',
  ISO = 'ISO',
  ACCREDITATION = 'ACCREDITATION',
  AWARD = 'AWARD',
}

// Export formats
export enum ExportFormat {
  PDF = 'PDF',
  EXCEL = 'EXCEL',
  CSV = 'CSV',
}

// Analytics event types
export enum EventType {
  VIEW = 'VIEW',
  EXPORT = 'EXPORT',
  FILTER = 'FILTER',
  SHARE = 'SHARE',
  SIGNUP = 'SIGNUP',
}

// Impact Metric
export interface ImpactMetric {
  id: string;
  label_en: string;
  label_ar?: string;
  value: number;
  unit_en?: string;
  unit_ar?: string;
  category: string;
  verification_status: VerificationStatus;
  verified_by?: string;
  verified_at?: Date;
  icon?: string;
  trend?: number; // Percentage change
  color?: string; // Hex color
  data_source?: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Financial Record
export interface FinancialRecord {
  id: string;
  category: string;
  category_ar?: string;
  amount: number;
  currency: string; // ISO 4217 code (e.g., 'JOD')
  fiscal_year: number;
  description?: string;
  description_ar?: string;
  verification_status: VerificationStatus;
  verified_by?: string;
  verified_at?: Date;
  data_source?: string;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Certification/Badge
export interface Certification {
  id: string;
  name_en: string;
  name_ar?: string;
  issuer: string;
  issue_date: Date;
  expiry_date?: Date;
  badge_type: BadgeType;
  icon_url?: string;
  description_en?: string;
  description_ar?: string;
  verification_document_id?: string;
  display_order: number;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Dashboard Export
export interface DashboardExport {
  id: string;
  export_format: ExportFormat;
  title?: string;
  file_url: string;
  file_size?: bigint;
  export_params?: Record<string, any>;
  createdAt: Date;
  createdById: string;
  expires_at?: Date;
}

// Dashboard Event (Analytics)
export interface DashboardEvent {
  id: string;
  event_type: EventType;
  event_name: string;
  user_id?: string;
  metadata?: Record<string, any>;
  session_id?: string;
  createdAt: Date;
}

// Extended Testimonial for Dashboard
export interface DashboardTestimonial {
  id: string;
  testimonial_id: string;
  program?: string;
  image_id?: string;
  featured: boolean;
  verified: boolean;
  verification_date?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface DashboardMetricsResponse {
  metrics: ImpactMetric[];
  total_count: number;
  filters?: Record<string, any>;
}

export interface DashboardFinancialResponse {
  records: FinancialRecord[];
  total_amount: number;
  currency: string;
  filters?: Record<string, any>;
}

export interface DashboardExportResponse {
  success: boolean;
  file_url: string;
  file_name: string;
  export_format: ExportFormat;
  timestamp: string;
}

export interface DashboardEventsResponse {
  totalViews: number;
  totalExports: number;
  totalSignups: number;
  topEvents: Array<{
    name: string;
    count: number;
  }>;
  periodDays: number;
}

// Filter types
export interface DashboardFilters {
  program?: string;
  region?: string;
  startDate?: string;
  endDate?: string;
  verification_status?: VerificationStatus;
  category?: string;
  fiscal_year?: number;
  badge_type?: BadgeType;
}

// Form submission types
export interface VolunteerSignupForm {
  name: string;
  email: string;
  program: string;
  message?: string;
}

export interface DashboardEventPayload {
  event_type: EventType;
  event_name: string;
  user_id?: string;
  metadata?: Record<string, any>;
  session_id?: string;
}

// ============================================================================
// PHASE 2 (WAVE 2) - Advanced Dashboard Feature Types
// ============================================================================

// Cost Impact Metric
export interface CostImpactMetric {
  id: string;
  program_id?: string;
  program_name: string;
  metric_name_en: string;
  metric_name_ar?: string;
  cost_amount: number;
  outcome_count: number;
  cost_per_outcome: number;
  currency: string;
  fiscal_year: number;
  data_source?: string;
  verification_status: VerificationStatus;
  verified_at?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Rich Media Content
export interface RichMediaContent {
  id: string;
  title_en: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  media_type: 'video' | 'image' | 'gallery' | 'carousel';
  url: string;
  thumbnail_url?: string;
  program?: string;
  category?: 'behind-scenes' | 'impact-story' | 'volunteer-spotlight' | 'event';
  duration_seconds?: number;
  featured: boolean;
  published: boolean;
  view_count: number;
  caption_en?: string;
  caption_ar?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Comparison View
export interface ComparisonView {
  id: string;
  title_en: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  comparison_type: 'programs' | 'metrics' | 'years' | 'regions';
  left_item_id: string;
  right_item_id: string;
  left_item_data: Record<string, any>;
  right_item_data: Record<string, any>;
  metrics: string[];
  created_at: Date;
  updated_at: Date;
  created_by: string;
}

// Anomaly Alert
export enum AnomalyType {
  SPIKE = 'spike',
  DROP = 'drop',
  OUTLIER = 'outlier',
  TREND_BREAK = 'trend_break',
}

export enum AnomalySeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface AnomalyAlert {
  id: string;
  title_en: string;
  title_ar?: string;
  description_en: string;
  description_ar?: string;
  anomaly_type: AnomalyType;
  metric_id: string;
  metric_name: string;
  baseline_value: number;
  actual_value: number;
  deviation_percent: number;
  severity: AnomalySeverity;
  status: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED';
  detected_at: Date;
  acknowledged_at?: Date;
  acknowledged_by?: string;
  resolved_at?: Date;
  resolved_by?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter Subscriber
export interface NewsletterSubscriber {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  status: 'ACTIVE' | 'UNSUBSCRIBED' | 'BOUNCED';
  subscribed_at: Date;
  unsubscribed_at?: Date;
  last_email_sent_at?: Date;
  segments: string[];
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

// Leaderboard Entry
export interface LeaderboardEntry {
  id: string;
  leaderboard_type: 'donors' | 'volunteers' | 'fundraisers';
  user_id?: string;
  user_name: string;
  user_email?: string;
  user_avatar_url?: string;
  rank: number;
  primary_metric: number;
  secondary_metric?: number;
  points: number;
  badges: string[];
  streaks: number;
  verified: boolean;
  period: 'CURRENT' | 'MONTHLY' | 'YEARLY' | 'ALL_TIME';
  program?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

// Challenge Goal
export interface ChallengeGoal {
  id: string;
  title_en: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  challenge_type: 'fundraise' | 'volunteer_hours' | 'awareness';
  target_value: number;
  current_value: number;
  currency: string;
  unit_en: string;
  unit_ar?: string;
  start_date: Date;
  end_date: Date;
  status: 'ACTIVE' | 'COMPLETED' | 'EXPIRED';
  program_id?: string;
  program_name?: string;
  featured: boolean;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}

// Embed Widget
export interface EmbedWidget {
  id: string;
  title_en: string;
  title_ar?: string;
  widget_type: 'metrics' | 'stories' | 'leaderboard' | 'challenge' | 'live_counter';
  config: Record<string, any>;
  embed_code: string;
  access_token: string;
  allowed_origins: string[];
  view_count: number;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
  created_by: string;
}

// AI Generation
export enum AIContentType {
  SUMMARY = 'summary',
  RECOMMENDATION = 'recommendation',
  INSIGHT = 'insight',
  ANOMALY_DESCRIPTION = 'anomaly_description',
}

export interface AIGeneration {
  id: string;
  content_type: AIContentType;
  prompt_en: string;
  prompt_ar?: string;
  output_en: string;
  output_ar?: string;
  context_data?: Record<string, any>;
  model_name: string;
  temperature?: number;
  usage_tokens?: number;
  status: 'ACTIVE' | 'ARCHIVED' | 'REJECTED';
  feedback_score?: number;
  created_at: Date;
  updated_at: Date;
  created_by?: string;
}

// Email Notification
export interface EmailNotification {
  id: string;
  recipient_email: string;
  notification_type: 'volunteer_confirmation' | 'donor_alert' | 'newsletter' | 'anomaly' | 'challenge_update';
  subject_en: string;
  subject_ar?: string;
  body_en: string;
  body_ar?: string;
  status: 'PENDING' | 'SENT' | 'DELIVERED' | 'FAILED' | 'BOUNCED';
  sent_at?: Date;
  delivered_at?: Date;
  read_at?: Date;
  failed_reason?: string;
  metadata?: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}

// API Response types for Wave 2
export interface CostImpactResponse {
  metrics: CostImpactMetric[];
  total_count: number;
  filters?: Record<string, any>;
}

export interface RichMediaResponse {
  items: RichMediaContent[];
  total_count: number;
  filters?: Record<string, any>;
}

export interface AnomalyAlertsResponse {
  alerts: AnomalyAlert[];
  total_count: number;
  critical_count: number;
  high_count: number;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  total_count: number;
  leaderboard_type: string;
  period: string;
}

export interface AIInsightResponse {
  content_en: string;
  content_ar?: string;
  type: AIContentType;
  confidence?: number;
}

export interface RecommendationResponse {
  recommendations: Array<{
    id: string;
    title_en: string;
    title_ar?: string;
    description_en: string;
    description_ar?: string;
    action_url?: string;
    relevance_score: number;
  }>;
}

// Filter types for Wave 2
export interface Wave2Filters extends DashboardFilters {
  media_type?: 'video' | 'image' | 'gallery' | 'carousel';
  media_category?: string;
  leaderboard_type?: 'donors' | 'volunteers' | 'fundraisers';
  challenge_type?: 'fundraise' | 'volunteer_hours' | 'awareness';
  anomaly_severity?: AnomalySeverity;
}
