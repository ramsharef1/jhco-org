'use client';

import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, transitions } from '@/lib/royalDesign';
import Link from 'next/link';

interface VolunteerEvent {
  id: string;
  date: string;
  title: string;
  location: string;
  hours: number;
  category: string;
  status: 'completed' | 'upcoming';
  impact?: string;
}

interface VolunteerProfile {
  name: string;
  email: string;
  phone: string;
  totalHours: number;
  eventCount: number;
  joinDate: string;
  skills: string[];
  preferredCategory: string;
  impactScore: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  dateEarned?: string;
}

const contentEN = {
  title: 'Volunteer Portal Dashboard',
  subtitle: 'Welcome to your volunteering hub',
  tabs: {
    dashboard: 'Dashboard',
    history: 'Activity History',
    achievements: 'Achievements',
    settings: 'Profile',
  },
  dashboard: {
    greeting: 'Welcome back, Volunteer!',
    stats: {
      totalHours: 'Total Hours Served',
      eventCount: 'Events Participated',
      joinDate: 'Member Since',
      impactScore: 'Impact Score',
    },
    recentActivity: 'Recent Activity',
    noActivity: 'No recent activities',
    nextEvent: 'Upcoming Opportunities',
    browseOpportunities: 'Browse Opportunities',
    impactTitle: 'Your Impact',
    impactDesc: 'Your dedication is making a real difference in our community',
  },
  history: {
    title: 'Volunteer Activity History',
    noData: 'No volunteer activities yet',
    date: 'Date',
    event: 'Event',
    location: 'Location',
    hours: 'Hours',
    category: 'Category',
    status: 'Status',
    completed: 'Completed',
    upcoming: 'Upcoming',
  },
  achievements: {
    title: 'Your Achievements',
    noData: 'Complete more volunteer activities to earn achievements',
    firstSteps: 'First Steps',
    firstStepsDesc: 'Complete your first volunteer event',
    centurion: 'Centurion',
    centurionDesc: 'Reach 100 volunteer hours',
    leader: 'Community Leader',
    leaderDesc: 'Participate in 10 volunteer events',
    mentor: 'Mentor',
    mentorDesc: 'Volunteer with us for over a year',
    earned: 'Earned',
    locked: 'Locked',
  },
  settings: {
    title: 'Profile Settings',
    personal: 'Personal Information',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    skills: 'Your Skills',
    skillsHelp: 'Tell us what skills you can contribute',
    preferences: 'Volunteer Preferences',
    preferred: 'Preferred Category',
    availability: 'Availability',
    availabilityHelp: 'When are you available to volunteer?',
    save: 'Save Changes',
    saved: 'Changes saved successfully',
  },
};

const contentAR = {
  title: 'لوحة تحكم بوابة المتطوعين',
  subtitle: 'أهلاً بك في مركز التطوع الخاص بك',
  tabs: {
    dashboard: 'لوحة التحكم',
    history: 'سجل النشاط',
    achievements: 'الإنجازات',
    settings: 'الملف الشخصي',
  },
  dashboard: {
    greeting: 'أهلاً بعودتك، المتطوع!',
    stats: {
      totalHours: 'إجمالي الساعات المخدومة',
      eventCount: 'الأحداث المشارك فيها',
      joinDate: 'عضو منذ',
      impactScore: 'درجة التأثير',
    },
    recentActivity: 'النشاط الأخير',
    noActivity: 'لا توجد أنشطة أخيرة',
    nextEvent: 'فرص قادمة',
    browseOpportunities: 'استكشاف الفرص',
    impactTitle: 'تأثيرك',
    impactDesc: 'إهدائك يحدث فرقاً حقيقياً في مجتمعنا',
  },
  history: {
    title: 'سجل أنشطة التطوع',
    noData: 'لا توجد أنشطة تطوع حتى الآن',
    date: 'التاريخ',
    event: 'الحدث',
    location: 'الموقع',
    hours: 'الساعات',
    category: 'الفئة',
    status: 'الحالة',
    completed: 'مكتمل',
    upcoming: 'قادم',
  },
  achievements: {
    title: 'إنجازاتك',
    noData: 'أكمل المزيد من أنشطة التطوع لكسب الإنجازات',
    firstSteps: 'الخطوات الأولى',
    firstStepsDesc: 'أكمل أول نشاط تطوع',
    centurion: 'رجل المئة',
    centurionDesc: 'اصل إلى 100 ساعة تطوع',
    leader: 'قائد المجتمع',
    leaderDesc: 'شارك في 10 أنشطة تطوع',
    mentor: 'مرشد',
    mentorDesc: 'تطوع معنا لأكثر من سنة',
    earned: 'مكتسب',
    locked: 'مغلق',
  },
  settings: {
    title: 'إعدادات الملف الشخصي',
    personal: 'المعلومات الشخصية',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    skills: 'مهاراتك',
    skillsHelp: 'أخبرنا بالمهارات التي يمكنك المساهمة بها',
    preferences: 'تفضيلات التطوع',
    preferred: 'الفئة المفضلة',
    availability: 'التوفر',
    availabilityHelp: 'متى تتوفر للتطوع؟',
    save: 'حفظ التغييرات',
    saved: 'تم حفظ التغييرات بنجاح',
  },
};

