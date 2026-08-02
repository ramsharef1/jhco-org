'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';

const newsletterContent = {
  en: {
    title: 'Newsletter',
    heroTitle: 'Stay Connected',
    heroSubtitle: 'Subscribe to JHCO\'s newsletter for updates on programs, impact stories, and humanitarian work.',
    subscribeSection: 'Subscribe to Our Newsletter',
    subscribeDescription: 'Receive monthly updates about JHCO programs, beneficiary stories, and global impact.',
    archiveSection: 'Newsletter Archive',
    archiveDescription: 'Browse past newsletters to stay informed about our work.',
    emailPlaceholder: 'Enter your email address',
    subscribe: 'Subscribe',
    archives: [
      {
        month: 'July 2024',
        title: 'JHCO Global Impact Report',
        excerpt: 'This month we celebrate our expanded programs across three new countries and the stories of 50,000 beneficiaries.',
      },
      {
        month: 'June 2024',
        title: 'Healthcare Crisis Response',
        excerpt: 'Emergency medical teams deployed to assist in healthcare crises. Learn how your donations save lives.',
      },
      {
        month: 'May 2024',
        title: 'Women Empowerment Special',
        excerpt: 'Spotlight on our women entrepreneurs program: 2,000 women trained in business skills.',
      },
      {
        month: 'April 2024',
        title: 'Education Success Stories',
        excerpt: 'Meet the graduates of our scholarship program and their journey from vulnerability to opportunity.',
      },
      {
        month: 'March 2024',
        title: 'Humanitarian Response Update',
        excerpt: 'Response to natural disasters and conflicts. How we mobilize to help those in urgent need.',
      },
      {
        month: 'February 2024',
        title: 'Community Resilience',
        excerpt: 'Building sustainable livelihoods in five countries. Long-term impact stories from the field.',
      },
      {
        month: 'January 2024',
        title: 'New Year, New Goals',
        excerpt: 'JHCO 2024 strategic priorities and how you can be part of achieving our humanitarian goals.',
      },
      {
        month: 'December 2023',
        title: 'Year in Review: 2023',
        excerpt: 'Celebrating achievements and milestones from 2023. Your generosity made it all possible.',
      },
    ],
  },
  ar: {
    title: 'النشرة الإخبارية',
    heroTitle: 'ابق على اتصال',
    heroSubtitle: 'اشترك في نشرة الهيئة الإخبارية للحصول على تحديثات البرامج وقصص التأثير والعمل الإنساني.',
    subscribeSection: 'اشترك في نشرتنا الإخبارية',
    subscribeDescription: 'تلقي تحديثات شهرية حول برامج الهيئة وقصص المستفيدين والتأثير العالمي.',
    archiveSection: 'أرشيف النشرة الإخبارية',
    archiveDescription: 'تصفح النشرات السابقة للبقاء على اطلاع على عملنا.',
    emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
    subscribe: 'اشترك',
    archives: [
      {
        month: 'يوليو 2024',
        title: 'تقرير التأثير العالمي للهيئة',
        excerpt: 'في هذا الشهر نحتفل بتوسع برامجنا عبر ثلاث دول جديدة وقصص 50,000 مستفيد.',
      },
      {
        month: 'يونيو 2024',
        title: 'استجابة الأزمات الصحية',
        excerpt: 'فرق طبية طارئة منتشرة لمساعدة في أزمات الرعاية الصحية. تعرف على كيفية إنقاذ تبرعاتك للأرواح.',
      },
      {
        month: 'مايو 2024',
        title: 'خاص تمكين المرأة',
        excerpt: 'تركيز على برنامج رائدات الأعمال: 2,000 امرأة تدربن على مهارات الأعمال.',
      },
      {
        month: 'أبريل 2024',
        title: 'قصص نجاح التعليم',
        excerpt: 'تعرف على خريجي برنامج المنح الدراسية ورحلتهم من الضعف إلى الفرصة.',
      },
      {
        month: 'مارس 2024',
        title: 'تحديث الاستجابة الإنسانية',
        excerpt: 'الاستجابة للكوارث الطبيعية والصراعات. كيف نتحرك لمساعدة من هم في احتياج عاجل.',
      },
      {
        month: 'فبراير 2024',
        title: 'قدرة المجتمع على الصمود',
        excerpt: 'بناء سبل العيش المستدامة في خمس دول. قصص التأثير طويل الأجل من الميدان.',
      },
      {
        month: 'يناير 2024',
        title: 'سنة جديدة، أهداف جديدة',
        excerpt: 'الأولويات الاستراتيجية للهيئة 2024 وكيف يمكنك أن تكون جزءاً من تحقيق أهدافنا الإنسانية.',
      },
      {
        month: 'ديسمبر 2023',
        title: 'السنة المراجعة: 2023',
        excerpt: 'الاحتفال بالإنجازات والمعالم من 2023. جعل كرمك كل شيء ممكن.',
      },
    ],
  },
};

