'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Testimonials',
    heroTitle: 'Voices of Change',
    heroSubtitle: 'Direct testimonies from people whose lives have been transformed by JHCO programs',
    testimonials: [
      {
        name: 'Amina Hassan',
        role: 'Education Program Beneficiary',
        location: 'Sudan',
        quote: 'JHCO gave me the opportunity to learn to read and write. Now I teach my children and earn income through literacy training in my village. I am proud and independent.',
        image: 'A',
      },
      {
        name: 'Ahmed Mohammed',
        role: 'Livelihood Program Graduate',
        location: 'Yemen',
        quote: 'The microfinance and business training transformed my life. I now run a successful business and provide for my family. JHCO believed in me when no one else did.',
        image: 'A',
      },
      {
        name: 'Layla Ibrahim',
        role: 'Healthcare Beneficiary',
        location: 'Palestine',
        quote: 'When I was pregnant and sick, JHCO\'s mobile clinic saved my life and my baby\'s life. We survived because of their compassionate care and medical expertise.',
        image: 'L',
      },
      {
        name: 'Muhammad Ali',
        role: 'Emergency Assistance Recipient',
        location: 'Syria',
        quote: 'When our home was destroyed in conflict, JHCO provided shelter and food for my family. Their humanity gave us hope when we had nothing but despair.',
        image: 'M',
      },
      {
        name: 'Mariam El-Rashid',
        role: 'Women\'s Leadership Program',
        location: 'Egypt',
        quote: 'JHCO empowered me to become a community leader. Now I mentor 20 other women, and we\'ve established a cooperative that supports 50 families.',
        image: 'M',
      },
      {
        name: 'Khalid Al-Mansouri',
        role: 'WASH Program Beneficiary',
        location: 'Somalia',
        quote: 'Before JHCO built the water well, our children walked 8 hours daily for water. Now we have clean water at home, and health has improved dramatically.',
        image: 'K',
      },
    ],
  },
  ar: {
    title: 'الشهادات',
    heroTitle: 'أصوات التغيير',
    heroSubtitle: 'شهادات مباشرة من الأشخاص الذين تحولت حياتهم من خلال برامج الهيئة',
    testimonials: [
      {
        name: 'أمينة حسن',
        role: 'مستفيدة من برنامج التعليم',
        location: 'السودان',
        quote: 'أعطتني الهيئة فرصة تعلم القراءة والكتابة. الآن أعلم أطفالي وأكسب دخلاً من خلال تدريب محو الأمية في قريتي. أنا فخورة ومستقلة.',
        image: 'A',
      },
      {
        name: 'أحمد محمد',
        role: 'خريج برنامج سبل العيش',
        location: 'اليمن',
        quote: 'غيّر التدريب المالي والتدريب على الأعمال حياتي. الآن أدير عملاً ناجحاً وأوفر لأسرتي. آمنت الهيئة بي عندما لم يؤمن بي أحد آخر.',
        image: 'A',
      },
      {
        name: 'ليلى إبراهيم',
        role: 'مستفيدة من الرعاية الصحية',
        location: 'فلسطين',
        quote: 'عندما كنت حاملاً ومريضة، أنقذتنا عيادة الهيئة المتنقلة وأنقذت حياة طفلي. نجونا بفضل رعايتهم الإنسانية وخبراتهم الطبية.',
        image: 'L',
      },
      {
        name: 'محمد علي',
        role: 'مستقبل مساعدات طارئة',
        location: 'سوريا',
        quote: 'عندما دمّر منزلنا، قدمت الهيئة مأوى وطعام لأسرتي. أعطتنا إنسانيتهم الأمل عندما لم نكن نملك سوى اليأس.',
        image: 'M',
      },
      {
        name: 'مريم الرشيد',
        role: 'برنامج القيادة النسائية',
        location: 'مصر',
        quote: 'مكنتني الهيئة من أن أصبح قائدة مجتمعية. الآن أرشد 20 امرأة أخرى، وأنشأنا تعاونية تدعم 50 أسرة.',
        image: 'M',
      },
      {
        name: 'خالد المنصوري',
        role: 'مستفيد من برنامج المياه والصرف',
        location: 'الصومال',
        quote: 'قبل أن تبني الهيئة البئر، كان أطفالنا يسيرون 8 ساعات يومياً للحصول على ماء. الآن لدينا ماء نظيف في البيت، وتحسنت الصحة بشكل كبير.',
        image: 'K',
      },
    ],
  },
};

export default function TestimonialsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.hopeTeal})`,
        padding: '80px 32px',
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
            Beneficiary Voices
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

      {/* Testimonials Grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
          }}>
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.border}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                {/* Quote Mark */}
                <p style={{
                  fontSize: '64px',
                  color: royalColors.warmGold,
                  opacity: 0.3,
                  marginBottom: '-20px',
                  lineHeight: '1',
                  margin: '0 0 -20px 0',
                  textAlign: ar ? 'left' : 'right',
                }}>
                  &quot;
                </p>

                {/* Testimonial Quote */}
                <p style={{
                  fontSize: '17px',
                  color: royalColors.textDark,
                  lineHeight: '1.8',
                  marginBottom: '28px',
                  fontStyle: 'italic',
                  margin: '-20px 0 28px 0',
                }}>
                  {testimonial.quote}
                </p>

                <div style={{
                  height: '2px',
                  backgroundColor: royalColors.warmGold,
                  marginBottom: '24px',
                  width: '60px',
                  marginLeft: ar ? 'auto' : 0,
                }} />

                {/* Author Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexDirection: ar ? 'row-reverse' : 'row',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: royalColors.warmGold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: royalColors.deepNavy,
                    flexShrink: 0,
                  }}>
                    {testimonial.image}
                  </div>
                  <div style={{ textAlign: ar ? 'right' : 'left' }}>
                    <p style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: royalColors.deepNavy,
                      marginBottom: '4px',
                      margin: 0,
                    }}>
                      {testimonial.name}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b6b6b',
                      fontWeight: '600',
                      marginBottom: '2px',
                      margin: '4px 0 2px 0',
                    }}>
                      {testimonial.role}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.warmGold,
                      fontWeight: '600',
                      margin: 0,
                    }}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
