'use client';
import { use } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import StoryCard from '@/components/StoryCard';

const storyIcons = ['📚', '🏥', '🍽️', '💼', '💧', '👩‍🏫'];

const pageContent = {
  en: {
    title: 'Success Stories',
    heroTitle: 'Stories of Impact',
    heroSubtitle: 'Real lives transformed through JHCO humanitarian programs',
    stories: [
      {
        title: 'From Refugee to Teacher',
        location: 'Jordan',
        impact: 'Education',
        story: 'Fatima fled conflict with her three children. Through JHCO\'s education program, she gained teaching skills and now educates 40 students in her community, earning income for her family while helping others.',
        featured: true,
      },
      {
        title: 'Healthcare Access Saves Lives',
        location: 'South Sudan',
        impact: 'Healthcare',
        story: 'In a remote village with no medical facilities, JHCO\'s mobile clinic provided prenatal care. A pregnant woman received treatment that prevented complications, and she delivered a healthy baby safely.',
        featured: true,
      },
      {
        title: 'Emergency Food Relief',
        location: 'Syria',
        impact: 'Food Security',
        story: 'During a severe drought, JHCO provided emergency food assistance to 500 families. One family was able to keep their children in school instead of sending them to work.',
        featured: true,
      },
      {
        title: 'Economic Empowerment',
        location: 'Yemen',
        impact: 'Livelihoods',
        story: 'Ahmed received microfinance and business training from JHCO. He started a small tailoring business and now employs 5 people, transforming his community\'s economic prospects.',
        featured: false,
      },
      {
        title: 'Clean Water Initiative',
        location: 'Somalia',
        impact: 'WASH',
        story: 'JHCO installed a water well in a village where children walked 8 hours daily for water. Now 2,000 people have access to clean water, reducing water-borne diseases by 60%.',
        featured: false,
      },
      {
        title: 'Women\'s Empowerment',
        location: 'Palestine',
        impact: 'Women Empowerment',
        story: 'Layla participated in JHCO\'s women\'s leadership program. She now leads a community group advocating for girl\'s education, and 150 more girls have enrolled in school.',
        featured: false,
      },
    ],
  },
  ar: {
    title: 'قصص النجاح',
    heroTitle: 'قصص التأثير',
    heroSubtitle: 'حيوات حقيقية تحولت من خلال برامج الهيئة الإنسانية',
    stories: [
      {
        title: 'من لاجئة إلى معلمة',
        location: 'الأردن',
        impact: 'التعليم',
        story: 'فرت فاطمة من النزاع مع ثلاثة أطفالها. من خلال برنامج التعليم بالهيئة، اكتسبت مهارات تدريسية والآن تعلم 40 طالباً في مجتمعها، وتجني دخلاً لأسرتها مع مساعدة الآخرين.',
        featured: true,
      },
      {
        title: 'الوصول إلى الرعاية الصحية ينقذ الأرواح',
        location: 'جنوب السودان',
        impact: 'الصحة',
        story: 'في قرية بعيدة بدون مرافق طبية، قدمت عيادة الهيئة المتنقلة رعاية ما قبل الولادة. تلقت امرأة حامل علاجاً منع المضاعفات، وأنجبت طفلة سليمة بأمان.',
        featured: true,
      },
      {
        title: 'الإغاثة الغذائية الطارئة',
        location: 'سوريا',
        impact: 'الأمن الغذائي',
        story: 'خلال جفاف شديد، قدمت الهيئة مساعدات غذائية طارئة لـ 500 أسرة. تمكنت إحدى الأسر من الحفاظ على أطفالها في المدرسة بدلاً من إرسالهم للعمل.',
        featured: true,
      },
      {
        title: 'التمكين الاقتصادي',
        location: 'اليمن',
        impact: 'سبل العيش',
        story: 'تلقى أحمد التمويل متناهي الصغر والتدريب على الأعمال من الهيئة. بدأ عمل خياطة صغير والآن يوظف 5 أشخاص، محولاً آفاق مجتمعه الاقتصادية.',
        featured: false,
      },
      {
        title: 'مبادرة المياه النظيفة',
        location: 'الصومال',
        impact: 'المياه والصرف',
        story: 'أنشأت الهيئة بئراً مائياً في قرية كان الأطفال يسيرون فيها 8 ساعات يومياً للحصول على الماء. الآن لـ 2000 شخص وصول إلى ماء نظيف، مما يقلل الأمراض المائية بنسبة 60٪.',
        featured: false,
      },
      {
        title: 'تمكين النساء',
        location: 'فلسطين',
        impact: 'تمكين المرأة',
        story: 'شاركت ليلى في برنامج القيادة النسائية للهيئة. الآن تقود مجموعة مجتمعية تدافع عن تعليم الفتيات، وقد التحقت 150 فتاة إضافية بالمدرسة.',
        featured: false,
      },
    ],
  },
};

export default function StoriesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Human Stories
          </p>
          <h1 style={{
            fontSize: '64px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {pageContent.en.stories.map((story, idx) => {
              const arStory = pageContent.ar.stories[idx];
              return (
                <StoryCard
                  key={idx}
                  id={String(idx)}
                  titleEn={story.title}
                  titleAr={arStory.title}
                  excerptEn={story.story}
                  excerptAr={arStory.story}
                  authorEn={`${story.location} • ${story.impact}`}
                  authorAr={`${arStory.location} • ${arStory.impact}`}
                  roleEn={story.impact}
                  roleAr={arStory.impact}
                  locationEn={story.location}
                  locationAr={arStory.location}
                  icon={storyIcons[idx % storyIcons.length]}
                  locale={locale}
                  variant="impact"
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
