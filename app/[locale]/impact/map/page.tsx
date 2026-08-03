'use client';
import React, { useState, useEffect } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

type RegionData = {
  id: string;
  nameEn: string;
  nameAr: string;
  beneficiaries: number;
  programs: string[];
  centerX: number;
  centerY: number;
  active: boolean;
};

const regionDatabase: Record<string, RegionData> = {
  mena: {
    id: 'mena',
    nameEn: 'Middle East & North Africa',
    nameAr: 'الشرق الأوسط وشمال أفريقيا',
    beneficiaries: 485000,
    programs: ['Emergency Response', 'Healthcare', 'Education', 'Food Security', 'Livelihoods'],
    centerX: 35,
    centerY: 30,
    active: true,
  },
  eastAfrica: {
    id: 'eastAfrica',
    nameEn: 'East Africa',
    nameAr: 'شرق أفريقيا',
    beneficiaries: 245000,
    programs: ['Food Security', 'Healthcare', 'Education', 'Shelter & WASH'],
    centerX: 40,
    centerY: 55,
    active: true,
  },
  westAfrica: {
    id: 'westAfrica',
    nameEn: 'West Africa',
    nameAr: 'غرب أفريقيا',
    beneficiaries: 125000,
    programs: ['Education', 'Healthcare', 'Livelihoods'],
    centerX: 0,
    centerY: 45,
    active: true,
  },
  southernAfrica: {
    id: 'southernAfrica',
    nameEn: 'Southern Africa',
    nameAr: 'جنوب أفريقيا',
    beneficiaries: 95000,
    programs: ['Healthcare', 'Food Security', 'Shelter & WASH'],
    centerX: 25,
    centerY: 75,
    active: true,
  },
  southAsia: {
    id: 'southAsia',
    nameEn: 'South Asia',
    nameAr: 'جنوب آسيا',
    beneficiaries: 185000,
    programs: ['Emergency Response', 'Education', 'Livelihoods', 'Healthcare'],
    centerX: 75,
    centerY: 45,
    active: true,
  },
  southeastAsia: {
    id: 'southeastAsia',
    nameEn: 'Southeast Asia',
    nameAr: 'جنوب شرق آسيا',
    beneficiaries: 75000,
    programs: ['Education', 'Healthcare', 'Disaster Relief'],
    centerX: 90,
    centerY: 55,
    active: true,
  },
  latin: {
    id: 'latin',
    nameEn: 'Latin America',
    nameAr: 'أمريكا اللاتينية',
    beneficiaries: 110000,
    programs: ['Food Security', 'Education', 'Healthcare', 'Shelter & WASH'],
    centerX: 15,
    centerY: 65,
    active: true,
  },
  caribbean: {
    id: 'caribbean',
    nameEn: 'Caribbean',
    nameAr: 'منطقة البحر الكاريبي',
    beneficiaries: 45000,
    programs: ['Disaster Relief', 'Healthcare', 'Education'],
    centerX: 25,
    centerY: 60,
    active: true,
  },
};

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const pageContent = {
  en: {
    pageTitle: 'Global Impact Map',
    pageDescription: 'Explore our humanitarian impact across the world. Click on regions to see detailed statistics, beneficiary counts, and active programs in each area.',
    filterLabel: 'Filter by Program:',
    allPrograms: 'All Programs',
    statistics: 'Regional Statistics',
    totalBeneficiaries: 'Total Beneficiaries',
    beneficiaries: 'Beneficiaries',
    activePrograms: 'Active Programs',
    programs: 'Programs',
    region: 'Region',
    noData: 'Select a region to view details',
    zoom: 'Zoom',
    reset: 'Reset View',
    legend: 'Legend',
    countries: 'Countries Served',
    impact: 'Global Reach',
    zoom_in: 'Zoom In',
    zoom_out: 'Zoom Out',
  },
  ar: {
    pageTitle: 'خريطة الأثر العالمي',
    pageDescription: 'استكشف أثرنا الإنساني حول العالم. انقر على المناطق لرؤية إحصائيات مفصلة وعدد المستفيدين والبرامج النشطة في كل منطقة.',
    filterLabel: 'تصفية حسب البرنامج:',
    allPrograms: 'جميع البرامج',
    statistics: 'إحصائيات المناطق',
    totalBeneficiaries: 'إجمالي المستفيدين',
    beneficiaries: 'المستفيدون',
    activePrograms: 'البرامج النشطة',
    programs: 'البرامج',
    region: 'المنطقة',
    noData: 'اختر منطقة لعرض التفاصيل',
    zoom: 'تكبير',
    reset: 'إعادة تعيين',
    legend: 'المفتاح',
    countries: 'الدول المخدومة',
    impact: 'النطاق العالمي',
    zoom_in: 'تكبير',
    zoom_out: 'تصغير',
  },
};

