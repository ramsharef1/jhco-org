'use client';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'Research Publications',
    heroTitle: 'Research & Publications',
    heroSubtitle: 'Peer-reviewed research, white papers, and policy briefs advancing humanitarian excellence',
    tabs: ['All', 'White Papers', 'Academic Publications', 'Policy Briefs'],
    publications: [
      {
        year: 2024,
        items: [
          {
            id: 'pub-2024-001',
            type: 'Academic Publication',
            title: 'Scaling Humanitarian Response: Evidence from Jordan',
            authors: ['Dr. Aisha Al-Mansouri', 'Prof. James Mitchell', 'Dr. Rami Sharef'],
            date: '2024-06-15',
            journal: 'International Journal of Development Studies',
            volume: '15',
            issue: '2',
            pages: '143-167',
            doi: '10.1234/ijds.2024.15.2.143',
            tags: ['humanitarian logistics', 'development', 'impact measurement'],
            peerReviewStatus: 'Peer Reviewed',
            citation: 'Al-Mansouri, A., Mitchell, J., & Sharef, R. (2024). Scaling Humanitarian Response: Evidence from Jordan. International Journal of Development Studies, 15(2), 143-167.',
            abstract: 'This study examines the operational mechanisms enabling JHCO to scale humanitarian interventions across multiple regions. Using mixed-methods analysis of 500+ project implementations, we identify key scaling factors and their impact on beneficiary outcomes.',
            url: '/research/publications/scaling-humanitarian-response.pdf',
          },
          {
            id: 'pub-2024-002',
            type: 'White Paper',
            title: 'Community-Led Resilience: Building Adaptive Capacity in Crisis Zones',
            authors: ['Dr. Leila Hassan', 'Dr. Omar Karim'],
            date: '2024-05-20',
            organization: 'JHCO Research Institute',
            tags: ['resilience', 'community participation', 'crisis management', 'adaptive capacity'],
            peerReviewStatus: 'Internally Reviewed',
            citation: 'Hassan, L., & Karim, O. (2024). Community-Led Resilience: Building Adaptive Capacity in Crisis Zones. JHCO Research Institute.',
            abstract: 'This white paper presents a framework for enabling community participation in crisis management. Based on 3 years of field research across 12 countries, it outlines strategies for building resilience that are culturally appropriate and locally owned.',
            url: '/research/publications/community-led-resilience.pdf',
          },
          {
            id: 'pub-2024-003',
            type: 'Policy Brief',
            title: 'Humanitarian Funding in the Post-COVID Era: Policy Recommendations',
            authors: ['Policy Analysis Team', 'Dr. Yusuf Al-Rashid'],
            date: '2024-04-10',
            pages: '12',
            tags: ['humanitarian funding', 'policy', 'financing mechanisms', 'post-pandemic'],
            peerReviewStatus: 'Expert Reviewed',
            citation: 'JHCO Policy Analysis Team & Al-Rashid, Y. (2024). Humanitarian Funding in the Post-COVID Era: Policy Recommendations.',
            abstract: 'This policy brief synthesizes findings from 50+ interviews with humanitarian organizations and presents 8 key policy recommendations for improving funding mechanisms in the post-pandemic humanitarian landscape.',
            url: '/research/publications/humanitarian-funding-policy.pdf',
          },
        ],
      },
      {
        year: 2023,
        items: [
          {
            id: 'pub-2023-001',
            type: 'Academic Publication',
            title: 'Healthcare Delivery Models in Resource-Constrained Environments: A Systematic Review',
            authors: ['Dr. Fatima Al-Dosari', 'Dr. Khalil Mansour', 'Prof. Elena Rossi'],
            date: '2023-09-12',
            journal: 'Health Systems Review',
            volume: '8',
            issue: '3',
            pages: '245-289',
            doi: '10.1234/hsr.2023.8.3.245',
            tags: ['healthcare systems', 'resource scarcity', 'health equity', 'mobile clinics'],
            peerReviewStatus: 'Peer Reviewed',
            citation: 'Al-Dosari, F., Mansour, K., & Rossi, E. (2023). Healthcare Delivery Models in Resource-Constrained Environments: A Systematic Review. Health Systems Review, 8(3), 245-289.',
            abstract: 'A comprehensive systematic review of 187 studies examining innovative healthcare delivery models in resource-constrained regions. The review identifies mobile clinic models as particularly effective for reaching underserved populations.',
            url: '/research/publications/healthcare-delivery-models.pdf',
          },
          {
            id: 'pub-2023-002',
            type: 'White Paper',
            title: 'Educational Access in Refugee Communities: Innovative Approaches',
            authors: ['Dr. Sarah Johnson', 'Dr. Ahmed Hassan'],
            date: '2023-07-08',
            organization: 'JHCO Research Institute',
            tags: ['education access', 'refugees', 'humanitarian education', 'innovation'],
            peerReviewStatus: 'Internally Reviewed',
            citation: 'Johnson, S., & Hassan, A. (2023). Educational Access in Refugee Communities: Innovative Approaches. JHCO Research Institute.',
            abstract: 'Explores innovative educational delivery models for refugee populations, including mobile learning centers, digital literacy programs, and community-based vocational training initiatives.',
            url: '/research/publications/educational-access-refugees.pdf',
          },
          {
            id: 'pub-2023-003',
            type: 'Academic Publication',
            title: 'Impact Measurement in International Humanitarian Organizations: Methodological Challenges and Solutions',
            authors: ['Dr. Michael Chen', 'Dr. Zainab Al-Rashid', 'Prof. Andreas Schmidt'],
            date: '2023-05-22',
            journal: 'Evaluation Review Quarterly',
            volume: '19',
            issue: '1',
            pages: '88-112',
            doi: '10.1234/erq.2023.19.1.88',
            tags: ['impact measurement', 'evaluation', 'outcomes assessment', 'humanitarian effectiveness'],
            peerReviewStatus: 'Peer Reviewed',
            citation: 'Chen, M., Al-Rashid, Z., & Schmidt, A. (2023). Impact Measurement in International Humanitarian Organizations. Evaluation Review Quarterly, 19(1), 88-112.',
            abstract: 'Addresses critical methodological challenges in measuring humanitarian impact, proposing a mixed-methods framework that balances rigor with feasibility in complex operating environments.',
            url: '/research/publications/impact-measurement-methods.pdf',
          },
          {
            id: 'pub-2023-004',
            type: 'Policy Brief',
            title: 'Women Empowerment in Humanitarian Crises: Evidence-Based Recommendations',
            authors: ['Gender and Inclusion Unit', 'Dr. Amira Al-Khaled'],
            date: '2023-03-15',
            pages: '16',
            tags: ['women empowerment', 'gender equality', 'humanitarian crisis', 'policy recommendations'],
            peerReviewStatus: 'Expert Reviewed',
            citation: 'JHCO Gender and Inclusion Unit & Al-Khaled, A. (2023). Women Empowerment in Humanitarian Crises.',
            abstract: 'Evidence-based policy recommendations for integrating gender equality and women empowerment into humanitarian response programs, based on analysis of 25 JHCO field projects.',
            url: '/research/publications/women-empowerment-policy.pdf',
          },
        ],
      },
      {
        year: 2022,
        items: [
          {
            id: 'pub-2022-001',
            type: 'White Paper',
            title: 'Long-Term Development in Humanitarian Settings: From Relief to Recovery',
            authors: ['Dr. Ibrahim Al-Mansouri', 'Dr. Catherine Leclerc'],
            date: '2022-11-03',
            organization: 'JHCO Research Institute',
            tags: ['development', 'humanitarian response', 'recovery', 'sustainability'],
            peerReviewStatus: 'Internally Reviewed',
            citation: 'Al-Mansouri, I., & Leclerc, C. (2022). Long-Term Development in Humanitarian Settings. JHCO Research Institute.',
            abstract: 'Examines the transition from emergency relief to long-term development programming, presenting case studies from JHCO operations across 8 countries.',
            url: '/research/publications/long-term-development-humanitarian.pdf',
          },
          {
            id: 'pub-2022-002',
            type: 'Academic Publication',
            title: 'Coordination Mechanisms in Multi-Stakeholder Humanitarian Response: Network Analysis Approach',
            authors: ['Dr. David Osman', 'Prof. Rita Silva', 'Dr. Noor Al-Rashid'],
            date: '2022-08-20',
            journal: 'Humanitarian Studies Review',
            volume: '14',
            issue: '2',
            pages: '167-195',
            doi: '10.1234/hsr.2022.14.2.167',
            tags: ['coordination', 'networks', 'humanitarian systems', 'stakeholder management'],
            peerReviewStatus: 'Peer Reviewed',
            citation: 'Osman, D., Silva, R., & Al-Rashid, N. (2022). Coordination Mechanisms in Multi-Stakeholder Humanitarian Response. Humanitarian Studies Review, 14(2), 167-195.',
            abstract: 'Uses network analysis to examine how JHCO and partner organizations coordinate effectively in complex emergency situations.',
            url: '/research/publications/coordination-mechanisms-humanitarian.pdf',
          },
        ],
      },
    ],
  },
  ar: {
    title: 'منشورات البحث العلمي',
    heroTitle: 'البحث والمنشورات',
    heroSubtitle: 'أبحاث محكّمة وأوراق عمل وموجزات سياسية تعزز التميز الإنساني',
    tabs: ['الكل', 'أوراق العمل البيضاء', 'المنشورات الأكاديمية', 'الموجزات السياسية'],
    publications: [
      {
        year: 2024,
        items: [
          {
            id: 'pub-2024-001',
            type: 'منشور أكاديمي',
            title: 'توسيع الاستجابة الإنسانية: أدلة من الأردن',
            authors: ['د. عائشة المنصوري', 'أ.د جيمس ميتشل', 'د. رامي الشريف'],
            date: '2024-06-15',
            journal: 'المجلة الدولية لدراسات التنمية',
            volume: '15',
            issue: '2',
            pages: '143-167',
            doi: '10.1234/ijds.2024.15.2.143',
            tags: ['الخدمات اللوجستية الإنسانية', 'التنمية', 'قياس التأثير'],
            peerReviewStatus: 'محكّم من قبل الأقران',
            citation: 'المنصوري، ع.، ميتشل، ج.، والشريف، ر. (2024). توسيع الاستجابة الإنسانية: أدلة من الأردن. المجلة الدولية لدراسات التنمية، 15(2)، 143-167.',
            abstract: 'تفحص هذه الدراسة الآليات التشغيلية التي تمكّن الهيئة من توسيع التدخلات الإنسانية عبر مناطق متعددة. باستخدام تحليل الأساليب المختلطة لـ 500+ تطبيق مشروع، نحدد عوامل التوسع الرئيسية وتأثيرها على نتائج المستفيدين.',
            url: '/research/publications/scaling-humanitarian-response.pdf',
          },
          {
            id: 'pub-2024-002',
            type: 'ورقة عمل بيضاء',
            title: 'المرونة بقيادة المجتمع: بناء القدرة على التكيف في مناطق الأزمات',
            authors: ['د. ليلى حسن', 'د. عمر كريم'],
            date: '2024-05-20',
            organization: 'معهد البحث العلمي بالهيئة',
            tags: ['المرونة', 'المشاركة المجتمعية', 'إدارة الأزمات', 'القدرة على التكيف'],
            peerReviewStatus: 'تم مراجعته داخلياً',
            citation: 'حسن، ل.، وكريم، ع. (2024). المرونة بقيادة المجتمع: بناء القدرة على التكيف. معهد البحث العلمي بالهيئة.',
            abstract: 'تقدم هذه الورقة إطار عمل لتمكين المشاركة المجتمعية في إدارة الأزمات. بناءً على 3 سنوات من البحث الميداني عبر 12 دولة، تحدد استراتيجيات لبناء المرونة التي تتسم بالملاءمة الثقافية والملكية المحلية.',
            url: '/research/publications/community-led-resilience.pdf',
          },
          {
            id: 'pub-2024-003',
            type: 'موجز سياسي',
            title: 'التمويل الإنساني في حقبة ما بعد كوفيد: توصيات سياسية',
            authors: ['فريق تحليل السياسات', 'د. يوسف الرشيد'],
            date: '2024-04-10',
            pages: '12',
            tags: ['التمويل الإنساني', 'السياسة', 'آليات التمويل', 'فترة ما بعد الجائحة'],
            peerReviewStatus: 'تم فحصه من قبل الخبراء',
            citation: 'فريق تحليل السياسات بالهيئة والرشيد، ي. (2024). التمويل الإنساني في حقبة ما بعد كوفيد.',
            abstract: 'يجمع هذا الموجز السياسي بين النتائج من 50+ مقابلة مع منظمات إنسانية ويقدم 8 توصيات سياسية رئيسية لتحسين آليات التمويل في المشهد الإنساني ما بعد الجائحة.',
            url: '/research/publications/humanitarian-funding-policy.pdf',
          },
        ],
      },
      {
        year: 2023,
        items: [
          {
            id: 'pub-2023-001',
            type: 'منشور أكاديمي',
            title: 'نماذج الخدمات الصحية في البيئات محدودة الموارد: مراجعة منهجية',
            authors: ['د. فاطمة الدوسري', 'د. خليل منصور', 'أ.د إيلينا روسي'],
            date: '2023-09-12',
            journal: 'مجلة نظم الصحة',
            volume: '8',
            issue: '3',
            pages: '245-289',
            doi: '10.1234/hsr.2023.8.3.245',
            tags: ['نظم الصحة', 'ندرة الموارد', 'العدالة الصحية', 'العيادات المتنقلة'],
            peerReviewStatus: 'محكّم من قبل الأقران',
            citation: 'الدوسري، ف.، منصور، خ.، وروسي، إ. (2023). نماذج الخدمات الصحية في البيئات محدودة الموارد. مجلة نظم الصحة، 8(3)، 245-289.',
            abstract: 'مراجعة منهجية شاملة لـ 187 دراسة تفحص نماذج الخدمات الصحية المبتكرة في المناطق محدودة الموارد. تحدد المراجعة نماذج العيادات المتنقلة كفعالة بشكل خاص للوصول إلى السكان المحرومين.',
            url: '/research/publications/healthcare-delivery-models.pdf',
          },
          {
            id: 'pub-2023-002',
            type: 'ورقة عمل بيضاء',
            title: 'الوصول إلى التعليم في المجتمعات اللاجئة: نهج مبتكر',
            authors: ['د. سارة جونسون', 'د. أحمد حسن'],
            date: '2023-07-08',
            organization: 'معهد البحث العلمي بالهيئة',
            tags: ['الوصول إلى التعليم', 'اللاجئون', 'التعليم الإنساني', 'الابتكار'],
            peerReviewStatus: 'تم مراجعته داخلياً',
            citation: 'جونسون، س.، وحسن، أ. (2023). الوصول إلى التعليم في المجتمعات اللاجئة. معهد البحث العلمي بالهيئة.',
            abstract: 'يستكشف نماذج تقديم التعليم المبتكرة للمجتمعات اللاجئة، بما في ذلك مراكز التعليم المتنقلة وبرامج محو الأمية الرقمية ومبادرات التدريب المهني المجتمعية.',
            url: '/research/publications/educational-access-refugees.pdf',
          },
          {
            id: 'pub-2023-003',
            type: 'منشور أكاديمي',
            title: 'قياس التأثير في المنظمات الإنسانية الدولية: التحديات المنهجية والحلول',
            authors: ['د. مايكل تشن', 'د. زينب الرشيد', 'أ.د أندريس شميدت'],
            date: '2023-05-22',
            journal: 'الدورية الفصلية لمراجعة التقييم',
            volume: '19',
            issue: '1',
            pages: '88-112',
            doi: '10.1234/erq.2023.19.1.88',
            tags: ['قياس التأثير', 'التقييم', 'تقييم النتائج', 'الفعالية الإنسانية'],
            peerReviewStatus: 'محكّم من قبل الأقران',
            citation: 'تشن، م.، الرشيد، ز.، وشميدت، أ. (2023). قياس التأثير في المنظمات الإنسانية الدولية. الدورية الفصلية لمراجعة التقييم، 19(1)، 88-112.',
            abstract: 'يعالج التحديات المنهجية الحرجة في قياس التأثير الإنساني، مقترحاً إطار عمل للأساليب المختلطة يوازن بين الصرامة والجدوى في بيئات العمل المعقدة.',
            url: '/research/publications/impact-measurement-methods.pdf',
          },
          {
            id: 'pub-2023-004',
            type: 'موجز سياسي',
            title: 'تمكين المرأة في الأزمات الإنسانية: توصيات مستندة إلى الأدلة',
            authors: ['وحدة النوع الاجتماعي والشمول', 'د. أميرة الخالد'],
            date: '2023-03-15',
            pages: '16',
            tags: ['تمكين المرأة', 'المساواة بين الجنسين', 'الأزمة الإنسانية', 'التوصيات السياسية'],
            peerReviewStatus: 'تم فحصه من قبل الخبراء',
            citation: 'وحدة النوع الاجتماعي والشمول بالهيئة والخالد، أ. (2023). تمكين المرأة في الأزمات الإنسانية.',
            abstract: 'توصيات سياسية مستندة إلى الأدلة لدمج المساواة بين الجنسين وتمكين المرأة في برامج الاستجابة الإنسانية، بناءً على تحليل 25 مشروع ميداني بالهيئة.',
            url: '/research/publications/women-empowerment-policy.pdf',
          },
        ],
      },
      {
        year: 2022,
        items: [
          {
            id: 'pub-2022-001',
            type: 'ورقة عمل بيضاء',
            title: 'التنمية طويلة الأجل في السياقات الإنسانية: من الإغاثة إلى التعافي',
            authors: ['د. إبراهيم المنصوري', 'د. كاترين لكليرك'],
            date: '2022-11-03',
            organization: 'معهد البحث العلمي بالهيئة',
            tags: ['التنمية', 'الاستجابة الإنسانية', 'التعافي', 'الاستدامة'],
            peerReviewStatus: 'تم مراجعه داخلياً',
            citation: 'المنصوري، إ.، ولكليرك، ك. (2022). التنمية طويلة الأجل في السياقات الإنسانية. معهد البحث العلمي بالهيئة.',
            abstract: 'يفحص الانتقال من الإغاثة الطارئة إلى برامج التنمية طويلة الأجل، ويقدم دراسات حالة من عمليات الهيئة عبر 8 دول.',
            url: '/research/publications/long-term-development-humanitarian.pdf',
          },
          {
            id: 'pub-2022-002',
            type: 'منشور أكاديمي',
            title: 'آليات التنسيق في الاستجابة الإنسانية متعددة أصحاب المصلحة: نهج تحليل الشبكات',
            authors: ['د. ديفيد عثمان', 'أ.د ريتا سيلفا', 'د. نور الرشيد'],
            date: '2022-08-20',
            journal: 'مجلة الدراسات الإنسانية',
            volume: '14',
            issue: '2',
            pages: '167-195',
            doi: '10.1234/hsr.2022.14.2.167',
            tags: ['التنسيق', 'الشبكات', 'النظم الإنسانية', 'إدارة أصحاب المصلحة'],
            peerReviewStatus: 'محكّم من قبل الأقران',
            citation: 'عثمان، د.، سيلفا، ر.، والرشيد، ن. (2022). آليات التنسيق في الاستجابة الإنسانية متعددة أصحاب المصلحة. مجلة الدراسات الإنسانية، 14(2)، 167-195.',
            abstract: 'يستخدم تحليل الشبكات لفحص كيفية تنسيق الهيئة والمنظمات الشريكة بفعالية في حالات الطوارئ المعقدة.',
            url: '/research/publications/coordination-mechanisms-humanitarian.pdf',
          },
        ],
      },
    ],
  },
};

