'use client';
import React, { useState, useEffect, use } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Global Impact',
    hero: {
      headline: 'Our Global Impact',
      subheading: 'Creating lasting change in the lives of millions across the world',
    },
    statistics: {
      title: 'Impact by the Numbers',
      description: 'Measurable outcomes demonstrating JHCO\'s reach and effectiveness',
      stats: [
        { number: '30+', label: 'Countries Served', icon: '🌍', color: royalColors.charityRed },
        { number: '75K+', label: 'Families Supported', icon: '👨‍👩‍👧‍👦', color: royalColors.compassionTeal },
        { number: '2.5K+', label: 'Volunteers Active', icon: '🤝', color: royalColors.impactGreen },
        { number: '$50M+', label: 'Delivered Annually', icon: '💚', color: royalColors.hashemiteGold },
      ],
    },
    featuredStory: {
      title: 'Featured Success Story',
      name: 'Amina Hassan',
      location: 'Sudan',
      program: 'Education & Literacy Program',
      quote: 'JHCO gave me the opportunity to learn to read and write. Now I teach my children and earn income through literacy training in my village.',
      impact: 'From illiterate to community educator - now supporting 15 other women in her village',
      ctaText: 'Read More Stories',
    },
    programs: {
      title: 'Program Impact Breakdown',
      subtitle: 'How our resources are deployed across humanitarian programs',
      programs: [
        {
          name: 'Emergency Response',
          percentage: '25%',
          icon: '🚨',
          beneficiaries: '15,000+ families',
          color: royalColors.charityRed,
        },
        {
          name: 'Healthcare',
          percentage: '20%',
          icon: '🏥',
          beneficiaries: '100,000+ consultations',
          color: royalColors.compassionTeal,
        },
        {
          name: 'Education',
          percentage: '18%',
          icon: '📚',
          beneficiaries: '25,000+ students',
          color: royalColors.impactGreen,
        },
        {
          name: 'Food Security',
          percentage: '15%',
          icon: '🍽️',
          beneficiaries: '50,000+ people',
          color: royalColors.hashemiteGold,
        },
        {
          name: 'Shelter & WASH',
          percentage: '12%',
          icon: '🏠',
          beneficiaries: '10,000+ people',
          color: royalColors.skyBlue,
        },
        {
          name: 'Livelihoods',
          percentage: '10%',
          icon: '💼',
          beneficiaries: '5,000+ people',
          color: royalColors.charityRed,
        },
      ],
    },
    testimonials: {
      title: 'Voices of Change',
      subtitle: 'Direct testimonies from people whose lives have been transformed',
      testimonials: [
        {
          name: 'Amina Hassan',
          role: 'Education Program',
          location: 'Sudan',
          quote: 'JHCO gave me the opportunity to learn to read and write. Now I teach my children.',
          rating: 5,
        },
        {
          name: 'Ahmed Mohammed',
          role: 'Livelihood Program',
          location: 'Yemen',
          quote: 'The microfinance training transformed my life. I now run a successful business.',
          rating: 5,
        },
        {
          name: 'Layla Ibrahim',
          role: 'Healthcare Program',
          location: 'Palestine',
          quote: 'JHCO\'s mobile clinic saved my life and my baby\'s life.',
          rating: 5,
        },
      ],
    },
    statistics_section: {
      title: 'Year-Over-Year Growth',
      subtitle: 'Expanding our reach and deepening our impact',
      metrics: [
        { year: '2021', families: '45K', countries: '18', staff: '120' },
        { year: '2022', families: '58K', countries: '24', staff: '150' },
        { year: '2023', families: '68K', countries: '28', staff: '180' },
        { year: '2024', families: '75K+', countries: '30+', staff: '200+' },
      ],
    },
    calculator: {
      title: 'See Your Potential Impact',
      subtitle: 'Discover what your contribution could provide to families in need',
      placeholder: 'Enter amount in USD',
      impacts: [
        { amount: 10, impact: 'Meals for 1 family for a week' },
        { amount: 25, impact: 'School supplies for 1 child for a year' },
        { amount: 50, impact: 'First aid medical kit for a community' },
        { amount: 100, impact: 'Vocational training for 1 person' },
        { amount: 500, impact: 'Small business startup kit' },
        { amount: 1000, impact: 'Water well for a village' },
      ],
    },
    report: {
      title: 'Financial Transparency',
      subtitle: 'Annual Impact Reports',
      cta: 'Download Full Report',
      description: 'Access our comprehensive annual reports showcasing financial transparency and detailed impact metrics.',
    },
  },
  ar: {
    title: 'التأثير العالمي',
    hero: {
      headline: 'تأثيرنا العالمي',
      subheading: 'خلق تغيير دائم في حياة الملايين حول العالم',
    },
    statistics: {
      title: 'التأثير بالأرقام',
      description: 'النتائج القابلة للقياس التي تدل على وصول وفعالية الهيئة',
      stats: [
        { number: '30+', label: 'دول مخدومة', icon: '🌍', color: royalColors.charityRed },
        { number: '75K+', label: 'أسر مدعومة', icon: '👨‍👩‍👧‍👦', color: royalColors.compassionTeal },
        { number: '2.5K+', label: 'متطوعون نشطون', icon: '🤝', color: royalColors.impactGreen },
        { number: '$50M+', label: 'موارد مستخدمة', icon: '💚', color: royalColors.hashemiteGold },
      ],
    },
    featuredStory: {
      title: 'قصة نجاح مميزة',
      name: 'أمينة حسن',
      location: 'السودان',
      program: 'برنامج التعليم ومحو الأمية',
      quote: 'أعطتني الهيئة فرصة تعلم القراءة والكتابة. الآن أعلم أطفالي وأكسب دخلاً من خلال تدريب محو الأمية.',
      impact: 'من أمية إلى معلمة مجتمعية - تدعم الآن 15 امرأة أخرى في قريتها',
      ctaText: 'قراءة المزيد من القصص',
    },
    programs: {
      title: 'توزيع تأثير البرامج',
      subtitle: 'كيفية توزيع مواردنا عبر البرامج الإنسانية',
      programs: [
        {
          name: 'الاستجابة للطوارئ',
          percentage: '25%',
          icon: '🚨',
          beneficiaries: '15000+ أسرة',
          color: royalColors.charityRed,
        },
        {
          name: 'الصحة',
          percentage: '20%',
          icon: '🏥',
          beneficiaries: '100000+ استشارة',
          color: royalColors.compassionTeal,
        },
        {
          name: 'التعليم',
          percentage: '18%',
          icon: '📚',
          beneficiaries: '25000+ طالب',
          color: royalColors.impactGreen,
        },
        {
          name: 'الأمن الغذائي',
          percentage: '15%',
          icon: '🍽️',
          beneficiaries: '50000+ شخص',
          color: royalColors.hashemiteGold,
        },
        {
          name: 'المأوى والمياه',
          percentage: '12%',
          icon: '🏠',
          beneficiaries: '10000+ شخص',
          color: royalColors.skyBlue,
        },
        {
          name: 'سبل العيش',
          percentage: '10%',
          icon: '💼',
          beneficiaries: '5000+ شخص',
          color: royalColors.charityRed,
        },
      ],
    },
    testimonials: {
      title: 'أصوات التغيير',
      subtitle: 'شهادات مباشرة من الأشخاص الذين تحولت حياتهم',
      testimonials: [
        {
          name: 'أمينة حسن',
          role: 'برنامج التعليم',
          location: 'السودان',
          quote: 'أعطتني الهيئة فرصة تعلم القراءة والكتابة. الآن أعلم أطفالي.',
          rating: 5,
        },
        {
          name: 'أحمد محمد',
          role: 'برنامج سبل العيش',
          location: 'اليمن',
          quote: 'غيّر التدريب المالي حياتي. الآن أدير عملاً ناجحاً.',
          rating: 5,
        },
        {
          name: 'ليلى إبراهيم',
          role: 'برنامج الصحة',
          location: 'فلسطين',
          quote: 'أنقذتنا عيادة الهيئة المتنقلة وأنقذت حياة طفلي.',
          rating: 5,
        },
      ],
    },
    statistics_section: {
      title: 'النمو السنوي',
      subtitle: 'توسيع وصولنا وتعميق تأثيرنا',
      metrics: [
        { year: '2021', families: '45K', countries: '18', staff: '120' },
        { year: '2022', families: '58K', countries: '24', staff: '150' },
        { year: '2023', families: '68K', countries: '28', staff: '180' },
        { year: '2024', families: '75K+', countries: '30+', staff: '200+' },
      ],
    },
    calculator: {
      title: 'شاهد تأثيرك المحتمل',
      subtitle: 'اكتشف ما يمكن لمساهمتك تقديمه للأسر المحتاجة',
      placeholder: 'أدخل المبلغ بالدولار',
      impacts: [
        { amount: 10, impact: 'وجبات لأسرة واحدة لمدة أسبوع' },
        { amount: 25, impact: 'لوازم مدرسية لطفل واحد لمدة سنة' },
        { amount: 50, impact: 'مجموعة إسعافات أولية لمجتمع' },
        { amount: 100, impact: 'تدريب مهني لشخص واحد' },
        { amount: 500, impact: 'مجموعة بدء عمل صغير' },
        { amount: 1000, impact: 'بئر ماء لقرية' },
      ],
    },
    report: {
      title: 'الشفافية المالية',
      subtitle: 'تقارير التأثير السنوية',
      cta: 'تحميل التقرير الكامل',
      description: 'الوصول إلى تقاريرنا الشاملة السنوية التي تعرض الشفافية المالية والمقاييس التفصيلية للتأثير.',
    },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials, ar }: { testimonials: any[]; ar: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '48px 32px',
        borderRadius: '16px',
        boxShadow: shadows.lg,
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {/* Stars */}
        <div style={{ marginBottom: '24px' }}>
          {[...Array(testimonials[current].rating)].map((_, i) => (
            <span key={i} style={{ fontSize: '20px', marginRight: '4px' }}>⭐</span>
          ))}
        </div>

        {/* Quote */}
        <blockquote style={{
          fontSize: '20px',
          fontStyle: 'italic',
          color: royalColors.textOfficial,
          margin: '0 0 32px 0',
          lineHeight: '1.8',
          textAlign: ar ? 'right' : 'left',
          borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
          borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
          paddingRight: ar ? '24px' : '0',
          paddingLeft: ar ? '0' : '24px',
        }}>
          "{testimonials[current].quote}"
        </blockquote>

        {/* Author */}
        <div style={{ textAlign: ar ? 'right' : 'left' }}>
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: royalColors.darkNavy,
            margin: '0 0 4px 0',
          }}>
            {testimonials[current].name}
          </p>
          <p style={{
            fontSize: '14px',
            color: royalColors.darkGrayText,
            margin: '0',
          }}>
            {testimonials[current].role} - {testimonials[current].location}
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px',
      }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? '24px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: current === i ? royalColors.hashemiteGold : royalColors.borderFormal,
              cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Impact Calculator Component
