'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useEffect, useMemo } from 'react';

const directoryContent = {
  en: {
    hero: {
      title: 'Partner Directory',
      subtitle: 'Explore Our Global Network',
      overlay: 'Connect with over 150 distinguished organizations transforming lives worldwide',
    },
    search: {
      placeholder: 'Search partners by name, type, or location...',
      noResults: 'No partners found. Try adjusting your search or filters.',
    },
    filters: {
      title: 'Filters',
      type: 'Partner Type',
      location: 'Region/Location',
      program: 'Program Area',
      allTypes: 'All Types',
      allLocations: 'All Locations',
      allPrograms: 'All Programs',
      types: {
        government: 'Government Agency',
        ngo: 'NGO/Non-Profit',
        corporate: 'Corporate Partner',
        international: 'International Organization',
        academic: 'Academic Institution',
        regional: 'Regional Organization',
      },
      programs: {
        healthcare: 'Healthcare',
        education: 'Education',
        foodSecurity: 'Food Security',
        waterSanitation: 'Water & Sanitation',
        livelihoods: 'Livelihoods',
        emergencyResponse: 'Emergency Response',
        womenEmpowerment: 'Women Empowerment',
        youthDevelopment: 'Youth Development',
      },
    },
    partners: {
      title: 'Our Partners',
      sortBy: 'Sort by',
      sortOptions: {
        nameAsc: 'Name (A-Z)',
        nameDesc: 'Name (Z-A)',
        yearDesc: 'Newest Partnership',
        yearAsc: 'Longest Partnership',
      },
      viewProfile: 'View Profile',
      partnership: 'Partnership',
      since: 'Since',
      focus: 'Focus Areas',
      region: 'Region',
      impact: 'Key Impact',
    },
    testimonials: {
      title: 'Partner Testimonials',
      subtitle: 'Hear from our valued partners',
    },
    cta: {
      title: 'Ready to Join Our Network?',
      description: 'Partner with JHCO to multiply your humanitarian impact across 30+ countries.',
      button: 'Apply to Become a Partner',
    },
  },
  ar: {
    hero: {
      title: 'دليل الشركاء',
      subtitle: 'استكشف شبكتنا العالمية',
      overlay: 'تواصل مع أكثر من 150 منظمة مميزة تغيّر الحياة حول العالم',
    },
    search: {
      placeholder: 'ابحث عن الشركاء حسب الاسم أو النوع أو الموقع...',
      noResults: 'لم يتم العثور على شركاء. حاول تعديل البحث أو المرشحات.',
    },
    filters: {
      title: 'المرشحات',
      type: 'نوع الشراكة',
      location: 'المنطقة/الموقع',
      program: 'مجال البرنامج',
      allTypes: 'جميع الأنواع',
      allLocations: 'جميع المواقع',
      allPrograms: 'جميع البرامج',
      types: {
        government: 'جهة حكومية',
        ngo: 'منظمة غير حكومية',
        corporate: 'شركة خاصة',
        international: 'منظمة دولية',
        academic: 'مؤسسة أكاديمية',
        regional: 'منظمة إقليمية',
      },
      programs: {
        healthcare: 'الصحة',
        education: 'التعليم',
        foodSecurity: 'الأمن الغذائي',
        waterSanitation: 'المياه والصرف الصحي',
        livelihoods: 'سبل العيش',
        emergencyResponse: 'الاستجابة للطوارئ',
        womenEmpowerment: 'تمكين المرأة',
        youthDevelopment: 'تنمية الشباب',
      },
    },
    partners: {
      title: 'شركاؤنا',
      sortBy: 'ترتيب حسب',
      sortOptions: {
        nameAsc: 'الاسم (أ-ي)',
        nameDesc: 'الاسم (ي-أ)',
        yearDesc: 'أحدث شراكة',
        yearAsc: 'أطول شراكة',
      },
      viewProfile: 'عرض الملف الشخصي',
      partnership: 'الشراكة',
      since: 'منذ',
      focus: 'مجالات التركيز',
      region: 'المنطقة',
      impact: 'التأثير الرئيسي',
    },
    testimonials: {
      title: 'شهادات الشركاء',
      subtitle: 'اسمع من شركائنا الموقرين',
    },
    cta: {
      title: 'هل أنت مستعد للانضمام إلى شبكتنا؟',
      description: 'تعاون مع الهيئة لمضاعفة تأثيرك الإنساني عبر 30+ دول.',
      button: 'تقدم بطلب لتصبح شريكاً',
    },
  },
};