const programColors: Record<string, string> = {
  'Emergency Response': royalColors.charityRed,
  'Healthcare': royalColors.compassionTeal,
  'Education': royalColors.impactGreen,
  'Food Security': royalColors.hashemiteGold,
  'Shelter & WASH': royalColors.skyBlue,
  'Livelihoods': royalColors.deepRoyal,
  'Disaster Relief': royalColors.royalBurgundy,
};

const RegionBubble: React.FC<{
  region: RegionData;
  isSelected: boolean;
  isFiltered: boolean;
  onClick: () => void;
  zoomLevel: number;
  locale: Locale;
}> = ({ region, isSelected, isFiltered, onClick, zoomLevel, locale }) => {
  const x = (region.centerX * (100 + zoomLevel * 5)) / 100;
  const y = (region.centerY * (100 + zoomLevel * 5)) / 100;
  const size = 20 + (isSelected ? 15 : 0) + (isFiltered ? 0 : -5);

  return (
    <g onClick={onClick} style={{ cursor: 'pointer' }}>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r={size}
        fill={isSelected ? royalColors.deepRoyal : royalColors.hashemiteGold}
        opacity={isFiltered ? 1 : 0.3}
        style={{
          transition: 'all 300ms ease',
          filter: isSelected ? `drop-shadow(0 0 8px ${royalColors.deepRoyal})` : 'none',
        }}
      />
      {isSelected && (
        <circle
          cx={`${x}%`}
          cy={`${y}%`}
          r={size + 5}
          fill="none"
          stroke={royalColors.deepRoyal}
          strokeWidth="2"
          opacity="0.5"
          style={{ animation: 'pulse-ring 2s infinite' }}
        />
      )}
      {isSelected && (
        <text
          x={`${x}%`}
          y={`${y}%`}
          textAnchor="middle"
          dy="0.3em"
          fontSize="10"
          fontWeight="bold"
          fill="white"
          pointerEvents="none"
        >
          {locale === 'ar' ? region.nameAr.split(' ')[0] : region.nameEn.split(' ')[0]}
        </text>
      )}
    </g>
  );
};

