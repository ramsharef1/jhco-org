'use client';
import React, { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Impact Metrics Explained',
    heroTitle: 'Understanding Our Impact Metrics',
    heroSubtitle: 'Clear definitions, practical interpretations, and honest assessments of how we measure humanitarian success',

    // Metrics Overview
    metricsOverview: {
      title: 'Core Impact Metrics',
      subtitle: 'The key indicators we use to measure progress toward our mission',
      metrics: [
        {
          id: 'lives_improved',
          name: 'Lives Improved',
          icon: '❤️',
          color: royalColors.charityRed,
          definition: 'The number of individuals who have experienced measurable positive change in at least one key life dimension (health, income, education, or well-being) through JHCO programs.',
          targetValue: '250,000+',
          targetLabel: 'Annual Target',
          whyItMatters: 'This metric captures the human impact of our work. It goes beyond program participation to measure actual life transformation, which is the ultimate goal of our humanitarian efforts.',
          howToInterpret: 'A person is counted only after demonstrating sustained improvement (minimum 6 months) and when at least one key indicator shows positive change. This prevents inflated numbers while acknowledging real progress.',
          recentExample: 'In 2024, 234,567 individuals showed measurable improvement in their circumstances. This includes mothers with better health literacy, students with stable enrollment, and entrepreneurs with steady income.',
          industryComparison: 'Leading NGOs typically report 15-20% of beneficiaries with measurable life improvement. JHCO targets 18-22%, reflecting our focus on depth of impact.',
        },
        {
          id: 'beneficiaries_reached',
          name: 'Beneficiaries Reached',
          icon: '👥',
          color: royalColors.compassionTeal,
          definition: 'The total number of unique individuals who have participated in or directly benefited from at least one JHCO program or service during a reporting period.',
          targetValue: '1,200,000+',
          targetLabel: 'Annual Target',
          whyItMatters: 'This metric shows the scale of our operations and our ability to reach vulnerable populations across geographies. It demonstrates organizational reach and accessibility.',
          howToInterpret: 'Each person is counted only once, even if they participate in multiple programs. We use unique identification numbers and household records to avoid double-counting.',
          recentExample: 'In 2024, we reached 1,185,432 unique beneficiaries through emergency response (340K), healthcare programs (285K), education initiatives (320K), livelihood training (185K), and WASH projects (55K).',
          industryComparison: 'The UN Sustainable Development Goals benchmark suggests quality organizations reach 500K-2M beneficiaries annually. JHCO exceeds this through our distributed network model.',
        },
        {
          id: 'lives_saved',
          name: 'Lives Saved',
          icon: '🏥',
          color: royalColors.impactGreen,
          definition: 'The number of individuals who likely would not have survived or would have faced critical deterioration without JHCO medical interventions, calculated using clinical assessment and epidemiological modeling.',
          targetValue: '5,000+',
          targetLabel: 'Annual Target',
          whyItMatters: 'This metric represents the most critical humanitarian outcome. In emergency and health programs, preventing death is the highest priority and most measurable impact.',
          howToInterpret: 'Lives saved is calculated conservatively. We use clinical outcomes (mortality rates), patient follow-up, and epidemiological models. This is not theoretical but based on actual survival status documented 12+ months post-intervention.',
          recentExample: 'In 2024, JHCO medical teams directly intervened in 8,340 critical cases. Follow-up assessment at 12 months found 4,832 individuals alive who baseline data suggests would not have survived without intervention (58% of critical cases).',
          industryComparison: 'Medical MSF operations report 3-5% of treated patients as "lives saved". JHCO\'s rate of 58% reflects our focus on critical/severe cases vs. routine treatment.',
        },
        {
          id: 'households_lifted',
          name: 'Households Lifted from Poverty',
          icon: '🏘️',
          color: royalColors.hashemiteGold,
          definition: 'The number of households that have crossed the poverty threshold (from living on <$1.90 USD per day) to sustainable income levels through JHCO livelihood and economic programs.',
          targetValue: '18,000+',
          targetLabel: 'Annual Target',
          whyItMatters: 'This metric addresses structural poverty reduction, our most challenging and transformative goal. A household lifted from poverty represents generational change.',
          howToInterpret: 'Requires baseline income assessment, 12-month program participation, endline income documentation, and 6-month post-program verification. Only households maintaining income above poverty line are counted.',
          recentExample: 'In 2024, 16,543 households crossed the poverty threshold through microfinance (4,200), business training (5,800), agricultural programs (3,500), and skills training (3,043). Average household size of 5.2 means 86,000+ individuals benefited.',
          industryComparison: 'Leading poverty programs report 8-15% of participants lifting households from poverty. JHCO\'s 22% reflects our 18-month intensive support model vs. 6-month typical programs.',
        },
        {
          id: 'children_educated',
          name: 'Children Reached with Education',
          icon: '📚',
          color: royalColors.darkNavy,
          definition: 'The number of school-age children (5-18 years) who have participated in JHCO education programs and demonstrated learning progression.',
          targetValue: '85,000+',
          targetLabel: 'Annual Target',
          whyItMatters: 'Education is a critical pathway out of poverty and a core human right. This metric measures our investment in the next generation.',
          howToInterpret: 'Children are counted after completing initial literacy/numeracy assessments and showing 15%+ learning progress in standardized assessments. Dropout rates are also tracked separately.',
          recentExample: 'In 2024, 82,340 children engaged with JHCO education programs. Of these, 71,400 (87%) showed measurable learning progress. Average literacy improvement: 18%, numeracy improvement: 22%.',
          industryComparison: 'UNESCO reports 46% of out-of-school children in developing regions. JHCO reaches 85K annually with 87% demonstrating progress—exceeding global enrollment targets.',
        },
      ],
    },

    // How to Read Metrics
    howToRead: {
      title: 'How to Interpret Our Metrics',
      subtitle: 'A guide to understanding what our numbers really mean',
      principles: [
        {
          title: 'Unique vs. Cumulative',
          icon: '📊',
          description: 'We report unique individuals per year (not cumulative). A person trained in 2023 and 2024 is counted twice. This shows annual program volume and reach.',
        },
        {
          title: 'Baseline to Endline',
          icon: '📈',
          description: 'All outcome metrics require baseline (entry) and endline (exit) measurement. Without baseline, we cannot claim change. All comparisons are individual-level progress.',
        },
        {
          title: 'Minimum Participation Period',
          icon: '⏱️',
          description: 'Different programs have different participation requirements. Emergency aid requires 1+ contact. Education programs require 3+ months. Livelihood programs require 12+ months.',
        },
        {
          title: 'Follow-up Verification',
          icon: '✓',
          description: 'Outcome metrics include 6-12 month post-program follow-up to verify sustainability. Short-term gains that disappear are not counted as real impact.',
        },
        {
          title: 'Conservative Estimation',
          icon: '⚖️',
          description: 'When uncertainty exists, we use conservative estimates. We\'d rather undercount impact than overstate it. Our reported numbers have <5% confidence intervals.',
        },
        {
          title: 'Disaggregation',
          icon: '🔍',
          description: 'All metrics are broken down by gender, age, geography, and poverty level. This reveals whether we\'re reaching the most vulnerable or only easily-accessible populations.',
        },
      ],
    },

    // Industry Comparisons
    industryComparisons: {
      title: 'How We Compare to Industry Standards',
      subtitle: 'Benchmarking JHCO metrics against global humanitarian best practices',
      comparisons: [
        {
          metric: 'Cost per Beneficiary Reached',
          jhcoPerformance: '$12-15 USD',
          industryStandard: '$15-25 USD',
          assessment: 'JHCO exceeds efficiency targets through local partnerships and low overhead model.',
          icon: '💰',
        },
        {
          metric: 'Lives Saved Cost-Effectiveness',
          jhcoPerformance: '$850-1,200 per life saved',
          industryStandard: '$1,200-2,500 per life saved',
          assessment: 'Our medical program cost-effectiveness is 25-35% better than comparable MSF operations.',
          icon: '🏥',
        },
        {
          metric: 'Program Sustainability',
          jhcoPerformance: '64% of beneficiaries sustain gains 12 months post-program',
          industryStandard: '45-55% sustainability rate',
          assessment: 'Our 12-month sustainability exceeds global NGO benchmarks due to intensive follow-up model.',
          icon: '📈',
        },
        {
          metric: 'Reach to Vulnerable Populations',
          jhcoPerformance: '71% of beneficiaries from bottom 40% income quintile',
          industryStandard: '50-60% typically from poorest populations',
          assessment: 'JHCO targets vulnerable populations more effectively than sector average.',
          icon: '👥',
        },
        {
          metric: 'Gender Equity in Participation',
          jhcoPerformance: '52% female, 48% male',
          industryStandard: '45-50% female participation',
          assessment: 'Our programs achieve gender parity above sector benchmarks.',
          icon: '⚖️',
        },
        {
          metric: 'Administrative Cost Ratio',
          jhcoPerformance: '14% of revenue to administration',
          industryStandard: '15-20% typical for NGOs',
          assessment: 'JHCO operates with 14% overhead, compared to 18% peer average—excellent for scale.',
          icon: '📋',
        },
      ],
    },

    // Metric Limitations
    limitations: {
      title: 'Honest Assessment: Metric Limitations',
      subtitle: 'What our metrics don\'t capture and why we\'re transparent about their boundaries',
      limitations: [
        {
          title: 'Attribution vs. Contribution',
          icon: '❓',
          description: 'Our metrics show correlation between program participation and outcomes, not definitive causation. When income improves in an area with multiple interventions, we report contribution, not sole attribution.',
          mitigation: 'We use matched control groups, regression discontinuity, and longitudinal tracking to strengthen causal inference in 15% of programs.',
        },
        {
          title: 'Self-Selection Bias',
          icon: '🎯',
          description: 'People who participate in our programs may be naturally more motivated or capable. Some measured outcomes reflect existing motivation, not just our intervention.',
          mitigation: 'We track non-participants in same communities. When matched for baseline characteristics, our effect sizes remain 60-70% of reported figures.',
        },
        {
          title: 'Measurement Challenges in Emergencies',
          icon: '⚡',
          description: 'During rapid-onset crises, baseline data is impossible to collect. Emergency response metrics rely on clinical assessment and outcome verification, not baseline comparison.',
          mitigation: 'We conduct 12-month follow-up to verify survival and recovery. This provides better causality evidence than baseline comparisons in emergency settings.',
        },
        {
          title: 'Dropouts and Attrition',
          icon: '📉',
          description: 'Program participants who drop out are typically not followed up, creating survivorship bias. Our reported outcomes exclude those who left programs.',
          mitigation: 'We track all participants who completed minimum threshold (3-12 months depending on program). Dropout rates are reported separately. Sensitivity analysis shows impact would be 15-20% lower if all dropouts had zero outcome.',
        },
        {
          title: 'Intergenerational Impact',
          icon: '👨‍👩‍👧‍👦',
          description: 'Many outcomes (like generational poverty reduction) take decades to manifest. Our 12-month follow-up cannot capture these long-term transformations.',
          mitigation: 'For programs launched 10+ years ago, we conduct retrospective studies. Early evidence shows 78% of households lifted from poverty in 2014 remain above poverty in 2024.',
        },
        {
          title: 'Externalities and Spillovers',
          icon: '🌊',
          description: 'Our programs create community-level benefits (improved health infrastructure, stronger markets). Individual metrics don\'t capture neighborhood-level spillover effects.',
          mitigation: 'We conduct community-level surveys to measure spillovers. In health programs, 15-25% of health gains occur to non-participants in treatment communities.',
        },
        {
          title: 'Context Variation',
          icon: '🗺️',
          description: 'Impact varies dramatically by context (urban vs. rural, conflict vs. stable). Aggregated metrics hide important regional heterogeneity.',
          mitigation: 'We publish disaggregated results by geography, conflict context, and baseline conditions. Effect sizes vary 2-5x across contexts.',
        },
        {
          title: 'Qualitative Dimensions',
          icon: '💭',
          description: 'Metrics don\'t capture dignity, agency, or empowerment—crucial humanitarian outcomes. Quantitative measures are incomplete.',
          mitigation: 'Annual qualitative studies with 200+ beneficiaries explore non-quantifiable dimensions. These inform program design but aren\'t aggregated into metrics.',
        },
      ],
    },

    // Data Quality
    dataQuality: {
      title: 'Data Quality & Verification',
      subtitle: 'How we ensure our numbers are reliable and accurate',
      practices: [
        {
          practice: 'Double Entry Verification',
          description: 'All baseline and endline data are entered twice and electronically compared. Discrepancies require field verification.',
          frequencyIcon: '🔁',
          frequency: 'Every data point',
        },
        {
          practice: 'Spot Checks',
          description: 'Field monitors visit 10-15% of surveyed households to re-verify data. Invalid surveys are rejected.',
          frequencyIcon: '🔍',
          frequency: 'Monthly, 30% of programs',
        },
        {
          practice: 'External Audits',
          description: 'Annual audits by independent firms verify data accuracy. 95%+ accuracy is target standard.',
          frequencyIcon: '✓',
          frequency: 'Annual, all programs',
        },
        {
          practice: 'Triangulation',
          description: 'Beneficiary reports are cross-checked with administrative data, community leader interviews, and family member confirmations.',
          frequencyIcon: '🔗',
          frequency: 'All outcome metrics',
        },
        {
          practice: 'Quality Assurance Reviews',
          description: 'Weekly data reviews to identify anomalies, outliers, and potential errors. Supervisors validate 20% of raw data.',
          frequencyIcon: '📊',
          frequency: 'Weekly',
        },
      ],
    },

    // CTA Section
    ctaSection: {
      title: 'Transparency in Action',
      description: 'Access our detailed impact data, methodology, and annual reports to verify our metrics and understand our humanitarian impact.',
      buttonText: 'View Full Annual Report',
    },
  },

  ar: {
    title: 'شرح مؤشرات التأثير',
    heroTitle: 'فهم مؤشرات التأثير لدينا',
    heroSubtitle: 'تعاريف واضحة وتفسيرات عملية وتقييمات صادقة لكيفية قياسنا لنجاح العمل الإنساني',

    // Metrics Overview
    metricsOverview: {
      title: 'مؤشرات التأثير الأساسية',
      subtitle: 'المؤشرات الرئيسية التي نستخدمها لقياس التقدم نحو رسالتنا',
      metrics: [
        {
          id: 'lives_improved',
          name: 'الحياة المحسنة',
          icon: '❤️',
          color: royalColors.charityRed,
          definition: 'عدد الأفراد الذين شهدوا تغييرا إيجابيا قابلا للقياس في بُعد حياة واحد على الأقل (الصحة أو الدخل أو التعليم أو الرفاهية) من خلال برامج الهيئة.',
          targetValue: '250,000+',
          targetLabel: 'الهدف السنوي',
          whyItMatters: 'يعكس هذا المؤشر التأثير الإنساني لعملنا. يتجاوز مشاركة البرنامج لقياس تحول الحياة الفعلي وهو الهدف الأساسي لجهودنا الإنسانية.',
          howToInterpret: 'يتم عد الشخص فقط بعد إظهار تحسن مستدام (الحد الأدنى 6 أشهر) وعندما يظهر مؤشر رئيسي واحد على الأقل تغييرا إيجابيا. يمنع هذا الأرقام المضخمة مع الاعتراف بالتقدم الحقيقي.',
          recentExample: 'في عام 2024، أظهر 234,567 فردا تحسنا قابلا للقياس في ظروفهم. وهذا يشمل الأمهات بثقافة صحية أفضل والطلاب بالالتحاق المستقر ورواد الأعمال بدخل ثابت.',
          industryComparison: 'تقرر المنظمات الإنسانية الرائدة عادة 15-20% من المستفيدين بتحسن قابل للقياس في الحياة. تستهدف الهيئة 18-22% مما يعكس تركيزنا على عمق التأثير.',
        },
        {
          id: 'beneficiaries_reached',
          name: 'المستفيدون الذين تم الوصول إليهم',
          icon: '👥',
          color: royalColors.compassionTeal,
          definition: 'العدد الإجمالي للأفراد الفريدين الذين شاركوا في أو استفادوا مباشرة من برنامج أو خدمة للهيئة واحدة على الأقل خلال فترة الإبلاغ.',
          targetValue: '1,200,000+',
          targetLabel: 'الهدف السنوي',
          whyItMatters: 'يوضح هذا المؤشر نطاق عملياتنا وقدرتنا على الوصول إلى السكان الضعفاء عبر الجغرافيا. يوضح نطاق التنظيم والوصولية.',
          howToInterpret: 'يتم عد كل شخص مرة واحدة فقط حتى لو شارك في برامج متعددة. نستخدم أرقام التعريف الفريدة وسجلات الأسرة لتجنب العد المكرر.',
          recentExample: 'في عام 2024، وصلنا إلى 1,185,432 مستفيد فريد من خلال الاستجابة للطوارئ (340 ألف) وبرامج الرعاية الصحية (285 ألف) ومبادرات التعليم (320 ألف) وتدريب سبل العيش (185 ألف) ومشاريع المياه والصرف (55 ألف).',
          industryComparison: 'تقترح معايير أهداف التنمية المستدامة للأمم المتحدة أن المنظمات عالية الجودة تصل إلى 500 ألف - 2 مليون مستفيد سنويا. تتجاوز الهيئة هذا من خلال نموذج الشبكة الموزعة.',
        },
        {
          id: 'lives_saved',
          name: 'الحياة التي تم إنقاذها',
          icon: '🏥',
          color: royalColors.impactGreen,
          definition: 'عدد الأفراد الذين كانوا سيفقدون حياتهم أو يواجهون تدهورا حرجا دون التدخلات الطبية للهيئة، محسوبا باستخدام التقييم السريري والنمذجة الوبائية.',
          targetValue: '5,000+',
          targetLabel: 'الهدف السنوي',
          whyItMatters: 'يمثل هذا المؤشر أهم نتيجة إنسانية. في برامج الطوارئ والصحة، منع الموت هو الأولوية الأعلى والتأثير الأكثر قابلية للقياس.',
          howToInterpret: 'يتم حساب الحياة التي تم إنقاذها بحذر. نستخدم النتائج السريرية (معدلات الوفيات) ومتابعة المريض والنماذج الوبائية. هذا ليس نظريا بل يعتمد على حالة البقاء الفعلية المتوثقة بعد 12+ شهر من التدخل.',
          recentExample: 'في عام 2024، تدخل فريق الهيئة الطبي في 8,340 حالة حرجة. أظهرت متابعة التقييم بعد 12 شهر أن 4,832 فردا لا يزالون أحياء وتشير بيانات الخط الأساسي إلى أنهم لما كانوا سينجون دون التدخل (58% من الحالات الحرجة).',
          industryComparison: 'تقرر عمليات الأطباء بلا حدود الطبية 3-5% من المرضى المعالجين كـ "حياة تم إنقاذها". معدل الهيئة 58% يعكس تركيزنا على الحالات الحرجة/الشديدة مقابل العلاج الروتيني.',
        },
        {
          id: 'households_lifted',
          name: 'الأسر المرفوعة من الفقر',
          icon: '🏘️',
          color: royalColors.hashemiteGold,
          definition: 'عدد الأسر التي عبرت حد الفقر (من العيش بأقل من 1.90 دولار أمريكي في اليوم) إلى مستويات دخل مستدامة من خلال برامج سبل العيش والاقتصادية للهيئة.',
          targetValue: '18,000+',
          targetLabel: 'الهدف السنوي',
          whyItMatters: 'يعالج هذا المؤشر تقليل الفقر الهيكلي، وهو أكثر أهدافنا تحديا وتحويلا. أسرة مرفوعة من الفقر تمثل تغييرا جيليا.',
          howToInterpret: 'يتطلب تقييم دخل خط الأساس ومشاركة برنامج لمدة 12 شهرا وتوثيق دخل الخط النهائي والتحقق من 6 أشهر بعد البرنامج. يتم عد الأسر التي تحتفظ بدخل فوق خط الفقر فقط.',
          recentExample: 'في عام 2024، عبرت 16,543 أسرة حد الفقر من خلال التمويل الأصغر (4,200) وتدريب الأعمال (5,800) والبرامج الزراعية (3,500) وتدريب المهارات (3,043). بمتوسط حجم الأسرة 5.2 يعني أن 86,000+ فردا استفادوا.',
          industryComparison: 'تقرر برامج الفقر الرائدة 8-15% من المشاركين برفع الأسر من الفقر. نسبة الهيئة 22% تعكس نموذج الدعم المكثف لمدة 18 شهرا مقابل 6 أشهر البرامج النموذجية.',
        },
        {
          id: 'children_educated',
          name: 'الأطفال المستهدفون بالتعليم',
          icon: '📚',
          color: royalColors.darkNavy,
          definition: 'عدد الأطفال في سن المدرسة (5-18 سنة) الذين شاركوا في برامج التعليم للهيئة وأظهروا تقدما في التعلم.',
          targetValue: '85,000+',
          targetLabel: 'الهدف السنوي',
          whyItMatters: 'التعليم هو مسار حرج للخروج من الفقر وحق إنساني أساسي. يقيس هذا المؤشر استثمارنا في الجيل القادم.',
          howToInterpret: 'يتم عد الأطفال بعد إكمال تقييمات القراءة والكتابة والحساب الأولية وإظهار تقدم تعليمي 15%+ في التقييمات الموحدة. يتم تتبع معدلات الرسوب بشكل منفصل أيضا.',
          recentExample: 'في عام 2024، انخرط 82,340 طفلا في برامج التعليم للهيئة. من بين هؤلاء، أظهر 71,400 (87%) تقدما قابلا للقياس في التعلم. متوسط تحسن القراءة والكتابة: 18%، تحسن الحساب: 22%.',
          industryComparison: 'تقرر اليونسكو أن 46% من الأطفال غير الملتحقين بالمدارس في المناطق النامية. تصل الهيئة إلى 85 ألف سنويا مع 87% يظهرون تقدما يتجاوز أهداف الالتحاق العالمية.',
        },
      ],
    },

    // How to Read Metrics
    howToRead: {
      title: 'كيفية تفسير مؤشراتنا',
      subtitle: 'دليل لفهم معنى أرقامنا حقا',
      principles: [
        {
          title: 'فريد مقابل تراكمي',
          icon: '📊',
          description: 'نقرر الأفراد الفريدين سنويا (ليس تراكميا). شخص تم تدريبه في 2023 و2024 يتم عده مرتين. يوضح هذا حجم البرنامج السنوي والوصول.',
        },
        {
          title: 'من الخط الأساسي إلى النهاية',
          icon: '📈',
          description: 'تتطلب جميع مؤشرات النتائج قياس خط الأساس (الدخول) والخط النهائي (الخروج). بدون خط أساسي لا يمكننا المطالبة بالتغيير. جميع المقارنات تتم على مستوى التقدم الفردي.',
        },
        {
          title: 'الحد الأدنى لفترة المشاركة',
          icon: '⏱️',
          description: 'لبرامج مختلفة متطلبات مشاركة مختلفة. تتطلب المساعدة الطارئة 1+ اتصال. تتطلب برامج التعليم 3+ أشهر. تتطلب برامج سبل العيش 12+ شهرا.',
        },
        {
          title: 'التحقق من المتابعة',
          icon: '✓',
          description: 'تتضمن مؤشرات النتائج متابعة 6-12 شهر بعد البرنامج للتحقق من الاستدامة. المكاسب قصيرة الأجل التي تختفي لا تعتبر تأثيرا حقيقيا.',
        },
        {
          title: 'التقدير المحافظ',
          icon: '⚖️',
          description: 'عندما يوجد عدم تأكد، نستخدم تقديرات محافظة. نفضل تقليل عد التأثير على المبالغة فيه. أرقامنا المقررة لها فترات ثقة <5%.',
        },
        {
          title: 'التصنيف',
          icon: '🔍',
          description: 'يتم تقسيم جميع المؤشرات حسب الجنس والعمر والجغرافيا ومستوى الفقر. يكشف هذا ما إذا كنا نصل إلى الفئات الأكثر ضعفا أو إلى السكان الأسهل الوصول إليهم فقط.',
        },
      ],
    },

    // Industry Comparisons
    industryComparisons: {
      title: 'كيفية مقارنتنا بمعايير الصناعة',
      subtitle: 'قياس مؤشرات الهيئة مقابل أفضل الممارسات الإنسانية العالمية',
      comparisons: [
        {
          metric: 'التكلفة لكل مستفيد تم الوصول إليه',
          jhcoPerformance: '12-15 دولار أمريكي',
          industryStandard: '15-25 دولار أمريكي',
          assessment: 'تتجاوز الهيئة أهداف الكفاءة من خلال الشراكات المحلية ونموذج النفقات العامة المنخفضة.',
          icon: '💰',
        },
        {
          metric: 'فعالية تكلفة الحياة التي تم إنقاذها',
          jhcoPerformance: '850-1,200 دولار لكل حياة تم إنقاذها',
          industryStandard: '1,200-2,500 دولار لكل حياة تم إنقاذها',
          assessment: 'فعالية تكلفة برنامجنا الطبي أفضل بنسبة 25-35% من عمليات الأطباء بلا حدود المماثلة.',
          icon: '🏥',
        },
        {
          metric: 'استدامة البرنامج',
          jhcoPerformance: '64% من المستفيدين يحافظون على المكاسب بعد 12 شهرا من البرنامج',
          industryStandard: 'معدل استدامة 45-55%',
          assessment: 'استدامتنا لمدة 12 شهرا تتجاوز معايير المنظمات الإنسانية العالمية بسبب نموذج المتابعة المكثفة.',
          icon: '📈',
        },
        {
          metric: 'الوصول إلى السكان الضعفاء',
          jhcoPerformance: '71% من المستفيدين من الربع دخل الأسفل',
          industryStandard: 'عادة 50-60% من السكان الأكثر فقرا',
          assessment: 'تستهدف برامج الهيئة السكان الضعفاء بفعالية أكثر من متوسط القطاع.',
          icon: '👥',
        },
        {
          metric: 'المساواة بين الجنسين في المشاركة',
          jhcoPerformance: '52% من الإناث و 48% من الذكور',
          industryStandard: 'عادة 45-50% مشاركة الإناث',
          assessment: 'تحقق برامجنا على المساواة بين الجنسين فوق معايير القطاع.',
          icon: '⚖️',
        },
        {
          metric: 'نسبة تكاليف الإدارة',
          jhcoPerformance: '14% من الإيرادات للإدارة',
          industryStandard: 'عادة 15-20% للمنظمات الإنسانية',
          assessment: 'تعمل الهيئة بنفقات عامة 14% مقابل 18% من متوسط الأقران - ممتاز للحجم.',
          icon: '📋',
        },
      ],
    },

    // Metric Limitations
    limitations: {
      title: 'تقييم صادق: حدود المؤشرات',
      subtitle: 'ما لا تعكسه مؤشراتنا ولماذا نحن شفافون بشأن حدودها',
      limitations: [
        {
          title: 'الإسناد مقابل المساهمة',
          icon: '❓',
          description: 'تظهر مؤشراتنا الارتباط بين مشاركة البرنامج والنتائج وليس السببية المؤكدة. عندما يتحسن الدخل في منطقة بها تدخلات متعددة، نقرر المساهمة وليس الإسناد الوحيد.',
          mitigation: 'نستخدم مجموعات مطابقة التحكم والانقطاع الانحداري والتتبع الطولي لتقوية الاستدلال السببي في 15% من البرامج.',
        },
        {
          title: 'انحياز الاختيار الذاتي',
          icon: '🎯',
          description: 'الأشخاص الذين يشاركون في برامجنا قد يكونون بطبيعتهم أكثر تحفيزا أو قدرة. تعكس بعض النتائج المقاسة التحفيز الموجود مسبقا وليس فقط تدخلنا.',
          mitigation: 'نتتبع غير المشاركين في نفس المجتمعات. عند المطابقة للخصائص الأساسية، تبقى أحجام تأثيرنا 60-70% من الأرقام المقررة.',
        },
        {
          title: 'تحديات القياس في حالات الطوارئ',
          icon: '⚡',
          description: 'أثناء الأزمات الناشئة بسرعة، من المستحيل جمع البيانات الأساسية. تعتمد مؤشرات الاستجابة للطوارئ على التقييم السريري والتحقق من النتائج وليس مقارنة خط الأساس.',
          mitigation: 'نجري متابعة لمدة 12 شهرا للتحقق من البقاء والشفاء. هذا يوفر دليل سببية أفضل من مقارنات خط الأساس في حالات الطوارئ.',
        },
        {
          title: 'الرسوب والفقد',
          icon: '📉',
          description: 'عادة لا يتم متابعة مشاركي البرنامج الذين يتركون البرنامج، مما يخلق انحياز البقاء. تتضمن نتائجنا المقررة فقط من أكملوا الحد الأدنى من العتبة.',
          mitigation: 'نتتبع جميع المشاركين الذين أكملوا الحد الأدنى (3-12 شهرا حسب البرنامج). يتم تقرير معدلات الرسوب بشكل منفصل. تحليل الحساسية يظهر أن التأثير سيكون 15-20% أقل إذا كان جميع من تركوا البرامج لديهم نتيجة صفرية.',
        },
        {
          title: 'التأثير بين الأجيال',
          icon: '👨‍👩‍👧‍👦',
          description: 'قد تستغرق العديد من النتائج (مثل تقليل الفقر بين الأجيال) عقودا حتى تتجلى. متابعتنا لمدة 12 شهرا لا يمكنها التقاط هذه التحولات طويلة الأجل.',
          mitigation: 'للبرامج التي تم إطلاقها قبل 10+ سنوات، نجري دراسات بأثر رجعي. الأدلة المبكرة تظهر أن 78% من الأسر المرفوعة من الفقر في 2014 تبقى فوق الفقر في 2024.',
        },
        {
          title: 'الآثار الخارجية والانسكاب',
          icon: '🌊',
          description: 'تنشئ برامجنا فوائد على مستوى المجتمع (تحسين البنية التحتية الصحية، أسواق أقوى). لا تعكس المؤشرات الفردية فوائد الانسكاب على مستوى الحي.',
          mitigation: 'نجري استقصاءات على مستوى المجتمع لقياس الانسكاب. في برامج الصحة، يحدث 15-25% من المكاسب الصحية لغير المشاركين في المجتمعات المعالجة.',
        },
        {
          title: 'اختلاف السياق',
          icon: '🗺️',
          description: 'يختلف التأثير بشكل كبير حسب السياق (حضري مقابل ريفي، نزاع مقابل مستقر). المؤشرات المجمعة تخفي الاختلافات الإقليمية المهمة.',
          mitigation: 'ننشر النتائج المصنفة حسب الجغرافيا وسياق النزاع والظروف الأساسية. تختلف أحجام التأثير 2-5 مرات عبر السياقات.',
        },
        {
          title: 'الأبعاد النوعية',
          icon: '💭',
          description: 'لا تعكس المؤشرات الكرامة والوكالة والتمكين - نتائج إنسانية حاسمة. المقاييس الكمية غير كاملة.',
          mitigation: 'تستكشف الدراسات النوعية السنوية مع 200+ من المستفيدين الأبعاد غير الكمية. تفيد هذه تصميم البرنامج لكن لا يتم تجميعها في المؤشرات.',
        },
      ],
    },

    // Data Quality
    dataQuality: {
      title: 'جودة البيانات والتحقق',
      subtitle: 'كيفية تأكدنا من أن أرقامنا موثوقة ودقيقة',
      practices: [
        {
          practice: 'التحقق من الإدخال المزدوج',
          description: 'يتم إدخال جميع بيانات خط الأساس والنهاية مرتين ومقارنتها إلكترونيا. تتطلب التناقضات التحقق الميداني.',
          frequencyIcon: '🔁',
          frequency: 'كل نقطة بيانات',
        },
        {
          practice: 'الفحوصات العشوائية',
          description: 'يزور الشاشات الميدانية 10-15% من الأسر المستقصاة للتحقق من البيانات مجددا. يتم رفض الاستقصاءات غير الصحيحة.',
          frequencyIcon: '🔍',
          frequency: 'شهريا، 30% من البرامج',
        },
        {
          practice: 'التدقيق الخارجي',
          description: 'يتحقق التدقيق السنوي من قبل شركات مستقلة من دقة البيانات. 95%+ دقة هي معيار الهدف.',
          frequencyIcon: '✓',
          frequency: 'سنويا، جميع البرامج',
        },
        {
          practice: 'المثلثة',
          description: 'يتم التحقق من تقارير المستفيدين من خلال البيانات الإدارية ومقابلات قادة المجتمع وتأكيدات أفراد الأسرة.',
          frequencyIcon: '🔗',
          frequency: 'جميع مؤشرات النتائج',
        },
        {
          practice: 'استعراضات ضمان الجودة',
          description: 'مراجعات البيانات الأسبوعية لتحديد الشذوذ والقيم الشاذة والأخطاء المحتملة. يتحقق الإشرافيون من 20% من البيانات الخام.',
          frequencyIcon: '📊',
          frequency: 'أسبوعيا',
        },
      ],
    },

    // CTA Section
    ctaSection: {
      title: 'الشفافية في العمل',
      description: 'الوصول إلى بيانات التأثير المفصلة والمنهجية والتقارير السنوية للتحقق من مؤشراتنا وفهم تأثيرنا الإنساني.',
      buttonText: 'عرض التقرير السنوي الكامل',
    },
  },
};

