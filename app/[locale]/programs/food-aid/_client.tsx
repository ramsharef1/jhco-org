'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';

const foodAidContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Food Aid Program',
      subtitle: 'Ensuring Food Security for Vulnerable Communities',
      description: 'Combating hunger and malnutrition through direct assistance and sustainable food security initiatives',
    },

    // Overview Section
    overview: {
      title: 'Our Food Aid Mission',
      description: 'Food security is fundamental to human dignity and development. JHCO\'s food aid program is dedicated to preventing hunger and malnutrition among vulnerable populations by providing emergency food assistance, nutrition support, and sustainable livelihood solutions across multiple regions.',
      keyPoint: 'We believe no one should go hungry. Every meal is a step towards a healthier, more resilient community.',
    },

    // Impact Stats Section
    impact: {
      title: 'Food Aid Impact at a Glance',
      stats: [
        { number: '250,000+', label: 'People Fed Annually', color: royalColors.deepRoyal },
        { number: '45,000+', label: 'Families Assisted', color: royalColors.hashemiteGold },
        { number: '1,200+', label: 'Distribution Points', color: royalColors.charityRed },
        { number: '8,500+', label: 'Tonnes of Food Distributed', color: royalColors.compassionTeal },
      ],
    },

    // Core Programs Section
    programs: {
      title: 'Our Food Aid Initiatives',
      description: 'JHCO implements comprehensive food assistance programs targeting acute hunger, chronic malnutrition, and food system resilience.',
      items: [
        {
          id: 1,
          icon: '🍎',
          name: 'Emergency Food Assistance',
          description: 'Rapid food distribution in crisis situations and emergency contexts',
          features: ['Crisis response', 'Survival rations', 'Nutritional supplements', 'Emergency coordination'],
        },
        {
          id: 2,
          icon: '👶',
          name: 'Nutrition Support for Children',
          description: 'Specialized nutrition programs for vulnerable children and nursing mothers',
          features: ['Fortified foods', 'Micronutrient supplements', 'Maternal nutrition', 'Early childhood support'],
        },
        {
          id: 3,
          icon: '👨‍🌾',
          name: 'Agricultural Support',
          description: 'Enabling local food production through farming assistance and training',
          features: ['Seeds provision', 'Farming training', 'Equipment support', 'Crop insurance'],
        },
        {
          id: 4,
          icon: '🏪',
          name: 'School Feeding Program',
          description: 'Nutritious meals for school children to improve attendance and learning',
          features: ['Daily school meals', 'Nutrition education', 'Local sourcing', 'Feeding infrastructure'],
        },
        {
          id: 5,
          icon: '🥗',
          name: 'Community Kitchen Initiative',
          description: 'Establishing community kitchens for food preparation and skill training',
          features: ['Communal cooking', 'Nutrition awareness', 'Employment training', 'Food preparation skills'],
        },
        {
          id: 6,
          icon: '🌱',
          name: 'Food Security & Resilience',
          description: 'Building long-term food security through sustainable agricultural practices',
          features: ['Livelihood development', 'Water management', 'Market linkages', 'Climate adaptation'],
        },
      ],
    },

    // Program Details Section
    details: {
      title: 'Program Components & Objectives',
      sections: [
        {
          name: 'Emergency Response',
          icon: '🚨',
          objectives: [
            'Provide immediate food assistance within 48 hours of crisis declaration',
            'Reach 50,000+ people in emergency situations annually',
            'Ensure equitable distribution across vulnerable groups',
            'Coordinate with local and international humanitarian partners',
          ],
        },
        {
          name: 'Nutrition Programs',
          icon: '🥛',
          objectives: [
            'Reduce child malnutrition by 40% in target areas',
            'Support 20,000+ nursing mothers with nutrition packages',
            'Provide micronutrient supplementation to 100,000+ children',
            'Conduct nutrition education in 500+ communities',
          ],
        },
        {
          name: 'Livelihood Support',
          icon: '💼',
          objectives: [
            'Enable 15,000+ households to produce their own food',
            'Provide agricultural training to 8,000+ farmers',
            'Establish 50+ community gardens and farms',
            'Create 2,000+ sustainable livelihood opportunities',
          ],
        },
        {
          name: 'School Meals',
          icon: '🍽️',
          objectives: [
            'Provide daily meals to 30,000+ school children',
            'Improve school enrollment by 35%',
            'Enhance learning outcomes through nutrition',
            'Source 70% of meals from local producers',
          ],
        },
      ],
    },

    // How It Works Section
    howItWorks: {
      title: 'How Our Food Aid Program Works',
      process: [
        {
          step: '01',
          title: 'Needs Assessment',
          description: 'We conduct thorough assessments to identify vulnerable communities and food insecurity patterns.',
        },
        {
          step: '02',
          title: 'Response Planning',
          description: 'Develop targeted interventions based on local context, food availability, and community needs.',
        },
        {
          step: '03',
          title: 'Distribution Network',
          description: 'Establish secure and efficient distribution channels ensuring food reaches those most in need.',
        },
        {
          step: '04',
          title: 'Monitoring & Support',
          description: 'Continuously monitor impact, provide nutritional counseling, and adjust programs as needed.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Join Us in Ending Hunger',
      description: 'Your support directly feeds families and builds food security for vulnerable communities. Together, we can ensure no one goes hungry.',
      button: 'Donate Now',
      secondary: 'Learn More',
    },

    // FAQ Section
    faq: [
      {
        q: 'Who does the food aid program serve?',
        a: 'We serve vulnerable populations including refugees, internally displaced persons, economically disadvantaged families, children, and elderly populations facing food insecurity.',
      },
      {
        q: 'What types of food does JHCO distribute?',
        a: 'We distribute nutritious staple foods including grains, pulses, fortified foods, micronutrient supplements, and cooking oil. We prioritize locally-sourced, culturally appropriate foods.',
      },
      {
        q: 'How does JHCO ensure food safety and quality?',
        a: 'All food items undergo rigorous quality checks, proper storage handling, and are sourced from verified suppliers. We comply with international food safety standards.',
      },
      {
        q: 'Where does the program operate?',
        a: 'Our food aid programs operate in 30+ countries across the Middle East, North Africa, Sub-Saharan Africa, and Asia, with focus on crisis-affected and vulnerable regions.',
      },
      {
        q: 'Can I support a specific beneficiary family?',
        a: 'Yes, through our sponsorship program you can provide ongoing food support to a family, including nutritional supplements and agricultural inputs when applicable.',
      },
      {
        q: 'How does the program address long-term food security?',
        a: 'Beyond emergency assistance, we implement agricultural training, livelihood development, and community kitchen initiatives to build sustainable food security and reduce dependency on aid.',
      },
    ],
  },

  ar: {
    // Hero Section
    hero: {
      title: 'برنامج المساعدات الغذائية',
      subtitle: 'ضمان الأمن الغذائي للمجتمعات الضعيفة',
      description: 'محاربة الجوع وسوء التغذية من خلال المساعدات المباشرة والمبادرات المستدامة للأمن الغذائي',
    },

    // Overview Section
    overview: {
      title: 'مهمتنا في المساعدات الغذائية',
      description: 'الأمن الغذائي هو أساس الكرامة الإنسانية والتنمية. برنامج المساعدات الغذائية بـ JHCO مكرس لمنع الجوع وسوء التغذية بين السكان الضعفاء من خلال توفير المساعدات الغذائية الطارئة والدعم التغذوي والحلول المستدامة للدخل عبر مناطق متعددة.',
      keyPoint: 'نؤمن بأنه لا يجب أن يجوع أحد. كل وجبة خطوة نحو مجتمع أكثر صحة ومرونة.',
    },

    // Impact Stats Section
    impact: {
      title: 'تأثير برنامج المساعدات الغذائية',
      stats: [
        { number: '250,000+', label: 'شخص تم إطعامهم سنويا', color: royalColors.deepRoyal },
        { number: '45,000+', label: 'عائلة تلقت المساعدة', color: royalColors.hashemiteGold },
        { number: '1,200+', label: 'نقطة توزيع', color: royalColors.charityRed },
        { number: '8,500+', label: 'طن غذاء موزع', color: royalColors.compassionTeal },
      ],
    },

    // Core Programs Section
    programs: {
      title: 'مبادرات المساعدات الغذائية',
      description: 'ينفذ JHCO برامج مساعدات غذائية شاملة تستهدف الجوع الحاد وسوء التغذية المزمن ومرونة النظم الغذائية.',
      items: [
        {
          id: 1,
          icon: '🍎',
          name: 'المساعدات الغذائية الطارئة',
          description: 'توزيع سريع للغذاء في حالات الأزمات والحالات الطارئة',
          features: ['الاستجابة للأزمات', 'حصص البقاء', 'المكملات الغذائية', 'التنسيق الطارئ'],
        },
        {
          id: 2,
          icon: '👶',
          name: 'دعم التغذية للأطفال',
          description: 'برامج تغذية متخصصة للأطفال الضعفاء والأمهات المرضعات',
          features: ['الأغذية المحصنة', 'المكملات الدقيقة', 'تغذية الأم', 'دعم الطفولة المبكرة'],
        },
        {
          id: 3,
          icon: '👨‍🌾',
          name: 'دعم الزراعة',
          description: 'تمكين الإنتاج الغذائي المحلي من خلال مساعدة وتدريب المزارعين',
          features: ['توفير البذور', 'تدريب زراعي', 'دعم المعدات', 'تأمين المحاصيل'],
        },
        {
          id: 4,
          icon: '🏪',
          name: 'برنامج التغذية المدرسية',
          description: 'وجبات مغذية للأطفال في المدارس لتحسين الحضور والتعلم',
          features: ['وجبات مدرسية يومية', 'تثقيف غذائي', 'التوريد المحلي', 'بنية غذائية'],
        },
        {
          id: 5,
          icon: '🥗',
          name: 'مبادرة المطابخ المجتمعية',
          description: 'إنشاء مطابخ مجتمعية لتحضير الغذاء والتدريب المهني',
          features: ['الطهي المجتمعي', 'الوعي الغذائي', 'تدريب التوظيف', 'مهارات إعداد الطعام'],
        },
        {
          id: 6,
          icon: '🌱',
          name: 'الأمن الغذائي والمرونة',
          description: 'بناء الأمن الغذائي طويل الأجل من خلال الممارسات الزراعية المستدامة',
          features: ['تطوير الدخل', 'إدارة المياه', 'روابط السوق', 'التكيف المناخي'],
        },
      ],
    },

    // Program Details Section
    details: {
      title: 'مكونات البرنامج والأهداف',
      sections: [
        {
          name: 'الاستجابة الطارئة',
          icon: '🚨',
          objectives: [
            'توفير المساعدات الغذائية الفورية في غضون 48 ساعة من إعلان الأزمة',
            'الوصول إلى 50,000+ شخص في حالات الطوارئ سنويا',
            'ضمان التوزيع العادل على جميع الفئات الضعيفة',
            'التنسيق مع الشركاء الإنسانيين المحليين والدوليين',
          ],
        },
        {
          name: 'برامج التغذية',
          icon: '🥛',
          objectives: [
            'تقليل سوء التغذية لدى الأطفال بنسبة 40% في المناطق المستهدفة',
            'دعم 20,000+ أم مرضعة ببرامج تغذية',
            'توفير المكملات الدقيقة إلى 100,000+ طفل',
            'إجراء تثقيف غذائي في 500+ مجتمع',
          ],
        },
        {
          name: 'دعم الدخل',
          icon: '💼',
          objectives: [
            'تمكين 15,000+ أسرة لإنتاج غذائها الخاص',
            'توفير تدريب زراعي لـ 8,000+ مزارع',
            'إنشاء 50+ حديقة وملحق الثروة الحيوانية مجتمعي',
            'إنشاء 2,000+ فرصة معيشة مستدامة',
          ],
        },
        {
          name: 'الوجبات المدرسية',
          icon: '🍽️',
          objectives: [
            'توفير وجبات يومية لـ 30,000+ طفل مدرسي',
            'تحسين الالتحاق بالمدارس بنسبة 35%',
            'تحسين نتائج التعلم من خلال التغذية',
            'الحصول على 70% من الوجبات من المنتجين المحليين',
          ],
        },
      ],
    },

    // How It Works Section
    howItWorks: {
      title: 'كيفية عمل برنامج المساعدات الغذائية',
      process: [
        {
          step: '01',
          title: 'تقييم الاحتياجات',
          description: 'نجري تقييمات شاملة لتحديد المجتمعات الضعيفة وأنماط انعدام الأمن الغذائي.',
        },
        {
          step: '02',
          title: 'تخطيط الاستجابة',
          description: 'تطوير تدخلات موجهة بناءً على السياق المحلي وتوفر الغذاء واحتياجات المجتمع.',
        },
        {
          step: '03',
          title: 'شبكة التوزيع',
          description: 'إنشاء قنوات توزيع آمنة وفعالة تضمن وصول الغذاء إلى المحتاجين.',
        },
        {
          step: '04',
          title: 'المراقبة والدعم',
          description: 'مراقبة التأثير بشكل مستمر وتقديم الاستشارات الغذائية وتعديل البرامج حسب الحاجة.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'انضم إلينا في إنهاء الجوع',
      description: 'يذهب دعمك مباشرة إلى إطعام العائلات وبناء الأمن الغذائي للمجتمعات الضعيفة. معاً، يمكننا ضمان عدم جوع أحد.',
      button: 'تبرع الآن',
      secondary: 'اعرف المزيد',
    },

    // FAQ Section
    faq: [
      {
        q: 'من يخدم برنامج المساعدات الغذائية؟',
        a: 'نخدم السكان الضعفاء بما فيهم اللاجئون والأشخاص المشردون داخليا والأسر المحرومة اقتصاديا والأطفال والمسنون الذين يواجهون انعدام الأمن الغذائي.',
      },
      {
        q: 'ما أنواع الأطعمة التي يوزعها JHCO؟',
        a: 'نوزع الأطعمة الأساسية المغذية بما فيها الحبوب والبقوليات والأطعمة المحصنة والمكملات الدقيقة وزيت الطهي. نولي الأولوية للأطعمة المحلية والملائمة ثقافيا.',
      },
      {
        q: 'كيف يضمن JHCO سلامة وجودة الغذاء؟',
        a: 'تخضع جميع المواد الغذائية لفحوصات جودة صارمة والتعامل مع التخزين السليم وتوريدها من موردين معتمدين. نمتثل لمعايير سلامة الغذاء الدولية.',
      },
      {
        q: 'أين يعمل البرنامج؟',
        a: 'تعمل برامجنا في 30+ دولة عبر الشرق الأوسط وشمال أفريقيا وأفريقيا جنوب الصحراء وآسيا، مع التركيز على المناطق المتأثرة بالأزمات والمناطق الضعيفة.',
      },
      {
        q: 'هل يمكنني دعم عائلة مستفيدة معينة؟',
        a: 'نعم، من خلال برنامج الرعاية يمكنك توفير الدعم الغذائي المستمر لعائلة بما فيها المكملات الغذائية والمدخلات الزراعية عند الإمكان.',
      },
      {
        q: 'كيف يعالج البرنامج الأمن الغذائي طويل الأجل؟',
        a: 'بعيدا عن المساعدات الطارئة، نطبق التدريب الزراعي وتطوير الدخل ومبادرات المطابخ المجتمعية لبناء الأمن الغذائي المستدام وتقليل الاعتماد على المساعدات.',
      },
    ],
  },
};

export default async function FoodAidPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;
  const content = foodAidContent[locale as Locale] || foodAidContent.en;

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
          }}>
            {content.hero.title}
          </h1>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '400',
            marginBottom: '24px',
            color: '#d4af37',
            fontFamily: 'Georgia, serif',
          }}>
            {content.hero.subtitle}
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {content.overview.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#2c2c2c',
              marginBottom: '0',
            }}>
              {content.overview.description}
            </p>
            <div style={{
              backgroundColor: '#f5f1e8',
              padding: '28px',
              borderLeft: ar ? 'none' : '4px solid #d4af37',
              borderRight: ar ? '4px solid #d4af37' : 'none',
              borderRadius: '0',
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4a148c',
                margin: '0',
                fontWeight: '600',
                fontStyle: 'italic',
              }}>
                "{content.overview.keyPoint}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {content.impact.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}>
            {content.impact.stats.map((stat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid #d4c5a9',
                borderRadius: '0',
                boxShadow: shadows.xs,
              }}>
                <div style={{
                  fontSize: '56px',
                  fontWeight: '800',
                  color: stat.color,
                  lineHeight: '1',
                  marginBottom: '12px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {stat.number}
                </div>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#5a5a6a',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {content.programs.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#5a5a6a',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '20px auto 60px',
          }}>
            {content.programs.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}>
            {content.programs.items.map((program) => (
              <div key={program.id} style={{
                backgroundColor: '#f9f7f2',
                padding: '32px',
                border: '1px solid #d4c5a9',
                borderRadius: '0',
                boxShadow: shadows.xs,
                transition: 'all 0.3s',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {program.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#4a148c',
                  marginBottom: '12px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {program.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2c2c2c',
                  marginBottom: '20px',
                  lineHeight: '1.6',
                }}>
                  {program.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}>
                  {program.features.map((feature, idx) => (
                    <li key={idx} style={{
                      fontSize: '14px',
                      color: '#5a5a6a',
                      paddingLeft: '24px',
                      marginBottom: '8px',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: ar ? 'auto' : '0',
                        right: ar ? '0' : 'auto',
                        color: '#d4af37',
                        fontWeight: 'bold',
                      }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {content.details.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.details.sections.map((section, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                border: '1px solid #d4c5a9',
                borderRadius: '0',
                boxShadow: shadows.xs,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                }}>
                  {section.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#4a148c',
                  marginBottom: '20px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {section.name}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}>
                  {section.objectives.map((objective, idx) => (
                    <li key={idx} style={{
                      fontSize: '14px',
                      color: '#2c2c2c',
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative',
                      lineHeight: '1.6',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: ar ? 'auto' : '0',
                        right: ar ? '0' : 'auto',
                        color: '#d4af37',
                        fontWeight: 'bold',
                      }}>
                        •
                      </span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {content.howItWorks.title}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            position: 'relative',
          }}>
            {content.howItWorks.process.map((item, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#d4af37',
                  marginBottom: '16px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#4a148c',
                  marginBottom: '12px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2c2c2c',
                  lineHeight: '1.6',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
        padding: '80px 32px',
        color: 'white',
        textAlign: 'center',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
          }}>
            {content.cta.title}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            color: '#d4af37',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            {content.cta.description}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`${base}/get-involved/donate`} style={{
              display: 'inline-block',
              padding: '16px 48px',
              backgroundColor: '#d4af37',
              color: '#4a148c',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.3s',
              border: 'none',
              borderRadius: '0',
              cursor: 'pointer',
            }}>
              {content.cta.button}
            </Link>
            <Link href={`${base}/programs/food-aid`} style={{
              display: 'inline-block',
              padding: '16px 48px',
              backgroundColor: 'transparent',
              color: '#d4af37',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              border: '2px solid #d4af37',
              borderRadius: '0',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}>
              {content.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5f1e8',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '16px',
          }}>
            {ar ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {content.faq.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '28px',
                border: '1px solid #d4c5a9',
                borderRadius: '0',
                boxShadow: shadows.xs,
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#4a148c',
                  marginBottom: '12px',
                  margin: '0 0 12px 0',
                  fontFamily: 'Georgia, serif',
                }}>
                  {item.q}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2c2c2c',
                  lineHeight: '1.7',
                  margin: '0',
                }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invest Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        textAlign: 'center',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#4a148c',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
          }}>
            {ar ? 'استثمر في المستقبل' : 'Invest in the Future'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            color: '#d4af37',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            {ar ? 'كل تبرع يساعد المزيد من العائلات على تحقيق الأمن الغذائي' : 'Every donation helps more families achieve food security'}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{
            display: 'inline-block',
            padding: '16px 48px',
            backgroundColor: '#d4af37',
            color: '#001a4d',
            textDecoration: 'none',
            borderRadius: '0',
            fontWeight: '700',
            fontSize: '16px',
            transition: 'all 0.3s',
          }}>
            {ar ? 'تبرع الآن' : 'Donate Now'}
          </Link>
        </div>
      </section>
    </>
  );
}
