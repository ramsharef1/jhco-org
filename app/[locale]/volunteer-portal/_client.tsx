'use client';

import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

interface VolunteerEvent {
  id: string;
  date: string;
  title: string;
  location: string;
  hours: number;
  category: string;
  impact?: string;
}

interface VolunteerAvailability {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  available: boolean;
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
  certificate?: string;
}

const contentEN = {
  title: 'Volunteer Portal',
  subtitle: 'Track your service and manage your volunteering',
  tabs: {
    dashboard: 'Dashboard',
    history: 'Volunteer History',
    availability: 'My Availability',
    settings: 'Profile Settings',
  },
  dashboard: {
    greeting: 'Welcome back, Volunteer!',
    totalHours: 'Total Hours Served',
    eventCount: 'Events Participated',
    joinDate: 'Member Since',
    impactTitle: 'Your Impact',
    impactDesc: 'Your dedication is making a real difference in our community',
  },
  history: {
    noData: 'No volunteer activities yet',
    date: 'Date',
    event: 'Event',
    location: 'Location',
    hours: 'Hours',
    status: 'Status',
  },
  availability: {
    title: 'Your Weekly Availability',
    helpText: 'Let us know when you are available to volunteer',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    available: 'Available',
    notAvailable: 'Not Available',
    from: 'From',
    to: 'To',
    save: 'Save Availability',
  },
  settings: {
    profile: 'Profile Information',
    skills: 'Your Skills',
    preferences: 'Volunteer Preferences',
    contact: 'Contact Information',
    skillsHelp: 'Tell us what skills you can contribute',
  },
};

const contentAR = {
  title: 'بوابة المتطوعين',
  subtitle: 'تتبع خدمتك وإدارة تطوعك',
  tabs: {
    dashboard: 'لوحة التحكم',
    history: 'سجل التطوع',
    availability: 'توفري للعمل',
    settings: 'إعدادات الملف الشخصي',
  },
  dashboard: {
    greeting: 'أهلاً بعودتك، المتطوع!',
    totalHours: 'إجمالي الساعات المخدومة',
    eventCount: 'الأحداث المشارك فيها',
    joinDate: 'عضو منذ',
    impactTitle: 'تأثيرك',
    impactDesc: 'تفانيك يحدث فرقاً حقيقياً في مجتمعنا',
  },
  history: {
    noData: 'لا توجد أنشطة تطوع حتى الآن',
    date: 'التاريخ',
    event: 'الحدث',
    location: 'الموقع',
    hours: 'الساعات',
    status: 'الحالة',
  },
  availability: {
    title: 'توفرك الأسبوعي',
    helpText: 'أخبرنا متى تكون متاحاً للتطوع',
    monday: 'الاثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    saturday: 'السبت',
    sunday: 'الأحد',
    available: 'متاح',
    notAvailable: 'غير متاح',
    from: 'من',
    to: 'إلى',
    save: 'حفظ التوفر',
  },
  settings: {
    profile: 'معلومات الملف الشخصي',
    skills: 'مهاراتك',
    preferences: 'تفضيلات التطوع',
    contact: 'معلومات الاتصال',
    skillsHelp: 'أخبرنا ما هي المهارات التي يمكنك المساهمة بها',
  },
};

