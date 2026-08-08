import { getDictionary, type Locale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('faq', locale);
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  const faqs = [
    {
      q: ar ? 'من هي الهيئة الخيرية الأردنية الهاشمية؟' : 'Who is JHCO?',
      a: ar ? 'الهيئة الخيرية الأردنية الهاشمية هي منظمة إنسانية مستقلة تعمل تحت الرعاية الملكية السامية منذ عام 1990 لتقديم المساعدات الإنسانية والدعم التنموي.' : 'JHCO is an independent humanitarian organization operating under royal patronage since 1990, providing humanitarian aid and development support.'
    },
    {
      q: ar ? 'كم دول تعمل فيها الهيئة؟' : 'How many countries does JHCO operate in?',
      a: ar ? 'تعمل الهيئة في أكثر من 30 دولة حول العالم، مع التركيز على المناطق الأكثر احتياجاً.' : 'JHCO operates in over 30 countries worldwide, focusing on the most vulnerable regions.'
    },
    {
      q: ar ? 'كيف يمكنني التبرع؟' : 'How can I donate?',
      a: ar ? 'يمكنك التبرع من خلال موقعنا الإلكتروني، أو بتحويل بنكي مباشر، أو تبرعات شهرية منتظمة. زيارة صفحة التبرع للمزيد من التفاصيل.' : 'You can donate through our website, direct bank transfer, or set up monthly recurring donations. Visit our donation page for details.'
    },
    {
      q: ar ? 'هل تبرعاتي معفاة من الضرائب؟' : 'Are donations tax-deductible?',
      a: ar ? 'نعم، الهيئة منظمة خيرية مسجلة وتبرعاتك قد تكون معفاة من الضرائب حسب قوانين بلدك. احتفظ برسالة التبرع الخاصة بك.' : 'Yes, JHCO is a registered charity and your donations may be tax-deductible depending on your country\'s laws. Keep your donation receipt.'
    },
    {
      q: ar ? 'كيف يتم استخدام التبرعات؟' : 'How are donations used?',
      a: ar ? 'نستخدم 90% من التبرعات مباشرة للبرامج الإنسانية و10% للمصاريف الإدارية. ننشر تقارير مفصلة عن استخدام الأموال.' : 'We use 90% of donations directly for humanitarian programs and 10% for administrative costs. We publish detailed reports on fund usage.'
    },
    {
      q: ar ? 'كيف أصبح متطوعاً؟' : 'How can I become a volunteer?',
      a: ar ? 'يمكنك التقدم بطلب من خلال صفحة التطوع. نقبل متطوعين من جميع الخلفيات والمستويات المهارة.' : 'You can apply through our volunteering page. We accept volunteers from all backgrounds and skill levels.'
    },
    {
      q: ar ? 'هل يمكن التطوع بدون خبرة سابقة؟' : 'Can I volunteer without prior experience?',
      a: ar ? 'نعم! نوفر التدريب اللازم لجميع المتطوعين. ما نحتاجه هو الاهتمام الحقيقي والرغبة في المساهمة.' : 'Yes! We provide training for all volunteers. What we need is genuine interest and willingness to help.'
    },
    {
      q: ar ? 'ما هي قيم الهيئة؟' : 'What are JHCO\'s values?',
      a: ar ? 'قيمنا الأساسية هي الإنسانية والحياد والشفافية والتميز. نحن ملتزمون باحترام الكرامة الإنسانية في كل ما نقوم به.' : 'Our core values are Humanity, Impartiality, Transparency, and Excellence. We are committed to respecting human dignity in everything we do.'
    },
    {
      q: ar ? 'كيف يمكن الشراكات مع الهيئة؟' : 'How can organizations partner with JHCO?',
      a: ar ? 'نرحب بالشراكات مع المنظمات الحكومية والدولية والخاصة. التواصل على partner@jhco.org للحديث عن فرص الشراكة.' : 'We welcome partnerships with government, international, and private organizations. Contact partner@jhco.org to discuss partnership opportunities.'
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 0 }}>
            {ar ? 'إجابات على الأسئلة الأكثر شيوعاً عن الهيئة والتبرعات والتطوع' : 'Answers to frequently asked questions about JHCO, donations, and volunteering'}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {faqs.map((faq, idx) => (
              <details key={idx} style={{ borderBottom: '1px solid #e8e4db', padding: '24px 0' }}>
                <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#0a1428', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
                  {faq.q}
                  <span style={{ fontSize: '20px', marginLeft: '16px', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '16px', color: '#3d3d3d', lineHeight: '1.8', marginTop: '16px', marginBottom: '0px' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ backgroundColor: '#0a1428', padding: '64px 32px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'لم تجد إجابتك؟' : 'Didn\'t find your answer?'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: '#d4af37' }}>
            {ar ? 'تواصل معنا مباشرة وسنكون سعداء بمساعدتك' : 'Contact us directly and we\'ll be happy to help'}
          </p>
          <a href="/contact" style={{ display: 'inline-block', padding: '12px 32px', backgroundColor: '#d4af37', color: '#0a1428', textDecoration: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '14px' }}>
            {ar ? 'اتصل بنا' : 'Contact Us'}
          </a>
        </div>
      </section>
    </>
  );
}
