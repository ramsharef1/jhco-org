'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

interface DashboardParams {
  params: Promise<{ locale: Locale }>;
}

// Dashboard content - bilingual
const dashboardContent = {
  en: {
    title: 'Live Impact Dashboard',
    subtitle: 'Real-time tracking of our global humanitarian impact',
    lastUpdated: 'Last Updated',
    refresh: 'Refresh',

    // Real-time Counters
    counters: {
      title: 'Real-Time Impact Metrics',
      metrics: [
        { id: 'lives', label: 'Lives Improved', target: 125480, icon: '👥', color: royalColors.charityRed },
        { id: 'schools', label: 'Schools Reached', target: 487, icon: '📚', color: royalColors.impactGreen },
        { id: 'meals', label: 'Meals Provided', target: 342156, icon: '🍽️', color: royalColors.hashemiteGold },
        { id: 'families', label: 'Families Supported', target: 75840, icon: '👨‍👩‍👧‍👦', color: royalColors.compassionTeal },
        { id: 'medical', label: 'Medical Consultations', target: 98650, icon: '🏥', color: royalColors.skyBlue },
        { id: 'scholarships', label: 'Scholarships Awarded', target: 2345, icon: '🎓', color: royalColors.deepRoyal },
      ],
    },

    // Statistics Cards
    statistics: {
      title: 'Key Performance Indicators',
      cards: [
        {
          title: 'Emergency Response',
          value: '15,240',
          label: 'Families Assisted',
          trend: '+12%',
          program: 'Emergency Response',
          icon: '🚨',
          color: royalColors.charityRed,
        },
        {
          title: 'Healthcare Initiative',
          value: '98,650',
          label: 'Medical Consultations',
          trend: '+8%',
          program: 'Healthcare',
          icon: '🏥',
          color: royalColors.compassionTeal,
        },
        {
          title: 'Education Program',
          value: '25,480',
          label: 'Students Enrolled',
          trend: '+15%',
          program: 'Education',
          icon: '📚',
          color: royalColors.impactGreen,
        },
        {
          title: 'Food Security',
          value: '342,156',
          label: 'Meals Distributed',
          trend: '+6%',
          program: 'Food Security',
          icon: '🍽️',
          color: royalColors.hashemiteGold,
        },
        {
          title: 'Shelter & WASH',
          value: '8,650',
          label: 'People Served',
          trend: '+5%',
          program: 'Shelter & WASH',
          icon: '🏠',
          color: royalColors.skyBlue,
        },
        {
          title: 'Livelihoods',
          value: '3,240',
          label: 'Businesses Supported',
          trend: '+18%',
          program: 'Livelihoods',
          icon: '💼',
          color: royalColors.deepRoyal,
        },
      ],
    },

    // Charts Data
    charts: {
      title: 'Impact Visualization',
      programDistribution: {
        title: 'Program Budget Distribution',
        description: 'How resources are allocated across humanitarian programs',
        programs: [
          { name: 'Emergency Response', percentage: 25, color: royalColors.charityRed },
          { name: 'Healthcare', percentage: 20, color: royalColors.compassionTeal },
          { name: 'Education', percentage: 18, color: royalColors.impactGreen },
          { name: 'Food Security', percentage: 15, color: royalColors.hashemiteGold },
          { name: 'Shelter & WASH', percentage: 12, color: royalColors.skyBlue },
          { name: 'Livelihoods', percentage: 10, color: royalColors.deepRoyal },
        ],
      },
      regionalImpact: {
        title: 'Impact by Region',
        description: 'Families supported across major regions',
        regions: [
          { name: 'Middle East', families: 35480, percentage: 46.7 },
          { name: 'North Africa', families: 20540, percentage: 27.1 },
          { name: 'Sub-Saharan Africa', families: 12840, percentage: 16.9 },
          { name: 'Central Asia', families: 6980, percentage: 9.2 },
        ],
      },
      trendData: {
        title: '12-Month Trend',
        description: 'Cumulative impact over the past year',
        months: [
          { month: 'Jan', value: 42000 },
          { month: 'Feb', value: 48500 },
          { month: 'Mar', value: 55200 },
          { month: 'Apr', value: 62100 },
          { month: 'May', value: 69800 },
          { month: 'Jun', value: 75840 },
          { month: 'Jul', value: 81200 },
          { month: 'Aug', value: 87600 },
          { month: 'Sep', value: 93400 },
          { month: 'Oct', value: 98200 },
          { month: 'Nov', value: 110500 },
          { month: 'Dec', value: 125480 },
        ],
      },
    },

    // Filters
    filters: {
      title: 'Filter Data',
      program: 'Program',
      region: 'Region',
      timeframe: 'Timeframe',
      allPrograms: 'All Programs',
      allRegions: 'All Regions',
      programs: [
        'Emergency Response',
        'Healthcare',
        'Education',
        'Food Security',
        'Shelter & WASH',
        'Livelihoods',
      ],
      regions: [
        'Middle East',
        'North Africa',
        'Sub-Saharan Africa',
        'Central Asia',
      ],
      timeframes: [
        { value: '7d', label: 'Last 7 Days' },
        { value: '30d', label: 'Last 30 Days' },
        { value: '90d', label: 'Last 90 Days' },
        { value: '1y', label: 'Last Year' },
        { value: 'all', label: 'All Time' },
      ],
    },

    // Other
    backToImpact: 'Back to Impact Page',
    applyFilters: 'Apply Filters',
    clearFilters: 'Clear Filters',
  },

  ar: {
    title: 'لوحة تأثيرنا المباشرة',
    subtitle: 'تتبع فوري لتأثيرنا الإنساني العالمي',
    lastUpdated: 'آخر تحديث',
    refresh: 'تحديث',

    // Real-time Counters
    counters: {
      title: 'مقاييس التأثير الفورية',
      metrics: [
        { id: 'lives', label: 'حياة تحسنت', target: 125480, icon: '👥', color: royalColors.charityRed },
        { id: 'schools', label: 'المدارس المخدومة', target: 487, icon: '📚', color: royalColors.impactGreen },
        { id: 'meals', label: 'الوجبات المقدمة', target: 342156, icon: '🍽️', color: royalColors.hashemiteGold },
        { id: 'families', label: 'الأسر المدعومة', target: 75840, icon: '👨‍👩‍👧‍👦', color: royalColors.compassionTeal },
        { id: 'medical', label: 'الاستشارات الطبية', target: 98650, icon: '🏥', color: royalColors.skyBlue },
        { id: 'scholarships', label: 'المنح الدراسية', target: 2345, icon: '🎓', color: royalColors.deepRoyal },
      ],
    },

    // Statistics Cards
    statistics: {
      title: 'مؤشرات الأداء الرئيسية',
      cards: [
        {
          title: 'الاستجابة للطوارئ',
          value: '15,240',
          label: 'أسرة تم مساعدتها',
          trend: '+12%',
          program: 'الاستجابة للطوارئ',
          icon: '🚨',
          color: royalColors.charityRed,
        },
        {
          title: 'مبادرة الصحة',
          value: '98,650',
          label: 'استشارات طبية',
          trend: '+8%',
          program: 'الصحة',
          icon: '🏥',
          color: royalColors.compassionTeal,
        },
        {
          title: 'برنامج التعليم',
          value: '25,480',
          label: 'طالب مسجل',
          trend: '+15%',
          program: 'التعليم',
          icon: '📚',
          color: royalColors.impactGreen,
        },
        {
          title: 'الأمن الغذائي',
          value: '342,156',
          label: 'وجبة موزعة',
          trend: '+6%',
          program: 'الأمن الغذائي',
          icon: '🍽️',
          color: royalColors.hashemiteGold,
        },
        {
          title: 'المأوى والمياه',
          value: '8,650',
          label: 'شخص مخدوم',
          trend: '+5%',
          program: 'المأوى والمياه',
          icon: '🏠',
          color: royalColors.skyBlue,
        },
        {
          title: 'سبل العيش',
          value: '3,240',
          label: 'عمل مدعوم',
          trend: '+18%',
          program: 'سبل العيش',
          icon: '💼',
          color: royalColors.deepRoyal,
        },
      ],
    },

    // Charts Data
    charts: {
      title: 'تصور التأثير',
      programDistribution: {
        title: 'توزيع ميزانية البرنامج',
        description: 'كيفية تخصيص الموارد عبر البرامج الإنسانية',
        programs: [
          { name: 'الاستجابة للطوارئ', percentage: 25, color: royalColors.charityRed },
          { name: 'الصحة', percentage: 20, color: royalColors.compassionTeal },
          { name: 'التعليم', percentage: 18, color: royalColors.impactGreen },
          { name: 'الأمن الغذائي', percentage: 15, color: royalColors.hashemiteGold },
          { name: 'المأوى والمياه', percentage: 12, color: royalColors.skyBlue },
          { name: 'سبل العيش', percentage: 10, color: royalColors.deepRoyal },
        ],
      },
      regionalImpact: {
        title: 'التأثير حسب المنطقة',
        description: 'الأسر المدعومة عبر المناطق الرئيسية',
        regions: [
          { name: 'الشرق الأوسط', families: 35480, percentage: 46.7 },
          { name: 'شمال أفريقيا', families: 20540, percentage: 27.1 },
          { name: 'أفريقيا جنوب الصحراء', families: 12840, percentage: 16.9 },
          { name: 'آسيا الوسطى', families: 6980, percentage: 9.2 },
        ],
      },
      trendData: {
        title: 'الاتجاه لمدة 12 شهرًا',
        description: 'التأثير التراكمي على مدى العام الماضي',
        months: [
          { month: 'يناير', value: 42000 },
          { month: 'فبراير', value: 48500 },
          { month: 'مارس', value: 55200 },
          { month: 'أبريل', value: 62100 },
          { month: 'مايو', value: 69800 },
          { month: 'يونيو', value: 75840 },
          { month: 'يوليو', value: 81200 },
          { month: 'أغسطس', value: 87600 },
          { month: 'سبتمبر', value: 93400 },
          { month: 'أكتوبر', value: 98200 },
          { month: 'نوفمبر', value: 110500 },
          { month: 'ديسمبر', value: 125480 },
        ],
      },
    },

    // Filters
    filters: {
      title: 'تصفية البيانات',
      program: 'البرنامج',
      region: 'المنطقة',
      timeframe: 'الإطار الزمني',
      allPrograms: 'جميع البرامج',
      allRegions: 'جميع المناطق',
      programs: [
        'الاستجابة للطوارئ',
        'الصحة',
        'التعليم',
        'الأمن الغذائي',
        'المأوى والمياه',
        'سبل العيش',
      ],
      regions: [
        'الشرق الأوسط',
        'شمال أفريقيا',
        'أفريقيا جنوب الصحراء',
        'آسيا الوسطى',
      ],
      timeframes: [
        { value: '7d', label: 'آخر 7 أيام' },
        { value: '30d', label: 'آخر 30 يومًا' },
        { value: '90d', label: 'آخر 90 يومًا' },
        { value: '1y', label: 'آخر سنة' },
        { value: 'all', label: 'في كل الأوقات' },
      ],
    },

    // Other
    backToImpact: 'العودة إلى صفحة التأثير',
    applyFilters: 'تطبيق المرشحات',
    clearFilters: 'مسح المرشحات',
  },
};

