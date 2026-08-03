'use client';

import { countries, regions, regionalData } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactStat from '@/components/ImpactStat';
import WarmCard from '@/components/WarmCard';
import CtaSection from '@/components/CtaSection';
import { spacing, royalColors } from '@/lib/royalDesign';
import { regionColors, type RegionSlug } from '@/lib/regionalConfig';

export default function AfricaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const region = regions.find(r => r.slug === 'africa')!;
  const regionCountries = countries.filter(c => c.region === 'africa');
  const regionConfig = regionColors.africa;
  const africaData = regionalData.africa;

  return (
    <>
      {/* Hero Section with Region-Specific Gradient */}
      <HeroSection
        headline={ar ? africaData.overview.headlineAr : africaData.overview.headline}
        subheadline={ar ? africaData.overview.descriptionAr : africaData.overview.description}
        backgroundGradient={regionConfig.gradient}
        buttons={[
          {
            label: ar ? 'العودة' : 'Back',
            href: `${base}/where-we-work`,
            variant: 'secondary',
          },
        ]}
        minHeight="500px"
      />

      {/* Regional Overview Statistics */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: royalColors.darkNavy,
            marginBottom: spacing.xxxl,
            fontFamily: '"Merriweather", Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'إحصاءات المنطقة الإقليمية' : 'Africa Regional Overview'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing.xxxl,
          }}>
            {africaData.statistics.map((stat, idx) => (
              <ImpactStat
                key={idx}
                number={stat.value}
                label={ar ? stat.labelAr : stat.label}
                icon={stat.icon}
                color={regionConfig.statColor}
                animateOnScroll={true}
              />
            ))}
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: spacing.xl,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            lineHeight: '1.8',
            fontSize: '16px',
            color: royalColors.darkNavy,
          }}>
            <p style={{ marginBottom: spacing.lg }}>
              {ar ? africaData.overview.descriptionAr : africaData.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Country Breakdown with Detailed Stats */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: royalColors.darkNavy,
            marginBottom: spacing.xxxl,
            fontFamily: '"Merriweather", Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'تفصيل الدول' : 'Country Breakdown'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: spacing.lg,
          }}>
            {africaData.countryBreakdown.map((country, idx) => (
              <Link
                key={idx}
                href={`${base}/regions/africa/${country.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: spacing.lg,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    border: `2px solid ${regionConfig.cardColor}`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing.md, fontSize: '32px' }}>
                    <span style={{ marginRight: spacing.sm }}>{country.flag}</span>
                    <span style={{ fontSize: '24px', fontWeight: 600, color: royalColors.darkNavy }}>
                      {ar ? country.nameAr : country.name}
                    </span>
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: spacing.md,
                    fontStyle: 'italic',
                  }}>
                    {ar ? country.officeAr : country.office}
                  </div>

                  <div style={{
                    backgroundColor: `${regionConfig.cardColor}15`,
                    padding: spacing.md,
                    borderRadius: '8px',
                    marginBottom: spacing.md,
                  }}>
                    <div style={{ fontSize: '28px', fontWeight: 700, color: regionConfig.cardColor }}>
                      {country.beneficiaries}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                      {ar ? 'المستفيدون المباشرون' : 'Direct Beneficiaries'}
                    </div>
                  </div>

                  <div style={{ marginBottom: spacing.md }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: '8px' }}>
                      {ar ? 'البرامج النشطة' : 'Active Programs'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {(ar ? country.programsAr : country.programs).map((prog, pidx) => (
                        <span
                          key={pidx}
                          style={{
                            backgroundColor: `${regionConfig.cardColor}25`,
                            color: regionConfig.cardColor,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 500,
                          }}
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: spacing.md, borderTop: '1px solid #eee' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: '8px' }}>
                      {ar ? 'النقاط البارزة' : 'Key Highlights'}
                    </div>
                    <ul style={{
                      margin: 0,
                      paddingLeft: spacing.md,
                      fontSize: '13px',
                      color: '#666',
                      lineHeight: '1.6',
                    }}>
                      {(ar ? country.highlightsAr : country.highlights).map((highlight, hidx) => (
                        <li key={hidx} style={{ marginBottom: '4px' }}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    marginTop: spacing.md,
                    paddingTop: spacing.md,
                    borderTop: `2px solid ${regionConfig.cardColor}`,
                    textAlign: 'center',
                  }}>
                    <span style={{
                      color: regionConfig.cardColor,
                      fontWeight: 600,
                      fontSize: '14px',
                    }}>
                      {ar ? 'اقرأ المزيد →' : 'Learn More →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs by Country Matrix */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: royalColors.darkNavy,
            marginBottom: spacing.xxxl,
            fontFamily: '"Merriweather", Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'مصفوفة البرامج حسب الدول' : 'Programs by Country Matrix'}
          </h2>

          <div style={{
            overflowX: 'auto',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '800px',
            }}>
              <thead>
                <tr style={{ backgroundColor: regionConfig.cardColor, color: 'white' }}>
                  <th style={{
                    padding: spacing.md,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}>
                    {ar ? 'الدول' : 'Country'}
                  </th>
                  <th style={{
                    padding: spacing.md,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}>
                    {ar ? 'المستفيدون' : 'Beneficiaries'}
                  </th>
                  <th style={{
                    padding: spacing.md,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}>
                    {ar ? 'البرامج' : 'Programs'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {africaData.countryBreakdown.map((country, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #eee',
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9f9f9',
                    }}
                  >
                    <td style={{
                      padding: spacing.md,
                      fontWeight: 600,
                      color: royalColors.darkNavy,
                    }}>
                      {country.flag} {ar ? country.nameAr : country.name}
                    </td>
                    <td style={{
                      padding: spacing.md,
                      color: regionConfig.cardColor,
                      fontWeight: 600,
                    }}>
                      {country.beneficiaries}
                    </td>
                    <td style={{
                      padding: spacing.md,
                      color: '#666',
                      fontSize: '14px',
                    }}>
                      {(ar ? country.programsAr : country.programs).join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regional Challenges & Solutions */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: royalColors.darkNavy,
            marginBottom: spacing.xxxl,
            fontFamily: '"Merriweather", Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'التحديات الإقليمية والحلول' : 'Regional Challenges & Solutions'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: spacing.lg,
          }}>
            {africaData.regionalChallenges.map((challenge, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: spacing.lg,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: `3px solid ${regionConfig.cardColor}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: regionConfig.cardColor,
                }}></div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: royalColors.darkNavy,
                  marginBottom: spacing.md,
                  marginTop: spacing.md,
                  paddingBottom: spacing.md,
                  borderBottom: `2px solid ${regionConfig.cardColor}25`,
                }}>
                  {ar ? challenge.titleAr : challenge.title}
                </h3>

                <div style={{ marginBottom: spacing.lg }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.7',
                    margin: 0,
                  }}>
                    {ar ? challenge.descriptionAr : challenge.description}
                  </p>
                </div>

                <div style={{
                  backgroundColor: `${regionConfig.cardColor}10`,
                  padding: spacing.md,
                  borderRadius: '8px',
                  borderLeft: `4px solid ${regionConfig.cardColor}`,
                }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: regionConfig.cardColor,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}>
                    {ar ? 'الحل' : 'Our Solution'}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#555',
                    lineHeight: '1.7',
                    margin: 0,
                  }}>
                    {ar ? challenge.solutionAr : challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: royalColors.darkNavy,
            marginBottom: spacing.xxxl,
            fontFamily: '"Merriweather", Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'قصص النجاح' : 'Success Stories from Africa'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: spacing.lg,
          }}>
            {africaData.successStories.map((story, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: spacing.lg,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: spacing.md,
                }}>
                  ✨
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: royalColors.darkNavy,
                  marginBottom: spacing.md,
                }}>
                  {ar ? story.titleAr : story.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.8',
                  margin: 0,
                }}>
                  {ar ? story.descriptionAr : story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional CTA */}
      <CtaSection
        heading={ar ? `ساعدنا في دعم أفريقيا` : `Help Us Support Africa`}
        subheading={ar ? 'تبرعك سيحدث فرقاً حقيقياً في حياة الملايين عبر القارة الأفريقية' : 'Your donation will make a real difference in the lives of millions across Africa'}
        options={[
          {
            label: ar ? 'تبرع الآن' : 'Donate Now',
            href: `${base}/get-involved/donate`,
            icon: '💝',
            description: ar ? 'ساهم في الحل' : 'Contribute to the solution',
          },
          {
            label: ar ? 'اتطوع' : 'Volunteer',
            href: `${base}/get-involved/volunteer`,
            icon: '🤝',
            description: ar ? 'كن جزءاً من الفريق' : 'Join our team',
          },
          {
            label: ar ? 'تعلم أكثر' : 'Learn More',
            href: `${base}/programs`,
            icon: '📚',
            description: ar ? 'اكتشف برامجنا' : 'Explore programs',
          },
        ]}
        background={regionConfig.ctaBg}
        fullWidth={true}
      />
    </>
  );
}
