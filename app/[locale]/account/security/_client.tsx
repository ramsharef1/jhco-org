'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, transitions } from '@/lib/royalDesign';
import Link from 'next/link';
import { useState, use } from 'react';

interface Device {
  id: string;
  name: string;
  type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

interface LoginEvent {
  id: string;
  timestamp: string;
  ipAddress: string;
  location: string;
  device: string;
  browser: string;
  status: 'success' | 'failed';
}

const content = {
  en: {
    title: 'Account Security',
    subtitle: 'Protect your account with strong security settings',
    backButton: 'Back to Account',

    sections: {
      password: {
        title: 'Password Management',
        description: 'Keep your account secure with a strong password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm New Password',
        changeButton: 'Change Password',
        changingButton: 'Changing...',
        lastChanged: 'Last changed',
        passwordStrength: 'Password Strength',
        weak: 'Weak',
        fair: 'Fair',
        good: 'Good',
        strong: 'Strong',
        requirements: 'Password must contain at least 12 characters, including uppercase, lowercase, numbers, and special characters',
      },
      twoFactor: {
        title: 'Two-Factor Authentication (2FA)',
        description: 'Add an extra layer of security to your account',
        status: 'Status',
        enabled: 'Enabled',
        disabled: 'Disabled',
        recommendedMessage: 'We strongly recommend enabling two-factor authentication',
        enable: 'Enable 2FA',
        disable: 'Disable 2FA',
        methods: 'Authentication Methods',
        authenticatorApp: 'Authenticator App',
        sms: 'Text Message (SMS)',
        email: 'Email',
        backupCodes: 'Backup Codes',
        backupCodesDesc: 'Save these codes in a secure location. Each code can be used once if you lose access to your authentication method.',
        downloadButton: 'Download Codes',
        regenerateButton: 'Regenerate Codes',
      },
      sessions: {
        title: 'Active Sessions',
        description: 'Manage all devices that have access to your account',
        current: 'Current',
        lastActive: 'Last active',
        signOutButton: 'Sign Out',
        signOutAllButton: 'Sign Out All Other Sessions',
        noOtherSessions: 'No other active sessions',
        deviceType: 'Device',
      },
      loginHistory: {
        title: 'Login History',
        description: 'Track all login attempts to your account',
        date: 'Date',
        time: 'Time',
        ipAddress: 'IP Address',
        location: 'Location',
        device: 'Device',
        status: 'Status',
        success: 'Success',
        failed: 'Failed',
        noHistory: 'No login history available',
        viewMore: 'View More',
      },
      trustedDevices: {
        title: 'Trusted Devices',
        description: 'Devices that do not require additional verification',
        addDevice: 'Add Current Device as Trusted',
        removeDevice: 'Remove',
        trustDesc: 'Trusted devices will not prompt for additional verification on next login',
      },
      securityAlerts: {
        title: 'Security Alerts',
        description: 'Get notified of suspicious account activity',
        failedLogins: 'Failed Login Attempts',
        newDevice: 'New Device Login',
        ipChange: 'IP Address Change',
        settingsChange: 'Account Settings Changes',
        enabled: 'Enabled',
        disabled: 'Disabled',
      },
      recoveryOptions: {
        title: 'Recovery Options',
        description: 'Set up ways to regain access if you lose your password',
        recoveryEmail: 'Recovery Email Address',
        recoveryPhone: 'Recovery Phone Number',
        currentEmail: 'Current email on file',
        currentPhone: 'Current phone on file',
        updateButton: 'Update',
        addButton: 'Add',
        verifyButton: 'Verify',
      },
      connectedApps: {
        title: 'Connected Applications',
        description: 'Apps and services that have access to your account',
        revoke: 'Revoke Access',
        lastUsed: 'Last used',
      },
    },

    alerts: {
      success: 'Your security settings have been updated successfully',
      error: 'An error occurred. Please try again.',
      warning: 'This action requires verification',
      info: 'Your account is secure',
    },

    warnings: {
      noTwoFactor: 'Two-factor authentication is not enabled',
      oldPassword: 'Your password was last changed over 90 days ago',
      unusualActivity: 'We detected a login from a new location',
    },
  },
  ar: {
    title: 'أمان الحساب',
    subtitle: 'حماية حسابك من خلال إعدادات أمان قوية',
    backButton: 'العودة إلى الحساب',

    sections: {
      password: {
        title: 'إدارة كلمة المرور',
        description: 'حافظ على أمان حسابك بكلمة مرور قوية',
        currentPassword: 'كلمة المرور الحالية',
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور الجديدة',
        changeButton: 'تغيير كلمة المرور',
        changingButton: 'جاري التغيير...',
        lastChanged: 'تم التغيير آخر مرة',
        passwordStrength: 'قوة كلمة المرور',
        weak: 'ضعيفة',
        fair: 'متوسطة',
        good: 'جيدة',
        strong: 'قوية',
        requirements: 'يجب أن تحتوي كلمة المرور على 12 حرفًا على الأقل، بما في ذلك أحرف كبيرة وصغيرة وأرقام وأحرف خاصة',
      },
      twoFactor: {
        title: 'المصادقة الثنائية (2FA)',
        description: 'أضف طبقة أمان إضافية لحسابك',
        status: 'الحالة',
        enabled: 'مفعلة',
        disabled: 'معطلة',
        recommendedMessage: 'نوصي بشدة بتفعيل المصادقة الثنائية',
        enable: 'تفعيل 2FA',
        disable: 'تعطيل 2FA',
        methods: 'طرق المصادقة',
        authenticatorApp: 'تطبيق المصادقة',
        sms: 'رسالة نصية (SMS)',
        email: 'البريد الإلكتروني',
        backupCodes: 'رموز النسخة الاحتياطية',
        backupCodesDesc: 'احفظ هذه الرموز في مكان آمن. يمكن استخدام كل رمز مرة واحدة إذا فقدت الوصول إلى طريقة المصادقة الخاصة بك.',
        downloadButton: 'تحميل الرموز',
        regenerateButton: 'إعادة إنشاء الرموز',
      },
      sessions: {
        title: 'الجلسات النشطة',
        description: 'إدارة جميع الأجهزة التي لديها حق الوصول إلى حسابك',
        current: 'الحالية',
        lastActive: 'آخر نشاط',
        signOutButton: 'تسجيل الخروج',
        signOutAllButton: 'تسجيل الخروج من جميع الجلسات الأخرى',
        noOtherSessions: 'لا توجد جلسات نشطة أخرى',
        deviceType: 'الجهاز',
      },
      loginHistory: {
        title: 'سجل تسجيل الدخول',
        description: 'تتبع جميع محاولات تسجيل الدخول إلى حسابك',
        date: 'التاريخ',
        time: 'الوقت',
        ipAddress: 'عنوان IP',
        location: 'الموقع',
        device: 'الجهاز',
        status: 'الحالة',
        success: 'نجح',
        failed: 'فشل',
        noHistory: 'لا يوجد سجل تسجيل دخول متاح',
        viewMore: 'عرض المزيد',
      },
      trustedDevices: {
        title: 'الأجهزة الموثوقة',
        description: 'الأجهزة التي لا تتطلب تحقق إضافي',
        addDevice: 'إضافة الجهاز الحالي كموثوق',
        removeDevice: 'إزالة',
        trustDesc: 'الأجهزة الموثوقة لن تطالب بتحقق إضافي عند تسجيل الدخول التالي',
      },
      securityAlerts: {
        title: 'تنبيهات الأمان',
        description: 'احصل على إخطار بنشاط حسابك المريب',
        failedLogins: 'محاولات تسجيل دخول فاشلة',
        newDevice: 'تسجيل دخول من جهاز جديد',
        ipChange: 'تغيير عنوان IP',
        settingsChange: 'تغييرات إعدادات الحساب',
        enabled: 'مفعلة',
        disabled: 'معطلة',
      },
      recoveryOptions: {
        title: 'خيارات الاسترجاع',
        description: 'قم بإعداد طرق لاستعادة الوصول إذا نسيت كلمة المرور الخاصة بك',
        recoveryEmail: 'عنوان البريد الإلكتروني للاسترجاع',
        recoveryPhone: 'رقم الهاتف للاسترجاع',
        currentEmail: 'البريد الإلكتروني الحالي في الملف',
        currentPhone: 'رقم الهاتف الحالي في الملف',
        updateButton: 'تحديث',
        addButton: 'إضافة',
        verifyButton: 'التحقق',
      },
      connectedApps: {
        title: 'التطبيقات المتصلة',
        description: 'التطبيقات والخدمات التي لديها حق الوصول إلى حسابك',
        revoke: 'إلغاء الوصول',
        lastUsed: 'آخر استخدام',
      },
    },

    alerts: {
      success: 'تم تحديث إعدادات الأمان الخاصة بك بنجاح',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      warning: 'هذا الإجراء يتطلب التحقق',
      info: 'حسابك آمن',
    },

    warnings: {
      noTwoFactor: 'المصادقة الثنائية غير مفعلة',
      oldPassword: 'تم تغيير كلمة المرور الخاصة بك آخر مرة قبل أكثر من 90 يوماً',
      unusualActivity: 'اكتشفنا تسجيل دخول من موقع جديد',
    },
  },
};

export default function AccountSecurityPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';
  const t = content[ar ? 'ar' : 'en'];

