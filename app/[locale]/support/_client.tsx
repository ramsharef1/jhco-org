'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState } from 'react';

const supportContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Royal Support Center',
      subtitle: 'We\'re Here to Help You',
      overlay: 'Your satisfaction and success is our priority',
    },

    // Quick Support Section
    quickSupport: {
      title: 'Quick Support',
      description: 'Find answers instantly with our most requested help topics',
      items: [
        {
          icon: '❓',
          title: 'Frequently Asked Questions',
          description: 'Browse common questions and quick answers',
          link: '/faq',
        },
        {
          icon: '📞',
          title: 'Contact Us',
          description: 'Reach out to our support team directly',
          link: '/contact',
        },
        {
          icon: '📚',
          title: 'Resource Center',
          description: 'Access guides, tutorials, and documentation',
          link: '/resources',
        },
        {
          icon: '🔐',
          title: 'Account Help',
          description: 'Manage your account and settings',
          link: '/account-help',
        },
      ],
    },

    // Support Categories Section
    categories: {
      title: 'Support Categories',
      description: 'Find help organized by topic',
      items: [
        {
          icon: '💳',
          title: 'Donations & Payments',
          description: 'Questions about making donations, payment methods, receipts, and tax information',
          color: royalColors.charityRed,
          topics: [
            'How to make a donation',
            'Payment methods accepted',
            'Tax-deductible donations',
            'Donation receipts',
            'One-time vs recurring donations',
          ],
        },
        {
          icon: '👤',
          title: 'Account & Profile',
          description: 'Help with account creation, login, profile management, and preferences',
          color: royalColors.compassionTeal,
          topics: [
            'Creating an account',
            'Password reset',
            'Profile settings',
            'Email preferences',
            'Account security',
          ],
        },
        {
          icon: '🤝',
          title: 'Volunteering',
          description: 'Information about volunteer opportunities, applications, and participation',
          color: royalColors.hashemiteGold,
          topics: [
            'How to volunteer',
            'Volunteer requirements',
            'Application process',
            'Volunteer opportunities',
            'Track your impact',
          ],
        },
        {
          icon: '📊',
          title: 'Impact & Reports',
          description: 'Understanding our work, impact metrics, and annual reports',
          color: royalColors.impactGreen,
          topics: [
            'How your donation helps',
            'Impact metrics',
            'Annual reports',
            'Program details',
            'Beneficiary stories',
          ],
        },
        {
          icon: '🔔',
          title: 'Notifications',
          description: 'Manage email preferences, newsletters, and update notifications',
          color: royalColors.skyBlue,
          topics: [
            'Email preferences',
            'Newsletter subscription',
            'Impact updates',
            'Event notifications',
            'Unsubscribe options',
          ],
        },
        {
          icon: '🌐',
          title: 'Website & Technical',
          description: 'Technical issues, browser compatibility, and website navigation',
          color: royalColors.deepPurple,
          topics: [
            'Website errors',
            'Browser compatibility',
            'Mobile app help',
            'Login issues',
            'Site navigation',
          ],
        },
      ],
    },

    // Support Methods Section
    methods: {
      title: 'How to Reach Us',
      description: 'Choose the support method that works best for you',
      items: [
        {
          icon: '✉️',
          title: 'Email Support',
          description: 'Response time: 24-48 hours',
          details: 'support@jhco.org',
          color: royalColors.charityRed,
        },
        {
          icon: '📞',
          title: 'Phone Support',
          description: 'Monday-Friday, 9AM-5PM EST',
          details: '+1 (555) 123-4567',
          color: royalColors.compassionTeal,
        },
        {
          icon: '💬',
          title: 'Live Chat',
          description: 'Chat with an agent in real-time',
          details: 'Available during business hours',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '📱',
          title: 'Social Media',
          description: 'Message us on social platforms',
          details: '@JHCOOfficial',
          color: royalColors.impactGreen,
        },
      ],
    },

    // FAQ Preview Section
    faqPreview: {
      title: 'Common Questions',
      description: 'Quick answers to frequently asked questions',
      items: [
        {
          q: 'How do I track the impact of my donation?',
          a: 'You can track your donation impact through your personal dashboard on our website. Log in to your account to view detailed reports on how your contributions are making a difference.',
        },
        {
          q: 'Is my donation tax-deductible?',
          a: 'Yes, all donations to JHCO are tax-deductible. We are a registered nonprofit organization. Your donation receipt will be sent automatically via email.',
        },
        {
          q: 'Can I volunteer if I\'m not in the region?',
          a: 'We offer various remote volunteer opportunities including virtual mentoring, content creation, and administrative support. Please visit our volunteer page to explore options.',
        },
        {
          q: 'How often will I hear about programs and updates?',
          a: 'You can customize your communication preferences in your account settings. Choose from weekly, monthly, or quarterly updates about our programs.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards, bank transfers, mobile payment platforms, and cryptocurrency. Choose the method that works best for you.',
        },
        {
          q: 'How is my data protected?',
          a: 'We use industry-standard security measures including SSL encryption and comply with international data protection regulations to keep your information safe.',
        },
      ],
    },

    // Service Levels Section
    serviceLevels: {
      title: 'Support Service Levels',
      description: 'We\'re committed to providing timely support',
      items: [
        {
          level: 'Standard Support',
          icon: '⭐',
          response: '24-48 hours',
          includes: [
            'Email support',
            'FAQ access',
            'Resource library',
            'Community forums',
          ],
          color: royalColors.skyBlue,
        },
        {
          level: 'Priority Support',
          icon: '👑',
          response: '4-6 hours',
          includes: [
            'Phone support',
            'Email support',
            'Live chat',
            'Dedicated support staff',
            'Resource library',
          ],
          color: royalColors.hashemiteGold,
        },
      ],
    },

    // Feedback Section
    feedback: {
      title: 'We Value Your Feedback',
      description: 'Help us improve by sharing your thoughts and experiences',
      buttonText: 'Share Feedback',
    },

    // CTA Section
    cta: {
      title: 'Ready to Get Support?',
      subtitle: 'Our team is standing by to assist you',
      buttons: [
        { label: 'Visit FAQ', href: '/faq', icon: '❓' },
        { label: 'Contact Us', href: '/contact', icon: '📞' },
        { label: 'Browse Resources', href: '/resources', icon: '📚' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'مركز الدعم الملكي',
      subtitle: 'نحن هنا لمساعدتك',
      overlay: 'رضاك ونجاحك هو أولويتنا',
    },

    // Quick Support Section
    quickSupport: {
      title: 'الدعم السريع',
      description: 'ابحث عن الإجابات على الفور مع أكثر موضوعات المساعدة المطلوبة',
      items: [
        {
          icon: '❓',
          title: 'الأسئلة الشائعة',
          description: 'تصفح الأسئلة الشائعة والإجابات السريعة',
          link: '/faq',
        },
        {
          icon: '📞',
          title: 'اتصل بنا',
          description: 'تواصل مع فريق الدعم الخاص بنا مباشرة',
          link: '/contact',
        },
        {
          icon: '📚',
          title: 'مركز الموارد',
          description: 'الوصول إلى الأدلة والبرامج التعليمية والتوثيق',
          link: '/resources',
        },
        {
          icon: '🔐',
          title: 'مساعدة الحساب',
          description: 'إدارة حسابك والإعدادات',
          link: '/account-help',
        },
      ],
    },

    // Support Categories Section
    categories: {
      title: 'فئات الدعم',
      description: 'ابحث عن المساعدة المنظمة حسب الموضوع',
      items: [
        {
          icon: '💳',
          title: 'التبرعات والدفع',
          description: 'أسئلة حول تقديم التبرعات وطرق الدفع والإيصالات والمعلومات الضريبية',
          color: royalColors.charityRed,
          topics: [
            'كيفية تقديم تبرع',
            'طرق الدفع المقبولة',
            'التبرعات المعفاة من الضرائب',
            'إيصالات التبرع',
            'التبرعات لمرة واحدة مقابل التبرعات المتكررة',
          ],
        },
        {
          icon: '👤',
          title: 'الحساب والملف الشخصي',
          description: 'مساعدة في إنشاء الحساب والدخول وإدارة الملف الشخصي والتفضيلات',
          color: royalColors.compassionTeal,
          topics: [
            'إنشاء حساب',
            'إعادة تعيين كلمة المرور',
            'إعدادات الملف الشخصي',
            'تفضيلات البريد الإلكتروني',
            'أمان الحساب',
          ],
        },
        {
          icon: '🤝',
          title: 'التطوع',
          description: 'معلومات حول فرص التطوع والطلبات والمشاركة',
          color: royalColors.hashemiteGold,
          topics: [
            'كيفية التطوع',
            'متطلبات التطوع',
            'عملية التقديم',
            'فرص التطوع',
            'تتبع تأثيرك',
          ],
        },
        {
          icon: '📊',
          title: 'التأثير والتقارير',
          description: 'فهم أعمالنا ومقاييس التأثير والتقارير السنوية',
          color: royalColors.impactGreen,
          topics: [
            'كيف يساعد تبرعك',
            'مقاييس التأثير',
            'التقارير السنوية',
            'تفاصيل البرنامج',
            'قصص المستفيدين',
          ],
        },
        {
          icon: '🔔',
          title: 'الإشعارات',
          description: 'إدارة تفضيلات البريد الإلكتروني والنشرات الإخبارية والإشعارات',
          color: royalColors.skyBlue,
          topics: [
            'تفضيلات البريد الإلكتروني',
            'الاشتراك في النشرة الإخبارية',
            'تحديثات التأثير',
            'إشعارات الأحداث',
            'خيارات عدم الاشتراك',
          ],
        },
        {
          icon: '🌐',
          title: 'الموقع والدعم التقني',
          description: 'المشاكل التقنية وتوافق المتصفح والملاحة على الموقع',
          color: royalColors.deepPurple,
          topics: [
            'أخطاء الموقع',
            'توافق المتصفح',
            'مساعدة تطبيق الهاتف المحمول',
            'مشاكل الدخول',
            'ملاحة الموقع',
          ],
        },
      ],
    },

    // Support Methods Section
    methods: {
      title: 'كيفية التواصل معنا',
      description: 'اختر طريقة الدعم الأنسب لك',
      items: [
        {
          icon: '✉️',
          title: 'دعم البريد الإلكتروني',
          description: 'وقت الرد: 24-48 ساعة',
          details: 'support@jhco.org',
          color: royalColors.charityRed,
        },
        {
          icon: '📞',
          title: 'دعم الهاتف',
          description: 'الاثنين-الجمعة، 9 صباحاً-5 مساءً بتوقيت شرق الولايات المتحدة',
          details: '+1 (555) 123-4567',
          color: royalColors.compassionTeal,
        },
        {
          icon: '💬',
          title: 'الدردشة المباشرة',
          description: 'تحدث مع وكيل في الوقت الفعلي',
          details: 'متاح خلال ساعات العمل',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '📱',
          title: 'وسائل التواصل الاجتماعي',
          description: 'راسلنا على منصات التواصل الاجتماعي',
          details: '@JHCOOfficial',
          color: royalColors.impactGreen,
        },
      ],
    },

    // FAQ Preview Section
    faqPreview: {
      title: 'أسئلة شائعة',
      description: 'إجابات سريعة على الأسئلة الشائعة',
      items: [
        {
          q: 'كيف أتابع تأثير تبرعي؟',
          a: 'يمكنك متابعة تأثير تبرعك من خلال لوحة المعلومات الشخصية على موقعنا. قم بتسجيل الدخول إلى حسابك لعرض التقارير التفصيلية حول كيفية إحداث مساهماتك فرقاً.',
        },
        {
          q: 'هل تبرعي معفى من الضرائب؟',
          a: 'نعم، جميع التبرعات للهيئة الخيرية الأردنية الهاشمية معفاة من الضرائب. نحن منظمة غير هادفة للربح مسجلة. سيتم إرسال إيصالك تلقائياً عبر البريد الإلكتروني.',
        },
        {
          q: 'هل يمكنني التطوع إذا لم أكن في المنطقة؟',
          a: 'نحن نقدم فرص تطوع عن بعد متنوعة بما في ذلك الإرشاد الافتراضي وإنشاء المحتوى والدعم الإداري. يرجى زيارة صفحة التطوع لاستكشاف الخيارات.',
        },
        {
          q: 'كم مرة سأسمع عن البرامج والتحديثات؟',
          a: 'يمكنك تخصيص تفضيلاتك في الاتصال في إعدادات حسابك. اختر من التحديثات الأسبوعية أو الشهرية أو الفصلية حول برامجنا.',
        },
        {
          q: 'ما طرق الدفع التي تقبلونها؟',
          a: 'نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية ومنصات الدفع عبر الهاتف المحمول والعملات المشفرة. اختر الطريقة التي تناسبك.',
        },
        {
          q: 'كيف تتم حماية بياناتي؟',
          a: 'نستخدم تدابير أمان حسب معايير الصناعة بما في ذلك تشفير SSL والامتثال للوائح حماية البيانات الدولية لحماية معلوماتك.',
        },
      ],
    },

    // Service Levels Section
    serviceLevels: {
      title: 'مستويات خدمة الدعم',
      description: 'نحن ملتزمون بتقديم الدعم في الوقت المناسب',
      items: [
        {
          level: 'الدعم القياسي',
          icon: '⭐',
          response: '24-48 ساعة',
          includes: [
            'دعم البريد الإلكتروني',
            'الوصول إلى الأسئلة الشائعة',
            'مكتبة الموارد',
            'منتديات المجتمع',
          ],
          color: royalColors.skyBlue,
        },
        {
          level: 'الدعم الأولوي',
          icon: '👑',
          response: '4-6 ساعات',
          includes: [
            'دعم الهاتف',
            'دعم البريد الإلكتروني',
            'الدردشة المباشرة',
            'فريق دعم مخصص',
            'مكتبة الموارد',
          ],
          color: royalColors.hashemiteGold,
        },
      ],
    },

    // Feedback Section
    feedback: {
      title: 'نقدر رأيك',
      description: 'ساعدنا في التحسين من خلال مشاركة أفكارك وتجاربك',
      buttonText: 'شارك رأيك',
    },

    // CTA Section
    cta: {
      title: 'هل أنت مستعد للحصول على الدعم؟',
      subtitle: 'فريقنا جاهز لمساعدتك',
      buttons: [
        { label: 'زيارة الأسئلة الشائعة', href: '/faq', icon: '❓' },
        { label: 'اتصل بنا', href: '/contact', icon: '📞' },
        { label: 'تصفح الموارد', href: '/resources', icon: '📚' },
      ],
    },
  },
};

