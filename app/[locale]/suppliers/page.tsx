'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';
import { useState } from 'react';

const pageContent = {
  en: {
    title: 'Supplier Information',
    heroTitle: 'Supplier & Vendor Portal',
    heroSubtitle: 'JHCO maintains rigorous standards for all procurement partnerships. This portal provides essential information for prospective and current suppliers.',

    requirements: {
      title: 'Supplier Requirements',
      subtitle: 'Minimum Standards for Partnership',
      items: [
        {
          title: 'Legal Registration & Compliance',
          description: 'Suppliers must be registered with relevant governmental authorities in their country of operation and maintain current business licenses and permits.',
        },
        {
          title: 'Financial Stability',
          description: 'Evidence of financial stability through audited financial statements for the past 2 years. JHCO evaluates liquidity, solvency, and operational capacity.',
        },
        {
          title: 'Insurance Coverage',
          description: 'Comprehensive commercial insurance, product liability insurance (where applicable), and professional indemnity insurance. Minimum coverage amounts specified during qualification process.',
        },
        {
          title: 'Quality Management System',
          description: 'ISO 9001:2015 certification or equivalent quality management system demonstrating commitment to consistent quality standards.',
        },
        {
          title: 'Health & Safety Compliance',
          description: 'Demonstrated compliance with OSHA, ILO standards, and applicable occupational health and safety regulations in their jurisdiction.',
        },
        {
          title: 'Environmental Standards',
          description: 'Compliance with environmental regulations and commitment to sustainable business practices. Documentation of environmental policies required.',
        },
        {
          title: 'Anti-Corruption & Sanctions Screening',
          description: 'Suppliers must pass comprehensive sanctions and anti-corruption screening including OFAC, EU, UN, and INTERPOL databases.',
        },
        {
          title: 'References & Track Record',
          description: 'Minimum 3 years operational history with verifiable references from previous clients in humanitarian or government sectors.',
        },
      ],
    },

    applicationProcess: {
      title: 'Application Process',
      subtitle: 'Step-by-Step Vendor Registration',
      steps: [
        {
          number: '1',
          title: 'Initial Application',
          description: 'Complete the Vendor Registration Form available on this portal. Provide company registration documents, tax identification, and contact information.',
          timeline: '1-2 business days to submit',
        },
        {
          number: '2',
          title: 'Documentation Review',
          description: 'Our Procurement team reviews all submitted documents for completeness and compliance with minimum standards. You may be requested to provide additional documentation.',
          timeline: '5-7 business days',
        },
        {
          number: '3',
          title: 'Financial Evaluation',
          description: 'Financial documents and bank references are verified. JHCO may request audited financial statements or credit reports.',
          timeline: '5-10 business days',
        },
        {
          number: '4',
          title: 'Due Diligence & Screening',
          description: 'Comprehensive background checks including sanctions screening, corruption databases, and references verification.',
          timeline: '7-14 business days',
        },
        {
          number: '5',
          title: 'On-Site Verification',
          description: 'For suppliers of critical goods or services, JHCO may conduct site visits to verify operations, quality systems, and compliance.',
          timeline: '3-5 business days (if required)',
        },
        {
          number: '6',
          title: 'Approval & Activation',
          description: 'Upon successful completion of all evaluations, suppliers receive formal approval notice and Vendor Code assignment. Activation in procurement system follows.',
          timeline: '2-3 business days',
        },
      ],
      totalTimeline: '21-35 business days from submission to activation',
    },

    codeOfConduct: {
      title: 'Vendor Code of Conduct',
      subtitle: 'Mandatory Standards for All Suppliers',
      principles: [
        {
          title: 'Ethical Business Practices',
          description: 'All suppliers must operate with integrity and transparency. Fraud, misrepresentation, or unethical conduct will result in immediate termination and legal action.',
        },
        {
          title: 'Anti-Corruption & Bribery',
          description: 'Zero tolerance for bribery, kickbacks, or corruption. Suppliers must comply with UNCAC, UK Bribery Act, US FCPA, and all applicable anti-corruption legislation.',
        },
        {
          title: 'Labor & Human Rights',
          description: 'Compliance with ILO conventions including prohibition of child labor, forced labor, and discrimination. Fair wages meeting local minimum standards plus cost of living.',
        },
        {
          title: 'Environmental Responsibility',
          description: 'Adherence to environmental laws and regulations. Commitment to reducing carbon footprint and implementing sustainable practices.',
        },
        {
          title: 'Data Protection & Privacy',
          description: 'All suppliers handling JHCO or beneficiary data must comply with GDPR, local data protection laws, and JHCO data protection policies.',
        },
        {
          title: 'Health & Safety',
          description: 'Maintenance of safe working conditions for all employees and contractors. Regular safety audits and incident reporting required.',
        },
        {
          title: 'Subcontractor Management',
          description: 'Suppliers are responsible for ensuring all subcontractors and lower-tier vendors comply with this Code of Conduct.',
        },
        {
          title: 'Conflict of Interest',
          description: 'Suppliers must disclose any potential conflicts of interest and relationships with JHCO staff or board members.',
        },
        {
          title: 'Sanctions Compliance',
          description: 'No business dealings with sanctioned entities, nations, or individuals. Suppliers must certify ongoing compliance.',
        },
        {
          title: 'Audit & Inspection Rights',
          description: 'Suppliers grant JHCO the right to conduct audits, inspections, and investigations of operations, records, and compliance.',
        },
      ],
      certification: 'All suppliers must formally certify adherence to this Code as a condition of partnership.',
    },

    paymentTerms: {
      title: 'Payment Terms & Conditions',
      subtitle: 'Standard Procurement Payment Policy',
      terms: [
        {
          title: 'Payment Basis',
          description: 'Payments are made upon receipt of properly documented invoices matching approved purchase orders and delivery documentation.',
        },
        {
          title: 'Standard Terms',
          description: 'Standard payment terms are Net 30 (payment within 30 calendar days of invoice receipt). Early payment discounts not offered.',
        },
        {
          title: 'Invoice Requirements',
          description: 'Invoices must include: Purchase Order number, detailed item description, unit price, quantity, total amount, tax information, and payment instructions.',
        },
        {
          title: 'Currency & Exchange',
          description: 'Invoicing in JOD (Jordanian Dinar) preferred. Foreign currency invoices subject to bank exchange rates at time of payment.',
        },
        {
          title: 'Delivery & Acceptance',
          description: 'Payment is contingent on receipt of goods/services in accordance with purchase order specifications and acceptance inspection.',
        },
        {
          title: 'Dispute Resolution',
          description: 'Payment disputes must be raised within 15 calendar days of invoice date. JHCO Procurement will investigate and communicate resolution within 10 business days.',
        },
        {
          title: 'Late Payment',
          description: 'JHCO endeavors to pay invoices within agreed terms. Interest on late payments calculated at 0.5% per month (6% annually) per applicable law.',
        },
        {
          title: 'Tax Compliance',
          description: 'Suppliers are responsible for all tax obligations. JHCO requires valid tax identification numbers and compliance with income tax regulations.',
        },
        {
          title: 'Bank Transfer',
          description: 'All payments processed via bank transfer to supplier-designated account. SWIFT details and local bank routing information required for account verification.',
        },
      ],
    },

    compliance: {
      title: 'Compliance Documentation',
      subtitle: 'Required Documentation for Qualification',
      categories: [
        {
          category: 'Legal & Registration',
          documents: [
            'Certificate of Business Registration',
            'Articles of Association/Incorporation',
            'Tax Identification Number and Proof of Registration',
            'Business License and Permits',
            'Ownership Structure Declaration',
            'Certificate of Good Standing (if required)',
          ],
        },
        {
          category: 'Financial',
          documents: [
            'Audited Financial Statements (2 years)',
            'Bank Reference Letters',
            'Credit Report or D&B Rating',
            'Proof of Insurance Coverage',
            'Financial Projection (for new suppliers)',
          ],
        },
        {
          category: 'Compliance & Standards',
          documents: [
            'ISO 9001:2015 Certification or QMS Documentation',
            'ISO 14001 or Environmental Policy (as applicable)',
            'OSHA/Occupational Health & Safety Documentation',
            'Export/Import Licenses (if applicable)',
            'Product Certifications (CE, FDA, etc. as applicable)',
          ],
        },
        {
          category: 'Legal Certifications',
          documents: [
            'Signed Code of Conduct Certification',
            'Anti-Corruption & Sanctions Certification',
            'Data Protection & Privacy Compliance Certification',
            'Labor & Human Rights Compliance Certification',
            'Conflict of Interest Declaration',
          ],
        },
        {
          category: 'Operational',
          documents: [
            'Supplier Profile Form (JHCO Template)',
            'Company Organizational Chart',
            'Quality Control Procedures Documentation',
            'Emergency Response & Business Continuity Plan',
            'Subcontractor List and Compliance Documentation',
          ],
        },
      ],
    },

    procurement: {
      title: 'Contact Procurement Team',
      subtitle: 'Direct Access to Our Procurement Department',
      contactInfo: [
        {
          department: 'Vendor Registration & Qualification',
          email: 'suppliers@jhco.org',
          phone: '+962 6 5691 400',
          availability: 'Saturday - Thursday, 08:00 - 16:00 EET',
          responsetime: 'Response within 24-48 business hours',
        },
        {
          department: 'Purchase Orders & Invoicing',
          email: 'procurement@jhco.org',
          phone: '+962 6 5691 450',
          availability: 'Saturday - Thursday, 08:00 - 16:00 EET',
          responsetime: 'Response within 24 business hours',
        },
        {
          department: 'Vendor Performance & Compliance',
          email: 'vendor-compliance@jhco.org',
          phone: '+962 6 5691 425',
          availability: 'Saturday - Thursday, 09:00 - 17:00 EET',
          responsetime: 'Response within 48 business hours',
        },
        {
          department: 'Headquarters Address',
          location: 'JHCO Procurement Department, Amman, Jordan',
          address: 'Al-Zahra Street, Jabal Amman',
          postcode: '11184',
          country: 'Jordan',
        },
      ],
    },

    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Supplier Portal FAQ',
      questions: [
        {
          question: 'How long does the vendor qualification process take?',
          answer: 'The complete qualification process typically requires 21-35 business days from submission to activation, depending on document completeness and complexity of verification required. Suppliers can track their application status via our online portal.',
        },
        {
          question: 'What is the minimum financial turnover required for supplier qualification?',
          answer: 'JHCO does not have a minimum turnover requirement. However, financial stability is assessed through audited financial statements. New businesses may qualify with strong financial projections and personal guarantees.',
        },
        {
          question: 'Are small and medium enterprises (SMEs) welcome to apply?',
          answer: 'Yes, JHCO actively encourages applications from SMEs and local suppliers, particularly in operational countries. Equal evaluation criteria are applied regardless of company size, with consideration for developmental stage.',
        },
        {
          question: 'What happens if documentation is incomplete?',
          answer: 'Suppliers receive detailed notification of missing documents with specific guidance on requirements. A 10-business-day period is provided to submit additional documentation without restarting the application process.',
        },
        {
          question: 'Is there a cost associated with vendor registration?',
          answer: 'No, vendor registration and qualification are free of charge. JHCO does not require application fees, registration fees, or any charges for the qualification process.',
        },
        {
          question: 'How often must vendors renew their qualification?',
          answer: 'Supplier qualifications are reviewed annually. Qualified suppliers must submit updated financial statements and compliance certifications each year to maintain active status.',
        },
        {
          question: 'Can suppliers appeal a rejection decision?',
          answer: 'Yes, suppliers may formally appeal a rejection within 15 calendar days. Appeals are reviewed by JHCO Procurement leadership. Grounds for appeal include new documentation, procedural concerns, or material changes in circumstances.',
        },
        {
          question: 'What is the procedure for reporting non-compliance?',
          answer: 'JHCO takes compliance seriously. Report concerns via: (1) Direct contact with Vendor Compliance team, (2) Anonymous reporting line: compliance-hotline@jhco.org, (3) Online confidential form on supplier portal.',
        },
        {
          question: 'Are there specific products or services JHCO procures?',
          answer: 'JHCO procures goods and services across multiple categories including medical supplies, food and nutrition, water and sanitation, construction materials, vehicles, and professional services. Supplier profiles should clearly indicate categories.',
        },
        {
          question: 'How are purchase orders issued and tracked?',
          answer: 'Purchase orders are issued through our online procurement portal accessible to qualified suppliers. Real-time tracking of PO status, delivery schedules, and invoicing is available. EDI integration available for high-volume suppliers.',
        },
      ],
    },
  },

  ar: {
    title: 'معلومات الموردين',
    heroTitle: 'بوابة الموردين والمندوبين',
    heroSubtitle: 'تحافظ الهيئة على معايير صارمة لجميع شراكاتها الشرائية. توفر هذه البوابة المعلومات الأساسية للموردين المحتملين والحاليين.',

    requirements: {
      title: 'متطلبات الموردين',
      subtitle: 'الحد الأدنى من المعايير للشراكة',
      items: [
        {
          title: 'التسجيل القانوني والامتثال',
          description: 'يجب أن يكون الموردون مسجلين لدى السلطات الحكومية ذات الصلة في بلد عملهم والاحتفاظ برخص وتصاريح تجارية حالية.',
        },
        {
          title: 'الاستقرار المالي',
          description: 'إثبات الاستقرار المالي من خلال البيانات المالية المدققة لآخر سنتين. تقيم الهيئة السيولة والملاءة والقدرة التشغيلية.',
        },
        {
          title: 'تغطية التأمين',
          description: 'تأمين تجاري شامل وتأمين مسؤولية المنتج (حيث ينطبق) وتأمين المسؤولية المهنية. يتم تحديد حد الحد الأدنى للتغطية أثناء عملية التأهيل.',
        },
        {
          title: 'نظام إدارة الجودة',
          description: 'شهادة ISO 9001:2015 أو نظام إدارة جودة معادل يثبت الالتزام بمعايير الجودة المتسقة.',
        },
        {
          title: 'الامتثال الصحي والسلامة',
          description: 'الامتثال الموثق لمعايير OSHA و ILO واللوائح الصحية والسلامة المهنية المعمول بها في اختصاصهم.',
        },
        {
          title: 'المعايير البيئية',
          description: 'الامتثال للوائح البيئية والالتزام بممارسات العمل المستدامة. يلزم توثيق السياسات البيئية.',
        },
        {
          title: 'فحص مكافحة الفساد والعقوبات',
          description: 'يجب أن يجتاز الموردون فحص شامل للعقوبات ومكافحة الفساد بما في ذلك قواعد بيانات OFAC والاتحاد الأوروبي والأمم المتحدة والإنتربول.',
        },
        {
          title: 'المراجع والسجل الحافل',
          description: 'الحد الأدنى من 3 سنوات من السجل التشغيلي مع مراجع قابلة للتحقق من العملاء السابقين في القطاع الإنساني أو الحكومي.',
        },
      ],
    },

    applicationProcess: {
      title: 'عملية التقديم',
      subtitle: 'تسجيل المندوب خطوة بخطوة',
      steps: [
        {
          number: '1',
          title: 'الطلب الأولي',
          description: 'قم بملء نموذج تسجيل المندوب المتوفر على هذه البوابة. قدم وثائق التسجيل التجاري ورقم التعريف الضريبي ومعلومات الاتصال.',
          timeline: '1-2 يوم عمل للتقديم',
        },
        {
          number: '2',
          title: 'مراجعة الوثائق',
          description: 'يقوم فريق الشراء بمراجعة جميع الوثائق المقدمة للتأكد من اكتمالها والامتثال للحد الأدنى من المعايير. قد يطلب منك تقديم وثائق إضافية.',
          timeline: '5-7 أيام عمل',
        },
        {
          number: '3',
          title: 'التقييم المالي',
          description: 'يتم التحقق من الوثائق المالية ومراجع البنوك. قد تطلب الهيئة البيانات المالية المدققة أو تقارير ائتمانية.',
          timeline: '5-10 أيام عمل',
        },
        {
          number: '4',
          title: 'العناية الواجبة والفحص',
          description: 'فحص شامل للخلفية بما في ذلك فحص العقوبات والفحص في قواعد بيانات الفساد والتحقق من المراجع.',
          timeline: '7-14 يوم عمل',
        },
        {
          number: '5',
          title: 'التحقق الميداني',
          description: 'بالنسبة للموردين المتعاملين في السلع أو الخدمات الحرجة، قد تجري الهيئة زيارات موقع للتحقق من العمليات وأنظمة الجودة والامتثال.',
          timeline: '3-5 أيام عمل (إذا لزم الأمر)',
        },
        {
          number: '6',
          title: 'الموافقة والتفعيل',
          description: 'بعد الانتهاء الناجح من جميع التقييمات، يتلقى الموردون إشعار الموافقة الرسمي وتعيين رمز المندوب. يتبع التفعيل في نظام الشراء.',
          timeline: '2-3 أيام عمل',
        },
      ],
      totalTimeline: '21-35 يوم عمل من التقديم إلى التفعيل',
    },

    codeOfConduct: {
      title: 'مدونة سلوك المندوب',
      subtitle: 'معايير إلزامية لجميع الموردين',
      principles: [
        {
          title: 'الممارسات التجارية الأخلاقية',
          description: 'يجب أن يعمل جميع الموردين بنزاهة وشفافية. سيؤدي الاحتيال أو التمثيل الخاطئ أو السلوك غير الأخلاقي إلى الإنهاء الفوري واتخاذ إجراء قانوني.',
        },
        {
          title: 'مكافحة الفساد والرشوة',
          description: 'عدم التسامح مطلقا مع الرشوة والعمولات الإضافية أو الفساد. يجب أن يمتثل الموردون لـ UNCAC وقانون الرشوة البريطاني وقانون FCPA الأمريكي وجميع القوانين المعمول بها لمكافحة الفساد.',
        },
        {
          title: 'العمل والحقوق الإنسانية',
          description: 'الامتثال لاتفاقيات منظمة العمل الدولية بما في ذلك حظر عمل الأطفال والعمل القسري والتمييز. الأجور العادلة التي تلبي الحد الأدنى المحلي بالإضافة إلى تكلفة المعيشة.',
        },
        {
          title: 'المسؤولية البيئية',
          description: 'الالتزام بقوانين ولوائح البيئة. الالتزام بتقليل البصمة الكربونية وتنفيذ الممارسات المستدامة.',
        },
        {
          title: 'حماية البيانات والخصوصية',
          description: 'يجب أن يمتثل جميع الموردين الذين يتعاملون مع بيانات الهيئة أو المستفيدين لنظام GDPR والقوانين المحلية لحماية البيانات وسياسات حماية البيانات لدى الهيئة.',
        },
        {
          title: 'الصحة والسلامة',
          description: 'الحفاظ على ظروف عمل آمنة لجميع الموظفين والمقاولين. مطلوب إجراء عمليات تدقيق سلامة منتظمة والإبلاغ عن الحوادث.',
        },
        {
          title: 'إدارة المقاول من الباطن',
          description: 'يتحمل الموردون مسؤولية ضمان امتثال جميع المقاولين من الباطن والموردين من المستوى الأدنى لمدونة السلوك هذه.',
        },
        {
          title: 'تضارب المصالح',
          description: 'يجب على الموردين الكشف عن أي تضارب محتمل في المصالح والعلاقات مع موظفي الهيئة أو أعضاء مجلس الإدارة.',
        },
        {
          title: 'امتثال العقوبات',
          description: 'لا توجد معاملات تجارية مع الجهات المعاقبة أو الدول أو الأفراد. يجب أن يشهد الموردون بالامتثال المستمر.',
        },
        {
          title: 'حقوق التدقيق والفحص',
          description: 'يمنح الموردون الهيئة الحق في إجراء عمليات تدقيق وفحوصات والتحقيقات في العمليات والسجلات والامتثال.',
        },
      ],
      certification: 'يجب على جميع الموردين التصديق رسميا على الالتزام بمدونة السلوك هذه كشرط للشراكة.',
    },

    paymentTerms: {
      title: 'شروط وأحكام الدفع',
      subtitle: 'سياسة الدفع الموحدة للشراء',
      terms: [
        {
          title: 'أساس الدفع',
          description: 'يتم الدفع بناء على استقبال الفواتير المموثقة بشكل صحيح المطابقة لأوامر الشراء المعتمدة ووثائق التسليم.',
        },
        {
          title: 'الشروط الموحدة',
          description: 'الشروط الموحدة هي Net 30 (الدفع في غضون 30 يوم تقويمي من استقبال الفاتورة). لا يتم تقديم خصومات الدفع المبكر.',
        },
        {
          title: 'متطلبات الفاتورة',
          description: 'يجب أن تتضمن الفواتير: رقم أمر الشراء والوصف التفصيلي للمقالة والسعر الوحدوي والكمية والمبلغ الإجمالي ومعلومات الضريبة وتعليمات الدفع.',
        },
        {
          title: 'العملة والصرف',
          description: 'يفضل الفواتير بالدينار الأردني (JOD). الفواتير بالعملات الأجنبية تخضع لأسعار صرف البنك في وقت الدفع.',
        },
        {
          title: 'التسليم والقبول',
          description: 'الدفع مشروط بالحصول على السلع / الخدمات وفقا لمواصفات أمر الشراء وفحص القبول.',
        },
        {
          title: 'حل النزاعات',
          description: 'يجب رفع نزاعات الدفع في غضون 15 يوم تقويمي من تاريخ الفاتورة. ستحقق فريق الشراء وتتواصل مع الحل في غضون 10 أيام عمل.',
        },
        {
          title: 'الدفع المتأخر',
          description: 'تسعى الهيئة إلى دفع الفواتير حسب الشروط المتفق عليها. الفائدة على الدفعات المتأخرة محسوبة بـ 0.5٪ شهريا (6٪ سنويا) وفقا للقانون المعمول به.',
        },
        {
          title: 'الامتثال الضريبي',
          description: 'يتحمل الموردون مسؤولية جميع الالتزامات الضريبية. تطلب الهيئة أرقام التعريف الضريبي الصحيحة والامتثال لأنظمة ضريبة الدخل.',
        },
        {
          title: 'تحويل البنك',
          description: 'يتم معالجة جميع الدفعات عن طريق تحويل بنكي إلى الحساب المحدد من المندوب. تفاصيل SWIFT ومعلومات توجيه البنك المحلي مطلوبة للتحقق من الحساب.',
        },
      ],
    },

    compliance: {
      title: 'وثائق الامتثال',
      subtitle: 'الوثائق المطلوبة للتأهيل',
      categories: [
        {
          category: 'القانونية والتسجيل',
          documents: [
            'شهادة تسجيل النشاط التجاري',
            'النظام الأساسي / وثائق التأسيس',
            'رقم التعريف الضريبي وإثبات التسجيل',
            'رخصة ممارسة النشاط وتصاريح',
            'إعلان هيكل الملكية',
            'شهادة السمعة الحسنة (إن لزمت)',
          ],
        },
        {
          category: 'المالية',
          documents: [
            'البيانات المالية المدققة (سنتان)',
            'رسائل المرجع البنكي',
            'تقرير الائتمان أو تصنيف D&B',
            'إثبات تغطية التأمين',
            'الإسقاط المالي (للموردين الجدد)',
          ],
        },
        {
          category: 'الامتثال والمعايير',
          documents: [
            'شهادة ISO 9001:2015 أو وثائق نظام إدارة الجودة',
            'شهادة ISO 14001 أو السياسة البيئية (حسب الحالة)',
            'وثائق OSHA / الصحة والسلامة المهنية',
            'رخص الاستيراد / التصدير (حسب الحالة)',
            'شهادات المنتج (CE و FDA وما إلى ذلك حسب الحالة)',
          ],
        },
        {
          category: 'الشهادات القانونية',
          documents: [
            'شهادة مدونة السلوك الموقعة',
            'شهادة مكافحة الفساد والعقوبات',
            'شهادة امتثال حماية البيانات والخصوصية',
            'شهادة امتثال العمل والحقوق الإنسانية',
            'إعلان تضارب المصالح',
          ],
        },
        {
          category: 'التشغيلية',
          documents: [
            'نموذج ملف المندوب (نموذج الهيئة)',
            'الهيكل التنظيمي للشركة',
            'وثائق إجراءات مراقبة الجودة',
            'خطة الاستجابة للطوارئ والاستمرارية التشغيلية',
            'قائمة المقاول من الباطن ووثائق الامتثال',
          ],
        },
      ],
    },

    procurement: {
      title: 'اتصل بفريق الشراء',
      subtitle: 'الوصول المباشر إلى قسم الشراء لدينا',
      contactInfo: [
        {
          department: 'تسجيل والتأهيل المندوب',
          email: 'suppliers@jhco.org',
          phone: '+962 6 5691 400',
          availability: 'السبت - الخميس، 08:00 - 16:00 بتوقيت شرق أوروبا',
          responsetime: 'الرد في غضون 24-48 ساعة عمل',
        },
        {
          department: 'أوامر الشراء والفواتير',
          email: 'procurement@jhco.org',
          phone: '+962 6 5691 450',
          availability: 'السبت - الخميس، 08:00 - 16:00 بتوقيت شرق أوروبا',
          responsetime: 'الرد في غضون 24 ساعة عمل',
        },
        {
          department: 'الأداء والامتثال',
          email: 'vendor-compliance@jhco.org',
          phone: '+962 6 5691 425',
          availability: 'السبت - الخميس، 09:00 - 17:00 بتوقيت شرق أوروبا',
          responsetime: 'الرد في غضون 48 ساعة عمل',
        },
        {
          department: 'عنوان المقر الرئيسي',
          location: 'قسم الشراء في الهيئة، عمّان، الأردن',
          address: 'شارع الزهراء، جبل عمّان',
          postcode: '11184',
          country: 'الأردن',
        },
      ],
    },

    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'أسئلة وأجوبة بوابة الموردين',
      questions: [
        {
          question: 'كم من الوقت تستغرق عملية تأهيل المندوب؟',
          answer: 'تستغرق عملية التأهيل الكاملة عادة 21-35 يوم عمل من التقديم إلى التفعيل، اعتمادا على اكتمال الوثائق وتعقيد التحقق المطلوب. يمكن للموردين تتبع حالة طلبهم عبر بوابتنا الإلكترونية.',
        },
        {
          question: 'ما هو الحد الأدنى لدوران الأعمال المالية المطلوب لتأهيل الموردين؟',
          answer: 'لا تضع الهيئة حد أدنى لدوران الأعمال. ومع ذلك، يتم تقييم الاستقرار المالي من خلال البيانات المالية المدققة. قد تتأهل الشركات الناشئة مع توقعات مالية قوية وضمانات شخصية.',
        },
        {
          question: 'هل تحتفل بطلبات المشاريع الصغيرة والمتوسطة؟',
          answer: 'نعم، تشجع الهيئة بنشاط طلبات المشاريع الصغيرة والمتوسطة والموردين المحليين، خاصة في الدول التشغيلية. يتم تطبيق معايير التقييم المتساوية بغض النظر عن حجم الشركة، مع مراعاة مرحلة التطور.',
        },
        {
          question: 'ماذا يحدث إذا كانت الوثائق غير مكتملة؟',
          answer: 'يتلقى الموردون إشعار مفصل للوثائق المفقودة مع إرشادات محددة حول المتطلبات. يتم توفير فترة 10 أيام عمل لتقديم وثائق إضافية دون إعادة تشغيل عملية الطلب.',
        },
        {
          question: 'هل هناك رسوم مرتبطة بتسجيل الموردين؟',
          answer: 'لا، التسجيل والتأهيل المندوب مجاني. لا تطلب الهيئة رسوم الطلب أو رسوم التسجيل أو أي رسوم للعملية المؤهلين.',
        },
        {
          question: 'كم مرة يجب أن يجدد الموردون تأهيلهم؟',
          answer: 'يتم مراجعة مؤهلات المندوب سنويا. يجب على الموردين المؤهلين تقديم البيانات المالية المحدثة وشهادات الامتثال كل سنة للحفاظ على الحالة النشطة.',
        },
        {
          question: 'هل يمكن للموردين الاستئناف عن قرار الرفض؟',
          answer: 'نعم، يمكن للموردين استئناف الرفض رسميا في غضون 15 يوم تقويمي. تتم مراجعة الاستئنافات من قبل قيادة فريق الشراء. تشمل أسباب الاستئناف وثائق جديدة أو مخاوف إجرائية أو تغييرات جوهرية في الظروف.',
        },
        {
          question: 'ما هو الإجراء لإبلاغ عدم الامتثال؟',
          answer: 'تأخذ الهيئة الامتثال بجدية. الإبلاغ عن المخاوف عبر: (1) الاتصال المباشر بفريق الامتثال المندوب، (2) خط الإبلاغ المجهول: compliance-hotline@jhco.org، (3) نموذج سري على الإنترنت على بوابة المندوب.',
        },
        {
          question: 'هل هناك منتجات أو خدمات محددة تقوم الهيئة بشرائها؟',
          answer: 'تقوم الهيئة بشراء السلع والخدمات عبر فئات متعددة بما في ذلك الإمدادات الطبية والغذاء والتغذية والمياه والصرف الصحي ومواد البناء والمركبات والخدمات المهنية. يجب أن توضح ملفات المندوب الفئات بوضوح.',
        },
        {
          question: 'كيف يتم إصدار وتتبع أوامر الشراء؟',
          answer: 'يتم إصدار أوامر الشراء من خلال بوابة الشراء الإلكترونية الخاصة بنا والمتاحة للموردين المؤهلين. يتوفر التتبع الفوري لحالة PO وجداول التسليم والفواتير. تكامل EDI متاح للموردين ذوي الحجم الكبير.',
        },
      ],
    },
  },
};