  const [showMessage, setShowMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'warning' | 'info'>('success');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('password');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Mock data for active sessions
  const mockDevices: Device[] = [
    {
      id: '1',
      name: 'MacBook Pro',
      type: 'desktop',
      browser: 'Chrome',
      ipAddress: '192.168.1.100',
      location: 'Amman, Jordan',
      lastActive: '2 minutes ago',
      isCurrent: true,
    },
    {
      id: '2',
      name: 'iPhone 14',
      type: 'mobile',
      browser: 'Safari',
      ipAddress: '192.168.1.101',
      location: 'Amman, Jordan',
      lastActive: '1 hour ago',
      isCurrent: false,
    },
  ];

  // Mock data for login history
  const mockLoginHistory: LoginEvent[] = [
    {
      id: '1',
      timestamp: '2024-08-03 14:30',
      ipAddress: '192.168.1.100',
      location: 'Amman, Jordan',
      device: 'MacBook Pro (Chrome)',
      browser: 'Chrome',
      status: 'success',
    },
    {
      id: '2',
      timestamp: '2024-08-03 09:15',
      ipAddress: '192.168.1.101',
      location: 'Amman, Jordan',
      device: 'iPhone 14 (Safari)',
      browser: 'Safari',
      status: 'success',
    },
    {
      id: '3',
      timestamp: '2024-08-02 18:45',
      ipAddress: '203.0.113.50',
      location: 'Unknown',
      device: 'Desktop (Firefox)',
      browser: 'Firefox',
      status: 'failed',
    },
  ];

  const handleShowMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    setShowMessage(message);
    setMessageType(type);
    setTimeout(() => setShowMessage(''), 3000);
  };

