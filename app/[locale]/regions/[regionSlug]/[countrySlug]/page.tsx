'use client';

import { countries, regions } from '@/lib/mockData';
import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { use } from 'react';
import HeroSection from '@/components/HeroSection';
import ImpactStat from '@/components/ImpactStat';
import WarmCard from '@/components/WarmCard';
import StoryCard from '@/components/StoryCard';
import CtaSection from '@/components/CtaSection';
import { spacing, royalColors } from '@/lib/royalDesign';
import { regionColors, type RegionSlug } from '@/lib/regionalConfig';

export default function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; regionSlug: string; countrySlug: string }>;
}) {
  const { locale, regionSlug, countrySlug } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const country = countries.find(c => c.slug === countrySlug);
  const region = regions.find(r => r.slug === regionSlug);
  const regionCountries = countries.filter(c => c.region === regionSlug);
  const regionConfig = regionColors[regionSlug as RegionSlug];

  if (!country || !region) {
    return (
      <div style={{ padding: `${spacing.xxxl} ${spacing.xl}`, textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', color: royalColors.deepNavy, marginBottom: spacing.lg }}>
            {ar ? 'لم يتم العثور على الدولة' : 'Country Not Found'}
          </h1>
          <Link href={`${base}/where-we-work`} style={{ color: regionConfig?.primary || royalColors.warmGold, textDecoration: 'none', fontSize: '16px', fontWeight: '700' }}>
            {ar ? 'العودة إلى خريطة العالم' : 'Back to Global Map'}
          </Link>
        </div>
      </div>
    );
  }

  // Generate impact number from string like "15,000+ families supported"
  const extractNumber = (str: string) => {
    const match = str.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, ''), 10) : 1000;
  };

  return (
    <>
      {/* Hero Section: Country + Region with Region-Specific Gradient */}
      <HeroSection
        headline={`${country.flag} ${ar ? country.nameAr : country.name}`}
        subheadline={ar ? country.descriptionAr : country.description}
        backgroundGradient={regionConfig.gradient}
        buttons={[
          {
            label: ar ? `العودة إلى ${region.nameAr}` : `Back to ${region.name}`,
            href: `${base}/regions/${regionSlug}`,
            variant: 'secondary',
          },
        ]}
        minHeight="450px"
      />

      {/* Quick Statistics with Animated Counters */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgWarm }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing.lg }}>
            <ImpactStat
              number={(ar ? country.programsAr : country.programs).length}
              label={ar ? 'برنامج نشط' : 'Active Programs'}
              icon="📊"
              color={regionConfig.statColor}
              animateOnScroll={true}
            />
            <ImpactStat
              number={extractNumber(ar ? country.impactAr : country.impact)}
              label={ar ? 'تأثير مباشر' : 'Direct Impact'}
              icon="❤️"
              color={regionConfig.statColor}
              suffix="+"
              trend="up"
              animateOnScroll={true}
            />
            <ImpactStat
              number={Math.floor(Math.random() * 50 + 10)}
              label={ar ? 'شركاء محليون' : 'Local Partners'}
              icon="🤝"
              color={regionConfig.statColor}
              animateOnScroll={true}
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xl, fontFamily: '"Merriweather", Georgia, serif' }}>
            {ar ? 'نظرة عامة' : 'Overview'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: royalColors.textMuted, maxWidth: '900px' }}>
            {ar ? country.descriptionAr : country.description}
          </p>
        </div>
      </section>

      {/* Programs Section: Converted to Warm Cards */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgWarm }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'برامجنا الفعّالة' : 'Our Active Programs'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: spacing.lg }}>
            {(ar ? country.programsAr : country.programs).map((program, idx) => {
              const programIcons = ['🏥', '📚', '🍽️', '💼', '🤝', '💉', '🏠', '⚡'];
              return (
                <WarmCard
                  key={idx}
                  title={program}
                  description={ar ? 'برنامج شامل يوفر خدمات حيوية للمجتمعات المحتاجة' : 'Comprehensive program providing vital services to communities in need'}
                  icon={programIcons[idx % programIcons.length]}
                  color={regionConfig.cardColor}
                  actionLabel={ar ? 'اقرأ المزيد' : 'Learn More'}
                  actionHref={`${base}/programs`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'قصص النجاح' : 'Success Stories'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: spacing.lg }}>
            <StoryCard
              quote={ar ? 'تحسنت حالتي الصحية بفضل هذا البرنامج الرائع. أشعر بالامتنان العميق' : 'This program transformed my health. I am deeply grateful for the support'}
              author={ar ? 'فاطمة محمود' : 'Fatima Ahmad'}
              role={ar ? 'متلقية الرعاية الصحية' : 'Healthcare Recipient'}
              location={ar ? country.nameAr : country.name}
              programTag={(ar ? country.programsAr : country.programs)[0] || 'Healthcare'}
              borderColor={regionConfig.storyColor}
            />
            <StoryCard
              quote={ar ? 'أتمكن الآن من إعالة عائلتي بكرامة بفضل برنامج سبل العيش' : 'Now I can support my family with dignity through the livelihood program'}
              author={ar ? 'علي كريم' : 'Ali Karim'}
              role={ar ? 'مستفيد من البرنامج' : 'Program Beneficiary'}
              location={ar ? country.nameAr : country.name}
              programTag={(ar ? country.programsAr : country.programs)[1] || 'Livelihood'}
              borderColor={regionConfig.storyColor}
            />
            <StoryCard
              quote={ar ? 'أصبح ابني يذهب إلى المدرسة بسبب برنامج الدعم التعليمي. ندين بفضل كبير' : 'My son now attends school because of the education support program. Thank you'}
              author={ar ? 'أم سارة' : 'Um Sara'}
              role={ar ? 'أم ومستفيدة' : 'Mother & Beneficiary'}
              location={ar ? country.nameAr : country.name}
              programTag={(ar ? country.programsAr : country.programs)[2] || 'Education'}
              borderColor={regionConfig.storyColor}
            />
          </div>
        </div>
      </section>

      {/* Related Countries Section */}
      {regionCountries.length > 1 && (
        <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgWarm }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.deepNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
              {ar ? 'دول أخرى في المنطقة' : 'Other Countries in Region'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: spacing.lg }}>
              {regionCountries.filter(c => c.slug !== countrySlug).slice(0, 6).map((relatedCountry) => (
                <Link key={relatedCountry.id} href={`${base}/regions/${regionSlug}/${relatedCountry.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <WarmCard
                    title={`${relatedCountry.flag} ${ar ? relatedCountry.nameAr : relatedCountry.name}`}
                    description={ar ? relatedCountry.impactAr : relatedCountry.impact}
                    color={regionConfig.cardColor}
                    actionLabel={ar ? 'زيارة' : 'Visit'}
                    actionHref={`${base}/regions/${regionSlug}/${relatedCountry.slug}`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <CtaSection
        heading={ar ? `ساعدنا في دعم ${country.nameAr}` : `Help Us Support ${country.name}`}
        subheading={ar ? 'تبرعك المباشر سيحقق تأثيراً فوري وملموساً في حياة الآلاف' : 'Your direct donation creates immediate and tangible impact in the lives of thousands'}
        options={[
          {
            label: ar ? 'تبرع لهذه الدولة' : 'Donate to This Country',
            href: `${base}/get-involved/donate`,
            icon: '💝',
            description: ar ? 'ساهم مباشرة' : 'Direct contribution',
          },
          {
            label: ar ? 'اكتشف برامجنا' : 'Explore Our Programs',
            href: `${base}/programs`,
            icon: '📊',
            description: ar ? 'تعرف على المزيد' : 'Learn more',
          },
          {
            label: ar ? 'شارك القصة' : 'Share This Story',
            href: `#`,
            icon: '📢',
            description: ar ? 'ساعد في النشر' : 'Spread awareness',
          },
        ]}
        background={regionConfig.ctaBg}
        fullWidth={true}
      />
    </>
  );
}
