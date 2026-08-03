'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function FundraiseForUsPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const ar = locale === 'ar';
  const base = `/${locale}`;

  const [shareOpen, setShareOpen] = useState(false);

  // Royal color palette
  const colors = {
    deepRoyal: '#4a148c',
    darkNavy: '#001a4d',
    hashemiteGold: '#d4af37',
    royalBurgundy: '#5d1049',
    deepCrimson: '#8b0000',
    formalCharcoal: '#2b2d42',
    ivoryBg: '#f5f1e8',
    paleGold: '#e8dcc8',
    darkGrayText: '#2c2c2c',
    charityRed: '#c41e3a',
    compassionTeal: '#0d7377',
    impactGreen: '#1b4332',
    lightBg: '#ffffff',
    textSecondary: '#5a5a6a',
    borderFormal: '#d4c5a9',
    borderSubtle: '#e8dcc8',
  };

  // Content translations
  const content = ar ? {
    title: 'اجمع تبرعات من أجلنا',
    subtitle: 'أطلق حملة جمع أموال لتغيير حياة الناس',
    overview: 'قم بتجنيد أصدقاء وعائلتك لدعم رسالتنا الإنسانية. من خلال جمع التبرعات بين الأقران، يمكنك إحداث تأثير كبير وإلهام الآخرين على الانضمام إلى هذه الحركة.',

    // How it works
    howItWorks: 'كيفية العمل',
    howItWorksSubtitle: 'ابدأ رحلتك في جمع الأموال في 5 خطوات بسيطة',

    steps: [
      {
        num: '1',
        title: 'أنشئ حملتك',
        desc: 'اختر السبب، حدد هدفك المالي، والتقط صورة شخصية.',
      },
      {
        num: '2',
        title: 'شارك قصتك',
        desc: 'اكتب لماذا تجمع أموالاً وما يعنيه هذا بالنسبة لك.',
      },
      {
        num: '3',
        title: 'دعوة المانحين',
        desc: 'شارك رابط حملتك عبر وسائل التواصل والبريد الإلكتروني.',
      },
      {
        num: '4',
        title: 'تتبع التقدم',
        desc: 'راقب نمو أموالك واحتفل بالمعالم البارزة.',
      },
      {
        num: '5',
        title: 'احدث التأثير',
        desc: 'اطّلع على كيفية استخدام أموالك لتغيير الحياة.',
      },
    ],

    // Fundraising ideas
    fundraisingIdeas: 'أفكار جمع أموال',
    fundraisingIdeasSub: 'استكشف الطرق المبتكرة لجمع الأموال',

    ideas: [
      {
        title: 'يوم الخيرية الاجتماعية',
        desc: 'استضف حفلة شاي أو عشاء أو حفل موسيقي وتبرع بالأرباح.',
        icon: '🎉',
      },
      {
        title: 'تحدي اللياقة البدنية',
        desc: 'اجمع أموالاً من خلال الجري أو المشي أو ركوب الدراجات.',
        icon: '🏃',
      },
      {
        title: 'بيع الحرف اليدوية',
        desc: 'اصنع منتجاتك وبعها لتحقيق هدف جمع التبرعات.',
        icon: '🎨',
      },
      {
        title: 'حدث افتراضي',
        desc: 'استضف جلسة Q&A أو ورشة عمل تعليمية عبر الإنترنت.',
        icon: '💻',
      },
      {
        title: 'تحدي مهارة',
        desc: 'تعلم مهارة جديدة وعلم الآخرين مقابل التبرع.',
        icon: '🎓',
      },
      {
        title: 'حملة وسائل التواصل',
        desc: 'اطلب من المتابعين التبرع من خلال التحديات والمسابقات.',
        icon: '📱',
      },
    ],

    // Success stories
    successStories: 'قصص النجاح',
    successStoriesSub: 'الملهمون الذين غيروا الحياة من خلال جمع الأموال',

    stories: [
      {
        name: 'فاطمة محمد',
        raised: '15,000 درهم',
        goal: '10,000 درهم',
        campaign: 'حملة التعليم',
        desc: 'قررت فاطمة تنظيم سلسلة من حفلات الشاي الخيرية. تجاوزت هدفها بنسبة 50% وأثهمت في تعليم 25 طالباً.',
        avatar: '👩‍🏫',
      },
      {
        name: 'أحمد علي',
        raised: '22,500 درهم',
        goal: '15,000 درهم',
        campaign: 'حملة الصحة',
        desc: 'تحدى أحمد نفسه بماراثون افتراضي. ألهم متابعوه وتبرع أكثر من 120 شخصاً.',
        avatar: '🏃‍♂️',
      },
      {
        name: 'ليلى خليل',
        raised: '18,750 درهم',
        goal: '12,000 درهم',
        campaign: 'حملة الطوارئ',
        desc: 'باعت ليلى منتجاتها الحرفية المصنوعة يدويًا. وصلت إلى 1,500 شخص وجمعت ما يكفي لمساعدة 50 عائلة.',
        avatar: '🎨',
      },
      {
        name: 'محمود حسن',
        raised: '30,000 درهم',
        goal: '20,000 درهم',
        campaign: 'حملة متعددة',
        desc: 'نظم محمود حدثاً افتراضياً مع متحدثين خبراء. جذب 500 مشارك وحقق أعلى حملة في الشهر.',
        avatar: '💼',
      },
    ],

    // Leaderboard
    topFundraisers: 'أفضل مجمعي الأموال',
    topFundraisersSub: 'احتفل بالقادة الملهمين',

    leaderboard: [
      { rank: 1, name: 'محمود حسن', amount: '30,000 درهم', percent: 150, badge: '👑' },
      { rank: 2, name: 'أحمد علي', amount: '22,500 درهم', percent: 150, badge: '🥈' },
      { rank: 3, name: 'فاطمة محمد', amount: '15,000 درهم', percent: 150, badge: '🥉' },
      { rank: 4, name: 'ليلى خليل', amount: '18,750 درهم', percent: 156, badge: '🌟' },
      { rank: 5, name: 'رضا محمود', amount: '12,500 درهم', percent: 125, badge: '🎯' },
    ],

    // Resources
    toolkit: 'مجموعة أدوات جمع الأموال',
    toolkitSub: 'موارد لمساعدتك على النجاح',

    resources: [
      {
        title: 'قوالب البريد الإلكتروني',
        desc: 'رسائل جاهزة لإرسالها إلى المانحين المحتملين.',
        icon: '📧',
      },
      {
        title: 'شارات وسائل التواصل',
        desc: 'صور قابلة للمشاركة لحملاتك على Facebook و Instagram.',
        icon: '🖼️',
      },
      {
        title: 'قائمة مراجعة الحملة',
        desc: 'خطوات شاملة لتنظيم حملة ناجحة.',
        icon: '✅',
      },
      {
        title: 'نصائح التسويق',
        desc: 'استراتيجيات لزيادة مشهد حملتك.',
        icon: '📢',
      },
      {
        title: 'نماذج قصة الحملة',
        desc: 'أمثلة قصص ملهمة لكتابة رسالتك الخاصة.',
        icon: '📖',
      },
      {
        title: 'أدلة الأحداث',
        desc: 'خطط تفصيلية لاستضافة حدث جمع أموال.',
        icon: '🎪',
      },
    ],

    // CTA
    createFundraiser: 'أنشئ حملتك الآن',
    learnMore: 'اعرف المزيد',
    shareYourStory: 'شارك قصتك',
    downloadToolkit: 'حمّل مجموعة الأدوات',

    // Social
    shareOn: 'شارك على',
    copyLink: 'انسخ الرابط',
    linkCopied: 'تم نسخ الرابط!',
  } : {
    title: 'Fundraise for Us',
    subtitle: 'Launch a fundraising campaign to change lives',
    overview: 'Rally your friends and family to support our humanitarian mission. Through peer-to-peer fundraising, you can create massive impact and inspire others to join this movement.',

    // How it works
    howItWorks: 'How It Works',
    howItWorksSubtitle: 'Start your fundraising journey in 5 simple steps',

    steps: [
      {
        num: '1',
        title: 'Create Your Campaign',
        desc: 'Choose a cause, set your fundraising goal, and capture a personal photo.',
      },
      {
        num: '2',
        title: 'Share Your Story',
        desc: 'Write why you\'re fundraising and what it means to you.',
      },
      {
        num: '3',
        title: 'Invite Donors',
        desc: 'Share your campaign link via social media and email.',
      },
      {
        num: '4',
        title: 'Track Progress',
        desc: 'Watch your funds grow and celebrate milestones.',
      },
      {
        num: '5',
        title: 'Make Impact',
        desc: 'See how your money transforms lives in real time.',
      },
    ],

    // Fundraising ideas
    fundraisingIdeas: 'Fundraising Ideas',
    fundraisingIdeasSub: 'Explore innovative ways to raise funds',

    ideas: [
      {
        title: 'Social Charity Event',
        desc: 'Host a tea party, dinner, or concert and donate the proceeds.',
        icon: '🎉',
      },
      {
        title: 'Fitness Challenge',
        desc: 'Raise funds through running, walking, or cycling.',
        icon: '🏃',
      },
      {
        title: 'Crafts Sale',
        desc: 'Create handmade products and sell them for your fundraising goal.',
        icon: '🎨',
      },
      {
        title: 'Virtual Event',
        desc: 'Host a Q&A session or educational workshop online.',
        icon: '💻',
      },
      {
        title: 'Skill Challenge',
        desc: 'Learn a new skill and teach others for donations.',
        icon: '🎓',
      },
      {
        title: 'Social Media Campaign',
        desc: 'Challenge followers to donate through contests and challenges.',
        icon: '📱',
      },
    ],

    // Success stories
    successStories: 'Success Stories',
    successStoriesSub: 'Inspiring fundraisers who changed lives',

    stories: [
      {
        name: 'Fatima Mohammed',
        raised: '$5,000',
        goal: '$3,500',
        campaign: 'Education Campaign',
        desc: 'Fatima organized a series of charity tea parties. She exceeded her goal by 50% and helped educate 25 students.',
        avatar: '👩‍🏫',
      },
      {
        name: 'Ahmed Ali',
        raised: '$7,500',
        goal: '$5,000',
        campaign: 'Health Campaign',
        desc: 'Ahmed challenged himself with a virtual marathon. His followers were inspired and over 120 people donated.',
        avatar: '🏃‍♂️',
      },
      {
        name: 'Layla Khalil',
        raised: '$6,250',
        goal: '$4,000',
        campaign: 'Emergency Relief',
        desc: 'Layla sold her handmade products. She reached 1,500 people and raised enough to help 50 families.',
        avatar: '🎨',
      },
      {
        name: 'Mahmoud Hassan',
        raised: '$10,000',
        goal: '$7,000',
        campaign: 'Multi-Campaign',
        desc: 'Mahmoud hosted a virtual event with expert speakers. He attracted 500 participants and achieved top campaign this month.',
        avatar: '💼',
      },
    ],

    // Leaderboard
    topFundraisers: 'Top Fundraisers',
    topFundraisersSub: 'Celebrate our inspiring leaders',

    leaderboard: [
      { rank: 1, name: 'Mahmoud Hassan', amount: '$10,000', percent: 143, badge: '👑' },
      { rank: 2, name: 'Ahmed Ali', amount: '$7,500', percent: 150, badge: '🥈' },
      { rank: 3, name: 'Fatima Mohammed', amount: '$5,000', percent: 143, badge: '🥉' },
      { rank: 4, name: 'Layla Khalil', amount: '$6,250', percent: 156, badge: '🌟' },
      { rank: 5, name: 'Reza Mahmoud', amount: '$4,200', percent: 140, badge: '🎯' },
    ],

    // Resources
    toolkit: 'Fundraising Toolkit',
    toolkitSub: 'Resources to help you succeed',

    resources: [
      {
        title: 'Email Templates',
        desc: 'Ready-to-use messages to send to potential donors.',
        icon: '📧',
      },
      {
        title: 'Social Media Badges',
        desc: 'Shareable graphics for Facebook and Instagram.',
        icon: '🖼️',
      },
      {
        title: 'Campaign Checklist',
        desc: 'Comprehensive steps to organize a successful campaign.',
        icon: '✅',
      },
      {
        title: 'Marketing Tips',
        desc: 'Strategies to increase your campaign visibility.',
        icon: '📢',
      },
      {
        title: 'Story Templates',
        desc: 'Inspiring examples to help write your own story.',
        icon: '📖',
      },
      {
        title: 'Event Guides',
        desc: 'Detailed plans for hosting a fundraising event.',
        icon: '🎪',
      },
    ],

    // CTA
    createFundraiser: 'Create Your Campaign Now',
    learnMore: 'Learn More',
    shareYourStory: 'Share Your Story',
    downloadToolkit: 'Download Toolkit',

    // Social
    shareOn: 'Share On',
    copyLink: 'Copy Link',
    linkCopied: 'Link Copied!',
  };

  const socialLinks = [
    { name: 'Facebook', icon: '👍', url: 'https://facebook.com/sharer/sharer.php?u=' },
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/intent/tweet?url=' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/?text=' },
    { name: 'Email', icon: '📧', url: 'mailto:?body=' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.deepRoyal} 100%)`,
          padding: '120px 32px 80px',
          color: colors.lightBg,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            {content.title}
          </h1>
          <p style={{ fontSize: '24px', marginBottom: '24px', opacity: 0.95, fontWeight: '300' }}>
            {content.subtitle}
          </p>
          <p style={{ fontSize: '16px', maxWidth: '700px', lineHeight: '1.6', marginBottom: '32px', opacity: 0.9 }}>
            {content.overview}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href={`${base}/give/fundraise/create`}>
              <button
                style={{
                  background: colors.hashemiteGold,
                  color: colors.darkNavy,
                  border: 'none',
                  padding: '16px 40px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {content.createFundraiser}
              </button>
            </Link>
            <button
              onClick={() => setShareOpen(!shareOpen)}
              style={{
                background: 'transparent',
                color: colors.hashemiteGold,
                border: `2px solid ${colors.hashemiteGold}`,
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.hashemiteGold;
                e.currentTarget.style.color = colors.darkNavy;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = colors.hashemiteGold;
              }}
            >
              {content.shareYourStory}
            </button>
          </div>
        </div>
      </section>

      {/* Share Section */}
      {shareOpen && (
        <section
          dir={ar ? 'rtl' : 'ltr'}
          style={{
            background: colors.ivoryBg,
            padding: '32px',
            borderBottom: `2px solid ${colors.borderFormal}`,
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: colors.darkGrayText }}>
              {content.shareOn} 🌍
            </h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => {
                    const url = `https://jhco-org.vercel.app/${locale}/give/fundraise`;
                    const text = `${content.title} - ${content.subtitle}`;
                    window.open(
                      social.url + encodeURIComponent(url) + (social.name !== 'Email' ? '' : `&subject=${encodeURIComponent(text)}`),
                      '_blank'
                    );
                  }}
                  style={{
                    background: colors.hashemiteGold,
                    color: colors.darkNavy,
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 300ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon} {social.name}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="text"
                value={`https://jhco-org.vercel.app/${locale}/give/fundraise`}
                readOnly
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: `1px solid ${colors.borderFormal}`,
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                }}
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://jhco-org.vercel.app/${locale}/give/fundraise`);
                  alert(content.linkCopied);
                }}
                style={{
                  background: colors.deepRoyal,
                  color: colors.lightBg,
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {content.copyLink}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '80px 32px', background: colors.lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: colors.hashemiteGold, fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {content.howItWorks}
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginTop: '8px', color: colors.darkGrayText }}>
              {content.howItWorksSubtitle}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {content.steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '32px',
                  borderRadius: '8px',
                  background: colors.ivoryBg,
                  border: `1px solid ${colors.borderSubtle}`,
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: colors.hashemiteGold,
                    color: colors.darkNavy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: '0 auto 16px',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors.darkGrayText }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Ideas Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '80px 32px', background: colors.ivoryBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: colors.hashemiteGold, fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {content.fundraisingIdeas}
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginTop: '8px', color: colors.darkGrayText }}>
              {content.fundraisingIdeasSub}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {content.ideas.map((idea, idx) => (
              <div
                key={idx}
                style={{
                  padding: '28px',
                  background: colors.lightBg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.borderFormal}`,
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.15)';
                  e.currentTarget.style.borderColor = colors.hashemiteGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = colors.borderFormal;
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{idea.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: colors.darkGrayText }}>
                  {idea.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6' }}>
                  {idea.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '80px 32px', background: colors.lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: colors.hashemiteGold, fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {content.successStories}
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginTop: '8px', color: colors.darkGrayText }}>
              {content.successStoriesSub}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {content.stories.map((story, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  background: colors.ivoryBg,
                  borderRadius: '8px',
                  borderLeft: `4px solid ${colors.hashemiteGold}`,
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '32px' }}>{story.avatar}</span>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.darkGrayText }}>
                      {story.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: colors.textSecondary }}>
                      {story.campaign}
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: `1px solid ${colors.borderSubtle}` }}>
                  <p style={{ fontSize: '13px', color: colors.textSecondary }}>
                    <strong>{ar ? 'المجموع:' : 'Raised:'}</strong> {story.raised} {ar ? 'من' : 'of'} {story.goal}
                  </p>
                </div>
                <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6' }}>
                  {story.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '80px 32px', background: colors.ivoryBg }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: colors.hashemiteGold, fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {content.topFundraisers}
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginTop: '8px', color: colors.darkGrayText }}>
              {content.topFundraisersSub}
            </h2>
          </div>

          <div style={{ background: colors.lightBg, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
            {content.leaderboard.map((fundraiser, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 28px',
                  borderBottom: idx < content.leaderboard.length - 1 ? `1px solid ${colors.borderSubtle}` : 'none',
                  background: idx === 0 ? `${colors.hashemiteGold}15` : 'transparent',
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${colors.hashemiteGold}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = idx === 0 ? `${colors.hashemiteGold}15` : 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                  <span style={{ fontSize: '24px' }}>{fundraiser.badge}</span>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: colors.darkGrayText }}>
                      #{fundraiser.rank} {fundraiser.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: colors.textSecondary }}>
                      {fundraiser.percent}% {ar ? 'من الهدف' : 'of goal'}
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: ar ? 'left' : 'right' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: colors.deepRoyal }}>
                    {fundraiser.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section dir={ar ? 'rtl' : 'ltr'} style={{ padding: '80px 32px', background: colors.lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: colors.hashemiteGold, fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>
              {content.toolkit}
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginTop: '8px', color: colors.darkGrayText }}>
              {content.toolkitSub}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {content.resources.map((resource, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  background: colors.ivoryBg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.borderSubtle}`,
                  transition: 'all 300ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{resource.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: colors.darkGrayText }}>
                  {resource.title}
                </h3>
                <p style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6', marginBottom: '12px' }}>
                  {resource.desc}
                </p>
                <button
                  style={{
                    background: 'transparent',
                    color: colors.deepRoyal,
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'all 300ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.hashemiteGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.deepRoyal;
                  }}
                >
                  {content.learnMore} →
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <button
              style={{
                background: colors.deepRoyal,
                color: colors.lightBg,
                border: 'none',
                padding: '16px 40px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 20, 140, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {content.downloadToolkit}
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        dir={ar ? 'rtl' : 'ltr'}
        style={{
          background: `linear-gradient(135deg, ${colors.deepRoyal} 0%, ${colors.deepCrimson} 100%)`,
          padding: '80px 32px',
          color: colors.lightBg,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' }}>
            {ar ? 'استعد لإحداث التأثير؟' : 'Ready to Make Impact?'}
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', opacity: 0.95, lineHeight: '1.6' }}>
            {ar ? 'ابدأ حملتك اليوم وشاهد كيفية حشد دعم مجتمعك لتغيير الحياة في جميع أنحاء العالم.' : 'Start your campaign today and see how rallying your community can change lives around the world.'}
          </p>
          <Link href={`${base}/give/fundraise/create`}>
            <button
              style={{
                background: colors.hashemiteGold,
                color: colors.darkNavy,
                border: 'none',
                padding: '18px 48px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 300ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {content.createFundraiser}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
