'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

interface DepartmentData {
  idEn: string;
  idAr: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  headEn: string;
  headAr: string;
  staffCountEn: string;
  staffCountAr: string;
  prioritiesEn: string[];
  prioritiesAr: string[];
  contactEmail: string;
}

const departmentsData: Record<string, DepartmentData> = {
  healthcare: {
    idEn: 'healthcare',
    idAr: 'healthcare',
    nameEn: 'Healthcare Programs',
    nameAr: 'برامج الصحة',
    descriptionEn:
      'Providing comprehensive medical services, health initiatives, and wellness programs across our operating regions.',
    descriptionAr:
      'تقديم خدمات طبية شاملة ومبادرات صحية وبرامج عافية في جميع مناطق عملياتنا.',
    icon: '🏥',
    headEn: 'Amira Al-Kaabi - Healthcare Program Manager',
    headAr: 'أميرة الكعبي - مديرة برنامج الصحة',
    staffCountEn: '12+ healthcare professionals',
    staffCountAr: '12+ متخصص في الرعاية الصحية',
    prioritiesEn: [
      'Emergency medical response and disaster relief',
      'Preventive healthcare and vaccination programs',
      'Maternal and child health initiatives',
      'Health worker training and capacity building',
      'Mental health and psychosocial support services',
      'Chronic disease management programs',
    ],
    prioritiesAr: [
      'الاستجابة الطبية الطارئة وإغاثة الكوارث',
      'الرعاية الصحية الوقائية وبرامج التطعيم',
      'مبادرات صحة الأم والطفل',
      'تدريب العاملين الصحيين وبناء القدرات',
      'خدمات الصحة النفسية والدعم النفسي والاجتماعي',
      'برامج إدارة الأمراض المزمنة',
    ],
    contactEmail: 'healthcare@jhco.org',
  },
  education: {
    idEn: 'education',
    idAr: 'education',
    nameEn: 'Education Programs',
    nameAr: 'برامج التعليم',
    descriptionEn:
      'Implementing educational initiatives, scholarships, and learning centers to ensure quality education access for vulnerable populations.',
    descriptionAr:
      'تنفيذ المبادرات التعليمية والمنح الدراسية ومراكز التعليم لضمان وصول السكان الضعفاء إلى التعليم الجودة.',
    icon: '📚',
    headEn: 'Ibrahim Al-Hajri - Education Director',
    headAr: 'إبراهيم الحجري - مدير التعليم',
    staffCountEn: '15+ education specialists',
    staffCountAr: '15+ متخصص في التعليم',
    prioritiesEn: [
      'Scholarship programs for disadvantaged students',
      'School rehabilitation and infrastructure development',
      'Teacher training and curriculum development',
      'Early childhood development programs',
      'Vocational and skills training initiatives',
      'Education technology and digital literacy programs',
    ],
    prioritiesAr: [
      'برامج المنح الدراسية للطلاب المحرومين',
      'إعادة تأهيل المدارس وتطوير البنية التحتية',
      'تدريب المعلمين وتطوير المناهج الدراسية',
      'برامج التنمية في مرحلة الطفولة المبكرة',
      'مبادرات التدريب المهني والمهارات',
      'برامج تكنولوجيا التعليم والقراءة والكتابة الرقمية',
    ],
    contactEmail: 'education@jhco.org',
  },
  operations: {
    idEn: 'operations',
    idAr: 'operations',
    nameEn: 'Operations',
    nameAr: 'العمليات',
    descriptionEn:
      'Coordinating logistics, supply chain management, and field operations to ensure efficient program delivery.',
    descriptionAr:
      'تنسيق الخدمات اللوجستية وإدارة سلسلة التوريد والعمليات الميدانية لضمان تنفيذ البرنامج بكفاءة.',
    icon: '⚙️',
    headEn: 'Mohammed Al-Rashid - Operations Director',
    headAr: 'محمد الراشد - مدير العمليات',
    staffCountEn: '8+ operations staff',
    staffCountAr: '8+ موظفي عمليات',
    prioritiesEn: [
      'Supply chain and logistics management',
      'Warehouse and inventory management',
      'Field coordination and safety protocols',
      'Operational systems and technology',
      'Partnership coordination with local entities',
      'Resource allocation and budget management',
    ],
    prioritiesAr: [
      'إدارة سلسلة التوريد والخدمات اللوجستية',
      'إدارة المستودعات والمخزون',
      'التنسيق الميداني وبروتوكولات السلامة',
      'الأنظمة التشغيلية والتكنولوجيا',
      'تنسيق الشراكات مع الكيانات المحلية',
      'تخصيص الموارد وإدارة الميزانية',
    ],
    contactEmail: 'operations@jhco.org',
  },
};

