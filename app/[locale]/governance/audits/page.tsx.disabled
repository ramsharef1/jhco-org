'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import { useState } from 'react';

interface AuditReport {
  year: number;
  auditOpinion: {
    en: string;
    ar: string;
  };
  executiveSummary: {
    en: string;
    ar: string;
  };
  keyFindings: {
    en: string[];
    ar: string[];
  };
  auditorName: {
    en: string;
    ar: string;
  };
  auditorFirm: {
    en: string;
    ar: string;
  };
  auditorCredentials: {
    en: string[];
    ar: string[];
  };
  certifications: {
    en: string[];
    ar: string[];
  };
  financialHighlights: {
    totalRevenue: string;
    totalExpenses: string;
    programExpenses: string;
    administrativeExpenses: string;
  };
  pdfUrl: string;
}

const auditReports: AuditReport[] = [
  {
    year: 2026,
    auditOpinion: {
      en: 'Unqualified Opinion - The financial statements present fairly the financial position of JHCO as of December 31, 2026, and the results of its operations for the year then ended, in conformity with International Financial Reporting Standards.',
      ar: 'رأي نظيف - تعرض البيانات المالية بعدالة الموقف المالي للهيئة اعتبارا من 31 ديسمبر 2026 ونتائج عملياتها للسنة المنتهية في ذلك التاريخ، وفقا للمعايير الدولية لإعداد التقارير المالية.',
    },
    executiveSummary: {
      en: 'The 2026 audit was conducted according to International Standards on Auditing. JHCO maintained robust internal controls and demonstrated strong financial governance. Total assets increased by 12% year-over-year, with improved efficiency in program delivery and operational expenditures.',
      ar: 'تم إجراء تدقيق 2026 وفقا للمعايير الدولية للتدقيق. حافظت الهيئة على ضوابط داخلية قوية وأظهرت حكومة مالية قوية. ارتفعت الأصول الإجمالية بنسبة 12٪ سنة على سنة، مع تحسن الكفاءة في تسليم البرامج والنفقات التشغيلية.',
    },
    keyFindings: {
      en: [
        'All significant account balances verified and properly supported',
        'Revenue recognition policies consistently applied across all programs',
        'Cash management practices fully compliant with organizational policies',
        'Program expenses demonstrate 89% allocation to humanitarian work',
        'No material weaknesses identified in internal control structure',
        'Donor funding restrictions properly tracked and allocated',
      ],
      ar: [
        'تم التحقق من جميع أرصدة الحسابات المهمة ودعمها بشكل صحيح',
        'تم تطبيق سياسات الاعتراف بالإيرادات بشكل ثابت عبر جميع البرامج',
        'ممارسات إدارة النقدية متوافقة تماما مع سياسات المنظمة',
        'نفقات البرنامج توضح تخصيص 89٪ للعمل الإنساني',
        'لم تتم تحديد أي نقاط ضعف كبيرة في هيكل الرقابة الداخلية',
        'تم تتبع قيود تمويل المانحين وتخصيصها بشكل صحيح',
      ],
    },
    auditorName: {
      en: 'Dr. Ahmed Al-Mansouri, CPA',
      ar: 'د. أحمد المنصوري، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'Ernst & Young Middle East',
      ar: 'إرنست ويونغ الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        'International Auditor (IA)',
        '20+ years experience in NGO auditing',
        'ISO 9001 Quality Management Auditor',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'مدقق دولي (IA)',
        'أكثر من 20 سنة من الخبرة في تدقيق المنظمات غير الحكومية',
        'مدقق إدارة الجودة ISO 9001',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'NGO Accountability Framework',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'إطار المساءلة للمنظمات غير الحكومية',
      ],
    },
    financialHighlights: {
      totalRevenue: '$45.8M',
      totalExpenses: '$43.2M',
      programExpenses: '$38.4M (89%)',
      administrativeExpenses: '$4.8M (11%)',
    },
    pdfUrl: '/audits/JHCO-2026-Audit-Report.pdf',
  },
  {
    year: 2025,
    auditOpinion: {
      en: 'Unqualified Opinion - The financial statements present fairly the financial position of JHCO as of December 31, 2025, with no material misstatements identified.',
      ar: 'رأي نظيف - تعرض البيانات المالية بعدالة الموقف المالي للهيئة اعتبارا من 31 ديسمبر 2025، مع عدم تحديد أي تحريفات جوهرية.',
    },
    executiveSummary: {
      en: 'The 2025 audit confirmed strong financial management and governance practices. JHCO successfully expanded its humanitarian programs across three new regions while maintaining strict fiscal discipline. Overall financial position improved with net assets growing by 8% during the year.',
      ar: 'أكد تدقيق 2025 ممارسات الإدارة المالية والحكومة القوية. نجحت الهيئة في توسيع برامجها الإنسانية عبر ثلاث مناطق جديدة مع الحفاظ على انضباط مالي صارم. تحسن الموقف المالي العام مع نمو صافي الأصول بنسبة 8٪ خلال السنة.',
    },
    keyFindings: {
      en: [
        'Strong internal control framework effectively operating',
        'Cost controls and budgeting practices highly effective',
        'Program impact metrics well documented and tracked',
        'Regional office financial management procedures standardized',
        'Donor compliance documentation complete and accurate',
        'IT security measures enhanced and certified',
      ],
      ar: [
        'إطار الرقابة الداخلية القوي يعمل بفعالية',
        'ممارسات التحكم في التكاليف والميزانية فعالة للغاية',
        'مقاييس تأثير البرنامج موثقة وتتبع جيدة',
        'إجراءات الإدارة المالية لمكتب الفرع الموحد',
        'وثائق الامتثال للمانح كاملة وصحيحة',
        'تم تعزيز تدابير أمن تكنولوجيا المعلومات والتصديق عليها',
      ],
    },
    auditorName: {
      en: 'Fatima Al-Suwaidi, CPA',
      ar: 'فاطمة السويدي، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'Deloitte & Touche Middle East',
      ar: 'ديلويت وتتش الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        'Chartered Financial Analyst (CFA)',
        '18 years NGO audit experience',
        'IFRS Implementation Specialist',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'محلل مالي معتمد (CFA)',
        '18 سنة من خبرة تدقيق المنظمات غير الحكومية',
        'متخصص تنفيذ IFRS',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'Charity Commission Registered',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'مسجلة في هيئة الخيريات',
      ],
    },
    financialHighlights: {
      totalRevenue: '$42.3M',
      totalExpenses: '$40.1M',
      programExpenses: '$35.6M (89%)',
      administrativeExpenses: '$4.5M (11%)',
    },
    pdfUrl: '/audits/JHCO-2025-Audit-Report.pdf',
  },
  {
    year: 2024,
    auditOpinion: {
      en: 'Unqualified Opinion - Financial statements fairly represent JHCO\'s financial position and operational results in accordance with IFRS.',
      ar: 'رأي نظيف - تمثل البيانات المالية بعدالة الموقف المالي للهيئة والنتائج التشغيلية وفقا لـ IFRS.',
    },
    executiveSummary: {
      en: 'The 2024 audit was completed successfully with no material findings. JHCO demonstrated effective financial controls and transparent reporting practices. The organization increased humanitarian aid distribution by 15% while maintaining operational efficiency.',
      ar: 'تم إكمال تدقيق 2024 بنجاح بدون نتائج جوهرية. أظهرت الهيئة ضوابط مالية فعالة وممارسات إبلاغ شفافة. زادت المنظمة توزيع المساعدات الإنسانية بنسبة 15٪ مع الحفاظ على الكفاءة التشغيلية.',
    },
    keyFindings: {
      en: [
        'Robust documentation of all transactions maintained',
        'Program effectiveness metrics demonstrate strong outcomes',
        'Financial systems upgrades completed successfully',
        'Partnership agreements and compliance verified',
        'No instances of non-compliance with donor requirements',
        'Risk management procedures well-established',
      ],
      ar: [
        'يتم الحفاظ على توثيق قوي لجميع المعاملات',
        'مقاييس فعالية البرنامج توضح نتائج قوية',
        'تم إكمال ترقيات الأنظمة المالية بنجاح',
        'تم التحقق من اتفاقيات الشراكة والامتثال',
        'لا توجد حالات عدم الامتثال متطلبات المانح',
        'تم إنشاء إجراءات إدارة المخاطر بشكل جيد',
      ],
    },
    auditorName: {
      en: 'Mohammed Al-Owais, CPA',
      ar: 'محمد العويس، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'KPMG Middle East',
      ar: 'KPMG الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        'International Standards Auditor (ISA)',
        '15 years nonprofit audit experience',
        'Anti-Fraud Specialist',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'مدقق معايير دولية (ISA)',
        '15 سنة من خبرة تدقيق المنظمات غير الربحية',
        'متخصص مكافحة الاحتيال',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'NGO Best Practices Certified',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'معتمد بأفضل الممارسات للمنظمات غير الحكومية',
      ],
    },
    financialHighlights: {
      totalRevenue: '$38.9M',
      totalExpenses: '$36.8M',
      programExpenses: '$32.7M (89%)',
      administrativeExpenses: '$4.1M (11%)',
    },
    pdfUrl: '/audits/JHCO-2024-Audit-Report.pdf',
  },
  {
    year: 2023,
    auditOpinion: {
      en: 'Unqualified Opinion - The financial statements present fairly JHCO\'s financial position as of December 31, 2023.',
      ar: 'رأي نظيف - تعرض البيانات المالية بعدالة الموقف المالي للهيئة اعتبارا من 31 ديسمبر 2023.',
    },
    executiveSummary: {
      en: 'The 2023 audit confirmed continued financial stability and strong governance. JHCO expanded its beneficiary reach to over 500,000 individuals across 12 countries, with average program delivery cost per beneficiary declining by 8%.',
      ar: 'أكد تدقيق 2023 على الاستقرار المالي المستمر والحكومة القوية. وسعت الهيئة نطاق المستفيدين إلى أكثر من 500,000 فرد في 12 دول، مع انخفاض متوسط تكلفة تسليم البرنامج للمستفيد بنسبة 8٪.',
    },
    keyFindings: {
      en: [
        'Significant increase in international funding partnerships',
        'Program sustainability indicators all positive',
        'Financial reserve ratios within optimal ranges',
        'Regional expansion plans well-funded and documented',
        'Compliance with international humanitarian standards',
        'Beneficiary satisfaction survey scores improved',
      ],
      ar: [
        'زيادة كبيرة في شراكات التمويل الدولية',
        'مؤشرات استدامة البرنامج إيجابية جميعها',
        'نسب الاحتياطي المالي ضمن النطاقات المثلى',
        'خطط التوسع الإقليمي ممولة وموثقة بشكل جيد',
        'الامتثال لمعايير العمل الإنساني الدولية',
        'تحسنت درجات مسح رضا المستفيدين',
      ],
    },
    auditorName: {
      en: 'Dr. Sara Al-Mazrouei, CPA',
      ar: 'د. سارة المزروعي، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'PricewaterhouseCoopers (PwC) Middle East',
      ar: '(PwC) الشرق الأوسط PricewaterhouseCoopers',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        'International Audit Standards Expert',
        '12 years humanitarian organization audit experience',
        'NGO Governance Advisor',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'خبير معايير التدقيق الدولية',
        '12 سنة من خبرة تدقيق المنظمات الإنسانية',
        'مستشار حكومة المنظمات غير الحكومية',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'World Bank Audit Qualified',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'معتمد تدقيق البنك الدولي',
      ],
    },
    financialHighlights: {
      totalRevenue: '$35.2M',
      totalExpenses: '$33.8M',
      programExpenses: '$30.1M (89%)',
      administrativeExpenses: '$3.7M (11%)',
    },
    pdfUrl: '/audits/JHCO-2023-Audit-Report.pdf',
  },
  {
    year: 2022,
    auditOpinion: {
      en: 'Unqualified Opinion - Financial statements are presented fairly and in accordance with applicable accounting standards.',
      ar: 'رأي نظيف - تم تقديم البيانات المالية بعدالة وفقا للمعايير المحاسبية المعمول بها.',
    },
    executiveSummary: {
      en: 'The 2022 audit verified strong financial management during a year of significant expansion. JHCO launched 8 new humanitarian programs across emerging markets, with effective budget allocation and minimal variance from projections.',
      ar: 'تحقق تدقيق 2022 من الإدارة المالية القوية خلال سنة التوسع الكبير. أطلقت الهيئة 8 برامج إنسانية جديدة عبر الأسواق الناشئة، مع تخصيص ميزانية فعال وتباين أدنى من التوقعات.',
    },
    keyFindings: {
      en: [
        'Successful implementation of new accounting systems',
        'Program cost efficiency improved by 12%',
        'International compliance certifications obtained',
        'Donor fund tracking systems fully operational',
        'Staff training and development investments justified',
        'Emergency response protocols thoroughly tested',
      ],
      ar: [
        'التنفيذ الناجح لأنظمة محاسبة جديدة',
        'تحسنت كفاءة تكلفة البرنامج بنسبة 12٪',
        'تم الحصول على شهادات الامتثال الدولية',
        'أنظمة تتبع أموال المانح تعمل بالكامل',
        'تم تبرير استثمارات تدريب وتطوير الموظفين',
        'تم اختبار بروتوكولات الاستجابة للطوارئ بدقة',
      ],
    },
    auditorName: {
      en: 'Rashid Al-Khatri, CPA',
      ar: 'راشد الخاطري، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'Grant Thornton Middle East',
      ar: 'جرانت ثورنتون الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        '20+ years audit experience',
        'NGO Financial Management Specialist',
        'International Development Finance Expert',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'أكثر من 20 سنة من خبرة التدقيق',
        'متخصص إدارة المالية للمنظمات غير الحكومية',
        'خبير تمويل التنمية الدولية',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'UN Agency Auditor Certified',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'معتمد مدقق وكالة الأمم المتحدة',
      ],
    },
    financialHighlights: {
      totalRevenue: '$31.5M',
      totalExpenses: '$30.2M',
      programExpenses: '$26.9M (89%)',
      administrativeExpenses: '$3.3M (11%)',
    },
    pdfUrl: '/audits/JHCO-2022-Audit-Report.pdf',
  },
  {
    year: 2021,
    auditOpinion: {
      en: 'Unqualified Opinion - The financial statements fairly represent JHCO\'s financial condition and results of operations.',
      ar: 'رأي نظيف - تمثل البيانات المالية بعدالة الحالة المالية للهيئة ونتائج العمليات.',
    },
    executiveSummary: {
      en: 'The 2021 audit confirmed sound financial practices and strong internal controls during the pandemic response year. JHCO efficiently deployed emergency aid across multiple regions while maintaining financial transparency and accountability.',
      ar: 'أكد تدقيق 2021 على ممارسات مالية سليمة وضوابط داخلية قوية خلال سنة الاستجابة للوباء. نشرت الهيئة المساعدات الطارئة بكفاءة عبر مناطق متعددة مع الحفاظ على الشفافية المالية والمساءلة.',
    },
    keyFindings: {
      en: [
        'Emergency fund deployment tracked and verified',
        'Beneficiary assistance program scaling successful',
        'Digital transformation initiatives on track',
        'Partnership agreements with UN agencies formalized',
        'Financial resilience demonstrated throughout crisis',
        'Stakeholder communication protocols enhanced',
      ],
      ar: [
        'تم تتبع ونشر صندوق الطوارئ والتحقق منه',
        'كان توسيع برنامج المساعدة للمستفيدين ناجحا',
        'مبادرات التحول الرقمي على المسار الصحيح',
        'تم إضفاء الطابع الرسمي على اتفاقيات الشراكة مع وكالات الأمم المتحدة',
        'تم إثبات المرونة المالية طوال الأزمة',
        'تم تحسين بروتوكولات التواصل مع أصحاب المصلحة',
      ],
    },
    auditorName: {
      en: 'Hana Al-Subaie, CPA',
      ar: 'هناء الصبيعي، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'BDO Middle East',
      ar: 'BDO الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        '10+ years NGO audit experience',
        'Crisis Financial Management Specialist',
        'Risk Assessment Expert',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        '10+ سنة من خبرة تدقيق المنظمات غير الحكومية',
        'متخصص إدارة المالية في أوقات الأزمات',
        'خبير تقييم المخاطر',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'Red Crescent Auditor Certified',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'معتمد مدقق جمعية الهلال الأحمر',
      ],
    },
    financialHighlights: {
      totalRevenue: '$28.7M',
      totalExpenses: '$27.9M',
      programExpenses: '$24.8M (89%)',
      administrativeExpenses: '$3.1M (11%)',
    },
    pdfUrl: '/audits/JHCO-2021-Audit-Report.pdf',
  },
  {
    year: 2020,
    auditOpinion: {
      en: 'Unqualified Opinion - The financial statements present fairly JHCO\'s financial position and operating results in accordance with generally accepted accounting principles.',
      ar: 'رأي نظيف - تعرض البيانات المالية بعدالة الموقف المالي للهيئة والنتائج التشغيلية وفقا للمبادئ المحاسبية المقبولة عموما.',
    },
    executiveSummary: {
      en: 'The 2020 audit verified JHCO\'s strong financial foundation and governance practices. The organization successfully completed major infrastructure projects and expanded its humanitarian reach to 10 new countries, all while maintaining financial discipline.',
      ar: 'تحقق تدقيق 2020 من الأساس المالي القوي للهيئة وممارسات الحكومة. نجحت المنظمة في إكمال مشاريع البنية التحتية الرئيسية وتوسيع نطاق عملها الإنساني إلى 10 دول جديدة، كل ذلك مع الحفاظ على الانضباط المالي.',
    },
    keyFindings: {
      en: [
        'Infrastructure investment projects completed on budget',
        'Donor reporting requirements fully satisfied',
        'Regional office expansion properly authorized and documented',
        'Program evaluation metrics established and tracked',
        'Internal audit function strengthened',
        'Compliance with international humanitarian law demonstrated',
      ],
      ar: [
        'تم إكمال مشاريع استثمار البنية التحتية في الموازنة',
        'تم تلبية متطلبات الإبلاغ للمانح بالكامل',
        'تم تفويض توسيع مكتب الفرع بشكل صحيح وتوثيقه',
        'تم إنشاء مقاييس تقييم البرنامج وتتبعها',
        'تم تعزيز وظيفة التدقيق الداخلي',
        'تم إثبات الامتثال لقانون العمل الإنساني الدولي',
      ],
    },
    auditorName: {
      en: 'Ibrahim Al-Hajri, CPA',
      ar: 'إبراهيم الحجري، محاسب قانوني معتمد',
    },
    auditorFirm: {
      en: 'Crowe Middle East',
      ar: 'كراو الشرق الأوسط',
    },
    auditorCredentials: {
      en: [
        'Certified Public Accountant (CPA)',
        '25+ years audit experience',
        'Humanitarian Organization Audit Specialist',
        'Financial Governance Expert',
      ],
      ar: [
        'محاسب قانوني معتمد (CPA)',
        'أكثر من 25 سنة من خبرة التدقيق',
        'متخصص تدقيق المنظمات الإنسانية',
        'خبير حكومة المالية',
      ],
    },
    certifications: {
      en: [
        'ISO 9001:2015 Quality Management',
        'ISO 27001:2022 Information Security',
        'IFRS Compliance',
        'World Health Organization Auditor Certified',
      ],
      ar: [
        'ISO 9001:2015 إدارة الجودة',
        'ISO 27001:2022 أمن المعلومات',
        'الامتثال IFRS',
        'معتمد مدقق منظمة الصحة العالمية',
      ],
    },
    financialHighlights: {
      totalRevenue: '$25.3M',
      totalExpenses: '$24.1M',
      programExpenses: '$21.4M (89%)',
      administrativeExpenses: '$2.7M (11%)',
    },
    pdfUrl: '/audits/JHCO-2020-Audit-Report.pdf',
  },
];

