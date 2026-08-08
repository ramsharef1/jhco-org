import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('give/workplace-giving', locale);
}

export default async function WorkplaceGivingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // How it works steps
  const workplaceSteps = [
    {
      number: '1',
      title: ar ? 'اختر المبلغ' : 'Choose Your Amount',
      desc: ar ? 'حدد المبلغ الذي تريد التبرع به من راتبك' : 'Select the amount you want to donate from your paycheck',
      icon: '💰'
    },
    {
      number: '2',
      title: ar ? 'الموارد البشرية تتولى' : 'HR Sets It Up',
      desc: ar ? 'قسم الموارد البشرية ينظم الخصم من الراتب' : 'Your HR department arranges the payroll deduction',
      icon: '📋'
    },
    {
      number: '3',
      title: ar ? 'تحويل تلقائي' : 'Automatic Transfer',
      desc: ar ? 'يتم تحويل المبلغ تلقائياً من كل فترة الدفع' : 'Amount is automatically transferred from each paycheck',
      icon: '🔄'
    },
    {
      number: '4',
      title: ar ? 'رسالة شكر سنوية' : 'Annual Tax Receipt',
      desc: ar ? 'احصل على رسالة معفاة من الضرائب لأغراض الضرائب' : 'Get tax-deductible receipt for annual tax filing',
      icon: '📄'
    },
  ];

  // Matching programs
  const matchingPrograms = [
    {
      name: ar ? 'المطابقة الكاملة 1:1' : '1:1 Full Match',
      desc: ar ? 'الشركة تضاعف كل تبرع تقوم به' : 'Company doubles every dollar you give',
      impact: ar ? 'رصيدك الفعلي: $200 = $400 تأثير' : 'Your $100 becomes $200 impact',
      icon: '🎯'
    },
    {
      name: ar ? 'المطابقة الجزئية 1:2' : '1:2 Partial Match',
      desc: ar ? 'الشركة تضيف 50 سنت لكل دولار' : 'Company adds 50 cents for every dollar',
      impact: ar ? 'رصيدك الفعلي: $100 = $150 تأثير' : 'Your $100 becomes $150 impact',
      icon: '📈'
    },
    {
      name: ar ? 'مطابقة برامج اختيارية' : 'Program-Specific Match',
      desc: ar ? 'تطابق للبرامج المفضلة لديك' : 'Matching for programs your company prioritizes',
      impact: ar ? 'تأثير أقصى للقضايا التي تهم شركتك' : 'Maximum impact where your company cares most',
      icon: '🌟'
    },
  ];

  // Payroll deduction benefits
  const payrollBenefits = [
    {
      icon: '✅',
      title: ar ? 'سهل ومريح' : 'Convenient',
      desc: ar ? 'خصم تلقائي من الراتب - لا داع للتذكر' : 'Automatic deduction - never forget to give'
    },
    {
      icon: '💵',
      title: ar ? 'خفض ضريبي' : 'Tax Advantage',
      desc: ar ? 'معفى من الضرائب قبل احتساب الراتب الإجمالي' : 'Tax-free before income tax calculation'
    },
    {
      icon: '📊',
      title: ar ? 'تتبع سهل' : 'Easy Tracking',
      desc: ar ? 'شاهد إجمالي تبرعاتك السنوية بسهولة' : 'Simple annual reporting and receipts'
    },
    {
      icon: '👥',
      title: ar ? 'قيادة الفريق' : 'Team Leadership',
      desc: ar ? 'شارك في جهود شركتك المجتمعية' : 'Be part of your company\'s giving initiatives'
    },
  ];

  // Campaign ideas
  const campaignIdeas = [
    {
      title: ar ? 'شهر الجود في يناير' : 'Giving January',
      desc: ar ? 'ابدأ السنة بالإحسان والعطاء' : 'Start your year making a difference',
      target: ar ? 'هدف: $5,000 من الموظفين' : 'Goal: $5,000 from employees',
      icon: '🎯',
      color: '#e74c3c'
    },
    {
      title: ar ? 'تحدي الخيرة التنافسي' : 'Team Challenge',
      desc: ar ? 'تنافسية ودية بين الأقسام' : 'Friendly competition between departments',
      target: ar ? 'هدف: أعلى مشاركة في القسم' : 'Goal: Highest participation rate',
      icon: '🏆',
      color: '#e8b923'
    },
    {
      title: ar ? 'مطابقة الموارد البشرية في رمضان' : 'Ramadan Match',
      desc: ar ? 'الشركة تضاعف كل التبرعات خلال رمضان' : 'Company doubles all donations during Ramadan',
      target: ar ? 'هدف: $10,000 بتمويل مضاعف' : 'Goal: $10,000 with doubled giving',
      icon: '🌙',
      color: '#1abc9c'
    },
    {
      title: ar ? 'يوم التطوع الشركة' : 'Company Volunteer Day',
      desc: ar ? 'أعط وقتك وأموالك معاً' : 'Give your time and money together',
      target: ar ? 'هدف: 100 موظف يتطوع' : 'Goal: 100 employees volunteering',
      icon: '🤝',
      color: '#3498db'
    },
    {
      title: ar ? 'تحدي "دولار واحد يومياً"' : 'Dollar-a-Day Challenge',
      desc: ar ? 'تبرع بدولار واحد يومياً (30 دولار شهرياً)' : 'Donate $1/day from paycheck ($30/month)',
      target: ar ? 'هدف: $3,000 من 100 موظف' : 'Goal: $3,000 from 100 employees',
      icon: '💚',
      color: '#9b59b6'
    },
    {
      title: ar ? 'مبادرة الأمومة والطفولة' : 'Maternal & Child Health Drive',
      desc: ar ? 'ركز على رعاية الأمومة والطفولة' : 'Support maternal and child health programs',
      target: ar ? 'هدف: $8,000 في 6 أسابيع' : 'Goal: $8,000 in 6 weeks',
      icon: '👶',
      color: '#cb4335'
    },
  ];

  // Tax benefits
  const taxBenefits = [
    {
      title: ar ? 'خصم ضريبي مباشر' : 'Direct Tax Deduction',
      desc: ar ? 'تبرعاتك معفاة من الضرائب على الفور' : 'Donations are tax-deductible immediately',
      amount: ar ? '100 دولار تبرع = توفير 24 دولار ضريبة (24%)' : '$100 donation = ~$24 tax savings (24%)'
    },
    {
      title: ar ? 'دخل معفى من الضرائب' : 'Pre-Tax Income',
      desc: ar ? 'ينخفض راتبك الخاضع للضريبة' : 'Reduces your taxable income',
      amount: ar ? '500 دولار شهرياً = 6000 دولار سنوياً معفى من الضرائب' : '$500/month = $6,000/year tax-free'
    },
    {
      title: ar ? 'توثيق شامل' : 'Complete Documentation',
      desc: ar ? 'JHCO توفر رسائل ضريبية سنوية' : 'JHCO provides annual tax receipts',
      amount: ar ? 'سهل الإبلاغ عند تقديم الإقرار الضريبي' : 'Easy to report on tax return'
    },
  ];

  // Employee testimonials
  const employeeTestimonials = [
    {
      name: ar ? 'سارة محمود (بنك الأردن)' : 'Sarah Mahmoud (Jordan Bank)',
      role: ar ? 'مديرة التسويق' : 'Marketing Manager',
      quote: ar ? 'كنت أتبرع بشكل عشوائي. الآن مع خصم الراتب، أتبرع بانتظام وأشعر بنقص التكلفة الضريبية! الأفضل من الكل أن شركتي تضاعف تبرعاتي.' : 'I used to donate sporadically. Now with payroll deduction, I give consistently and get a tax break! Plus, my company matches my donations.',
      image: '👩‍💼',
      color: '#1abc9c'
    },
    {
      name: ar ? 'أحمد علي (شركة تقنية)' : 'Ahmed Ali (Tech Company)',
      role: ar ? 'مهندس برمجيات' : 'Software Engineer',
      quote: ar ? 'بدأت بـ 50 دولاراً شهرياً. الآن، من خلال حملة الفريق، توسعت إلى 100 دولار. أشعر أن فريقي يحدث فرقاً حقيقياً معاً.' : 'Started with $50/month. Through our team campaign, I\'m now giving $100. It feels great knowing my whole team is making a difference together.',
      image: '👨‍💻',
      color: '#e8b923'
    },
    {
      name: ar ? 'فاطمة الحسن (مستشفى)' : 'Fatima Hassan (Hospital)',
      role: ar ? 'ممرضة' : 'Nurse',
      quote: ar ? 'من خلال برنامج الخصم من الراتب، أتبرع $25 شهرياً. لقد رأيت بنفسي كيف تساعد JHCO المرضى المحتاجين. إنه مرضٍ.' : 'I donate $25/month through payroll. I\'ve seen firsthand how JHCO helps patients in need. It\'s fulfilling.',
      image: '👩‍⚕️',
      color: '#e74c3c'
    },
    {
      name: ar ? 'محمود خليل (جامعة)' : 'Mahmoud Khalil (University)',
      role: ar ? 'أستاذ' : 'Professor',
      quote: ar ? 'ما أحبه هو أن شركتي تطابق 1:1. تبرعاتي البالغة 100 دولار تصبح 200 دولار! ومع التاريخ الضريبي، أوفر أموالاً أيضاً.' : 'What I love is my company matches dollar-for-dollar. My $100 becomes $200! Plus the tax benefit saves me money too.',
      image: '👨‍🏫',
      color: '#3498db'
    },
  ];

  // Step-by-step guide
  const stepByStepGuide = [
    {
      step: ar ? 'الخطوة 1: تحدث إلى HR' : 'Step 1: Talk to HR',
      title: ar ? 'توصل مع قسم الموارد البشرية' : 'Contact Your HR Department',
      details: ar ? 'اسأل عن برنامج الخصم من الراتب للتبرعات الخيرية. تحقق من الجمعيات المؤهلة (JHCO متأهلة!)' : 'Ask about payroll deduction programs for charitable giving. Confirm JHCO qualifies (it does!).',
      icon: '📞'
    },
    {
      step: ar ? 'الخطوة 2: اختر المبلغ' : 'Step 2: Choose Amount',
      title: ar ? 'حدد مبلغ التبرع الشهري' : 'Decide Your Monthly Amount',
      details: ar ? 'اختر المبلغ الذي تريد خصمه من كل دفعة راتب (مثلاً 25 دولار، 50 دولار، 100 دولار)' : 'Select how much you want deducted per paycheck (e.g., $25, $50, $100).',
      icon: '💵'
    },
    {
      step: ar ? 'الخطوة 3: استكمل النموذج' : 'Step 3: Complete Form',
      title: ar ? 'استكمل نموذج الخصم من الراتب' : 'Fill Out Payroll Deduction Form',
      details: ar ? 'قدم معرّف JHCO (Charity ID) وحسابك المصرفي للحوالات. HR سيقدم لك النموذج.' : 'Provide JHCO\'s charity ID and your banking details. HR will give you the form.',
      icon: '📋'
    },
    {
      step: ar ? 'الخطوة 4: التفعيل' : 'Step 4: Activation',
      title: ar ? 'تفعيل الخصم' : 'Start Your Contributions',
      details: ar ? 'بعد الموافقة، ستبدأ التبرعات من الراتب التالي. استقبل تأكيد من JHCO.' : 'After approval, donations begin from next paycheck. You\'ll receive confirmation from JHCO.',
      icon: '✅'
    },
    {
      step: ar ? 'الخطوة 5: تتبع التأثير' : 'Step 5: Track Impact',
      title: ar ? 'تابع تأثيرك' : 'Monitor Your Impact',
      details: ar ? 'استقبل تقارير شهرية عن كيفية استخدام تبرعاتك. تابع حملات شركتك.' : 'Receive monthly updates on your impact. Track company campaign progress.',
      icon: '📊'
    },
    {
      step: ar ? 'الخطوة 6: الإقرار الضريبي' : 'Step 6: Tax Filing',
      title: ar ? 'احتفظ بسجلات الضرائب' : 'Get Tax Receipts',
      details: ar ? 'في نهاية السنة، ستحصل على رسالة ضريبية من JHCO. احتفظ بها للتقرير الضريبي.' : 'At year-end, get tax receipt from JHCO for your tax return.',
      icon: '📄'
    },
  ];

  // FAQ items
  const faqItems = [
    {
      q: ar ? 'هل يمكنني تغيير المبلغ لاحقاً؟' : 'Can I change the amount later?',
      a: ar ? 'نعم! يمكنك زيادة أو تقليل المبلغ في أي وقت عن طريق التحدث مع HR. يمكنك أيضاً إيقاف الخصم.' : 'Yes! You can increase, decrease, or pause contributions anytime by contacting HR. Complete flexibility.'
    },
    {
      q: ar ? 'هل تبرعات الراتب آمنة وموثوقة؟' : 'Are payroll donations secure?',
      a: ar ? 'تماماً. يتم معالجة جميع التحويلات عبر نظام الراتب الآمن في شركتك ثم إلى حسابات JHCO المصرفية المتحققة.' : 'Completely secure. All transfers go through your company\'s verified payroll system directly to JHCO\'s bank account.'
    },
    {
      q: ar ? 'ماذا لو لم تطابق شركتي التبرعات؟' : 'My company doesn\'t offer matching - should I still participate?',
      a: ar ? 'بالطبع! حتى بدون مطابقة، الخصم من الراتب يوفر المزايا الضريبية والراحة والآثار المنتظمة. كل تبرع مهم.' : 'Absolutely! Even without matching, payroll giving offers tax benefits, convenience, and consistent impact. Every donation matters.'
    },
    {
      q: ar ? 'كيف أعرف أن تبرعاتي تحدث فرقاً؟' : 'How do I know my donations are making a difference?',
      a: ar ? 'ستحصل على تقارير تأثير شهرية من JHCO تظهر بالضبط كيف تساعد أموالك. يمكنك أيضاً زيارة موقعنا للقصص والإحصائيات.' : 'You\'ll receive monthly impact reports from JHCO showing exactly how your money helps. Visit our website for stories and statistics.'
    },
    {
      q: ar ? 'هل توجد حدود قصوى على التبرعات الشهرية؟' : 'Is there a limit on how much I can give?',
      a: ar ? 'الحد الأقصى يعتمد على سياسة شركتك. تحدث مع HR. معظم الشركات تسمح بنسبة معقولة من راتبك.' : 'Limits depend on your company\'s policy. Check with HR. Most companies allow reasonable percentages of your salary.'
    },
    {
      q: ar ? 'هل تبرعاتي معفاة من الضرائب؟' : 'Are my donations tax-deductible?',
      a: ar ? 'نعم! JHCO هي منظمة خيرية مسجلة رسمياً. تبرعاتك معفاة من الضرائب ويمكنك خصمها من راتبك الخاضع للضريبة.' : 'Yes! JHCO is a registered charity. Your donations are tax-deductible and reduce your taxable income.'
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #3498db 0%, #1abc9c 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '400',
            margin: '0 0 24px 0',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            {ar ? '🏢 تبرع من مكان عملك' : '🏢 Give from Your Workplace'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '32px',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            {ar ? 'اجعل التبرع جزءاً من روتينك - مع مطابقة الشركة والمزايا الضريبية.' : 'Make giving part of your paycheck - with company matching and tax benefits.'}
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#3498db',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              {ar ? '↓ ابدأ الآن' : '↓ Get Started'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'اقرأ المزيد' : 'Learn More'}
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '🔄 كيف يعمل التبرع من مكان العمل' : '🔄 How Workplace Giving Works'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {workplaceSteps.map((step, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: '#f5e6d3',
                borderRadius: '12px',
                textAlign: 'center',
                border: `3px solid #3498db`,
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {step.icon}
                </div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#3498db',
                  marginBottom: '12px'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHING PROGRAMS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #3498db'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '💪 برامج مطابقة الشركات' : '💪 Employer Matching Programs'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'تتطابق العديد من الشركات مع تبرعات موظفيها - مما يضاعف تأثيرك!' : 'Many employers match employee donations - doubling your impact!'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {matchingPrograms.map((program, idx) => (
              <div key={idx} style={{
                padding: '40px 32px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: `2px solid #e8b923`,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>
                  {program.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {program.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {program.desc}
                </p>
                <div style={{
                  backgroundColor: '#f5e6d3',
                  padding: '16px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#e8b923'
                }}>
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYROLL DEDUCTION BENEFITS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '💳 مزايا خصم الراتب' : '💳 Payroll Deduction Benefits'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {payrollBenefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: '#f5e6d3',
                borderRadius: '12px',
                textAlign: 'center',
                border: `2px solid #3498db`
              }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN IDEAS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#0a1428'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: 'white',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '🎯 أفكار حملات للمكاتب' : '🎯 Campaign Ideas for Your Office'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#ccc',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'أطلق حملة تبرع في مكان عملك مع هذه الأفكار المجربة' : 'Launch a giving campaign at your workplace with these proven ideas'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {campaignIdeas.map((campaign, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: `3px solid ${campaign.color}`,
                textAlign: 'center',
                transition: 'all 250ms ease'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {campaign.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: campaign.color,
                  marginBottom: '12px'
                }}>
                  {campaign.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#ccc',
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {campaign.desc}
                </p>
                <div style={{
                  backgroundColor: campaign.color,
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {campaign.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM VOLUNTEERING */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '60px 40px',
              textAlign: 'center',
              fontSize: '120px',
              border: '3px solid #1abc9c'
            }}>
              👥
            </div>
            <div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '400',
                color: '#0a1428',
                marginBottom: '24px',
                fontFamily: 'Georgia, serif'
              }}>
                {ar ? '🤝 تطوع الفريق' : '🤝 Team Volunteering'}
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b6b6b',
                lineHeight: '1.8',
                marginBottom: '24px'
              }}>
                {ar ? 'لا تقتصر المساهمة على المال! انضم إلى فريقك في أنشطة التطوع مع JHCO. خذ يوم إجازة من العمل وساعد بشكل مباشر.' : 'It\'s not just about money! Join your team in volunteering with JHCO. Take a company volunteer day and make direct impact.'}
              </p>

              <div style={{
                backgroundColor: 'white',
                padding: '28px',
                borderRadius: '12px',
                border: `2px solid #1abc9c`,
                marginBottom: '28px'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '16px'
                }}>
                  {ar ? 'فرص التطوع الشهرية' : 'Monthly Volunteer Opportunities'}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {[
                    ar ? '• توزيع الطعام في مراكز الإغاثة' : '• Food distribution at relief centers',
                    ar ? '• دروس تعليمية للأطفال المحتاجين' : '• Teaching sessions for underprivileged children',
                    ar ? '• أنشطة صحية وطبية' : '• Health and medical clinics',
                    ar ? '• تنظيف وتجديد المجتمع' : '• Community cleanup projects'
                  ].map((opp, idx) => (
                    <li key={idx} style={{
                      fontSize: '16px',
                      color: '#6b6b6b',
                      marginBottom: '12px',
                      lineHeight: '1.6'
                    }}>
                      {opp}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`${base}/get-involved/volunteer`} style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: '#1abc9c',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 250ms ease'
              }}>
                {ar ? 'اعرف فرص التطوع' : 'Explore Volunteer Opportunities'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE TESTIMONIALS */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        borderTop: '4px solid #3498db'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '💬 شهادات الموظفين' : '💬 Employee Stories'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            {employeeTestimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '32px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${testimonial.color}`,
                transition: 'all 250ms ease'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {testimonial.image}
                </div>
                <blockquote style={{
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: '#6b6b6b',
                  margin: '0 0 20px 0',
                  lineHeight: '1.7',
                  borderLeft: `2px solid ${testimonial.color}`,
                  paddingLeft: '16px'
                }}>
                  {testimonial.quote}
                </blockquote>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: testimonial.color,
                  margin: '0 0 4px 0'
                }}>
                  {testimonial.name}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#95a5a6',
                  margin: '0'
                }}>
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAX BENEFITS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5e6d3'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '💰 المزايا الضريبية' : '💰 Tax Benefits'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {taxBenefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '40px 32px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: `2px solid #e74c3c`
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  marginBottom: '16px',
                  lineHeight: '1.6'
                }}>
                  {benefit.desc}
                </p>
                <div style={{
                  backgroundColor: '#fff4f1',
                  padding: '16px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#e74c3c',
                  borderLeft: '4px solid #e74c3c'
                }}>
                  {benefit.amount}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '48px',
            padding: '32px',
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              margin: '0 0 12px 0'
            }}>
              {ar ? '✅ JHCO منظمة خيرية مسجلة رسمياً' : '✅ JHCO is a Registered Charity'}
            </p>
            <p style={{
              fontSize: '16px',
              margin: '0'
            }}>
              {ar ? 'جميع التبرعات معفاة من الضرائب. احتفظ برسائلك السنوية.' : 'All donations are tax-deductible. Keep your annual receipts.'}
            </p>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP GUIDE */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? '📋 دليل خطوة بخطوة' : '📋 Step-by-Step Guide'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {stepByStepGuide.map((item, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: '#fef9f3',
                borderRadius: '12px',
                border: `2px solid #3498db`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '24px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '18px'
                }}>
                  {idx + 1}
                </div>
                <div style={{ fontSize: '40px', marginBottom: '16px', marginTop: '12px' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5e6d3',
        borderTop: '4px solid #3498db'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {faqItems.map((item, idx) => (
              <details key={idx} style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '2px solid #3498db',
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}>
                <summary style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  cursor: 'pointer'
                }}>
                  {item.q}
                </summary>
                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginTop: '16px',
                  lineHeight: '1.6',
                  margin: '16px 0 0 0'
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #3498db 0%, #1abc9c 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? '🎯 هل أنت جاهز للبدء؟' : '🎯 Ready to Get Started?'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            {ar ? 'تحدث إلى قسم الموارد البشرية اليوم عن خصم الراتب. إنه سهل وآمن ومؤثر.' : 'Talk to your HR department today about payroll deduction. It\'s easy, secure, and impactful.'}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#3498db',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'اتصل بـ HR الآن' : 'Contact Your HR'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'تنزيل نموذج HR' : 'Download HR Form'}
            </button>
          </div>

          <Link href={`${base}/get-involved/donate`} style={{
            color: 'white',
            textDecoration: 'underline',
            fontSize: '16px'
          }}>
            {ar ? 'أو تبرع الآن' : 'Or donate now'}
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{
        padding: '48px 32px',
        backgroundColor: 'white',
        textAlign: 'center',
        borderTop: '2px solid #3498db'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '16px',
            color: '#6b6b6b',
            margin: '0',
            lineHeight: '1.6'
          }}>
            {ar ? '❓ أسئلة؟ اتصل بفريق التطوع لدينا على ' : '❓ Questions? Contact our giving team at '}
            <strong>giving@jhco.org</strong>
            {ar ? ' أو اتصل بنا على 0776 123 456' : ' or call +962 776 123 456'}
          </p>
        </div>
      </section>
    </>
  );
}
