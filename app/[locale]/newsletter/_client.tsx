'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, spacing, borderRadius, gradients } from '@/lib/royalDesign';

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
        background: gradients.goldToWarm,
        color: 'white',
        padding: `${spacing.xxxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: `0 0 ${spacing.md} 0`,
          }}>
            {ar ? '📧 النشرة الإخبارية' : '📧 NEWSLETTER'}
          </p>
          <h1 style={{
            fontSize: '56px',
            fontFamily: '"Merriweather", Georgia, serif',
            fontWeight: '700',
            margin: `0 0 ${spacing.md} 0`,
            maxWidth: '800px',
            color: 'white',
          }}>
            {content.heroTitle}
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
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
        background: royalColors.ivoryBg,
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
        textAlign: ar ? 'right' : 'left',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: '"Merriweather", Georgia, serif',
            color: royalColors.darkNavy,
            marginBottom: spacing.md,
            fontWeight: '700',
          }}>
            {content.subscribeSection}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            marginBottom: spacing.xl,
            lineHeight: '1.6',
          }}>
            {content.subscribeDescription}
          </p>

          <form onSubmit={handleSubscribe} style={{
            display: 'flex',
            gap: spacing.md,
            marginBottom: spacing.lg,
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
                padding: `${spacing.sm} ${spacing.md}`,
                border: `2px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.md,
                fontSize: '16px',
                fontFamily: 'inherit',
                direction: ar ? 'rtl' : 'ltr',
                textAlign: ar ? 'right' : 'left',
                background: 'white',
              }}
            />
            <button
              type="submit"
              style={{
                background: royalColors.hashemiteGold,
                color: royalColors.darkNavy,
                border: 'none',
                padding: `${spacing.sm} ${spacing.lg}`,
                borderRadius: borderRadius.md,
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.hashemiteGold;
                (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
              }}
            >
              {content.subscribe}
            </button>
          </form>

          {subscribeMessage && (
            <p style={{
              color: royalColors.impactGreen,
              fontWeight: '600',
              textAlign: ar ? 'right' : 'left',
            }}>
              {subscribeMessage}
            </p>
          )}

          <p style={{
            fontSize: '13px',
            color: royalColors.textSecondary,
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
        padding: `${spacing.xxxl} ${spacing.xl}`,
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: '"Merriweather", Georgia, serif',
          color: royalColors.darkNavy,
          marginBottom: spacing.md,
          textAlign: ar ? 'right' : 'left',
          fontWeight: '700',
        }}>
          {content.archiveSection}
        </h2>
        <p style={{
          fontSize: '16px',
          color: royalColors.textOfficial,
          marginBottom: spacing.xxxl,
          textAlign: ar ? 'right' : 'left',
        }}>
          {content.archiveDescription}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: spacing.xl,
        }}>
          {content.archives.map((archive, idx) => (
            <div key={idx} style={{
              background: royalColors.ivoryBg,
              borderRadius: borderRadius.lg,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
              borderLeft: `4px solid ${royalColors.hashemiteGold}`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 28px rgba(0,0,0,0.15)`;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              {/* Newsletter Header */}
              <div style={{
                background: gradients.goldToWarm,
                color: 'white',
                padding: spacing.lg,
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.95)',
                  margin: `0 0 ${spacing.sm} 0`,
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
                padding: spacing.lg,
              }}>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: `0 0 ${spacing.xl} 0`,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {archive.excerpt}
                </p>
                <Link href="#" style={{
                  display: 'inline-block',
                  color: royalColors.darkNavy,
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  padding: `${spacing.xs} ${spacing.md}`,
                  border: `1px solid ${royalColors.hashemiteGold}`,
                  borderRadius: borderRadius.sm,
                  transition: 'all 0.3s',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = royalColors.hashemiteGold;
                  (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
                  (e.currentTarget as HTMLElement).style.borderColor = royalColors.hashemiteGold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
                  (e.currentTarget as HTMLElement).style.borderColor = royalColors.hashemiteGold;
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
        background: gradients.goldToWarm,
        color: 'white',
        padding: `${spacing.xxl} ${spacing.xl}`,
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: '"Merriweather", Georgia, serif',
            margin: `0 0 ${spacing.md} 0`,
            fontWeight: '700',
          }}>
            {ar ? 'لا تفوت آخر الأخبار' : 'Don\'t Miss Out'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: spacing.xl,
            maxWidth: '600px',
          }}>
            {ar ? 'اشترك اليوم وكن أول من يعرف عن برامجنا والفرص وقصص التأثير.' : 'Subscribe today and be the first to know about our programs, opportunities, and impact stories.'}
          </p>
          <Link href={`/${locale}/newsletter`} style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.95)',
            color: royalColors.darkNavy,
            padding: `${spacing.sm} ${spacing.lg}`,
            borderRadius: borderRadius.md,
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: `2px solid rgba(255, 255, 255, 0.95)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
            (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
          }}
          >
            {ar ? 'اشترك الآن' : 'Subscribe Now'}
          </Link>
        </div>
      </section>
    </main>
  );
}