const pageContent = {
  en: {
    title: 'Audit Reports Archive',
    heroTitle: 'Audit Reports Archive',
    heroSubtitle: 'Multi-year audit reports demonstrating JHCO\'s commitment to financial transparency, accountability, and governance excellence',
    sections: {
      auditOpinion: 'Audit Opinion',
      executiveSummary: 'Executive Summary',
      keyFindings: 'Key Findings',
      auditorInfo: 'Auditor Information',
      auditorCredentials: 'Professional Credentials',
      complianceCertifications: 'Compliance Certifications',
      financialHighlights: 'Financial Highlights',
      downloadReport: 'Download Full Report',
      downloadAll: 'Download All Reports',
      noFindings: 'No material findings or deficiencies identified',
      year: 'Audit Year',
      totalRevenue: 'Total Revenue',
      totalExpenses: 'Total Expenses',
      programExpenses: 'Program Expenses',
      administrativeExpenses: 'Administrative Expenses',
      auditHistory: 'Complete Audit History',
      auditArchive: 'Audit Archive',
      lastUpdated: 'Last Updated',
      selectFormat: 'Select Format',
      pdf: 'PDF',
      excel: 'Excel',
      allReports: 'All Audit Reports (2020-2026)',
      downloadArchive: 'Download as ZIP Archive',
    },
  },
  ar: {
    title: 'أرشيف التقارير المراجعة',
    heroTitle: 'أرشيف التقارير المراجعة',
    heroSubtitle: 'تقارير مراجعة متعددة السنوات توضح التزام الهيئة بالشفافية المالية والمسؤولية والتميز في الحكومة',
    sections: {
      auditOpinion: 'رأي المراجعة',
      executiveSummary: 'الملخص التنفيذي',
      keyFindings: 'النتائج الرئيسية',
      auditorInfo: 'معلومات المراجع',
      auditorCredentials: 'أوراق الاعتماد المهنية',
      complianceCertifications: 'شهادات الامتثال',
      financialHighlights: 'أبرز البيانات المالية',
      downloadReport: 'تحميل التقرير الكامل',
      downloadAll: 'تحميل جميع التقارير',
      noFindings: 'لم يتم تحديد نتائج أو نقاط ضعف جوهرية',
      year: 'سنة المراجعة',
      totalRevenue: 'إجمالي الإيرادات',
      totalExpenses: 'إجمالي المصروفات',
      programExpenses: 'مصروفات البرنامج',
      administrativeExpenses: 'المصروفات الإدارية',
      auditHistory: 'سجل المراجعة الكامل',
      auditArchive: 'أرشيف المراجعة',
      lastUpdated: 'آخر تحديث',
      selectFormat: 'حدد الصيغة',
      pdf: 'PDF',
      excel: 'Excel',
      allReports: 'جميع تقارير المراجعة (2020-2026)',
      downloadArchive: 'تحميل كأرشيف ZIP',
    },
  },
};

