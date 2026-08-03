import { getDictionary, type Locale } from '@/lib/i18n';
import { programs } from '@/lib/mockData';
import Link from 'next/link';

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Impact calculator data - Royal Design System
  const impactLevels = [
    { amount: 10, impact: ar ? '5 وجبات' : '5 Meals', icon: '🍽️', color: '#4a148c' },
    { amount: 25, impact: ar ? 'فحص طبي واحد' : '1 Medical Checkup', icon: '🏥', color: '#001a4d' },
    { amount: 50, impact: ar ? 'كتاب مدرسي واحد' : '1 Textbook', icon: '📚', color: '#d4af37' },
    { amount: 100, impact: ar ? 'تدريب على سبل العيش لشهر' : '1 Month Livelihood Training', icon: '💼', color: '#001a4d' },
    { amount: 500, impact: ar ? 'استجابة طوارئ لعائلة واحدة' : '1 Family Emergency Response', icon: '❤️', color: '#c41e3a' },
  ];

  // Donation tier colors - Royal Design System
  const donationTiers = [
    { name: ar ? 'برونزي' : 'Bronze', amount: 10, color: '#4a148c', bgColor: '#f0e6ff', borderColor: '#4a148c', icon: '🥉' },
    { name: ar ? 'فضي' : 'Silver', amount: 25, color: '#001a4d', bgColor: '#e6f0ff', borderColor: '#001a4d', icon: '🥈' },
    { name: ar ? 'ذهبي' : 'Gold', amount: 50, color: '#d4af37', bgColor: '#fff9e6', borderColor: '#d4af37', icon: '🏆' },
    { name: ar ? 'بلاتيني' : 'Platinum', amount: 100, color: '#4a148c', bgColor: '#f0e6ff', borderColor: '#4a148c', icon: '💎' },
    { name: ar ? 'ملكي' : 'Royal', amount: 500, color: '#c41e3a', bgColor: '#ffe6e6', borderColor: '#c41e3a', icon: '👑' },
  ];

  // Giving options - Royal Design System
  const givingOptions = [
    {
      title: ar ? 'تبرع لمرة واحدة' : 'One-Time Donation',
      desc: ar ? 'ساهم بمبلغ محدد' : 'Make an immediate impact',
      icon: '💝',
      color: '#c41e3a'
    },
    {
      title: ar ? 'تبرع شهري' : 'Monthly Giving',
      desc: ar ? 'تأثير مستدام طوال السنة' : 'Sustained impact all year',
      icon: '📅',
      color: '#4a148c',
      highlight: true
    },
    {
      title: ar ? 'تبرع سنوي' : 'Annual Donation',
      desc: ar ? 'دعم طويل الأجل' : 'Long-term commitment',
      icon: '📊',
      color: '#d4af37'
    },
    {
      title: ar ? 'تبرع شركات' : 'Corporate Giving',
      desc: ar ? 'دعم من الشركات' : 'Business partnerships',
      icon: '🏢',
      color: '#001a4d'
    },
    {
      title: ar ? 'تبرع تذكاري' : 'In-Memory Donation',
      desc: ar ? 'تكريم عزيز لديك' : 'Honor a loved one',
      icon: '🕯️',
      color: '#001a4d'
    },
  ];

  // Donor testimonials
  const testimonials = [
    {
      name: ar ? 'أحمد محمود' : 'Ahmed Mahmoud',
      role: ar ? 'متبرع منتظم' : 'Regular Donor',
      quote: ar ? 'تبرعاتي غيرت حياات الأطفال. أشعر بالفخر بأنني جزء من هذه الرسالة.' : 'My donations changed children\'s lives. I\'m proud to be part of this mission.',
      image: '👨‍💼'
    },
    {
      name: ar ? 'فاطمة علي' : 'Fatima Ali',
      role: ar ? 'متبرعة شهرية' : 'Monthly Donor',
      quote: ar ? 'كل شهر أتبرع وأشعر أنني أحدث فرقاً حقيقياً في المجتمع.' : 'Every month I give and feel the real difference in the community.',
      image: '👩‍🎓'
    },
    {
      name: ar ? 'محمود خليل' : 'Mahmoud Khalil',
      role: ar ? 'متبرع شركات' : 'Corporate Donor',
      quote: ar ? 'شركتنا فخورة بدعم JHCO وتأثيرها الإيجابي المستمر.' : 'Our company is proud to support JHCO\'s continued positive impact.',
      image: '👨‍💼'
    },
  ];

  // FAQ items
  const faqItems = [
    {
      q: ar ? 'هل تبرعي آمن؟' : 'Is my donation secure?',
      a: ar ? 'نستخدم أحدث تقنيات التشفير لحماية معلوماتك' : 'We use latest encryption to protect your information'
    },
    {
      q: ar ? 'كيف يتم استخدام أموالي؟' : 'How is my money used?',
      a: ar ? '85% من تبرعاتك تذهب مباشرة للبرامج، و15% للإدارة' : '85% goes directly to programs, 15% to operations'
    },
    {
      q: ar ? 'هل تبرعاتي معفاة من الضرائب؟' : 'Are donations tax-deductible?',
      a: ar ? 'نعم، JHCO منظمة خيرية مسجلة رسمياً' : 'Yes, JHCO is a registered charity'
    },
    {
      q: ar ? 'هل يمكنني تغيير التبرع الشهري؟' : 'Can I change my recurring donation?',
      a: ar ? 'بالطبع، يمكنك التعديل أو الإيقاف في أي وقت' : 'Of course, you can modify or pause anytime'
    },
  ];

  return (
    <>
      {/* HERO SECTION - Royal Elegance */}
      <section style={{
        background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '0 0 24px 0',
            fontFamily: 'Garamond, serif',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {ar ? '💝 اصنع فرقاً حقيقياً اليوم' : '💝 Make a Real Difference Today'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '32px',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            {ar ? 'كل تبرع هو قصة نجاح. انضم إلى آلاف المتبرعين الذين يغيرون الحياة.' : 'Every donation is a success story. Join thousands changing lives.'}
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: '#c41e3a',
              color: 'white',
              border: 'none',
              borderRadius: '0px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              boxShadow: '0 4px 15px rgba(196, 30, 58, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {ar ? '↓ ابدأ التبرع الآن' : '↓ Donate Now'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid #d4af37',
              borderRadius: '0px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {ar ? 'تعرف على تأثيرنا' : 'See Our Impact'}
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT CALCULATOR - Royal Elegance */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8',
        borderTop: '4px solid #d4af37'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#4a148c',
            marginBottom: '16px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {ar ? 'شاهد تأثير تبرعك' : 'See Your Impact'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'حرك الشريط لمعرفة كيف يؤثر تبرعك' : 'Move the slider to see how your donation makes a difference'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            {impactLevels.map((level, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: 'white',
                borderRadius: '0px',
                textAlign: 'center',
                border: `2px solid ${level.color}`,
                transition: 'all 250ms ease',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '12px'
                }}>
                  {level.icon}
                </div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: level.color,
                  marginBottom: '8px'
                }}>
                  ${level.amount}
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#0a1428',
                  margin: '0',
                  fontWeight: '500'
                }}>
                  {level.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION TIERS - Color-Coded & Clear */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#4a148c',
            marginBottom: '16px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {ar ? 'اختر مستوى التبرع' : 'Choose Your Giving Level'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'كل مستوى يأتي مع فوائد حصرية' : 'Each level comes with exclusive benefits'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}>
            {donationTiers.map((tier, idx) => (
              <button key={idx} style={{
                padding: '36px 24px',
                backgroundColor: tier.bgColor,
                border: `3px solid ${tier.color}`,
                borderRadius: '0px',
                cursor: 'pointer',
                transition: 'all 250ms ease',
                textAlign: 'center',
                position: 'relative',
                transform: 'translateY(0)',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>
                  {tier.icon}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: tier.color,
                  marginBottom: '8px'
                }}>
                  ${tier.amount}
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#0a1428',
                  margin: '0',
                  fontWeight: '500'
                }}>
                  {tier.name}
                </p>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: '#6b6b6b', marginBottom: '16px' }}>
              {ar ? 'أو أدخل مبلغاً مخصصاً' : 'Or enter a custom amount'}
            </p>
            <input
              type="number"
              placeholder={ar ? 'مبلغ مخصص' : 'Custom Amount'}
              style={{
                padding: '16px 24px',
                borderRadius: '0px',
                border: '2px solid #e8b923',
                fontSize: '18px',
                width: '220px',
                textAlign: 'center',
                fontWeight: '500',
                transition: 'all 250ms ease'
              }}
            />
          </div>
        </div>
      </section>

      {/* GIVING OPTIONS - Multiple Ways */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5e6d3',
        borderTop: '2px solid #e8b923'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center'
          }}>
            {ar ? 'طرق التبرع' : 'Ways to Give'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {givingOptions.map((option, idx) => (
              <div key={idx} style={{
                padding: '40px 28px',
                backgroundColor: 'white',
                borderRadius: '0px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 250ms ease',
                borderTop: `4px solid ${option.color}`,
                transform: option.highlight ? 'scale(1.02)' : 'scale(1)',
                position: 'relative'
              }}>
                {option.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: option.color,
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {ar ? 'الأكثر شيوعاً' : 'Most Popular'}
                  </div>
                )}
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {option.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {option.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  {option.desc}
                </p>
                <button style={{
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: option.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0px',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 250ms ease'
                }}>
                  {ar ? 'ابدأ الآن' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY - Emotional Connection */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: '#f5f1e8',
              borderRadius: '0px',
              padding: '60px 40px',
              textAlign: 'center',
              fontSize: '120px'
            }}>
              👨‍👩‍👧‍👦
            </div>
            <div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '400',
                color: '#0a1428',
                marginBottom: '24px',
                fontFamily: 'Georgia, serif'
              }}>
                {ar ? 'قصة أمل حقيقية' : 'A Story of Hope'}
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b6b6b',
                lineHeight: '1.8',
                marginBottom: '24px'
              }}>
                {ar ? 'فاطمة وأطفالها الثلاثة عاشوا بلا مأوى لمدة سنة. بفضل تبرعات مثل تبرعك، استطاعوا الحصول على مسكن آمن وتدريب على سبل العيش. اليوم، فاطمة تدير متجراً صغيراً وتعيل أطفالها.' : 'Fatima and her three children lived homeless for a year. Thanks to donors like you, they got safe shelter and livelihood training. Today, Fatima runs a small shop and supports her family.'}
              </p>
              <blockquote style={{
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#e74c3c',
                borderLeft: '4px solid #e74c3c',
                paddingLeft: '24px',
                margin: '32px 0',
                fontWeight: '500'
              }}>
                {ar ? '"تبرعاتكم أعطتني أملاً وفرصة ثانية. شكراً لأنكم غيرتم حياتي."' : '"Your donations gave me hope and a second chance. Thank you for changing my life."'}
              </blockquote>
              <p style={{ fontSize: '14px', color: '#6b6b6b', fontWeight: '600' }}>
                {ar ? '- فاطمة محمد، المستفيدة' : '- Fatima Muhammad, Beneficiary'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS TRACKER - Social Proof */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8',
        borderTop: '4px solid #d4af37'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '48px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center'
          }}>
            {ar ? 'نحو حدفنا الشهري' : 'This Month\'s Campaign'}
          </h2>

          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '0px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '24px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              <span style={{ color: '#0a1428' }}>
                {ar ? 'هدف الشهر' : 'Monthly Goal'}
              </span>
              <span style={{ color: '#e74c3c' }}>$10,000</span>
            </div>

            <div style={{
              width: '100%',
              height: '24px',
              backgroundColor: '#e8dcc8',
              borderRadius: '0px',
              overflow: 'hidden',
              marginBottom: '24px'
            }}>
              <div style={{
                height: '100%',
                width: '75%',
                background: 'linear-gradient(90deg, #e74c3c, #e8b923)',
                borderRadius: '0px',
                transition: 'width 500ms ease'
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px',
              textAlign: 'center'
            }}>
              <div>
                <p style={{ fontSize: '24px', fontWeight: '600', color: '#e74c3c', margin: '0' }}>
                  $7,500
                </p>
                <p style={{ fontSize: '14px', color: '#6b6b6b', margin: '8px 0 0' }}>
                  {ar ? 'تم جمعه' : 'Raised'}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '24px', fontWeight: '600', color: '#1abc9c', margin: '0' }}>
                  1,284
                </p>
                <p style={{ fontSize: '14px', color: '#6b6b6b', margin: '8px 0 0' }}>
                  {ar ? 'متبرع' : 'Donors'}
                </p>
              </div>
            </div>

            <div style={{
              marginTop: '32px',
              padding: '20px',
              backgroundColor: '#f5f1e8',
              borderRadius: '0px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '16px', color: '#0a1428', margin: '0' }}>
                {ar ? '🎯 ساعدنا في الوصول إلى الهدف! ننقصنا $2,500 فقط' : '🎯 Help us reach our goal! We\'re just $2,500 away'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DONOR TESTIMONIALS - Royal Trust */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#001a4d',
        borderTop: '4px solid #d4af37'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '60px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {ar ? 'شهادات المتبرعين' : 'Donor Stories'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '0px',
                borderLeft: '4px solid #e8b923',
                transition: 'all 250ms ease'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {testimonial.image}
                </div>
                <blockquote style={{
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: '#ccc',
                  margin: '0 0 20px 0',
                  lineHeight: '1.7',
                  borderLeft: '2px solid #e8b923',
                  paddingLeft: '16px'
                }}>
                  {testimonial.quote}
                </blockquote>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#e8b923',
                  margin: '0 0 4px 0'
                }}>
                  {testimonial.name}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#95a5a6',
                  margin: '0'
                }}>
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DONATE - Royal Benefits */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center'
          }}>
            {ar ? 'لماذا JHCO؟' : 'Why Give to JHCO?'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '✅',
                title: ar ? 'احترافية' : 'Professional',
                desc: ar ? 'منظمة معترف بها وموثوقة منذ سنوات' : 'Established, recognized, and trusted'
              },
              {
                icon: '👑',
                title: ar ? 'ملكية' : 'Royal',
                desc: ar ? 'تحت الرعاية الملكية الهاشمية' : 'Under royal patronage'
              },
              {
                icon: '📊',
                title: ar ? 'فعالة' : 'Effective',
                desc: ar ? '85% من التبرعات تذهب للبرامج' : '85% goes to programs'
              },
              {
                icon: '❤️',
                title: ar ? 'تأثير' : 'Impact',
                desc: ar ? 'تغيير حقيقي قابل للقياس' : 'Measurable real change'
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: 'white',
                borderRadius: '0px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                borderTop: '4px solid #e8b923'
              }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Address Concerns */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        borderTop: '2px solid #e8b923'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Garamond, serif',
            textAlign: 'center'
          }}>
            {ar ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {faqItems.map((item, idx) => (
              <details key={idx} style={{
                padding: '24px',
                backgroundColor: '#f5f1e8',
                borderRadius: '0px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}>
                <summary style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  cursor: 'pointer'
                }}>
                  {item.q}
                </summary>
                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginTop: '16px',
                  lineHeight: '1.6',
                  margin: '16px 0 0 0'
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW-UP SECTION - Royal Service */}
      <section style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
        color: 'white',
        borderTop: '4px solid #d4af37'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? 'شارك تأثيرك' : 'Share Your Impact'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            {ar ? 'ألهم آخرين بقصتك. شارك كيف تساهم في تغيير الحياة.' : 'Inspire others with your story. Share how you\'re making a difference.'}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((platform) => (
              <button key={platform} style={{
                padding: '12px 28px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '0px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}>
                {platform}
              </button>
            ))}
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: '32px',
            borderRadius: '0px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '16px', fontWeight: '500' }}>
              {ar ? 'هل تريد التحديثات حول أثرك؟' : 'Want updates on your impact?'}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input
                type="email"
                placeholder={ar ? 'بريدك الإلكتروني' : 'Your email'}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '0px',
                  border: 'none',
                  fontSize: '16px'
                }}
              />
              <button style={{
                padding: '12px 28px',
                backgroundColor: '#0a1428',
                color: 'white',
                border: 'none',
                borderRadius: '0px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}>
                {ar ? 'اشترك' : 'Subscribe'}
              </button>
            </div>
          </div>

          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            margin: '0'
          }}>
            {ar ? 'أو ' : 'Or '}<Link href={`${base}/get-involved`} style={{ color: 'white', textDecoration: 'underline' }}>{ar ? 'تطوع معنا' : 'Volunteer with us'}</Link>
          </p>
        </div>
      </section>

      {/* TAX INFO */}
      <section style={{
        padding: '48px 32px',
        backgroundColor: '#f9f7f4',
        textAlign: 'center',
        borderTop: '2px solid #e8b923'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '16px',
            color: '#6b6b6b',
            margin: '0',
            lineHeight: '1.6'
          }}>
            {ar ? '✅ JHCO هي منظمة خيرية مسجلة رسمياً. قد تكون تبرعاتك معفاة من الضرائب. احتفظ برسالة التبرع الخاصة بك لأغراض ضريبية.' : '✅ JHCO is a registered charity. Your donations may be tax-deductible. Keep your donation receipt for tax purposes.'}
          </p>
        </div>
      </section>
    </>
  );
}
