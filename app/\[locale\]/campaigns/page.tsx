'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, gradients, shadows } from '@/lib/royalDesign';
import Link from 'next/link';
import { useState } from 'react';

const content = {
  en: {
    title: 'Fundraising Campaigns',
    subtitle: 'Be Part of Something Bigger',
    heroDesc: 'Join us in making a real difference. Our active campaigns directly support families, communities, and individuals in need across our regions.',
    stats: [
      { number: '$2.1M', label: 'Total Raised' },
      { number: '45K+', label: 'Donors' },
      { number: '28', label: 'Active Campaigns' },
    ],
    campaigns: [
      {
        id: 'emergency-relief',
        icon: '🚨',
        title: 'Emergency Relief',
        desc: 'Support families affected by crisis and natural disasters',
        longDesc: 'Our Emergency Relief campaign provides immediate assistance to families facing humanitarian crises, natural disasters, and urgent humanitarian needs.',
        goal: 500000,
        raised: 350000,
        impact: '1,240 families supported',
        featured: true,
      },
      {
        id: 'education',
        icon: '📚',
        title: 'Education Initiative',
        desc: 'Provide scholarships and educational support to students',
        longDesc: 'Empowering the next generation through education. This campaign funds scholarships, school supplies, and educational infrastructure.',
        goal: 200000,
        raised: 145000,
        impact: '520 students benefited',
        featured: false,
      },
      {
        id: 'healthcare',
        icon: '🏥',
        title: 'Healthcare Access',
        desc: 'Build and equip medical facilities for underserved communities',
        longDesc: 'Ensuring healthcare accessibility to remote and underserved areas. Supports medical facility construction, equipment, and medical staff training.',
        goal: 300000,
        raised: 220000,
        impact: '75,000 patients treated',
        featured: true,
      },
      {
        id: 'food-security',
        icon: '🌾',
        title: 'Food Security Program',
        desc: 'Combat hunger and malnutrition in vulnerable communities',
        longDesc: 'Providing nutritious food assistance and establishing sustainable food security programs for families in need.',
        goal: 150000,
        raised: 98000,
        impact: '3,850 families fed monthly',
        featured: false,
      },
      {
        id: 'women-empowerment',
        icon: '👩',
        title: 'Women Empowerment',
        desc: 'Support vocational training and economic opportunities for women',
        longDesc: 'Creating economic independence and leadership opportunities for women through training, mentorship, and small business support.',
        goal: 180000,
        raised: 112000,
        impact: '380 women trained',
        featured: false,
      },
      {
        id: 'youth-programs',
        icon: '👦',
        title: 'Youth Development',
        desc: 'Invest in youth skills training and mentorship programs',
        longDesc: 'Empowering young people with skills, leadership training, and mentorship to shape a better future.',
        goal: 220000,
        raised: 156000,
        impact: '890 youth empowered',
        featured: true,
      },
    ],
    shareMessage: 'Share this campaign with your network',
    donateBtn: 'Donate Now',
    viewMore: 'View Details',
    progressLabel: 'raised of goal',
  },
  ar: {
    title: 'حملات جمع التبرعات',
    subtitle: 'كن جزءاً من شيء أكبر',
    heroDesc: 'انضم إلينا في إحداث فرق حقيقي. تدعم حملاتنا النشطة الأسر والمجتمعات والأفراد المحتاجين في أنحاء مناطقنا.',
    stats: [
      { number: '2.1M$', label: 'إجمالي ما تم جمعه' },
      { number: '45K+', label: 'المتبرعون' },
      { number: '28', label: 'الحملات النشطة' },
    ],
    campaigns: [
      {
        id: 'emergency-relief',
        icon: '🚨',
        title: 'الإغاثة الطارئة',
        desc: 'دعم الأسر المتأثرة بالأزمات والكوارث الطبيعية',
        longDesc: 'توفر حملة الإغاثة الطارئة المساعدة الفورية للأسر التي تواجه أزمات إنسانية وكوارث طبيعية واحتياجات إنسانية عاجلة.',
        goal: 500000,
        raised: 350000,
        impact: 'دعم 1,240 أسرة',
        featured: true,
      },
      {
        id: 'education',
        icon: '📚',
        title: 'مبادرة التعليم',
        desc: 'توفير المنح الدراسية والدعم التعليمي للطلاب',
        longDesc: 'تمكين الجيل القادم من خلال التعليم. تمول هذه الحملة المنح الدراسية واللوازم المدرسية والبنية التحتية التعليمية.',
        goal: 200000,
        raised: 145000,
        impact: 'استفاد 520 طالباً',
        featured: false,
      },
      {
        id: 'healthcare',
        icon: '🏥',
        title: 'الوصول الصحي',
        desc: 'بناء وتجهيز المنشآت الطبية للمجتمعات المحرومة',
        longDesc: 'ضمان إمكانية الوصول الصحي للمناطق النائية والمحرومة. يدعم بناء المنشآت الطبية والمعدات وتدريب الموظفين الطبيين.',
        goal: 300000,
        raised: 220000,
        impact: 'معالجة 75,000 مريض',
        featured: true,
      },
      {
        id: 'food-security',
        icon: '🌾',
        title: 'برنامج الأمن الغذائي',
        desc: 'محاربة الجوع وسوء التغذية في المجتمعات الضعيفة',
        longDesc: 'توفير المساعدات الغذائية الغذائية وإنشاء برامج أمن غذائي مستدامة للأسر في الحاجة.',
        goal: 150000,
        raised: 98000,
        impact: 'إطعام 3,850 أسرة شهرياً',
        featured: false,
      },
      {
        id: 'women-empowerment',
        icon: '👩',
        title: 'تمكين المرأة',
        desc: 'دعم التدريب المهني والفرص الاقتصادية للمرأة',
        longDesc: 'خلق الاستقلالية الاقتصادية والفرص القيادية للنساء من خلال التدريب والإرشاد وحسومات الأعمال الصغيرة.',
        goal: 180000,
        raised: 112000,
        impact: 'تدريب 380 امرأة',
        featured: false,
      },
      {
        id: 'youth-programs',
        icon: '👦',
        title: 'تنمية الشباب',
        desc: 'الاستثمار في تدريب المهارات وبرامج الإرشاد للشباب',
        longDesc: 'تمكين الشباب بالمهارات والتدريب القيادي والإرشاد لتشكيل مستقبل أفضل.',
        goal: 220000,
        raised: 156000,
        impact: 'تمكين 890 شاب',
        featured: true,
      },
    ],
    shareMessage: 'شارك هذه الحملة مع شبكتك',
    donateBtn: 'تبرع الآن',
    viewMore: 'عرض التفاصيل',
    progressLabel: 'من الهدف',
  },
};

