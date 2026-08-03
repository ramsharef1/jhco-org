'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState } from 'react';

const cultureContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Our Organizational Culture',
      subtitle: 'Where Excellence Meets Purpose',
      overlay: 'Join a team of compassionate changemakers building hope across the world',
    },

    // Mission Statement
    mission: {
      title: 'Our Organizational Mission',
      statement: 'Creating a Workplace of Dignity and Impact',
      description: 'We believe that extraordinary humanitarian work begins with an extraordinary workplace. Our organizational culture is built on the foundation of respect, innovation, and shared purpose, where every team member is empowered to make meaningful contributions to our global mission.',
    },

    // Core Values Section
    coreValues: {
      title: 'Core Organizational Values',
      subtitle: 'The Principles That Guide Our Culture',
      values: [
        {
          icon: '👑',
          title: 'Excellence',
          description: 'We pursue the highest standards in all our work, continuously improving and learning from each experience to drive positive impact.',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '❤️',
          title: 'Compassion',
          description: 'We treat every colleague with empathy and dignity, understanding that compassion for our team enables compassion for those we serve.',
          color: royalColors.charityRed,
        },
        {
          icon: '🤝',
          title: 'Collaboration',
          description: 'We work together across departments, regions, and cultures, believing that diverse perspectives strengthen our collective impact.',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌍',
          title: 'Integrity',
          description: 'We operate with transparency and honesty, maintaining the highest ethical standards in all our professional relationships.',
          color: royalColors.impactGreen,
        },
        {
          icon: '⭐',
          title: 'Innovation',
          description: 'We encourage creative thinking and new approaches, empowering our team to challenge conventions and pioneer solutions.',
          color: royalColors.skyBlue,
        },
        {
          icon: '🛡️',
          title: 'Accountability',
          description: 'We take ownership of our actions and decisions, ensuring responsible stewardship of resources and fulfillment of our commitments.',
          color: royalColors.deepRoyal,
        },
      ],
    },

    // Work Environment
    workEnvironment: {
      title: 'Our Work Environment',
      subtitle: 'A Space Designed for Meaningful Work',
      description: 'From our headquarters in Amman to our regional offices worldwide, we create inclusive, supportive spaces where our team thrives.',
      sections: [
        {
          title: 'Global Presence',
          description: 'Operating across 30+ countries, our team works in diverse settings that reflect the communities we serve, fostering cultural understanding and authentic connection.',
        },
        {
          title: 'Modern Facilities',
          description: 'Our offices are equipped with contemporary workspaces, collaborative areas, and wellness facilities designed to support productivity and well-being.',
        },
        {
          title: 'Inclusive Environment',
          description: 'We celebrate diversity and create an environment where every team member feels valued, respected, and empowered to succeed.',
        },
        {
          title: 'Work-Life Balance',
          description: 'We recognize that sustainable impact requires sustainable practices, promoting flexible arrangements and supporting our team\'s holistic well-being.',
        },
      ],
    },

    // Employee Testimonials
    testimonials: {
      title: 'Stories From Our Team',
      subtitle: 'Hear directly from those who embody our culture',
      testimonials: [
        {
          name: 'Amira Al-Rashid',
          role: 'Senior Program Manager',
          image: '👩‍💼',
          quote: 'Working at JHCO transformed how I view my career. The mission is powerful, but what truly moves me is the culture of support and respect. Every colleague pushes me to be better, and together we\'re creating real change.',
          color: royalColors.charityRed,
        },
        {
          name: 'Dr. Hassan Al-Mansouri',
          role: 'Healthcare Program Lead',
          image: '👨‍⚕️',
          quote: 'The integrity and commitment I see every day is extraordinary. Our team doesn\'t just talk about compassion—we live it in how we treat each other and approach our work. That\'s rare and invaluable.',
          color: royalColors.compassionTeal,
        },
        {
          name: 'Laila Yousef',
          role: 'Operations Specialist',
          image: '👩‍💻',
          quote: 'This organization truly empowers innovation. When I proposed a new approach to community engagement, leadership listened and gave me resources to develop it. That trust and encouragement is what keeps me inspired.',
          color: royalColors.hashemiteGold,
        },
        {
          name: 'Mohammed Al-Khalili',
          role: 'Field Coordinator',
          image: '👨‍🔧',
          quote: 'Being part of JHCO means being part of a family united by purpose. Regardless of our location or department, we support each other and celebrate our collective victories.',
          color: royalColors.impactGreen,
        },
      ],
    },

    // Benefits & Compensation
    benefits: {
      title: 'Comprehensive Benefits',
      subtitle: 'We invest in our team\'s success and well-being',
      categories: [
        {
          icon: '🏥',
          title: 'Health & Wellness',
          benefits: [
            'Comprehensive health insurance coverage',
            'Mental health and counseling services',
            'Wellness programs and fitness facilities',
            'Annual health screenings',
          ],
        },
        {
          icon: '🎓',
          title: 'Professional Development',
          benefits: [
            'Professional development budgets',
            'Training and certification programs',
            'Leadership development opportunities',
            'Conference and seminar attendance',
          ],
        },
        {
          icon: '⏱️',
          title: 'Work-Life Balance',
          benefits: [
            'Flexible working arrangements',
            'Generous paid leave policies',
            'Parental leave support',
            'Remote work options',
          ],
        },
        {
          icon: '💰',
          title: 'Financial Security',
          benefits: [
            'Competitive compensation packages',
            'Performance bonuses',
            'Retirement planning support',
            'Life insurance coverage',
          ],
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'Family Support',
          benefits: [
            'Dependent healthcare coverage',
            'Educational support for dependents',
            'Childcare assistance programs',
            'Family wellness initiatives',
          ],
        },
        {
          icon: '🌍',
          title: 'Global Mobility',
          benefits: [
            'International assignment opportunities',
            'Relocation assistance',
            'Cross-cultural training',
            'Global team collaboration',
          ],
        },
      ],
    },

    // Diversity & Inclusion
    diversityInclusion: {
      title: 'Diversity & Inclusion Commitment',
      subtitle: 'Celebrating Our Diverse Team',
      statement: 'We are committed to building and maintaining an inclusive workplace where individuals from all backgrounds, cultures, religions, genders, ages, and abilities are valued, respected, and empowered to achieve their full potential.',
      initiatives: [
        {
          title: 'Inclusive Recruitment',
          description: 'We actively seek talent from diverse backgrounds and remove barriers to employment, ensuring equal opportunity for all candidates.',
          icon: '🎯',
        },
        {
          title: 'Equal Opportunity',
          description: 'We provide equitable opportunities for advancement, ensuring that all team members have access to development and leadership pathways.',
          icon: '📈',
        },
        {
          title: 'Inclusive Practices',
          description: 'From flexible scheduling to language support to cultural accommodations, we ensure our workplace respects all employees.',
          icon: '🤝',
        },
        {
          title: 'Bias Reduction',
          description: 'We maintain rigorous training programs and accountability measures to prevent discrimination and unconscious bias.',
          icon: '✓',
        },
        {
          title: 'Employee Resource Groups',
          description: 'We support employee-led groups for women, LGBTQ+ staff, and other communities to foster connection and advocate for their needs.',
          icon: '🌈',
        },
        {
          title: 'Transparency & Accountability',
          description: 'We publish regular diversity metrics and remain accountable to our commitment to creating a more inclusive workplace.',
          icon: '📊',
        },
      ],
    },

    // Team Culture Highlights
    teamCulture: {
      title: 'Living Our Culture',
      subtitle: 'How We Work Together Every Day',
      highlights: [
        {
          icon: '💡',
          title: 'Innovation Culture',
          description: 'We foster creative problem-solving through brainstorming sessions, innovation labs, and the freedom to pilot new ideas.',
        },
        {
          icon: '🎓',
          title: 'Learning Culture',
          description: 'Continuous learning is embedded in our DNA through mentorship programs, knowledge-sharing sessions, and certification support.',
        },
        {
          icon: '🏆',
          title: 'Recognition Culture',
          description: 'We celebrate achievements and milestones, recognizing exceptional contributions and reinforcing our values through peer and leadership recognition.',
        },
        {
          icon: '🌟',
          title: 'Purpose-Driven Culture',
          description: 'Every team member connects their work to our mission, understanding how their contributions create meaningful impact worldwide.',
        },
      ],
    },

    // Social Events & Team Building
    socialEvents: {
      title: 'Team Connection & Celebration',
      subtitle: 'Building Bonds Beyond Work',
      description: 'We believe strong teams are built through meaningful connections. Our regular team events create opportunities for colleagues to connect, celebrate victories, and strengthen relationships.',
      events: [
        {
          title: 'Annual Gala Celebration',
          description: 'Our flagship year-end event brings together the entire organization to celebrate impact and recognize exceptional contributions.',
          emoji: '🎉',
        },
        {
          title: 'Regional Team Retreats',
          description: 'Quarterly retreats in each region foster team bonding, strategic alignment, and cross-departmental collaboration.',
          emoji: '🏔️',
        },
        {
          title: 'Monthly Coffee Talks',
          description: 'Informal gatherings where colleagues share stories, network, and strengthen relationships across departments.',
          emoji: '☕',
        },
        {
          title: 'Sports & Wellness Events',
          description: 'Friendly competitions and wellness activities promote health, camaraderie, and team spirit.',
          emoji: '⚽',
        },
        {
          title: 'Volunteer Outreach Days',
          description: 'Teams volunteer together in their communities, reinforcing our mission and strengthening team bonds through service.',
          emoji: '🤝',
        },
        {
          title: 'Cultural Celebration',
          description: 'We celebrate the diverse cultural heritage of our team through cultural events, food festivals, and heritage months.',
          emoji: '🌍',
        },
      ],
    },

    // Leadership Philosophy
    leadership: {
      title: 'Our Leadership Philosophy',
      subtitle: 'Servant Leadership in Action',
      principles: [
        {
          title: 'Empowering Others',
          description: 'Leaders at JHCO serve their teams by removing obstacles, providing resources, and creating opportunities for growth and success.',
        },
        {
          title: 'Leading by Example',
          description: 'Our leaders embody our values, demonstrating commitment to excellence, integrity, and compassion in all they do.',
        },
        {
          title: 'Open Communication',
          description: 'We maintain transparent, honest dialogue where feedback flows in all directions, and voices are valued.',
        },
        {
          title: 'Development Focus',
          description: 'Leaders invest in developing their teams, recognizing potential and creating pathways for advancement.',
        },
      ],
    },

    // Workplace Safety & Support
    support: {
      title: 'Safety, Support & Well-being',
      subtitle: 'Protecting Our Most Valuable Asset – Our People',
      areas: [
        {
          title: 'Physical Safety',
          description: 'We maintain safe work environments with comprehensive security protocols and emergency preparedness in all locations.',
        },
        {
          title: 'Psychological Safety',
          description: 'Team members feel safe to voice ideas, ask questions, and take interpersonal risks without fear of punishment or humiliation.',
        },
        {
          title: 'Mental Health Support',
          description: 'We offer confidential counseling services, stress management programs, and mental health resources.',
        },
        {
          title: 'Anti-Harassment Policy',
          description: 'We maintain zero tolerance for harassment or discrimination, with clear reporting channels and investigations.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Join Our Team',
      subtitle: 'Be Part of Something Extraordinary',
      buttons: [
        { label: 'Explore Careers', href: '/careers', icon: '💼' },
        { label: 'Learn About Benefits', href: '/careers/benefits', icon: '🎁' },
        { label: 'Apply Now', href: '/careers/apply', icon: '✉️' },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'ثقافة المنظمة لدينا',
      subtitle: 'حيث التميز يلتقي بالهدف',
      overlay: 'انضم إلى فريق من صناع التغيير الرحماء الذين يبنون الأمل في جميع أنحاء العالم',
    },

    // Mission Statement
    mission: {
      title: 'مهمتنا التنظيمية',
      statement: 'خلق مكان عمل يقوم على الكرامة والتأثير',
      description: 'نؤمن بأن العمل الإنساني الاستثنائي يبدأ بمكان عمل استثنائي. ثقافتنا التنظيمية مبنية على أساس الاحترام والابتكار والهدف المشترك، حيث يتمتع كل فرد في فريقنا بالقوة اللازمة لتقديم مساهمات ذات مغزى لرسالتنا العالمية.',
    },

    // Core Values Section
    coreValues: {
      title: 'قيمنا الأساسية',
      subtitle: 'المبادئ التي توجه ثقافتنا',
      values: [
        {
          icon: '👑',
          title: 'التميز',
          description: 'نسعى لأعلى المعايير في جميع أعمالنا، ونتحسن باستمرار ونتعلم من كل تجربة لدفع التأثير الإيجابي.',
          color: royalColors.hashemiteGold,
        },
        {
          icon: '❤️',
          title: 'الرحمة',
          description: 'نتعامل مع كل زميل برحمة وكرامة، مدركين أن الرحمة تجاه فريقنا تمكننا من خدمة من نعمل معهم برحمة أكبر.',
          color: royalColors.charityRed,
        },
        {
          icon: '🤝',
          title: 'التعاون',
          description: 'نعمل معاً عبر الأقسام والمناطق والثقافات، معتقدين أن وجهات النظر المتنوعة تقوي تأثيرنا الجماعي.',
          color: royalColors.compassionTeal,
        },
        {
          icon: '🌍',
          title: 'النزاهة',
          description: 'نعمل بشفافية وصدق، ونحافظ على أعلى المعايير الأخلاقية في جميع علاقاتنا المهنية.',
          color: royalColors.impactGreen,
        },
        {
          icon: '⭐',
          title: 'الابتكار',
          description: 'نشجع التفكير الإبداعي والنهج الجديدة، وتمكين فريقنا من تحدي الاتفاقيات والرائدة في الحلول.',
          color: royalColors.skyBlue,
        },
        {
          icon: '🛡️',
          title: 'المساءلة',
          description: 'نتولى مسؤولية أفعالنا وقراراتنا، مما يضمن الإشراف المسؤول على الموارد والوفاء بالتزاماتنا.',
          color: royalColors.deepRoyal,
        },
      ],
    },

    // Work Environment
    workEnvironment: {
      title: 'بيئة عملنا',
      subtitle: 'مساحة مصممة للعمل الذي يحمل معنى',
      description: 'من مقرنا الرئيسي في عمّان إلى مكاتبنا الإقليمية في جميع أنحاء العالم، نخلق مساحات شاملة وداعمة حيث يزدهر فريقنا.',
      sections: [
        {
          title: 'الحضور العالمي',
          description: 'يعمل فريقنا في أكثر من 30 دولة في بيئات متنوعة تعكس المجتمعات التي نخدمها، مما يعزز الفهم الثقافي والارتباط الأصيل.',
        },
        {
          title: 'المرافق الحديثة',
          description: 'تم تجهيز مكاتبنا بمساحات عمل معاصرة ومناطق تعاونية وقيود صحية مصممة لدعم الإنتاجية والرفاهية.',
        },
        {
          title: 'بيئة شاملة',
          description: 'نحتفل بالتنوع وننشئ بيئة حيث يشعر كل فرد في الفريق بالقيمة والاحترام والتمكين للنجاح.',
        },
        {
          title: 'توازن العمل والحياة',
          description: 'ندرك أن التأثير المستدام يتطلب ممارسات مستدامة، لذا نعزز الترتيبات المرنة وندعم الرفاهية الشاملة لفريقنا.',
        },
      ],
    },

    // Employee Testimonials
    testimonials: {
      title: 'قصص من فريقنا',
      subtitle: 'اسمع مباشرة من أولئك الذين يجسدون ثقافتنا',
      testimonials: [
        {
          name: 'أميرة الراشد',
          role: 'مديرة برامج أول',
          image: '👩‍💼',
          quote: 'غيرت وظيفتي في الهيئة طريقة تعاملي مع حياتي المهنية. الرسالة قوية، لكن ما يحركني حقاً هو ثقافة الدعم والاحترام. كل زميل يدفعني لأكون أفضل، وأننا معاً نخلق تغييراً حقيقياً.',
          color: royalColors.charityRed,
        },
        {
          name: 'د. حسن المنصوري',
          role: 'رئيس برنامج الرعاية الصحية',
          image: '👨‍⚕️',
          quote: 'النزاهة والالتزام الذي أراه كل يوم استثنائي. فريقنا لا يتحدث فقط عن الرحمة - نحن نعيشها في كيفية تعاملنا مع بعضنا ومعالجة عملنا. هذا نادر وثمين.',
          color: royalColors.compassionTeal,
        },
        {
          name: 'ليلى يوسف',
          role: 'متخصصة العمليات',
          image: '👩‍💻',
          quote: 'هذه المنظمة حقاً تمكن الابتكار. عندما اقترحت نهجاً جديداً لمشاركة المجتمع، استمعت القيادة وأعطتني موارد لتطويره. هذا الثقة والتشجيع هو ما يبقيني مستوحية.',
          color: royalColors.hashemiteGold,
        },
        {
          name: 'محمد الخليلي',
          role: 'منسق ميداني',
          image: '👨‍🔧',
          quote: 'كون جزءاً من الهيئة يعني كون جزءاً من عائلة موحدة بالهدف. بغض النظر عن موقعنا أو قسمنا، نداعم بعضنا ونحتفل بنصرنا الجماعي.',
          color: royalColors.impactGreen,
        },
      ],
    },

    // Benefits & Compensation
    benefits: {
      title: 'المزايا الشاملة',
      subtitle: 'نحن نستثمر في نجاح ورفاهية فريقنا',
      categories: [
        {
          icon: '🏥',
          title: 'الصحة والعافية',
          benefits: [
            'تغطية التأمين الصحي الشاملة',
            'خدمات الصحة النفسية والاستشارة',
            'برامج العافية ومرافق اللياقة البدنية',
            'فحوصات صحية سنوية',
          ],
        },
        {
          icon: '🎓',
          title: 'التطوير المهني',
          benefits: [
            'ميزانيات تطوير مهني',
            'برامج التدريب والشهادة',
            'فرص تطوير القيادة',
            'حضور المؤتمرات والندوات',
          ],
        },
        {
          icon: '⏱️',
          title: 'توازن العمل والحياة',
          benefits: [
            'ترتيبات العمل المرنة',
            'سياسات الإجازة المدفوعة الكريمة',
            'دعم إجازة الأمومة',
            'خيارات العمل عن بعد',
          ],
        },
        {
          icon: '💰',
          title: 'الأمان المالي',
          benefits: [
            'حزم تعويض تنافسية',
            'مكافآت الأداء',
            'دعم التخطيط التقاعدي',
            'تغطية التأمين على الحياة',
          ],
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'دعم الأسرة',
          benefits: [
            'تغطية الرعاية الصحية للمعالين',
            'دعم تعليم المعالين',
            'برامج مساعدة رعاية الأطفال',
            'مبادرات صحة الأسرة',
          ],
        },
        {
          icon: '🌍',
          title: 'التنقل العالمي',
          benefits: [
            'فرص التعيين الدولي',
            'مساعدة الانتقال',
            'التدريب عبر الثقافات',
            'التعاون مع الفريق العالمي',
          ],
        },
      ],
    },

    // Diversity & Inclusion
    diversityInclusion: {
      title: 'التزامنا بالتنوع والشمول',
      subtitle: 'الاحتفال بفريقنا المتنوع',
      statement: 'نحن ملتزمون ببناء والحفاظ على مكان عمل شامل حيث يتم تقدير واحترام وتمكين الأفراد من جميع الخلفيات والثقافات والأديان والأجناس والأعمار والقدرات لتحقيق إمكاناتهم الكاملة.',
      initiatives: [
        {
          title: 'التوظيف الشامل',
          description: 'نسعى بنشاط للمواهب من خلفيات متنوعة وإزالة الحواجز أمام التوظيف، مما يضمن تكافؤ الفرص لجميع المرشحين.',
          icon: '🎯',
        },
        {
          title: 'تكافؤ الفرص',
          description: 'نوفر فرصاً متكافئة للتقدم، مما يضمن أن جميع أعضاء الفريق لديهم إمكانية الوصول إلى مسارات التطوير والقيادة.',
          icon: '📈',
        },
        {
          title: 'الممارسات الشاملة',
          description: 'من الجدولة المرنة إلى دعم اللغة إلى التعديلات الثقافية، نضمن احترام مكان عملنا لجميع الموظفين.',
          icon: '🤝',
        },
        {
          title: 'تقليل التحيز',
          description: 'نحافظ على برامج تدريب صارمة وتدابير المساءلة لمنع التمييز والتحيز اللاواعي.',
          icon: '✓',
        },
        {
          title: 'مجموعات موارد الموظفين',
          description: 'ندعم المجموعات التي يقودها الموظفون للنساء والموظفين LGBTQ+ والمجتمعات الأخرى لتعزيز الارتباط والدعوة عن احتياجاتهم.',
          icon: '🌈',
        },
        {
          title: 'الشفافية والمساءلة',
          description: 'ننشر مقاييس التنوع العادية ونبقى مسؤولين عن التزامنا بخلق مكان عمل أكثر شمولاً.',
          icon: '📊',
        },
      ],
    },

    // Team Culture Highlights
    teamCulture: {
      title: 'عيش ثقافتنا',
      subtitle: 'كيفية عملنا معاً كل يوم',
      highlights: [
        {
          icon: '💡',
          title: 'ثقافة الابتكار',
          description: 'نعزز حل المشاكل الإبداعية من خلال جلسات العصف الذهني ومختبرات الابتكار والحرية في تجربة الأفكار الجديدة.',
        },
        {
          icon: '🎓',
          title: 'ثقافة التعلم',
          description: 'يتم دمج التعلم المستمر في حمضنا النووي من خلال برامج الإرشاد وجلسات تبادل المعرفة ودعم الشهادة.',
        },
        {
          icon: '🏆',
          title: 'ثقافة الاعتراف',
          description: 'نحتفل بالإنجازات والمعالم، معترفين بالمساهمات الاستثنائية وتعزيز قيمنا من خلال الاعتراف من الأقران والقيادة.',
        },
        {
          icon: '🌟',
          title: 'ثقافة تحركها الهدف',
          description: 'يربط كل فرد في الفريق عمله برسالتنا، مدركين كيف تساهم مساهماتهم في خلق تأثير ذي مغزى في جميع أنحاء العالم.',
        },
      ],
    },

    // Social Events & Team Building
    socialEvents: {
      title: 'اتصال الفريق والاحتفال',
      subtitle: 'بناء علاقات تتجاوز العمل',
      description: 'نحن نعتقد أن الفرق القوية تبنى من خلال الاتصالات ذات المعنى. أحداثنا المنتظمة توفر فرصاً للزملاء للاتصال والاحتفال بالانتصارات وتقوية العلاقات.',
      events: [
        {
          title: 'احتفالية السنة الختامية',
          description: 'يجمع حدثنا الرئيسي لنهاية السنة المنظمة بأكملها للاحتفال بالتأثير والاعتراف بالمساهمات الاستثنائية.',
          emoji: '🎉',
        },
        {
          title: 'انسحابات الفريق الإقليمية',
          description: 'تعزز الانسحابات ربع السنوية في كل منطقة ترابط الفريق والتوافق الاستراتيجي والتعاون بين الأقسام.',
          emoji: '🏔️',
        },
        {
          title: 'محادثات القهوة الشهرية',
          description: 'تجمعات غير رسمية حيث يشارك الزملاء القصص والشبكات ويقويون العلاقات عبر الأقسام.',
          emoji: '☕',
        },
        {
          title: 'أحداث الرياضة والعافية',
          description: 'المنافسات الودية والأنشطة الصحية تعزز الصحة والمودة وروح الفريق.',
          emoji: '⚽',
        },
        {
          title: 'أيام النشاط التطوعي',
          description: 'تتطوع الفرق معاً في مجتمعاتهم، مما يعزز رسالتنا وتقوية علاقات الفريق من خلال الخدمة.',
          emoji: '🤝',
        },
        {
          title: 'احتفالية ثقافية',
          description: 'نحتفل بالتراث الثقافي المتنوع لفريقنا من خلال الأحداث الثقافية وحفلات الطعام وأشهر التراث.',
          emoji: '🌍',
        },
      ],
    },

    // Leadership Philosophy
    leadership: {
      title: 'فلسفة القيادة لدينا',
      subtitle: 'قيادة الخدمة في العمل',
      principles: [
        {
          title: 'تمكين الآخرين',
          description: 'يخدم القادة في الهيئة فريقهم بإزالة العقبات وتوفير الموارد وخلق فرص للنمو والنجاح.',
        },
        {
          title: 'القيادة بالقدوة',
          description: 'يجسد قادتنا قيمنا، ويظهرون الالتزام بالتميز والنزاهة والرحمة في كل ما يفعلونه.',
        },
        {
          title: 'التواصل المفتوح',
          description: 'نحافظ على حوار شفاف وصادق حيث يتدفق الملاحظات في جميع الاتجاهات ويتم تقدير الأصوات.',
        },
        {
          title: 'التركيز على التطوير',
          description: 'يستثمر القادة في تطوير فريقهم، مدركين إمكاناتهم وخلق مسارات للتقدم.',
        },
      ],
    },

    // Workplace Safety & Support
    support: {
      title: 'الأمان والدعم والرفاهية',
      subtitle: 'حماية أثمن أصل لدينا - شعبنا',
      areas: [
        {
          title: 'السلامة البدنية',
          description: 'نحافظ على بيئات عمل آمنة من خلال بروتوكولات أمان شاملة والتأهب للطوارئ في جميع المواقع.',
        },
        {
          title: 'السلامة النفسية',
          description: 'يشعر أعضاء الفريق بالأمان للتعبير عن الأفكار وطرح الأسئلة وأخذ المخاطر الشخصية دون خوف من العقوبة.',
        },
        {
          title: 'دعم الصحة النفسية',
          description: 'نقدم خدمات استشارة سرية وبرامج إدارة الإجهاد وموارد الصحة النفسية.',
        },
        {
          title: 'سياسة مناهضة للتحرش',
          description: 'نحافظ على سياسة عدم التسامح مع التحرش أو التمييز، مع قنوات إبلاغ واضحة والتحقيقات.',
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'انضم إلى فريقنا',
      subtitle: 'كن جزءاً من شيء غير عادي',
      buttons: [
        { label: 'استكشف الوظائف', href: '/careers', icon: '💼' },
        { label: 'تعرف على المزايا', href: '/careers/benefits', icon: '🎁' },
        { label: 'قدم الآن', href: '/careers/apply', icon: '✉️' },
      ],
    },
  },
};

export default function CulturePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = cultureContent[locale] || cultureContent.en;

  const textAlign = ar ? 'right' : 'left';
  const direction = ar ? 'rtl' : 'ltr';

  return (
    <main style={{ minHeight: '100vh', background: royalColors.bgRefined, direction }}>
      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.compassionTeal} 50%, ${royalColors.hashemiteGold} 100%)`,
        backgroundSize: '400% 400%',
        color: 'white',
        padding: '120px 32px',
        textAlign: 'center' as const,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 800,
            fontFamily: '"Garamond", serif',
            letterSpacing: '0.5px',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}>
            {content.hero.title}
          </h1>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 600,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {content.hero.subtitle}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            opacity: 0.95,
          }}>
            {content.hero.overlay}
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        textAlign,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: '"Garamond", serif',
            color: royalColors.deepRoyal,
            marginBottom: '16px',
            letterSpacing: '0.5px',
          }}>
            {content.mission.title}
          </h2>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 600,
            color: royalColors.hashemiteGold,
            marginBottom: '24px',
            fontStyle: 'italic',
          }}>
            {content.mission.statement}
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: royalColors.textOfficial,
            maxWidth: '800px',
          }}>
            {content.mission.description}
          </p>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.coreValues.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              fontStyle: 'italic',
            }}>
              {content.coreValues.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.coreValues.values.map((value, idx) => (
              <div key={idx} style={{
                background: royalColors.bgLight,
                padding: '32px',
                borderLeft: `4px solid ${value.color}`,
                boxShadow: shadows.sm,
                textAlign,
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK ENVIRONMENT SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: '"Garamond", serif',
            color: royalColors.deepRoyal,
            marginBottom: '16px',
            textAlign,
            letterSpacing: '0.5px',
          }}>
            {content.workEnvironment.title}
          </h2>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: royalColors.hashemiteGold,
            marginBottom: '16px',
            textAlign,
          }}>
            {content.workEnvironment.subtitle}
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: royalColors.textSecondary,
            marginBottom: '48px',
            textAlign,
          }}>
            {content.workEnvironment.description}
          </p>

          {/* Work environment placeholder image and content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '48px',
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${royalColors.compassionTeal} 0%, ${royalColors.impactGreen} 100%)`,
              height: '400px',
              borderRadius: borderRadius.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '96px',
              boxShadow: shadows.lg,
            }}>
              🏢
            </div>
            <div>
              {content.workEnvironment.sections.map((section, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '8px',
                    fontFamily: '"Garamond", serif',
                  }}>
                    {section.title}
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: royalColors.textSecondary,
                  }}>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.testimonials.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              fontStyle: 'italic',
            }}>
              {content.testimonials.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.testimonials.testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                background: royalColors.bgLight,
                padding: '28px',
                borderTop: `4px solid ${testimonial.color}`,
                boxShadow: shadows.sm,
                borderRadius: borderRadius.card,
              }}>
                <div style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {testimonial.image}
                </div>
                <blockquote style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: royalColors.textOfficial,
                  marginBottom: '16px',
                  borderLeft: `3px solid ${testimonial.color}`,
                  paddingLeft: '16px',
                }}>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    margin: '4px 0',
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: testimonial.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.benefits.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              fontStyle: 'italic',
            }}>
              {content.benefits.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {content.benefits.categories.map((category, idx) => (
              <div key={idx} style={{
                background: royalColors.ivoryBg,
                padding: '28px',
                border: `1px solid ${royalColors.borderSubtle}`,
                borderRadius: borderRadius.card,
                boxShadow: shadows.xs,
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '12px',
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '16px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {category.title}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {category.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: royalColors.textSecondary,
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: royalColors.hashemiteGold,
                      }}>
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
        borderLeft: `4px solid ${royalColors.charityRed}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.diversityInclusion.title}
            </h2>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: royalColors.charityRed,
              marginBottom: '24px',
            }}>
              {content.diversityInclusion.subtitle}
            </h3>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: royalColors.textOfficial,
            textAlign,
            maxWidth: '900px',
            margin: '0 auto 48px',
            fontStyle: 'italic',
            borderLeft: `3px solid ${royalColors.charityRed}`,
            paddingLeft: '24px',
          }}>
            {content.diversityInclusion.statement}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {content.diversityInclusion.initiatives.map((initiative, idx) => (
              <div key={idx} style={{
                background: royalColors.bgLight,
                padding: '28px',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: borderRadius.card,
                textAlign,
              }}>
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                }}>
                  {initiative.icon}
                </div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '8px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {initiative.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CULTURE SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.teamCulture.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              fontStyle: 'italic',
            }}>
              {content.teamCulture.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.teamCulture.highlights.map((highlight, idx) => (
              <div key={idx} style={{
                background: royalColors.ivoryBg,
                padding: '32px',
                border: `1px solid ${royalColors.borderSubtle}`,
                borderRadius: borderRadius.card,
                boxShadow: shadows.xs,
                textAlign,
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                }}>
                  {highlight.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {highlight.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL EVENTS SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {content.socialEvents.title}
            </h2>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: royalColors.hashemiteGold,
              marginBottom: '16px',
            }}>
              {content.socialEvents.subtitle}
            </h3>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              {content.socialEvents.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.socialEvents.events.map((event, idx) => (
              <div key={idx} style={{
                background: royalColors.bgLight,
                padding: '32px',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: borderRadius.card,
                textAlign,
              }}>
                <div style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  {event.emoji}
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {event.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: '"Garamond", serif',
            color: royalColors.deepRoyal,
            marginBottom: '16px',
            textAlign,
            letterSpacing: '0.5px',
          }}>
            {content.leadership.title}
          </h2>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: royalColors.hashemiteGold,
            marginBottom: '48px',
            textAlign,
          }}>
            {content.leadership.subtitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.leadership.principles.map((principle, idx) => (
              <div key={idx} style={{
                background: royalColors.ivoryBg,
                padding: '28px',
                border: `1px solid ${royalColors.borderSubtle}`,
                borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                borderRadius: borderRadius.card,
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {principle.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section style={{
        background: royalColors.ivoryBg,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
        borderLeft: `4px solid ${royalColors.compassionTeal}`,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: '"Garamond", serif',
            color: royalColors.deepRoyal,
            marginBottom: '16px',
            textAlign,
            letterSpacing: '0.5px',
          }}>
            {content.support.title}
          </h2>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: royalColors.compassionTeal,
            marginBottom: '48px',
            textAlign,
          }}>
            {content.support.subtitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {content.support.areas.map((area, idx) => (
              <div key={idx} style={{
                background: royalColors.bgLight,
                padding: '28px',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: borderRadius.card,
              }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: royalColors.deepRoyal,
                  marginBottom: '12px',
                  fontFamily: '"Garamond", serif',
                }}>
                  {area.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: royalColors.textSecondary,
                }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
        color: 'white',
        padding: '80px 32px',
        textAlign: 'center' as const,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: '"Garamond", serif',
            marginBottom: '16px',
            letterSpacing: '0.5px',
          }}>
            {content.cta.title}
          </h2>
          <p style={{
            fontSize: '20px',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}>
            {content.cta.subtitle}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {content.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={button.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: royalColors.hashemiteGold,
                  color: royalColors.deepRoyal,
                  padding: '14px 32px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderRadius: borderRadius.button,
                  transition: 'all 200ms ease-in-out',
                  boxShadow: shadows.lg,
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = royalColors.goldBright;
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = royalColors.hashemiteGold;
                  el.style.transform = 'translateY(0)';
                }}
              >
                <span>{button.icon}</span>
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTOS PLACEHOLDER SECTION */}
      <section style={{
        background: royalColors.bgLight,
        padding: '80px 32px',
        borderTop: `1px solid ${royalColors.borderSubtle}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              fontFamily: '"Garamond", serif',
              color: royalColors.deepRoyal,
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {ar ? 'فريقنا العالمي' : 'Our Global Team'}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              fontStyle: 'italic',
            }}>
              {ar ? 'متنوع وشغوف وملتزم بالتغيير' : 'Diverse, passionate, and committed to change'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            {[...Array(8)].map((_, idx) => (
              <div key={idx} style={{
                background: `linear-gradient(135deg, ${royalColors.compassionTeal} 0%, ${royalColors.impactGreen} 100%)`,
                height: '240px',
                borderRadius: borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                boxShadow: shadows.md,
              }}>
                {['👩‍💼', '👨‍💼', '👩‍⚕️', '👨‍⚕️', '👩‍💻', '👨‍🔧', '👩‍🏫', '👨‍🏫'][idx]}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
