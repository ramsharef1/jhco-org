'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Case Studies',
    heroTitle: 'Detailed Program Case Studies',
    heroSubtitle: 'In-depth analysis of JHCO\'s most impactful humanitarian programs',
    caseStudies: [
      {
        title: 'Emergency Response: Syrian Refugee Crisis',
        year: '2022-2024',
        region: 'Syria & Neighboring Countries',
        focus: 'Crisis Response',
        description: 'Comprehensive response to Syrian humanitarian emergency with 50,000+ families reached through emergency food, shelter, healthcare and psychosocial support programs.',
        outcomes: ['50,000+ families assisted', '100,000+ emergency meals distributed', '25,000 health consultations', '5,000 people with PTSD support'],
      },
      {
        title: 'Healthcare Access in South Sudan',
        year: '2020-2024',
        region: 'South Sudan',
        focus: 'Healthcare',
        description: 'Established mobile clinic network reaching remote villages. Provided maternal healthcare, disease prevention, and vaccination programs in areas with zero health infrastructure.',
        outcomes: ['40 health clinics established', '500,000 health consultations', '10,000 safe deliveries', '100,000 vaccinations administered'],
      },
      {
        title: 'Education for Displaced Children',
        year: '2019-2024',
        region: 'Multi-Country (15 locations)',
        focus: 'Education',
        description: 'Rapid education program establishment in conflict zones. Built classrooms and trained teachers, reaching 25,000 displaced children with quality education despite challenging circumstances.',
        outcomes: ['75 schools established', '25,000 children educated', '300 teachers trained', '90% school attendance rate'],
      },
      {
        title: 'Economic Empowerment Initiative',
        year: '2018-2024',
        region: 'Yemen, Palestine, Jordan',
        focus: 'Livelihoods',
        description: 'Microfinance and skills training program supporting vulnerable populations. Participants launched 3,000+ small businesses with 85% success rate, transforming household economies.',
        outcomes: ['3,000+ businesses launched', '$5M+ microfinance disbursed', '8,000+ people employed', '85% business success rate'],
      },
      {
        title: 'Water & Sanitation Initiative',
        year: '2017-2024',
        region: 'Somalia, South Sudan, Chad',
        focus: 'WASH',
        description: 'Infrastructure development providing clean water and sanitation. Reduced water-borne diseases by 70%, improved school attendance, and strengthened community health.',
        outcomes: ['100+ water systems installed', '500,000+ people with clean water access', '70% disease reduction', '50% school attendance increase'],
      },
    ],
  },
  ar: {
    title: 'حالات الدراسة',
    heroTitle: 'دراسات حالة البرامج المفصلة',
    heroSubtitle: 'تحليل متعمق لأكثر برامج الهيئة الإنسانية تأثيراً',
    caseStudies: [
      {
        title: 'الاستجابة للطوارئ: أزمة اللاجئين السوريين',
        year: '2022-2024',
        region: 'سوريا والدول المجاورة',
        focus: 'الاستجابة للأزمات',
        description: 'استجابة شاملة للطوارئ الإنسانية السورية مع وصولها إلى 50000+ أسرة من خلال برامج الطعام والمأوى والرعاية الصحية والدعم النفسي الاجتماعي.',
        outcomes: ['50000+ أسرة مساعدة', '100000+ وجبة طارئة موزعة', '25000 استشارة صحية', '5000 شخص بدعم الصدمة النفسية'],
      },
      {
        title: 'الوصول إلى الرعاية الصحية في جنوب السودان',
        year: '2020-2024',
        region: 'جنوب السودان',
        focus: 'الصحة',
        description: 'أنشأت شبكة عيادة متنقلة تصل إلى القرى البعيدة. قدمت رعاية الأمومة والوقاية من الأمراض وبرامج التطعيم في مناطق بدون بنية تحتية صحية.',
        outcomes: ['40 عيادة صحية منشأة', '500000 استشارة صحية', '10000 ولادة آمنة', '100000 تطعيم تم إعطاؤه'],
      },
      {
        title: 'التعليم للأطفال النازحين',
        year: '2019-2024',
        region: 'متعدد الدول (15 موقع)',
        focus: 'التعليم',
        description: 'برنامج تعليم سريع التأسيس في مناطق النزاع. بنيت الفصول الدراسية وتم تدريب المعلمين، مما وصل إلى 25000 طفل نازح بتعليم جودة رغم الظروف الصعبة.',
        outcomes: ['75 مدرسة منشأة', '25000 طفل متعلم', '300 معلم مدرب', 'معدل حضور المدرسة 90٪'],
      },
      {
        title: 'مبادرة التمكين الاقتصادي',
        year: '2018-2024',
        region: 'اليمن وفلسطين والأردن',
        focus: 'سبل العيش',
        description: 'برنامج التمويل متناهي الصغر والتدريب المهني يدعم السكان الضعفاء. أطلق المشاركون 3000+ عمل صغير بمعدل نجاح 85٪، محولين اقتصاديات الأسرة.',
        outcomes: ['3000+ عمل تم إطلاقه', '5 ملايين+ دولار تمويل متناهي الصغر', '8000+ شخص موظف', 'معدل نجاح العمل 85٪'],
      },
      {
        title: 'مبادرة المياه والصرف الصحي',
        year: '2017-2024',
        region: 'الصومال وجنوب السودان وتشاد',
        focus: 'المياه والصرف',
        description: 'تطوير البنية التحتية توفير الماء النظيف والصرف الصحي. تقليل الأمراض المائية بنسبة 70٪، وتحسين حضور المدرسة وتقوية صحة المجتمع.',
        outcomes: ['100+ نظام مائي منشأ', '500000+ شخص مع وصول للماء النظيف', 'تقليل الأمراض 70٪', 'زيادة حضور المدرسة 50٪'],
      },
    ],
  },
};

export default function CaseStudiesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
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
            Program Details
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

      {/* Case Studies */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {content.caseStudies.map((caseStudy, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '48px 40px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '28px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.darkNavy,
                      marginBottom: '8px',
                      marginTop: 0,
                    }}>
                      {caseStudy.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b6b6b',
                      fontWeight: '600',
                      marginBottom: '4px',
                      margin: 0,
                    }}>
                      {caseStudy.region} • {caseStudy.year}
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: royalColors.hashemiteGold,
                    color: royalColors.darkNavy,
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    whiteSpace: 'nowrap',
                  }}>
                    {caseStudy.focus}
                  </div>
                </div>

                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '24px',
                }} />

                <p style={{
                  fontSize: '17px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.7',
                  marginBottom: '28px',
                  margin: '24px 0 28px 0',
                }}>
                  {caseStudy.description}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                }}>
                  {caseStudy.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} style={{
                      backgroundColor: royalColors.bgRefined,
                      padding: '16px',
                      borderRadius: '4px',
                      borderLeft: `3px solid ${royalColors.hashemiteGold}`,
                      fontSize: '15px',
                      color: royalColors.textOfficial,
                      fontWeight: '600',
                    }}>
                      ✓ {outcome}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
