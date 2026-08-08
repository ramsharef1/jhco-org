import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('programs/livelihoods', locale);
}

export default async function LivelihoodsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <Link href={`${base}/programs`} style={{ color: '#d4af37', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block', transition: 'all 0.3s' }}>
            ← {ar ? 'العودة للبرامج' : 'Back to Programs'}
          </Link>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '20px 0 32px 0', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            {ar ? 'برنامج سبل العيش والمهارات' : 'Livelihood and Skills Training'}
          </h1>
          <p style={{ fontSize: '18px', color: '#d4af37', marginBottom: '40px', maxWidth: '700px', lineHeight: '1.6' }}>
            {ar
              ? 'تمكين الأفراد والعائلات من خلال التدريب المهني والأنشطة المدرة للدخل لتحقيق الاستقلالية الاقتصادية المستدامة'
              : 'Empowering individuals and families through vocational training and income-generating activities to achieve sustainable economic independence'}
          </p>

          {/* Key Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginTop: '40px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'الحالة' : 'Status'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', margin: 0 }}>Active</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'المدربون' : 'Trained'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', margin: 0 }}>3,200+</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'معدل التوظيف' : 'Employment Rate'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', margin: 0 }}>78%</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#aaa', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                {ar ? 'الدول' : 'Countries'}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '600', color: '#d4af37', margin: 0 }}>15+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Overview */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'نظرة عامة على البرنامج' : 'Program Overview'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '24px' }}>
                  {ar
                    ? 'يعمل برنامج سبل العيش والمهارات على تمكين الأفراد من المجتمعات الضعيفة من خلال توفير تدريب مهني شامل وفرص توظيف حقيقية. نحن نؤمن أن كل شخص يستحق الفرصة لكسب عيش كريم من خلال العمل المحترم والمهارات القيمة.'
                    : 'The Livelihood and Skills Training Program empowers individuals from vulnerable communities through comprehensive vocational training and real employment opportunities. We believe everyone deserves the chance to earn a dignified living through honest work and valuable skills.'
                  }
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d' }}>
                  {ar
                    ? 'منذ إطلاقه، ساعد البرنامج آلاف الأفراد على الخروج من دورة الفقر من خلال توفير المهارات التي يطلبها سوق العمل، والربط بين الخريجين وأصحاب العمل، والدعم المستمر لضمان النجاح على المدى الطويل.'
                    : 'Since its launch, the program has helped thousands of individuals break the cycle of poverty by providing market-demanded skills, connecting graduates with employers, and offering ongoing support to ensure long-term success.'
                  }
                </p>
              </div>
              <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1428', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                  {ar ? 'حقائق سريعة' : 'Quick Facts'}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.6', paddingBottom: '16px', borderBottom: '1px solid #e8e4db' }}>
                    <strong style={{ color: '#d4af37' }}>{ar ? 'البدء' : 'Start Date'}:</strong><br />
                    {ar ? 'يناير 2015' : 'January 2015'}
                  </li>
                  <li style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.6', paddingBottom: '16px', borderBottom: '1px solid #e8e4db' }}>
                    <strong style={{ color: '#d4af37' }}>{ar ? 'فئة العمر' : 'Target Age'}:</strong><br />
                    {ar ? '18-45 سنة' : '18-45 years'}
                  </li>
                  <li style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.6' }}>
                    <strong style={{ color: '#d4af37' }}>{ar ? 'المدة' : 'Duration'}:</strong><br />
                    {ar ? '3-6 أشهر' : '3-6 months'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Objectives */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'أهداف البرنامج' : 'Program Objectives'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
              {[
                {
                  title: ar ? 'التدريب المهني الشامل' : 'Comprehensive Skills Training',
                  desc: ar ? 'توفير تدريب عملي في المهن المطلوبة بسوق العمل' : 'Provide practical training in market-demanded professions',
                  icon: '🎯'
                },
                {
                  title: ar ? 'التوظيف والتشغيل' : 'Employment & Job Placement',
                  desc: ar ? 'ربط الخريجين مباشرة بفرص عمل حقيقية مع أصحاب العمل' : 'Connect graduates directly with real job opportunities and employers',
                  icon: '💼'
                },
                {
                  title: ar ? 'الدعم الاقتصادي الأصغر' : 'Microfinance Support',
                  desc: ar ? 'توفير قروض صغيرة لبدء المشاريع الصغيرة والعمل الحر' : 'Provide microloans for starting small businesses and self-employment',
                  icon: '💰'
                },
                {
                  title: ar ? 'تطوير المشاريع الصغيرة' : 'Small Business Development',
                  desc: ar ? 'إرشادات وتدريب لإنشاء وإدارة مشاريع تجارية مربحة' : 'Guidance and training for creating and managing profitable enterprises',
                  icon: '📈'
                },
              ].map((obj, idx) => (
                <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', borderLeft: '4px solid #d4af37' }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{obj.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {obj.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#3d3d3d', lineHeight: '1.6', margin: 0 }}>
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Training Tracks */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'مسارات التدريب' : 'Training Tracks'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                {
                  name: ar ? 'الحرف اليدوية' : 'Craftsmanship',
                  desc: ar ? 'النجارة، الخياطة، الخزف، والحرف التقليدية' : 'Carpentry, tailoring, pottery, traditional crafts',
                  skills: ar ? ['النجارة', 'الخياطة', 'الحرف اليدوية'] : ['Carpentry', 'Tailoring', 'Crafts']
                },
                {
                  name: ar ? 'التكنولوجيا والرقمية' : 'Technology & Digital',
                  desc: ar ? 'تصميم الويب، البرمجة، إدارة وسائل التواصل الاجتماعي' : 'Web design, programming, social media management',
                  skills: ar ? ['تصميم الويب', 'البرمجة', 'التسويق الرقمي'] : ['Web Design', 'Programming', 'Digital Marketing']
                },
                {
                  name: ar ? 'الخدمات' : 'Services',
                  desc: ar ? 'الطبخ، الفندقة، العناية الشخصية، الرعاية الصحية' : 'Cooking, hospitality, personal care, healthcare',
                  skills: ar ? ['الطبخ', 'الفندقة', 'الرعاية الصحية'] : ['Cooking', 'Hospitality', 'Healthcare']
                },
                {
                  name: ar ? 'الزراعة' : 'Agriculture',
                  desc: ar ? 'الزراعة الحديثة، تربية الحيوانات، معالجة الأغذية' : 'Modern farming, animal husbandry, food processing',
                  skills: ar ? ['الزراعة الحديثة', 'تربية الحيوانات', 'معالجة الأغذية'] : ['Modern Farming', 'Animal Husbandry', 'Food Processing']
                },
                {
                  name: ar ? 'التصنيع والإنتاج' : 'Manufacturing',
                  desc: ar ? 'الإنتاج الآلي، المنسوجات، صناعة التعبئة' : 'Industrial production, textiles, packaging manufacturing',
                  skills: ar ? ['الإنتاج الآلي', 'المنسوجات', 'الصيانة'] : ['Machine Operation', 'Textiles', 'Maintenance']
                },
                {
                  name: ar ? 'ريادة الأعمال' : 'Entrepreneurship',
                  desc: ar ? 'إدارة الأعمال، المبيعات والتسويق، إدارة المالية' : 'Business management, sales & marketing, financial management',
                  skills: ar ? ['إدارة الأعمال', 'المبيعات', 'المحاسبة'] : ['Business Mgmt', 'Sales', 'Accounting']
                },
              ].map((track, idx) => (
                <div key={idx} style={{ border: '1px solid #e8e4db', borderRadius: '8px', padding: '28px', transition: 'all 0.3s', cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {track.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '20px', lineHeight: '1.6' }}>
                    {track.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {track.skills.map((skill, sidx) => (
                      <span key={sidx} style={{ fontSize: '12px', backgroundColor: '#f9f7f4', color: '#d4af37', padding: '6px 12px', borderRadius: '20px', fontWeight: '500' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stories */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'قصص النجاح' : 'Success Stories'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                {
                  name: ar ? 'فاطمة علي' : 'Fatima Ali',
                  story: ar ? 'من عاملة منزلية إلى مديرة مشروع خياطة ناجح' : 'From homemaker to successful tailoring business owner',
                  detail: ar ? 'تدربت على الخياطة واستفادت من قرض ميسر لبدء مشروعها الخاص. الآن توظف 5 نساء أخريات' : 'Trained in tailoring and received a microfinance loan. Now employs 5 other women',
                  region: ar ? 'فلسطين' : 'Palestine'
                },
                {
                  name: ar ? 'محمود حسن' : 'Mahmoud Hassan',
                  story: ar ? 'من عاطل عن العمل إلى حرفي نجار مطلوب' : 'From unemployed to skilled carpenter in demand',
                  detail: ar ? 'اكتسب مهارات النجارة المتقدمة وتم توظيفه من قبل شركة بناء محترفة' : 'Acquired advanced carpentry skills and hired by professional construction firm',
                  region: ar ? 'الأردن' : 'Jordan'
                },
                {
                  name: ar ? 'ليلى محمد' : 'Leila Mohamed',
                  story: ar ? 'من متسربة من التعليم إلى مصممة ويب' : 'From school dropout to web designer',
                  detail: ar ? 'تعلمت البرمجة وتصميم الويب وأصبحت عاملة بشكل حر مع عملاء محليين ودوليين' : 'Learned programming and web design, now freelances for local and international clients',
                  region: ar ? 'لبنان' : 'Lebanon'
                },
              ].map((story, idx) => (
                <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', borderTop: '4px solid #d4af37' }}>
                  <p style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>
                    {story.region}
                  </p>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                    {story.name}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#d4af37', marginBottom: '12px' }}>
                    {story.story}
                  </p>
                  <p style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.6', margin: 0 }}>
                    {story.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Flow */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'كيفية عمل البرنامج' : 'How the Program Works'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', alignItems: 'flex-start' }}>
              {[
                { step: 1, title: ar ? 'التقديم' : 'Apply', desc: ar ? 'تقديم الطلب والتقييم الأولي' : 'Submit application & initial screening' },
                { step: 2, title: ar ? 'التقييم' : 'Assessment', desc: ar ? 'اختبار المهارات والاحتياجات' : 'Skills & needs assessment test' },
                { step: 3, title: ar ? 'التدريب' : 'Training', desc: ar ? 'تدريب مكثف (3-6 أشهر)' : 'Intensive training (3-6 months)' },
                { step: 4, title: ar ? 'التوظيف' : 'Placement', desc: ar ? 'ربط الخريجين بالوظائف' : 'Job placement assistance & interviews' },
                { step: 5, title: ar ? 'المتابعة' : 'Support', desc: ar ? 'متابعة مستمرة والدعم لمدة سنة' : 'Ongoing support for 1 year' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', position: 'relative' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#d4af37', color: '#0a1428', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '20px' }}>
                      {item.step}
                    </div>
                    {idx < 4 && (
                      <div style={{ position: 'absolute', left: '60%', width: '40%', height: '2px', backgroundColor: '#d4af37' }} />
                    )}
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', textAlign: 'center', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#6b6b6b', textAlign: 'center', lineHeight: '1.5', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'إحصائيات البرنامج' : 'Program Statistics'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
              {[
                { number: '3,200+', label: ar ? 'مشارك تم تدريبهم' : 'Participants Trained', change: '+15%' },
                { number: '78%', label: ar ? 'معدل التوظيف' : 'Employment Rate', change: '+8%' },
                { number: '2,400+', label: ar ? 'موظف بنجاح' : 'Successfully Employed', change: '+12%' },
                { number: '15+', label: ar ? 'دول نشطة' : 'Active Countries', change: '+3' },
              ].map((stat, idx) => (
                <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ fontSize: '36px', fontWeight: '700', color: '#d4af37', margin: '0 0 12px 0' }}>
                    {stat.number}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', margin: '0 0 12px 0' }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: '12px', color: '#27a745', fontWeight: '600', margin: 0 }}>
                    {stat.change} {ar ? 'هذا العام' : 'this year'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '2px solid #e8e4db' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'معايير الأهلية والمتطلبات' : 'Eligibility & Requirements'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '24px' }}>
                  {ar ? 'معايير الأهلية' : 'Eligibility Criteria'}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {(ar
                    ? [
                        'البالغون من 18-45 سنة',
                        'من الفئات الاقتصادية المنخفضة',
                        'خريج من المدرسة الثانوية على الأقل',
                        'ملتزمون بحضور التدريب',
                        'يمتلكون وثائق هوية صحيحة',
                      ]
                    : [
                        'Adults aged 18-45 years',
                        'From low-income households',
                        'Secondary school graduates',
                        'Committed to full-time training',
                        'Valid identification documents',
                      ]
                  ).map((item, idx) => (
                    <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #e8e4db', color: '#3d3d3d', fontSize: '15px', lineHeight: '1.6' }}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '24px' }}>
                  {ar ? 'ما الذي يقدمه البرنامج' : 'What We Provide'}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {(ar
                    ? [
                        'تدريب مهني مجاني لمدة 3-6 أشهر',
                        'مواد ودوات تدريب كاملة',
                        'شهادة معتمدة بعد الإنجاز',
                        'مساعدة في البحث عن عمل',
                        'قروض ميسرة للعاملين بحسابهم الخاص',
                      ]
                    : [
                        'Free vocational training for 3-6 months',
                        'Complete training materials & tools',
                        'Certified completion certificate',
                        'Job search assistance',
                        'Microfinance loans for self-employment',
                      ]
                  ).map((item, idx) => (
                    <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #e8e4db', color: '#3d3d3d', fontSize: '15px', lineHeight: '1.6' }}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ backgroundColor: '#f9f7f4', padding: '60px 40px', borderRadius: '8px', textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>
              {ar ? 'هل أنت مهتم بالتدريب؟' : 'Interested in Training?'}
            </h2>
            <p style={{ fontSize: '16px', color: '#3d3d3d', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              {ar
                ? 'انضم إلى آلاف الأفراد الذين غيروا حياتهم من خلال برنامجنا. قدم طلبك اليوم وابدأ رحلة تمكينك الاقتصادي.'
                : 'Join thousands of individuals who have transformed their lives through our program. Submit your application today and start your journey to economic empowerment.'}
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={`${base}/get-involved/donate`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#a8312f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '16px', transition: 'all 0.3s' }}>
                {ar ? 'ادعم البرنامج' : 'Support This Program'}
              </Link>
              <Link href={`${base}/contact`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: 'transparent', color: '#a8312f', border: '2px solid #a8312f', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '16px', transition: 'all 0.3s' }}>
                {ar ? 'تقديم طلب' : 'Apply Now'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs Section */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '40px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'برامج تمكينية أخرى' : 'Other Empowerment Programs'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                slug: 'education',
                name: ar ? 'برنامج الدعم التعليمي' : 'Educational Support',
                description: ar ? 'منح دراسية وموارد تعليمية للطلاب' : 'Scholarships and educational resources for students',
              },
              {
                slug: 'healthcare',
                name: ar ? 'شبكة العيادات الطبية' : 'Medical Clinics Network',
                description: ar ? 'خدمات طبية مجانية للفئات الضعيفة' : 'Free healthcare services for vulnerable populations',
              },
              {
                slug: 'gaza-aid',
                name: ar ? 'الإغاثة الطارئة' : 'Emergency Relief',
                description: ar ? 'مساعدات إنسانية فورية للأزمات' : 'Immediate humanitarian assistance for crises',
              },
            ].map((program) => (
              <Link key={program.slug} href={`${base}/programs/${program.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #e8e4db', borderRadius: '8px', padding: '28px', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {program.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.6', margin: 0 }}>
                    {program.description}
                  </p>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e8e4db' }}>
                    <span style={{ fontSize: '14px', color: '#d4af37', fontWeight: '600' }}>
                      {ar ? 'اكتشف المزيد' : 'Learn More'} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
