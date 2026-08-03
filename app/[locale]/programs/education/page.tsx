import { getDictionary, type Locale } from '@/lib/i18n';

export default async function EducationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'برنامج التعليم' : 'Education Program'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '0', lineHeight: '1.6' }}>
            {ar ? 'تحويل الحياة من خلال التعليم الجودة والفرص المتساوية' : 'Transforming Lives Through Quality Education'}
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
                {ar ? 'مهمتنا التعليمية' : 'Our Education Mission'}
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '24px' }}>
                {ar
                  ? 'التعليم هو أساس التنمية المستدامة وتحويل الحياة الشخصية. يسعى برنامج التعليم بجمعية جنة الحسين إلى كسر دورة الفقر من خلال توفير التعليم الجودة والمتاح للأطفال والشباب المحرومين في جميع أنحاء المنطقة.'
                  : 'Education is the foundation of sustainable development and personal transformation. JHCO\'s education program is dedicated to breaking the cycle of poverty through accessible, quality education for underprivileged children and youth across multiple regions.'
                }
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#0a1428', fontWeight: '600' }}>
                {ar
                  ? '✓ كل طفل يستحق فرصة التعلم والنمو والنجاح'
                  : '✓ Every child deserves the opportunity to learn, grow, and succeed'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '60px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تأثيرنا التعليمي' : 'Our Educational Impact'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { number: ar ? '٨٬٥٠٠+' : '8,500+', label: ar ? 'طالب مدعوم' : 'Students Supported' },
              { number: ar ? '١٢٠+' : '120+', label: ar ? 'مدرسة' : 'Schools Reached' },
              { number: ar ? '٣٥٠+' : '350+', label: ar ? 'معلم مدرب' : 'Educators Trained' },
              { number: ar ? '٥٬٢٠٠+' : '5,200+', label: ar ? 'منحة دراسية' : 'Scholarships Awarded' },
            ].map((stat, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '40px 32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
                <div style={{ fontSize: '48px', fontWeight: '600', color: '#a8312f', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '16px', color: '#3d3d3d', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '60px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'مبادراتنا التعليمية' : 'Our Education Initiatives'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              {
                icon: '🎓',
                title: ar ? 'برنامج المنح الدراسية' : 'Scholarship Program',
                description: ar
                  ? 'دعم مالي يمكن الطلاب المستحقين من مواصلة تعليمهم على جميع المستويات'
                  : 'Financial support enabling deserving students to continue their education at all levels',
              },
              {
                icon: '📚',
                title: ar ? 'مبادرة المواد التعليمية' : 'Learning Materials Initiative',
                description: ar
                  ? 'توفير الكتب المدرسية والموارد التعليمية للمدارس المحرومة'
                  : 'Providing quality textbooks and educational resources to underserved schools',
              },
              {
                icon: '👨‍🏫',
                title: ar ? 'تطوير المعلمين' : 'Teacher Development',
                description: ar
                  ? 'برامج تدريبية شاملة لتحسين مهارات وكفاءات المعلمين'
                  : 'Comprehensive training programs to enhance educator skills and competencies',
              },
              {
                icon: '🔬',
                title: ar ? 'برنامج المهارات' : 'Skills Development',
                description: ar
                  ? 'تدريب على المهارات العملية والتقنية لتحضير الشباب للمستقبل'
                  : 'Practical and technical skills training to prepare youth for future opportunities',
              },
            ].map((program, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', border: '1px solid #e8e4db', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                  {program.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {program.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#3d3d3d', margin: '0' }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'استثمر في المستقبل' : 'Invest in the Future'}
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }}>
            {ar
              ? 'دعم برنامج التعليم يعني تغيير حياة الآلاف من الطلاب المحرومين'
              : 'Supporting our education program means changing the lives of thousands of underprivileged students'}
          </p>
          <button
            style={{
              padding: '14px 36px',
              backgroundColor: '#d4af37',
              color: '#0a1428',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              marginRight: '16px',
              marginBottom: '12px',
            }}
          >
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </button>
          <button
            style={{
              padding: '14px 36px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid #d4af37',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '12px',
            }}
          >
            {ar ? 'تطوع معنا' : 'Volunteer With Us'}
          </button>
        </div>
      </section>
    </>
  );
}
