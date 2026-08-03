'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius, componentStyles } from '@/lib/royalDesign';

interface StaffMember {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  departmentEn: string;
  departmentAr: string;
  email: string;
  phone?: string;
  photoPlaceholder: string;
  bio?: string;
  bioAr?: string;
}

interface Department {
  idEn: string;
  idAr: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  headEn: string;
  headAr: string;
  memberCount: number;
}

const staffData: StaffMember[] = [
  {
    id: '1',
    nameEn: 'Dr. Ahmed Al-Hashemi',
    nameAr: 'د. أحمد الهاشمي',
    titleEn: 'Executive Director',
    titleAr: 'المدير التنفيذي',
    departmentEn: 'Executive Leadership',
    departmentAr: 'القيادة التنفيذية',
    email: 'a.alhashemi@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👨‍💼',
    bio: 'Visionary leader with 25+ years of humanitarian experience across international organizations.',
    bioAr: 'قائد رؤيوي بخبرة 25+ سنة في العمل الإنساني عبر المنظمات الدولية.',
  },
  {
    id: '2',
    nameEn: 'Fatima Al-Mansouri',
    nameAr: 'فاطمة المنصوري',
    titleEn: 'Deputy Director',
    titleAr: 'نائبة المدير',
    departmentEn: 'Executive Leadership',
    departmentAr: 'القيادة التنفيذية',
    email: 'f.almansouri@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👩‍💼',
    bio: 'Strategic leader driving program innovation and organizational expansion.',
    bioAr: 'مفكرة استراتيجية تقود الابتكار البرامجي والتوسع التنظيمي.',
  },
  {
    id: '3',
    nameEn: 'Mohammed Al-Rashid',
    nameAr: 'محمد الراشد',
    titleEn: 'Operations Director',
    titleAr: 'مدير العمليات',
    departmentEn: 'Operations',
    departmentAr: 'العمليات',
    email: 'm.alrashid@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👨‍💼',
    bio: 'Expert in coordinating large-scale humanitarian initiatives and logistics management.',
    bioAr: 'خبير في تنسيق المبادرات الإنسانية على نطاق واسع وإدارة الخدمات اللوجستية.',
  },
  {
    id: '4',
    nameEn: 'Dr. Layla Al-Noor',
    nameAr: 'د. ليلى النور',
    titleEn: 'Head of Programs',
    titleAr: 'مديرة البرامج',
    departmentEn: 'Programs',
    departmentAr: 'البرامج',
    email: 'l.alnoor@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👩‍⚕️',
    bio: 'Passionate about sustainable development and community empowerment initiatives.',
    bioAr: 'شغوفة بالتنمية المستدامة وتمكين المجتمعات.',
  },
  {
    id: '5',
    nameEn: 'Sarah Al-Khalil',
    nameAr: 'سارة الخليل',
    titleEn: 'Finance Director',
    titleAr: 'مديرة المالية',
    departmentEn: 'Finance & Administration',
    departmentAr: 'المالية والإدارة',
    email: 's.alkhalil@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👩‍💼',
    bio: 'Financial leadership ensuring transparency and accountability in all operations.',
    bioAr: 'قيادة مالية تضمن الشفافية والمساءلة في جميع العمليات.',
  },
  {
    id: '6',
    nameEn: 'Hassan Al-Dosari',
    nameAr: 'حسن الدوسري',
    titleEn: 'Communications Manager',
    titleAr: 'مدير الاتصالات',
    departmentEn: 'Communications',
    departmentAr: 'الاتصالات',
    email: 'h.aldosari@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👨‍💼',
    bio: 'Leading organizational communications and media engagement strategies.',
    bioAr: 'قيادة استراتيجيات الاتصالات التنظيمية والتفاعل الإعلامي.',
  },
  {
    id: '7',
    nameEn: 'Amira Al-Kaabi',
    nameAr: 'أميرة الكعبي',
    titleEn: 'Healthcare Program Manager',
    titleAr: 'مديرة برنامج الصحة',
    departmentEn: 'Healthcare Programs',
    departmentAr: 'برامج الصحة',
    email: 'a.alkaabi@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👩‍⚕️',
    bio: 'Implementing comprehensive health initiatives across program regions.',
    bioAr: 'تنفيذ المبادرات الصحية الشاملة عبر مناطق البرامج.',
  },
  {
    id: '8',
    nameEn: 'Ibrahim Al-Hajri',
    nameAr: 'إبراهيم الحجري',
    titleEn: 'Education Director',
    titleAr: 'مدير التعليم',
    departmentEn: 'Education Programs',
    departmentAr: 'برامج التعليم',
    email: 'i.alhajri@jhco.org',
    phone: '+962-6-XXX-XXXX',
    photoPlaceholder: '👨‍🏫',
    bio: 'Developing and managing educational programs and scholarship initiatives.',
    bioAr: 'تطوير وإدارة البرامج التعليمية ومبادرات المنح الدراسية.',
  },
];

