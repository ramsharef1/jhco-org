'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

const videosContent = {
  en: {
    title: 'Video Library',
    heroTitle: 'Video Stories & Documentaries',
    heroSubtitle: 'Explore our collection of videos showcasing JHCO programs and beneficiary stories.',
    categories: [
      {
        title: 'Program Documentaries',
        icon: '🎬',
        description: 'In-depth documentary films about our major programs and initiatives.',
        videos: [
          { title: 'Syria Healthcare Initiative', duration: '15:42', description: 'A look inside our emergency medical clinics serving Syrian refugees' },
          { title: 'Yemen Education Project', duration: '12:30', description: 'How we\'re bringing education to children in Yemen' },
          { title: 'South Sudan WASH Program', duration: '18:15', description: 'Water, sanitation and hygiene initiatives transforming communities' },
          { title: 'Bangladesh Livelihoods', duration: '14:20', description: 'Empowering women through skills training and micro-business' },
        ],
      },
      {
        title: 'Beneficiary Stories',
        icon: '🎥',
        description: 'Personal stories from individuals whose lives have been transformed by JHCO.',
        videos: [
          { title: 'Zainab\'s Journey', duration: '8:45', description: 'From refugee to healthcare worker - Zainab\'s inspiring story' },
          { title: 'Ahmed\'s Education', duration: '7:30', description: 'How our scholarship changed a young student\'s future' },
          { title: 'Fatima\'s Business', duration: '9:15', description: 'From poverty to prosperity through our livelihood program' },
          { title: 'Mohammad\'s Hope', duration: '6:20', description: 'Recovery and resilience after conflict' },
        ],
      },
      {
        title: 'Emergency Response',
        icon: '🚨',
        description: 'Videos documenting our rapid response to humanitarian emergencies.',
        videos: [
          { title: 'Turkey Earthquake Relief', duration: '13:50', description: 'Our emergency response to the devastating earthquakes' },
          { title: 'Gaza Crisis Support', duration: '11:25', description: 'Delivering aid in the midst of conflict' },
          { title: 'Flood Response', duration: '9:40', description: 'Swift action during natural disasters' },
          { title: 'Refugee Camp Setup', duration: '10:15', description: 'Building emergency shelters and services' },
        ],
      },
      {
        title: 'Impact & Results',
        icon: '📊',
        description: 'Data-driven videos showing the measurable impact of JHCO programs.',
        videos: [
          { title: '2023 Impact Report', duration: '16:30', description: 'Overview of our achievements and lives changed in 2023' },
          { title: 'Healthcare Impact', duration: '12:45', description: 'Medical services reaching millions across multiple countries' },
          { title: 'Education Outcomes', duration: '14:10', description: 'Student success stories and graduation celebrations' },
          { title: 'Community Transformation', duration: '11:55', description: 'Long-term impact in sustainable development projects' },
        ],
      },
      {
        title: 'How to Help',
        icon: '❤️',
        description: 'Learn about ways you can support JHCO and make a difference.',
        videos: [
          { title: 'Donate & Support', duration: '5:30', description: 'How your donations save lives and change communities' },
          { title: 'Volunteer With Us', duration: '6:45', description: 'Opportunities to volunteer and serve with JHCO' },
          { title: 'Corporate Partnership', duration: '7:20', description: 'How businesses can partner with us for social impact' },
          { title: 'Events & Activities', duration: '4:55', description: 'Join us at fundraising and awareness events' },
        ],
      },
      {
        title: 'Leadership & Vision',
        icon: '👑',
        description: 'Insights from JHCO leadership about our mission and future direction.',
        videos: [
          { title: 'Executive Director Message', duration: '8:30', description: 'Leadership vision for expanding humanitarian impact' },
          { title: 'Royal Patronage Impact', duration: '10:15', description: 'How royal patronage shapes our work' },
          { title: 'Strategic Direction', duration: '12:00', description: 'Our five-year strategic plan and objectives' },
          { title: 'Global Partnerships', duration: '11:30', description: 'Collaborating with international organizations' },
        ],
      },
    ],
  },
  ar: {
    title: 'مكتبة الفيديو',
    heroTitle: 'قصص الفيديو والأفلام الوثائقية',
    heroSubtitle: 'استكشف مجموعتنا من مقاطع الفيديو التي تعرض برامج الهيئة وقصص المستفيدين.',
    categories: [
      {
        title: 'أفلام البرامج الوثائقية',
        icon: '🎬',
        description: 'أفلام وثائقية تفصيلية عن برامجنا الرئيسية والمبادرات.',
        videos: [
          { title: 'مبادرة الرعاية الصحية بسوريا', duration: '15:42', description: 'نظرة داخل عيادتنا الطبية الطارئة التي تخدم اللاجئين السوريين' },
          { title: 'مشروع التعليم في اليمن', duration: '12:30', description: 'كيف نحضر التعليم للأطفال في اليمن' },
          { title: 'برنامج WASH في جنوب السودان', duration: '18:15', description: 'مبادرات المياه والصرف الصحي والنظافة تحول المجتمعات' },
          { title: 'سبل العيش في بنجلاديش', duration: '14:20', description: 'تمكين النساء من خلال التدريب على المهارات والمشاريع الصغيرة' },
        ],
      },
      {
        title: 'قصص المستفيدين',
        icon: '🎥',
        description: 'قصص شخصية لأفراد تغيرت حياتهم بفضل برامج الهيئة.',
        videos: [
          { title: 'رحلة زينب', duration: '8:45', description: 'من لاجئة إلى عاملة صحية - قصة زينب الملهمة' },
          { title: 'تعليم أحمد', duration: '7:30', description: 'كيف غيرت منحتنا مستقبل طالب شاب' },
          { title: 'عمل فاطمة', duration: '9:15', description: 'من الفقر إلى الازدهار من خلال برنامج سبل العيش' },
          { title: 'أمل محمد', duration: '6:20', description: 'التعافي والقدرة على الصمود بعد الصراع' },
        ],
      },
      {
        title: 'الاستجابة للطوارئ',
        icon: '🚨',
        description: 'مقاطع فيديو توثق استجابتنا السريعة للطوارئ الإنسانية.',
        videos: [
          { title: 'إغاثة زلزال تركيا', duration: '13:50', description: 'استجابتنا الطارئة للزلازل المدمرة' },
          { title: 'دعم أزمة غزة', duration: '11:25', description: 'توصيل المساعدات وسط الصراع' },
          { title: 'استجابة الفيضانات', duration: '9:40', description: 'إجراء سريع أثناء الكوارث الطبيعية' },
          { title: 'إعداد مخيم اللاجئين', duration: '10:15', description: 'بناء المأوى الطارئ والخدمات' },
        ],
      },
      {
        title: 'التأثير والنتائج',
        icon: '📊',
        description: 'مقاطع فيديو تظهر التأثير القابل للقياس لبرامج الهيئة.',
        videos: [
          { title: 'تقرير التأثير 2023', duration: '16:30', description: 'نظرة عامة على إنجازاتنا والحياة التي تغيرت في عام 2023' },
          { title: 'تأثير الرعاية الصحية', duration: '12:45', description: 'الخدمات الطبية تصل إلى الملايين عبر دول متعددة' },
          { title: 'نتائج التعليم', duration: '14:10', description: 'قصص نجاح الطلاب واحتفالات التخرج' },
          { title: 'تحول المجتمع', duration: '11:55', description: 'التأثير طويل الأجل في مشاريع التنمية المستدامة' },
        ],
      },
      {
        title: 'كيف تساعد',
        icon: '❤️',
        description: 'تعرف على الطرق التي يمكنك من خلالها دعم الهيئة والفرق.',
        videos: [
          { title: 'تبرع وادعم', duration: '5:30', description: 'كيف تنقذ تبرعاتك الأرواح وتغير المجتمعات' },
          { title: 'تطوع معنا', duration: '6:45', description: 'فرص التطوع والخدمة مع الهيئة' },
          { title: 'شراكة المؤسسات', duration: '7:20', description: 'كيف يمكن للشركات الشراكة معنا من أجل التأثير الاجتماعي' },
          { title: 'الأحداث والأنشطة', duration: '4:55', description: 'انضم إلينا في أحداث جمع التبرعات والتوعية' },
        ],
      },
      {
        title: 'القيادة والرؤية',
        icon: '👑',
        description: 'رؤى من قيادة الهيئة حول مهمتنا واتجاهنا المستقبلي.',
        videos: [
          { title: 'رسالة المدير التنفيذي', duration: '8:30', description: 'رؤية القيادة لتوسيع التأثير الإنساني' },
          { title: 'تأثير الرعاية الملكية', duration: '10:15', description: 'كيفية تشكيل الرعاية الملكية لعملنا' },
          { title: 'الاتجاه الاستراتيجي', duration: '12:00', description: 'خطتنا الإستراتيجية لمدة خمس سنوات والأهداف' },
          { title: 'الشراكات العالمية', duration: '11:30', description: 'التعاون مع المنظمات الدولية' },
        ],
      },
    ],
  },
};

