'use client';

import { use } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, gradients } from '@/lib/royalDesign';
import EventCard from '@/components/EventCard';

interface EventItem {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  dateEn: string;
  dateAr: string;
  timeEn?: string;
  timeAr?: string;
  locationEn: string;
  locationAr: string;
  icon: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: 'whd-2024',
    titleEn: 'World Humanitarian Day Celebration',
    titleAr: 'احتفال اليوم الإنساني العالمي',
    descriptionEn: 'Join us in celebrating World Humanitarian Day with inspiring stories, live music, and refreshments.',
    descriptionAr: 'انضم إلينا في الاحتفال بيوم الإنسان العالمي مع قصص ملهمة والموسيقى الحية والمرطبات.',
    dateEn: 'August 19, 2024',
    dateAr: '19 أغسطس، 2024',
    timeEn: '6:00 PM - 9:00 PM',
    timeAr: '6:00 مساءً - 9:00 مساءً',
    locationEn: 'Amman, Jordan',
    locationAr: 'عمّان، الأردن',
    icon: '📢',
  },
  {
    id: 'gala-2024',
    titleEn: 'Annual Gala Fundraiser',
    titleAr: 'حفل بنفيت سنوي',
    descriptionEn: 'An elegant evening supporting JHCO programs. Dinner, silent auction, and live performances.',
    descriptionAr: 'مساء أنيق يدعم برامج الهيئة. عشاء، مزاد صامت وعروض حية.',
    dateEn: 'September 15, 2024',
    dateAr: '15 سبتمبر، 2024',
    timeEn: '7:00 PM - 11:00 PM',
    timeAr: '7:00 مساءً - 11:00 مساءً',
    locationEn: 'Marriott Hotel, Amman',
    locationAr: 'فندق ماريوت، عمّان',
    icon: '🎗️',
  },
  {
    id: 'marathon-2024',
    titleEn: 'Run for Hope Marathon',
    titleAr: 'ماراثون الأمل',
    descriptionEn: 'Half marathon and 5K run to raise funds for education programs in Yemen.',
    descriptionAr: 'ماراثون نصف وسباق 5 كيلومتر لجمع تبرعات لبرامج التعليم في اليمن.',
    dateEn: 'October 5, 2024',
    dateAr: '5 أكتوبر، 2024',
    timeEn: '6:00 AM Start',
    timeAr: 'البداية 6:00 صباحاً',
    locationEn: 'Dead Sea Road, Amman',
    locationAr: 'طريق البحر الميت، عمّان',
    icon: '🏃',
  },
  {
    id: 'health-forum-2024',
    titleEn: 'Healthcare Forum: Crisis Response',
    titleAr: 'ملتقى الرعاية الصحية: الاستجابة للأزمات',
    descriptionEn: 'Panel discussion on emergency medical response with international experts.',
    descriptionAr: 'نقاش في اللجنة عن الاستجابة الطبية الطارئة مع خبراء دوليين.',
    dateEn: 'October 20, 2024',
    dateAr: '20 أكتوبر، 2024',
    timeEn: '9:00 AM - 1:00 PM',
    timeAr: '9:00 صباحاً - 1:00 ظهراً',
    locationEn: 'Conference Center, Amman',
    locationAr: 'مركز المؤتمرات، عمّان',
    icon: '🩺',
  },
  {
    id: 'women-conf-2024',
    titleEn: 'Women Empowerment Conference',
    titleAr: 'مؤتمر تمكين المرأة',
    descriptionEn: 'Networking and learning opportunities for women entrepreneurs and leaders.',
    descriptionAr: 'فرص الشبكات والتعلم لرائدات الأعمال والقيادات النسائيات.',
    dateEn: 'November 8, 2024',
    dateAr: '8 نوفمبر، 2024',
    timeEn: '8:00 AM - 5:00 PM',
    timeAr: '8:00 صباحاً - 5:00 مساءً',
    locationEn: 'Jordan Convention Center',
    locationAr: 'مركز الأردن للمؤتمرات',
    icon: '👥',
  },
  {
    id: 'bazaar-2024',
    titleEn: 'Holiday Charity Bazaar',
    titleAr: 'بازار الخيرية الاحتفالي',
    descriptionEn: 'Shop handmade crafts from beneficiary communities. Proceeds support livelihoods programs.',
    descriptionAr: 'تسوق الحرف اليدوية من المجتمعات المستفيدة. تذهب الإيرادات لدعم برامج سبل العيش.',
    dateEn: 'December 10-15, 2024',
    dateAr: '10-15 ديسمبر، 2024',
    timeEn: '10:00 AM - 8:00 PM',
    timeAr: '10:00 صباحاً - 8:00 مساءً',
    locationEn: 'City Mall, Amman',
    locationAr: 'سيتي مول، عمّان',
    icon: '🛍️',
  },
];