  const handlePasswordChange = async () => {
    setIsChangingPassword(true);
    setTimeout(() => {
      handleShowMessage(t.alerts.success);
      setIsChangingPassword(false);
    }, 1000);
  };

  const handleToggle2FA = () => {
    if (!twoFactorEnabled) {
      handleShowMessage(t.sections.twoFactor.recommendedMessage, 'info');
    } else {
      handleShowMessage(t.alerts.warning, 'warning');
    }
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  const getMessageColor = () => {
    switch (messageType) {
      case 'success':
        return { bg: 'rgba(27, 67, 50, 0.1)', border: royalColors.impactGreen, text: royalColors.impactGreen };
      case 'error':
        return { bg: 'rgba(196, 30, 58, 0.1)', border: royalColors.charityRed, text: royalColors.charityRed };
      case 'warning':
        return { bg: 'rgba(212, 175, 55, 0.1)', border: royalColors.hashemiteGold, text: royalColors.hashemiteGold };
      case 'info':
      default:
        return { bg: 'rgba(44, 82, 130, 0.1)', border: royalColors.skyBlue, text: royalColors.skyBlue };
    }
  };

  const messageColor = getMessageColor();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.deepRoyal})`,
        padding: '60px 32px',
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
            🔒 Security Center
          </p>
          <h1 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '16px',
          }}>
            {t.title}
          </h1>
          <p style={{
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Back Button */}
      <section style={{ padding: '20px 32px', backgroundColor: 'white', borderBottom: `1px solid ${royalColors.bgRefined}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link
            href={`/${locale}/account`}
            style={{
              color: royalColors.hashemiteGold,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: transitions.base,
            }}
          >
            ← {t.backButton}
          </Link>
        </div>
      </section>

      {/* Alert Message */}
      {showMessage && (
        <div style={{
          padding: '16px 32px',
          backgroundColor: 'transparent',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 24px',
            backgroundColor: messageColor.bg,
            border: `2px solid ${messageColor.border}`,
            borderRadius: '8px',
            color: messageColor.text,
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {messageType === 'success' && '✅'}
            {messageType === 'error' && '❌'}
            {messageType === 'warning' && '⚠️'}
            {messageType === 'info' && 'ℹ️'}
            {showMessage}
          </div>
        </div>
      )}

      {/* Main Content */}
      <section style={{ padding: '60px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Security Overview */}
          <div style={{
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            border: `1px solid ${royalColors.bgRefined}`,
            marginBottom: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {/* Password Status */}
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔐</div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.textOfficial,
                margin: '0 0 4px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Password
              </h3>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                Last changed 45 days ago
              </p>
            </div>

            {/* 2FA Status */}
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>
                {twoFactorEnabled ? '✅' : '❌'}
              </div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.textOfficial,
                margin: '0 0 4px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                2FA Status
              </h3>
              <p style={{
                fontSize: '13px',
                color: twoFactorEnabled ? royalColors.impactGreen : royalColors.charityRed,
                margin: 0,
                fontWeight: '600',
              }}>
                {twoFactorEnabled ? t.sections.twoFactor.enabled : t.sections.twoFactor.disabled}
              </p>
            </div>

            {/* Active Sessions */}
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📱</div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.textOfficial,
                margin: '0 0 4px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Sessions
              </h3>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                {mockDevices.length} active
              </p>
            </div>
          </div>

          {/* Collapsible Sections */}
          <div style={{ display: 'grid', gap: '16px' }}>
            {/* Password Management */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: `1px solid ${royalColors.bgRefined}`,
              overflow: 'hidden',
            }}>
              <button
                onClick={() => toggleSection('password')}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: ar ? 'right' : 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 4px 0',
                  }}>
                    🔑 {t.sections.password.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: 0,
                  }}>
                    {t.sections.password.description}
                  </p>
                </div>
                <span style={{
                  fontSize: '20px',
                  color: royalColors.hashemiteGold,
                  transition: transitions.base,
                  transform: expandedSection === 'password' ? 'rotate(180deg)' : 'rotate(0)',
                }}>
                  ▼
                </span>
              </button>

              {expandedSection === 'password' && (
                <div style={{
                  padding: '24px',
                  borderTop: `1px solid ${royalColors.bgRefined}`,
                  display: 'grid',
                  gap: '16px',
                }}>
                  <div>
                    <label style={{
                      fontSize: '12px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {t.sections.password.currentPassword}
                    </label>
                    <input
                      type="password"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${royalColors.bgRefined}`,
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                      }}
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '12px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {t.sections.password.newPassword}
                    </label>
                    <input
                      type="password"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${royalColors.bgRefined}`,
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                      }}
                      placeholder="••••••••"
                    />
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      margin: '8px 0 0 0',
                    }}>
                      {t.sections.password.requirements}
                    </p>
                  </div>

                  <div>
                    <label style={{
                      fontSize: '12px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {t.sections.password.confirmPassword}
                    </label>
                    <input
                      type="password"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${royalColors.bgRefined}`,
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                      }}
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    onClick={handlePasswordChange}
                    disabled={isChangingPassword}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: royalColors.deepRoyal,
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: isChangingPassword ? 'not-allowed' : 'pointer',
                      opacity: isChangingPassword ? 0.7 : 1,
                      transition: transitions.base,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      alignSelf: ar ? 'flex-end' : 'flex-start',
                    }}
                    onMouseEnter={(e) => {
                      if (!isChangingPassword) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isChangingPassword ? t.sections.password.changingButton : t.sections.password.changeButton}
                  </button>
                </div>
              )}
            </div>

            {/* Two-Factor Authentication */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: `1px solid ${royalColors.bgRefined}`,
              overflow: 'hidden',
            }}>
              <button
                onClick={() => toggleSection('2fa')}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: ar ? 'right' : 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 4px 0',
                  }}>
                    🛡️ {t.sections.twoFactor.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: 0,
                  }}>
                    {t.sections.twoFactor.description}
                  </p>
                </div>
                <span style={{
                  fontSize: '20px',
                  color: royalColors.hashemiteGold,
                  transition: transitions.base,
                  transform: expandedSection === '2fa' ? 'rotate(180deg)' : 'rotate(0)',
                }}>
                  ▼
                </span>
              </button>

              {expandedSection === '2fa' && (
                <div style={{
                  padding: '24px',
                  borderTop: `1px solid ${royalColors.bgRefined}`,
                  display: 'grid',
                  gap: '24px',
                }}>
                  <div style={{
                    padding: '16px',
                    backgroundColor: royalColors.bgRefined,
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: ar ? 'row-reverse' : 'row',
                  }}>
                    <div>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textOfficial,
                        fontWeight: '600',
                        margin: 0,
                      }}>
                        {t.sections.twoFactor.status}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: twoFactorEnabled ? royalColors.impactGreen : royalColors.charityRed,
                        margin: '4px 0 0 0',
                      }}>
                        {twoFactorEnabled ? t.sections.twoFactor.enabled : t.sections.twoFactor.disabled}
                      </p>
                    </div>
                    <button
                      onClick={handleToggle2FA}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: twoFactorEnabled ? royalColors.charityRed : royalColors.impactGreen,
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: transitions.base,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {twoFactorEnabled ? t.sections.twoFactor.disable : t.sections.twoFactor.enable}
                    </button>
                  </div>

                  {!twoFactorEnabled && (
                    <div style={{
                      padding: '16px',
                      backgroundColor: 'rgba(27, 67, 50, 0.05)',
                      borderLeft: `4px solid ${royalColors.impactGreen}`,
                      borderRadius: '4px',
                    }}>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.impactGreen,
                        margin: 0,
                        fontWeight: '600',
                      }}>
                        {t.sections.twoFactor.recommendedMessage}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: royalColors.textOfficial,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      margin: '0 0 12px 0',
                    }}>
                      {t.sections.twoFactor.methods}
                    </h4>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {[
                        { name: t.sections.twoFactor.authenticatorApp, emoji: '📱' },
                        { name: t.sections.twoFactor.sms, emoji: '💬' },
                        { name: t.sections.twoFactor.email, emoji: '📧' },
                      ].map((method) => (
                        <div key={method.name} style={{
                          padding: '12px',
                          border: `1px solid ${royalColors.bgRefined}`,
                          borderRadius: '6px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexDirection: ar ? 'row-reverse' : 'row',
                        }}>
                          <span style={{ fontSize: '14px', fontWeight: '500' }}>
                            {method.emoji} {method.name}
                          </span>
                          <button style={{
                            padding: '6px 12px',
                            backgroundColor: royalColors.hashemiteGold,
                            color: royalColors.darkNavy,
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: transitions.base,
                          }}>
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Active Sessions */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: `1px solid ${royalColors.bgRefined}`,
              overflow: 'hidden',
            }}>
              <button
                onClick={() => toggleSection('sessions')}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: ar ? 'right' : 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 4px 0',
                  }}>
                    📱 {t.sections.sessions.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: 0,
                  }}>
                    {t.sections.sessions.description}
                  </p>
                </div>
                <span style={{
                  fontSize: '20px',
                  color: royalColors.hashemiteGold,
                  transition: transitions.base,
                  transform: expandedSection === 'sessions' ? 'rotate(180deg)' : 'rotate(0)',
                }}>
                  ▼
                </span>
              </button>

              {expandedSection === 'sessions' && (
                <div style={{
                  padding: '24px',
                  borderTop: `1px solid ${royalColors.bgRefined}`,
                  display: 'grid',
                  gap: '16px',
                }}>
                  {mockDevices.map((device) => (
                    <div key={device.id} style={{
                      padding: '16px',
                      border: `1px solid ${royalColors.bgRefined}`,
                      borderRadius: '8px',
                      backgroundColor: device.isCurrent ? 'rgba(13, 115, 119, 0.05)' : 'transparent',
                      borderLeft: device.isCurrent ? `4px solid ${royalColors.compassionTeal}` : '4px solid transparent',
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '16px',
                        flexDirection: ar ? 'row-reverse' : 'row',
                        marginBottom: '12px',
                      }}>
                        <div>
                          <h4 style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: royalColors.darkNavy,
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flexDirection: ar ? 'row-reverse' : 'row',
                          }}>
                            {device.type === 'desktop' && '💻'}
                            {device.type === 'mobile' && '📱'}
                            {device.type === 'tablet' && '📱'}
                            {device.name}
                            {device.isCurrent && (
                              <span style={{
                                fontSize: '12px',
                                backgroundColor: royalColors.compassionTeal,
                                color: 'white',
                                padding: '2px 8px',
                                borderRadius: '12px',
                                fontWeight: '600',
                              }}>
                                {t.sections.sessions.current}
                              </span>
                            )}
                          </h4>
                          <p style={{
                            fontSize: '13px',
                            color: royalColors.textSecondary,
                            margin: '4px 0 0 0',
                          }}>
                            {device.browser} • {device.location}
                          </p>
                          <p style={{
                            fontSize: '12px',
                            color: royalColors.textSecondary,
                            margin: '4px 0 0 0',
                          }}>
                            {t.sections.sessions.lastActive}: {device.lastActive}
                          </p>
                        </div>
                        {!device.isCurrent && (
                          <button style={{
                            padding: '8px 16px',
                            backgroundColor: 'transparent',
                            color: royalColors.charityRed,
                            border: `2px solid ${royalColors.charityRed}`,
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: transitions.base,
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = royalColors.charityRed;
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = royalColors.charityRed;
                          }}>
                            {t.sections.sessions.signOutButton}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  <button style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '8px',
                    backgroundColor: 'transparent',
                    color: royalColors.charityRed,
                    border: `2px solid ${royalColors.charityRed}`,
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: transitions.base,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = royalColors.charityRed;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = royalColors.charityRed;
                  }}>
                    {t.sections.sessions.signOutAllButton}
                  </button>
                </div>
              )}
            </div>

            {/* Login History */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: `1px solid ${royalColors.bgRefined}`,
              overflow: 'hidden',
            }}>
              <button
                onClick={() => toggleSection('history')}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: ar ? 'right' : 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 4px 0',
                  }}>
                    🕐 {t.sections.loginHistory.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: 0,
                  }}>
                    {t.sections.loginHistory.description}
                  </p>
                </div>
                <span style={{
                  fontSize: '20px',
                  color: royalColors.hashemiteGold,
                  transition: transitions.base,
                  transform: expandedSection === 'history' ? 'rotate(180deg)' : 'rotate(0)',
                }}>
                  ▼
                </span>
              </button>

              {expandedSection === 'history' && (
                <div style={{
                  padding: '24px',
                  borderTop: `1px solid ${royalColors.bgRefined}`,
                }}>
                  <div style={{
                    overflowX: 'auto',
                    borderRadius: '8px',
                    border: `1px solid ${royalColors.bgRefined}`,
                  }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '13px',
                    }}>
                      <thead>
                        <tr style={{ backgroundColor: royalColors.bgRefined }}>
                          <th style={{
                            padding: '12px',
                            textAlign: ar ? 'right' : 'left',
                            fontWeight: '600',
                            color: royalColors.textOfficial,
                            borderBottom: `1px solid ${royalColors.bgRefined}`,
                          }}>
                            {t.sections.loginHistory.date}
                          </th>
                          <th style={{
                            padding: '12px',
                            textAlign: ar ? 'right' : 'left',
                            fontWeight: '600',
                            color: royalColors.textOfficial,
                            borderBottom: `1px solid ${royalColors.bgRefined}`,
                          }}>
                            {t.sections.loginHistory.device}
                          </th>
                          <th style={{
                            padding: '12px',
                            textAlign: ar ? 'right' : 'left',
                            fontWeight: '600',
                            color: royalColors.textOfficial,
                            borderBottom: `1px solid ${royalColors.bgRefined}`,
                          }}>
                            {t.sections.loginHistory.location}
                          </th>
                          <th style={{
                            padding: '12px',
                            textAlign: ar ? 'right' : 'left',
                            fontWeight: '600',
                            color: royalColors.textOfficial,
                            borderBottom: `1px solid ${royalColors.bgRefined}`,
                          }}>
                            {t.sections.loginHistory.status}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockLoginHistory.map((login) => (
                          <tr key={login.id} style={{
                            borderBottom: `1px solid ${royalColors.bgRefined}`,
                          }}>
                            <td style={{
                              padding: '12px',
                              color: royalColors.textOfficial,
                            }}>
                              {login.timestamp}
                            </td>
                            <td style={{
                              padding: '12px',
                              color: royalColors.textOfficial,
                            }}>
                              {login.device}
                            </td>
                            <td style={{
                              padding: '12px',
                              color: royalColors.textOfficial,
                            }}>
                              {login.location}
                            </td>
                            <td style={{
                              padding: '12px',
                              color: login.status === 'success' ? royalColors.impactGreen : royalColors.charityRed,
                              fontWeight: '600',
                            }}>
                              {login.status === 'success' ? '✓' : '✗'} {login.status === 'success' ? t.sections.loginHistory.success : t.sections.loginHistory.failed}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
