import { getDictionary, type Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function InKindDonationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const base = `/${locale}`;

  // Accepted items categories
  const acceptedItems = [
    {
      category: ar ? 'الإمدادات الطبية' : 'Medical Supplies',
      icon: '🏥',
      color: '#e74c3c',
      items: ar
        ? ['الأدوية (غير منتهية الصلاحية)', 'الضمادات والشاش', 'أجهزة قياس الضغط', 'محاقن وإبر (مختومة)', 'كريمات ومراهم طبية']
        : ['Medications (Non-expired)', 'Bandages & Gauze', 'Blood Pressure Monitors', 'Syringes & Needles (Sealed)', 'Medical Creams & Ointments']
    },
    {
      category: ar ? 'الملابس والأحذية' : 'Clothing & Footwear',
      icon: '👕',
      color: '#1abc9c',
      items: ar
        ? ['ملابس نظيفة وسليمة', 'أحذية مريحة', 'ملابس فصلية', 'ملابس الأطفال', 'ملابس رياضية وخارجية']
        : ['Clean, Intact Clothing', 'Comfortable Footwear', 'Seasonal Apparel', 'Children\'s Clothing', 'Sportswear & Outerwear']
    },
    {
      category: ar ? 'مواد التعليم' : 'School Materials',
      icon: '📚',
      color: '#e8b923',
      items: ar
        ? ['الكتب المدرسية والعلمية', 'الأقلام والدفاتر', 'المستلزمات المكتبية', 'الحقائب المدرسية', 'الحاسبات والمسطرة']
        : ['Textbooks & Educational Books', 'Pens & Notebooks', 'Office Supplies', 'School Backpacks', 'Calculators & Rulers']
    },
    {
      category: ar ? 'المنتجات الغذائية' : 'Food & Nutrition',
      icon: '🍝',
      color: '#3498db',
      items: ar
        ? ['الأغذية المعلبة (غير منتهية الصلاحية)', 'الحليب والألبان المجففة', 'الزيوت والتوابل', 'الدقيق والأرز', 'الفيتامينات والمكملات الغذائية']
        : ['Canned Foods (Non-expired)', 'Powdered Milk & Dairy', 'Oils & Spices', 'Flour & Rice', 'Vitamins & Supplements']
    },
    {
      category: ar ? 'الفراش والمفروشات' : 'Bedding & Textiles',
      icon: '🛏️',
      color: '#9b59b6',
      items: ar
        ? ['الأغطية والبطاطين', 'الوسائد والمراتب', 'أغطية السرير', 'المناشف النظيفة', 'الستائر']
        : ['Blankets & Covers', 'Pillows & Mattresses', 'Bed Sheets', 'Clean Towels', 'Curtains']
    },
    {
      category: ar ? 'معدات المنزل' : 'Household Items',
      icon: '🏠',
      color: '#16a085',
      items: ar
        ? ['الأواني والقدور', 'الأدوات المطبخية', 'المصابيح والأسلاك', 'أدوات التنظيف', 'السجاد والبسط']
        : ['Pots & Pans', 'Kitchen Utensils', 'Light Bulbs & Wiring', 'Cleaning Supplies', 'Carpets & Rugs']
    },
  ];

  // Donation process steps
  const processSteps = [
    {
      step: 1,
      title: ar ? 'تحديد العناصر' : 'Identify Items',
      desc: ar ? 'اختر العناصر المطلوبة من القائمة أدناه' : 'Select items from our accepted list below',
      icon: '✓'
    },
    {
      step: 2,
      title: ar ? 'التحقق من الحالة' : 'Verify Condition',
      desc: ar ? 'تأكد من أن العناصر نظيفة وسليمة وغير منتهية الصلاحية' : 'Ensure items are clean, intact, non-expired',
      icon: '🔍'
    },
    {
      step: 3,
      title: ar ? 'التعبئة والتغليف' : 'Package Items',
      desc: ar ? 'ضع الأغراض في صناديق أو حقائب آمنة' : 'Place items in secure boxes or bags',
      icon: '📦'
    },
    {
      step: 4,
      title: ar ? 'جدولة الالتقاط' : 'Schedule Pickup',
      desc: ar ? 'اتصل بنا أو احجز موعداً عبر الموقع' : 'Call us or book online for pickup',
      icon: '📞'
    },
    {
      step: 5,
      title: ar ? 'استلام الوصل' : 'Receive Receipt',
      desc: ar ? 'احصل على وصل للأغراض المتبرع بها لأغراض ضريبية' : 'Get tax-deductible donation receipt',
      icon: '📄'
    },
  ];

  // Warehouse information
  const warehouseInfo = [
    {
      location: ar ? 'المقر الرئيسي - عمّان' : 'Main Warehouse - Amman',
      address: ar ? 'شارع الملك عبدالله، عمّان، الأردن' : 'King Abdullah Street, Amman, Jordan',
      phone: '+962 6 464 6464',
      hours: ar ? 'الأحد - الخميس: 8:00 ص - 4:00 م' : 'Sun - Thu: 8:00 AM - 4:00 PM',
      icon: '🏢'
    },
    {
      location: ar ? 'مركز الزرقاء' : 'Zarqa Distribution Center',
      address: ar ? 'شارع النصر، الزرقاء، الأردن' : 'Al-Nasr Street, Zarqa, Jordan',
      phone: '+962 5 388 8888',
      hours: ar ? 'الأحد - الخميس: 9:00 ص - 3:00 م' : 'Sun - Thu: 9:00 AM - 3:00 PM',
      icon: '🏭'
    },
    {
      location: ar ? 'مركز إربد' : 'Irbid Collection Point',
      address: ar ? 'شارع الأمير محمد، إربد، الأردن' : 'Prince Muhammad Street, Irbid, Jordan',
      phone: '+962 2 755 5555',
      hours: ar ? 'الأحد - الخميس: 10:00 ص - 2:00 م' : 'Sun - Thu: 10:00 AM - 2:00 PM',
      icon: '📍'
    }
  ];

  // Impact metrics
  const impactMetrics = [
    {
      value: ar ? '50,000+' : '50,000+',
      label: ar ? 'عائلة استفادت' : 'Families Helped',
      desc: ar ? 'من خلال المنح العينية' : 'Through in-kind donations',
      icon: '👨‍👩‍👧‍👦',
      color: '#e74c3c'
    },
    {
      value: ar ? '500,000+' : '500,000+',
      label: ar ? 'عنصر تم توزيعها' : 'Items Distributed',
      desc: ar ? 'ملابس وأدوات وإمدادات' : 'Clothes, tools, supplies',
      icon: '📦',
      color: '#1abc9c'
    },
    {
      value: ar ? '$2M+' : '$2M+',
      label: ar ? 'قيمة سوقية' : 'Market Value',
      desc: ar ? 'من المنح المستلمة' : 'Of donations received',
      icon: '💰',
      color: '#e8b923'
    },
    {
      value: ar ? '1,500+' : '1,500+',
      label: ar ? 'متطوع' : 'Volunteers Active',
      desc: ar ? 'يساعد في الفرز والتوزيع' : 'Helping sort & distribute',
      icon: '👥',
      color: '#3498db'
    },
  ];

  // Volunteer process
  const volunteerProcess = [
    {
      title: ar ? 'الاستقبال والفرز الأولي' : 'Reception & Initial Sorting',
      desc: ar ? 'يستقبل المتطوعون الأغراض ويقسمونها حسب النوع' : 'Volunteers receive and categorize donations',
      icon: '📥'
    },
    {
      title: ar ? 'التنظيف والفحص' : 'Cleaning & Inspection',
      desc: ar ? 'التأكد من نظافة وسلامة كل عنصر' : 'Check quality and cleanliness of items',
      icon: '🧹'
    },
    {
      title: ar ? 'التسميات والتغليف' : 'Labeling & Packaging',
      desc: ar ? 'تصنيف وتعبئة العناصر للتوزيع' : 'Label and pack for distribution',
      icon: '🏷️'
    },
    {
      title: ar ? 'التخزين والتنظيم' : 'Storage & Organization',
      desc: ar ? 'ترتيب العناصر في المستودع' : 'Organize items in warehouse',
      icon: '🗂️'
    },
    {
      title: ar ? 'التوزيع والتسليم' : 'Distribution & Delivery',
      desc: ar ? 'توصيل العناصر للعائلات المحتاجة' : 'Deliver items to beneficiary families',
      icon: '🚚'
    },
  ];

  // Tax information
  const taxBenefits = [
    {
      title: ar ? 'كيفية حساب القيمة السوقية العادلة' : 'Fair Market Value Calculation',
      desc: ar ? 'يتم حساب قيمة العناصر بناءً على السعر المعتاد في السوق' : 'Items valued based on standard market prices',
      icon: '📊'
    },
    {
      title: ar ? 'نموذج تقرير الخيرية' : 'IRS Charitable Form',
      desc: ar ? 'نحن نزودك بجميع المستندات المطلوبة للحسميات الضريبية' : 'We provide all necessary tax documentation',
      icon: '📋'
    },
    {
      title: ar ? 'التخفيفات الضريبية المحتملة' : 'Potential Tax Deductions',
      desc: ar ? 'قد تكون قادراً على خصم القيمة السوقية العادلة' : 'You may deduct fair market value of items',
      icon: '✅'
    },
  ];

  // FAQ for in-kind donations
  const faqItems = [
    {
      q: ar ? 'ما هي الشروط الأساسية للعناصر المتبرع بها؟' : 'What are the basic requirements for donated items?',
      a: ar ? 'يجب أن تكون جميع العناصر نظيفة وسليمة وغير منتهية الصلاحية (للعناصر ذات تاريخ انتهاء). لا نقبل العناصر المكسورة أو المتسخة أو المتضررة.' : 'Items must be clean, intact, and non-expired (for dated items). We cannot accept broken, dirty, or damaged items.'
    },
    {
      q: ar ? 'هل تقدمون خدمة الالتقاط من المنزل؟' : 'Do you offer home pickup service?',
      a: ar ? 'نعم، نوفر خدمة الالتقاط المجانية للكميات الكبيرة. اتصل بنا على 6 464 6464 لجدولة موعد.' : 'Yes, we provide free pickup for large donations. Call 6 464 6464 to schedule.'
    },
    {
      q: ar ? 'كيف يمكنني الحصول على وصل ضريبي؟' : 'How do I get a tax receipt?',
      a: ar ? 'ستتلقى وصلاً تفصيلياً لجميع العناصر المتبرع بها مع قيمتها السوقية العادلة. احتفظ به لأغراض الإقرار الضريبي.' : 'You\'ll receive an itemized receipt with fair market values for all donations. Keep it for tax filing.'
    },
    {
      q: ar ? 'هل يمكنني التطوع في عملية الفرز؟' : 'Can I volunteer to help sort donations?',
      a: ar ? 'بالتأكيد! نحن نستقبل المتطوعين دائماً. تواصل معنا من خلال صفحة التطوع.' : 'Absolutely! We welcome volunteers. Contact us through our volunteer page.'
    },
    {
      q: ar ? 'هل تقبلون الأثاث والأجهزة الكهربائية؟' : 'Do you accept furniture and electronics?',
      a: ar ? 'نقبل الأثاث السليم والأجهزة الكهربائية الآمنة والعاملة. يرجى الاتصال بنا للتحقق قبل التبرع.' : 'We accept quality furniture and safe, working electronics. Please contact us to verify before donating.'
    },
    {
      q: ar ? 'كم وقت يستغرق الالتقاط؟' : 'How long does pickup take?',
      a: ar ? 'عادة يستغرق 30-60 دقيقة حسب كمية العناصر. سيخبرك فريقنا بالوقت المتوقع.' : 'Usually 30-60 minutes depending on quantity. Our team will confirm the timeframe.'
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
        padding: '100px 32px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '400',
            margin: '0 0 24px 0',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            {ar ? '📦 تبرع بما لديك، غيّر الحياة' : '📦 Donate What You Have, Change Lives'}
          </h1>
          <p style={{
            fontSize: '22px',
            marginBottom: '32px',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            {ar ? 'المنح العينية توفر ما يحتاجه الناس حقاً. من الملابس إلى الكتب، كل شيء مهم.' : 'In-kind donations provide exactly what people need. From clothing to books, every item matters.'}
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#1abc9c',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              {ar ? '↓ ابدأ الآن' : '↓ Get Started'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>

      {/* ACCEPTED ITEMS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'ما الذي نقبله' : 'What We Accept'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'نحن نقبل مجموعة واسعة من العناصر المفيدة. تحقق من القائمة أدناه.' : 'We accept a wide range of useful items. Check the list below.'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {acceptedItems.map((category, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                borderTop: `4px solid ${category.color}`,
                transition: 'all 250ms ease'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: category.color,
                  marginBottom: '16px',
                  margin: '0 0 16px 0'
                }}>
                  {category.category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{
                      padding: '8px 0',
                      fontSize: '15px',
                      color: '#6b6b6b',
                      borderBottom: itemIdx < category.items.length - 1 ? '1px solid #e0e0e0' : 'none',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ marginRight: '8px', color: category.color, fontWeight: 'bold' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '60px',
            padding: '32px 28px',
            backgroundColor: '#fff3cd',
            borderRadius: '12px',
            borderLeft: '4px solid #e8b923',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#856404',
              margin: '0',
              fontWeight: '500'
            }}>
              {ar ? '⚠️ المهم: تأكد من أن جميع العناصر نظيفة وسليمة وغير منتهية الصلاحية. لا نقبل العناصر المكسورة أو المتسخة.' : '⚠️ Important: Ensure all items are clean, intact, and non-expired. We cannot accept broken or dirty items.'}
            </p>
          </div>
        </div>
      </section>

      {/* DONATION PROCESS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'عملية التبرع العيني' : 'How to Donate In-Kind'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {processSteps.map((step, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: '#fef9f3',
                borderRadius: '12px',
                textAlign: 'center',
                position: 'relative',
                borderTop: '4px solid #1abc9c'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#1abc9c',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: '600',
                  margin: '0 auto 16px'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAREHOUSE & LOGISTICS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5e6d3',
        borderTop: '4px solid #1abc9c'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'المواقع والالتقاط' : 'Warehouse Locations & Pickup'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {warehouseInfo.map((warehouse, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                borderLeft: '4px solid #1abc9c'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {warehouse.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>
                  {warehouse.location}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>
                  {warehouse.address}
                </p>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1abc9c',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  📞 {warehouse.phone}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  margin: '0'
                }}>
                  ⏰ {warehouse.hours}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '32px 28px',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#0a1428',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              {ar ? 'خدمة الالتقاط المجانية' : 'Free Pickup Service'}
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b6b6b',
              marginBottom: '20px',
              margin: '0 0 20px 0',
              lineHeight: '1.6'
            }}>
              {ar ? 'للكميات الكبيرة والأثاث، نوفر خدمة الالتقاط المجانية من منزلك.' : 'For large donations and furniture, we offer free pickup from your home.'}
            </p>
            <button style={{
              padding: '14px 32px',
              backgroundColor: '#1abc9c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'احجز موعد الالتقاط' : 'Schedule Pickup'}
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'تأثير المنح العينية' : 'The Impact of In-Kind Giving'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {impactMetrics.map((metric, idx) => (
              <div key={idx} style={{
                padding: '40px 28px',
                backgroundColor: '#fef9f3',
                borderRadius: '12px',
                textAlign: 'center',
                borderTop: `4px solid ${metric.color}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {metric.icon}
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: metric.color,
                  marginBottom: '8px'
                }}>
                  {metric.value}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  {metric.label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b6b6b',
                  margin: '0'
                }}>
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER PROCESS SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#fef9f3',
        borderTop: '4px solid #1abc9c'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'عملية الفرز بواسطة المتطوعين' : 'Volunteer Sorting Process'}
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            {ar ? 'متطوعونا يضمنون أن كل عنصر يصل إلى من يحتاجه حقاً' : 'Our volunteers ensure every item reaches those who truly need it'}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {volunteerProcess.map((process, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                borderTop: '4px solid #1abc9c'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {process.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>
                  {process.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '60px',
            padding: '40px 32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderLeft: '4px solid #1abc9c'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#0a1428',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              {ar ? 'هل تريد التطوع معنا؟' : 'Want to Volunteer With Us?'}
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b6b6b',
              marginBottom: '24px',
              margin: '0 0 24px 0',
              lineHeight: '1.6'
            }}>
              {ar ? 'انضم إلى فريقنا من المتطوعين والمساهمين' : 'Join our team of passionate volunteers'}
            </p>
            <Link href={`${base}/volunteer`} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 32px',
                backgroundColor: '#1abc9c',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}>
                {ar ? 'تطوع الآن' : 'Volunteer Now'}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TAX DEDUCTION SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'الحسميات الضريبية' : 'Tax Deductions & Benefits'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {taxBenefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '36px 28px',
                backgroundColor: '#fef9f3',
                borderRadius: '12px',
                borderLeft: '4px solid #1abc9c',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0a1428',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#6b6b6b',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '40px 32px',
            backgroundColor: '#e8f8f5',
            borderRadius: '12px',
            borderLeft: '4px solid #1abc9c',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#0a1428',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              {ar ? 'ملاحظة مهمة حول الضرائب' : 'Important Tax Note'}
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#16a085',
              margin: '0',
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              {ar ? 'نحن منظمة خيرية مسجلة رسمياً. ستحصل على وصل تفصيلي لجميع العناصر. استشر مستشارك الضريبي بشأن المزايا الضريبية.' : 'We are a registered charity. You\'ll receive itemized receipts for all donations. Consult your tax advisor about potential deductions.'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: '#f5e6d3',
        borderTop: '2px solid #1abc9c'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            color: '#0a1428',
            marginBottom: '60px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            {ar ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {faqItems.map((item, idx) => (
              <details key={idx} style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 250ms ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <summary style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0a1428',
                  cursor: 'pointer'
                }}>
                  {item.q}
                </summary>
                <p style={{
                  fontSize: '16px',
                  color: '#6b6b6b',
                  marginTop: '16px',
                  lineHeight: '1.6',
                  margin: '16px 0 0 0'
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section style={{
        padding: '80px 32px',
        background: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '400',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            {ar ? '🎁 هل أنت مستعد؟' : '🎁 Ready to Make a Difference?'}
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            {ar ? 'ابدأ عملية التبرع اليوم. كل عنصر يغير حياة شخص ما.' : 'Start your donation journey today. Every item changes a life.'}
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#1abc9c',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'ابدأ التبرع' : 'Start Donating'}
            </button>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}>
              {ar ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>

          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            margin: '0'
          }}>
            {ar ? 'لديك أسئلة؟ ' : 'Have questions? '}<Link href={`${base}/faq`} style={{ color: 'white', textDecoration: 'underline', fontWeight: '600' }}>{ar ? 'راجع الأسئلة الشائعة' : 'Visit our FAQ'}</Link> {ar ? ' أو ' : ' or '}<Link href={`${base}/contact`} style={{ color: 'white', textDecoration: 'underline', fontWeight: '600' }}>{ar ? 'تواصل معنا' : 'reach out'}</Link>
          </p>
        </div>
      </section>

      {/* COMPLIANCE FOOTER */}
      <section style={{
        padding: '48px 32px',
        backgroundColor: '#f9f7f4',
        textAlign: 'center',
        borderTop: '2px solid #1abc9c'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '16px',
            color: '#6b6b6b',
            margin: '0',
            lineHeight: '1.6'
          }}>
            {ar ? '✅ JHCO هي منظمة خيرية مسجلة رسمياً. جميع المنح العينية معفاة من الضرائب. احتفظ برسائل الاستلام الخاصة بك لأغراض ضريبية. نحن نالتزم بأعلى معايير الشفافية والمساءلة.' : '✅ JHCO is a registered charity. All in-kind donations are tax-eligible. Keep your receipt for tax purposes. We are committed to the highest standards of transparency and accountability.'}
          </p>
        </div>
      </section>
    </>
  );
}
