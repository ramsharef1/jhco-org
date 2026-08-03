'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors } from '@/lib/royalDesign';
import Link from 'next/link';

const content = {
  en: {
    title: 'Clothing Bank Initiative',
    subtitle: 'Restoring Dignity Through Quality Clothing',
    overview: 'The Clothing Bank Initiative is a comprehensive program dedicated to providing quality, essential clothing to vulnerable families across multiple regions. We believe that access to appropriate clothing is a fundamental human right that contributes to dignity, health, and social integration.',
    vision: 'Our Vision',
    visionText: 'To ensure that no family goes without essential clothing, and to restore dignity and confidence to those facing economic hardship through the distribution of quality garments.',
    mission: 'Our Mission',
    missionText: 'To collect, organize, and distribute quality clothing to vulnerable populations while fostering community participation and social responsibility.',
    impact: 'Program Impact',
    impactStats: [
      { number: '25,000+', label: 'People Clothed' },
      { number: '50+', label: 'Distribution Centers' },
      { number: '15', label: 'Countries Served' },
      { number: '10,000+', label: 'Volunteer Hours' }
    ],
    objectives: 'Program Objectives',
    objectivesList: [
      'Collect quality clothing donations from individuals and businesses',
      'Organize and distribute clothing to families in need',
      'Provide hygiene and dignity support through appropriate clothing',
      'Restore confidence and social integration for vulnerable populations',
      'Create employment opportunities through clothing sorting and distribution',
      'Build community engagement and social responsibility'
    ],
    howItWorks: 'How It Works',
    howItWorksPoints: [
      {
        title: 'Collection',
        description: 'We collect quality clothing from generous donors, businesses, and textile suppliers across regions.'
      },
      {
        title: 'Processing',
        description: 'Collected items are sorted, cleaned, and organized by size, type, and condition by our trained volunteers.'
      },
      {
        title: 'Distribution',
        description: 'Clothing is distributed directly to families identified through our partner organizations and community networks.'
      },
      {
        title: 'Support',
        description: 'We provide additional hygiene support and guidance to ensure recipients can maximize the benefit of their new clothing.'
      }
    ],
    beneficiaries: 'Who We Serve',
    beneficiariesText: 'The Clothing Bank Initiative serves some of the most vulnerable populations, including:',
    beneficiariesList: [
      'Families living in extreme poverty',
      'Refugee and displaced communities',
      'Orphaned and abandoned children',
      'Elderly individuals living alone',
      'Individuals transitioning from homelessness',
      'Crisis-affected populations in emergency situations'
    ],
    programs: 'Our Programs',
    programsList: [
      {
        title: 'Emergency Clothing Response',
        description: 'Rapid distribution of essential clothing during crises and disasters.'
      },
      {
        title: 'Seasonal Clothing Support',
        description: 'Providing appropriate seasonal clothing to help families prepare for weather changes.'
      },
      {
        title: 'School Clothing Program',
        description: 'Supporting students with uniforms and appropriate attire for educational success.'
      },
      {
        title: 'Special Needs Program',
        description: 'Providing clothing tailored to specific needs including maternity wear and medical requirements.'
      }
    ],
    partnerships: 'Partnerships & Engagement',
    partnershipsText: 'We work with numerous partners to maximize our impact:',
    partnersList: [
      'International textile companies and manufacturers',
      'Local businesses and retailers',
      'Community organizations and NGOs',
      'Religious institutions and community groups',
      'Individual donors and volunteers',
      'Government agencies and social services'
    ],
    getInvolved: 'Get Involved',
    getInvolvedText: 'There are many ways you can support the Clothing Bank Initiative:',
    getInvolvedList: [
      'Donate quality clothing items',
      'Volunteer for collection and distribution activities',
      'Partner with your business or organization',
      'Support through financial contributions',
      'Spread awareness in your community',
      'Organize donation drives'
    ],
    stories: 'Impact Stories',
    storiesText: 'Real stories of change and dignity restoration through our Clothing Bank Initiative.',
    ctaTitle: 'Make a Difference Today',
    ctaText: 'Help us provide dignity and essential clothing to vulnerable families around the world.',
    ctaButton: 'Support This Program'
  },
  ar: {
    title: 'مبادرة بنك الملابس',
    subtitle: 'استعادة الكرامة من خلال الملابس عالية الجودة',
    overview: 'مبادرة بنك الملابس هي برنامج شامل مكرس لتوفير ملابس عالية الجودة وضرورية للأسر الضعيفة عبر مناطق متعددة. نعتقد أن الوصول إلى الملابس المناسبة هو حق إنساني أساسي يساهم في الكرامة والصحة والتكامل الاجتماعي.',
    vision: 'رؤيتنا',
    visionText: 'ضمان عدم افتقار أي أسرة للملابس الأساسية، واستعادة الكرامة والثقة لمن يواجهون الصعوبات الاقتصادية من خلال توزيع الملابس عالية الجودة.',
    mission: 'مهمتنا',
    missionText: 'جمع وتنظيم وتوزيع الملابس عالية الجودة على السكان الضعفاء مع تعزيز المشاركة المجتمعية والمسؤولية الاجتماعية.',
    impact: 'تأثير البرنامج',
    impactStats: [
      { number: '25,000+', label: 'شخص مُكسى' },
      { number: '50+', label: 'مركز توزيع' },
      { number: '15', label: 'دولة مخدومة' },
      { number: '10,000+', label: 'ساعة تطوع' }
    ],
    objectives: 'أهداف البرنامج',
    objectivesList: [
      'جمع تبرعات الملابس عالية الجودة من الأفراد والشركات',
      'تنظيم وتوزيع الملابس على الأسر المحتاجة',
      'توفير دعم النظافة والكرامة من خلال الملابس المناسبة',
      'استعادة الثقة والتكامل الاجتماعي للفئات الضعيفة',
      'خلق فرص عمل من خلال فرز وتوزيع الملابس',
      'بناء المشاركة المجتمعية والمسؤولية الاجتماعية'
    ],
    howItWorks: 'كيف يعمل البرنامج',
    howItWorksPoints: [
      {
        title: 'الجمع',
        description: 'نجمع الملابس عالية الجودة من المتبرعين الكرماء والشركات والموردين النسيجيين عبر المناطق.'
      },
      {
        title: 'المعالجة',
        description: 'يتم فرز المتبرعين به وتنظيفهم وتنظيمهم حسب الحجم والنوع والحالة من قبل متطوعينا المدربين.'
      },
      {
        title: 'التوزيع',
        description: 'يتم توزيع الملابس مباشرة على الأسر المحددة من خلال منظماتنا الشريكة وشبكات المجتمع.'
      },
      {
        title: 'الدعم',
        description: 'نوفر دعم النظافة الإضافي والتوجيه لضمان تمكن المستفيدين من الاستفادة القصوى من ملابسهم الجديدة.'
      }
    ],
    beneficiaries: 'من نخدم',
    beneficiariesText: 'تخدم مبادرة بنك الملابس بعضاً من الفئات الأكثر ضعفاً، بما في ذلك:',
    beneficiariesList: [
      'الأسر التي تعيش في الفقر المدقع',
      'مجتمعات اللاجئين والنازحين',
      'الأطفال الأيتام والمهملين',
      'الأفراد المسنون الذين يعيشون بمفردهم',
      'الأفراد الذين ينتقلون من الشرد',
      'السكان المتضررين من الأزمات والطوارئ'
    ],
    programs: 'برامجنا',
    programsList: [
      {
        title: 'الاستجابة الطارئة للملابس',
        description: 'توزيع سريع للملابس الأساسية أثناء الأزمات والكوارث.'
      },
      {
        title: 'دعم الملابس الموسمية',
        description: 'توفير ملابس مناسبة موسمية لمساعدة الأسر على الاستعداد للتغيرات المناخية.'
      },
      {
        title: 'برنامج ملابس المدارس',
        description: 'دعم الطلاب بالزي المدرسي والملابس المناسبة للنجاح التعليمي.'
      },
      {
        title: 'برنامج الاحتياجات الخاصة',
        description: 'توفير ملابس مصممة خصيصاً للاحتياجات الخاصة بما في ذلك ملابس الأمومة والمتطلبات الطبية.'
      }
    ],
    partnerships: 'الشراكات والمشاركة',
    partnershipsText: 'نعمل مع عدد من الشركاء لتعظيم تأثيرنا:',
    partnersList: [
      'شركات وشركات مصنعة للنسيج العالمية',
      'الشركات والمتاجر المحلية',
      'المنظمات المجتمعية والمنظمات غير الحكومية',
      'المؤسسات الدينية ومجموعات المجتمع',
      'المتبرعين الأفراد والمتطوعين',
      'الوكالات الحكومية والخدمات الاجتماعية'
    ],
    getInvolved: 'شارك معنا',
    getInvolvedText: 'هناك عدة طرق يمكنك من خلالها دعم مبادرة بنك الملابس:',
    getInvolvedList: [
      'تبرع بملابس عالية الجودة',
      'التطوع في أنشطة الجمع والتوزيع',
      'الشراكة مع شركتك أو منظمتك',
      'الدعم من خلال المساهمات المالية',
      'نشر الوعي في مجتمعك',
      'تنظيم حملات التبرع'
    ],
    stories: 'قصص التأثير',
    storiesText: 'قصص حقيقية عن التغيير واستعادة الكرامة من خلال مبادرة بنك الملابس.',
    ctaTitle: 'احدث فرقاً اليوم',
    ctaText: 'ساعدنا في توفير الكرامة والملابس الأساسية للأسر الضعيفة حول العالم.',
    ctaButton: 'ادعم هذا البرنامج'
  }
};

