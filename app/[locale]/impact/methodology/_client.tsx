'use client';
import React, { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Impact Measurement Methodology',
    heroTitle: 'Our Impact Measurement Framework',
    heroSubtitle: 'Rigorous methodology for tracking, evaluating, and learning from our humanitarian initiatives',

    // Theory of Change Section
    theoryOfChange: {
      title: 'Theory of Change',
      subtitle: 'How JHCO creates sustainable impact across communities',
      diagram: {
        inputs: 'Inputs & Resources',
        inputsDesc: 'Funding, Staff, Volunteers, Partnerships, Technology',
        activities: 'Activities',
        activitiesDesc: 'Emergency Response, Healthcare Programs, Education Initiatives, Livelihood Training, WASH Projects',
        outputs: 'Outputs',
        outputsDesc: '150K Beneficiaries Reached, 50K Training Hours, 10K Medical Consultations',
        outcomes: 'Outcomes',
        outcomesDesc: 'Improved Health Literacy, Income Stability, Child School Enrollment, Water Access',
        impact: 'Long-term Impact',
        impactDesc: 'Sustainable Livelihoods, Strengthened Communities, Reduced Poverty, Empowered Families',
      },

      // Visual representation of theory of change
      flow: [
        { stage: 'INPUTS', description: 'Resources & Partnerships', icon: '💰' },
        { stage: 'ACTIVITIES', description: 'Program Delivery', icon: '🎯' },
        { stage: 'OUTPUTS', description: 'Direct Results', icon: '📊' },
        { stage: 'OUTCOMES', description: 'Behavior Change', icon: '🔄' },
        { stage: 'IMPACT', description: 'Sustainable Change', icon: '✨' },
      ],
    },

    // KPIs Section
    kpis: {
      title: 'Key Performance Indicators (KPIs)',
      subtitle: 'Measurable targets guiding our humanitarian work',
      categories: [
        {
          name: 'Reach & Access',
          icon: '🌍',
          color: royalColors.compassionTeal,
          indicators: [
            { name: 'Beneficiaries Reached', target: '100,000+', frequency: 'Annual' },
            { name: 'Geographic Coverage', target: '30+ Countries', frequency: 'Annual' },
            { name: 'Program Accessibility', target: '95%', frequency: 'Semi-annual' },
            { name: 'Underserved Population Reach', target: '60%', frequency: 'Annual' },
          ],
        },
        {
          name: 'Healthcare Impact',
          icon: '🏥',
          color: royalColors.charityRed,
          indicators: [
            { name: 'Medical Consultations', target: '50,000+', frequency: 'Annual' },
            { name: 'Patient Satisfaction Rate', target: '90%', frequency: 'Quarterly' },
            { name: 'Treatment Success Rate', target: '85%', frequency: 'Semi-annual' },
            { name: 'Prevention Program Coverage', target: '80%', frequency: 'Annual' },
          ],
        },
        {
          name: 'Education Outcomes',
          icon: '📚',
          color: royalColors.impactGreen,
          indicators: [
            { name: 'Student Enrollment', target: '25,000+', frequency: 'Annual' },
            { name: 'Literacy Rate Improvement', target: '40%', frequency: 'Semi-annual' },
            { name: 'School Retention Rate', target: '85%', frequency: 'Annual' },
            { name: 'Teacher Training Completion', target: '95%', frequency: 'Annual' },
          ],
        },
        {
          name: 'Economic Empowerment',
          icon: '💼',
          color: royalColors.hashemiteGold,
          indicators: [
            { name: 'Livelihood Trainees', target: '10,000+', frequency: 'Annual' },
            { name: 'Business Success Rate', target: '72%', frequency: 'Annual' },
            { name: 'Income Increase (avg)', target: '45%', frequency: 'Annual' },
            { name: 'Job Placement Rate', target: '68%', frequency: 'Semi-annual' },
          ],
        },
      ],
    },

    // Data Collection Methods
    dataCollection: {
      title: 'Data Collection Methods',
      subtitle: 'Multi-method approach ensuring comprehensive impact assessment',
      methods: [
        {
          name: 'Household Surveys',
          icon: '📋',
          description: 'Structured questionnaires administered to beneficiaries before and after program participation',
          frequency: 'Baseline, Mid-term, Endline',
          sample: '2,500+ households annually',
          tools: ['Digital forms', 'Paper surveys', 'Mobile apps'],
        },
        {
          name: 'Focus Group Discussions',
          icon: '👥',
          description: 'Qualitative group interviews exploring program experiences, challenges, and lessons learned',
          frequency: 'Quarterly',
          sample: '50+ groups per quarter',
          tools: ['Expert facilitators', 'Video documentation', 'Audio recording'],
        },
        {
          name: 'Key Informant Interviews',
          icon: '🎤',
          description: 'In-depth interviews with program staff, community leaders, and partners',
          frequency: 'Semi-annual',
          sample: '200+ key informants',
          tools: ['Structured guides', 'Qualitative software', 'Photography'],
        },
        {
          name: 'Administrative Data',
          icon: '📊',
          description: 'Program records including enrollment, attendance, completion, and financial data',
          frequency: 'Continuous',
          sample: 'All program participants',
          tools: ['Database systems', 'Excel tracking', 'ERPs'],
        },
        {
          name: 'Community Feedback',
          icon: '💬',
          description: 'Participatory feedback mechanisms including suggestion boxes, SMS feedback, community meetings',
          frequency: 'Monthly',
          sample: 'Open to all community members',
          tools: ['SMS surveys', 'Community boards', 'Hotlines'],
        },
        {
          name: 'Third-party Monitoring',
          icon: '👁️',
          description: 'Independent verification by contracted monitors visiting program sites',
          frequency: 'Bi-monthly',
          sample: '30% of program sites',
          tools: ['Mobile monitoring', 'Spot checks', 'Photo verification'],
        },
      ],
    },

    // Validation Process
    validation: {
      title: 'Data Validation & Quality Assurance',
      subtitle: 'Ensuring accuracy and reliability of all impact data',
      steps: [
        {
          number: '1',
          title: 'Data Entry Verification',
          description: 'Double-entry verification and automated range checks to identify data anomalies',
        },
        {
          number: '2',
          title: 'Triangulation',
          description: 'Cross-checking data from multiple sources to confirm findings and resolve discrepancies',
        },
        {
          number: '3',
          title: 'Quality Audits',
          description: 'Regular audits of data collection processes and adherence to methodology standards',
        },
        {
          number: '4',
          title: 'Statistical Analysis',
          description: 'Rigorous statistical testing to assess significance and control for confounding factors',
        },
        {
          number: '5',
          title: 'Stakeholder Review',
          description: 'Validation workshops with program staff, beneficiaries, and partners to review findings',
        },
      ],
    },

    // Beneficiary Follow-up
    followUp: {
      title: 'Beneficiary Follow-up Process',
      subtitle: 'Maintaining contact and tracking progress beyond program completion',
      timeline: [
        {
          period: 'During Program',
          activities: 'Monthly tracking, Progress reviews, Feedback collection',
          touchpoints: '4-6 contacts per participant',
        },
        {
          period: '3 Months Post-Program',
          activities: 'Follow-up survey, Success verification, Challenges assessment',
          touchpoints: '1 structured contact',
        },
        {
          period: '6 Months Post-Program',
          activities: 'Impact assessment, Sustainability check, Additional support identification',
          touchpoints: '1 structured contact',
        },
        {
          period: '12 Months Post-Program',
          activities: 'Long-term impact evaluation, Success stories capture, Lessons documentation',
          touchpoints: '1 comprehensive evaluation',
        },
        {
          period: '24+ Months Post-Program',
          activities: 'Alumni tracking, Testimonial collection, Long-term outcome assessment',
          touchpoints: 'Annual check-ins',
        },
      ],
      methods: ['Phone calls', 'SMS surveys', 'In-person visits', 'WhatsApp groups', 'Community meetings'],
    },

    // External Evaluations
    externalEvaluations: {
      title: 'External Evaluations & Partnerships',
      subtitle: 'Independent verification and collaborative learning',
      components: [
        {
          name: 'Independent Program Evaluations',
          icon: '📋',
          description: 'Commissioned evaluations by external research firms every 2-3 years',
          frequency: 'Every 2-3 years per program',
          scope: 'Impact assessment, Cost-effectiveness analysis, Recommendations',
        },
        {
          name: 'Third-party Audits',
          icon: '✓',
          description: 'Annual financial and operational audits by certified audit firms',
          frequency: 'Annual',
          scope: 'Financial accuracy, Compliance, Internal controls',
        },
        {
          name: 'Academic Partnerships',
          icon: '🎓',
          description: 'Collaboration with universities for research, analysis, and peer review',
          frequency: 'Ongoing',
          scope: 'Research publications, Methodology review, Evidence generation',
        },
        {
          name: 'Beneficiary Perception Studies',
          icon: '👥',
          description: 'Quarterly independent surveys of beneficiary satisfaction and perception',
          frequency: 'Quarterly',
          scope: 'Service quality, Satisfaction levels, Recommendation rates',
        },
        {
          name: 'Donor Evaluation Reviews',
          icon: '💼',
          description: 'Specific program evaluations required by major donors and funding partners',
          frequency: 'As per donor requirements',
          scope: 'Donor-defined metrics, Accountability, Learning',
        },
      ],
    },

    // Limitations & Learning
    limitationsLearning: {
      title: 'Limitations & Organizational Learning',
      subtitle: 'Acknowledging challenges and fostering continuous improvement',
      limitations: [
        {
          title: 'Measurement Challenges in Emergencies',
          description: 'During rapid response situations, baseline data collection may be limited. We balance rigor with responsiveness.',
        },
        {
          title: 'Attribution vs. Contribution',
          description: 'In complex environments, isolating JHCO\'s impact from other factors requires sophisticated analysis methods.',
        },
        {
          title: 'Long-term Sustainability Tracking',
          description: 'Following beneficiaries over many years is challenging due to migration, communication barriers, and resource constraints.',
        },
        {
          title: 'Context-Specific Indicators',
          description: 'Standardized KPIs may not capture contextual nuances. We continuously refine indicators based on community input.',
        },
        {
          title: 'Resource Constraints',
          description: 'Comprehensive monitoring and evaluation requires significant investment. We balance depth with organizational sustainability.',
        },
      ],
      learningMechanisms: [
        {
          mechanism: 'Quarterly Learning Reviews',
          description: 'Cross-program teams review data trends, identify challenges, and adjust strategies',
        },
        {
          mechanism: 'Annual Impact Workshops',
          description: 'Staff and partners convene to discuss findings, share best practices, and set priorities',
        },
        {
          mechanism: 'Community Feedback Loops',
          description: 'Beneficiary insights directly inform program adjustments and new initiative design',
        },
        {
          mechanism: 'Evaluation Reports & Publications',
          description: 'Share learning through annual reports, case studies, and peer-reviewed publications',
        },
        {
          mechanism: 'Adaptive Management Framework',
          description: 'Systematically test innovations, measure results, and scale what works',
        },
      ],
    },
  },

  ar: {
    title: 'منهجية قياس التأثير',
    heroTitle: 'إطار قياس التأثير لدينا',
    heroSubtitle: 'منهجية صارمة لتتبع وتقييم والتعلم من مبادراتنا الإنسانية',

    // Theory of Change Section
    theoryOfChange: {
      title: 'نظرية التغيير',
      subtitle: 'كيفية قيام الهيئة بخلق تأثير مستدام عبر المجتمعات',
      diagram: {
        inputs: 'المدخلات والموارد',
        inputsDesc: 'التمويل والموظفون والمتطوعون والشراكات والتكنولوجيا',
        activities: 'الأنشطة',
        activitiesDesc: 'الاستجابة للطوارئ وبرامج الصحة ومبادرات التعليم وتدريب سبل العيش ومشاريع المياه والصرف',
        outputs: 'المخرجات',
        outputsDesc: '150 ألف مستفيد تم الوصول إليهم، 50 ألف ساعة تدريب، 10 آلاف استشارة طبية',
        outcomes: 'النتائج',
        outcomesDesc: 'تحسن الثقافة الصحية واستقرار الدخل والتحاق الأطفال بالمدرسة وحصول على المياه',
        impact: 'التأثير طويل الأجل',
        impactDesc: 'سبل عيش مستدامة ومجتمعات قوية وتقليل الفقر وأسر مكينة',
      },

      // Visual representation of theory of change
      flow: [
        { stage: 'المدخلات', description: 'الموارد والشراكات', icon: '💰' },
        { stage: 'الأنشطة', description: 'تنفيذ البرامج', icon: '🎯' },
        { stage: 'المخرجات', description: 'النتائج المباشرة', icon: '📊' },
        { stage: 'النتائج', description: 'تغيير السلوك', icon: '🔄' },
        { stage: 'التأثير', description: 'التغيير المستدام', icon: '✨' },
      ],
    },

    // KPIs Section
    kpis: {
      title: 'مؤشرات الأداء الرئيسية',
      subtitle: 'الأهداف القابلة للقياس التي توجه عملنا الإنساني',
      categories: [
        {
          name: 'الوصول والوصولية',
          icon: '🌍',
          color: royalColors.compassionTeal,
          indicators: [
            { name: 'المستفيدون الذين تم الوصول إليهم', target: '100 ألف+', frequency: 'سنوي' },
            { name: 'التغطية الجغرافية', target: '30+ دول', frequency: 'سنوي' },
            { name: 'إمكانية وصول البرامج', target: '95%', frequency: 'نصف سنوي' },
            { name: 'وصول السكان المحرومين', target: '60%', frequency: 'سنوي' },
          ],
        },
        {
          name: 'تأثير الصحة',
          icon: '🏥',
          color: royalColors.charityRed,
          indicators: [
            { name: 'الاستشارات الطبية', target: '50 ألف+', frequency: 'سنوي' },
            { name: 'معدل رضا المريض', target: '90%', frequency: 'ربع سنوي' },
            { name: 'معدل نجاح العلاج', target: '85%', frequency: 'نصف سنوي' },
            { name: 'تغطية برامج الوقاية', target: '80%', frequency: 'سنوي' },
          ],
        },
        {
          name: 'نتائج التعليم',
          icon: '📚',
          color: royalColors.impactGreen,
          indicators: [
            { name: 'التحاق الطلاب', target: '25 ألف+', frequency: 'سنوي' },
            { name: 'تحسن معدل القراءة والكتابة', target: '40%', frequency: 'نصف سنوي' },
            { name: 'معدل احتفاظ المدرسة', target: '85%', frequency: 'سنوي' },
            { name: 'استكمال تدريب المعلمين', target: '95%', frequency: 'سنوي' },
          ],
        },
        {
          name: 'التمكين الاقتصادي',
          icon: '💼',
          color: royalColors.hashemiteGold,
          indicators: [
            { name: 'متدربو سبل العيش', target: '10 آلاف+', frequency: 'سنوي' },
            { name: 'معدل نجاح الأعمال', target: '72%', frequency: 'سنوي' },
            { name: 'زيادة الدخل (المتوسط)', target: '45%', frequency: 'سنوي' },
            { name: 'معدل التوظيف', target: '68%', frequency: 'نصف سنوي' },
          ],
        },
      ],
    },

    // Data Collection Methods
    dataCollection: {
      title: 'طرق جمع البيانات',
      subtitle: 'نهج متعدد الطرق يضمن تقييم تأثير شامل',
      methods: [
        {
          name: 'الاستقصاءات الأسرية',
          icon: '📋',
          description: 'استبيانات منظمة موزعة على المستفيدين قبل وبعد المشاركة في البرنامج',
          frequency: 'أساسي وفترة وسيطة وختامي',
          sample: 'أكثر من 2500 أسرة سنويا',
          tools: ['نماذج رقمية', 'استبيانات ورقية', 'تطبيقات هاتفية'],
        },
        {
          name: 'مجموعات النقاش المركزة',
          icon: '👥',
          description: 'مقابلات مجموعة نوعية تستكشف تجارب البرنامج والتحديات والدروس المستفادة',
          frequency: 'ربع سنوي',
          sample: '50+ مجموعة في الربع الواحد',
          tools: ['ميسرون متخصصون', 'توثيق فيديو', 'تسجيل صوتي'],
        },
        {
          name: 'مقابلات المخبرين الرئيسيين',
          icon: '🎤',
          description: 'مقابلات متعمقة مع موظفي البرنامج والقادة المجتمعيين والشركاء',
          frequency: 'نصف سنوي',
          sample: '200+ مخبر رئيسي',
          tools: ['أدلة منظمة', 'برامج نوعية', 'تصوير فوتوغرافي'],
        },
        {
          name: 'البيانات الإدارية',
          icon: '📊',
          description: 'سجلات البرنامج بما في ذلك التسجيل والحضور والإنجاز والبيانات المالية',
          frequency: 'مستمر',
          sample: 'جميع المشاركين في البرنامج',
          tools: ['أنظمة قاعدة البيانات', 'تتبع Excel', 'أنظمة ERPs'],
        },
        {
          name: 'ردود فعل المجتمع',
          icon: '💬',
          description: 'آليات ردود الفعل المشاركة بما في ذلك صناديق الاقتراحات واستطلاعات الرسائل النصية والاجتماعات المجتمعية',
          frequency: 'شهري',
          sample: 'مفتوح لجميع أعضاء المجتمع',
          tools: ['استطلاعات الرسائل النصية', 'لوحات المجتمع', 'خطوط ساخنة'],
        },
        {
          name: 'المراقبة من قبل طرف ثالث',
          icon: '👁️',
          description: 'التحقق المستقل من قبل المراقبين المتعاقد معهم في مواقع البرامج',
          frequency: 'كل أسبوعين',
          sample: '30% من مواقع البرنامج',
          tools: ['مراقبة محمولة', 'فحوصات فورية', 'التحقق من الصور'],
        },
      ],
    },

    // Validation Process
    validation: {
      title: 'التحقق من البيانات وضمان الجودة',
      subtitle: 'ضمان دقة وموثوقية جميع بيانات التأثير',
      steps: [
        {
          number: '1',
          title: 'التحقق من إدخال البيانات',
          description: 'التحقق من الإدخال المزدوج والفحوصات الآلية للنطاق لتحديد شذوذ البيانات',
        },
        {
          number: '2',
          title: 'المثلثة',
          description: 'التحقق المتقاطع من البيانات من مصادر متعددة لتأكيد النتائج وحل الاختلافات',
        },
        {
          number: '3',
          title: 'تدقيق الجودة',
          description: 'عمليات تدقيق منتظمة لعمليات جمع البيانات والالتزام بمعايير المنهجية',
        },
        {
          number: '4',
          title: 'التحليل الإحصائي',
          description: 'الاختبار الإحصائي الصارم لتقييم الأهمية والتحكم في العوامل الالتباسية',
        },
        {
          number: '5',
          title: 'مراجعة أصحاب المصلحة',
          description: 'ورش عمل التحقق مع موظفي البرنامج والمستفيدين والشركاء لمراجعة النتائج',
        },
      ],
    },

    // Beneficiary Follow-up
    followUp: {
      title: 'عملية المتابعة مع المستفيدين',
      subtitle: 'الحفاظ على الاتصال وتتبع التقدم بعد انتهاء البرنامج',
      timeline: [
        {
          period: 'أثناء البرنامج',
          activities: 'التتبع الشهري ومراجعات التقدم وجمع ردود الفعل',
          touchpoints: '4-6 جهات اتصال لكل مشارك',
        },
        {
          period: '3 أشهر بعد البرنامج',
          activities: 'استطلاع المتابعة والتحقق من النجاح وتقييم التحديات',
          touchpoints: 'جهة اتصال منظمة واحدة',
        },
        {
          period: '6 أشهر بعد البرنامج',
          activities: 'تقييم التأثير والتحقق من الاستدامة وتحديد الدعم الإضافي',
          touchpoints: 'جهة اتصال منظمة واحدة',
        },
        {
          period: '12 شهرا بعد البرنامج',
          activities: 'تقييم التأثير طويل الأجل والتقاط قصص النجاح وتوثيق الدروس',
          touchpoints: 'تقييم شامل واحد',
        },
        {
          period: '24+ شهرا بعد البرنامج',
          activities: 'تتبع الخريجين وجمع الشهادات وتقييم النتائج طويلة الأجل',
          touchpoints: 'فحوصات سنوية',
        },
      ],
      methods: ['مكالمات هاتفية', 'استطلاعات الرسائل النصية', 'زيارات شخصية', 'مجموعات WhatsApp', 'اجتماعات المجتمع'],
    },

    // External Evaluations
    externalEvaluations: {
      title: 'التقييمات الخارجية والشراكات',
      subtitle: 'التحقق المستقل والتعلم التعاوني',
      components: [
        {
          name: 'تقييمات برنامج مستقلة',
          icon: '📋',
          description: 'تقييمات مفوضة من قبل شركات بحث خارجية كل 2-3 سنوات',
          frequency: 'كل 2-3 سنوات لكل برنامج',
          scope: 'تقييم التأثير وتحليل فعالية التكاليف والتوصيات',
        },
        {
          name: 'عمليات التدقيق من قبل طرف ثالث',
          icon: '✓',
          description: 'عمليات تدقيق مالية وتشغيلية سنوية من قبل شركات تدقيق معتمدة',
          frequency: 'سنوي',
          scope: 'دقة مالية والامتثال والضوابط الداخلية',
        },
        {
          name: 'شراكات أكاديمية',
          icon: '🎓',
          description: 'التعاون مع الجامعات للبحث والتحليل والمراجعة الحقيقية',
          frequency: 'مستمر',
          scope: 'منشورات البحث ومراجعة المنهجية وتوليد الأدلة',
        },
        {
          name: 'دراسات إدراك المستفيدين',
          icon: '👥',
          description: 'استطلاعات مستقلة ربع سنوية لرضا المستفيدين والإدراك',
          frequency: 'ربع سنوي',
          scope: 'جودة الخدمة ومستويات الرضا ومعدلات التوصية',
        },
        {
          name: 'مراجعات تقييم المانحين',
          icon: '💼',
          description: 'تقييمات برنامج محددة مطلوبة من قبل المانحين الرئيسيين وشركاء التمويل',
          frequency: 'حسب متطلبات المانح',
          scope: 'المقاييس المحددة من قبل المانح والمساءلة والتعلم',
        },
      ],
    },

    // Limitations & Learning
    limitationsLearning: {
      title: 'القيود والتعلم المؤسسي',
      subtitle: 'الاعتراف بالتحديات وتعزيز التحسين المستمر',
      limitations: [
        {
          title: 'تحديات القياس في حالات الطوارئ',
          description: 'أثناء حالات الاستجابة السريعة قد يكون جمع البيانات الأساسية محدودا. نحن نوازن بين الدقة والسرعة.',
        },
        {
          title: 'الإسناد مقابل المساهمة',
          description: 'في البيئات المعقدة يتطلب عزل تأثير الهيئة عن العوامل الأخرى طرق تحليلية متطورة.',
        },
        {
          title: 'تتبع الاستدامة طويلة الأجل',
          description: 'متابعة المستفيدين لسنوات عديدة أمر صعب بسبب الهجرة وحواجز الاتصال وقيود الموارد.',
        },
        {
          title: 'مؤشرات محددة بحسب السياق',
          description: 'قد لا تعكس مؤشرات الأداء الموحدة الفروق السياقية. نحن نحسن المؤشرات باستمرار بناء على مدخلات المجتمع.',
        },
        {
          title: 'قيود الموارد',
          description: 'المراقبة والتقييم الشامل يتطلب استثمارا كبيرا. نحن نوازن بين العمق والاستدامة المؤسسية.',
        },
      ],
      learningMechanisms: [
        {
          mechanism: 'استعراضات التعلم الفصلية',
          description: 'تراجع فرق البرنامج المتقاطعة لاتجاهات البيانات وتحديد التحديات وتعديل الاستراتيجيات',
        },
        {
          mechanism: 'ورش عمل التأثير السنوية',
          description: 'يجتمع الموظفون والشركاء لمناقشة النتائج ومشاركة الممارسات الجيدة وتحديد الأولويات',
        },
        {
          mechanism: 'حلقات ردود الفعل المجتمعية',
          description: 'تؤثر رؤى المستفيدين مباشرة على تعديلات البرنامج وتصميم المبادرات الجديدة',
        },
        {
          mechanism: 'تقارير التقييم والمنشورات',
          description: 'مشاركة التعلم من خلال التقارير السنوية ودراسات الحالة والمنشورات التي تمر الاستعراض الحقيقي',
        },
        {
          mechanism: 'إطار الإدارة التكيفية',
          description: 'اختبر الابتكارات بشكل منهجي وقيس النتائج وسع ما ينجح',
        },
      ],
    },
  },
};

