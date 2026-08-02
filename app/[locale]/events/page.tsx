'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const eventsContent = {
  en: {
    title: 'Events Calendar',
    heroTitle: 'Upcoming & Past Events',
    heroSubtitle: 'Join us for fundraising events, awareness campaigns, and community gatherings.',
    upcomingSection: 'Upcoming Events',
    pastSection: 'Past Events',
    upcomingEvents: [
      {
        title: 'World Humanitarian Day Celebration',
        date: 'August 19, 2024',
        location: 'Amman, Jordan',
        time: '6:00 PM - 9:00 PM',
        type: 'Awareness',
        description: 'Join us in celebrating World Humanitarian Day with inspiring stories, live music, and refreshments.',
      },
      {
        title: 'Annual Gala Fundraiser',
        date: 'September 15, 2024',
        location: 'Marriott Hotel, Amman',
        time: '7:00 PM - 11:00 PM',
        type: 'Fundraiser',
        description: 'An elegant evening supporting JHCO programs. Dinner, silent auction, and live performances.',
      },
      {
        title: 'Run for Hope Marathon',
        date: 'October 5, 2024',
        location: 'Dead Sea Road, Amman',
        time: '6:00 AM Start',
        type: 'Community Activity',
        description: 'Half marathon and 5K run to raise funds for education programs in Yemen.',
      },
      {
        title: 'Healthcare Forum: Crisis Response',
        date: 'October 20, 2024',
        location: 'Conference Center, Amman',
        time: '9:00 AM - 1:00 PM',
        type: 'Workshop',
        description: 'Panel discussion on emergency medical response with international experts.',
      },
      {
        title: 'Women Empowerment Conference',
        date: 'November 8, 2024',
        location: 'Jordan Convention Center',
        time: '8:00 AM - 5:00 PM',
        type: 'Conference',
        description: 'Networking and learning opportunities for women entrepreneurs and leaders.',
      },
      {
        title: 'Holiday Charity Bazaar',
        date: 'December 10-15, 2024',
        location: 'City Mall, Amman',
        time: '10:00 AM - 8:00 PM',
        type: 'Bazaar',
        description: 'Shop handmade crafts from beneficiary communities. Proceeds support livelihoods programs.',
      },
    ],
    pastEvents: [
      {
        title: 'Ramadan Iftar Series',
        date: 'March 2024',
        location: 'Various Locations',
        type: 'Community',
        description: 'Community Iftar dinners raising awareness about food insecurity while building solidarity.',
      },
      {
        title: 'World Water Day Event',
        date: 'March 22, 2024',
        location: 'Ministry of Water, Amman',
        time: '2:00 PM - 5:00 PM',
        type: 'Awareness',
        description: 'Educational event highlighting our WASH programs and water access initiatives.',
      },
      {
        title: 'Education Summit 2024',
        date: 'April 15, 2024',
        location: 'University of Jordan',
        time: '9:00 AM - 4:00 PM',
        type: 'Summit',
        description: 'Forum on education access with participation from 500+ educators and advocates.',
      },
      {
        title: 'Spring Planting Campaign',
        date: 'May 2024',
        location: 'Jordan Valley',
        type: 'Environmental',
        description: 'Community tree planting initiative involving 1,000+ volunteers.',
      },
      {
        title: 'Turkey Earthquake Response Event',
        date: 'February 6-10, 2024',
        location: 'Turkey',
        type: 'Emergency Response',
        description: 'Immediate mobilization and emergency relief operations in earthquake-affected areas.',
      },
      {
        title: 'Annual Health Screening Camp',
        date: 'January 2024',
        location: 'Multiple Cities',
        type: 'Healthcare',
        description: 'Free health screening for 2,000+ individuals from vulnerable communities.',
      },
    ],
  },
  ar: {
    title: 'تقويم الأحداث',
    heroTitle: 'الأحداث القادمة والماضية',
    heroSubtitle: 'انضم إلينا في أحداث جمع التبرعات والحملات التوعوية واللقاءات المجتمعية.',
    upcomingSection: 'الأحداث القادمة',
    pastSection: 'الأحداث الماضية',
    upcomingEvents: [
      {
        title: 'احتفال اليوم الإنساني العالمي',
        date: '19 أغسطس، 2024',
        location: 'عمّان، الأردن',
        time: '6:00 مساءً - 9:00 مساءً',
        type: 'توعوي',
        description: 'انضم إلينا في الاحتفال بيوم الإنسان العالمي مع قصص ملهمة والموسيقى الحية والمرطبات.',
      },
      {
        title: 'حفل بنفيت سنوي',
        date: '15 سبتمبر، 2024',
        location: 'فندق ماريوت، عمّان',
        time: '7:00 مساءً - 11:00 مساءً',
        type: 'جمع تبرعات',
        description: 'مساء أنيق يدعم برامج الهيئة. عشاء، مزاد صامت وعروض حية.',
      },
      {
        title: 'ماراثون الأمل',
        date: '5 أكتوبر، 2024',
        location: 'طريق البحر الميت، عمّان',
        time: 'البداية 6:00 صباحاً',
        type: 'نشاط مجتمعي',
        description: 'ماراثون نصف وسباق 5 كيلومتر لجمع تبرعات لبرامج التعليم في اليمن.',
      },
      {
        title: 'ملتقى الرعاية الصحية: الاستجابة للأزمات',
        date: '20 أكتوبر، 2024',
        location: 'مركز المؤتمرات، عمّان',
        time: '9:00 صباحاً - 1:00 ظهراً',
        type: 'ورشة عمل',
        description: 'نقاش في اللجنة عن الاستجابة الطبية الطارئة مع خبراء دوليين.',
      },
      {
        title: 'مؤتمر تمكين المرأة',
        date: '8 نوفمبر، 2024',
        location: 'مركز الأردن للمؤتمرات',
        time: '8:00 صباحاً - 5:00 مساءً',
        type: 'مؤتمر',
        description: 'فرص الشبكات والتعلم لرائدات الأعمال والقيادات النسائيات.',
      },
      {
        title: 'بازار الخيرية الاحتفالي',
        date: '10-15 ديسمبر، 2024',
        location: 'سيتي مول، عمّان',
        time: '10:00 صباحاً - 8:00 مساءً',
        type: 'بازار',
        description: 'تسوق الحرف اليدوية من المجتمعات المستفيدة. تذهب الإيرادات لدعم برامج سبل العيش.',
      },
    ],
    pastEvents: [
      {
        title: 'سلسلة إفطارات رمضان',
        date: 'مارس 2024',
        location: 'مواقع مختلفة',
        type: 'مجتمعي',
        description: 'حفلات إفطار مجتمعية تثير الوعي بالجوع مع بناء التضامن.',
      },
      {
        title: 'حدث يوم المياه العالمي',
        date: '22 مارس، 2024',
        location: 'وزارة المياه، عمّان',
        time: '2:00 ظهراً - 5:00 مساءً',
        type: 'توعوي',
        description: 'حدث تعليمي يسلط الضوء على برامج WASH الخاصة بنا ومبادرات الوصول إلى المياه.',
      },
      {
        title: 'القمة التعليمية 2024',
        date: '15 أبريل، 2024',
        location: 'جامعة الأردن',
        time: '9:00 صباحاً - 4:00 مساءً',
        type: 'قمة',
        description: 'منتدى الوصول التعليمي بمشاركة 500+ معلم ودعاة.',
      },
      {
        title: 'حملة الزراعة الربيعية',
        date: 'مايو 2024',
        location: 'غور الأردن',
        type: 'بيئي',
        description: 'مبادرة زراعة الأشجار المجتمعية بمشاركة 1,000+ متطوع.',
      },
      {
        title: 'حدث الاستجابة لزلزال تركيا',
        date: '6-10 فبراير، 2024',
        location: 'تركيا',
        type: 'استجابة طارئة',
        description: 'تعبئة فورية وعمليات إغاثة طارئة في المناطق المتضررة من الزلزال.',
      },
      {
        title: 'معسكر الفحص الصحي السنوي',
        date: 'يناير 2024',
        location: 'مدن متعددة',
        type: 'رعاية صحية',
        description: 'فحص صحي مجاني ل 2,000+ فرد من المجتمعات الضعيفة.',
      },
    ],
  },
};

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = eventsContent[locale] || eventsContent.en;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Warm Hero Section */}
      <section style={{
        background: gradients.goldToWarm,
        color: 'white',
        padding: '100px 32px',
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
            {ar ? '🎪 الأحداث' : '🎪 EVENTS'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.lg} 0`,
            maxWidth: '800px',
            color: '#ffffff',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: '"Merriweather", Georgia, serif',
          fontWeight: '700',
          color: royalColors.darkNavy,
          marginBottom: `${spacing.xxxl}`,
          textAlign: ar ? 'right' : 'left',
          borderBottom: `3px solid ${royalColors.hashemiteGold}`,
          paddingBottom: spacing.lg,
        }}>
          {content.upcomingSection}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: spacing.xl,
          marginBottom: `${spacing.xxxl}`,
        }}>
          {content.upcomingEvents.map((event, idx) => (
            <div key={idx} style={{
              background: royalColors.ivoryBg,
              borderLeft: `4px solid ${royalColors.hashemiteGold}`,
              borderRadius: borderRadius.card,
              padding: spacing.xl,
              boxShadow: '0 4px 12px rgba(232, 185, 35, 0.15)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(232, 185, 35, 0.25)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(232, 185, 35, 0.15)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: spacing.md,
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  margin: '0',
                  flex: 1,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {event.title}
                </h3>
                <span style={{
                  background: royalColors.hashemiteGold,
                  color: royalColors.darkNavy,
                  padding: `${spacing.sm} ${spacing.md}`,
                  borderRadius: borderRadius.full,
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  marginLeft: ar ? '0' : spacing.md,
                  marginRight: ar ? spacing.md : '0',
                }}>
                  {event.type}
                </span>
              </div>

              <div style={{
                fontSize: '14px',
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{ marginBottom: spacing.sm }}>
                  <strong>📅 {event.date}</strong>
                  {event.time && <div>{event.time}</div>}
                </div>
                <div style={{ marginBottom: spacing.sm }}>
                  <strong>📍 {event.location}</strong>
                </div>
              </div>

              <p style={{
                fontSize: '15px',
                color: royalColors.textSecondary,
                lineHeight: '1.6',
                margin: `${spacing.lg} 0 0 0`,
                textAlign: ar ? 'right' : 'left',
              }}>
                {event.description}
              </p>

              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block',
                marginTop: spacing.xl,
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: royalColors.charityRed,
                borderRadius: borderRadius.button,
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(231, 76, 60, 0.2)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.redLight;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.charityRed;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.2)';
              }}
              >
                {ar ? 'معلومات إضافية' : 'Learn More'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section style={{
        background: 'rgba(232, 185, 35, 0.05)',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            color: royalColors.darkNavy,
            marginBottom: `${spacing.xxxl}`,
            textAlign: ar ? 'right' : 'left',
            borderBottom: `3px solid ${royalColors.hashemiteGold}`,
            paddingBottom: spacing.lg,
          }}>
            {content.pastSection}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing.xl,
          }}>
            {content.pastEvents.map((event, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: borderRadius.card,
                padding: spacing.lg,
                boxShadow: '0 4px 12px rgba(232, 185, 35, 0.12)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: spacing.md,
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    margin: '0',
                    flex: 1,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {event.title}
                  </h3>
                  <span style={{
                    background: 'rgba(232, 185, 35, 0.2)',
                    color: royalColors.darkNavy,
                    padding: `${spacing.xs} ${spacing.sm}`,
                    borderRadius: borderRadius.sm,
                    fontSize: '11px',
                    fontWeight: '600',
                    marginLeft: ar ? '0' : spacing.sm,
                    marginRight: ar ? spacing.sm : '0',
                  }}>
                    {event.type}
                  </span>
                </div>

                <div style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  marginBottom: spacing.sm,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {event.date} • {event.location}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.5',
                  margin: '0',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
