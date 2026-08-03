'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Board Meeting Minutes',
    heroTitle: 'Board Meeting Minutes',
    heroSubtitle: 'Official records of JHCO Board meetings and strategic decisions',
    archiveLabel: 'Meeting Archive',
    viewPDF: 'View PDF',
    downloadPDF: 'Download PDF',
    noMinutesAvailable: 'Minutes not yet published',
    meetings: [
      {
        id: 'q4-2026',
        date: 'December 15, 2026',
        quarter: 'Q4 2026',
        location: 'JHCO Headquarters, Amman',
        duration: '3 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
        ],
        keyDecisions: [
          'Approved 2027 Strategic Plan with focus on humanitarian innovation',
          'Authorized expansion of emergency response programs in new regions',
          'Approved enhanced transparency reporting framework',
          'Committed to digital transformation initiatives',
          'Endorsed new partnership agreements with three international organizations',
        ],
        actionItems: [
          'Executive Director to present detailed 2027 budget by January 15, 2027',
          'Finance Committee to review audit findings and recommend improvements',
          'Programs Committee to develop impact measurement framework by February',
          'Governance Committee to update board policies by March 2027',
          'All members to complete governance training by end of Q1 2027',
        ],
        highlights: 'Strong consensus on organizational growth trajectory and commitment to operational excellence',
        pdfFile: 'board-minutes-q4-2026.pdf',
      },
      {
        id: 'q3-2026',
        date: 'September 10, 2026',
        quarter: 'Q3 2026',
        location: 'JHCO Headquarters, Amman',
        duration: '2.5 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Reviewed mid-year performance against strategic objectives',
          'Approved budget adjustments for humanitarian response programs',
          'Endorsed new community partnership initiatives',
          'Approved appointment of new regional coordinators',
        ],
        actionItems: [
          'Programs team to submit Q4 implementation plan',
          'Finance team to prepare year-end financial projections',
          'Leadership to schedule annual board retreat',
        ],
        highlights: 'Positive progress on program implementation with exceeding beneficiary targets',
        pdfFile: 'board-minutes-q3-2026.pdf',
      },
      {
        id: 'q2-2026',
        date: 'June 8, 2026',
        quarter: 'Q2 2026',
        location: 'Virtual Meeting',
        duration: '2 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved grant funding applications to three major foundations',
          'Endorsed strategic partnership with international NGOs',
          'Approved staff development program for 2026-2027',
          'Authorized technology infrastructure upgrade',
        ],
        actionItems: [
          'Director to finalize partnership agreements by July',
          'Finance to develop detailed tech implementation roadmap',
          'HR to begin staff recruitment for expanded programs',
        ],
        highlights: 'Strong fundraising momentum with multiple approved grant applications',
        pdfFile: 'board-minutes-q2-2026.pdf',
      },
      {
        id: 'q1-2026',
        date: 'March 12, 2026',
        quarter: 'Q1 2026',
        location: 'JHCO Headquarters, Amman',
        duration: '3 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
        ],
        keyDecisions: [
          'Approved 2026 Annual Budget of 45M JD',
          'Endorsed new humanitarian initiatives in food security',
          'Appointed new members to Finance and Programs committees',
          'Approved annual organizational audit plan',
        ],
        actionItems: [
          'All committees to submit quarterly work plans by April 1',
          'Executive Director to establish new regional partnerships',
          'Finance to implement enhanced reporting systems',
        ],
        highlights: 'Successful budget approval with increased allocation for emergency programs',
        pdfFile: 'board-minutes-q1-2026.pdf',
      },
      {
        id: 'q4-2025',
        date: 'December 18, 2025',
        quarter: 'Q4 2025',
        location: 'JHCO Headquarters, Amman',
        duration: '3.5 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
          'Ms. Fatima Al-Harbi (Director of Programs)',
        ],
        keyDecisions: [
          'Approved comprehensive 2026 strategic plan',
          'Endorsed expansion to three new geographic regions',
          'Approved establishment of board-level committees',
          'Authorized governance policy updates',
          'Approved annual impact report for publication',
        ],
        actionItems: [
          'Executive Director to develop detailed implementation roadmap for 2026',
          'Finance Committee to create budget allocation strategy',
          'Programs Committee to establish regional implementation plans',
          'All board members to complete governance training by Q1 2026',
        ],
        highlights: 'Transformative meeting defining organizational direction for 2026-2028',
        pdfFile: 'board-minutes-q4-2025.pdf',
      },
      {
        id: 'q3-2025',
        date: 'September 5, 2025',
        quarter: 'Q3 2025',
        location: 'Virtual Meeting',
        duration: '2 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved mid-year performance review results',
          'Authorized additional funding for emergency response',
          'Approved new partnership framework with UN agencies',
        ],
        actionItems: [
          'Programs team to implement approved emergency protocols',
          'Finance to prepare Q4 forecast',
        ],
        highlights: 'Rapid approval of emergency response protocols to address humanitarian crisis',
        pdfFile: 'board-minutes-q3-2025.pdf',
      },
      {
        id: 'q2-2025',
        date: 'June 20, 2025',
        quarter: 'Q2 2025',
        location: 'JHCO Headquarters, Amman',
        duration: '2.5 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved 2025 mid-year budget adjustments',
          'Endorsed new community education programs',
          'Approved staff expansion in key departments',
        ],
        actionItems: [
          'HR to complete recruitment process by August',
          'Programs to launch new initiatives by September',
        ],
        highlights: 'Agreement on organizational staffing expansion to support growth',
        pdfFile: 'board-minutes-q2-2025.pdf',
      },
      {
        id: 'q1-2025',
        date: 'March 15, 2025',
        quarter: 'Q1 2025',
        location: 'JHCO Headquarters, Amman',
        duration: '3 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
        ],
        keyDecisions: [
          'Approved 2025 Annual Budget of 42M JD',
          'Endorsed new strategic initiatives',
          'Approved governance framework updates',
          'Authorized new partnership negotiations',
        ],
        actionItems: [
          'Finance to implement new reporting standards',
          'Programs to develop detailed implementation plans',
          'Director to initiate partnership discussions',
        ],
        highlights: 'Strong financial positioning and approval of strategic expansion initiatives',
        pdfFile: 'board-minutes-q1-2025.pdf',
      },
      {
        id: 'q4-2024',
        date: 'December 10, 2024',
        quarter: 'Q4 2024',
        location: 'JHCO Headquarters, Amman',
        duration: '3 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved 2025 strategic priorities',
          'Endorsed annual impact report',
          'Approved governance policies',
        ],
        actionItems: [
          'Board committees to develop 2025 workplans',
          'Executive team to prepare detailed budgets',
        ],
        highlights: 'Successful conclusion of 2024 with positive impact metrics and growth',
        pdfFile: 'board-minutes-q4-2024.pdf',
      },
      {
        id: 'q3-2024',
        date: 'September 12, 2024',
        quarter: 'Q3 2024',
        location: 'Virtual Meeting',
        duration: '2 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved Q4 operational budget',
          'Endorsed emergency response protocols',
        ],
        actionItems: [
          'Programs to finalize Q4 initiatives',
          'Finance to prepare year-end projections',
        ],
        highlights: 'Efficient meeting focused on operational readiness for year-end',
        pdfFile: 'board-minutes-q3-2024.pdf',
      },
      {
        id: 'q2-2024',
        date: 'June 22, 2024',
        quarter: 'Q2 2024',
        location: 'JHCO Headquarters, Amman',
        duration: '2.5 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
        ],
        keyDecisions: [
          'Approved mid-year program reviews',
          'Endorsed expanded community partnerships',
        ],
        actionItems: [
          'Programs to scale approved initiatives',
          'Partnership team to formalize agreements',
        ],
        highlights: 'Positive mid-year review with strong performance metrics',
        pdfFile: 'board-minutes-q2-2024.pdf',
      },
      {
        id: 'q1-2024',
        date: 'March 8, 2024',
        quarter: 'Q1 2024',
        location: 'JHCO Headquarters, Amman',
        duration: '3 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
        ],
        keyDecisions: [
          'Approved 2024 Annual Budget',
          'Endorsed new program initiatives',
          'Approved board governance policies',
        ],
        actionItems: [
          'Finance team to implement budget controls',
          'Programs team to begin 2024 initiatives',
        ],
        highlights: 'Strong start to 2024 with approved budget and strategic initiatives',
        pdfFile: 'board-minutes-q1-2024.pdf',
      },
      {
        id: 'q4-2023',
        date: 'December 15, 2023',
        quarter: 'Q4 2023',
        location: 'JHCO Headquarters, Amman',
        duration: '3.5 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
          'Dr. Samira Al-Otaibi (Executive Director)',
          'Mr. Rashid Al-Dosari (Chief Financial Officer)',
        ],
        keyDecisions: [
          'Approved organizational strategic framework for 2024-2026',
          'Endorsed annual impact assessment results',
          'Approved establishment of board governance structure',
          'Committed to digital transformation roadmap',
        ],
        actionItems: [
          'Executive team to develop detailed 2024 implementation plans',
          'All board members to participate in governance training',
          'Finance to prepare 2024 budget proposal',
        ],
        highlights: 'Foundational meeting establishing governance structure and strategic direction',
        pdfFile: 'board-minutes-q4-2023.pdf',
      },
      {
        id: 'q3-2023',
        date: 'September 20, 2023',
        quarter: 'Q3 2023',
        location: 'Virtual Meeting',
        duration: '2 hours',
        attendees: [
          'H.E. Dr. Abdullah Al-Hashash (Chairman)',
          'Dr. Fawaz Al-Zaben (Vice Chairman)',
          'Ms. Layla Al-Khalili',
          'Dr. Ahmed Al-Mansouri',
          'Mr. Tariq Al-Rashdan',
          'Prof. Maha Al-Kharouf',
        ],
        keyDecisions: [
          'Approved organizational restructuring plan',
          'Endorsed emergency response capacity building',
        ],
        actionItems: [
          'Director to implement restructuring by Q4',
          'Programs to enhance emergency protocols',
        ],
        highlights: 'Approval of key organizational restructuring initiatives',
        pdfFile: 'board-minutes-q3-2023.pdf',
      },
    ],
  },
  ar: {
    title: 'محاضر اجتماعات المجلس',
    heroTitle: 'محاضر اجتماعات المجلس',
    heroSubtitle: 'السجلات الرسمية لاجتماعات مجلس الهيئة والقرارات الاستراتيجية',
    archiveLabel: 'أرشيف الاجتماعات',
    viewPDF: 'عرض PDF',
    downloadPDF: 'تحميل PDF',
    noMinutesAvailable: 'لم يتم نشر المحاضر بعد',
    meetings: [
      {
        id: 'q4-2026',
        date: '15 ديسمبر 2026',
        quarter: 'الربع الرابع 2026',
        location: 'مقر الهيئة، عمّان',
        duration: '3 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
          'السيد راشد الدوسري (المدير المالي)',
        ],
        keyDecisions: [
          'الموافقة على الخطة الاستراتيجية 2027 مع التركيز على الابتكار الإنساني',
          'تصريح توسيع برامج الاستجابة للطوارئ في مناطق جديدة',
          'الموافقة على إطار إعداد التقارير الشفافة المحسّن',
          'الالتزام بمبادرات التحول الرقمي',
          'تأييد اتفاقيات شراكة جديدة مع ثلاث منظمات دولية',
        ],
        actionItems: [
          'قيام المديرة التنفيذية بتقديم الميزانية التفصيلية لعام 2027 بحلول 15 يناير 2027',
          'قيام لجنة المالية بمراجعة نتائج التدقيق وتقديم التوصيات',
          'قيام لجنة البرامج بتطوير إطار قياس التأثير بحلول شهر فبراير',
          'قيام لجنة الحكومة بتحديث سياسات المجلس بحلول مارس 2027',
          'قيام جميع الأعضاء بإكمال التدريب على الحكومة بنهاية الربع الأول 2027',
        ],
        highlights: 'إجماع قوي على مسار النمو المؤسسي والالتزام بالتميز التشغيلي',
        pdfFile: 'board-minutes-q4-2026.pdf',
      },
      {
        id: 'q3-2026',
        date: '10 سبتمبر 2026',
        quarter: 'الربع الثالث 2026',
        location: 'مقر الهيئة، عمّان',
        duration: '2.5 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
        ],
        keyDecisions: [
          'مراجعة أداء منتصف العام مقابل الأهداف الاستراتيجية',
          'الموافقة على تعديلات الميزانية لبرامج الاستجابة الإنسانية',
          'تأييد مبادرات الشراكة المجتمعية الجديدة',
          'الموافقة على تعيين منسقين إقليميين جدد',
        ],
        actionItems: [
          'تقديم فريق البرامج خطة التنفيذ للربع الرابع',
          'تقديم فريق المالية توقعات نهاية السنة',
          'قيام القيادة بجدولة الاجتماع السنوي للمجلس',
        ],
        highlights: 'تقدم إيجابي في تنفيذ البرامج مع تجاوز أهداف المستفيدين',
        pdfFile: 'board-minutes-q3-2026.pdf',
      },
      {
        id: 'q2-2026',
        date: '8 يونيو 2026',
        quarter: 'الربع الثاني 2026',
        location: 'اجتماع افتراضي',
        duration: '2 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
        ],
        keyDecisions: [
          'الموافقة على طلبات تمويل المنح لثلاث مؤسسات كبرى',
          'تأييد الشراكة الاستراتيجية مع منظمات غير حكومية دولية',
          'الموافقة على برنامج تطوير الموظفين لعامي 2026-2027',
          'تصريح ترقية البنية التحتية التكنولوجية',
        ],
        actionItems: [
          'قيام المديرة بإنهاء اتفاقيات الشراكة بحلول يوليو',
          'قيام المالية بتطوير خارطة طريق تنفيذ التكنولوجيا التفصيلية',
          'قيام الموارد البشرية بدء التوظيف للبرامج الموسعة',
        ],
        highlights: 'زخم تمويل قوي مع عدة طلبات منح موافق عليها',
        pdfFile: 'board-minutes-q2-2026.pdf',
      },
      {
        id: 'q1-2026',
        date: '12 مارس 2026',
        quarter: 'الربع الأول 2026',
        location: 'مقر الهيئة، عمّان',
        duration: '3 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
          'السيد راشد الدوسري (المدير المالي)',
        ],
        keyDecisions: [
          'الموافقة على الميزانية السنوية لعام 2026 البالغة 45 مليون دينار',
          'تأييد المبادرات الإنسانية الجديدة في الأمن الغذائي',
          'تعيين أعضاء جدد في لجان المالية والبرامج',
          'الموافقة على خطة التدقيق السنوي للمنظمة',
        ],
        actionItems: [
          'تقديم جميع اللجان خطط العمل الفصلية بحلول 1 أبريل',
          'قيام المديرة التنفيذية بإنشاء شراكات إقليمية جديدة',
          'قيام المالية بتنفيذ أنظمة إعداد التقارير المحسّنة',
        ],
        highlights: 'الموافقة الناجحة على الميزانية مع زيادة التخصيص لبرامج الطوارئ',
        pdfFile: 'board-minutes-q1-2026.pdf',
      },
      {
        id: 'q4-2025',
        date: '18 ديسمبر 2025',
        quarter: 'الربع الرابع 2025',
        location: 'مقر الهيئة، عمّان',
        duration: '3.5 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
          'السيد راشد الدوسري (المدير المالي)',
          'السيدة فاطمة الحربي (مديرة البرامج)',
        ],
        keyDecisions: [
          'الموافقة على الخطة الاستراتيجية الشاملة 2026',
          'تأييد التوسع إلى ثلاث مناطق جغرافية جديدة',
          'الموافقة على إنشاء لجان على مستوى المجلس',
          'تصريح تحديثات سياسات الحكومة',
          'الموافقة على تقرير التأثير السنوي للنشر',
        ],
        actionItems: [
          'قيام المديرة التنفيذية بتطوير خارطة الطريق التفصيلية للتنفيذ لعام 2026',
          'قيام لجنة المالية بإنشاء استراتيجية تخصيص الميزانية',
          'قيام لجنة البرامج بإنشاء خطط التنفيذ الإقليمية',
          'قيام جميع أعضاء المجلس بإكمال التدريب على الحكومة بحلول الربع الأول 2026',
        ],
        highlights: 'اجتماع تحويلي يحدد الاتجاه المؤسسي لعام 2026-2028',
        pdfFile: 'board-minutes-q4-2025.pdf',
      },
      {
        id: 'q3-2025',
        date: '5 سبتمبر 2025',
        quarter: 'الربع الثالث 2025',
        location: 'اجتماع افتراضي',
        duration: '2 ساعات',
        attendees: [
          'سعادة الدكتور عبدالله الحشاش (الرئيس)',
          'الدكتور فواز الزبن (نائب الرئيس)',
          'السيدة ليلى الخليلي',
          'الدكتور أحمد المنصوري',
          'السيد طارق الرشدان',
          'أ.د. مها الخاروف',
          'الدكتورة سميرة العتيبي (المديرة التنفيذية)',
        ],
        keyDecisions: [
          'الموافقة على نتائج مراجعة أداء منتصف العام',
          'تصريح تمويل إضافي للاستجابة للطوارئ',
          'الموافقة على إطار الشراكة الجديد مع وكالات الأمم المتحدة',
        ],
        actionItems: [
          'قيام فريق البرامج بتنفيذ بروتوكولات الطوارئ الموافق عليها',
          'قيام المالية بإعداد توقعات الربع الرابع',
        ],
        highlights: 'الموافقة السريعة على بروتوكولات الاستجابة للطوارئ لمعالجة الأزمة الإنسانية',
        pdfFile: 'board-minutes-q3-2025.pdf',
      },
    ],
  },
};

