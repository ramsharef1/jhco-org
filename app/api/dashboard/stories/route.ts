import { NextRequest, NextResponse } from 'next/server';

// Mock data - replace with database queries
const MOCK_STORIES = [
  {
    id: '1',
    title: "Fatima's Journey to Health",
    titleAr: 'رحلة فاطمة نحو الصحة',
    content: 'Through our healthcare initiative, Fatima received essential medical treatment that changed her life. She now works as a health educator in her community, helping others understand the importance of preventive care.',
    contentAr: 'من خلال مبادرتنا الصحية، تلقت فاطمة العلاج الطبي الأساسي الذي غير حياتها. تعمل الآن كمثقفة صحية في مجتمعها، مساعدة الآخرين على فهم أهمية الرعاية الوقائية.',
    program: 'Healthcare',
    featured: true,
    published: true,
  },
  {
    id: '2',
    title: 'From Classrooms to Careers',
    titleAr: 'من الفصول الدراسية إلى المهن',
    content: 'Our education program has transformed the lives of over 2,000 students. Ahmed was one of them. Through our scholarship program, he completed his studies and now manages his own technology business.',
    contentAr: 'غيّر برنامج التعليم الخاص بنا حياة أكثر من 2000 طالب. كان أحمد واحداً منهم. من خلال برنامج المنح الدراسية الخاص بنا، أكمل دراسته والآن يدير عمله التجاري في التكنولوجيا.',
    program: 'Education',
    featured: true,
    published: true,
  },
  {
    id: '3',
    title: 'Nourishing Communities, Building Futures',
    titleAr: 'تغذية المجتمعات وبناء المستقبل',
    content: 'Our food assistance program goes beyond providing meals. We teach families sustainable agriculture techniques. The results speak for themselves: 80% of families now achieve food security within one year.',
    contentAr: 'تتجاوز برنامج المساعدة الغذائية الخاص بنا مجرد توفير الوجبات. نعلم العائلات تقنيات الزراعة المستدامة. تتحدث النتائج عن نفسها: 80٪ من العائلات تحقق الأمن الغذائي الآن خلال عام واحد.',
    program: 'Food Aid',
    featured: true,
    published: true,
  },
  {
    id: '4',
    title: 'From Dependency to Self-Reliance',
    titleAr: 'من الاعتماد على النفس إلى الاعتماد على الذات',
    content: 'Through our livelihoods program, Layla learned tailoring skills and now earns JOD 2,000 monthly from her small business. She employs 5 other women from her neighborhood.',
    contentAr: 'من خلال برنامج سبل العيش الخاص بنا، تعلمت ليلى مهارات الخياطة والآن تكسب 2000 دينار شهرياً من عملها الصغير. توظف 5 نساء أخريات من حيها.',
    program: 'Livelihoods',
    featured: true,
    published: true,
  },
  {
    id: '5',
    title: 'When Crisis Strikes, We Are There',
    titleAr: 'عندما تضرب الأزمة، نحن هنا',
    content: 'During recent emergencies, our rapid response team provided immediate assistance to 50,000 affected families. Our logistics network ensures help reaches the most remote areas within 48 hours.',
    contentAr: 'أثناء الطوارئ الأخيرة، قدمت فريق الاستجابة السريعة الخاص بنا المساعدة الفورية إلى 50000 عائلة متضررة. تضمن شبكتنا اللوجستية وصول المساعدة إلى أبعد المناطق في غضون 48 ساعة.',
    program: 'Emergency Relief',
    featured: false,
    published: true,
  },
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const program = searchParams.get('program');
    const featured = searchParams.get('featured');

    // Filter data
    let filtered = MOCK_STORIES;

    if (program) {
      filtered = filtered.filter((story) => story.program === program);
    }

    if (featured === 'true') {
      filtered = filtered.filter((story) => story.featured);
    }

    filtered = filtered.filter((story) => story.published);

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'VIEW',
          event_name: 'stories_viewed',
          metadata: { filters: { program, featured } },
        }),
      }).catch(() => null);
    } catch (e) {
      console.error('Analytics error:', e);
    }

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Stories API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stories' },
      { status: 500 }
    );
  }
}
