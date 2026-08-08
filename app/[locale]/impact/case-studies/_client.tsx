'use client';
import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Case Studies',
    heroTitle: 'Detailed Program Case Studies',
    heroSubtitle: 'Real stories of transformation: In-depth analysis of JHCO\'s most impactful humanitarian programs',
    filterLabel: 'Filter by Program',
    filterRegionLabel: 'Filter by Region',
    filterAll: 'All Programs',
    filterAllRegions: 'All Regions',
    downloadPDF: 'Download PDF Report',
    problemTitle: 'The Challenge',
    solutionTitle: 'Our Response',
    outcomeTitle: 'The Impact',
    beneficiaryTitle: 'Beneficiary Story',
    metricsTitle: 'Key Metrics',
    caseStudies: [
      {
        id: 1,
        title: 'Emergency Response: Syrian Refugee Crisis',
        year: '2022-2024',
        region: 'Syria & Neighboring Countries',
        program: 'Crisis Response',
        beneficiary: 'Fatima\'s Family',
        beneficiaryStory: 'Fatima, a mother of four, fled Syria with only the clothes on her back. Through JHCO\'s emergency assistance program, her family received food packages, emergency shelter, and medical care that saved her youngest child\'s life during a critical illness.',
        problem: 'Over 50,000 families faced immediate humanitarian crisis with limited access to food, clean water, shelter, and emergency medical care. Children faced malnutrition and preventable diseases.',
        solution: 'JHCO established rapid response teams across multiple locations, distributing emergency food packages, setting up temporary shelters, providing mobile healthcare services, and offering psychosocial support for trauma survivors.',
        outcomes: [
          { label: '50,000+ families assisted', value: '50K+' },
          { label: '100,000+ emergency meals distributed', value: '100K+' },
          { label: '25,000 health consultations', value: '25K' },
          { label: '5,000 people with PTSD support', value: '5K' },
        ],
        highlights: [
          'Emergency response deployed within 48 hours',
          '95% of beneficiaries received food security assistance',
          'Mobile clinics conducted 100+ daily consultations',
          'Psychosocial support improved mental health outcomes by 78%',
        ],
        location: 'Syria, Lebanon, Jordan, Turkey',
        dateRange: 'March 2022 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop',
      },
      {
        id: 2,
        title: 'Healthcare Access in South Sudan',
        year: '2020-2024',
        region: 'South Sudan',
        program: 'Healthcare',
        beneficiary: 'Nyagom\'s Clinic',
        beneficiaryStory: 'The village of Nyagom had no healthcare facility for 15 years. Women died in childbirth, children succumbed to preventable diseases. JHCO\'s mobile clinic brought hope—enabling safe deliveries and vaccinating 8,000+ children in the first year alone.',
        problem: 'Remote villages in South Sudan had zero health infrastructure. Maternal mortality was critically high, vaccine-preventable diseases ravaged communities, and patients traveled 40+ km for basic medical care.',
        solution: 'JHCO established a network of mobile clinics with trained health workers, provided maternal healthcare training, installed vaccination programs, and equipped clinics with essential medical supplies and diagnostic equipment.',
        outcomes: [
          { label: '40 health clinics established', value: '40' },
          { label: '500,000 health consultations', value: '500K' },
          { label: '10,000 safe deliveries', value: '10K' },
          { label: '100,000 vaccinations administered', value: '100K' },
        ],
        highlights: [
          'Maternal mortality reduced by 65% in served areas',
          '240 local health workers trained and deployed',
          'Vaccine coverage increased from 12% to 82%',
          'Child mortality under 5 reduced by 58%',
        ],
        location: 'Jonglei, Upper Nile, Unity States',
        dateRange: 'April 2020 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5f83f58af?w=600&h=400&fit=crop',
      },
      {
        id: 3,
        title: 'Education for Displaced Children',
        year: '2019-2024',
        region: 'Multi-Country (15 locations)',
        program: 'Education',
        beneficiary: 'Ahmed\'s Second Chance',
        beneficiaryStory: 'Ahmed lost two years of schooling due to displacement. JHCO\'s accelerated learning program helped him catch up, and today he\'s not only back on track but mentoring other displaced children in his community.',
        problem: '25,000 displaced children were out of school, unable to access quality education in conflict zones. Teachers were untrained, learning materials were scarce, and schools lacked basic infrastructure.',
        solution: 'JHCO rapidly established classrooms in refugee camps and host communities, trained 300+ teachers in trauma-informed pedagogy, provided comprehensive learning materials, and implemented psychosocial support alongside education.',
        outcomes: [
          { label: '75 schools established', value: '75' },
          { label: '25,000 children educated', value: '25K' },
          { label: '300 teachers trained', value: '300' },
          { label: '90% school attendance rate', value: '90%' },
        ],
        highlights: [
          'Construction completed in average 3 weeks per school',
          '87% of students demonstrate learning progress',
          'Teacher retention rate of 94%',
          'Transition to secondary education: 72% of eligible students',
        ],
        location: 'Jordan, Lebanon, Iraq, Palestine, Yemen',
        dateRange: 'June 2019 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-25c6213db1cc?w=600&h=400&fit=crop',
      },
      {
        id: 4,
        title: 'Economic Empowerment Initiative',
        year: '2018-2024',
        region: 'Yemen, Palestine, Jordan',
        program: 'Livelihoods',
        beneficiary: 'Layla\'s Bakery',
        beneficiaryStory: 'Layla received microfinance and business training from JHCO. She launched a small bakery that now employs 8 women from her community, generating income for her own family and creating economic opportunities for others.',
        problem: 'Vulnerable populations lacked access to microfinance and skills training. Unemployment among youth reached 60%, and household economies were collapsing in conflict-affected regions.',
        solution: 'JHCO launched comprehensive microfinance programs, providing business training, mentorship, market linkage support, and grants to 3,000+ entrepreneurs. Focus was placed on women entrepreneurs and youth.',
        outcomes: [
          { label: '3,000+ businesses launched', value: '3K+' },
          { label: '$5M+ microfinance disbursed', value: '$5M+' },
          { label: '8,000+ people employed', value: '8K+' },
          { label: '85% business success rate', value: '85%' },
        ],
        highlights: [
          'Average monthly income increase of 300% for participants',
          'Women-led businesses: 62% of new enterprises',
          'Loan repayment rate of 93%',
          'Spillover employment: 4+ jobs created per business',
        ],
        location: 'Amman, Gaza, Sana\'a, Hodeidah',
        dateRange: 'November 2018 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        id: 5,
        title: 'Water & Sanitation Initiative',
        year: '2017-2024',
        region: 'Somalia, South Sudan, Chad',
        program: 'WASH',
        beneficiary: 'Baringo Village Transformation',
        beneficiaryStory: 'Baringo village in Somalia spent 6+ hours daily collecting contaminated water. JHCO\'s water system provides clean water at their doorstep. Illness rates dropped 70%, and children now attend school instead of fetching water.',
        problem: 'Over 500,000 people lacked access to clean water and sanitation. Water-borne diseases (cholera, typhoid, dysentery) killed thousands annually. Open defecation practices spread disease.',
        solution: 'JHCO constructed sustainable water infrastructure including boreholes, hand pumps, rainwater collection systems, and built community-managed sanitation facilities with hygiene education programs.',
        outcomes: [
          { label: '100+ water systems installed', value: '100+' },
          { label: '500,000+ people with clean water access', value: '500K+' },
          { label: '70% disease reduction', value: '70%' },
          { label: '50% school attendance increase', value: '50%' },
        ],
        highlights: [
          'Water-related disease cases dropped from 240/month to 72/month',
          'School absenteeism reduced from 42% to 21%',
          'Women saved 18 hours/week previously spent on water collection',
          'Community management training ensured 95% system functionality',
        ],
        location: 'Mogadishu, Kismayo (Somalia), Malakal (South Sudan), N\'Djamena (Chad)',
        dateRange: 'August 2017 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1559128787-b1d8cc33aa3f?w=600&h=400&fit=crop',
      },
      {
        id: 6,
        title: 'Restoring Hope: Supporting Amputees in Gaza',
        year: '2023-2024',
        region: 'Palestine',
        program: 'Healthcare',
        beneficiary: 'Mohammed\'s New Beginning',
        beneficiaryStory: 'Mohammed, a 22-year-old, lost both legs but not his hope. Through JHCO\'s prosthetic program, he received custom prosthetics, physical therapy, and vocational training. He now works as a counselor, helping other amputees rebuild their lives.',
        problem: '850+ amputees lacked access to prosthetics and rehabilitation services. Psychological trauma was severe, with limited mental health support available. Social reintegration seemed impossible.',
        solution: 'JHCO established specialized clinics providing prosthetic fitting, physical rehabilitation, psychosocial counseling, and vocational skills training. Prosthetics were customized and regularly maintained.',
        outcomes: [
          { label: '850+ amputees supported', value: '850+' },
          { label: '1,200+ prosthetics fitted', value: '1.2K' },
          { label: '680+ completed rehabilitation', value: '680+' },
          { label: '420 returned to work/education', value: '420' },
        ],
        highlights: [
          '85% of amputees achieved functional mobility within 6 months',
          'Psychosocial support improved mental health markers by 74%',
          '49% of beneficiaries returned to formal employment or education',
          'Community peer support groups active in 12 locations',
        ],
        location: 'Gaza City, Khan Younis, Rafah',
        dateRange: 'January 2023 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=600&h=400&fit=crop',
      },
      {
        id: 7,
        title: 'Women Empowerment & Microfinance in Jordan',
        year: '2020-2024',
        region: 'Jordan',
        program: 'Livelihoods',
        beneficiary: 'Hana\'s Tailoring Center',
        beneficiaryStory: 'Hana, a widow with three children, completed JHCO\'s tailoring and business training. She now owns a thriving tailoring center, trains other women, and sends all her children to school—breaking the poverty cycle.',
        problem: 'Widows and single mothers in Jordan faced severe economic hardship. Traditional gender roles limited employment opportunities. Illiteracy among beneficiary populations hindered skill acquisition.',
        solution: 'JHCO designed women-specific programs combining basic literacy, vocational skills (tailoring, handicrafts), microfinance loans, and ongoing business mentorship with peer support networks.',
        outcomes: [
          { label: '2,400+ women trained', value: '2.4K' },
          { label: '1,680+ businesses launched', value: '1.68K' },
          { label: '$1.2M+ loans disbursed', value: '$1.2M' },
          { label: '4,200+ family members benefited', value: '4.2K' },
        ],
        highlights: [
          'Average household income increased by 250%',
          '78% of participants now self-sufficient',
          'Children school enrollment increased by 92%',
          'Women business owners hired 3,400+ additional workers',
        ],
        location: 'Amman, Zarqa, Irbid, Karak',
        dateRange: 'March 2020 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        id: 8,
        title: 'Youth Skills Development in Lebanon',
        year: '2019-2024',
        region: 'Lebanon',
        program: 'Education',
        beneficiary: 'Karim\'s Tech Career',
        beneficiaryStory: 'Karim, 19, from a marginalized community in Beirut, had no hope of employment. JHCO\'s digital skills program trained him in web development. He now earns $600/month—more than his parents combined used to make.',
        problem: '12,000+ Lebanese youth were unemployed or underemployed. Limited vocational training opportunities. Digital divide prevented youth from accessing modern job markets.',
        solution: 'JHCO established training centers in underserved areas, offering IT, digital marketing, hospitality, and construction skills with 100% job placement support, internships, and ongoing career counseling.',
        outcomes: [
          { label: '8,500+ youth trained', value: '8.5K' },
          { label: '7,650+ placed in employment', value: '7.65K' },
          { label: '90% job placement rate', value: '90%' },
          { label: '$42M+ total annual income generated', value: '$42M' },
        ],
        highlights: [
          'Average starting salary 250% above minimum wage',
          'Job retention rate of 87% after 2 years',
          '62% pursue further education after skills training',
          'Entrepreneurship rate: 18% started own businesses',
        ],
        location: 'Beirut, Sidon, Tripoli, Tyre',
        dateRange: 'September 2019 - Present',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
    ],
  },
  ar: {
    title: 'حالات الدراسة',
    heroTitle: 'دراسات حالة البرامج المفصلة',
    heroSubtitle: 'قصص حقيقية للتحول: تحليل متعمق لأكثر برامج الهيئة الإنسانية تأثيراً',
    filterLabel: 'تصفية حسب البرنامج',
    filterRegionLabel: 'تصفية حسب المنطقة',
    filterAll: 'جميع البرامج',
    filterAllRegions: 'جميع المناطق',
    downloadPDF: 'تحميل تقرير PDF',
    problemTitle: 'التحدي',
    solutionTitle: 'استجابتنا',
    outcomeTitle: 'التأثير',
    beneficiaryTitle: 'قصة المستفيد',
    metricsTitle: 'المقاييس الرئيسية',
    caseStudies: [
      {
        id: 1,
        title: 'الاستجابة للطوارئ: أزمة اللاجئين السوريين',
        year: '2022-2024',
        region: 'سوريا والدول المجاورة',
        program: 'الاستجابة للأزمات',
        beneficiary: 'عائلة فاطمة',
        beneficiaryStory: 'فاطمة، أم لأربعة أطفال، فرّت من سوريا بملابسها فقط. من خلال برنامج الإغاثة الطارئة للهيئة، تلقت عائلتها حزم طعام وملجأ طارئ ورعاية طبية أنقذت حياة طفلها الأصغر أثناء مرض حرج.',
        problem: 'واجه أكثر من 50,000 عائلة أزمة إنسانية فورية مع وصول محدود إلى الغذاء والمياه النظيفة والمأوى والرعاية الطبية. واجه الأطفال سوء التغذية والأمراض التي يمكن الوقاية منها.',
        solution: 'أنشأت الهيئة فرق استجابة سريعة عبر عدة مواقع، توزيع حزم الطعام الطارئة، وإقامة ملاجئ مؤقتة، وتقديم خدمات الرعاية الصحية المتنقلة، والدعم النفسي الاجتماعي لناجي الصدمات.',
        outcomes: [
          { label: '50000+ أسرة مساعدة', value: '50K+' },
          { label: '100000+ وجبة طارئة موزعة', value: '100K+' },
          { label: '25000 استشارة صحية', value: '25K' },
          { label: '5000 شخص بدعم الصدمة النفسية', value: '5K' },
        ],
        highlights: [
          'فريق الاستجابة نشر في غضون 48 ساعة',
          'تلقى 95% من المستفيدين مساعدة الأمن الغذائي',
          'أجرت العيادات المتنقلة أكثر من 100 استشارة يومياً',
          'حسّن الدعم النفسي الاجتماعي نتائج الصحة العقلية بنسبة 78%',
        ],
        location: 'سوريا، لبنان، الأردن، تركيا',
        dateRange: 'مارس 2022 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop',
      },
      {
        id: 2,
        title: 'الوصول إلى الرعاية الصحية في جنوب السودان',
        year: '2020-2024',
        region: 'جنوب السودان',
        program: 'الصحة',
        beneficiary: 'عيادة نيجوم',
        beneficiaryStory: 'لم تكن بقرية نيجوم أي منشأة صحية لمدة 15 سنة. ماتت النساء أثناء الولادة، وتوفي الأطفال بسبب أمراض يمكن الوقاية منها. أحضرت عيادة الهيئة المتنقلة الأمل، مما أتاح ولادات آمنة وتطعيم 8000+ طفل في السنة الأولى وحدها.',
        problem: 'افتقرت القرى النائية في جنوب السودان إلى أي بنية تحتية صحية. كانت وفيات الأمومة حرجة، وكانت الأمراض التي يمكن الوقاية منها بالتطعيم تعيث فساداً في المجتمعات، وكان المرضى يسافرون 40+ كم للحصول على الرعاية الطبية الأساسية.',
        solution: 'أنشأت الهيئة شبكة من العيادات المتنقلة مع عاملي صحة مدربين، وقدمت تدريب رعاية الأمومة، وثبتت برامج التطعيمات، وجهزت العيادات بالإمدادات الطبية الأساسية والمعدات التشخيصية.',
        outcomes: [
          { label: '40 عيادة صحية منشأة', value: '40' },
          { label: '500000 استشارة صحية', value: '500K' },
          { label: '10000 ولادة آمنة', value: '10K' },
          { label: '100000 تطعيم تم إعطاؤه', value: '100K' },
        ],
        highlights: [
          'تقليل وفيات الأمومة بنسبة 65% في المناطق المخدومة',
          'تدريب وتوزيع 240 من عاملي الصحة المحليين',
          'زيادة تغطية اللقاحات من 12% إلى 82%',
          'تقليل وفيات الأطفال دون الخمس سنوات بنسبة 58%',
        ],
        location: 'جنوب السودان، أعالي النيل',
        dateRange: 'أبريل 2020 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5f83f58af?w=600&h=400&fit=crop',
      },
      {
        id: 3,
        title: 'التعليم للأطفال النازحين',
        year: '2019-2024',
        region: 'متعدد الدول (15 موقع)',
        program: 'التعليم',
        beneficiary: 'فرصة أحمد الثانية',
        beneficiaryStory: 'فقد أحمد سنتين من الدراسة بسبب النزوح. ساعده برنامج التعليم المعجل للهيئة على اللحاق، واليوم ليس فقط مواكباً للمسار بل يرشد الأطفال النازحين الآخرين في مجتمعه.',
        problem: 'كان 25,000 طفل نازح خارج المدرسة، غير قادرين على الوصول إلى التعليم الجودة في مناطق النزاع. كان المعلمون غير مدربين، والمواد التعليمية نادرة، والمدارس تفتقر إلى البنية التحتية الأساسية.',
        solution: 'أنشأت الهيئة بسرعة فصول دراسية في مخيمات اللاجئين والمجتمعات المضيفة، وتدريب 300+ معلم في التربية المراعية للصدمات، وتوفير المواد التعليمية الشاملة، وتنفيذ الدعم النفسي الاجتماعي جنباً إلى جنب مع التعليم.',
        outcomes: [
          { label: '75 مدرسة منشأة', value: '75' },
          { label: '25000 طفل متعلم', value: '25K' },
          { label: '300 معلم مدرب', value: '300' },
          { label: 'معدل حضور المدرسة 90%', value: '90%' },
        ],
        highlights: [
          'اكتمال البناء في المتوسط 3 أسابيع لكل مدرسة',
          '87% من الطلاب يظهرون تقدماً تعليمياً',
          'معدل احتفاظ المعلمين 94%',
          'الانتقال إلى التعليم الثانوي: 72% من الطلاب المؤهلين',
        ],
        location: 'الأردن، لبنان، العراق، فلسطين، اليمن',
        dateRange: 'يونيو 2019 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-25c6213db1cc?w=600&h=400&fit=crop',
      },
      {
        id: 4,
        title: 'مبادرة التمكين الاقتصادي',
        year: '2018-2024',
        region: 'اليمن وفلسطين والأردن',
        program: 'سبل العيش',
        beneficiary: 'مخبزة لايلا',
        beneficiaryStory: 'تلقت لايلا التمويل الأصغر والتدريب على الأعمال من الهيئة. أطلقت مخبزة صغيرة تزدهر الآن وتوظف 8 نساء من مجتمعها، مما يولد دخلاً لعائلتها وينشئ فرص اقتصادية للآخرين.',
        problem: 'افتقرت السكان الضعفاء إلى الوصول إلى التمويل الأصغر والتدريب المهني. بلغ البطالة بين الشباب 60%، وكانت الاقتصادات الأسرية تنهار في المناطق المتأثرة بالنزاع.',
        solution: 'أطلقت الهيئة برامج تمويل شاملة الأصغر، توفير التدريب على الأعمال، والإرشاد، ودعم الربط بالسوق، والمنح ل 3000+ رائد أعمال. كان التركيز على نساء رائدات الأعمال والشباب.',
        outcomes: [
          { label: '3000+ عمل تم إطلاقه', value: '3K+' },
          { label: '5 ملايين+ دولار تمويل', value: '$5M+' },
          { label: '8000+ شخص موظف', value: '8K+' },
          { label: 'معدل نجاح العمل 85%', value: '85%' },
        ],
        highlights: [
          'زيادة الدخل الشهري بمتوسط 300% للمشاركين',
          'الأعمال التي تقودها النساء: 62% من المشاريع الجديدة',
          'معدل سداد القرض 93%',
          '4+ وظائف تم إنشاؤها لكل عمل',
        ],
        location: 'عمّان، غزة، صنعاء، الحديدة',
        dateRange: 'نوفمبر 2018 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        id: 5,
        title: 'مبادرة المياه والصرف الصحي',
        year: '2017-2024',
        region: 'الصومال وجنوب السودان وتشاد',
        program: 'المياه والصرف',
        beneficiary: 'تحول قرية بارينجو',
        beneficiaryStory: 'كانت قرية بارينجو في الصومال تقضي 6+ ساعات يومياً في جمع المياه الملوثة. يوفر نظام المياه للهيئة المياه النظيفة على أعتابهم. انخفضت معدلات المرض 70%، واليوم يحضر الأطفال المدرسة بدلاً من جمع المياه.',
        problem: 'افتقر 500,000+ شخص إلى الوصول إلى المياه النظيفة والصرف الصحي. كانت الأمراض المنقولة بالمياه (الكوليرا، التيفوئيد، الزحار) تقتل الآلاف سنوياً. كانت ممارسات التغوط في العراء تنشر المرض.',
        solution: 'بنت الهيئة بنية تحتية مستدامة للمياه تشمل الآبار والمضخات اليدوية وأنظمة جمع مياه الأمطار، وبنت منشآت صرف صحي يديرها المجتمع مع برامج تثقيف النظافة.',
        outcomes: [
          { label: '100+ نظام مائي منشأ', value: '100+' },
          { label: '500000+ شخص مع وصول للماء النظيف', value: '500K+' },
          { label: 'تقليل الأمراض 70%', value: '70%' },
          { label: 'زيادة حضور المدرسة 50%', value: '50%' },
        ],
        highlights: [
          'انخفضت حالات الأمراض المرتبطة بالمياه من 240/شهر إلى 72/شهر',
          'انخفض الغياب المدرسي من 42% إلى 21%',
          'وفرت النساء 18 ساعة/أسبوع كانت تنفق على جمع المياه سابقاً',
          'ضمن التدريب على الإدارة المجتمعية 95% وظيفة النظام',
        ],
        location: 'مقديشو، كسمايو (الصومال)، ملكال (جنوب السودان)، نجامينا (تشاد)',
        dateRange: 'أغسطس 2017 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1559128787-b1d8cc33aa3f?w=600&h=400&fit=crop',
      },
      {
        id: 6,
        title: 'استعادة الأمل: دعم الأشخاص ذوي البتر في غزة',
        year: '2023-2024',
        region: 'فلسطين',
        program: 'الصحة',
        beneficiary: 'بداية محمد الجديدة',
        beneficiaryStory: 'فقد محمد، 22 سنة، كلا ساقيه لكن لم يفقد أمله. من خلال برنامج الأطراف الصناعية للهيئة، تلقى أطرافاً صناعية مخصصة والعلاج الفيزيائي والتدريب المهني. يعمل الآن كمستشار، ساعداً أشخاص آخرين ذوي البتر في إعادة بناء حياتهم.',
        problem: 'افتقر 850+ شخص من ذوي البتر إلى الوصول إلى الأطراف الصناعية وخدمات إعادة التأهيل. كانت الصدمة النفسية شديدة، مع دعم صحة عقلية محدود متاح. بدت إعادة الدمج الاجتماعي مستحيلة.',
        solution: 'أنشأت الهيئة عيادات متخصصة توفر تركيب أطراف صناعية، إعادة تأهيل بدني، استشارات نفسية، وتدريب مهن. تم تخصيص الأطراف الصناعية والصيانة المنتظمة.',
        outcomes: [
          { label: '850+ شخص من ذوي البتر مدعوم', value: '850+' },
          { label: '1200+ أطراف صناعية مركبة', value: '1.2K' },
          { label: '680+ أكملوا إعادة التأهيل', value: '680+' },
          { label: '420 عاد إلى العمل/التعليم', value: '420' },
        ],
        highlights: [
          '85% من ذوي البتر حققوا الحركة الوظيفية خلال 6 أشهر',
          'حسّن الدعم النفسي الاجتماعي مؤشرات الصحة العقلية بنسبة 74%',
          '49% من المستفيدين عادوا للعمل الرسمي أو التعليم',
          'مجموعات الدعم من الأقران النشطة في 12 موقع',
        ],
        location: 'مدينة غزة، خان يونس، رفح',
        dateRange: 'يناير 2023 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=600&h=400&fit=crop',
      },
      {
        id: 7,
        title: 'تمكين النساء والتمويل الأصغر في الأردن',
        year: '2020-2024',
        region: 'الأردن',
        program: 'سبل العيش',
        beneficiary: 'مركز حنا للخياطة',
        beneficiaryStory: 'حنا، أرملة لديها ثلاثة أطفال، أكملت برنامج الخياطة والتدريب على الأعمال للهيئة. تملك الآن مركزاً للخياطة مزدهراً، وتدرب نساء أخريات، وترسل جميع أطفالها إلى المدرسة - مكسرة دورة الفقر.',
        problem: 'واجهت الأرامل والأمهات العازبات في الأردن حرماناً اقتصادياً شديداً. حددت الأدوار الجنسانية التقليدية فرص العمل. كانت الأمية بين السكان المستفيدين تعيق اكتساب المهارات.',
        solution: 'صممت الهيئة برامج خاصة بالنساء تجمع بين محو الأمية الأساسية والمهارات المهنية (الخياطة والحرف اليدوية) وقروض التمويل الأصغر والإرشاد المستمر للأعمال مع شبكات الدعم بالأقران.',
        outcomes: [
          { label: '2400+ امرأة مدربة', value: '2.4K' },
          { label: '1680+ عمل تم إطلاقه', value: '1.68K' },
          { label: '1.2 مليون+ دولار قروض موزعة', value: '$1.2M' },
          { label: '4200+ أفراد من أسرة استفادوا', value: '4.2K' },
        ],
        highlights: [
          'زيادة دخل الأسرة بمتوسط 250%',
          '78% من المشاركين الآن مكتفون ذاتياً',
          'زيادة التحاق الأطفال بالمدرسة بنسبة 92%',
          'نساء رائدات الأعمال وظفن 3400+ عاملاً إضافياً',
        ],
        location: 'عمّان، الزرقاء، إربد، الكرك',
        dateRange: 'مارس 2020 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        id: 8,
        title: 'تطوير مهارات الشباب في لبنان',
        year: '2019-2024',
        region: 'لبنان',
        program: 'التعليم',
        beneficiary: 'مسيرة كريم التقنية',
        beneficiaryStory: 'كريم، 19 سنة، من مجتمع هامشي في بيروت، لم يكن لديه أمل في التوظيف. درّبه برنامج المهارات الرقمية للهيئة على تطوير الويب. يكسب الآن 600 دولار شهرياً - أكثر مما كان والداه يكسبانه معاً.',
        problem: 'كان 12,000+ شاب لبناني عاطلين عن العمل أو مستخدمين بأقل من طاقتهم. فرص التدريب المهني محدودة. الفجوة الرقمية منعت الشباب من الوصول إلى أسواق العمل الحديثة.',
        solution: 'أنشأت الهيئة مراكز تدريب في المناطق المحرومة، وتقديم مهارات تكنولوجيا المعلومات والتسويق الرقمي والضيافة والبناء مع دعم التوظيف بنسبة 100% والتدريب الداخلي والإرشاد الوظيفي المستمر.',
        outcomes: [
          { label: '8500+ شاب مدرب', value: '8.5K' },
          { label: '7650+ موظفة في العمل', value: '7.65K' },
          { label: 'معدل التوظيف 90%', value: '90%' },
          { label: '42 مليون+ دولار دخل سنوي إجمالي', value: '$42M' },
        ],
        highlights: [
          'الراتب الابتدائي المتوسط 250% فوق الحد الأدنى للأجور',
          'معدل الاحتفاظ بالوظيفة 87% بعد سنتين',
          '62% يتابع التعليم الإضافي بعد التدريب المهني',
          'معدل ريادة الأعمال: 18% أطلقوا أعمالهم الخاصة',
        ],
        location: 'بيروت، صيدا، طرابلس، صور',
        dateRange: 'سبتمبر 2019 - الآن',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
    ],
  },
};