// Mock data for demonstration
const mockProfile: VolunteerProfile = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  phone: '+1 (555) 123-4567',
  totalHours: 156,
  eventCount: 24,
  joinDate: '2023-03-15',
  skills: ['Teaching', 'Event Planning', 'Mentoring', 'Community Outreach'],
  preferredCategory: 'Education',
  impactScore: 4.8,
};

const mockEvents: VolunteerEvent[] = [
  {
    id: '1',
    date: '2024-08-15',
    title: 'Community Clean-up Day',
    location: 'Central Park',
    hours: 4,
    category: 'Environment',
    status: 'completed',
    impact: 'Helped clean 2 km of community spaces',
  },
  {
    id: '2',
    date: '2024-08-20',
    title: 'Youth Mentoring Program',
    location: 'Downtown Community Center',
    hours: 3,
    category: 'Education',
    status: 'completed',
    impact: 'Mentored 5 young students',
  },
  {
    id: '3',
    date: '2024-09-01',
    title: 'Food Distribution Event',
    location: 'East Side Facility',
    hours: 5,
    category: 'Food Security',
    status: 'upcoming',
  },
];

const mockAchievements: Achievement[] = [
  {
    id: 'first-steps',
    title: contentEN.achievements.firstSteps,
    description: contentEN.achievements.firstStepsDesc,
    icon: '🌱',
    earned: true,
    dateEarned: '2023-04-10',
  },
  {
    id: 'centurion',
    title: contentEN.achievements.centurion,
    description: contentEN.achievements.centurionDesc,
    icon: '⭐',
    earned: true,
    dateEarned: '2024-06-30',
  },
  {
    id: 'leader',
    title: contentEN.achievements.leader,
    description: contentEN.achievements.leaderDesc,
    icon: '👑',
    earned: true,
    dateEarned: '2024-07-22',
  },
  {
    id: 'mentor',
    title: contentEN.achievements.mentor,
    description: contentEN.achievements.mentorDesc,
    icon: '🎓',
    earned: false,
  },
];

