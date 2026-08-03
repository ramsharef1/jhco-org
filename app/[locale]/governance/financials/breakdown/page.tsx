'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import { useState } from 'react';

interface BudgetCategory {
  name: {
    en: string;
    ar: string;
  };
  amount: number;
  percentage: number;
  color: string;
}

interface RevenueSource {
  name: {
    en: string;
    ar: string;
  };
  amount: number;
  percentage: number;
  color: string;
}

const expensesByProgram: BudgetCategory[] = [
  {
    name: { en: 'Crisis Response & Emergency Aid', ar: 'الاستجابة للأزمات والمساعدة الطارئة' },
    amount: 12500000,
    percentage: 29,
    color: '#c41e3a',
  },
  {
    name: { en: 'Healthcare Programs', ar: 'برامج الرعاية الصحية' },
    amount: 10800000,
    percentage: 25,
    color: '#0d7377',
  },
  {
    name: { en: 'Education & Youth Development', ar: 'التعليم وتطوير الشباب' },
    amount: 8600000,
    percentage: 20,
    color: '#4a7c7e',
  },
  {
    name: { en: 'Food Security & Nutrition', ar: 'الأمن الغذائي والتغذية' },
    amount: 6200000,
    percentage: 14,
    color: '#1b4332',
  },
  {
    name: { en: 'Shelter & WASH Programs', ar: 'برامج المأوى والصرف الصحي' },
    amount: 3900000,
    percentage: 9,
    color: '#5d1049',
  },
  {
    name: { en: 'Livelihoods & Economic Support', ar: 'سبل العيش والدعم الاقتصادي' },
    amount: 1900000,
    percentage: 3,
    color: '#d4af37',
  },
];

const revenueSources: RevenueSource[] = [
  {
    name: { en: 'Individual Donations', ar: 'التبرعات الفردية' },
    amount: 18500000,
    percentage: 43,
    color: '#4a148c',
  },
  {
    name: { en: 'Corporate & Foundation Grants', ar: 'المنح من الشركات والمؤسسات' },
    amount: 15200000,
    percentage: 35,
    color: '#001a4d',
  },
  {
    name: { en: 'Government Partnerships', ar: 'شراكات حكومية' },
    amount: 6800000,
    percentage: 16,
    color: '#2b2d42',
  },
  {
    name: { en: 'International Aid Organizations', ar: 'منظمات المساعدة الدولية' },
    amount: 3500000,
    percentage: 8,
    color: '#0d7377',
  },
];

const totalBudget = expensesByProgram.reduce((sum, cat) => sum + cat.amount, 0);

const pageContent = {
  en: {
    title: 'Budget Breakdown',
    heroTitle: 'Financial Budget Breakdown',
    heroSubtitle: 'Comprehensive overview of JHCO\'s financial allocation by program, demonstrating our commitment to transparent and accountable resource management',
    sections: {
      expensesChart: 'Program Expenses Allocation',
      revenueChart: 'Revenue Sources Distribution',
      totalBudget: 'Total Annual Budget',
      breakdown: 'Detailed Budget Breakdown',
      amount: 'Amount (USD)',
      percentage: 'Allocation %',
      program: 'Program',
      source: 'Revenue Source',
      financialHealth: 'Financial Health Overview',
      programExpenses: 'Program Expenses',
      administrativeExpenses: 'Administrative & Operations',
      fundRaising: 'Fundraising Costs',
      keyMetrics: 'Key Financial Metrics',
      efficiencyRatio: 'Program Spending Ratio',
      costPerBeneficiary: 'Average Cost per Beneficiary',
      fundRetention: 'Donor Fund Retention Rate',
      auditStatus: 'Audit Status',
      certifications: 'Compliance Certifications',
      lastUpdated: 'Last Updated',
      viewFullReport: 'View Full Financial Report',
    },
  },
  ar: {
    title: 'تفصيل الميزانية',
    heroTitle: 'تفصيل الميزانية المالية',
    heroSubtitle: 'نظرة شاملة على تخصيص موارد الهيئة حسب البرنامج، مما يوضح التزامنا بإدارة الموارد بشفافية وسيطرة قابلة للمساءلة',
    sections: {
      expensesChart: 'تخصيص نفقات البرنامج',
      revenueChart: 'توزيع مصادر الإيرادات',
      totalBudget: 'إجمالي الميزانية السنوية',
      breakdown: 'تفصيل الميزانية المفصل',
      amount: 'المبلغ (دولار أمريكي)',
      percentage: 'نسبة التخصيص %',
      program: 'البرنامج',
      source: 'مصدر الإيرادات',
      financialHealth: 'نظرة عامة على الصحة المالية',
      programExpenses: 'نفقات البرنامج',
      administrativeExpenses: 'المصروفات الإدارية والتشغيلية',
      fundRaising: 'تكاليف جمع الأموال',
      keyMetrics: 'مؤشرات مالية رئيسية',
      efficiencyRatio: 'نسبة الإنفاق البرنامجي',
      costPerBeneficiary: 'متوسط التكلفة لكل مستفيد',
      fundRetention: 'نسبة الاحتفاظ بأموال المانحين',
      auditStatus: 'حالة التدقيق',
      certifications: 'شهادات الامتثال',
      lastUpdated: 'آخر تحديث',
      viewFullReport: 'عرض التقرير المالي الكامل',
    },
  },
};