export default function DepartmentPage({
  params,
}: {
  params: Promise<{ locale: string; dept: string }>;
}) {
  const [locale, setLocale] = useState<string>('');
  const [dept, setDept] = useState<string>('');

  useEffect(() => {
    params.then((p) => {
      setLocale(p.locale);
      setDept(p.dept);
    });
  }, [params]);

  if (!locale || !dept) return null;

  const ar = locale === 'ar';
  const dir = ar ? 'rtl' : 'ltr';

  const deptData = departmentsData[dept];

  if (!deptData) {
    return (
      <div dir={dir} style={{ minHeight: '100vh', background: royalColors.bgLight, padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', color: royalColors.deepRoyal, marginBottom: '24px' }}>
            {ar ? 'لم يتم العثور على القسم' : 'Department Not Found'}
          </h1>
          <Link href={ar ? '/ar/staff-directory' : '/en/staff-directory'}>
            <button
              style={{
                padding: '14px 32px',
                background: royalColors.deepRoyal,
                color: '#ffffff',
                border: 'none',
                borderRadius: borderRadius.button,
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {ar ? 'العودة إلى دليل الموظفين' : 'Back to Staff Directory'}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const content = {
    en: {
      backLink: 'Back to Staff Directory',
      departments: 'Department Details',
      departmentHead: 'Department Head',
      staffCount: 'Team Size',
      keyPriorities: 'Key Priorities & Focus Areas',
      missions: 'Our Mission',
      contact: 'Contact Department',
      relatedDepartments: 'Related Departments',
    },
    ar: {
      backLink: 'العودة إلى دليل الموظفين',
      departments: 'تفاصيل القسم',
      departmentHead: 'رئيس القسم',
      staffCount: 'حجم الفريق',
      keyPriorities: 'الأولويات الرئيسية ومجالات التركيز',
      missions: 'مهمتنا',
      contact: 'اتصل بالقسم',
      relatedDepartments: 'الأقسام ذات الصلة',
    },
  };

  const t = content[ar ? 'ar' : 'en'];

  return (
    <div dir={dir} style={{ minHeight: '100vh', background: royalColors.bgLight }}>
      {/* Breadcrumb */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
          padding: '16px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link
            href={ar ? '/ar/staff-directory' : '/en/staff-directory'}
            style={{
              color: royalColors.deepRoyal,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ← {t.backLink}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: '#ffffff',
          padding: '80px 24px',
          textAlign: 'center',
          borderBottom: `4px solid ${royalColors.hashemiteGold}`,
        }}
      >
        <div style={{ fontSize: '72px', marginBottom: '24px' }}>{deptData.icon}</div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            fontFamily: '"Garamond", "Georgia", serif',
            letterSpacing: '0.5px',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}
        >
          {ar ? deptData.nameAr : deptData.nameEn}
        </h1>
        <p
          style={{
            fontSize: '18px',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {ar ? deptData.descriptionAr : deptData.descriptionEn}
        </p>
      </section>

      {/* Key Information */}
      <section
        style={{
          background: '#ffffff',
          padding: '64px 24px',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            {/* Department Head Card */}
            <div
              style={{
                background: '#ffffff',
                border: `2px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.card,
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: royalColors.textSecondary,
                  marginBottom: '16px',
                }}
              >
                👤 {t.departmentHead}
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  fontFamily: '"Garamond", "Georgia", serif',
                }}
              >
                {ar ? deptData.headAr : deptData.headEn}
              </p>
            </div>

            {/* Staff Count Card */}
            <div
              style={{
                background: '#ffffff',
                border: `2px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.card,
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: royalColors.textSecondary,
                  marginBottom: '16px',
                }}
              >
                👥 {t.staffCount}
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                }}
              >
                {ar ? deptData.staffCountAr : deptData.staffCountEn}
              </p>
            </div>

            {/* Contact Card */}
            <div
              style={{
                background: '#ffffff',
                border: `2px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.card,
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: royalColors.textSecondary,
                  marginBottom: '16px',
                }}
              >
                ✉️ {t.contact}
              </h3>
              <a
                href={`mailto:${deptData.contactEmail}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: royalColors.deepRoyal,
                  textDecoration: 'none',
                }}
              >
                {deptData.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Priorities Section */}
      <section
        style={{
          background: royalColors.bgRefined,
          padding: '64px 24px',
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", "Georgia", serif',
              color: royalColors.deepRoyal,
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            {t.keyPriorities}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {(ar ? deptData.prioritiesAr : deptData.prioritiesEn).map((priority, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${royalColors.borderFormal}`,
                  borderRadius: borderRadius.card,
                  padding: '28px',
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    minWidth: '40px',
                    textAlign: 'center',
                  }}
                >
                  ✓
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: royalColors.darkGrayText,
                    margin: 0,
                  }}
                >
                  {priority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: '#ffffff',
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 700,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '24px',
              letterSpacing: '0.5px',
            }}
          >
            {ar ? 'هل تريد العمل معنا؟' : 'Want to Work With Us?'}
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            {ar
              ? 'اتصل بقسمنا للاستفسار عن الفرص والشراكات'
              : 'Contact our department to inquire about opportunities and partnerships'}
          </p>
          <a
            href={`mailto:${deptData.contactEmail}`}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: royalColors.hashemiteGold,
              color: royalColors.deepRoyal,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              borderRadius: borderRadius.button,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 200ms ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f4c430';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = royalColors.hashemiteGold;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {ar ? '📧 أرسل رسالة' : '📧 Send a Message'}
          </a>
        </div>
      </section>
    </div>
  );
}