export default function VolunteerPortalDashboard({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = ar ? contentAR : contentEN;

  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState<VolunteerProfile>(mockProfile);
  const [events, setEvents] = useState<VolunteerEvent[]>(mockEvents);
  const [achievements, setAchievements] = useState<Achievement[]>(mockAchievements);
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(ar ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Handle profile update
  const handleProfileUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  // Calculate statistics
  const completedEvents = events.filter((e) => e.status === 'completed');
  const completedHours = completedEvents.reduce((sum, e) => sum + e.hours, 0);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: royalColors.ivoryBg }}>
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 100%)`,
          color: '#ffffff',
          padding: `${spacing.xxl} ${spacing.xl}`,
          marginBottom: spacing.xxxl,
          boxShadow: `0 4px 20px rgba(26, 188, 156, 0.15)`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: spacing.lg,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  fontFamily: '"Merriweather", Georgia, serif',
                }}
              >
                {content.title}
              </h1>
              <p style={{ fontSize: '16px', margin: '0', opacity: 0.9 }}>
                {content.subtitle}
              </p>
            </div>
            <div
              style={{
                fontSize: '80px',
                textAlign: 'center',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))',
              }}
            >
              🙌
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${spacing.xl}` }}>
        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: spacing.lg,
            marginBottom: spacing.xxxl,
            borderBottom: `3px solid ${royalColors.hashemiteGold}40`,
            overflowX: 'auto',
            paddingBottom: spacing.lg,
          }}
        >
          {Object.entries(content.tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: `${spacing.md} ${spacing.lg}`,
                border: 'none',
                backgroundColor: 'transparent',
                color:
                  activeTab === key
                    ? royalColors.compassionTeal
                    : royalColors.darkGrayText,
                fontSize: '15px',
                fontWeight: activeTab === key ? '700' : '600',
                cursor: 'pointer',
                transition: transitions.base,
                borderBottom:
                  activeTab === key
                    ? `3px solid ${royalColors.compassionTeal}`
                    : '3px solid transparent',
                marginBottom: `-${spacing.lg}`,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.color = royalColors.darkNavy;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.color = royalColors.darkGrayText;
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Welcome Section */}
            <div
              style={{
                background: `linear-gradient(135deg, ${royalColors.hashemiteGold}20 0%, ${royalColors.compassionTeal}20 100%)`,
                padding: spacing.xxl,
                borderRadius: '12px',
                marginBottom: spacing.xxxl,
                border: `2px solid ${royalColors.hashemiteGold}40`,
              }}
            >
              <h2
                style={{
                  fontSize: '28px',
                  color: royalColors.darkNavy,
                  margin: `0 0 ${spacing.lg} 0`,
                  fontFamily: '"Merriweather", Georgia, serif',
                }}
              >
                {content.dashboard.greeting}
              </h2>
              <p style={{ fontSize: '16px', color: royalColors.textSecondary, margin: '0' }}>
                {content.dashboard.impactDesc}
              </p>
            </div>

            {/* Statistics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: spacing.xl,
                marginBottom: spacing.xxxl,
              }}
            >
              {/* Total Hours Card */}
              <div
                style={{
                  background: '#ffffff',
                  padding: spacing.xxl,
                  borderRadius: '12px',
                  border: `2px solid ${royalColors.hashemiteGold}40`,
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(26, 188, 156, 0.2)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    marginBottom: spacing.md,
                    textAlign: 'center',
                  }}
                >
                  ⏱️
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: `0 0 ${spacing.sm} 0`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '600',
                  }}
                >
                  {content.dashboard.stats.totalHours}
                </p>
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: royalColors.compassionTeal,
                    margin: '0',
                  }}
                >
                  {completedHours}
                </p>
              </div>

              {/* Events Participated Card */}
              <div
                style={{
                  background: '#ffffff',
                  padding: spacing.xxl,
                  borderRadius: '12px',
                  border: `2px solid ${royalColors.hashemiteGold}40`,
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(232, 185, 35, 0.2)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    marginBottom: spacing.md,
                    textAlign: 'center',
                  }}
                >
                  📋
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: `0 0 ${spacing.sm} 0`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '600',
                  }}
                >
                  {content.dashboard.stats.eventCount}
                </p>
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: royalColors.hashemiteGold,
                    margin: '0',
                  }}
                >
                  {completedEvents.length}
                </p>
              </div>

              {/* Impact Score Card */}
              <div
                style={{
                  background: '#ffffff',
                  padding: spacing.xxl,
                  borderRadius: '12px',
                  border: `2px solid ${royalColors.hashemiteGold}40`,
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(231, 76, 60, 0.15)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    marginBottom: spacing.md,
                    textAlign: 'center',
                  }}
                >
                  ⭐
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: `0 0 ${spacing.sm} 0`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '600',
                  }}
                >
                  {content.dashboard.stats.impactScore}
                </p>
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: royalColors.charityRed,
                    margin: '0',
                  }}
                >
                  {profile.impactScore.toFixed(1)}
                </p>
              </div>

              {/* Member Since Card */}
              <div
                style={{
                  background: '#ffffff',
                  padding: spacing.xxl,
                  borderRadius: '12px',
                  border: `2px solid ${royalColors.hashemiteGold}40`,
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.1)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    marginBottom: spacing.md,
                    textAlign: 'center',
                  }}
                >
                  📅
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: `0 0 ${spacing.sm} 0`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '600',
                  }}
                >
                  {content.dashboard.stats.joinDate}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    margin: '0',
                  }}
                >
                  {formatDate(profile.joinDate)}
                </p>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div style={{ marginBottom: spacing.xxxl }}>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: spacing.lg,
                  fontFamily: '"Merriweather", Georgia, serif',
                }}
              >
                {content.dashboard.recentActivity}
              </h3>

              {completedEvents.length > 0 ? (
                <div
                  style={{
                    display: 'grid',
                    gap: spacing.lg,
                  }}
                >
                  {completedEvents.slice(0, 3).map((event) => (
                    <div
                      key={event.id}
                      style={{
                        background: '#ffffff',
                        padding: spacing.xl,
                        borderRadius: '12px',
                        border: `2px solid ${royalColors.hashemiteGold}40`,
                        boxShadow: `0 2px 8px rgba(0, 0, 0, 0.05)`,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                          marginBottom: spacing.md,
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              color: royalColors.darkNavy,
                              margin: '0 0 4px 0',
                            }}
                          >
                            {event.title}
                          </h4>
                          <p
                            style={{
                              fontSize: '13px',
                              color: royalColors.textSecondary,
                              margin: '0',
                            }}
                          >
                            {formatDate(event.date)}
                          </p>
                        </div>
                        <div
                          style={{
                            background: royalColors.compassionTeal,
                            color: '#ffffff',
                            padding: `${spacing.sm} ${spacing.md}`,
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '700',
                          }}
                        >
                          {event.hours}h
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: '14px',
                          color: royalColors.textSecondary,
                          margin: `0 0 ${spacing.md} 0`,
                        }}
                      >
                        📍 {event.location}
                      </p>

                      {event.impact && (
                        <div
                          style={{
                            background: `${royalColors.compassionTeal}15`,
                            padding: `${spacing.sm} ${spacing.md}`,
                            borderRadius: '8px',
                            fontSize: '13px',
                            color: royalColors.darkNavy,
                            fontWeight: '500',
                          }}
                        >
                          ✨ {event.impact}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    background: royalColors.ivoryBg,
                    padding: spacing.xxl,
                    borderRadius: '12px',
                    border: `2px dashed ${royalColors.hashemiteGold}40`,
                    textAlign: 'center',
                    color: royalColors.textSecondary,
                  }}
                >
                  <p style={{ fontSize: '16px', margin: '0' }}>
                    {content.dashboard.noActivity}
                  </p>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div
              style={{
                background: `linear-gradient(135deg, ${royalColors.charityRed}20 0%, ${royalColors.hashemiteGold}20 100%)`,
                padding: spacing.xxl,
                borderRadius: '12px',
                border: `2px solid ${royalColors.charityRed}40`,
                textAlign: 'center',
                marginBottom: spacing.xxxl,
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.darkNavy,
                  marginBottom: spacing.md,
                }}
              >
                {content.dashboard.nextEvent}
              </h3>
              <p style={{ color: royalColors.textSecondary, marginBottom: spacing.lg }}>
                Looking for your next volunteering opportunity? Explore our available roles.
              </p>
              <Link
                href={`/${locale}/get-involved/volunteer/opportunities`}
                style={{
                  display: 'inline-block',
                  padding: `${spacing.md} ${spacing.xl}`,
                  background: royalColors.charityRed,
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  transition: transitions.base,
                  boxShadow: `0 4px 12px rgba(231, 76, 60, 0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = royalColors.redLight;
                  e.currentTarget.style.boxShadow = `0 8px 20px rgba(231, 76, 60, 0.4)`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = royalColors.charityRed;
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(231, 76, 60, 0.3)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {content.dashboard.browseOpportunities}
              </Link>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: spacing.xl,
                fontFamily: '"Merriweather", Georgia, serif',
              }}
            >
              {content.history.title}
            </h2>

            {events.length > 0 ? (
              <div
                style={{
                  overflowX: 'auto',
                  marginBottom: spacing.xxxl,
                }}
              >
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    minWidth: '600px',
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${royalColors.hashemiteGold}40` }}>
                      <th
                        style={{
                          padding: spacing.lg,
                          textAlign: ar ? 'right' : 'left',
                          fontWeight: '700',
                          color: royalColors.textSecondary,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {content.history.date}
                      </th>
                      <th
                        style={{
                          padding: spacing.lg,
                          textAlign: ar ? 'right' : 'left',
                          fontWeight: '700',
                          color: royalColors.textSecondary,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {content.history.event}
                      </th>
                      <th
                        style={{
                          padding: spacing.lg,
                          textAlign: ar ? 'right' : 'left',
                          fontWeight: '700',
                          color: royalColors.textSecondary,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {content.history.location}
                      </th>
                      <th
                        style={{
                          padding: spacing.lg,
                          textAlign: ar ? 'right' : 'left',
                          fontWeight: '700',
                          color: royalColors.textSecondary,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {content.history.hours}
                      </th>
                      <th
                        style={{
                          padding: spacing.lg,
                          textAlign: ar ? 'right' : 'left',
                          fontWeight: '700',
                          color: royalColors.textSecondary,
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {content.history.status}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr
                        key={event.id}
                        style={{
                          borderBottom: `1px solid ${royalColors.hashemiteGold}20`,
                          backgroundColor:
                            event.status === 'completed'
                              ? `${royalColors.compassionTeal}08`
                              : 'transparent',
                        }}
                      >
                        <td
                          style={{
                            padding: spacing.lg,
                            color: royalColors.darkNavy,
                            fontSize: '14px',
                          }}
                        >
                          {formatDate(event.date)}
                        </td>
                        <td
                          style={{
                            padding: spacing.lg,
                            color: royalColors.darkNavy,
                            fontSize: '14px',
                            fontWeight: '600',
                          }}
                        >
                          {event.title}
                        </td>
                        <td
                          style={{
                            padding: spacing.lg,
                            color: royalColors.textSecondary,
                            fontSize: '14px',
                          }}
                        >
                          {event.location}
                        </td>
                        <td
                          style={{
                            padding: spacing.lg,
                            color: royalColors.darkNavy,
                            fontSize: '14px',
                            fontWeight: '700',
                          }}
                        >
                          {event.hours}h
                        </td>
                        <td style={{ padding: spacing.lg }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: `${spacing.sm} ${spacing.md}`,
                              background:
                                event.status === 'completed'
                                  ? royalColors.compassionTeal
                                  : royalColors.hashemiteGold,
                              color: '#ffffff',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '700',
                            }}
                          >
                            {event.status === 'completed'
                              ? content.history.completed
                              : content.history.upcoming}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                style={{
                  background: royalColors.ivoryBg,
                  padding: spacing.xxl,
                  borderRadius: '12px',
                  border: `2px dashed ${royalColors.hashemiteGold}40`,
                  textAlign: 'center',
                  color: royalColors.textSecondary,
                }}
              >
                <p style={{ fontSize: '16px', margin: '0' }}>{content.history.noData}</p>
              </div>
            )}
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: spacing.xl,
                fontFamily: '"Merriweather", Georgia, serif',
              }}
            >
              {content.achievements.title}
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: spacing.xl,
                marginBottom: spacing.xxxl,
              }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  style={{
                    background: '#ffffff',
                    padding: spacing.xl,
                    borderRadius: '12px',
                    border: achievement.earned
                      ? `2px solid ${royalColors.hashemiteGold}`
                      : `2px solid ${royalColors.hashemiteGold}40`,
                    boxShadow: achievement.earned
                      ? `0 8px 24px rgba(232, 185, 35, 0.15)`
                      : `0 2px 8px rgba(0, 0, 0, 0.05)`,
                    opacity: achievement.earned ? 1 : 0.7,
                    textAlign: 'center',
                    transition: transitions.base,
                  }}
                  onMouseEnter={(e) => {
                    if (achievement.earned) {
                      e.currentTarget.style.boxShadow = `0 12px 32px rgba(232, 185, 35, 0.25)`;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (achievement.earned) {
                      e.currentTarget.style.boxShadow = `0 8px 24px rgba(232, 185, 35, 0.15)`;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: '60px',
                      marginBottom: spacing.md,
                      filter: achievement.earned
                        ? 'drop-shadow(0 4px 12px rgba(232, 185, 35, 0.3))'
                        : 'grayscale(100%)',
                    }}
                  >
                    {achievement.icon}
                  </div>

                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: `0 0 ${spacing.sm} 0`,
                    }}
                  >
                    {achievement.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      margin: `0 0 ${spacing.md} 0`,
                    }}
                  >
                    {achievement.description}
                  </p>

                  <span
                    style={{
                      display: 'inline-block',
                      padding: `${spacing.sm} ${spacing.md}`,
                      background: achievement.earned
                        ? royalColors.compassionTeal
                        : royalColors.hashemiteGold,
                      color: '#ffffff',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      opacity: achievement.earned ? 1 : 0.5,
                    }}
                  >
                    {achievement.earned && achievement.dateEarned
                      ? `${content.achievements.earned} • ${formatDate(achievement.dateEarned)}`
                      : content.achievements.locked}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: spacing.xl,
                fontFamily: '"Merriweather", Georgia, serif',
              }}
            >
              {content.settings.title}
            </h2>

            <div
              style={{
                background: '#ffffff',
                padding: spacing.xxl,
                borderRadius: '12px',
                border: `2px solid ${royalColors.hashemiteGold}40`,
                marginBottom: spacing.xxxl,
              }}
            >
              {/* Success Message */}
              {saveSuccess && (
                <div
                  style={{
                    padding: spacing.lg,
                    marginBottom: spacing.xl,
                    background: `${royalColors.compassionTeal}20`,
                    border: `2px solid ${royalColors.compassionTeal}`,
                    borderRadius: '8px',
                    color: royalColors.darkNavy,
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  ✅ {content.settings.saved}
                </div>
              )}

              {/* Personal Information */}
              <div style={{ marginBottom: spacing.xxxl }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    marginBottom: spacing.lg,
                  }}
                >
                  {content.settings.personal}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.lg, marginBottom: spacing.lg }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        marginBottom: spacing.sm,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {content.settings.name}
                    </label>
                    <input
                      type="text"
                      defaultValue={profile.name}
                      style={{
                        width: '100%',
                        padding: `${spacing.md} ${spacing.md}`,
                        border: `2px solid ${royalColors.hashemiteGold}40`,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = royalColors.compassionTeal;
                        e.currentTarget.style.boxShadow = `0 0 0 3px rgba(26, 188, 156, 0.1)`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = `${royalColors.hashemiteGold}40`;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        marginBottom: spacing.sm,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {content.settings.email}
                    </label>
                    <input
                      type="email"
                      defaultValue={profile.email}
                      style={{
                        width: '100%',
                        padding: `${spacing.md} ${spacing.md}`,
                        border: `2px solid ${royalColors.hashemiteGold}40`,
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = royalColors.compassionTeal;
                        e.currentTarget.style.boxShadow = `0 0 0 3px rgba(26, 188, 156, 0.1)`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = `${royalColors.hashemiteGold}40`;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: spacing.sm,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {content.settings.phone}
                  </label>
                  <input
                    type="tel"
                    defaultValue={profile.phone}
                    style={{
                      width: '100%',
                      padding: `${spacing.md} ${spacing.md}`,
                      border: `2px solid ${royalColors.hashemiteGold}40`,
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = royalColors.compassionTeal;
                      e.currentTarget.style.boxShadow = `0 0 0 3px rgba(26, 188, 156, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `${royalColors.hashemiteGold}40`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: spacing.xxxl, paddingBottom: spacing.xl, borderBottom: `2px solid ${royalColors.hashemiteGold}20` }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    marginBottom: spacing.md,
                  }}
                >
                  {content.settings.skills}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    marginBottom: spacing.lg,
                  }}
                >
                  {content.settings.skillsHelp}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        background: `${royalColors.compassionTeal}20`,
                        color: royalColors.darkNavy,
                        padding: `${spacing.sm} ${spacing.md}`,
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        border: `2px solid ${royalColors.compassionTeal}40`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div style={{ marginBottom: spacing.xxxl }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    marginBottom: spacing.lg,
                  }}
                >
                  {content.settings.preferences}
                </h3>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: spacing.sm,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {content.settings.preferred}
                  </label>
                  <select
                    defaultValue={profile.preferredCategory}
                    style={{
                      width: '100%',
                      padding: `${spacing.md} ${spacing.md}`,
                      border: `2px solid ${royalColors.hashemiteGold}40`,
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = royalColors.compassionTeal;
                      e.currentTarget.style.boxShadow = `0 0 0 3px rgba(26, 188, 156, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `${royalColors.hashemiteGold}40`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Education">Education</option>
                    <option value="Environment">Environment</option>
                    <option value="Food Security">Food Security</option>
                    <option value="Health">Health</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleProfileUpdate}
                disabled={loading}
                style={{
                  padding: `${spacing.md} ${spacing.xl}`,
                  background: royalColors.charityRed,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: transitions.base,
                  boxShadow: `0 4px 12px rgba(231, 76, 60, 0.3)`,
                  opacity: loading ? 0.7 : 1,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = royalColors.redLight;
                    e.currentTarget.style.boxShadow = `0 8px 20px rgba(231, 76, 60, 0.4)`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = royalColors.charityRed;
                    e.currentTarget.style.boxShadow = `0 4px 12px rgba(231, 76, 60, 0.3)`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? '💾 Saving...' : `${content.settings.save}`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
