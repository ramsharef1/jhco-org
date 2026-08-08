import { getDictionary, type Locale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata('podcast', locale);
}

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const dict = getDictionary(locale as Locale);
  const podcastDict = dict.podcast;

  // 10 Dummy Episodes with comprehensive details
  const episodes = [
    {
      id: 1,
      title: ar ? 'الرعاية الملكية والعمل الإنساني في الأردن' : 'Royal Patronage and Humanitarian Work in Jordan',
      speaker: ar ? 'د. أحمد الخطيب' : 'Dr. Ahmad Al-Khateeb',
      speakerBio: ar ? 'رئيس مجلس إدارة الهيئة الخيرية الأردنية الهاشمية' : 'Chairman, JHCO Board of Directors',
      date: '2024-08-02',
      duration: '45:30',
      summary: ar
        ? 'في هذه الحلقة الافتتاحية، نتحدث عن أهمية الرعاية الملكية وكيف تساهم الهيئة في تقديم المساعدات الإنسانية عبر 30+ دول. يشارك د. الخطيب رؤيته للمستقبل والتحديات التي تواجه العمل الإنساني.'
        : 'In this inaugural episode, we discuss the significance of royal patronage and how JHCO delivers humanitarian aid across 30+ countries. Dr. Al-Khateeb shares his vision for the future and the challenges facing humanitarian work.',
      transcriptUrl: '#transcript-1',
      audioUrl: '#podcast-audio-1',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Khateeb',
    },
    {
      id: 2,
      title: ar ? 'قصص من الميدان: التأثير المباشر للمساعدات الإنسانية' : 'Stories from the Field: Direct Impact of Humanitarian Aid',
      speaker: ar ? 'فاطمة محمود' : 'Fatima Mahmoud',
      speakerBio: ar ? 'منسقة برنامج ميداني، سوريا' : 'Field Program Coordinator, Syria',
      date: '2024-07-26',
      duration: '38:15',
      summary: ar
        ? 'فاطمة تشارك تجاربها المباشرة في تنفيذ برامج الهيئة في سوريا، وكيف ساعدت الآلاف من العائلات على بناء حياة أفضل. تناقش التحديات والنجاحات في العمل الميداني.'
        : 'Fatima shares her direct experiences implementing JHCO programs in Syria, and how they helped thousands of families build better lives. She discusses challenges and successes in field operations.',
      transcriptUrl: '#transcript-2',
      audioUrl: '#podcast-audio-2',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Fatima',
    },
    {
      id: 3,
      title: ar ? 'التعليم كأداة للتغيير: برامج التعليم والتدريب' : 'Education as a Tool for Change: Education and Training Programs',
      speaker: ar ? 'د. محمد علي' : 'Dr. Muhammad Ali',
      speakerBio: ar ? 'مدير برامج التعليم والتدريب' : 'Director of Education and Training Programs',
      date: '2024-07-19',
      duration: '52:45',
      summary: ar
        ? 'د. علي يشرح كيف تركز الهيئة على التعليم والتدريب المهني كطريقة لتمكين المجتمعات. نتناقش عن برامج المنح الدراسية والدورات التدريبية التي غيرت حياة الآلاف.'
        : 'Dr. Ali explains how JHCO focuses on education and vocational training as a means of empowering communities. We discuss scholarship programs and training courses that transformed thousands of lives.',
      transcriptUrl: '#transcript-3',
      audioUrl: '#podcast-audio-3',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Ali',
    },
    {
      id: 4,
      title: ar ? 'الاستجابة للأزمات الإنسانية العاجلة' : 'Responding to Urgent Humanitarian Crises',
      speaker: ar ? 'علي الزعبي' : 'Ali Al-Zubi',
      speakerBio: ar ? 'مسؤول الاستجابة للطوارئ' : 'Emergency Response Officer',
      date: '2024-07-12',
      duration: '41:20',
      summary: ar
        ? 'علي يتحدث عن كيفية استجابة الهيئة بسرعة للأزمات والكوارث الإنسانية. يشارك قصصًا عن عمليات الإجلاء والإغاثة الطارئة والدعم النفسي للمتضررين.'
        : 'Ali discusses how JHCO rapidly responds to crises and humanitarian disasters. He shares stories of evacuation operations, emergency relief, and psychological support for affected populations.',
      transcriptUrl: '#transcript-4',
      audioUrl: '#podcast-audio-4',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Ali',
    },
    {
      id: 5,
      title: ar ? 'الصحة والتغذية: برامج الرعاية الصحية الشاملة' : 'Health and Nutrition: Comprehensive Healthcare Programs',
      speaker: ar ? 'د. سارة الملكاوي' : 'Dr. Sarah Al-Malki',
      speakerBio: ar ? 'مديرة برامج الصحة والتغذية' : 'Director of Health and Nutrition Programs',
      date: '2024-07-05',
      duration: '47:30',
      summary: ar
        ? 'د. سارة تتناول أهمية البرامج الصحية والغذائية في المناطق المحرومة. نتحدث عن العيادات المتنقلة، برامج التغذية للأطفال، والتوعية الصحية في المجتمعات المحلية.'
        : 'Dr. Sarah addresses the importance of health and nutrition programs in underserved areas. We discuss mobile clinics, child nutrition programs, and health awareness in local communities.',
      transcriptUrl: '#transcript-5',
      audioUrl: '#podcast-audio-5',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Sarah',
    },
    {
      id: 6,
      title: ar ? 'المرأة والتمكين الاقتصادي: دعم ريادة الأعمال النسائية' : 'Women and Economic Empowerment: Supporting Female Entrepreneurship',
      speaker: ar ? 'ليلى الصياد' : 'Layla Al-Sayad',
      speakerBio: ar ? 'منسقة برنامج تمكين المرأة' : 'Women Empowerment Program Coordinator',
      date: '2024-06-28',
      duration: '44:15',
      summary: ar
        ? 'ليلى تشاركنا كيفية قيام الهيئة بدعم المرأة من خلال برامج التدريب وتمويل المشاريع الصغيرة. تسرد قصص نجاح لنساء غيرن حياتهن من خلال ريادة الأعمال.'
        : 'Layla shares how JHCO supports women through training programs and microfinance projects. She tells success stories of women who transformed their lives through entrepreneurship.',
      transcriptUrl: '#transcript-6',
      audioUrl: '#podcast-audio-6',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Layla',
    },
    {
      id: 7,
      title: ar ? 'الشراكات الدولية والتعاون بين المنظمات' : 'International Partnerships and Inter-organizational Cooperation',
      speaker: ar ? 'د. حسن الدعيس' : 'Dr. Hassan Al-Dueis',
      speakerBio: ar ? 'مدير العلاقات الدولية' : 'Director of International Relations',
      date: '2024-06-21',
      duration: '39:45',
      summary: ar
        ? 'د. حسن يناقش أهمية التعاون الدولي في تعزيز العمل الإنساني. يتحدث عن شراكاتنا مع الأمم المتحدة والمنظمات الدولية الأخرى، وكيف تساعد هذه الشراكات في توسيع نطاق عملنا.'
        : 'Dr. Hassan discusses the importance of international cooperation in advancing humanitarian work. He talks about our partnerships with the UN and other international organizations, and how they help expand our reach.',
      transcriptUrl: '#transcript-7',
      audioUrl: '#podcast-audio-7',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Hassan',
    },
    {
      id: 8,
      title: ar ? 'التطوع والمشاركة المجتمعية: قوة التطوع الشبابي' : 'Volunteering and Community Participation: The Power of Youth Volunteering',
      speaker: ar ? 'مريم الزيدي' : 'Mariam Al-Zaidi',
      speakerBio: ar ? 'منسقة برنامج التطوع الشبابي' : 'Youth Volunteering Program Coordinator',
      date: '2024-06-14',
      duration: '36:50',
      summary: ar
        ? 'مريم تحدثنا عن دور المتطوعين الشباب في تنفيذ برامج الهيئة. تشارك قصصًا ملهمة عن شباب غيروا حياة الآخرين من خلال العمل التطوعي والخدمة المجتمعية.'
        : 'Mariam tells us about the role of young volunteers in implementing JHCO programs. She shares inspiring stories of youth who changed others\' lives through volunteering and community service.',
      transcriptUrl: '#transcript-8',
      audioUrl: '#podcast-audio-8',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Mariam',
    },
    {
      id: 9,
      title: ar ? 'الاستدامة البيئية والتنمية الخضراء' : 'Environmental Sustainability and Green Development',
      speaker: ar ? 'د. جمال الرشايدة' : 'Dr. Jamal Al-Rashaideh',
      speakerBio: ar ? 'مدير برامج التنمية المستدامة' : 'Director of Sustainable Development Programs',
      date: '2024-06-07',
      duration: '50:20',
      summary: ar
        ? 'د. جمال يناقش التزام الهيئة بالاستدامة البيئية وتغير المناخ. نتحدث عن مشاريع الطاقة النظيفة، إعادة التشجير، والمبادرات الخضراء في المجتمعات المحلية.'
        : 'Dr. Jamal discusses JHCO\'s commitment to environmental sustainability and climate change. We talk about clean energy projects, reforestation, and green initiatives in local communities.',
      transcriptUrl: '#transcript-9',
      audioUrl: '#podcast-audio-9',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Jamal',
    },
    {
      id: 10,
      title: ar ? 'الشفافية والمسؤولية: كيف نقيس التأثير الحقيقي' : 'Transparency and Accountability: How We Measure Real Impact',
      speaker: ar ? 'د. نور الموسى' : 'Dr. Noor Al-Mousa',
      speakerBio: ar ? 'مديرة قسم المراقبة والتقييم' : 'Director of Monitoring and Evaluation',
      date: '2024-05-31',
      duration: '43:10',
      summary: ar
        ? 'د. نور تتناول أهمية الشفافية والمسؤولية في العمل الإنساني. نناقش كيف تقيس الهيئة تأثير برامجها، وكيف تضمن استخدام الأموال بفعالية لصالح المستفيدين.'
        : 'Dr. Noor addresses the importance of transparency and accountability in humanitarian work. We discuss how JHCO measures program impact and ensures funds are used effectively for beneficiaries.',
      transcriptUrl: '#transcript-10',
      audioUrl: '#podcast-audio-10',
      speakerImage: 'https://via.placeholder.com/100/0a1428/ffffff?text=Dr.+Noor',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1428 0%, #142850 100%)',
        padding: '80px 32px',
        color: 'white',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ fontSize: '14px', fontWeight: '600', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {podcastDict.label}
          </span>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '16px 0 32px 0', fontFamily: 'Georgia, serif' }}>
            {podcastDict.title}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '700px', opacity: '0.95' }}>
            {podcastDict.subtitle}
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section style={{
        padding: '60px 32px',
        backgroundColor: '#f9f7f4',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '40px', fontFamily: 'Georgia, serif', color: '#0a1428' }}>
            {podcastDict.subscribe}
          </h2>

          {/* Subscribe Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <a href="#apple-podcasts" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#000000',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              🍎 {ar ? 'Apple Podcasts' : 'Apple Podcasts'}
            </a>
            <a href="#spotify" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#1DB954',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              ♪ Spotify
            </a>
            <a href="#google-podcasts" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#EA4335',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              ▶ {ar ? 'Google Podcasts' : 'Google Podcasts'}
            </a>
            <a href="#amazon-music" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#146EB4',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              ♫ Amazon Music
            </a>
          </div>

          {/* RSS Feed */}
          <div style={{
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
              {podcastDict.rssFeed}:
            </p>
            <code style={{
              fontSize: '12px',
              color: '#0a1428',
              wordBreak: 'break-all',
              fontFamily: 'monospace'
            }}>
              {ar ? 'https://jhco.org/ar/podcast/feed.xml' : 'https://jhco.org/en/podcast/feed.xml'}
            </code>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section style={{
        padding: '80px 32px',
        backgroundColor: 'white',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '50px', fontFamily: 'Georgia, serif', color: '#0a1428' }}>
            {podcastDict.latestEpisodes}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {episodes.map((episode) => (
              <article key={episode.id} style={{
                borderBottom: '1px solid #e8e4db',
                paddingBottom: '40px',
                scrollMarginTop: '100px'
              }} id={`episode-${episode.id}`}>

                {/* Episode Header */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: ar ? 'wrap-reverse' : 'wrap' }}>
                  <img
                    src={episode.speakerImage}
                    alt={episode.speaker}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      backgroundColor: '#e8e4db'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '22px', fontWeight: '600', margin: '0 0 8px 0', color: '#0a1428' }}>
                      {episode.title}
                    </h3>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
                      <strong>{episode.speaker}</strong> • {episode.speakerBio}
                    </p>
                    <p style={{ margin: '0', fontSize: '13px', color: '#999' }}>
                      {podcastDict.published}: {new Date(episode.date).toLocaleDateString(ar ? 'ar-JO' : 'en-US')} • {podcastDict.duration}: {episode.duration}
                    </p>
                  </div>
                </div>

                {/* Episode Summary */}
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#3d3d3d', margin: '20px 0' }}>
                  {episode.summary}
                </p>

                {/* Audio Player Placeholder */}
                <div style={{
                  backgroundColor: '#f9f7f4',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '2px solid #e8e4db',
                  textAlign: ar ? 'right' : 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '24px' }}>▶</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#666', fontWeight: '600' }}>
                        {ar ? 'مشغل الصوت' : 'Audio Player'}
                      </p>
                      <div style={{
                        height: '4px',
                        backgroundColor: '#ddd',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          backgroundColor: '#0a1428',
                          width: '35%'
                        }}></div>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#666', whiteSpace: 'nowrap' }}>
                      {episode.duration}
                    </span>
                  </div>
                  <p style={{ margin: '0', fontSize: '11px', color: '#999' }}>
                    {ar ? 'للاستماع إلى الحلقة الكاملة، استخدم منصة البودكاست المفضلة لديك' : 'To listen to the full episode, use your favorite podcast platform'}
                  </p>
                </div>

                {/* Episode Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
                  <a href={episode.transcriptUrl} style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#0a1428',
                    color: 'white',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'opacity 0.3s'
                  }}>
                    {podcastDict.transcript}
                  </a>
                  <a href={episode.audioUrl} style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#0a1428',
                    border: '1px solid #0a1428',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 0.3s'
                  }}>
                    {podcastDict.downloadEpisode}
                  </a>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#0a1428',
                    border: '1px solid #0a1428',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    {podcastDict.shareEpisode}
                  </button>
                </div>

                {/* Speaker Info Box */}
                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  backgroundColor: '#f9f7f4',
                  borderRadius: '8px',
                  borderLeft: ar ? 'none' : '4px solid #0a1428',
                  borderRight: ar ? '4px solid #0a1428' : 'none'
                }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#666', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    {podcastDict.speakerInfo}
                  </p>
                  <p style={{ fontSize: '14px', color: '#0a1428', margin: '0 0 4px 0', fontWeight: '600' }}>
                    {episode.speaker}
                  </p>
                  <p style={{ fontSize: '13px', color: '#666', margin: '0' }}>
                    {episode.speakerBio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section style={{
        padding: '60px 32px',
        backgroundColor: '#0a1428',
        color: 'white',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
            {ar ? 'لا تفوت أي حلقة' : 'Don\'t Miss Any Episode'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', opacity: '0.9' }}>
            {ar
              ? 'اشترك في البودكاست الخاص بنا على منصتك المفضلة واحصل على إخطارات بكل حلقة جديدة تتناول قصص التأثير والتميز الإنساني.'
              : 'Subscribe to our podcast on your favorite platform and get notifications for every new episode featuring stories of impact and humanitarian excellence.'
            }
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="#apple-podcasts" style={{
              padding: '12px 28px',
              backgroundColor: 'white',
              color: '#0a1428',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              {ar ? 'اشترك الآن' : 'Subscribe Now'}
            </a>
            <a href="#rss" style={{
              padding: '12px 28px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              {ar ? 'خلاصة RSS' : 'RSS Feed'}
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section style={{
        padding: '40px 32px',
        backgroundColor: '#f9f7f4',
        textAlign: ar ? 'right' : 'left',
        direction: ar ? 'rtl' : 'ltr'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', marginBottom: '16px' }}>
                {ar ? 'حول البودكاست' : 'About the Podcast'}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#3d3d3d', margin: '0' }}>
                {ar
                  ? 'سلسلة محادثات شهرية تستكشف عمل الهيئة الخيرية الأردنية الهاشمية في مجال العمل الإنساني والتنمية المستدامة.'
                  : 'A monthly conversation series exploring the work of JHCO in humanitarian aid and sustainable development.'
                }
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', marginBottom: '16px' }}>
                {ar ? 'التكرار' : 'Frequency'}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#3d3d3d', margin: '0' }}>
                {ar
                  ? 'حلقة جديدة كل شهر، متاحة على جميع منصات البودكاست الرئيسية.'
                  : 'New episode every month, available on all major podcast platforms.'
                }
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666', marginBottom: '16px' }}>
                {ar ? 'الاتصال' : 'Contact'}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#3d3d3d', margin: '0' }}>
                podcast@jhco.org<br />
                {ar ? '+962 6 465 3000' : '+962 6 465 3000'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