// Partner data
const partnersData = [
  {
    id: 1,
    name: 'United Nations Development Programme',
    category: 'international',
    year: 2015,
    regions: ['Middle East', 'Africa', 'Asia'],
    programs: ['healthcare', 'livelihoods', 'education'],
    description: 'Leading development organization supporting sustainable development initiatives',
    impact: '5M+ beneficiaries reached',
    testimonial: {
      quote: 'JHCO is a trusted partner in advancing development goals across the region.',
      author: 'Dr. Sarah Johnson',
      title: 'Regional Director, UNDP',
    },
  },
  {
    id: 2,
    name: 'World Health Organization',
    category: 'international',
    year: 2010,
    regions: ['Middle East', 'Africa'],
    programs: ['healthcare', 'emergencyResponse'],
    description: 'Global health authority collaborating on pandemic preparedness and health systems',
    impact: '2M+ health interventions',
    testimonial: {
      quote: 'The professionalism and commitment of JHCO staff is exceptional.',
      author: 'Dr. Ahmed Hassan',
      title: 'Country Lead, WHO',
    },
  },
  {
    id: 3,
    name: 'Jordanian Ministry of Health',
    category: 'government',
    year: 1990,
    regions: ['Middle East'],
    programs: ['healthcare', 'waterSanitation'],
    description: 'Government partner advancing national health initiatives',
    impact: '10K+ clinic visits annually',
    testimonial: {
      quote: 'A cornerstone organization of humanitarian work in Jordan.',
      author: 'H.E. Minister Adel Al-Twaissi',
      title: 'Minister of Health',
    },
  },
  {
    id: 4,
    name: 'International Committee of the Red Crescent',
    category: 'international',
    year: 2005,
    regions: ['Middle East', 'Africa'],
    programs: ['emergencyResponse', 'healthcare'],
    description: 'Humanitarian organization working in conflict zones and emergencies',
    impact: '1M+ crisis-affected populations',
    testimonial: {
      quote: 'JHCO embodies humanitarian principles and local expertise.',
      author: 'Laurent Martin',
      title: 'Regional Coordinator, ICRC',
    },
  },
  {
    id: 5,
    name: 'World Food Programme',
    category: 'international',
    year: 2012,
    regions: ['Africa', 'Asia', 'Middle East'],
    programs: ['foodSecurity', 'livelihoods'],
    description: 'Food security partner supporting nutrition and food assistance programs',
    impact: '500K+ people food-secured',
    testimonial: {
      quote: 'Partnership with JHCO enhances our food security impact.',
      author: 'Jennifer Lee',
      title: 'Programs Manager, WFP',
    },
  },
  {
    id: 6,
    name: 'Global Education First Initiative',
    category: 'international',
    year: 2013,
    regions: ['Africa', 'Asia'],
    programs: ['education', 'youthDevelopment'],
    description: 'Education-focused organization supporting learning and literacy',
    impact: '50K+ students educated',
    testimonial: {
      quote: 'JHCO brings unparalleled dedication to educational access.',
      author: 'Prof. Michael Chen',
      title: 'Executive Director, GEFI',
    },
  },
  {
    id: 7,
    name: 'Islamic Development Bank',
    category: 'regional',
    year: 2008,
    regions: ['Middle East', 'Africa', 'Asia'],
    programs: ['livelihoods', 'education'],
    description: 'Development finance institution supporting economic empowerment',
    impact: '100K+ livelihoods improved',
    testimonial: {
      quote: 'JHCO implements our vision of inclusive development.',
      author: 'Dr. Khalid Al-Khudairi',
      title: 'Senior Economist, IsDB',
    },
  },
  {
    id: 8,
    name: 'Arab Fund for Economic and Social Development',
    category: 'regional',
    year: 2006,
    regions: ['Middle East', 'Africa'],
    programs: ['livelihoods', 'education', 'womenEmpowerment'],
    description: 'Regional fund supporting sustainable development across Arab states',
    impact: '75K+ beneficiaries',
    testimonial: {
      quote: 'JHCO exemplifies excellence in development implementation.',
      author: 'Dr. Abdulaziz Al-Khudairi',
      title: 'President, AFESD',
    },
  },
  {
    id: 9,
    name: 'Microsoft Charitable Foundation',
    category: 'corporate',
    year: 2018,
    regions: ['Middle East', 'Africa'],
    programs: ['education', 'youthDevelopment'],
    description: 'Tech corporation supporting digital skills and connectivity',
    impact: '30K+ digital skills trained',
    testimonial: {
      quote: 'JHCO is scaling digital access effectively.',
      author: 'Tom Richardson',
      title: 'Regional Head, Microsoft CSR',
    },
  },
  {
    id: 10,
    name: 'American University of Beirut',
    category: 'academic',
    year: 2014,
    regions: ['Middle East'],
    programs: ['education', 'healthcare', 'research'],
    description: 'Leading academic institution collaborating on research and education',
    impact: '500+ research partnerships',
    testimonial: {
      quote: 'JHCO brings rigorous scholarship to humanitarian work.',
      author: 'Dr. Randa Mirza',
      title: 'Dean of Global Affairs, AUB',
    },
  },
  {
    id: 11,
    name: 'Care International',
    category: 'ngo',
    year: 2011,
    regions: ['Africa', 'Asia'],
    programs: ['foodSecurity', 'womenEmpowerment', 'livelihoods'],
    description: 'International NGO focused on poverty alleviation and gender equality',
    impact: '100K+ women empowered',
    testimonial: {
      quote: 'JHCO\'s grassroots approach amplifies our impact.',
      author: 'Mary Okonkwo',
      title: 'Regional Director, Care International',
    },
  },
  {
    id: 12,
    name: 'Save the Children International',
    category: 'ngo',
    year: 2009,
    regions: ['Africa', 'Asia', 'Middle East'],
    programs: ['education', 'youthDevelopment', 'emergencyResponse'],
    description: 'Child-focused NGO protecting and developing children',
    impact: '200K+ children reached',
    testimonial: {
      quote: 'JHCO places child welfare at the center of everything.',
      author: 'Sophie Bernard',
      title: 'Regional Chief, Save the Children',
    },
  },
  {
    id: 13,
    name: 'Oxfam GB',
    category: 'ngo',
    year: 2016,
    regions: ['Africa', 'Asia', 'Middle East'],
    programs: ['foodSecurity', 'womenEmpowerment', 'livelihoods'],
    description: 'Global poverty alleviation organization',
    impact: '50K+ economic empowerment',
    testimonial: {
      quote: 'JHCO understands the intersection of rights and development.',
      author: 'Paul Smith',
      title: 'Humanitarian Director, Oxfam',
    },
  },
  {
    id: 14,
    name: 'Action Against Hunger',
    category: 'ngo',
    year: 2013,
    regions: ['Africa', 'Middle East'],
    programs: ['foodSecurity', 'waterSanitation', 'healthcare'],
    description: 'Humanitarian organization fighting hunger and malnutrition',
    impact: '150K+ food-secure',
    testimonial: {
      quote: 'JHCO brings expertise to complex crises.',
      author: 'Dr. Vincent Tremblay',
      title: 'Regional Operations Lead, AAH',
    },
  },
  {
    id: 15,
    name: 'King Abdullah University of Science and Technology',
    category: 'academic',
    year: 2017,
    regions: ['Middle East'],
    programs: ['education', 'research', 'youthDevelopment'],
    description: 'Advanced research institution supporting innovation',
    impact: '100+ research projects',
    testimonial: {
      quote: 'JHCO bridges the gap between research and real-world impact.',
      author: 'Prof. Falah Al-Mansouri',
      title: 'Vice President Research, KAUST',
    },
  },
];

