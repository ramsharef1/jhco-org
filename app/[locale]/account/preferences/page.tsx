'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, componentStyles } from '@/lib/royalDesign';
import Link from 'next/link';
import { useState } from 'react';

const content = {
  en: {
    title: 'Communication Preferences',
    subtitle: 'Manage how we contact you',
    backButton: 'Back to Account',
    saveButton: 'Save Preferences',
    savingButton: 'Saving...',
    successMessage: 'Your preferences have been saved successfully.',
    sections: {
      email: {
        title: 'Email Communications',
        description: 'Choose which emails you would like to receive',
        options: [
          { id: 'newsletter', label: 'Newsletter', desc: 'Monthly updates on our programs and impact' },
          { id: 'campaigns', label: 'Campaign Updates', desc: 'Information about specific fundraising campaigns' },
          { id: 'events', label: 'Event Invitations', desc: 'Invitations to webinars, conferences, and special events' },
          { id: 'reports', label: 'Annual Reports', desc: 'Year-end impact reports and financial updates' },
          { id: 'volunteer', label: 'Volunteer Opportunities', desc: 'Information about volunteering with JHCO' },
          { id: 'transactional', label: 'Transactional Emails', desc: 'Donation receipts, account updates, and important notices (required)' },
        ],
      },
      phone: {
        title: 'Phone & SMS Communications',
        description: 'How you would like us to reach you by phone',
        options: [
          { id: 'sms', label: 'Text Messages', desc: 'Important updates and campaign alerts' },
          { id: 'calls', label: 'Phone Calls', desc: 'Occasional calls regarding major campaigns or emergencies' },
        ],
      },
      frequency: {
        title: 'Communication Frequency',
        description: 'Control how often you hear from us',
        label: 'Preferred contact frequency',
        options: [
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'quarterly', label: 'Quarterly' },
          { value: 'asneeded', label: 'As Needed Only' },
        ],
      },
      language: {
        title: 'Preferred Language',
        description: 'Select your preferred language for communications',
        label: 'Language preference',
        options: [
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية (Arabic)' },
        ],
      },
      methods: {
        title: 'Preferred Contact Methods',
        description: 'Rank your preferred methods of contact',
        label: 'Primary contact method',
        options: [
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'sms', label: 'SMS/Text Message' },
        ],
      },
    },
    privacy: {
      title: 'Privacy Notice',
      text: 'Your communication preferences are private and secure. We will never share your contact information with third parties. You can update these preferences at any time.',
    },
  },
  ar: {
    title: 'تفضيلات الاتصال',
    subtitle: 'إدارة كيف نتصل بك',
    backButton: 'العودة إلى الحساب',
    saveButton: 'حفظ التفضيلات',
    savingButton: 'جاري الحفظ...',
    successMessage: 'تم حفظ تفضيلاتك بنجاح.',
    sections: {
      email: {
        title: 'رسائل البريد الإلكتروني',
        description: 'اختر الرسائل البريدية التي تود استقبالها',
        options: [
          { id: 'newsletter', label: 'النشرة الإخبارية', desc: 'التحديثات الشهرية حول برامجنا وتأثيرنا' },
          { id: 'campaigns', label: 'تحديثات الحملات', desc: 'معلومات حول حملات جمع التبرعات المحددة' },
          { id: 'events', label: 'دعوات الأحداث', desc: 'دعوات إلى الندوات والمؤتمرات والأحداث الخاصة' },
          { id: 'reports', label: 'التقارير السنوية', desc: 'تقارير التأثير في نهاية العام والتحديثات المالية' },
          { id: 'volunteer', label: 'فرص التطوع', desc: 'معلومات حول التطوع مع الهيئة الخيرية الملكية' },
          { id: 'transactional', label: 'رسائل المعاملات', desc: 'إيصالات التبرعات وتحديثات الحساب والإشعارات المهمة (مطلوب)' },
        ],
      },
      phone: {
        title: 'الاتصالات الهاتفية والرسائل النصية',
        description: 'كيف تود أن نتصل بك عبر الهاتف',
        options: [
          { id: 'sms', label: 'الرسائل النصية', desc: 'التحديثات المهمة وتنبيهات الحملات' },
          { id: 'calls', label: 'المكالمات الهاتفية', desc: 'مكالمات عرضية بشأن الحملات الكبرى أو حالات الطوارئ' },
        ],
      },
      frequency: {
        title: 'تكرار الاتصالات',
        description: 'تحكم في عدد المرات التي تسمع منا فيها',
        label: 'تكرار الاتصال المفضل',
        options: [
          { value: 'daily', label: 'يومياً' },
          { value: 'weekly', label: 'أسبوعياً' },
          { value: 'monthly', label: 'شهرياً' },
          { value: 'quarterly', label: 'ربع سنة' },
          { value: 'asneeded', label: 'عند الحاجة فقط' },
        ],
      },
      language: {
        title: 'اللغة المفضلة',
        description: 'اختر لغتك المفضلة للاتصالات',
        label: 'تفضيل اللغة',
        options: [
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية' },
        ],
      },
      methods: {
        title: 'طرق الاتصال المفضلة',
        description: 'صنف طرق الاتصال المفضلة لديك',
        label: 'طريقة الاتصال الأساسية',
        options: [
          { value: 'email', label: 'البريد الإلكتروني' },
          { value: 'phone', label: 'الهاتف' },
          { value: 'sms', label: 'الرسائل النصية' },
        ],
      },
    },
    privacy: {
      title: 'إشعار الخصوصية',
      text: 'تفضيلات الاتصال الخاصة بك خاصة وآمنة. لن نشارك معلومات الاتصال الخاصة بك مع أطراف ثالثة. يمكنك تحديث هذه التفضيلات في أي وقت.',
    },
  },
};