export default function SuppliersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div style={{ direction: ar ? 'rtl' : 'ltr', minHeight: '100vh', backgroundColor: royalColors.bgLight }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.darkNavy})`,
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
            {ar ? 'شراكات الموردين' : 'Supplier Partnerships'}
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

      {/* Supplier Requirements */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.requirements.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.requirements.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.requirements.items.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                boxShadow: '0 4px 12px rgba(10,20,40,0.1)',
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.richCream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.applicationProcess.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.applicationProcess.subtitle}
            </p>
          </div>

          <div style={{
            position: 'relative',
            paddingLeft: ar ? 0 : '60px',
            paddingRight: ar ? '60px' : 0,
          }}>
            {content.applicationProcess.steps.map((step, idx) => (
              <div key={idx} style={{
                marginBottom: idx !== content.applicationProcess.steps.length - 1 ? '48px' : 0,
                display: 'flex',
                flexDirection: ar ? 'row-reverse' : 'row',
                gap: '32px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  minWidth: '120px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: royalColors.hashemiteGold,
                    color: royalColors.darkNavy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: ar ? 'auto 0 auto auto' : 'auto auto auto 0',
                  }}>
                    {step.number}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    marginBottom: '8px',
                    marginTop: 0,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    marginBottom: '12px',
                  }}>
                    {step.description}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: royalColors.textSecondary,
                    fontStyle: 'italic',
                    margin: 0,
                  }}>
                    ⏱️ {step.timeline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: royalColors.bgLight,
            border: `2px solid ${royalColors.hashemiteGold}`,
            padding: '24px',
            borderRadius: '8px',
            marginTop: '48px',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              margin: 0,
            }}>
              {ar ? 'إجمالي الوقت المتوقع: ' : 'Total Expected Timeline: '}<span style={{ color: royalColors.hashemiteGold }}>
                {content.applicationProcess.totalTimeline}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.codeOfConduct.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              marginBottom: '24px',
            }}>
              {content.codeOfConduct.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}>
            {content.codeOfConduct.principles.map((principle, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '28px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {principle.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textOfficial,
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: royalColors.richCream,
            border: `2px solid ${royalColors.darkNavy}`,
            padding: '32px',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              margin: 0,
            }}>
              {content.codeOfConduct.certification}
            </p>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.richCream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.paymentTerms.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.paymentTerms.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {content.paymentTerms.terms.map((term, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '28px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                display: 'flex',
                flexDirection: ar ? 'row-reverse' : 'row',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  minWidth: '40px',
                  backgroundColor: royalColors.hashemiteGold,
                  color: royalColors.darkNavy,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}>
                  ✓
                </div>
                <div style={{ flex: 1, textAlign: ar ? 'right' : 'left' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    marginBottom: '8px',
                    marginTop: 0,
                  }}>
                    {term.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {term.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Documentation */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.compliance.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.compliance.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {content.compliance.categories.map((cat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '28px',
                borderRadius: '8px',
                border: `2px solid ${royalColors.hashemiteGold}`,
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '20px',
                  marginTop: 0,
                  textAlign: ar ? 'right' : 'left',
                }}>
                  {cat.category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {cat.documents.map((doc, docIdx) => (
                    <li key={docIdx} style={{
                      fontSize: '14px',
                      color: royalColors.textOfficial,
                      paddingBottom: '12px',
                      borderBottom: docIdx !== cat.documents.length - 1 ? `1px solid ${royalColors.borderFormal}` : 'none',
                      textAlign: ar ? 'right' : 'left',
                      paddingRight: ar ? 0 : '20px',
                      paddingLeft: ar ? '20px' : 0,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: ar ? 'row-reverse' : 'row',
                      gap: '12px',
                    }}>
                      <span style={{
                        color: royalColors.hashemiteGold,
                        fontWeight: 'bold',
                        fontSize: '16px',
                      }}>
                        •
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Procurement */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.richCream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.procurement.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.procurement.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {content.procurement.contactInfo.map((contact, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderFormal}`,
                textAlign: ar ? 'right' : 'left',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: royalTypography.serif,
                  color: royalColors.darkNavy,
                  marginBottom: '16px',
                  marginTop: 0,
                }}>
                  {contact.department}
                </h3>
                {contact.email && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    marginBottom: '8px',
                    margin: 0,
                  }}>
                    <strong>{ar ? 'البريد الإلكتروني: ' : 'Email: '}</strong>
                    <a href={`mailto:${contact.email}`} style={{
                      color: royalColors.darkNavy,
                      textDecoration: 'none',
                    }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.phone && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    marginBottom: '8px',
                    margin: 0,
                  }}>
                    <strong>{ar ? 'الهاتف: ' : 'Phone: '}</strong>
                    <a href={`tel:${contact.phone}`} style={{
                      color: royalColors.darkNavy,
                      textDecoration: 'none',
                    }}>
                      {contact.phone}
                    </a>
                  </p>
                )}
                {contact.availability && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    marginBottom: '8px',
                    margin: 0,
                  }}>
                    <strong>{ar ? 'ساعات العمل: ' : 'Availability: '}</strong>
                    {contact.availability}
                  </p>
                )}
                {contact.responsetime && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textSecondary,
                    fontStyle: 'italic',
                    margin: 0,
                  }}>
                    {contact.responsetime}
                  </p>
                )}
                {contact.location && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    marginBottom: '8px',
                    margin: 0,
                  }}>
                    <strong>{ar ? 'الموقع: ' : 'Location: '}</strong>
                    {contact.location}
                  </p>
                )}
                {contact.address && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    marginBottom: '4px',
                    margin: 0,
                  }}>
                    {contact.address}
                  </p>
                )}
                {contact.postcode && (
                  <p style={{
                    fontSize: '14px',
                    color: royalColors.textOfficial,
                    margin: 0,
                  }}>
                    {contact.postcode}, {contact.country}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              color: royalColors.darkNavy,
              marginBottom: '16px',
            }}>
              {content.faq.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
            }}>
              {content.faq.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            {content.faq.questions.map((faq, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                border: `1px solid ${royalColors.borderFormal}`,
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px 32px',
                    backgroundColor: expandedFaq === idx ? royalColors.richCream : 'white',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: ar ? 'right' : 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: ar ? 'row-reverse' : 'row',
                    gap: '16px',
                    transition: 'background-color 200ms ease',
                  }}
                >
                  <h3 style={{
                    fontSize: '16px',
                    fontFamily: royalTypography.serif,
                    color: royalColors.darkNavy,
                    margin: 0,
                    flex: 1,
                    textAlign: ar ? 'right' : 'left',
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    color: royalColors.hashemiteGold,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {expandedFaq === idx && (
                  <div style={{
                    padding: '0 32px 24px 32px',
                    backgroundColor: royalColors.richCream,
                    borderTop: `1px solid ${royalColors.borderFormal}`,
                  }}>
                    <p style={{
                      fontSize: '15px',
                      color: royalColors.textOfficial,
                      lineHeight: '1.6',
                      margin: 0,
                      textAlign: ar ? 'right' : 'left',
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, ${royalColors.darkNavy}, ${royalColors.darkNavy})`,
        padding: '64px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontFamily: royalTypography.serif,
            marginBottom: '24px',
            marginTop: 0,
          }}>
            {ar ? 'هل أنت مستعد للشراكة معنا؟' : 'Ready to Partner With Us?'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            {ar ? 'ابدأ عملية التقديم اليوم وانضم إلى شبكتنا المتنامية من الموردين الموثوقين.' : 'Start the application process today and join our growing network of trusted suppliers.'}
          </p>
          <a href={ar ? '/ar/contact' : '/en/contact'} style={{
            display: 'inline-block',
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            padding: '16px 48px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            letterSpacing: '0.5px',
            transition: 'all 200ms ease',
            textTransform: 'uppercase',
          }}>
            {ar ? 'تقديم طلب' : 'Submit Application'}
          </a>
        </div>
      </section>
    </div>
  );
}
