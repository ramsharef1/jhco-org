import { getDictionary, type Locale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('office-locations', locale);
}

export default async function OfficeLocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';

  const officeData = [
    {
      id: 'headquarters',
      nameEn: 'Headquarters',
      nameAr: 'المقر الرئيسي',
      regionEn: 'Middle East',
      regionAr: 'الشرق الأوسط',
      addressEn: '123 King Hussein Street',
      addressAr: '123 شارع الملك حسين',
      cityEn: 'Amman, Jordan',
      cityAr: 'عمّان، الأردن',
      postalEn: 'P.O. Box 12345',
      postalAr: 'ص.ب. 12345',
      phone: '+962 (0) 6 123 4567',
      phoneExt: '+962 (0) 6 123 4567 ext. 100',
      email: 'headquarters@jhco.org',
      hoursEn: 'Monday - Friday: 8:00 AM - 5:00 PM',
      hoursAr: 'الاثنين - الجمعة: 8:00 صباحاً - 5:00 مساءً',
      hoursEn2: 'Saturday: 9:00 AM - 1:00 PM',
      hoursAr2: 'السبت: 9:00 صباحاً - 1:00 ظهراً',
      lat: 31.9454,
      lng: 35.9284,
      staff: [
        { nameEn: 'Dr. Ahmed Al-Rasheed', nameAr: 'د. أحمد الرشيد', titleEn: 'Executive Director', titleAr: 'المدير التنفيذي', email: 'a.rasheed@jhco.org', phone: '+962 (0) 6 123 4567 ext. 100' },
        { nameEn: 'Fatima Al-Hashemi', nameAr: 'فاطمة الهاشمي', titleEn: 'Director of Operations', titleAr: 'مديرة العمليات', email: 'f.hashemi@jhco.org', phone: '+962 (0) 6 123 4567 ext. 101' },
        { nameEn: 'Hassan Al-Mansouri', nameAr: 'حسن المنصوري', titleEn: 'Finance Manager', titleAr: 'مدير المالية', email: 'h.mansouri@jhco.org', phone: '+962 (0) 6 123 4567 ext. 102' },
      ],
    },
    {
      id: 'middle-east',
      nameEn: 'Middle East Regional Office',
      nameAr: 'مكتب منطقة الشرق الأوسط',
      regionEn: 'Middle East',
      regionAr: 'الشرق الأوسط',
      addressEn: '456 Beirut Avenue',
      addressAr: '456 شارع بيروت',
      cityEn: 'Beirut, Lebanon',
      cityAr: 'بيروت، لبنان',
      postalEn: 'P.O. Box 54321',
      postalAr: 'ص.ب. 54321',
      phone: '+961 (0) 1 987 6543',
      phoneExt: '+961 (0) 1 987 6543 ext. 200',
      email: 'middleeast@jhco.org',
      hoursEn: 'Monday - Friday: 8:30 AM - 4:30 PM',
      hoursAr: 'الاثنين - الجمعة: 8:30 صباحاً - 4:30 مساءً',
      hoursEn2: 'Saturday: 10:00 AM - 12:00 PM',
      hoursAr2: 'السبت: 10:00 صباحاً - 12:00 ظهراً',
      lat: 33.8886,
      lng: 35.4955,
      staff: [
        { nameEn: 'Karim Al-Khalil', nameAr: 'كريم الخليل', titleEn: 'Regional Director', titleAr: 'المدير الإقليمي', email: 'k.khalil@jhco.org', phone: '+961 (0) 1 987 6543 ext. 200' },
        { nameEn: 'Mariam Al-Dosari', nameAr: 'مريم الدوسري', titleEn: 'Programs Coordinator', titleAr: 'منسقة البرامج', email: 'm.dosari@jhco.org', phone: '+961 (0) 1 987 6543 ext. 201' },
      ],
    },
    {
      id: 'africa',
      nameEn: 'Africa Regional Office',
      nameAr: 'مكتب منطقة أفريقيا',
      regionEn: 'Africa',
      regionAr: 'أفريقيا',
      addressEn: '789 Nairobi Street',
      addressAr: '789 شارع نيروبي',
      cityEn: 'Nairobi, Kenya',
      cityAr: 'نيروبي، كينيا',
      postalEn: 'P.O. Box 99876',
      postalAr: 'ص.ب. 99876',
      phone: '+254 (0) 20 123 4567',
      phoneExt: '+254 (0) 20 123 4567 ext. 300',
      email: 'africa@jhco.org',
      hoursEn: 'Monday - Friday: 8:00 AM - 5:00 PM EAT',
      hoursAr: 'الاثنين - الجمعة: 8:00 صباحاً - 5:00 مساءً',
      hoursEn2: 'Saturday: 9:00 AM - 1:00 PM',
      hoursAr2: 'السبت: 9:00 صباحاً - 1:00 ظهراً',
      lat: -1.2864,
      lng: 36.8172,
      staff: [
        { nameEn: 'Daniel Kimani', nameAr: 'دانيال كيماني', titleEn: 'Regional Director', titleAr: 'المدير الإقليمي', email: 'd.kimani@jhco.org', phone: '+254 (0) 20 123 4567 ext. 300' },
        { nameEn: 'Amara Okonkwo', nameAr: 'أمارة أوكونكو', titleEn: 'Humanitarian Affairs Officer', titleAr: 'ضابط الشؤون الإنسانية', email: 'a.okonkwo@jhco.org', phone: '+254 (0) 20 123 4567 ext. 301' },
        { nameEn: 'Sarah Musyoka', nameAr: 'سارة موسيوكا', titleEn: 'Volunteer Coordinator', titleAr: 'منسقة التطوع', email: 's.musyoka@jhco.org', phone: '+254 (0) 20 123 4567 ext. 302' },
      ],
    },
    {
      id: 'europe',
      nameEn: 'Europe Regional Office',
      nameAr: 'مكتب منطقة أوروبا',
      regionEn: 'Europe',
      regionAr: 'أوروبا',
      addressEn: '321 Geneva Road',
      addressAr: '321 شارع جنيف',
      cityEn: 'Geneva, Switzerland',
      cityAr: 'جنيف، سويسرا',
      postalEn: 'P.O. Box 11111',
      postalAr: 'ص.ب. 11111',
      phone: '+41 (0) 22 123 4567',
      phoneExt: '+41 (0) 22 123 4567 ext. 400',
      email: 'europe@jhco.org',
      hoursEn: 'Monday - Friday: 8:00 AM - 6:00 PM',
      hoursAr: 'الاثنين - الجمعة: 8:00 صباحاً - 6:00 مساءً',
      hoursEn2: 'Closed Weekends',
      hoursAr2: 'مغلق في نهاية الأسبوع',
      lat: 46.2044,
      lng: 6.1432,
      staff: [
        { nameEn: 'Pierre Dubois', nameAr: 'بيير دوبوا', titleEn: 'Regional Director', titleAr: 'المدير الإقليمي', email: 'p.dubois@jhco.org', phone: '+41 (0) 22 123 4567 ext. 400' },
        { nameEn: 'Emma Schmidt', nameAr: 'إيما شميدت', titleEn: 'Partnerships Manager', titleAr: 'مدير الشراكات', email: 'e.schmidt@jhco.org', phone: '+41 (0) 22 123 4567 ext. 401' },
      ],
    },
    {
      id: 'asia',
      nameEn: 'Asia Regional Office',
      nameAr: 'مكتب منطقة آسيا',
      regionEn: 'Asia',
      regionAr: 'آسيا',
      addressEn: '654 Bangkok Boulevard',
      addressAr: '654 بوليفار بانكوك',
      cityEn: 'Bangkok, Thailand',
      cityAr: 'بانكوك، تايلاند',
      postalEn: 'P.O. Box 22222',
      postalAr: 'ص.ب. 22222',
      phone: '+66 (0) 2 123 4567',
      phoneExt: '+66 (0) 2 123 4567 ext. 500',
      email: 'asia@jhco.org',
      hoursEn: 'Monday - Friday: 9:00 AM - 5:30 PM ICT',
      hoursAr: 'الاثنين - الجمعة: 9:00 صباحاً - 5:30 مساءً',
      hoursEn2: 'Saturday: 10:00 AM - 1:00 PM',
      hoursAr2: 'السبت: 10:00 صباحاً - 1:00 ظهراً',
      lat: 13.7563,
      lng: 100.5018,
      staff: [
        { nameEn: 'Priya Sharma', nameAr: 'بريا شارما', titleEn: 'Regional Director', titleAr: 'المدير الإقليمي', email: 'p.sharma@jhco.org', phone: '+66 (0) 2 123 4567 ext. 500' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1428, #142850)', padding: '80px 32px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {ar ? 'مكاتبنا حول العالم' : 'Our Office Locations'}
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 0 }}>
            {ar ? 'تواصل معنا من خلال أحد مكاتبنا الإقليمية في جميع أنحاء العالم' : 'Connect with us through our regional offices across the globe'}
          </p>
        </div>
      </section>

      {/* Regional Breakdown Summary */}
      <section style={{ padding: '80px 32px', backgroundColor: '#f9f7f4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'تواجدنا العالمي' : 'Our Global Presence'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', color: '#a8312f', marginBottom: '8px' }}>5</div>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: 0 }}>
                {ar ? 'مكاتب إقليمية' : 'Regional Offices'}
              </p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', color: '#a8312f', marginBottom: '8px' }}>6</div>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: 0 }}>
                {ar ? 'قارات' : 'Continents'}
              </p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', color: '#a8312f', marginBottom: '8px' }}>24/7</div>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: 0 }}>
                {ar ? 'دعم متاح' : 'Support Available'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations List */}
      {officeData.map((office, idx) => (
        <section key={office.id} style={{ padding: '80px 32px', backgroundColor: idx % 2 === 0 ? 'white' : '#f9f7f4' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              {/* Office Details */}
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#a8312f', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {ar ? office.regionAr : office.regionEn}
                  </span>
                </div>
                <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
                  {ar ? office.nameAr : office.nameEn}
                </h2>

                {/* Contact Information */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {ar ? 'معلومات التواصل' : 'Contact Information'}
                  </h3>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {ar ? 'العنوان' : 'Address'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#3d3d3d', margin: 0, lineHeight: '1.6' }}>
                      {ar ? office.addressAr : office.addressEn}
                      <br />
                      {ar ? office.cityAr : office.cityEn}
                      <br />
                      {ar ? office.postalAr : office.postalEn}
                    </p>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {ar ? 'الهاتف' : 'Phone'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#3d3d3d', margin: '0 0 8px 0' }}>
                      <a href={`tel:${office.phone}`} style={{ color: '#d4af37', textDecoration: 'none' }}>
                        {office.phone}
                      </a>
                    </p>
                    {office.phoneExt && (
                      <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                        {ar ? 'الملحق' : 'Extensions available'}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {ar ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <p style={{ fontSize: '16px', color: '#3d3d3d', margin: 0 }}>
                      <a href={`mailto:${office.email}`} style={{ color: '#d4af37', textDecoration: 'none' }}>
                        {office.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#0a1428', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {ar ? 'ساعات العمل' : 'Office Hours'}
                    </p>
                    <p style={{ fontSize: '14px', color: '#3d3d3d', margin: '0 0 4px 0' }}>
                      {ar ? office.hoursAr : office.hoursEn}
                    </p>
                    <p style={{ fontSize: '14px', color: '#3d3d3d', margin: 0 }}>
                      {ar ? office.hoursAr2 : office.hoursEn2}
                    </p>
                  </div>
                </div>

                {/* Directions Link */}
                <a
                  href={`https://www.google.com/maps/search/${office.lat},${office.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    backgroundColor: '#a8312f',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '14px',
                    marginTop: '16px',
                  }}
                >
                  {ar ? 'احصل على الاتجاهات' : 'Get Directions'}
                </a>
              </div>

              {/* Map Placeholder & Staff */}
              <div>
                {/* Map Placeholder */}
                <div style={{
                  backgroundColor: '#e8e4db',
                  borderRadius: '8px',
                  height: '350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  border: '2px solid #d4c5b0',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>📍</div>
                    <p style={{ fontSize: '14px', color: '#3d3d3d', margin: 0 }}>
                      {ar ? 'خريطة تفاعلية' : 'Interactive Map'}
                    </p>
                    <p style={{ fontSize: '12px', color: '#999', margin: '4px 0 0 0' }}>
                      {ar ? `${office.lat}°, ${office.lng}°` : `Lat: ${office.lat}°, Lng: ${office.lng}°`}
                    </p>
                  </div>
                </div>

                {/* Staff Directory */}
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {ar ? 'فريق المكتب' : 'Office Staff'}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {office.staff.map((member, staffIdx) => (
                      <div key={staffIdx} style={{ backgroundColor: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e8e4db' }}>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#0a1428', margin: '0 0 4px 0' }}>
                          {ar ? member.nameAr : member.nameEn}
                        </p>
                        <p style={{ fontSize: '12px', color: '#a8312f', fontWeight: '500', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {ar ? member.titleAr : member.titleEn}
                        </p>
                        <p style={{ fontSize: '12px', color: '#3d3d3d', margin: '0 0 4px 0' }}>
                          <a href={`mailto:${member.email}`} style={{ color: '#d4af37', textDecoration: 'none' }}>
                            {member.email}
                          </a>
                        </p>
                        <p style={{ fontSize: '12px', color: '#3d3d3d', margin: 0 }}>
                          <a href={`tel:${member.phone}`} style={{ color: '#d4af37', textDecoration: 'none' }}>
                            {member.phone}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* General Contact Form */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '12px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'لم تجد ما تبحث عنه؟' : 'Don\'t See Your Location?'}
          </h2>
          <p style={{ fontSize: '16px', color: '#3d3d3d', textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto', marginTop: '12px' }}>
            {ar ? 'تواصل معنا مباشرة من خلال نموذج الاتصال أدناه. سيرد عليك فريقنا في أقرب وقت ممكن.' : 'Contact us directly using the form below. Our team will respond as soon as possible.'}
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  placeholder={ar ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? 'رقم الهاتف' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  placeholder={ar ? '+966 (0) 1 234 5678' : '+1 (555) 000-0000'}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? 'الموضوع' : 'Subject'}
                </label>
                <select
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', boxSizing: 'border-box', backgroundColor: 'white' }}
                >
                  <option>{ar ? 'اختر موضوعاً' : 'Select a subject'}</option>
                  <option>{ar ? 'استفسار عام' : 'General Inquiry'}</option>
                  <option>{ar ? 'دعم برنامج' : 'Program Support'}</option>
                  <option>{ar ? 'شراكة' : 'Partnership'}</option>
                  <option>{ar ? 'تطوع' : 'Volunteering'}</option>
                  <option>{ar ? 'تبرع' : 'Donation'}</option>
                  <option>{ar ? 'أخرى' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#0a1428', marginBottom: '8px' }}>
                  {ar ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  placeholder={ar ? 'اكتب رسالتك هنا' : 'Write your message here'}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '4px', border: '1px solid #e8e4db', fontSize: '14px', minHeight: '150px', boxSizing: 'border-box', fontFamily: 'inherit' }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{ padding: '12px 32px', backgroundColor: '#a8312f', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', alignSelf: 'flex-start' }}
              >
                {ar ? 'أرسل الرسالة' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'طرق الاتصال السريعة' : 'Quick Contact Methods'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📞</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                {ar ? 'الخط الساخن' : 'Hotline'}
              </h3>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: '0 0 12px 0' }}>
                {ar ? 'اتصل بنا على:' : 'Call us at:'}
              </p>
              <a href="tel:+962612344567" style={{ fontSize: '16px', fontWeight: '600', color: '#d4af37', textDecoration: 'none' }}>
                +962 (0) 6 234 4567
              </a>
            </div>

            <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✉️</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                {ar ? 'البريد الإلكتروني' : 'Email'}
              </h3>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: '0 0 12px 0' }}>
                {ar ? 'راسلنا عبر:' : 'Email us at:'}
              </p>
              <a href="mailto:info@jhco.org" style={{ fontSize: '14px', color: '#d4af37', textDecoration: 'none' }}>
                info@jhco.org
              </a>
            </div>

            <div style={{ backgroundColor: '#f9f7f4', padding: '32px', borderRadius: '8px', textAlign: 'center', border: '1px solid #e8e4db' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0a1428', marginBottom: '12px' }}>
                {ar ? 'الدردشة المباشرة' : 'Live Chat'}
              </h3>
              <p style={{ fontSize: '14px', color: '#3d3d3d', margin: '0 0 12px 0' }}>
                {ar ? 'متاحة 24/7' : 'Available 24/7'}
              </p>
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#a8312f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {ar ? 'ابدأ الدردشة' : 'Start Chat'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section style={{ backgroundColor: '#f9f7f4', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#0a1428', marginBottom: '48px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            {ar ? 'معلومات الوصول' : 'Accessibility Information'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'سهولة الوصول' : 'Accessibility'}
              </h3>
              <ul style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'جميع مكاتبنا سهلة الوصول لذوي الاحتياجات الخاصة' : 'All offices are wheelchair accessible'}
                </li>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'توفر مرافق مخصصة للأشخاص ذوي الإعاقة' : 'Reserved parking spaces available'}
                </li>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'خدمات الترجمة والمساعدة متاحة' : 'Interpretation services available'}
                </li>
                <li>
                  {ar ? 'اطلب المساعدة من موظفينا' : 'Contact us in advance for accommodations'}
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0a1428', marginBottom: '16px' }}>
                {ar ? 'خيارات الاتصال البديلة' : 'Alternative Contact Methods'}
              </h3>
              <ul style={{ fontSize: '14px', color: '#3d3d3d', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'فاكس: +962 (0) 6 123 4568' : 'Fax: +962 (0) 6 123 4568'}
                </li>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'وسائل التواصل الاجتماعي: Facebook, Twitter, Instagram' : 'Social Media: Facebook, Twitter, Instagram'}
                </li>
                <li style={{ marginBottom: '12px' }}>
                  {ar ? 'تطبيق الهاتف المحمول (iOS و Android)' : 'Mobile App (iOS & Android)'}
                </li>
                <li>
                  {ar ? 'نموذج الاتصال على موقعنا' : 'Online contact form on our website'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
