'use client';
import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Complaints & Feedback Portal',
    heroTitle: 'Complaints & Feedback Portal',
    heroSubtitle: 'JHCO is committed to maintaining the highest standards of governance and accountability. We welcome your feedback and complaints.',

    formSection: {
      title: 'Submit Your Complaint or Feedback',
      subtitle: 'Your voice matters. Share your concerns with us safely and confidentially.',
      form: {
        name: 'Your Name (Optional)',
        nameHelp: 'Leave blank to submit anonymously',
        email: 'Your Email Address (Optional)',
        emailHelp: 'Provide if you\'d like a response to your complaint',
        phone: 'Phone Number (Optional)',
        category: 'Category',
        selectCategory: 'Select a category',
        categories: [
          'Financial Misconduct',
          'Staff Conduct',
          'Program Quality',
          'Safety & Protection',
          'Discrimination or Harassment',
          'Breach of Confidentiality',
          'Fraud or Corruption',
          'Other',
        ],
        description: 'Details of Your Complaint',
        descriptionPlaceholder: 'Please provide as much detail as possible about your complaint. Include dates, names, and specific incidents if applicable.',
        severity: 'Severity Level',
        selectSeverity: 'Select severity level',
        severities: ['Low', 'Medium', 'High', 'Critical'],
        preferredContact: 'Preferred Response Method',
        contactMethods: ['Email', 'Phone', 'Mail', 'No Response Needed'],
        attachments: 'Attachments (Optional)',
        attachmentsHelp: 'Upload supporting documents if available',
        consent: 'I consent to the privacy and confidentiality terms of this portal',
        submit: 'Submit Complaint',
        submitting: 'Submitting...',
        success: 'Thank you for your submission. Your complaint has been received and will be reviewed shortly.',
        error: 'There was an error submitting your complaint. Please try again.',
      },
    },

    alternativeChannels: {
      title: 'Alternative Reporting Channels',
      subtitle: 'If you prefer not to use this online form, you can report your complaint through any of the following channels:',
      channels: [
        {
          icon: '📧',
          title: 'Email',
          details: 'complaints@jhco.org',
          description: 'Send your complaint directly to our dedicated complaints inbox',
        },
        {
          icon: '📞',
          title: 'Phone',
          details: '+962-6-5520-000',
          description: 'Call our complaints line during business hours (9 AM - 5 PM AST)',
        },
        {
          icon: '✉️',
          title: 'Mail',
          details: 'JHCO Governance Board\nP.O. Box 926625\nAmman 11190, Jordan',
          description: 'Send your written complaint by postal mail',
        },
        {
          icon: '🤝',
          title: 'In Person',
          details: 'JHCO Main Office',
          description: 'Visit our main office to file a complaint in person. Speak with any staff member at reception.',
        },
      ],
    },

    handlingProcess: {
      title: 'Complaint Handling Process',
      subtitle: 'We follow a transparent, systematic approach to address all complaints fairly and thoroughly.',
      timeline: [
        {
          day: 'Day 1-2',
          step: 'Receipt & Acknowledgment',
          description: 'Your complaint is logged and you receive an acknowledgment (if contact information provided). We conduct an initial assessment of the complaint.',
        },
        {
          day: 'Day 3-5',
          step: 'Preliminary Investigation',
          description: 'Our Governance Board begins a preliminary investigation to determine jurisdiction and seriousness of the complaint.',
        },
        {
          day: 'Day 6-30',
          step: 'Full Investigation',
          description: 'A thorough investigation is conducted, including interviews with relevant parties and document review. Confidentiality is maintained.',
        },
        {
          day: 'Day 31-45',
          step: 'Findings Report',
          description: 'The investigation team prepares a detailed report with findings and recommended actions.',
        },
        {
          day: 'Day 46-60',
          step: 'Resolution & Response',
          description: 'Actions are implemented based on findings. If contact info provided, complainant receives a summary of resolution (without compromising confidentiality).',
        },
      ],
    },

    confidentiality: {
      title: 'Confidentiality Guarantee',
      subtitle: 'Your privacy and safety are our highest priorities.',
      guarantees: [
        {
          title: 'Strict Confidentiality',
          description: 'All personal information and complaint details are kept strictly confidential. Only those with a legitimate need to know are informed.',
        },
        {
          title: 'Secure Storage',
          description: 'Complaints are stored in secure, restricted-access systems. Records are retained for 7 years in compliance with governance standards.',
        },
        {
          title: 'Limited Disclosure',
          description: 'Information about your complaint is disclosed only when legally required or with your explicit consent.',
        },
        {
          title: 'Anonymous Option',
          description: 'You may submit your complaint completely anonymously, with no identifying information whatsoever.',
        },
        {
          title: 'Third-Party Neutral',
          description: 'Serious complaints may be investigated by an independent external party to ensure impartiality.',
        },
      ],
    },

    retaliation: {
      title: 'Protection Against Retaliation',
      subtitle: 'JHCO strictly prohibits any retaliation against those who file complaints in good faith.',
      policy: 'Anyone who submits a complaint or cooperates with an investigation is protected from retaliation. Retaliation includes, but is not limited to: termination of employment or services, demotion, denial of promotion, reduction in hours or salary, negative performance evaluations, harassment, or any other adverse action.',
      protections: [
        'Employees and volunteers who file complaints cannot be terminated or demoted as a result of the complaint',
        'Program beneficiaries who file complaints will not have their services reduced or terminated',
        'Those who cooperate with investigations have the same protections as complainants',
        'Retaliation is itself grounds for disciplinary action up to and including termination',
        'We encourage anyone who experiences retaliation to report it immediately',
      ],
      reporting: 'If you experience retaliation after filing a complaint, report it immediately to the Board Chair at boardchair@jhco.org',
    },

    annualReport: {
      title: 'Complaints Statistics & Annual Report',
      subtitle: 'JHCO maintains transparency through regular reporting on complaints received and resolved.',
      latestYear: 'Based on 2024 Annual Governance Report',
      stats: [
        {
          number: '45',
          label: 'Total Complaints Received',
          description: 'Complaints received through all channels',
        },
        {
          number: '87%',
          label: 'Resolved Within 60 Days',
          description: 'Meeting our target resolution timeline',
        },
        {
          number: '11%',
          label: 'Pending Investigation',
          description: 'Complex cases requiring extended review',
        },
        {
          number: '0',
          label: 'Retaliation Incidents',
          description: 'Zero incidents of retaliation reported',
        },
      ],
      breakdown: {
        title: 'Breakdown by Category',
        categories: [
          { name: 'Program Quality Issues', percentage: 35, color: '#C9A961' },
          { name: 'Administrative Concerns', percentage: 25, color: '#8B7355' },
          { name: 'Staff Conduct', percentage: 20, color: '#2C3E50' },
          { name: 'Financial Concerns', percentage: 15, color: '#1A2332' },
          { name: 'Other', percentage: 5, color: '#A68E7E' },
        ],
      },
      resolution: {
        title: 'Resolution Status',
        items: [
          { status: 'Resolved', percentage: 84 },
          { status: 'In Progress', percentage: 11 },
          { status: 'Referred to External Authority', percentage: 5 },
        ],
      },
      improvements: {
        title: 'Actions Taken Based on Complaints (2024)',
        actions: [
          'Implemented new staff training program on safeguarding (8 complaints)',
          'Enhanced financial controls and reporting procedures (7 complaints)',
          'Revised program delivery protocols for better community engagement (6 complaints)',
          'Improved communication channels between regional offices (4 complaints)',
          'Strengthened confidentiality procedures (3 complaints)',
        ],
      },
    },

    contactGovernance: {
      title: 'Questions About This Process?',
      description: 'Contact the Governance Board',
      email: 'governance@jhco.org',
      phone: '+962-6-5520-000',
    },
  },

  ar: {
    title: 'بوابة الشكاوى والتغذية الراجعة',
    heroTitle: 'بوابة الشكاوى والتغذية الراجعة',
    heroSubtitle: 'الهيئة ملتزمة بالحفاظ على أعلى معايير الحكومة والمساءلة. نرحب بتعليقاتك وشكاواك.',

    formSection: {
      title: 'قدم شكواك أو ملاحظاتك',
      subtitle: 'صوتك مهم. شارك مخاوفك معنا بأمان وسرية.',
      form: {
        name: 'اسمك (اختياري)',
        nameHelp: 'اترك الحقل فارغاً لتقديم شكوى مجهولة الهوية',
        email: 'بريدك الإلكتروني (اختياري)',
        emailHelp: 'أدخل بريدك الإلكتروني إذا كنت تريد ردولاً على شكواك',
        phone: 'رقم الهاتف (اختياري)',
        category: 'الفئة',
        selectCategory: 'اختر فئة',
        categories: [
          'سوء الإدارة المالية',
          'سلوك الموظفين',
          'جودة البرامج',
          'السلامة والحماية',
          'التمييز أو التحرش',
          'انتهاك السرية',
          'الاحتيال أو الفساد',
          'أخرى',
        ],
        description: 'تفاصيل شكواك',
        descriptionPlaceholder: 'يرجى تقديم أكبر قدر من التفاصيل حول شكواك. أضف التواريخ والأسماء والحوادث المحددة إن أمكن.',
        severity: 'مستوى الخطورة',
        selectSeverity: 'اختر مستوى الخطورة',
        severities: ['منخفضة', 'متوسطة', 'عالية', 'حرجة'],
        preferredContact: 'الطريقة المفضلة للرد',
        contactMethods: ['بريد إلكتروني', 'هاتف', 'بريد عادي', 'لا حاجة للرد'],
        attachments: 'المرفقات (اختياري)',
        attachmentsHelp: 'حمّل المستندات الداعمة إن توفرت',
        consent: 'أوافق على شروط الخصوصية والسرية لهذه البوابة',
        submit: 'إرسال الشكوى',
        submitting: 'جاري الإرسال...',
        success: 'شكراً لتقديمك. تم استقبال شكواك وسيتم مراجعتها قريباً.',
        error: 'حدث خطأ في تقديم شكواك. يرجى المحاولة مرة أخرى.',
      },
    },

    alternativeChannels: {
      title: 'قنوات الإبلاغ البديلة',
      subtitle: 'إذا كنت تفضل عدم استخدام نموذج الإنترنت هذا، يمكنك الإبلاغ عن شكواك من خلال أي من القنوات التالية:',
      channels: [
        {
          icon: '📧',
          title: 'البريد الإلكتروني',
          details: 'complaints@jhco.org',
          description: 'أرسل شكواك مباشرة إلى بريدنا الإلكتروني المخصص للشكاوى',
        },
        {
          icon: '📞',
          title: 'الهاتف',
          details: '+962-6-5520-000',
          description: 'اتصل بخط الشكاوى الخاص بنا خلال ساعات العمل (9 صباحاً - 5 مساءً بتوقيت الشرق الأوسط)',
        },
        {
          icon: '✉️',
          title: 'البريد العادي',
          details: 'مجلس حكومة الهيئة\nصندوق البريد 926625\nعمّان 11190، الأردن',
          description: 'أرسل شكواك الخطية عبر البريد العادي',
        },
        {
          icon: '🤝',
          title: 'شخصياً',
          details: 'مقر الهيئة الرئيسي',
          description: 'زر مقرنا الرئيسي لتقديم شكوى وجهاً لوجه. تحدث مع أي موظف في الاستقبال.',
        },
      ],
    },

    handlingProcess: {
      title: 'عملية معالجة الشكاوى',
      subtitle: 'نتبع نهجاً شفافاً ومنهجياً لمعالجة جميع الشكاوى بإنصاف وشمول.',
      timeline: [
        {
          day: 'اليوم 1-2',
          step: 'الاستقبال والإقرار',
          description: 'يتم تسجيل شكواك وتتلقى إقراراً (إذا تم توفير بيانات الاتصال). نجري تقييماً أولياً للشكوى.',
        },
        {
          day: 'اليوم 3-5',
          step: 'التحقيق الأولي',
          description: 'يبدأ مجلس الحكومة بتحقيق أولي لتحديد الاختصاص وخطورة الشكوى.',
        },
        {
          day: 'اليوم 6-30',
          step: 'التحقيق الكامل',
          description: 'يتم إجراء تحقيق شامل، بما في ذلك المقابلات مع الأطراف ذات الصلة ومراجعة المستندات. يتم الحفاظ على السرية.',
        },
        {
          day: 'اليوم 31-45',
          step: 'تقرير النتائج',
          description: 'يعد فريق التحقيق تقريراً مفصلاً بالنتائج والإجراءات الموصى بها.',
        },
        {
          day: 'اليوم 46-60',
          step: 'الحل والرد',
          description: 'يتم تنفيذ الإجراءات بناءً على النتائج. إذا تم توفير بيانات الاتصال، يتلقى الشاكي ملخصاً للحل (دون المساس بالسرية).',
        },
      ],
    },

    confidentiality: {
      title: 'ضمان السرية',
      subtitle: 'خصوصيتك وسلامتك هما أولويتنا العليا.',
      guarantees: [
        {
          title: 'سرية صارمة',
          description: 'جميع معلومات شخصية وتفاصيل الشكوى تبقى سرية تماماً. يتم إبلاغ من لديهم حاجة مشروعة للمعرفة فقط.',
        },
        {
          title: 'التخزين الآمن',
          description: 'يتم تخزين الشكاوى في أنظمة آمنة ومحدودة الوصول. يتم الاحتفاظ بالسجلات لمدة 7 سنوات وفقاً لمعايير الحكومة.',
        },
        {
          title: 'الكشف المحدود',
          description: 'يتم الكشف عن معلومات شكواك فقط عند الضرورة القانونية أو بموافقتك الصريحة.',
        },
        {
          title: 'الخيار المجهول',
          description: 'يمكنك تقديم شكواك بشكل مجهول تماماً، بدون أي معلومات تعريفية.',
        },
        {
          title: 'طرف ثالث محايد',
          description: 'قد يتم التحقيق في الشكاوى الجادة من قبل طرف خارجي مستقل لضمان عدم الانحياز.',
        },
      ],
    },

    retaliation: {
      title: 'الحماية من الانتقام',
      subtitle: 'تحظر الهيئة بصرامة أي انتقام من أولئك الذين يقدمون شكاوى بحسن نية.',
      policy: 'أي شخص يقدم شكوى أو يتعاون مع تحقيق محمي من الانتقام. يشمل الانتقام على سبيل المثال لا الحصر: إنهاء التوظيف أو الخدمات أو الخفض الوظيفي أو رفض الترقية أو تقليل الساعات أو الراتب أو تقييمات الأداء السلبية أو التحرش أو أي إجراء معاكس آخر.',
      protections: [
        'لا يمكن فصل الموظفين والمتطوعين الذين يقدمون شكاوى أو خفض مستواهم الوظيفي نتيجة للشكوى',
        'المستفيدون من البرامج الذين يقدمون شكاوى لن تنخفض خدماتهم أو تنقطع',
        'من يتعاون مع التحقيقات لديهم نفس الحماية التي يتمتع بها الشاكي',
        'الانتقام نفسه يشكل أساساً للإجراءات التأديبية حتى الفصل من الوظيفة',
        'نشجع من يعاني من الانتقام على الإبلاغ عنه فوراً',
      ],
      reporting: 'إذا واجهت انتقاماً بعد تقديمك شكوى، أبلغ عنه فوراً لرئيس المجلس على boardchair@jhco.org',
    },

    annualReport: {
      title: 'إحصائيات الشكاوى والتقرير السنوي',
      subtitle: 'تحافظ الهيئة على الشفافية من خلال الإبلاغ المنتظم عن الشكاوى المستقبلة والمحلولة.',
      latestYear: 'بناءً على تقرير الحكومة السنوي 2024',
      stats: [
        {
          number: '45',
          label: 'إجمالي الشكاوى المستقبلة',
          description: 'الشكاوى المستقبلة من جميع القنوات',
        },
        {
          number: '87%',
          label: 'حُلّت في غضون 60 يوماً',
          description: 'تحقيق هدفنا الزمني للحل',
        },
        {
          number: '11%',
          label: 'قيد التحقيق',
          description: 'القضايا المعقدة التي تتطلب مراجعة موسعة',
        },
        {
          number: '0',
          label: 'حوادث انتقام',
          description: 'لم يتم الإبلاغ عن أي حوادث انتقام',
        },
      ],
      breakdown: {
        title: 'التقسيم حسب الفئة',
        categories: [
          { name: 'مشاكل جودة البرامج', percentage: 35, color: '#C9A961' },
          { name: 'المخاوف الإدارية', percentage: 25, color: '#8B7355' },
          { name: 'سلوك الموظفين', percentage: 20, color: '#2C3E50' },
          { name: 'المخاوف المالية', percentage: 15, color: '#1A2332' },
          { name: 'أخرى', percentage: 5, color: '#A68E7E' },
        ],
      },
      resolution: {
        title: 'حالة الحل',
        items: [
          { status: 'محلولة', percentage: 84 },
          { status: 'قيد التنفيذ', percentage: 11 },
          { status: 'تم إحالتها للسلطات الخارجية', percentage: 5 },
        ],
      },
      improvements: {
        title: 'الإجراءات المتخذة بناءً على الشكاوى (2024)',
        actions: [
          'تنفيذ برنامج تدريب جديد للموظفين على الحماية (8 شكاوى)',
          'تعزيز الضوابط المالية وإجراءات الإبلاغ (7 شكاوى)',
          'مراجعة بروتوكولات تقديم البرامج لتحسين مشاركة المجتمع (6 شكاوى)',
          'تحسين قنوات الاتصال بين المكاتب الإقليمية (4 شكاوى)',
          'تقوية إجراءات السرية (3 شكاوى)',
        ],
      },
    },

    contactGovernance: {
      title: 'هل لديك أسئلة حول هذه العملية؟',
      description: 'تواصل مع مجلس الحكومة',
      email: 'governance@jhco.org',
      phone: '+962-6-5520-000',
    },
  },
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  severity: string;
  preferredContact: string;
  consent: boolean;
};

