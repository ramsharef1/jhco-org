import { getDictionary, type Locale } from '@/lib/i18n';

export default async function DonorFAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  const faqCategories = [
    {
      category: ar ? 'الخصومات الضريبية' : 'Tax & Deductibility',
      icon: '📋',
      faqs: [
        {
          q: ar ? 'هل تبرعاتي معفاة من الضرائب؟' : 'Are my donations tax-deductible?',
          a: ar ? 'نعم! الهيئة الخيرية الأردنية الهاشمية منظمة خيرية مسجلة رسمياً. تبرعاتك قد تكون معفاة من الضرائب حسب قوانين بلدك. في الأردن والدول الخليجية، التبرعات معفاة بالكامل. نحن نصدر شهادات تبرع رسمية تساعدك في الاستفادة من الإعفاءات الضريبية.' : 'Yes! JHCO is a registered charitable organization. Your donations may be tax-deductible depending on your country\'s laws. In Jordan and GCC countries, donations are fully tax-exempt. We issue official donation certificates to help you claim tax deductions.',
        },
        {
          q: ar ? 'كيف أحصل على إيصال ضريبي للتبرع؟' : 'How do I obtain a tax receipt for my donation?',
          a: ar ? 'نرسل إيصالاً ضريبياً رسمياً تلقائياً لجميع المتبرعين عبر البريد الإلكتروني خلال 48 ساعة من التبرع. الإيصال يتضمن رقم التبرع، المبلغ، التاريخ، والمقصد. احتفظ بهذا الإيصال للأغراض الضريبية. إذا لم تتلقَ الإيصال، اتصل بنا مباشرة.' : 'We automatically send an official tax receipt to all donors via email within 48 hours of donation. The receipt includes donation number, amount, date, and purpose. Keep this receipt for tax purposes. If you don\'t receive it, contact us directly.',
        },
        {
          q: ar ? 'هل يمكنني نقل الإيصال الضريبي لشخص آخر؟' : 'Can I transfer my tax receipt to another person?',
          a: ar ? 'الإيصال الضريبي مرتبط باسم المتبرع الأساسي ولا يمكن نقله. لكن إذا كنت تتبرع نيابة عن مؤسسة أو كيان آخر، يمكننا إصدار الإيصال باسمهم. تواصل معنا لترتيب ذلك.' : 'Tax receipts are linked to the donor\'s name and cannot be transferred. However, if you\'re donating on behalf of an organization or entity, we can issue the receipt in their name. Contact us to arrange this.',
        },
        {
          q: ar ? 'ما الفترة الزمنية المسموحة للمطالبة بالخصم الضريبي؟' : 'What is the deadline for claiming tax deductions?',
          a: ar ? 'المدة تختلف حسب بلدك. في معظم الدول، يمكنك المطالبة بالخصم الضريبي للتبرعات خلال 5-7 سنوات من التبرع. نحن ننصحك باستشارة مستشار ضريبي شخصي لمعرفة القوانين المحددة في بلدك.' : 'The deadline varies by country. In most jurisdictions, you can claim tax deductions for donations made within 5-7 years. We recommend consulting a tax professional for the specific rules in your country.',
        },
      ],
    },
    {
      category: ar ? 'استخدام التبرعات والشفافية' : 'Fund Usage & Transparency',
      icon: '💰',
      faqs: [
        {
          q: ar ? 'كيف يتم استخدام تبرعاتي؟' : 'How are my donations used?',
          a: ar ? 'نستخدم 90% من كل تبرع مباشرة للبرامج الإنسانية والتنموية. تقسيم الـ 90%: 45% للغذاء والمياه والصحة، 30% للتعليم والتدريب، 15% للمشاريع التنموية المستدامة. الـ 10% الأخرى تذهب للمصاريف الإدارية والتشغيلية. ننشر تقارير مفصلة كل ربع سنة عن استخدام الأموال.' : 'We use 90% of every donation directly for humanitarian and development programs. Breakdown of 90%: 45% for food, water and health; 30% for education and training; 15% for sustainable development projects. The remaining 10% covers administrative and operational costs. We publish detailed quarterly reports on fund usage.',
        },
        {
          q: ar ? 'هل يمكنني اختيار المشروع الذي يذهب إليه تبرعي؟' : 'Can I choose which project my donation goes to?',
          a: ar ? 'نعم! عند التبرع، يمكنك اختيار من قائمة المشاريع الحالية مثل برنامج التعليم، الصحة، الغذاء، أو الطوارئ. إذا لم تحدد مشروعاً، نستخدم تبرعك حيث تكون الحاجة أكثر إلحاحية. يمكنك أيضاً طلب تقرير محدد عن المشروع الذي اخترته.' : 'Yes! When you donate, you can choose from our list of current projects such as education, healthcare, food security, or emergency relief. If you don\'t specify a project, we use your donation where it\'s most needed. You can also request specific reports on your chosen project.',
        },
        {
          q: ar ? 'كيف أتابع تأثير تبرعي؟' : 'How can I track the impact of my donation?',
          a: ar ? 'نرسل تقارير تأثير شهرية للمتبرعين المنتظمين. التقارير تتضمن عدد الأشخاص المستفيدين، القصص الحقيقية للمستفيدين، والنتائج المحققة. يمكنك أيضاً دخول لوحة تحكم المتبرعين الخاصة بنا للاطلاع على بيانات التأثير الحية والتحديثات المستمرة.' : 'We send monthly impact reports to regular donors. Reports include number of beneficiaries, real stories from those we help, and outcomes achieved. You can also access our donor dashboard to view live impact data and continuous updates.',
        },
        {
          q: ar ? 'ما هي أكبر مشاريع الهيئة حالياً؟' : 'What are JHCO\'s largest current projects?',
          a: ar ? 'أكبر مشاريعنا: 1) برنامج الغذاء الموسعي يخدم 500,000 شخص سنوياً، 2) مشروع التعليم يدعم 250,000 طالب، 3) برنامج الصحة يوفر خدمات لـ 1 مليون شخص، 4) مشاريع اللاجئين والنزوح، 5) البرامج التنموية المستدامة في 15 دولة. يمكنك مراجعة الموقع للحصول على معلومات محدثة.' : 'Our largest projects: 1) Food security program serving 500,000 people annually, 2) Education program supporting 250,000 students, 3) Healthcare program serving 1 million people, 4) Refugee and displacement programs, 5) Sustainable development programs in 15 countries. Visit our website for updated information.',
        },
      ],
    },
    {
      category: ar ? 'الإيصالات والوصائل' : 'Receipts & Documentation',
      icon: '📄',
      faqs: [
        {
          q: ar ? 'متى أتلقى إيصال التبرع؟' : 'When will I receive my donation receipt?',
          a: ar ? 'نرسل الإيصال تلقائياً عبر البريد الإلكتروني خلال 48 ساعة من استكمال التبرع. الإيصال يتضمن جميع المعلومات اللازمة للأغراض الضريبية والقانونية. إذا كان تبرعك كبيراً (أكثر من 10,000 دولار)، قد نرسل الإيصال بالبريد التقليدي أيضاً.' : 'We send the receipt automatically via email within 48 hours of completing your donation. The receipt includes all necessary information for tax and legal purposes. For large donations (over $10,000), we may also mail a physical copy.',
        },
        {
          q: ar ? 'هل يمكنني الحصول على إيصال مكرر؟' : 'Can I get a duplicate receipt?',
          a: ar ? 'نعم، إذا فقدت إيصالك الأصلي، يمكنك طلب نسخة مكررة من لوحة تحكم المتبرع أو بالاتصال بفريق الدعم. سنرسل النسخة المكررة خلال 24 ساعة.' : 'Yes, if you lose your original receipt, you can request a duplicate from your donor dashboard or by contacting support. We\'ll send the duplicate within 24 hours.',
        },
        {
          q: ar ? 'هل الإيصالات متاحة بلغات متعددة؟' : 'Are receipts available in multiple languages?',
          a: ar ? 'نعم! نرسل الإيصالات بنفس لغة حسابك. إذا أردت الإيصال بلغة أخرى، تواصل معنا وسنرسل نسخة مترجمة رسمياً.' : 'Yes! We send receipts in your account language. If you need a receipt in another language, contact us and we\'ll provide an official translation.',
        },
      ],
    },
    {
      category: ar ? 'التبرعات المتكررة والدوري' : 'Recurring & Regular Giving',
      icon: '🔄',
      faqs: [
        {
          q: ar ? 'كيف أنشئ تبرعاً شهرياً متكرراً؟' : 'How do I set up a monthly recurring donation?',
          a: ar ? 'أثناء عملية التبرع، اختر خيار "تبرع شهري متكرر". حدد المبلغ والمشروع. سيتم الخصم من حسابك أو بطاقتك تلقائياً في نفس تاريخ كل شهر. يمكنك إيقاف أو تعديل التبرع في أي وقت من لوحة تحكم المتبرع.' : 'During checkout, select "Monthly Recurring Donation." Choose your amount and project. We\'ll automatically charge your account on the same date each month. You can pause or modify the donation anytime from your donor dashboard.',
        },
        {
          q: ar ? 'ما الفترات المتاحة للتبرعات المتكررة؟' : 'What recurring donation frequencies are available?',
          a: ar ? 'نوفر خيارات متعددة: أسبوعي (كل 7 أيام)، نصف شهري (كل 15 يوم)، شهري (الخيار الأكثر شيوعاً)، ربع سنوي، وسنوي. اختر الفترة التي تناسب وضعك المالي.' : 'We offer multiple frequencies: weekly (every 7 days), bi-weekly (every 15 days), monthly (most popular), quarterly, and annual. Choose the frequency that fits your budget.',
        },
        {
          q: ar ? 'هل هناك خصم للتبرعات المتكررة؟' : 'Is there a discount for recurring donations?',
          a: ar ? 'نعم! المتبرعون المنتظمون الذين يتبرعون لمدة 12 شهراً متواصل يحصلون على خصم 5% على المبلغ الشهري. بالإضافة، لديك أولوية في الحصول على تحديثات الأثر والتقارير الحصرية.' : 'Yes! Regular donors who maintain monthly donations for 12 consecutive months receive a 5% discount on the monthly amount. Additionally, you get priority access to impact updates and exclusive reports.',
        },
        {
          q: ar ? 'هل يمكنني إيقاف التبرع المتكرر؟' : 'Can I pause or cancel my recurring donation?',
          a: ar ? 'نعم، يمكنك إيقاف أو إلغاء التبرع المتكرر في أي وقت بدون عقوبات. دخّل لوحة تحكم المتبرع واضغط على "إيقاف" أو "إلغاء". سيتم إيقاف الخصم الشهري فوراً.' : 'Yes, you can pause or cancel your recurring donation anytime without penalties. Access your donor dashboard and click "Pause" or "Cancel." Automatic charges will stop immediately.',
        },
        {
          q: ar ? 'ماذا لو واجهت مشكلة في الدفع الشهري؟' : 'What if there\'s an issue with my monthly payment?',
          a: ar ? 'إذا فشل الدفع لسبب ما (بطاقة منتهية الصلاحية، رصيد غير كافي)، نحاول الدفع مرة أخرى بعد 3 أيام. إذا فشل مرتين متتاليتين، نوقف التبرع وأرسل لك إشعار. يمكنك تحديث معلومات الدفع من حسابك.' : 'If a payment fails for any reason (expired card, insufficient funds), we retry after 3 days. If it fails twice, we pause the donation and notify you. You can update payment info from your account.',
        },
      ],
    },
    {
      category: ar ? 'طرق الدفع والتحويلات' : 'Payment Methods & Transfers',
      icon: '💳',
      faqs: [
        {
          q: ar ? 'ما طرق الدفع المقبولة؟' : 'What payment methods do you accept?',
          a: ar ? 'نقبل: بطاقات الائتمان/الخصم (Visa, Mastercard, American Express)، المحافظ الرقمية (Apple Pay, Google Pay، PayPal)، التحويلات البنكية المباشرة، العملات الرقمية (Bitcoin, Ethereum)، وتحويلات Wise للتحويلات الدولية. اختر الطريقة الأسهل لك.' : 'We accept: credit/debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay, PayPal), bank transfers, cryptocurrencies (Bitcoin, Ethereum), and Wise transfers for international remittances. Choose the method that works best for you.',
        },
        {
          q: ar ? 'هل التحويلات البنكية آمنة؟' : 'Are bank transfers secure?',
          a: ar ? 'نعم، جميع التحويلات محمية بتشفير SSL من الدرجة العسكرية. بيانات حسابك لا تُخزن على خادمنا مباشرة - نستخدم معالجات دفع موثوقة مثل Stripe و2Checkout. جميع المعاملات متوافقة مع معايير PCI-DSS الأمنية.' : 'Yes, all transfers are protected by military-grade SSL encryption. Your account details aren\'t stored on our servers—we use trusted payment processors like Stripe and 2Checkout. All transactions comply with PCI-DSS security standards.',
        },
        {
          q: ar ? 'كم رسوم المعاملة عند التبرع؟' : 'Are there any transaction fees?',
          a: ar ? 'تختلف الرسوم حسب طريقة الدفع: بطاقات الائتمان 2.5%، التحويلات البنكية 1%, العملات الرقمية بدون رسوم. نوصيك بالتحويلات البنكية إذا كان مبلغ التبرع كبيراً لتقليل الرسوم.' : 'Fees vary by payment method: credit cards 2.5%, bank transfers 1%, cryptocurrencies no fees. For large donations, we recommend bank transfers to minimize fees.',
        },
        {
          q: ar ? 'هل أقدر أتبرع من الخارج؟' : 'Can I donate from outside the region?',
          a: ar ? 'نعم بالتأكيد! نقبل التبرعات من أكثر من 150 دولة عبر بطاقات الائتمان الدولية والمحافظ الرقمية. للتحويلات البنكية الدولية، استخدم Wise أو التحويل المباشر لحسابنا البنكي. سيتم تحويل العملة تلقائياً بأفضل أسعار الصرف.' : 'Yes, absolutely! We accept donations from over 150 countries via international credit cards and digital wallets. For international bank transfers, use Wise or direct transfer to our bank account. Currency will be converted automatically at the best exchange rates.',
        },
        {
          q: ar ? 'كيف يمكنني التبرع بالعملات الرقمية؟' : 'How can I donate with cryptocurrency?',
          a: ar ? 'نقبل Bitcoin و Ethereum وعملات أخرى. أثناء التبرع، اختر "Cryptocurrency" واتبع التعليمات. ستتلقى عنوان المحفظة الفريد لإكمال التحويل. سيتم استلام التبرع تلقائياً وتحويله إلى العملة المحلية.' : 'We accept Bitcoin, Ethereum, and other cryptocurrencies. During donation, select "Cryptocurrency" and follow instructions. You\'ll receive a unique wallet address to complete the transfer. Your donation is automatically received and converted to local currency.',
        },
      ],
    },
    {
      category: ar ? 'الخصوصية والأمان' : 'Privacy & Security',
      icon: '🔒',
      faqs: [
        {
          q: ar ? 'هل بيانات التبرع محمية؟' : 'Is my donation information protected?',
          a: ar ? 'نعم، بيانات التبرع محمية بأعلى معايير الأمان. لا نحتفظ بمعلومات بطاقتك على خادمنا - يتم معالجتها بواسطة معالجات دفع معتمدة دولياً. جميع الاتصالات مشفرة بـ SSL 256-bit.' : 'Yes, donation information is protected with the highest security standards. We don\'t store your card details on our servers—payments are processed by internationally certified payment processors. All communications are encrypted with 256-bit SSL.',
        },
        {
          q: ar ? 'هل تشارك معلوماتي مع جهات ثالثة؟' : 'Do you share my information with third parties?',
          a: ar ? 'لا، نحن لا نشارك معلوماتك الشخصية أو التفاصيل المالية مع جهات ثالثة. المعلومات تُستخدم فقط لمعالجة التبرع وإرسال الإيصالات والتقارير. يمكنك قراءة سياسة الخصوصية الكاملة على الموقع.' : 'No, we never share your personal or financial information with third parties. Information is used only to process donations and send receipts and reports. You can read our full privacy policy on the website.',
        },
        {
          q: ar ? 'هل يمكن تخفي هويتي عند التبرع؟' : 'Can I donate anonymously?',
          a: ar ? 'نعم، عند الدفع اختر "تبرع مجهول". سيتم قبول التبرع لكن لن نتمكن من إرسال الإيصال الضريبي أو تقارير الأثر المخصصة. الهيئة ستعرف أن تبرعاً وردها لكن لن تعرف المتبرع.' : 'Yes, during payment select "Anonymous Donation." We\'ll receive and use your donation, but can\'t send tax receipts or personalized impact reports. JHCO will know of the donation but not the donor.',
        },
        {
          q: ar ? 'هل حسابي آمن من الاختراق؟' : 'How is my account protected from hacking?',
          a: ar ? 'حسابك محمي بمصادقة ثنائية (2FA)، تشفير كلمات المرور بمعايير عالية، ومراقبة نشاط غير عادي. نسخ احتياطية يومية لكل البيانات. إذا اكتشفنا نشاط مريب، سنوقفه فوراً ونعلمك.' : 'Your account is protected by two-factor authentication (2FA), high-level password encryption, and fraud detection. Daily backups of all data. If we detect suspicious activity, we immediately halt it and notify you.',
        },
        {
          q: ar ? 'ماذا لو تم اختراق بطاقتي؟' : 'What if my card is compromised?',
          a: ar ? 'إذا كنت قلقاً من اختراق بطاقتك، غيّر بطاقة الدفع فوراً من حسابك. يمكنك حذف البطاقة القديمة والبطاقات الأخرى. جميع التحويلات المستقبلية ستستخدم الطريقة الجديدة. تواصل معنا إذا احتجت لمساعدة.' : 'If concerned about card compromise, immediately change your payment method in your account. You can delete the old card and any others. Future transfers will use the new method. Contact us if you need assistance.',
        },
      ],
    },
    {
      category: ar ? 'كفالة المستفيد والرعاية' : 'Sponsorship & Beneficiary',
      icon: '🤝',
      faqs: [
        {
          q: ar ? 'ما هو برنامج كفالة المستفيد؟' : 'What is the beneficiary sponsorship program?',
          a: ar ? 'برنامج الكفالة يسمح لك باختيار مستفيد واحد أو مجموعة صغيرة ودعمهم بشكل مستمر. تحصل على تفاصيل المستفيدين (الاسم، السن، القصة)، وصور شهرية، وتحديثات عن تقدمهم. التبرع الشهري يتراوح بين 50-200 دولار ويغطي كل احتياجاتهم.' : 'The sponsorship program lets you select one beneficiary or a small group to support consistently. You receive their details (name, age, story), monthly photos, and progress updates. Monthly donations range $50-200 and cover all their needs.',
        },
        {
          q: ar ? 'كيف أختار المستفيد الذي أكفله؟' : 'How do I choose which beneficiary to sponsor?',
          a: ar ? 'في صفحة الكفالة، يمكنك تصفح المستفيدين المتاحين. تجد صورة، قصة، عمر، احتياجات خاصة لكل شخص. يمكنك التواصل معنا لطلب معايير محددة (بلد، عمر، نوع مشروع). نساعدك في اختيار من يناسبك.' : 'On the sponsorship page, you can browse available beneficiaries. Each profile includes a photo, story, age, and specific needs. You can contact us to request specific criteria (country, age, program type). We\'ll help you choose a great match.',
        },
        {
          q: ar ? 'هل يمكن التواصل مع المستفيد مباشرة؟' : 'Can I communicate directly with my sponsored beneficiary?',
          a: ar ? 'نعم، يمكن تبادل الرسائل عبر منصتنا الآمنة. المستفيد يرد من خلال مترجمين معتمدين لديهم إذا لزم الأمر. لا نسمح بمعلومات التواصل المباشرة لأسباب الأمان والخصوصية.' : 'Yes, you can exchange messages through our secure platform. Beneficiaries respond through certified translators if needed. We don\'t share direct contact information for safety and privacy reasons.',
        },
        {
          q: ar ? 'ماذا يحدث إذا أردت إيقاف الكفالة؟' : 'What happens if I want to stop sponsorship?',
          a: ar ? 'يمكنك إيقاف الكفالة في أي وقت بدون عقوبات. قد ننقل المستفيد لكفيل آخر بسرعة لضمان استمرار الدعم. نشكرك على وقتك معنا وستتلقى رسالة وداع من المستفيد.' : 'You can stop sponsorship anytime without penalties. We quickly connect your beneficiary with another sponsor to ensure continued support. We thank you for your time and your beneficiary will send a goodbye message.',
        },
        {
          q: ar ? 'هل يمكن أتبرع للعائلة كاملة؟' : 'Can I sponsor an entire family?',
          a: ar ? 'نعم! برنامج الكفالة العائلية يسمح لك بدعم عائلة كاملة (3-5 أفراد). التبرع الشهري 150-300 دولار يغطي التعليم، الغذاء، الصحة، والاحتياجات الأساسية لكل الأفراد. ستتلقى تحديثات دورية عن حالة كل فرد من العائلة.' : 'Yes! Our family sponsorship program lets you support entire families (3-5 members). Monthly donations $150-300 cover education, food, healthcare, and essentials for all. You\'ll receive regular updates on each family member\'s progress.',
        },
      ],
    },
    {
      category: ar ? 'تتبع التأثير والنتائج' : 'Impact Tracking & Results',
      icon: '📊',
      faqs: [
        {
          q: ar ? 'كيف أتابع تأثير تبرعاتي على الأرض؟' : 'How can I track real impact of my donation?',
          a: ar ? 'نوفر لوحة تحكم مخصصة للمتبرعين تظهر البيانات الحية: عدد المستفيدين، المشاريع الممولة، النتائج المحققة. تتضمن صور وفيديوهات من المشاريع، قصص المستفيدين، والإحصائيات المفصلة. يمكنك تحميل تقارير PDF شاملة.' : 'We provide a personalized donor dashboard with live data: number of beneficiaries, funded projects, achieved outcomes. Includes photos and videos from projects, beneficiary stories, and detailed statistics. You can download comprehensive PDF reports.',
        },
        {
          q: ar ? 'كم مرة تُحدّثون تقارير التأثير؟' : 'How often do you update impact reports?',
          a: ar ? 'للمتبرعين المنتظمين: تقارير شهرية. للمشاريع الكبرى: تقارير ربع سنوية مفصلة مع قصص ودراسات حالة. تقرير سنوي شامل يغطي جميع المشاريع والإحصائيات. يمكنك الاشتراك في التنبيهات لتلقي التحديثات فوراً.' : 'For regular donors: monthly reports. For major projects: detailed quarterly reports with stories and case studies. Comprehensive annual report covering all projects and statistics. You can subscribe to alerts for instant updates.',
        },
        {
          q: ar ? 'هل التقارير تتضمن معلومات عن التكاليف الإدارية؟' : 'Do reports show administrative costs breakdown?',
          a: ar ? 'نعم، كل تقرير يتضمن تفصيل كامل: مبلغ التبرع، المبلغ المستخدم للبرامج، النفقات الإدارية، مصادر التمويل الأخرى، والأثر المحقق. نحن ملتزمون بالشفافية الكاملة. إذا أردت معلومات إضافية، يمكنك طلب تدقيق مستقل.' : 'Yes, every report includes complete breakdown: donation amount, program expenditure, administrative costs, other funding sources, and achieved impact. We\'re committed to full transparency. You can request independent audits for additional verification.',
        },
        {
          q: ar ? 'هل يمكن زيارة المشاريع بشكل مباشر؟' : 'Can I visit the projects personally?',
          a: ar ? 'نعم! ننظم رحلات زيارة للمتبرعين لمشاهدة المشاريع مباشرة والتفاعل مع المستفيدين. الرحلات تتضمن جولات موجهة، لقاءات مع فريق العمل، وحلقات عمل تفاعلية. سافر مع الهيئة وشاهد الفرق الذي تحدثه تبرعاتك.' : 'Yes! We organize donor visits to see projects firsthand and interact with beneficiaries. Visits include guided tours, meetings with our team, and interactive workshops. Travel with JHCO and witness the difference your donations make.',
        },
        {
          q: ar ? 'ماذا عن المشاريع طويلة الأمد والمستدامة؟' : 'What about long-term sustainable projects?',
          a: ar ? 'بعض مشاريعنا تمتد لسنوات (مثل برامج التعليم المدرسية). تتبع التأثير طويل الأمد يشمل: معدلات التخرج، توظيف الخريجين، تحسن الدخل، استقرار المجتمع. نتابع آثار مشاريعنا لمدة 5-10 سنوات بعد الانتهاء منها.' : 'Some of our projects span years (like school education programs). Long-term impact tracking includes: graduation rates, graduate employment, income improvement, community stability. We track outcomes for 5-10 years after project completion.',
        },
      ],
    },
    {
      category: ar ? 'أسئلة عامة أخرى' : 'General Questions',
      icon: '❓',
      faqs: [
        {
          q: ar ? 'هل هناك حد أدنى للتبرع؟' : 'Is there a minimum donation amount?',
          a: ar ? 'لا يوجد حد أدنى! حتى التبرعات الصغيرة مهمة جداً. دولار واحد يمكنه توفير كوب ماء نظيف. 10 دولارات تموّل وجبة دافئة. كل مبلغ يحدث فرقاً. هدفنا أن يتمكن الجميع من المساهمة حسب قدرتهم.' : 'No minimum! Even small donations matter greatly. $1 provides clean water. $10 funds a warm meal. Every amount makes a difference. Our goal is making donation accessible to everyone.',
        },
        {
          q: ar ? 'هل يمكن تعديل مبلغ التبرع بعد الموافقة؟' : 'Can I modify my donation amount after approval?',
          a: ar ? 'للتبرعات لمرة واحدة: لا يمكن تعديلها بعد المعالجة. للتبرعات المتكررة: يمكنك تعديل المبلغ من لوحة تحكم المتبرع قبل موعد الخصم التالي بـ 3 أيام على الأقل.' : 'For one-time donations: cannot be modified after processing. For recurring donations: you can modify the amount in your donor dashboard at least 3 days before the next charge.',
        },
        {
          q: ar ? 'ماذا لو كان لدي مشكلة في إكمال التبرع؟' : 'What if I have trouble completing my donation?',
          a: ar ? 'إذا واجهتك مشكلة تقنية، جرب متصفح مختلف أو جهاز آخر. إذا استمرت المشكلة، اتصل بفريق الدعم 24/7 على: support@jhco.org أو عبر الدردشة المباشرة. سنساعدك بسرعة.' : 'If you encounter technical issues, try a different browser or device. If problems persist, contact our 24/7 support team at support@jhco.org or via live chat. We\'ll help quickly.',
        },
        {
          q: ar ? 'هل يمكن تقديم صدقة جارية باسم أحد الأقارب؟' : 'Can I donate in memory of a loved one?',
          a: ar ? 'نعم! تبرعات "بنية تذكارية" تحتفظ بذاكرة الأحبة. نرسل شهادة تذكارية رسمية لعائلة المتوفى مع معلومات عن تأثير التبرع. يمكنك أيضاً اختيار مشروع محدد كان يهمه.' : 'Yes! "Memorial donations" honor loved ones. We send an official memorial certificate to the family with impact information. You can dedicate the donation to a cause they cared about.',
        },
        {
          q: ar ? 'هل تقدمون تبرعات المؤسسات والشركات؟' : 'Do you accept corporate donations?',
          a: ar ? 'نعم بالتأكيد! نقبل تبرعات المؤسسات والشركات والمنظمات. هناك برامج خاصة للشركات (Corporate Social Responsibility). نعمل معك لتطوير استراتيجية تبرع تتناسب مع قيم شركتك. تواصل مع: corporate@jhco.org' : 'Yes, absolutely! We accept corporate, institutional, and organizational donations. We have special corporate programs (Corporate Social Responsibility). We work with you to develop a donation strategy aligned with your company values. Contact: corporate@jhco.org',
        },
      ],
    },
  ];

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
            {ar ? 'أسئلة المتبرعين الشائعة' : 'Donor FAQ'}
          </h1>
          <p style={{
            fontSize: '18px',
            marginBottom: '0',
            lineHeight: '1.6',
            color: '#f0f0f0',
          }}>
            {ar ? 'إجابات شاملة عن الضرائب، الشفافية، التبرعات المتكررة، وتتبع التأثير' : 'Complete answers about taxes, transparency, recurring donations, and impact tracking'}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#ffffff',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '60px' }}>
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '3px solid #d4af37',
              }}>
                <span style={{ fontSize: '32px' }}>{category.icon}</span>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  margin: '0',
                  color: '#4a148c',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.5px',
                }}>
                  {category.category}
                </h2>
              </div>

              {/* FAQs in Category */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
              }}>
                {category.faqs.map((faq, faqIdx) => (
                  <details key={faqIdx} style={{
                    borderBottom: '1px solid #e8e4db',
                    padding: '20px 0',
                  }}>
                    <summary style={{
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#001a4d',
                      outline: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      userSelect: 'none',
                      paddingRight: '16px',
                      transition: 'color 200ms ease',
                    }}>
                      <span style={{ flex: 1 }}>{faq.q}</span>
                      <span style={{
                        fontSize: '18px',
                        marginLeft: '16px',
                        flexShrink: 0,
                        color: '#d4af37',
                      }}>+</span>
                    </summary>
                    <p style={{
                      fontSize: '15px',
                      color: '#3d3d3d',
                      lineHeight: '1.8',
                      marginTop: '16px',
                      marginBottom: '0px',
                      paddingRight: '32px',
                    }}>
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Security Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f5f1e8 0%, #faf8f5 100%)',
        padding: '60px 32px',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 32px 0',
            color: '#4a148c',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
          }}>
            {ar ? 'الثقة والأمان' : 'Trust & Security'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                title: ar ? 'معتمد دولياً' : 'Internationally Certified',
                desc: ar ? 'منظمة خيرية مسجلة في الأردن والدول الخليجية' : 'Registered charity in Jordan and GCC countries',
              },
              {
                title: ar ? '90% للبرامج' : '90% to Programs',
                desc: ar ? 'كل دولار تبرعه يصل مباشرة للمستحقين' : 'Every dollar goes directly to beneficiaries',
              },
              {
                title: ar ? 'تشفير SSL' : 'SSL Encryption',
                desc: ar ? 'حماية من الدرجة الأولى لبيانات التبرعات' : 'Military-grade protection for donations',
              },
              {
                title: ar ? 'شفافية كاملة' : 'Full Transparency',
                desc: ar ? 'تقارير مفصلة وقابلة للتدقيق' : 'Detailed and auditable reports',
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid #d4c5a9',
                borderRadius: '2px',
                textAlign: 'center',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  color: '#001a4d',
                  fontFamily: 'Georgia, serif',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#5a5a6a',
                  margin: '0',
                  lineHeight: '1.6',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
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
            {ar ? 'هل لديك أسئلة إضافية؟' : 'Have More Questions?'}
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            color: '#f0f0f0',
            lineHeight: '1.6',
          }}>
            {ar ? 'فريق الدعم الخاص بنا متاح 24/7 للإجابة على جميع استفسارتك' : 'Our support team is available 24/7 to answer any questions'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
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
            }}>
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </a>
            <a href="mailto:support@jhco.org" style={{
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
              {ar ? 'ابعث بريد' : 'Send Email'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
