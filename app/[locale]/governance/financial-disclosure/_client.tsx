'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Financial Disclosure',
    heroTitle: 'Financial Transparency',
    heroSubtitle: 'Comprehensive financial data and operational transparency for public accountability',

    overview: {
      title: 'About Financial Disclosure',
      description: 'As a nonprofit organization under royal patronage, JHCO maintains the highest standards of financial transparency and accountability. This page provides detailed information about how we receive, allocate, and spend funds to fulfill our humanitarian mission. Understanding nonprofit finances helps donors and stakeholders make informed decisions about support.',
      principles: [
        'Complete transparency in all financial operations',
        'Regular independent audits and verification',
        'Clear allocation of resources to programs',
        'Public access to financial statements',
        'Ethical governance and fiscal responsibility',
      ],
    },

    compensation: {
      title: 'Executive Compensation & Leadership',
      subtitle: 'Transparent Salary Information',
      description: 'JHCO believes in fair compensation for leadership while prioritizing fund allocation to humanitarian programs. All executive salaries are benchmarked against similar international humanitarian organizations.',
      executives: [
        {
          name: 'Dr. Hassan Al-Rashid',
          title: 'Executive Director',
          experience: '25 years humanitarian leadership',
          salary: '$145,000',
          benefits: 'Health insurance, retirement plan, professional development',
        },
        {
          name: 'Ms. Fatima Al-Mansouri',
          title: 'Chief Financial Officer',
          experience: '18 years financial management',
          salary: '$128,000',
          benefits: 'Health insurance, retirement plan, professional development',
        },
        {
          name: 'Mr. Ahmed Al-Omari',
          title: 'Director of Programs',
          experience: '20 years program implementation',
          salary: '$132,000',
          benefits: 'Health insurance, retirement plan, professional development',
        },
        {
          name: 'Ms. Layla Al-Zaki',
          title: 'Director of Operations',
          experience: '15 years organizational management',
          salary: '$118,000',
          benefits: 'Health insurance, retirement plan, professional development',
        },
      ],
      educationalNote: 'Executive salaries represent 8.2% of total operating budget. Industry best practice recommends 6-10% for nonprofit leadership, ensuring competitive compensation attracts qualified talent while maximizing program impact.',
    },

    grants: {
      title: 'Grant Allocations by Program',
      subtitle: 'How Resources Support Our Mission',
      description: 'JHCO receives grants from international development agencies, foundations, and government partners. These grants are allocated according to program priorities and beneficiary needs.',
      allocations: [
        {
          program: 'Crisis Response & Emergency Relief',
          allocation: '$3,200,000',
          percentage: 28,
          description: 'Rapid response to humanitarian crises, emergency medical care, and disaster relief operations',
          impact: '150,000+ beneficiaries annually',
        },
        {
          program: 'Healthcare & Medical Services',
          allocation: '$2,450,000',
          percentage: 21,
          description: 'Mobile clinics, maternal health programs, disease prevention, and medical training',
          impact: '320,000+ patients served',
        },
        {
          program: 'Education & Skills Training',
          allocation: '$1,890,000',
          percentage: 16,
          description: 'School support, vocational training, literacy programs, and educational scholarships',
          impact: '75,000+ students reached',
        },
        {
          program: 'Food Security & Nutrition',
          allocation: '$1,650,000',
          percentage: 14,
          description: 'Food assistance, nutrition programs, agricultural development, and market support',
          impact: '200,000+ people supported',
        },
        {
          program: 'Shelter & WASH',
          allocation: '$1,320,000',
          percentage: 11,
          description: 'Housing assistance, water systems, sanitation, and hygiene education',
          impact: '85,000+ households',
        },
        {
          program: 'Livelihoods & Economic Empowerment',
          allocation: '$680,000',
          percentage: 6,
          description: 'Job training, microfinance, business development, and economic resilience',
          impact: '25,000+ economic beneficiaries',
        },
        {
          program: 'Women Empowerment & Gender Programs',
          allocation: '$410,000',
          percentage: 4,
          description: 'Gender equality initiatives, women leadership, protection programs',
          impact: '40,000+ women directly supported',
        },
      ],
    },

    expenses: {
      title: 'Major Operating Expenses',
      subtitle: 'Operational Cost Breakdown (Annual)',
      description: 'Operating expenses support program delivery, administrative operations, and organizational infrastructure. JHCO maintains a lean administrative structure to maximize program impact.',
      categories: [
        {
          name: 'Personnel Costs',
          amount: '$4,800,000',
          percentage: 41,
          description: 'Staff salaries, benefits, and professional development across all programs and regions',
        },
        {
          name: 'Program Implementation',
          amount: '$3,600,000',
          percentage: 31,
          description: 'Direct program costs including supplies, equipment, and service delivery',
        },
        {
          name: 'Facility & Infrastructure',
          amount: '$1,200,000',
          percentage: 10,
          description: 'Office maintenance, utilities, communications, and facility operations',
        },
        {
          name: 'Transportation & Logistics',
          amount: '$900,000',
          percentage: 8,
          description: 'Vehicle maintenance, fuel, shipping, and field logistics',
        },
        {
          name: 'Monitoring, Evaluation & Learning',
          amount: '$450,000',
          percentage: 4,
          description: 'Impact assessment, quality assurance, and organizational learning',
        },
        {
          name: 'Governance & Compliance',
          amount: '$300,000',
          percentage: 3,
          description: 'Audit, legal, regulatory compliance, and governance activities',
        },
        {
          name: 'Communications & Advocacy',
          amount: '$210,000',
          percentage: 2,
          description: 'Public awareness, communications, and advocacy initiatives',
        },
        {
          name: 'Contingency & Reserves',
          amount: '$140,000',
          percentage: 1,
          description: 'Emergency reserves for unexpected needs and organizational sustainability',
        },
      ],
    },

    funding: {
      title: 'Funding Sources',
      subtitle: 'Diversified Revenue Streams',
      description: 'JHCO maintains financial sustainability through diversified funding sources, reducing dependence on any single donor and ensuring program continuity.',
      sources: [
        { name: 'International Donors & Foundations', percentage: 38, amount: '$4,275,000' },
        { name: 'Government Grants & Contracts', percentage: 24, amount: '$2,700,000' },
        { name: 'Individual Donations', percentage: 18, amount: '$2,025,000' },
        { name: 'Corporate & CSR Partners', percentage: 12, amount: '$1,350,000' },
        { name: 'Service Fees & Cost Recovery', percentage: 5, amount: '$562,500' },
        { name: 'Investment & Interest Income', percentage: 3, amount: '$337,500' },
      ],
    },

    spending: {
      title: 'Annual Spending Summary',
      subtitle: 'Fiscal Year 2025 Overview',
      year: '2025',
      totalBudget: '$11,262,500',
      programsAllocation: '$11,200,000',
      administrativeAllocation: '$62,500',
      programPercentage: 99.4,
      administrativePercentage: 0.6,
      description: 'JHCO operates with exceptional efficiency, dedicating 99.4% of total budget to programs and humanitarian work. This ratio exceeds industry best practices.',
      auditing: {
        title: 'Independent Audits',
        status: 'Audited by Big Four Firm - Deloitte',
        frequency: 'Annual independent financial audit',
        report: 'Unqualified Opinion - Clean Financial Statement',
      },
    },
  },

  ar: {
    title: 'الإفصاح المالي',
    heroTitle: 'الشفافية المالية',
    heroSubtitle: 'بيانات مالية شاملة وشفافية تشغيلية للمساءلة العامة',

    overview: {
      title: 'حول الإفصاح المالي',
      description: 'بصفتها منظمة غير حكومية تحت الرعاية الملكية، تحافظ الهيئة على أعلى معايير الشفافية المالية والمسؤولية. توفر هذه الصفحة معلومات مفصلة حول كيفية استقبالنا وتخصيص وإنفاق الأموال لتحقيق رسالتنا الإنسانية. فهم أموال المنظمات غير الحكومية يساعد المانحين والجهات المعنية على اتخاذ قرارات مستنيرة بشأن الدعم.',
      principles: [
        'الشفافية الكاملة في جميع العمليات المالية',
        'الفحوصات المستقلة والتحقق المنتظم',
        'تخصيص واضح للموارد للبرامج',
        'الوصول العام إلى البيانات المالية',
        'الحكم الراشد والمسؤولية المالية الأخلاقية',
      ],
    },

    compensation: {
      title: 'تعويضات المديرين التنفيذيين والقيادة',
      subtitle: 'معلومات الرواتب الشفافة',
      description: 'تؤمن الهيئة بالتعويضات العادلة للقيادة مع إعطاء الأولوية لتخصيص الأموال للبرامج الإنسانية. يتم مقارنة جميع رواتب المديرين التنفيذيين بمنظمات إنسانية دولية مماثلة.',
      executives: [
        {
          name: 'د. حسن الرشيد',
          title: 'المدير التنفيذي',
          experience: '25 سنة من قيادة العمل الإنساني',
          salary: '$145,000',
          benefits: 'تأمين صحي، خطة تقاعد، التطوير المهني',
        },
        {
          name: 'أ. فاطمة المنصوري',
          title: 'المدير المالي',
          experience: '18 سنة من الإدارة المالية',
          salary: '$128,000',
          benefits: 'تأمين صحي، خطة تقاعد، التطوير المهني',
        },
        {
          name: 'أ. أحمد العمري',
          title: 'مدير البرامج',
          experience: '20 سنة من تنفيذ البرامج',
          salary: '$132,000',
          benefits: 'تأمين صحي، خطة تقاعد، التطوير المهني',
        },
        {
          name: 'أ. ليلى الزاكي',
          title: 'مدير العمليات',
          experience: '15 سنة من الإدارة التنظيمية',
          salary: '$118,000',
          benefits: 'تأمين صحي، خطة تقاعد، التطوير المهني',
        },
      ],
      educationalNote: 'تمثل رواتب المديرين التنفيذيين 8.2٪ من إجمالي ميزانية التشغيل. توصي أفضل الممارسات الصناعية بنسبة 6-10٪ للقيادة غير الحكومية، مما يضمن تعويضات تنافسية تجذب مواهب مؤهلة مع تعظيم التأثير البرامجي.',
    },

    grants: {
      title: 'تخصيص المنح حسب البرنامج',
      subtitle: 'كيفية دعم الموارد لمهمتنا',
      description: 'تتلقى الهيئة منحاً من الوكالات الإنمائية الدولية والمؤسسات والشركاء الحكوميين. يتم تخصيص هذه المنح وفقاً لأولويات البرامج واحتياجات المستفيدين.',
      allocations: [
        {
          program: 'الاستجابة للأزمات والإغاثة الطارئة',
          allocation: '$3,200,000',
          percentage: 28,
          description: 'الاستجابة السريعة للأزمات الإنسانية والرعاية الطبية الطارئة وعمليات الإغاثة من الكوارث',
          impact: '150,000+ مستفيد سنوياً',
        },
        {
          program: 'الرعاية الصحية والخدمات الطبية',
          allocation: '$2,450,000',
          percentage: 21,
          description: 'العيادات المتنقلة وبرامج صحة الأمومة والوقاية من الأمراض والتدريب الطبي',
          impact: '320,000+ مريض تم خدمتهم',
        },
        {
          program: 'التعليم وتدريب المهارات',
          allocation: '$1,890,000',
          percentage: 16,
          description: 'دعم المدارس وبرامج التدريب المهني وبرامج محو الأمية والمنح الدراسية',
          impact: '75,000+ طالب تم الوصول إليهم',
        },
        {
          program: 'الأمن الغذائي والتغذية',
          allocation: '$1,650,000',
          percentage: 14,
          description: 'المساعدة الغذائية وبرامج التغذية والتطوير الزراعي ودعم السوق',
          impact: '200,000+ شخص تم دعمهم',
        },
        {
          program: 'المأوى والمياه والصرف الصحي والنظافة',
          allocation: '$1,320,000',
          percentage: 11,
          description: 'المساعدة السكنية وأنظمة المياه والصرف الصحي وتعليم النظافة',
          impact: '85,000+ أسرة',
        },
        {
          program: 'سبل العيش والتمكين الاقتصادي',
          allocation: '$680,000',
          percentage: 6,
          description: 'تدريب الوظائف والتمويل الأصغر وتطوير الأعمال والمرونة الاقتصادية',
          impact: '25,000+ مستفيد اقتصادي',
        },
        {
          program: 'تمكين المرأة وبرامج النوع الاجتماعي',
          allocation: '$410,000',
          percentage: 4,
          description: 'مبادرات المساواة بين الجنسين وقيادة النساء وبرامج الحماية',
          impact: '40,000+ امرأة مدعومة بشكل مباشر',
        },
      ],
    },

    expenses: {
      title: 'نفقات التشغيل الرئيسية',
      subtitle: 'تفصيل تكاليف التشغيل (سنوي)',
      description: 'تدعم نفقات التشغيل تسليم البرامج والعمليات الإدارية والبنية التحتية التنظيمية. تحافظ الهيئة على هيكل إداري نحيف لتعظيم التأثير البرامجي.',
      categories: [
        {
          name: 'تكاليف الموظفين',
          amount: '$4,800,000',
          percentage: 41,
          description: 'رواتب الموظفين والمزايا والتطوير المهني عبر جميع البرامج والمناطق',
        },
        {
          name: 'تنفيذ البرنامج',
          amount: '$3,600,000',
          percentage: 31,
          description: 'تكاليف البرنامج المباشرة بما في ذلك الإمدادات والمعدات وتقديم الخدمات',
        },
        {
          name: 'المرافق والبنية التحتية',
          amount: '$1,200,000',
          percentage: 10,
          description: 'صيانة المكاتب والمرافق والاتصالات وعمليات تشغيل المرافق',
        },
        {
          name: 'النقل واللوجستيات',
          amount: '$900,000',
          percentage: 8,
          description: 'صيانة المركبات والوقود والشحن ولوجستيات الحقل',
        },
        {
          name: 'المراقبة والتقييم والتعلم',
          amount: '$450,000',
          percentage: 4,
          description: 'تقييم التأثير وضمان الجودة والتعلم التنظيمي',
        },
        {
          name: 'الحكم والامتثال',
          amount: '$300,000',
          percentage: 3,
          description: 'التدقيق والشؤون القانونية والامتثال التنظيمي والأنشطة الحوكمة',
        },
        {
          name: 'الاتصالات والدعوة',
          amount: '$210,000',
          percentage: 2,
          description: 'الوعي العام والاتصالات ومبادرات الدعوة',
        },
        {
          name: 'الطوارئ والاحتياطيات',
          amount: '$140,000',
          percentage: 1,
          description: 'احتياطيات الطوارئ للاحتياجات غير المتوقعة واستدامة المنظمة',
        },
      ],
    },

    funding: {
      title: 'مصادر التمويل',
      subtitle: 'تدفقات الإيرادات المتنوعة',
      description: 'تحافظ الهيئة على استدامة مالية من خلال مصادر تمويل متنوعة، مما يقلل الاعتماد على أي مانح واحد ويضمن استمرارية البرنامج.',
      sources: [
        { name: 'المانحون والمؤسسات الدولية', percentage: 38, amount: '$4,275,000' },
        { name: 'المنح والعقود الحكومية', percentage: 24, amount: '$2,700,000' },
        { name: 'التبرعات الفردية', percentage: 18, amount: '$2,025,000' },
        { name: 'الشركات وشركاء المسؤولية الاجتماعية', percentage: 12, amount: '$1,350,000' },
        { name: 'رسوم الخدمات واسترجاع التكاليف', percentage: 5, amount: '$562,500' },
        { name: 'دخل الاستثمار والفائدة', percentage: 3, amount: '$337,500' },
      ],
    },

    spending: {
      title: 'ملخص الإنفاق السنوي',
      subtitle: 'نظرة عامة على السنة المالية 2025',
      year: '2025',
      totalBudget: '$11,262,500',
      programsAllocation: '$11,200,000',
      administrativeAllocation: '$62,500',
      programPercentage: 99.4,
      administrativePercentage: 0.6,
      description: 'تعمل الهيئة بكفاءة استثنائية، وتخصص 99.4٪ من إجمالي الميزانية للبرامج والعمل الإنساني. تتجاوز هذه النسبة أفضل الممارسات الصناعية.',
      auditing: {
        title: 'التدقيق المستقل',
        status: 'تم التدقيق من قبل شركة Big Four - Deloitte',
        frequency: 'التدقيق المالي المستقل السنوي',
        report: 'رأي غير محفوظ - البيان المالي النظيف',
      },
    },
  },
};