export default function VolunteerPortalPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = ar ? contentAR : contentEN;

  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState<VolunteerProfile | null>(null);
  const [events, setEvents] = useState<VolunteerEvent[]>([]);
  const [availability, setAvailability] = useState<VolunteerAvailability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching volunteer data
    const mockProfile: VolunteerProfile = {
      name: 'Fatima Al-Rashid',
      email: 'fatima@example.com',
      phone: '+962-6-1234567',
      totalHours: 156,
      eventCount: 24,
      joinDate: '2024-01-15',
      skills: ['Teaching', 'Childcare', 'Medical Training', 'Translation'],
      preferredCategory: 'Education',
      certificate: 'Certificate of Excellence',
    };

    const mockEvents: VolunteerEvent[] = [
      {
        id: '1',
        date: '2026-08-02',
        title: 'Summer Education Program',
        location: 'Community Center - Amman',
        hours: 8,
        category: 'Education',
        impact: 'Taught 20 students',
      },
      {
        id: '2',
        date: '2026-07-28',
        title: 'Healthcare Outreach',
        location: 'Health Clinic - Zarqa',
        hours: 6,
        category: 'Healthcare',
        impact: 'Assisted 45 patients',
      },
      {
        id: '3',
        date: '2026-07-20',
        title: 'Community Cleanup',
        location: 'Public Park - Salt',
        hours: 4,
        category: 'Environment',
        impact: 'Cleaned 2 acres',
      },
      {
        id: '4',
        date: '2026-07-15',
        title: 'Food Distribution',
        location: 'Relief Center - Irbid',
        hours: 6,
        category: 'Food Security',
        impact: 'Served 100+ families',
      },
    ];

    const mockAvailability: VolunteerAvailability[] = [
      { dayOfWeek: 'Monday', startTime: '14:00', endTime: '18:00', available: true },
      { dayOfWeek: 'Tuesday', startTime: '14:00', endTime: '18:00', available: true },
      { dayOfWeek: 'Wednesday', startTime: '', endTime: '', available: false },
      { dayOfWeek: 'Thursday', startTime: '14:00', endTime: '20:00', available: true },
      { dayOfWeek: 'Friday', startTime: '09:00', endTime: '13:00', available: true },
      { dayOfWeek: 'Saturday', startTime: '09:00', endTime: '17:00', available: true },
      { dayOfWeek: 'Sunday', startTime: '', endTime: '', available: false },
    ];

    setProfile(mockProfile);
    setEvents(mockEvents);
    setAvailability(mockAvailability);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '18px', color: royalColors.textOfficial }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.deepRoyal})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '16px',
          }}>
            Make a Difference
          </p>
          <h1 style={{
            fontSize: '52px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '16px',
          }}>
            {content.title}
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ padding: '40px 32px', backgroundColor: 'white', borderBottom: `2px solid ${royalColors.bgRefined}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {Object.entries(content.tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16px',
                fontWeight: activeTab === key ? '700' : '500',
                color: activeTab === key ? royalColors.darkNavy : royalColors.textOfficial,
                cursor: 'pointer',
                paddingBottom: '8px',
                borderBottom: activeTab === key ? `3px solid ${royalColors.hashemiteGold}` : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && profile && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.dashboard.greeting}
              </h2>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
                marginBottom: '60px',
              }}>
                {[
                  { label: content.dashboard.totalHours, value: `${profile.totalHours} hrs`, icon: '⏱️' },
                  { label: content.dashboard.eventCount, value: profile.eventCount.toString(), icon: '📅' },
                  { label: content.dashboard.joinDate, value: profile.joinDate, icon: '🌟' },
                  { label: 'Favorite Category', value: profile.preferredCategory, icon: '❤️' },
                ].map((stat, idx) => (
                  <div key={idx} style={{
                    padding: '32px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    <div style={{ fontSize: '28px', marginBottom: '12px' }}>{stat.icon}</div>
                    <p style={{ fontSize: '13px', color: royalColors.textOfficial, margin: '0 0 8px 0' }}>
                      {stat.label}
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: 0,
                    }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Events */}
              <div style={{
                marginBottom: '60px',
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '24px',
                }}>
                  Recent Volunteer Activities
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                }}>
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} style={{
                      padding: '24px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.bgRefined}`,
                    }}>
                      <p style={{
                        fontSize: '11px',
                        color: royalColors.hashemiteGold,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '700',
                        margin: '0 0 8px 0',
                      }}>
                        {event.category}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0 0 8px 0',
                      }}>
                        {event.title}
                      </p>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textOfficial,
                        margin: '0 0 4px 0',
                      }}>
                        📍 {event.location}
                      </p>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textOfficial,
                        margin: '0 0 12px 0',
                      }}>
                        📅 {event.date}
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '12px',
                        borderTop: `1px solid ${royalColors.bgRefined}`,
                        flexDirection: ar ? 'row-reverse' : 'row',
                      }}>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: royalColors.hashemiteGold,
                          margin: 0,
                        }}>
                          {event.hours} hours
                        </p>
                        {event.impact && (
                          <p style={{
                            fontSize: '12px',
                            color: royalColors.textOfficial,
                            margin: 0,
                          }}>
                            ✓ {event.impact}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Section */}
              <div style={{
                padding: '40px',
                backgroundColor: `${royalColors.hashemiteGold}10`,
                borderRadius: '8px',
                borderLeft: `4px solid ${royalColors.hashemiteGold}`,
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {content.dashboard.impactTitle}
                </h3>
                <p style={{ margin: 0, color: royalColors.textOfficial, lineHeight: '1.6' }}>
                  {content.dashboard.impactDesc}
                </p>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.tabs.history}
              </h2>

              {events.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                }}>
                  {events.map((event) => (
                    <div key={event.id} style={{
                      padding: '24px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.bgRefined}`,
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '24px',
                      alignItems: 'center',
                      direction: ar ? 'rtl' : 'ltr',
                    }}>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: royalColors.darkNavy,
                          margin: '0 0 4px 0',
                        }}>
                          {event.title}
                        </p>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          margin: '0 0 8px 0',
                        }}>
                          📍 {event.location}
                        </p>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          margin: '0 0 8px 0',
                        }}>
                          📅 {event.date}
                        </p>
                        {event.impact && (
                          <p style={{
                            fontSize: '12px',
                            color: royalColors.hashemiteGold,
                            fontWeight: '600',
                            margin: 0,
                          }}>
                            ✓ {event.impact}
                          </p>
                        )}
                      </div>
                      <div style={{
                        textAlign: 'center',
                        padding: '20px',
                        backgroundColor: royalColors.bgLight,
                        borderRadius: '6px',
                        minWidth: '100px',
                      }}>
                        <p style={{
                          fontSize: '11px',
                          color: royalColors.textOfficial,
                          margin: '0 0 6px 0',
                          textTransform: 'uppercase',
                        }}>
                          Hours
                        </p>
                        <p style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: royalColors.hashemiteGold,
                          margin: 0,
                        }}>
                          {event.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: royalColors.textOfficial }}>{content.history.noData}</p>
              )}
            </div>
          )}

          {/* Availability Tab */}
          {activeTab === 'availability' && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                {content.availability.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: royalColors.textOfficial,
                marginBottom: '32px',
                maxWidth: '600px',
              }}>
                {content.availability.helpText}
              </p>

              <div style={{ display: 'grid', gap: '16px', maxWidth: '600px', marginBottom: '32px' }}>
                {availability.map((day, idx) => (
                  <div key={idx} style={{
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr auto',
                    gap: '16px',
                    alignItems: 'center',
                    direction: ar ? 'rtl' : 'ltr',
                  }}>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: 0,
                      }}>
                        {day.dayOfWeek}
                      </p>
                    </div>
                    {day.available ? (
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                      }}>
                        <input
                          type="time"
                          value={day.startTime}
                          style={{
                            padding: '8px 12px',
                            border: `1px solid ${royalColors.bgRefined}`,
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                          readOnly
                        />
                        <p style={{ margin: 0, color: royalColors.textOfficial }}>-</p>
                        <input
                          type="time"
                          value={day.endTime}
                          style={{
                            padding: '8px 12px',
                            border: `1px solid ${royalColors.bgRefined}`,
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                          readOnly
                        />
                      </div>
                    ) : (
                      <p style={{
                        color: royalColors.textOfficial,
                        fontStyle: 'italic',
                        margin: 0,
                      }}>
                        Not Available
                      </p>
                    )}
                    <div style={{
                      padding: '6px 12px',
                      backgroundColor: day.available ? `${royalColors.hashemiteGold}20` : `${royalColors.textOfficial}20`,
                      borderRadius: '20px',
                      textAlign: 'center',
                    }}>
                      <p style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: day.available ? royalColors.hashemiteGold : royalColors.textOfficial,
                        margin: 0,
                        textTransform: 'uppercase',
                      }}>
                        {day.available ? content.availability.available : content.availability.notAvailable}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button style={{
                padding: '12px 32px',
                backgroundColor: royalColors.hashemiteGold,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.darkNavy;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {content.availability.save}
              </button>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && profile && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.tabs.settings}
              </h2>

              {/* Profile Section */}
              <div style={{ marginBottom: '60px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '24px',
                }}>
                  {content.settings.profile}
                </h3>

                <div style={{ display: 'grid', gap: '16px', maxWidth: '500px' }}>
                  {[
                    { label: 'Full Name', value: profile.name },
                    { label: 'Email Address', value: profile.email },
                    { label: 'Phone Number', value: profile.phone },
                    { label: 'Member Since', value: profile.joinDate },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      padding: '20px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.bgRefined}`,
                    }}>
                      <p style={{
                        fontSize: '12px',
                        color: royalColors.textOfficial,
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        color: royalColors.darkNavy,
                        margin: 0,
                        fontWeight: '500',
                      }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div style={{ marginBottom: '60px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {content.settings.skills}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  marginBottom: '24px',
                }}>
                  {content.settings.skillsHelp}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}>
                  {profile.skills.map((skill, idx) => (
                    <div key={idx} style={{
                      padding: '12px 20px',
                      backgroundColor: `${royalColors.hashemiteGold}20`,
                      borderRadius: '20px',
                      border: `1px solid ${royalColors.hashemiteGold}`,
                    }}>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: 0,
                      }}>
                        ✓ {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferences Section */}
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '24px',
                }}>
                  {content.settings.preferences}
                </h3>

                <div style={{ display: 'grid', gap: '16px', maxWidth: '500px' }}>
                  {[
                    { label: 'Preferred Category', value: profile.preferredCategory },
                    { label: 'Certification', value: profile.certificate || 'None' },
                    { label: 'Newsletter', value: 'Subscribed' },
                    { label: 'Event Notifications', value: 'Enabled' },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      padding: '20px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.bgRefined}`,
                    }}>
                      <p style={{
                        fontSize: '12px',
                        color: royalColors.textOfficial,
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        color: royalColors.darkNavy,
                        margin: 0,
                        fontWeight: '500',
                      }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
