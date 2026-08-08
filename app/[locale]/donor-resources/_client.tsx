'use client';

import { useState, useMemo } from 'react';

interface Resource {
  id: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  type: 'guide' | 'report' | 'brochure' | 'transparency' | 'research' | 'video' | 'webinar';
  year?: number;
  fileSize?: string;
  duration?: string; // for videos/webinars
  date: string;
  icon: string;
}

const resources: Resource[] = [
  // Guides
  {
    id: 'guide-1',
    title_en: 'Donor Handbook: Getting Started',
    title_ar: 'دليل المتبرع: البدء',
    description_en: 'Comprehensive guide to donation options, tax deductions, and donor benefits',
    description_ar: 'دليل شامل حول خيارات التبرع والإعفاءات الضريبية وفوائد المتبرع',
    type: 'guide',
    fileSize: '2.5 MB',
    date: '2024-06-15',
    icon: '📘',
  },
  {
    id: 'guide-2',
    title_en: 'Impact Tracking Guide',
    title_ar: 'دليل تتبع التأثير',
    description_en: 'Learn how to monitor and measure the real-world impact of your donations',
    description_ar: 'تعرف على كيفية مراقبة وقياس التأثير الحقيقي لتبرعاتك',
    type: 'guide',
    fileSize: '1.8 MB',
    date: '2024-05-20',
    icon: '📊',
  },
  {
    id: 'guide-3',
    title_en: 'Corporate Giving Strategy',
    title_ar: 'استراتيجية التبرع المؤسسي',
    description_en: 'Guide for corporations and organizations setting up giving programs',
    description_ar: 'دليل للشركات والمنظمات لإعداد برامج التبرع',
    type: 'guide',
    fileSize: '3.2 MB',
    date: '2024-06-01',
    icon: '🏢',
  },
  {
    id: 'guide-4',
    title_en: 'Legacy Planning Guide',
    title_ar: 'دليل التخطيط الموروث',
    description_en: 'Plan lasting charitable gifts and endowments for future generations',
    description_ar: 'خطط هدايا خيرية دائمة ووقفية للأجيال القادمة',
    type: 'guide',
    fileSize: '2.1 MB',
    date: '2024-04-10',
    icon: '🏛️',
  },

  // Annual Reports
  {
    id: 'report-2024',
    title_en: 'Annual Impact Report 2024',
    title_ar: 'تقرير الأثر السنوي 2024',
    description_en: 'Comprehensive overview of 2024 programs, impact metrics, and financial summary',
    description_ar: 'نظرة عامة شاملة على برامج 2024 ومؤشرات التأثير والملخص المالي',
    type: 'report',
    year: 2024,
    fileSize: '4.5 MB',
    date: '2025-02-15',
    icon: '📈',
  },
  {
    id: 'report-2023',
    title_en: 'Annual Impact Report 2023',
    title_ar: 'تقرير الأثر السنوي 2023',
    description_en: 'Year-end comprehensive report covering all major initiatives and outcomes',
    description_ar: 'تقرير نهاية السنة الشامل يغطي جميع المبادرات الرئيسية والنتائج',
    type: 'report',
    year: 2023,
    fileSize: '4.2 MB',
    date: '2024-02-10',
    icon: '📈',
  },
  {
    id: 'report-2022',
    title_en: 'Annual Impact Report 2022',
    title_ar: 'تقرير الأثر السنوي 2022',
    description_en: 'Historical impact data and program outcomes from 2022',
    description_ar: 'بيانات التأثير التاريخية ونتائج البرامج من 2022',
    type: 'report',
    year: 2022,
    fileSize: '3.8 MB',
    date: '2023-02-08',
    icon: '📈',
  },

  // Brochures
  {
    id: 'brochure-education',
    title_en: 'Education Program Brochure',
    title_ar: 'كتيب برنامج التعليم',
    description_en: 'Detailed overview of education initiatives serving 250,000+ students',
    description_ar: 'نظرة عامة مفصلة على مبادرات التعليم التي تخدم 250,000+ طالب',
    type: 'brochure',
    fileSize: '3.1 MB',
    date: '2024-05-10',
    icon: '🎓',
  },
  {
    id: 'brochure-health',
    title_en: 'Healthcare Program Brochure',
    title_ar: 'كتيب برنامج الصحة',
    description_en: 'Healthcare services reaching 1 million people across the region',
    description_ar: 'خدمات الرعاية الصحية التي تصل إلى مليون شخص عبر المنطقة',
    type: 'brochure',
    fileSize: '2.9 MB',
    date: '2024-06-05',
    icon: '⚕️',
  },
  {
    id: 'brochure-food',
    title_en: 'Food Security Program Brochure',
    title_ar: 'كتيب برنامج الأمن الغذائي',
    description_en: 'Food assistance programs serving 500,000+ beneficiaries annually',
    description_ar: 'برامج المساعدة الغذائية التي تخدم 500,000+ مستفيد سنوياً',
    type: 'brochure',
    fileSize: '2.6 MB',
    date: '2024-05-20',
    icon: '🍽️',
  },
  {
    id: 'brochure-sustainable',
    title_en: 'Sustainable Development Brochure',
    title_ar: 'كتيب التنمية المستدامة',
    description_en: 'Long-term development projects in 15 countries',
    description_ar: 'مشاريع التنمية طويلة الأجل في 15 دولة',
    type: 'brochure',
    fileSize: '3.4 MB',
    date: '2024-04-15',
    icon: '🌱',
  },

  // Financial Transparency
  {
    id: 'transparency-2024-q2',
    title_en: 'Q2 2024 Financial Statement',
    title_ar: 'بيان المالية Q2 2024',
    description_en: 'Quarterly financial transparency report and fund allocation breakdown',
    description_ar: 'تقرير الشفافية المالية الفصلي وتفصيل تخصيص الأموال',
    type: 'transparency',
    date: '2024-07-15',
    fileSize: '1.5 MB',
    icon: '💰',
  },
  {
    id: 'transparency-2024-q1',
    title_en: 'Q1 2024 Financial Statement',
    title_ar: 'بيان المالية Q1 2024',
    description_en: 'First quarter financial transparency and expense audit',
    description_ar: 'الشفافية المالية للربع الأول والتدقيق في المصروفات',
    type: 'transparency',
    date: '2024-04-10',
    fileSize: '1.4 MB',
    icon: '💰',
  },
  {
    id: 'transparency-audit-2023',
    title_en: '2023 Independent Audit Report',
    title_ar: 'تقرير التدقيق المستقل 2023',
    description_en: 'Third-party audit of financial statements and fund management',
    description_ar: 'تدقيق طرف ثالث للبيانات المالية وإدارة الأموال',
    type: 'transparency',
    date: '2024-03-20',
    fileSize: '2.8 MB',
    icon: '✓',
  },
  {
    id: 'transparency-funding-sources',
    title_en: 'Funding Sources & Allocation',
    title_ar: 'مصادر التمويل والتخصيص',
    description_en: 'Complete breakdown of where funds come from and how they are used',
    description_ar: 'تفصيل كامل لمصادر الأموال وكيفية استخدامها',
    type: 'transparency',
    date: '2024-06-01',
    fileSize: '1.2 MB',
    icon: '📊',
  },

  // Research Papers
  {
    id: 'research-education-impact',
    title_en: 'Education Impact Research Study',
    title_ar: 'دراسة البحث عن تأثير التعليم',
    description_en: 'Peer-reviewed research on long-term education program outcomes',
    description_ar: 'بحث مراجع من النظراء حول النتائج طويلة الأجل لبرامج التعليم',
    type: 'research',
    date: '2024-03-15',
    fileSize: '2.5 MB',
    icon: '🔬',
  },
  {
    id: 'research-poverty-reduction',
    title_en: 'Poverty Reduction Analysis',
    title_ar: 'تحليل تقليل الفقر',
    description_en: 'Evidence-based research on poverty alleviation effectiveness',
    description_ar: 'بحث قائم على الأدلة حول فعالية تخفيف الفقر',
    type: 'research',
    date: '2024-02-20',
    fileSize: '3.2 MB',
    icon: '📋',
  },
  {
    id: 'research-health-outcomes',
    title_en: 'Healthcare Outcomes Study',
    title_ar: 'دراسة نتائج الرعاية الصحية',
    description_en: 'Research on health interventions and measurable improvements',
    description_ar: 'بحث عن التدخلات الصحية والتحسينات القابلة للقياس',
    type: 'research',
    date: '2024-01-10',
    fileSize: '2.9 MB',
    icon: '🏥',
  },
  {
    id: 'research-sustainability',
    title_en: 'Sustainability Framework Study',
    title_ar: 'دراسة إطار الاستدامة',
    description_en: 'Long-term sustainability models for development projects',
    description_ar: 'نماذج الاستدامة طويلة الأجل لمشاريع التنمية',
    type: 'research',
    date: '2023-12-05',
    fileSize: '3.5 MB',
    icon: '🌍',
  },

  // Video Library
  {
    id: 'video-impact-stories',
    title_en: 'Beneficiary Impact Stories (Video)',
    title_ar: 'قصص تأثير المستفيدين (فيديو)',
    description_en: 'Real stories from people whose lives have been changed by JHCO',
    description_ar: 'قصص حقيقية من الأشخاص الذين تغيرت حياتهم بفضل الهيئة',
    type: 'video',
    duration: '45 min',
    date: '2024-06-10',
    icon: '🎬',
  },
  {
    id: 'video-project-tours',
    title_en: 'Project Site Tours (Video Series)',
    title_ar: 'جولات موقع المشروع (سلسلة فيديو)',
    description_en: 'Virtual tours of active JHCO projects around the region',
    description_ar: 'جولات افتراضية للمشاريع النشطة للهيئة حول المنطقة',
    type: 'video',
    duration: '120 min',
    date: '2024-05-15',
    icon: '📹',
  },
  {
    id: 'video-donor-testimonials',
    title_en: 'Donor Testimonials (Video)',
    title_ar: 'شهادات المتبرعين (فيديو)',
    description_en: 'Inspiring testimonials from donors sharing their impact journey',
    description_ar: 'شهادات ملهمة من المتبرعين يشاركون رحلة تأثيرهم',
    type: 'video',
    duration: '30 min',
    date: '2024-04-20',
    icon: '💬',
  },
  {
    id: 'video-program-overview',
    title_en: 'JHCO Programs Overview (Video)',
    title_ar: 'نظرة عامة على برامج الهيئة (فيديو)',
    description_en: 'Comprehensive overview of all major JHCO programs and initiatives',
    description_ar: 'نظرة عامة شاملة على جميع برامج الهيئة ومبادراتها الرئيسية',
    type: 'video',
    duration: '25 min',
    date: '2024-06-01',
    icon: '🎥',
  },

  // Webinar Recordings
  {
    id: 'webinar-tax-planning',
    title_en: 'Tax Planning for Donors (Webinar)',
    title_ar: 'التخطيط الضريبي للمتبرعين (ندوة)',
    description_en: 'Expert advice on maximizing tax benefits from charitable donations',
    description_ar: 'نصائح خبير حول تعظيم الفوائد الضريبية من التبرعات الخيرية',
    type: 'webinar',
    duration: '60 min',
    date: '2024-05-25',
    icon: '🎓',
  },
  {
    id: 'webinar-impact-measurement',
    title_en: 'Measuring Donation Impact (Webinar)',
    title_ar: 'قياس تأثير التبرع (ندوة)',
    description_en: 'How to evaluate and measure the real impact of your giving',
    description_ar: 'كيفية تقييم وقياس التأثير الحقيقي لتبرعاتك',
    type: 'webinar',
    duration: '45 min',
    date: '2024-04-30',
    icon: '📊',
  },
  {
    id: 'webinar-corporate-giving',
    title_en: 'Corporate Social Responsibility (Webinar)',
    title_ar: 'المسؤولية الاجتماعية للشركات (ندوة)',
    description_en: 'Building effective CSR programs with JHCO',
    description_ar: 'بناء برامج المسؤولية الاجتماعية الفعالة مع الهيئة',
    type: 'webinar',
    duration: '75 min',
    date: '2024-03-15',
    icon: '🏢',
  },
  {
    id: 'webinar-sustainable-giving',
    title_en: 'Sustainable Giving Strategies (Webinar)',
    title_ar: 'استراتيجيات التبرع المستدام (ندوة)',
    description_en: 'Long-term giving strategies for lasting impact',
    description_ar: 'استراتيجيات التبرع طويلة الأجل للتأثير الدائم',
    type: 'webinar',
    duration: '50 min',
    date: '2024-02-10',
    icon: '🌱',
  },
];