export default function NewsletterPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = newsletterContent[locale] || newsletterContent.en;
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage(ar ? 'شكراً لاشتراكك!' : 'Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.deepPurple})`,
        color: 'white',
        padding: '100px 32px',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.royalGold,
            margin: '0 0 16px 0',
          }}>
            {ar ? '📧 النشرة الإخبارية' : '📧 NEWSLETTER'}
          </p>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            margin: '0 0 16px 0',
            maxWidth: '800px',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section style={{
        background: `rgba(${royalColors.royalGold}, 0.08)`,
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: 'Georgia, serif',
            color: royalColors.deepNavy,
            marginBottom: '16px',
          }}>
            {content.subscribeSection}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '40px',
            lineHeight: '1.6',
          }}>
            {content.subscribeDescription}
          </p>

          <form onSubmit={handleSubscribe} style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '24px',
            flexDirection: ar ? 'row-reverse' : 'row',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.emailPlaceholder}
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                border: `2px solid ${royalColors.royalGold}`,
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'inherit',
                direction: ar ? 'rtl' : 'ltr',
                textAlign: ar ? 'right' : 'left',
              }}
            />
            <button
              type="submit"
              style={{
                background: royalColors.deepNavy,
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.royalGold;
                (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
            >
              {content.subscribe}
            </button>
          </form>

          {subscribeMessage && (
            <p style={{
              color: '#28a745',
              fontWeight: '600',
              textAlign: ar ? 'right' : 'left',
            }}>
              {subscribeMessage}
            </p>
          )}

          <p style={{
            fontSize: '13px',
            color: '#999',
            textAlign: ar ? 'right' : 'left',
          }}>
            {ar ? 'نحن نحترم خصوصيتك. الغاء الاشتراك في أي وقت.' : 'We respect your privacy. Unsubscribe anytime.'}
          </p>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 32px',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: 'Georgia, serif',
          color: royalColors.deepNavy,
          marginBottom: '16px',
          textAlign: ar ? 'right' : 'left',
        }}>
          {content.archiveSection}
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '48px',
          textAlign: ar ? 'right' : 'left',
        }}>
          {content.archiveDescription}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {content.archives.map((archive, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px rgba(${royalColors.deepNavy}, 0.12)`;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              {/* Newsletter Header */}
              <div style={{
                background: `linear-gradient(135deg, ${royalColors.deepNavy}, ${royalColors.crimson})`,
                color: 'white',
                padding: '24px',
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: royalColors.royalGold,
                  margin: '0 0 8px 0',
                }}>
                  {archive.month}
                </p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: '0',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {archive.title}
                </h3>
              </div>

              {/* Newsletter Content */}
              <div style={{
                padding: '24px',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  margin: '0 0 20px 0',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {archive.excerpt}
                </p>
                <Link href="#" style={{
                  display: 'inline-block',
                  color: royalColors.deepNavy,
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  padding: '8px 16px',
                  border: `1px solid ${royalColors.deepNavy}`,
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = royalColors.deepNavy;
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
                }}
                >
                  {ar ? 'اقرأ المزيد' : 'Read More'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: royalColors.deepNavy,
        color: 'white',
        padding: '60px 32px',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: 'Georgia, serif',
            margin: '0 0 16px 0',
          }}>
            {ar ? 'لا تفوت آخر الأخبار' : 'Don\'t Miss Out'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#ddd',
            marginBottom: '32px',
            maxWidth: '600px',
          }}>
            {ar ? 'اشترك اليوم وكن أول من يعرف عن برامجنا والفرص وقصص التأثير.' : 'Subscribe today and be the first to know about our programs, opportunities, and impact stories.'}
          </p>
          <Link href={`/${locale}/newsletter`} style={{
            display: 'inline-block',
            background: royalColors.royalGold,
            color: royalColors.deepNavy,
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: `2px solid ${royalColors.royalGold}`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = royalColors.royalGold;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = royalColors.royalGold;
            (e.currentTarget as HTMLElement).style.color = royalColors.deepNavy;
          }}
          >
            {ar ? 'اشترك الآن' : 'Subscribe Now'}
          </Link>
        </div>
      </section>
    </main>
  );
}
