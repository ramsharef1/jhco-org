'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const emergencyAlertsContent = {
  en: {
    title: 'Emergency Alerts',
    heroTitle: 'Critical Updates When You Need Them',
    heroSubtitle: 'Stay informed about urgent humanitarian crises and emergency response operations. Receive real-time notifications through your preferred channels.',
    heroIcon: '🚨',

    subscribeSection: 'Subscribe to Emergency Alerts',
    subscribeDescription: 'Get immediate notifications about crisis situations, emergency responses, and critical humanitarian needs. Choose how and how often you want to be notified.',

    alertChannelsSection: 'Alert Delivery Methods',
    alertChannelsDescription: 'Select how you want to receive emergency alerts:',

    emailAlert: 'Email Alerts',
    emailAlertDesc: 'Detailed updates sent to your inbox',

    smsAlert: 'SMS Text Messages',
    smsAlertDesc: 'Instant notifications via text (fastest)',

    pushAlert: 'Push Notifications',
    pushAlertDesc: 'Browser notifications when you\'re online',

    frequencySection: 'Notification Frequency',
    frequencyDescription: 'Choose how often you\'d like to receive updates:',

    frequencyReal: 'Real-Time',
    frequencyRealDesc: 'Immediate notification of all critical alerts',

    frequencyDaily: 'Daily Digest',
    frequencyDailyDesc: 'One consolidated email/SMS daily at 8 AM',

    frequencyWeekly: 'Weekly Summary',
    frequencyWeeklyDesc: 'Weekly digest of all emergency alerts',

    frequencyCustom: 'Custom Schedule',
    frequencyCustomDesc: 'Set your own notification preferences',

    updateShowcaseSection: 'Recent Emergency Updates',
    updateShowcaseDescription: 'Here are the latest crisis alerts and emergency responses:',

    archiveSection: 'Emergency Alerts Archive',
    archiveDescription: 'Browse past alerts and emergency responses to understand our rapid response capabilities.',

    emailPlaceholder: 'Enter your email address',
    phonePlaceholder: 'Enter your phone number (for SMS)',
    subscribe: 'Enable Alerts',
    subscribing: 'Enabling...',
    unsubscribe: 'Manage Subscriptions',

    privacyNote: 'Your information is secure. You can unsubscribe or modify preferences at any time.',

    // Sample emergency alerts for archive
    emergencyAlerts: [
      {
        date: 'August 1, 2024',
        type: 'Flooding Crisis',
        location: 'Southeast Asia',
        status: 'Active Response',
        description: 'Emergency medical teams deployed. 10,000+ affected. Food and water distribution ongoing.',
        impact: '10,000+ families affected',
      },
      {
        date: 'July 28, 2024',
        type: 'Earthquake Response',
        location: 'Middle East',
        status: 'Ongoing',
        description: 'Coordinating shelter, medical care, and emergency supplies. Partnership with local authorities.',
        impact: '5,000+ families assisted',
      },
      {
        date: 'July 20, 2024',
        type: 'Healthcare Emergency',
        location: 'East Africa',
        status: 'Active Response',
        description: 'Disease outbreak containment. Medical staff deployed to 15 clinics. Vaccination campaign initiated.',
        impact: '50,000+ screened',
      },
      {
        date: 'July 10, 2024',
        type: 'Conflict Response',
        location: 'Central Africa',
        status: 'Ongoing',
        description: 'Humanitarian corridor established. Food, water, and medical supplies reaching displaced populations.',
        impact: '25,000+ people reached',
      },
      {
        date: 'June 28, 2024',
        type: 'Drought & Food Security',
        location: 'Horn of Africa',
        status: 'Ongoing',
        description: 'Emergency food assistance program launched. Water trucking to remote communities.',
        impact: '15,000+ people supported',
      },
      {
        date: 'June 15, 2024',
        type: 'Emergency Shelter',
        location: 'South Asia',
        status: 'Completed',
        description: 'Provided emergency shelter to 8,000 families. Transitioned to longer-term housing support.',
        impact: '8,000+ families sheltered',
      },
    ],

    recentUpdates: [
      {
        date: 'Today',
        title: 'Flash Flood Alert - Southeast Asia',
        severity: 'Critical',
        description: 'Severe flooding reported in 3 provinces. JHCO teams mobilizing emergency response.',
      },
      {
        date: 'Yesterday',
        title: 'Medical Supply Delivery Completed',
        severity: 'Update',
        description: '5,000 units of medical supplies delivered to partner clinics in affected regions.',
      },
      {
        date: '2 days ago',
        title: 'Humanitarian Corridor Established',
        severity: 'Update',
        description: 'New access route opened for food and water distribution to isolated areas.',
      },
    ],
  },
  ar: {
    title: 'الإنذارات الطارئة',
    heroTitle: 'تحديثات حرجة عندما تكون في أمس الحاجة إليها',
    heroSubtitle: 'ابقَ على اطلاع بالأزمات الإنسانية العاجلة وعمليات الاستجابة للطوارئ. احصل على إخطارات فورية عبر قنوات اختيارك.',
    heroIcon: '🚨',

    subscribeSection: 'الاشتراك في الإنذارات الطارئة',
    subscribeDescription: 'احصل على إخطارات فورية حول حالات الأزمات والاستجابة للطوارئ والاحتياجات الإنسانية الحرجة. اختر كيفية ومتى تريد تلقي الإخطارات.',

    alertChannelsSection: 'طرق تسليم الإنذارات',
    alertChannelsDescription: 'اختر كيفية تلقيك للإنذارات الطارئة:',

    emailAlert: 'تنبيهات البريد الإلكتروني',
    emailAlertDesc: 'تحديثات مفصلة إلى صندوق البريد الخاص بك',

    smsAlert: 'رسائل نصية SMS',
    smsAlertDesc: 'إخطارات فورية عبر الرسائل النصية (الأسرع)',

    pushAlert: 'إخطارات الدفع',
    pushAlertDesc: 'إخطارات المتصفح عندما تكون متصلاً',

    frequencySection: 'تكرار الإخطارات',
    frequencyDescription: 'اختر عدد مرات استقبال التحديثات:',

    frequencyReal: 'فوري',
    frequencyRealDesc: 'إخطار فوري بجميع الإنذارات الحرجة',

    frequencyDaily: 'ملخص يومي',
    frequencyDailyDesc: 'بريد إلكتروني/رسالة نصية موحدة يومياً الساعة 8 صباحاً',

    frequencyWeekly: 'ملخص أسبوعي',
    frequencyWeeklyDesc: 'ملخص أسبوعي لجميع الإنذارات الطارئة',

    frequencyCustom: 'جدول مخصص',
    frequencyCustomDesc: 'اضبط تفضيلات الإخطارات الخاصة بك',

    updateShowcaseSection: 'آخر تحديثات الطوارئ',
    updateShowcaseDescription: 'إليك آخر الإنذارات والاستجابات للأزمات:',

    archiveSection: 'أرشيف الإنذارات الطارئة',
    archiveDescription: 'تصفح الإنذارات السابقة والاستجابات للطوارئ لفهم قدراتنا على الاستجابة السريعة.',

    emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
    phonePlaceholder: 'أدخل رقم هاتفك (للرسائل النصية)',
    subscribe: 'تفعيل الإنذارات',
    subscribing: 'جاري التفعيل...',
    unsubscribe: 'إدارة الاشتراكات',

    privacyNote: 'معلوماتك آمنة. يمكنك إلغاء الاشتراك أو تعديل التفضيلات في أي وقت.',

    // Sample emergency alerts for archive
    emergencyAlerts: [
      {
        date: '1 أغسطس 2024',
        type: 'أزمة الفيضانات',
        location: 'جنوب شرق آسيا',
        status: 'استجابة نشطة',
        description: 'فرق طبية طارئة منتشرة. 10,000+ متأثرين. توزيع الغذاء والمياه مستمر.',
        impact: '10,000+ أسرة متأثرة',
      },
      {
        date: '28 يوليو 2024',
        type: 'استجابة الزلزال',
        location: 'الشرق الأوسط',
        status: 'مستمر',
        description: 'تنسيق المأوى والرعاية الطبية والإمدادات الطارئة. الشراكة مع السلطات المحلية.',
        impact: '5,000+ أسرة مساعدة',
      },
      {
        date: '20 يوليو 2024',
        type: 'حالة طارئة صحية',
        location: 'شرق أفريقيا',
        status: 'استجابة نشطة',
        description: 'احتواء الأمراض المعدية. نشر الموظفين الطبيين في 15 عيادة. بدء حملة التطعيم.',
        impact: '50,000+ تم فحصهم',
      },
      {
        date: '10 يوليو 2024',
        type: 'استجابة النزاع',
        location: 'وسط أفريقيا',
        status: 'مستمر',
        description: 'ممر إنساني مفتوح. الغذاء والمياه والإمدادات الطبية تصل إلى السكان النازحين.',
        impact: '25,000+ شخص تم الوصول إليهم',
      },
      {
        date: '28 يونيو 2024',
        type: 'الجفاف والأمن الغذائي',
        location: 'القرن الأفريقي',
        status: 'مستمر',
        description: 'برنامج مساعدة غذائية طارئة. نقل المياه للمجتمعات النائية.',
        impact: '15,000+ شخص مدعوم',
      },
      {
        date: '15 يونيو 2024',
        type: 'مأوى طارئ',
        location: 'جنوب آسيا',
        status: 'مكتمل',
        description: 'تقديم مأوى طارئ لـ 8,000 أسرة. الانتقال إلى دعم الإسكان طويل الأجل.',
        impact: '8,000+ أسرة في مأوى',
      },
    ],

    recentUpdates: [
      {
        date: 'اليوم',
        title: 'إنذار فيضانات فجائية - جنوب شرق آسيا',
        severity: 'حرج',
        description: 'تم الإبلاغ عن فيضانات شديدة في 3 محافظات. فرق الهيئة في طريقها للاستجابة.',
      },
      {
        date: 'أمس',
        title: 'إكمال تسليم الإمدادات الطبية',
        severity: 'تحديث',
        description: 'تم تسليم 5,000 وحدة من الإمدادات الطبية لعيادات الشركاء في المناطق المتأثرة.',
      },
      {
        date: 'منذ يومين',
        title: 'فتح ممر إنساني',
        severity: 'تحديث',
        description: 'تم فتح مسار وصول جديد لتوزيع الغذاء والمياه على المناطق المعزولة.',
      },
    ],
  },
};

