'use client';

import Link from 'next/link';
import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

// GUIDE DATA
const guidesData = {
  en: {
    hero: {
      title: 'Resource Guides',
      subtitle: 'Comprehensive Guides for Programs, Volunteers, and Donors',
      overlay: 'Knowledge empowers action and impact',
    },
    intro: {
      title: 'Our Resource Guides',
      description: 'Access comprehensive guides designed to help you understand our programs, volunteer opportunities, and donation processes. All guides are available for free download in multiple formats.',
    },
    viewToggle: {
      grid: 'Grid View',
      list: 'List View',
    },
    categories: {
      all: 'All Guides',
      programs: 'Program Guides',
      volunteers: 'Volunteer Guides',
      donors: 'Donor Guides',
    },
    noResults: 'No guides found in this category.',
    downloadGuide: 'Download Guide',
    viewDetails: 'View Details',
    relatedGuides: 'Related Guides',
    downloads: 'Downloads',
    rating: 'Rating',
    fileSize: 'File Size',
  },
  ar: {
    hero: {
      title: 'أدلة الموارد',
      subtitle: 'أدلة شاملة للبرامج والمتطوعين والمانحين',
      overlay: 'المعرفة تمكن العمل والتأثير',
    },
    intro: {
      title: 'أدلة الموارد الخاصة بنا',
      description: 'الوصول إلى أدلة شاملة مصممة لمساعدتك على فهم برامجنا وفرص التطوع وعمليات التبرع. جميع الأدلة متاحة للتحميل المجاني بصيغ متعددة.',
    },
    viewToggle: {
      grid: 'عرض شبكة',
      list: 'عرض القائمة',
    },
    categories: {
      all: 'جميع الأدلة',
      programs: 'أدلة البرامج',
      volunteers: 'أدلة المتطوعين',
      donors: 'أدلة المانحين',
    },
    noResults: 'لم يتم العثور على أدلة في هذه الفئة.',
    downloadGuide: 'تحميل الدليل',
    viewDetails: 'عرض التفاصيل',
    relatedGuides: 'أدلة ذات صلة',
    downloads: 'التحميلات',
    rating: 'التقييم',
    fileSize: 'حجم الملف',
  },
};

interface Guide {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: 'programs' | 'volunteers' | 'donors';
  fileSize: string;
  downloads: number;
  rating: number;
  reviews: number;
  format: string;
  pdfUrl: string;
  relatedGuides: string[];
}

