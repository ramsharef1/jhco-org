'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients, shadows } from '@/lib/royalDesign';

const webinarsContent = {
  en: {
    title: 'Webinars & Training',
    heroTitle: 'Professional Development & Learning',
    heroSubtitle: 'Expand your knowledge with expert-led webinars, training programs, and certification courses designed for humanitarian professionals and partners.',

    // Tabs
    upcomingTab: 'Upcoming Webinars',
    recordedTab: 'Recorded Library',
    speakersTab: 'Speakers',
    certificatesTab: 'Certificates',

    // Upcoming Section
    upcomingWebinars: 'Upcoming Webinars',
    noUpcoming: 'No upcoming webinars scheduled',

    webinars: [
      {
        id: 1,
        title: 'Emergency Response in Crisis Situations',
        date: '2024-09-15',
        time: '3:00 PM - 4:30 PM (GMT)',
        duration: '1.5 hours',
        tier: 'free',
        speaker: 'Dr. Sarah Al-Mansouri',
        description: 'Learn essential protocols for coordinating rapid humanitarian response in conflict and disaster zones.',
        topics: ['Crisis Management', 'Coordination', 'First Responders', 'Safety Protocols'],
        capacity: 500,
        registered: 342,
      },
      {
        id: 2,
        title: 'Healthcare Access in Underserved Communities',
        date: '2024-09-22',
        time: '2:00 PM - 3:30 PM (GMT)',
        duration: '1.5 hours',
        tier: 'free',
        speaker: 'Dr. Mohammad Hassan',
        description: 'Innovative strategies for providing sustainable healthcare solutions to remote and underprivileged populations.',
        topics: ['Healthcare', 'Rural Medicine', 'Telemedicine', 'Community Health'],
        capacity: 400,
        registered: 285,
      },
      {
        id: 3,
        title: 'Advanced Fundraising Strategies for NGOs',
        date: '2024-09-29',
        time: '4:00 PM - 5:30 PM (GMT)',
        duration: '1.5 hours',
        tier: 'paid',
        speaker: 'Elena Rodriguez',
        description: 'Master modern fundraising techniques, donor engagement, and sustainable revenue models for non-profits.',
        topics: ['Fundraising', 'Donor Relations', 'Grant Writing', 'Social Media'],
        capacity: 300,
        registered: 178,
        price: '$49.99',
      },
      {
        id: 4,
        title: 'Women Empowerment through Economic Opportunity',
        date: '2024-10-06',
        time: '1:00 PM - 2:30 PM (GMT)',
        duration: '1.5 hours',
        tier: 'free',
        speaker: 'Amira Al-Rashid',
        description: 'Creating sustainable livelihoods and economic independence for women in developing regions.',
        topics: ['Women Rights', 'Microfinance', 'Skills Training', 'Entrepreneurship'],
        capacity: 450,
        registered: 398,
      },
      {
        id: 5,
        title: 'Food Security & Climate Resilience',
        date: '2024-10-13',
        time: '5:00 PM - 6:30 PM (GMT)',
        duration: '1.5 hours',
        tier: 'paid',
        speaker: 'Prof. James Wilson',
        description: 'Building climate-resilient agricultural systems and food supply chains in vulnerable regions.',
        topics: ['Climate Change', 'Agriculture', 'Sustainability', 'Food Systems'],
        capacity: 350,
        registered: 212,
        price: '$59.99',
      },
    ],

    // Recorded Webinars
    recordedWebinars: 'Recorded Webinars',
    viewRecording: 'Watch Recording',

    recorded: [
      {
        id: 101,
        title: 'Introduction to Humanitarian Principles',
        date: 'August 28, 2024',
        speaker: 'Dr. Hassan Al-Rashid',
        duration: '1 hour 45 minutes',
        views: '2,450',
        tier: 'free',
        description: 'Fundamental principles and ethics guiding humanitarian work across cultures and conflicts.',
        topics: ['Humanitarian Law', 'Ethics', 'Principles', 'Global Standards'],
      },
      {
        id: 102,
        title: 'Monitoring & Evaluation Best Practices',
        date: 'August 21, 2024',
        speaker: 'Dr. Fatima Al-Zahra',
        duration: '2 hours',
        views: '1,876',
        tier: 'paid',
        description: 'Comprehensive M&E frameworks for measuring program impact and accountability.',
        topics: ['Monitoring', 'Evaluation', 'Metrics', 'Reporting'],
        price: '$39.99',
      },
      {
        id: 103,
        title: 'Digital Tools for Remote Assistance',
        date: 'August 14, 2024',
        speaker: 'Ahmed Al-Noor',
        duration: '1 hour 30 minutes',
        views: '3,102',
        tier: 'free',
        description: 'Leveraging technology for effective remote program delivery and volunteer coordination.',
        topics: ['Technology', 'Digital Tools', 'Remote Work', 'Innovation'],
      },
      {
        id: 104,
        title: 'Conflict Sensitivity & Cultural Awareness',
        date: 'August 7, 2024',
        speaker: 'Dr. Leila Al-Suwairi',
        duration: '1 hour 50 minutes',
        views: '2,198',
        tier: 'free',
        description: 'Understanding cultural contexts and navigating sensitive environments in humanitarian programs.',
        topics: ['Culture', 'Conflict', 'Sensitivity', 'Awareness'],
      },
      {
        id: 105,
        title: 'Partnership Development & Collaboration',
        date: 'July 31, 2024',
        speaker: 'Ambassador Karim Al-Said',
        duration: '2 hours 15 minutes',
        views: '1,654',
        tier: 'paid',
        description: 'Building effective partnerships with governments, NGOs, and international organizations.',
        topics: ['Partnerships', 'Collaboration', 'Networking', 'Advocacy'],
        price: '$49.99',
      },
    ],

    // Speakers
    speakers: 'Expert Speakers',
    speakersList: [
      {
        id: 1,
        name: 'Dr. Sarah Al-Mansouri',
        title: 'Emergency Response Director',
        organization: 'JHCO',
        bio: 'Dr. Al-Mansouri has over 15 years of experience in emergency management and humanitarian response, having coordinated interventions in over 20 countries. She holds a PhD in Crisis Management from Oxford University.',
        expertise: ['Crisis Management', 'Disaster Response', 'Team Leadership', 'Logistics'],
      },
      {
        id: 2,
        name: 'Dr. Mohammad Hassan',
        title: 'Chief Medical Officer',
        organization: 'JHCO',
        bio: 'Board-certified physician with 18 years of experience providing healthcare in underserved regions. Dr. Hassan leads JHCO\'s healthcare initiatives across the Middle East and East Africa.',
        expertise: ['Healthcare', 'Telemedicine', 'Public Health', 'Clinical Leadership'],
      },
      {
        id: 3,
        name: 'Elena Rodriguez',
        title: 'Fundraising & Development Consultant',
        organization: 'Global NGO Alliance',
        bio: 'International fundraising expert who has helped over 200 NGOs raise $500 million collectively. Elena specializes in digital fundraising and major donor engagement.',
        expertise: ['Fundraising', 'Donor Relations', 'Grant Writing', 'Strategic Planning'],
      },
      {
        id: 4,
        name: 'Amira Al-Rashid',
        title: 'Women Empowerment Program Manager',
        organization: 'JHCO',
        bio: 'Leading economist and social entrepreneur focused on women\'s economic empowerment. Amira has established microfinance programs benefiting over 50,000 women across the region.',
        expertise: ['Women Empowerment', 'Microfinance', 'Economic Development', 'Gender Equality'],
      },
      {
        id: 5,
        name: 'Prof. James Wilson',
        title: 'Climate & Food Security Researcher',
        organization: 'MIT',
        bio: 'Renowned climate scientist and agricultural economist with 25 years of research on food security. Prof. Wilson advises international organizations on climate adaptation strategies.',
        expertise: ['Climate Science', 'Agriculture', 'Sustainability', 'Environmental Policy'],
      },
      {
        id: 6,
        name: 'Dr. Hassan Al-Rashid',
        title: 'International Law Specialist',
        organization: 'UNHCR',
        bio: 'Expert in humanitarian law and international conventions. Dr. Al-Rashid has trained thousands of humanitarian professionals worldwide on legal frameworks and ethical guidelines.',
        expertise: ['Humanitarian Law', 'Ethics', 'Legal Compliance', 'International Standards'],
      },
    ],

    // Registration Form
    registerTitle: 'Register for Webinar',
    registerButton: 'Register Now',
    fullName: 'Full Name',
    email: 'Email Address',
    organization: 'Organization',
    country: 'Country',
    interest: 'Area of Interest',
    agreeTerms: 'I agree to receive updates about webinars and JHCO programs',
    register: 'Register',
    registrationSuccess: 'Registration successful! Check your email for details.',

    // Certificate Section
    certificatesTitle: 'Certificates of Completion',
    certificatesDesc: 'Upon successful completion of webinars, participants receive official certificates recognizing their professional development.',
    certificateFeatures: [
      'Issued for all paid and free webinars',
      'Verifiable digital and printable certificates',
      'Display your professional credentials',
      'Recognized by partner organizations',
      'Add to LinkedIn and professional profiles',
    ],

    // Pricing Tiers
    freeTier: 'Free',
    freeDesc: 'Learn from experts at no cost',
    freeFeatures: [
      'Access to all free webinars',
      'Live participation and Q&A',
      'Certificate of participation',
      'Community forum access',
    ],
    paidTier: 'Premium',
    paidDesc: 'Enhanced learning experience',
    paidFeatures: [
      'Access to all paid webinars',
      'Interactive case studies',
      'Downloadable course materials',
      'Certificate of completion',
      'One-on-one consultation',
      'Lifetime video access',
    ],

    // Calendar View
    calendarTitle: 'Webinar Calendar',
    september: 'September',
    october: 'October',
    schedule: 'Schedule',

    // Topics
    topics: 'Featured Topics',
    allTopics: 'All Topics',
  },

  ar: {
    title: 'الندوات والتدريب',
    heroTitle: 'التطوير المهني والتعلم',
    heroSubtitle: 'وسّع معرفتك من خلال ندوات تدريبية بقيادة خبراء وبرامج تدريبية وكورسات معتمدة مصممة للعاملين في المجال الإنساني والشركاء.',

    // Tabs
    upcomingTab: 'الندوات القادمة',
    recordedTab: 'المكتبة المسجلة',
    speakersTab: 'المحاضرون',
    certificatesTab: 'الشهادات',

    // Upcoming Section
    upcomingWebinars: 'الندوات القادمة',
    noUpcoming: 'لا توجد ندوات مجدولة حالياً',

    webinars: [
      {
        id: 1,
        title: 'الاستجابة الطارئة في حالات الأزمات',
        date: '2024-09-15',
        time: '3:00 PM - 4:30 PM (GMT)',
        duration: 'ساعة ونصف',
        tier: 'free',
        speaker: 'د. سارة المنصوري',
        description: 'تعلم بروتوكولات أساسية لتنسيق الاستجابة الإنسانية السريعة في مناطق الصراع والكوارث.',
        topics: ['إدارة الأزمات', 'التنسيق', 'المستجيبون الأوائل', 'بروتوكولات السلامة'],
        capacity: 500,
        registered: 342,
      },
      {
        id: 2,
        title: 'الرعاية الصحية في المجتمعات المحرومة',
        date: '2024-09-22',
        time: '2:00 PM - 3:30 PM (GMT)',
        duration: 'ساعة ونصف',
        tier: 'free',
        speaker: 'د. محمد حسن',
        description: 'استراتيجيات ابتكارية لتوفير حلول صحية مستدامة للسكان في المناطق النائية والمحرومة.',
        topics: ['الرعاية الصحية', 'الطب الريفي', 'الطب عن بعد', 'الصحة المجتمعية'],
        capacity: 400,
        registered: 285,
      },
      {
        id: 3,
        title: 'استراتيجيات جمع الأموال المتقدمة للمنظمات غير الحكومية',
        date: '2024-09-29',
        time: '4:00 PM - 5:30 PM (GMT)',
        duration: 'ساعة ونصف',
        tier: 'paid',
        speaker: 'إيلينا رودريغيز',
        description: 'إتقان تقنيات جمع الأموال الحديثة وتفاعل المانحين والنماذج المستدامة للمنظمات غير الربحية.',
        topics: ['جمع الأموال', 'علاقات المانحين', 'كتابة المنح', 'وسائل التواصل الاجتماعي'],
        capacity: 300,
        registered: 178,
        price: '$49.99',
      },
      {
        id: 4,
        title: 'تمكين المرأة من خلال الفرص الاقتصادية',
        date: '2024-10-06',
        time: '1:00 PM - 2:30 PM (GMT)',
        duration: 'ساعة ونصف',
        tier: 'free',
        speaker: 'أميرة الراشد',
        description: 'خلق سبل عيش مستدامة والاستقلالية الاقتصادية للنساء في الدول النامية.',
        topics: ['حقوق المرأة', 'التمويل الأصغر', 'التدريب المهني', 'ريادة الأعمال'],
        capacity: 450,
        registered: 398,
      },
      {
        id: 5,
        title: 'الأمن الغذائي والمرونة المناخية',
        date: '2024-10-13',
        time: '5:00 PM - 6:30 PM (GMT)',
        duration: 'ساعة ونصف',
        tier: 'paid',
        speaker: 'البروفيسور جيمس ويلسون',
        description: 'بناء أنظمة زراعية مرنة مناخياً وسلاسل إمدادات غذائية في المناطق الضعيفة.',
        topics: ['تغير المناخ', 'الزراعة', 'الاستدامة', 'الأنظمة الغذائية'],
        capacity: 350,
        registered: 212,
        price: '$59.99',
      },
    ],

    // Recorded Webinars
    recordedWebinars: 'الندوات المسجلة',
    viewRecording: 'مشاهدة التسجيل',

    recorded: [
      {
        id: 101,
        title: 'مقدمة إلى المبادئ الإنسانية',
        date: '28 أغسطس، 2024',
        speaker: 'د. حسن الراشد',
        duration: 'ساعة و 45 دقيقة',
        views: '2,450',
        tier: 'free',
        description: 'المبادئ الأساسية والأخلاقيات التي توجه العمل الإنساني عبر الثقافات والنزاعات.',
        topics: ['القانون الإنساني', 'الأخلاقيات', 'المبادئ', 'المعايير العالمية'],
      },
      {
        id: 102,
        title: 'أفضل الممارسات في المراقبة والتقييم',
        date: '21 أغسطس، 2024',
        speaker: 'د. فاطمة الزهراء',
        duration: 'ساعتان',
        views: '1,876',
        tier: 'paid',
        description: 'أطر شاملة للمراقبة والتقييم لقياس التأثير وتحمل المسؤولية.',
        topics: ['المراقبة', 'التقييم', 'المقاييس', 'الإبلاغ'],
        price: '$39.99',
      },
      {
        id: 103,
        title: 'الأدوات الرقمية للمساعدة عن بعد',
        date: '14 أغسطس، 2024',
        speaker: 'أحمد النور',
        duration: 'ساعة ونصف',
        views: '3,102',
        tier: 'free',
        description: 'الاستفادة من التكنولوجيا لتقديم البرامج بفعالية والتنسيق التطوعي عن بعد.',
        topics: ['التكنولوجيا', 'الأدوات الرقمية', 'العمل عن بعد', 'الابتكار'],
      },
      {
        id: 104,
        title: 'الحساسية تجاه الصراع والوعي الثقافي',
        date: '7 أغسطس، 2024',
        speaker: 'د. ليلى السويري',
        duration: 'ساعة و 50 دقيقة',
        views: '2,198',
        tier: 'free',
        description: 'فهم السياقات الثقافية والملاحة في البيئات الحساسة في البرامج الإنسانية.',
        topics: ['الثقافة', 'الصراع', 'الحساسية', 'الوعي'],
      },
      {
        id: 105,
        title: 'تطوير الشراكات والتعاون',
        date: '31 يوليو، 2024',
        speaker: 'السفير كريم السعيد',
        duration: 'ساعتان و 15 دقيقة',
        views: '1,654',
        tier: 'paid',
        description: 'بناء شراكات فعالة مع الحكومات والمنظمات غير الحكومية والمنظمات الدولية.',
        topics: ['الشراكات', 'التعاون', 'التواصل', 'الدعوة'],
        price: '$49.99',
      },
    ],

    // Speakers
    speakers: 'المحاضرون الخبراء',
    speakersList: [
      {
        id: 1,
        name: 'د. سارة المنصوري',
        title: 'مديرة الاستجابة الطارئة',
        organization: 'الهيئة الخيرية الأردنية الهاشمية',
        bio: 'تتمتع د. المنصوري بخبرة تزيد عن 15 سنة في إدارة الطوارئ والاستجابة الإنسانية، وقد نسقت التدخلات في أكثر من 20 دولة. تحمل درجة الدكتوراه في إدارة الأزمات من جامعة أكسفورد.',
        expertise: ['إدارة الأزمات', 'الاستجابة للكوارث', 'قيادة الفريق', 'اللوجستيات'],
      },
      {
        id: 2,
        name: 'د. محمد حسن',
        title: 'الرئيس الطبي',
        organization: 'الهيئة الخيرية الأردنية الهاشمية',
        bio: 'طبيب معتمد من المجلس بخبرة 18 سنة في تقديم الرعاية الصحية في المناطق المحرومة. يقود د. حسن مبادرات الرعاية الصحية في الهيئة عبر الشرق الأوسط وشرق أفريقيا.',
        expertise: ['الرعاية الصحية', 'الطب عن بعد', 'الصحة العامة', 'القيادة السريرية'],
      },
      {
        id: 3,
        name: 'إيلينا رودريغيز',
        title: 'مستشارة جمع الأموال والتطوير',
        organization: 'التحالف العالمي للمنظمات غير الحكومية',
        bio: 'خبيرة جمع الأموال الدولية التي ساعدت أكثر من 200 منظمة غير حكومية على جمع 500 مليون دولار. تتخصص إيلينا في جمع الأموال الرقمية وتفاعل المانحين الرئيسيين.',
        expertise: ['جمع الأموال', 'علاقات المانحين', 'كتابة المنح', 'التخطيط الاستراتيجي'],
      },
      {
        id: 4,
        name: 'أميرة الراشد',
        title: 'مدير برنامج تمكين المرأة',
        organization: 'الهيئة الخيرية الأردنية الهاشمية',
        bio: 'اقتصادية رائدة ومنظمة اجتماعية متخصصة في تمكين المرأة اقتصادياً. أنشأت أميرة برامج التمويل الأصغر التي استفادت منها أكثر من 50,000 امرأة عبر المنطقة.',
        expertise: ['تمكين المرأة', 'التمويل الأصغر', 'التطوير الاقتصادي', 'المساواة بين الجنسين'],
      },
      {
        id: 5,
        name: 'البروفيسور جيمس ويلسون',
        title: 'باحث المناخ والأمن الغذائي',
        organization: 'معهد ماساتشوستس للتكنولوجيا',
        bio: 'عالم مناخ مشهور واقتصادي زراعي بخبرة 25 سنة في البحث عن الأمن الغذائي. يقدم البروفيسور ويلسون المشورة للمنظمات الدولية بشأن استراتيجيات التكيف المناخي.',
        expertise: ['علم المناخ', 'الزراعة', 'الاستدامة', 'السياسة البيئية'],
      },
      {
        id: 6,
        name: 'د. حسن الراشد',
        title: 'متخصص القانون الدولي',
        organization: 'المفوضية السامية للأمم المتحدة لشؤون اللاجئين',
        bio: 'خبير في القانون الإنساني والاتفاقيات الدولية. درب د. الراشد آلاف العاملين في المجال الإنساني حول العالم على الأطر القانونية والمبادئ الأخلاقية.',
        expertise: ['القانون الإنساني', 'الأخلاقيات', 'الامتثال القانوني', 'المعايير الدولية'],
      },
    ],

    // Registration Form
    registerTitle: 'التسجيل في الندوة',
    registerButton: 'سجل الآن',
    fullName: 'الاسم الكامل',
    email: 'عنوان البريد الإلكتروني',
    organization: 'المنظمة',
    country: 'الدولة',
    interest: 'مجال الاهتمام',
    agreeTerms: 'أوافق على تلقي التحديثات حول الندوات وبرامج الهيئة',
    register: 'تسجيل',
    registrationSuccess: 'تم التسجيل بنجاح! تحقق من بريدك الإلكتروني للتفاصيل.',

    // Certificate Section
    certificatesTitle: 'شهادات الإنجاز',
    certificatesDesc: 'عند الانتهاء بنجاح من الندوات، يتلقى المشاركون شهادات رسمية تعترف بتطورهم المهني.',
    certificateFeatures: [
      'تُصدر لجميع الندوات المجانية والمدفوعة',
      'شهادات رقمية وقابلة للطباعة يمكن التحقق منها',
      'اعرض بيانات اعتمادك المهنية',
      'معترف بها من قبل المنظمات الشريكة',
      'أضفها إلى LinkedIn والملفات الشخصية المهنية',
    ],

    // Pricing Tiers
    freeTier: 'مجاني',
    freeDesc: 'تعلم من الخبراء مجاناً',
    freeFeatures: [
      'الوصول إلى جميع الندوات المجانية',
      'المشاركة المباشرة والأسئلة والأجوبة',
      'شهادة مشاركة',
      'الوصول إلى منتدى المجتمع',
    ],
    paidTier: 'متميز',
    paidDesc: 'تجربة تعليمية محسّنة',
    paidFeatures: [
      'الوصول إلى جميع الندوات المدفوعة',
      'دراسات الحالات التفاعلية',
      'مواد الدورة القابلة للتحميل',
      'شهادة الإنجاز',
      'استشارة فردية واحدة',
      'الوصول الدائم إلى الفيديوهات',
    ],

    // Calendar View
    calendarTitle: 'تقويم الندوات',
    september: 'سبتمبر',
    october: 'أكتوبر',
    schedule: 'الجدول الزمني',

    // Topics
    topics: 'المواضيع المميزة',
    allTopics: 'جميع المواضيع',
  },
};

