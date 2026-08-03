'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Compliance Certifications',
    heroTitle: 'Compliance & Certifications',
    heroSubtitle: 'International standards, accreditations, and compliance certifications ensuring organizational excellence and accountability',

    isoSection: 'ISO Certifications',
    charitySection: 'Charity Certifications',
    internationalSection: 'International Compliance',
    accreditationSection: 'Accreditations',

    certifications: [
      {
        category: 'iso',
        title: 'ISO 9001:2015',
        subtitle: 'Quality Management System',
        status: 'Active',
        renewalDate: '2026-12-15',
        description: 'International standard for quality management systems ensuring consistent processes and customer satisfaction across all JHCO operations.',
        issuer: 'International Organization for Standardization',
        scope: 'Quality management across humanitarian programs and administrative functions',
        badge: '📋',
      },
      {
        category: 'iso',
        title: 'ISO 45001:2018',
        subtitle: 'Occupational Health & Safety',
        status: 'Active',
        renewalDate: '2026-09-22',
        description: 'International standard for occupational health and safety management protecting employee and volunteer wellbeing.',
        issuer: 'International Organization for Standardization',
        scope: 'Health and safety management for all staff and volunteer operations',
        badge: '🛡️',
      },
      {
        category: 'iso',
        title: 'ISO 26000:2010',
        subtitle: 'Social Responsibility Guidelines',
        status: 'Active',
        renewalDate: '2027-03-10',
        description: 'Guidance on social responsibility demonstrating commitment to ethical operations and sustainable development.',
        issuer: 'International Organization for Standardization',
        scope: 'Social responsibility and ethical organizational practices',
        badge: '⚖️',
      },
      {
        category: 'charity',
        title: 'SPHERE Certified',
        subtitle: 'Humanitarian Charter & Minimum Standards',
        status: 'Active',
        renewalDate: '2025-11-30',
        description: 'Certification affirming compliance with international humanitarian response standards and ethical guidelines in emergency operations.',
        issuer: 'The Sphere Project',
        scope: 'Emergency response and humanitarian operations quality assurance',
        badge: '🌍',
      },
      {
        category: 'charity',
        title: 'Global Fund Alliance Certified',
        subtitle: 'International Health Partnerships',
        status: 'Active',
        renewalDate: '2026-06-20',
        description: 'Recognition of alignment with international health initiatives and partnership standards in global humanitarian work.',
        issuer: 'Global Fund Alliance',
        scope: 'Health program partnerships and international collaboration',
        badge: '🏥',
      },
      {
        category: 'charity',
        title: 'Charity Navigator 4-Star',
        subtitle: 'Nonprofit Excellence & Transparency',
        status: 'Active',
        renewalDate: '2025-08-31',
        description: 'Highest-level rating for organizational effectiveness, financial health, accountability, and transparency in nonprofit operations.',
        issuer: 'Charity Navigator',
        scope: 'Financial reporting, organizational performance, and operational transparency',
        badge: '⭐',
      },
      {
        category: 'international',
        title: 'UN OCHA Registration',
        subtitle: 'United Nations Humanitarian Partner',
        status: 'Active',
        renewalDate: '2027-01-15',
        description: 'Official registration with UN Office for the Coordination of Humanitarian Affairs enabling participation in international humanitarian operations.',
        issuer: 'United Nations',
        scope: 'International humanitarian operations and UN coordination mechanisms',
        badge: '🇺🇳',
      },
      {
        category: 'international',
        title: 'ICRC Recognition',
        subtitle: 'International Committee of the Red Cross',
        status: 'Active',
        renewalDate: '2026-05-12',
        description: 'Recognition of adherence to International Humanitarian Law and cooperation with Red Crescent humanitarian standards.',
        issuer: 'International Committee of the Red Cross',
        scope: 'Humanitarian law compliance and coordination with ICRC initiatives',
        badge: '🔴',
      },
      {
        category: 'accreditation',
        title: 'Jordan Ministry Registration',
        subtitle: 'National NGO Accreditation',
        status: 'Active',
        renewalDate: '2025-12-31',
        description: 'Legal registration and accreditation with Jordanian Ministry of Social Development ensuring compliance with national regulations.',
        issuer: 'Ministry of Social Development (Jordan)',
        scope: 'National NGO operations, legal compliance, and governmental coordination',
        badge: '🏛️',
      },
      {
        category: 'accreditation',
        title: 'Arab Region NGO Forum',
        subtitle: 'Regional Organizational Standards',
        status: 'Active',
        renewalDate: '2026-10-08',
        description: 'Membership and accreditation in the Arab Region NGO Forum ensuring compliance with regional standards and best practices.',
        issuer: 'Arab Region NGO Forum',
        scope: 'Regional humanitarian standards, advocacy, and organizational development',
        badge: '🌐',
      },
      {
        category: 'accreditation',
        title: 'INGO Accountability Charter',
        subtitle: 'International NGO Standards',
        status: 'Active',
        renewalDate: '2026-02-14',
        description: 'Signatory to the INGO Accountability Charter committing to highest standards of accountability and transparency.',
        issuer: 'INGO Accountability Charter',
        scope: 'Accountability, transparency, and stakeholder engagement standards',
        badge: '📜',
      },
    ],

    complianceOfficer: {
      title: 'Compliance & Certification Officer',
      name: 'Mr. Karim Al-Rashdan',
      position: 'Director of Organizational Compliance',
      email: 'compliance@jhco.org',
      phone: '+962-6-555-0123',
      department: 'Governance & Compliance',
      responsibilties: [
        'Oversee all certification compliance and renewal processes',
        'Coordinate with accreditation bodies and external auditors',
        'Maintain organizational compliance with international standards',
        'Manage internal compliance audits and assessments',
        'Ensure documentation and record-keeping standards',
        'Liaise with board governance committees on compliance matters',
      ],
    },

    certificationInfo: {
      title: 'Certification Information',
      items: [
        {
          label: 'Audit Schedule',
          description: 'Annual internal audits conducted quarterly, external audits annually by certified bodies',
        },
        {
          label: 'Renewal Process',
          description: 'Certifications renewed every 2-3 years with continuous compliance monitoring throughout validity period',
        },
        {
          label: 'Audit Reports',
          description: 'Comprehensive audit reports available upon request to donors, partners, and stakeholders',
        },
        {
          label: 'Compliance Committee',
          description: 'Board-level compliance committee meets quarterly to review standards and organizational alignment',
        },
        {
          label: 'Quality Assurance',
          description: 'Continuous improvement processes ensure sustained compliance and certification maintenance',
        },
        {
          label: 'Stakeholder Access',
          description: 'Certification documentation and compliance status available for donor and partner review',
        },
      ],
    },
  },

  ar: {
    title: 'شهادات الامتثال',
    heroTitle: 'الامتثال والشهادات',
    heroSubtitle: 'المعايير الدولية والاعتمادات وشهادات الامتثال التي تضمن التميز التنظيمي والمساءلة',

    isoSection: 'شهادات ISO',
    charitySection: 'شهادات العمل الخيري',
    internationalSection: 'الامتثال الدولي',
    accreditationSection: 'الاعتمادات',

    certifications: [
      {
        category: 'iso',
        title: 'ISO 9001:2015',
        subtitle: 'نظام إدارة الجودة',
        status: 'نشط',
        renewalDate: '2026-12-15',
        description: 'معيار دولي لأنظمة إدارة الجودة يضمن عمليات متسقة ورضا العملاء عبر جميع عمليات الهيئة.',
        issuer: 'منظمة المعايير الدولية',
        scope: 'إدارة الجودة عبر البرامج الإنسانية والوظائف الإدارية',
        badge: '📋',
      },
      {
        category: 'iso',
        title: 'ISO 45001:2018',
        subtitle: 'الصحة والسلامة المهنية',
        status: 'نشط',
        renewalDate: '2026-09-22',
        description: 'معيار دولي لأنظمة إدارة الصحة والسلامة المهنية لحماية رفاهية الموظفين والمتطوعين.',
        issuer: 'منظمة المعايير الدولية',
        scope: 'إدارة الصحة والسلامة لجميع عمليات الموظفين والمتطوعين',
        badge: '🛡️',
      },
      {
        category: 'iso',
        title: 'ISO 26000:2010',
        subtitle: 'مبادئ المسؤولية الاجتماعية',
        status: 'نشط',
        renewalDate: '2027-03-10',
        description: 'توجيهات حول المسؤولية الاجتماعية تثبت الالتزام بالعمليات الأخلاقية والتنمية المستدامة.',
        issuer: 'منظمة المعايير الدولية',
        scope: 'المسؤولية الاجتماعية والممارسات التنظيمية الأخلاقية',
        badge: '⚖️',
      },
      {
        category: 'charity',
        title: 'معتمد من SPHERE',
        subtitle: 'الميثاق الإنساني والحد الأدنى من المعايير',
        status: 'نشط',
        renewalDate: '2025-11-30',
        description: 'شهادة تؤكد الامتثال لمعايير الاستجابة الإنسانية الدولية والمبادئ التوجيهية الأخلاقية في العمليات الطارئة.',
        issuer: 'مشروع SPHERE',
        scope: 'ضمان جودة عمليات الاستجابة للطوارئ والعمل الإنساني',
        badge: '🌍',
      },
      {
        category: 'charity',
        title: 'معتمد من Global Fund Alliance',
        subtitle: 'الشراكات الصحية الدولية',
        status: 'نشط',
        renewalDate: '2026-06-20',
        description: 'الاعتراف بالتوافق مع المبادرات الصحية الدولية ومعايير الشراكة في العمل الإنساني العالمي.',
        issuer: 'Global Fund Alliance',
        scope: 'شراكات البرامج الصحية والتعاون الدولي',
        badge: '🏥',
      },
      {
        category: 'charity',
        title: '4 نجوم من Charity Navigator',
        subtitle: 'تميز المنظمات غير الربحية والشفافية',
        status: 'نشط',
        renewalDate: '2025-08-31',
        description: 'أعلى تصنيف لفعالية المنظمة والصحة المالية والمساءلة والشفافية في العمليات غير الربحية.',
        issuer: 'Charity Navigator',
        scope: 'التقارير المالية وأداء المنظمة والشفافية التشغيلية',
        badge: '⭐',
      },
      {
        category: 'international',
        title: 'تسجيل الأمم المتحدة OCHA',
        subtitle: 'شريك إنساني تابع للأمم المتحدة',
        status: 'نشط',
        renewalDate: '2027-01-15',
        description: 'التسجيل الرسمي لدى مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية يتيح المشاركة في العمليات الإنسانية الدولية.',
        issuer: 'الأمم المتحدة',
        scope: 'العمليات الإنسانية الدولية وآليات التنسيق مع الأمم المتحدة',
        badge: '🇺🇳',
      },
      {
        category: 'international',
        title: 'اعتراف اللجنة الدولية للصليب الأحمر',
        subtitle: 'اللجنة الدولية للصليب الأحمر',
        status: 'نشط',
        renewalDate: '2026-05-12',
        description: 'الاعتراف بالالتزام بالقانون الإنساني الدولي والتعاون مع معايير الهلال الأحمر الإنسانية.',
        issuer: 'اللجنة الدولية للصليب الأحمر',
        scope: 'الامتثال للقانون الإنساني والتنسيق مع مبادرات اللجنة الدولية للصليب الأحمر',
        badge: '🔴',
      },
      {
        category: 'accreditation',
        title: 'تسجيل وزارة الأردن',
        subtitle: 'اعتماد المنظمات غير الحكومية الوطنية',
        status: 'نشط',
        renewalDate: '2025-12-31',
        description: 'التسجيل القانوني والاعتماد لدى وزارة التنمية الاجتماعية الأردنية يضمن الامتثال للتنظيمات الوطنية.',
        issuer: 'وزارة التنمية الاجتماعية (الأردن)',
        scope: 'العمليات الوطنية للمنظمات غير الحكومية والامتثال القانوني والتنسيق الحكومي',
        badge: '🏛️',
      },
      {
        category: 'accreditation',
        title: 'منتدى المنظمات غير الحكومية بالمنطقة العربية',
        subtitle: 'معايير المنظمات الإقليمية',
        status: 'نشط',
        renewalDate: '2026-10-08',
        description: 'العضوية والاعتماد في منتدى المنظمات غير الحكومية بالمنطقة العربية يضمن الامتثال للمعايير الإقليمية وأفضل الممارسات.',
        issuer: 'منتدى المنظمات غير الحكومية بالمنطقة العربية',
        scope: 'معايير العمل الإنساني الإقليمية والدعوة والتطوير التنظيمي',
        badge: '🌐',
      },
      {
        category: 'accreditation',
        title: 'ميثاق المنظمات الدولية غير الحكومية',
        subtitle: 'معايير المنظمات غير الحكومية الدولية',
        status: 'نشط',
        renewalDate: '2026-02-14',
        description: 'موقع من ميثاق المنظمات الدولية غير الحكومية يلتزم بأعلى معايير المساءلة والشفافية.',
        issuer: 'ميثاق المنظمات الدولية غير الحكومية',
        scope: 'معايير المساءلة والشفافية والمشاركة مع جميع الفئات المعنية',
        badge: '📜',
      },
    ],

    complianceOfficer: {
      title: 'موظف الامتثال والشهادات',
      name: 'السيد كريم الرشدان',
      position: 'مدير الامتثال التنظيمي',
      email: 'compliance@jhco.org',
      phone: '+962-6-555-0123',
      department: 'الحكومة والامتثال',
      responsibilties: [
        'الإشراف على جميع عمليات الامتثال للشهادات والتجديد',
        'التنسيق مع هيئات الاعتماد والمدققين الخارجيين',
        'الحفاظ على امتثال المنظمة للمعايير الدولية',
        'إدارة التدقيق الداخلي للامتثال والتقييمات',
        'ضمان معايير التوثيق والحفظ السجلات',
        'التنسيق مع لجان حكومة المجلس حول مسائل الامتثال',
      ],
    },

    certificationInfo: {
      title: 'معلومات الشهادات',
      items: [
        {
          label: 'جدول التدقيق',
          description: 'إجراء التدقيق الداخلي السنوي بشكل ربع سنوي، والتدقيق الخارجي السنوي من قبل الجهات المعتمدة',
        },
        {
          label: 'عملية التجديد',
          description: 'تجديد الشهادات كل 2-3 سنوات مع المراقبة المستمرة للامتثال طوال فترة الصلاحية',
        },
        {
          label: 'تقارير التدقيق',
          description: 'توفر تقارير التدقيق الشاملة عند الطلب للمانحين والشركاء وأصحاب المصلحة',
        },
        {
          label: 'لجنة الامتثال',
          description: 'لجنة امتثال على مستوى المجلس تجتمع ربع سنوي لمراجعة المعايير والتوافق التنظيمي',
        },
        {
          label: 'ضمان الجودة',
          description: 'تضمن عمليات التحسين المستمر الامتثال المستمر والحفاظ على الشهادات',
        },
        {
          label: 'وصول أصحاب المصلحة',
          description: 'توفير وثائق الشهادات وحالة الامتثال لمراجعة المانحين والشركاء',
        },
      ],
    },
  },
};

