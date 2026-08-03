'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { royalColors, shadows, borderRadius } from '@/lib/royalDesign';
import { useState } from 'react';

const emergencyContent = {
  en: {
    hero: {
      title: 'Emergency Response Hub',
      subtitle: 'Rapid Response to Global Crises',
      description: 'Mobilizing immediate humanitarian assistance to families facing acute emergencies and crisis situations',
    },

    overview: {
      title: 'Our Emergency Response Mission',
      description: 'When crises strike, JHCO stands ready with rapid, life-saving humanitarian assistance. Our emergency response system is designed to deploy aid within hours of crisis declaration, ensuring vulnerable populations receive critical support when they need it most.',
      keyPoint: 'Speed saves lives. Every moment counts in an emergency.',
    },

    activeCrises: {
      title: 'Active Crisis Situations',
      description: 'Real-time monitoring and response to humanitarian emergencies',
      crises: [
        {
          id: 1,
          name: 'Gaza Humanitarian Crisis',
          nameAr: 'أزمة غزة الإنسانية',
          region: 'Palestine',
          regionAr: 'فلسطين',
          status: 'Critical',
          statusAr: 'حرج',
          severity: 95,
          affectedPopulation: '2.1M+',
          affectedPopulationAr: '2.1 مليون+',
          description: 'Ongoing humanitarian emergency affecting millions',
          descriptionAr: 'أزمة إنسانية مستمرة تؤثر على الملايين',
          activeSince: 'October 2023',
          activeSinceAr: 'أكتوبر 2023',
        },
        {
          id: 2,
          name: 'Syrian Refugee Crisis',
          nameAr: 'أزمة اللاجئين السوريين',
          region: 'Syria & Neighboring Countries',
          regionAr: 'سوريا والدول المجاورة',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 82,
          affectedPopulation: '6.8M+',
          affectedPopulationAr: '6.8 مليون+',
          description: 'Prolonged displacement crisis affecting multiple regions',
          descriptionAr: 'أزمة نزوح طويلة الأجل تؤثر على عدة مناطق',
          activeSince: 'March 2011',
          activeSinceAr: 'مارس 2011',
        },
        {
          id: 3,
          name: 'Yemen Humanitarian Emergency',
          nameAr: 'حالة الطوارئ الإنسانية في اليمن',
          region: 'Yemen',
          regionAr: 'اليمن',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 88,
          affectedPopulation: '30M+',
          affectedPopulationAr: '30 مليون+',
          description: 'Complex emergency with food insecurity and health crisis',
          descriptionAr: 'حالة طارئة معقدة مع انعدام الأمن الغذائي وأزمة صحية',
          activeSince: 'March 2015',
          activeSinceAr: 'مارس 2015',
        },
        {
          id: 4,
          name: 'Afghanistan Crisis',
          nameAr: 'أزمة أفغانستان',
          region: 'Afghanistan',
          regionAr: 'أفغانستان',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 80,
          affectedPopulation: '38M+',
          affectedPopulationAr: '38 مليون+',
          description: 'Economic collapse and humanitarian emergency',
          descriptionAr: 'انهيار اقتصادي وحالة طوارئ إنسانية',
          activeSince: 'August 2021',
          activeSinceAr: 'أغسطس 2021',
        },
      ],
    },

    statusIndicators: {
      critical: 'Critical - Life-threatening emergency',
      criticalAr: 'حرج - حالة طارئة تهدد الحياة',
      severe: 'Severe - Major humanitarian emergency',
      severeAr: 'شديد - حالة طارئة إنسانية كبرى',
      moderate: 'Moderate - Ongoing humanitarian concerns',
      moderateAr: 'معتدل - قلق إنساني مستمر',
    },

    emergencyPrograms: {
      title: 'Emergency Response Programs',
      description: 'Coordinated rapid response across critical areas',
      programs: [
        {
          id: 1,
          icon: '🚨',
          name: 'Emergency Relief Fund',
          nameAr: 'صندوق الإغاثة الطارئة',
          description: 'Immediate cash assistance and emergency supplies for crisis-affected families',
          descriptionAr: 'مساعدة نقدية فورية وإمدادات طارئة للأسر المتضررة من الأزمات',
          focus: ['Emergency cash', 'Essential supplies', 'Rapid deployment'],
          focusAr: ['النقد الطارئ', 'الإمدادات الأساسية', 'النشر السريع'],
        },
        {
          id: 2,
          icon: '🏥',
          name: 'Emergency Medical Response',
          nameAr: 'استجابة طبية طارئة',
          description: 'Urgent medical assistance, trauma care, and health emergency support',
          descriptionAr: 'مساعدة طبية عاجلة وعلاج الصدمات ودعم حالات الطوارئ الصحية',
          focus: ['Emergency medicine', 'Trauma care', 'Health supplies'],
          focusAr: ['الطب الطارئ', 'علاج الصدمات', 'المستلزمات الصحية'],
        },
        {
          id: 3,
          icon: '🍖',
          name: 'Emergency Food Assistance',
          nameAr: 'مساعدة غذائية طارئة',
          description: 'Rapid food distribution and nutrition support in crisis situations',
          descriptionAr: 'توزيع غذاء سريع ودعم تغذوي في حالات الأزمات',
          focus: ['Emergency rations', 'Food distribution', 'Nutrition kits'],
          focusAr: ['الحصص الطارئة', 'توزيع الغذاء', 'مجموعات التغذية'],
        },
        {
          id: 4,
          icon: '🛖',
          name: 'Emergency Shelter & WASH',
          nameAr: 'مأوى طارئ ومياه صحية',
          description: 'Temporary shelter, water, and sanitation support for displaced populations',
          descriptionAr: 'مأوى مؤقت وخدمات مياه صحية للسكان المشردين',
          focus: ['Shelter kits', 'Water access', 'Sanitation facilities'],
          focusAr: ['مجموعات المأوى', 'الوصول للمياه', 'مرافق الصرف'],
        },
        {
          id: 5,
          icon: '👨‍👩‍👧‍👦',
          name: 'Vulnerable Group Protection',
          nameAr: 'حماية الفئات الضعيفة',
          description: 'Focused assistance for children, women, and elderly in crisis',
          descriptionAr: 'مساعدة مركزة للأطفال والنساء والمسنين في الأزمات',
          focus: ['Child protection', 'Women support', 'Elderly care'],
          focusAr: ['حماية الطفل', 'دعم النساء', 'رعاية المسنين'],
        },
        {
          id: 6,
          icon: '💬',
          name: 'Psychosocial Support',
          nameAr: 'الدعم النفسي والاجتماعي',
          description: 'Mental health services and psychological support for trauma victims',
          descriptionAr: 'خدمات الصحة النفسية والدعم النفسي لضحايا الصدمات',
          focus: ['Counseling', 'Mental health support', 'Community healing'],
          focusAr: ['الاستشارة', 'دعم الصحة النفسية', 'الشفاء المجتمعي'],
        },
      ],
    },

    donationFastPath: {
      title: 'Emergency Donation - Fast Track',
      description: 'Your immediate support saves lives',
      appeal: 'Every donation goes directly to emergency relief. Contribute now:',
      appealAr: 'كل تبرع يذهب مباشرة إلى الإغاثة الطارئة. ساهم الآن:',
      amounts: [
        { value: 50, currency: '$', label: 'Emergency kit for 1 family' },
        { value: 150, currency: '$', label: 'Medical emergency response' },
        { value: 300, currency: '$', label: 'Week of emergency food' },
        { value: 500, currency: '$', label: 'Complete family emergency package' },
      ],
      amountsAr: [
        { value: 50, currency: '$', label: 'مجموعة طارئة لعائلة واحدة' },
        { value: 150, currency: '$', label: 'استجابة طبية طارئة' },
        { value: 300, currency: '$', label: 'أسبوع من الغذاء الطارئ' },
        { value: 500, currency: '$', label: 'حزمة عائلة طارئة كاملة' },
      ],
    },

    situationReports: {
      title: 'Situation Reports',
      description: 'Latest updates from crisis zones',
      reports: [
        {
          id: 1,
          date: 'August 3, 2026',
          dateAr: '3 أغسطس 2026',
          title: 'Gaza: Emergency Food Distribution Reaches 50,000 Families',
          titleAr: 'غزة: توزيع غذاء طارئ يصل إلى 50,000 أسرة',
          summary: 'JHCO emergency teams distributed emergency food packages to 50,000 families across Gaza Strip over the past week, addressing acute food insecurity.',
          summaryAr: 'وزعت فرق JHCO الطارئة حزم غذاء طارئة على 50,000 أسرة عبر قطاع غزة خلال الأسبوع الماضي، معالجة انعدام الأمن الغذائي الحاد.',
        },
        {
          id: 2,
          date: 'August 2, 2026',
          dateAr: '2 أغسطس 2026',
          title: 'Yemen: Mobile Medical Clinics Serve Remote Communities',
          titleAr: 'اليمن: العيادات الطبية المتنقلة تخدم المجتمعات النائية',
          summary: 'Mobile medical teams provided healthcare services to 8,500 people in remote Yemen areas, treating emergency cases and distributing medications.',
          summaryAr: 'قدمت فرق طبية متنقلة خدمات رعاية صحية لـ 8,500 شخص في مناطق نائية باليمن، معالجة الحالات الطارئة وتوزيع الأدوية.',
        },
        {
          id: 3,
          date: 'August 1, 2026',
          dateAr: '1 أغسطس 2026',
          title: 'Syria: Winter Preparedness Campaign Begins',
          titleAr: 'سوريا: حملة التحضير للشتاء تبدأ',
          summary: 'JHCO launched comprehensive winter preparedness program providing blankets, heaters, and winterization kits to 75,000 families in refugee camps.',
          summaryAr: 'أطلقت JHCO برنامج التحضير الشامل للشتاء وفرت بطانيات وسخانات ومجموعات تشتية لـ 75,000 أسرة في المخيمات.',
        },
        {
          id: 4,
          date: 'July 31, 2026',
          dateAr: '31 يوليو 2026',
          title: 'Afghanistan: Education Continuity Program Supports 25,000 Students',
          titleAr: 'أفغانستان: برنامج استمرارية التعليم يدعم 25,000 طالب',
          summary: 'Despite economic crisis, JHCO continues providing education support to 25,000 vulnerable students through emergency learning centers.',
          summaryAr: 'رغم الأزمة الاقتصادية، تواصل JHCO تقديم الدعم التعليمي لـ 25,000 طالب ضعيف من خلال مراكز التعلم الطارئة.',
        },
      ],
    },

    fieldCoordinators: {
      title: 'Field Coordinator Contacts',
      description: 'Regional emergency coordination centers',
      regions: [
        {
          id: 1,
          name: 'Middle East & North Africa',
          nameAr: 'الشرق الأوسط وشمال أفريقيا',
          coordinator: 'Dr. Amara Hassan',
          coordinatorAr: 'د. أمارة حسن',
          email: 'mena.emergency@jhco.org',
          phone: '+966-11-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Gaza', 'Syria', 'Yemen', 'Iraq', 'Lebanon'],
          coverageAr: ['غزة', 'سوريا', 'اليمن', 'العراق', 'لبنان'],
        },
        {
          id: 2,
          name: 'South Asia',
          nameAr: 'جنوب آسيا',
          coordinator: 'Ms. Priya Sharma',
          coordinatorAr: 'السيدة بريا شارما',
          email: 'south.asia@jhco.org',
          phone: '+92-21-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Afghanistan', 'Pakistan', 'Bangladesh'],
          coverageAr: ['أفغانستان', 'باكستان', 'بنجلاديش'],
        },
        {
          id: 3,
          name: 'Sub-Saharan Africa',
          nameAr: 'أفريقيا جنوب الصحراء',
          coordinator: 'Mr. James Okonkwo',
          coordinatorAr: 'السيد جيمس أوكونكوو',
          email: 'sub.saharan@jhco.org',
          phone: '+234-1-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Somalia', 'South Sudan', 'Democratic Congo', 'Ethiopia'],
          coverageAr: ['الصومال', 'جنوب السودان', 'الكونغو الديمقراطية', 'إثيوبيا'],
        },
        {
          id: 4,
          name: 'East Africa',
          nameAr: 'شرق أفريقيا',
          coordinator: 'Dr. Margaret Kipchoge',
          coordinatorAr: 'د. مارجريت كيبتشوج',
          email: 'east.africa@jhco.org',
          phone: '+254-20-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda'],
          coverageAr: ['كينيا', 'أوغندا', 'تنزانيا', 'رواندا'],
        },
      ],
    },

    latestUpdates: {
      title: 'Latest Updates Feed',
      description: 'Real-time crisis response updates',
    },

    cta: {
      title: 'Help Save Lives Today',
      description: 'Contribute to emergency relief and be part of the life-saving response to global crises',
      button: 'Donate Now',
      buttonAr: 'تبرع الآن',
    },
  },

  ar: {
    hero: {
      title: 'مركز الاستجابة للطوارئ',
      subtitle: 'الاستجابة السريعة للأزمات العالمية',
      description: 'حشد المساعدة الإنسانية الفورية للأسر التي تواجه حالات طوارئ حادة وأوضاع أزمات',
    },

    overview: {
      title: 'مهمتنا في الاستجابة للطوارئ',
      description: 'عندما تضرب الأزمات، تقف JHCO جاهزة بمساعدة إنسانية سريعة منقذة للحياة. تم تصميم نظام الاستجابة للطوارئ لدينا للنشر الفوري في غضون ساعات من إعلان الأزمة، مما يضمن حصول السكان الضعفاء على الدعم الحاسم عندما يحتاجون إليه أكثر.',
      keyPoint: 'السرعة تنقذ الأرواح. كل لحظة حاسمة في حالة الطوارئ.',
    },

    activeCrises: {
      title: 'حالات الأزمات النشطة',
      description: 'المراقبة والاستجابة الحقيقية للطوارئ الإنسانية',
      crises: [
        {
          id: 1,
          name: 'Gaza Humanitarian Crisis',
          nameAr: 'أزمة غزة الإنسانية',
          region: 'Palestine',
          regionAr: 'فلسطين',
          status: 'Critical',
          statusAr: 'حرج',
          severity: 95,
          affectedPopulation: '2.1M+',
          affectedPopulationAr: '2.1 مليون+',
          description: 'Ongoing humanitarian emergency affecting millions',
          descriptionAr: 'أزمة إنسانية مستمرة تؤثر على الملايين',
          activeSince: 'October 2023',
          activeSinceAr: 'أكتوبر 2023',
        },
        {
          id: 2,
          name: 'Syrian Refugee Crisis',
          nameAr: 'أزمة اللاجئين السوريين',
          region: 'Syria & Neighboring Countries',
          regionAr: 'سوريا والدول المجاورة',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 82,
          affectedPopulation: '6.8M+',
          affectedPopulationAr: '6.8 مليون+',
          description: 'Prolonged displacement crisis affecting multiple regions',
          descriptionAr: 'أزمة نزوح طويلة الأجل تؤثر على عدة مناطق',
          activeSince: 'March 2011',
          activeSinceAr: 'مارس 2011',
        },
        {
          id: 3,
          name: 'Yemen Humanitarian Emergency',
          nameAr: 'حالة الطوارئ الإنسانية في اليمن',
          region: 'Yemen',
          regionAr: 'اليمن',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 88,
          affectedPopulation: '30M+',
          affectedPopulationAr: '30 مليون+',
          description: 'Complex emergency with food insecurity and health crisis',
          descriptionAr: 'حالة طارئة معقدة مع انعدام الأمن الغذائي وأزمة صحية',
          activeSince: 'March 2015',
          activeSinceAr: 'مارس 2015',
        },
        {
          id: 4,
          name: 'Afghanistan Crisis',
          nameAr: 'أزمة أفغانستان',
          region: 'Afghanistan',
          regionAr: 'أفغانستان',
          status: 'Severe',
          statusAr: 'شديد',
          severity: 80,
          affectedPopulation: '38M+',
          affectedPopulationAr: '38 مليون+',
          description: 'Economic collapse and humanitarian emergency',
          descriptionAr: 'انهيار اقتصادي وحالة طوارئ إنسانية',
          activeSince: 'August 2021',
          activeSinceAr: 'أغسطس 2021',
        },
      ],
    },

    statusIndicators: {
      critical: 'Critical - Life-threatening emergency',
      criticalAr: 'حرج - حالة طارئة تهدد الحياة',
      severe: 'Severe - Major humanitarian emergency',
      severeAr: 'شديد - حالة طارئة إنسانية كبرى',
      moderate: 'Moderate - Ongoing humanitarian concerns',
      moderateAr: 'معتدل - قلق إنساني مستمر',
    },

    emergencyPrograms: {
      title: 'برامج الاستجابة للطوارئ',
      description: 'استجابة سريعة منسقة عبر المناطق الحرجة',
      programs: [
        {
          id: 1,
          icon: '🚨',
          name: 'Emergency Relief Fund',
          nameAr: 'صندوق الإغاثة الطارئة',
          description: 'Immediate cash assistance and emergency supplies for crisis-affected families',
          descriptionAr: 'مساعدة نقدية فورية وإمدادات طارئة للأسر المتضررة من الأزمات',
          focus: ['Emergency cash', 'Essential supplies', 'Rapid deployment'],
          focusAr: ['النقد الطارئ', 'الإمدادات الأساسية', 'النشر السريع'],
        },
        {
          id: 2,
          icon: '🏥',
          name: 'Emergency Medical Response',
          nameAr: 'استجابة طبية طارئة',
          description: 'Urgent medical assistance, trauma care, and health emergency support',
          descriptionAr: 'مساعدة طبية عاجلة وعلاج الصدمات ودعم حالات الطوارئ الصحية',
          focus: ['Emergency medicine', 'Trauma care', 'Health supplies'],
          focusAr: ['الطب الطارئ', 'علاج الصدمات', 'المستلزمات الصحية'],
        },
        {
          id: 3,
          icon: '🍖',
          name: 'Emergency Food Assistance',
          nameAr: 'مساعدة غذائية طارئة',
          description: 'Rapid food distribution and nutrition support in crisis situations',
          descriptionAr: 'توزيع غذاء سريع ودعم تغذوي في حالات الأزمات',
          focus: ['Emergency rations', 'Food distribution', 'Nutrition kits'],
          focusAr: ['الحصص الطارئة', 'توزيع الغذاء', 'مجموعات التغذية'],
        },
        {
          id: 4,
          icon: '🛖',
          name: 'Emergency Shelter & WASH',
          nameAr: 'مأوى طارئ ومياه صحية',
          description: 'Temporary shelter, water, and sanitation support for displaced populations',
          descriptionAr: 'مأوى مؤقت وخدمات مياه صحية للسكان المشردين',
          focus: ['Shelter kits', 'Water access', 'Sanitation facilities'],
          focusAr: ['مجموعات المأوى', 'الوصول للمياه', 'مرافق الصرف'],
        },
        {
          id: 5,
          icon: '👨‍👩‍👧‍👦',
          name: 'Vulnerable Group Protection',
          nameAr: 'حماية الفئات الضعيفة',
          description: 'Focused assistance for children, women, and elderly in crisis',
          descriptionAr: 'مساعدة مركزة للأطفال والنساء والمسنين في الأزمات',
          focus: ['Child protection', 'Women support', 'Elderly care'],
          focusAr: ['حماية الطفل', 'دعم النساء', 'رعاية المسنين'],
        },
        {
          id: 6,
          icon: '💬',
          name: 'Psychosocial Support',
          nameAr: 'الدعم النفسي والاجتماعي',
          description: 'Mental health services and psychological support for trauma victims',
          descriptionAr: 'خدمات الصحة النفسية والدعم النفسي لضحايا الصدمات',
          focus: ['Counseling', 'Mental health support', 'Community healing'],
          focusAr: ['الاستشارة', 'دعم الصحة النفسية', 'الشفاء المجتمعي'],
        },
      ],
    },

    donationFastPath: {
      title: 'التبرع للطوارئ - المسار السريع',
      description: 'دعمك الفوري ينقذ الأرواح',
      appeal: 'Every donation goes directly to emergency relief. Contribute now:',
      appealAr: 'كل تبرع يذهب مباشرة إلى الإغاثة الطارئة. ساهم الآن:',
      amounts: [
        { value: 50, currency: '$', label: 'Emergency kit for 1 family' },
        { value: 150, currency: '$', label: 'Medical emergency response' },
        { value: 300, currency: '$', label: 'Week of emergency food' },
        { value: 500, currency: '$', label: 'Complete family emergency package' },
      ],
      amountsAr: [
        { value: 50, currency: '$', label: 'مجموعة طارئة لعائلة واحدة' },
        { value: 150, currency: '$', label: 'استجابة طبية طارئة' },
        { value: 300, currency: '$', label: 'أسبوع من الغذاء الطارئ' },
        { value: 500, currency: '$', label: 'حزمة عائلة طارئة كاملة' },
      ],
    },

    situationReports: {
      title: 'تقارير الحالة',
      description: 'آخر التحديثات من مناطق الأزمات',
      reports: [
        {
          id: 1,
          date: 'August 3, 2026',
          dateAr: '3 أغسطس 2026',
          title: 'Gaza: Emergency Food Distribution Reaches 50,000 Families',
          titleAr: 'غزة: توزيع غذاء طارئ يصل إلى 50,000 أسرة',
          summary: 'JHCO emergency teams distributed emergency food packages to 50,000 families across Gaza Strip over the past week, addressing acute food insecurity.',
          summaryAr: 'وزعت فرق JHCO الطارئة حزم غذاء طارئة على 50,000 أسرة عبر قطاع غزة خلال الأسبوع الماضي، معالجة انعدام الأمن الغذائي الحاد.',
        },
        {
          id: 2,
          date: 'August 2, 2026',
          dateAr: '2 أغسطس 2026',
          title: 'Yemen: Mobile Medical Clinics Serve Remote Communities',
          titleAr: 'اليمن: العيادات الطبية المتنقلة تخدم المجتمعات النائية',
          summary: 'Mobile medical teams provided healthcare services to 8,500 people in remote Yemen areas, treating emergency cases and distributing medications.',
          summaryAr: 'قدمت فرق طبية متنقلة خدمات رعاية صحية لـ 8,500 شخص في مناطق نائية باليمن، معالجة الحالات الطارئة وتوزيع الأدوية.',
        },
        {
          id: 3,
          date: 'August 1, 2026',
          dateAr: '1 أغسطس 2026',
          title: 'Syria: Winter Preparedness Campaign Begins',
          titleAr: 'سوريا: حملة التحضير للشتاء تبدأ',
          summary: 'JHCO launched comprehensive winter preparedness program providing blankets, heaters, and winterization kits to 75,000 families in refugee camps.',
          summaryAr: 'أطلقت JHCO برنامج التحضير الشامل للشتاء وفرت بطانيات وسخانات ومجموعات تشتية لـ 75,000 أسرة في المخيمات.',
        },
        {
          id: 4,
          date: 'July 31, 2026',
          dateAr: '31 يوليو 2026',
          title: 'Afghanistan: Education Continuity Program Supports 25,000 Students',
          titleAr: 'أفغانستان: برنامج استمرارية التعليم يدعم 25,000 طالب',
          summary: 'Despite economic crisis, JHCO continues providing education support to 25,000 vulnerable students through emergency learning centers.',
          summaryAr: 'رغم الأزمة الاقتصادية، تواصل JHCO تقديم الدعم التعليمي لـ 25,000 طالب ضعيف من خلال مراكز التعلم الطارئة.',
        },
      ],
    },

    fieldCoordinators: {
      title: 'جهات الاتصال - منسقو الميدان',
      description: 'مراكز التنسيق الإقليمية للطوارئ',
      regions: [
        {
          id: 1,
          name: 'Middle East & North Africa',
          nameAr: 'الشرق الأوسط وشمال أفريقيا',
          coordinator: 'Dr. Amara Hassan',
          coordinatorAr: 'د. أمارة حسن',
          email: 'mena.emergency@jhco.org',
          phone: '+966-11-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Gaza', 'Syria', 'Yemen', 'Iraq', 'Lebanon'],
          coverageAr: ['غزة', 'سوريا', 'اليمن', 'العراق', 'لبنان'],
        },
        {
          id: 2,
          name: 'South Asia',
          nameAr: 'جنوب آسيا',
          coordinator: 'Ms. Priya Sharma',
          coordinatorAr: 'السيدة بريا شارما',
          email: 'south.asia@jhco.org',
          phone: '+92-21-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Afghanistan', 'Pakistan', 'Bangladesh'],
          coverageAr: ['أفغانستان', 'باكستان', 'بنجلاديش'],
        },
        {
          id: 3,
          name: 'Sub-Saharan Africa',
          nameAr: 'أفريقيا جنوب الصحراء',
          coordinator: 'Mr. James Okonkwo',
          coordinatorAr: 'السيد جيمس أوكونكوو',
          email: 'sub.saharan@jhco.org',
          phone: '+234-1-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Somalia', 'South Sudan', 'Democratic Congo', 'Ethiopia'],
          coverageAr: ['الصومال', 'جنوب السودان', 'الكونغو الديمقراطية', 'إثيوبيا'],
        },
        {
          id: 4,
          name: 'East Africa',
          nameAr: 'شرق أفريقيا',
          coordinator: 'Dr. Margaret Kipchoge',
          coordinatorAr: 'د. مارجريت كيبتشوج',
          email: 'east.africa@jhco.org',
          phone: '+254-20-XXXX-XXXX',
          availability: '24/7',
          availabilityAr: '24/7',
          coverage: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda'],
          coverageAr: ['كينيا', 'أوغندا', 'تنزانيا', 'رواندا'],
        },
      ],
    },

    latestUpdates: {
      title: 'ملخص التحديثات الأخيرة',
      description: 'تحديثات الاستجابة للأزمات في الوقت الفعلي',
    },

    cta: {
      title: 'ساعد في إنقاذ الأرواح اليوم',
      description: 'ساهم في الإغاثة الطارئة وكن جزءاً من الاستجابة منقذة الحياة للأزمات العالمية',
      button: 'Donate Now',
      buttonAr: 'تبرع الآن',
    },
  },
};

