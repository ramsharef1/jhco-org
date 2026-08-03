'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function CorporateGivingPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // Color scheme
  const colors = {
    primaryNavy: '#1a3a52',
    textNavy: '#2c4563',
    lightGrey: '#f5f5f5',
    white: '#ffffff',
    textGrey: '#555555',
    accentGold: '#d4af37',
    successGreen: '#27ae60',
    lightBlue: '#e8f1f8',
    border: '#e0e0e0',
    silver: '#c0c0c0',
    gold: '#ffd700',
    platinum: '#e5e4e2',
  };

  const sponsorshipLevels = [
    {
      id: 'silver',
      name: ar ? 'الفضة' : 'Silver',
      amount: '$5,000 - $24,999',
      color: colors.silver,
      benefits: ar
        ? [
            'شعار الشركة على موقع الويب',
            'تقارير سنوية مخصصة',
            '4 تذاكر فعالية خاصة',
            'شهادة تقدير من المدير التنفيذي',
            'المظهر في نشرتنا الإخبارية',
            'خصم ضريبي 100%',
          ]
        : [
            'Company logo on website',
            'Annual customized reports',
            '4 VIP event tickets',
            'Executive appreciation certificate',
            'Feature in our newsletter',
            '100% tax deductible',
          ],
    },
    {
      id: 'gold',
      name: ar ? 'الذهب' : 'Gold',
      amount: '$25,000 - $99,999',
      color: colors.gold,
      benefits: ar
        ? [
            'شعار بارز على موقع الويب (صفحة الشركاء)',
            'تقارير سنوية مخصصة + اجتماعات ربع سنوية',
            '8 تذاكر فعالية خاصة + حفل عشاء حصري',
            'لوح شرف في مقر المنظمة',
            'مقالة حول مبادرة CSR الخاصة بك',
            'برنامج مطابقة هدايا الموظفين',
            'خصم ضريبي 100%',
          ]
        : [
            'Prominent logo on website (Partner page)',
            'Annual reports + quarterly briefings',
            '8 VIP event tickets + exclusive dinner',
            'Recognition plaque at headquarters',
            'Featured case study in our publication',
            'Employee matching gifts program',
            '100% tax deductible',
          ],
    },
    {
      id: 'platinum',
      name: ar ? 'البلاتين' : 'Platinum',
      amount: '$100,000+',
      color: colors.platinum,
      benefits: ar
        ? [
            'شعار بارز مع رابط على جميع صفحات الويب',
            'تقارير ربع سنوية مفصلة + اجتماعات شهرية',
            'تذاكر فعالية غير محدودة + الوصول لجميع الفعاليات',
            'تسمية برنامج أو مشروع باسم الشركة',
            'مقابلات وسائط إعلامية منتظمة',
            'برنامج مطابقة هدايا الموظفين (ثنائي)',
            'فريق تطوع من الموظفين مخصص',
            'مقعد في مجلس الاستشاريين',
            'خصم ضريبي 100%',
          ]
        : [
            'Prominent logo across all web pages',
            'Quarterly detailed reports + monthly calls',
            'Unlimited event access + premier positioning',
            'Name a program or project after your company',
            'Regular media interviews and features',
            'Employee matching gifts (doubled)',
            'Dedicated employee volunteer team',
            'Advisory board seat',
            '100% tax deductible',
          ],
    },
  ];

  const csrPackages = [
    {
      title: ar ? 'الإغاثة الطارئة' : 'Emergency Relief',
      description: ar
        ? 'استجابة سريعة للأزمات الإنسانية والكوارث الطبيعية'
        : 'Rapid response to humanitarian crises and natural disasters',
      impact: ar
        ? 'تساهم في إنقاذ الأرواح والتعافي السريع'
        : 'Save lives and enable rapid recovery',
      icon: '🚨',
    },
    {
      title: ar ? 'التعليم والتدريب' : 'Education & Training',
      description: ar
        ? 'بناء المهارات والفرص التعليمية للشباب'
        : 'Build skills and educational opportunities for youth',
      impact: ar
        ? 'ترفع من مستويات التحصيل والتوظيف'
        : 'Increase educational outcomes and employment',
      icon: '📚',
    },
    {
      title: ar ? 'الصحة والرفاهية' : 'Health & Wellness',
      description: ar
        ? 'برامج الرعاية الصحية والوقاية من الأمراض'
        : 'Healthcare programs and disease prevention',
      impact: ar
        ? 'تحسن الصحة العامة والحياة الكريمة'
        : 'Improve public health and quality of life',
      icon: '🏥',
    },
    {
      title: ar ? 'المشاريع التنموية' : 'Development Projects',
      description: ar
        ? 'البنية التحتية والمشاريع الاقتصادية المستدامة'
        : 'Infrastructure and sustainable economic projects',
      impact: ar
        ? 'خلق فرص عمل وتحسين الدخل'
        : 'Create jobs and improve livelihoods',
      icon: '🏗️',
    },
    {
      title: ar ? 'الأمن الغذائي' : 'Food Security',
      description: ar
        ? 'ضمان الغذاء الآمن والتغذية الكافية'
        : 'Ensure food security and adequate nutrition',
      impact: ar
        ? 'القضاء على الجوع وسوء التغذية'
        : 'Eliminate hunger and malnutrition',
      icon: '🍽️',
    },
    {
      title: ar ? 'حقوق الإنسان' : 'Human Rights',
      description: ar
        ? 'الدعاع الحقوقي والعدالة الاجتماعية'
        : 'Advocacy and social justice initiatives',
      impact: ar
        ? 'حماية الفئات الضعيفة والمهمشة'
        : 'Protect vulnerable and marginalized groups',
      icon: '⚖️',
    },
  ];

  const employeeGivingOptions = [
    {
      title: ar ? 'مطابقة هدايا الموظفين' : 'Matching Gifts',
      description: ar
        ? 'تطابق الشركة تبرعات الموظفين بنسبة 1:1 حتى 5:1'
        : 'Company matches employee donations at 1:1 to 5:1 ratio',
      benefit: ar
        ? 'تضاعف أو تضاعف أثر تبرعات موظفيك'
        : 'Double or triple the impact of employee donations',
    },
    {
      title: ar ? 'التطوع المدفوع' : 'Paid Volunteer Time',
      description: ar
        ? 'منح موظفيك وقت عمل مدفوع للتطوع'
        : 'Grant employees paid work time to volunteer',
      benefit: ar
        ? 'بناء ثقافة الالتزام الاجتماعي'
        : 'Build a culture of social responsibility',
    },
    {
      title: ar ? 'برنامج الكسب' : 'Workplace Giving',
      description: ar
        ? 'تبرعات مستمرة بسهولة من الراتب'
        : 'Easy recurring donations through payroll',
      benefit: ar
        ? 'تبسيط عملية التبرع للموظفين'
        : 'Streamline giving for employees',
    },
    {
      title: ar ? 'برنامج المنح التعليمية' : 'Scholarship Program',
      description: ar
        ? 'تمويل المنح الدراسية لأطفال موظفيك'
        : 'Fund scholarships for employee families',
      benefit: ar
        ? 'الاستثمار في التعليم والمستقبل'
        : 'Invest in education and future leaders',
    },
  ];

  const volunteerEvents = [
    {
      name: ar ? 'يوم التطوع العائلي' : 'Family Volunteer Day',
      description: ar
        ? 'أحضر عائلتك وساهم في المشاريع المجتمعية'
        : 'Bring your family and participate in community projects',
      frequency: ar ? 'ربع سنوي' : 'Quarterly',
      impact: ar ? 'يشارك فيه 500+ شخص سنوياً' : '500+ participants annually',
    },
    {
      name: ar ? 'حملات التنظيف والترميم' : 'Cleanup & Repair Campaigns',
      description: ar
        ? 'تنظيف وترميم المدارس والمرافق العامة'
        : 'Clean and repair schools and public facilities',
      frequency: ar ? 'شهري' : 'Monthly',
      impact: ar ? 'تحسين 50+ موقع سنوياً' : '50+ locations improved yearly',
    },
    {
      name: ar ? 'برامج التدريس والتوجيه' : 'Teaching & Mentoring',
      description: ar
        ? 'تعليم الطلاب والتوجيه الوظيفي'
        : 'Teach students and provide career mentoring',
      frequency: ar ? 'مستمر' : 'Ongoing',
      impact: ar ? 'توجيه 1000+ طالب' : '1000+ students mentored',
    },
    {
      name: ar ? 'مشاريع البنية التحتية' : 'Infrastructure Projects',
      description: ar
        ? 'بناء البئر والطرق والمراكز الصحية'
        : 'Build wells, roads, and health centers',
      frequency: ar ? 'نصف سنوي' : 'Biannual',
      impact: ar ? 'تطوير 20+ منطقة' : '20+ communities developed',
    },
  ];

  const corporateTestimonials = [
    {
      company: 'Tech Innovation Group',
      industry: ar ? 'التكنولوجيا' : 'Technology',
      quote: ar
        ? 'شراكتنا مع JHCO حولت ثقافة الشركة. موظفونا يشعرون بالفخر لكونهم جزءاً من شيء ذي معنى.'
        : 'Our partnership with JHCO transformed our company culture. Employees feel proud to be part of something meaningful.',
      name: ar ? 'أحمد الأحمدي' : 'Ahmed Al-Ahmadi',
      title: ar ? 'الرئيس التنفيذي' : 'CEO',
    },
    {
      company: 'Global Finance Solutions',
      industry: ar ? 'الخدمات المالية' : 'Financial Services',
      quote: ar
        ? 'الشفافية والمساءلة في JHCO تجعلنا واثقين من تأثير استثماراتنا.'
        : 'JHCO\'s transparency and accountability give us confidence in our investment impact.',
      name: ar ? 'فاطمة العازمي' : 'Fatima Al-Azmi',
      title: ar ? 'مدير المسؤولية الاجتماعية' : 'CSR Manager',
    },
    {
      company: 'Healthcare Industries',
      industry: ar ? 'الرعاية الصحية' : 'Healthcare',
      quote: ar
        ? 'تبرعاتنا أنقذت آلاف الأرواح. نحن نرى التأثير مباشرة من خلال التقارير الشهرية.'
        : 'Our donations have saved thousands of lives. We see direct impact through monthly reports.',
      name: ar ? 'محمد الرشيد' : 'Mohammad Al-Rashid',
      title: ar ? 'مدير البرامج' : 'Program Director',
    },
    {
      company: 'Manufacturing Excellence Ltd',
      industry: ar ? 'التصنيع' : 'Manufacturing',
      quote: ar
        ? 'برنامج المطابقة زاد تبرعات موظفينا بـ 300%. إنه فوز للموظفين والمنظمة على حد سواء.'
        : 'Our matching program increased employee giving by 300%. It\'s a win for both employees and the community.',
      name: ar ? 'سارة الحويطي' : 'Sarah Al-Huwaitii',
      title: ar ? 'رئيسة الموارد البشرية' : 'HR Director',
    },
  ];

  const roiMetrics = [
    {
      metric: ar ? 'الأشخاص المستفيدون' : 'People Served',
      value: ar ? '1M+' : '1M+',
      description: ar ? 'سنوياً من خلال برامجنا' : 'annually through our programs',
      icon: '👥',
    },
    {
      metric: ar ? 'دول العمل' : 'Countries Active',
      value: '15',
      description: ar ? 'في آسيا والشرق الأوسط وأفريقيا' : 'across Asia, Middle East & Africa',
      icon: '🌍',
    },
    {
      metric: ar ? 'كفاءة الإنفاق' : 'Program Efficiency',
      value: '90%',
      description: ar ? 'للبرامج المباشرة (10% إداري)' : 'to direct programs (10% admin)',
      icon: '📊',
    },
    {
      metric: ar ? 'معدل النمو' : 'Annual Growth',
      value: '25%',
      description: ar ? 'في التأثير والوصول' : 'in impact and reach',
      icon: '📈',
    },
  ];

  const impactCalculator = (amount: number) => {
    return {
      students: Math.floor(amount / 100), // $100 per student per year
      meals: Math.floor(amount / 5), // $5 per meal
      people: Math.floor(amount / 50), // $50 per person served
      hours: Math.floor(amount / 2), // $2 per volunteer hour
    };
  };

  return (
    <>
      {/* Hero Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: `linear-gradient(135deg, ${colors.primaryNavy} 0%, #0f2a3a 100%)`,
          padding: '160px 32px 120px',
          position: 'relative',
          overflow: 'hidden',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.accentGold} 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: '300',
              color: 'white',
              marginBottom: '24px',
              fontFamily: "'Georgia', 'Garamond', serif",
              lineHeight: '1.2',
              textAlign: 'center',
            }}
          >
            {ar ? 'الشراكات المؤسسية' : 'Corporate Partnerships'}
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              lineHeight: '1.8',
              textAlign: 'center',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'شراكات استراتيجية تجمع بين مسؤولية الشركات والتأثير الاجتماعي المستدام'
              : 'Strategic partnerships combining corporate responsibility with lasting social impact'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
              marginTop: '60px',
              textAlign: 'center',
            }}
          >
            {[
              { number: '500+', label: ar ? 'شركة شريكة' : 'Partner Companies' },
              { number: '$50M+', label: ar ? 'تأثير سنوي' : 'Annual Impact' },
              { number: '10 سنوات', label: ar ? 'من النجاح' : 'of Success' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: '600',
                    color: colors.accentGold,
                    marginBottom: '8px',
                    fontFamily: "'Georgia', 'Garamond', serif",
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.8)',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Packages Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'حزم المسؤولية الاجتماعية' : 'CSR Packages'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'اختر المشروع الذي يتوافق مع قيم شركتك وأهدافها'
                : 'Choose the initiative that aligns with your company values'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '36px',
            }}
          >
            {csrPackages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: `1px solid ${colors.border}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{pkg.icon}</div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {pkg.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    marginBottom: '16px',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {pkg.description}
                </p>
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: colors.successGreen,
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {ar ? 'التأثير المتوقع:' : 'Expected Impact:'} {pkg.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels - Pricing Cards */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.white,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'مستويات الشراكة' : 'Sponsorship Levels'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'اختر المستوى الذي يناسب استراتيجية شركتك'
                : 'Select the level that fits your corporate strategy'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              marginBottom: '60px',
            }}
          >
            {sponsorshipLevels.map((level) => (
              <div
                key={level.id}
                onClick={() => setSelectedPackage(selectedPackage === level.id ? null : level.id)}
                style={{
                  backgroundColor: colors.white,
                  border:
                    selectedPackage === level.id
                      ? `3px solid ${colors.primaryNavy}`
                      : `2px solid ${colors.border}`,
                  borderRadius: '12px',
                  padding: '48px 32px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow:
                    selectedPackage === level.id
                      ? '0 12px 32px rgba(26, 58, 82, 0.15)'
                      : '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseOver={(e) => {
                  if (selectedPackage !== level.id) {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedPackage !== level.id) {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                  }
                }}
              >
                {/* Tier Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: ar ? 'auto' : '32px',
                    right: ar ? '32px' : 'auto',
                    backgroundColor: level.color,
                    color: level.id === 'gold' ? colors.primaryNavy : 'white',
                    padding: '8px 24px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {level.name}
                </div>

                <div style={{ marginTop: '12px', marginBottom: '32px' }}>
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      color: colors.primaryNavy,
                      marginBottom: '8px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {level.amount}
                  </div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: colors.textGrey,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {ar ? 'في السنة' : 'per year'}
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  {level.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: ar ? 'flex-end' : 'flex-start',
                        marginBottom: '12px',
                        gap: '12px',
                        flexDirection: ar ? 'row-reverse' : 'row',
                      }}
                    >
                      <span
                        style={{
                          color: colors.successGreen,
                          fontWeight: '600',
                          fontSize: '16px',
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textGrey,
                          margin: 0,
                          lineHeight: '1.5',
                          fontFamily: "'Inter', '-apple-system', sans-serif",
                        }}
                      >
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    backgroundColor:
                      selectedPackage === level.id ? colors.primaryNavy : colors.lightGrey,
                    color:
                      selectedPackage === level.id ? 'white' : colors.primaryNavy,
                    border:
                      selectedPackage === level.id
                        ? `2px solid ${colors.primaryNavy}`
                        : `2px solid ${colors.border}`,
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    if (selectedPackage === level.id) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {ar ? 'اختر هذا المستوى' : 'Choose This Level'}
                </button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href={`${base}/contact`}
              style={{
                padding: '18px 56px',
                backgroundColor: colors.primaryNavy,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-block',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${colors.primaryNavy}`,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.primaryNavy;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryNavy;
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {ar ? 'ابدأ شراكتك' : 'Start Your Partnership'}
            </Link>
          </div>
        </div>
      </section>

      {/* Employee Giving Programs */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightBlue,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'برامج التبرع الموظفي' : 'Employee Giving Programs'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'مشاركة موظفيك في صنع التأثير'
                : 'Engage your employees in making a difference'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
            }}
          >
            {employeeGivingOptions.map((option, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {option.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    marginBottom: '16px',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {option.description}
                </p>
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: `1px solid ${colors.border}`,
                    marginTop: '16px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: colors.successGreen,
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {ar ? 'الفائدة:' : 'Benefit:'} {option.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Volunteer Events */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.white,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'فرص التطوع الجماعي' : 'Team Volunteer Events'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'اجمع فريقك وحقق تأثيراً مباشراً'
                : 'Bring your team together and create direct impact'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '36px',
            }}
          >
            {volunteerEvents.map((event, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.lightGrey,
                  borderRadius: '8px',
                  padding: '40px',
                  border: `1px solid ${colors.border}`,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: ar ? 'auto' : '20px',
                    left: ar ? '20px' : 'auto',
                    backgroundColor: colors.primaryNavy,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {event.frequency}
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    marginTop: '32px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {event.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    marginBottom: '20px',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {event.description}
                </p>
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: `1px solid ${colors.border}`,
                    marginTop: '20px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: colors.successGreen,
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {ar ? 'التأثير:' : 'Impact:'} {event.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Impact Metrics */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: `linear-gradient(135deg, ${colors.primaryNavy} 0%, #0f2a3a 100%)`,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: 'white',
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'تأثير الاستثمار' : 'ROI & Impact Metrics'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'شفافية كاملة حول كيفية استخدام شراكاتكم'
                : 'Complete transparency on how your partnerships make a difference'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '48px',
              marginBottom: '60px',
            }}
          >
            {roiMetrics.map((metric, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{metric.icon}</div>
                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: '600',
                    color: colors.accentGold,
                    marginBottom: '8px',
                    fontFamily: "'Georgia', 'Garamond', serif",
                  }}
                >
                  {metric.value}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '8px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {metric.metric}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.8)',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Testimonials */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'شهادات الشركات' : 'Corporate Testimonials'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'ماذا يقول شركاؤنا عن تجاربهم معنا'
                : 'What our corporate partners say about working with us'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '36px',
            }}
          >
            {corporateTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${colors.accentGold}`,
                  borderLeftDirection: ar ? 'right' : 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    color: colors.textGrey,
                    fontStyle: 'italic',
                    marginBottom: '24px',
                    lineHeight: '1.8',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: colors.primaryNavy,
                      margin: '0 0 4px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.textGrey,
                      margin: '0 0 8px 0',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {testimonial.title}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: colors.successGreen,
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: "'Inter', '-apple-system', sans-serif",
                    }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.white,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '400',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Georgia', 'Garamond', serif",
              }}
            >
              {ar ? 'حاسبة التأثير' : 'Impact Calculator'}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: colors.textGrey,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.8',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'انظر كيف يحول تبرعك العالم'
                : 'See how your donation transforms the world'}
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.lightBlue,
              borderRadius: '12px',
              padding: '60px 48px',
              textAlign: 'center',
            }}
          >
            <div style={{ marginBottom: '40px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.primaryNavy,
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: "'Inter', '-apple-system', sans-serif",
                }}
              >
                {ar ? 'أدخل مبلغ التبرع بالدولار' : 'Enter donation amount in USD'}
              </label>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: ar ? 'row-reverse' : 'row',
                  marginBottom: '40px',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  $
                </span>
                <input
                  type="number"
                  defaultValue="5000"
                  min="1"
                  max="1000000"
                  onChange={(e) => {
                    const amount = parseInt(e.target.value) || 0;
                    const results = impactCalculator(amount);
                    const display = document.getElementById('impact-display');
                    if (display) {
                      display.innerHTML = `
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 36px;">
                          <div style="text-align: center;">
                            <div style="font-size: 36px; font-weight: 600; color: ${colors.successGreen}; margin-bottom: 8px; font-family: 'Georgia', 'Garamond', serif;">${results.students}</div>
                            <p style="font-size: 14px; color: ${colors.textGrey}; margin: 0; font-family: 'Inter', '-apple-system', sans-serif;">${ar ? 'طالب يتلقى تعليماً' : 'Students Educated'}</p>
                          </div>
                          <div style="text-align: center;">
                            <div style="font-size: 36px; font-weight: 600; color: ${colors.successGreen}; margin-bottom: 8px; font-family: 'Georgia', 'Garamond', serif;">${results.meals}</div>
                            <p style="font-size: 14px; color: ${colors.textGrey}; margin: 0; font-family: 'Inter', '-apple-system', sans-serif;">${ar ? 'وجبة غذائية' : 'Meals Provided'}</p>
                          </div>
                          <div style="text-align: center;">
                            <div style="font-size: 36px; font-weight: 600; color: ${colors.successGreen}; margin-bottom: 8px; font-family: 'Georgia', 'Garamond', serif;">${results.people}</div>
                            <p style="font-size: 14px; color: ${colors.textGrey}; margin: 0; font-family: 'Inter', '-apple-system', sans-serif;">${ar ? 'شخص مستفيد' : 'People Served'}</p>
                          </div>
                          <div style="text-align: center;">
                            <div style="font-size: 36px; font-weight: 600; color: ${colors.successGreen}; margin-bottom: 8px; font-family: 'Georgia', 'Garamond', serif;">${results.hours}</div>
                            <p style="font-size: 14px; color: ${colors.textGrey}; margin: 0; font-family: 'Inter', '-apple-system', sans-serif;">${ar ? 'ساعة تطوع' : 'Volunteer Hours'}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                  style={{
                    padding: '16px 20px',
                    fontSize: '18px',
                    border: `2px solid ${colors.primaryNavy}`,
                    borderRadius: '8px',
                    width: '200px',
                    textAlign: 'center',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                />
              </div>
            </div>

            <div id="impact-display" style={{ marginTop: '40px' }}>
              {(() => {
                const results = impactCalculator(5000);
                return (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '36px',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '36px',
                          fontWeight: '600',
                          color: colors.successGreen,
                          marginBottom: '8px',
                          fontFamily: "'Georgia', 'Garamond', serif",
                        }}
                      >
                        {results.students}
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textGrey,
                          margin: 0,
                          fontFamily: "'Inter', '-apple-system', sans-serif",
                        }}
                      >
                        {ar ? 'طالب يتلقى تعليماً' : 'Students Educated'}
                      </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '36px',
                          fontWeight: '600',
                          color: colors.successGreen,
                          marginBottom: '8px',
                          fontFamily: "'Georgia', 'Garamond', serif",
                        }}
                      >
                        {results.meals}
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textGrey,
                          margin: 0,
                          fontFamily: "'Inter', '-apple-system', sans-serif",
                        }}
                      >
                        {ar ? 'وجبة غذائية' : 'Meals Provided'}
                      </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '36px',
                          fontWeight: '600',
                          color: colors.successGreen,
                          marginBottom: '8px',
                          fontFamily: "'Georgia', 'Garamond', serif",
                        }}
                      >
                        {results.people}
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textGrey,
                          margin: 0,
                          fontFamily: "'Inter', '-apple-system', sans-serif",
                        }}
                      >
                        {ar ? 'شخص مستفيد' : 'People Served'}
                      </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '36px',
                          fontWeight: '600',
                          color: colors.successGreen,
                          marginBottom: '8px',
                          fontFamily: "'Georgia', 'Garamond', serif",
                        }}
                      >
                        {results.hours}
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textGrey,
                          margin: 0,
                          fontFamily: "'Inter', '-apple-system', sans-serif",
                        }}
                      >
                        {ar ? 'ساعة تطوع' : 'Volunteer Hours'}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Compliance Info */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: colors.lightGrey,
          padding: '80px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: '8px',
              padding: '48px',
              border: `2px solid ${colors.primaryNavy}`,
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: colors.primaryNavy,
                marginBottom: '20px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar ? 'الفوائد الضريبية والامتثال' : 'Tax Benefits & Compliance'}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr' : 'repeat(2, 1fr)',
                gap: '32px',
                marginBottom: '24px',
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar ? 'الخصم الضريبي الكامل' : 'Full Tax Deduction'}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar
                    ? 'JHCO منظمة خيرية مسجلة رسمياً. جميع التبرعات معفاة من الضرائب بالكامل.'
                    : 'JHCO is a registered charitable organization. All donations are fully tax-deductible.'}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar ? 'شفافية كاملة' : 'Complete Transparency'}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar
                    ? 'تقارير سنوية مفصلة ودوريات دورية عن كيفية استخدام أموالك.'
                    : 'Detailed annual reports and regular updates on fund usage.'}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar ? 'براءات اعتماد دولية' : 'International Accreditation'}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar
                    ? 'معتمدة من المنظمات الدولية للتمويل والتطوير.'
                    : 'Accredited by international development and funding bodies.'}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: colors.primaryNavy,
                    marginBottom: '12px',
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar ? 'الامتثال الكامل' : 'Full Compliance'}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textGrey,
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: "'Inter', '-apple-system', sans-serif",
                  }}
                >
                  {ar
                    ? 'الامتثال الكامل للقوانين الدولية وقوانين الصرف والعقوبات.'
                    : 'Full compliance with international laws and regulations.'}
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: '13px',
                color: colors.textGrey,
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: `1px solid ${colors.border}`,
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
            >
              {ar
                ? 'استشر مستشارك الضريبي للحصول على معلومات محددة عن الفوائد الضريبية في بلدك.'
                : 'Consult with your tax advisor for specific information about tax benefits in your country.'}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: colors.primaryNavy,
          padding: '120px 32px',
          direction: ar ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '400',
              color: 'white',
              marginBottom: '20px',
              fontFamily: "'Georgia', 'Garamond', serif",
            }}
          >
            {ar ? 'جاهز لبدء الشراكة؟' : 'Ready to Make a Difference?'}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '60px',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto 60px',
              fontFamily: "'Inter', '-apple-system', sans-serif",
            }}
          >
            {ar
              ? 'دعنا نساعدك في صياغة حل شراكة مخصص يحقق أهدافك ويحقق تأثيراً حقيقياً.'
              : 'Let us help you craft a customized partnership solution that achieves your goals and creates lasting impact.'}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              flexDirection: ar ? 'row-reverse' : 'row',
            }}
          >
            <Link
              href={`${base}/contact`}
              style={{
                padding: '18px 56px',
                backgroundColor: 'white',
                color: colors.primaryNavy,
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-block',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid white',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = colors.primaryNavy;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {ar ? 'ابدأ الآن' : 'Get Started'}
            </Link>

            <a
              href={`mailto:partnerships@jhco.org`}
              style={{
                padding: '18px 56px',
                backgroundColor: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-block',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid white',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: "'Inter', '-apple-system', sans-serif",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = colors.primaryNavy;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {ar ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