interface PreferencesState {
  email: {
    [key: string]: boolean;
  };
  phone: {
    [key: string]: boolean;
  };
  frequency: string;
  language: string;
  method: string;
}

export default function PreferencesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  const [preferences, setPreferences] = useState<PreferencesState>({
    email: {
      newsletter: true,
      campaigns: true,
      events: false,
      reports: true,
      volunteer: false,
      transactional: true,
    },
    phone: {
      sms: false,
      calls: false,
    },
    frequency: 'monthly',
    language: locale,
    method: 'email',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailToggle = (id: string) => {
    if (id === 'transactional') return; // Prevent disabling transactional
    setPreferences({
      ...preferences,
      email: {
        ...preferences.email,
        [id]: !preferences.email[id],
      },
    });
  };

  const handlePhoneToggle = (id: string) => {
    setPreferences({
      ...preferences,
      phone: {
        ...preferences.phone,
        [id]: !preferences.phone[id],
      },
    });
  };

  const handleFrequencyChange = (value: string) => {
    setPreferences({ ...preferences, frequency: value });
  };

  const handleLanguageChange = (value: string) => {
    setPreferences({ ...preferences, language: value });
  };

  const handleMethodChange = (value: string) => {
    setPreferences({ ...preferences, method: value });
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Header Section */}
      <section style={{ background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`, color: 'white', padding: '60px 32px', textAlign: 'center' }}>
        <Link href="/account" style={{ display: 'inline-block', marginBottom: '24px', color: royalColors.hashemiteGold, textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '0.5px' }}>
          ← {text.backButton}
        </Link>
        <h1 style={{ fontSize: '48px', marginBottom: '12px', fontFamily: 'serif', margin: '0 0 12px 0' }}>{text.title}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, margin: 0 }}>{text.subtitle}</p>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(27, 67, 50, 0.95) 0%, rgba(13, 115, 119, 0.95) 100%)',
          color: 'white',
          padding: '16px 32px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 500,
          borderBottom: `2px solid ${royalColors.hashemiteGold}`,
        }}>
          ✓ {text.successMessage}
        </div>
      )}

      {/* Main Content */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 32px' }}>
        {/* Email Preferences */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          backgroundColor: 'white',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: '28px', color: royalColors.deepRoyal, marginTop: 0, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
            {text.sections.email.title}
          </h2>
          <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '24px' }}>{text.sections.email.description}</p>

          <div style={{ display: 'grid', gap: '16px' }}>
            {text.sections.email.options.map((option) => (
              <label key={option.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px',
                cursor: option.id === 'transactional' ? 'not-allowed' : 'pointer',
                borderRadius: '4px',
                transition: 'background-color 200ms ease',
                backgroundColor: preferences.email[option.id] ? 'rgba(74, 20, 140, 0.04)' : 'transparent',
                opacity: option.id === 'transactional' ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (option.id !== 'transactional') {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = preferences.email[option.id] ? 'rgba(74, 20, 140, 0.04)' : 'transparent';
              }}>
                <input
                  type="checkbox"
                  checked={preferences.email[option.id]}
                  onChange={() => handleEmailToggle(option.id)}
                  disabled={option.id === 'transactional'}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: option.id === 'transactional' ? 'not-allowed' : 'pointer',
                    accentColor: royalColors.deepRoyal,
                  }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: '2px' }}>
                    {option.label}
                    {option.id === 'transactional' && <span style={{ fontSize: '12px', color: royalColors.textSecondary }}> (Required)</span>}
                  </div>
                  <div style={{ fontSize: '13px', color: royalColors.textSecondary }}>{option.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Phone Preferences */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          backgroundColor: 'white',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: '28px', color: royalColors.deepRoyal, marginTop: 0, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
            {text.sections.phone.title}
          </h2>
          <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '24px' }}>{text.sections.phone.description}</p>

          <div style={{ display: 'grid', gap: '16px' }}>
            {text.sections.phone.options.map((option) => (
              <label key={option.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'background-color 200ms ease',
                backgroundColor: preferences.phone[option.id] ? 'rgba(74, 20, 140, 0.04)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = preferences.phone[option.id] ? 'rgba(74, 20, 140, 0.04)' : 'transparent';
              }}>
                <input
                  type="checkbox"
                  checked={preferences.phone[option.id]}
                  onChange={() => handlePhoneToggle(option.id)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer',
                    accentColor: royalColors.deepRoyal,
                  }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: '2px' }}>
                    {option.label}
                  </div>
                  <div style={{ fontSize: '13px', color: royalColors.textSecondary }}>{option.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Communication Frequency */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          backgroundColor: 'white',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: '28px', color: royalColors.deepRoyal, marginTop: 0, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
            {text.sections.frequency.title}
          </h2>
          <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '24px' }}>{text.sections.frequency.description}</p>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: '12px' }}>
              {text.sections.frequency.label}
            </label>
            <select
              value={preferences.frequency}
              onChange={(e) => handleFrequencyChange(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                color: royalColors.darkNavy,
                backgroundColor: 'white',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'border-color 200ms ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = royalColors.deepRoyal;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = royalColors.borderFormal;
              }}>
              {text.sections.frequency.options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Language Preference */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          backgroundColor: 'white',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: '28px', color: royalColors.deepRoyal, marginTop: 0, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
            {text.sections.language.title}
          </h2>
          <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '24px' }}>{text.sections.language.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {text.sections.language.options.map((opt) => (
              <label key={opt.value} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                cursor: 'pointer',
                border: `2px solid ${preferences.language === opt.value ? royalColors.deepRoyal : royalColors.borderFormal}`,
                borderRadius: '4px',
                backgroundColor: preferences.language === opt.value ? 'rgba(74, 20, 140, 0.04)' : 'white',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                if (preferences.language !== opt.value) {
                  e.currentTarget.style.borderColor = royalColors.deepRoyal;
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (preferences.language !== opt.value) {
                  e.currentTarget.style.borderColor = royalColors.borderFormal;
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}>
                <input
                  type="radio"
                  name="language"
                  value={opt.value}
                  checked={preferences.language === opt.value}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  style={{ cursor: 'pointer', accentColor: royalColors.deepRoyal }}
                />
                <span style={{ fontSize: '14px', fontWeight: 500, color: royalColors.darkNavy }}>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div style={{
          marginBottom: '48px',
          padding: '32px',
          backgroundColor: 'white',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: '28px', color: royalColors.deepRoyal, marginTop: 0, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
            {text.sections.methods.title}
          </h2>
          <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '24px' }}>{text.sections.methods.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {text.sections.methods.options.map((opt) => (
              <label key={opt.value} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                cursor: 'pointer',
                border: `2px solid ${preferences.method === opt.value ? royalColors.deepRoyal : royalColors.borderFormal}`,
                borderRadius: '4px',
                backgroundColor: preferences.method === opt.value ? 'rgba(74, 20, 140, 0.04)' : 'white',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                if (preferences.method !== opt.value) {
                  e.currentTarget.style.borderColor = royalColors.deepRoyal;
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (preferences.method !== opt.value) {
                  e.currentTarget.style.borderColor = royalColors.borderFormal;
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}>
                <input
                  type="radio"
                  name="method"
                  value={opt.value}
                  checked={preferences.method === opt.value}
                  onChange={(e) => handleMethodChange(e.target.value)}
                  style={{ cursor: 'pointer', accentColor: royalColors.deepRoyal }}
                />
                <span style={{ fontSize: '14px', fontWeight: 500, color: royalColors.darkNavy }}>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div style={{
          marginBottom: '48px',
          padding: '24px',
          backgroundColor: 'rgba(212, 175, 55, 0.08)',
          border: `1px solid ${royalColors.borderFormal}`,
          borderRadius: '4px',
          borderLeft: `4px solid ${royalColors.hashemiteGold}`,
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: royalColors.darkNavy, marginTop: 0, marginBottom: '8px' }}>
            {text.privacy.title}
          </h3>
          <p style={{ fontSize: '13px', color: royalColors.textSecondary, margin: 0 }}>{text.privacy.text}</p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: ar ? 'flex-end' : 'flex-start',
          flexDirection: ar ? 'row-reverse' : 'row',
        }}>
          <button
            onClick={handleSave}
            disabled={isSaving}
            style={{
              padding: '14px 40px',
              backgroundColor: isSaving ? 'rgba(74, 20, 140, 0.6)' : royalColors.deepRoyal,
              color: royalColors.hashemiteGold,
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              cursor: isSaving ? 'not-allowed' : 'pointer',
              transition: 'all 200ms ease',
              boxShadow: '0 4px 12px rgba(74, 20, 140, 0.2)',
            }}
            onMouseEnter={(e) => {
              if (!isSaving) {
                e.currentTarget.style.backgroundColor = '#5e35b1';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 20, 140, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSaving) {
                e.currentTarget.style.backgroundColor = royalColors.deepRoyal;
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 20, 140, 0.2)';
              }
            }}>
            {isSaving ? text.savingButton : text.saveButton}
          </button>

          <Link href="/account" style={{
            padding: '14px 40px',
            backgroundColor: 'transparent',
            color: royalColors.darkNavy,
            border: `2px solid ${royalColors.hashemiteGold}`,
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}>
            Cancel
          </Link>
        </div>
      </section>
    </div>
  );
}