const ImpactCalculator = ({ impacts, ar, placeholder }: { impacts: any[]; ar: boolean; placeholder: string }) => {
  const [amount, setAmount] = useState(10);

  const getImpact = () => {
    const sortedImpacts = [...impacts].sort((a, b) => b.amount - a.amount);
    for (let impact of sortedImpacts) {
      if (amount >= impact.amount) {
        return impact.impact;
      }
    }
    return impacts[0].impact;
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '48px 32px',
      borderRadius: '16px',
      boxShadow: shadows.lg,
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <div style={{ marginBottom: '32px' }}>
        <label style={{
          display: 'block',
          fontSize: '18px',
          fontWeight: '600',
          color: royalColors.darkNavy,
          marginBottom: '12px',
        }}>
          ${amount}
        </label>
        <input
          type="range"
          min="5"
          max="2000"
          step="5"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: royalColors.borderFormal,
            outline: 'none',
            WebkitAppearance: 'none',
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: royalColors.darkGrayText,
          marginTop: '8px',
        }}>
          <span>$5</span>
          <span>$2,000</span>
        </div>
      </div>

      <div style={{
        backgroundColor: royalColors.ivoryBg,
        padding: '24px',
        borderRadius: '12px',
        textAlign: 'center',
        borderLeft: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <p style={{
          fontSize: '16px',
          color: royalColors.darkGrayText,
          margin: '0 0 8px 0',
        }}>
          Your contribution will provide:
        </p>
        <p style={{
          fontSize: '20px',
          fontWeight: '600',
          color: royalColors.darkNavy,
          margin: '0',
        }}>
          {getImpact()}
        </p>
      </div>
    </div>
  );
};

