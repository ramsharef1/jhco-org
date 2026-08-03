'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState, useMemo } from 'react';

const careersContent = {
  en: {
    // Hero Section
    hero: {
      title: 'Join Our Mission',
      subtitle: 'Build a Meaningful Career with JHCO',
      description: 'Work alongside dedicated professionals committed to transforming lives and creating positive change across 30+ countries. We\'re looking for passionate individuals to join our growing team.',
    },

    // Benefits Section
    benefits: {
      title: 'Why Work with JHCO',
      description: 'We invest in our people because our people make the impact possible',
      items: [
        { icon: '❤️', title: 'Meaningful Impact', description: 'Your work directly affects millions of lives across humanitarian programs' },
        { icon: '🌍', title: 'Global Exposure', description: 'Work with international teams and experience diverse cultures' },
        { icon: '📚', title: 'Professional Development', description: 'Comprehensive training, mentorship, and career advancement opportunities' },
        { icon: '🤝', title: 'Inclusive Culture', description: 'Diverse, supportive environment that values every team member' },
        { icon: '💼', title: 'Competitive Benefits', description: 'Health insurance, retirement plans, flexible working arrangements' },
        { icon: '⭐', title: 'Leadership Recognition', description: 'Opportunities to lead initiatives and grow into leadership roles' },
      ],
    },

    // Job Categories
    categories: {
      title: 'Job Categories',
      all: 'All Positions',
      fullTime: 'Full-Time',
      partTime: 'Part-Time',
      internship: 'Internships',
      volunteer: 'Volunteer',
      contract: 'Contract',
    },

    // Locations
    locations: {
      title: 'Filter by Location',
      all: 'All Locations',
      amman: 'Amman, Jordan',
      cairo: 'Cairo, Egypt',
      beirut: 'Beirut, Lebanon',
      istanbul: 'Istanbul, Turkey',
      dubai: 'Dubai, UAE',
      remote: 'Remote',
    },

    // Job Listings
    jobs: {
      title: 'Current Openings',
      view: 'View Details',
      apply: 'Apply Now',
      posted: 'Posted',
      daysAgo: 'days ago',
      salary: 'Salary',
      type: 'Type',
      location: 'Location',
      requirements: 'Requirements',
      responsibilities: 'Responsibilities',
      qualifications: 'Qualifications',

      listings: [
        {
          id: 1,
          title: 'Senior Program Manager',
          category: 'fullTime',
          location: 'amman',
          salary: '$45,000 - $65,000',
          type: 'Full-Time',
          posted: 5,
          department: 'Programs',
          description: 'Lead and oversee humanitarian program implementation across multiple regions, ensuring quality, impact, and compliance with organizational standards.',
          requirements: [
            '8+ years of humanitarian program management experience',
            'Master\'s degree in relevant field',
            'Fluent in Arabic and English',
            'Strong leadership and team management skills',
            'Experience with UN agencies or international NGOs',
          ],
          responsibilities: [
            'Oversee program design, implementation, and monitoring',
            'Manage teams of 15+ staff across multiple locations',
            'Ensure compliance with donor requirements and organizational policies',
            'Develop strategic partnerships with government and NGO partners',
            'Report to senior management on program progress and impact',
          ],
        },
        {
          id: 2,
          title: 'Healthcare Coordinator',
          category: 'fullTime',
          location: 'cairo',
          salary: '$28,000 - $38,000',
          type: 'Full-Time',
          posted: 3,
          department: 'Healthcare',
          description: 'Coordinate healthcare delivery initiatives including mobile clinics, maternal health programs, and disease prevention campaigns.',
          requirements: [
            '5+ years in healthcare coordination or nursing',
            'Bachelor\'s degree in Healthcare or related field',
            'Strong organizational skills',
            'Experience with healthcare data management',
          ],
          responsibilities: [
            'Coordinate healthcare delivery programs',
            'Manage clinic schedules and medical staff',
            'Track health metrics and program outcomes',
            'Liaise with local health authorities',
          ],
        },
        {
          id: 3,
          title: 'Education Program Specialist',
          category: 'fullTime',
          location: 'beirut',
          salary: '$32,000 - $42,000',
          type: 'Full-Time',
          posted: 7,
          department: 'Education',
          description: 'Develop and implement education programs including scholarships, skills training, and educational resource centers.',
          requirements: [
            '6+ years in education program development',
            'Master\'s degree in Education or Development',
            'Experience with refugee or displaced communities',
            'Strong monitoring and evaluation skills',
          ],
          responsibilities: [
            'Develop curriculum and training materials',
            'Oversee scholarship program administration',
            'Monitor student progress and learning outcomes',
            'Partner with local educational institutions',
          ],
        },
        {
          id: 4,
          title: 'Monitoring & Evaluation Officer',
          category: 'fullTime',
          location: 'remote',
          salary: '$30,000 - $40,000',
          type: 'Full-Time',
          posted: 2,
          department: 'Operations',
          description: 'Design and implement monitoring frameworks, collect impact data, and produce evidence-based reports on program effectiveness.',
          requirements: [
            '5+ years in M&E for humanitarian/development programs',
            'Bachelor\'s degree in Statistics, Social Sciences or related',
            'Proficiency in STATA, R, or Excel',
            'Strong data analysis and visualization skills',
          ],
          responsibilities: [
            'Design program monitoring frameworks',
            'Collect and analyze program data',
            'Produce quarterly and annual impact reports',
            'Conduct beneficiary satisfaction surveys',
          ],
        },
        {
          id: 5,
          title: 'Fundraising & Development Officer',
          category: 'fullTime',
          location: 'dubai',
          salary: '$40,000 - $55,000',
          type: 'Full-Time',
          posted: 4,
          department: 'Development',
          description: 'Drive resource mobilization from individual donors, corporations, and institutional partners to support humanitarian initiatives.',
          requirements: [
            '5+ years in fundraising or development',
            'Experience with major donor cultivation',
            'Strong written and verbal communication skills',
            'Bachelor\'s degree in any field',
          ],
          responsibilities: [
            'Identify and cultivate funding prospects',
            'Develop donor proposals and grant applications',
            'Manage donor relationships and communications',
            'Organize fundraising events and campaigns',
          ],
        },
        {
          id: 6,
          title: 'Communications & Media Specialist',
          category: 'partTime',
          location: 'amman',
          salary: '$18,000 - $25,000',
          type: 'Part-Time',
          posted: 6,
          department: 'Communications',
          description: 'Develop and execute communications strategies, manage social media, and produce multimedia content that tells JHCO\'s impact stories.',
          requirements: [
            '3+ years in communications or media',
            'Proficiency in content creation and social media',
            'Strong writing skills in Arabic and English',
            'Experience with video/photography',
          ],
          responsibilities: [
            'Manage JHCO social media channels',
            'Produce written content and impact stories',
            'Create and edit multimedia content',
            'Coordinate media coverage and press releases',
          ],
        },
        {
          id: 7,
          title: 'Finance & Administration Officer',
          category: 'fullTime',
          location: 'istanbul',
          salary: '$26,000 - $36,000',
          type: 'Full-Time',
          posted: 8,
          department: 'Finance',
          description: 'Manage financial operations, budgeting, and compliance for humanitarian programs across multiple locations.',
          requirements: [
            '5+ years in NGO finance management',
            'Bachelor\'s degree in Accounting or Finance',
            'Proficiency in accounting software',
            'Knowledge of international donor compliance',
          ],
          responsibilities: [
            'Prepare budgets and financial forecasts',
            'Process financial transactions and reports',
            'Ensure compliance with donor regulations',
            'Conduct internal audits and controls',
          ],
        },
        {
          id: 8,
          title: 'Humanitarian Field Officer (Internship)',
          category: 'internship',
          location: 'remote',
          salary: 'Unpaid / Stipend Available',
          type: 'Internship',
          posted: 1,
          department: 'Programs',
          description: 'Support field operations and gain hands-on experience in humanitarian program implementation with mentorship from experienced staff.',
          requirements: [
            'Currently enrolled in relevant degree program (Development, International Relations, etc)',
            'Strong interest in humanitarian work',
            'Ability to commit 20+ hours per week for 3-6 months',
            'Excellent communication skills',
          ],
          responsibilities: [
            'Assist with field program implementation',
            'Conduct beneficiary interviews and surveys',
            'Prepare program reports and documentation',
            'Support community engagement activities',
          ],
        },
      ],
    },

    // Internships Section
    internships: {
      title: 'Internship Programs',
      description: 'Launch your humanitarian career with our structured internship programs. Gain real-world experience, develop skills, and make a tangible difference.',
      duration: 'Duration: 3-6 months',
      benefits: 'Stipend, mentorship, certificate',
      programs: [
        {
          name: 'Summer Internship Program',
          description: 'Intensive 3-month internship during summer focused on program operations',
        },
        {
          name: 'Academic Year Internship',
          description: '6-month program for students to gain semester-long experience',
        },
        {
          name: 'Professional Development Internship',
          description: '3-month program for recent graduates entering the humanitarian field',
        },
      ],
    },

    // Volunteer Section
    volunteer: {
      title: 'Volunteer Opportunities',
      description: 'We welcome passionate volunteers to contribute their skills and time to our mission. Whether you can volunteer a few hours or full-time, we have opportunities for you.',
      types: [
        { name: 'Remote Volunteering', description: 'Support programs from anywhere with tasks like research, data entry, and content creation' },
        { name: 'Field Volunteering', description: 'Work directly with communities on humanitarian programs across our operation areas' },
        { name: 'Project-Based', description: 'Short-term volunteer roles for specific events or projects' },
        { name: 'Skills-Based', description: 'Volunteer your professional expertise in areas like law, medicine, IT, or fundraising' },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: 'Our Team Speaks',
      description: 'Hear from the dedicated professionals who make JHCO\'s humanitarian mission possible',
      employees: [
        {
          name: 'Sarah Johnson',
          role: 'Senior Program Manager',
          quote: 'Working at JHCO gave me the opportunity to make a real difference in people\'s lives. The support and mentorship I received accelerated my growth as a humanitarian professional.',
          image: '👩‍💼',
        },
        {
          name: 'Ahmed Al-Rashid',
          role: 'Healthcare Coordinator',
          quote: 'Every day, I see the impact of our work in the faces of the families we serve. That\'s what keeps me motivated and reminds me why I chose this career.',
          image: '👨‍⚕️',
        },
        {
          name: 'Leila Habib',
          role: 'Education Specialist',
          quote: 'The collaborative culture at JHCO is exceptional. I work with brilliant minds from different backgrounds, and together we\'re building lasting change in education.',
          image: '👩‍🏫',
        },
        {
          name: 'Michael Chen',
          role: 'M&E Officer',
          quote: 'JHCO trusts me to drive evidence-based decision-making. My expertise in data analysis has real value here, and I\'m proud of the impact reports we produce.',
          image: '👨‍💻',
        },
      ],
    },

    // Application Section
    application: {
      title: 'Ready to Apply?',
      description: 'Interested in joining our team? Here\'s what to expect in our application process:',
      steps: [
        { number: '1', title: 'Submit Application', description: 'Complete our online application with your CV and cover letter' },
        { number: '2', title: 'Initial Screening', description: 'Our HR team reviews applications and contacts qualified candidates' },
        { number: '3', title: 'Phone Interview', description: 'First conversation with the hiring manager to discuss your experience' },
        { number: '4', title: 'In-Person/Video Interview', description: 'Meet with the team and learn more about the role and JHCO' },
        { number: '5', title: 'Final Decision', description: 'We make our offer and negotiate the terms of your position' },
      ],
      cta: 'View All Positions',
    },

    // Culture Section
    culture: {
      title: 'Our Culture',
      values: [
        { icon: '🤝', title: 'Collaboration', description: 'We work together across departments and offices to maximize impact' },
        { icon: '🌱', title: 'Growth', description: 'We invest in your professional development through training and mentorship' },
        { icon: '💡', title: 'Innovation', description: 'We encourage creative thinking and new approaches to humanitarian challenges' },
        { icon: '🌍', title: 'Diversity', description: 'We celebrate diverse backgrounds and perspectives in our workforce' },
        { icon: '📈', title: 'Accountability', description: 'We take responsibility for our impact and outcomes' },
        { icon: '⭐', title: 'Excellence', description: 'We strive for the highest standards in everything we do' },
      ],
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          q: 'What is the typical salary range?',
          a: 'Salaries vary by position, experience, and location. We offer competitive packages that align with international humanitarian sector standards. Check individual job postings for specific ranges.',
        },
        {
          q: 'Do you offer remote positions?',
          a: 'Yes! We have several remote positions available across different departments. Remote roles are marked in the job listings.',
        },
        {
          q: 'What is the language requirement?',
          a: 'Most positions require Arabic and English fluency. Language requirements vary by role. Check specific job descriptions for details.',
        },
        {
          q: 'Do you hire international staff?',
          a: 'Absolutely! We have staff from over 20 countries. We provide visa sponsorship and relocation assistance for qualified international candidates.',
        },
        {
          q: 'What are the benefits packages?',
          a: 'Benefits include health insurance, retirement contributions, flexible working arrangements, professional development budget, and paid leave. Full details are provided in offer letters.',
        },
        {
          q: 'How long is the application process?',
          a: 'Typically 3-4 weeks from application to offer. The exact timeline depends on the position and number of applicants.',
        },
      ],
    },
  },

  ar: {
    // Hero Section
    hero: {
      title: 'انضم إلى مهمتنا',
      subtitle: 'ابنِ مسيرة مهنية ذات معنى مع الهيئة',
      description: 'اعمل جنباً إلى جنب مع المهنيين المكرسين لتحويل الحياة وإحداث تغيير إيجابي عبر 30+ دولة. نبحث عن أفراد شغوفين للانضمام إلى فريقنا المتنامي.',
    },

    // Benefits Section
    benefits: {
      title: 'لماذا تعمل مع الهيئة',
      description: 'نستثمر في موظفينا لأن موظفونا هم من يحققون التأثير',
      items: [
        { icon: '❤️', title: 'تأثير حقيقي', description: 'عملك يؤثر بشكل مباشر على ملايين الأشخاص عبر برامجنا الإنسانية' },
        { icon: '🌍', title: 'خبرة عالمية', description: 'اعمل مع فرق دولية وتجربة ثقافات متنوعة' },
        { icon: '📚', title: 'التطور المهني', description: 'تدريب شامل والإرشاد وفرص التطور الوظيفي' },
        { icon: '🤝', title: 'بيئة شاملة', description: 'محيط متنوع وداعم يقيّم كل عضو في الفريق' },
        { icon: '💼', title: 'مزايا تنافسية', description: 'التأمين الصحي وخطط التقاعد والعمل المرن' },
        { icon: '⭐', title: 'الاعتراف بالقيادة', description: 'فرص لقيادة المبادرات والنمو إلى أدوار قيادية' },
      ],
    },

    // Job Categories
    categories: {
      title: 'فئات الوظائف',
      all: 'جميع المواقع',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      internship: 'تدريب',
      volunteer: 'تطوع',
      contract: 'عقد',
    },

    // Locations
    locations: {
      title: 'تصفية حسب الموقع',
      all: 'جميع المواقع',
      amman: 'عمّان، الأردن',
      cairo: 'القاهرة، مصر',
      beirut: 'بيروت، لبنان',
      istanbul: 'إسطنبول، تركيا',
      dubai: 'دبي، الإمارات',
      remote: 'عن بعد',
    },

    // Job Listings
    jobs: {
      title: 'الوظائف المتاحة حالياً',
      view: 'عرض التفاصيل',
      apply: 'تقدم الآن',
      posted: 'نُشرت',
      daysAgo: 'أيام مضت',
      salary: 'الراتب',
      type: 'النوع',
      location: 'الموقع',
      requirements: 'المتطلبات',
      responsibilities: 'المسؤوليات',
      qualifications: 'المؤهلات',

      listings: [
        {
          id: 1,
          title: 'مدير برامج رئيسي',
          category: 'fullTime',
          location: 'amman',
          salary: '45,000 - 65,000 دولار',
          type: 'دوام كامل',
          posted: 5,
          department: 'البرامج',
          description: 'قيادة وإشراف تنفيذ البرامج الإنسانية عبر مناطق متعددة، وضمان الجودة والتأثير والامتثال لمعايير المنظمة.',
          requirements: [
            '8+ سنوات من تجربة إدارة البرامج الإنسانية',
            'درجة الماجستير في مجال ذي صلة',
            'طلاقة في العربية والإنجليزية',
            'مهارات قيادة وإدارة فريق قوية',
            'خبرة مع وكالات الأمم المتحدة أو المنظمات الدولية',
          ],
          responsibilities: [
            'الإشراف على تصميم وتنفيذ ومراقبة البرامج',
            'إدارة فرق تضم 15+ موظفاً عبر مواقع متعددة',
            'ضمان الامتثال لمتطلبات المانحين وسياسات المنظمة',
            'تطوير الشراكات الاستراتيجية مع الحكومة والمنظمات غير الحكومية',
            'تقديم التقارير للإدارة العليا حول تقدم البرامج والتأثير',
          ],
        },
        {
          id: 2,
          title: 'منسق الرعاية الصحية',
          category: 'fullTime',
          location: 'cairo',
          salary: '28,000 - 38,000 دولار',
          type: 'دوام كامل',
          posted: 3,
          department: 'الصحة',
          description: 'تنسيق مبادرات تقديم الرعاية الصحية بما في ذلك العيادات المتنقلة وبرامج صحة الأمومة وحملات الوقاية من الأمراض.',
          requirements: [
            '5+ سنوات في تنسيق الرعاية الصحية أو التمريض',
            'درجة البكالوريوس في الرعاية الصحية أو مجال ذي صلة',
            'مهارات تنظيمية قوية',
            'خبرة في إدارة بيانات الرعاية الصحية',
          ],
          responsibilities: [
            'تنسيق برامج تقديم الرعاية الصحية',
            'إدارة جداول العيادات والموظفين الطبيين',
            'تتبع مقاييس الصحة والنتائج البرامجية',
            'التواصل مع السلطات الصحية المحلية',
          ],
        },
        {
          id: 3,
          title: 'متخصص برامج التعليم',
          category: 'fullTime',
          location: 'beirut',
          salary: '32,000 - 42,000 دولار',
          type: 'دوام كامل',
          posted: 7,
          department: 'التعليم',
          description: 'تطوير وتنفيذ برامج تعليمية بما في ذلك المنح الدراسية وتدريب المهارات ومراكز الموارد التعليمية.',
          requirements: [
            '6+ سنوات في تطوير برامج التعليم',
            'درجة الماجستير في التعليم أو التنمية',
            'خبرة مع المجتمعات اللاجئة والمهجرة',
            'مهارات قوية في المراقبة والتقييم',
          ],
          responsibilities: [
            'تطوير المناهج والمواد التدريبية',
            'الإشراف على إدارة برنامج المنح الدراسية',
            'مراقبة تقدم الطلاب والنتائج التعليمية',
            'الشراكة مع المؤسسات التعليمية المحلية',
          ],
        },
        {
          id: 4,
          title: 'مسؤول المراقبة والتقييم',
          category: 'fullTime',
          location: 'remote',
          salary: '30,000 - 40,000 دولار',
          type: 'دوام كامل',
          posted: 2,
          department: 'العمليات',
          description: 'تصميم وتنفيذ أطر المراقبة، وجمع بيانات التأثير، وإعداد التقارير المستندة على الأدلة حول فعالية البرامج.',
          requirements: [
            '5+ سنوات في المراقبة والتقييم للبرامج الإنسانية والتنموية',
            'درجة البكالوريوس في الإحصاء أو العلوم الاجتماعية أو مجال ذي صلة',
            'الكفاءة في STATA أو R أو Excel',
            'مهارات قوية في تحليل البيانات والتصور',
          ],
          responsibilities: [
            'تصميم أطر مراقبة البرامج',
            'جمع وتحليل بيانات البرامج',
            'إعداد التقارير الفصلية والسنوية عن التأثير',
            'إجراء مسوحات رضا المستفيدين',
          ],
        },
        {
          id: 5,
          title: 'مسؤول التمويل والتطوير',
          category: 'fullTime',
          location: 'dubai',
          salary: '40,000 - 55,000 دولار',
          type: 'دوام كامل',
          posted: 4,
          department: 'التطوير',
          description: 'قيادة تعبئة الموارد من المانحين الأفراد والشركات والشركاء المؤسسيين لدعم المبادرات الإنسانية.',
          requirements: [
            '5+ سنوات في جمع التمويل أو التطوير',
            'خبرة في تطوير المانحين الرئيسيين',
            'مهارات اتصال كتابية وشفهية قوية',
            'درجة البكالوريوس في أي مجال',
          ],
          responsibilities: [
            'تحديد وتطوير احتمالات التمويل',
            'تطوير مقترحات المانحين وطلبات المنح',
            'إدارة علاقات المانحين والاتصالات',
            'تنظيم حملات وفعاليات جمع التمويل',
          ],
        },
        {
          id: 6,
          title: 'متخصص الاتصالات والإعلام',
          category: 'partTime',
          location: 'amman',
          salary: '18,000 - 25,000 دولار',
          type: 'دوام جزئي',
          posted: 6,
          department: 'الاتصالات',
          description: 'تطوير وتنفيذ استراتيجيات الاتصالات وإدارة وسائل التواصل الاجتماعي وإنتاج محتوى الوسائط المتعددة الذي يروي قصص تأثير الهيئة.',
          requirements: [
            '3+ سنوات في الاتصالات أو الإعلام',
            'الكفاءة في إنشاء المحتوى ووسائل التواصل الاجتماعي',
            'مهارات كتابة قوية في العربية والإنجليزية',
            'خبرة في الفيديو أو التصوير الفوتوغرافي',
          ],
          responsibilities: [
            'إدارة قنوات وسائل التواصل الاجتماعي للهيئة',
            'إنتاج محتوى مكتوب وقصص التأثير',
            'إنشاء وتحرير محتوى الوسائط المتعددة',
            'تنسيق التغطية الإعلامية والبيانات الصحفية',
          ],
        },
        {
          id: 7,
          title: 'مسؤول الشؤون المالية والإدارية',
          category: 'fullTime',
          location: 'istanbul',
          salary: '26,000 - 36,000 دولار',
          type: 'دوام كامل',
          posted: 8,
          department: 'الشؤون المالية',
          description: 'إدارة العمليات المالية والميزانيات والامتثال للبرامج الإنسانية عبر مواقع متعددة.',
          requirements: [
            '5+ سنوات في إدارة المالية في المنظمات غير الحكومية',
            'درجة البكالوريوس في المحاسبة أو المالية',
            'الكفاءة في برامج المحاسبة',
            'معرفة بامتثال المانحين الدوليين',
          ],
          responsibilities: [
            'إعداد الميزانيات والتنبؤات المالية',
            'معالجة المعاملات والتقارير المالية',
            'ضمان الامتثال لأنظمة المانحين',
            'إجراء التدقيقات الداخلية والضوابط',
          ],
        },
        {
          id: 8,
          title: 'موظف ميداني إنساني (تدريب)',
          category: 'internship',
          location: 'remote',
          salary: 'غير مدفوع / بدل مقدم',
          type: 'تدريب',
          posted: 1,
          department: 'البرامج',
          description: 'دعم العمليات الميدانية واكتسب خبرة عملية في تنفيذ البرامج الإنسانية مع الإرشاد من الموظفين ذوي الخبرة.',
          requirements: [
            'مسجل حالياً في برنامج درجة ذات صلة (التطوير، العلاقات الدولية، إلخ)',
            'اهتمام قوي بالعمل الإنساني',
            'القدرة على الالتزام بـ 20+ ساعة أسبوعياً لمدة 3-6 أشهر',
            'مهارات اتصال ممتازة',
          ],
          responsibilities: [
            'دعم تنفيذ برامج ميدانية',
            'إجراء مقابلات واستطلاعات المستفيدين',
            'تحضير تقارير وتوثيق البرامج',
            'دعم أنشطة المشاركة المجتمعية',
          ],
        },
      ],
    },

    // Internships Section
    internships: {
      title: 'برامج التدريب',
      description: 'ابدأ مسيرتك الإنسانية من خلال برامج التدريب المنظمة لدينا. اكتسب خبرة عملية وطور مهاراتك وأحدث فرقاً ملموساً.',
      duration: 'المدة: 3-6 أشهر',
      benefits: 'بدل، إرشاد، شهادة',
      programs: [
        {
          name: 'برنامج التدريب الصيفي',
          description: 'تدريب مكثف مدته 3 أشهر خلال فصل الصيف يركز على عمليات البرامج',
        },
        {
          name: 'التدريب خلال العام الدراسي',
          description: 'برنامج مدته 6 أشهر للطلاب لاكتساب خبرة فصل دراسي واحد',
        },
        {
          name: 'تدريب التطور المهني',
          description: 'برنامج مدته 3 أشهر لخريجي الجامعات الجدد الذين يدخلون المجال الإنساني',
        },
      ],
    },

    // Volunteer Section
    volunteer: {
      title: 'فرص التطوع',
      description: 'نرحب بالمتطوعين الشغوفين للمساهمة بمهاراتهم ووقتهم في مهمتنا. سواء كان بإمكانك التطوع لبضع ساعات أو بدوام كامل، لدينا فرص لك.',
      types: [
        { name: 'التطوع عن بعد', description: 'دعم البرامج من أي مكان مع مهام مثل البحث وإدخال البيانات وإنشاء المحتوى' },
        { name: 'التطوع الميداني', description: 'العمل مباشرة مع المجتمعات في برامج إنسانية عبر مناطق عملياتنا' },
        { name: 'القائم على المشاريع', description: 'أدوار تطوع قصيرة الأجل لأحداث أو مشاريع محددة' },
        { name: 'قائم على المهارات', description: 'تطوع خبرتك المهنية في مجالات مثل القانون والطب وتكنولوجيا المعلومات وجمع التمويل' },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: 'يتحدث فريقنا',
      description: 'اسمع من المهنيين المكرسين الذين يحققون مهمة الهيئة الإنسانية',
      employees: [
        {
          name: 'سارة جونسون',
          role: 'مدير برامج رئيسي',
          quote: 'منحني العمل في الهيئة الفرصة لإحداث فرق حقيقي في حياة الناس. الدعم والإرشاد الذي تلقيته سرّع نموي كمتخصص إنساني.',
          image: '👩‍💼',
        },
        {
          name: 'أحمد الرشيد',
          role: 'منسق الرعاية الصحية',
          quote: 'كل يوم أرى تأثير عملنا على وجوه الأسر التي نخدمها. هذا هو ما يبقيني متحفزاً ويذكرني بسبب اختياري لهذه المهنة.',
          image: '👨‍⚕️',
        },
        {
          name: 'ليلى حبيب',
          role: 'متخصصة التعليم',
          quote: 'الثقافة التعاونية في الهيئة استثنائية. أعمل مع عقول رائعة من خلفيات مختلفة، وسوياً نبني تغييراً دائماً في التعليم.',
          image: '👩‍🏫',
        },
        {
          name: 'مايكل تشن',
          role: 'مسؤول المراقبة والتقييم',
          quote: 'الهيئة تثق بي لقيادة صنع القرار المستند على الأدلة. خبرتي في تحليل البيانات لها قيمة حقيقية هنا، وأنا فخور بتقارير التأثير التي ننتجها.',
          image: '👨‍💻',
        },
      ],
    },

    // Application Section
    application: {
      title: 'هل أنت مستعد للتقديم؟',
      description: 'مهتم بالانضمام إلى فريقنا؟ إليك ما يمكنك توقعه في عملية التقديم:',
      steps: [
        { number: '1', title: 'قدم طلب التقديم', description: 'أكمل طلب التقديم عبر الإنترنت مع سيرتك الذاتية وخطاب التغطية' },
        { number: '2', title: 'الفحص الأولي', description: 'يراجع فريق الموارد البشرية الطلبات ويتواصل مع المرشحين المؤهلين' },
        { number: '3', title: 'مقابلة هاتفية', description: 'محادثة أولى مع مدير التوظيف لمناقشة خبرتك' },
        { number: '4', title: 'مقابلة شخصية/فيديو', description: 'التقيت بالفريق واعرف المزيد عن الدور والهيئة' },
        { number: '5', title: 'القرار النهائي', description: 'نقدم عرضنا ونتفاوض على شروط منصبك' },
      ],
      cta: 'عرض جميع المواقف',
    },

    // Culture Section
    culture: {
      title: 'ثقافتنا',
      values: [
        { icon: '🤝', title: 'التعاون', description: 'نعمل معاً عبر الأقسام والمكاتب لتعظيم التأثير' },
        { icon: '🌱', title: 'النمو', description: 'نستثمر في تطورك المهني من خلال التدريب والإرشاد' },
        { icon: '💡', title: 'الابتكار', description: 'نشجع الفكر الإبداعي والنهج الجديد للتحديات الإنسانية' },
        { icon: '🌍', title: 'التنوع', description: 'نحتفل بالخلفيات والمنظورات المتنوعة في قوى عاملنا' },
        { icon: '📈', title: 'المساءلة', description: 'نتحمل مسؤولية تأثيرنا والنتائج' },
        { icon: '⭐', title: 'التميز', description: 'نسعى لتحقيق أعلى المعايير في كل شيء نقوم به' },
      ],
    },

    // FAQ Section
    faq: {
      title: 'الأسئلة الشائعة',
      questions: [
        {
          q: 'ما هو نطاق الراتب النموذجي؟',
          a: 'تختلف الرواتب حسب الموقع والخبرة والموقع. نقدم حزم تنافسية تتوافق مع معايير قطاع الإغاثة الإنسانية الدولية. تحقق من إعلانات الوظائف الفردية للحصول على نطاقات محددة.',
        },
        {
          q: 'هل تقدمون وظائف عن بعد؟',
          a: 'نعم! لدينا عدة مواقع عن بعد متاحة عبر أقسام مختلفة. يتم وضع علامة على الأدوار البعيدة في قائمة الوظائف.',
        },
        {
          q: 'ما هو متطلب اللغة؟',
          a: 'تتطلب معظم المواقع الطلاقة في العربية والإنجليزية. تختلف متطلبات اللغة حسب الدور. تحقق من وصفات الوظائف المحددة للحصول على التفاصيل.',
        },
        {
          q: 'هل تقومون بتوظيف الموظفين الدوليين؟',
          a: 'بالتأكيد! لدينا موظفون من أكثر من 20 دولة. نقدم رعاية التأشيرة ومساعدة إعادة التوطين للمرشحين الدوليين المؤهلين.',
        },
        {
          q: 'ما هي حزم المزايا؟',
          a: 'تشمل المزايا التأمين الصحي ومساهمات التقاعد والعمل المرن وميزانية التطور المهني والإجازات المدفوعة. تُقدم التفاصيل الكاملة في رسائل العرض.',
        },
        {
          q: 'كم يستغرق عملية التقديم؟',
          a: 'عادة ما يستغرق 3-4 أسابيع من التقديم إلى العرض. يعتمد الوقت الفعلي على الموقع وعدد المتقدمين.',
        },
      ],
    },
  },
};

