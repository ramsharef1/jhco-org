'use client';

import { useState, useMemo } from 'react';
import { programs, countries, regions } from '@/lib/mockData';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

interface FilterState {
  search: string;
  categories: string[];
  geography: string[];
  beneficiary: string[];
  impact: 'all' | 'high' | 'medium' | 'low';
}

export default function ProgramsFilterPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('q') || '',
    categories: [],
    geography: [],
    beneficiary: [],
    impact: 'all',
  });

  // Extract unique categories
  const allCategories = [...new Set(programs.map(p => p.category))];

  // Extract unique geographies from countries
  const allGeographies = [...new Set(countries.map(c => c.region))];

  // Extract unique beneficiary types from program objectives
  const allBeneficiaries = [...new Set(
    programs.flatMap(p => p.objectives || [])
  )];

  // Impact score calculation
  const getImpactScore = (impactText: string): number => {
    const numbers = impactText.match(/\d+/);
    return numbers ? parseInt(numbers[0]) : 0;
  };

  // Filter programs
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = ar
          ? program.nameAr.toLowerCase().includes(searchLower)
          : program.name.toLowerCase().includes(searchLower);
        const matchesDesc = ar
          ? program.descriptionAr.toLowerCase().includes(searchLower)
          : program.description.toLowerCase().includes(searchLower);
        if (!matchesName && !matchesDesc) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(program.category)) return false;
      }

      // Beneficiary filter
      if (filters.beneficiary.length > 0) {
        const programObjectives = ar ? program.objectivesAr || [] : program.objectives || [];
        const hasMatch = filters.beneficiary.some(b =>
          programObjectives.some(obj => obj.toLowerCase().includes(b.toLowerCase()))
        );
        if (!hasMatch) return false;
      }

      // Impact filter
      if (filters.impact !== 'all') {
        const score = getImpactScore(ar ? program.impactAr : program.impact);
        if (filters.impact === 'high' && score < 10000) return false;
        if (filters.impact === 'medium' && (score < 5000 || score >= 10000)) return false;
        if (filters.impact === 'low' && score >= 5000) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sort by impact score
      const scoreA = getImpactScore(ar ? a.impactAr : a.impact);
      const scoreB = getImpactScore(ar ? b.impactAr : b.impact);
      return scoreB - scoreA;
    });
  }, [filters, ar]);

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleGeographyToggle = (geo: string) => {
    setFilters(prev => ({
      ...prev,
      geography: prev.geography.includes(geo)
        ? prev.geography.filter(g => g !== geo)
        : [...prev.geography, geo],
    }));
  };

  const handleBeneficiaryToggle = (benef: string) => {
    setFilters(prev => ({
      ...prev,
      beneficiary: prev.beneficiary.includes(benef)
        ? prev.beneficiary.filter(b => b !== benef)
        : [...prev.beneficiary, benef],
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      categories: [],
      geography: [],
      beneficiary: [],
      impact: 'all',
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.categories.length > 0 ||
    filters.geography.length > 0 ||
    filters.beneficiary.length > 0 ||
    filters.impact !== 'all';

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '60px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '400', margin: '0 0 16px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'استكشف البرامج' : 'Discover Programs'}
          </h1>
          <p style={{ fontSize: '16px', color: '#d4af37', margin: 0, maxWidth: '600px' }}>
            {ar
              ? 'ابحث وصفي برامجنا الإنسانية لإيجاد المبادرات التي تهمك'
              : 'Search and filter our humanitarian programs to find initiatives that matter to you'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 32px', backgroundColor: '#f9f7f4', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px', marginBottom: '48px' }}>
            {/* Sidebar Filters */}
            <aside style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              {/* Search */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  {ar ? 'بحث' : 'Search'}
                </label>
                <input
                  type="text"
                  placeholder={ar ? 'ابحث عن برنامج...' : 'Search programs...'}
                  value={filters.search}
                  onChange={e => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d4af37',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Category Filter */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  {ar ? 'نوع البرنامج' : 'Program Type'}
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {allCategories.map(category => (
                    <label key={category} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px', color: '#333' }}>
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        style={{ marginRight: '10px', cursor: 'pointer', accentColor: '#d4af37' }}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              {/* Impact Filter */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  {ar ? 'حجم التأثير' : 'Impact Scale'}
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { value: 'all', label: ar ? 'الكل' : 'All' },
                    { value: 'high', label: ar ? 'عالي' : 'High Impact' },
                    { value: 'medium', label: ar ? 'متوسط' : 'Medium Impact' },
                    { value: 'low', label: ar ? 'منخفض' : 'Smaller Impact' },
                  ].map(option => (
                    <label key={option.value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px', color: '#333' }}>
                      <input
                        type="radio"
                        name="impact"
                        value={option.value}
                        checked={filters.impact === option.value}
                        onChange={e => setFilters(prev => ({ ...prev, impact: e.target.value as any }))}
                        style={{ marginRight: '10px', cursor: 'pointer', accentColor: '#d4af37' }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#0a1428',
                    color: '#d4af37',
                    border: '1px solid #d4af37',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#d4af37';
                    (e.target as HTMLButtonElement).style.color = '#0a1428';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#0a1428';
                    (e.target as HTMLButtonElement).style.color = '#d4af37';
                  }}
                >
                  {ar ? 'مسح الفلاتر' : 'Clear Filters'}
                </button>
              )}
            </aside>

            {/* Results */}
            <main>
              {/* Results Header */}
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1428', margin: 0, marginBottom: '8px' }}>
                  {ar
                    ? `${filteredPrograms.length} برنامج`
                    : `${filteredPrograms.length} Programs Found`}
                </h2>
                <p style={{ fontSize: '14px', color: '#6b6b6b', margin: 0 }}>
                  {ar
                    ? 'تصفح والفلترة والتبرع مباشرة لدعم المبادرات المهمة'
                    : 'Browse, filter, and donate directly to support initiatives that matter'}
                </p>
              </div>

              {/* Results Grid */}
              {filteredPrograms.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
                  {filteredPrograms.map(program => (
                    <div
                      key={program.id}
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid #e8e4db',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        transition: 'all 0.4s',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                      }}
                      onMouseEnter={e => {
                        const elem = e.currentTarget;
                        elem.style.boxShadow = '0 8px 24px rgba(10,20,40,0.16)';
                        elem.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={e => {
                        const elem = e.currentTarget;
                        elem.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
                        elem.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Image Placeholder */}
                      <div style={{ position: 'relative', height: '200px', backgroundColor: '#f0f0f0' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e4db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '48px' }}>
                          {program.category.includes('Food') ? '🍲' :
                            program.category.includes('Health') ? '⚕️' :
                            program.category.includes('Education') ? '📚' :
                            program.category.includes('Livelihood') ? '💼' :
                            program.category.includes('Crisis') ? '🤝' : '📋'}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                        {/* Category Badge */}
                        <div style={{ marginBottom: '12px' }}>
                          <span style={{ fontSize: '11px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {ar ? program.categoryAr : program.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px', lineHeight: '1.4' }}>
                          {ar ? program.nameAr : program.name}
                        </h3>

                        {/* Description */}
                        <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                          {ar ? program.descriptionAr : program.description}
                        </p>

                        {/* Impact */}
                        <div style={{ backgroundColor: '#f9f7f4', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
                          <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                            {ar ? 'التأثير' : 'Impact'}
                          </p>
                          <p style={{ fontSize: '16px', fontWeight: '700', color: '#0a1428', margin: 0 }}>
                            {ar ? program.impactAr : program.impact}
                          </p>
                        </div>

                        {/* Footer Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          {/* Learn More Link */}
                          <Link href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none' }}>
                            <button
                              style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: 'transparent',
                                color: '#0a1428',
                                border: '1px solid #0a1428',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontWeight: '600',
                                transition: 'all 0.3s',
                              }}
                              onMouseEnter={e => {
                                (e.target as HTMLButtonElement).style.backgroundColor = '#0a1428';
                                (e.target as HTMLButtonElement).style.color = 'white';
                              }}
                              onMouseLeave={e => {
                                (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                                (e.target as HTMLButtonElement).style.color = '#0a1428';
                              }}
                            >
                              {ar ? 'تفاصيل' : 'Details'}
                            </button>
                          </Link>

                          {/* Quick Donate */}
                          <Link href={`${base}/get-involved/donate?program=${program.slug}`} style={{ textDecoration: 'none' }}>
                            <button
                              style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#d4af37',
                                color: '#0a1428',
                                border: '1px solid #d4af37',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontWeight: '700',
                                transition: 'all 0.3s',
                              }}
                              onMouseEnter={e => {
                                (e.target as HTMLButtonElement).style.backgroundColor = '#f5c85f';
                              }}
                              onMouseLeave={e => {
                                (e.target as HTMLButtonElement).style.backgroundColor = '#d4af37';
                              }}
                            >
                              {ar ? 'تبرع' : 'Donate'}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 32px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e8e4db' }}>
                  <p style={{ fontSize: '18px', color: '#6b6b6b', margin: 0 }}>
                    {ar ? 'لم يتم العثور على برامج مطابقة لمعايير البحث.' : 'No programs match your search criteria.'}
                  </p>
                  <button
                    onClick={handleClearFilters}
                    style={{
                      marginTop: '20px',
                      padding: '12px 32px',
                      backgroundColor: '#d4af37',
                      color: '#0a1428',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#f5c85f';
                    }}
                    onMouseLeave={e => {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#d4af37';
                    }}
                  >
                    {ar ? 'مسح الفلاتر' : 'Clear Filters'}
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'أحدث تغييراً اليوم' : 'Make a Difference Today'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: '#d4af37', maxWidth: '600px', margin: '0 auto 32px' }}>
            {ar
              ? 'ساهم في برنامج من اختيارك وكن جزءاً من حركة التغيير العالمية'
              : 'Support a program of your choice and join a global movement for change'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          main {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          aside {
            position: static;
            top: auto;
          }

          div[style*="gridTemplateColumns: 300px"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 36px !important;
          }

          div[style*="gridTemplateColumns: repeat"] {
            grid-template-columns: 1fr !important;
          }

          section[style*="padding: 60px 32px"] {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
