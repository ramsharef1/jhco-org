'use client';

import { use } from 'react';
import { type Locale } from '@/lib/i18n';
import { programs } from '@/lib/mockData';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import ImpactCounter from '@/components/ImpactCounter';
import ProgramCard from '@/components/ProgramCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import NewsletterForm from '@/components/NewsletterForm';

const colors = {
  primaryNavy: '#1a3a52',
  textNavy: '#2c4563',
  lightGrey: '#f5f5f5',
  white: '#ffffff',
  darkBg: '#0a1428',
  textGrey: '#555555',
  accentGold: '#d4af37',
  border: '#e0e0e0',
};

const homeTestimonials = [
  {
    id: 'h1',
    nameEn: 'Sarah Ahmed',
    nameAr: 'سارة أحمد',
    roleEn: 'Donor — Cairo, Egypt',
    roleAr: 'متبرعة — القاهرة، مصر',
    quoteEn: 'JHCO demonstrates professional governance and transparent impact reporting. Supporting their programs is straightforward and credible.',
    quoteAr: 'تُظهر الهيئة حوكمة مهنية وتقارير أثر شفافة. دعم برامجها أمر مباشر وموثوق.',
    icon: '💬',
  },
  {
    id: 'h2',
    nameEn: 'James Martin',
    nameAr: 'جيمس مارتن',
    roleEn: 'Volunteer — London, UK',
    roleAr: 'متطوع — لندن، المملكة المتحدة',
    quoteEn: 'The volunteer experience with JHCO is well-structured with clear professional objectives. The organization is effectively managed.',
    quoteAr: 'تجربة التطوع مع الهيئة منظمة جيداً بأهداف مهنية واضحة. المنظمة تُدار بفعالية.',
    icon: '🤝',
  },
  {
    id: 'h3',
    nameEn: 'Fatima Hassan',
    nameAr: 'فاطمة حسن',
    roleEn: 'Program Participant — Amman, Jordan',
    roleAr: 'مشاركة في البرنامج — عمّان، الأردن',
    quoteEn: 'The education program provided quality instruction and real opportunity. The outcomes have been measurable and meaningful for our community.',
    quoteAr: 'قدّم برنامج التعليم تدريساً عالي الجودة وفرصاً حقيقية. كانت النتائج ملموسة وذات معنى لمجتمعنا.',
    icon: '📚',
  },
];

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const impactStats = [
    { value: '75K+', label: 'Families Served', labelAr: 'أسرة مخدومة', icon: '👥' },
    { value: '30+', label: 'Countries', labelAr: 'دول', icon: '🌍' },
    { value: '2500+', label: 'Volunteers', labelAr: 'متطوع', icon: '🤝' },
    { value: '100%', label: 'Verified Impact', labelAr: 'تأثير معتمد', icon: '✓' },
  ];

  const whyReasons = [
    {
      titleEn: 'Royal Patronage',
      titleAr: 'الرعاية الملكية',
      descEn: 'Operating under Jordanian royal patronage, ensuring governance excellence and international credibility.',
      descAr: 'العمل تحت الرعاية الملكية الأردنية بما يضمن التميز في الحوكمة والمصداقية الدولية.',
    },
    {
      titleEn: 'Transparent Operations',
      titleAr: 'عمليات شفافة',
      descEn: 'Full financial accountability with verified program delivery metrics and independent audits.',
      descAr: 'مساءلة مالية كاملة مع مؤشرات تنفيذ برامج موثقة وتدقيق مستقل.',
    },
    {
      titleEn: 'Established Presence',
      titleAr: 'حضور راسخ',
      descEn: '30+ years of sustained humanitarian work across 30 countries with local institutional partnerships.',
      descAr: 'أكثر من 30 عاماً من العمل الإنساني المستمر في 30 دولة مع شراكات مؤسسية محلية.',
    },
    {
      titleEn: 'Professional Impact',
      titleAr: 'أثر مهني',
      descEn: 'Measurable outcomes in healthcare, education, and livelihood initiatives backed by data and evaluation.',
      descAr: 'نتائج قابلة للقياس في الصحة والتعليم وسبل العيش مدعومة بالبيانات والتقييم.',
    },
  ];

  return (
    <>
      {/* 1. HERO */}
      <HeroSlider locale={locale as Locale} />

      {/* 2. IMPACT STATS */}
      <ImpactCounter stats={impactStats} locale={locale} />

      {/* 3. FEATURED STORY */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '100px', alignItems: 'center' }}>
            <div style={{ order: ar ? 2 : 1 }}>
              <div style={{
                width: '100%',
                aspectRatio: '400/450',
                background: `linear-gradient(160deg, ${colors.primaryNavy}, ${colors.darkBg})`,
                border: `1px solid ${colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '96px',
              }}>
                🎓
              </div>
            </div>

            <div style={{ order: ar ? 1 : 2 }}>
              <div style={{ marginBottom: '40px', textAlign: ar ? 'right' : 'left' }}>
                <p style={{ fontSize: '12px', color: colors.textGrey, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 20px 0' }}>
                  {ar ? 'أثر حقيقي' : 'REAL IMPACT'}
                </p>
                <h2 style={{ fontSize: '44px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '0', fontFamily: "'Georgia', 'Garamond', serif", lineHeight: '1.2' }}>
                  {ar
                    ? '"غيّر التعليم مستقبلي وآفاق عائلتي."'
                    : '"Education transformed my future and my family\'s prospects."'}
                </h2>
              </div>

              <p style={{ fontSize: '16px', color: colors.textGrey, lineHeight: '1.8', marginBottom: '44px', textAlign: ar ? 'right' : 'left' }}>
                {ar
                  ? 'من خلال برامج الهيئة المتكاملة في الصحة والتعليم، حصلت أميرة على دعم أكاديمي ووصلت عائلتها إلى خدمات طبية أساسية. وهي الآن تتقدم في المرحلة الثانوية بطموح أن تصبح معلمة.'
                  : "Through JHCO's integrated healthcare and education programs, Amira received academic support and her family accessed essential medical services. She now progresses through secondary school with ambitions to become an educator."}
              </p>

              <div style={{ marginBottom: '44px', textAlign: ar ? 'right' : 'left' }}>
                <p style={{ fontSize: '15px', fontWeight: '700', color: colors.primaryNavy, margin: '0 0 6px 0' }}>
                  {ar ? 'أميرة حسن' : 'Amira Hassan'}
                </p>
                <p style={{ fontSize: '13px', color: colors.textGrey, margin: 0 }}>
                  {ar ? 'القاهرة، مصر • برنامج الصحة والتعليم' : 'Cairo, Egypt • Healthcare & Education Program'}
                </p>
              </div>

              <Link
                href={`${base}/impact/stories`}
                style={{
                  padding: '14px 40px',
                  backgroundColor: colors.white,
                  color: colors.primaryNavy,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: `2px solid ${colors.primaryNavy}`,
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primaryNavy;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.white;
                  e.currentTarget.style.color = colors.primaryNavy;
                }}
              >
                {ar ? 'اقرأ المزيد من القصص' : 'Read More Stories'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS GRID */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.lightGrey, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              {ar ? 'برامجنا' : 'Our Programs'}
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              {ar
                ? 'برامج شاملة تحقق أثراً ملموساً في الصحة والتعليم وسبل العيش والاستجابة للطوارئ'
                : 'Comprehensive programs delivering measurable impact across healthcare, education, livelihood development, and emergency response'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '36px', marginBottom: '60px' }}>
            {programs.slice(0, 6).map((program) => (
              <ProgramCard
                key={program.id}
                id={String(program.id)}
                slug={program.slug}
                nameEn={program.name}
                nameAr={program.nameAr}
                descriptionEn={program.description}
                descriptionAr={program.descriptionAr}
                icon="🎯"
                impactEn={program.impact}
                impactAr={program.impactAr}
                categoryEn={program.category}
                categoryAr={program.categoryAr}
                href={`${base}/programs/${program.slug}`}
                locale={locale}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href={`${base}/programs`}
              style={{
                padding: '16px 48px',
                backgroundColor: colors.primaryNavy,
                color: colors.white,
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-block',
                border: `2px solid ${colors.primaryNavy}`,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 58, 82, 0.9)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryNavy;
              }}
            >
              {ar ? 'عرض جميع البرامج' : 'View All Programs'}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY JHCO */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              {ar ? 'لماذا الهيئة؟' : 'Why JHCO?'}
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              {ar
                ? 'حوكمة إنسانية مهنية بمصداقية دولية وأثر موثق'
                : 'Professional humanitarian governance with international credibility and documented impact'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {whyReasons.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.lightGrey,
                  padding: '48px 40px',
                  textAlign: 'center',
                  border: `1px solid ${colors.border}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ width: '48px', height: '48px', backgroundColor: colors.primaryNavy, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '24px' }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.primaryNavy, marginBottom: '16px' }}>
                  {ar ? reason.titleAr : reason.titleEn}
                </h3>
                <p style={{ fontSize: '13px', color: colors.textGrey, lineHeight: '1.7', margin: 0 }}>
                  {ar ? reason.descAr : reason.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET INVOLVED CTA */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ background: colors.primaryNavy, padding: '120px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '52px', fontWeight: '400', color: 'white', marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif" }}>
            {ar ? 'شارك معنا' : 'Get Involved'}
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto 60px', lineHeight: '1.8' }}>
            {ar
              ? 'ادعم عملنا الإنساني بالتبرع أو التطوع أو الشراكة المؤسسية'
              : 'Support our humanitarian work through donation, volunteer service, or organizational partnership'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '36px' }}>
            {[
              {
                titleEn: 'Donate', titleAr: 'تبرع',
                descEn: 'Financial contributions to program delivery.', descAr: 'مساهمات مالية لتنفيذ البرامج.',
                link: `${base}/get-involved/donate`,
              },
              {
                titleEn: 'Volunteer', titleAr: 'تطوع',
                descEn: 'Professional skills and service engagement.', descAr: 'مهارات مهنية ومشاركة في الخدمة.',
                link: `${base}/get-involved/volunteer`,
              },
              {
                titleEn: 'Partner', titleAr: 'شراكة',
                descEn: 'Organizational collaboration and alliance.', descAr: 'تعاون وتحالف مؤسسي.',
                link: `${base}/get-involved/partner`,
              },
            ].map((cta, idx) => (
              <Link key={idx} href={cta.link} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    padding: '52px 40px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px', fontFamily: "'Georgia', 'Garamond', serif" }}>
                    {ar ? cta.titleAr : cta.titleEn}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                    {ar ? cta.descAr : cta.descEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.lightGrey, padding: '120px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif" }}>
              {ar ? 'قصص التفاعل' : 'Engagement Stories'}
            </h2>
            <p style={{ fontSize: '16px', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              {ar
                ? 'آراء المشاركين في البرامج والشركاء والداعمين لعمل الهيئة'
                : "Perspectives from program participants, partners, and supporters of JHCO's work"}
            </p>
          </div>

          <TestimonialCarousel testimonials={homeTestimonials} locale={locale} />
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ backgroundColor: colors.white, padding: '120px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '400', color: colors.primaryNavy, marginBottom: '20px', fontFamily: "'Georgia', 'Garamond', serif" }}>
            {ar ? 'ابقَ على اطّلاع' : 'Stay Informed'}
          </h2>
          <p style={{ fontSize: '16px', color: colors.textGrey, marginBottom: '56px', lineHeight: '1.8' }}>
            {ar
              ? 'استلم تحديثات البرامج وتقارير الأثر وأخبار الهيئة في بريدك الإلكتروني'
              : 'Receive program updates, impact reports, and organizational news delivered to your inbox'}
          </p>
          <NewsletterForm locale={locale} />
        </div>
      </section>
    </>
  );
}
