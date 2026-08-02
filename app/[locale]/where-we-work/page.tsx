'use client';

import { regions, impactStats } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactStat from '@/components/ImpactStat';
import WarmCard from '@/components/WarmCard';
import CtaSection from '@/components/CtaSection';
import { spacing, royalColors, gradients } from '@/lib/royalDesign';
import { regionColors, type RegionSlug } from '@/lib/regionalConfig';

const regionIcons: Record<RegionSlug, string> = {
  asia: '🌏',
  africa: '🌍',
  europe: '🏰',
  americas: '🌎',
};

export default function WhereWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero Section with Warm Gradient */}
      <HeroSection
        headline={ar ? 'حيث نعمل' : 'Where We Work'}
        subheadline={ar ? 'الهيئة الخيرية الأردنية الهاشمية تخدم أكثر من 30 دولة عبر أربع قارات، توفر المساعدة الإنسانية والدعم التنموي للملايين' : 'The Jordan Hashemite Charity Organization serves 30+ countries across four continents, delivering humanitarian aid and development support to millions'}
        backgroundGradient={gradients.royalToWarm}
        buttons={[
          {
            label: ar ? 'تبرع الآن' : 'Donate Now',
            href: `${base}/get-involved/donate`,
            variant: 'primary',
          },
        ]}
        minHeight="500px"
      />

      {/* Impact Stats with Animated Counters */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgWarm }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تأثيرنا العالمي' : 'Our Global Impact'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing.lg }}>
            {impactStats.map((stat, idx) => {
              const colorSequence: Array<'red' | 'teal' | 'green' | 'gold'> = ['red', 'teal', 'green', 'gold'];
              const iconSequence = ['❤️', '🌍', '👥', '📊'];
              return (
                <ImpactStat
                  key={idx}
                  number={stat.value}
                  label={ar ? stat.labelAr : stat.label}
                  icon={iconSequence[idx % 4]}
                  color={colorSequence[idx % 4]}
                  suffix="+"
                  trend="up"
                  animateOnScroll={true}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Grid with Warm Cards */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'مناطقنا الجغرافية' : 'Our Geographic Regions'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing.lg }}>
            {regions.map((region) => {
              const config = regionColors[region.slug as RegionSlug];
              const icon = regionIcons[region.slug as RegionSlug];
              return (
                <Link key={region.id} href={`${base}/regions/${region.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <WarmCard
                    title={ar ? region.nameAr : region.name}
                    description={`${region.countries.length} ${ar ? 'دول' : 'countries'} • ${ar ? region.descriptionAr : region.description}`}
                    icon={icon}
                    color={config.cardColor}
                    actionLabel={ar ? 'اكتشف المزيد' : 'Explore Region'}
                    actionHref={`${base}/regions/${region.slug}`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CtaSection
        heading={ar ? 'نطاقنا العالمي' : 'Our Global Reach'}
        subheading={ar ? 'من خلال شبكتنا المتسعة من الشركاء والمتطوعين، نصل إلى أكثر الفئات ضعفاً في العالم' : 'Through our expanding network of partners and volunteers, we reach the most vulnerable populations worldwide'}
        options={[
          {
            label: ar ? 'قدم تبرعاً' : 'Make a Donation',
            href: `${base}/get-involved/donate`,
            icon: '💝',
            description: ar ? 'ساعد الآن' : 'Help now',
          },
          {
            label: ar ? 'اتطوع معنا' : 'Volunteer With Us',
            href: `${base}/get-involved/volunteer`,
            icon: '🤝',
            description: ar ? 'كن جزءاً من الحل' : 'Be part of the solution',
          },
          {
            label: ar ? 'اعرف المزيد' : 'Learn More',
            href: `${base}/about`,
            icon: '📚',
            description: ar ? 'عن برامجنا' : 'About our programs',
          },
        ]}
        background="compassionate"
        fullWidth={true}
      />
    </>
  );
}