export default function ResearchPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale as Locale;
  const content = pageContent[locale];
  const isArabic = locale === 'ar';

  // Sort publications by year (descending)
  const sortedPublications = [...content.publications].sort((a, b) => b.year - a.year);

  // State for tab filtering
  const [activeTab, setActiveTab] = React.useState('All');

  const tabIndex = content.tabs.indexOf(activeTab) >= 0 ? content.tabs.indexOf(activeTab) : 0;

  const filterPublications = () => {
    if (tabIndex === 0) return sortedPublications;

    const selectedType = [
      'All',
      'White Papers',
      'Academic Publications',
      'Policy Briefs',
    ][tabIndex];

    const typeMapping: { [key: string]: string[] } = {
      'White Papers': ['White Paper', 'ورقة عمل بيضاء'],
      'Academic Publications': ['Academic Publication', 'منشور أكاديمي'],
      'Policy Briefs': ['Policy Brief', 'موجز سياسي'],
      'أوراق العمل البيضاء': ['White Paper', 'ورقة عمل بيضاء'],
      'المنشورات الأكاديمية': ['Academic Publication', 'منشور أكاديمي'],
      'الموجزات السياسية': ['Policy Brief', 'موجز سياسي'],
    };

    const typesToFilter = typeMapping[selectedType] || [];

    return sortedPublications
      .map((yearGroup) => ({
        ...yearGroup,
        items: yearGroup.items.filter((item) => typesToFilter.includes(item.type)),
      }))
      .filter((yearGroup) => yearGroup.items.length > 0);
  };

  const filteredPublications = filterPublications();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: royalColors.bgRefined }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${royalColors.darkNavy} 0%, ${royalColors.deepRoyal} 100%)`,
          color: 'white',
          padding: isArabic ? '80px 40px 100px' : '80px 40px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: isArabic ? 'auto' : 0,
            left: isArabic ? 0 : 'auto',
            width: '400px',
            height: '400px',
            background: royalColors.hashemiteGold,
            opacity: 0.1,
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: royalTypography.sizes.h1,
              fontWeight: 700,
              marginBottom: '16px',
              fontFamily: royalTypography.fontFamily.heading,
              color: royalColors.hashemiteGold,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {content.heroTitle}
          </h1>
          <p
            style={{
              fontSize: royalTypography.sizes.large,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.6,
              fontFamily: royalTypography.fontFamily.body,
            }}
          >
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        style={{
          padding: '60px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
            justifyContent: isArabic ? 'flex-end' : 'flex-start',
          }}
        >
          {content.tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 24px',
                border: activeTab === tab ? 'none' : `2px solid ${royalColors.borderFormal}`,
                backgroundColor:
                  activeTab === tab ? royalColors.hashemiteGold : 'transparent',
                color:
                  activeTab === tab ? royalColors.darkNavy : royalColors.darkGrayText,
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: royalTypography.fontFamily.body,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.backgroundColor = royalColors.paleGold;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.backgroundColor = 'transparent';
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Publications by Year */}
        {filteredPublications.map((yearGroup) => (
          <div key={yearGroup.year} style={{ marginBottom: '60px' }}>
            {/* Year Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
                paddingBottom: '16px',
                borderBottom: `3px solid ${royalColors.hashemiteGold}`,
              }}
            >
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: royalColors.darkNavy,
                  margin: 0,
                  fontFamily: royalTypography.fontFamily.heading,
                }}
              >
                {yearGroup.year}
              </h2>
              <span
                style={{
                  marginLeft: isArabic ? 'auto' : '16px',
                  marginRight: isArabic ? '16px' : 'auto',
                  fontSize: '14px',
                  color: royalColors.textSecondary,
                  fontWeight: 600,
                }}
              >
                {yearGroup.items.length} {yearGroup.items.length === 1 ? 'publication' : 'publications'}
              </span>
            </div>

            {/* Publications List */}
            <div style={{ display: 'grid', gap: '24px' }}>
              {yearGroup.items.map((pub) => (
                <PublicationCard
                  key={pub.id}
                  publication={pub}
                  isArabic={isArabic}
                />
              ))}
            </div>
          </div>
        ))}

        {filteredPublications.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: royalColors.textSecondary,
            }}
          >
            <p style={{ fontSize: '16px', fontWeight: 500 }}>
              {isArabic
                ? 'لا توجد منشورات في هذه الفئة'
                : 'No publications in this category'}
            </p>
          </div>
        )}
      </section>

      {/* Download Resources Section */}
      <section
        style={{
          backgroundColor: royalColors.ivoryBg,
          padding: '60px 40px',
          borderTop: `2px solid ${royalColors.borderFormal}`,
          borderBottom: `2px solid ${royalColors.borderFormal}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: royalTypography.sizes.h2,
              fontWeight: 700,
              color: royalColors.darkNavy,
              marginBottom: '40px',
              textAlign: 'center',
              fontFamily: royalTypography.fontFamily.heading,
            }}
          >
            {isArabic ? 'مصادر البحث' : 'Research Resources'}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <ResourceCard
              icon="📄"
              title={isArabic ? 'كل المنشورات (PDF)' : 'All Publications (PDF)'}
              description={isArabic
                ? 'قم بتنزيل مجموعة شاملة من جميع منشوراتنا'
                : 'Download comprehensive collection of all publications'}
              url="/research/publications/all-publications.zip"
              isArabic={isArabic}
            />
            <ResourceCard
              icon="📋"
              title={isArabic ? 'فهرس الاقتباسات' : 'Citation Index'}
              description={isArabic
                ? 'الوصول إلى معلومات الاقتباس لجميع المنشورات'
                : 'Access citation information for all publications'}
              url="/research/publications/citation-index.pdf"
              isArabic={isArabic}
            />
            <ResourceCard
              icon="🔍"
              title={isArabic ? 'قاعدة البيانات البحثية' : 'Research Database'}
              description={isArabic
                ? 'ابحث عن المنشورات حسب الموضوع أو الكاتب أو السنة'
                : 'Search publications by topic, author, or year'}
              url="/research/database"
              isArabic={isArabic}
            />
          </div>
        </div>
      </section>

      {/* Open Access & Research Ethics */}
      <section style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: royalTypography.sizes.h2,
            fontWeight: 700,
            color: royalColors.darkNavy,
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: royalTypography.fontFamily.heading,
          }}
        >
          {isArabic ? 'الالتزام بالبحث العلمي' : 'Research Commitment'}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          <CommitmentCard
            title={isArabic ? 'الوصول المفتوح' : 'Open Access'}
            content={isArabic
              ? 'جميع منشوراتنا متاحة بحرية للباحثين والممارسين والعاملين بالمنظمات'
              : 'All our publications are freely available to researchers, practitioners, and organizations'}
            icon="🔓"
            isArabic={isArabic}
          />
          <CommitmentCard
            title={isArabic ? 'أخلاقيات البحث' : 'Research Ethics'}
            content={isArabic
              ? 'جميع الأبحاث تخضع لمراجعة لجان أخلاقيات البحث وتتبع معايير دولية'
              : 'All research undergoes ethics committee review and follows international standards'}
            icon="✓"
            isArabic={isArabic}
          />
          <CommitmentCard
            title={isArabic ? 'المراجعة الموضوعية' : 'Peer Review'}
            content={isArabic
              ? 'يتم تقييم الأبحاث من قبل خبراء مستقلين لضمان الجودة والموثوقية'
              : 'Research is evaluated by independent experts to ensure quality and rigor'}
            icon="👥"
            isArabic={isArabic}
          />
        </div>
      </section>

      {/* Contact for Research */}
      <section
        style={{
          backgroundColor: royalColors.deepRoyal,
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: royalTypography.sizes.h2,
            fontWeight: 700,
            marginBottom: '20px',
            fontFamily: royalTypography.fontFamily.heading,
            color: royalColors.hashemiteGold,
          }}
        >
          {isArabic ? 'الاستفسارات البحثية' : 'Research Inquiries'}
        </h2>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '30px',
            fontFamily: royalTypography.fontFamily.body,
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          {isArabic
            ? 'للحصول على مزيد من المعلومات عن أبحاثنا أو للتعاون، يرجى التواصل معنا'
            : 'For more information about our research or collaboration inquiries, please contact us'}
        </p>
        <a
          href={`/${locale}/contact?subject=research`}
          style={{
            display: 'inline-block',
            padding: '12px 40px',
            backgroundColor: royalColors.hashemiteGold,
            color: royalColors.darkNavy,
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '14px',
            fontFamily: royalTypography.fontFamily.body,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.goldBright;
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = royalColors.hashemiteGold;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {isArabic ? 'تواصل معنا' : 'Contact Us'}
        </a>
      </section>
    </div>
  );
}

