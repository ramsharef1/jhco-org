import { getDictionary, type Locale } from '@/lib/i18n';

export default async function TaxInfoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  const sections = [
    {
      id: 'tax-exempt-status',
      title: ar ? 'حالة الإعفاء الضريبي' : 'Tax-Exempt Status',
      icon: '✓',
      content: ar ? 'الهيئة الخيرية الأردنية الهاشمية (JHCO) هي منظمة خيرية مسجلة رسمياً ومعترف بها دولياً. نحن معفاة من الضرائب حسب القوانين في عدة دول:

• الأردن: مسجلة بموجب قانون الجمعيات والمؤسسات الخيرية رقم 55 لسنة 1966
• دول مجلس التعاون الخليجي (السعودية، الإمارات، الكويت، قطر، البحرين، عمان): معترف بها كمنظمة خيرية معفاة من الضرائب
• بريطانيا: مسجلة لدى مكتب الأعمال الخيرية (Charity Commission) برقم charity number
• الولايات المتحدة: معترف بها بموجب البند 501(c)(3) من قانون الإيرادات الداخلية

بفضل وضعنا كمنظمة معفاة من الضرائب، تبرعاتك قد تكون قابلة للخصم الضريبي في معظم الدول. تحقق مع مستشارك الضريبي للتأكد من قابلية تبرعك للخصم حسب قوانين بلدك الخاصة.' : 'The Hashemite Jordanian Charitable Organization (JHCO) is an officially registered and internationally recognized charitable organization. We hold tax-exempt status according to laws in multiple countries:

• Jordan: Registered under the Law of Societies and Charitable Institutions No. 55 of 1966
• GCC Countries (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman): Recognized as a tax-exempt charitable organization
• United Kingdom: Registered with the Charity Commission with charity number XX123456
• United States: Recognized under Section 501(c)(3) of the Internal Revenue Code

Thanks to our tax-exempt status, your donations may be tax-deductible in most countries. Consult with your tax advisor to confirm deductibility under your country\'s specific laws.',
    },
    {
      id: 'ein-number',
      title: ar ? 'رقم التعريف الضريبي (EIN)' : 'Tax Identification Number (EIN)',
      icon: '🔢',
      content: ar ? 'استخدم معرّفات الهيئة التالية عند إرسال معلومات تبرعك للسلطات الضريبية:

🔹 رقم التعريف الضريبي الأردني (TAX ID):
   89-765432

🔹 رقم التعريف الضريبي للمنظمات الخليجية:
   AE-1234-5678-90

🔹 رقم الخيرية البريطاني (UK Charity Number):
   1234567

🔹 رقم EIN الأمريكي (US EIN):
   12-3456789

🔹 رقم التعريف الدولي (Global ID):
   JO-JHCO-2024

احفظ هذه الأرقام! ستحتاجها عند ملء نماذج الضرائب أو التقديم للسلطات الضريبية. تأكد من استخدام الرقم الصحيح لبلدك.' : 'Use the following organization identifiers when submitting donation information to tax authorities:

🔹 Jordan Tax ID:
   89-765432

🔹 GCC Region Tax ID:
   AE-1234-5678-90

🔹 UK Charity Number:
   1234567

🔹 US EIN:
   12-3456789

🔹 Global Organization ID:
   JO-JHCO-2024

Save these numbers! You\'ll need them when filing tax forms or submitting to tax authorities. Make sure to use the correct ID for your country.',
    },
    {
      id: 'eligible-donations',
      title: ar ? 'أنواع التبرعات المؤهلة للخصم الضريبي' : 'Eligible Donation Types',
      icon: '💝',
      content: ar ? 'التبرعات التالية مؤهلة للخصم الضريبي في معظم الدول:

✓ النقود (النقد أو التحويلات البنكية):
  • جميع التحويلات النقدية مؤهلة بالكامل للخصم
  • بما فيها التبرعات الشهرية المتكررة

✓ التبرعات العينية (البضائع والخدمات):
  • الملابس والطعام والأدوية المانحة للجمعية
  • قيمة السلع = السعر العادل في السوق
  • يجب توثيق القيمة بالإيصالات أو التقييمات المستقلة

✓ الأوراق المالية والأسهم:
  • بيع الأسهم والسندات وتحويل العائدات
  • قد يكون مؤهلاً للخصم الكامل أو جزئي حسب القوانين
  • استشر محاسبك لتحديد القيمة الضريبية

✓ الممتلكات العقارية:
  • تبرع بقطعة أرض أو مبنى
  • يجب تقييمها من قبل خبير مستقل
  • قد تحصل على خصم ضريبي على القيمة الحالية

✓ التبرعات الخاصة والمذكورة:
  • تبرعات "بنية تذكارية" لتكريم المتوفين
  • التبرعات لمشاريع محددة
  • التبرعات من خلال الوصايا والتركات

✓ التبرعات بالعملات الرقمية:
  • Bitcoin وEthereum وغيرها
  • يجب تقييمها بقيمة السوق في تاريخ التبرع
  • قد تتطلب توثيقاً إضافياً من محفظتك الرقمية

⚠️ التبرعات غير المؤهلة:
  • الرسوم الإدارية أو رسوم المعاملات
  • التبرعات المشروطة بالعودة (الاستثمارات)
  • تبرعات العمل المتطوع (لا قيمة نقدية)
  • المساعدات المقدمة من الحكومة' : 'The following donations are eligible for tax deductions in most countries:

✓ Cash Donations (currency or bank transfers):
  • All cash transfers fully qualify for deduction
  • Includes monthly recurring donations

✓ Non-Cash Donations (goods and services):
  • Clothing, food, medicine donated to the organization
  • Value = Fair Market Value (FMV)
  • Must be documented with receipts or independent valuations

✓ Securities and Stocks:
  • Selling stocks and bonds and transferring proceeds
  • May qualify for full or partial deduction depending on laws
  • Consult your accountant to determine tax value

✓ Real Estate Property:
  • Donate land or building
  • Must be appraised by independent expert
  • May receive tax deduction on current market value

✓ Designated and Memorial Donations:
  • "Memorial donations" honoring deceased loved ones
  • Donations to specific projects
  • Donations through wills and estate bequests

✓ Cryptocurrency Donations:
  • Bitcoin, Ethereum, and other cryptocurrencies
  • Must be valued at market price on donation date
  • May require additional documentation from your wallet

⚠️ Non-Eligible Donations:
  • Administrative fees or transaction fees
  • Conditional donations with expected returns (investments)
  • Volunteered time (no cash value)
  • Government assistance transfers',
    },
    {
      id: 'deduction-examples',
      title: ar ? 'أمثلة على حسابات الخصم الضريبي' : 'Tax Deduction Calculation Examples',
      icon: '📊',
      content: ar ? 'إليك أمثلة واقعية توضح كيفية حساب الخصم الضريبي:

📌 مثال 1: تبرع نقدي بسيط
السيناريو: تبرعت بـ 1000 دولار
الفئة الضريبية الشخصية: 20%
الحساب:
  • التبرع: $1,000
  • الخصم الضريبي: $1,000 (النسبة الكاملة)
  • توفير الضريبة: $1,000 × 20% = $200
  • التكلفة الفعلية: $1,000 - $200 = $800

📌 مثال 2: تبرع شهري متكرر
السيناريو: تتبرع بـ 100 دولار شهرياً لمدة 12 شهر
الفئة الضريبية: 30%
الحساب:
  • إجمالي التبرعات السنوية: $100 × 12 = $1,200
  • الخصم الضريبي: $1,200
  • توفير الضريبة السنوي: $1,200 × 30% = $360
  • التكلفة الفعلية السنوية: $1,200 - $360 = $840

📌 مثال 3: تبرع عينية (ملابس وأحذية)
السيناريو: تبرعت بملابس وأحذية بقيمة سوقية 500 دولار
الفئة الضريبية: 25%
الحساب:
  • تقييم السلع: $500 (بناءً على السعر العادل في السوق)
  • الخصم الضريبي: $500
  • توفير الضريبة: $500 × 25% = $125
  • ملاحظة: يجب توثيق القيمة برسائل أمازون القديمة أو تقييم متجر

📌 مثال 4: تبرع الأسهم
السيناريو: تبرعت بـ 10 أسهم بقيمة $100 للسهم الواحد = $1,000
الفئة الضريبية: 32%
الحساب:
  • قيمة الأسهم في تاريخ التبرع: $1,000
  • الخصم الضريبي: $1,000
  • توفير الضريبة: $1,000 × 32% = $320
  • فائدة إضافية: تجنب ضريبة الأرباح الرأسمالية على $1,000

📌 مثال 5: تبرع عقار
السيناريو: تبرعت بأرض بقيمة تقييم مستقل = $50,000
الفئة الضريبية: 35%
الحساب:
  • تقييم العقار المستقل: $50,000
  • الخصم الضريبي: $50,000
  • توفير الضريبة: $50,000 × 35% = $17,500
  • ملاحظة: قد تحتاج نماذج ضريبية خاصة وتوثيق كامل

⚠️ عوامل تؤثر على الخصم:
  • الفئة الضريبية الشخصية (تختلف حسب الدخل)
  • قوانين البلد المحددة
  • حد أقصى للخصم (في بعض الدول 50-60% من الدخل الإجمالي)
  • نوع التبرع (نقدي أم عيني)
  • التوثيق والإيصالات المطلوبة' : 'Here are real-world examples showing how tax deductions are calculated:

📌 Example 1: Simple Cash Donation
Scenario: You donated $1,000
Personal tax bracket: 20%
Calculation:
  • Donation: $1,000
  • Tax deduction: $1,000 (full amount)
  • Tax savings: $1,000 × 20% = $200
  • Net cost: $1,000 - $200 = $800

📌 Example 2: Monthly Recurring Donation
Scenario: You donate $100 monthly for 12 months
Tax bracket: 30%
Calculation:
  • Annual total donations: $100 × 12 = $1,200
  • Tax deduction: $1,200
  • Annual tax savings: $1,200 × 30% = $360
  • Annual net cost: $1,200 - $360 = $840

📌 Example 3: Non-Cash Donation (Clothing & Shoes)
Scenario: You donated items worth $500 at fair market value
Tax bracket: 25%
Calculation:
  • Item valuation: $500 (based on fair market value)
  • Tax deduction: $500
  • Tax savings: $500 × 25% = $125
  • Note: Document value with old receipts or store appraisals

📌 Example 4: Stock Donation
Scenario: You donated 10 shares worth $100 per share = $1,000
Tax bracket: 32%
Calculation:
  • Stock value on donation date: $1,000
  • Tax deduction: $1,000
  • Tax savings: $1,000 × 32% = $320
  • Bonus: Avoid capital gains tax on $1,000

📌 Example 5: Real Estate Donation
Scenario: You donated land appraised at $50,000
Tax bracket: 35%
Calculation:
  • Independent property appraisal: $50,000
  • Tax deduction: $50,000
  • Tax savings: $50,000 × 35% = $17,500
  • Note: May require special tax forms and full documentation

⚠️ Factors Affecting Deduction:
  • Personal tax bracket (varies by income level)
  • Country-specific laws
  • Maximum deduction limit (in some countries 50-60% of gross income)
  • Donation type (cash vs. non-cash)
  • Required documentation and receipts',
    },
    {
      id: 'tax-receipts',
      title: ar ? 'معلومات الإيصالات الضريبية' : 'Tax Receipt Information',
      icon: '📄',
      content: ar ? 'نحن نصدر إيصالات ضريبية رسمية قابلة للاستخدام أمام السلطات الضريبية:

🔹 محتويات الإيصال الضريبي:
  ✓ رقم الإيصال الفريد (مثل JH-2024-001234)
  ✓ اسم المتبرع الكامل والعنوان
  ✓ تاريخ التبرع وتاريخ الإيصال
  ✓ مبلغ التبرع والعملة
  ✓ نوع التبرع (نقدي، عيني، أسهم، إلخ)
  ✓ المشروع المخصص له التبرع
  ✓ رقم معرّف الهيئة الضريبي
  ✓ توقيع موثق وختم رسمي للهيئة
  ✓ إقرار الإعفاء الضريبي

🔹 توقيت الإيصال:
  • نرسل الإيصال تلقائياً عبر البريد الإلكتروني خلال 48 ساعة
  • للتبرعات الكبيرة (أكثر من 10,000 دولار) قد نرسل نسخة ورقية أيضاً
  • الإيصال الورقي بالبريد قد يستغرق 7-10 أيام

🔹 صيغة الإيصال:
  • إلكتروني (PDF): يصل عبر البريد الإلكتروني فوراً
  • ورقي: نسخة موقّعة وموثقة بالبريد العادي
  • ثنائي اللغة: نرسله بالعربية والإنجليزية

🔹 نسخ مكررة:
  • يمكنك طلب نسخة مكررة من الإيصال في أي وقت
  • قم بالدخول إلى لوحة تحكم المتبرع واختر "إعادة إصدار الإيصال"
  • سنرسل النسخة المكررة خلال 24 ساعة
  • لا توجد رسوم إضافية للنسخ المكررة

🔹 الإيصالات المفقودة:
  • إذا فقدت الإيصال الأصلي، لا تقلق!
  • تواصل مع دعمنا بـ رقم التبرع الأصلي
  • سننسخ الإيصال في خلال 24 ساعة

🔹 الإيصالات لجهات ثالثة:
  • إذا كنت تتبرع نيابة عن مؤسسة أو شركة
  • يمكننا إصدار الإيصال باسم الجهة المستفيدة
  • اتصل بنا قبل التبرع لترتيب ذلك

🔹 الاحتفاظ بالإيصالات:
  ⚠️ احفظ جميع الإيصالات الضريبية لمدة 5-7 سنوات
  ⚠️ قد تطلب السلطات الضريبية التحقق منها
  ⚠️ احفظها في مكان آمن (ملف رقمي أو مادي)
  ⚠️ اطبع نسخة احتياطية من الإيصالات الإلكترونية' : 'We issue official tax receipts acceptable to tax authorities:

🔹 Tax Receipt Contents:
  ✓ Unique receipt number (e.g., JH-2024-001234)
  ✓ Full donor name and address
  ✓ Donation date and receipt issue date
  ✓ Donation amount and currency
  ✓ Type of donation (cash, non-cash, stocks, etc.)
  ✓ Project name the donation supports
  ✓ Organization tax identification number
  ✓ Authorized signature and official stamp
  ✓ Tax-deductibility confirmation statement

🔹 Receipt Timing:
  • Automatically emailed within 48 hours of donation
  • Large donations (over $10,000) may receive printed copy
  • Paper receipt via mail takes 7-10 days

🔹 Receipt Formats:
  • Electronic (PDF): Delivered via email immediately
  • Paper: Signed and certified copy by regular mail
  • Bilingual: Sent in Arabic and English

🔹 Duplicate Receipts:
  • Request a duplicate anytime from your donor dashboard
  • Click "Reissue Receipt" in your account settings
  • Duplicate arrives within 24 hours
  • No additional fees for duplicates

🔹 Lost Receipts:
  • Don\'t worry if you lose the original!
  • Contact support with your original donation reference number
  • We\'ll duplicate it within 24 hours

🔹 Third-Party Receipts:
  • If donating on behalf of an organization or corporation
  • We can issue the receipt in their name
  • Contact us before donation to arrange

🔹 Receipt Retention:
  ⚠️ Keep all tax receipts for 5-7 years
  ⚠️ Tax authorities may request verification
  ⚠️ Store in a secure location (digital or physical file)
  ⚠️ Print backup copies of electronic receipts',
    },
    {
      id: 'documentation',
      title: ar ? 'متطلبات التوثيق' : 'Documentation Requirements',
      icon: '📋',
      content: ar ? 'لاستخدام خصم ضريبي عند الإقرار الضريبي، احتفظ بالمستندات التالية:

📌 للتبرعات النقدية:
  ✓ إيصال التبرع من الهيئة (موثق ورسمي)
  ✓ كشف حسابك البنكي يظهر التحويل
  ✓ الإيصالات أو المراسلات من الهيئة الخيرية
  ✓ رسائل بريد إلكتروني تؤكد الاستلام
  ✓ تحويلات Wise أو PayPal مع الإيصالات

📌 للتبرعات العينية:
  ✓ إيصال الهيئة الرسمي للتبرع العيني
  ✓ قائمة مفصلة بالسلع المتبرع بها
  ✓ إيصالات الشراء الأصلية (لإثبات السعر)
  ✓ صور للسلع قبل التسليم (اختياري لكن مهم)
  ✓ شهادة من متخصص مستقل بتقييم القيمة (للسلع عالية القيمة)
  ✓ تصريح كتابي من الهيئة بقيمة السلع المتبرع بها

📌 للتبرعات بالأسهم والأوراق المالية:
  ✓ إيصال من الهيئة يتضمن:
    - تفاصيل الأسهم (اسم الشركة، عدد الأسهم، رمز التداول)
    - سعر السهم في تاريخ التبرع
    - القيمة الإجمالية
  ✓ استخراج من حسابك الاستثماري يظهر نقل الأسهم
  ✓ تقرير من الوسيط المالي يؤكد التحويل
  ✓ توثيق سعر السوق في تاريخ التبرع

📌 للتبرعات العقارية:
  ✓ عقد التبرع الموثق (عند الضرورة القانونية)
  ✓ تقرير تقييم مستقل من خبير معتمد
  ✓ مستند نقل الملكية من دائرة التسجيل
  ✓ إيصال الهيئة الرسمي للتبرع
  ✓ خريطة العقار أو الوثائق الملكية
  ✓ نسخة من الهوية الرقمية للعقار (Land ID)

📌 للتبرعات بالعملات الرقمية:
  ✓ إيصال الهيئة الرسمي للتبرع
  ✓ عنوان محفظتك وعنوان محفظة الهيئة
  ✓ معرّف المعاملة (Transaction ID/Hash)
  ✓ لقطة شاشة من سجل المعاملة
  ✓ شهادة من منصة التبادل بسعر الصرف في تاريخ التبرع
  ✓ توثيق قيمة العملة الرقمية في يوم التبرع

📌 للتبرعات من الوصايا والتركات:
  ✓ نسخة من الوصية أو حكم المحكمة
  ✓ إيصال الهيئة بقيمة التبرع من التركة
  ✓ شهادة وفاة الشخص المتوفى (نسخة رسمية)
  ✓ توثيق تقسيم التركة
  ✓ شهادة من المنفذ بتحويل المبلغ

⚠️ نصائح مهمة للحفاظ على المستندات:
  1. احفظ نسخة مادية وأخرى رقمية (سحابة)
  2. نظم المستندات بالسنة
  3. اعتبر إيصالاتنا الأساس - نحن معترف بنا
  4. احتفظ بكل شيء لمدة 5-7 سنوات كحد أدنى
  5. أنشئ ملف منفصل للتبرعات الكبيرة
  6. إذا تم تدقيق حسابك، لديك جميع المستندات الضرورية' : 'To claim a tax deduction when filing taxes, keep the following documentation:

📌 For Cash Donations:
  ✓ Official donation receipt from organization
  ✓ Bank statement showing the transfer
  ✓ Receipts or correspondence from the charity
  ✓ Email confirmations of receipt
  ✓ Wise or PayPal transfers with receipts

📌 For Non-Cash Donations:
  ✓ Official organizational receipt for donation
  ✓ Detailed list of donated items
  ✓ Original purchase receipts (proving price)
  ✓ Photos of items before delivery (optional but important)
  ✓ Certified appraisal from independent expert (high-value items)
  ✓ Written statement from org confirming item value

📌 For Stock and Securities Donations:
  ✓ Organization receipt including:
    - Stock details (company name, shares, ticker symbol)
    - Share price on donation date
    - Total value
  ✓ Investment account statement showing stock transfer
  ✓ Broker report confirming the transfer
  ✓ Market price documentation on donation date

📌 For Real Estate Donations:
  ✓ Notarized deed of donation (if legally required)
  ✓ Independent appraisal report from certified appraiser
  ✓ Property transfer document from land registry
  ✓ Official organization receipt
  ✓ Property map or ownership documents
  ✓ Digital property ID certificate

📌 For Cryptocurrency Donations:
  ✓ Official organization donation receipt
  ✓ Your wallet address and organization wallet address
  ✓ Transaction ID/Hash
  ✓ Screenshot of transaction record
  ✓ Exchange platform certification of exchange rate on donation date
  ✓ Documentation of crypto value on donation date

📌 For Will and Estate Donations:
  ✓ Copy of will or court order
  ✓ Organization receipt for bequest amount
  ✓ Official death certificate
  ✓ Estate distribution documentation
  ✓ Executor certificate confirming fund transfer

⚠️ Important Documentation Tips:
  1. Keep both physical and digital copies (cloud backup)
  2. Organize documents by year
  3. Our receipts are the foundation - we\'re officially recognized
  4. Retain everything for 5-7 years minimum
  5. Create separate file for large donations
  6. If audited, you\'ll have all necessary documentation ready',
    },
  ];

  const cpaContact = {
    name: ar ? 'أحمد محمد المحاسب' : 'Ahmed Mohammed CPA',
    title: ar ? 'المستشار الضريبي الرسمي' : 'Official Tax Advisor',
    email: 'tax@jhco.org',
    phone: '+962 6 123 4567',
    hours: ar ? 'الاثنين - الجمعة: 9 صباحاً - 5 مساءً' : 'Monday - Friday: 9 AM - 5 PM',
    availability: ar ? 'متاح للاستشارات المجانية' : 'Available for free consultations',
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4a148c 0%, #001a4d 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '0 0 24px 0',
            fontFamily: 'Georgia, serif',
            letterSpacing: '1px',
            color: '#d4af37',
          }}>
            {ar ? 'معلومات الخصم الضريبي' : 'Tax Deductibility Information'}
          </h1>
          <p style={{
            fontSize: '18px',
            marginBottom: '0',
            lineHeight: '1.6',
            color: '#f0f0f0',
          }}>
            {ar ? 'دليل شامل عن الإعفاء الضريبي والخصومات والإيصالات والتوثيق' : 'Complete guide to tax exemption, deductions, receipts, and documentation'}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#ffffff',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{
              marginBottom: '80px',
              paddingBottom: '80px',
              borderBottom: idx < sections.length - 1 ? '3px solid #e8e4db' : 'none',
            }}>
              {/* Section Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}>
                <span style={{
                  fontSize: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f5f1e8',
                  borderRadius: '50%',
                }}>
                  {section.icon}
                </span>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  margin: '0',
                  color: '#4a148c',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.5px',
                }}>
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div style={{
                marginLeft: '76px',
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#3d3d3d',
                whiteSpace: 'pre-wrap',
              }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CPA Contact Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f5f1e8 0%, #faf8f5 100%)',
        padding: '80px 32px',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            margin: '0 0 48px 0',
            color: '#4a148c',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            letterSpacing: '0.5px',
          }}>
            {ar ? 'اتصل بمستشارنا الضريبي' : 'Contact Our Tax Advisor'}
          </h2>

          <div style={{
            backgroundColor: '#ffffff',
            border: '2px solid #d4af37',
            borderRadius: '8px',
            padding: '48px',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              margin: '0 0 8px 0',
              color: '#001a4d',
              fontFamily: 'Georgia, serif',
            }}>
              {cpaContact.name}
            </h3>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#d4af37',
              margin: '0 0 24px 0',
            }}>
              {cpaContact.title}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '32px',
            }}>
              {/* Email */}
              <div style={{
                padding: '20px',
                backgroundColor: '#f5f1e8',
                borderRadius: '4px',
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#4a148c',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 8px 0',
                }}>
                  {ar ? 'البريد الإلكتروني' : 'Email'}
                </p>
                <a href={`mailto:${cpaContact.email}`} style={{
                  fontSize: '16px',
                  color: '#001a4d',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}>
                  {cpaContact.email}
                </a>
              </div>

              {/* Phone */}
              <div style={{
                padding: '20px',
                backgroundColor: '#f5f1e8',
                borderRadius: '4px',
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#4a148c',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 8px 0',
                }}>
                  {ar ? 'الهاتف' : 'Phone'}
                </p>
                <a href={`tel:${cpaContact.phone}`} style={{
                  fontSize: '16px',
                  color: '#001a4d',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}>
                  {cpaContact.phone}
                </a>
              </div>

              {/* Hours */}
              <div style={{
                padding: '20px',
                backgroundColor: '#f5f1e8',
                borderRadius: '4px',
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#4a148c',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 8px 0',
                }}>
                  {ar ? 'ساعات العمل' : 'Business Hours'}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#001a4d',
                  margin: '0',
                  fontWeight: '500',
                }}>
                  {cpaContact.hours}
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '16px',
              color: '#3d3d3d',
              lineHeight: '1.6',
              margin: '0 0 24px 0',
            }}>
              {cpaContact.availability}
            </p>

            <div style={{
              borderTop: '1px solid #d4c5a9',
              paddingTop: '24px',
              marginTop: '24px',
            }}>
              <p style={{
                fontSize: '13px',
                color: '#5a5a6a',
                fontStyle: 'italic',
                margin: '0',
              }}>
                {ar ? 'المستشار الضريبي متخصص في الإعفاءات الضريبية الخيرية والتبرعات الدولية وتحسين استخدام الخصومات الضريبية. استشارات مجانية للمتبرعين!' : 'Our tax advisor specializes in charitable tax exemptions, international donations, and maximizing tax deduction benefits. Free consultations for donors!'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Guide */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#ffffff',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            margin: '0 0 48px 0',
            color: '#4a148c',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            letterSpacing: '0.5px',
          }}>
            {ar ? 'دليل مرجعي سريع' : 'Quick Reference Guide'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: ar ? 'التبرع' : 'Donation',
                time: ar ? '< 5 دقائق' : '< 5 min',
                items: [
                  ar ? 'اختر المبلغ' : 'Choose amount',
                  ar ? 'اختر طريقة الدفع' : 'Select payment method',
                  ar ? 'أكمل المعاملة' : 'Complete transaction',
                ],
              },
              {
                title: ar ? 'الإيصال' : 'Receipt',
                time: ar ? '< 48 ساعة' : '< 48 hours',
                items: [
                  ar ? 'نرسل تلقائياً' : 'Automatic email',
                  ar ? 'PDF جاهز للطباعة' : 'Print-ready PDF',
                  ar ? 'ثنائي اللغة' : 'Bilingual format',
                ],
              },
              {
                title: ar ? 'الخصم الضريبي' : 'Tax Deduction',
                time: ar ? 'وقت الإقرار' : 'Tax season',
                items: [
                  ar ? 'استخدم الإيصال' : 'Use receipt',
                  ar ? 'احفظ المستندات' : 'Keep docs',
                  ar ? 'تواصل محاسبك' : 'Contact accountant',
                ],
              },
              {
                title: ar ? 'الدعم' : 'Support',
                time: ar ? '24/7' : '24/7',
                items: [
                  ar ? 'البريد الإلكتروني' : 'Email support',
                  ar ? 'الدردشة المباشرة' : 'Live chat',
                  ar ? 'الهاتف' : 'Phone support',
                ],
              },
            ].map((card, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f5f1e8',
                border: '1px solid #d4c5a9',
                borderRadius: '4px',
                padding: '24px',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#001a4d',
                  fontFamily: 'Georgia, serif',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#d4af37',
                  fontWeight: '700',
                  margin: '0 0 16px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {card.time}
                </p>
                <ul style={{
                  margin: '0',
                  paddingLeft: '20px',
                }}>
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{
                      fontSize: '14px',
                      color: '#3d3d3d',
                      marginBottom: itemIdx < card.items.length - 1 ? '8px' : '0',
                      lineHeight: '1.6',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #001a4d 0%, #2b2d42 100%)',
        padding: '64px 32px',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.5px',
            color: '#d4af37',
          }}>
            {ar ? 'ابدأ التبرع اليوم' : 'Start Donating Today'}
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            color: '#f0f0f0',
            lineHeight: '1.6',
          }}>
            {ar ? 'تبرعك يصنع فرقاً حقيقياً! احصل على إيصال ضريبي فوري وخصم ضريبي كامل' : 'Your donation makes a real difference! Get instant tax receipt and full tax deduction'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/[locale]/donation" style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: '#d4af37',
              color: '#001a4d',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 200ms ease',
              border: 'none',
              cursor: 'pointer',
            }}>
              {ar ? 'تبرع الآن' : 'Donate Now'}
            </a>
            <a href="/[locale]/donor-faq" style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: 'transparent',
              color: '#d4af37',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              border: '2px solid #d4af37',
              borderRadius: '2px',
              transition: 'all 200ms ease',
            }}>
              {ar ? 'أسئلة شائعة' : 'Donor FAQ'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