const CaseStudyCard = ({ study, locale, ar }: { study: typeof pageContent.en.caseStudies[0]; locale: Locale; ar: boolean }) => {
  const content = pageContent[locale];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      border: `1px solid ${royalColors.borderFormal}`,
      boxShadow: '0 8px 24px rgba(10,20,40,0.08)',
      transition: 'all 0.3s ease',
      marginBottom: '32px',
    }}>
      {/* Image Section */}
      <div style={{
        width: '100%',
        height: '320px',
        backgroundColor: royalColors.bgRefined,
        backgroundImage: `url('${study.imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '24px',
      }}>
        {/* Overlay with tags */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            {study.program}
          </span>
          <span style={{
            backgroundColor: 'rgba(255,255,255,0.25)',
            color: 'white',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            backdropFilter: 'blur(8px)',
          }}>
            {study.year}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '40px', textAlign: ar ? 'right' : 'left' }}>
        {/* Header */}
        <h3 style={{
          fontSize: '28px',
          fontFamily: royalTypography.serif,
          color: royalColors.darkNavy,
          marginTop: 0,
          marginBottom: '12px',
        }}>
          {study.title}
        </h3>

        <p style={{
          fontSize: '14px',
          color: royalColors.textSecondary,
          fontWeight: '600',
          margin: '0 0 20px 0',
          letterSpacing: '0.5px',
        }}>
          📍 {study.location} • {study.dateRange}
        </p>

        {/* Beneficiary Story Box */}
        <div style={{
          backgroundColor: royalColors.bgRefined,
          padding: '20px',
          borderRadius: '8px',
          borderLeft: `4px solid ${royalColors.compassionTeal}`,
          marginBottom: '28px',
        }}>
          <p style={{
            fontSize: '12px',
            fontWeight: '700',
            color: royalColors.compassionTeal,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 0 8px 0',
          }}>
            {content.beneficiaryTitle}: {study.beneficiary}
          </p>
          <p style={{
            fontSize: '15px',
            color: royalColors.textOfficial,
            lineHeight: '1.6',
            margin: 0,
            fontStyle: 'italic',
          }}>
            "{study.beneficiaryStory}"
          </p>
        </div>

        {/* Problem-Solution-Outcome Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: ar ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}>
          {/* Problem */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: royalColors.deepCrimson,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 12px 0',
            }}>
              {content.problemTitle}
            </h4>
            <p style={{
              fontSize: '14px',
              color: royalColors.textOfficial,
              lineHeight: '1.6',
              margin: 0,
            }}>
              {study.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: royalColors.compassionTeal,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 12px 0',
            }}>
              {content.solutionTitle}
            </h4>
            <p style={{
              fontSize: '14px',
              color: royalColors.textOfficial,
              lineHeight: '1.6',
              margin: 0,
            }}>
              {study.solution}
            </p>
          </div>

          {/* Outcome */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: royalColors.impactGreen,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 12px 0',
            }}>
              {content.outcomeTitle}
            </h4>
            <ul style={{
              margin: 0,
              paddingLeft: ar ? 0 : '20px',
              paddingRight: ar ? '20px' : 0,
              listStyle: ar ? 'none' : 'disc',
            }}>
              {study.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.5',
                  marginBottom: '6px',
                }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{
          backgroundColor: royalColors.ivoryBg,
          padding: '28px',
          borderRadius: '8px',
          marginBottom: '28px',
        }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '700',
            color: royalColors.darkNavy,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 0 20px 0',
          }}>
            {content.metricsTitle}
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
          }}>
            {study.outcomes.map((metric, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '6px',
                  fontFamily: royalTypography.serif,
                }}>
                  {metric.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: royalColors.textSecondary,
                  lineHeight: '1.4',
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: ar ? 'flex-end' : 'flex-start',
          flexWrap: 'wrap',
        }}>
          <button style={{
            background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
            color: 'white',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 20, 140, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => {
              const element = document.createElement('a');
              element.setAttribute('href', '#');
              element.setAttribute('download', `case-study-${study.id}.pdf`);
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            }}
          >
            📄 {content.downloadPDF}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CaseStudiesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Extract unique programs and regions
  const programs = Array.from(new Set(content.caseStudies.map(cs => cs.program)));
  const regions = Array.from(new Set(content.caseStudies.map(cs => cs.region)));

  // Filter case studies
  const filteredStudies = content.caseStudies.filter(study => {
    const matchesProgram = !selectedProgram || study.program === selectedProgram;
    const matchesRegion = !selectedRegion || study.region === selectedRegion;
    return matchesProgram && matchesRegion;
  });

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
        padding: '80px 32px',
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
            Real Impact Stories
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
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95,
          }}>
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        padding: '48px 32px',
        backgroundColor: royalColors.bgRefined,
        borderBottom: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ar ? 'repeat(auto-fit, minmax(250px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {/* Program Filter */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}>
                {content.filterLabel}
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontFamily: royalTypography.sansSerif,
                }}
              >
                <option value="">{content.filterAll}</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}>
                {content.filterRegionLabel}
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: `1px solid ${royalColors.borderFormal}`,
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontFamily: royalTypography.sansSerif,
                }}
              >
                <option value="">{content.filterAllRegions}</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Clear Button */}
          {(selectedProgram || selectedRegion) && (
            <div style={{ marginTop: '20px' }}>
              <button
                onClick={() => {
                  setSelectedProgram('');
                  setSelectedRegion('');
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: `1px solid ${royalColors.hashemiteGold}`,
                  backgroundColor: 'transparent',
                  color: royalColors.hashemiteGold,
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
                  e.currentTarget.style.color = royalColors.darkNavy;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = royalColors.hashemiteGold;
                }}
              >
                ✕ Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredStudies.length > 0 ? (
            <div>
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} locale={locale} ar={ar} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 32px',
              color: royalColors.textSecondary,
            }}>
              <p style={{ fontSize: '18px', fontWeight: '600' }}>
                No case studies match your filters. Please try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
