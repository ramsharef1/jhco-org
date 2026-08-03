'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, shadows, transitions, componentStyles } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    pageTitle: 'My Profile',
    pageSubtitle: 'Manage Your Personal Information',

    sections: {
      personalInfo: 'Personal Information',
      contactInfo: 'Contact Information',
      demographics: 'Demographics',
      preferences: 'Communication Preferences',
      activity: 'Account Activity',
    },

    labels: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      dateOfBirth: 'Date of Birth',
      country: 'Country',
      city: 'City',
      address: 'Street Address',
      gender: 'Gender',
      joinDate: 'Member Since',
      lastLogin: 'Last Login',
      profileStatus: 'Profile Status',
      newsletter: 'Subscribe to Newsletter',
      eventNotifications: 'Event Notifications',
      donationReceipts: 'Donation Receipts',
      monthlyReport: 'Monthly Impact Report',
      impactUpdates: 'Impact Updates',
    },

    buttons: {
      edit: 'Edit Profile',
      save: 'Save Changes',
      cancel: 'Cancel',
      changePassword: 'Change Password',
      downloadData: 'Download My Data',
      deactivateAccount: 'Deactivate Account',
      backToAccount: 'Back to Account',
    },

    sections_content: {
      personalInfo: {
        title: 'Personal Information',
        description: 'Your basic profile details',
      },
      contactInfo: {
        title: 'Contact Information',
        description: 'How we can reach you',
      },
      demographics: {
        title: 'Demographics',
        description: 'Additional profile information',
      },
      preferences: {
        title: 'Communication Preferences',
        description: 'Choose how you want to hear from us',
      },
      activity: {
        title: 'Account Activity',
        description: 'Your account history and login information',
      },
    },

    placeholders: {
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
      phone: '+962 (0) ...',
      city: 'Your city',
      address: 'Your street address',
    },

    messages: {
      verified: 'Verified',
      unverified: 'Unverified',
      active: 'Active',
      noData: 'No information provided',
      changesSaved: 'Your changes have been saved successfully.',
      editHint: 'Click Edit Profile to update your information',
    },
  },
  ar: {
    pageTitle: 'ملفي الشخصي',
    pageSubtitle: 'إدارة معلوماتك الشخصية',

    sections: {
      personalInfo: 'المعلومات الشخصية',
      contactInfo: 'معلومات الاتصال',
      demographics: 'المعلومات الديموغرافية',
      preferences: 'تفضيلات الاتصال',
      activity: 'نشاط الحساب',
    },

    labels: {
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      dateOfBirth: 'تاريخ الميلاد',
      country: 'البلد',
      city: 'المدينة',
      address: 'عنوان الشارع',
      gender: 'الجنس',
      joinDate: 'تاريخ الانضمام',
      lastLogin: 'آخر دخول',
      profileStatus: 'حالة الملف الشخصي',
      newsletter: 'الاشتراك في النشرة الإخبارية',
      eventNotifications: 'إشعارات الأحداث',
      donationReceipts: 'إيصالات التبرع',
      monthlyReport: 'التقرير الشهري للتأثير',
      impactUpdates: 'تحديثات التأثير',
    },

    buttons: {
      edit: 'تعديل الملف الشخصي',
      save: 'حفظ التغييرات',
      cancel: 'إلغاء',
      changePassword: 'تغيير كلمة المرور',
      downloadData: 'تحميل بياناتي',
      deactivateAccount: 'إلغاء تفعيل الحساب',
      backToAccount: 'العودة إلى الحساب',
    },

    sections_content: {
      personalInfo: {
        title: 'المعلومات الشخصية',
        description: 'تفاصيل ملفك الأساسية',
      },
      contactInfo: {
        title: 'معلومات الاتصال',
        description: 'كيف يمكننا التواصل معك',
      },
      demographics: {
        title: 'المعلومات الديموغرافية',
        description: 'معلومات ملفك الشخصي الإضافية',
      },
      preferences: {
        title: 'تفضيلات الاتصال',
        description: 'اختر كيفية التواصل معك',
      },
      activity: {
        title: 'نشاط الحساب',
        description: 'سجل حسابك ومعلومات تسجيل الدخول',
      },
    },

    placeholders: {
      firstName: 'أدخل اسمك الأول',
      lastName: 'أدخل اسم عائلتك',
      phone: '+962 (0) ...',
      city: 'مدينتك',
      address: 'عنوان شارعك',
    },

    messages: {
      verified: 'تم التحقق',
      unverified: 'لم يتم التحقق',
      active: 'نشط',
      noData: 'لم يتم تقديم معلومات',
      changesSaved: 'تم حفظ التغييرات بنجاح.',
      editHint: 'انقر على تعديل الملف الشخصي لتحديث معلوماتك',
    },
  },
};

