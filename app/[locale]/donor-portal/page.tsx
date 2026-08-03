'use client';

import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

interface Donation {
  id: string;
  date: string;
  amount: number;
  currency: string;
  program: string;
  receiptUrl?: string;
  taxDeductible: boolean;
}

interface DonorProfile {
  name: string;
  email: string;
  totalGiven: number;
  donationCount: number;
  lastDonationDate: string;
  preferredProgram: string;
  taxIdProvided: boolean;
}

const contentEN = {
  title: 'Donor Portal',
  subtitle: 'Track your impact and manage your giving',
  tabs: {
    dashboard: 'Dashboard',
    history: 'Donation History',
    settings: 'Settings',
    receipts: 'Tax Receipts',
  },
  dashboard: {
    greeting: 'Welcome back, Donor!',
    totalGiven: 'Total Contributed',
    donationCount: 'Number of Donations',
    lastDonation: 'Last Donation',
    impactTitle: 'Your Impact',
    impactDesc: 'See how your donations are making a difference',
  },
  history: {
    noData: 'No donations yet',
    date: 'Date',
    amount: 'Amount',
    program: 'Program',
    status: 'Status',
  },
  settings: {
    profile: 'Profile Settings',
    preferences: 'Communication Preferences',
    recurring: 'Recurring Donations',
    taxInfo: 'Tax Information',
  },
};

const contentAR = {
  title: 'بوابة المانحين',
  subtitle: 'تتبع تأثيرك وإدارة عطاؤك',
  tabs: {
    dashboard: 'لوحة التحكم',
    history: 'سجل التبرعات',
    settings: 'الإعدادات',
    receipts: 'الإيصالات الضريبية',
  },
  dashboard: {
    greeting: 'أهلاً بعودتك، المانح!',
    totalGiven: 'إجمالي المساهمة',
    donationCount: 'عدد التبرعات',
    lastDonation: 'آخر تبرع',
    impactTitle: 'تأثيرك',
    impactDesc: 'شاهد كيف تحدث تبرعاتك فرقاً',
  },
  history: {
    noData: 'لا توجد تبرعات حتى الآن',
    date: 'التاريخ',
    amount: 'المبلغ',
    program: 'البرنامج',
    status: 'الحالة',
  },
  settings: {
    profile: 'إعدادات الملف الشخصي',
    preferences: 'تفضيلات الاتصال',
    recurring: 'التبرعات المتكررة',
    taxInfo: 'المعلومات الضريبية',
  },
};

export default function DonorPortalPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = ar ? contentAR : contentEN;

  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState<DonorProfile | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching donor data
    const mockProfile: DonorProfile = {
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      totalGiven: 5500,
      donationCount: 12,
      lastDonationDate: '2026-07-15',
      preferredProgram: 'Education',
      taxIdProvided: true,
    };

    const mockDonations: Donation[] = [
      {
        id: '1',
        date: '2026-07-15',
        amount: 500,
        currency: 'USD',
        program: 'Education Program',
        receiptUrl: '#',
        taxDeductible: true,
      },
      {
        id: '2',
        date: '2026-06-10',
        amount: 250,
        currency: 'USD',
        program: 'Healthcare Initiative',
        receiptUrl: '#',
        taxDeductible: true,
      },
      {
        id: '3',
        date: '2026-05-20',
        amount: 1000,
        currency: 'USD',
        program: 'Gaza Crisis Response',
        receiptUrl: '#',
        taxDeductible: true,
      },
    ];

    setProfile(mockProfile);
    setDonations(mockDonations);
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
            Your Giving Journey
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
                  { label: content.dashboard.totalGiven, value: `$${profile.totalGiven.toLocaleString()}`, icon: '💰' },
                  { label: content.dashboard.donationCount, value: profile.donationCount.toString(), icon: '🎁' },
                  { label: content.dashboard.lastDonation, value: profile.lastDonationDate, icon: '📅' },
                  { label: 'Favorite Program', value: profile.preferredProgram, icon: '❤️' },
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

              {donations.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                }}>
                  {donations.map((donation) => (
                    <div key={donation.id} style={{
                      padding: '24px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.bgRefined}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: ar ? 'row-reverse' : 'row',
                    }}>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: royalColors.darkNavy,
                          margin: '0 0 4px 0',
                        }}>
                          {donation.program}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          color: royalColors.textOfficial,
                          margin: 0,
                        }}>
                          {donation.date}
                        </p>
                      </div>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <p style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0 0 4px 0',
                        }}>
                          ${donation.amount}
                        </p>
                        <a href={donation.receiptUrl} style={{
                          fontSize: '12px',
                          color: royalColors.hashemiteGold,
                          textDecoration: 'none',
                          fontWeight: '600',
                        }}>
                          📄 Receipt
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: royalColors.textOfficial }}>{content.history.noData}</p>
              )}
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

              <div style={{ display: 'grid', gap: '24px', maxWidth: '500px' }}>
                {[
                  { label: 'Email Address', value: profile.email },
                  { label: 'Full Name', value: profile.name },
                  { label: 'Monthly Newsletter', value: 'Subscribed' },
                  { label: 'Tax ID Status', value: profile.taxIdProvided ? '✅ Provided' : '⚠️ Not provided' },
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
          )}

          {/* Receipts Tab */}
          {activeTab === 'receipts' && (
            <div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '32px',
              }}>
                {content.tabs.receipts}
              </h2>

              {donations.filter(d => d.taxDeductible).length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '16px',
                }}>
                  {donations.filter(d => d.taxDeductible).map((donation) => (
                    <a key={donation.id} href={donation.receiptUrl} style={{
                      padding: '24px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: `2px solid ${royalColors.hashemiteGold}`,
                      textDecoration: 'none',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <div style={{ fontSize: '32px', marginBottom: '12px' }}>📄</div>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textOfficial,
                        margin: '0 0 6px 0',
                      }}>
                        {donation.date}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: 0,
                      }}>
                        ${donation.amount}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p style={{ color: royalColors.textOfficial }}>No tax-deductible receipts available</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