export default function PartnerDirectory({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState<Locale>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('nameAsc');

  useEffect(() => {
    params.then((p) => {
      setLocale(p.locale as Locale);
    });
  }, [params]);

  const content = directoryContent[locale];
  const ar = locale === 'ar';

  // Get unique regions and programs
  const uniqueRegions = Array.from(
    new Set(partnersData.flatMap((p) => p.regions))
  ).sort();
  const uniquePrograms = Array.from(
    new Set(partnersData.flatMap((p) => p.programs))
  ).sort();

  // Filter and sort partners
  const filteredPartners = useMemo(() => {
    let result = partnersData.filter((partner) => {
      const matchesSearch =
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || partner.category === selectedType;
      const matchesRegion =
        !selectedRegion || partner.regions.includes(selectedRegion);
      const matchesProgram =
        !selectedProgram || partner.programs.includes(selectedProgram);

      return matchesSearch && matchesType && matchesRegion && matchesProgram;
    });

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'nameAsc') return a.name.localeCompare(b.name);
      if (sortBy === 'nameDesc') return b.name.localeCompare(a.name);
      if (sortBy === 'yearDesc') return b.year - a.year;
      if (sortBy === 'yearAsc') return a.year - b.year;
      return 0;
    });

    return result;
  }, [searchQuery, selectedType, selectedRegion, selectedProgram, sortBy]);

  return (
    <div style={{ backgroundColor: royalColors.offWhite }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(41, 29, 79, 0.85), rgba(192, 42, 61, 0.85)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgba(212,175,55,0.1);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgba(129,183,131,0.1);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22600%22 fill=%22url(%23grad1)%22 /%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          padding: '120px 40px',
          textAlign: 'center',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            fontSize: ar ? '3.5rem' : '3.5rem',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '-1px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {content.hero.title}
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            opacity: 0.95,
            maxWidth: '600px',
          }}
        >
          {content.hero.subtitle}
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            opacity: 0.85,
            maxWidth: '700px',
            lineHeight: 1.6,
          }}
        >
          {content.hero.overlay}
        </p>
      </section>

      {/* Main Directory Section */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: royalColors.deepRoyal,
              marginBottom: '10px',
            }}
          >
            {content.partners.title}
          </h2>
          <p
            style={{
              color: royalColors.midGray,
              fontSize: '1.1rem',
              marginBottom: '40px',
            }}
          >
            Discover our network of {filteredPartners.length} partner
            {filteredPartners.length !== 1 ? 's' : ''}
          </p>

          {/* Search Bar */}
          <div style={{ marginBottom: '40px' }}>
            <input
              type="text"
              placeholder={content.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '1rem',
                border: `2px solid ${royalColors.lightGray}`,
                borderRadius: borderRadius.md,
                backgroundColor: 'white',
                boxShadow: shadows.subtle,
                transition: 'all 0.3s ease',
                direction: ar ? 'rtl' : 'ltr',
                textAlign: ar ? 'right' : 'left',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = royalColors.deepRoyal;
                e.currentTarget.style.boxShadow = shadows.focus;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = royalColors.lightGray;
                e.currentTarget.style.boxShadow = shadows.subtle;
              }}
            />
          </div>

          {/* Filters Section */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: borderRadius.lg,
              boxShadow: shadows.subtle,
              marginBottom: '40px',
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: royalColors.deepRoyal,
                marginBottom: '25px',
              }}
            >
              {content.filters.title}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: ar
                  ? 'repeat(auto-fit, minmax(250px, 1fr))'
                  : 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
              }}
            >
              {/* Partner Type Filter */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: royalColors.darkNavy,
                    marginBottom: '12px',
                  }}
                >
                  {content.filters.type}
                </label>
                <select
                  value={selectedType || ''}
                  onChange={(e) =>
                    setSelectedType(e.target.value || null)
                  }
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: '0.95rem',
                    border: `1px solid ${royalColors.lightGray}`,
                    borderRadius: borderRadius.md,
                    backgroundColor: 'white',
                    color: royalColors.darkNavy,
                    cursor: 'pointer',
                    direction: ar ? 'rtl' : 'ltr',
                  }}
                >
                  <option value="">
                    {content.filters.allTypes}
                  </option>
                  {Object.entries(content.filters.types).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: royalColors.darkNavy,
                    marginBottom: '12px',
                  }}
                >
                  {content.filters.location}
                </label>
                <select
                  value={selectedRegion || ''}
                  onChange={(e) =>
                    setSelectedRegion(e.target.value || null)
                  }
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: '0.95rem',
                    border: `1px solid ${royalColors.lightGray}`,
                    borderRadius: borderRadius.md,
                    backgroundColor: 'white',
                    color: royalColors.darkNavy,
                    cursor: 'pointer',
                    direction: ar ? 'rtl' : 'ltr',
                  }}
                >
                  <option value="">
                    {content.filters.allLocations}
                  </option>
                  {uniqueRegions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program Filter */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: royalColors.darkNavy,
                    marginBottom: '12px',
                  }}
                >
                  {content.filters.program}
                </label>
                <select
                  value={selectedProgram || ''}
                  onChange={(e) =>
                    setSelectedProgram(e.target.value || null)
                  }
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: '0.95rem',
                    border: `1px solid ${royalColors.lightGray}`,
                    borderRadius: borderRadius.md,
                    backgroundColor: 'white',
                    color: royalColors.darkNavy,
                    cursor: 'pointer',
                    direction: ar ? 'rtl' : 'ltr',
                  }}
                >
                  <option value="">
                    {content.filters.allPrograms}
                  </option>
                  {uniquePrograms.map((program) => (
                    <option key={program} value={program}>
                      {content.filters.programs[program as keyof typeof content.filters.programs] || program}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', justifyContent: ar ? 'flex-end' : 'flex-start' }}>
            <label
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: royalColors.darkNavy,
              }}
            >
              {content.partners.sortBy}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 12px',
                fontSize: '0.95rem',
                border: `1px solid ${royalColors.lightGray}`,
                borderRadius: borderRadius.md,
                backgroundColor: 'white',
                color: royalColors.darkNavy,
                cursor: 'pointer',
                direction: ar ? 'rtl' : 'ltr',
              }}
            >
              {Object.entries(content.partners.sortOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: borderRadius.lg,
                  overflow: 'hidden',
                  boxShadow: shadows.subtle,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  direction: ar ? 'rtl' : 'ltr',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = shadows.hover;
                  el.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = shadows.subtle;
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Logo Placeholder */}
                <div
                  style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${
                      partner.category === 'government'
                        ? royalColors.deepRoyal
                        : partner.category === 'ngo'
                          ? royalColors.charityRed
                          : partner.category === 'corporate'
                            ? royalColors.hashemiteGold
                            : partner.category === 'international'
                              ? royalColors.compassionTeal
                              : partner.category === 'academic'
                                ? royalColors.impactGreen
                                : royalColors.darkNavy
                    }, ${
                      partner.category === 'government'
                        ? royalColors.darkNavy
                        : partner.category === 'ngo'
                          ? royalColors.hashemiteGold
                          : partner.category === 'corporate'
                            ? royalColors.impactGreen
                            : partner.category === 'international'
                              ? royalColors.compassionTeal
                              : partner.category === 'academic'
                                ? royalColors.hashemiteGold
                                : royalColors.compassionTeal
                    })`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem',
                  }}
                >
                  {partner.category === 'government' && '🏛️'}
                  {partner.category === 'ngo' && '🤝'}
                  {partner.category === 'corporate' && '🏢'}
                  {partner.category === 'international' && '🌍'}
                  {partner.category === 'academic' && '🎓'}
                  {partner.category === 'regional' && '📍'}
                </div>

                {/* Content */}
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: royalColors.deepRoyal,
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {partner.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: royalColors.midGray,
                      marginBottom: '12px',
                    }}
                  >
                    {content.partners.since} {partner.year}
                  </p>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: royalColors.midGray,
                      marginBottom: '15px',
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {partner.description}
                  </p>

                  {/* Program Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '15px',
                    }}
                  >
                    {partner.programs.slice(0, 2).map((prog) => (
                      <span
                        key={prog}
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          backgroundColor: royalColors.offWhite,
                          color: royalColors.darkNavy,
                          borderRadius: borderRadius.sm,
                          fontWeight: 500,
                        }}
                      >
                        {content.filters.programs[prog as keyof typeof content.filters.programs] || prog}
                      </span>
                    ))}
                    {partner.programs.length > 2 && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          backgroundColor: royalColors.offWhite,
                          color: royalColors.darkNavy,
                          borderRadius: borderRadius.sm,
                          fontWeight: 500,
                        }}
                      >
                        +{partner.programs.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Regions */}
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: royalColors.midGray,
                      marginBottom: '15px',
                    }}
                  >
                    <strong>{content.partners.region}:</strong> {partner.regions.join(', ')}
                  </div>

                  {/* Impact */}
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: royalColors.deepRoyal,
                      fontWeight: 600,
                      marginBottom: '15px',
                    }}
                  >
                    {content.partners.impact}: {partner.impact}
                  </div>

                  <Link
                    href={`/${locale}/partners/${partner.id}`}
                    style={{
                      display: 'inline-block',
                      padding: '10px 16px',
                      backgroundColor: royalColors.deepRoyal,
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: borderRadius.md,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.charityRed;
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.deepRoyal;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {content.partners.viewProfile}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: 'white',
              borderRadius: borderRadius.lg,
              boxShadow: shadows.subtle,
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: royalColors.midGray,
              }}
            >
              {content.search.noResults}
            </p>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          backgroundColor: 'white',
          padding: '80px 40px',
          borderTop: `2px solid ${royalColors.lightGray}`,
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: royalColors.deepRoyal,
                marginBottom: '10px',
              }}
            >
              {content.testimonials.title}
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: royalColors.midGray,
              }}
            >
              {content.testimonials.subtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {filteredPartners
              .filter((p) => p.testimonial)
              .slice(0, 3)
              .map((partner) => (
                <div
                  key={partner.id}
                  style={{
                    backgroundColor: royalColors.offWhite,
                    padding: '30px',
                    borderRadius: borderRadius.lg,
                    borderLeft: `4px solid ${royalColors.deepRoyal}`,
                    direction: ar ? 'rtl' : 'ltr',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      color: royalColors.darkNavy,
                      marginBottom: '20px',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    "{partner.testimonial.quote}"
                  </p>
                  <div>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: royalColors.deepRoyal,
                        marginBottom: '3px',
                      }}
                    >
                      {partner.testimonial.author}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: royalColors.midGray,
                      }}
                    >
                      {partner.testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(41, 29, 79, 0.9), rgba(192, 42, 61, 0.9))',
          color: 'white',
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.2rem',
              fontWeight: 600,
              marginBottom: '15px',
            }}
          >
            {content.cta.title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              opacity: 0.95,
              lineHeight: 1.6,
            }}
          >
            {content.cta.description}
          </p>
          <Link
            href={`/${locale}/partners/apply`}
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.deepRoyal,
              textDecoration: 'none',
              borderRadius: borderRadius.md,
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = shadows.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {content.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
