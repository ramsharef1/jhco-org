'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

const galleryContent = {
  en: {
    title: 'Photo Gallery',
    heroTitle: 'Our Work in Pictures',
    heroSubtitle: 'Witness the impact of JHCO programs across the globe through our photo gallery.',
    categories: [
      {
        title: 'Healthcare & Medical Programs',
        icon: '🏥',
        description: 'Medical clinics, health camps, and emergency medical response in refugee camps and crisis zones.',
        photos: [
          { title: 'Mobile Clinic in Syria', description: 'Emergency medical services in northern Syria' },
          { title: 'Vaccination Campaign', description: 'Health outreach program in Yemen' },
          { title: 'Hospital Support', description: 'Medical equipment donation in Gaza' },
          { title: 'Health Education', description: 'Community health awareness session' },
        ],
      },
      {
        title: 'Education & Youth Programs',
        icon: '📚',
        description: 'Schools, scholarship programs, vocational training, and youth empowerment initiatives.',
        photos: [
          { title: 'School Construction', description: 'New education facility in South Sudan' },
          { title: 'Scholarship Recipients', description: 'Young graduates from our program' },
          { title: 'Computer Lab', description: 'Digital skills training center' },
          { title: 'Teacher Training', description: 'Professional development workshop' },
        ],
      },
      {
        title: 'Food Security & Livelihoods',
        icon: '🍽️',
        description: 'Agricultural projects, food distribution, livelihood training, and market access programs.',
        photos: [
          { title: 'Agricultural Training', description: 'Farmers learning sustainable practices' },
          { title: 'Food Distribution', description: 'Emergency food assistance in Somalia' },
          { title: 'Market Women', description: 'Women empowerment through commerce' },
          { title: 'Livestock Project', description: 'Sustainable livelihoods initiative' },
        ],
      },
      {
        title: 'Shelter & Housing',
        icon: '🏠',
        description: 'Shelter construction, housing rehabilitation, and WASH (Water, Sanitation & Hygiene) projects.',
        photos: [
          { title: 'Shelter Construction', description: 'Building homes for displaced families' },
          { title: 'Water Point Installation', description: 'Clean water access project' },
          { title: 'Sanitation Facility', description: 'WASH infrastructure development' },
          { title: 'Home Rehabilitation', description: 'Post-disaster reconstruction' },
        ],
      },
      {
        title: 'Emergency Response',
        icon: '🚨',
        description: 'Rapid response to natural disasters, conflicts, and humanitarian crises.',
        photos: [
          { title: 'Earthquake Relief', description: 'Emergency response team in Turkey' },
          { title: 'Flood Response', description: 'Rescue and relief operations' },
          { title: 'Crisis Camp', description: 'Temporary shelter for displaced persons' },
          { title: 'Aid Distribution', description: 'Emergency supplies delivery' },
        ],
      },
      {
        title: 'Women & Children Protection',
        icon: '👩‍👧',
        description: 'Programs protecting and empowering women, girls, and vulnerable children.',
        photos: [
          { title: 'Women Empowerment', description: 'Skills training for women entrepreneurs' },
          { title: 'Girls Education', description: 'Scholarship program for girls' },
          { title: 'Child Protection', description: 'Safe space and counseling center' },
          { title: 'Early Childhood', description: 'Pre-school program for vulnerable children' },
        ],
      },
    ],
  },
  ar: {
    title: 'معرض الصور',
    heroTitle: 'عملنا في الصور',
    heroSubtitle: 'شاهد تأثير برامج الهيئة حول العالم من خلال معرض الصور الخاص بنا.',
    categories: [
      {
        title: 'برامج الرعاية الصحية والطبية',
        icon: '🏥',
        description: 'العيادات الطبية وحملات الصحة والاستجابة الطبية الطارئة في مخيمات اللاجئين ومناطق الأزمات.',
        photos: [
          { title: 'عيادة متنقلة في سوريا', description: 'خدمات طبية طارئة في شمال سوريا' },
          { title: 'حملة التطعيم', description: 'برنامج التوعية الصحية في اليمن' },
          { title: 'دعم المستشفيات', description: 'تبرع المعدات الطبية في غزة' },
          { title: 'التثقيف الصحي', description: 'جلسة توعية صحية مجتمعية' },
        ],
      },
      {
        title: 'برامج التعليم والشباب',
        icon: '📚',
        description: 'المدارس وبرامج المنح الدراسية والتدريب المهني ومبادرات تمكين الشباب.',
        photos: [
          { title: 'بناء المدرسة', description: 'مرفق تعليمي جديد في جنوب السودان' },
          { title: 'حاملو المنح', description: 'الخريجون الشباب من برنامجنا' },
          { title: 'معمل الحاسوب', description: 'مركز تدريب المهارات الرقمية' },
          { title: 'تدريب المعلمين', description: 'ورشة التطوير المهني' },
        ],
      },
      {
        title: 'الأمن الغذائي وسبل العيش',
        icon: '🍽️',
        description: 'المشاريع الزراعية وتوزيع الغذاء وتدريب سبل العيش وبرامج الوصول إلى السوق.',
        photos: [
          { title: 'التدريب الزراعي', description: 'المزارعون يتعلمون الممارسات المستدامة' },
          { title: 'توزيع الغذاء', description: 'مساعدة غذائية طارئة في الصومال' },
          { title: 'نساء السوق', description: 'تمكين المرأة من خلال التجارة' },
          { title: 'مشروع الثروة الحيوانية', description: 'مبادرة سبل العيش المستدامة' },
        ],
      },
      {
        title: 'المأوى والإسكان',
        icon: '🏠',
        description: 'بناء المأوى وإعادة تأهيل الإسكان ومشاريع المياه والصرف الصحي والنظافة.',
        photos: [
          { title: 'بناء المأوى', description: 'بناء منازل للأسر المشردة' },
          { title: 'تركيب نقطة المياه', description: 'مشروع الوصول إلى المياه النظيفة' },
          { title: 'منشأة الصرف الصحي', description: 'تطوير البنية التحتية WASH' },
          { title: 'إعادة تأهيل المنزل', description: 'إعادة البناء بعد الكوارث' },
        ],
      },
      {
        title: 'الاستجابة للطوارئ',
        icon: '🚨',
        description: 'الاستجابة السريعة للكوارث الطبيعية والنزاعات والأزمات الإنسانية.',
        photos: [
          { title: 'إغاثة الزلزال', description: 'فريق الاستجابة الطارئة في تركيا' },
          { title: 'استجابة الفيضانات', description: 'عمليات الإنقاذ والإغاثة' },
          { title: 'مخيم الأزمات', description: 'مأوى مؤقت للأشخاص المشردين' },
          { title: 'توزيع المساعدات', description: 'توصيل المساعدات الطارئة' },
        ],
      },
      {
        title: 'حماية النساء والأطفال',
        icon: '👩‍👧',
        description: 'البرامج التي تحمي وتمكن النساء والفتيات والأطفال الضعفاء.',
        photos: [
          { title: 'تمكين المرأة', description: 'تدريب المهارات لرائدات الأعمال النسائيات' },
          { title: 'تعليم الفتيات', description: 'برنامج المنح للفتيات' },
          { title: 'حماية الأطفال', description: 'مركز الفضاء الآمن والاستشارة' },
          { title: 'الطفولة المبكرة', description: 'برنامج ما قبل المدرسة للأطفال الضعفاء' },
        ],
      },
    ],
  },
};

