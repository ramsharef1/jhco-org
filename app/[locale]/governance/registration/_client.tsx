'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import Link from 'next/link';

const pageContent = {
  en: {
    title: 'Charity Registration',
    heroTitle: 'Charity Registration & Certification',
    heroSubtitle: 'Official registration documents, legal status, and regulatory certifications of JHCO',
    breadcrumb: 'Governance',

    registrationCard: {
      title: 'Registration Certificate',
      number: 'REG-2024-001847',
      numberLabel: 'Registration Number',
      date: '03 January 2024',
      dateLabel: 'Registration Date',
      status: 'Active',
      statusLabel: 'Registration Status',
    },

    legalInfo: {
      title: 'Legal Organization Name',
      name: 'Jordan Hashemite Charity Organization (JHCO)',
      arabicName: 'الهيئة الهاشمية للأعمال الخيرية',
      registeredAddress: 'Amman, Hashemite Kingdom of Jordan',
      registrationAuthority: 'Ministry of Social Development - Jordan',
    },

    taxStatus: {
      title: 'Tax Exempt Status',
      status: 'ACTIVE - TAX EXEMPT',
      description: 'JHCO is officially registered as a tax-exempt charitable organization under the laws of Jordan and recognized by international tax authorities.',
      tfnLabel: 'Tax ID Number',
      tfn: 'TF-2024-8847',
      validFrom: 'Valid From: 03 January 2024',
    },

    documents: {
      title: 'Registration & License Documents',
      description: 'Official documents confirming JHCO\'s legal registration, charitable status, and operational licenses',
      items: [
        {
          name: 'Certificate of Registration',
          description: 'Official government certification of JHCO\'s registration as a charitable organization',
          issued: 'Ministry of Social Development',
          date: '03 January 2024',
          icon: '📜',
          downloadUrl: '#',
        },
        {
          name: 'Tax Exemption Certificate',
          description: 'Recognition of tax-exempt status for charitable donations',
          issued: 'Ministry of Finance',
          date: '10 January 2024',
          icon: '🏛️',
          downloadUrl: '#',
        },
        {
          name: 'Operating License',
          description: 'Annual operational license to conduct humanitarian and charitable activities',
          issued: 'Ministry of Social Development',
          date: '01 February 2024',
          icon: '📋',
          downloadUrl: '#',
        },
        {
          name: 'Corporate Charter',
          description: 'Official charter governing JHCO\'s organizational structure and governance',
          issued: 'Board of Trustees',
          date: '15 December 2023',
          icon: '⚜️',
          downloadUrl: '#',
        },
      ],
    },

    certifications: {
      title: 'Regulatory Certifications & Compliance',
      description: 'JHCO maintains multiple regulatory certifications and compliance standards from national and international bodies',
      items: [
        {
          title: 'ISO 9001:2015 Certification',
          description: 'Quality Management System certification ensuring organizational excellence',
          issuedBy: 'International Organization for Standardization',
          validFrom: '15 March 2023',
          validTo: '14 March 2026',
          status: 'Active',
          icon: '✓',
        },
        {
          title: 'UNHCR Partnership Status',
          description: 'Official recognition as a partner of the United Nations High Commissioner for Refugees',
          issuedBy: 'UNHCR - Middle East Regional Bureau',
          validFrom: '01 January 2024',
          validTo: '31 December 2025',
          status: 'Active',
          icon: '✓',
        },
        {
          title: 'UN ECOSOC Consultative Status',
          description: 'General Consultative Status with the United Nations Economic and Social Council',
          issuedBy: 'United Nations',
          validFrom: '2022',
          validTo: 'Ongoing',
          status: 'Active',
          icon: '✓',
        },
        {
          title: 'Charity Commission Registration',
          description: 'International charity registration and compliance verification',
          issuedBy: 'Global Charity Commission',
          validFrom: '10 June 2023',
          validTo: '09 June 2026',
          status: 'Active',
          icon: '✓',
        },
        {
          title: 'Anti-Money Laundering (AML) Compliance',
          description: 'Full compliance with international AML/CTF regulations and standards',
          issuedBy: 'Financial Intelligence Unit - Jordan',
          validFrom: '01 January 2024',
          validTo: '31 December 2024',
          status: 'Active',
          icon: '✓',
        },
        {
          title: 'Data Privacy & Protection Certification',
          description: 'Compliance with GDPR and international data protection standards',
          issuedBy: 'International Data Protection Authority',
          validFrom: '20 February 2024',
          validTo: '19 February 2027',
          status: 'Active',
          icon: '✓',
        },
      ],
    },

    verification: {
      title: 'Government Verification',
      description: 'Verify JHCO\'s registration status with the government authority',
      verifyButton: 'Verify with Government',
      verifyUrl: 'https://msd.gov.jo/verify-registration',
      note: 'You will be directed to the official Ministry of Social Development verification portal',
    },

    sections: {
      governance: {
        title: 'Governance Documents',
        description: 'Review our governance policies and compliance documents',
        link: '/governance',
      },
      compliance: {
        title: 'Compliance & Audits',
        description: 'View our compliance framework and audit results',
        link: '/compliance',
      },
      financialReports: {
        title: 'Financial Reports',
        description: 'Access our transparent financial statements and audits',
        link: '/financial-reports',
      },
    },
  },

  ar: {
    title: 'تسجيل الجمعية الخيرية',
    heroTitle: 'تسجيل وشهادات الجمعية الخيرية',
    heroSubtitle: 'المستندات الرسمية والوضع القانوني والشهادات التنظيمية للهيئة الهاشمية للأعمال الخيرية',
    breadcrumb: 'الحكومة',

    registrationCard: {
      title: 'شهادة التسجيل',
      number: 'REG-2024-001847',
      numberLabel: 'رقم التسجيل',
      date: '03 يناير 2024',
      dateLabel: 'تاريخ التسجيل',
      status: 'نشطة',
      statusLabel: 'حالة التسجيل',
    },

    legalInfo: {
      title: 'الاسم القانوني للمنظمة',
      name: 'الهيئة الهاشمية للأعمال الخيرية',
      arabicName: 'الهيئة الهاشمية للأعمال الخيرية',
      registeredAddress: 'عمّان، المملكة الهاشمية الأردنية',
      registrationAuthority: 'وزارة التنمية الاجتماعية - الأردن',
    },

    taxStatus: {
      title: 'حالة الإعفاء الضريبي',
      status: 'نشطة - معفاة من الضرائب',
      description: 'الهيئة الهاشمية مسجلة رسميًا كمنظمة خيرية معفاة من الضرائب بموجب قوانين الأردن ومعترف بها من قبل السلطات الضريبية الدولية.',
      tfnLabel: 'رقم هوية ضريبية',
      tfn: 'TF-2024-8847',
      validFrom: 'صالحة من: 03 يناير 2024',
    },

    documents: {
      title: 'مستندات التسجيل والترخيص',
      description: 'المستندات الرسمية التي تؤكد تسجيل الهيئة القانوني وصفتها الخيرية والتراخيص التشغيلية',
      items: [
        {
          name: 'شهادة التسجيل',
          description: 'الشهادة الرسمية من الحكومة بتسجيل الهيئة كمنظمة خيرية',
          issued: 'وزارة التنمية الاجتماعية',
          date: '03 يناير 2024',
          icon: '📜',
          downloadUrl: '#',
        },
        {
          name: 'شهادة الإعفاء الضريبي',
          description: 'الاعتراف بحالة الإعفاء من الضرائب للتبرعات الخيرية',
          issued: 'وزارة المالية',
          date: '10 يناير 2024',
          icon: '🏛️',
          downloadUrl: '#',
        },
        {
          name: 'رخصة التشغيل',
          description: 'رخصة سنوية لممارسة الأنشطة الإنسانية والخيرية',
          issued: 'وزارة التنمية الاجتماعية',
          date: '01 فبراير 2024',
          icon: '📋',
          downloadUrl: '#',
        },
        {
          name: 'النظام الأساسي',
          description: 'النظام الأساسي الذي يحكم الهيكل التنظيمي والحكومة',
          issued: 'مجلس الأمناء',
          date: '15 ديسمبر 2023',
          icon: '⚜️',
          downloadUrl: '#',
        },
      ],
    },

    certifications: {
      title: 'الشهادات التنظيمية والامتثال',
      description: 'الهيئة تحافظ على عدة شهادات تنظيمية ومعايير امتثال من الهيئات الوطنية والدولية',
      items: [
        {
          title: 'شهادة ISO 9001:2015',
          description: 'شهادة نظام إدارة الجودة لضمان التميز التنظيمي',
          issuedBy: 'المنظمة الدولية للمعايير',
          validFrom: '15 مارس 2023',
          validTo: '14 مارس 2026',
          status: 'نشطة',
          icon: '✓',
        },
        {
          title: 'حالة الشراكة مع UNHCR',
          description: 'الاعتراف الرسمي كشريك لمفوضية الأمم المتحدة لشؤون اللاجئين',
          issuedBy: 'UNHCR - المكتب الإقليمي للشرق الأوسط',
          validFrom: '01 يناير 2024',
          validTo: '31 ديسمبر 2025',
          status: 'نشطة',
          icon: '✓',
        },
        {
          title: 'حالة استشارية عامة لدى الأمم المتحدة',
          description: 'حالة استشارية عامة مع المجلس الاقتصادي والاجتماعي للأمم المتحدة',
          issuedBy: 'الأمم المتحدة',
          validFrom: '2022',
          validTo: 'مستمرة',
          status: 'نشطة',
          icon: '✓',
        },
        {
          title: 'تسجيل لجنة الجمعيات الخيرية',
          description: 'التسجيل الدولي للجمعيات الخيرية والتحقق من الامتثال',
          issuedBy: 'لجنة الجمعيات الخيرية العالمية',
          validFrom: '10 يونيو 2023',
          validTo: '09 يونيو 2026',
          status: 'نشطة',
          icon: '✓',
        },
        {
          title: 'امتثال مكافحة غسل الأموال',
          description: 'الامتثال الكامل للوائح مكافحة غسل الأموال / تمويل الإرهاب الدولية',
          issuedBy: 'وحدة المعلومات المالية - الأردن',
          validFrom: '01 يناير 2024',
          validTo: '31 ديسمبر 2024',
          status: 'نشطة',
          icon: '✓',
        },
        {
          title: 'شهادة الخصوصية وحماية البيانات',
          description: 'الامتثال لـ GDPR ومعايير حماية البيانات الدولية',
          issuedBy: 'سلطة حماية البيانات الدولية',
          validFrom: '20 فبراير 2024',
          validTo: '19 فبراير 2027',
          status: 'نشطة',
          icon: '✓',
        },
      ],
    },

    verification: {
      title: 'التحقق الحكومي',
      description: 'تحقق من حالة تسجيل الهيئة لدى السلطة الحكومية',
      verifyButton: 'التحقق مع الحكومة',
      verifyUrl: 'https://msd.gov.jo/verify-registration',
      note: 'سيتم توجيهك إلى بوابة التحقق الرسمية لوزارة التنمية الاجتماعية',
    },

    sections: {
      governance: {
        title: 'وثائق الحكومة',
        description: 'مراجعة سياسات الحكومة ووثائق الامتثال',
        link: '/governance',
      },
      compliance: {
        title: 'الامتثال والتدقيق',
        description: 'عرض إطار الامتثال ونتائج التدقيق',
        link: '/compliance',
      },
      financialReports: {
        title: 'التقارير المالية',
        description: 'الوصول إلى بيانات الميزانية الشفافة والتدقيق',
        link: '/financial-reports',
      },
    },
  },
};