// Status badge color helpers
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Critical':
      return '#dc2626'; // red
    case 'Severe':
      return '#ea580c'; // orange
    case 'Moderate':
      return '#eab308'; // yellow
    default:
      return '#6b7280'; // gray
  }
};

const getSeverityColor = (severity: number) => {
  if (severity >= 90) return '#dc2626'; // critical red
  if (severity >= 80) return '#ea580c'; // severe orange
  if (severity >= 60) return '#eab308'; // moderate yellow
  return '#22c55e'; // mild green
};

export default async function EmergencyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;
  const content = emergencyContent[locale as Locale] || emergencyContent.en;

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚨</div>
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
            color: '#fecaca',
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
            color: '#7c2d12',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '3px solid #dc2626',
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
              backgroundColor: '#fee2e2',
              padding: '28px',
              borderLeft: ar ? 'none' : '4px solid #dc2626',
              borderRight: ar ? '4px solid #dc2626' : 'none',
              borderRadius: '0',
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#7c2d12',
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

      {/* Active Crisis Listings */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fafafa',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#7c2d12',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '3px solid #dc2626',
            paddingBottom: '16px',
          }}>
            {content.activeCrises.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#5a5a6a',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '20px auto 60px',
          }}>
            {content.activeCrises.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}>
            {content.activeCrises.crises.map((crisis) => (
              <div key={crisis.id} style={{
                backgroundColor: 'white',
                padding: '28px',
                border: '1px solid #e5e7eb',
                borderLeft: `5px solid ${getStatusColor(crisis.status)}`,
                borderRadius: '4px',
                boxShadow: shadows.xs,
              }}>
                {/* Status Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div>
                    <span style={{
                      fontSize: '11px',
                      color: 'white',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      backgroundColor: getStatusColor(crisis.status),
                      padding: '6px 12px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}>
                      {ar ? crisis.statusAr : crisis.status}
                    </span>
                  </div>
                  <span style={{ fontSize: '24px' }}>⚠️</span>
                </div>

                {/* Crisis Info */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#7c2d12',
                  marginBottom: '8px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {ar ? crisis.nameAr : crisis.name}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: '#999',
                  marginBottom: '12px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {ar ? crisis.regionAr : crisis.region}
                </p>

                <p style={{
                  fontSize: '14px',
                  color: '#2c2c2c',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                }}>
                  {ar ? crisis.descriptionAr : crisis.description}
                </p>

                {/* Severity Meter */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#5a5a6a' }}>
                      {ar ? 'مستوى الشدة' : 'Severity Level'}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: getSeverityColor(crisis.severity) }}>
                      {crisis.severity}%
                    </span>
                  </div>
                  <div style={{
                    backgroundColor: '#e5e7eb',
                    height: '8px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      backgroundColor: getSeverityColor(crisis.severity),
                      width: `${crisis.severity}%`,
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>

                {/* Impact Numbers */}
                <div style{{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '16px',
                }}>
                  <div>
                    <p style={{
                      fontSize: '11px',
                      color: '#999',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      margin: '0 0 4px 0',
                    }}>
                      {ar ? 'المتضررون' : 'Affected'}
                    </p>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#dc2626',
                      margin: '0',
                    }}>
                      {ar ? crisis.affectedPopulationAr : crisis.affectedPopulation}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: '11px',
                      color: '#999',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      margin: '0 0 4px 0',
                    }}>
                      {ar ? 'النشط منذ' : 'Active Since'}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c2c2c',
                      margin: '0',
                    }}>
                      {ar ? crisis.activeSinceAr : crisis.activeSince}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Programs */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#7c2d12',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '3px solid #dc2626',
            paddingBottom: '16px',
          }}>
            {content.emergencyPrograms.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#5a5a6a',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '20px auto 60px',
          }}>
            {content.emergencyPrograms.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}>
            {content.emergencyPrograms.programs.map((program) => (
              <div key={program.id} style={{
                backgroundColor: '#fff7ed',
                padding: '32px',
                border: '1px solid #fecaca',
                borderRadius: '4px',
                boxShadow: shadows.xs,
                transition: 'all 0.3s',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {program.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#7c2d12',
                  marginBottom: '12px',
                  fontFamily: 'Georgia, serif',
                }}>
                  {ar ? program.nameAr : program.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2c2c2c',
                  marginBottom: '20px',
                  lineHeight: '1.6',
                }}>
                  {ar ? program.descriptionAr : program.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}>
                  {(ar ? program.focusAr : program.focus).map((item, idx) => (
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
                        color: '#dc2626',
                        fontWeight: 'bold',
                      }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Track Donation */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)',
        padding: '80px 32px',
        color: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
          }}>
            {content.donationFastPath.title}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '12px',
            textAlign: 'center',
            color: '#fecaca',
          }}>
            {content.donationFastPath.description}
          </p>
          <p style={{
            fontSize: '16px',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#fecaca',
          }}>
            {ar ? content.donationFastPath.appealAr : content.donationFastPath.appeal}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '20px',
          }}>
            {(ar ? content.donationFastPath.amountsAr : content.donationFastPath.amounts).map((amount, idx) => (
              <button key={idx} style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '16px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#7c2d12';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = 'white';
              }}>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>
                  {amount.currency}{amount.value}
                </div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>
                  {amount.label}
                </div>
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href={`${base}/get-involved/donate`} style={{
              display: 'inline-block',
              padding: '16px 48px',
              backgroundColor: 'white',
              color: '#dc2626',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.3s',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </Link>
          </div>
        </div>
      </section>

      {/* Situation Reports */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fafafa',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#7c2d12',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '3px solid #dc2626',
            paddingBottom: '16px',
          }}>
            {content.situationReports.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#5a5a6a',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '20px auto 60px',
          }}>
            {content.situationReports.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {content.situationReports.reports.map((report, idx) => (
              <div key={report.id} style={{
                backgroundColor: 'white',
                padding: '32px',
                border: '1px solid #e5e7eb',
                borderLeft: '5px solid #dc2626',
                borderRadius: '4px',
                boxShadow: shadows.xs,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: '#dc2626',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      margin: '0 0 8px 0',
                    }}>
                      📅 {ar ? report.dateAr : report.date}
                    </p>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#7c2d12',
                      margin: '0 0 12px 0',
                      fontFamily: 'Georgia, serif',
                    }}>
                      {ar ? report.titleAr : report.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: '32px' }}>📰</span>
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#2c2c2c',
                  lineHeight: '1.8',
                  margin: '0',
                }}>
                  {ar ? report.summaryAr : report.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Coordinator Contacts */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#7c2d12',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            borderBottom: '3px solid #dc2626',
            paddingBottom: '16px',
          }}>
            {content.fieldCoordinators.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#5a5a6a',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '20px auto 60px',
          }}>
            {content.fieldCoordinators.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {content.fieldCoordinators.regions.map((region) => (
              <div key={region.id} style={{
                backgroundColor: '#fff7ed',
                padding: '32px',
                border: '1px solid #fecaca',
                borderRadius: '4px',
                boxShadow: shadows.xs,
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#7c2d12',
                  marginBottom: '20px',
                  fontFamily: 'Georgia, serif',
                  borderBottom: '2px solid #dc2626',
                  paddingBottom: '12px',
                }}>
                  {ar ? region.nameAr : region.name}
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{
                    fontSize: '12px',
                    color: '#999',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    margin: '0 0 4px 0',
                  }}>
                    👤 {ar ? 'المنسق' : 'Coordinator'}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#2c2c2c',
                    margin: '0 0 12px 0',
                  }}>
                    {ar ? region.coordinatorAr : region.coordinator}
                  </p>

                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 4px 0',
                    }}>
                      📧 {region.email}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 4px 0',
                    }}>
                      📞 {region.phone}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#dc2626',
                      fontWeight: '700',
                      margin: '0',
                    }}>
                      ⏰ {region.availability}
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{
                    fontSize: '12px',
                    color: '#999',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    margin: '0 0 8px 0',
                  }}>
                    🌍 {ar ? 'المناطق المغطاة' : 'Coverage Areas'}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}>
                    {(ar ? region.coverageAr : region.coverage).map((area, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        backgroundColor: '#dc2626',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontWeight: '600',
                      }}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)',
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
            color: '#fecaca',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            {content.cta.description}
          </p>
          <Link href={`${base}/get-involved/donate`} style={{
            display: 'inline-block',
            padding: '16px 48px',
            backgroundColor: 'white',
            color: '#dc2626',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px',
            transition: 'all 0.3s',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}>
            {ar ? content.cta.buttonAr : content.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
