'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Our History',
    heroTitle: 'A Legacy of Compassion',
    heroSubtitle: 'From our founding in 1990 to our global presence today, JHCO has remained dedicated to humanitarian service',
    timeline: [
      {
        year: '1990',
        title: 'Foundation Year',
        description: 'The Jordan Hashemite Charity Organization was founded with a mandate to provide humanitarian assistance and development support across Jordan and the region.',
      },
      {
        year: '1995',
        title: 'Regional Expansion',
        description: 'JHCO expanded its operations beyond Jordan, establishing programs in 5 neighboring countries and beginning international humanitarian work.',
      },
      {
        year: '2000',
        title: 'Royal Patronage Recognition',
        description: 'Officially recognized as the humanitarian arm of the Hashemite Kingdom of Jordan, strengthening our mandate and global presence.',
      },
      {
        year: '2005',
        title: 'Crisis Response Excellence',
        description: 'Established comprehensive crisis response capabilities following major humanitarian emergencies in the region.',
      },
      {
        year: '2010',
        title: 'Global Network',
        description: 'Expanded to 15 countries across the Middle East, North Africa, and Sub-Saharan Africa.',
      },
      {
        year: '2015',
        title: 'Strategic Partnerships',
        description: 'Formed strategic partnerships with major international organizations and UN agencies.',
      },
      {
        year: '2020',
        title: 'Pandemic Response',
        description: 'Led rapid response to COVID-19, providing emergency aid to vulnerable populations across all operational regions.',
      },
      {
        year: '2024',
        title: 'Present Day',
        description: 'Operating in 30+ countries with 2,500+ volunteers and supporting 75,000+ families annually. Recognized globally for humanitarian excellence.',
      },
    ],
  },
  ar: {
    title: 'تاريخنا',
    heroTitle: 'إرث من الرحمة',
    heroSubtitle: 'من تأسيسنا عام 1990 إلى وجودنا العالمي اليوم، ظلت الهيئة الخيرية الأردنية الهاشمية ملتزمة بالخدمة الإنسانية',
    timeline: [
      {
        year: '1990',
        title: 'سنة التأسيس',
        description: 'تأسست الهيئة الخيرية الأردنية الهاشمية بولاية توفير المساعدات الإنسانية والدعم التنموي عبر الأردن والمنطقة.',
      },
      {
        year: '1995',
        title: 'التوسع الإقليمي',
        description: 'توسعت الهيئة في عملياتها خارج الأردن، وأنشأت برامج في 5 دول مجاورة وبدأت العمل الإنساني الدولي.',
      },
      {
        year: '2000',
        title: 'الاعتراف بالرعاية الملكية',
        description: 'تم الاعتراف بالهيئة رسميًا كالذراع الإنساني للمملكة الأردنية الهاشمية، مما عزز ولايتنا وحضورنا العالمي.',
      },
      {
        year: '2005',
        title: 'التميز في الاستجابة للأزمات',
        description: 'أنشأت قدرات شاملة للاستجابة للأزمات في أعقاب حالات طوارئ إنسانية رئيسية في المنطقة.',
      },
      {
        year: '2010',
        title: 'الشبكة العالمية',
        description: 'توسعت إلى 15 دولة عبر الشرق الأوسط وشمال أفريقيا وأفريقيا جنوب الصحراء.',
      },
      {
        year: '2015',
        title: 'الشراكات الاستراتيجية',
        description: 'شكلت شراكات استراتيجية مع منظمات دولية رئيسية ووكالات الأمم المتحدة.',
      },
      {
        year: '2020',
        title: 'الاستجابة للجائحة',
        description: 'قادت الاستجابة السريعة لـ COVID-19، وقدمت المساعدات الطارئة للسكان الضعفاء عبر جميع المناطق التشغيلية.',
      },
      {
        year: '2024',
        title: 'الوقت الحاضر',
        description: 'تعمل في 30+ دولة مع أكثر من 2500 متطوع وتدعم أكثر من 75000 أسرة سنويًا. معترف بها عالميًا لتميزها الإنساني.',
      },
    ],
  },
};

export default function HistoryPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.hopeTeal})`,
        padding: ar ? '80px 32px' : '80px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.warmGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Established 1990
          </p>
          <h1 style={{
            fontSize: '64px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              [ar ? 'right' : 'left']: '30px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: royalColors.warmGold,
            }} />

            {/* Timeline items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {content.timeline.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '48px',
                  [ar ? 'flexDirection' : '']: ar ? 'row-reverse' : undefined,
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: 'absolute',
                      [ar ? 'right' : 'left']: '-22px',
                      top: '14px',
                      width: '12px',
                      height: '12px',
                      backgroundColor: royalColors.warmGold,
                      borderRadius: '50%',
                      border: `3px solid ${royalColors.bgLight}`,
                      boxShadow: `0 0 0 3px ${royalColors.warmGold}`,
                    }} />
                  </div>

                  {/* Timeline content */}
                  <div style={{
                    flex: 1,
                    paddingBottom: '40px',
                    paddingTop: '8px',
                  }}>
                    <div style={{
                      backgroundColor: 'white',
                      padding: '32px',
                      borderRadius: '8px',
                      border: `1px solid ${royalColors.border}`,
                      boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                    }}>
                      <p style={{
                        color: royalColors.warmGold,
                        fontSize: '20px',
                        fontFamily: royalTypography.serif,
                        fontWeight: '600',
                        marginBottom: '8px',
                        margin: 0,
                      }}>
                        {item.year}
                      </p>
                      <h3 style={{
                        fontSize: '24px',
                        fontFamily: royalTypography.serif,
                        color: royalColors.deepNavy,
                        marginBottom: '12px',
                        marginTop: '8px',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: royalColors.textDark,
                        lineHeight: '1.6',
                        margin: 0,
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.hopeTeal})`,
        padding: '64px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            marginBottom: '32px',
          }}>
            Three Decades of <span style={{ color: royalColors.warmGold }}>Impact</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.95,
            marginBottom: '40px',
          }}>
            Since 1990, the Jordan Hashemite Charity Organization has remained committed to delivering humanitarian excellence across the globe. Our growth reflects the trust placed in us by governments, international partners, and the communities we serve.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '48px',
          }}>
            <div style={{ padding: '24px' }}>
              <p style={{
                fontSize: '48px',
                color: royalColors.warmGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
              }}>30+</p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Countries</p>
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{
                fontSize: '48px',
                color: royalColors.warmGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
              }}>2.5K+</p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Volunteers</p>
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{
                fontSize: '48px',
                color: royalColors.warmGold,
                fontFamily: royalTypography.serif,
                marginBottom: '8px',
              }}>75K+</p>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Families Supported</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