export default function CharityRegistrationPage({ params }: { params: { locale: Locale } }) {
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
        borderLeft: ar ? 'none' : '4px solid ' + royalColors.hashemiteGold,
        borderRight: ar ? '4px solid ' + royalColors.hashemiteGold : 'none',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            margin: '0 0 16px 0',
          }}>
            {content.breadcrumb}
          </p>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 800,
            fontFamily: '"Garamond", serif',
            margin: '0 0 16px 0',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.4,
            margin: 0,
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px' }}>

        {/* Registration Certificate Card */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{
            background: '#ffffff',
            border: '2px solid ' + royalColors.hashemiteGold,
            padding: '48px',
            boxShadow: '0 12px 28px -4px rgba(74, 20, 140, 0.15)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '48px', alignItems: 'center' }}>
              {/* Certificate Image Placeholder */}
              <div style={{
                width: '280px',
                height: '340px',
                backgroundColor: '#f5f1e8',
                border: '2px dashed ' + royalColors.hashemiteGold,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px',
                textAlign: 'center',
                borderRadius: '4px',
              }}>
                <div style={{ fontSize: '48px' }}>📜</div>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: 0,
                  fontStyle: 'italic',
                }}>
                  {ar ? 'صورة شهادة التسجيل الرسمية' : 'Official Registration Certificate Image'}
                </p>
              </div>

              {/* Certificate Details */}
              <div>
                <h2 style={{
                  fontSize: '48px',
                  fontFamily: '"Garamond", serif',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  margin: '0 0 32px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {content.registrationCard.title}
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '32px',
                  marginBottom: '32px',
                }}>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: royalColors.textSecondary,
                      margin: '0 0 8px 0',
                    }}>
                      {content.registrationCard.numberLabel}
                    </p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: royalColors.darkNavy,
                      margin: 0,
                      fontFamily: 'monospace',
                    }}>
                      {content.registrationCard.number}
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: royalColors.textSecondary,
                      margin: '0 0 8px 0',
                    }}>
                      {content.registrationCard.dateLabel}
                    </p>
                    <p style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: royalColors.darkNavy,
                      margin: 0,
                    }}>
                      {content.registrationCard.date}
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: '20px 24px',
                  backgroundColor: '#f5f1e8',
                  borderLeft: ar ? 'none' : '4px solid ' + royalColors.hashemiteGold,
                  borderRight: ar ? '4px solid ' + royalColors.hashemiteGold : 'none',
                }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: royalColors.textSecondary,
                    margin: '0 0 8px 0',
                  }}>
                    {content.registrationCard.statusLabel}
                  </p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1b4332',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}>
                    ✓ {content.registrationCard.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: '"Garamond", serif',
            fontWeight: 700,
            color: royalColors.deepRoyal,
            margin: '0 0 32px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {content.legalInfo.title}
          </h2>

          <div style={{
            background: '#ffffff',
            border: '1px solid ' + royalColors.borderFormal,
            padding: '36px',
            marginBottom: '24px',
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: royalColors.textSecondary,
                  margin: '0 0 12px 0',
                }}>
                  {ar ? 'الاسم الإنجليزي' : 'English Name'}
                </h3>
                <p style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: royalColors.textOfficial,
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {content.legalInfo.name}
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: royalColors.textSecondary,
                  margin: '0 0 12px 0',
                }}>
                  {ar ? 'الاسم العربي' : 'Arabic Name'}
                </h3>
                <p style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: royalColors.textOfficial,
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {content.legalInfo.arabicName}
                </p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid ' + royalColors.borderSubtle, paddingTop: '32px', marginTop: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: royalColors.textSecondary,
                    margin: '0 0 12px 0',
                  }}>
                    {ar ? 'العنوان المسجل' : 'Registered Address'}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: royalColors.textOfficial,
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {content.legalInfo.registeredAddress}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: royalColors.textSecondary,
                    margin: '0 0 12px 0',
                  }}>
                    {ar ? 'سلطة التسجيل' : 'Registration Authority'}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: royalColors.textOfficial,
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {content.legalInfo.registrationAuthority}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Exempt Status */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{
            background: '#001a4d',
            color: '#ffffff',
            border: '2px solid ' + royalColors.hashemiteGold,
            padding: '48px',
            borderLeft: ar ? 'none' : '4px solid ' + royalColors.hashemiteGold,
            borderRight: ar ? '4px solid ' + royalColors.hashemiteGold : 'none',
            boxShadow: '0 12px 28px 0 rgba(0, 0, 0, 0.2)',
          }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: '"Garamond", serif',
              fontWeight: 700,
              color: royalColors.hashemiteGold,
              margin: '0 0 32px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              {content.taxStatus.title}
            </h2>

            <div style={{
              fontSize: '20px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}>
              <p style={{ margin: '0 0 16px 0', fontWeight: 600, color: '#d4af37' }}>
                {content.taxStatus.status}
              </p>
              <p style={{ margin: 0 }}>
                {content.taxStatus.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(212, 175, 55, 0.3)',
            }}>
              <div>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: 'rgba(212, 175, 55, 0.8)',
                  margin: '0 0 12px 0',
                }}>
                  {content.taxStatus.tfnLabel}
                </p>
                <p style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: royalColors.hashemiteGold,
                  margin: 0,
                  fontFamily: 'monospace',
                }}>
                  {content.taxStatus.tfn}
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                }}>
                  {content.taxStatus.validFrom}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* License Documents */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: '"Garamond", serif',
            fontWeight: 700,
            color: royalColors.deepRoyal,
            margin: '0 0 16px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {content.documents.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            lineHeight: 1.6,
          }}>
            {content.documents.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}>
            {content.documents.items.map((doc, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid ' + royalColors.borderFormal,
                padding: '32px',
                boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
                transition: 'all 200ms ease-in-out',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                  {doc.icon}
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontFamily: '"Garamond", serif',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  margin: '0 0 12px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {doc.name}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0 0 16px 0',
                  lineHeight: 1.6,
                }}>
                  {doc.description}
                </p>

                <div style={{
                  fontSize: '12px',
                  color: royalColors.textSecondary,
                  margin: '16px 0',
                  paddingTop: '16px',
                  borderTop: '1px solid ' + royalColors.borderSubtle,
                }}>
                  <p style={{ margin: '0 0 4px 0' }}>
                    <strong>{ar ? 'صادر من:' : 'Issued By:'}</strong> {doc.issued}
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>{ar ? 'التاريخ:' : 'Date:'}</strong> {doc.date}
                  </p>
                </div>

                <a href={doc.downloadUrl} style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  padding: '12px 24px',
                  backgroundColor: royalColors.deepRoyal,
                  color: royalColors.hashemiteGold,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease-in-out',
                }}>
                  {ar ? 'تحميل' : 'Download'} ↓
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Regulatory Certifications */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: '"Garamond", serif',
            fontWeight: 700,
            color: royalColors.deepRoyal,
            margin: '0 0 16px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {content.certifications.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            lineHeight: 1.6,
          }}>
            {content.certifications.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {content.certifications.items.map((cert, idx) => (
              <div key={idx} style={{
                background: '#f5f1e8',
                border: '1px solid ' + royalColors.borderFormal,
                padding: '32px',
                borderLeft: ar ? 'none' : '4px solid ' + royalColors.deepRoyal,
                borderRight: ar ? '4px solid ' + royalColors.deepRoyal : 'none',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '24px',
                alignItems: 'start',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: royalColors.deepRoyal,
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '20px',
                }}>
                  {cert.icon}
                </div>

                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: '"Garamond", serif',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    margin: '0 0 8px 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {cert.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    margin: '0 0 12px 0',
                    lineHeight: 1.6,
                  }}>
                    {cert.description}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '24px',
                    fontSize: '12px',
                    color: royalColors.textSecondary,
                  }}>
                    <div>
                      <p style={{ fontWeight: 600, margin: '0 0 4px 0' }}>
                        {ar ? 'من:' : 'Issued By:'}
                      </p>
                      <p style={{ margin: 0 }}>{cert.issuedBy}</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, margin: '0 0 4px 0' }}>
                        {ar ? 'صالح من:' : 'Valid From:'}
                      </p>
                      <p style={{ margin: 0 }}>{cert.validFrom}</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, margin: '0 0 4px 0' }}>
                        {ar ? 'حتى:' : 'Valid Until:'}
                      </p>
                      <p style={{ margin: 0 }}>{cert.validTo}</p>
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  padding: '12px 20px',
                  backgroundColor: '#1b4332',
                  color: 'white',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Government Verification */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{
            background: '#ffffff',
            border: '2px solid ' + royalColors.hashemiteGold,
            padding: '48px',
            textAlign: 'center',
            boxShadow: '0 12px 28px -4px rgba(74, 20, 140, 0.15)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🏛️</div>

            <h2 style={{
              fontSize: '48px',
              fontFamily: '"Garamond", serif',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              margin: '0 0 16px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              {content.verification.title}
            </h2>

            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              margin: '0 0 32px 0',
              lineHeight: 1.6,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              {content.verification.description}
            </p>

            <a href={content.verification.verifyUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '18px 48px',
              backgroundColor: royalColors.deepRoyal,
              color: royalColors.hashemiteGold,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 200ms ease-in-out',
              boxShadow: '0 8px 20px -2px rgba(74, 20, 140, 0.2)',
            }}>
              {content.verification.verifyButton} →
            </a>

            <p style={{
              fontSize: '12px',
              color: royalColors.textSecondary,
              margin: '24px 0 0 0',
              fontStyle: 'italic',
            }}>
              {content.verification.note}
            </p>
          </div>
        </section>

        {/* Related Sections */}
        <section style={{ paddingBottom: '60px' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: '"Garamond", serif',
            fontWeight: 700,
            color: royalColors.deepRoyal,
            margin: '0 0 48px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            {ar ? 'الأقسام ذات الصلة' : 'Related Sections'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}>
            {Object.values(content.sections).map((section, idx) => (
              <Link key={idx} href={`${base}${section.link}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid ' + royalColors.borderFormal,
                  padding: '36px',
                  borderTop: '4px solid ' + royalColors.deepRoyal,
                  transition: 'all 200ms ease-in-out',
                  cursor: 'pointer',
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: '"Garamond", serif',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    margin: '0 0 12px 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {section.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {section.description}
                  </p>

                  <p style={{
                    fontSize: '14px',
                    color: royalColors.deepRoyal,
                    margin: '16px 0 0 0',
                    fontWeight: 600,
                  }}>
                    {ar ? 'المزيد →' : 'Learn More →'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
