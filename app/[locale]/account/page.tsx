'use client';

import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, transitions } from '@/lib/royalDesign';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  country?: string;
  avatar?: string;
  joinDate: string;
}

interface UserPreferences {
  emailNotifications: boolean;
  monthlyNewsletter: boolean;
  donationUpdates: boolean;
  eventInvitations: boolean;
  impactReports: boolean;
  systemNotifications: boolean;
  language: 'en' | 'ar';
  theme: 'light' | 'dark';
}

const contentEN = {
  title: 'Account Settings',
  subtitle: 'Manage your profile, preferences, and account security',
  tabs: {
    profile: 'Profile',
    preferences: 'Preferences',
    security: 'Security',
    privacy: 'Privacy',
    notifications: 'Notifications',
  },
  profile: {
    heading: 'Profile Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    phone: 'Phone Number',
    organization: 'Organization',
    country: 'Country',
    joinDate: 'Member Since',
    edit: 'Edit Profile',
    save: 'Save Changes',
    cancel: 'Cancel',
    updated: 'Profile updated successfully',
  },
  preferences: {
    heading: 'Preferences',
    language: 'Language',
    theme: 'Theme',
    timezone: 'Timezone',
    english: 'English',
    arabic: 'العربية',
    light: 'Light',
    dark: 'Dark',
  },
  security: {
    heading: 'Security Settings',
    password: 'Password',
    twoFactor: 'Two-Factor Authentication',
    activeSessions: 'Active Sessions',
    loginHistory: 'Login History',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    enable: 'Enable',
    disable: 'Disable',
    enabled: 'Enabled',
    disabled: 'Disabled',
    lastLogin: 'Last Login',
    ipAddress: 'IP Address',
    viewHistory: 'View History',
  },
  privacy: {
    heading: 'Privacy Settings',
    profileVisibility: 'Profile Visibility',
    public: 'Public',
    private: 'Private',
    friendsOnly: 'Friends Only',
    dataUsage: 'Data Usage',
    thirdParty: 'Third-Party Sharing',
    analytics: 'Analytics Tracking',
    personalizedAds: 'Personalized Ads',
    allowPersonalized: 'Allow personalized content based on your activity',
  },
  notifications: {
    heading: 'Notification Preferences',
    email: 'Email Notifications',
    newsletter: 'Monthly Newsletter',
    donations: 'Donation Updates',
    events: 'Event Invitations',
    impact: 'Impact Reports',
    system: 'System Notifications',
    frequency: 'Notification Frequency',
    immediately: 'Immediately',
    daily: 'Daily Digest',
    weekly: 'Weekly Digest',
    monthly: 'Monthly Digest',
  },
  dangerZone: {
    heading: 'Danger Zone',
    deleteAccount: 'Delete Account',
    deleteMessage: 'Permanently delete your account and all associated data',
    deleteConfirm: 'I understand this action cannot be undone',
    deleteButton: 'Delete My Account',
    downloadData: 'Download My Data',
    downloadMessage: 'Export all your personal data in a portable format',
  },
};