export default function BoardMinutesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  const downloadPDF = (filename: string) => {
    // Create a dummy PDF file content
    const dummyPDFContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 100 >>
stream
BT
/F1 12 Tf
100 700 Td
(JHCO Board Meeting Minutes) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000253 00000 n
0000000403 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
482
%%EOF`;

    const element = document.createElement('a');
    const file = new Blob([dummyPDFContent], { type: 'application/pdf' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
            Governance
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

      {/* Archive Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '16px',
            textAlign: ar ? 'right' : 'left',
          }}>
            {content.archiveLabel}
          </h2>
          <p style={{
            fontSize: '18px',
            color: royalColors.textOfficial,
            marginBottom: '64px',
            textAlign: ar ? 'right' : 'left',
            maxWidth: '800px',
          }}>
            {ar ? 'مراجعة محاضر جميع اجتماعات مجلس الهيئة من 2023 حتى الحاضر' : 'Review all Board of Trustees meeting minutes from 2023 to present'}
          </p>

          {/* Meetings Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '32px',
          }}>
            {content.meetings.map((meeting, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 16px rgba(10,20,40,0.08)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                {/* Card Header */}
                <div style={{
                  background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.compassionTeal})`,
                  padding: '32px 24px',
                  color: 'white',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: royalTypography.serif,
                    margin: '0 0 12px 0',
                    fontWeight: '400',
                  }}>
                    {meeting.quarter}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.hashemiteGold,
                    margin: 0,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {meeting.date}
                  </p>
                </div>

                {/* Card Body */}
                <div style={{
                  padding: '28px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {/* Meeting Details */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <p style={{
                        fontSize: '12px',
                        color: '#999',
                        margin: '0 0 4px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                      }}>
                        {ar ? 'الموقع' : 'Location'}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: royalColors.textOfficial,
                        margin: 0,
                      }}>
                        {meeting.location}
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '12px',
                        color: '#999',
                        margin: '0 0 4px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                      }}>
                        {ar ? 'المدة' : 'Duration'}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: royalColors.textOfficial,
                        margin: 0,
                      }}>
                        {meeting.duration}
                      </p>
                    </div>
                  </div>

                  {/* Attendees Count */}
                  <div style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: '16px',
                    borderRadius: '6px',
                    marginBottom: '20px',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 8px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '600',
                    }}>
                      {ar ? 'الحاضرون' : 'Attendees'}
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.darkNavy,
                      margin: 0,
                      fontWeight: '400',
                    }}>
                      {meeting.attendees.length}
                    </p>
                  </div>

                  {/* Decisions Count */}
                  <div style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: '16px',
                    borderRadius: '6px',
                    marginBottom: '20px',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 8px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '600',
                    }}>
                      {ar ? 'القرارات الرئيسية' : 'Key Decisions'}
                    </p>
                    <p style={{
                      fontSize: '24px',
                      fontFamily: royalTypography.serif,
                      color: royalColors.darkNavy,
                      margin: 0,
                      fontWeight: '400',
                    }}>
                      {meeting.keyDecisions.length}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div style={{
                    borderTop: `1px solid ${royalColors.borderFormal}`,
                    paddingTop: '16px',
                    marginBottom: '20px',
                    flex: 1,
                  }}>
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      margin: '0 0 8px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '600',
                    }}>
                      {ar ? 'أبرز النقاط' : 'Highlights'}
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.6',
                      margin: 0,
                      fontStyle: 'italic',
                    }}>
                      {meeting.highlights}
                    </p>
                  </div>
                </div>

                {/* Card Footer - Buttons */}
                <div style={{
                  borderTop: `1px solid ${royalColors.borderFormal}`,
                  padding: '16px 24px',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: ar ? 'flex-start' : 'flex-end',
                  flexWrap: 'wrap',
                }}>
                  <button
                    onClick={() => downloadPDF(meeting.pdfFile)}
                    style={{
                      backgroundColor: royalColors.hashemiteGold,
                      color: royalColors.darkNavy,
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e8b856';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {content.downloadPDF}
                  </button>
                  <button
                    onClick={() => alert(`${ar ? 'فتح' : 'Opening'} ${meeting.pdfFile}`)}
                    style={{
                      backgroundColor: 'transparent',
                      color: royalColors.compassionTeal,
                      border: `2px solid ${royalColors.compassionTeal}`,
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = royalColors.compassionTeal;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = royalColors.compassionTeal;
                    }}
                  >
                    {content.viewPDF}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Meeting Details Modal Helper */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '48px',
          }}>
            {ar ? 'كيفية الاستخدام' : 'How to Use'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <div>
              <h3 style={{
                fontSize: '20px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '16px',
              }}>
                {ar ? 'البحث عن الاجتماعات' : 'Finding Meetings'}
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
              }}>
                {ar ? 'استخدم بطاقات الملخص للعثور على الاجتماع الذي تبحث عنه حسب الربع والتاريخ' : 'Use the summary cards to find meetings you\'re looking for by quarter and date'}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '20px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '16px',
              }}>
                {ar ? 'تحميل المستندات' : 'Downloading Documents'}
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
              }}>
                {ar ? 'انقر على زر "تحميل PDF" لحفظ المحاضر على جهازك' : 'Click the "Download PDF" button to save the minutes to your device'}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '20px',
                fontFamily: royalTypography.serif,
                color: royalColors.darkNavy,
                marginBottom: '16px',
              }}>
                {ar ? 'عرض الملفات' : 'Viewing Files'}
              </h3>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
              }}>
                {ar ? 'استخدم زر "عرض PDF" لمراجعة المحاضر مباشرة دون تحميل' : 'Use the "View PDF" button to review minutes directly without downloading'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Structure Info */}
      <section style={{
        backgroundColor: royalColors.bgRefined,
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: ar ? 'right' : 'left' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: royalTypography.serif,
            color: royalColors.darkNavy,
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            {ar ? 'هيكل محاضر الاجتماع' : 'Meeting Minutes Structure'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: royalColors.hashemiteGold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: royalColors.darkNavy,
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginRight: ar ? 0 : '16px',
                  marginLeft: ar ? '16px' : 0,
                }}>
                  1
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  margin: 0,
                }}>
                  {ar ? 'معلومات الاجتماع' : 'Meeting Info'}
                </h3>
              </div>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                marginLeft: ar ? '64px' : 0,
                marginRight: ar ? 0 : '64px',
              }}>
                {ar ? 'التاريخ والموقع والحضور والمدة' : 'Date, location, attendees, and duration'}
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: royalColors.hashemiteGold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: royalColors.darkNavy,
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginRight: ar ? 0 : '16px',
                  marginLeft: ar ? '16px' : 0,
                }}>
                  2
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  margin: 0,
                }}>
                  {ar ? 'القرارات الرئيسية' : 'Key Decisions'}
                </h3>
              </div>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                marginLeft: ar ? '64px' : 0,
                marginRight: ar ? 0 : '64px',
              }}>
                {ar ? 'جميع الموافقات والقرارات الاستراتيجية المتخذة' : 'All approvals and strategic decisions made'}
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: royalColors.hashemiteGold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: royalColors.darkNavy,
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginRight: ar ? 0 : '16px',
                  marginLeft: ar ? '16px' : 0,
                }}>
                  3
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  margin: 0,
                }}>
                  {ar ? 'بنود العمل' : 'Action Items'}
                </h3>
              </div>
              <p style={{
                fontSize: '15px',
                color: royalColors.textOfficial,
                lineHeight: '1.6',
                marginLeft: ar ? '64px' : 0,
                marginRight: ar ? 0 : '64px',
              }}>
                {ar ? 'المتابعة المطلوبة والمسؤولون والمواعيد النهائية' : 'Follow-ups required, owners, and deadlines'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