const guides: Guide[] = [
  {
    id: 'pg-001',
    titleEn: 'Food Security Program Overview',
    titleAr: 'نظرة عامة على برنامج الأمن الغذائي',
    descriptionEn: 'Comprehensive guide to our food security initiatives, including project locations, beneficiary criteria, and sustainability practices.',
    descriptionAr: 'دليل شامل لمبادراتنا في الأمن الغذائي، بما في ذلك مواقع المشاريع ومعايير المستفيدين وممارسات الاستدامة.',
    category: 'programs',
    fileSize: '2.4 MB',
    downloads: 3456,
    rating: 4.8,
    reviews: 142,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['pg-002', 'pg-003'],
  },
  {
    id: 'pg-002',
    titleEn: 'Healthcare & Wellness Programs',
    titleAr: 'برامج الصحة والعافية',
    descriptionEn: 'Detailed overview of our healthcare services, mobile clinics, vaccination programs, and maternal health initiatives.',
    descriptionAr: 'نظرة عامة مفصلة على خدماتنا الصحية والعيادات المتنقلة وبرامج التطعيم ومبادرات صحة الأم.',
    category: 'programs',
    fileSize: '3.1 MB',
    downloads: 2891,
    rating: 4.7,
    reviews: 118,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['pg-001', 'pg-004'],
  },
  {
    id: 'pg-003',
    titleEn: 'Education & Youth Programs',
    titleAr: 'برامج التعليم والشباب',
    descriptionEn: 'Complete guide to our education initiatives, scholarships, vocational training, and youth development programs.',
    descriptionAr: 'دليل كامل لمبادرات التعليم والمنح الدراسية والتدريب المهني وبرامج تنمية الشباب.',
    category: 'programs',
    fileSize: '2.8 MB',
    downloads: 2234,
    rating: 4.9,
    reviews: 156,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['pg-002', 'pg-005'],
  },
  {
    id: 'pg-004',
    titleEn: 'Emergency Response Framework',
    titleAr: 'إطار الاستجابة للطوارئ',
    descriptionEn: 'Guide to our emergency response protocols, disaster relief operations, and crisis management procedures.',
    descriptionAr: 'دليل بروتوكولات الاستجابة للطوارئ وعمليات الإغاثة من الكوارث وإجراءات إدارة الأزمات.',
    category: 'programs',
    fileSize: '1.9 MB',
    downloads: 1876,
    rating: 4.6,
    reviews: 94,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['pg-001', 'pg-003'],
  },
  {
    id: 'pg-005',
    titleEn: 'Women Empowerment & Gender Equality',
    titleAr: 'تمكين المرأة والمساواة بين الجنسين',
    descriptionEn: 'Comprehensive guide to our gender equality initiatives, women empowerment projects, and inclusive development programs.',
    descriptionAr: 'دليل شامل لمبادرات المساواة بين الجنسين ومشاريع تمكين المرأة وبرامج التنمية الشاملة.',
    category: 'programs',
    fileSize: '2.6 MB',
    downloads: 1654,
    rating: 4.8,
    reviews: 127,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['pg-002', 'pg-004'],
  },
  {
    id: 'vg-001',
    titleEn: 'Volunteer Orientation Guide',
    titleAr: 'دليل توجيه المتطوعين',
    descriptionEn: 'Essential guide for new volunteers including organizational values, expectations, safety protocols, and role descriptions.',
    descriptionAr: 'دليل أساسي للمتطوعين الجدد يتضمن القيم التنظيمية والتوقعات وبروتوكولات السلامة ووصف الأدوار.',
    category: 'volunteers',
    fileSize: '1.5 MB',
    downloads: 5432,
    rating: 4.9,
    reviews: 287,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['vg-002', 'vg-003'],
  },
  {
    id: 'vg-002',
    titleEn: 'Field Volunteer Manual',
    titleAr: 'دليل المتطوع الميداني',
    descriptionEn: 'Detailed manual for field volunteers covering daily responsibilities, community engagement, cultural sensitivity, and reporting requirements.',
    descriptionAr: 'دليل مفصل للمتطوعين الميدانيين يغطي المسؤوليات اليومية والمشاركة المجتمعية والحساسية الثقافية ومتطلبات الإبلاغ.',
    category: 'volunteers',
    fileSize: '2.2 MB',
    downloads: 3876,
    rating: 4.7,
    reviews: 203,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['vg-001', 'vg-004'],
  },
  {
    id: 'vg-003',
    titleEn: 'Volunteer Safety & Health Guidelines',
    titleAr: 'معايير سلامة وصحة المتطوعين',
    descriptionEn: 'Comprehensive safety guide covering health protocols, emergency procedures, personal protection, and incident reporting.',
    descriptionAr: 'دليل السلامة الشامل الذي يغطي البروتوكولات الصحية والإجراءات الطارئة والحماية الشخصية والإبلاغ عن الحوادث.',
    category: 'volunteers',
    fileSize: '1.8 MB',
    downloads: 2987,
    rating: 4.8,
    reviews: 156,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['vg-001', 'vg-002'],
  },
  {
    id: 'vg-004',
    titleEn: 'Skills Development & Training Programs',
    titleAr: 'برامج تطوير المهارات والتدريب',
    descriptionEn: 'Guide to volunteer training opportunities, skill development programs, and professional growth pathways.',
    descriptionAr: 'دليل فرص التدريب والبرامج لتطوير المهارات ومسارات النمو المهني للمتطوعين.',
    category: 'volunteers',
    fileSize: '2.3 MB',
    downloads: 2154,
    rating: 4.6,
    reviews: 112,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['vg-003', 'vg-002'],
  },
  {
    id: 'dg-001',
    titleEn: 'Donor Impact Report Template',
    titleAr: 'نموذج تقرير تأثير المانح',
    descriptionEn: 'Detailed framework showing how your donations create measurable impact with specific project outcomes and beneficiary stories.',
    descriptionAr: 'إطار عمل مفصل يوضح كيف تخلق تبرعاتك تأثيراً قابلاً للقياس مع نتائج المشاريع المحددة وقصص المستفيدين.',
    category: 'donors',
    fileSize: '1.6 MB',
    downloads: 4123,
    rating: 4.9,
    reviews: 234,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['dg-002', 'dg-003'],
  },
  {
    id: 'dg-002',
    titleEn: 'Tax Deduction & Donation Guide',
    titleAr: 'دليل الخصم الضريبي والتبرع',
    descriptionEn: 'Comprehensive guide to donation options, tax deductibility, financial documentation, and contribution strategies.',
    descriptionAr: 'دليل شامل لخيارات التبرع والخصم الضريبي والتوثيق المالي واستراتيجيات المساهمة.',
    category: 'donors',
    fileSize: '1.4 MB',
    downloads: 3456,
    rating: 4.8,
    reviews: 189,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['dg-001', 'dg-004'],
  },
  {
    id: 'dg-003',
    titleEn: 'Corporate Partnership Opportunities',
    titleAr: 'فرص الشراكة المؤسسية',
    descriptionEn: 'Guide to corporate giving programs, employee matching, cause sponsorships, and strategic partnership development.',
    descriptionAr: 'دليل برامج المنح المؤسسية والمطابقة للموظفين ورعاية الأسباب وتطوير الشراكات الاستراتيجية.',
    category: 'donors',
    fileSize: '2.1 MB',
    downloads: 2765,
    rating: 4.7,
    reviews: 147,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['dg-001', 'dg-002'],
  },
  {
    id: 'dg-004',
    titleEn: 'Planned Giving & Legacy Giving',
    titleAr: 'التبرع المخطط والإرث',
    descriptionEn: 'Educational guide on planned giving strategies, bequests, trusts, endowments, and creating lasting philanthropic legacies.',
    descriptionAr: 'دليل تعليمي حول استراتيجيات التبرع المخطط والوصايا والائتمانات والأوقاف وإنشاء إرث خيري دائم.',
    category: 'donors',
    fileSize: '1.9 MB',
    downloads: 1843,
    rating: 4.8,
    reviews: 98,
    format: 'PDF',
    pdfUrl: '#',
    relatedGuides: ['dg-003', 'dg-002'],
  },
];