export default function GalleryPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = galleryContent[locale] || galleryContent.en;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: gradients.goldToWarm,
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
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
            {ar ? '📸 معرض الصور' : '📸 PHOTO GALLERY'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.md} 0`,
            maxWidth: '800px',
            color: 'white',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        {content.categories.map((category, idx) => (
          <div key={idx} style={{ marginBottom: spacing.xxxl }}>
            <div style={{ marginBottom: spacing.xl, textAlign: ar ? 'right' : 'left' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.md,
                marginBottom: spacing.md,
                justifyContent: ar ? 'flex-end' : 'flex-start',
              }}>
                <span style={{ fontSize: '32px' }}>{category.icon}</span>
                <h2 style={{
                  fontSize: '32px',
                  fontFamily: '"Merriweather", Georgia, serif',
                  color: royalColors.deepNavy,
                  margin: '0',
                  borderBottom: `2px solid ${royalColors.warmGold}`,
                  paddingBottom: spacing.sm,
                  fontWeight: '700',
                }}>
                  {category.title}
                </h2>
              </div>
              <p style={{
                fontSize: '16px',
                color: royalColors.textMuted,
                margin: '0',
                marginLeft: ar ? '0' : '48px',
                marginRight: ar ? '48px' : '0',
              }}>
                {category.description}
              </p>
            </div>

            {/* Photo Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.lg,
            }}>
              {category.photos.map((photo, pIdx) => (
                <div key={pIdx} style={{
                  background: royalColors.warmBeige,
                  borderRadius: borderRadius.lg,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  borderLeft: `4px solid ${royalColors.warmGold}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 28px rgba(0,0,0,0.15)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                >
                  {/* Placeholder Image */}
                  <div style={{
                    width: '100%',
                    height: '220px',
                    background: gradients.goldToWarm,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '48px',
                  }}>
                    📷
                  </div>

                  {/* Photo Info */}
                  <div style={{ padding: spacing.lg }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: royalColors.deepNavy,
                      margin: `0 0 ${spacing.sm} 0`,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {photo.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textMuted,
                      margin: '0',
                      lineHeight: '1.6',
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {photo.description}
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
        background: royalColors.warmBeige,
        padding: `${spacing.xxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
        borderTop: `3px solid ${royalColors.warmGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: '"Merriweather", Georgia, serif',
            color: royalColors.deepNavy,
            marginBottom: spacing.lg,
            fontWeight: '700',
          }}>
            {ar ? 'شارك في عملنا' : 'Make an Impact'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textDark,
            marginBottom: spacing.xl,
            maxWidth: '600px',
          }}>
            {ar ? 'ساعدنا في الوصول إلى المزيد من الأشخاص والمجتمعات حول العالم.' : 'Help us reach more people and communities around the world.'}
          </p>
          <Link href={`/${locale}/get-involved/donate`} style={{
            display: 'inline-block',
            background: royalColors.compassionRed,
            color: 'white',
            padding: `${spacing.sm} ${spacing.lg}`,
            borderRadius: borderRadius.md,
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: `2px solid ${royalColors.compassionRed}`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
            (e.currentTarget as HTMLElement).style.color = 'white';
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.deepNavy;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.compassionRed;
            (e.currentTarget as HTMLElement).style.color = 'white';
            (e.currentTarget as HTMLElement).style.borderColor = royalColors.compassionRed;
          }}
          >
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
        </div>
      </section>
    </main>
  );
}