const contentAR = {
  title: 'إعدادات الحساب',
  subtitle: 'إدارة ملفك الشخصي والتفضيلات وأمان حسابك',
  tabs: {
    profile: 'الملف الشخصي',
    preferences: 'التفضيلات',
    security: 'الأمان',
    privacy: 'الخصوصية',
    notifications: 'التنبيهات',
  },
  profile: {
    heading: 'معلومات الملف الشخصي',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'عنوان البريد الإلكتروني',
    phone: 'رقم الهاتف',
    organization: 'المنظمة',
    country: 'البلد',
    joinDate: 'تاريخ الانضمام',
    edit: 'تحرير الملف الشخصي',
    save: 'حفظ التغييرات',
    cancel: 'إلغاء',
    updated: 'تم تحديث الملف الشخصي بنجاح',
  },
  preferences: {
    heading: 'التفضيلات',
    language: 'اللغة',
    theme: 'المظهر',
    timezone: 'المنطقة الزمنية',
    english: 'English',
    arabic: 'العربية',
    light: 'فاتح',
    dark: 'داكن',
  },
  security: {
    heading: 'إعدادات الأمان',
    password: 'كلمة المرور',
    twoFactor: 'المصادقة الثنائية',
    activeSessions: 'الجلسات النشطة',
    loginHistory: 'سجل تسجيل الدخول',
    changePassword: 'تغيير كلمة المرور',
    currentPassword: 'كلمة المرور الحالية',
    newPassword: 'كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور',
    enable: 'تفعيل',
    disable: 'تعطيل',
    enabled: 'مفعلة',
    disabled: 'معطلة',
    lastLogin: 'آخر دخول',
    ipAddress: 'عنوان IP',
    viewHistory: 'عرض السجل',
  },
  privacy: {
    heading: 'إعدادات الخصوصية',
    profileVisibility: 'رؤية الملف الشخصي',
    public: 'عام',
    private: 'خاص',
    friendsOnly: 'الأصدقاء فقط',
    dataUsage: 'استخدام البيانات',
    thirdParty: 'مشاركة الجهات الخارجية',
    analytics: 'تتبع التحليلات',
    personalizedAds: 'الإعلانات الشخصية',
    allowPersonalized: 'السماح بالمحتوى الشخصي بناءً على نشاطك',
  },
  notifications: {
    heading: 'تفضيلات التنبيهات',
    email: 'إشعارات البريد الإلكتروني',
    newsletter: 'النشرة الشهرية',
    donations: 'تحديثات التبرعات',
    events: 'دعوات الأحداث',
    impact: 'تقارير التأثير',
    system: 'إشعارات النظام',
    frequency: 'تكرار التنبيهات',
    immediately: 'فوراً',
    daily: 'ملخص يومي',
    weekly: 'ملخص أسبوعي',
    monthly: 'ملخص شهري',
  },
  dangerZone: {
    heading: 'منطقة الخطر',
    deleteAccount: 'حذف الحساب',
    deleteMessage: 'حذف حسابك وجميع البيانات المرتبطة به بشكل دائم',
    deleteConfirm: 'أفهم أن هذا الإجراء لا يمكن التراجع عنه',
    deleteButton: 'حذف حسابي',
    downloadData: 'تنزيل بياناتي',
    downloadMessage: 'تصدير جميع بيانتك الشخصية بصيغة محمولة',
  },
};

