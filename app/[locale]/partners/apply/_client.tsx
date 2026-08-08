'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius, gradients } from '@/lib/royalDesign';
import { useState, useEffect } from 'react';

interface FormData {
  // Step 1: Organization Info
  orgName: string;
  orgType: string;
  country: string;
  yearsOperating: string;

  // Step 2: Contact Info
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;

  // Step 3: Partnership Details
  partnershipType: string;
  investmentLevel: string;
  focusArea: string;
  description: string;

  // Step 4: Review & Submit
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  orgName: '',
  orgType: '',
  country: '',
  yearsOperating: '',
  contactName: '',
  contactTitle: '',
  email: '',
  phone: '',
  partnershipType: '',
  investmentLevel: '',
  focusArea: '',
  description: '',
  agreeToTerms: false,
};

export default function BecomePartnerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [paramsResolved, setParamsResolved] = useState(false);
  const [locale, setLocale] = useState('en');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    params.then(({ locale: l }) => {
      setLocale(l);
      setParamsResolved(true);
    });
  }, [params]);

  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Content
  const content = ar ? {
    // Hero
    heroTitle: '👑 اصبح شريكنا',
    heroSubtitle: 'انضم إلى شبكة عالمية من المنظمات المتميزة',
    heroDesc: 'معاً نحن نحقق تأثيراً إنسانياً عميقاً وطويل الأمد',

    // Overview
    overviewTitle: 'لماذا الشراكة مع JHCO؟',
    overviewDesc: 'نبحث عن شركاء يشاركوننا رؤيتنا في خدمة الإنسانية بامتياز وكرامة',
    benefitsTitle: 'فوائد الشراكة',

    benefits: [
      { icon: '🌍', title: 'تأثير عالمي', desc: 'الوصول إلى شبكة في 50+ دولة' },
      { icon: '📊', title: 'شفافية كاملة', desc: 'تقارير مفصلة عن الأثر والنتائج' },
      { icon: '🤝', title: 'دعم مخصص', desc: 'فريق متخصص للتنسيق والدعم' },
      { icon: '👑', title: 'رعاية ملكية', desc: 'تحت الرعاية الملكية الهاشمية' },
      { icon: '📈', title: 'نمو معاً', desc: 'فرص تطوير وتعاون مستمرة' },
      { icon: '🎖️', title: 'دعاية مميزة', desc: 'ترويج على المستوى الوطني والعالمي' },
    ],

    // Partner Types
    partnerTypesTitle: 'أنواع الشراكة',
    partnerTypesDesc: 'اختر مستوى الشراكة الذي يناسب رؤيتك وقدراتك',

    partnerTypes: [
      {
        icon: '👑',
        title: 'الشركاء الاستراتيجيون الملكيون',
        description: 'شراكات متقدمة برؤية مشتركة للتأثير الإنساني العالمي',
        benefits: [
          'تمثيل في الهيئة التنفيذية',
          'مبادرات مشتركة مع العلامة التجارية',
          'قمة استراتيجية سنوية',
          'منسق شراكة مخصص',
          'ظهور مميز في جميع المواد',
        ],
        investmentMin: '$500,000+',
        commitment: 'متعدد السنوات',
      },
      {
        icon: '🏛️',
        title: 'الشركاء المؤسسيون',
        description: 'منظمات مكرسة للبرمجة التعاونية',
        benefits: [
          'تنفيذ البرامج المشتركة',
          'بناء القدرات وتبادل المعرفة',
          'اجتماعات تنسيق نصف سنوية',
          'دعم الرؤية والتسويق',
          'تقارير مخصصة عن الأثر',
        ],
        investmentMin: '$100,000 - $500,000',
        commitment: '2-3 سنوات',
      },
      {
        icon: '🤝',
        title: 'شركاء البرامج',
        description: 'منظمات تتعاون في مبادرات أو قطاعات محددة',
        benefits: [
          'تعاون برنامج موجه',
          'الخبرة التقنية والدعم',
          'تحديثات برنامج منتظمة',
          'الاعتراف وسائل التواصل',
          'فرص المشاركة في الفعاليات',
        ],
        investmentMin: '$25,000 - $100,000',
        commitment: 'سنة واحدة',
      },
      {
        icon: '🌍',
        title: 'الشركاء الإقليميون',
        description: 'منظمات محلية تقدم مهمتنا في مجتمعاتها',
        benefits: [
          'تسليم البرنامج على المستوى المجتمعي',
          'تعزيز القدرات المحلية',
          'اجتماعات تنسيق ربع سنوية',
          'شهادة شراكة وأدوات',
          'الوصول إلى موارد وتدريب JHCO',
        ],
        investmentMin: '$5,000 - $25,000',
        commitment: 'سنة واحدة',
      },
    ],

    // Investment Requirements
    investmentTitle: 'متطلبات الاستثمار',
    investmentDesc: 'التزام مرن حسب مستوى الشراكة',

    investmentLevels: [
      {
        level: 'إقليمي',
        range: '$5,000 - $25,000',
        includes: ['برنامج مخصص', 'اجتماعات ربع سنوية', 'تقارير تأثير'],
      },
      {
        level: 'برنامج',
        range: '$25,000 - $100,000',
        includes: ['برنامجان مشتركان', 'اجتماعات نصف سنوية', 'دعم وسائل التواصل'],
      },
      {
        level: 'مؤسسي',
        range: '$100,000 - $500,000',
        includes: ['برامج متعددة', 'تنسيق دوري', 'خدمات استشارية'],
      },
      {
        level: 'ملكي استراتيجي',
        range: '$500,000+',
        includes: ['جميع المزايا', 'تمثيل تنفيذي', 'مبادرات مخصصة'],
      },
    ],

    // Success Stories
    storiesTitle: 'قصص النجاح',
    storiesDesc: 'تعرف على الشركاء الذين غيروا الحياة معنا',

    stories: [
      {
        partnerName: 'برنامج الصحة العالمية',
        type: 'شريك مؤسسي',
        achievement: 'وصلنا معاً إلى 500,000 شخص بخدمات الرعاية الصحية',
        quote: 'الشراكة مع JHCO غيرت نطاق عملنا وتأثيرنا',
        year: '2022',
      },
      {
        partnerName: 'منظمة التعليم المجتمعي',
        type: 'شريك برنامج',
        achievement: 'نشأنا من برنامج واحد إلى ثمانية برامج تعليمية',
        quote: 'دعم JHCO كان محور نجاحنا',
        year: '2023',
      },
      {
        partnerName: 'المركز الإقليمي للتنمية',
        type: 'شريك إقليمي',
        achievement: 'بنينا قدرات 50 منظمة محلية في المنطقة',
        quote: 'الموارد والتدريب منحونا القوة للتأثير المحلي',
        year: '2023',
      },
    ],

    // Timeline
    timelineTitle: 'الجدول الزمني للتقديم',
    timelineDesc: 'ما يمكن توقعه من عملية التقديم',

    timeline: [
      { step: '1', title: 'التقديم الأولي', desc: 'أكمل نموذج الشراكة الخاص بك (15 دقيقة)', days: 'يوم 0' },
      { step: '2', title: 'التقييم الأولي', desc: 'يتم مراجعة بيانات التطبيق من قبل فريقنا', days: '3-5 أيام' },
      { step: '3', title: 'المقابلة الأولى', desc: 'استكشاف الأهداف المشتركة والإمكانيات', days: '1-2 أسبوع' },
      { step: '4', title: 'العرض المقترح', desc: 'الحصول على عرض شراكة مخصص', days: '1-2 أسبوع' },
      { step: '5', title: 'التفاوض والإغلاق', desc: 'الاتفاق على الشروط والوثائق', days: '2-4 أسابيع' },
      { step: '6', title: 'الإطلاق', desc: 'بدء الشراكة الرسمية والبرامج المشتركة', days: 'يوم محدد' },
    ],

    // Form Labels
    formSteps: [
      { number: 1, title: 'معلومات المنظمة', desc: 'تفاصيل أساسية عن منظمتك' },
      { number: 2, title: 'معلومات الاتصال', desc: 'من سنتواصل معه' },
      { number: 3, title: 'تفاصيل الشراكة', desc: 'أهدافك وطموحاتك' },
      { number: 4, title: 'المراجعة والتقديم', desc: 'تأكيد تفاصيلك' },
    ],

    // Form Fields
    formLabels: {
      orgName: 'اسم المنظمة',
      orgType: 'نوع المنظمة',
      country: 'الدولة/المنطقة',
      yearsOperating: 'سنوات العمل',
      contactName: 'اسم جهة الاتصال',
      contactTitle: 'المسمى الوظيفي',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      partnershipType: 'نوع الشراكة المرغوبة',
      investmentLevel: 'مستوى الاستثمار',
      focusArea: 'منطقة التركيز',
      description: 'وصف تفصيلي لاهتمامك (250 كلمة كحد أقصى)',
      agreeToTerms: 'أوافق على شروط الشراكة',
    },

    // Buttons
    nextButton: 'التالي',
    backButton: 'السابق',
    submitButton: 'إرسال التطبيق',
    successTitle: 'شكراً لتطبيقك!',
    successMsg: 'سنراجع طلبك ونتواصل معك قريباً',

    // Contact
    contactTitle: 'لديك أسئلة؟',
    contactDesc: 'فريقنا جاهز للمساعدة',
    contactEmail: 'partnerships@jhco.org',
    contactPhone: '+962 (6) 5100 0000',
  } : {
    // Hero
    heroTitle: '👑 Become a Partner',
    heroSubtitle: 'Join Our Global Network of Distinguished Organizations',
    heroDesc: 'Together we create profound and lasting humanitarian impact',

    // Overview
    overviewTitle: 'Why Partner with JHCO?',
    overviewDesc: 'We seek partners who share our vision of serving humanity with excellence and dignity',
    benefitsTitle: 'Partnership Benefits',

    benefits: [
      { icon: '🌍', title: 'Global Impact', desc: 'Access to a network spanning 50+ countries' },
      { icon: '📊', title: 'Full Transparency', desc: 'Detailed reports on impact and results' },
      { icon: '🤝', title: 'Dedicated Support', desc: 'Specialized team for coordination and support' },
      { icon: '👑', title: 'Royal Patronage', desc: 'Under Royal Hashemite patronage' },
      { icon: '📈', title: 'Grow Together', desc: 'Continuous development and collaboration opportunities' },
      { icon: '🎖️', title: 'Featured Visibility', desc: 'National and international promotion' },
    ],

    // Partner Types
    partnerTypesTitle: 'Partnership Types',
    partnerTypesDesc: 'Choose the partnership level that matches your vision and capacity',

    partnerTypes: [
      {
        icon: '👑',
        title: 'Royal Strategic Partners',
        description: 'Premium partnerships with shared vision for global humanitarian impact',
        benefits: [
          'Executive board representation',
          'Co-branded initiatives and programs',
          'Annual strategic summit',
          'Dedicated partnership coordinator',
          'Featured prominence in all materials',
        ],
        investmentMin: '$500,000+',
        commitment: 'Multi-year',
      },
      {
        icon: '🏛️',
        title: 'Institutional Partners',
        description: 'Established organizations committed to collaborative programming',
        benefits: [
          'Joint program implementation',
          'Capacity building and knowledge exchange',
          'Semi-annual coordination meetings',
          'Marketing and visibility support',
          'Custom impact reporting',
        ],
        investmentMin: '$100,000 - $500,000',
        commitment: '2-3 years',
      },
      {
        icon: '🤝',
        title: 'Program Partners',
        description: 'Organizations collaborating on specific initiatives or sectors',
        benefits: [
          'Targeted program collaboration',
          'Technical expertise and support',
          'Regular program updates and reports',
          'Social media recognition',
          'Event participation opportunities',
        ],
        investmentMin: '$25,000 - $100,000',
        commitment: '1 year',
      },
      {
        icon: '🌍',
        title: 'Regional Partners',
        description: 'Local organizations advancing our mission in their communities',
        benefits: [
          'Community-level program delivery',
          'Local capacity strengthening',
          'Quarterly coordination meetings',
          'Partnership certificate and toolkit',
          'Access to JHCO resources and training',
        ],
        investmentMin: '$5,000 - $25,000',
        commitment: '1 year',
      },
    ],

    // Investment Requirements
    investmentTitle: 'Investment Requirements',
    investmentDesc: 'Flexible commitments based on partnership tier',

    investmentLevels: [
      {
        level: 'Regional',
        range: '$5,000 - $25,000',
        includes: ['Dedicated program', 'Quarterly meetings', 'Impact reports'],
      },
      {
        level: 'Program',
        range: '$25,000 - $100,000',
        includes: ['Two joint programs', 'Semi-annual meetings', 'Social media support'],
      },
      {
        level: 'Institutional',
        range: '$100,000 - $500,000',
        includes: ['Multiple programs', 'Regular coordination', 'Consulting services'],
      },
      {
        level: 'Royal Strategic',
        range: '$500,000+',
        includes: ['All benefits', 'Board representation', 'Custom initiatives'],
      },
    ],

    // Success Stories
    storiesTitle: 'Success Stories',
    storiesDesc: 'Meet the partners who are changing lives with us',

    stories: [
      {
        partnerName: 'Global Health Initiative',
        type: 'Institutional Partner',
        achievement: 'Together we reached 500,000 people with healthcare services',
        quote: 'Partnering with JHCO transformed our reach and impact',
        year: '2022',
      },
      {
        partnerName: 'Community Education Foundation',
        type: 'Program Partner',
        achievement: 'Grew from one program to eight educational initiatives',
        quote: 'JHCO\'s support was pivotal to our success',
        year: '2023',
      },
      {
        partnerName: 'Regional Development Centre',
        type: 'Regional Partner',
        achievement: 'Built capacity of 50 local organizations across the region',
        quote: 'Resources and training empowered our local impact',
        year: '2023',
      },
    ],

    // Timeline
    timelineTitle: 'Application Timeline',
    timelineDesc: 'What to expect from the partnership process',

    timeline: [
      { step: '1', title: 'Initial Submission', desc: 'Complete your partnership application (15 minutes)', days: 'Day 0' },
      { step: '2', title: 'Preliminary Review', desc: 'Your application data is reviewed by our team', days: '3-5 days' },
      { step: '3', title: 'Initial Meeting', desc: 'Explore shared objectives and possibilities', days: '1-2 weeks' },
      { step: '4', title: 'Proposal Presentation', desc: 'Receive your customized partnership proposal', days: '1-2 weeks' },
      { step: '5', title: 'Negotiation & Close', desc: 'Agree on terms and sign partnership documents', days: '2-4 weeks' },
      { step: '6', title: 'Launch', desc: 'Begin official partnership and shared programs', days: 'Scheduled date' },
    ],

    // Form Labels
    formSteps: [
      { number: 1, title: 'Organization Info', desc: 'Basic details about your organization' },
      { number: 2, title: 'Contact Information', desc: 'Who we\'ll be communicating with' },
      { number: 3, title: 'Partnership Details', desc: 'Your goals and aspirations' },
      { number: 4, title: 'Review & Submit', desc: 'Confirm your details' },
    ],

    // Form Fields
    formLabels: {
      orgName: 'Organization Name',
      orgType: 'Organization Type',
      country: 'Country/Region',
      yearsOperating: 'Years in Operation',
      contactName: 'Contact Name',
      contactTitle: 'Job Title',
      email: 'Email Address',
      phone: 'Phone Number',
      partnershipType: 'Desired Partnership Type',
      investmentLevel: 'Investment Level',
      focusArea: 'Area of Focus',
      description: 'Detailed description of your interest (max 250 words)',
      agreeToTerms: 'I agree to partnership terms',
    },

    // Buttons
    nextButton: 'Next',
    backButton: 'Back',
    submitButton: 'Submit Application',
    successTitle: 'Thank You for Your Application!',
    successMsg: 'We\'ll review your request and contact you soon',

    // Contact
    contactTitle: 'Have Questions?',
    contactDesc: 'Our team is ready to help',
    contactEmail: 'partnerships@jhco.org',
    contactPhone: '+962 (6) 5100 0000',
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.orgName) newErrors.orgName = 'Required';
      if (!formData.orgType) newErrors.orgType = 'Required';
      if (!formData.country) newErrors.country = 'Required';
    } else if (step === 2) {
      if (!formData.contactName) newErrors.contactName = 'Required';
      if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email required';
      if (!formData.phone) newErrors.phone = 'Required';
    } else if (step === 3) {
      if (!formData.partnershipType) newErrors.partnershipType = 'Required';
      if (!formData.focusArea) newErrors.focusArea = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      setErrors({ agreeToTerms: 'Required' });
      return;
    }
    setSubmitted(true);
  };

  if (!paramsResolved) return null;

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        background: gradients.royalGold,
        padding: ar ? '120px 32px' : '120px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '300',
            margin: '0 0 24px 0',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '16px',
            fontWeight: '300',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
          <p style={{
            fontSize: '18px',
            marginBottom: '0',
            fontWeight: '300',
            opacity: 0.95,
          }}>
            {content.heroDesc}
          </p>
        </div>
      </section>

      {/* BENEFITS OVERVIEW */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.bgLight,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            color: royalColors.deepRoyal,
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.overviewTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px',
          }}>
            {content.overviewDesc}
          </p>

          <h3 style={{
            fontSize: '28px',
            fontWeight: '400',
            color: royalColors.darkNavy,
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            {content.benefitsTitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {content.benefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '40px 32px',
                backgroundColor: 'white',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.md,
                borderTop: `4px solid ${royalColors.hashemiteGold}`,
                textAlign: 'center',
                transition: 'all 300ms ease',
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.lg;
              }} onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.md;
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {benefit.icon}
                </div>
                <h4 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.richCream,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            color: royalColors.deepRoyal,
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.partnerTypesTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px',
          }}>
            {content.partnerTypesDesc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.partnerTypes.map((type, idx) => (
              <div key={idx} style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.md,
                border: `2px solid ${royalColors.hashemiteGold}`,
              }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>
                  {type.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: royalColors.deepRoyal,
                  marginBottom: '8px',
                }}>
                  {type.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textSecondary,
                  marginBottom: '20px',
                  lineHeight: '1.6',
                }}>
                  {type.description}
                </p>
                <div style={{ marginBottom: '20px', paddingTop: '20px', borderTop: `1px solid ${royalColors.borderSubtle}` }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    marginBottom: '8px',
                  }}>
                    💰 {ar ? 'الاستثمار' : 'Investment'}: {type.investmentMin}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    margin: '0',
                  }}>
                    📅 {ar ? 'الالتزام' : 'Commitment'}: {type.commitment}
                  </p>
                </div>
                <ul style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  paddingLeft: '20px',
                  lineHeight: '1.8',
                }}>
                  {type.benefits.map((benefit, bidx) => (
                    <li key={bidx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT REQUIREMENTS */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.bgLight,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            color: royalColors.deepRoyal,
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.investmentTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            {content.investmentDesc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}>
            {content.investmentLevels.map((inv, idx) => (
              <div key={idx} style={{
                padding: '32px 28px',
                backgroundColor: 'white',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.sm,
                borderLeft: `4px solid ${royalColors.hashemiteGold}`,
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: royalColors.deepRoyal,
                  marginBottom: '8px',
                  margin: '0 0 8px 0',
                }}>
                  {inv.level}
                </h3>
                <p style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: royalColors.charityRed,
                  marginBottom: '20px',
                  margin: '0 0 20px 0',
                }}>
                  {inv.range}
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  paddingLeft: '20px',
                  lineHeight: '1.8',
                }}>
                  {inv.includes.map((item, iidx) => (
                    <li key={iidx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.richCream,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            color: royalColors.deepRoyal,
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.storiesTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            {content.storiesDesc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.stories.map((story, idx) => (
              <div key={idx} style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.md,
                borderTop: `4px solid ${royalColors.hashemiteGold}`,
              }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  margin: '0 0 8px 0',
                }}>
                  {story.type} • {story.year}
                </p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: royalColors.deepRoyal,
                  marginBottom: '16px',
                  margin: '0 0 16px 0',
                }}>
                  {story.partnerName}
                </h3>
                <p style={{
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: royalColors.charityRed,
                  marginBottom: '16px',
                  lineHeight: '1.6',
                }}>
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  ✓ {story.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.bgLight,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            color: royalColors.deepRoyal,
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.timelineTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            {content.timelineDesc}
          </p>

          <div style={{
            position: 'relative',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: royalColors.hashemiteGold,
              transform: 'translateX(-50%)',
            }}></div>

            {/* Timeline Items */}
            {content.timeline.map((item, idx) => (
              <div key={idx} style={{
                marginBottom: '48px',
                position: 'relative',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '32px',
                  alignItems: 'center',
                }}>
                  {idx % 2 === 0 ? (
                    <>
                      <div style={{ textAlign: ar ? 'left' : 'right' }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: royalColors.deepRoyal,
                          margin: '0 0 8px 0',
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: royalColors.textSecondary,
                          margin: '0 0 8px 0',
                          lineHeight: '1.6',
                        }}>
                          {item.desc}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: royalColors.hashemiteGold,
                          margin: '0',
                        }}>
                          {item.days}
                        </p>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: royalColors.hashemiteGold,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '18px',
                          boxShadow: shadows.md,
                        }}>
                          {item.step}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: royalColors.hashemiteGold,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '18px',
                          boxShadow: shadows.md,
                        }}>
                          {item.step}
                        </div>
                      </div>
                      <div style={{ textAlign: ar ? 'right' : 'left' }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: royalColors.deepRoyal,
                          margin: '0 0 8px 0',
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: royalColors.textSecondary,
                          margin: '0 0 8px 0',
                          lineHeight: '1.6',
                        }}>
                          {item.desc}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: royalColors.hashemiteGold,
                          margin: '0',
                        }}>
                          {item.days}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{
        padding: '100px 32px',
        backgroundColor: royalColors.richCream,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {!submitted ? (
            <>
              {/* Form Header */}
              <h2 style={{
                fontSize: '48px',
                fontWeight: '300',
                color: royalColors.deepRoyal,
                marginBottom: '20px',
                textAlign: 'center',
                fontFamily: '"Garamond", "Georgia", serif',
                letterSpacing: '1px',
              }}>
                {ar ? '📋 نموذج التقديم' : '📋 Application Form'}
              </h2>

              {/* Step Indicators */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '60px',
                gap: '16px',
              }}>
                {content.formSteps.map((step) => (
                  <div key={step.number} style={{
                    flex: 1,
                    textAlign: 'center',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: currentStep >= step.number ? royalColors.hashemiteGold : royalColors.borderSubtle,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      color: currentStep >= step.number ? 'white' : royalColors.textSecondary,
                      fontWeight: '700',
                      fontSize: '18px',
                    }}>
                      {step.number}
                    </div>
                    <p style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: currentStep >= step.number ? royalColors.deepRoyal : royalColors.textSecondary,
                      margin: '0 0 4px 0',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      margin: '0',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: borderRadius.lg,
                boxShadow: shadows.lg,
              }}>
                {/* STEP 1: Organization Info */}
                {currentStep === 1 && (
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: royalColors.deepRoyal,
                      marginBottom: '32px',
                    }}>
                      {content.formSteps[0].title}
                    </h3>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.orgName}
                      </label>
                      <input
                        type="text"
                        value={formData.orgName}
                        onChange={(e) => handleInputChange('orgName', e.target.value)}
                        placeholder={ar ? 'أدخل اسم منظمتك' : 'Enter organization name'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.orgName ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.orgName && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.orgName}</p>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.orgType}
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => handleInputChange('orgType', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.orgType ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="">{ar ? 'اختر نوع المنظمة' : 'Select organization type'}</option>
                        <option value="ngo">{ar ? 'منظمة غير حكومية' : 'NGO'}</option>
                        <option value="govt">{ar ? 'حكومة' : 'Government'}</option>
                        <option value="corp">{ar ? 'شركة' : 'Corporation'}</option>
                        <option value="educational">{ar ? 'مؤسسة تعليمية' : 'Educational Institution'}</option>
                        <option value="foundation">{ar ? 'مؤسسة' : 'Foundation'}</option>
                        <option value="other">{ar ? 'أخرى' : 'Other'}</option>
                      </select>
                      {errors.orgType && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.orgType}</p>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.country}
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder={ar ? 'أدخل الدولة أو المنطقة' : 'Enter country or region'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.country ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.country && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.country}</p>}
                    </div>

                    <div style={{ marginBottom: '0' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.yearsOperating}
                      </label>
                      <input
                        type="number"
                        value={formData.yearsOperating}
                        onChange={(e) => handleInputChange('yearsOperating', e.target.value)}
                        placeholder={ar ? 'أدخل عدد السنوات' : 'Enter number of years'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Contact Info */}
                {currentStep === 2 && (
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: royalColors.deepRoyal,
                      marginBottom: '32px',
                    }}>
                      {content.formSteps[1].title}
                    </h3>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.contactName}
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        placeholder={ar ? 'اسم جهة الاتصال الرئيسية' : 'Primary contact name'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.contactName ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.contactName && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.contactName}</p>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.contactTitle}
                      </label>
                      <input
                        type="text"
                        value={formData.contactTitle}
                        onChange={(e) => handleInputChange('contactTitle', e.target.value)}
                        placeholder={ar ? 'المسمى الوظيفي' : 'Job title'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={ar ? 'البريد الإلكتروني' : 'Email address'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.email ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.email && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.email}</p>}
                    </div>

                    <div style={{ marginBottom: '0' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={ar ? 'رقم الهاتف' : 'Phone number'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.phone ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.phone && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.phone}</p>}
                    </div>
                  </div>
                )}

                {/* STEP 3: Partnership Details */}
                {currentStep === 3 && (
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: royalColors.deepRoyal,
                      marginBottom: '32px',
                    }}>
                      {content.formSteps[2].title}
                    </h3>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.partnershipType}
                      </label>
                      <select
                        value={formData.partnershipType}
                        onChange={(e) => handleInputChange('partnershipType', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.partnershipType ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="">{ar ? 'اختر نوع الشراكة' : 'Select partnership type'}</option>
                        <option value="strategic">{ar ? 'شريك استراتيجي ملكي' : 'Royal Strategic Partner'}</option>
                        <option value="institutional">{ar ? 'شريك مؤسسي' : 'Institutional Partner'}</option>
                        <option value="program">{ar ? 'شريك برنامج' : 'Program Partner'}</option>
                        <option value="regional">{ar ? 'شريك إقليمي' : 'Regional Partner'}</option>
                      </select>
                      {errors.partnershipType && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.partnershipType}</p>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.investmentLevel}
                      </label>
                      <select
                        value={formData.investmentLevel}
                        onChange={(e) => handleInputChange('investmentLevel', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="">{ar ? 'اختر مستوى الاستثمار' : 'Select investment level'}</option>
                        <option value="5-25">$5,000 - $25,000</option>
                        <option value="25-100">$25,000 - $100,000</option>
                        <option value="100-500">$100,000 - $500,000</option>
                        <option value="500+">$500,000+</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.focusArea}
                      </label>
                      <select
                        value={formData.focusArea}
                        onChange={(e) => handleInputChange('focusArea', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: errors.focusArea ? `2px solid ${royalColors.charityRed}` : `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      >
                        <option value="">{ar ? 'اختر منطقة التركيز' : 'Select focus area'}</option>
                        <option value="health">{ar ? 'الصحة' : 'Health'}</option>
                        <option value="education">{ar ? 'التعليم' : 'Education'}</option>
                        <option value="livelihood">{ar ? 'سبل العيش' : 'Livelihood'}</option>
                        <option value="humanitarian">{ar ? 'المساعدة الإنسانية' : 'Humanitarian Relief'}</option>
                        <option value="community">{ar ? 'التنمية المجتمعية' : 'Community Development'}</option>
                        <option value="women">{ar ? 'تمكين النساء' : 'Women Empowerment'}</option>
                        <option value="multi">{ar ? 'متعدد القطاعات' : 'Multi-Sector'}</option>
                      </select>
                      {errors.focusArea && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '4px 0 0 0' }}>{errors.focusArea}</p>}
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        marginBottom: '8px',
                      }}>
                        {content.formLabels.description}
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder={ar ? 'أخبرنا عن فهمك وشغفك' : 'Tell us about your vision and passion'}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: `1px solid ${royalColors.borderSubtle}`,
                          borderRadius: borderRadius.md,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          minHeight: '120px',
                          resize: 'vertical',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Review & Submit */}
                {currentStep === 4 && (
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: royalColors.deepRoyal,
                      marginBottom: '32px',
                    }}>
                      {content.formSteps[3].title}
                    </h3>

                    <div style={{
                      backgroundColor: royalColors.richCream,
                      padding: '24px',
                      borderRadius: borderRadius.md,
                      marginBottom: '32px',
                    }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: royalColors.deepRoyal,
                        marginBottom: '16px',
                      }}>
                        {ar ? 'معلومات المنظمة' : 'Organization Information'}
                      </h4>
                      <div style={{ fontSize: '14px', color: royalColors.textSecondary, lineHeight: '2' }}>
                        <p style={{ margin: '0' }}><strong>{ar ? 'الاسم:' : 'Name:'}</strong> {formData.orgName}</p>
                        <p style={{ margin: '0' }}><strong>{ar ? 'النوع:' : 'Type:'}</strong> {formData.orgType}</p>
                        <p style={{ margin: '0' }}><strong>{ar ? 'البلد:' : 'Country:'}</strong> {formData.country}</p>
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: royalColors.richCream,
                      padding: '24px',
                      borderRadius: borderRadius.md,
                      marginBottom: '32px',
                    }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: royalColors.deepRoyal,
                        marginBottom: '16px',
                      }}>
                        {ar ? 'معلومات الاتصال' : 'Contact Information'}
                      </h4>
                      <div style={{ fontSize: '14px', color: royalColors.textSecondary, lineHeight: '2' }}>
                        <p style={{ margin: '0' }}><strong>{ar ? 'الاسم:' : 'Name:'}</strong> {formData.contactName}</p>
                        <p style={{ margin: '0' }}><strong>{ar ? 'البريد الإلكتروني:' : 'Email:'}</strong> {formData.email}</p>
                        <p style={{ margin: '0' }}><strong>{ar ? 'الهاتف:' : 'Phone:'}</strong> {formData.phone}</p>
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: royalColors.richCream,
                      padding: '24px',
                      borderRadius: borderRadius.md,
                      marginBottom: '32px',
                    }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: royalColors.deepRoyal,
                        marginBottom: '16px',
                      }}>
                        {ar ? 'تفاصيل الشراكة' : 'Partnership Details'}
                      </h4>
                      <div style={{ fontSize: '14px', color: royalColors.textSecondary, lineHeight: '2' }}>
                        <p style={{ margin: '0' }}><strong>{ar ? 'النوع:' : 'Type:'}</strong> {formData.partnershipType}</p>
                        <p style={{ margin: '0' }}><strong>{ar ? 'التركيز:' : 'Focus Area:'}</strong> {formData.focusArea}</p>
                      </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '14px',
                        color: royalColors.textSecondary,
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                          style={{
                            marginTop: '2px',
                            width: '18px',
                            height: '18px',
                            cursor: 'pointer',
                          }}
                        />
                        <span>
                          {ar
                            ? 'أوافق على الشروط والأحكام والسياسات المتعلقة بالشراكة'
                            : 'I agree to the partnership terms, conditions, and policies'
                          }
                        </span>
                      </label>
                      {errors.agreeToTerms && <p style={{ color: royalColors.charityRed, fontSize: '12px', margin: '8px 0 0 0' }}>{errors.agreeToTerms}</p>}
                    </div>
                  </div>
                )}

                {/* Form Navigation */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: currentStep === 1 ? 'flex-end' : 'space-between',
                  marginTop: '40px',
                  paddingTop: '32px',
                  borderTop: `1px solid ${royalColors.borderSubtle}`,
                }}>
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      style={{
                        padding: '12px 32px',
                        backgroundColor: 'transparent',
                        color: royalColors.deepRoyal,
                        border: `2px solid ${royalColors.deepRoyal}`,
                        borderRadius: borderRadius.md,
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.deepRoyal;
                        (e.currentTarget as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = royalColors.deepRoyal;
                      }}
                    >
                      {content.backButton}
                    </button>
                  )}

                  {currentStep < 4 ? (
                    <button
                      onClick={handleNext}
                      style={{
                        padding: '12px 32px',
                        backgroundColor: royalColors.hashemiteGold,
                        color: 'white',
                        border: 'none',
                        borderRadius: borderRadius.md,
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.goldDark;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.hashemiteGold;
                      }}
                    >
                      {content.nextButton}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      style={{
                        padding: '12px 32px',
                        backgroundColor: royalColors.hashemiteGold,
                        color: 'white',
                        border: 'none',
                        borderRadius: borderRadius.md,
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.goldDark;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.hashemiteGold;
                      }}
                    >
                      {content.submitButton}
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* SUCCESS MESSAGE */
            <div style={{
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: 'white',
              borderRadius: borderRadius.lg,
              boxShadow: shadows.lg,
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '300',
                color: royalColors.deepRoyal,
                marginBottom: '16px',
                fontFamily: '"Garamond", "Georgia", serif',
              }}>
                {content.successTitle}
              </h2>
              <p style={{
                fontSize: '18px',
                color: royalColors.textSecondary,
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                {content.successMsg}
              </p>
              <Link href={base} style={{
                display: 'inline-block',
                padding: '14px 40px',
                backgroundColor: royalColors.deepRoyal,
                color: 'white',
                textDecoration: 'none',
                borderRadius: borderRadius.md,
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 200ms ease',
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.darkNavy;
              }} onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.deepRoyal;
              }}>
                {ar ? 'العودة إلى الرئيسية' : 'Return Home'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: gradients.darkFormal,
        color: 'white',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '300',
            marginBottom: '16px',
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '1px',
          }}>
            {content.contactTitle}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.contactDesc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                opacity: 0.8,
              }}>
                {ar ? 'البريد الإلكتروني' : 'Email'}
              </p>
              <p style={{
                fontSize: '18px',
                margin: '0',
              }}>
                {content.contactEmail}
              </p>
            </div>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                opacity: 0.8,
              }}>
                {ar ? 'الهاتف' : 'Phone'}
              </p>
              <p style={{
                fontSize: '18px',
                margin: '0',
              }}>
                {content.contactPhone}
              </p>
            </div>
          </div>

          <Link href={`${base}/contact`} style={{
            display: 'inline-block',
            padding: '14px 40px',
            backgroundColor: royalColors.hashemiteGold,
            color: 'white',
            textDecoration: 'none',
            borderRadius: borderRadius.md,
            fontWeight: '600',
            fontSize: '16px',
            transition: 'all 200ms ease',
          }} onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.goldDark;
          }} onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = royalColors.hashemiteGold;
          }}>
            {ar ? 'نموذج الاتصال' : 'Contact Form'}
          </Link>
        </div>
      </section>
    </>
  );
}