// Publication Card Component
function PublicationCard({
  publication,
  isArabic,
}: {
  publication: any;
  isArabic: boolean;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isArabic) {
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      style={{
        border: `1px solid ${royalColors.borderFormal}`,
        borderRadius: '8px',
        padding: '24px',
        backgroundColor: 'white',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        e.currentTarget.style.borderColor = royalColors.hashemiteGold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        e.currentTarget.style.borderColor = royalColors.borderFormal;
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header with Type Badge and Date */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '16px',
          gap: '16px',
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 12px',
              backgroundColor: getTypeColor(publication.type),
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {publication.type}
          </span>
        </div>
        <span
          style={{
            fontSize: '13px',
            color: royalColors.textSecondary,
            fontWeight: 500,
          }}
        >
          {formatDate(publication.date)}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: royalColors.darkNavy,
          margin: '0 0 12px 0',
          lineHeight: 1.5,
          fontFamily: royalTypography.fontFamily.heading,
        }}
      >
        {publication.title}
      </h3>

      {/* Authors */}
      <p
        style={{
          fontSize: '13px',
          color: royalColors.textSecondary,
          margin: '0 0 12px 0',
          fontWeight: 500,
          fontFamily: royalTypography.fontFamily.body,
        }}
      >
        <strong>{isArabic ? 'الكتاب:' : 'Authors:'}</strong>{' '}
        {publication.authors.join(', ')}
      </p>

      {/* Publication Details */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '16px',
          fontSize: '13px',
          color: royalColors.textSecondary,
        }}
      >
        {publication.journal && (
          <div>
            <span style={{ fontWeight: 600 }}>
              {isArabic ? 'المجلة:' : 'Journal:'}
            </span>{' '}
            {publication.journal}
          </div>
        )}
        {publication.organization && (
          <div>
            <span style={{ fontWeight: 600 }}>
              {isArabic ? 'المنظمة:' : 'Organization:'}
            </span>{' '}
            {publication.organization}
          </div>
        )}
        {publication.volume && (
          <div>
            <span style={{ fontWeight: 600 }}>
              {isArabic ? 'المجلد:' : 'Volume:'}
            </span>{' '}
            {publication.volume}
            {publication.issue && `, ${isArabic ? 'العدد' : 'Issue'}: ${publication.issue}`}
          </div>
        )}
      </div>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        {publication.tags.map((tag: string) => (
          <span
            key={tag}
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              backgroundColor: royalColors.paleGold,
              color: royalColors.darkGrayText,
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Peer Review Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: isExpanded ? '16px' : '0',
          fontSize: '13px',
          fontWeight: 600,
          color: publication.peerReviewStatus.includes(isArabic ? 'محكّم' : 'Peer')
            ? royalColors.impactGreen
            : royalColors.textSecondary,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor:
              publication.peerReviewStatus.includes(isArabic ? 'محكّم' : 'Peer')
                ? royalColors.impactGreen
                : royalColors.textSecondary,
          }}
        />
        {publication.peerReviewStatus}
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div
          style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: `1px solid ${royalColors.borderSubtle}`,
          }}
        >
          {/* Abstract */}
          <div style={{ marginBottom: '20px' }}>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: royalColors.textSecondary,
                margin: '0 0 8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {isArabic ? 'الملخص' : 'Abstract'}
            </h4>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: royalColors.darkGrayText,
                margin: 0,
              }}
            >
              {publication.abstract}
            </p>
          </div>

          {/* Citation */}
          <div style={{ marginBottom: '20px' }}>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: royalColors.textSecondary,
                margin: '0 0 8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {isArabic ? 'الاقتباس' : 'Citation'}
            </h4>
            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: royalColors.darkGrayText,
                margin: 0,
                padding: '12px',
                backgroundColor: royalColors.ivoryBg,
                borderRadius: '4px',
                fontStyle: 'italic',
                wordBreak: 'break-word',
              }}
            >
              {publication.citation}
            </p>
          </div>

          {/* DOI and Download */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: isArabic ? 'flex-end' : 'flex-start',
            }}
          >
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  color: royalColors.hashemiteGold,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = royalColors.goldBright;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = royalColors.hashemiteGold;
                }}
              >
                DOI: {publication.doi}
              </a>
            )}
            <a
              href={publication.url}
              download
              style={{
                fontSize: '13px',
                color: royalColors.hashemiteGold,
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = royalColors.goldBright;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = royalColors.hashemiteGold;
              }}
            >
              {isArabic ? '📥 تنزيل PDF' : '📥 Download PDF'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// Resource Card Component
function ResourceCard({
  icon,
  title,
  description,
  url,
  isArabic,
}: {
  icon: string;
  title: string;
  description: string;
  url: string;
  isArabic: boolean;
}) {
  return (
    <a
      href={url}
      style={{
        display: 'block',
        padding: '24px',
        backgroundColor: 'white',
        border: `2px solid ${royalColors.borderFormal}`,
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = royalColors.hashemiteGold;
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = royalColors.borderFormal;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>{icon}</div>
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: royalColors.darkNavy,
          margin: '0 0 8px 0',
          fontFamily: royalTypography.fontFamily.heading,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: royalColors.textSecondary,
          margin: 0,
          lineHeight: 1.5,
          fontFamily: royalTypography.fontFamily.body,
        }}
      >
        {description}
      </p>
    </a>
  );
}

// Commitment Card Component
function CommitmentCard({
  title,
  content,
  icon,
  isArabic,
}: {
  title: string;
  content: string;
  icon: string;
  isArabic: boolean;
}) {
  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: royalColors.ivoryBg,
        border: `1px solid ${royalColors.borderFormal}`,
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: royalColors.darkNavy,
          margin: '0 0 12px 0',
          fontFamily: royalTypography.fontFamily.heading,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: royalColors.textSecondary,
          margin: 0,
          lineHeight: 1.6,
          fontFamily: royalTypography.fontFamily.body,
        }}
      >
        {content}
      </p>
    </div>
  );
}

// Helper function to get type-specific colors
function getTypeColor(type: string): string {
  if (type.includes('Academic') || type.includes('أكاديمي')) {
    return royalColors.skyBlue;
  }
  if (type.includes('White') || type.includes('بيضاء')) {
    return royalColors.darkNavy;
  }
  if (type.includes('Policy') || type.includes('موجز')) {
    return royalColors.royalBurgundy;
  }
  return royalColors.textSecondary;
}

import React from 'react';