// Mock user data - in a real app, this would come from a database/API
const mockUserData = {
  firstName: 'Ahmed',
  lastName: 'Al-Hassan',
  email: 'ahmed@example.com',
  phone: '+962 (0) 798765432',
  dateOfBirth: '1990-05-15',
  country: 'Jordan',
  city: 'Amman',
  address: '123 King Abdullah Street',
  gender: 'Male',
  joinDate: 'January 15, 2023',
  lastLogin: 'August 2, 2026',
  profileStatus: 'Complete',
  profileCompletion: 95,
  totalDonations: '$5,250',
  donationCount: 12,
  volunteerHours: 48,
  avatar: '👤',
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  country: string;
  city: string;
  address: string;
  gender: string;
  newsletter: boolean;
  eventNotifications: boolean;
  donationReceipts: boolean;
  monthlyReport: boolean;
  impactUpdates: boolean;
}

export default function ProfilePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: mockUserData.firstName,
    lastName: mockUserData.lastName,
    email: mockUserData.email,
    phone: mockUserData.phone,
    dateOfBirth: mockUserData.dateOfBirth,
    country: mockUserData.country,
    city: mockUserData.city,
    address: mockUserData.address,
    gender: mockUserData.gender,
    newsletter: true,
    eventNotifications: true,
    donationReceipts: true,
    monthlyReport: true,
    impactUpdates: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would send data to backend
    console.log('Saved data:', formData);
  };

  const commonInputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: borderRadius.md,
    border: `1px solid ${royalColors.borderFormal}`,
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: transitions.base,
    backgroundColor: 'white',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '13px',
    fontWeight: '600',
    color: royalColors.textOfficial,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: spacing.xxl,
    padding: '32px',
    backgroundColor: 'white',
    border: `1px solid ${royalColors.borderFormal}`,
    borderRadius: borderRadius.md,
    boxShadow: shadows.sm,
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '700',
    color: royalColors.deepRoyal,
    marginBottom: '8px',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.5px',
  };

  const sectionDescStyle: React.CSSProperties = {
    fontSize: '14px',
    color: royalColors.textSecondary,
    marginBottom: '24px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing.md,
    justifyContent: ar ? 'flex-end' : 'flex-start',
    marginTop: spacing.lg,
    flexWrap: 'wrap',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...componentStyles.buttons.royalPrimary,
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    border: 'none',
    fontFamily: 'inherit',
    transition: transitions.base,
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...componentStyles.buttons.royalSecondary,
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    fontFamily: 'inherit',
    transition: transitions.base,
  };

  const statBoxStyle: React.CSSProperties = {
    padding: spacing.lg,
    backgroundColor: royalColors.bgRefined,
    border: `1px solid ${royalColors.borderSubtle}`,
    borderRadius: borderRadius.md,
    textAlign: 'center',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: '800',
    color: royalColors.deepRoyal,
    marginBottom: '8px',
    fontFamily: 'Georgia, serif',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '600',
    color: royalColors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', backgroundColor: royalColors.bgLight, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
        color: 'white',
        padding: '80px 32px',
        textAlign: 'center',
        borderBottom: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '16px',
          fontFamily: 'Georgia, serif',
          fontWeight: '700',
          letterSpacing: '0.5px',
        }}>
          {text.pageTitle}
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '0' }}>
          {text.pageSubtitle}
        </p>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 32px' }}>
        {/* Profile Header with Avatar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: ar ? '1fr auto' : 'auto 1fr',
          gap: spacing.xl,
          alignItems: 'center',
          marginBottom: spacing.xxxl,
          padding: spacing.xxl,
          backgroundColor: 'white',
          border: `2px solid ${royalColors.hashemiteGold}`,
          borderRadius: borderRadius.md,
          boxShadow: shadows.md,
        }}>
          {/* Avatar */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: royalColors.bgRefined,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '56px',
            border: `3px solid ${royalColors.hashemiteGold}`,
            flexShrink: 0,
            order: ar ? 2 : 1,
          }}>
            {mockUserData.avatar}
          </div>

          {/* Profile Summary */}
          <div style={{ order: ar ? 1 : 2 }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: royalColors.deepRoyal,
              marginBottom: '8px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px',
            }}>
              {mockUserData.firstName} {mockUserData.lastName}
            </h2>
            <p style={{
              fontSize: '14px',
              color: royalColors.textSecondary,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: '600',
            }}>
              {text.labels.profileStatus}: <span style={{ color: royalColors.deepRoyal }}>
                {mockUserData.profileStatus} • {mockUserData.profileCompletion}%
              </span>
            </p>
            <p style={{ fontSize: '13px', color: royalColors.textSecondary, margin: '4px 0' }}>
              📧 {mockUserData.email}
            </p>
            <p style={{ fontSize: '13px', color: royalColors.textSecondary, margin: '4px 0' }}>
              📅 {text.labels.joinDate}: {mockUserData.joinDate}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xxxl,
        }}>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>{mockUserData.donationCount}</div>
            <div style={statLabelStyle}>Total Donations</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>{mockUserData.totalDonations}</div>
            <div style={statLabelStyle}>Amount Donated</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>{mockUserData.volunteerHours}</div>
            <div style={statLabelStyle}>Volunteer Hours</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>
              {Math.floor(mockUserData.profileCompletion)}%
            </div>
            <div style={statLabelStyle}>Profile Complete</div>
          </div>
        </div>

        {/* Edit Button */}
        {!isEditing && (
          <div style={{ marginBottom: spacing.xxxl, textAlign: ar ? 'right' : 'left' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                ...primaryButtonStyle,
                padding: '14px 32px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#5e35b1';
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#4a148c';
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              ✏️ {text.buttons.edit}
            </button>
          </div>
        )}

        {/* Personal Information Section */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>{text.sections_content.personalInfo.title}</h3>
          <p style={sectionDescStyle}>{text.sections_content.personalInfo.description}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing.lg,
          }}>
            <div>
              <label style={labelStyle}>{text.labels.firstName}</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder={text.placeholders.firstName}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>{text.labels.lastName}</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder={text.placeholders.lastName}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>{text.labels.dateOfBirth}</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>{text.labels.gender}</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'pointer' : 'default',
                  color: royalColors.textOfficial,
                }}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>{text.sections_content.contactInfo.title}</h3>
          <p style={sectionDescStyle}>{text.sections_content.contactInfo.description}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing.lg,
          }}>
            <div>
              <label style={labelStyle}>{text.labels.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  ...commonInputStyle,
                  backgroundColor: royalColors.bgRefined,
                  cursor: 'default',
                  color: royalColors.textOfficial,
                }}
              />
              <p style={{
                fontSize: '12px',
                color: royalColors.deepGreen || royalColors.hashemiteGold,
                marginTop: '6px',
              }}>
                ✓ {text.messages.verified}
              </p>
            </div>

            <div>
              <label style={labelStyle}>{text.labels.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder={text.placeholders.phone}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>{text.labels.country}</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>{text.labels.city}</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder={text.placeholders.city}
                style={{
                  ...commonInputStyle,
                  backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                  cursor: isEditing ? 'text' : 'default',
                  color: royalColors.textOfficial,
                }}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>{text.labels.address}</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder={text.placeholders.address}
              style={{
                ...commonInputStyle,
                backgroundColor: isEditing ? 'white' : royalColors.bgRefined,
                cursor: isEditing ? 'text' : 'default',
                color: royalColors.textOfficial,
              }}
            />
          </div>
        </div>

        {/* Communication Preferences Section */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>{text.sections_content.preferences.title}</h3>
          <p style={sectionDescStyle}>{text.sections_content.preferences.description}</p>

          <div style={{ display: 'grid', gap: spacing.md }}>
            {[
              { key: 'newsletter', label: text.labels.newsletter },
              { key: 'eventNotifications', label: text.labels.eventNotifications },
              { key: 'donationReceipts', label: text.labels.donationReceipts },
              { key: 'monthlyReport', label: text.labels.monthlyReport },
              { key: 'impactUpdates', label: text.labels.impactUpdates },
            ].map((pref) => (
              <label key={pref.key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.md,
                cursor: isEditing ? 'pointer' : 'default',
                padding: '12px',
                borderRadius: borderRadius.md,
                backgroundColor: royalColors.bgRefined,
                border: `1px solid transparent`,
                transition: transitions.base,
              }}
              onMouseEnter={(e) => {
                if (isEditing) {
                  e.currentTarget.style.borderColor = royalColors.hashemiteGold;
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.backgroundColor = royalColors.bgRefined;
              }}>
                <input
                  type="checkbox"
                  name={pref.key}
                  checked={formData[pref.key as keyof FormData] as boolean}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    cursor: isEditing ? 'pointer' : 'default',
                    width: '18px',
                    height: '18px',
                  }}
                />
                <span style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  fontWeight: '500',
                }}>
                  {pref.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Account Activity Section */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>{text.sections_content.activity.title}</h3>
          <p style={sectionDescStyle}>{text.sections_content.activity.description}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
          }}>
            <div style={{
              padding: spacing.lg,
              backgroundColor: royalColors.bgRefined,
              borderRadius: borderRadius.md,
              border: `1px solid ${royalColors.borderSubtle}`,
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: royalColors.textSecondary,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}>
                {text.labels.joinDate}
              </div>
              <div style={{
                fontSize: '16px',
                color: royalColors.textOfficial,
                fontWeight: '500',
              }}>
                {mockUserData.joinDate}
              </div>
            </div>

            <div style={{
              padding: spacing.lg,
              backgroundColor: royalColors.bgRefined,
              borderRadius: borderRadius.md,
              border: `1px solid ${royalColors.borderSubtle}`,
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: royalColors.textSecondary,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}>
                {text.labels.lastLogin}
              </div>
              <div style={{
                fontSize: '16px',
                color: royalColors.textOfficial,
                fontWeight: '500',
              }}>
                {mockUserData.lastLogin}
              </div>
            </div>
          </div>

          <div style={{
            marginTop: spacing.xxl,
            paddingTop: spacing.xxl,
            borderTop: `1px solid ${royalColors.borderSubtle}`,
          }}>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: royalColors.textOfficial,
              marginBottom: spacing.lg,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Account Actions
            </h4>
            <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
              <button
                style={{
                  ...secondaryButtonStyle,
                  padding: '12px 24px',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                🔐 {text.buttons.changePassword}
              </button>
              <button
                style={{
                  ...secondaryButtonStyle,
                  padding: '12px 24px',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = royalColors.bgRefined;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                💾 {text.buttons.downloadData}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing && (
          <div style={buttonContainerStyle}>
            <button
              onClick={handleSave}
              style={{
                ...primaryButtonStyle,
                padding: '14px 32px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#5e35b1';
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#4a148c';
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              ✓ {text.buttons.save}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                ...secondaryButtonStyle,
                padding: '14px 32px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = royalColors.bgRefined;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
            >
              ✕ {text.buttons.cancel}
            </button>
          </div>
        )}

        {/* Back Link */}
        <div style={{ marginTop: spacing.xxxl, textAlign: ar ? 'right' : 'left' }}>
          <Link href={`/${locale}/account`} style={{
            fontSize: '14px',
            color: royalColors.deepRoyal,
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            borderRadius: borderRadius.md,
            transition: transitions.base,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.bgRefined;
            e.currentTarget.style.color = royalColors.deepRoyal;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = royalColors.deepRoyal;
          }}>
            ← {text.buttons.backToAccount}
          </Link>
        </div>
      </section>
    </div>
  );
}