type FilterCategory = 'all' | 'fullTime' | 'partTime' | 'internship' | 'volunteer' | 'contract';
type FilterLocation = 'all' | 'amman' | 'cairo' | 'beirut' | 'istanbul' | 'dubai' | 'remote';

export default function CareersPage({ params }: { params: { locale: Locale } }) {
  const content = careersContent[params.locale];
  const isArabic = params.locale === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [selectedLocation, setSelectedLocation] = useState<FilterLocation>('all');
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const filteredJobs = useMemo(() => {
    return content.jobs.listings.filter((job) => {
      const categoryMatch = selectedCategory === 'all' || job.category === selectedCategory;
      const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
      return categoryMatch && locationMatch;
    });
  }, [selectedCategory, selectedLocation, content.jobs.listings]);

  return (
    <div style={{ direction: dir, backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.deepRoyal} 0%, ${royalColors.darkNavy} 100%)`,
          color: '#ffffff',
          padding: '100px 24px',
          textAlign: 'center',
          borderLeft: `4px solid ${royalColors.hashemiteGold}`,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: isArabic ? '48px' : '64px',
              fontWeight: 800,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '16px',
              letterSpacing: '0.5px',
              lineHeight: 1.2,
            }}
          >
            {content.hero.title}
          </h1>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 600,
              marginBottom: '24px',
              color: royalColors.hashemiteGold,
              letterSpacing: '0.5px',
            }}
          >
            {content.hero.subtitle}
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: isArabic ? '40px' : '48px',
                fontWeight: 700,
                color: royalColors.deepRoyal,
                fontFamily: '"Garamond", "Georgia", serif',
                marginBottom: '16px',
              }}
            >
              {content.benefits.title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: royalColors.textSecondary,
                marginTop: '12px',
              }}
            >
              {content.benefits.description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {content.benefits.items.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '28px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderFormal}`,
                  textAlign: 'center',
                  boxShadow: shadows.md,
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isArabic ? '40px' : '48px',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {content.jobs.title}
          </h2>

          {/* Filters */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? '1fr 1fr' : '1fr 1fr',
              gap: '24px',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}
          >
            {/* Category Filter */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: royalColors.textSecondary,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {content.categories.title}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as FilterCategory)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  borderRadius: borderRadius.md,
                  fontSize: '16px',
                  backgroundColor: '#ffffff',
                  color: royalColors.textOfficial,
                  cursor: 'pointer',
                }}
              >
                <option value="all">{content.categories.all}</option>
                <option value="fullTime">{content.categories.fullTime}</option>
                <option value="partTime">{content.categories.partTime}</option>
                <option value="internship">{content.categories.internship}</option>
                <option value="volunteer">{content.categories.volunteer}</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: royalColors.textSecondary,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {content.locations.title}
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value as FilterLocation)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  borderRadius: borderRadius.md,
                  fontSize: '16px',
                  backgroundColor: '#ffffff',
                  color: royalColors.textOfficial,
                  cursor: 'pointer',
                }}
              >
                <option value="all">{content.locations.all}</option>
                <option value="amman">{content.locations.amman}</option>
                <option value="cairo">{content.locations.cairo}</option>
                <option value="beirut">{content.locations.beirut}</option>
                <option value="istanbul">{content.locations.istanbul}</option>
                <option value="dubai">{content.locations.dubai}</option>
                <option value="remote">{content.locations.remote}</option>
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div style={{ display: 'grid', gap: '24px' }}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  style={{
                    border: `1px solid ${royalColors.borderFormal}`,
                    borderRadius: borderRadius.md,
                    overflow: 'hidden',
                    boxShadow: shadows.sm,
                    transition: 'all 250ms ease-in-out',
                  }}
                >
                  {/* Job Header */}
                  <div
                    onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                    style={{
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: royalColors.deepRoyal,
                          marginBottom: '12px',
                        }}
                      >
                        {job.title}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          flexWrap: 'wrap',
                          fontSize: '14px',
                          color: royalColors.textSecondary,
                        }}
                      >
                        <span>
                          <strong>{content.jobs.type}:</strong> {job.type}
                        </span>
                        <span>
                          <strong>{content.jobs.location}:</strong> {isArabic ? (job.location === 'amman' ? content.locations.amman : job.location === 'cairo' ? content.locations.cairo : job.location === 'beirut' ? content.locations.beirut : job.location === 'istanbul' ? content.locations.istanbul : job.location === 'dubai' ? content.locations.dubai : content.locations.remote) : (job.location === 'amman' ? content.locations.amman : job.location === 'cairo' ? content.locations.cairo : job.location === 'beirut' ? content.locations.beirut : job.location === 'istanbul' ? content.locations.istanbul : job.location === 'dubai' ? content.locations.dubai : content.locations.remote)}
                        </span>
                        <span>
                          <strong>{content.jobs.posted}:</strong> {job.posted} {content.jobs.daysAgo}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '24px',
                        color: royalColors.hashemiteGold,
                        transform: expandedJobId === job.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 250ms ease-in-out',
                      }}
                    >
                      ▼
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedJobId === job.id && (
                    <div
                      style={{
                        padding: '24px',
                        backgroundColor: royalColors.bgRefined,
                        borderTop: `1px solid ${royalColors.borderFormal}`,
                      }}
                    >
                      <div style={{ marginBottom: '24px' }}>
                        <p
                          style={{
                            fontSize: '16px',
                            lineHeight: 1.6,
                            color: royalColors.textOfficial,
                            marginBottom: '16px',
                          }}
                        >
                          {job.description}
                        </p>
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <h4
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: royalColors.deepRoyal,
                            marginBottom: '12px',
                          }}
                        >
                          {content.jobs.requirements}
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            paddingLeft: 0,
                          }}
                        >
                          {job.requirements.map((req, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: '14px',
                                color: royalColors.textSecondary,
                                marginBottom: '8px',
                                paddingLeft: '20px',
                                position: 'relative',
                              }}
                            >
                              <span
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  color: royalColors.hashemiteGold,
                                }}
                              >
                                ✓
                              </span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <h4
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: royalColors.deepRoyal,
                            marginBottom: '12px',
                          }}
                        >
                          {content.jobs.responsibilities}
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            paddingLeft: 0,
                          }}
                        >
                          {job.responsibilities.map((resp, index) => (
                            <li
                              key={index}
                              style={{
                                fontSize: '14px',
                                color: royalColors.textSecondary,
                                marginBottom: '8px',
                                paddingLeft: '20px',
                                position: 'relative',
                              }}
                            >
                              <span
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  color: royalColors.hashemiteGold,
                                }}
                              >
                                ◆
                              </span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '16px',
                        }}
                      >
                        <button
                          style={{
                            padding: '14px 32px',
                            backgroundColor: royalColors.deepRoyal,
                            color: royalColors.hashemiteGold,
                            border: 'none',
                            borderRadius: borderRadius.button,
                            fontSize: '16px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            boxShadow: shadows.royal,
                            transition: 'all 200ms ease-in-out',
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#5e35b1';
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = royalColors.deepRoyal;
                          }}
                        >
                          {content.jobs.apply}
                        </button>
                        <button
                          style={{
                            padding: '14px 32px',
                            backgroundColor: 'transparent',
                            color: royalColors.deepRoyal,
                            border: `2px solid ${royalColors.hashemiteGold}`,
                            borderRadius: borderRadius.button,
                            fontSize: '16px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            transition: 'all 200ms ease-in-out',
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = royalColors.bgRefined;
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                          }}
                        >
                          {content.jobs.view}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: '48px',
                  textAlign: 'center',
                  backgroundColor: royalColors.bgRefined,
                  borderRadius: borderRadius.md,
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    color: royalColors.textSecondary,
                  }}
                >
                  {isArabic ? 'لا توجد وظائف تطابق معاييرك المختارة' : 'No positions match your selected filters'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: isArabic ? '40px' : '48px',
                fontWeight: 700,
                color: royalColors.deepRoyal,
                fontFamily: '"Garamond", "Georgia", serif',
                marginBottom: '16px',
              }}
            >
              {content.internships.title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: royalColors.textSecondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              {content.internships.description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {content.internships.programs.map((program, index) => (
              <div
                key={index}
                style={{
                  padding: '28px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderFormal}`,
                  boxShadow: shadows.md,
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                  }}
                >
                  {program.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {program.description}
                </p>
                <div
                  style={{
                    fontSize: '12px',
                    color: royalColors.hashemiteGold,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {content.internships.duration} • {content.internships.benefits}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: isArabic ? '40px' : '48px',
                fontWeight: 700,
                color: royalColors.deepRoyal,
                fontFamily: '"Garamond", "Georgia", serif',
                marginBottom: '16px',
              }}
            >
              {content.volunteer.title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: royalColors.textSecondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              {content.volunteer.description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? 'repeat(auto-fit, minmax(260px, 1fr))' : 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {content.volunteer.types.map((type, index) => (
              <div
                key={index}
                style={{
                  padding: '28px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderFormal}`,
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                  }}
                >
                  {type.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isArabic ? '40px' : '48px',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {content.culture.title}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? 'repeat(auto-fit, minmax(240px, 1fr))' : 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {content.culture.values.map((value, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${royalColors.borderFormal}`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{value.icon}</div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '8px',
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.5,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: isArabic ? '40px' : '48px',
                fontWeight: 700,
                color: royalColors.deepRoyal,
                fontFamily: '"Garamond", "Georgia", serif',
                marginBottom: '16px',
              }}
            >
              {content.testimonials.title}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: royalColors.textSecondary,
              }}
            >
              {content.testimonials.description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {content.testimonials.employees.map((employee, index) => (
              <div
                key={index}
                style={{
                  padding: '28px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderFormal}`,
                  boxShadow: shadows.sm,
                }}
              >
                <div style={{ fontSize: '56px', marginBottom: '16px', textAlign: 'center' }}>
                  {employee.image}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: royalColors.deepRoyal,
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  "{employee.quote}"
                </p>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: royalColors.textOfficial,
                    marginBottom: '4px',
                  }}
                >
                  {employee.name}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: royalColors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {employee.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: royalColors.bgRefined,
          borderBottom: `1px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isArabic ? '40px' : '48px',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {content.application.title}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            {content.application.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isArabic ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {content.application.steps.map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto 16px',
                    backgroundColor: royalColors.deepRoyal,
                    color: royalColors.hashemiteGold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 700,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                padding: '14px 48px',
                backgroundColor: royalColors.deepRoyal,
                color: royalColors.hashemiteGold,
                border: 'none',
                borderRadius: borderRadius.button,
                fontSize: '16px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                boxShadow: shadows.royal,
                transition: 'all 200ms ease-in-out',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#5e35b1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = royalColors.deepRoyal;
              }}
            >
              {content.application.cta}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isArabic ? '40px' : '48px',
              fontWeight: 700,
              color: royalColors.deepRoyal,
              fontFamily: '"Garamond", "Georgia", serif',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {content.faq.title}
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {content.faq.questions.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  backgroundColor: royalColors.bgRefined,
                  border: `1px solid ${royalColors.borderFormal}`,
                  borderRadius: borderRadius.md,
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: royalColors.deepRoyal,
                    marginBottom: '12px',
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
