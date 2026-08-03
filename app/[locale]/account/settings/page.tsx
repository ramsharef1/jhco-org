'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, shadows, transitions, componentStyles } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    pageTitle: 'Account Settings',
    pageSubtitle: 'Manage Your Account Security and Preferences',

    sections: {
      security: 'Security Settings',
      privacy: 'Privacy Settings',
      notifications: 'Notification Preferences',
      appearance: 'Appearance',
      data: 'Data Management',
    },

    labels: {
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
      twoFactorAuth: 'Two-Factor Authentication',
      email: 'Email Address',
      phone: 'Phone Number',
      theme: 'Theme Preference',
      language: 'Language',
      privacy: 'Privacy Level',
      dataCollection: 'Allow Data Collection',
      emailNotifications: 'Email Notifications',
      smsNotifications: 'SMS Notifications',
      pushNotifications: 'Push Notifications',
      donationUpdates: 'Donation Updates',
      impactReports: 'Impact Reports',
      eventInvitations: 'Event Invitations',
      marketingEmails: 'Marketing Communications',
      sessionTimeout: 'Session Timeout',
      loginHistory: 'Login History',
      connectedDevices: 'Connected Devices',
      apiKeys: 'API Keys',
    },

    buttons: {
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
      updatePassword: 'Update Password',
      enableTwoFactor: 'Enable 2FA',
      disableTwoFactor: 'Disable 2FA',
      downloadData: 'Download My Data',
      exportData: 'Export Data',
      deleteAccount: 'Delete Account',
      logoutAllDevices: 'Logout All Devices',
      regenerateApiKey: 'Regenerate API Key',
      viewLoginHistory: 'View Login History',
      changeEmail: 'Change Email',
      backToAccount: 'Back to Account',
    },

    messages: {
      passwordUpdated: 'Password updated successfully.',
      settingsSaved: 'Settings saved successfully.',
      twoFactorEnabled: 'Two-factor authentication enabled.',
      twoFactorDisabled: 'Two-factor authentication disabled.',
      error: 'An error occurred. Please try again.',
      warning: 'This action cannot be undone.',
      confirmDelete: 'Are you sure you want to delete your account? This action cannot be reversed.',
      sessionExpired: 'Your session has expired. Please login again.',
    },

    descriptions: {
      security: 'Update your password and manage two-factor authentication',
      privacy: 'Control who can see your information and what data we collect',
      notifications: 'Choose how and when we contact you',
      appearance: 'Customize your interface preferences',
      data: 'Download, export, or delete your data',
    },

    options: {
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto (System)',
      public: 'Public',
      private: 'Private',
      custom: 'Custom',
      never: 'Never',
      always: 'Always',
      onDemand: 'On Demand',
    },
  },
  ar: {
    pageTitle: 'إعدادات الحساب',
    pageSubtitle: 'إدارة أمان حسابك والتفضيلات',

    sections: {
      security: 'إعدادات الأمان',
      privacy: 'إعدادات الخصوصية',
      notifications: 'تفضيلات الإشعارات',
      appearance: 'المظهر',
      data: 'إدارة البيانات',
    },

    labels: {
      currentPassword: 'كلمة المرور الحالية',
      newPassword: 'كلمة المرور الجديدة',
      confirmPassword: 'تأكيد كلمة المرور',
      twoFactorAuth: 'المصادقة الثنائية',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      theme: 'تفضيل المظهر',
      language: 'اللغة',
      privacy: 'مستوى الخصوصية',
      dataCollection: 'السماح بجمع البيانات',
      emailNotifications: 'إشعارات البريد الإلكتروني',
      smsNotifications: 'إشعارات الرسائل القصيرة',
      pushNotifications: 'الإشعارات الفورية',
      donationUpdates: 'تحديثات التبرعات',
      impactReports: 'تقارير التأثير',
      eventInvitations: 'دعوات الأحداث',
      marketingEmails: 'البريد الإلكتروني التسويقي',
      sessionTimeout: 'انتهاء جلسة العمل',
      loginHistory: 'سجل تسجيل الدخول',
      connectedDevices: 'الأجهزة المتصلة',
      apiKeys: 'مفاتيح API',
    },

    buttons: {
      saveChanges: 'حفظ التغييرات',
      cancel: 'إلغاء',
      updatePassword: 'تحديث كلمة المرور',
      enableTwoFactor: 'تفعيل المصادقة الثنائية',
      disableTwoFactor: 'تعطيل المصادقة الثنائية',
      downloadData: 'تحميل بياناتي',
      exportData: 'تصدير البيانات',
      deleteAccount: 'حذف الحساب',
      logoutAllDevices: 'تسجيل الخروج من جميع الأجهزة',
      regenerateApiKey: 'إعادة تعيين مفتاح API',
      viewLoginHistory: 'عرض سجل تسجيل الدخول',
      changeEmail: 'تغيير البريد الإلكتروني',
      backToAccount: 'العودة إلى الحساب',
    },

    messages: {
      passwordUpdated: 'تم تحديث كلمة المرور بنجاح.',
      settingsSaved: 'تم حفظ الإعدادات بنجاح.',
      twoFactorEnabled: 'تم تفعيل المصادقة الثنائية.',
      twoFactorDisabled: 'تم تعطيل المصادقة الثنائية.',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      warning: 'لا يمكن التراجع عن هذا الإجراء.',
      confirmDelete: 'هل أنت متأكد من رغبتك في حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.',
      sessionExpired: 'انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.',
    },

    descriptions: {
      security: 'حدّث كلمة المرور وأدر المصادقة الثنائية',
      privacy: 'تحكم في من يمكنه رؤية معلوماتك وما البيانات التي نجمعها',
      notifications: 'اختر كيفية ومتى نتصل بك',
      appearance: 'خصص تفضيلات الواجهة الخاصة بك',
      data: 'قم بتحميل أو تصدير أو حذف بياناتك',
    },

    options: {
      light: 'فاتح',
      dark: 'داكن',
      auto: 'تلقائي (النظام)',
      public: 'عام',
      private: 'خاص',
      custom: 'مخصص',
      never: 'أبداً',
      always: 'دائماً',
      onDemand: 'عند الطلب',
    },
  },
};

