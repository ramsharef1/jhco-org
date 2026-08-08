'use client';

import { countries, regions } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactStat from '@/components/ImpactStat';
import WarmCard from '@/components/WarmCard';
import CtaSection from '@/components/CtaSection';
import { spacing, royalColors } from '@/lib/royalDesign';
import { regionColors, type RegionSlug } from '@/lib/regionalConfig';

export default function EuropePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const region = regions.find(r => r.slug === 'europe')!;
  const regionCountries = countries.filter(c => c.region === 'europe');
  const regionConfig = regionColors.europe;

  return (
    <>
      {/* Hero Section with Region-Specific Gradient */}
      <HeroSection
        headline={ar ? region.nameAr : region.name}
        subheadline={ar ? region.descriptionAr : region.description}
        backgroundGradient={regionConfig.gradient}
        buttons={[
          {
            label: ar ? 'العودة' : 'Back',
            href: `${base}/where-we-work`,
            variant: 'secondary',
          },
        ]}
        minHeight="450px"
      />

      {/* Regional Statistics with Animated Counters */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing.lg }}>
            <ImpactStat
              number={regionCountries.length}
              label={ar ? 'دول مخدومة' : 'Countries Served'}
              icon="🏰"
              color={regionConfig.statColor}
              animateOnScroll={true}
            />
            <ImpactStat
              number={regionCountries.reduce((sum, c) => sum + c.programs.length, 0)}
              label={ar ? 'برنامج نشط' : 'Active Programs'}
              icon="📊"
              color={regionConfig.statColor}
              animateOnScroll={true}
            />
            <ImpactStat
              number={regionCountries.length * 800}
              label={ar ? 'أسرة مدعومة' : 'Families Supported'}
              icon="❤️"
              color={regionConfig.statColor}
              suffix="+"
              trend="up"
              animateOnScroll={true}
            />
          </div>
        </div>
      </section>

      {/* Countries Grid with Warm Cards */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الدول المخدومة' : 'Countries We Serve'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: spacing.lg }}>
            {regionCountries.map((country) => (
              <Link key={country.id} href={`${base}/regions/${country.region}/${country.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <WarmCard
                  title={`${country.flag} ${ar ? country.nameAr : country.name}`}
                  description={ar ? country.impactAr : country.impact}
                  icon="→"
                  color={regionConfig.cardColor}
                  actionLabel={ar ? 'اقرأ المزيد' : 'Learn More'}
                  actionHref={`${base}/regions/${country.region}/${country.slug}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Region-Specific CTA */}
      <CtaSection
        heading={ar ? `ساعدنا في دعم ${region.nameAr}` : `Help Us Support ${region.name}`}
        subheading={ar ? 'تبرعك سيحدث فرقاً حقيقياً في حياة الملايين عبر المنطقة' : 'Your donation will make a real difference in the lives of millions across this region'}
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