const typeLabels: Record<string, { en: string; ar: string; icon: string }> = {
  guide: { en: 'Guides', ar: 'الأدلة', icon: '📘' },
  report: { en: 'Annual Reports', ar: 'التقارير السنوية', icon: '📈' },
  brochure: { en: 'Program Brochures', ar: 'كتيبات البرامج', icon: '📄' },
  transparency: { en: 'Financial Transparency', ar: 'الشفافية المالية', icon: '💰' },
  research: { en: 'Research Papers', ar: 'الأوراق البحثية', icon: '🔬' },
  video: { en: 'Video Library', ar: 'مكتبة الفيديو', icon: '🎬' },
  webinar: { en: 'Webinar Recordings', ar: 'تسجيلات الندوات', icon: '🎓' },
};

export default function DonorResourcesPage({
  params,
}: {
  params: { locale: string };
}) {
  const ar = params.locale === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const title = ar ? resource.title_ar : resource.title_en;
      const description = ar ? resource.description_ar : resource.description_en;
      const matchesSearch =
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || resource.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType, ar]);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
          padding: '100px 32px',
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
              letterSpacing: '1px',
              color: '#d4af37',
            }}
          >
            {ar ? 'موارد المتبرعين' : 'Donor Resources'}
          </h1>
          <p
            style={{
              fontSize: '18px',
              marginBottom: '0',
              lineHeight: '1.6',
              color: '#f0f0f0',
            }}
          >
            {ar
              ? 'أدلة قابلة للتحميل وتقارير التأثير وشفافية مالية كاملة'
              : 'Downloadable guides, impact reports, and complete financial transparency'}
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section
        style={{
          padding: '60px 32px',
          backgroundColor: '#f5f1e8',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '700',
              margin: '0 0 40px 0',
              color: '#4a148c',
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
            }}
          >
            {ar ? 'ابحث عن المورد' : 'Find Resources'}
          </h2>

          {/* Search Bar */}
          <div style={{ marginBottom: '40px' }}>
            <input
              type="text"
              placeholder={
                ar
                  ? 'ابحث عن الأدلة والتقارير والفيديوهات...'
                  : 'Search guides, reports, videos...'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '600px',
                display: 'block',
                margin: '0 auto',
                padding: '16px 20px',
                fontSize: '16px',
                border: '2px solid #d4af37',
                borderRadius: '2px',
                fontFamily: 'inherit',
                backgroundColor: '#ffffff',
                color: '#001a4d',
                direction: ar ? 'rtl' : 'ltr',
              }}
            />
          </div>

          {/* Type Filter */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '0',
            }}
          >
            <button
              onClick={() => setSelectedType(null)}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: !selectedType ? '#d4af37' : '#ffffff',
                color: !selectedType ? '#001a4d' : '#4a148c',
                border: `2px solid ${!selectedType ? '#d4af37' : '#d4af37'}`,
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                textTransform: 'capitalize',
              }}
            >
              {ar ? 'الكل' : 'All'}
            </button>
            {Object.entries(typeLabels).map(([typeKey, label]) => (
              <button
                key={typeKey}
                onClick={() =>
                  setSelectedType(selectedType === typeKey ? null : typeKey)
                }
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  backgroundColor:
                    selectedType === typeKey ? '#d4af37' : '#ffffff',
                  color: selectedType === typeKey ? '#001a4d' : '#4a148c',
                  border: `2px solid ${
                    selectedType === typeKey ? '#d4af37' : '#d4af37'
                  }`,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textTransform: 'capitalize',
                  whiteSpace: 'nowrap',
                }}
              >
                {label.icon} {ar ? label.ar : label.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section
        style={{
          padding: '80px 32px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {filteredResources.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '32px',
              }}
            >
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  style={{
                    backgroundColor: '#faf8f5',
                    border: '2px solid #e8e4db',
                    borderRadius: '4px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 200ms ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#d4af37';
                    el.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.15)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#e8e4db';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon & Type */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '32px' }}>{resource.icon}</span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#d4af37',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {ar
                        ? typeLabels[resource.type].ar
                        : typeLabels[resource.type].en}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      margin: '0 0 12px 0',
                      color: '#001a4d',
                      fontFamily: 'Georgia, serif',
                      lineHeight: '1.4',
                      flex: 1,
                    }}
                  >
                    {ar ? resource.title_ar : resource.title_en}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#5a5a6a',
                      lineHeight: '1.6',
                      margin: '0 0 16px 0',
                      flex: 1,
                    }}
                  >
                    {ar ? resource.description_ar : resource.description_en}
                  </p>

                  {/* Meta Info */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '16px',
                      flexWrap: 'wrap',
                      marginBottom: '16px',
                      fontSize: '13px',
                      color: '#7a7a8a',
                    }}
                  >
                    {resource.year && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📅 {resource.year}
                      </span>
                    )}
                    {resource.fileSize && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📦 {resource.fileSize}
                      </span>
                    )}
                    {resource.duration && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        ⏱️ {resource.duration}
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#a0a0b0',
                      margin: '0 0 20px 0',
                    }}
                  >
                    {new Date(resource.date).toLocaleDateString(ar ? 'ar-EG' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>

                  {/* Download Button */}
                  <a
                    href={`#download-${resource.id}`}
                    style={{
                      display: 'inline-block',
                      padding: '12px 24px',
                      backgroundColor: '#d4af37',
                      color: '#001a4d',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '13px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                      textAlign: 'center',
                      transition: 'all 200ms ease',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = '#b8920f';
                      el.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = '#d4af37';
                      el.style.transform = 'scale(1)';
                    }}
                  >
                    {resource.type === 'video' || resource.type === 'webinar'
                      ? ar
                        ? '▶️ شاهد الآن'
                        : '▶️ Watch Now'
                      : ar
                      ? '⬇️ تحميل PDF'
                      : '⬇️ Download PDF'}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 32px',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  color: '#5a5a6a',
                  margin: '0',
                  lineHeight: '1.6',
                }}
              >
                {ar
                  ? 'لم يتم العثور على موارد مطابقة لبحثك'
                  : 'No resources match your search'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      {filteredResources.length > 0 && (
        <section
          style={{
            padding: '32px 32px',
            backgroundColor: '#f5f1e8',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: '#5a5a6a',
              margin: '0',
            }}
          >
            {ar
              ? `عرض ${filteredResources.length} من ${resources.length} مورد`
              : `Showing ${filteredResources.length} of ${resources.length} resources`}
          </p>
        </section>
      )}

      {/* How to Use Section */}
      <section
        style={{
          padding: '80px 32px',
          backgroundColor: '#faf8f5',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '700',
              margin: '0 0 48px 0',
              color: '#4a148c',
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
            }}
          >
            {ar ? 'كيفية استخدام هذه الموارد' : 'How to Use These Resources'}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                title_en: 'Tax Planning',
                title_ar: 'التخطيط الضريبي',
                desc_en: 'Use tax planning guides to understand deductions and optimize giving',
                desc_ar: 'استخدم أدلة التخطيط الضريبي لفهم الخصومات وتحسين التبرع',
                icon: '📋',
              },
              {
                title_en: 'Track Impact',
                title_ar: 'تتبع التأثير',
                desc_en: 'Review annual reports and impact research to measure real outcomes',
                desc_ar: 'راجع التقارير السنوية والبحث عن التأثير لقياس النتائج الحقيقية',
                icon: '📊',
              },
              {
                title_en: 'Learn Programs',
                title_ar: 'تعرف على البرامج',
                desc_en: 'Read program brochures and watch videos to understand initiatives',
                desc_ar: 'اقرأ كتيبات البرامج وشاهد الفيديوهات لفهم المبادرات',
                icon: '🎓',
              },
              {
                title_en: 'Stay Informed',
                title_ar: 'ابق على اطلاع',
                desc_en: 'Attend webinars and access financial transparency documents',
                desc_ar: 'احضر الندوات وادخل إلى وثائق الشفافية المالية',
                icon: '🎬',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e4db',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '16px',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    margin: '0 0 12px 0',
                    color: '#001a4d',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {ar ? item.title_ar : item.title_en}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#5a5a6a',
                    margin: '0',
                    lineHeight: '1.6',
                  }}
                >
                  {ar ? item.desc_ar : item.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #001a4d 0%, #2b2d42 100%)',
          padding: '64px 32px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '24px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.5px',
              color: '#d4af37',
            }}
          >
            {ar ? 'هل تحتاج إلى المزيد من المساعدة؟' : 'Need More Help?'}
          </h2>
          <p
            style={{
              fontSize: '16px',
              marginBottom: '32px',
              color: '#f0f0f0',
              lineHeight: '1.6',
            }}
          >
            {ar
              ? 'اتصل بفريق الدعم الخاص بنا للأسئلة أو لطلب موارد مخصصة'
              : 'Contact our support team for questions or to request customized resources'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={ar ? '/ar/contact' : '/en/contact'}
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: '#d4af37',
                color: '#001a4d',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#b8920f';
                el.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#d4af37';
                el.style.transform = 'scale(1)';
              }}
            >
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </a>
            <a
              href="mailto:donor-resources@jhco.org"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: 'transparent',
                color: '#d4af37',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                border: '2px solid #d4af37',
                borderRadius: '2px',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'transparent';
              }}
            >
              {ar ? 'ابعث بريد' : 'Email Us'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
