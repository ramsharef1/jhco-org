'use client';

import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

interface Course {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  modules: number;
  progress?: number;
  thumbnail?: string;
  videoUrl?: string;
  instructor?: string;
}

interface Certificate {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
}

interface Testimonial {
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  testimonialEn: string;
  testimonialAr: string;
  image: string;
  rating: number;
}

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner':
      return royalColors.impactGreen;
    case 'intermediate':
      return royalColors.hashemiteGold;
    case 'advanced':
      return royalColors.charityRed;
    default:
      return royalColors.textSecondary;
  }
};

export default function LearningCenterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState<Locale>('en');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { locale: paramLocale } = await params;
      setLocale(paramLocale as Locale);
    })();
  }, [params]);

  const ar = locale === 'ar';

  // Content Library
  const courses: Course[] = [
    {
      id: 'humanitarian-intro',
      titleEn: 'Introduction to Humanitarian Work',
      titleAr: 'مقدمة في العمل الإنساني',
      descEn: 'Learn the fundamentals of humanitarian aid, ethics, and global impact strategies.',
      descAr: 'تعلم أساسيات المساعدات الإنسانية والأخلاقيات واستراتيجيات التأثير العالمي.',
      category: 'humanitarian',
      difficulty: 'beginner',
      duration: 120,
      modules: 6,
      progress: 100,
      instructor: 'Dr. Ahmed Al-Hashemi',
      videoUrl: 'https://example.com/video1',
    },
    {
      id: 'crisis-response',
      titleEn: 'Crisis Response & Emergency Management',
      titleAr: 'الاستجابة للأزمات وإدارة الطوارئ',
      descEn: 'Master the skills needed to respond effectively to humanitarian crises.',
      descAr: 'أتقن المهارات اللازمة للاستجابة الفعّالة للأزمات الإنسانية.',
      category: 'programs',
      difficulty: 'intermediate',
      duration: 180,
      modules: 8,
      progress: 65,
      instructor: 'Fatima Al-Mansouri',
    },
    {
      id: 'healthcare-basics',
      titleEn: 'Healthcare in Humanitarian Settings',
      titleAr: 'الرعاية الصحية في السياقات الإنسانية',
      descEn: 'Understand healthcare delivery and medical support in humanitarian contexts.',
      descAr: 'افهم توصيل الرعاية الصحية والدعم الطبي في السياقات الإنسانية.',
      category: 'healthcare',
      difficulty: 'intermediate',
      duration: 150,
      modules: 7,
      progress: 45,
      instructor: 'Dr. Layla Al-Noor',
    },
    {
      id: 'education-development',
      titleEn: 'Education & Community Development',
      titleAr: 'التعليم والتنمية المجتمعية',
      descEn: 'Develop skills to establish and manage educational programs in underserved communities.',
      descAr: 'طور مهارات لإنشاء وإدارة البرامج التعليمية في المجتمعات المحرومة.',
      category: 'education',
      difficulty: 'beginner',
      duration: 120,
      modules: 6,
      progress: 80,
      instructor: 'Mohammed Al-Rashid',
    },
    {
      id: 'food-security',
      titleEn: 'Food Security & Nutrition Programs',
      titleAr: 'برامج الأمن الغذائي والتغذية',
      descEn: 'Learn to design and implement sustainable food security initiatives.',
      descAr: 'تعلم كيفية تصميم وتنفيذ مبادرات الأمن الغذائي المستدامة.',
      category: 'programs',
      difficulty: 'intermediate',
      duration: 140,
      modules: 7,
      progress: 55,
      instructor: 'Dr. Ahmed Al-Hashemi',
    },
    {
      id: 'volunteer-leadership',
      titleEn: 'Volunteer Leadership & Management',
      titleAr: 'قيادة وإدارة المتطوعين',
      descEn: 'Become an effective volunteer leader and manager in humanitarian organizations.',
      descAr: 'كن قائداً ومديراً فعّالاً للمتطوعين في المنظمات الإنسانية.',
      category: 'volunteer',
      difficulty: 'advanced',
      duration: 200,
      modules: 10,
      progress: 30,
      instructor: 'Fatima Al-Mansouri',
    },
    {
      id: 'fundraising-strategies',
      titleEn: 'Effective Fundraising Strategies',
      titleAr: 'استراتيجيات التمويل الفعّالة',
      descEn: 'Master modern fundraising techniques and donor engagement strategies.',
      descAr: 'أتقن تقنيات التمويل الحديثة واستراتيجيات التعامل مع المانحين.',
      category: 'programs',
      difficulty: 'advanced',
      duration: 160,
      modules: 8,
      progress: 0,
      instructor: 'Dr. Layla Al-Noor',
    },
    {
      id: 'cultural-sensitivity',
      titleEn: 'Cultural Sensitivity & Diversity',
      titleAr: 'الحساسية الثقافية والتنوع',
      descEn: 'Develop cultural competency and work effectively with diverse communities.',
      descAr: 'طور الكفاءة الثقافية والعمل الفعّال مع المجتمعات المتنوعة.',
      category: 'humanitarian',
      difficulty: 'beginner',
      duration: 100,
      modules: 5,
      progress: 0,
      instructor: 'Mohammed Al-Rashid',
    },
    {
      id: 'impact-measurement',
      titleEn: 'Impact Measurement & Evaluation',
      titleAr: 'قياس التأثير والتقييم',
      descEn: 'Learn to measure and evaluate the impact of humanitarian programs.',
      descAr: 'تعلم كيفية قياس وتقييم تأثير البرامج الإنسانية.',
      category: 'programs',
      difficulty: 'advanced',
      duration: 170,
      modules: 9,
      progress: 20,
      instructor: 'Dr. Ahmed Al-Hashemi',
    },
  ];

  const certificates: Certificate[] = [
    {
      id: 'cert-humanitarian-basics',
      nameEn: 'Humanitarian Basics Certification',
      nameAr: 'شهادة أساسيات العمل الإنساني',
      descEn: 'Earned by completing the Introduction to Humanitarian Work course',
      descAr: 'تم الحصول عليها بإكمال دورة مقدمة في العمل الإنساني',
      earned: true,
      earnedDate: 'June 15, 2024',
      progress: 100,
    },
    {
      id: 'cert-crisis-response',
      nameEn: 'Crisis Response Specialist',
      nameAr: 'متخصص الاستجابة للأزمات',
      descEn: 'Earned by completing the Crisis Response & Emergency Management course',
      descAr: 'تم الحصول عليها بإكمال دورة الاستجابة للأزمات وإدارة الطوارئ',
      earned: false,
      progress: 65,
    },
    {
      id: 'cert-education-champion',
      nameEn: 'Education Champion',
      nameAr: 'بطل التعليم',
      descEn: 'Earned by completing the Education & Community Development course',
      descAr: 'تم الحصول عليها بإكمال دورة التعليم والتنمية المجتمعية',
      earned: true,
      earnedDate: 'July 20, 2024',
      progress: 100,
    },
    {
      id: 'cert-advanced-leadership',
      nameEn: 'Advanced Leadership Certification',
      nameAr: 'شهادة القيادة المتقدمة',
      descEn: 'Earned by completing both Volunteer Leadership and Impact Measurement courses',
      descAr: 'تم الحصول عليها بإكمال دورات القيادة والقياس والتقييم',
      earned: false,
      progress: 25,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      nameEn: 'Sarah Johnson',
      nameAr: 'سارة جونسون',
      roleEn: 'Community Health Worker',
      roleAr: 'عامل الصحة المجتمعية',
      testimonialEn: 'The Healthcare in Humanitarian Settings course transformed my approach to patient care. The practical examples and expert instruction were invaluable.',
      testimonialAr: 'غيرت دورة الرعاية الصحية في السياقات الإنسانية نهجي في رعاية المرضى. الأمثلة العملية والتعليمات من الخبراء كانت لا تقدر بثمن.',
      image: '👩‍⚕️',
      rating: 5,
    },
    {
      nameEn: 'Ahmed Rahman',
      nameAr: 'أحمد الرحمن',
      roleEn: 'Volunteer Coordinator',
      roleAr: 'منسق المتطوعين',
      testimonialEn: 'After completing the Volunteer Leadership course, I successfully managed a team of 50+ volunteers. Highly recommended!',
      testimonialAr: 'بعد إكمال دورة قيادة المتطوعين، أدرت فريقاً من 50+ متطوع بنجاح. موصى به بشدة!',
      image: '👨‍💼',
      rating: 5,
    },
    {
      nameEn: 'Amina Al-Khatib',
      nameAr: 'أمينة الخطيب',
      roleEn: 'Program Manager',
      roleAr: 'مدير البرنامج',
      testimonialEn: 'The Crisis Response course gave me confidence to handle emergency situations. The knowledge I gained is practical and immediately applicable.',
      testimonialAr: 'أعطتني دورة الاستجابة للأزمات الثقة للتعامل مع حالات الطوارئ. المعرفة التي اكتسبتها عملية وقابلة للتطبيق الفوري.',
      image: '👩‍💼',
      rating: 5,
    },
    {
      nameEn: 'Hassan Al-Rashid',
      nameAr: 'حسن الراشد',
      roleEn: 'Education Specialist',
      roleAr: 'متخصص التعليم',
      testimonialEn: 'Excellent courses with comprehensive content. The certificates helped advance my career significantly.',
      testimonialAr: 'دورات ممتازة مع محتوى شامل. ساعدتني الشهادات على تقدم مهني ملحوظ.',
      image: '👨‍🏫',
      rating: 4,
    },
  ];

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelAr: 'جميع الفئات' },
    { id: 'humanitarian', labelEn: 'Humanitarian', labelAr: 'إنساني' },
    { id: 'healthcare', labelEn: 'Healthcare', labelAr: 'الرعاية الصحية' },
    { id: 'education', labelEn: 'Education', labelAr: 'التعليم' },
    { id: 'programs', labelEn: 'Programs', labelAr: 'البرامج' },
    { id: 'volunteer', labelEn: 'Volunteer', labelAr: 'التطوع' },
  ];

  const difficulties = [
    { id: 'all', labelEn: 'All Levels', labelAr: 'جميع المستويات' },
    { id: 'beginner', labelEn: 'Beginner', labelAr: 'مبتدئ' },
    { id: 'intermediate', labelEn: 'Intermediate', labelAr: 'متوسط' },
    { id: 'advanced', labelEn: 'Advanced', labelAr: 'متقدم' },
  ];

  const filteredCourses = courses.filter((course) => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <>
      <div dir={ar ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section
          style={{
            background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
            padding: ar ? '80px 32px' : '80px 32px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: '700',
                margin: '0 0 24px 0',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.5px',
              }}
            >
              {ar ? 'مركز التعليم' : 'Learning Center'}
            </h1>
            <p
              style={{
                fontSize: '20px',
                marginBottom: '16px',
                lineHeight: '1.6',
                color: royalColors.paleGold,
              }}
            >
              {ar
                ? 'تعلم المهارات الأساسية للعمل الإنساني من خبرائنا المتمرسين'
                : 'Master humanitarian skills from our experienced experts'}
            </p>
            <p
              style={{
                fontSize: '16px',
                marginBottom: '0',
                color: '#d4c5a9',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              {ar
                ? 'دورات شاملة، شهادات معترف بها عالمياً، والتطور الشخصي المستمر'
                : 'Comprehensive courses, globally recognized certificates, and continuous professional growth'}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          style={{
            padding: '60px 32px',
            backgroundColor: royalColors.richCream,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
              }}
            >
              {[
                {
                  number: '25+',
                  labelEn: 'Expert Courses',
                  labelAr: 'دورة متخصصة',
                },
                {
                  number: '150+',
                  labelEn: 'Active Learners',
                  labelAr: 'متعلم نشط',
                },
                {
                  number: '8',
                  labelEn: 'Certificate Programs',
                  labelAr: 'برنامج شهادة',
                },
                {
                  number: '95%',
                  labelEn: 'Completion Rate',
                  labelAr: 'معدل الإنجاز',
                },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: '40px',
                      fontWeight: '700',
                      color: royalColors.deepRoyal,
                      marginBottom: '8px',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '16px',
                      color: royalColors.textSecondary,
                      fontWeight: '500',
                    }}
                  >
                    {ar ? stat.labelAr : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section
          style={{
            padding: '60px 32px',
            backgroundColor: 'white',
            borderBottom: `1px solid ${royalColors.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '600',
                marginBottom: '32px',
                color: royalColors.textOfficial,
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar ? 'استكشف الدورات' : 'Explore Courses'}
            </h2>

            {/* Category Filters */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: royalColors.textSecondary,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                  textAlign: ar ? 'right' : 'left',
                }}
              >
                {ar ? 'الفئات' : 'Categories'}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '8px 16px',
                      border: `2px solid ${
                        selectedCategory === cat.id
                          ? royalColors.hashemiteGold
                          : royalColors.borderSubtle
                      }`,
                      backgroundColor:
                        selectedCategory === cat.id
                          ? royalColors.ivoryBg
                          : 'white',
                      color:
                        selectedCategory === cat.id
                          ? royalColors.deepRoyal
                          : royalColors.textSecondary,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {ar ? cat.labelAr : cat.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: royalColors.textSecondary,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                  textAlign: ar ? 'right' : 'left',
                }}
              >
                {ar ? 'المستوى' : 'Difficulty Level'}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    style={{
                      padding: '8px 16px',
                      border: `2px solid ${
                        selectedDifficulty === diff.id
                          ? royalColors.hashemiteGold
                          : royalColors.borderSubtle
                      }`,
                      backgroundColor:
                        selectedDifficulty === diff.id
                          ? royalColors.ivoryBg
                          : 'white',
                      color:
                        selectedDifficulty === diff.id
                          ? royalColors.deepRoyal
                          : royalColors.textSecondary,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {ar ? diff.labelAr : diff.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section style={{ padding: '60px 32px', backgroundColor: royalColors.bgRefined }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '32px',
                color: royalColors.textOfficial,
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar ? 'الدورات المتاحة' : 'Available Courses'} ({filteredCourses.length})
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '28px',
              }}
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() =>
                    setExpandedCourse(
                      expandedCourse === course.id ? null : course.id
                    )
                  }
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '0',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    transform:
                      expandedCourse === course.id ? 'scale(1.02)' : 'scale(1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 8px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Video Placeholder */}
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      backgroundColor: royalColors.ivoryBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '64px',
                        opacity: '0.3',
                      }}
                    >
                      📹
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        [ar ? 'left' : 'right']: '8px',
                        backgroundColor: getDifficultyColor(course.difficulty),
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                      }}
                    >
                      {ar
                        ? course.difficulty === 'beginner'
                          ? 'مبتدئ'
                          : course.difficulty === 'intermediate'
                            ? 'متوسط'
                            : 'متقدم'
                        : course.difficulty.charAt(0).toUpperCase() +
                          course.difficulty.slice(1)}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div style={{ padding: '20px' }}>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        margin: '0 0 12px 0',
                        textAlign: ar ? 'right' : 'left',
                      }}
                    >
                      {ar ? course.titleAr : course.titleEn}
                    </h3>

                    <p
                      style={{
                        fontSize: '14px',
                        color: royalColors.textSecondary,
                        margin: '0 0 16px 0',
                        lineHeight: '1.5',
                        textAlign: ar ? 'right' : 'left',
                      }}
                    >
                      {ar ? course.descAr : course.descEn}
                    </p>

                    {/* Meta Info */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: ar ? 'flex-end' : 'flex-start',
                        gap: '16px',
                        marginBottom: '16px',
                        fontSize: '13px',
                        color: royalColors.textSecondary,
                        flexDirection: ar ? 'row-reverse' : 'row',
                      }}
                    >
                      <span>
                        ⏱️ {course.duration} {ar ? 'دقيقة' : 'min'}
                      </span>
                      <span>
                        📚 {course.modules} {ar ? 'وحدة' : 'modules'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    {course.progress !== undefined && (
                      <div style={{ marginBottom: '12px' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '12px',
                            marginBottom: '6px',
                            color: royalColors.textSecondary,
                          }}
                        >
                          <span>{ar ? 'التقدم' : 'Progress'}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            backgroundColor: royalColors.borderSubtle,
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${course.progress}%`,
                              height: '100%',
                              backgroundColor: royalColors.hashemiteGold,
                              transition: 'width 0.3s ease',
                            }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Expanded Content */}
                    {expandedCourse === course.id && (
                      <div
                        style={{
                          marginTop: '16px',
                          paddingTop: '16px',
                          borderTop: `1px solid ${royalColors.borderSubtle}`,
                          animation: 'fadeIn 0.3s ease',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '13px',
                            color: royalColors.textSecondary,
                            margin: '0 0 12px 0',
                            textAlign: ar ? 'right' : 'left',
                          }}
                        >
                          👨‍🏫 {ar ? 'المدرب: ' : 'Instructor: '}
                          {course.instructor}
                        </p>
                        <button
                          style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: royalColors.deepRoyal,
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            transition: 'background-color 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              royalColors.hashemiteGold;
                            e.currentTarget.style.color =
                              royalColors.textOfficial;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              royalColors.deepRoyal;
                            e.currentTarget.style.color = 'white';
                          }}
                        >
                          {ar
                            ? course.progress === 100
                              ? 'أعد المراجعة'
                              : 'ابدأ الدورة'
                            : course.progress === 100
                              ? 'Review Again'
                              : 'Start Course'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Tracking Section */}
        <section
          style={{
            padding: '60px 32px',
            backgroundColor: 'white',
            borderTop: `1px solid ${royalColors.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '32px',
                color: royalColors.textOfficial,
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar ? 'تتبع التقدم الخاص بك' : 'Your Learning Progress'}
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  titleEn: 'Courses Completed',
                  titleAr: 'الدورات المكتملة',
                  value: '3',
                  total: '9',
                  color: royalColors.impactGreen,
                },
                {
                  titleEn: 'Certificates Earned',
                  titleAr: 'الشهادات المكتسبة',
                  value: '2',
                  total: '4',
                  color: royalColors.hashemiteGold,
                },
                {
                  titleEn: 'Learning Streak',
                  titleAr: 'سلسلة التعليم',
                  value: '14',
                  total: 'days',
                  color: royalColors.charityRed,
                },
                {
                  titleEn: 'Study Hours',
                  titleAr: 'ساعات الدراسة',
                  value: '48',
                  total: 'hours',
                  color: royalColors.compassionTeal,
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: royalColors.richCream,
                    padding: '28px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    borderLeft: `4px solid ${stat.color}`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      color: royalColors.textSecondary,
                      marginBottom: '16px',
                      letterSpacing: '0.5px',
                      fontWeight: '600',
                    }}
                  >
                    {ar ? stat.titleAr : stat.titleEn}
                  </h3>
                  <div
                    style={{
                      fontSize: '40px',
                      fontWeight: '700',
                      color: stat.color,
                      marginBottom: '8px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: royalColors.textSecondary,
                    }}
                  >
                    {ar ? 'من ' : 'out of '} {stat.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section
          style={{
            padding: '60px 32px',
            backgroundColor: royalColors.bgRefined,
            borderTop: `1px solid ${royalColors.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '32px',
                color: royalColors.textOfficial,
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar ? 'شهاداتك' : 'Your Certificates'}
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() =>
                    setExpandedCert(expandedCert === cert.id ? null : cert.id)
                  }
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '24px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    border: cert.earned
                      ? `2px solid ${royalColors.impactGreen}`
                      : `2px solid ${royalColors.borderSubtle}`,
                    position: 'relative',
                    opacity: cert.earned ? 1 : 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 8px 24px rgba(0,0,0,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {cert.earned && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        [ar ? 'left' : 'right']: '12px',
                        fontSize: '28px',
                      }}
                    >
                      🏆
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: royalColors.textOfficial,
                      margin: '0 0 12px 0',
                      paddingRight: cert.earned ? '40px' : '0',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  >
                    {ar ? cert.nameAr : cert.nameEn}
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                        marginBottom: '6px',
                        color: royalColors.textSecondary,
                      }}
                    >
                      <span>{ar ? 'التقدم' : 'Progress'}</span>
                      <span>{cert.progress}%</span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: royalColors.borderSubtle,
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${cert.progress}%`,
                          height: '100%',
                          backgroundColor: cert.earned
                            ? royalColors.impactGreen
                            : royalColors.hashemiteGold,
                          transition: 'width 0.3s ease',
                        }}
                      ></div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      margin: '0 0 12px 0',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  >
                    {ar ? cert.descAr : cert.descEn}
                  </p>

                  {cert.earned && cert.earnedDate && (
                    <p
                      style={{
                        fontSize: '12px',
                        color: royalColors.impactGreen,
                        fontWeight: '600',
                        margin: '0',
                        textAlign: ar ? 'right' : 'left',
                      }}
                    >
                      ✓ {ar ? 'حصل عليها في' : 'Earned on'} {cert.earnedDate}
                    </p>
                  )}

                  {expandedCert === cert.id && (
                    <div
                      style={{
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: `1px solid ${royalColors.borderSubtle}`,
                      }}
                    >
                      <button
                        style={{
                          width: '100%',
                          padding: '10px',
                          backgroundColor: cert.earned
                            ? royalColors.impactGreen
                            : royalColors.deepRoyal,
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: cert.earned ? 'pointer' : 'default',
                          fontWeight: '600',
                          fontSize: '14px',
                          opacity: cert.earned ? 1 : 0.5,
                        }}
                      >
                        {ar
                          ? cert.earned
                            ? 'تحميل الشهادة'
                            : 'قريباً - أكمل الدورة'
                          : cert.earned
                            ? 'Download Certificate'
                            : 'Coming Soon - Complete Course'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          style={{
            padding: '60px 32px',
            backgroundColor: `linear-gradient(135deg, ${royalColors.deepRoyal}20 0%, ${royalColors.compassionTeal}10 100%)`,
            borderTop: `1px solid ${royalColors.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '12px',
                color: royalColors.textOfficial,
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar ? 'ما يقول المتعلمون' : 'What Learners Say'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: royalColors.textSecondary,
                marginBottom: '40px',
                textAlign: ar ? 'right' : 'left',
              }}
            >
              {ar
                ? 'تجارب حقيقية من الأشخاص الذين غيرت دوراتنا حياتهم المهنية'
                : 'Real experiences from people whose careers have been transformed by our courses'}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'white',
                    padding: '28px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 8px 24px rgba(0,0,0,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 2px 12px rgba(0,0,0,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Rating Stars */}
                  <div style={{ marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color:
                            i < testimonial.rating
                              ? royalColors.hashemiteGold
                              : royalColors.borderSubtle,
                          marginRight: ar ? '0' : '4px',
                          marginLeft: ar ? '4px' : '0',
                          fontSize: '16px',
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: royalColors.textSecondary,
                      fontStyle: 'italic',
                      margin: '0 0 20px 0',
                      lineHeight: '1.6',
                      textAlign: ar ? 'right' : 'left',
                    }}
                  >
                    "{ar ? testimonial.testimonialAr : testimonial.testimonialEn}"
                  </p>

                  {/* Learner Info */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      flexDirection: ar ? 'row-reverse' : 'row',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '40px',
                        width: '50px',
                        textAlign: 'center',
                      }}
                    >
                      {testimonial.image}
                    </div>
                    <div style={{ textAlign: ar ? 'right' : 'left' }}>
                      <h4
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: royalColors.textOfficial,
                          margin: '0',
                        }}
                      >
                        {ar ? testimonial.nameAr : testimonial.nameEn}
                      </h4>
                      <p
                        style={{
                          fontSize: '13px',
                          color: royalColors.textSecondary,
                          margin: '4px 0 0 0',
                        }}
                      >
                        {ar ? testimonial.roleAr : testimonial.roleEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
            padding: '80px 32px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '40px',
                fontWeight: '700',
                marginBottom: '24px',
                fontFamily: 'Georgia, serif',
              }}
            >
              {ar ? 'ابدأ رحلة التعليم الخاصة بك' : 'Start Your Learning Journey'}
            </h2>
            <p
              style={{
                fontSize: '18px',
                marginBottom: '32px',
                lineHeight: '1.6',
                color: royalColors.paleGold,
              }}
            >
              {ar
                ? 'انضم إلى مئات المتعلمين الذين يطورون مهاراتهم الإنسانية معنا'
                : 'Join hundreds of learners who are developing their humanitarian skills with us'}
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexDirection: ar ? 'row-reverse' : 'row' }}>
              <button
                style={{
                  padding: '14px 40px',
                  backgroundColor: royalColors.hashemiteGold,
                  color: royalColors.textOfficial,
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {ar ? 'التسجيل الآن' : 'Enroll Now'}
              </button>
              <button
                style={{
                  padding: '14px 40px',
                  backgroundColor: 'transparent',
                  color: royalColors.hashemiteGold,
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    royalColors.hashemiteGold;
                  e.currentTarget.style.color = royalColors.textOfficial;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = royalColors.hashemiteGold;
                }}
              >
                {ar ? 'تصفح الدورات' : 'Browse Courses'}
              </button>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}
