'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type PaymentMethod = 'card' | 'bank' | 'wallet';
type RecurrenceFrequency = 'monthly' | 'quarterly' | 'annual';

export default function RecurringDonationSetupPage() {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const ar = locale === 'ar';

  // Form state
  const [step, setStep] = useState<'amount' | 'frequency' | 'payment' | 'review' | 'success'>('amount');
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<RecurrenceFrequency>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [focusArea, setFocusArea] = useState<string>('general');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  // Predefined amounts
  const presetAmounts = [10, 25, 50, 100, 500];

  // Focus areas
  const focusAreas = [
    { id: 'general', label: ar ? 'التوزيع التلقائي' : 'General Fund', icon: '🎯' },
    { id: 'education', label: ar ? 'التعليم' : 'Education', icon: '📚' },
    { id: 'health', label: ar ? 'الصحة' : 'Healthcare', icon: '🏥' },
    { id: 'emergency', label: ar ? 'الاستجابة للطوارئ' : 'Emergency Response', icon: '❤️' },
    { id: 'livelihood', label: ar ? 'سبل العيش' : 'Livelihood', icon: '💼' },
  ];

  // Payment methods
  const paymentMethods = [
    { id: 'card', label: ar ? 'بطاقة ائتمان' : 'Credit Card', icon: '💳', desc: ar ? 'Visa, Mastercard, Amex' : 'Visa, Mastercard, Amex' },
    { id: 'bank', label: ar ? 'تحويل بنكي' : 'Bank Transfer', icon: '🏦', desc: ar ? 'تحويل مباشر آمن' : 'Direct secure transfer' },
    { id: 'wallet', label: ar ? 'المحفظة الرقمية' : 'Digital Wallet', icon: '📱', desc: ar ? 'Apple Pay, Google Pay' : 'Apple Pay, Google Pay' },
  ];

  // Frequency options
  const frequencyOptions = [
    { value: 'monthly' as RecurrenceFrequency, label: ar ? 'شهري' : 'Monthly', desc: ar ? '12 تحويل سنوياً' : '12 times per year' },
    { value: 'quarterly' as RecurrenceFrequency, label: ar ? 'ربع سنوي' : 'Quarterly', desc: ar ? '4 تحويلات سنوياً' : '4 times per year' },
    { value: 'annual' as RecurrenceFrequency, label: ar ? 'سنوي' : 'Annual', desc: ar ? 'تحويل واحد سنوياً' : '1 time per year' },
  ];

  // Calculate total annual donation
  const finalAmount = customAmount || donationAmount;
  const annualAmount = finalAmount ? (
    frequency === 'monthly' ? parseFloat(finalAmount) * 12 :
    frequency === 'quarterly' ? parseFloat(finalAmount) * 4 :
    parseFloat(finalAmount)
  ) : 0;

  const handleNextStep = () => {
    if (step === 'amount' && !finalAmount) {
      alert(ar ? 'يرجى إدخال مبلغ التبرع' : 'Please enter a donation amount');
      return;
    }

    const steps: Array<'amount' | 'frequency' | 'payment' | 'review' | 'success'> = ['amount', 'frequency', 'payment', 'review', 'success'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handlePrevStep = () => {
    const steps: Array<'amount' | 'frequency' | 'payment' | 'review' | 'success'> = ['amount', 'frequency', 'payment', 'review', 'success'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fef9f3' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #e74c3c 0%, #e8b923 100%)',
        padding: '60px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '400',
          margin: '0 0 16px 0',
          fontFamily: 'Georgia, serif',
        }}>
          {ar ? '📅 إعداد التبرع الشهري' : '📅 Set Up Monthly Giving'}
        </h1>
        <p style={{
          fontSize: '18px',
          margin: '0',
          opacity: '0.95',
        }}>
          {ar ? 'تأثير مستدام، بسهولة' : 'Sustained impact, with ease'}
        </p>
      </section>

      {/* Progress Steps */}
      <section style={{
        padding: '40px 32px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}>
            {(['amount', 'frequency', 'payment', 'review', 'success'] as const).map((s, idx) => (
              <div key={s} style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: step === s ? '#e74c3c' : idx < (['amount', 'frequency', 'payment', 'review', 'success'].indexOf(step)) ? '#1abc9c' : '#e0e0e0',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  fontSize: '14px',
                }}>
                  {idx < (['amount', 'frequency', 'payment', 'review', 'success'].indexOf(step)) ? '✓' : idx + 1}
                </div>
                {idx < 4 && <div style={{
                  flex: 1,
                  height: '2px',
                  backgroundColor: idx < (['amount', 'frequency', 'payment', 'review', 'success'].indexOf(step)) ? '#1abc9c' : '#e0e0e0',
                  margin: '0 8px',
                }} />}
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            fontSize: '12px',
            color: '#6b6b6b',
          }}>
            <span>{ar ? 'المبلغ' : 'Amount'}</span>
            <span>{ar ? 'التكرار' : 'Frequency'}</span>
            <span>{ar ? 'الدفع' : 'Payment'}</span>
            <span>{ar ? 'المراجعة' : 'Review'}</span>
            <span>{ar ? 'تم' : 'Done'}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        padding: '60px 32px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* STEP 1: AMOUNT */}
        {step === 'amount' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}>
              {ar ? 'كم تود أن تتبرع شهرياً؟' : 'How much would you like to give monthly?'}
            </h2>

            {/* Preset amounts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}>
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(String(amount))}
                  style={{
                    padding: '20px',
                    backgroundColor: donationAmount === String(amount) && !customAmount ? '#e74c3c' : '#fff',
                    color: donationAmount === String(amount) && !customAmount ? 'white' : '#0a1428',
                    border: `2px solid ${donationAmount === String(amount) && !customAmount ? '#e74c3c' : '#e0e0e0'}`,
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                  }}
                  onMouseEnter={(e) => {
                    if (donationAmount !== String(amount)) {
                      (e.target as HTMLButtonElement).style.borderColor = '#e74c3c';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (donationAmount !== String(amount)) {
                      (e.target as HTMLButtonElement).style.borderColor = '#e0e0e0';
                    }
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div style={{
              marginBottom: '40px',
            }}>
              <label style={{
                display: 'block',
                marginBottom: '12px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#0a1428',
              }}>
                {ar ? 'أو أدخل مبلغاً مخصصاً' : 'Or enter a custom amount'}
              </label>
              <div style={{
                display: 'flex',
                gap: '12px',
              }}>
                <span style={{
                  padding: '12px 16px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px 0 0 8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#6b6b6b',
                }}>
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount('');
                  }}
                  placeholder={ar ? 'أدخل المبلغ' : 'Enter amount'}
                  min="1"
                  step="0.01"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '0 8px 8px 0',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            {/* Focus area selection */}
            <div style={{
              marginBottom: '40px',
            }}>
              <label style={{
                display: 'block',
                marginBottom: '16px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#0a1428',
              }}>
                {ar ? 'اختر مجال التركيز (اختياري)' : 'Choose focus area (optional)'}
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '12px',
              }}>
                {focusAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setFocusArea(area.id)}
                    style={{
                      padding: '16px',
                      backgroundColor: focusArea === area.id ? '#ffe6e6' : '#fff',
                      border: `2px solid ${focusArea === area.id ? '#e74c3c' : '#e0e0e0'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 250ms ease',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                      {area.icon}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: focusArea === area.id ? '#e74c3c' : '#0a1428',
                    }}>
                      {area.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: FREQUENCY */}
        {step === 'frequency' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}>
              {ar ? 'كم مرة تريد التبرع؟' : 'How often would you like to give?'}
            </h2>

            <div style={{
              display: 'grid',
              gap: '20px',
              marginBottom: '40px',
            }}>
              {frequencyOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFrequency(option.value)}
                  style={{
                    padding: '24px',
                    backgroundColor: frequency === option.value ? '#e6f2ff' : '#fff',
                    border: `2px solid ${frequency === option.value ? '#3498db' : '#e0e0e0'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                    textAlign: ar ? 'right' : 'left',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: frequency === option.value ? '#3498db' : '#0a1428',
                        marginBottom: '4px',
                      }}>
                        {option.label}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: '#6b6b6b',
                      }}>
                        {option.desc}
                      </div>
                    </div>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: frequency === option.value ? '#3498db' : '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}>
                      {frequency === option.value ? '✓' : ''}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: PAYMENT METHOD */}
        {step === 'payment' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}>
              {ar ? 'طريقة الدفع' : 'Choose Payment Method'}
            </h2>

            <div style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '40px',
            }}>
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                  style={{
                    padding: '24px',
                    backgroundColor: paymentMethod === method.id ? '#fff9e6' : '#fff',
                    border: `2px solid ${paymentMethod === method.id ? '#e8b923' : '#e0e0e0'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                    textAlign: ar ? 'right' : 'left',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    }}>
                      <div style={{ fontSize: '32px' }}>
                        {method.icon}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: paymentMethod === method.id ? '#e8b923' : '#0a1428',
                          marginBottom: '4px',
                        }}>
                          {method.label}
                        </div>
                        <div style={{
                          fontSize: '14px',
                          color: '#6b6b6b',
                        }}>
                          {method.desc}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: paymentMethod === method.id ? '#e8b923' : '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}>
                      {paymentMethod === method.id ? '✓' : ''}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Personal Information */}
            <div style={{
              backgroundColor: '#fff',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              marginBottom: '40px',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#0a1428',
              }}>
                {ar ? 'معلومات شخصية' : 'Personal Information'}
              </h3>

              <div style={{
                display: 'grid',
                gap: '16px',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#0a1428',
                  }}>
                    {ar ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={ar ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#0a1428',
                  }}>
                    {ar ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={ar ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#0a1428',
                }}>
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{ar ? 'أريد أن أتبرع بشكل مجهول' : 'I want to give anonymously'}</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW */}
        {step === 'review' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Georgia, serif',
            }}>
              {ar ? 'مراجعة الطلب' : 'Review Your Donation'}
            </h2>

            <div style={{
              backgroundColor: '#fff',
              padding: '32px',
              borderRadius: '12px',
              border: '2px solid #e8b923',
              marginBottom: '40px',
            }}>
              <div style={{
                display: 'grid',
                gap: '24px',
              }}>
                {/* Amount Summary */}
                <div style={{
                  padding: '24px',
                  backgroundColor: '#fff9e6',
                  borderRadius: '8px',
                  borderLeft: '4px solid #e8b923',
                }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b6b6b',
                    marginBottom: '8px',
                  }}>
                    {ar ? 'المبلغ الشهري' : 'Monthly Amount'}
                  </div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: '600',
                    color: '#e8b923',
                    marginBottom: '8px',
                  }}>
                    ${finalAmount}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b6b6b',
                  }}>
                    {ar ? `المبلغ السنوي: $${annualAmount.toFixed(2)}` : `Annual Total: $${annualAmount.toFixed(2)}`}
                  </div>
                </div>

                {/* Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px',
                }}>
                  <div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b6b6b',
                      marginBottom: '4px',
                    }}>
                      {ar ? 'التكرار' : 'Frequency'}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#0a1428',
                    }}>
                      {frequencyOptions.find(o => o.value === frequency)?.label}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b6b6b',
                      marginBottom: '4px',
                    }}>
                      {ar ? 'طريقة الدفع' : 'Payment Method'}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#0a1428',
                    }}>
                      {paymentMethods.find(m => m.id === paymentMethod)?.label}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b6b6b',
                      marginBottom: '4px',
                    }}>
                      {ar ? 'مجال التركيز' : 'Focus Area'}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#0a1428',
                    }}>
                      {focusAreas.find(a => a.id === focusArea)?.label}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b6b6b',
                      marginBottom: '4px',
                    }}>
                      {ar ? 'الاسم' : 'Name'}
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#0a1428',
                    }}>
                      {isAnonymous ? (ar ? 'مجهول' : 'Anonymous') : fullName || (ar ? 'غير محدد' : 'Not provided')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '24px',
              borderRadius: '8px',
              marginBottom: '40px',
              fontSize: '14px',
              color: '#6b6b6b',
              lineHeight: '1.6',
            }}>
              <input
                type="checkbox"
                id="terms"
                style={{
                  marginRight: '12px',
                  cursor: 'pointer',
                }}
              />
              <label htmlFor="terms" style={{ cursor: 'pointer' }}>
                {ar ? 'أوافق على الشروط والأحكام. يمكنني تغيير أو إيقاف تبرعي في أي وقت.' : 'I agree to the terms and conditions. I can change or stop my donation anytime.'}
              </label>
            </div>
          </div>
        )}

        {/* STEP 5: SUCCESS */}
        {step === 'success' && (
          <div style={{
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease',
          }}>
            <div style={{
              fontSize: '80px',
              marginBottom: '24px',
            }}>
              ✨
            </div>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '400',
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
            }}>
              {ar ? 'شكراً لتبرعك!' : 'Thank You for Your Gift!'}
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b6b6b',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}>
              {ar ? 'تم تأكيد تبرعك الشهري بنجاح. ستتلقى رسالة تأكيد على بريدك الإلكتروني.' : 'Your monthly donation has been confirmed. A confirmation email has been sent to you.'}
            </p>

            <div style={{
              backgroundColor: '#fff',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              marginBottom: '32px',
              textAlign: 'left',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#0a1428',
              }}>
                {ar ? 'ما الخطوة التالية؟' : 'What Happens Next?'}
              </h3>
              <ul style={{
                margin: '0',
                padding: '0 0 0 24px',
                fontSize: '14px',
                color: '#6b6b6b',
                lineHeight: '1.8',
              }}>
                <li>{ar ? 'ستصل أول تبرع في [التاريخ]' : 'Your first donation will be processed on [Date]'}</li>
                <li>{ar ? 'ستتلقى تقرير تأثير شهري مع كل تبرع' : 'You\'ll receive monthly impact reports with each donation'}</li>
                <li>{ar ? 'يمكنك إدارة اشتراكك من لوحة التحكم الخاصة بك' : 'You can manage your subscription from your dashboard'}</li>
                <li>{ar ? 'استقبل إيصالات ضريبية تلقائية سنوياً' : 'Receive annual tax receipts automatically'}</li>
              </ul>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href={`/${locale}/donor-portal`}>
                <button style={{
                  padding: '14px 32px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 250ms ease',
                }}>
                  {ar ? 'انتقل إلى لوحة التحكم' : 'Go to Dashboard'}
                </button>
              </Link>
              <Link href={`/${locale}/impact`}>
                <button style={{
                  padding: '14px 32px',
                  backgroundColor: 'transparent',
                  color: '#e74c3c',
                  border: '2px solid #e74c3c',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 250ms ease',
                }}>
                  {ar ? 'اكتشف تأثيرنا' : 'See Our Impact'}
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step !== 'success' && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            marginTop: '60px',
          }}>
            <button
              onClick={handlePrevStep}
              disabled={step === 'amount'}
              style={{
                padding: '14px 32px',
                backgroundColor: 'white',
                color: step === 'amount' ? '#ccc' : '#0a1428',
                border: `2px solid ${step === 'amount' ? '#e0e0e0' : '#e0e0e0'}`,
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: step === 'amount' ? 'not-allowed' : 'pointer',
                transition: 'all 250ms ease',
              }}
            >
              {ar ? 'السابق' : 'Back'}
            </button>

            <button
              onClick={() => {
                if (step === 'review') {
                  setStep('success');
                } else {
                  handleNextStep();
                }
              }}
              style={{
                padding: '14px 48px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 250ms ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#cb4335';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#e74c3c';
              }}
            >
              {step === 'review' ? (ar ? 'تأكيد التبرع' : 'Confirm Donation') : (ar ? 'التالي' : 'Next')}
            </button>
          </div>
        )}
      </section>

      {/* Trust Badges */}
      {step !== 'success' && (
        <section style={{
          padding: '40px 32px',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
          }}>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔒</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0a1428',
                marginBottom: '4px',
              }}>
                {ar ? 'آمن 100%' : '100% Secure'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b6b6b',
              }}>
                {ar ? 'تشفير SSL' : 'SSL Encrypted'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>✓</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0a1428',
                marginBottom: '4px',
              }}>
                {ar ? 'معفى من الضرائب' : 'Tax Deductible'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b6b6b',
              }}>
                {ar ? 'تبرعات معتمدة' : 'Verified Charity'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>📱</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0a1428',
                marginBottom: '4px',
              }}>
                {ar ? 'إدارة سهلة' : 'Easy Management'}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b6b6b',
              }}>
                {ar ? 'غيّر في أي وقت' : 'Change Anytime'}
              </div>
            </div>
          </div>
        </section>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
