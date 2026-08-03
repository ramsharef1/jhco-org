'use client';

import { type Locale } from '@/lib/i18n';
import { royalColors, gradients, shadows } from '@/lib/royalDesign';
import Link from 'next/link';
import { useState } from 'react';

const campaignDetails = {
  en: {
    'emergency-relief': {
      title: 'Emergency Relief Campaign',
      subtitle: 'Immediate Aid for Families in Crisis',
      goal: 500000,
      raised: 350000,
      impact: '1,240 families supported',
      description: 'Our Emergency Relief campaign provides immediate assistance to families facing humanitarian crises, natural disasters, and urgent humanitarian needs.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'In times of crisis, families need immediate support. Our Emergency Relief campaign is designed to respond quickly to humanitarian emergencies, providing food, shelter, medical care, and essential supplies to those affected by natural disasters, conflicts, and humanitarian crises.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Provide emergency food and water supplies',
            'Offer temporary shelter and housing assistance',
            'Supply medical care and emergency health services',
            'Deliver blankets, clothing, and essential items',
            'Coordinate with local partners for rapid response',
            'Support psychological counseling and trauma care',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'Last year, we responded to 14 emergency situations across 6 regions, reaching 1,240 families with emergency assistance. One example: When floods devastated a rural community, our team delivered food, medical supplies, and temporary shelter within 48 hours, helping 150 families get back on their feet.',
        },
      ],
      donors: 3245,
      donateBtn: 'Contribute Now',
      backBtn: 'Back to Campaigns',
    },
    'education': {
      title: 'Education Initiative',
      subtitle: 'Investing in the Future Through Learning',
      goal: 200000,
      raised: 145000,
      impact: '520 students benefited',
      description: 'Empowering the next generation through education. This campaign funds scholarships, school supplies, and educational infrastructure.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'Education is the foundation for breaking cycles of poverty. Our Education Initiative provides scholarships, school supplies, and educational infrastructure to students from underserved communities, ensuring they have access to quality education.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Award scholarships to deserving students',
            'Provide school supplies and learning materials',
            'Build and renovate school facilities',
            'Train and support educators',
            'Create mentorship programs',
            'Establish student welfare services',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'Through this campaign, we have supported 520 students from economically disadvantaged backgrounds. Fatima, a primary school student, received a scholarship that allowed her to continue her education and now aspires to become a teacher. Stories like hers inspire us to keep investing in education.',
        },
      ],
      donors: 1820,
      donateBtn: 'Support Education',
      backBtn: 'Back to Campaigns',
    },
    'healthcare': {
      title: 'Healthcare Access Campaign',
      subtitle: 'Ensuring Medical Care for All',
      goal: 300000,
      raised: 220000,
      impact: '75,000 patients treated',
      description: 'Ensuring healthcare accessibility to remote and underserved areas. Supports medical facility construction, equipment, and medical staff training.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'Healthcare should be a right, not a privilege. Our Healthcare Access campaign works to build and equip medical facilities in remote and underserved areas, ensuring communities have access to essential medical care.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Construct primary healthcare facilities',
            'Supply medical equipment and medicines',
            'Train healthcare workers',
            'Conduct health awareness campaigns',
            'Provide free medical clinics',
            'Support maternal and child health programs',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'Our healthcare initiatives have treated over 75,000 patients and trained 45 community health workers. In one rural village, we established a health clinic that now serves 3,000 residents who previously had to travel 50km for medical care.',
        },
      ],
      donors: 2156,
      donateBtn: 'Advance Healthcare',
      backBtn: 'Back to Campaigns',
    },
    'food-security': {
      title: 'Food Security Program',
      subtitle: 'Fighting Hunger and Malnutrition',
      goal: 150000,
      raised: 98000,
      impact: '3,850 families fed monthly',
      description: 'Providing nutritious food assistance and establishing sustainable food security programs for families in need.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'Hunger is a critical issue affecting thousands of families. Our Food Security Program provides immediate food assistance while building sustainable solutions like community gardens and livelihood programs.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Distribute nutritious food packages',
            'Establish community gardens',
            'Provide agricultural training',
            'Create school feeding programs',
            'Support local farmers',
            'Develop storage and preservation facilities',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'Each month, we feed 3,850 families through our food security programs. By also teaching farming and gardening skills, we help communities become self-sufficient. Ahmed, a farmer we trained, now produces surplus crops to sell, providing income for his family.',
        },
      ],
      donors: 1456,
      donateBtn: 'Fight Hunger',
      backBtn: 'Back to Campaigns',
    },
    'women-empowerment': {
      title: 'Women Empowerment Campaign',
      subtitle: 'Creating Economic Opportunities for Women',
      goal: 180000,
      raised: 112000,
      impact: '380 women trained',
      description: 'Creating economic independence and leadership opportunities for women through training, mentorship, and small business support.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'Empowering women drives community development. Our Women Empowerment campaign provides vocational training, business skills, and access to microfinance to help women achieve economic independence.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Offer vocational and skills training',
            'Provide business and entrepreneurship courses',
            'Connect women with microfinance support',
            'Create networking and mentorship opportunities',
            'Support childcare services',
            'Advocate for women\'s rights and leadership',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'We have trained 380 women in various skills. Leila completed our tailoring course and now runs a successful small business, employing three other women from her community. Her story is one of hundreds showing what\'s possible with opportunity and support.',
        },
      ],
      donors: 987,
      donateBtn: 'Empower Women',
      backBtn: 'Back to Campaigns',
    },
    'youth-programs': {
      title: 'Youth Development Campaign',
      subtitle: 'Building Future Leaders',
      goal: 220000,
      raised: 156000,
      impact: '890 youth empowered',
      description: 'Empowering young people with skills, leadership training, and mentorship to shape a better future.',
      sections: [
        {
          title: 'Campaign Overview',
          content: 'Young people are the future. Our Youth Development campaign invests in their potential through skills training, leadership development, and mentorship programs that prepare them for success.',
        },
        {
          title: 'What We Do',
          bullets: [
            'Provide digital and technical skills training',
            'Offer leadership development programs',
            'Create internship and job placement opportunities',
            'Support youth entrepreneurship',
            'Facilitate mentorship with professionals',
            'Organize community service programs',
          ],
        },
        {
          title: 'Impact Stories',
          content: 'Through our programs, 890 youth have received training and mentorship. Omar, who completed our digital skills program, now works as a web developer and mentors other young people in his community. This cycle of opportunity and giving back is transforming our region.',
        },
      ],
      donors: 1673,
      donateBtn: 'Support Youth',
      backBtn: 'Back to Campaigns',
    },
  },
  ar: {
    'emergency-relief': {
      title: 'حملة الإغاثة الطارئة',
      subtitle: 'المساعدة الفورية للأسر في الأزمات',
      goal: 500000,
      raised: 350000,
      impact: 'دعم 1,240 أسرة',
      description: 'توفر حملة الإغاثة الطارئة المساعدة الفورية للأسر التي تواجه أزمات إنسانية وكوارث طبيعية واحتياجات إنسانية عاجلة.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'في أوقات الأزمات، تحتاج الأسر إلى دعم فوري. تم تصميم حملة الإغاثة الطارئة للاستجابة السريعة للحالات الإنسانية الطارئة، وتوفير الغذاء والمأوى والرعاية الطبية واللوازم الأساسية للمتضررين من الكوارث الطبيعية والنزاعات والأزمات الإنسانية.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'توفير الغذاء والماء بشكل طارئ',
            'تقديم المأوى المؤقت والمساعدة السكنية',
            'توفير الرعاية الطبية وخدمات الطوارئ الصحية',
            'توصيل البطانيات والملابس والأشياء الأساسية',
            'التنسيق مع الشركاء المحليين للاستجابة السريعة',
            'دعم الاستشارة النفسية وعلاج الصدمات',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'في العام الماضي، استجبنا لـ 14 حالة طارئة عبر 6 مناطق، وصلنا إلى 1,240 أسرة بمساعدات طارئة. مثال واحد: عندما أغرقت الفيضانات مجتمعاً ريفياً، قام فريقنا بتوصيل الغذاء والإمدادات الطبية والمأوى المؤقت خلال 48 ساعة، مما ساعد 150 أسرة على العودة إلى حياتهم الطبيعية.',
        },
      ],
      donors: 3245,
      donateBtn: 'ساهم الآن',
      backBtn: 'العودة إلى الحملات',
    },
    'education': {
      title: 'مبادرة التعليم',
      subtitle: 'الاستثمار في المستقبل من خلال التعليم',
      goal: 200000,
      raised: 145000,
      impact: 'استفاد 520 طالباً',
      description: 'تمكين الجيل القادم من خلال التعليم. تمول هذه الحملة المنح الدراسية واللوازم المدرسية والبنية التحتية التعليمية.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'التعليم هو الأساس لكسر دورات الفقر. توفر مبادرة التعليم المنح الدراسية واللوازم المدرسية والبنية التحتية التعليمية للطلاب من المجتمعات المحرومة، مما يضمن حصولهم على تعليم جيد.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'منح منح دراسية للطلاب المستحقين',
            'توفير اللوازم المدرسية ومواد التعلم',
            'بناء وتجديد المنشآت التعليمية',
            'تدريب ودعم المعلمين',
            'إنشاء برامج الإرشاد',
            'إنشاء خدمات رعاية الطلاب',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'من خلال هذه الحملة، ساعدنا 520 طالباً من خلفيات اقتصادية محرومة. فاطمة، طالبة في المدرسة الابتدائية، حصلت على منحة دراسية سمحت لها بمتابعة تعليمها والآن تطمح لتصبح معلمة. قصص مثل قصتها تلهمنا للاستمرار في الاستثمار في التعليم.',
        },
      ],
      donors: 1820,
      donateBtn: 'ادعم التعليم',
      backBtn: 'العودة إلى الحملات',
    },
    'healthcare': {
      title: 'حملة الوصول الصحي',
      subtitle: 'ضمان الرعاية الطبية للجميع',
      goal: 300000,
      raised: 220000,
      impact: 'معالجة 75,000 مريض',
      description: 'ضمان إمكانية الوصول الصحي للمناطق النائية والمحرومة. يدعم بناء المنشآت الطبية والمعدات وتدريب الموظفين الطبيين.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'الرعاية الصحية يجب أن تكون حقاً وليس امتيازاً. تعمل حملة الوصول الصحي على بناء وتجهيز المنشآت الطبية في المناطق النائية والمحرومة، مما يضمن حصول المجتمعات على الرعاية الطبية الأساسية.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'بناء منشآت الرعاية الصحية الأولية',
            'توفير المعدات الطبية والأدوية',
            'تدريب العاملين في المجال الصحي',
            'إجراء حملات التوعية الصحية',
            'توفير عيادات طبية مجانية',
            'دعم برامج صحة الأم والطفل',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'عالجت مبادراتنا الصحية أكثر من 75,000 مريض وتدريب 45 عامل صحة مجتمعي. في قرية ريفية واحدة، أنشأنا عيادة صحية تخدم الآن 3,000 نسمة كانوا يضطرون سابقاً للسفر 50 كم للحصول على الرعاية الطبية.',
        },
      ],
      donors: 2156,
      donateBtn: 'تقدم الصحة',
      backBtn: 'العودة إلى الحملات',
    },
    'food-security': {
      title: 'برنامج الأمن الغذائي',
      subtitle: 'محاربة الجوع وسوء التغذية',
      goal: 150000,
      raised: 98000,
      impact: 'إطعام 3,850 أسرة شهرياً',
      description: 'توفير المساعدات الغذائية الغذائية وإنشاء برامج أمن غذائي مستدامة للأسر في الحاجة.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'الجوع مشكلة حادة تؤثر على آلاف الأسر. يوفر برنامج الأمن الغذائي المساعدة الغذائية الفورية مع بناء حلول مستدامة مثل الحدائق المجتمعية وبرامج سبل العيش.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'توزيع حزم الغذاء الغذائية',
            'إنشاء حدائق المجتمع',
            'توفير التدريب الزراعي',
            'إنشاء برامج تغذية المدارس',
            'دعم المزارعين المحليين',
            'تطوير منشآت التخزين والحفظ',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'كل شهر، نطعم 3,850 أسرة من خلال برامج الأمن الغذائي. بتعليم المهارات الزراعية والبستانية أيضاً، نساعد المجتمعات على الاكتفاء الذاتي. أحمد، مزارع قمنا بتدريبه، ينتج الآن محاصيل فائضة للبيع، مما يوفر دخلاً لعائلته.',
        },
      ],
      donors: 1456,
      donateBtn: 'محاربة الجوع',
      backBtn: 'العودة إلى الحملات',
    },
    'women-empowerment': {
      title: 'حملة تمكين المرأة',
      subtitle: 'إنشاء فرص اقتصادية للنساء',
      goal: 180000,
      raised: 112000,
      impact: 'تدريب 380 امرأة',
      description: 'خلق الاستقلالية الاقتصادية والفرص القيادية للنساء من خلال التدريب والإرشاد وحسومات الأعمال الصغيرة.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'تمكين المرأة يدفع تطور المجتمع. توفر حملة تمكين المرأة التدريب المهني ومهارات العمل والوصول إلى التمويل الأصغر لمساعدة النساء على تحقيق الاستقلالية الاقتصادية.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'توفير التدريب المهني ومهارات العمل',
            'توفير دورات الأعمال والريادة',
            'ربط النساء بدعم التمويل الأصغر',
            'إنشاء فرص التواصل والإرشاد',
            'دعم خدمات رعاية الأطفال',
            'الدعوة لحقوق المرأة والقيادة',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'قمنا بتدريب 380 امرأة في مهارات متنوعة. أكملت ليلى دورتنا في الخياطة والآن تدير مشروعاً تجارياً صغيراً ناجحاً، موظفة ثلاث نساء أخريات من مجتمعها. قصتها هي واحدة من مئات القصص التي تظهر ما هو ممكن مع الفرصة والدعم.',
        },
      ],
      donors: 987,
      donateBtn: 'تمكين النساء',
      backBtn: 'العودة إلى الحملات',
    },
    'youth-programs': {
      title: 'حملة تنمية الشباب',
      subtitle: 'بناء قادة المستقبل',
      goal: 220000,
      raised: 156000,
      impact: 'تمكين 890 شاب',
      description: 'تمكين الشباب بالمهارات والتدريب القيادي والإرشاد لتشكيل مستقبل أفضل.',
      sections: [
        {
          title: 'نظرة عامة على الحملة',
          content: 'الشباب هم المستقبل. توفر حملة تنمية الشباب استثماراً في إمكانياتهم من خلال برامج التدريب على المهارات وتطوير القيادة والبرامج الإرشادية التي تعدهم للنجاح.',
        },
        {
          title: 'ما الذي نفعله',
          bullets: [
            'توفير التدريب على المهارات الرقمية والتقنية',
            'توفير برامج تطوير القيادة',
            'إنشاء فرص التدريب والتوظيف',
            'دعم ريادة الأعمال للشباب',
            'تسهيل الإرشاد من قبل المحترفين',
            'تنظيم برامج خدمة المجتمع',
          ],
        },
        {
          title: 'قصص التأثير',
          content: 'من خلال برامجنا، تلقى 890 شاب تدريباً وإرشاداً. أكمل عمر برنامج مهارات الرقمية لدينا والآن يعمل كمطور ويب ويرشد الشباب الآخرين في مجتمعه. هذه الدورة من الفرص والعطاء تحول منطقتنا.',
        },
      ],
      donors: 1673,
      donateBtn: 'ادعم الشباب',
      backBtn: 'العودة إلى الحملات',
    },
  },
};

