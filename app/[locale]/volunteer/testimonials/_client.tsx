'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VolunteerTestimonialsPage({
  params,
}: {
  params: { locale: string };
}) {
  const ar = params.locale === 'ar';
  const base = `/${params.locale}`;
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      quote: ar
        ? 'التطوع مع الهيئة غيّر حياتي بشكل جذري. شعرت بأن عملي له معنى حقيقي وأثر ملموس على حياة الناس.'
        : 'Volunteering with JHCO transformed my life completely. I felt my work had real meaning and made a tangible difference in people\'s lives.',
      name: ar ? 'فاطمة أحمد' : 'Fatima Ahmad',
      location: ar ? 'عمّان، الأردن' : 'Amman, Jordan',
      duration: ar ? '2 سنة' : '2 years',
      role: ar ? 'معلمة متطوعة' : 'Volunteer Teacher',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      quote: ar
        ? 'كانت هذه تجربة لا تُنسى. تعلمت الكثير وتبادلت الحب والرحمة مع مئات العائلات.'
        : 'It was an unforgettable experience. I learned so much and shared love and compassion with hundreds of families.',
      name: ar ? 'محمد علي' : 'Mohammad Ali',
      location: ar ? 'بيروت، لبنان' : 'Beirut, Lebanon',
      duration: ar ? '18 شهر' : '18 months',
      role: ar ? 'متطوع رعاية صحية' : 'Healthcare Volunteer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      quote: ar
        ? 'كل يوم من التطوع كان فرصة للنمو الشخصي والمساهمة في بناء مستقبل أفضل.'
        : 'Every day of volunteering was an opportunity for personal growth and contributing to building a better future.',
      name: ar ? 'سارة محمود' : 'Sarah Mahmoud',
      location: ar ? 'القاهرة، مصر' : 'Cairo, Egypt',
      duration: ar ? '3 سنوات' : '3 years',
      role: ar ? 'منسقة برامج' : 'Program Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      quote: ar
        ? 'الهيئة لم تعطني فقط الفرصة للمساهمة، بل أعطتني عائلة عالمية من الأشخاص المتحمسين والمخلصين.'
        : 'JHCO didn\'t just give me the opportunity to contribute, it gave me a global family of passionate, dedicated people.',
      name: ar ? 'ياسمين إبراهيم' : 'Yasmine Ibrahim',
      location: ar ? 'دبي، الإمارات' : 'Dubai, UAE',
      duration: ar ? 'سنة' : '1 year',
      role: ar ? 'متطوعة تطوير مجتمعي' : 'Community Development Volunteer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      quote: ar
        ? 'ما بدأ كفرصة تطوع أصبح مسار حياتي. اكتشفت شغفي ورسالتي من خلال هذا العمل الإنساني.'
        : 'What started as a volunteer opportunity became my life path. I discovered my passion and purpose through this humanitarian work.',
      name: ar ? 'علي حسين' : 'Ali Hussein',
      location: ar ? 'إسطنبول، تركيا' : 'Istanbul, Turkey',
      duration: ar ? '2.5 سنة' : '2.5 years',
      role: ar ? 'متطوع البنية التحتية' : 'Infrastructure Volunteer',
      image: 'https://images.unsplash.com/photo-1500922854604-40eb0e323506?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      quote: ar
        ? 'الجزء الأجمل هو رؤية الابتسامة على وجوه الأطفال والعائلات التي ساعدنا. هذا ما يدفعني للاستمرار.'
        : 'The most beautiful part is seeing the smiles on the faces of children and families we helped. That\'s what keeps me going.',
      name: ar ? 'ليلى أحمد' : 'Leila Ahmad',
      location: ar ? 'بغداد، العراق' : 'Baghdad, Iraq',
      duration: ar ? '1.5 سنة' : '1.5 years',
      role: ar ? 'متطوعة رعاية الأطفال' : 'Childcare Volunteer',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
    },
    {
      id: 7,
      quote: ar
        ? 'العمل مع فريق متعدد الثقافات والخلفيات علمني الكثير عن التسامح والاحترام المتبادل.'
        : 'Working with a multicultural and diverse team taught me so much about tolerance and mutual respect.',
      name: ar ? 'خديجة محمد' : 'Khadija Mohammed',
      location: ar ? 'الخرطوم، السودان' : 'Khartoum, Sudan',
      duration: ar ? '2 سنة' : '2 years',
      role: ar ? 'متطوعة التدريب' : 'Training Volunteer',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
    },
    {
      id: 8,
      quote: ar
        ? 'كل تجربة تطوع تركت بصمة في قلبي. أنا ممتن للهيئة لإعطائي هذه الفرصة الثمينة.'
        : 'Every volunteer experience left a mark on my heart. I\'m grateful to JHCO for giving me this precious opportunity.',
      name: ar ? 'حمزة إبراهيم' : 'Hamza Ibrahim',
      location: ar ? 'عمّان، الأردن' : 'Amman, Jordan',
      duration: ar ? '3 سنوات' : '3 years',
      role: ar ? 'متطوع إدارة المشاريع' : 'Project Management Volunteer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: 9,
      quote: ar
        ? 'التطوع لم يكن عملاً، بل كان دعوة لتغيير العالم والمساهمة في صنع فارق حقيقي.'
        : 'Volunteering wasn\'t work, it was a calling to change the world and contribute to making a real difference.',
      name: ar ? 'دينا أحمد' : 'Dina Ahmed',
      location: ar ? 'بيروت، لبنان' : 'Beirut, Lebanon',
      duration: ar ? 'سنة' : '1 year',
      role: ar ? 'متطوعة التوعية' : 'Awareness Volunteer',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=400&fit=crop',
    },
    {
      id: 10,
      quote: ar
        ? 'أنا فخور بكل لحظة قضيتها في خدمة الإنسانية. هذا التطوع غيّر منظوري للحياة.'
        : 'I\'m proud of every moment I spent serving humanity. This volunteering changed my perspective on life.',
      name: ar ? 'عماد علي' : 'Emad Ali',
      location: ar ? 'تونس، تونس' : 'Tunis, Tunisia',
      duration: ar ? '2.5 سنة' : '2.5 years',
      role: ar ? 'متطوع الاتصالات' : 'Communications Volunteer',
      image: 'https://images.unsplash.com/photo-1507539332640-e4984dc63dd3?w=400&h=400&fit=crop',
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: ar ? 'قصة فاطمة - تأثير التطوع' : 'Fatima\'s Story - Impact of Volunteering',
      duration: ar ? '4 دقائق' : '4 minutes',
      thumbnail: 'https://images.unsplash.com/photo-1516738901601-b51b3834ba3b?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: ar ? 'رحلة محمد الإنسانية' : 'Mohammad\'s Humanitarian Journey',
      duration: ar ? '5 دقائق' : '5 minutes',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: ar ? 'صوت الفارق: تجارب المتطوعين' : 'Voice of Change: Volunteers\' Experiences',
      duration: ar ? '6 دقائق' : '6 minutes',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop',
    },
  ];

  const stats = [
    {
      number: ar ? '12,500+' : '12,500+',
      label: ar ? 'متطوع نشط' : 'Active Volunteers',
      icon: '👥',
    },
    {
      number: ar ? '2M+' : '2M+',
      label: ar ? 'ساعة عمل تطوعي' : 'Volunteer Hours Served',
      icon: '⏱️',
    },
    {
      number: ar ? '150+' : '150+',
      label: ar ? 'دول' : 'Countries',
      icon: '🌍',
    },
    {
      number: ar ? '50K+' : '50K+',
      label: ar ? 'حياة متأثرة مباشرة' : 'Lives Directly Impacted',
      icon: '❤️',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)',
          padding: '120px 32px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 70%)',
            borderRadius: '50%',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontSize: '16px',
              color: '#d4af37',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}
          >
            {ar ? 'شهادات متطوعينا' : 'HEAR FROM OUR VOLUNTEERS'}
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              margin: '0 0 32px 0',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.1',
            }}
          >
            {ar ? 'قصص الإلهام والتأثير' : 'Stories of Impact & Inspiration'}
          </h1>

          <p
            style={{
              fontSize: '22px',
              lineHeight: '1.6',
              marginBottom: '48px',
              color: '#e8e4db',
              maxWidth: '700px',
              margin: '0 auto 48px',
            }}
          >
            {ar
              ? 'استمع إلى قصص المتطوعين الحقيقية والتأثير الذي صنعوه في حياة الملايين'
              : 'Listen to real stories from our volunteers and the impact they\'ve made in millions of lives'}
          </p>

          <Link
            href={`${base}/get-involved/volunteer`}
            style={{
              display: 'inline-block',
              padding: '18px 48px',
              backgroundColor: '#d4af37',
              color: '#0a1428',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              border: '2px solid #d4af37',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f4c430';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 175, 55, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d4af37';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {ar ? 'ابدأ التطوع' : 'Start Volunteering'}
          </Link>
        </div>
      </section>

      {/* Volunteer Statistics Section */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '300',
              color: '#0a1428',
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
            }}
          >
            {ar ? 'أرقام التطوع' : 'Volunteer Impact by Numbers'}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#6b6b6b',
              textAlign: 'center',
              marginBottom: '64px',
              maxWidth: '600px',
              margin: '0 auto 64px',
            }}
          >
            {ar
              ? 'مساهمة متطوعينا في تحقيق نتائج استثنائية حول العالم'
              : 'Our volunteers\' extraordinary contributions creating global impact'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '32px',
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  padding: '48px 32px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(10,20,40,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.15)';
                  el.style.borderColor = '#d4af37';
                  el.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = '0 2px 8px rgba(10,20,40,0.08)';
                  el.style.borderColor = 'transparent';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{stat.icon}</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#0a1428', marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '16px', color: '#6b6b6b', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px', borderTop: '2px solid #d4af37' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '300',
              color: '#0a1428',
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
            }}
          >
            {ar ? 'شهادات فيديو' : 'Video Testimonials'}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#6b6b6b',
              textAlign: 'center',
              marginBottom: '64px',
              maxWidth: '600px',
              margin: '0 auto 64px',
            }}
          >
            {ar ? 'استمع مباشرة إلى قصص المتطوعين في كلماتهم الخاصة' : 'Hear directly from our volunteers in their own words'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginBottom: '48px',
            }}
          >
            {videoTestimonials.map((video, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'scale(1.02)';
                  el.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'scale(1)';
                  el.style.boxShadow = '0 4px 12px rgba(10,20,40,0.1)';
                }}
                onClick={() => setSelectedVideo(video.id)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(10, 20, 40, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(10, 20, 40, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = 'rgba(10, 20, 40, 0.3)';
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#d4af37',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    ▶
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '24px',
                    color: 'white',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      fontFamily: ar ? 'inherit' : 'Georgia, serif',
                    }}
                  >
                    {video.title}
                  </h3>
                  <p style={{ fontSize: '14px', margin: '0', opacity: '0.8' }}>
                    {video.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Cards Section */}
      <section style={{ backgroundColor: '#faf8f5', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '300',
              color: '#0a1428',
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
            }}
          >
            {ar ? 'أصوات متطوعينا' : 'Voices of Our Volunteers'}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#6b6b6b',
              textAlign: 'center',
              marginBottom: '64px',
              maxWidth: '600px',
              margin: '0 auto 64px',
            }}
          >
            {ar
              ? 'اكتشف كيف غيّر التطوع حياة الآلاف من الأشخاص حول العالم'
              : 'Discover how volunteering has transformed the lives of thousands around the world'}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(10,20,40,0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transform: hoveredCard === idx ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  borderColor: hoveredCard === idx ? '#d4af37' : 'transparent',
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === idx ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: ar ? '12px' : 'auto',
                      left: ar ? 'auto' : '12px',
                      backgroundColor: '#d4af37',
                      color: '#0a1428',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  {/* Quote */}
                  <div
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: '#2c2c2c',
                      marginBottom: '24px',
                      fontStyle: 'italic',
                      borderLeft: `4px solid #d4af37`,
                      paddingLeft: '16px',
                      minHeight: '100px',
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: 'linear-gradient(to right, #d4af37, transparent)',
                      marginBottom: '24px',
                    }}
                  />

                  {/* Volunteer Info */}
                  <div style={{ marginBottom: '16px' }}>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#0a1428',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b6b6b', margin: '0 0 4px 0' }}>
                      {testimonial.location}
                    </p>
                    <div
                      style={{
                        fontSize: '14px',
                        color: '#d4af37',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span>⏱️</span> {testimonial.duration}
                    </div>
                  </div>

                  {/* Hover Action */}
                  {hoveredCard === idx && (
                    <button
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#d4af37',
                        color: '#0a1428',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '700',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '16px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f4c430';
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#d4af37';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {ar ? 'اقرأ المزيد' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)',
          padding: '120px 32px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 70%)',
            borderRadius: '50%',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: '56px',
              fontWeight: '300',
              margin: '0 0 32px 0',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.1',
            }}
          >
            {ar ? 'هل أنت مستعد لصنع فرق حقيقي؟' : 'Ready to Make a Real Difference?'}
          </h2>

          <p
            style={{
              fontSize: '20px',
              lineHeight: '1.6',
              marginBottom: '48px',
              color: '#e8e4db',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            {ar
              ? 'انضم إلى آلاف المتطوعين حول العالم في تغيير حياة الملايين'
              : 'Join thousands of volunteers worldwide in transforming millions of lives'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`${base}/get-involved/volunteer`}
              style={{
                display: 'inline-block',
                padding: '18px 48px',
                backgroundColor: '#d4af37',
                color: '#0a1428',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                border: '2px solid #d4af37',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f4c430';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 175, 55, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {ar ? 'ابدأ التطوع' : 'Start Volunteering'}
            </Link>
            <Link
              href={`${base}/contact`}
              style={{
                display: 'inline-block',
                padding: '18px 48px',
                backgroundColor: 'transparent',
                color: '#d4af37',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                border: '2px solid #d4af37',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {ar ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