export default function ClothingBankProgram({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const text = content[locale as keyof typeof content] || content.en;

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.warmGold} 0%, ${royalColors.darkNavy} 100%)`,
          color: 'white',
          padding: '120px 32px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', marginBottom: '24px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            {text.title}
          </h1>
          <p style={{ fontSize: '24px', color: royalColors.warmGold, marginBottom: '16px', fontWeight: '300' }}>
            {text.subtitle}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3d3d3d', marginBottom: '40px', maxWidth: '900px' }}>
          {text.overview}
        </p>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
              {text.vision}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
              {text.visionText}
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
              {text.mission}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
              {text.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{ backgroundColor: royalColors.lightCream, padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '60px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            {text.impact}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {text.impactStats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '48px', fontWeight: '700', color: royalColors.warmGold, marginBottom: '12px' }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: '16px', color: royalColors.darkNavy, fontWeight: '500' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
          {text.objectives}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {text.objectivesList.map((obj, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: '#f9f7f4', borderRadius: '8px' }}>
              <div style={{ fontSize: '28px', flexShrink: 0 }}>✓</div>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', margin: 0 }}>
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: royalColors.lightCream, padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '60px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            {text.howItWorks}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {text.howItWorksPoints.map((point, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: royalColors.darkNavy, marginBottom: '16px' }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
          {text.beneficiaries}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '32px' }}>
          {text.beneficiariesText}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {text.beneficiariesList.map((item, idx) => (
            <li key={idx} style={{ fontSize: '16px', color: '#555', paddingLeft: '32px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: royalColors.warmGold, fontWeight: 'bold' }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Programs */}
      <section style={{ backgroundColor: royalColors.lightCream, padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '60px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            {text.programs}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {text.programsList.map((prog, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: royalColors.darkNavy, marginBottom: '16px' }}>
                  {prog.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
                  {prog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
          {text.partnerships}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '32px' }}>
          {text.partnershipsText}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {text.partnersList.map((partner, idx) => (
            <div key={idx} style={{ padding: '24px', backgroundColor: '#f9f7f4', borderRadius: '8px', borderLeft: `4px solid ${royalColors.warmGold}` }}>
              <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
                {partner}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section style={{ backgroundColor: royalColors.darkNavy, color: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '32px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
            {text.getInvolved}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#d4d4d4', marginBottom: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            {text.getInvolvedText}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {text.getInvolvedList.map((item, idx) => (
              <div key={idx} style={{ padding: '24px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', borderTop: `3px solid ${royalColors.warmGold}` }}>
                <p style={{ fontSize: '16px', color: 'white', margin: 0 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: royalColors.lightCream, padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: royalColors.darkNavy, marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {text.ctaTitle}
          </h2>
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '40px', lineHeight: '1.8' }}>
            {text.ctaText}
          </p>
          <Link
            href={`/${locale}/get-involved/donate`}
            style={{
              display: 'inline-block',
              padding: '16px 48px',
              backgroundColor: royalColors.warmGold,
              color: royalColors.darkNavy,
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c4941f';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 175, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = royalColors.warmGold;
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
            }}
          >
            {text.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
