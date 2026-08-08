import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import ImpactCounter from '@/components/ImpactCounter';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('volunteer', locale);
}

export default async function VolunteerPage({
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
            {ar ? 'انضم إلى حركتنا' : 'JOIN OUR MOVEMENT'}
          </p>

          <h1 style={{ fontSize: '72px', fontWeight: '300', margin: '0 0 32px 0', fontFamily: 'Georgia, serif', lineHeight: '1.1' }}>
            {ar ? 'غيّر حياة الملايين' : 'Transform Lives Worldwide'}
          </h1>

          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '48px', color: '#e8e4db', maxWidth: '700px', margin: '0 auto 48px' }}>
            {ar ? 'كن جزءاً من فريق عالمي مكرس لإحداث فرق حقيقي في المجتمعات الضعيفة حول العالم' : 'Be part of a global team dedicated to making a real difference in vulnerable communities worldwide'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/get-involved/volunteer`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'ابدأ التطوع' : 'Start Volunteering'}
            </Link>
            <Link href={`${base}/volunteer#opportunities`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'استكشف الفرص' : 'Explore Opportunities'}
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تأثير المتطوعين' : 'The Power of Volunteers'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '600px', margin: '0 auto 64px' }}>
            {ar ? 'ساهم آلاف المتطوعين في تحقيق نتائج استثنائية' : 'Thousands of volunteers have contributed to extraordinary outcomes'}
          </p>

          <ImpactCounter
            stats={[
              { value: '12500+', label: 'Active Volunteers', labelAr: 'متطوع نشط', icon: '👥' },
              { value: '150+', label: 'Countries', labelAr: 'دولة', icon: '🌍' },
              { value: '2M+', label: 'Hours Volunteered', labelAr: 'ساعة عمل', icon: '⏱️' },
              { value: '5M+', label: 'Lives Impacted', labelAr: 'شخص متأثر', icon: '❤️' },
            ]}
            locale={locale}
          />
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section id="opportunities" style={{ backgroundColor: 'white', padding: '80px 32px', borderTop: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '16px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'أنواع فرص التطوع' : 'Types of Volunteer Opportunities'}
          </h2>
          <p style={{ fontSize: '18px', color: '#6b6b6b', textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
            {ar ? 'لدينا فرص متنوعة تناسب المهارات والخبرات المختلفة' : 'We have diverse opportunities to match various skills and experience levels'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {[
              {
                icon: '🌍',
                title: ar ? 'التطوع الميداني' : 'Field Volunteering',
                desc: ar ? 'اعمل مباشرة مع المستفيدين في الميدان وقدم المساعدة والدعم المباشر' : 'Work directly with beneficiaries in the field providing direct assistance and support',
                features: ar ? ['تجارب مباشرة', 'تأثير فوري', 'مهارات عملية'] : ['Direct experience', 'Immediate impact', 'Hands-on skills'],
              },
              {
                icon: '💻',
                title: ar ? 'التطوع عن بعد' : 'Remote Volunteering',
                desc: ar ? 'ساهم من منزلك في مشاريع مهمة دون قيود جغرافية' : 'Contribute to meaningful projects from home without geographical constraints',
                features: ar ? ['مرونة كاملة', 'توازن العمل', 'لا متطلبات سفر'] : ['Full flexibility', 'Work-life balance', 'No travel needed'],
              },
              {
                icon: '🎯',
                title: ar ? 'التطوع المتخصص' : 'Specialized Volunteering',
                desc: ar ? 'استخدم مهاراتك المتخصصة - التدريس، الطب، الهندسة، المحاسبة وغيرها' : 'Use your specialized skills - teaching, medicine, engineering, accounting and more',
                features: ar ? ['خبرات احترافية', 'مشاريع محددة', 'تأثير عميق'] : ['Professional expertise', 'Specific projects', 'Deep impact'],
              },
              {
                icon: '📚',
                title: ar ? 'التدريب والتعليم' : 'Training & Education',
                desc: ar ? 'ادرب المجتمعات على مهارات جديدة وعزز قدراتهم الذاتية' : 'Train communities in new skills and enhance their self-reliance',
                features: ar ? ['نقل المعرفة', 'تمكين المجتمع', 'بناء القدرات'] : ['Knowledge transfer', 'Community empowerment', 'Capacity building'],
              },
              {
                icon: '🤝',
                title: ar ? 'دعم الفريق' : 'Team Support',
                desc: ar ? 'ساهم في العمليات الإدارية والدعم اللوجستي للمشاريع' : 'Contribute to administrative and logistical support for projects',
                features: ar ? ['عمل فريقي', 'تنظيمي', 'عملياتي'] : ['Teamwork', 'Organizational', 'Operational'],
              },
              {
                icon: '💡',
                title: ar ? 'الاستشارات' : 'Consulting',
                desc: ar ? 'قدم استشارات في مجال تخصصك لمساعدة منظمتنا على النمو' : 'Provide consulting in your field of expertise to help our organization grow',
                features: ar ? ['رؤية استراتيجية', 'تطوير منظمات', 'قيادة فكرية'] : ['Strategic vision', 'Org development', 'Thought leadership'],
              },
            ].map((opp, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9f7f4', padding: '48px 32px', borderRadius: '8px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', border: '1px solid #e8e4db' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{opp.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                  {opp.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#6b6b6b', marginBottom: '24px', flex: 1 }}>
                  {opp.desc}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {opp.features.map((feature, fidx) => (
                    <span key={fidx} style={{ fontSize: '13px', backgroundColor: 'white', color: '#0a1428', padding: '6px 12px', borderRadius: '20px', fontWeight: '600' }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href={`${base}/get-involved/volunteer`} style={{ display: 'inline-block', padding: '16px 48px', backgroundColor: '#0a1428', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
              {ar ? 'استكشف جميع الفرص' : 'Explore All Opportunities'}
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Process */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'عملية التطوع' : 'Our Volunteer Process'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              {
                step: '01',
                title: ar ? 'الطلب' : 'Apply',
                desc: ar ? 'قدم طلبك عبر نموذجنا البسيط' : 'Submit your application through our simple form',
              },
              {
                step: '02',
                title: ar ? 'المراجعة' : 'Review',
                desc: ar ? 'سنراجع طلبك ونقيم تطابقك مع فرصنا' : 'We review and assess your fit with our opportunities',
              },
              {
                step: '03',
                title: ar ? 'المقابلة' : 'Interview',
                desc: ar ? 'حوار سريع لفهم أهدافك ومهاراتك' : 'Quick conversation to understand your goals and skills',
              },
              {
                step: '04',
                title: ar ? 'التوجيه' : 'Orientation',
                desc: ar ? 'تدريب تمهيدي وتهيئة لدورك' : 'Training and orientation for your role',
              },
              {
                step: '05',
                title: ar ? 'التعيين' : 'Assignment',
                desc: ar ? 'ابدأ عملك كمتطوع في مشروعك' : 'Start your work as a volunteer',
              },
              {
                step: '06',
                title: ar ? 'الدعم المستمر' : 'Ongoing Support',
                desc: ar ? 'دعم كامل وتطوير مهارات مستمر' : 'Full support and continuous development',
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

      {/* Volunteer Requirements */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#0a1428', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'متطلبات التطوع' : 'Volunteer Requirements'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#f9f7f4', padding: '48px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #d4af37' }}>
                {ar ? 'المتطلبات الأساسية' : 'Basic Requirements'}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  ar ? '18 سنة فأكثر' : '18 years or older',
                  ar ? 'اهتمام حقيقي بالعمل الإنساني' : 'Genuine interest in humanitarian work',
                  ar ? 'الالتزام بقيمنا ومبادئنا' : 'Commitment to our values and principles',
                  ar ? 'القدرة على الالتزام بالمتطلبات الزمنية' : 'Ability to commit to time requirements',
                  ar ? 'تواصل فعال وروح الفريق' : 'Effective communication and teamwork',
                  ar ? 'المرونة والاستعداد للتعلم' : 'Flexibility and willingness to learn',
                ].map((req, idx) => (
                  <li key={idx} style={{ fontSize: '16px', marginBottom: '12px', color: '#3d3d3d', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#d4af37', fontWeight: 'bold' }}>✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: '#f9f7f4', padding: '48px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#0a1428', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #d4af37' }}>
                {ar ? 'متطلبات إضافية' : 'Additional Requirements'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#6b6b6b', marginBottom: '24px' }}>
                {ar ? 'قد تختلف المتطلبات حسب نوع التطوع:' : 'Requirements may vary depending on the volunteer role:'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  ar ? 'فحص صحي أو فحص خلفية' : 'Health screening or background check',
                  ar ? 'تدريب محدد أو شهادات' : 'Specific training or certifications',
                  ar ? 'مهارات لغوية معينة' : 'Specific language skills',
                  ar ? 'خبرة سابقة ذات صلة' : 'Relevant prior experience',
                  ar ? 'توفر لفترة محددة' : 'Availability for specific period',
                  ar ? 'القدرة على السفر (للفرص الميدانية)' : 'Travel ability (for field opportunities)',
                ].map((req, idx) => (
                  <li key={idx} style={{ fontSize: '16px', marginBottom: '12px', color: '#3d3d3d', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#d4af37', fontWeight: 'bold' }}>•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)', padding: '80px 32px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '300', marginBottom: '64px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'فوائد التطوع' : 'Benefits of Volunteering'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '🌱',
                title: ar ? 'النمو الشخصي' : 'Personal Growth',
                desc: ar ? 'تطور مهاراتك واكتشف طاقاتك الحقيقية' : 'Develop skills and discover your true potential',
              },
              {
                icon: '🌐',
                title: ar ? 'شبكة عالمية' : 'Global Network',
                desc: ar ? 'تواصل مع متطوعين من حول العالم' : 'Connect with volunteers from around the world',
              },
              {
                icon: '💼',
                title: ar ? 'خبرة عملية' : 'Professional Experience',
                desc: ar ? 'اكتسب خبرة عملية قيمة للسيرة الذاتية' : 'Gain valuable experience for your resume',
              },
              {
                icon: '❤️',
                title: ar ? 'تأثير حقيقي' : 'Real Impact',
                desc: ar ? 'غيّر حياة الآلاف والملايين من الأشخاص' : 'Change the lives of thousands of people',
              },
              {
                icon: '🏆',
                title: ar ? 'الإنجاز' : 'Fulfillment',
                desc: ar ? 'شعور عميق بالإنجاز والمعنى' : 'Deep sense of accomplishment and purpose',
              },
              {
                icon: '📚',
                title: ar ? 'التطوير المستمر' : 'Continuous Learning',
                desc: ar ? 'فرص تطوير وتدريب مستمرة' : 'Ongoing development and training opportunities',
              },
            ].map((benefit, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '36px 32px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#d4af37' }}>
                  {benefit.desc}
                </p>
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
                q: ar ? 'ما المدة المطلوبة للتطوع؟' : 'How long do I need to volunteer?',
                a: ar ? 'تختلف المدة حسب نوع الفرصة. نقدم فرص قصيرة الأجل (أسابيع) وطويلة الأجل (أشهر)' : 'Duration varies by opportunity type. We offer short-term (weeks) and long-term (months) options',
              },
              {
                q: ar ? 'هل أحتاج إلى خبرة سابقة؟' : 'Do I need prior experience?',
                a: ar ? 'لا، نرحب بالمتطوعين من جميع مستويات الخبرة. سنوفر كل التدريب اللازم' : 'No, we welcome volunteers of all experience levels. We provide all necessary training',
              },
              {
                q: ar ? 'هل هناك تكاليف للتطوع؟' : 'Is there a cost to volunteer?',
                a: ar ? 'التطوع مجاني تماماً. قد تكون هناك تكاليف سفر للفرص الميدانية حسب الاتفاق' : 'Volunteering is completely free. Travel costs for field opportunities may vary based on agreement',
              },
              {
                q: ar ? 'كيف يمكنني التقدم للتطوع؟' : 'How do I apply to volunteer?',
                a: ar ? 'ما عليك سوى ملء نموذج الطلب على موقعنا واختيار الفرصة التي تناسبك' : 'Simply fill out our application form on the website and select an opportunity that matches your interests',
              },
              {
                q: ar ? 'ماذا إذا لم أستطع التطوع بنفسي؟' : 'What if I can\'t volunteer in person?',
                a: ar ? 'لدينا فرص تطوع عن بعد في مختلف التخصصات. يمكنك المساهمة من أي مكان' : 'We have remote volunteering opportunities across various fields. You can contribute from anywhere',
              },
              {
                q: ar ? 'هل ستقدمون شهادات أو توصيات؟' : 'Will you provide certificates or references?',
                a: ar ? 'نعم، نقدم شهادات تطوع وتوصيات احترافية عند انتهاء خدمتك' : 'Yes, we provide volunteer certificates and professional references upon completion',
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
      <section style={{ background: 'linear-gradient(135deg, #a8312f 0%, #8b2825 100%)', padding: '80px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '300', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'جاهز لإحداث فرق؟' : 'Ready to Make a Difference?'}
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', lineHeight: '1.8', color: '#f0e8df' }}>
            {ar ? 'انضم إلى آلاف المتطوعين حول العالم الذين يغيرون الحياة يومياً. ابدأ رحلتك الآن' : 'Join thousands of volunteers worldwide who are changing lives every day. Start your journey today'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link href={`${base}/get-involved/volunteer`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s' }}>
              {ar ? 'ابدأ الآن' : 'Apply Now'}
            </Link>
            <Link href={`${base}/contact`} style={{ display: 'inline-block', padding: '18px 48px', backgroundColor: 'transparent', color: '#d4af37', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '16px', transition: 'all 0.3s', border: '2px solid #d4af37' }}>
              {ar ? 'تواصل معنا' : 'Get in Touch'}
            </Link>
          </div>

          <p style={{ fontSize: '14px', color: '#d4af37', margin: 0 }}>
            {ar ? 'أسئلة؟ تواصل معنا في: volunteers@jhco.org' : 'Questions? Reach us at: volunteers@jhco.org'}
          </p>
        </div>
      </section>
    </>
  );
}