interface FormData {
  email: string;
  phone: string;
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  frequency: 'realtime' | 'daily' | 'weekly' | 'custom';
}

export default function EmergencyAlertsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = emergencyAlertsContent[locale] || emergencyAlertsContent.en;

  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    channels: {
      email: true,
      sms: false,
      push: false,
    },
    frequency: 'realtime',
  });

  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChannelChange = (channel: 'email' | 'sms' | 'push') => {
    setFormData(prev => ({
      ...prev,
      channels: {
        ...prev.channels,
        [channel]: !prev.channels[channel],
      },
    }));
  };

  const handleFrequencyChange = (freq: 'realtime' | 'daily' | 'weekly' | 'custom') => {
    setFormData(prev => ({
      ...prev,
      frequency: freq,
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email && !formData.phone) {
      setSubscribeMessage(ar ? 'يرجى إدخال بريد إلكتروني أو رقم هاتف' : 'Please enter an email or phone number');
      return;
    }

    const selectedChannels = Object.entries(formData.channels)
      .filter(([_, selected]) => selected)
      .map(([channel]) => channel);

    if (selectedChannels.length === 0) {
      setSubscribeMessage(ar ? 'يرجى اختيار طريقة واحدة على الأقل' : 'Please select at least one delivery method');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubscribeMessage(ar ? '✓ تم تفعيل الإنذارات بنجاح!' : '✓ Alerts enabled successfully!');
      setFormData({
        email: '',
        phone: '',
        channels: { email: true, sms: false, push: false },
        frequency: 'realtime',
      });
      setIsSubmitting(false);
      setTimeout(() => setSubscribeMessage(''), 4000);
    }, 1000);
  };

  const getSeverityColor = (severity: string) => {
    if (severity === 'Critical' || severity === 'حرج') return royalColors.charityRed;
    return royalColors.hashemiteGold;
  };

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: gradients.royalPrimary,
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: `0 0 ${spacing.md} 0`,
          }}>
            {content.heroIcon} {ar ? 'إنذارات الطوارئ' : 'EMERGENCY ALERTS'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.md} 0`,
            maxWidth: '800px',
            color: 'white',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: '"Merriweather", Georgia, serif',
            color: royalColors.darkNavy,
            marginBottom: spacing.md,
            fontWeight: '700',
          }}>
            {content.subscribeSection}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            marginBottom: spacing.xl,
            lineHeight: '1.6',
          }}>
            {content.subscribeDescription}
          </p>

          <form onSubmit={handleSubscribe}>
            {/* Contact Information */}
            <div style={{
              background: 'white',
              padding: spacing.xl,
              borderRadius: borderRadius.md,
              marginBottom: spacing.xl,
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.md,
              }}>
                {ar ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr',
                gap: spacing.lg,
                marginBottom: spacing.lg,
              }}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={content.emailPlaceholder}
                  style={{
                    padding: `${spacing.sm} ${spacing.md}`,
                    border: `2px solid ${royalColors.hashemiteGold}`,
                    borderRadius: borderRadius.md,
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    direction: ar ? 'rtl' : 'ltr',
                    textAlign: ar ? 'right' : 'left',
                    background: 'white',
                  }}
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder={content.phonePlaceholder}
                  style={{
                    padding: `${spacing.sm} ${spacing.md}`,
                    border: `2px solid ${royalColors.hashemiteGold}`,
                    borderRadius: borderRadius.md,
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    direction: ar ? 'rtl' : 'ltr',
                    textAlign: ar ? 'right' : 'left',
                    background: 'white',
                  }}
                />
              </div>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: '0',
              }}>
                {ar ? 'إدخال واحد على الأقل مطلوب' : 'At least one field is required'}
              </p>
            </div>

            {/* Alert Channels */}
            <div style={{
              background: 'white',
              padding: spacing.xl,
              borderRadius: borderRadius.md,
              marginBottom: spacing.xl,
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.md,
              }}>
                {content.alertChannelsSection}
              </h3>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
              }}>
                {content.alertChannelsDescription}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr' : '1fr',
                gap: spacing.lg,
              }}>
                {[
                  { key: 'email', label: content.emailAlert, desc: content.emailAlertDesc },
                  { key: 'sms', label: content.smsAlert, desc: content.smsAlertDesc },
                  { key: 'push', label: content.pushAlert, desc: content.pushAlertDesc },
                ].map((channel) => (
                  <label key={channel.key} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: spacing.md,
                    padding: spacing.md,
                    borderRadius: borderRadius.sm,
                    background: '#fafaf9',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    direction: ar ? 'rtl' : 'ltr',
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.channels[channel.key as keyof typeof formData.channels]}
                      onChange={() => handleChannelChange(channel.key as 'email' | 'sms' | 'push')}
                      style={{
                        width: '20px',
                        height: '20px',
                        marginTop: '2px',
                        cursor: 'pointer',
                        accentColor: royalColors.hashemiteGold,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: `0 0 ${spacing.xs} 0`,
                      }}>
                        {channel.label}
                      </p>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textSecondary,
                        margin: '0',
                      }}>
                        {channel.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Frequency Preferences */}
            <div style={{
              background: 'white',
              padding: spacing.xl,
              borderRadius: borderRadius.md,
              marginBottom: spacing.xl,
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.md,
              }}>
                {content.frequencySection}
              </h3>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
              }}>
                {content.frequencyDescription}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr',
                gap: spacing.lg,
              }}>
                {[
                  { key: 'realtime', label: content.frequencyReal, desc: content.frequencyRealDesc },
                  { key: 'daily', label: content.frequencyDaily, desc: content.frequencyDailyDesc },
                  { key: 'weekly', label: content.frequencyWeekly, desc: content.frequencyWeeklyDesc },
                  { key: 'custom', label: content.frequencyCustom, desc: content.frequencyCustomDesc },
                ].map((freq) => (
                  <label key={freq.key} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.md,
                    padding: spacing.md,
                    borderRadius: borderRadius.sm,
                    border: `2px solid ${formData.frequency === freq.key ? royalColors.hashemiteGold : royalColors.borderSubtle}`,
                    background: formData.frequency === freq.key ? '#fffbf0' : '#fafaf9',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    direction: ar ? 'rtl' : 'ltr',
                  }}>
                    <input
                      type="radio"
                      name="frequency"
                      checked={formData.frequency === freq.key}
                      onChange={() => handleFrequencyChange(freq.key as any)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        accentColor: royalColors.hashemiteGold,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: '0',
                      }}>
                        {freq.label}
                      </p>
                      <p style={{
                        fontSize: '12px',
                        color: royalColors.textSecondary,
                        margin: `${spacing.xs} 0 0 0`,
                      }}>
                        {freq.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div style={{
              display: 'flex',
              flexDirection: ar ? 'row-reverse' : 'row',
              gap: spacing.md,
              marginBottom: spacing.lg,
            }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: royalColors.hashemiteGold,
                  color: royalColors.darkNavy,
                  border: 'none',
                  padding: `${spacing.sm} ${spacing.lg}`,
                  borderRadius: borderRadius.md,
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    (e.currentTarget as HTMLElement).style.background = royalColors.hashemiteGold;
                    (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
                  }
                }}
              >
                {isSubmitting ? content.subscribing : content.subscribe}
              </button>
              <Link href={`/${locale}/account`} style={{
                display: 'inline-block',
                color: royalColors.darkNavy,
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                padding: `${spacing.sm} ${spacing.lg}`,
                border: `2px solid ${royalColors.darkNavy}`,
                borderRadius: borderRadius.md,
                transition: 'all 0.3s',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
              }}
              >
                {content.unsubscribe}
              </Link>
            </div>

            {subscribeMessage && (
              <p style={{
                color: subscribeMessage.includes('✓') ? royalColors.impactGreen : royalColors.charityRed,
                fontWeight: '600',
                textAlign: ar ? 'right' : 'left',
                fontSize: '15px',
              }}>
                {subscribeMessage}
              </p>
            )}

            <p style={{
              fontSize: '13px',
              color: royalColors.textSecondary,
              textAlign: ar ? 'right' : 'left',
              marginTop: spacing.lg,
            }}>
              {content.privacyNote}
            </p>
          </form>
        </div>
      </section>

      {/* Recent Updates Showcase */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: '"Merriweather", Georgia, serif',
          color: royalColors.darkNavy,
          marginBottom: spacing.md,
          textAlign: ar ? 'right' : 'left',
          fontWeight: '700',
        }}>
          {content.updateShowcaseSection}
        </h2>
        <p style={{
          fontSize: '16px',
          color: royalColors.textOfficial,
          marginBottom: spacing.xxxl,
          textAlign: ar ? 'right' : 'left',
        }}>
          {content.updateShowcaseDescription}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: spacing.xl,
        }}>
          {content.recentUpdates.map((update, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderRadius: borderRadius.lg,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
              borderLeft: `4px solid ${getSeverityColor(update.severity)}`,
              padding: spacing.lg,
              textAlign: ar ? 'right' : 'left',
              direction: ar ? 'rtl' : 'ltr',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              <p style={{
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: royalColors.textSecondary,
                margin: `0 0 ${spacing.sm} 0`,
              }}>
                {update.date}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing.md, marginBottom: spacing.md }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0',
                  color: royalColors.darkNavy,
                  flex: 1,
                }}>
                  {update.title}
                </h3>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: `${spacing.xs} ${spacing.sm}`,
                  borderRadius: borderRadius.sm,
                  background: getSeverityColor(update.severity) + '15',
                  color: getSeverityColor(update.severity),
                  textTransform: 'uppercase',
                  flexShrink: 0,
                }}>
                  {update.severity}
                </span>
              </div>
              <p style={{
                fontSize: '14px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                margin: '0',
              }}>
                {update.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Alerts Archive */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: '"Merriweather", Georgia, serif',
            color: royalColors.darkNavy,
            marginBottom: spacing.md,
            textAlign: ar ? 'right' : 'left',
            fontWeight: '700',
          }}>
            {content.archiveSection}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            marginBottom: spacing.xxxl,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.archiveDescription}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: spacing.xl,
          }}>
            {content.emergencyAlerts.map((alert, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                border: `1px solid ${royalColors.borderFormal}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
              >
                {/* Header */}
                <div style={{
                  background: gradients.goldToWarm,
                  color: 'white',
                  padding: spacing.lg,
                }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.95)',
                    margin: `0 0 ${spacing.sm} 0`,
                  }}>
                    {alert.date}
                  </p>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    margin: `0 0 ${spacing.sm} 0`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {alert.type}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    margin: '0',
                  }}>
                    📍 {alert.location}
                  </p>
                </div>

                {/* Content */}
                <div style={{
                  padding: spacing.lg,
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: spacing.md,
                    flexDirection: ar ? 'row-reverse' : 'row',
                  }}>
                    <p style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: royalColors.hashemiteGold,
                      margin: '0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {alert.status}
                    </p>
                  </div>

                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    margin: `0 0 ${spacing.md} 0`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {alert.description}
                  </p>

                  <div style={{
                    background: '#f5f1e8',
                    padding: spacing.md,
                    borderRadius: borderRadius.sm,
                    borderLeft: `3px solid ${royalColors.impactGreen}`,
                    direction: ar ? 'rtl' : 'ltr',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      margin: `0 0 ${spacing.xs} 0`,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {ar ? 'التأثير' : 'Impact'}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: royalColors.impactGreen,
                      margin: '0',
                    }}>
                      {alert.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: gradients.goldToWarm,
        color: 'white',
        padding: `${spacing.xxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: '"Merriweather", Georgia, serif',
            margin: `0 0 ${spacing.md} 0`,
            fontWeight: '700',
          }}>
            {ar ? 'كن جاهزاً للاستجابة السريعة' : 'Be Ready to Help'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: spacing.xl,
            maxWidth: '600px',
          }}>
            {ar ? 'مع الإنذارات الفورية، تكون دائماً على دراية بالأزمات الحرجة وتستطيع الاستجابة بسرعة. اشترك الآن.' : 'With real-time alerts, you\'re always informed about critical crises and can respond quickly. Subscribe now to stay connected.'}
          </p>
          <Link href={`/${locale}/emergency-alerts`} style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.95)',
            color: royalColors.darkNavy,
            padding: `${spacing.sm} ${spacing.lg}`,
            borderRadius: borderRadius.md,
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: `2px solid rgba(255, 255, 255, 0.95)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
            (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
          }}
          >
            {ar ? 'اشترك الآن' : 'Subscribe Now'}
          </Link>
        </div>
      </section>
    </main>
  );
}