export default function ResourceGuidesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = guidesData[locale] || guidesData.en;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<'all' | 'programs' | 'volunteers' | 'donors'>('all');

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  // Filter guides by category
  const filteredGuides = activeCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === activeCategory);

  // Get guide by ID
  const getGuideById = (id: string) => guides.find(g => g.id === id);

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 50%, ${royalColors.hashemiteGold} 100%)`,
        backgroundSize: '400% 400%',
        color: 'white',
        padding: '120px 32px',
        textAlign: textAlign as any,
        direction,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: ar ? '32px' : 'auto',
          left: ar ? 'auto' : '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '140px',
          opacity: 0.1,
        }}>
          📚
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            {ar ? '📚 موارد مفيدة' : '📚 RESOURCES'}
          </p>
          <h1 style={{
            fontSize: '52px',
            fontFamily: 'Garamond, serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            maxWidth: '800px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.hero.title}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0 0 12px 0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.hero.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontStyle: 'italic',
            margin: '0',
          }}>
            "{content.hero.overlay}"
          </p>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '100px 32px',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 24px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.intro.title}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: royalColors.textOfficial,
            maxWidth: '900px',
            margin: '0',
          }}>
            {content.intro.description}
          </p>
        </div>
      </section>

      {/* VIEW TOGGLE & FILTERS */}
      <section style={{
        background: 'white',
        padding: '40px 32px',
        borderBottom: `1px solid ${royalColors.borderSubtle}`,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexDirection: ar ? 'row-reverse' : 'row',
          }}>
            {/* View Toggle Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '10px 20px',
                  background: viewMode === 'grid' ? royalColors.darkNavy : 'white',
                  color: viewMode === 'grid' ? 'white' : royalColors.darkNavy,
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                {ar ? '◻️' : '▦'} {content.viewToggle.grid}
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '10px 20px',
                  background: viewMode === 'list' ? royalColors.darkNavy : 'white',
                  color: viewMode === 'list' ? 'white' : royalColors.darkNavy,
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                {ar ? '≡' : '≡'} {content.viewToggle.list}
              </button>
            </div>

            {/* Category Filter */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              flexDirection: ar ? 'row-reverse' : 'row',
            }}>
              {(Object.entries(content.categories) as any[]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as any)}
                  style={{
                    padding: '10px 20px',
                    background: activeCategory === key ? royalColors.darkNavy : 'white',
                    color: activeCategory === key ? 'white' : royalColors.textOfficial,
                    border: `1px solid ${royalColors.borderSubtle}`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: activeCategory === key ? '700' : '500',
                    fontSize: '14px',
                    transition: 'all 0.3s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section style={{
        background: 'white',
        padding: '60px 32px',
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredGuides.length === 0 ? (
            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              color: royalColors.textSecondary,
              padding: '40px 0',
            }}>
              {content.noResults}
            </p>
          ) : (
            <>
              {/* GRID VIEW */}
              {viewMode === 'grid' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: '32px',
                }}>
                  {filteredGuides.map(guide => (
                    <div
                      key={guide.id}
                      style={{
                        background: 'white',
                        border: `2px solid ${royalColors.hashemiteGold}`,
                        borderRadius: '8px',
                        padding: '28px',
                        boxShadow: shadows.lg,
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as any).style.transform = 'translateY(-4px)';
                        (e.currentTarget as any).style.boxShadow = shadows.xl;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as any).style.transform = 'translateY(0)';
                        (e.currentTarget as any).style.boxShadow = shadows.lg;
                      }}
                    >
                      {/* Category Badge */}
                      <div style={{
                        display: 'inline-block',
                        background: royalColors.compassionTeal,
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                        width: 'fit-content',
                      }}>
                        {guide.category === 'programs' && (ar ? 'أدلة البرامج' : 'Program Guide')}
                        {guide.category === 'volunteers' && (ar ? 'أدلة المتطوعين' : 'Volunteer Guide')}
                        {guide.category === 'donors' && (ar ? 'أدلة المانحين' : 'Donor Guide')}
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '22px',
                        fontFamily: 'Garamond, serif',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0 0 12px 0',
                        lineHeight: '1.3',
                      }}>
                        {ar ? guide.titleAr : guide.titleEn}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: royalColors.textSecondary,
                        margin: '0 0 16px 0',
                        flex: 1,
                      }}>
                        {ar ? guide.descriptionAr : guide.descriptionEn}
                      </p>

                      {/* Metadata */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        margin: '16px 0',
                        paddingTop: '16px',
                        borderTop: `1px solid ${royalColors.borderSubtle}`,
                      }}>
                        <div>
                          <p style={{ fontSize: '12px', color: royalColors.textSecondary, margin: '0', fontWeight: '600', textTransform: 'uppercase' }}>
                            {content.fileSize}
                          </p>
                          <p style={{ fontSize: '16px', color: royalColors.darkNavy, margin: '4px 0 0 0', fontWeight: '700' }}>
                            {guide.fileSize}
                          </p>
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: royalColors.textSecondary, margin: '0', fontWeight: '600', textTransform: 'uppercase' }}>
                            {content.downloads}
                          </p>
                          <p style={{ fontSize: '16px', color: royalColors.darkNavy, margin: '4px 0 0 0', fontWeight: '700' }}>
                            {guide.downloads.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        margin: '12px 0',
                        flexDirection: ar ? 'row-reverse' : 'row',
                      }}>
                        <span style={{ color: royalColors.hashemiteGold, fontSize: '18px' }}>
                          {'⭐'.repeat(Math.floor(guide.rating))}
                        </span>
                        <span style={{ fontSize: '14px', color: royalColors.textSecondary }}>
                          {guide.rating} ({guide.reviews} {ar ? 'تقييم' : 'reviews'})
                        </span>
                      </div>

                      {/* Related Guides */}
                      {guide.relatedGuides.length > 0 && (
                        <div style={{
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                          margin: '12px 0',
                          padding: '8px',
                          background: royalColors.bgLight,
                          borderRadius: '4px',
                        }}>
                          <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>
                            {content.relatedGuides}:
                          </p>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {guide.relatedGuides.map(relId => {
                              const relGuide = getGuideById(relId);
                              return relGuide ? (
                                <span
                                  key={relId}
                                  style={{
                                    background: royalColors.ivoryBg,
                                    padding: '2px 8px',
                                    borderRadius: '3px',
                                  }}
                                >
                                  {ar ? relGuide.titleAr.substring(0, 20) : relGuide.titleEn.substring(0, 20)}...
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: `1px solid ${royalColors.borderSubtle}`,
                      }}>
                        <Link
                          href={guide.pdfUrl}
                          style={{
                            padding: '12px 16px',
                            background: royalColors.darkNavy,
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: '700',
                            textAlign: 'center',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s',
                          }}
                        >
                          📥 {ar ? 'تحميل' : 'Download'}
                        </Link>
                        <button
                          style={{
                            padding: '12px 16px',
                            background: 'white',
                            color: royalColors.darkNavy,
                            border: `2px solid ${royalColors.hashemiteGold}`,
                            borderRadius: '4px',
                            fontWeight: '700',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          ℹ️ {ar ? 'تفاصيل' : 'Details'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* LIST VIEW */}
              {viewMode === 'list' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {filteredGuides.map(guide => (
                    <div
                      key={guide.id}
                      style={{
                        background: 'white',
                        border: `1px solid ${royalColors.borderSubtle}`,
                        borderRadius: '8px',
                        padding: '24px',
                        boxShadow: shadows.sm,
                        transition: 'all 0.3s',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto auto',
                        alignItems: 'center',
                        gap: '24px',
                      }}
                    >
                      {/* Category Badge */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: royalColors.compassionTeal,
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        minWidth: '80px',
                      }}>
                        <span style={{ fontSize: '24px', marginBottom: '4px' }}>
                          {guide.category === 'programs' && '📖'}
                          {guide.category === 'volunteers' && '🤝'}
                          {guide.category === 'donors' && '💝'}
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', textAlign: 'center' }}>
                          {guide.category === 'programs' && (ar ? 'برنامج' : 'Program')}
                          {guide.category === 'volunteers' && (ar ? 'متطوع' : 'Volunteer')}
                          {guide.category === 'donors' && (ar ? 'مانح' : 'Donor')}
                        </span>
                      </div>

                      {/* Content */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        textAlign: textAlign as any,
                      }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontFamily: 'Garamond, serif',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0',
                        }}>
                          {ar ? guide.titleAr : guide.titleEn}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: '1.5',
                          color: royalColors.textSecondary,
                          margin: '0',
                        }}>
                          {ar ? guide.descriptionAr : guide.descriptionEn}
                        </p>
                        <div style={{
                          display: 'flex',
                          gap: '16px',
                          fontSize: '13px',
                          color: royalColors.textSecondary,
                          flexDirection: ar ? 'row-reverse' : 'row',
                        }}>
                          <span>{guide.fileSize}</span>
                          <span>•</span>
                          <span>{guide.downloads.toLocaleString()} {ar ? 'تحميل' : 'downloads'}</span>
                          <span>•</span>
                          <span>
                            {'⭐'.repeat(Math.floor(guide.rating))} {guide.rating} ({guide.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        flexDirection: ar ? 'row-reverse' : 'row',
                      }}>
                        <Link
                          href={guide.pdfUrl}
                          style={{
                            padding: '10px 20px',
                            background: royalColors.darkNavy,
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          📥 {ar ? 'حمل' : 'Download'}
                        </Link>
                        <button
                          style={{
                            padding: '10px 20px',
                            background: 'white',
                            color: royalColors.darkNavy,
                            border: `2px solid ${royalColors.hashemiteGold}`,
                            borderRadius: '4px',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          ℹ️ {ar ? 'تفاصيل' : 'Details'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepPurple} 100%)`,
        color: 'white',
        textAlign: 'center',
        direction,
        borderTop: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'white',
          }}>
            {ar ? 'هل تحتاج إلى مزيد من المساعدة؟' : 'Need More Assistance?'}
          </h2>
          <p style={{
            fontSize: '18px',
            margin: '0 0 40px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
          }}>
            {ar
              ? 'تواصل معنا للحصول على مساعدة إضافية أو اطلب نسخة مخصصة من الأدلة'
              : 'Contact us for additional support or request a customized version of our guides'}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <Link
              href={ar ? '/ar/contact' : '/en/contact'}
              style={{
                padding: '16px 32px',
                background: 'white',
                color: royalColors.darkNavy,
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                transition: 'all 0.3s',
                display: 'inline-block',
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              ✉️ {ar ? 'اتصل بنا' : 'Contact Us'}
            </Link>
            <Link
              href={ar ? '/ar/faq' : '/en/faq'}
              style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                transition: 'all 0.3s',
                display: 'inline-block',
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              ❓ {ar ? 'أسئلة شائعة' : 'FAQ'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