export default function SupportPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = supportContent[locale] || supportContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 50%, ${royalColors.hashemiteGold} 100%)`,
        backgroundSize: '400% 400%',
        color: 'white',
        padding: '120px 32px',
        textAlign: textAlign as any,
        direction,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: ar ? '32px' : 'auto',
          left: ar ? 'auto' : '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '120px',
          opacity: 0.15,
          display: 'none',
        }}>
          🤝
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: royalColors.hashemiteGold,
            margin: '0 0 16px 0',
          }}>
            👑 {ar ? 'خدمة عملائنا' : 'ROYAL SERVICE'}
          </p>
          <h1 style={{
            fontSize: '52px',
            fontFamily: 'Garamond, serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            maxWidth: '800px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.hero.title}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#ddd',
            margin: '0 0 12px 0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}>
            {content.hero.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: royalColors.hashemiteGold,
            fontStyle: 'italic',
            margin: '0',
          }}>
            "{content.hero.overlay}"
          </p>
        </div>
      </section>

      {/* 2. QUICK SUPPORT SECTION */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.quickSupport.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.quickSupport.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {content.quickSupport.items.map((item, idx) => (
              <Link
                key={idx}
                href={`/${locale}${item.link}`}
                style={{
                  padding: '28px',
                  background: `linear-gradient(135deg, ${royalColors.compassionTeal}08 0%, ${royalColors.hashemiteGold}08 100%)`,
                  borderRadius: '0px',
                  border: `2px solid ${royalColors.hashemiteGold}`,
                  textDecoration: 'none',
                  color: 'inherit',
                  textAlign: textAlign as any,
                  transition: 'all 0.3s',
                  display: 'block',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = shadows.md;
                  (e.currentTarget as HTMLElement).style.borderColor = royalColors.compassionTeal;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = royalColors.hashemiteGold;
                }}
              >
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: royalColors.darkNavy,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUPPORT CATEGORIES SECTION */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.categories.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.categories.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {content.categories.items.map((category, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: 'white',
                borderRadius: '0px',
                border: `2px solid ${category.color}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.md;
                (e.currentTarget as HTMLElement).style.borderColor = category.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: expandedCategory === idx ? '16px' : '0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      fontSize: '32px',
                    }}>
                      {category.icon}
                    </div>
                    <h4 style={{
                      fontSize: '18px',
                      color: category.color,
                      margin: '0',
                      fontWeight: '600',
                    }}>
                      {category.title}
                    </h4>
                  </div>
                  <div style={{
                    fontSize: '20px',
                    transition: 'transform 0.3s',
                    transform: expandedCategory === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    ▼
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0 0 16px 0',
                  lineHeight: '1.6',
                }}>
                  {category.description}
                </p>
                {expandedCategory === idx && (
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                    paddingTop: '16px',
                    borderTop: `1px solid ${category.color}20`,
                  }}>
                    {category.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} style={{
                        fontSize: '13px',
                        color: royalColors.textOfficial,
                        padding: '8px 0',
                        paddingLeft: ar ? '0' : '20px',
                        paddingRight: ar ? '20px' : '0',
                      }}>
                        • {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUPPORT METHODS SECTION */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.methods.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.methods.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {content.methods.items.map((method, idx) => (
              <div key={idx} style={{
                padding: '28px',
                background: `${method.color}08`,
                borderRadius: '0px',
                border: `2px solid ${method.color}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '12px',
                }}>
                  {method.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: method.color,
                  margin: '0 0 8px 0',
                  fontWeight: '600',
                }}>
                  {method.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0 0 12px 0',
                  lineHeight: '1.6',
                }}>
                  {method.description}
                </p>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.darkNavy,
                  margin: '0',
                  fontWeight: '600',
                }}>
                  {method.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ PREVIEW SECTION */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.faqPreview.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.faqPreview.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            {content.faqPreview.items.map((faq, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: 'white',
                borderRadius: '0px',
                border: `1px solid ${royalColors.borderFormal}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = shadows.sm;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    color: royalColors.darkNavy,
                    margin: '0',
                    fontWeight: '600',
                    flex: 1,
                    textAlign: textAlign as any,
                  }}>
                    {faq.q}
                  </h4>
                  <div style={{
                    fontSize: '16px',
                    transition: 'transform 0.3s',
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}>
                    ▼
                  </div>
                </div>
                {expandedFaq === idx && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    margin: '12px 0 0 0',
                    lineHeight: '1.6',
                    paddingTop: '12px',
                    borderTop: `1px solid ${royalColors.borderFormal}`,
                    textAlign: textAlign as any,
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href={`/${locale}/faq`}
              style={{
                padding: '14px 32px',
                background: royalColors.darkNavy,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0px',
                fontWeight: '700',
                transition: 'all 0.3s',
                display: 'inline-block',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                border: `2px solid ${royalColors.darkNavy}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'white';
                (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
            >
              {ar ? 'عرض جميع الأسئلة الشائعة' : 'View All FAQs'}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICE LEVELS SECTION */}
      <section style={{
        padding: '100px 32px',
        background: 'white',
        textAlign: textAlign as any,
        direction,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            color: royalColors.darkNavy,
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.serviceLevels.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            margin: '0 0 48px 0',
            maxWidth: '600px',
          }}>
            {content.serviceLevels.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.serviceLevels.items.map((level, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: `${level.color}08`,
                borderRadius: '0px',
                border: `2px solid ${level.color}`,
                textAlign: textAlign as any,
              }}>
                <div style={{
                  fontSize: '44px',
                  marginBottom: '12px',
                }}>
                  {level.icon}
                </div>
                <h4 style={{
                  fontSize: '22px',
                  color: level.color,
                  margin: '0 0 8px 0',
                  fontWeight: '700',
                }}>
                  {level.level}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  margin: '0 0 20px 0',
                  fontWeight: '600',
                }}>
                  {ar ? 'وقت الرد: ' : 'Response time: '} {level.response}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                }}>
                  {ar ? 'يشمل:' : 'Includes:'}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}>
                  {level.includes.map((item, itemIdx) => (
                    <li key={itemIdx} style={{
                      fontSize: '14px',
                      color: royalColors.textOfficial,
                      padding: '6px 0',
                      paddingLeft: ar ? '0' : '20px',
                      paddingRight: ar ? '20px' : '0',
                    }}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEEDBACK SECTION */}
      <section style={{
        padding: '100px 32px',
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepPurple} 100%)`,
        color: 'white',
        textAlign: 'center',
        direction,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            {content.feedback.title}
          </h2>
          <p style={{
            fontSize: '18px',
            margin: '0 0 32px 0',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.feedback.description}
          </p>
          <button
            style={{
              padding: '14px 32px',
              background: 'white',
              color: royalColors.darkNavy,
              border: 'none',
              borderRadius: '0px',
              fontWeight: '700',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = shadows.lg;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            {content.feedback.buttonText}
          </button>
        </div>
      </section>

      {/* 8. CALL-TO-ACTION */}
      <section style={{
        padding: '100px 32px',
        background: royalColors.ivoryBg,
        textAlign: 'center',
        direction,
        borderTop: `4px solid ${royalColors.hashemiteGold}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'Garamond, serif',
            margin: '0 0 12px 0',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: royalColors.darkNavy,
          }}>
            {content.cta.title}
          </h2>
          <p style={{
            fontSize: '18px',
            margin: '0 0 48px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            color: royalColors.textSecondary,
          }}>
            {content.cta.subtitle}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {content.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={`/${locale}${button.href}`}
                style={{
                  padding: '16px 32px',
                  background: royalColors.darkNavy,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0px',
                  fontWeight: '700',
                  transition: 'all 0.3s',
                  display: 'inline-block',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: `2px solid ${royalColors.darkNavy}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = royalColors.darkNavy;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = royalColors.darkNavy;
                  (e.currentTarget as HTMLElement).style.color = 'white';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {button.icon} {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