export default function ComplaintsPortalPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const ar = locale === 'ar';
  const content = pageContent[locale] || pageContent.en;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    severity: '',
    preferredContact: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkboxElement = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkboxElement.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.category || !formData.description || !formData.severity) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.consent) {
      setError('You must agree to the confidentiality terms');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          description: '',
          severity: '',
          preferredContact: '',
          consent: false,
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(content.formSection.form.error);
      }
    } catch (err) {
      setError(content.formSection.form.error);
    } finally {
      setLoading(false);
    }
  };

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
            {ar ? 'الحكومة' : 'Governance'}
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

      {/* Submission Form Section */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.formSection.title}
            </h2>
            <p style={{
              fontSize: '18px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              {content.formSection.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: royalColors.bgLight,
            padding: '48px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderLight}`,
          }}>
            {submitted && (
              <div style={{
                backgroundColor: '#d4edda',
                border: '1px solid #c3e6cb',
                color: '#155724',
                padding: '16px',
                borderRadius: '4px',
                marginBottom: '24px',
                textAlign: 'center',
              }}>
                {content.formSection.form.success}
              </div>
            )}

            {error && (
              <div style={{
                backgroundColor: '#f8d7da',
                border: '1px solid #f5c6cb',
                color: '#721c24',
                padding: '16px',
                borderRadius: '4px',
                marginBottom: '24px',
              }}>
                {error}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={content.formSection.form.nameHelp}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={content.formSection.form.emailHelp}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.category} *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: 'white',
                  }}
                >
                  <option value="">{content.formSection.form.selectCategory}</option>
                  {content.formSection.form.categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                {content.formSection.form.description} *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder={content.formSection.form.descriptionPlaceholder}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${royalColors.borderLight}`,
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.severity} *
                </label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: 'white',
                  }}
                >
                  <option value="">{content.formSection.form.selectSeverity}</option>
                  {content.formSection.form.severities.map(sev => (
                    <option key={sev} value={sev}>{sev}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: royalColors.darkNavy }}>
                  {content.formSection.form.preferredContact}
                </label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: `1px solid ${royalColors.borderLight}`,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: 'white',
                  }}
                >
                  <option value="">{content.formSection.form.selectCategory}</option>
                  {content.formSection.form.contactMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '14px', color: royalColors.textSecondary }}>
                  {content.formSection.form.consent}
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: royalColors.hashemiteGold,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.3s ease',
              }}
            >
              {loading ? content.formSection.form.submitting : content.formSection.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Channels Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.alternativeChannels.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {content.alternativeChannels.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.alternativeChannels.channels.map((channel, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderLight}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{channel.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {channel.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: royalColors.hashemiteGold,
                  marginBottom: '12px',
                }}>
                  {channel.details}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  lineHeight: '1.6',
                }}>
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling Process Section */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.handlingProcess.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {content.handlingProcess.subtitle}
            </p>
          </div>

          <div style={{ position: 'relative', paddingTop: '40px' }}>
            {content.handlingProcess.timeline.map((item, idx) => (
              <div key={idx} style={{
                display: 'grid',
                gridTemplateColumns: ar ? '1fr 200px' : '200px 1fr',
                gap: '32px',
                marginBottom: '48px',
                alignItems: 'start',
              }}>
                <div style={{ order: ar ? 2 : 0 }}>
                  <div style={{
                    backgroundColor: royalColors.bgLight,
                    padding: '24px',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${royalColors.hashemiteGold}`,
                  }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: royalColors.darkNavy,
                      marginBottom: '8px',
                    }}>
                      {item.step}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: royalColors.textSecondary,
                      lineHeight: '1.6',
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: royalColors.hashemiteGold,
                  padding: '8px 16px',
                  backgroundColor: royalColors.bgLight,
                  borderRadius: '4px',
                  textAlign: 'center',
                  order: ar ? 1 : 0,
                }}>
                  {item.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.confidentiality.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {content.confidentiality.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {content.confidentiality.guarantees.map((guarantee, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderLight}`,
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  marginBottom: '12px',
                }}>
                  {guarantee.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  lineHeight: '1.6',
                }}>
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retaliation Protection Section */}
      <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.retaliation.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {content.retaliation.subtitle}
            </p>
          </div>

          <div style={{
            backgroundColor: royalColors.bgLight,
            padding: '40px',
            borderRadius: '8px',
            border: `1px solid ${royalColors.borderLight}`,
            marginBottom: '40px',
          }}>
            <p style={{
              fontSize: '16px',
              color: royalColors.darkNavy,
              lineHeight: '1.8',
              marginBottom: '24px',
              fontStyle: 'italic',
            }}>
              {content.retaliation.policy}
            </p>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              marginBottom: '16px',
              marginTop: '24px',
            }}>
              {ar ? 'الحماية المحددة:' : 'Specific Protections:'}
            </h3>
            <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
              {content.retaliation.protections.map((protection, idx) => (
                <li key={idx} style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  marginBottom: '12px',
                }}>
                  {protection}
                </li>
              ))}
            </ul>

            <div style={{
              backgroundColor: '#fff3cd',
              border: `1px solid #ffc107`,
              borderRadius: '4px',
              padding: '16px',
              marginTop: '24px',
            }}>
              <p style={{ fontSize: '14px', color: '#856404', margin: 0 }}>
                <strong>{ar ? 'إذا واجهت انتقاماً:' : 'If You Experience Retaliation:'}</strong> {content.retaliation.reporting}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Report Section */}
      <section style={{ padding: '96px 32px', backgroundColor: royalColors.bgLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: royalTypography.serif,
              fontWeight: '400',
              marginBottom: '16px',
              color: royalColors.darkNavy,
            }}>
              {content.annualReport.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: royalColors.textSecondary,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              {content.annualReport.subtitle}
            </p>
            <p style={{
              fontSize: '12px',
              color: royalColors.textSecondary,
              marginTop: '16px',
              fontStyle: 'italic',
            }}>
              {content.annualReport.latestYear}
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}>
            {content.annualReport.stats.map((stat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid ${royalColors.borderLight}`,
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: royalColors.hashemiteGold,
                  marginBottom: '12px',
                }}>
                  {stat.number}
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: royalColors.darkNavy,
                  marginBottom: '8px',
                }}>
                  {stat.label}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: royalColors.textSecondary,
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Breakdown by Category */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              marginBottom: '32px',
            }}>
              {content.annualReport.breakdown.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {content.annualReport.breakdown.categories.map((cat, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: royalColors.darkNavy, fontWeight: '500' }}>
                      {cat.name}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: cat.color }}>
                      {cat.percentage}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    backgroundColor: royalColors.borderLight,
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${cat.percentage}%`,
                      backgroundColor: cat.color,
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resolution Status */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              marginBottom: '32px',
            }}>
              {content.annualReport.resolution.title}
            </h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              {content.annualReport.resolution.items.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', color: royalColors.darkNavy, fontWeight: '500' }}>
                      {item.status}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: royalColors.hashemiteGold }}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    backgroundColor: royalColors.borderLight,
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${item.percentage}%`,
                      backgroundColor: royalColors.hashemiteGold,
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Improvements Section */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px' }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: royalColors.darkNavy,
              marginBottom: '24px',
            }}>
              {content.annualReport.improvements.title}
            </h3>
            <ul style={{ lineHeight: '1.8', marginLeft: '24px' }}>
              {content.annualReport.improvements.actions.map((action, idx) => (
                <li key={idx} style={{
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  marginBottom: '12px',
                }}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 32px', backgroundColor: 'white', borderTop: `1px solid ${royalColors.borderLight}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: royalTypography.serif,
            fontWeight: '400',
            marginBottom: '24px',
            color: royalColors.darkNavy,
          }}>
            {content.contactGovernance.title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: royalColors.textSecondary,
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            {content.contactGovernance.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ar ? '1fr 1fr' : '1fr 1fr',
            gap: '32px',
            marginTop: '32px',
          }}>
            <div>
              <p style={{ fontSize: '12px', color: royalColors.textSecondary, marginBottom: '8px', textTransform: 'uppercase' }}>
                {ar ? 'البريد الإلكتروني' : 'Email'}
              </p>
              <a href={`mailto:${content.contactGovernance.email}`} style={{
                fontSize: '18px',
                fontWeight: '600',
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
              }}>
                {content.contactGovernance.email}
              </a>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: royalColors.textSecondary, marginBottom: '8px', textTransform: 'uppercase' }}>
                {ar ? 'الهاتف' : 'Phone'}
              </p>
              <a href={`tel:${content.contactGovernance.phone}`} style={{
                fontSize: '18px',
                fontWeight: '600',
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
              }}>
                {content.contactGovernance.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