export default function ImpactMapPage(props: PageProps) {
  const paramsPromise = props.params;
  const [locale, setLocale] = useState<Locale>('en');
  const [selectedRegion, setSelectedRegion] = useState<string | null>('mena');
  const [selectedProgram, setSelectedProgram] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(0);

  useEffect(() => {
    paramsPromise.then((params) => {
      setLocale(params.locale);
    });
  }, [paramsPromise]);

  const content = pageContent[locale];
  const isRTL = locale === 'ar';

  // Get all unique programs
  const allPrograms = Array.from(
    new Set(Object.values(regionDatabase).flatMap((r) => r.programs))
  ).sort();

  // Filter regions based on selected program
  const filteredRegions = Object.values(regionDatabase).filter((region) =>
    selectedProgram === 'all' ? true : region.programs.includes(selectedProgram)
  );

  // Calculate total statistics
  const totalBeneficiaries = Object.values(regionDatabase).reduce(
    (sum, region) => sum + region.beneficiaries,
    0
  );
  const totalCountries = 30;

  const selectedRegionData = selectedRegion
    ? regionDatabase[selectedRegion]
    : null;

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel((prev) => {
      const newLevel = direction === 'in' ? prev + 20 : prev - 20;
      return Math.max(0, Math.min(80, newLevel));
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: royalColors.bgRefined,
        padding: `${spacing.lg} 0`,
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <style>{`
        @keyframes pulse-ring {
          0% {
            r: 25px;
            opacity: 0.7;
          }
          50% {
            r: 30px;
            opacity: 0.3;
          }
          100% {
            r: 25px;
            opacity: 0.7;
          }
        }

        @media (max-width: 768px) {
          .impact-map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Header Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${spacing.md}` }}>
        <div style={{ marginBottom: spacing.xl }}>
          <h1
            style={{
              fontSize: royalTypography.sizes.h1,
              fontFamily: royalTypography.serif,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.deepRoyal,
              marginBottom: spacing.sm,
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            {content.pageTitle}
          </h1>
          <p
            style={{
              fontSize: royalTypography.sizes.body,
              color: royalColors.textSecondary,
              maxWidth: '800px',
              lineHeight: royalTypography.lineHeights.normal,
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            {content.pageDescription}
          </p>
        </div>

        {/* Global Statistics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.md,
            marginBottom: spacing.xl,
          }}
        >
          <div
            style={{
              background: royalColors.bgLight,
              padding: spacing.md,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.subtle,
              borderLeft: `4px solid ${royalColors.deepRoyal}`,
            }}
          >
            <p
              style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
                marginBottom: spacing.xs,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {content.totalBeneficiaries}
            </p>
            <p
              style={{
                fontSize: royalTypography.sizes.h2,
                fontFamily: royalTypography.serif,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.deepRoyal,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {(totalBeneficiaries / 1000000).toFixed(1)}M+
            </p>
          </div>
          <div
            style={{
              background: royalColors.bgLight,
              padding: spacing.md,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.subtle,
              borderLeft: `4px solid ${royalColors.hashemiteGold}`,
            }}
          >
            <p
              style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
                marginBottom: spacing.xs,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {content.countries}
            </p>
            <p
              style={{
                fontSize: royalTypography.sizes.h2,
                fontFamily: royalTypography.serif,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.hashemiteGold,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {totalCountries}+
            </p>
          </div>
          <div
            style={{
              background: royalColors.bgLight,
              padding: spacing.md,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.subtle,
              borderLeft: `4px solid ${royalColors.impactGreen}`,
            }}
          >
            <p
              style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
                marginBottom: spacing.xs,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {content.activePrograms}
            </p>
            <p
              style={{
                fontSize: royalTypography.sizes.h2,
                fontFamily: royalTypography.serif,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.impactGreen,
                textAlign: isRTL ? 'right' : 'left',
              }}
            >
              {allPrograms.length}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className="impact-map-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: spacing.lg,
            marginBottom: spacing.xl,
          }}
        >
          {/* Map Section */}
          <div
            style={{
              background: royalColors.bgLight,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.default,
              padding: spacing.lg,
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Zoom Controls */}
            <div
              style={{
                display: 'flex',
                gap: spacing.sm,
                marginBottom: spacing.md,
                justifyContent: isRTL ? 'flex-start' : 'flex-end',
              }}
            >
              <button
                onClick={() => handleZoom('in')}
                style={{
                  padding: `${spacing.xs} ${spacing.sm}`,
                  background: royalColors.deepRoyal,
                  color: royalColors.bgLight,
                  border: 'none',
                  borderRadius: borderRadius.md,
                  cursor: 'pointer',
                  fontSize: royalTypography.sizes.small,
                  fontWeight: royalTypography.weights.semibold,
                  transition: 'all 200ms ease',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.hashemiteGold;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.deepRoyal;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.deepRoyal;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.bgLight;
                }}
              >
                {content.zoom_in}
              </button>
              <button
                onClick={() => handleZoom('out')}
                style={{
                  padding: `${spacing.xs} ${spacing.sm}`,
                  background: royalColors.deepRoyal,
                  color: royalColors.bgLight,
                  border: 'none',
                  borderRadius: borderRadius.md,
                  cursor: 'pointer',
                  fontSize: royalTypography.sizes.small,
                  fontWeight: royalTypography.weights.semibold,
                  transition: 'all 200ms ease',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.hashemiteGold;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.deepRoyal;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.deepRoyal;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.bgLight;
                }}
              >
                {content.zoom_out}
              </button>
              <button
                onClick={() => {
                  setZoomLevel(0);
                  setSelectedRegion('mena');
                }}
                style={{
                  padding: `${spacing.xs} ${spacing.sm}`,
                  background: royalColors.hashemiteGold,
                  color: royalColors.deepRoyal,
                  border: 'none',
                  borderRadius: borderRadius.md,
                  cursor: 'pointer',
                  fontSize: royalTypography.sizes.small,
                  fontWeight: royalTypography.weights.semibold,
                  transition: 'all 200ms ease',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.deepRoyal;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.hashemiteGold;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = royalColors.hashemiteGold;
                  (e.currentTarget as HTMLButtonElement).style.color = royalColors.deepRoyal;
                }}
              >
                {content.reset}
              </button>
            </div>

            {/* SVG Map */}
            <svg
              viewBox="0 0 100 100"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
                borderRadius: borderRadius.md,
                cursor: 'pointer',
              }}
            >
              {/* World regions background circles (simplified world map representation) */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Placeholders for continents */}
              <rect x="5" y="15" width="25" height="20" fill={royalColors.paleGold} opacity="0.15" rx="3" />
              <text x="17" y="27" textAnchor="middle" fontSize="8" fill={royalColors.textSecondary} opacity="0.5">
                {locale === 'ar' ? 'أفريقيا' : 'Africa'}
              </text>

              <rect x="35" y="10" width="20" height="25" fill={royalColors.paleGold} opacity="0.15" rx="3" />
              <text x="45" y="24" textAnchor="middle" fontSize="8" fill={royalColors.textSecondary} opacity="0.5">
                {locale === 'ar' ? 'آسيا' : 'Asia'}
              </text>

              <rect x="5" y="50" width="25" height="30" fill={royalColors.paleGold} opacity="0.15" rx="3" />
              <text x="17" y="66" textAnchor="middle" fontSize="8" fill={royalColors.textSecondary} opacity="0.5">
                {locale === 'ar' ? 'أمريكا' : 'Americas'}
              </text>

              {/* Render regions as interactive bubbles */}
              {Object.values(regionDatabase).map((region) => (
                <RegionBubble
                  key={region.id}
                  region={region}
                  isSelected={selectedRegion === region.id}
                  isFiltered={
                    selectedProgram === 'all' || region.programs.includes(selectedProgram)
                  }
                  onClick={() => setSelectedRegion(region.id)}
                  zoomLevel={zoomLevel}
                  locale={locale}
                />
              ))}
            </svg>

            {/* Program Filter */}
            <div
              style={{
                marginTop: spacing.md,
                display: 'flex',
                flexWrap: 'wrap',
                gap: spacing.sm,
                alignItems: 'center',
              }}
            >
              <label
                style={{
                  fontSize: royalTypography.sizes.small,
                  fontWeight: royalTypography.weights.semibold,
                  color: royalColors.textSecondary,
                }}
              >
                {content.filterLabel}
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                style={{
                  padding: `${spacing.xs} ${spacing.sm}`,
                  borderRadius: borderRadius.md,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  fontSize: royalTypography.sizes.small,
                  background: royalColors.bgLight,
                  color: royalColors.textOfficial,
                  cursor: 'pointer',
                  fontFamily: royalTypography.sansSerif,
                }}
              >
                <option value="all">{content.allPrograms}</option>
                {allPrograms.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Details Panel */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.md,
            }}
          >
            {/* Selected Region Card */}
            <div
              style={{
                background: royalColors.bgLight,
                borderRadius: borderRadius.lg,
                boxShadow: shadows.default,
                padding: spacing.lg,
                minHeight: '300px',
              }}
            >
              <h2
                style={{
                  fontSize: royalTypography.sizes.h4,
                  fontFamily: royalTypography.serif,
                  fontWeight: royalTypography.weights.bold,
                  color: royalColors.deepRoyal,
                  marginBottom: spacing.md,
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                {content.statistics}
              </h2>

              {selectedRegionData ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing.md,
                  }}
                >
                  <div
                    style={{
                      paddingBottom: spacing.md,
                      borderBottom: `1px solid ${royalColors.borderSubtle}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: royalTypography.sizes.small,
                        color: royalColors.textSecondary,
                        marginBottom: spacing.xs,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    >
                      {content.region}
                    </p>
                    <p
                      style={{
                        fontSize: royalTypography.sizes.h4,
                        fontFamily: royalTypography.serif,
                        fontWeight: royalTypography.weights.bold,
                        color: royalColors.deepRoyal,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    >
                      {locale === 'ar' ? selectedRegionData.nameAr : selectedRegionData.nameEn}
                    </p>
                  </div>

                  <div
                    style={{
                      paddingBottom: spacing.md,
                      borderBottom: `1px solid ${royalColors.borderSubtle}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: royalTypography.sizes.small,
                        color: royalColors.textSecondary,
                        marginBottom: spacing.xs,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    >
                      {content.beneficiaries}
                    </p>
                    <p
                      style={{
                        fontSize: royalTypography.sizes.h3,
                        fontFamily: royalTypography.serif,
                        fontWeight: royalTypography.weights.bold,
                        color: royalColors.hashemiteGold,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    >
                      {(selectedRegionData.beneficiaries / 1000).toFixed(0)}K+
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: royalTypography.sizes.small,
                        color: royalColors.textSecondary,
                        marginBottom: spacing.sm,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    >
                      {content.programs}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: spacing.xs,
                      }}
                    >
                      {selectedRegionData.programs.map((program) => (
                        <div
                          key={program}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: spacing.sm,
                            padding: spacing.sm,
                            background: royalColors.richCream,
                            borderRadius: borderRadius.md,
                            borderLeft: `3px solid ${programColors[program] || royalColors.deepRoyal}`,
                          }}
                        >
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: programColors[program] || royalColors.deepRoyal,
                            }}
                          />
                          <span
                            style={{
                              fontSize: royalTypography.sizes.small,
                              color: royalColors.textOfficial,
                              fontWeight: royalTypography.weights.medium,
                            }}
                          >
                            {program}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px',
                    textAlign: 'center',
                    color: royalColors.textSecondary,
                  }}
                >
                  <p>{content.noData}</p>
                </div>
              )}
            </div>

            {/* Program Legend */}
            <div
              style={{
                background: royalColors.bgLight,
                borderRadius: borderRadius.lg,
                boxShadow: shadows.default,
                padding: spacing.lg,
              }}
            >
              <h3
                style={{
                  fontSize: royalTypography.sizes.h5,
                  fontFamily: royalTypography.serif,
                  fontWeight: royalTypography.weights.bold,
                  color: royalColors.deepRoyal,
                  marginBottom: spacing.md,
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                {content.legend}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: spacing.sm,
                }}
              >
                {allPrograms.map((program) => (
                  <div
                    key={program}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing.sm,
                    }}
                  >
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: programColors[program] || royalColors.deepRoyal,
                      }}
                    />
                    <span
                      style={{
                        fontSize: royalTypography.sizes.small,
                        color: royalColors.textSecondary,
                      }}
                    >
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regional Details Grid */}
        <div
          style={{
            marginTop: spacing.xl,
          }}
        >
          <h2
            style={{
              fontSize: royalTypography.sizes.h3,
              fontFamily: royalTypography.serif,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.deepRoyal,
              marginBottom: spacing.lg,
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            {content.statistics}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.md,
            }}
          >
            {filteredRegions.map((region) => (
              <div
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                style={{
                  background: royalColors.bgLight,
                  borderRadius: borderRadius.lg,
                  boxShadow: shadows.subtle,
                  padding: spacing.lg,
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  border:
                    selectedRegion === region.id
                      ? `2px solid ${royalColors.deepRoyal}`
                      : `1px solid ${royalColors.borderSubtle}`,
                  transform: selectedRegion === region.id ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseOver={(e) => {
                  if (selectedRegion !== region.id) {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.default;
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedRegion !== region.id) {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.subtle;
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }
                }}
              >
                <h3
                  style={{
                    fontSize: royalTypography.sizes.h5,
                    fontFamily: royalTypography.serif,
                    fontWeight: royalTypography.weights.bold,
                    color: royalColors.deepRoyal,
                    marginBottom: spacing.sm,
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {locale === 'ar' ? region.nameAr : region.nameEn}
                </h3>
                <p
                  style={{
                    fontSize: royalTypography.sizes.h4,
                    fontFamily: royalTypography.serif,
                    fontWeight: royalTypography.weights.bold,
                    color: royalColors.hashemiteGold,
                    marginBottom: spacing.md,
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  {(region.beneficiaries / 1000).toFixed(0)}K {content.beneficiaries}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: spacing.xs,
                  }}
                >
                  {region.programs.slice(0, 3).map((program) => (
                    <span
                      key={program}
                      style={{
                        fontSize: royalTypography.sizes.tiny,
                        background: programColors[program] || royalColors.deepRoyal,
                        color: royalColors.bgLight,
                        padding: `${spacing.xs} ${spacing.sm}`,
                        borderRadius: borderRadius.md,
                        fontWeight: royalTypography.weights.medium,
                      }}
                    >
                      {program}
                    </span>
                  ))}
                  {region.programs.length > 3 && (
                    <span
                      style={{
                        fontSize: royalTypography.sizes.tiny,
                        background: royalColors.textSecondary,
                        color: royalColors.bgLight,
                        padding: `${spacing.xs} ${spacing.sm}`,
                        borderRadius: borderRadius.md,
                        fontWeight: royalTypography.weights.medium,
                      }}
                    >
                      +{region.programs.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