// Animated Counter Component
const AnimatedCounter = ({
  target,
  duration = 2000,
  format = false
}: {
  target: number;
  duration?: number;
  format?: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  if (format) {
    return <>{count.toLocaleString()}</>;
  }
  return <>{count}</>;
};

// Simple Bar Chart Component
const BarChart = ({
  programs,
  isArabic
}: {
  programs: Array<{ name: string; percentage: number; color: string }>;
  isArabic: boolean;
}) => {
  return (
    <div style={{ width: '100%' }}>
      {programs.map((program) => (
        <div key={program.name} style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '6px',
              fontSize: royalTypography.sizes.small,
              color: royalColors.textSecondary,
            }}
          >
            <span>{program.name}</span>
            <span style={{ fontWeight: 600 }}>{program.percentage}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '24px',
              backgroundColor: royalColors.bgRefined,
              borderRadius: borderRadius.sm,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: `${program.percentage}%`,
                height: '100%',
                backgroundColor: program.color,
                transition: 'width 0.6s ease-out',
                borderRadius: borderRadius.sm,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Line Chart (Text-based ASCII style)
const LineChart = ({
  months,
  isArabic
}: {
  months: Array<{ month: string; value: number }>;
  isArabic: boolean;
}) => {
  const maxValue = Math.max(...months.map(m => m.value));
  const chartHeight = 120;

  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <div style={{ minWidth: '600px' }}>
        <svg width="100%" height="300" viewBox="0 0 600 300" style={{ minHeight: '300px' }}>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`grid-${i}`}
              x1="50"
              y1={50 + i * 50}
              x2="580"
              y2={50 + i * 50}
              stroke={royalColors.borderSubtle}
              strokeDasharray="4,4"
            />
          ))}

          {/* Axes */}
          <line
            x1="50"
            y1="250"
            x2="580"
            y2="250"
            stroke={royalColors.textSecondary}
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="250"
            stroke={royalColors.textSecondary}
            strokeWidth="2"
          />

          {/* Data line */}
          <polyline
            points={months
              .map((month, i) => {
                const x = 50 + (i * 530) / (months.length - 1);
                const y = 250 - (month.value / maxValue) * 200;
                return `${x},${y}`;
              })
              .join(' ')}
            fill="none"
            stroke={royalColors.hashemiteGold}
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Data points */}
          {months.map((month, i) => {
            const x = 50 + (i * 530) / (months.length - 1);
            const y = 250 - (month.value / maxValue) * 200;
            return (
              <circle
                key={`point-${i}`}
                cx={x}
                cy={y}
                r="4"
                fill={royalColors.deepRoyal}
              />
            );
          })}

          {/* X-axis labels */}
          {months.map((month, i) => (
            i % 2 === 0 && (
              <text
                key={`label-${i}`}
                x={50 + (i * 530) / (months.length - 1)}
                y="275"
                textAnchor="middle"
                fontSize="12"
                fill={royalColors.textSecondary}
              >
                {month.month}
              </text>
            )
          ))}

          {/* Y-axis labels */}
          {[0, 1, 2, 3, 4].map((i) => (
            <text
              key={`y-label-${i}`}
              x="40"
              y={250 - i * 50 + 5}
              textAnchor="end"
              fontSize="12"
              fill={royalColors.textSecondary}
            >
              {Math.round(((maxValue * i) / 4) / 1000)}K
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default function ImpactDashboardPage(props: DashboardParams) {
  const params = use(props.params);
  const locale = params.locale as Locale;
  const content = dashboardContent[locale] || dashboardContent.en;
  const isArabic = locale === 'ar';

  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1y');
  const [lastUpdateTime, setLastUpdateTime] = useState<string>('');

  useEffect(() => {
    // Set current time
    const now = new Date();
    const timeString = now.toLocaleTimeString(locale === 'ar' ? 'ar-SA' : 'en-US');
    const dateString = now.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US');
    setLastUpdateTime(`${dateString} ${timeString}`);
  }, [locale]);

  const handleRefresh = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString(locale === 'ar' ? 'ar-SA' : 'en-US');
    const dateString = now.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US');
    setLastUpdateTime(`${dateString} ${timeString}`);
  };

  const handleClearFilters = () => {
    setSelectedProgram('all');
    setSelectedRegion('all');
    setSelectedTimeframe('1y');
  };

  return (
    <div style={{
      direction: isArabic ? 'rtl' : 'ltr',
      minHeight: '100vh',
      backgroundColor: royalColors.bgRefined,
    }}>
      {/* Header */}
      <header style={{
        background: gradients.royalPrimary,
        color: royalColors.bgLight,
        padding: `${spacing.xl} ${spacing.lg}`,
        textAlign: 'center',
      }}>
        <Link
          href={isArabic ? '/ar/impact' : '/en/impact'}
          style={{
            display: 'inline-block',
            marginBottom: spacing.md,
            color: royalColors.bgLight,
            textDecoration: 'none',
            fontSize: royalTypography.sizes.small,
            fontWeight: 500,
            opacity: 0.9,
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
        >
          ← {content.backToImpact}
        </Link>
        <h1 style={{
          fontSize: royalTypography.sizes.h1,
          fontFamily: royalTypography.serif,
          fontWeight: royalTypography.weights.bold,
          margin: `${spacing.md} 0 ${spacing.xs}`,
          letterSpacing: royalTypography.letterSpacing.wider,
        }}>
          {content.title}
        </h1>
        <p style={{
          fontSize: royalTypography.sizes.body,
          margin: 0,
          opacity: 0.95,
        }}>
          {content.subtitle}
        </p>
        <p style={{
          fontSize: royalTypography.sizes.small,
          margin: `${spacing.md} 0 0`,
          opacity: 0.85,
        }}>
          {content.lastUpdated}: {lastUpdateTime}
          <button
            onClick={handleRefresh}
            style={{
              marginLeft: isArabic ? 0 : spacing.sm,
              marginRight: isArabic ? spacing.sm : 0,
              padding: `${spacing.xs} ${spacing.sm}`,
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: royalColors.bgLight,
              borderRadius: borderRadius.sm,
              cursor: 'pointer',
              fontSize: royalTypography.sizes.small,
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          >
            {content.refresh}
          </button>
        </p>
      </header>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: spacing.xl }}>
        {/* Real-Time Counters */}
        <section style={{ marginBottom: spacing.xxl }}>
          <h2 style={{
            fontSize: royalTypography.sizes.h2,
            fontFamily: royalTypography.serif,
            fontWeight: royalTypography.weights.bold,
            marginBottom: spacing.lg,
            color: royalColors.deepRoyal,
            textAlign: isArabic ? 'right' : 'left',
            letterSpacing: royalTypography.letterSpacing.wider,
          }}>
            {content.counters.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing.xl,
          }}>
            {content.counters.metrics.map((metric) => (
              <div
                key={metric.id}
                style={{
                  background: royalColors.bgLight,
                  border: `2px solid ${metric.color}`,
                  borderRadius: borderRadius.md,
                  padding: spacing.lg,
                  textAlign: 'center',
                  boxShadow: shadows.sm,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = shadows.lg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = shadows.sm;
                }}
              >
                <div style={{
                  fontSize: '40px',
                  marginBottom: spacing.sm,
                }}>
                  {metric.icon}
                </div>
                <div style={{
                  fontSize: royalTypography.sizes.h3,
                  fontWeight: royalTypography.weights.bold,
                  color: metric.color,
                  marginBottom: spacing.xs,
                }}>
                  <AnimatedCounter target={metric.target} format={true} />
                  {metric.id === 'meals' || metric.id === 'medical' ? '+' : ''}
                </div>
                <div style={{
                  fontSize: royalTypography.sizes.small,
                  color: royalColors.textSecondary,
                  fontWeight: 500,
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters Section */}
        <section style={{
          background: royalColors.bgLight,
          border: `1px solid ${royalColors.borderSubtle}`,
          borderRadius: borderRadius.lg,
          padding: spacing.lg,
          marginBottom: spacing.xl,
          boxShadow: shadows.sm,
        }}>
          <h3 style={{
            fontSize: royalTypography.sizes.h4,
            fontWeight: royalTypography.weights.semibold,
            marginBottom: spacing.lg,
            color: royalColors.deepRoyal,
            textAlign: isArabic ? 'right' : 'left',
          }}>
            {content.filters.title}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing.lg,
          }}>
            {/* Program Filter */}
            <div>
              <label style={{
                display: 'block',
                fontSize: royalTypography.sizes.small,
                fontWeight: 600,
                marginBottom: spacing.xs,
                color: royalColors.textOfficial,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.filters.program}
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                style={{
                  width: '100%',
                  padding: `${spacing.sm} ${spacing.md}`,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.sm,
                  fontSize: royalTypography.sizes.body,
                  backgroundColor: royalColors.bgLight,
                  color: royalColors.textOfficial,
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                <option value="all">{content.filters.allPrograms}</option>
                {content.filters.programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label style={{
                display: 'block',
                fontSize: royalTypography.sizes.small,
                fontWeight: 600,
                marginBottom: spacing.xs,
                color: royalColors.textOfficial,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.filters.region}
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: `${spacing.sm} ${spacing.md}`,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.sm,
                  fontSize: royalTypography.sizes.body,
                  backgroundColor: royalColors.bgLight,
                  color: royalColors.textOfficial,
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                <option value="all">{content.filters.allRegions}</option>
                {content.filters.regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeframe Filter */}
            <div>
              <label style={{
                display: 'block',
                fontSize: royalTypography.sizes.small,
                fontWeight: 600,
                marginBottom: spacing.xs,
                color: royalColors.textOfficial,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.filters.timeframe}
              </label>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                style={{
                  width: '100%',
                  padding: `${spacing.sm} ${spacing.md}`,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderRadius: borderRadius.sm,
                  fontSize: royalTypography.sizes.body,
                  backgroundColor: royalColors.bgLight,
                  color: royalColors.textOfficial,
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                {content.filters.timeframes.map((tf) => (
                  <option key={tf.value} value={tf.value}>
                    {tf.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: spacing.md,
            justifyContent: isArabic ? 'flex-end' : 'flex-start',
            flexWrap: 'wrap',
          }}>
            <button
              style={{
                padding: `${spacing.sm} ${spacing.lg}`,
                background: gradients.royalGold,
                color: royalColors.deepRoyal,
                border: 'none',
                borderRadius: borderRadius.sm,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                fontSize: royalTypography.sizes.body,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {content.applyFilters}
            </button>
            <button
              onClick={handleClearFilters}
              style={{
                padding: `${spacing.sm} ${spacing.lg}`,
                background: 'transparent',
                color: royalColors.textSecondary,
                border: `1px solid ${royalColors.borderSubtle}`,
                borderRadius: borderRadius.sm,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: royalTypography.sizes.body,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = royalColors.bgRefined;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {content.clearFilters}
            </button>
          </div>
        </section>

        {/* Statistics Cards */}
        <section style={{ marginBottom: spacing.xxl }}>
          <h2 style={{
            fontSize: royalTypography.sizes.h2,
            fontFamily: royalTypography.serif,
            fontWeight: royalTypography.weights.bold,
            marginBottom: spacing.lg,
            color: royalColors.deepRoyal,
            textAlign: isArabic ? 'right' : 'left',
            letterSpacing: royalTypography.letterSpacing.wider,
          }}>
            {content.statistics.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing.lg,
          }}>
            {content.statistics.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: royalColors.bgLight,
                  border: `1px solid ${royalColors.borderSubtle}`,
                  borderLeft: `4px solid ${card.color}`,
                  borderRadius: borderRadius.md,
                  padding: spacing.lg,
                  boxShadow: shadows.sm,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = shadows.lg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = shadows.sm;
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: spacing.md,
                }}>
                  <div>
                    <div style={{
                      fontSize: royalTypography.sizes.small,
                      color: royalColors.textSecondary,
                      marginBottom: spacing.xs,
                    }}>
                      {card.program}
                    </div>
                    <h3 style={{
                      fontSize: royalTypography.sizes.h4,
                      fontWeight: royalTypography.weights.semibold,
                      margin: 0,
                      color: royalColors.textOfficial,
                    }}>
                      {card.title}
                    </h3>
                  </div>
                  <div style={{ fontSize: '32px' }}>{card.icon}</div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: spacing.sm,
                  marginBottom: spacing.md,
                }}>
                  <div style={{
                    fontSize: royalTypography.sizes.h2,
                    fontWeight: royalTypography.weights.bold,
                    color: card.color,
                  }}>
                    {card.value}
                  </div>
                  <div style={{
                    fontSize: royalTypography.sizes.body,
                    color: royalColors.textSecondary,
                  }}>
                    {card.label}
                  </div>
                </div>

                <div style={{
                  padding: `${spacing.sm} ${spacing.md}`,
                  backgroundColor: card.color + '15',
                  borderRadius: borderRadius.sm,
                  fontSize: royalTypography.sizes.small,
                  fontWeight: 600,
                  color: card.color,
                  textAlign: 'center',
                }}>
                  {card.trend} vs last period
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section style={{ marginBottom: spacing.xxl }}>
          <h2 style={{
            fontSize: royalTypography.sizes.h2,
            fontFamily: royalTypography.serif,
            fontWeight: royalTypography.weights.bold,
            marginBottom: spacing.xl,
            color: royalColors.deepRoyal,
            textAlign: isArabic ? 'right' : 'left',
            letterSpacing: royalTypography.letterSpacing.wider,
          }}>
            {content.charts.title}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: spacing.xl,
          }}>
            {/* Program Distribution Chart */}
            <div style={{
              background: royalColors.bgLight,
              border: `1px solid ${royalColors.borderSubtle}`,
              borderRadius: borderRadius.lg,
              padding: spacing.lg,
              boxShadow: shadows.sm,
            }}>
              <h3 style={{
                fontSize: royalTypography.sizes.h4,
                fontWeight: royalTypography.weights.semibold,
                marginBottom: spacing.xs,
                color: royalColors.deepRoyal,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.charts.programDistribution.title}
              </h3>
              <p style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.charts.programDistribution.description}
              </p>
              <BarChart programs={content.charts.programDistribution.programs} isArabic={isArabic} />
            </div>

            {/* Regional Impact Chart */}
            <div style={{
              background: royalColors.bgLight,
              border: `1px solid ${royalColors.borderSubtle}`,
              borderRadius: borderRadius.lg,
              padding: spacing.lg,
              boxShadow: shadows.sm,
            }}>
              <h3 style={{
                fontSize: royalTypography.sizes.h4,
                fontWeight: royalTypography.weights.semibold,
                marginBottom: spacing.xs,
                color: royalColors.deepRoyal,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.charts.regionalImpact.title}
              </h3>
              <p style={{
                fontSize: royalTypography.sizes.small,
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
                textAlign: isArabic ? 'right' : 'left',
              }}>
                {content.charts.regionalImpact.description}
              </p>
              <BarChart
                programs={content.charts.regionalImpact.regions.map((region) => ({
                  name: region.name,
                  percentage: region.percentage,
                  color: royalColors.hashemiteGold,
                }))}
                isArabic={isArabic}
              />
            </div>
          </div>

          {/* 12-Month Trend */}
          <div style={{
            background: royalColors.bgLight,
            border: `1px solid ${royalColors.borderSubtle}`,
            borderRadius: borderRadius.lg,
            padding: spacing.lg,
            boxShadow: shadows.sm,
            marginTop: spacing.xl,
          }}>
            <h3 style={{
              fontSize: royalTypography.sizes.h4,
              fontWeight: royalTypography.weights.semibold,
              marginBottom: spacing.xs,
              color: royalColors.deepRoyal,
              textAlign: isArabic ? 'right' : 'left',
            }}>
              {content.charts.trendData.title}
            </h3>
            <p style={{
              fontSize: royalTypography.sizes.small,
              color: royalColors.textSecondary,
              marginBottom: spacing.lg,
              textAlign: isArabic ? 'right' : 'left',
            }}>
              {content.charts.trendData.description}
            </p>
            <LineChart months={content.charts.trendData.months} isArabic={isArabic} />
          </div>
        </section>

        {/* Footer */}
        <section style={{
          textAlign: 'center',
          padding: spacing.xl,
          borderTop: `1px solid ${royalColors.borderSubtle}`,
          color: royalColors.textSecondary,
          fontSize: royalTypography.sizes.small,
        }}>
          <p>
            {content.lastUpdated}: {lastUpdateTime}
          </p>
          <p style={{ marginTop: spacing.md, fontSize: royalTypography.sizes.tiny }}>
            This dashboard displays real-time impact data and is updated continuously.
          </p>
        </section>
      </main>

      <style>{`
        @media (max-width: 768px) {
          main {
            padding: ${spacing.lg};
          }

          h1 {
            font-size: ${royalTypography.sizes.h2};
          }

          h2 {
            font-size: ${royalTypography.sizes.h3};
          }
        }
      `}</style>
    </div>
  );
}
