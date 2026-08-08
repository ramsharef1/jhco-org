import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('give/plans', locale);
}

export default async function GivingPlansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const plans = [
    {
      id: 'one-time',
      title: ar ? 'التبرع لمرة واحدة' : 'One-Time Giving',
      icon: '💝',
      color: '#e74c3c',
      minAmount: ar ? 'أي مبلغ' : 'Any Amount',
      minValue: '$1+',
      highlighted: false,
      description: ar ? 'تبرع فوري بأي مبلغ تختاره' : 'Make an immediate impact with a single donation',
      features: [
        {
          name: ar ? 'المرونة' : 'Flexibility',
          value: ar ? 'اختر مبلغك' : 'Choose your amount',
          icon: '🎯'
        },
        {
          name: ar ? 'التأثير الفوري' : 'Immediate Impact',
          value: ar ? 'تأثير فوري' : 'Instant impact',
          icon: '⚡'
        },
        {
          name: ar ? 'المعالجة' : 'Processing',
          value: ar ? 'فوري' : 'Immediate',
          icon: '✅'
        },
        {
          name: ar ? 'الحد الأدنى' : 'Minimum',
          value: ar ? 'لا يوجد' : 'None',
          icon: '💰'
        },
      ],
      impactPotential: ar ? 'متغير' : 'Variable',
      supportLevel: ar ? 'تقرير سنوي' : 'Annual Report',
      taxBenefit: ar ? 'فوري' : 'Immediate',
      ideal: ar ? 'للحالات الطارئة والبرامج المحددة' : 'For emergencies and specific programs'
    },
    {
      id: 'monthly',
      title: ar ? 'التبرع الشهري' : 'Monthly Giving',
      icon: '🔄',
      color: '#3498db',
      minAmount: ar ? '$10 فما فوق' : '$10+/month',
      minValue: '$10',
      highlighted: true,
      badge: ar ? 'الأكثر تأثيراً' : 'Most Impactful',
      description: ar ? 'دعم مستمر يحدث فرقاً كبيراً' : 'Sustained support that builds momentum',
      features: [
        {
          name: ar ? 'التأثير المستمر' : 'Sustained Impact',
          value: ar ? 'يؤثر سنوياً' : '12x annual impact',
          icon: '📈'
        },
        {
          name: ar ? 'الدعم المجتمعي' : 'Community Support',
          value: ar ? 'شهري' : 'Monthly updates',
          icon: '💌'
        },
        {
          name: ar ? 'المرونة' : 'Flexibility',
          value: ar ? 'أوقف في أي وقت' : 'Cancel anytime',
          icon: '🎪'
        },
        {
          name: ar ? 'الحد الأدنى' : 'Minimum',
          value: ar ? '$10/شهر' : '$10/month',
          icon: '💵'
        },
      ],
      impactPotential: ar ? 'عالي جداً' : 'Very High',
      supportLevel: ar ? 'نشرات شهرية + تقارير سنوية' : 'Monthly newsletters + Annual reports',
      taxBenefit: ar ? 'سنوي' : 'Annual',
      ideal: ar ? 'للمتبرعين الملتزمين الذين يريدون تأثيراً طويل الأجل' : 'For committed donors wanting long-term impact'
    },
    {
      id: 'legacy',
      title: ar ? 'التبرع الوصايا' : 'Legacy Giving',
      icon: '🕯️',
      color: '#16a085',
      minAmount: ar ? 'متغير' : 'Variable',
      minValue: 'Flexible',
      highlighted: false,
      description: ar ? 'اترك إرثاً دائماً يستمر للأجيال' : 'Create a lasting legacy for future generations',
      features: [
        {
          name: ar ? 'التأثير الدائم' : 'Lasting Impact',
          value: ar ? 'للأبد' : 'Perpetual',
          icon: '∞'
        },
        {
          name: ar ? 'التخطيط المالي' : 'Financial Planning',
          value: ar ? 'استشارة متخصصة' : 'Expert guidance',
          icon: '📋'
        },
        {
          name: ar ? 'الاسم التذكاري' : 'Memorial Name',
          value: ar ? 'موقع مخصص' : 'Dedicated space',
          icon: '🎖️'
        },
        {
          name: ar ? 'المرونة' : 'Flexibility',
          value: ar ? 'طريقتك الخاصة' : 'Your way',
          icon: '🌱'
        },
      ],
      impactPotential: ar ? 'أعلى' : 'Highest',
      supportLevel: ar ? 'استشارة شاملة + دعم خاص' : 'Full consultation + Special support',
      taxBenefit: ar ? 'كبير جداً' : 'Significant',
      ideal: ar ? 'للذين يريدون ترك أثر دائم ومتواصل' : 'For those wanting the deepest impact'
    },
    {
      id: 'corporate',
      title: ar ? 'التبرعات الشركات' : 'Corporate Giving',
      icon: '🏢',
      color: '#9b59b6',
      minAmount: ar ? 'حسب التفاوض' : 'Negotiable',
      minValue: 'Custom',
      highlighted: false,
      description: ar ? 'شراكات مؤسسية وتأثير مشترك' : 'Institutional partnerships and shared impact',
      features: [
        {
          name: ar ? 'الحجم' : 'Scale',
          value: ar ? 'حسب الحاجة' : 'Large-scale',
          icon: '📊'
        },
        {
          name: ar ? 'التخصيص' : 'Customization',
          value: ar ? 'حسب احتياجاتك' : 'Tailored programs',
          icon: '⚙️'
        },
        {
          name: ar ? 'الشهرة' : 'Recognition',
          value: ar ? 'ظهور قومي' : 'Brand visibility',
          icon: '⭐'
        },
        {
          name: ar ? 'التقارير' : 'Reporting',
          value: ar ? 'تفصيلية جداً' : 'Detailed impact',
          icon: '📈'
        },
      ],
      impactPotential: ar ? 'قابلة للتوسع' : 'Scalable',
      supportLevel: ar ? 'حساب مخصص + اجتماعات منتظمة' : 'Dedicated account + Regular meetings',
      taxBenefit: ar ? 'قابلة للخصم' : 'Tax deductible',
      ideal: ar ? 'للشركات التي تريد الشراكة الاستراتيجية' : 'For companies seeking strategic partnerships'
    }
  ];

  const comparisonFeatures = [
    {
      name: ar ? 'الحد الأدنى للتبرع' : 'Minimum Donation',
      onetime: ar ? 'أي مبلغ' : 'Any amount',
      monthly: '$10',
      legacy: ar ? 'متغير' : 'Variable',
      corporate: ar ? 'حسب الاتفاق' : 'Negotiated'
    },
    {
      name: ar ? 'المرونة' : 'Flexibility',
      onetime: ar ? 'عالية جداً' : 'Very High',
      monthly: ar ? 'عالية' : 'High',
      legacy: ar ? 'عالية جداً' : 'Very High',
      corporate: ar ? 'عالية' : 'High'
    },
    {
      name: ar ? 'التأثير السنوي' : 'Annual Impact',
      onetime: ar ? 'لمرة واحدة' : 'One-time',
      monthly: ar ? 'مضاعف 12x' : '12x multiplier',
      legacy: ar ? 'دائم' : 'Perpetual',
      corporate: ar ? 'قابل للتوسع' : 'Scalable'
    },
    {
      name: ar ? 'الفوائد الضريبية' : 'Tax Benefits',
      onetime: ar ? 'فوري' : 'Immediate',
      monthly: ar ? 'سنوي' : 'Annual',
      legacy: ar ? 'كبير جداً' : 'Significant',
      corporate: ar ? 'تام' : 'Full'
    },
    {
      name: ar ? 'الدعم والمتابعة' : 'Support Level',
      onetime: ar ? 'بريدي' : 'Email',
      monthly: ar ? 'شهري' : 'Monthly',
      legacy: ar ? 'شاملة' : 'Complete',
      corporate: ar ? 'مخصص' : 'Dedicated'
    },
    {
      name: ar ? 'الاعتراف والتقدير' : 'Recognition',
      onetime: ar ? 'شكر' : 'Thank you',
      monthly: ar ? 'عضوية' : 'Member status',
      legacy: ar ? 'اسم تذكاري' : 'Memorial',
      corporate: ar ? 'شراكة عامة' : 'Public partnership'
    },
    {
      name: ar ? 'التقارير' : 'Reporting',
      onetime: ar ? 'سنوي' : 'Annual',
      monthly: ar ? 'شهري + سنوي' : 'Monthly + Annual',
      legacy: ar ? 'سنوي مفصل' : 'Detailed Annual',
      corporate: ar ? 'شهري' : 'Monthly'
    },
    {
      name: ar ? 'المعالجة' : 'Processing',
      onetime: ar ? 'فوري' : 'Immediate',
      monthly: ar ? 'تلقائي' : 'Automatic',
      legacy: ar ? 'حسب الخطة' : 'As planned',
      corporate: ar ? 'حسب الاتفاق' : 'Per agreement'
    }
  ];

  const supportLevels = [
    {
      name: ar ? 'الدعم الأساسي' : 'Basic Support',
      icon: '📧',
      plans: [ar ? 'التبرع لمرة واحدة' : 'One-Time'],
      features: [
        ar ? 'رسالة شكر بريدية' : 'Thank you email',
        ar ? 'إيصال ضريبي' : 'Tax receipt',
        ar ? 'نشرة إخبارية سنوية' : 'Annual newsletter'
      ]
    },
    {
      name: ar ? 'دعم متقدم' : 'Enhanced Support',
      icon: '💌',
      plans: [ar ? 'التبرع الشهري' : 'Monthly Giving'],
      features: [
        ar ? 'رسالة شكر شخصية' : 'Personal thank you',
        ar ? 'تحديثات شهرية' : 'Monthly updates',
        ar ? 'وصول إلى البرامج الحصرية' : 'Exclusive program access',
        ar ? 'دعاء خاص' : 'Special prayers'
      ]
    },
    {
      name: ar ? 'دعم رئيسي' : 'Premium Support',
      icon: '👑',
      plans: [ar ? 'التبرع الوصايا' : 'Legacy Giving'],
      features: [
        ar ? 'استشارة شاملة' : 'Full consultation',
        ar ? 'اسم تذكاري' : 'Memorial naming',
        ar ? 'اجتماعات سنوية' : 'Annual meetings',
        ar ? 'تقارير تفصيلية' : 'Detailed reports'
      ]
    },
    {
      name: ar ? 'دعم الشركات' : 'Corporate Support',
      icon: '🏢',
      plans: [ar ? 'التبرعات الشركات' : 'Corporate Giving'],
      features: [
        ar ? 'حساب مخصص' : 'Dedicated account',
        ar ? 'اجتماعات شهرية' : 'Monthly meetings',
        ar ? 'تقارير مفصلة شهرياً' : 'Detailed monthly reports',
        ar ? 'فرص تسويقية' : 'Marketing opportunities'
      ]
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #e74c3c 0%, #e8b923 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '400',
            margin: '0 0 24px 0',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? '📊 مقارنة خطط العطاء' : '📊 Giving Plans Comparison'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '0',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            {ar ? 'اختر الخيار الأنسب لك - كل طريقة مهمة وتحدث فرقاً' : 'Find your perfect giving method - every option makes a difference'}
          </p>
        </div>
      </section>

      {/* PLANS CARDS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '60px'
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  padding: '40px 28px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: plan.highlighted
                    ? '0 12px 32px rgba(52, 152, 219, 0.2)'
                    : '0 4px 12px rgba(0,0,0,0.08)',
                  borderTop: `5px solid ${plan.color}`,
                  position: 'relative',
                  transition: 'all 250ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: plan.highlighted ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: ar ? 'auto' : '12px',
                    left: ar ? '12px' : 'auto',
                    backgroundColor: '#1abc9c',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ fontSize: '56px', marginBottom: '12px' }}>
                  {plan.icon}
                </div>

                <h2 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px',
                  marginTop: plan.badge ? '12px' : '0'
                }}>
                  {plan.title}
                </h2>

                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {plan.description}
                </p>

                <div style={{
                  padding: '16px',
                  backgroundColor: '#f5e6d3',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 6px 0'
                  }}>
                    {ar ? 'الحد الأدنى' : 'Starting at'}
                  </p>
                  <p style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: plan.color,
                    margin: '0'
                  }}>
                    {plan.minValue}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#666',
                    margin: '4px 0 0 0'
                  }}>
                    {plan.minAmount}
                  </p>
                </div>

                <div style={{ marginBottom: '24px', flex: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '12px',
                        fontSize: '14px'
                      }}
                    >
                      <span style={{
                        fontSize: '20px',
                        marginRight: '10px',
                        minWidth: '24px',
                        textAlign: 'center'
                      }}>
                        {feature.icon}
                      </span>
                      <div>
                        <div style={{
                          fontWeight: '600',
                          color: '#0a1428',
                          marginBottom: '2px'
                        }}>
                          {feature.name}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#888'
                        }}>
                          {feature.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`${base}/get-involved/donate`}
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: plan.color,
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                    width: '100%',
                    textAlign: 'center',
                    border: 'none',
                    marginBottom: '12px'
                  }}
                >
                  {ar ? 'ابدأ الآن' : 'Get Started'}
                </Link>

                <button
                  style={{
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    color: plan.color,
                    border: `2px solid ${plan.color}`,
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                    width: '100%'
                  }}
                >
                  {ar ? 'اعرف المزيد' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #e8b923'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '📋 مقارنة تفصيلية' : '📋 Detailed Comparison'}
          </h2>

          <div style={{
            overflowX: 'auto',
            borderRadius: '12px',
            border: '2px solid #e8b923',
            backgroundColor: 'white'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '800px'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#e8b923',
                  color: 'white'
                }}>
                  <th style={{
                    padding: '20px',
                    textAlign: ar ? 'right' : 'left',
                    fontWeight: '600',
                    fontSize: '16px',
                    borderRight: ar ? '2px solid rgba(255,255,255,0.2)' : 'none',
                    borderLeft: ar ? 'none' : '2px solid rgba(255,255,255,0.2)'
                  }}>
                    {ar ? 'المميزات' : 'Features'}
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      style={{
                        padding: '20px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        borderRight: '2px solid rgba(255,255,255,0.2)',
                        backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.2)' : 'transparent'
                      }}
                    >
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>
                        {plan.icon}
                      </div>
                      {plan.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'white' : '#f9f6f0',
                      borderBottom: '1px solid #e8b923'
                    }}
                  >
                    <td style={{
                      padding: '18px 20px',
                      fontWeight: '600',
                      color: '#0a1428',
                      textAlign: ar ? 'right' : 'left',
                      borderRight: ar ? '2px solid #e8b923' : 'none',
                      borderLeft: ar ? 'none' : '2px solid #e8b923'
                    }}>
                      {feature.name}
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      color: '#555',
                      borderRight: '1px solid #e8b923'
                    }}>
                      {feature.onetime}
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      color: '#555',
                      borderRight: '1px solid #e8b923',
                      backgroundColor: plans[1].highlighted ? 'rgba(52, 152, 219, 0.05)' : 'transparent'
                    }}>
                      <strong>{feature.monthly}</strong>
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      color: '#555',
                      borderRight: '1px solid #e8b923'
                    }}>
                      {feature.legacy}
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      textAlign: 'center',
                      color: '#555'
                    }}>
                      {feature.corporate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SUPPORT LEVELS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '🤝 مستويات الدعم' : '🤝 Support Levels'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {supportLevels.map((level, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#f9f6f0',
                  borderRadius: '12px',
                  border: '2px solid #e8b923'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {level.icon}
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  {level.name}
                </h3>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {level.plans.map((plan, pidx) => (
                    <span
                      key={pidx}
                      style={{
                        backgroundColor: '#e8b923',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {plan}
                    </span>
                  ))}
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {level.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        padding: '10px 0',
                        borderBottom: fidx < level.features.length - 1 ? '1px solid #e8b92333' : 'none',
                        fontSize: '14px',
                        color: '#555',
                        paddingLeft: ar ? '0' : '24px',
                        paddingRight: ar ? '24px' : '0',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: ar ? 'auto' : '0',
                        right: ar ? '0' : 'auto',
                        color: '#e8b923',
                        fontWeight: '600'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT POTENTIAL SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #e8b923'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '🚀 إمكانيات التأثير' : '🚀 Impact Potential'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: `3px solid ${plan.color}`
                }}
              >
                <div style={{
                  fontSize: '36px',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {plan.icon}
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  {plan.title}
                </h3>

                <div style={{
                  marginBottom: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontWeight: '600',
                      color: '#666',
                      marginRight: '12px',
                      minWidth: '120px'
                    }}>
                      {ar ? 'التأثير:' : 'Impact:'}
                    </span>
                    <div style={{
                      flex: 1,
                      height: '8px',
                      backgroundColor: '#e8b92333',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        backgroundColor: plan.color,
                        width: plan.impactPotential === (ar ? 'أعلى' : 'Highest')
                          ? '100%'
                          : plan.impactPotential === (ar ? 'عالي جداً' : 'Very High')
                          ? '85%'
                          : plan.impactPotential === (ar ? 'عالي' : 'High')
                          ? '65%'
                          : plan.impactPotential === (ar ? 'قابلة للتوسع' : 'Scalable')
                          ? '90%'
                          : '40%'
                      }}></div>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: plan.color,
                    fontWeight: '600',
                    margin: '0',
                    textAlign: 'right'
                  }}>
                    {plan.impactPotential}
                  </p>
                </div>

                <div style={{
                  backgroundColor: plan.color,
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  <strong>{ar ? 'مستوى الدعم:' : 'Support:'}</strong> {plan.supportLevel}
                </div>

                <div style={{
                  backgroundColor: '#f5f5f5',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  <strong>{ar ? 'الفائدة الضريبية:' : 'Tax Benefit:'}</strong> {plan.taxBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBILITY SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '🎯 المرونة في كل خطة' : '🎯 Flexibility Options'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px'
          }}>
            {[
              {
                title: ar ? 'التبرع الفوري والمرن' : 'Quick & Flexible',
                description: ar ? 'اختر مبلغك الخاص' : 'Choose your own amount',
                points: [
                  ar ? 'لا توجد قيود على الحد الأدنى' : 'No minimum amount',
                  ar ? 'تبرع متى تشاء' : 'Donate whenever you want',
                  ar ? 'أي طريقة دفع' : 'Any payment method'
                ],
                icon: '⚡'
              },
              {
                title: ar ? 'الالتزام المرن' : 'Flexible Commitment',
                description: ar ? 'قيّم التزامك' : 'Scale your giving',
                points: [
                  ar ? 'غيّر مبلغك في أي وقت' : 'Adjust amount anytime',
                  ar ? 'أوقف واستأنف بسهولة' : 'Pause or resume easily',
                  ar ? 'لا توجد عقود طويلة' : 'No long contracts'
                ],
                icon: '🔄'
              },
              {
                title: ar ? 'التحكم الكامل' : 'Full Control',
                description: ar ? 'أنت المسؤول' : 'You decide everything',
                points: [
                  ar ? 'غيّر طرق الدفع' : 'Change payment methods',
                  ar ? 'أيقف التبرع متى تريد' : 'Stop anytime, no questions',
                  ar ? 'اختر البرامج المفضلة' : 'Choose preferred programs'
                ],
                icon: '🎮'
              },
              {
                title: ar ? 'خيارات الدفع' : 'Payment Options',
                description: ar ? 'اختر ما يناسبك' : 'Choose your method',
                points: [
                  ar ? 'بطاقة الائتمان والخصم' : 'Credit/Debit cards',
                  ar ? 'التحويلات البنكية' : 'Bank transfers',
                  ar ? 'المحافظ الرقمية' : 'Digital wallets'
                ],
                icon: '💳'
              }
            ].map((option, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#f9f6f0',
                  borderRadius: '12px',
                  border: '2px solid #e8b923'
                }}
              >
                <div style={{
                  fontSize: '44px',
                  marginBottom: '12px'
                }}>
                  {option.icon}
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px'
                }}>
                  {option.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  marginBottom: '18px'
                }}>
                  {option.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {option.points.map((point, pidx) => (
                    <li
                      key={pidx}
                      style={{
                        padding: '8px 0',
                        paddingLeft: ar ? '0' : '24px',
                        paddingRight: ar ? '24px' : '0',
                        fontSize: '14px',
                        color: '#555',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: ar ? 'auto' : '0',
                        right: ar ? '0' : 'auto',
                        color: '#e8b923',
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #e8b923'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '❓ الأسئلة الشائعة' : '❓ Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                q: ar ? 'ما هي الفرقة بين التبرع الشهري والتبرع لمرة واحدة؟' : 'What\'s the difference between monthly and one-time giving?',
                a: ar ? 'التبرع الشهري يوفر دعماً مستمراً لبرامجنا، بينما التبرع لمرة واحدة يمكن أن يساعد في المشاريع المحددة أو الطارئة. كلا الخيارين مهمان وقيّمان.' : 'Monthly giving provides sustained support for our programs, while one-time donations help with specific projects or emergencies. Both are valuable and appreciated.'
              },
              {
                q: ar ? 'هل يمكنني تغيير مبلغ تبرعي الشهري؟' : 'Can I change my monthly giving amount?',
                a: ar ? 'نعم، يمكنك تغيير مبلغ تبرعك في أي وقت من خلال حسابك أو عن طريق الاتصال بنا مباشرة.' : 'Yes, you can adjust your monthly amount anytime through your account or by contacting us directly.'
              },
              {
                q: ar ? 'كيف يعمل التبرع الوصايا؟' : 'How does legacy giving work?',
                a: ar ? 'يمكنك تضمين JHCO في وصيتك أو إنشاء صندوق استئماني. سنساعدك في كل خطوة من خلال فريقنا المتخصص.' : 'You can include JHCO in your will or create a charitable trust. We\'ll guide you through every step with our specialized team.'
              },
              {
                q: ar ? 'هل تبرعاتي معفاة من الضرائب؟' : 'Are my donations tax-deductible?',
                a: ar ? 'نعم، JHCO منظمة خيرية مسجلة وجميع التبرعات معفاة من الضرائب. ستحصل على إيصال ضريبي رسمي.' : 'Yes, JHCO is a registered charity. All donations are tax-deductible and you\'ll receive an official receipt.'
              },
              {
                q: ar ? 'كيف يمكنني معرفة أين يذهب تبرعي؟' : 'How can I see where my donation goes?',
                a: ar ? 'نرسل تقارير مفصلة لجميع المتبرعين الشهريين عن التأثير. يمكنك أيضاً زيارة صفحة التأثير لديك للحصول على تحديثات فورية.' : 'We send detailed impact reports to all monthly donors. You can also visit your donor portal for real-time updates on your giving\'s impact.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '2px solid #e8b923',
                  cursor: 'pointer'
                }}
              >
                <summary style={{
                  fontWeight: '600',
                  color: '#0a1428',
                  fontSize: '16px',
                  userSelect: 'none'
                }}>
                  {faq.q}
                </summary>
                <p style={{
                  marginTop: '12px',
                  marginBottom: '0',
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '15px'
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #e74c3c 0%, #e8b923 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? '🎁 اختر خطتك وابدأ الآن' : '🎁 Choose Your Plan & Start Today'}
          </h2>

          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            {ar ? 'كل تبرع يحدث فرقاً حقيقياً - ابدأ رحلتك مع JHCO اليوم' : 'Every donation matters - start your giving journey with JHCO today'}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href={`${base}/get-involved/donate`}
              style={{
                padding: '16px 40px',
                backgroundColor: 'white',
                color: '#e74c3c',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 250ms ease'
              }}
            >
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>

            <Link
              href={`${base}/contact`}
              style={{
                padding: '16px 40px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 250ms ease'
              }}
            >
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>

          <p style={{
            marginTop: '32px',
            fontSize: '15px',
            opacity: '0.9'
          }}>
            {ar ? 'للأسئلة الخاصة حول الخطط، يرجى التواصل مع فريقنا' : 'For personalized questions about plans, contact our team'}
          </p>
        </div>
      </section>
    </>
  );
}