export default function VideosPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = videosContent[locale] || videosContent.en;

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
            {ar ? '🎬 مكتبة الفيديو' : '🎬 VIDEO LIBRARY'}
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

      {/* Video Categories */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        {content.categories.map((category, idx) => (
          <div key={idx} style={{ marginBottom: '80px' }}>
            <div style={{ marginBottom: '40px', textAlign: ar ? 'right' : 'left' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                justifyContent: ar ? 'flex-end' : 'flex-start',
              }}>
                <span style={{ fontSize: '32px' }}>{category.icon}</span>
                <h2 style={{
                  fontSize: '32px',
                  fontFamily: 'Georgia, serif',
                  color: royalColors.deepNavy,
                  margin: '0',
                  borderBottom: `2px solid ${royalColors.royalGold}`,
                  paddingBottom: '8px',
                }}>
                  {category.title}
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#666',
                margin: '0',
                marginLeft: ar ? '0' : '48px',
                marginRight: ar ? '48px' : '0',
              }}>
                {category.description}
              </p>
            </div>

            {/* Video Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {category.videos.map((video, vIdx) => (
                <div key={vIdx} style={{
                  background: `linear-gradient(135deg, ${royalColors.ivory}, ${royalColors.paleIvory})`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(${royalColors.deepNavy}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                >
                  {/* Placeholder Video */}
                  <div style={{
                    width: '100%',
                    height: '160px',
                    background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.crimson})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '48px',
                    position: 'relative',
                  }}>
                    ▶️
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: ar ? 'auto' : '12px',
                      left: ar ? '12px' : 'auto',
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}>
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: royalColors.deepNavy,
                      margin: '0 0 8px 0',
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {video.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0',
                      lineHeight: '1.6',
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section style={{
        background: `rgba(${royalColors.royalGold}, 0.08)`,
        padding: '60px 32px',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: 'Georgia, serif',
            color: royalColors.deepNavy,
            marginBottom: '24px',
          }}>
            {ar ? 'اشترك في قناتنا' : 'Subscribe to Our Channel'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '32px',
            maxWidth: '600px',
          }}>
            {ar ? 'ابق على اطلاع على آخر قصصنا والمشاريع والتأثير.' : 'Stay updated with our latest stories, projects, and impact.'}
          </p>
          <Link href={`/${locale}/newsletter`} style={{
            display: 'inline-block',
            background: royalColors.deepNavy,
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: `2px solid ${royalColors.deepNavy}`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.royalGold;
            (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.royalGold;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
            (e.currentTarget as HTMLElement).style.color = 'white';
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.deepNavy;
          }}
          >
            {ar ? 'اشترك في النشرة' : 'Subscribe Now'}
          </Link>
        </div>
      </section>
    </main>
  );
}