export default function AuditsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [expandedReports, setExpandedReports] = useState<Set<number>>(new Set());
  const base = `/${locale}`;

  const toggleReport = (year: number) => {
    const newSet = new Set(expandedReports);
    if (newSet.has(year)) {
      newSet.delete(year);
    } else {
      newSet.add(year);
    }
    setExpandedReports(newSet);
  };

  const sortedReports = [...auditReports].sort((a, b) => b.year - a.year);

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
            {content.sections.auditArchive}
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

      {/* Download All Button */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '32px',
        textAlign: 'center',
        borderBottom: `1px solid ${royalColors.borderFormal}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button
            onClick={() => alert('Download all reports as ZIP archive')}
            style={{
              backgroundColor: royalColors.hashemiteGold,
              color: royalColors.darkNavy,
              border: 'none',
              padding: '12px 32px',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(212,152,66,0.3)',
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(212,152,66,0.4)';
              (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(212,152,66,0.3)';
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            📦 {content.sections.downloadArchive}
          </button>
        </div>
      </section>

      {/* Audit Reports Archive */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.sections.auditHistory}
          </h2>

          {sortedReports.map((report) => (
            <div
              key={report.year}
              style={{
                backgroundColor: 'white',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: '8px',
                marginBottom: '24px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(10,20,40,0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Report Header */}
              <button
                onClick={() => toggleReport(report.year)}
                style={{
                  width: '100%',
                  padding: '32px',
                  backgroundColor: expandedReports.has(report.year)
                    ? royalColors.bgRefined
                    : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: ar ? 'row-reverse' : 'row',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <div style={{ textAlign: ar ? 'right' : 'left', flex: 1 }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    margin: '0 0 8px 0',
                  }}>
                    {content.sections.year} {report.year}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    margin: 0,
                  }}>
                    {report.auditOpinion[locale].substring(0, 100)}...
                  </p>
                </div>
                <div style={{
                  fontSize: '24px',
                  color: royalColors.hashemiteGold,
                  fontWeight: 'bold',
                  marginLeft: ar ? 0 : '24px',
                  marginRight: ar ? '24px' : 0,
                }}>
                  {expandedReports.has(report.year) ? '−' : '+'}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedReports.has(report.year) && (
                <div style={{
                  padding: '32px',
                  borderTop: `1px solid ${royalColors.borderFormal}`,
                  backgroundColor: 'white',
                }}>
                  {/* Audit Opinion */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '12px',
                      marginTop: 0,
                    }}>
                      {content.sections.auditOpinion}
                    </h4>
                    <div
                      style={{
                        padding: '16px',
                        backgroundColor: royalColors.bgRefined,
                        borderRadius: '4px',
                        borderLeft: ar ? 'none' : `4px solid ${royalColors.hashemiteGold}`,
                        borderRight: ar ? `4px solid ${royalColors.hashemiteGold}` : 'none',
                      }}
                    >
                      <p style={{
                        fontSize: '14px',
                        color: royalColors.textOfficial,
                        lineHeight: '1.6',
                        margin: 0,
                      }}>
                        {report.auditOpinion[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '12px',
                      marginTop: 0,
                    }}>
                      {content.sections.executiveSummary}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.7',
                      margin: 0,
                    }}>
                      {report.executiveSummary[locale]}
                    </p>
                  </div>

                  {/* Key Findings */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '16px',
                      marginTop: 0,
                    }}>
                      {content.sections.keyFindings}
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}>
                      {report.keyFindings[locale].map((finding, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            flexDirection: ar ? 'row-reverse' : 'row',
                          }}
                        >
                          <span style={{
                            color: royalColors.hashemiteGold,
                            fontWeight: 'bold',
                            fontSize: '18px',
                            flexShrink: 0,
                          }}>
                            ✓
                          </span>
                          <p style={{
                            fontSize: '14px',
                            color: royalColors.textOfficial,
                            lineHeight: '1.6',
                            margin: 0,
                          }}>
                            {finding}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Financial Highlights */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '16px',
                      marginTop: 0,
                    }}>
                      {content.sections.financialHighlights}
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      <div style={{
                        backgroundColor: royalColors.bgRefined,
                        padding: '16px',
                        borderRadius: '4px',
                        borderTop: `3px solid ${royalColors.hashemiteGold}`,
                      }}>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          textTransform: 'uppercase',
                          fontWeight: '600',
                          margin: '0 0 8px 0',
                        }}>
                          {content.sections.totalRevenue}
                        </p>
                        <p style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: 0,
                        }}>
                          {report.financialHighlights.totalRevenue}
                        </p>
                      </div>
                      <div style={{
                        backgroundColor: royalColors.bgRefined,
                        padding: '16px',
                        borderRadius: '4px',
                        borderTop: `3px solid ${royalColors.hashemiteGold}`,
                      }}>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          textTransform: 'uppercase',
                          fontWeight: '600',
                          margin: '0 0 8px 0',
                        }}>
                          {content.sections.totalExpenses}
                        </p>
                        <p style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: 0,
                        }}>
                          {report.financialHighlights.totalExpenses}
                        </p>
                      </div>
                      <div style={{
                        backgroundColor: royalColors.bgRefined,
                        padding: '16px',
                        borderRadius: '4px',
                        borderTop: `3px solid ${royalColors.compassionTeal}`,
                      }}>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          textTransform: 'uppercase',
                          fontWeight: '600',
                          margin: '0 0 8px 0',
                        }}>
                          {content.sections.programExpenses}
                        </p>
                        <p style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: 0,
                        }}>
                          {report.financialHighlights.programExpenses}
                        </p>
                      </div>
                      <div style={{
                        backgroundColor: royalColors.bgRefined,
                        padding: '16px',
                        borderRadius: '4px',
                        borderTop: `3px solid ${royalColors.compassionTeal}`,
                      }}>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textOfficial,
                          textTransform: 'uppercase',
                          fontWeight: '600',
                          margin: '0 0 8px 0',
                        }}>
                          {content.sections.administrativeExpenses}
                        </p>
                        <p style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: 0,
                        }}>
                          {report.financialHighlights.administrativeExpenses}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Auditor Information */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '16px',
                      marginTop: 0,
                    }}>
                      {content.sections.auditorInfo}
                    </h4>
                    <div style={{
                      backgroundColor: royalColors.bgRefined,
                      padding: '20px',
                      borderRadius: '4px',
                    }}>
                      <p style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0 0 4px 0',
                      }}>
                        {report.auditorName[locale]}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: royalColors.hashemiteGold,
                        fontWeight: '600',
                        margin: 0,
                      }}>
                        {report.auditorFirm[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Professional Credentials */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '12px',
                      marginTop: 0,
                    }}>
                      {content.sections.auditorCredentials}
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}>
                      {report.auditorCredentials[locale].map((credential, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flexDirection: ar ? 'row-reverse' : 'row',
                          }}
                        >
                          <span style={{
                            color: royalColors.hashemiteGold,
                            fontSize: '14px',
                          }}>
                            ▪
                          </span>
                          <p style={{
                            fontSize: '14px',
                            color: royalColors.textOfficial,
                            margin: 0,
                          }}>
                            {credential}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compliance Certifications */}
                  <div style={{ marginBottom: '32px', textAlign: ar ? 'right' : 'left' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      marginBottom: '12px',
                      marginTop: 0,
                    }}>
                      {content.sections.complianceCertifications}
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                    }}>
                      {report.certifications[locale].map((cert, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: royalColors.bgRefined,
                            padding: '12px',
                            borderRadius: '4px',
                            borderLeft: ar ? 'none' : `3px solid ${royalColors.compassionTeal}`,
                            borderRight: ar ? `3px solid ${royalColors.compassionTeal}` : 'none',
                          }}
                        >
                          <p style={{
                            fontSize: '13px',
                            color: royalColors.textOfficial,
                            fontWeight: '500',
                            margin: 0,
                          }}>
                            ✓ {cert}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <div style={{
                    paddingTop: '24px',
                    borderTop: `1px solid ${royalColors.borderFormal}`,
                    display: 'flex',
                    gap: '12px',
                    flexDirection: ar ? 'row-reverse' : 'row',
                    flexWrap: 'wrap',
                  }}>
                    <button
                      onClick={() => alert(`Download JHCO-${report.year}-Audit-Report.pdf`)}
                      style={{
                        backgroundColor: royalColors.hashemiteGold,
                        color: royalColors.darkNavy,
                        border: 'none',
                        padding: '10px 24px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        (e.target as HTMLButtonElement).style.boxShadow =
                          '0 4px 12px rgba(212,152,66,0.3)';
                      }}
                      onMouseOut={(e) => {
                        (e.target as HTMLButtonElement).style.boxShadow = 'none';
                      }}
                    >
                      📄 {content.sections.downloadReport} (PDF)
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '64px 32px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            marginTop: 0,
          }}>
            {ar ? 'الشفافية والمسؤولية' : 'Transparency & Accountability'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textOfficial,
            lineHeight: '1.7',
            marginBottom: '24px',
            margin: 0,
          }}>
            {ar
              ? 'تلتزم الهيئة بأعلى معايير الشفافية المالية والحكومة. تقارير المراجعة السنوية المنشورة توفر رؤية شاملة عن صحتنا المالية وتأثير برامجنا.'
              : 'JHCO is committed to the highest standards of financial transparency and governance. Our published annual audit reports provide comprehensive insight into our financial health and program impact.'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <p style={{
                fontSize: '32px',
                margin: '0 0 8px 0',
              }}>
                7
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textOfficial,
                fontWeight: '600',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                {ar ? 'سنوات من التقارير' : 'Years of Reports'}
              </p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <p style={{
                fontSize: '32px',
                margin: '0 0 8px 0',
              }}>
                100%
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textOfficial,
                fontWeight: '600',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                {ar ? 'آراء نظيفة' : 'Clean Opinions'}
              </p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
            }}>
              <p style={{
                fontSize: '32px',
                margin: '0 0 8px 0',
              }}>
                IFRS
              </p>
              <p style={{
                fontSize: '13px',
                color: royalColors.textOfficial,
                fontWeight: '600',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                {ar ? 'الامتثال الكامل' : 'Fully Compliant'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section style={{
        padding: '64px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
            marginTop: 0,
            textAlign: ar ? 'right' : 'left',
          }}>
            {ar ? 'اكتشف المزيد' : 'Explore More'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{ fontSize: '32px', margin: '0 0 16px 0' }}>📊</p>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                {ar ? 'التقارير المالية' : 'Financial Reports'}
              </h3>
              <p style={{
                fontSize: '14px',
                color: royalColors.textOfficial,
                margin: 0,
              }}>
                {ar
                  ? 'الكشوفات المالية التفصيلية والبيانات'
                  : 'Detailed financial statements and data'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{ fontSize: '32px', margin: '0 0 16px 0' }}>⚖️</p>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                {ar ? 'الامتثال' : 'Compliance'}
              </h3>
              <p style={{
                fontSize: '14px',
                color: royalColors.textOfficial,
                margin: 0,
              }}>
                {ar
                  ? 'السجلات والشهادات والسياسات'
                  : 'Registrations, certifications & policies'}
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              border: `1px solid ${royalColors.borderFormal}`,
              textAlign: ar ? 'right' : 'left',
            }}>
              <p style={{ fontSize: '32px', margin: '0 0 16px 0' }}>👁️</p>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: royalColors.darkNavy,
                marginBottom: '12px',
              }}>
                {ar ? 'الشفافية' : 'Transparency'}
              </h3>
              <p style={{
                fontSize: '14px',
                color: royalColors.textOfficial,
                margin: 0,
              }}>
                {ar
                  ? 'الشفافية والمسؤولية'
                  : 'Accountability & openness'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
