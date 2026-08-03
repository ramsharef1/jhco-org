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

export default function MiddleEastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const region = regions.find(r => r.slug === 'middle-east')!;
  const regionCountries = countries.filter(c => c.region === 'middle-east');
  const regionConfig = regionColors['middle-east'];

  // Regional staff contacts
  const regionalStaff = [
    {
      name: ar ? 'د. فهد العنزي' : 'Dr. Fahad Al-Enezi',
      title: ar ? 'مدير العمليات الإقليمية' : 'Regional Operations Director',
      location: ar ? 'عمّان، الأردن' : 'Amman, Jordan',
      email: 'fahad.alenezi@jhco.org',
      phone: '+962-6-XXXX-XXXX',
      avatar: '👨‍💼',
    },
    {
      name: ar ? 'أ. ليلى السعيدي' : 'Ms. Layla Al-Saidi',
      title: ar ? 'مديرة برامج الإغاثة الطارئة' : 'Emergency Relief Programs Manager',
      location: ar ? 'بيروت، لبنان' : 'Beirut, Lebanon',
      email: 'layla.alsaidi@jhco.org',
      phone: '+961-1-XXXX-XXXX',
      avatar: '👩‍💼',
    },
    {
      name: ar ? 'أ. محمود قاسم' : 'Mr. Mahmoud Qassem',
      title: ar ? 'منسق البرامج الصحية' : 'Healthcare Programs Coordinator',
      location: ar ? 'بغداد، العراق' : 'Baghdad, Iraq',
      email: 'mahmoud.qassem@jhco.org',
      phone: '+964-1-XXXX-XXXX',
      avatar: '👨‍⚕️',
    },
    {
      name: ar ? 'د. فاطمة الشرقاوي' : 'Dr. Fatima Al-Sharqawi',
      title: ar ? 'مديرة برامج التعليم والتمكين' : 'Education & Empowerment Programs Director',
      location: ar ? 'دمشق، سوريا' : 'Damascus, Syria',
      email: 'fatima.sharqawi@jhco.org',
      phone: '+963-11-XXXX-XXXX',
      avatar: '👩‍🎓',
    },
    {
      name: ar ? 'أ. يوسف الكسواني' : 'Mr. Youssef Al-Kaswani',
      title: ar ? 'منسق عمليات غزة والضفة الغربية' : 'Gaza & West Bank Operations Coordinator',
      location: ar ? 'غزة، فلسطين' : 'Gaza, Palestine',
      email: 'youssef.kaswani@jhco.org',
      phone: '+970-2-XXXX-XXXX',
      avatar: '👨‍💼',
    },
  ];

  // Regional initiatives
  const regionalInitiatives = [
    {
      id: 1,
      name: ar ? 'مبادرة اللاجئين والعائدين' : 'Refugees & Returnees Initiative',
      description: ar
        ? 'برنامج شامل لدعم اللاجئين والنازحين بتوفير المأوى والغذاء والرعاية الصحية والتعليم'
        : 'Comprehensive program supporting refugees and internally displaced persons with shelter, food, healthcare, and education',
      icon: '🏠',
      status: 'Active',
      impact: ar ? '150,000+ لاجئ مدعوم' : '150,000+ refugees supported',
    },
    {
      id: 2,
      name: ar ? 'مبادرة الأمن الغذائي الطارئ' : 'Emergency Food Security Initiative',
      description: ar
        ? 'توزيع طوارئ للغذاء والمساعدات الأساسية والدعم الزراعي المستدام'
        : 'Emergency food distribution, essential aid, and sustainable agricultural support',
      icon: '🍚',
      status: 'Active',
      impact: ar ? '200,000+ شخص مستفيد' : '200,000+ people served',
    },
    {
      id: 3,
      name: ar ? 'برنامج الرعاية الصحية المتكاملة' : 'Integrated Healthcare Program',
      description: ar
        ? 'شبكة عيادات ومستشفيات متخصصة توفر الرعاية الأساسية والتخصصية والأدوية المجانية'
        : 'Network of clinics and hospitals providing primary, specialized, and free pharmaceutical services',
      icon: '🏥',
      status: 'Active',
      impact: ar ? '85,000+ مريض سنوياً' : '85,000+ patients annually',
    },
    {
      id: 4,
      name: ar ? 'برنامج التعليم والمنح الدراسية' : 'Education & Scholarship Program',
      description: ar
        ? 'منح دراسية وموارد تعليمية ودعم لطلاب اللاجئين والفئات المحرومة'
        : 'Scholarships, educational resources, and support for refugee and disadvantaged students',
      icon: '📚',
      status: 'Active',
      impact: ar ? '12,000+ طالب مدعوم' : '12,000+ students supported',
    },
    {
      id: 5,
      name: ar ? 'مبادرة التمكين الاقتصادي والمهارات' : 'Economic Empowerment & Skills Initiative',
      description: ar
        ? 'تدريب مهني وبرامج توليد الدخل والدعم الصغير للدخل المستدام'
        : 'Vocational training, income-generating programs, and microfinance for sustainable livelihoods',
      icon: '💼',
      status: 'Active',
      impact: ar ? '8,500+ متدرب' : '8,500+ trained',
    },
    {
      id: 6,
      name: ar ? 'برنامج دعم الأطفال والنساء' : 'Child & Women Protection Program',
      description: ar
        ? 'حماية الأطفال والنساء وتمكينهن من خلال برامج متخصصة وخدمات الإحالة'
        : 'Child protection, women empowerment, specialized programs, and referral services',
      icon: '👩‍👧‍👦',
      status: 'Active',
      impact: ar ? '25,000+ مستفيد' : '25,000+ beneficiaries',
    },
  ];

  // Regional office locations
  const officeLocations = [
    {
      city: ar ? 'عمّان' : 'Amman',
      country: ar ? 'الأردن' : 'Jordan',
      type: ar ? 'مقر إقليمي' : 'Regional Headquarters',
      staff: ar ? '45+ موظف' : '45+ staff members',
      phone: '+962-6-5XXX-XXXX',
      established: '2015',
    },
    {
      city: ar ? 'بيروت' : 'Beirut',
      country: ar ? 'لبنان' : 'Lebanon',
      type: ar ? 'مركز عمليات رئيسي' : 'Main Operations Center',
      staff: ar ? '38+ موظف' : '38+ staff members',
      phone: '+961-1-XXXX-XXXX',
      established: '2013',
    },
    {
      city: ar ? 'بغداد' : 'Baghdad',
      country: ar ? 'العراق' : 'Iraq',
      type: ar ? 'مركز استجابة الأزمات' : 'Crisis Response Hub',
      staff: ar ? '35+ موظف' : '35+ staff members',
      phone: '+964-1-XXXX-XXXX',
      established: '2014',
    },
    {
      city: ar ? 'دمشق' : 'Damascus',
      country: ar ? 'سوريا' : 'Syria',
      type: ar ? 'مركز عمليات ميداني' : 'Field Operations Center',
      staff: ar ? '30+ موظف' : '30+ staff members',
      phone: '+963-11-XXXX-XXXX',
      established: '2012',
    },
    {
      city: ar ? 'غزة' : 'Gaza',
      country: ar ? 'فلسطين' : 'Palestine',
      type: ar ? 'وحدة عمليات الاستجابة' : 'Emergency Response Unit',
      staff: ar ? '28+ موظف' : '28+ staff members',
      phone: '+970-2-XXXX-XXXX',
      established: '2009',
    },
  ];

  return (
    <>
      {/* Hero Section with Middle East-Specific Gradient */}
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
          <h2 style={{ fontSize: '36px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تأثيرنا الإقليمي' : 'Our Regional Impact'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing.lg }}>
            <ImpactStat
              number={regionCountries.length}
              label={ar ? 'دول مخدومة' : 'Countries Served'}
              icon="🌍"
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
              number={465000}
              label={ar ? 'مستفيد كلي' : 'Total Beneficiaries'}
              icon="❤️"
              color={regionConfig.statColor}
              suffix="+"
              trend="up"
              animateOnScroll={true}
            />
            <ImpactStat
              number={5}
              label={ar ? 'مكتب إقليمي' : 'Regional Offices'}
              icon="🏢"
              color={regionConfig.statColor}
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
                  description={ar ? country.descriptionAr : country.description}
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

      {/* Regional Initiatives */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'مبادرات منطقة الشرق الأوسط' : 'Middle East Regional Initiatives'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: spacing.lg }}>
            {regionalInitiatives.map((initiative) => (
              <div
                key={initiative.id}
                style={{
                  padding: spacing.lg,
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: `2px solid ${regionConfig.primary}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: spacing.md }}>{initiative.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: regionConfig.primary, marginBottom: spacing.md }}>
                  {initiative.name}
                </h3>
                <p style={{ color: royalColors.darkGray, marginBottom: spacing.md, lineHeight: '1.6' }}>
                  {initiative.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.lg, paddingTop: spacing.md, borderTop: `1px solid ${royalColors.lightGray}` }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'white', backgroundColor: regionConfig.primary, padding: '4px 12px', borderRadius: '20px' }}>
                    {initiative.status}
                  </span>
                  <span style={{ fontWeight: 600, color: regionConfig.primary, fontSize: '14px' }}>
                    {initiative.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Staff Contacts */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'فريق العمليات الإقليمي' : 'Regional Operations Team'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: spacing.lg }}>
            {regionalStaff.map((staff, index) => (
              <div
                key={index}
                style={{
                  padding: spacing.lg,
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderTop: `4px solid ${regionConfig.primary}`,
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: spacing.md }}>{staff.avatar}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: regionConfig.primary, marginBottom: spacing.sm }}>
                  {staff.name}
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 500, color: royalColors.mediumGray, marginBottom: spacing.md }}>
                  {staff.title}
                </p>
                <div style={{ fontSize: '12px', color: royalColors.darkGray, marginBottom: spacing.md, lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '6px' }}>📍 {staff.location}</p>
                  <p style={{ marginBottom: '6px', wordBreak: 'break-all' }}>📧 {staff.email}</p>
                  <p>📱 {staff.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Office Locations with Interactive Map */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgRefined }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'مواقع المكاتب الإقليمية' : 'Regional Office Locations'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.xxxl, alignItems: 'start' }}>
            {/* Offices List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  style={{
                    padding: spacing.lg,
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    borderLeft: `4px solid ${regionConfig.primary}`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.md }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: regionConfig.primary }}>
                        {office.city}, {office.country}
                      </h3>
                      <p style={{ fontSize: '13px', color: royalColors.mediumGray, marginTop: '4px' }}>
                        {office.type}
                      </p>
                    </div>
                    <span style={{ fontSize: '28px' }}>📍</span>
                  </div>
                  <div style={{ fontSize: '12px', color: royalColors.darkGray', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p><strong>{ar ? 'الموظفون:' : 'Staff:'}</strong> {office.staff}</p>
                    <p><strong>{ar ? 'الهاتف:' : 'Phone:'}</strong> {office.phone}</p>
                    <p><strong>{ar ? 'التأسيس:' : 'Established:'}</strong> {office.established}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Regional Map */}
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              minHeight: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: spacing.xl,
            }}>
              <svg
                viewBox="0 0 800 600"
                style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Map background */}
                <rect width="800" height="600" fill="#e8f4f8" />

                {/* Water features */}
                <circle cx="200" cy="150" r="80" fill="#b3d9ff" opacity="0.6" />
                <circle cx="650" cy="400" r="60" fill="#b3d9ff" opacity="0.6" />

                {/* Country regions with subtle colors */}
                {/* Jordan */}
                <polygon points="300,250 350,240 360,280 330,290" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="2" />
                {/* Lebanon */}
                <polygon points="380,200 395,195 398,240 385,235" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="2" />
                {/* Syria */}
                <polygon points="320,150 400,140 420,220 340,230" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="2" />
                {/* Iraq */}
                <polygon points="420,180 500,160 520,320 450,330" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="2" />
                {/* Palestine */}
                <polygon points="355,280 375,275 378,310 360,315" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="2" />

                {/* Office location markers */}
                {/* Amman */}
                <circle cx="320" cy="270" r="8" fill={regionConfig.primary} />
                <circle cx="320" cy="270" r="12" fill={regionConfig.primary} opacity="0.3" />
                <text x="320" y="300" fontSize="12" fontWeight="bold" textAnchor="middle" fill={regionConfig.primary}>
                  {ar ? 'عمّان' : 'Amman'}
                </text>

                {/* Beirut */}
                <circle cx="388" cy="215" r="8" fill={regionConfig.primary} />
                <circle cx="388" cy="215" r="12" fill={regionConfig.primary} opacity="0.3" />
                <text x="388" y="190" fontSize="12" fontWeight="bold" textAnchor="middle" fill={regionConfig.primary}>
                  {ar ? 'بيروت' : 'Beirut'}
                </text>

                {/* Damascus */}
                <circle cx="360" cy="160" r="8" fill={regionConfig.primary} />
                <circle cx="360" cy="160" r="12" fill={regionConfig.primary} opacity="0.3" />
                <text x="360" y="130" fontSize="12" fontWeight="bold" textAnchor="middle" fill={regionConfig.primary}>
                  {ar ? 'دمشق' : 'Damascus'}
                </text>

                {/* Baghdad */}
                <circle cx="470" cy="240" r="8" fill={regionConfig.primary} />
                <circle cx="470" cy="240" r="12" fill={regionConfig.primary} opacity="0.3" />
                <text x="470" y="210" fontSize="12" fontWeight="bold" textAnchor="middle" fill={regionConfig.primary}>
                  {ar ? 'بغداد' : 'Baghdad'}
                </text>

                {/* Gaza */}
                <circle cx="365" cy="310" r="8" fill={regionConfig.primary} />
                <circle cx="365" cy="310" r="12" fill={regionConfig.primary} opacity="0.3" />
                <text x="365" y="340" fontSize="12" fontWeight="bold" textAnchor="middle" fill={regionConfig.primary}>
                  {ar ? 'غزة' : 'Gaza'}
                </text>

                {/* Legend */}
                <circle cx="100" cy="520" r="5" fill={regionConfig.primary} />
                <text x="120" y="525" fontSize="12" fill={royalColors.darkGray}>
                  {ar ? 'مكاتب عاملة' : 'Active Offices'}
                </text>

                <rect x="100" y="545" width="10" height="10" fill="#ffe8d6" stroke={regionConfig.primary} strokeWidth="1" />
                <text x="120" y="555" fontSize="12" fill={royalColors.darkGray}>
                  {ar ? 'دول مخدومة' : 'Countries Served'}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Statistics */}
      <section style={{ padding: `${spacing.xxxl} ${spacing.xl}`, backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 600, color: royalColors.darkNavy, marginBottom: spacing.xxxl, fontFamily: '"Merriweather", Georgia, serif', textAlign: 'center' }}>
            {ar ? 'إحصائيات المستفيدين' : 'Beneficiary Statistics'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: spacing.lg,
          }}>
            {[
              { label: ar ? 'اللاجئون المدعومون' : 'Refugees Supported', value: '150,000+', icon: '🏠' },
              { label: ar ? 'المستفيدون من الأغذية' : 'Food Aid Recipients', value: '200,000+', icon: '🍚' },
              { label: ar ? 'المرضى المعالجون سنوياً' : 'Patients Treated Annually', value: '85,000+', icon: '🏥' },
              { label: ar ? 'الطلاب المدعومون' : 'Students Supported', value: '12,000+', icon: '📚' },
              { label: ar ? 'المتدربون المهنيون' : 'Vocational Trainees', value: '8,500+', icon: '💼' },
              { label: ar ? 'النساء والأطفال المحميون' : 'Protected Women & Children', value: '25,000+', icon: '👩‍👧‍👦' },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: spacing.lg,
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '42px', marginBottom: spacing.md }}>{stat.icon}</div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: regionConfig.primary, marginBottom: spacing.md }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '14px', color: royalColors.darkGray, fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region-Specific CTA */}
      <CtaSection
        heading={ar ? `ساعدنا في دعم منطقة الشرق الأوسط` : `Help Us Support the Middle East`}
        subheading={ar ? 'تبرعك سيحدث فرقاً حقيقياً في حياة ملايين الأشخاص عبر المنطقة' : 'Your donation will make a real difference in the lives of millions across the region'}
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
