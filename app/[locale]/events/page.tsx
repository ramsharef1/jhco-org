'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

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
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.crimson})`,
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
            color: royalColors.royalGold,
            margin: '0 0 16px 0',
          }}>
            {ar ? '🎪 الأحداث' : '🎪 EVENTS'}
          </p>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            margin: '0 0 16px 0',
            maxWidth: '800px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
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
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: 'Georgia, serif',
          color: royalColors.deepNavy,
          marginBottom: '48px',
          textAlign: ar ? 'right' : 'left',
          borderBottom: `3px solid ${royalColors.royalGold}`,
          paddingBottom: '16px',
        }}>
          {content.upcomingSection}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
        }}>
          {content.upcomingEvents.map((event, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderLeft: `4px solid ${royalColors.royalGold}`,
              borderRadius: '4px',
              padding: '32px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(${royalColors.deepNavy}, 0.12)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: royalColors.deepNavy,
                  margin: '0',
                  flex: 1,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {event.title}
                </h3>
                <span style={{
                  background: royalColors.royalGold,
                  color: royalColors.deepNavy,
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  marginLeft: ar ? '0' : '12px',
                  marginRight: ar ? '12px' : '0',
                }}>
                  {event.type}
                </span>
              </div>

              <div style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '12px',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{ marginBottom: '8px' }}>
                  <strong>📅 {event.date}</strong>
                  {event.time && <div> {event.time}</div>}
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <strong>📍 {event.location}</strong>
                </div>
              </div>

              <p style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.6',
                margin: '16px 0 0 0',
                textAlign: ar ? 'right' : 'left',
              }}>
                {event.description}
              </p>

              <Link href={`/${locale}/contact`} style={{
                display: 'inline-block',
                marginTop: '20px',
                color: royalColors.deepNavy,
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: '8px 16px',
                border: `1px solid ${royalColors.deepNavy}`,
                borderRadius: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
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
        background: `rgba(${royalColors.royalGold}, 0.04)`,
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: 'Georgia, serif',
            color: royalColors.deepNavy,
            marginBottom: '48px',
            textAlign: ar ? 'right' : 'left',
            borderBottom: `3px solid ${royalColors.royalGold}`,
            paddingBottom: '16px',
          }}>
            {content.pastSection}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {content.pastEvents.map((event, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: royalColors.deepNavy,
                    margin: '0',
                    flex: 1,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {event.title}
                  </h3>
                  <span style={{
                    background: `rgba(${royalColors.royalGold}, 0.2)`,
                    color: royalColors.deepNavy,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '600',
                    marginLeft: ar ? '0' : '8px',
                    marginRight: ar ? '8px' : '0',
                  }}>
                    {event.type}
                  </span>
                </div>

                <div style={{
                  fontSize: '13px',
                  color: '#888',
                  marginBottom: '8px',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {event.date} • {event.location}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#666',
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