export default function AccountSettingsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = ar ? contentAR : contentEN;

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Simulate fetching user data
    const mockProfile: UserProfile = {
      firstName: 'Ahmad',
      lastName: 'Hassan',
      email: 'ahmad.hassan@example.com',
      phone: '+962 79 1234567',
      organization: 'Tech for Good',
      country: 'Jordan',
      joinDate: '2024-03-15',
    };

    const mockPreferences: UserPreferences = {
      emailNotifications: true,
      monthlyNewsletter: true,
      donationUpdates: true,
      eventInvitations: true,
      impactReports: true,
      systemNotifications: false,
      language: locale === 'ar' ? 'ar' : 'en',
      theme: 'light',
    };

    setProfile(mockProfile);
    setPreferences(mockPreferences);
    setLoading(false);
  }, [locale]);

  const handleSaveProfile = () => {
    setSuccessMessage(content.profile.updated);
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePreferenceChange = (key: keyof UserPreferences, value: any) => {
    if (preferences) {
      setPreferences({
        ...preferences,
        [key]: value,
      });
      setSuccessMessage(content.profile.updated);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

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
            👤 Account Management
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
      <section style={{
        padding: '40px 32px',
        backgroundColor: 'white',
        borderBottom: `2px solid ${royalColors.bgRefined}`,
        overflowX: 'auto',
      }}>
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
                transition: transitions.base,
              }}
              onMouseEnter={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.color = royalColors.darkNavy;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.color = royalColors.textOfficial;
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Success Message */}
      {successMessage && (
        <div style={{
          padding: spacing.md,
          margin: spacing.md,
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'rgba(27, 67, 50, 0.1)',
          border: `2px solid ${royalColors.impactGreen}`,
          borderRadius: '8px',
          color: royalColors.impactGreen,
          fontSize: '14px',
          fontWeight: '600',
        }}>
          ✅ {successMessage}
        </div>
      )}

      {/* Content */}
      <section style={{ padding: '60px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Profile Tab */}
          {activeTab === 'profile' && profile && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                <h2 style={{
                  fontSize: '28px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  margin: 0,
                }}>
                  {content.profile.heading}
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: isEditing ? royalColors.charityRed : royalColors.deepRoyal,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: transitions.base,
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isEditing ? content.profile.cancel : content.profile.edit}
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {[
                  { label: content.profile.firstName, value: profile.firstName, key: 'firstName' },
                  { label: content.profile.lastName, value: profile.lastName, key: 'lastName' },
                  { label: content.profile.email, value: profile.email, key: 'email', disabled: true },
                  { label: content.profile.phone, value: profile.phone || '', key: 'phone' },
                  { label: content.profile.organization, value: profile.organization || '', key: 'organization' },
                  { label: content.profile.country, value: profile.country || '', key: 'country' },
                ].map((field) => (
                  <div key={field.key} style={{
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                  }}>
                    <label style={{
                      fontSize: '12px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {field.label}
                    </label>
                    {isEditing && !field.disabled ? (
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => {
                          setProfile({
                            ...profile,
                            [field.key]: e.target.value,
                          });
                        }}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${royalColors.hashemiteGold}`,
                          borderRadius: '4px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                        }}
                      />
                    ) : (
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: 0,
                      }}>
                        {field.value || '—'}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', textAlign: ar ? 'right' : 'left' }}>
                <p style={{ fontSize: '13px', color: royalColors.textOfficial, margin: 0 }}>
                  {content.profile.joinDate}: {profile.joinDate}
                </p>
              </div>

              {isEditing && (
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', justifyContent: ar ? 'flex-end' : 'flex-start', flexDirection: ar ? 'row-reverse' : 'row' }}>
                  <button
                    onClick={handleSaveProfile}
                    style={{
                      padding: '14px 32px',
                      backgroundColor: royalColors.deepRoyal,
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: transitions.base,
                    }}
                  >
                    {content.profile.save}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && preferences && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.preferences.heading}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Language */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                }}>
                  <label style={{
                    fontSize: '12px',
                    color: royalColors.textOfficial,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    marginBottom: '12px',
                  }}>
                    {content.preferences.language}
                  </label>
                  <select
                    value={preferences.language}
                    onChange={(e) => handlePreferenceChange('language', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: `2px solid ${royalColors.hashemiteGold}`,
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="en">{content.preferences.english}</option>
                    <option value="ar">{content.preferences.arabic}</option>
                  </select>
                </div>

                {/* Theme */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                }}>
                  <label style={{
                    fontSize: '12px',
                    color: royalColors.textOfficial,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    marginBottom: '12px',
                  }}>
                    {content.preferences.theme}
                  </label>
                  <select
                    value={preferences.theme}
                    onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: `2px solid ${royalColors.hashemiteGold}`,
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="light">{content.preferences.light}</option>
                    <option value="dark">{content.preferences.dark}</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.security.heading}
              </h2>

              <div style={{ display: 'grid', gap: '24px', maxWidth: '600px' }}>
                {/* Password */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: royalColors.darkNavy,
                      margin: '0 0 4px 0',
                    }}>
                      {content.security.password}
                    </h3>
                    <p style={{ fontSize: '13px', color: royalColors.textOfficial, margin: 0 }}>
                      Last changed 3 months ago
                    </p>
                  </div>
                  <button style={{
                    padding: '10px 20px',
                    backgroundColor: royalColors.hashemiteGold,
                    color: royalColors.darkNavy,
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: transitions.base,
                  }}>
                    {content.security.changePassword}
                  </button>
                </div>

                {/* Two-Factor Authentication */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: royalColors.darkNavy,
                      margin: '0 0 4px 0',
                    }}>
                      {content.security.twoFactor}
                    </h3>
                    <p style={{ fontSize: '13px', color: royalColors.textOfficial, margin: 0 }}>
                      Status: <strong>{content.security.disabled}</strong>
                    </p>
                  </div>
                  <button style={{
                    padding: '10px 20px',
                    backgroundColor: royalColors.impactGreen,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: transitions.base,
                  }}>
                    {content.security.enable}
                  </button>
                </div>

                {/* Active Sessions */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: royalColors.darkNavy,
                      margin: '0 0 4px 0',
                    }}>
                      {content.security.activeSessions}
                    </h3>
                    <p style={{ fontSize: '13px', color: royalColors.textOfficial, margin: 0 }}>
                      1 active session
                    </p>
                  </div>
                  <a href="#" style={{
                    padding: '10px 20px',
                    color: royalColors.hashemiteGold,
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}>
                    {content.security.viewHistory}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.privacy.heading}
              </h2>

              <div style={{ display: 'grid', gap: '24px', maxWidth: '600px' }}>
                {[
                  { label: content.privacy.profileVisibility, options: [content.privacy.public, content.privacy.private, content.privacy.friendsOnly] },
                  { label: content.privacy.dataUsage, options: ['Enable', 'Disable'] },
                  { label: content.privacy.thirdParty, options: ['Allow', 'Deny'] },
                  { label: content.privacy.analytics, options: ['Enable', 'Disable'] },
                ].map((setting, idx) => (
                  <div key={idx} style={{
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                  }}>
                    <label style={{
                      fontSize: '13px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '12px',
                    }}>
                      {setting.label}
                    </label>
                    <select style={{
                      width: '100%',
                      padding: '10px',
                      border: `2px solid ${royalColors.hashemiteGold}`,
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}>
                      {setting.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Personalized Content Checkbox */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <input
                    type="checkbox"
                    defaultChecked
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <label style={{
                      fontSize: '14px',
                      color: royalColors.darkNavy,
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'block',
                      marginBottom: '4px',
                    }}>
                      {content.privacy.personalizedAds}
                    </label>
                    <p style={{
                      fontSize: '13px',
                      color: royalColors.textOfficial,
                      margin: 0,
                    }}>
                      {content.privacy.allowPersonalized}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && preferences && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.notifications.heading}
              </h2>

              <div style={{ display: 'grid', gap: '24px', maxWidth: '600px' }}>
                {[
                  { key: 'emailNotifications', label: content.notifications.email },
                  { key: 'monthlyNewsletter', label: content.notifications.newsletter },
                  { key: 'donationUpdates', label: content.notifications.donations },
                  { key: 'eventInvitations', label: content.notifications.events },
                  { key: 'impactReports', label: content.notifications.impact },
                  { key: 'systemNotifications', label: content.notifications.system },
                ].map((notification) => (
                  <div key={notification.key} style={{
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: ar ? 'row-reverse' : 'row',
                  }}>
                    <label style={{
                      fontSize: '14px',
                      color: royalColors.darkNavy,
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}>
                      {notification.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={preferences[notification.key as keyof UserPreferences] as boolean}
                      onChange={(e) => handlePreferenceChange(notification.key as keyof UserPreferences, e.target.checked)}
                      style={{
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                ))}

                {/* Notification Frequency */}
                <div style={{
                  padding: '24px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: `1px solid ${royalColors.bgRefined}`,
                }}>
                  <label style={{
                    fontSize: '13px',
                    color: royalColors.textOfficial,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    marginBottom: '12px',
                  }}>
                    {content.notifications.frequency}
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '10px',
                    border: `2px solid ${royalColors.hashemiteGold}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}>
                    <option value="immediately">{content.notifications.immediately}</option>
                    <option value="daily">{content.notifications.daily}</option>
                    <option value="weekly">{content.notifications.weekly}</option>
                    <option value="monthly">{content.notifications.monthly}</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Danger Zone */}
      {activeTab === 'profile' && (
        <section style={{ padding: '60px 32px', backgroundColor: 'rgba(196, 30, 58, 0.02)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: royalTypography.serif,
              color: royalColors.charityRed,
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              ⚠️ {content.dangerZone.heading}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {/* Download Data */}
              <div style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: `1px solid rgba(196, 30, 58, 0.2)`,
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                }}>
                  📥 {content.dangerZone.downloadData}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textOfficial,
                  margin: '0 0 16px 0',
                  lineHeight: '1.5',
                }}>
                  {content.dangerZone.downloadMessage}
                </p>
                <button style={{
                  padding: '10px 20px',
                  backgroundColor: royalColors.compassionTeal,
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: transitions.base,
                }}>
                  Download
                </button>
              </div>

              {/* Delete Account */}
              <div style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: `2px solid ${royalColors.charityRed}`,
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: royalColors.charityRed,
                  margin: '0 0 8px 0',
                }}>
                  🗑️ {content.dangerZone.deleteAccount}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textOfficial,
                  margin: '0 0 16px 0',
                  lineHeight: '1.5',
                }}>
                  {content.dangerZone.deleteMessage}
                </p>
                <label style={{
                  fontSize: '13px',
                  color: royalColors.textOfficial,
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <input type="checkbox" style={{ marginTop: '2px', cursor: 'pointer' }} />
                  {content.dangerZone.deleteConfirm}
                </label>
                <button
                  disabled
                  style={{
                    padding: '10px 20px',
                    backgroundColor: royalColors.charityRed,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                    opacity: 0.5,
                  }}
                >
                  {content.dangerZone.deleteButton}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
