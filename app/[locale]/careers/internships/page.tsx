import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('careers/internships', locale);
}

export default async function InternshipsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)', padding: '120px 32px', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)', borderRadius: '50%', transform: 'translate(50%, -50%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 70%)', borderRadius: '50%', transform: 'translate(-30%, 30%)' }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '16px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', margin: '0 0 16px 0' }}>
            {ar ? 'تطوير الكوادر المستقبلية' : 'DEVELOP FUTURE LEADERS'}
          </p>

          <h1 style={{ fontSize: '72px', fontWeight: '300', margin: '0 0 32px 0', fontFamily: 'Georgia, serif', lineHeight: '1.1' }}>
            {ar ? 'برامج التدريب الداخلي' : 'Internship Programs'}
          </h1>

          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '48px', color: '#e8e4db', maxWidth: '700px', margin: '0 auto 48px' }}>
            {ar ? 'اكتسب خبرة عملية قيمة وساهم مباشرة في المشاريع الإنسانية بينما تتعلم من الخبراء في المجال' : 'Gain valuable practical experience and contribute directly to humanitarian projects while learning from industry experts'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/careers/internships#programs`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'استكشف البرامج' : 'Explore Programs'}
            </Link>
            <Link href={`${base}/careers/internships#apply`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'قدّم طلبك الآن' : 'Apply Now'}
            </Link>
          </div>
        </div>
      </section>

      {/* Internship Overview */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'عن برامج التدريب الداخلي' : 'About Our Internship Programs'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'تقدم الهيئة الخيرية الأردنية الهاشمية فرص تدريب شاملة لتطوير الكوادر المتخصصة في مجالات العمل الإنساني' : 'JHCO offers comprehensive internship opportunities to develop specialized professionals in humanitarian work'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '📚',
                title: ar ? 'التعليم والتطوير' : 'Learning & Development',
                desc: ar ? 'تدريب عملي مكثف مع فرص التعلم المستمر والتطوير المهني' : 'Intensive practical training with continuous learning and professional development',
              },
              {
                icon: '🌍',
                title: ar ? 'التجربة العملية' : 'Real-World Experience',
                desc: ar ? 'اعمل على مشاريع حقيقية وساهم في تأثير قابل للقياس على المجتمعات' : 'Work on real projects and contribute to measurable impact on communities',
              },
              {
                icon: '🤝',
                title: ar ? 'الإرشاد المهني' : 'Professional Mentoring',
                desc: ar ? 'تلقّ إرشادات من قادة ومتخصصين في مجالات العمل الإنساني' : 'Receive guidance from leaders and specialists in humanitarian work',
              },
              {
                icon: '🏆',
                title: ar ? 'التطور المهني' : 'Career Development',
                desc: ar ? 'بناء شبكتك المهنية وفرص للتطور الوظيفي المستقبلي' : 'Build your professional network and gain career advancement opportunities',
              },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '36px 28px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#6b6b6b', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section id="programs" style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'البرامج المتاحة' : 'Available Programs'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'اختر من بيننا مجموعة من البرامج التدريبية المتخصصة' : 'Choose from our range of specialized internship programs'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {[
              {
                title: ar ? 'برنامج الاستجابة الإنسانية الطارئة' : 'Emergency Response Internship',
                duration: ar ? '6 أشهر' : '6 months',
                stipend: ar ? '500 دولار/الشهر' : '$500/month',
                location: ar ? 'عمّان وآفاق ميدانية' : 'Amman & Field Locations',
                description: ar ? 'اعمل مع فريق الاستجابة للأزمات وتعلم كيفية إدارة العمليات الإنسانية في المناطق المتأثرة بالأزمات' : 'Work with crisis response teams and learn to manage humanitarian operations in crisis-affected areas',
                requirements: ar ? ['درجة جامعية أو في السنة الأخيرة', 'رغبة في العمل الميداني', 'لياقة جسدية جيدة'] : ['University degree or final year', 'Willingness for fieldwork', 'Good physical fitness'],
              },
              {
                title: ar ? 'برنامج التنمية المستدامة' : 'Sustainable Development Internship',
                duration: ar ? '6 أشهر' : '6 months',
                stipend: ar ? '500 دولار/الشهر' : '$500/month',
                location: ar ? 'عمّان' : 'Amman',
                description: ar ? 'ركز على المشاريع طويلة الأجل والبرامج الإنمائية المستدامة والتأثير القابل للقياس' : 'Focus on long-term projects, sustainable development programs, and measurable impact',
                requirements: ar ? ['درجة في إدارة المشاريع أو ذات صلة', 'مهارات تحليلية قوية', 'اهتمام بالتنمية'] : ['Degree in project management or related', 'Strong analytical skills', 'Development interest'],
              },
              {
                title: ar ? 'برنامج الصحة والتعليم' : 'Health & Education Internship',
                duration: ar ? '4 أشهر' : '4 months',
                stipend: ar ? '400 دولار/الشهر' : '$400/month',
                location: ar ? 'عمّان' : 'Amman',
                description: ar ? 'شارك في برامج تحسين الصحة والتعليم والتدريب المجتمعي وبناء القدرات' : 'Participate in health and education improvement programs, community training, and capacity building',
                requirements: ar ? ['خلفية في الصحة أو التعليم', 'اهتمام بتطوير المجتمع', 'مهارات تواصل جيدة'] : ['Background in health or education', 'Community development interest', 'Good communication skills'],
              },
              {
                title: ar ? 'برنامج السياسات والمناصرة' : 'Policy & Advocacy Internship',
                duration: ar ? '6 أشهر' : '6 months',
                stipend: ar ? '550 دولار/الشهر' : '$550/month',
                location: ar ? 'عمّان' : 'Amman',
                description: ar ? 'اعمل على السياسات العامة والمناصرة والعلاقات الحكومية والتأثير السياسي' : 'Work on public policy, advocacy, government relations, and policy impact',
                requirements: ar ? ['درجة في العلوم السياسية أو القانون', 'اهتمام بالسياسات', 'مهارات الكتابة ممتازة'] : ['Degree in political science or law', 'Policy interest', 'Excellent writing skills'],
              },
            ].map((program, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '36px', borderRadius: '8px', border: '1px solid #d4af37', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {program.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#6b6b6b', marginBottom: '24px' }}>
                  {program.description}
                </p>

                <div style={{ display: 'grid', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e8e4db' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>⏱️</span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {ar ? 'المدة' : 'Duration'}
                      </div>
                      <div style={{ fontSize: '16px', color: '#0a1428' }}>
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>💰</span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {ar ? 'المكافأة الشهرية' : 'Monthly Stipend'}
                      </div>
                      <div style={{ fontSize: '16px', color: '#0a1428', fontWeight: '600' }}>
                        {program.stipend}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>📍</span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {ar ? 'الموقع' : 'Location'}
                      </div>
                      <div style={{ fontSize: '16px', color: '#0a1428' }}>
                        {program.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                    {ar ? 'المتطلبات' : 'Requirements'}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {program.requirements.map((req, ridx) => (
                      <li key={ridx} style={{ fontSize: '14px', marginBottom: '8px', color: '#3d3d3d', paddingLeft: '20px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#d4af37', fontWeight: 'bold' }}>✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Stipend Info */}
      <section style={{ backgroundColor: '#0a1428', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'معلومات المكافأة والمدة' : 'Compensation & Duration Details'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '💵',
                title: ar ? 'المكافآت الشهرية' : 'Monthly Stipend',
                details: ar ? ['400-550 دولار أمريكي شهرياً', 'حسب مستوى البرنامج', 'تحويل بنكي آمن'] : ['$400-550 USD per month', 'Based on program level', 'Secure bank transfer'],
              },
              {
                icon: '⏳',
                title: ar ? 'مدة البرنامج' : 'Program Duration',
                details: ar ? ['4-6 أشهر للبرنامج', 'مرونة في الجداول الزمنية', 'خيارات تمديد متاحة'] : ['4-6 months per program', 'Flexible schedules', 'Extension options available'],
              },
              {
                icon: '🎓',
                title: ar ? 'المزايا الإضافية' : 'Additional Benefits',
                details: ar ? ['شهادة معترف بها', 'خطاب توصية احترافي', 'فرص التطوير المستمر'] : ['Recognized certificate', 'Professional recommendation letter', 'Continuous development opportunities'],
              },
              {
                icon: '🌐',
                title: ar ? 'خيارات العمل' : 'Work Arrangements',
                details: ar ? ['عمل ميداني وفي المكتب', 'خيارات العمل عن بعد', 'توازن عمل حياة صحي'] : ['Field and office work', 'Remote work options', 'Healthy work-life balance'],
              },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '36px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                  {item.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.details.map((detail, didx) => (
                    <li key={didx} style={{ fontSize: '15px', color: '#d4af37', lineHeight: '1.8' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Learned */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'المهارات التي ستكتسبها' : 'Skills You\'ll Develop'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'اكتسب مهارات تقنية وقيادية قيمة من العمل الإنساني' : 'Gain valuable technical and leadership skills from humanitarian work'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              {
                category: ar ? 'المهارات التقنية' : 'Technical Skills',
                skills: ar ? [
                  'إدارة المشاريع',
                  'جمع وتحليل البيانات',
                  'كتابة التقارير',
                  'المراقبة والتقييم',
                ] : [
                  'Project management',
                  'Data collection & analysis',
                  'Report writing',
                  'M&E monitoring',
                ],
              },
              {
                category: ar ? 'مهارات القيادة' : 'Leadership Skills',
                skills: ar ? [
                  'صنع القرار',
                  'التفكير النقدي',
                  'حل المشاكل',
                  'القيادة والتأثير',
                ] : [
                  'Decision making',
                  'Critical thinking',
                  'Problem solving',
                  'Leadership & influence',
                ],
              },
              {
                category: ar ? 'مهارات الاتصال' : 'Communication Skills',
                skills: ar ? [
                  'التواصل الفعال',
                  'الكتابة المهنية',
                  'العروض التقديمية',
                  'العمل مع المجتمعات',
                ] : [
                  'Effective communication',
                  'Professional writing',
                  'Presentations',
                  'Community engagement',
                ],
              },
              {
                category: ar ? 'المعرفة المتخصصة' : 'Specialized Knowledge',
                skills: ar ? [
                  'العمل الإنساني',
                  'التنمية المستدامة',
                  'حقوق الإنسان',
                  'العدالة الاجتماعية',
                ] : [
                  'Humanitarian work',
                  'Sustainable development',
                  'Human rights',
                  'Social justice',
                ],
              },
            ].map((skill, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '36px', borderRadius: '8px', border: '1px solid #e8e4db' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0a1428', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #d4af37' }}>
                  {skill.category}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {skill.skills.map((s, sidx) => (
                    <li key={sidx} style={{ fontSize: '16px', marginBottom: '12px', color: '#3d3d3d', paddingLeft: '24px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#d4af37', fontWeight: 'bold' }}>→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'عملية التقديم' : 'Application Process'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              {
                step: '01',
                title: ar ? 'قدّم طلبك' : 'Submit Application',
                desc: ar ? 'ملء نموذج الطلب الكامل مع سيرتك الذاتية وخطاب الحافز' : 'Complete application form with CV and motivation letter',
              },
              {
                step: '02',
                title: ar ? 'الفحص الأولي' : 'Initial Review',
                desc: ar ? 'سيتم مراجعة طلبك ضمن 5-7 أيام عمل' : 'Your application reviewed within 5-7 working days',
              },
              {
                step: '03',
                title: ar ? 'المقابلة الأولى' : 'First Interview',
                desc: ar ? 'مقابلة عبر الفيديو لتقييم ملاءمتك للبرنامج' : 'Video interview to assess program fit',
              },
              {
                step: '04',
                title: ar ? 'المقابلة النهائية' : 'Final Interview',
                desc: ar ? 'مقابلة شاملة مع مسؤول البرنامج والقيادة' : 'Comprehensive interview with program lead',
              },
              {
                step: '05',
                title: ar ? 'الموافقة النهائية' : 'Final Approval',
                desc: ar ? 'الحصول على الموافقة والاتفاق على التفاصيل' : 'Final approval and agreement finalization',
              },
              {
                step: '06',
                title: ar ? 'البدء بالعمل' : 'Program Start',
                desc: ar ? 'التوجيه الشامل وبدء التدريب الفعلي' : 'Orientation and program begins',
              },
            ].map((step, idx) => (
              <div key={idx}>
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ backgroundColor: '#d4af37', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '700', color: '#0a1428' }}>
                    {step.step}
                  </div>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#6b6b6b' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الجدول الزمني للبرامج' : 'Program Timeline'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'تتوفر الفرص على مدار السنة مع جولات تقديم محددة' : 'Opportunities available year-round with specific application cycles'}
          </p>

          <div style={{ backgroundColor: '#f9f7f4', padding: '48px', borderRadius: '8px', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                {
                  season: ar ? 'الربيع' : 'Spring',
                  months: ar ? 'مارس - مايو' : 'March - May',
                  closing: ar ? 'إغلاق الطلبات: 28 فبراير' : 'Application deadline: Feb 28',
                  start: ar ? 'البدء: أبريل' : 'Start: April',
                },
                {
                  season: ar ? 'الصيف' : 'Summer',
                  months: ar ? 'يونيو - أغسطس' : 'June - August',
                  closing: ar ? 'إغلاق الطلبات: 31 مايو' : 'Application deadline: May 31',
                  start: ar ? 'البدء: يونيو' : 'Start: June',
                },
                {
                  season: ar ? 'الخريف' : 'Fall',
                  months: ar ? 'سبتمبر - نوفمبر' : 'September - November',
                  closing: ar ? 'إغلاق الطلبات: 31 أغسطس' : 'Application deadline: Aug 31',
                  start: ar ? 'البدء: سبتمبر' : 'Start: September',
                },
                {
                  season: ar ? 'الشتاء' : 'Winter',
                  months: ar ? 'ديسمبر - فبراير' : 'December - February',
                  closing: ar ? 'إغلاق الطلبات: 30 نوفمبر' : 'Application deadline: Nov 30',
                  start: ar ? 'البدء: يناير' : 'Start: January',
                },
              ].map((cycle, idx) => (
                <div key={idx} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '6px', border: '1px solid #e8e4db' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                    {cycle.season}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '12px' }}>
                    <strong>{cycle.months}</strong>
                  </p>
                  <div style={{ fontSize: '14px', color: '#5a5a6a', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid #e8e4db' }}>
                    {cycle.closing}
                  </div>
                  <div style={{ fontSize: '14px', color: '#0a1428', fontWeight: '600' }}>
                    {cycle.start}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #d4af37', color: '#0a1428' }}>
            <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6' }}>
              {ar ? '⚠️ ملاحظة: تاريخ إغلاق الطلبات: تقبل الطلبات حتى الساعة 11:59 مساءً بتوقيت عمّان في التاريخ المحدد' : '⚠️ Note: Application deadlines close at 11:59 PM Amman time on the specified date'}
            </p>
          </div>
        </div>
      </section>

      {/* Past Interns Testimonials */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'شهادات المتدربين السابقين' : 'Past Interns\' Testimonials'}
          </h2>
          <p style={{ fontSize: '18px', color: '#d4af37', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'قراءة تجارب الآخرين وكيف غيّرت البرنامج مساراتهم المهنية' : 'Read about others\' experiences and how the program transformed their careers'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                name: ar ? 'سارة محمود' : 'Sarah Mohammad',
                role: ar ? 'خريجة برنامج التنمية المستدامة' : 'Sustainable Development Internship Graduate',
                quote: ar ? 'البرنامج أعطاني فرصة حقيقية لتطبيق ما تعلمته نظرياً على أرض الواقع. استقبلت دعماً كبيراً من الفريق والمدراء. الآن أعمل كمديرة مشروع في إحدى منظمات التنمية' : 'The program gave me a real opportunity to apply my theoretical knowledge in practice. I received great support from the team and managers. Now I work as a project manager in a development organization',
                company: ar ? 'مديرة مشروع بمنظمة دولية' : 'Project Manager at International NGO',
              },
              {
                name: ar ? 'أحمد السلمان' : 'Ahmed Al-Salman',
                role: ar ? 'خريج برنامج الاستجابة للأزمات' : 'Crisis Response Internship Graduate',
                quote: ar ? 'عملي الميداني علّمني الكثير عن حقيقة الأزمات الإنسانية. الخبرة العملية لا تقدر بثمن. تطورت مهاراتي في إدارة المشاريع بشكل ملحوظ' : 'My field experience taught me so much about the reality of humanitarian crises. Practical experience is invaluable. My project management skills developed significantly',
                company: ar ? 'مسؤول البرامج الميدانية' : 'Field Programs Officer',
              },
              {
                name: ar ? 'ليلى عبدالرحمن' : 'Layla Abdul-Rahman',
                role: ar ? 'خريجة برنامج السياسات والمناصرة' : 'Policy & Advocacy Internship Graduate',
                quote: ar ? 'ساعدني البرنامج في فهم السياسات العامة والمناصرة. أصبحت أكثر ثقة في مهاراتي البحثية والكتابية. توصيات البرنامج فتحت لي أبواباً كثيرة' : 'The program helped me understand public policy and advocacy. I became more confident in my research and writing. The program recommendations opened many doors for me',
                company: ar ? 'باحثة سياسات' : 'Policy Researcher',
              },
            ].map((testimonial, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '36px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ fontSize: '20px', color: '#d4af37' }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: '#e8e4db', fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>
                    {testimonial.name}
                  </p>
                  <p style={{ fontSize: '14px', color: '#d4af37', margin: 0 }}>
                    {testimonial.role}
                  </p>
                  <p style={{ fontSize: '13px', color: '#9fa5b0', margin: '8px 0 0 0' }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                q: ar ? 'هل يمكن للطلاب الدراسيين التقديم؟' : 'Can current students apply?',
                a: ar ? 'نعم، نرحب بطلاب الجامعات في السنة الأخيرة. يجب أن تتوفر لديك مرونة في جدولك الدراسي' : 'Yes, we welcome final year university students. You need flexibility in your academic schedule',
              },
              {
                q: ar ? 'هل التدريب الداخلي مدفوع الأجر؟' : 'Is the internship paid?',
                a: ar ? 'نعم، نقدم مكافآت شهرية تتراوح بين 400-550 دولار أمريكي حسب البرنامج والمستوى' : 'Yes, we offer monthly stipends ranging from $400-550 USD depending on program and level',
              },
              {
                q: ar ? 'ما هي متطلبات اللغة؟' : 'What are the language requirements?',
                a: ar ? 'الطلاقة باللغة الإنجليزية ضرورية. اللغة العربية مفيدة لكن ليست مطلوبة' : 'Fluency in English is necessary. Arabic is beneficial but not required',
              },
              {
                q: ar ? 'هل هناك فرص للعمل الميداني؟' : 'Are there field work opportunities?',
                a: ar ? 'نعم، برنامج الاستجابة للأزمات والعديد من البرامج الأخرى تتضمن عمل ميداني في مناطق مختلفة' : 'Yes, our Crisis Response program and several others include field work in various locations',
              },
              {
                q: ar ? 'هل أحتاج خبرة سابقة؟' : 'Do I need prior experience?',
                a: ar ? 'لا، نرحب بالمتخصصين من جميع المستويات. سنوفر كل التدريب الضروري وإرشاد من المتخصصين' : 'No, we welcome professionals at all levels. We provide necessary training and expert mentoring',
              },
              {
                q: ar ? 'هل هناك فرص لمتابعة العمل بعد انتهاء التدريب؟' : 'Are there job opportunities after the internship?',
                a: ar ? 'نعم، بناء على الأداء المتميز قد تتاح فرص عمل دائم مع الهيئة أو نوصيات قوية لجهات أخرى' : 'Yes, based on excellent performance, there may be permanent job opportunities or strong referrals',
              },
              {
                q: ar ? 'كيف سيتم تقييم أدائي؟' : 'How will my performance be evaluated?',
                a: ar ? 'التقييم مستمر من خلال آليات منتظمة مع مراجعات شهرية وتقارير نصف سنوية' : 'Continuous evaluation through regular mechanisms with monthly reviews and semi-annual reports',
              },
              {
                q: ar ? 'هل سأحصل على شهادة عند الانتهاء؟' : 'Will I get a certificate upon completion?',
                a: ar ? 'نعم، ستحصل على شهادة معترف بها من الهيئة وخطاب توصية احترافي من مسؤول البرنامج' : 'Yes, you\'ll receive a recognized certificate from JHCO and a professional recommendation letter',
              },
            ].map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(10,20,40,0.08)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#6b6b6b', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" style={{ background: 'linear-gradient(135deg, #a8312f 0%, #8b2825 100%)', padding: '80px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '300', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'جاهز لبدء رحلتك المهنية؟' : 'Ready to Launch Your Career?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', lineHeight: '1.8', color: '#f0e8df' }}>
            {ar ? 'تقدم الآن للحصول على فرصة تدريب لا تُنسى وطور نفسك مع الهيئة الخيرية الأردنية الهاشمية' : 'Apply now for an unforgettable internship experience and develop yourself with JHCO'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link href={`${base}/careers/internships#apply`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
              {ar ? 'ابدأ التقديم' : 'Start Application'}
            </Link>
            <Link href={`${base}/contact`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'تواصل معنا' : 'Get in Touch'}
            </Link>
          </div>

          <p style={{ fontSize: '14px', color: '#d4af37', margin: 0 }}>
            {ar ? 'أسئلة؟ تواصل معنا في: careers@jhco.org' : 'Questions? Reach us at: careers@jhco.org'}
          </p>
        </div>
      </section>
    </>
  );
}