function CampaignCard({ campaign, locale, ar, text }: any) {
  const [showDetails, setShowDetails] = useState(false);
  const percentage = (campaign.raised / campaign.goal) * 100;
  const raised = campaign.raised.toLocaleString();
  const goal = campaign.goal.toLocaleString();

  return (
    <div
      style={{
        padding: '28px',
        backgroundColor: 'white',
        borderRadius: '0px',
        border: campaign.featured ? `2px solid ${royalColors.hashemiteGold}` : `1px solid ${royalColors.borderFormal}`,
        boxShadow: campaign.featured ? shadows.royal : shadows.md,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = shadows.lg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = campaign.featured ? shadows.royal : shadows.md;
      }}
    >
      {campaign.featured && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            right: ar ? 'auto' : '20px',
            left: ar ? '20px' : 'auto',
            background: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Featured
        </div>
      )}

      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{campaign.icon}</div>

      <h3 style={{ fontSize: '22px', color: royalColors.darkNavy, marginBottom: '8px', fontFamily: 'serif', fontWeight: 700 }}>
        {campaign.title}
      </h3>

      <p style={{ fontSize: '14px', color: royalColors.textSecondary, marginBottom: '20px', lineHeight: 1.5 }}>
        {campaign.desc}
      </p>

      {showDetails && (
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: royalColors.bgRefined, borderRadius: '0px', borderLeft: `4px solid ${royalColors.hashemiteGold}` }}>
          <p style={{ fontSize: '14px', color: royalColors.textOfficial, lineHeight: 1.6, marginBottom: '12px' }}>
            {campaign.longDesc}
          </p>
          <p style={{ fontSize: '13px', color: royalColors.hashemiteGold, fontWeight: 700 }}>
            {campaign.impact}
          </p>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', fontWeight: 600, color: royalColors.textSecondary }}>
          <span>{ar ? `تم جمع: $${raised}` : `Raised: $${raised}`}</span>
          <span>{ar ? `الهدف: $${goal}` : `Goal: $${goal}`}</span>
        </div>
        <div style={{ width: '100%', height: '10px', backgroundColor: royalColors.bgRefined, borderRadius: '2px', overflow: 'hidden', border: `1px solid ${royalColors.borderSubtle}` }}>
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: royalColors.hashemiteGold,
              transition: 'width 0.5s ease',
            }}
          />
        </div>
        <div style={{ marginTop: '6px', fontSize: '11px', color: royalColors.textSecondary, fontWeight: 500 }}>
          {Math.round(percentage)}% {ar ? 'من الهدف' : 'of goal'}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: 'transparent',
            color: royalColors.hashemiteGold,
            border: `1px solid ${royalColors.hashemiteGold}`,
            borderRadius: '0px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
            e.currentTarget.style.color = royalColors.darkNavy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = royalColors.hashemiteGold;
          }}
        >
          {showDetails ? (ar ? 'إخفاء' : 'Hide') : text.viewMore}
        </button>
        <Link
          href={`${ar ? '/ar' : ''}/donate?campaign=${campaign.id}`}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            textDecoration: 'none',
            borderRadius: '0px',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: `1px solid ${royalColors.hashemiteGold}`,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.goldDark;
            e.currentTarget.style.borderColor = royalColors.goldDark;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
            e.currentTarget.style.borderColor = royalColors.hashemiteGold;
          }}
        >
          {text.donateBtn}
        </Link>
      </div>
    </div>
  );
}