export default function FinancialDisclosurePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const base = `/${locale}`;

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
            {ar ? 'الشفافية والمساءلة' : 'Transparency & Accountability'}
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

      {/* Overview Section */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '32px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.overview.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            lineHeight: '1.8',
            marginBottom: '48px',
            maxWidth: '900px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.overview.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: ar ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {content.overview.principles.map((principle, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: ar ? 'right' : 'left',
                flexDirection: ar ? 'row-reverse' : 'row',
              }}>
                <span style={{
                  color: royalColors.hashemiteGold,
                  fontSize: '24px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}>
                  ✓
                </span>
                <p style={{
                  fontSize: '16px',
                  color: royalColors.darkNavy,
                  fontWeight: '600',
                  margin: 0,
                }}>
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Compensation */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.compensation.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontWeight: '600',
            marginBottom: '32px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.compensation.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '48px',
            maxWidth: '900px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.compensation.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}>
            {content.compensation.executives.map((exec, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {exec.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.hashemiteGold,
                  fontWeight: '700',
                  marginBottom: '16px',
                  margin: 0,
                }}>
                  {exec.title}
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '16px',
                }} />
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  <strong>{ar ? 'الخبرة:' : 'Experience:'}</strong> {exec.experience}
                </p>
                <p style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  fontWeight: '700',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  <strong>{ar ? 'الراتب السنوي:' : 'Annual Salary:'}</strong> {exec.salary}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  <strong>{ar ? 'المزايا:' : 'Benefits:'}</strong> {exec.benefits}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '8px',
            border: `2px solid ${royalColors.hashemiteGold}`,
            textAlign: ar ? 'right' : 'left',
          }}>
            <p style={{
              fontSize: '16px',
              color: royalColors.darkNavy,
              lineHeight: '1.7',
              margin: 0,
              fontStyle: 'italic',
            }}>
              <strong>{ar ? 'ملاحظة تعليمية:' : 'Educational Note:'}</strong> {content.compensation.educationalNote}
            </p>
          </div>
        </div>
      </section>

      {/* Grant Allocations */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.grants.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontWeight: '600',
            marginBottom: '32px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.grants.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '48px',
            maxWidth: '900px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.grants.description}
          </p>

          <div style={{ display: 'grid', gap: '24px' }}>
            {content.grants.allocations.map((grant, idx) => (
              <div key={idx} style={{
                backgroundColor: royalColors.bgRefined,
                padding: '24px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.darkNavy,
                      marginBottom: '4px',
                      marginTop: 0,
                    }}>
                      {grant.program}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textSecondary,
                      marginBottom: 0,
                    }}>
                      {grant.description}
                    </p>
                  </div>
                  <div style={{ textAlign: ar ? 'right' : 'right', flexShrink: 0 }}>
                    <p style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: 0,
                      marginBottom: '4px',
                    }}>
                      {grant.allocation}
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.hashemiteGold,
                      fontWeight: '600',
                      margin: 0,
                    }}>
                      {grant.percentage}% {ar ? 'من المنح' : 'of grants'}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: royalColors.borderFormal,
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: `${grant.percentage}%`,
                    height: '100%',
                    backgroundColor: royalColors.hashemiteGold,
                    transition: 'width 0.3s ease',
                  }} />
                </div>

                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: 0,
                  fontStyle: 'italic',
                }}>
                  <strong>{ar ? 'التأثير:' : 'Impact:'}</strong> {grant.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expenses */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.expenses.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontWeight: '600',
            marginBottom: '32px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.expenses.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '48px',
            maxWidth: '900px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.expenses.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.expenses.categories.map((expense, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {expense.name}
                </h3>
                <p style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '4px',
                  margin: 0,
                }}>
                  {expense.amount}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  fontWeight: '600',
                  marginBottom: '12px',
                  margin: 0,
                }}>
                  {expense.percentage}% {ar ? 'من المصروفات' : 'of expenses'}
                </p>
                <div style={{
                  height: '1px',
                  backgroundColor: royalColors.borderFormal,
                  marginBottom: '12px',
                }} />
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {expense.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources - Pie Chart Data */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.funding.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontWeight: '600',
            marginBottom: '32px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.funding.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '48px',
            maxWidth: '900px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.funding.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Funding Sources List */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {content.funding.sources.map((source, idx) => (
                  <div key={idx}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px',
                      flexDirection: ar ? 'row-reverse' : 'row',
                    }}>
                      <span style={{
                        fontSize: '16px',
                        color: royalColors.darkNavy,
                        fontWeight: '600',
                      }}>
                        {source.name}
                      </span>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: royalColors.hashemiteGold,
                      }}>
                        {source.percentage}%
                      </span>
                    </div>
                    <div style={{
                      height: '12px',
                      backgroundColor: royalColors.borderFormal,
                      borderRadius: '6px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${source.percentage}%`,
                        height: '100%',
                        backgroundColor: royalColors.hashemiteGold,
                      }} />
                    </div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      marginTop: '4px',
                      margin: 0,
                    }}>
                      {source.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie Chart Visualization (SVG) */}
            <div style={{ textAlign: 'center' }}>
              <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                {/* International Donors - 38% (0-136.8 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.deepRoyal} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.76} ${80 * Math.PI * 2}`}
                  transform="rotate(-90 100 100)" />

                {/* Government - 24% (136.8-224 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.darkNavy} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.48} ${80 * Math.PI * 2}`}
                  strokeDashoffset={`${-80 * Math.PI * 0.76}`}
                  transform="rotate(-90 100 100)" />

                {/* Individual Donations - 18% (224-288.8 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.compassionTeal} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.36} ${80 * Math.PI * 2}`}
                  strokeDashoffset={`${-80 * Math.PI * 1.24}`}
                  transform="rotate(-90 100 100)" />

                {/* Corporate - 12% (288.8-332.8 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.impactGreen} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.24} ${80 * Math.PI * 2}`}
                  strokeDashoffset={`${-80 * Math.PI * 1.60}`}
                  transform="rotate(-90 100 100)" />

                {/* Service Fees - 5% (332.8-350 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.charityRed} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.10} ${80 * Math.PI * 2}`}
                  strokeDashoffset={`${-80 * Math.PI * 1.84}`}
                  transform="rotate(-90 100 100)" />

                {/* Investment - 3% (350-371.6 deg) */}
                <circle cx="100" cy="100" r="80" fill="none" stroke={royalColors.hashemiteGold} strokeWidth="40"
                  strokeDasharray={`${80 * Math.PI * 0.06} ${80 * Math.PI * 2}`}
                  strokeDashoffset={`${-80 * Math.PI * 1.94}`}
                  transform="rotate(-90 100 100)" />

                {/* Center circle for donut effect */}
                <circle cx="100" cy="100" r="50" fill="white" />
              </svg>

              <div style={{
                marginTop: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                fontSize: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.deepRoyal,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>38% {ar ? 'دولي' : 'International'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.darkNavy,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>24% {ar ? 'حكومي' : 'Government'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.compassionTeal,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>18% {ar ? 'فردي' : 'Individual'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.impactGreen,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>12% {ar ? 'شركات' : 'Corporate'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.charityRed,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>5% {ar ? 'خدمات' : 'Services'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: royalColors.hashemiteGold,
                    borderRadius: '2px',
                  }} />
                  <span style={{ color: royalColors.textSecondary }}>3% {ar ? 'استثمار' : 'Investment'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Spending Summary */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.spending.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontWeight: '600',
            marginBottom: '32px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.spending.subtitle}
          </p>

          {/* Summary Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                marginTop: 0,
              }}>
                {ar ? 'الميزانية الإجمالية' : 'Total Budget'}
              </p>
              <p style={{
                fontSize: '44px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                margin: 0,
                fontFamily: royalTypography.serif,
              }}>
                {content.spending.totalBudget}
              </p>
              <p style={{
                fontSize: '12px',
                color: royalColors.textSecondary,
                marginTop: '8px',
                margin: 0,
              }}>
                {ar ? 'السنة المالية' : 'Fiscal Year'} {content.spending.year}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                marginTop: 0,
              }}>
                {ar ? 'البرامج' : 'Programs'}
              </p>
              <p style={{
                fontSize: '44px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                margin: 0,
                fontFamily: royalTypography.serif,
              }}>
                {content.spending.programPercentage}%
              </p>
              <p style={{
                fontSize: '12px',
                color: royalColors.textSecondary,
                marginTop: '8px',
                margin: 0,
              }}>
                {content.spending.programsAllocation}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                marginTop: 0,
              }}>
                {ar ? 'إدارة' : 'Administration'}
              </p>
              <p style={{
                fontSize: '44px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                margin: 0,
                fontFamily: royalTypography.serif,
              }}>
                {content.spending.administrativePercentage}%
              </p>
              <p style={{
                fontSize: '12px',
                color: royalColors.textSecondary,
                marginTop: '8px',
                margin: 0,
              }}>
                {content.spending.administrativeAllocation}
              </p>
            </div>
          </div>

          {/* Large visualization */}
          <div style={{
            backgroundColor: 'white',
            padding: '48px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderFormal}`,
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            <svg viewBox="0 0 400 60" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              {/* Programs bar */}
              <rect x="10" y="10" width="376.4" height="20" fill={royalColors.darkNavy} rx="4" />
              {/* Administrative bar */}
              <rect x="386.4" y="10" width="2.4" height="20" fill={royalColors.hashemiteGold} rx="2" />

              {/* Labels */}
              <text x="200" y="50" fontSize="12" textAnchor="middle" fill={royalColors.textSecondary}>
                {ar ? 'البرامج' : 'Programs'} 99.4% | {ar ? 'الإدارة' : 'Admin'} 0.6%
              </text>
            </svg>
          </div>

          {/* Description and Auditing Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{
                fontSize: '16px',
                color: royalColors.textOfficial,
                lineHeight: '1.7',
                margin: 0,
              }}>
                {content.spending.description}
              </p>
            </div>

            <div style={{
              backgroundColor: royalColors.bgRefined,
              padding: '32px',
              borderRadius: '8px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '16px',
                marginTop: 0,
              }}>
                {content.spending.auditing.title}
              </h3>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: royalColors.darkNavy,
                marginBottom: '8px',
                margin: 0,
              }}>
                {content.spending.auditing.status}
              </p>
              <p style={{
                fontSize: '14px',
                color: royalColors.textSecondary,
                marginBottom: '12px',
                margin: 0,
              }}>
                {content.spending.auditing.frequency}
              </p>
              <div style={{
                height: '1px',
                backgroundColor: royalColors.borderFormal,
                marginBottom: '12px',
              }} />
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: royalColors.hashemiteGold,
                margin: 0,
              }}>
                ✓ {content.spending.auditing.report}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Note Footer */}
      <section style={{
        padding: '64px 32px',
        backgroundColor: royalColors.darkNavy,
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            margin: 0,
          }}>
            {ar ? 'يلتزم تقرير الإفصاح المالي هذا بمعايير الشفافية الدولية ويتم تحديثه سنويًا. لمزيد من المعلومات أو أسئلة حول أموال الهيئة، يرجى الاتصال بنا على'
            : 'This Financial Disclosure report complies with international transparency standards and is updated annually. For more information or questions about JHCO\'s finances, please contact us at'} <span style={{ color: royalColors.hashemiteGold }}>info@jhco.org</span>
          </p>
        </div>
      </section>
    </div>
  );
}