export default function ImpactMethodologyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const SectionCard = ({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) => (
    <div style={{
      backgroundColor: 'white',
      padding: '48px 40px',
      borderRadius: borderRadius.lg,
      border: `1px solid ${royalColors.borderFormal}`,
      boxShadow: shadows.sm,
      marginBottom: spacing.xxl,
    }}>
      <h2 style={{
        fontSize: royalTypography.sizes.h2,
        fontFamily: royalTypography.serif,
        fontWeight: '400',
        color: royalColors.darkNavy,
        marginBottom: subtitle ? '12px' : '32px',
        lineHeight: '1.2',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: royalTypography.sizes.body,
          color: royalColors.textSecondary,
          marginBottom: '32px',
          lineHeight: '1.6',
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: gradients.royalGold,
        padding: '96px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            color: royalColors.hashemiteGold,
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Measurement & Evaluation
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

      {/* Main Content */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Theory of Change */}
          <SectionCard title={content.theoryOfChange.title} subtitle={content.theoryOfChange.subtitle}>
            {/* Flow Diagram - Text-based */}
            <div style={{
              display: 'flex',
              flexDirection: ar ? 'row-reverse' : 'row',
              alignItems: 'center',
              gap: spacing.lg,
              overflowX: 'auto',
              marginBottom: spacing.xxl,
              paddingBottom: spacing.lg,
            }}>
              {content.theoryOfChange.flow.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: spacing.lg, flex: '0 0 auto' }}>
                  <div style={{
                    backgroundColor: royalColors.richCream,
                    padding: '24px 16px',
                    borderRadius: borderRadius.card,
                    textAlign: 'center',
                    minWidth: '140px',
                    border: `2px solid ${royalColors.hashemiteGold}`,
                  }}>
                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {item.stage}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: royalColors.textSecondary,
                      margin: '8px 0 0 0',
                    }}>
                      {item.description}
                    </p>
                  </div>
                  {idx < content.theoryOfChange.flow.length - 1 && (
                    <div style={{
                      fontSize: '20px',
                      color: royalColors.hashemiteGold,
                      fontWeight: 'bold',
                      flex: '0 0 auto',
                      transform: ar ? 'scaleX(-1)' : 'scaleX(1)',
                    }}>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: spacing.lg,
            }}>
              {[
                { key: 'inputs', label: content.theoryOfChange.diagram.inputs, desc: content.theoryOfChange.diagram.inputsDesc },
                { key: 'activities', label: content.theoryOfChange.diagram.activities, desc: content.theoryOfChange.diagram.activitiesDesc },
                { key: 'outputs', label: content.theoryOfChange.diagram.outputs, desc: content.theoryOfChange.diagram.outputsDesc },
                { key: 'outcomes', label: content.theoryOfChange.diagram.outcomes, desc: content.theoryOfChange.diagram.outcomesDesc },
                { key: 'impact', label: content.theoryOfChange.diagram.impact, desc: content.theoryOfChange.diagram.impactDesc },
              ].map((item) => (
                <div key={item.key} style={{
                  padding: spacing.lg,
                  backgroundColor: royalColors.bgRefined,
                  borderRadius: borderRadius.card,
                  borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                    margin: 0,
                  }}>
                    {item.label}
                  </h4>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: '8px 0 0 0',
                    lineHeight: '1.5',
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* KPIs Section */}
          <SectionCard title={content.kpis.title} subtitle={content.kpis.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.xl,
            }}>
              {content.kpis.categories.map((category, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'white',
                  border: `2px solid ${category.color}`,
                  borderRadius: borderRadius.card,
                  padding: spacing.lg,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '12px',
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 16px 0',
                  }}>
                    {category.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing.md,
                  }}>
                    {category.indicators.map((ind, i) => (
                      <div key={i} style={{
                        paddingBottom: i < category.indicators.length - 1 ? spacing.md : 0,
                        borderBottom: i < category.indicators.length - 1 ? `1px solid ${royalColors.borderSubtle}` : 'none',
                      }}>
                        <p style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: royalColors.darkNavy,
                          margin: '0 0 4px 0',
                        }}>
                          {ind.name}
                        </p>
                        <div style={{
                          display: 'flex',
                          justifyContent: ar ? 'flex-end' : 'flex-start',
                          gap: spacing.md,
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                        }}>
                          <span style={{ fontWeight: '700', color: category.color }}>{ind.target}</span>
                          <span>|</span>
                          <span>{ind.frequency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Data Collection Methods */}
          <SectionCard title={content.dataCollection.title} subtitle={content.dataCollection.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing.xl,
            }}>
              {content.dataCollection.methods.map((method, idx) => (
                <div key={idx} style={{
                  backgroundColor: royalColors.bgRefined,
                  borderRadius: borderRadius.card,
                  padding: spacing.lg,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <div style={{
                    fontSize: '28px',
                    marginBottom: '12px',
                  }}>
                    {method.icon}
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 12px 0',
                  }}>
                    {method.name}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    margin: '0 0 12px 0',
                    lineHeight: '1.5',
                  }}>
                    {method.description}
                  </p>
                  <div style={{
                    backgroundColor: 'white',
                    padding: spacing.md,
                    borderRadius: borderRadius.sm,
                    marginBottom: spacing.md,
                  }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: royalColors.hashemiteGold,
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {ar ? 'التكرار' : 'Frequency'}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      margin: 0,
                    }}>
                      {method.frequency}
                    </p>
                  </div>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: royalColors.darkNavy,
                    margin: '12px 0 4px 0',
                  }}>
                    {ar ? 'الحجم' : 'Sample'}: <span style={{ color: royalColors.textSecondary, fontWeight: '400' }}>{method.sample}</span>
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: spacing.sm,
                    marginTop: spacing.md,
                  }}>
                    {method.tools.map((tool, t) => (
                      <span key={t} style={{
                        fontSize: '11px',
                        backgroundColor: 'white',
                        color: royalColors.hashemiteGold,
                        padding: '4px 8px',
                        borderRadius: borderRadius.sm,
                        border: `1px solid ${royalColors.borderFormal}`,
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Validation Process */}
          <SectionCard title={content.validation.title} subtitle={content.validation.subtitle}>
            <div style={{
              display: 'flex',
              flexDirection: ar ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
              gap: spacing.lg,
              alignItems: 'flex-start',
            }}>
              {content.validation.steps.map((step, idx) => (
                <div key={idx} style={{
                  flex: idx === 0 ? '1 1 100%' : '1 1 calc(50% - 8px)',
                  minWidth: '200px',
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: ar ? 'row-reverse' : 'row',
                    gap: spacing.lg,
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      minWidth: '48px',
                      borderRadius: '50%',
                      backgroundColor: royalColors.hashemiteGold,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      color: 'white',
                      fontSize: '18px',
                    }}>
                      {step.number}
                    </div>
                    <div style={{
                      flex: 1,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0 0 8px 0',
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontSize: '13px',
                        color: royalColors.textSecondary,
                        lineHeight: '1.5',
                        margin: 0,
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {idx < content.validation.steps.length - 1 && (
                    <div style={{
                      height: '32px',
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: spacing.md,
                      marginLeft: ar ? 0 : '20px',
                      marginRight: ar ? '20px' : 0,
                    }}>
                      <div style={{
                        width: '2px',
                        backgroundColor: royalColors.borderFormal,
                      }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Beneficiary Follow-up */}
          <SectionCard title={content.followUp.title} subtitle={content.followUp.subtitle}>
            <div style={{ marginBottom: spacing.xl }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                margin: '0 0 24px 0',
              }}>
                {ar ? 'جدول المتابعة الزمني' : 'Follow-up Timeline'}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: spacing.lg,
              }}>
                {content.followUp.timeline.map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0 0 8px 0',
                    }}>
                      {item.period}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      margin: '0 0 8px 0',
                      lineHeight: '1.5',
                    }}>
                      {item.activities}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: royalColors.hashemiteGold,
                      margin: 0,
                    }}>
                      {ar ? 'نقاط الاتصال' : 'Touchpoints'}: {item.touchpoints}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: royalColors.bgRefined,
              padding: spacing.lg,
              borderRadius: borderRadius.card,
              textAlign: ar ? 'right' : 'left',
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                {ar ? 'طرق الاتصال' : 'Communication Methods'}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: spacing.md,
              }}>
                {content.followUp.methods.map((method, idx) => (
                  <span key={idx} style={{
                    backgroundColor: 'white',
                    padding: '8px 12px',
                    borderRadius: borderRadius.sm,
                    fontSize: '12px',
                    border: `1px solid ${royalColors.borderFormal}`,
                    color: royalColors.darkNavy,
                  }}>
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* External Evaluations */}
          <SectionCard title={content.externalEvaluations.title} subtitle={content.externalEvaluations.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: spacing.xl,
            }}>
              {content.externalEvaluations.components.map((comp, idx) => (
                <div key={idx} style={{
                  backgroundColor: royalColors.bgRefined,
                  borderRadius: borderRadius.card,
                  padding: spacing.lg,
                  textAlign: ar ? 'right' : 'left',
                  borderTop: `4px solid ${royalColors.hashemiteGold}`,
                }}>
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '12px',
                  }}>
                    {comp.icon}
                  </div>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 8px 0',
                  }}>
                    {comp.name}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: royalColors.textSecondary,
                    lineHeight: '1.5',
                    margin: '0 0 12px 0',
                  }}>
                    {comp.description}
                  </p>
                  <div style={{
                    backgroundColor: 'white',
                    padding: spacing.md,
                    borderRadius: borderRadius.sm,
                    marginBottom: spacing.md,
                  }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: royalColors.hashemiteGold,
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {ar ? 'التكرار' : 'Frequency'}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.darkNavy,
                      fontWeight: '600',
                      margin: 0,
                    }}>
                      {comp.frequency}
                    </p>
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: royalColors.textSecondary,
                    margin: '0 0 4px 0',
                  }}>
                    <span style={{ fontWeight: '700', color: royalColors.darkNavy }}>Scope:</span> {comp.scope}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Limitations & Learning */}
          <SectionCard title={content.limitationsLearning.title} subtitle={content.limitationsLearning.subtitle}>
            {/* Limitations */}
            <div style={{ marginBottom: spacing.xxl }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.charityRed,
                margin: '0 0 24px 0',
              }}>
                {ar ? 'التحديات والقيود المعروفة' : 'Known Limitations & Challenges'}
              </h3>
              <div style={{
                display: 'grid',
                gap: spacing.lg,
              }}>
                {content.limitationsLearning.limitations.map((lim, idx) => (
                  <div key={idx} style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    borderLeft: `4px solid ${royalColors.charityRed}`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0 0 8px 0',
                    }}>
                      {lim.title}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: royalColors.textSecondary,
                      lineHeight: '1.5',
                      margin: 0,
                    }}>
                      {lim.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Mechanisms */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.impactGreen,
                margin: '0 0 24px 0',
              }}>
                {ar ? 'آليات التعلم التنظيمي' : 'Organizational Learning Mechanisms'}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: spacing.lg,
              }}>
                {content.limitationsLearning.learningMechanisms.map((mech, idx) => (
                  <div key={idx} style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    borderTop: `4px solid ${royalColors.impactGreen}`,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0 0 8px 0',
                    }}>
                      {mech.mechanism}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: royalColors.textSecondary,
                      lineHeight: '1.5',
                      margin: 0,
                    }}>
                      {mech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        background: gradients.royalPrimary,
        padding: '64px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '40px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            marginBottom: '16px',
          }}>
            {ar ? 'نتعلم من بيانات التأثير' : 'Learning from Impact Data'}
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: 0.95,
          }}>
            {ar ? 'نلتزم بالشفافية والتعلم المستمر. بيانات التأثير لدينا تدفع الابتكار والتحسين في جميع برامجنا الإنسانية.' : 'We are committed to transparency and continuous learning. Our impact data drives innovation and improvement across all our humanitarian programs.'}
          </p>
          <button style={{
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '12px 28px',
            border: 'none',
            borderRadius: borderRadius.button,
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.goldDark;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            {ar ? 'عرض التقارير' : 'View Reports'}
          </button>
        </div>
      </section>
    </div>
  );
}