const pastEvents: EventItem[] = [
  {
    id: 'iftar-2024',
    titleEn: 'Ramadan Iftar Series',
    titleAr: 'سلسلة إفطارات رمضان',
    descriptionEn: 'Community Iftar dinners raising awareness about food insecurity while building solidarity.',
    descriptionAr: 'حفلات إفطار مجتمعية تثير الوعي بالجوع مع بناء التضامن.',
    dateEn: 'March 2024',
    dateAr: 'مارس 2024',
    locationEn: 'Various Locations',
    locationAr: 'مواقع مختلفة',
    icon: '🌙',
  },
  {
    id: 'water-day-2024',
    titleEn: 'World Water Day Event',
    titleAr: 'حدث يوم المياه العالمي',
    descriptionEn: 'Educational event highlighting our WASH programs and water access initiatives.',
    descriptionAr: 'حدث تعليمي يسلط الضوء على برامج WASH الخاصة بنا ومبادرات الوصول إلى المياه.',
    dateEn: 'March 22, 2024',
    dateAr: '22 مارس، 2024',
    timeEn: '2:00 PM - 5:00 PM',
    timeAr: '2:00 ظهراً - 5:00 مساءً',
    locationEn: 'Ministry of Water, Amman',
    locationAr: 'وزارة المياه، عمّان',
    icon: '💧',
  },
  {
    id: 'edu-summit-2024',
    titleEn: 'Education Summit 2024',
    titleAr: 'القمة التعليمية 2024',
    descriptionEn: 'Forum on education access with participation from 500+ educators and advocates.',
    descriptionAr: 'منتدى الوصول التعليمي بمشاركة 500+ معلم ودعاة.',
    dateEn: 'April 15, 2024',
    dateAr: '15 أبريل، 2024',
    timeEn: '9:00 AM - 4:00 PM',
    timeAr: '9:00 صباحاً - 4:00 مساءً',
    locationEn: 'University of Jordan',
    locationAr: 'جامعة الأردن',
    icon: '📚',
  },
  {
    id: 'planting-2024',
    titleEn: 'Spring Planting Campaign',
    titleAr: 'حملة الزراعة الربيعية',
    descriptionEn: 'Community tree planting initiative involving 1,000+ volunteers.',
    descriptionAr: 'مبادرة زراعة الأشجار المجتمعية بمشاركة 1,000+ متطوع.',
    dateEn: 'May 2024',
    dateAr: 'مايو 2024',
    locationEn: 'Jordan Valley',
    locationAr: 'غور الأردن',
    icon: '🌱',
  },
  {
    id: 'turkey-response-2024',
    titleEn: 'Turkey Earthquake Response Event',
    titleAr: 'حدث الاستجابة لزلزال تركيا',
    descriptionEn: 'Immediate mobilization and emergency relief operations in earthquake-affected areas.',
    descriptionAr: 'تعبئة فورية وعمليات إغاثة طارئة في المناطق المتضررة من الزلزال.',
    dateEn: 'February 6-10, 2024',
    dateAr: '6-10 فبراير، 2024',
    locationEn: 'Turkey',
    locationAr: 'تركيا',
    icon: '🚨',
  },
  {
    id: 'health-camp-2024',
    titleEn: 'Annual Health Screening Camp',
    titleAr: 'معسكر الفحص الصحي السنوي',
    descriptionEn: 'Free health screening for 2,000+ individuals from vulnerable communities.',
    descriptionAr: 'فحص صحي مجاني ل 2,000+ فرد من المجتمعات الضعيفة.',
    dateEn: 'January 2024',
    dateAr: 'يناير 2024',
    locationEn: 'Multiple Cities',
    locationAr: 'مدن متعددة',
    icon: '🏥',
  },
];

export default function EventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero */}
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
            {ar ? 'الأحداث القادمة والماضية' : 'Upcoming & Past Events'}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {ar
              ? 'انضم إلينا في أحداث جمع التبرعات والحملات التوعوية واللقاءات المجتمعية.'
              : 'Join us for fundraising events, awareness campaigns, and community gatherings.'}
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
          {ar ? 'الأحداث القادمة' : 'Upcoming Events'}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: spacing.xl,
        }}>
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              href={`/${locale}/contact`}
              locale={locale}
              status="upcoming"
            />
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
            {ar ? 'الأحداث الماضية' : 'Past Events'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing.xl,
          }}>
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                locale={locale}
                status="past"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