// Pie chart component
function PieChart({
  data,
  width = 300,
  height = 300,
  colors
}: {
  data: BudgetCategory[] | RevenueSource[];
  width?: number;
  height?: number;
  colors: string[];
}) {
  const radius = 90;
  const cx = width / 2;
  const cy = height / 2;

  let currentAngle = -Math.PI / 2;
  const slices = data.map((item, idx) => {
    const sliceAngle = (item.percentage / 100) * Math.PI * 2;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);

    const largeArc = sliceAngle > Math.PI ? 1 : 0;

    const pathData = [
      `M ${cx} ${cy}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      'Z',
    ].join(' ');

    const labelAngle = startAngle + sliceAngle / 2;
    const labelRadius = radius * 0.65;
    const labelX = cx + labelRadius * Math.cos(labelAngle);
    const labelY = cy + labelRadius * Math.sin(labelAngle);

    currentAngle = endAngle;

    return {
      path: pathData,
      color: colors[idx],
      percentage: item.percentage,
      labelX,
      labelY,
    };
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: '100%' }}>
      {slices.map((slice, idx) => (
        <g key={idx}>
          <path d={slice.path} fill={slice.color} stroke="white" strokeWidth="2" />
          {slice.percentage > 5 && (
            <text
              x={slice.labelX}
              y={slice.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fontWeight="700"
              fill="white"
              fontFamily={royalTypography.serif}
            >
              {slice.percentage}%
            </text>
          )}
        </g>
      ))}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="white" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

export default function BudgetBreakdownPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const base = `/${locale}`;

  const expenseColors = expensesByProgram.map(cat => cat.color);
  const revenueColors = revenueSources.map(src => src.color);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(ar ? 'ar-SA' : 'en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal}, ${royalColors.darkNavy})`,
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
            {ar ? 'الإدارة المالية' : 'Financial Management'}
          </p>
          <h1 style={{
            fontSize: '64px',
            fontFamily: royalTypography.serif,
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '24px',
            marginTop: 0,
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

      {/* Budget Overview Stats */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '64px 32px',
        borderBottom: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              borderRadius: '0px',
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{
                fontSize: '12px',
                color: royalColors.textOfficial,
                textTransform: 'uppercase',
                fontWeight: '600',
                letterSpacing: '1px',
                margin: '0 0 12px 0',
              }}>
                {content.sections.totalBudget}
              </p>
              <p style={{
                fontSize: '36px',
                fontWeight: '800',
                color: royalColors.deepRoyal,
                fontFamily: royalTypography.serif,
                margin: 0,
              }}>
                {formatCurrency(totalBudget)}
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: '12px 0 0 0',
              }}>
                {ar ? 'السنة المالية 2026' : 'Fiscal Year 2026'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `1px solid ${royalColors.borderFormal}`,
              borderRadius: '0px',
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{
                fontSize: '12px',
                color: royalColors.textOfficial,
                textTransform: 'uppercase',
                fontWeight: '600',
                letterSpacing: '1px',
                margin: '0 0 12px 0',
              }}>
                {content.sections.efficiencyRatio}
              </p>
              <p style={{
                fontSize: '36px',
                fontWeight: '800',
                color: royalColors.darkNavy,
                fontFamily: royalTypography.serif,
                margin: 0,
              }}>
                89%
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: '12px 0 0 0',
              }}>
                {ar ? 'من الميزانية للبرامج' : 'of budget to programs'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `1px solid ${royalColors.borderFormal}`,
              borderRadius: '0px',
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{
                fontSize: '12px',
                color: royalColors.textOfficial,
                textTransform: 'uppercase',
                fontWeight: '600',
                letterSpacing: '1px',
                margin: '0 0 12px 0',
              }}>
                {content.sections.costPerBeneficiary}
              </p>
              <p style={{
                fontSize: '36px',
                fontWeight: '800',
                color: royalColors.compassionTeal,
                fontFamily: royalTypography.serif,
                margin: 0,
              }}>
                $47
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: '12px 0 0 0',
              }}>
                {ar ? 'لكل مستفيد' : 'per beneficiary'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expenses and Revenue Charts */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '64px',
            marginBottom: '80px',
          }}>
            {/* Expenses Chart */}
            <div style={{
              textAlign: ar ? 'right' : 'left',
            }}>
              <h2 style={{
                fontSize: '32px',
                fontFamily: royalTypography.serif,
                color: royalColors.deepRoyal,
                marginBottom: '32px',
                marginTop: 0,
              }}>
                {content.sections.expensesChart}
              </h2>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '32px',
              }}>
                <PieChart data={expensesByProgram} colors={expenseColors} />
              </div>
            </div>

            {/* Revenue Chart */}
            <div style={{
              textAlign: ar ? 'right' : 'left',
            }}>
              <h2 style={{
                fontSize: '32px',
                fontFamily: royalTypography.serif,
                color: royalColors.deepRoyal,
                marginBottom: '32px',
                marginTop: 0,
              }}>
                {content.sections.revenueChart}
              </h2>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '32px',
              }}>
                <PieChart data={revenueSources} colors={revenueColors} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown Tables */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.sections.breakdown}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '48px',
          }}>
            {/* Expenses Table */}
            <div style={{
              backgroundColor: 'white',
              border: `1px solid ${royalColors.borderFormal}`,
              borderRadius: '0px',
              overflow: 'hidden',
            }}>
              <div style={{
                backgroundColor: royalColors.deepRoyal,
                color: 'white',
                padding: '20px 24px',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: 0,
                  fontFamily: royalTypography.serif,
                }}>
                  {content.sections.programExpenses}
                </h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${royalColors.borderFormal}` }}>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: ar ? 'right' : 'left',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.program}
                      </th>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: 'right',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.amount}
                      </th>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: 'right',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.percentage}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {expensesByProgram.map((program, idx) => (
                      <tr key={idx} style={{
                        borderBottom: `1px solid ${royalColors.borderSubtle}`,
                      }}>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: ar ? 'right' : 'left',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          flexDirection: ar ? 'row-reverse' : 'row',
                        }}>
                          <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: program.color,
                            borderRadius: '2px',
                            flexShrink: 0,
                          }} />
                          <span style={{ color: royalColors.textOfficial }}>
                            {program.name[locale]}
                          </span>
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: 'right',
                          color: royalColors.textOfficial,
                          fontWeight: '600',
                        }}>
                          {formatCurrency(program.amount)}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: 'right',
                          color: royalColors.hashemiteGold,
                          fontWeight: '700',
                        }}>
                          {program.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revenue Table */}
            <div style={{
              backgroundColor: 'white',
              border: `1px solid ${royalColors.borderFormal}`,
              borderRadius: '0px',
              overflow: 'hidden',
            }}>
              <div style={{
                backgroundColor: royalColors.darkNavy,
                color: 'white',
                padding: '20px 24px',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: 0,
                  fontFamily: royalTypography.serif,
                }}>
                  {ar ? 'مصادر الإيرادات' : 'Revenue Sources'}
                </h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${royalColors.borderFormal}` }}>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: ar ? 'right' : 'left',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.source}
                      </th>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: 'right',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.amount}
                      </th>
                      <th style={{
                        padding: '16px 20px',
                        textAlign: 'right',
                        fontWeight: '600',
                        color: royalColors.textOfficial,
                        backgroundColor: royalColors.bgRefined,
                      }}>
                        {content.sections.percentage}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueSources.map((source, idx) => (
                      <tr key={idx} style={{
                        borderBottom: `1px solid ${royalColors.borderSubtle}`,
                      }}>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: ar ? 'right' : 'left',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          flexDirection: ar ? 'row-reverse' : 'row',
                        }}>
                          <div style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: source.color,
                            borderRadius: '2px',
                            flexShrink: 0,
                          }} />
                          <span style={{ color: royalColors.textOfficial }}>
                            {source.name[locale]}
                          </span>
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: 'right',
                          color: royalColors.textOfficial,
                          fontWeight: '600',
                        }}>
                          {formatCurrency(source.amount)}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: 'right',
                          color: royalColors.hashemiteGold,
                          fontWeight: '700',
                        }}>
                          {source.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Health Metrics */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.sections.financialHealth}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexDirection: ar ? 'row-reverse' : 'row',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>📊</span>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: royalColors.deepRoyal,
                  margin: 0,
                }}>
                  {content.sections.programExpenses}
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '800',
                color: royalColors.deepRoyal,
                fontFamily: royalTypography.serif,
                margin: '0 0 8px 0',
              }}>
                89%
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                {ar ? 'من الميزانية الكلية' : 'of total budget'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexDirection: ar ? 'row-reverse' : 'row',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>⚙️</span>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: royalColors.deepRoyal,
                  margin: 0,
                }}>
                  {content.sections.administrativeExpenses}
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '800',
                color: royalColors.deepRoyal,
                fontFamily: royalTypography.serif,
                margin: '0 0 8px 0',
              }}>
                11%
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                {ar ? 'من الميزانية الكلية' : 'of total budget'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexDirection: ar ? 'row-reverse' : 'row',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>💰</span>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: royalColors.deepRoyal,
                  margin: 0,
                }}>
                  {content.sections.fundRetention}
                </h3>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: '800',
                color: royalColors.deepRoyal,
                fontFamily: royalTypography.serif,
                margin: '0 0 8px 0',
              }}>
                96%
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                {ar ? 'من أموال المانحين' : 'of donor funds'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              border: `2px solid ${royalColors.hashemiteGold}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexDirection: ar ? 'row-reverse' : 'row',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>✓</span>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: royalColors.deepRoyal,
                  margin: 0,
                }}>
                  {content.sections.auditStatus}
                </h3>
              </div>
              <p style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1b4332',
                margin: '0 0 8px 0',
              }}>
                {ar ? 'معتمدة' : 'Certified'}
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textSecondary,
                margin: 0,
              }}>
                {ar ? 'آراء نظيفة من المدققين' : 'Clean audit opinions'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '64px 32px',
        borderTop: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '32px',
            marginTop: 0,
          }}>
            {content.sections.certifications}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              { icon: '📋', label: ar ? 'الامتثال IFRS الكامل' : 'Full IFRS Compliance' },
              { icon: '🏆', label: ar ? 'ISO 9001:2015' : 'ISO 9001:2015' },
              { icon: '🔒', label: ar ? 'ISO 27001:2022' : 'ISO 27001:2022' },
              { icon: '⚖️', label: ar ? 'معتمد من البنك الدولي' : 'World Bank Certified' },
              { icon: '🌍', label: ar ? 'شفافية دولية' : 'International Transparency' },
              { icon: '✓', label: ar ? 'خالية من النتائج الجوهرية' : 'Zero Material Findings' },
            ].map((cert, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '24px',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: '0px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '32px', margin: '0 0 12px 0' }}>{cert.icon}</p>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: royalColors.textOfficial,
                  margin: 0,
                }}>
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '64px 32px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
          }}>
            {ar ? 'أريد معرفة المزيد' : 'Want More Details?'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '32px',
            margin: 0,
          }}>
            {ar
              ? 'راجع تقرير الميزانية المالية الكاملة، والكشوفات المالية السنوية، والتقارير المدقق عليها'
              : 'Review our complete financial reports, annual statements, and audited financial disclosures'}
          </p>

          <button
            onClick={() => {
              window.location.href = `/${locale}/financial-reports`;
            }}
            style={{
              backgroundColor: royalColors.deepRoyal,
              color: royalColors.hashemiteGold,
              border: 'none',
              padding: '14px 32px',
              borderRadius: '2px',
              fontSize: '16px',
              fontWeight: '700',
              fontFamily: royalTypography.serif,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 200ms ease-in-out',
              boxShadow: '0 8px 20px -2px rgba(74, 20, 140, 0.2)',
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#5e35b1';
              (e.target as HTMLButtonElement).style.boxShadow = '0 12px 28px -4px rgba(74, 20, 140, 0.3)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = royalColors.deepRoyal;
              (e.target as HTMLButtonElement).style.boxShadow = '0 8px 20px -2px rgba(74, 20, 140, 0.2)';
            }}
          >
            {content.sections.viewFullReport}
          </button>
        </div>
      </section>
    </div>
  );
}