const departments: Department[] = [
  {
    idEn: 'leadership',
    idAr: 'leadership',
    nameEn: 'Executive Leadership',
    nameAr: 'القيادة التنفيذية',
    descriptionEn: 'Strategic leadership and organizational direction',
    descriptionAr: 'القيادة الاستراتيجية والتوجيه التنظيمي',
    icon: '👑',
    headEn: 'Dr. Ahmed Al-Hashemi (Executive Director)',
    headAr: 'د. أحمد الهاشمي (المدير التنفيذي)',
    memberCount: 2,
  },
  {
    idEn: 'operations',
    idAr: 'operations',
    nameEn: 'Operations',
    nameAr: 'العمليات',
    descriptionEn: 'Logistics, coordination, and field operations management',
    descriptionAr: 'إدارة الخدمات اللوجستية والتنسيق والعمليات الميدانية',
    icon: '⚙️',
    headEn: 'Mohammed Al-Rashid (Operations Director)',
    headAr: 'محمد الراشد (مدير العمليات)',
    memberCount: 1,
  },
  {
    idEn: 'programs',
    idAr: 'programs',
    nameEn: 'Programs',
    nameAr: 'البرامج',
    descriptionEn: 'Program strategy and cross-departmental coordination',
    descriptionAr: 'استراتيجية البرنامج والتنسيق عبر الإدارات',
    icon: '🎯',
    headEn: 'Dr. Layla Al-Noor (Head of Programs)',
    headAr: 'د. ليلى النور (مديرة البرامج)',
    memberCount: 1,
  },
  {
    idEn: 'finance',
    idAr: 'finance',
    nameEn: 'Finance & Administration',
    nameAr: 'المالية والإدارة',
    descriptionEn: 'Financial management, budgeting, and administrative operations',
    descriptionAr: 'إدارة مالية وميزانيات وعمليات إدارية',
    icon: '💼',
    headEn: 'Sarah Al-Khalil (Finance Director)',
    headAr: 'سارة الخليل (مديرة المالية)',
    memberCount: 1,
  },
  {
    idEn: 'communications',
    idAr: 'communications',
    nameEn: 'Communications',
    nameAr: 'الاتصالات',
    descriptionEn: 'Media relations, public communications, and stakeholder engagement',
    descriptionAr: 'العلاقات الإعلامية والاتصالات العامة والتفاعل مع أصحاب المصلحة',
    icon: '📢',
    headEn: 'Hassan Al-Dosari (Communications Manager)',
    headAr: 'حسن الدوسري (مدير الاتصالات)',
    memberCount: 1,
  },
  {
    idEn: 'healthcare',
    idAr: 'healthcare',
    nameEn: 'Healthcare Programs',
    nameAr: 'برامج الصحة',
    descriptionEn: 'Medical services, health initiatives, and wellness programs',
    descriptionAr: 'الخدمات الطبية والمبادرات الصحية وبرامج العافية',
    icon: '🏥',
    headEn: 'Amira Al-Kaabi (Healthcare Program Manager)',
    headAr: 'أميرة الكعبي (مديرة برنامج الصحة)',
    memberCount: 1,
  },
  {
    idEn: 'education',
    idAr: 'education',
    nameEn: 'Education Programs',
    nameAr: 'برامج التعليم',
    descriptionEn: 'Educational initiatives, scholarships, and learning centers',
    descriptionAr: 'المبادرات التعليمية والمنح الدراسية ومراكز التعليم',
    icon: '📚',
    headEn: 'Ibrahim Al-Hajri (Education Director)',
    headAr: 'إبراهيم الحجري (مدير التعليم)',
    memberCount: 1,
  },
];