interface SettingsForm {
  theme: string;
  language: string;
  privacyLevel: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  donationUpdates: boolean;
  impactReports: boolean;
  eventInvitations: boolean;
  marketingEmails: boolean;
  sessionTimeout: string;
  twoFactorEnabled: boolean;
  dataCollection: boolean;
}

export default function SettingsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  const [settings, setSettings] = useState<SettingsForm>({
    theme: 'auto',
    language: locale,
    privacyLevel: 'custom',
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    donationUpdates: true,
    impactReports: true,
    eventInvitations: true,
    marketingEmails: false,
    sessionTimeout: '30',
    twoFactorEnabled: false,
    dataCollection: true,
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSettingChange = (key: keyof SettingsForm, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setMessage({ type: 'error', text: text.messages.error });
      return;
    }
    setMessage({ type: 'success', text: text.messages.passwordUpdated });
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordForm(false);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSaveSettings = () => {
    setMessage({ type: 'success', text: text.messages.settingsSaved });
    setTimeout(() => setMessage(null), 3000);
  };

  const SettingsSection = ({ title, description, icon, children }: any) => (
    <div style={{
      marginBottom: spacing.xxxl,
      padding: spacing.xxl,
      backgroundColor: 'white',
      borderLeft: `4px solid ${royalColors.hashemiteGold}`,
      boxShadow: shadows.sm,
      borderRadius: borderRadius.md,
      transition: transitions.base,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg, marginBottom: spacing.xl }}>
        <div style={{ fontSize: '32px' }}>{icon}</div>
        <div>
          <h3 style={{
            margin: 0,
            fontSize: '20px',
            color: royalColors.darkNavy,
            fontWeight: '700',
            fontFamily: 'serif',
          }}>
            {title}
          </h3>
          <p style={{
            margin: spacing.sm + ' 0 0 0',
            fontSize: '14px',
            color: royalColors.textSecondary,
          }}>
            {description}
          </p>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${royalColors.borderSubtle}`, paddingTop: spacing.xl }}>
        {children}
      </div>
    </div>
  );

  const SettingRow = ({ label, children }: any) => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing.lg + ' 0',
      borderBottom: `1px solid ${royalColors.borderSubtle}`,
      gap: spacing.lg,
      flexWrap: 'wrap',
    }}>
      <label style={{
        fontSize: '14px',
        color: royalColors.darkNavy,
        fontWeight: '600',
        minWidth: '200px',
      }}>
        {label}
      </label>
      {children}
    </div>
  );

  const Checkbox = ({ checked, onChange }: any) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        accentColor: royalColors.hashemiteGold,
      }}
    />
  );

  const Select = ({ value, onChange, options }: any) => (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: '8px 12px',
        border: `1px solid ${royalColors.borderSubtle}`,
        borderRadius: borderRadius.sm,
        fontSize: '14px',
        color: royalColors.darkNavy,
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        minWidth: '150px',
      }}
    >
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );

  const Input = ({ type, value, onChange, placeholder }: any) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px 12px',
        border: `1px solid ${royalColors.borderSubtle}`,
        borderRadius: borderRadius.sm,
        fontSize: '14px',
        color: royalColors.darkNavy,
        width: '100%',
        maxWidth: '300px',
        boxSizing: 'border-box',
      }}
    />
  );

  const Button = ({ onClick, variant = 'primary', children }: any) => (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        borderRadius: borderRadius.sm,
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: transitions.base,
        border: 'none',
        backgroundColor: variant === 'primary' ? royalColors.charityRed : royalColors.textSecondary,
        color: '#ffffff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgRefined }}>
      {/* Header */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
        color: 'white',
        padding: '80px 32px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '16px',
          fontFamily: 'serif',
          fontWeight: '700',
        }}>
          {text.pageTitle}
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.9, margin: 0 }}>
          {text.pageSubtitle}
        </p>
      </section>

      {/* Main Content */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
      }}>
        {/* Message Alert */}
        {message && (
          <div style={{
            marginBottom: spacing.xl,
            padding: spacing.lg,
            borderRadius: borderRadius.md,
            backgroundColor: message.type === 'success'
              ? 'rgba(76, 175, 80, 0.1)'
              : 'rgba(231, 76, 60, 0.1)',
            border: `1px solid ${message.type === 'success' ? '#4CAF50' : royalColors.charityRed}`,
            color: message.type === 'success' ? '#2e7d32' : royalColors.redDark,
            fontSize: '14px',
          }}>
            {message.text}
          </div>
        )}

        {/* Security Section */}
        <SettingsSection
          title={text.sections.security}
          description={text.descriptions.security}
          icon="🔒"
        >
          <SettingRow label={text.labels.twoFactorAuth}>
            <Checkbox
              checked={settings.twoFactorEnabled}
              onChange={(e) => handleSettingChange('twoFactorEnabled', e.target.checked)}
            />
          </SettingRow>

          {!showPasswordForm && (
            <SettingRow label={text.labels.currentPassword}>
              <Button onClick={() => setShowPasswordForm(true)}>
                {text.buttons.updatePassword}
              </Button>
            </SettingRow>
          )}

          {showPasswordForm && (
            <>
              <SettingRow label={text.labels.currentPassword}>
                <Input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                  placeholder={text.labels.currentPassword}
                />
              </SettingRow>
              <SettingRow label={text.labels.newPassword}>
                <Input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                  placeholder={text.labels.newPassword}
                />
              </SettingRow>
              <SettingRow label={text.labels.confirmPassword}>
                <Input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder={text.labels.confirmPassword}
                />
              </SettingRow>
              <div style={{ paddingTop: spacing.lg, display: 'flex', gap: spacing.md }}>
                <Button onClick={handlePasswordChange} variant="primary">
                  {text.buttons.updatePassword}
                </Button>
                <Button onClick={() => setShowPasswordForm(false)} variant="secondary">
                  {text.buttons.cancel}
                </Button>
              </div>
            </>
          )}

          <SettingRow label={text.labels.sessionTimeout}>
            <Select
              value={settings.sessionTimeout}
              onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
              options={[
                { value: '15', label: '15 minutes' },
                { value: '30', label: '30 minutes' },
                { value: '60', label: '1 hour' },
                { value: '240', label: '4 hours' },
                { value: 'never', label: 'Never' },
              ]}
            />
          </SettingRow>
        </SettingsSection>

        {/* Privacy Section */}
        <SettingsSection
          title={text.sections.privacy}
          description={text.descriptions.privacy}
          icon="🔐"
        >
          <SettingRow label={text.labels.privacy}>
            <Select
              value={settings.privacyLevel}
              onChange={(e) => handleSettingChange('privacyLevel', e.target.value)}
              options={[
                { value: 'public', label: text.options.public },
                { value: 'private', label: text.options.private },
                { value: 'custom', label: text.options.custom },
              ]}
            />
          </SettingRow>

          <SettingRow label={text.labels.dataCollection}>
            <Checkbox
              checked={settings.dataCollection}
              onChange={(e) => handleSettingChange('dataCollection', e.target.checked)}
            />
          </SettingRow>
        </SettingsSection>

        {/* Notification Preferences */}
        <SettingsSection
          title={text.sections.notifications}
          description={text.descriptions.notifications}
          icon="🔔"
        >
          <SettingRow label={text.labels.emailNotifications}>
            <Checkbox
              checked={settings.emailNotifications}
              onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
            />
          </SettingRow>

          <SettingRow label={text.labels.smsNotifications}>
            <Checkbox
              checked={settings.smsNotifications}
              onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
            />
          </SettingRow>

          <SettingRow label={text.labels.pushNotifications}>
            <Checkbox
              checked={settings.pushNotifications}
              onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
            />
          </SettingRow>

          <h4 style={{ fontSize: '14px', fontWeight: '600', color: royalColors.darkNavy, marginTop: spacing.lg }}>
            {ar ? 'أنواع الإشعارات' : 'Notification Types'}
          </h4>

          <SettingRow label={text.labels.donationUpdates}>
            <Checkbox
              checked={settings.donationUpdates}
              onChange={(e) => handleSettingChange('donationUpdates', e.target.checked)}
            />
          </SettingRow>

          <SettingRow label={text.labels.impactReports}>
            <Checkbox
              checked={settings.impactReports}
              onChange={(e) => handleSettingChange('impactReports', e.target.checked)}
            />
          </SettingRow>

          <SettingRow label={text.labels.eventInvitations}>
            <Checkbox
              checked={settings.eventInvitations}
              onChange={(e) => handleSettingChange('eventInvitations', e.target.checked)}
            />
          </SettingRow>

          <SettingRow label={text.labels.marketingEmails}>
            <Checkbox
              checked={settings.marketingEmails}
              onChange={(e) => handleSettingChange('marketingEmails', e.target.checked)}
            />
          </SettingRow>
        </SettingsSection>

        {/* Appearance Settings */}
        <SettingsSection
          title={text.sections.appearance}
          description={text.descriptions.appearance}
          icon="🎨"
        >
          <SettingRow label={text.labels.theme}>
            <Select
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
              options={[
                { value: 'light', label: text.options.light },
                { value: 'dark', label: text.options.dark },
                { value: 'auto', label: text.options.auto },
              ]}
            />
          </SettingRow>

          <SettingRow label={text.labels.language}>
            <Select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'ar', label: 'العربية' },
              ]}
            />
          </SettingRow>
        </SettingsSection>

        {/* Data Management */}
        <SettingsSection
          title={text.sections.data}
          description={text.descriptions.data}
          icon="📊"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
            <Button onClick={() => {}}>
              {text.buttons.downloadData}
            </Button>
            <Button onClick={() => {}}>
              {text.buttons.exportData}
            </Button>
            <Button onClick={() => {}}>
              {text.buttons.logoutAllDevices}
            </Button>
          </div>

          <div style={{
            marginTop: spacing.xl,
            padding: spacing.lg,
            backgroundColor: 'rgba(231, 76, 60, 0.05)',
            borderRadius: borderRadius.md,
            borderLeft: `3px solid ${royalColors.charityRed}`,
          }}>
            <p style={{
              margin: 0,
              fontSize: '13px',
              color: royalColors.redDark,
              fontWeight: '600',
              marginBottom: spacing.md,
            }}>
              ⚠️ {text.messages.warning}
            </p>
            <Button onClick={() => alert(text.messages.confirmDelete)} variant="danger">
              {text.buttons.deleteAccount}
            </Button>
          </div>
        </SettingsSection>

        {/* Save Settings */}
        <div style={{
          display: 'flex',
          gap: spacing.lg,
          justifyContent: 'center',
          marginTop: spacing.xxxl,
          paddingTop: spacing.xl,
          borderTop: `2px solid ${royalColors.borderSubtle}`,
        }}>
          <Button onClick={handleSaveSettings} variant="primary">
            {text.buttons.saveChanges}
          </Button>
          <Link href="/account" style={{
            padding: '10px 20px',
            borderRadius: borderRadius.sm,
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            border: `1px solid ${royalColors.borderSubtle}`,
            color: royalColors.darkNavy,
            backgroundColor: 'white',
            display: 'inline-block',
            transition: transitions.base,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.bgRefined;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}>
            {text.buttons.backToAccount}
          </Link>
        </div>
      </section>
    </div>
  );
}
