'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type PaymentMethod = 'card' | 'bank' | 'wallet';
type CheckoutStep = 'form' | 'confirm' | 'success';

export default function EmergencyDonationPage() {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const ar = locale === 'ar';

  // Form state
  const [step, setStep] = useState<CheckoutStep>('form');
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [selectedCrisis, setSelectedCrisis] = useState<string>('syria-humanitarian');
  const [email, setEmail] = useState<string>('');

  // Active crises
  const activeCrises = [
    {
      id: 'syria-humanitarian',
      name: ar ? 'الأزمة الإنسانية في سوريا' : 'Syria Humanitarian Crisis',
      icon: '🚨',
      urgency: ar ? 'حرج جداً' : 'Critical',
      beneficiaries: ar ? '2.3 مليون شخص' : '2.3M People',
      raised: 45000,
      goal: 100000,
    },
    {
      id: 'myanmar-crisis',
      name: ar ? 'أزمة ميانمار' : 'Myanmar Crisis',
      icon: '⚠️',
      urgency: ar ? 'حرج' : 'Urgent',
      beneficiaries: ar ? '1.8 مليون شخص' : '1.8M People',
      raised: 32000,
      goal: 75000,
    },
    {
      id: 'lebanon-emergency',
      name: ar ? 'حالة الطوارئ في لبنان' : 'Lebanon Emergency',
      icon: '🔴',
      urgency: ar ? 'حرج' : 'Urgent',
      beneficiaries: ar ? '900 ألف شخص' : '900K People',
      raised: 28000,
      goal: 60000,
    },
    {
      id: 'sudan-crisis',
      name: ar ? 'أزمة السودان' : 'Sudan Crisis',
      icon: '⚠️',
      urgency: ar ? 'حرج جداً' : 'Critical',
      beneficiaries: ar ? '3.1 مليون شخص' : '3.1M People',
      raised: 52000,
      goal: 150000,
    },
  ];

  // Payment methods
  const paymentMethods = [
    { id: 'card', label: ar ? 'بطاقة ائتمان' : 'Credit Card', icon: '💳' },
    { id: 'bank', label: ar ? 'تحويل بنكي' : 'Bank Transfer', icon: '🏦' },
    { id: 'wallet', label: ar ? 'المحفظة الرقمية' : 'Digital Wallet', icon: '📱' },
  ];

  // Quick preset amounts (emergency optimized)
  const quickAmounts = [25, 50, 100, 250, 500];

  const selectedCrisisData = activeCrises.find(c => c.id === selectedCrisis);
  const crisisProgress = selectedCrisisData ? (selectedCrisisData.raised / selectedCrisisData.goal) * 100 : 0;

  const handleDonate = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      alert(ar ? 'يرجى إدخال مبلغ صحيح' : 'Please enter a valid amount');
      return;
    }
    if (!email) {
      alert(ar ? 'يرجى إدخال بريدك الإلكتروني' : 'Please enter your email');
      return;
    }
    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('success');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff5f5' }}>
      {/* URGENT HEADER */}
      <section style={{
        background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)',
        padding: '40px 32px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: '32px',
            marginBottom: '12px',
            animation: 'pulse 2s infinite',
          }}>
            🚨
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '400',
            margin: '0 0 12px 0',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2',
          }}>
            {ar ? 'تبرع سريع للطوارئ' : 'Emergency Response Donation'}
          </h1>
          <p style={{
            fontSize: '18px',
            margin: '0',
            opacity: '0.95',
            fontWeight: '300',
          }}>
            {ar ? 'كل ثانية تحتسب. ساعدنا الآن.' : 'Every second counts. Help now.'}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{
        padding: '48px 32px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* FORM STEP */}
        {step === 'form' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr',
            gap: '48px',
            alignItems: 'flex-start',
          }}>
            {/* Left: Form */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '400',
                marginBottom: '32px',
                fontFamily: 'Georgia, serif',
                color: '#0a1428',
              }}>
                {ar ? 'إكمال التبرع' : 'Complete Your Donation'}
              </h2>

              {/* Crisis Selection */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#0a1428',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {ar ? 'أين تريد مساعدتنا؟' : 'Where should we help?'}
                </label>
                <select
                  value={selectedCrisis}
                  onChange={(e) => setSelectedCrisis(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '16px',
                    border: '2px solid #e74c3c',
                    borderRadius: '8px',
                    fontFamily: 'inherit',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    color: '#0a1428',
                  }}
                >
                  {activeCrises.map((crisis) => (
                    <option key={crisis.id} value={crisis.id}>
                      {crisis.icon} {crisis.name} ({crisis.urgency})
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Selection */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#0a1428',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {ar ? 'مبلغ التبرع' : 'Donation Amount'}
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(String(amount))}
                      style={{
                        padding: '12px 8px',
                        backgroundColor: donationAmount === String(amount) ? '#c0392b' : 'white',
                        color: donationAmount === String(amount) ? 'white' : '#0a1428',
                        border: `2px solid ${donationAmount === String(amount) ? '#c0392b' : '#e74c3c'}`,
                        borderRadius: '6px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        if (donationAmount !== String(amount)) {
                          (e.target as HTMLButtonElement).style.backgroundColor = '#ffe6e6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (donationAmount !== String(amount)) {
                          (e.target as HTMLButtonElement).style.backgroundColor = 'white';
                        }
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{
                    padding: '12px 12px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '6px 0 0 6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#6b6b6b',
                  }}>
                    $
                  </span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder={ar ? 'مبلغ مخصص' : 'Custom amount'}
                    min="1"
                    step="1"
                    style={{
                      flex: 1,
                      padding: '12px 12px',
                      fontSize: '16px',
                      border: '2px solid #e74c3c',
                      borderRadius: '0 6px 6px 0',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#0a1428',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {ar ? 'طريقة الدفع' : 'Payment Method'}
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '12px',
                }}>
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                      style={{
                        padding: '16px',
                        backgroundColor: paymentMethod === method.id ? '#ffe6e6' : 'white',
                        border: `2px solid ${paymentMethod === method.id ? '#c0392b' : '#e0e0e0'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>
                        {method.icon}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: paymentMethod === method.id ? '#c0392b' : '#0a1428',
                      }}>
                        {method.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email (minimal) */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={ar ? 'بريدك الإلكتروني' : 'Your email'}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '6px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  backgroundColor: '#c0392b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 250ms ease',
                  boxShadow: '0 8px 24px rgba(192, 57, 43, 0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#a02a23';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 12px 32px rgba(192, 57, 43, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#c0392b';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(192, 57, 43, 0.3)';
                }}
              >
                {ar ? `✓ تبرع ${donationAmount ? `$${donationAmount}` : ''}` : `✓ Donate ${donationAmount ? `$${donationAmount}` : ''}`}
              </button>

              {/* Trust Badge */}
              <div style={{
                marginTop: '20px',
                padding: '12px',
                backgroundColor: '#fff0f0',
                borderRadius: '6px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#6b6b6b',
              }}>
                🔒 {ar ? 'تبرعك آمن وسري تماماً' : 'Your donation is 100% secure and private'}
              </div>
            </div>

            {/* Right: Crisis Info */}
            <div style={{ position: 'sticky', top: '20px' }}>
              <div style={{
                backgroundColor: 'white',
                border: '3px solid #c0392b',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                }}>
                  {selectedCrisisData?.icon}
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px',
                }}>
                  {selectedCrisisData?.name}
                </h3>

                <div style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: '#ffe6e6',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#c0392b',
                  marginBottom: '20px',
                }}>
                  {selectedCrisisData?.urgency}
                </div>

                {/* Impact Statement */}
                <div style={{
                  padding: '20px',
                  backgroundColor: '#fff0f0',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  borderLeft: '4px solid #c0392b',
                }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b6b6b',
                    marginBottom: '8px',
                  }}>
                    {ar ? 'المحتاجون' : 'People in Need'}
                  </div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#c0392b',
                  }}>
                    {selectedCrisisData?.beneficiaries}
                  </div>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '12px',
                    color: '#6b6b6b',
                  }}>
                    <span>{ar ? 'جمعنا' : 'Raised'}</span>
                    <span>${selectedCrisisData?.raised.toLocaleString()}</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '20px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${crisisProgress}%`,
                      background: 'linear-gradient(90deg, #c0392b, #e74c3c)',
                      transition: 'width 500ms ease',
                    }} />
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b6b6b',
                    marginTop: '8px',
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {ar ? 'الهدف' : 'Goal'}: ${selectedCrisisData?.goal.toLocaleString()}
                  </div>
                </div>

                {/* Emergency Impact */}
                <div style={{
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0a1428',
                    margin: '0 0 12px 0',
                  }}>
                    {ar ? 'تأثير تبرعك' : 'Your Impact'}
                  </h4>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b6b6b',
                    lineHeight: '1.6',
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      💧 {ar ? 'مياه نظيفة آمنة' : 'Clean water & shelter'}
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      🏥 {ar ? 'رعاية طبية فورية' : 'Emergency medical care'}
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      🍽️ {ar ? 'وجبات غذائية عاجلة' : 'Urgent food assistance'}
                    </div>
                    <div>
                      👨‍👩‍👧‍👦 {ar ? 'دعم العائلات المتضررة' : 'Family support programs'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONFIRM STEP */}
        {step === 'confirm' && (
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            animation: 'fadeIn 0.3s ease',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
              color: '#0a1428',
              textAlign: 'center',
            }}>
              {ar ? 'تأكيد التبرع' : 'Confirm Your Donation'}
            </h2>

            <div style={{
              backgroundColor: 'white',
              border: '2px solid #e74c3c',
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '24px',
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#ffe6e6',
                borderRadius: '8px',
                marginBottom: '24px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '12px',
                }}>
                  💝
                </div>
                <div style={{
                  fontSize: '42px',
                  fontWeight: '600',
                  color: '#c0392b',
                  marginBottom: '8px',
                }}>
                  ${donationAmount}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#0a1428',
                }}>
                  {ar ? 'سيتم التبرع ب' : 'You are donating'}
                </div>
              </div>

              <div style={{
                display: 'grid',
                gap: '16px',
                marginBottom: '24px',
                fontSize: '14px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e0e0e0',
                }}>
                  <span style={{ color: '#6b6b6b' }}>{ar ? 'الأزمة' : 'Crisis'}</span>
                  <span style={{ fontWeight: '600', color: '#0a1428' }}>
                    {selectedCrisisData?.name}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e0e0e0',
                }}>
                  <span style={{ color: '#6b6b6b' }}>{ar ? 'طريقة الدفع' : 'Payment'}</span>
                  <span style={{ fontWeight: '600', color: '#0a1428' }}>
                    {paymentMethods.find(m => m.id === paymentMethod)?.label}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span style={{ color: '#6b6b6b' }}>{ar ? 'البريد الإلكتروني' : 'Email'}</span>
                  <span style={{ fontWeight: '600', color: '#0a1428' }}>{email}</span>
                </div>
              </div>

              <div style={{
                padding: '16px',
                backgroundColor: '#f5f5f5',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#6b6b6b',
                marginBottom: '24px',
                textAlign: 'center',
              }}>
                {ar ? '✓ معفى من الضرائب • 85% يذهب للبرامج • شهادة التبرع ستصل بريدياً' : '✓ Tax-deductible • 85% to programs • Receipt via email'}
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '12px',
            }}>
              <button
                onClick={() => setStep('form')}
                style={{
                  flex: 1,
                  padding: '14px 24px',
                  backgroundColor: 'white',
                  color: '#0a1428',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
              >
                {ar ? 'رجوع' : 'Back'}
              </button>
              <button
                onClick={handleConfirm}
                style={{
                  flex: 1,
                  padding: '14px 24px',
                  backgroundColor: '#c0392b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 12px rgba(192, 57, 43, 0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#a02a23';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#c0392b';
                }}
              >
                {ar ? '✓ أكمل التبرع' : '✓ Complete Donation'}
              </button>
            </div>
          </div>
        )}

        {/* SUCCESS STEP */}
        {step === 'success' && (
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease',
          }}>
            <div style={{
              fontSize: '72px',
              marginBottom: '24px',
              animation: 'bounce 0.6s ease',
            }}>
              ✨
            </div>

            <h2 style={{
              fontSize: '40px',
              fontWeight: '400',
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
              color: '#0a1428',
            }}>
              {ar ? 'شكراً لك!' : 'Thank You!'}
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b6b6b',
              marginBottom: '32px',
              lineHeight: '1.6',
            }}>
              {ar ? `تبرعك بمبلغ $${donationAmount} سيساعد الآلاف. سيتم إرسال إيصال التبرع إلى ${email}` : `Your donation of $${donationAmount} will help thousands. A receipt has been sent to ${email}`}
            </p>

            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '24px',
              borderRadius: '12px',
              marginBottom: '32px',
              textAlign: 'left',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#0a1428',
                margin: '0 0 16px 0',
              }}>
                {ar ? '🎯 التأثير الفوري' : '🎯 Immediate Impact'}
              </h3>
              <ul style={{
                margin: '0',
                padding: '0 0 0 20px',
                fontSize: '14px',
                color: '#6b6b6b',
                lineHeight: '1.8',
              }}>
                <li>{ar ? 'سيتم نشر تبرعك اليوم' : 'Your donation deploys today'}</li>
                <li>{ar ? 'ستتلقى تحديثات الأثر الأسبوعية' : 'Weekly impact updates to your email'}</li>
                <li>{ar ? 'يمكنك تتبع نتائجك عبر لوحة التحكم' : 'Track results on your donor dashboard'}</li>
                <li>{ar ? 'شهادة تبرع معفاة من الضرائب قريباً' : 'Tax receipt coming within 48 hours'}</li>
              </ul>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <Link href={`/${locale}/donor-portal`}>
                <button style={{
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}>
                  {ar ? 'لوحة التحكم' : 'Donor Dashboard'}
                </button>
              </Link>
              <Link href={`/${locale}/impact`}>
                <button style={{
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: 'white',
                  color: '#e74c3c',
                  border: '2px solid #e74c3c',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}>
                  {ar ? 'شاهد الأثر' : 'See Impact'}
                </button>
              </Link>
            </div>

            <p style={{
              fontSize: '14px',
              color: '#6b6b6b',
              margin: '0',
            }}>
              {ar ? '📢 شارك هذا مع أصدقائك وساعدنا في الوصول إلى المزيد' : '📢 Share this with friends and help us reach more people'}
            </p>
          </div>
        )}
      </section>

      {/* FLOATING ACTION - Always visible */}
      {step !== 'success' && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: ar ? 'auto' : '24px',
          right: ar ? '24px' : 'auto',
          padding: '16px 20px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'white',
          borderRadius: '8px',
          fontSize: '13px',
          maxWidth: '280px',
          zIndex: 100,
        }}>
          <div style={{
            fontWeight: '600',
            marginBottom: '4px',
          }}>
            ⏱️ {ar ? 'اعرف الآن' : 'Every second counts'}
          </div>
          <div style={{
            fontSize: '12px',
            opacity: 0.9,
          }}>
            {ar ? '3,200+ شخص محتاج الآن' : '3,200+ people need help right now'}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