export default function ImpactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.richCream }}>
      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.compassionTeal} 0%, ${royalColors.hashemiteGold} 100%)`,
        padding: '120px 32px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          opacity: '0.1',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M10 10 L90 90 M90 10 L10 90" stroke="white" stroke-width="2"/%3E%3C/svg%3E")',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
            margin: '0 0 24px 0',
          }}>
            ✨ Global Humanitarian Work ✨
          </p>
          <h1 style={{
            fontSize: '72px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '24px',
            margin: '0 0 24px 0',
          }}>
            {content.hero.headline}
          </h1>
          <p style={{
            fontSize: '22px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* IMPACT STATISTICS */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              {content.statistics.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              {content.statistics.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.statistics.stats.map((stat: any, idx: number) => (
              <div key={idx} style={{
                backgroundColor: stat.color,
                padding: '40px 32px',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center',
                boxShadow: shadows.lg,
                transition: 'transform 300ms ease, box-shadow 300ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = shadows.xl;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = shadows.lg;
              }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '56px',
                  fontFamily: royalTypography.serif,
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '0',
                  margin: '0',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORLD MAP PLACEHOLDER */}
      <section style={{
        padding: '96px 32px',
        backgroundColor: royalColors.ivoryBg,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              margin: '0 0 16px 0',
            }}>
              Where We Work
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              margin: '0',
            }}>
              Active programs in 30+ countries across three continents
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxShadow: shadows.lg,
          }}>
            <div style={{ fontSize: '80px', marginBottom: '24px' }}>🌍</div>
            <p style={{
              fontSize: '24px',
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              Interactive World Map
            </p>
            <p style={{
              fontSize: '16px',
              color: royalColors.darkGrayText,
              maxWidth: '500px',
              lineHeight: '1.6',
              margin: '0',
            }}>
              Hover over regions to explore our programs, beneficiary numbers, and local impact stories. Click any country to learn more about our work in that region.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SUCCESS STORY */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Photo Placeholder */}
            <div style={{
              backgroundColor: royalColors.ivoryBg,
              borderRadius: '16px',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: `linear-gradient(135deg, ${royalColors.compassionTeal}40, ${royalColors.hashemiteGold}40)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: '120px', opacity: '0.8' }}>👩‍🏫</div>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <p style={{
                color: royalColors.hashemiteGold,
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '16px',
                margin: '0 0 16px 0',
              }}>
                Success Story
              </p>
              <h2 style={{
                fontSize: '42px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '12px',
                margin: '0 0 12px 0',
              }}>
                {content.featuredStory.name}
              </h2>
              <p style={{
                fontSize: '16px',
                color: royalColors.darkGrayText,
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}>
                {content.featuredStory.location} • {content.featuredStory.program}
              </p>

              <blockquote style={{
                fontSize: '18px',
                fontStyle: 'italic',
                color: royalColors.textOfficial,
                borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                paddingLeft: '24px',
                marginBottom: '24px',
                margin: '0 0 24px 0',
                paddingRight: '0',
              }}>
                "{content.featuredStory.quote}"
              </blockquote>

              <div style={{
                backgroundColor: royalColors.ivoryBg,
                padding: '24px',
                borderRadius: '12px',
                marginBottom: '32px',
                borderLeft: `4px solid ${royalColors.impactGreen}`,
              }}>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.darkGrayText,
                  marginBottom: '8px',
                  margin: '0 0 8px 0',
                }}>
                  Impact:
                </p>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  margin: '0',
                }}>
                  {content.featuredStory.impact}
                </p>
              </div>

              <button style={{
                backgroundColor: royalColors.impactGreen,
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.greenDark;
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.impactGreen;
                e.currentTarget.style.transform = 'scale(1)';
              }}
              >
                {content.featuredStory.ctaText} →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM IMPACT BREAKDOWN */}
      <section style={{
        padding: '96px 32px',
        backgroundColor: royalColors.ivoryBg,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              {content.programs.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              {content.programs.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {content.programs.programs.map((program: any, idx: number) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: shadows.md,
                transition: 'all 300ms ease',
                borderTop: `4px solid ${program.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = shadows.xl;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = shadows.md;
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ fontSize: '40px' }}>{program.icon}</div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: program.color,
                  }}>
                    {program.percentage}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                }}>
                  {program.name}
                </h3>
                <div style={{
                  height: '4px',
                  backgroundColor: program.color,
                  borderRadius: '2px',
                  marginBottom: '16px',
                }} />
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textOfficial,
                  fontWeight: '600',
                  margin: '0',
                }}>
                  {program.beneficiaries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section style={{
        padding: '96px 32px',
        backgroundColor: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              {content.testimonials.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              {content.testimonials.subtitle}
            </p>
          </div>

          <TestimonialCarousel testimonials={content.testimonials.testimonials} ar={ar} />
        </div>
      </section>

      {/* ANNUAL STATISTICS */}
      <section style={{
        padding: '96px 32px',
        backgroundColor: royalColors.ivoryBg,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              {content.statistics_section.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              {content.statistics_section.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.statistics_section.metrics.map((metric: any, idx: number) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: shadows.md,
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}>
                  {metric.year}
                </p>
                <div style={{
                  display: 'grid',
                  gap: '16px',
                }}>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.darkGrayText,
                      marginBottom: '4px',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Families Supported
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0',
                    }}>
                      {metric.families}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.darkGrayText,
                      marginBottom: '4px',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Countries
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0',
                    }}>
                      {metric.countries}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.darkGrayText,
                      marginBottom: '4px',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Staff
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0',
                    }}>
                      {metric.staff}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT CALCULATOR */}
      <section style={{
        padding: '96px 32px',
        backgroundColor: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}>
              {content.calculator.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.darkGrayText,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              {content.calculator.subtitle}
            </p>
          </div>

          <ImpactCalculator impacts={content.calculator.impacts} ar={ar} placeholder={content.calculator.placeholder} />
        </div>
      </section>

      {/* DOWNLOAD REPORT */}
      <section style={{
        padding: '96px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            marginBottom: '16px',
            margin: '0 0 16px 0',
          }}>
            {content.report.title}
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.report.description}
          </p>

          <button style={{
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '16px 48px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = `0 8px 24px ${royalColors.hashemiteGold}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            {content.report.cta} ↓
          </button>
        </div>
      </section>
    </div>
  );
}
