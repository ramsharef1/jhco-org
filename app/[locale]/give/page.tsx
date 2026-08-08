import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('give', locale);
}

export default async function GivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const givingOptions = [
    {
      title: ar ? 'التبرع الفردي' : 'Personal Giving',
      desc: ar ? 'تبرع بمبلغ لمرة واحدة أو شهري' : 'Make a one-time or monthly donation',
      icon: '💝',
      color: '#e74c3c',
      href: `${base}/get-involved/donate`,
      cta: ar ? 'ابدأ التبرع' : 'Donate Now'
    },
    {
      title: ar ? 'التبرع من مكان العمل' : 'Workplace Giving',
      desc: ar ? 'تبرع من راتبك مع مطابقة الشركة' : 'Give via payroll with employer matching',
      icon: '🏢',
      color: '#3498db',
      href: `${base}/give/workplace-giving`,
      cta: ar ? 'اعرف المزيد' : 'Learn More',
      isNew: true
    },
    {
      title: ar ? 'التبرعات الشركات' : 'Corporate Giving',
      desc: ar ? 'برامج تبرع للشركات والمؤسسات' : 'Corporate partnerships and grants',
      icon: '🏛️',
      color: '#9b59b6',
      href: `${base}/get-involved/donate`,
      cta: ar ? 'اتصل بنا' : 'Contact Us'
    },
    {
      title: ar ? 'التبرعات التذكارية' : 'Legacy Giving',
      desc: ar ? 'اترك وصية أو تبرع وصول' : 'Remember JHCO in your will',
      icon: '🕯️',
      color: '#16a085',
      href: `${base}/get-involved/donate`,
      cta: ar ? 'المزيد' : 'Learn More'
    },
    {
      title: ar ? 'معلومات الخصم الضريبي' : 'Tax Deductibility',
      desc: ar ? 'دليل شامل عن الإعفاء الضريبي والخصومات والإيصالات' : 'Complete guide to tax exemption and deductions',
      icon: '📋',
      color: '#d4af37',
      href: `${base}/give/tax-info`,
      cta: ar ? 'اقرأ المزيد' : 'Learn More'
    },
  ];

  return (
    <>
      {/* HERO */}
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
            {ar ? '💝 طرق للعطاء' : '💝 Ways to Give'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '0',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            {ar ? 'اختر الطريقة الأفضل لدعم مهمتنا الإنسانية' : 'Choose the best way to support our humanitarian mission'}
          </p>
        </div>
      </section>

      {/* GIVING OPTIONS GRID */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            {givingOptions.map((option, idx) => (
              <div key={idx} style={{
                padding: '40px 28px',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                borderTop: `4px solid ${option.color}`,
                position: 'relative',
                transition: 'all 250ms ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {option.isNew && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '12px',
                    backgroundColor: '#1abc9c',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {ar ? 'جديد' : 'New'}
                  </div>
                )}
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>
                  {option.icon}
                </div>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {option.title}
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                  flex: 1
                }}>
                  {option.desc}
                </p>
                <Link href={option.href} style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  backgroundColor: option.color,
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 250ms ease',
                  width: '100%',
                  textAlign: 'center',
                  border: 'none'
                }}>
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GIVE */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #e8b923'
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
            {ar ? 'لماذا تعطي لـ JHCO؟' : 'Why Give to JHCO?'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px'
          }}>
            {[
              {
                icon: '🌍',
                title: ar ? 'تأثير عالمي' : 'Global Impact',
                desc: ar ? 'نعمل في 30+ دول حول العالم' : 'We work in 30+ countries worldwide'
              },
              {
                icon: '✅',
                title: ar ? 'موثوق ومسجل' : 'Trusted & Registered',
                desc: ar ? 'منظمة خيرية مسجلة بشكل قانوني' : 'Officially registered charity organization'
              },
              {
                icon: '👑',
                title: ar ? 'رعاية ملكية' : 'Royal Patronage',
                desc: ar ? 'تحت الرعاية الملكية الهاشمية' : 'Under royal Hashemite patronage'
              },
              {
                icon: '📊',
                title: ar ? 'شفافة وفعالة' : 'Transparent & Efficient',
                desc: ar ? '85% من التبرعات للبرامج' : '85% goes directly to programs'
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '2px solid #e8b923',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
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
            {ar ? 'التأثير الذي تحققه تبرعاتك' : 'The Impact Your Giving Makes'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {[
              { amount: '$10', impact: ar ? '5 وجبات' : '5 Meals', icon: '🍽️' },
              { amount: '$25', impact: ar ? 'فحص طبي' : 'Medical Checkup', icon: '🏥' },
              { amount: '$50', impact: ar ? 'كتاب مدرسي' : 'Textbook', icon: '📚' },
              { amount: '$100', impact: ar ? 'تدريب مهني شهري' : 'Monthly Livelihood Training', icon: '💼' },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: '#f5e6d3',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid #e8b923'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                  {item.icon}
                </div>
                <p style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#e74c3c',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  {item.amount}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#0a1428',
                  margin: '0',
                  fontWeight: '500'
                }}>
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #e74c3c 0%, #e8b923 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? 'آن الأوان للعطاء' : 'It\'s Time to Give'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            {ar ? 'اختر الطريقة التي تناسبك وابدأ التأثير اليوم' : 'Choose your giving method and start making an impact today'}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#e74c3c',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