export default function CampaignDetailPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const { locale, id } = params;
  const ar = locale === 'ar';
  const campaigns = campaignDetails[locale as keyof typeof campaignDetails] || campaignDetails.en;
  const campaign = campaigns[id as keyof typeof campaigns];

  if (!campaign) {
    return (
      <div style={{ padding: '100px 32px', textAlign: 'center', direction: ar ? 'rtl' : 'ltr' }}>
        <h1 style={{ color: royalColors.darkNavy, fontFamily: 'serif' }}>
          {ar ? 'لم يتم العثور على الحملة' : 'Campaign Not Found'}
        </h1>
        <Link href={`${ar ? '/ar' : ''}/campaigns`} style={{ color: royalColors.hashemiteGold }}>
          {ar ? 'العودة إلى الحملات' : 'Back to Campaigns'}
        </Link>
      </div>
    );
  }

  const percentage = (campaign.raised / campaign.goal) * 100;
  const raised = campaign.raised.toLocaleString();
  const goal = campaign.goal.toLocaleString();

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      <section style={{ background: gradients.royalPrimary, color: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link
            href={`${ar ? '/ar' : ''}/campaigns`}
            style={{
              display: 'inline-block',
              color: royalColors.hashemiteGold,
              textDecoration: 'none',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            ← {campaign.backBtn}
          </Link>
          <h1 style={{ fontSize: '48px', fontFamily: 'serif', fontWeight: 800, marginBottom: '12px', letterSpacing: '0.5px' }}>
            {campaign.title}
          </h1>
          <p style={{ fontSize: '22px', opacity: 0.95, marginBottom: '24px' }}>
            {campaign.subtitle}
          </p>
          <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6 }}>
            {campaign.description}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 32px' }}>
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', color: royalColors.darkNavy, marginBottom: '20px', fontFamily: 'serif', fontWeight: 700 }}>
            {ar ? 'تقدم الحملة' : 'Campaign Progress'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: royalColors.hashemiteGold, fontFamily: 'serif', marginBottom: '8px' }}>
                ${raised}
              </div>
              <div style={{ fontSize: '13px', color: royalColors.textSecondary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {ar ? 'تم جمعه' : 'Raised'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: royalColors.darkNavy, fontFamily: 'serif', marginBottom: '8px' }}>
                ${goal}
              </div>
              <div style={{ fontSize: '13px', color: royalColors.textSecondary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {ar ? 'الهدف' : 'Goal'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: royalColors.charityRed, fontFamily: 'serif', marginBottom: '8px' }}>
                {campaign.donors.toLocaleString()}
              </div>
              <div style={{ fontSize: '13px', color: royalColors.textSecondary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {ar ? 'المتبرعون' : 'Donors'}
              </div>
            </div>
          </div>

          <div>
            <div style={{ height: '12px', backgroundColor: royalColors.bgRefined, borderRadius: '2px', overflow: 'hidden', border: `1px solid ${royalColors.borderSubtle}`, marginBottom: '12px' }}>
              <div
                style={{
                  width: `${percentage}%`,
                  height: '100%',
                  backgroundColor: royalColors.hashemiteGold,
                  transition: 'width 0.5s ease',
                }}
              />
            </div>
            <div style={{ fontSize: '12px', color: royalColors.textSecondary, fontWeight: 600 }}>
              {Math.round(percentage)}% {ar ? 'من الهدف' : 'of goal'}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: royalColors.borderFormal, margin: '40px 0' }} />

        <div style={{ marginBottom: '60px' }}>
          <Link
            href={`${ar ? '/ar' : ''}/donate?campaign=${id}`}
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
              marginBottom: '40px',
            }}
          >
            {campaign.donateBtn}
          </Link>
        </div>

        <div style={{ marginBottom: '60px' }}>
          {campaign.sections.map((section, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '28px', color: royalColors.darkNavy, marginBottom: '16px', fontFamily: 'serif', fontWeight: 700 }}>
                {section.title}
              </h2>
              {section.content && (
                <p style={{ fontSize: '16px', color: royalColors.textOfficial, lineHeight: 1.7, marginBottom: '24px' }}>
                  {section.content}
                </p>
              )}
              {section.bullets && (
                <ul style={{ marginLeft: ar ? 0 : '24px', marginRight: ar ? '24px' : 0, color: royalColors.textOfficial, lineHeight: 1.8 }}>
                  {section.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '12px', fontSize: '16px' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: royalColors.bgRefined, padding: '32px', borderRadius: '0px', borderLeft: `4px solid ${royalColors.hashemiteGold}` }}>
          <h3 style={{ fontSize: '20px', color: royalColors.darkNavy, marginBottom: '12px', fontFamily: 'serif', fontWeight: 700 }}>
            {ar ? 'الدعم الخاص بك مهم' : 'Your Support Matters'}
          </h3>
          <p style={{ fontSize: '16px', color: royalColors.textOfficial, lineHeight: 1.6 }}>
            {ar
              ? 'كل مساهمة تحدث فرقاً حقيقياً في حياة من هم بحاجة. شكراً لك على دعمك لهذه الحملة المهمة.'
              : 'Every contribution makes a real difference in the lives of those in need. Thank you for supporting this important campaign.'}
          </p>
        </div>
      </section>
    </div>
  );
}
