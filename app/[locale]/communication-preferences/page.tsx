'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

type PreferenceCategory = 'email' | 'notifications' | 'marketing' | 'frequency';

interface Preference {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface PreferenceGroup {
  category: PreferenceCategory;
  title: string;
  subtitle: string;
  preferences: Preference[];
}

const content = {
  en: {
    title: 'Communication Preferences',
    subtitle: 'Manage how you receive updates from JHCO',
    lastUpdated: 'Last updated',
    saveChanges: 'Save Changes',
    preferencesSaved: 'Your preferences have been saved successfully.',
    backToAccount: 'Back to Account',
    categories: {
      email: {
        title: 'Email Communications',
        subtitle: 'Choose what emails you would like to receive',
        preferences: [
          {
            id: 'newsletters',
            label: 'Newsletter Emails',
            description: 'Receive our monthly newsletter with updates on programs and impact',
            enabled: true,
          },
          {
            id: 'fundraising',
            label: 'Fundraising Campaigns',
            description: 'Updates about active campaigns and fundraising opportunities',
            enabled: true,
          },
          {
            id: 'events',
            label: 'Event Invitations',
            description: 'Notifications about upcoming events and webinars',
            enabled: true,
          },
          {
            id: 'volunteer',
            label: 'Volunteer Opportunities',
            description: 'Opportunities to volunteer and contribute your time',
            enabled: false,
          },
        ],
      },
      notifications: {
        title: 'Push Notifications',
        subtitle: 'Receive real-time updates on important matters',
        preferences: [
          {
            id: 'urgent',
            label: 'Urgent Alerts',
            description: 'Critical updates that need immediate attention',
            enabled: true,
          },
          {
            id: 'updates',
            label: 'Program Updates',
            description: 'Updates on programs you are following or involved with',
            enabled: true,
          },
          {
            id: 'impact',
            label: 'Impact Reports',
            description: 'Stories and reports about our work and impact',
            enabled: false,
          },
        ],
      },
      marketing: {
        title: 'Marketing & Promotions',
        subtitle: 'Control marketing and promotional content',
        preferences: [
          {
            id: 'promotional',
            label: 'Promotional Offers',
            description: 'Special offers and campaigns',
            enabled: false,
          },
          {
            id: 'research',
            label: 'Research & Surveys',
            description: 'Invitations to participate in surveys and research',
            enabled: false,
          },
          {
            id: 'partners',
            label: 'Partner Updates',
            description: 'Information about our partner organizations',
            enabled: true,
          },
        ],
      },
      frequency: {
        title: 'Communication Frequency',
        subtitle: 'How often would you like to hear from us',
        preferences: [
          {
            id: 'daily',
            label: 'Daily Digest',
            description: 'Receive consolidated updates once daily',
            enabled: false,
          },
          {
            id: 'weekly',
            label: 'Weekly Digest',
            description: 'Receive consolidated updates once weekly',
            enabled: true,
          },
          {
            id: 'monthly',
            label: 'Monthly Digest',
            description: 'Receive consolidated updates once monthly',
            enabled: false,
          },
        ],
      },
    },
  },
  ar: {
    title: 'تفضيلات التواصل',
    subtitle: 'إدارة كيفية استقبالك للتحديثات من JHCO',
    lastUpdated: 'آخر تحديث',
    saveChanges: 'حفظ التغييرات',
    preferencesSaved: 'تم حفظ تفضيلاتك بنجاح.',
    backToAccount: 'العودة إلى الحساب',
    categories: {
      email: {
        title: 'اتصالات البريد الإلكتروني',
        subtitle: 'اختر رسائل البريد الإلكتروني التي تريد استقبالها',
        preferences: [
          {
            id: 'newsletters',
            label: 'رسائل النشرة الإخبارية',
            description: 'احصل على نشرتنا الشهرية مع تحديثات حول البرامج والتأثير',
            enabled: true,
          },
          {
            id: 'fundraising',
            label: 'حملات جمع التبرعات',
            description: 'تحديثات عن الحملات النشطة وفرص جمع التبرعات',
            enabled: true,
          },
          {
            id: 'events',
            label: 'دعوات الأحداث',
            description: 'إخطارات حول الأحداث والندوات القادمة',
            enabled: true,
          },
          {
            id: 'volunteer',
            label: 'فرص التطوع',
            description: 'فرص للتطوع والمساهمة بوقتك',
            enabled: false,
          },
        ],
      },
      notifications: {
        title: 'الإشعارات الفورية',
        subtitle: 'احصل على تحديثات فورية حول الأمور المهمة',
        preferences: [
          {
            id: 'urgent',
            label: 'التنبيهات العاجلة',
            description: 'التحديثات الحرجة التي تحتاج اهتمام فوري',
            enabled: true,
          },
          {
            id: 'updates',
            label: 'تحديثات البرامج',
            description: 'تحديثات عن البرامج التي تتابعها أو تشارك فيها',
            enabled: true,
          },
          {
            id: 'impact',
            label: 'تقارير التأثير',
            description: 'قصص وتقارير عن عملنا والتأثير الذي نحدثه',
            enabled: false,
          },
        ],
      },
      marketing: {
        title: 'التسويق والعروض الترويجية',
        subtitle: 'التحكم في المحتوى التسويقي والعروس الترويجية',
        preferences: [
          {
            id: 'promotional',
            label: 'العروض الترويجية',
            description: 'عروض خاصة وحملات',
            enabled: false,
          },
          {
            id: 'research',
            label: 'الأبحاث والاستطلاعات',
            description: 'دعوات للمشاركة في الاستطلاعات والأبحاث',
            enabled: false,
          },
          {
            id: 'partners',
            label: 'تحديثات الشركاء',
            description: 'معلومات عن منظمات الشركاء لدينا',
            enabled: true,
          },
        ],
      },
      frequency: {
        title: 'تكرار التواصل',
        subtitle: 'كم مرة تود أن تسمع منا',
        preferences: [
          {
            id: 'daily',
            label: 'ملخص يومي',
            description: 'احصل على تحديثات موحدة مرة واحدة يومياً',
            enabled: false,
          },
          {
            id: 'weekly',
            label: 'ملخص أسبوعي',
            description: 'احصل على تحديثات موحدة مرة واحدة أسبوعياً',
            enabled: true,
          },
          {
            id: 'monthly',
            label: 'ملخص شهري',
            description: 'احصل على تحديثات موحدة مرة واحدة شهرياً',
            enabled: false,
          },
        ],
      },
    },
  },
};

export default function CommunicationPreferencesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  const initialPreferences = {
    email: text.categories.email.preferences,
    notifications: text.categories.notifications.preferences,
    marketing: text.categories.marketing.preferences,
    frequency: text.categories.frequency.preferences,
  };