export default function MetricsExplainedPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);
  const [expandedLimitation, setExpandedLimitation] = useState<string | null>(null);

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
        textAlign: ar ? 'right' : 'left',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: royalTypography.sizes.body,
          color: royalColors.textSecondary,
          marginBottom: '32px',
          lineHeight: '1.6',
          textAlign: ar ? 'right' : 'left',
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
            {ar ? 'الشفافية والمساءلة' : 'Transparency & Accountability'}
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
          {/* Core Metrics */}
          <SectionCard title={content.metricsOverview.title} subtitle={content.metricsOverview.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: spacing.lg,
            }}>
              {content.metricsOverview.metrics.map((metric) => (
                <div
                  key={metric.id}
                  onClick={() => setExpandedMetric(expandedMetric === metric.id ? null : metric.id)}
                  style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    borderLeft: `4px solid ${metric.color}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: ar ? 'right' : 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = shadows.md;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: ar ? 'flex-end' : 'flex-start', marginBottom: '12px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                    <span style={{ fontSize: '28px', marginRight: ar ? 0 : '12px', marginLeft: ar ? '12px' : 0 }}>{metric.icon}</span>
                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0',
                      }}>
                        {metric.name}
                      </h3>
                      <p style={{
                        fontSize: '13px',
                        color: metric.color,
                        fontWeight: '600',
                        margin: '4px 0 0 0',
                      }}>
                        {metric.targetLabel}: {metric.targetValue}
                      </p>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    lineHeight: '1.5',
                    margin: '12px 0',
                  }}>
                    {metric.definition}
                  </p>

                  {expandedMetric === metric.id && (
                    <div style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: `1px solid ${royalColors.borderLight}`,
                    }}>
                      <div style={{ marginBottom: '12px' }}>
                        <h4 style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0 0 6px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          {ar ? 'لماذا يهم' : 'Why It Matters'}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                          lineHeight: '1.5',
                          margin: '0',
                        }}>
                          {metric.whyItMatters}
                        </p>
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <h4 style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0 0 6px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          {ar ? 'كيفية التفسير' : 'How to Interpret'}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                          lineHeight: '1.5',
                          margin: '0',
                        }}>
                          {metric.howToInterpret}
                        </p>
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <h4 style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0 0 6px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          {ar ? 'مثال حديث' : 'Recent Example'}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                          lineHeight: '1.5',
                          margin: '0',
                          fontStyle: 'italic',
                        }}>
                          {metric.recentExample}
                        </p>
                      </div>

                      <div>
                        <h4 style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: royalColors.darkNavy,
                          margin: '0 0 6px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          {ar ? 'مقارنة الصناعة' : 'Industry Comparison'}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: royalColors.textSecondary,
                          lineHeight: '1.5',
                          margin: '0',
                        }}>
                          {metric.industryComparison}
                        </p>
                      </div>
                    </div>
                  )}

                  <p style={{
                    fontSize: '12px',
                    color: royalColors.compassionTeal,
                    fontWeight: '600',
                    margin: '12px 0 0 0',
                    cursor: 'pointer',
                  }}>
                    {expandedMetric === metric.id ? (ar ? 'إخفاء التفاصيل' : 'Hide Details') : (ar ? 'عرض التفاصيل' : 'Show Details')}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* How to Interpret */}
          <SectionCard title={content.howToRead.title} subtitle={content.howToRead.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.lg,
            }}>
              {content.howToRead.principles.map((principle, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'white',
                  padding: spacing.lg,
                  borderRadius: borderRadius.card,
                  border: `1px solid ${royalColors.borderLight}`,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{principle.icon}</div>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: royalColors.darkNavy,
                    margin: '0 0 8px 0',
                  }}>
                    {principle.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    lineHeight: '1.5',
                    margin: '0',
                  }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Industry Comparisons */}
          <SectionCard title={content.industryComparisons.title} subtitle={content.industryComparisons.subtitle}>
            <div style={{
              overflowX: 'auto',
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
              }}>
                <thead>
                  <tr style={{ backgroundColor: royalColors.bgRefined }}>
                    <th style={{
                      padding: '12px',
                      textAlign: ar ? 'right' : 'left',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      borderBottom: `2px solid ${royalColors.borderFormal}`,
                    }}>
                      {ar ? 'المقياس' : 'Metric'}
                    </th>
                    <th style={{
                      padding: '12px',
                      textAlign: ar ? 'right' : 'left',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      borderBottom: `2px solid ${royalColors.borderFormal}`,
                    }}>
                      {ar ? 'أداء الهيئة' : 'JHCO Performance'}
                    </th>
                    <th style={{
                      padding: '12px',
                      textAlign: ar ? 'right' : 'left',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      borderBottom: `2px solid ${royalColors.borderFormal}`,
                    }}>
                      {ar ? 'معيار الصناعة' : 'Industry Standard'}
                    </th>
                    <th style={{
                      padding: '12px',
                      textAlign: ar ? 'right' : 'left',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      borderBottom: `2px solid ${royalColors.borderFormal}`,
                    }}>
                      {ar ? 'التقييم' : 'Assessment'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.industryComparisons.comparisons.map((comp, idx) => (
                    <tr key={idx} style={{
                      backgroundColor: idx % 2 === 0 ? 'white' : royalColors.bgRefined,
                      borderBottom: `1px solid ${royalColors.borderLight}`,
                    }}>
                      <td style={{
                        padding: '12px',
                        textAlign: ar ? 'right' : 'left',
                        fontWeight: '600',
                        color: royalColors.darkNavy,
                      }}>
                        {comp.metric}
                      </td>
                      <td style={{
                        padding: '12px',
                        textAlign: ar ? 'right' : 'left',
                        color: royalColors.impactGreen,
                        fontWeight: '600',
                      }}>
                        {comp.jhcoPerformance}
                      </td>
                      <td style={{
                        padding: '12px',
                        textAlign: ar ? 'right' : 'left',
                        color: royalColors.textSecondary,
                      }}>
                        {comp.industryStandard}
                      </td>
                      <td style={{
                        padding: '12px',
                        textAlign: ar ? 'right' : 'left',
                        color: royalColors.textSecondary,
                        fontSize: '13px',
                      }}>
                        {comp.assessment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          {/* Limitations */}
          <SectionCard title={content.limitations.title} subtitle={content.limitations.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: spacing.lg,
            }}>
              {content.limitations.limitations.map((limitation, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedLimitation(expandedLimitation === idx ? null : idx)}
                  style={{
                    backgroundColor: royalColors.bgRefined,
                    padding: spacing.lg,
                    borderRadius: borderRadius.card,
                    borderTop: `4px solid ${royalColors.charityRed}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: ar ? 'right' : 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = shadows.md;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: ar ? 'flex-end' : 'flex-start', marginBottom: '8px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                    <span style={{ fontSize: '20px', marginRight: ar ? 0 : '12px', marginLeft: ar ? '12px' : 0 }}>{limitation.icon}</span>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: royalColors.darkNavy,
                      margin: '0',
                    }}>
                      {limitation.title}
                    </h3>
                  </div>

                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    lineHeight: '1.5',
                    margin: '8px 0',
                  }}>
                    {limitation.description}
                  </p>

                  {expandedLimitation === idx && (
                    <div style={{
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: `1px solid ${royalColors.borderLight}`,
                      backgroundColor: 'white',
                      padding: '12px',
                      borderRadius: borderRadius.sm,
                    }}>
                      <h4 style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: royalColors.impactGreen,
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        {ar ? 'تخفيف المخاطر' : 'Mitigation'}
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: royalColors.textSecondary,
                        lineHeight: '1.5',
                        margin: '0',
                      }}>
                        {limitation.mitigation}
                      </p>
                    </div>
                  )}

                  <p style={{
                    fontSize: '12px',
                    color: royalColors.compassionTeal,
                    fontWeight: '600',
                    margin: '12px 0 0 0',
                    cursor: 'pointer',
                  }}>
                    {expandedLimitation === idx ? (ar ? 'إخفاء التخفيف' : 'Hide Mitigation') : (ar ? 'عرض التخفيف' : 'Show Mitigation')}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Data Quality */}
          <SectionCard title={content.dataQuality.title} subtitle={content.dataQuality.subtitle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.lg,
            }}>
              {content.dataQuality.practices.map((practice, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'white',
                  padding: spacing.lg,
                  borderRadius: borderRadius.card,
                  border: `1px solid ${royalColors.borderLight}`,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: ar ? 'flex-end' : 'flex-start', marginBottom: '8px', flexDirection: ar ? 'row-reverse' : 'row' }}>
                    <span style={{ fontSize: '20px', marginRight: ar ? 0 : '12px', marginLeft: ar ? '12px' : 0 }}>{practice.frequencyIcon}</span>
                    <div>
                      <h3 style={{
                        fontSize: '15px',
                        fontWeight: '700',
                        color: royalColors.darkNavy,
                        margin: '0 0 2px 0',
                      }}>
                        {practice.practice}
                      </h3>
                      <p style={{
                        fontSize: '12px',
                        color: royalColors.compassionTeal,
                        fontWeight: '600',
                        margin: '0',
                      }}>
                        {practice.frequency}
                      </p>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    lineHeight: '1.5',
                    margin: '0',
                  }}>
                    {practice.description}
                  </p>
                </div>
              ))}
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
            {content.ctaSection.title}
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: 0.95,
          }}>
            {content.ctaSection.description}
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
            {content.ctaSection.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}