export default function ComplianceCertificationsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  const getCategory = (cat: string) => {
    const categories: { [key: string]: string } = {
      iso: ar ? content.isoSection : content.isoSection,
      charity: ar ? content.charitySection : content.charitySection,
      international: ar ? content.internationalSection : content.internationalSection,
      accreditation: ar ? content.accreditationSection : content.accreditationSection,
    };
    return categories[cat] || cat;
  };

  const certsByCategory = {
    iso: content.certifications.filter((c) => c.category === 'iso'),
    charity: content.certifications.filter((c) => c.category === 'charity'),
    international: content.certifications.filter((c) => c.category === 'international'),
    accreditation: content.certifications.filter((c) => c.category === 'accreditation'),
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (ar) {
      return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderCertificationCards = (certs: any[]) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '32px',
      marginBottom: '64px',
    }}>
      {certs.map((cert, idx) => (
        <div key={idx} style={{
          backgroundColor: 'white',
          padding: '40px 32px',
          borderRadius: '8px',
          border: `1px solid ${royalColors.borderFormal}`,
          boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
          textAlign: ar ? 'right' : 'left',
          transition: 'all 0.3s ease',
          borderTop: `4px solid ${royalColors.hashemiteGold}`,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '16px',
            flexDirection: ar ? 'row-reverse' : 'row',
            gap: '16px',
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '4px',
                marginTop: 0,
              }}>
                {cert.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: royalColors.hashemiteGold,
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                margin: '0 0 8px 0',
              }}>
                {cert.subtitle}
              </p>
            </div>
            <span style={{
              fontSize: '32px',
              lineHeight: 1,
            }}>
              {cert.badge}
            </span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexDirection: ar ? 'row-reverse' : 'row',
            gap: '8px',
          }}>
            <span style={{
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.darkNavy,
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}>
              {cert.status}
            </span>
            <p style={{
              fontSize: '12px',
              color: '#6b6b6b',
              fontWeight: '600',
              margin: 0,
            }}>
              {ar ? 'تاريخ التجديد: ' : 'Renewal: '}{formatDate(cert.renewalDate)}
            </p>
          </div>

          <p style={{
            fontSize: '15px',
            color: royalColors.textOfficial,
            lineHeight: '1.6',
            marginBottom: '16px',
          }}>
            {cert.description}
          </p>

          <div style={{
            height: '1px',
            backgroundColor: royalColors.borderFormal,
            marginBottom: '16px',
          }} />

          <div style={{
            fontSize: '13px',
            color: '#6b6b6b',
            lineHeight: '1.5',
          }}>
            <p style={{ marginBottom: '8px', margin: '0 0 8px 0' }}>
              <strong>{ar ? 'الجهة المصدرة: ' : 'Issuer: '}</strong>{cert.issuer}
            </p>
            <p style={{ margin: '0 0 0 0' }}>
              <strong>{ar ? 'النطاق: ' : 'Scope: '}</strong>{cert.scope}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

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
            {ar ? 'الامتثال والشهادات' : 'Compliance & Certifications'}
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

      {/* ISO Certifications */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.isoSection} <span style={{ color: royalColors.hashemiteGold }}>Certifications</span>
          </h2>
          {renderCertificationCards(certsByCategory.iso)}
        </div>
      </section>

      {/* Charity Certifications */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.charitySection} <span style={{ color: royalColors.hashemiteGold }}>Standards</span>
          </h2>
          {renderCertificationCards(certsByCategory.charity)}
        </div>
      </section>

      {/* International Compliance */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.internationalSection} <span style={{ color: royalColors.hashemiteGold }}>Recognition</span>
          </h2>
          {renderCertificationCards(certsByCategory.international)}
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.accreditationSection} <span style={{ color: royalColors.hashemiteGold }}>& Recognition</span>
          </h2>
          {renderCertificationCards(certsByCategory.accreditation)}
        </div>
      </section>

      {/* Compliance Officer Contact */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.formalCharcoal})`,
        padding: '80px 32px',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.hashemiteGold,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.complianceOfficer.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}>
            <div style={{ textAlign: ar ? 'right' : 'left' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.hashemiteGold}`,
              }}>
                <p style={{
                  fontSize: '12px',
                  color: royalColors.hashemiteGold,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  margin: '0 0 16px 0',
                }}>
                  {ar ? 'تفاصيل الاتصال' : 'Contact Details'}
                </p>

                <h3 style={{
                  fontSize: '28px',
                  fontFamily: royalTypography.serif,
                  color: 'white',
                  marginBottom: '8px',
                  marginTop: 0,
                }}>
                  {content.complianceOfficer.name}
                </h3>

                <p style={{
                  fontSize: '16px',
                  color: royalColors.hashemiteGold,
                  fontWeight: '600',
                  marginBottom: '24px',
                  margin: '8px 0 24px 0',
                }}>
                  {content.complianceOfficer.position}
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.hashemiteGold,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: '600',
                      margin: '0 0 4px 0',
                    }}>
                      {ar ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: 'white',
                      margin: 0,
                      wordBreak: 'break-all',
                    }}>
                      {content.complianceOfficer.email}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.hashemiteGold,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: '600',
                      margin: '0 0 4px 0',
                    }}>
                      {ar ? 'الهاتف' : 'Phone'}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: 'white',
                      margin: 0,
                    }}>
                      {content.complianceOfficer.phone}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.hashemiteGold,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: '600',
                      margin: '0 0 4px 0',
                    }}>
                      {ar ? 'القسم' : 'Department'}
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: 'white',
                      margin: 0,
                    }}>
                      {content.complianceOfficer.department}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: ar ? 'right' : 'left' }}>
              <h3 style={{
                fontSize: '24px',
                fontFamily: royalTypography.serif,
                color: royalColors.hashemiteGold,
                marginBottom: '24px',
                marginTop: 0,
              }}>
                {ar ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'}
              </h3>

              <ul style={{
                fontSize: '15px',
                color: 'white',
                lineHeight: '1.8',
                paddingLeft: ar ? 0 : '24px',
                paddingRight: ar ? '24px' : 0,
              }}>
                {content.complianceOfficer.responsibilties.map((resp, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', margin: '0 0 12px 0' }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Information */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {content.certificationInfo.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.certificationInfo.items.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px 24px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <p style={{
                  fontSize: '16px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  fontWeight: '700',
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '64px 32px',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '32px',
            fontFamily: royalTypography.serif,
            marginBottom: '24px',
            marginTop: 0,
          }}>
            {ar ? 'استفسارات الامتثال' : 'Compliance Inquiries'}
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}>
            {ar
              ? 'للحصول على نسخ من تقارير الامتثال والشهادات أو للاستفسار عن عمليات المراجعة الخاصة بنا، يرجى التواصل مع مكتب الامتثال.'
              : 'For copies of compliance reports, certifications, or inquiries about our audit processes, please contact our Compliance Office.'}
          </p>
          <a href={`/${locale}/contact`} style={{
            display: 'inline-block',
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '14px 32px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}>
            {ar ? 'تواصل معنا' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}