export default function WebinarsPage({ params }: { params: { locale: Locale } }) {
  const ar = params.locale === 'ar';
  const content = webinarsContent[params.locale];
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'recorded' | 'speakers' | 'certificates'>('upcoming');
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    interest: '',
  });
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationMessage(content.registrationSuccess);
    setRegistrationForm({ name: '', email: '', organization: '', country: '', interest: '' });
    setTimeout(() => setRegistrationMessage(''), 3000);
  };

  return (
    <main style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.95) 0%, rgba(0, 26, 77, 0.95) 100%)',
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '0 0 16px 0',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '18px',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section style={{
        background: 'white',
        borderBottom: `1px solid ${royalColors.borderSubtle}`,
        padding: `0 ${spacing.xl}`,
        position: 'sticky',
        top: '0',
        zIndex: '10',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: ar ? 'flex-end' : 'flex-start',
          gap: '0',
        }}>
          {(['upcoming', 'recorded', 'speakers', 'certificates'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              style={{
                background: selectedTab === tab ? royalColors.hashemiteGold : 'transparent',
                color: selectedTab === tab ? royalColors.darkNavy : royalColors.textSecondary,
                border: 'none',
                padding: `${spacing.md} ${spacing.xl}`,
                fontSize: '16px',
                fontWeight: selectedTab === tab ? '600' : '500',
                cursor: 'pointer',
                borderBottom: selectedTab === tab ? `3px solid ${royalColors.hashemiteGold}` : 'none',
                transition: 'all 0.3s',
              }}
            >
              {tab === 'upcoming' && content.upcomingTab}
              {tab === 'recorded' && content.recordedTab}
              {tab === 'speakers' && content.speakersTab}
              {tab === 'certificates' && content.certificatesTab}
            </button>
          ))}
        </div>
      </section>

      {/* Upcoming Webinars Tab */}
      {selectedTab === 'upcoming' && (
        <section style={{ padding: `${spacing.xxxl} ${spacing.xl}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: royalColors.darkNavy,
              marginBottom: spacing.xxxl,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.upcomingWebinars}
            </h2>

            {/* Calendar Overview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: spacing.xl,
              marginBottom: spacing.xxxl,
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(232, 185, 35, 0.05) 100%)',
                padding: spacing.xl,
                borderRadius: borderRadius.card,
                border: `1px solid ${royalColors.borderSubtle}`,
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: royalColors.darkNavy, margin: '0 0 8px 0', textAlign: ar ? 'right' : 'left' }}>
                  {content.september}
                </h3>
                <p style={{ fontSize: '14px', color: royalColors.textSecondary, margin: '0', textAlign: ar ? 'right' : 'left' }}>
                  4 {content.schedule}
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                padding: spacing.xl,
                borderRadius: borderRadius.card,
                border: `1px solid ${royalColors.borderSubtle}`,
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: royalColors.darkNavy, margin: '0 0 8px 0', textAlign: ar ? 'right' : 'left' }}>
                  {content.october}
                </h3>
                <p style={{ fontSize: '14px', color: royalColors.textSecondary, margin: '0', textAlign: ar ? 'right' : 'left' }}>
                  1 {content.schedule}
                </p>
              </div>

              <div style={{
                background: 'rgba(13, 115, 119, 0.1)',
                padding: spacing.xl,
                borderRadius: borderRadius.card,
                border: `1px solid ${royalColors.borderSubtle}`,
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: royalColors.darkNavy, margin: '0 0 8px 0', textAlign: ar ? 'right' : 'left' }}>
                  5 Webinars
                </h3>
                <p style={{ fontSize: '14px', color: royalColors.textSecondary, margin: '0', textAlign: ar ? 'right' : 'left' }}>
                  2 {content.paidTier}, 3 {content.freeTier}
                </p>
              </div>
            </div>

            {/* Webinars List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: spacing.xl,
            }}>
              {content.webinars.map((webinar) => (
                <div key={webinar.id} style={{
                  background: royalColors.ivoryBg,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.card,
                  padding: spacing.xl,
                  display: 'grid',
                  gridTemplateColumns: ar ? '1fr auto' : 'auto 1fr',
                  gap: spacing.xl,
                  alignItems: 'start',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(74, 20, 140, 0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
                >
                  {/* Date Badge */}
                  <div style={{
                    background: royalColors.hashemiteGold,
                    color: royalColors.darkNavy,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    textAlign: 'center',
                    minWidth: '120px',
                    height: 'fit-content',
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: '600' }}>
                      {new Date(webinar.date).toLocaleDateString(ar ? 'ar-SA' : 'en-US', { month: 'short' })}
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: royalColors.darkNavy }}>
                      {new Date(webinar.date).getDate()}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, textAlign: ar ? 'right' : 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md, justifyContent: ar ? 'flex-end' : 'flex-start' }}>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: '0',
                        flex: 1,
                      }}>
                        {webinar.title}
                      </h3>
                      <span style={{
                        background: webinar.tier === 'free' ? 'rgba(13, 115, 119, 0.2)' : 'rgba(196, 30, 58, 0.2)',
                        color: webinar.tier === 'free' ? royalColors.compassionTeal : royalColors.charityRed,
                        padding: `${spacing.xs} ${spacing.md}`,
                        borderRadius: borderRadius.full,
                        fontSize: '12px',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                      }}>
                        {webinar.tier === 'free' ? content.freeTier : content.paidTier}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '14px',
                      color: royalColors.textSecondary,
                      marginBottom: spacing.md,
                      display: 'grid',
                      gridTemplateColumns: ar ? '1fr auto' : 'auto 1fr',
                      gap: spacing.md,
                    }}>
                      <div>📅 {webinar.time}</div>
                      <div>⏱️ {webinar.duration}</div>
                      <div>👤 {webinar.speaker}</div>
                      <div>{webinar.registered}/{webinar.capacity} {ar ? 'مسجل' : 'registered'}</div>
                    </div>

                    <p style={{
                      fontSize: '15px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.6',
                      margin: `${spacing.md} 0`,
                    }}>
                      {webinar.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: spacing.sm,
                      marginBottom: spacing.md,
                      justifyContent: ar ? 'flex-end' : 'flex-start',
                    }}>
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} style={{
                          background: 'rgba(74, 20, 140, 0.1)',
                          color: royalColors.deepRoyal,
                          padding: `${spacing.xs} ${spacing.md}`,
                          borderRadius: borderRadius.full,
                          fontSize: '12px',
                        }}>
                          {topic}
                        </span>
                      ))}
                    </div>

                    <button style={{
                      background: royalColors.charityRed,
                      color: 'white',
                      border: 'none',
                      padding: `${spacing.sm} ${spacing.lg}`,
                      borderRadius: borderRadius.button,
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.redLight;
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.charityRed;
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                    >
                      {content.registerButton} {webinar.price && `- ${webinar.price}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recorded Webinars Tab */}
      {selectedTab === 'recorded' && (
        <section style={{ padding: `${spacing.xxxl} ${spacing.xl}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: royalColors.darkNavy,
              marginBottom: spacing.xxxl,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.recordedWebinars}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: spacing.xl,
            }}>
              {content.recorded.map((webinar) => (
                <div key={webinar.id} style={{
                  background: 'white',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.card,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    padding: `${spacing.xxxl} ${spacing.xl}`,
                    textAlign: 'center',
                    borderBottom: `1px solid ${royalColors.borderSubtle}`,
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: spacing.md }}>
                      ▶️
                    </div>
                    <div style={{ fontSize: '14px', color: royalColors.textSecondary }}>
                      {webinar.views} {ar ? 'مشاهدة' : 'views'}
                    </div>
                  </div>

                  <div style={{ padding: spacing.xl }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md, justifyContent: ar ? 'flex-end' : 'flex-start' }}>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                        margin: '0',
                        flex: 1,
                        textAlign: ar ? 'right' : 'left',
                      }}>
                        {webinar.title}
                      </h3>
                      <span style={{
                        background: webinar.tier === 'free' ? 'rgba(13, 115, 119, 0.2)' : 'rgba(196, 30, 58, 0.2)',
                        color: webinar.tier === 'free' ? royalColors.compassionTeal : royalColors.charityRed,
                        padding: `${spacing.xs} ${spacing.md}`,
                        borderRadius: borderRadius.full,
                        fontSize: '11px',
                        fontWeight: '600',
                      }}>
                        {webinar.tier === 'free' ? content.freeTier : content.paidTier}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      marginBottom: spacing.md,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      <div>👤 {webinar.speaker}</div>
                      <div>📅 {webinar.date}</div>
                      <div>⏱️ {webinar.duration}</div>
                    </div>

                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.5',
                      margin: `${spacing.md} 0`,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {webinar.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: spacing.sm,
                      marginBottom: spacing.lg,
                      justifyContent: ar ? 'flex-end' : 'flex-start',
                    }}>
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} style={{
                          background: 'rgba(74, 20, 140, 0.1)',
                          color: royalColors.deepRoyal,
                          padding: `${spacing.xs} ${spacing.md}`,
                          borderRadius: borderRadius.full,
                          fontSize: '11px',
                        }}>
                          {topic}
                        </span>
                      ))}
                    </div>

                    <button style={{
                      width: '100%',
                      background: royalColors.charityRed,
                      color: 'white',
                      border: 'none',
                      padding: `${spacing.md} ${spacing.lg}`,
                      borderRadius: borderRadius.button,
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.redLight;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.charityRed;
                    }}
                    >
                      {content.viewRecording}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Speakers Tab */}
      {selectedTab === 'speakers' && (
        <section style={{ padding: `${spacing.xxxl} ${spacing.xl}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: royalColors.darkNavy,
              marginBottom: spacing.xxxl,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.speakers}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: spacing.xl,
            }}>
              {content.speakersList.map((speaker) => (
                <div key={speaker.id} style={{
                  background: 'linear-gradient(135deg, rgba(245, 241, 232, 1) 0%, rgba(250, 248, 245, 1) 100%)',
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.card,
                  padding: spacing.xl,
                  textAlign: ar ? 'right' : 'left',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(74, 20, 140, 0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
                >
                  <div style={{
                    fontSize: '48px',
                    marginBottom: spacing.md,
                  }}>
                    👤
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    margin: `0 0 ${spacing.xs} 0`,
                  }}>
                    {speaker.name}
                  </h3>
                  <div style={{
                    fontSize: '14px',
                    color: royalColors.charityRed,
                    fontWeight: '600',
                    marginBottom: spacing.sm,
                  }}>
                    {speaker.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    marginBottom: spacing.md,
                  }}>
                    {speaker.organization}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    margin: `${spacing.md} 0`,
                  }}>
                    {speaker.bio}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: spacing.sm,
                    marginTop: spacing.md,
                    justifyContent: ar ? 'flex-end' : 'flex-start',
                  }}>
                    {speaker.expertise.map((exp, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(212, 175, 55, 0.2)',
                        color: royalColors.deepRoyal,
                        padding: `${spacing.xs} ${spacing.md}`,
                        borderRadius: borderRadius.full,
                        fontSize: '11px',
                      }}>
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificates Tab */}
      {selectedTab === 'certificates' && (
        <section style={{ padding: `${spacing.xxxl} ${spacing.xl}` }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: royalColors.darkNavy,
              marginBottom: spacing.lg,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.certificatesTitle}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              marginBottom: spacing.xxxl,
              textAlign: ar ? 'right' : 'left',
            }}>
              {content.certificatesDesc}
            </p>

            {/* Certificate Features */}
            <div style={{
              background: royalColors.ivoryBg,
              border: `2px dashed ${royalColors.hashemiteGold}`,
              borderRadius: borderRadius.card,
              padding: spacing.xxxl,
              marginBottom: spacing.xxxl,
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                textAlign: ar ? 'right' : 'left',
                marginBottom: spacing.xl,
              }}>
                🏆 {ar ? 'مميزات الشهادات' : 'Certificate Features'}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: spacing.xl,
              }}>
                {content.certificateFeatures.map((feature, idx) => (
                  <div key={idx} style({
                    display: 'flex',
                    gap: spacing.md,
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>✓</span>
                    <span style={{
                      fontSize: '15px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.5',
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Tiers */}
            <h3 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              textAlign: ar ? 'right' : 'left',
              marginBottom: spacing.xxxl,
            }}>
              {content.topics}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing.xl,
            }}>
              {/* Free Tier */}
              <div style={{
                background: 'white',
                border: `2px solid ${royalColors.compassionTeal}`,
                borderRadius: borderRadius.card,
                padding: spacing.xl,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: royalColors.compassionTeal,
                  margin: '0 0 8px 0',
                }}>
                  {content.freeTier}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: `0 0 ${spacing.xl} 0`,
                }}>
                  {content.freeDesc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
                  {content.freeFeatures.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: spacing.md, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '14px', color: royalColors.textOfficial }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Tier */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(232, 185, 35, 0.1) 100%)',
                border: `2px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.card,
                padding: spacing.xl,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: royalColors.deepRoyal,
                  margin: '0 0 8px 0',
                }}>
                  {content.paidTier} ⭐
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: `0 0 ${spacing.xl} 0`,
                }}>
                  {content.paidDesc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
                  {content.paidFeatures.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: spacing.md, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '14px', color: royalColors.textOfficial }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Registration Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)',
        padding: `${spacing.xxxl} ${spacing.xl}`,
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: royalColors.darkNavy,
            marginBottom: spacing.xl,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.registerTitle}
          </h2>

          <form onSubmit={handleRegistration} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.lg,
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.sm,
                textAlign: ar ? 'right' : 'left',
              }}>
                {content.fullName}
              </label>
              <input
                type="text"
                value={registrationForm.name}
                onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: spacing.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.md,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.sm,
                textAlign: ar ? 'right' : 'left',
              }}>
                {content.email}
              </label>
              <input
                type="email"
                value={registrationForm.email}
                onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: spacing.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.md,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.sm,
                textAlign: ar ? 'right' : 'left',
              }}>
                {content.organization}
              </label>
              <input
                type="text"
                value={registrationForm.organization}
                onChange={(e) => setRegistrationForm({ ...registrationForm, organization: e.target.value })}
                style={{
                  width: '100%',
                  padding: spacing.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.md,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.sm,
                textAlign: ar ? 'right' : 'left',
              }}>
                {content.country}
              </label>
              <input
                type="text"
                value={registrationForm.country}
                onChange={(e) => setRegistrationForm({ ...registrationForm, country: e.target.value })}
                style={{
                  width: '100%',
                  padding: spacing.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.md,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: spacing.sm,
                textAlign: ar ? 'right' : 'left',
              }}>
                {content.interest}
              </label>
              <input
                type="text"
                value={registrationForm.interest}
                onChange={(e) => setRegistrationForm({ ...registrationForm, interest: e.target.value })}
                style={{
                  width: '100%',
                  padding: spacing.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.md,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  direction: ar ? 'rtl' : 'ltr',
                }}
              />
            </div>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              fontSize: '14px',
              color: royalColors.textSecondary,
              cursor: 'pointer',
              direction: ar ? 'rtl' : 'ltr',
            }}>
              <input type="checkbox" required style={{ cursor: 'pointer' }} />
              <span>{content.agreeTerms}</span>
            </label>

            <button
              type="submit"
              style={{
                background: royalColors.charityRed,
                color: 'white',
                border: 'none',
                padding: `${spacing.md} ${spacing.lg}`,
                borderRadius: borderRadius.button,
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.redLight;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.charityRed;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {content.register}
            </button>

            {registrationMessage && (
              <div style={{
                background: 'rgba(13, 115, 119, 0.1)',
                color: royalColors.compassionTeal,
                padding: spacing.md,
                borderRadius: borderRadius.md,
                fontSize: '14px',
                textAlign: 'center',
              }}>
                {registrationMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: royalColors.darkNavy,
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 16px 0',
          }}>
            {ar ? 'نطوّر مهاراتك اليوم' : 'Develop Your Skills Today'}
          </h2>
          <p style={{
            fontSize: '16px',
            opacity: 0.9,
            margin: '0',
            maxWidth: '600px',
          }}>
            {ar ? 'انضم إلى مئات المتخصصين في المجال الإنساني الذين يتطورون مع برامج التدريب والشهادات المقدمة من الهيئة الخيرية الأردنية الهاشمية.' : 'Join hundreds of humanitarian professionals advancing their skills through JHCO training and certification programs.'}
          </p>
        </div>
      </section>
    </main>
  );
}
