import type { Metadata } from 'next';
import { org, impact } from '@/content/facts';

const SITE_URL = 'https://jhco-org.vercel.app';

interface PageSeo {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

const pages: Record<string, PageSeo> = {
  home: {
    titleEn: `${org.acronym} — ${org.nameEn}`,
    titleAr: `${org.acronym} — ${org.nameAr}`,
    descriptionEn: `Official site of ${org.nameEn}. Humanitarian aid and development across ${impact.countriesServed} countries under Hashemite royal patronage since ${org.foundingYear}.`,
    descriptionAr: `الموقع الرسمي لـ${org.nameAr}. مساعدات إنسانية وتنمية في أكثر من ${impact.countriesServed} دولة تحت الرعاية الملكية الهاشمية منذ ${org.foundingYear}.`,
  },
  about: {
    titleEn: `About ${org.acronym}`,
    titleAr: `عن ${org.nameAr}`,
    descriptionEn: `Learn about ${org.nameEn} — our mission, history, values, and leadership. Serving humanity with dignity since ${org.foundingYear}.`,
    descriptionAr: `تعرف على ${org.nameAr} — مهمتنا وتاريخنا وقيمنا وقيادتنا. نخدم الإنسانية بكرامة منذ ${org.foundingYear}.`,
  },
  'about/mission': {
    titleEn: `Our Mission — ${org.acronym}`,
    titleAr: `مهمتنا — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s mission: providing humanitarian aid and sustainable development to vulnerable populations across ${impact.countriesServed} countries.`,
    descriptionAr: `مهمة ${org.acronym}: تقديم المساعدات الإنسانية والتنمية المستدامة للفئات الضعيفة في أكثر من ${impact.countriesServed} دولة.`,
  },
  'about/vision': {
    titleEn: `Our Vision — ${org.acronym}`,
    titleAr: `رؤيتنا — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s vision for humanitarian excellence and sustainable global impact.`,
    descriptionAr: `رؤية ${org.acronym} للتميز الإنساني والأثر العالمي المستدام.`,
  },
  'about/history': {
    titleEn: `Our History — ${org.acronym}`,
    titleAr: `تاريخنا — ${org.acronym}`,
    descriptionEn: `From our founding in ${org.foundingYear} to serving ${impact.familiesServed} families today — the story of ${org.nameEn}.`,
    descriptionAr: `من تأسيسنا عام ${org.foundingYear} إلى خدمة ${impact.familiesServed} أسرة اليوم — قصة ${org.nameAr}.`,
  },
  'about/leadership': {
    titleEn: `Leadership — ${org.acronym}`,
    titleAr: `القيادة — ${org.acronym}`,
    descriptionEn: `Meet the leadership team of ${org.nameEn}, guiding humanitarian excellence under royal patronage.`,
    descriptionAr: `تعرف على فريق قيادة ${org.nameAr}، الذي يقود التميز الإنساني تحت الرعاية الملكية.`,
  },
  'about/values': {
    titleEn: `Our Values — ${org.acronym}`,
    titleAr: `قيمنا — ${org.acronym}`,
    descriptionEn: `The core values guiding ${org.acronym}: compassion, excellence, integrity, inclusivity, and accountability.`,
    descriptionAr: `القيم الأساسية التي توجه ${org.acronym}: الرحمة والتميز والنزاهة والشمولية والمساءلة.`,
  },
  'about/team': {
    titleEn: `Our Team — ${org.acronym}`,
    titleAr: `فريقنا — ${org.acronym}`,
    descriptionEn: `${impact.staffCount} staff members across ${impact.countriesServed} countries, supported by ${impact.volunteersActive} volunteers.`,
    descriptionAr: `أكثر من ${impact.staffCount} موظف في ${impact.countriesServed} دولة، مدعومين من ${impact.volunteersActive} متطوع.`,
  },
  'about/awards': {
    titleEn: `Awards & Recognition — ${org.acronym}`,
    titleAr: `الجوائز والتقدير — ${org.acronym}`,
    descriptionEn: `Awards and recognition received by ${org.nameEn} for humanitarian excellence.`,
    descriptionAr: `الجوائز والتقدير التي حصلت عليها ${org.nameAr} للتميز الإنساني.`,
  },
  programs: {
    titleEn: `Programs — ${org.acronym}`,
    titleAr: `البرامج — ${org.acronym}`,
    descriptionEn: `Explore ${org.acronym}'s humanitarian programs: crisis response, healthcare, education, food security, shelter, and livelihood development.`,
    descriptionAr: `استكشف برامج ${org.acronym} الإنسانية: الاستجابة للأزمات والرعاية الصحية والتعليم والأمن الغذائي والمأوى وسبل العيش.`,
  },
  'programs/education': {
    titleEn: `Education Programs — ${org.acronym}`,
    titleAr: `برامج التعليم — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s education programs: scholarships, learning centres, and capacity building for communities.`,
    descriptionAr: `برامج التعليم في ${org.acronym}: المنح الدراسية ومراكز التعلم وبناء القدرات للمجتمعات.`,
  },
  'programs/food-aid': {
    titleEn: `Food Aid Programs — ${org.acronym}`,
    titleAr: `برامج المساعدة الغذائية — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s food security and nutrition programmes delivering aid to vulnerable communities.`,
    descriptionAr: `برامج الأمن الغذائي والتغذية في ${org.acronym} لتقديم المساعدة للمجتمعات الضعيفة.`,
  },
  'programs/clothing-bank': {
    titleEn: `Clothing Bank — ${org.acronym}`,
    titleAr: `بنك الملابس — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s clothing bank providing essential garments to families in need.`,
    descriptionAr: `بنك ملابس ${org.acronym} لتوفير الملابس الأساسية للأسر المحتاجة.`,
  },
  'programs/livelihoods': {
    titleEn: `Livelihoods Programs — ${org.acronym}`,
    titleAr: `برامج سبل العيش — ${org.acronym}`,
    descriptionEn: `Sustainable livelihood development programmes empowering communities toward economic independence.`,
    descriptionAr: `برامج تنمية سبل العيش المستدامة لتمكين المجتمعات نحو الاستقلال الاقتصادي.`,
  },
  'programs/filter': {
    titleEn: `Search Programs — ${org.acronym}`,
    titleAr: `بحث البرامج — ${org.acronym}`,
    descriptionEn: `Search and filter ${org.acronym}'s humanitarian programs by category, region, or keyword.`,
    descriptionAr: `ابحث وفلتر برامج ${org.acronym} الإنسانية حسب الفئة أو المنطقة أو الكلمة المفتاحية.`,
  },
  impact: {
    titleEn: `Our Impact — ${org.acronym}`,
    titleAr: `أثرنا — ${org.acronym}`,
    descriptionEn: `${impact.familiesServed} families served across ${impact.countriesServed} countries. Explore ${org.acronym}'s verified humanitarian impact.`,
    descriptionAr: `${impact.familiesServed} أسرة مخدومة في ${impact.countriesServed} دولة. استكشف أثر ${org.acronym} الإنساني الموثق.`,
  },
  'impact/stories': {
    titleEn: `Success Stories — ${org.acronym}`,
    titleAr: `قصص النجاح — ${org.acronym}`,
    descriptionEn: `Real stories from ${org.acronym} programme participants — documented impact in healthcare, education, and livelihood development.`,
    descriptionAr: `قصص حقيقية من المشاركين في برامج ${org.acronym} — أثر موثق في الصحة والتعليم وسبل العيش.`,
  },
  'impact/statistics': {
    titleEn: `Impact Statistics — ${org.acronym}`,
    titleAr: `إحصائيات التأثير — ${org.acronym}`,
    descriptionEn: `Verified impact data and statistics from ${org.acronym}'s humanitarian operations across ${impact.countriesServed} countries.`,
    descriptionAr: `بيانات وإحصائيات أثر موثقة من عمليات ${org.acronym} الإنسانية في ${impact.countriesServed} دولة.`,
  },
  'impact/reports': {
    titleEn: `Impact Reports — ${org.acronym}`,
    titleAr: `تقارير الأثر — ${org.acronym}`,
    descriptionEn: `Annual impact reports and programme evaluations from ${org.nameEn}.`,
    descriptionAr: `تقارير الأثر السنوية وتقييمات البرامج من ${org.nameAr}.`,
  },
  'impact/testimonials': {
    titleEn: `Testimonials — ${org.acronym}`,
    titleAr: `الشهادات — ${org.acronym}`,
    descriptionEn: `Testimonials from donors, volunteers, and programme participants about their experience with ${org.acronym}.`,
    descriptionAr: `شهادات من المتبرعين والمتطوعين والمشاركين في البرامج حول تجربتهم مع ${org.acronym}.`,
  },
  'impact/case-studies': {
    titleEn: `Case Studies — ${org.acronym}`,
    titleAr: `حالات الدراسة — ${org.acronym}`,
    descriptionEn: `In-depth case studies documenting ${org.acronym}'s programme outcomes and methodologies.`,
    descriptionAr: `دراسات حالة متعمقة توثق نتائج ومنهجيات برامج ${org.acronym}.`,
  },
  'impact/dashboard': {
    titleEn: `Impact Dashboard — ${org.acronym}`,
    titleAr: `لوحة الأثر — ${org.acronym}`,
    descriptionEn: `Real-time impact dashboard showing ${org.acronym}'s operational data and programme metrics.`,
    descriptionAr: `لوحة أثر مباشرة تعرض بيانات عمليات ${org.acronym} ومقاييس البرامج.`,
  },
  'impact/map': {
    titleEn: `Where We Work — ${org.acronym}`,
    titleAr: `أين نعمل — ${org.acronym}`,
    descriptionEn: `Interactive map of ${org.acronym}'s operations across ${impact.countriesServed} countries.`,
    descriptionAr: `خريطة تفاعلية لعمليات ${org.acronym} في ${impact.countriesServed} دولة.`,
  },
  'impact/methodology': {
    titleEn: `Impact Methodology — ${org.acronym}`,
    titleAr: `منهجية قياس الأثر — ${org.acronym}`,
    descriptionEn: `How ${org.acronym} measures, evaluates, and reports humanitarian impact.`,
    descriptionAr: `كيف يقيس ${org.acronym} الأثر الإنساني ويقيّمه ويبلّغ عنه.`,
  },
  'impact/metrics-explained': {
    titleEn: `Metrics Explained — ${org.acronym}`,
    titleAr: `شرح المقاييس — ${org.acronym}`,
    descriptionEn: `Understanding ${org.acronym}'s impact metrics and what they mean.`,
    descriptionAr: `فهم مقاييس أثر ${org.acronym} وما تعنيه.`,
  },
  'impact/publications': {
    titleEn: `Publications — ${org.acronym}`,
    titleAr: `المنشورات — ${org.acronym}`,
    descriptionEn: `Research publications and policy papers from ${org.nameEn}.`,
    descriptionAr: `المنشورات البحثية وأوراق السياسات من ${org.nameAr}.`,
  },
  'impact/sdg': {
    titleEn: `SDG Alignment — ${org.acronym}`,
    titleAr: `التوافق مع أهداف التنمية المستدامة — ${org.acronym}`,
    descriptionEn: `How ${org.acronym}'s programmes align with the UN Sustainable Development Goals.`,
    descriptionAr: `كيف تتوافق برامج ${org.acronym} مع أهداف التنمية المستدامة للأمم المتحدة.`,
  },
  news: {
    titleEn: `News — ${org.acronym}`,
    titleAr: `الأخبار — ${org.acronym}`,
    descriptionEn: `Latest news, press releases, and updates from ${org.nameEn}.`,
    descriptionAr: `آخر الأخبار والبيانات الصحفية والتحديثات من ${org.nameAr}.`,
  },
  'news/all': {
    titleEn: `All News — ${org.acronym}`,
    titleAr: `جميع الأخبار — ${org.acronym}`,
    descriptionEn: `Complete news archive from ${org.nameEn}.`,
    descriptionAr: `أرشيف الأخبار الكامل من ${org.nameAr}.`,
  },
  'news/archive': {
    titleEn: `News Archive — ${org.acronym}`,
    titleAr: `أرشيف الأخبار — ${org.acronym}`,
    descriptionEn: `Browse the full archive of ${org.acronym} news and announcements.`,
    descriptionAr: `تصفح الأرشيف الكامل لأخبار وإعلانات ${org.acronym}.`,
  },
  events: {
    titleEn: `Events — ${org.acronym}`,
    titleAr: `الأحداث — ${org.acronym}`,
    descriptionEn: `Upcoming and past events organised by ${org.nameEn}.`,
    descriptionAr: `الأحداث القادمة والسابقة التي تنظمها ${org.nameAr}.`,
  },
  blog: {
    titleEn: `Blog — ${org.acronym}`,
    titleAr: `المدونة — ${org.acronym}`,
    descriptionEn: `Insights, analysis, and stories from ${org.acronym}'s humanitarian work.`,
    descriptionAr: `رؤى وتحليلات وقصص من العمل الإنساني لـ${org.acronym}.`,
  },
  contact: {
    titleEn: `Contact Us — ${org.acronym}`,
    titleAr: `اتصل بنا — ${org.acronym}`,
    descriptionEn: `Contact ${org.nameEn}. Headquarters in Amman, Jordan. Regional offices worldwide.`,
    descriptionAr: `تواصل مع ${org.nameAr}. المقر الرئيسي في عمّان، الأردن. مكاتب إقليمية حول العالم.`,
  },
  faq: {
    titleEn: `FAQ — ${org.acronym}`,
    titleAr: `الأسئلة الشائعة — ${org.acronym}`,
    descriptionEn: `Frequently asked questions about ${org.acronym}, donations, volunteering, and programmes.`,
    descriptionAr: `الأسئلة المتكررة حول ${org.acronym} والتبرعات والتطوع والبرامج.`,
  },
  'get-involved/donate': {
    titleEn: `Donate — ${org.acronym}`,
    titleAr: `تبرع — ${org.acronym}`,
    descriptionEn: `Support ${org.acronym}'s humanitarian work. Your donation funds programmes across ${impact.countriesServed} countries.`,
    descriptionAr: `ادعم العمل الإنساني لـ${org.acronym}. تبرعك يموّل برامج في ${impact.countriesServed} دولة.`,
  },
  'get-involved/donate/emergency': {
    titleEn: `Emergency Donations — ${org.acronym}`,
    titleAr: `تبرعات الطوارئ — ${org.acronym}`,
    descriptionEn: `Urgent humanitarian appeals and emergency donation opportunities from ${org.acronym}.`,
    descriptionAr: `نداءات إنسانية عاجلة وفرص تبرع طارئ من ${org.acronym}.`,
  },
  'get-involved/donate/recurring': {
    titleEn: `Monthly Giving — ${org.acronym}`,
    titleAr: `التبرع الشهري — ${org.acronym}`,
    descriptionEn: `Set up a recurring monthly donation to support ${org.acronym}'s sustained humanitarian work.`,
    descriptionAr: `أنشئ تبرعاً شهرياً متكرراً لدعم العمل الإنساني المستمر لـ${org.acronym}.`,
  },
  'get-involved/volunteer': {
    titleEn: `Volunteer — ${org.acronym}`,
    titleAr: `تطوع — ${org.acronym}`,
    descriptionEn: `Join ${impact.volunteersActive} volunteers serving with ${org.acronym} across ${impact.countriesServed} countries.`,
    descriptionAr: `انضم إلى ${impact.volunteersActive} متطوع يخدمون مع ${org.acronym} في ${impact.countriesServed} دولة.`,
  },
  'get-involved/volunteer-opportunities': {
    titleEn: `Volunteer Opportunities — ${org.acronym}`,
    titleAr: `فرص التطوع — ${org.acronym}`,
    descriptionEn: `Browse current volunteer opportunities with ${org.nameEn}.`,
    descriptionAr: `تصفح فرص التطوع الحالية مع ${org.nameAr}.`,
  },
  'get-involved/volunteer-portal': {
    titleEn: `Volunteer Portal — ${org.acronym}`,
    titleAr: `بوابة التطوع — ${org.acronym}`,
    descriptionEn: `Access the ${org.acronym} volunteer management portal.`,
    descriptionAr: `الوصول إلى بوابة إدارة التطوع في ${org.acronym}.`,
  },
  volunteer: {
    titleEn: `Volunteer — ${org.acronym}`,
    titleAr: `تطوع — ${org.acronym}`,
    descriptionEn: `Volunteer with ${org.nameEn}. ${impact.volunteersActive} volunteers serving across ${impact.countriesServed} countries.`,
    descriptionAr: `تطوع مع ${org.nameAr}. ${impact.volunteersActive} متطوع يخدمون في ${impact.countriesServed} دولة.`,
  },
  'volunteer/testimonials': {
    titleEn: `Volunteer Stories — ${org.acronym}`,
    titleAr: `قصص المتطوعين — ${org.acronym}`,
    descriptionEn: `Stories and testimonials from ${org.acronym} volunteers worldwide.`,
    descriptionAr: `قصص وشهادات من متطوعي ${org.acronym} حول العالم.`,
  },
  'royal-patronage': {
    titleEn: `Royal Patronage — ${org.acronym}`,
    titleAr: `الرعاية الملكية — ${org.acronym}`,
    descriptionEn: `${org.nameEn} operates under the patronage of the ${org.patronageEn} since ${org.foundingYear}.`,
    descriptionAr: `تعمل ${org.nameAr} تحت رعاية ${org.patronageAr} منذ ${org.foundingYear}.`,
  },
  'royal-message': {
    titleEn: `Royal Messages — ${org.acronym}`,
    titleAr: `الرسائل الملكية — ${org.acronym}`,
    descriptionEn: `Official communications from ${org.acronym} leadership and royal patron.`,
    descriptionAr: `الاتصالات الرسمية من قيادة ${org.acronym} والراعي الملكي.`,
  },
  'royal-initiatives': {
    titleEn: `Royal Initiatives — ${org.acronym}`,
    titleAr: `المبادرات الملكية — ${org.acronym}`,
    descriptionEn: `Humanitarian initiatives under direct royal patronage and support.`,
    descriptionAr: `مبادرات إنسانية تحت الرعاية والدعم الملكي المباشر.`,
  },
  'media-center': {
    titleEn: `Media Centre — ${org.acronym}`,
    titleAr: `المركز الإعلامي — ${org.acronym}`,
    descriptionEn: `Press releases, media resources, and official communications from ${org.nameEn}.`,
    descriptionAr: `البيانات الصحفية والموارد الإعلامية والاتصالات الرسمية من ${org.nameAr}.`,
  },
  governance: {
    titleEn: `Governance — ${org.acronym}`,
    titleAr: `الحوكمة — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s governance structure, policies, and accountability framework.`,
    descriptionAr: `هيكل الحوكمة والسياسات وإطار المساءلة في ${org.acronym}.`,
  },
  'governance/board': {
    titleEn: `Board of Directors — ${org.acronym}`,
    titleAr: `مجلس الإدارة — ${org.acronym}`,
    descriptionEn: `Meet the ${org.acronym} Board of Directors and governance leadership.`,
    descriptionAr: `تعرف على مجلس إدارة ${org.acronym} وقيادة الحوكمة.`,
  },
  'governance/board-minutes': {
    titleEn: `Board Minutes — ${org.acronym}`,
    titleAr: `محاضر الاجتماعات — ${org.acronym}`,
    descriptionEn: `Official records of ${org.acronym} Board meetings and strategic decisions.`,
    descriptionAr: `السجلات الرسمية لاجتماعات مجلس إدارة ${org.acronym} والقرارات الاستراتيجية.`,
  },
  'governance/policies': {
    titleEn: `Policies — ${org.acronym}`,
    titleAr: `السياسات — ${org.acronym}`,
    descriptionEn: `Organizational policies and operational guidelines of ${org.nameEn}.`,
    descriptionAr: `السياسات التنظيمية والمبادئ التوجيهية التشغيلية لـ${org.nameAr}.`,
  },
  'governance/policies/anti-fraud': {
    titleEn: `Anti-Fraud Policy — ${org.acronym}`,
    titleAr: `سياسة مكافحة الاحتيال — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s anti-fraud and anti-corruption policy and reporting procedures.`,
    descriptionAr: `سياسة مكافحة الاحتيال والفساد وإجراءات الإبلاغ في ${org.acronym}.`,
  },
  'governance/complaints': {
    titleEn: `Complaints — ${org.acronym}`,
    titleAr: `الشكاوى — ${org.acronym}`,
    descriptionEn: `Submit a complaint or provide feedback to ${org.nameEn}.`,
    descriptionAr: `تقديم شكوى أو ملاحظة إلى ${org.nameAr}.`,
  },
  'governance/financial-disclosure': {
    titleEn: `Financial Disclosure — ${org.acronym}`,
    titleAr: `الإفصاح المالي — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s financial disclosure, revenue breakdown, and fund allocation reports.`,
    descriptionAr: `الإفصاح المالي وتوزيع الإيرادات وتقارير تخصيص الأموال في ${org.acronym}.`,
  },
  'governance/leadership': {
    titleEn: `Governance Leadership — ${org.acronym}`,
    titleAr: `قيادة الحوكمة — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s governance leadership and management structure.`,
    descriptionAr: `قيادة الحوكمة والهيكل الإداري في ${org.acronym}.`,
  },
  'governance/registration': {
    titleEn: `Registration — ${org.acronym}`,
    titleAr: `التسجيل — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s legal registration status and regulatory compliance.`,
    descriptionAr: `حالة التسجيل القانوني والامتثال التنظيمي لـ${org.acronym}.`,
  },
  'governance/structure': {
    titleEn: `Organisation Structure — ${org.acronym}`,
    titleAr: `الهيكل التنظيمي — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s organisational structure, departments, and reporting lines.`,
    descriptionAr: `الهيكل التنظيمي والأقسام وخطوط الإبلاغ في ${org.acronym}.`,
  },
  'governance/whistleblower': {
    titleEn: `Whistleblower Policy — ${org.acronym}`,
    titleAr: `سياسة الإبلاغ عن المخالفات — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s whistleblower protection policy and safe reporting channels.`,
    descriptionAr: `سياسة حماية المبلّغين وقنوات الإبلاغ الآمنة في ${org.acronym}.`,
  },
  'financial-reports': {
    titleEn: `Financial Reports — ${org.acronym}`,
    titleAr: `التقارير المالية — ${org.acronym}`,
    descriptionEn: `Annual financial reports and audited accounts of ${org.nameEn}.`,
    descriptionAr: `التقارير المالية السنوية والحسابات المدققة لـ${org.nameAr}.`,
  },
  compliance: {
    titleEn: `Compliance — ${org.acronym}`,
    titleAr: `الامتثال — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s regulatory compliance, certifications, and industry standards.`,
    descriptionAr: `الامتثال التنظيمي والشهادات والمعايير الصناعية في ${org.acronym}.`,
  },
  transparency: {
    titleEn: `Transparency — ${org.acronym}`,
    titleAr: `الشفافية — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s commitment to transparency in operations, finances, and governance.`,
    descriptionAr: `التزام ${org.acronym} بالشفافية في العمليات والمالية والحوكمة.`,
  },
  'code-of-conduct': {
    titleEn: `Code of Conduct — ${org.acronym}`,
    titleAr: `مدونة السلوك — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s code of conduct for staff, volunteers, and partners.`,
    descriptionAr: `مدونة سلوك ${org.acronym} للموظفين والمتطوعين والشركاء.`,
  },
  'legal/privacy': {
    titleEn: `Privacy Policy — ${org.acronym}`,
    titleAr: `سياسة الخصوصية — ${org.acronym}`,
    descriptionEn: `How ${org.nameEn} collects, uses, and protects your personal information.`,
    descriptionAr: `كيف تجمع ${org.nameAr} معلوماتك الشخصية وتستخدمها وتحميها.`,
  },
  'legal/terms': {
    titleEn: `Terms of Service — ${org.acronym}`,
    titleAr: `شروط الخدمة — ${org.acronym}`,
    descriptionEn: `Terms and conditions for using ${org.acronym}'s website and services.`,
    descriptionAr: `الشروط والأحكام لاستخدام موقع ${org.acronym} وخدماته.`,
  },
  'legal/accessibility': {
    titleEn: `Accessibility — ${org.acronym}`,
    titleAr: `إمكانية الوصول — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s commitment to web accessibility and inclusive design.`,
    descriptionAr: `التزام ${org.acronym} بإمكانية الوصول إلى الويب والتصميم الشامل.`,
  },
  'legal/conduct': {
    titleEn: `Legal Conduct — ${org.acronym}`,
    titleAr: `السلوك القانوني — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s legal conduct guidelines and ethical standards.`,
    descriptionAr: `إرشادات السلوك القانوني والمعايير الأخلاقية في ${org.acronym}.`,
  },
  'legal/disclosure': {
    titleEn: `Legal Disclosure — ${org.acronym}`,
    titleAr: `الإفصاح القانوني — ${org.acronym}`,
    descriptionEn: `Legal disclosures and regulatory information for ${org.nameEn}.`,
    descriptionAr: `الإفصاحات القانونية والمعلومات التنظيمية لـ${org.nameAr}.`,
  },
  'legal/trafficking': {
    titleEn: `Anti-Trafficking Policy — ${org.acronym}`,
    titleAr: `سياسة مكافحة الاتجار — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s policy on preventing human trafficking and modern slavery.`,
    descriptionAr: `سياسة ${org.acronym} في منع الاتجار بالبشر والعبودية الحديثة.`,
  },
  partners: {
    titleEn: `Partners — ${org.acronym}`,
    titleAr: `الشركاء — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s partnerships with UN agencies, governments, and international organisations.`,
    descriptionAr: `شراكات ${org.acronym} مع وكالات الأمم المتحدة والحكومات والمنظمات الدولية.`,
  },
  'partners/apply': {
    titleEn: `Partnership Application — ${org.acronym}`,
    titleAr: `طلب شراكة — ${org.acronym}`,
    descriptionEn: `Apply to partner with ${org.nameEn}. Organisational collaboration opportunities.`,
    descriptionAr: `تقدم للشراكة مع ${org.nameAr}. فرص تعاون مؤسسي.`,
  },
  'where-we-work': {
    titleEn: `Where We Work — ${org.acronym}`,
    titleAr: `أين نعمل — ${org.acronym}`,
    descriptionEn: `${org.acronym} serves ${impact.countriesServed} countries across four continents.`,
    descriptionAr: `تخدم ${org.acronym} أكثر من ${impact.countriesServed} دولة عبر أربع قارات.`,
  },
  'staff-directory': {
    titleEn: `Staff Directory — ${org.acronym}`,
    titleAr: `دليل الموظفين — ${org.acronym}`,
    descriptionEn: `Browse ${org.acronym}'s staff directory by department and role.`,
    descriptionAr: `تصفح دليل موظفي ${org.acronym} حسب القسم والوظيفة.`,
  },
  'office-locations': {
    titleEn: `Office Locations — ${org.acronym}`,
    titleAr: `مواقع المكاتب — ${org.acronym}`,
    descriptionEn: `${org.acronym} office locations: headquarters in Amman and regional offices worldwide.`,
    descriptionAr: `مواقع مكاتب ${org.acronym}: المقر الرئيسي في عمّان ومكاتب إقليمية حول العالم.`,
  },
  newsletter: {
    titleEn: `Newsletter — ${org.acronym}`,
    titleAr: `النشرة الإخبارية — ${org.acronym}`,
    descriptionEn: `Subscribe to ${org.acronym}'s newsletter for programme updates and impact reports.`,
    descriptionAr: `اشترك في النشرة الإخبارية لـ${org.acronym} لتلقي تحديثات البرامج وتقارير الأثر.`,
  },
  'food-security': {
    titleEn: `Food Security — ${org.acronym}`,
    titleAr: `الأمن الغذائي — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s food security programmes providing nutrition support and sustainable food systems.`,
    descriptionAr: `برامج الأمن الغذائي في ${org.acronym} لتوفير الدعم الغذائي والأنظمة الغذائية المستدامة.`,
  },
  'donor-faq': {
    titleEn: `Donor FAQ — ${org.acronym}`,
    titleAr: `أسئلة المتبرعين — ${org.acronym}`,
    descriptionEn: `Frequently asked questions for ${org.acronym} donors about giving, receipts, and impact.`,
    descriptionAr: `الأسئلة المتكررة لمتبرعي ${org.acronym} حول التبرع والإيصالات والأثر.`,
  },
  'donor-portal': {
    titleEn: `Donor Portal — ${org.acronym}`,
    titleAr: `بوابة المتبرعين — ${org.acronym}`,
    descriptionEn: `Access your ${org.acronym} donor account, giving history, and tax receipts.`,
    descriptionAr: `الوصول إلى حسابك كمتبرع في ${org.acronym} وسجل التبرعات والإيصالات الضريبية.`,
  },
  'donor-resources': {
    titleEn: `Donor Resources — ${org.acronym}`,
    titleAr: `موارد المتبرعين — ${org.acronym}`,
    descriptionEn: `Resources for ${org.acronym} donors: impact reports, tax information, and giving guides.`,
    descriptionAr: `موارد لمتبرعي ${org.acronym}: تقارير الأثر والمعلومات الضريبية وأدلة التبرع.`,
  },
  'recurring-donations': {
    titleEn: `Recurring Donations — ${org.acronym}`,
    titleAr: `التبرعات المتكررة — ${org.acronym}`,
    descriptionEn: `Set up recurring donations to support ${org.acronym}'s sustained humanitarian work.`,
    descriptionAr: `أنشئ تبرعات متكررة لدعم العمل الإنساني المستمر لـ${org.acronym}.`,
  },
  'emergency-alerts': {
    titleEn: `Emergency Alerts — ${org.acronym}`,
    titleAr: `تنبيهات الطوارئ — ${org.acronym}`,
    descriptionEn: `Active emergency alerts and humanitarian appeals from ${org.nameEn}.`,
    descriptionAr: `تنبيهات الطوارئ النشطة والنداءات الإنسانية من ${org.nameAr}.`,
  },
  give: {
    titleEn: `Give — ${org.acronym}`,
    titleAr: `العطاء — ${org.acronym}`,
    descriptionEn: `Ways to give to ${org.nameEn}: one-time, monthly, corporate, in-kind, and legacy giving.`,
    descriptionAr: `طرق العطاء لـ${org.nameAr}: تبرع لمرة واحدة، شهري، مؤسسي، عيني، وإرث.`,
  },
  'give/corporate': {
    titleEn: `Corporate Giving — ${org.acronym}`,
    titleAr: `العطاء المؤسسي — ${org.acronym}`,
    descriptionEn: `Corporate partnership and CSR opportunities with ${org.nameEn}.`,
    descriptionAr: `فرص الشراكة المؤسسية والمسؤولية الاجتماعية مع ${org.nameAr}.`,
  },
  'give/fundraise': {
    titleEn: `Fundraise — ${org.acronym}`,
    titleAr: `جمع التبرعات — ${org.acronym}`,
    descriptionEn: `Start your own fundraising campaign to support ${org.acronym}'s humanitarian programmes.`,
    descriptionAr: `ابدأ حملة جمع تبرعات خاصة بك لدعم برامج ${org.acronym} الإنسانية.`,
  },
  'give/in-kind': {
    titleEn: `In-Kind Donations — ${org.acronym}`,
    titleAr: `التبرعات العينية — ${org.acronym}`,
    descriptionEn: `Donate goods and services to support ${org.acronym}'s humanitarian operations.`,
    descriptionAr: `تبرع بالسلع والخدمات لدعم العمليات الإنسانية لـ${org.acronym}.`,
  },
  'give/legacy': {
    titleEn: `Legacy Giving — ${org.acronym}`,
    titleAr: `التبرع بالإرث — ${org.acronym}`,
    descriptionEn: `Leave a lasting legacy by including ${org.nameEn} in your estate plans.`,
    descriptionAr: `اترك إرثاً دائماً بتضمين ${org.nameAr} في خطط إرثك.`,
  },
  'give/monthly-giving': {
    titleEn: `Monthly Giving — ${org.acronym}`,
    titleAr: `العطاء الشهري — ${org.acronym}`,
    descriptionEn: `Join ${org.acronym}'s monthly giving programme for sustained humanitarian impact.`,
    descriptionAr: `انضم إلى برنامج العطاء الشهري في ${org.acronym} لأثر إنساني مستدام.`,
  },
  'give/workplace-giving': {
    titleEn: `Workplace Giving — ${org.acronym}`,
    titleAr: `العطاء في مكان العمل — ${org.acronym}`,
    descriptionEn: `Workplace giving and payroll deduction programmes with ${org.nameEn}.`,
    descriptionAr: `برامج العطاء في مكان العمل واستقطاعات الرواتب مع ${org.nameAr}.`,
  },
  'give/plans': {
    titleEn: `Giving Plans — ${org.acronym}`,
    titleAr: `خطط العطاء — ${org.acronym}`,
    descriptionEn: `Structured giving plans for individuals and organisations supporting ${org.acronym}.`,
    descriptionAr: `خطط عطاء منظمة للأفراد والمؤسسات الداعمة لـ${org.acronym}.`,
  },
  research: {
    titleEn: `Research — ${org.acronym}`,
    titleAr: `الأبحاث — ${org.acronym}`,
    descriptionEn: `Research publications and evidence-based analysis from ${org.nameEn}.`,
    descriptionAr: `منشورات البحث والتحليل القائم على الأدلة من ${org.nameAr}.`,
  },
  learning: {
    titleEn: `Learning — ${org.acronym}`,
    titleAr: `التعلم — ${org.acronym}`,
    descriptionEn: `Online courses and learning resources from ${org.nameEn}.`,
    descriptionAr: `دورات عبر الإنترنت وموارد تعليمية من ${org.nameAr}.`,
  },
  podcast: {
    titleEn: `Podcast — ${org.acronym}`,
    titleAr: `البودكاست — ${org.acronym}`,
    descriptionEn: `Listen to ${org.acronym}'s podcast on humanitarian issues and programme stories.`,
    descriptionAr: `استمع إلى بودكاست ${org.acronym} حول القضايا الإنسانية وقصص البرامج.`,
  },
  support: {
    titleEn: `Support — ${org.acronym}`,
    titleAr: `الدعم — ${org.acronym}`,
    descriptionEn: `Get help and support from ${org.nameEn}.`,
    descriptionAr: `احصل على المساعدة والدعم من ${org.nameAr}.`,
  },
  suppliers: {
    titleEn: `Suppliers — ${org.acronym}`,
    titleAr: `الموردون — ${org.acronym}`,
    descriptionEn: `Supplier information and procurement guidelines for ${org.nameEn}.`,
    descriptionAr: `معلومات الموردين وإرشادات المشتريات لـ${org.nameAr}.`,
  },
  apps: {
    titleEn: `Mobile Apps — ${org.acronym}`,
    titleAr: `التطبيقات — ${org.acronym}`,
    descriptionEn: `Download ${org.acronym}'s mobile apps for iOS and Android.`,
    descriptionAr: `حمّل تطبيقات ${org.acronym} للهواتف المحمولة.`,
  },
  'apps/ios': {
    titleEn: `iOS App — ${org.acronym}`,
    titleAr: `تطبيق iOS — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s official iOS application.`,
    descriptionAr: `التطبيق الرسمي لـ${org.acronym} على iOS.`,
  },
  'apps/android': {
    titleEn: `Android App — ${org.acronym}`,
    titleAr: `تطبيق Android — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s official Android application.`,
    descriptionAr: `التطبيق الرسمي لـ${org.acronym} على Android.`,
  },
  'resources/gallery': {
    titleEn: `Photo Gallery — ${org.acronym}`,
    titleAr: `معرض الصور — ${org.acronym}`,
    descriptionEn: `Photo gallery from ${org.acronym}'s humanitarian operations and events.`,
    descriptionAr: `معرض صور من العمليات الإنسانية والأحداث في ${org.acronym}.`,
  },
  'resources/guides': {
    titleEn: `Guides — ${org.acronym}`,
    titleAr: `الأدلة — ${org.acronym}`,
    descriptionEn: `Guides and resources from ${org.nameEn}.`,
    descriptionAr: `أدلة وموارد من ${org.nameAr}.`,
  },
  'resources/videos': {
    titleEn: `Videos — ${org.acronym}`,
    titleAr: `الفيديوهات — ${org.acronym}`,
    descriptionEn: `Video content from ${org.acronym}'s programmes and humanitarian operations.`,
    descriptionAr: `محتوى فيديو من برامج ${org.acronym} والعمليات الإنسانية.`,
  },
  'regions/africa': {
    titleEn: `Africa Operations — ${org.acronym}`,
    titleAr: `العمليات في أفريقيا — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s humanitarian operations across the African continent.`,
    descriptionAr: `العمليات الإنسانية لـ${org.acronym} عبر القارة الأفريقية.`,
  },
  'regions/americas': {
    titleEn: `Americas Operations — ${org.acronym}`,
    titleAr: `العمليات في الأمريكتين — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s humanitarian operations in the Americas.`,
    descriptionAr: `العمليات الإنسانية لـ${org.acronym} في الأمريكتين.`,
  },
  'regions/asia': {
    titleEn: `Asia Operations — ${org.acronym}`,
    titleAr: `العمليات في آسيا — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s humanitarian operations across Asia and the Pacific.`,
    descriptionAr: `العمليات الإنسانية لـ${org.acronym} عبر آسيا والمحيط الهادئ.`,
  },
  'regions/europe': {
    titleEn: `Europe Operations — ${org.acronym}`,
    titleAr: `العمليات في أوروبا — ${org.acronym}`,
    descriptionEn: `${org.acronym}'s humanitarian operations in Europe.`,
    descriptionAr: `العمليات الإنسانية لـ${org.acronym} في أوروبا.`,
  },
  account: {
    titleEn: `My Account — ${org.acronym}`,
    titleAr: `حسابي — ${org.acronym}`,
    descriptionEn: `Manage your ${org.acronym} account settings and preferences.`,
    descriptionAr: `إدارة إعدادات وتفضيلات حسابك في ${org.acronym}.`,
  },
  'account/profile': {
    titleEn: `Profile — ${org.acronym}`,
    titleAr: `الملف الشخصي — ${org.acronym}`,
    descriptionEn: `View and edit your ${org.acronym} profile.`,
    descriptionAr: `عرض وتعديل ملفك الشخصي في ${org.acronym}.`,
  },
  'account/preferences': {
    titleEn: `Preferences — ${org.acronym}`,
    titleAr: `التفضيلات — ${org.acronym}`,
    descriptionEn: `Manage your ${org.acronym} notification and communication preferences.`,
    descriptionAr: `إدارة تفضيلات الإشعارات والتواصل في ${org.acronym}.`,
  },
  'account/security': {
    titleEn: `Security — ${org.acronym}`,
    titleAr: `الأمان — ${org.acronym}`,
    descriptionEn: `Manage your ${org.acronym} account security settings.`,
    descriptionAr: `إدارة إعدادات أمان حسابك في ${org.acronym}.`,
  },
  'account/settings': {
    titleEn: `Settings — ${org.acronym}`,
    titleAr: `الإعدادات — ${org.acronym}`,
    descriptionEn: `Manage your ${org.acronym} account settings.`,
    descriptionAr: `إدارة إعدادات حسابك في ${org.acronym}.`,
  },
  'communication-preferences': {
    titleEn: `Communication Preferences — ${org.acronym}`,
    titleAr: `تفضيلات التواصل — ${org.acronym}`,
    descriptionEn: `Manage how ${org.nameEn} communicates with you.`,
    descriptionAr: `إدارة طريقة تواصل ${org.nameAr} معك.`,
  },
  'volunteer-portal': {
    titleEn: `Volunteer Portal — ${org.acronym}`,
    titleAr: `بوابة المتطوعين — ${org.acronym}`,
    descriptionEn: `Access the ${org.acronym} volunteer management portal.`,
    descriptionAr: `الوصول إلى بوابة إدارة المتطوعين في ${org.acronym}.`,
  },
  'programs/impact': {
    titleEn: `Programme Impact — ${org.acronym}`,
    titleAr: `أثر البرامج — ${org.acronym}`,
    descriptionEn: `Measured impact across ${org.acronym}'s humanitarian programmes.`,
    descriptionAr: `الأثر المقاس عبر البرامج الإنسانية لـ${org.acronym}.`,
  },
  'careers/culture': {
    titleEn: `Our Culture — ${org.acronym}`,
    titleAr: `ثقافتنا — ${org.acronym}`,
    descriptionEn: `Life and culture at ${org.nameEn} — what it's like to work with us.`,
    descriptionAr: `الحياة والثقافة في ${org.nameAr} — كيف يبدو العمل معنا.`,
  },
  'careers/internships': {
    titleEn: `Internships — ${org.acronym}`,
    titleAr: `برامج التدريب — ${org.acronym}`,
    descriptionEn: `Internship opportunities at ${org.nameEn}.`,
    descriptionAr: `فرص التدريب في ${org.nameAr}.`,
  },
  dashboard: {
    titleEn: `Dashboard — ${org.acronym}`,
    titleAr: `لوحة التحكم — ${org.acronym}`,
    descriptionEn: `${org.acronym} operational dashboard.`,
    descriptionAr: `لوحة التحكم التشغيلية لـ${org.acronym}.`,
  },
};

export function generatePageMetadata(
  pageKey: string,
  locale: string,
): Metadata {
  const ar = locale === 'ar';
  const page = pages[pageKey];

  const fallbackTitle = ar
    ? `${humanize(pageKey)} — ${org.acronym}`
    : `${humanize(pageKey)} — ${org.acronym}`;
  const fallbackDesc = ar
    ? `${org.nameAr} — مساعدات إنسانية وتنمية مستدامة`
    : `${org.nameEn} — humanitarian aid and sustainable development`;

  const title = page ? (ar ? page.titleAr : page.titleEn) : fallbackTitle;
  const description = page
    ? ar
      ? page.descriptionAr
      : page.descriptionEn
    : fallbackDesc;

  const otherLocale = ar ? 'en' : 'ar';
  const path = pageKey === 'home' ? '' : `/${pageKey}`;
  const canonical = `${SITE_URL}/${locale}${path}`;
  const alternate = `${SITE_URL}/${otherLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${path}`,
        ar: `${SITE_URL}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: org.nameEn,
      locale: ar ? 'ar_JO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function humanize(key: string): string {
  return key
    .split('/')
    .pop()!
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