export default function StaffDirectory({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  // Handle params
  useEffect(() => {
    params.then((p) => setLocale(p.locale));
  }, [params]);

  if (!locale) return null;

  const ar = locale === 'ar';
  const dir = ar ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'Staff Directory',
      subtitle: 'Meet the dedicated professionals behind JHCO\'s humanitarian mission',
      searchPlaceholder: 'Search by name, title, or department...',
      privacyNotice:
        'This directory is designed with privacy in mind. Phone numbers and detailed personal information are available only to authorized staff members.',
      organizationalChart: 'Organizational Structure',
      departments: 'Our Departments',
      allStaff: 'All Staff Members',
      filterByDepartment: 'Filter by Department',
      showAll: 'Show All',
      noResults: 'No staff members found matching your search.',
      contactEmail: 'Contact via email for inquiries.',
      viewDepartment: 'View Department',
      reportingTo: 'Reporting to: Executive Director',
      directoryNote: 'For security and privacy reasons, not all staff members are listed in this public directory.',
      getInTouch: 'Get in Touch',
      contactInfo: 'Please use the main contact form for inquiries about our staff and operations.',
    },
    ar: {
      title: 'دليل الموظفين',
      subtitle: 'التعرف على المتخصصين المكرسين وراء مهمة الهيئة الخيرية الأردنية الهاشمية الإنسانية',
      searchPlaceholder: 'ابحث حسب الاسم أو المسمى الوظيفي أو القسم...',
      privacyNotice:
        'تم تصميم هذا الدليل مع الحرص على الخصوصية. أرقام الهاتف والمعلومات الشخصية التفصيلية متاحة فقط لموظفي الموارد البشرية المصرح لهم.',
      organizationalChart: 'الهيكل التنظيمي',
      departments: 'أقسامنا',
      allStaff: 'جميع الموظفين',
      filterByDepartment: 'تصفية حسب القسم',
      showAll: 'عرض الكل',
      noResults: 'لم يتم العثور على موظفين يطابقون البحث.',
      contactEmail: 'يرجى التواصل عبر البريد الإلكتروني للاستفسارات.',
      viewDepartment: 'عرض القسم',
      reportingTo: 'يقدم التقرير إلى: المدير التنفيذي',
      directoryNote:
        'لأسباب أمنية وخصوصية، لا يتم إدراج جميع الموظفين في هذا الدليل العام.',
      getInTouch: 'تواصل معنا',
      contactInfo: 'يرجى استخدام نموذج الاتصال الرئيسي للاستفسارات حول الموظفين والعمليات.',
    },
  };

  const t = content[ar ? 'ar' : 'en'];

  const filteredStaff = useMemo(() => {
    return staffData.filter((staff) => {
      const searchLower = searchTerm.toLowerCase();
      const name = ar ? staff.nameAr : staff.nameEn;
      const title = ar ? staff.titleAr : staff.titleEn;
      const department = ar ? staff.departmentAr : staff.departmentEn;

      const matchesSearch =
        name.toLowerCase().includes(searchLower) ||
        title.toLowerCase().includes(searchLower) ||
        department.toLowerCase().includes(searchLower);

      const matchesDepartment = !selectedDepartment || department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment, ar]);

  const getStaffDepartment = (staff: StaffMember) => (ar ? staff.departmentAr : staff.departmentEn);

  return (
    <div dir={dir} style={{ minHeight: '100vh', background: royalColors.bgLight }}>
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
          {t.title}
        </h1>
        <p
          style={{
            fontSize: '20px',
            fontWeight: 400,
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}
        >
          {t.subtitle}
        </p>
      </section>

      {/* Privacy Notice Section */}
      <section
        style={{
          background: royalColors.bgRefined,
          padding: '48px 24px',
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              border: `1px solid ${royalColors.borderFormal}`,
              borderLeft: `4px solid ${royalColors.hashemiteGold}`,
              padding: '28px',
              borderRadius: borderRadius.card,
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: royalColors.deepRoyal,
                marginBottom: '12px',
                fontFamily: '"Garamond", "Georgia", serif',
              }}
            >
              🔒 Privacy & Confidentiality
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: royalColors.darkGrayText,
                marginBottom: '0',
              }}
            >
              {t.privacyNotice}
            </p>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: royalColors.textSecondary,
                marginTop: '12px',
                marginBottom: '0',
                fontStyle: 'italic',
              }}
            >
              {t.directoryNote}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section
        style={{
          background: '#ffffff',
          padding: '48px 24px',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '32px' }}>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '16px',
                border: `2px solid ${royalColors.borderFormal}`,
                borderRadius: borderRadius.md,
                fontFamily: 'inherit',
                transition: `border-color 200ms ease`,
                maxWidth: '600px',
                display: 'block',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = royalColors.deepRoyal;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = royalColors.borderFormal;
              }}
            />
          </div>

          {/* Department Filter */}
          <div>
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
              {t.filterByDepartment}
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              <button
                onClick={() => setSelectedDepartment(null)}
                style={{
                  padding: '12px 20px',
                  border: `2px solid ${!selectedDepartment ? royalColors.deepRoyal : royalColors.borderFormal}`,
                  background: !selectedDepartment ? royalColors.deepRoyal : '#ffffff',
                  color: !selectedDepartment ? '#ffffff' : royalColors.deepRoyal,
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: borderRadius.md,
                  transition: 'all 200ms ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {t.showAll}
              </button>
              {departments.map((dept) => (
                <button
                  key={dept.idEn}
                  onClick={() => setSelectedDepartment(ar ? dept.nameAr : dept.nameEn)}
                  style={{
                    padding: '12px 20px',
                    border: `2px solid ${
                      selectedDepartment === (ar ? dept.nameAr : dept.nameEn)
                        ? royalColors.deepRoyal
                        : royalColors.borderFormal
                    }`,
                    background:
                      selectedDepartment === (ar ? dept.nameAr : dept.nameEn)
                        ? royalColors.deepRoyal
                        : '#ffffff',
                    color:
                      selectedDepartment === (ar ? dept.nameAr : dept.nameEn)
                        ? '#ffffff'
                        : royalColors.deepRoyal,
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: borderRadius.md,
                    transition: 'all 200ms ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {ar ? dept.nameAr : dept.nameEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid Section */}
      <section
        style={{
          background: '#ffffff',
          padding: '64px 24px',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
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
            {t.allStaff}
          </h2>

          {filteredStaff.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '48px 24px',
                background: royalColors.bgRefined,
                borderRadius: borderRadius.card,
                border: `1px solid ${royalColors.borderSubtle}`,
              }}
            >
              <p style={{ fontSize: '18px', color: royalColors.textSecondary, marginBottom: '12px' }}>
                {t.noResults}
              </p>
              <p style={{ fontSize: '14px', color: royalColors.textSecondary }}>
                {t.contactEmail}
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '28px',
              }}
            >
              {filteredStaff.map((staff) => (
                <div
                  key={staff.id}
                  style={{
                    background: '#ffffff',
                    border: `1px solid ${royalColors.borderFormal}`,
                    borderRadius: borderRadius.card,
                    overflow: 'hidden',
                    boxShadow: shadows.md,
                    transition: `all 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    cursor: 'pointer',
                    transform: 'translateY(0)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = shadows.lg;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = shadows.md;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Photo Placeholder */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
                      padding: '48px 24px',
                      textAlign: 'center',
                      fontSize: '72px',
                      borderBottom: `1px solid ${royalColors.borderFormal}`,
                    }}
                  >
                    {staff.photoPlaceholder}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '28px' }}>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        fontFamily: '"Garamond", "Georgia", serif',
                        color: royalColors.deepRoyal,
                        marginBottom: '4px',
                      }}
                    >
                      {ar ? staff.nameAr : staff.nameEn}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        color: royalColors.textSecondary,
                        marginBottom: '8px',
                      }}
                    >
                      {ar ? staff.titleAr : staff.titleEn}
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: royalColors.compassionTeal,
                        marginBottom: '16px',
                        fontWeight: 500,
                      }}
                    >
                      {getStaffDepartment(staff)}
                    </p>

                    {/* Bio */}
                    {staff.bio && (
                      <p
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.5,
                          color: royalColors.darkGrayText,
                          marginBottom: '16px',
                        }}
                      >
                        {ar ? staff.bioAr : staff.bio}
                      </p>
                    )}

                    {/* Contact */}
                    <div
                      style={{
                        paddingTop: '16px',
                        borderTop: `1px solid ${royalColors.borderSubtle}`,
                      }}
                    >
                      <a
                        href={`mailto:${staff.email}`}
                        style={{
                          fontSize: '13px',
                          color: royalColors.deepRoyal,
                          textDecoration: 'none',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        ✉️ {staff.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '14px', color: royalColors.textSecondary }}>
              {ar ? 'عرض' : 'Showing'} <strong>{filteredStaff.length}</strong> {ar ? 'من' : 'of'}{' '}
              <strong>{staffData.length}</strong> {ar ? 'الموظفين' : 'staff members'}
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Chart Section */}
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
            {t.organizationalChart}
          </h2>

          {/* Simple Hierarchical Text-Based Chart */}
          <div
            style={{
              background: '#ffffff',
              border: `2px solid ${royalColors.hashemiteGold}`,
              borderRadius: borderRadius.card,
              padding: '48px',
              fontFamily: 'monospace',
              fontSize: '14px',
              lineHeight: 1.8,
              color: royalColors.darkGrayText,
              overflowX: 'auto',
            }}
          >
            <pre
              style={{
                fontFamily: 'monospace',
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
              }}
            >
              {`
╔════════════════════════════════════════════════════════════╗
║  JORDAN HASHEMITE CHARITY ORGANIZATION - STRUCTURE        ║
╚════════════════════════════════════════════════════════════╝

                        👑 Board of Trustees
                               │
                    ┌───────────┴───────────┐
                    │                       │
           🏛️ Government Affairs    📋 Royal Patronage
                    │
        ┌───────────┴───────────────┐
        │                           │
   📊 Finance               🎯 Operations
    │                           │
    │                           │
    ├─ Sarah Al-Khalil      └─ Mohammed Al-Rashid
    │  (Finance Director)       (Operations Director)
    │
┌───┴───────────────────────────────────────────┐
│                                               │
👨‍💼 Executive Director                        │
Dr. Ahmed Al-Hashemi                           │
│                                               │
├─ 👩‍💼 Fatima Al-Mansouri (Deputy Director)  │
│                                               │
├─ 🎯 Program Departments                      │
│  ├─ 🏥 Healthcare Program                    │
│  │  └─ Amira Al-Kaabi                       │
│  │                                           │
│  ├─ 📚 Education Program                    │
│  │  └─ Ibrahim Al-Hajri                     │
│  │                                           │
│  ├─ 🍽️ Food Security Program                │
│  │                                           │
│  ├─ 🏠 Shelter & Housing Program            │
│  │                                           │
│  └─ 👩‍💼 Program Coordination                │
│     └─ Dr. Layla Al-Noor (Head of Programs) │
│                                               │
└─ 📢 Communications                            │
   └─ Hassan Al-Dosari                         │
      (Communications Manager)                 │
`}
            </pre>
          </div>

          <p
            style={{
              fontSize: '13px',
              color: royalColors.textSecondary,
              marginTop: '24px',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            *This chart shows key leadership positions. For complete organizational details, please contact HR.
          </p>
        </div>
      </section>

      {/* Departments Grid Section */}
      <section
        style={{
          background: '#ffffff',
          padding: '64px 24px',
          borderBottom: `1px solid ${royalColors.borderSubtle}`,
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
            {t.departments}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {departments.map((dept) => (
              <div
                key={dept.idEn}
                style={{
                  background: '#ffffff',
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  borderRadius: borderRadius.card,
                  padding: '36px',
                  transition: `all 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = shadows.lg;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{dept.icon}</div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    fontFamily: '"Garamond", "Georgia", serif',
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                  }}
                >
                  {ar ? dept.nameAr : dept.nameEn}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: royalColors.darkGrayText,
                    marginBottom: '16px',
                  }}
                >
                  {ar ? dept.descriptionAr : dept.descriptionEn}
                </p>
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: `1px solid ${royalColors.borderSubtle}`,
                  }}
                >
                  <p style={{ fontSize: '13px', color: royalColors.textSecondary, marginBottom: '12px' }}>
                    <strong>{ar ? 'رئيس القسم:' : 'Department Head:'}</strong>
                  </p>
                  <p style={{ fontSize: '13px', color: royalColors.deepRoyal, fontWeight: 600, margin: 0 }}>
                    {ar ? dept.headAr : dept.headEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '24px',
              letterSpacing: '0.5px',
            }}
          >
            {t.getInTouch}
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            {t.contactInfo}
          </p>
          <Link
            href={ar ? '/ar/contact' : '/en/contact'}
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
            {ar ? '📞 اتصل بنا' : '📞 Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
}