export default function CampaignsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: gradients.royalPrimary, color: 'white', padding: '100px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '56px', marginBottom: '16px', fontFamily: 'serif', fontWeight: 800, letterSpacing: '0.5px' }}>
          {text.title}
        </h1>
        <p style={{ fontSize: '22px', marginBottom: '20px', opacity: 0.95, fontWeight: 400 }}>
          {text.subtitle}
        </p>
        <p style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
          {text.heroDesc}
        </p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px', backgroundColor: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {text.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: royalColors.hashemiteGold, fontFamily: 'serif', marginBottom: '12px' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '14px', color: royalColors.textSecondary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            height: '1px',
            backgroundColor: royalColors.borderFormal,
            margin: '40px 0',
          }}
        />

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', color: royalColors.darkNavy, marginBottom: '32px', fontFamily: 'serif', fontWeight: 700, textAlign: 'center' }}>
            {ar ? 'حملاتنا النشطة' : 'Active Campaigns'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {text.campaigns.map((camp) => (
              <CampaignCard key={camp.id} campaign={camp} locale={locale} ar={ar} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: royalColors.bgRefined, padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', color: royalColors.darkNavy, marginBottom: '20px', fontFamily: 'serif', fontWeight: 700 }}>
            {ar ? 'كيف يمكنك المساعدة؟' : 'How You Can Help'}
          </h2>
          <p style={{ fontSize: '16px', color: royalColors.textOfficial, marginBottom: '32px', lineHeight: 1.6 }}>
            {ar
              ? 'كل مساهمة، بغض النظر عن الحجم، تحدث فرقاً حقيقياً في حياة من هم بحاجة. اختر حملة تقترب من قلبك واشترك في القضية.'
              : 'Every contribution, no matter the size, makes a real difference in the lives of those in need. Choose a campaign close to your heart and join the cause.'}
          </p>
          <Link
            href={`${ar ? '/ar' : ''}/donate`}
            style={{
              display: 'inline-block',
              padding: '16px 48px',
              backgroundColor: royalColors.deepRoyal,
              color: royalColors.hashemiteGold,
              textDecoration: 'none',
              borderRadius: '0px',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: shadows.royal,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = shadows.lg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.royal;
            }}
          >
            {ar ? 'ابدأ التبرع' : 'Start Donating'}
          </Link>
        </div>
      </section>
    </div>
  );
}