  const [preferences, setPreferences] = useState(initialPreferences);
  const [saved, setSaved] = useState(false);

  const handleToggle = (
    category: PreferenceCategory,
    preferenceId: string
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: prev[category].map((pref) =>
        pref.id === preferenceId ? { ...pref, enabled: !pref.enabled } : pref
      ),
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // Here you would typically send this to your backend
    console.log('Saving preferences:', preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const categories: PreferenceCategory[] = ['email', 'notifications', 'marketing', 'frequency'];

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: 'white',
          padding: '80px 32px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontFamily: 'serif' }}>
          {text.title}
        </h1>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '24px' }}>
          {text.subtitle}
        </p>
      </section>

      {/* Main Content */}
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '60px 32px',
        }}
      >
        {/* Success Message */}
        {saved && (
          <div
            style={{
              marginBottom: '32px',
              padding: '16px 20px',
              backgroundColor: '#e8f5e9',
              borderLeft: `4px solid ${royalColors.impactGreen}`,
              borderRadius: '4px',
              color: royalColors.impactGreen,
              fontWeight: 500,
            }}
          >
            ✓ {text.preferencesSaved}
          </div>
        )}

        {/* Preference Sections */}
        {categories.map((categoryKey) => {
          const category = text.categories[categoryKey];
          return (
            <div
              key={categoryKey}
              style={{
                marginBottom: '48px',
                paddingBottom: '48px',
                borderBottom: `1px solid ${royalColors.borderSubtle}`,
              }}
            >
              {/* Category Header */}
              <div style={{ marginBottom: '32px' }}>
                <h2
                  style={{
                    fontSize: '28px',
                    color: royalColors.deepRoyal,
                    marginBottom: '8px',
                    fontFamily: 'serif',
                  }}
                >
                  {category.title}
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: royalColors.textSecondary,
                  }}
                >
                  {category.subtitle}
                </p>
              </div>

              {/* Preferences Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {preferences[categoryKey as PreferenceCategory].map((pref) => (
                  <div
                    key={pref.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '20px',
                      backgroundColor: royalColors.bgRefined,
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.borderSubtle}`,
                      transition: 'all 250ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.ivyBg;
                      e.currentTarget.style.borderColor = royalColors.borderFormal;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.bgRefined;
                      e.currentTarget.style.borderColor = royalColors.borderSubtle;
                    }}
                  >
                    {/* Toggle Switch */}
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginRight: ar ? 0 : '20px',
                        marginLeft: ar ? '20px' : 0,
                        flex: '0 0 auto',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={pref.enabled}
                        onChange={() =>
                          handleToggle(categoryKey as PreferenceCategory, pref.id)
                        }
                        style={{
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          accentColor: royalColors.hashemiteGold,
                        }}
                      />
                    </label>

                    {/* Text Content */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: royalColors.textOfficial,
                          marginBottom: '6px',
                          margin: 0,
                        }}
                      >
                        {pref.label}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: royalColors.textSecondary,
                          margin: '6px 0 0 0',
                        }}
                      >
                        {pref.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '48px',
            flexDirection: ar ? 'row-reverse' : 'row',
          }}
        >
          <button
            onClick={handleSave}
            style={{
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.darkNavy,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 250ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.goldBright;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {text.saveChanges}
          </button>

          <Link
            href="/account"
            style={{
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              color: royalColors.deepRoyal,
              border: `2px solid ${royalColors.deepRoyal}`,
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 250ms ease',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.backgroundColor = royalColors.deepRoyal;
              target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.backgroundColor = 'transparent';
              target.style.color = royalColors.deepRoyal;
            }}
          >
            {text.backToAccount}
          </Link>
        </div>

        {/* Last Updated Info */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: `1px solid ${royalColors.borderSubtle}`,
            textAlign: 'center',
            fontSize: '12px',
            color: royalColors.textSecondary,
          }}
        >
          {text.lastUpdated}: {new Date().toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
        </div>
      </section>
    </div>
  );
}
